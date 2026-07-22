---
repo: "objectionary/eoc"
name: "eoc"
description: "Command-line toolkit for parsing, compiling, transpiling, optimizing, linking, dataizing, and running EOLANG programs"
readmeQualityOk: true
url: "https://github.com/objectionary/eoc"
homepage: "https://www.npmjs.com/package/eolang"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [95]
topics: ["command-line", "eolang", "toolkit", "javascript", "java", "maven"]
stars: 35
forks: 52
openIssues: 10
closedIssues: 198
watchers: 4
contributors: 50
recentReleases: 0
createdAt: "2022-05-06T11:03:50Z"
lastCommitAt: "2026-07-22T06:09:18Z"
lastReleaseAt: "2022-06-27T17:04:29Z"
status: "thriving"
tags: ["needs_contributors", "fork_magnet"]
healthScore: 98
undervaluedScore: 70
maintainers: ["renovate[bot]", "rultor", "yegor256"]
openGraphImageUrl: "https://opengraph.githubassets.com/f60a386e80591d2f35cf09e53223bf092f773f22137c1b1683fca402e378c362/objectionary/eoc"
---

# EOLANG Command Line Tool-Kit

This is a command-line tool-kit for [EO](https://www.eolang.org)
programming languages, allowing you to compile EO programs, test, dataize,
and check for errors.

First, you install [npm][npm-install] and [Java SE][java-se].

Then, you install [eolang][npm] package, using [npm][npm-install]:

```bash
npm install -g eolang@0.36.0
```

You can also use [Homebrew] (on macOS):

```bash
brew tap objectionary/eoc https://github.com/objectionary/eoc
brew install objectionary/eoc/eolang@0.36.0
```

Or install it via [Nix flakes](https://nixos.wiki/wiki/Flakes):

```bash
nix run github:objectionary/eoc
```

<details>

<summary>You can also include EOLANG in your own flake</summary>

```nix
{
  inputs = {
    eoc.url = "github:objectionary/eoc";
    nixpkgs.url = "github:nixos/nixpkgs/nixos-25.05";
  };

  outputs = { self, nixpkgs, eoc, ... }: {
    nixConfigurations.<hostname> = nixpkgs.lib.nixosSystem {
      modules = [
        {
          nixpkgs.config.packageOverrides = pkgs: {
            eoc = eoc.packages.${system}.default;
          };
        }
      ];
    }
  };
}
```

After that, select one of the methods for installing the package:

```nix…
