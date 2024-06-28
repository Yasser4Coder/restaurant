import Foods from "../models/Foods.js";
import Tags from "../models/Tags.js";

export const getAllFoods = async (req, res) => {
  try {
    const foodsData = await Foods.find();
    res.status(200).json(foodsData);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const addFood = async (req, res) => {
  const { name, price, stars, descreption, imageUrl, tag } = req.body;

  if (!name) {
    res.status(401).json({ message: "some required informations are missing" });
  }
  const food = {
    name: name,
    price: price,
    stars: stars,
    favorite: false,
    descreption: descreption,
    imageUrl: imageUrl,
    tags: [tag],
  };

  try {
    const newFood = new Foods(food);

    const existingTag = await Tags.findOne({ name: tag });
    if (existingTag) {
      // If the tag already exists, increment its count
      existingTag.count += 1;
      await existingTag.save();
    } else {
      // If the tag is new, add it to the Tags collection with a count of 1
      const newTag = new Tags({ name: tag, count: 1 });
      await newTag.save();
    }
    const alltag = await Tags.findOne({ name: "All" });
    alltag.count += 1;

    await alltag.save();
    await newFood.save();
    res.status(200).json({ message: "the food has been added successfuly" });
  } catch (err) {
    res.status(401).json({ message: "err" });
  }
};

export const getTags = async (req, res) => {
  try {
    const tagsData = await Tags.find();
    res.status(200).json(tagsData);
  } catch (err) {
    res.status(401).json({ message: "err" });
  }
};
