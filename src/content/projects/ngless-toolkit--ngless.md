---
repo: "ngless-toolkit/ngless"
name: "ngless"
description: "NGLess: NGS with less work"
url: "https://github.com/ngless-toolkit/ngless"
homepage: "https://ngless.readthedocs.io/"
language: "Rust"
languages: ["Rust"]
languagePcts: [94]
topics: ["haskell", "bioinformatics", "bioinformatics-pipeline", "samtools", "bwa", "next-generation-sequencing", "fastq-format", "fastq", "science", "ngs"]
stars: 150
forks: 23
openIssues: 33
closedIssues: 95
watchers: 10
contributors: 9
recentReleases: 0
createdAt: "2013-01-08T15:56:55Z"
lastCommitAt: "2026-07-03T06:22:15Z"
lastReleaseAt: "2019-04-24T08:05:50Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "legacy_hero"]
healthScore: 95
undervaluedScore: 44
maintainers: ["luispedro"]
openGraphImageUrl: "https://opengraph.githubassets.com/9bbca2b572ad06fb2a59eed1e43dfe00eb0979494a907e15a2cae92eb5dd7205/ngless-toolkit/ngless"
---

# NGLess: NGS Processing with Less Work

 Ngless is a domain-specific language for
NGS (next-generation sequencing data) processing.

For questions and discussions, please use the [NGLess mailing
list](https://groups.google.com/forum/#!forum/ngless).

If you are using NGLess, please cite:

> _NG-meta-profiler: fast processing of metagenomes using NGLess, a
> domain-specific language_ by Luis Pedro Coelho, Renato Alves, Paulo Monteiro,
> Jaime Huerta-Cepas, Ana Teresa Freitas, Peer Bork, Microbiome (2019)
> [https://doi.org/10.1186/s40168-019-0684-8](https://doi.org/10.1186/s40168-019-0684-8)

## Example

    ngless "1.5"
    input = fastq(['ctrl1.fq','ctrl2.fq','stim1.fq','stim2.fq'])
    input = preprocess(input) using |read|:
        read = read[5:]
        read = substrim(read, min_quality=26)
        if len(read) < 31:
            discard

    mapped = map(input,
                    reference='hg19')
    write(count(mapped, features=['gene']),
            ofile='gene_counts.csv',
            format={csv})

For more information, check [the docs](https://ngless.readthedocs.io). We also have [a
YouTube…
