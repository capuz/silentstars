---
repo: "bialet/bialet"
name: "bialet"
description: "🚲 Small on purpose. A single-binary web framework. Built-in SQLite, a lightweight embedded scripting language (Wren), a built-in HTTP server, and zero dependencies."
readmeQualityOk: true
url: "https://github.com/bialet/bialet"
homepage: "https://bialet.dev"
language: "C"
languages: ["C"]
languagePcts: [70]
topics: ["framework", "web", "wren-language"]
stars: 16
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2023-09-17T14:40:52Z"
lastCommitAt: "2026-11-17T12:11:24Z"
lastReleaseAt: "2026-07-26T02:22:33Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 64
maintainers: ["4lb0"]
openGraphImageUrl: "https://opengraph.githubassets.com/d6d18652d35624a05fb60b240692504e5a6705cf20e06ed824a50e17cb94f4ce/bialet/bialet"
discussionCount: 1
---

# 🚲 [Bialet](https://bialet.dev)

  It should have stayed this simple.
  One executable: an HTTP server, SQLite, and the Wren scripting language.<br />
  Build data-driven web apps from <code>.wren</code> files. No package manager,<br />
  no YAML, no separate database server, no build step. The Linux x86_64<br />
  binary is 3.7 MB.
  In development since 2023 &middot; running in production at

A whole app in three files.

`_migration.wren` creates the table on first start:

```wren
Db.migrate("init", `
  CREATE TABLE messages (
    text TEXT,
    created_at DATETIME
  )
`)
```

`index.wren` renders `/`:

```wren
var messages = `
  SELECT * FROM messages ORDER BY created_at ASC
`.fetch

return <main>
  <h1>Bialet Guestbook</h1>
  <form method="post" action="/message">
    <input name="msg" placeholder="Write a message...">
    <button>Submit</button>
  </form>
  <hr>
  <ul>
    {{ messages.map {|m| <li>{{ m["text"] }}</li> } }}
  </ul>
</main>
```

`message.wren` handles the POST at `/message`:

```wren
if (Request.isPost) {
  var msg = Request.post("msg")
  if (msg) {
    `INSERT INTO messages VALUES (?, CURRENT_TIME)`.query(msg)
    return <main>
      <p>Messaged <b>{{ msg…
