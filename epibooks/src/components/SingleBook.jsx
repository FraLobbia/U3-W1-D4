import { Component } from "react";
import { Button, Card } from "react-bootstrap";
import CommentList from "./CommentList";

class SingleBook extends Component {
	state = {
		selected: false,
	};

	render() {
		return (
			<>
				<Card
					onClick={() =>
						this.setState({ selected: !this.state.selected })
					}
					style={{
						border: this.state.selected
							? "10px solid green"
							: "1px solid black",
					}}
				>
					<Card.Img variant="top" src={this.props.book.img} />
					<Card.Body className="d-flex flex-column justify-content-start">
						<Card.Title>{this.props.book.title}</Card.Title>
						<Card.Text>
							Some quick example text to build on the card title
							and make up the bulk of the card's content.
						</Card.Text>
						<Button variant="success" className="mt-auto">
							Compra
						</Button>
					</Card.Body>
				</Card>
				{this.state.selected === true && (
					<CommentList book={this.props.book} />
				)}
			</>
		);
	}
}

export default SingleBook;
