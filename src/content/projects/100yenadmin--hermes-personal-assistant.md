---
repo: "100yenadmin/hermes-personal-assistant"
name: "hermes-personal-assistant"
description: "Your Hermes agent runs errands on the real sites, fills every field, and stops at the last button until you say yes."
readmeQualityOk: true
url: "https://github.com/100yenadmin/hermes-personal-assistant"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["hermes-agent", "hermes-plugin", "personal-assistant", "travel", "ai-agent", "hermes"]
stars: 6
forks: 1
openIssues: 55
closedIssues: 66
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-10-19T13:32:19Z"
lastCommitAt: "2026-11-17T14:31:31Z"
lastReleaseAt: "2026-11-08T17:47:09Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine", "under_pressure"]
healthScore: 91
undervaluedScore: 58
maintainers: ["100yenadmin"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1425664666/3de8b91a-f882-4888-b03e-5e46779e0ee5"
---

# Personal Assistant Plugin

Your Hermes agent runs errands on the real sites, fills every field, and stops at the last button until you say yes.

**Watch the demo on X:** https://x.com/ElectricSheepIO/status/2120185069536973225

https://github.com/user-attachments/assets/d6ebc14a-2532-4791-ac11-2998da7e3896

## Install

```bash
hermes plugins install 100yenadmin/hermes-personal-assistant --ref 57f701e83ebb807be4d1429d7e35f02bdf5dd5d8 --enable --yes-deps
```

This installs the stable release v0.11.0, and `--enable` turns the plugin on; leave `--enable` off to install it disabled and inspect it first (see [Installation details](#installation-details)). `--yes-deps` (Hermes 0.22 or newer) lets Hermes install the plugin's Python dependencies (listed in `plugin.yaml`) into your Hermes environment without asking again; leave it off to review them first. On Hermes 0.21, leave `--yes-deps` off: Hermes lists the dependencies and how to install them. No API key is needed to start. A cloud browser (Browserbase) and the optional phone and Daily Ops features need their own keys, described below. Restart your gateway (`hermes gateway restart`) and start a new chat.

## Try it

1. **Install**…
