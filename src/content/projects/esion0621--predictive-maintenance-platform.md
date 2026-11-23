---
repo: "esion0621/predictive-maintenance-platform"
name: "predictive-maintenance-platform"
description: "Industrial IoT predictive maintenance platform: based on Flink real-time stream processing + Spark offline machine learning, implementing device anomaly detection, remaining useful life prediction, and hot model loading, with a Spring Boot backend and a React visualization frontend. Supports 100 devices, Kafka, HDFS, MySQL, Redis."
originalDescription: "工业物联网预测维护平台：基于 Flink 实时流处理 + Spark 离线机器学习，实现设备异常检测、剩余寿命预测、模型热加载，并提供 Spring Boot 后端与 React 可视化前端。支持100台设备、Kafka、HDFS、MySQL、Redis。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/esion0621/predictive-maintenance-platform"
language: "Java"
languages: ["Java", "JavaScript"]
languagePcts: [37, 23]
topics: ["spark", "bigdata", "flink", "kafka", "machine-learning", "react", "spring-boot"]
stars: 8
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-04-07T09:11:35Z"
lastCommitAt: "2026-11-23T10:24:48Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 55
undervaluedScore: 17
maintainers: ["esion0621"]
openGraphImageUrl: "https://opengraph.githubassets.com/b6b9d68cabada66f361edc199e00114d896d321422b08af15b82c068673d8592/esion0621/predictive-maintenance-platform"
---

# Industrial Equipment Predictive Maintenance Platform

---

An industrial IoT predictive maintenance system based on the Lambda architecture. The platform simulates sensor data streams from 100 devices and uses Flink CEP rule matching and a random forest model to detect anomalies in real time. Spark trains models offline and hot-updates them, and the project provides a complete backend API and frontend visualization interface.

## 🎯 Core Features

> The following features have been verified only in the project's built-in simulated data environment, to demonstrate the end-to-end pipeline and architectural design. They do not represent production-grade SLAs.
