---
repo: "mblode/allmd"
name: "allmd"
description: "Everything is context."
readmeQualityOk: true
url: "https://github.com/mblode/allmd"
homepage: "https://blode.co/allmd"
language: "TypeScript"
languages: ["TypeScript", "HTML"]
languagePcts: [70, 20]
topics: ["ai", "cli", "developer-tools", "llm", "markdown", "pdf", "youtube"]
stars: 12
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-02-16T21:52:42Z"
lastCommitAt: "2026-08-10T05:04:53Z"
lastReleaseAt: "2026-05-01T06:26:45Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 86
undervaluedScore: 45
maintainers: ["mblode", "github-actions[bot]", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/91afc5256233a1f5092ed9bd13c09515cb4e360a18be6c86a7e0fe9159ec5295/mblode/allmd"
---

# [allmd](https://blode.co/allmd)

**Turn anything into context your agent can read**

Point it at a URL or a file. Twelve source types, markdown out.

  </a>
  </a>
</p>

</div>

## Demo

See what each converter produces, or read the full reference in the docs.

<p>
</a>
</a>
</p>

## Install

```bash
npm install -g allmd
```

Requires Node 24 or newer. Set `OPENAI_API_KEY` for the AI-backed converters and
`FIRECRAWL_API_KEY` for web pages, in your environment or a `.env` file. Video and audio
transcription uses the bundled `ffmpeg-static` binary, so there is nothing else to install.

## Quickstart

```bash
# Auto-detect the input type from a URL or a file path
allmd https://blode.co/marx

# A YouTube transcript, with timestamps, written to a file you name
allmd youtube https://www.youtube.com/watch?v=dQw4w9WgXcQ -o transcript.md

# A PDF, raw extracted text with no AI pass, printed instead of saved
allmd pdf report.pdf --no-ai --stdout
```

Output is markdown with YAML frontmatter, written into the current directory unless `-o` or `-d`
says otherwise. Run `allmd` with no arguments for interactive mode, or `allmd examples` for more.

## Agents

```bash
npx skills add mblode/allmd…
