"use client";
import React from "react";
import Countdown from "react-countdown";

const CountDown = () => {
  const endDateTime = new Date("2024,05,08");

  return (
    <Countdown
      className="text-5xl text-orange-300 font-semibold"
      date={endDateTime}
    />
  );
};

export default CountDown;
