---
repo: "margelo/typescript-art"
name: "typescript-art"
description: "Compile a restricted TypeScript subset to JVM bytecode and Android ART, with direct managed Android calls."
readmeQualityOk: true
url: "https://github.com/margelo/typescript-art"
homepage: "https://typescript-native.vercel.app"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [69]
topics: ["android", "art", "bytecode", "compiler", "dex", "javascript", "js", "jvm", "ts", "typescript"]
stars: 22
forks: 0
openIssues: 271
closedIssues: 217
watchers: 0
contributors: 8
recentReleases: 3
createdAt: "2026-11-09T18:20:38Z"
lastCommitAt: "2026-11-13T11:26:27Z"
lastReleaseAt: "2026-11-11T12:21:46Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 88
undervaluedScore: 46
maintainers: ["mrousavy", "mrousavy-agent"]
openGraphImageUrl: "https://opengraph.githubassets.com/726101c80f63e8da75212fcd5d5f8b9388d1e1204ab7b504a19df94b7f91c361/margelo/typescript-art"
---

# TypeScript ART

TypeScript ART compiles a typed subset of TypeScript into Java source. On Android, AGP compiles that source to JVM bytecode and DEX. A TypeScript Activity can subclass `android.app.Activity`, hold state in primitive fields and install an Android click listener.

```ts
import { Button, TextView } from "android.widget"

export function connect(button: Button, label: TextView): void {
  let count: int = 0
  button.setOnClickListener(() => {
    count++
    label.setText("Count: " + count)
  })
}
```

The Gradle plugin reads Android and dependency classes from the variant classpath. Put sources in `src/main/typescript` and import other TypeScript modules by relative path. The generated class for a top-level TypeScript class has its declared name and can be referenced from a manifest, Kotlin or Java.

[TypeScript Native language reference](https://typescript-native.vercel.app/docs) · [Playground](https://typescript-native.vercel.app/playground) · [Language and project file](https://github.com/margelo/typescript-art/blob/HEAD/docs/language.md) · [Gradle setup](https://github.com/margelo/typescript-art/blob/HEAD/gradle-plugin/README.md) · [Counter…
