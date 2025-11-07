import { useState } from "react";
import "./App.css";

function App() {
  const [open, setOpen] = useState(true);

  return (
    <div className="chat-widget" aria-live="polite">
      {/* Toggle Button */}
      <button
        className="chat-toggle"
        aria-label={open ? "Close chat" : "Open chat"}
        aria-expanded={open}
        onClick={() => setOpen(v => !v)}
      >
        {open ? "✖" : "💬"}
      </button>

      {/* Chat Window */}
      <div className={`chat-window ${open ? "open" : "closed"}`} role="dialog" aria-modal="false">
        <div className="chat-header">
          <div className="chat-title">Assistant</div>
          <button className="chat-close" aria-label="Close chat" onClick={() => setOpen(false)}>
            ✖
          </button>
        </div>
        <div className="chat-content">
          <div className="chat-iframe-wrap">
            <iframe
              title="Chatbot"
              src="https://studio.pickaxe.co/_embed/T4G3TICSIT?d=deployment-c973f0ab-1dd5-458d-8c84-cf98c4b7be13"
              frameBorder={0}
              allow="microphone"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
