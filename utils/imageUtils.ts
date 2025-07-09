export const getImageUrl = (path: string): string => {
  // Remove leading slash if present to prevent double slashes
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `/${cleanPath}`;
};
