import React, { useState } from "react";

export default function Question({ data, onAnswer, index, total }) {
    const [selected, setSelected] = useState(null);
    const [confirmed, setConfirmed] = useState(false);

    // Подтверждение ответа
    const handleConfirm = () => {
        if (selected) {
            setConfirmed(true);
        }
    };

    // Переход к следующему вопросу
    const handleNext = () => {
        onAnswer(selected);
        setSelected(null);
        setConfirmed(false);
    };

    return (
        <div>
            {/* Нумерация вопросов */}
            <h4>Вопрос {index + 1} из {total}</h4>

            {/* Текст вопроса (сохраняем отступы и переносы строк) */}
            <pre style={{ background: "#f5f5f5", padding: "10px", borderRadius: "5px" }}>
                <code>
                    <strong>{data.question.split('\n')[0]}</strong>
                    {data.question.slice(data.question.indexOf('\n'))}
                </code>
            </pre>


            {/* Варианты ответов */}
            <ul>
                {data.options.map((opt, i) => (
                    <li key={i}>
                        <label>
                            <input
                                type="radio"
                                name={`answer-${index}`} // уникальное имя для группы
                                value={opt}
                                onChange={() => setSelected(opt)}
                                disabled={confirmed}
                                checked={selected === opt}
                            />
                            {opt}
                        </label>
                    </li>
                ))}
            </ul>

            {/* Кнопка пропуска (только до подтверждения) */}
            {!confirmed && (
                <button onClick={() => onAnswer(null, true)}>Пропустить</button>
            )}

            {/* Логика подтверждения / перехода */}
            {!confirmed ? (
                <button onClick={handleConfirm} disabled={!selected}>
                    Подтвердить
                </button>
            ) : (
                <>
                    <p>
                        {selected === data.correct
                            ? "✅ Верно!"
                            : `❌ Неверно. Правильный ответ: ${data.correct}`}
                    </p>
                    <button onClick={handleNext}>Дальше</button>
                </>
            )}
        </div>
    );
}
