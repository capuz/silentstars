---
repo: "flirtual/flirtual"
name: "flirtual"
description: "The first VR dating app"
readmeQualityOk: true
url: "https://github.com/flirtual/flirtual"
homepage: "https://flirtual.com"
language: "TypeScript"
languages: ["TypeScript", "Elixir"]
languagePcts: [57, 38]
topics: ["dating-app", "elixir", "nextjs", "phoenix", "typescript", "vr", "vrchat"]
stars: 35
forks: 5
openIssues: 59
closedIssues: 133
watchers: 0
contributors: 8
recentReleases: 0
createdAt: "2023-05-31T21:20:44Z"
lastCommitAt: "2026-07-08T05:43:10Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem"]
healthScore: 92
undervaluedScore: 58
maintainers: ["kfarwell", "ariesclark"]
openGraphImageUrl: "https://opengraph.githubassets.com/c69514b3e557937859a69343d45a0474ad1b4d620c4fcc08443083f9c40131e7/flirtual/flirtual"
---

<sub>Translated with Weblate. [Contribute](https://hosted.weblate.org/engage/flirtual/)</sub>

</div>

The first VR dating app.

## Architecture
Flirtual is a monorepo, with the following applications:

* [**Frontend**](https://github.com/flirtual/flirtual/blob/HEAD/apps/frontend/) - The main service which users interact with, written in TypeScript, served using [React Router](https://reactrouter.com/).

* [**API**](https://github.com/flirtual/flirtual/blob/HEAD/apps/api/) - The backend service, written in Elixir, served using [Phoenix](https://phoenixframework.org/); Responsible for handling all user data, authentication, and communication between the frontend and other services.

* [**Image Variants**](https://github.com/flirtual/flirtual/blob/HEAD/apps/image-variants/) - The image variant generation service, written in JavaScript, using a Cloudflare Queue and Worker.

* [**Image Classification**](https://github.com/flirtual/flirtual/blob/HEAD/apps/image-classification/) - The image classification service, written in TypeScript; AI classification using [TensorFlow](https://www.tensorflow.org).

## Contributing
See the [contribution…
