---
repo: "PostHog/wizard"
name: "wizard"
description: "Quickly add PostHog to your project using the setup wizard ✨"
readmeQualityOk: true
url: "https://github.com/PostHog/wizard"
homepage: "https://posthog.com/wizard"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
topics: ["onboarding", "posthog", "wizard"]
stars: 186
forks: 43
openIssues: 122
closedIssues: 90
watchers: 7
contributors: 61
recentReleases: 0
createdAt: "2025-02-25T13:38:13Z"
lastCommitAt: "2026-08-18T04:07:51Z"
lastReleaseAt: "2025-07-03T17:15:56Z"
status: "thriving"
tags: []
healthScore: 85
undervaluedScore: 40
maintainers: ["gewenyu99", "releaser-wizard[bot]", "Gilbert09"]
openGraphImageUrl: "https://opengraph.githubassets.com/a4676ff3a397bcd5130628e2af4c7b35cd92c577bf91de1214dc0292140ad4fa/PostHog/wizard"
---

</p>

> have any feedback, please drop an email to **[wizard@posthog.com](mailto:wizard@posthog.com)**.

<h1>PostHog wizard ✨</h1>

The PostHog wizard helps you quickly add PostHog to your project using AI.

# Usage

To use the wizard, you can run it directly using:

```bash
npx @posthog/wizard
```

Currently the wizard can be used for over 16+ frameworks for frontend, backend, and mobile applications. If you have other integrations you would like the wizard to
support, please open a [GitHub issue](https://github.com/posthog/wizard/issues)!

Visit our [docs](https://posthog.com/docs/ai-engineering/ai-wizard) to learn more. 

## Privacy & data usage

The wizard uses **Anthropic Claude** (via PostHog's LLM gateway) to read your project's source files and integrate PostHog. A few things worth knowing up front:

- **Source files** are sent to Anthropic as part of the agent's context.
- **`.env*` files and secrets** stay on your machine. The wizard's security scanner blocks anything it identifies as a secret from being read by the agent.
- **Telemetry** (run metadata — phase, task list, planned events) is sent to PostHog by default. Pass `--no-telemetry` (or set…
