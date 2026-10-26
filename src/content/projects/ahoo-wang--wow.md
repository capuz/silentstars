---
repo: "Ahoo-Wang/Wow"
name: "Wow"
description: "Modern Reactive CQRS Architecture Microservice development framework based on DDD and EventSourcing | 基于 DDD & EventSourcing 的现代响应式 CQRS 架构微服务开发框架"
readmeQualityOk: true
url: "https://github.com/Ahoo-Wang/Wow"
homepage: "https://wow.ahoo.me/"
language: "TypeScript"
languages: ["TypeScript", "Kotlin"]
languagePcts: [52, 46]
topics: ["cqrs", "domain-driven-design", "event-driven", "event-sourcing", "microservice", "reactive-programming", "high-performance", "ddd", "architecture", "elasticsearch"]
stars: 304
forks: 40
openIssues: 11
closedIssues: 31
watchers: 7
contributors: 8
recentReleases: 0
createdAt: "2023-04-15T05:28:03Z"
lastCommitAt: "2026-10-26T18:06:04Z"
lastReleaseAt: "2023-05-18T12:47:12Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 95
undervaluedScore: 39
maintainers: ["Ahoo-Wang"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/628167080/2f05799f-f51b-4c72-b04c-6d02a0d03f4b"
---

> **Wow 10.0 is in pre-release on this branch.** The stable 9.x line lives on the [`v9`](https://github.com/Ahoo-Wang/Wow/tree/v9) branch.

---

## What you write, and what you get

You write an aggregate: it takes a command, looks at its state, and decides the events.

```kotlin
@OnCommand(produces = [Withdrawn::class])
fun onCommand(command: Withdraw): Decision =
    if (command.amount > state.balance) {
        Decision.reject(Rejections.INSUFFICIENT_BALANCE, "The balance is ${state.balance}.")
    } else {
        Decision.events(Withdrawn(command.amount))
    }
```

and you test it in the same terms:

```kotlin
@Test
fun `a withdrawal the balance does not cover is rejected`() = aggregateSpec(model, id = "alice") {
    given(AccountOpened("Alice"), Deposited(100))
    whenCommand(Withdraw(150)) { expectRejected(Account.Rejections.INSUFFICIENT_BALANCE) }
    whenCommand(Withdraw(30)) {
        expectEvents(Withdrawn(30))
        expectState { balance.assert().isEqualTo(70) }
    }
}
```

From that, Wow gives you an HTTP route for every command, a state read and queries for every aggregate, an OpenAPI document, a typed TypeScript client, retries and parking for every handler,…
