---
repo: "umnilab/METS-R_HPC"
name: "METS-R_HPC"
description: "An EV operational control platform implemented based on high performance parallel computing."
readmeQualityOk: true
url: "https://github.com/umnilab/METS-R_HPC"
language: "Jupyter Notebook"
languages: ["Jupyter Notebook", "Python"]
languagePcts: [52, 44]
stars: 8
forks: 3
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 5
recentReleases: 0
createdAt: "2021-03-31T18:31:13Z"
lastCommitAt: "2026-08-13T05:17:07Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 87
undervaluedScore: 67
maintainers: ["tjleizeng"]
openGraphImageUrl: "https://opengraph.githubassets.com/74a86012a9882cf5f5721b499be28a78d7c4e8afd83be8c17fd30af7bbf2a205/umnilab/METS-R_HPC"
---

This is the repository for the HPC module of [METS-R SIM](https://github.com/umnilab/METS-R_SIM). Docker is required, and it is highly recommended to start with the tutorials in the [`tutorials/`](https://github.com/umnilab/METS-R_HPC/blob/HEAD/tutorials/) folder. For the latest instructions, please refer to the online [document](https://umnilab.github.io/METS-R_doc).

## Setup

1. Install Python 3.10 or newer, then install the Python dependencies from the repository root:

   ```bash
   pip install -r requirements.txt
   ```

2. Install Docker:

   - Windows/macOS: install [Docker Desktop](https://docs.docker.com/get-started/introduction/get-docker-desktop/).
   - Linux: install Docker Engine and Docker Compose using the Docker instructions for your distribution.

3. Enable localhost access for Docker host networking. METS-R launches the simulator container with Docker host networking (`--net=host`) so the Python clients can connect to simulator ports on `localhost`.

   - Docker Desktop: open **Settings > Resources > Network**, turn on **Enable host networking**, then apply and restart Docker Desktop.
   - Linux Docker Engine: host networking is available by default.

4. Confirm…
