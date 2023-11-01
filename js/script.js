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

