---
repo: "JorisVanEijden/ReverseBak"
name: "ReverseBak"
description: "Reversing Betrayal at Krondor with Spice86"
readmeQualityOk: true
url: "https://github.com/JorisVanEijden/ReverseBak"
language: "C#"
languages: ["C#"]
languagePcts: [100]
stars: 8
forks: 0
openIssues: 0
closedIssues: 0
watchers: 4
contributors: 2
recentReleases: 0
createdAt: "2023-06-26T11:51:35Z"
lastCommitAt: "2026-09-03T08:13:33Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 63
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/cf26ea74e11ca745a79b6fbe1bba424115df893b9198aac7b82f91f9172b63d7/JorisVanEijden/ReverseBak"
---

# ReverseBak ReadMe

This project contains tooling used to investigate the old Betrayal at Krondor MS-DOS game.

It contains no BaK source code or data files.

Once enough information has been gathered, a new repo will be created to build a highly moddable version of the game in Unity. 

Other tooling used:
- [DOSBox-X](https://dosbox-x.com/)
- [Ghidra](https://ghidra-sre.org/)
- [IDA Freeware Version 5.0](https://www.scummvm.org/news/20180331/)
- [HxD](https://mh-nexus.de/en/hxd/)

### Prerequisites:
- .NET 8 SDK (https://dotnet.microsoft.com/en-us/download)
- Clone the repository locally
- Open the BetrayalAtKrondor.sln in your IDE of choice (I use [Rider](https://www.jetbrains.com/rider/))

## ResourceExtractor

This aims to convert original game data files to .NET objects, which can be saved as json or csv.

This is a development tool with no GUI, no documentation and no help.

### Setup
- Uncomment/add/change anything you like in the Program.cs

### Run
- I use the built-in run/debug option in Rider to run the project.
- You can also build it, find the executable and run it from the commandline or a script.

## BetrayalAtKrondor

### Project 
This is supposed to work in…
