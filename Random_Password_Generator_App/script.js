const Password = document.getElementById("Pass")
const passwordLength = 12;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const num = "0123456789";
const specialChar = "~!@#$%^&*()_+{}][\|/?.>,<=-";

const allChar = upperCase + lowerCase + num + specialChar;

function randomPassword() {
    let randomPass = ""
    randomPass += upperCase[Math.floor(Math.random() * upperCase.length)];
    randomPass += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    randomPass += num[Math.floor(Math.random() * num.length)];
    randomPass += specialChar[Math.floor(Math.random() * specialChar.length)];

    while (passwordLength > randomPass.length) {
        randomPass += allChar[Math.floor(Math.random() * allChar.length)];
    }

    Password.value = randomPass;
}

function copyPassword() {
    Password.select();
    document.execCommand("copy");
}