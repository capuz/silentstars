---
repo: "Capadonna-Labs/DuckClaw"
name: "DuckClaw"
description: "Multi-agent platform with a zero-trust posture, DuckDB as the analytical state store, and a singleton DB-Writer path for ACID mutations."
readmeQualityOk: true
url: "https://github.com/Capadonna-Labs/DuckClaw"
language: "Python"
languages: ["Python", "TypeScript"]
languagePcts: [77, 21]
stars: 7
forks: 3
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 7
recentReleases: 0
createdAt: "2026-02-22T15:35:41Z"
lastCommitAt: "2026-10-29T12:25:31Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 58
maintainers: ["Arevalojj2020"]
openGraphImageUrl: "https://opengraph.githubassets.com/5b75fb16116d3a2007aaf6d2c6f5ba0b13fc00bd080a9107bb7ebedf9a3f3bc4/Capadonna-Labs/DuckClaw"
---

# DuckClaw

Plataforma multi-agente **DB-first**: DuckDB es el *control plane* (workers, políticas, proyectos, runtime, RAG, conectores MCP). El **API Gateway** y los **agentes** leen en `read_only=True`; las mutaciones van por **comandos tipados** → cola Redis → **DB-Writer** (singleton ACID).

Core genérico LangGraph/LangChain. Multi-tenant · Windows / Linux / macOS · Docs de arquitectura en `docs/architecture/`.

---

## Arquitectura DB-first

**Fuente de verdad:** [`docs/architecture/system_overview.md`](https://github.com/Capadonna-Labs/DuckClaw/blob/HEAD/docs/architecture/system_overview.md) · límites: [`GATEWAY_DB_WRITER_BOUNDARIES.md`](https://github.com/Capadonna-Labs/DuckClaw/blob/HEAD/docs/architecture/GATEWAY_DB_WRITER_BOUNDARIES.md)

### Una bóveda, un schema

| Concepto | Valor canónico |
|----------|----------------|
| **Hub DuckDB** | `db/private/default/duckclaw.duckdb` |
| **Env** | `DUCKCLAW_GATEWAY_DB_PATH=db/private/default/duckclaw.duckdb` |
| **Schema SQL** | Solo `main` (+ schemas internos DuckDB: `information_schema`, `pg_catalog`) |
| **Migraciones** | `packages/shared/src/duckclaw/schema_migrations.py` — **33 versiones** (`uv run duckclaw-migrate`) |
|…
