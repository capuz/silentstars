---
repo: "gnustep/apps-gorm"
name: "apps-gorm"
description: "Gorm is a clone of the Cocoa (OpenStep/NeXTSTEP) `Interface Builder' application for GNUstep"
readmeQualityOk: true
url: "https://github.com/gnustep/apps-gorm"
homepage: "http://www.gnustep.org/"
language: "Objective-C"
languages: ["Objective-C"]
languagePcts: [94]
stars: 101
forks: 27
openIssues: 40
closedIssues: 34
watchers: 5
contributors: 26
recentReleases: 0
createdAt: "2014-08-09T04:41:28Z"
lastCommitAt: "2026-09-30T09:57:31Z"
lastReleaseAt: "2025-02-15T00:20:21Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 84
undervaluedScore: 40
maintainers: ["gcasa"]
openGraphImageUrl: "https://opengraph.githubassets.com/958901a4829662e59467fd860c4a4899399ecf5946e0fb1bbe145b46ba451ee8/gnustep/apps-gorm"
discussionCount: 0
---

# apps-gorm

## What Is Gorm?

Gorm is the GNUstep graphical interface builder.

- The name stands for Graphic Object Relationship Modeler (also commonly expanded as GNUstep Object Relationship Modeler).
- It is the GNUstep counterpart to the classic NeXTSTEP/OpenStep/Cocoa Interface Builder.
- It lets you design interface objects visually, wire outlets/actions, and save interface archives that GNUstep applications can load at runtime.

## Key Capabilities

- Visual editing of windows, panels, menus, controls, and custom views
- Property editing through inspectors
- Action/outlet connection modeling between objects
- Class management for custom classes, outlets, and actions
- Resource editing and management (for example images and sounds)
- Plugin/palette architecture for extensibility
- Import/export support through the headless gormtool utility (strings, XLIFF, class metadata, archive conversion workflows)

## Repository Layout

Top-level modules are split so core functionality can be reused by other tools and apps:

- GormCore/: core framework and editor/inspector implementation
- InterfaceBuilder/: protocol and compatibility layer abstractions
- GormObjCHeaderParser/:…
