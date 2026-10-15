---
repo: "tum-gis/3dcitydb-mcp-server"
name: "3dcitydb-mcp-server"
description: "A Model Context Protocol (MCP) server that gives AI assistants (Claude Code, Claude Desktop, and any MCP-compatible client) direct, natural language access to semantic 3D city models in CityGML managed within a 3DCityDB V5. Also includes an agentic Chatbot application using the MCP server with commercial or locally running LLMs."
readmeQualityOk: true
url: "https://github.com/tum-gis/3dcitydb-mcp-server"
language: "Python"
languages: ["Python"]
languagePcts: [93]
topics: ["3d-city-database", "3d-city-models", "citygml", "cityjson", "mcp-client", "mcp-server", "postgis", "sfcgal"]
stars: 18
forks: 0
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 12
recentReleases: 6
createdAt: "2026-05-08T15:06:56Z"
lastCommitAt: "2026-10-15T08:32:50Z"
lastReleaseAt: "2026-10-13T13:40:50Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 79
undervaluedScore: 38
maintainers: ["thomashkolbe", "khaoulakanna1", "kkhaoula12"]
openGraphImageUrl: "https://opengraph.githubassets.com/bfec51b8635d72bde765dba262d18c7f4a08f3dd850ef81590190266b549b1b0/tum-gis/3dcitydb-mcp-server"
---

A [Model Context Protocol (MCP)](https://modelcontextprotocol.io) server giving AI assistants direct, natural language access to semantic 3D city models in CityGML managed within a [**3DCityDB v5**](https://github.com/3dcitydb/3dcitydb) geodatabase.

It dynamically resolves CityGML object classes, properties, codelists, and generic attributes from the database so the AI can answer both spatial and semantic queries stated in natural language, write and execute SQL queries, and reason about CityGML data — without any manual prompt engineering. 
By including the MCP server in agentic coding environments, it becomes easy to create software that can read and write complex structured 3D city models compliant to the [OGC CityGML standard](https://www.ogc.org/standards/citygml/) (and using [3DCityDB V5](https://github.com/3dcitydb/3dcitydb) as the data repository).

Furthermore, a **Chat Assistant** is included offering a simple GUI for interactive query asking, reasoning, and answering. It is an agentic AI tool based on [LangChain](https://github.com/langchain-ai) utilising the [ReAct pattern](https://reference.langchain.com/javascript/langchain-react) for carrying out multi-step…
