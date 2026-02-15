import React, { useEffect, useState } from "react";
import api from "../api";
import "../App.css";

const Selector = () => {
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [products, setProducts] = useState([]);

  const [categoryId, setCategoryId] = useState("");
  const [subCategoryId, setSubCategoryId] = useState("");
  const [productId, setProductId] = useState("");

  // Load Categories
  useEffect(() => {
    api.get("/api/categories")
      .then((res) => setCategories(res.data))
      .catch((err) => console.log(err));
  }, []);

  // Category Change
  const handleCategoryChange = async (id) => {
    setCategoryId(id);
    setSubCategoryId("");
    setProductId("");
    setProducts([]);

    const res = await api.get(`/api/subcategories/${id}`);
    setSubCategories(res.data);
  };

  // SubCategory Change
  const handleSubCategoryChange = async (id) => {
    setSubCategoryId(id);
    setProductId("");

    const res = await api.get(`/api/products/${id}`);
    setProducts(res.data);
  };

  return (
    <div className="selector-container">

      <h1>Product Selector</h1>

      {/* CATEGORY */}
      <label>Category</label>
      <select onChange={(e) => handleCategoryChange(e.target.value)}>
        <option value="">Select Category</option>
        {categories.map((c) => (
          <option key={c._id} value={c._id}>
            {c.name}
          </option>
        ))}
      </select>

      {/* SUBCATEGORY */}
      <label>Sub Category</label>
      <select
        disabled={!categoryId}
        onChange={(e) => handleSubCategoryChange(e.target.value)}
      >
        <option value="">Select SubCategory</option>
        {subCategories.map((s) => (
          <option key={s._id} value={s._id}>
            {s.name}
          </option>
        ))}
      </select>

      {/* PRODUCT */}
      <label>Product</label>
      <select
        disabled={!subCategoryId}
        onChange={(e) => setProductId(e.target.value)}
      >
        <option value="">Select Product</option>
        {products.map((p) => (
          <option key={p._id} value={p._id}>
            {p.name}
          </option>
        ))}
      </select>

      {productId && (
        <p className="success-text">✅ Product Selected Successfully</p>
      )}
    </div>
  );
};

export default Selector;
