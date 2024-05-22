const sendAllCategories = (req, res) => {

  res.setHeader('Content-Type', 'application/json');

  res.end(JSON.stringify(req.categoriesArray));
};


const sendCategoryCreated = (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(req.category));
  };
const sendCategoryById = (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(req.category));
}

const sendCategoryUpdated = (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.status(200).send(JSON.stringify({ message: "Категория обновлена" }));
  };

  const sendCategoryDeleted = (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.status(200).send(JSON.stringify({ message: "Категория удалена" }));
  };

  const checkEmptyName = (req, res, next) => {
    if (!req.body.name) {
      res.setHeader("Content-Type", "application/json");
      res.status(400).send(JSON.stringify({ message: "Не указано название категории" }));
    } else {
      next();
    }
  };

module.exports = {sendAllCategories, sendCategoryCreated, sendCategoryById, sendCategoryUpdated, sendCategoryDeleted, checkEmptyName};
