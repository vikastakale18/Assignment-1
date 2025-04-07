"use client"

import { useEffect, useRef } from "react"

export default function VisitorsChart() {
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

    // Chart data (approximated from the image)
    const data = [20, 25, 30, 25, 20, 15, 20, 25, 20, 15, 10, 15, 10, 15, 30, 40, 25, 35, 30, 40]

    // Chart dimensions
    const chartWidth = rect.width
    const chartHeight = rect.height
    const padding = 20
    const graphHeight = chartHeight - padding * 2
    const graphWidth = chartWidth - padding * 2
    const pointSpacing = graphWidth / (data.length - 1)

    // Find min and max values
    const maxValue = Math.max(...data)
    const minValue = Math.min(...data)
    const valueRange = maxValue - minValue

    // Draw chart
    ctx.clearRect(0, 0, chartWidth, chartHeight)

    // Draw grid lines
    ctx.beginPath()
    ctx.strokeStyle = "#333"
    ctx.lineWidth = 1

    // Horizontal grid lines
    for (let i = 0; i <= 4; i++) {
      const y = padding + (graphHeight / 4) * i
      ctx.moveTo(padding, y)
      ctx.lineTo(chartWidth - padding, y)
    }
    ctx.stroke()

    // Draw line chart
    ctx.beginPath()
    ctx.strokeStyle = "#fff"
    ctx.lineWidth = 2

    data.forEach((value, index) => {
      const x = padding + index * pointSpacing
      const normalizedValue = (value - minValue) / valueRange
      const y = chartHeight - padding - normalizedValue * graphHeight

      if (index === 0) {
        ctx.moveTo(x, y)
      } else {
        ctx.lineTo(x, y)
      }
    })

    ctx.stroke()

    // Draw points
    data.forEach((value, index) => {
      const x = padding + index * pointSpacing
      const normalizedValue = (value - minValue) / valueRange
      const y = chartHeight - padding - normalizedValue * graphHeight

      ctx.beginPath()
      ctx.arc(x, y, 3, 0, Math.PI * 2)
      ctx.fillStyle = "#fff"
      ctx.fill()
    })
  }, [])

  return (
    <div className="h-40">
      <canvas ref={canvasRef} className="w-full h-full" style={{ display: "block" }} />
    </div>
  )
}

