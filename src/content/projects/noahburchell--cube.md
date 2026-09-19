---
repo: "noahburchell/cube"
name: "cube"
description: "spinning cube (and platonic solids) in the terminal"
readmeQualityOk: true
url: "https://github.com/noahburchell/cube"
language: "C"
languages: ["C"]
languagePcts: [85]
stars: 8
forks: 0
openIssues: 0
closedIssues: 0
watchers: 4
contributors: 1
recentReleases: 0
createdAt: "2026-08-16T12:42:45Z"
lastCommitAt: "2026-09-19T01:17:23Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 78
undervaluedScore: 36
maintainers: ["noahburchell"]
openGraphImageUrl: "https://opengraph.githubassets.com/5d52dd439ed58d6d4206d0928d8bffd6f3501097a5cdfe26b46ad66d55bb2ac8/noahburchell/cube"
---

# cube 
### spinning cube (and the other platonic solids)
### get it: [gentoo](#if-youre-on-gentoo) | [nix](#if-you-have-nix) | [brew](#if-you-have-brew) | [source](#if-youre-on-something-else-apart-from-windows)

demo: https://nburch.org

### usage:
```sh
usage: cube [option]

options:
  -h, --help          show this help

shapes:
  -c, --cube          (default)
  -t, --tetrahedron
  -o, --octahedron
  -d, --dodecahedron
  -i, --icosahedron

q or esc quits
```

### if you're on gentoo:
```sh
emerge --ask app-eselect/eselect-repository
eselect repository add nburch git https://github.com/noahburchell/nburch-overlay.git
emaint sync --repo nburch
emerge --ask app-misc/cube
cube --help
```

### if you have brew:
```sh
# you need xcode 16.3+ (apple clang 17)
brew install noahburchell/cube/cube
```

### if you have nix:

run it without installing anything:
```sh
nix run github:noahburchell/cube
nix run github:noahburchell/cube -- --icosahedron
```

install it into your profile:
```sh
nix profile install github:noahburchell/cube
```

or add it to a flake:
```nix
{
  inputs.cube.url = "github:noahburchell/cube";

  # then, in your config:
  #   environment.systemPackages = […
