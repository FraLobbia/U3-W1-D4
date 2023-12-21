// CommentsList mostrerà le recensioni del libro in un elenco;
//  l'array di recensioni gli verrà passato come prop dal componente CommentArea.
//  La singola recensione verrà visualizzata utilizzando un altro componente, chiamato SingleComment.

import { Component } from "react";
import { ListGroup } from "react-bootstrap";

const endpoint = "https://striveschool-api.herokuapp.com/api/comments/";
const token =
	"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTcyMGYxYzBkOGEyMDAwMThhNDhiNTIiLCJpYXQiOjE3MDMxNzAzNDcsImV4cCI6MTcwNDM3OTk0N30.1e8LuXpIsVzh-50Fz59swBQqEM9NkG8D7IIs4_m6YLw";

class CommentList extends Component {
	state = {};

	getComments = () => {
		fetch(endpoint + this.props.book.asin, {
			headers: {
				Authorization: token,
			},
		})
			.then((response) => {
				if (!response.ok) throw response.status;
				return response.json();
			})
			.then((reviews) => {
				this.state.reviews = reviews;
			});
	};

	render() {
		return (
			<ListGroup variant="flush" className="d-block">
				{reviews.map((review) => {
					<ListGroup.Item>{review}</ListGroup.Item>;
				})}
			</ListGroup>
		);
	}
}
export default CommentList;
