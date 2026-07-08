---
repo: "saketkc/pysradb"
name: "pysradb"
description: "Package for fetching metadata and downloading data from SRA/ENA/GEO"
readmeQualityOk: true
url: "https://github.com/saketkc/pysradb"
homepage: "https://saketkc.github.io/pysradb"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["bioinformatics", "ncbi-sra", "ncbi-sra-archive", "sratoolkit", "bioinformatics-pipeline", "sra", "ena"]
stars: 367
forks: 67
openIssues: 20
closedIssues: 126
watchers: 12
contributors: 16
recentReleases: 0
createdAt: "2018-11-29T01:44:29Z"
lastCommitAt: "2026-07-08T05:43:11Z"
lastReleaseAt: "2019-02-19T05:51:49Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 90
undervaluedScore: 24
maintainers: ["saketkc", "0xMukesh", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/159590788/79e99000-a80a-11e9-88b5-84037914be7d"
---

# A Python package for retrieving metadata from SRA/ENA/GEO

## Documentation

<https://saketkc.github.io/pysradb>

## CLI Usage

`pysradb` supports command line usage. See
[CLI](https://saket-choudhary.me/pysradb/cmdline.html) instructions or
[quickstart
guide](https://www.saket-choudhary.me/pysradb/quickstart.html).

    $ pysradb
    usage: pysradb [-h] [--version] [--citation]
                   {metadata,download,search,gse-to-gsm,gse-to-srp,gsm-to-gse,gsm-to-srp,gsm-to-srr,gsm-to-srs,gsm-to-srx,srp-to-gse,srp-to-srr,srp-to-srs,srp-to-srx,srr-to-gsm,srr-to-srp,srr-to-srs,srr-to-srx,srs-to-gsm,srs-to-srx,srx-to-srp,srx-to-srr,srx-to-srs,geo-matrix,srp-to-pmid,gse-to-pmid,pmid-to-gse,pmid-to-srp,pmc-to-identifiers,pmid-to-identifiers,doi-to-gse,doi-to-srp,doi-to-identifiers}
                   ...

    pysradb: Query NGS metadata and data from NCBI Sequence Read Archive.
    version: 3.0.0
    Citation: 10.12688/f1000research.18676.1

    options:
      -h, --help            show this help message and exit
      --version             show program's version number and exit
      --citation            how to cite

    subcommands:…
