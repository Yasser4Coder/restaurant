import { simple_food, simple_tags } from "../../data";

export const getall = async () => simple_food;

export const search = async (searchTerm) =>
  simple_food.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

export const getAllTags = async () => simple_tags;

export const filterByTag = async (tag) =>
  simple_food.filter((item) => item?.tags.includes(tag));

export const getFoodById = async (id) =>
  simple_food.find((item) => item.id === parseInt(id));
