---
repo: "superdesk/superdesk-ui-framework"
name: "superdesk-ui-framework"
description: "Superdesk UI Framework"
readmeQualityOk: true
url: "https://github.com/superdesk/superdesk-ui-framework"
homepage: "https://ui-framework.superdesk.org"
language: "SCSS"
languages: ["SCSS", "TypeScript"]
languagePcts: [47, 40]
stars: 10
forks: 27
openIssues: 9
closedIssues: 70
watchers: 16
contributors: 15
recentReleases: 0
createdAt: "2016-12-08T13:20:28Z"
lastCommitAt: "2026-11-20T11:58:24Z"
lastReleaseAt: "2018-11-13T14:46:38Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "community_watch", "fork_magnet"]
healthScore: 83
undervaluedScore: 50
maintainers: ["eos87", "dependabot[bot]", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/fec043876c3359662261e8b649a63688ee3176307b00857f091f6da6e5a48607/superdesk/superdesk-ui-framework"
---

# Superdesk UI Framework

### Status

### Documentation

Documentation page can be accessed via this link: https://ui-framework.superdesk.org/

### Install and connect

To install the package via npm use

```
npm install --save superdesk-ui-framework
```

After installation, the ui-framework distributive files will be available as

```
import 'superdesk-ui-framework'
```

To use it in your angular-app you should add the module (modules)

```
angular.module('application', ['superdesk-ui'])
```

### React modules

To import react modules in your application, just use

```
import {LineInput} from 'superdesk-ui-framework'
```

### Storybook

The project includes Storybook 10 for interactive component development and documentation, integrated with the main documentation site.

#### Running Storybook

```bash
# Start Storybook in standalone development mode (with hot reload)
npm run storybook

# Build static Storybook for deployment
npm run build-storybook

# Copy Storybook to dist directory (included in main build)
npm run copy-storybook
```

#### Accessing Storybook

**Development mode** (npm start):
