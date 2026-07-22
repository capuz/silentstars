---
repo: "purvanshjoshi/Price-Tracker"
name: "Price-Tracker"
description: "🛒 Price Scout: A high-performance real-time price comparison engine for Amazon & Flipkart. Built with a Chrome Extension frontend and a multithreaded Core Java backend for lightning-fast scraping & price history tracking."
readmeQualityOk: true
url: "https://github.com/purvanshjoshi/Price-Tracker"
language: "Java"
languages: ["Java"]
languagePcts: [63]
topics: ["amazon-scraper", "browser-extension", "chrome-extension", "e-commerce", "flipkart-scraper", "java-17", "jsoup", "multithreading", "mysql", "price-history"]
stars: 7
forks: 3
openIssues: 12
closedIssues: 9
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2026-03-10T14:07:16Z"
lastCommitAt: "2026-07-22T06:12:04Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem"]
healthScore: 86
undervaluedScore: 51
maintainers: ["purvanshjoshi", "dependabot[bot]", "antgar1006"]
openGraphImageUrl: "https://opengraph.githubassets.com/5365692ecd04cda8406e25662adb9aa2367e4c26472e7a41f4649fed58f24394/purvanshjoshi/Price-Tracker"
discussionCount: 6
---

<h1>Price Scout: Advanced Price Discovery & Analytics Platform</h1>
  <p>
  </p>
</div>

Price Scout is a high-performance, distributed price tracking solution comprising a containerized Java REST API and a manifest V3 Chrome extension. The system is engineered to provide real-time product intelligence by bypassing traditional caching layers and interfacing directly with e-commerce platforms through headless browser automation.

---

## System Architecture

The platform follows a decoupled client-server architecture. The Chrome Extension acts as the presentation and injection layer, while the Java Engine serves as the scraping and data persistence core.

### High-Level Component Diagram
```mermaid
graph TD
    subgraph Client_Environment [Chrome Extension]
        A[Content Script] -- Injects --> B[Quick Compare FAB]
        B -- Trigger --> C[Popup UI]
        C -- Fetch Request --> D[REST API Client]
    end

    subgraph Cloud_Backend [Java Engine - Hugging Face Space]
        D -- HTTPS/JWT --> E[Spark Java API Server]
        E -- Concurrent Task --> F[Engine Manager]
        F -- Parallel Execution --> G[Selenium Scraper Pool]
        G -- Direct Hit -->…
