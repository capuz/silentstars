---
repo: "joshmu/videonote"
name: "videonote"
description: "Slick video review note taking app 🎬"
readmeQualityOk: true
url: "https://github.com/joshmu/videonote"
homepage: "https://videonote.app"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [93]
topics: ["videonote", "tool", "video", "todo", "notetaking", "rehearsal", "creative"]
stars: 12
forks: 2
openIssues: 11
closedIssues: 5
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2020-09-14T05:53:35Z"
lastCommitAt: "2026-09-29T10:04:29Z"
status: "thriving"
tags: ["legacy_hero", "under_pressure"]
healthScore: 81
undervaluedScore: 64
maintainers: ["dependabot[bot]", "joshmu", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/000d7e739e1e0adfa17911f9f222fa24ee91c4aee90c770eb50596ca950e2c36/joshmu/videonote"
---

# VideoNote

A video review app with slick intuitive controls to create timestamped notes on the fly. ✨

## Tech Stack

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [react-intersection-observer](https://github.com/thebuilder/react-intersection-observer)
- [react-icons](https://github.com/react-icons/react-icons)
- [mongoose](https://mongoosejs.com)
- [react-player](https://github.com/CookPete/react-player)
- [universal-cookie](https://github.com/reactivestack/cookies/tree/master/packages/universal-cookie)
- [nanoid](https://github.com/ai/nanoid)

Some additional experimental features are enabled in `tailwind.config.js`: _uniformColorPalette, extendedSpacingScale, extendedFontSizeScale_

### Setup

- MongoDB database
- JWT

Create a `.env.local` based on the `.env.example` for local development.

### Run it

`npm i && npm run dev`

## API conventions

Routes under `pages/api/` use two small higher-order wrappers from
`utils/auth/withAuthenticatedUser.ts` to keep authentication out of the
handler bodies:

- **`withAuthenticatedUser(handler)`** — required for routes that mutate user
  data (`auth`,…
