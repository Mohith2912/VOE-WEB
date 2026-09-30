import { useEffect, useState } from 'react'

function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const update = () => {
      const distance = document.documentElement.scrollHeight - window.innerHeight
      setProgress(distance > 0 ? window.scrollY / distance : 0)
    }
    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  return <div className="scroll-progress" aria-hidden="true"><span style={{ transform: `scaleY(${progress})` }} /></div>
}

export default ScrollProgress

