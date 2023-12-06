function isValidWalk(walk) {
  //n s and e w must cancel eachother out

  //must be equal to 10 minutes
  if (walk.length != 10) {
    return false;
  }

  //object of how many times n, w, s, e occur
  let walkObj = walk.reduce((acc, item) => {
    acc[item] ? acc[item]++ : (acc[item] = 1);
    return acc;
  }, {});

  let lengthWalkObj = Object.values(walkObj).length;

  // if walkObj has one or three properties, return no, not possible
  if (lengthWalkObj == 1 || lengthWalkObj == 3) {
    return false;
  }

  if (lengthWalkObj == 4) {
    return walkObj["n"] == walkObj["s"] && walkObj["w"] == walkObj["e"]
      ? true
      : false;
  } else {
    if (walkObj["n"]) {
      return walkObj["n"] == walkObj["s"] ? true : false;
    } else {
      return walkObj["w"] == walkObj["e"] ? true : false;
    }
  }
}

//parameter: array of strings
//return boolean
//ex ['w']), 'should return false');
