import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { Send, Loader2, Mail, MapPin } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { PROFILE } from "../../constants/data";
import { EASE } from "@/animations/variants";
import SectionHeading from "../../common/SectionHeading";

//const API = `${process.env.REACT_APP_BACKEND_URL}/api`;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Please enter your name";
    if (!emailRegex.test(form.email)) e.email = "Enter a valid email";
    if (form.message.trim().length < 10) e.message = "Message is a bit short";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onChange = (k) => (ev) => setForm((f) => ({ ...f, [k]: ev.target.value }));

  const onSubmit = async (ev) => {
    ev.preventDefault();
    if (!validate()) return;
    setLoading(true);
    try {
      const { data } = await axios.post(`${API}/contact`, {
        ...form,
        subject: form.subject || "New portfolio message",
      });
      toast.success(data.message || "Message sent!");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const field = (k, label, type = "text") => (
    <div>
      <label className="block text-sm text-muted-foreground mb-2" htmlFor={k}>{label}</label>
      <input
        id={k}
        type={type}
        value={form[k]}
        onChange={onChange(k)}
        data-testid={`contact-${k}`}
        className={`w-full rounded-xl bg-secondary/50 border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition-colors focus:border-primary ${
          errors[k] ? "border-destructive" : "border-border"
        }`}
        placeholder={label}
      />
      {errors[k] && <p className="mt-1.5 text-xs text-destructive" data-testid={`error-${k}`}>{errors[k]}</p>}
    </div>
  );

  return (
    <section id="contact" className="relative py-28 sm:py-36 px-6" data-testid="contact">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-[0.9fr_1.1fr] gap-14 items-start">
        <div>
          <SectionHeading index="08" eyebrow="Contact" title="Let's build something reliable." />
          <p className="mt-6 text-base text-muted-foreground leading-relaxed max-w-md">
            Have a backend challenge, a role, or an idea worth scaling? Drop a message — I usually reply within a day.
          </p>
          <div className="mt-10 space-y-4">
            <a href={PROFILE.socials.email} className="flex items-center gap-3 text-foreground/85 hover:text-primary transition-colors" data-testid="contact-email-link">
              <span className="h-10 w-10 grid place-items-center rounded-xl border border-border"><Mail size={16} /></span>
              {PROFILE.email}
            </a>
            <div className="flex items-center gap-3 text-foreground/85">
              <span className="h-10 w-10 grid place-items-center rounded-xl border border-border"><MapPin size={16} /></span>
              {PROFILE.location}
            </div>
            <div className="flex gap-3 pt-2">
              <a href={PROFILE.socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="h-10 w-10 grid place-items-center rounded-xl border border-border text-foreground/70 hover:text-primary hover:border-primary/60 transition-colors"><FaGithub size={16} /></a>
              <a href={PROFILE.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="h-10 w-10 grid place-items-center rounded-xl border border-border text-foreground/70 hover:text-primary hover:border-primary/60 transition-colors"><FaLinkedinIn size={16} /></a>
            </div>
          </div>
        </div>

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: EASE }}
          className="glass-strong rounded-3xl p-8 space-y-5"
          data-testid="contact-form"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            {field("name", "Name")}
            {field("email", "Email", "email")}
          </div>
          {field("subject", "Subject")}
          <div>
            <label className="block text-sm text-muted-foreground mb-2" htmlFor="message">Message</label>
            <textarea
              id="message"
              rows={5}
              value={form.message}
              onChange={onChange("message")}
              data-testid="contact-message"
              className={`w-full rounded-xl bg-secondary/50 border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition-colors focus:border-primary resize-none ${
                errors.message ? "border-destructive" : "border-border"
              }`}
              placeholder="Tell me about your project…"
            />
            {errors.message && <p className="mt-1.5 text-xs text-destructive" data-testid="error-message">{errors.message}</p>}
          </div>
          <button
            type="submit"
            disabled={loading}
            data-testid="contact-submit"
            className="inline-flex items-center justify-center gap-2 w-full rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 disabled:opacity-60 transition-colors cyan-glow"
          >
            {loading ? <><Loader2 size={16} className="animate-spin" /> Sending…</> : <>Send Message <Send size={15} /></>}
          </button>
        </motion.form>
      </div>
    </section>
  );
}
