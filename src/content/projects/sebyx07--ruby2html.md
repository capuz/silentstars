---
repo: "sebyx07/ruby2html"
name: "ruby2html"
description: "Fast, lightweight HTML views in pure Ruby: C extension with SIMD escaping, Rails .html.rb templates, ViewComponent and native components, JRuby/TruffleRuby. Faster than ERB and Phlex. Maintained by developerz.ai."
readmeQualityOk: true
url: "https://github.com/sebyx07/ruby2html"
homepage: "https://rubygems.org/gems/ruby2html"
language: "Ruby"
languages: ["Ruby"]
languagePcts: [79]
topics: ["html", "ruby", "ruby-on-rails", "ai-maintained", "c-extension", "claude-code", "jruby", "llms-txt", "performance", "rails"]
stars: 23
forks: 1
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 2
recentReleases: 2
createdAt: "2024-08-07T23:10:40Z"
lastCommitAt: "2026-11-02T11:36:34Z"
lastReleaseAt: "2026-10-31T22:59:48Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 55
maintainers: ["sebyx07", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/28c21ffdd0a127bec0c0ceb360b8862db2f29a51cbb79a065d035949805fbe1f/sebyx07/ruby2html"
---

# Ruby2html

Write views in pure Ruby; get escaped, compact HTML. A C extension handles escaping, attribute serialization and tag rendering. Works standalone, as Rails `.html.rb` templates, inside ERB, and in ViewComponent.

```ruby
div class: 'card', 'data-controller': 'card' do
  h2 @product.title
  p @product.description
  a 'Details', href: product_path(@product), class: 'btn'
end
```

```html
<div class="card" data-controller="card"><h2>Lamp</h2><p>Warm &amp; bright</p><a href="/products/1" class="btn">Details</a></div>
```

## Why ruby2html

- **Fastest Ruby HTML renderer we've measured.** The page benchmark renders 1.35x faster than Erubi (Rails' ERB engine) and 2.4–16x faster than Phlex 2, with 40–90% fewer allocations; in a full Rails request it leads ERB, Slim and Phlex ([numbers](#performance)).
- **Light.** No runtime dependencies, a 32 KB gem, and `require 'ruby2html'` costs about 0.4 MB and 19 ms. Prism, the Rails glue and the optional beautifier load only when used, or at boot in eager-loading production apps.
- **Plain Ruby views.** `.html.rb` templates, ERB interop, ViewComponent, or the built-in `Ruby2html::Component`. Escaped by default.
- **Runs everywhere.**…
