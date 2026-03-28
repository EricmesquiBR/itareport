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

   The app will be available at [http://localhost:3000](http://localhost:3000).

4. **Build for production**

   ```bash
   bun run build
   ```

5. **Lint and format with Oxc (Oxlint + Oxfmt)**

   ```bash
   bun run lint:ox
   bun run lint:ox:fix
   bun run format:ox
   bun run format:ox:fix
   ```

## Project Structure

```
src/
   app/          # Vinext App Router pages and layouts
public/         # Static assets
docs/           # Project documentation
```

## Related

- [itareport-api](../itareport-api) — Backend REST API for this project

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

## License

This project is licensed under the [MIT License](LICENSE).
