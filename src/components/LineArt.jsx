export default function LineArt({ className = 'line-art', on = true }) {
  return (
    <svg className={`${className}${on ? ' start' : ''}`} viewBox="0 0 667 690" fill="none" aria-hidden="true">
      <path className="draw d0" d="M468.5 1.3H659.5" />
      <path className="draw d1" d="M74.5 344.3L278.5 1.3" />
      <path className="draw d2" d="M0 173.3H641.5" />
      <path className="draw d3" d="M24.5 345.3H666.5" />
      <path className="draw d4" d="M82.5 689.3L371.5 173.3" />
      <path className="draw d5" d="M370.5 517.3L659.5 1.3" />
      <path className="draw d6" d="M179.5 517.3H535.5" />
      <style>{`
        .draw { stroke-dasharray: 700; stroke-dashoffset: 700; }
        .start .d0 { animation: drawL 1.25s linear 0ms forwards; }
        .start .d1 { animation: drawL 1.25s linear 110ms forwards; }
        .start .d2 { animation: drawL 1.25s linear 220ms forwards; }
        .start .d3 { animation: drawL 1.25s linear 330ms forwards; }
        .start .d4 { animation: drawL 1.25s linear 440ms forwards; }
        .start .d5 { animation: drawL 1.25s linear 550ms forwards; }
        .start .d6 { animation: drawL 1.25s linear 660ms forwards; }
        @keyframes drawL { to { stroke-dashoffset: 0; } }
      `}</style>
    </svg>
  )
}
