"use client";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useCountdown } from "@/hooks/useCountdown";
import { targetDate } from "@/data/constants";

export default function CountdownTimer() {
  const { timeLeft } = useCountdown(targetDate);

  return (
    <div
      className={cn(
        // default layout for >370px
        "flex justify-center flex-wrap gap-4",
        // switch to grid for <370px
        "max-[370px]:grid max-[370px]:grid-cols-2 max-[370px]:gap-4",
        // center grid itself
        "max-[370px]:w-max max-[370px]:mx-auto"
      )}
    >
      {[
        { value: timeLeft.days, label: "DAYS" },
        { value: timeLeft.hours, label: "HRS" },
        { value: timeLeft.minutes, label: "MIN" },
        { value: timeLeft.seconds, label: "SEC" },
      ].map((item, index) => (
        <Card
          key={index}
          className="bg-white/10 border-white/30 p-2 w-18 h-18 sm:h-20 sm:w-20 backdrop-blur-md hover:bg-white/15 transition-all"
        >
          <div className="text-center h-full flex flex-col justify-center">
            <div className="sm:text-2xl text-xl font-bold text-white">
              {item.value.toString().padStart(2, "0")}
            </div>
            <div className="text-xs text-gray-400 mt-1">{item.label}</div>
          </div>
        </Card>
      ))}
    </div>
  );
}
