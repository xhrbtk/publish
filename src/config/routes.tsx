import { RouteRecordRaw } from 'vue-router'
import { First } from '../components/welcome/First'
import { FirstActions } from '../components/welcome/FirstActions'
import { Forth } from '../components/welcome/Forth'
import { ForthActions } from '../components/welcome/ForthActions'
import { Second } from '../components/welcome/Second'
import { SecondActions } from '../components/welcome/SecondActions'
import { Third } from '../components/welcome/Third'
import { ThirdActions } from '../components/welcome/ThirdActions'
import { StartPage } from '../views/StartPage'
import { Welcome } from '../views/Welcome'
import { ItemPage } from '../views/ItemPage'
import { ItemList } from '../components/item/ItemList'
import { ItemCreate } from '../components/item/ItemCreate'
import { TagPage } from '../views/TagPage'
import { TagEdit } from '../components/tag/TagEdit'
import { TagCreate } from '../components/tag/TagCreate'


export const routes: RouteRecordRaw[] = [
    { path: '/', redirect:  '/welcome'},
    { path: '/welcome', 
      component: Welcome,
      children: [
        { path: '', redirect: '/welcome/1' },
        // 一个路径对应多个组件
        { path: '1', name: "Welcome1", components: { main: First, footer: FirstActions }, },
        { path: '2', name: "Welcome2", components: { main: Second, footer: SecondActions}, },
        { path: '3', name: "Welcome3", components: { main: Third, footer: ThirdActions }, },
        { path: '4', name: "Welcome4", components: { main: Forth, footer: ForthActions }, },
      ]
    },
    { path: '/start', component: StartPage },
    {
      path: '/items', component: ItemPage,
      children: [
        { path: '', component: ItemList },
        { path: 'create', component: ItemCreate },
      ]
    },
    {
      path: '/tags', component: TagPage,
      children: [
        { path: '', component: TagCreate },
        { path: ':id/edit', component: TagEdit}
      ]
    }
  ]