---
repo: "esofar/dddify-admin"
name: "dddify-admin"
description: "A modern full-stack solution for mid- and back-office systems based on ASP.NET Core and React"
originalDescription: "基于 ASP.NET Core 与 React 的现代化中后台全栈解决方案"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/esofar/dddify-admin"
language: "TypeScript"
languages: ["TypeScript", "C#"]
languagePcts: [76, 23]
stars: 8
forks: 3
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-05-18T14:40:57Z"
lastCommitAt: "2026-10-31T09:53:17Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 64
undervaluedScore: 31
maintainers: ["esofar"]
openGraphImageUrl: "https://opengraph.githubassets.com/7cbb61fa3092709dbc704d6caeb289ccc924f4b7de3e641aba70d89bc0173947/esofar/dddify-admin"
---

# Dddify Admin

Dddify Admin is a modern admin system template based on **ASP.NET Core + React**. The backend uses DDD and Clean Architecture layering, and the frontend is built with Umi Max, Ant Design, and Ant Design Pro. It includes common admin capabilities out of the box, such as authentication and authorization, users, roles, permissions, departments, and data dictionaries, making it a suitable foundation for enterprise-grade management systems.

## Features

- DDD layered architecture: Domain, Application, Infrastructure, and Web have clear responsibilities
- CQRS-style use case organization: Command handles write operations, Query handles read operations
- JWT authentication with refresh token mechanism
- Authorization control based on roles and permission codes
- Foundation modules for users, roles, permissions, departments, data dictionaries, and more
- PostgreSQL + EF Core data persistence
- Redis caching, distributed locks, and session helper capabilities
- OpenAPI + Scalar API documentation
- React 19, TypeScript, Umi Max, and Ant Design Pro frontend project
- Basic Chinese and English internationalization support

## Tech Stack

### Backend

- .NET 10
- ASP.NET Core…
