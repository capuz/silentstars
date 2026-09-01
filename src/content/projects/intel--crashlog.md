---
repo: "intel/crashlog"
name: "crashlog"
description: "Reference implementation for decoding and extracting Intel® Crash Log Technology records."
readmeQualityOk: true
url: "https://github.com/intel/crashlog"
homepage: "https://intel.github.io/crashlog/"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
topics: ["crash", "debug", "rust", "intel", "efi", "cper"]
stars: 11
forks: 6
openIssues: 1
closedIssues: 2
watchers: 2
contributors: 19
recentReleases: 1
createdAt: "2025-03-04T18:56:30Z"
lastCommitAt: "2026-09-01T08:47:52Z"
lastReleaseAt: "2026-07-01T09:28:51Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 87
undervaluedScore: 65
maintainers: ["psurply", "jlrivasp"]
openGraphImageUrl: "https://opengraph.githubassets.com/0a4e23d24ce209c6e26f701bc1bf07bfa1db960031b31162b97b9bff28506c57/intel/crashlog"
---

# Lightweight Crash Log Framework (aka `iclg`)

**[Download Binaries](https://github.com/intel/crashlog/releases/latest)** • **[Documentation](https://intel.github.io/crashlog/crates/intel_crashlog/)** • **[Getting Started](#getting-started)**

> **Experienced a crash on an Intel SoC? The hardware may have captured a Crash Log.**

Modern Intel SoCs automatically record hardware state during fatal crashes
(MCE, triple faults, unexpected resets) into on-die memory.
`iclg` extracts and decodes that binary data into human-readable JSON.

Check if your system has crash log data:

```console
$ iclg extract
```

## What can be done with the Crash Log?

Once extracted, you have several options depending on your needs:

- Use the `iclg` decoder provided in this repository to convert crash log
  records into structured JSON format for initial triage and automated
  processing.

  ```console
  $ iclg triage three_strike_timeout_with_xq.crashlog
  CORE_TIMEOUT.SINGLE_STUCK_TRANSACTION.13014002340H
  MCA.BANK3.INTERNAL_TIMER_ERROR.MSCOD_E184H
  RESET_CAUSE.GLOBAL_RESET.PMC_FW

  $ iclg decode three_strike_timeout_with_xq.crashlog |
  > jq…
