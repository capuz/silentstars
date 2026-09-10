---
repo: "cyanheads/openstreetmap-mcp-server"
name: "openstreetmap-mcp-server"
description: "Geocode, reverse geocode, and run Overpass spatial queries on OpenStreetMap data via MCP. STDIO or Streamable HTTP."
readmeQualityOk: true
url: "https://github.com/cyanheads/openstreetmap-mcp-server"
homepage: "https://www.npmjs.com/package/@cyanheads/openstreetmap-mcp-server"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
topics: ["ai-agent", "bun", "geocoding", "geolocation", "mcp", "mcp-server", "model-context-protocol", "nominatim", "openstreetmap", "osm"]
stars: 5
forks: 0
openIssues: 2
closedIssues: 63
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2026-05-23T16:58:32Z"
lastCommitAt: "2026-09-10T08:20:37Z"
lastReleaseAt: "2026-05-29T01:54:40Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 87
undervaluedScore: 54
maintainers: ["cyanheads"]
openGraphImageUrl: "https://opengraph.githubassets.com/85841c3283f4949cb029828e58d941e3f94f128878146595519a99c4e065aa84/cyanheads/openstreetmap-mcp-server"
fundingLinks: ["GITHUB:https://github.com/cyanheads", "BUY_ME_A_COFFEE:https://buymeacoffee.com/cyanheads"]
---

<h1>@cyanheads/openstreetmap-mcp-server</h1>
  <p><b>Geocode, reverse geocode, and run Overpass spatial queries on OpenStreetMap data via MCP. STDIO or Streamable HTTP.</b>
  </p>
</div>

</div>

</div>

**Public Hosted Server:** [https://openstreetmap.caseyjhand.com/mcp](https://openstreetmap.caseyjhand.com/mcp)

</div>

---

## Tools

6 tools for geocoding and spatial queries against OpenStreetMap data:

| Tool | Description |
|:---|:---|
| `openstreetmap_search_places` | Convert a place name or address to geographic coordinates and structured place data |
| `openstreetmap_reverse_geocode` | Convert latitude/longitude coordinates to the nearest address or place name |
| `openstreetmap_lookup_objects` | Fetch address details for one or more known OSM objects by their IDs |
| `openstreetmap_query_nearby` | Find OSM features within a radius around a geographic point |
| `openstreetmap_query_bbox` | Find OSM features within a rectangular bounding box |
| `openstreetmap_query_raw` | Execute a raw Overpass QL query for advanced spatial operations |

### `openstreetmap_search_places`

Convert a place name or address to geographic coordinates via Nominatim/OpenStreetMap.

- Two input…
