const shortestWordLength = str => str.replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"()*+,\-.\/:;<=>?\[\]_`{|}]/g,"").trim().split(/\s+/).sort((a, b) => a.length - b.length)[0].length;
