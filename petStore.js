const pet = {
    id: 1,
    category: {
      id: 1,
      name: "rotwiller"
    },
    name: "Rocky_doggie",
    photo: [
      "string","string"
    ],
    tags: [
      {
        id: 10,
        name: "bhoku"
      }
    ],
    status: "available"
  };

  function doAdd(){
    console.log("additon function")
  }

  function doSub(){
    console.log("subraction done here")
  }

  function invoke_any(funName){
    funName();
  }

  invoke_any(doAdd)
  invoke_any(doSub)
  console.log("pet id : "+ pet.id)
  console.log("Pet categroy id "+ pet.category.id)
  console.log("Pet category name"+pet.category.name)
  console.log("pet name "+pet.name)
  console.log("pet tags id "+pet.tags[0].id)
  console.log("pet tags name "+pet.tags[0].name)
  console.log("pet status "+pet.status)
  console.log(typeof(pet.category.id));
