---
repo: "javanoo6/intellij-code-formatter"
name: "intellij-code-formatter"
description: "IntellijIdea's headless daemonized code formatter"
readmeQualityOk: true
url: "https://github.com/javanoo6/intellij-code-formatter"
language: "Java"
languages: ["Java", "Python"]
languagePcts: [75, 21]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 3
createdAt: "2026-04-29T19:58:50Z"
lastCommitAt: "2026-10-27T09:17:20Z"
lastReleaseAt: "2026-10-27T08:58:24Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 55
undervaluedScore: 21
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/f676fccc17b3f96051b138df07188429af0f24271342691271b752ada8a3d3e9/javanoo6/intellij-code-formatter"
---

# IntelliJ Headless Formatter

This repository builds a standalone formatter CLI that uses the IntelliJ Platform to:

- reformat code
- optimize imports
- rearrange members

It can format Java and other file types supported by the plugins bundled into the engine ZIP, including Markdown.

The final runnable artifact is:

- `formatter-cli/target/formatter-cli-full.jar`

It edits files in place.

Supported languages: Java, XML, JSON, Markdown, Python (`.py`, `.pyw`, `.pyi`),
YAML (`.yaml`, `.yml`), and Bash/shell scripts (`.sh`, `.bash`, or a shell shebang).
EditorConfig support is bundled for code style settings.

## Prerequisites

- JDK 21
- Maven
- Internet access for the first build

On macOS with Homebrew:

```bash
brew install openjdk@21 maven
export JAVA_HOME="$(brew --prefix openjdk@21)/libexec/openjdk.jdk/Contents/Home"
export PATH="$JAVA_HOME/bin:$PATH"
```

The launcher selects the bundled JNA native library for the JVM architecture
(`aarch64`/`arm64` or `amd64`) and enables the Java desktop module access needed
by IntelliJ on macOS. The same JAR is used on each platform.
macOS Apple Silicon was verified with JDK 21; Intel macOS and Linux were not
retested for this change.…
