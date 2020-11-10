db.people.update({"job":"Editor"},{"$unset":{"email":1}},false,true)
printjson(db.people.find({"job":"Editor"}).toArray())
