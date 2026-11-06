---
repo: "tekthar/abp-mcp"
name: "abp-mcp"
description: "Auto-generate Model Context Protocol servers from ABP Framework apps. In-process, permission-aware, multi-tenant."
readmeQualityOk: true
url: "https://github.com/tekthar/abp-mcp"
language: "C#"
languages: ["C#", "TypeScript"]
languagePcts: [56, 43]
topics: ["abp", "abp-framework", "ai-agents", "aspnetcore", "claude", "dotnet", "mcp", "model-context-protocol", "nuget"]
stars: 10
forks: 2
openIssues: 10
closedIssues: 31
watchers: 1
contributors: 5
recentReleases: 7
createdAt: "2026-04-26T03:00:35Z"
lastCommitAt: "2026-11-06T13:20:05Z"
lastReleaseAt: "2026-11-06T09:27:53Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "release_machine"]
healthScore: 95
undervaluedScore: 58
maintainers: ["claude", "ak-itani", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/679d3fea7d2e6aac973008910bb14f0b0e831e35ed0dfe9a4ebaf9ed47cb24bc/tekthar/abp-mcp"
---

# abp-mcp

**Your ABP app, ready for AI agents, with the permissions you already have.**

abp-mcp turns your ABP Framework application services into tools that Claude, Cursor and any other
[Model Context Protocol](https://modelcontextprotocol.io) (MCP) client can call. Add one attribute, and an agent can
use your app the way a signed-in user does: same permissions, same tenant, same validation, same business rules.

```csharp
[McpTool]                                              // ← the whole integration
public class LoanAppService : ApplicationService, ILoanAppService
{
    /// <summary>Check out an edition to a member. Refused with LIBRARY:MEMBER_SUSPENDED
    /// if the member is suspended.</summary>
    [Authorize(LibraryPermissions.Loans.CheckOut)]
    public async Task<LoanDto> CheckOutAsync(CheckOutDto input) { /* your code */ }
}
```

An agent connected to `/mcp` now sees a `Loan_CheckOut` tool, described by your doc comment, with a JSON schema built
from `CheckOutDto`, but only if its token has `Loans.CheckOut`. Calling it runs your method with the same validation,
unit of work, feature checks and audit logging as your REST endpoint.

## Why you'll like it

- **Zero…
