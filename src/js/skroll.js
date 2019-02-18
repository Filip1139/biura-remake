// init skrollr
let s = skrollr.init({ forceHeight: false });
if (s.isMobile()) {
    s.destroy();
}
