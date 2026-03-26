# Itareport

A community-driven platform where citizens can report urban issues such as structural problems, car accidents, lack of accessibility, or environmental damage — helping improve the city of Itapaje collectively.

## About

Itareport allows users to browse and create reports (denuncias) pinned to an interactive map. Reports are categorized and geolocated, giving the community a clear view of ongoing issues across the city.

### User Roles

- **Guest (not logged in):** Can browse the map and view existing reports.
- **Authenticated user:** Can create reports, confirm existing ones, and manage their account.

### Features

- Interactive map powered by Leaflet to visualize reports
- Report creation with geolocation, category, and description
- User registration and authentication
- Filter and browse reports by category

## Tech Stack

- [Next.js](https://nextjs.org/) 13 (App Router)
- [React](https://react.dev/) 18
- [Tailwind CSS](https://tailwindcss.com/)
- [React Leaflet](https://react-leaflet.js.org/) for map rendering
- [Axios](https://axios-http.com/) for HTTP requests
- TypeScript

## Prerequisites

- [Node.js](https://nodejs.org/) >= 16
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- A running instance of the [itareport-api](../itareport-api) backend

## Getting Started

1. **Clone the repository**

   ```bash
   git clone https://github.com/<your-org>/itareport.git
   cd itareport
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   ```

   The app will be available at [http://localhost:3000](http://localhost:3000).

4. **Build for production**

   ```bash
   npm run build
   ```

## Project Structure

```
src/
  app/          # Next.js App Router pages and layouts
public/         # Static assets
docs/           # Project documentation
```

## Related

- [itareport-api](../itareport-api) — Backend REST API for this project

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

## License

This project is licensed under the [MIT License](LICENSE).
