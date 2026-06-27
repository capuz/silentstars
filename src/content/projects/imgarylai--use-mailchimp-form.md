---
repo: "imgarylai/use-mailchimp-form"
name: "use-mailchimp-form"
description: "✉️ MailChimp form react integration implemented in React hooks way. "
url: "https://github.com/imgarylai/use-mailchimp-form"
homepage: "https://imgarylai.github.io/use-mailchimp-form/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [87]
topics: ["mailchimp", "mailchimp-embed", "reactjs", "react-hooks", "react"]
stars: 27
forks: 6
openIssues: 1
closedIssues: 7
watchers: 1
contributors: 6
recentReleases: 0
createdAt: "2020-05-08T06:51:38Z"
lastCommitAt: "2026-06-27T00:48:25Z"
lastReleaseAt: "2022-02-05T19:59:31Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 96
undervaluedScore: 65
maintainers: ["renovate[bot]", "imgarylai", "semantic-release-bot"]
openGraphImageUrl: "https://opengraph.githubassets.com/0fdd8d6736877d158729b05a945883b3d13de1efad32384161920376b3f7e8f4/imgarylai/use-mailchimp-form"
---

# use-mailchimp-form [](https://www.npmjs.com/package/use-mailchimp-form) [](https://github.com/semantic-release/semantic-release) [](https://codecov.io/gh/imgarylai/use-mailchimp-form)

A React hooks-based solution for integrating [MailChimp](https://mailchimp.com/) subscribe forms into your React applications. This package handles all the business logic, allowing you to focus on the UI implementation. The view component can be fully customized or implemented with any React form library.

## Features

- 🎣 React Hooks-based implementation
- 🎨 Fully customizable UI
- 📦 Zero dependencies (except React)
- 🔒 Type-safe with TypeScript support
- 🚀 Modern ESM and CommonJS support

## Requirements

- Node.js >= 22.0.0
- npm >= 10.0.0
- React >= 18.2.0

## Installation

Using npm:

```bash
npm install use-mailchimp-form
```

Using yarn:

```bash
yarn add use-mailchimp-form
```

## Setup

### Getting Your Mailchimp Form Endpoint

1. Navigate to the `Audience` page in your Mailchimp dashboard
2. Click the dropdown menu `Manage Audience > Signup Forms`
3. Select `Embedded Form`
4. In the generated code, locate the form's action URL. It will look like:
   ```…
