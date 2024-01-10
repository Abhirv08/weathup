function generateRandomCode() {
    const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const codeLength = Math.floor(Math.random() * 2) + 5; // Random length: 5 or 6
    let randomCode = '';

    for (let i = 0; i < codeLength; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        randomCode += characters.charAt(randomIndex);
    }

    return randomCode;
}

export { generateRandomCode }