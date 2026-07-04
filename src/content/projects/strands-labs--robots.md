---
repo: "strands-labs/robots"
name: "robots"
description: "Control robots and physical hardware with natural language through Strands Agents."
readmeQualityOk: true
url: "https://github.com/strands-labs/robots"
homepage: "https://strands-labs.github.io/robots/"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["robots", "strands-agents", "vision-language-action", "strands-labs", "world-foundation-models"]
stars: 84
forks: 25
openIssues: 28
closedIssues: 244
watchers: 3
contributors: 33
recentReleases: 2
createdAt: "2026-02-19T19:42:45Z"
lastCommitAt: "2026-07-04T22:19:05Z"
lastReleaseAt: "2026-07-01T17:23:47Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem"]
healthScore: 98
undervaluedScore: 41
maintainers: ["cagataycali", "mertkrgl", "sundargthb"]
openGraphImageUrl: "https://opengraph.githubassets.com/42f9e0cf5830d4580e655114c40392baf2c434e72261289a28a9273778370f4e/strands-labs/robots"
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
hands. One `Robot()` call returns a **MuJoCo simulation** (default - no GPU, no
hardware) or a **real robot** - same code, same natural-language control, both
auto-joined to a peer-to-peer **mesh**.

```python
from strands import Agent
from strands_robots import Robot

robot = Robot("so100")              # MuJoCo sim by default; mode="real" for hardware
Agent(tools=[robot])("pick up the red cube")
```

### One agent, the whole robotics loop

Teleoperate a real arm to collect demos, fine-tune a policy on them, run it in
sim **and** on hardware, hand work to a fleet peer, and…
