---
repo: "wukangmh2022-cmyk/qqt-gpu-sim"
name: "qqt-gpu-sim"
description: "QQT GPU simulator, model training completed, latest ckpt achieves 100% win rate against all types of rule-based enemies, 95%+ win rate against humans in First Blood mode; training scripts, environments, and weights fully open-source."
originalDescription: "QQ堂GPU simulator，已完成模型训练，最新ckpt对各类规则敌人胜率100%，一血模式对战人类胜率95%+；训练脚本、环境、权重完全开源。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/wukangmh2022-cmyk/qqt-gpu-sim"
language: "Python"
languages: ["Python", "JavaScript"]
languagePcts: [65, 24]
stars: 6
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-08-06T05:43:45Z"
lastCommitAt: "2026-09-20T08:47:23Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 51
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/e190f1f4c2b198860cd6e096e224815f396e62be4d7096912be4bad639994eb7/wukangmh2022-cmyk/qqt-gpu-sim"
---

# qqt-gpu-sim — Bubble Fighter style 1v1 combat: GPU batch simulator + self-play PPO

JAX-based fully tensorized GPU Bomberman environment and distributed reinforcement learning framework, single/multi-machine cluster parallel simulation of thousands of environments, through 7.5M parameter ViT self-play PPO and polymorphic tournament evolution, overcome high-level confrontation Nash trap, train competitive agents with full-map generalization, active pressure and deep game-theoretic capabilities. The solution has undergone early PyTorch prototype verification and has now fully evolved to the fourth stage Breakthrough Master training (12 machines × 2 cards = 24 replica set cluster, single-round training volume exceeds tens of billions of steps).

---

## 🎮 Try it out (Browser version)

**▶️ [Click here to play QQT Fighting online](https://wukangmh2022-cmyk.github.io/qqt-gpu-sim/)**

Original `res/` asset rendering (character sprites/bombs/explosions/scene skins/sound effects), directional keys/WASD to move, spacebar to place bubbles, supports pushing boxes. Selectable models from dropdown:

- **Breakthrough Master series** (Patch3 ViT 7.5M): Latest flagship `params_it00000831_ema`…
