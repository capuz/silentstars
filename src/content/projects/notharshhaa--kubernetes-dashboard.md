---
repo: "NotHarshhaa/kubernetes-dashboard"
name: "kubernetes-dashboard"
description: "𝘈 𝘬𝘶𝘣𝘦𝘳𝘯𝘦𝘵𝘦𝘴 𝘥𝘢𝘴𝘩𝘣𝘰𝘢𝘳𝘥 𝘪𝘯𝘵𝘦𝘨𝘳𝘢𝘵𝘦𝘥 𝘸𝘪𝘵𝘩 𝘩𝘦𝘢𝘭𝘵𝘩 𝘤𝘩𝘦𝘤𝘬𝘴, 𝘵𝘳𝘪𝘷𝘺 𝘴𝘤𝘢𝘯𝘯𝘪𝘯𝘨 𝘢𝘯𝘥 𝘩𝘦𝘢𝘭𝘵𝘩 𝘤𝘩𝘦𝘤𝘬𝘴 𝘧𝘰𝘳 𝘱𝘰𝘥𝘴"
readmeQualityOk: true
url: "https://github.com/NotHarshhaa/kubernetes-dashboard"
homepage: "https://kubernetes-dashboard.vercel.app"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
topics: ["health-check", "kubernetes", "kubernetes-dashboard", "kubernetes-metrics", "kubernetes-monitoring", "kubernetes-pods", "kubernetes-setup", "monitoring"]
stars: 59
forks: 52
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2023-09-04T13:21:01Z"
lastCommitAt: "2026-08-28T12:23:57Z"
status: "thriving"
tags: ["fork_magnet"]
healthScore: 80
undervaluedScore: 35
maintainers: ["NotHarshhaa"]
openGraphImageUrl: "https://opengraph.githubassets.com/81e31fd9f0589116aae44b4d6461ceb53b1081c2879530a1403e124b4bcd7377/NotHarshhaa/kubernetes-dashboard"
---

# Kubernetes Dashboard

A modern, responsive Kubernetes dashboard built with Next.js and shadcn/ui. Monitor and manage your Kubernetes clusters with a beautiful, intuitive interface.

## 🐳 Docker Hub

### Quick Start
```bash
# Pull and run the dashboard
docker run -p 3000:3000 harshhaareddy/kubernetes-dashboard:latest

# Access at http://localhost:3000
```

## 🚀 Usage

### Option 1: Docker (Recommended)
```bash
# Pull and run with Docker Hub image
docker run -p 3000:3000 harshhaareddy/kubernetes-dashboard:latest

# Or with Docker Compose
docker-compose up -d
```

### Option 2: Kubernetes
```bash
# Deploy to Kubernetes cluster
kubectl apply -f k8s/

# Access via NodePort: http://<node-ip>:30007
```

### Option 3: Local Development
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Access at http://localhost:3000
```

## 🌟 Features

- **Cluster Overview**: Real-time cluster metrics and health status
- **Pod Management**: View and monitor pods across all namespaces
- **Service Management**: Monitor services and configurations
- **Node Monitoring**: Track node health and resource utilization
- **Deployment Management**: Monitor deployment status…
