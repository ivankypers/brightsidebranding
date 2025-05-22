import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

type ContactFormData = {
  name: string;
  emailOrTelegram: string;
  message: string;
};

const MAX_NAME_LENGTH = 100;
const MAX_EMAIL_OR_TELEGRAM_LENGTH = 100;
const MAX_MESSAGE_LENGTH = 1000;

// Простая функция для экранирования символов, которые могут быть специальными в Telegram Markdown V2,
// а также HTML-скобок для дополнительной безопасности.
function sanitizeForTelegram(text: string): string {
  if (typeof text !== "string") return "";
  return text
    .replace(/([_*[\]()\[\]~`>#+\-=|{}.!])/g, "\\$1") // Экранирование специальных символов Markdown V2
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

// Функция для базовой проверки формата email или Telegram username
function isValidEmailOrTelegram(input: string): boolean {
  // Простая проверка на email (очень базовая, для более строгой используйте спец. библиотеки)
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  // Проверка на Telegram username (начинается с @, затем 5-32 буквенно-цифровых символов или подчеркиваний)
  const telegramRegex = /^@[a-zA-Z0-9_]{5,32}$/;
  return emailRegex.test(input) || telegramRegex.test(input);
}

type ApiResponse = {
  success: boolean;
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse>
) {
  if (req.method !== "POST") {
    return res
      .status(405)
      .json({ success: false, message: "Метод не разрешен" });
  }

  let { name, emailOrTelegram, message } = req.body as ContactFormData;

  // 1. Проверка на наличие обязательных полей
  if (!name || !emailOrTelegram || !message) {
    return res.status(400).json({
      success: false,
      message: "Пожалуйста, заполните все обязательные поля",
    });
  }

  // Приведение к строке на случай, если придут другие типы (хотя ContactFormData типизирует)
  // Это также обеспечивает, что .length будет работать корректно.
  name = String(name);
  emailOrTelegram = String(emailOrTelegram);
  message = String(message);

  // 2. Проверка длины полей
  if (name.length > MAX_NAME_LENGTH) {
    return res.status(400).json({
      success: false,
      message: `Имя не должно превышать ${MAX_NAME_LENGTH} символов.`,
    });
  }
  if (emailOrTelegram.length > MAX_EMAIL_OR_TELEGRAM_LENGTH) {
    return res.status(400).json({
      success: false,
      message: `Email или Telegram не должен превышать ${MAX_EMAIL_OR_TELEGRAM_LENGTH} символов.`,
    });
  }
  if (message.length > MAX_MESSAGE_LENGTH) {
    return res.status(400).json({
      success: false,
      message: `Сообщение не должно превышать ${MAX_MESSAGE_LENGTH} символов.`,
    });
  }

  // 2.1 Дополнительная проверка формата для emailOrTelegram
  if (!isValidEmailOrTelegram(emailOrTelegram)) {
    return res.status(400).json({
      success: false,
      message:
        "Пожалуйста, введите корректный Email или Telegram username (например, @username).",
    });
  }

  // 3. Санитизация входных данных
  const sanitizedName = sanitizeForTelegram(name);
  const sanitizedEmailOrTelegram = sanitizeForTelegram(emailOrTelegram);
  const sanitizedMessage = sanitizeForTelegram(message);

  const notifyByTelegram = process.env.NOTIFY_BY_TELEGRAM === "true";

  if (!notifyByTelegram) {
    console.warn("Внимание: не настроен ни один метод уведомления");
    return res
      .status(500)
      .json({ success: false, message: "Ошибка конфигурации сервера" });
  }

  try {
    const notificationPromises = [];

    if (notifyByTelegram) {
      notificationPromises.push(
        sendTelegramMessage(
          sanitizedName,
          sanitizedEmailOrTelegram,
          sanitizedMessage
        )
      );
    }

    await Promise.all(notificationPromises);

    res.status(200).json({
      success: true,
      message: "Форма успешно отправлена",
    });
  } catch (error) {
    console.error("Ошибка при отправке уведомлений:", error);
    res.status(500).json({
      success: false,
      message: "Произошла ошибка при обработке вашего запроса",
    });
  }
}

async function sendTelegramMessage(
  name: string,
  emailOrTelegram: string,
  message: string
): Promise<void> {
  const { TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID } = process.env;

  if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
    // Важно: не раскрывать детали ошибки клиенту, но логировать на сервере
    console.error(
      "Отсутствуют необходимые переменные окружения для отправки сообщения в Telegram"
    );
    throw new Error("Ошибка конфигурации сервера для уведомлений."); // Эта ошибка пойдет в общий catch в handler
  }

  // Данные name, emailOrTelegram, message уже должны быть санированы перед вызовом этой функции
  const text = `Новая заявка с формы:

Имя и Компания: ${name}
Email или Telegram: ${emailOrTelegram}
Сообщение: ${message}`;

  try {
    await axios.post(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        chat_id: TELEGRAM_CHAT_ID,
        text,
        // Если вы планируете использовать Markdown или HTML форматирование в Telegram,
        // укажите parse_mode: 'MarkdownV2' или parse_mode: 'HTML'.
        // В этом случае, убедитесь, что санитизация соответствует выбранному parse_mode.
        // По умолчанию (без parse_mode) текст отправляется как обычный текст.
      }
    );
  } catch (error) {
    console.error("Ошибка при отправке сообщения в Telegram:", error);
    if (axios.isAxiosError(error) && error.response) {
      console.error("Telegram API Error Details:", error.response.data);
    }
    throw new Error("Не удалось отправить уведомление в Telegram."); // Эта ошибка также будет поймана в handler
  }
}
