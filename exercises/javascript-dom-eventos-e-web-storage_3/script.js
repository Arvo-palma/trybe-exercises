function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();

  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  const daysList = document.querySelector('#days');

  function createDays() {
    for (let index = 0; index < dezDaysList.length; index += 1) {
        const dezDays = dezDaysList[index];
        const daysItem = document.createElement('li');
        daysItem.className = 'day';
        daysItem.innerHTML = dezDays;

        daysList.appendChild(daysItem);
    };
};

createDays();

for (let index = 0; index < dezDaysList.length; index += 1) {
    if (dezDaysList[index] === 24 | dezDaysList[index] === 31) {
        document.querySelectorAll('.day')[index].classList.add('day', 'holiday');
    }
}

for (let index = 0; index < dezDaysList.length; index += 1) {
    if (dezDaysList[index] === 4 | dezDaysList[index] === 11 | dezDaysList[index] === 18) {
        document.querySelectorAll('.day')[index].classList.add('day', 'friday');
    }
}

document.querySelectorAll('.day')[dezDaysList.indexOf(25)].classList.add('day', 'holiday', 'friday');