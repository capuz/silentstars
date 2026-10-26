---
repo: "manuel-sommer/dependencytrack-pywrap"
name: "dependencytrack-pywrap"
description: "This is a python wrapper for the dependency track REST API. "
readmeQualityOk: true
url: "https://github.com/manuel-sommer/dependencytrack-pywrap"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["dependency-track", "hacktoberfest", "dependencytrack"]
stars: 10
forks: 4
openIssues: 2
closedIssues: 2
watchers: 2
contributors: 4
recentReleases: 0
createdAt: "2021-11-14T21:40:56Z"
lastCommitAt: "2026-10-26T09:18:17Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 85
undervaluedScore: 47
maintainers: ["dependabot[bot]", "manuel-sommer"]
openGraphImageUrl: "https://opengraph.githubassets.com/b50c9ee3cb7b9e243b51eb618a5b0d9b482d75c7246507cae95daa6f38c46338/manuel-sommer/dependencytrack-pywrap"
---

# dependencytrack-pywrap
[Dependency-Track](https://github.com/DependencyTrack/dependency-track) is a platform to analyse risks in your dependencies.
This project is a python wrapper for the [Dependency-Track REST API](https://docs.dependencytrack.org/integrations/rest-api/). 

## Quick Start

```python
# Import DependencyTrackAPI and use the right port for apiurl. 
from main import DependencyTrackAPI
dta = DependencyTrackAPI(apiurl = 'the api url', apikey = 'see dependency track')
# Return the Version
dta.version()
# Return a list of all projects
dta.list_projects()
# Return the project from a projectname and version
dta.get_project_lookup(name="project", version="1.0")
# Return the Project from the uuid
dta.get_project(uuid='project_uuid')
# Delete project with uuid
dta.delete_project_uuid('project_uuid')
# Create a new project
dta.create_project(name="testproject",classifier = "APPLICATION")
# Update a new project
dta.update_project(uuid="project_uuid",name="newprojectname")
```

## Examples
This project was tested effectively to use it for:
- managing (create and remove) projects within DependencyTrack
- uploading SBOM files to the relevant projects in DependencyTrack
-…
