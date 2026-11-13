---
repo: "PostHog/posthog-docusaurus"
name: "posthog-docusaurus"
description: "🦔 PostHog plugin for Docusaurus v2"
readmeQualityOk: true
url: "https://github.com/PostHog/posthog-docusaurus"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
stars: 9
forks: 1
openIssues: 3
closedIssues: 5
watchers: 1
contributors: 33
recentReleases: 0
createdAt: "2020-06-18T10:24:30Z"
lastCommitAt: "2026-11-13T11:21:27Z"
lastReleaseAt: "2024-12-09T18:39:48Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 90
undervaluedScore: 35
maintainers: ["marandaneto", "Piccirello"]
openGraphImageUrl: "https://opengraph.githubassets.com/f075b71f74d56ed1a0340fed5da6e0548d492f3c9534d65912bdc5eca59e4717/PostHog/posthog-docusaurus"
---

# PostHog plugin for Docusaurus

Easily track and improve your Docusaurus site with PostHog. See [our docs on this plugin](https://posthog.com/docs/libraries/docusaurus) for more information.

## Installing the plugin

```bash
npm install posthog-docusaurus --save
```

or

```bash
yarn add posthog-docusaurus
```

## Configuring the plugin

```javascript
// docusaurus.config.js
module.exports = {
  plugins: [
    [
      "posthog-docusaurus",
      {
        apiKey: "<ph_project_api_key>",
        appUrl: "<ph_client_api_host>", // optional, defaults to "https://us.i.posthog.com"
        enableInDevelopment: false, // optional
      },
    ],
  ],
};
```

> **Note:**You can pass additional PostHog [config options](https://github.com/PostHog/posthog-docusaurus/blob/HEAD/docs/libraries/js#config) to the plugin, but they are passed through `JSON.stringify()`, so functions (such as `sanitize_properties`) are not supported.

## Using the plugin

Once running, this autocaptures pageviews, events, and session replay (if enabled) and enables usage of other PostHog features like surveys.

## Docusaurus compatibility

Verified with Docusaurus **3.10.2** and React **19.3.1** using the [sample…
