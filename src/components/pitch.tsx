import type { ReactNode } from "react";
import { PitchField } from "@/components/pitch-field";

export function Pitch({ children }: { children: ReactNode }) {
  return (
    <div className="relative w-full" style={{ height: "300svh" }}>
      <PitchField />
      <div
        className="absolute grid min-h-0"
        style={{
          top: `${(1 / 32) * 100}%`,
          bottom: `${(1 / 32) * 100}%`,
          left: `${(1 / 22) * 100}%`,
          right: `${(1 / 22) * 100}%`,
          gridTemplateRows: "2fr 3fr 1fr 9fr 9fr 1fr 3fr 2fr",
        }}
      >
        {children}
      </div>
    </div>
  );
}

export function PitchZone({
  id,
  span = 1,
  children,
}: {
  id?: string;
  span?: number;
  children?: ReactNode;
}) {
  return (
    <section
      id={id}
      className="flex min-h-0 items-center justify-center overflow-hidden px-4 py-2 sm:px-8"
      style={span > 1 ? { gridRow: `span ${span}` } : undefined}
    >
      {children}
    </section>
  );
}

export function ZoneCard({
  children,
  tone = "light",
}: {
  children: ReactNode;
  tone?: "light" | "dark";
}) {
  const palette =
    tone === "dark"
      ? "bg-pool/85 text-white"
      : "bg-white/85 text-ink";

  return (
    <div
      className={`max-h-full w-full max-w-3xl overflow-hidden rounded-2xl px-4 py-4 shadow-sm backdrop-blur-sm sm:px-8 sm:py-6 ${palette}`}
    >
      {children}
    </div>
  );
}
