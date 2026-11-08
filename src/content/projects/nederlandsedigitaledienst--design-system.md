---
repo: "NederlandseDigitaleDienst/design-system"
name: "design-system"
description: "Het Designsysteem van de Nederlandse Digitale Dienst"
readmeQualityOk: true
url: "https://github.com/NederlandseDigitaleDienst/design-system"
homepage: "https://design.digitaledienst.overheid.nl"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [83]
topics: ["design-system", "lit", "nldd", "overheid", "publiccode", "rijkshuisstijl", "toegankelijkheid", "web-components"]
stars: 35
forks: 2
openIssues: 6
closedIssues: 89
watchers: 0
contributors: 9
recentReleases: 0
createdAt: "2026-01-14T08:26:51Z"
lastCommitAt: "2026-11-08T14:13:51Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 97
undervaluedScore: 52
maintainers: ["semantic-release-bot", "bartvandebiezen", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/2d14d8ca5a0f81076ad25bc80a3c5cb65de202268957e8f47ce215e9a2cce968/NederlandseDigitaleDienst/design-system"
discussionCount: 1
---

# NLDD Designsysteem

Het NLDD Designsysteem geeft je de bouwstenen voor websites en applicaties van de Rijksoverheid. Toegankelijkheid, huisstijl en ontwerppatronen krijg je automatisch mee.

De componenten zijn web components: gewone HTML-elementen die de browser zelf begrijpt. Daarom werken ze in Angular, React en Vue, en net zo goed zonder framework. Vind je een probleem, dan lossen we het één keer op, in het component zelf. Met de volgende update hebben alle teams de verbetering.

Meer op **https://design.digitaledienst.overheid.nl**. Alle componenten staan in [Storybook](https://nederlandsedigitaledienst.github.io/design-system/).

## Installatie

```bash
npm install @nldd/design-system
```

### Gebruik

```javascript
// Importeer CSS variabelen en fonts (vereist voor styling)
import '@nldd/design-system/styles';

// Importeer alle componenten
import '@nldd/design-system';

// Of importeer specifieke componenten
import { NLDDButton, NLDDCheckbox, NLDDSwitch } from '@nldd/design-system';
```

```html

<nldd-button appearance="accent-filled" text="Opslaan"></nldd-button>
<nldd-checkbox-field label="Akkoord met voorwaarden"></nldd-checkbox-field>
<nldd-switch-field…
