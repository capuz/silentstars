---
repo: "stufently/aviasales-mcp"
name: "aviasales-mcp"
description: "MCP server for flight price search via the Aviasales / Travelpayouts Data API. 13 read-only tools for Claude Code, Claude Desktop, Cursor and any MCP client: fares by route and month, cheapest day to fly, flexible dates, budget and inspiration search, plus airport/city/airline lookup that resolves place names to IATA codes."
readmeQualityOk: true
url: "https://github.com/stufently/aviasales-mcp"
language: "Python"
languages: ["Python"]
languagePcts: [99]
topics: ["aviasales", "claude-code", "fastmcp", "flight-search", "flights", "llm-tools", "mcp", "mcp-server", "model-context-protocol", "python"]
stars: 14
forks: 3
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2026-03-17T07:04:31Z"
lastCommitAt: "2026-10-10T10:03:59Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 25
maintainers: ["stufently", "ostiums"]
openGraphImageUrl: "https://opengraph.githubassets.com/c0d9b3089fc419eb160497aa04f6fe9f70f655e1dc2c23a5bbf1da3f2820ab66/stufently/aviasales-mcp"
---

# aviasales-mcp

MCP server for flight price search via Aviasales / Travelpayouts Data API.
Thirteen read-only tools that let Claude Code, Claude Desktop, Cursor or any
other MCP client answer flight-price questions: fares by route and month, the
cheapest day to fly, flexible dates, budget and inspiration search, plus
airport/city/airline lookup.

Unlike Google-Flights-scraping MCP servers, place names do not have to be
guessed into IATA codes by the model: `lookup_cities` and `find_nearest_airports`
resolve them.

## Common prompts

Ask your agent in plain language — it picks the tool.

| Prompt | Tools it reaches for |
|--------|----------------------|
| "How much is a flight from Moscow to Istanbul in March?" | `lookup_cities` → `search_flights` |
| "What's the cheapest day to fly to Bangkok in September?" | `get_prices_calendar` |
| "I'm flying Berlin→Lisbon on 12 May, back on the 19th — would shifting a day either way be cheaper?" | `get_flexible_date_prices` |
| "Where can I fly from St Petersburg for under 30 000 ₽?" | `get_city_directions`, `search_by_price_range` |
| "Which airport should I fly into for Pattaya, and what does it cost from Dubai?" | `find_nearest_airports`…
