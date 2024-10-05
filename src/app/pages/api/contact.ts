import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
import axios from 'axios';

type Data = {
    message: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    if (req.method !== 'POST') {
        console.log('метод запрещён')
        return res.status(405).json({ message: 'Метод не разрешен' });
    }

    const { name, emailOrTelegram, message } = req.body;
    console.log('получены данные')

    if (!name || !emailOrTelegram || !message) {
        return res.status(400).json({ message: 'Пожалуйста, заполните все поля.' });
    }

    const notifyByEmail = process.env.NOTIFY_BY_EMAIL === 'true';
    const notifyByTelegram = process.env.NOTIFY_BY_TELEGRAM === 'true';

    if (!notifyByEmail && !notifyByTelegram) {
        console.warn('Внимание: не настроен ни один метод уведомления');
        return res.status(500).json({ message: 'Ошибка конфигурации сервера' });
    }

    const notificationPromises = [];

    if (notifyByEmail) {
        notificationPromises.push(sendEmail(name, emailOrTelegram, message));
    }

    if (notifyByTelegram) {
        notificationPromises.push(sendTelegramMessage(name, emailOrTelegram, message));
    }

    try {
        await Promise.all(notificationPromises);
        res.status(200).json({ message: 'Заявка успешно отправлена' });
    } catch (error) {
        console.error('Ошибка при отправке уведомлений:', error);
        res.status(500).json({ message: 'Ошибка при отправке уведомлений' });
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
