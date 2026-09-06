---
repo: "justsml/dans-blog"
name: "dans-blog"
description: "the new danlevy.net"
readmeQualityOk: true
url: "https://github.com/justsml/dans-blog"
homepage: "https://danlevy.net"
language: "MDX"
languages: ["MDX"]
languagePcts: [96]
stars: 16
forks: 3
openIssues: 14
closedIssues: 2
watchers: 0
contributors: 14
recentReleases: 0
createdAt: "2018-09-25T21:44:11Z"
lastCommitAt: "2026-09-06T08:03:23Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 77
undervaluedScore: 61
maintainers: ["justsml"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/150332835/87f3ceee-93fe-4b36-a028-5460f08264c4"
---

# DanLevy.net

## Article Translations

Article i18n uses locale subfolders, English slugs, AI SDK/OpenRouter candidate models, and full Git provenance for every candidate, rejection, judge pass, and final polish. Start with [docs/translations.md](https://github.com/justsml/dans-blog/blob/HEAD/docs/translations.md).

Common TUI commands:

```sh
bun run i18n:candidates:tui -- \
  --quiz-concurrency 24 \
  --task-concurrency 12 \
  --models openrouter/openai/gpt-oss-120b:nitro,openrouter/qwen/qwen3-32b:nitro,deepseek/deepseek-v4-flash,qwen/qwen3.6-plus,qwen/qwen3.6-35b-a3b,qwen/qwen3.5-9b
bun run i18n:candidates:tui -- --judge
```

For translation batches, prefer high parallelism unless you are deliberately debugging a single item: `--quiz-concurrency 24 --task-concurrency 12`.

Manual translation commands:

```sh
bun run i18n:translate:candidates -- --slug the-last-to-think --locale es
bun run i18n:judge -- --slug the-last-to-think --locale es --model openrouter/openai/gpt-5.4-mini
bun run i18n:validate -- --slug the-last-to-think --locale es
bun run i18n:report:models
```

Candidate and judge AI SDK calls default to 240 second timeouts; use `--timeout-seconds 240` or higher for…
