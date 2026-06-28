---
repo: "KDE/sonnet"
name: "sonnet"
description: "Spelling framework for Qt."
url: "https://github.com/KDE/sonnet"
homepage: "https://invent.kde.org/frameworks/sonnet"
language: "C++"
languages: ["C++"]
languagePcts: [92]
stars: 41
forks: 14
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 75
recentReleases: 0
createdAt: "2015-09-18T14:36:12Z"
lastCommitAt: "2026-06-28T01:45:42Z"
status: "thriving"
tags: ["legacy_hero", "funded"]
healthScore: 75
undervaluedScore: 51
maintainers: ["nicolasfella", "tsdgeos", "redstrate"]
openGraphImageUrl: "https://opengraph.githubassets.com/7762c2877b41bdf88aa63ebcfa96e9ca7a383eb7047d0133e3f356581fa2f731/KDE/sonnet"
fundingLinks: ["GITHUB:https://github.com/KDE", "CUSTOM:https://kde.org/community/donations/"]
---

# Sonnet

Multi-language spell checker

## Introduction

Sonnet is a plugin-based spell checking library for Qt-based
applications. It supports several different plugins, including
HSpell, Enchant, ASpell and HUNSPELL.

It also supports automated language detection, based on a
combination of different algorithms.

The simplest way to use Sonnet in your application is to use the
SpellCheckDecorator class on your QTextEdit.

## Example

    #include <QTextEdit>
    #include <spellcheckdecorator.h>

    MyFoo::MyFoo(QWidget *parent) : QWidget(parent)
    {
        QTextEdit *textEdit = new QTextEdit(this);
        Sonnet::SpellCheckDecorator *decorator = new Sonnet::SpellCheckDecorator(textEdit);
    }
