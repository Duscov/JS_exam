import React from "react";

export default function Result({ answers, user }) {
    const correct = answers.filter(a => a.isCorrect).length;
    const wrong = answers.length - correct;

    return (
        <div>
            <h2>Результаты теста</h2>
            <p>Студент: <strong>{user.name}</strong></p>
            <p>Группа: <strong>{user.group}</strong></p>
            <p>Правильных ответов: {correct}</p>
            <p>Ошибок: {wrong}</p>
        </div>
    );
}
