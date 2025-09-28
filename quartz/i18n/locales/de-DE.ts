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
        const variants = [
          `${minutes} Minuten Reise durch vergilbte Pergamente`,
          `${minutes} Minuten im Archiv der Abenteurer`,
          `${minutes} Minuten, um diese Runen zu entschlüsseln`,
          `${minutes} Minuten Studium geheimnisvoller Runen`,
          `${minutes} Minuten beim Schmökern im Heldenkodex`,
          `${minutes} Minuten Ausflug in die Sagenwelt`,
          `${minutes} Minuten Reise durch vergilbte Pergamente`,
          `${minutes} Minuten Studium uralter Runen`,
          `${minutes} Minuten Ausflug in die Chroniken der Helden`,
          `${minutes} Minuten im Archiv der Abenteurer`,
          `${minutes} Minuten, um die Geheimnisse dieser Seite zu ergründen`,
          `${minutes} Minuten Schmökern im Kodex der Sagen`,
          `${minutes} Minuten Forschungszeit im Grimoire`,
          `${minutes} Minuten Entschlüsselung mystischer Zeichen`,
          `${minutes} Minuten Wanderung durch die Welt der Worte`,
          `${minutes} Minuten, bis dieses Kapitel gemeistert ist`,
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
