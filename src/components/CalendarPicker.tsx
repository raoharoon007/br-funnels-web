"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const DAYS = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
const TIMEZONES = [
  "Pacific Time (PST) - 9:00 am",
  "Mountain Time (MST) - 10:00 am",
  "Central Time (CST) - 11:00 am",
  "Eastern Time (EST) - 12:00 pm",
  "GMT - 5:00 pm",
  "Central European Time (CET) - 6:00 pm",
  "Pakistan Standard Time (PKT) - 10:00 pm",
  "India Standard Time (IST) - 10:30 pm",
];

export default function CalendarPicker() {
  const today = new Date();
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const [timezone, setTimezone] = useState(TIMEZONES[0]);
  const [tzOpen, setTzOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Hydration errors se bachne ke liye
  useEffect(() => {
    setMounted(true);
  }, []);

  const getDaysInMonth = (year: number, month: number) => new Date(year, month + 1, 0).getDate();
  const getFirstDayOfMonth = (year: number, month: number) => new Date(year, month, 1).getDay();

  const daysInMonth = getDaysInMonth(currentYear, currentMonth);
  const firstDay = getFirstDayOfMonth(currentYear, currentMonth);

  const prevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear((y) => y - 1);
    } else setCurrentMonth((m) => m - 1);
    setSelectedDay(null);
  };

  const nextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear((y) => y + 1);
    } else setCurrentMonth((m) => m + 1);
    setSelectedDay(null);
  };

  const isAvailable = (day: number) => {
    const d = new Date(currentYear, currentMonth, day);
    const dow = d.getDay();
    const isWeekday = dow >= 1 && dow <= 5;
    const isPast = d < new Date(today.getFullYear(), today.getMonth(), today.getDate());
    return isWeekday && !isPast;
  };

  const isToday = (day: number) =>
    day === today.getDate() &&
    currentMonth === today.getMonth() &&
    currentYear === today.getFullYear();

  const cells: (number | null)[] = [];
  for (let i = 0; i < firstDay; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);

  if (!mounted) return null;

  return (
    <div className="w-full max-w-170  text-white p-10 sm:p-8 bg-white/2  mx-auto font-sans">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <span className="sm:text-[17px] text-xs font-medium text-background">Select a Date & Time</span>
        <span className="text-[10px] font-semibold  text-gradient-main uppercase">
          Powered by Calendly
        </span>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between mb-5 px-1">
        <button 
          onClick={prevMonth}
          className="w-9 h-9 flex items-center justify-center rounded-md border-[0.502px] border-white/10 bg-white/5 cursor-pointer "
        >
          <Image src="/assets/icons/left-arrow.svg" alt="avatar" width={20} height={20} className="object-cover" priority />
        </button>
        <span className="text-[14px] text-background font-medium">{MONTHS[currentMonth]} {currentYear}</span>
        <button 
          onClick={nextMonth}
          className="w-9 h-9 flex items-center justify-center rounded-md border-[0.502px] border-white/10 bg-white/5 cursor-pointer"
        >
          <Image src="/assets/icons/right-arrow.svg" alt="avatar" width={20} height={20} className="object-cover" priority />
        </button>
      </div>

      {/* Calendar Grid */}
      <div className="w-full">
        <div className="grid grid-cols-7 mb-2.5">
          {DAYS.map((d) => (
            <div key={d} className="text-center text-[12px] font-medium text-[#6A7282] tracking-widest py-1.5 uppercase">
              {d}
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-7 gap-1.5">
          {cells.map((day, i) => {
            if (day === null) return <div key={`empty-${i}`} className="aspect-square" />;
            
            const avail = isAvailable(day);
            const sel = selectedDay === day;
            const tod = isToday(day);
            
            return (
              <button
                key={day}
                disabled={!avail}
                onClick={() => setSelectedDay(day)}
                className={`
                  aspect-square flex items-center justify-center rounded-[7px] text-[15px] transition-all relative
                  ${!avail ? "text-[#364153] cursor-not-allowed" : "cursor-pointer"}
                  ${avail && !sel ? "border-[0.502px] border-white/10 bg-white/5 text-background hover:bg-white/5 hover:scale-105" : ""}
                  ${sel ? "bg-white text-black font-semibold " : ""}
                  ${tod && !sel ? "border border-[#444] text-background" : ""}
                `}
              >
                {day}
              </button>
            );
          })}
        </div>
      </div>

      {/* Timezone Section */}
      <div className="relative mt-7">
        <div 
          onClick={() => setTzOpen(!tzOpen)}
          className="border-[0.502px] border-white/10 bg-white/5 rounded-[10px] p-3.5 flex items-center gap-2.5 cursor-pointer hover:border-[#333] transition-all"
        >
          <span className="text-[#666] shrink-0">
            <Image src="/assets/icons/Timezone.svg" alt="avatar" width={20} height={20} className="object-cover" priority />
          </span>
          <div className="flex-1">
            <div className="text-[12px] text-[#6A7282] mb-0.5 tracking-tight">Time zone</div>
            <div className="text-[12px] text-background font-normal">{timezone}</div>
          </div>
          <span className={`transition-transform duration-200 ${tzOpen ? "rotate-180" : ""}`}>
             <Image src="/assets/icons/arrow-outline.svg" alt="avatar" width={20} height={20} className="object-cover" />
          </span>
        </div>

        {/* Timezone Dropdown */}
        {tzOpen && (
          <div className="absolute bottom-[calc(100%+6px)] left-0 right-0 bg-[#161616] border border-[#2a2a2a] rounded-xl overflow-hidden  shadow-2xl">
            {TIMEZONES.map((tz) => (
              <div
                key={tz}
                onClick={(e) => {
                  e.stopPropagation();
                  setTimezone(tz);
                  setTzOpen(false);
                }}
                className={`
                  px-4 py-3 text-[13px] cursor-pointer transition-colors
                  ${tz === timezone ? "bg-[#1a1a1a] text-white" : "text-[#bbb] hover:bg-[#1f1f1f] hover:text-white"}
                `}
              >
                {tz}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}