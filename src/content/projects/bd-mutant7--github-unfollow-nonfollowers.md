---
repo: "Bd-Mutant7/github-unfollow-nonfollowers"
name: "github-unfollow-nonfollowers"
description: "A Python script that uses the GitHub API to automatically unfollow users who don't follow you back, with preview mode and rate limit handling."
readmeQualityOk: true
url: "https://github.com/Bd-Mutant7/github-unfollow-nonfollowers"
language: "Python"
languages: ["Python"]
languagePcts: [89]
topics: ["api-client-python", "automation", "followers-tracker", "github-api", "github-manager", "github-tool", "python", "unfollow-users"]
stars: 12
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-03-05T13:39:14Z"
lastCommitAt: "2026-08-15T04:03:00Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 42
maintainers: ["Bd-Mutant7"]
openGraphImageUrl: "https://opengraph.githubassets.com/166177ba4d9e23a112f7b85ac53c16c43ed851189fad4210a72bd98f0271fa82/Bd-Mutant7/github-unfollow-nonfollowers"
---

# GitHub Unfollow Non-Followers

A simple Python script that uses the **GitHub REST API** to automatically unfollow anyone who isn't following you back.

---

## Features

- Authenticates securely via a Personal Access Token
- Handles pagination — works even if you follow thousands of people
- Lists every user it plans to unfollow before doing anything
- Asks for confirmation before making any changes
- Rate-limit friendly — won't get you blocked by GitHub's API
- Prints a full success/failure summary when done

---

## Requirements

- Python 3.10+
- A GitHub account
- A GitHub Personal Access Token with the `user:follow` scope

---

## Setup

**1. Clone the repo**
```bash
git clone https://github.com/Bd-Mutant7/github-unfollow-nonfollowers.git
cd github-unfollow-nonfollowers
```

**2. Install dependencies**
```bash
pip install -r requirements.txt
```

**3. Generate a GitHub Personal Access Token**

Go to [github.com/settings/tokens](https://github.com/settings/tokens) and create a new token with the **`user:follow`** scope enabled. Copy the token — you won't be able to see it again.

---

## Usage

```bash
python unfollow_nonfollowers.py
```

You will be prompted to enter:
- Your…
