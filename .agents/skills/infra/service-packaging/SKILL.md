# Service Packaging Skill

## Purpose

Convert a script, repository, workflow, or tool into a deployable backend service.

## Core Principle

Keep services simple.

Avoid:

* Kubernetes
* Celery
* Redis
* Event buses

unless the MVP actually requires them.

## Packaging Workflow

### 1. Inspect

Identify:

* entrypoint
* inputs
* outputs
* dependencies
* runtime requirements

### 2. Define API

Create:

* endpoint
* request schema
* response schema
* error schema

### 3. Decide Sync vs Async

Sync:

* fast tasks

Async:

* video processing
* AI workloads
* long-running jobs

### 4. Add Core Endpoints

Required:

GET /health

POST /process

Optional:

GET /version

GET /metrics

### 5. Containerize

Create:

* Dockerfile
* .dockerignore
* docker-compose.yml

### 6. Configure

Use:

.env

for:

* API keys
* ports
* paths
* runtime configuration

### 7. Storage Layout

data/
input/
output/
temp/
logs/

Rules:

* never overwrite source files
* separate outputs
* clean temp files

### 8. Deployment

Preferred VPS shape:

Client
↓
Nginx
↓
Docker
↓
Service

## Recommended Python Stack

* FastAPI
* Uvicorn
* Pydantic
* Docker
* Docker Compose
* python-dotenv

## Security Rules

* validate inputs
* validate file sizes
* use API keys
* keep secrets in .env
* never expose stack traces

## Completion Standard

A service is complete when:

* runs locally
* runs in Docker
* /health works
* processing endpoint works
* deployment path is documented
* request/response examples exist
