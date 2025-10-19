export function useGallery(
    lowResModules: Record<string, string>,
    highResModules?: Record<string, string>,
    prefix?: string
): GalleryImage[] {
    return Object.keys(lowResModules).map((path) => {
        const fileName = path.split('/').pop()!;
        const baseName = prefix ? fileName.replace(new RegExp(`^${prefix}`), '') : fileName;

        const highRes = highResModules
            ? Object.entries(highResModules).find(([key]) => key.endsWith(baseName))?.[1]
            : undefined;

        if (highResModules && !highRes) {
            console.warn('No high-res image found for:', fileName);
        }

        return {
            src: lowResModules[path],
            highResSrc: highRes,
            alt: baseName.split('.')[0] || 'image'
        };
    });
}
