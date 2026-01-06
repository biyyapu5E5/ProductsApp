export default function Star({ color, fillPercent = 0 }) {
  return (
    <svg
      viewBox="0 0 24 24"
      height={10}
      width={10}
    >
      <polygon
        points="12 2 15 9 22 9 17 14 19 21 12 17 5 21 7 14 2 9 9 9"
        fill="none"
        stroke={color}
        strokeWidth="1.5"
      />

      <defs>
        <clipPath id={`clip-${fillPercent}`}>
          <rect width={`${fillPercent}%`} height="100%" />
        </clipPath>
      </defs>

      <polygon
        points="12 2 15 9 22 9 17 14 19 21 12 17 5 21 7 14 2 9 9 9"
        fill={color}
        clipPath={`url(#clip-${fillPercent})`}
      />
    </svg>
  );
}
