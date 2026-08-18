---
repo: "andey0Saikiran/tableau-lineage"
name: "tableau-lineage"
description: "Privacy-first, in-browser Tableau .twbx lineage visualizer. Map calculated-field dependencies, parameters, stored SQL (Custom SQL, Initial SQL, stored procs, RAWSQL), and metadata as an interactive graph and searchable data dictionary. Nothing is uploaded. Free and open source."
readmeQualityOk: true
url: "https://github.com/andey0Saikiran/tableau-lineage"
homepage: "https://tableau-lineage.com"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [71]
topics: ["business-intelligence", "calculated-fields", "data-dictionary", "data-lineage", "data-visualization", "privacy", "react", "tableau", "twbx", "typescript"]
stars: 7
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-06-24T03:00:40Z"
lastCommitAt: "2026-08-18T03:14:25Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 77
undervaluedScore: 41
maintainers: ["andey0Saikiran"]
openGraphImageUrl: "https://opengraph.githubassets.com/013a7cf65df6616fe5e3a66e01070f53184ed7bcdd24eb78a37f559adfbf7038/andey0Saikiran/tableau-lineage"
---

# Tableau Workbook Auditor

Find what is wrong with any Tableau workbook (`.twbx`), and map every dependency inside
it, **entirely in your browser**. Unused fields, duplicate calculations, performance
problems, full calculated-field lineage, filters, dashboards and stored SQL. Nothing is
uploaded, stored, or sent anywhere.

🔗 **Live:** https://tableau-lineage.com
📦 **MCP server:** [`tableau-lineage-mcp`](https://www.npmjs.com/package/tableau-lineage-mcp)

---

## Why

Inheriting someone else's Tableau workbook means reverse-engineering dozens of
calculated fields by hand to answer one question: where does this number come from, and
what breaks if I change it?

Two more questions come up just as often and have no free answer:

- **What in here is dead?** Tableau has no built-in way to list unused fields; the
  request has been open on the community forum since 2015.
- **Why is it slow?** Tableau's Workbook Optimizer needs a Creator licence, and Catalog
  needs Data Management on Server or Cloud.

This reads the workbook file itself and answers all three, free, with no licence and no
account. Because workbooks often carry sensitive data, everything runs locally: the
`.twbx` never…
