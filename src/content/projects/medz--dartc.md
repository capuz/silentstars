---
repo: "medz/dartc"
name: "dartc"
description: "A native Dart compiler written in Dart."
readmeQualityOk: true
url: "https://github.com/medz/dartc"
language: "Dart"
languages: ["Dart"]
languagePcts: [100]
stars: 21
forks: 0
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 2
recentReleases: 4
createdAt: "2026-10-26T02:23:45Z"
lastCommitAt: "2026-10-31T07:46:02Z"
lastReleaseAt: "2026-10-30T17:17:21Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 43
maintainers: ["medz"]
openGraphImageUrl: "https://opengraph.githubassets.com/b098c66ce163efcf65dc6ee9c2e6697c9f30edbbca6adc7d2b905c7db22837f9/medz/dartc"
---

# dartc

A native Dart compiler written in Dart.

Compile Dart programs into standalone executables for macOS and Linux. Generated programs run without an installed Dart SDK.

dartc is an early preview. Complete Dart language and standard-library compatibility is the goal; see [language support](https://github.com/medz/dartc/blob/main/specs/README.md) for current capabilities and gaps. Published releases may differ from the source tree.

## Installation

### Native compiler

Download the archive for your platform from [GitHub Releases](https://github.com/medz/dartc/releases). Extract it and add its `bin` directory to your `PATH`.

See the release notes for available platforms, checksums and upgrade instructions.

### Dart package

With the [Dart SDK](https://dart.dev/get-dart) installed:

```sh
dart pub global activate dartc
```

## Quick start

Save this as `hello.dart`:

```dart
void main() {
  print('Hello, world!');
}
```

Compile and run it:

```sh
dartc hello.dart -o hello
./hello
```

For a Dart project, resolve its dependencies before compiling the entry point:

```sh
dart pub get
dartc bin/main.dart -o app
```

Use `dartc --help` for command options. More examples are in…
