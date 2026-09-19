---
repo: "dessalines/room-db-export-import"
name: "room-db-export-import"
description: "Import and export your jetpack compose app's room database."
readmeQualityOk: true
url: "https://github.com/dessalines/room-db-export-import"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [100]
stars: 8
forks: 0
openIssues: 1
closedIssues: 1
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2024-09-29T19:41:16Z"
lastCommitAt: "2026-09-19T02:48:03Z"
lastReleaseAt: "2024-09-29T23:16:28Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 86
undervaluedScore: 49
maintainers: ["renovate[bot]", "dessalines"]
openGraphImageUrl: "https://opengraph.githubassets.com/62f8398c9f8a4edfb9cb1a60948b75adc208b8114dd996257ae64f1795f9cef6/dessalines/room-db-export-import"
---

</div>

# Room-DB-Export-Import

This library provides an easy way to import and export your jetpack compose app's room database to a zip file.

## Usage

Add the dependency to your app's `build.gradle` :

`implementation 'com.github.dessalines:room-db-export-import:VERSION'`

To export, you can do:

```kt
val dbHelper = RoomDBExportImport(AppDB.getDatabase(ctx).openHelper)

val exportDbLauncher =
    rememberLauncherForActivityResult(
        ActivityResultContracts.CreateDocument("application/zip"),
    ) {
        it?.also {
            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
                dbHelper.export(ctx, it)
                Toast.makeText(ctx, dbSavedText, Toast.LENGTH_SHORT).show()
            }
        }
    }
...
onClick = {
    exportDbLauncher.launch("EXPORT_FILENAME")
}
```

To import:

```kt
val importDbLauncher =
    rememberLauncherForActivityResult(
        ActivityResultContracts.OpenDocument(),
    ) {
        it?.also {
            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
                dbHelper.import(ctx, it, true)
                Toast.makeText(ctx, dbRestoredText, Toast.LENGTH_SHORT).show()
            }
        }
    }
...…
