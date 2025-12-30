import React, { useState } from "react";
import "./FeeAdd.css";

export default function FeeAdd() {

  // 🔴 YAHAN APNI IMGBB API KEY PASTE KAR DO
  const IMGBB_KEY = "e19abcd4228e38d7c054d4e1238fab34";

  const initialForm = {
    student: "",
    father: "",
    mobile: "",
    whatsapp: "",
    email: "",
    className: "",
    address: "",
  };

  const [open, setOpen] = useState(false);
  const [form, setForm] = useState(initialForm);
  const [imageUrl, setImageUrl] = useState("");
  const [uploading, setUploading] = useState(false);

  /* ================= VALIDATION ================= */
  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email);
  const mobileValid = form.mobile.length === 10;
  const whatsappValid = form.whatsapp.length === 10;

  const isFormValid =
    form.student &&
    form.father &&
    mobileValid &&
    whatsappValid &&
    emailValid &&
    form.className &&
    form.address &&
    imageUrl;

  /* ================= IMAGE UPLOAD (IMGBB) ================= */
  const uploadImage = async (file) => {
    if (!file) return;

    setUploading(true);

    const fd = new FormData();
    fd.append("image", file);

    const res = await fetch(
      `https://api.imgbb.com/1/upload?key=${IMGBB_KEY}`,
      {
        method: "POST",
        body: fd,
      }
    );

    const data = await res.json();
    setImageUrl(data.data.url);
    setUploading(false);
  };

  /* ================= FORM SUBMIT ================= */
  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      ...form,
      student_photo: imageUrl,
    };

    await fetch("https://formspree.io/f/mykgyypk", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    alert("Admission Form Submitted Successfully!\nWe will contact you soon.");

    setForm(initialForm);
    setImageUrl("");
    setOpen(false);
  };

  return (
    <>
      {/* ================= MAIN ================= */}
      <section className={`fee-wrap ${open ? "blur" : ""}`}>
        <div className="fee-left">
          <h2>Fee Structure</h2>
          <table>
            <thead>
              <tr>
                <th>Class</th>
                <th>Monthly</th>
                <th>Quarterly</th>
                <th>Half-Yearly</th>
                <th>Annually</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>6</td><td>₹999</td><td>₹2499</td><td>₹4499</td><td>₹7999</td></tr>
              <tr><td>7</td><td>₹999</td><td>₹2499</td><td>₹4499</td><td>₹7999</td></tr>
              <tr><td>8</td><td>₹999</td><td>₹2499</td><td>₹4499</td><td>₹7999</td></tr>
              <tr><td>9</td><td>₹1100</td><td>₹2599</td><td>₹4599</td><td>₹8099</td></tr>
              <tr><td>10</td><td>₹1100</td><td>₹2599</td><td>₹4599</td><td>₹8099</td></tr>
            </tbody>
          </table>
        </div>

        <div className="fee-right">
          <h2>Admission Open – 2026</h2>
          <p>Limited Seats • Personal Attention • Expert Teachers</p>
          <button onClick={() => setOpen(true)}>Apply Now →</button>
        </div>
      </section>

      {/* ================= MODAL ================= */}
      {open && (
        <div className="modal">
          <div className="box">
            <span className="close" onClick={() => setOpen(false)}>×</span>

            <form onSubmit={handleSubmit}>
              <h3>Student Admission Form</h3>

              <div className="grid">
                <input
                  placeholder="Student Full Name"
                  value={form.student}
                  onChange={e => setForm({ ...form, student: e.target.value })}
                />

                <input
                  placeholder="Father's Name"
                  value={form.father}
                  onChange={e => setForm({ ...form, father: e.target.value })}
                />
              </div>

              <div className="grid">
                <input
                  placeholder="Mobile Number"
                  maxLength="10"
                  value={form.mobile}
                  onChange={e =>
                    setForm({ ...form, mobile: e.target.value.replace(/\D/g, "") })
                  }
                />

                <input
                  placeholder="WhatsApp Number"
                  maxLength="10"
                  value={form.whatsapp}
                  onChange={e =>
                    setForm({ ...form, whatsapp: e.target.value.replace(/\D/g, "") })
                  }
                />
              </div>

              <input
                placeholder="Email ID"
                value={form.email}
                onChange={e => setForm({ ...form, email: e.target.value })}
              />

              <select
                value={form.className}
                onChange={e => setForm({ ...form, className: e.target.value })}
              >
                <option value="">Select Class</option>
                {[6, 7, 8, 9, 10].map(c => (
                  <option key={c}>Class {c}</option>
                ))}
              </select>

              <textarea
                placeholder="Full Address"
                value={form.address}
                onChange={e => setForm({ ...form, address: e.target.value })}
              />

              <label className="upload">
                Upload Student Photo
                <input
                  type="file"
                  accept="image/*"
                  onChange={e => uploadImage(e.target.files[0])}
                />
              </label>

              {uploading && <p>Uploading photo...</p>}
              {imageUrl && <p className="ok">Photo uploaded ✓</p>}

              <button
                type="submit"
                disabled={!isFormValid}
                className={!isFormValid ? "disabled" : ""}
              >
                Submit Admission Form
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
