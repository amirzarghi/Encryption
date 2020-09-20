let S = [0]

for (j = 0; j < 5; j++) {
    for (i = 1; i < 27; i++) {
        let position = Math.floor(Math.random() * i) + 1
        S.splice(position, 0, i)
    }
    let position = Math.floor(Math.random() * i) + 1
    S.splice(0,1)
    S.splice(position, 0 , 0)
    console.log(S);
    S = [0]
}

