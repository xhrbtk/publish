import { defineComponent } from "vue";
import s from './StartPage.module.scss'
import { Button } from "../shared/Button";
import { FloatButton } from "../shared/FloatButton";
import { Center } from "../shared/Center";
import { Icon } from '../shared/Icon';
export const StartPage = defineComponent({
    setup: (props, context) => {
        const onClick = () => {
            console.log('hi')
        }
        return () => (
            <div class={s.start}>
                <nav>menu</nav>
                <Center class={s.pig_wrapper}>
                    <Icon name="pig" class={s.pig} />
                </Center>
                <div class={s.button_wrapper}>
                    <Button class={s.button} onClick={onClick}>test</Button>
                </div>
                <FloatButton iconName='add'/>
            </div>
        )
    }
})