---
repo: "jchiam/react-three-state-checkbox"
name: "react-three-state-checkbox"
description: "React component for checkbox that supports the indeterminate state conveniently."
readmeQualityOk: true
url: "https://github.com/jchiam/react-three-state-checkbox"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [88]
stars: 16
forks: 6
openIssues: 0
closedIssues: 9
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2017-12-25T03:35:11Z"
lastCommitAt: "2026-09-19T01:18:34Z"
lastReleaseAt: "2019-09-06T02:27:31Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 97
undervaluedScore: 67
maintainers: ["dependabot[bot]", "jchiam"]
openGraphImageUrl: "https://opengraph.githubassets.com/c364d9f8dcb04ebd590eb584e3f8aa53c520753bf08161305c3f8ff5ee137033/jchiam/react-three-state-checkbox"
---

# react-three-state-checkbox

React component for checkbox that supports the indeterminate state conveniently. This component is TypeScript compatible.

## Compatibility

- React 18 or 19
- Node.js >= 22

## Installation
The most straightforward way to use this component in your project is to either use `npm` or `yarn`.
```
# npm
npm i --save react-three-state-checkbox

# yarn
yarn add react-three-state-checkbox
```

Import in your project using the following.
```ts
// Default import
import Checkbox from 'react-three-state-checkbox'

// Named import
import { Checkbox } from 'react-three-state-checkbox'
```

## Usage
This component is a wrapper around the default HTML `input` element.

```tsx
import { useState } from 'react';
import Checkbox from 'react-three-state-checkbox';

export default function App() {
  const [checked, setChecked] = useState(false);
  const [indeterminate, setIndeterminate] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
    setIndeterminate(false);
  };

  return (
    <Checkbox
      checked={checked}
      indeterminate={indeterminate}
      onChange={handleChange}
    />
  );
}…
