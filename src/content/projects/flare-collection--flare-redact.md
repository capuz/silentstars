---
repo: "flare-collection/flare-redact"
name: "flare-redact"
description: "Keep secrets and PII out of logs, Sentry, LLM prompts and commits. Reads values, not field names. Zero dependencies."
readmeQualityOk: true
url: "https://github.com/flare-collection/flare-redact"
homepage: "https://flare-collection.github.io/flare-redact/"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [41, 23]
topics: ["data-masking", "gdpr", "nodejs", "pii", "privacy", "redaction", "security", "typescript", "zero-dependency", "ai-privacy"]
stars: 52
forks: 2
openIssues: 0
closedIssues: 1
watchers: 3
contributors: 3
recentReleases: 0
createdAt: "2026-07-14T08:40:17Z"
lastCommitAt: "2026-11-18T12:06:56Z"
lastReleaseAt: "2026-08-09T14:55:12Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 90
undervaluedScore: 24
maintainers: ["umudhasanli", "tuncayaliyev", "doofzoff"]
openGraphImageUrl: "https://opengraph.githubassets.com/2d9d8884a5830fe7f944eb0aef0f53e1f3e202ac123b51aa4ea2dc4de595b04d/flare-collection/flare-redact"
discussionCount: 0
---

It reads the values, not the field names. Zero dependencies.

  · <a href="docs/guide.md">Guide</a>
  · <a href="docs/guide.md#api">API</a>
  · <a href="https://flare-collection.github.io/flare-redact/guides/">Recipes</a>
  · <a href="https://flare-collection.github.io/flare-redact/llms-full.txt">Docs for AI assistants</a>

Someone logs an object, a session token was inside it, and now that token sits
in your log aggregator, your error tracker and an LLM provider's servers.
Redaction by field name only hides the fields you remembered to list.
**flare-redact** looks at the values themselves, so the AWS key pasted into a
`note` field and the card number inside a stack trace are masked too.

```js
import { redact } from 'flare-redact';

redact('User alice@corp.com paid with 4242 4242 4242 4242, token ghp_' + 'a'.repeat(36));
// → 'User a***@*** paid with **** **** **** 4242, token ghp_***'

redact({ user: 'bob@corp.com', password: 'hunter2', note: 'my key is AKIAIOSFODNN7EXAMPLE' });
// → { user: 'b***@***', password: '***', note: 'my key is AKIA***' }
```
