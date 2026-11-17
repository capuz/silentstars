---
repo: "javy-fernandez/dotcraft"
name: "dotcraft"
description: "A lightweight native IDE for .NET and C#, inspired by JetBrains Rider: Roslyn code intelligence, build, run, tests, debugging with netcoredbg and Git. Built with Rust and egui for macOS, Windows and Linux."
readmeQualityOk: true
url: "https://github.com/javy-fernandez/dotcraft"
language: "Rust"
languages: ["Rust"]
languagePcts: [99]
topics: ["csharp", "dotnet", "egui", "ide", "macos", "netcoredbg", "roslyn", "rust", "windows", "linux"]
stars: 20
forks: 1
openIssues: 22
closedIssues: 112
watchers: 3
contributors: 3
recentReleases: 8
createdAt: "2026-10-25T00:36:08Z"
lastCommitAt: "2026-11-17T14:42:50Z"
lastReleaseAt: "2026-11-12T08:50:49Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 92
undervaluedScore: 48
maintainers: ["javy-fernandez", "RafaelMendes1407"]
openGraphImageUrl: "https://opengraph.githubassets.com/d4f518544edbee3289d2dce17f73c66ce9450f8684b9527cd6b542fd1cbaf295/javy-fernandez/dotcraft"
---

Solutions, Roslyn code intelligence, build, run, tests, debugging and Git in a fast desktop app built with Rust and egui.<br>
  macOS · Windows · Linux

DotCraft takes its layout and keyboard from JetBrains Rider's New UI — islands, tool window stripes, Search Everywhere, the Rider keymap — and runs as a single native binary that starts in a moment and stays responsive on large files. Screenshots are offscreen captures of the current source build on macOS with the sample solution in `tests/fixtures/Shop`.

## Highlights

| Edit | Build and debug | Navigate and review |
| --- | --- | --- |
| A custom editor with tree-sitter highlighting, folding, multi-caret editing and Roslyn semantic colors, completion, signature help, quick fixes, rename and inlay hints. | Build, run and test (xUnit, NUnit, MSTest) with the dotnet CLI; debug console and ASP.NET apps with netcoredbg; manage NuGet packages. | Search Everywhere, Find in Files, recent files and locations, an integrated terminal, and Git: changes, commit, branches, side-by-side diff, gutter marks and blame. |

### Code intelligence

DotCraft talks to the same C# language server as Visual Studio Code's C# extension…
