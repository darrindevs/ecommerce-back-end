const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const categoryData = await Category.findAll({ //* find all the data for the Category model
      include: [{ model: Product }], //* include associated products 
    });
    res.status(200).json(categoryData); //* if good respond 200 
  } catch (err) {
    res.status(500).json(err); //* if something wrong respond error 500 
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    //* find cateogories by their primary key (PK) 
    const categoryData = await Category.findByPk(req.params.id, {
      include: [{ model: Product }], //* include associated products 
    });

    if (!categoryData) { //* if no category found for the primary key respond with message
      res.status(404).json({ message: `No category found with ID ${req.params.id}`});
      return;
    }

    res.status(200).json(categoryData); //* all good
  } catch (err) {
    res.status(500).json(err); //* generic server error 
  }
});

router.post('/', async (req, res) => {
  // create a new category
  try {
    //* create a new category using the post method and Category.create from user input 
    const categoryData = await Category.create(req.body);
    res.status(200).json(categoryData); //* all good 
  } catch (err) {
    res.status(400).json(err); //* error message 
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  //* Update category data using the the put method based on primary key /:id
  try {
    const categoryData = await Category.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!categoryData[0]) { //* if no such category return message
      res.status(404).json({ message: 'No category with this id!' });
      return;
    }
    res.status(200).json(categoryData); //* all good 
  } catch (err) {
    res.status(500).json(err); //* generic server error 
  }
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  //* delete a category with an a primary key of /:id 
  try {
    const categoryData = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!categoryData) { //* if no category found with that id return this message
      res.status(404).json({ message: 'No category found with that id!' });
      return;
    }

    res.status(200).json(categoryData); //* all good 
  } catch (err) {
    res.status(500).json(err); //* unspecified server error
  }
});

module.exports = router;
