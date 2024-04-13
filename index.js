import inquirer from 'inquirer';
inquirer
    .prompt([
    {
        type: 'input',
        name: 'paragraph',
        message: 'Enter a paragraph:',
    },
])
    .then((answers) => {
    const paragraph = answers.paragraph;
    let words = 0;
    let characters = 0;
    let inWord = false;
    for (let i = 0; i < paragraph.length; i++) {
        const char = paragraph[i];
        if (char === ' ') {
            inWord = false;
            continue;
        }
        if (!inWord) {
            words++;
            inWord = true;
        }
        if (char !== ' ') {
            characters++;
        }
    }
    console.log(`Number of words: ${words}`);
    console.log(`Number of characters: ${characters}`);
});
