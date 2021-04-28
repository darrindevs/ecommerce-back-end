const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const tagData = await Tag.findAll({ //* find all the data for the tag model
      include: [{ model: Product }], //* include associated products 
    });
    res.status(200).json(tagData); //* if good respond 200 
  } catch (err) {
    res.status(500).json(err); //* if something wrong respond error 500 
  }
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    //* find tags by their primary key (PK) 
    const tagData = await Tag.findByPk(req.params.id, {
      include: [{ model: Product }], //* include associated products 
    });

    if (!tagData) { //* if no tag found for the primary key respond with message
      res.status(404).json({ message: `No tag found with ID ${req.params.id}`});
      return;
    }

    res.status(200).json(tagData); //* all good
  } catch (err) {
    res.status(500).json(err); //* generic server error 
  }
});

router.post('/', async (req, res) => {
  // create a new tag
  try {
    //* create a new tag using the post method and Category.create from user input 
    const tagData = await Tag.create(req.body);
    res.status(200).json(TagData); //* all good 
  } catch (err) {
    res.status(400).json(err); //* error message 
  }
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  //* Update tag data using the the put method based on primary key /:id
  try {
    const tagData = await Tag.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!tagData[0]) { //* if no such tag return message
      res.status(404).json({ message: 'No tag with this id!' });
      return;
    }
    res.status(200).json(tagData); //* all good 
  } catch (err) {
    res.status(500).json(err); //* generic server error 
  }
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  //* delete a tag with an a primary key of /:id 
  try {
    const tagData = await Tag.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!tagData) { //* if no tag found with that id return this message
      res.status(404).json({ message: 'No tag found with that id!' });
      return;
    }

    res.status(200).json(tagData); //* all good 
  } catch (err) {
    res.status(500).json(err); //* unspecified server error
  }
});

module.exports = router;
