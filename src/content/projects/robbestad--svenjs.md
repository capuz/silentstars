---
repo: "robbestad/svenjs"
name: "svenjs"
description: "A tiny JavaScript UI runtime for composable web apps — JSX, reactive state, SSR, and no-build browser use."
readmeQualityOk: true
url: "https://github.com/robbestad/svenjs"
homepage: "https://svenjs.xyz"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [69, 23]
topics: ["hydration", "javascript", "jsx", "no-build", "reactive-programming", "server-side-rendering", "state-management", "typescript", "ui-framework", "virtual-dom"]
stars: 45
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 1
createdAt: "2015-08-11T06:31:53Z"
lastCommitAt: "2026-09-12T07:27:59Z"
lastReleaseAt: "2026-09-05T15:49:51Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 90
undervaluedScore: 48
maintainers: ["robbestad"]
openGraphImageUrl: "https://opengraph.githubassets.com/862ca7454c51f46bcb80ff7df546bc31efc41a495e12ed8efaa9b5f73fb7afe7/robbestad/svenjs"
---

</p>

# SvenJS

**A tiny JavaScript UI runtime for composable web apps.** Start with one HTML file, then grow into JSX, SSR, and hydration without changing your mental model.

[Website](https://svenjs.vercel.app/) · [Playground](https://svenjs.vercel.app/play/) · [Documentation](https://svenjs.vercel.app/docs/) · [Mission Control demo](https://svenjs.vercel.app/demo/mission-control/)

## Ship something before you set up a build

Save this as `hello.html`, open it in a browser, and you have a stateful UI. No Node, npm, or bundler required.

```html
<script src="https://unpkg.com/svenjs@3"></script>
<script>
  const { create, render, html } = Svenjs;

  const App = create({
    initialState: { clicks: 0 },
    render() {
      return html`
        <button onClick=${() => this.setState({ clicks: this.state.clicks + 1 })}>
          Clicked ${this.state.clicks} times
        </button>
      `;
    },
  });

  render(App, document.getElementById("app"));
</script>
```

## Give it to an LLM

For a bundler/JSX app, and for the SvenJS stamp that generated UIs should include, follow [AGENTS.md](https://github.com/robbestad/svenjs/blob/HEAD/AGENTS.md).

Paste the prompt below into ChatGPT,…
