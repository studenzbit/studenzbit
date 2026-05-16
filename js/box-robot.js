(function () {
  function injectStyles() {
    if (document.getElementById('box-robot-styles')) return;
    var s = document.createElement('style');
    s.id = 'box-robot-styles';
    s.textContent =
      '@keyframes robot-bob{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}' +
      '@keyframes robot-jump{0%{transform:translateY(0)}40%{transform:translateY(-20px)}100%{transform:translateY(0)}}' +
      '@keyframes arm-sway-l{0%,100%{transform:rotate(-8deg)}50%{transform:rotate(8deg)}}' +
      '@keyframes arm-sway-r{0%,100%{transform:rotate(8deg)}50%{transform:rotate(-8deg)}}' +
      '.box-robot{animation:robot-bob 2s ease-in-out infinite;cursor:pointer;display:inline-block;}' +
      '.box-robot .ra-l{transform-box:fill-box;transform-origin:right center;animation:arm-sway-l 2s ease-in-out infinite;}' +
      '.box-robot .ra-r{transform-box:fill-box;transform-origin:left center;animation:arm-sway-r 2s ease-in-out 0.3s infinite;}';
    document.head.appendChild(s);
  }

  function createBoxRobot(size) {
    injectStyles();

    var lg = size === 'lg';
    var purple = '#7C3AED';
    var purpleDark = '#5B21B6';
    var eye = '#ffffff';
    var wrapper = document.createElement('div');
    wrapper.className = 'box-robot';
    wrapper.style.cssText = lg ? 'width:52px;height:72px;' : 'width:32px;height:44px;';

    if (lg) {
      wrapper.innerHTML =
        '<svg width="52" height="72" viewBox="0 0 52 72" xmlns="http://www.w3.org/2000/svg">' +
        '<rect x="10" y="4" width="32" height="20" rx="0" fill="' + purple + '"/>' +
        '<circle cx="19" cy="14" r="3.5" fill="' + eye + '"/>' +
        '<circle cx="33" cy="14" r="3.5" fill="' + eye + '"/>' +
        '<rect x="11" y="27" width="30" height="26" rx="0" fill="' + purple + '"/>' +
        '<rect class="ra-l" x="0" y="31" width="10" height="5" rx="0" fill="' + purpleDark + '"/>' +
        '<rect class="ra-r" x="42" y="31" width="10" height="5" rx="0" fill="' + purpleDark + '"/>' +
        '<rect x="15" y="55" width="8" height="14" rx="0" fill="' + purpleDark + '"/>' +
        '<rect x="29" y="55" width="8" height="14" rx="0" fill="' + purpleDark + '"/>' +
        '</svg>';
    } else {
      wrapper.innerHTML =
        '<svg width="32" height="44" viewBox="0 0 32 44" xmlns="http://www.w3.org/2000/svg">' +
        '<rect x="6" y="2" width="20" height="14" rx="0" fill="' + purple + '"/>' +
        '<circle cx="11" cy="9" r="2" fill="' + eye + '"/>' +
        '<circle cx="21" cy="9" r="2" fill="' + eye + '"/>' +
        '<rect x="7" y="18" width="18" height="14" rx="0" fill="' + purple + '"/>' +
        '<rect class="ra-l" x="0" y="20" width="6" height="3" rx="0" fill="' + purpleDark + '"/>' +
        '<rect class="ra-r" x="26" y="20" width="6" height="3" rx="0" fill="' + purpleDark + '"/>' +
        '<rect x="9" y="34" width="5" height="8" rx="0" fill="' + purpleDark + '"/>' +
        '<rect x="18" y="34" width="5" height="8" rx="0" fill="' + purpleDark + '"/>' +
        '</svg>';
    }

    wrapper.triggerJump = function () {
      var el = this;
      el.style.animation = 'robot-jump 0.45s ease-out';
      el.addEventListener('animationend', function () {
        el.style.animation = 'robot-bob 2s ease-in-out infinite';
      }, { once: true });
    };

    wrapper.addEventListener('click', function (e) {
      e.stopPropagation();
      this.triggerJump();
    });

    return wrapper;
  }

  window.createBoxRobot = createBoxRobot;
})();
