---
repo: "akiomik/nosvelte"
name: "nosvelte"
description: "An experimental Svelte library for building Nostr apps easily"
readmeQualityOk: true
url: "https://github.com/akiomik/nosvelte"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [97]
topics: ["nostr", "svelte", "svelte-components", "svelte-store", "svelte-query", "rx-nostr"]
stars: 30
forks: 3
openIssues: 49
closedIssues: 11
watchers: 2
contributors: 3
recentReleases: 6
createdAt: "2023-06-07T15:24:48Z"
lastCommitAt: "2026-10-28T09:57:42Z"
lastReleaseAt: "2026-07-31T03:31:37Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded", "release_machine"]
healthScore: 82
undervaluedScore: 56
maintainers: ["akiomik", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/7710216dbd2597886194f8adb94db189d3ca3dad17845701d749a6dcc001f558/akiomik/nosvelte"
fundingLinks: ["GITHUB:https://github.com/akiomik", "KO_FI:https://ko-fi.com/akiomik"]
---

# nosvelte

An experimental Svelte library for building [Nostr](https://nostr.com) apps easily.
Highly inspired by [sveltefire](https://github.com/codediodeio/sveltefire).

```svelte
<script lang="ts">
  import { Metadata, NostrApp, Text } from 'nosvelte';

  const relays = ['wss://relay.damus.io', 'wss://relay.snort.social'];
  const id = 'b6cf76789bd25d11eafa65d28c16dd640056919f703191aa06619c5b21f732e3';
</script>

<NostrApp {relays}>
  <Text queryKey={[id]} {id} let:text>
    <Metadata queryKey={['metadata', text.pubkey]} pubkey={text.pubkey} let:metadata>
      
      <p>{JSON.parse(metadata.content).name}: {text.content}</p>
    </Metadata>
  </Text>
</NostrApp>
```

## Features

- Zero-configuration
- Svelte stores and components to use Nostr events
- Caching requests

## Installation

```
npm install nosvelte
```

## Exapmles

You can see some example codes in [src/routes](https://github.com/akiomik/nosvelte/tree/main/src/routes).
