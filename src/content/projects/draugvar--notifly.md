---
repo: "draugvar/Notifly"
name: "Notifly"
description: "A simple notification system in pure C++, inspired by Cocoa's NSNotificationCenter API."
readmeQualityOk: true
url: "https://github.com/draugvar/Notifly"
language: "C++"
languages: ["C++"]
languagePcts: [78]
stars: 8
forks: 0
openIssues: 0
closedIssues: 4
watchers: 1
contributors: 4
recentReleases: 1
createdAt: "2022-04-09T15:02:22Z"
lastCommitAt: "2026-08-27T14:25:13Z"
lastReleaseAt: "2026-08-27T14:28:34Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 47
maintainers: ["draugvar"]
openGraphImageUrl: "https://opengraph.githubassets.com/7140b216b43c13b27da2b8ad39779dda0a6ac84e1d458e9033a9db240b33ad68/draugvar/Notifly"
---

# Notifly - A simple notification center in pure C++ -

This project was originally forked from https://github.com/Geenz/CPP-NotificationCenter which is not maintained anymore.

A C++ API inspired by Cocoa's NSNotificationCenter API.

## C Interface

Notifly now includes a **C interface** that provides access to the notification center functionality from C programs through a shared library (DLL/SO). This allows you to use Notifly from C projects while maintaining the performance and features of the C++ implementation.

**Key features of the C interface:**
- Shared library (`libnotifly_c.so`/`notifly_c.dll`) for easy integration
- Handle-based API for type safety
- Function pointer callbacks
- Synchronous and asynchronous notification posting
- Full compatibility with the C++ API functionality

See [docs/C_INTERFACE.md](https://github.com/draugvar/Notifly/blob/HEAD/docs/C_INTERFACE.md) for complete documentation and examples.

**Quick C example:**
```c
#include "notifly_c.h"

void my_callback(int notification_id, void* data, void* user_data) {
    printf("Received notification %d\n", notification_id);
}

int main() {
    notifly_handle notifly = notifly_default();
    int…
