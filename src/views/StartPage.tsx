import { defineComponent } from "vue";
import s from './StartPage.module.scss'
import { Button } from "../shared/Button";
import { FloatButton } from "../shared/FloatButton";
import { Navbar } from "../shared/Navbar";
import { Center } from "../shared/Center";
import { Icon } from '../shared/Icon';

export const StartPage = defineComponent({
    setup: (props, context) => {
        const onClick = () => {
            console.log('hi')
        }
        return () => (
            <div class={s.start}>
                <Navbar>
                    {
                        {
                            default: '山竹记账',
                            icon: <Icon name="add1" class={s.navIcon}></Icon>
                        }
                    }
                </Navbar>
                <Center class={s.pig_wrapper}>
                    <Icon name="pig" class={s.pig} />
                </Center>
                <div class={s.button_wrapper}>
                    <Button class={s.button} onClick={onClick}>开始记账</Button>
                </div>
                <FloatButton iconName='add'/>
            </div>
        )
    }
})