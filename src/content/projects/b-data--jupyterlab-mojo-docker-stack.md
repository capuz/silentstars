---
repo: "b-data/jupyterlab-mojo-docker-stack"
name: "jupyterlab-mojo-docker-stack"
description: "(GPU accelerated) Multi-arch (linux/amd64, linux/arm64/v8) JupyterLab MAX/Mojo docker images. Please submit Pull Requests to the GitLab repository. Mirror of"
readmeQualityOk: true
url: "https://github.com/b-data/jupyterlab-mojo-docker-stack"
homepage: "https://gitlab.com/b-data/jupyterlab/mojo/docker-stack"
language: "Dockerfile"
languages: ["Dockerfile"]
languagePcts: [81]
topics: ["data-science", "docker", "jupyterlab", "mojo", "multi-arch", "code-oss", "ai", "ml", "language", "programming-language"]
stars: 8
forks: 2
openIssues: 0
closedIssues: 3
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2024-05-08T19:52:05Z"
lastCommitAt: "2026-10-31T09:16:31Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 87
undervaluedScore: 75
maintainers: ["benz0li"]
openGraphImageUrl: "https://opengraph.githubassets.com/4170adca9d662ccc3ec6a755d72103efa7cee9e22425951dc10d88d38f24f3fd/b-data/jupyterlab-mojo-docker-stack"
---

# JupyterLab MAX/Mojo docker stack

| See the [CUDA-based JupyterLab MAX docker stack](https://github.com/b-data/jupyterlab-mojo-docker-stack/blob/HEAD/CUDA.md) for GPU accelerated docker images. |
|:---------------------------------------------------------------------------------------------|

Multi-arch (`linux/amd64`, `linux/arm64/v8`) docker images:

* [`glcr.b-data.ch/jupyterlab/max/base`](https://gitlab.b-data.ch/jupyterlab/max/base/container_registry)
* [`glcr.b-data.ch/jupyterlab/max/scipy`](https://gitlab.b-data.ch/jupyterlab/max/scipy/container_registry)
* [`glcr.b-data.ch/jupyterlab/mojo/base`](https://gitlab.b-data.ch/jupyterlab/mojo/base/container_registry)
* [`glcr.b-data.ch/jupyterlab/mojo/scipy`](https://gitlab.b-data.ch/jupyterlab/mojo/scipy/container_registry)

Images considered stable for Mojo versions ≥ 24.3.0.

:microscope: Check out `jupyterlab/mojo/scipy` at
<https://demo.jupyter.b-data.ch>.

**Build chain**

base → scipy

**Features**

* **JupyterLab**: A web-based interactive development environment for Jupyter
   notebooks, code, and data. The images include
  * **code-server**: [`Code - OSS`](https://github.com/microsoft/vscode) in the
    browser.
  *…
