import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
import axios from 'axios';

type ContactFormData = {
    name: string;
    emailOrTelegram: string;
    message: string;
};

type ApiResponse = {
    success: boolean;
    message: string;
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<ApiResponse>
) {
    if (req.method !== 'POST') {
        return res.status(405).json({ success: false, message: 'Метод не разрешен' });
    }

    const { name, emailOrTelegram, message } = req.body as ContactFormData;

    if (!name || !emailOrTelegram || !message) {
        return res.status(400).json({
            success: false,
            message: 'Пожалуйста, заполните все обязательные поля'
        });
    }

    const notifyByTelegram = process.env.NOTIFY_BY_TELEGRAM === 'true';

    if (!notifyByTelegram) {
        console.warn('Внимание: не настроен ни один метод уведомления');
        return res.status(500).json({ success: false, message: 'Ошибка конфигурации сервера' });
    }

    try {
        const notificationPromises = [];

        if (notifyByTelegram) {
            notificationPromises.push(sendTelegramMessage(name, emailOrTelegram, message));
        }

        await Promise.all(notificationPromises);

        res.status(200).json({
            success: true,
            message: 'Форма успешно отправлена'
        });
    } catch (error) {
        console.error('Ошибка при отправке уведомлений:', error);
        res.status(500).json({
            success: false,
            message: 'Произошла ошибка при обработке вашего запроса'
        });
    }
}

async function sendEmail(name: string, emailOrTelegram: string, message: string): Promise<void> {
    const { EMAIL_USER, EMAIL_PASS, RECIPIENT_EMAIL } = process.env;

    if (!EMAIL_USER || !EMAIL_PASS || !RECIPIENT_EMAIL) {
        throw new Error('Отсутствуют необходимые переменные окружения для отправки email');
    }

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: EMAIL_USER,
            pass: EMAIL_PASS,
        },
    });

    const mailOptions = {
        from: EMAIL_USER,
        to: RECIPIENT_EMAIL,
        subject: 'Новая заявка с формы',
        text: `Имя и Компания: ${name}\nEmail или Telegram: ${emailOrTelegram}\nСообщение: ${message}`,
    };

    await transporter.sendMail(mailOptions);
}

async function sendTelegramMessage(name: string, emailOrTelegram: string, message: string): Promise<void> {
    const { TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID } = process.env;

    if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
        throw new Error('Отсутствуют необходимые переменные окружения для отправки сообщения в Telegram');
    }

    const text = `Новая заявка с формы:\n\nИмя и Компания: ${name}\nEmail или Telegram: ${emailOrTelegram}\nСообщение: ${message}`;

    await axios.post(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
        chat_id: TELEGRAM_CHAT_ID,
        text,
    });
}
