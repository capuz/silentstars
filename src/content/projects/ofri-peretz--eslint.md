---
repo: "ofri-peretz/eslint"
name: "eslint"
description: "Security and code-quality ESLint plugins — 477 rules across 30 packages: 272 security rules mapped to CWE + OWASP, 107 quality, 98 React/a11y. ESLint 8.40/9/10 + Oxlint. The lint layer AI-generated code needs."
readmeQualityOk: true
url: "https://github.com/ofri-peretz/eslint"
homepage: "https://eslint.interlace.tools"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [79]
topics: ["ai-security", "code-quality", "cwe", "devsecops", "eslint", "eslint-plugin", "javascript", "linter", "nodejs", "owasp"]
stars: 20
forks: 0
openIssues: 4
closedIssues: 73
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2025-10-27T03:55:42Z"
lastCommitAt: "2026-11-03T10:52:14Z"
lastReleaseAt: "2026-01-11T11:06:31Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 98
undervaluedScore: 65
maintainers: ["ofri-peretz", "dependabot[bot]", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/d5078227163db9eb811c745074dcddf4f06ed107c0426c941b4655482b2759e1/ofri-peretz/eslint"
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

That message is the whole thesis. **Severity** so you can triage it, **the fix** so
a human doesn't have to go looking, and **a citation** so an LLM asked to "fix the
lint errors" produces a parameterized query instead of a plausible-looking escape
helper. Machine-readable equivalents ship via the
[SARIF…
