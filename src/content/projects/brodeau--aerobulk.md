---
repo: "brodeau/aerobulk"
name: "aerobulk"
description: "AeroBulk is a modern-FORTRAN-based package/library that gathers state-of-the-art aerodynamic bulk formulae algorithms used to compute turbulent air-sea fluxes of momentum, heat and freshwater."
readmeQualityOk: true
url: "https://github.com/brodeau/aerobulk"
language: "Fortran"
languages: ["Fortran"]
languagePcts: [82]
topics: ["climate-data", "climate-model", "meteorology", "oceanography", "air-sea", "air-sea-flux", "air-sea-interactions"]
stars: 46
forks: 21
openIssues: 0
closedIssues: 12
watchers: 3
contributors: 2
recentReleases: 0
createdAt: "2017-03-03T15:15:10Z"
lastCommitAt: "2026-11-05T11:25:02Z"
lastReleaseAt: "2024-01-05T10:40:15Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 75
undervaluedScore: 35
maintainers: ["brodeau"]
openGraphImageUrl: "https://opengraph.githubassets.com/60a19030487dcc67e76907cff9dc06b9ffbce8ec808a224da403f5a5663453bd/brodeau/aerobulk"
---

**AeroBulk** is a FORTRAN90-based library and suite of tools (including a C++ interface) that feature *state of the art* parameterizations to estimate turbulent air-sea fluxes by means of the traditional **aerodynamic bulk formulae**.

These turbulent fluxes, namely, wind stress, evaporation (latent heat flux) and sensible heat flux, are estimated using the sea surface temperature (bulk or skin), and the near-surface atmospheric surface state: wind speed, air temperature and humidity. If the *cool-skin/warm-layer* schemes need to be called to estimate the skin temperature, surface downwelling shortwave and longwave radiative fluxes are required.

# **> Bulk formula and their parameterizations**

**AeroBulk** relies on the following traditional set of bulk formula to estimate turbulent fluxes at the air-sea interface:

$$ \vec{\tau} = \rho\  C_D \  \vec{U}_z  \  U_B $$

$$ E   = \rho \ C_E \     \big[    q_s   - q_z \big]  \  U_B $$

$$ Q_L = -L_v \  E $$

$$ Q_H = \rho \ C_H \ C_P \ \big[ \theta_z - T_s \big] \  U_B  $$

where $\rho$ is the density of air. The $z$ subscript relates to the reference height above the air-sea interface (generally _z=10m_).
$\vec{U}_z$ is the wind…
