"use client";
import { useState, FC, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faCheckCircle, faPhone, faMessage } from "@fortawesome/free-solid-svg-icons";

interface Props {
  close: () => void;
  sendEmail: (name: string, email: string, phone: string) => void;
}

export const PopUp: FC<Props> = ({ close, sendEmail }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState<string | undefined | null>();

  console.log("PopUp component rendered!");

  useEffect(() => {
    console.log("PopUp useEffect running - firing confetti");

    // Prevent body scroll when popup is open
    document.body.style.overflow = 'hidden';

    // Fire confetti from both sides when popup loads
    const fireConfetti = async () => {
      try {
        if (typeof window === 'undefined') return;

        const confetti = (await import('canvas-confetti')).default;

        // Simple one-time burst from both sides with high z-index
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { x: 0.2, y: 0.6 },
          colors: ['#D83728', '#FFC107', '#FFD700'],
          zIndex: 100001
        });

        confetti({
          particleCount: 100,
          spread: 70,
          origin: { x: 0.8, y: 0.6 },
          colors: ['#D83728', '#FFC107', '#FFD700'],
          zIndex: 100001
        });
      } catch (error) {
        console.error('Confetti error:', error);
      }
    };

    fireConfetti();

    // Cleanup: re-enable body scroll when popup unmounts
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const submit = () => {
    if (!email && !phone) {
      setError("Please enter an email or phone number");
      return;
    }

    if (email) {
      var regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

      if (!email.match(regex)) {
        setError("Please enter a valid email");
        return;
      }
    }

    sendEmail(name, email, phone);
  };

  return (
    <div
      className="fixed overflow-hidden top-0 left-0 w-full h-full bg-stone-950/70 lg:h-full flex justify-center items-center"
      style={{ zIndex: 10000, touchAction: 'none' }}
      onTouchMove={(e) => e.preventDefault()}
    >
      <div
        className="flex flex-col relative items-center mx-8 w-full lg:w-2/3 xl:w-1/2 p-6 lg:p-12 rounded-lg bg-stone-50 max-h-[85vh] lg:max-h-[90vh] overflow-y-auto"
        style={{ zIndex: 100000, touchAction: 'auto' }}
        onTouchMove={(e) => e.stopPropagation()}
      >
        <button onClick={close} className="absolute right-4 top-4 z-10">
          <FontAwesomeIcon icon={faXmark} className="w-8 h-8" color="#000000" />
        </button>

        <h1 className="text-3xl lg:text-5xl text-stone-900 text-center mb-4 mt-2">
          Start Your 21 Day Kickstart!
        </h1>

        <div className="relative py-3 px-8 mb-4">
          <div className="absolute inset-0 bg-gradient-to-r from-[#FFD700] to-[#FFC107] rounded-lg animate-pulse shadow-lg"></div>
          <p className="relative text-2xl lg:text-4xl font-bold text-center text-stone-900">Only $49!</p>
        </div>

        <p className="text-base lg:text-lg text-stone-900 text-center mb-6 max-w-2xl">
          Looking for a gym in Edmond where you don't feel judged, rushed, or lost?
        </p>

        <div className="text-base lg:text-lg text-stone-900 mb-6 max-w-2xl">
          <p className="mb-4">
            We're a family-friendly group fitness gym built for real life—busy parents,
            working adults, and anyone who wants strength, accountability, and support.
          </p>

          <ul className="space-y-2 mb-4">
            <li className="flex items-start">
              <FontAwesomeIcon icon={faCheckCircle} className="text-[#D83728] mr-2 mt-1 w-5 h-5 flex-shrink-0" />
              <span>Small group classes</span>
            </li>
            <li className="flex items-start">
              <FontAwesomeIcon icon={faCheckCircle} className="text-[#D83728] mr-2 mt-1 w-5 h-5 flex-shrink-0" />
              <span>Nutrition guidance</span>
            </li>
            <li className="flex items-start">
              <FontAwesomeIcon icon={faCheckCircle} className="text-[#D83728] mr-2 mt-1 w-5 h-5 flex-shrink-0" />
              <span>Accountability & coaching</span>
            </li>
            <li className="flex items-start">
              <FontAwesomeIcon icon={faCheckCircle} className="text-[#D83728] mr-2 mt-1 w-5 h-5 flex-shrink-0" />
              <span>Kids welcome</span>
            </li>
            <li className="flex items-start">
              <FontAwesomeIcon icon={faCheckCircle} className="text-[#D83728] mr-2 mt-1 w-5 h-5 flex-shrink-0" />
              <span>A community that feels like family</span>
            </li>
          </ul>

          <p className="text-center italic mb-4">
            Most of our members are people who thought the gym "wasn't for them"… until it was.
          </p>
        </div>

        <div className="w-full max-w-2xl">
          <p className="text-lg font-semibold text-stone-900 text-center mb-4">
            Enter your info to get started:
          </p>
          <input
            id="name"
            type="text"
            placeholder="Your name"
            onChange={(e) => {
              setName(e.target.value);
              setError(null);
            }}
            value={name}
            className="w-full h-12 rounded-lg border-2 border-stone-300 pl-4 text-stone-800 focus:outline-none focus:border-[#D83728] mb-3"
          />
          <input
            id="email"
            type="email"
            placeholder="your@email.com (optional)"
            onChange={(e) => {
              setEmail(e.target.value);
              setError(null);
            }}
            value={email}
            className="w-full h-12 rounded-lg border-2 border-stone-300 pl-4 text-stone-800 focus:outline-none focus:border-[#D83728] mb-3"
          />
          <input
            id="phone"
            type="tel"
            placeholder="(555) 123-4567 (optional)"
            onChange={(e) => {
              setPhone(e.target.value);
              setError(null);
            }}
            value={phone}
            className="w-full h-12 rounded-lg border-2 border-stone-300 pl-4 text-stone-800 focus:outline-none focus:border-[#D83728] mb-2"
          />
          {error && <p className="text-red-500 text-base mb-2">{error}</p>}
          <button
            className="w-full bg-[#D83728] py-4 rounded-lg hover:bg-[#c42f20] transition-colors"
            onClick={submit}
          >
            <div className="text-xl text-white font-semibold">START 21 DAY KICKSTART</div>
          </button>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 mt-6 w-full max-w-2xl">
          <p className="text-stone-900 text-center sm:text-left flex-shrink-0 self-center">
            Or contact us directly:
          </p>
          <div className="flex gap-3 flex-1">
            <a
              href="tel:4053613471"
              className="flex-1 bg-stone-900 text-stone-50 py-3 px-4 rounded-lg hover:bg-stone-800 transition-colors flex items-center justify-center gap-2"
            >
              <FontAwesomeIcon icon={faPhone} className="w-4 h-4 flex-shrink-0" />
              <span className="text-sm lg:text-base">Call</span>
            </a>
            <a
              href="sms:4053613471"
              className="flex-1 bg-stone-900 text-stone-50 py-3 px-4 rounded-lg hover:bg-stone-800 transition-colors flex items-center justify-center gap-2"
            >
              <FontAwesomeIcon icon={faMessage} className="w-4 h-4 flex-shrink-0" />
              <span className="text-sm lg:text-base">Text</span>
            </a>
          </div>
        </div>

        <p className="text-stone-600 text-sm mt-4 text-center">
          405-361-3471 | www.822athletics.com
        </p>
      </div>
    </div>
  );
};
