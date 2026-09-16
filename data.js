/* =========================================================================
   STANY ART & ENJOY — data.js
   UNICA FONTE DI VERITÀ. Tutti i testi/prezzi/orari stanno qui.
   Modifica SOLO questo file per aggiornare il sito. Ultima riga: window.DATA = DATA
   ========================================================================= */

const DATA = {

  /* ---- IDENTITÀ / CONTATTI (reali) ---- */
  brand: {
    name: "Stany",
    lockup: "Art & Enjoy",
    tagline: "Art & Enjoy · Parrucchieri · Salone bio naturale",
    payoff: "Hair Spa & Beauty Experience",
    city: "Cava de' Tirreni",
    // Frase hero: voce vera, servizio + luogo. Niente "salone di fiducia".
    heroLine: "Il capello curato come un rituale. Piega, colore e acconciatura sposa nel cuore di Cava de' Tirreni.",
    intro: "Siamo un salone parrucchieri con una Hair Spa e una sezione beauty dedicata. Lavoriamo su misura: colore studiato sulla lunghezza, acconciature per gli eventi che contano e trattamenti che rimettono in forma il capello. Per gli sposi curiamo il look il giorno del sì, anche in location sul Golfo di Salerno."
  },

  contatti: {
    telefonoDisplay: "089 296 1473",
    telefono: "+390892961473",          // link tel:
    whatsapp: "390892961473",           // wa.me/  (formato internazionale, no +)
    // Messaggio precompilato del bottone WhatsApp
    waMessage: "Ciao Stany! Vorrei prenotare un appuntamento.",
    indirizzo: "Via Tommaso di Savoia 1",
    cap: "84013",
    comune: "Cava de' Tirreni (SA)",
    instagram: "https://www.instagram.com/stanyart_enjoy_parrucchieri/",
    facebook: "https://www.facebook.com/stanyartenjoyparrucchieri/?locale=it_IT",
    email: "",                          // ← opzionale: aggiungi se disponibile
    // TODO da confermare per il footer / fatturazione:
    piva: ""                            // ← inserisci Partita IVA
  },

  /* ---- MAPPA / SEO ---- */
  geo: {
    // Coordinate APPROSSIMATE (centro Cava de' Tirreni). ← verifica su Google Maps
    lat: 40.70090,
    lng: 14.70520,
    mapQuery: "Stany Art & Enjoy, Via Tommaso di Savoia 1, Cava de' Tirreni"
  },

  /* ---- LISTINO REALE (dal listino ufficiale del salone) ----
     durata: lasciata vuota ("") perché non fornita. Se vuoi mostrarla,
     scrivi es. "45 min" e comparirà accanto al servizio.               */
  listino: {
    nota: "Il colore è sempre personalizzato: il prezzo finale dipende da lunghezza e tecnica. In consulenza definiamo insieme il risultato.",
    categorie: [
      {
        nome: "Piega & Taglio",
        voci: [
          { nome: "Piega",       prezzo: "15€", durata: "" },
          { nome: "Piega Lunga", prezzo: "18€", durata: "" },
          { nome: "Taglio",      prezzo: "20€", durata: "" },
          { nome: "Taglio Uomo", prezzo: "15€", durata: "" }
        ]
      },
      {
        nome: "Colore & Tecnica",
        voci: [
          { nome: "Bio Color",         prezzo: "30€", durata: "" },
          { nome: "Gloss",             prezzo: "30€", durata: "" },
          { nome: "Effetti Luce",      prezzo: "45€", durata: "" },
          { nome: "Sfumature Degradè", prezzo: "70€", durata: "" },
          { nome: "Airtouch",          prezzo: "da 180€", durata: "" }
        ]
      },
      {
        nome: "Trattamenti & Forma",
        voci: [
          { nome: "Bio Wave",      prezzo: "65€", durata: "" },
          { nome: "Ricostruzione", prezzo: "45€", durata: "" },
          { nome: "Hair Extension Great Lengths", prezzo: "da 400€", durata: "" }
        ]
      }
    ]
  },

  /* ---- SEZIONE SPOSA (differenziante) ---- */
  sposa: {
    titolo: "Sposa",
    testo: "Il giorno del matrimonio l'acconciatura deve reggere dalle prime foto all'ultimo ballo. Studiamo il look in prova, lo adattiamo all'abito e alla luce, e siamo al fianco della sposa anche in location — comprese le terrazze affacciate sul Golfo di Salerno.",
    puntiForza: [
      "Prova acconciatura prima dell'evento",
      "Servizio anche in location e per il corteo",
      "Coordinamento con la sezione beauty per un look completo"
    ]
  },

  /* ---- AIRTOUCH (tecnica colore — lavoro reale in video) ---- */
  airtouch: {
    titolo: "Airtouch",
    label: "Specialist",
    testo: "La tecnica che schiarisce solo i capelli giusti: un getto d'aria separa la peluria e lascia lavorare la mano solo dove serve. Il risultato è una ricrescita morbida, sfumature naturali e un colore che cresce bene per mesi. Guarda un lavoro vero.",
    prezzoNota: "A partire da 180€"
  },

  /* ---- HAIR SPA ---- */
  hairspa: {
    titolo: "Hair Spa",
    testo: "Un rituale lento dedicato al capello: detersione mirata, trattamento su cute e lunghezze, massaggio rilassante. Non è un lavaggio veloce — è il momento in cui il capello torna morbido, luminoso e in salute.",
    // GIFT CARD / STRIPE — opzionale.
    // Se hai un Stripe Payment Link per una gift card, incollalo qui e il
    // bottone comparirà da solo. Il redirect va impostato nel dashboard Stripe.
    giftLabel: "Regala un rituale Hair Spa",
    giftLink: ""   // ← es. "https://buy.stripe.com/xxxxxxxx"  (vuoto = bottone nascosto)
  },

  /* ---- MASSAGGI ---- */
  massaggi: {
    titolo: "Massaggi",
    testo: "Il benessere non si ferma al capello. Nell'area dedicata proponiamo massaggi che sciolgono la tensione e completano l'esperienza — un momento tutto per te, prima o dopo il salone.",
    voci: []  // ← eventuale listino massaggi: [{ nome:"…", prezzo:"…" }]
  },

  /* ---- VIDEO (sfondo hero, hair spa, massaggi) ----
     I file stanno nella cartella /vid. Poster (prima immagine) in /img.
     Per sostituire un video: rimpiazza il file mantenendo lo stesso nome. */
  media: {
    heroVideo:      "vid/hero-bg.mp4",     heroPoster:     "img/hero-bg-poster.jpg",
    airtouchVideo:  "vid/airtouch.mp4",    airtouchPoster: "img/airtouch-poster.jpg",
    hairspaVideo:   "vid/hairspa.mp4",     hairspaPoster:  "img/hairspa-poster.jpg",
    massaggiVideo:  "vid/massaggi.mp4",    massaggiPoster: "img/massaggi-poster.jpg"
  },

  /* ---- BEAUTY EXPERIENCE (estetica — Stefania Sessa) ---- */
  beauty: {
    titolo: "Beauty Experience",
    referente: "Stefania Sessa",
    testo: "La sezione estetica curata da Stefania Sessa: unghie, epilazione, pressoterapia, massaggi e trattamenti viso e corpo. Un percorso di benessere che completa la cura del capello.",
    listino: {
      categorie: [
        {
          nome: "Nails",
          voci: [
            { nome: "Manicure",        prezzo: "5€" },
            { nome: "Copertura in gel", prezzo: "30€" },
            { nome: "Ricostruzione",   prezzo: "45€" },
            { nome: "Semipermanente",  prezzo: "20€" },
            { nome: "Pedicure",        prezzo: "20€" }
          ]
        },
        {
          nome: "Epilazione cera",
          voci: [
            { nome: "Gambe",         prezzo: "20€" },
            { nome: "Inguine",       prezzo: "10€" },
            { nome: "Braccia",       prezzo: "10€" },
            { nome: "Ascelle",       prezzo: "10€" },
            { nome: "Baffetto",      prezzo: "5€" },
            { nome: "Cera completa", prezzo: "30€" }
          ]
        },
        {
          nome: "Epilazione cera uomo",
          voci: [
            { nome: "Gambe",         prezzo: "30€" },
            { nome: "Braccia",       prezzo: "15€" },
            { nome: "Ascelle",       prezzo: "15€" },
            { nome: "Petto",         prezzo: "50€" },
            { nome: "Schiena",       prezzo: "50€" },
            { nome: "Cera completa", prezzo: "70€" }
          ]
        },
        {
          nome: "Epilazione filo arabo",
          voci: [
            { nome: "Sopracciglia", prezzo: "8€" },
            { nome: "Baffetto",     prezzo: "5€" },
            { nome: "Viso",         prezzo: "10€" }
          ]
        },
        {
          nome: "Pressoterapia",
          voci: [
            { nome: "Pressoterapia",                          prezzo: "20€" },
            { nome: "Pacchetto Smart (10 sedute)",            prezzo: "150€" },
            { nome: "Pacchetto Plus (10 sedute + massaggio)", prezzo: "200€" }
          ]
        },
        {
          nome: "Massaggi",
          voci: [
            { nome: "Massaggio del fuoco", prezzo: "40€" },
            { nome: "Bamboo massage",      prezzo: "40€" },
            { nome: "Hot stone",           prezzo: "40€" },
            { nome: "Massaggio relax",     prezzo: "30€" }
          ]
        },
        {
          nome: "Trattamenti",
          voci: [
            { nome: "Tinta sopracciglia",       prezzo: "5€" },
            { nome: "Hennè sopracciglia",       prezzo: "10€" },
            { nome: "Pulizia viso",             prezzo: "35€" },
            { nome: "Peeling corpo + massaggio", prezzo: "35€" }
          ]
        },
        {
          nome: "Infusioni di Giovinezza",
          voci: [],
          nota: "A partire da 80€"
        }
      ]
    }
  },

  /* ---- TEAM ----
     Inserisci nomi, ruoli e (quando le avrai) le foto verticali del team.
     Le voci con foto:"" mostrano uno slot onesto con la didascalia dello scatto. */
  team: [
    {
      nome: "Stefania Sessa",
      ruolo: "Beauty & Trucco",
      foto: "",  // ← foto: ritratto verticale, sfondo neutro, luce morbida
      slotCaption: "foto: ritratto Stefania, verticale, luce morbida"
    },
    {
      nome: "",  // ← nome stylist
      ruolo: "Parrucchiere / Colorista",
      foto: "",
      slotCaption: "foto: ritratto stylist al lavoro, verticale"
    },
    {
      nome: "",  // ← nome stylist
      ruolo: "Stylist",
      foto: "",
      slotCaption: "foto: ritratto stylist, verticale"
    }
  ],

  /* ---- PORTFOLIO / LAVORI ----
     Metti qui le foto reali dei lavori (colore, degradè, pieghe, raccolti…).
     Ogni voce senza "src" resta uno slot onesto con la didascalia dello scatto. */
  portfolio: [
    { src: "img/hero-sposa-terrazza.jpg", alt: "Acconciatura sposa su terrazza affacciata sul Golfo di Salerno", big: true },
    { src: "img/sposa-fabiana.jpg",       alt: "Beauty look sposa: semiraccolto morbido e trucco luminoso" },
    { src: "", alt: "Dettaglio colore degradè su capello lungo", slotCaption: "foto: degradè su capello lungo, luce naturale" },
    { src: "", alt: "Piega voluminosa su capello medio",         slotCaption: "foto: piega finita, dettaglio movimento" },
    { src: "", alt: "Interno del salone",                         slotCaption: "foto: ambiente salone, postazioni" }
  ],

  /* ---- RECENSIONI ----
     NON inventate. Incolla qui recensioni reali (Google/Facebook), poche e vere.
     Finché l'array è vuoto, al posto delle recensioni compare un invito a
     leggerle su Facebook/Instagram (onesto).                                */
  recensioni: [
    // { testo: "…", autore: "Nome C.", fonte: "Google" }
  ],

  /* ---- ORARI (Europe/Rome) ----
     Formato: array di intervalli ["HH:MM","HH:MM"]; giorno chiuso = [].
     Più intervalli = pausa pranzo, es: mar: [["09:00","13:00"],["15:00","19:00"]] */
  orari: {
    lun: [],                        // chiuso
    mar: [["08:30","20:00"]],
    mer: [["08:30","20:00"]],
    gio: [["08:30","20:00"]],
    ven: [["08:30","20:30"]],
    sab: [["08:00","20:00"]],
    dom: []                         // chiuso
  },

  /* ---- CREDITS (footer) ---- */
  credits: "Realizzato da Scintilla"
};

window.DATA = DATA;
