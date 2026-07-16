// Vite lib mode uses this as the build entry so that styles.css is extracted
// alongside index.js. Consumers still `import '@vipelar/ui'` (types come from
// index.ts) — this file is not part of the public API.
import './styles/tokens.css';
export * from './index';
