---
repo: "agent-labs-dev/fastbrowse"
name: "fastbrowse"
description: "A fast browser agent: Jev picks each action from what is on the page, an LLM reads and plans, and every claim in an answer cites a quote from the page."
readmeQualityOk: true
url: "https://github.com/agent-labs-dev/fastbrowse"
language: "Rust"
languages: ["Rust"]
languagePcts: [67]
topics: ["agents", "browser-agent", "llm", "python", "web-automation"]
stars: 232
forks: 30
openIssues: 89
closedIssues: 637
watchers: 0
contributors: 13
recentReleases: 10
createdAt: "2026-09-17T15:11:57Z"
lastCommitAt: "2026-11-23T12:08:58Z"
lastReleaseAt: "2026-09-20T16:11:31Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 96
undervaluedScore: 32
maintainers: ["cjber"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1374627765/d63ffb96-db58-4299-a61f-61c359a923c9"
---

**Give your agent a browser.**

A browser agent that picks from the controls a page actually has, cites the page for every claim, and keeps
credentials, irreversible actions and spending under the control of code.

---

## Why fastbrowse

- **It picks, it does not invent.** Each page is indexed into the controls it has, and
  [Jev](https://typesafe.ai), a choice model, picks one. It cannot click something that is not on the page, and
  there are no selectors to maintain. Widget keyboard actions are chosen from the keys their ARIA roles define plus the standard navigation and editing keys.
- **Answers you can check.** Every claim in a complete answer cites a verbatim quote from the page, with a link
  that scrolls to it. Pass a schema and get validated data back.
  Tasks over a whole list can follow its next-page links, checking each page and preserving its citations; a total
  the list states answers a count from the page that states it.
- **Code holds the keys.** Submit, pay, delete and send stop until you allow them. A secret is typed only on the
  origin it was declared for, and models only see its name. Step, time and dollar limits are enforced in code.
