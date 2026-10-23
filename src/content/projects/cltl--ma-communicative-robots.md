---
repo: "cltl/ma-communicative-robots"
name: "ma-communicative-robots"
description: "Communication robots"
readmeQualityOk: true
url: "https://github.com/cltl/ma-communicative-robots"
language: "Jupyter Notebook"
languages: ["Jupyter Notebook"]
languagePcts: [99]
stars: 6
forks: 26
openIssues: 0
closedIssues: 2
watchers: 3
contributors: 23
recentReleases: 0
createdAt: "2020-10-20T18:18:33Z"
lastCommitAt: "2026-10-23T08:47:26Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "fork_magnet"]
healthScore: 99
undervaluedScore: 64
maintainers: ["piekvossen"]
openGraphImageUrl: "https://opengraph.githubassets.com/27b10ca52dc7b160c7fa718ec4d9ca6db234dbc6e3f3711cd35b70f77952f9c8/cltl/ma-communicative-robots"
---

#  Conversational AI & Robots, 2026

Conversational AI & Robots is a master's course taught at the Vrije Universiteit Amsterdam.
We use the LEOLANI platform for interacting with agents and robots (Baier et al 2025). 
Interactions through LEOLANI are captured in the EMISSOR format (Baez et al 2022). 
[EMISSOR](https://github.com/leolani/cltl-combot/blob/main/src/cltl/combot/event/emissor.py) is a frequently used JSON structure in which interactions are stored on disk as ```scenarios``` in separate folders.
EMISSOR stores incoming streams of signals (audio, text, image) as separate data points that are aligned through a temporal ruler that is shared by the scenario.

This project shows how interactions saved in EMISSOR can be analysed and evaluated in different way:

* scoring the likelihood of turns based on the previous context using a transformer model and masked token predictions
* scoring the coherence of turns based on the previous context using a generative LLM as a judge
* scoring dialogue acts as positive, negative or neutral moves in the interaction
* scoring the emotions expressed in each turn as positive, negative or neutral moves in the interaction
* evaluating the…
