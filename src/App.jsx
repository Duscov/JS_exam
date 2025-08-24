import React, { useState } from "react";
import Registration from "./components/Registration";
import Question from "./components/Question";
import Result from "./components/Result";
import questions from "./questions";

export default function App() {
    const [user, setUser] = useState(null); // { name, group }
    const [currentIndex, setCurrentIndex] = useState(0);
    const [answers, setAnswers] = useState([]);

    const handleRegistration = (data) => {
        setUser(data);
    };

    const handleAnswer = (selected, skipped) => {
        const correct = selected === questions[currentIndex].correct;
        setAnswers([...answers, { selected, isCorrect: correct, skipped }]);
        setCurrentIndex(currentIndex + 1);
    };

    if (!user) {
        return <Registration onSubmit={handleRegistration} />;
    }

    if (currentIndex >= questions.length) {
        return <Result answers={answers} user={user} />;
    }

    return (
        <Question
            data={questions[currentIndex]}
            onAnswer={handleAnswer}
            index={currentIndex}
            total={questions.length}
        />
    );
}
