// Code your solution here


 function findMatching (arr,string){

  const filtered = arr.filter(elem=>{
    return string.toLowerCase().startsWith(elem.name.toLowerCase())
  })
  return filtered
}
