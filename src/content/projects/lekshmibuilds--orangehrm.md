---
repo: "lekshmiBuilds/OrangeHRM"
name: "OrangeHRM"
description: "Playwright TypeScript Automation Framework for OrangeHRM using Page Object Model"
readmeQualityOk: true
url: "https://github.com/lekshmiBuilds/OrangeHRM"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-08-12T10:56:25Z"
lastCommitAt: "2026-08-28T12:06:47Z"
status: "thriving"
tags: []
healthScore: 86
undervaluedScore: 37
maintainers: ["lekshmiBuilds"]
openGraphImageUrl: "https://opengraph.githubassets.com/c1a6cafdfdab5468232b7303789c4bba26390eed6ab9eb086e1cfd35a420b9b6/lekshmiBuilds/OrangeHRM"
---

# OrangeHRM Playwright Automation Framework

## 📌 Project Overview

This is an end-to-end UI and API automation framework built using **Playwright** with **TypeScript** for the OrangeHRM application.

The framework follows the **Page Object Model (POM)** design pattern and focuses on clean architecture, reusable components, maintainability, and scalable test automation practices.

It includes automated coverage for authentication, dashboard validation, employee management, admin user management, logout, and authenticated API validation.

The framework also includes **GitHub Actions CI integration** to run smoke tests automatically on push and pull request events.

---

## 🚀 Tech Stack

- Playwright
- TypeScript
- Node.js
- Playwright Test Runner
- GitHub Actions
- dotenv

---

## 📂 Project Structure

```text
OrangeHRM
│
├── .github/workflows
│   └── playwright-smoke.yml
│
├── constants
│   ├── Routes.ts
│   └── Messages.ts
│
├── fixtures
│   └── fixtures.ts
│
├── pages
│   ├── BasePage.ts
│   ├── LoginPage.ts
│   ├── DashboardPage.ts
│   ├── AdminPage.ts
│   ├── AddUserPage.ts
│   ├── PIMPage.ts
│   ├── AddEmployeePage.ts
│   ├── EmployeeDetailsPage.ts
│   ├──…
