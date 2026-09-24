---
repo: "RealAhmedOsama/WareCommand"
name: "WareCommand"
description: "🏭 Modern Warehouse Management System built with .NET 8 | Clean Architecture | WinForms Desktop + ASP.NET Core Web | Enterprise-ready inventory management with barcode scanning, stock tracking, and comprehensive reporting"
readmeQualityOk: true
url: "https://github.com/RealAhmedOsama/WareCommand"
language: "C#"
languages: ["C#"]
languagePcts: [95]
topics: ["aspnetcore", "barcode-scanning", "bootstrap5", "clean-architecture", "csharp", "dotnet8", "entity-framework", "inventory-management-system", "logistics", "modern-ui"]
stars: 48
forks: 23
openIssues: 8
closedIssues: 125
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2025-08-31T00:55:37Z"
lastCommitAt: "2026-09-24T08:40:58Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 89
undervaluedScore: 58
maintainers: ["RealAhmedOsama"]
openGraphImageUrl: "https://opengraph.githubassets.com/89fc6c348484704ec2c62d0801eb9de587355252ff4eb9a25a133a223762474a/RealAhmedOsama/WareCommand"
---

# WareCommand

WareCommand is an early-stage warehouse management system implemented as a
.NET 10 modular monolith with an ASP.NET Core MVC host and a WinForms desktop
host. The repository is actively being modernized; local verification is not a
production-readiness or deployment claim.

## Current state

- PostgreSQL is the production persistence adapter.
- SQLite is an explicit local/demo adapter only.
- EF Core migrations are checked in and must be applied explicitly before a
  PostgreSQL host starts.
- Inventory, catalog, locations, receiving, putaway, picking, adjustments, and
  movement reporting are implemented at the domain/application level.
- Identity authentication, account management, lockout, password reset, audit
  events, permission-based RBAC, warehouse-scoped access, and explicit
  Web/WinForms user sessions are implemented locally;
  tenant isolation, external integrations, cycle counting, replenishment,
  shipping, load qualification, and production operations remain partial or
  planned.
- The authoritative implementation checkpoint is…
