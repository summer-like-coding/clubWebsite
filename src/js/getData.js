// import { nanoid } from 'nanoid'
// 设置一个值将从服务器获取的数据存储起来
// let dataSource = []
const host  =  `http://localhost:5000`

const getData = () => {
  fetch(`${host}/reviews`)
  .then(response => response.json())
  .then(data => formateData(data));
}

(getData)()
// setInterval(getData(),5)

let forth = this.document.querySelector(".forth")
let showBox = forth.querySelector(".showBox")


const formateData = (data) => {
  let newdata = data.map(ele => {
    showBox.innerHTML += `<div class="hope animate">${ele.content}</div>`
  })
  return newdata
}

// 获取input的输入
let input = forth.querySelector("input")
// 绑定btn
let btn = forth.querySelector("button")
// 生成唯一id
const generateRandom = () => {
  return Math.random().toString(16).slice(2);
}

const postData = () => {
  const data = {
    id: generateRandom(),
    content: input.value
  }
  fetch(`${host}/reviews`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  getData()
  input.value = ""
}
btn.addEventListener("click", postData)

