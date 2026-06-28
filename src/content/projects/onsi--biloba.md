---
repo: "onsi/biloba"
name: "biloba"
description: "Stable, performant, automated browser testing for Ginkgo"
url: "https://github.com/onsi/biloba"
homepage: "https://onsi.github.io/biloba/"
language: "Go"
languages: ["Go"]
languagePcts: [87]
stars: 25
forks: 7
openIssues: 1
closedIssues: 3
watchers: 3
contributors: 4
recentReleases: 3
createdAt: "2023-03-03T21:06:49Z"
lastCommitAt: "2026-06-28T01:33:54Z"
lastReleaseAt: "2026-06-15T23:59:27Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 95
undervaluedScore: 70
maintainers: ["onsi"]
openGraphImageUrl: "https://opengraph.githubassets.com/f5fc6cbbd15a2fc725e48accb507a766333158752ed1e49cad531dea9d35fdcc/onsi/biloba"
fundingLinks: ["GITHUB:https://github.com/onsi"]
---

---

# Biloba

> "Automated browser testing is slow and flaky" - _every developer, ever_

Biloba builds on top of [chromedp](https://github.com/chromedp/chromedp) to bring stable, performant, automated browser testing to Ginkgo. It embraces three principles:
  - Performance via parallelization
  - Stability via pragmatism
  - Conciseness via Ginkgo and Gomega

It's blazing fast and designed to work well with AI toolchains like Claude Code.  It's under active development and use as I build out a new feature-rich single-page app with Claude.

Take a look at the [documentation](https://onsi.github.io/biloba) to learn more and get started!

Here's a quick taste of what Biloba specs look like:

```go
func login(tab *Biloba, user string, password string) {
	GinkgoHelper()
	tab.Navigate("/login")
	Eventually(tab.ByLabel("Username")).Should(tab.SetValue(user)) // locator: a form control by its label
	tab.SetValue(tab.ByLabel("Password"), password)
	tab.Click(tab.ByRole("button").WithName("Log in"))            // locator: role + accessible name
	Eventually(".chat-page").Should(tab.Exist())
}

Describe("a simple chat app", func() {
	// b is a *Biloba instance spun up in our BeforeSuite (not…
