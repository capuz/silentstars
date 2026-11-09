---
repo: "bitbloxhub/skills-flake"
name: "skills-flake"
description: "Download and install agent skills declaratively with Nix"
readmeQualityOk: true
url: "https://github.com/bitbloxhub/skills-flake"
language: "Rust"
languages: ["Rust", "Nix"]
languagePcts: [65, 35]
stars: 16
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2026-05-20T00:12:52Z"
lastCommitAt: "2026-11-09T04:35:11Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 39
maintainers: ["github-actions[bot]", "bitbloxhub"]
openGraphImageUrl: "https://opengraph.githubassets.com/719dea0f347f055dcefe7346d4ed4597664fc26684516b922048420f75b0baa9/bitbloxhub/skills-flake"
---

# skills-flake

Nix flake that packages AI agent skills from many upstream repos and exposes them as installable paths.

## What you get

- `packages.<system>.skills`: nested attrset of fetched skills
- `packages.<system>.updater`: CLI that updates `skills-flake.lock.json` from `skill-list.kdl`
- `homeModules.default`: Home Manager module that installs selected skills into agent-specific skill directories

## Usage

### 1) Consume skills directly from flake output

Skill paths are exposed under:

`inputs.skills-flake.packages.${pkgs.stdenv.hostPlatform.system}.skills.<source>.<url-section>.<skill>`

`<url-section>` depends on source parser (for GitHub, it is usually `<owner>.<repo>`).

Example:
`inputs.skills-flake.packages.${pkgs.stdenv.hostPlatform.system}.skills.github.NousResearch.hermes-agent.apple.apple-notes`

### 2) Install skills with Home Manager

Add this flake to your inputs, then import its module and enable it:

```nix
{
  imports = [ inputs.skills-flake.homeModules.default ];

  home.skillsFlake = {
    enable = true;

    # Optional: explicit directories (relative to $HOME)
    # skillDirs = [ ".agents/skills" ];

    # Auto-install into enabled agent dirs via…
