let data = [
  {
    question: "1.What is the basic unit of life?",
    option: ["A.Organelle", "B.Cell", "C.Tissue", "D.Molecule"],
    correct: 1,
  },
  {
    question: "2.What is the chemical symbol for water",
    option: ["A.O2", "B.H2O", "C.CO2", "D.NaCl"],
    correct: 1,
  },
  {
    question: "3.Which planet is known as the Red Planet?",
    option: ["A.Venus", "B.Jupiter", "C.Mars", "D.Saturn"],
    correct: 2,
  },
  {
    question: "4.Which is the largest ocean in the world?",
    option: ["A.Atlantic Ocean", "B.Indian Ocean", "C.Arctic Ocean", "D.Pacific Ocean"],
    correct: 3,
  },
  {
    question: "5.Which country is known as the Land of the Rising Sun?",
    option: ["A.China", "B.Japan", "C.South Korea", "D.Thailand"],
    correct: 1,
  },
  {
    question: "6.How many continents are there?",
    option: ["A.5", "B.6", "C.7", "D.8"],
    correct: 2,
  },
  {
    question: "7.What is the shape of DNA?",
    option: ["A.Single helix", "B.Double helix", "C.Triple helix", "D.Linear"],
    correct: 1,
  },
  {
    question: "8.What is the scientific name of humans?",
    option: ["A.Homo erectus","B.Homo sapiens","C.Homo habilis","D.Homo neanderthalensis"],
    correct: 1,
  },
  {
    question: "9.Who invented the telephone?",
    option: ["A.Thomas Edison","B.Alexander Graham Bell","C.Nikola Tesla","D.James Watt"],
    correct: 1,
  },
  {
    question:"10.Which is the smallest state of India by area?",
    option: ["A.Goa", "B.Sikkim", "C.Tripura", "D.Mizoram"],
    correct: 0,
  },
  {
    question:"11.What is the national bird of India?",
    option: ["A.Sparrow", "B.Peacock", "C.Parrot", "D.Eagle"],
    correct: 1,
  },
  {
    question:"12.How many days are there in a leap year?",
    option: ["A.365", "B.366", "C.364", "D.360"],
    correct: 1,
  },
  {
    question:"13.Who is known as the Father of the Nation (India)?",
    option: ["A.Jawaharlal Nehru","B.Subhash Chandra Bose","C.Mahatma Gandhi","D.Bhagat Singh"],
    correct: 1,
  },
  {
    question:"14.Which is the longest river in the world?",
    option: ["A.Amazon", "B.Ganga", "C.Nile", "D.Yangtze"],
    correct: 2,
  },
  {
    question:"15.Which is the largest desert in the world?",
    option: ["A.Sahara", "B.Thar", "C.Gobi", "D.Kalahari"],
    correct: 0,
  },
  {
    question:"16.Which metal is liquid at room temperature?",
    option: ["A.Iron", "B.Mercury", "C.Aluminum", "D.Copper"],
    correct: 1,
  },
  {
    question:"17.Who wrote the National Anthem of India?",
    option: ["A.Bankim Chandra Chatterjee","B.Rabindranath Tagore","C.Sarojini Naidu","D.Subhash Chandra Bose"],
    correct: 1,
  },
];

let currentIndex = 0;
 const que = document.getElementById("qustion");
  const optionbtn=[
    document.getElementById("option1"),
    document.getElementById("option2"),
    document.getElementById("option3"),
    document.getElementById("option4"),
  ];

function printdata() {
 //question print
  que.innerText = data[currentIndex].question;
  //option print
  data[currentIndex].option.forEach((opt , index)=>{
    optionbtn[index].innerHTML = opt;
  });
}

function nextquestion(){
  if(currentIndex < data.length-13){
    currentIndex++
  }else{
    alert("quiz completed")
    }
  
printdata();
}
printdata();
