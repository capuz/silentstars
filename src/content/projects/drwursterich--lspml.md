---
repo: "DrWursterich/lspml"
name: "lspml"
description: "a simple language server for spml (the sitepark markup language)"
readmeQualityOk: true
url: "https://github.com/DrWursterich/lspml"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
stars: 7
forks: 2
openIssues: 0
closedIssues: 2
watchers: 3
contributors: 4
recentReleases: 0
createdAt: "2024-01-07T23:34:32Z"
lastCommitAt: "2026-11-07T16:12:06Z"
lastReleaseAt: "2026-01-11T14:40:25Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 79
undervaluedScore: 46
maintainers: ["DrWursterich", "Schleuse", "jans-code"]
openGraphImageUrl: "https://opengraph.githubassets.com/072626dd8d7834538ab7a0969b442c071fe3c2d90ec4e7a953feb94c9eeb6a83/DrWursterich/lspml"
---

# lspml

A work-in-progress language server for the sitepark markup language (spml).

## features

- go to definition for variables and `<sp:include>` tag `uri` attributes
- hover for documentation of
    - most tags
    - most attributes
    - global functions in spel attribute values
- diagnostics on:
    - syntax errors
    - misplaced, unclosed and deprecated tags
    - duplicate, required and deprecated attributes / tag-bodies
    - nonexistent files in `<sp:include>` and similar tags
    - sitepark expression language (spel):
        - syntax errors
        - nonexistent global functions
        - incorrect argument counts for global functions
- completion for:
    - tags
    - the last unclosed tag
    - attributes
    - attribute values that either:
        - have a fixed set of possible values
        - point to another spml file
        - refer to an spml module
- semantic highlighting for attribute values that expect:
    - conditions
    - expressions
    - identifiers
    - objects
    - regular expressions
    - text
    - uris
    - to be comparable (for `<sp:if>` and `<sp:elseif>` `eq`/`gt`/...)
- code actions to:
    - generate a default file header
    - fix…
