var findContentChildren = function(g, s) {
  g.sort( (a,b) => {return a - b})
  s.sort( (a,b) => {return a - b})
  
  let satisfied = 0
  
  for (i = 0, j = 0; j < s.length; i++, j++) {
      if (g[i] <= s[j]) {
          satisfied++   
      } else {
          i--
      }
  }
  console.log(satisfied)
  return satisfied 
};