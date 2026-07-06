---
repo: "elkowar/yolk"
name: "yolk"
description: "Templated dotfile management without template files!"
readmeQualityOk: true
url: "https://github.com/elkowar/yolk"
homepage: "https://elkowar.github.io/yolk"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
topics: ["config", "configuration", "dotfiles", "rust", "rust-lang", "unixporn", "rhai"]
stars: 436
forks: 11
openIssues: 7
closedIssues: 17
watchers: 2
contributors: 4
recentReleases: 0
createdAt: "2024-11-18T09:33:48Z"
lastCommitAt: "2026-07-05T17:02:29Z"
lastReleaseAt: "2024-12-16T18:46:52Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 80
undervaluedScore: 26
maintainers: ["elkowar", "kunzaatko"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/890268972/1415e246-f5b8-46a6-b9e6-9b95b4fcf533"
fundingLinks: ["GITHUB:https://github.com/elkowar", "KO_FI:https://ko-fi.com/elkowar"]
discussionCount: 2
---

# Yolk – Painfree Templated Dotfile Management

</a>

</div>

Yolk is a cross platform dotfile management tool with a unique spin on templating,
sitting somewhere in between [GNU Stow](https://www.gnu.org/software/stow/) and [chezmoi](https://www.chezmoi.io/).

Have a look at our [documentation](https://elkowar.github.io/yolk/book) for more information on how to get started!

## The Concept

Yolk allows you to use simple templates in your configuration files without having to worry about keeping a separate template file and the generated config file in sync.
This is achieved through a design that allows all templates to be included inside comments in your actual configuration file.

Let's demonstrate:

```toml
# Use a different font on one host
# {% if SYSTEM.hostname == "epic-desktop" %}
font="Fira Code"
# {% else %}
#<yolk> font="Iosevka"
# {% end %}

[colors]
# Load your colors from your yolk configuration
background="#282828" # {< replace_color(data.colors.background) >}
foreground="#ebdbb2" # {< replace_color(data.colors.foreground) >}
```

Yolk will now be able to run the corresponding modifications on the file itself, allowing you to set
templated values while keeping the…
