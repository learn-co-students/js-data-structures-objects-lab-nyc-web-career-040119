const driver = {}

function updateDriverWithKeyAndValue(obj, key, value){
  return Object.assign({}, obj, {[key]: value})
}

function destructivelyUpdateDriverWithKeyAndValue(obj, key, value){
  return Object.assign(obj, {[key]: value})
}

function deleteFromDriverByKey(driver, key){
  const newObj = { driver }
  delete newObj[key]
  return newObj
}

function destructivelyDeleteFromDriverByKey(driver, key){
  delete driver[key]
  return driver
}
