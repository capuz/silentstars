---
repo: "yuuki1645/yuuki-lab"
name: "yuuki-lab"
description: "Official repository of the YouTube channel ゆうきラボ (Yuuki Lab)"
originalDescription: "YouTubeチャンネル「ゆうきラボ」の公式リポジトリ"
descriptionLang: "ja"
readmeQualityOk: true
url: "https://github.com/yuuki1645/yuuki-lab"
language: "Python"
languages: ["Python"]
languagePcts: [84]
stars: 7
forks: 0
openIssues: 5
closedIssues: 11
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2025-11-23T19:07:23Z"
lastCommitAt: "2026-10-26T03:02:12Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 81
undervaluedScore: 65
maintainers: ["yuuki1645"]
openGraphImageUrl: "https://opengraph.githubassets.com/79359a42fcebfb52bad66fdc8bdd7349ad9b58031fdbe92e39db3d63811e684b/yuuki1645/yuuki-lab"
discussionCount: 1
---

# yuuki-lab

The official repository of the YouTube channel "ゆうきラボ | Yuuki Lab", which publishes videos of building life-size robots.

YouTube channel → https://www.youtube.com/@YuukiLab

We publish the programs for the tools used in our videos and our production diaries.

Production diaries are kept in the issue linked below.

https://github.com/yuuki1645/robotics-notes-public/issues/1

# Reinforcement learning experiments (main line, ongoing)

**The main line is two-legged, alternating single-leg walking with PPO on Isaac Lab** (`isaac-lab/`).  
This line was ported from MuJoCo [exp_030](https://github.com/yuuki1645/yuuki-lab/blob/HEAD/mujoco-sim/mujoco_rl_sim/experiments/exp_030_biped_ppo_walk/), and background references for the reward design remain in the MuJoCo docs. Daily training, evaluation, and improvement loops are run **on Isaac only**.

| Item | Details |
|------|------|
| Simulator | Isaac Sim / [Isaac Lab](https://isaac-sim.github.io/IsaacLab/) |
| Task | `YuukiLab-BipedPpoWalk-Direct-v0` (Manager-Based: `YuukiLab-BipedPpoWalk-v0`) |
| Algorithm | PPO (RSL-RL) |
| Scoring | Forward distance and success rate from `eval_biped_walk.py` (e.g., Success rate ≥ 5 m) |
|…
