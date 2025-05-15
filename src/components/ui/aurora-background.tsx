"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

interface BackgroundBeamsProps {
  className?: string;
  primaryColor?: string;
  backgroundColor?: string;
  density?: "low" | "medium" | "high";
  speed?: "slow" | "medium" | "fast";
  disableAnimation?: boolean;
}

export const BackgroundBeams = React.memo(
  ({ 
    className, 
    primaryColor = "#FEE715", 
    backgroundColor = "#101820",
    density = "medium",
    speed = "medium",
    disableAnimation = false
  }: BackgroundBeamsProps) => {
    // Determine number of paths based on density
    const pathsCount = density === "low" ? 20 : density === "medium" ? 50 : 70;
    
    // Calculate speed multiplier
    const speedMultiplier = speed === "slow" ? 1.5 : speed === "medium" ? 1 : 0.6;
    
    // Generate paths dynamically
    const basePath = "M-380 -189C-380 -189 -312 216 152 343C616 470 684 875 684 875";
    const paths = Array.from({ length: pathsCount }, (_, i) => {
      const offset = i * 8;
      return `M-${380 - offset} -${189 + offset}C-${380 - offset} -${189 + offset} -${312 - offset} ${216 - offset} ${152 - offset} ${343 - offset}C${616 - offset} ${470 - offset} ${684 - offset} ${875 - offset} ${684 - offset} ${875 - offset}`;
    });

    return (
      <div
        className={cn(
          "absolute h-full w-full inset-0 [mask-size:40px] [mask-repeat:no-repeat] flex items-center justify-center",
          className
        )}
        style={{ backgroundColor }}
      >
        <svg
          className="z-0 h-full w-full pointer-events-none absolute"
          width="100%"
          height="100%"
          viewBox="0 0 696 316"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-380 -189C-380 -189 -312 216 152 343C616 470 684 875 684 875M-373 -197C-373 -197 -305 208 159 335C623 462 691 867 691 867M-366 -205C-366 -205 -298 200 166 327C630 454 698 859 698 859M-359 -213C-359 -213 -291 192 173 319C637 446 705 851 705 851M-352 -221C-352 -221 -284 184 180 311C644 438 712 843 712 843M-345 -229C-345 -229 -277 176 187 303C651 430 719 835 719 835M-338 -237C-338 -237 -270 168 194 295C658 422 726 827 726 827M-331 -245C-331 -245 -263 160 201 287C665 414 733 819 733 819M-324 -253C-324 -253 -256 152 208 279C672 406 740 811 740 811M-317 -261C-317 -261 -249 144 215 271C679 398 747 803 747 803M-310 -269C-310 -269 -242 136 222 263C686 390 754 795 754 795M-303 -277C-303 -277 -235 128 229 255C693 382 761 787 761 787M-296 -285C-296 -285 -228 120 236 247C700 374 768 779 768 779M-289 -293C-289 -293 -221 112 243 239C707 366 775 771 775 771M-282 -301C-282 -301 -214 104 250 231C714 358 782 763 782 763"
            stroke="url(#paint0_radial_242_278)"
            strokeOpacity="0.05"
            strokeWidth="0.5"
          ></path>

          {paths.map((path, index) => (
            <motion.path
              key={`path-` + index}
              d={path}
              stroke={`url(#linearGradient-${index})`}
              strokeOpacity="0.4"
              strokeWidth="0.5"
              initial={disableAnimation ? {} : {
                pathLength: 0,
                opacity: 0
              }}
              animate={disableAnimation ? {} : {
                pathLength: [0, 1],
                opacity: [0, 0.4, 0]
              }}
              transition={disableAnimation ? {} : {
                duration: (Math.random() * 10 + 10) * speedMultiplier,
                ease: "easeInOut",
                repeat: Infinity,
                delay: Math.random() * 5 * speedMultiplier,
              }}
            ></motion.path>
          ))}
          <defs>
            {paths.map((path, index) => (
              <motion.linearGradient
                id={`linearGradient-${index}`}
                key={`gradient-${index}`}
                initial={disableAnimation ? {} : {
                  x1: "0%",
                  x2: "0%",
                  y1: index % 2 === 0 ? "100%" : "0%",
                  y2: index % 2 === 0 ? "0%" : "100%",
                }}
                animate={disableAnimation ? {} : {
                  x1: ["0%", "100%"],
                  x2: ["0%", "95%"],
                  y1: index % 2 === 0 ? ["100%", "0%"] : ["0%", "100%"],
                  y2: index % 2 === 0 ? ["100%", `${93 + Math.random() * 8}%`] : ["0%", `${93 + Math.random() * 8}%`],
                }}
                transition={disableAnimation ? {} : {
                  duration: (Math.random() * 10 + 10) * speedMultiplier,
                  ease: "easeInOut",
                  repeat: Infinity,
                  delay: Math.random() * 10 * speedMultiplier,
                }}
              >
                <stop stopColor={primaryColor} stopOpacity="0"></stop>
                <stop stopColor={primaryColor}></stop>
                <stop offset="32.5%" stopColor={primaryColor}></stop>
                <stop offset="100%" stopColor={primaryColor} stopOpacity="0"></stop>
              </motion.linearGradient>
            ))}

            <radialGradient
              id="paint0_radial_242_278"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(352 34) rotate(90) scale(555 1560.62)"
            >
              <stop offset="0.0666667" stopColor="var(--neutral-300)"></stop>
              <stop offset="0.243243" stopColor="var(--neutral-300)"></stop>
              <stop offset="0.43594" stopColor="white" stopOpacity="0"></stop>
            </radialGradient>
          </defs>
        </svg>
      </div>
    );
  }
);

BackgroundBeams.displayName = "BackgroundBeams";
