---
repo: "tzok/BioCommons"
name: "BioCommons"
description: "Library with common classes, data structures and embedded static knowledge useful in bioinformatics libraries"
readmeQualityOk: true
url: "https://github.com/tzok/BioCommons"
language: "Java"
languages: ["Java"]
languagePcts: [100]
stars: 8
forks: 3
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2014-08-25T19:14:46Z"
lastCommitAt: "2026-08-03T06:44:29Z"
lastReleaseAt: "2024-11-22T10:03:45Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 86
undervaluedScore: 56
maintainers: ["dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/051d1fdb4c7c9b45599c2dee32d2572d05ac03ba704c6446d1b827619a2b09c7/tzok/BioCommons"
---

# Project description

BioCommons is a Java library with classes, data structures and embedded
static knowledge useful in structural bioinformatics.

If you use BioCommons in your research, please cite:

> BioCommons: A Robust Java Library for RNA Structural Bioinformatics.
> T. Zok. *Bioinformatics*. 2021. 37(17):2766–2767.
> doi:[10.1093/bioinformatics/btab069](https://doi.org/10.1093/bioinformatics/btab069)

# Maven

You can use BioCommons by adding the following to your `pom.xml`:

``` xml
<dependency>
  <groupId>pl.poznan.put</groupId>
  <artifactId>BioCommons</artifactId>
  <version>3.2.1</version>
</dependency>
```

# Documentation

You can find the documentation
[here](http://www.cs.put.poznan.pl/tzok/public/static/biocommons/)

# Examples

You can find examples and HOWTOs in the
[wiki](https://github.com/tzok/BioCommons/wiki)

# Functionality

- Full analysis of PDB and mmCIF files, including missing and modified
  residues, experimental data, etc.
- An enumeration of atom types, names and aliases used in PDB and mmCIF
  files
- Atomic bond lengths’ validation
- Notations from the literature (Zirbel *et al.* 2009, Leontis *et al.*
  2001, Saenger 1984)
- Torsion angle…
