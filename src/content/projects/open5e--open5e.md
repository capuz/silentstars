---
repo: "open5e/open5e"
name: "open5e"
description: "An SRD and open-source material reference site for 5th edition D&D"
readmeQualityOk: true
url: "https://github.com/open5e/open5e"
language: "TypeScript"
languages: ["TypeScript", "Vue"]
languagePcts: [64, 35]
topics: ["vue", "nuxt"]
stars: 448
forks: 156
openIssues: 7
closedIssues: 307
watchers: 23
contributors: 68
recentReleases: 0
createdAt: "2016-01-23T18:50:10Z"
lastCommitAt: "2026-09-17T08:51:38Z"
lastReleaseAt: "2026-06-06T13:01:06Z"
status: "thriving"
tags: ["needs_contributors", "legacy_hero"]
healthScore: 89
undervaluedScore: 21
maintainers: ["calumbell", "dependabot[bot]", "eepMoody"]
openGraphImageUrl: "https://opengraph.githubassets.com/df74331dc6fb282b8c4aedce25a87aa64a190b9312ba7e4a7304535487267dea/open5e/open5e"
discussionCount: 3
---

<h1 align="center">Open5e</h1>
    <br/>
    Site for browsing open D&D 5e content
  </p>
</p>
<br />

  </a>
  </a>
</p>

</div>

<br/>

# Introduction

Open5e is a community project driven by a small number of volunteers in their
spare time. We welcome any and all contributions!

Useful places to check out:

- [Our discord](https://discord.gg/9RNE2rY) where we discuss the project and
  generally pal around. Bring your best memes.
- [The project org homepage](https://github.com/open5e) which has links to our
  roadmaps and other resources

# Development

Open5e uses the Nuxt3 framework for Vue3, which takes care of a lot of the
architectural work for the frontend layer while allowing a large amount of
flexibility.

5e game content is fetched from the
[open5e API](https://github.com/open5e/open5e-api) running at
https://api.open5e.com. This can be redirected using the environment variable
`API_URL`.

## Build Setup

Install dependencies.

```bash
npm install
```

Run the page in development mode.

```bash
npm run dev
```

Build for production and launch server.

```bash
npm start
```

Generate static project for publishing.

```bash
npm run generate
```

For detailed explanation…
