---
repo: "SleipnirGroup/Sleipnir"
name: "Sleipnir"
description: "Reverse mode autodiff library, interior-point method, and NLP solver DSL for C++23 and Python"
readmeQualityOk: true
url: "https://github.com/SleipnirGroup/Sleipnir"
language: "C++"
languages: ["C++"]
languagePcts: [82]
topics: ["optimization", "interior-point-method", "autodiff"]
stars: 83
forks: 17
openIssues: 4
closedIssues: 32
watchers: 5
contributors: 15
recentReleases: 0
createdAt: "2022-11-01T02:17:17Z"
lastCommitAt: "2026-11-25T03:13:51Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 97
undervaluedScore: 49
maintainers: ["calcmogul", "Gold856"]
openGraphImageUrl: "https://opengraph.githubassets.com/5bb57a5b14c9378d3f4a766023651c618d688e5a06818b74b5cab36fdfea2cd0/SleipnirGroup/Sleipnir"
---

# Sleipnir

Sleipnir is a reverse mode autodiff library, interior-point method, and NLP solver DSL for C++23 and Python. The DSL automatically chooses the best solver based on the problem structure.

```cpp
#include <print>

#include <sleipnir/optimization/problem.hpp>

int main() {
  // Find the x, y pair with the largest product for which x + 3y = 36
  slp::Problem<double> problem;

  auto x = problem.real_decision_variable();
  auto y = problem.real_decision_variable();

  problem.maximize(x * y);
  problem.subject_to(x + 3 * y == 36);
  problem.solve();

  // x = 18.0, y = 6.0
  std::println("x = {}, y = {}", x.value(), y.value());
}
```

```python
#!/usr/bin/env python

from sleipnir.optimization import Problem

def main():
    # Find the x, y pair with the largest product for which x + 3y = 36
    problem = Problem()

    x, y = problem.real_decision_variable(2)

    problem.maximize(x * y)
    problem.subject_to(x + 3 * y == 36)
    problem.solve()

    # x = 18.0, y = 6.0
    print(f"x = {x.value()}, y = {y.value()}")

if __name__ == "__main__":
    main()
```
