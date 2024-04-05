import mongoose, { Schema, Document } from "mongoose";
import { Publisher } from "./publisher";

interface Book extends Document {
  title: string;
  author: string;
  isbn: string;
  year_publication: number;
  publisher: Schema.Types.ObjectId | Publisher;
}

const bookSchema = new Schema({
  title: String,
  author: String,
  isbn: String,
  year_publication: Number,
  publisher: {type: Schema.Types.ObjectId, ref: 'Publisher'} // Define o campo publisher como uma referência à entidade "Editora"
});

// Criar o modelo do livro
const BookModel = mongoose.model<BookDocument>("Book", bookSchema);

interface BookDocument extends Book, Document {}

export { BookModel, Book, BookDocument };
