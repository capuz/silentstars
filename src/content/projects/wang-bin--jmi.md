---
repo: "wang-bin/JMI"
name: "JMI"
description: "JNI Modern Interface in C++17"
readmeQualityOk: true
url: "https://github.com/wang-bin/JMI"
language: "C++"
languages: ["C++"]
languagePcts: [97]
topics: ["jni", "jmi", "modern-cpp", "ndk", "android", "java"]
stars: 87
forks: 18
openIssues: 0
closedIssues: 3
watchers: 7
contributors: 4
recentReleases: 0
createdAt: "2016-11-28T15:25:23Z"
lastCommitAt: "2026-09-28T09:54:53Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 88
undervaluedScore: 43
maintainers: ["wang-bin"]
openGraphImageUrl: "https://opengraph.githubassets.com/c61f7fdd2ce9b32c734d67a2c454423827416c2c67c0295c2e04f93fcda500f1/wang-bin/JMI"
---

# JMI
**_JNI Modern Interface in C++_**

[中文](https://github.com/wang-bin/JMI/blob/HEAD/README_zh_CN.md)

[Some Java Classes Written in JMI](https://github.com/wang-bin/AND.git)

## Features

- Compile-time JNI signature constants
- In and out parameters for Java methods (`std::ref` for mutable arrays/buffers)
- Per-class `jclass`, per-method `jmethodID`, per-field `jfieldID` cache
- Static Java methods/fields have corresponding `callStatic` / `staticField` APIs
- `JObject` owns a **global** ref; `LocalRef` RAII for short-lived local refs (helps avoid leaks when used consistently)
- `getEnv()` from any thread after `javaVM(vm)` is initialized; attach/detach handled when needed
- Supported as parameter / return / field types: JNI primitives (`jint`, `jlong`, … — not plain `int`/`long`), `JObject`, C/C++ strings, and arrays of those
- Helpers: `to_string(jstring, JNIEnv*)`, `from_string(std::string, JNIEnv*)`, `android::application()`
- Exception check / clear on calls; inspect `error()` after instance methods
- Almost no additional C++ wrapper overhead for cached calls when LTO is enabled

## Quick start

Set the VM in `JNI_OnLoad`:

```cpp
jmi::javaVM(vm);
```

Call this before…
