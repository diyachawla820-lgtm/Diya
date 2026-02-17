export default function ScrollArrow() {
  return (
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-slow">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-cream/80"
      >
        <path d="M12 5v14M5 12l7 7 7-7" />
      </svg>
    </div>
  )
}
