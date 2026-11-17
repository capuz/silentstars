---
repo: "romilly/breadboarder"
name: "breadboarder"
description: "DSL for generating Breadboard Illustrations"
readmeQualityOk: true
url: "https://github.com/romilly/breadboarder"
language: "Python"
languages: ["Python"]
languagePcts: [74]
stars: 8
forks: 0
openIssues: 0
closedIssues: 0
watchers: 7
contributors: 3
recentReleases: 0
createdAt: "2017-08-29T16:22:17Z"
lastCommitAt: "2026-11-17T14:38:31Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 90
undervaluedScore: 42
maintainers: ["romilly", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/a3ba0e20a12f188c15c5696f667bf2f40f376faa13be233af123051fe1bb1952/romilly/breadboarder"
---

The goal is to create a simple, intuitive DSL that allows you to describe a
breadboard-based electronics project and then *automatically*
1. draw a diagram of the project, and
2. generate step-by-step instructions in markdown ready for publication

The design is based on earlier closed-source tools of mine which worked but needed
improvement.

# Using the DSL

1. You typically start a project by creating a Project instance.
1. Then you add a Breadboard instance, and maybe other things, like an Arduino or Pi.
1. After that, you add wires and components.
1. When you've added all you need you can generate svg and (eventually)
generate markdown for the project.

## Current status

All the tests are running again.

## Sample script and its output 
   
    def shrimp_kit():
        project = Project()
        breadboard = Breadboard().move_to(Point(20, 20))
        project.add(breadboard)
        cp = CP2102().rotate(-90., Point(40,400)).move_to(Point(40,400))
        project.add(cp,
                Wire('green',cp['GND'],breadboard['a10']),
                Wire('red',cp['5V'],breadboard['a9']),
                Wire('yellow',cp['TXD'],breadboard['a4']),…
