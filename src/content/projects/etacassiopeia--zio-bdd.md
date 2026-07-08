---
repo: "EtaCassiopeia/zio-bdd"
name: "zio-bdd"
description: "A BDD testing framework integrating Gherkin-style tests with ZIO’s effect system"
readmeQualityOk: true
url: "https://github.com/EtaCassiopeia/zio-bdd"
homepage: "https://etacassiopeia.github.io/zio-bdd/"
language: "Scala"
languages: ["Scala"]
languagePcts: [98]
topics: ["gherkin", "scala", "test", "zio"]
stars: 14
forks: 1
openIssues: 7
closedIssues: 77
watchers: 1
contributors: 1
recentReleases: 7
createdAt: "2025-02-27T21:24:30Z"
lastCommitAt: "2026-07-08T05:42:49Z"
lastReleaseAt: "2026-07-06T04:10:36Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded", "release_machine"]
healthScore: 98
undervaluedScore: 79
maintainers: ["EtaCassiopeia"]
openGraphImageUrl: "https://opengraph.githubassets.com/8bcf603f889eed484b2931ed3956d11fc8327ee049e2b10e728e247502cc61e2/EtaCassiopeia/zio-bdd"
fundingLinks: ["GITHUB:https://github.com/EtaCassiopeia"]
discussionCount: 1
---

# zio-bdd

A BDD testing framework for Scala 3 + ZIO 2 that connects Gherkin `.feature` files to type-safe ZIO step definitions.

## Minimal example

```gherkin
# src/test/resources/features/account.feature
Feature: Account balance
  Scenario: Deposit increases balance
    Given an account with balance 100
    When a deposit of 50 is made
    Then the balance should be 150
```

```scala
import zio.*
import zio.bdd.core.{Assertions, Suite}
import zio.bdd.core.step.ZIOSteps
import zio.schema.{DeriveSchema, Schema}

case class AccountState(balance: Int = 0)
object AccountState:
  given Schema[AccountState] = DeriveSchema.gen[AccountState]

@Suite(featureDirs = Array("src/test/resources/features"), reporters = Array("pretty"))
object AccountSpec extends ZIOSteps[Any, AccountState]:
  Given("an account with balance " / int) { (initial: Int) =>
    ScenarioContext.update(_.copy(balance = initial))
  }

  When("a deposit of " / int / " is made") { (amount: Int) =>
    ScenarioContext.update(s => s.copy(balance = s.balance + amount))
  }

  Then("the balance should be " / int) { (expected: Int) =>
    ScenarioContext.get.flatMap(s => Assertions.assertEquals(s.balance, expected))
  }
```…
