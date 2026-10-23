---
repo: "GroAnita/Flavorcraft_labs"
name: "Flavorcraft_labs"
description: "A recipe discovery web app built with Next.js and the Noroff API — Team Alpha’s three-week agency project."
readmeQualityOk: true
url: "https://github.com/GroAnita/Flavorcraft_labs"
language: "HTML"
languages: ["HTML"]
languagePcts: [96]
stars: 5
forks: 0
openIssues: 12
closedIssues: 141
watchers: 0
contributors: 8
recentReleases: 0
createdAt: "2026-10-02T14:38:18Z"
lastCommitAt: "2026-10-23T09:32:39Z"
status: "thriving"
tags: []
healthScore: 97
undervaluedScore: 54
maintainers: ["GroAnita", "AlexanderLislelid", "Theanordhoy"]
openGraphImageUrl: "https://opengraph.githubassets.com/57547097c1cc896c241c2ae49bb4ca7a35973d3e8c45d32426778b2f3ee78b2d/GroAnita/Flavorcraft_labs"
---

# Flavorcraft_labs

A recipe discovery web app built with Next.js and the Noroff API - Team Alpha's three-week agency project.

## Getting Started

### Installation

1. Clone the repository:

```bash
git clone https://github.com/GroAnita/Flavorcraft_labs.git
```

2. Navigate to the project directory:

```bash
cd Flavorcraft_labs
```

3. Install dependencies:

```bash
npm install
```

4. Run the development server:

```bash
npm run dev
```

5. See the project:

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Environment variables

Reading recipes is public, but creating, editing and deleting recipes and posting
comments require a Noroff API key.

### Get an API key

1. Register at `POST https://v2.api.noroff.dev/auth/register` (use your @stud.noroff.no email).
2. Log in with `POST /auth/login` and copy the `accessToken`.
3. Call `POST /auth/create-api-key` with the header `Authorization: Bearer <accessToken>`.
4. Copy the `key` from the response.

See https://docs.noroff.dev/docs/v2/auth/api-key

### Set up locally

1. Copy the example file:
   cp .env.example .env.local
2. Paste your key into `API_KEY` in `.env.local`.
3. Restart the…
