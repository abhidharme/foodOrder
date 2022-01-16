async function get11Data(user){
    try{


        let res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${user}`);
        let data = await res.json();
         var X = data.meals;
         return X;
        console.log(X);
    }

   catch (err) {
console.log("err",err);
   }
}

function appendata(X,location){
    X.forEach((elem) => { 

        let Title = document.createElement("p");
Title.textContent = elem.strMeal;

location.append(Title);

    });
}

export  {get11Data , appendata} 