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
      `Schon seit ${minutes} ${timeLabel} versuchst du, die Geheimnisse dieser Seite zu ergründen`,
      `${minutes} ${timeLabel} im Bann uralter Runen – und kein Ende in Sicht`,
      `Etwa ${minutes} ${timeLabel} voller Magie, Mythen und vielleicht Verwirrung`,
      `${minutes} ${timeLabel} Lektüre, die dich tiefer in das Mysterium zieht`,
      `Seit ${minutes} ${timeLabel} kämpfst du dich tapfer durch die Zeilen`,
      `Nur ${minutes} ${timeLabel}? Ein wahrer Held liest schneller!`,
      `${minutes} ${timeLabel} – und du bist immer noch nicht verflucht? Beeindruckend.`,
      `Etwa ${minutes} ${timeLabel} dauert es, bis der Zauber dich ganz gefangen nimmt`,
      `Schon ${minutes} ${timeLabel} wanderst du durch das Labyrinth der Worte`,
      `${minutes} ${timeLabel} Forschung im verbotenen Archiv der Chroniken`,
      `Seit ${minutes} ${timeLabel} liest du … oder tust zumindest so`,
      `Ungefähr ${minutes} ${timeLabel}, bis du alle Geheimnisse entschlüsselt hast (theoretisch)`,
      `${minutes} ${timeLabel} zwischen Legenden, Lachern und Latein`,
      `Bereits ${minutes} ${timeLabel} studierst du die Kunst des Nicht-Aufgebens`,
      `Nur ${minutes} ${timeLabel} – es sei denn, du würfelst eine Eins beim Lesen`,
      `${minutes} ${timeLabel} epische Lesezeit im Reich der Worte`,
      `Seit ${minutes} ${timeLabel} hält dich der Fluch dieser Seite gefangen`,
      `Etwa ${minutes} ${timeLabel} voller Abenteuer, Koffein und Buchstaben`,
      `Schon ${minutes} ${timeLabel} suchst du nach dem versteckten Easter Egg`,
      `${minutes} ${timeLabel} lang – und du bist jetzt offiziell Gelehrter dieser Chroniken`,
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
