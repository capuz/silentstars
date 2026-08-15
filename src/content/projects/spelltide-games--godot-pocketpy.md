---
repo: "spelltide-games/godot-pocketpy"
name: "godot-pocketpy"
description: "Godot Extension for pocketpy"
readmeQualityOk: true
url: "https://github.com/spelltide-games/godot-pocketpy"
language: "C++"
languages: ["C++", "Python"]
languagePcts: [53, 45]
stars: 21
forks: 3
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2025-06-10T13:45:47Z"
lastCommitAt: "2026-08-15T04:02:49Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 87
undervaluedScore: 56
maintainers: ["blueloveTH"]
openGraphImageUrl: "https://opengraph.githubassets.com/1457deb51d17311c37d67117dd17030cc228f98707ee5716af38f8c96cebf070/spelltide-games/godot-pocketpy"
fundingLinks: ["GITHUB:https://github.com/blueloveTH"]
---

# godot-pocketpy

## How to use
Download the artifact `godot-pocketpy` from Github Actions page.
https://github.com/pocketpy/godot-pocketpy/actions

Unzip it into your Godot project's `addons` folder, and then open the Godot editor. Make sure your Godot version is v4.4 or later.

Create a special folder `site-packages` in your project root with a `.gdignore` file. This is where you can put your Python modules.
When you run `import` statements, `site-packages` will be searched.

You may also want to create a `scripts` folder to store Godot-based Python scripts, which can be attached to nodes in your Godot scenes.
Please note that any Python scripts outside of `site-packages` will be compiled by Godot, so they must derive from `godot.Node` and the class name must match the filename.

Python scripts in `site-packages` must not be compiled, which is why you need to add a `.gdignore` file in the `site-packages` folder.

The basic structure of your project should look like this:

```
- addons
    - godot-pocketpy
        - bin
        - typings
- site-packages
    - .gdignore
    - some_library
        - __init__.py
        - test.py
- scripts
    - MyClass.py
- project.godot
```

To…
