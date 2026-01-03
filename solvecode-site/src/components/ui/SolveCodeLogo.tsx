interface SolveCodeLogoProps {
  className?: string;
}

export function SolveCodeLogo({ className = "w-6 h-6" }: SolveCodeLogoProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Colchete esquerdo */}
      <path
        d="M 35 20 L 25 20 L 25 80 L 35 80"
        stroke="url(#gradient)"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* Colchete direito */}
      <path
        d="M 65 20 L 75 20 L 75 80 L 65 80"
        stroke="url(#gradient)"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* Linha vertical central com 3 bolinhas */}
      <line
        x1="50"
        y1="35"
        x2="50"
        y2="65"
        stroke="url(#gradient)"
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* Bolinha superior */}
      <circle cx="50" cy="35" r="4" fill="url(#gradient)" />

      {/* Bolinha central */}
      <circle cx="50" cy="50" r="4" fill="url(#gradient)" />

      {/* Bolinha inferior */}
      <circle cx="50" cy="65" r="4" fill="url(#gradient)" />

      {/* Gradiente azul/roxo */}
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6366f1" />
          <stop offset="100%" stopColor="#8b5cf6" />
        </linearGradient>
      </defs>
    </svg>
  );
}
