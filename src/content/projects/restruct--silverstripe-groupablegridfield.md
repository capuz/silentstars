---
repo: "restruct/silverstripe-groupablegridfield"
name: "silverstripe-groupablegridfield"
description: "Drag & drop grouping of items in a Silverstripe GridField, with groups from a MultiValueField or from a DataObject relation"
readmeQualityOk: true
url: "https://github.com/restruct/silverstripe-groupablegridfield"
language: "PHP"
languages: ["PHP"]
languagePcts: [65]
stars: 7
forks: 8
openIssues: 3
closedIssues: 8
watchers: 3
contributors: 5
recentReleases: 0
createdAt: "2016-05-27T14:10:04Z"
lastCommitAt: "2026-10-02T09:59:32Z"
lastReleaseAt: "2020-07-18T09:05:36Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "funded", "fork_magnet"]
healthScore: 82
undervaluedScore: 66
maintainers: ["micschk"]
openGraphImageUrl: "https://opengraph.githubassets.com/a2049f1d1dbf90fac0e220d3879986b19dee1a9ca0aebe3e22c2bfe89a7d1c27/restruct/silverstripe-groupablegridfield"
fundingLinks: ["GITHUB:https://github.com/restruct"]
---

# SilverStripe GridField Groupable

*Maintained by [Restruct](https://github.com/restruct). If this module saves you time, you can
[support ongoing maintenance](https://github.com/sponsors/restruct).*

A powerful GridField component that enables drag-and-drop grouping of items. Items can be organized into visual groups with reorderable group boundaries, metadata display, and optional inline editing.

**Key features:**
- Drag items between groups
- Drag entire groups (with their items) to reorder
- Two modes: **MultiValue** (groups as key->name pairs in a MultiValueField on the source record) and **DataObject** (database-backed groups)
- DataObject mode supports: group creation, deletion, reordering, metadata display, custom actions, and inline title editing
- Soft refresh preserves unsaved GridFieldEditableColumns changes
- Works on top of GridFieldOrderableRows (**required** - the component raises a warning without it, and immediate-vs-deferred saving is derived from it, see below)

## Version Compatibility

| Branch        | Module Version | Silverstripe    | PHP            |
|---------------|----------------|-----------------|----------------|
| `main`        | `4.x`          |…
