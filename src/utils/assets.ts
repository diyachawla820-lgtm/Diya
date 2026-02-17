/**
 * Get the correct asset path for production deployment
 * Uses relative paths that work with any base URL
 */
export function getAssetPath(path: string): string {
  // Remove leading slash if present to make it relative
  return path.startsWith('/') ? path.slice(1) : path
}
