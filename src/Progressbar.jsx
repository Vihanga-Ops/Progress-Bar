import { useState, useEffect } from "react";

export default function ProgressBar() {
  const [percentage, setPercentage] = useState(0);

  // useEffect drives the progression from 0 to 100
  useEffect(() => {
    if (percentage >= 100) return;

    const interval = setInterval(() => {
      setPercentage((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [percentage]);

  const isComplete = percentage >= 100;

  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "#f0f4ff",
      fontFamily: "'Segoe UI', sans-serif",
    }}>
      <div style={{
        background: "#ffffff",
        borderRadius: 16,
        padding: "2.5rem 2rem",
        width: "100%",
        maxWidth: 480,
        boxShadow: "0 8px 30px rgba(0,0,0,0.1)",
        textAlign: "center",
      }}>

        {/* Title */}
        <h2 style={{ margin: "0 0 0.5rem", fontSize: "1.4rem", color: "#1e293b" }}>
          Progress Bar
        </h2>

        {/* Status: Loading / Complete */}
        <p style={{
          margin: "0 0 1.5rem",
          fontSize: "1rem",
          fontWeight: 600,
          color: isComplete ? "#22c55e" : "#6366f1",
        }}>
          {isComplete ? "Complete" : "Loading"}
        </p>

        {/* Bar Track */}
        <div style={{
          width: "100%",
          height: 24,
          background: "#e2e8f0",
          borderRadius: 99,
          overflow: "hidden",
          marginBottom: "1rem",
        }}>
          {/* Bar Fill */}
          <div style={{
            height: "100%",
            width: `${percentage}%`,
            background: isComplete ? "#22c55e" : "#6366f1",
            borderRadius: 99,
            transition: "width 0.05s linear, background 0.3s ease",
          }} />
        </div>

        {/* Percentage */}
        <p style={{
          margin: 0,
          fontSize: "1.5rem",
          fontWeight: 800,
          color: isComplete ? "#22c55e" : "#6366f1",
        }}>
          {percentage}%
        </p>

      </div>
    </div>
  );
}