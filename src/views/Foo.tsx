import { defineComponent, ref } from "vue";

export const Foo = defineComponent({
    setup() {
        return () => (
        <>
           <div >
            foo
           </div>
        </>
        )
    }
})