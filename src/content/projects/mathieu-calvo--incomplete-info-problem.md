---
repo: "mathieu-calvo/Incomplete-Info-Problem"
name: "Incomplete-Info-Problem"
description: "Incomplete Information Problem using Reinforcement Learning and Opponent Modelling. A heads-up Limit Texas Hold'em bot trained with Deep CFR and fine-tuned with PPO self-play, plus a Streamlit Cloud app where humans play the bot and contribute hands to a nightly retraining pipeline"
readmeQualityOk: true
url: "https://github.com/mathieu-calvo/Incomplete-Info-Problem"
language: "Python"
languages: ["Python"]
languagePcts: [98]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2018-09-09T16:31:08Z"
lastCommitAt: "2026-09-27T09:28:35Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 80
undervaluedScore: 66
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/a16ae5c175d20a8fd8d70aeb79d4baaf461c38ef9c9055592142e205fc530f3c/mathieu-calvo/Incomplete-Info-Problem"
---

# Incomplete-Info-Problem

A heads-up Limit Texas Hold'em bot trained with **Deep CFR** and fine-tuned with **PPO self-play**, plus a **Streamlit Cloud** app where humans play the bot and contribute hands to a nightly retraining pipeline.

> Successor to the original DQN/DRQN prototype. The prior TF/Keras implementation and fixed-policy evaluation have been replaced by a theoretically-grounded solver (Deep CFR → regret matching → approximate Nash) + a human-in-the-loop improvement cycle.

## Highlights

- **Deep CFR** — neural advantage + strategy networks trained via external-sampling MCCFR (Brown et al., 2019). Converges toward a Nash equilibrium strategy.
- **PPO self-play league** — warm-started from the Deep CFR average strategy, opponents sampled from an ELO-weighted checkpoint pool.
- **Fast engine** — clean state-machine HULHE, `treys`-backed 7-card ranker, Monte-Carlo equity, 169-bucket preflop encoder.
- **Human-in-the-loop** — every hand you play on the web app is saved to Supabase; a nightly GitHub Actions job retrains the bot and publishes a new checkpoint on Hugging Face Hub after passing an eval gate.
- **Streamlit Cloud** — one-click deploy from this repo; the app…
