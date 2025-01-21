// Some data to make the trick

const categories = [
  {
    id: 1,

    name: "Comédie",
  },

  {
    id: 2,

    name: "Science-Fiction",
  },
];

// Declare the actions

/* Here you code */
import type { RequestHandler } from "express";

const browse: RequestHandler = (req, res) => {
  if (req.query.q != null) {
    const filteredPrograms = categories.filter((categorie) =>
      categorie.name.includes(req.query.q as string),
    );
    res.json(filteredPrograms);
  } else {
    res.json(categories);
  }
};
const read: RequestHandler = (req, res) => {
  const parsedId = Number.parseInt(req.params.id);

  const categorie = categories.find((p) => p.id === parsedId);

  if (categorie != null) {
    res.json(categorie);
  } else {
    res.sendStatus(404);
  }
};

// Export them to import them somewhere else

export default { browse, read };
