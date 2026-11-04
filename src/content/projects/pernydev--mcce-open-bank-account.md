---
repo: "pernydev/mcce-open-bank-account"
name: "mcce-open-bank-account"
description: "⚠ THIS IS A MIRROR! Please use Forgejo! ⚠"
readmeQualityOk: true
url: "https://github.com/pernydev/mcce-open-bank-account"
homepage: "https://forgejo.perny.dev/mcce/open-bank-account/"
language: "Svelte"
languages: ["Svelte", "TypeScript"]
languagePcts: [44, 39]
stars: 5
forks: 1
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2025-02-02T19:34:56Z"
lastCommitAt: "2025-02-02T19:34:56Z"
status: "archived"
tags: []
healthScore: 45
undervaluedScore: 32
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/247cac57b452a39f111fd20bb68fc15e7c25aab022a50eb76b030bef3f6db8c2/pernydev/mcce-open-bank-account"
---

# MC:CE Open Bank Account

This is an application to view the MC:CE bank account balance and transactions.

This application consists of two parts:
- Frontend: Connects to a CDN with JSON files containing the data
- Backend (Cron): Fetches the data from GoCardless and stores it in S3

## Setup

1. Install [Bun](https://bun.sh/)
2. Clone the repository
3. Copy `.env.example` to `.env`
4. (Optional) Change the `PUBLIC_BALANCE_DATA_URL` and `PUBLIC_TRANSACTIONS_DATA_URL` to point to your own JSON files, by default they point to our CDN containing the data for the MC:CE account
5. Run `bun install` to install dependencies
6. Run `bun --bun run dev` to start the development server

## Contributing

Contributions are welcome! Please open an issue before starting work on a pull request. You can ping me (@perny) on Discord if you have any questions!
