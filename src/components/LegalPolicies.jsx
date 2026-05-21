import React from 'react'

function LegalPolicies() {
  return (
    <>
      <section id="legal" className="legal-section">
        <div className="container">
          <h2 className="section-title">Informazioni Legali</h2>
          <div className="title-underline"></div>

          <div className="legal-card">
            <div className="legal-grid">
              <div>
                <h3>Dati del Titolare</h3>
                <ul className="legal-list">
                  <li>Ristorante Pizzeria Centro</li>
                  <li>Largo Cavalli 2, angolo Corso Cavallotti, 9</li>
                  <li>28100 - Novara (NO)</li>
                  <li>
                    <a href="tel:+390321623232">+39 0321 623232</a> |{' '}
                    <a href="tel:+393791027408">+39 379 1027408</a> |{' '}
                    <a href="tel:+393357216076">+39 335 7216076</a>
                  </li>
                  <li><a href="mailto:centro.snc@libero.it">centro.snc@libero.it</a></li>
                  <li>P.I. 01469050031</li>
                </ul>
              </div>
              <div>
                <h3>Avvertenza legale</h3>
                <p>
                  I testi, le informazioni e gli altri dati pubblicati in questo sito, nonche i
                  link ad altri siti presenti sul web, hanno esclusivamente scopo informativo e
                  non assumono alcun carattere di ufficialita.
                </p>
                <p>
                  Non si assume alcuna responsabilita per eventuali errori od omissioni di
                  qualsiasi tipo e per qualunque tipo di danno diretto, indiretto o accidentale
                  derivante dalla lettura o dall'impiego delle informazioni pubblicate, o di
                  qualsiasi forma di contenuto presente nel sito o per l'accesso o l'uso del
                  materiale contenuto in altri siti.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="privacy" className="legal-section legal-section-alt">
        <div className="container">
          <h2 className="section-title">Privacy Policy e Cookie Policy</h2>
          <div className="title-underline"></div>

          <div className="legal-card">
            <h3>Informativa per il trattamento dei dati personali</h3>
            <p>
              La presente informativa privacy, resa ai sensi dell'art. 13 del Regolamento
              generale sulla protezione dei dati UE 2016/679 (GDPR), contiene informazioni
              sul trattamento dei dati personali dell'utente forniti durante la navigazione
              o in fase di compilazione di form presenti all'interno del sito web.
            </p>

            <div className="legal-block">
              <h4>Il Titolare del trattamento</h4>
              <p>
                I dati del Titolare del trattamento e i dati di contatto sono specificati
                nella sezione "Informazioni Legali" del presente sito web.
              </p>
            </div>

            <div className="legal-block">
              <h4>Dati personali trattati</h4>
              <p className="legal-muted">a) Dati di navigazione</p>
              <p>
                I sistemi informatici e le procedure software preposte al funzionamento del sito
                web possono acquisire, nel corso del loro normale esercizio, alcuni dati personali
                la cui trasmissione e implicita nell'uso dei protocolli di comunicazione di Internet.
                In questa categoria rientrano, a titolo esemplificativo, indirizzi IP, nomi a dominio,
                URI delle risorse richieste, orario della richiesta, metodo utilizzato, dimensione del
                file ottenuto in risposta, codice di stato della risposta e altri parametri relativi al
                sistema operativo e all'ambiente informatico dell'utente.
              </p>
              <p>
                Questi dati vengono utilizzati al solo fine di ricavare informazioni statistiche
                sull'uso del sito e per controllarne il corretto funzionamento, per permettere
                l'erogazione delle funzionalita richieste e per l'accertamento di eventuali
                responsabilita in caso di ipotetici reati informatici.
              </p>
              <p className="legal-muted">b) Altri dati volontariamente forniti dall'utente</p>
              <p>
                Il Titolare del trattamento puo trattare dati personali quali nome, cognome,
                indirizzo e-mail, numero di telefono, dati di pagamento ed eventuali ulteriori dati
                spontaneamente conferiti durante la compilazione di form presenti nel sito.
              </p>
            </div>

            <div className="legal-block">
              <h4>Finalita e basi giuridiche del trattamento</h4>
              <p className="legal-muted">Finalita contrattuali e precontrattuali</p>
              <ul className="legal-list">
                <li>Consentire la navigazione sul sito ed erogare i servizi e le funzionalita richieste.</li>
                <li>Gestire e rispondere a richieste di informazione/assistenza inviate tramite i canali di contatto.</li>
                <li>Gestire, ove presente, aree riservate, prenotazioni o richieste di preventivo.</li>
                <li>Consentire la finalizzazione di eventuali acquisti di prodotti o servizi.</li>
              </ul>
              <p>
                La base giuridica e l'esecuzione di un contratto o di misure precontrattuali.
                Il conferimento dei dati in tali casi e necessario; il mancato conferimento puo
                comportare l'impossibilita di erogare il servizio.
              </p>

              <p className="legal-muted">Finalita basate sul legittimo interesse</p>
              <ul className="legal-list">
                <li>Verificare il corretto funzionamento del sito e garantire adeguata sicurezza.</li>
                <li>Inviare newsletter o comunicazioni informative, ove presenti, con possibilita di opt-out.</li>
                <li>Accertare, esercitare o difendere un diritto in sede giudiziaria o stragiudiziale.</li>
              </ul>

              <p className="legal-muted">Obblighi di legge</p>
              <p>
                I dati possono essere trattati per adempiere obblighi di legge, regolamenti o
                richieste delle autorita competenti. La base giuridica e l'obbligo di legge.
              </p>

              <p className="legal-muted">Comunicazioni commerciali (consenso)</p>
              <p>
                Ove previsto, i dati possono essere trattati per inviare comunicazioni commerciali
                e materiale promozionale tramite modalita automatizzate (es. sms ed e-mail). Il
                trattamento e basato sul consenso revocabile in qualsiasi momento.
              </p>
            </div>

            <div className="legal-block">
              <h4>Tempo di conservazione dei dati personali</h4>
              <p>
                I dati sono conservati per il tempo necessario al conseguimento delle finalita per
                le quali sono stati raccolti, nel rispetto del principio di limitazione della
                conservazione del GDPR. I dati trattati per finalita contrattuali sono conservati per
                tutta la durata del rapporto e, per il tempo strettamente necessario, fino a un massimo
                di 10 anni dalla cessazione, salvo eventuali contenziosi o obblighi normativi.
              </p>
              <p>
                I dati trattati per obblighi di legge sono conservati per i tempi previsti dalla
                normativa applicabile. I dati per comunicazioni promozionali sono conservati per 24
                mesi dalla raccolta del consenso o per un periodo inferiore in caso di revoca.
              </p>
            </div>

            <div className="legal-block">
              <h4>Categorie di destinatari dei dati</h4>
              <p>
                I dati personali possono essere comunicati a soggetti esterni che operano in qualita
                di titolari o responsabili del trattamento, tra cui:
              </p>
              <ul className="legal-list">
                <li>Persone, societa o studi professionali che prestano supporto contabile, amministrativo o legale.</li>
                <li>Banche e istituti di credito.</li>
                <li>Societa terze che forniscono sistemi di intelligenza artificiale utilizzati nei servizi del sito.</li>
                <li>Soggetti, enti o autorita a cui la comunicazione dei dati sia obbligatoria per legge.</li>
              </ul>
              <p>
                Per informazioni dettagliate sui destinatari, e possibile inviare una richiesta via e-mail.
              </p>
            </div>

            <div className="legal-block">
              <h4>Trasferimento dei dati all'estero</h4>
              <p>
                Qualora fosse necessario trasferire dati personali fuori dall'Unione Europea, il
                Titolare adotta misure adeguate in conformita all'art. 46 del GDPR, incluse clausole
                contrattuali tipo e misure supplementari di tutela.
              </p>
            </div>

            <div className="legal-block">
              <h4>Diritti dell'interessato</h4>
              <p>
                Ai sensi degli artt. 15 - 22 del GDPR, l'interessato puo esercitare i propri diritti
                (accesso, rettifica, cancellazione, limitazione, opposizione, portabilita) scrivendo
                all'indirizzo e-mail del Titolare. E inoltre possibile presentare reclamo
                all'Autorita di controllo competente.
              </p>
            </div>
          </div>

          <div className="legal-card legal-card-secondary">
            <h3>Cookie Policy</h3>
            <p>
              Questo sito utilizza cookie tecnici (necessari) e, con il tuo consenso, cookie
              analitici, funzionali e di profilazione, nostri e di terze parti, per fornire
              funzionalita fondamentali, misurare le performance e proporre contenuti in linea con
              i tuoi interessi.
            </p>
            <p>
              Per accettare, rifiutare o selezionare i cookie in base alle finalita, utilizza i
              comandi presenti nel banner per la gestione dei cookie e il pulsante "Dettagli" per
              visualizzare le categorie. Le tue preferenze sono registrate in una piattaforma di
              gestione del consenso (CMP) conforme alla normativa vigente.
            </p>
            <p>
              Puoi in qualunque momento modificare il consenso rilasciato cliccando sull'icona in
              basso a sinistra del sito.
            </p>

            <div className="legal-block">
              <h4>Cosa sono i cookie</h4>
              <p>
                I cookie sono piccoli file di testo salvati nel browser che permettono di
                riconoscere l'utente alle visite successive e memorizzare preferenze di navigazione.
              </p>
            </div>

            <div className="legal-block">
              <h4>A cosa servono i cookie</h4>
              <p>
                I cookie migliorano l'esperienza di navigazione, abilitano funzionalita e possono
                rendere piu pertinenti i contenuti mostrati. Alcuni cookie sono necessari al corretto
                funzionamento del sito e la loro disattivazione potrebbe limitarne le funzionalita.
              </p>
            </div>

            <div className="legal-block">
              <h4>Categorie di cookie utilizzate</h4>
              <ul className="legal-list">
                <li><strong>Cookie tecnici (necessari)</strong>: indispensabili per il funzionamento del sito.</li>
                <li><strong>Cookie funzionali</strong>: memorizzano preferenze come lingua o impostazioni.</li>
                <li><strong>Cookie analitici</strong>: raccolgono dati statistici sull'uso del sito.</li>
                <li><strong>Cookie di profilazione</strong>: personalizzano le comunicazioni promozionali.</li>
              </ul>
            </div>

            <div className="legal-block">
              <h4>Gestione dei cookie dal browser</h4>
              <ul className="legal-list">
                <li>Microsoft Edge: https://support.microsoft.com/it-it/microsoft-edge/eliminare-i-cookie-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09</li>
                <li>Firefox: https://support.mozilla.org/it/kb/Gestione%20dei%20cookie</li>
                <li>Safari: https://support.apple.com/it-it/guide/deployment/depf7d5714d4/web</li>
                <li>Google Chrome: https://policies.google.com/technologies/cookies?hl=it&gl=it#managing-cookies</li>
              </ul>
            </div>

            <p>
              Per approfondire le scelte sulla pubblicita comportamentale, e possibile visitare:
              http://www.youronlinechoices.com/it/le-tue-scelte
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default LegalPolicies
