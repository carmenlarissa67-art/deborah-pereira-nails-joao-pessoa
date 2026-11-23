import React from 'react';

// Logo da Deborah Pereira: "Deborah" em letra cursiva, PEREIRA em serifa
// espaçada, traço dourado com um losango vermelho (o xadrez das nail arts dela)
// e "nails".
export default function Logo({ light = false }) {
  const main = light ? '#f4e8e2' : '#2c1114';
  const accent = light ? '#c9a45c' : '#9a7433';
  const red = light ? '#d4404c' : '#a3121f';
  return (
    <span className="inline-flex items-center gap-2 leading-none select-none" aria-label="Deborah Pereira Nails">
      <span className="font-script text-[2.5rem] sm:text-[2.8rem] leading-[0.8] pt-1" style={{ color: main }}>Deborah</span>
      <span className="flex flex-col items-start">
        <span className="font-serif font-semibold text-[0.95rem] sm:text-[1.05rem] tracking-[0.36em]" style={{ color: main }}>PEREIRA</span>
        <svg viewBox="0 0 90 8" className="w-[5.4rem] h-1.5 my-0.5" fill="none" aria-hidden="true">
          <path d="M1 4h38M51 4h38" stroke={accent} strokeWidth="0.9" strokeLinecap="round" />
          <path d="M45 0.6L48.4 4 45 7.4 41.6 4z" fill={red} />
        </svg>
        <span className="text-[7.5px] tracking-[0.42em] font-medium uppercase" style={{ color: accent }}>nails</span>
      </span>
    </span>
  );
}
