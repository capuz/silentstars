---
repo: "porcupine-md/anoa-browser"
name: "anoa-browser"
description: "Headless browser with full Chrome DevTools Protocol (CDP) support. Distributed as a single self-contained binary — no Node.js or npm required."
readmeQualityOk: true
url: "https://github.com/porcupine-md/anoa-browser"
language: "C++"
languages: ["C++", "JavaScript"]
languagePcts: [48, 34]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 4
recentReleases: 7
createdAt: "2026-04-23T13:11:23Z"
lastCommitAt: "2026-08-12T05:13:29Z"
lastReleaseAt: "2026-08-01T16:26:57Z"
status: "thriving"
tags: ["release_machine"]
healthScore: 85
undervaluedScore: 55
maintainers: ["anak10thn", "jonggrang-dev", "IhwanID"]
openGraphImageUrl: "https://opengraph.githubassets.com/573daa42ad98cb23791ce89112e59f70f63049aa2c61d5a128a879ae6ebc7a54/porcupine-md/anoa-browser"
---

</p>

  A browser you drive from anywhere — a script, a terminal, or a window.<br>
  One self-contained binary. No Node.js, no npm, no separate driver.
</p>

</p>

---

Full [Chrome DevTools Protocol](https://chromedevtools.github.io/devtools-protocol/) support, so Playwright, Puppeteer and anything else that speaks CDP connect to it as they would to Chrome.

```bash
anoa --headless --port 9222     # start it once, leave it running
anoa open example.com           # then talk to it
anoa snapshot -i                # see what is on the page, with refs
anoa click @e2                  # act on it
anoa terminal                   # or watch it happen, in your terminal
```

The browser is the session. Every command above is a separate process that
attaches, does one thing and exits — the page, the cookies and the scroll
position survive between them, so commands chain with `&&` for free.

## Features

- **A command per action, for agents** — `open`, `snapshot`, `click`, `fill`, `get`, `eval`, `wait`, `screenshot`. `snapshot` hands back refs (`@e1`, `@e2`) that later commands target, and clicks are hit-tested, so a button under a consent banner is reported rather than clicked through.…
