"use client";

import React, { useState, useEffect } from "react";
import { InlineWidget } from "react-calendly";

export default function CalendarPicker() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="w-full max-w-161.5 mx-auto">
      <div
        className="relative rounded-[14px] overflow-hidden"
        style={{
          background: "rgba(255,255,255,0.02)",
          border: "0.5px solid rgba(255,255,255,0.1)",
          boxShadow: "0 25px 60px rgba(0,0,0,0.6)",
          padding: "8px",
        }}
      >
        {/* <div className="flex items-start justify-between px-3 pb-5 pt-3">
          <span
            className="text-white font-medium text-[17px]"
          >
            Select a Date & Time
          </span>
          <span
            className="font-semibold text-[10px] text-gradient-main uppercase"
          >
            POWERED BY CALENDLY
          </span>
        </div> */}

        <div
          className="w-full rounded-[10px] overflow-hidden "
          style={{ height: "600px",  }}
        >
          <InlineWidget
            url="https://calendly.com/consulthanan/30min"
            styles={{ height: "100%", width: "100%" }}
            pageSettings={{
              backgroundColor: "0B0F1A",
              hideEventTypeDetails: true,
              hideLandingPageDetails: true,
              primaryColor: "fff",
              textColor: "fff",
            }}
          />
        </div>
      </div>
    </div>
  );
}