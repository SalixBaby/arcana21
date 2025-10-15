import { Translation } from "./definition"

export default {
  propertyDefaults: {
    title: "Unbenannt",
    description: "Keine Beschreibung angegeben",
  },
  components: {
    callout: {
      note: "Hinweis",
      abstract: "Zusammenfassung",
      info: "Info",
      todo: "Zu erledigen",
      tip: "Tipp",
      success: "Erfolg",
      question: "Frage",
      warning: "Warnung",
      failure: "Misserfolg",
      danger: "Gefahr",
      bug: "Fehler",
      example: "Beispiel",
      quote: "Zitat",
    },
    backlinks: {
      title: "Backlinks",
      noBacklinksFound: "Keine Backlinks gefunden",
    },
    themeToggle: {
      lightMode: "Light Mode",
      darkMode: "Dark Mode",
    },
    explorer: {
      title: "Archiv",
    },
    footer: {
      createdWith: "Erstellt mit",
    },
    graph: {
      title: "Graphansicht",
    },
    recentNotes: {
      title: "Zuletzt bearbeitete Seiten",
      seeRemainingMore: ({ remaining }) => `${remaining} weitere ansehen →`,
    },
    transcludes: {
      transcludeOf: ({ targetSlug }) => `Transklusion von ${targetSlug}`,
      linkToOriginal: "Link zum Original",
    },
    search: {
      title: "Suche",
      searchBarPlaceholder: "Suche nach etwas",
    },
    tableOfContents: {
      title: "Inhaltsverzeichnis",
    },
    contentMeta: {
      readingTime: ({ minutes }) => {
    const timeLabel = minutes === 1 ? "Minute" : "Minuten"

    const variants = [
      `${minutes} ${timeLabel} im Bann uralter Runen – und kein Ende in Sicht`,
      `Etwa ${minutes} ${timeLabel} voller Magie, Mythen und vielleicht Verwirrung`,
      `${minutes} ${timeLabel} Lektüre, die dich tiefer in das Mysterium zieht`,
      `Nur ${minutes} ${timeLabel}? Ein wahrer Held liest schneller!`,
      `${minutes} ${timeLabel} – und du bist immer noch nicht verflucht? Beeindruckend.`,
      `Etwa ${minutes} ${timeLabel} dauert es, bis der Zauber dich ganz gefangen nimmt`,
      `${minutes} ${timeLabel} Forschung im verbotenen Archiv der Chroniken`,
      `Ungefähr ${minutes} ${timeLabel}, bis du alle Geheimnisse entschlüsselt hast (theoretisch)`,
      `Nur ${minutes} ${timeLabel} – es sei denn, du würfelst eine Eins beim Lesen`,
      `${minutes} ${timeLabel} epische Lesezeit im Reich der Worte`,
      `Etwa ${minutes} ${timeLabel} voller Abenteuer, Koffein und Buchstaben`,
      `${minutes} ${timeLabel} lang – und du bist jetzt offiziell Gelehrter dieser Chroniken`,
      `Geschätzte ${minutes} ${timeLabel} voller Magie und Mysterien`,
      `Etwa ${minutes} ${timeLabel}, um jedes Geheimnis dieser Seite zu ergründen`,
      `${minutes} ${timeLabel} reines Abenteuer zwischen den Zeilen`,
      `In nur ${minutes} ${timeLabel} wirst du zum Meister dieser Chroniken`,
      `${minutes} ${timeLabel} Lesezeit – perfekt, um dein Wissen zu stärken`,
      `Rund ${minutes} ${timeLabel} brauchst du, um alle Runen zu entziffern`,
      `${minutes} ${timeLabel} episches Studium alter Schriften`,
      `Etwa ${minutes} ${timeLabel} Forschung im Reich der Worte`,
      `Nur ${minutes} ${timeLabel} trennen dich vom nächsten Erkenntnissprung`,
      `${minutes} ${timeLabel} geballte Weisheit in komprimierter Form`,
      `Geschätzte ${minutes} ${timeLabel} geistiges Abenteuer`,
      `Mit ${minutes} ${timeLabel} wirst du diese Legende meistern`,
      `Ein kurzer Abstecher von ${minutes} ${timeLabel} ins Reich der Geschichten`,
      `${minutes} ${timeLabel} voller Wissen, Witz und ein wenig Wahnsinn`,
      `Ungefähr ${minutes} ${timeLabel}, um dich in diesen Text zu verlieren`,
      `In ${minutes} ${timeLabel} kannst du dich wie ein Gelehrter fühlen`,
      `Nur ${minutes} ${timeLabel} Lesezeit – aber ewig im Gedächtnis`,
      `${minutes} ${timeLabel} magische Reise durch Worte und Welten`,
      `Rund ${minutes} ${timeLabel} epische Konzentration voraus!`,
      `Ein Werk für ${minutes} ${timeLabel} voller Abenteuerlust und Buchstabenmagie`,
    ]
    
        const randomIndex = Math.floor(Math.random() * variants.length)
        return variants[randomIndex]
      },
    },
  },
  pages: {
    rss: {
      recentNotes: "Zuletzt bearbeitete Seiten",
      lastFewNotes: ({ count }) => `Letzte ${count} Seiten`,
    },
    error: {
      title: "Nicht gefunden",
      notFound: "Diese Seite ist entweder nicht öffentlich oder existiert nicht.",
      home: "Zurück zur Hauptseite",
    },
    folderContent: {
      folder: "Übersicht",
      itemsUnderFolder: ({ count }) =>
        count === 1 ? "1 Eintrag in dieser Kategorie." : `${count} Einträge in dieser Kategorie. Der oberste Eintrag beinhaltet eine Erklärung.`,
    },
    tagContent: {
      tag: "Tag",
      tagIndex: "Tag-Übersicht",
      itemsUnderTag: ({ count }) =>
        count === 1 ? "1 Datei mit diesem Tag." : `${count} Dateien mit diesem Tag.`,
      showingFirst: ({ count }) => `Die ersten ${count} Tags werden angezeigt.`,
      totalTags: ({ count }) => `${count} Tags insgesamt.`,
    },
  },
} as const satisfies Translation
