---
repo: "alfredang/AI-LMS-TMS"
name: "AI-LMS-TMS"
description: "Self-hosted AI-powered Learning & Training Management System for Singapore's SkillsFuture ecosystem. SSG/TPGateway integration, multi-role access, OTP login, e-attendance with QR check-in, learner feedback, training analytics, practice-exam registration, QuickBooks finance, AI agent automation and iOS/Android companion apps."
readmeQualityOk: true
url: "https://github.com/alfredang/AI-LMS-TMS"
homepage: "https://lms-tms.tertiaryinfotech.com"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [96]
topics: ["lms", "nextjs", "tms", "ssg", "wsq", "coolify", "postgresql", "skillsfuture", "training-management", "typescript"]
stars: 22
forks: 10
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 16
recentReleases: 0
createdAt: "2026-01-19T03:37:48Z"
lastCommitAt: "2026-11-23T10:17:59Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 90
undervaluedScore: 58
maintainers: ["alfredang", "feminaismail", "AmandaHalim"]
openGraphImageUrl: "https://opengraph.githubassets.com/1dc972adb213f391a7e358cdc1ba79cfe06255c84f7501b91eedd9aa31139043/alfredang/AI-LMS-TMS"
discussionCount: 1
---

# AI-LMS-TMS

Google Apps Script is an existing external automation tool. See the
[Google Automations registry and source-editor guide](https://github.com/alfredang/AI-LMS-TMS/blob/HEAD/docs/google-automations.md)
before developing overlapping Calendar, intake or communication processes.

---

---

## AI OAuth provider selection

[AI Provider settings](https://lms-tms.tertiaryinfotech.com/ai-provider) lets an
Admin or Training Provider connect OpenAI and Claude OAuth, test the connections,
and select the provider used by chat, courseware, assessments, audits, SEO and
supporting-document processing. OpenAI uses the Codex SDK with `gpt-5.6-sol`;
Claude uses the Claude SDK with `claude-opus-5`. Optional Claude fallback retries
failed OpenAI requests. Credentials are encrypted on the server.
See [setup and verification](https://github.com/alfredang/AI-LMS-TMS/blob/HEAD/docs/ai-provider.md).
