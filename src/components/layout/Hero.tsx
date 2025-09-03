"use client";

import { Badge } from "@/components/ui/badge";
import { Bot } from "lucide-react";
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import Link from "next/link";
import CountdownTimer from "../ui/CountdownTimer";
import { useCountdown } from "@/hooks/useCountdown";
import { targetDate } from "@/data/constants";
import { useIsMobile } from "@/hooks/useIsMobile";

export default function Hero() {
  const { isEnded } = useCountdown(targetDate);
  const isMobile = useIsMobile();
  return (
    <div
      className="relative min-h-screen bg-black text-white overflow-hidden border-gray-600/20 border-b"
      id="home"
    >
      {/* Background */}
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.3}
        duration={2}
        className={cn(
          "[mask-image:radial-gradient(1200px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-20%] h-[140%] skew-y-6",
          "stroke-gray-600/40 fill-gray-600/20"
        )}
      />
      <AnimatedGridPattern
        numSquares={20}
        maxOpacity={0.15}
        duration={3.5}
        width={60}
        height={60}
        className={cn(
          "[mask-image:radial-gradient(800px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[160%] -skew-y-3",
          "stroke-gray-500/30 fill-gray-500/10"
        )}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-gray-800/10 via-transparent to-gray-700/10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.3)_100%)]" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 pt-4">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          {/* Badge */}
          <Badge
            variant="outline"
            className="border-blue-800/30 bg-blue-900/20 text-blue-200 hover:bg-blue-800/30 transition-all duration-300 backdrop-blur-sm"
          >
            <Bot className="w-3 h-3 mr-2" />
            ENGLISH Club
          </Badge>

          {/* Main Headline */}
          <div className="space-y-6">
            <h1 className=" text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
              Where anyone can{" "}
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                Build cool stuff
              </span>
            </h1>
            <h3 className="text-xl sm:text-2xl text-white/75 max-w-4xl mx-auto">
              Be part of State Vocational High School 1 Jakarta{"'"}s coolest
              Literature club 📖💡
            </h3>
          </div>

          {/* Countdown Timer */}
          {!isEnded && (
            <div className="space-y-6">
              <p className="text-gray-400">{"Registration opens in"}</p>
              <CountdownTimer />
            </div>
          )}

          {isEnded && (
            <div className={!isMobile ? "hidden" : "space-y-6"}>
              <p className="text-gray-400">{"Open Registration!"}</p>
              <div className="flex max-w-full w-max justify-center items-center gap-3 mx-auto">
                {/* <Button
                  asChild
                  size={"lg"}
                  className=" bg-blue-600 hover:bg-blue-700 text-white group shadow-lg shadow-blue-600/25 "
                >
                  <Link href="https://portal.siotics.org">Click to Apply!</Link>
                </Button> */}
                <Button asChild size={"lg"} className="" variant={"default"}>
                  <Link href={"/#activities"}>Explore More</Link>
                </Button>
              </div>

              {/* <CountdownTimer /> */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
