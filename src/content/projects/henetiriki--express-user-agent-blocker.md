---
repo: "henetiriki/express-user-agent-blocker"
name: "express-user-agent-blocker"
description: "Express middleware for blocking access based on User Agent"
readmeQualityOk: true
url: "https://github.com/henetiriki/express-user-agent-blocker"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [95]
stars: 5
forks: 0
openIssues: 0
closedIssues: 2
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2017-06-10T11:44:08Z"
lastCommitAt: "2026-10-12T11:16:54Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 92
undervaluedScore: 64
maintainers: ["dependabot[bot]", "henetiriki"]
openGraphImageUrl: "https://opengraph.githubassets.com/93db1f025a63cff94ff4bd6af6a1066585fb6210d8305f26728cd461785aab94/henetiriki/express-user-agent-blocker"
---

# Express User-agent Blocker 🤖

A lightweight user-agent blocker for Express.

## Why?

Some bots just don't play by the rules and blatantly disrespect `robots.txt`. To these bots, we say **"Nothing to see here - move along please..."**

## Installation

```shell
npm i express-user-agent-blocker
```

## Usage

This module has no direct runtime dependencies. It can be added anywhere in the `express` chain as long as it runs before serving any content that needs to be blocked.

```js
// JavaScript
const express = require('express')
const blocker = require('express-user-agent-blocker')

const app = express()

// ...
// other middleware
// ...
app.use(blocker(['Baiduspider', 'SomeHorridUA']))
// ...
// more middleware
// ...
```

```typescript
// TypeScript
import express from 'express'
import blocker from 'express-user-agent-blocker'

const app = express()

// ...
// other middleware
// ...
app.use(blocker(['Baiduspider', 'SomeHorridUA']))
// ...
// more middleware
// ...
```

### Specifying a custom message
               
```js
// html response
app.use(blocker(['Baiduspider'], {
  html: '<h1>Let me make a bologna sandwich...</h1>'
}))

// plain text response…
