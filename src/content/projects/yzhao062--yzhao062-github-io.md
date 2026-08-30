---
repo: "yzhao062/yzhao062.github.io"
name: "yzhao062.github.io"
description: "My personal website"
readmeQualityOk: true
url: "https://github.com/yzhao062/yzhao062.github.io"
homepage: "https://yzhao062.github.io/"
language: "HTML"
languages: ["HTML"]
languagePcts: [71]
stars: 10
forks: 27
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 21
recentReleases: 0
createdAt: "2023-05-18T02:24:55Z"
lastCommitAt: "2026-08-30T00:41:16Z"
status: "thriving"
tags: ["funded", "fork_magnet"]
healthScore: 89
undervaluedScore: 83
maintainers: ["yzhao062", "github-actions[bot]", "AiHeMaotai"]
openGraphImageUrl: "https://opengraph.githubassets.com/cb6f6c6f3a0f8389a3bd4253ae0bce62dc617bf17ea72d0e7efa342f5073682e/yzhao062/yzhao062.github.io"
fundingLinks: ["GITHUB:https://github.com/yzhao062"]
---

# FORTIS Lab Website and CV

This repository hosts the [FORTIS Lab website](https://viterbi-web.usc.edu/~yzhao010/) and the LaTeX source for Yue Zhao's academic CV.

## How to Update Your Info on the Lab Page

Member sections are data-driven. Update JSON files instead of editing `lab.html` directly.

### Files to edit

- `data/lab-current-phd.json` for current Ph.D. students
- `data/lab-members.json` for current Master/Undergrad members and all past members

### Workflow

1. **Fork and clone** this repository.
2. **Add your photo** under `images/others/` (square, `.webp` preferred).
3. **Update the correct JSON file** (do **not** manually edit `lab.html`).
4. **Preview locally** by opening `lab.html` in a browser.
5. **Keep commits clean** (no `.DS_Store`, `.idea/*.xml`, etc.).
6. **Open a PR**.

### JSON Examples

#### Current Ph.D. student (`data/lab-current-phd.json`)

```json
{
  "name": "Jane Doe",
  "profile_url": "https://example.com",
  "image": "images/others/jane_doe.webp",
  "alt": "Jane Doe",
  "year_info": "1st year, Joined Fortis in Aug 2026",
  "research": "LLM Safety, Robustness",
  "awards": ["Example Fellowship"],
  "email": "janedoe@usc.edu",
  "co_advised_by":…
