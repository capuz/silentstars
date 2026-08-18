---
repo: "hedhyw/json-log-viewer"
name: "json-log-viewer"
description: "Interactive viewer for JSON logs."
readmeQualityOk: true
url: "https://github.com/hedhyw/json-log-viewer"
language: "Go"
languages: ["Go"]
languagePcts: [99]
topics: ["bubbletea", "go", "golang", "interactive", "json", "json-logging", "json-logs", "terminal", "viewer", "logs"]
stars: 232
forks: 14
openIssues: 10
closedIssues: 46
watchers: 2
contributors: 9
recentReleases: 0
createdAt: "2023-07-23T10:52:36Z"
lastCommitAt: "2026-08-18T04:08:08Z"
lastReleaseAt: "2023-11-05T10:57:09Z"
status: "thriving"
tags: ["needs_contributors"]
healthScore: 73
undervaluedScore: 22
maintainers: ["hedhyw", "sutr90", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/669762612/063c4bcc-65d2-4527-85ff-7b97e50176fb"
---

# JSON Log Viewer

An interactive tool for viewing and analyzing complex structured JSON logs.

## Installation

### Homebrew

```shell
brew install hedhyw/main/jlv
```

### Standalone Binary, DEB or RPM packages

https://github.com/hedhyw/json-log-viewer/releases/latest

## Quick start

```shell
# Open a log file.
jlv application.log

# Or read from stdin.
kubectl logs pod/my-pod -f | jlv
```

Press `?` inside the viewer to see all hotkeys, `F` to filter, `Enter` to
expand a log entry, and `Ctrl+C` to exit. See [usage](https://github.com/hedhyw/json-log-viewer/blob/HEAD/docs/usage.md) for
more examples.

## Documentation

- [Features](https://github.com/hedhyw/json-log-viewer/blob/HEAD/docs/features.md).
- [Install from source](https://github.com/hedhyw/json-log-viewer/blob/HEAD/docs/install-from-source.md).
- [Usage](https://github.com/hedhyw/json-log-viewer/blob/HEAD/docs/usage.md).
- [Customization](https://github.com/hedhyw/json-log-viewer/blob/HEAD/docs/customization.md).
- [Resources](https://github.com/hedhyw/json-log-viewer/blob/HEAD/docs/resources.md).
- [Contribution](https://github.com/hedhyw/json-log-viewer/blob/HEAD/docs/CONTRIBUTING).
- [MIT…
