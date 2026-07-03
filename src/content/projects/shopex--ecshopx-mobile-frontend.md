---
repo: "ShopeX/ECShopX_mobile-frontend"
name: "ECShopX_mobile-frontend"
description: "ECShopX E-Commerce Mobile Frontend"
url: "https://github.com/ShopeX/ECShopX_mobile-frontend"
language: "JavaScript"
languages: ["JavaScript", "SCSS"]
languagePcts: [78, 22]
stars: 13
forks: 3
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 14
recentReleases: 0
createdAt: "2025-11-19T06:39:02Z"
lastCommitAt: "2026-07-03T06:22:58Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 78
undervaluedScore: 48
maintainers: ["sunshines233"]
openGraphImageUrl: "https://opengraph.githubassets.com/6587b371e7b43fcc18dd2297f3fc51d2af4f70dfa61c8d3a2bff9cb1d682a641/ShopeX/ECShopX_mobile-frontend"
---

### <p align="center">Mobile Frontend</p>

# Getting started
Node.js (current LTS) and npm are required to run the project. To be sure about the version compatibility you can enable Node's corepack.

### System Requirements
Required Node.js Version: 16.16.0. If your current version differs, follow the steps below to switch
```
nvm install 16.16.0 
nvm use 16.16.0
```

### Installation
```
cd ECShopX_mobile-frontend
npm i
```
### Configure the .env file
```shell
# Backend API Base URL
APP_BASE_URL=
  
# WebSocket Endpoint
APP_WEBSOCKET=

# System Tenant ID
APP_COMPANY_ID=1

# System Business Model (b2c:standard/b2b2c:platform)
APP_PLATFORM=standard
  
# Mobile Web App Payment Callback Domain，used for payment result notifications.
APP_CUSTOM_SERVER=

# App Homepage Path
APP_HOME_PAGE=/pages/index

# WeChat Mini Program AppID，required for compiling the mini program
APP_ID=wx1e25e45145b70faa

# Map Service API Key, used for geocoding user LBS coordinates and providing location-based offline store recommendations.
APP_MAP_KEY=

# Mapping Service Provider Name
APP_MAP_NAME=

# Media files OSS Server URL
APP_IMAGE_CDN=

# Store Operations Tool Domain Address
APP_DIANWU_URL=

# Merchant…
