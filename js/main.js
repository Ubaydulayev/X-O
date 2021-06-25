let stop = false

let arrData = document.querySelectorAll("[data-num]")

let arr = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]

let concat = function(a, b, c, d) {
  let result = arr[a] + arr[b] + arr[c] + arr[d] 

  if (result === "xxxx" || result === "ooo") {
    return result
  } 
  switch (result) {
    case "xxxnull":
      return ["x", d]

    case "xxnullx":
      return ["x", c]

    case "xnullxx":
      return ["x", b]
      
    case "nullxxx":
      return ["x", a]

      case "ooonull":
        return ["o", d]
  
      case "oonullo":
        return ["o", c]
  
      case "onulloo":
        return ["o", b]
        
      case "nullooo":
        return ["o", a]
  }
}

let changeColorAndStop = function (a, b, c, d) {
  arrData [a].style.color = "red"
  arrData [b].style.color = "red"
  arrData [c].style.color = "red"
  arrData [d].style.color = "red"

  stop = true
}

let checkWin = function (){
  for ( let i=0; i<4; i++) {
    let result = concat (i, i + 4, i + 8, i + 12)

    if (result === "xxxx" || result === "oooo") {
      changeColorAndStop(i, i + 4, i + 8, i + 12)
    }
  }

  for ( let i=0; i<=8; i+=4) {
    let result = concat (i, i+ 1, i + 2, i + 3)

    if (result === "xxxx" || result === "oooo") {
      changeColorAndStop(i, i+ 1, i + 2, i + 3)
    }
  }

  result = concat (0, 5, 10, 15)
  if (result === "xxxx" || result === "oooo") {
    changeColorAndStop(0, 5, 10, 15)
  }

  result = concat (3, 6, 9, 12)
  if (result === "xxxx" || result === "oooo") {
    changeColorAndStop(3, 6, 9, 12)
  }

  result = concat (0, 1, 2, 3)
  if (result === "xxxx" || result === "oooo") {
    changeColorAndStop(0, 1, 2, 3)
  }

  result = concat (12, 13, 14, 15)
  if (result === "xxxx" || result === "oooo") {
    changeColorAndStop(12, 13, 14, 15)
  }
}

let botZero = function (){
  for ( let i = 0; i < 4; i++) {
    let result = concat (i, i + 4, i + 8, i + 12)

    if (typeof(result) === "object" && result[0] === "o") {
      arrData[result[1]].innerHTML = "o"
      arr[result[1]] = "o"
      return
    }
  }

  for ( let i = 0; i <= 8; i += 4) {
    let result = concat (i, i+ 1, i + 2, i + 3)

    if (typeof(result) === "object" && result[0] === "o") {
      arrData[result[1]].innerHTML = "o"
      arr[result[1]] = "o"
      return
    }
  }

  result = concat (0, 5, 10, 15)
  if (typeof(result) === "object" && result[0] === "o") {
    arrData[result[1]].innerHTML = "o"
    arr[result[1]] = "o"
    return
  }

  result = concat (3, 6, 9, 12)
  if (typeof(result) === "object" && result[0] === "o") {
    arrData[result[1]].innerHTML = "o"
    arr[result[1]] = "o"
    return
  }

  result = concat (0, 1, 2, 3)
  if (typeof(result) === "object" && result[0] === "o") {
    arrData[result[1]].innerHTML = "o"
    arr[result[1]] = "o"
    return
  }

  result = concat (12, 13, 14, 15)
  if (typeof(result) === "object" && result[0] === "o") {
    arrData[result[1]].innerHTML = "o"
    arr[result[1]] = "o"
    return
  }



  for ( let i = 0; i < 4; i++) {
    let result = concat (i, i + 4, i + 8, i + 12)

    if (typeof(result) === "object" && result[0] === "x") {
      arrData[result[1]].innerHTML = "o"
      arr[result[1]] = "o"
      return
    }
  }

  for ( let i = 0; i <= 8; i += 4) {
    let result = concat (i, i+ 1, i + 2, i + 3)

    if (typeof(result) === "object" && result[0] === "x") {
      arrData[result[1]].innerHTML = "o"
      arr[result[1]] = "o"
      return
    }
  }

  result = concat (0, 5, 10, 15)
  if (typeof(result) === "object" && result[0] === "x") {
    arrData[result[1]].innerHTML = "o"
    arr[result[1]] = "o"
    return
  }

  result = concat (3, 6, 9, 12)
  if (typeof(result) === "object" && result[0] === "x") {
    arrData[result[1]].innerHTML = "o"
    arr[result[1]] = "o"
    return
  }

  result = concat (0, 1, 2, 3)
  if (typeof(result) === "object" && result[0] === "x") {
    arrData[result[1]].innerHTML = "o"
    arr[result[1]] = "o"
    return
  }

  result = concat (12, 13, 14, 15)
  if (typeof(result) === "object" && result[0] === "x") {
    arrData[result[1]].innerHTML = "o"
    arr[result[1]] = "o"
    return
  }

  let tempArr = []

  for (let i = 0; i < 16; i++){
    if (arr[i] === null){
      tempArr.push(i)
    }
  }

  let randIndexTempArr = Math.floor(Math.random() * tempArr.length)

  let randNull = tempArr[randIndexTempArr]

  arrData[randNull].innerHTML = "o"
  arr[randNull] = "o"
}

addEventListener("click", function(event1) {
  if (stop === true){return}

  if (event1.target.className === "boxx" && event1.target.textContent === "") {
    event1.target.style.color = "#F841A6"
    event1.target.innerHTML = "x"

    arr[event1.target.dataset.num] = "x"

    // console.log (arr)
  } else {
      return
  }

  checkWin ()

  if (stop === true){return}

  botZero() 

  // checkWin ()
})