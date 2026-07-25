---
repo: "braydenanderson2014/ArduinoHashtable"
name: "ArduinoHashtable"
description: "Built off of the SimpleVector Library (Created by the same author), This Library allows you to map Key-Value pairs. Also, each Key is Hashed Automatically"
readmeQualityOk: true
url: "https://github.com/braydenanderson2014/ArduinoHashtable"
language: "C++"
languages: ["C++"]
languagePcts: [100]
stars: 8
forks: 2
openIssues: 0
closedIssues: 2
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2024-02-18T23:20:55Z"
lastCommitAt: "2026-07-25T06:01:08Z"
lastReleaseAt: "2025-01-28T23:23:18Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 89
undervaluedScore: 53
maintainers: ["braydenanderson2014"]
openGraphImageUrl: "https://opengraph.githubassets.com/789c26471e9f31b2235496a33da24db1daf172f8de7cec80b12ac11450dcbf66/braydenanderson2014/ArduinoHashtable"
fundingLinks: ["GITHUB:https://github.com/braydenanderson2014", "PATREON:https://patreon.com/braydenanderson2014", "KO_FI:https://ko-fi.com/Ko-fi.com/joesupercool15673", "CUSTOM:https://venmo.com/Brayden-Anderson-20"]
---

# **Hashtable Library**
🚀 **A lightweight and efficient Hashtable implementation for Arduino**

## 📖 **Overview**
The `Hashtable` library provides an efficient way to store key-value pairs in an Arduino environment. It supports various key types, handles collisions, and allows dynamic resizing for optimal performance.

---
## 📚 **API Reference**

### 🔹 **Hashtable Methods**

| Function | Description |
|----------|-------------|
| `Hashtable()` | Constructs a new hashtable with the default size. |
| `Hashtable(size_t initialCapacity, float loadFactor)` | Constructs a hashtable with a specified size and load factor. |
| `void put(const K& key, const V& value)` | Inserts a key-value pair into the hashtable. Overwrites if the key exists. |
| `V* get(const K& key) const` | Retrieves the value associated with a key. Returns `nullptr` if key is not found. [WARNING]: Returns a pointer and not the value itself |
| `V getElement(const K& key) const` | Retrieves the value associated with a key or returns a default-constructed value if not found. |
| `bool getElement(const K& key, V* value) const` | Retrieves the value and stores it in `value` if key exists. Returns `true` if found. |
|…
