---
repo: "TheRealOwenRees/echecsfrance"
name: "echecsfrance"
description: "A website displaying upcoming chess tournaments for the FFE on a map"
readmeQualityOk: true
url: "https://github.com/TheRealOwenRees/echecsfrance"
homepage: "https://echecsfrance.com"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
topics: ["chess", "echecs", "france", "leaflet", "nextjs", "tournament", "tournoi"]
stars: 12
forks: 6
openIssues: 3
closedIssues: 24
watchers: 2
contributors: 4
recentReleases: 0
createdAt: "2023-05-21T16:26:04Z"
lastCommitAt: "2026-10-23T12:04:17Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 96
undervaluedScore: 62
maintainers: ["TheRealOwenRees", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/641c657d9ba236da1399d1a84a1ad74564232b369672fded413d6b12f3f5334f/TheRealOwenRees/echecsfrance"
discussionCount: 0
---

## A website displaying upcoming chess tournaments for the [FFE](http://www.echecs.asso.fr/) on a map

## Tech Stack

This website is built in TypeScript using:

- [Next.js](https://nextjs.org/)
- [Tailwind](https://tailwindcss.com/)
- [MongoDB](https://www.mongodb.com/)

and is deployed on [Vercel](https://vercel.com/)

## Dependencies

- [Leaflet](https://leafletjs.com/) - a Javascript library for interactive maps
- [Nodemailer](https://nodemailer.com/) - a module for Node.js applications to allow easy as cake email sending

## Required VSCode plugins

- Oxlint
- Oxfmt

## Recommended VSCode plugins

- Tailwind CSS IntelliSense
- Tailwind Docs
- Code Spell Checker (to avoid English spelling mistakes in the code)
- Console Ninja (for easier debugging)

## User authentication

Users may choose to create an account in order to receive notification of tournaments.

The only personal information that we have to have is their email address, and so we've decided to use magic link's for user log on.
This gives us only the information we need (the confirmed email address) and means that we don't have to store any other sensitive information at all (not even a hashed password).
To handle…
