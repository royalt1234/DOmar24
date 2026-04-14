# Secrets & Environment Variables Guide

This document outlines the required environment variables for the frontend and backend applications, and explains where they need to be configured for deployment using Google Cloud Run and GitHub Actions.

## Requirements (.env.example)
A template for your `.env` file is provided as `.env.example` in both `frontend/` and `backend/` directories.

## Secret Management for Deployments

When deploying to Google Cloud Run via GitHub Actions, secrets need to be managed in two places.

### 1. GitHub Secrets
These secrets are used by GitHub Actions to authenticate and deploy your applications. Go to your GitHub repository -> **Settings** -> **Secrets and variables** -> **Actions**.

Add the following as **Repository Secrets**:

| Secret Name | Description | Example |
| :--- | :--- | :--- |
| `GCP_PROJECT_ID` | Your Google Cloud Project ID. | `my-gcp-project-123` |
| `GCP_SERVICE_ACCOUNT` | The service account email used for deployment. | `github-actions@my-gcp-project-123.iam.gserviceaccount.com` |
| `GCP_WORKLOAD_IDENTITY_PROVIDER` | The Workload Identity Provider name for OIDC authentication. | `projects/.../locations/global/workloadIdentityPools/.../providers/...` |

### 2. Google Secret Manager
These secrets are used directly by your application at runtime on Cloud Run.

Go to Google Cloud Console -> **Secret Manager** and create the necessary secrets. Then, grant your Cloud Run service account the **Secret Manager Secret Accessor** role.

In the frontend/backend Cloud Run configuration, you can reference these secrets as environment variables.
