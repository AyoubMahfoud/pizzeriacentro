import React, { useState } from 'react'

const STORAGE_KEY = 'pizzeria-centro-cookie-preferences'

const defaultPreferences = {
  necessary: true,
  functional: false,
  analytics: false,
  marketing: false
}

const normalizePreferences = (value) => {
  const base = value && typeof value === 'object' ? value : {}
  return {
    necessary: true,
    functional: Boolean(base.functional),
    analytics: Boolean(base.analytics),
    marketing: Boolean(base.marketing)
  }
}

const getInitialState = () => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored) {
      const parsed = JSON.parse(stored)
      const nextPreferences = normalizePreferences(parsed.preferences || parsed)
      return {
        preferences: nextPreferences,
        hasConsent: true,
        isVisible: false
      }
    }
  } catch (error) {
    return {
      preferences: defaultPreferences,
      hasConsent: false,
      isVisible: true
    }
  }

  return {
    preferences: defaultPreferences,
    hasConsent: false,
    isVisible: true
  }
}

function CookieBanner() {
  const [initialState] = useState(() => getInitialState())
  const [preferences, setPreferences] = useState(initialState.preferences)
  const [isVisible, setIsVisible] = useState(initialState.isVisible)
  const [showDetails, setShowDetails] = useState(false)
  const [hasConsent, setHasConsent] = useState(initialState.hasConsent)

  const persistPreferences = (nextPreferences) => {
    const payload = {
      preferences: nextPreferences,
      updatedAt: new Date().toISOString()
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(payload))
    setPreferences(nextPreferences)
    setHasConsent(true)
    setIsVisible(false)
    setShowDetails(false)
  }

  const handleAcceptAll = () => {
    persistPreferences({
      necessary: true,
      functional: true,
      analytics: true,
      marketing: true
    })
  }

  const handleRejectAll = () => {
    persistPreferences({
      necessary: true,
      functional: false,
      analytics: false,
      marketing: false
    })
  }

  const handleSave = () => {
    persistPreferences(preferences)
  }

  const handleToggle = (key) => {
    setPreferences((prev) => ({
      ...prev,
      [key]: !prev[key]
    }))
  }

  const handleOpenPreferences = () => {
    setIsVisible(true)
    setShowDetails(true)
  }

  if (!isVisible && !hasConsent) {
    return null
  }

  return (
    <>
      <div
        className={`cookie-banner ${isVisible ? 'is-visible' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="cookie-title"
      >
        <div className="cookie-banner-header">
          <div>
            <p className="cookie-eyebrow">Gestione consenso</p>
            <h3 id="cookie-title">Preferenze Cookie</h3>
          </div>
          <div className="cookie-header-actions">
            <button
              type="button"
              className="cookie-link"
              onClick={() => setShowDetails((prev) => !prev)}
            >
              {showDetails ? 'Nascondi dettagli' : 'Dettagli'}
            </button>
            {hasConsent && (
              <button
                type="button"
                className="cookie-link"
                onClick={() => setIsVisible(false)}
              >
                Chiudi
              </button>
            )}
          </div>
        </div>

        <p className="cookie-description">
          Utilizziamo cookie tecnici necessari per il corretto funzionamento del sito e,
          solo con il tuo consenso, cookie funzionali, analitici e di profilazione.
          Puoi aggiornare le preferenze in qualsiasi momento.
        </p>

        <div className="cookie-preferences">
          <div className="cookie-toggle">
            <div>
              <h4>Necessari</h4>
              <p>Essenziali per la navigazione e per garantire le funzionalita di base.</p>
            </div>
            <label className="switch" aria-label="Cookie necessari">
              <input type="checkbox" checked disabled />
              <span className="slider"></span>
            </label>
          </div>

          <div className="cookie-toggle">
            <div>
              <h4>Funzionali</h4>
              <p>Memorizzano preferenze e migliorano l'esperienza di navigazione.</p>
            </div>
            <label className="switch" aria-label="Cookie funzionali">
              <input
                type="checkbox"
                checked={preferences.functional}
                onChange={() => handleToggle('functional')}
              />
              <span className="slider"></span>
            </label>
          </div>

          <div className="cookie-toggle">
            <div>
              <h4>Analitici</h4>
              <p>Raccolgono statistiche in forma aggregata sulle visite al sito.</p>
            </div>
            <label className="switch" aria-label="Cookie analitici">
              <input
                type="checkbox"
                checked={preferences.analytics}
                onChange={() => handleToggle('analytics')}
              />
              <span className="slider"></span>
            </label>
          </div>

          <div className="cookie-toggle">
            <div>
              <h4>Profilazione</h4>
              <p>Aiutano a mostrarti contenuti promozionali in linea con i tuoi interessi.</p>
            </div>
            <label className="switch" aria-label="Cookie di profilazione">
              <input
                type="checkbox"
                checked={preferences.marketing}
                onChange={() => handleToggle('marketing')}
              />
              <span className="slider"></span>
            </label>
          </div>
        </div>

        {showDetails && (
          <div className="cookie-details">
            <h4>Dettagli sulle categorie</h4>
            <ul>
              <li>Cookie tecnici: sempre attivi, necessari al funzionamento del sito.</li>
              <li>Cookie funzionali: ricordano impostazioni e preferenze selezionate.</li>
              <li>Cookie analitici: misurano performance e utilizzo del sito.</li>
              <li>Cookie di profilazione: personalizzano comunicazioni e promozioni.</li>
            </ul>
          </div>
        )}

        <div className="cookie-actions">
          <button type="button" className="cookie-btn ghost" onClick={handleRejectAll}>
            Rifiuta
          </button>
          <button type="button" className="cookie-btn outline" onClick={handleSave}>
            Personalizza
          </button>
          <button type="button" className="cookie-btn primary" onClick={handleAcceptAll}>
            Accetta tutti
          </button>
        </div>
      </div>

      {hasConsent && !isVisible && (
        <button
          type="button"
          className="cookie-fab"
          onClick={handleOpenPreferences}
          aria-label="Apri preferenze cookie"
        >
          🍪
        </button>
      )}
    </>
  )
}

export default CookieBanner
