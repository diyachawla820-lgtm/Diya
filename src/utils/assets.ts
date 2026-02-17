// Base URL is set in vite.config.ts
const BASE_URL = '/Diya/'

/**
 * Get the correct asset path for production deployment
 * Handles base URL for GitHub Pages deployment
 */
export function getAssetPath(path: string): string {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path
  // Return full path with base
  return BASE_URL + cleanPath
}
