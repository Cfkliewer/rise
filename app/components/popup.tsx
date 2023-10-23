"use client";
import Snowfall from "react-snowfall";
import { useState, FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faCheckCircle } from "@fortawesome/free-solid-svg-icons";

interface Props {
  close: () => void;
  sendEmail: (email: string) => void;
}

export const PopUp: FC<Props> = ({ close, sendEmail }) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState();

  const submit = () => {
    if (!email) {
      setError("Please enter an email");
      return;
    }

    var regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    if (!email.match(regex)) {
      setError("Please enter a valid email");
      return;
    }

    sendEmail(email);
  };

  return (
    <div
      className="fixed top-0 left-0 w-full h-full bg-stone-950/70 lg:h-full flex justify-center items-center"
      style={{ zIndex: 10000 }}
    >
      <Snowfall />
      <div
        className="flex flex-col relative items-center mx-8 w-full lg:w-2/3 p-10 lg:p-20 rounded-lg bg-stone-50"
        style={{ zIndex: 100000 }}
      >
        <button onClick={close} className="absolute right-8 top-4">
          <FontAwesomeIcon icon={faXmark} size="2xl" color="#000000" />
        </button>
        <h1 className="text-3xl lg:text-6xl text-stone-900 text-center mb-8">
          North Swole Challenge
        </h1>
        <p className="text-lg lg:text-xl text-stone-900 text-center mb-8">
          Enter your email to learn more about the North Swole Challenge and
          enter to win a month of membership for{" "}
          <span className="text-[#D83728] text-2xl lg:text-3xl">FREE!</span>
        </p>
        <input
          id="email"
          onChange={(e) => {
            setEmail(e.target.value);
            setError(null);
          }}
          value={email}
          className="w-full h-10 rounded-lg border border-stone-800 pl-4 text-stone-800 focus:outline-4 outline-[#D83728]"
        />
        {!error ? <></> : <p className="text-red-500 ml-8 text-xl">{error}</p>}
        <button
          className="w-full bg-[#D83728] mt-8 py-4 rounded-lg"
          onClick={submit}
        >
          <div className="text-xl text-white">Submit and WIN</div>
        </button>
      </div>
    </div>
  );
};
