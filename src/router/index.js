import { createRouter, createWebHistory } from 'vue-router'
import Zeugundquer from '../views/Zeugundquer.vue'
import VereinszeugContent from "@/components/ProjectContents/VereinszeugContent.vue";
import MusiCasaContent from "@/components/ProjectContents/MusiCasaContent.vue";
import SingingHandsContent from "@/components/ProjectContents/SingingHandsContent.vue";
import EnsembleScopeContent from "@/components/ProjectContents/EnsembleScopeContent.vue";
import NeuesZeugContent from "@/components/ProjectContents/NeuesZeugContent.vue";
import AktuellesContent from "@/components/ProjectContents/AktuellesContent.vue";
import OrchesterConAnimaContent from "@/components/ProjectContents/OrchesterConAnimaContent.vue";

const routes = [
    { path: '/', redirect: '/zeugundquer' },
    { path: '/zeugundquer', component: Zeugundquer,
        children: [
            { path: 'Vereinszeug', component: VereinszeugContent },
            { path: 'MusiCasa', component: MusiCasaContent },
            { path: 'SingingHands', component: SingingHandsContent },
            { path: 'EnsembleScope', component: EnsembleScopeContent },
            { path: 'NeuesZeug', component: NeuesZeugContent },
            { path: 'Aktuelles/:slug?', component: AktuellesContent }, // optional slug
            { path: 'OrchesterConAnima/:slug?', component: OrchesterConAnimaContent } // optional slug
        ]
    }
]

export default createRouter({
    history: createWebHistory(),
    routes
})
