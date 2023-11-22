// let age = 13
// const accompanied = true

// console.log(age >= 13 || accompanied)

// const maniacs = ['Yakko', 'Wakko', 'Dot']
// console.log(maniacs[0])
// console.log(maniacs[1])
// console.log(maniacs[2])
// console.log(maniacs.length)
// console.log(maniacs[maniacs.length - 1])

// const animal = []
// animal.push('Cat')
// animal.push('Dog')
// animal.push('Llama')
// console.log(animal)
// animal.unshift('Tiger')
// console.log(animal)

// const lastAnimal = animal.pop()
// console.log(lastAnimal)
// console.log(animal)

// const firstAnimal = animal.shift()
// console.log(firstAnimal)

// const blender = animal.concat(maniacs)
// console.log(blender)

// const blenderJoin = blender.join()
// console.log(blenderJoin)

// const blenderJoinS = blender.join(' ')
// console.log(blenderJoinS)

// const randomNumber = Math.floor(Math.random() * 5)

// const people = ['Ігор', 'Юра', 'Рома', 'Сергій', 'Іра']

// const randomName = people[randomNumber]

// console.log(randomName)

// const randomName = () => {
//   const people = ['Ігор', 'Юра', 'Рома', 'Сергій', 'Іра']
//   const randomNumber = Math.floor(Math.random() * 5)
//   const randomName = people[randomNumber]
//   return randomName
// }
// console.log(randomName())

// const bodyPart = ['hand', 'foot', 'body']
// const adjective = ['10', '100', '1000']
// const animals = ['cat', 'dog', 'rabbit']
// const animalBody = ['mustache', 'paws', 'tail']

// const randomBodyPart = bodyPart[Math.floor(Math.random() * bodyPart.length)]
// const randomAdjective = adjective[Math.floor(Math.random() * adjective.length)]
// const randomAnimals = animals[Math.floor(Math.random() * animals.length)]
// const randomAnimalBody =
//   animalBody[Math.floor(Math.random() * animalBody.length)]

// const randomInsult = [
//   'Your',
//   randomBodyPart,
//   'is more',
//   randomAdjective,
//   'than a',
//   randomAnimals,
//   randomAnimalBody,
// ].join(' ')

// const randomInsult =
//   'Your ' +
//   randomBodyPart +
//   ' is more ' +
//   randomAdjective +
//   ' than a ' +
//   randomAnimals +
//   ' ' +
//   randomAnimalBody

// console.log(randomInsult)

// console.log(randomBodyPart)
// console.log(randomAdjective)
// console.log(randomAnimals)
// console.log(randomAnimalBody)

// const simvol = [3, 2, 1]

// const text = [
//   simvol[0],
//   'is bigger then',
//   simvol[1],
//   'is bigger then',
//   simvol[2],
// ].join(' ')

// console.log(text)

// const simvol = [3, 2, 1]

// const text = simvol.join(' is bigger then ')

// console.log(text)

// const scores = {}
// scores.Ihor = 0
// scores.Ira = 0
// console.log(scores)

// scores.Ihor += 1
// console.log(scores)

// const myCrazyObject = {
//   name: 'A ridiculous object',
//   'some array': [7, 9, { purpous: 'confusion', number: 123 }, 3.3],
//   'random animal': 'Banana Shark',
// }

// console.log(myCrazyObject['some array'][2].number)

// const name = 'father'

// if (name === 'Ihor') {
//   console.log('Hello me')
// } else if (name === 'May') {
//   console.log('Hi mam')
// } else if (name === 'father') {
//   console.log('hi father')
// } else {
//   console.log('Hello stranger')
// }

// for (let i = 3; i < 10000; i *= 3) {
//   console.log(i)
// }

// let i = 3

// while (i < 10000) {
//   console.log(i)
//   i *= 3
// }

// const animal = ['cat', 'fish', 'lemur', 'komodo dragon']
// let i = 0
// while (i < animal.length) {
//   console.log('Awesom ' + animal[i])
//   i++
// }

// const alphabet = 'abcdefghijklmnoprstuvwxyz'
// const simvolRandom = alphabet[Math.floor(Math.random() * alphabet.length)]

// let randomString = ''

// while (randomString.length < 6) {
//   const simvolRandom = alphabet[Math.floor(Math.random() * alphabet.length)]
//   randomString += simvolRandom
//   console.log(randomString)
//

// const input = 'javascript is awesome'
// let output = ''

// for (let i = 0; i < input.length; i++) {
//   if (input[i] === 'a') {
//     output += 4
//   } else if (input[i] === 'e') {
//     output += 3
//   } else if (input[i] === 'i') {
//     output += 1
//   } else if (input[i] === 'o') {
//     output += 0
//   } else {
//     output += input[i]
//   }
// }

// console.log(output)

// const name = prompt('Whots your name?')
// console.log('Hello Ihor' + name)

// const likeCats = confirm('Do you like cats ?')
// if (likeCats) {
//   console.log('Your cool cat!')
// } else {
//   console.log('Your still cool!')
// }

// alert(randomName() + ' Іди працюй')

// const words = ['javascript', ' monkey', ' amazing', 'pancake', 'map', 'book']
// const word = words[Math.floor(Math.random() * words.length)]

// let answerArray = []
// for (let i = 0; i < word.length; i++) {
//   answerArray[i] = '_'
// }

// let mistake = 0

// let remainingLetters = word.length

// while (remainingLetters > 0 && mistake <= 10) {
//   alert(answerArray.join(' '))
//   let guess = prompt(
//     'Guess a letter, or click Cancle to stop game'
//   ).toLowerCase()
//   if (guess === null) {
//     break
//   } else if (guess.length !== 1) {
//     alert('Please enter a single letter.')
//   } else {
//     for (let j = 0; j < word.length; j++) {
//       if (word[j] === guess && answerArray[j] === '_') {
//         answerArray[j] = guess
//         remainingLetters--
//       }
//     }
//     mistake++
//   }
// }

// alert(answerArray.join(' '))
// alert('Good Job ' + word)

// function cat(howManyTimes, whatToDo) {
//   for (let i = 0; howManyTimes > i; i++) {
//     console.log(whatToDo)
//   }
// }

// cat(5, '=^.^=')

// const add = (a, b) => {
//   return a + b
// }

// const multiply = (a, b) => {
//   return a * b
// }

// const c = add(multiply(36325, 9824), 777)
// console.log(c)

const areArraysSame = (arry1, arry2) => {
  if (arry1.length > arry2.length || arry1.length < arry2.length) {
    return console.log(false)
  } else {
    for (let i = 0; i < arry1.length; i++) {
      console.log(arry1[i] === arry2[i])
    }
  }
}

areArraysSame([1, 2, 3], [1, 2, 3])
