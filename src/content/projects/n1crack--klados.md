---
repo: "n1crack/klados"
name: "klados"
description: "Vue3 Org Chart is a simple and lightweight organization chart component for Vue3. It is highly customizable."
readmeQualityOk: true
url: "https://github.com/n1crack/klados"
language: "Vue"
languages: ["Vue", "TypeScript"]
languagePcts: [44, 38]
topics: ["binary-tree", "tree", "tree-structure", "vue", "unilevel-tree", "mlm", "network", "org-chart"]
stars: 31
forks: 2
openIssues: 3
closedIssues: 1
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2024-07-05T20:32:41Z"
lastCommitAt: "2024-07-05T20:32:41Z"
status: "archived"
tags: ["funded"]
healthScore: 50
undervaluedScore: 22
maintainers: []
openGraphImageUrl: "https://repository-images.githubusercontent.com/824739713/4e8d71b2-083c-4daa-b217-708d3015172b"
fundingLinks: ["GITHUB:https://github.com/n1crack"]
---

## Vue3 Org Chart

### About
Vue3 Org Chart is a simple and lightweight organization chart component for Vue3. It is highly customizable.

### Demo
Playground : [https://playcode.io/vue3orgchart](https://playcode.io/vue3orgchart)

Demo : [https://vue3orgchart.playcode.io](https://vue3orgchart.playcode.io)

### Installation

```bash
npm i vue3-org-chart
```

### Usage
JS entry point
```js
import { createApp } from 'vue'
import App from './App.vue'

import { Vue3OrgChartPlugin } from 'vue3-org-chart'
import 'vue3-org-chart/dist/style.css'

const app = createApp(App)

app.use(Vue3OrgChartPlugin)

app.mount('#app') 
```

```javascript
// alternatively, you can import the component directly
// to use component, Vue3OrgChart instead of Vue3OrgChartPlugin
<script setup>
   import { Vue3OrgChart } from 'vue3-org-chart' 
   import 'vue3-org-chart/dist/style.css' 
   // ...
</script>
```

#### Vue Template
for more detailed example, please check the [examples](https://github.com/n1crack/klados/blob/HEAD/examples) folder
```vue 
    <vue3-org-chart json="YOUR_DATA_JSON_URL">
        <template #node="{item, children, open, toggleChildren}">
            
            <button…
