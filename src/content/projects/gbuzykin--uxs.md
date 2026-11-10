---
repo: "gbuzykin/uxs"
name: "uxs"
description: "Utilities and eXtensionS (UXS) library is a collection of useful (template) classes and functions developed upon standard C++ library"
readmeQualityOk: true
url: "https://github.com/gbuzykin/uxs"
language: "C++"
languages: ["C++"]
languagePcts: [98]
topics: ["json", "utf", "variant", "parser", "cxx", "utility", "extensions", "utility-library", "cpp", "xml"]
stars: 13
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2020-10-29T16:47:05Z"
lastCommitAt: "2026-11-10T11:24:14Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 85
undervaluedScore: 60
maintainers: ["gbuzykin"]
openGraphImageUrl: "https://opengraph.githubassets.com/285fb5e6f3b5f704c95bc1c3fa0d738bb40dda1c6e6b2984fd27396a44c3a355/gbuzykin/uxs"
---

# Utilities and eXtensionS (UXS) for Standard C++ Library

This is a collection of useful (template) classes and functions developed upon standard C++ library. It can be compiled
using *C++11*, but *C++17* or *C++20* are preferable. This README file briefly describes contents of this library and
can be not up-do-date, it also gives guidelines on how to use this stuff. For more detailed information see
[wiki](https://github.com/gbuzykin/uxs/wiki) pages.

The collection includes the following functionality:

- implementation of *C++20*-like string *formatting* and *printing* library (*C++20* is needed for compile-time
  formatting string checking); it is very close to *C++20* standard implementation (all standard format specifiers are
  implemented), but faster and has some extensions
- full string *formatting* implementation for *ranges*
- string *formatting* implementation for `std::filesystem::path` (*C++17* is needed)
- string *formatting* implementation for *chrono* classes (*C++20* is needed)
- library for string *parsing*
- library for *buffered input/output* (alternative to rather slow and consuming standard streams), which is compliant
  with the *printing* functions;…
