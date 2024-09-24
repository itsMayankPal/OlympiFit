const challengeSchema = new mongoose.Schema({
  sport: String,
  description: String,
  difficulty: String,
});

const Challenge = mongoose.model("Challenge", challengeSchema);
