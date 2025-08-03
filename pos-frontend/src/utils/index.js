export const getRandomBG = () => {
  const colors = [
    "bg-red-400", // Red
    "bg-blue-400", // Blue
    "bg-green-400", // Green
    "bg-yellow-400", // Yellow
    "bg-purple-400", // Purple
    "bg-pink-400", // Pink
    "bg-indigo-400", // Indigo
    "bg-teal-400", // Teal
  ];

  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
};
