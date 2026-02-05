"use client";

import { Analytics } from "@vercel/analytics/react";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Image from "next/image";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTiktok } from "@fortawesome/free-brands-svg-icons";

/* ══════════════════════════════════════════════════════════════════
   822 ATHLETICS — BRUTALIST RAW ENERGY HOMEPAGE
   ══════════════════════════════════════════════════════════════════ */

// ─── SCHEDULE DATA ───
const SCHEDULE: Record<string, { time: string; label: string; highlight?: boolean }[]> = {
  Monday: [
    { time: "5:00 AM", label: "Workout of the Day" },
    { time: "6:00 AM", label: "Workout of the Day" },
    { time: "12:00 PM", label: "Workout of the Day" },
    { time: "4:00 PM", label: "Open Gym" },
    { time: "5:15 PM", label: "Workout of the Day" },
    { time: "6:15 PM", label: "Workout of the Day" },
  ],
  Tuesday: [
    { time: "5:00 AM", label: "Workout of the Day" },
    { time: "12:00 PM", label: "Workout of the Day" },
    { time: "4:00 PM", label: "Open Gym" },
    { time: "5:15 PM", label: "Workout of the Day" },
    { time: "6:15 PM", label: "Workout of the Day" },
  ],
  Wednesday: [
    { time: "5:00 AM", label: "Workout of the Day" },
    { time: "6:00 AM", label: "Workout of the Day" },
    { time: "12:00 PM", label: "Workout of the Day" },
    { time: "4:00 PM", label: "Open Gym" },
    { time: "5:15 PM", label: "Workout of the Day" },
    { time: "6:15 PM", label: "Strength Class" },
  ],
  Thursday: [
    { time: "5:00 AM", label: "Workout of the Day" },
    { time: "12:00 PM", label: "Workout of the Day" },
    { time: "4:00 PM", label: "Open Gym" },
    { time: "5:15 PM", label: "Workout of the Day" },
    { time: "6:15 PM", label: "Workout of the Day" },
  ],
  Friday: [
    { time: "5:00 AM", label: "Workout of the Day" },
    { time: "6:00 AM", label: "Workout of the Day" },
    { time: "12:00 PM", label: "Workout of the Day" },
    { time: "4:00 PM", label: "Open Gym" },
    { time: "5:15 PM", label: "Strength Class" },
  ],
  Saturday: [
    { time: "8:15 AM", label: "Workout of the Day" },
    { time: "9:15 AM", label: "Workout of the Day" },
  ],
  Sunday: [
    { time: "10:00 AM – 12:00 PM", label: "Sunday Funday" },
  ],
};

const DAY_KEYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// ─── TESTIMONIALS ───
const TESTIMONIALS = [
  {
    quote: "The coaches ensure everyone (all skill levels) have a successful and enjoyable experience every session. The bonus is all of the \"strangers\" you meet the first few days that instantly become your biggest cheerleaders.",
    name: "Kym Manning",
    image: null,
  },
  {
    quote: "I initially signed up for a six-week bootcamp to feel a bit more confident in the dress I was wearing in my best friend's wedding. I almost didn't go inside the first day but I'm glad I did! The coaches helped push towards my goals by supporting and encouraging me in the gym AND in life.",
    name: "Lindsay Steele",
    image: null,
  },
  {
    quote: "When I first inquired about Rise, I honestly didn't think I would be able to participate. I have a past medical history that includes multiple orthopedic surgeries. However, all of the coaches have assisted me with modifications when needed to keep my workout safe, pain free and still very effective! In fact, I'm now able to do many movements completely pain free!",
    name: "Casey Campbell",
    image: null,
  },
];

const TESTIMONIAL_IMAGES = ["/joy.jpg", "/drew.jpg", "/tamika.jpg"];

// ─── COACHES ───
const COACHES = [
  { name: "JENAE JUDGE", role: "Owner/Head Coach", url: "/jenae.jpg" },
  { name: "AMY POWERS", role: "Coach", url: "/amy.jpg" },
  { name: "ANDREW EYMAN", role: "Coach", url: "/andrew.jpg" },
];

// ─── PRICING ───
const PRICING = [
  { plan: "3 CLASSES/WEEK", price: "$125/MO" },
  { plan: "4 CLASSES/WEEK", price: "$140/MO" },
  { plan: "UNLIMITED CLASSES", price: "$155/MO" },
];

const DISCOUNTS = [
  { label: "TEACHER", amount: "10%" },
  { label: "FIRST RESPONDER", amount: "10%" },
  { label: "STUDENT", amount: "10%" },
  { label: "SPOUSE", amount: "20%" },
  { label: "PRE-PAY (6MO+)", amount: "10%" },
];

function TornEdge({ flip = false, color = "#FFD700" }: { flip?: boolean; color?: string }) {
  return (
    <div className={`w-full overflow-hidden ${flip ? "rotate-180" : ""} h-8 sm:h-[60px]`} style={{ marginTop: flip ? 0 : "-1px", marginBottom: flip ? "-1px" : 0 }}>
      <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-full">
        <path d="M0,0 L48,12 L96,4 L144,18 L192,8 L240,22 L288,6 L336,16 L384,2 L432,20 L480,10 L528,24 L576,6 L624,14 L672,4 L720,22 L768,8 L816,18 L864,2 L912,16 L960,6 L1008,20 L1056,12 L1104,24 L1152,4 L1200,18 L1248,8 L1296,14 L1344,2 L1392,20 L1440,10 L1440,60 L0,60 Z" fill={color} />
      </svg>
    </div>
  );
}

function GlitchText({ children, className }: { children: string; className?: string }) {
  return (
    <span className={`relative inline-block ${className || ""}`}>
      <span className="absolute top-0 left-0 text-[#FF006E] opacity-70 animate-glitch-1" aria-hidden="true" style={{ clipPath: "inset(20% 0 50% 0)" }}>{children}</span>
      <span className="absolute top-0 left-0 text-[#00FFFF] opacity-70 animate-glitch-2" aria-hidden="true" style={{ clipPath: "inset(50% 0 20% 0)" }}>{children}</span>
      <span className="relative">{children}</span>
    </span>
  );
}

// ─── POPUP COMPONENT ───
function KickstartPopup({ onClose, onSubmit, submitted }: {
  onClose: () => void;
  onSubmit: (name: string, email: string, phone: string) => void;
  submitted: boolean;
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    // Firework-style confetti — initial burst + repeating volleys
    let intervalId: ReturnType<typeof setInterval>;
    (async () => {
      try {
        const confetti = (await import("canvas-confetti")).default;
        const colors = ["#FFD700", "#FF006E", "#D83728", "#FF6B35", "#FFFFFF"];

        // Big initial burst from both sides
        confetti({ particleCount: 150, spread: 100, startVelocity: 55, origin: { x: 0.15, y: 0.7 }, colors, zIndex: 100002, gravity: 0.8, scalar: 1.2, ticks: 200 });
        confetti({ particleCount: 150, spread: 100, startVelocity: 55, origin: { x: 0.85, y: 0.7 }, colors, zIndex: 100002, gravity: 0.8, scalar: 1.2, ticks: 200 });

        // Center shower
        setTimeout(() => {
          confetti({ particleCount: 80, spread: 160, startVelocity: 45, origin: { x: 0.5, y: 0.3 }, colors, zIndex: 100002, gravity: 1, scalar: 1, ticks: 150 });
        }, 300);

        // Repeating firework bursts from random positions
        intervalId = setInterval(() => {
          const x = 0.1 + Math.random() * 0.8;
          const y = 0.2 + Math.random() * 0.4;
          confetti({
            particleCount: 40 + Math.floor(Math.random() * 40),
            spread: 60 + Math.random() * 50,
            startVelocity: 30 + Math.random() * 25,
            origin: { x, y },
            colors,
            zIndex: 100002,
            gravity: 0.9,
            scalar: 0.9 + Math.random() * 0.4,
            ticks: 120,
          });
        }, 1200);
      } catch {}
    })();

    return () => {
      document.body.style.overflow = "unset";
      if (intervalId) clearInterval(intervalId);
    };
  }, []);

  const handleSubmit = () => {
    if (!email && !phone) { setError("Enter an email or phone number"); return; }
    if (email && !/^[\w\-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) { setError("Enter a valid email"); return; }
    onSubmit(name, email, phone);
  };

  if (submitted) {
    return (
      <div className="fixed inset-0 flex items-center justify-center p-4" style={{ zIndex: 100001 }}>
        <div className="absolute inset-0 bg-black/80" />
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 150, damping: 15 }}
          className="relative bg-[#0A0A0A] border-4 border-[#FFD700] p-8 sm:p-16 text-center mx-4"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1, rotate: [0, 10, -10, 0] }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-6xl sm:text-8xl mb-4 sm:mb-6 text-[#FFD700]"
          >
            &#10003;
          </motion.div>
          <div className="heading-font text-3xl sm:text-5xl text-[#FFD700]">{"YOU'RE IN!"}</div>
          <p className="text-gray-300 mt-3 sm:mt-4 font-semibold text-base sm:text-xl">{"A coach will reach out soon."}</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center p-4" style={{ zIndex: 100001 }} onClick={onClose}>
      <div className="absolute inset-0 bg-black/85" />

      <motion.div
        initial={{ scale: 0.8, opacity: 0, y: 40 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 180, damping: 18, delay: 0.1 }}
        className="relative w-full max-w-2xl lg:max-w-4xl max-h-[65vh] lg:max-h-[90vh] overflow-y-auto bg-[#0A0A0A]"
        style={{ borderWidth: "3px", borderColor: "#FFD700", borderStyle: "solid", WebkitOverflowScrolling: "touch" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top accent bar */}
        <div className="h-1 sm:h-1.5 bg-gradient-to-r from-[#FF006E] via-[#FFD700] to-[#FF006E]" style={{ backgroundSize: "200% 100%", animation: "popup-gradient 3s linear infinite" }} />

        {/* Close button — large touch target */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-5 sm:right-5 heading-font text-2xl sm:text-3xl text-gray-500 hover:text-[#FF006E] active:text-[#FF006E] transition-colors z-10 w-11 h-11 flex items-center justify-center border border-[#333] hover:border-[#FF006E] bg-[#0A0A0A]"
        >
          X
        </button>

        <div className="p-5 sm:p-8 lg:p-10">
          {/* ── HEADER ── */}
          <div className="text-center mb-4 sm:mb-6 lg:mb-12">
            <motion.div
              initial={{ scale: 0, rotate: -90 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 150, damping: 12, delay: 0.3 }}
            >
              <Image src="/rise-logo.png" alt="822 Athletics logo - Edmond Oklahoma gym" width={80} height={80} className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 mx-auto mb-2 sm:mb-3 object-contain" />
            </motion.div>

            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.45, duration: 0.5 }}
              className="heading-font text-3xl sm:text-5xl lg:text-6xl text-white leading-none"
            >
              START YOUR
              <br />
              <span className="text-[#FFD700]">21-DAY KICKSTART</span>
            </motion.h2>

            <motion.div
              initial={{ scale: 0, rotate: -5 }}
              animate={{ scale: 1, rotate: -2 }}
              transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.65 }}
              className="inline-block mt-2 sm:mt-4"
            >
              <motion.div
                animate={{ scale: [1, 1.06, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="bg-[#FFD700] text-black heading-font text-2xl sm:text-4xl lg:text-5xl px-5 sm:px-8 py-2 sm:py-3 border-3 sm:border-4 border-black shadow-[3px_3px_0px_#FF006E] sm:shadow-[4px_4px_0px_#FF006E]"
              >
                ONLY $49!
              </motion.div>
            </motion.div>
          </div>

          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-start">
            {/* Left column: Description + Features */}
            <div>
              {/* ── DESCRIPTION ── */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="text-gray-300 text-center lg:text-left mb-3 sm:mb-4 font-semibold text-sm sm:text-lg leading-relaxed"
              >
                Looking for a gym in Edmond where you {"don't"} feel judged, rushed, or lost?
                {"We're"} a family-friendly group fitness gym built for <span className="text-[#FFD700]">real life</span>.
              </motion.p>

              {/* ── FEATURES ── */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="grid grid-cols-1 gap-y-2 mb-3 sm:mb-5"
              >
                {[
                  "Small group classes",
                  "Nutrition guidance",
                  "Accountability & coaching",
                  "Kids welcome",
                  "A community that feels like family",
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ x: -10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.95 + i * 0.08 }}
                    className="flex items-center gap-2 sm:gap-3"
                  >
                    <div className="w-5 h-5 sm:w-6 sm:h-6 bg-[#FF006E] flex items-center justify-center text-xs sm:text-sm text-white shrink-0 border border-[#FF006E]/50">
                      &#10003;
                    </div>
                    <span className="text-gray-200 text-sm sm:text-base font-semibold">{item}</span>
                  </motion.div>
                ))}
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.3 }}
                className="text-gray-500 text-center lg:text-left text-xs sm:text-sm italic mb-5 lg:mb-0"
              >
                {"Most of our members thought the gym \"wasn't for them\"… until it was."}
              </motion.p>
            </div>

            {/* Right column: Form */}
            <div>
              {/* ── FORM ── */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 }}
                className="space-y-3"
              >
                <p className="heading-font text-base sm:text-lg lg:text-xl text-[#FFD700] text-center lg:text-left mb-2">ENTER YOUR INFO TO GET STARTED</p>
                <input
                  type="text"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => { setName(e.target.value); setError(null); }}
                  className="w-full h-11 sm:h-12 bg-[#111] border-2 border-[#333] text-white px-4 heading-font text-base sm:text-lg tracking-wide placeholder:text-gray-600 focus:border-[#FFD700] focus:outline-none transition-colors rounded-none"
                  style={{ fontSize: "16px" }}
                />
                <input
                  type="email"
                  placeholder="your@email.com (optional)"
                  value={email}
                  onChange={(e) => { setEmail(e.target.value); setError(null); }}
                  className="w-full h-11 sm:h-12 bg-[#111] border-2 border-[#333] text-white px-4 heading-font text-base sm:text-lg tracking-wide placeholder:text-gray-600 focus:border-[#FFD700] focus:outline-none transition-colors rounded-none"
                  style={{ fontSize: "16px" }}
                />
                <input
                  type="tel"
                  placeholder="(555) 123-4567 (optional)"
                  value={phone}
                  onChange={(e) => { setPhone(e.target.value); setError(null); }}
                  className="w-full h-11 sm:h-12 bg-[#111] border-2 border-[#333] text-white px-4 heading-font text-base sm:text-lg tracking-wide placeholder:text-gray-600 focus:border-[#FFD700] focus:outline-none transition-colors rounded-none"
                  style={{ fontSize: "16px" }}
                />
                {error && <p className="text-[#FF006E] text-sm sm:text-base font-semibold">{error}</p>}
                <button
                  onClick={handleSubmit}
                  className="w-full bg-[#FFD700] text-black heading-font text-lg sm:text-xl lg:text-2xl py-3.5 sm:py-4 border-3 sm:border-4 border-black active:bg-[#FF006E] active:text-white hover:bg-[#FF006E] hover:text-white hover:border-[#FF006E] transition-all duration-200"
                >
                  START 21-DAY KICKSTART
                </button>
              </motion.div>

              {/* ── DIRECT CONTACT ── */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.3 }}
                className="mt-3 sm:mt-4"
              >
                <p className="text-gray-500 text-center lg:text-left text-xs sm:text-sm mb-2 font-semibold">Or contact us directly:</p>
                <div className="flex flex-col sm:flex-row gap-2">
                  <a href="tel:4053613471" className="flex-1 bg-[#111] border-2 border-[#333] text-center py-3 heading-font text-sm sm:text-base lg:text-lg text-gray-300 active:border-[#FFD700] active:text-[#FFD700] hover:border-[#FFD700] hover:text-[#FFD700] transition-colors">
                    CALL 405-361-3471
                  </a>
                  <a href="sms:4053613471" className="flex-1 bg-[#111] border-2 border-[#333] text-center py-3 heading-font text-sm sm:text-base lg:text-lg text-gray-300 active:border-[#FF006E] active:text-[#FF006E] hover:border-[#FF006E] hover:text-[#FF006E] transition-colors">
                    TEXT US
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom accent bar */}
        <div className="h-1 sm:h-1.5 bg-gradient-to-r from-[#FF006E] via-[#FFD700] to-[#FF006E]" style={{ backgroundSize: "200% 100%", animation: "popup-gradient 3s linear infinite" }} />
      </motion.div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════
// MAIN PAGE
// ═══════════════════════════════════════════════════════════════
export default function Home() {
  const formRef = useRef<HTMLFormElement>(null);
  const submitBtnRef = useRef<HTMLButtonElement>(null);
  const { scrollYProgress } = useScroll();
  const bgY = useTransform(scrollYProgress, [0, 1], [0, -200]);

  // ─── STATE ───
  const [count, setCount] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [popupSubmitted, setPopupSubmitted] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const [submitInView, setSubmitInView] = useState(false);
  const [selectedDay, setSelectedDay] = useState(new Date().getDay());
  const [formValues, setFormValues] = useState({ name: "", email: "", phone: "", goals: "" });
  const [formError, setFormError] = useState<string | undefined>();

  // ─── 822 COUNTER ───
  useEffect(() => {
    const target = 822;
    const step = target / (2000 / 16);
    let current = 0;
    const timer = setInterval(() => {
      current += step;
      if (current >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(current));
    }, 16);
    return () => clearInterval(timer);
  }, []);

  // ─── POPUP INIT ───
  useEffect(() => {
    setMounted(true);
    // TODO: Remove this line when done testing — forces popup on every refresh
    localStorage.removeItem("hasSeen21DayKickstartPopup");
    const hasSeen = localStorage.getItem("hasSeen21DayKickstartPopup");
    if (!hasSeen) setShowPopup(true);
  }, []);

  // ─── SCROLL SPY FOR FLOATING CTA ───
  useEffect(() => {
    const check = () => {
      const rect = document.getElementById("submit-btn")?.getBoundingClientRect();
      setSubmitInView(rect ? rect.top <= window.innerHeight : false);
    };
    window.addEventListener("scroll", check);
    return () => window.removeEventListener("scroll", check);
  }, []);

  // ─── FORM HANDLERS ───
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (e.target.id === "phone" || e.target.id === "email") setFormError(undefined);
    setFormValues((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formValues.email && !formValues.phone) { setFormError("Email or phone is required"); return; }
    try {
      await axios.post("api/send-mail", formValues);
    } catch {}
    setEmailSent(true);
    setFormValues({ name: "", email: "", phone: "", goals: "" });
    setTimeout(() => setEmailSent(false), 5000);
  };

  const handlePopupEmail = async (name: string, email: string, phone: string) => {
    try {
      await axios.post("api/send-mail", { name, email, phone, goals: "21 Day Kickstart - Popup Signup" });
    } catch {}
    setPopupSubmitted(true);
    localStorage.setItem("hasSeen21DayKickstartPopup", "true");
    setTimeout(() => { setShowPopup(false); setPopupSubmitted(false); }, 2000);
  };

  const closePopup = () => { setShowPopup(false); localStorage.setItem("hasSeen21DayKickstartPopup", "true"); };

  const goToForm = (prefillGoals?: string) => {
    if (prefillGoals) {
      setFormValues((prev) => ({ ...prev, goals: prefillGoals }));
    }
    formRef.current?.scrollIntoView({ behavior: "smooth" });
    setTimeout(() => document.getElementById("name")?.focus(), 600);
  };

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Barlow+Condensed:wght@400;600;700&family=Permanent+Marker&display=swap');

        @keyframes glitch-1 {
          0%, 100% { transform: translate(0); }
          20% { transform: translate(-3px, 3px); }
          40% { transform: translate(3px, -3px); }
          60% { transform: translate(-2px, -2px); }
          80% { transform: translate(2px, 2px); }
        }
        @keyframes glitch-2 {
          0%, 100% { transform: translate(0); }
          20% { transform: translate(3px, -3px); }
          40% { transform: translate(-3px, 3px); }
          60% { transform: translate(2px, 2px); }
          80% { transform: translate(-2px, -2px); }
        }
        .animate-glitch-1 { animation: glitch-1 3s infinite; }
        .animate-glitch-2 { animation: glitch-2 3s infinite reverse; }

        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-ticker { animation: ticker 20s linear infinite; }

        @keyframes pulse-border {
          0%, 100% { border-color: #FFD700; }
          50% { border-color: #FF006E; }
        }
        .animate-pulse-border { animation: pulse-border 2s ease-in-out infinite; }

        @keyframes scanline {
          0% { top: -10%; }
          100% { top: 110%; }
        }

        @keyframes popup-gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .noise-bg { position: relative; }
        .noise-bg::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
          pointer-events: none;
          z-index: 1;
        }

        .design1 * { font-family: 'Barlow Condensed', sans-serif; }
        .design1 h1, .design1 h2, .design1 h3, .design1 .heading-font { font-family: 'Bebas Neue', sans-serif; }
        .design1 .marker-font { font-family: 'Permanent Marker', cursive; }
        .design1 input, .design1 textarea { font-family: 'Barlow Condensed', sans-serif; }

        /* Hide scrollbar for horizontal scroll areas */
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
        .scrollbar-hide::-webkit-scrollbar { display: none; }

        /* Prevent iOS zoom on input focus — inputs must be at least 16px */
        @media (max-width: 640px) {
          .design1 input, .design1 textarea, .design1 select {
            font-size: 16px !important;
          }
        }

        /* FAQ Details/Summary styling */
        details summary::-webkit-details-marker {
          display: none;
        }
        details[open] summary ~ * {
          animation: faq-open 0.3s ease-in-out;
        }
        @keyframes faq-open {
          0% {
            opacity: 0;
            transform: translateY(-10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      <main className="design1 min-h-screen bg-[#0A0A0A] text-white overflow-x-hidden">

        {/* ════════════════ TICKER BAR ════════════════ */}
        <div className="bg-[#FFD700] text-black py-1.5 sm:py-2 overflow-hidden relative z-50">
          <div className="animate-ticker whitespace-nowrap flex">
            {Array(8).fill(null).map((_, i) => (
              <span key={i} className="heading-font text-sm sm:text-lg tracking-[0.2em] sm:tracking-[0.3em] mx-4 sm:mx-8">
                21 DAY KICKSTART — $49 — UNLIMITED CLASSES — JOIN THE FAMILY — 822 ATHLETICS — EDMOND OK —
              </span>
            ))}
          </div>
        </div>

        {/* ════════════════ HERO ════════════════ */}
        <motion.section
          className="relative min-h-screen flex items-center justify-center noise-bg overflow-hidden"
          style={{ y: bgY }}
        >
          {/* Banner images */}
          <div className="absolute inset-0">
            <Image src="/banner 2.png" alt="Group fitness class in action at 822 Athletics gym in Edmond, Oklahoma" fill className="object-cover opacity-30 hidden 2xl:block" priority />
            <Image src="/banner-md.png" alt="Members working out together at 822 Athletics Edmond" fill className="object-cover opacity-30 hidden md:block 2xl:hidden" priority />
            <Image src="/banner-xxs.png" alt="822 Athletics functional fitness training in Edmond" fill className="object-cover opacity-30 md:hidden" priority />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/40 via-[#0A0A0A]/70 to-[#0A0A0A]" />
          </div>

          {/* Grid overlay */}
          <div className="absolute inset-0 opacity-[0.04]" style={{
            backgroundImage: "linear-gradient(#FFD700 1px, transparent 1px), linear-gradient(90deg, #FFD700 1px, transparent 1px)",
            backgroundSize: "80px 80px"
          }} />

          {/* Giant background number */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
            <span className="heading-font text-[40vw] leading-none text-white opacity-[0.02] font-bold">{count}</span>
          </div>

          {/* Diagonal stripe — hidden on very small screens to prevent overflow */}
          <div className="absolute top-0 right-0 w-[40vw] h-full bg-[#FF006E] origin-top-right -skew-x-12 opacity-10 hidden sm:block" />

          {/* Logo */}
          <div className="absolute top-4 right-4 sm:top-6 sm:right-6 md:top-8 md:right-12 z-20">
            <Image src="/rise-white.png" alt="822 Athletics - Group Fitness Gym Edmond" width={160} height={80} className="w-20 sm:w-24 md:w-40 h-auto" priority />
          </div>

          {/* Content */}
          <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
            <motion.div initial={{ y: 80, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 0.5 }}>
              <h1 className="heading-font text-[16vw] sm:text-[14vw] md:text-[10vw] leading-[0.85] tracking-tight">
                <GlitchText>822</GlitchText>
                <br />
                <span className="text-[#FFD700]">ATHLETICS</span>
              </h1>
            </motion.div>

            <motion.div initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, delay: 0.9 }} className="mt-3 sm:mt-4">
              <p className="marker-font text-lg sm:text-2xl md:text-4xl text-[#FF006E] transform -rotate-2">A Gym That Fits Real Life!</p>
            </motion.div>

            <motion.div initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, delay: 1.2 }} className="mt-6 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-2">
              <button
                onClick={() => goToForm()}
                className="group relative w-full sm:w-auto bg-[#FFD700] text-black heading-font text-lg sm:text-2xl px-6 sm:px-10 py-3.5 sm:py-4 border-3 sm:border-4 border-black active:bg-[#FF006E] active:text-white hover:bg-[#FF006E] hover:text-white transition-all duration-200 transform hover:-translate-y-1 hover:shadow-[6px_6px_0px_#FFD700]"
              >
                START MY JOURNEY
                <span className="absolute -top-2.5 -right-2 sm:-top-3 sm:-right-3 bg-[#FF006E] text-white text-xs px-2 py-0.5 sm:py-1 heading-font">$49</span>
              </button>
              <a href="tel:4053613471" className="w-full sm:w-auto text-center heading-font text-lg sm:text-xl text-[#FFD700] border-2 border-[#FFD700] px-6 sm:px-8 py-3.5 sm:py-4 active:bg-[#FFD700] active:text-black hover:bg-[#FFD700] hover:text-black transition-all duration-200">
                CALL 405-361-3471
              </a>
            </motion.div>
          </div>

          {/* Scanline */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute w-full h-[2px] bg-[#FFD700] opacity-10" style={{ animation: "scanline 4s linear infinite" }} />
          </div>
        </motion.section>

        {/* ════════════════ 21 DAY KICKSTART ════════════════ */}
        <TornEdge color="#FFD700" />
        <section className="bg-[#FFD700] text-black py-12 sm:py-20 px-4 relative noise-bg">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-8 sm:gap-12 items-center">
              <div className="flex-1 w-full text-center lg:text-left">
                <motion.div initial={{ x: -100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                  <span className="marker-font text-base sm:text-lg text-[#D83728]">{"// LIMITED OFFER"}</span>
                  <h2 className="heading-font text-[13vw] sm:text-[15vw] md:text-[8rem] leading-[0.9] mt-2">
                    21 DAY<br /><span className="text-[#D83728]">KICK</span>START
                  </h2>
                  <div className="mt-4 sm:mt-6 bg-black text-[#FFD700] inline-block px-4 sm:px-6 py-2 sm:py-3 heading-font text-2xl sm:text-4xl transform -rotate-1">ONLY $49</div>
                </motion.div>
              </div>
              <div className="flex-1 w-full">
                <motion.div initial={{ x: 100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="space-y-3 sm:space-y-4 max-w-md mx-auto lg:mx-0">
                  {[
                    { title: "UNLIMITED CLASSES", desc: "Group fitness that pushes you further, together." },
                    { title: "NUTRITION GUIDANCE", desc: "Real food plans for real lifestyles. No fads." },
                    { title: "COACH SUPPORT", desc: "Accountability that keeps you showing up." },
                    { title: "FAMILY FRIENDLY", desc: "Kids welcome. No excuses, bring the whole crew." },
                    { title: "COMMUNITY", desc: "Not just a gym. A family that sweats together." },
                  ].map((f, i) => (
                    <div key={i} className="border-l-4 border-black pl-3 sm:pl-4 py-1.5 sm:py-2 hover:border-[#D83728] transition-colors group text-left">
                      <h3 className="heading-font text-xl sm:text-2xl group-hover:text-[#D83728] transition-colors">{f.title}</h3>
                      <p className="text-sm sm:text-lg font-semibold opacity-80">{f.desc}</p>
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
          <motion.div initial={{ scale: 3, rotate: -15, opacity: 0 }} whileInView={{ scale: 1, rotate: -12, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.8 }} className="absolute top-8 right-8 hidden lg:block">
            <div className="border-4 border-[#D83728] text-[#D83728] heading-font text-4xl px-6 py-2 transform rotate-[-12deg] opacity-60">NO EXCUSES</div>
          </motion.div>
        </section>
        <TornEdge flip color="#FFD700" />

        {/* ════════════════ TESTIMONIALS WITH IMAGES ════════════════ */}
        <section className="py-14 sm:py-24 px-4 relative">
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "repeating-linear-gradient(45deg, #FFD700 0px, #FFD700 1px, transparent 1px, transparent 40px)" }} />
          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div initial={{ y: 60, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-10 sm:mb-16">
              <span className="marker-font text-[#FF006E] text-base sm:text-xl">{"// NOT JUST REPS"}</span>
              <h2 className="heading-font text-[10vw] sm:text-[12vw] md:text-[6rem] text-white leading-[0.9] mt-2">
                SEE OUR <span className="text-[#FFD700]">SUCCESS</span>
              </h2>
            </motion.div>

            {/* Alternating image + quote rows */}
            <div className="space-y-4 sm:space-y-6">
              {TESTIMONIALS.map((t, i) => (
                <motion.div
                  key={i}
                  initial={{ y: 60, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`flex flex-col ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-4 sm:gap-6 items-stretch`}
                >
                  {/* Image */}
                  {TESTIMONIAL_IMAGES[i] && (
                    <div className="md:w-1/3 relative h-64 sm:h-72 md:h-auto overflow-hidden border-2 border-[#222] group">
                      <Image src={TESTIMONIAL_IMAGES[i]} alt={`${t.name} - 822 Athletics member success story and transformation`} fill className="object-cover object-center group-hover:scale-105 transition-transform duration-700" style={{ objectPosition: 'center 20%' }} loading="lazy" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-60" />
                    </div>
                  )}
                  {/* Quote */}
                  <div className="flex-1 bg-[#111] border-2 border-[#222] p-5 sm:p-8 flex flex-col justify-center relative group hover:border-[#FFD700] transition-all duration-300">
                    <div className="flex gap-2 sm:gap-3">
                      <span className="text-3xl sm:text-5xl text-[#FFD700] heading-font leading-none flex-shrink-0">&ldquo;</span>
                      <p className="text-sm sm:text-lg font-semibold text-gray-300 leading-relaxed">{t.quote}</p>
                    </div>
                    <div className="mt-4 sm:mt-6 flex items-center gap-2 sm:gap-3">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#FFD700] flex items-center justify-center heading-font text-black text-sm sm:text-lg shrink-0">{t.name[0]}</div>
                      <span className="heading-font text-base sm:text-xl text-white">— {t.name}</span>
                    </div>
                    <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#FFD700] group-hover:w-full transition-all duration-500" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════ PRICING ════════════════ */}
        <section className="py-14 sm:py-20 px-4 bg-[#0F0F0F] relative">
          <div className="max-w-5xl mx-auto">
            <motion.div initial={{ y: 40, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} className="text-center mb-8 sm:mb-12">
              <span className="marker-font text-[#FF006E] text-base sm:text-xl">{"// INVEST IN YOURSELF"}</span>
              <h2 className="heading-font text-5xl sm:text-6xl md:text-8xl text-white mt-2">PRICING</h2>
            </motion.div>

            {/* $49 Kickstart featured */}
            <motion.div initial={{ y: 40, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }}
              className="bg-[#D83728] p-5 sm:p-8 md:p-10 relative overflow-hidden mb-4 sm:mb-6 border-2 border-[#D83728] hover:border-[#FFD700] transition-colors"
            >
              <div className="absolute top-0 left-0 bg-[#FFD700] text-black heading-font text-xs sm:text-sm px-6 sm:px-8 py-1 transform -rotate-45 -translate-x-4 sm:-translate-x-6 translate-y-2 sm:translate-y-3">HOT DEAL</div>
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="text-center md:text-left">
                  <h3 className="heading-font text-2xl sm:text-4xl md:text-5xl text-white">21 DAY KICKSTART</h3>
                  <ul className="mt-2 sm:mt-3 space-y-0.5 sm:space-y-1">
                    {["SMALL GROUP CLASSES", "NUTRITION GUIDANCE", "ACCOUNTABILITY & COACHING", "KIDS WELCOME"].map((item, i) => (
                      <li key={i} className="text-white/80 font-semibold text-sm sm:text-lg flex items-center gap-2">
                        <span className="text-[#FFD700]">&#8226;</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="text-center shrink-0 w-full md:w-auto flex md:block items-center justify-between md:justify-center gap-4">
                  <div className="heading-font text-4xl sm:text-5xl md:text-6xl text-white">$49</div>
                  <button onClick={() => goToForm()} className="mt-0 md:mt-3 bg-[#FFD700] text-black heading-font text-base sm:text-lg px-5 sm:px-6 py-2 active:bg-white hover:bg-white transition-colors">
                    SIGN UP NOW
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Monthly pricing */}
            <div className="space-y-1.5 sm:space-y-2">
              {PRICING.map((p, i) => (
                <motion.div key={i} initial={{ x: -40, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className="flex justify-between items-center bg-[#111] border border-[#222] px-4 sm:px-6 md:px-8 py-3.5 sm:py-5 hover:border-[#FFD700] transition-all group"
                >
                  <span className="heading-font text-base sm:text-2xl md:text-3xl text-white group-hover:text-[#FFD700] transition-colors">{p.plan}</span>
                  <span className="heading-font text-base sm:text-2xl md:text-3xl text-[#FFD700]">{p.price}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════ DISCOUNTS ════════════════ */}
        <TornEdge color="#FFD700" />
        <section className="bg-[#FFD700] text-black py-10 sm:py-16 px-4 noise-bg">
          <div className="max-w-5xl mx-auto">
            <motion.div initial={{ y: 40, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} className="text-center mb-6 sm:mb-12">
              <h2 className="heading-font text-5xl sm:text-6xl md:text-8xl">DISCOUNTS</h2>
            </motion.div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 sm:gap-3">
              {DISCOUNTS.map((d, i) => (
                <motion.div key={i} initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                  className={`bg-black text-center p-4 sm:p-6 group active:bg-[#D83728] hover:bg-[#D83728] transition-all duration-300 ${i === 4 ? "col-span-2 sm:col-span-1" : ""}`}
                >
                  <div className="heading-font text-sm sm:text-lg md:text-xl text-white mb-1 sm:mb-2">{d.label}</div>
                  <div className="heading-font text-3xl sm:text-4xl md:text-5xl text-[#FFD700] group-hover:text-white group-active:text-white transition-colors">{d.amount}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        <TornEdge flip color="#FFD700" />

        {/* ════════════════ SCHEDULE ════════════════ */}
        <section className="py-14 sm:py-24 px-4 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-[#111] to-[#0A0A0A]" />
          <div className="max-w-5xl mx-auto relative z-10">
            <motion.div initial={{ y: 40, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} className="text-center mb-8 sm:mb-12">
              <span className="marker-font text-[#FF006E] text-base sm:text-xl">{"// SHOW UP"}</span>
              <h2 className="heading-font text-5xl sm:text-6xl md:text-8xl text-white mt-2">SCHEDULE</h2>
            </motion.div>

            {/* Day selector — horizontal scroll on mobile */}
            <div className="-mx-4 px-4 sm:mx-0 sm:px-0 overflow-x-auto mb-6 sm:mb-8 scrollbar-hide">
              <div className="flex sm:flex-wrap sm:justify-center gap-1.5 sm:gap-2 min-w-max sm:min-w-0">
                {DAY_KEYS.map((day, i) => (
                  <button
                    key={day}
                    onClick={() => setSelectedDay(i)}
                    className={`heading-font text-base sm:text-lg md:text-xl px-3 sm:px-4 md:px-6 py-2 border-2 transition-all duration-200 whitespace-nowrap ${
                      selectedDay === i
                        ? "bg-[#FFD700] text-black border-[#FFD700]"
                        : "border-[#333] text-gray-400 active:border-[#FFD700] active:text-[#FFD700] hover:border-[#FFD700] hover:text-[#FFD700]"
                    }`}
                  >
                    {day.slice(0, 3).toUpperCase()}
                  </button>
                ))}
              </div>
            </div>

            {/* Schedule grid */}
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedDay}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-center mb-4 sm:mb-6">
                  <span className="heading-font text-2xl sm:text-3xl text-[#FFD700]">{DAY_KEYS[selectedDay]}</span>
                </div>
                <div className="space-y-1.5 sm:space-y-2 max-w-2xl mx-auto">
                  {SCHEDULE[DAY_KEYS[selectedDay]].map((slot, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className={`flex justify-between items-center px-4 sm:px-6 py-3 sm:py-4 border transition-all ${
                        slot.highlight
                          ? "bg-[#FFD700] text-black border-[#FFD700]"
                          : "bg-[#111] border-[#222] hover:border-[#FFD700]"
                      }`}
                    >
                      <span className={`heading-font text-base sm:text-xl md:text-2xl ${slot.highlight ? "text-black" : "text-[#FFD700]"}`}>{slot.time}</span>
                      <span className={`heading-font text-sm sm:text-lg md:text-xl ${slot.highlight ? "text-black" : "text-gray-300"}`}>{slot.label}</span>
                    </motion.div>
                  ))}
                </div>

              </motion.div>
            </AnimatePresence>

          </div>
        </section>

        {/* ════════════════ COACHES ════════════════ */}
        <section className="py-14 sm:py-24 px-4 bg-[#0F0F0F] relative">
          <div className="max-w-6xl mx-auto">
            <motion.div initial={{ y: 40, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} className="text-center mb-10 sm:mb-16">
              <span className="marker-font text-[#FF006E] text-base sm:text-xl">{"// YOUR CREW"}</span>
              <h2 className="heading-font text-5xl sm:text-6xl md:text-8xl text-white mt-2">COACHES</h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
              {COACHES.map((coach, i) => (
                <motion.div
                  key={i}
                  initial={{ y: 60, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className="relative group"
                >
                  <div className="relative h-[350px] sm:h-[380px] md:h-[450px] overflow-hidden border-2 border-[#222] group-hover:border-[#FFD700] transition-colors">
                    <Image src={coach.url} alt={`${coach.name}, ${coach.role} at 822 Athletics Edmond`} fill className="object-cover object-center group-hover:scale-105 transition-transform duration-700" style={{ objectPosition: 'center 15%' }} loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/30 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                      <div className="heading-font text-2xl sm:text-3xl text-[#FFD700]">{coach.name}</div>
                      {coach.role && <div className="heading-font text-base sm:text-lg text-white/60 mt-0.5 sm:mt-1">{coach.role}</div>}
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#FFD700] group-hover:w-full transition-all duration-500" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════ CONTACT + MAP ════════════════ */}
        <TornEdge color="#D83728" />
        <section className="bg-[#D83728] py-12 sm:py-20 px-4 relative noise-bg">
          <div className="max-w-6xl mx-auto">
            <motion.div initial={{ y: 40, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} className="text-center mb-8 sm:mb-12">
              <h2 className="heading-font text-4xl sm:text-6xl md:text-8xl text-white leading-tight">DISCOVER YOUR BEST YOU</h2>
              <p className="heading-font text-lg sm:text-2xl text-white/70 mt-2">
                Call or text us at: <a href="tel:4053613471" className="text-[#FFD700] underline">(405) 361-3471</a> — Or drop in
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
              {/* Map + address */}
              <motion.div initial={{ x: -40, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }}>
                <div className="border-2 sm:border-4 border-[#FFD700] p-1.5 sm:p-2 bg-[#111]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3238.5!2d-97.4786!3d35.7234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87b21f6b5e1a1a1b%3A0x1234567890abcdef!2s14310%20N%20Lincoln%20Blvd%20Suite%20300%2C%20Edmond%2C%20OK%2073013!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                    width="100%" height="250"
                    style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) grayscale(50%)" }}
                    allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="822 Athletics Location"
                    className="sm:h-[300px]"
                  />
                </div>
                <div className="mt-3 sm:mt-4 space-y-2">
                  <div className="border-l-4 border-[#FFD700] pl-3 sm:pl-4">
                    <p className="heading-font text-base sm:text-xl text-white">14310 N. Lincoln Blvd., Ste. 300</p>
                    <p className="heading-font text-base sm:text-xl text-white">Edmond, OK 73013</p>
                  </div>
                </div>
              </motion.div>

              {/* Contact form */}
              <motion.div initial={{ x: 40, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }}>
                <form ref={formRef} onSubmit={sendEmail} className="space-y-3 sm:space-y-4">
                  <div>
                    <label className="heading-font text-base sm:text-xl text-white/80 block mb-1">NAME</label>
                    <input id="name" value={formValues.name} onChange={handleChange}
                      className="w-full h-11 sm:h-12 bg-[#0A0A0A] border-2 border-[#FFD700]/30 text-white px-3 sm:px-4 heading-font text-base sm:text-lg focus:border-[#FFD700] focus:outline-none transition-colors rounded-none"
                      style={{ fontSize: "16px" }}
                    />
                  </div>
                  <div>
                    <label className="heading-font text-base sm:text-xl text-white/80 block mb-1">EMAIL</label>
                    <input id="email" value={formValues.email} onChange={handleChange}
                      className="w-full h-11 sm:h-12 bg-[#0A0A0A] border-2 border-[#FFD700]/30 text-white px-3 sm:px-4 heading-font text-base sm:text-lg focus:border-[#FFD700] focus:outline-none transition-colors rounded-none"
                      style={{ fontSize: "16px" }}
                    />
                  </div>
                  <div>
                    <label className="heading-font text-base sm:text-xl text-white/80 block mb-1">PHONE</label>
                    <input id="phone" value={formValues.phone} onChange={handleChange}
                      className="w-full h-11 sm:h-12 bg-[#0A0A0A] border-2 border-[#FFD700]/30 text-white px-3 sm:px-4 heading-font text-base sm:text-lg focus:border-[#FFD700] focus:outline-none transition-colors rounded-none"
                      style={{ fontSize: "16px" }}
                    />
                  </div>
                  <div>
                    <label className="heading-font text-base sm:text-xl text-white/80 block mb-1">GOALS</label>
                    <textarea id="goals" value={formValues.goals} onChange={handleChange}
                      className="w-full h-24 md:h-32 bg-[#0A0A0A] border-2 border-[#FFD700]/30 text-white px-3 sm:px-4 pt-3 heading-font text-base sm:text-lg focus:border-[#FFD700] focus:outline-none transition-colors resize-none rounded-none"
                      style={{ fontSize: "16px" }}
                    />
                  </div>
                  {formError && <p className="text-[#FFD700] heading-font text-base sm:text-lg">{formError}</p>}
                  <button
                    ref={submitBtnRef}
                    id="submit-btn"
                    type="submit"
                    className="w-full bg-[#FFD700] text-black heading-font text-xl sm:text-2xl md:text-3xl py-3.5 sm:py-4 border-3 sm:border-4 border-black active:bg-white hover:bg-white transition-all duration-200 hover:shadow-[6px_6px_0px_#000]"
                  >
                    START MY JOURNEY
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>
        <TornEdge flip color="#D83728" />

        {/* ════════════════ FAQ ════════════════ */}
        <section className="py-14 sm:py-24 px-4 bg-[#0A0A0A] relative">
          <div className="absolute inset-0 opacity-[0.02]" style={{
            backgroundImage: "repeating-linear-gradient(0deg, #FFD700 0px, #FFD700 1px, transparent 1px, transparent 50px), repeating-linear-gradient(90deg, #FFD700 0px, #FFD700 1px, transparent 1px, transparent 50px)"
          }} />
          <div className="max-w-4xl mx-auto relative z-10">
            <motion.div initial={{ y: 40, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} className="text-center mb-10 sm:mb-16">
              <span className="marker-font text-[#FF006E] text-base sm:text-xl">{"// GOT QUESTIONS?"}</span>
              <h2 className="heading-font text-5xl sm:text-6xl md:text-8xl text-white mt-2">
                FAQ<span className="text-[#FFD700]">s</span>
              </h2>
            </motion.div>

            <div className="space-y-3 sm:space-y-4">
              {[
                {
                  q: "What is the 21-Day Kickstart program?",
                  a: "Our 21-Day Kickstart is a beginner-friendly program for just $49 that includes unlimited group fitness classes, nutrition guidance, personal coaching support, and access to our family-friendly community. It's designed for people of all fitness levels to experience what 822 Athletics has to offer."
                },
                {
                  q: "Do I need to be in shape to start?",
                  a: "Absolutely not! 822 Athletics welcomes all fitness levels. Our experienced coaches provide modifications for every movement, ensuring your workout is safe, effective, and tailored to your current fitness level. Most of our members thought the gym wasn't for them until they tried it."
                },
                {
                  q: "What are your class times?",
                  a: "We offer classes throughout the day Monday-Sunday. Weekday morning classes start at 5:00 AM, with midday options at 12:00 PM and evening classes at 5:15 PM and 6:15 PM. Weekend classes are available Saturday mornings at 8:15 AM and 9:15 AM, and Sunday at 10:00 AM. We also have Open Gym time Monday-Friday at 4:00 PM."
                },
                {
                  q: "How much does a membership cost?",
                  a: "We offer flexible membership options: 3 classes per week for $125/month, 4 classes per week for $140/month, and unlimited classes for $155/month. We also provide discounts for teachers, first responders, students, spouses (20% off), and those who pre-pay for 6+ months (10% off)."
                },
                {
                  q: "Is 822 Athletics family-friendly?",
                  a: "Yes! Kids are welcome at 822 Athletics. We understand that life is busy and sometimes you need to bring the whole family. Our community is built around supporting each other, including families with children."
                },
                {
                  q: "Where is 822 Athletics located in Edmond?",
                  a: "We're located at 14310 N. Lincoln Blvd., Suite 300, Edmond, OK 73013. You can call or text us at (405) 361-3471. We're easy to find and have convenient parking."
                },
                {
                  q: "Do you offer nutrition guidance?",
                  a: "Yes! All our memberships include nutrition guidance. We provide real food plans designed for real lifestyles - no fads or extreme diets. Our coaches help you develop sustainable eating habits that support your fitness goals."
                },
                {
                  q: "What makes 822 Athletics different from other gyms?",
                  a: "822 Athletics is more than just a gym - it's a community that feels like family. We offer small group classes where you won't feel judged, rushed, or lost. Our experienced coaches ensure everyone gets personal attention regardless of skill level. Plus, we include nutrition guidance and accountability coaching to help you succeed both in and out of the gym."
                }
              ].map((faq, i) => (
                <motion.details
                  key={i}
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="group bg-[#111] border-2 border-[#222] hover:border-[#FFD700] transition-all duration-300"
                >
                  <summary className="cursor-pointer px-4 sm:px-6 py-4 sm:py-5 flex justify-between items-center list-none">
                    <span className="heading-font text-base sm:text-xl md:text-2xl text-white group-hover:text-[#FFD700] transition-colors pr-4">
                      {faq.q}
                    </span>
                    <span className="text-[#FFD700] heading-font text-2xl sm:text-3xl shrink-0 group-open:rotate-45 transition-transform duration-300">
                      +
                    </span>
                  </summary>
                  <div className="px-4 sm:px-6 pb-4 sm:pb-5 pt-0">
                    <div className="border-t-2 border-[#222] pt-3 sm:pt-4">
                      <p className="text-gray-300 text-sm sm:text-base md:text-lg font-semibold leading-relaxed">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </motion.details>
              ))}
            </div>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-8 sm:mt-12 text-center"
            >
              <p className="text-gray-400 font-semibold text-sm sm:text-base mb-4">Still have questions?</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a href="tel:4053613471" className="bg-[#FFD700] text-black heading-font text-base sm:text-lg px-6 py-3 border-2 border-black active:bg-white hover:bg-white transition-colors">
                  CALL US
                </a>
                <a href="sms:4053613471" className="bg-[#111] text-[#FFD700] heading-font text-base sm:text-lg px-6 py-3 border-2 border-[#FFD700] active:bg-[#FFD700] active:text-black hover:bg-[#FFD700] hover:text-black transition-colors">
                  TEXT US
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ════════════════ FINAL CTA ════════════════ */}
        <section className="relative py-20 sm:py-32 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[#0A0A0A]" />
          <div className="absolute inset-0 opacity-[0.06]" style={{
            backgroundImage: "linear-gradient(#FFD700 1px, transparent 1px), linear-gradient(90deg, #FFD700 1px, transparent 1px)",
            backgroundSize: "40px 40px"
          }} />
          <div className="relative z-10 text-center max-w-4xl mx-auto">
            <Image src="/rise-logo.png" alt="822 Athletics logo - Edmond fitness gym" width={80} height={80} className="w-14 h-14 sm:w-20 sm:h-20 mx-auto mb-6 sm:mb-8 opacity-40 object-contain" />
            <h2 className="heading-font text-[11vw] sm:text-[12vw] md:text-[6rem] text-white leading-[0.9]">
              STOP<br /><span className="text-[#FFD700]">WAITING.</span>
            </h2>
            <p className="marker-font text-base sm:text-xl md:text-2xl text-white/80 mt-4 sm:mt-6 transform -rotate-1">Your 21-day transformation starts now.</p>
            <div className="mt-8 sm:mt-12">
              <button onClick={() => goToForm("21 Day Kickstart")} className="w-full sm:w-auto bg-[#FFD700] text-black heading-font text-xl sm:text-2xl md:text-3xl px-8 sm:px-12 py-4 sm:py-5 border-3 sm:border-4 border-black active:bg-white hover:bg-white transition-all duration-200 transform hover:-translate-y-1 hover:shadow-[8px_8px_0px_#FFD700]">
                JOIN FOR $49
              </button>
            </div>
          </div>
        </section>

        {/* ════════════════ FOOTER ════════════════ */}
        <footer className="bg-black py-4 sm:py-8 px-4 border-t-2 border-[#222]">
          <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-4">
            <div className="flex items-center gap-2 sm:gap-3">
              <Image src="/rise-logo.png" alt="822 Athletics - Edmond group fitness gym" width={32} height={32} className="w-6 h-6 sm:w-8 sm:h-8 object-contain" />
              <span className="heading-font text-base sm:text-xl text-white">822 ATHLETICS</span>
            </div>
            <div className="flex items-center gap-3 sm:gap-4">
              <a href="https://www.facebook.com/822athletics" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#FFD700] transition-colors">
                <FontAwesomeIcon icon={faFacebook} className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a href="https://www.instagram.com/822athletics" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#FFD700] transition-colors">
                <FontAwesomeIcon icon={faInstagram} className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a href="https://www.tiktok.com/@822athletics" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#FFD700] transition-colors">
                <FontAwesomeIcon icon={faTiktok} className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
            </div>
            <div className="text-gray-600 font-semibold text-xs sm:text-sm text-center sm:text-right">
              <p className="hidden sm:block">14310 N. Lincoln Blvd., Ste. 300, Edmond, OK 73013</p>
              <p>405-361-3471 &bull; www.822athletics.com</p>
            </div>
          </div>
        </footer>

        {/* ════════════════ FLOATING CTA ════════════════ */}
        {!submitInView && (
          <motion.div initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 2, duration: 0.5 }} className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
            <button onClick={() => goToForm()} className="block bg-[#FF006E] text-white heading-font text-sm sm:text-lg px-4 sm:px-6 py-2.5 sm:py-3 border-2 border-white active:bg-[#FFD700] active:text-black hover:bg-[#FFD700] hover:text-black hover:border-black transition-all duration-200 shadow-[3px_3px_0px_#000] sm:shadow-[4px_4px_0px_#000]">
              START MY JOURNEY
            </button>
          </motion.div>
        )}

        {/* ════════════════ EMAIL SENT TOAST ════════════════ */}
        <AnimatePresence>
          {emailSent && (
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 100, opacity: 0 }}
              className="fixed bottom-4 left-4 right-4 sm:left-auto sm:bottom-6 sm:right-6 z-50 bg-[#0A0A0A] border-2 border-[#FFD700] p-4 sm:p-6 flex items-center gap-3 sm:gap-4 shadow-[4px_4px_0px_#FFD700]"
            >
              <div className="text-3xl sm:text-4xl text-[#FFD700]">&#10003;</div>
              <div>
                <div className="heading-font text-lg sm:text-xl text-white">EMAIL SENT!</div>
                <div className="text-gray-400 font-semibold text-xs sm:text-sm">A coach will reach out shortly.</div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ════════════════ POPUP ════════════════ */}
        <AnimatePresence>
          {mounted && showPopup && (
            <KickstartPopup
              onClose={closePopup}
              onSubmit={handlePopupEmail}
              submitted={popupSubmitted}
            />
          )}
        </AnimatePresence>
      </main>
      <Analytics />
    </>
  );
}
