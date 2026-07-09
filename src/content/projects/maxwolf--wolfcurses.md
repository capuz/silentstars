---
repo: "Maxwolf/WolfCurses"
name: "WolfCurses"
description: "Wolf curses is a console control library for .Net, enabling the construction of text user interface (TUI) applications. The name is a pun on the term \"cursor optimization\". It is a library of functions that manage an application's display on character-cell terminals (e.g., Windows Console, Linux/OS X Terminal)."
readmeQualityOk: true
url: "https://github.com/Maxwolf/WolfCurses"
homepage: "https://maxwolf.github.io/WolfCurses/"
language: "C#"
languages: ["C#"]
languagePcts: [100]
stars: 35
forks: 4
openIssues: 1
closedIssues: 0
watchers: 4
contributors: 2
recentReleases: 0
createdAt: "2015-12-31T12:22:53Z"
lastCommitAt: "2026-07-09T20:44:33Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 70
undervaluedScore: 25
maintainers: ["Maxwolf"]
openGraphImageUrl: "https://opengraph.githubassets.com/fa5bdfb237d0a336521838acc942a8a87e4e681205fd21b86dcdb97f30d1003c/Maxwolf/WolfCurses"
---

# Wolf Curses

Provides an abstraction of one or more windows that maps onto the console. Each window is represented by a character matrix. The programmer sets up each window to look as they want the display to look, and then tells wolf curses to update the screen. The library determines a minimal set of changes needed to update the display and then executes these using the terminal's specific capabilities and control sequences.

In short, this means that the programmer simply creates a character matrix of how the screen should look and lets wolf curses handle the work.

Contains example implementation of a console application using the Wolf curses library. A menu is displayed with a list of choices the user can make.

Fork this repository and use it as the base for your next application or just look at the code and cherry pick from it as you please.

## NuGet Package ##

To install Wolf Curses, run the following command in the [Package Manager Console](https://docs.nuget.org/docs/start-here/using-the-package-manager-console). If you would like to see the NuGet gallery page you can [find it here](https://www.nuget.org/packages/WolfCurses/).

```cmd
PM> Install-Package WolfCurses…
