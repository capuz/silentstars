---
repo: "strands-labs/robots"
name: "robots"
description: "Control robots and physical hardware with natural language through Strands Agents."
url: "https://github.com/strands-labs/robots"
homepage: "https://strands-labs.github.io/robots/"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["robots", "strands-agents", "vision-language-action", "strands-labs", "agentic", "agentic-ai", "ai", "genai", "gr00t", "lerobot"]
stars: 77
forks: 23
openIssues: 12
closedIssues: 231
watchers: 3
contributors: 31
recentReleases: 1
createdAt: "2026-02-19T19:42:45Z"
lastCommitAt: "2026-06-27T00:34:11Z"
lastReleaseAt: "2026-06-17T07:51:21Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem"]
healthScore: 99
undervaluedScore: 40
maintainers: ["cagataycali", "max-rattray-aws", "aymansalama"]
openGraphImageUrl: "https://opengraph.githubassets.com/afdf9f45f0704f76ec6961bc04118ee0c5e1ba6f5c2aa38946d771f2af4b33e9/strands-labs/robots"
discussionCount: 0
---

</a>
  </div>

  <h1>
    Strands Robots
  </h1>

  <h2>
    Control, simulate, and train robots with natural language
  </h2>

  </div>

  <p>
    ◆ <a href="https://github.com/google-deepmind/mujoco">MuJoCo</a>
    ◆ <a href="https://github.com/NVIDIA/Isaac-GR00T">NVIDIA GR00T</a>
    ◆ <a href="https://github.com/huggingface/lerobot">LeRobot</a>
    ◆ <a href="https://github.com/strands-labs/robots-sim">Robots Sim</a>
    ◆ <a href="https://github.com/orgs/strands-labs/projects/2">Project Board</a>
  </p>
</div>

</p>

`strands-robots` gives a [Strands Agent](https://github.com/strands-agents/harness-sdk)
hands. One `Robot()` call returns either a **MuJoCo simulation** (default, no GPU,
no hardware) or a **real hardware robot** - both drivable in natural language,
both auto-joined to a peer-to-peer **mesh** so fleets coordinate out of the box.

```python
from strands import Agent
from strands_robots import Robot

robot = Robot("so100") # MuJoCo sim by default - no hardware needed
agent = Agent(tools=[robot])
agent("Pick up the red cube")
```

Swap to physical hardware with one kwarg - the agent code is identical:

```python
robot = Robot("so100", mode="real",…
