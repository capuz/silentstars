---
repo: "Eddy3D-Dev/OpenFOAM-Residuals"
name: "OpenFOAM-Residuals"
description: "Python script to plot residual data in OpenFOAM case folders."
url: "https://github.com/Eddy3D-Dev/OpenFOAM-Residuals"
homepage: "https://pypi.org/project/openfoam-residuals/"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["residuals", "openfoam", "cfd", "eddy3d", "grasshopper", "rhino"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 1
watchers: 3
contributors: 3
recentReleases: 0
createdAt: "2020-07-14T19:19:45Z"
lastCommitAt: "2026-06-24T00:20:39Z"
lastReleaseAt: "2026-03-19T01:35:19Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 95
undervaluedScore: 61
maintainers: ["kastnerp", "google-labs-jules[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/54776d38272f09819a75b673313e5d25d50cb5c149739d6cba96a979ffa4f1f2/Eddy3D-Dev/OpenFOAM-Residuals"
---

# OpenFOAM-Residuals

A Python tool to parse and plot residual data from OpenFOAM case directories. This tool is designed to work with output from [Eddy3D](https://www.eddy3d.com), an airflow and microclimate simulation plugin for Rhino and Grasshopper, but can be used with standard OpenFOAM residual files as well.

## Features

-   **Automatic Detection**: Recursively finds `residuals*.dat` and OpenFOAM `log.*` files in case directories.
-   **Batch Processing**: Handle multiple case directories or single files.
-   **Plotting**: Generates high-quality PNG plots of residuals vs. iterations.
-   **Data Export**: Exports cleaned data for further analysis.
-   **Smart Scaling**: Automatically adjusts plot scales based on residual magnitude.

## Requirements

- Python **3.10** or later

## Installation

Install from PyPI:
```bash
pip install openfoam-residuals
```

or with [uv](https://docs.astral.sh/uv/):
```bash
uv add openfoam-residuals
```

### Development Setup

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/Eddy3D-Dev/OpenFOAM-Residuals.git
    cd OpenFOAM-Residuals
    ```

2.  **Install dependencies**:
    ```bash
    uv sync
    ```

## Usage

You…
