const data = [
  {
    id: 1,
    question: "Complete the poem composed by Neeraj Sridhar and Kavitha Seth, “Tumhi Din Chade, Tumhi Dil Dhale, Tumhi Ho bandhu............…”",
    answers: [
      {
        text: "Peeta Tumhe",
        correct: false,
      },
      {
        text: "Sakha Tumhe",
        correct: true,
      },
      {
        text: "Maata Tumhe",
        correct: false,
      },
      {
        text: "Neeta Tumhe",
        correct: false,
      },
    ],
  },
  {
    id: 2,
    question: "Arrange these members of a family in describing order of seniority , from the seniormost to the juniormost.",
    answers: [
      {
        text: "Pardaddi",
        correct: true,
      },
      {
        text: "Poti",
        correct: false,
      },
      {
        text: "Putravadhu",
        correct: false,
      },
      {
        text: "Daadi",
        correct: false,
      },
    ],
  },
  {
    id: 3,
    question:
      "In Which athletic event did Girisha Nagarajegowda bag a silver medal for India at the 2012 London Paralympic Games ?",
    answers: [
      {
        text: "Shotput",
        correct:false,
      },
      {
        text: "Discus throw",
        correct:false,
      },
      {
        text: "Buxar",
        correct:false,
      },
      {
        text: "High Jump",
        correct:true,
      },
    ],
  },
  {
    id: 4,
    question: "The King of which of these places gifted his kingdom to Shree Padmanabhaswami and resigned as his servant ?",
    answers: [
      {
        text: "Travancore",
        correct: true,
      },
      {
        text: "Cochin",
        correct:false,
      },
      {
        text: "Mysore",
        correct:false,
      },
      {
        text: "Chettinad",
        correct:false,
      },
    ],
  },
  {
    id: 5,
    question: "In which of these two sports is the term ‘free hit’ used?",
    answers: [
      {
        text: "Football, Squash",
        correct: false,
      },
      {
        text: "Badminton, Tennis",
        correct: false,
      },
      {
        text: "Badminton, Cricket",
        correct: true,
      },
      {
        text: "Hockey, Cricket",
        correct: true,
      },
    ],
  },
];

const prizeMoney = [
  { id: 1, amount: "₹ 5000" },
  { id: 2, amount: "₹ 15000" },
  { id: 3, amount: "₹ 30000" },
  { id: 4, amount: "₹ 60000" },
  { id: 5, amount: "₹ 100000" },
  { id: 6, amount: "₹ 150000" },
  { id: 7, amount: "₹ 250000" },
  { id: 8, amount: "₹ 400000" },
  { id: 9, amount: "₹ 600000" },
  { id: 10, amount: "₹ 1000000" },
  { id: 11, amount: "₹ 5000000" },
  { id: 12, amount: "₹ 100000000" },
  { id: 13, amount: "₹ 300000000" },
  { id: 14, amount: "₹ 500000000" },
  { id: 15, amount: "₹ 1000000000" },
].reverse();

export { prizeMoney, data };
