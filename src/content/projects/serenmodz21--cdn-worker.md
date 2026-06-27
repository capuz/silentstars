---
repo: "SerenModz21/cdn-worker"
name: "cdn-worker"
description: "A simple CDN made using Cloudflare Workers and Hono"
url: "https://github.com/SerenModz21/cdn-worker"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["cloudflare", "cloudflare-r2", "cloudflare-workers", "hono", "cloudflare-kv"]
stars: 27
forks: 17
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2023-03-07T23:54:59Z"
lastCommitAt: "2026-06-27T00:46:27Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded", "fork_magnet"]
healthScore: 79
undervaluedScore: 56
maintainers: ["renovate[bot]", "SerenModz21", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/c9a8c281454685fb53dfc6f6b963844ba6d785353433269ff8aaa8ac710975e0/SerenModz21/cdn-worker"
fundingLinks: ["GITHUB:https://github.com/SerenModz21"]
---

# CDN Worker

A simple CDN made using Cloudflare Workers, Cloudflare R2, and Hono.

## Prerequisites

- A Cloudflare account
- R2 Plan (starts for free)
- KV namespace

## Installation

> [!NOTE]
> The "Deploy to Cloudflare" is back and can now create R2 buckets and KV namespaces. As such, you can use this button to deploy.
> However, should you wish to deploy manually, you can instead follow the instructions below.

To follow the instructions below, you must have Node.js installed. Additionally, I will be showing any terminal commands using Yarn (my preferred package manager), but any Node.js package manager will work with slight modifications.

1. Download the project onto your machine by downloading the ZIP file and extracting it, or forking and then cloning the project using Git.
2. Open a terminal in the location of the project and run `yarn install` (or `yarn` for short) to install the required dependencies.
3. Log in to Cloudflare by running `yarn wrangler login`, which will open the browser and request permissions once logged in.
4. Create the R2 bucket by running `yarn wrangler r2 bucket create cdn` if it doesn't already exist. If you get an error saying something along…
