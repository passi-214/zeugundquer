// src/utils/gallery.ts

interface GalleryResult {
    lowResMap: Record<string, string>;
    highResMap: Record<string, string>;
}

/**
 * 🚀 Reusable utility to process raw JSON asset arrays into safe, URL-encoded gallery maps.
 * Automatically handles spaces, parentheses, and any image formats (.jpg, .png, .webp, .avif).
 */
export function buildGalleryMaps(
    highQualityPaths: string[] = [],
    lowQualityPaths?: string[]
): GalleryResult {
    const lowResMap: Record<string, string> = {};
    const highResMap: Record<string, string> = {};

    // Helper to safely URL-encode the filename while preserving the directory slashes
    const getSafePath = (rawPath: string): string => {
        if (!rawPath) return '';
        const parts = rawPath.split('/');
        const filename = parts.pop() || '';
        // Encode special characters like spaces or parentheses in the filename
        return [...parts, encodeURIComponent(filename)].join('/');
    };

    highQualityPaths.forEach((highRawPath, index) => {
        const safeHighPath = getSafePath(highRawPath);

        // Look for a matching low-res index, otherwise fallback to the high-res image path
        const lowRawPath = lowQualityPaths && lowQualityPaths[index] ? lowQualityPaths[index] : highRawPath;
        const safeLowPath = getSafePath(lowRawPath);

        if (safeHighPath) {
            // FIX: useGallery loops through Object.keys() and expects the keys
            // to look like raw file paths containing the base file name.
            // We pass the raw unencoded path as the key, and the safe URL as the value.
            highResMap[highRawPath] = safeHighPath;
            lowResMap[lowRawPath] = safeLowPath;
        }
    });

    return { lowResMap, highResMap };
}