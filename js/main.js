const getReqres = (url)=>{
    return fetch(url)
    .then(res=> res.json()).then(res => {
        contentReq(res)
    })
    .catch(error=>
        console.log('Error:', error)
    )
}

const contentReq = (cont)=>{
    for(let i =0; i<cont.data.length; i++) {
        console.log(cont.data[i])
        const html = `
            <div class="card" id="card" style="width: 10rem;">
            <img src="${cont.data[i].avatar}" class="card-img-top avatar">
            <div class="card-body">
              <h5 class="card-title">${cont.data[i].first_name + " " + cont.data[i].last_name}</h5>
              <a href="#" class="">${cont.data[i].email}</a>
            </div>
            </div>
        `
        construct (html)        
    };
}

const construct = (text)=>{
    document.getElementById('container').innerHTML += text;
}

let page = 1
const nextPage = ()=>{
    page = page +1
    console.log(page)
    getReqres("https://reqres.in/api/users?page="+page)
}

document.getElementById('next').addEventListener("click",()=>{
    nextPage()
})
getReqres("https://reqres.in/api/users?page="+page)

function esalu(){
    return fetch("https://github.com/jonataspinto/ReqResApi-JS/blob/master/js/es.json")
    .then(res=> res.json()).then(res => {
        console.log(res)
    })
    .catch(error=>
        console.log('Error:', error)
    )
}

esalu()