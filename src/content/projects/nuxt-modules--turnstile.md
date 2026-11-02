---
repo: "nuxt-modules/turnstile"
name: "turnstile"
description: "🔥 Cloudflare Turnstile integration for Nuxt"
readmeQualityOk: true
url: "https://github.com/nuxt-modules/turnstile"
homepage: "https://cloudflare.com/products/turnstile"
language: "TypeScript"
languages: ["TypeScript", "Vue"]
languagePcts: [73, 25]
topics: ["captcha", "cloudflare", "recaptcha", "turnstile", "hacktoberfest", "nuxt"]
stars: 296
forks: 27
openIssues: 11
closedIssues: 49
watchers: 1
contributors: 20
recentReleases: 0
createdAt: "2022-10-01T22:00:09Z"
lastCommitAt: "2026-11-02T13:38:25Z"
lastReleaseAt: "2023-01-28T23:18:50Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "funded"]
healthScore: 94
undervaluedScore: 39
maintainers: ["renovate[bot]", "danielroe", "Norbiros"]
openGraphImageUrl: "https://opengraph.githubassets.com/74726b3648d39d0358d04dfa63963363305281ddce50f7b3403282321f5b0ac6/nuxt-modules/turnstile"
fundingLinks: ["GITHUB:https://github.com/danielroe"]
discussionCount: 7
---

# Nuxt Turnstile

> [Cloudflare Turnstile](https://developers.cloudflare.com/turnstile/) integration for [Nuxt](https://nuxt.com)

- [✨ &nbsp;Changelog](https://github.com/nuxt-modules/turnstile/blob/main/CHANGELOG.md)
- [▶️ &nbsp;Online playground](https://stackblitz.com/github/nuxt-modules/turnstile/tree/main/playground)

## Features

- 💪 smart verification with minimal user interaction
- 🕵️‍♀️ privacy-focused approach
- ✨ server validation helper for your nitro endpoints
- ⚡️ lightweight - script only loaded when required

## Installation

1. First, [follow these steps](https://developers.cloudflare.com/turnstile/get-started/) to obtain a free sitekey and secret key from Cloudflare.

1. Install `@nuxt/scripts` as a dependency - see [docs](https://scripts.nuxt.com/) for more info if you're interested.

1. Install and add `@nuxtjs/turnstile` to your `nuxt.config`.

   ```bash
   npx nuxi@latest module add turnstile
   ```

   ```js
   export default defineNuxtConfig({
     modules: ['@nuxtjs/turnstile'],

     turnstile: {
       siteKey: '<your-site-key>',
     },

     runtimeConfig: {
       turnstile: {
         // This can be overridden at runtime via the…
