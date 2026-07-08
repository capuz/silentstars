---
repo: "day8/re-frame2"
name: "re-frame2"
description: "https://day8.github.io/re-frame2/"
readmeQualityOk: true
url: "https://github.com/day8/re-frame2"
language: "Clojure"
languages: ["Clojure"]
languagePcts: [94]
stars: 36
forks: 0
openIssues: 0
closedIssues: 8
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-05-07T14:43:48Z"
lastCommitAt: "2026-07-08T05:41:00Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 100
undervaluedScore: 39
maintainers: ["mike-thompson-day8"]
openGraphImageUrl: "https://opengraph.githubassets.com/93988ca56e8075589abef5ce73ba9bcbbe6a9fdaa6e7fc5bc354ae77c23e2e0d/day8/re-frame2"
---

> *This, milord, is my family's axe. We have owned it for almost nine hundred years, see. Of course, sometimes it needed a new blade. And sometimes it has required a new handle, new designs on the metalwork, a little refreshing of the ornamentation ... but is this not the nine hundred-year-old axe of my family? And because it has changed gently over time, it is still a pretty good axe, y'know. Pretty good.*
>
> — Terry Pratchett, *The Fifth Elephant* — reflecting on identity, flow, and derived values (aka [the Ship of Theseus](https://en.wikipedia.org/wiki/Ship_of_Theseus))

re-frame2 is the same axe as [before](https://github.com/day8/re-frame), but made from different bits and with new ornamentation.

# What is it?

re-frame2 is an architectural pattern for building single-page apps that target a virtual-DOM substrate — React, in practice.

## What's novel and interesting?

Five things:

### **1. The spec is the artefact. The code is downstream.**

This one is a little nerdy.

Historically, here's how every other framework works: somebody writes the implementation, the implementation is the thing, and the documentation heroically tries — usually incompletely — to describe what…
