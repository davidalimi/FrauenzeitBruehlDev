import React from 'react';

/**
 * Subtle Botanical & Floral Vector Ornaments for Frauenzeit Brühl
 * Featuring delicate cherry blossoms (Kirschblüten) and soft cotton bolls (Baumwolle).
 * Styled with ultra-subtle opacities, gentle curves, and non-intrusive positioning.
 */

// Single 5-petal Cherry Blossom flower for inline or subtle corner accents
export function CherryBlossomFlower({ className = "h-4 w-4 text-pink-400" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* 5 notched sakura petals */}
      <g transform="translate(50,50)">
        {[0, 72, 144, 216, 288].map((angle) => (
          <g key={angle} transform={`rotate(${angle})`}>
            {/* Petal with slight heart-shaped apex notch */}
            <path
              d="M 0 0 C -12 -18 -22 -32 -10 -44 C -4 -48 0 -44 0 -42 C 0 -44 4 -48 10 -44 C 22 -32 12 -18 0 0 Z"
              fill="currentColor"
              opacity="0.85"
            />
            {/* Petal inner veining */}
            <path
              d="M 0 -10 C -2 -22 0 -36 0 -38"
              stroke="#be185d"
              strokeWidth="1.2"
              strokeLinecap="round"
              fill="none"
              opacity="0.5"
            />
          </g>
        ))}
        {/* Blossom Center Pistil & Stamens */}
        <circle cx="0" cy="0" r="4.5" fill="#9d174d" opacity="0.9" />
        {[0, 36, 72, 108, 144, 180, 216, 252, 288, 324].map((deg) => (
          <line
            key={deg}
            x1="0"
            y1="0"
            x2={Math.cos((deg * Math.PI) / 180) * 11}
            y2={Math.sin((deg * Math.PI) / 180) * 11}
            stroke="#be185d"
            strokeWidth="1"
            strokeLinecap="round"
            opacity="0.75"
          />
        ))}
      </g>
    </svg>
  );
}

// Delicate Cherry Blossom Branch watermark for section corners (e.g. Hero top right)
export function CherryBlossomBranch({ className = "w-64 h-64 text-pink-300" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 300 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Graceful curving woody twig */}
      <path
        d="M 300 10 C 230 40 180 30 130 70 C 90 102 70 140 10 170"
        stroke="#E8D2D7"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M 175 45 C 150 75 140 110 115 130"
        stroke="#E8D2D7"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M 130 70 C 120 40 95 30 70 25"
        stroke="#E8D2D7"
        strokeWidth="1.4"
        strokeLinecap="round"
      />

      {/* Flower 1 at main junction */}
      <g transform="translate(130, 70) scale(0.42)">
        <CherryBlossomFlower className="text-pink-400" />
      </g>

      {/* Flower 2 upper branch */}
      <g transform="translate(70, 25) scale(0.36) rotate(15)">
        <CherryBlossomFlower className="text-pink-300" />
      </g>

      {/* Flower 3 sub-branch */}
      <g transform="translate(115, 130) scale(0.38) rotate(-20)">
        <CherryBlossomFlower className="text-pink-400" />
      </g>

      {/* Flower 4 end branch */}
      <g transform="translate(20, 168) scale(0.32) rotate(35)">
        <CherryBlossomFlower className="text-pink-300" />
      </g>

      {/* Buds and tiny leaves */}
      <ellipse cx="210" cy="33" rx="5" ry="3" fill="#E8B4C0" transform="rotate(-20 210 33)" />
      <ellipse cx="150" cy="85" rx="4" ry="2.5" fill="#E8B4C0" transform="rotate(30 150 85)" />
      <ellipse cx="85" cy="35" rx="4" ry="2" fill="#E8B4C0" transform="rotate(-15 85 35)" />
      <ellipse cx="50" cy="145" rx="5" ry="2.5" fill="#E8B4C0" transform="rotate(40 50 145)" />

      {/* A couple of gently drifting loose petals */}
      <path
        d="M 180 140 C 185 135 195 138 193 148 C 190 152 182 150 180 140 Z"
        fill="#F472B6"
        opacity="0.6"
        transform="rotate(25 185 142)"
      />
      <path
        d="M 70 95 C 75 90 82 92 80 100 C 78 103 72 101 70 95 Z"
        fill="#F472B6"
        opacity="0.5"
        transform="rotate(-40 75 96)"
      />
    </svg>
  );
}

// Gentle Cotton Sprig (Baumwollzweig) with soft clouds and natural calyx
export function CottonSprig({ className = "w-48 h-48 text-[#D9C2C8]" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Slender stem */}
      <path
        d="M 30 230 C 50 180 75 140 100 80 C 115 45 140 20 165 10"
        stroke="#D9C2C8"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M 80 130 C 110 120 135 130 150 140"
        stroke="#D9C2C8"
        strokeWidth="1.6"
        strokeLinecap="round"
      />

      {/* Cotton Boll 1 (Upper) */}
      <g transform="translate(145, 30)">
        {/* Star calyx / sepals */}
        <path d="M 0 0 C -8 -10 -15 -8 -22 -14" stroke="#9C7A83" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M 0 0 C -4 -16 2 -24 -2 -32" stroke="#9C7A83" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M 0 0 C 12 -12 20 -15 28 -20" stroke="#9C7A83" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M 0 0 C 16 2 24 0 32 -4" stroke="#9C7A83" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M 0 0 C -8 10 -12 18 -18 24" stroke="#9C7A83" strokeWidth="1.5" strokeLinecap="round" />
        
        {/* Soft, puffy cotton clouds */}
        <circle cx="-10" cy="-14" r="13" fill="#FFFFFF" fillOpacity="0.9" />
        <circle cx="6" cy="-18" r="14" fill="#FFFFFF" fillOpacity="0.92" />
        <circle cx="16" cy="-4" r="13" fill="#FFFFFF" fillOpacity="0.88" />
        <circle cx="2" cy="4" r="12" fill="#FFFFFF" fillOpacity="0.9" />
        <circle cx="-8" cy="2" r="11" fill="#FFFFFF" fillOpacity="0.85" />
        {/* Warm shadow tint */}
        <circle cx="2" cy="-6" r="10" fill="#FAF5F6" fillOpacity="0.6" />
      </g>

      {/* Cotton Boll 2 (Lower side) */}
      <g transform="translate(140, 140) scale(0.85)">
        <path d="M 0 0 C -6 -10 -14 -8 -20 -12" stroke="#9C7A83" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M 0 0 C -2 -14 4 -20 0 -26" stroke="#9C7A83" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M 0 0 C 10 -10 18 -12 24 -16" stroke="#9C7A83" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="-8" cy="-10" r="11" fill="#FFFFFF" fillOpacity="0.9" />
        <circle cx="5" cy="-14" r="12" fill="#FFFFFF" fillOpacity="0.92" />
        <circle cx="13" cy="-2" r="11" fill="#FFFFFF" fillOpacity="0.88" />
        <circle cx="0" cy="2" r="10" fill="#FFFFFF" fillOpacity="0.9" />
      </g>
    </svg>
  );
}

// Floating Petals Scatter for gentle atmosphere
export function PetalDrift({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none select-none overflow-hidden ${className}`} aria-hidden="true">
      <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
        <path
          d="M 20 30 C 25 22 35 24 33 34 C 30 40 22 38 20 30 Z"
          fill="#F472B6"
          opacity="0.35"
          transform="rotate(15 25 30)"
        />
        <path
          d="M 75 60 C 80 54 88 56 86 64 C 84 68 78 66 75 60 Z"
          fill="#F472B6"
          opacity="0.25"
          transform="rotate(-25 80 60)"
        />
        <path
          d="M 50 85 C 53 80 59 82 58 87 C 56 90 52 89 50 85 Z"
          fill="#F472B6"
          opacity="0.2"
          transform="rotate(45 54 85)"
        />
      </svg>
    </div>
  );
}
