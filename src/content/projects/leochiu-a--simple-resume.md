---
repo: "leochiu-a/simple-resume"
name: "simple-resume"
description: "A online tool to create a resume."
readmeQualityOk: true
url: "https://github.com/leochiu-a/simple-resume"
homepage: "https://simple-resume-nu.vercel.app"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [97]
stars: 35
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2024-11-14T12:40:38Z"
lastCommitAt: "2026-08-09T04:46:52Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 50
maintainers: ["leochiu-a"]
openGraphImageUrl: "https://opengraph.githubassets.com/7042bb0f486778e70bf63a5ebff2e6c474a87a2dfc838821dd659ba7311f1c2e/leochiu-a/simple-resume"
---

# Simple RESUME

An online tool to create a resume — with no account, and nothing uploaded anywhere.

Online site: https://simple-resume-nu.vercel.app

## Features

- Create a resume easily.
- Pick between [four templates](#templates) and tint any of them, from the
  [appearance panel](#templates).
- Export the resume as a PDF, as a [standalone HTML file](#html-export), or
  [copy it as Markdown](#markdown-for-agents) to paste into an AI agent.
- Keep the same resume in [two languages](#two-languages), translated by the model built into the
  browser and corrected by hand afterwards.
- [Rewrite the profile or a role description](#rewriting-on-device) with the browser's own language
  model, previewing the result before it replaces anything.
- The resume data is stored in local storage — there is no account and no server to send it to. The
  AI runs on the device as well, so that stays true with it switched on.
- Build the resume by talking to a browser AI agent, via [WebMCP](#webmcp-experimental).

## Tech Stack

- Next.js 16 (App Router)
- React 19
- Tailwind CSS
- Shadcn UI
- react-pdf/renderer
- next-themes for light/dark
- The browser's built-in AI: the [Translator…
