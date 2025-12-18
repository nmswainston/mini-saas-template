// Back-compat shim: the app now uses the feature/shared folder structure.
// Keep this module to avoid breaking older imports, while using the canonical implementation.
export { ThemeProvider } from '../shared/theme/ThemeContext';

