---
repo: "mandar1045/infusion"
name: "infusion"
description: "Infuse any API into Elixir: official-quality SDKs generated from OpenAPI specs"
readmeQualityOk: true
url: "https://github.com/mandar1045/infusion"
homepage: "https://hex.pm/packages/infusion"
language: "Elixir"
languages: ["Elixir"]
languagePcts: [100]
stars: 9
forks: 1
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2026-11-13T21:20:54Z"
lastCommitAt: "2026-11-15T11:20:56Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 70
undervaluedScore: 23
maintainers: ["mandar1045"]
openGraphImageUrl: "https://opengraph.githubassets.com/9a067a94b3116986bcdb3e991b0e3155a1384d8f26dcbe6472d89e6051e15ea8/mandar1045/infusion"
---

# Infusion

Infuse any API into Elixir: official-quality Elixir SDKs, generated from an
OpenAPI spec.

> **Status: 0.1, early.** Infusion generates complete SDKs for OpenAI,
> Stripe, GitHub, Twilio and Cloudflare that compile without a single
> warning, with streaming and pagination. The generated GitHub SDK makes
> live API calls; the others are tested against stubs so far. Feedback and
> bug reports with the spec that broke it are very welcome.

```console
$ mix infusion.gen https://raw.githubusercontent.com/openai/openai-openapi/main/openapi.yaml --name OpenAI
Generated OpenAI in openai_sdk/: 388 operations, 2272 schemas, 2754 files (5828 ms)
```

```elixir
{:ok, completion} =
  OpenAI.Chat.Completions.create(
    model: "gpt-5.5",
    messages: [%{role: "user", content: "Say hello"}]
  )

[%{message: %{content: text}}] = completion.choices

# Streaming, as a plain Elixir Stream of typed events
OpenAI.Chat.Completions.create_stream!(model: "gpt-5.5", messages: messages)
|> Stream.flat_map(& &1.choices)
|> Enum.each(&IO.write(&1.delta.content || ""))

# Every item of a list, across pages, fetched as you read
GitHub.Repos.list_for_org_all!("elixir-lang", per_page: 100)
|>…
