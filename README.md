# graphql-mongodb-server
Shows how to set up a GraphQL server using Node.js, Express, and MongoDB and perform basic CRUD operations.


---------------------------------------------------------------------------------------------------------------
How to Get Users:

query {
  users {
    _id
    name
    editable
  }
}


http://localhost:4000/graphql?query={users{_id,name,editable}}


curl \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{ "query": "{users{_id,name,editable}}" }' \
  http://localhost:4000/graphql


fetch('/graphql', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
  body: JSON.stringify({query: "{users{_id,name,editable}}"})
})
  .then(r => r.json())
  .then(data => console.log('data returned:', data));

---------------------------------------------------------------------------------------------------------------

How to Get a User:

query {
  user(_id: "5c40d84654a1c513645468e3") {
    _id
    name
    editable
  }
}


http://localhost:4000/graphql?query={user(_id:%225c40d84654a1c513645468e3%22){_id,name,editable}}


curl \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{ "query": "{user(_id:\"5c40d84654a1c513645468e3\"){_id,name,editable}}" }' \
  http://localhost:4000/graphql


fetch('/graphql', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
  body: JSON.stringify({query: "{user(_id:\"5c40d84654a1c513645468e3\"){_id,name,editable}}"})
})
  .then(r => r.json())
  .then(data => console.log('data returned:', data));

---------------------------------------------------------------------------------------------------------------

How to Insert New User:

mutation {
  createUser(user: {_id: "1", name: "Dan Abramov", editable: false}) {
    _id
    name
    editable
  }
}


http://localhost:4000/graphql?query={createUser(user:{_id:"2",name:"Larry",editable:false}){_id,name,editable}}


curl \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{ "query": "mutation{createUser(user:{_id:\"2\",name:\"Billy\",editable:false}){_id,name,editable} }" }' \
  http://localhost:4000/graphql


fetch('/graphql', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
  body: JSON.stringify({query: "mutation{createUser(user:{_id:\"2\",name:\"Jimmy\",editable:false}){_id,name,editable} }"})
})
  .then(r => r.json())
  .then(data => console.log('data returned:', data));

---------------------------------------------------------------------------------------------------------------

How to Update User:

mutation {
  updateUser(_id: "5c40d84654a1c513645468e3", user: {name: "DannyBoy Abramov", editable: true}) {
    name
    editable
  }
}

curl \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{ "query": "mutation{updateUser(_id:\"5c40d84654a1c513645468e3\",user:{name:\"DanMan\",editable:false}){_id,name,editable} }" }' \
  http://localhost:4000/graphql


fetch('/graphql', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
  body: JSON.stringify({query: "mutation{updateUser(_id:\"5c40d84654a1c513645468e3\",user:{name:\"Danoo\",editable:false}){_id,name,editable} }"})
})
  .then(r => r.json())
  .then(data => console.log('data returned:', data));

---------------------------------------------------------------------------------------------------------------

How to Delete User:

mutation {
  deleteUser(_id: "5c40d7cc54a1c513645468e2") {
    _id
  }
}


curl \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{ "query": "mutation{deleteUser(_id:\"5c355121adb5fcb13958b8d0\"){_id}}" }' \
  http://localhost:4000/graphql


fetch('/graphql', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
  body: JSON.stringify({query: "mutation{deleteUser(_id:\"5c40e08bc003b309d029cbf5\"){_id}}"})
})
  .then(r => r.json())
  .then(data => console.log('data returned:', data));  