---
repo: "lambertjamesd/spellcraft"
name: "spellcraft"
description: "a new original n64 game"
readmeQualityOk: true
url: "https://github.com/lambertjamesd/spellcraft"
language: "C"
languages: ["C", "Python"]
languagePcts: [72, 25]
stars: 121
forks: 14
openIssues: 4
closedIssues: 1
watchers: 5
contributors: 4
recentReleases: 0
createdAt: "2024-02-07T05:08:39Z"
lastCommitAt: "2026-10-27T12:39:22Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 83
undervaluedScore: 38
maintainers: ["lambertjamesd", "Pyr0xene"]
openGraphImageUrl: "https://opengraph.githubassets.com/2c4fcaf1174fd93d211f4924d09b6a588d9df6d295434efc17c4026183429fe7/lambertjamesd/spellcraft"
---

# Spellcraft

A new original N64 game

## Building

Use [libdragon](https://github.com/DragonMinded/libdragon) to build the project.
```sh
git clone --recurse-submodules https://github.com/lambertjamesd/spellcraft
# or to init the submodule (after default clone)
git submodule update --init --recursive
# or to update the content of the submodules to the pinned libdragon sha
git submodule update --remote --recursive
```

You need to specify the location of blender 4.5.8 using en enviroment variable

```
export BLENDER_4=/home/james/Blender/blender-4.5.8-linux-x64/blender
```
replace the location of blender where it is installed on your machine.

You will also need python installed. 

```
sudo apt install python3
```

I have version 3.12.3 installed.

After that it should only take running `make` in the root directory of this project
### JQ
Building requires jq
```
sudo apt install jq
```

## Docker
You can optionally build the project with docker. Build the container
```
docker build -t spellcraft-dev-env .
```
Run the container
```
docker run -v ${pwd}:/spellcraft -it spellcraft-dev-env
```
Run Make
```
make
```

## Enemy ideas

* Stone golem
* Something that flies
* Something fast…
