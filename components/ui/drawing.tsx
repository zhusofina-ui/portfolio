'use client'

import { useRef, useState, useEffect, MouseEvent, TouchEvent } from 'react'

export default function InteractiveWhiteboard() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isDrawing, setIsDrawing] = useState(false)
  const [color, setColor] = useState('#4A3323') // Default Brown
  const [isEraser, setIsEraser] = useState(false)

  // Set up canvas sizing when it loads
  useEffect(() => {
    const canvas = canvasRef.current
    if (canvas) {
      // Make canvas resolution high quality
      canvas.width = canvas.offsetWidth * 2
      canvas.height = canvas.offsetHeight * 2
      const ctx = canvas.getContext('2d')
      if (ctx) {
        ctx.scale(2, 2)
        ctx.lineCap = 'round'
        ctx.lineJoin = 'round'
      }
    }
  }, [])

  // Drawing Functions
  const startDrawing = (e: MouseEvent<HTMLCanvasElement> | TouchEvent<HTMLCanvasElement>) => {
    setIsDrawing(true)
    draw(e)
  }

  const stopDrawing = () => {
    setIsDrawing(false)
    const ctx = canvasRef.current?.getContext('2d')
    if (ctx) ctx.beginPath() // Reset path so next line doesn't connect
  }

  const draw = (e: MouseEvent<HTMLCanvasElement> | TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return
    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')
    if (!canvas || !ctx) return

    // Get exact mouse/touch position relative to the canvas
    const rect = canvas.getBoundingClientRect()
    let clientX, clientY

    if ('touches' in e) {
      clientX = e.touches[0].clientX
      clientY = e.touches[0].clientY
    } else {
      clientX = (e as MouseEvent).clientX
      clientY = (e as MouseEvent).clientY
    }

    const x = clientX - rect.left
    const y = clientY - rect.top

    ctx.lineWidth = isEraser ? 20 : 4
    ctx.strokeStyle = isEraser ? '#FDF8E4' : color // #FDF8E4 is the canvas background color

    ctx.lineTo(x, y)
    ctx.stroke()
    ctx.beginPath()
    ctx.moveTo(x, y)
  }

  const clearCanvas = () => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')
    if (canvas && ctx) {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
    }
  }

  return (
  <div className="w-full bg-[#FDF8E4] py-32">
    <div className="flex flex-col md:flex-row gap-8 w-full max-w-5xl items-start justify-center mx-auto">
        
      {/* LEFT TOOLBAR */}
      <div className="w-full md:w-64 bg-[#F2D4DA] p-6 rounded-2xl border-[3px] border-[#4A3323] shadow-[6px_6px_0px_#4A3323] flex flex-col gap-6">
        
        {/* Colors Section */}
        <div>
          <h3 className="text-xs tracking-widest text-[#4A3323] mb-3 border-b border-[#4A3323]/30 pb-1">COLOURS</h3>
          <div className="flex flex-wrap gap-3">
            {[
              { id: 'brown', hex: '#4A3323' },
              { id: 'pink', hex: '#F2D4DA' },
              { id: 'white', hex: '#FFFFFF' },
            ].map((c) => (
              <button
                key={c.id}
                onClick={() => { setColor(c.hex); setIsEraser(false); }}
                className={`w-8 h-8 rounded-full border-2 border-[#4A3323] transition-transform ${
                  color === c.hex && !isEraser ? 'scale-125 ring-2 ring-offset-2 ring-[#4A3323]' : 'hover:scale-110'
                }`}
                style={{ backgroundColor: c.hex }}
              />
            ))}
          </div>
        </div>

        {/* Tools Section */}
        <div>
          <h3 className="text-xs tracking-widest text-[#4A3323] mb-3 border-b border-[#4A3323]/30 pb-1">TOOLS</h3>
          <div className="flex flex-col gap-3">
            <button 
              onClick={() => setIsEraser(false)}
              className={`px-4 py-2 rounded-lg border-2 border-[#4A3323] text-left transition-colors ${
                !isEraser ? 'bg-[#4A3323] text-[#FDF8E4]' : 'bg-[#FDF8E4] text-[#4A3323] hover:bg-[#FDF8E4]/80'
              }`}
            >
              Pencil
            </button>
            <button 
              onClick={() => setIsEraser(true)}
              className={`px-4 py-2 rounded-lg border-2 border-[#4A3323] text-left transition-colors ${
                isEraser ? 'bg-[#4A3323] text-[#FDF8E4]' : 'bg-[#FDF8E4] text-[#4A3323] hover:bg-[#FDF8E4]/80'
              }`}
            >
              Eraser
            </button>
          </div>
        </div>

        {/* Actions Section */}
        <div>
          <h3 className="text-xs tracking-widest text-[#4A3323] mb-3 border-b border-[#4A3323]/30 pb-1">ACTIONS</h3>
          <div className="flex flex-col gap-3">
            <button className="px-4 py-2 rounded-lg border-2 border-[#4A3323] bg-[#E5B5C1] text-[#4A3323] hover:brightness-95 transition-all">
              + Add Note
            </button>
            <button 
              onClick={clearCanvas}
              className="px-4 py-2 rounded-lg border-2 border-[#4A3323] bg-white text-[#4A3323] hover:bg-gray-50 transition-all"
            >
              Clear All
            </button>
          </div>
        </div>
      </div>

      {/* RIGHT CANVAS AREA */}
      <div className="flex-1 w-full relative group">
        {/* The shadow/background offset block */}
        <div className="absolute inset-0 bg-[#E8E1CD] rounded-2xl translate-x-3 translate-y-3" />
        
        {/* The actual drawing board */}
        <div className="relative bg-[#FDF8E4] p-3 rounded-2xl border-[3px] border-[#4A3323] w-full h-125">
          <canvas
            ref={canvasRef}
            onMouseDown={startDrawing}
            onMouseUp={stopDrawing}
            onMouseOut={stopDrawing}
            onMouseMove={draw}
            onTouchStart={startDrawing}
            onTouchEnd={stopDrawing}
            onTouchMove={draw}
            className="w-full h-full border-2 border-dashed border-[#4A3323]/40 rounded-xl cursor-crosshair touch-none"
          />
        </div>
      </div>

    </div>
  </div>
  )
}
