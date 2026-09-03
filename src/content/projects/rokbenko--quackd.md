---
repo: "rokbenko/quackd"
name: "quackd"
description: "🦆🧠 Give your small robot a brain. Tell a Microduck, a Reachy Mini, a LeRobot arm or any ROS base what you want in plain language. An LLM (Claude, OpenAI, Gemini, Grok, or a local model via Ollama, vLLM or llama.cpp) uses the skills it already has. Simulator, .duck task files, MCP, and flocks where different robots cooperate. Apache 2.0."
readmeQualityOk: true
url: "https://github.com/rokbenko/quackd"
homepage: "https://pypi.org/project/quackd/"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["embodied-ai", "hugging-face", "llm-agents", "mcp", "microduck", "model-context-protocol", "physical-ai", "robotics", "sim2real", "claude"]
stars: 129
forks: 11
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 4
createdAt: "2026-08-28T09:09:16Z"
lastCommitAt: "2026-09-03T08:13:24Z"
lastReleaseAt: "2026-09-02T17:49:12Z"
status: "newborn"
tags: ["solo_builder"]
healthScore: 70
undervaluedScore: 29
maintainers: ["rokbenko"]
openGraphImageUrl: "https://opengraph.githubassets.com/47eec7a6687bbbc0a4cd9aa4ac0ccff2fcba181e4ea3b45e5290dbc1ddcb7112/rokbenko/quackd"
discussionCount: 1
---

</p>

<sub>quackd, pronounced “quacked”. The brain daemon Microduck was missing, named like its siblings <code>robotd</code>, <code>mediad</code>, <code>padd</code> and <code>tofd</code>. Since 0.4 it drives other small robots too.</sub></p>

</p>

  <br>
  <sub>"Find the ball and kick it", in the bundled simulator, driven by the <em>scripted</em> pilot (no API key). Same verbs, same safety layer, same perception as a real model run. See <a href="docs/assets/README.md">docs/assets</a>.</sub>
</p>

**quackd** connects a small robot to a large language model (Claude, OpenAI, Gemini, Grok, or an open source model running locally through llama.cpp, vLLM, Ollama or LM Studio). The first robot is the [Microduck](https://pollen-robotics.com/microduck/) from Pollen Robotics, a biped that already knows how to walk, turn, kick, scoop something off the floor, look around and quack. Since 0.4 the same loop drives other bodies through adapters that declare what each can do: a Reachy Mini head, an SO-101 class arm through LeRobot and any wheeled base over rosbridge, the head in the bundled simulator or a mock, the arm and the base in a mock only, none on hardware. quackd is the missing layer…
