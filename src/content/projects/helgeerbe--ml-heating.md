---
repo: "helgeerbe/ml_heating"
name: "ml_heating"
description: "Machine learning-based heating control system that integrates with Home Assistant"
readmeQualityOk: true
url: "https://github.com/helgeerbe/ml_heating"
language: "Python"
languages: ["Python", "Jupyter Notebook"]
languagePcts: [60, 40]
topics: ["controller", "heatpump", "homeassistant", "influxdb2", "machinelearning", "python"]
stars: 6
forks: 1
openIssues: 15
closedIssues: 9
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2025-10-13T07:54:27Z"
lastCommitAt: "2026-10-13T10:57:00Z"
lastReleaseAt: "2025-11-30T00:16:04Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 52
undervaluedScore: 36
maintainers: ["helgeerbe"]
openGraphImageUrl: "https://opengraph.githubassets.com/00fe1985784b2e64b0f90a00bcd1d9aeac31859e39f92be16212f2deab17f19b/helgeerbe/ml_heating"
---

# ML Heating Control for Home Assistant

> **Warning**
> This project is an initial test and proof of concept heating controller. However, heating systems are critical infrastructure - always monitor its behavior and ensure you have safety mechanisms in place. Use at your own risk.

This project implements a **physics-based machine learning heating control system** that integrates with Home Assistant. It uses a ThermalEquilibriumModel to predict the optimal water outlet temperature for a heat pump, continuously learning from real-world results to efficiently maintain your target indoor temperature.

## Overview

Traditional heating curves are static: they map outdoor temperature to a fixed outlet temperature. This system is **dynamic and adaptive** - it learns your house's unique thermal characteristics and continuously improves its predictions based on what actually happens.

## Goal

The primary goal is to improve upon traditional heat curves by creating a **self-learning system** that:

-   **Increases Efficiency:** Minimizes energy waste by precisely matching heating output to actual need
-   **Improves Comfort:** Maintains stable indoor temperature with less…
