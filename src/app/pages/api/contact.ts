import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
import axios from 'axios';

type Data = {
    message: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Метод не разрешен' });
    }

    const { name, emailOrTelegram, message } = req.body;
    console.log('Полученные данные:', { name, emailOrTelegram, message });

    if (!name || !emailOrTelegram || !message) {
        return res.status(400).json({ message: 'Пожалуйста, заполните все поля.' });
    }

    const notifyByEmail = process.env.NOTIFY_BY_EMAIL === 'false';
    const notifyByTelegram = process.env.NOTIFY_BY_TELEGRAM === 'true';

    if (notifyByEmail) {
        try {
            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: process.env.EMAIL_USER,
                    pass: process.env.EMAIL_PASS,
                },
            });

            const mailOptions = {
                from: process.env.EMAIL_USER,
                to: process.env.RECIPIENT_EMAIL,
                subject: 'Новая заявка с формы',
                text: `Имя и Компания: ${name}\nEmail или Telegram: ${emailOrTelegram}\nСообщение: ${message}`,
            };

            await transporter.sendMail(mailOptions);
        } catch (error) {
            console.error('Ошибка при отправке email:', error);
            return res.status(500).json({ message: 'Ошибка при отправке email' });
        }
    }


    if (notifyByTelegram) {
        try {
            const telegramToken = process.env.TELEGRAM_BOT_TOKEN;
            const chatId = process.env.TELEGRAM_CHAT_ID;
            const text = `Новая заявка с формы:\n\nИмя и Компания: ${name}\nEmail или Telegram: ${emailOrTelegram}\nСообщение: ${message}`;

            await axios.post(`https://api.telegram.org/bot${telegramToken}/sendMessage`, {
                chat_id: chatId,
                text,
            });
        } catch (error) {
            console.error('Ошибка при отправке в Telegram:', error);
            return res.status(500).json({ message: 'Ошибка при отправке в Telegram' });
        }
    }

    res.status(200).json({ message: 'Заявка успешно отправлена' });
}
