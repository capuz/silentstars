---
repo: "rockorager/ziglint"
name: "ziglint"
description: "opinionated linting to keep your agent in check"
readmeQualityOk: true
url: "https://github.com/rockorager/ziglint"
language: "Zig"
languages: ["Zig"]
languagePcts: [100]
stars: 58
forks: 9
openIssues: 6
closedIssues: 10
watchers: 2
contributors: 5
recentReleases: 0
createdAt: "2026-01-22T22:09:31Z"
lastCommitAt: "2026-10-07T10:30:15Z"
lastReleaseAt: "2026-02-08T11:00:28Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 82
undervaluedScore: 38
maintainers: ["rockorager", "mattrobenolt", "ampagent"]
openGraphImageUrl: "https://opengraph.githubassets.com/ff03dc8f2d2e1f2725bec3c8a78e5e978215352fa247872d7b991de2640b1928/rockorager/ziglint"
---

# ziglint

A linter for Zig source code.

## Usage

```
ziglint [options] [paths...]
```

When run without arguments, ziglint looks for a `.ziglint.zon` config file and uses the paths specified there, or defaults to the current directory.

Directories are scanned recursively for `.zig` files.

### Options

- `--zig-lib-path <path>` - Override the path to the Zig standard library (auto-detected from `zig env` if not specified)
- `--only <rule>` - Lint only the specified rule (e.g., `Z001`). Can be repeated.
- `--ignore <rule>` - Ignore a rule (e.g., `Z001`). Can be repeated.
- `-h, --help` - Show help message

## Rules

| Code | Description |
|------|-------------|
| Z001 | Function names should be camelCase |
| Z002 | Avoid initialized variables that look like named discards |
| Z003 | Parse error with parser explanation |
| Z004 | Prefer type annotations with anonymous struct initializers |
| Z005 | Type function names should be PascalCase |
| Z006 | Variable names should be snake_case |
| Z007 | Duplicate import |
| Z009 | Files with top-level fields should be PascalCase |
| Z010 | Redundant type specifier; prefer `.value` over explicit type |
| Z011 | Deprecated method call |
|…
