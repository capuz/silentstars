---
repo: "etm/weel"
name: "weel"
description: "Workflow Exectution Engine Library"
url: "https://github.com/etm/weel"
language: "Ruby"
languages: ["Ruby"]
languagePcts: [100]
stars: 7
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2020-05-20T19:18:15Z"
lastCommitAt: "2026-06-24T00:18:50Z"
lastReleaseAt: "2025-12-10T12:49:11Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 65
undervaluedScore: 43
maintainers: ["etm", "DominikVoigt"]
openGraphImageUrl: "https://opengraph.githubassets.com/44aa218a2f1ba5ce8484df42af3e11b5f417a8e7fbfe40525620fee61cad9caf/etm/weel"
---

All code in this package is provided under the LGPL-3 license.
Please read the file COPYING.

Tested for MRI 2.6, 2.7

# Example Process (DSL)

```ruby
class SimpleWorkflow < WEEL
  handlerwrapper SimpleHandlerWrapper

  endpoint :ep1 => "orf.at"
  data :a => 17

  control flow do
    call :a1, :ep1, parameters: { :a => data.a, :b => 2 } do
      data.a += 3
    end
  end
end
```

HandlerWrappers are classes that implement communication protocols. Endpoints hold the communication targets and can be reused throughout the control flow. Data elements are control flow scoped variables.

Please check out the "example" directory to see a minimal set of necessary artefacts.

# Further Reading

For an evaluation and description of all available control flow statements, see https://arxiv.org/pdf/1003.3330.pdf.

# Installation

```bash
gem install weel
```
