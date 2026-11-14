---
repo: "Poushali-02/seedreach"
name: "seedreach"
description: "Finds startups that are hiring, reads what they build, finds the founder's email, and drafts a personalised cold email in your Gmail. You review and send; it never does."
readmeQualityOk: true
url: "https://github.com/Poushali-02/seedreach"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["cli", "cold-email", "gemini", "github-actions", "gmail-api", "internships", "job-search", "llm", "python"]
stars: 11
forks: 3
openIssues: 14
closedIssues: 8
watchers: 0
contributors: 3
recentReleases: 8
createdAt: "2026-10-27T14:14:48Z"
lastCommitAt: "2026-11-14T10:44:09Z"
lastReleaseAt: "2026-11-14T10:22:54Z"
status: "newborn"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "release_machine"]
healthScore: 86
undervaluedScore: 51
maintainers: ["Poushali-02", "musmanghani13", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1435825856/49fedd66-3098-4990-9987-1021e771114b"
discussionCount: 0
---

# seedreach

Finds early-stage startups that are hiring, reads what they build, finds a founder's email, and saves a
personalised cold email to your **Gmail Drafts**. You review it and press Send. It never sends anything itself.

[Watch the full 80-second demo with sound (MP4)](https://github.com/Poushali-02/seedreach/releases/download/v0.1.0/seedreach-demo.mp4)

> **Status:** early (v0.3). Built for my own internship search and maintained in my spare time.
> Issues and pull requests are welcome; see [CONTRIBUTING.md](https://github.com/Poushali-02/seedreach/blob/HEAD/CONTRIBUTING.md).

A CLI that finds early-stage startups, reads their website with an LLM, finds a founder's email, and
saves a personalized plain-text cold email to your **Gmail Drafts** for you to review and send yourself.

It is built for people looking for internships or early jobs at small startups. You describe yourself once
in `profile.json`, and every draft picks the project of yours that best matches the company's domain.

**It never sends email.** The Gmail client only calls `drafts().create`, and a test fails if a `send`
call is ever added. Every message waits in your Drafts until you read it and press…
