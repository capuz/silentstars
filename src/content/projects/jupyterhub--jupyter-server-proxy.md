---
repo: "jupyterhub/jupyter-server-proxy"
name: "jupyter-server-proxy"
description: "Jupyter notebook server extension to proxy web services."
readmeQualityOk: true
url: "https://github.com/jupyterhub/jupyter-server-proxy"
homepage: "https://jupyter-server-proxy.readthedocs.io"
language: "Python"
languages: ["Python"]
languagePcts: [88]
topics: ["jupyter-notebook", "jupyter", "jupyterhub", "proxy", "binder"]
stars: 404
forks: 155
openIssues: 80
closedIssues: 148
watchers: 17
contributors: 86
recentReleases: 0
createdAt: "2016-10-18T22:02:06Z"
lastCommitAt: "2026-10-26T09:18:39Z"
lastReleaseAt: "2018-12-10T14:39:58Z"
status: "thriving"
tags: ["needs_contributors", "legacy_hero"]
healthScore: 86
undervaluedScore: 38
maintainers: ["minrk", "manics", "ryanlovett"]
openGraphImageUrl: "https://opengraph.githubassets.com/f0d5a50272eb92aa4b5c585b67d4a1e2860aaebc0f73c22646c9307adbb58111/jupyterhub/jupyter-server-proxy"
---

# Jupyter Server Proxy

Jupyter Server Proxy lets you run arbitrary external processes (such as
RStudio, Shiny Server, Syncthing, PostgreSQL, Code Server, etc)
alongside your notebook server and provide authenticated web access to
them using a path like `/rstudio` next to others like `/lab`. Alongside
the python package that provides the main functionality, the JupyterLab
extension (`@jupyterhub/jupyter-server-proxy`) provides buttons in the
JupyterLab launcher window to get to RStudio for example.

**Note:** This project used to be called **nbserverproxy**. As
nbserverproxy is an older version of jupyter-server-proxy, uninstall
nbserverproxy before installing jupyter-server-proxy to avoid conflicts.

The primary use cases are:

1.  Use with JupyterHub / Binder to allow launching users into web
    interfaces that have nothing to do with Jupyter - such as RStudio,
    Shiny, or OpenRefine.
2.  Allow access from frontend javascript (in classic notebook or
    JupyterLab extensions) to access web APIs of other processes running
    locally in a safe manner. This is used by the [JupyterLab
    extension](https://github.com/dask/dask-labextension) for…
