import { v2 as cloudinary } from 'cloudinary';
import dotenv from 'dotenv';
dotenv.config();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true
});

/**
 * Get all images in a folder (including subfolders)
 * @param {string} folderPath - e.g. 'zeugundquer/singing_hands/images'
 * @param {number} maxResults
 * @returns {Promise<Array<{id: string, url: string}>>}
 */
export async function getImagesInFolder(folderPath, maxResults = 100) {
    const result = await cloudinary.search
        .expression(`folder:${folderPath}/* AND resource_type:image`)
        .max_results(maxResults)
        .execute();

    return result.resources.map(img => ({
        id: img.public_id,
        url: img.secure_url
    }));
}

export default cloudinary;
