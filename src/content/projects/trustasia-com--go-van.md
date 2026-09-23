---
repo: "trustasia-com/go-van"
name: "go-van"
description: "Go framework for microservices."
readmeQualityOk: true
url: "https://github.com/trustasia-com/go-van"
language: "Go"
languages: ["Go"]
languagePcts: [100]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2021-05-16T03:49:18Z"
lastCommitAt: "2026-09-23T08:45:57Z"
lastReleaseAt: "2025-03-25T07:27:54Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 74
undervaluedScore: 39
maintainers: ["deepzz0"]
openGraphImageUrl: "https://opengraph.githubassets.com/093d2b41bc711e4c1268e5c89d04f867812775a5d04511dbecfaa4f8d902afd7/trustasia-com/go-van"
---

# go-van
Go framework for microservices.

See [Examples](https://github.com/trustasia-com/go-van/blob/HEAD/examples) for more usage.

## Telemetry

Starting OpenTelemetry providers is an application lifecycle concern. Enable it explicitly, then
select the matching server middleware independently:

```go
runtime, err := telemetry.Start(ctx,
	telemetry.WithName("example-api"),
	telemetry.WithEndpoint("localhost:4317"),
	telemetry.WithSignals(telemetry.SignalTracer),
	telemetry.WithInsecure(),
)
if err != nil {
	return err
}
defer runtime.Shutdown(shutdownCtx)

server := httpx.NewServer(
	server.WithHandler(handler),
	server.WithTelemetry(runtime),
)
```

`httpx` and `grpcx` automatically install the middleware and interceptors matching the Runtime's
Signals. When Telemetry is disabled, do not call `telemetry.Start`; pass a nil Runtime or omit
`server.WithTelemetry`. The server then installs no telemetry processing chain and opens no OTLP
connection.
