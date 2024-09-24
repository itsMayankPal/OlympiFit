const progressSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  challenge: { type: mongoose.Schema.Types.ObjectId, ref: "Challenge" },
  progress: Number,
  completed: Boolean,
});

const Progress = mongoose.model("Progress", progressSchema);
