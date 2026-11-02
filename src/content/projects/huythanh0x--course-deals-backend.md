---
repo: "Huythanh0x/course_deals_backend"
name: "course_deals_backend"
description: "100% off coupons. Access paid courses for free at"
readmeQualityOk: true
url: "https://github.com/Huythanh0x/course_deals_backend"
homepage: "https://coupons.thanh0x.com"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [94]
topics: ["coupons", "spring-boot"]
stars: 5
forks: 1
openIssues: 0
closedIssues: 19
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2024-07-12T06:21:46Z"
lastCommitAt: "2026-11-02T15:17:21Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 92
undervaluedScore: 72
maintainers: ["Huythanh0x"]
openGraphImageUrl: "https://opengraph.githubassets.com/1ca3021cc7449a552a9e114139f0b61817249b4b95cb9b022dbc9063405985a4/Huythanh0x/course_deals_backend"
---

# Spring Boot: Course Deal Server (Kotlin)

The Course Deal Server is a modern, asynchronous application designed to crawl 100% off coupons from various websites and validate them. It provides a robust REST API for fetching, searching, and filtering free coupons, featuring password-less authentication and automated background processing.

## Features

- **Automated Crawling**: Discovers course deals from multiple aggregator sources.
- **Asynchronous Scraping**: Non-blocking background validation engine powered by **JobRunr**.
- **Modern Authentication**: Secure, biometric-ready auth supporting **Google**, **Apple**, and **Passkeys (WebAuthn)**.
- **Targeted Notifications**: Personalized **FCM push notifications** based on user-defined keywords and categories.
- **SSRF Hardened**: Strict URL validation to protect infrastructure.
- **Search & Filter**: Powerful querying capabilities with rich metadata (language, rating, reviews, etc.) for local client-side sorting.

## Architecture
Each module owns one responsibility; the two deployables (`coupon-api-service`, `coupon-crawler-service`) compose the rest.
- **`modules/coupon-common`**: Cross-cutting utilities used by nearly every…
