---
repo: "holepunchto/bare-kit"
name: "bare-kit"
description: "Bare for native application development"
readmeQualityOk: true
url: "https://github.com/holepunchto/bare-kit"
language: "C"
languages: ["C"]
languagePcts: [87]
stars: 46
forks: 12
openIssues: 0
closedIssues: 16
watchers: 8
contributors: 12
recentReleases: 0
createdAt: "2024-06-21T09:59:39Z"
lastCommitAt: "2026-10-30T10:22:42Z"
lastReleaseAt: "2025-03-05T08:10:08Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 95
undervaluedScore: 55
maintainers: ["kasperisager", "bavulapati", "chocky335"]
openGraphImageUrl: "https://opengraph.githubassets.com/46565ef8b00464f0540662a0e3aad7e7603867bd81191c8faa74c5d6e6d3d124/holepunchto/bare-kit"
---

# bare-kit

Bare Kit is a C library that embeds Bare in a host application, running each JavaScript entry point in an isolated thread, called a worklet, with an in-process IPC channel to the host. It aims to be a "one size fits most" embedder that language bindings build on rather than embedding Bare themselves.

## Usage

```c
#include <bare-kit.h>
#include <stdio.h>
#include <string.h>
#include <uv.h>

static uv_sem_t exited;

static void
on_worklet_exit(int exit_code, void *data) {
  printf("Exited with code %d\n", exit_code);

  uv_sem_post(&exited);
}

static void
on_readable(bare_ipc_poll_t *poll, int events) {
  bare_ipc_t *ipc = bare_ipc_poll_get_ipc(poll);

  char data[BARE_IPC_READ_BUFFER_SIZE];

  int len = bare_ipc_read(ipc, data, sizeof(data));

  if (len > 0) printf("%.*s\n", len, data);
  else if (len == 0) bare_ipc_close(ipc);
}

int
main() {
  uv_sem_init(&exited, 0);

  bare_worklet_options_t options = {
    .version = 0,
    .memory_limit = 24 * 1024 * 1024,
  };

  bare_worklet_t *worklet;
  bare_worklet_create(&options, &worklet);

  bare_worklet_on_exit(worklet, on_worklet_exit, NULL);

  bare_ipc_t *ipc;
  bare_ipc_create(worklet, &ipc);

  bare_ipc_poll_t…
