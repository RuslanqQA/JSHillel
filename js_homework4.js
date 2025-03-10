function checkProbabilityTheory(count) {
    let parni = 0;
    let neParni = 0;

    for (let i = 0; i < count; i++) {
        let randomNumber = Math.floor(Math.random() * (1000 - 100 + 1)) + 100;
        
        if (randomNumber % 2 === 0) {
            parni++;
        } else {
            neParni++;
        }
    }

    let parniVidsotok = (parni / count * 100).toFixed(2);
    let neParniVidsotok = (neParni / count * 100).toFixed(2);

    console.log(`Кількість згенерованих чисел: ${count}`);
    console.log(`Парних чисел: ${parni}`);
    console.log(`Непарних чисел: ${neParni}`);
    console.log(`Відсоток парних до непарних: ${parniVidsotok}% / ${neParniVidsotok}%`);
}

checkProbabilityTheory(1000);
