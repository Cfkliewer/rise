"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faUsers,
  faChartLine,
  faDumbbell,
  faAppleWhole,
  faPlay,
  faPause,
} from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";

export default function SpringChickenChallenge() {
  const [activeFeature, setActiveFeature] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [autoPlay]);

  const howItWorks = [
    {
      title: "Join a team",
      description: "A random drawing will decide what team you're on",
      img: "/spring-chicken/coaches.jpeg",
    }, 
    {
      title: "Make friends",
      description: "You'll get to know your team members and make new friends and be in a private group to support each other",
      img: "/spring-chicken/friends.jpeg",
    },
    {
      title: "Exercise",
      description: "Get unlimited group classes and open gym",
      img: "/spring-chicken/exercise.jpeg",
    },
    {
      title: "Win",
      description: "Win cash for the top team and earn other prizes along the way",
      img: "/spring-chicken/win.jpeg",
    },
  ]

  const features = [
    {
      icon: faUsers,
      title: "Team-Based Accountability",
      description: "Join a supportive community that keeps you motivated and on track",
    },
    {
      icon: faChartLine,
      title: "Track Your Progress",
      description: "Comprehensive before and after measurements to showcase your improvement",
    },
    {
      icon: faDumbbell,
      title: "Unlimited Classes",
      description: "Access to all fitness classes throughout the challenge period",
    },
    {
      icon: faAppleWhole,
      title: "Nutrition Guidance",
      description: "Personalized nutrition plans and coaching for optimal results",
    },
  ];

  return (
    <div className="min-h-screen bg-stone-900">
      {/* Hero Section */}
      <div className="relative h-[60vh] w-full">
        <Image
          src="/spring-chicken/whole-crew.jpeg"
          alt="Spring Chicken Challenge"
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
          <div className="text-center text-white">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-4 text-5xl font-bold"
            >
              Spring Chicken Challenge
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8 text-xl"
            >
              6 Weeks to a Stronger, Healthier You
            </motion.p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Challenge Overview */}
        <div className="mb-16 text-center">
          <h2 className="mb-8 text-3xl font-bold text-white">Transform Your Life in 6 Weeks</h2>
          <p className="mx-auto max-w-2xl text-lg text-white">
            Join our intensive 6-week team challenge designed to help you achieve your fitness and nutrition goals through personalized coaching, team support, and proven strategies.
          </p>
        </div>

        {/* Features Grid */}
        <div className="mb-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-lg bg-[#D83728] p-6 shadow-md"
            >
              <FontAwesomeIcon
                icon={feature.icon}
                className="mb-4 h-8 w-8 text-gray-900"
              />
              <h3 className="mb-2 text-xl font-semibold text-gray-900">{feature.title}</h3>
              <p className="text-gray-900">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* What You Get Section */}
        <div className="mb-16 rounded-lg bg-stone-900 border border-[#D83728] p-8 shadow-lg">
          <h2 className="mb-6 text-center text-3xl font-bold text-white">How it works</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-stone-800">
              <button
                onClick={() => setAutoPlay(!autoPlay)}
                className="absolute bottom-4 right-4 z-10 rounded-full bg-white/80 p-2 text-gray-600 shadow-lg backdrop-blur-sm transition-colors hover:bg-white hover:text-gray-900"
              >
                <FontAwesomeIcon
                  icon={autoPlay ? faPause : faPlay}
                  className="h-4 w-4"
                />
              </button>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeFeature}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="relative h-full w-full"
                >
                  <div className="relative h-full w-full">
                    <Image
                      src={howItWorks[activeFeature].img}
                      alt={howItWorks[activeFeature].title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority
                      className="rounded-lg object-cover"
                      style={{ objectPosition: 'center 30%' }}
                    />
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
            <div className="flex flex-col justify-center space-y-4">
              {howItWorks.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className={`flex cursor-pointer items-start rounded-lg p-3 transition-colors ${index === activeFeature ? 'bg-stone-600' : 'hover:bg-stone-600'}`}
                  onClick={() => {
                    setActiveFeature(index);
                    setAutoPlay(false);
                  }}
                  onMouseEnter={() => setAutoPlay(false)}
                  onMouseLeave={() => setAutoPlay(true)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className={`mr-3 mt-1 transition-colors ${index === activeFeature ? 'text-[#D83728]' : 'text-green-500'}`}
                  />
                  <div>
                    <h3 className="text-xl font-semibold text-[#D83728]">{feature.title}</h3>
                    <p className="text-white">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Pricing and CTA */}
        <div className="text-center">
          <div className="mb-8">
            <h2 className="mb-4 text-3xl font-bold text-white">Join the Challenge</h2>
            <p className="text-xl text-stone-100">
              <span className="font-bold text-[#D83728]">$100</span> for 6 weeks of transformation
            </p>
          </div>
          <motion.a
            href="/spring-chicken-challenge/register"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block rounded-full bg-[#D83728] px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-[#D83728]/70"
          >
            Sign Up Now
          </motion.a>
        </div>
      </div>
    </div>
  );
}
