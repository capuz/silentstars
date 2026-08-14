---
repo: "image-charts/mjml-chart"
name: "mjml-chart"
description: "<mj-chart/> for MJML framework"
readmeQualityOk: true
url: "https://github.com/image-charts/mjml-chart"
homepage: "https://image-charts.com"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [95]
topics: ["mjml", "email-charts", "google-image-charts", "chart-image", "email-chart"]
stars: 80
forks: 4
openIssues: 3
closedIssues: 4
watchers: 3
contributors: 3
recentReleases: 0
createdAt: "2016-10-31T17:34:34Z"
lastCommitAt: "2026-08-14T05:15:57Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 88
undervaluedScore: 47
maintainers: ["actions-user"]
openGraphImageUrl: "https://opengraph.githubassets.com/e012c25b0ff124e849324481a72013ddfa8d29d6e429b5e1df24a9de032bf282/image-charts/mjml-chart"
---

## mjml-chart for [mjml](https://mjml.io/)

Displays charts as images in your email. Note that the chart can be animated (gif) when the `chan` attribute is specified.

#### 🎩 Usage

```xml
<mjml>
  <mj-body>
    <mj-section>
      <mj-column>
        <mj-chart chs="700x200" chd="s:theresadifferencebetweenknowingthepathandwalkingthepath" cht="bvs" chxt="y" chf="b0,lg,90,4CA4F5,0.1,C371D3,0.8,EA469E,1" />
      </mj-column>
    </mj-section>
  </mj-body>
</mjml>
```

  </a>
</p>

##### 🚀 Setup

- `mjml-chart` v5.x.x is built for *MJML4* ([Community components](https://mjml.io/documentation/#community-components)):

```bash
npm install mjml-chart@5 --save

cat <<EOF > .mjmlconfig
{
  "packages": [
    "mjml-chart/lib/index.js"
  ]
}
EOF
```

- `mjml-chart` v4.x.x is built for *MJML3*:

```bash
npm install mjml-chart@4 --save
```

##### 🚧 Documentation

| attribute                                                                                             | description                                                                                | value examples…
