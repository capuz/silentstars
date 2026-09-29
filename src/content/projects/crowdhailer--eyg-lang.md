---
repo: "CrowdHailer/eyg-lang"
name: "eyg-lang"
description: "Building better languages and tools; for some measure of better."
readmeQualityOk: true
url: "https://github.com/CrowdHailer/eyg-lang"
homepage: "https://eyg.run/"
language: "Gleam"
languages: ["Gleam"]
languagePcts: [96]
topics: ["functional-programming", "gleam", "programming"]
stars: 372
forks: 15
openIssues: 0
closedIssues: 3
watchers: 5
contributors: 3
recentReleases: 5
createdAt: "2021-07-15T11:03:40Z"
lastCommitAt: "2026-09-29T08:11:10Z"
lastReleaseAt: "2026-09-19T12:37:58Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "release_machine"]
healthScore: 99
undervaluedScore: 43
maintainers: ["CrowdHailer"]
openGraphImageUrl: "https://opengraph.githubassets.com/28ef608a07cb0c43b90ae86ba6e414ed566b18249549faded501cd36583c276c/CrowdHailer/eyg-lang"
---

# Eat Your Greens (EYG)

EYG is a scripting language with structural typing, managed effects and immutable dependencies.

Install the CLI with:

```sh
curl -fsSL https://eyg.run/install | bash
```

A hello world example script.

```eyg
#!/usr/bin/env eyg
{
  script: (_) -> {
    let _ = perform StandardOut("Hello, World!\n")
    0
  }
}
```

Update permissions `chmod +x entry.eyg`.
Then run the script directly `./entry.eyg`.

## Scripts and modules

Any file containing valid source code is a module.
The file containing just `5` is a module.

An EYG script is a function from the list of script arguments to a returned exit code.
The type of a script function is `(List(String)) -> Integer`

A valid script module has a script function as a field of a record.
The type of a script file/module is `{script: (List(String)) -> Int, ..}`.

Run a script using `eyg script path/to/script`.

### Entryfiles

An entryfile is the first module run.
It can be a valid script file and, because records are extensible, have other fields.
For example a module with a "shell" field is a valid shell config.

Top-level modules may be executable and have a shebang (`#!/usr/bin/env eyg`).

The example below…
