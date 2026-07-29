---
repo: "openstack-k8s-operators/edpm-ansible"
name: "edpm-ansible"
description: "External Dataplane Management Ansible Playbooks"
readmeQualityOk: true
url: "https://github.com/openstack-k8s-operators/edpm-ansible"
homepage: "https://openstack-k8s-operators.github.io/edpm-ansible/"
language: "Python"
languages: ["Python", "Jinja"]
languagePcts: [72, 23]
stars: 17
forks: 97
openIssues: 3
closedIssues: 18
watchers: 5
contributors: 80
recentReleases: 0
createdAt: "2023-01-17T16:04:25Z"
lastCommitAt: "2026-07-29T06:14:31Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 95
undervaluedScore: 78
maintainers: ["openshift-merge-bot[bot]", "rabi", "eduolivares"]
openGraphImageUrl: "https://opengraph.githubassets.com/fde517651139b972393d58f61ac122bcccbd78293ee8a10cce1a6f7f125369d2/openstack-k8s-operators/edpm-ansible"
---

EDPM Ansible
============

EDPM Ansible project repository. Contains Ansible roles and plugins for use with EDPM.

Test ansible roles with molecule
--------------------------------

The tests are done with a common environment provided by the
`ci-framework <https://github.com/openstack-k8s-operators/ci-framework/>`__
project. This project provides all the requirement files and
configurations needed for setting up the environment to execute the
``molecule test`` command under the roles. It actually requires
``podman`` for executing the tests in a container.

For setting up the environment and executing the tests:

      $ make execute_molecule

In case the ci-framework project is already cloned we can provide the
folder with ``ENV_DIR=/path/repository``

Note: the instruction ``execute_molecule`` has the
``TEST_ALL_ROLES=yes`` option in the podman command. It will execute
tests in all the roles. In case we want to execute the tests just in
modified roles we should delete it.

Tests can be executed locally, either on per role basis with:

      $ molecule test --all

invoked in ``roles/<rolename>`` directory. Or by testing all roles sequentially:

      $ make execute_molecule_local…
