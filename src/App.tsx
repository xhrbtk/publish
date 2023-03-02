import { defineComponent} from "vue";
import { RouterView } from "vue-router"
export const App = defineComponent({
    setup() {
        
        return () => (
        <>
           <header>导航
            <ul>
                <li>
                    <router-link to="/">foo</router-link>  
                </li>
                <li>
                    <router-link to="/about"> about</router-link>
                </li>
            </ul>
           </header>
           <div>
            <RouterView />
           </div>
           <footer>页脚</footer>
        </>
        )
    }
})