import styles from "@/app/styles/Service.module.scss";
import RequestInput from "@/app/components/shared/RequestInput";
import RequestTextarea from "@/app/components/shared/RequestTextarea";
import React, {useState} from "react";




const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '123',
        emailOrTelegram: '312',
        message: '312321',
    });
    const [status, setStatus] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('Отправка...');
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const contentType = response.headers.get("content-type");
            if (contentType && contentType.indexOf("application/json") !== -1) {
                const data = await response.json();
                if (response.ok) {
                    setStatus('Заявка успешно отправлена!');
                    setFormData({ name: '', emailOrTelegram: '', message: '' });
                    console.log(formData)
                } else {
                    setStatus(data.message || 'Ошибка при отправке заявки.');
                }
            } else {
                console.error("Received non-JSON response:", await response.text());
                setStatus('Ошибка сервера. Пожалуйста, попробуйте позже.');
            }
        } catch (error) {
            console.error('Error:', error);
            setStatus('Ошибка при отправке заявки.');
        }
    };


    return (
        <form onSubmit={handleSubmit}>
            <div className={styles.inputs}>
                <div className="flex flex-col gap-[24px]">
                    <RequestInput
                        title="ИМЯ & КОМПАНИЯ"
                        placeholder="JOHN, COMPANY"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                    <RequestInput
                        title="EMAIL или TELEGRAM"
                        placeholder="@USERNAME"
                        name="emailOrTelegram"
                        value={formData.emailOrTelegram}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <RequestTextarea
                        title="С ЧЕМ МЫ МОЖЕМ ВАМ ПОМОЧЬ?"
                        placeholder="СОЗДАНИЕ БОТА, ДИЗАЙН И Т.Д."
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                    />
                </div>
            </div>
            <div>
                <button type="submit" className={styles.formButton}>
                    ПОЛУЧИТЬ БЕСПЛАТНЫЙ ПЛАН ПРОЕКТА
                </button>
            </div>
            {status && <p>{status}</p>}
        </form>
    )
}

export default ContactForm