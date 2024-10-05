import styles from "@/app/styles/Service.module.scss";
import RequestInput from "@/app/components/shared/RequestInput";
import RequestTextarea from "@/app/components/shared/RequestTextarea";
import React, {useState} from "react";




const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        emailOrTelegram: '',
        message: '',
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
            console.log(formData)

            if (response.ok) {
                setStatus('Заявка успешно отправлена!');
                setFormData({ name: '', emailOrTelegram: '', message: '' });
            } else {
                const data = await response.json();
                setStatus(data.message || 'Ошибка при отправке заявки.');
            }
        } catch (error) {
            console.error(error);
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