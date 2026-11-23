---
repo: "ftes/phoenix_test_playwright"
name: "phoenix_test_playwright"
description: "Execute PhoenixTest cases in an actual browser via Playwright."
readmeQualityOk: true
url: "https://github.com/ftes/phoenix_test_playwright"
homepage: "https://hexdocs.pm/phoenix_test_playwright/"
language: "Elixir"
languages: ["Elixir"]
languagePcts: [100]
topics: ["liveview", "phoenix", "playwright"]
stars: 90
forks: 30
openIssues: 2
closedIssues: 42
watchers: 3
contributors: 17
recentReleases: 4
createdAt: "2024-12-05T19:02:09Z"
lastCommitAt: "2026-11-23T12:21:56Z"
lastReleaseAt: "2026-11-21T15:27:13Z"
status: "thriving"
tags: []
healthScore: 97
undervaluedScore: 58
maintainers: ["ftes", "renovate[bot]", "claude[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/73e80396837f9b4722f19d0a88e2f1f778a2bb4dd57856bb2ed046b03fa1ebce/ftes/phoenix_test_playwright"
---

# PhoenixTestPlaywright

Execute [PhoenixTest](https://hexdocs.pm/phoenix_test) cases in an actual browser via [Playwright](https://playwright.dev/).
Locator matching follows Playwright's browser-oriented semantics; see [Locator semantics](#locator-semantics).

```elixir
defmodule Features.RegisterTest do
  use PhoenixTest.Playwright.Case,
    async: true,                         # async with Ecto sandbox
    parameterize: [                      # run in multiple browsers in parallel
      Playwright.Test.parameters(name: "chromium", browser_name: :chromium),
      Playwright.Test.parameters(name: "firefox", browser_name: :firefox)
    ]

  @tag Playwright.Test.use(trace: :on)   # record a trace into test-results/
  test "register", %{conn: conn} do
    conn
    |> visit("/")
    |> click_link("Register")
    |> fill_in("Email", with: "f@ftes.de")
    |> click_button("Create an account")
    |> assert_has(".error", text: "required")
    |> screenshot("error.png", full_page: true)
  end
end
```

Please [get in touch](https://ftes.de) with feedback of any shape and size.

Enjoy! Freddy.
