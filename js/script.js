const days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг ', 'Пятница', 'Суббота'];

function task1(date) {
    const valueDate = new Date(date);
    return days[valueDate.getDay()];
}

function task2() {
    const nowDate = new Date();
    const newYear = new Date([2024, 1, 1]);
    const day = Math.round((newYear.getTime() - nowDate.getTime()) / (24 * 60 * 60 * 1000));
    console.log(`До Нового года осталось ${day}`);
}

function task3() {
    const date = new Date();
    const day = date.getDay();
    let next = day + 1;
    let prev = day - 1;
    if (day == 0) {
        next = day + 1;
        prev = 6;
    } else if (day == 6) {
        next = 0;
        prev = day - 1;
    }
    const objDays = {
        next: days[next],
        current: days[day],
        prev: days[prev],
    };
    return objDays;
}

function task4(seconds) {
    const time = {
        day: (seconds / (60 * 60 * 24)).toFixed(2),
        hour: (seconds / (60 * 60)).toFixed(2),
        minute: (seconds / 60).toFixed(2),
        seconds: seconds,
    };
    return time;
}

function task5(year, month, day) {
    const now = new Date();
    const birthday = new Date(year, month, day);
    const birthdayInThisYear = new Date(now.getFullYear(), birthday.getMonth(), birthday.getDate());
    let age = now.getFullYear() - birthday.getFullYear();
    if (birthdayInThisYear > now) {
        age -= 1;
    }
    console.log(`возраст в годах ${age},в месяцах ${age * 12},в днях ${age * 365}`);
}

function task6(year) {
    let arrayFriday = [];
    const months = ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'];
    for (let month = 0; month < 12; month++) {
        const date = new Date(year, month, 13);
        if (date.getDay() == 5) {
            const objDate = {
                day: date.getDate(),
                month: months[date.getMonth()],
                year: date.getFullYear(),
            };

            arrayFriday.push(objDate);
        }
    }
    if (arrayFriday.length > 0) {
        arrayFriday.forEach((item) => {
            console.log(item);
        });
    } else {
        console.log('в этом году нет пятниц 13');
    }
}
