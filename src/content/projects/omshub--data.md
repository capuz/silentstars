---
repo: "omshub/data"
name: "data"
description: "Repository holding static data files relating to OMSHub"
readmeQualityOk: true
url: "https://github.com/omshub/data"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
stars: 5
forks: 0
openIssues: 1
closedIssues: 1
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-01-11T14:59:53Z"
lastCommitAt: "2026-08-20T04:07:38Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 85
undervaluedScore: 52
maintainers: ["tran-christian", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/4fbf1c464fa698591521169507e6eba2031bc424c693f5f20a92ae740ad93fc0/omshub/data"
---

# OMSHub Data

Repository that scrapes and stores OMSCS related data.

## Course Availability Crawler

Fetches real-time course registration and seat availability data from Georgia Tech's Banner 9 system (OSCAR).

### Automated Scraping

The GitHub Actions workflow runs automatically every 30 minutes and commits data directly to the `data/` folder.

To trigger manually:
1. Go to Actions > "Crawl Course Availability"
2. Click "Run workflow"
3. Select mode:
   - `current` - Current + upcoming terms (default)
   - `all` - All terms back to 2014
   - `specific` - Specify a term code (e.g., `202502` for Spring 2025)

### Local Usage

```bash
# Install dependencies
npm install -g tsx

# Fetch current term
npx tsx oscar/crawler.ts

# Fetch specific term
npx tsx oscar/crawler.ts --term 202502

# Fetch all terms (back to 2014)
npx tsx oscar/crawler.ts --all

# Dry run (fetch and display without saving)
npx tsx oscar/crawler.ts --dry-run

# Custom output directory
npx tsx oscar/crawler.ts --output /path/to/output
```

### Output

The crawler generates JSON files in `data/`:
- `{termCode}.json` - Course availability data for each term (e.g., `202502.json`)
- `catalog.json` - Aggregated…
