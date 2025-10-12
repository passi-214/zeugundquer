import {createRouter, createWebHistory} from 'vue-router'
import Zeugundquer from '../views/Zeugundquer.vue'
import VereinszeugContent from "@/components/ProjectContents/VereinszeugContent.vue";
import MusiCasaContent from "@/components/ProjectContents/MusiCasaContent.vue";
import SingingHandsContent from "@/components/ProjectContents/SingingHandsContent.vue";
import EnsembleScopeContent from "@/components/ProjectContents/EnsembleScopeContent.vue";
import NeuesZeugContent from "@/components/ProjectContents/NeuesZeugContent.vue";
import AktuellesContent from "@/components/ProjectContents/AktuellesContent.vue";
import OrchesterConAnimaContent from "@/components/ProjectContents/OrchesterConAnimaContent.vue";
import ConAnimaAktuelles from "@/components/ProjectContents/OrchesterConAnima/ConAnimaAktuelles.vue";
import ConAnima from "@/components/ProjectContents/OrchesterConAnima/ConAnima.vue";
import ConAnimaOrchester from "@/components/ProjectContents/OrchesterConAnima/ConAnimaOrchester.vue";
import ConAnimaTeam from "@/components/ProjectContents/OrchesterConAnima/ConAnimaTeam.vue";
import ConAnimaMitspielen from "@/components/ProjectContents/OrchesterConAnima/ConAnimaMitspielen.vue";
import ConAnimaSupport from "@/components/ProjectContents/OrchesterConAnima/ConAnimaSupport.vue";

const routes = [
    {path: '/', redirect: '/zeugundquer'},
    {
        path: '/zeugundquer', component: Zeugundquer,
        children: [
            {path: 'Vereinszeug', component: VereinszeugContent},
            {path: 'MusiCasa', component: MusiCasaContent},
            {path: 'SingingHands', component: SingingHandsContent},
            {path: 'EnsembleScope', component: EnsembleScopeContent},
            {path: 'NeuesZeug', component: NeuesZeugContent},
            {path: 'Aktuelles/:slug?', component: AktuellesContent}, // optional slug
            {
                path: 'OrchesterConAnima',
                component: OrchesterConAnimaContent,
                children: [
                    { path: 'Aktuelles', component: ConAnimaAktuelles, name: 'conAnimaAktuelles' },
                    { path: 'ConAnima', component: ConAnima, name: 'conAnima' },
                    { path: 'Orchester', component: ConAnimaOrchester, name: 'conAnimaOrchester' },
                    { path: 'Team', component: ConAnimaTeam, name: 'conAnimaTeam' },
                    { path: 'Mitspielen', component: ConAnimaMitspielen, name: 'conAnimaMitspielen' },
                    { path: 'Unterstuetzen', component: ConAnimaSupport, name: 'conAnimaSupport' },
                ]
            }

        ]
    }
]

export default createRouter({
    history: createWebHistory(),
    routes
})
