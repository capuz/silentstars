---
repo: "DevM7mdAli/FormFully"
name: "FormFully"
description: "web extension for auto fill all input tags."
readmeQualityOk: true
url: "https://github.com/DevM7mdAli/FormFully"
homepage: "http://mohammed-alajmi.me/FormFully/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [83]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 2
createdAt: "2024-03-22T08:46:23Z"
lastCommitAt: "2026-10-27T09:16:36Z"
lastReleaseAt: "2026-10-27T09:16:46Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 82
undervaluedScore: 77
maintainers: ["DevM7mdAli", "semantic-release-bot", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/8492751078c009060b8408ef13bf846271693287f92e334f60dba065c04e2488/DevM7mdAli/FormFully"
---

·
	·
	·

---

## Overview

FormFully fills web forms for you, which is mostly useful when you test forms or fill the same ones often. It has two modes:

- **Classic** is the original behavior and is still the default. It fills every field with one value.
- **Smart** is opt-in. It fills Google Forms and regular web forms from a saved profile: names, email, phone, company, address, common field types, textareas, selects, and custom choice controls.

Website: [formfully.mohammed.win](https://formfully.mohammed.win/)

## Features

- Classic mode fills every field with one value. Leave the value blank to get a random number from 1 to 5 per field.
- Classic mode picks a random option in each unanswered radio group.
- Date and color fields get valid values: `date`, `month`, `week` (ISO week), `time`, and `datetime-local` use the current date or time, and `color` gets a random hex.
- Smart mode recognizes full, first, and last name, email, phone, company, address, city, country, URL, job title, and more.
- Custom field rules such as `Group number → 12`. When several rules match, the most specific one wins.
- Fills inputs, textareas, native selects, contenteditable fields, radio groups,…
