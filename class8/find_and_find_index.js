// ==================================================================
// arr.find

const programmingLanguages = [
  {
    name: "JavaScript",
    difficulty: 2,
  },
  {
    name: "PHP",
    difficulty: 3,
  },
  {
    name: "Assembler",
    difficulty: 6,
  },
];

const easyProgrammingLanguage = programmingLanguages.find(function (language) {
  return language.difficulty === 2;
});

const assembler = programmingLanguages.find(function (language) {
  return language.name === "Assembler";
});

console.log(easyProgrammingLanguage);
console.log(assembler);

// ==================================================================
// arr.findIndex

const easyProgrammingLanguageIndex = programmingLanguages.find(function (
  language
) {
  return language.difficulty === 2;
});

const assemblerIndex = programmingLanguages.find(function (language) {
  return language.name === "Assembler";
});

console.log(easyProgrammingLanguageIndex);
console.log(assemblerIndex);
