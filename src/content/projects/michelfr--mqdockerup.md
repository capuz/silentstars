---
repo: "MichelFR/MqDockerUp"
name: "MqDockerUp"
description: "Mqtt Docker Updater (MqDockerUp) is a tool for updating Docker containers. It provides an easy way to check for updates and publish changes to a MQTT broker."
readmeQualityOk: true
url: "https://github.com/MichelFR/MqDockerUp"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
stars: 116
forks: 25
openIssues: 14
closedIssues: 83
watchers: 4
contributors: 16
recentReleases: 0
createdAt: "2023-02-05T01:20:00Z"
lastCommitAt: "2026-09-07T08:34:36Z"
lastReleaseAt: "2023-02-12T21:36:23Z"
status: "thriving"
tags: ["needs_contributors"]
healthScore: 90
undervaluedScore: 46
maintainers: ["MichelFR", "dependabot[bot]", "Wheemer"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/597584935/609ff81c-c1f2-4969-b888-31262691ead6"
discussionCount: 5
---

<center><img alt="image" src="https://github.com/user-attachments/assets/cb264d67-7d72-4527-9a27-4599a6f9d1c2"></center>

<br>

# MqDockerUp
MqDockerUp is a tool that allows you to monitor and update your docker containers using MQTT and homeassistant. It can publish information about your containers, such as name, status, image, ports, etc., to an MQTT broker, and create or update corresponding entities in homeassistant. You can also send commands to start, stop, pause, unpause, restart, or remove your containers via MQTT or homeassistant. It even creates update entities in Homeassistant to make it easy to update your running containers. MqDockerUp is easy to set up and configure, and supports multiple platforms and architectures. With MqDockerUp, you can have a unified and convenient way to manage your docker containers from anywhere.

## How it works

MqDockerUp uses various Docker Registry APIs (DockerHub/GHCR/LSCR) to get information about containers and images. It then makes a request to the Docker Hub API to get information about the latest image tags. If there is a new version, it will publish the change to a specified MQTT broker.

## How to use

### Standalone…
