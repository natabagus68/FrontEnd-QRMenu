export default function ChevronIcon({ color = "black", ...props }) {
  return (
    <svg
      width="21"
      height="21"
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M16 8L10.5 13L5 8"
        stroke={color}
        strokeWidth="1.74324"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
