const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''));
    
    let vertical = [];
  
    for (let i = 0; i < letters[0].length; i++) {
      vertical[i] = [letters[0][i]];
    }
  
    for (let r = 1; r < letters.length; r++) {
      for (let c = 0; c < letters[r].length; c++) {
        vertical[c].push(letters[r][c]);
      }
    }
    
    const verticalJoin = vertical.map(ls => ls.join(''));
    
    for (let l of horizontalJoin) {
      if (l.includes(word)) return true;
    }
    for (let l of verticalJoin) {
      if (l.includes(word)) return true;
    }
    return false;
  };
  
module.exports = wordSearch