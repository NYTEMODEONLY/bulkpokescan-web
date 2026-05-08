"use client";

import { cn } from "@/lib/cn";

interface CardQRProps {
  size?: number;
  watermark?: boolean;
  className?: string;
}

/**
 * Trading-card brand mark: white card → yellow→red gradient interior →
 * stylized QR square → yellow energy bar. Mirrors `CardQRIcon` (iOS) and
 * `paint_card_qr` (Python desktop).
 */
const QR_GRID: ReadonlyArray<ReadonlyArray<0 | 1>> = [
  [1, 1, 1, 0, 1, 1, 1],
  [1, 0, 1, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 0, 1],
  [0, 0, 1, 1, 0, 1, 0],
  [1, 1, 1, 0, 1, 1, 1],
  [1, 0, 0, 1, 0, 0, 1],
  [1, 1, 1, 0, 1, 1, 1],
];

export function CardQR({ size = 42, watermark, className }: CardQRProps) {
  const dim = size;
  const cx = dim / 2;
  const cy = dim / 2;

  const cardW = dim * 0.78;
  const cardH = dim * 0.96;
  const cardX = cx - cardW / 2;
  const cardY = cy - cardH / 2;
  const cardCorner = cardW * 0.12;

  const inset = cardW * 0.045;
  const innerCorner = Math.max(0, cardCorner - inset);

  const qrSize = cardW * 0.62;
  const qrX = cx - qrSize / 2;
  const qrY = cardY + cardH * 0.16;
  const qrCorner = qrSize * 0.1;

  const modules = QR_GRID.length;
  const qrPad = qrSize * 0.1;
  const cell = (qrSize - 2 * qrPad) / modules;

  const bandW = cardW * 0.5;
  const bandH = Math.max(2, cardH * 0.06);
  const bandX = cx - bandW / 2;
  const bandY = cardY + cardH - inset - bandH - cardH * 0.05;

  const ink = "#101018";
  const stroke = Math.max(1, dim * 0.012);

  const gradId = `cardqr-grad-${size}`;

  return (
    <svg
      aria-hidden
      className={cn("block shrink-0", className)}
      width={size}
      height={size}
      viewBox={`0 0 ${dim} ${dim}`}
      style={{ opacity: watermark ? 0.2 : 1 }}
    >
      <defs>
        <linearGradient id={gradId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--color-yellow)" />
          <stop offset="100%" stopColor="var(--color-red)" />
        </linearGradient>
      </defs>

      {/* White card border */}
      <rect
        x={cardX}
        y={cardY}
        width={cardW}
        height={cardH}
        rx={cardCorner}
        ry={cardCorner}
        fill="#fff"
      />

      {/* Gradient interior */}
      <rect
        x={cardX + inset}
        y={cardY + inset}
        width={cardW - 2 * inset}
        height={cardH - 2 * inset}
        rx={innerCorner}
        ry={innerCorner}
        fill={`url(#${gradId})`}
      />

      {/* QR plate */}
      <rect
        x={qrX}
        y={qrY}
        width={qrSize}
        height={qrSize}
        rx={qrCorner}
        ry={qrCorner}
        fill="#fff"
      />

      {/* QR modules */}
      {QR_GRID.flatMap((row, r) =>
        row.map((on, c) =>
          on ? (
            <rect
              key={`${r}-${c}`}
              x={qrX + qrPad + c * cell}
              y={qrY + qrPad + r * cell}
              width={cell}
              height={cell}
              fill={ink}
            />
          ) : null,
        ),
      )}

      {/* Energy bar */}
      <rect
        x={bandX}
        y={bandY}
        width={bandW}
        height={bandH}
        rx={bandH / 2}
        ry={bandH / 2}
        fill="var(--color-yellow)"
        stroke={ink}
        strokeWidth={stroke}
      />
    </svg>
  );
}
