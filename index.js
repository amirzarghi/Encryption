const System = require('./lib/Systems')

if (process.argv[2] == "E") {
    GetCode(System.input)
} else if (process.argv[2] == "D") {
    GetInput(System.Code)
}

function GetCode(userinput) {
    let levelA, levelB, levelC
    levelA = process.argv[3]
    levelB = process.argv[4]
    levelC = process.argv[5]
    let input = userinput
    input = input.toLowerCase()
    input = input.split("")
    for (i = 0; i < input.length; i++) {
        input[i] = System.Letters.indexOf(input[i])
        input[i] = System.SA[levelA].indexOf(input[i])
        input[i] = System.SB[levelB].indexOf(input[i])
        input[i] = System.SC[levelC].indexOf(input[i])
        input[i] = System.Letters[input[i]]
        levelA = (levelA + 12) % 11
        if (levelA == 10) {
            levelB = (levelB + 12) % 11
        }
        if (levelB == 10) {
            levelC = (levelC + 12) % 11
        }
    }
    console.log(input.join(""));
}
function GetInput(Code) {
    let levelA, levelB, levelC
    levelA = process.argv[3]
    levelB = process.argv[4]
    levelC = process.argv[5]
    let input = Code.split("")
    for (i = 0; i < input.length; i++) {
        input[i] = System.Letters.indexOf(input[i])
        input[i] = System.SC[levelC][input[i]]
        input[i] = System.SB[levelB][input[i]]
        input[i] = System.SA[levelA][input[i]]
        input[i] = System.Letters[input[i]]
        levelA = (levelA + 12) % 11
        if (levelA == 10) {
            levelB = (levelB + 12) % 11
        }
        if (levelB == 10) {
            levelC = (levelC + 12) % 11
        }
    }
    console.log(input.join(""));
}