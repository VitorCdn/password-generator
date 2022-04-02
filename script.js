document.getElementById("button-generate-pass").addEventListener('click', () => {

    let size = Number(document.getElementById("size").value)

    let options = {
        lowercase: document.getElementById("lowercase").checked,
        uppercase: document.getElementById("uppercase").checked,
        numbers: document.getElementById("numbers").checked
    }

    let alphabet = "abcdefghijklmnopqrstuvwxyz"
    let availableOptions = []
    let result = []

    for (let content in options) {
        if (options[content] == true) {
            availableOptions.push(content)
        }
    }

    for (let counter = 0; counter < size;counter++) {
        let optionNum = Math.floor(Math.random() * availableOptions.length)

        if (availableOptions[optionNum] == "lowercase") {
            result.push(alphabet[Math.floor(Math.random() * alphabet.length)])
        }
        if (availableOptions[optionNum] == "uppercase") {
            result.push(alphabet[Math.floor(Math.random() * alphabet.length)].toUpperCase())
        }
        if (availableOptions[optionNum] == "numbers") {
            result.push(String(Math.floor(Math.random() * 10)))
        }
    }

    result = result.join("")

    document.getElementById("result-output").value = result
})