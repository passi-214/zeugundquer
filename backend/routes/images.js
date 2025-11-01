import express from 'express';
import { getImagesInFolder } from '../cloudinaryClient.js';

const router = express.Router();

router.get('/singing_hands', async (req, res) => {
    try {
        const images = await getImagesInFolder('zeugundquer/singing_hands/images');
        res.json(images);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
});

export default router;
