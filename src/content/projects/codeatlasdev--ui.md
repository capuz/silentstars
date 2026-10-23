---
repo: "codeatlasdev/ui"
name: "ui"
description: "Svelte 5 UI library for apps your agent already knows: full screens, glass materials, OKLCH themes, native-feeling mobile. Built on bits-ui."
readmeQualityOk: true
url: "https://github.com/codeatlasdev/ui"
homepage: "https://ui.codeatlas.com.br"
language: "TypeScript"
languages: ["TypeScript", "Svelte"]
languagePcts: [45, 37]
stars: 6
forks: 3
openIssues: 37
closedIssues: 176
watchers: 1
contributors: 2
recentReleases: 10
createdAt: "2026-10-12T23:33:48Z"
lastCommitAt: "2026-10-23T12:04:16Z"
lastReleaseAt: "2026-10-15T00:52:42Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine", "under_pressure"]
healthScore: 94
undervaluedScore: 70
maintainers: ["mvilacad"]
openGraphImageUrl: "https://opengraph.githubassets.com/f747c7539622df923448f761a5a1cbad70c5e26e265022981918023b328f9412/codeatlasdev/ui"
discussionCount: 1
---

# @codeatlasdev/ui

### ship the whole screen, not the button.

svelte 5 · one theme object · your agent already knows it

**[live demo](https://ui.codeatlas.com.br)** · [docs](https://ui.codeatlas.com.br/docs/) · [theme editor](https://ui.codeatlas.com.br/theme/) · [changelog](https://ui.codeatlas.com.br/changelog/)

```sh
bunx @codeatlasdev/ui init --write
```

that's the setup. theme, dark mode, error pages, no white flash. sveltekit or astro.

claude code? skills + mcp + the numbered demo catalog in one line:

```
/plugin install codeatlas-ui --marketplace codeatlasdev/ui
```

## a whole page in 12 lines

```svelte
<AppList title="Users" data={users} searchKeys={['name', 'email']}>
  {#snippet children(list)}
    <SimpleTable responsive="cards">
      <thead><tr><th>User</th><th>Role</th></tr></thead>
      <tbody>
        {#each list.rows as u (u.id)}
          <tr><td><UserCell name={u.name} email={u.email} /></td><td>{u.role}</td></tr>
        {/each}
      </tbody>
    </SimpleTable>
  {/snippet}
</AppList>
```

search ✓ pagination ✓ empty state ✓ cards on mobile ✓ css you wrote: **0**

## your brand in one hex

```ts
export const theme = defineTheme({
  presets: [{ id:…
