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

function holidaysButton (Feriados) {
    let holidayButton = document.createElement('button');
    holidayButton.id = 'btn-holiday';
    holidayButton.innerHTML = 'Feriados';
    document.querySelector('.buttons-container').appendChild(holidayButton);
}

holidaysButton();

let changed = 0;

function holidays () {
    let holiday = document.querySelectorAll('.holiday');
        if (changed == 0) {
            for (let index = 0; index < holiday.length; index += 1) {
                holiday[index].style.backgroundColor = 'green';
                holiday[index].style.color = 'white';
                changed = 1;
            }
        } else {
            for (let index = 0; index < holiday.length; index += 1) {
                holiday[index].style.backgroundColor = 'rgb(238,238,238)';
                holiday[index].style.color = '#777';
                changed = 0;
        };
    };
  };

let holidayButton = document.querySelector('#btn-holiday');

holidayButton.addEventListener('click', holidays);

function fridaysButton (SextaFeira) {
    let fridayButton = document.createElement('button');
    fridayButton.id = 'btn-friday';
    fridayButton.innerHTML = 'Sexta-feira';
    document.querySelector('.buttons-container').appendChild(fridayButton);
}

fridaysButton();

function fridays () {
    let friday = document.querySelectorAll('.friday');
        if (changed == 0) {
            for (let index = 0; index < friday.length; index += 1) {
                friday[index].innerHTML = 'Sexta-feira';
                changed = 1;
            }
        } else {
            friday[0].innerHTML = 4;
            friday[1].innerHTML = 11;
            friday[2].innerHTML = 18;
            friday[3].innerHTML = 25;
            changed = 0;
        };
  };

let fridayButton = document.querySelector('#btn-friday');

fridayButton.addEventListener('click', fridays);