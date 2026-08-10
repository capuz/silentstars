---
repo: "danielnuld/quaero"
name: "quaero"
description: "Cliente de bases de datos moderno, ligero y multi-motor — alternativa open source estilo Navicat. Núcleo en C + webview nativo."
readmeQualityOk: true
url: "https://github.com/danielnuld/quaero"
language: "TypeScript"
languages: ["TypeScript", "C"]
languagePcts: [58, 31]
stars: 6
forks: 0
openIssues: 10
closedIssues: 129
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-06-27T03:42:41Z"
lastCommitAt: "2026-08-10T05:06:23Z"
lastReleaseAt: "2026-07-10T20:18:35Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "funded", "release_machine"]
healthScore: 97
undervaluedScore: 61
maintainers: ["danielnuld"]
openGraphImageUrl: "https://opengraph.githubassets.com/3a9e90d873b5e685b1cf997e1891b64c6e45f743539f83419aeacd1045765484/danielnuld/quaero"
fundingLinks: ["GITHUB:https://github.com/danielnuld", "KO_FI:https://ko-fi.com/danielnuld"]
---

</p>

  <em>A modern, lightweight, multi-engine database client — an open-source alternative in the spirit of Navicat.</em>
</p>

  <b>English</b> · <a href="README.es.md">Español</a>
</p>

</p>

**Quaero** (Latin *quaero*, "I seek / I inquire") is a multi-engine database
client with a **C core** (`libdbcore`) and a **web UI running on the OS-native
webview** (WebView2 on Windows, WebKitGTK on Linux, WKWebView on macOS). A modern
UI without the weight of Electron, and a native engine that talks directly to
each database's client libraries.

## Supported engines

| Engine | Status |
|---|---|
| **SQLite** | ✅ Complete (verified) |
| **PostgreSQL** | ✅ Via libpq — SSL/TLS, SCRAM |
| **MySQL / MariaDB** | ✅ Complete (verified) — SSL/TLS, SSH tunnel |
| **Informix** | ✅ Via ODBC (x86 build) |
| **MongoDB** | ✅ Read (find/aggregate, mongosh syntax) |
| SQL Server, Oracle | ⏳ Planned (M12) |

Engines load as **plugins** (`.dll`/`.so`) implementing a C contract: adding an
engine never touches the core. See [how to write a driver](https://github.com/danielnuld/quaero/blob/HEAD/docs/WRITING_A_DRIVER.md).

## Features

**SQL editor**
- CodeMirror editor with **schema-aware autocomplete**,…
