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

function task7() {
    const date = new Date();
    const hour = date.getHours();
    if (hour > 6 && hour < 12) {
        console.log('доброе утро');
    } else if (hour > 12 && hour < 17) {
        console.log('добрый день');
    } else if (hour > 17 && hour < 24) {
        console.log('добрый вечер');
    } else if (hour > 0 && hour < 6) {
        console.log('доброй ночи');
    }
}


function task8() {
    const holidays = [
        {
            day: 1,
            month: 0,
            title: 'Новый год',
        },
        {
            day: 7,
            month: 0,
            title: 'Рождество Христово',
        },
        {
            day: 23,
            month: 1,
            title: 'День защитника Отечества',
        },
        {
            day: 8,
            month: 2,
            title: 'Международный женский день',
        },
        {
            day: 1,
            month: 4,
            title: 'Праздник Весны и Труда',
        },
        {
            day: 9,
            month: 4,
            title: 'День Победы',
        },
        {
            day: 12,
            month: 5,
            title: 'День России',
        },
        {
            day: 4,
            month: 10,
            title: 'День народного единства',
        },
    ];

    holidays.forEach((holiday) => {
        const date = new Date();
        const dayHoliday = new Date(date.getFullYear(), holiday.month, holiday.day);
        console.log(`${holiday.day} ${chengeString(holiday.month)} ${holiday.title} --- ${days[dayHoliday.getDay()]}`);
    });
}


function chengeString(number) {
    const months = ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'];

    const monthsChange = months.map((month) => {
        if (month.endsWith('ь') || month.endsWith('й')) {
            month = month.slice(0, month.length - 1) + 'я';
        } else {
            month = month + 'а';
        }
        return month;
    });
    return monthsChange[number];
}


