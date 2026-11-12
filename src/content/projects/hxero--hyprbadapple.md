---
repo: "hxero/hyprbadapple"
name: "hyprbadapple"
description: "Bad Apple in Hyprland lua configs"
readmeQualityOk: true
url: "https://github.com/hxero/hyprbadapple"
language: "Lua"
languages: ["Lua", "Python", "C"]
languagePcts: [55, 25, 20]
stars: 5
forks: 1
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2026-06-04T07:01:14Z"
lastCommitAt: "2026-11-12T11:39:50Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 50
undervaluedScore: 6
maintainers: ["hxero"]
openGraphImageUrl: "https://opengraph.githubassets.com/c8d3533a487c3342d010e42850c3686e69cf262384ccc504a6c657fb2c367e07/hxero/hyprbadapple"
---

# Video

# Getting started
Clone this repo
```sh
# ~/
git clone https://github.com/hxero/hyprbadapple
cd hyprbadapple
```

## Setup
Run the script to install dependencies and set it up automatically
```sh
sh setup.sh
```

> When asked "Enter window launch command:"  
> Enter the command that launches the window  
> example: `kitty`, `foot` or leave blank to use the "box" window  

## Start
> [!IMPORTANT]
> To force stop cleanly, press `SUPER + U` after you started

cd into `hyprbadapple`, then run
```sh
sh start.sh&&exit
```
or directly
```sh
hyprctl eval "dofile'$PWD/init.lua'"&&exit
```
> `&&exit` to exit the terminal after starting
