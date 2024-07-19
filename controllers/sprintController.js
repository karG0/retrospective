const Sprint = require("../modules/sprintModule");

exports.createSprint = async (req, res) => {
  const sprint = new Sprint(req.body);
  try {
    const savedSprint = await sprint.save();
    res.json(savedSprint);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getAllSprints = async (req, res) => {
  try {
    const sprints = await Sprint.find();
    res.json(sprints);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getSprintById = async (req, res) => {
  try {
    const sprint = await Sprint.findById(req.params.sprintId);
    if (sprint == null) {
      return res.status(404).json({ message: "Sprint not found" });
    }
    res.json(sprint);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getSprintsByProjectId = async (req, res) => {
  try {
    const sprints = await Sprint.find({ project: req.params.projectId });
    res.json(sprints);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateSprint = async (req, res) => {
  try {
    const updatedSprint = await Sprint.findByIdAndUpdate(
      req.params.sprintId,
      req.body,
      { new: true }
    );
    if (updatedSprint == null) {
      return res.status(404).json({ message: "Sprint not found" });
    }
    res.json(updatedSprint);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deleteSprint = async (req, res) => {
  try {
    const removedSprint = await Sprint.findByIdAndRemove(req.params.sprintId);
    if (removedSprint == null) {
      return res.status(404).json({ message: "Sprint not found" });
    }
    res.json({ message: "Sprint deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
