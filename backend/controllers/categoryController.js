import Category from "../models/Category.js";

// ✅ Add multiple predefined categories (admin only)
export const addDefaultCategories = async (req, res) => {
  try {
    const defaultCategories = [
      "Local",
      "National",
      "Politics",
      "Sports",
      "Business",
      "Technology",
      "Entertainment",
    ];

    let addedCategories = [];

    for (const name of defaultCategories) {
      const exists = await Category.findOne({ name });
      if (!exists) {
        const newCat = new Category({ name });
        await newCat.save();
        addedCategories.push(name);
      }
    }

    res.status(201).json({
      message: "Default categories added successfully",
      added: addedCategories.length > 0 ? addedCategories : "All categories already exist",
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ✅ Get all categories (public)
export const getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find().sort({ name: 1 });
    res.json(categories);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ✅ Delete a category (admin only)
export const deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;
    await Category.findByIdAndDelete(id);
    res.json({ message: "Category deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
