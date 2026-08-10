---
repo: "david942j/memory_io"
name: "memory_io"
description: "Read/Write structures in memory easily"
readmeQualityOk: true
url: "https://github.com/david942j/memory_io"
language: "Ruby"
languages: ["Ruby"]
languagePcts: [98]
topics: ["ruby-gem", "memory"]
stars: 10
forks: 2
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2017-12-30T11:16:15Z"
lastCommitAt: "2026-08-10T05:05:57Z"
lastReleaseAt: "2025-11-02T02:54:19Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 84
undervaluedScore: 38
maintainers: ["david942j", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/cab44ba8c5b99b42fa5704b9b31f4e5a831b76bf54572fe6212a1d1714dd7c43/david942j/memory_io"
---

# MemoryIO

Read/Write complicated structures in memory easily.

## Motivation

I usually need to dump a structure, say `string` in C++, from memory for debugging.
This is not hard if using gdb.
However, gdb doesn't support writing Ruby scripts
(unless you use [gdb-ruby](https://github.com/david942j/gdb-ruby), which has **MemoryIO** as its dependency).
So I created this project to make the debug procedure much easier.

This repository has two main goals:

1. To communicate with memory easily.
2. To collect all common structures for debugging/learning.

## Why

It's not hard to read/write a process's memory (simply open the file `/proc/$PID/mem`),
but it's still worthy to make a utility.

This project also targets to collect all common structures, such as how to parse a C++/Rust/Python object from memory.
Therefore, **Pull Requests of adding new structures** are welcome :D

## Supported Platform

- Linux

## Implemented Structures

Following is the list of supported structures.
Each type has a full-name and an alias. For example,

```ruby
require 'memory_io'

process = MemoryIO.attach(`pidof victim`.to_i)
# read a 64-bit unsigned integer
process.read(0x601000, 1, as: 'basic/u64')
#…
