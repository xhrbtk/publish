import { defineComponent, ref } from "vue";
import { RouterView } from "vue-router";

export const Welcome = defineComponent({
    setup() {
        return () => (
        <>
           <div >
            welcome
            <RouterView></RouterView>
           </div>
        </>
        )
    }
})