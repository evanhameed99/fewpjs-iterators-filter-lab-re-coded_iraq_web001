// Code your solution here


findMatching (arr,string){

  const filtered = arr.filter(elem=>{
    elem.toLowerCase().startsWith(string);
  })
}
