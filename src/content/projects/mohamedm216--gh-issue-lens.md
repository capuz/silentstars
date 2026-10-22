---
repo: "MohamedM216/gh-issue-lens"
name: "gh-issue-lens"
description: "Simple and fast CLI tool to help newcomers to open source to pick up their first issues easily"
readmeQualityOk: true
url: "https://github.com/MohamedM216/gh-issue-lens"
language: "Python"
languages: ["Python"]
languagePcts: [92]
stars: 11
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-10-04T04:26:44Z"
lastCommitAt: "2026-10-22T08:05:33Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 78
undervaluedScore: 24
maintainers: ["MohamedM216"]
openGraphImageUrl: "https://opengraph.githubassets.com/bce91893cf1a41413bbc306244823c02f0d9e21beb47063f7a8b0fe4394e908a/MohamedM216/gh-issue-lens"
discussionCount: 0
---

# Easier open source contribution process for newcomers

Stop digging through stale GitHub issues. **gh-issue-lens** finds unassigned, beginner-friendly open source issues in any repository and prepares them for LLM analysis in seconds. It bypasses API rate limits by grabbing issues, linked Pull Requests, assignees, and non-bot comments in a single network pass.

# How to use it?

## Option 1: Install from PyPI

```bash
pip install gh-issue-lens
```
**Export your GitHub Personal Access Token:**

First of all, create your personal github token from your github account then use it.

```bash
export GITHUB_TOKEN="your_personal_access_token"
```

**Fetch issues:**

```bash
gh-issue-lens kubernetes kubernetes -d 200
```

**Filter by labels:**

```bash
gh-issue-lens kubernetes kubernetes -l "good first issue" "help wanted" -d 50
```

And for more commands, you can see the sections below. The guidelines are the same. The only difference is to use `gh-issue-lens` directly instead of `python3 cli.py`.

## Option 2: Build it manually

**Clone the repo:**

```bash
git clone https://github.com/MohamedM216/gh-issue-lens.git
```

**Install requirements:**

```bash
pip3 install requests
```…
