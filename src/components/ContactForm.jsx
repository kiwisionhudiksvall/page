import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Skickar...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.success) setStatus("Tack! Ditt meddelande har skickats.");
      else setStatus("Ett fel uppstod.");
    } catch {
      setStatus("Serverfel, försök igen senare.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        width: "100%",
        maxWidth: "400px",
        margin: "2rem auto",
      }}
    >
      <input
        type="text"
        name="name"
        placeholder="Ditt namn"
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Din e-post"
        onChange={handleChange}
        required
      />
      <textarea
        name="message"
        placeholder="Ditt meddelande..."
        rows="5"
        onChange={handleChange}
        required
      />
      <button type="submit">Skicka</button>
      {status && <p>{status}</p>}
    </form>
  );
}
