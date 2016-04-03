describe('clinical:default-theme', function () {
  var server = meteor();
  var client = browser(server);

  it('Default theme should have a gradient as background.', function () {
    return client.execute(function () {
      expect($('body').css('background-image')).to.equal('-webkit-linear-gradient(top, rgb(85, 85, 85), rgb(170, 170, 170) 100%)');
    });
  });
});
