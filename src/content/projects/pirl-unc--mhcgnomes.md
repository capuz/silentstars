---
repo: "pirl-unc/mhcgnomes"
name: "mhcgnomes"
description: "Parsing MHC nomenclature in the wild"
readmeQualityOk: true
url: "https://github.com/pirl-unc/mhcgnomes"
language: "Python"
languages: ["Python"]
languagePcts: [91]
stars: 21
forks: 5
openIssues: 3
closedIssues: 25
watchers: 2
contributors: 7
recentReleases: 0
createdAt: "2020-10-26T19:19:42Z"
lastCommitAt: "2026-08-19T04:07:31Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 91
undervaluedScore: 39
maintainers: ["iskandr"]
openGraphImageUrl: "https://opengraph.githubassets.com/65f52452a24bb0a0b566abf3c8ec97e1fdc0b3873a6cc1dcdeec4d59d7e87c69/pirl-unc/mhcgnomes"
---

</a>
</a>

# mhcgnomes: Parsing MHC nomenclature in the wild

Documentation site: <https://pirl-unc.github.io/mhcgnomes/>

MHCgnomes is a parsing library for multi-species MHC nomenclature which
aims to correctly parse every name in [IEDB](http://www.iedb.org/), [IMGT/HLA](https://www.ebi.ac.uk/ipd/imgt/hla/), [IPD/MHC](https://www.ebi.ac.uk/ipd/mhc/), and the allele lists for both [NetMHCpan](https://services.healthtech.dtu.dk/service.php?NetMHCpan-4.1) and [NetMHCIIpan](https://services.healthtech.dtu.dk/service.php?NetMHCIIpan-4.0) predictors. This allows for standardization between immune databases and tools, which often use different naming conventions.

## Usage example

```python

In [1]: mhcgnomes.parse("HLA-A0201")
Out[1]: Allele(
    gene=Gene(
        species=Species(name="Homo sapiens", mhc_prefix="HLA"),
        name="A"),
    allele_fields=("02", "01"),
    annotations=(),
    mutations=())

In [2]: mhcgnomes.parse("HLA-A0201").to_string()
Out[2]: 'HLA-A*02:01'

In [3]: mhcgnomes.parse("HLA-A0201").compact_string()
Out[3]: 'A0201'

```

## The problem: MHC nomenclature is nuts

Despite the valiant efforts of groups such as the [Comparative MHC Nomenclature…
