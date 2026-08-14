---
repo: "aerovato/nitro"
name: "nitro"
description: "A tiny and efficient harness for running Bash commands."
readmeQualityOk: true
url: "https://github.com/aerovato/nitro"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [97]
stars: 78
forks: 6
openIssues: 0
closedIssues: 1
watchers: 3
contributors: 1
recentReleases: 1
createdAt: "2026-04-01T12:44:24Z"
lastCommitAt: "2026-08-14T05:15:47Z"
lastReleaseAt: "2026-05-17T08:11:32Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 73
undervaluedScore: 14
maintainers: ["kevinMEH"]
openGraphImageUrl: "https://opengraph.githubassets.com/baf054c9845709383a9e1ad7e5b9b1c76b620b0e590dffa64b18c2c86a011f28/aerovato/nitro"
---

</p>

#### Nitro: A tiny and efficient harness for running Bash commands.

## Quickstart

1. Install Nitro:

   ```bash
   npm install -g @aerovato/nitro
   ```

2. Add a provider:

   ```bash
   nitro provider add
   ```

3. Run your first command:
   ```bash
   nitro "find all TS and TSX files and count total lines"
   nitro "summarize how the Bash tool is implemented src/tools/bash.tsx"
   nitro "read the README and setup the project for development"
   ```

## Usage

```bash
nitro "<request>"              # Execute request and exit

nitro interactive [request]    # Start interactive session
nitro i [request]              # (shorthand)

nitro continue <request>       # Continue last conversation
nitro c <request>              # (shorthand)

nitro resume [request]         # Resume last conversation interactively
nitro r [request]

nitro strict [request]         # Run in strict mode (always confirm commands)
nitro s [request]

nitro provider add             # Add a new provider
nitro provider list            # List all providers
nitro provider edit            # Edit a provider
nitro provider remove          # Remove a provider
nitro provider default         # Set default provider…
