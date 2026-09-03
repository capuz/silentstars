---
repo: "nais/doc"
name: "doc"
description: "nais developer documentation"
readmeQualityOk: true
url: "https://github.com/nais/doc"
homepage: "https://doc.nais.io"
language: "TypeScript"
languages: ["TypeScript", "Svelte"]
languagePcts: [54, 40]
topics: ["nais", "documentation"]
stars: 68
forks: 63
openIssues: 4
closedIssues: 63
watchers: 61
contributors: 122
recentReleases: 0
createdAt: "2017-09-07T16:37:15Z"
lastCommitAt: "2026-09-03T08:14:56Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 97
undervaluedScore: 55
maintainers: ["Kyrremann", "Starefossen", "tronghn"]
openGraphImageUrl: "https://opengraph.githubassets.com/75852bf8d98f29f0f931bd19486e3524eed2df7810bcc3755a9a2f9c37f5ac75/nais/doc"
discussionCount: 0
---

# Welcome to the Nais documentation

See the [Nais handbook](https://handbook.nais.io/technical/doc-guidelines/) for a more detailed explanation of the documentation structure and how to contribute.

## Tools for working with tenants

### Warning about features not available in test-nais

If a page should have a warning about not being available in test-nais, add the following near the top of the page:

```markdown
<<not_in_test_nais("Name of feature")>>
```

### Exclude a full page from one or more tenants documentation

Add the following to the frontmatter of the page:

```yaml
conditional: [not-test-nais, not-nav]
```

### Include a page only for one or more tenants

Add the following to the frontmatter of the page:

```yaml
conditional: [tenant, nav, ssb]
              ^^^^^^--- the keyword "tenant" is required to exclude all not mentioned
```

## Copilot Agents

Four agents handle documentation tasks:

```
@research-agent → @technical-writer → @plain-language-en → @docs-qa
```

- **`@research-agent`** — Investigates Nais source repos via GitHub MCP. Read-only.
- **`@technical-writer`** — Writes/edits docs following repo conventions (Diataxis, mkdocs, Jinja macros).
-…
