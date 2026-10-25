---
repo: "PaulKinlan/leviroutes"
name: "leviroutes"
description: "A basic routes framework for JS that hooks in to HTML5 history"
readmeQualityOk: true
url: "https://github.com/PaulKinlan/leviroutes"
language: "JavaScript"
languages: ["JavaScript", "Shell"]
languagePcts: [58, 42]
stars: 240
forks: 26
openIssues: 0
closedIssues: 15
watchers: 8
contributors: 3
recentReleases: 0
createdAt: "2011-03-31T03:36:48Z"
lastCommitAt: "2026-10-25T09:01:38Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 95
undervaluedScore: 40
maintainers: ["PaulKinlan", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/c2a6b2a411c00d5b2ff56d5fa8563bca33bff6b4d4f9b93e28850bf23f99b4f8/PaulKinlan/leviroutes"
---

LeviRoutes
==========

> **⚠️ DISCLAIMER:** This project has not been updated or maintained for a long time. While I might add more features in the future, please do not rely on this project for production use or active development.

A simple lightweight routes framework for hooking in to HTML5 history.  Currently when the system pop's state the route is triggered if matched.

LeviRoutes can also intercept POST requests via forms, the framework will intercept all submits, and naturally let through requests that don't match the path, whilst firing your callback if there is a match

## Installation

Install via npm:

```bash
npm install leviroutes
```

Or use it directly from a CDN with ES modules:

```html
<script type="module">
  import routes from 'https://esm.sh/leviroutes';
  
  const app = new routes();
  // ... use the library
</script>
```

## Usage

### ES Modules (Recommended)

```javascript
import routes from 'leviroutes';

const app = new routes();

app.get("/", function(req) {
  alert("State popped for /");
});
```

### Classic Script Tag

```html
<script type="module">
  import routes from './node_modules/leviroutes/src/routes.js';
  
  const app = new routes();
  //…
