---
repo: "ankhorg/NeigeItems-Kotlin"
name: "NeigeItems-Kotlin"
description: "A bukkit random item plugin."
readmeQualityOk: true
url: "https://github.com/ankhorg/NeigeItems-Kotlin"
language: "Java"
languages: ["Java", "Kotlin"]
languagePcts: [69, 29]
topics: ["bukkit", "plugin", "random-item"]
stars: 71
forks: 25
openIssues: 0
closedIssues: 40
watchers: 2
contributors: 3
recentReleases: 0
createdAt: "2022-07-09T15:57:27Z"
lastCommitAt: "2026-09-16T16:19:18Z"
lastReleaseAt: "2023-01-27T14:00:05Z"
status: "quiet"
tags: ["solo_builder", "hidden_gem"]
healthScore: 87
undervaluedScore: 40
maintainers: ["Neige7"]
openGraphImageUrl: "https://opengraph.githubassets.com/61d6afc742abf47abd03dd777a4c857a4426657385c8ab301fe94c1b53d676db/ankhorg/NeigeItems-Kotlin"
---

# NeigeItems

A bukkit item manage plugin.

Javadoc: <https://ankhorg.github.io/NeigeItems-Kotlin/>

Wiki付费, 99元永久, 如欲购买请添加作者QQ: 2468629609

## Development

```kotlin
repositories {
  maven("https://r.irepo.space/maven/")
}

dependencies {
  compileOnly("pers.neige.neigeitems:NeigeItems:[latest release version]")
}
```

## bStats

## API

### 获取物品

```java
ItemStack itemStack = ItemManager.INSTANCE.getItemStack(itemId, player, data);
```

### 获取物品包

```java
ItemPack itemPack = ItemPackManager.INSTANCE.getItemPack(packId);
if (itemPack == null) return;
List<ItemStack> itemStacks = itemPack.getItemStacks(player, data);
```

### 获取NI物品ID

```java
String itemId = ItemUtils.getItemId(itemStack);
if (itemId == null) return;
```

### 获取NI物品ID及物品节点信息

```java
ItemInfo itemInfo = ItemUtils.isNiItem(itemStack);
if (itemInfo == null) return;
```

### 我想在我的插件里使用NI的动作系统

```java
// 继承一个BaseActionManager
public class ActionManager extends BaseActionManager {
    public ActionManager(@NotNull Plugin plugin) {
        super(plugin);
        // 加载一下NI里一些已有的js库
        // 这些库将反映在condition判断和js动作执行中
        loadJSLib("NeigeItems", "JavaScriptLib/lib.js");
    }
}
```

```java
//…
