---
repo: "jchristn/SerializableDataTable"
name: "SerializableDataTable"
description: "SerializableDataTable is a library providing an abstraction class that allows you to serialize and deserialize data to and from a DataTable instance."
readmeQualityOk: true
url: "https://github.com/jchristn/SerializableDataTable"
language: "C#"
languages: ["C#"]
languagePcts: [100]
stars: 8
forks: 4
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2024-07-26T21:55:39Z"
lastCommitAt: "2026-08-16T04:09:44Z"
status: "thriving"
tags: []
healthScore: 80
undervaluedScore: 40
maintainers: ["jchristn"]
openGraphImageUrl: "https://opengraph.githubassets.com/0810ba87343489762e852eedc53a034fcd3da9b0466049e7bc7a680eebdbb0d8/jchristn/SerializableDataTable"
---

# SerializableDataTable

SerializableDataTable is a library providing an abstraction class that allows you to serialize and deserialize data to and from a `DataTable` instance.

## Help, Feedback, Contribute

If you have any issues or feedback, please file an issue here in Github. We'd love to have you help by contributing code for new features, optimization to the existing codebase, ideas for future releases, or fixes!

## New in v1.1.0

- Updated `System.Text.Json` to 10.0.11
- Fixed JSON round-trip of `DateTimeOffset` and `byte[]` scalar columns

## Example

Refer to the ```Test``` project for exercising the library.  This is example is using the NuGet package [SerializationHelper](https://github.com/jchristn/serializationhelper) for simplicity purposes.

```csharp
using System.Data;
using SerializableDataTables;
using SerializationHelper;

// Create your DataTable and columns
DataTable dt1 = new DataTable("Test");
dt1.Columns.Add("id", typeof(int));
dt1.Columns.Add("name", typeof(String));

// Create your DataRows
dt1.Rows.Add(1, "Hello");
dt1.Rows.Add(2, "World");

SerializableDataTable sdt = SerializableDataTable.FromDataTable(dt);
string json = Serializer.SerializeJson(sdt,…
