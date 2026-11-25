---
repo: "bloc-digital/usescorm"
name: "usescorm"
description: "React hook for communicating with the SCORM API."
readmeQualityOk: true
url: "https://github.com/bloc-digital/usescorm"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [93]
stars: 9
forks: 2
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2023-10-24T13:28:09Z"
lastCommitAt: "2026-11-25T13:17:44Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 72
undervaluedScore: 38
maintainers: ["Link2Twenty"]
openGraphImageUrl: "https://opengraph.githubassets.com/3ba5fbe4a331b518a6573a6f4f8e4be968bb45f114f419bddf72971a41c61e8f/bloc-digital/usescorm"
---

# useScorm

A React hook and typed wrapper for the SCORM runtime API exposed by a learning
management system (LMS). It supports SCORM 1.2 and SCORM 2004, with automatic
version detection. The hook opens the LMS session after mount and terminates it
when the component unmounts.

This package connects course content to an LMS; it is not an LMS. It does not
create SCORM packages or implement LMS-side sequencing, navigation, or course
delivery.

## Install

```bash
npm install @blocdigital/usescorm
```

React and React DOM are peer dependencies, so your application supplies them.

## Use

```tsx
import { useEffect } from 'react';
import useScorm from '@blocdigital/usescorm';

export function Lesson() {
  const scorm = useScorm({ version: '2004', autoCommit: false });

  useEffect(() => {
    if (!scorm.connection.isActive) return;

    scorm.set('cmi.location', 'module-1');
    scorm.status('set', 'incomplete');
    scorm.save();
  }, [scorm]);

  return null;
}
```
