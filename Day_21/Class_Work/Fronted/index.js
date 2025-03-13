let parent =document.getElementById('parent');

async function getData() {
    let data =await fetch(`http://localhost:3000/posts`);

    let res = await data.json();
    showData(res);


    console.log(res);
    
}
getData();

async function showData(arr) {
    parent.innerHTML=null;
    arr.forEach((el,index)=>{
        let box = document.createElement('div');
        box.className ='box';

        let update = document.createElement('button');
        update.innerText='Update';
        update.classList.add('btn');
        box.append(update);

        update.addEventListener('click',async()=>{
            let obj = {
                title:el.title,
                views:el.views
            }
            let res = await fetch(`http://localhost:3000/posts/${el.id}`,{
                method:'PATCH',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(obj)
            });
            let response = await res.json();
            if(response){
                getData();
                let Updata =prompt('Enter the updated value');
                let obj = {
                    title:Updata,
                    views:el.views
                }
            }
        });

        let id = document.createElement('p');

        id.innerText=el.id;

        let title = document.createElement('p');
        title.innerText=el.title;

        let views = document.createElement('p');
        views.innerText=el.views;

        box.append(id,title,views);
        parent.append(box);



    });

    
}

let button = document.getElementById('btn');

button.addEventListener('click',async ()=>{
    let value = document.getElementById('input').value;

    let obj ={
        title:value,
        views:Math.random(100,10000)
    }
    try{
        let res = await fetch(`http://localhost:3000/posts`,{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(obj)
    
        });
        let response = await res.json();
        if(response){
            getData();
            alert('Data Added');

        }
    }
    catch(err){
        console.log(err);
    }
});