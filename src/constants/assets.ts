// src/constants/assets.ts

/**
 * 🚀 Centralized Sponsor Asset Macro Registry
 * If an image filename or path ever changes, you only fix it here once.
 */
export const SPONSOR_MAP = {
    AVENTIS: {
        name: 'Aventis Foundation',
        url: '/images/sponsor/aventis_foundation.avif'
    },
    BUNDESREGIERUNG: {
        name: 'Bundesregierung',
        url: '/images/sponsor/bundesregierung.avif'
    },
    BW_KUNST: {
        name: 'BW Kunst',
        url: '/images/sponsor/bw_kunst.avif'
    },
    BW_SOZIALES: {
        name: 'BW Soziales',
        url: '/images/sponsor/bw_soziales.avif'
    }
} as const; // "as const" makes it a deeply read-only, strict Enum-like type