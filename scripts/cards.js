    const dbKanjis = [{
    id : 1,
    palabra:"arbol",
    kanji: "木",
    hiragana: "き",
    romaji: "ki",
    url: "./images/cards/arbol.svg"
},{
    id : 2,
    palabra: "libro",
    kanji: "本",
    hiragana: "ほん",
    romaji: "hon",
    url: "./images/cards/libro.svg"
},{
    id : 3,
    palabra: "gato",
    kanji: "猫",
    hiragana: "ねこ",
    romaji: "neko",
    url: "./images/cards/gato.svg"
},{
    id : 4,
    palabra: "perro",
    kanji: "犬",
    hiragana: "いぬ",
    romaji: "inu",
    url: "./images/cards/perro.svg"
},{
    id : 5,
    palabra: "carro",
    kanji: "車",
    hiragana: "くるま",
    romaji: "kuruma",
    url: "./images/cards/auto.svg"
}]

function pickRandom(arr){
  let newArr = []
  while(newArr.length<4){
    let random = Math.floor(Math.random()*arr.length)
    if(!newArr.includes(arr[random])){
      newArr.push(arr[random])
    }
  }
  return newArr
}

let kanjis = pickRandom(dbKanjis)

const cardContainer = document.querySelector('.cards-container')
const mainKanji = document.querySelector('.main-card')

function dibujarKanji(){
    let singleKanji = kanjis[Math.floor(Math.random()*kanjis.length)]
    let {kanji,hiragana,romaji} = singleKanji
    mainKanji.innerHTML = `<p class="kanji">${kanji}</p>
    <p class="hira">${hiragana}</p>
    <p class="roma">${romaji}</p>`
    return singleKanji;
}

let kanjiActual = dibujarKanji();



console.log(kanjiActual.id)



function dibujarCards(url,nombre,id) {
    let card = document.createElement('div')
    card.classList.add('card')
    card.innerHTML = `<img src="${url}" alt="${nombre}">
    <p>${nombre}</p>`
    card.addEventListener("click",function(e){
        if(id===kanjiActual.id){
            console.log("acerto")
            cardContainer.innerHTML = ''
            kanjiActual = dibujarKanji()
            kanjis = pickRandom(dbKanjis)
            
            renderCards(kanjis)
        }
    })
    return card;
} 

function renderCards(kanjis){
    kanjis.forEach(function({url, palabra,id}){
    cardContainer.appendChild(dibujarCards(url,palabra,id))
})
}

renderCards(kanjis)
