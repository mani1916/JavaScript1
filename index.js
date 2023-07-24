d=document.getElementById('hh')
f=document.getElementById('jij')
random=document.getElementById('rand')

random.onclick=()=>getsuperhero(Math.floor(Math.random()*731))
function getsuperhero(id){
    // console.log(id)
    let msg=`https://superheroapi.com/api.php/10223569763528853/${id}`
    fetch(msg).then
    (response =>response.json())
    .then(json=>ge(json))
}

// getsuperhero(301)
function ge(img){
    f.innerHTML=`This is ${img.name} 🪄`
    d.innerHTML+=`<img src="${img.image.url}"/>`

}