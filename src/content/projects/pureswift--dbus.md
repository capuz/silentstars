---
repo: "PureSwift/DBus"
name: "DBus"
description: "Swift library for D-Bus"
readmeQualityOk: true
url: "https://github.com/PureSwift/DBus"
language: "Swift"
languages: ["Swift"]
languagePcts: [91]
topics: ["dbus", "ipc", "linux", "swift"]
stars: 12
forks: 6
openIssues: 0
closedIssues: 3
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2016-02-24T22:27:03Z"
lastCommitAt: "2026-11-26T23:38:36Z"
lastReleaseAt: "2018-11-04T00:42:41Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 91
undervaluedScore: 68
maintainers: ["colemancda"]
openGraphImageUrl: "https://opengraph.githubassets.com/d1899bec439a1c4aaed46cb0cf2b86deb902c8cc0e2ba73f301693f472676cc9/PureSwift/DBus"
---

# DBus

Pure Swift library for D-Bus. No `libdbus`, no C implementation — the wire format, the SASL
handshake and the transport are all implemented in Swift.

## Requirements

- Swift 6.4+
- Linux (or any platform with a D-Bus daemon reachable over a Unix socket)

Depends on [PureSwift/Socket](https://github.com/PureSwift/Socket) for async sockets.

## Usage

```swift
import DBus

let connection = try await DBusConnection.connect(to: .session)

let reply = try await connection.send(
    DBusMessage(methodCall: DBusMessage.MethodCall(
        destination: DBusBusName(rawValue: "org.freedesktop.DBus")!,
        path: DBusObjectPath(rawValue: "/org/freedesktop/DBus")!,
        interface: DBusInterface(rawValue: "org.freedesktop.DBus")!,
        method: DBusMember(rawValue: "ListNames")!
    ))
)

if case let .array(names)? = reply.arguments.first {
    for name in names.compactMap({ $0.stringValue }) {
        print(name)
    }
}

await connection.close()
```

An error reply is thrown as a `DBusError` carrying its `org.freedesktop.DBus.Error.*` name;
framing and marshalling failures are thrown as `DBusProtocolError`.
