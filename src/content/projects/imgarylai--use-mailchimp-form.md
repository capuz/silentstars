---
repo: "imgarylai/use-mailchimp-form"
name: "use-mailchimp-form"
description: "✉️ MailChimp form react integration implemented in React hooks way. "
readmeQualityOk: true
url: "https://github.com/imgarylai/use-mailchimp-form"
homepage: "https://imgarylai.github.io/use-mailchimp-form/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [86]
topics: ["mailchimp", "mailchimp-embed", "reactjs", "react-hooks", "react"]
stars: 27
forks: 6
openIssues: 1
closedIssues: 7
watchers: 1
contributors: 6
recentReleases: 0
createdAt: "2020-05-08T06:51:38Z"
lastCommitAt: "2026-07-21T06:12:00Z"
lastReleaseAt: "2022-02-05T19:59:31Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 96
undervaluedScore: 65
maintainers: ["renovate[bot]", "imgarylai", "semantic-release-bot"]
openGraphImageUrl: "https://opengraph.githubassets.com/297ab0239388e3d889729b111470cfb8d33c846d75a7bd874d78989c1c7178f6/imgarylai/use-mailchimp-form"
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
