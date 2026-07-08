---
repo: "kytta/share2fedi"
name: "share2fedi"
description: "Cross-instance share page for the Fediverse"
readmeQualityOk: true
url: "https://github.com/kytta/share2fedi"
homepage: "https://s2f.kytta.dev/"
language: "TypeScript"
languages: ["TypeScript", "Astro"]
languagePcts: [46, 32]
topics: ["mastodon", "cross-posting", "fediverse", "misskey", "firefish", "gnusocial"]
stars: 51
forks: 11
openIssues: 7
closedIssues: 34
watchers: 3
contributors: 8
recentReleases: 0
createdAt: "2020-09-23T10:55:51Z"
lastCommitAt: "2026-07-08T05:42:52Z"
lastReleaseAt: "2023-09-02T22:32:48Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "legacy_hero"]
healthScore: 93
undervaluedScore: 56
maintainers: ["renovate[bot]", "kytta", "arifpedia"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/297940389/2a2a016d-06b1-4524-bd3f-5027613c1976"
---

<h1 align="center"><img src="assets/share2fedi.svg" width="520" height="160" alt="Share2Fedi"></h1>

> Instance-agnostic share page for the Fediverse.

**[Share₂Fedi]** (pronounced ‘share-to-fedi’) allows you to share stuff on
Mastodon, Misskey, Friendica, and other federated social networks,
instance-agnostic. Just type in the post text and the instance URL, and click
‘Post’!

Or, open this page with the prefilled `text` URL parameter—it will be
automatically inserted into the text field. The same goes for the `instance` and
`lang` URL parameters. This can be used to build custom share buttons for the
federated social networks:

```html
  Share on mastodon.xyz
</a>
```

The instance URL can be saved in your `localStorage` to be automatically
appended if used later—handy!

> [!IMPORTANT]  
> I know I provide [a Share₂Fedi instance](https://s2f.kytta.dev) for others to
> use, but if you want to use Share₂Fedi for your share buttons, **please
> consider self-hosting it**. Although it's free now, running my instance may
> become too expensive for me in the future.

## Self-hosting

> [!NOTE]  
> Share₂Fedi is currently undergoing some transitions in regards to deployment.
> The steps…
