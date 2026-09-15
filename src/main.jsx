import {StrictMode} from "react"
import {createRoot} from "react-dom/client"
import {Provider} from "react-redux"
import Store from "./Searching App/store.jsx"
import Ken from "./Searching App/App.jsx"
createRoot(document.getElementById("root")).render(
    <Provider store={Store}>
        <StrictMode>
            <Ken/>
        </StrictMode>
    </Provider>
)