---
repo: "navikt/aksel"
name: "aksel"
description: "Navs designsystem og Aksel-portalen"
readmeQualityOk: true
url: "https://github.com/navikt/aksel"
homepage: "https://aksel.nav.no"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [92]
topics: ["react", "css", "frontend", "storybook", "javascript", "typescript", "components", "designsystem", "tailwindcss", "design-system"]
stars: 186
forks: 43
openIssues: 18
closedIssues: 776
watchers: 134
contributors: 106
recentReleases: 0
createdAt: "2017-05-24T09:59:09Z"
lastCommitAt: "2026-11-04T08:04:02Z"
lastReleaseAt: "2022-10-03T08:11:01Z"
status: "thriving"
tags: ["legacy_hero", "community_hub"]
healthScore: 99
undervaluedScore: 41
maintainers: ["KenAJoh", "HalvorHaugan", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/92277707/884a5691-9e0f-4662-a50d-f8508dc037d2"
discussionCount: 40
---

---

## Dokumentasjon

For å komme i gang, se [Aksel dokumentasjonen](https://aksel.nav.no/grunnleggende/introduksjon/kom-i-gang-med-kodepakkene)

## Kommandoer

| Kommando         | Beskrivelse                                |
| ---------------- | ------------------------------------------ |
| `yarn boot`      | Bygger alle pakker (topologisk rekkefølge) |
| `yarn dev`       | Starter dokumentasjonssiden                |
| `yarn storybook` | Starter Storybook                          |
| `yarn test`      | Kjører alle tester                         |
| `yarn lint`      | Kjører ESLint, Stylelint og Biome          |
| `yarn clean`     | Fjerner genererte filer                    |
| `yarn changeset` | Oppretter en ny versjon.                   |

## Repo-struktur

```
@navikt/
├── core/react      # @navikt/ds-react
├── core/css        # @navikt/ds-css
├── core/tokens     # @navikt/ds-tokens
├── core/tailwind   # @navikt/ds-tailwind
├── aksel-icons     # @navikt/aksel-icons
├── aksel-stylelint # @navikt/aksel-stylelint
└── aksel           # @navikt/aksel

aksel.nav.no/
├── website         # Next.js-app (dokumentasjonsside)
└── sanity-studio   # Sanity CMS
```

## Bidra

Se…
