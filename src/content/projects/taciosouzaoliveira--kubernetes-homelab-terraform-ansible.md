---
repo: "taciosouzaoliveira/kubernetes-homelab-terraform-ansible"
name: "kubernetes-homelab-terraform-ansible"
description: "Cluster Kubernetes com 1 control plane e 2 workers, provisionado com Terraform e configurado com Ansible"
readmeQualityOk: true
url: "https://github.com/taciosouzaoliveira/kubernetes-homelab-terraform-ansible"
language: "HCL"
languages: ["HCL"]
languagePcts: [95]
stars: 7
forks: 2
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2025-10-24T01:01:18Z"
lastCommitAt: "2026-10-18T08:14:05Z"
status: "thriving"
tags: []
healthScore: 80
undervaluedScore: 33
maintainers: ["claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/85e2bf9e64f97fad3ddd1c0b83e7da199e79e4b02092b63620889bd9f7511269/taciosouzaoliveira/kubernetes-homelab-terraform-ansible"
---

# Cluster Kubernetes para Estudo CKA

Cluster Kubernetes com 1 control plane e 2 workers provisionado com Terraform e configurado com Ansible.

## Informações do Cluster

- **Control Plane**: 10.17.3.142 (hostname: controlplane)
- **Worker 1**: 10.17.3.51 (hostname: worker-1)
- **Worker 2**: 10.17.3.124 (hostname: worker-2)
- **Versão Kubernetes**: v1.28.15
- **CNI**: Flannel
- **Container Runtime**: containerd

## Estrutura do Projeto

```
.
├── terraform/
│   ├── main.tf           # Configuração principal do Terraform
│   ├── outputs.tf        # Outputs do Terraform
│   ├── cloud-init.yaml   # Configuração cloud-init para VMs
│   └── inventory.tpl     # Template do inventário Ansible
└── ansible/
    ├── playbook.yml      # Playbook de configuração do K8s
    ├── ansible.cfg       # Configuração do Ansible
    └── inventory.ini     # Inventário gerado automaticamente
```

## Como Usar

### Provisionar a Infraestrutura

```bash
cd terraform
terraform init
terraform apply -auto-approve
```

### Configurar o Cluster Kubernetes

Aguarde ~2 minutos após o `terraform apply` para o cloud-init concluir, então:

```bash
cd ../ansible
ansible-playbook playbook.yml
```

### Acessar o…
