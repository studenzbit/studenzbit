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
    var main = '#5BB8E8';
    var dark = '#2E7BAF';
    var hi = '#A8D8F0';
    var eye = '#1A1A2E';
    var shine = '#ffffff';
    var wrapper = document.createElement('div');
    wrapper.className = 'box-robot';
    wrapper.style.cssText = lg ? 'width:52px;height:72px;' : 'width:32px;height:44px;';

    if (lg) {
      wrapper.innerHTML =
        '<svg width="52" height="72" viewBox="0 0 52 72" xmlns="http://www.w3.org/2000/svg">' +
        /* Tail (behind) */
        '<rect x="7" y="50" width="5" height="5" rx="0" fill="' + dark + '"/>' +
        '<rect x="4" y="46" width="4" height="4" rx="0" fill="' + dark + '"/>' +
        '<rect x="2" y="42" width="3" height="3" rx="0" fill="' + dark + '"/>' +
        '<rect x="1" y="38" width="2" height="2" rx="0" fill="' + dark + '"/>' +
        /* Legs + boots */
        '<rect x="14" y="47" width="9" height="9" rx="2" fill="' + main + '"/>' +
        '<rect x="29" y="47" width="9" height="9" rx="2" fill="' + main + '"/>' +
        '<rect x="13" y="56" width="11" height="6" rx="2" fill="' + dark + '"/>' +
        '<rect x="28" y="56" width="11" height="6" rx="2" fill="' + dark + '"/>' +
        /* Body */
        '<rect x="11" y="29" width="30" height="18" rx="2" fill="' + main + '"/>' +
        '<rect x="16" y="32" width="20" height="12" rx="2" fill="' + dark + '"/>' +
        '<circle cx="26" cy="37.5" r="2.5" fill="' + hi + '"/>' +
        /* Left arm (neutral sway) */
        '<rect class="ra-l" x="0" y="34" width="13" height="8" rx="2" fill="' + dark + '"/>' +
        /* Right arm + paw (raised ~20°, sway on rect) */
        '<g transform="rotate(-20 41 37)">' +
        '<rect class="ra-r" x="41" y="33" width="11" height="8" rx="2" fill="' + dark + '"/>' +
        '<rect x="49" y="30" width="6" height="6" rx="2" fill="' + hi + '"/>' +
        '</g>' +
        /* Ears */
        '<rect x="9" y="3" width="6" height="6" rx="2" fill="' + dark + '"/>' +
        '<rect x="37" y="3" width="6" height="6" rx="2" fill="' + dark + '"/>' +
        /* Head */
        '<rect x="10" y="8" width="32" height="20" rx="3" fill="' + main + '"/>' +
        /* Forehead stripes (1px) */
        '<rect x="14" y="11" width="24" height="1" rx="0" fill="' + dark + '"/>' +
        '<rect x="15" y="13" width="22" height="1" rx="0" fill="' + dark + '"/>' +
        '<rect x="14" y="15" width="24" height="1" rx="0" fill="' + dark + '"/>' +
        /* Eyes + shines */
        '<rect x="15" y="17" width="6" height="6" rx="0" fill="' + eye + '"/>' +
        '<rect x="31" y="17" width="6" height="6" rx="0" fill="' + eye + '"/>' +
        '<rect x="16" y="18" width="2" height="2" rx="0" fill="' + shine + '"/>' +
        '<rect x="32" y="18" width="2" height="2" rx="0" fill="' + shine + '"/>' +
        /* Nose */
        '<polygon points="25,25 27,25 26,27" fill="' + dark + '"/>' +
        /* Smile */
        '<path d="M 21 29 Q 26 32 31 29" fill="none" stroke="' + dark + '" stroke-width="1.25" stroke-linecap="square"/>' +
        '</svg>';
    } else {
      wrapper.innerHTML =
        '<svg width="32" height="44" viewBox="0 0 32 44" xmlns="http://www.w3.org/2000/svg">' +
        /* Tail */
        '<rect x="3" y="34" width="3" height="3" rx="0" fill="' + dark + '"/>' +
        '<rect x="1" y="31" width="3" height="3" rx="0" fill="' + dark + '"/>' +
        '<rect x="0" y="28" width="2" height="2" rx="0" fill="' + dark + '"/>' +
        /* Body + chest (no gear) */
        '<rect x="7" y="20" width="18" height="11" rx="2" fill="' + main + '"/>' +
        '<rect x="10" y="22" width="12" height="7" rx="2" fill="' + dark + '"/>' +
        /* Legs + boots */
        '<rect x="9" y="31" width="6" height="7" rx="2" fill="' + main + '"/>' +
        '<rect x="17" y="31" width="6" height="7" rx="2" fill="' + main + '"/>' +
        '<rect x="8" y="37" width="8" height="5" rx="2" fill="' + dark + '"/>' +
        '<rect x="16" y="37" width="8" height="5" rx="2" fill="' + dark + '"/>' +
        /* Arms */
        '<rect class="ra-l" x="0" y="23" width="8" height="5" rx="2" fill="' + dark + '"/>' +
        '<g transform="rotate(-20 24 25.5)">' +
        '<rect class="ra-r" x="23" y="23" width="8" height="5" rx="2" fill="' + dark + '"/>' +
        '<rect x="28" y="21" width="4" height="4" rx="2" fill="' + hi + '"/>' +
        '</g>' +
        /* Ears + head */
        '<rect x="6" y="2" width="5" height="5" rx="2" fill="' + dark + '"/>' +
        '<rect x="21" y="2" width="5" height="5" rx="2" fill="' + dark + '"/>' +
        '<rect x="6" y="7" width="20" height="12" rx="2" fill="' + main + '"/>' +
        '<rect x="9" y="11" width="4" height="4" rx="0" fill="' + eye + '"/>' +
        '<rect x="19" y="11" width="4" height="4" rx="0" fill="' + eye + '"/>' +
        '<rect x="10" y="12" width="1" height="1" rx="0" fill="' + shine + '"/>' +
        '<rect x="20" y="12" width="1" height="1" rx="0" fill="' + shine + '"/>' +
        '<polygon points="14,17 16,17 15,18" fill="' + dark + '"/>' +
        '<path d="M 12 19 Q 15.5 21 19 19" fill="none" stroke="' + dark + '" stroke-width="1" stroke-linecap="square"/>' +
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
