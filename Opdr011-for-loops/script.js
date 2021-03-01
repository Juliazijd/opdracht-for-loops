/* Exercise 1: Even Odd Reporter */
    for (i = 1; i < 20; i++) {
        if (i % 2 == 0) {
            console.log(`${i} is even`);
        } else {
            console.log(`${i} is oneven`);
        }
    }

/* Exercise 2: Multiplication tables */
    for (x = 1; x <= 10; x++) {
        for (i = 1; i <= 10; i++) {
            console.log(`${i} x ${x} = ${i * x}`);
        }
    }

/* Exercise 3: The Grade Assigner */
function assignGrade(score) {
    if (score > 90) {
        return 'A';
    } else if (score > 80) {
        return 'B';
    } else if (score > 70) {
        return 'C';
    } else if (score > 65) {
        return 'D';
    } else {
        return 'F';
    }
}

for (i = 60; i <= 100; i++) {
    const score = assignGrade(i);
    console.log(`Voor ${i} punten, krijg je een ${score}`);
}