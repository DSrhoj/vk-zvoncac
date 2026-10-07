const WATER = "#9fd0f0";
const DECK = "#7eb6d9";
const GOAL_AREA = "#8ec4e8";
const RED = "#e31b23";
const YELLOW = "#f0d000";
const GREEN = "#1b8a34";
const WHITE = "#ffffff";
const LINE = "#1e3a4c";

const hairline = {
  fill: "none",
  vectorEffect: "non-scaling-stroke" as const,
  strokeLinecap: "square" as const,
};

export function PitchField() {
  return (
    <svg
      aria-hidden
      viewBox="-1 -1 22 32"
      preserveAspectRatio="none"
      className="pointer-events-none absolute inset-0 h-full w-full"
    >
      <rect x="-1" y="-1" width="22" height="32" fill={DECK} />
      <rect x="0" y="0" width="20" height="30" fill={WATER} />

      <rect x="7.5" y="0" width="5" height="2" fill={GOAL_AREA} />
      <rect x="7.5" y="28" width="5" height="2" fill={GOAL_AREA} />

      <SidelineColors x={0} />
      <SidelineColors x={19.6} />

      <DashedLine y={2} />
      <DashedLine y={5} />
      <DashedLine y={6} />
      <DashedLine y={15} />
      <DashedLine y={24} />
      <DashedLine y={25} />
      <DashedLine y={28} />

      <rect x="-0.18" y="14.82" width="0.36" height="0.36" fill={WHITE} />
      <rect x="19.82" y="14.82" width="0.36" height="0.36" fill={WHITE} />

      <ReEntry x={18} y={0} />
      <ReEntry x={18} y={28} />

      <GoalCage y={0} flip={false} />
      <GoalCage y={30} flip />

      <rect
        x="0"
        y="0"
        width="20"
        height="30"
        stroke={LINE}
        strokeWidth={2}
        {...hairline}
      />
    </svg>
  );
}

function DashedLine({ y }: { y: number }) {
  return (
    <line
      x1="0"
      y1={y}
      x2="20"
      y2={y}
      stroke={LINE}
      strokeWidth={1.5}
      strokeDasharray="8 6"
      {...hairline}
    />
  );
}

function SidelineColors({ x }: { x: number }) {
  return (
    <g>
      <rect x={x} y="0" width="0.4" height="2" fill={RED} />
      <rect x={x} y="2" width="0.4" height="3" fill={YELLOW} />
      <rect x={x} y="5" width="0.4" height="1" fill={YELLOW} />
      <rect x={x} y="5.75" width="0.4" height="0.5" fill={RED} />
      <rect x={x} y="6" width="0.4" height="18" fill={GREEN} />
      <rect x={x} y="23.75" width="0.4" height="0.5" fill={RED} />
      <rect x={x} y="24" width="0.4" height="1" fill={YELLOW} />
      <rect x={x} y="25" width="0.4" height="3" fill={YELLOW} />
      <rect x={x} y="28" width="0.4" height="2" fill={RED} />
    </g>
  );
}

function ReEntry({ x, y }: { x: number; y: number }) {
  return (
    <path
      d={`M ${x} ${y + 2} H ${x + 2} V ${y}`}
      stroke={RED}
      strokeWidth={3}
      {...hairline}
    />
  );
}

function GoalCage({ y, flip }: { y: number; flip: boolean }) {
  const back = y + (flip ? 0.85 : -0.85);
  const left = 8.5;
  const right = 11.5;

  return (
    <g>
      <path d={`M 0 ${y} H ${left}`} stroke={WHITE} strokeWidth={3} {...hairline} />
      <path d={`M ${right} ${y} H 20`} stroke={WHITE} strokeWidth={3} {...hairline} />
      <path
        d={`M ${left} ${y} V ${back} H ${right} V ${y}`}
        stroke={WHITE}
        strokeWidth={3}
        {...hairline}
      />
    </g>
  );
}
