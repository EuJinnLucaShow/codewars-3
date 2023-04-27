const languageDatabase = {
  english: 'Welcome',
  czech: 'Vitejte',
  danish: 'Velkomst',
  dutch: 'Welkom',
  estonian: 'Tere tulemast',
  finnish: 'Tervetuloa',
  flemish: 'Welgekomen',
  french: 'Bienvenue',
  german: 'Willkommen',
  irish: 'Failte',
  italian: 'Benvenuto',
  latvian: 'Gaidits',
  lithuanian: 'Laukiamas',
  polish: 'Witamy',
  spanish: 'Bienvenido',
  swedish: 'Valkommen',
  welsh: 'Croeso',
}

function greet(language) {
  if (languageDatabase.hasOwnProperty(language)) {
    return languageDatabase[language]
  } else {
    return languageDatabase.english // default to English
  }
}

console.log(greet('dutch'))
console.log(greet('english'))

/*Ця функція приймає languageпараметр, перевіряє, чи існує він у базі даних за допомогою hasOwnPropertyметоду, і повертає відповідне вітальне повідомлення, якщо існує. В іншому випадку за замовчуванням використовується англійська, повертаючи englishвластивість об’єкта languageDatabase.

Примітка. Ця функція припускає, що введення є дійсним рядком, який представляє мову. Додаткова обробка помилок буде необхідною, якщо введення може бути недійсним або відсутнім.*/
