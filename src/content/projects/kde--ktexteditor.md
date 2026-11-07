---
repo: "KDE/ktexteditor"
name: "ktexteditor"
description: "KTextEditor Framework"
readmeQualityOk: true
url: "https://github.com/KDE/ktexteditor"
homepage: "https://invent.kde.org/frameworks/ktexteditor"
language: "C++"
languages: ["C++"]
languagePcts: [83]
stars: 89
forks: 22
openIssues: 0
closedIssues: 0
watchers: 3
contributors: 190
recentReleases: 0
createdAt: "2015-09-18T13:17:13Z"
lastCommitAt: "2026-11-07T16:11:39Z"
status: "thriving"
tags: ["legacy_hero", "funded"]
healthScore: 79
undervaluedScore: 47
maintainers: ["christoph-cullmann", "Waqar144", "nicolasfella"]
openGraphImageUrl: "https://opengraph.githubassets.com/a2940c34e6110343f63410000c25b4690d4f6347c1e6d8e8d994963db9d93b1d/KDE/ktexteditor"
fundingLinks: ["GITHUB:https://github.com/KDE", "CUSTOM:https://kde.org/community/donations/"]
---

# KTextEditor

Full text editor component

## Introduction

KTextEditor provides a powerful text editor component that you can embed in your
application, either as a KPart or using the KF6::TextEditor library (if you need
more control).

The text editor component contains many useful features, from syntax
highlighting and automatic indentation to advanced scripting support, making it
suitable for everything from a simple embedded text-file editor to an advanced
IDE.

## Usage

If you are using CMake, you need to have

```cmake
find_package(KF6TextEditor)
```

(or similar) in your CMakeLists.txt file, and you need to link to KF6::TextEditor.

After that, you can use KTextEditor::Editor to create an editor instance, and
use that to manage KTextEditor::Document instances.

```cpp
#include <KTextEditor/Document>
#include <KTextEditor/Editor>
#include <KTextEditor/View>

// get access to the global editor singleton
auto editor = KTextEditor::Editor::instance();

// create a new document
auto doc = editor->createDocument(this);

// create a widget to display the document
auto view = doc->createView(yourWidgetParent);
```

See the documentation for these classes for more information.

##…
