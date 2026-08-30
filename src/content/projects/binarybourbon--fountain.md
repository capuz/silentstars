---
repo: "BinaryBourbon/fountain"
name: "fountain"
description: "Agent Orchestrator Built on Sprites"
readmeQualityOk: true
url: "https://github.com/BinaryBourbon/fountain"
homepage: "https://binarybourbon.github.io/fountain/"
language: "Elixir"
languages: ["Elixir"]
languagePcts: [79]
stars: 13
forks: 3
openIssues: 59
closedIssues: 353
watchers: 1
contributors: 9
recentReleases: 7
createdAt: "2026-05-10T00:53:37Z"
lastCommitAt: "2026-08-30T00:43:46Z"
lastReleaseAt: "2026-08-07T03:42:04Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 97
undervaluedScore: 59
maintainers: ["jhgaylor", "lex00", "beauregardhenry"]
openGraphImageUrl: "https://opengraph.githubassets.com/b36ecb3929014ee08c9a10f2aacb17ac8ddb6a5edc666643f79e70b57fd0af37/BinaryBourbon/fountain"
---

# Fountain

**A conversational API to a computer. The meter runs while an agent works and
stops while the machine waits, so a conversation nobody is talking to costs
nothing.**

Send a prompt to an HTTP endpoint. On the other end a machine wakes up with
your repositories cloned, your packages installed and your credentials already
in the environment, a coding agent runs on it, and the answer comes back.
Between messages the machine parks. A parked machine holds its disk, costs
nothing and takes none of your concurrency, so the next prompt lands on the
same files instead of on a fresh box that has to be told everything again.

Coding agents are not the scarce thing. There are dozens of them and Fountain
runs Claude Code, Codex, Gemini CLI and opencode behind one API. The scarce
thing is the computer underneath: building it, installing on it, configuring
it, getting the networking right, getting a credential onto it that the model
never reads, and turning it off before the bill notices. Nobody sets out to
build that, and everybody shipping an agent ends up building it.

Fountain is that half. You write the conversation.

## In one picture

Agent, Environment and Vault are templates:…
