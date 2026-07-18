---
repo: "chuzouX/phira-mp-nodejsver"
name: "phira-mp-nodejsver"
description: "Phira Multiplayer Server implementation in Node.js"
originalDescription: "Phira 多人联机服务器的 Node.js 实现"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/chuzouX/phira-mp-nodejsver"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [96]
stars: 9
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 3
createdAt: "2026-02-05T14:49:31Z"
lastCommitAt: "2026-07-18T05:45:49Z"
lastReleaseAt: "2026-07-17T07:44:14Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 46
maintainers: ["chuzouX", "Dmocken"]
openGraphImageUrl: "https://opengraph.githubassets.com/7bbfcea15eabd48add6f65cfffb0ca23f5e34921382349b07b4299fb8c78f34c/chuzouX/phira-mp-nodejsver"
---

# Phira Multiplayer Server (Node.js)

High-performance, scalable Phira rhythm game multiplayer server (Node.js/TypeScript implementation).

## 📚 Documentation

- [中文文档](https://github.com/chuzouX/phira-mp-nodejsver/blob/HEAD/docs/README-CN.md)
- [English Documentation](https://github.com/chuzouX/phira-mp-nodejsver/blob/HEAD/docs/README.md)
- [Plugin Development Guide](https://github.com/chuzouX/phira-mp-nodejsver/blob/HEAD/docs/Plugins.md)

## ✨ Features

- 🚀 **High Performance** - TCP/WebSocket dual protocol support
- 🔌 **Plugin System** - Powerful plugin architecture, easy to extend
- 🌐 **Federated Network** - Decentralized multi-server interconnection
- 📊 **Web Panel** - Complete management interface
- 🛡️ **Security Mechanism** - IP banning, blacklist, CAPTCHA

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Configure environment variables
cp .env.example .env
# Edit .env to configure server parameters

# Start development server
npm run dev

# Or production environment
npm start
```

## 📖 Directory Structure

```
phira-mp-server/
├── src/              # Source code
├── plugins/          # Plugin directory
├── config/           # Runtime configuration…
