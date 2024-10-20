import styles from "@/app/styles/Service.module.scss";
import RequestInput from "@/app/components/shared/RequestInput";
import RequestTextarea from "@/app/components/shared/RequestTextarea";
import React, {useState, useEffect} from "react";

import {useDispatch, useSelector} from "react-redux";
import {setName, setMessage, setEmailOrTelegram, resetForm} from "@/redux/slices/RequestsSlice";
import {RootState} from "@/redux/store";


const ContactForm: React.FC = () => {
    const dispatch = useDispatch();
    const formData = useSelector((state: RootState) => state.requests);

    const [name, setNameLocal] = useState('');
    const [emailOrTelegram, setEmailOrTelegramLocal] = useState('');
    const [message, setMessageLocal] = useState('');



    const [status, setStatus] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        switch (name) {
            case 'name':
                setNameLocal(value);
                dispatch(setName(value));
                break;
            case 'emailOrTelegram':
                setEmailOrTelegramLocal(value);
                dispatch(setEmailOrTelegram(value));
                break;
            case 'message':
                setMessageLocal(value);
                dispatch(setMessage(value));
                break;
            default:
                break;
        }
    };

    const handleReset = () => {
        dispatch(resetForm());
        setNameLocal('');
        setEmailOrTelegramLocal('');
        setMessageLocal('');
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
                    handleReset();
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
        <form onSubmit={handleSubmit} id='requestForm'>
            <div className={styles.inputs}>
                <div className="flex flex-col gap-[24px]">
                    <RequestInput
                        title="ИМЯ & КОМПАНИЯ"
                        placeholder="JOHN, COMPANY"
                        name="name"
                        value={name}
                        onChange={handleChange}
                    />
                    <RequestInput
                        title="EMAIL или TELEGRAM"
                        placeholder="@USERNAME"
                        name="emailOrTelegram"
                        value={emailOrTelegram}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <RequestTextarea
                        title="С ЧЕМ МЫ МОЖЕМ ВАМ ПОМОЧЬ?"
                        placeholder="СОЗДАНИЕ БОТА, ДИЗАЙН И Т.Д."
                        name="message"
                        value={message}
                        onChange={handleChange}
                    />
                </div>
            </div>
            <div>
                <button type="submit" className={styles.formButton}>
                    {status ? `${status}` : ' ПОЛУЧИТЬ БЕСПЛАТНЫЙ ПЛАН ПРОЕКТА'}
                </button>
            </div>
        </form>

    )
}

export default ContactForm