---
repo: "GaetanoCarlucci/CPULoadGenerator"
name: "CPULoadGenerator"
description: "CPU Load Generator allows you to generate a fixed configurable CPU load for a finite time by means of PID regulator."
readmeQualityOk: true
url: "https://github.com/GaetanoCarlucci/CPULoadGenerator"
language: "Python"
languages: ["Python"]
languagePcts: [98]
topics: ["cpu-monitoring", "control-engineering", "python"]
stars: 133
forks: 66
openIssues: 1
closedIssues: 3
watchers: 11
contributors: 4
recentReleases: 0
createdAt: "2014-03-14T17:18:11Z"
lastCommitAt: "2026-09-15T08:54:26Z"
lastReleaseAt: "2026-03-04T17:14:52Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 95
undervaluedScore: 26
maintainers: ["GaetanoCarlucci"]
openGraphImageUrl: "https://opengraph.githubassets.com/2c527491ab4256b0a824da4407761cab23bb51631bb23329a54c2c61699973ab/GaetanoCarlucci/CPULoadGenerator"
---

# CPU Load Generator

This script generates a fixed CPU load for a finite or indefinite time period, on one or more CPU cores. A **PI controller** is used for this purpose.

You provide the desired CPU load and the CPU core(s) to load. The controller and the CPU monitor run in separate threads.

**Supported platforms:** Linux, macOS, and Windows (Windows is less tested; `psutil` supports CPU affinity on all three).

## Theoretical insight

- **Project homepage:** [https://gaetanocarlucci.github.io/CPULoadGenerator/](https://gaetanocarlucci.github.io/CPULoadGenerator/) — more details on the tool.
- **Blog:** [Theoretical explanation of this tool](https://www.gaetanocarlucci.com/posts/cpu-load-generator).

## Dependencies

- **Python 3.9+** (tested with 3.13)

### Setup (Linux and macOS)

Create and activate a virtual environment, then install dependencies:

```bash
cd CPULoadGenerator/
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```

Run the script (e.g. 20% load on core 0 for 10 seconds):

```bash
python cpu_load_generator.py -l 0.2 -d 10 -c 0
```

Or make the script executable and run: `chmod +x cpu_load_generator.py` then…
