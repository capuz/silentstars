---
repo: "rubyatscale/chatwerk"
name: "chatwerk"
description: "An MCP for accessing packwerk information from AI coding assistants"
readmeQualityOk: true
url: "https://github.com/rubyatscale/chatwerk"
language: "Ruby"
languages: ["Ruby"]
languagePcts: [99]
stars: 8
forks: 3
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 5
recentReleases: 0
createdAt: "2025-03-28T23:54:03Z"
lastCommitAt: "2026-07-25T06:01:12Z"
lastReleaseAt: "2025-11-19T21:51:12Z"
status: "thriving"
tags: []
healthScore: 67
undervaluedScore: 52
maintainers: ["dependabot[bot]", "dduugg", "technicalpickles"]
openGraphImageUrl: "https://opengraph.githubassets.com/db14cc379d05f832e1a8f24ff111cc6bf11ddfee520552d9b32d875050cb6e9f/rubyatscale/chatwerk"
---

# Chatwerk

Chatwerk provides AI tool integration for the [QueryPackwerk](https://github.com/rubyatscale/query_packwerk) gem. It adds a Model Context Protocol (MCP) server that allows AI tools like Cursor IDE to access information about your Packwerk packages, dependencies, and violations.

> [!NOTE]
> This is an early prerelease version. We'll continue to update it as we develop. Contributions and feedback are welcome!

## Installation

Install the gem. 

Either add it to your packwerk'd application's Gemfile:

```ruby
$ bundle add chatwerk
$ bundle install
```

Or, install it on its own:

```bash
$ gem install chatwerk
```

## Usage

### Starting the MCP Server

You can test the inspector to see if it's working

```bash
$ chatwerk inspect
```

### Connecting with Cursor IDE

To use Chatwerk with Cursor:

1. In Cursor, open Settings > MCP

2. Add a new MCP connection as a command
   Name: `chatwerk`
   Command: `chatwerk mcp`

3. Ask Cursor to check all the tools on packwerk. Give it an example pack name (partial strings work)

### Example Queries for Cursor

Once connected, you can ask Cursor questions about your Packwerk structure:

- "What are all the packages in this…
