---
repo: "ofri-peretz/eslint"
name: "eslint"
description: "Security and code-quality ESLint plugins — 495 rules across 31 plugins: 290 security rules mapped to CWE + OWASP, 107 quality, 98 React/a11y. ESLint 8.40/9/10 + Oxlint. The lint layer AI-generated code needs."
readmeQualityOk: true
url: "https://github.com/ofri-peretz/eslint"
homepage: "https://eslint.interlace.tools"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [75]
topics: ["ai-security", "code-quality", "cwe", "devsecops", "eslint", "eslint-plugin", "javascript", "linter", "nodejs", "owasp"]
stars: 20
forks: 0
openIssues: 20
closedIssues: 86
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2025-10-27T03:55:42Z"
lastCommitAt: "2026-11-20T12:21:09Z"
lastReleaseAt: "2026-01-11T11:06:31Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 96
undervaluedScore: 65
maintainers: ["ofri-peretz", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1083987889/5be3d7ce-236c-47d2-8ae9-0d0e90ef2bb7"
---

&nbsp;&nbsp;
  &nbsp;&nbsp;

  to your team and to the AI writing half your code.<br />
  Every finding ships with a CWE, an OWASP mapping, and the fix.

  &nbsp;

---

## Install one plugin, catch a real bug

```bash
npm i -D eslint eslint-plugin-postgresql-security
```

```js
// eslint.config.mjs
import pg from 'eslint-plugin-postgresql-security';

export default [pg.configs.recommended];
```

```js
// app.js
import { Pool } from 'pg';
const pool = new Pool();

export async function getUser(id) {
  return pool.query(`SELECT * FROM users WHERE id = '${id}'`); // ← interpolated
}
```

```text
app.js
  5:21  error  🔒 Unsafe SQL query construction detected (template literal). | CRITICAL
   Fix: Use parameterized queries ($1, $2) instead of interpolating values.
   https://owasp.org/www-community/attacks/SQL_Injection   postgresql-security/no-unsafe-query
```
