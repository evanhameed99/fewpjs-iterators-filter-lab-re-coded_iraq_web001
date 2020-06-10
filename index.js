// Code your solution here


 function findMatching (arr,string){

  let filtered = arr.filter(elem=>{
    return string.toLowerCase()===elem.toLowerCase();
  })
  return filtered
}

function fuzzyMatch(arr,string){
  let filtered = arr.filter(elem=>{
    return string.toLowerCase().startsWith(elem.toLowerCase());
  })
  return filtered

}
