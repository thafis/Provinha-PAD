// Questão 1

function someFun(params, callback) {
  callback(params.someProperty)

  return 1
}

// Questão 2

function someFn(number) {
  const returnFunction = (value) => {
    switch (value) {
      case 3:
        return 4
      case 1:
        return 5
      case 5:
        return 10
    }
  }

  return returnFunction
}

// Questão 3

function calculator(nume1, nume2) {
  return callback => callback(nume1, nume2)
}

// Questão 4

/**
 * No console aparecera nessa ordem:
 * 4
 * 1
 * 5
 * 1
 */

// Questão 5

function tabuada(num) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${num} X ${i} = ${num * i}`)
  }
