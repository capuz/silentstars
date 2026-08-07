---
repo: "BetterWright/betterwright"
name: "betterwright"
description: "A persistent, policy-guarded Playwright browser for AI agents — network policy, encrypted credential vault, proof screenshots, and CAPTCHA solving. "
readmeQualityOk: true
url: "https://github.com/BetterWright/betterwright"
homepage: "https://betterwright.com"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [74, 25]
stars: 33
forks: 7
openIssues: 3
closedIssues: 2
watchers: 0
contributors: 8
recentReleases: 10
createdAt: "2026-07-13T15:56:44Z"
lastCommitAt: "2026-08-07T05:14:44Z"
lastReleaseAt: "2026-07-18T13:52:22Z"
status: "newborn"
tags: ["hidden_gem", "release_machine"]
healthScore: 87
undervaluedScore: 44
maintainers: ["CuriosityOS", "SSHdotCodes", "frgmt0"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1299472893/36f14c2b-bfc3-4f99-854f-eb219ca2535a"
discussionCount: 1
---

# BetterWright

**The token-efficient browser for AI agents.**

One persistent, policy-guarded browser your agent returns to turn after turn.
Drive it from your own agent (skill, MCP, or JS API) — or hand whole tasks to
its built-in browser agent and just read the answer.

</div>

```bash
npm install -g betterwright && betterwright init

betterwright run -c "await page.goto('https://example.com'); return page.title()"
# {"ok": true, "result": "Example Domain", ...}
```

`init` downloads the browser, wires up whichever agents it finds on your
machine, and proves it works by loading a real page. One command, no choices to
make up front.

**Compressed snapshots** instead of raw HTML or a full accessibility dump ·
read-only tasks finish in **one model turn** · persistent sessions so you
don't re-pay login and navigation cost every step.

---

## Two ways to use it

|  | You want… | You get… |
| --- | --- | --- |
| **[Integrated](#1-integrated--your-agent-drives-the-browser)** | your agent (Claude Code, Codex, Pi, any MCP client, your own code) to browse as one part of a bigger job | a skill, MCP server, or JS API through which *your* agent mans the browser step by step |
|…
