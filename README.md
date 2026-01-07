# Financial Dashboard

*Automatically synced with your [v0.app](https://v0.app) deployments*

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/yogawicaks-projects/v0-financial-dashboard)
[![Built with v0](https://img.shields.io/badge/Built%20with-v0.app-black?style=for-the-badge)](https://v0.app/chat/qGZ7J2DOkkJ)
[![Argos CI](https://img.shields.io/badge/Argos-Visual%20Testing-green)](https://argos-ci.com)

## Overview

This repository will stay in sync with your deployed chats on [v0.app](https://v0.app).
Any changes you make to your deployed app will be automatically pushed to this repository from [v0.app](https://v0.app).

## Deployment

Your project is live at:

**[https://vercel.com/yogawicaks-projects/v0-financial-dashboard](https://vercel.com/yogawicaks-projects/v0-financial-dashboard)**

## Build your app

Continue building your app on:

**[https://v0.app/chat/qGZ7J2DOkkJ](https://v0.app/chat/qGZ7J2DOkkJ)**

## How It Works

1. Create and modify your project using [v0.app](https://v0.app)
2. Deploy your chats from the v0 interface
3. Changes are automatically pushed to this repository
4. Vercel deploys the latest version from this repository

## Visual Testing with Argos CI

This project uses [Argos CI](https://argos-ci.com) for visual regression testing.

### Prerequisites

- Node.js installed
- Argos CI account and project token

### Local Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Install Playwright browsers:
   ```bash
   npx playwright install --with-deps
   ```

### Running Tests

To run the visual regression tests locally:

```bash
npm test
```

To run tests with UI mode (interactive):

```bash
npm run test:ui
```

### GitHub Actions Integration

The visual tests run automatically on every push and pull request to the `main` branch.
The workflow is defined in `.github/workflows/argosci.yml`.

**Secrets required in GitHub:**

- `ARGOS_TOKEN`: Your Argos CI project token.
        
  
