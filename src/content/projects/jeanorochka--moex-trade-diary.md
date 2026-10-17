---
repo: "Jeanorochka/moex-trade-diary"
name: "moex-trade-diary"
description: "Import of trades in trading journal format (MoEx only)"
originalDescription: "Импорт сделок в формате торгового дневника (MoEx only)"
descriptionLang: "ru"
readmeQualityOk: true
url: "https://github.com/Jeanorochka/moex-trade-diary"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["backtesting", "broker-api", "excel-export", "fifo", "financial-data", "moex", "pnl-analysis", "portfolio-analytics", "python", "tbank"]
stars: 12
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-09-11T02:01:50Z"
lastCommitAt: "2026-10-17T08:00:14Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 74
undervaluedScore: 19
maintainers: ["Jeanorochka"]
openGraphImageUrl: "https://opengraph.githubassets.com/0e150d7dfb329519316f54c3dbbe1927171adde9282128d4ab007111008449ff/Jeanorochka/moex-trade-diary"
---

# Trading Journal
Export of T-Bank trade history to Excel, analytics and charts from the same `main.py`.<br>
`v. 2.0.1` - updated old libraries (Pandas, httpsx ...) and replaced them with the now Rust-based Polars, Primp, orjson<br>
`v. 2.1.1` - added Finam broker + extended portfolio analytics<br>
Installation:

```bash
uv sync --locked
```
For the export, `INVEST_TOKEN` is needed in the environment or `.env`:
```text
INVEST_TOKEN=your_token
```
Interactive export:
```bash
python main.py
```
Export with analytics and charts:
```bash
python main.py --from 01.09.26 --to 30.09.26 --analytics
```
The account can be specified via `--account-id`. Broker parameters, time zone, export directory and additional columns are configured in `config.toml`.

Analysis of an already exported journal works without a token and `config.toml`:
```bash
python main.py --analyze exports/trades.xlsx
python main.py --analyze exports/trades.xlsx --starting-capital 100000 --output-dir analytics
```
The same options are available via the `trade-exporter` command. When running via uv, add `uv run` before `python` or `trade-exporter`.

A regular export keeps the previous six columns:
`date | ticker | entry…
