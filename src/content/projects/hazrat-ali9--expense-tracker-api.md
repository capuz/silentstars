---
repo: "Hazrat-Ali9/Expense-Tracker-API"
name: "Expense-Tracker-API"
description: "✈ Expense 🛫 Tracker 🚀 API 🛸 is 🚠 a 🚟 production 🚁 ready 🚤 RESTful 🛼 backend 🚞 managing 🚝 personal 🚋 income 🚂 expense 🏦 transactions 🛖 Built 🏨 with 🏯 FastAPI 🏪 PostgreSQL 🕌 SQLAlchemy 🕍 Pydantic ☂ JWT ⛱ authentication 🏛 the 🏠 system 🔫 provides 🎮 a 🧸 secure 🎒scalable 📟 foundation ☎ modern 📚 personal 📙 finance applications"
readmeQualityOk: true
url: "https://github.com/Hazrat-Ali9/Expense-Tracker-API"
homepage: "https://github.com/Hazrat-Ali9/Expense-Tracker-API"
language: "Python"
languages: ["Python"]
languagePcts: [98]
topics: ["ai", "api", "api-rest", "app-analytics", "expense-tracker", "python-lambda"]
stars: 11
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-08-25T17:12:54Z"
lastCommitAt: "2026-11-16T04:25:57Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 59
undervaluedScore: 16
maintainers: ["Hazrat-Ali9"]
openGraphImageUrl: "https://opengraph.githubassets.com/056e3258e4f9900e650258b91febb93de571ea1988e3be931867532c850b344c/Hazrat-Ali9/Expense-Tracker-API"
---

# Expense Tracker API

A production-ready personal expense tracker built with FastAPI, SQLAlchemy,
PostgreSQL, Pydantic, and JWT authentication. Every transaction query is scoped
to the authenticated user, preventing users from viewing or changing another
user's data.

## Features

- User registration with Argon2 password hashing
- OAuth2-compatible login with expiring JWT access tokens
- Create, list, read, update, and delete income or expense transactions
- Filter by transaction type, category, minimum amount, and maximum amount
- Pydantic request validation plus database-level integrity constraints
- Interactive OpenAPI documentation at `/docs`
- Six pytest cases covering the required CRUD lifecycle, filtering, and ownership
- Docker Compose development environment and Render Blueprint deployment

## API endpoints

| Method | Endpoint | Description | Authentication |
|---|---|---|---|
| `POST` | `/auth/register` | Register a user | No |
| `POST` | `/auth/login` | Receive a bearer token | No |
| `POST` | `/transactions` | Create a transaction | Yes |
| `GET` | `/transactions` | List the current user's transactions | Yes |
| `GET` | `/transactions/filter` | Filter the current…
