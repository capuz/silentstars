---
repo: "mwakidenis/Donation-System"
name: "Donation-System"
description: "👉 People can give money to the projects, groups, or individuals they want to help — instantly through M-Pesa."
readmeQualityOk: true
url: "https://github.com/mwakidenis/Donation-System"
homepage: "https://tech-donations.vercel.app/"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
topics: ["css", "javascript", "mpesa-api"]
stars: 20
forks: 1
openIssues: 3
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2025-12-07T11:05:25Z"
lastCommitAt: "2026-11-04T02:57:52Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 79
undervaluedScore: 49
maintainers: ["mwakidenis"]
openGraphImageUrl: "https://opengraph.githubassets.com/c536241afe92b5b6f91c744aee8396d533fe85ad5cdf37726dd215b60d64c42a/mwakidenis/Donation-System"
fundingLinks: ["GITHUB:https://github.com/mwakidenis"]
---

# 🚀Tech Charity Platform  

A modern web platform built with Next.js that enables charitable donations through M-Pesa integration, featuring a responsive dashboard for tracking donations and impact metrics.

## ✅Table of Contents 
- [Overview](#overview)  
- [Features](#features)
- [System Architecture](#system-architecture)  
- [Getting Started](#getting-started)
- [Environment Setup](#environment-setup) 
- [API Documentation](#api-documentation)     
- [Database Schema](#database-schema)
- [M-Pesa Integration](#m-pesa-integration) 
- [Contributing](#contributing)  
  
## 🙌Overview

Tech Charity is a platform designed to bridge the digital divide by facilitating technology education and resources for underserved communities. The platform enables seamless donations through M-Pesa integration and provides real-time tracking of impact metrics.

```mermaid 
---   
title: System Overview 
---
graph TB
    Donor((Donor))
    Admin((Admin))
    subgraph Tech_Charity_Platform[" Tech Charity Platform "]
        Frontend[Frontend<br/>Next.js]
        Backend[Backend<br/>Next.js API]
        DB[(MongoDB)]
        MPesa[M-Pesa API]
    end
    
    Donor -->|Makes donation| Frontend…
