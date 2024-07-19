const RetroItem = require("../modules/retroSpectiveModule");

exports.createRetroItem = async (req, res) => {
  const retroItem = new RetroItem(req.body);
  try {
    const savedRetroItem = await retroItem.save();
    res.json(savedRetroItem);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getAllRetroItems = async (req, res) => {
  try {
    const retroItems = await RetroItem.find();
    res.json(retroItems);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getRetroItemById = async (req, res) => {
  try {
    const retroItem = await RetroItem.findById(req.params.itemId);
    if (retroItem == null) {
      return res.status(404).json({ message: "Retro item not found" });
    }
    res.json(retroItem);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getRetroItemsBySprintId = async (req, res) => {
  try {
    const retroItems = await RetroItem.find({ sprint: req.params.sprintId });
    res.json(retroItems);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateRetroItem = async (req, res) => {
  try {
    const updatedRetroItem = await RetroItem.findByIdAndUpdate(
      req.params.itemId,
      req.body,
      { new: true }
    );
    if (updatedRetroItem == null) {
      return res.status(404).json({ message: "Retro item not found" });
    }
    res.json(updatedRetroItem);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deleteRetroItem = async (req, res) => {
  try {
    const removedRetroItem = await RetroItem.findByIdAndRemove(
      req.params.itemId
    );
    if (removedRetroItem == null) {
      return res.status(404).json({ message: "Retro item not found" });
    }
    res.json({ message: "Retro item deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
