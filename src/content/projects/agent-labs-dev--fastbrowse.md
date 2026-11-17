---
repo: "agent-labs-dev/fastbrowse"
name: "fastbrowse"
description: "A fast browser agent: Jev picks each action from what is on the page, an LLM reads and plans, and every claim in an answer cites a quote from the page."
readmeQualityOk: true
url: "https://github.com/agent-labs-dev/fastbrowse"
language: "Rust"
languages: ["Rust"]
languagePcts: [65]
topics: ["agents", "browser-agent", "llm", "python", "web-automation"]
stars: 231
forks: 29
openIssues: 39
closedIssues: 524
watchers: 0
contributors: 12
recentReleases: 10
createdAt: "2026-09-17T15:11:57Z"
lastCommitAt: "2026-11-17T14:34:29Z"
lastReleaseAt: "2026-09-20T16:11:31Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 98
undervaluedScore: 32
maintainers: ["cjber", "furqanrydhan", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/be370cf53d62bfc7b9bbacbc62c3ac5056df3256fc25695d5f0d84bbce19df3e/agent-labs-dev/fastbrowse"
---

**Give your agent a browser.**

A browser agent that picks from the controls a page actually has, cites the page for every claim, and keeps
credentials, irreversible actions and spending under the control of code.

---

## Why fastbrowse

- **It picks, it does not invent.** Each page is indexed into the controls it has, and
  [Jev](https://typesafe.ai), a choice model, picks one. It cannot click something that is not on the page, and
  there are no selectors to maintain. Widget keyboard actions are chosen from the keys their ARIA roles define.
- **Answers you can check.** Every claim in a complete answer cites a verbatim quote from the page, with a link
  that scrolls to it. Pass a schema and get validated data back.
  Tasks over a whole list can follow its next-page links, checking each page and preserving its citations.
- **Code holds the keys.** Submit, pay, delete and send stop until you allow them. A secret is typed only on the
  origin it was declared for, and models only see its name. Step, time and dollar limits are enforced in code.
- **Your own Chrome.** The CLI runs in the Chrome you are signed in to, through the
  [fastbrowse…
