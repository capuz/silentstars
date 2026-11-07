---
repo: "KDE/ktexttemplate"
name: "ktexttemplate"
description: "Library to allow application developers to separate the structure of documents from the data they contain."
readmeQualityOk: true
url: "https://github.com/KDE/ktexttemplate"
homepage: "https://invent.kde.org/frameworks/ktexttemplate"
language: "C++"
languages: ["C++"]
languagePcts: [95]
stars: 8
forks: 2
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 35
recentReleases: 0
createdAt: "2022-10-23T20:51:22Z"
lastCommitAt: "2026-11-07T16:11:50Z"
status: "thriving"
tags: ["funded"]
healthScore: 75
undervaluedScore: 58
maintainers: ["nicolasfella", "vkrause", "kossebau"]
openGraphImageUrl: "https://opengraph.githubassets.com/5761e57cd285b207a20ea92356b999d6d5affac10c0c10d8a0a2f2cdb50342b0/KDE/ktexttemplate"
fundingLinks: ["GITHUB:https://github.com/KDE", "CUSTOM:https://kde.org/community/donations/"]
---

The KTextTemplate Library
=========================

* About KTextTemplate
* Installation
* Licensing
* Contributing

About KTextTemplate
-------------------

KTextTemplate is a Free Software library written using the [Qt framework](http://code.qt.io).

The goal of KTextTemplate is to make it easier for application developers to
separate the structure of documents from the data they contain, opening the door
for theming and advanced generation of other text such as code.

The syntax uses the syntax of the [Django template system](https://docs.djangoproject.com/en/1.9/ref/templates/language/), and
the core design of Django is reused in KTextTemplate.

    {% for athlete in athlete_list %}
    {% endfor %}

Part of the design of both template systems is that application developers can
extend the syntax by implementing their own tags and filters. For details of how
to do that, see the [API documentation](http://www.kde.org/apidox/extension.html).

Installation
------------

To build KTextTemplate, you need at least Qt6.0 (with development packages) and CMake 3.16.
Out-of-source builds are recommended:

    mkdir build
    cd build
    cmake -DCMAKE_INSTALL_PREFIX=$prefix ..
    cmake…
