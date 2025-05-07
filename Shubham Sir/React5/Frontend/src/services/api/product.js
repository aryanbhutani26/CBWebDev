import axios from "axios";

const BaseUrl = "http://localhost:5000";

export const getAllProducts = async (
  name,
  sortby,
  sortorder,
  color,
  size,
  gender,
  productType,
  weartype
) => {
  try {
    const params = {};
  if (name) {
    params.name = name;
  }
  if (sortby) {
    params.sortby = sortby;
  }
  if (sortorder) {
    params.sortorder = sortorder;
  }
  if (color) {
    params.color = color;
  }
  if (size) {
    params.size = size;
  }
  if (gender) {
    params.gender = gender;
  }
  if (productType) {
    params.productType = productType;
  }
  if (weartype) {
    params.weartype = weartype;
  }
  const res = await axios.get(BaseUrl + "/product", params);
  return res.data.products;
  } catch (error) {
    return error.message;
  }
};

export const getProductsByCategory = async (category) => {};

export const getNewArrivals = async () => {};

export const getSaleProducts = async () => {};
