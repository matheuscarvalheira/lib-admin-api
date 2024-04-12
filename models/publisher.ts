import mongoose, { Schema, Document } from "mongoose";
import { Book } from "./book";

interface Publisher extends Document {
  name: string;
  location: string;
  books: Schema.Types.ObjectId[] | Book[]; // Adiciona uma lista de livros associados à editora
}

const publisherSchema = new Schema<Publisher>({
  name: String,
  location: String,
  books: [{ type: Schema.Types.ObjectId, ref: "Book" }], // Define uma lista de referências aos livros associados à editora
});

const PublisherModel = mongoose.model<Publisher>("Publisher", publisherSchema);

export { PublisherModel, Publisher };
