---
repo: "cubk1/b-launcher"
name: "b-launcher"
description: "轻量 Minecraft 启动器"
readmeQualityOk: true
url: "https://github.com/cubk1/b-launcher"
homepage: "https://b.cubk.cn"
language: "C++"
languages: ["C++"]
languagePcts: [99]
stars: 69
forks: 8
openIssues: 3
closedIssues: 23
watchers: 1
contributors: 8
recentReleases: 5
createdAt: "2026-10-28T03:09:55Z"
lastCommitAt: "2026-11-09T11:59:05Z"
lastReleaseAt: "2026-11-08T14:38:44Z"
status: "newborn"
tags: ["hidden_gem", "release_machine"]
healthScore: 97
undervaluedScore: 42
maintainers: ["cubk1", "MiRinChan", "Loyisa"]
openGraphImageUrl: "https://opengraph.githubassets.com/b69976b142f20d0746b888c6fb442056a9407e9245c7b447f6dcb213398399bd/cubk1/b-launcher"
---

## B Launcher™

轻量 Minecraft 启动器，使用纯C++开发

QQ交流群：858714745

## 构建与安装

```bash
pip install fonttools
scoop install upx

cmake -S . -B build -G "Visual Studio 17 2022" -A x64
cmake --build build --config Release
cmake --build build --config MinSizeRel

# For Linux distribution packages, use the shared libraries of the system and turn off the update check:
cmake -S . -B build -G Ninja -DBLB_SYSTEM_LIBS=ON -DBLB_UPDATE_CHECK=OFF

# For NixOS:
nix run github:cubk1/b-launcher
# or add the github:cubk1/b-launcher flake and put b-launcher.packages.${system}.default in your package list.
# The launcher finds Java in JAVA_HOME and PATH, for example environment.systemPackages = [ pkgs.jdk21 ].
# To give more JDKs to the launcher, use .override { jdks = [ pkgs.jdk8 pkgs.jdk21 ]; } on the package.
# additionalLibs and additionalPrograms in .override add libraries and programs for the game.
# The launcher uses the Java version that the game needs. For the same version, it uses jdks first,
# then JAVA_HOME, then PATH.
# With programs.nix-ld.enable = true, the launcher can also download Java.
# Feature switches in .override:
#   textToSpeechSupport (default true): flite for the narrator of the…
