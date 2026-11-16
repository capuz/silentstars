---
repo: "securedeveloper/react-data-export"
name: "react-data-export"
description: "Export dataset in react."
readmeQualityOk: true
url: "https://github.com/securedeveloper/react-data-export"
homepage: "https://securedeveloper.github.io/react-data-export/"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [92]
topics: ["react", "export-excel", "react-export-data", "react-export-excel-data", "react-export-dataset"]
stars: 175
forks: 200
openIssues: 68
closedIssues: 49
watchers: 7
contributors: 10
recentReleases: 0
createdAt: "2017-10-13T20:35:38Z"
lastCommitAt: "2026-11-16T11:51:59Z"
lastReleaseAt: "2018-09-24T20:15:59Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "fork_magnet"]
healthScore: 85
undervaluedScore: 31
maintainers: ["securedeveloper"]
openGraphImageUrl: "https://opengraph.githubassets.com/ca51dc77933b1b98051e88689632fda63116338ccb33a278087f3f526d50121c/securedeveloper/react-data-export"
---

# react-data-export

Export data from React to `.xlsx` and `.csv`.

## Status: 1.0 is a from-scratch rewrite, in progress

- **1.0 is a clean break.** It is being rebuilt on [javascript-excel](https://github.com/securedeveloper/javascript-excel) 2.0 and will not ship the 0.x `<ExcelFile>` / `<ExcelSheet>` / `<ExcelColumn>` API. A migration guide will come with the first beta.
- **The dataset module is on `main`, not yet on npm:** `exportDataset`, `exportWorkbook`, `useExcelExport` and `<ExcelExport>`, as specified in [docs/api.md](https://github.com/securedeveloper/react-data-export/blob/HEAD/docs/api.md). They are built on javascript-excel 2.0's `fromDataset`, writer and download. Table export comes later, and the first 1.0 prerelease will be announced in this README.

  ```tsx
  import { ExcelExport } from 'react-data-export';

  const people = {
    columns: [{ title: 'Name', key: 'name' }, { title: 'Joined', key: 'joined', type: 'date' }],
    data: [{ name: 'Ada', joined: new Date(2024, 0, 15) }],
  };

  <ExcelExport dataset={{ ...people, name: 'People', freezeHeader: true }} filename="people">
    Download people.xlsx
  </ExcelExport>
  ```
- **0.6.x stays on npm…
