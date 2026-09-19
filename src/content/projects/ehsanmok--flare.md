---
repo: "ehsanmok/flare"
name: "flare"
description: "Full Networking Stack for Mojo🔥"
readmeQualityOk: true
url: "https://github.com/ehsanmok/flare"
homepage: "https://ehsanmok.github.io/flare/"
language: "Mojo"
languages: ["Mojo"]
languagePcts: [93]
topics: ["mojo-lang", "net", "stack"]
stars: 56
forks: 12
openIssues: 1
closedIssues: 5
watchers: 2
contributors: 6
recentReleases: 1
createdAt: "2026-02-20T04:18:48Z"
lastCommitAt: "2026-09-19T02:46:32Z"
lastReleaseAt: "2026-06-22T16:26:53Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 88
undervaluedScore: 43
maintainers: ["ehsanmok", "winding-lines", "bowyern"]
openGraphImageUrl: "https://opengraph.githubassets.com/d6b0338940b5e11c2c083905093f79e643f118426138d2408455512dfeae8477/ehsanmok/flare"
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

And a version-aware client (negotiates HTTP/2 via ALPN, opt into HTTP/3):

```mojo
from flare.prelude import *

def main() raises:
    with HttpClient("https://example.com", prefer_http3=True) as c:
        var r = c.get("/")
        print(r.status, r.text())
```

## Why flare

- **Batteries included:** HTTP/1.1, HTTP/2, and HTTP/3 over QUIC (server + client), WebSocket (RFC 6455 + permessage-deflate), gRPC, TLS 1.2/1.3 + mTLS + in-process HTTPS termination (`bind_tls` / `serve_tls`), streaming responses on every wire (one handler streams byte-identically over h1 / h2 / h3 / https), sessions, gzip + brotli, CORS, static files, SSE,…
