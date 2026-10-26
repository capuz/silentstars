---
repo: "ansible/ansible-ui"
name: "ansible-ui"
description: "The UIs for Ansible Projects such as AWX, EDA, and HUB."
readmeQualityOk: true
url: "https://github.com/ansible/ansible-ui"
homepage: "https://ansible.github.io/ansible-ui/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["ansible", "awx", "awx-ansible"]
stars: 115
forks: 131
openIssues: 6
closedIssues: 44
watchers: 16
contributors: 102
recentReleases: 0
createdAt: "2022-10-05T13:51:23Z"
lastCommitAt: "2026-10-26T18:06:18Z"
status: "thriving"
tags: ["fork_magnet"]
healthScore: 97
undervaluedScore: 55
maintainers: ["nixocio", "acruzgon", "lgalis"]
openGraphImageUrl: "https://opengraph.githubassets.com/b5ecf0fdf8ba8efd48e87d0b378ba2224db7189329819174fc2f7d13f9175afd/ansible/ansible-ui"
---

# Ansible UI

Source for the Ansible web UI. The supported development path is the **Platform UI**—the unified application in `platform/`—which talks to [Ansible Jewel](https://github.com/ansible/jewel). Product-specific workspaces (AWX, Hub, EDA, and shared libraries) live under `frontend/` and are composed into that application.

Day-to-day integration happens on the **`devel`** branch. Open pull requests against `devel`.

- [Getting started](#getting-started)
- [Repository layout](#repository-layout)
- [Environment variables](#environment-variables)
- [NPM scripts](#npm-scripts)
- [Documentation](#documentation)
- [Standalone product UIs](#standalone-product-uis-unsupported)
- [AI-assisted contributions](#ai-assisted-contributions)
- [Code of Conduct](#code-of-conduct)

## Getting started

1. **Prerequisites**

   - [Node.js](https://nodejs.org/) **24.x or newer** (see `engines` in [`package.json`](https://github.com/ansible/ansible-ui/blob/HEAD/package.json))
   - npm (bundled with Node)

2. **Clone the repository**

   ```zsh
   git clone git@github.com:ansible/ansible-ui.git
   cd ansible-ui
   ```

3. **Install dependencies**

   ```zsh
   npm ci
   ```

4. **Run Ansible…
