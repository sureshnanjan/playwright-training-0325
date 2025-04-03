const pet = {
    id: 1,
    category: {
      id: 1,
      name: "Dog"
    },
    name: "doggie",
    photoUrls: [
      "https://example.com/dog1.jpg",
      "https://example.com/dog2.jpg"
    ],
    tags: [
      {
        id: 1,
        name: "cute"
      },
      {
        id: 2,
        name: "friendly"
      }
    ],
    status: "available"
  }
  
  console.log('id:', pet.id)
  console.log('category:', pet.category)
  console.log('name:', pet.name)
  console.log('photoUrls:', pet.photoUrls)
  console.log('tags:', pet.tags)
  console.log('status:', pet.status)