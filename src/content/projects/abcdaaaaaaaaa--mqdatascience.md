---
repo: "abcdaaaaaaaaa/MQDataScience"
name: "MQDataScience"
description: "This library calculates slopes of gas sensors (MQ-2, MQ-3, MQ-4, MQ-5, MQ-6, MQ-7, MQ-8, MQ-9, MQ-131_low/high, MQ-135, MQ-136, MQ-137, MQ-138, MQ-214, MQ-216, MQ303A, MQ303B, MQ306A, MQ307A, MQ309A). Ceates data science visualization applications featuring 4D Slope Estimation with 3D MQ Graph Simulation."
readmeQualityOk: true
url: "https://github.com/abcdaaaaaaaaa/MQDataScience"
homepage: "https://project.uzay.info/MQDataScience"
language: "Python"
languages: ["Python"]
languagePcts: [58]
topics: ["mq-135", "mq-136", "mq-2", "mq-3", "mq-4", "mq-5", "mq-6", "mq-7", "mq-8", "mq-9"]
stars: 11
forks: 4
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2023-08-05T15:59:03Z"
lastCommitAt: "2026-07-12T06:18:32Z"
lastReleaseAt: "2024-02-17T10:40:20Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 86
undervaluedScore: 80
maintainers: ["abcdaaaaaaaaa"]
openGraphImageUrl: "https://opengraph.githubassets.com/8cac20dab6648e0dfd6210320f4d1300af9795aee43846cf5c1c77df4d519d4d/abcdaaaaaaaaa/MQDataScience"
---

# What’s awaiting in v6.0.0?

### 1) Inaccurate Curves Plotted Using Power Regression with Correction Coefficients Will Be Corrected to 99% Accuracy Using An Offset Exponential Model

### 2) In the "Slope Estimation in Time-Dependent 4D Space" Section, the Temperature and Relative Humidity Estimation System Will Be Improved

### 3) Update #1 Will Be Included In All Files

### 4) All Estimation And Calculation Mechanisms Will Be Detailed in the README.md File

# MQDataScience v5.5.7

## What can be created?
"The first and only Arduino library where MQ Sensors combine with Data Science"

## 1) Advanced Data Science System for Regression Calculations

## 2) Ppm Analysis of Different Model Gases

## 3) Formulated Correction Coefficients depending on Temperature and Humidity

## 4) 3D Ppm Surface Diagram for MQ Sensors Gases

## 5) Slope Estimation in Time-Dependent 4D Space

## 4D Axis Features:

## Ppm Formullas

        if r_squared >= 0.9995:
            print("R-squared value for {gas name} is above 0.9995, plotting against first and last values.")
            
            x0, y0 = x[0], y[0]
            xn, yn = x[-1], y[-1]
            b = np.log10(yn/y0) / np.log10(xn/x0)…
