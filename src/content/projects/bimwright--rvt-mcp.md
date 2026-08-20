---
repo: "bimwright/rvt-mcp"
name: "rvt-mcp"
description: "BIMwright — AI-native Revit MCP server (Revit 2022–2027)"
readmeQualityOk: true
url: "https://github.com/bimwright/rvt-mcp"
homepage: "https://github.com/bimwright/rvt-mcp"
language: "C#"
languages: ["C#"]
languagePcts: [98]
topics: ["aec", "ai", "autodesk", "bim", "claude", "claude-code", "csharp", "dotnet", "mcp", "model-context-protocol"]
stars: 16
forks: 9
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-04-17T08:15:50Z"
lastCommitAt: "2026-08-20T04:09:53Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 77
undervaluedScore: 27
maintainers: ["lekhoa221"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1213284213/8f5a8141-ea3b-4002-96bd-d538beb02fcb"
---

</p>

<h1 align="center">rvt-mcp</h1>

  MCP gateway for Autodesk Revit — local tools for agents, optional personal bake loop
</p>

</p>

  English · <a href="README.vi.md">Tiếng Việt</a> · <a href="README.zh-CN.md">简体中文</a> · <a href="README.ja.md">日本語</a>
</p>

---

## Install

**No setup ZIP is published.** GitHub Releases were unpublished so v0.5.0 and earlier are not offered as a download. The v0.6.0 client ZIP is not out yet.

Do **not** fetch old tags, old `RvtMcp.Setup-*.zip` URLs, or `dotnet tool install -g Bimwright.Rvt.Server` / `RvtMcp.Server`.

**If you are an AI agent:** stop. Tell the user there is no published installer. Do not clone, build, or install from NuGet unless they explicitly asked for a developer setup. Protocol: [AGENTS.md](https://github.com/bimwright/rvt-mcp/blob/HEAD/AGENTS.md).

Until a new GitHub Release exists, the only supported install is from source (Developer install below).

For AutoCAD, use [dwg-mcp](https://github.com/bimwright/dwg-mcp) separately — different product, different install.

### Check that it works

1. Open Revit with a model.
2. Start the MCP connection from the ribbon (BIMwright / RvtMcp panel).
3. From the MCP client, list…
