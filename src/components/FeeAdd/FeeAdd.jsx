import React, { useState, useEffect } from "react";
import "./FeeAdd.css";
import qrImg from "../../assets/qrcode.jpeg";

export default function FeeAdd() {

  const initialForm = {
    student: "",
    father: "",
    mobile: "",
    whatsapp: "",
    email: "",
    className: "",
    address: "",
    utr: "",
    t1: false,
    t2: false,
    t3: false,
  };

  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [timer, setTimer] = useState(30);
  const [showPayFields, setShowPayFields] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const [uploading, setUploading] = useState(false);
  const [form, setForm] = useState(initialForm);

  /* ================= RESET ================= */
  const resetAll = () => {
    setOpen(false);
    setStep(1);
    setTimer(30);
    setShowPayFields(false);
    setImageUrl("");
    setUploading(false);
    setForm(initialForm);
    window.location.reload();
  };

  /* ================= VALIDATION ================= */
  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email);
  const mobileValid = form.mobile.length === 10;
  const whatsappValid = form.whatsapp.length === 10;
  const utrValid = form.utr.length === 12;

  const isFormValid =
    form.student &&
    form.father &&
    mobileValid &&
    whatsappValid &&
    emailValid &&
    form.className &&
    form.address &&
    form.t1 &&
    form.t2 &&
    form.t3;

  /* ================= TIMER ================= */
  useEffect(() => {
    if (step === 2 && !showPayFields && timer > 0) {
      const t = setTimeout(() => setTimer((p) => p - 1), 1000);
      return () => clearTimeout(t);
    }
    if (timer === 0) setShowPayFields(true);
  }, [timer, step, showPayFields]);

  /* ================= IMAGE UPLOAD ================= */
  const uploadImage = async (file) => {
    if (!file) return;
    setUploading(true);

    const fd = new FormData();
    fd.append("image", file);

    const res = await fetch(
      "https://api.imgbb.com/1/upload?key=e19abcd4228e38d7c054d4e1238fab34",
      { method: "POST", body: fd }
    );
    const data = await res.json();
    setImageUrl(data.data.url);
    setUploading(false);
  };

  /* ================= FORM SUBMIT TO FORMSPREE ================= */
  const handleSubmitToFormspree = async (e) => {
    e.preventDefault();

    if (!utrValid || !imageUrl) {
      alert("Valid UTR aur screenshot upload karo");
      return;
    }

    const payload = {
      ...form,
      payment_screenshot: imageUrl,
    };

    await fetch("https://formspree.io/f/mykgyypk", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    alert("Your Admission process is done.\nWait for call and message.");
    resetAll();
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
              <tr><td>6</td><td>₹1200</td><td>₹4500</td><td>₹6500</td><td>₹13000</td></tr>
              <tr><td>7</td><td>₹1200</td><td>₹4500</td><td>₹6500</td><td>₹13000</td></tr>
              <tr><td>8</td><td>₹1200</td><td>₹4500</td><td>₹6500</td><td>₹13000</td></tr>
              <tr><td>9</td><td>₹1400</td><td>₹5300</td><td>₹7700</td><td>₹15400</td></tr>
              <tr><td>10</td><td>₹1400</td><td>₹5300</td><td>₹7700</td><td>₹15400</td></tr>
            </tbody>
          </table>
        </div>

        <div className="fee-right">
          <h2>Admission Open – 2025</h2>
          <p>Online Classes • Limited Seats • Personal Attention</p>
          <button onClick={() => setOpen(true)}>Apply Now →</button>
        </div>
      </section>

      {/* ================= MODAL ================= */}
      {open && (
        <div className="modal">
          <div className="box">
            <span className="close" onClick={resetAll}>×</span>

            <form onSubmit={handleSubmitToFormspree}>
              {step === 1 && (
                <>
                  <h3>Student Admission Form</h3>

                  <div className="grid">
                    <input placeholder="Student Name"
                      value={form.student}
                      onChange={e => setForm({ ...form, student: e.target.value })} />

                    <input placeholder="Father Name"
                      value={form.father}
                      onChange={e => setForm({ ...form, father: e.target.value })} />
                  </div>

                  <div className="grid">
                    <input placeholder="Mobile Number" maxLength="10"
                      value={form.mobile}
                      onChange={e => setForm({ ...form, mobile: e.target.value.replace(/\D/g,"") })} />

                    <input placeholder="WhatsApp Number" maxLength="10"
                      value={form.whatsapp}
                      onChange={e => setForm({ ...form, whatsapp: e.target.value.replace(/\D/g,"") })} />
                  </div>

                  <input placeholder="Email ID"
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })} />

                  <select value={form.className}
                    onChange={e => setForm({ ...form, className: e.target.value })}>
                    <option value="">Select Class</option>
                    {[6,7,8,9,10].map(c => <option key={c}>Class {c}</option>)}
                  </select>

                  <textarea placeholder="Full Address"
                    value={form.address}
                    onChange={e => setForm({ ...form, address: e.target.value })} />

                  <div className="terms">
                    <label><input type="checkbox" checked={form.t1}
                      onChange={e => setForm({ ...form, t1: e.target.checked })}/> Details correct</label>
                    <label><input type="checkbox" checked={form.t2}
                      onChange={e => setForm({ ...form, t2: e.target.checked })}/> Fee non-refundable</label>
                    <label><input type="checkbox" checked={form.t3}
                      onChange={e => setForm({ ...form, t3: e.target.checked })}/> Agree rules</label>
                  </div>

                  <button type="button"
                    disabled={!isFormValid}
                    className={!isFormValid ? "disabled" : ""}
                    onClick={() => setStep(2)}>
                    Save & Proceed to Payment
                  </button>
                </>
              )}

              {step === 2 && (
                <>
                  <h3>Pay ₹500 Admission Fee</h3>
                  <p><b>Banking Name:</b> Aditya Kumar</p>
                  <p><b>Finance Dept:</b> Adhyeta Classes</p>

                  {!showPayFields && (
                    <>
                      <img src={qrImg} className="qr" alt="QR" />
                      <p className="timer">Time left: {timer}s</p>

                      <div className="actions">
                        <button type="button" onClick={resetAll}>Exit</button>
                        <button type="button" onClick={() => setShowPayFields(true)}>
                          Add Payment Details
                        </button>
                      </div>
                    </>
                  )}

                  {showPayFields && (
                    <>
                      <input placeholder="12 Digit UTR Number" maxLength="12"
                        value={form.utr}
                        onChange={e => setForm({ ...form, utr: e.target.value.replace(/\D/g,"") })} />

                      <input type="file" accept="image/*"
                        onChange={e => uploadImage(e.target.files[0])} />

                      {uploading && <p>Uploading...</p>}
                      {imageUrl && <p className="ok">Screenshot Uploaded ✓</p>}

                      <button type="submit"
                        disabled={!utrValid || !imageUrl}
                        className={!utrValid || !imageUrl ? "disabled" : ""}>
                        Final Submit Admission
                      </button>
                    </>
                  )}
                </>
              )}
            </form>
          </div>
        </div>
      )}
    </>
  );
}
