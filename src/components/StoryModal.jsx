import { useEffect, useRef } from 'react'
import { X } from 'lucide-react'

function StoryModal({ open, onClose }) {
  const closeRef = useRef(null)

  useEffect(() => {
    if (!open) return undefined
    closeRef.current?.focus()
    const handleKey = (event) => event.key === 'Escape' && onClose()
    document.body.classList.add('modal-open')
    window.addEventListener('keydown', handleKey)
    return () => {
      document.body.classList.remove('modal-open')
      window.removeEventListener('keydown', handleKey)
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
      <section className="story-modal" role="dialog" aria-modal="true" aria-labelledby="story-title">
        <div className="modal-header"><div><p className="eyebrow">VOE STORY FILM</p><h2 id="story-title">A voice takes shape.</h2></div><button ref={closeRef} className="icon-button" type="button" onClick={onClose} aria-label="Close story video"><X aria-hidden="true" /></button></div>
        <video controls playsInline poster="/media/voe-intro-poster.webp" preload="metadata">
          <source src="/media/voe-intro.mp4" type="video/mp4" />
        </video>
      </section>
    </div>
  )
}

export default StoryModal

