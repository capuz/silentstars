---
repo: "strands-labs/robots"
name: "robots"
description: "Control robots and physical hardware with natural language through Strands Agents."
readmeQualityOk: true
url: "https://github.com/strands-labs/robots"
homepage: "https://strands-labs.github.io/robots/"
language: "Python"
languages: ["Python"]
languagePcts: [96]
topics: ["robots", "strands-agents", "vision-language-action", "strands-labs", "world-foundation-models"]
stars: 168
forks: 39
openIssues: 45
closedIssues: 682
watchers: 5
contributors: 27
recentReleases: 4
createdAt: "2026-02-19T19:42:45Z"
lastCommitAt: "2026-09-29T08:11:05Z"
lastReleaseAt: "2026-09-17T08:24:40Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 98
undervaluedScore: 39
maintainers: ["cagataycali", "Vivek0712", "tmoreton"]
openGraphImageUrl: "https://opengraph.githubassets.com/33342e91e6956b329f30cd5a0c71a1b4fa3e9c7a997b2cdd6d81a0c55f1b7fcf/strands-labs/robots"
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
opt-in peer-to-peer **mesh**. Learned policies from the Hugging Face Hub, from
vision-language-action models to world foundation models and whole-body
controllers, run through the same `run_policy` call in the simulator and on
the physical robot.

```python
from strands import Agent
from strands_robots import Robot

robot = Robot("so100")…
