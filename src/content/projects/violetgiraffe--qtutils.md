---
repo: "VioletGiraffe/qtutils"
name: "qtutils"
description: "A collection of various Qt-based classes and code snippets"
readmeQualityOk: true
url: "https://github.com/VioletGiraffe/qtutils"
language: "C++"
languages: ["C++"]
languagePcts: [96]
stars: 24
forks: 9
openIssues: 0
closedIssues: 2
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2014-04-22T18:10:31Z"
lastCommitAt: "2026-11-14T21:57:58Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 99
undervaluedScore: 66
maintainers: ["VioletGiraffe"]
openGraphImageUrl: "https://opengraph.githubassets.com/e31dc6c517bff9b0b06a1fdbbcc0ec8204fe1f9cf7c263891dd704a268a878cc/VioletGiraffe/qtutils"
---

# qtutils

Reusable Qt Core/Gui/Widgets facilities for application plumbing, dialogs, diagnostics, and custom widgets. The library targets C++23 and Qt 6, and depends on `cpputils` plus the header-only `cpp-template-utils`.

## Facilities

### Application UI and dialogs

| Header | Facility |
|---|---|
| `appdialogs/caboutdialog.h` | About dialog populated from `QApplication` metadata, build date/time, Qt version, and optional application version/copyright values. `customContentLayout()` accepts application-specific widgets, placed between the version and copyright lines. |
| `dialogs/csimpleprogressdialog.h` | Cancellable progress dialog with configurable text/range and optional automatic show-on-progress and close-on-completion behavior. |
| `dialogs/messagedialog.h` | Arbitrary-label question boxes returning the selected option index, and OK-only notices; either can carry long selectable details that scroll instead of growing off-screen. |
| `appdialogs/csettingspage.h`, `appdialogs/csettingsdialog.h` | Abstract settings-page contract and a multi-page settings dialog that applies every page, announces the change through `CSettingsNotifier`, manages focus order, and offers an…
