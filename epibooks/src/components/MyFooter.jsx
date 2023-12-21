import { Container } from "react-bootstrap";

function MyFooter() {
	return (
		<footer className="mt-5">
			<Container fluid className="text-center bg-dark text-light p-3">
				<p>&copy; 2023 Copyright: Reactibook</p>
			</Container>
		</footer>
	);
}

export default MyFooter;
