        const mobileBtn = document.getElementById("mobile-btn");
            const nav = document.querySelector('nav');
            const mobileBtnExit = document.getElementById('mobile-exit');

        mobileBtn.addEventListener('click', () => {
            nav.classList.add('menu-btn');
        })

        mobileBtnExit.addEventListener('click', () => {
            nav.classList.remove('menu-btn');
        })


let article = document.getElementsByClassName("article-block");
let questionBtn = document.getElementsByClassName("question");
console.log(questionBtn);
let qte = article.length;
console.log(qte);


    for(let i=0;i<qte;i++){
      console.log(article[i].style.display);
        article[i].style.display = "none";
        questionBtn[i].addEventListener('click', () => {
            for(let i=0;i<qte;i++){
              console.log(article[i].style.display);
                article[i].style.display = "none";
            }
          article[i].style.display = "block";
          
        })
    }

          article[0].style.display = "block";

// Q8
function printTxt(str,element){
if((typeof str == "undefined") || (typeof element == "undefined")){
return null;
}

element.innerHTML = element.innerHTML+ `<p> ${str}</p> `;
element.style.fontSize = "14px";
element.style.fontWeight = "bold";
return element;
}

//Q9
function compareVector(v1, v2) {
  let count=0;
  if (!Array.isArray(v1) && !Array.isArray(v2))
    return undefined;
    
  if (v1.length != v2.length)
    return false;
  for (i=0;i<v1.length; i++){
    if (typeof v1[i] == "boolean" || typeof v1[i] == "object" ){
      return undefined;
    }
    if (typeof v2[i] == "boolean" || typeof v2[i] == "object" ){
      return undefined;
    }

    if (v1[i] === v2[i])
      count++;
    else
      return false;
  }
  if (count = v1.length)
    return true
}

//Q10

function range(begin, end, step = 1){
  if (typeof begin !== 'number' || typeof end !== 'number' || typeof step !== 'number'){
    throw new Error('Os valores devem ser números!');
  }
  if (step == 0){
    throw new Error('O passo não pode ser zero!');
  }
  if (step > 0 && begin > end){
    throw new Error('O inicio deve ser menor ou igual ao fim quando o passo for positivo!');
  }
  if (step < 0 && begin < end){
    throw new Error('O inicio deve ser maior ou igual ao fim quando o passo for negativo!');
  }
  
  const resultado = [];
  
  if (step > 0){
    for (let i = begin; i <= end; i+= step){
      resultado.push(i);
    }
  } else {
    for(let i = begin; i >= end; i += step){
      resultado.push(i);
    }
  }
  return resultado;
}

//Q15
const alfUp = document.getElementById("alf-up");
const alfDown = document.getElementById("alf-down");

frutas = ["Banana", "Maçã", "Abacate", "Abacaxi", "Cajá", "Morango", "Goiaba", "Coco", "Jaca", "Jambo", "Laranja", "Manga", "Limão", "Mamão", "Maracujá"]
txtLista = document.getElementById("lista-fruta");

function listarFrutas(v) {
  txtLista.innerHTML = "";
  txtLista.innerHTML = txtLista.innerHTML+ `<ul> `
  for (i=0;i<v.length;i++){
    txtLista.innerHTML = txtLista.innerHTML+ `<list> ${v[i]}</list><br> `;
  }
  txtLista.innerHTML = txtLista.innerHTML+ `</ul> `
}

listarFrutas(frutas);

alfUp.addEventListener('click', () => {
  frutas.sort();
  listarFrutas(frutas);
})
alfDown.addEventListener('click', () => {
  frutas.sort();
  frutas.reverse();
  listarFrutas(frutas);
})

  
// Q18
function func1(number){
    return new Promise(resolve =>{
        setTimeout(() => resolve(77 + number) , 1000)
    })
}

function func2(number){
    return new Promise(resolve =>{
        setTimeout(() => resolve(22 + number) , 1000)
    })
}

function func3(number){
    return new Promise(resolve =>{
        setTimeout(() => resolve(14 * number) , 1000)
    })
}

 async function myAsyncFunction(){
    var number = await func1(4);

    console.log('Hello');
    number = await func2(number);

    console.log('World');
    var result = await func3(number);

    console.log(result);
}