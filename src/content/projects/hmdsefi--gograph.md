---
repo: "hmdsefi/gograph"
name: "gograph"
description: "Generic graph data structures and algorithms for Go (Golang): dependency graphs (DAGs) with cycle checks and topological sort, BFS and DFS traversal, Dijkstra and other shortest paths, connectivity and partitioning. No dependencies."
readmeQualityOk: true
url: "https://github.com/hmdsefi/gograph"
homepage: "https://gograph.dev"
language: "Go"
languages: ["Go"]
languagePcts: [100]
topics: ["generic", "golang", "graph", "graph-algorithms", "graph-theory", "graph-traversal", "graph-datastructures", "generic-graph", "dag", "dependency-graph"]
stars: 141
forks: 29
openIssues: 43
closedIssues: 78
watchers: 3
contributors: 15
recentReleases: 1
createdAt: "2022-07-28T16:54:30Z"
lastCommitAt: "2026-10-30T11:02:17Z"
lastReleaseAt: "2026-09-29T18:49:52Z"
status: "thriving"
tags: ["needs_contributors", "funded"]
healthScore: 87
undervaluedScore: 46
maintainers: ["hmdsefi", "lazzyfrog", "yoreva-01"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/518926762/2bf59033-16fe-4df1-bf27-a233ab048c8c"
fundingLinks: ["GITHUB:https://github.com/hmdsefi"]
---

gograph is a generic graph library for Go (Golang) with first-class support for dependency
graphs. Acyclic graphs refuse edges that would create a cycle, and `TopologySort`
gives you an order to run things in. It also covers traversal, shortest paths,
strongly connected components and graph partitioning.

- **Generic:** vertex labels can be any comparable type, such as strings, integers or your own structs.
- **Graph data structures:** directed, undirected, acyclic (DAG) and weighted graphs, with weights on vertices and edges.
- **Dependency graphs:** `Acyclic()` graphs reject cycles, `TopologySort` returns a valid order, and the `dag` package finds what depends on what and what can run in parallel.
- **Traversal:** BFS (breadth-first search), DFS (depth-first search), topological sort, closest-first and random-walk iterators, and depth-first search events that label each edge as a tree, back, forward or cross edge.
- **Shortest paths:** Dijkstra, Bellman-Ford, Floyd-Warshall, multi-source Dijkstra, k-center and transitive reduction.
- **Connectivity:** connected components and cycle detection that can return the cycle, strongly connected components with Tarjan, Kosaraju and…
