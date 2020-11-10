db.people.update({"location.city":"Moscow"},{"$set":{"location.city":"Moskwa"}},false,true)
printjson(db.people.find({"location.city":"Moskwa"}).toArray())
