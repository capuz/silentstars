---
repo: "CybercentreCanada/jupyterlab-sql-editor"
name: "jupyterlab-sql-editor"
description: "A JupyterLab extension providing, SQL formatter, auto-completion, syntax highlighting, Spark SQL and Trino"
readmeQualityOk: true
url: "https://github.com/CybercentreCanada/jupyterlab-sql-editor"
language: "Jupyter Notebook"
languages: ["Jupyter Notebook", "Python"]
languagePcts: [57, 37]
topics: ["jupyterlab", "extension", "ipython-magic", "lsp", "trino", "sparksql", "sql", "formatter", "auto-completion", "datagrid"]
stars: 95
forks: 15
openIssues: 10
closedIssues: 17
watchers: 0
contributors: 10
recentReleases: 0
createdAt: "2021-11-02T16:29:09Z"
lastCommitAt: "2026-10-29T21:25:05Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 76
undervaluedScore: 28
maintainers: ["dependabot[bot]", "cccs-nik"]
openGraphImageUrl: "https://opengraph.githubassets.com/abb6d96b543b27a302b340b41a3b01c318a8727437399c4fee2d0eb207fc17a7/CybercentreCanada/jupyterlab-sql-editor"
---

# jupyterlab_sql_editor

SQL editor support for formatting, syntax highlighting and code completion of SQL in cell magic, line magic, python string and file editor.

## Requirements

- JupyterLab >= 4.0.0

## Install

To install the extension, execute:

```bash
pip install jupyterlab_sql_editor[all]
```

## Uninstall

To remove the extension, execute:

```bash
pip uninstall jupyterlab_sql_editor
```

## Contributing

### Development install

Note: You will need NodeJS to build the extension package.

The `jlpm` command is JupyterLab's pinned version of
[yarn](https://yarnpkg.com/) that is installed with JupyterLab. You may use
`yarn` or `npm` in lieu of `jlpm` below.

```bash
# Clone the repo to your local environment
# Change directory to the jupyterlab_sql_editor directory
# Install package in development mode
pip install -e .[all]
# Link your development version of the extension with JupyterLab
jupyter labextension develop . --overwrite
# Rebuild extension Typescript source after making changes
jlpm build
```

You can watch the source directory and run JupyterLab at the same time in different terminals to watch for changes in the extension's source and automatically rebuild the…
