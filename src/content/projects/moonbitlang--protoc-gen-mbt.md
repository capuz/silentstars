---
repo: "moonbitlang/protoc-gen-mbt"
name: "protoc-gen-mbt"
description: "Protobuf generator for MoonBit programming language"
readmeQualityOk: true
url: "https://github.com/moonbitlang/protoc-gen-mbt"
language: "MoonBit"
languages: ["MoonBit"]
languagePcts: [94]
stars: 13
forks: 6
openIssues: 0
closedIssues: 16
watchers: 2
contributors: 9
recentReleases: 0
createdAt: "2024-10-29T03:30:13Z"
lastCommitAt: "2026-09-11T08:14:19Z"
lastReleaseAt: "2026-06-03T03:39:17Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 88
undervaluedScore: 43
maintainers: ["peter-jerry-ye", "myfreess", "tonyfettes"]
openGraphImageUrl: "https://opengraph.githubassets.com/864694ed25272f32a22b049a1804238ecd8f6c66b9d77f8913d51f63595f5113/moonbitlang/protoc-gen-mbt"
---

# MoonBit protobuf generator

This is the protobuf compiler for MoonBit, consisting of the compiler plugin written in MoonBit and the runtime library.

The compiler and the runtime library are not published yet. To use this protobuf generator:

1. Clone this [repository](https://github.com/moonbitlang/protoc-gen-mbt)
2. Build the compiler plugin with `moon build -C cli`
3. Generate the MoonBit output. You can either add the compiled plugin to your `PATH`, or specify it with the `--plugin` option:
   - Add to PATH: `PATH=".:$PATH" protoc --mbt_out=. --mbt_opt=paths=source_relative,project_name=gen-proto3 src/test/reader/proto3.proto`
   - Or use --plugin: `protoc --plugin=protoc-gen-mbt=protoc-gen-mbt.exe --mbt_out=. --mbt_opt=paths=source_relative,project_name=gen-proto3 src/test/reader/proto3.proto`
   Note: `project_name` must match the output directory name (e.g., `gen-proto3`), and the directory must exist.
4. Use the generated MoonBit file given that it imports the runtime library with the alias `lib`.

This will be simplified in the future development.

## Known Issues

- Deprecated group is not supported
- Extensions and custom options are ignored

## Supported

See…
