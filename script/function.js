

async function getData(url){
    try{


        let res = await fetch(url);
        let data = await res.json();
         var X = data.meals;
        return X;
        
    }

   catch (err) {
console.log("err",err);
   }
}

function appenddata(X,location){
X.forEach((elem) => {  
    let div1 = document.createElement("div");
    div1.setAttribute("id" , "div1");
    // let p = document.createElement("p");
    //  p.innerText = title;

    let title = document.createElement("h3");
      title.textContent = elem.strMeal;


     let img = document.createElement("img");
     img.src = elem.strMealThumb;
      img.setAttribute("id" , "img1")
    
     div1.append(img,title);

     location.append(div1);

});

}



export { getData , appenddata }