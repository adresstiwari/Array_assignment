function count_Words(str) {
    const words = str.split(" ");
    const map = new Map();
  
    for (let word of words) {
      if (map.has(word)) {
        map.set(word, map.get(word) + 1);
      } else {
        map.set(word, 1);
      }
    }
  
    return map;
  }
  
  const sentence = "I am Adarsh. I am from U.P. I am learning web development from PW Skills. I am very thankful to PW Skills";
  console.log(count_Words(sentence))