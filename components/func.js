

async function getData(url){
    try{


        let res = await fetch(url);
        let data = await res.json();
        var X = data.meals;
        return X;
        
    }

   catch(err){
console.log(err);
   }
}

function appenddata(X,location,location1){
    X.forEach((elem) => {  
    let div1 = document.createElement("div");
    div1.setAttribute("id" , "div1");

    let div2 = document.createElement("div");
    div2.setAttribute("id" , "div2");

    let img = document.createElement("img");
     img.src = elem.strMealThumb;
      img.setAttribute("id" , "img1")
     
     let p = document.createElement("p");
      p.innerText = elem.strIngredient1;

      let p1 = document.createElement("p");
      p1.innerText = elem.strIngredient2;

      let p2 = document.createElement("p");
      p2.innerText = elem.strIngredient3;

      let p3 = document.createElement("p");
      p3.innerText = elem.strIngredient4;

      let p4 = document.createElement("p");
      p4.innerText = elem.strIngredient5;

      let p5 = document.createElement("p");
      p5.innerText = elem.strIngredient6;

      let p6 = document.createElement("p");
      p6.innerText = elem.strIngredient7;

      let p7 = document.createElement("p");
      p7.innerText = elem.strIngredient8;

      let p8 = document.createElement("p");
      p8.innerText = `${elem.strIngredient9}`;
     
      let h3 = document.createElement("h3");
      h3.textContent = "Ingredients";

      let h4 = document.createElement("h3");
      h4.textContent = "Procedure";

      let title = document.createElement("h2");
      title.textContent = elem.strMeal;
      
      let p9 = document.createElement("p");
      p9.innerText = `${elem.strInstructions}`
      
      let div3 = document.createElement("div");
      div3.setAttribute("id" , "div2");
      
      div3.append(h4,p9)

     div2.append(h3,p,p1,p2,p3,p4,p5,p6,p7,p8)
    
     div1.append(title,img);

     //location1.append(title);
     location.append(div1,div2,div3);

     

});
}



export { getData , appenddata}