"use client"

import { useEffect, useRef } from "react"

export default function WorldMap() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions with higher resolution for retina displays
    const dpr = window.devicePixelRatio || 1
    const rect = canvas.getBoundingClientRect()
    canvas.width = rect.width * dpr
    canvas.height = rect.height * dpr
    ctx.scale(dpr, dpr)

    // Draw simplified world map
    const mapWidth = rect.width
    const mapHeight = rect.height

    // Background
    ctx.fillStyle = "#1f2937"
    ctx.fillRect(0, 0, mapWidth, mapHeight)

    // Draw dots representing countries
    const dots = [
      { x: mapWidth * 0.7, y: mapHeight * 0.3, size: 8, color: "#f59e0b" }, // India
      { x: mapWidth * 0.2, y: mapHeight * 0.3, size: 6, color: "#3b82f6" }, // USA
      { x: mapWidth * 0.2, y: mapHeight * 0.25, size: 4, color: "#ef4444" }, // Canada
      { x: mapWidth * 0.45, y: mapHeight * 0.25, size: 3, color: "#10b981" }, // UK
      // Add more dots for other countries
      { x: mapWidth * 0.5, y: mapHeight * 0.6, size: 2, color: "#8b5cf6" },
      { x: mapWidth * 0.8, y: mapHeight * 0.7, size: 2, color: "#ec4899" },
      { x: mapWidth * 0.3, y: mapHeight * 0.7, size: 2, color: "#f97316" },
    ]

    // Draw world map outline (simplified)
    ctx.beginPath()
    ctx.strokeStyle = "#374151"
    ctx.lineWidth = 1

    // Draw simplified continents
    // North America
    ctx.moveTo(mapWidth * 0.1, mapHeight * 0.3)
    ctx.lineTo(mapWidth * 0.25, mapHeight * 0.2)
    ctx.lineTo(mapWidth * 0.3, mapHeight * 0.4)

    // South America
    ctx.moveTo(mapWidth * 0.25, mapHeight * 0.5)
    ctx.lineTo(mapWidth * 0.3, mapHeight * 0.7)
    ctx.lineTo(mapWidth * 0.2, mapHeight * 0.8)

    // Europe
    ctx.moveTo(mapWidth * 0.45, mapHeight * 0.2)
    ctx.lineTo(mapWidth * 0.55, mapHeight * 0.3)
    ctx.lineTo(mapWidth * 0.5, mapHeight * 0.4)

    // Africa
    ctx.moveTo(mapWidth * 0.45, mapHeight * 0.4)
    ctx.lineTo(mapWidth * 0.55, mapHeight * 0.7)
    ctx.lineTo(mapWidth * 0.45, mapHeight * 0.8)

    // Asia
    ctx.moveTo(mapWidth * 0.55, mapHeight * 0.3)
    ctx.lineTo(mapWidth * 0.8, mapHeight * 0.3)
    ctx.lineTo(mapWidth * 0.85, mapHeight * 0.5)
    ctx.lineTo(mapWidth * 0.7, mapHeight * 0.7)

    // Australia
    ctx.moveTo(mapWidth * 0.8, mapHeight * 0.7)
    ctx.lineTo(mapWidth * 0.9, mapHeight * 0.7)
    ctx.lineTo(mapWidth * 0.85, mapHeight * 0.8)
    ctx.lineTo(mapWidth * 0.75, mapHeight * 0.8)
    ctx.lineTo(mapWidth * 0.8, mapHeight * 0.7)

    ctx.stroke()

    // Draw dots
    dots.forEach((dot) => {
      ctx.beginPath()
      ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2)
      ctx.fillStyle = dot.color
      ctx.fill()

      // Draw glow effect
      ctx.beginPath()
      const gradient = ctx.createRadialGradient(dot.x, dot.y, 0, dot.x, dot.y, dot.size * 3)
      gradient.addColorStop(0, dot.color + "80") // Semi-transparent
      gradient.addColorStop(1, "transparent")
      ctx.fillStyle = gradient
      ctx.arc(dot.x, dot.y, dot.size * 3, 0, Math.PI * 2)
      ctx.fill()
    })
  }, [])

  return (
    <div className="h-48 md:h-64">
      <canvas ref={canvasRef} className="w-full h-full" style={{ display: "block" }} />
    </div>
  )
}

