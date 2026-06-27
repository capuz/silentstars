---
repo: "Telefonica/mistica-web"
name: "mistica-web"
description: "React components library for Telefonica Design System (Mistica)"
url: "https://github.com/Telefonica/mistica-web"
homepage: "https://mistica-web.now.sh"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [91]
topics: ["org-cdo", "srv-novum", "managed", "tool-tf-github-repos", "area-home-mobile"]
stars: 69
forks: 22
openIssues: 18
closedIssues: 40
watchers: 26
contributors: 314
recentReleases: 0
createdAt: "2020-05-28T15:51:50Z"
lastCommitAt: "2026-06-26T10:39:09Z"
lastReleaseAt: "2020-08-10T08:23:26Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 92
undervaluedScore: 50
maintainers: ["Marcosld", "semantic-release-bot", "yceballost"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/267631901/2f0b7106-d68f-43fb-816c-bd28db09e7cd"
---

React components library for Telefonica Design System ([Mística](https://github.com/Telefonica/mistica))

## Getting started

### Install

```terminal
yarn add @telefonica/mistica
```

or

```terminal
npm install @telefonica/mistica
```

### Start using `@telefonica/mistica`

Before using any of our components you have to add `<ThemeContextProvider>` in the root of your React app.
Here is a complete example of a form with two text fields and a submit button:

```javascript
import {createRoot} from 'react-dom/client';
// Import Mistica styles. Depending on the bundler you use, you may need to import it in a different way.
import '@telefonica/mistica/css/mistica.css';

// Use mistica components
import {
  ThemeContextProvider,
  Form,
  Box,
  Stack,
  TextField,
  EmailField,
  ButtonLayout,
  ButtonPrimary,
  alert,
  getMovistarSkin,
} from '@telefonica/mistica';

const App = () => (
  <Form
    onSubmit={(formData) =>
      alert({
        title: 'This is your data',
        message: JSON.stringify(formData, null, 2),
      })
    }
  >
    <Box padding={16}>
      <Stack space={16}>
        <TextField name="name" label="Name" />
        <EmailField name="email" label="Email" />…
