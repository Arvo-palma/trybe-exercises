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

const addTurno = (lesson, key, valor) => {
    lesson[key] = valor;
  }

addTurno(lesson2, 'turno', 'noite');

const keyList = (object) => {
    console.log(Object.keys(object));
  }

const objectLength = (object) => {
    console.log(Object.keys(object).length);
  }

const objectValues = (object) => {
    console.log(Object.values(object));
  }

const allLessons = {};

allLessons['lesson1'] = lesson1;
allLessons['lesson2'] = lesson2;
allLessons['lesson3'] = lesson3;

const totalEstudantes = (allLessons) => {
  const totalEstudantes = allLessons.lesson1.numeroEstudantes + allLessons.lesson2.numeroEstudantes + allLessons.lesson3.numeroEstudantes;
  return totalEstudantes;
}

const getValueByNumber = (object, position) => {
  const value = object[position];
  return value;
}

console.log(lesson1[0]);