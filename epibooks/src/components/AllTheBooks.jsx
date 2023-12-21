import { Component } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import fantasy from "./books/fantasy.json";
import history from "./books/history.json";
import horror from "./books/horror.json";
import romance from "./books/romance.json";
import scifi from "./books/scifi.json";

class AllTheBooks extends Component {
	state = {
		genre: fantasy,
		selectedGenre: "fantasy",
	};

	handleGenreChange = (newGenre) => {
		let selectedGenre;
		switch (newGenre) {
			case fantasy:
				selectedGenre = "fantasy";
				break;
			case history:
				selectedGenre = "history";
				break;
			case horror:
				selectedGenre = "horror";
				break;
			case romance:
				selectedGenre = "romance";
				break;
			case scifi:
				selectedGenre = "scifi";
				break;
			default:
				selectedGenre = "";
		}

		this.setState({
			genre: newGenre,
			selectedGenre: selectedGenre,
		});
	};

	render() {
		return (
			<Container>
				<Container>
					<Button
						variant={
							this.state.selectedGenre === "fantasy"
								? "primary"
								: "info"
						}
						className="m-3"
						onClick={() => {
							this.handleGenreChange(fantasy);
						}}
					>
						Fantasy
					</Button>
					<Button
						variant={
							this.state.selectedGenre === "history"
								? "primary"
								: "info"
						}
						className="m-3"
						onClick={() => {
							this.handleGenreChange(history);
						}}
					>
						History
					</Button>
					<Button
						variant={
							this.state.selectedGenre === "horror"
								? "primary"
								: "info"
						}
						className="m-3"
						onClick={() => {
							this.handleGenreChange(horror);
						}}
					>
						Horror
					</Button>
					<Button
						variant={
							this.state.selectedGenre === "romance"
								? "primary"
								: "info"
						}
						className="m-3"
						onClick={() => {
							this.handleGenreChange(romance);
						}}
					>
						Romance
					</Button>
					<Button
						variant={
							this.state.selectedGenre === "scifi"
								? "primary"
								: "info"
						}
						className="m-3"
						onClick={() => {
							this.handleGenreChange(scifi);
						}}
					>
						Sci-Fi
					</Button>
				</Container>

				<Row>
					{this.state.genre.map((book, index) => {
						return (
							<Col
								xs={6}
								md={4}
								lg={3}
								className="card-group my-2"
								key={`book-${index}`}
							>
								<Card>
									<Card.Img variant="top" src={book.img} />
									<Card.Body className="d-flex flex-column justify-content-start">
										<Card.Title>{book.title}</Card.Title>
										<Card.Text>
											Some quick example text to build on
											the card title and make up the bulk
											of the card's content.
										</Card.Text>
										<Button
											variant="success"
											className="mt-auto"
										>
											Compra
										</Button>
									</Card.Body>
								</Card>
							</Col>
						);
					})}
				</Row>
			</Container>
		);
	}
}
export default AllTheBooks;
