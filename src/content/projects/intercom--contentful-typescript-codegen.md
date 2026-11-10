---
repo: "intercom/contentful-typescript-codegen"
name: "contentful-typescript-codegen"
description: "Generate TypeScript interfaces from a Contentful environment"
readmeQualityOk: true
url: "https://github.com/intercom/contentful-typescript-codegen"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
topics: ["typescript", "contentful", "codegen"]
stars: 293
forks: 55
openIssues: 30
closedIssues: 17
watchers: 84
contributors: 53
recentReleases: 0
createdAt: "2019-03-07T08:37:58Z"
lastCommitAt: "2026-11-10T14:49:47Z"
lastReleaseAt: "2020-04-16T22:06:25Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 59
undervaluedScore: 16
maintainers: ["looneym", "Kabidoye-17", "DecIntercom"]
openGraphImageUrl: "https://opengraph.githubassets.com/e504e054a441c8893dddd8e9ec88c198623679d339ab532cc9003a09f253ef80/intercom/contentful-typescript-codegen"
---

# contentful-typescript-codegen

Generate typings from your Contentful environment.

- Content Types become interfaces.
- Locales (and your default locale) become string types.
- Assets and Rich Text link to Contentful's types.

At Intercom, we use this in our [website] to increase developer confidence and productivity,
ensure that breaking changes to our Content Types don't cause an outage, and because it's neat.

[website]: https://www.intercom.com

## Usage

```sh
# npm
npm install --save-dev contentful-typescript-codegen

# yarn
yarn add --dev contentful-typescript-codegen

# pnpm
pnpm add --save-dev contentful-typescript-codegen
```

Then, add the following to your `package.json`:

```jsonc
{
  // ...
  "scripts": {
    "contentful-typescript-codegen": "contentful-typescript-codegen --output @types/generated/contentful.d.ts"
  }
}
```

Feel free to change the output path to whatever you like.

Next, the codegen will expect you to have created a file called either `getContentfulEnvironment.js` or `getContentfulEnvironment.ts`
in the root of your project directory, which should export a promise that resolves with your Contentful environment.

The reason for this is that you can…
