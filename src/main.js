// This will eventually get replaced with
// a list found online
const WORDS = [
    "hot",
    "fire",
    "cold",
    "winter",
    "warm",
    "frigid",
    "blond",
    "blonde",
    "sort",
    "of",
    "the",
    "circle",
    "central",
    "hand",
    "fist",
    "lift",
    "double",
    "wrench",
    "arch",
    "summer",
    "spring",
    "fall",
    "brink",
    "total",
    "figure",
    "let",
    "go",
    "hard",
    "soft"
    // and so on...
];

const SYMBOLS = [
    "!", "@", "#", "$", "%",
    "^", "&", "*", "(", ")",
    "-", "_", "+", "=", "{",
    "}", "[", "]", "\"", "'",
    ";", ":", ",", ".", "<",
    ">", "/", "?", "\\", "|",
    "`", "~"
]

function get_random_int(max) {
    return Math.floor(Math.random() * max)
}

function next_word(so_far, num_symbols, length, capitalize_word) {
    let random_int = get_random_int(WORDS.length);
    if (((so_far + WORDS[random_int]).length + num_symbols) > length) {
        return next_word(so_far, num_symbols, length);
    }
    let word = WORDS[random_int];
    if (capitalize_word) {
        word = word[0].toUpperCase() + word.slice(1);
        // console.log(word);
        // console.log(word[0].toUpperCase())
    }
    return so_far + word;
}

function insert_in_str(string, what, where) {
    return string.slice(0, where) + what + string.slice(where);
}

function make_password(num_words, num_symbols, length, symbols=SYMBOLS, allow_repeat=false, capitalize_word=true) {
    let password = "";
    for (let i = 0; i < num_words; i++) {
        password = next_word(password, num_symbols, length, capitalize_word)
    }

    for (let i = 0; i < num_symbols; i++) {
        let where_in_password = get_random_int(password.length);
        let symbol = SYMBOLS[get_random_int(SYMBOLS.length)];

        password = insert_in_str(password, symbol, where_in_password);
    }

    return password
}

function main() {
    for (let i = 0; i < 5; i++) {
        console.log(make_password(4, 3, 50));
    }
}

main()
