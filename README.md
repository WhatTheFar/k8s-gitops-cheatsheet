# k8s-gitops-cheatsheet

<!--START_SECTION:awesome:table-of-contents-->

## Table of Contents

-   [Table of Contents](#table-of-contents)
-   [Certificate](#certificate)
-   [Configuration Management](#configuration-management)
-   [Continuous Deployment](#continuous-deployment)
-   [Continuous Development](#continuous-development)
-   [Ingress Controller](#ingress-controller)
-   [Observability](#observability)
-   [Pipeline](#pipeline)
-   [Progressive Delivery](#progressive-delivery)
-   [Secret Management](#secret-management)
-   [Service Mesh](#service-mesh)

<!--END_SECTION:awesome:table-of-contents-->

## Certificate

<!--START_SECTION:awesome:certificate-->

| Title                                                                           | Description |
| :------------------------------------------------------------------------------ | :---------- |
| [cert-manager](https://github.com/jetstack/cert-manager)                        |             |
| [Traefik Ingress](https://doc.traefik.io/traefik/providers/kubernetes-ingress/) |             |

[Back to Top](#table-of-contents)

<!--END_SECTION:awesome:certificate-->

## Configuration Management

<!--START_SECTION:awesome:configuration-->

| Title                                                                                | Description |
| :----------------------------------------------------------------------------------- | :---------- |
| [Jsonnet](https://github.com/google/jsonnet)                                         |             |
| [Kapitan](https://github.com/deepmind/kapitan)                                       |             |
| [cdk8s](https://github.com/awslabs/cdk8s)                                            |             |
| [CUE Kubernetes](https://github.com/cuelang/cue/tree/v0.2.2/doc/tutorial/kubernetes) |             |
| [dhall-kubernetes](https://github.com/dhall-lang/dhall-kubernetes)                   |             |
| [Grafana Tanka](https://github.com/grafana/tanka)                                    |             |
| [Helm](https://github.com/helm/helm)                                                 |             |
| [Ksonnet](https://github.com/ksonnet/ksonnet)                                        |             |
| [Kustomize](https://github.com/kubernetes-sigs/kustomize)                            |             |
| [Pulumi Kubernetes](https://github.com/pulumi/pulumi-kubernetes)                     |             |

[Back to Top](#table-of-contents)

<!--END_SECTION:awesome:configuration-->

## Continuous Deployment

<!--START_SECTION:awesome:continuous-deployment-->

| Title                                          | Description |
| :--------------------------------------------- | :---------- |
| [Argo CD](https://github.com/argoproj/argo-cd) |             |
| [Flux](https://github.com/fluxcd/flux2)        |             |
| [Jenkins X](https://jenkins-x.io/)             |             |

[Back to Top](#table-of-contents)

<!--END_SECTION:awesome:continuous-deployment-->

## Continuous Development

<!--START_SECTION:awesome:continuous-development-->

| Title                                                          | Description |
| :------------------------------------------------------------- | :---------- |
| [Skaffold](https://github.com/GoogleContainerTools/skaffold)   |             |
| [Telepresence](https://github.com/telepresenceio/telepresence) |             |

[Back to Top](#table-of-contents)

<!--END_SECTION:awesome:continuous-development-->

## Ingress Controller

<!--START_SECTION:awesome:ingress-controller-->

| Title                                                                                           | Description                                            |
| :---------------------------------------------------------------------------------------------- | :----------------------------------------------------- |
| [AWS Load Balancer Controller](https://github.com/kubernetes-sigs/aws-load-balancer-controller) | Manage Elastic Load Balancers for a Kubernetes cluster |
| [Nginx Ingress Controller](https://github.com/kubernetes/ingress-nginx)                         |                                                        |
| [Traefik Ingress](https://doc.traefik.io/traefik/providers/kubernetes-ingress/)                 |                                                        |
| [Istio](https://github.com/istio/istio)                                                         |                                                        |

[Back to Top](#table-of-contents)

<!--END_SECTION:awesome:ingress-controller-->

## Observability

<!--START_SECTION:awesome:observability-->

| Title                                   | Description |
| :-------------------------------------- | :---------- |
| [Kiali](https://github.com/kiali/kiali) |             |

[Back to Top](#table-of-contents)

<!--END_SECTION:awesome:observability-->

## Pipeline

<!--START_SECTION:awesome:pipeline-->

| Title                                              | Description |
| :------------------------------------------------- | :---------- |
| [Argo Workflows](https://github.com/argoproj/argo) |             |
| [Tekton](https://github.com/tektoncd/pipeline)     |             |

[Back to Top](#table-of-contents)

<!--END_SECTION:awesome:pipeline-->

## Progressive Delivery

<!--START_SECTION:awesome:progressive-delivery-->

| Title                                                      | Description                                                                                          |
| :--------------------------------------------------------- | :--------------------------------------------------------------------------------------------------- |
| [Argo Rollouts](https://github.com/argoproj/argo-rollouts) | Progressive Delivery for Kubernetes with customizable metric analysis                                |
| [Flagger](https://github.com/weaveworks/flagger)           | Progressive delivery Kubernetes operator (Canary, A/B testing and Blue/Green deployments automation) |
| [Istio](https://github.com/istio/istio)                    |                                                                                                      |

[Back to Top](#table-of-contents)

<!--END_SECTION:awesome:progressive-delivery-->

## Secret Management

<!--START_SECTION:awesome:secret-->

| Title                                                                                                                            | Description                                                                      |
| :------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------- |
| [helm-secret](https://github.com/futuresimple/helm-secrets)                                                                      | A helm plugin that help manage secrets with Git workflow and store them anywhere |
| [Kamus](https://github.com/Soluto/kamus)                                                                                         |                                                                                  |
| [Kustomize Secret Generator Plugins](https://github.com/kubernetes-sigs/kustomize/blob/master/examples/secretGeneratorPlugin.md) |                                                                                  |
| [Sealed Secret](https://github.com/bitnami-labs/sealed-secrets)                                                                  |                                                                                  |
| [SOPS](https://github.com/mozilla/sops)                                                                                          |                                                                                  |
| [Tesoro](https://github.com/kapicorp/tesoro)                                                                                     | Kapitan Secrets Controller for Kubernetes                                        |

[Back to Top](#table-of-contents)

<!--END_SECTION:awesome:secret-->

Discussion about managing secrets in GitOps

-   <https://github.com/argoproj/argo-cd/issues/1364>

Tutorial

-   [Declarative secret management for GitOps with Kapitan](https://medium.com/kapitan-blog/declarative-secret-management-for-gitops-with-kapitan-b3c596eab088) - Kapitan
-   [Managing Kubernetes Secrets Securely with GitOps](https://itnext.io/managing-kubernetes-secrets-securely-with-gitops-b8174b4f4d30) - SOPS

## Service Mesh

<!--START_SECTION:awesome:service-mesh-->

| Title                                           | Description                                                                 |
| :---------------------------------------------- | :-------------------------------------------------------------------------- |
| [Istio](https://github.com/istio/istio)         |                                                                             |
| [Linkerd2](https://github.com/linkerd/linkerd2) | A ultralight, security-first service mesh for Kubernetes, supported by CNCF |
| [Traefik Mesh](https://github.com/traefik/mesh) | A simple, opt-in by default, yet full-featured service mesh.                |

[Back to Top](#table-of-contents)

<!--END_SECTION:awesome:service-mesh-->
