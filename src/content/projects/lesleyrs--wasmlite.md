---
repo: "lesleyrs/wasmlite"
name: "wasmlite"
description: "ported libc + browser libjs for webassembly"
url: "https://github.com/lesleyrs/wasmlite"
homepage: "https://lesleyrs.github.io/wasmlite/?ports/minecraft-weekend"
language: "C"
languages: ["C"]
languagePcts: [80]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2025-07-14T20:47:17Z"
lastCommitAt: "2026-06-26T23:40:52Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 70
undervaluedScore: 37
maintainers: ["lesleyrs"]
openGraphImageUrl: "https://opengraph.githubassets.com/a609896365d1b0d729b5c73a82915c85a228eec5f1df661078ef04c693b3de0e/lesleyrs/wasmlite"
---

# wasmlite - like emscripten but less magical

This project makes use of [JSPI](https://v8.dev/blog/jspi) which is able to suspend/resume wasm execution which avoids the need to export functions to call them from JS. Combined with [pdclib](https://github.com/lesleyrs/pdclib) allows for porting some desktop programs to run in the browser with [little changes](#Ports).

This requires a modern chrome version or `javascript.options.wasm_js_promise_integration` enabled in firefox.

## Usage
```
CC = clang --target=wasm32 --sysroot=/path/to/wasm/libc
LDFLAGS += -nodefaultlibs -lc -lm # avoids system path libclang_rt.builtins-wasm32.a, or `-nostdlib -Dmain=_start -lc -lm` for no crt1 as well
LDFLAGS += -Wl,--export-table # for function pointers access in JS, such as for event listeners
LDFLAGS += -Wl,--export=malloc # for JS functions that allocate internally (JS_openFilePicker/glGetString)
LDFLAGS += -Wl,--stack-first # to fail fast on stack overflow, else it will quietly overwrite data
LDFLAGS += -Wl,-z,stack-size=value # increase stack size
```
more options: https://lld.llvm.org/WebAssembly.html

To have clangd work create a compile_flags.txt file with the same flags as CC

1. run…
