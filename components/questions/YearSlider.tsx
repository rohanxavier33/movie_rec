"use client";

import { useEffect } from "react";
import { QuestionConfig, Answer } from "@/types/quiz";

interface Props {
  config: QuestionConfig;
  value: Answer | undefined;
  onAnswer: (value: Answer) => void;
}

export default function YearSlider({ config, value, onAnswer }: Props) {
  const min = (config.min ?? 1950) - 1; // extra slot for "Before 1950"
  const displayMin = min + 1; // the labeled minimum (1950)
  const max = config.max ?? 2026;
  const defaultYear = 2000;
  const current = typeof value === "number" ? value : defaultYear;
  const isBeforeEra = current <= min;

  // Fix: register default value so 2000 is selectable without dragging away first
  useEffect(() => {
    if (value === undefined) {
      onAnswer(defaultYear);
    }
  }, []);

  return (
    <div className="flex flex-col items-center gap-6 max-w-md mx-auto">
      <div className="text-7xl font-bold text-accent tabular-nums">
        {isBeforeEra ? (
          <span className="text-5xl">Before {displayMin}</span>
        ) : (
          current
        )}
      </div>
      <input
        type="range"
        min={min}
        max={max}
        value={current}
        onChange={(e) => onAnswer(Number(e.target.value))}
        className="w-full"
      />
      <div className="flex justify-between w-full text-sm text-muted">
        <span>Before {displayMin}</span>
        <span>{max}</span>
      </div>
    </div>
  );
}
