---
repo: "jeduden/mdsmith"
name: "mdsmith"
description: "fast, auto-fixing Markdown linter and formatter. Checks style, readability, structure, and cross-file integrity."
url: "https://github.com/jeduden/mdsmith"
homepage: "https://mdsmith.dev/"
language: "Go"
languages: ["Go"]
languagePcts: [95]
topics: ["golang", "linter", "markdown", "ai-generated-code", "ai-generated-content", "formatter", "go", "readme", "specification", "style"]
stars: 8
forks: 1
openIssues: 2
closedIssues: 26
watchers: 0
contributors: 3
recentReleases: 5
createdAt: "2026-02-08T21:03:38Z"
lastCommitAt: "2026-06-27T06:18:21Z"
lastReleaseAt: "2026-04-30T22:31:06Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 98
undervaluedScore: 65
maintainers: ["claude", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/d02a7825f96cd08ef862447f8abe594f6d40ce75deb9ebed8f820eff2b9c9bd8/jeduden/mdsmith"
---

<picture>
<source media="(prefers-color-scheme: dark)" srcset="website/static/img/logo-lockup-inverse.svg">
</picture>
</p>

Mark*down*, smithed.

<?include
file: docs/brand/messaging.md
extract: eyebrow.text
?>
Markdown as a single source of truth
<?/include?>

<?include
file: docs/brand/messaging.md
extract: tagline.text
?>
Write content; mdsmith keeps your Markdown neat and consistent — fast enough to stay out of your way. Auto-fix on save, instant navigation, cross-file integrity, and generated sections that keep a single source of truth in sync across files and pipelines.
<?/include?>

One static Go binary checks this whole repository in well under a
second. That is an order of magnitude faster than Node
markdownlint. It does more per file than the Rust linters. The
figures are re-measured on every merge and refreshed each release.
See the [latest cross-tool benchmark][bench-live] for the current
per-tool ratios on both corpora.

src="https://raw.githubusercontent.com/jeduden/mdsmith/assets/assets/demo.gif">
</p>

<?include
file: docs/features/index.md
strip-frontmatter: "true"
heading-level: "2"
?>
## Why mdsmith

mdsmith is a Markdown linter and formatter written in Go. It…
