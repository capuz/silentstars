---
repo: "finmars-platform/finmars-core"
name: "finmars-core"
description: "Open Source Finance Management Platform"
url: "https://github.com/finmars-platform/finmars-core"
homepage: "https://finmars.com"
language: "Python"
languages: ["Python"]
languagePcts: [99]
topics: ["bonds", "django", "finance", "finance-management", "fintech", "forwards-contracts", "investing", "on-premise", "pms", "portfolio-management"]
stars: 51
forks: 12
openIssues: 47
closedIssues: 53
watchers: 4
contributors: 7
recentReleases: 0
createdAt: "2025-04-26T12:04:52Z"
lastCommitAt: "2026-07-02T06:33:44Z"
lastReleaseAt: "2025-09-08T09:48:38Z"
status: "thriving"
tags: []
healthScore: 82
undervaluedScore: 33
maintainers: ["falendary", "paktusov", "HenkKalkwater"]
openGraphImageUrl: "https://opengraph.githubassets.com/322104b5e085e16bb61a766ee94059813ba11346800d64b94a61b290d11fe08f/finmars-platform/finmars-core"
discussionCount: 0
---

</a>
  </p>
</p>

# Open Source Finance Management Platform

Finmars is a **free, open-source** platform to help you manage all your money and investments in one place.  You can pull in data from many accounts and see it together.  
\
It gives you easy tools to create reports, dashboards, and PDFs without writing code.  
You can add extra features from our open marketplace — just pick what you need and plug it in.  
Finmars runs in your web browser, so you and your team can use it from anywhere.

</p>

## Community Edition

To install and to start using Finmars please refer [Getting Started Community Edition](https://docs.finmars.com/shelves/community-edition).

Also see [finmars-community-edition](https://github.com/finmars-platform/finmars-community-edition) repository.

#### Self-Hosting with Docker Compose
This is the simplest way to get a local Finmars instance running.

On Linux or Mac Enviroment:
```bash
# Clone the Finmars Community Edition repository
git clone https://github.com/finmars-platform/finmars-community-edition.git

# Navigate to the repository
cd finmars-community-edition

# Configure env file
vim .env

# Run Migrations
make migrate

# Run Finmars
make up

```…
