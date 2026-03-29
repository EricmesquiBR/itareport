# Itareport

A community-driven platform where citizens can report urban issues such as structural problems, car accidents, lack of accessibility, or environmental damage — helping improve the city of Itapaje collectively.

## About

Itareport allows users to browse and create issue reports pinned to an interactive map. Reports are categorized and geolocated, giving the community a clear view of ongoing issues across the city.

### User Roles

- **Guest (not logged in):** Can browse the map and view existing reports.
- **Authenticated user:** Can create reports, confirm existing ones, and manage their account.

### Features

- Interactive map powered by Leaflet to visualize reports
- Report creation with geolocation, category, and description
- User registration and authentication
- Filter and browse reports by category

## Tech Stack

- [Nx](https://nx.dev/) workspace orchestration and task running
- [Vinext](https://github.com/cloudflare/vinext) (Vite + Next-compatible App Router)
- [React](https://react.dev/) 19
- [Tailwind CSS](https://tailwindcss.com/)
- [React Leaflet](https://react-leaflet.js.org/) for map rendering
- [Axios](https://axios-http.com/) for HTTP requests
- TypeScript

## Prerequisites

- [Bun](https://bun.sh/) >= 1.3
- A running instance of the [itareport-api](../itareport-api) backend

## Getting Started

1. **Clone the repository**

   ```bash
   git clone https://github.com/<your-org>/itareport.git
   cd itareport
   ```

2. **Install dependencies**

   ```bash
   bun install
   ```

3. **Run the development server**

   ```bash
   bun run dev
   ```

   This starts PostgreSQL/Redis via Docker Compose and then runs API + frontend serve targets. The frontend is available at [http://localhost:3000](http://localhost:3000).

   If you want to start only Nx app servers (without Compose):

   ```bash
   bun run dev:services
   ```

4. **Build for production**

   ```bash
   bun run build
   ```

   This runs `nx build frontend`.

5. **Lint and format with Oxc (Oxlint + Oxfmt)**

   ```bash
   bun run lint
   bun run lint:fix
   bun run format
   bun run format:fix
   ```

6. **Run Cypress E2E tests**

   One command (recommended):

   ```bash
   bun run tests
   ```

   This command starts the frontend server if needed, runs the Cypress suite, and then stops the temporary server.

   Start the frontend app first:

   ```bash
   bun run nx run frontend:serve -- --port 4200
   ```

   In another terminal, run the headless E2E suite:

   ```bash
   bun run nx run frontend-e2e:e2e-ci
   ```

   Run the default E2E target:

   ```bash
   bun run nx run frontend-e2e:e2e
   ```

   Open Cypress UI mode (interactive):

   ```bash
   bun run nx run frontend-e2e:open-cypress
   ```

   Run a single spec file:

   ```bash
   bun run nx run frontend-e2e:e2e-ci --spec=cypress/e2e/app.cy.ts
   ```

## Project Structure

```
apps/
   frontend/
      src/       # Vinext App Router pages and layouts
      public/    # Static assets
docs/            # Project documentation
```

## Related

- [itareport-api](../itareport-api) — Backend REST API for this project

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

## License

This project is licensed under the [MIT License](LICENSE).
