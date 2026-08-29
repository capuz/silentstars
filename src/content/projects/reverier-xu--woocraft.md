---
repo: "Reverier-Xu/woocraft"
name: "woocraft"
description: "Clean component library for GPUI."
readmeQualityOk: true
url: "https://github.com/Reverier-Xu/woocraft"
language: "Rust"
languages: ["Rust"]
languagePcts: [98]
topics: ["gpui", "gpui-component"]
stars: 7
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-02-12T07:46:53Z"
lastCommitAt: "2026-08-29T17:26:25Z"
lastReleaseAt: "2026-04-21T04:19:08Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 73
undervaluedScore: 39
maintainers: ["Reverier-Xu"]
openGraphImageUrl: "https://opengraph.githubassets.com/fdfc94826cdb30618da5d2ac2d59d0ac3e0b147e6dd2c125c879ab9e7d65c34e/Reverier-Xu/woocraft"
---

# Woocraft

Woocraft is a Rust component library built on top of [GPUI](https://github.com/zed-industries/zed/tree/main/crates/gpui).

This repository is organized as a Cargo workspace, with the main maintained crate at `crates/woocraft`.

> [!WARNING]
>
> this crate is in early work-in-progress state.
>
> most of components come from [longbridge/gpui-component](https://github.com/longbridge/gpui-component) and [components in zed editor](https://github.com/zed-industries/zed), with some visual fixes / improvements.
>
> it may lacks of feature.

## Features

- Composable UI components powered by GPUI
- Built-in theme system (Light / Dark)
- Optional embedded icon and font assets
- Built-in internationalization (i18n)
- Multiple runnable examples

## Component Overview

`woocraft` currently exports the following components/modules:

- Core primitives: Theme, Icon, style extensions, IndexPath, Anchor
- Common widgets: Button, Input, Checkbox, Switch, Slider, Spinner, Tag
- Navigation/info: Breadcrumb, Pagination, Tooltip, Popover, Notification
- Layout/structure: Divider, TitleBar, WindowBorder, WidgetGroup
- Advanced widgets: List, VirtualList, Menu, Progress

> For exact exports,…
