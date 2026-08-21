---
repo: "yuda-lyu/w-component-vue"
name: "w-component-vue"
description: "A combination for vue component."
readmeQualityOk: true
url: "https://github.com/yuda-lyu/w-component-vue"
language: "Vue"
languages: ["Vue"]
languagePcts: [98]
stars: 5
forks: 5
openIssues: 0
closedIssues: 0
watchers: 3
contributors: 2
recentReleases: 0
createdAt: "2019-08-05T08:54:40Z"
lastCommitAt: "2026-08-21T04:11:38Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 75
undervaluedScore: 73
maintainers: ["yuda-lyu"]
openGraphImageUrl: "https://opengraph.githubassets.com/7e4fed733c661970ddc803ea6821a9922017963c6331858586edd5a91fbe3a56/yuda-lyu/w-component-vue"
---

# w-component-vue
A simple component for vue(vue2).

 

## Documentation
To view documentation or get support, visit [docs](https://yuda-lyu.github.io/w-component-vue/global.html).

## Example
To view some examples for more understanding, visit examples:

> **all components:** [web](https://github.com/yuda-lyu/w-component-vue/blob/HEAD//yuda-lyu.github.io/w-component-vue/examples/app.html) [[source code](https://github.com/yuda-lyu/w-component-vue/blob/master/docs/examples/app.html)]

## Installation

### Using npm(ES6 module):
```alias
npm i w-component-vue
```
Import all components:
```alias
//choose component
<w-text
    ...
></w-text>

//import
import WComponentVue from 'w-component-vue'

//use
Vue.use(WComponentVue)
```
Import one component:
```alias
//choose component
<w-text
    ...
></w-text>

//import
import WText from 'w-component-vue/src/components/WText.vue'

//component
Vue.component('w-text',WText)
//or
export default {
    components: {
        WText,
        //or
        'w-text': WText,
    },
    ...
}
```

### In a browser(UMD module):

Add script for vue.
```alias
<script src="https://cdn.jsdelivr.net/npm/vue@2.x/dist/vue.min.js"></script>
```

[Optional] Add…
