import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // --- función que maneja el formato dinámico ---
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/[^\d+]/g, ""); // quitar todo menos dígitos y '+'

    // si el usuario escribe sin '+', se lo agregamos automáticamente
    if (!value.startsWith("+")) value = "+" + value;

    // Si es número de EE. UU. o RD (+1)
    if (value.startsWith("+1")) {
      const digits = value.replace(/\D/g, "").slice(1); // quitar el '+1'
      if (digits.length <= 3) value = `+1 (${digits}`;
      else if (digits.length <= 6)
        value = `+1 (${digits.slice(0, 3)}) ${digits.slice(3)}`;
      else
        value = `+1 (${digits.slice(0, 3)}) ${digits.slice(
          3,
          6
        )}-${digits.slice(6, 10)}`;
    }

    setFormData({ ...formData, phone: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch(
        "https://nkjemailserver.vercel.app/api/send-email", // tu backend
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      const data = await res.json();
      if (data.success) {
        setStatus("✅ Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        setStatus(`❌ ${data.message}`);
      }
    } catch (err) {
      setStatus("❌ Error sending message. Try again later.");
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-xl rounded-xl">
      <h2 className="text-2xl font-bold mb-4">Contact Us</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-3 border rounded"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-3 border rounded"
          required
        />

        <input
          type="tel"
          name="phone"
          placeholder="Your Phone (e.g. +1 (809) 555-1234 or +34 600123456)"
          value={formData.phone}
          onChange={handlePhoneChange}
          className="w-full p-3 border rounded"
          required
          maxLength={20}
          pattern="^\\+?[0-9\\s()\\-]{7,20}$"
          title="Enter a valid international number, e.g. +1 (809) 555-1234 or +34 600123456"
        />

        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
          className="w-full p-3 border rounded"
          required
        />

        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          className="w-full p-3 border rounded h-32"
          required
        ></textarea>

        <button
          type="submit"
          className="bg-gray-700 text-white py-2 px-4 rounded hover:bg-black"
        >
          Send Message
        </button>
      </form>

      <p className="mt-4 text-sm text-gray-600">{status}</p>
    </div>
  );
};

export default ContactForm;
