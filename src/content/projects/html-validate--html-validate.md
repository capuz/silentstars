---
repo: "html-validate/html-validate"
name: "html-validate"
description: "Mirror of the HTML-Validate GitLab repository"
readmeQualityOk: true
url: "https://github.com/html-validate/html-validate"
homepage: "https://html-validate.org"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [90]
topics: ["devtools", "html", "html-checker", "html-linter", "html-validate", "html-validation", "web-development", "web-standards", "hacktoberfest"]
stars: 15
forks: 1
openIssues: 1
closedIssues: 3
watchers: 2
contributors: 25
recentReleases: 0
createdAt: "2023-08-20T22:14:03Z"
lastCommitAt: "2026-07-23T05:24:05Z"
status: "thriving"
tags: ["hidden_gem", "funded"]
healthScore: 95
undervaluedScore: 67
maintainers: ["ext", "SidharthSKR99"]
openGraphImageUrl: "https://opengraph.githubassets.com/6cd6a0e923af6800caa7ee8f8460c5646267cd7ccd0f6d0842256ee4c44672ab/html-validate/html-validate"
fundingLinks: ["GITHUB:https://github.com/html-validate"]
---

# html-validate

Offline HTML5 validator. Validates either a full document or a smaller
(incomplete) template, e.g. from an AngularJS or Vue.js component.

Read the full documentation at https://html-validate.org/

## Features

- Can test fragments of HTML, for instance a component template.
- Does not upload any data to a remote server, all testing is done locally.
- Strict and non-forgiving parsing. It will not try to correct any incorrect
  markup or guess what it should do.

## Usage

    npm install -g html-validate
    html-validate [OPTIONS] [FILENAME..] [DIR..]

## Configuration

Create `.htmlvalidate.json`:

```js
{
  "extends": [
    "html-validate:recommended"
  ],

  "rules": {
    "close-order": "error",
    "void": ["warn", {"style": "omit"}]
  }
}
```

## Example

```html
<p>
  <button>Click me!</button>
    Lorem ipsum
  </div>
</p>
```

```text
  1:1  error  Element <p> is implicitly closed by adjacent <div>  no-implicit-close
  2:2  error  Button is missing type attribute                    button-type
  6:4  error  Unexpected close-tag, expected opening tag          close-order
```

## Bundles

The library comes in four flavours:

- CommonJS full…
