//  Aggiungi un componente CommentArea alla fine di SingleBook.
//  Quando l'utente cliccherà su un SingleBook (quindi quando la proprietà selected nel suo stato diventa true),
//   i commenti dovranno apparire (suggerimento: short-circuit operator!).

import { Component } from "react";
import CommentList from "./CommentList";

// CommentArea dovrà fare il fetch delle recensioni per il libro selezionato, e salvare i commenti nel proprio stato.
//  Conterrà inoltre due sotto-componenti: CommentsList and AddComment.

class CommentArea extends Component {
	render() {
		return <CommentList />;
	}
}
export default CommentArea;
