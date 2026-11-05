---
repo: "linobino1/kino"
name: "kino"
description: "www.kinoimblauensalon.de"
readmeQualityOk: true
url: "https://github.com/linobino1/kino"
homepage: "https://kinoimblauensalon.de"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
stars: 10
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2023-04-23T13:03:31Z"
lastCommitAt: "2026-11-05T08:05:45Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 74
undervaluedScore: 63
maintainers: ["linobino1"]
openGraphImageUrl: "https://opengraph.githubassets.com/d02b2d16a57bbf8b1701a1715e6515f344e9854ca44f518fe789acfa5bcd3c6d/linobino1/kino"
---

# kinoimblauensalon.de

Website for the cinema "Kino im Blauen Salon" in HfG Karlsruhe based on [Remix](https://remix.run) and [PayloadCMS](https://payloadcms.com). The website is showcasing future and past screening events. The CMS is used to manage the events, featuring an import function to import movie metadata from [TMDB](https://www.themoviedb.org).

## Features

- Showcase upcoming and past events
- Import movie metadata from TMDB
- HTML email newsletter generation
- PDF press release generation
- .ics calendar files for events

## Development

Make sure to create a `.env` file in the project root similar to the `.env.example` file. You will need a [TMDB API key](https://www.themoviedb.org/documentation/api) to fetch movie data and a [Listmonk](https://listmonk.app/) installation to manage your subscribers and send newsletters.  
The S3 configuration is optional, not needed for development.

```bash
pnpm i
pnpm dev
# frontend is running on localhost:5173
# cms is running on localhost:3000

# to seed the database (will fetch some movie data from TMDB, make sure you have your api key in the .env)
pnpm seed
```

## Deployment

The apps and plakat scraper run on k3s. Pushes to…
