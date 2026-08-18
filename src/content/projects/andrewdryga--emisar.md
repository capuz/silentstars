---
repo: "AndrewDryga/emisar"
name: "emisar"
description: "An MCP that lets AI tools securely connect to your infrastructure, write IaaS code, debug issues, and assist during incidents - without risking production stability. Built for security teams to approve and infrastructure teams to experience like magic."
readmeQualityOk: true
url: "https://github.com/AndrewDryga/emisar"
homepage: "https://emisar.dev/"
language: "Elixir"
languages: ["Elixir", "Go"]
languagePcts: [66, 21]
topics: ["ai", "devops", "elixir", "go", "security", "infrastructure", "mcp", "ai-agents", "devsecops", "infosec"]
stars: 416
forks: 50
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-05-19T01:21:19Z"
lastCommitAt: "2026-08-18T04:10:42Z"
lastReleaseAt: "2026-06-08T02:39:50Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 89
undervaluedScore: 28
maintainers: ["AndrewDryga", "detail-app[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/0489eb6f6daeb8f687671b6604f402fdb92123774acd900b4924f6ca9ab79297/AndrewDryga/emisar"
---

# emisar

**Leave the agent working. Keep production authority bounded.**

emisar gives MCP-capable agents a catalog of declared infrastructure actions
instead of a shell. Policy decides what runs, what waits for a person, and what
is denied. A small outbound-only runner checks the action again on the host
before it executes anything.

Start with the public pack catalog, let emisar suggest the packs that match a
host, and add your own actions without adding another MCP server to every
client.

## Start with one host

You need an [emisar account](https://emisar.dev/sign_up), a Linux host with
systemd and `sudo`, and outbound HTTPS access to `emisar.dev:443`. You do not
open an inbound port on the host.

1. In the dashboard, choose **Connect a runner**. Copy the generated command;
   it contains a fresh, single-use enrollment key.
2. Run it on the host:

   ```sh
   curl -sSL https://emisar.dev/install.sh \
     | sudo EMISAR_ENROLLMENT_KEY=emkey-enroll-... EMISAR_URL=https://emisar.dev bash
   ```

   The installer verifies the release checksum, creates the service, installs
   host-matched starter packs, and starts the runner.
3. Confirm the runner is online in the dashboard, then…
