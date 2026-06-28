---
repo: "hherb/primer"
name: "primer"
description: "An educational primer for children  based on agentic teachers using socratic questioning and knowledgebases"
url: "https://github.com/hherb/primer"
language: "Rust"
languages: ["Rust"]
languagePcts: [86]
stars: 6
forks: 0
openIssues: 4
closedIssues: 83
watchers: 0
contributors: 3
recentReleases: 1
createdAt: "2026-04-28T13:49:30Z"
lastCommitAt: "2026-06-28T03:08:33Z"
lastReleaseAt: "2026-05-15T07:23:58Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 56
maintainers: ["hherb"]
openGraphImageUrl: "https://opengraph.githubassets.com/54582cf2f8b33c7d811f6cece07297b9728b642200582c14b634268c1af89435/hherb/primer"
discussionCount: 1
---

# The Primer

</p>

A Socratic AI learning companion for children — inspired by the Young Lady's Illustrated Primer in Neal Stephenson's *The Diamond Age*.

The Primer doesn't teach by telling. It teaches by asking. When a child says "Why is the sky blue?", the Primer doesn't recite Rayleigh scattering — it asks "What colour does the sky turn at sunset? Why do you think it changes?" and walks the child toward discovering the answer themselves.

## Design Principles

- **The Primer can run on local hardware without internet dependence.**
 While the Primer can make use of cloud services (AI API, web search) it is designed to work autonomously and airgapped if that is the user's preference or no connectivity available

- **The Primer never gives a direct answer when it can ask a guiding question instead.** 
If the child asks a pure factual question ("How far is the moon?"), it answers directly, then pivots: "Now that you know it's 384,000 km — how long would it take to drive there?"

- **The Primer does not try to maximise engagement.** 
If a child wants to stop, the Primer says "That's enough for today" without guilt. It detects frustration and disengagement from response patterns…
