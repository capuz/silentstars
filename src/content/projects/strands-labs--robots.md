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
stars: 165
forks: 38
openIssues: 4
closedIssues: 659
watchers: 5
contributors: 26
recentReleases: 4
createdAt: "2026-02-19T19:42:45Z"
lastCommitAt: "2026-09-25T09:02:59Z"
lastReleaseAt: "2026-09-17T08:24:40Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 100
undervaluedScore: 40
maintainers: ["cagataycali", "shipitfast", "rmncardoso"]
openGraphImageUrl: "https://opengraph.githubassets.com/1cdfa252278899baee87c33237937b8597c7526f697dee14e404b793333969f5/strands-labs/robots"
discussionCount: 0
---

<picture>
        <source media="(prefers-color-scheme: dark)" srcset="https://strandsagents.com/latest/assets/wordmark-github-dark.svg">
      </picture>
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
    ◆ <a href="https://github.com/orgs/strands-labs/projects/2">Project Board</a>
  </p>
</div>

</p>

`strands-robots` gives a [Strands Agent](https://github.com/strands-agents/harness-sdk)
hands. One `Robot()` call returns a **MuJoCo simulation** (default: no GPU, no
hardware) or a **real robot** - same code, same natural-language control, same
opt-in peer-to-peer **mesh**.

```python
from strands import Agent
from strands_robots import Robot

robot = Robot("so100")              # MuJoCo sim by default; mode="real" for hardware
Agent(tools=[robot])("pick up the red cube")
```

## Install

```bash
uv venv --python 3.12 && source .venv/bin/activate
uv pip install…
