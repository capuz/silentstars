---
repo: "wjzdw007/x-crawler"
name: "x-crawler"
description: "X (Twitter) tweet crawler and intelligent summarization system"
originalDescription: "X (Twitter) 推文爬虫和智能总结系统"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/wjzdw007/x-crawler"
language: "Python"
languages: ["Python"]
languagePcts: [95]
stars: 17
forks: 9
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2025-10-11T08:25:23Z"
lastCommitAt: "2026-07-05T20:54:51Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 60
undervaluedScore: 47
maintainers: ["github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/928b28b1c747847d6388402c39b7b17b95d4503998820dd747d80db97855d6e3/wjzdw007/x-crawler"
---

# X Tweet Crawler System 🚀

A minimalist X (Twitter) tweet collection and LLM intelligent summarization system.

## ✨ Core Features

- 🔥 **Tweet Crawling** - Data collection based on HTTP API
- 🤖 **LLM Summarization** - Supports OpenRouter multi-model intelligent analysis
- 📝 **User Templates** - Customizable prompt template system

## 🚀 Quick Start

### 1. Install Dependencies
```bash
./setup.sh
# Or install manually
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```

### 2. Configuration

#### Method 1: Use .env file (recommended)
```bash
cp .env.example .env
# Edit the .env file and fill in your configuration
```

#### Method 2: Automatic Authentication Extraction
```bash
python auth_setup.py
```
Automatically opens the browser to log in to the X platform, extracts authentication information, and saves it to `.env` and `config.json`

#### Method 3: Use config.json
```bash
cp config_template.json config.json
# Edit config.json to fill in the configuration
```

**Priority**: `.env` > `config.json` > default values

### 3. Environment Variable Description
```bash
# X platform authentication
X_AUTH_TOKEN=your_auth_token
X_CT0_TOKEN=your_ct0_token…
