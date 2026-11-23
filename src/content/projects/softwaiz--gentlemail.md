---
repo: "Softwaiz/gentlemail"
name: "gentlemail"
description: "Open-source multi-domain webmail, email API and webhooks on your own Cloudflare account. Unlimited mailboxes for $5/month."
readmeQualityOk: true
url: "https://github.com/Softwaiz/gentlemail"
homepage: "https://gentlemail.dev"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [79]
topics: ["cloudflare", "cloudflare-workers", "d1", "email", "email-api", "r2", "redwoodsdk", "self-hosted", "webhooks", "webmail"]
stars: 38
forks: 8
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 7
createdAt: "2026-11-12T18:35:13Z"
lastCommitAt: "2026-11-23T11:19:48Z"
lastReleaseAt: "2026-11-23T11:19:58Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 89
undervaluedScore: 44
maintainers: ["theophane05", "github-actions[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1455689179/44fd44a7-1add-4072-bae4-af2e6afea8d1"
discussionCount: 0
---

# GentleMail

Open-source, multi-domain webmail, email API and webhooks that run entirely on your own Cloudflare account.
One deployment serves any number of domains, mailboxes and people for the $5/month Workers Paid plan: no per-seat pricing, no API keys handed to a third party.

**Website:** https://gentlemail.dev · **Deploy guide:** https://gentlemail.dev/docs/deploy/ · **Docs:** https://gentlemail.dev/docs · **[Changelog](https://github.com/Softwaiz/gentlemail/blob/HEAD/CHANGELOG.md)**

- **Inbox and outbox**: a real webmail for people (conversations, search, attachments, spam folder, blocking) and a REST API for code.
- **Many domains, one deployment**: add domains and mailboxes in Admin, and choose which people can open which mailboxes.
- **Webhooks**: signed `message.received` and `message.sent` events with retries, to automate invoices, support alerts and more.
- **AI assistants (MCP)**: connect Claude, ChatGPT or Cursor by signing in; they search, read and answer mail in the mailboxes you tick, and ask before sending.
- **Your infrastructure**: mail is stored in your own D1 database and R2 bucket, and sent with Cloudflare Email Service.
