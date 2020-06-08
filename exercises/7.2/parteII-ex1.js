const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

lesson2.turno = 'manhã';

const listProperties = (lesson) => {
const arrayLessons = Object.keys(lesson);
  for(i in arrayLessons) {
    console.log(`${arrayLessons[i]}: ${lesson[arrayLessons[i]]}`);
  }
};

console.log('<Lesson 1>');
listProperties(lesson1);

console.log('<Lesson 2>');
listProperties(lesson2);

console.log('<Lesson 3>');
listProperties(lesson3);
