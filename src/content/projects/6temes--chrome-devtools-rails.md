---
repo: "6temes/chrome_devtools_rails"
name: "chrome_devtools_rails"
description: "Serve com.chrome.devtools.json for Chrome automatic workspace setup"
readmeQualityOk: true
url: "https://github.com/6temes/chrome_devtools_rails"
language: "HTML"
languages: ["HTML", "Ruby"]
languagePcts: [57, 41]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 1
createdAt: "2025-05-19T06:31:20Z"
lastCommitAt: "2026-07-13T06:38:26Z"
lastReleaseAt: "2026-06-11T10:26:49Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 83
undervaluedScore: 51
maintainers: ["dependabot[bot]", "6temes"]
openGraphImageUrl: "https://opengraph.githubassets.com/babe8f29a1576de58ecc22aac9eab56b7f673cae5f68fc761ca1cb1b13d0b93d/6temes/chrome_devtools_rails"
---

# ChromeDevtoolsRails

This gem provides a minimal Rails engine that automatically serves the Chrome DevTools workspace mapping file at:

```text
/.well-known/appspecific/com.chrome.devtools.json
```

When Chrome accesses this file from your local development server, it enables **automatic workspace folder mapping**, allowing you to edit and save source files (JS, CSS, etc.) directly from Chrome DevTools into your local Rails project.

This engine is **automatically mounted** and only active in **development mode**.

---

## ⚠️ Rails 8.2+ ships this natively

As of **Rails 8.2**, Rails serves this endpoint itself through a built-in `Rails::DevToolsController` ([rails/rails#56245](https://github.com/rails/rails/pull/56245)). On Rails 8.2 or newer, uncomment the generated devtools route in `config/routes.rb` and you no longer need this gem.

This gem is still useful on **Rails 8.0 and 8.1**, which have no native support. When it detects Rails 8.2+, it keeps serving the endpoint but emits a deprecation warning so you know you can switch to the native controller and drop the dependency.

---

## 🚀 Usage

1. Visit your Rails app on `localhost`.
2. Open Chrome DevTools → **Sources**…
