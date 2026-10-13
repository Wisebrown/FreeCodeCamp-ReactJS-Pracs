import { useState, useEffect, useRef } from "react";

export const OTPGenerator = () => {
  const [password, setPassword] = useState("");
  const [countdown, setCountdown] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  // const [disablebtn, setDisablebtn] = useState(false);

  const handlePasswordGenerator = () => {
    const digits = "0192837465";
    let passwordGenerated = "";
    for (let i = 0; i < 6; i++) {
      passwordGenerated += digits[Math.floor(Math.random() * digits.length)];
    }
    setPassword(passwordGenerated);
    setCountdown(5);
    setIsTimerRunning(true);
    document.querySelector("button").style.backgroundColor = "";
  };

  useEffect(() => {
    console.log("DOM RENDERED!");
    let timer;
    if (isTimerRunning && countdown > 0) {
      timer = setInterval(() => {
        setCountdown((c) => c - 1);
      }, 1000);
    } else if (countdown === 0) {
      setIsTimerRunning(false);
    }

    return () => clearInterval(timer);
  }, [countdown, isTimerRunning]);

  const timerText = () => {
    if (password === "") {
      return " ";
    }
    if (isTimerRunning === true) {
      return `Expires in: ${countdown} seconds`;
    }
    return "OTP expired. Click the button to generate a new OTP.";
  };
  return (
    <div className="container text-white">
      <h1 id="otp-title">OTP Generator</h1>
      <h2 id="otp-display">
        {password.length != 0 ? password : "Click 'Generate OTP' to get a code"}
      </h2>
      <p id="otp-timer" aria-live="polite">
        {timerText()}
      </p>
      <button
        className="border-2 px-2.5 py-1 text-center"
        style={{
          backgroundColor:
            isTimerRunning === true ? "rgba(255,255,255,0.1)" : "transparent",
          cursor: isTimerRunning === true ? "not-allowed" : "pointer",
        }}
        id="generate-otp-button"
        onClick={handlePasswordGenerator}
        disabled={isTimerRunning}
      >
        Generate OTP
      </button>
    </div>
  );
};
