---
repo: "ekmett/thc"
name: "thc"
description: "The Turbo Haskell Compiler"
readmeQualityOk: true
url: "https://github.com/ekmett/thc"
homepage: "http://ekmett.github.io/thc/"
language: "Java"
languages: ["Java", "Haskell"]
languagePcts: [66, 23]
topics: ["compiler", "graalvm", "haskell", "java", "jit", "kotlin", "truffle-framework"]
stars: 74
forks: 2
openIssues: 0
closedIssues: 6
watchers: 3
contributors: 3
recentReleases: 0
createdAt: "2015-09-11T08:04:43Z"
lastCommitAt: "2026-09-29T10:00:37Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 100
undervaluedScore: 52
maintainers: ["ekmett"]
openGraphImageUrl: "https://opengraph.githubassets.com/eb164d376c880644347b2b3d1698f221395860c14316f5bc92454eb3f640384f/ekmett/thc"
---

# thc

Haskell on Truffle/Graal.

I'm experimenting with using GHC as a frontend for a high performance Haskell
implementation on the JVM. GHC does the parsing, type checking, desugaring and
optimization. THC takes the resulting Core and gives Graal something it can
specialize.

GHC already knows quite a lot about compiling Haskell. The intention is to keep
that information around long enough to use it.

## Build and run

For native Windows, use the [PowerShell build and test guide](https://github.com/ekmett/thc/blob/HEAD/docs/windows.md).
It lists the required tools and current platform limits.

You need **GHC 9.14.1** (including `ghc-pkg` and `runghc`), **cabal-install 3.16**,
**GraalVM 25.3.4.1 / JDK 25**, and Python 3.12+. Put GHC on your `PATH` and
point `JAVA_HOME` at GraalVM. On macOS, use the bundle's `Contents/Home`
directory. The Gradle wrapper downloads its dependencies on the first build.
Linux x86_64 builds also require clang and the native GMP development headers
and library (for example, `libgmp-dev` on Debian/Ubuntu) for the
[checked limb provider](https://github.com/ekmett/thc/blob/HEAD/docs/gmp-limb-provider.md).

From the repository root:

```sh
git -c…
