db.people.update({"first_name":"Antonio"},{"$set":{"hobby":"pingpong"}},false,true)
printjson(db.people.find({"first_name":"Antonio"}).toArray())
