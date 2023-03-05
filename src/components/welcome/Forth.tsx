import { FunctionalComponent } from "vue";
import s from './WelcomeLayout.module.scss';
import cloud from '../../assets/icons/cloud.svg'
import { RouterLink } from 'vue-router';
import { WelcomeLayout } from './WelcomeLayout'

export const Forth: FunctionalComponent = () => {
    return <WelcomeLayout>{{ 
        icon: () => <img class={s.icon} src={cloud} />,
        title: () => <h2>云备份<br />再也不怕数据丢失</h2>,
        buttons: () => 
        <>
          <RouterLink class={s.fake} to="/start" >跳过</RouterLink>
          <RouterLink to="/welcome/4" >开启应用</RouterLink>
          <RouterLink class={s.fake} to="/start" >跳过</RouterLink>
        </>
     }}</WelcomeLayout>
}

Forth.displayName = 'Forth';