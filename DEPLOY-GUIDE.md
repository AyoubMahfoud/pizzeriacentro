# 🚀 Guida Completa: Deploy su Vercel con GitHub

Questa guida ti spiega **passo passo** come mettere online il sito della Pizzeria Centro usando GitHub e Vercel (entrambi GRATIS).

---

## 📋 Prerequisiti

- Un account GitHub (gratis)
- Un account Vercel (gratis)
- Git installato sul tuo PC

---

## Parte 1: Installare Git (se non ce l'hai già)

### Windows

1. Vai su [git-scm.com/download/win](https://git-scm.com/download/win)
2. Scarica l'installer
3. Esegui l'installer e clicca "Next" su tutto (usa le impostazioni predefinite)
4. Riavvia il terminale/CMD

### Verifica che Git sia installato

Apri il terminale (CMD o PowerShell) e digita:

```bash
git --version
```

Dovresti vedere qualcosa tipo: `git version 2.43.0`

---

## Parte 2: Creare un Account GitHub

1. **Vai su [github.com](https://github.com)**

2. **Clicca "Sign up" (Registrati)**

3. **Compila il form:**
   - Email: la tua email
   - Password: crea una password sicura
   - Username: scegli un username (es: `pizzeria-centro`)

4. **Verifica l'email**
   - Controlla la tua casella di posta
   - Clicca sul link di verifica

5. **Completa il profilo** (opzionale)

✅ Ora hai un account GitHub!

---

## Parte 3: Caricare il Progetto su GitHub

### Step 1: Inizializzare Git nel Progetto

Apri il terminale (CMD o PowerShell) nella cartella del progetto:

```bash
cd "c:\Users\UNIVERSITA\Desktop\Pizzeria centro"
```

Inizializza Git:

```bash
git init
```

### Step 2: Configurare Git (Prima volta)

Imposta il tuo nome e email (usa quelli di GitHub):

```bash
git config --global user.name "Il Tuo Nome"
git config --global user.email "tuaemail@example.com"
```

Esempio:
```bash
git config --global user.name "Mario Rossi"
git config --global user.email "mario.rossi@gmail.com"
```

### Step 3: Creare un file .gitignore

Prima di committare, dobbiamo dire a Git di ignorare alcune cartelle.

Crea un file chiamato `.gitignore` nella root del progetto con questo contenuto:

```
# Dependencies
node_modules/

# Production build
dist/

# Logs
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Environment variables
.env
.env.local
.env.production

# Editor directories
.vscode/
.idea/

# OS files
.DS_Store
Thumbs.db
```

Puoi creare questo file da terminale:

```bash
echo node_modules/ > .gitignore
echo dist/ >> .gitignore
```

Oppure crealo manualmente con Notepad.

### Step 4: Aggiungere tutti i file al repository

```bash
git add .
```

### Step 5: Creare il primo commit

```bash
git commit -m "Initial commit - Pizzeria Centro website"
```

### Step 6: Creare un Repository su GitHub

1. **Vai su [github.com](https://github.com)**

2. **Clicca il pulsante "+" in alto a destra** → **"New repository"**

3. **Compila il form:**
   - **Repository name**: `pizzeria-centro` (o il nome che preferisci)
   - **Description**: `Sito web premium per Pizzeria Centro Novara`
   - **Visibilità**: Scegli **Public** (pubblico - gratis) o **Private** (privato - gratis)
   - **NON** selezionare "Add a README file"
   - **NON** selezionare "Add .gitignore"
   - **NON** selezionare "Choose a license"

4. **Clicca "Create repository"**

### Step 7: Collegare il Repository Locale a GitHub

GitHub ti mostrerà una pagina con dei comandi. Copia e esegui questi comandi nel tuo terminale:

```bash
git remote add origin https://github.com/TUO-USERNAME/pizzeria-centro.git
git branch -M main
git push -u origin main
```

**Sostituisci `TUO-USERNAME`** con il tuo vero username GitHub!

Esempio:
```bash
git remote add origin https://github.com/mariorossi/pizzeria-centro.git
git branch -M main
git push -u origin main
```

**Ti chiederà le credenziali:**
- Username: il tuo username GitHub
- Password: **ATTENZIONE** - devi usare un **Personal Access Token**, NON la password normale

#### Come creare un Personal Access Token:

1. Vai su GitHub → Clicca la tua foto in alto a destra → **Settings**
2. Scorri in basso → **Developer settings** (nel menu a sinistra)
3. **Personal access tokens** → **Tokens (classic)** → **Generate new token**
4. **Note**: scrivi "Pizzeria Centro Deploy"
5. **Expiration**: scegli "No expiration" o "90 days"
6. **Seleziona scope**: spunta **repo** (tutto)
7. Clicca **Generate token**
8. **COPIA IL TOKEN** (lo vedrai solo una volta!)
9. Usa questo token come password quando Git te lo chiede

### Step 8: Verifica su GitHub

Vai su `https://github.com/TUO-USERNAME/pizzeria-centro`

Dovresti vedere tutti i tuoi file caricati! ✅

---

## Parte 4: Deployare su Vercel

### Step 1: Creare un Account Vercel

1. **Vai su [vercel.com](https://vercel.com)**

2. **Clicca "Sign Up"**

3. **Scegli "Continue with GitHub"**
   - Ti chiederà di autorizzare Vercel ad accedere al tuo GitHub
   - Clicca "Authorize Vercel"

✅ Ora hai un account Vercel collegato a GitHub!

### Step 2: Importare il Progetto da GitHub

1. **Nella dashboard di Vercel, clicca "Add New..."** → **"Project"**

2. **Import Git Repository**
   - Vercel mostrerà tutti i tuoi repository GitHub
   - Trova `pizzeria-centro`
   - Clicca **"Import"**

### Step 3: Configurare il Progetto

Vercel rileverà automaticamente che è un progetto Vite. Controlla che le impostazioni siano:

- **Framework Preset**: `Vite`
- **Root Directory**: `./` (lascia vuoto)
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

**NON modificare nulla se non necessario!**

### Step 4: Deploy!

1. **Clicca "Deploy"**

2. **Aspetta 1-2 minuti**
   - Vercel installerà le dipendenze
   - Farà il build del progetto
   - Lo caricherà sul CDN

3. **🎉 Il sito è ONLINE!**

Vercel ti mostrerà:
- ✅ URL del sito (es: `https://pizzeria-centro.vercel.app`)
- ✅ Preview del sito
- ✅ Link da condividere

---

## Parte 5: Configurare un Dominio Personalizzato (Opzionale)

Se hai un dominio tipo `pizzeriacentro.it`:

### Su Vercel:

1. Vai al tuo progetto su Vercel
2. Clicca **"Settings"** → **"Domains"**
3. Clicca **"Add"**
4. Inserisci il tuo dominio (es: `pizzeriacentro.it`)
5. Vercel ti darà dei **DNS records** da configurare

### Sul tuo provider di domini (es: Aruba, GoDaddy, Namecheap):

1. Vai al pannello DNS del tuo dominio
2. Aggiungi i record che Vercel ti ha dato:

**Tipo A Record:**
```
Type: A
Name: @
Value: 76.76.21.21
```

**Tipo CNAME:**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

3. Salva i cambiamenti
4. Aspetta 24-48 ore (propagazione DNS)

✅ Il tuo sito sarà disponibile su `pizzeriacentro.it`!

---

## Parte 6: Aggiornare il Sito (Modifiche Future)

Quando modifichi il sito e vuoi aggiornarlo online:

### Step 1: Salva le modifiche su Git

```bash
cd "c:\Users\UNIVERSITA\Desktop\Pizzeria centro"
git add .
git commit -m "Descrizione delle modifiche"
git push
```

Esempio:
```bash
git add .
git commit -m "Aggiornato menu e prezzi"
git push
```

### Step 2: Deploy Automatico!

Vercel **automaticamente**:
- Rileva il push su GitHub
- Fa il build del nuovo codice
- Aggiorna il sito in 1-2 minuti

**Non devi fare nulla su Vercel!** ✨

---

## 🔧 Risoluzione Problemi

### Problema: "Git not found"

**Soluzione**: Installa Git da [git-scm.com](https://git-scm.com)

### Problema: "Permission denied" durante git push

**Soluzione**: Stai usando la password normale invece del Personal Access Token.
1. Vai su GitHub → Settings → Developer settings → Personal access tokens
2. Genera un nuovo token
3. Usa il token come password

### Problema: Build fallito su Vercel

**Soluzione**:
1. Vai su Vercel → Il tuo progetto → "Deployments"
2. Clicca sull'ultimo deployment fallito
3. Leggi i log per vedere l'errore
4. Di solito basta aggiungere dipendenze mancanti in `package.json`

### Problema: "node_modules" troppo grande

**Soluzione**: Assicurati che `.gitignore` contenga `node_modules/`

Puoi rimuovere node_modules da Git:
```bash
git rm -r --cached node_modules
git commit -m "Remove node_modules"
git push
```

### Problema: Sito bianco/non funziona

**Soluzione**: Controlla che:
1. La Build Command sia `npm run build`
2. L'Output Directory sia `dist`
3. Non ci siano errori nei log di Vercel

---

## 📊 Monitoraggio e Analytics

### Su Vercel:

1. Vai al tuo progetto
2. Clicca **"Analytics"** (tab in alto)
3. Vedrai:
   - Visitatori
   - Performance
   - Traffico

### Aggiungere Google Analytics (Opzionale):

1. Vai su [analytics.google.com](https://analytics.google.com)
2. Crea una proprietà
3. Copia il tracking ID
4. Aggiungi questo codice in `index.html` prima di `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

Sostituisci `G-XXXXXXXXXX` con il tuo tracking ID.

---

## ✅ Checklist Finale

Prima di andare live, controlla:

- [ ] Tutti i link funzionano (menu, social, telefono)
- [ ] Numero di telefono corretto: +39 0321 623232
- [ ] Link menu corretto: https://pizzeria-centro-menu.vercel.app/
- [ ] Social media corretti (Facebook, Instagram)
- [ ] Indirizzo corretto: Largo Cavalli 2, Novara
- [ ] Google Maps funziona
- [ ] Sito responsive su mobile (testa con DevTools)
- [ ] Tutte le immagini/card si vedono
- [ ] Nessun errore in console del browser (F12)

---

## 🎯 Comandi Utili

### Vedere lo stato di Git:
```bash
git status
```

### Vedere la cronologia dei commit:
```bash
git log
```

### Annullare modifiche non committate:
```bash
git checkout .
```

### Vedere i file ignorati:
```bash
git status --ignored
```

### Testare il sito in locale:
```bash
npm run dev
```

### Build locale (test):
```bash
npm run build
npm run preview
```

---

## 🆘 Supporto

### Documentazione:
- **Vite**: [vitejs.dev](https://vitejs.dev)
- **Vercel**: [vercel.com/docs](https://vercel.com/docs)
- **Git**: [git-scm.com/doc](https://git-scm.com/doc)

### Video Tutorial:
- **GitHub**: Cerca "GitHub tutorial italiano" su YouTube
- **Vercel**: Cerca "Vercel deploy tutorial" su YouTube

---

## 🎉 Congratulazioni!

Il tuo sito premium è ora online e raggiungibile da tutto il mondo! 🌍

**URL del tuo sito**: `https://pizzeria-centro.vercel.app` (o il tuo dominio personalizzato)

Condividi il link con i tuoi clienti e sui social media! 🍕✨
