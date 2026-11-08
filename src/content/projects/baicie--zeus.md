---
repo: "baicie/zeus"
name: "zeus"
description: "Taking Zeus for a quick spin"
originalDescription: "尝试一下Zeus大概"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/baicie/zeus"
homepage: "https://baicie.github.io/zeus/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [83]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2025-03-10T06:14:39Z"
lastCommitAt: "2026-11-08T10:41:16Z"
lastReleaseAt: "2026-08-02T08:49:33Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 89
undervaluedScore: 75
maintainers: ["baicie"]
openGraphImageUrl: "https://opengraph.githubassets.com/42ab3c3799b46caf990dd67805aef3a412561bba0afdcaf968845d51e9da68a9/baicie/zeus"
---

# Zeus

Compiler-first fine-grained UI framework.

```tsx
import { createSignal, render } from '@zeus-js/zeus'

function App() {
  const [count, setCount] = createSignal(0)

  return <button onClick={() => setCount(count() + 1)}>count: {count()}</button>
}

render(() => <App />, document.getElementById('root')!)
```

## Features

- explicit getter/setter signals
- compiled JSX and direct DOM updates
- no Virtual DOM or component rerender loop
- owned cleanup for dynamic subtrees
- Web Components with `Host` and `Slot`

## Packages

- `@zeus-js/zeus` - application entry point
- `@zeus-js/signal` - public reactive primitives
- `@zeus-js/runtime-dom` - compiler-targeted DOM runtime
- `@zeus-js/compiler` - JSX compiler
- `@zeus-js/vite-plugin` - Vite integration

## Quick Start

```bash
pnpm create zeus
```

## Development

```bash
pnpm install
pnpm build
pnpm test
```

## Resources

- [Documentation](https://zeusjs.github.io)
- [API Reference](https://github.com/baicie/zeus/blob/HEAD/api/zeus)
- [Contributing](https://github.com/baicie/zeus/blob/HEAD/docs/contributing.md)

## License

MIT

