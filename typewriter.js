let sentance = "hello there from lighthouse labs";
let time = 50;
let tally = 0
  for(const char of sentance) {
    setTimeout(() => {
      process.stdout.write(char)
      tally += 1
      if (tally === sentance.length){
        process.stdout.write("\n")
      } 
    }, time) 
  time += 50
  }







