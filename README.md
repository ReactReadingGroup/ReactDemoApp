# sc-riskportal

## Create .Net web app

The project template has been removed in favor of using the latest dotnetcore templating. Please run `dotnet new -l` to list the various types of dotnet projects that can be templated. For example, navigate to the `e-commerce-portal/` directory and run `dotnet new webapp` to create a new webapp. A default .gitignore has been included.

## Dockerfile

An example Dockerfile has been added to build and run the .net application using net6.0. Build your image with `docker build .`

## Jenkinsfile

A default Jenkinsfile has been included to build Docker images in artifactory, and deploy images to k8s on GKE.

## deploy folder

A deploy folder is included in your project to allow for project specific settings needed in k8s deployments