---
repo: "jorgen/json_struct"
name: "json_struct"
description: "json_struct is a single header only C++ library for parsing JSON directly to C++ structs and vice versa"
url: "https://github.com/jorgen/json_struct"
language: "C++"
languages: ["C++"]
languagePcts: [99]
topics: ["c-plus-plus", "json", "template-specialisations", "parse", "template-metaprogramming", "deserialization", "serialization"]
stars: 471
forks: 60
openIssues: 3
closedIssues: 38
watchers: 15
contributors: 13
recentReleases: 0
createdAt: "2013-01-09T22:32:58Z"
lastCommitAt: "2026-07-04T19:19:32Z"
lastReleaseAt: "2024-09-19T22:13:55Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 98
undervaluedScore: 22
maintainers: ["jorgen"]
openGraphImageUrl: "https://opengraph.githubassets.com/1f2ac352bdda9ad78d029094d546ada9b4a4422e76d26ef068c65f648af200a3/jorgen/json_struct"
discussionCount: 5
---

# **Structurize your JSON**

json_struct is a single-header C++ library that parses JSON to structs/classes and serializes structs/classes back to JSON. With support for relaxed parsing rules, it's also excellent for configuration files and human-editable data formats.

**Getting Started:** Simply copy `json_struct.h` from the `include` folder into your project's include path.

**Requirements:** C++11 or newer. Tested on GCC, Clang, and Visual Studio 2015+.

## Quick Start

json_struct automatically maps JSON to C++ structs by adding simple metadata declarations.

```json
{
    "One" : 1,
    "Two" : "two",
    "Three" : 3.333
}
```

can be parsed into a structure defined like this:

```c++
struct JsonObject
{
    int One;
    std::string Two;
    double Three;

    JS_OBJ(One, Two, Three);
};
```

or

```c++
struct JsonObject
{
    int One;
    std::string Two;
    double Three;
};
JS_OBJ_EXT(JsonObject, One, Two, Three);
```

**Parse JSON to struct:**

```c++
JS::ParseContext context(json_data);
JsonObject obj;
context.parseTo(obj);
```

**Serialize struct to JSON:**

```c++
std::string pretty_json = JS::serializeStruct(obj);
// or
std::string compact_json =…
