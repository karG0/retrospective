const Project = require("../modules/projectModule");

exports.createProject = async (req, res) => {
  const project = new Project(req.body);
  try {
    const savedProject = await project.save();
    res.json(savedProject);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getProjectById = async (req, res) => {
  try {
    const project = await Project.findById(req.params.projectId);
    if (project == null) {
      return res.status(404).json({ message: "Project not found" });
    }
    res.json(project);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getProjectsByTeamId = async (req, res) => {
  try {
    const projects = await Project.find({ team: req.params.teamId });
    res.json(projects);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateProject = async (req, res) => {
  try {
    const updatedProject = await Project.findByIdAndUpdate(
      req.params.projectId,
      req.body,
      { new: true }
    );
    if (updatedProject == null) {
      return res.status(404).json({ message: "Project not found" });
    }
    res.json(updatedProject);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deleteProject = async (req, res) => {
  try {
    const removedProject = await Project.findByIdAndRemove(
      req.params.projectId
    );
    if (removedProject == null) {
      return res.status(404).json({ message: "Project not found" });
    }
    res.json({ message: "Project deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
