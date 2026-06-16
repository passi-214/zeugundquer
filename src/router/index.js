import {createRouter, createWebHistory} from 'vue-router'
import Zeugundquer from '../views/zeugundquer.vue'
import VereinszeugContent from "@/components/ProjectContents/VereinszeugContent.vue";
import MusiCasaContent from "@/components/ProjectContents/MusiCasaContent.vue";
import SingingHandsContent from "@/components/ProjectContents/SingingHandsContent.vue";
import EnsembleScopeContent from "@/components/ProjectContents/EnsembleScopeContent.vue";
import NeuesZeugContent from "@/components/ProjectContents/NeuesZeugContent.vue";
import OrchesterConAnimaContent from "@/components/ProjectContents/OrchesterConAnimaContent.vue";
import ConAnimaAktuelles from "@/components/ProjectContents/OrchesterConAnima/ConAnimaAktuelles.vue";
import ConAnima from "@/components/ProjectContents/OrchesterConAnima/ConAnima.vue";
import ConAnimaOrchester from "@/components/ProjectContents/OrchesterConAnima/ConAnimaOrchester.vue";
import ConAnimaTeam from "@/components/ProjectContents/OrchesterConAnima/ConAnimaTeam.vue";
import ConAnimaMitspielen from "@/components/ProjectContents/OrchesterConAnima/ConAnimaMitspielen.vue";
import ConAnimaSupport from "@/components/ProjectContents/OrchesterConAnima/ConAnimaSupport.vue";
import SchallUndRauchContent from "@/components/ProjectContents/SchallUndRauchContent.vue";
import MusikOhneGockelnContent from "@/components/ProjectContents/MusikOhneGockelnContent.vue";
import Impressum from "@/views/impressum.vue";

const routes = [
    {path: '/', redirect: '/zeugundquer'},
    {
        path: '/zeugundquer', component: Zeugundquer,
        children: [
            {path: 'vereinszeug', component: VereinszeugContent},
            {path: 'musicasa', component: MusiCasaContent},
            {path: 'singendehaende', component: SingingHandsContent},
            {path: 'ensemblescope', component: EnsembleScopeContent},
            {path: 'neueszeug', component: NeuesZeugContent},
            {path: 'schallundrauch', component: SchallUndRauchContent},
            {path: 'musikohnegockeln', component: MusikOhneGockelnContent},
            { path: 'impressum', component: Impressum, name: 'impressum' },

            {path: 'vereinszeug/:slug?', component: VereinszeugContent}, // optional slug
            {
                path: 'orchesterconanima',
                component: OrchesterConAnimaContent,
                children: [
                    {path: 'Aktuelles', component: ConAnimaAktuelles, name: 'Aktuelles'},
                    {path: 'ConAnima', component: ConAnima, name: 'ConAnima'},
                    {path: 'Orchester', component: ConAnimaOrchester, name: 'Orchester'},
                    {path: 'Team', component: ConAnimaTeam, name: 'Team'},
                    {path: 'Mitspielen', component: ConAnimaMitspielen, name: 'Mitspielen'},
                    {path: 'Unterstützen', component: ConAnimaSupport, name: 'Unterstützen'},
                ]
            }
        ]
    },
]

export default createRouter({
    history: createWebHistory(),
    routes
})
