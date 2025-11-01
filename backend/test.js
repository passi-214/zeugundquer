import { v2 as cloudinary } from 'cloudinary';
import dotenv from 'dotenv';

// Load environment variables from .env.production
dotenv.config();

// Explicit Cloudinary config
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true
});

async function testCloudinary() {
    try {
        console.log('✅ Testing Cloudinary connection...');
        console.log('Cloud name:', cloudinary.config().cloud_name);

        // Ping to check connection
        const ping = await cloudinary.api.ping();
        console.log('Ping result:', ping);

        // List root folders
        console.log('\n📁 Listing root folders:');
        const rootFolders = await cloudinary.api.root_folders();
        console.log(JSON.stringify(rootFolders, null, 2));

        // Choose a folder to inspect (change this if needed)
        const folderToCheck = 'zeugundquer/singing_hands';
        console.log(`\n📂 Listing subfolders of "${folderToCheck}":`);
        const subFolders = await cloudinary.api.sub_folders(folderToCheck);
        console.log(JSON.stringify(subFolders, null, 2));

        console.log('\n✅ Test complete!');
    } catch (error) {
        console.error('❌ Cloudinary test failed:', error.message);
    }
}

testCloudinary();
