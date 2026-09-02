---
repo: "ferdousbhai/tasty-agent"
name: "tasty-agent"
description: "Let Claude manage your tastytrade portfolio."
readmeQualityOk: true
url: "https://github.com/ferdousbhai/tasty-agent"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["finance", "investing", "options", "stocks", "tastytrade", "trading"]
stars: 84
forks: 26
openIssues: 0
closedIssues: 14
watchers: 6
contributors: 3
recentReleases: 0
createdAt: "2024-11-08T01:59:37Z"
lastCommitAt: "2026-09-02T08:03:11Z"
lastReleaseAt: "2026-06-01T14:35:29Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 92
undervaluedScore: 32
maintainers: ["ferdousbhai"]
openGraphImageUrl: "https://opengraph.githubassets.com/a23c63380f6f81838b5bef8504903481607cc8cc05e0932cb21f9d0097609366/ferdousbhai/tasty-agent"
fundingLinks: ["GITHUB:https://github.com/ferdousbhai"]
---

# tasty-agent: A TastyTrade MCP Server

A Model Context Protocol server for TastyTrade brokerage accounts. Enables LLMs to monitor portfolios, analyze positions, and execute trades. Features automated IV analysis prompts and compact tool output.

## Authentication

**OAuth Setup**:
1. Create an OAuth app at https://my.tastytrade.com/app.html#/manage/api-access/oauth-applications
2. Check all scopes, save your client ID and client secret
3. Create a "New Personal OAuth Grant" in your OAuth app settings (check all scopes)
4. Copy the generated refresh token
5. Configure the MCP server with your credentials (see Usage section below)

## MCP Tools

### Account & Portfolio
- **`account_overview(include=["balances","positions"])`** - Account balances (including net liquidating value) and open positions.

### Market Data & Research
- **`get_quotes(instruments, timeout=10.0)`** - Real-time quotes for stocks, options, futures, and indices via DXLink streaming
- **`get_greeks(options, timeout=10.0)`** - Greeks (delta, gamma, theta, vega, rho) for equity and futures options via DXLink streaming
- **`get_market_metrics(symbols)`** - IV rank, percentile, beta, liquidity for multiple symbols
-…
