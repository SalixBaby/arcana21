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
      `Schon seit ${minutes} ${timeLabel} versucht, die Runen zu entschlüsseln`,
      `Seit ${minutes} ${timeLabel} im Bann dieser Seite`,
      `Bereits ${minutes} ${timeLabel} auf Entdeckungstour durch diese Chroniken`,
      `Schon ${minutes} ${timeLabel} tauchst du in diese Geschichten ein`,
      `${minutes} ${timeLabel} Erkundung durch vergilbte Pergamente`,
      `Seit ${minutes} ${timeLabel} wanderst du durch die Welt der Worte`,
      `Bereits ${minutes} ${timeLabel} studierst du alte Schriften`,
      `${minutes} ${timeLabel} Abenteuer im Archiv der Helden`,
      `Schon ${minutes} ${timeLabel} ergründest du die Geheimnisse dieser Seite`,
      `Seit ${minutes} ${timeLabel} liest du im Kodex der Sagen`,
      `Schon ${minutes} ${timeLabel} unter dem Fluch der Runen gefangen`,
      `Seit ${minutes} ${timeLabel} kämpfst du gegen die Tücken dieser Seite`,
      `${minutes} ${timeLabel} im Bann der magischen Schriftrollen`,
      `Bereits ${minutes} ${timeLabel} versuchst du, die Geheimnisse der alten Chroniken zu lüften`,
      `Schon ${minutes} ${timeLabel} durchstreifst du die Seiten wie ein mutiger Held`,
      `${minutes} ${timeLabel} Forschungszeit im verbotenen Grimoire`,
      `Seit ${minutes} ${timeLabel} tauchst du in die verborgenen Mysterien dieser Seite`,
      `Schon ${minutes} ${timeLabel} ergründest du uralte Weisheiten`,
      `${minutes} ${timeLabel} lang hältst du stand gegen die Rätsel dieser Chronik`,
      `Bereits ${minutes} ${timeLabel} auf Abenteuerpfaden zwischen den Worten`,
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
