/* jquery.nicescroll
-- version 3.5.0 BETA5
-- copyright 2011-12-13 InuYaksa*2013
-- licensed under the MIT
--
-- http://areaaperta.com/nicescroll
-- https://github.com/inuyaksa/jquery.nicescroll
--
*/
(function (e) {
  function f() {
    var e = document.getElementsByTagName("script");
    var t = e[e.length - 1].src.split("?")[0];
    return t.split("/").length > 0
      ? t.split("/").slice(0, -1).join("/") + "/"
      : "";
  }
  function N(e, t, n) {
    for (var r = 0; r < t.length; r++) n(e, t[r]);
  }
  var t = false;
  var n = false;
  var r = false;
  var i = 5e3;
  var s = 2e3;
  var o = 0;
  var u = e;
  var l = f();
  var c = ["ms", "moz", "webkit", "o"];
  var h = window.requestAnimationFrame || false;
  var p = window.cancelAnimationFrame || false;
  if (!h) {
    for (var d in c) {
      var v = c[d];
      if (!h) h = window[v + "RequestAnimationFrame"];
      if (!p)
        p =
          window[v + "CancelAnimationFrame"] ||
          window[v + "CancelRequestAnimationFrame"];
    }
  }
  var m = window.MutationObserver || window.WebKitMutationObserver || false;
  var g = {
    zindex: "auto",
    cursoropacitymin: 0,
    cursoropacitymax: 1,
    cursorcolor: "#424242",
    cursorwidth: "5px",
    cursorborder: "1px solid #fff",
    cursorborderradius: "5px",
    scrollspeed: 60,
    mousescrollstep: 8 * 3,
    touchbehavior: false,
    hwacceleration: true,
    usetransition: true,
    boxzoom: false,
    dblclickzoom: true,
    gesturezoom: true,
    grabcursorenabled: true,
    autohidemode: true,
    background: "",
    iframeautoresize: true,
    cursorminheight: 32,
    preservenativescrolling: true,
    railoffset: false,
    bouncescroll: true,
    spacebarenabled: true,
    railpadding: { top: 0, right: 0, left: 0, bottom: 0 },
    disableoutline: true,
    horizrailenabled: true,
    railalign: "right",
    railvalign: "bottom",
    enabletranslate3d: true,
    enablemousewheel: true,
    enablekeyboard: true,
    smoothscroll: true,
    sensitiverail: true,
    enablemouselockapi: true,
    cursorfixedheight: false,
    directionlockdeadzone: 6,
    hidecursordelay: 400,
    nativeparentscrolling: true,
    enablescrollonselection: true,
    overflowx: true,
    overflowy: true,
    cursordragspeed: 0.3,
    rtlmode: false,
    cursordragontouch: false,
    oneaxismousemode: "auto",
  };
  var y = false;
  var b = function () {
    function o() {
      var n = ["-moz-grab", "-webkit-grab", "grab"];
      if ((t.ischrome && !t.ischrome22) || t.isie) n = [];
      for (var r = 0; r < n.length; r++) {
        var i = n[r];
        e.style["cursor"] = i;
        if (e.style["cursor"] == i) return i;
      }
      return "url(http://www.google.com/intl/en_ALL/mapfiles/openhand.cur),n-resize";
    }
    if (y) return y;
    var e = document.createElement("DIV");
    var t = {};
    t.haspointerlock =
      "pointerLockElement" in document ||
      "mozPointerLockElement" in document ||
      "webkitPointerLockElement" in document;
    t.isopera = "opera" in window;
    t.isopera12 = t.isopera && "getUserMedia" in navigator;
    t.isoperamini =
      Object.prototype.toString.call(window.operamini) === "[object OperaMini]";
    t.isie = "all" in document && "attachEvent" in e && !t.isopera;
    t.isieold = t.isie && !("msInterpolationMode" in e.style);
    t.isie7 =
      t.isie &&
      !t.isieold &&
      (!("documentMode" in document) || document.documentMode == 7);
    t.isie8 =
      t.isie && "documentMode" in document && document.documentMode == 8;
    t.isie9 = t.isie && "performance" in window && document.documentMode >= 9;
    t.isie10 = t.isie && "performance" in window && document.documentMode >= 10;
    t.isie9mobile = /iemobile.9/i.test(navigator.userAgent);
    if (t.isie9mobile) t.isie9 = false;
    t.isie7mobile =
      !t.isie9mobile && t.isie7 && /iemobile/i.test(navigator.userAgent);
    t.ismozilla = "MozAppearance" in e.style;
    t.iswebkit = "WebkitAppearance" in e.style;
    t.ischrome = "chrome" in window;
    t.ischrome22 = t.ischrome && t.haspointerlock;
    t.ischrome26 = t.ischrome && "transition" in e.style;
    t.cantouch =
      "ontouchstart" in document.documentElement || "ontouchstart" in window;
    t.hasmstouch = window.navigator.msPointerEnabled || false;
    t.ismac = /^mac$/i.test(navigator.platform);
    t.isios = t.cantouch && /iphone|ipad|ipod/i.test(navigator.platform);
    t.isios4 = t.isios && !("seal" in Object);
    t.isandroid = /android/i.test(navigator.userAgent);
    t.trstyle = false;
    t.hastransform = false;
    t.hastranslate3d = false;
    t.transitionstyle = false;
    t.hastransition = false;
    t.transitionend = false;
    var n = [
      "transform",
      "msTransform",
      "webkitTransform",
      "MozTransform",
      "OTransform",
    ];
    for (var r = 0; r < n.length; r++) {
      if (typeof e.style[n[r]] != "undefined") {
        t.trstyle = n[r];
        break;
      }
    }
    t.hastransform = t.trstyle != false;
    if (t.hastransform) {
      e.style[t.trstyle] = "translate3d(1px,2px,3px)";
      t.hastranslate3d = /translate3d/.test(e.style[t.trstyle]);
    }
    t.transitionstyle = false;
    t.prefixstyle = "";
    t.transitionend = false;
    var n = [
      "transition",
      "webkitTransition",
      "MozTransition",
      "OTransition",
      "OTransition",
      "msTransition",
      "KhtmlTransition",
    ];
    var i = ["", "-webkit-", "-moz-", "-o-", "-o", "-ms-", "-khtml-"];
    var s = [
      "transitionend",
      "webkitTransitionEnd",
      "transitionend",
      "otransitionend",
      "oTransitionEnd",
      "msTransitionEnd",
      "KhtmlTransitionEnd",
    ];
    for (var r = 0; r < n.length; r++) {
      if (n[r] in e.style) {
        t.transitionstyle = n[r];
        t.prefixstyle = i[r];
        t.transitionend = s[r];
        break;
      }
    }
    if (t.ischrome26) {
      t.prefixstyle = i[1];
    }
    t.hastransition = t.transitionstyle;
    t.cursorgrabvalue = o();
    t.hasmousecapture = "setCapture" in e;
    t.hasMutationObserver = m !== false;
    e = null;
    y = t;
    return t;
  };
  var w = function (e, r) {
    function v() {
      var e = a.win;
      if ("zIndex" in e) return e.zIndex();
      while (e.length > 0) {
        if (e[0].nodeType == 9) return false;
        var t = e.css("zIndex");
        if (!isNaN(t) && t != 0) return parseInt(t);
        e = e.parent();
      }
      return false;
    }
    function w(e, t, n) {
      var r = e.css(t);
      var i = parseFloat(r);
      if (isNaN(i)) {
        i = y[r] || 0;
        var s =
          i == 3
            ? n
              ? a.win.outerHeight() - a.win.innerHeight()
              : a.win.outerWidth() - a.win.innerWidth()
            : 1;
        if (a.isie8 && i) i += 1;
        return s ? i : 0;
      }
      return i;
    }
    function S(e, t, n, r) {
      a._bind(
        e,
        t,
        function (r) {
          var r = r ? r : window.event;
          var i = {
            original: r,
            target: r.target || r.srcElement,
            type: "wheel",
            deltaMode: r.type == "MozMousePixelScroll" ? 0 : 1,
            deltaX: 0,
            deltaZ: 0,
            preventDefault: function () {
              r.preventDefault ? r.preventDefault() : (r.returnValue = false);
              return false;
            },
            stopImmediatePropagation: function () {
              r.stopImmediatePropagation
                ? r.stopImmediatePropagation()
                : (r.cancelBubble = true);
            },
          };
          if (t == "mousewheel") {
            i.deltaY = (-1 / 40) * r.wheelDelta;
            r.wheelDeltaX && (i.deltaX = (-1 / 40) * r.wheelDeltaX);
          } else {
            i.deltaY = r.detail;
          }
          return n.call(e, i);
        },
        r
      );
    }
    function x(e, t, n) {
      var r, i;
      var s = 1;
      if (e.deltaMode == 0) {
        r = -Math.floor(e.deltaX * (a.opt.mousescrollstep / (18 * 3)));
        i = -Math.floor(e.deltaY * (a.opt.mousescrollstep / (18 * 3)));
      } else if (e.deltaMode == 1) {
        r = -Math.floor(e.deltaX * a.opt.mousescrollstep);
        i = -Math.floor(e.deltaY * a.opt.mousescrollstep);
      }
      if (t && a.opt.oneaxismousemode && r == 0 && i) {
        r = i;
        i = 0;
      }
      if (r) {
        if (a.scrollmom) {
          a.scrollmom.stop();
        }
        a.lastdeltax += r;
        a.debounced(
          "mousewheelx",
          function () {
            var e = a.lastdeltax;
            a.lastdeltax = 0;
            if (!a.rail.drag) {
              a.doScrollLeftBy(e);
            }
          },
          120
        );
      }
      if (i) {
        if (a.opt.nativeparentscrolling && n && !a.ispage && !a.zoomactive) {
          if (i < 0) {
            if (a.getScrollTop() >= a.page.maxh) return true;
          } else {
            if (a.getScrollTop() <= 0) return true;
          }
        }
        if (a.scrollmom) {
          a.scrollmom.stop();
        }
        a.lastdeltay += i;
        a.debounced(
          "mousewheely",
          function () {
            var e = a.lastdeltay;
            a.lastdeltay = 0;
            if (!a.rail.drag) {
              a.doScrollBy(e);
            }
          },
          120
        );
      }
      e.stopImmediatePropagation();
      return e.preventDefault();
    }
    var a = this;
    this.version = "3.5.0 BETA5";
    this.name = "nicescroll";
    this.me = r;
    this.opt = { doc: u("body"), win: false };
    u.extend(this.opt, g);
    this.opt.snapbackspeed = 80;
    if (e || false) {
      for (var f in a.opt) {
        if (typeof e[f] != "undefined") a.opt[f] = e[f];
      }
    }
    this.doc = a.opt.doc;
    this.iddoc = this.doc && this.doc[0] ? this.doc[0].id || "" : "";
    this.ispage = /BODY|HTML/.test(
      a.opt.win ? a.opt.win[0].nodeName : this.doc[0].nodeName
    );
    this.haswrapper = a.opt.win !== false;
    this.win = a.opt.win || (this.ispage ? u(window) : this.doc);
    this.docscroll = this.ispage && !this.haswrapper ? u(window) : this.win;
    this.body = u("body");
    this.viewport = false;
    this.isfixed = false;
    this.iframe = false;
    this.isiframe =
      this.doc[0].nodeName == "IFRAME" && this.win[0].nodeName == "IFRAME";
    this.istextarea = this.win[0].nodeName == "TEXTAREA";
    this.forcescreen = false;
    this.canshowonmouseevent = a.opt.autohidemode != "scroll";
    this.onmousedown = false;
    this.onmouseup = false;
    this.onmousemove = false;
    this.onmousewheel = false;
    this.onkeypress = false;
    this.ongesturezoom = false;
    this.onclick = false;
    this.onscrollstart = false;
    this.onscrollend = false;
    this.onscrollcancel = false;
    this.onzoomin = false;
    this.onzoomout = false;
    this.view = false;
    this.page = false;
    this.scroll = { x: 0, y: 0 };
    this.scrollratio = { x: 0, y: 0 };
    this.cursorheight = 20;
    this.scrollvaluemax = 0;
    this.checkrtlmode = false;
    this.scrollrunning = false;
    this.scrollmom = false;
    this.observer = false;
    this.observerremover = false;
    do {
      this.id = "ascrail" + s++;
    } while (document.getElementById(this.id));
    this.rail = false;
    this.cursor = false;
    this.cursorfreezed = false;
    this.selectiondrag = false;
    this.zoom = false;
    this.zoomactive = false;
    this.hasfocus = false;
    this.hasmousefocus = false;
    this.visibility = true;
    this.locked = false;
    this.hidden = false;
    this.cursoractive = true;
    this.overflowx = a.opt.overflowx;
    this.overflowy = a.opt.overflowy;
    this.nativescrollingarea = false;
    this.checkarea = 0;
    this.events = [];
    this.saved = {};
    this.delaylist = {};
    this.synclist = {};
    this.lastdeltax = 0;
    this.lastdeltay = 0;
    this.detected = b();
    var c = u.extend({}, this.detected);
    this.canhwscroll = c.hastransform && a.opt.hwacceleration;
    this.ishwscroll = this.canhwscroll && a.haswrapper;
    this.istouchcapable = false;
    if (c.cantouch && c.ischrome && !c.isios && !c.isandroid) {
      this.istouchcapable = true;
      c.cantouch = false;
    }
    if (c.cantouch && c.ismozilla && !c.isios && !c.isandroid) {
      this.istouchcapable = true;
      c.cantouch = false;
    }
    if (!a.opt.enablemouselockapi) {
      c.hasmousecapture = false;
      c.haspointerlock = false;
    }
    this.delayed = function (e, t, n, r) {
      var i = a.delaylist[e];
      var s = new Date().getTime();
      if (!r && i && i.tt) return false;
      if (i && i.tt) clearTimeout(i.tt);
      if (i && i.last + n > s && !i.tt) {
        a.delaylist[e] = {
          last: s + n,
          tt: setTimeout(function () {
            a.delaylist[e].tt = 0;
            t.call();
          }, n),
        };
      } else if (!i || !i.tt) {
        a.delaylist[e] = { last: s, tt: 0 };
        setTimeout(function () {
          t.call();
        }, 0);
      }
    };
    this.debounced = function (e, t, n) {
      var r = a.delaylist[e];
      var i = new Date().getTime();
      a.delaylist[e] = t;
      if (!r) {
        setTimeout(function () {
          var t = a.delaylist[e];
          a.delaylist[e] = false;
          t.call();
        }, n);
      }
    };
    this.synched = function (e, t) {
      function n() {
        if (a.onsync) return;
        h(function () {
          a.onsync = false;
          for (e in a.synclist) {
            var t = a.synclist[e];
            if (t) t.call(a);
            a.synclist[e] = false;
          }
        });
        a.onsync = true;
      }
      a.synclist[e] = t;
      n();
      return e;
    };
    this.unsynched = function (e) {
      if (a.synclist[e]) a.synclist[e] = false;
    };
    this.css = function (e, t) {
      for (var n in t) {
        a.saved.css.push([e, n, e.css(n)]);
        e.css(n, t[n]);
      }
    };
    this.scrollTop = function (e) {
      return typeof e == "undefined" ? a.getScrollTop() : a.setScrollTop(e);
    };
    this.scrollLeft = function (e) {
      return typeof e == "undefined" ? a.getScrollLeft() : a.setScrollLeft(e);
    };
    BezierClass = function (e, t, n, r, i, s, o) {
      this.st = e;
      this.ed = t;
      this.spd = n;
      this.p1 = r || 0;
      this.p2 = i || 1;
      this.p3 = s || 0;
      this.p4 = o || 1;
      this.ts = new Date().getTime();
      this.df = this.ed - this.st;
    };
    BezierClass.prototype = {
      B2: function (e) {
        return 3 * e * e * (1 - e);
      },
      B3: function (e) {
        return 3 * e * (1 - e) * (1 - e);
      },
      B4: function (e) {
        return (1 - e) * (1 - e) * (1 - e);
      },
      getNow: function () {
        var e = new Date().getTime();
        var t = 1 - (e - this.ts) / this.spd;
        var n = this.B2(t) + this.B3(t) + this.B4(t);
        return t < 0 ? this.ed : this.st + Math.round(this.df * n);
      },
      update: function (e, t) {
        this.st = this.getNow();
        this.ed = e;
        this.spd = t;
        this.ts = new Date().getTime();
        this.df = this.ed - this.st;
        return this;
      },
    };
    if (this.ishwscroll) {
      this.doc.translate = { x: 0, y: 0, tx: "0px", ty: "0px" };
      if (c.hastranslate3d && c.isios)
        this.doc.css("-webkit-backface-visibility", "hidden");
      function d() {
        var e = a.doc.css(c.trstyle);
        if (e && e.substr(0, 6) == "matrix") {
          return e
            .replace(/^.*\((.*)\)$/g, "$1")
            .replace(/px/g, "")
            .split(/, +/);
        }
        return false;
      }
      this.getScrollTop = function (e) {
        if (!e) {
          var t = d();
          if (t) return t.length == 16 ? -t[13] : -t[5];
          if (a.timerscroll && a.timerscroll.bz)
            return a.timerscroll.bz.getNow();
        }
        return a.doc.translate.y;
      };
      this.getScrollLeft = function (e) {
        if (!e) {
          var t = d();
          if (t) return t.length == 16 ? -t[12] : -t[4];
          if (a.timerscroll && a.timerscroll.bh)
            return a.timerscroll.bh.getNow();
        }
        return a.doc.translate.x;
      };
      if (document.createEvent) {
        this.notifyScrollEvent = function (e) {
          var t = document.createEvent("UIEvents");
          t.initUIEvent("scroll", false, true, window, 1);
          e.dispatchEvent(t);
        };
      } else if (document.fireEvent) {
        this.notifyScrollEvent = function (e) {
          var t = document.createEventObject();
          e.fireEvent("onscroll");
          t.cancelBubble = true;
        };
      } else {
        this.notifyScrollEvent = function (e, t) {};
      }
      if (c.hastranslate3d && a.opt.enabletranslate3d) {
        this.setScrollTop = function (e, t) {
          a.doc.translate.y = e;
          a.doc.translate.ty = e * -1 + "px";
          a.doc.css(
            c.trstyle,
            "translate3d(" +
              a.doc.translate.tx +
              "," +
              a.doc.translate.ty +
              ",0px)"
          );
          if (!t) a.notifyScrollEvent(a.win[0]);
        };
        this.setScrollLeft = function (e, t) {
          a.doc.translate.x = e;
          a.doc.translate.tx = e * -1 + "px";
          a.doc.css(
            c.trstyle,
            "translate3d(" +
              a.doc.translate.tx +
              "," +
              a.doc.translate.ty +
              ",0px)"
          );
          if (!t) a.notifyScrollEvent(a.win[0]);
        };
      } else {
        this.setScrollTop = function (e, t) {
          a.doc.translate.y = e;
          a.doc.translate.ty = e * -1 + "px";
          a.doc.css(
            c.trstyle,
            "translate(" + a.doc.translate.tx + "," + a.doc.translate.ty + ")"
          );
          if (!t) a.notifyScrollEvent(a.win[0]);
        };
        this.setScrollLeft = function (e, t) {
          a.doc.translate.x = e;
          a.doc.translate.tx = e * -1 + "px";
          a.doc.css(
            c.trstyle,
            "translate(" + a.doc.translate.tx + "," + a.doc.translate.ty + ")"
          );
          if (!t) a.notifyScrollEvent(a.win[0]);
        };
      }
    } else {
      this.getScrollTop = function () {
        return a.docscroll.scrollTop();
      };
      this.setScrollTop = function (e) {
        return a.docscroll.scrollTop(e);
      };
      this.getScrollLeft = function () {
        return a.docscroll.scrollLeft();
      };
      this.setScrollLeft = function (e) {
        return a.docscroll.scrollLeft(e);
      };
    }
    this.getTarget = function (e) {
      if (!e) return false;
      if (e.target) return e.target;
      if (e.srcElement) return e.srcElement;
      return false;
    };
    this.hasParent = function (e, t) {
      if (!e) return false;
      var n = e.target || e.srcElement || e || false;
      while (n && n.id != t) {
        n = n.parentNode || false;
      }
      return n !== false;
    };
    var y = { thin: 1, medium: 3, thick: 5 };
    this.getOffset = function () {
      if (a.isfixed)
        return {
          top: parseFloat(a.win.css("top")),
          left: parseFloat(a.win.css("left")),
        };
      if (!a.viewport) return a.win.offset();
      var e = a.win.offset();
      var t = a.viewport.offset();
      return {
        top: e.top - t.top + a.viewport.scrollTop(),
        left: e.left - t.left + a.viewport.scrollLeft(),
      };
    };
    this.updateScrollBar = function (e) {
      if (a.ishwscroll) {
        a.rail.css({ height: a.win.innerHeight() });
        if (a.railh) a.railh.css({ width: a.win.innerWidth() });
      } else {
        var t = a.getOffset();
        var n = { top: t.top, left: t.left };
        n.top += w(a.win, "border-top-width", true);
        var r = (a.win.outerWidth() - a.win.innerWidth()) / 2;
        n.left += a.rail.align
          ? a.win.outerWidth() - w(a.win, "border-right-width") - a.rail.width
          : w(a.win, "border-left-width");
        var i = a.opt.railoffset;
        if (i) {
          if (i.top) n.top += i.top;
          if (a.rail.align && i.left) n.left += i.left;
        }
        if (!a.locked)
          a.rail.css({
            top: n.top,
            left: n.left,
            height: e ? e.h : a.win.innerHeight(),
          });
        if (a.zoom) {
          a.zoom.css({
            top: n.top + 1,
            left: a.rail.align == 1 ? n.left - 20 : n.left + a.rail.width + 4,
          });
        }
        if (a.railh && !a.locked) {
          var n = { top: t.top, left: t.left };
          var s = a.railh.align
            ? n.top +
              w(a.win, "border-top-width", true) +
              a.win.innerHeight() -
              a.railh.height
            : n.top + w(a.win, "border-top-width", true);
          var o = n.left + w(a.win, "border-left-width");
          a.railh.css({ top: s, left: o, width: a.railh.width });
        }
      }
    };
    this.doRailClick = function (e, t, n) {
      var r, i, s, o;
      if (a.locked) return;
      a.cancelEvent(e);
      if (t) {
        r = n ? a.doScrollLeft : a.doScrollTop;
        s = n
          ? (e.pageX - a.railh.offset().left - a.cursorwidth / 2) *
            a.scrollratio.x
          : (e.pageY - a.rail.offset().top - a.cursorheight / 2) *
            a.scrollratio.y;
        r(s);
      } else {
        r = n ? a.doScrollLeftBy : a.doScrollBy;
        s = n ? a.scroll.x : a.scroll.y;
        o = n ? e.pageX - a.railh.offset().left : e.pageY - a.rail.offset().top;
        i = n ? a.view.w : a.view.h;
        s >= o ? r(i) : r(-i);
      }
    };
    a.hasanimationframe = h;
    a.hascancelanimationframe = p;
    if (!a.hasanimationframe) {
      h = function (e) {
        return setTimeout(e, 15 - (Math.floor(+new Date() / 1e3) % 16));
      };
      p = clearInterval;
    } else if (!a.hascancelanimationframe)
      p = function () {
        a.cancelAnimationFrame = true;
      };
    this.init = function () {
      a.saved.css = [];
      if (c.isie7mobile) return true;
      if (c.isoperamini) return true;
      if (c.hasmstouch)
        a.css(a.ispage ? u("html") : a.win, { "-ms-touch-action": "none" });
      a.zindex = "auto";
      if (!a.ispage && a.opt.zindex == "auto") {
        a.zindex = v() || "auto";
      } else {
        a.zindex = a.opt.zindex;
      }
      if (!a.ispage && a.zindex != "auto") {
        if (a.zindex > o) o = a.zindex;
      }
      if (a.isie && a.zindex == 0 && a.opt.zindex == "auto") {
        a.zindex = "auto";
      }
      if (!a.ispage || (!c.cantouch && !c.isieold && !c.isie9mobile)) {
        var e = a.docscroll;
        if (a.ispage) e = a.haswrapper ? a.win : a.doc;
        if (!c.isie9mobile) a.css(e, { "overflow-y": "hidden" });
        if (a.ispage && c.isie7) {
          if (a.doc[0].nodeName == "BODY")
            a.css(u("html"), { "overflow-y": "hidden" });
          else if (a.doc[0].nodeName == "HTML")
            a.css(u("body"), { "overflow-y": "hidden" });
        }
        if (c.isios && !a.ispage && !a.haswrapper)
          a.css(u("body"), { "-webkit-overflow-scrolling": "touch" });
        var r = u(document.createElement("div"));
        r.css({
          position: "relative",
          top: 0,
          float: "right",
          width: a.opt.cursorwidth,
          height: "0px",
          "background-color": a.opt.cursorcolor,
          border: a.opt.cursorborder,
          "background-clip": "padding-box",
          "-webkit-border-radius": a.opt.cursorborderradius,
          "-moz-border-radius": a.opt.cursorborderradius,
          "border-radius": a.opt.cursorborderradius,
        });
        r.hborder = parseFloat(r.outerHeight() - r.innerHeight());
        a.cursor = r;
        var s = u(document.createElement("div"));
        s.attr("id", a.id);
        s.addClass("nicescroll-rails");
        var f,
          h,
          p = ["left", "right"];
        for (var d in p) {
          h = p[d];
          f = a.opt.railpadding[h];
          f ? s.css("padding-" + h, f + "px") : (a.opt.railpadding[h] = 0);
        }
        s.append(r);
        s.width =
          Math.max(parseFloat(a.opt.cursorwidth), r.outerWidth()) +
          a.opt.railpadding["left"] +
          a.opt.railpadding["right"];
        s.css({
          width: s.width + "px",
          zIndex: a.zindex,
          background: a.opt.background,
          cursor: "default",
        });
        s.visibility = true;
        s.scrollable = true;
        s.align = a.opt.railalign == "left" ? 0 : 1;
        a.rail = s;
        a.rail.drag = false;
        var g = false;
        if (a.opt.boxzoom && !a.ispage && !c.isieold) {
          g = document.createElement("div");
          a.bind(g, "click", a.doZoom);
          a.zoom = u(g);
          a.zoom.css({
            cursor: "pointer",
            "z-index": a.zindex,
            backgroundImage: "url(" + l + "zoomico.png)",
            height: 18,
            width: 18,
            backgroundPosition: "0px 0px",
          });
          if (a.opt.dblclickzoom) a.bind(a.win, "dblclick", a.doZoom);
          if (c.cantouch && a.opt.gesturezoom) {
            a.ongesturezoom = function (e) {
              if (e.scale > 1.5) a.doZoomIn(e);
              if (e.scale < 0.8) a.doZoomOut(e);
              return a.cancelEvent(e);
            };
            a.bind(a.win, "gestureend", a.ongesturezoom);
          }
        }
        a.railh = false;
        if (a.opt.horizrailenabled) {
          a.css(e, { "overflow-x": "hidden" });
          var r = u(document.createElement("div"));
          r.css({
            position: "relative",
            top: 0,
            height: a.opt.cursorwidth,
            width: "0px",
            "background-color": a.opt.cursorcolor,
            border: a.opt.cursorborder,
            "background-clip": "padding-box",
            "-webkit-border-radius": a.opt.cursorborderradius,
            "-moz-border-radius": a.opt.cursorborderradius,
            "border-radius": a.opt.cursorborderradius,
          });
          r.wborder = parseFloat(r.outerWidth() - r.innerWidth());
          a.cursorh = r;
          var y = u(document.createElement("div"));
          y.attr("id", a.id + "-hr");
          y.addClass("nicescroll-rails");
          y.height = Math.max(parseFloat(a.opt.cursorwidth), r.outerHeight());
          y.css({
            height: y.height + "px",
            zIndex: a.zindex,
            background: a.opt.background,
          });
          y.append(r);
          y.visibility = true;
          y.scrollable = true;
          y.align = a.opt.railvalign == "top" ? 0 : 1;
          a.railh = y;
          a.railh.drag = false;
        }
        if (a.ispage) {
          s.css({ position: "fixed", top: "0px", height: "100%" });
          s.align ? s.css({ right: "0px" }) : s.css({ left: "0px" });
          a.body.append(s);
          if (a.railh) {
            y.css({ position: "fixed", left: "0px", width: "100%" });
            y.align ? y.css({ bottom: "0px" }) : y.css({ top: "0px" });
            a.body.append(y);
          }
        } else {
          if (a.ishwscroll) {
            if (a.win.css("position") == "static")
              a.css(a.win, { position: "relative" });
            var b = a.win[0].nodeName == "HTML" ? a.body : a.win;
            if (a.zoom) {
              a.zoom.css({
                position: "absolute",
                top: 1,
                right: 0,
                "margin-right": s.width + 4,
              });
              b.append(a.zoom);
            }
            s.css({ position: "absolute", top: 0 });
            s.align ? s.css({ right: 0 }) : s.css({ left: 0 });
            b.append(s);
            if (y) {
              y.css({ position: "absolute", left: 0, bottom: 0 });
              y.align ? y.css({ bottom: 0 }) : y.css({ top: 0 });
              b.append(y);
            }
          } else {
            a.isfixed = a.win.css("position") == "fixed";
            var w = a.isfixed ? "fixed" : "absolute";
            if (!a.isfixed) a.viewport = a.getViewport(a.win[0]);
            if (a.viewport) {
              a.body = a.viewport;
              if (/relative|absolute/.test(a.viewport.css("position")) == false)
                a.css(a.viewport, { position: "relative" });
            }
            s.css({ position: w });
            if (a.zoom) a.zoom.css({ position: w });
            a.updateScrollBar();
            a.body.append(s);
            if (a.zoom) a.body.append(a.zoom);
            if (a.railh) {
              y.css({ position: w });
              a.body.append(y);
            }
          }
          if (c.isios)
            a.css(a.win, {
              "-webkit-tap-highlight-color": "rgba(0,0,0,0)",
              "-webkit-touch-callout": "none",
            });
          if (c.isie && a.opt.disableoutline) a.win.attr("hideFocus", "true");
          if (c.iswebkit && a.opt.disableoutline)
            a.win.css({ outline: "none" });
        }
        if (a.opt.autohidemode === false) {
          a.autohidedom = false;
          a.rail.css({ opacity: a.opt.cursoropacitymax });
          if (a.railh) a.railh.css({ opacity: a.opt.cursoropacitymax });
        } else if (a.opt.autohidemode === true) {
          a.autohidedom = u().add(a.rail);
          if (c.isie8) a.autohidedom = a.autohidedom.add(a.cursor);
          if (a.railh) a.autohidedom = a.autohidedom.add(a.railh);
          if (a.railh && c.isie8) a.autohidedom = a.autohidedom.add(a.cursorh);
        } else if (a.opt.autohidemode == "scroll") {
          a.autohidedom = u().add(a.rail);
          if (a.railh) a.autohidedom = a.autohidedom.add(a.railh);
        } else if (a.opt.autohidemode == "cursor") {
          a.autohidedom = u().add(a.cursor);
          if (a.railh) a.autohidedom = a.autohidedom.add(a.cursorh);
        } else if (a.opt.autohidemode == "hidden") {
          a.autohidedom = false;
          a.hide();
          a.locked = false;
        }
        if (c.isie9mobile) {
          a.scrollmom = new E(a);
          a.onmangotouch = function (e) {
            var t = a.getScrollTop();
            var n = a.getScrollLeft();
            if (t == a.scrollmom.lastscrolly && n == a.scrollmom.lastscrollx)
              return true;
            var r = t - a.mangotouch.sy;
            var i = n - a.mangotouch.sx;
            var s = Math.round(Math.sqrt(Math.pow(i, 2) + Math.pow(r, 2)));
            if (s == 0) return;
            var o = r < 0 ? -1 : 1;
            var u = i < 0 ? -1 : 1;
            var f = +new Date();
            if (a.mangotouch.lazy) clearTimeout(a.mangotouch.lazy);
            if (
              f - a.mangotouch.tm > 80 ||
              a.mangotouch.dry != o ||
              a.mangotouch.drx != u
            ) {
              a.scrollmom.stop();
              a.scrollmom.reset(n, t);
              a.mangotouch.sy = t;
              a.mangotouch.ly = t;
              a.mangotouch.sx = n;
              a.mangotouch.lx = n;
              a.mangotouch.dry = o;
              a.mangotouch.drx = u;
              a.mangotouch.tm = f;
            } else {
              a.scrollmom.stop();
              a.scrollmom.update(a.mangotouch.sx - i, a.mangotouch.sy - r);
              var l = f - a.mangotouch.tm;
              a.mangotouch.tm = f;
              var c = Math.max(
                Math.abs(a.mangotouch.ly - t),
                Math.abs(a.mangotouch.lx - n)
              );
              a.mangotouch.ly = t;
              a.mangotouch.lx = n;
              if (c > 2) {
                a.mangotouch.lazy = setTimeout(function () {
                  a.mangotouch.lazy = false;
                  a.mangotouch.dry = 0;
                  a.mangotouch.drx = 0;
                  a.mangotouch.tm = 0;
                  a.scrollmom.doMomentum(30);
                }, 100);
              }
            }
          };
          var S = a.getScrollTop();
          var x = a.getScrollLeft();
          a.mangotouch = {
            sy: S,
            ly: S,
            dry: 0,
            sx: x,
            lx: x,
            drx: 0,
            lazy: false,
            tm: 0,
          };
          a.bind(a.docscroll, "scroll", a.onmangotouch);
        } else {
          if (
            c.cantouch ||
            a.istouchcapable ||
            a.opt.touchbehavior ||
            c.hasmstouch
          ) {
            a.scrollmom = new E(a);
            a.ontouchstart = function (e) {
              if (e.pointerType && e.pointerType != 2) return false;
              if (!a.locked) {
                if (c.hasmstouch) {
                  var t = e.target ? e.target : false;
                  while (t) {
                    var n = u(t).getNiceScroll();
                    if (n.length > 0 && n[0].me == a.me) break;
                    if (n.length > 0) return false;
                    if (t.nodeName == "DIV" && t.id == a.id) break;
                    t = t.parentNode ? t.parentNode : false;
                  }
                }
                a.cancelScroll();
                var t = a.getTarget(e);
                if (t) {
                  var r = /INPUT/i.test(t.nodeName) && /range/i.test(t.type);
                  if (r) return a.stopPropagation(e);
                }
                if (!("clientX" in e) && "changedTouches" in e) {
                  e.clientX = e.changedTouches[0].clientX;
                  e.clientY = e.changedTouches[0].clientY;
                }
                if (a.forcescreen) {
                  var i = e;
                  var e = { original: e.original ? e.original : e };
                  e.clientX = i.screenX;
                  e.clientY = i.screenY;
                }
                a.rail.drag = {
                  x: e.clientX,
                  y: e.clientY,
                  sx: a.scroll.x,
                  sy: a.scroll.y,
                  st: a.getScrollTop(),
                  sl: a.getScrollLeft(),
                  pt: 2,
                  dl: false,
                };
                if (a.ispage || !a.opt.directionlockdeadzone) {
                  a.rail.drag.dl = "f";
                } else {
                  var s = { w: u(window).width(), h: u(window).height() };
                  var o = {
                    w: Math.max(
                      document.body.scrollWidth,
                      document.documentElement.scrollWidth
                    ),
                    h: Math.max(
                      document.body.scrollHeight,
                      document.documentElement.scrollHeight
                    ),
                  };
                  var f = Math.max(0, o.h - s.h);
                  var l = Math.max(0, o.w - s.w);
                  if (!a.rail.scrollable && a.railh.scrollable)
                    a.rail.drag.ck = f > 0 ? "v" : false;
                  else if (a.rail.scrollable && !a.railh.scrollable)
                    a.rail.drag.ck = l > 0 ? "h" : false;
                  else a.rail.drag.ck = false;
                  if (!a.rail.drag.ck) a.rail.drag.dl = "f";
                }
                if (a.opt.touchbehavior && a.isiframe && c.isie) {
                  var h = a.win.position();
                  a.rail.drag.x += h.left;
                  a.rail.drag.y += h.top;
                }
                a.hasmoving = false;
                a.lastmouseup = false;
                a.scrollmom.reset(e.clientX, e.clientY);
                if (!c.cantouch && !this.istouchcapable && !c.hasmstouch) {
                  var p = t ? /INPUT|SELECT|TEXTAREA/i.test(t.nodeName) : false;
                  if (!p) {
                    if (!a.ispage && c.hasmousecapture) t.setCapture();
                    return a.opt.touchbehavior
                      ? a.cancelEvent(e)
                      : a.stopPropagation(e);
                  }
                  if (/SUBMIT|CANCEL|BUTTON/i.test(u(t).attr("type"))) {
                    pc = { tg: t, click: false };
                    a.preventclick = pc;
                  }
                }
              }
            };
            a.ontouchend = function (e) {
              if (e.pointerType && e.pointerType != 2) return false;
              if (a.rail.drag && a.rail.drag.pt == 2) {
                a.scrollmom.doMomentum();
                a.rail.drag = false;
                if (a.hasmoving) {
                  a.hasmoving = false;
                  a.lastmouseup = true;
                  a.hideCursor();
                  if (c.hasmousecapture) document.releaseCapture();
                  if (!c.cantouch) return a.cancelEvent(e);
                }
              }
            };
            var T = a.opt.touchbehavior && a.isiframe && !c.hasmousecapture;
            a.ontouchmove = function (e, t) {
              if (e.pointerType && e.pointerType != 2) return false;
              if (a.rail.drag && a.rail.drag.pt == 2) {
                if (c.cantouch && typeof e.original == "undefined") return true;
                a.hasmoving = true;
                if (a.preventclick && !a.preventclick.click) {
                  a.preventclick.click = a.preventclick.tg.onclick || false;
                  a.preventclick.tg.onclick = a.onpreventclick;
                }
                var n = u.extend({ original: e }, e);
                e = n;
                if ("changedTouches" in e) {
                  e.clientX = e.changedTouches[0].clientX;
                  e.clientY = e.changedTouches[0].clientY;
                }
                if (a.forcescreen) {
                  var r = e;
                  var e = { original: e.original ? e.original : e };
                  e.clientX = r.screenX;
                  e.clientY = r.screenY;
                }
                var i = (ofy = 0);
                if (T && !t) {
                  var s = a.win.position();
                  i = -s.left;
                  ofy = -s.top;
                }
                var o = e.clientY + ofy;
                var f = o - a.rail.drag.y;
                var l = e.clientX + i;
                var h = l - a.rail.drag.x;
                var p = a.rail.drag.st - f;
                if (a.ishwscroll && a.opt.bouncescroll) {
                  if (p < 0) {
                    p = Math.round(p / 2);
                  } else if (p > a.page.maxh) {
                    p = a.page.maxh + Math.round((p - a.page.maxh) / 2);
                  }
                } else {
                  if (p < 0) {
                    p = 0;
                    o = 0;
                  }
                  if (p > a.page.maxh) {
                    p = a.page.maxh;
                    o = 0;
                  }
                }
                if (a.railh && a.railh.scrollable) {
                  var d = a.rail.drag.sl - h;
                  if (a.ishwscroll && a.opt.bouncescroll) {
                    if (d < 0) {
                      d = Math.round(d / 2);
                    } else if (d > a.page.maxw) {
                      d = a.page.maxw + Math.round((d - a.page.maxw) / 2);
                    }
                  } else {
                    if (d < 0) {
                      d = 0;
                      l = 0;
                    }
                    if (d > a.page.maxw) {
                      d = a.page.maxw;
                      l = 0;
                    }
                  }
                }
                var v = false;
                if (a.rail.drag.dl) {
                  v = true;
                  if (a.rail.drag.dl == "v") d = a.rail.drag.sl;
                  else if (a.rail.drag.dl == "h") p = a.rail.drag.st;
                } else {
                  var m = Math.abs(f);
                  var g = Math.abs(h);
                  var y = a.opt.directionlockdeadzone;
                  if (a.rail.drag.ck == "v") {
                    if (m > y && g <= m * 0.3) {
                      a.rail.drag = false;
                      return true;
                    } else if (g > y) {
                      a.rail.drag.dl = "f";
                      u("body").scrollTop(u("body").scrollTop());
                    }
                  } else if (a.rail.drag.ck == "h") {
                    if (g > y && m <= g * 0.3) {
                      a.rail.drag = false;
                      return true;
                    } else if (m > y) {
                      a.rail.drag.dl = "f";
                      u("body").scrollLeft(u("body").scrollLeft());
                    }
                  }
                }
                a.synched("touchmove", function () {
                  if (a.rail.drag && a.rail.drag.pt == 2) {
                    if (a.prepareTransition) a.prepareTransition(0);
                    if (a.rail.scrollable) a.setScrollTop(p);
                    a.scrollmom.update(l, o);
                    if (a.railh && a.railh.scrollable) {
                      a.setScrollLeft(d);
                      a.showCursor(p, d);
                    } else {
                      a.showCursor(p);
                    }
                    if (c.isie10) document.selection.clear();
                  }
                });
                if (c.ischrome && a.istouchcapable) v = false;
                if (v) return a.cancelEvent(e);
              }
            };
          }
          a.onmousedown = function (e, t) {
            if (a.rail.drag && a.rail.drag.pt != 1) return;
            if (a.locked) return a.cancelEvent(e);
            a.cancelScroll();
            a.rail.drag = {
              x: e.clientX,
              y: e.clientY,
              sx: a.scroll.x,
              sy: a.scroll.y,
              pt: 1,
              hr: !!t,
            };
            var n = a.getTarget(e);
            if (!a.ispage && c.hasmousecapture) n.setCapture();
            if (a.isiframe && !c.hasmousecapture) {
              a.saved["csspointerevents"] = a.doc.css("pointer-events");
              a.css(a.doc, { "pointer-events": "none" });
            }
            return a.cancelEvent(e);
          };
          a.onmouseup = function (e) {
            if (a.rail.drag) {
              if (c.hasmousecapture) document.releaseCapture();
              if (a.isiframe && !c.hasmousecapture)
                a.doc.css("pointer-events", a.saved["csspointerevents"]);
              if (a.rail.drag.pt != 1) return;
              a.rail.drag = false;
              return a.cancelEvent(e);
            }
          };
          a.onmousemove = function (e) {
            if (a.rail.drag) {
              if (a.rail.drag.pt != 1) return;
              if (c.ischrome && e.which == 0) return a.onmouseup(e);
              a.cursorfreezed = true;
              if (a.rail.drag.hr) {
                a.scroll.x = a.rail.drag.sx + (e.clientX - a.rail.drag.x);
                if (a.scroll.x < 0) a.scroll.x = 0;
                var t = a.scrollvaluemaxw;
                if (a.scroll.x > t) a.scroll.x = t;
              } else {
                a.scroll.y = a.rail.drag.sy + (e.clientY - a.rail.drag.y);
                if (a.scroll.y < 0) a.scroll.y = 0;
                var n = a.scrollvaluemax;
                if (a.scroll.y > n) a.scroll.y = n;
              }
              a.synched("mousemove", function () {
                if (a.rail.drag && a.rail.drag.pt == 1) {
                  a.showCursor();
                  if (a.rail.drag.hr)
                    a.doScrollLeft(
                      Math.round(a.scroll.x * a.scrollratio.x),
                      a.opt.cursordragspeed
                    );
                  else
                    a.doScrollTop(
                      Math.round(a.scroll.y * a.scrollratio.y),
                      a.opt.cursordragspeed
                    );
                }
              });
              return a.cancelEvent(e);
            }
          };
          if (c.cantouch || a.opt.touchbehavior) {
            a.onpreventclick = function (e) {
              if (a.preventclick) {
                a.preventclick.tg.onclick = a.preventclick.click;
                a.preventclick = false;
                return a.cancelEvent(e);
              }
            };
            a.bind(a.win, "mousedown", a.ontouchstart);
            a.onclick = c.isios
              ? false
              : function (e) {
                  if (a.lastmouseup) {
                    a.lastmouseup = false;
                    return a.cancelEvent(e);
                  } else {
                    return true;
                  }
                };
            if (a.opt.grabcursorenabled && c.cursorgrabvalue) {
              a.css(a.ispage ? a.doc : a.win, { cursor: c.cursorgrabvalue });
              a.css(a.rail, { cursor: c.cursorgrabvalue });
            }
          } else {
            function N(e) {
              if (!a.selectiondrag) return;
              if (e) {
                var t = a.win.outerHeight();
                var n = e.pageY - a.selectiondrag.top;
                if (n > 0 && n < t) n = 0;
                if (n >= t) n -= t;
                a.selectiondrag.df = n;
              }
              if (a.selectiondrag.df == 0) return;
              var r = -Math.floor(a.selectiondrag.df / 6) * 2;
              a.doScrollBy(r);
              a.debounced(
                "doselectionscroll",
                function () {
                  N();
                },
                50
              );
            }
            if ("getSelection" in document) {
              a.hasTextSelected = function () {
                return document.getSelection().rangeCount > 0;
              };
            } else if ("selection" in document) {
              a.hasTextSelected = function () {
                return document.selection.type != "None";
              };
            } else {
              a.hasTextSelected = function () {
                return false;
              };
            }
            a.onselectionstart = function (e) {
              if (a.ispage) return;
              a.selectiondrag = a.win.offset();
            };
            a.onselectionend = function (e) {
              a.selectiondrag = false;
            };
            a.onselectiondrag = function (e) {
              if (!a.selectiondrag) return;
              if (a.hasTextSelected())
                a.debounced(
                  "selectionscroll",
                  function () {
                    N(e);
                  },
                  250
                );
            };
          }
          if (c.hasmstouch) {
            a.css(a.rail, { "-ms-touch-action": "none" });
            a.css(a.cursor, { "-ms-touch-action": "none" });
            a.bind(a.win, "MSPointerDown", a.ontouchstart);
            a.bind(document, "MSPointerUp", a.ontouchend);
            a.bind(document, "MSPointerMove", a.ontouchmove);
            a.bind(a.cursor, "MSGestureHold", function (e) {
              e.preventDefault();
            });
            a.bind(a.cursor, "contextmenu", function (e) {
              e.preventDefault();
            });
          }
          if (this.istouchcapable) {
            a.bind(a.win, "touchstart", a.ontouchstart);
            a.bind(document, "touchend", a.ontouchend);
            a.bind(document, "touchcancel", a.ontouchend);
            a.bind(document, "touchmove", a.ontouchmove);
          }
          a.bind(a.cursor, "mousedown", a.onmousedown);
          a.bind(a.cursor, "mouseup", a.onmouseup);
          if (a.railh) {
            a.bind(a.cursorh, "mousedown", function (e) {
              a.onmousedown(e, true);
            });
            a.bind(a.cursorh, "mouseup", function (e) {
              if (a.rail.drag && a.rail.drag.pt == 2) return;
              a.rail.drag = false;
              a.hasmoving = false;
              a.hideCursor();
              if (c.hasmousecapture) document.releaseCapture();
              return a.cancelEvent(e);
            });
          }
          if (
            a.opt.cursordragontouch ||
            (!c.cantouch && !a.opt.touchbehavior)
          ) {
            a.rail.css({ cursor: "default" });
            a.railh && a.railh.css({ cursor: "default" });
            a.jqbind(a.rail, "mouseenter", function () {
              if (a.canshowonmouseevent) a.showCursor();
              a.rail.active = true;
            });
            a.jqbind(a.rail, "mouseleave", function () {
              a.rail.active = false;
              if (!a.rail.drag) a.hideCursor();
            });
            if (a.opt.sensitiverail) {
              a.bind(a.rail, "click", function (e) {
                a.doRailClick(e, false, false);
              });
              a.bind(a.rail, "dblclick", function (e) {
                a.doRailClick(e, true, false);
              });
              a.bind(a.cursor, "click", function (e) {
                a.cancelEvent(e);
              });
              a.bind(a.cursor, "dblclick", function (e) {
                a.cancelEvent(e);
              });
            }
            if (a.railh) {
              a.jqbind(a.railh, "mouseenter", function () {
                if (a.canshowonmouseevent) a.showCursor();
                a.rail.active = true;
              });
              a.jqbind(a.railh, "mouseleave", function () {
                a.rail.active = false;
                if (!a.rail.drag) a.hideCursor();
              });
              if (a.opt.sensitiverail) {
                a.bind(a.railh, "click", function (e) {
                  a.doRailClick(e, false, true);
                });
                a.bind(a.railh, "dblclick", function (e) {
                  a.doRailClick(e, true, true);
                });
                a.bind(a.cursorh, "click", function (e) {
                  a.cancelEvent(e);
                });
                a.bind(a.cursorh, "dblclick", function (e) {
                  a.cancelEvent(e);
                });
              }
            }
          }
          if (!c.cantouch && !a.opt.touchbehavior) {
            a.bind(
              c.hasmousecapture ? a.win : document,
              "mouseup",
              a.onmouseup
            );
            a.bind(document, "mousemove", a.onmousemove);
            if (a.onclick) a.bind(document, "click", a.onclick);
            if (!a.ispage && a.opt.enablescrollonselection) {
              a.bind(a.win[0], "mousedown", a.onselectionstart);
              a.bind(document, "mouseup", a.onselectionend);
              a.bind(a.cursor, "mouseup", a.onselectionend);
              if (a.cursorh) a.bind(a.cursorh, "mouseup", a.onselectionend);
              a.bind(document, "mousemove", a.onselectiondrag);
            }
            if (a.zoom) {
              a.jqbind(a.zoom, "mouseenter", function () {
                if (a.canshowonmouseevent) a.showCursor();
                a.rail.active = true;
              });
              a.jqbind(a.zoom, "mouseleave", function () {
                a.rail.active = false;
                if (!a.rail.drag) a.hideCursor();
              });
            }
          } else {
            a.bind(
              c.hasmousecapture ? a.win : document,
              "mouseup",
              a.ontouchend
            );
            a.bind(document, "mousemove", a.ontouchmove);
            if (a.onclick) a.bind(document, "click", a.onclick);
            if (a.opt.cursordragontouch) {
              a.bind(a.cursor, "mousedown", a.onmousedown);
              a.bind(a.cursor, "mousemove", a.onmousemove);
              a.cursorh && a.bind(a.cursorh, "mousedown", a.onmousedown);
              a.cursorh && a.bind(a.cursorh, "mousemove", a.onmousemove);
            }
          }
          if (a.opt.enablemousewheel) {
            if (!a.isiframe)
              a.bind(
                c.isie && a.ispage ? document : a.win,
                "mousewheel",
                a.onmousewheel
              );
            a.bind(a.rail, "mousewheel", a.onmousewheel);
            if (a.railh) a.bind(a.railh, "mousewheel", a.onmousewheelhr);
          }
          if (
            !a.ispage &&
            !c.cantouch &&
            !/HTML|BODY/.test(a.win[0].nodeName)
          ) {
            if (!a.win.attr("tabindex")) a.win.attr({ tabindex: i++ });
            a.jqbind(a.win, "focus", function (e) {
              t = a.getTarget(e).id || true;
              a.hasfocus = true;
              if (a.canshowonmouseevent) a.noticeCursor();
            });
            a.jqbind(a.win, "blur", function (e) {
              t = false;
              a.hasfocus = false;
            });
            a.jqbind(a.win, "mouseenter", function (e) {
              n = a.getTarget(e).id || true;
              a.hasmousefocus = true;
              if (a.canshowonmouseevent) a.noticeCursor();
            });
            a.jqbind(a.win, "mouseleave", function () {
              n = false;
              a.hasmousefocus = false;
            });
          }
        }
        a.onkeypress = function (e) {
          if (a.locked && a.page.maxh == 0) return true;
          e = e ? e : window.e;
          var r = a.getTarget(e);
          if (r && /INPUT|TEXTAREA|SELECT|OPTION/.test(r.nodeName)) {
            var i = r.getAttribute("type") || r.type || false;
            if (!i || !/submit|button|cancel/i.tp) return true;
          }
          if (a.hasfocus || (a.hasmousefocus && !t) || (a.ispage && !t && !n)) {
            var s = e.keyCode;
            if (a.locked && s != 27) return a.cancelEvent(e);
            var o = e.ctrlKey || false;
            var u = e.shiftKey || false;
            var f = false;
            switch (s) {
              case 38:
              case 63233:
                a.doScrollBy(24 * 3);
                f = true;
                break;
              case 40:
              case 63235:
                a.doScrollBy(-24 * 3);
                f = true;
                break;
              case 37:
              case 63232:
                if (a.railh) {
                  o ? a.doScrollLeft(0) : a.doScrollLeftBy(24 * 3);
                  f = true;
                }
                break;
              case 39:
              case 63234:
                if (a.railh) {
                  o ? a.doScrollLeft(a.page.maxw) : a.doScrollLeftBy(-24 * 3);
                  f = true;
                }
                break;
              case 33:
              case 63276:
                a.doScrollBy(a.view.h);
                f = true;
                break;
              case 34:
              case 63277:
                a.doScrollBy(-a.view.h);
                f = true;
                break;
              case 36:
              case 63273:
                a.railh && o ? a.doScrollPos(0, 0) : a.doScrollTo(0);
                f = true;
                break;
              case 35:
              case 63275:
                a.railh && o
                  ? a.doScrollPos(a.page.maxw, a.page.maxh)
                  : a.doScrollTo(a.page.maxh);
                f = true;
                break;
              case 32:
                if (a.opt.spacebarenabled) {
                  u ? a.doScrollBy(a.view.h) : a.doScrollBy(-a.view.h);
                  f = true;
                }
                break;
              case 27:
                if (a.zoomactive) {
                  a.doZoom();
                  f = true;
                }
                break;
            }
            if (f) return a.cancelEvent(e);
          }
        };
        if (a.opt.enablekeyboard)
          a.bind(
            document,
            c.isopera && !c.isopera12 ? "keypress" : "keydown",
            a.onkeypress
          );
        a.bind(window, "resize", a.lazyResize);
        a.bind(window, "orientationchange", a.lazyResize);
        a.bind(window, "load", a.lazyResize);
        if (c.ischrome && !a.ispage && !a.haswrapper) {
          var C = a.win.attr("style");
          var k = parseFloat(a.win.css("width")) + 1;
          a.win.css("width", k);
          a.synched("chromefix", function () {
            a.win.attr("style", C);
          });
        }
        a.onAttributeChange = function (e) {
          a.lazyResize(250);
        };
        if (!a.ispage && !a.haswrapper) {
          if (m !== false) {
            a.observer = new m(function (e) {
              e.forEach(a.onAttributeChange);
            });
            a.observer.observe(a.win[0], {
              childList: true,
              characterData: false,
              attributes: true,
              subtree: false,
            });
            a.observerremover = new m(function (e) {
              e.forEach(function (e) {
                if (e.removedNodes.length > 0) {
                  for (var t in e.removedNodes) {
                    if (e.removedNodes[t] == a.win[0]) return a.remove();
                  }
                }
              });
            });
            a.observerremover.observe(a.win[0].parentNode, {
              childList: true,
              characterData: false,
              attributes: false,
              subtree: false,
            });
          } else {
            a.bind(
              a.win,
              c.isie && !c.isie9 ? "propertychange" : "DOMAttrModified",
              a.onAttributeChange
            );
            if (c.isie9)
              a.win[0].attachEvent("onpropertychange", a.onAttributeChange);
            a.bind(a.win, "DOMNodeRemoved", function (e) {
              if (e.target == a.win[0]) a.remove();
            });
          }
        }
        if (!a.ispage && a.opt.boxzoom) a.bind(window, "resize", a.resizeZoom);
        if (a.istextarea) a.bind(a.win, "mouseup", a.lazyResize);
        a.checkrtlmode = true;
        a.lazyResize(30);
      }
      if (this.doc[0].nodeName == "IFRAME") {
        function L(e) {
          a.iframexd = false;
          try {
            var t =
              "contentDocument" in this
                ? this.contentDocument
                : this.contentWindow.document;
            var n = t.domain;
          } catch (e) {
            a.iframexd = true;
            t = false;
          }
          if (a.iframexd) {
            if ("console" in window)
              console.log("NiceScroll error: policy restriced iframe");
            return true;
          }
          a.forcescreen = true;
          if (a.isiframe) {
            a.iframe = {
              doc: u(t),
              html: a.doc.contents().find("html")[0],
              body: a.doc.contents().find("body")[0],
            };
            a.getContentSize = function () {
              return {
                w: Math.max(
                  a.iframe.html.scrollWidth,
                  a.iframe.body.scrollWidth
                ),
                h: Math.max(
                  a.iframe.html.scrollHeight,
                  a.iframe.body.scrollHeight
                ),
              };
            };
            a.docscroll = u(a.iframe.body);
          }
          if (!c.isios && a.opt.iframeautoresize && !a.isiframe) {
            a.win.scrollTop(0);
            a.doc.height("");
            var r = Math.max(
              t.getElementsByTagName("html")[0].scrollHeight,
              t.body.scrollHeight
            );
            a.doc.height(r);
          }
          a.lazyResize(30);
          if (c.isie7) a.css(u(a.iframe.html), { "overflow-y": "hidden" });
          a.css(u(a.iframe.body), { "overflow-y": "hidden" });
          if (c.isios && a.haswrapper) {
            a.css(u(t.body), { "-webkit-transform": "translate3d(0,0,0)" });
            console.log(1);
          }
          if ("contentWindow" in this) {
            a.bind(this.contentWindow, "scroll", a.onscroll);
          } else {
            a.bind(t, "scroll", a.onscroll);
          }
          if (a.opt.enablemousewheel) {
            a.bind(t, "mousewheel", a.onmousewheel);
          }
          if (a.opt.enablekeyboard)
            a.bind(t, c.isopera ? "keypress" : "keydown", a.onkeypress);
          if (c.cantouch || a.opt.touchbehavior) {
            a.bind(t, "mousedown", a.ontouchstart);
            a.bind(t, "mousemove", function (e) {
              a.ontouchmove(e, true);
            });
            if (a.opt.grabcursorenabled && c.cursorgrabvalue)
              a.css(u(t.body), { cursor: c.cursorgrabvalue });
          }
          a.bind(t, "mouseup", a.ontouchend);
          if (a.zoom) {
            if (a.opt.dblclickzoom) a.bind(t, "dblclick", a.doZoom);
            if (a.ongesturezoom) a.bind(t, "gestureend", a.ongesturezoom);
          }
        }
        if (this.doc[0].readyState && this.doc[0].readyState == "complete") {
          setTimeout(function () {
            L.call(a.doc[0], false);
          }, 500);
        }
        a.bind(this.doc, "load", L);
      }
    };
    this.showCursor = function (e, t) {
      if (a.cursortimeout) {
        clearTimeout(a.cursortimeout);
        a.cursortimeout = 0;
      }
      if (!a.rail) return;
      if (a.autohidedom) {
        a.autohidedom.stop().css({ opacity: a.opt.cursoropacitymax });
        a.cursoractive = true;
      }
      if (!a.rail.drag || a.rail.drag.pt != 1) {
        if (typeof e != "undefined" && e !== false) {
          a.scroll.y = Math.round((e * 1) / a.scrollratio.y);
        }
        if (typeof t != "undefined") {
          a.scroll.x = Math.round((t * 1) / a.scrollratio.x);
        }
      }
      a.cursor.css({ height: a.cursorheight, top: a.scroll.y });
      if (a.cursorh) {
        !a.rail.align && a.rail.visibility
          ? a.cursorh.css({
              width: a.cursorwidth,
              left: a.scroll.x + a.rail.width,
            })
          : a.cursorh.css({ width: a.cursorwidth, left: a.scroll.x });
        a.cursoractive = true;
      }
      if (a.zoom) a.zoom.stop().css({ opacity: a.opt.cursoropacitymax });
    };
    this.hideCursor = function (e) {
      if (a.cursortimeout) return;
      if (!a.rail) return;
      if (!a.autohidedom) return;
      a.cursortimeout = setTimeout(function () {
        if (!a.rail.active || !a.showonmouseevent) {
          a.autohidedom.stop().animate({ opacity: a.opt.cursoropacitymin });
          if (a.zoom)
            a.zoom.stop().animate({ opacity: a.opt.cursoropacitymin });
          a.cursoractive = false;
        }
        a.cursortimeout = 0;
      }, e || a.opt.hidecursordelay);
    };
    this.noticeCursor = function (e, t, n) {
      a.showCursor(t, n);
      if (!a.rail.active) a.hideCursor(e);
    };
    this.getContentSize = a.ispage
      ? function () {
          return {
            w: Math.max(
              document.body.scrollWidth,
              document.documentElement.scrollWidth
            ),
            h: Math.max(
              document.body.scrollHeight,
              document.documentElement.scrollHeight
            ),
          };
        }
      : a.haswrapper
      ? function () {
          return {
            w:
              a.doc.outerWidth() +
              parseInt(a.win.css("paddingLeft")) +
              parseInt(a.win.css("paddingRight")),
            h:
              a.doc.outerHeight() +
              parseInt(a.win.css("paddingTop")) +
              parseInt(a.win.css("paddingBottom")),
          };
        }
      : function () {
          return {
            w: a.docscroll[0].scrollWidth,
            h: a.docscroll[0].scrollHeight,
          };
        };
    this.onResize = function (e, t) {
      if (!a.win) return false;
      if (!a.haswrapper && !a.ispage) {
        if (a.win.css("display") == "none") {
          if (a.visibility) a.hideRail().hideRailHr();
          return false;
        } else {
          if (!a.hidden && !a.visibility) a.showRail().showRailHr();
        }
      }
      var n = a.page.maxh;
      var r = a.page.maxw;
      var i = { h: a.view.h, w: a.view.w };
      a.view = {
        w: a.ispage ? a.win.width() : parseInt(a.win[0].clientWidth),
        h: a.ispage ? a.win.height() : parseInt(a.win[0].clientHeight),
      };
      a.page = t ? t : a.getContentSize();
      a.page.maxh = Math.max(0, a.page.h - a.view.h);
      a.page.maxw = Math.max(0, a.page.w - a.view.w);
      if (a.page.maxh == n && a.page.maxw == r && a.view.w == i.w) {
        if (!a.ispage) {
          var s = a.win.offset();
          if (a.lastposition) {
            var o = a.lastposition;
            if (o.top == s.top && o.left == s.left) return a;
          }
          a.lastposition = s;
        } else {
          return a;
        }
      }
      if (a.page.maxh == 0) {
        a.hideRail();
        a.scrollvaluemax = 0;
        a.scroll.y = 0;
        a.scrollratio.y = 0;
        a.cursorheight = 0;
        a.setScrollTop(0);
        a.rail.scrollable = false;
      } else {
        a.rail.scrollable = true;
      }
      if (a.page.maxw == 0) {
        a.hideRailHr();
        a.scrollvaluemaxw = 0;
        a.scroll.x = 0;
        a.scrollratio.x = 0;
        a.cursorwidth = 0;
        a.setScrollLeft(0);
        a.railh.scrollable = false;
      } else {
        a.railh.scrollable = true;
      }
      a.locked = a.page.maxh == 0 && a.page.maxw == 0;
      if (a.locked) {
        if (!a.ispage) a.updateScrollBar(a.view);
        return false;
      }
      if (!a.hidden && !a.visibility) {
        a.showRail().showRailHr();
      } else if (!a.hidden && !a.railh.visibility) a.showRailHr();
      if (a.istextarea && a.win.css("resize") && a.win.css("resize") != "none")
        a.view.h -= 20;
      a.cursorheight = Math.min(
        a.view.h,
        Math.round(a.view.h * (a.view.h / a.page.h))
      );
      a.cursorheight = a.opt.cursorfixedheight
        ? a.opt.cursorfixedheight
        : Math.max(a.opt.cursorminheight, a.cursorheight);
      a.cursorwidth = Math.min(
        a.view.w,
        Math.round(a.view.w * (a.view.w / a.page.w))
      );
      a.cursorwidth = a.opt.cursorfixedheight
        ? a.opt.cursorfixedheight
        : Math.max(a.opt.cursorminheight, a.cursorwidth);
      a.scrollvaluemax = a.view.h - a.cursorheight - a.cursor.hborder;
      if (a.railh) {
        a.railh.width = a.page.maxh > 0 ? a.view.w - a.rail.width : a.view.w;
        a.scrollvaluemaxw = a.railh.width - a.cursorwidth - a.cursorh.wborder;
      }
      if (a.checkrtlmode && a.railh) {
        a.checkrtlmode = false;
        if (a.opt.rtlmode && a.scroll.x == 0) a.setScrollLeft(a.page.maxw);
      }
      if (!a.ispage) a.updateScrollBar(a.view);
      a.scrollratio = {
        x: a.page.maxw / a.scrollvaluemaxw,
        y: a.page.maxh / a.scrollvaluemax,
      };
      var u = a.getScrollTop();
      if (u > a.page.maxh) {
        a.doScrollTop(a.page.maxh);
      } else {
        a.scroll.y = Math.round(a.getScrollTop() * (1 / a.scrollratio.y));
        a.scroll.x = Math.round(a.getScrollLeft() * (1 / a.scrollratio.x));
        if (a.cursoractive) a.noticeCursor();
      }
      if (a.scroll.y && a.getScrollTop() == 0)
        a.doScrollTo(Math.floor(a.scroll.y * a.scrollratio.y));
      return a;
    };
    this.resize = a.onResize;
    this.lazyResize = function (e) {
      e = isNaN(e) ? 30 : e;
      a.delayed("resize", a.resize, e);
      return a;
    };
    this._bind = function (e, t, n, r) {
      a.events.push({ e: e, n: t, f: n, b: r, q: false });
      if (e.addEventListener) {
        e.addEventListener(t, n, r || false);
      } else if (e.attachEvent) {
        e.attachEvent("on" + t, n);
      } else {
        e["on" + t] = n;
      }
    };
    this.jqbind = function (e, t, n) {
      a.events.push({ e: e, n: t, f: n, q: true });
      u(e).bind(t, n);
    };
    this.bind = function (e, t, n, r) {
      var i = "jquery" in e ? e[0] : e;
      if (t == "mousewheel") {
        if ("onwheel" in a.win) {
          a._bind(i, "wheel", n, r || false);
        } else {
          var s =
            typeof document.onmousewheel != "undefined"
              ? "mousewheel"
              : "DOMMouseScroll";
          S(i, s, n, r || false);
          if (s == "DOMMouseScroll") S(i, "MozMousePixelScroll", n, r || false);
        }
      } else if (i.addEventListener) {
        if (c.cantouch && /mouseup|mousedown|mousemove/.test(t)) {
          var o =
            t == "mousedown"
              ? "touchstart"
              : t == "mouseup"
              ? "touchend"
              : "touchmove";
          a._bind(
            i,
            o,
            function (e) {
              if (e.touches) {
                if (e.touches.length < 2) {
                  var t = e.touches.length ? e.touches[0] : e;
                  t.original = e;
                  n.call(this, t);
                }
              } else if (e.changedTouches) {
                var t = e.changedTouches[0];
                t.original = e;
                n.call(this, t);
              }
            },
            r || false
          );
        }
        a._bind(i, t, n, r || false);
        if (c.cantouch && t == "mouseup")
          a._bind(i, "touchcancel", n, r || false);
      } else {
        a._bind(i, t, function (e) {
          e = e || window.event || false;
          if (e) {
            if (e.srcElement) e.target = e.srcElement;
          }
          if (!("pageY" in e)) {
            e.pageX = e.clientX + document.documentElement.scrollLeft;
            e.pageY = e.clientY + document.documentElement.scrollTop;
          }
          return n.call(i, e) === false || r === false
            ? a.cancelEvent(e)
            : true;
        });
      }
    };
    this._unbind = function (e, t, n, r) {
      if (e.removeEventListener) {
        e.removeEventListener(t, n, r);
      } else if (e.detachEvent) {
        e.detachEvent("on" + t, n);
      } else {
        e["on" + t] = false;
      }
    };
    this.unbindAll = function () {
      for (var e = 0; e < a.events.length; e++) {
        var t = a.events[e];
        t.q ? t.e.unbind(t.n, t.f) : a._unbind(t.e, t.n, t.f, t.b);
      }
    };
    this.cancelEvent = function (e) {
      var e = e.original ? e.original : e ? e : window.event || false;
      if (!e) return false;
      if (e.preventDefault) e.preventDefault();
      if (e.stopPropagation) e.stopPropagation();
      if (e.preventManipulation) e.preventManipulation();
      e.cancelBubble = true;
      e.cancel = true;
      e.returnValue = false;
      return false;
    };
    this.stopPropagation = function (e) {
      var e = e.original ? e.original : e ? e : window.event || false;
      if (!e) return false;
      if (e.stopPropagation) return e.stopPropagation();
      if (e.cancelBubble) e.cancelBubble = true;
      return false;
    };
    this.showRail = function () {
      if (a.page.maxh != 0 && (a.ispage || a.win.css("display") != "none")) {
        a.visibility = true;
        a.rail.visibility = true;
        a.rail.css("display", "block");
      }
      return a;
    };
    this.showRailHr = function () {
      if (!a.railh) return a;
      if (a.page.maxw != 0 && (a.ispage || a.win.css("display") != "none")) {
        a.railh.visibility = true;
        a.railh.css("display", "block");
      }
      return a;
    };
    this.hideRail = function () {
      a.visibility = false;
      a.rail.visibility = false;
      a.rail.css("display", "none");
      return a;
    };
    this.hideRailHr = function () {
      if (!a.railh) return a;
      a.railh.visibility = false;
      a.railh.css("display", "none");
      return a;
    };
    this.show = function () {
      a.hidden = false;
      a.locked = false;
      return a.showRail().showRailHr();
    };
    this.hide = function () {
      a.hidden = true;
      a.locked = true;
      return a.hideRail().hideRailHr();
    };
    this.toggle = function () {
      return a.hidden ? a.show() : a.hide();
    };
    this.remove = function () {
      a.stop();
      if (a.cursortimeout) clearTimeout(a.cursortimeout);
      a.doZoomOut();
      a.unbindAll();
      if (c.isie9)
        a.win[0].detachEvent("onpropertychange", a.onAttributeChange);
      if (a.observer !== false) a.observer.disconnect();
      if (a.observerremover !== false) a.observerremover.disconnect();
      a.events = null;
      if (a.cursor) {
        a.cursor.remove();
      }
      if (a.cursorh) {
        a.cursorh.remove();
      }
      if (a.rail) {
        a.rail.remove();
      }
      if (a.railh) {
        a.railh.remove();
      }
      if (a.zoom) {
        a.zoom.remove();
      }
      for (var e = 0; e < a.saved.css.length; e++) {
        var t = a.saved.css[e];
        t[0].css(t[1], typeof t[2] == "undefined" ? "" : t[2]);
      }
      a.saved = false;
      a.me.data("__nicescroll", "");
      var n = u.nicescroll;
      n.each(function (e) {
        if (!this) return;
        if (this.id === a.id) {
          delete n[e];
          for (var t = ++e; t < n.length; t++, e++) n[e] = n[t];
          n.length--;
          if (n.length) delete n[n.length];
        }
      });
      for (var r in a) {
        a[r] = null;
        delete a[r];
      }
      a = null;
    };
    this.scrollstart = function (e) {
      this.onscrollstart = e;
      return a;
    };
    this.scrollend = function (e) {
      this.onscrollend = e;
      return a;
    };
    this.scrollcancel = function (e) {
      this.onscrollcancel = e;
      return a;
    };
    this.zoomin = function (e) {
      this.onzoomin = e;
      return a;
    };
    this.zoomout = function (e) {
      this.onzoomout = e;
      return a;
    };
    this.isScrollable = function (e) {
      var t = e.target ? e.target : e;
      if (t.nodeName == "OPTION") return true;
      while (t && t.nodeType == 1 && !/BODY|HTML/.test(t.nodeName)) {
        var n = u(t);
        var r =
          n.css("overflowY") || n.css("overflowX") || n.css("overflow") || "";
        if (/scroll|auto/.test(r)) return t.clientHeight != t.scrollHeight;
        t = t.parentNode ? t.parentNode : false;
      }
      return false;
    };
    this.getViewport = function (e) {
      var t = e && e.parentNode ? e.parentNode : false;
      while (t && t.nodeType == 1 && !/BODY|HTML/.test(t.nodeName)) {
        var n = u(t);
        var r =
          n.css("overflowY") || n.css("overflowX") || n.css("overflow") || "";
        if (/scroll|auto/.test(r) && t.clientHeight != t.scrollHeight) return n;
        if (n.getNiceScroll().length > 0) return n;
        t = t.parentNode ? t.parentNode : false;
      }
      return false;
    };
    this.onmousewheel = function (e) {
      if (a.locked) {
        a.debounced("checkunlock", a.resize, 250);
        return true;
      }
      if (a.rail.drag) return a.cancelEvent(e);
      if (a.opt.oneaxismousemode == "auto" && e.deltaX != 0)
        a.opt.oneaxismousemode = false;
      if (a.opt.oneaxismousemode && e.deltaX == 0) {
        if (!a.rail.scrollable) {
          if (a.railh && a.railh.scrollable) {
            return a.onmousewheelhr(e);
          } else {
            return true;
          }
        }
      }
      var t = +new Date();
      var n = false;
      if (a.opt.preservenativescrolling && a.checkarea + 600 < t) {
        a.nativescrollingarea = a.isScrollable(e);
        n = true;
      }
      a.checkarea = t;
      if (a.nativescrollingarea) return true;
      var r = x(e, false, n);
      if (r) a.checkarea = 0;
      return r;
    };
    this.onmousewheelhr = function (e) {
      if (a.locked || !a.railh.scrollable) return true;
      if (a.rail.drag) return a.cancelEvent(e);
      var t = +new Date();
      var n = false;
      if (a.opt.preservenativescrolling && a.checkarea + 600 < t) {
        a.nativescrollingarea = a.isScrollable(e);
        n = true;
      }
      a.checkarea = t;
      if (a.nativescrollingarea) return true;
      if (a.locked) return a.cancelEvent(e);
      return x(e, true, n);
    };
    this.stop = function () {
      a.cancelScroll();
      if (a.scrollmon) a.scrollmon.stop();
      a.cursorfreezed = false;
      a.scroll.y = Math.round(a.getScrollTop() * (1 / a.scrollratio.y));
      a.noticeCursor();
      return a;
    };
    this.getTransitionSpeed = function (e) {
      var t = Math.round(a.opt.scrollspeed * 10);
      var n = Math.min(t, Math.round((e / 20) * a.opt.scrollspeed));
      return n > 20 ? n : 0;
    };
    if (!a.opt.smoothscroll) {
      this.doScrollLeft = function (e, t) {
        var n = a.getScrollTop();
        a.doScrollPos(e, n, t);
      };
      this.doScrollTop = function (e, t) {
        var n = a.getScrollLeft();
        a.doScrollPos(n, e, t);
      };
      this.doScrollPos = function (e, t, n) {
        var r = e > a.page.maxw ? a.page.maxw : e;
        if (r < 0) r = 0;
        var i = t > a.page.maxh ? a.page.maxh : t;
        if (i < 0) i = 0;
        a.synched("scroll", function () {
          a.setScrollTop(i);
          a.setScrollLeft(r);
        });
      };
      this.cancelScroll = function () {};
    } else if (a.ishwscroll && c.hastransition && a.opt.usetransition) {
      this.prepareTransition = function (e, t) {
        var n = t ? (e > 20 ? e : 0) : a.getTransitionSpeed(e);
        var r = n ? c.prefixstyle + "transform " + n + "ms ease-out" : "";
        if (!a.lasttransitionstyle || a.lasttransitionstyle != r) {
          a.lasttransitionstyle = r;
          a.doc.css(c.transitionstyle, r);
        }
        return n;
      };
      this.doScrollLeft = function (e, t) {
        var n = a.scrollrunning ? a.newscrolly : a.getScrollTop();
        a.doScrollPos(e, n, t);
      };
      this.doScrollTop = function (e, t) {
        var n = a.scrollrunning ? a.newscrollx : a.getScrollLeft();
        a.doScrollPos(n, e, t);
      };
      this.doScrollPos = function (e, t, n) {
        var r = a.getScrollTop();
        var i = a.getScrollLeft();
        if (
          (a.newscrolly - r) * (t - r) < 0 ||
          (a.newscrollx - i) * (e - i) < 0
        )
          a.cancelScroll();
        if (a.opt.bouncescroll == false) {
          if (t < 0) t = 0;
          else if (t > a.page.maxh) t = a.page.maxh;
          if (e < 0) e = 0;
          else if (e > a.page.maxw) e = a.page.maxw;
        }
        if (a.scrollrunning && e == a.newscrollx && t == a.newscrolly)
          return false;
        a.newscrolly = t;
        a.newscrollx = e;
        a.newscrollspeed = n || false;
        if (a.timer) return false;
        a.timer = setTimeout(function () {
          var n = a.getScrollTop();
          var r = a.getScrollLeft();
          var i = {};
          i.x = e - r;
          i.y = t - n;
          i.px = r;
          i.py = n;
          var s = Math.round(Math.sqrt(Math.pow(i.x, 2) + Math.pow(i.y, 2)));
          var o =
            a.newscrollspeed && a.newscrollspeed > 1
              ? a.newscrollspeed
              : a.getTransitionSpeed(s);
          if (a.newscrollspeed && a.newscrollspeed <= 1) o *= a.newscrollspeed;
          a.prepareTransition(o, true);
          if (a.timerscroll && a.timerscroll.tm)
            clearInterval(a.timerscroll.tm);
          if (o > 0) {
            if (!a.scrollrunning && a.onscrollstart) {
              var u = {
                type: "scrollstart",
                current: { x: r, y: n },
                request: { x: e, y: t },
                end: { x: a.newscrollx, y: a.newscrolly },
                speed: o,
              };
              a.onscrollstart.call(a, u);
            }
            if (c.transitionend) {
              if (!a.scrollendtrapped) {
                a.scrollendtrapped = true;
                a.bind(a.doc, c.transitionend, a.onScrollEnd, false);
              }
            } else {
              if (a.scrollendtrapped) clearTimeout(a.scrollendtrapped);
              a.scrollendtrapped = setTimeout(a.onScrollEnd, o);
            }
            var f = n;
            var l = r;
            a.timerscroll = {
              bz: new BezierClass(f, a.newscrolly, o, 0, 0, 0.58, 1),
              bh: new BezierClass(l, a.newscrollx, o, 0, 0, 0.58, 1),
            };
            if (!a.cursorfreezed)
              a.timerscroll.tm = setInterval(function () {
                a.showCursor(a.getScrollTop(), a.getScrollLeft());
              }, 60);
          }
          a.synched("doScroll-set", function () {
            a.timer = 0;
            if (a.scrollendtrapped) a.scrollrunning = true;
            a.setScrollTop(a.newscrolly);
            a.setScrollLeft(a.newscrollx);
            if (!a.scrollendtrapped) a.onScrollEnd();
          });
        }, 50);
      };
      this.cancelScroll = function () {
        if (!a.scrollendtrapped) return true;
        var e = a.getScrollTop();
        var t = a.getScrollLeft();
        a.scrollrunning = false;
        if (!c.transitionend) clearTimeout(c.transitionend);
        a.scrollendtrapped = false;
        a._unbind(a.doc, c.transitionend, a.onScrollEnd);
        a.prepareTransition(0);
        a.setScrollTop(e);
        if (a.railh) a.setScrollLeft(t);
        if (a.timerscroll && a.timerscroll.tm) clearInterval(a.timerscroll.tm);
        a.timerscroll = false;
        a.cursorfreezed = false;
        a.showCursor(e, t);
        return a;
      };
      this.onScrollEnd = function () {
        if (a.scrollendtrapped)
          a._unbind(a.doc, c.transitionend, a.onScrollEnd);
        a.scrollendtrapped = false;
        a.prepareTransition(0);
        if (a.timerscroll && a.timerscroll.tm) clearInterval(a.timerscroll.tm);
        a.timerscroll = false;
        var e = a.getScrollTop();
        var t = a.getScrollLeft();
        a.setScrollTop(e);
        if (a.railh) a.setScrollLeft(t);
        a.noticeCursor(false, e, t);
        a.cursorfreezed = false;
        if (e < 0) e = 0;
        else if (e > a.page.maxh) e = a.page.maxh;
        if (t < 0) t = 0;
        else if (t > a.page.maxw) t = a.page.maxw;
        if (e != a.newscrolly || t != a.newscrollx)
          return a.doScrollPos(t, e, a.opt.snapbackspeed);
        if (a.onscrollend && a.scrollrunning) {
          var n = {
            type: "scrollend",
            current: { x: t, y: e },
            end: { x: a.newscrollx, y: a.newscrolly },
          };
          a.onscrollend.call(a, n);
        }
        a.scrollrunning = false;
      };
    } else {
      this.doScrollLeft = function (e, t) {
        var n = a.scrollrunning ? a.newscrolly : a.getScrollTop();
        a.doScrollPos(e, n, t);
      };
      this.doScrollTop = function (e, t) {
        var n = a.scrollrunning ? a.newscrollx : a.getScrollLeft();
        a.doScrollPos(n, e, t);
      };
      this.doScrollPos = function (e, t, n) {
        function c() {
          if (a.cancelAnimationFrame) return true;
          a.scrollrunning = true;
          l = 1 - l;
          if (l) return (a.timer = h(c) || 1);
          var e = 0;
          var t = (sy = a.getScrollTop());
          if (a.dst.ay) {
            t = a.bzscroll
              ? a.dst.py + a.bzscroll.getNow() * a.dst.ay
              : a.newscrolly;
            var n = t - sy;
            if ((n < 0 && t < a.newscrolly) || (n > 0 && t > a.newscrolly))
              t = a.newscrolly;
            a.setScrollTop(t);
            if (t == a.newscrolly) e = 1;
          } else {
            e = 1;
          }
          var r = (sx = a.getScrollLeft());
          if (a.dst.ax) {
            r = a.bzscroll
              ? a.dst.px + a.bzscroll.getNow() * a.dst.ax
              : a.newscrollx;
            var n = r - sx;
            if ((n < 0 && r < a.newscrollx) || (n > 0 && r > a.newscrollx))
              r = a.newscrollx;
            a.setScrollLeft(r);
            if (r == a.newscrollx) e += 1;
          } else {
            e += 1;
          }
          if (e == 2) {
            a.timer = 0;
            a.cursorfreezed = false;
            a.bzscroll = false;
            a.scrollrunning = false;
            if (t < 0) t = 0;
            else if (t > a.page.maxh) t = a.page.maxh;
            if (r < 0) r = 0;
            else if (r > a.page.maxw) r = a.page.maxw;
            if (r != a.newscrollx || t != a.newscrolly) a.doScrollPos(r, t);
            else {
              if (a.onscrollend) {
                var i = {
                  type: "scrollend",
                  current: { x: sx, y: sy },
                  end: { x: a.newscrollx, y: a.newscrolly },
                };
                a.onscrollend.call(a, i);
              }
            }
          } else {
            a.timer = h(c) || 1;
          }
        }
        var t =
          typeof t == "undefined" || t === false ? a.getScrollTop(true) : t;
        if (a.timer && a.newscrolly == t && a.newscrollx == e) return true;
        if (a.timer) p(a.timer);
        a.timer = 0;
        var r = a.getScrollTop();
        var i = a.getScrollLeft();
        if (
          (a.newscrolly - r) * (t - r) < 0 ||
          (a.newscrollx - i) * (e - i) < 0
        )
          a.cancelScroll();
        a.newscrolly = t;
        a.newscrollx = e;
        if (!a.bouncescroll || !a.rail.visibility) {
          if (a.newscrolly < 0) {
            a.newscrolly = 0;
          } else if (a.newscrolly > a.page.maxh) {
            a.newscrolly = a.page.maxh;
          }
        }
        if (!a.bouncescroll || !a.railh.visibility) {
          if (a.newscrollx < 0) {
            a.newscrollx = 0;
          } else if (a.newscrollx > a.page.maxw) {
            a.newscrollx = a.page.maxw;
          }
        }
        a.dst = {};
        a.dst.x = e - i;
        a.dst.y = t - r;
        a.dst.px = i;
        a.dst.py = r;
        var s = Math.round(
          Math.sqrt(Math.pow(a.dst.x, 2) + Math.pow(a.dst.y, 2))
        );
        a.dst.ax = a.dst.x / s;
        a.dst.ay = a.dst.y / s;
        var o = 0;
        var u = s;
        if (a.dst.x == 0) {
          o = r;
          u = t;
          a.dst.ay = 1;
          a.dst.py = 0;
        } else if (a.dst.y == 0) {
          o = i;
          u = e;
          a.dst.ax = 1;
          a.dst.px = 0;
        }
        var f = a.getTransitionSpeed(s);
        if (n && n <= 1) f *= n;
        if (f > 0) {
          a.bzscroll = a.bzscroll
            ? a.bzscroll.update(u, f)
            : new BezierClass(o, u, f, 0, 1, 0, 1);
        } else {
          a.bzscroll = false;
        }
        if (a.timer) return;
        if (
          (r == a.page.maxh && t >= a.page.maxh) ||
          (i == a.page.maxw && e >= a.page.maxw)
        )
          a.checkContentSize();
        var l = 1;
        a.cancelAnimationFrame = false;
        a.timer = 1;
        if (a.onscrollstart && !a.scrollrunning) {
          var d = {
            type: "scrollstart",
            current: { x: i, y: r },
            request: { x: e, y: t },
            end: { x: a.newscrollx, y: a.newscrolly },
            speed: f,
          };
          a.onscrollstart.call(a, d);
        }
        c();
        if ((r == a.page.maxh && t >= r) || (i == a.page.maxw && e >= i))
          a.checkContentSize();
        a.noticeCursor();
      };
      this.cancelScroll = function () {
        if (a.timer) p(a.timer);
        a.timer = 0;
        a.bzscroll = false;
        a.scrollrunning = false;
        return a;
      };
    }
    this.doScrollBy = function (e, t) {
      var n = 0;
      if (t) {
        n = Math.floor((a.scroll.y - e) * a.scrollratio.y);
      } else {
        var r = a.timer ? a.newscrolly : a.getScrollTop(true);
        n = r - e;
      }
      if (a.bouncescroll) {
        var i = Math.round(a.view.h / 2);
        if (n < -i) n = -i;
        else if (n > a.page.maxh + i) n = a.page.maxh + i;
      }
      a.cursorfreezed = false;
      py = a.getScrollTop(true);
      if (n < 0 && py <= 0) return a.noticeCursor();
      else if (n > a.page.maxh && py >= a.page.maxh) {
        a.checkContentSize();
        return a.noticeCursor();
      }
      a.doScrollTop(n);
    };
    this.doScrollLeftBy = function (e, t) {
      var n = 0;
      if (t) {
        n = Math.floor((a.scroll.x - e) * a.scrollratio.x);
      } else {
        var r = a.timer ? a.newscrollx : a.getScrollLeft(true);
        n = r - e;
      }
      if (a.bouncescroll) {
        var i = Math.round(a.view.w / 2);
        if (n < -i) n = -i;
        else if (n > a.page.maxw + i) n = a.page.maxw + i;
      }
      a.cursorfreezed = false;
      px = a.getScrollLeft(true);
      if (n < 0 && px <= 0) return a.noticeCursor();
      else if (n > a.page.maxw && px >= a.page.maxw) return a.noticeCursor();
      a.doScrollLeft(n);
    };
    this.doScrollTo = function (e, t) {
      var n = t ? Math.round(e * a.scrollratio.y) : e;
      if (n < 0) n = 0;
      else if (n > a.page.maxh) n = a.page.maxh;
      a.cursorfreezed = false;
      a.doScrollTop(e);
    };
    this.checkContentSize = function () {
      var e = a.getContentSize();
      if (e.h != a.page.h || e.w != a.page.w) a.resize(false, e);
    };
    a.onscroll = function (e) {
      if (a.rail.drag) return;
      if (!a.cursorfreezed) {
        a.synched("scroll", function () {
          a.scroll.y = Math.round(a.getScrollTop() * (1 / a.scrollratio.y));
          if (a.railh)
            a.scroll.x = Math.round(a.getScrollLeft() * (1 / a.scrollratio.x));
          a.noticeCursor();
        });
      }
    };
    a.bind(a.docscroll, "scroll", a.onscroll);
    this.doZoomIn = function (e) {
      if (a.zoomactive) return;
      a.zoomactive = true;
      a.zoomrestore = { style: {} };
      var t = [
        "position",
        "top",
        "left",
        "zIndex",
        "backgroundColor",
        "marginTop",
        "marginBottom",
        "marginLeft",
        "marginRight",
      ];
      var n = a.win[0].style;
      for (var r in t) {
        var i = t[r];
        a.zoomrestore.style[i] = typeof n[i] != "undefined" ? n[i] : "";
      }
      a.zoomrestore.style.width = a.win.css("width");
      a.zoomrestore.style.height = a.win.css("height");
      a.zoomrestore.padding = {
        w: a.win.outerWidth() - a.win.width(),
        h: a.win.outerHeight() - a.win.height(),
      };
      if (c.isios4) {
        a.zoomrestore.scrollTop = u(window).scrollTop();
        u(window).scrollTop(0);
      }
      a.win.css({
        position: c.isios4 ? "absolute" : "fixed",
        top: 0,
        left: 0,
        "z-index": o + 100,
        margin: "0px",
      });
      var s = a.win.css("backgroundColor");
      if (s == "" || /transparent|rgba\(0, 0, 0, 0\)|rgba\(0,0,0,0\)/.test(s))
        a.win.css("backgroundColor", "#fff");
      a.rail.css({ "z-index": o + 101 });
      a.zoom.css({ "z-index": o + 102 });
      a.zoom.css("backgroundPosition", "0px -18px");
      a.resizeZoom();
      if (a.onzoomin) a.onzoomin.call(a);
      return a.cancelEvent(e);
    };
    this.doZoomOut = function (e) {
      if (!a.zoomactive) return;
      a.zoomactive = false;
      a.win.css("margin", "");
      a.win.css(a.zoomrestore.style);
      if (c.isios4) {
        u(window).scrollTop(a.zoomrestore.scrollTop);
      }
      a.rail.css({ "z-index": a.zindex });
      a.zoom.css({ "z-index": a.zindex });
      a.zoomrestore = false;
      a.zoom.css("backgroundPosition", "0px 0px");
      a.onResize();
      if (a.onzoomout) a.onzoomout.call(a);
      return a.cancelEvent(e);
    };
    this.doZoom = function (e) {
      return a.zoomactive ? a.doZoomOut(e) : a.doZoomIn(e);
    };
    this.resizeZoom = function () {
      if (!a.zoomactive) return;
      var e = a.getScrollTop();
      a.win.css({
        width: u(window).width() - a.zoomrestore.padding.w + "px",
        height: u(window).height() - a.zoomrestore.padding.h + "px",
      });
      a.onResize();
      a.setScrollTop(Math.min(a.page.maxh, e));
    };
    this.init();
    u.nicescroll.push(this);
  };
  var E = function (e) {
    var t = this;
    this.nc = e;
    this.lastx = 0;
    this.lasty = 0;
    this.speedx = 0;
    this.speedy = 0;
    this.lasttime = 0;
    this.steptime = 0;
    this.snapx = false;
    this.snapy = false;
    this.demulx = 0;
    this.demuly = 0;
    this.lastscrollx = -1;
    this.lastscrolly = -1;
    this.chkx = 0;
    this.chky = 0;
    this.timer = 0;
    this.time = function () {
      return +new Date();
    };
    this.reset = function (e, n) {
      t.stop();
      var r = t.time();
      t.steptime = 0;
      t.lasttime = r;
      t.speedx = 0;
      t.speedy = 0;
      t.lastx = e;
      t.lasty = n;
      t.lastscrollx = -1;
      t.lastscrolly = -1;
    };
    this.update = function (e, n) {
      var r = t.time();
      t.steptime = r - t.lasttime;
      t.lasttime = r;
      var i = n - t.lasty;
      var s = e - t.lastx;
      var o = t.nc.getScrollTop();
      var u = t.nc.getScrollLeft();
      var a = o + i;
      var f = u + s;
      t.snapx = f < 0 || f > t.nc.page.maxw;
      t.snapy = a < 0 || a > t.nc.page.maxh;
      t.speedx = s;
      t.speedy = i;
      t.lastx = e;
      t.lasty = n;
    };
    this.stop = function () {
      t.nc.unsynched("domomentum2d");
      if (t.timer) clearTimeout(t.timer);
      t.timer = 0;
      t.lastscrollx = -1;
      t.lastscrolly = -1;
    };
    this.doSnapy = function (e, n) {
      var r = false;
      if (n < 0) {
        n = 0;
        r = true;
      } else if (n > t.nc.page.maxh) {
        n = t.nc.page.maxh;
        r = true;
      }
      if (e < 0) {
        e = 0;
        r = true;
      } else if (e > t.nc.page.maxw) {
        e = t.nc.page.maxw;
        r = true;
      }
      if (r) t.nc.doScrollPos(e, n, t.nc.opt.snapbackspeed);
    };
    this.doMomentum = function (e) {
      var n = t.time();
      var r = e ? n + e : t.lasttime;
      var i = t.nc.getScrollLeft();
      var s = t.nc.getScrollTop();
      var o = t.nc.page.maxh;
      var u = t.nc.page.maxw;
      t.speedx = u > 0 ? Math.min(60, t.speedx) : 0;
      t.speedy = o > 0 ? Math.min(60, t.speedy) : 0;
      var a = r && n - r <= 60;
      if (s < 0 || s > o || i < 0 || i > u) a = false;
      var f = t.speedy && a ? t.speedy : false;
      var l = t.speedx && a ? t.speedx : false;
      if (f || l) {
        var c = Math.max(16, t.steptime);
        if (c > 50) {
          var h = c / 50;
          t.speedx *= h;
          t.speedy *= h;
          c = 50;
        }
        t.demulxy = 0;
        t.lastscrollx = t.nc.getScrollLeft();
        t.chkx = t.lastscrollx;
        t.lastscrolly = t.nc.getScrollTop();
        t.chky = t.lastscrolly;
        var p = t.lastscrollx;
        var d = t.lastscrolly;
        var v = function () {
          var e = t.time() - n > 600 ? 0.04 : 0.02;
          if (t.speedx) {
            p = Math.floor(t.lastscrollx - t.speedx * (1 - t.demulxy));
            t.lastscrollx = p;
            if (p < 0 || p > u) e = 0.1;
          }
          if (t.speedy) {
            d = Math.floor(t.lastscrolly - t.speedy * (1 - t.demulxy));
            t.lastscrolly = d;
            if (d < 0 || d > o) e = 0.1;
          }
          t.demulxy = Math.min(1, t.demulxy + e);
          t.nc.synched("domomentum2d", function () {
            if (t.speedx) {
              var e = t.nc.getScrollLeft();
              if (e != t.chkx) t.stop();
              t.chkx = p;
              t.nc.setScrollLeft(p);
            }
            if (t.speedy) {
              var n = t.nc.getScrollTop();
              if (n != t.chky) t.stop();
              t.chky = d;
              t.nc.setScrollTop(d);
            }
            if (!t.timer) {
              t.nc.hideCursor();
              t.doSnapy(p, d);
            }
          });
          if (t.demulxy < 1) {
            t.timer = setTimeout(v, c);
          } else {
            t.stop();
            t.nc.hideCursor();
            t.doSnapy(p, d);
          }
        };
        v();
      } else {
        t.doSnapy(t.nc.getScrollLeft(), t.nc.getScrollTop());
      }
    };
  };
  var S = e.fn.scrollTop;
  e.cssHooks["pageYOffset"] = {
    get: function (e, t, n) {
      var r = u.data(e, "__nicescroll") || false;
      return r && r.ishwscroll ? r.getScrollTop() : S.call(e);
    },
    set: function (e, t) {
      var n = u.data(e, "__nicescroll") || false;
      n && n.ishwscroll ? n.setScrollTop(parseInt(t)) : S.call(e, t);
      return this;
    },
  };
  e.fn.scrollTop = function (e) {
    if (typeof e == "undefined") {
      var t = this[0] ? u.data(this[0], "__nicescroll") || false : false;
      return t && t.ishwscroll ? t.getScrollTop() : S.call(this);
    } else {
      return this.each(function () {
        var t = u.data(this, "__nicescroll") || false;
        t && t.ishwscroll ? t.setScrollTop(parseInt(e)) : S.call(u(this), e);
      });
    }
  };
  var x = e.fn.scrollLeft;
  u.cssHooks.pageXOffset = {
    get: function (e, t, n) {
      var r = u.data(e, "__nicescroll") || false;
      return r && r.ishwscroll ? r.getScrollLeft() : x.call(e);
    },
    set: function (e, t) {
      var n = u.data(e, "__nicescroll") || false;
      n && n.ishwscroll ? n.setScrollLeft(parseInt(t)) : x.call(e, t);
      return this;
    },
  };
  e.fn.scrollLeft = function (e) {
    if (typeof e == "undefined") {
      var t = this[0] ? u.data(this[0], "__nicescroll") || false : false;
      return t && t.ishwscroll ? t.getScrollLeft() : x.call(this);
    } else {
      return this.each(function () {
        var t = u.data(this, "__nicescroll") || false;
        t && t.ishwscroll ? t.setScrollLeft(parseInt(e)) : x.call(u(this), e);
      });
    }
  };
  var T = function (e) {
    var t = this;
    this.length = 0;
    this.name = "nicescrollarray";
    this.each = function (e) {
      for (var n = 0, r = 0; n < t.length; n++) e.call(t[n], r++);
      return t;
    };
    this.push = function (e) {
      t[t.length] = e;
      t.length++;
    };
    this.eq = function (e) {
      return t[e];
    };
    if (e) {
      for (a = 0; a < e.length; a++) {
        var n = u.data(e[a], "__nicescroll") || false;
        if (n) {
          this[this.length] = n;
          this.length++;
        }
      }
    }
    return this;
  };
  N(
    T.prototype,
    [
      "show",
      "hide",
      "toggle",
      "onResize",
      "resize",
      "remove",
      "stop",
      "doScrollPos",
    ],
    function (e, t) {
      e[t] = function () {
        var e = arguments;
        return this.each(function () {
          this[t].apply(this, e);
        });
      };
    }
  );
  e.fn.getNiceScroll = function (e) {
    if (typeof e == "undefined") {
      return new T(this);
    } else {
      var t = (this[e] && u.data(this[e], "__nicescroll")) || false;
      return t;
    }
  };
  e.extend(e.expr[":"], {
    nicescroll: function (e) {
      return u.data(e, "__nicescroll") ? true : false;
    },
  });
  u.fn.niceScroll = function (e, t) {
    if (typeof t == "undefined") {
      if (typeof e == "object" && !("jquery" in e)) {
        t = e;
        e = false;
      }
    }
    var n = new T();
    if (typeof t == "undefined") t = {};
    if (e || false) {
      t.doc = u(e);
      t.win = u(this);
    }
    var r = !("doc" in t);
    if (!r && !("win" in t)) t.win = u(this);
    this.each(function () {
      var e = u(this).data("__nicescroll") || false;
      if (!e) {
        t.doc = r ? u(this) : t.doc;
        e = new w(t, u(this));
        u(this).data("__nicescroll", e);
      }
      n.push(e);
    });
    return n.length == 1 ? n[0] : n;
  };
  window.NiceScroll = {
    getjQuery: function () {
      return e;
    },
  };
  if (!u.nicescroll) {
    u.nicescroll = new T();
    u.nicescroll.options = g;
  }
})(jQuery);
