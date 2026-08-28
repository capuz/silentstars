---
repo: "zed-extensions/dart"
name: "dart"
description: "Dart support"
readmeQualityOk: true
url: "https://github.com/zed-extensions/dart"
language: "Rust"
languages: ["Rust", "Tree-sitter Query"]
languagePcts: [61, 39]
stars: 95
forks: 43
openIssues: 14
closedIssues: 22
watchers: 5
contributors: 29
recentReleases: 0
createdAt: "2024-10-30T14:35:12Z"
lastCommitAt: "2026-08-28T14:31:48Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 81
undervaluedScore: 34
maintainers: ["zed-zippy[bot]", "kevmoo", "MrSubidubi"]
openGraphImageUrl: "https://opengraph.githubassets.com/c3b31d8665289bba70b8efaf02e56ee8a1141626e0f810f836592bb6d7a46806/zed-extensions/dart"
---

# Zed Dart

A [Dart](https://dart.dev/) extension for [Zed](https://zed.dev).

## Recommended Configuration

To make the most of the Dart LSP in Zed, you can configure it to automatically organize imports and apply fixes on format.

### Settings (`settings.json`)

Add the following to your `settings.json` to enable features like organizing imports on save:

```json
{
  "languages": {
    "Dart": {
      "format_on_save": "on",
      "code_actions_on_format": {
        "source.organizeImports": true,
        "source.fixAll": true
      }
    }
  }
}
```

## Documentation

See:
- [Zed Dart Language Docs](https://zed.dev/docs/languages/dart)
- [Dart LSP Support Docs](https://github.com/dart-lang/sdk/blob/main/pkg/analysis_server/tool/lsp_spec/README.md)

## Development

To develop this extension, see the [Developing Extensions](https://zed.dev/docs/extensions/developing-extensions) section of the Zed docs.
