---
repo: "hackclub/scrapbook"
name: "scrapbook"
description: "🔥 A daily streak system & portfolio for your projects."
readmeQualityOk: true
url: "https://github.com/hackclub/scrapbook"
homepage: "https://scrapbook.hackclub.com"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [87]
topics: ["summer-of-making", "nextjs", "hackclub", "hacktoberfest"]
stars: 191
forks: 56
openIssues: 18
closedIssues: 106
watchers: 8
contributors: 62
recentReleases: 0
createdAt: "2020-06-11T18:50:24Z"
lastCommitAt: "2026-10-14T08:57:30Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 94
undervaluedScore: 44
maintainers: ["dependabot[bot]", "3kh0", "JosiasAurel"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/271623674/4f9c0300-b13c-11ea-9efc-7a865ddc0121"
---

# Scrapbook

Scrapbook helps you **share the things you're working on every day!** As a [Hack Clubber](https://hackclub.com/), you are always learning and building things. Scrapbook allows you to share updates on the things you're doing with the rest of the Hack Club community, and keeps you motivated by recording each day you contribute, tallying that up onto a streak shown on your profile.

## How to Set Up the Project

1. **Clone the repository:**
```sh
   git clone https://github.com/hackclub/scrapbook.git
   cd scrapbook
```

2. **Install dependencies:**
```shell
npm install
```
3. **Request the .env file:** 
Send a message mentioning @creds in Hack Club's Slack asking for the .env file.

4. **Start the development server:**
```shell
npm run dev
```

5. View your server: Open your browser and navigate to http://localhost:3000/.

## Build Commands
### Build the web application:
```sh
npm run build:web
```

### Check code formatting:
```sh
npm run checkFormat 
```

### Format code for Slack bot
```sh
npm run prettier:slack-bot 
```

### Format code for web app
```sh
npm run prettier:web
```

Run the codemod for commenting the lines

```shell
npx jscodeshift \
-t…
