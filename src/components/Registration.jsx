import React, { useState } from "react";

export default function Registration({ onSubmit }) {
    const [name, setName] = useState("");
    const [group, setGroup] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name && group) {
            onSubmit({ name, group });
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Регистрация</h2>
            <input
                type="text"
                placeholder="Имя"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="text"
                placeholder="Группа"
                value={group}
                onChange={(e) => setGroup(e.target.value)}
            />
            <button type="submit">Начать тест</button>
        </form>
    );
}
