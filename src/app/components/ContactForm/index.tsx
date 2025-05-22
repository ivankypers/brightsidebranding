import styles from "@/app/styles/Service.module.scss";
import RequestInput from "@/app/components/shared/RequestInput";
import RequestTextarea from "@/app/components/shared/RequestTextarea";
import React, { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  setName,
  setMessage,
  setEmailOrTelegram,
  resetForm,
} from "@/redux/slices/RequestsSlice";
import { RootState } from "@/redux/store";

// Соответствуют значениям на бэкенде
const MAX_NAME_LENGTH = 100;
const MAX_EMAIL_OR_TELEGRAM_LENGTH = 100;
const MAX_MESSAGE_LENGTH = 1000;

const ContactForm: React.FC = () => {
  const dispatch = useDispatch();
  const formData = useSelector((state: RootState) => state.requests);

  const [nameLocal, setNameLocal] = useState("");
  const [emailOrTelegramLocal, setEmailOrTelegramLocal] = useState("");
  const [messageLocal, setMessageLocal] = useState("");

  // Состояния для ошибок валидации
  const [nameError, setNameError] = useState("");
  const [emailOrTelegramError, setEmailOrTelegramError] = useState("");
  const [messageError, setMessageError] = useState("");

  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false); // Для отключения кнопки

  const validateField = (fieldName: string, value: string): string => {
    let error = "";
    switch (fieldName) {
      case "name":
        if (value.length > MAX_NAME_LENGTH) {
          error = `Имя не должно превышать ${MAX_NAME_LENGTH} символов.`;
        }
        break;
      case "emailOrTelegram":
        if (value.length > MAX_EMAIL_OR_TELEGRAM_LENGTH) {
          error = `Email/Telegram не должен превышать ${MAX_EMAIL_OR_TELEGRAM_LENGTH} символов.`;
        }
        break;
      case "message":
        if (value.length > MAX_MESSAGE_LENGTH) {
          error = `Сообщение не должно превышать ${MAX_MESSAGE_LENGTH} символов.`;
        }
        break;
      default:
        break;
    }
    return error;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    let error = "";

    switch (name) {
      case "name":
        setNameLocal(value);
        dispatch(setName(value));
        error = validateField(name, value);
        setNameError(error);
        break;
      case "emailOrTelegram":
        setEmailOrTelegramLocal(value);
        dispatch(setEmailOrTelegram(value));
        error = validateField(name, value);
        setEmailOrTelegramError(error);
        break;
      case "message":
        setMessageLocal(value);
        dispatch(setMessage(value));
        error = validateField(name, value);
        setMessageError(error);
        break;
      default:
        break;
    }
    // Сбрасываем общее сообщение о статусе, если пользователь начинает исправлять поля
    if (status && status !== "Отправка...") {
      setStatus("");
    }
  };

  const handleReset = () => {
    dispatch(resetForm());
    setNameLocal("");
    setEmailOrTelegramLocal("");
    setMessageLocal("");
    setNameError("");
    setEmailOrTelegramError("");
    setMessageError("");
    setStatus("");
    setIsSubmitting(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Дополнительная проверка перед отправкой
    const currentNameError = validateField("name", formData.name || "");
    setNameError(currentNameError);
    const currentEmailError = validateField(
      "emailOrTelegram",
      formData.emailOrTelegram || ""
    );
    setEmailOrTelegramError(currentEmailError);
    const currentMessageError = validateField(
      "message",
      formData.message || ""
    );
    setMessageError(currentMessageError);

    if (currentNameError || currentEmailError || currentMessageError) {
      setStatus("Пожалуйста, исправьте ошибки в форме.");
      return;
    }

    if (!formData.name || !formData.emailOrTelegram || !formData.message) {
      setStatus("Пожалуйста, заполните все обязательные поля.");
      return;
    }

    setIsSubmitting(true);
    setStatus("Отправка...");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const contentType = response.headers.get("content-type");
      if (contentType && contentType.indexOf("application/json") !== -1) {
        const data = await response.json();
        if (response.ok) {
          setStatus("Заявка успешно отправлена!");
          handleReset(); // handleReset уже устанавливает setIsSubmitting(false)
        } else {
          setStatus(data.message || "Ошибка при отправке заявки.");
          setIsSubmitting(false);
        }
      } else {
        console.error("Received non-JSON response:", await response.text());
        setStatus("Ошибка сервера. Пожалуйста, попробуйте позже.");
        setIsSubmitting(false);
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("Ошибка при отправке заявки.");
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} id="requestForm">
      <div className={styles.inputs}>
        <div className="flex flex-col gap-[24px]">
          <RequestInput
            title="ИМЯ & КОМПАНИЯ"
            placeholder="JOHN, COMPANY"
            name="name"
            value={nameLocal}
            onChange={handleChange}
          />
          {nameError && <p className="text-red-500 text-sm">{nameError}</p>}
          <RequestInput
            title="EMAIL или TELEGRAM"
            placeholder="@USERNAME"
            name="emailOrTelegram"
            value={emailOrTelegramLocal}
            onChange={handleChange}
          />
          {emailOrTelegramError && (
            <p className="text-red-500 text-sm">{emailOrTelegramError}</p>
          )}
        </div>
        <div>
          <RequestTextarea
            title="С ЧЕМ МЫ МОЖЕМ ВАМ ПОМОЧЬ?"
            placeholder="СОЗДАНИЕ БОТА, ДИЗАЙН И Т.Д."
            name="message"
            value={messageLocal}
            onChange={handleChange}
          />
          {messageError && (
            <p className="text-red-500 text-sm">{messageError}</p>
          )}
        </div>
      </div>
      <div>
        <button
          type="submit"
          className={styles.formButton}
          disabled={isSubmitting}
        >
          {isSubmitting
            ? "Отправка..."
            : status && status !== "Отправка..."
            ? status
            : " ПОЛУЧИТЬ БЕСПЛАТНЫЙ ПЛАН ПРОЕКТА"}
        </button>
        {status &&
          status !== "Отправка..." &&
          status !== "Заявка успешно отправлена!" && (
            <p className="text-red-500 text-sm mt-2">{status}</p>
          )}
      </div>
    </form>
  );
};

export default ContactForm;
