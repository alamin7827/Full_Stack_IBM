let API_KEY ="AIzaSyD9FYK0q-GXrf-YDikIADvaDQtaPy3UpbY";

let lower_body =document.getElementById("lower-body");

let search_term =document.getElementById("search").value || "India Gate"

async function getData() {
    try{
        let data =await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&order=rating&q=${search_term}&type=video&videoCaption=any&videoDefinition=any&videoEmbeddable=true&videoLicense=any&maxResults=20&videoType=any&key=${API_KEY}`)

        let res =await data.json()
        console.log(res.items);
        showData(res.items)
    }
    catch(e){
        console.log(e);
    }
}
getData();

async function showData(arr) {
    document.getElementById("loading").style.display="none";
    arr.forEach(({snippet,id})=>{
        let box =document.createElement('div');
        box.className='video'

        let img =document.createElement("img");
        img.src =snippet.thumbnails.medium.url;

        let title =document.createElement('p');
        title.innerText =snippet.title;

        let channel_title =document.createElement('p');
        channel_title.innerText =snippet.channel_title;

        box.append(img,title,channel_title);
        lower_body.append(box);

        box.onclick=()=>{
            let obj ={
                snippet,id
            }
            localStorage.setItem("videoData",JSON.stringify(obj));

            window.location.href="video.html"
        }

    });
    
}
{/* <iframe width="560" height="315" src="https://www.youtube.com/embed/K-Ts-NFR62o?si=TUKdsL4zeI5p_RRg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}