---
repo: "estie-inc/snowflake-connector-rs"
name: "snowflake-connector-rs"
description: "Snowflake Connector for Rust"
url: "https://github.com/estie-inc/snowflake-connector-rs"
language: "Rust"
languages: ["Rust"]
languagePcts: [99]
stars: 40
forks: 23
openIssues: 2
closedIssues: 10
watchers: 6
contributors: 16
recentReleases: 0
createdAt: "2023-06-25T03:45:27Z"
lastCommitAt: "2026-07-01T07:04:17Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 92
undervaluedScore: 59
maintainers: ["yuly3", "kenkoooo", "rajyan"]
openGraphImageUrl: "https://opengraph.githubassets.com/db6defa1ef09c2a967c3ecbbaa4210f32a1710794ee4de3a37a8fad3b8e4c04d/estie-inc/snowflake-connector-rs"
---

# Snowflake Connector for Rust

A Rust client for Snowflake, which enables you to connect to Snowflake and run queries.

## MSRV

The minimum supported Rust version (MSRV) is 1.88.

## Usage

```rust
#[derive(Debug, PartialEq, snowflake_connector_rs::FromRow)]
struct ExampleRow {
    id: i64,
    value: String,
}

let session_config = SnowflakeSessionConfig::default()
    .with_role("ROLE")
    .with_warehouse("WAREHOUSE")
    .with_database("DATABASE")
    .with_schema("SCHEMA");

let query_config = SnowflakeQueryConfig::default()
    .with_async_query_completion_timeout(std::time::Duration::from_secs(30));

let client = SnowflakeClient::new(
    SnowflakeClientConfig::new(
        "USERNAME",
        "ACCOUNT",
        SnowflakeAuthConfig::password("PASSWORD"),
    )
    .with_session(session_config)
    .with_query(query_config),
)?;
let session = client.create_session().await?;

session
    .query("CREATE TEMPORARY TABLE example (id NUMBER, value STRING)")
    .await?;
session
    .query("INSERT INTO example (id, value) VALUES (1, 'hello'), (2, 'world')")
    .await?;

let dynamic_rows = session
    .query("SELECT id, value FROM example ORDER BY id")
    .await?
    .collect()…
