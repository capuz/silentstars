---
repo: "mbilling/fss-mqtt-broker"
name: "fss-mqtt-broker"
description: "Fast, Secure and Scalable MQTT Broker for everyone"
readmeQualityOk: true
url: "https://github.com/mbilling/fss-mqtt-broker"
language: "Rust"
languages: ["Rust"]
languagePcts: [75]
stars: 6
forks: 1
openIssues: 29
closedIssues: 269
watchers: 0
contributors: 3
recentReleases: 9
createdAt: "2026-06-15T11:19:51Z"
lastCommitAt: "2026-10-21T17:31:11Z"
lastReleaseAt: "2026-08-23T18:59:50Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 98
undervaluedScore: 63
maintainers: ["mbilling", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/ed849e94942a8a26fd03128d11a0380180adb435136112f19468c893fc10b2fc/mbilling/fss-mqtt-broker"
---

# mqttd — a security-first, cluster-native MQTT broker

> **Open == Enterprise: every feature, no paid tier.**
>
> MQTT 3.1.1 + 5.0 · Rust · durable sessions quorum-replicated **by default** · Apache-2.0, everything.
>
> **75,000 msg/s** on one 4-vCPU node at p99 ≤ 1 s — **1.7× Mosquitto and EMQX, 2.5× HiveMQ CE**, same host, EMQX's own load tool. [Numbers ↓](#by-the-numbers)
>
> **Linear scale-out, 3 → 10 nodes:**
> - **QoS 0:** ~114,000 msg/s **per 4-vCPU node** — **1.14M msg/s on 10 nodes, 40 vCPU in total**; 1.2M at p99 ≤ 2 s, no loss.
> - **QoS 1, clean sessions:** ~39,000–45,000 msg/s per node — **390,000–450,000 msg/s on 10 nodes**.
> - **Durable QoS 1** (ack after fsync + replication): **90,000 msg/s on 3 nodes, 12 vCPU** on the log store, again GREEN on the release candidate; **270,000 msg/s on 10 nodes** ([↓](#durable-and-qos-1-scale-out)).
>
> All three use shared subscriptions. [Scale-out ↓](#cluster-scale-out-qos-0-shared-subscriptions)
>
> **Newest, measured on 1.2.0** (read from the brokers' counters, 2026-10-21): durable QoS 1 on 10 nodes **270,000 msg/s on the log store, certified**, and about 185,000 on the default store; QoS 1 with clean sessions 39–45k msg/s…
