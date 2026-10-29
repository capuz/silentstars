---
repo: "netlify/plugin-csp-nonce"
name: "plugin-csp-nonce"
description: "Build plugin to use a nonce for the script-src directive of your site's Content Security Policy."
readmeQualityOk: true
url: "https://github.com/netlify/plugin-csp-nonce"
homepage: "https://csp-nonce.netlify.app"
language: "HTML"
languages: ["HTML"]
languagePcts: [100]
topics: ["security", "csp", "netlify"]
stars: 9
forks: 15
openIssues: 5
closedIssues: 13
watchers: 2
contributors: 16
recentReleases: 0
createdAt: "2023-05-22T19:19:55Z"
lastCommitAt: "2026-10-29T21:23:52Z"
lastReleaseAt: "2023-06-05T18:42:59Z"
status: "thriving"
tags: ["fork_magnet"]
healthScore: 94
undervaluedScore: 54
maintainers: ["github-actions[bot]", "markchencw"]
openGraphImageUrl: "https://opengraph.githubassets.com/e604356cd81f5933333360d569e6619b2dd6de0063b398a4a79587be3a4847cf/netlify/plugin-csp-nonce"
---

# @netlify/plugin-csp-nonce

Use a [nonce](https://content-security-policy.com/nonce/) for the `script-src` directive of your Content Security Policy (CSP) to help prevent [cross-site scripting (XSS)](https://developer.mozilla.org/en-US/docs/Web/Security/Types_of_attacks#cross-site_scripting_xss) attacks.

This plugin deploys an edge function that adds a response header and transforms the HTML response body to contain a unique nonce on every request, along with an optional function to log CSP violations.

Scripts that do not contain a matching `nonce` attribute, or that were not created from a trusted script (see [strict-dynamic](https://content-security-policy.com/strict-dynamic/)), will not be allowed to run.

You can use this plugin whether or not your site already has a CSP in place. If your site already has a CSP, the nonce will merge with your existing directives.

## Installation

First, add the dependency:

```
npm i @netlify/plugin-csp-nonce
```

Then, include the plugin inside your `netlify.toml`:

```
# netlify.toml
[[plugins]]
  package = "@netlify/plugin-csp-nonce"
```

## Configuration options

Sample configuration:

```
# netlify.toml
[[plugins]]
  package =…
