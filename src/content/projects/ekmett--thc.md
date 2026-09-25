---
repo: "ekmett/thc"
name: "thc"
description: "The Turbo Haskell Compiler"
readmeQualityOk: true
url: "https://github.com/ekmett/thc"
homepage: "http://ekmett.github.io/thc/"
language: "Kotlin"
languages: ["Kotlin", "Python", "Haskell"]
languagePcts: [42, 28, 23]
topics: ["compiler", "graalvm", "haskell", "java", "jit", "kotlin", "truffle-framework"]
stars: 44
forks: 2
openIssues: 3
closedIssues: 2
watchers: 5
contributors: 3
recentReleases: 0
createdAt: "2015-09-11T08:04:43Z"
lastCommitAt: "2026-09-25T09:02:31Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 88
undervaluedScore: 50
maintainers: ["ekmett"]
openGraphImageUrl: "https://opengraph.githubassets.com/eef9c523808bf5c2aa155f09dba9232f93a3da2421adf1ba6dfb0872e555330e/ekmett/thc"
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

You need **GHC 9.14.1** (including `ghc-pkg` and `runghc`), **cabal-install 3.16**,
**GraalVM 25.3.4.1 / JDK 25**, and Python 3.12+. Put GHC on your `PATH` and
point `JAVA_HOME` at GraalVM. On macOS, use the bundle's `Contents/Home`
directory. The Gradle wrapper downloads its dependencies on the first build.
Linux x86_64 builds also require clang and the native GMP development headers
and library (for example, `libgmp-dev` on Debian/Ubuntu) for the checked limb
provider. This native transport does not yet admit original GHC GMP FFI calls.

From the repository root:

```sh
export JAVA_HOME=/path/to/graalvm
export PATH="$JAVA_HOME/bin:$PATH"

make
```

This runs `./gradlew installDist` for the JVM runtime and `cabal build`
for the Haskell library and driver. The…
