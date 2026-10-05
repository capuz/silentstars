---
repo: "github/auto-check-element"
name: "auto-check-element"
description: "An input element that validates its value with a server endpoint."
readmeQualityOk: true
url: "https://github.com/github/auto-check-element"
homepage: "https://github.github.com/auto-check-element/examples/"
language: "JavaScript"
languages: ["JavaScript", "TypeScript"]
languagePcts: [56, 41]
topics: ["web-components", "custom-elements"]
stars: 188
forks: 35
openIssues: 1
closedIssues: 5
watchers: 236
contributors: 243
recentReleases: 0
createdAt: "2018-04-05T14:05:49Z"
lastCommitAt: "2026-10-05T10:46:43Z"
lastReleaseAt: "2019-08-27T09:13:23Z"
status: "thriving"
tags: ["legacy_hero", "community_watch"]
healthScore: 90
undervaluedScore: 35
maintainers: ["dependabot[bot]", "TylerJDev", "liuliu-dev"]
openGraphImageUrl: "https://opengraph.githubassets.com/03fa868642bed3849f289e9814d6963f462bf5276c13237b631cc6bf93616572/github/auto-check-element"
---

# &lt;auto-check&gt; element

An input element that validates its value against a server endpoint.

## Installation

```
$ npm install --save @github/auto-check-element
```

## Usage

### Script

Import as a modules:

```js
import '@github/auto-check-element'
```

With a script tag:

```html
<script type="module" src="./node_modules/@github/auto-check-element/dist/index.js">
```

### Markup

```erb
<auto-check src="/signup-check/username" csrf="<%= authenticity_token_for("/signup-check/username") %>">
  <input>
</auto-check>
```

Note that in the following example the CSRF element is marked with the `data-csrf` attribute rather than `name` so that the value doesn't get posted to the backend when the element is placed in a form.

```erb
<auto-check src="/signup-check/username">
  <input>
  <input hidden data-csrf value="<%= authenticity_token_for("/signup-check/username") %>">
</auto-check>
```

## Attributes

- `src` is the server endpoint that will receive POST requests. The posted form contains a `value` parameter containing the text input to validate. Responding with a 200 OK status indicates the provided value is valid. Any other error status response indicates the provided…
