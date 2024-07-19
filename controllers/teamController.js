const Team = require("../modules/teamModule");

exports.createTeam = async (req, res) => {
  const team = new Team(req.body);
  try {
    const savedTeam = await team.save();
    res.json(savedTeam);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getAllTeams = async (req, res) => {
  try {
    const teams = await Team.find();
    res.json(teams);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getTeamById = async (req, res) => {
  try {
    const team = await Team.findById(req.params.teamId);
    if (team == null) {
      return res.status(404).json({ message: "Team not found" });
    }
    res.json(team);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateTeam = async (req, res) => {
  try {
    const updatedTeam = await Team.findByIdAndUpdate(
      req.params.teamId,
      req.body,
      { new: true }
    );
    if (updatedTeam == null) {
      return res.status(404).json({ message: "Team not found" });
    }
    res.json(updatedTeam);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deleteTeam = async (req, res) => {
  try {
    const removedTeam = await Team.findByIdAndRemove(req.params.teamId);
    if (removedTeam == null) {
      return res.status(404).json({ message: "Team not found" });
    }
    res.json({ message: "Team deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
