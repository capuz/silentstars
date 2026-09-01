---
repo: "jeanparpaillon/erlang-dbus"
name: "erlang-dbus"
description: "Erlang DBUS implementation (forked from unmaintained erlang-dbus)"
readmeQualityOk: true
url: "https://github.com/jeanparpaillon/erlang-dbus"
language: "Erlang"
languages: ["Erlang"]
languagePcts: [96]
stars: 55
forks: 27
openIssues: 9
closedIssues: 18
watchers: 11
contributors: 15
recentReleases: 0
createdAt: "2014-09-26T06:58:20Z"
lastCommitAt: "2026-09-01T08:48:51Z"
lastReleaseAt: "2016-06-22T10:54:30Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "funded"]
healthScore: 88
undervaluedScore: 43
maintainers: ["jeanparpaillon"]
openGraphImageUrl: "https://opengraph.githubassets.com/3f18ed467ec47f58b41ea4e1eaa3f0339bc4216bcca8bb87e1503daeeea901f8/jeanparpaillon/erlang-dbus"
fundingLinks: ["GITHUB:https://github.com/jeanparpaillon"]
---

A native erlang implementation of D-Bus
==============================================

D-Bus is now largely used in a lot of applications for
language-independant, object-oriented RPC system.

The erlang platform needs an erlang native implementation.

# Usage as Client

This example is making a dbus call to the `org.freedesktop.DBus` system service (under linux) and a list of registered services.

```erlang
  {ok, Bus} = dbus_bus_reg:get_bus(session),
  {ok, Service} = dbus_bus:get_service(Bus, 'org.freedesktop.DBus'),
  {ok, RemoteObject} = dbus_remote_service:get_object(Service, '/org/freedesktop/DBus'),
  {ok, Iface} = dbus_proxy:interface(RemoteObject, 'org.freedesktop.DBus'),
  {ok, Names} = dbus_proxy:call(Iface, 'ListNames', []),
  io:format("ListNames: ~p~n", [lists:sort(Names)]),
  ok = dbus_remote_service:release_object(Service, RemoteObject),
  ok = dbus_bus:release_service(Bus, Service),
```

# Usage as Service

In the demo folder there is a bigger example, but is a minimal service callback module:

```erlang
-module(my_service).
-include_lib("dbus/include/dbus.hrl").
-behaviour(gen_dbus).

-export([
%% api
  start_link/2,
  handle_info/2,

%% dbus object callbacks…
