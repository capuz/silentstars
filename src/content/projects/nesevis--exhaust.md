---
repo: "nesevis/exhaust"
name: "exhaust"
description: "Property-based testing library based on Reflective Generators"
url: "https://github.com/nesevis/exhaust"
language: "Swift"
languages: ["Swift"]
languagePcts: [100]
stars: 13
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2025-07-25T06:17:37Z"
lastCommitAt: "2026-06-25T06:41:00Z"
lastReleaseAt: "2026-04-15T14:46:20Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 64
maintainers: ["nesevis"]
openGraphImageUrl: "https://opengraph.githubassets.com/5490ec9df39962b845c9bd308a8fc532b86c5af01c69d5c78d46217905e22e99/nesevis/exhaust"
---

# Exhaust

# Find the bugs you didn't think of.

Exhaust is a testing library for Swift. It integrates with Swift Testing and XCTest, runs in your existing test target, and executes in milliseconds.

Describe what your code should do, and Exhaust checks that claim across hundreds of inputs. When it finds a failure, it reduces it to the minimal counterexample.

```swift
@Test func mySortProducesAscendingOrder() {
    #exhaust(.int().array(length: 0...100)) { array in
        let result = mySort(array)
        let expected = array.sorted()
        #expect(result == expected)
    }
}
```

```
Counterexample:
  [
    [0]: 1,
    [1]: 0
  ]

Property invoked: 31 times

Reproduce: .replay("8SYM3KW758FWP-3")
```

Exhaust found an input that `mySort` fails to sort and reduced it to two elements: the shortest array that demonstrates the bug.

For stateful systems, which is to say those where bugs emerge from sequences of operations rather than within single function calls, Exhaust generates command sequences and checks invariants after each step. 

Here, a concurrent contract test found a race in a non-atomic counter and reduced six operations to three:

```
Concurrent contract failure…
