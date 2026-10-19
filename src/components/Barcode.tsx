/** Decorative barcode: alternating bar and gap widths with UPC-style guard bars. */
const MODULES = [
  1, 1, 1, 2, 1, 1, 3, 2, 1, 1, 2, 1, 3, 1, 1, 2, 1, 2, 1, 1, 3, 1, 2, 1, 1, 1, 2, 3, 1, 1, 1, 1, 1,
  1, 1, 2, 1, 3, 1, 1, 2, 2, 1, 1, 1, 3, 2, 1, 1, 2, 1, 1, 3, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1,
];
const GUARDS = new Set([0, 2, 30, 32, 60, 62]);
const HEIGHT = 34;

type Bar = { x: number; width: number; tall: boolean };

function layoutBars(modules: number[]): { bars: Bar[]; width: number } {
  const bars: Bar[] = [];
  let x = 0;
  modules.forEach((width, index) => {
    if (index % 2 === 0) bars.push({ x, width, tall: GUARDS.has(index) });
    x += width;
  });
  return { bars, width: x };
}

const { bars, width: totalWidth } = layoutBars(MODULES);

export function Barcode({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox={`0 0 ${totalWidth} ${HEIGHT}`}
      preserveAspectRatio="none"
      aria-hidden="true"
      focusable="false"
    >
      <g fill="currentColor">
        {bars.map((bar) => (
          <rect
            key={bar.x}
            x={bar.x}
            y={0}
            width={bar.width}
            height={bar.tall ? HEIGHT : HEIGHT - 5}
          />
        ))}
      </g>
    </svg>
  );
}
