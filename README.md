# Matjari SaaS Platform

Matjari is a proof-of-concept SaaS platform for Arabic speaking merchants. It provides a modular backend with sample modules for Warehouse Management (WMS), Point of Sale (POS) and Accounting. The frontend is a PWA ready template in Arabic (RTL) with offline capabilities.

## Getting Started

```bash
npm install
npm start
```

The server runs on `http://localhost:3000` and serves the PWA from the `public` folder.

## Features

- **Warehouse Management:** basic CRUD for warehouses and stock transfers.
- **Point of Sale:** record sales that sync with inventory.
- **Accounting:** record journal entries for sales and expenses.
- **Offline capable PWA:** service worker caches essential files.

These modules are intentionally minimal and designed for extension. The goal is to demonstrate how POS, accounting and warehouse management can share a common backend.
