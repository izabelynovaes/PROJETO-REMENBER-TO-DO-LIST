// src/components/Timer.js
import { useEffect, useState } from "react";
import "./Timer.css";

const Timer = () => {
  const initialTime = 25 * 60; // 25 minutos em segundos
  const [time, setTime] = useState(initialTime); // Tempo restante
  const [isRunning, setIsRunning] = useState(true); // Estado para saber se o timer está em execução

  // Lógica do cronômetro
  useEffect(() => {
    let timerId;
    if (isRunning && time > 0) {
      timerId = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    }

    return () => clearInterval(timerId); // Cleanup ao desmontar o componente ou pausar
  }, [isRunning, time]);

  // Função para formatar o tempo restante em MM:SS
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(remainingSeconds).padStart(2, "0")}`;
  };

  // Função de pausar
  const handlePause = () => {
    setIsRunning(false);
  };

  // Função de reiniciar
  const handleReset = () => {
    setTime(initialTime);
    setIsRunning(true);
  };

  return (
    <div className="timer">
      <span>{formatTime(time)}</span>
      <div className="timer-buttons">
        {/* Botão de Pausar */}
        <button onClick={handlePause} disabled={!isRunning}>Pausar</button>
        {/* Botão de Reiniciar */}
        <button onClick={handleReset}>Reiniciar</button>
      </div>
    </div>
  );
};

export default Timer;
