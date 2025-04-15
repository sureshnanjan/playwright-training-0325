console.log("Pet Store")

/**
 * Api Response 
 *
 * @type {{ id: number; category: { id: number; name: string; }; name: string; photoUrls: {}; tags: { id: number; name: string; }; status: string; }}
 */
let ApiResponse = {
    "id": 12345,
    "category": {
        "id": 2222,
        "name": "Dog"
    },
    "name": "Bruno",
    "photoUrls": [
        "testURL"
    ],
    "tags": {
        "id": 3333,
        "name": "German Shepherd"
    },
    "status": "available"

}

console.log(ApiResponse)

