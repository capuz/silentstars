---
repo: "ehsanmok/flare"
name: "flare"
description: "Full Networking Stack for Mojo🔥"
url: "https://github.com/ehsanmok/flare"
homepage: "https://ehsanmok.github.io/flare/"
language: "Mojo"
languages: ["Mojo"]
languagePcts: [93]
topics: ["mojo-lang", "net", "stack"]
stars: 30
forks: 5
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 6
recentReleases: 10
createdAt: "2026-02-20T04:18:48Z"
lastCommitAt: "2026-06-26T23:40:40Z"
lastReleaseAt: "2026-06-22T16:26:53Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 45
maintainers: ["ehsanmok", "bowyern"]
openGraphImageUrl: "https://opengraph.githubassets.com/3d53fb2678d4ed4de8d5c792d663f1883a4e4ef065e97e183dabed8d5514de6a/ehsanmok/flare"
---

</p>

<h1 align="center">flare</h1>

</p>

**Full networking stack for Mojo** 🔥 HTTP/1.1, HTTP/2, and HTTP/3 server and client (HTTP/3 over QUIC), WebSocket, TLS, TCP, UDP, Unix sockets, DNS, all in one library on top of one non-blocking reactor. Drop to raw sockets when HTTP isn't the right shape.

```mojo
from flare.prelude import *

def hello(req: Request) -> Response:
    return ok("hello")

def main() raises:
    var r = Router()
    r.get("/", hello)
    var srv = HttpServer.bind(SocketAddr.localhost(8080))
    srv.serve(r^, num_workers=2)
```

And a version-aware client (negotiates h2 via ALPN, opt into h3):

```mojo
from flare.prelude import *

def main() raises:
    with HttpClient("https://example.com", prefer_h3=True) as c:
        var r = c.get("/")
        print(r.status, r.text())
```

## Why flare

- **Batteries included:** HTTP/1.1, HTTP/2, and HTTP/3 over QUIC (server + client), WebSocket (RFC 6455 + permessage-deflate), gRPC, TLS 1.2/1.3 + mTLS, sessions, gzip + brotli, CORS, static files, SSE, templates, RFC 9111 caching, and an OpenAPI 3.1 emitter. Full inventory in [`docs/features.md`](docs/features.md).
- **Composable by types, not callbacks:** `Handler` is…
