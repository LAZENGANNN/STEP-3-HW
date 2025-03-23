const renderData = function (obj, template) {
    const rendered = template
        .replace("{{mark}}", obj.mark)
        .replace("{{num}}", obj.number)
        .replace("{{color}}", obj.color)
        .replace("{{weight}}", obj.weight)
        .replace("{{year}}", obj.year)
        .replace("{{engineType}}", obj.engineType)
        .replace("{{crimes}}", obj.crimes)
        .replace("{{fines}}", obj.fines);
    return rendered;
};
  
  module.exports={
    renderData,
  }