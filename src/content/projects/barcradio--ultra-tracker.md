---
repo: "barcradio/ultra-tracker"
name: "ultra-tracker"
description: "An Electron athlete time logging app"
readmeQualityOk: true
url: "https://github.com/barcradio/ultra-tracker"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [93]
stars: 10
forks: 0
openIssues: 49
closedIssues: 75
watchers: 3
contributors: 7
recentReleases: 0
createdAt: "2024-04-19T23:46:24Z"
lastCommitAt: "2026-08-28T14:25:13Z"
lastReleaseAt: "2025-09-22T04:34:41Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 90
undervaluedScore: 42
maintainers: ["rleikis", "JordenLuke"]
openGraphImageUrl: "https://opengraph.githubassets.com/59f334f342f3ede3cfd02ab3c1fe3c83b3b82b86de498f9990af50a6d1b6ef2e/barcradio/ultra-tracker"
---

An app for tracking athletes during ultra marathons.

An Electron application with React and TypeScript for Windows, Linux, and MacOS.

For a guide on how to set up an event using Ultra-Tracker, visit the project [Wiki](https://github.com/barcradio/ultra-tracker/wiki).

---
## Initial Setup

1. Copy the event files into the event-configs folder:  
   1. `\Documents\Ultra-Tracker\.event-config\`
2. Load the Stations file
   1. Select Station location and set operator call sign
3. Load the Athletes file
4. Load the Did Not Start (DNS) File
5. Load the most recent Did Not Finish (DNF) file
6. Go to stats screen and begin logging athletes

## Navigation Sidebar
The left side bar is used to select different pages.  Select from Stats, Roster, Logs, Export, Theme, Database, Settings and Help. Hovering over the sidebar area will expand it to show the names.

## Stats Page

The **BIB#** box is the main starting point for using this page. This input control will accept numerical input, either from the 10-key pad or top-row keys of all standard keyboards.  See useful keyboard shortcuts below.

Clicking the In button and Out button will record the corresponding time entry.

The datagrid…
