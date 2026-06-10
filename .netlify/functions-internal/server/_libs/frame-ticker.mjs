import { g as getDefaultExportFromCjs } from "./react.mjs";
var FrameTicker$1 = { exports: {} };
var FrameTicker = FrameTicker$1.exports;
var hasRequiredFrameTicker;
function requireFrameTicker() {
  if (hasRequiredFrameTicker) return FrameTicker$1.exports;
  hasRequiredFrameTicker = 1;
  (function(module, exports) {
    !(function(e, t) {
      module.exports = t();
    })(FrameTicker, function() {
      return (function(e) {
        function t(n) {
          if (i[n]) return i[n].exports;
          var r = i[n] = { exports: {}, id: n, loaded: false };
          return e[n].call(r.exports, r, r.exports, t), r.loaded = true, r.exports;
        }
        var i = {};
        return t.m = e, t.c = i, t.p = "", t(0);
      })([function(e, t, i) {
        var n = i(1), r = (function() {
          function e2(e3, t2, i2) {
            void 0 === e3 && (e3 = NaN), void 0 === t2 && (t2 = NaN), void 0 === i2 && (i2 = false), this._minFPS = t2, this._maxFPS = e3, this._timeScale = 1, this._currentTick = 0, this._currentTime = 0, this._tickDeltaTime = 0, this._isRunning = false, this._maxInterval = isNaN(this._minFPS) ? NaN : 1e3 / this._minFPS, this._minInterval = isNaN(this._maxFPS) ? NaN : 1e3 / this._maxFPS, this._onResume = new n.default(), this._onPause = new n.default(), this._onTick = new n.default(), this._onTickOncePerFrame = new n.default(), i2 || this.resume();
          }
          return e2.prototype.updateOnce = function(e3) {
            e3(this.currentTimeSeconds, this.tickDeltaTimeSeconds, this.currentTick);
          }, e2.prototype.resume = function() {
            this._isRunning || (this._isRunning = true, this._lastTimeUpdated = this.getTimer(), this._onResume.dispatch(), this.animateOnce());
          }, e2.prototype.pause = function() {
            this._isRunning && (this._isRunning = false, this._onPause.dispatch(), window.cancelAnimationFrame(this._animationFrameHandle));
          }, e2.prototype.dispose = function() {
            this.pause(), this._onResume.removeAll(), this._onPause.removeAll(), this._onTick.removeAll();
          }, Object.defineProperty(e2.prototype, "currentTick", { get: function() {
            return this._currentTick;
          }, enumerable: true, configurable: true }), Object.defineProperty(e2.prototype, "currentTimeSeconds", { get: function() {
            return this._currentTime / 1e3;
          }, enumerable: true, configurable: true }), Object.defineProperty(e2.prototype, "tickDeltaTimeSeconds", { get: function() {
            return this._tickDeltaTime / 1e3;
          }, enumerable: true, configurable: true }), Object.defineProperty(e2.prototype, "timeScale", { get: function() {
            return this._timeScale;
          }, set: function(e3) {
            this._timeScale !== e3 && (this._timeScale = e3);
          }, enumerable: true, configurable: true }), Object.defineProperty(e2.prototype, "onResume", { get: function() {
            return this._onResume;
          }, enumerable: true, configurable: true }), Object.defineProperty(e2.prototype, "onPause", { get: function() {
            return this._onPause;
          }, enumerable: true, configurable: true }), Object.defineProperty(e2.prototype, "onTick", { get: function() {
            return this._onTick;
          }, enumerable: true, configurable: true }), Object.defineProperty(e2.prototype, "onTickOncePerFrame", { get: function() {
            return this._onTickOncePerFrame;
          }, enumerable: true, configurable: true }), Object.defineProperty(e2.prototype, "isRunning", { get: function() {
            return this._isRunning;
          }, enumerable: true, configurable: true }), e2.prototype.animateOnce = function() {
            var e3 = this;
            this._animationFrameHandle = window.requestAnimationFrame(function() {
              return e3.onFrame();
            });
          }, e2.prototype.onFrame = function() {
            if (this._now = this.getTimer(), this._frameDeltaTime = this._now - this._lastTimeUpdated, isNaN(this._minInterval) || this._frameDeltaTime >= this._minInterval) if (isNaN(this._maxInterval)) this.update(this._frameDeltaTime * this._timeScale, true), this._lastTimeUpdated = this._now;
            else for (this._interval = Math.min(this._frameDeltaTime, this._maxInterval); this._now >= this._lastTimeUpdated + this._interval; ) this.update(this._interval * this._timeScale, this._now <= this._lastTimeUpdated + 2 * this._maxInterval), this._lastTimeUpdated += this._interval;
            this._isRunning && this.animateOnce();
          }, e2.prototype.update = function(e3, t2) {
            void 0 === t2 && (t2 = true), this._currentTick++, this._currentTime += e3, this._tickDeltaTime = e3, this._onTick.dispatch(this.currentTimeSeconds, this.tickDeltaTimeSeconds, this.currentTick), t2 && this._onTickOncePerFrame.dispatch(this.currentTimeSeconds, this.tickDeltaTimeSeconds, this.currentTick);
          }, e2.prototype.getTimer = function() {
            return Date.now();
          }, e2;
        })();
        Object.defineProperty(t, "__esModule", { value: true }), t.default = r;
      }, function(e, t, i) {
        !(function(t2, i2) {
          e.exports = i2();
        })(this, function() {
          return (function(e2) {
            function t2(n) {
              if (i2[n]) return i2[n].exports;
              var r = i2[n] = { exports: {}, id: n, loaded: false };
              return e2[n].call(r.exports, r, r.exports, t2), r.loaded = true, r.exports;
            }
            var i2 = {};
            return t2.m = e2, t2.c = i2, t2.p = "", t2(0);
          })([function(e2, t2) {
            var i2 = (function() {
              function e3() {
                this.functions = [];
              }
              return e3.prototype.add = function(e4) {
                return this.functions.indexOf(e4) === -1 && (this.functions.push(e4), true);
              }, e3.prototype.remove = function(e4) {
                var t3 = this.functions.indexOf(e4);
                return t3 > -1 && (this.functions.splice(t3, 1), true);
              }, e3.prototype.removeAll = function() {
                return this.functions.length > 0 && (this.functions.length = 0, true);
              }, e3.prototype.dispatch = function() {
                for (var e4 = [], t3 = 0; t3 < arguments.length; t3++) e4[t3] = arguments[t3];
                var i3 = this.functions.concat();
                i3.forEach(function(t4) {
                  t4.apply(void 0, e4);
                });
              }, Object.defineProperty(e3.prototype, "numItems", { get: function() {
                return this.functions.length;
              }, enumerable: true, configurable: true }), e3;
            })();
            Object.defineProperty(t2, "__esModule", { value: true }), t2.default = i2;
          }]);
        });
      }]);
    });
  })(FrameTicker$1);
  return FrameTicker$1.exports;
}
var FrameTickerExports = requireFrameTicker();
const _FrameTicker = /* @__PURE__ */ getDefaultExportFromCjs(FrameTickerExports);
export {
  _FrameTicker as _
};
