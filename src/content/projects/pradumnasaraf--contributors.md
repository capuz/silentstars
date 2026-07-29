---
repo: "Pradumnasaraf/Contributors"
name: "Contributors"
description: "Contributors is a GraphQL API written in Go. It stores data in MongoDB and uses Redis to cache and rate-limit requests. For monitoring, it uses Prometheus (Custom Metrics) and Grafana."
readmeQualityOk: true
url: "https://github.com/Pradumnasaraf/Contributors"
language: "Go"
languages: ["Go"]
languagePcts: [90]
topics: ["go", "mongodb", "gin", "golang", "docker", "graphql", "docker-images", "kubernetes", "redis", "hacktoberfest"]
stars: 25
forks: 3
openIssues: 0
closedIssues: 2
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2023-02-13T14:31:37Z"
lastCommitAt: "2026-07-29T06:16:38Z"
lastReleaseAt: "2024-09-16T11:48:26Z"
status: "thriving"
tags: ["hidden_gem", "funded"]
healthScore: 98
undervaluedScore: 45
maintainers: ["dependabot[bot]", "Pradumnasaraf"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/github-production-repository-image-32fea6/601178760/faaeec06-19b7-4dc5-84cb-04d56acf808c?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20260729%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20260729T061705Z&X-Amz-Expires=300&X-Amz-Signature=f8d647ef33acc3d20ec9fe796d29556a55e775eedea7f91d04337a4f440d5f28&X-Amz-SignedHeaders=host&jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoiaHR0cHM6Ly9yZXBvc2l0b3J5LWltYWdlcy5naXRodWJ1c2VyY29udGVudC5jb20vIiwia2V5Ijoia2V5MSIsImV4cCI6MTc4NTMwNjEyNSwibmJmIjoxNzg1MzA1ODI1LCJwYXRoIjoicmVwb3NpdG9yeS1pbWFnZXMuZ2l0aHVidXNlcmNvbnRlbnQuY29tIn0.BxxtP2BMI_lScicMME3ryGHHooSn2kdN17ks5ja8x0Q"
fundingLinks: ["GITHUB:https://github.com/Pradumnasaraf"]
discussionCount: 0
---

## Contributors

**Contributors** is a GraphQL API written in Go. It stores data in MongoDB and uses Redis to cache and rate-limit requests. For monitoring, it integrates with Prometheus (Custom Metrics) and Grafana. The purpose of this API is to store open-source contributors and their contributions to various projects.

https://github.com/user-attachments/assets/49bb79f6-5d63-4ab5-b7b3-92b9bcb783db

## Using and Developing

### Local Development

#### Prerequisites

To run the project locally, ensure you have the following installed:

- [Golang](https://golang.org/)
- [MongoDB](https://www.mongodb.com/)
- [Redis](https://redis.io/)
- [Prometheus and Grafana](https://prometheus.io/docs/visualization/grafana/) (Only if you need monitoring)

> **Note:**  
> Redis, Prometheus, and Grafana can be run using Docker. It's not feasible to run some services in Docker and others locally. For consistency, it is recommended to use Docker Compose to run all services.

#### Steps for Local Setup

1. Copy the `.env.example` file to `.env` and update the values with your own configuration. Use the following bash command:
   ```bash
   cp .env.example .env
   ```

2. Install dependencies and…
