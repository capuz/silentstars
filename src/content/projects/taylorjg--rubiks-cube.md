---
repo: "taylorjg/rubiks-cube"
name: "rubiks-cube"
description: "A three.js visualisation of solving a Rubik's cube"
url: "https://github.com/taylorjg/rubiks-cube"
homepage: "https://taylorjg.github.io/rubiks-cube/"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [97]
topics: ["javascript", "webgl", "threejs", "rubiks-cube"]
stars: 29
forks: 13
openIssues: 1
closedIssues: 2
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2018-02-23T21:38:18Z"
lastCommitAt: "2026-07-04T19:20:09Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 83
undervaluedScore: 38
maintainers: ["taylorjg"]
openGraphImageUrl: "https://opengraph.githubassets.com/69987e283ac21d5d0a4a3989b0bed85b8635e35794a7ce83a349a737ba497f2f/taylorjg/rubiks-cube"
---

# Description

A [three.js](https://threejs.org/) visualisation of solving a Rubik's cube.

# Status

Currently, I have not implemented the solving part. Instead, I am cheating
by using a reversed list of opposite moves as the solution.

# Query Params

The following query params can be added:

| Query Param | Description | Values | Default |
| ----------- | ----------- | ------ | ------- |
| cubeSize        | The size of the cube | 2-5 | 3 |
| animationSpeed  | How quickly to animate the moves | 100-5000 ms | 750 ms |
| autoRotate      | Auto rotate the cube as it is solving | bool | true |
| autoRotateSpeed | Speed of auto rotatation (if enabled) | 0-10000 ms | 1000 ms |
| axesEnabled     | Draw the X, Y and Z axes | bool | false |

## Examples

* https://taylorjg.github.io/rubiks-cube?animationSpeed=250
* https://taylorjg.github.io/rubiks-cube?animationSpeed=250&cubeSize=2
* https://taylorjg.github.io/rubiks-cube?animationSpeed=250&cubeSize=4
* https://taylorjg.github.io/rubiks-cube?animationSpeed=250&cubeSize=4&axesEnabled

# TODO

* ~~Improve the look of the cube pieces~~
* ~~Add a slide-out panel to configure the size, speed etc~~
* Implement an algorithm to solve the cube…
