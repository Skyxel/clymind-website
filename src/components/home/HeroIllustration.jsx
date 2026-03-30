const LED_ANGLES = [0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330];

export default function HeroIllustration() {
  return (
    <svg
      viewBox="0 0 580 510"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{ width: '100%', maxWidth: '620px', height: 'auto' }}
    >
      <defs>
        {/* Ceramic body */}
        <linearGradient id="bodyGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%"   stopColor="#cecec9" />
          <stop offset="16%"  stopColor="#eaeae5" />
          <stop offset="48%"  stopColor="#f8f8f4" />
          <stop offset="84%"  stopColor="#e6e6e2" />
          <stop offset="100%" stopColor="#c9c9c5" />
        </linearGradient>

        {/* Collar ring */}
        <linearGradient id="collarGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%"   stopColor="#b8b8b4" />
          <stop offset="40%"  stopColor="#dededb" />
          <stop offset="100%" stopColor="#b4b4b0" />
        </linearGradient>

        {/* Frosted glass dome */}
        <radialGradient id="domeGrad" cx="33%" cy="20%" r="75%">
          <stop offset="0%"   stopColor="#ffffff" stopOpacity="0.28" />
          <stop offset="30%"  stopColor="#e6f4ed" stopOpacity="0.09" />
          <stop offset="70%"  stopColor="#d0ece4" stopOpacity="0.04" />
          <stop offset="100%" stopColor="#c4e6de" stopOpacity="0.01" />
        </radialGradient>

        {/* Ground shadow */}
        <radialGradient id="gs" cx="50%" cy="50%" r="50%">
          <stop offset="0%"   stopColor="#000" stopOpacity="0.11" />
          <stop offset="100%" stopColor="#000" stopOpacity="0" />
        </radialGradient>

        {/* LED glow */}
        <filter id="glow" x="-60%" y="-500%" width="220%" height="1100%">
          <feGaussianBlur stdDeviation="4.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Vase shadow */}
        <filter id="vs" x="-22%" y="-8%" width="144%" height="130%">
          <feDropShadow dx="0" dy="14" stdDeviation="22" floodColor="#000" floodOpacity="0.07" />
        </filter>

        {/* Phone shadow */}
        <filter id="ps" x="-28%" y="-12%" width="156%" height="136%">
          <feDropShadow dx="5" dy="14" stdDeviation="24" floodColor="#000" floodOpacity="0.10" />
        </filter>

        {/* Screen clip */}
        <clipPath id="sc">
          <rect x="79" y="135" width="134" height="266" rx="14" />
        </clipPath>
      </defs>

      {/* Ground shadow */}
      <ellipse cx="390" cy="474" rx="118" ry="11" fill="url(#gs)" />

      {/* ─── VASE ─── */}
      <g filter="url(#vs)">

        {/* BODY */}
        <path
          d="M 293 285
             L 297 459 Q 297 471 309 471
             L 471 471 Q 483 471 483 459
             L 487 285 Z"
          fill="url(#bodyGrad)"
        />

        {/* Collar ring (physical ledge where dome rests) */}
        <path
          d="M 284 285 Q 284 296 296 296
             L 484 296 Q 496 296 496 285
             Q 496 274 484 274 L 296 274
             Q 284 274 284 285 Z"
          fill="url(#collarGrad)"
        />

        {/* DOME */}
        <path
          d="M 293 285 A 97 197 0 0 1 487 285 Z"
          fill="url(#domeGrad)"
          stroke="#d4d4d0"
          strokeWidth="1"
        />
      </g>

      {/* ─── PLANT (rendered before dome so glass overlays it) ─── */}

      {/* Soil */}
      <ellipse cx="390" cy="281" rx="48" ry="7" fill="#6a4a2a" />
      <ellipse cx="390" cy="277" rx="39" ry="4.5" fill="#886040" />

      {/* Main stem */}
      <path d="M 390 273 Q 386 194 391 112" stroke="#2a5030" strokeWidth="2.8" strokeLinecap="round" fill="none" />

      {/* — Pair 1 bottom: large leaves — */}
      {/* right */}
      <path d="M 392 263 C 432 244 464 216 472 195 C 454 210 422 237 392 263 Z" fill="#375f45" />
      <path d="M 392 263 C 434 242 466 213 472 195" stroke="#2a5030" strokeWidth="0.9" strokeLinecap="round" fill="none" opacity="0.45" />
      {/* left */}
      <path d="M 388 263 C 348 244 316 216 308 195 C 326 210 358 237 388 263 Z" fill="#4a7855" />
      <path d="M 388 263 C 346 242 314 213 308 195" stroke="#2a5030" strokeWidth="0.9" strokeLinecap="round" fill="none" opacity="0.45" />

      {/* — Pair 2: mid leaves — */}
      {/* right */}
      <path d="M 392 240 C 424 219 454 191 460 170 C 443 183 416 210 392 240 Z" fill="#4c7e5e" />
      <path d="M 392 240 C 426 217 456 188 460 170" stroke="#2a5030" strokeWidth="0.8" strokeLinecap="round" fill="none" opacity="0.4" />
      {/* left */}
      <path d="M 388 240 C 356 219 326 191 320 170 C 337 183 364 210 388 240 Z" fill="#395842" />
      <path d="M 388 240 C 354 217 324 188 320 170" stroke="#2a5030" strokeWidth="0.8" strokeLinecap="round" fill="none" opacity="0.4" />

      {/* — Pair 3: upper leaves — */}
      {/* right */}
      <path d="M 392 213 C 416 194 440 169 443 150 C 429 163 406 188 392 213 Z" fill="#588660" />
      <path d="M 392 213 C 418 192 442 166 443 150" stroke="#2a5030" strokeWidth="0.7" strokeLinecap="round" fill="none" opacity="0.35" />
      {/* left */}
      <path d="M 388 213 C 364 194 340 169 337 150 C 351 163 374 188 388 213 Z" fill="#4c7e5e" />
      <path d="M 388 213 C 362 192 338 166 337 150" stroke="#2a5030" strokeWidth="0.7" strokeLinecap="round" fill="none" opacity="0.35" />

      {/* — Crown — */}
      <path d="M 392 180 C 406 163 415 141 412 124 C 405 138 394 160 392 180 Z" fill="#375f45" />
      <path d="M 388 180 C 374 163 365 141 368 124 C 375 138 386 160 388 180 Z" fill="#588660" />

      {/* Tip bud */}
      <ellipse cx="390" cy="116" rx="5.5" ry="9.5" fill="#2a5030" />
      <ellipse cx="390" cy="119" rx="3.5" ry="6.5" fill="#4a7855" />

      {/* ─── DOME GLASS OVERLAY (on top of plant) ─── */}

      {/* Very subtle tint to reinforce glass volume */}
      <path d="M 293 285 A 97 197 0 0 1 487 285 Z" fill="#c8e8de" fillOpacity="0.055" stroke="none" />

      {/* Primary reflection arc */}
      <path d="M 318 246 Q 336 178 374 134" stroke="#ffffff" strokeWidth="3.5" strokeLinecap="round" fill="none" opacity="0.42" />
      {/* Secondary thin arc */}
      <path d="M 305 272 Q 308 246 317 224" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" fill="none" opacity="0.20" />
      {/* Small specular highlight near top */}
      <ellipse cx="355" cy="118" rx="9" ry="5" fill="#ffffff" fillOpacity="0.14" transform="rotate(-35, 355, 118)" />

      {/* ─── LED RING ─── */}

      {/* Glow halo */}
      <ellipse cx="390" cy="285" rx="97" ry="5.5" fill="none" stroke="#4a7855" strokeWidth="3.5" opacity="0.4" filter="url(#glow)" />
      {/* Bright line */}
      <ellipse cx="390" cy="285" rx="97" ry="4" fill="none" stroke="#80cc90" strokeWidth="1.2" opacity="0.65" />
      {/* LED dots */}
      {LED_ANGLES.map((deg, i) => {
        const r = (deg * Math.PI) / 180;
        const cx = 390 + 97 * Math.cos(r);
        const cy = 285 + 4 * Math.sin(r);
        return (
          <circle key={i} cx={cx} cy={cy} r="1.6"
            fill="#80cc90"
            opacity={deg % 90 === 0 ? 0.9 : 0.38}
          />
        );
      })}

      {/* ─── BODY DETAILS ─── */}

      {/* Subtle groove lines */}
      <path d="M 304 340 Q 390 344 476 340" stroke="#e0e0dc" strokeWidth="0.9" strokeLinecap="round" opacity="0.65" fill="none" />
      <path d="M 306 356 Q 390 360 474 356" stroke="#e0e0dc" strokeWidth="0.9" strokeLinecap="round" opacity="0.45" fill="none" />

      {/* CLYMIND engraving */}
      <text x="390" y="393" textAnchor="middle" fontSize="9" fill="#bebeba"
        letterSpacing="5.5" fontFamily="Inter, system-ui, sans-serif" fontWeight="500">
        CLYMIND
      </text>

      {/* Bottom LED accent strip */}
      <path d="M 334 464 Q 390 469 446 464" stroke="#4a7855" strokeWidth="1.5" strokeLinecap="round" opacity="0.38" fill="none" />

      {/* ─── PHONE ─── */}
      <g filter="url(#ps)">
        {/* Frame */}
        <rect x="72" y="120" width="148" height="296" rx="24" fill="#f0f0ec" />
        <rect x="72" y="120" width="148" height="296" rx="24" stroke="#d8d8d4" strokeWidth="1" fill="none" />
        {/* Screen */}
        <rect x="79" y="135" width="134" height="266" rx="14" fill="#07100a" />
        {/* Dynamic Island */}
        <rect x="122" y="143" width="48" height="11" rx="5.5" fill="#0e1a10" />

        <g clipPath="url(#sc)">
          {/* Time */}
          <text x="95" y="162" fontSize="8" fill="#ffffff" fontFamily="Inter, sans-serif" fontWeight="600" opacity="0.6">9:41</text>

          {/* App name */}
          <text x="146" y="176" textAnchor="middle" fontSize="9.5" fill="#ffffff" fontFamily="Inter, sans-serif" fontWeight="600" letterSpacing="0.3">ClyMind</text>

          {/* Health card */}
          <rect x="86" y="184" width="120" height="68" rx="12" fill="#0c1e0e" />

          {/* Plant icon */}
          <circle cx="103" cy="207" r="11" fill="#131f14" />
          <path d="M 103 211 Q 98 204 100 196 Q 104 201 103 210" fill="#4a7855" />
          <path d="M 103 211 Q 108 204 106 196 Q 102 201 103 210" fill="#375f45" />

          <text x="120" y="199" fontSize="7" fill="#567056" fontFamily="Inter, sans-serif">Plant health</text>
          <text x="120" y="212" fontSize="14" fill="#ffffff" fontFamily="Inter, sans-serif" fontWeight="700">87%</text>

          <rect x="120" y="220" width="78" height="4" rx="2" fill="#131f14" />
          <rect x="120" y="220" width="67" height="4" rx="2" fill="#4a7855" />

          <text x="120" y="235" fontSize="7" fill="#55aa6a" fontFamily="Inter, sans-serif">↑ 12 day streak</text>

          {/* Divider */}
          <line x1="86" y1="262" x2="206" y2="262" stroke="#162018" strokeWidth="0.8" />

          <text x="86" y="276" fontSize="6.5" fill="#3e5e40" fontFamily="Inter, sans-serif" fontWeight="600" letterSpacing="1">TODAY</text>

          {/* Habit 1 – done */}
          <rect x="86" y="282" width="120" height="28" rx="8" fill="#0c1e0e" />
          <circle cx="101" cy="296" r="7" fill="#4a7855" />
          <path d="M 97 296 L 100 299 L 105 293" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <text x="114" y="294" fontSize="7.5" fill="#cccccc" fontFamily="Inter, sans-serif">Morning run</text>
          <text x="114" y="305" fontSize="6.5" fill="#4a7855" fontFamily="Inter, sans-serif">Completed</text>

          {/* Habit 2 – pending */}
          <rect x="86" y="314" width="120" height="28" rx="8" fill="#090f0a" />
          <circle cx="101" cy="328" r="7" fill="none" stroke="#243026" strokeWidth="1.5" />
          <text x="114" y="326" fontSize="7.5" fill="#666666" fontFamily="Inter, sans-serif">Read 20 pages</text>
          <text x="114" y="337" fontSize="6.5" fill="#384038" fontFamily="Inter, sans-serif">Pending</text>

          {/* Habit 3 – pending */}
          <rect x="86" y="346" width="120" height="28" rx="8" fill="#090f0a" />
          <circle cx="101" cy="360" r="7" fill="none" stroke="#243026" strokeWidth="1.5" />
          <text x="114" y="358" fontSize="7.5" fill="#666666" fontFamily="Inter, sans-serif">Meditate</text>
          <text x="114" y="369" fontSize="6.5" fill="#384038" fontFamily="Inter, sans-serif">Pending</text>

          {/* Bottom nav */}
          <rect x="79" y="376" width="134" height="36" fill="#060d07" />
          <line x1="79" y1="376" x2="213" y2="376" stroke="#111e13" strokeWidth="0.8" />
          <circle cx="112" cy="394" r="4" fill="#4a7855" />
          <rect x="141" y="390" width="9" height="1.5" rx="0.75" fill="#243026" />
          <rect x="141" y="394" width="9" height="1.5" rx="0.75" fill="#243026" />
          <rect x="141" y="398" width="6" height="1.5" rx="0.75" fill="#243026" />
          <circle cx="180" cy="394" r="3.5" fill="none" stroke="#243026" strokeWidth="1.5" />
          <rect x="122" y="407" width="48" height="3" rx="1.5" fill="#182018" />
        </g>
      </g>
    </svg>
  );
}
