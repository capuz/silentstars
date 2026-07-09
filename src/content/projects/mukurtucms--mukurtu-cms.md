---
repo: "MukurtuCMS/Mukurtu-CMS"
name: "Mukurtu-CMS"
description: "Mukurtu CMS v4 Development"
readmeQualityOk: true
url: "https://github.com/MukurtuCMS/Mukurtu-CMS"
language: "PHP"
languages: ["PHP"]
languagePcts: [71]
stars: 29
forks: 10
openIssues: 185
closedIssues: 893
watchers: 6
contributors: 17
recentReleases: 0
createdAt: "2021-08-05T15:36:05Z"
lastCommitAt: "2026-07-09T20:45:07Z"
lastReleaseAt: "2026-04-08T20:32:16Z"
status: "thriving"
tags: ["solo_builder", "community_hub"]
healthScore: 95
undervaluedScore: 60
maintainers: ["michael-wynne-wsu", "alexmerrill"]
openGraphImageUrl: "https://opengraph.githubassets.com/b1fcf687d1104e0b6aa942e770888dcd3843bebce404edd2167fddb7923b69d3/MukurtuCMS/Mukurtu-CMS"
discussionCount: 35
---

# Mukurtu CMS
To learn more about Mukurtu CMS and the larger Mukurtu community, visit [mukurtu.org](https://mukurtu.org/).

**Note: This version of Mukurtu CMS is currently under active development and is subject to daily change. Only use for testing and feedback purposes.**

## Requirements

* The necessary database server, web server, and PHP installed that meet [modern Drupal requirements](https://www.drupal.org/docs/system-requirements)
  * Currently only PHP 8.3 is supported. Support for 8.4 will be added later.
  * Currently MariaDB or MySQL is supported. PostGRES is not.
  * the Mukurtu Team does our internal work with nginx. Apache SHOULD work fine, but we have not tested it extensively.
* [Composer](https://getcomposer.org/)
* To generate PDF thumbnails, [poppler-utils](https://pypi.org/project/poppler-utils/) must be installed on the server.
* To generate thumbnails for uploaded video files, [FFmpeg](https://ffmpeg.org/) must be installed on the server.
* For local development, we encourage using [Docker](https://ddev.readthedocs.io/en/stable/users/install/docker-installation/) and [DDEV](https://ddev.readthedocs.io/en/stable/users/install/ddev-installation/) (which…
