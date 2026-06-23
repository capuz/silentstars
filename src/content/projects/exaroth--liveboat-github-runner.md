---
repo: "exaroth/liveboat-github-runner"
name: "liveboat-github-runner"
description: "Setup your own personalized RSS feed site on Github Pages"
url: "https://github.com/exaroth/liveboat-github-runner"
language: "Handlebars"
languages: ["Handlebars"]
languagePcts: [76]
stars: 41
forks: 2
openIssues: 0
closedIssues: 2
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2024-12-24T14:35:26Z"
lastCommitAt: "2026-06-23T23:29:30Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 90
undervaluedScore: 31
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/3a8d8d52f12929f2d7dd53680a4a41d5ef698c25353169a6bb104e319d8ca2a1/exaroth/liveboat-github-runner"
---

<h2 align="center">
<br/>
Liveboat Github Runner
</h2>

### See it in [Action](https://konrad.website/liveboat-github-runner)

<br/>
This is template repository for <a href="https://github.com/exaroth/liveboat">Liveboat</a> feed generator, use it to configure and deploy feed websites on Github Pages. Follow instructions below for more details.

## Installation

Prerequisites: 
- List of RSS urls you want to follow, see [Liveboat url file breakdown](#liveboat-url-file-breakdown) section below for more information about adding links to the page.
- Github account

__STEP 1__ Create new Github repository from `liveboat-github-runner` template

- Click `Use this template` in the upper right corner
- Select repository name and privacy settings

> [!NOTE]
> Repository can be private or public however note that hosting project pages from private repos is only available for Github Pro users.

- After the repository has been created use `git clone` to download it

__STEP 2__ Update configuration and urls file
- `cd` into the cloned repository
 
- First edit `./config/liveboat-config.toml` file, update `title` and most importantly `site_path` - this option needs to be set to `/<repo_name>/`…
