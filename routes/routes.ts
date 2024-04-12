import { BookModel } from "../models/book";
import { PublisherModel } from "../models/publisher";
import express, { Request, Response } from "express";

const router = express.Router();

//Rotas

//Listar todas as editoras
router.get("/publishers", async (req: Request, res: Response) => {
  try {
    const publishers = await PublisherModel.find().populate("books");
    res.json(publishers);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
});

// Rota para criar uma nova editora
router.post("/publishers", async (req: Request, res: Response) => {
  const { name, location } = req.body;
  try {
    const newPublisher = new PublisherModel({ name, location });
    // Salvar a nova editora no banco de dados
    const savedPublisher = await newPublisher.save();
    res.status(201).json(savedPublisher);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
});

// Atualizar uma editora pelo ID
router.put("/publishers/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, location } = req.body;

  try {
    const updatedPublisher = await PublisherModel.findByIdAndUpdate(
      id,
      { name, location },
      { new: true }
    );

    if (!updatedPublisher) {
      return res.status(404).json({ message: "Publisher not found!" });
    }

    res.json(updatedPublisher);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
});

// Excluir uma editora pelo ID
router.delete("/publishers/:id", async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const deletedPublisher = await PublisherModel.findByIdAndDelete(id);

    if (!deletedPublisher) {
      return res.status(404).json({ message: "Publisher not found!" });
    }

    res.json({ message: "Publisher deleted successfully!" });
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
});

//Listar todos os livros
router.get("/books", async (req: Request, res: Response) => {
  try {
    const books = await BookModel.find().populate("publisher");
    res.json(books);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
});

//Criar um novo livro
router.post("/books", async (req: Request, res: Response) => {
  const { title, author, isbn, year_publication, publisherId } = req.body;
  try {
    const publisher = await PublisherModel.findById(publisherId);
    if (!publisher) {
      return res.status(404).json({ message: "Publisher not found!" });
    }

    const book = new BookModel({
      title,
      author,
      isbn,
      year_publication,
      publisher: publisherId, // Associar o ID da editora ao livro
    });
    const newBook = await book.save();
    publisher.books.push(newBook._id);
    await publisher.save();
    res.status(201).json(newBook);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
});

//Atualizar um livro existente
router.put("/books/:id", async (req: Request, res: Response) => {
  const id = req.params.id;

  try {
    await BookModel.findByIdAndUpdate(id, req.body);
    res.json({ message: "Book updated !" });
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
});

router.delete("/books/:id", async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    await BookModel.findByIdAndDelete(id);
    res.json({ message: "Book deleted!" });
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
});

export default router;
