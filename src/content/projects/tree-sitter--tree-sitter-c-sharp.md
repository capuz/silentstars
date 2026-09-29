---
repo: "tree-sitter/tree-sitter-c-sharp"
name: "tree-sitter-c-sharp"
description: "C# Grammar for tree-sitter"
readmeQualityOk: true
url: "https://github.com/tree-sitter/tree-sitter-c-sharp"
language: "JavaScript"
languages: ["JavaScript", "C#"]
languagePcts: [45, 35]
topics: ["tree-sitter", "c-sharp", "parser"]
stars: 321
forks: 104
openIssues: 29
closedIssues: 131
watchers: 12
contributors: 43
recentReleases: 0
createdAt: "2016-11-15T20:26:16Z"
lastCommitAt: "2026-09-29T08:10:04Z"
lastReleaseAt: "2026-04-14T16:12:49Z"
status: "thriving"
tags: ["needs_contributors", "legacy_hero", "funded"]
healthScore: 73
undervaluedScore: 22
maintainers: ["tris203", "dependabot[bot]", "AlexLaroche"]
openGraphImageUrl: "https://opengraph.githubassets.com/bcb032281e4995dcd47b3f493a9abcad98cae1e629159aa368f08185a9987f35/tree-sitter/tree-sitter-c-sharp"
fundingLinks: ["GITHUB:https://github.com/tree-sitter", "OPEN_COLLECTIVE:https://opencollective.com/tree-sitter", "KO_FI:https://ko-fi.com/amaanq"]
discussionCount: 0
---

# tree-sitter-c-sharp

C# grammar for [tree-sitter](https://github.com/tree-sitter/tree-sitter) based upon the Roslyn grammar with changes in order to:

- Deal with differences between the parsing technologies
- Work around some bugs in that grammar
- Handle `#if`, `#else`, `#elif`, `#endif` blocks
- Support syntax highlighting/parsing of fragments
- Simplify the output tree
- Reduce parser state count and complexity
- Be in-line with tree-sitter's convention where applicable

### Status

Comprehensive supports C# 1 through 14.0 with the following exceptions:

- [ ] `async`, `var` and `await` cannot be used as identifiers everywhere they are valid
- [ ] File-based apps preprocessor directives (`#:property`, `#:package`, `#:sdk`, `#:project`) are not yet recognized

### References

- [Official C# 8 Draft Language Spec](https://github.com/dotnet/csharpstandard/tree/draft-v8/standard) provides chapters that formally define the language grammar.
- [Roslyn C# language grammar export](https://github.com/dotnet/roslyn/blob/master/src/Compilers/CSharp/Portable/Generated/CSharp.Generated.g4)
- [SharpLab](https://sharplab.io) (web-based syntax tree playground based on Roslyn)

[ci]:…
