---
repo: "madskristensen/HomeAutomationCookbook"
name: "HomeAutomationCookbook"
description: "A collection of practical home automation recipes and patterns for smart home enthusiasts"
readmeQualityOk: true
url: "https://github.com/madskristensen/HomeAutomationCookbook"
language: "Python"
languages: ["Python", "Ruby"]
languagePcts: [53, 42]
stars: 8
forks: 2
openIssues: 0
closedIssues: 31
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2025-11-29T02:02:44Z"
lastCommitAt: "2026-10-26T03:02:34Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 98
undervaluedScore: 71
maintainers: ["madskristensen"]
openGraphImageUrl: "https://opengraph.githubassets.com/818e32c33c2f78107b4e8f2257bc97fad3c2992df1d890a005656713e01151e4/madskristensen/HomeAutomationCookbook"
fundingLinks: ["GITHUB:https://github.com/madskristensen"]
discussionCount: 1
---

# Home Automation Cookbook

> A comprehensive guide for home automation enthusiasts

This repository contains the source for the Home Automation Cookbook website, built with Jekyll and hosted on GitHub Pages.

## Live site

Visit the live site at: https://www.homeautomationcookbook.com

## About

The Home Automation Cookbook is a community-driven documentation project that helps people:

- Get started with home automation
- Choose the right platform and devices
- Create effective automations
- Secure their smart homes
- Troubleshoot common issues

## Development

### Prerequisites

- Ruby 2.7 or higher
- Bundler
- Git

### Local Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/madskristensen/HomeAutomationCookbook.git
   cd HomeAutomationCookbook
   ```

2. Install dependencies:
   ```bash
   bundle config set --local path 'vendor/bundle'
   bundle install
   ```

3. Install the CSS minifier used by the fingerprint plugin:
   ```bash
   python3 -m pip install rcssmin
   ```

4. Run the local server:
   ```bash
   bundle exec jekyll serve --source docs --port 4001 --host 0.0.0.0
   ```

5. Open your…
