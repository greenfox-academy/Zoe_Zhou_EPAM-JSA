function replaceImgs() {
  var imgs = document.getElementsByTagName('img');
  for (var i = 0; i < imgs.length; i++) {
    imgs[i].src = 'http://bit.ly/lpgreenfox';
  }
}
