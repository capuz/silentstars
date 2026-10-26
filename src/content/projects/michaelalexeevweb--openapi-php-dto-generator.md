---
repo: "michaelalexeevweb/openapi-php-dto-generator"
name: "openapi-php-dto-generator"
description: "Generate PHP DTOs from OpenAPI and validate incoming HTTP requests against OpenAPI schema"
readmeQualityOk: true
url: "https://github.com/michaelalexeevweb/openapi-php-dto-generator"
language: "PHP"
languages: ["PHP"]
languagePcts: [97]
topics: ["api", "deserialization", "dto", "dto-generator", "openapi", "openapi-validation", "php", "request-validation", "serializer", "symfony"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-03-09T20:22:36Z"
lastCommitAt: "2026-10-26T09:18:00Z"
lastReleaseAt: "2026-06-16T19:33:52Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 88
undervaluedScore: 53
maintainers: ["michaelalexeevweb", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/b85f9c29a5f1cfe3028fc43fc54b85e4ae22b684418ef8bf3f589996f232b8bc/michaelalexeevweb/openapi-php-dto-generator"
fundingLinks: ["KO_FI:https://ko-fi.com/michaelalexeevweb"]
---

# OpenAPI PHP DTO Generator

### Your OpenAPI document, enforced by the PHP it generates.

Point it at an OpenAPI 3.0 / 3.1 spec. Get immutable, strictly-typed PHP 8.3 DTOs whose **generated code
enforces the schema, not just the types** — `oneOf`, `minimum`, `pattern`, `format`,
`unevaluatedProperties` and the rest of a broad, tested vocabulary — for Symfony, Laravel,
`spatie/laravel-data`, Yii3, or standalone.

Generate DTOs from OpenAPI, deserialize a Symfony `Request` or any PSR-7 request straight into them,
validate incoming HTTP requests against the OpenAPI schema, and normalize back to arrays or JSON — one
package, and no spec parsing at runtime.

- **In:** an OpenAPI 3.0 / 3.1 document, YAML or JSON.
- **Out:** one PHP class per schema — from `components.schemas` **and** from each operation's body,
  query and path parameters.
- **Use it for:** server-side request DTOs, PATCH-safe presence, response normalization.
- **Not for:** generating an API client or SDK — see [what it does not do](#what-it-does-not-do).
- **Start with:** `runtime` mode, the default. Reach for a framework mode only when you want that
  framework's own validation output.

```bash
composer require…
