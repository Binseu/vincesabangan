"use client";

import { useState, useRef } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<
    "idle" | "sending" | "sent" | "error"
  >("idle");
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const msgRef = useRef<HTMLTextAreaElement>(null);
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const handleSend = async () => {
    const name = nameRef.current?.value.trim() || "";
    const email = emailRef.current?.value.trim() || "";
    const message = msgRef.current?.value.trim() || "";

    let valid = true;
    if (!name) {
      setNameError(true);
      valid = false;
      setTimeout(() => setNameError(false), 1500);
    }
    if (!email) {
      setEmailError(true);
      valid = false;
      setTimeout(() => setEmailError(false), 1500);
    }
    if (!valid) return;

    setStatus("sending");
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          access_key: "e07ba16a-01c4-412f-be07-a11130ed5fe6",
          subject: "New Submission from Portfolio",
          name,
          email,
          message
        })
      });

      if (response.status === 200) {
        setStatus("sent");
        if (nameRef.current) nameRef.current.value = "";
        if (emailRef.current) emailRef.current.value = "";
        if (msgRef.current) msgRef.current.value = "";
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  const buttonLabel = {
    idle: "Send Message →",
    sending: "Sending...",
    sent: "Sent ✓",
    error: "Failed to Send"
  }[status];

  return (
    <div className="contact-form">
      <div className="form-group">
        <label>Your Name</label>
        <input
          type="text"
          ref={nameRef}
          placeholder="Full name"
          style={{ borderColor: nameError ? "#e63946" : undefined }}
        />
      </div>
      <div className="form-group">
        <label>Email Address</label>
        <input
          type="email"
          ref={emailRef}
          placeholder="you@email.com"
          style={{ borderColor: emailError ? "#e63946" : undefined }}
        />
      </div>
      <div className="form-group">
        <label>Message</label>
        <textarea ref={msgRef} placeholder="Tell me about your project..." />
      </div>
      <button
        className="btn-send"
        onClick={handleSend}
        disabled={status === "sending"}
        style={{ opacity: status === "sending" ? 0.6 : 1 }}
      >
        {buttonLabel}
      </button>
      <div className={`form-success ${status === "sent" ? "show" : ""}`}>
        Thank you! I&apos;ll be in touch within 24 hours.
      </div>
    </div>
  );
}
