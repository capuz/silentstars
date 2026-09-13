---
repo: "Zacky-Ahmed/Job-Wire"
name: "Job-Wire"
description: "An always-on job alert system for catching new roles early."
readmeQualityOk: true
url: "https://github.com/Zacky-Ahmed/Job-Wire"
homepage: "https://jobwire.me"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [86]
topics: ["ejs", "email-automation", "express", "htmx", "job-alerts", "job-search", "linkedin", "mongodb", "nodejs", "web-scraping"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-08-13T08:29:40Z"
lastCommitAt: "2026-09-13T08:28:03Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 51
maintainers: ["Zacky-Ahmed"]
openGraphImageUrl: "https://opengraph.githubassets.com/cbf44b1a747cc95d483408c9ef8f2fae2b2a97566e4222bb42dae7759faaedfc/Zacky-Ahmed/Job-Wire"
---

</a>

# Job Wire: be early, by default.

**A job you'd be good at was posted while you were reading this.**<br>
By tonight it could be forty applications deep.

[Try Job Wire](https://jobwire.me) · four job sources · one watch · one useful email

</div>

---

## The whole product, in one hour

**09:14:** a role is posted. **09:16:** Job Wire catches it and emails you.
By 10:14, the application pile may already be too deep to matter.

Recruiters read the pile from the top. Being early is not an advantage over
the other candidates; it decides whether you are read **at all**.

That number is real: a PickMe internship measured during development took
**12 applications in its first 31 minutes**.

---

## How it works

One process. A web server and a poller sharing a Mongo pool, because splitting
them loses the shared connection and the in-memory schedule. That is the
entire reason this is not serverless.

### The sweep, step by step

```
every POLL_TICK_SECONDS:
  retry anything that failed to send last time
  find queries where nextFetchAt <= now
  for each, ONE AT A TIME:
      for every source that covers this country:
          fetch → parse → normalise
      new = fetched −…
