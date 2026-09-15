---
repo: "MRCIEU/genotype-phenotype-map"
name: "genotype-phenotype-map"
description: "The automated pipeline repository for The Genotype-Phenotype Map"
readmeQualityOk: true
url: "https://github.com/MRCIEU/genotype-phenotype-map"
homepage: "https://gpmap.opengwas.io"
language: "R"
languages: ["R"]
languagePcts: [92]
stars: 5
forks: 0
openIssues: 104
closedIssues: 3
watchers: 5
contributors: 6
recentReleases: 0
createdAt: "2024-04-18T14:49:11Z"
lastCommitAt: "2026-09-15T08:54:39Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 71
undervaluedScore: 34
maintainers: ["andrew-e"]
openGraphImageUrl: "https://opengraph.githubassets.com/b4466ddd260373ebea9c1bf51dcd888ccb092e82e46b08df76ac55075603e792/MRCIEU/genotype-phenotype-map"
---

# genotype-phenotype-map

Pipeline for ingesting GWAS and QTL summary statistics, performing finemapping and colocalisation.

## Onboarding

The best way to understand how the GPMap pipeline works is by looking at the `Snakefile`.  This is a literal representation of the steps that are
performed in the pipeline, the order in which they run, and how they are called.

1. Clone the repository on ieu-p1 (or a machine with access to the data):
   ```bash
   git clone git@github.com:MRCIEU/genotype-phenotype-map.git && cd genotype-phenotype-map
   ```

2. Populate the `.env` file:
   - Use `.env.pipeline_local` or `.env.pipeline_worker` as a template if available
   - Set `DATA_DIR`, `RESULTS_DIR`, and other variables as needed

3. Add studies to `pipeline_steps/data/study_list.csv` (see [DOCUMENTATION.md](https://github.com/MRCIEU/genotype-phenotype-map/blob/HEAD/DOCUMENTATION.md#adding-new-data-to-the-pipeline))

4. Run the pipeline:
   ```bash
   ./run_pipeline.sh
   ```
   This first identifies studies that have not been processed, then runs the Snakemake pipeline.

**Note:** Snakemake performance degrades with very large batches. Keep the number of studies per run below ~200,000.…
