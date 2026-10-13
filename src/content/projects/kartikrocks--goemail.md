---
repo: "KARTIKrocks/goemail"
name: "goemail"
description: "A batteries-included Go library for sending email — SMTP, templates, attachments, async queue, middleware, DKIM, and pluggable providers."
readmeQualityOk: true
url: "https://github.com/KARTIKrocks/goemail"
homepage: "https://kartikrocks.github.io/goemail/"
language: "Go"
languages: ["Go"]
languagePcts: [90]
topics: ["async", "attachments", "dkim", "email", "email-sender", "email-template", "go", "go-library", "golang", "mailer"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 2
createdAt: "2026-03-23T05:16:14Z"
lastCommitAt: "2026-10-13T10:58:29Z"
lastReleaseAt: "2026-09-14T11:23:31Z"
status: "thriving"
tags: ["hidden_gem", "funded"]
healthScore: 88
undervaluedScore: 58
maintainers: ["KARTIKrocks", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/b02500eaa105d34cae868164010d2df13f1d30e5710e81140088caeff5e0b69c/KARTIKrocks/goemail"
fundingLinks: ["GITHUB:https://github.com/KARTIKrocks"]
---

Production-ready email package for Go with SMTP support, templating,
  retries, connection pooling, DKIM signing, and provider adapters for
  SendGrid, Mailgun, and AWS SES.

## Why goemail?

`net/smtp` gets you a connection and a `DATA` command. Everything past that —
the parts that turn "I can send one email" into "I can run this in
production" — is what goemail provides:

| Capability | goemail | Raw `net/smtp` |
| --- | --- | --- |
| Retry with exponential backoff | ✓ | You build it |
| Connection pooling for high throughput | ✓ | You build it |
| Rate limiting | ✓ | You build it |
| DKIM signing (RSA-SHA256 / Ed25519-SHA256) | ✓ | You build it |
| HTML templates, attachments, batch sending | ✓ | You build it |
| Provider HTTP adapters (SendGrid, Mailgun, AWS SES) | ✓ | You build it |
| Middleware (logging, metrics, hooks, recovery) | ✓ | You build it |
| Header injection protection, address validation | ✓ | You build it |
| Async sending with a buffered worker queue | ✓ | You build it |

goemail isn't a replacement for `net/smtp` — the default `Sender` is built on
top of it. It's the reliability and delivery layer around raw SMTP that most
services sending email end up…
