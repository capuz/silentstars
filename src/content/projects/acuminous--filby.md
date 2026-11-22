---
repo: "acuminous/filby"
name: "filby"
description: "A framework for temporal reference data"
readmeQualityOk: true
url: "https://github.com/acuminous/filby"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [92]
stars: 6
forks: 1
openIssues: 12
closedIssues: 153
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2023-12-25T09:36:17Z"
lastCommitAt: "2026-11-22T11:49:23Z"
lastReleaseAt: "2024-01-24T23:04:41Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 97
undervaluedScore: 79
maintainers: ["cressie176"]
openGraphImageUrl: "https://opengraph.githubassets.com/51ec6686cdb0b049093b48568d58d0c2fe9545f6bac51afdf7b3ba88ffb0cd95/acuminous/filby"
---

# Filby - A framework for managing reference data that changes over time

*There is no difference between Time and any of the three dimensions of Space except that our consciousness moves along it.*

## Contents

- [Introduction](#introduction)
- [User interfaces](#user-interfaces)
- [Benefits](#benefits)
- [How it works](#how-it-works)
- [Getting started](#getting-started)
- [Guide](#guide)
- [Upgrading from 0.14.0 to 1.0.0](#upgrading-from-0140-to-100)
- [Reference](#reference)
- [Example application](#example-application)

## Introduction

Filby is a framework for managing reference data that changes over time, such as product catalogues, price lists, tax rates and calendars. Like a time series database, it stores successive values over time and lets applications query them by date. However, rather than storing high volumes of measurements such as sensor readings, Filby focuses on data that changes infrequently. Each change takes effect on a specified date and can be scheduled in advance. Previous values are retained after they are replaced, so an application can read the data as it stood, stands or will stand at any point in time, past, present or future.
