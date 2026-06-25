---
repo: "sibidharan/zealphp"
name: "zealphp"
description: "A PHP HTTP server built on OpenSwoole. WebSocket, SSE, coroutines, shared memory — first-class because the server never shuts down between requests. Bring your existing PHP code."
url: "https://github.com/sibidharan/zealphp"
homepage: "https://php.zeal.ninja"
language: "PHP"
languages: ["PHP"]
languagePcts: [93]
topics: ["ai", "coroutines", "http-server", "openswoole", "php", "real-time", "sse", "streaming", "web-framework", "websocket"]
stars: 61
forks: 15
openIssues: 12
closedIssues: 181
watchers: 3
contributors: 8
recentReleases: 0
createdAt: "2024-12-10T11:01:11Z"
lastCommitAt: "2026-06-25T01:38:01Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 98
undervaluedScore: 55
maintainers: ["sibidharan", "dependabot[bot]", "Guruprasanth-M"]
openGraphImageUrl: "https://opengraph.githubassets.com/56b45a233d98dd546ca9a48235b2eb1327a009c79731ac7148d1d066c04be139/sibidharan/zealphp"
discussionCount: 0
---

# ZealPHP — A PHP HTTP Server (built on OpenSwoole)

ZealPHP runs PHP as the HTTP server itself — not a CGI worker behind one. Built on **OpenSwoole**, it ships HTTP, WebSocket, SSE, coroutines, shared memory, timers, and task workers as first-class primitives because the server stays alive between requests. New features go async without a separate Node or Go service.

The headline mode is **`coroutine-legacy`**: a compatibility runtime where traditional request-style PHP — `$_GET` / `$_POST` / `$_SESSION`, `session_start()`, `header()`, `setcookie()`, `exit`/`die`, `require_once` — runs unchanged **under coroutine concurrency**, with every request-state primitive (the seven superglobals, `$GLOBALS`, function/class statics, constants, `require_once` re-execution, locale/timezone/cwd/umask) isolated per coroutine by [ext-zealphp](https://github.com/sibidharan/ext-zealphp). "Old PHP just works, concurrently" — with one honest conditional: the app's class graph must be **warmed before concurrency hits it** (`App::preloadClassmap()` for Composer apps; pure-`require_once` apps with no autoloader belong in `legacy-cgi`). Alpha — see stability note below.

**Homepage:**…
