# Clinical Research Site Finder

This project now uses [Vite](https://vitejs.dev/) with React and TypeScript.
The original prototype existed as a single `index.html` file with inline React code. 
That legacy implementation is preserved in `legacy-index.html` and its UI will be migrated into proper components under `src/pages/LegacyPage.tsx`.

## Development

```bash
npm install
npm run dev
```

## Tests

```bash
npm test
```

## Project Structure

- `src/app` – application shell and router
- `src/pages` – route-level pages; includes `LegacyPage` containing the original app
- `src/components` – reusable components (to be populated)
- `src/mocks` – mock data sources

## Contributing

Please see [CONTRIBUTING.md](CONTRIBUTING.md).
