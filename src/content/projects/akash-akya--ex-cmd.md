---
repo: "akash-akya/ex_cmd"
name: "ex_cmd"
description: "ExCmd is an Elixir library to run external programs and to communicate with back pressure"
readmeQualityOk: true
url: "https://github.com/akash-akya/ex_cmd"
language: "Elixir"
languages: ["Elixir"]
languagePcts: [86]
topics: ["elixir", "stream", "port", "erlang"]
stars: 112
forks: 6
openIssues: 0
closedIssues: 14
watchers: 2
contributors: 3
recentReleases: 0
createdAt: "2020-03-19T18:19:56Z"
lastCommitAt: "2026-11-08T10:34:31Z"
lastReleaseAt: "2025-01-31T04:56:51Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 99
undervaluedScore: 25
maintainers: ["akash-akya"]
openGraphImageUrl: "https://opengraph.githubassets.com/faf14a337e8769d195eb799d8208d0e12e44d6a31f0888755a95bc18f6d0c443/akash-akya/ex_cmd"
discussionCount: 3
---

# ExCmd

ExCmd is an Elixir library for running and communicating with external programs using a back-pressure mechanism. It provides a robust alternative to Elixir's built-in [Port](https://hexdocs.pm/elixir/Port.html) with improved memory management through demand-driven I/O.

## The Port I/O Problem

When using Elixir's built-in [Port](https://hexdocs.pm/elixir/Port.html), running external programs that generate large amounts of output (like streaming video using `ffmpeg`) can quickly lead to memory issues. This happens because Port I/O is not demand-driven - it consumes output from stdout as soon as it's available and sends it to the process mailbox. Since BEAM process mailboxes are unbounded, the output accumulates there waiting to be received.

### Memory Usage Comparison

Let's look at how ExCmd handles memory compared to Port when processing large streams:

Using Port (memory grows unbounded):
```elixir
Port.open({:spawn_executable, "/bin/cat"}, [{:args, ["/dev/random"]}, {:line, 10}, :binary, :use_stdio])
```

Using ExCmd (memory remains stable):
```elixir
ExCmd.stream!(~w(cat /dev/random))
|> Enum.each(fn data ->
  IO.puts(IO.iodata_length(data))
end)
```

ExCmd solves…
