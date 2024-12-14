import React, { useState } from "react";

const faqData = [
  { question: "С чего начать?", answer: "Начните с выбора направления в разделе Explore Tracks." },
  { question: "Нужны ли математика и английский?", answer: "Знание математики и английского языка облегчит обучение, но не является обязательным." },
  { question: "Какой язык программирования выбрать первым?", answer: "Рекомендуем начать с Python или JavaScript, так как они просты для новичков." },
];

function ContactFAQ() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000); // Сбрасываем статус через 3 секунды
  };

  return (
    <div className="contact-faq-container">
      <h1 className="page-title">Контакты и FAQ</h1>

      {/* FAQ Section */}
      <div className="faq-section">
        <h2>Часто задаваемые вопросы</h2>
        <div className="faq-list">
          {faqData.map((faq, index) => (
            <details key={index} className="faq-item">
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="contact-form-section">
        <h2>Форма обратной связи</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Ваше имя"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Ваш email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <textarea
            name="message"
            placeholder="Ваше сообщение"
            value={formData.message}
            onChange={handleInputChange}
            required
          ></textarea>
          <button type="submit">Отправить</button>
        </form>
        {submitted && <p className="success-message">Ваше сообщение успешно отправлено!</p>}
      </div>

      {/* Developer Contacts Section */}
      <div className="developer-contacts">
        <h2>Контакты разработчиков</h2>
        <p>Email: <a href="mailto:developer@example.com">developer@example.com</a></p>
        <p>GitHub: <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">github.com/yourprofile</a></p>
        <p>LinkedIn: <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">linkedin.com/in/yourprofile</a></p>
      </div>
    </div>
  );
}

export default ContactFAQ;
