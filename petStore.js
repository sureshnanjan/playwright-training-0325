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

  console.log("pet id : "+ pet.id)
  console.log("Pet categroy id "+ pet.category.id)
  console.log("Pet category name"+pet.category.name)
  console.log("pet name "+pet.name)
  console.log("pet tags id "+pet.tags[0].id)
  console.log("pet tags name "+pet.tags[0].name)
  console.log("pet status "+pet.status)
  console.log(typeof(pet.category.id));
