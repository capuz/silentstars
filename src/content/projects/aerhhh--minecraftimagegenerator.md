---
repo: "Aerhhh/MinecraftImageGenerator"
name: "MinecraftImageGenerator"
description: "A library for generating Minecraft item tooltips, inventory displays, and player head images"
readmeQualityOk: true
url: "https://github.com/Aerhhh/MinecraftImageGenerator"
language: "Java"
languages: ["Java"]
languagePcts: [100]
topics: ["image-generation", "java", "maven", "minecraft"]
stars: 5
forks: 3
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-02-15T18:03:10Z"
lastCommitAt: "2026-11-21T11:37:45Z"
status: "thriving"
tags: ["funded"]
healthScore: 85
undervaluedScore: 69
maintainers: ["Aerhhh", "dependabot[bot]", "SocksM"]
openGraphImageUrl: "https://opengraph.githubassets.com/4c010a72db4112ed19338dffdcf61f22f2555b898c856c4da4746de61aacfc9e/Aerhhh/MinecraftImageGenerator"
fundingLinks: ["GITHUB:https://github.com/Aerhhh", "KO_FI:https://ko-fi.com/aerhh", "BUY_ME_A_COFFEE:https://buymeacoffee.com/aaerh"]
---

# MinecraftImageGenerator

**A Java library for programmatically generating Minecraft-themed images:** item tooltips, inventories, individual items, and player heads, as static PNGs or animated GIFs.

&nbsp;&nbsp;
&nbsp;&nbsp;

Everything below was rendered by the library itself. Each snippet is the actual code that produces the image next to it.

## Showcase

### Item tooltips

Full Minecraft formatting: colors, bold, italic, strikethrough, underline, obfuscation, text wrapping, rarity coloring, and configurable padding and borders.

```java
GeneratedObject tooltip = new GeneratorImageBuilder()
    .addGenerator(new MinecraftTooltipGenerator.Builder()
        .withName("Aegis of the Fallen Star")
        .withRarity(Rarity.byName("LEGENDARY"))
        .withType("SWORD")
        .withItemLore("""
            &7A blade forged in the heart of a dying star.

            &6⚔ Damage: &c+340
            &6✦ Attack Speed: &aVery Fast

            &f&lBold &7&mStrike&r &b&nUnderline &d&oItalic

            &e&lRIGHT-CLICK &7to unleash &6Starfall""")
        .withMaxLineLength(48)
        .withRenderBorder(true)
        .build())
    .build();
```
