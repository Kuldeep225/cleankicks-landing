import { useState } from 'react'
import { motion } from 'framer-motion'

const BeforeAfter = () => {
  const [sliderPosition, setSliderPosition] = useState(50)

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const newPosition = ((e.clientX - rect.left) / rect.width) * 100
    setSliderPosition(Math.max(0, Math.min(100, newPosition)))
  }

  const handleTouchMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const newPosition = ((e.touches[0].clientX - rect.left) / rect.width) * 100
    setSliderPosition(Math.max(0, Math.min(100, newPosition)))
  }

  return (
    <section className="py-20 bg-black overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-bold text-sm tracking-widest uppercase mb-4">Results That Speak</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">See The Difference In Minutes</h2>
          <p className="text-white/60 max-w-2xl mx-auto">Drag the slider to see the incredible transformation our CleanKicks kit delivers</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative max-w-4xl mx-auto overflow-hidden rounded-2xl"
          onMouseMove={handleMouseMove}
          onTouchMove={handleTouchMove}
          style={{ cursor: 'grab' }}
        >
          <div className="relative w-full">
            <img
              src="/shoe-after.jpg"
              alt="After Cleaning"
              className="w-full h-auto block"
            />
            <div className="absolute top-6 right-6 bg-primary/90 backdrop-blur-md px-4 py-2 rounded-full text-white text-sm font-bold">
              AFTER
            </div>
          </div>

          <div
            className="absolute inset-0 overflow-hidden"
            style={{ width: `${sliderPosition}%` }}
          >
            <img
              src="/shoe-before.jpg"
              alt="Before Cleaning"
              className="w-screen h-auto block"
              style={{ width: `${100 * (100 / sliderPosition) || 100}%` }}
            />
            <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full text-black text-sm font-bold">
              BEFORE
            </div>
          </div>

          <div
            className="absolute top-0 bottom-0 w-1 bg-white"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white text-black p-3 rounded-full shadow-lg">
              <div className="flex items-center gap-2">
                <span>◀</span>
                <span>▶</span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-white/70 mb-6">Ready to bring your sneakers back to life?</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary inline-flex items-center gap-2"
          >
            Get Your Kit Now
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default BeforeAfter
