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
          { nome: "Sfumature Degradè", prezzo: "70€", durata: "" }
        ]
      },
      {
        nome: "Trattamenti & Forma",
        voci: [
          { nome: "Bio Wave",      prezzo: "65€", durata: "" },
          { nome: "Ricostruzione", prezzo: "45€", durata: "" }
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

  /* ---- BEAUTY EXPERIENCE (estetica — Stefania Sessa) ---- */
  beauty: {
    titolo: "Beauty Experience",
    referente: "Stefania Sessa",
    testo: "La nostra sezione estetica, curata da Stefania Sessa. Trucco sposa e beauty look per gli eventi, coordinati con l'acconciatura per un risultato armonico dalla testa al viso.",
    // ← Aggiungi qui l'eventuale listino beauty (trucco, sopracciglia, viso...) se vuoi mostrarlo.
    voci: []  // es: [{ nome: "Trucco sposa + prova", prezzo: "" }]
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
     ⚠️ ORARI PROVVISORI — DA CONFERMARE. Aggiornali con quelli reali.
     Formato: array di intervalli ["HH:MM","HH:MM"]; giorno chiuso = [].
     Puoi mettere più intervalli per la pausa pranzo, es:
        mar: [["09:00","13:00"],["15:00","19:00"]]                          */
  orari: {
    lun: [],                       // chiuso
    mar: [["09:00","19:00"]],
    mer: [["09:00","19:00"]],
    gio: [["09:00","20:00"]],
    ven: [["09:00","20:00"]],
    sab: [["09:00","19:00"]],
    dom: []                        // chiuso
  },

  /* ---- CREDITS (footer) ---- */
  credits: "Realizzato da Scintilla"
};

window.DATA = DATA;
