function techList(array, name) {
    if (array.length != 0) {
      let ordenedArray = array.sort();
      let techList = [];
      for (let index = 0; index < ordenedArray.length; index += 1) {
        let techListItem = {tech: ordenedArray[index], name: name};
        techList.push(techListItem);
      }
      return techList;
      } else {
      return 'Vazio!'
    }
  }

module.exports = techList;