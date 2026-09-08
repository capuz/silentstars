---
repo: "PumasAI/SummaryTables.jl"
name: "SummaryTables.jl"
description: "A Julia package for creating publication-ready tables in HTML, docx, LaTeX and Typst"
readmeQualityOk: true
url: "https://github.com/PumasAI/SummaryTables.jl"
homepage: "https://pumasai.github.io/SummaryTables.jl/"
language: "Julia"
languages: ["Julia"]
languagePcts: [100]
stars: 102
forks: 4
openIssues: 17
closedIssues: 27
watchers: 10
contributors: 9
recentReleases: 0
createdAt: "2024-03-25T13:45:17Z"
lastCommitAt: "2026-09-08T08:05:05Z"
lastReleaseAt: "2025-05-23T10:55:07Z"
status: "thriving"
tags: []
healthScore: 80
undervaluedScore: 32
maintainers: ["jkrumbiegel", "dependabot[bot]", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/abecac0fbdf0e405d82112019c2976acea33df9b4cf4fb7979800edcec5dbc58/PumasAI/SummaryTables.jl"
---

# SummaryTables.jl

    <picture>
        src="/docs/src/assets/logo.png" width="150">
    </picture>
</div>

SummaryTables.jl is a Julia package for creating publication-ready
tables in HTML, docx, LaTeX and Typst formats. Tables are formatted in a
minimalistic style without vertical lines.

SummaryTables offers the `table_one`, `summarytable` and `listingtable`
functions to generate pharmacological tables from Tables.jl-compatible
data structures, as well as a low-level API to construct tables of any
shape manually.

## Examples

``` julia
data = DataFrame(
    sex = ["m", "m", "m", "m", "f", "f", "f", "f", "f", "f"],
    age = [27, 45, 34, 85, 55, 44, 24, 29, 37, 76],
    blood_type = ["A", "0", "B", "B", "B", "A", "0", "A", "A", "B"],
    smoker = [true, false, false, false, true, true, true, false, false, false],
)

table_one(
    data,
    [:age => "Age (years)", :blood_type => "Blood type", :smoker => "Smoker"],
    groupby = :sex => "Sex",
    show_n = true
)
```

``` julia
data = DataFrame(
    concentration = [1.2, 4.5, 2.0, 1.5, 0.1, 1.8, 3.2, 1.8, 1.2, 0.2,
        1.7, 4.2, 1.0, 0.9, 0.3, 1.7, 3.7, 1.2, 1.0, 0.2],
    id = repeat([1, 2, 3, 4], inner = 5),
    dose =…
