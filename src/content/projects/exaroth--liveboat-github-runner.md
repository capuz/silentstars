---
repo: "exaroth/liveboat-github-runner"
name: "liveboat-github-runner"
description: "Setup your own personalized RSS feed site on Github Pages"
readmeQualityOk: true
url: "https://github.com/exaroth/liveboat-github-runner"
language: "Handlebars"
languages: ["Handlebars"]
languagePcts: [76]
stars: 46
forks: 2
openIssues: 0
closedIssues: 3
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2024-12-24T14:35:26Z"
lastCommitAt: "2026-09-29T08:11:19Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 67
undervaluedScore: 32
maintainers: ["exaroth"]
openGraphImageUrl: "https://opengraph.githubassets.com/d1b7514e29c7d2686ab411d05a04b9c4208cf62df9f0ed19b600f534343c5687/exaroth/liveboat-github-runner"
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
