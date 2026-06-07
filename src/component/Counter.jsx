import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion"
import { useEffect, useRef } from "react"

export function Counter({ end }) {
  const ref = useRef(null)
  const count = useMotionValue(0)
  const rounded = useTransform(count, v => Math.round(v).toLocaleString())
  const isInView = useInView(ref)

  useEffect(() => {
    if (isInView) animate(count, end, { duration: 1 })
  }, [isInView])

  return <motion.span ref={ref}>{rounded}</motion.span>
}