function isNumber(value) {
    return !isNaN(parseFloat(value)) && isFinite(value);
  }
  
  let birthYear = prompt("Введите год рождения:");
  
  if (isNumber(birthYear)) {
    let age = new Date().getFullYear() - parseInt(birthYear);
  
    if (age < 0) {
      alert("Вы еще не родились!");
    } else if (age <= 30) {
      alert("Вы младше 30 лет. Вы молодой человек!");
    } else if (age > 30 && age < 60) {
      alert("Вы старше 30, но младше 60 лет. Кризис среднего возраста!");
    } else {
      alert("Вы старше 60 лет. Вам советуется посетить доктора!");
    }
  } else {
    alert("Введено некорректное значение. Пожалуйста, введите число.");
  }