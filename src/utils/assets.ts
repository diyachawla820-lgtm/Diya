/**
 * Get the correct asset path for production deployment
 * Handles base URL for GitHub Pages or other deployments
 */
export function getAssetPath(path: string): string {
  const base = import.meta.env.BASE_URL
  // Remove leading slash from path if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path
  // Combine base and path, ensuring no double slashes
  return `${base}${cleanPath}`.replace(/\/+/g, '/')
}
