var recipes = {}

function updateObjectWithKeyAndValue(object, key, value){
  var my_obj = Object.assign({}, object)
  my_obj[key] = value
  return my_obj
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value
  return object
}