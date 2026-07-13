---
repo: "jcputney/mjml-java"
name: "mjml-java"
description: "mjml-java: Zero-dependency Java renderer for MJML, enabling responsive email template creation. Open-source with MIT License."
readmeQualityOk: true
url: "https://github.com/jcputney/mjml-java"
homepage: "https://jcputney.github.io/mjml-java/"
language: "HTML"
languages: ["HTML", "Java"]
languagePcts: [54, 46]
topics: ["email", "email-templates", "java", "mjml", "email-framework", "email-rendering", "email-template", "html-email", "java-17", "jpms"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-02-10T02:06:12Z"
lastCommitAt: "2026-07-13T06:38:06Z"
lastReleaseAt: "2026-03-30T18:43:26Z"
status: "thriving"
tags: ["hidden_gem", "funded"]
healthScore: 84
undervaluedScore: 51
maintainers: ["jcputney", "dependabot[bot]", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/3137fbec0118b4cf11b238baeb145c3c5c541b6b8efd442ec5736981f1a452e2/jcputney/mjml-java"
fundingLinks: ["BUY_ME_A_COFFEE:https://buymeacoffee.com/jcputney", "THANKS_DEV:https://thanks.dev/u/gh/jcputney"]
discussionCount: 0
---

# mjml-java

**Pure Java MJML-to-HTML renderer -- zero dependencies, all 31 MJML components, JPMS-ready.**

---

> [!TIP]
> **Working on multi-tenant SaaS or AI on AWS?** I do one-week, fixed-price code audits. [audits.putney.io →](https://audits.putney.io)

---

mjml-java converts [MJML](https://mjml.io/) email markup into responsive HTML entirely
in Java. No Node.js runtime, no native binaries, no external libraries -- just add the
JAR and call `MjmlRenderer.render()`.

## Features

- **Zero runtime dependencies** -- only the JDK standard library
- **All 31 MJML components** -- full parity with MJML 4
- **Thread-safe static API** -- safe for concurrent use in web servers
- **JPMS module** -- `dev.jcputney.mjml`
- **Standalone CSS inliner** -- `CssInliner.inline()` works on any HTML
- **`mj-include` support** -- with pluggable `IncludeResolver`
- **Custom components** -- register your own tags via `ComponentFactory`
- **Security defaults** -- output sanitization, input size limits, nesting depth limits

## Modules

| Module | Artifact ID | Description |
|---|---|---|
| **Core** | `mjml-java-core` | MJML renderer, all 31 components, CSS inliner. Zero external dependencies. |
|…
