---
repo: "theurian/theurian"
name: "theurian"
description: "Git-native engineering knowledge platform for AI agents, connecting specifications, decisions, reviews, code, and tests with traceable context."
readmeQualityOk: true
url: "https://github.com/theurian/theurian"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 5
forks: 1
openIssues: 100
closedIssues: 41
watchers: 1
contributors: 1
recentReleases: 5
createdAt: "2026-08-01T13:11:40Z"
lastCommitAt: "2026-08-19T04:08:53Z"
lastReleaseAt: "2026-08-16T14:11:24Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine", "under_pressure"]
healthScore: 86
undervaluedScore: 54
maintainers: ["utchy", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/236143f28f2523878e4398f78f062a9ec2b7bf705f3b36d72cb1ec94f4a124d0/theurian/theurian"
---

<h1>Theurian — Git-native engineering knowledge for AI agents</h1>

  <h3>Stop your AI from re-proposing what your team rejected in March.</h3>

  <p>
    Theurian turns your ADRs and specifications into governed knowledge<br>
    that any AI agent can query — and that no AI agent can write to.
  </p>

  <p>
  </p>

  <p>
  </p>
</div>

---

**Your agent asks: _"Should this endpoint use optimistic locking?"_**

<table>
<tr><th width="50%">Today</th><th width="50%">With Theurian</th></tr>
<tr><td valign="top">

The answer exists. It is in an ADR from March, a review thread on PR #431 where
a staff engineer explained why the naive approach breaks under retry, and a
specification nobody has opened in six months.

None of it is reachable, so the agent guesses — and often guesses something the
team explicitly rejected.

Grep does not help: the answer is a decision, not a string. Nor does a vector
search over Markdown, which returns text with no way to tell an unreviewed
draft from a ruling the team actually made.

</td><td valign="top">

The agent calls one local daemon and gets the approved decision, how far it can
be trusted, whether it is still inside its validity window, and the…
