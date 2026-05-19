import { Translation } from "./definition"

export default {
  propertyDefaults: {
    title: "Untitled",
    description: "No description provided",
  },
  components: {
    callout: {
      note: "Note",
      abstract: "Abstract",
      info: "Info",
      todo: "Todo",
      tip: "Tip",
      success: "Success",
      question: "Question",
      warning: "Warning",
      failure: "Failure",
      danger: "Danger",
      bug: "Bug",
      example: "Example",
      quote: "Quote",
    },
    backlinks: {
      title: "Backlinks",
      noBacklinksFound: "No backlinks found",
    },
    themeToggle: {
      lightMode: "Light mode",
      darkMode: "Dark mode",
    },
    explorer: {
      title: "Archive",
    },
    footer: {
      createdWith: "Created with",
    },
    graph: {
      title: "Graph View",
    },
    recentNotes: {
      title: "Recent Notes",
      seeRemainingMore: ({ remaining }) => `See ${remaining} more →`,
    },
    transcludes: {
      transcludeOf: ({ targetSlug }) => `Transclude of ${targetSlug}`,
      linkToOriginal: "Link to original",
    },
    search: {
      title: "Search",
      searchBarPlaceholder: "Search for something",
    },
    tableOfContents: {
      title: "Table of Contents",
    },
    contentMeta: {
      readingTime: ({ minutes }) => {
        const timeLabel = minutes === 1 ? "minute" : "minutes"

        const variants = [
        `${minutes} ${timeLabel} lost in ancient runes — and still nowhere near the end`,
        `Roughly ${minutes} ${timeLabel} of magic, myths, and probable confusion`,
        `${minutes} ${timeLabel} that will pull you deeper into the mystery`,
        `Only ${minutes} ${timeLabel}? A true adventurer would finish faster!`,
        `${minutes} ${timeLabel} later and somehow you're still not cursed. Impressive.`,
        `Give it about ${minutes} ${timeLabel} before the spell fully takes hold`,
        `${minutes} ${timeLabel} spent digging through forbidden archives and forgotten lore`,
        `Approximately ${minutes} ${timeLabel} until every secret is revealed (in theory)`,
        `Only ${minutes} ${timeLabel} — unless you roll a natural 1 on reading comprehension`,
        `${minutes} ${timeLabel} of epic reading across realms of ink and legend`,
        `About ${minutes} ${timeLabel} fueled by adventure, caffeine, and questionable decisions`,
        `${minutes} ${timeLabel} long — congratulations, you're now a certified lore scholar`,
        `An estimated ${minutes} ${timeLabel} of magic and mystery await`,
        `Around ${minutes} ${timeLabel} to uncover every hidden truth on this page`,
        `${minutes} ${timeLabel} of pure adventure between the lines`,
        `In just ${minutes} ${timeLabel}, you may ascend to chronicle master`,
        `${minutes} ${timeLabel} of reading time — ideal for sharpening your knowledge`,
        `Set aside roughly ${minutes} ${timeLabel} to decipher every last rune`,
        `${minutes} ${timeLabel} of intense study through ancient tomes`,
        `About ${minutes} ${timeLabel} wandering through the kingdom of words`,
        `Only ${minutes} ${timeLabel} stand between you and your next revelation`,
        `${minutes} ${timeLabel} packed with condensed wisdom and arcane nonsense`,
        `Estimated duration: ${minutes} ${timeLabel} of intellectual adventuring`,
        `With ${minutes} ${timeLabel}, this legend shall be yours to master`,
        `A brief ${minutes}-minute detour into the realm of stories`,
        `${minutes} ${timeLabel} of knowledge, wit, and just a hint of madness`,
        `Approximately ${minutes} ${timeLabel} until you lose yourself in this text`,
        `In ${minutes} ${timeLabel}, you too can pretend to be a scholar`,
        `Only ${minutes} ${timeLabel} to read — unforgettable for far longer`,
        `${minutes} ${timeLabel} on a magical journey through worlds and words`,
        `Prepare for roughly ${minutes} ${timeLabel} of legendary concentration`,
        `A tale requiring ${minutes} ${timeLabel} of curiosity, courage, and bookish magic`,
        ]

        const randomIndex = Math.floor(Math.random() * variants.length)
        return variants[randomIndex]
        },
      },
    },
  pages: {
    rss: {
      recentNotes: "Recent notes",
      lastFewNotes: ({ count }) => `Last ${count} notes`,
    },
    error: {
      title: "Not Found",
      notFound: "Either this page is private or doesn't exist.",
      home: "Return to Homepage",
    },
    folderContent: {
      folder: "Folder",
      itemsUnderFolder: ({ count }) =>
        count === 1 ? "1 item under this folder." : `${count} items under this folder.`,
    },
    tagContent: {
      tag: "Tag",
      tagIndex: "Tag Index",
      itemsUnderTag: ({ count }) =>
        count === 1 ? "1 item with this tag." : `${count} items with this tag.`,
      showingFirst: ({ count }) => `Showing first ${count} tags.`,
      totalTags: ({ count }) => `Found ${count} total tags.`,
    },
  },
} as const satisfies Translation
