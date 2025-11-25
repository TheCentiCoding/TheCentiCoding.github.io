// Randomizer
  const sentences = [
    "Enjoy your stay!",
    "Also try Hollow Knight: Silksong!",
    "Survive the gauntlet!",
    "Now with ducks!",
    "I like this part!",
    "We make art!",
    "Check steam!",
    "I'm the silliest web ever :3!",
    "Check out my GitHub!",
    "To be or not to be!",
    "Stay calm... or panic. Whatever you prefer!",
    "Winner of the Simplest Web Design!",
  ];

  const randomSentence = sentences[Math.floor(Math.random() * sentences.length)];

  document.getElementById("splash").textContent = randomSentence;
