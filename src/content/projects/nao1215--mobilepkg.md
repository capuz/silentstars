---
repo: "nao1215/mobilepkg"
name: "mobilepkg"
description: "Go library and CLI for inspecting mobile app packages (APK, XAPK, APKS, AAB, IPA), extracting metadata, signing info, diffs, and security findings in one step."
readmeQualityOk: true
url: "https://github.com/nao1215/mobilepkg"
language: "Go"
languages: ["Go"]
languagePcts: [98]
topics: ["apk", "cli", "golang", "ipa", "mobile-security", "package-analysis"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 5
createdAt: "2026-02-22T09:04:31Z"
lastCommitAt: "2026-11-19T05:02:43Z"
lastReleaseAt: "2026-11-09T04:53:45Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded", "release_machine"]
healthScore: 86
undervaluedScore: 64
maintainers: ["nao1215", "github-actions[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1163857803/7f5f3455-084a-4453-8666-a0a8e58c4c7c"
fundingLinks: ["GITHUB:https://github.com/nao1215"]
---

# mobilepkg

mobilepkg inspects APK, AAB, APKS, XAPK, and IPA files and emits package metadata plus security findings as JSON, Markdown, or RDJSONL. It is intended for release triage and CI checks.

It reads the package as a zip archive, parses the manifest and DEX bytecode in-process, and finishes in seconds. No Android SDK, Xcode, or device required. Runs on Linux, Windows, and macOS (Go 1.26.11+).

## Scope

- Manifest metadata, signing info, permissions, exported components, deep links, and network endpoints from Android packages (APK, XAPK, APKS, AAB).
- DEX bytecode scanning across base and split APKs for hardcoded secrets, cleartext HTTP URLs, dangerous API calls, and insecure WebView configuration.
- XAPK and APKS bundles read directly — no prior extraction needed.
- Markdown reports for `$GITHUB_STEP_SUMMARY` and pull request comments.
- Baseline diff for tracking permission, component, and version changes between releases.
- CI integration: `--fail-on warn` exits non-zero when findings exceed a severity threshold.
