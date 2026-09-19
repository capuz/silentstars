---
repo: "hugihlynsson/veldu-rafbil"
name: "veldu-rafbil"
description: "A project on electronic vehicles in Iceland"
readmeQualityOk: true
url: "https://github.com/hugihlynsson/veldu-rafbil"
homepage: "https://veldurafbil.is"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
stars: 14
forks: 2
openIssues: 0
closedIssues: 2
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2019-01-28T14:07:00Z"
lastCommitAt: "2026-09-19T02:46:47Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 96
undervaluedScore: 74
maintainers: ["hugihlynsson", "dependabot[bot]", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/29d61bba51ea991314ba8dc8c2a98c03cc267274da06e137986c93d32ef86fb3/hugihlynsson/veldu-rafbil"
discussionCount: 1
---

# Veldu Rafbíl (Choose EV)

Veldu Rafbíl is a project on electric cars in Iceland and translates to _Choose an Electric Car_. The two main goals are:

1. Increasing the adoption of electric cars in Iceland, currently [#2 for Passenger plug-in market share of total in the world](https://en.wikipedia.org/wiki/Electric_car_use_by_country)
2. Helping users figure out which specific model to choose

This is a [Next.js](https://nextjs.org) project written in Typescript and styled with [Tailwind](https://tailwindcss.com), deployed using [Vercel](https://vercel.com). It's a single route at `/` that lists all new electric cars available in Iceland including the most relevant information, a link to the seller and more detailed info. An AI advisor answers questions about the cars in Icelandic.

## Running it

Requires [Node.js](https://nodejs.org/) 20.9 or later.

```bash
npm install
npm run dev
```

The site itself needs no configuration. The AI advisor also needs a [Google AI Studio](https://aistudio.google.com) key in `.env.local`:

```
GOOGLE_GENERATIVE_AI_API_KEY=...
```

`npm run build` makes a production build.

## Contributing

Most changes are adding or updating a car in…
