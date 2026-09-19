---
repo: "utcq/ocbadge"
name: "ocbadge"
description: "Olicyber profile badge generator"
readmeQualityOk: true
url: "https://github.com/utcq/ocbadge"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 16
forks: 12
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2025-03-22T18:42:23Z"
lastCommitAt: "2026-09-19T01:16:44Z"
status: "thriving"
tags: ["solo_builder", "fork_magnet"]
healthScore: 90
undervaluedScore: 69
maintainers: ["actions-user"]
openGraphImageUrl: "https://opengraph.githubassets.com/dbfc695b901087c2a40d8c91828cc826dd0dafcc0e014f97753fe8580ae1cf37/utcq/ocbadge"
---

# Olicyber Badge Generator

A github workflow to generate cards like this:

# How To

## Auth Token
Go to the [Training Platform](https://github.com/utcq/ocbadge/blob/HEAD/training.olicyber.it), login. Then use the dev-tools to view the local storage and get your token.

---

## Methods

- [Automated Workflow](#automated-workflow)
- [Local Generation](#local-generation)

## Automated workflow
After forking the repo

> [!IMPORTANT]  
> go to **Settings -> Secrets and variables -> Actions**
>
> Create a new **Repository** secret named `OC_TOKEN` and insert the previously retrieved token

### Manual Update Trigger
The card is updated everyday at midnight (`UTC+1`) but you can update it manually:

Proceed to **Actions -> Generate Card (on the left) -> Run workflow**

When manually triggering the workflow, you can select a style from the dropdown menu:

In the workflow run form, you'll see a "Card style" input field where you can choose between `default`, `dark`, `white`, or `darkRed`.

### Embedding
You now have to insert
```html
```
in your github profile README
## Local Generation
```sh
export OC_TOKEN=*****
python3 gen.py style
```
Where style is optional and can be one of:…
