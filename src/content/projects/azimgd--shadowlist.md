---
repo: "azimgd/shadowlist"
name: "shadowlist"
description: "60fps, high-performance list for iOS/Android/RN."
readmeQualityOk: true
url: "https://github.com/azimgd/shadowlist"
language: "TypeScript"
languages: ["TypeScript", "C++"]
languagePcts: [31, 31]
topics: ["new-architecture", "react-native"]
stars: 385
forks: 6
openIssues: 0
closedIssues: 16
watchers: 14
contributors: 3
recentReleases: 0
createdAt: "2024-05-15T16:29:58Z"
lastCommitAt: "2026-10-21T08:49:17Z"
lastReleaseAt: "2024-05-21T17:28:25Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 98
undervaluedScore: 36
maintainers: ["azimgd"]
openGraphImageUrl: "https://opengraph.githubassets.com/13d37df3b720e2f569860741bedab81f7126afafd0c9698cd705b7c19ecaa86b/azimgd/shadowlist"
---

# ShadowList

Virtualized lists for React Native, UIKit, Android views and the web, on a shared C++ core.

An **item** is your data, a **row** is a layout entry (including section headers/footers), a **cell** is its mounted
view, and a **key** is its stable identity across updates. Sizes, cells, selection and the scroll position follow
keys, and inserts, deletes and size changes keep the visible content still.

## React Native

ShadowList is the React Native Fabric package: the ShadowList, SectionList, TreeList and DraggableList components.
ShadowListUtils (`shadowlist-utils` on npm) adds hooks and prebuilt list kits.

```sh
yarn add shadowlist
```

```tsx
const listRef = useRef<ShadowListCommands>(null);

<ShadowList
  ref={listRef}
  data={photos}
  renderItem={({ item }) => <Photo photo={item} />}
  numberOfColumns={3}
  reorderEnabled
  snapToItem
  snapAlignment="start"
/>;

listRef.current?.scrollToIndex({ index: 42, viewPosition: 0.5 });
```

See more: [ShadowList](https://github.com/azimgd/shadowlist/blob/HEAD/packages/shadowlist-fabric/README.md), [ShadowListUtils](https://github.com/azimgd/shadowlist/blob/HEAD/templates/shadowlist-utils/README.md)

## UIKit…
