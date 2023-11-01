const days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг ', 'Пятница', 'Суббота'];

function task1(date) {
    const valueDate = new Date(date);
    return days[valueDate.getDay()];
}


