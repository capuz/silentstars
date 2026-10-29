---
repo: "mancavesports3024/sports-card-investment"
name: "sports-card-investment"
description: "Using Ebay APIs to get the raw, graded 9 and graded 10 price of sports cards "
readmeQualityOk: true
url: "https://github.com/mancavesports3024/sports-card-investment"
homepage: "https://www.mancavesportscardsllc.com/"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [96]
stars: 9
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2025-07-08T01:11:52Z"
lastCommitAt: "2026-10-29T14:06:31Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 76
undervaluedScore: 71
maintainers: ["mancavesports3024", "cursoragent", "cursor[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/8f713d1d80f2bf9ba6ba10bd66075f28ab0dc96edcb6b31b17e18ca04e7fde6c/mancavesports3024/sports-card-investment"
---

# Sports Card Sales Tracker

A React application that fetches and analyzes recent eBay sales of sports cards, categorizing them by grade (raw, PSA 9, PSA 10) and providing price analysis.

## Features

- 🔍 Search for sports cards on eBay
- 📊 Categorize results by grade (raw, PSA 9, PSA 10)
- 💰 Price analysis with averages and comparisons
- 📈 Investment insights and grade premiums
- 🔄 Automatic eBay token refresh
- 📱 Responsive design

## Setup

### 1. Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file based on `env.example`:
```bash
cp env.example .env
```

4. Configure your eBay API credentials in `.env`:

#### Option A: Manual Token (Simple)
```env
EBAY_AUTH_TOKEN=your_ebay_auth_token_here
```

#### Option B: Automatic Token Refresh (Recommended)
```env
EBAY_CLIENT_ID=your_ebay_client_id_here
EBAY_CLIENT_SECRET=your_ebay_client_secret_here
```

### 2. Getting eBay API Credentials

1. Go to [eBay Developer Portal](https://developer.ebay.com/my/keys)
2. Create a new application or use an existing one
3. Get your **Client ID** and **Client Secret**

### 3. Getting Your Initial…
