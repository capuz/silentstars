---
repo: "virastack/password"
name: "password"
description: "Accessible password hook for React: visibility, NIST-style strength, confirmation, server validation and leaked password checks."
readmeQualityOk: true
url: "https://github.com/virastack/password"
homepage: "https://virastack.com/password/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [93]
topics: ["react", "a11y", "accessibility", "dx", "form-validation", "hook", "password-toggle", "virastack"]
stars: 14
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2025-06-06T10:28:01Z"
lastCommitAt: "2026-10-30T11:02:41Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 78
undervaluedScore: 54
maintainers: ["omergulcicek", "claude"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/997321367/628fc0dd-ab7c-4b22-a83c-573db87ee58b"
---

*Accessible password hook for React: visibility, strength, confirmation and server checks*

---

### [Read the full documentation →](https://virastack.com/password/)

## Features

- **Headless:** Props for your `<input>` and `<button>`; the bar, colours and text stay yours.
- **Radix parity:** Hides on submit for password managers, focus returns to the input after a click, controlled `visible`, Caps Lock, `autoComplete`.
- **Strength, NIST style:** `@virastack/password/strength` checks length (15–64), common passwords, repetition and personal info. No composition rules by default.
- **Same rules on the server:** `@virastack/password/server` runs the same policy in Server Actions.
- **Leaked password check:** `@virastack/password/pwned` asks Have I Been Pwned with k-anonymity. Optional.
- **Error keys, not messages:** `password.tooShort`, `password.mismatch`… Map them in your own i18n.
- **Zero dependencies:** ~2 KB min+brotli for the hook; the strength engine only ships when you pass a policy.

## Quick Start

```bash
npm install @virastack/password
```

Requires React and React DOM 18.2+ (React 19 supported). Upgrading from 1.0? Nothing breaks; see the [upgrade…
