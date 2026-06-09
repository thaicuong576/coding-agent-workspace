# Delivery Mode Decision Skill

## Purpose

Decide whether a project should be built as:

* CLI / Script
* Backend Service
* Frontend App
* Hybrid System

## Core Principle

Do not start with an app unless a frontend is clearly required.

Prefer the smallest delivery mode that can validate the idea.

## Delivery Modes

### CLI / Script

Use when:

* workflow is still experimental
* only one operator uses it
* local execution is enough
* iteration speed matters

Typical shape:

Operator
↓
Script
↓
Files

### Backend Service

Use when:

* input/output are clear
* logic is reusable
* another system may call it
* processing is long-running or heavy

Typical shape:

Client
↓
API
↓
Backend Service

### Frontend App

Use when:

* users need UI
* users need previews
* users need editing
* users need dashboards
* users need accounts/history

Typical shape:

User
↓
Frontend
↓
Backend

### Hybrid

Use when:

* users need UI
* processing is heavy
* jobs need status tracking

Typical shape:

Frontend
↓
API
↓
Worker

## Decision Rules

Ask:

1. Does a human need to interact with it?
2. Is the workflow proven?
3. Is the processing heavy?
4. Will another system call it?
5. Is local execution enough?

## Default Recommendation

New idea:
CLI first

Proven workflow:
Service

User-facing product:
App

Heavy processing + UI:
Hybrid

## Completion Standard

A decision is complete when:

* the delivery mode is chosen
* the reason is clear
* V1 and V2 are separated
