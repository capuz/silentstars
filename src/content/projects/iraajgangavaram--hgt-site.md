---
repo: "iraajgangavaram/hgt-site"
name: "hgt-site"
description: "The fastest tool to find where foreign DNA has been inserted into a genome, built to ignore contamination and lab artefacts."
readmeQualityOk: true
url: "https://github.com/iraajgangavaram/hgt-site"
homepage: "https://iraajgangavaram.github.io/hgt-site/"
language: "Python"
languages: ["Python"]
languagePcts: [99]
topics: ["bioinformatics", "genomics", "horizontal-gene-transfer", "metagenomics", "microbiology", "python", "sequencing", "structural-variants", "centrifuge", "contamination"]
stars: 9
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 5
createdAt: "2026-10-31T15:49:16Z"
lastCommitAt: "2026-11-11T19:48:01Z"
lastReleaseAt: "2026-11-06T18:06:04Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 70
undervaluedScore: 50
maintainers: ["iraajgangavaram"]
openGraphImageUrl: "https://opengraph.githubassets.com/3c9d1017e6e45a434c40916151653c1821ebacafe1769393568587e1e9405bb1/iraajgangavaram/hgt-site"
discussionCount: 0
---

Most of the positions they point to are library artefacts. This tells you which ones are not.</b></p>

```bash
conda install -c conda-forge -c bioconda hgt-site

hgt-site run --bam sample.bam --kraken-db /path/to/kraken2-db \
    --host-taxid 9606 --threads 8 -o sites.tsv
```

```
chrom      start    end      left_breakpoint  split_reads  n_pairs  top_taxid  qvalue
chr21_20M  1870963  1871693  1871390          4            16       562        1.295e-12
chr21_20M  2646531  2646869  2646659          4            5        562        3.33e-08
```

Every candidate stays in the table with the reason it failed, so you can see what was considered and rejected. Full options under [Usage](#usage).

hgt-site detects candidate horizontal gene transfer and integration sites from short-read sequencing data. It finds places where DNA from bacteria, viruses or other organisms may have been inserted into a host genome, such as a human genome. Most bacterial reads in these samples come from contamination or from DNA fragments joined by chance in the lab, so hgt-site checks each possible site against what chance alone would produce and keeps only the sites with clearly more support. In the…
