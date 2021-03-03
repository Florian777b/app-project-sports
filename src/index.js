import ReactDOM from 'react-dom'
import App from "./components/App"
import { BrowserRouter } from "react-router-dom"
import "./sass/index.scss"


ReactDOM.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>,
	document.querySelector("#bash")
);