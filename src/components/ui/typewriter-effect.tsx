"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const TypewriterEffectSmooth = ({
                                           words,
                                           className,
                                           cursorClassName,
                                       }: {
    words: {
        text: string;
        className?: string;
    }[];
    className?: string;
    cursorClassName?: string;
}) => {
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [reverse, setReverse] = useState(false);

    useEffect(() => {
        if (index === words.length) {
            setIndex(0); // Restart from the first word
            return;
        }

        if (subIndex === words[index].text.length + 1 && !reverse) {
            setTimeout(() => setReverse(true), 1000);
            return;
        }

        if (subIndex === 0 && reverse) {
            setReverse(false);
            setIndex((prev) => (prev + 1) % words.length);
            return;
        }

        const timeout = setTimeout(() => {
            setSubIndex((prev) => prev + (reverse ? -1 : 1));
        }, reverse ? 75 : 150);

        return () => clearTimeout(timeout);
    }, [subIndex, index, reverse, words]);

    return (
        <div className={className}>
            <div>
                {`${words[index]?.text.substring(0, subIndex)}${subIndex === words[index]?.text.length + 1 && !reverse ? "" : "|"}`}
            </div>
        </div>
    );
};
