import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
// import AllTheBooks from './components/AllTheBooks'
import { Container } from "react-bootstrap";
import BookList from "./components/BookList";

import fantasy from "./data/fantasy.json";
import AllTheBooks from "./components/AllTheBooks";

function App() {
	return (
		<Container fluid className="bg-warning p-0">
			<MyNav />
			<Container>
				<Welcome />
				{/* <AllTheBooks /> */}
				<BookList books={fantasy} />
			</Container>
			<MyFooter />
		</Container>
	);
}

export default App;
