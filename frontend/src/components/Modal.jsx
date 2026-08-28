import { useEffect } from 'react'

function Modal({ title, onClose, children }) {
  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [onClose])

  function handleOverlayClick(event) {
    if (event.target === event.currentTarget) {
      onClose()
    }
  }

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <section
        className="transaction-modal"
        aria-labelledby="modal-title"
        aria-modal="true"
        role="dialog"
      >
        <div className="transaction-modal__header">
          <h2 id="modal-title">{title}</h2>

          <button
            className="modal-close-button"
            type="button"
            aria-label="Fechar janela"
            onClick={onClose}
          >
            ×
          </button>
        </div>

        {children}
      </section>
    </div>
  )
}

export default Modal