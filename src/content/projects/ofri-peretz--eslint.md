---
repo: "ofri-peretz/eslint"
name: "eslint"
description: "Security & code-quality ESLint plugins — 350+ CWE-mapped rules across 18 domains, ESLint + Oxlint. The lint layer AI-generated code needs."
readmeQualityOk: true
url: "https://github.com/ofri-peretz/eslint"
homepage: "https://eslint.interlace.tools"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [78]
topics: ["ai-security", "code-quality", "cwe", "devsecops", "eslint", "eslint-plugin", "javascript", "linter", "nodejs", "owasp"]
stars: 15
forks: 0
openIssues: 0
closedIssues: 28
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2025-10-27T03:55:42Z"
lastCommitAt: "2026-08-23T04:08:51Z"
lastReleaseAt: "2026-01-11T11:06:31Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 62
maintainers: ["ofri-peretz", "github-actions[bot]", "base44-builder[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/f81d1e1ae8da29c9eef1339dfdb9d1bb5921d13add1428b04bcd74679a694532/ofri-peretz/eslint"
---

&nbsp;&nbsp;
  &nbsp;&nbsp;
</p>

  <strong>The Interlace ESLint Ecosystem</strong> — security and code-quality rules that explain themselves,<br />
  to your team and to the AI writing half your code.<br />
  Every finding ships with a CWE, an OWASP mapping, and the fix.
</p>

</p>

</p>

  &nbsp;
</p>
  <strong>⭐ <a href="https://github.com/ofri-peretz/eslint">Star the repo</a></strong> &nbsp;·&nbsp;
</p>
  <sub>If these plugins caught a real bug for you, a star is the signal that keeps the ecosystem maintained.</sub>
</p>

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
   https://owasp.org/www-community/attacks/SQL_Injection…
