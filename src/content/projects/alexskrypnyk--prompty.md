---
repo: "AlexSkrypnyk/prompty"
name: "prompty"
description: "🧙 Zero-dependency interactive CLI prompt library for PHP"
readmeQualityOk: true
url: "https://github.com/AlexSkrypnyk/prompty"
language: "PHP"
languages: ["PHP"]
languagePcts: [100]
topics: ["cli", "php", "tui", "clack", "enquirer", "prompts"]
stars: 17
forks: 1
openIssues: 3
closedIssues: 67
watchers: 0
contributors: 1
recentReleases: 3
createdAt: "2026-03-09T04:05:56Z"
lastCommitAt: "2026-11-10T11:38:21Z"
lastReleaseAt: "2026-11-07T06:33:04Z"
status: "thriving"
tags: ["hidden_gem", "funded"]
healthScore: 96
undervaluedScore: 59
maintainers: ["AlexSkrypnyk", "renovate[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1176480368/e016d08a-e760-4c93-b784-9259734581b4"
fundingLinks: ["GITHUB:https://github.com/AlexSkrypnyk", "PATREON:https://patreon.com/alexskrypnyk"]
---

---

Prompty asks questions in the terminal for PHP command-line scripts, from a single text prompt to a multi-step wizard. It's 1 file with no dependencies, so you can require it, install it with Composer or embed it in your script. This README is for PHP developers and covers installing Prompty, building prompts and flows, testing them and shipping the script that uses them.

## Features

- 📦 [**Zero dependencies**](#installation) - drop `Prompty.php` into your project or [embed](#embedding) it in your script
- 🧩 [**Widgets**](#widgets) - `text`, `select`, `multiselect`, `suggest`, `confirm` and `pause`
- 📣 [**Notes**](#notes) - info, success, warning and error messages in the tree
- ⏳ [**Tasks**](#tasks) - run work behind a spinner, or stream its output under the label
- 🔀 [**Flows**](#flows) - group prompts into a wizard with an intro, an outro, numbering and cancellation
- 🌳 [**Nested flows**](#nested-flows-with-conditions) - conditional children drawn as a tree
- 🧱 [**Steps built from earlier answers**](#steps-built-from-earlier-answers) - a step's label, options or default taken from the answers before it
- 🔖 [**Section headings**](#section-headings) - group a long…
