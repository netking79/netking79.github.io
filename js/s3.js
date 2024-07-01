

function getDates( tmp ) {

  // tmp '2024/03/18'
  const hasTimestamp = new Date() - new Date( tmp );


  // 86400000 = 24 * 60 * 60 * 1000
  let hasDays = Math.floor(hasTimestamp / 86400000);

//alert(hasDays);

 return hasDays;
}