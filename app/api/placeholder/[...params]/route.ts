import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest, { params }: { params: { params: string[] } }) {
  const [width, height] = params.params
  const w = parseInt(width) || 400
  const h = parseInt(height) || 400

  // Create a simple SVG placeholder
  const svg = `
    <svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#e11d48;stop-opacity:0.1" />
          <stop offset="100%" style="stop-color:#7c3aed;stop-opacity:0.2" />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#grad)" />
      <circle cx="${w/2}" cy="${h/2}" r="${Math.min(w,h)/3}" fill="none" stroke="#e11d48" stroke-width="2" opacity="0.3"/>
      <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="system-ui" font-size="16" fill="#64748b">
        ${w}×${h}
      </text>
    </svg>
  `

  return new NextResponse(svg, {
    headers: {
      'Content-Type': 'image/svg+xml',
      'Cache-Control': 'public, max-age=31536000, immutable'
    }
  })
}