var Jv = { exports: {} }, Ap = {};
var j2;
function xT() {
  if (j2) return Ap;
  j2 = 1;
  var T = /* @__PURE__ */ Symbol.for("react.transitional.element"), q = /* @__PURE__ */ Symbol.for("react.fragment");
  function ne(E, ee, te) {
    var he = null;
    if (te !== void 0 && (he = "" + te), ee.key !== void 0 && (he = "" + ee.key), "key" in ee) {
      te = {};
      for (var Q in ee)
        Q !== "key" && (te[Q] = ee[Q]);
    } else te = ee;
    return ee = te.ref, {
      $$typeof: T,
      type: E,
      key: he,
      ref: ee !== void 0 ? ee : null,
      props: te
    };
  }
  return Ap.Fragment = q, Ap.jsx = ne, Ap.jsxs = ne, Ap;
}
var Rp = {}, Kv = { exports: {} }, ut = {};
var G2;
function NT() {
  if (G2) return ut;
  G2 = 1;
  var T = /* @__PURE__ */ Symbol.for("react.transitional.element"), q = /* @__PURE__ */ Symbol.for("react.portal"), ne = /* @__PURE__ */ Symbol.for("react.fragment"), E = /* @__PURE__ */ Symbol.for("react.strict_mode"), ee = /* @__PURE__ */ Symbol.for("react.profiler"), te = /* @__PURE__ */ Symbol.for("react.consumer"), he = /* @__PURE__ */ Symbol.for("react.context"), Q = /* @__PURE__ */ Symbol.for("react.forward_ref"), W = /* @__PURE__ */ Symbol.for("react.suspense"), V = /* @__PURE__ */ Symbol.for("react.memo"), de = /* @__PURE__ */ Symbol.for("react.lazy"), Y = /* @__PURE__ */ Symbol.for("react.activity"), H = Symbol.iterator;
  function oe(b) {
    return b === null || typeof b != "object" ? null : (b = H && b[H] || b["@@iterator"], typeof b == "function" ? b : null);
  }
  var ze = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, We = Object.assign, Qe = {};
  function Ne(b, B, $) {
    this.props = b, this.context = B, this.refs = Qe, this.updater = $ || ze;
  }
  Ne.prototype.isReactComponent = {}, Ne.prototype.setState = function(b, B) {
    if (typeof b != "object" && typeof b != "function" && b != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, b, B, "setState");
  }, Ne.prototype.forceUpdate = function(b) {
    this.updater.enqueueForceUpdate(this, b, "forceUpdate");
  };
  function Ot() {
  }
  Ot.prototype = Ne.prototype;
  function tt(b, B, $) {
    this.props = b, this.context = B, this.refs = Qe, this.updater = $ || ze;
  }
  var wt = tt.prototype = new Ot();
  wt.constructor = tt, We(wt, Ne.prototype), wt.isPureReactComponent = !0;
  var Vt = Array.isArray;
  function Ft() {
  }
  var Ue = { H: null, A: null, T: null, S: null }, lt = Object.prototype.hasOwnProperty;
  function gt(b, B, $) {
    var le = $.ref;
    return {
      $$typeof: T,
      type: b,
      key: B,
      ref: le !== void 0 ? le : null,
      props: $
    };
  }
  function pe(b, B) {
    return gt(b.type, B, b.props);
  }
  function Ht(b) {
    return typeof b == "object" && b !== null && b.$$typeof === T;
  }
  function Se(b) {
    var B = { "=": "=0", ":": "=2" };
    return "$" + b.replace(/[=:]/g, function($) {
      return B[$];
    });
  }
  var Je = /\/+/g;
  function Be(b, B) {
    return typeof b == "object" && b !== null && b.key != null ? Se("" + b.key) : B.toString(36);
  }
  function ft(b) {
    switch (b.status) {
      case "fulfilled":
        return b.value;
      case "rejected":
        throw b.reason;
      default:
        switch (typeof b.status == "string" ? b.then(Ft, Ft) : (b.status = "pending", b.then(
          function(B) {
            b.status === "pending" && (b.status = "fulfilled", b.value = B);
          },
          function(B) {
            b.status === "pending" && (b.status = "rejected", b.reason = B);
          }
        )), b.status) {
          case "fulfilled":
            return b.value;
          case "rejected":
            throw b.reason;
        }
    }
    throw b;
  }
  function D(b, B, $, le, Ae) {
    var qe = typeof b;
    (qe === "undefined" || qe === "boolean") && (b = null);
    var Oe = !1;
    if (b === null) Oe = !0;
    else
      switch (qe) {
        case "bigint":
        case "string":
        case "number":
          Oe = !0;
          break;
        case "object":
          switch (b.$$typeof) {
            case T:
            case q:
              Oe = !0;
              break;
            case de:
              return Oe = b._init, D(
                Oe(b._payload),
                B,
                $,
                le,
                Ae
              );
          }
      }
    if (Oe)
      return Ae = Ae(b), Oe = le === "" ? "." + Be(b, 0) : le, Vt(Ae) ? ($ = "", Oe != null && ($ = Oe.replace(Je, "$&/") + "/"), D(Ae, B, $, "", function(Fl) {
        return Fl;
      })) : Ae != null && (Ht(Ae) && (Ae = pe(
        Ae,
        $ + (Ae.key == null || b && b.key === Ae.key ? "" : ("" + Ae.key).replace(
          Je,
          "$&/"
        ) + "/") + Oe
      )), B.push(Ae)), 1;
    Oe = 0;
    var Qt = le === "" ? "." : le + ":";
    if (Vt(b))
      for (var Et = 0; Et < b.length; Et++)
        le = b[Et], qe = Qt + Be(le, Et), Oe += D(
          le,
          B,
          $,
          qe,
          Ae
        );
    else if (Et = oe(b), typeof Et == "function")
      for (b = Et.call(b), Et = 0; !(le = b.next()).done; )
        le = le.value, qe = Qt + Be(le, Et++), Oe += D(
          le,
          B,
          $,
          qe,
          Ae
        );
    else if (qe === "object") {
      if (typeof b.then == "function")
        return D(
          ft(b),
          B,
          $,
          le,
          Ae
        );
      throw B = String(b), Error(
        "Objects are not valid as a React child (found: " + (B === "[object Object]" ? "object with keys {" + Object.keys(b).join(", ") + "}" : B) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return Oe;
  }
  function v(b, B, $) {
    if (b == null) return b;
    var le = [], Ae = 0;
    return D(b, le, "", "", function(qe) {
      return B.call($, qe, Ae++);
    }), le;
  }
  function ue(b) {
    if (b._status === -1) {
      var B = b._result;
      B = B(), B.then(
        function($) {
          (b._status === 0 || b._status === -1) && (b._status = 1, b._result = $);
        },
        function($) {
          (b._status === 0 || b._status === -1) && (b._status = 2, b._result = $);
        }
      ), b._status === -1 && (b._status = 0, b._result = B);
    }
    if (b._status === 1) return b._result.default;
    throw b._result;
  }
  var me = typeof reportError == "function" ? reportError : function(b) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var B = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof b == "object" && b !== null && typeof b.message == "string" ? String(b.message) : String(b),
        error: b
      });
      if (!window.dispatchEvent(B)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", b);
      return;
    }
    console.error(b);
  }, ve = {
    map: v,
    forEach: function(b, B, $) {
      v(
        b,
        function() {
          B.apply(this, arguments);
        },
        $
      );
    },
    count: function(b) {
      var B = 0;
      return v(b, function() {
        B++;
      }), B;
    },
    toArray: function(b) {
      return v(b, function(B) {
        return B;
      }) || [];
    },
    only: function(b) {
      if (!Ht(b))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return b;
    }
  };
  return ut.Activity = Y, ut.Children = ve, ut.Component = Ne, ut.Fragment = ne, ut.Profiler = ee, ut.PureComponent = tt, ut.StrictMode = E, ut.Suspense = W, ut.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = Ue, ut.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(b) {
      return Ue.H.useMemoCache(b);
    }
  }, ut.cache = function(b) {
    return function() {
      return b.apply(null, arguments);
    };
  }, ut.cacheSignal = function() {
    return null;
  }, ut.cloneElement = function(b, B, $) {
    if (b == null)
      throw Error(
        "The argument must be a React element, but you passed " + b + "."
      );
    var le = We({}, b.props), Ae = b.key;
    if (B != null)
      for (qe in B.key !== void 0 && (Ae = "" + B.key), B)
        !lt.call(B, qe) || qe === "key" || qe === "__self" || qe === "__source" || qe === "ref" && B.ref === void 0 || (le[qe] = B[qe]);
    var qe = arguments.length - 2;
    if (qe === 1) le.children = $;
    else if (1 < qe) {
      for (var Oe = Array(qe), Qt = 0; Qt < qe; Qt++)
        Oe[Qt] = arguments[Qt + 2];
      le.children = Oe;
    }
    return gt(b.type, Ae, le);
  }, ut.createContext = function(b) {
    return b = {
      $$typeof: he,
      _currentValue: b,
      _currentValue2: b,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, b.Provider = b, b.Consumer = {
      $$typeof: te,
      _context: b
    }, b;
  }, ut.createElement = function(b, B, $) {
    var le, Ae = {}, qe = null;
    if (B != null)
      for (le in B.key !== void 0 && (qe = "" + B.key), B)
        lt.call(B, le) && le !== "key" && le !== "__self" && le !== "__source" && (Ae[le] = B[le]);
    var Oe = arguments.length - 2;
    if (Oe === 1) Ae.children = $;
    else if (1 < Oe) {
      for (var Qt = Array(Oe), Et = 0; Et < Oe; Et++)
        Qt[Et] = arguments[Et + 2];
      Ae.children = Qt;
    }
    if (b && b.defaultProps)
      for (le in Oe = b.defaultProps, Oe)
        Ae[le] === void 0 && (Ae[le] = Oe[le]);
    return gt(b, qe, Ae);
  }, ut.createRef = function() {
    return { current: null };
  }, ut.forwardRef = function(b) {
    return { $$typeof: Q, render: b };
  }, ut.isValidElement = Ht, ut.lazy = function(b) {
    return {
      $$typeof: de,
      _payload: { _status: -1, _result: b },
      _init: ue
    };
  }, ut.memo = function(b, B) {
    return {
      $$typeof: V,
      type: b,
      compare: B === void 0 ? null : B
    };
  }, ut.startTransition = function(b) {
    var B = Ue.T, $ = {};
    Ue.T = $;
    try {
      var le = b(), Ae = Ue.S;
      Ae !== null && Ae($, le), typeof le == "object" && le !== null && typeof le.then == "function" && le.then(Ft, me);
    } catch (qe) {
      me(qe);
    } finally {
      B !== null && $.types !== null && (B.types = $.types), Ue.T = B;
    }
  }, ut.unstable_useCacheRefresh = function() {
    return Ue.H.useCacheRefresh();
  }, ut.use = function(b) {
    return Ue.H.use(b);
  }, ut.useActionState = function(b, B, $) {
    return Ue.H.useActionState(b, B, $);
  }, ut.useCallback = function(b, B) {
    return Ue.H.useCallback(b, B);
  }, ut.useContext = function(b) {
    return Ue.H.useContext(b);
  }, ut.useDebugValue = function() {
  }, ut.useDeferredValue = function(b, B) {
    return Ue.H.useDeferredValue(b, B);
  }, ut.useEffect = function(b, B) {
    return Ue.H.useEffect(b, B);
  }, ut.useEffectEvent = function(b) {
    return Ue.H.useEffectEvent(b);
  }, ut.useId = function() {
    return Ue.H.useId();
  }, ut.useImperativeHandle = function(b, B, $) {
    return Ue.H.useImperativeHandle(b, B, $);
  }, ut.useInsertionEffect = function(b, B) {
    return Ue.H.useInsertionEffect(b, B);
  }, ut.useLayoutEffect = function(b, B) {
    return Ue.H.useLayoutEffect(b, B);
  }, ut.useMemo = function(b, B) {
    return Ue.H.useMemo(b, B);
  }, ut.useOptimistic = function(b, B) {
    return Ue.H.useOptimistic(b, B);
  }, ut.useReducer = function(b, B, $) {
    return Ue.H.useReducer(b, B, $);
  }, ut.useRef = function(b) {
    return Ue.H.useRef(b);
  }, ut.useState = function(b) {
    return Ue.H.useState(b);
  }, ut.useSyncExternalStore = function(b, B, $) {
    return Ue.H.useSyncExternalStore(
      b,
      B,
      $
    );
  }, ut.useTransition = function() {
    return Ue.H.useTransition();
  }, ut.version = "19.2.8", ut;
}
var zp = { exports: {} };
zp.exports;
var L2;
function BT() {
  return L2 || (L2 = 1, (function(T, q) {
    process.env.NODE_ENV !== "production" && (function() {
      function ne(g, x) {
        Object.defineProperty(te.prototype, g, {
          get: function() {
            console.warn(
              "%s(...) is deprecated in plain JavaScript React classes. %s",
              x[0],
              x[1]
            );
          }
        });
      }
      function E(g) {
        return g === null || typeof g != "object" ? null : (g = Ku && g[Ku] || g["@@iterator"], typeof g == "function" ? g : null);
      }
      function ee(g, x) {
        g = (g = g.constructor) && (g.displayName || g.name) || "ReactClass";
        var ae = g + "." + x;
        Jn[ae] || (console.error(
          "Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.",
          x,
          g
        ), Jn[ae] = !0);
      }
      function te(g, x, ae) {
        this.props = g, this.context = x, this.refs = rt, this.updater = ae || _a;
      }
      function he() {
      }
      function Q(g, x, ae) {
        this.props = g, this.context = x, this.refs = rt, this.updater = ae || _a;
      }
      function W() {
      }
      function V(g) {
        return "" + g;
      }
      function de(g) {
        try {
          V(g);
          var x = !1;
        } catch {
          x = !0;
        }
        if (x) {
          x = console;
          var ae = x.error, ce = typeof Symbol == "function" && Symbol.toStringTag && g[Symbol.toStringTag] || g.constructor.name || "Object";
          return ae.call(
            x,
            "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
            ce
          ), V(g);
        }
      }
      function Y(g) {
        if (g == null) return null;
        if (typeof g == "function")
          return g.$$typeof === Sc ? null : g.displayName || g.name || null;
        if (typeof g == "string") return g;
        switch (g) {
          case b:
            return "Fragment";
          case $:
            return "Profiler";
          case B:
            return "StrictMode";
          case Oe:
            return "Suspense";
          case Qt:
            return "SuspenseList";
          case fe:
            return "Activity";
        }
        if (typeof g == "object")
          switch (typeof g.tag == "number" && console.error(
            "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
          ), g.$$typeof) {
            case ve:
              return "Portal";
            case Ae:
              return g.displayName || "Context";
            case le:
              return (g._context.displayName || "Context") + ".Consumer";
            case qe:
              var x = g.render;
              return g = g.displayName, g || (g = x.displayName || x.name || "", g = g !== "" ? "ForwardRef(" + g + ")" : "ForwardRef"), g;
            case Et:
              return x = g.displayName || null, x !== null ? x : Y(g.type) || "Memo";
            case Fl:
              x = g._payload, g = g._init;
              try {
                return Y(g(x));
              } catch {
              }
          }
        return null;
      }
      function H(g) {
        if (g === b) return "<>";
        if (typeof g == "object" && g !== null && g.$$typeof === Fl)
          return "<...>";
        try {
          var x = Y(g);
          return x ? "<" + x + ">" : "<...>";
        } catch {
          return "<...>";
        }
      }
      function oe() {
        var g = ie.A;
        return g === null ? null : g.getOwner();
      }
      function ze() {
        return Error("react-stack-top-frame");
      }
      function We(g) {
        if (Ie.call(g, "key")) {
          var x = Object.getOwnPropertyDescriptor(g, "key").get;
          if (x && x.isReactWarning) return !1;
        }
        return g.key !== void 0;
      }
      function Qe(g, x) {
        function ae() {
          Hl || (Hl = !0, console.error(
            "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
            x
          ));
        }
        ae.isReactWarning = !0, Object.defineProperty(g, "key", {
          get: ae,
          configurable: !0
        });
      }
      function Ne() {
        var g = Y(this.type);
        return ha[g] || (ha[g] = !0, console.error(
          "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
        )), g = this.props.ref, g !== void 0 ? g : null;
      }
      function Ot(g, x, ae, ce, ge, Me) {
        var Ee = ae.ref;
        return g = {
          $$typeof: me,
          type: g,
          key: x,
          props: ae,
          _owner: ce
        }, (Ee !== void 0 ? Ee : null) !== null ? Object.defineProperty(g, "ref", {
          enumerable: !1,
          get: Ne
        }) : Object.defineProperty(g, "ref", { enumerable: !1, value: null }), g._store = {}, Object.defineProperty(g._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: 0
        }), Object.defineProperty(g, "_debugInfo", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: null
        }), Object.defineProperty(g, "_debugStack", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: ge
        }), Object.defineProperty(g, "_debugTask", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: Me
        }), Object.freeze && (Object.freeze(g.props), Object.freeze(g)), g;
      }
      function tt(g, x) {
        return x = Ot(
          g.type,
          x,
          g.props,
          g._owner,
          g._debugStack,
          g._debugTask
        ), g._store && (x._store.validated = g._store.validated), x;
      }
      function wt(g) {
        Vt(g) ? g._store && (g._store.validated = 1) : typeof g == "object" && g !== null && g.$$typeof === Fl && (g._payload.status === "fulfilled" ? Vt(g._payload.value) && g._payload.value._store && (g._payload.value._store.validated = 1) : g._store && (g._store.validated = 1));
      }
      function Vt(g) {
        return typeof g == "object" && g !== null && g.$$typeof === me;
      }
      function Ft(g) {
        var x = { "=": "=0", ":": "=2" };
        return "$" + g.replace(/[=:]/g, function(ae) {
          return x[ae];
        });
      }
      function Ue(g, x) {
        return typeof g == "object" && g !== null && g.key != null ? (de(g.key), Ft("" + g.key)) : x.toString(36);
      }
      function lt(g) {
        switch (g.status) {
          case "fulfilled":
            return g.value;
          case "rejected":
            throw g.reason;
          default:
            switch (typeof g.status == "string" ? g.then(W, W) : (g.status = "pending", g.then(
              function(x) {
                g.status === "pending" && (g.status = "fulfilled", g.value = x);
              },
              function(x) {
                g.status === "pending" && (g.status = "rejected", g.reason = x);
              }
            )), g.status) {
              case "fulfilled":
                return g.value;
              case "rejected":
                throw g.reason;
            }
        }
        throw g;
      }
      function gt(g, x, ae, ce, ge) {
        var Me = typeof g;
        (Me === "undefined" || Me === "boolean") && (g = null);
        var Ee = !1;
        if (g === null) Ee = !0;
        else
          switch (Me) {
            case "bigint":
            case "string":
            case "number":
              Ee = !0;
              break;
            case "object":
              switch (g.$$typeof) {
                case me:
                case ve:
                  Ee = !0;
                  break;
                case Fl:
                  return Ee = g._init, gt(
                    Ee(g._payload),
                    x,
                    ae,
                    ce,
                    ge
                  );
              }
          }
        if (Ee) {
          Ee = g, ge = ge(Ee);
          var nt = ce === "" ? "." + Ue(Ee, 0) : ce;
          return $u(ge) ? (ae = "", nt != null && (ae = nt.replace(bn, "$&/") + "/"), gt(ge, x, ae, "", function(Sl) {
            return Sl;
          })) : ge != null && (Vt(ge) && (ge.key != null && (Ee && Ee.key === ge.key || de(ge.key)), ae = tt(
            ge,
            ae + (ge.key == null || Ee && Ee.key === ge.key ? "" : ("" + ge.key).replace(
              bn,
              "$&/"
            ) + "/") + nt
          ), ce !== "" && Ee != null && Vt(Ee) && Ee.key == null && Ee._store && !Ee._store.validated && (ae._store.validated = 2), ge = ae), x.push(ge)), 1;
        }
        if (Ee = 0, nt = ce === "" ? "." : ce + ":", $u(g))
          for (var je = 0; je < g.length; je++)
            ce = g[je], Me = nt + Ue(ce, je), Ee += gt(
              ce,
              x,
              ae,
              Me,
              ge
            );
        else if (je = E(g), typeof je == "function")
          for (je === g.entries && (Ll || console.warn(
            "Using Maps as children is not supported. Use an array of keyed ReactElements instead."
          ), Ll = !0), g = je.call(g), je = 0; !(ce = g.next()).done; )
            ce = ce.value, Me = nt + Ue(ce, je++), Ee += gt(
              ce,
              x,
              ae,
              Me,
              ge
            );
        else if (Me === "object") {
          if (typeof g.then == "function")
            return gt(
              lt(g),
              x,
              ae,
              ce,
              ge
            );
          throw x = String(g), Error(
            "Objects are not valid as a React child (found: " + (x === "[object Object]" ? "object with keys {" + Object.keys(g).join(", ") + "}" : x) + "). If you meant to render a collection of children, use an array instead."
          );
        }
        return Ee;
      }
      function pe(g, x, ae) {
        if (g == null) return g;
        var ce = [], ge = 0;
        return gt(g, ce, "", "", function(Me) {
          return x.call(ae, Me, ge++);
        }), ce;
      }
      function Ht(g) {
        if (g._status === -1) {
          var x = g._ioInfo;
          x != null && (x.start = x.end = performance.now()), x = g._result;
          var ae = x();
          if (ae.then(
            function(ge) {
              if (g._status === 0 || g._status === -1) {
                g._status = 1, g._result = ge;
                var Me = g._ioInfo;
                Me != null && (Me.end = performance.now()), ae.status === void 0 && (ae.status = "fulfilled", ae.value = ge);
              }
            },
            function(ge) {
              if (g._status === 0 || g._status === -1) {
                g._status = 2, g._result = ge;
                var Me = g._ioInfo;
                Me != null && (Me.end = performance.now()), ae.status === void 0 && (ae.status = "rejected", ae.reason = ge);
              }
            }
          ), x = g._ioInfo, x != null) {
            x.value = ae;
            var ce = ae.displayName;
            typeof ce == "string" && (x.name = ce);
          }
          g._status === -1 && (g._status = 0, g._result = ae);
        }
        if (g._status === 1)
          return x = g._result, x === void 0 && console.error(
            `lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`,
            x
          ), "default" in x || console.error(
            `lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`,
            x
          ), x.default;
        throw g._result;
      }
      function Se() {
        var g = ie.H;
        return g === null && console.error(
          `Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`
        ), g;
      }
      function Je() {
        ie.asyncTransitions--;
      }
      function Be(g) {
        if (qa === null)
          try {
            var x = ("require" + Math.random()).slice(0, 7);
            qa = (T && T[x]).call(
              T,
              "timers"
            ).setImmediate;
          } catch {
            qa = function(ce) {
              ku === !1 && (ku = !0, typeof MessageChannel > "u" && console.error(
                "This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."
              ));
              var ge = new MessageChannel();
              ge.port1.onmessage = ce, ge.port2.postMessage(void 0);
            };
          }
        return qa(g);
      }
      function ft(g) {
        return 1 < g.length && typeof AggregateError == "function" ? new AggregateError(g) : g[0];
      }
      function D(g, x) {
        x !== Oa - 1 && console.error(
          "You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "
        ), Oa = x;
      }
      function v(g, x, ae) {
        var ce = ie.actQueue;
        if (ce !== null)
          if (ce.length !== 0)
            try {
              ue(ce), Be(function() {
                return v(g, x, ae);
              });
              return;
            } catch (ge) {
              ie.thrownErrors.push(ge);
            }
          else ie.actQueue = null;
        0 < ie.thrownErrors.length ? (ce = ft(ie.thrownErrors), ie.thrownErrors.length = 0, ae(ce)) : x(g);
      }
      function ue(g) {
        if (!ma) {
          ma = !0;
          var x = 0;
          try {
            for (; x < g.length; x++) {
              var ae = g[x];
              do {
                ie.didUsePromise = !1;
                var ce = ae(!1);
                if (ce !== null) {
                  if (ie.didUsePromise) {
                    g[x] = ae, g.splice(0, x);
                    return;
                  }
                  ae = ce;
                } else break;
              } while (!0);
            }
            g.length = 0;
          } catch (ge) {
            g.splice(0, x + 1), ie.thrownErrors.push(ge);
          } finally {
            ma = !1;
          }
        }
      }
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
      var me = /* @__PURE__ */ Symbol.for("react.transitional.element"), ve = /* @__PURE__ */ Symbol.for("react.portal"), b = /* @__PURE__ */ Symbol.for("react.fragment"), B = /* @__PURE__ */ Symbol.for("react.strict_mode"), $ = /* @__PURE__ */ Symbol.for("react.profiler"), le = /* @__PURE__ */ Symbol.for("react.consumer"), Ae = /* @__PURE__ */ Symbol.for("react.context"), qe = /* @__PURE__ */ Symbol.for("react.forward_ref"), Oe = /* @__PURE__ */ Symbol.for("react.suspense"), Qt = /* @__PURE__ */ Symbol.for("react.suspense_list"), Et = /* @__PURE__ */ Symbol.for("react.memo"), Fl = /* @__PURE__ */ Symbol.for("react.lazy"), fe = /* @__PURE__ */ Symbol.for("react.activity"), Ku = Symbol.iterator, Jn = {}, _a = {
        isMounted: function() {
          return !1;
        },
        enqueueForceUpdate: function(g) {
          ee(g, "forceUpdate");
        },
        enqueueReplaceState: function(g) {
          ee(g, "replaceState");
        },
        enqueueSetState: function(g) {
          ee(g, "setState");
        }
      }, Kn = Object.assign, rt = {};
      Object.freeze(rt), te.prototype.isReactComponent = {}, te.prototype.setState = function(g, x) {
        if (typeof g != "object" && typeof g != "function" && g != null)
          throw Error(
            "takes an object of state variables to update or a function which returns an object of state variables."
          );
        this.updater.enqueueSetState(this, g, x, "setState");
      }, te.prototype.forceUpdate = function(g) {
        this.updater.enqueueForceUpdate(this, g, "forceUpdate");
      };
      var ll = {
        isMounted: [
          "isMounted",
          "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."
        ],
        replaceState: [
          "replaceState",
          "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."
        ]
      };
      for (du in ll)
        ll.hasOwnProperty(du) && ne(du, ll[du]);
      he.prototype = te.prototype, ll = Q.prototype = new he(), ll.constructor = Q, Kn(ll, te.prototype), ll.isPureReactComponent = !0;
      var $u = Array.isArray, Sc = /* @__PURE__ */ Symbol.for("react.client.reference"), ie = {
        H: null,
        A: null,
        T: null,
        S: null,
        actQueue: null,
        asyncTransitions: 0,
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1,
        didUsePromise: !1,
        thrownErrors: [],
        getCurrentStack: null,
        recentlyCreatedOwnerStacks: 0
      }, Ie = Object.prototype.hasOwnProperty, da = console.createTask ? console.createTask : function() {
        return null;
      };
      ll = {
        react_stack_bottom_frame: function(g) {
          return g();
        }
      };
      var Hl, ul, ha = {}, Gl = ll.react_stack_bottom_frame.bind(
        ll,
        ze
      )(), un = da(H(ze)), Ll = !1, bn = /\/+/g, su = typeof reportError == "function" ? reportError : function(g) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
          var x = new window.ErrorEvent("error", {
            bubbles: !0,
            cancelable: !0,
            message: typeof g == "object" && g !== null && typeof g.message == "string" ? String(g.message) : String(g),
            error: g
          });
          if (!window.dispatchEvent(x)) return;
        } else if (typeof process == "object" && typeof process.emit == "function") {
          process.emit("uncaughtException", g);
          return;
        }
        console.error(g);
      }, ku = !1, qa = null, Oa = 0, vl = !1, ma = !1, _l = typeof queueMicrotask == "function" ? function(g) {
        queueMicrotask(function() {
          return queueMicrotask(g);
        });
      } : Be;
      ll = Object.freeze({
        __proto__: null,
        c: function(g) {
          return Se().useMemoCache(g);
        }
      });
      var du = {
        map: pe,
        forEach: function(g, x, ae) {
          pe(
            g,
            function() {
              x.apply(this, arguments);
            },
            ae
          );
        },
        count: function(g) {
          var x = 0;
          return pe(g, function() {
            x++;
          }), x;
        },
        toArray: function(g) {
          return pe(g, function(x) {
            return x;
          }) || [];
        },
        only: function(g) {
          if (!Vt(g))
            throw Error(
              "React.Children.only expected to receive a single React element child."
            );
          return g;
        }
      };
      q.Activity = fe, q.Children = du, q.Component = te, q.Fragment = b, q.Profiler = $, q.PureComponent = Q, q.StrictMode = B, q.Suspense = Oe, q.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = ie, q.__COMPILER_RUNTIME = ll, q.act = function(g) {
        var x = ie.actQueue, ae = Oa;
        Oa++;
        var ce = ie.actQueue = x !== null ? x : [], ge = !1;
        try {
          var Me = g();
        } catch (je) {
          ie.thrownErrors.push(je);
        }
        if (0 < ie.thrownErrors.length)
          throw D(x, ae), g = ft(ie.thrownErrors), ie.thrownErrors.length = 0, g;
        if (Me !== null && typeof Me == "object" && typeof Me.then == "function") {
          var Ee = Me;
          return _l(function() {
            ge || vl || (vl = !0, console.error(
              "You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"
            ));
          }), {
            then: function(je, Sl) {
              ge = !0, Ee.then(
                function(ja) {
                  if (D(x, ae), ae === 0) {
                    try {
                      ue(ce), Be(function() {
                        return v(
                          ja,
                          je,
                          Sl
                        );
                      });
                    } catch (Fu) {
                      ie.thrownErrors.push(Fu);
                    }
                    if (0 < ie.thrownErrors.length) {
                      var En = ft(
                        ie.thrownErrors
                      );
                      ie.thrownErrors.length = 0, Sl(En);
                    }
                  } else je(ja);
                },
                function(ja) {
                  D(x, ae), 0 < ie.thrownErrors.length && (ja = ft(
                    ie.thrownErrors
                  ), ie.thrownErrors.length = 0), Sl(ja);
                }
              );
            }
          };
        }
        var nt = Me;
        if (D(x, ae), ae === 0 && (ue(ce), ce.length !== 0 && _l(function() {
          ge || vl || (vl = !0, console.error(
            "A component suspended inside an `act` scope, but the `act` call was not awaited. When testing React components that depend on asynchronous data, you must await the result:\n\nawait act(() => ...)"
          ));
        }), ie.actQueue = null), 0 < ie.thrownErrors.length)
          throw g = ft(ie.thrownErrors), ie.thrownErrors.length = 0, g;
        return {
          then: function(je, Sl) {
            ge = !0, ae === 0 ? (ie.actQueue = ce, Be(function() {
              return v(
                nt,
                je,
                Sl
              );
            })) : je(nt);
          }
        };
      }, q.cache = function(g) {
        return function() {
          return g.apply(null, arguments);
        };
      }, q.cacheSignal = function() {
        return null;
      }, q.captureOwnerStack = function() {
        var g = ie.getCurrentStack;
        return g === null ? null : g();
      }, q.cloneElement = function(g, x, ae) {
        if (g == null)
          throw Error(
            "The argument must be a React element, but you passed " + g + "."
          );
        var ce = Kn({}, g.props), ge = g.key, Me = g._owner;
        if (x != null) {
          var Ee;
          e: {
            if (Ie.call(x, "ref") && (Ee = Object.getOwnPropertyDescriptor(
              x,
              "ref"
            ).get) && Ee.isReactWarning) {
              Ee = !1;
              break e;
            }
            Ee = x.ref !== void 0;
          }
          Ee && (Me = oe()), We(x) && (de(x.key), ge = "" + x.key);
          for (nt in x)
            !Ie.call(x, nt) || nt === "key" || nt === "__self" || nt === "__source" || nt === "ref" && x.ref === void 0 || (ce[nt] = x[nt]);
        }
        var nt = arguments.length - 2;
        if (nt === 1) ce.children = ae;
        else if (1 < nt) {
          Ee = Array(nt);
          for (var je = 0; je < nt; je++)
            Ee[je] = arguments[je + 2];
          ce.children = Ee;
        }
        for (ce = Ot(
          g.type,
          ge,
          ce,
          Me,
          g._debugStack,
          g._debugTask
        ), ge = 2; ge < arguments.length; ge++)
          wt(arguments[ge]);
        return ce;
      }, q.createContext = function(g) {
        return g = {
          $$typeof: Ae,
          _currentValue: g,
          _currentValue2: g,
          _threadCount: 0,
          Provider: null,
          Consumer: null
        }, g.Provider = g, g.Consumer = {
          $$typeof: le,
          _context: g
        }, g._currentRenderer = null, g._currentRenderer2 = null, g;
      }, q.createElement = function(g, x, ae) {
        for (var ce = 2; ce < arguments.length; ce++)
          wt(arguments[ce]);
        ce = {};
        var ge = null;
        if (x != null)
          for (je in ul || !("__self" in x) || "key" in x || (ul = !0, console.warn(
            "Your app (or one of its dependencies) is using an outdated JSX transform. Update to the modern JSX transform for faster performance: https://react.dev/link/new-jsx-transform"
          )), We(x) && (de(x.key), ge = "" + x.key), x)
            Ie.call(x, je) && je !== "key" && je !== "__self" && je !== "__source" && (ce[je] = x[je]);
        var Me = arguments.length - 2;
        if (Me === 1) ce.children = ae;
        else if (1 < Me) {
          for (var Ee = Array(Me), nt = 0; nt < Me; nt++)
            Ee[nt] = arguments[nt + 2];
          Object.freeze && Object.freeze(Ee), ce.children = Ee;
        }
        if (g && g.defaultProps)
          for (je in Me = g.defaultProps, Me)
            ce[je] === void 0 && (ce[je] = Me[je]);
        ge && Qe(
          ce,
          typeof g == "function" ? g.displayName || g.name || "Unknown" : g
        );
        var je = 1e4 > ie.recentlyCreatedOwnerStacks++;
        return Ot(
          g,
          ge,
          ce,
          oe(),
          je ? Error("react-stack-top-frame") : Gl,
          je ? da(H(g)) : un
        );
      }, q.createRef = function() {
        var g = { current: null };
        return Object.seal(g), g;
      }, q.forwardRef = function(g) {
        g != null && g.$$typeof === Et ? console.error(
          "forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...))."
        ) : typeof g != "function" ? console.error(
          "forwardRef requires a render function but was given %s.",
          g === null ? "null" : typeof g
        ) : g.length !== 0 && g.length !== 2 && console.error(
          "forwardRef render functions accept exactly two parameters: props and ref. %s",
          g.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."
        ), g != null && g.defaultProps != null && console.error(
          "forwardRef render functions do not support defaultProps. Did you accidentally pass a React component?"
        );
        var x = { $$typeof: qe, render: g }, ae;
        return Object.defineProperty(x, "displayName", {
          enumerable: !1,
          configurable: !0,
          get: function() {
            return ae;
          },
          set: function(ce) {
            ae = ce, g.name || g.displayName || (Object.defineProperty(g, "name", { value: ce }), g.displayName = ce);
          }
        }), x;
      }, q.isValidElement = Vt, q.lazy = function(g) {
        g = { _status: -1, _result: g };
        var x = {
          $$typeof: Fl,
          _payload: g,
          _init: Ht
        }, ae = {
          name: "lazy",
          start: -1,
          end: -1,
          value: null,
          owner: null,
          debugStack: Error("react-stack-top-frame"),
          debugTask: console.createTask ? console.createTask("lazy()") : null
        };
        return g._ioInfo = ae, x._debugInfo = [{ awaited: ae }], x;
      }, q.memo = function(g, x) {
        g == null && console.error(
          "memo: The first argument must be a component. Instead received: %s",
          g === null ? "null" : typeof g
        ), x = {
          $$typeof: Et,
          type: g,
          compare: x === void 0 ? null : x
        };
        var ae;
        return Object.defineProperty(x, "displayName", {
          enumerable: !1,
          configurable: !0,
          get: function() {
            return ae;
          },
          set: function(ce) {
            ae = ce, g.name || g.displayName || (Object.defineProperty(g, "name", { value: ce }), g.displayName = ce);
          }
        }), x;
      }, q.startTransition = function(g) {
        var x = ie.T, ae = {};
        ae._updatedFibers = /* @__PURE__ */ new Set(), ie.T = ae;
        try {
          var ce = g(), ge = ie.S;
          ge !== null && ge(ae, ce), typeof ce == "object" && ce !== null && typeof ce.then == "function" && (ie.asyncTransitions++, ce.then(Je, Je), ce.then(W, su));
        } catch (Me) {
          su(Me);
        } finally {
          x === null && ae._updatedFibers && (g = ae._updatedFibers.size, ae._updatedFibers.clear(), 10 < g && console.warn(
            "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
          )), x !== null && ae.types !== null && (x.types !== null && x.types !== ae.types && console.error(
            "We expected inner Transitions to have transferred the outer types set and that you cannot add to the outer Transition while inside the inner.This is a bug in React."
          ), x.types = ae.types), ie.T = x;
        }
      }, q.unstable_useCacheRefresh = function() {
        return Se().useCacheRefresh();
      }, q.use = function(g) {
        return Se().use(g);
      }, q.useActionState = function(g, x, ae) {
        return Se().useActionState(
          g,
          x,
          ae
        );
      }, q.useCallback = function(g, x) {
        return Se().useCallback(g, x);
      }, q.useContext = function(g) {
        var x = Se();
        return g.$$typeof === le && console.error(
          "Calling useContext(Context.Consumer) is not supported and will cause bugs. Did you mean to call useContext(Context) instead?"
        ), x.useContext(g);
      }, q.useDebugValue = function(g, x) {
        return Se().useDebugValue(g, x);
      }, q.useDeferredValue = function(g, x) {
        return Se().useDeferredValue(g, x);
      }, q.useEffect = function(g, x) {
        return g == null && console.warn(
          "React Hook useEffect requires an effect callback. Did you forget to pass a callback to the hook?"
        ), Se().useEffect(g, x);
      }, q.useEffectEvent = function(g) {
        return Se().useEffectEvent(g);
      }, q.useId = function() {
        return Se().useId();
      }, q.useImperativeHandle = function(g, x, ae) {
        return Se().useImperativeHandle(g, x, ae);
      }, q.useInsertionEffect = function(g, x) {
        return g == null && console.warn(
          "React Hook useInsertionEffect requires an effect callback. Did you forget to pass a callback to the hook?"
        ), Se().useInsertionEffect(g, x);
      }, q.useLayoutEffect = function(g, x) {
        return g == null && console.warn(
          "React Hook useLayoutEffect requires an effect callback. Did you forget to pass a callback to the hook?"
        ), Se().useLayoutEffect(g, x);
      }, q.useMemo = function(g, x) {
        return Se().useMemo(g, x);
      }, q.useOptimistic = function(g, x) {
        return Se().useOptimistic(g, x);
      }, q.useReducer = function(g, x, ae) {
        return Se().useReducer(g, x, ae);
      }, q.useRef = function(g) {
        return Se().useRef(g);
      }, q.useState = function(g) {
        return Se().useState(g);
      }, q.useSyncExternalStore = function(g, x, ae) {
        return Se().useSyncExternalStore(
          g,
          x,
          ae
        );
      }, q.useTransition = function() {
        return Se().useTransition();
      }, q.version = "19.2.8", typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
    })();
  })(zp, zp.exports)), zp.exports;
}
var X2;
function Ym() {
  return X2 || (X2 = 1, process.env.NODE_ENV === "production" ? Kv.exports = NT() : Kv.exports = BT()), Kv.exports;
}
var V2;
function YT() {
  return V2 || (V2 = 1, process.env.NODE_ENV !== "production" && (function() {
    function T(b) {
      if (b == null) return null;
      if (typeof b == "function")
        return b.$$typeof === Ht ? null : b.displayName || b.name || null;
      if (typeof b == "string") return b;
      switch (b) {
        case Qe:
          return "Fragment";
        case Ot:
          return "Profiler";
        case Ne:
          return "StrictMode";
        case Ft:
          return "Suspense";
        case Ue:
          return "SuspenseList";
        case pe:
          return "Activity";
      }
      if (typeof b == "object")
        switch (typeof b.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), b.$$typeof) {
          case We:
            return "Portal";
          case wt:
            return b.displayName || "Context";
          case tt:
            return (b._context.displayName || "Context") + ".Consumer";
          case Vt:
            var B = b.render;
            return b = b.displayName, b || (b = B.displayName || B.name || "", b = b !== "" ? "ForwardRef(" + b + ")" : "ForwardRef"), b;
          case lt:
            return B = b.displayName || null, B !== null ? B : T(b.type) || "Memo";
          case gt:
            B = b._payload, b = b._init;
            try {
              return T(b(B));
            } catch {
            }
        }
      return null;
    }
    function q(b) {
      return "" + b;
    }
    function ne(b) {
      try {
        q(b);
        var B = !1;
      } catch {
        B = !0;
      }
      if (B) {
        B = console;
        var $ = B.error, le = typeof Symbol == "function" && Symbol.toStringTag && b[Symbol.toStringTag] || b.constructor.name || "Object";
        return $.call(
          B,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          le
        ), q(b);
      }
    }
    function E(b) {
      if (b === Qe) return "<>";
      if (typeof b == "object" && b !== null && b.$$typeof === gt)
        return "<...>";
      try {
        var B = T(b);
        return B ? "<" + B + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function ee() {
      var b = Se.A;
      return b === null ? null : b.getOwner();
    }
    function te() {
      return Error("react-stack-top-frame");
    }
    function he(b) {
      if (Je.call(b, "key")) {
        var B = Object.getOwnPropertyDescriptor(b, "key").get;
        if (B && B.isReactWarning) return !1;
      }
      return b.key !== void 0;
    }
    function Q(b, B) {
      function $() {
        D || (D = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          B
        ));
      }
      $.isReactWarning = !0, Object.defineProperty(b, "key", {
        get: $,
        configurable: !0
      });
    }
    function W() {
      var b = T(this.type);
      return v[b] || (v[b] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), b = this.props.ref, b !== void 0 ? b : null;
    }
    function V(b, B, $, le, Ae, qe) {
      var Oe = $.ref;
      return b = {
        $$typeof: ze,
        type: b,
        key: B,
        props: $,
        _owner: le
      }, (Oe !== void 0 ? Oe : null) !== null ? Object.defineProperty(b, "ref", {
        enumerable: !1,
        get: W
      }) : Object.defineProperty(b, "ref", { enumerable: !1, value: null }), b._store = {}, Object.defineProperty(b._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(b, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(b, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: Ae
      }), Object.defineProperty(b, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: qe
      }), Object.freeze && (Object.freeze(b.props), Object.freeze(b)), b;
    }
    function de(b, B, $, le, Ae, qe) {
      var Oe = B.children;
      if (Oe !== void 0)
        if (le)
          if (Be(Oe)) {
            for (le = 0; le < Oe.length; le++)
              Y(Oe[le]);
            Object.freeze && Object.freeze(Oe);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else Y(Oe);
      if (Je.call(B, "key")) {
        Oe = T(b);
        var Qt = Object.keys(B).filter(function(Fl) {
          return Fl !== "key";
        });
        le = 0 < Qt.length ? "{key: someKey, " + Qt.join(": ..., ") + ": ...}" : "{key: someKey}", ve[Oe + le] || (Qt = 0 < Qt.length ? "{" + Qt.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          le,
          Oe,
          Qt,
          Oe
        ), ve[Oe + le] = !0);
      }
      if (Oe = null, $ !== void 0 && (ne($), Oe = "" + $), he(B) && (ne(B.key), Oe = "" + B.key), "key" in B) {
        $ = {};
        for (var Et in B)
          Et !== "key" && ($[Et] = B[Et]);
      } else $ = B;
      return Oe && Q(
        $,
        typeof b == "function" ? b.displayName || b.name || "Unknown" : b
      ), V(
        b,
        Oe,
        $,
        ee(),
        Ae,
        qe
      );
    }
    function Y(b) {
      H(b) ? b._store && (b._store.validated = 1) : typeof b == "object" && b !== null && b.$$typeof === gt && (b._payload.status === "fulfilled" ? H(b._payload.value) && b._payload.value._store && (b._payload.value._store.validated = 1) : b._store && (b._store.validated = 1));
    }
    function H(b) {
      return typeof b == "object" && b !== null && b.$$typeof === ze;
    }
    var oe = Ym(), ze = /* @__PURE__ */ Symbol.for("react.transitional.element"), We = /* @__PURE__ */ Symbol.for("react.portal"), Qe = /* @__PURE__ */ Symbol.for("react.fragment"), Ne = /* @__PURE__ */ Symbol.for("react.strict_mode"), Ot = /* @__PURE__ */ Symbol.for("react.profiler"), tt = /* @__PURE__ */ Symbol.for("react.consumer"), wt = /* @__PURE__ */ Symbol.for("react.context"), Vt = /* @__PURE__ */ Symbol.for("react.forward_ref"), Ft = /* @__PURE__ */ Symbol.for("react.suspense"), Ue = /* @__PURE__ */ Symbol.for("react.suspense_list"), lt = /* @__PURE__ */ Symbol.for("react.memo"), gt = /* @__PURE__ */ Symbol.for("react.lazy"), pe = /* @__PURE__ */ Symbol.for("react.activity"), Ht = /* @__PURE__ */ Symbol.for("react.client.reference"), Se = oe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Je = Object.prototype.hasOwnProperty, Be = Array.isArray, ft = console.createTask ? console.createTask : function() {
      return null;
    };
    oe = {
      react_stack_bottom_frame: function(b) {
        return b();
      }
    };
    var D, v = {}, ue = oe.react_stack_bottom_frame.bind(
      oe,
      te
    )(), me = ft(E(te)), ve = {};
    Rp.Fragment = Qe, Rp.jsx = function(b, B, $) {
      var le = 1e4 > Se.recentlyCreatedOwnerStacks++;
      return de(
        b,
        B,
        $,
        !1,
        le ? Error("react-stack-top-frame") : ue,
        le ? ft(E(b)) : me
      );
    }, Rp.jsxs = function(b, B, $) {
      var le = 1e4 > Se.recentlyCreatedOwnerStacks++;
      return de(
        b,
        B,
        $,
        !0,
        le ? Error("react-stack-top-frame") : ue,
        le ? ft(E(b)) : me
      );
    };
  })()), Rp;
}
var Q2;
function wT() {
  return Q2 || (Q2 = 1, process.env.NODE_ENV === "production" ? Jv.exports = xT() : Jv.exports = YT()), Jv.exports;
}
var DS = wT(), pf = Ym(), $v = { exports: {} }, _p = {}, kv = { exports: {} }, AS = {};
var Z2;
function qT() {
  return Z2 || (Z2 = 1, (function(T) {
    function q(D, v) {
      var ue = D.length;
      D.push(v);
      e: for (; 0 < ue; ) {
        var me = ue - 1 >>> 1, ve = D[me];
        if (0 < ee(ve, v))
          D[me] = v, D[ue] = ve, ue = me;
        else break e;
      }
    }
    function ne(D) {
      return D.length === 0 ? null : D[0];
    }
    function E(D) {
      if (D.length === 0) return null;
      var v = D[0], ue = D.pop();
      if (ue !== v) {
        D[0] = ue;
        e: for (var me = 0, ve = D.length, b = ve >>> 1; me < b; ) {
          var B = 2 * (me + 1) - 1, $ = D[B], le = B + 1, Ae = D[le];
          if (0 > ee($, ue))
            le < ve && 0 > ee(Ae, $) ? (D[me] = Ae, D[le] = ue, me = le) : (D[me] = $, D[B] = ue, me = B);
          else if (le < ve && 0 > ee(Ae, ue))
            D[me] = Ae, D[le] = ue, me = le;
          else break e;
        }
      }
      return v;
    }
    function ee(D, v) {
      var ue = D.sortIndex - v.sortIndex;
      return ue !== 0 ? ue : D.id - v.id;
    }
    if (T.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var te = performance;
      T.unstable_now = function() {
        return te.now();
      };
    } else {
      var he = Date, Q = he.now();
      T.unstable_now = function() {
        return he.now() - Q;
      };
    }
    var W = [], V = [], de = 1, Y = null, H = 3, oe = !1, ze = !1, We = !1, Qe = !1, Ne = typeof setTimeout == "function" ? setTimeout : null, Ot = typeof clearTimeout == "function" ? clearTimeout : null, tt = typeof setImmediate < "u" ? setImmediate : null;
    function wt(D) {
      for (var v = ne(V); v !== null; ) {
        if (v.callback === null) E(V);
        else if (v.startTime <= D)
          E(V), v.sortIndex = v.expirationTime, q(W, v);
        else break;
        v = ne(V);
      }
    }
    function Vt(D) {
      if (We = !1, wt(D), !ze)
        if (ne(W) !== null)
          ze = !0, Ft || (Ft = !0, Se());
        else {
          var v = ne(V);
          v !== null && ft(Vt, v.startTime - D);
        }
    }
    var Ft = !1, Ue = -1, lt = 5, gt = -1;
    function pe() {
      return Qe ? !0 : !(T.unstable_now() - gt < lt);
    }
    function Ht() {
      if (Qe = !1, Ft) {
        var D = T.unstable_now();
        gt = D;
        var v = !0;
        try {
          e: {
            ze = !1, We && (We = !1, Ot(Ue), Ue = -1), oe = !0;
            var ue = H;
            try {
              t: {
                for (wt(D), Y = ne(W); Y !== null && !(Y.expirationTime > D && pe()); ) {
                  var me = Y.callback;
                  if (typeof me == "function") {
                    Y.callback = null, H = Y.priorityLevel;
                    var ve = me(
                      Y.expirationTime <= D
                    );
                    if (D = T.unstable_now(), typeof ve == "function") {
                      Y.callback = ve, wt(D), v = !0;
                      break t;
                    }
                    Y === ne(W) && E(W), wt(D);
                  } else E(W);
                  Y = ne(W);
                }
                if (Y !== null) v = !0;
                else {
                  var b = ne(V);
                  b !== null && ft(
                    Vt,
                    b.startTime - D
                  ), v = !1;
                }
              }
              break e;
            } finally {
              Y = null, H = ue, oe = !1;
            }
            v = void 0;
          }
        } finally {
          v ? Se() : Ft = !1;
        }
      }
    }
    var Se;
    if (typeof tt == "function")
      Se = function() {
        tt(Ht);
      };
    else if (typeof MessageChannel < "u") {
      var Je = new MessageChannel(), Be = Je.port2;
      Je.port1.onmessage = Ht, Se = function() {
        Be.postMessage(null);
      };
    } else
      Se = function() {
        Ne(Ht, 0);
      };
    function ft(D, v) {
      Ue = Ne(function() {
        D(T.unstable_now());
      }, v);
    }
    T.unstable_IdlePriority = 5, T.unstable_ImmediatePriority = 1, T.unstable_LowPriority = 4, T.unstable_NormalPriority = 3, T.unstable_Profiling = null, T.unstable_UserBlockingPriority = 2, T.unstable_cancelCallback = function(D) {
      D.callback = null;
    }, T.unstable_forceFrameRate = function(D) {
      0 > D || 125 < D ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : lt = 0 < D ? Math.floor(1e3 / D) : 5;
    }, T.unstable_getCurrentPriorityLevel = function() {
      return H;
    }, T.unstable_next = function(D) {
      switch (H) {
        case 1:
        case 2:
        case 3:
          var v = 3;
          break;
        default:
          v = H;
      }
      var ue = H;
      H = v;
      try {
        return D();
      } finally {
        H = ue;
      }
    }, T.unstable_requestPaint = function() {
      Qe = !0;
    }, T.unstable_runWithPriority = function(D, v) {
      switch (D) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          D = 3;
      }
      var ue = H;
      H = D;
      try {
        return v();
      } finally {
        H = ue;
      }
    }, T.unstable_scheduleCallback = function(D, v, ue) {
      var me = T.unstable_now();
      switch (typeof ue == "object" && ue !== null ? (ue = ue.delay, ue = typeof ue == "number" && 0 < ue ? me + ue : me) : ue = me, D) {
        case 1:
          var ve = -1;
          break;
        case 2:
          ve = 250;
          break;
        case 5:
          ve = 1073741823;
          break;
        case 4:
          ve = 1e4;
          break;
        default:
          ve = 5e3;
      }
      return ve = ue + ve, D = {
        id: de++,
        callback: v,
        priorityLevel: D,
        startTime: ue,
        expirationTime: ve,
        sortIndex: -1
      }, ue > me ? (D.sortIndex = ue, q(V, D), ne(W) === null && D === ne(V) && (We ? (Ot(Ue), Ue = -1) : We = !0, ft(Vt, ue - me))) : (D.sortIndex = ve, q(W, D), ze || oe || (ze = !0, Ft || (Ft = !0, Se()))), D;
    }, T.unstable_shouldYield = pe, T.unstable_wrapCallback = function(D) {
      var v = H;
      return function() {
        var ue = H;
        H = v;
        try {
          return D.apply(this, arguments);
        } finally {
          H = ue;
        }
      };
    };
  })(AS)), AS;
}
var RS = {};
var J2;
function jT() {
  return J2 || (J2 = 1, (function(T) {
    process.env.NODE_ENV !== "production" && (function() {
      function q() {
        if (Vt = !1, gt) {
          var D = T.unstable_now();
          Se = D;
          var v = !0;
          try {
            e: {
              tt = !1, wt && (wt = !1, Ue(pe), pe = -1), Ot = !0;
              var ue = Ne;
              try {
                t: {
                  for (he(D), Qe = E(oe); Qe !== null && !(Qe.expirationTime > D && W()); ) {
                    var me = Qe.callback;
                    if (typeof me == "function") {
                      Qe.callback = null, Ne = Qe.priorityLevel;
                      var ve = me(
                        Qe.expirationTime <= D
                      );
                      if (D = T.unstable_now(), typeof ve == "function") {
                        Qe.callback = ve, he(D), v = !0;
                        break t;
                      }
                      Qe === E(oe) && ee(oe), he(D);
                    } else ee(oe);
                    Qe = E(oe);
                  }
                  if (Qe !== null) v = !0;
                  else {
                    var b = E(ze);
                    b !== null && V(
                      Q,
                      b.startTime - D
                    ), v = !1;
                  }
                }
                break e;
              } finally {
                Qe = null, Ne = ue, Ot = !1;
              }
              v = void 0;
            }
          } finally {
            v ? Je() : gt = !1;
          }
        }
      }
      function ne(D, v) {
        var ue = D.length;
        D.push(v);
        e: for (; 0 < ue; ) {
          var me = ue - 1 >>> 1, ve = D[me];
          if (0 < te(ve, v))
            D[me] = v, D[ue] = ve, ue = me;
          else break e;
        }
      }
      function E(D) {
        return D.length === 0 ? null : D[0];
      }
      function ee(D) {
        if (D.length === 0) return null;
        var v = D[0], ue = D.pop();
        if (ue !== v) {
          D[0] = ue;
          e: for (var me = 0, ve = D.length, b = ve >>> 1; me < b; ) {
            var B = 2 * (me + 1) - 1, $ = D[B], le = B + 1, Ae = D[le];
            if (0 > te($, ue))
              le < ve && 0 > te(Ae, $) ? (D[me] = Ae, D[le] = ue, me = le) : (D[me] = $, D[B] = ue, me = B);
            else if (le < ve && 0 > te(Ae, ue))
              D[me] = Ae, D[le] = ue, me = le;
            else break e;
          }
        }
        return v;
      }
      function te(D, v) {
        var ue = D.sortIndex - v.sortIndex;
        return ue !== 0 ? ue : D.id - v.id;
      }
      function he(D) {
        for (var v = E(ze); v !== null; ) {
          if (v.callback === null) ee(ze);
          else if (v.startTime <= D)
            ee(ze), v.sortIndex = v.expirationTime, ne(oe, v);
          else break;
          v = E(ze);
        }
      }
      function Q(D) {
        if (wt = !1, he(D), !tt)
          if (E(oe) !== null)
            tt = !0, gt || (gt = !0, Je());
          else {
            var v = E(ze);
            v !== null && V(
              Q,
              v.startTime - D
            );
          }
      }
      function W() {
        return Vt ? !0 : !(T.unstable_now() - Se < Ht);
      }
      function V(D, v) {
        pe = Ft(function() {
          D(T.unstable_now());
        }, v);
      }
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error()), T.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
        var de = performance;
        T.unstable_now = function() {
          return de.now();
        };
      } else {
        var Y = Date, H = Y.now();
        T.unstable_now = function() {
          return Y.now() - H;
        };
      }
      var oe = [], ze = [], We = 1, Qe = null, Ne = 3, Ot = !1, tt = !1, wt = !1, Vt = !1, Ft = typeof setTimeout == "function" ? setTimeout : null, Ue = typeof clearTimeout == "function" ? clearTimeout : null, lt = typeof setImmediate < "u" ? setImmediate : null, gt = !1, pe = -1, Ht = 5, Se = -1;
      if (typeof lt == "function")
        var Je = function() {
          lt(q);
        };
      else if (typeof MessageChannel < "u") {
        var Be = new MessageChannel(), ft = Be.port2;
        Be.port1.onmessage = q, Je = function() {
          ft.postMessage(null);
        };
      } else
        Je = function() {
          Ft(q, 0);
        };
      T.unstable_IdlePriority = 5, T.unstable_ImmediatePriority = 1, T.unstable_LowPriority = 4, T.unstable_NormalPriority = 3, T.unstable_Profiling = null, T.unstable_UserBlockingPriority = 2, T.unstable_cancelCallback = function(D) {
        D.callback = null;
      }, T.unstable_forceFrameRate = function(D) {
        0 > D || 125 < D ? console.error(
          "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
        ) : Ht = 0 < D ? Math.floor(1e3 / D) : 5;
      }, T.unstable_getCurrentPriorityLevel = function() {
        return Ne;
      }, T.unstable_next = function(D) {
        switch (Ne) {
          case 1:
          case 2:
          case 3:
            var v = 3;
            break;
          default:
            v = Ne;
        }
        var ue = Ne;
        Ne = v;
        try {
          return D();
        } finally {
          Ne = ue;
        }
      }, T.unstable_requestPaint = function() {
        Vt = !0;
      }, T.unstable_runWithPriority = function(D, v) {
        switch (D) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            D = 3;
        }
        var ue = Ne;
        Ne = D;
        try {
          return v();
        } finally {
          Ne = ue;
        }
      }, T.unstable_scheduleCallback = function(D, v, ue) {
        var me = T.unstable_now();
        switch (typeof ue == "object" && ue !== null ? (ue = ue.delay, ue = typeof ue == "number" && 0 < ue ? me + ue : me) : ue = me, D) {
          case 1:
            var ve = -1;
            break;
          case 2:
            ve = 250;
            break;
          case 5:
            ve = 1073741823;
            break;
          case 4:
            ve = 1e4;
            break;
          default:
            ve = 5e3;
        }
        return ve = ue + ve, D = {
          id: We++,
          callback: v,
          priorityLevel: D,
          startTime: ue,
          expirationTime: ve,
          sortIndex: -1
        }, ue > me ? (D.sortIndex = ue, ne(ze, D), E(oe) === null && D === E(ze) && (wt ? (Ue(pe), pe = -1) : wt = !0, V(Q, ue - me))) : (D.sortIndex = ve, ne(oe, D), tt || Ot || (tt = !0, gt || (gt = !0, Je()))), D;
      }, T.unstable_shouldYield = W, T.unstable_wrapCallback = function(D) {
        var v = Ne;
        return function() {
          var ue = Ne;
          Ne = v;
          try {
            return D.apply(this, arguments);
          } finally {
            Ne = ue;
          }
        };
      }, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
    })();
  })(RS)), RS;
}
var K2;
function oE() {
  return K2 || (K2 = 1, process.env.NODE_ENV === "production" ? kv.exports = qT() : kv.exports = jT()), kv.exports;
}
var Fv = { exports: {} }, vn = {};
var $2;
function GT() {
  if ($2) return vn;
  $2 = 1;
  var T = Ym();
  function q(W) {
    var V = "https://react.dev/errors/" + W;
    if (1 < arguments.length) {
      V += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var de = 2; de < arguments.length; de++)
        V += "&args[]=" + encodeURIComponent(arguments[de]);
    }
    return "Minified React error #" + W + "; visit " + V + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function ne() {
  }
  var E = {
    d: {
      f: ne,
      r: function() {
        throw Error(q(522));
      },
      D: ne,
      C: ne,
      L: ne,
      m: ne,
      X: ne,
      S: ne,
      M: ne
    },
    p: 0,
    findDOMNode: null
  }, ee = /* @__PURE__ */ Symbol.for("react.portal");
  function te(W, V, de) {
    var Y = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: ee,
      key: Y == null ? null : "" + Y,
      children: W,
      containerInfo: V,
      implementation: de
    };
  }
  var he = T.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function Q(W, V) {
    if (W === "font") return "";
    if (typeof V == "string")
      return V === "use-credentials" ? V : "";
  }
  return vn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = E, vn.createPortal = function(W, V) {
    var de = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!V || V.nodeType !== 1 && V.nodeType !== 9 && V.nodeType !== 11)
      throw Error(q(299));
    return te(W, V, null, de);
  }, vn.flushSync = function(W) {
    var V = he.T, de = E.p;
    try {
      if (he.T = null, E.p = 2, W) return W();
    } finally {
      he.T = V, E.p = de, E.d.f();
    }
  }, vn.preconnect = function(W, V) {
    typeof W == "string" && (V ? (V = V.crossOrigin, V = typeof V == "string" ? V === "use-credentials" ? V : "" : void 0) : V = null, E.d.C(W, V));
  }, vn.prefetchDNS = function(W) {
    typeof W == "string" && E.d.D(W);
  }, vn.preinit = function(W, V) {
    if (typeof W == "string" && V && typeof V.as == "string") {
      var de = V.as, Y = Q(de, V.crossOrigin), H = typeof V.integrity == "string" ? V.integrity : void 0, oe = typeof V.fetchPriority == "string" ? V.fetchPriority : void 0;
      de === "style" ? E.d.S(
        W,
        typeof V.precedence == "string" ? V.precedence : void 0,
        {
          crossOrigin: Y,
          integrity: H,
          fetchPriority: oe
        }
      ) : de === "script" && E.d.X(W, {
        crossOrigin: Y,
        integrity: H,
        fetchPriority: oe,
        nonce: typeof V.nonce == "string" ? V.nonce : void 0
      });
    }
  }, vn.preinitModule = function(W, V) {
    if (typeof W == "string")
      if (typeof V == "object" && V !== null) {
        if (V.as == null || V.as === "script") {
          var de = Q(
            V.as,
            V.crossOrigin
          );
          E.d.M(W, {
            crossOrigin: de,
            integrity: typeof V.integrity == "string" ? V.integrity : void 0,
            nonce: typeof V.nonce == "string" ? V.nonce : void 0
          });
        }
      } else V == null && E.d.M(W);
  }, vn.preload = function(W, V) {
    if (typeof W == "string" && typeof V == "object" && V !== null && typeof V.as == "string") {
      var de = V.as, Y = Q(de, V.crossOrigin);
      E.d.L(W, de, {
        crossOrigin: Y,
        integrity: typeof V.integrity == "string" ? V.integrity : void 0,
        nonce: typeof V.nonce == "string" ? V.nonce : void 0,
        type: typeof V.type == "string" ? V.type : void 0,
        fetchPriority: typeof V.fetchPriority == "string" ? V.fetchPriority : void 0,
        referrerPolicy: typeof V.referrerPolicy == "string" ? V.referrerPolicy : void 0,
        imageSrcSet: typeof V.imageSrcSet == "string" ? V.imageSrcSet : void 0,
        imageSizes: typeof V.imageSizes == "string" ? V.imageSizes : void 0,
        media: typeof V.media == "string" ? V.media : void 0
      });
    }
  }, vn.preloadModule = function(W, V) {
    if (typeof W == "string")
      if (V) {
        var de = Q(V.as, V.crossOrigin);
        E.d.m(W, {
          as: typeof V.as == "string" && V.as !== "script" ? V.as : void 0,
          crossOrigin: de,
          integrity: typeof V.integrity == "string" ? V.integrity : void 0
        });
      } else E.d.m(W);
  }, vn.requestFormReset = function(W) {
    E.d.r(W);
  }, vn.unstable_batchedUpdates = function(W, V) {
    return W(V);
  }, vn.useFormState = function(W, V, de) {
    return he.H.useFormState(W, V, de);
  }, vn.useFormStatus = function() {
    return he.H.useHostTransitionStatus();
  }, vn.version = "19.2.8", vn;
}
var Sn = {};
var k2;
function LT() {
  return k2 || (k2 = 1, process.env.NODE_ENV !== "production" && (function() {
    function T() {
    }
    function q(Y) {
      return "" + Y;
    }
    function ne(Y, H, oe) {
      var ze = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
      try {
        q(ze);
        var We = !1;
      } catch {
        We = !0;
      }
      return We && (console.error(
        "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
        typeof Symbol == "function" && Symbol.toStringTag && ze[Symbol.toStringTag] || ze.constructor.name || "Object"
      ), q(ze)), {
        $$typeof: V,
        key: ze == null ? null : "" + ze,
        children: Y,
        containerInfo: H,
        implementation: oe
      };
    }
    function E(Y, H) {
      if (Y === "font") return "";
      if (typeof H == "string")
        return H === "use-credentials" ? H : "";
    }
    function ee(Y) {
      return Y === null ? "`null`" : Y === void 0 ? "`undefined`" : Y === "" ? "an empty string" : 'something with type "' + typeof Y + '"';
    }
    function te(Y) {
      return Y === null ? "`null`" : Y === void 0 ? "`undefined`" : Y === "" ? "an empty string" : typeof Y == "string" ? JSON.stringify(Y) : typeof Y == "number" ? "`" + Y + "`" : 'something with type "' + typeof Y + '"';
    }
    function he() {
      var Y = de.H;
      return Y === null && console.error(
        `Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`
      ), Y;
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var Q = Ym(), W = {
      d: {
        f: T,
        r: function() {
          throw Error(
            "Invalid form element. requestFormReset must be passed a form that was rendered by React."
          );
        },
        D: T,
        C: T,
        L: T,
        m: T,
        X: T,
        S: T,
        M: T
      },
      p: 0,
      findDOMNode: null
    }, V = /* @__PURE__ */ Symbol.for("react.portal"), de = Q.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    typeof Map == "function" && Map.prototype != null && typeof Map.prototype.forEach == "function" && typeof Set == "function" && Set.prototype != null && typeof Set.prototype.clear == "function" && typeof Set.prototype.forEach == "function" || console.error(
      "React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"
    ), Sn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = W, Sn.createPortal = function(Y, H) {
      var oe = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!H || H.nodeType !== 1 && H.nodeType !== 9 && H.nodeType !== 11)
        throw Error("Target container is not a DOM element.");
      return ne(Y, H, null, oe);
    }, Sn.flushSync = function(Y) {
      var H = de.T, oe = W.p;
      try {
        if (de.T = null, W.p = 2, Y)
          return Y();
      } finally {
        de.T = H, W.p = oe, W.d.f() && console.error(
          "flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."
        );
      }
    }, Sn.preconnect = function(Y, H) {
      typeof Y == "string" && Y ? H != null && typeof H != "object" ? console.error(
        "ReactDOM.preconnect(): Expected the `options` argument (second) to be an object but encountered %s instead. The only supported option at this time is `crossOrigin` which accepts a string.",
        te(H)
      ) : H != null && typeof H.crossOrigin != "string" && console.error(
        "ReactDOM.preconnect(): Expected the `crossOrigin` option (second argument) to be a string but encountered %s instead. Try removing this option or passing a string value instead.",
        ee(H.crossOrigin)
      ) : console.error(
        "ReactDOM.preconnect(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",
        ee(Y)
      ), typeof Y == "string" && (H ? (H = H.crossOrigin, H = typeof H == "string" ? H === "use-credentials" ? H : "" : void 0) : H = null, W.d.C(Y, H));
    }, Sn.prefetchDNS = function(Y) {
      if (typeof Y != "string" || !Y)
        console.error(
          "ReactDOM.prefetchDNS(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",
          ee(Y)
        );
      else if (1 < arguments.length) {
        var H = arguments[1];
        typeof H == "object" && H.hasOwnProperty("crossOrigin") ? console.error(
          "ReactDOM.prefetchDNS(): Expected only one argument, `href`, but encountered %s as a second argument instead. This argument is reserved for future options and is currently disallowed. It looks like the you are attempting to set a crossOrigin property for this DNS lookup hint. Browsers do not perform DNS queries using CORS and setting this attribute on the resource hint has no effect. Try calling ReactDOM.prefetchDNS() with just a single string argument, `href`.",
          te(H)
        ) : console.error(
          "ReactDOM.prefetchDNS(): Expected only one argument, `href`, but encountered %s as a second argument instead. This argument is reserved for future options and is currently disallowed. Try calling ReactDOM.prefetchDNS() with just a single string argument, `href`.",
          te(H)
        );
      }
      typeof Y == "string" && W.d.D(Y);
    }, Sn.preinit = function(Y, H) {
      if (typeof Y == "string" && Y ? H == null || typeof H != "object" ? console.error(
        "ReactDOM.preinit(): Expected the `options` argument (second) to be an object with an `as` property describing the type of resource to be preinitialized but encountered %s instead.",
        te(H)
      ) : H.as !== "style" && H.as !== "script" && console.error(
        'ReactDOM.preinit(): Expected the `as` property in the `options` argument (second) to contain a valid value describing the type of resource to be preinitialized but encountered %s instead. Valid values for `as` are "style" and "script".',
        te(H.as)
      ) : console.error(
        "ReactDOM.preinit(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",
        ee(Y)
      ), typeof Y == "string" && H && typeof H.as == "string") {
        var oe = H.as, ze = E(oe, H.crossOrigin), We = typeof H.integrity == "string" ? H.integrity : void 0, Qe = typeof H.fetchPriority == "string" ? H.fetchPriority : void 0;
        oe === "style" ? W.d.S(
          Y,
          typeof H.precedence == "string" ? H.precedence : void 0,
          {
            crossOrigin: ze,
            integrity: We,
            fetchPriority: Qe
          }
        ) : oe === "script" && W.d.X(Y, {
          crossOrigin: ze,
          integrity: We,
          fetchPriority: Qe,
          nonce: typeof H.nonce == "string" ? H.nonce : void 0
        });
      }
    }, Sn.preinitModule = function(Y, H) {
      var oe = "";
      typeof Y == "string" && Y || (oe += " The `href` argument encountered was " + ee(Y) + "."), H !== void 0 && typeof H != "object" ? oe += " The `options` argument encountered was " + ee(H) + "." : H && "as" in H && H.as !== "script" && (oe += " The `as` option encountered was " + te(H.as) + "."), oe ? console.error(
        "ReactDOM.preinitModule(): Expected up to two arguments, a non-empty `href` string and, optionally, an `options` object with a valid `as` property.%s",
        oe
      ) : (oe = H && typeof H.as == "string" ? H.as : "script", oe) === "script" || (oe = te(oe), console.error(
        'ReactDOM.preinitModule(): Currently the only supported "as" type for this function is "script" but received "%s" instead. This warning was generated for `href` "%s". In the future other module types will be supported, aligning with the import-attributes proposal. Learn more here: (https://github.com/tc39/proposal-import-attributes)',
        oe,
        Y
      )), typeof Y == "string" && (typeof H == "object" && H !== null ? (H.as == null || H.as === "script") && (oe = E(
        H.as,
        H.crossOrigin
      ), W.d.M(Y, {
        crossOrigin: oe,
        integrity: typeof H.integrity == "string" ? H.integrity : void 0,
        nonce: typeof H.nonce == "string" ? H.nonce : void 0
      })) : H == null && W.d.M(Y));
    }, Sn.preload = function(Y, H) {
      var oe = "";
      if (typeof Y == "string" && Y || (oe += " The `href` argument encountered was " + ee(Y) + "."), H == null || typeof H != "object" ? oe += " The `options` argument encountered was " + ee(H) + "." : typeof H.as == "string" && H.as || (oe += " The `as` option encountered was " + ee(H.as) + "."), oe && console.error(
        'ReactDOM.preload(): Expected two arguments, a non-empty `href` string and an `options` object with an `as` property valid for a `<link rel="preload" as="..." />` tag.%s',
        oe
      ), typeof Y == "string" && typeof H == "object" && H !== null && typeof H.as == "string") {
        oe = H.as;
        var ze = E(
          oe,
          H.crossOrigin
        );
        W.d.L(Y, oe, {
          crossOrigin: ze,
          integrity: typeof H.integrity == "string" ? H.integrity : void 0,
          nonce: typeof H.nonce == "string" ? H.nonce : void 0,
          type: typeof H.type == "string" ? H.type : void 0,
          fetchPriority: typeof H.fetchPriority == "string" ? H.fetchPriority : void 0,
          referrerPolicy: typeof H.referrerPolicy == "string" ? H.referrerPolicy : void 0,
          imageSrcSet: typeof H.imageSrcSet == "string" ? H.imageSrcSet : void 0,
          imageSizes: typeof H.imageSizes == "string" ? H.imageSizes : void 0,
          media: typeof H.media == "string" ? H.media : void 0
        });
      }
    }, Sn.preloadModule = function(Y, H) {
      var oe = "";
      typeof Y == "string" && Y || (oe += " The `href` argument encountered was " + ee(Y) + "."), H !== void 0 && typeof H != "object" ? oe += " The `options` argument encountered was " + ee(H) + "." : H && "as" in H && typeof H.as != "string" && (oe += " The `as` option encountered was " + ee(H.as) + "."), oe && console.error(
        'ReactDOM.preloadModule(): Expected two arguments, a non-empty `href` string and, optionally, an `options` object with an `as` property valid for a `<link rel="modulepreload" as="..." />` tag.%s',
        oe
      ), typeof Y == "string" && (H ? (oe = E(
        H.as,
        H.crossOrigin
      ), W.d.m(Y, {
        as: typeof H.as == "string" && H.as !== "script" ? H.as : void 0,
        crossOrigin: oe,
        integrity: typeof H.integrity == "string" ? H.integrity : void 0
      })) : W.d.m(Y));
    }, Sn.requestFormReset = function(Y) {
      W.d.r(Y);
    }, Sn.unstable_batchedUpdates = function(Y, H) {
      return Y(H);
    }, Sn.useFormState = function(Y, H, oe) {
      return he().useFormState(Y, H, oe);
    }, Sn.useFormStatus = function() {
      return he().useHostTransitionStatus();
    }, Sn.version = "19.2.8", typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  })()), Sn;
}
var F2;
function fE() {
  if (F2) return Fv.exports;
  F2 = 1;
  function T() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
      if (process.env.NODE_ENV !== "production")
        throw new Error("^_^");
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(T);
      } catch (q) {
        console.error(q);
      }
    }
  }
  return process.env.NODE_ENV === "production" ? (T(), Fv.exports = GT()) : Fv.exports = LT(), Fv.exports;
}
var W2;
function XT() {
  if (W2) return _p;
  W2 = 1;
  var T = oE(), q = Ym(), ne = fE();
  function E(l) {
    var n = "https://react.dev/errors/" + l;
    if (1 < arguments.length) {
      n += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var u = 2; u < arguments.length; u++)
        n += "&args[]=" + encodeURIComponent(arguments[u]);
    }
    return "Minified React error #" + l + "; visit " + n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function ee(l) {
    return !(!l || l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11);
  }
  function te(l) {
    var n = l, u = l;
    if (l.alternate) for (; n.return; ) n = n.return;
    else {
      l = n;
      do
        n = l, (n.flags & 4098) !== 0 && (u = n.return), l = n.return;
      while (l);
    }
    return n.tag === 3 ? u : null;
  }
  function he(l) {
    if (l.tag === 13) {
      var n = l.memoizedState;
      if (n === null && (l = l.alternate, l !== null && (n = l.memoizedState)), n !== null) return n.dehydrated;
    }
    return null;
  }
  function Q(l) {
    if (l.tag === 31) {
      var n = l.memoizedState;
      if (n === null && (l = l.alternate, l !== null && (n = l.memoizedState)), n !== null) return n.dehydrated;
    }
    return null;
  }
  function W(l) {
    if (te(l) !== l)
      throw Error(E(188));
  }
  function V(l) {
    var n = l.alternate;
    if (!n) {
      if (n = te(l), n === null) throw Error(E(188));
      return n !== l ? null : l;
    }
    for (var u = l, c = n; ; ) {
      var r = u.return;
      if (r === null) break;
      var s = r.alternate;
      if (s === null) {
        if (c = r.return, c !== null) {
          u = c;
          continue;
        }
        break;
      }
      if (r.child === s.child) {
        for (s = r.child; s; ) {
          if (s === u) return W(r), l;
          if (s === c) return W(r), n;
          s = s.sibling;
        }
        throw Error(E(188));
      }
      if (u.return !== c.return) u = r, c = s;
      else {
        for (var m = !1, S = r.child; S; ) {
          if (S === u) {
            m = !0, u = r, c = s;
            break;
          }
          if (S === c) {
            m = !0, c = r, u = s;
            break;
          }
          S = S.sibling;
        }
        if (!m) {
          for (S = s.child; S; ) {
            if (S === u) {
              m = !0, u = s, c = r;
              break;
            }
            if (S === c) {
              m = !0, c = s, u = r;
              break;
            }
            S = S.sibling;
          }
          if (!m) throw Error(E(189));
        }
      }
      if (u.alternate !== c) throw Error(E(190));
    }
    if (u.tag !== 3) throw Error(E(188));
    return u.stateNode.current === u ? l : n;
  }
  function de(l) {
    var n = l.tag;
    if (n === 5 || n === 26 || n === 27 || n === 6) return l;
    for (l = l.child; l !== null; ) {
      if (n = de(l), n !== null) return n;
      l = l.sibling;
    }
    return null;
  }
  var Y = Object.assign, H = /* @__PURE__ */ Symbol.for("react.element"), oe = /* @__PURE__ */ Symbol.for("react.transitional.element"), ze = /* @__PURE__ */ Symbol.for("react.portal"), We = /* @__PURE__ */ Symbol.for("react.fragment"), Qe = /* @__PURE__ */ Symbol.for("react.strict_mode"), Ne = /* @__PURE__ */ Symbol.for("react.profiler"), Ot = /* @__PURE__ */ Symbol.for("react.consumer"), tt = /* @__PURE__ */ Symbol.for("react.context"), wt = /* @__PURE__ */ Symbol.for("react.forward_ref"), Vt = /* @__PURE__ */ Symbol.for("react.suspense"), Ft = /* @__PURE__ */ Symbol.for("react.suspense_list"), Ue = /* @__PURE__ */ Symbol.for("react.memo"), lt = /* @__PURE__ */ Symbol.for("react.lazy"), gt = /* @__PURE__ */ Symbol.for("react.activity"), pe = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), Ht = Symbol.iterator;
  function Se(l) {
    return l === null || typeof l != "object" ? null : (l = Ht && l[Ht] || l["@@iterator"], typeof l == "function" ? l : null);
  }
  var Je = /* @__PURE__ */ Symbol.for("react.client.reference");
  function Be(l) {
    if (l == null) return null;
    if (typeof l == "function")
      return l.$$typeof === Je ? null : l.displayName || l.name || null;
    if (typeof l == "string") return l;
    switch (l) {
      case We:
        return "Fragment";
      case Ne:
        return "Profiler";
      case Qe:
        return "StrictMode";
      case Vt:
        return "Suspense";
      case Ft:
        return "SuspenseList";
      case gt:
        return "Activity";
    }
    if (typeof l == "object")
      switch (l.$$typeof) {
        case ze:
          return "Portal";
        case tt:
          return l.displayName || "Context";
        case Ot:
          return (l._context.displayName || "Context") + ".Consumer";
        case wt:
          var n = l.render;
          return l = l.displayName, l || (l = n.displayName || n.name || "", l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef"), l;
        case Ue:
          return n = l.displayName || null, n !== null ? n : Be(l.type) || "Memo";
        case lt:
          n = l._payload, l = l._init;
          try {
            return Be(l(n));
          } catch {
          }
      }
    return null;
  }
  var ft = Array.isArray, D = q.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, v = ne.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, ue = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, me = [], ve = -1;
  function b(l) {
    return { current: l };
  }
  function B(l) {
    0 > ve || (l.current = me[ve], me[ve] = null, ve--);
  }
  function $(l, n) {
    ve++, me[ve] = l.current, l.current = n;
  }
  var le = b(null), Ae = b(null), qe = b(null), Oe = b(null);
  function Qt(l, n) {
    switch ($(qe, n), $(Ae, l), $(le, null), n.nodeType) {
      case 9:
      case 11:
        l = (l = n.documentElement) && (l = l.namespaceURI) ? wg(l) : 0;
        break;
      default:
        if (l = n.tagName, n = n.namespaceURI)
          n = wg(n), l = v0(n, l);
        else
          switch (l) {
            case "svg":
              l = 1;
              break;
            case "math":
              l = 2;
              break;
            default:
              l = 0;
          }
    }
    B(le), $(le, l);
  }
  function Et() {
    B(le), B(Ae), B(qe);
  }
  function Fl(l) {
    l.memoizedState !== null && $(Oe, l);
    var n = le.current, u = v0(n, l.type);
    n !== u && ($(Ae, l), $(le, u));
  }
  function fe(l) {
    Ae.current === l && (B(le), B(Ae)), Oe.current === l && (B(Oe), Ps._currentValue = ue);
  }
  var Ku, Jn;
  function _a(l) {
    if (Ku === void 0)
      try {
        throw Error();
      } catch (u) {
        var n = u.stack.trim().match(/\n( *(at )?)/);
        Ku = n && n[1] || "", Jn = -1 < u.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < u.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + Ku + l + Jn;
  }
  var Kn = !1;
  function rt(l, n) {
    if (!l || Kn) return "";
    Kn = !0;
    var u = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var c = {
        DetermineComponentFrameRoot: function() {
          try {
            if (n) {
              var I = function() {
                throw Error();
              };
              if (Object.defineProperty(I.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(I, []);
                } catch (J) {
                  var G = J;
                }
                Reflect.construct(l, [], I);
              } else {
                try {
                  I.call();
                } catch (J) {
                  G = J;
                }
                l.call(I.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (J) {
                G = J;
              }
              (I = l()) && typeof I.catch == "function" && I.catch(function() {
              });
            }
          } catch (J) {
            if (J && G && typeof J.stack == "string")
              return [J.stack, G.stack];
          }
          return [null, null];
        }
      };
      c.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var r = Object.getOwnPropertyDescriptor(
        c.DetermineComponentFrameRoot,
        "name"
      );
      r && r.configurable && Object.defineProperty(
        c.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var s = c.DetermineComponentFrameRoot(), m = s[0], S = s[1];
      if (m && S) {
        var O = m.split(`
`), j = S.split(`
`);
        for (r = c = 0; c < O.length && !O[c].includes("DetermineComponentFrameRoot"); )
          c++;
        for (; r < j.length && !j[r].includes(
          "DetermineComponentFrameRoot"
        ); )
          r++;
        if (c === O.length || r === j.length)
          for (c = O.length - 1, r = j.length - 1; 1 <= c && 0 <= r && O[c] !== j[r]; )
            r--;
        for (; 1 <= c && 0 <= r; c--, r--)
          if (O[c] !== j[r]) {
            if (c !== 1 || r !== 1)
              do
                if (c--, r--, 0 > r || O[c] !== j[r]) {
                  var K = `
` + O[c].replace(" at new ", " at ");
                  return l.displayName && K.includes("<anonymous>") && (K = K.replace("<anonymous>", l.displayName)), K;
                }
              while (1 <= c && 0 <= r);
            break;
          }
      }
    } finally {
      Kn = !1, Error.prepareStackTrace = u;
    }
    return (u = l ? l.displayName || l.name : "") ? _a(u) : "";
  }
  function ll(l, n) {
    switch (l.tag) {
      case 26:
      case 27:
      case 5:
        return _a(l.type);
      case 16:
        return _a("Lazy");
      case 13:
        return l.child !== n && n !== null ? _a("Suspense Fallback") : _a("Suspense");
      case 19:
        return _a("SuspenseList");
      case 0:
      case 15:
        return rt(l.type, !1);
      case 11:
        return rt(l.type.render, !1);
      case 1:
        return rt(l.type, !0);
      case 31:
        return _a("Activity");
      default:
        return "";
    }
  }
  function $u(l) {
    try {
      var n = "", u = null;
      do
        n += ll(l, u), u = l, l = l.return;
      while (l);
      return n;
    } catch (c) {
      return `
Error generating stack: ` + c.message + `
` + c.stack;
    }
  }
  var Sc = Object.prototype.hasOwnProperty, ie = T.unstable_scheduleCallback, Ie = T.unstable_cancelCallback, da = T.unstable_shouldYield, Hl = T.unstable_requestPaint, ul = T.unstable_now, ha = T.unstable_getCurrentPriorityLevel, Gl = T.unstable_ImmediatePriority, un = T.unstable_UserBlockingPriority, Ll = T.unstable_NormalPriority, bn = T.unstable_LowPriority, su = T.unstable_IdlePriority, ku = T.log, qa = T.unstable_setDisableYieldValue, Oa = null, vl = null;
  function ma(l) {
    if (typeof ku == "function" && qa(l), vl && typeof vl.setStrictMode == "function")
      try {
        vl.setStrictMode(Oa, l);
      } catch {
      }
  }
  var _l = Math.clz32 ? Math.clz32 : x, du = Math.log, g = Math.LN2;
  function x(l) {
    return l >>>= 0, l === 0 ? 32 : 31 - (du(l) / g | 0) | 0;
  }
  var ae = 256, ce = 262144, ge = 4194304;
  function Me(l) {
    var n = l & 42;
    if (n !== 0) return n;
    switch (l & -l) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return l & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return l & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return l & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return l;
    }
  }
  function Ee(l, n, u) {
    var c = l.pendingLanes;
    if (c === 0) return 0;
    var r = 0, s = l.suspendedLanes, m = l.pingedLanes;
    l = l.warmLanes;
    var S = c & 134217727;
    return S !== 0 ? (c = S & ~s, c !== 0 ? r = Me(c) : (m &= S, m !== 0 ? r = Me(m) : u || (u = S & ~l, u !== 0 && (r = Me(u))))) : (S = c & ~s, S !== 0 ? r = Me(S) : m !== 0 ? r = Me(m) : u || (u = c & ~l, u !== 0 && (r = Me(u)))), r === 0 ? 0 : n !== 0 && n !== r && (n & s) === 0 && (s = r & -r, u = n & -n, s >= u || s === 32 && (u & 4194048) !== 0) ? n : r;
  }
  function nt(l, n) {
    return (l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & n) === 0;
  }
  function je(l, n) {
    switch (l) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return n + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return n + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Sl() {
    var l = ge;
    return ge <<= 1, (ge & 62914560) === 0 && (ge = 4194304), l;
  }
  function ja(l) {
    for (var n = [], u = 0; 31 > u; u++) n.push(l);
    return n;
  }
  function En(l, n) {
    l.pendingLanes |= n, n !== 268435456 && (l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0);
  }
  function Fu(l, n, u, c, r, s) {
    var m = l.pendingLanes;
    l.pendingLanes = u, l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0, l.expiredLanes &= u, l.entangledLanes &= u, l.errorRecoveryDisabledLanes &= u, l.shellSuspendCounter = 0;
    var S = l.entanglements, O = l.expirationTimes, j = l.hiddenUpdates;
    for (u = m & ~u; 0 < u; ) {
      var K = 31 - _l(u), I = 1 << K;
      S[K] = 0, O[K] = -1;
      var G = j[K];
      if (G !== null)
        for (j[K] = null, K = 0; K < G.length; K++) {
          var J = G[K];
          J !== null && (J.lane &= -536870913);
        }
      u &= ~I;
    }
    c !== 0 && $n(l, c, 0), s !== 0 && r === 0 && l.tag !== 0 && (l.suspendedLanes |= s & ~(m & ~n));
  }
  function $n(l, n, u) {
    l.pendingLanes |= n, l.suspendedLanes &= ~n;
    var c = 31 - _l(n);
    l.entangledLanes |= n, l.entanglements[c] = l.entanglements[c] | 1073741824 | u & 261930;
  }
  function cn(l, n) {
    var u = l.entangledLanes |= n;
    for (l = l.entanglements; u; ) {
      var c = 31 - _l(u), r = 1 << c;
      r & n | l[c] & n && (l[c] |= n), u &= ~r;
    }
  }
  function Da(l, n) {
    var u = n & -n;
    return u = (u & 42) !== 0 ? 1 : uo(u), (u & (l.suspendedLanes | n)) !== 0 ? 0 : u;
  }
  function uo(l) {
    switch (l) {
      case 2:
        l = 1;
        break;
      case 8:
        l = 4;
        break;
      case 32:
        l = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        l = 128;
        break;
      case 268435456:
        l = 134217728;
        break;
      default:
        l = 0;
    }
    return l;
  }
  function De(l) {
    return l &= -l, 2 < l ? 8 < l ? (l & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function Pe() {
    var l = v.p;
    return l !== 0 ? l : (l = window.event, l === void 0 ? 32 : ed(l.type));
  }
  function Ge(l, n) {
    var u = v.p;
    try {
      return v.p = l, n();
    } finally {
      v.p = u;
    }
  }
  var xt = Math.random().toString(36).slice(2), Re = "__reactFiber$" + xt, qt = "__reactProps$" + xt, Xl = "__reactContainer$" + xt, Ga = "__reactEvents$" + xt, io = "__reactListeners$" + xt, Tn = "__reactHandles$" + xt, ji = "__reactResources$" + xt, ya = "__reactMarker$" + xt;
  function hu(l) {
    delete l[Re], delete l[qt], delete l[Ga], delete l[io], delete l[Tn];
  }
  function xl(l) {
    var n = l[Re];
    if (n) return n;
    for (var u = l.parentNode; u; ) {
      if (n = u[Xl] || u[Re]) {
        if (u = n.alternate, n.child !== null || u !== null && u.child !== null)
          for (l = ju(l); l !== null; ) {
            if (u = l[Re]) return u;
            l = ju(l);
          }
        return n;
      }
      l = u, u = l.parentNode;
    }
    return null;
  }
  function An(l) {
    if (l = l[Re] || l[Xl]) {
      var n = l.tag;
      if (n === 5 || n === 6 || n === 13 || n === 31 || n === 26 || n === 27 || n === 3)
        return l;
    }
    return null;
  }
  function Gi(l) {
    var n = l.tag;
    if (n === 5 || n === 26 || n === 27 || n === 6) return l.stateNode;
    throw Error(E(33));
  }
  function Wu(l) {
    var n = l[ji];
    return n || (n = l[ji] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), n;
  }
  function Mt(l) {
    l[ya] = !0;
  }
  var mu = /* @__PURE__ */ new Set(), pa = {};
  function yu(l, n) {
    Rn(l, n), Rn(l + "Capture", n);
  }
  function Rn(l, n) {
    for (pa[l] = n, l = 0; l < n.length; l++)
      mu.add(n[l]);
  }
  var co = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), Xe = {}, Ye = {};
  function Nl(l) {
    return Sc.call(Ye, l) ? !0 : Sc.call(Xe, l) ? !1 : co.test(l) ? Ye[l] = !0 : (Xe[l] = !0, !1);
  }
  function za(l, n, u) {
    if (Nl(n))
      if (u === null) l.removeAttribute(n);
      else {
        switch (typeof u) {
          case "undefined":
          case "function":
          case "symbol":
            l.removeAttribute(n);
            return;
          case "boolean":
            var c = n.toLowerCase().slice(0, 5);
            if (c !== "data-" && c !== "aria-") {
              l.removeAttribute(n);
              return;
            }
        }
        l.setAttribute(n, "" + u);
      }
  }
  function ga(l, n, u) {
    if (u === null) l.removeAttribute(n);
    else {
      switch (typeof u) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(n);
          return;
      }
      l.setAttribute(n, "" + u);
    }
  }
  function hl(l, n, u, c) {
    if (c === null) l.removeAttribute(u);
    else {
      switch (typeof c) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(u);
          return;
      }
      l.setAttributeNS(n, u, "" + c);
    }
  }
  function Bl(l) {
    switch (typeof l) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return l;
      case "object":
        return l;
      default:
        return "";
    }
  }
  function pu(l) {
    var n = l.type;
    return (l = l.nodeName) && l.toLowerCase() === "input" && (n === "checkbox" || n === "radio");
  }
  function Li(l, n, u) {
    var c = Object.getOwnPropertyDescriptor(
      l.constructor.prototype,
      n
    );
    if (!l.hasOwnProperty(n) && typeof c < "u" && typeof c.get == "function" && typeof c.set == "function") {
      var r = c.get, s = c.set;
      return Object.defineProperty(l, n, {
        configurable: !0,
        get: function() {
          return r.call(this);
        },
        set: function(m) {
          u = "" + m, s.call(this, m);
        }
      }), Object.defineProperty(l, n, {
        enumerable: c.enumerable
      }), {
        getValue: function() {
          return u;
        },
        setValue: function(m) {
          u = "" + m;
        },
        stopTracking: function() {
          l._valueTracker = null, delete l[n];
        }
      };
    }
  }
  function Xi(l) {
    if (!l._valueTracker) {
      var n = pu(l) ? "checked" : "value";
      l._valueTracker = Li(
        l,
        n,
        "" + l[n]
      );
    }
  }
  function Iu(l) {
    if (!l) return !1;
    var n = l._valueTracker;
    if (!n) return !0;
    var u = n.getValue(), c = "";
    return l && (c = pu(l) ? l.checked ? "true" : "false" : l.value), l = c, l !== u ? (n.setValue(l), !0) : !1;
  }
  function gu(l) {
    if (l = l || (typeof document < "u" ? document : void 0), typeof l > "u") return null;
    try {
      return l.activeElement || l.body;
    } catch {
      return l.body;
    }
  }
  var oo = /[\n"\\]/g;
  function va(l) {
    return l.replace(
      oo,
      function(n) {
        return "\\" + n.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function Vi(l, n, u, c, r, s, m, S) {
    l.name = "", m != null && typeof m != "function" && typeof m != "symbol" && typeof m != "boolean" ? l.type = m : l.removeAttribute("type"), n != null ? m === "number" ? (n === 0 && l.value === "" || l.value != n) && (l.value = "" + Bl(n)) : l.value !== "" + Bl(n) && (l.value = "" + Bl(n)) : m !== "submit" && m !== "reset" || l.removeAttribute("value"), n != null ? vu(l, m, Bl(n)) : u != null ? vu(l, m, Bl(u)) : c != null && l.removeAttribute("value"), r == null && s != null && (l.defaultChecked = !!s), r != null && (l.checked = r && typeof r != "function" && typeof r != "symbol"), S != null && typeof S != "function" && typeof S != "symbol" && typeof S != "boolean" ? l.name = "" + Bl(S) : l.removeAttribute("name");
  }
  function Qi(l, n, u, c, r, s, m, S) {
    if (s != null && typeof s != "function" && typeof s != "symbol" && typeof s != "boolean" && (l.type = s), n != null || u != null) {
      if (!(s !== "submit" && s !== "reset" || n != null)) {
        Xi(l);
        return;
      }
      u = u != null ? "" + Bl(u) : "", n = n != null ? "" + Bl(n) : u, S || n === l.value || (l.value = n), l.defaultValue = n;
    }
    c = c ?? r, c = typeof c != "function" && typeof c != "symbol" && !!c, l.checked = S ? l.checked : !!c, l.defaultChecked = !!c, m != null && typeof m != "function" && typeof m != "symbol" && typeof m != "boolean" && (l.name = m), Xi(l);
  }
  function vu(l, n, u) {
    n === "number" && gu(l.ownerDocument) === l || l.defaultValue === "" + u || (l.defaultValue = "" + u);
  }
  function Pu(l, n, u, c) {
    if (l = l.options, n) {
      n = {};
      for (var r = 0; r < u.length; r++)
        n["$" + u[r]] = !0;
      for (u = 0; u < l.length; u++)
        r = n.hasOwnProperty("$" + l[u].value), l[u].selected !== r && (l[u].selected = r), r && c && (l[u].defaultSelected = !0);
    } else {
      for (u = "" + Bl(u), n = null, r = 0; r < l.length; r++) {
        if (l[r].value === u) {
          l[r].selected = !0, c && (l[r].defaultSelected = !0);
          return;
        }
        n !== null || l[r].disabled || (n = l[r]);
      }
      n !== null && (n.selected = !0);
    }
  }
  function fo(l, n, u) {
    if (n != null && (n = "" + Bl(n), n !== l.value && (l.value = n), u == null)) {
      l.defaultValue !== n && (l.defaultValue = n);
      return;
    }
    l.defaultValue = u != null ? "" + Bl(u) : "";
  }
  function Od(l, n, u, c) {
    if (n == null) {
      if (c != null) {
        if (u != null) throw Error(E(92));
        if (ft(c)) {
          if (1 < c.length) throw Error(E(93));
          c = c[0];
        }
        u = c;
      }
      u == null && (u = ""), n = u;
    }
    u = Bl(n), l.defaultValue = u, c = l.textContent, c === u && c !== "" && c !== null && (l.value = c), Xi(l);
  }
  function kn(l, n) {
    if (n) {
      var u = l.firstChild;
      if (u && u === l.lastChild && u.nodeType === 3) {
        u.nodeValue = n;
        return;
      }
    }
    l.textContent = n;
  }
  var Qr = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function gf(l, n, u) {
    var c = n.indexOf("--") === 0;
    u == null || typeof u == "boolean" || u === "" ? c ? l.setProperty(n, "") : n === "float" ? l.cssFloat = "" : l[n] = "" : c ? l.setProperty(n, u) : typeof u != "number" || u === 0 || Qr.has(n) ? n === "float" ? l.cssFloat = u : l[n] = ("" + u).trim() : l[n] = u + "px";
  }
  function vf(l, n, u) {
    if (n != null && typeof n != "object")
      throw Error(E(62));
    if (l = l.style, u != null) {
      for (var c in u)
        !u.hasOwnProperty(c) || n != null && n.hasOwnProperty(c) || (c.indexOf("--") === 0 ? l.setProperty(c, "") : c === "float" ? l.cssFloat = "" : l[c] = "");
      for (var r in n)
        c = n[r], n.hasOwnProperty(r) && u[r] !== c && gf(l, r, c);
    } else
      for (var s in n)
        n.hasOwnProperty(s) && gf(l, s, n[s]);
  }
  function ro(l) {
    if (l.indexOf("-") === -1) return !1;
    switch (l) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Zr = /* @__PURE__ */ new Map([
    ["acceptCharset", "accept-charset"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
    ["crossOrigin", "crossorigin"],
    ["accentHeight", "accent-height"],
    ["alignmentBaseline", "alignment-baseline"],
    ["arabicForm", "arabic-form"],
    ["baselineShift", "baseline-shift"],
    ["capHeight", "cap-height"],
    ["clipPath", "clip-path"],
    ["clipRule", "clip-rule"],
    ["colorInterpolation", "color-interpolation"],
    ["colorInterpolationFilters", "color-interpolation-filters"],
    ["colorProfile", "color-profile"],
    ["colorRendering", "color-rendering"],
    ["dominantBaseline", "dominant-baseline"],
    ["enableBackground", "enable-background"],
    ["fillOpacity", "fill-opacity"],
    ["fillRule", "fill-rule"],
    ["floodColor", "flood-color"],
    ["floodOpacity", "flood-opacity"],
    ["fontFamily", "font-family"],
    ["fontSize", "font-size"],
    ["fontSizeAdjust", "font-size-adjust"],
    ["fontStretch", "font-stretch"],
    ["fontStyle", "font-style"],
    ["fontVariant", "font-variant"],
    ["fontWeight", "font-weight"],
    ["glyphName", "glyph-name"],
    ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
    ["glyphOrientationVertical", "glyph-orientation-vertical"],
    ["horizAdvX", "horiz-adv-x"],
    ["horizOriginX", "horiz-origin-x"],
    ["imageRendering", "image-rendering"],
    ["letterSpacing", "letter-spacing"],
    ["lightingColor", "lighting-color"],
    ["markerEnd", "marker-end"],
    ["markerMid", "marker-mid"],
    ["markerStart", "marker-start"],
    ["overlinePosition", "overline-position"],
    ["overlineThickness", "overline-thickness"],
    ["paintOrder", "paint-order"],
    ["panose-1", "panose-1"],
    ["pointerEvents", "pointer-events"],
    ["renderingIntent", "rendering-intent"],
    ["shapeRendering", "shape-rendering"],
    ["stopColor", "stop-color"],
    ["stopOpacity", "stop-opacity"],
    ["strikethroughPosition", "strikethrough-position"],
    ["strikethroughThickness", "strikethrough-thickness"],
    ["strokeDasharray", "stroke-dasharray"],
    ["strokeDashoffset", "stroke-dashoffset"],
    ["strokeLinecap", "stroke-linecap"],
    ["strokeLinejoin", "stroke-linejoin"],
    ["strokeMiterlimit", "stroke-miterlimit"],
    ["strokeOpacity", "stroke-opacity"],
    ["strokeWidth", "stroke-width"],
    ["textAnchor", "text-anchor"],
    ["textDecoration", "text-decoration"],
    ["textRendering", "text-rendering"],
    ["transformOrigin", "transform-origin"],
    ["underlinePosition", "underline-position"],
    ["underlineThickness", "underline-thickness"],
    ["unicodeBidi", "unicode-bidi"],
    ["unicodeRange", "unicode-range"],
    ["unitsPerEm", "units-per-em"],
    ["vAlphabetic", "v-alphabetic"],
    ["vHanging", "v-hanging"],
    ["vIdeographic", "v-ideographic"],
    ["vMathematical", "v-mathematical"],
    ["vectorEffect", "vector-effect"],
    ["vertAdvY", "vert-adv-y"],
    ["vertOriginX", "vert-origin-x"],
    ["vertOriginY", "vert-origin-y"],
    ["wordSpacing", "word-spacing"],
    ["writingMode", "writing-mode"],
    ["xmlnsXlink", "xmlns:xlink"],
    ["xHeight", "x-height"]
  ]), bc = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function La(l) {
    return bc.test("" + l) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : l;
  }
  function on() {
  }
  var so = null;
  function Ec(l) {
    return l = l.target || l.srcElement || window, l.correspondingUseElement && (l = l.correspondingUseElement), l.nodeType === 3 ? l.parentNode : l;
  }
  var Xa = null, Su = null;
  function Jr(l) {
    var n = An(l);
    if (n && (l = n.stateNode)) {
      var u = l[qt] || null;
      e: switch (l = n.stateNode, n.type) {
        case "input":
          if (Vi(
            l,
            u.value,
            u.defaultValue,
            u.defaultValue,
            u.checked,
            u.defaultChecked,
            u.type,
            u.name
          ), n = u.name, u.type === "radio" && n != null) {
            for (u = l; u.parentNode; ) u = u.parentNode;
            for (u = u.querySelectorAll(
              'input[name="' + va(
                "" + n
              ) + '"][type="radio"]'
            ), n = 0; n < u.length; n++) {
              var c = u[n];
              if (c !== l && c.form === l.form) {
                var r = c[qt] || null;
                if (!r) throw Error(E(90));
                Vi(
                  c,
                  r.value,
                  r.defaultValue,
                  r.defaultValue,
                  r.checked,
                  r.defaultChecked,
                  r.type,
                  r.name
                );
              }
            }
            for (n = 0; n < u.length; n++)
              c = u[n], c.form === l.form && Iu(c);
          }
          break e;
        case "textarea":
          fo(l, u.value, u.defaultValue);
          break e;
        case "select":
          n = u.value, n != null && Pu(l, !!u.multiple, n, !1);
      }
    }
  }
  var Sf = !1;
  function wm(l, n, u) {
    if (Sf) return l(n, u);
    Sf = !0;
    try {
      var c = l(n);
      return c;
    } finally {
      if (Sf = !1, (Xa !== null || Su !== null) && (tr(), Xa && (n = Xa, l = Su, Su = Xa = null, Jr(n), l)))
        for (n = 0; n < l.length; n++) Jr(l[n]);
    }
  }
  function Wl(l, n) {
    var u = l.stateNode;
    if (u === null) return null;
    var c = u[qt] || null;
    if (c === null) return null;
    u = c[n];
    e: switch (n) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (c = !c.disabled) || (l = l.type, c = !(l === "button" || l === "input" || l === "select" || l === "textarea")), l = !c;
        break e;
      default:
        l = !1;
    }
    if (l) return null;
    if (u && typeof u != "function")
      throw Error(
        E(231, n, typeof u)
      );
    return u;
  }
  var Zi = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Kr = !1;
  if (Zi)
    try {
      var bf = {};
      Object.defineProperty(bf, "passive", {
        get: function() {
          Kr = !0;
        }
      }), window.addEventListener("test", bf, bf), window.removeEventListener("test", bf, bf);
    } catch {
      Kr = !1;
    }
  var Ji = null, qm = null, Dd = null;
  function jm() {
    if (Dd) return Dd;
    var l, n = qm, u = n.length, c, r = "value" in Ji ? Ji.value : Ji.textContent, s = r.length;
    for (l = 0; l < u && n[l] === r[l]; l++) ;
    var m = u - l;
    for (c = 1; c <= m && n[u - c] === r[s - c]; c++) ;
    return Dd = r.slice(l, 1 < c ? 1 - c : void 0);
  }
  function zd(l) {
    var n = l.keyCode;
    return "charCode" in l ? (l = l.charCode, l === 0 && n === 13 && (l = 13)) : l = n, l === 10 && (l = 13), 32 <= l || l === 13 ? l : 0;
  }
  function $r() {
    return !0;
  }
  function Mp() {
    return !1;
  }
  function Sa(l) {
    function n(u, c, r, s, m) {
      this._reactName = u, this._targetInst = r, this.type = c, this.nativeEvent = s, this.target = m, this.currentTarget = null;
      for (var S in l)
        l.hasOwnProperty(S) && (u = l[S], this[S] = u ? u(s) : s[S]);
      return this.isDefaultPrevented = (s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1) ? $r : Mp, this.isPropagationStopped = Mp, this;
    }
    return Y(n.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var u = this.nativeEvent;
        u && (u.preventDefault ? u.preventDefault() : typeof u.returnValue != "unknown" && (u.returnValue = !1), this.isDefaultPrevented = $r);
      },
      stopPropagation: function() {
        var u = this.nativeEvent;
        u && (u.stopPropagation ? u.stopPropagation() : typeof u.cancelBubble != "unknown" && (u.cancelBubble = !0), this.isPropagationStopped = $r);
      },
      persist: function() {
      },
      isPersistent: $r
    }), n;
  }
  var Tc = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(l) {
      return l.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, kr = Sa(Tc), Ef = Y({}, Tc, { view: 0, detail: 0 }), e1 = Sa(Ef), Gm, Lm, Fr, Md = Y({}, Ef, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Fn,
    button: 0,
    buttons: 0,
    relatedTarget: function(l) {
      return l.relatedTarget === void 0 ? l.fromElement === l.srcElement ? l.toElement : l.fromElement : l.relatedTarget;
    },
    movementX: function(l) {
      return "movementX" in l ? l.movementX : (l !== Fr && (Fr && l.type === "mousemove" ? (Gm = l.screenX - Fr.screenX, Lm = l.screenY - Fr.screenY) : Lm = Gm = 0, Fr = l), Gm);
    },
    movementY: function(l) {
      return "movementY" in l ? l.movementY : Lm;
    }
  }), Tf = Sa(Md), Cp = Y({}, Md, { dataTransfer: 0 }), Up = Sa(Cp), Hp = Y({}, Ef, { relatedTarget: 0 }), Cd = Sa(Hp), Xm = Y({}, Tc, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), xp = Sa(Xm), ho = Y({}, Tc, {
    clipboardData: function(l) {
      return "clipboardData" in l ? l.clipboardData : window.clipboardData;
    }
  }), mo = Sa(ho), bu = Y({}, Tc, { data: 0 }), Np = Sa(bu), Vm = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, ei = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, Bp = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function Eu(l) {
    var n = this.nativeEvent;
    return n.getModifierState ? n.getModifierState(l) : (l = Bp[l]) ? !!n[l] : !1;
  }
  function Fn() {
    return Eu;
  }
  var Ud = Y({}, Ef, {
    key: function(l) {
      if (l.key) {
        var n = Vm[l.key] || l.key;
        if (n !== "Unidentified") return n;
      }
      return l.type === "keypress" ? (l = zd(l), l === 13 ? "Enter" : String.fromCharCode(l)) : l.type === "keydown" || l.type === "keyup" ? ei[l.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Fn,
    charCode: function(l) {
      return l.type === "keypress" ? zd(l) : 0;
    },
    keyCode: function(l) {
      return l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    },
    which: function(l) {
      return l.type === "keypress" ? zd(l) : l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    }
  }), Hd = Sa(Ud), Qm = Y({}, Md, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }), Tu = Sa(Qm), t1 = Y({}, Ef, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Fn
  }), Yp = Sa(t1), wp = Y({}, Tc, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), l1 = Sa(wp), Zm = Y({}, Md, {
    deltaX: function(l) {
      return "deltaX" in l ? l.deltaX : "wheelDeltaX" in l ? -l.wheelDeltaX : 0;
    },
    deltaY: function(l) {
      return "deltaY" in l ? l.deltaY : "wheelDeltaY" in l ? -l.wheelDeltaY : "wheelDelta" in l ? -l.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), a1 = Sa(Zm), qp = Y({}, Tc, {
    newState: 0,
    oldState: 0
  }), Jm = Sa(qp), xd = [9, 13, 27, 32], Af = Zi && "CompositionEvent" in window, yo = null;
  Zi && "documentMode" in document && (yo = document.documentMode);
  var Ma = Zi && "TextEvent" in window && !yo, Km = Zi && (!Af || yo && 8 < yo && 11 >= yo), Wr = " ", Ac = !1;
  function Nd(l, n) {
    switch (l) {
      case "keyup":
        return xd.indexOf(n.keyCode) !== -1;
      case "keydown":
        return n.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function $m(l) {
    return l = l.detail, typeof l == "object" && "data" in l ? l.data : null;
  }
  var po = !1;
  function jp(l, n) {
    switch (l) {
      case "compositionend":
        return $m(n);
      case "keypress":
        return n.which !== 32 ? null : (Ac = !0, Wr);
      case "textInput":
        return l = n.data, l === Wr && Ac ? null : l;
      default:
        return null;
    }
  }
  function n1(l, n) {
    if (po)
      return l === "compositionend" || !Af && Nd(l, n) ? (l = jm(), Dd = qm = Ji = null, po = !1, l) : null;
    switch (l) {
      case "paste":
        return null;
      case "keypress":
        if (!(n.ctrlKey || n.altKey || n.metaKey) || n.ctrlKey && n.altKey) {
          if (n.char && 1 < n.char.length)
            return n.char;
          if (n.which) return String.fromCharCode(n.which);
        }
        return null;
      case "compositionend":
        return Km && n.locale !== "ko" ? null : n.data;
      default:
        return null;
    }
  }
  var km = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
  };
  function ti(l) {
    var n = l && l.nodeName && l.nodeName.toLowerCase();
    return n === "input" ? !!km[l.type] : n === "textarea";
  }
  function Fm(l, n, u, c) {
    Xa ? Su ? Su.push(c) : Su = [c] : Xa = c, n = Ks(n, "onChange"), 0 < n.length && (u = new kr(
      "onChange",
      "change",
      null,
      u,
      c
    ), l.push({ event: u, listeners: n }));
  }
  var go = null, Rc = null;
  function vo(l) {
    Ng(l, 0);
  }
  function Rf(l) {
    var n = Gi(l);
    if (Iu(n)) return l;
  }
  function Wm(l, n) {
    if (l === "change") return n;
  }
  var Bd = !1;
  if (Zi) {
    var Va;
    if (Zi) {
      var Au = "oninput" in document;
      if (!Au) {
        var Im = document.createElement("div");
        Im.setAttribute("oninput", "return;"), Au = typeof Im.oninput == "function";
      }
      Va = Au;
    } else Va = !1;
    Bd = Va && (!document.documentMode || 9 < document.documentMode);
  }
  function Yd() {
    go && (go.detachEvent("onpropertychange", wd), Rc = go = null);
  }
  function wd(l) {
    if (l.propertyName === "value" && Rf(Rc)) {
      var n = [];
      Fm(
        n,
        Rc,
        l,
        Ec(l)
      ), wm(vo, n);
    }
  }
  function Gp(l, n, u) {
    l === "focusin" ? (Yd(), go = n, Rc = u, go.attachEvent("onpropertychange", wd)) : l === "focusout" && Yd();
  }
  function Lp(l) {
    if (l === "selectionchange" || l === "keyup" || l === "keydown")
      return Rf(Rc);
  }
  function _c(l, n) {
    if (l === "click") return Rf(n);
  }
  function So(l, n) {
    if (l === "input" || l === "change")
      return Rf(n);
  }
  function Xp(l, n) {
    return l === n && (l !== 0 || 1 / l === 1 / n) || l !== l && n !== n;
  }
  var Ca = typeof Object.is == "function" ? Object.is : Xp;
  function Wn(l, n) {
    if (Ca(l, n)) return !0;
    if (typeof l != "object" || l === null || typeof n != "object" || n === null)
      return !1;
    var u = Object.keys(l), c = Object.keys(n);
    if (u.length !== c.length) return !1;
    for (c = 0; c < u.length; c++) {
      var r = u[c];
      if (!Sc.call(n, r) || !Ca(l[r], n[r]))
        return !1;
    }
    return !0;
  }
  function Pm(l) {
    for (; l && l.firstChild; ) l = l.firstChild;
    return l;
  }
  function ey(l, n) {
    var u = Pm(l);
    l = 0;
    for (var c; u; ) {
      if (u.nodeType === 3) {
        if (c = l + u.textContent.length, l <= n && c >= n)
          return { node: u, offset: n - l };
        l = c;
      }
      e: {
        for (; u; ) {
          if (u.nextSibling) {
            u = u.nextSibling;
            break e;
          }
          u = u.parentNode;
        }
        u = void 0;
      }
      u = Pm(u);
    }
  }
  function bo(l, n) {
    return l && n ? l === n ? !0 : l && l.nodeType === 3 ? !1 : n && n.nodeType === 3 ? bo(l, n.parentNode) : "contains" in l ? l.contains(n) : l.compareDocumentPosition ? !!(l.compareDocumentPosition(n) & 16) : !1 : !1;
  }
  function Oc(l) {
    l = l != null && l.ownerDocument != null && l.ownerDocument.defaultView != null ? l.ownerDocument.defaultView : window;
    for (var n = gu(l.document); n instanceof l.HTMLIFrameElement; ) {
      try {
        var u = typeof n.contentWindow.location.href == "string";
      } catch {
        u = !1;
      }
      if (u) l = n.contentWindow;
      else break;
      n = gu(l.document);
    }
    return n;
  }
  function Ir(l) {
    var n = l && l.nodeName && l.nodeName.toLowerCase();
    return n && (n === "input" && (l.type === "text" || l.type === "search" || l.type === "tel" || l.type === "url" || l.type === "password") || n === "textarea" || l.contentEditable === "true");
  }
  var Pr = Zi && "documentMode" in document && 11 >= document.documentMode, Dc = null, _f = null, In = null, Ru = !1;
  function qd(l, n, u) {
    var c = u.window === u ? u.document : u.nodeType === 9 ? u : u.ownerDocument;
    Ru || Dc == null || Dc !== gu(c) || (c = Dc, "selectionStart" in c && Ir(c) ? c = { start: c.selectionStart, end: c.selectionEnd } : (c = (c.ownerDocument && c.ownerDocument.defaultView || window).getSelection(), c = {
      anchorNode: c.anchorNode,
      anchorOffset: c.anchorOffset,
      focusNode: c.focusNode,
      focusOffset: c.focusOffset
    }), In && Wn(In, c) || (In = c, c = Ks(_f, "onSelect"), 0 < c.length && (n = new kr(
      "onSelect",
      "select",
      null,
      n,
      u
    ), l.push({ event: n, listeners: c }), n.target = Dc)));
  }
  function Ki(l, n) {
    var u = {};
    return u[l.toLowerCase()] = n.toLowerCase(), u["Webkit" + l] = "webkit" + n, u["Moz" + l] = "moz" + n, u;
  }
  var _u = {
    animationend: Ki("Animation", "AnimationEnd"),
    animationiteration: Ki("Animation", "AnimationIteration"),
    animationstart: Ki("Animation", "AnimationStart"),
    transitionrun: Ki("Transition", "TransitionRun"),
    transitionstart: Ki("Transition", "TransitionStart"),
    transitioncancel: Ki("Transition", "TransitionCancel"),
    transitionend: Ki("Transition", "TransitionEnd")
  }, Of = {}, zc = {};
  Zi && (zc = document.createElement("div").style, "AnimationEvent" in window || (delete _u.animationend.animation, delete _u.animationiteration.animation, delete _u.animationstart.animation), "TransitionEvent" in window || delete _u.transitionend.transition);
  function Nt(l) {
    if (Of[l]) return Of[l];
    if (!_u[l]) return l;
    var n = _u[l], u;
    for (u in n)
      if (n.hasOwnProperty(u) && u in zc)
        return Of[l] = n[u];
    return l;
  }
  var es = Nt("animationend"), ty = Nt("animationiteration"), jd = Nt("animationstart"), Eo = Nt("transitionrun"), ts = Nt("transitionstart"), li = Nt("transitioncancel"), Vp = Nt("transitionend"), ai = /* @__PURE__ */ new Map(), Df = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  Df.push("scrollEnd");
  function Qa(l, n) {
    ai.set(l, n), yu(n, [l]);
  }
  var To = typeof reportError == "function" ? reportError : function(l) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var n = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof l == "object" && l !== null && typeof l.message == "string" ? String(l.message) : String(l),
        error: l
      });
      if (!window.dispatchEvent(n)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", l);
      return;
    }
    console.error(l);
  }, il = [], Il = 0, Pn = 0;
  function _n() {
    for (var l = Il, n = Pn = Il = 0; n < l; ) {
      var u = il[n];
      il[n++] = null;
      var c = il[n];
      il[n++] = null;
      var r = il[n];
      il[n++] = null;
      var s = il[n];
      if (il[n++] = null, c !== null && r !== null) {
        var m = c.pending;
        m === null ? r.next = r : (r.next = m.next, m.next = r), c.pending = r;
      }
      s !== 0 && Gd(u, r, s);
    }
  }
  function On(l, n, u, c) {
    il[Il++] = l, il[Il++] = n, il[Il++] = u, il[Il++] = c, Pn |= c, l.lanes |= c, l = l.alternate, l !== null && (l.lanes |= c);
  }
  function eu(l, n, u, c) {
    return On(l, n, u, c), ls(l);
  }
  function $i(l, n) {
    return On(l, null, null, n), ls(l);
  }
  function Gd(l, n, u) {
    l.lanes |= u;
    var c = l.alternate;
    c !== null && (c.lanes |= u);
    for (var r = !1, s = l.return; s !== null; )
      s.childLanes |= u, c = s.alternate, c !== null && (c.childLanes |= u), s.tag === 22 && (l = s.stateNode, l === null || l._visibility & 1 || (r = !0)), l = s, s = s.return;
    return l.tag === 3 ? (s = l.stateNode, r && n !== null && (r = 31 - _l(u), l = s.hiddenUpdates, c = l[r], c === null ? l[r] = [n] : c.push(n), n.lane = u | 536870912), s) : null;
  }
  function ls(l) {
    if (50 < er)
      throw er = 0, qs = null, Error(E(185));
    for (var n = l.return; n !== null; )
      l = n, n = l.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var Za = {};
  function Qp(l, n, u, c) {
    this.tag = l, this.key = u, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = n, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = c, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function bl(l, n, u, c) {
    return new Qp(l, n, u, c);
  }
  function Ao(l) {
    return l = l.prototype, !(!l || !l.isReactComponent);
  }
  function ki(l, n) {
    var u = l.alternate;
    return u === null ? (u = bl(
      l.tag,
      n,
      l.key,
      l.mode
    ), u.elementType = l.elementType, u.type = l.type, u.stateNode = l.stateNode, u.alternate = l, l.alternate = u) : (u.pendingProps = n, u.type = l.type, u.flags = 0, u.subtreeFlags = 0, u.deletions = null), u.flags = l.flags & 65011712, u.childLanes = l.childLanes, u.lanes = l.lanes, u.child = l.child, u.memoizedProps = l.memoizedProps, u.memoizedState = l.memoizedState, u.updateQueue = l.updateQueue, n = l.dependencies, u.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }, u.sibling = l.sibling, u.index = l.index, u.ref = l.ref, u.refCleanup = l.refCleanup, u;
  }
  function ly(l, n) {
    l.flags &= 65011714;
    var u = l.alternate;
    return u === null ? (l.childLanes = 0, l.lanes = n, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = u.childLanes, l.lanes = u.lanes, l.child = u.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = u.memoizedProps, l.memoizedState = u.memoizedState, l.updateQueue = u.updateQueue, l.type = u.type, n = u.dependencies, l.dependencies = n === null ? null : {
      lanes: n.lanes,
      firstContext: n.firstContext
    }), l;
  }
  function Ld(l, n, u, c, r, s) {
    var m = 0;
    if (c = l, typeof l == "function") Ao(l) && (m = 1);
    else if (typeof l == "string")
      m = _0(
        l,
        u,
        le.current
      ) ? 26 : l === "html" || l === "head" || l === "body" ? 27 : 5;
    else
      e: switch (l) {
        case gt:
          return l = bl(31, u, n, r), l.elementType = gt, l.lanes = s, l;
        case We:
          return Fi(u.children, r, s, n);
        case Qe:
          m = 8, r |= 24;
          break;
        case Ne:
          return l = bl(12, u, n, r | 2), l.elementType = Ne, l.lanes = s, l;
        case Vt:
          return l = bl(13, u, n, r), l.elementType = Vt, l.lanes = s, l;
        case Ft:
          return l = bl(19, u, n, r), l.elementType = Ft, l.lanes = s, l;
        default:
          if (typeof l == "object" && l !== null)
            switch (l.$$typeof) {
              case tt:
                m = 10;
                break e;
              case Ot:
                m = 9;
                break e;
              case wt:
                m = 11;
                break e;
              case Ue:
                m = 14;
                break e;
              case lt:
                m = 16, c = null;
                break e;
            }
          m = 29, u = Error(
            E(130, l === null ? "null" : typeof l, "")
          ), c = null;
      }
    return n = bl(m, u, n, r), n.elementType = l, n.type = c, n.lanes = s, n;
  }
  function Fi(l, n, u, c) {
    return l = bl(7, l, c, n), l.lanes = u, l;
  }
  function zf(l, n, u) {
    return l = bl(6, l, null, n), l.lanes = u, l;
  }
  function ay(l) {
    var n = bl(18, null, null, 0);
    return n.stateNode = l, n;
  }
  function Xd(l, n, u) {
    return n = bl(
      4,
      l.children !== null ? l.children : [],
      l.key,
      n
    ), n.lanes = u, n.stateNode = {
      containerInfo: l.containerInfo,
      pendingChildren: null,
      implementation: l.implementation
    }, n;
  }
  var ny = /* @__PURE__ */ new WeakMap();
  function Dn(l, n) {
    if (typeof l == "object" && l !== null) {
      var u = ny.get(l);
      return u !== void 0 ? u : (n = {
        value: l,
        source: n,
        stack: $u(n)
      }, ny.set(l, n), n);
    }
    return {
      value: l,
      source: n,
      stack: $u(n)
    };
  }
  var zn = [], Ro = 0, as = null, Ol = 0, fn = [], Ja = 0, Ou = null, rn = 1, Du = "";
  function tu(l, n) {
    zn[Ro++] = Ol, zn[Ro++] = as, as = l, Ol = n;
  }
  function uy(l, n, u) {
    fn[Ja++] = rn, fn[Ja++] = Du, fn[Ja++] = Ou, Ou = l;
    var c = rn;
    l = Du;
    var r = 32 - _l(c) - 1;
    c &= ~(1 << r), u += 1;
    var s = 32 - _l(n) + r;
    if (30 < s) {
      var m = r - r % 5;
      s = (c & (1 << m) - 1).toString(32), c >>= m, r -= m, rn = 1 << 32 - _l(n) + r | u << r | c, Du = s + l;
    } else
      rn = 1 << s | u << r | c, Du = l;
  }
  function Mf(l) {
    l.return !== null && (tu(l, 1), uy(l, 1, 0));
  }
  function Vd(l) {
    for (; l === as; )
      as = zn[--Ro], zn[Ro] = null, Ol = zn[--Ro], zn[Ro] = null;
    for (; l === Ou; )
      Ou = fn[--Ja], fn[Ja] = null, Du = fn[--Ja], fn[Ja] = null, rn = fn[--Ja], fn[Ja] = null;
  }
  function ns(l, n) {
    fn[Ja++] = rn, fn[Ja++] = Du, fn[Ja++] = Ou, rn = n.id, Du = n.overflow, Ou = l;
  }
  var Pl = null, Wt = null, St = !1, ni = null, Vl = !1, ui = Error(E(519));
  function lu(l) {
    var n = Error(
      E(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw Uf(Dn(n, l)), ui;
  }
  function us(l) {
    var n = l.stateNode, u = l.type, c = l.memoizedProps;
    switch (n[Re] = l, n[qt] = c, u) {
      case "dialog":
        vt("cancel", n), vt("close", n);
        break;
      case "iframe":
      case "object":
      case "embed":
        vt("load", n);
        break;
      case "video":
      case "audio":
        for (u = 0; u < ir.length; u++)
          vt(ir[u], n);
        break;
      case "source":
        vt("error", n);
        break;
      case "img":
      case "image":
      case "link":
        vt("error", n), vt("load", n);
        break;
      case "details":
        vt("toggle", n);
        break;
      case "input":
        vt("invalid", n), Qi(
          n,
          c.value,
          c.defaultValue,
          c.checked,
          c.defaultChecked,
          c.type,
          c.name,
          !0
        );
        break;
      case "select":
        vt("invalid", n);
        break;
      case "textarea":
        vt("invalid", n), Od(n, c.value, c.defaultValue, c.children);
    }
    u = c.children, typeof u != "string" && typeof u != "number" && typeof u != "bigint" || n.textContent === "" + u || c.suppressHydrationWarning === !0 || m0(n.textContent, u) ? (c.popover != null && (vt("beforetoggle", n), vt("toggle", n)), c.onScroll != null && vt("scroll", n), c.onScrollEnd != null && vt("scrollend", n), c.onClick != null && (n.onclick = on), n = !0) : n = !1, n || lu(l, !0);
  }
  function Cf(l) {
    for (Pl = l.return; Pl; )
      switch (Pl.tag) {
        case 5:
        case 31:
        case 13:
          Vl = !1;
          return;
        case 27:
        case 3:
          Vl = !0;
          return;
        default:
          Pl = Pl.return;
      }
  }
  function ii(l) {
    if (l !== Pl) return !1;
    if (!St) return Cf(l), St = !0, !1;
    var n = l.tag, u;
    if ((u = n !== 3 && n !== 27) && ((u = n === 5) && (u = l.type, u = !(u !== "form" && u !== "button") || or(l.type, l.memoizedProps)), u = !u), u && Wt && lu(l), Cf(l), n === 13) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(E(317));
      Wt = Jh(l);
    } else if (n === 31) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(E(317));
      Wt = Jh(l);
    } else
      n === 27 ? (n = Wt, qu(l.type) ? (l = Fs, Fs = null, Wt = l) : Wt = n) : Wt = Pl ? ln(l.stateNode.nextSibling) : null;
    return !0;
  }
  function Mc() {
    Wt = Pl = null, St = !1;
  }
  function iy() {
    var l = ni;
    return l !== null && (pl === null ? pl = l : pl.push.apply(
      pl,
      l
    ), ni = null), l;
  }
  function Uf(l) {
    ni === null ? ni = [l] : ni.push(l);
  }
  var Qd = b(null), Wi = null, zu = null;
  function Ka(l, n, u) {
    $(Qd, n._currentValue), n._currentValue = u;
  }
  function Mu(l) {
    l._currentValue = Qd.current, B(Qd);
  }
  function Zd(l, n, u) {
    for (; l !== null; ) {
      var c = l.alternate;
      if ((l.childLanes & n) !== n ? (l.childLanes |= n, c !== null && (c.childLanes |= n)) : c !== null && (c.childLanes & n) !== n && (c.childLanes |= n), l === u) break;
      l = l.return;
    }
  }
  function ci(l, n, u, c) {
    var r = l.child;
    for (r !== null && (r.return = l); r !== null; ) {
      var s = r.dependencies;
      if (s !== null) {
        var m = r.child;
        s = s.firstContext;
        e: for (; s !== null; ) {
          var S = s;
          s = r;
          for (var O = 0; O < n.length; O++)
            if (S.context === n[O]) {
              s.lanes |= u, S = s.alternate, S !== null && (S.lanes |= u), Zd(
                s.return,
                u,
                l
              ), c || (m = null);
              break e;
            }
          s = S.next;
        }
      } else if (r.tag === 18) {
        if (m = r.return, m === null) throw Error(E(341));
        m.lanes |= u, s = m.alternate, s !== null && (s.lanes |= u), Zd(m, u, l), m = null;
      } else m = r.child;
      if (m !== null) m.return = r;
      else
        for (m = r; m !== null; ) {
          if (m === l) {
            m = null;
            break;
          }
          if (r = m.sibling, r !== null) {
            r.return = m.return, m = r;
            break;
          }
          m = m.return;
        }
      r = m;
    }
  }
  function ea(l, n, u, c) {
    l = null;
    for (var r = n, s = !1; r !== null; ) {
      if (!s) {
        if ((r.flags & 524288) !== 0) s = !0;
        else if ((r.flags & 262144) !== 0) break;
      }
      if (r.tag === 10) {
        var m = r.alternate;
        if (m === null) throw Error(E(387));
        if (m = m.memoizedProps, m !== null) {
          var S = r.type;
          Ca(r.pendingProps.value, m.value) || (l !== null ? l.push(S) : l = [S]);
        }
      } else if (r === Oe.current) {
        if (m = r.alternate, m === null) throw Error(E(387));
        m.memoizedState.memoizedState !== r.memoizedState.memoizedState && (l !== null ? l.push(Ps) : l = [Ps]);
      }
      r = r.return;
    }
    l !== null && ci(
      n,
      l,
      u,
      c
    ), n.flags |= 262144;
  }
  function _o(l) {
    for (l = l.firstContext; l !== null; ) {
      if (!Ca(
        l.context._currentValue,
        l.memoizedValue
      ))
        return !0;
      l = l.next;
    }
    return !1;
  }
  function $e(l) {
    Wi = l, zu = null, l = l.dependencies, l !== null && (l.firstContext = null);
  }
  function P(l) {
    return is(Wi, l);
  }
  function Ii(l, n) {
    return Wi === null && $e(l), is(l, n);
  }
  function is(l, n) {
    var u = n._currentValue;
    if (n = { context: n, memoizedValue: u, next: null }, zu === null) {
      if (l === null) throw Error(E(308));
      zu = n, l.dependencies = { lanes: 0, firstContext: n }, l.flags |= 524288;
    } else zu = zu.next = n;
    return u;
  }
  var El = typeof AbortController < "u" ? AbortController : function() {
    var l = [], n = this.signal = {
      aborted: !1,
      addEventListener: function(u, c) {
        l.push(c);
      }
    };
    this.abort = function() {
      n.aborted = !0, l.forEach(function(u) {
        return u();
      });
    };
  }, cy = T.unstable_scheduleCallback, oy = T.unstable_NormalPriority, Dl = {
    $$typeof: tt,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function cs() {
    return {
      controller: new El(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function os(l) {
    l.refCount--, l.refCount === 0 && cy(oy, function() {
      l.controller.abort();
    });
  }
  var Oo = null, fs = 0, Cc = 0, Yl = null;
  function jt(l, n) {
    if (Oo === null) {
      var u = Oo = [];
      fs = 0, Cc = qh(), Yl = {
        status: "pending",
        value: void 0,
        then: function(c) {
          u.push(c);
        }
      };
    }
    return fs++, n.then(rs, rs), n;
  }
  function rs() {
    if (--fs === 0 && Oo !== null) {
      Yl !== null && (Yl.status = "fulfilled");
      var l = Oo;
      Oo = null, Cc = 0, Yl = null;
      for (var n = 0; n < l.length; n++) (0, l[n])();
    }
  }
  function ss(l, n) {
    var u = [], c = {
      status: "pending",
      value: null,
      reason: null,
      then: function(r) {
        u.push(r);
      }
    };
    return l.then(
      function() {
        c.status = "fulfilled", c.value = n;
        for (var r = 0; r < u.length; r++) (0, u[r])(n);
      },
      function(r) {
        for (c.status = "rejected", c.reason = r, r = 0; r < u.length; r++)
          (0, u[r])(void 0);
      }
    ), c;
  }
  var Pi = D.S;
  D.S = function(l, n) {
    t0 = ul(), typeof n == "object" && n !== null && typeof n.then == "function" && jt(l, n), Pi !== null && Pi(l, n);
  };
  var Mn = b(null);
  function Cn() {
    var l = Mn.current;
    return l !== null ? l : Jt.pooledCache;
  }
  function Hf(l, n) {
    n === null ? $(Mn, Mn.current) : $(Mn, n.pool);
  }
  function Do() {
    var l = Cn();
    return l === null ? null : { parent: Dl._currentValue, pool: l };
  }
  var Uc = Error(E(460)), zo = Error(E(474)), xf = Error(E(542)), Mo = { then: function() {
  } };
  function fy(l) {
    return l = l.status, l === "fulfilled" || l === "rejected";
  }
  function ry(l, n, u) {
    switch (u = l[u], u === void 0 ? l.push(n) : u !== n && (n.then(on, on), n = u), n.status) {
      case "fulfilled":
        return n.value;
      case "rejected":
        throw l = n.reason, Jd(l), l;
      default:
        if (typeof n.status == "string") n.then(on, on);
        else {
          if (l = Jt, l !== null && 100 < l.shellSuspendCounter)
            throw Error(E(482));
          l = n, l.status = "pending", l.then(
            function(c) {
              if (n.status === "pending") {
                var r = n;
                r.status = "fulfilled", r.value = c;
              }
            },
            function(c) {
              if (n.status === "pending") {
                var r = n;
                r.status = "rejected", r.reason = c;
              }
            }
          );
        }
        switch (n.status) {
          case "fulfilled":
            return n.value;
          case "rejected":
            throw l = n.reason, Jd(l), l;
        }
        throw xc = n, Uc;
    }
  }
  function Hc(l) {
    try {
      var n = l._init;
      return n(l._payload);
    } catch (u) {
      throw u !== null && typeof u == "object" && typeof u.then == "function" ? (xc = u, Uc) : u;
    }
  }
  var xc = null;
  function sy() {
    if (xc === null) throw Error(E(459));
    var l = xc;
    return xc = null, l;
  }
  function Jd(l) {
    if (l === Uc || l === xf)
      throw Error(E(483));
  }
  var Nc = null, Co = 0;
  function ds(l) {
    var n = Co;
    return Co += 1, Nc === null && (Nc = []), ry(Nc, l, n);
  }
  function Nf(l, n) {
    n = n.props.ref, l.ref = n !== void 0 ? n : null;
  }
  function hs(l, n) {
    throw n.$$typeof === H ? Error(E(525)) : (l = Object.prototype.toString.call(n), Error(
      E(
        31,
        l === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : l
      )
    ));
  }
  function Zp(l) {
    function n(N, C) {
      if (l) {
        var w = N.deletions;
        w === null ? (N.deletions = [C], N.flags |= 16) : w.push(C);
      }
    }
    function u(N, C) {
      if (!l) return null;
      for (; C !== null; )
        n(N, C), C = C.sibling;
      return null;
    }
    function c(N) {
      for (var C = /* @__PURE__ */ new Map(); N !== null; )
        N.key !== null ? C.set(N.key, N) : C.set(N.index, N), N = N.sibling;
      return C;
    }
    function r(N, C) {
      return N = ki(N, C), N.index = 0, N.sibling = null, N;
    }
    function s(N, C, w) {
      return N.index = w, l ? (w = N.alternate, w !== null ? (w = w.index, w < C ? (N.flags |= 67108866, C) : w) : (N.flags |= 67108866, C)) : (N.flags |= 1048576, C);
    }
    function m(N) {
      return l && N.alternate === null && (N.flags |= 67108866), N;
    }
    function S(N, C, w, F) {
      return C === null || C.tag !== 6 ? (C = zf(w, N.mode, F), C.return = N, C) : (C = r(C, w), C.return = N, C);
    }
    function O(N, C, w, F) {
      var Ce = w.type;
      return Ce === We ? K(
        N,
        C,
        w.props.children,
        F,
        w.key
      ) : C !== null && (C.elementType === Ce || typeof Ce == "object" && Ce !== null && Ce.$$typeof === lt && Hc(Ce) === C.type) ? (C = r(C, w.props), Nf(C, w), C.return = N, C) : (C = Ld(
        w.type,
        w.key,
        w.props,
        null,
        N.mode,
        F
      ), Nf(C, w), C.return = N, C);
    }
    function j(N, C, w, F) {
      return C === null || C.tag !== 4 || C.stateNode.containerInfo !== w.containerInfo || C.stateNode.implementation !== w.implementation ? (C = Xd(w, N.mode, F), C.return = N, C) : (C = r(C, w.children || []), C.return = N, C);
    }
    function K(N, C, w, F, Ce) {
      return C === null || C.tag !== 7 ? (C = Fi(
        w,
        N.mode,
        F,
        Ce
      ), C.return = N, C) : (C = r(C, w), C.return = N, C);
    }
    function I(N, C, w) {
      if (typeof C == "string" && C !== "" || typeof C == "number" || typeof C == "bigint")
        return C = zf(
          "" + C,
          N.mode,
          w
        ), C.return = N, C;
      if (typeof C == "object" && C !== null) {
        switch (C.$$typeof) {
          case oe:
            return w = Ld(
              C.type,
              C.key,
              C.props,
              null,
              N.mode,
              w
            ), Nf(w, C), w.return = N, w;
          case ze:
            return C = Xd(
              C,
              N.mode,
              w
            ), C.return = N, C;
          case lt:
            return C = Hc(C), I(N, C, w);
        }
        if (ft(C) || Se(C))
          return C = Fi(
            C,
            N.mode,
            w,
            null
          ), C.return = N, C;
        if (typeof C.then == "function")
          return I(N, ds(C), w);
        if (C.$$typeof === tt)
          return I(
            N,
            Ii(N, C),
            w
          );
        hs(N, C);
      }
      return null;
    }
    function G(N, C, w, F) {
      var Ce = C !== null ? C.key : null;
      if (typeof w == "string" && w !== "" || typeof w == "number" || typeof w == "bigint")
        return Ce !== null ? null : S(N, C, "" + w, F);
      if (typeof w == "object" && w !== null) {
        switch (w.$$typeof) {
          case oe:
            return w.key === Ce ? O(N, C, w, F) : null;
          case ze:
            return w.key === Ce ? j(N, C, w, F) : null;
          case lt:
            return w = Hc(w), G(N, C, w, F);
        }
        if (ft(w) || Se(w))
          return Ce !== null ? null : K(N, C, w, F, null);
        if (typeof w.then == "function")
          return G(
            N,
            C,
            ds(w),
            F
          );
        if (w.$$typeof === tt)
          return G(
            N,
            C,
            Ii(N, w),
            F
          );
        hs(N, w);
      }
      return null;
    }
    function J(N, C, w, F, Ce) {
      if (typeof F == "string" && F !== "" || typeof F == "number" || typeof F == "bigint")
        return N = N.get(w) || null, S(C, N, "" + F, Ce);
      if (typeof F == "object" && F !== null) {
        switch (F.$$typeof) {
          case oe:
            return N = N.get(
              F.key === null ? w : F.key
            ) || null, O(C, N, F, Ce);
          case ze:
            return N = N.get(
              F.key === null ? w : F.key
            ) || null, j(C, N, F, Ce);
          case lt:
            return F = Hc(F), J(
              N,
              C,
              w,
              F,
              Ce
            );
        }
        if (ft(F) || Se(F))
          return N = N.get(w) || null, K(C, N, F, Ce, null);
        if (typeof F.then == "function")
          return J(
            N,
            C,
            w,
            ds(F),
            Ce
          );
        if (F.$$typeof === tt)
          return J(
            N,
            C,
            w,
            Ii(C, F),
            Ce
          );
        hs(C, F);
      }
      return null;
    }
    function be(N, C, w, F) {
      for (var Ce = null, Dt = null, Te = C, et = C = 0, ct = null; Te !== null && et < w.length; et++) {
        Te.index > et ? (ct = Te, Te = null) : ct = Te.sibling;
        var Ut = G(
          N,
          Te,
          w[et],
          F
        );
        if (Ut === null) {
          Te === null && (Te = ct);
          break;
        }
        l && Te && Ut.alternate === null && n(N, Te), C = s(Ut, C, et), Dt === null ? Ce = Ut : Dt.sibling = Ut, Dt = Ut, Te = ct;
      }
      if (et === w.length)
        return u(N, Te), St && tu(N, et), Ce;
      if (Te === null) {
        for (; et < w.length; et++)
          Te = I(N, w[et], F), Te !== null && (C = s(
            Te,
            C,
            et
          ), Dt === null ? Ce = Te : Dt.sibling = Te, Dt = Te);
        return St && tu(N, et), Ce;
      }
      for (Te = c(Te); et < w.length; et++)
        ct = J(
          Te,
          N,
          et,
          w[et],
          F
        ), ct !== null && (l && ct.alternate !== null && Te.delete(
          ct.key === null ? et : ct.key
        ), C = s(
          ct,
          C,
          et
        ), Dt === null ? Ce = ct : Dt.sibling = ct, Dt = ct);
      return l && Te.forEach(function(Lu) {
        return n(N, Lu);
      }), St && tu(N, et), Ce;
    }
    function we(N, C, w, F) {
      if (w == null) throw Error(E(151));
      for (var Ce = null, Dt = null, Te = C, et = C = 0, ct = null, Ut = w.next(); Te !== null && !Ut.done; et++, Ut = w.next()) {
        Te.index > et ? (ct = Te, Te = null) : ct = Te.sibling;
        var Lu = G(N, Te, Ut.value, F);
        if (Lu === null) {
          Te === null && (Te = ct);
          break;
        }
        l && Te && Lu.alternate === null && n(N, Te), C = s(Lu, C, et), Dt === null ? Ce = Lu : Dt.sibling = Lu, Dt = Lu, Te = ct;
      }
      if (Ut.done)
        return u(N, Te), St && tu(N, et), Ce;
      if (Te === null) {
        for (; !Ut.done; et++, Ut = w.next())
          Ut = I(N, Ut.value, F), Ut !== null && (C = s(Ut, C, et), Dt === null ? Ce = Ut : Dt.sibling = Ut, Dt = Ut);
        return St && tu(N, et), Ce;
      }
      for (Te = c(Te); !Ut.done; et++, Ut = w.next())
        Ut = J(Te, N, et, Ut.value, F), Ut !== null && (l && Ut.alternate !== null && Te.delete(Ut.key === null ? et : Ut.key), C = s(Ut, C, et), Dt === null ? Ce = Ut : Dt.sibling = Ut, Dt = Ut);
      return l && Te.forEach(function(kg) {
        return n(N, kg);
      }), St && tu(N, et), Ce;
    }
    function $t(N, C, w, F) {
      if (typeof w == "object" && w !== null && w.type === We && w.key === null && (w = w.props.children), typeof w == "object" && w !== null) {
        switch (w.$$typeof) {
          case oe:
            e: {
              for (var Ce = w.key; C !== null; ) {
                if (C.key === Ce) {
                  if (Ce = w.type, Ce === We) {
                    if (C.tag === 7) {
                      u(
                        N,
                        C.sibling
                      ), F = r(
                        C,
                        w.props.children
                      ), F.return = N, N = F;
                      break e;
                    }
                  } else if (C.elementType === Ce || typeof Ce == "object" && Ce !== null && Ce.$$typeof === lt && Hc(Ce) === C.type) {
                    u(
                      N,
                      C.sibling
                    ), F = r(C, w.props), Nf(F, w), F.return = N, N = F;
                    break e;
                  }
                  u(N, C);
                  break;
                } else n(N, C);
                C = C.sibling;
              }
              w.type === We ? (F = Fi(
                w.props.children,
                N.mode,
                F,
                w.key
              ), F.return = N, N = F) : (F = Ld(
                w.type,
                w.key,
                w.props,
                null,
                N.mode,
                F
              ), Nf(F, w), F.return = N, N = F);
            }
            return m(N);
          case ze:
            e: {
              for (Ce = w.key; C !== null; ) {
                if (C.key === Ce)
                  if (C.tag === 4 && C.stateNode.containerInfo === w.containerInfo && C.stateNode.implementation === w.implementation) {
                    u(
                      N,
                      C.sibling
                    ), F = r(C, w.children || []), F.return = N, N = F;
                    break e;
                  } else {
                    u(N, C);
                    break;
                  }
                else n(N, C);
                C = C.sibling;
              }
              F = Xd(w, N.mode, F), F.return = N, N = F;
            }
            return m(N);
          case lt:
            return w = Hc(w), $t(
              N,
              C,
              w,
              F
            );
        }
        if (ft(w))
          return be(
            N,
            C,
            w,
            F
          );
        if (Se(w)) {
          if (Ce = Se(w), typeof Ce != "function") throw Error(E(150));
          return w = Ce.call(w), we(
            N,
            C,
            w,
            F
          );
        }
        if (typeof w.then == "function")
          return $t(
            N,
            C,
            ds(w),
            F
          );
        if (w.$$typeof === tt)
          return $t(
            N,
            C,
            Ii(N, w),
            F
          );
        hs(N, w);
      }
      return typeof w == "string" && w !== "" || typeof w == "number" || typeof w == "bigint" ? (w = "" + w, C !== null && C.tag === 6 ? (u(N, C.sibling), F = r(C, w), F.return = N, N = F) : (u(N, C), F = zf(w, N.mode, F), F.return = N, N = F), m(N)) : u(N, C);
    }
    return function(N, C, w, F) {
      try {
        Co = 0;
        var Ce = $t(
          N,
          C,
          w,
          F
        );
        return Nc = null, Ce;
      } catch (Te) {
        if (Te === Uc || Te === xf) throw Te;
        var Dt = bl(29, Te, null, N.mode);
        return Dt.lanes = F, Dt.return = N, Dt;
      }
    };
  }
  var Bc = Zp(!0), dy = Zp(!1), ec = !1;
  function ms(l) {
    l.updateQueue = {
      baseState: l.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function Kd(l, n) {
    l = l.updateQueue, n.updateQueue === l && (n.updateQueue = {
      baseState: l.baseState,
      firstBaseUpdate: l.firstBaseUpdate,
      lastBaseUpdate: l.lastBaseUpdate,
      shared: l.shared,
      callbacks: null
    });
  }
  function tc(l) {
    return { lane: l, tag: 0, payload: null, callback: null, next: null };
  }
  function Un(l, n, u) {
    var c = l.updateQueue;
    if (c === null) return null;
    if (c = c.shared, (Ct & 2) !== 0) {
      var r = c.pending;
      return r === null ? n.next = n : (n.next = r.next, r.next = n), c.pending = n, n = ls(l), Gd(l, null, u), n;
    }
    return On(l, c, n, u), ls(l);
  }
  function Yc(l, n, u) {
    if (n = n.updateQueue, n !== null && (n = n.shared, (u & 4194048) !== 0)) {
      var c = n.lanes;
      c &= l.pendingLanes, u |= c, n.lanes = u, cn(l, u);
    }
  }
  function $d(l, n) {
    var u = l.updateQueue, c = l.alternate;
    if (c !== null && (c = c.updateQueue, u === c)) {
      var r = null, s = null;
      if (u = u.firstBaseUpdate, u !== null) {
        do {
          var m = {
            lane: u.lane,
            tag: u.tag,
            payload: u.payload,
            callback: null,
            next: null
          };
          s === null ? r = s = m : s = s.next = m, u = u.next;
        } while (u !== null);
        s === null ? r = s = n : s = s.next = n;
      } else r = s = n;
      u = {
        baseState: c.baseState,
        firstBaseUpdate: r,
        lastBaseUpdate: s,
        shared: c.shared,
        callbacks: c.callbacks
      }, l.updateQueue = u;
      return;
    }
    l = u.lastBaseUpdate, l === null ? u.firstBaseUpdate = n : l.next = n, u.lastBaseUpdate = n;
  }
  var hy = !1;
  function wc() {
    if (hy) {
      var l = Yl;
      if (l !== null) throw l;
    }
  }
  function oi(l, n, u, c) {
    hy = !1;
    var r = l.updateQueue;
    ec = !1;
    var s = r.firstBaseUpdate, m = r.lastBaseUpdate, S = r.shared.pending;
    if (S !== null) {
      r.shared.pending = null;
      var O = S, j = O.next;
      O.next = null, m === null ? s = j : m.next = j, m = O;
      var K = l.alternate;
      K !== null && (K = K.updateQueue, S = K.lastBaseUpdate, S !== m && (S === null ? K.firstBaseUpdate = j : S.next = j, K.lastBaseUpdate = O));
    }
    if (s !== null) {
      var I = r.baseState;
      m = 0, K = j = O = null, S = s;
      do {
        var G = S.lane & -536870913, J = G !== S.lane;
        if (J ? (yt & G) === G : (c & G) === G) {
          G !== 0 && G === Cc && (hy = !0), K !== null && (K = K.next = {
            lane: 0,
            tag: S.tag,
            payload: S.payload,
            callback: null,
            next: null
          });
          e: {
            var be = l, we = S;
            G = n;
            var $t = u;
            switch (we.tag) {
              case 1:
                if (be = we.payload, typeof be == "function") {
                  I = be.call($t, I, G);
                  break e;
                }
                I = be;
                break e;
              case 3:
                be.flags = be.flags & -65537 | 128;
              case 0:
                if (be = we.payload, G = typeof be == "function" ? be.call($t, I, G) : be, G == null) break e;
                I = Y({}, I, G);
                break e;
              case 2:
                ec = !0;
            }
          }
          G = S.callback, G !== null && (l.flags |= 64, J && (l.flags |= 8192), J = r.callbacks, J === null ? r.callbacks = [G] : J.push(G));
        } else
          J = {
            lane: G,
            tag: S.tag,
            payload: S.payload,
            callback: S.callback,
            next: null
          }, K === null ? (j = K = J, O = I) : K = K.next = J, m |= G;
        if (S = S.next, S === null) {
          if (S = r.shared.pending, S === null)
            break;
          J = S, S = J.next, J.next = null, r.lastBaseUpdate = J, r.shared.pending = null;
        }
      } while (!0);
      K === null && (O = I), r.baseState = O, r.firstBaseUpdate = j, r.lastBaseUpdate = K, s === null && (r.shared.lanes = 0), Yu |= m, l.lanes = m, l.memoizedState = I;
    }
  }
  function kd(l, n) {
    if (typeof l != "function")
      throw Error(E(191, l));
    l.call(n);
  }
  function qc(l, n) {
    var u = l.callbacks;
    if (u !== null)
      for (l.callbacks = null, l = 0; l < u.length; l++)
        kd(u[l], n);
  }
  var Ql = b(null), Uo = b(0);
  function Jp(l, n) {
    l = Bu, $(Uo, l), $(Ql, n), Bu = l | n.baseLanes;
  }
  function ys() {
    $(Uo, Bu), $(Ql, Ql.current);
  }
  function Bf() {
    Bu = Uo.current, B(Ql), B(Uo);
  }
  var $a = b(null), Hn = null;
  function fi(l) {
    var n = l.alternate;
    $(cl, cl.current & 1), $($a, l), Hn === null && (n === null || Ql.current !== null || n.memoizedState !== null) && (Hn = l);
  }
  function Yf(l) {
    $(cl, cl.current), $($a, l), Hn === null && (Hn = l);
  }
  function Fd(l) {
    l.tag === 22 ? ($(cl, cl.current), $($a, l), Hn === null && (Hn = l)) : Cu();
  }
  function Cu() {
    $(cl, cl.current), $($a, $a.current);
  }
  function ka(l) {
    B($a), Hn === l && (Hn = null), B(cl);
  }
  var cl = b(0);
  function wf(l) {
    for (var n = l; n !== null; ) {
      if (n.tag === 13) {
        var u = n.memoizedState;
        if (u !== null && (u = u.dehydrated, u === null || iu(u) || Fc(u)))
          return n;
      } else if (n.tag === 19 && (n.memoizedProps.revealOrder === "forwards" || n.memoizedProps.revealOrder === "backwards" || n.memoizedProps.revealOrder === "unstable_legacy-backwards" || n.memoizedProps.revealOrder === "together")) {
        if ((n.flags & 128) !== 0) return n;
      } else if (n.child !== null) {
        n.child.return = n, n = n.child;
        continue;
      }
      if (n === l) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === l) return null;
        n = n.return;
      }
      n.sibling.return = n.return, n = n.sibling;
    }
    return null;
  }
  var ri = 0, at = null, Gt = null, zl = null, Ho = !1, xo = !1, lc = !1, ps = 0, qf = 0, jc = null, Kp = 0;
  function ml() {
    throw Error(E(321));
  }
  function ac(l, n) {
    if (n === null) return !1;
    for (var u = 0; u < n.length && u < l.length; u++)
      if (!Ca(l[u], n[u])) return !1;
    return !0;
  }
  function gs(l, n, u, c, r, s) {
    return ri = s, at = n, n.memoizedState = null, n.updateQueue = null, n.lanes = 0, D.H = l === null || l.memoizedState === null ? tg : hh, lc = !1, s = u(c, r), lc = !1, xo && (s = $p(
      n,
      u,
      c,
      r
    )), Wd(l), s;
  }
  function Wd(l) {
    D.H = Os;
    var n = Gt !== null && Gt.next !== null;
    if (ri = 0, zl = Gt = at = null, Ho = !1, qf = 0, jc = null, n) throw Error(E(300));
    l === null || Ml || (l = l.dependencies, l !== null && _o(l) && (Ml = !0));
  }
  function $p(l, n, u, c) {
    at = l;
    var r = 0;
    do {
      if (xo && (jc = null), qf = 0, xo = !1, 25 <= r) throw Error(E(301));
      if (r += 1, zl = Gt = null, l.updateQueue != null) {
        var s = l.updateQueue;
        s.lastEffect = null, s.events = null, s.stores = null, s.memoCache != null && (s.memoCache.index = 0);
      }
      D.H = lg, s = n(u, c);
    } while (xo);
    return s;
  }
  function u1() {
    var l = D.H, n = l.useState()[0];
    return n = typeof n.then == "function" ? Bo(n) : n, l = l.useState()[0], (Gt !== null ? Gt.memoizedState : null) !== l && (at.flags |= 1024), n;
  }
  function Id() {
    var l = ps !== 0;
    return ps = 0, l;
  }
  function No(l, n, u) {
    n.updateQueue = l.updateQueue, n.flags &= -2053, l.lanes &= ~u;
  }
  function vs(l) {
    if (Ho) {
      for (l = l.memoizedState; l !== null; ) {
        var n = l.queue;
        n !== null && (n.pending = null), l = l.next;
      }
      Ho = !1;
    }
    ri = 0, zl = Gt = at = null, xo = !1, qf = ps = 0, jc = null;
  }
  function ta() {
    var l = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return zl === null ? at.memoizedState = zl = l : zl = zl.next = l, zl;
  }
  function Tl() {
    if (Gt === null) {
      var l = at.alternate;
      l = l !== null ? l.memoizedState : null;
    } else l = Gt.next;
    var n = zl === null ? at.memoizedState : zl.next;
    if (n !== null)
      zl = n, Gt = l;
    else {
      if (l === null)
        throw at.alternate === null ? Error(E(467)) : Error(E(310));
      Gt = l, l = {
        memoizedState: Gt.memoizedState,
        baseState: Gt.baseState,
        baseQueue: Gt.baseQueue,
        queue: Gt.queue,
        next: null
      }, zl === null ? at.memoizedState = zl = l : zl = zl.next = l;
    }
    return zl;
  }
  function Ss() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Bo(l) {
    var n = qf;
    return qf += 1, jc === null && (jc = []), l = ry(jc, l, n), n = at, (zl === null ? n.memoizedState : zl.next) === null && (n = n.alternate, D.H = n === null || n.memoizedState === null ? tg : hh), l;
  }
  function jf(l) {
    if (l !== null && typeof l == "object") {
      if (typeof l.then == "function") return Bo(l);
      if (l.$$typeof === tt) return P(l);
    }
    throw Error(E(438, String(l)));
  }
  function Pd(l) {
    var n = null, u = at.updateQueue;
    if (u !== null && (n = u.memoCache), n == null) {
      var c = at.alternate;
      c !== null && (c = c.updateQueue, c !== null && (c = c.memoCache, c != null && (n = {
        data: c.data.map(function(r) {
          return r.slice();
        }),
        index: 0
      })));
    }
    if (n == null && (n = { data: [], index: 0 }), u === null && (u = Ss(), at.updateQueue = u), u.memoCache = n, u = n.data[n.index], u === void 0)
      for (u = n.data[n.index] = Array(l), c = 0; c < l; c++)
        u[c] = pe;
    return n.index++, u;
  }
  function si(l, n) {
    return typeof n == "function" ? n(l) : n;
  }
  function di(l) {
    var n = Tl();
    return eh(n, Gt, l);
  }
  function eh(l, n, u) {
    var c = l.queue;
    if (c === null) throw Error(E(311));
    c.lastRenderedReducer = u;
    var r = l.baseQueue, s = c.pending;
    if (s !== null) {
      if (r !== null) {
        var m = r.next;
        r.next = s.next, s.next = m;
      }
      n.baseQueue = r = s, c.pending = null;
    }
    if (s = l.baseState, r === null) l.memoizedState = s;
    else {
      n = r.next;
      var S = m = null, O = null, j = n, K = !1;
      do {
        var I = j.lane & -536870913;
        if (I !== j.lane ? (yt & I) === I : (ri & I) === I) {
          var G = j.revertLane;
          if (G === 0)
            O !== null && (O = O.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: j.action,
              hasEagerState: j.hasEagerState,
              eagerState: j.eagerState,
              next: null
            }), I === Cc && (K = !0);
          else if ((ri & G) === G) {
            j = j.next, G === Cc && (K = !0);
            continue;
          } else
            I = {
              lane: 0,
              revertLane: j.revertLane,
              gesture: null,
              action: j.action,
              hasEagerState: j.hasEagerState,
              eagerState: j.eagerState,
              next: null
            }, O === null ? (S = O = I, m = s) : O = O.next = I, at.lanes |= G, Yu |= G;
          I = j.action, lc && u(s, I), s = j.hasEagerState ? j.eagerState : u(s, I);
        } else
          G = {
            lane: I,
            revertLane: j.revertLane,
            gesture: j.gesture,
            action: j.action,
            hasEagerState: j.hasEagerState,
            eagerState: j.eagerState,
            next: null
          }, O === null ? (S = O = G, m = s) : O = O.next = G, at.lanes |= I, Yu |= I;
        j = j.next;
      } while (j !== null && j !== n);
      if (O === null ? m = s : O.next = S, !Ca(s, l.memoizedState) && (Ml = !0, K && (u = Yl, u !== null)))
        throw u;
      l.memoizedState = s, l.baseState = m, l.baseQueue = O, c.lastRenderedState = s;
    }
    return r === null && (c.lanes = 0), [l.memoizedState, c.dispatch];
  }
  function th(l) {
    var n = Tl(), u = n.queue;
    if (u === null) throw Error(E(311));
    u.lastRenderedReducer = l;
    var c = u.dispatch, r = u.pending, s = n.memoizedState;
    if (r !== null) {
      u.pending = null;
      var m = r = r.next;
      do
        s = l(s, m.action), m = m.next;
      while (m !== r);
      Ca(s, n.memoizedState) || (Ml = !0), n.memoizedState = s, n.baseQueue === null && (n.baseState = s), u.lastRenderedState = s;
    }
    return [s, c];
  }
  function my(l, n, u) {
    var c = at, r = Tl(), s = St;
    if (s) {
      if (u === void 0) throw Error(E(407));
      u = u();
    } else u = n();
    var m = !Ca(
      (Gt || r).memoizedState,
      u
    );
    if (m && (r.memoizedState = u, Ml = !0), r = r.queue, ih(lh.bind(null, c, r, l), [
      l
    ]), r.getSnapshot !== n || m || zl !== null && zl.memoizedState.tag & 1) {
      if (c.flags |= 2048, wo(
        9,
        { destroy: void 0 },
        yy.bind(
          null,
          c,
          r,
          u,
          n
        ),
        null
      ), Jt === null) throw Error(E(349));
      s || (ri & 127) !== 0 || bs(c, n, u);
    }
    return u;
  }
  function bs(l, n, u) {
    l.flags |= 16384, l = { getSnapshot: n, value: u }, n = at.updateQueue, n === null ? (n = Ss(), at.updateQueue = n, n.stores = [l]) : (u = n.stores, u === null ? n.stores = [l] : u.push(l));
  }
  function yy(l, n, u, c) {
    n.value = u, n.getSnapshot = c, ah(n) && nh(l);
  }
  function lh(l, n, u) {
    return u(function() {
      ah(n) && nh(l);
    });
  }
  function ah(l) {
    var n = l.getSnapshot;
    l = l.value;
    try {
      var u = n();
      return !Ca(l, u);
    } catch {
      return !0;
    }
  }
  function nh(l) {
    var n = $i(l, 2);
    n !== null && tn(n, l, 2);
  }
  function py(l) {
    var n = ta();
    if (typeof l == "function") {
      var u = l;
      if (l = u(), lc) {
        ma(!0);
        try {
          u();
        } finally {
          ma(!1);
        }
      }
    }
    return n.memoizedState = n.baseState = l, n.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: si,
      lastRenderedState: l
    }, n;
  }
  function la(l, n, u, c) {
    return l.baseState = u, eh(
      l,
      Gt,
      typeof c == "function" ? c : si
    );
  }
  function kp(l, n, u, c, r) {
    if (_s(l)) throw Error(E(485));
    if (l = n.action, l !== null) {
      var s = {
        payload: r,
        action: l,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(m) {
          s.listeners.push(m);
        }
      };
      D.T !== null ? u(!0) : s.isTransition = !1, c(s), u = n.pending, u === null ? (s.next = n.pending = s, gy(n, s)) : (s.next = u.next, n.pending = u.next = s);
    }
  }
  function gy(l, n) {
    var u = n.action, c = n.payload, r = l.state;
    if (n.isTransition) {
      var s = D.T, m = {};
      D.T = m;
      try {
        var S = u(r, c), O = D.S;
        O !== null && O(m, S), vy(l, n, S);
      } catch (j) {
        Yo(l, n, j);
      } finally {
        s !== null && m.types !== null && (s.types = m.types), D.T = s;
      }
    } else
      try {
        s = u(r, c), vy(l, n, s);
      } catch (j) {
        Yo(l, n, j);
      }
  }
  function vy(l, n, u) {
    u !== null && typeof u == "object" && typeof u.then == "function" ? u.then(
      function(c) {
        Sy(l, n, c);
      },
      function(c) {
        return Yo(l, n, c);
      }
    ) : Sy(l, n, u);
  }
  function Sy(l, n, u) {
    n.status = "fulfilled", n.value = u, by(n), l.state = u, n = l.pending, n !== null && (u = n.next, u === n ? l.pending = null : (u = u.next, n.next = u, gy(l, u)));
  }
  function Yo(l, n, u) {
    var c = l.pending;
    if (l.pending = null, c !== null) {
      c = c.next;
      do
        n.status = "rejected", n.reason = u, by(n), n = n.next;
      while (n !== c);
    }
    l.action = null;
  }
  function by(l) {
    l = l.listeners;
    for (var n = 0; n < l.length; n++) (0, l[n])();
  }
  function Es(l, n) {
    return n;
  }
  function Ey(l, n) {
    if (St) {
      var u = Jt.formState;
      if (u !== null) {
        e: {
          var c = at;
          if (St) {
            if (Wt) {
              t: {
                for (var r = Wt, s = Vl; r.nodeType !== 8; ) {
                  if (!s) {
                    r = null;
                    break t;
                  }
                  if (r = ln(
                    r.nextSibling
                  ), r === null) {
                    r = null;
                    break t;
                  }
                }
                s = r.data, r = s === "F!" || s === "F" ? r : null;
              }
              if (r) {
                Wt = ln(
                  r.nextSibling
                ), c = r.data === "F!";
                break e;
              }
            }
            lu(c);
          }
          c = !1;
        }
        c && (n = u[0]);
      }
    }
    return u = ta(), u.memoizedState = u.baseState = n, c = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Es,
      lastRenderedState: n
    }, u.queue = c, u = sh.bind(
      null,
      at,
      c
    ), c.dispatch = u, c = py(!1), s = Gc.bind(
      null,
      at,
      !1,
      c.queue
    ), c = ta(), r = {
      state: n,
      dispatch: null,
      action: l,
      pending: null
    }, c.queue = r, u = kp.bind(
      null,
      at,
      r,
      s,
      u
    ), r.dispatch = u, c.memoizedState = l, [n, u, !1];
  }
  function Fp(l) {
    var n = Tl();
    return Ts(n, Gt, l);
  }
  function Ts(l, n, u) {
    if (n = eh(
      l,
      n,
      Es
    )[0], l = di(si)[0], typeof n == "object" && n !== null && typeof n.then == "function")
      try {
        var c = Bo(n);
      } catch (m) {
        throw m === Uc ? xf : m;
      }
    else c = n;
    n = Tl();
    var r = n.queue, s = r.dispatch;
    return u !== n.memoizedState && (at.flags |= 2048, wo(
      9,
      { destroy: void 0 },
      Ty.bind(null, r, u),
      null
    )), [c, s, l];
  }
  function Ty(l, n) {
    l.action = n;
  }
  function Ay(l) {
    var n = Tl(), u = Gt;
    if (u !== null)
      return Ts(n, u, l);
    Tl(), n = n.memoizedState, u = Tl();
    var c = u.queue.dispatch;
    return u.memoizedState = l, [n, c, !1];
  }
  function wo(l, n, u, c) {
    return l = { tag: l, create: u, deps: c, inst: n, next: null }, n = at.updateQueue, n === null && (n = Ss(), at.updateQueue = n), u = n.lastEffect, u === null ? n.lastEffect = l.next = l : (c = u.next, u.next = l, l.next = c, n.lastEffect = l), l;
  }
  function Ry() {
    return Tl().memoizedState;
  }
  function Gf(l, n, u, c) {
    var r = ta();
    at.flags |= l, r.memoizedState = wo(
      1 | n,
      { destroy: void 0 },
      u,
      c === void 0 ? null : c
    );
  }
  function Lf(l, n, u, c) {
    var r = Tl();
    c = c === void 0 ? null : c;
    var s = r.memoizedState.inst;
    Gt !== null && c !== null && ac(c, Gt.memoizedState.deps) ? r.memoizedState = wo(n, s, u, c) : (at.flags |= l, r.memoizedState = wo(
      1 | n,
      s,
      u,
      c
    ));
  }
  function uh(l, n) {
    Gf(8390656, 8, l, n);
  }
  function ih(l, n) {
    Lf(2048, 8, l, n);
  }
  function _y(l) {
    at.flags |= 4;
    var n = at.updateQueue;
    if (n === null)
      n = Ss(), at.updateQueue = n, n.events = [l];
    else {
      var u = n.events;
      u === null ? n.events = [l] : u.push(l);
    }
  }
  function As(l) {
    var n = Tl().memoizedState;
    return _y({ ref: n, nextImpl: l }), function() {
      if ((Ct & 2) !== 0) throw Error(E(440));
      return n.impl.apply(void 0, arguments);
    };
  }
  function ch(l, n) {
    return Lf(4, 2, l, n);
  }
  function Oy(l, n) {
    return Lf(4, 4, l, n);
  }
  function oh(l, n) {
    if (typeof n == "function") {
      l = l();
      var u = n(l);
      return function() {
        typeof u == "function" ? u() : n(null);
      };
    }
    if (n != null)
      return l = l(), n.current = l, function() {
        n.current = null;
      };
  }
  function Dy(l, n, u) {
    u = u != null ? u.concat([l]) : null, Lf(4, 4, oh.bind(null, n, l), u);
  }
  function Uu() {
  }
  function fh(l, n) {
    var u = Tl();
    n = n === void 0 ? null : n;
    var c = u.memoizedState;
    return n !== null && ac(n, c[1]) ? c[0] : (u.memoizedState = [l, n], l);
  }
  function Wp(l, n) {
    var u = Tl();
    n = n === void 0 ? null : n;
    var c = u.memoizedState;
    if (n !== null && ac(n, c[1]))
      return c[0];
    if (c = l(), lc) {
      ma(!0);
      try {
        l();
      } finally {
        ma(!1);
      }
    }
    return u.memoizedState = [c, n], c;
  }
  function Rs(l, n, u) {
    return u === void 0 || (ri & 1073741824) !== 0 && (yt & 261930) === 0 ? l.memoizedState = n : (l.memoizedState = u, l = dg(), at.lanes |= l, Yu |= l, u);
  }
  function hi(l, n, u, c) {
    return Ca(u, n) ? u : Ql.current !== null ? (l = Rs(l, u, c), Ca(l, n) || (Ml = !0), l) : (ri & 42) === 0 || (ri & 1073741824) !== 0 && (yt & 261930) === 0 ? (Ml = !0, l.memoizedState = u) : (l = dg(), at.lanes |= l, Yu |= l, n);
  }
  function rh(l, n, u, c, r) {
    var s = v.p;
    v.p = s !== 0 && 8 > s ? s : 8;
    var m = D.T, S = {};
    D.T = S, Gc(l, !1, n, u);
    try {
      var O = r(), j = D.S;
      if (j !== null && j(S, O), O !== null && typeof O == "object" && typeof O.then == "function") {
        var K = ss(
          O,
          c
        );
        nc(
          l,
          n,
          K,
          mn(l)
        );
      } else
        nc(
          l,
          n,
          c,
          mn(l)
        );
    } catch (I) {
      nc(
        l,
        n,
        { then: function() {
        }, status: "rejected", reason: I },
        mn()
      );
    } finally {
      v.p = s, m !== null && S.types !== null && (m.types = S.types), D.T = m;
    }
  }
  function Ip() {
  }
  function Xf(l, n, u, c) {
    if (l.tag !== 5) throw Error(E(476));
    var r = Vf(l).queue;
    rh(
      l,
      r,
      n,
      ue,
      u === null ? Ip : function() {
        return Zt(l), u(c);
      }
    );
  }
  function Vf(l) {
    var n = l.memoizedState;
    if (n !== null) return n;
    n = {
      memoizedState: ue,
      baseState: ue,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: si,
        lastRenderedState: ue
      },
      next: null
    };
    var u = {};
    return n.next = {
      memoizedState: u,
      baseState: u,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: si,
        lastRenderedState: u
      },
      next: null
    }, l.memoizedState = n, l = l.alternate, l !== null && (l.memoizedState = n), n;
  }
  function Zt(l) {
    var n = Vf(l);
    n.next === null && (n = l.alternate.memoizedState), nc(
      l,
      n.next.queue,
      {},
      mn()
    );
  }
  function zy() {
    return P(Ps);
  }
  function Pp() {
    return Tl().memoizedState;
  }
  function My() {
    return Tl().memoizedState;
  }
  function mi(l) {
    for (var n = l.return; n !== null; ) {
      switch (n.tag) {
        case 24:
        case 3:
          var u = mn();
          l = tc(u);
          var c = Un(n, l, u);
          c !== null && (tn(c, n, u), Yc(c, n, u)), n = { cache: cs() }, l.payload = n;
          return;
      }
      n = n.return;
    }
  }
  function eg(l, n, u) {
    var c = mn();
    u = {
      lane: c,
      revertLane: 0,
      gesture: null,
      action: u,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, _s(l) ? dh(n, u) : (u = eu(l, n, u, c), u !== null && (tn(u, l, c), Cy(u, n, c)));
  }
  function sh(l, n, u) {
    var c = mn();
    nc(l, n, u, c);
  }
  function nc(l, n, u, c) {
    var r = {
      lane: c,
      revertLane: 0,
      gesture: null,
      action: u,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (_s(l)) dh(n, r);
    else {
      var s = l.alternate;
      if (l.lanes === 0 && (s === null || s.lanes === 0) && (s = n.lastRenderedReducer, s !== null))
        try {
          var m = n.lastRenderedState, S = s(m, u);
          if (r.hasEagerState = !0, r.eagerState = S, Ca(S, m))
            return On(l, n, r, 0), Jt === null && _n(), !1;
        } catch {
        }
      if (u = eu(l, n, r, c), u !== null)
        return tn(u, l, c), Cy(u, n, c), !0;
    }
    return !1;
  }
  function Gc(l, n, u, c) {
    if (c = {
      lane: 2,
      revertLane: qh(),
      gesture: null,
      action: c,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, _s(l)) {
      if (n) throw Error(E(479));
    } else
      n = eu(
        l,
        u,
        c,
        2
      ), n !== null && tn(n, l, 2);
  }
  function _s(l) {
    var n = l.alternate;
    return l === at || n !== null && n === at;
  }
  function dh(l, n) {
    xo = Ho = !0;
    var u = l.pending;
    u === null ? n.next = n : (n.next = u.next, u.next = n), l.pending = n;
  }
  function Cy(l, n, u) {
    if ((u & 4194048) !== 0) {
      var c = n.lanes;
      c &= l.pendingLanes, u |= c, n.lanes = u, cn(l, u);
    }
  }
  var Os = {
    readContext: P,
    use: jf,
    useCallback: ml,
    useContext: ml,
    useEffect: ml,
    useImperativeHandle: ml,
    useLayoutEffect: ml,
    useInsertionEffect: ml,
    useMemo: ml,
    useReducer: ml,
    useRef: ml,
    useState: ml,
    useDebugValue: ml,
    useDeferredValue: ml,
    useTransition: ml,
    useSyncExternalStore: ml,
    useId: ml,
    useHostTransitionStatus: ml,
    useFormState: ml,
    useActionState: ml,
    useOptimistic: ml,
    useMemoCache: ml,
    useCacheRefresh: ml
  };
  Os.useEffectEvent = ml;
  var tg = {
    readContext: P,
    use: jf,
    useCallback: function(l, n) {
      return ta().memoizedState = [
        l,
        n === void 0 ? null : n
      ], l;
    },
    useContext: P,
    useEffect: uh,
    useImperativeHandle: function(l, n, u) {
      u = u != null ? u.concat([l]) : null, Gf(
        4194308,
        4,
        oh.bind(null, n, l),
        u
      );
    },
    useLayoutEffect: function(l, n) {
      return Gf(4194308, 4, l, n);
    },
    useInsertionEffect: function(l, n) {
      Gf(4, 2, l, n);
    },
    useMemo: function(l, n) {
      var u = ta();
      n = n === void 0 ? null : n;
      var c = l();
      if (lc) {
        ma(!0);
        try {
          l();
        } finally {
          ma(!1);
        }
      }
      return u.memoizedState = [c, n], c;
    },
    useReducer: function(l, n, u) {
      var c = ta();
      if (u !== void 0) {
        var r = u(n);
        if (lc) {
          ma(!0);
          try {
            u(n);
          } finally {
            ma(!1);
          }
        }
      } else r = n;
      return c.memoizedState = c.baseState = r, l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: l,
        lastRenderedState: r
      }, c.queue = l, l = l.dispatch = eg.bind(
        null,
        at,
        l
      ), [c.memoizedState, l];
    },
    useRef: function(l) {
      var n = ta();
      return l = { current: l }, n.memoizedState = l;
    },
    useState: function(l) {
      l = py(l);
      var n = l.queue, u = sh.bind(null, at, n);
      return n.dispatch = u, [l.memoizedState, u];
    },
    useDebugValue: Uu,
    useDeferredValue: function(l, n) {
      var u = ta();
      return Rs(u, l, n);
    },
    useTransition: function() {
      var l = py(!1);
      return l = rh.bind(
        null,
        at,
        l.queue,
        !0,
        !1
      ), ta().memoizedState = l, [!1, l];
    },
    useSyncExternalStore: function(l, n, u) {
      var c = at, r = ta();
      if (St) {
        if (u === void 0)
          throw Error(E(407));
        u = u();
      } else {
        if (u = n(), Jt === null)
          throw Error(E(349));
        (yt & 127) !== 0 || bs(c, n, u);
      }
      r.memoizedState = u;
      var s = { value: u, getSnapshot: n };
      return r.queue = s, uh(lh.bind(null, c, s, l), [
        l
      ]), c.flags |= 2048, wo(
        9,
        { destroy: void 0 },
        yy.bind(
          null,
          c,
          s,
          u,
          n
        ),
        null
      ), u;
    },
    useId: function() {
      var l = ta(), n = Jt.identifierPrefix;
      if (St) {
        var u = Du, c = rn;
        u = (c & ~(1 << 32 - _l(c) - 1)).toString(32) + u, n = "_" + n + "R_" + u, u = ps++, 0 < u && (n += "H" + u.toString(32)), n += "_";
      } else
        u = Kp++, n = "_" + n + "r_" + u.toString(32) + "_";
      return l.memoizedState = n;
    },
    useHostTransitionStatus: zy,
    useFormState: Ey,
    useActionState: Ey,
    useOptimistic: function(l) {
      var n = ta();
      n.memoizedState = n.baseState = l;
      var u = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return n.queue = u, n = Gc.bind(
        null,
        at,
        !0,
        u
      ), u.dispatch = n, [l, n];
    },
    useMemoCache: Pd,
    useCacheRefresh: function() {
      return ta().memoizedState = mi.bind(
        null,
        at
      );
    },
    useEffectEvent: function(l) {
      var n = ta(), u = { impl: l };
      return n.memoizedState = u, function() {
        if ((Ct & 2) !== 0)
          throw Error(E(440));
        return u.impl.apply(void 0, arguments);
      };
    }
  }, hh = {
    readContext: P,
    use: jf,
    useCallback: fh,
    useContext: P,
    useEffect: ih,
    useImperativeHandle: Dy,
    useInsertionEffect: ch,
    useLayoutEffect: Oy,
    useMemo: Wp,
    useReducer: di,
    useRef: Ry,
    useState: function() {
      return di(si);
    },
    useDebugValue: Uu,
    useDeferredValue: function(l, n) {
      var u = Tl();
      return hi(
        u,
        Gt.memoizedState,
        l,
        n
      );
    },
    useTransition: function() {
      var l = di(si)[0], n = Tl().memoizedState;
      return [
        typeof l == "boolean" ? l : Bo(l),
        n
      ];
    },
    useSyncExternalStore: my,
    useId: Pp,
    useHostTransitionStatus: zy,
    useFormState: Fp,
    useActionState: Fp,
    useOptimistic: function(l, n) {
      var u = Tl();
      return la(u, Gt, l, n);
    },
    useMemoCache: Pd,
    useCacheRefresh: My
  };
  hh.useEffectEvent = As;
  var lg = {
    readContext: P,
    use: jf,
    useCallback: fh,
    useContext: P,
    useEffect: ih,
    useImperativeHandle: Dy,
    useInsertionEffect: ch,
    useLayoutEffect: Oy,
    useMemo: Wp,
    useReducer: th,
    useRef: Ry,
    useState: function() {
      return th(si);
    },
    useDebugValue: Uu,
    useDeferredValue: function(l, n) {
      var u = Tl();
      return Gt === null ? Rs(u, l, n) : hi(
        u,
        Gt.memoizedState,
        l,
        n
      );
    },
    useTransition: function() {
      var l = th(si)[0], n = Tl().memoizedState;
      return [
        typeof l == "boolean" ? l : Bo(l),
        n
      ];
    },
    useSyncExternalStore: my,
    useId: Pp,
    useHostTransitionStatus: zy,
    useFormState: Ay,
    useActionState: Ay,
    useOptimistic: function(l, n) {
      var u = Tl();
      return Gt !== null ? la(u, Gt, l, n) : (u.baseState = l, [l, u.queue.dispatch]);
    },
    useMemoCache: Pd,
    useCacheRefresh: My
  };
  lg.useEffectEvent = As;
  function qo(l, n, u, c) {
    n = l.memoizedState, u = u(c, n), u = u == null ? n : Y({}, n, u), l.memoizedState = u, l.lanes === 0 && (l.updateQueue.baseState = u);
  }
  var au = {
    enqueueSetState: function(l, n, u) {
      l = l._reactInternals;
      var c = mn(), r = tc(c);
      r.payload = n, u != null && (r.callback = u), n = Un(l, r, c), n !== null && (tn(n, l, c), Yc(n, l, c));
    },
    enqueueReplaceState: function(l, n, u) {
      l = l._reactInternals;
      var c = mn(), r = tc(c);
      r.tag = 1, r.payload = n, u != null && (r.callback = u), n = Un(l, r, c), n !== null && (tn(n, l, c), Yc(n, l, c));
    },
    enqueueForceUpdate: function(l, n) {
      l = l._reactInternals;
      var u = mn(), c = tc(u);
      c.tag = 2, n != null && (c.callback = n), n = Un(l, c, u), n !== null && (tn(n, l, u), Yc(n, l, u));
    }
  };
  function Uy(l, n, u, c, r, s, m) {
    return l = l.stateNode, typeof l.shouldComponentUpdate == "function" ? l.shouldComponentUpdate(c, s, m) : n.prototype && n.prototype.isPureReactComponent ? !Wn(u, c) || !Wn(r, s) : !0;
  }
  function ag(l, n, u, c) {
    l = n.state, typeof n.componentWillReceiveProps == "function" && n.componentWillReceiveProps(u, c), typeof n.UNSAFE_componentWillReceiveProps == "function" && n.UNSAFE_componentWillReceiveProps(u, c), n.state !== l && au.enqueueReplaceState(n, n.state, null);
  }
  function Lc(l, n) {
    var u = n;
    if ("ref" in n) {
      u = {};
      for (var c in n)
        c !== "ref" && (u[c] = n[c]);
    }
    if (l = l.defaultProps) {
      u === n && (u = Y({}, u));
      for (var r in l)
        u[r] === void 0 && (u[r] = l[r]);
    }
    return u;
  }
  function mh(l) {
    To(l);
  }
  function Hy(l) {
    console.error(l);
  }
  function yh(l) {
    To(l);
  }
  function Qf(l, n) {
    try {
      var u = l.onUncaughtError;
      u(n.value, { componentStack: n.stack });
    } catch (c) {
      setTimeout(function() {
        throw c;
      });
    }
  }
  function Ds(l, n, u) {
    try {
      var c = l.onCaughtError;
      c(u.value, {
        componentStack: u.stack,
        errorBoundary: n.tag === 1 ? n.stateNode : null
      });
    } catch (r) {
      setTimeout(function() {
        throw r;
      });
    }
  }
  function xy(l, n, u) {
    return u = tc(u), u.tag = 3, u.payload = { element: null }, u.callback = function() {
      Qf(l, n);
    }, u;
  }
  function Ny(l) {
    return l = tc(l), l.tag = 3, l;
  }
  function By(l, n, u, c) {
    var r = u.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var s = c.value;
      l.payload = function() {
        return r(s);
      }, l.callback = function() {
        Ds(n, u, c);
      };
    }
    var m = u.stateNode;
    m !== null && typeof m.componentDidCatch == "function" && (l.callback = function() {
      Ds(n, u, c), typeof r != "function" && (ol === null ? ol = /* @__PURE__ */ new Set([this]) : ol.add(this));
      var S = c.stack;
      this.componentDidCatch(c.value, {
        componentStack: S !== null ? S : ""
      });
    });
  }
  function i1(l, n, u, c, r) {
    if (u.flags |= 32768, c !== null && typeof c == "object" && typeof c.then == "function") {
      if (n = u.alternate, n !== null && ea(
        n,
        u,
        r,
        !0
      ), u = $a.current, u !== null) {
        switch (u.tag) {
          case 31:
          case 13:
            return Hn === null ? Nh() : u.alternate === null && Pt === 0 && (Pt = 3), u.flags &= -257, u.flags |= 65536, u.lanes = r, c === Mo ? u.flags |= 16384 : (n = u.updateQueue, n === null ? u.updateQueue = /* @__PURE__ */ new Set([c]) : n.add(c), Ls(l, c, r)), !1;
          case 22:
            return u.flags |= 65536, c === Mo ? u.flags |= 16384 : (n = u.updateQueue, n === null ? (n = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([c])
            }, u.updateQueue = n) : (u = n.retryQueue, u === null ? n.retryQueue = /* @__PURE__ */ new Set([c]) : u.add(c)), Ls(l, c, r)), !1;
        }
        throw Error(E(435, u.tag));
      }
      return Ls(l, c, r), Nh(), !1;
    }
    if (St)
      return n = $a.current, n !== null ? ((n.flags & 65536) === 0 && (n.flags |= 256), n.flags |= 65536, n.lanes = r, c !== ui && (l = Error(E(422), { cause: c }), Uf(Dn(l, u)))) : (c !== ui && (n = Error(E(423), {
        cause: c
      }), Uf(
        Dn(n, u)
      )), l = l.current.alternate, l.flags |= 65536, r &= -r, l.lanes |= r, c = Dn(c, u), r = xy(
        l.stateNode,
        c,
        r
      ), $d(l, r), Pt !== 4 && (Pt = 2)), !1;
    var s = Error(E(520), { cause: c });
    if (s = Dn(s, u), ws === null ? ws = [s] : ws.push(s), Pt !== 4 && (Pt = 2), n === null) return !0;
    c = Dn(c, u), u = n;
    do {
      switch (u.tag) {
        case 3:
          return u.flags |= 65536, l = r & -r, u.lanes |= l, l = xy(u.stateNode, c, l), $d(u, l), !1;
        case 1:
          if (n = u.type, s = u.stateNode, (u.flags & 128) === 0 && (typeof n.getDerivedStateFromError == "function" || s !== null && typeof s.componentDidCatch == "function" && (ol === null || !ol.has(s))))
            return u.flags |= 65536, r &= -r, u.lanes |= r, r = Ny(r), By(
              r,
              l,
              u,
              c
            ), $d(u, r), !1;
      }
      u = u.return;
    } while (u !== null);
    return !1;
  }
  var ph = Error(E(461)), Ml = !1;
  function al(l, n, u, c) {
    n.child = l === null ? dy(n, null, u, c) : Bc(
      n,
      l.child,
      u,
      c
    );
  }
  function Yy(l, n, u, c, r) {
    u = u.render;
    var s = n.ref;
    if ("ref" in c) {
      var m = {};
      for (var S in c)
        S !== "ref" && (m[S] = c[S]);
    } else m = c;
    return $e(n), c = gs(
      l,
      n,
      u,
      m,
      s,
      r
    ), S = Id(), l !== null && !Ml ? (No(l, n, r), Bn(l, n, r)) : (St && S && Mf(n), n.flags |= 1, al(l, n, c, r), n.child);
  }
  function wy(l, n, u, c, r) {
    if (l === null) {
      var s = u.type;
      return typeof s == "function" && !Ao(s) && s.defaultProps === void 0 && u.compare === null ? (n.tag = 15, n.type = s, qy(
        l,
        n,
        s,
        c,
        r
      )) : (l = Ld(
        u.type,
        null,
        c,
        n,
        n.mode,
        r
      ), l.ref = n.ref, l.return = n, n.child = l);
    }
    if (s = l.child, !Sh(l, r)) {
      var m = s.memoizedProps;
      if (u = u.compare, u = u !== null ? u : Wn, u(m, c) && l.ref === n.ref)
        return Bn(l, n, r);
    }
    return n.flags |= 1, l = ki(s, c), l.ref = n.ref, l.return = n, n.child = l;
  }
  function qy(l, n, u, c, r) {
    if (l !== null) {
      var s = l.memoizedProps;
      if (Wn(s, c) && l.ref === n.ref)
        if (Ml = !1, n.pendingProps = c = s, Sh(l, r))
          (l.flags & 131072) !== 0 && (Ml = !0);
        else
          return n.lanes = l.lanes, Bn(l, n, r);
    }
    return gh(
      l,
      n,
      u,
      c,
      r
    );
  }
  function ng(l, n, u, c) {
    var r = c.children, s = l !== null ? l.memoizedState : null;
    if (l === null && n.stateNode === null && (n.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), c.mode === "hidden") {
      if ((n.flags & 128) !== 0) {
        if (s = s !== null ? s.baseLanes | u : u, l !== null) {
          for (c = n.child = l.child, r = 0; c !== null; )
            r = r | c.lanes | c.childLanes, c = c.sibling;
          c = r & ~s;
        } else c = 0, n.child = null;
        return Fa(
          l,
          n,
          s,
          u,
          c
        );
      }
      if ((u & 536870912) !== 0)
        n.memoizedState = { baseLanes: 0, cachePool: null }, l !== null && Hf(
          n,
          s !== null ? s.cachePool : null
        ), s !== null ? Jp(n, s) : ys(), Fd(n);
      else
        return c = n.lanes = 536870912, Fa(
          l,
          n,
          s !== null ? s.baseLanes | u : u,
          u,
          c
        );
    } else
      s !== null ? (Hf(n, s.cachePool), Jp(n, s), Cu(), n.memoizedState = null) : (l !== null && Hf(n, null), ys(), Cu());
    return al(l, n, r, u), n.child;
  }
  function Xc(l, n) {
    return l !== null && l.tag === 22 || n.stateNode !== null || (n.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), n.sibling;
  }
  function Fa(l, n, u, c, r) {
    var s = Cn();
    return s = s === null ? null : { parent: Dl._currentValue, pool: s }, n.memoizedState = {
      baseLanes: u,
      cachePool: s
    }, l !== null && Hf(n, null), ys(), Fd(n), l !== null && ea(l, n, c, !0), n.childLanes = r, null;
  }
  function zs(l, n) {
    return n = Us(
      { mode: n.mode, children: n.children },
      l.mode
    ), n.ref = l.ref, l.child = n, n.return = l, n;
  }
  function Wa(l, n, u) {
    return Bc(n, l.child, null, u), l = zs(n, n.pendingProps), l.flags |= 2, ka(n), n.memoizedState = null, l;
  }
  function ug(l, n, u) {
    var c = n.pendingProps, r = (n.flags & 128) !== 0;
    if (n.flags &= -129, l === null) {
      if (St) {
        if (c.mode === "hidden")
          return l = zs(n, c), n.lanes = 536870912, Xc(null, l);
        if (Yf(n), (l = Wt) ? (l = Gg(
          l,
          Vl
        ), l = l !== null && l.data === "&" ? l : null, l !== null && (n.memoizedState = {
          dehydrated: l,
          treeContext: Ou !== null ? { id: rn, overflow: Du } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, u = ay(l), u.return = n, n.child = u, Pl = n, Wt = null)) : l = null, l === null) throw lu(n);
        return n.lanes = 536870912, null;
      }
      return zs(n, c);
    }
    var s = l.memoizedState;
    if (s !== null) {
      var m = s.dehydrated;
      if (Yf(n), r)
        if (n.flags & 256)
          n.flags &= -257, n = Wa(
            l,
            n,
            u
          );
        else if (n.memoizedState !== null)
          n.child = l.child, n.flags |= 128, n = null;
        else throw Error(E(558));
      else if (Ml || ea(l, n, u, !1), r = (u & l.childLanes) !== 0, Ml || r) {
        if (c = Jt, c !== null && (m = Da(c, u), m !== 0 && m !== s.retryLane))
          throw s.retryLane = m, $i(l, m), tn(c, l, m), ph;
        Nh(), n = Wa(
          l,
          n,
          u
        );
      } else
        l = s.treeContext, Wt = ln(m.nextSibling), Pl = n, St = !0, ni = null, Vl = !1, l !== null && ns(n, l), n = zs(n, c), n.flags |= 4096;
      return n;
    }
    return l = ki(l.child, {
      mode: c.mode,
      children: c.children
    }), l.ref = n.ref, n.child = l, l.return = n, l;
  }
  function xn(l, n) {
    var u = n.ref;
    if (u === null)
      l !== null && l.ref !== null && (n.flags |= 4194816);
    else {
      if (typeof u != "function" && typeof u != "object")
        throw Error(E(284));
      (l === null || l.ref !== u) && (n.flags |= 4194816);
    }
  }
  function gh(l, n, u, c, r) {
    return $e(n), u = gs(
      l,
      n,
      u,
      c,
      void 0,
      r
    ), c = Id(), l !== null && !Ml ? (No(l, n, r), Bn(l, n, r)) : (St && c && Mf(n), n.flags |= 1, al(l, n, u, r), n.child);
  }
  function Vc(l, n, u, c, r, s) {
    return $e(n), n.updateQueue = null, u = $p(
      n,
      c,
      u,
      r
    ), Wd(l), c = Id(), l !== null && !Ml ? (No(l, n, s), Bn(l, n, s)) : (St && c && Mf(n), n.flags |= 1, al(l, n, u, s), n.child);
  }
  function jy(l, n, u, c, r) {
    if ($e(n), n.stateNode === null) {
      var s = Za, m = u.contextType;
      typeof m == "object" && m !== null && (s = P(m)), s = new u(c, s), n.memoizedState = s.state !== null && s.state !== void 0 ? s.state : null, s.updater = au, n.stateNode = s, s._reactInternals = n, s = n.stateNode, s.props = c, s.state = n.memoizedState, s.refs = {}, ms(n), m = u.contextType, s.context = typeof m == "object" && m !== null ? P(m) : Za, s.state = n.memoizedState, m = u.getDerivedStateFromProps, typeof m == "function" && (qo(
        n,
        u,
        m,
        c
      ), s.state = n.memoizedState), typeof u.getDerivedStateFromProps == "function" || typeof s.getSnapshotBeforeUpdate == "function" || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (m = s.state, typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount(), m !== s.state && au.enqueueReplaceState(s, s.state, null), oi(n, c, s, r), wc(), s.state = n.memoizedState), typeof s.componentDidMount == "function" && (n.flags |= 4194308), c = !0;
    } else if (l === null) {
      s = n.stateNode;
      var S = n.memoizedProps, O = Lc(u, S);
      s.props = O;
      var j = s.context, K = u.contextType;
      m = Za, typeof K == "object" && K !== null && (m = P(K));
      var I = u.getDerivedStateFromProps;
      K = typeof I == "function" || typeof s.getSnapshotBeforeUpdate == "function", S = n.pendingProps !== S, K || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (S || j !== m) && ag(
        n,
        s,
        c,
        m
      ), ec = !1;
      var G = n.memoizedState;
      s.state = G, oi(n, c, s, r), wc(), j = n.memoizedState, S || G !== j || ec ? (typeof I == "function" && (qo(
        n,
        u,
        I,
        c
      ), j = n.memoizedState), (O = ec || Uy(
        n,
        u,
        O,
        c,
        G,
        j,
        m
      )) ? (K || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()), typeof s.componentDidMount == "function" && (n.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (n.flags |= 4194308), n.memoizedProps = c, n.memoizedState = j), s.props = c, s.state = j, s.context = m, c = O) : (typeof s.componentDidMount == "function" && (n.flags |= 4194308), c = !1);
    } else {
      s = n.stateNode, Kd(l, n), m = n.memoizedProps, K = Lc(u, m), s.props = K, I = n.pendingProps, G = s.context, j = u.contextType, O = Za, typeof j == "object" && j !== null && (O = P(j)), S = u.getDerivedStateFromProps, (j = typeof S == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (m !== I || G !== O) && ag(
        n,
        s,
        c,
        O
      ), ec = !1, G = n.memoizedState, s.state = G, oi(n, c, s, r), wc();
      var J = n.memoizedState;
      m !== I || G !== J || ec || l !== null && l.dependencies !== null && _o(l.dependencies) ? (typeof S == "function" && (qo(
        n,
        u,
        S,
        c
      ), J = n.memoizedState), (K = ec || Uy(
        n,
        u,
        K,
        c,
        G,
        J,
        O
      ) || l !== null && l.dependencies !== null && _o(l.dependencies)) ? (j || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(c, J, O), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(
        c,
        J,
        O
      )), typeof s.componentDidUpdate == "function" && (n.flags |= 4), typeof s.getSnapshotBeforeUpdate == "function" && (n.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || m === l.memoizedProps && G === l.memoizedState || (n.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || m === l.memoizedProps && G === l.memoizedState || (n.flags |= 1024), n.memoizedProps = c, n.memoizedState = J), s.props = c, s.state = J, s.context = O, c = K) : (typeof s.componentDidUpdate != "function" || m === l.memoizedProps && G === l.memoizedState || (n.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || m === l.memoizedProps && G === l.memoizedState || (n.flags |= 1024), c = !1);
    }
    return s = c, xn(l, n), c = (n.flags & 128) !== 0, s || c ? (s = n.stateNode, u = c && typeof u.getDerivedStateFromError != "function" ? null : s.render(), n.flags |= 1, l !== null && c ? (n.child = Bc(
      n,
      l.child,
      null,
      r
    ), n.child = Bc(
      n,
      null,
      u,
      r
    )) : al(l, n, u, r), n.memoizedState = s.state, l = n.child) : l = Bn(
      l,
      n,
      r
    ), l;
  }
  function Hu(l, n, u, c) {
    return Mc(), n.flags |= 256, al(l, n, u, c), n.child;
  }
  var Ms = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function Cs(l) {
    return { baseLanes: l, cachePool: Do() };
  }
  function Nn(l, n, u) {
    return l = l !== null ? l.childLanes & ~u : 0, n && (l |= en), l;
  }
  function Gy(l, n, u) {
    var c = n.pendingProps, r = !1, s = (n.flags & 128) !== 0, m;
    if ((m = s) || (m = l !== null && l.memoizedState === null ? !1 : (cl.current & 2) !== 0), m && (r = !0, n.flags &= -129), m = (n.flags & 32) !== 0, n.flags &= -33, l === null) {
      if (St) {
        if (r ? fi(n) : Cu(), (l = Wt) ? (l = Gg(
          l,
          Vl
        ), l = l !== null && l.data !== "&" ? l : null, l !== null && (n.memoizedState = {
          dehydrated: l,
          treeContext: Ou !== null ? { id: rn, overflow: Du } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, u = ay(l), u.return = n, n.child = u, Pl = n, Wt = null)) : l = null, l === null) throw lu(n);
        return Fc(l) ? n.lanes = 32 : n.lanes = 536870912, null;
      }
      var S = c.children;
      return c = c.fallback, r ? (Cu(), r = n.mode, S = Us(
        { mode: "hidden", children: S },
        r
      ), c = Fi(
        c,
        r,
        u,
        null
      ), S.return = n, c.return = n, S.sibling = c, n.child = S, c = n.child, c.memoizedState = Cs(u), c.childLanes = Nn(
        l,
        m,
        u
      ), n.memoizedState = Ms, Xc(null, c)) : (fi(n), Qc(n, S));
    }
    var O = l.memoizedState;
    if (O !== null && (S = O.dehydrated, S !== null)) {
      if (s)
        n.flags & 256 ? (fi(n), n.flags &= -257, n = jo(
          l,
          n,
          u
        )) : n.memoizedState !== null ? (Cu(), n.child = l.child, n.flags |= 128, n = null) : (Cu(), S = c.fallback, r = n.mode, c = Us(
          { mode: "visible", children: c.children },
          r
        ), S = Fi(
          S,
          r,
          u,
          null
        ), S.flags |= 2, c.return = n, S.return = n, c.sibling = S, n.child = c, Bc(
          n,
          l.child,
          null,
          u
        ), c = n.child, c.memoizedState = Cs(u), c.childLanes = Nn(
          l,
          m,
          u
        ), n.memoizedState = Ms, n = Xc(null, c));
      else if (fi(n), Fc(S)) {
        if (m = S.nextSibling && S.nextSibling.dataset, m) var j = m.dgst;
        m = j, c = Error(E(419)), c.stack = "", c.digest = m, Uf({ value: c, source: null, stack: null }), n = jo(
          l,
          n,
          u
        );
      } else if (Ml || ea(l, n, u, !1), m = (u & l.childLanes) !== 0, Ml || m) {
        if (m = Jt, m !== null && (c = Da(m, u), c !== 0 && c !== O.retryLane))
          throw O.retryLane = c, $i(l, c), tn(m, l, c), ph;
        iu(S) || Nh(), n = jo(
          l,
          n,
          u
        );
      } else
        iu(S) ? (n.flags |= 192, n.child = l.child, n = null) : (l = O.treeContext, Wt = ln(
          S.nextSibling
        ), Pl = n, St = !0, ni = null, Vl = !1, l !== null && ns(n, l), n = Qc(
          n,
          c.children
        ), n.flags |= 4096);
      return n;
    }
    return r ? (Cu(), S = c.fallback, r = n.mode, O = l.child, j = O.sibling, c = ki(O, {
      mode: "hidden",
      children: c.children
    }), c.subtreeFlags = O.subtreeFlags & 65011712, j !== null ? S = ki(
      j,
      S
    ) : (S = Fi(
      S,
      r,
      u,
      null
    ), S.flags |= 2), S.return = n, c.return = n, c.sibling = S, n.child = c, Xc(null, c), c = n.child, S = l.child.memoizedState, S === null ? S = Cs(u) : (r = S.cachePool, r !== null ? (O = Dl._currentValue, r = r.parent !== O ? { parent: O, pool: O } : r) : r = Do(), S = {
      baseLanes: S.baseLanes | u,
      cachePool: r
    }), c.memoizedState = S, c.childLanes = Nn(
      l,
      m,
      u
    ), n.memoizedState = Ms, Xc(l.child, c)) : (fi(n), u = l.child, l = u.sibling, u = ki(u, {
      mode: "visible",
      children: c.children
    }), u.return = n, u.sibling = null, l !== null && (m = n.deletions, m === null ? (n.deletions = [l], n.flags |= 16) : m.push(l)), n.child = u, n.memoizedState = null, u);
  }
  function Qc(l, n) {
    return n = Us(
      { mode: "visible", children: n },
      l.mode
    ), n.return = l, l.child = n;
  }
  function Us(l, n) {
    return l = bl(22, l, null, n), l.lanes = 0, l;
  }
  function jo(l, n, u) {
    return Bc(n, l.child, null, u), l = Qc(
      n,
      n.pendingProps.children
    ), l.flags |= 2, n.memoizedState = null, l;
  }
  function Go(l, n, u) {
    l.lanes |= n;
    var c = l.alternate;
    c !== null && (c.lanes |= n), Zd(l.return, n, u);
  }
  function vh(l, n, u, c, r, s) {
    var m = l.memoizedState;
    m === null ? l.memoizedState = {
      isBackwards: n,
      rendering: null,
      renderingStartTime: 0,
      last: c,
      tail: u,
      tailMode: r,
      treeForkCount: s
    } : (m.isBackwards = n, m.rendering = null, m.renderingStartTime = 0, m.last = c, m.tail = u, m.tailMode = r, m.treeForkCount = s);
  }
  function Ly(l, n, u) {
    var c = n.pendingProps, r = c.revealOrder, s = c.tail;
    c = c.children;
    var m = cl.current, S = (m & 2) !== 0;
    if (S ? (m = m & 1 | 2, n.flags |= 128) : m &= 1, $(cl, m), al(l, n, c, u), c = St ? Ol : 0, !S && l !== null && (l.flags & 128) !== 0)
      e: for (l = n.child; l !== null; ) {
        if (l.tag === 13)
          l.memoizedState !== null && Go(l, u, n);
        else if (l.tag === 19)
          Go(l, u, n);
        else if (l.child !== null) {
          l.child.return = l, l = l.child;
          continue;
        }
        if (l === n) break e;
        for (; l.sibling === null; ) {
          if (l.return === null || l.return === n)
            break e;
          l = l.return;
        }
        l.sibling.return = l.return, l = l.sibling;
      }
    switch (r) {
      case "forwards":
        for (u = n.child, r = null; u !== null; )
          l = u.alternate, l !== null && wf(l) === null && (r = u), u = u.sibling;
        u = r, u === null ? (r = n.child, n.child = null) : (r = u.sibling, u.sibling = null), vh(
          n,
          !1,
          r,
          u,
          s,
          c
        );
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (u = null, r = n.child, n.child = null; r !== null; ) {
          if (l = r.alternate, l !== null && wf(l) === null) {
            n.child = r;
            break;
          }
          l = r.sibling, r.sibling = u, u = r, r = l;
        }
        vh(
          n,
          !0,
          u,
          null,
          s,
          c
        );
        break;
      case "together":
        vh(
          n,
          !1,
          null,
          null,
          void 0,
          c
        );
        break;
      default:
        n.memoizedState = null;
    }
    return n.child;
  }
  function Bn(l, n, u) {
    if (l !== null && (n.dependencies = l.dependencies), Yu |= n.lanes, (u & n.childLanes) === 0)
      if (l !== null) {
        if (ea(
          l,
          n,
          u,
          !1
        ), (u & n.childLanes) === 0)
          return null;
      } else return null;
    if (l !== null && n.child !== l.child)
      throw Error(E(153));
    if (n.child !== null) {
      for (l = n.child, u = ki(l, l.pendingProps), n.child = u, u.return = n; l.sibling !== null; )
        l = l.sibling, u = u.sibling = ki(l, l.pendingProps), u.return = n;
      u.sibling = null;
    }
    return n.child;
  }
  function Sh(l, n) {
    return (l.lanes & n) !== 0 ? !0 : (l = l.dependencies, !!(l !== null && _o(l)));
  }
  function bh(l, n, u) {
    switch (n.tag) {
      case 3:
        Qt(n, n.stateNode.containerInfo), Ka(n, Dl, l.memoizedState.cache), Mc();
        break;
      case 27:
      case 5:
        Fl(n);
        break;
      case 4:
        Qt(n, n.stateNode.containerInfo);
        break;
      case 10:
        Ka(
          n,
          n.type,
          n.memoizedProps.value
        );
        break;
      case 31:
        if (n.memoizedState !== null)
          return n.flags |= 128, Yf(n), null;
        break;
      case 13:
        var c = n.memoizedState;
        if (c !== null)
          return c.dehydrated !== null ? (fi(n), n.flags |= 128, null) : (u & n.child.childLanes) !== 0 ? Gy(l, n, u) : (fi(n), l = Bn(
            l,
            n,
            u
          ), l !== null ? l.sibling : null);
        fi(n);
        break;
      case 19:
        var r = (l.flags & 128) !== 0;
        if (c = (u & n.childLanes) !== 0, c || (ea(
          l,
          n,
          u,
          !1
        ), c = (u & n.childLanes) !== 0), r) {
          if (c)
            return Ly(
              l,
              n,
              u
            );
          n.flags |= 128;
        }
        if (r = n.memoizedState, r !== null && (r.rendering = null, r.tail = null, r.lastEffect = null), $(cl, cl.current), c) break;
        return null;
      case 22:
        return n.lanes = 0, ng(
          l,
          n,
          u,
          n.pendingProps
        );
      case 24:
        Ka(n, Dl, l.memoizedState.cache);
    }
    return Bn(l, n, u);
  }
  function Xy(l, n, u) {
    if (l !== null)
      if (l.memoizedProps !== n.pendingProps)
        Ml = !0;
      else {
        if (!Sh(l, u) && (n.flags & 128) === 0)
          return Ml = !1, bh(
            l,
            n,
            u
          );
        Ml = (l.flags & 131072) !== 0;
      }
    else
      Ml = !1, St && (n.flags & 1048576) !== 0 && uy(n, Ol, n.index);
    switch (n.lanes = 0, n.tag) {
      case 16:
        e: {
          var c = n.pendingProps;
          if (l = Hc(n.elementType), n.type = l, typeof l == "function")
            Ao(l) ? (c = Lc(l, c), n.tag = 1, n = jy(
              null,
              n,
              l,
              c,
              u
            )) : (n.tag = 0, n = gh(
              null,
              n,
              l,
              c,
              u
            ));
          else {
            if (l != null) {
              var r = l.$$typeof;
              if (r === wt) {
                n.tag = 11, n = Yy(
                  null,
                  n,
                  l,
                  c,
                  u
                );
                break e;
              } else if (r === Ue) {
                n.tag = 14, n = wy(
                  null,
                  n,
                  l,
                  c,
                  u
                );
                break e;
              }
            }
            throw n = Be(l) || l, Error(E(306, n, ""));
          }
        }
        return n;
      case 0:
        return gh(
          l,
          n,
          n.type,
          n.pendingProps,
          u
        );
      case 1:
        return c = n.type, r = Lc(
          c,
          n.pendingProps
        ), jy(
          l,
          n,
          c,
          r,
          u
        );
      case 3:
        e: {
          if (Qt(
            n,
            n.stateNode.containerInfo
          ), l === null) throw Error(E(387));
          c = n.pendingProps;
          var s = n.memoizedState;
          r = s.element, Kd(l, n), oi(n, c, null, u);
          var m = n.memoizedState;
          if (c = m.cache, Ka(n, Dl, c), c !== s.cache && ci(
            n,
            [Dl],
            u,
            !0
          ), wc(), c = m.element, s.isDehydrated)
            if (s = {
              element: c,
              isDehydrated: !1,
              cache: m.cache
            }, n.updateQueue.baseState = s, n.memoizedState = s, n.flags & 256) {
              n = Hu(
                l,
                n,
                c,
                u
              );
              break e;
            } else if (c !== r) {
              r = Dn(
                Error(E(424)),
                n
              ), Uf(r), n = Hu(
                l,
                n,
                c,
                u
              );
              break e;
            } else
              for (l = n.stateNode.containerInfo, l.nodeType === 9 ? l = l.body : l = l.nodeName === "HTML" ? l.ownerDocument.body : l, Wt = ln(l.firstChild), Pl = n, St = !0, ni = null, Vl = !0, u = dy(
                n,
                null,
                c,
                u
              ), n.child = u; u; )
                u.flags = u.flags & -3 | 4096, u = u.sibling;
          else {
            if (Mc(), c === r) {
              n = Bn(
                l,
                n,
                u
              );
              break e;
            }
            al(l, n, c, u);
          }
          n = n.child;
        }
        return n;
      case 26:
        return xn(l, n), l === null ? (u = dr(
          n.type,
          null,
          n.pendingProps,
          null
        )) ? n.memoizedState = u : St || (u = n.type, l = n.pendingProps, c = kc(
          qe.current
        ).createElement(u), c[Re] = n, c[qt] = l, ba(c, u, l), Mt(c), n.stateNode = c) : n.memoizedState = dr(
          n.type,
          l.memoizedProps,
          n.pendingProps,
          l.memoizedState
        ), null;
      case 27:
        return Fl(n), l === null && St && (c = n.stateNode = rr(
          n.type,
          n.pendingProps,
          qe.current
        ), Pl = n, Vl = !0, r = Wt, qu(n.type) ? (Fs = r, Wt = ln(c.firstChild)) : Wt = r), al(
          l,
          n,
          n.pendingProps.children,
          u
        ), xn(l, n), l === null && (n.flags |= 4194304), n.child;
      case 5:
        return l === null && St && ((r = c = Wt) && (c = f1(
          c,
          n.type,
          n.pendingProps,
          Vl
        ), c !== null ? (n.stateNode = c, Pl = n, Wt = ln(c.firstChild), Vl = !1, r = !0) : r = !1), r || lu(n)), Fl(n), r = n.type, s = n.pendingProps, m = l !== null ? l.memoizedProps : null, c = s.children, or(r, s) ? c = null : m !== null && or(r, m) && (n.flags |= 32), n.memoizedState !== null && (r = gs(
          l,
          n,
          u1,
          null,
          null,
          u
        ), Ps._currentValue = r), xn(l, n), al(l, n, c, u), n.child;
      case 6:
        return l === null && St && ((l = u = Wt) && (u = st(
          u,
          n.pendingProps,
          Vl
        ), u !== null ? (n.stateNode = u, Pl = n, Wt = null, l = !0) : l = !1), l || lu(n)), null;
      case 13:
        return Gy(l, n, u);
      case 4:
        return Qt(
          n,
          n.stateNode.containerInfo
        ), c = n.pendingProps, l === null ? n.child = Bc(
          n,
          null,
          c,
          u
        ) : al(l, n, c, u), n.child;
      case 11:
        return Yy(
          l,
          n,
          n.type,
          n.pendingProps,
          u
        );
      case 7:
        return al(
          l,
          n,
          n.pendingProps,
          u
        ), n.child;
      case 8:
        return al(
          l,
          n,
          n.pendingProps.children,
          u
        ), n.child;
      case 12:
        return al(
          l,
          n,
          n.pendingProps.children,
          u
        ), n.child;
      case 10:
        return c = n.pendingProps, Ka(n, n.type, c.value), al(l, n, c.children, u), n.child;
      case 9:
        return r = n.type._context, c = n.pendingProps.children, $e(n), r = P(r), c = c(r), n.flags |= 1, al(l, n, c, u), n.child;
      case 14:
        return wy(
          l,
          n,
          n.type,
          n.pendingProps,
          u
        );
      case 15:
        return qy(
          l,
          n,
          n.type,
          n.pendingProps,
          u
        );
      case 19:
        return Ly(l, n, u);
      case 31:
        return ug(l, n, u);
      case 22:
        return ng(
          l,
          n,
          u,
          n.pendingProps
        );
      case 24:
        return $e(n), c = P(Dl), l === null ? (r = Cn(), r === null && (r = Jt, s = cs(), r.pooledCache = s, s.refCount++, s !== null && (r.pooledCacheLanes |= u), r = s), n.memoizedState = { parent: c, cache: r }, ms(n), Ka(n, Dl, r)) : ((l.lanes & u) !== 0 && (Kd(l, n), oi(n, null, null, u), wc()), r = l.memoizedState, s = n.memoizedState, r.parent !== c ? (r = { parent: c, cache: c }, n.memoizedState = r, n.lanes === 0 && (n.memoizedState = n.updateQueue.baseState = r), Ka(n, Dl, c)) : (c = s.cache, Ka(n, Dl, c), c !== r.cache && ci(
          n,
          [Dl],
          u,
          !0
        ))), al(
          l,
          n,
          n.pendingProps.children,
          u
        ), n.child;
      case 29:
        throw n.pendingProps;
    }
    throw Error(E(156, n.tag));
  }
  function yi(l) {
    l.flags |= 4;
  }
  function Vy(l, n, u, c, r) {
    if ((n = (l.mode & 32) !== 0) && (n = !1), n) {
      if (l.flags |= 16777216, (r & 335544128) === r)
        if (l.stateNode.complete) l.flags |= 8192;
        else if (yg()) l.flags |= 8192;
        else
          throw xc = Mo, zo;
    } else l.flags &= -16777217;
  }
  function Qy(l, n) {
    if (n.type !== "stylesheet" || (n.state.loading & 4) !== 0)
      l.flags &= -16777217;
    else if (l.flags |= 16777216, !pn(n))
      if (yg()) l.flags |= 8192;
      else
        throw xc = Mo, zo;
  }
  function Ua(l, n) {
    n !== null && (l.flags |= 4), l.flags & 16384 && (n = l.tag !== 22 ? Sl() : 536870912, l.lanes |= n, yl |= n);
  }
  function Zf(l, n) {
    if (!St)
      switch (l.tailMode) {
        case "hidden":
          n = l.tail;
          for (var u = null; n !== null; )
            n.alternate !== null && (u = n), n = n.sibling;
          u === null ? l.tail = null : u.sibling = null;
          break;
        case "collapsed":
          u = l.tail;
          for (var c = null; u !== null; )
            u.alternate !== null && (c = u), u = u.sibling;
          c === null ? n || l.tail === null ? l.tail = null : l.tail.sibling = null : c.sibling = null;
      }
  }
  function Ke(l) {
    var n = l.alternate !== null && l.alternate.child === l.child, u = 0, c = 0;
    if (n)
      for (var r = l.child; r !== null; )
        u |= r.lanes | r.childLanes, c |= r.subtreeFlags & 65011712, c |= r.flags & 65011712, r.return = l, r = r.sibling;
    else
      for (r = l.child; r !== null; )
        u |= r.lanes | r.childLanes, c |= r.subtreeFlags, c |= r.flags, r.return = l, r = r.sibling;
    return l.subtreeFlags |= c, l.childLanes = u, n;
  }
  function ig(l, n, u) {
    var c = n.pendingProps;
    switch (Vd(n), n.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Ke(n), null;
      case 1:
        return Ke(n), null;
      case 3:
        return u = n.stateNode, c = null, l !== null && (c = l.memoizedState.cache), n.memoizedState.cache !== c && (n.flags |= 2048), Mu(Dl), Et(), u.pendingContext && (u.context = u.pendingContext, u.pendingContext = null), (l === null || l.child === null) && (ii(n) ? yi(n) : l === null || l.memoizedState.isDehydrated && (n.flags & 256) === 0 || (n.flags |= 1024, iy())), Ke(n), null;
      case 26:
        var r = n.type, s = n.memoizedState;
        return l === null ? (yi(n), s !== null ? (Ke(n), Qy(n, s)) : (Ke(n), Vy(
          n,
          r,
          null,
          c,
          u
        ))) : s ? s !== l.memoizedState ? (yi(n), Ke(n), Qy(n, s)) : (Ke(n), n.flags &= -16777217) : (l = l.memoizedProps, l !== c && yi(n), Ke(n), Vy(
          n,
          r,
          l,
          c,
          u
        )), null;
      case 27:
        if (fe(n), u = qe.current, r = n.type, l !== null && n.stateNode != null)
          l.memoizedProps !== c && yi(n);
        else {
          if (!c) {
            if (n.stateNode === null)
              throw Error(E(166));
            return Ke(n), null;
          }
          l = le.current, ii(n) ? us(n) : (l = rr(r, c, u), n.stateNode = l, yi(n));
        }
        return Ke(n), null;
      case 5:
        if (fe(n), r = n.type, l !== null && n.stateNode != null)
          l.memoizedProps !== c && yi(n);
        else {
          if (!c) {
            if (n.stateNode === null)
              throw Error(E(166));
            return Ke(n), null;
          }
          if (s = le.current, ii(n))
            us(n);
          else {
            var m = kc(
              qe.current
            );
            switch (s) {
              case 1:
                s = m.createElementNS(
                  "http://www.w3.org/2000/svg",
                  r
                );
                break;
              case 2:
                s = m.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  r
                );
                break;
              default:
                switch (r) {
                  case "svg":
                    s = m.createElementNS(
                      "http://www.w3.org/2000/svg",
                      r
                    );
                    break;
                  case "math":
                    s = m.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      r
                    );
                    break;
                  case "script":
                    s = m.createElement("div"), s.innerHTML = "<script><\/script>", s = s.removeChild(
                      s.firstChild
                    );
                    break;
                  case "select":
                    s = typeof c.is == "string" ? m.createElement("select", {
                      is: c.is
                    }) : m.createElement("select"), c.multiple ? s.multiple = !0 : c.size && (s.size = c.size);
                    break;
                  default:
                    s = typeof c.is == "string" ? m.createElement(r, { is: c.is }) : m.createElement(r);
                }
            }
            s[Re] = n, s[qt] = c;
            e: for (m = n.child; m !== null; ) {
              if (m.tag === 5 || m.tag === 6)
                s.appendChild(m.stateNode);
              else if (m.tag !== 4 && m.tag !== 27 && m.child !== null) {
                m.child.return = m, m = m.child;
                continue;
              }
              if (m === n) break e;
              for (; m.sibling === null; ) {
                if (m.return === null || m.return === n)
                  break e;
                m = m.return;
              }
              m.sibling.return = m.return, m = m.sibling;
            }
            n.stateNode = s;
            e: switch (ba(s, r, c), r) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                c = !!c.autoFocus;
                break e;
              case "img":
                c = !0;
                break e;
              default:
                c = !1;
            }
            c && yi(n);
          }
        }
        return Ke(n), Vy(
          n,
          n.type,
          l === null ? null : l.memoizedProps,
          n.pendingProps,
          u
        ), null;
      case 6:
        if (l && n.stateNode != null)
          l.memoizedProps !== c && yi(n);
        else {
          if (typeof c != "string" && n.stateNode === null)
            throw Error(E(166));
          if (l = qe.current, ii(n)) {
            if (l = n.stateNode, u = n.memoizedProps, c = null, r = Pl, r !== null)
              switch (r.tag) {
                case 27:
                case 5:
                  c = r.memoizedProps;
              }
            l[Re] = n, l = !!(l.nodeValue === u || c !== null && c.suppressHydrationWarning === !0 || m0(l.nodeValue, u)), l || lu(n, !0);
          } else
            l = kc(l).createTextNode(
              c
            ), l[Re] = n, n.stateNode = l;
        }
        return Ke(n), null;
      case 31:
        if (u = n.memoizedState, l === null || l.memoizedState !== null) {
          if (c = ii(n), u !== null) {
            if (l === null) {
              if (!c) throw Error(E(318));
              if (l = n.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(E(557));
              l[Re] = n;
            } else
              Mc(), (n.flags & 128) === 0 && (n.memoizedState = null), n.flags |= 4;
            Ke(n), l = !1;
          } else
            u = iy(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = u), l = !0;
          if (!l)
            return n.flags & 256 ? (ka(n), n) : (ka(n), null);
          if ((n.flags & 128) !== 0)
            throw Error(E(558));
        }
        return Ke(n), null;
      case 13:
        if (c = n.memoizedState, l === null || l.memoizedState !== null && l.memoizedState.dehydrated !== null) {
          if (r = ii(n), c !== null && c.dehydrated !== null) {
            if (l === null) {
              if (!r) throw Error(E(318));
              if (r = n.memoizedState, r = r !== null ? r.dehydrated : null, !r) throw Error(E(317));
              r[Re] = n;
            } else
              Mc(), (n.flags & 128) === 0 && (n.memoizedState = null), n.flags |= 4;
            Ke(n), r = !1;
          } else
            r = iy(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = r), r = !0;
          if (!r)
            return n.flags & 256 ? (ka(n), n) : (ka(n), null);
        }
        return ka(n), (n.flags & 128) !== 0 ? (n.lanes = u, n) : (u = c !== null, l = l !== null && l.memoizedState !== null, u && (c = n.child, r = null, c.alternate !== null && c.alternate.memoizedState !== null && c.alternate.memoizedState.cachePool !== null && (r = c.alternate.memoizedState.cachePool.pool), s = null, c.memoizedState !== null && c.memoizedState.cachePool !== null && (s = c.memoizedState.cachePool.pool), s !== r && (c.flags |= 2048)), u !== l && u && (n.child.flags |= 8192), Ua(n, n.updateQueue), Ke(n), null);
      case 4:
        return Et(), l === null && cr(n.stateNode.containerInfo), Ke(n), null;
      case 10:
        return Mu(n.type), Ke(n), null;
      case 19:
        if (B(cl), c = n.memoizedState, c === null) return Ke(n), null;
        if (r = (n.flags & 128) !== 0, s = c.rendering, s === null)
          if (r) Zf(c, !1);
          else {
            if (Pt !== 0 || l !== null && (l.flags & 128) !== 0)
              for (l = n.child; l !== null; ) {
                if (s = wf(l), s !== null) {
                  for (n.flags |= 128, Zf(c, !1), l = s.updateQueue, n.updateQueue = l, Ua(n, l), n.subtreeFlags = 0, l = u, u = n.child; u !== null; )
                    ly(u, l), u = u.sibling;
                  return $(
                    cl,
                    cl.current & 1 | 2
                  ), St && tu(n, c.treeForkCount), n.child;
                }
                l = l.sibling;
              }
            c.tail !== null && ul() > Bt && (n.flags |= 128, r = !0, Zf(c, !1), n.lanes = 4194304);
          }
        else {
          if (!r)
            if (l = wf(s), l !== null) {
              if (n.flags |= 128, r = !0, l = l.updateQueue, n.updateQueue = l, Ua(n, l), Zf(c, !0), c.tail === null && c.tailMode === "hidden" && !s.alternate && !St)
                return Ke(n), null;
            } else
              2 * ul() - c.renderingStartTime > Bt && u !== 536870912 && (n.flags |= 128, r = !0, Zf(c, !1), n.lanes = 4194304);
          c.isBackwards ? (s.sibling = n.child, n.child = s) : (l = c.last, l !== null ? l.sibling = s : n.child = s, c.last = s);
        }
        return c.tail !== null ? (l = c.tail, c.rendering = l, c.tail = l.sibling, c.renderingStartTime = ul(), l.sibling = null, u = cl.current, $(
          cl,
          r ? u & 1 | 2 : u & 1
        ), St && tu(n, c.treeForkCount), l) : (Ke(n), null);
      case 22:
      case 23:
        return ka(n), Bf(), c = n.memoizedState !== null, l !== null ? l.memoizedState !== null !== c && (n.flags |= 8192) : c && (n.flags |= 8192), c ? (u & 536870912) !== 0 && (n.flags & 128) === 0 && (Ke(n), n.subtreeFlags & 6 && (n.flags |= 8192)) : Ke(n), u = n.updateQueue, u !== null && Ua(n, u.retryQueue), u = null, l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (u = l.memoizedState.cachePool.pool), c = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (c = n.memoizedState.cachePool.pool), c !== u && (n.flags |= 2048), l !== null && B(Mn), null;
      case 24:
        return u = null, l !== null && (u = l.memoizedState.cache), n.memoizedState.cache !== u && (n.flags |= 2048), Mu(Dl), Ke(n), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(E(156, n.tag));
  }
  function cg(l, n) {
    switch (Vd(n), n.tag) {
      case 1:
        return l = n.flags, l & 65536 ? (n.flags = l & -65537 | 128, n) : null;
      case 3:
        return Mu(Dl), Et(), l = n.flags, (l & 65536) !== 0 && (l & 128) === 0 ? (n.flags = l & -65537 | 128, n) : null;
      case 26:
      case 27:
      case 5:
        return fe(n), null;
      case 31:
        if (n.memoizedState !== null) {
          if (ka(n), n.alternate === null)
            throw Error(E(340));
          Mc();
        }
        return l = n.flags, l & 65536 ? (n.flags = l & -65537 | 128, n) : null;
      case 13:
        if (ka(n), l = n.memoizedState, l !== null && l.dehydrated !== null) {
          if (n.alternate === null)
            throw Error(E(340));
          Mc();
        }
        return l = n.flags, l & 65536 ? (n.flags = l & -65537 | 128, n) : null;
      case 19:
        return B(cl), null;
      case 4:
        return Et(), null;
      case 10:
        return Mu(n.type), null;
      case 22:
      case 23:
        return ka(n), Bf(), l !== null && B(Mn), l = n.flags, l & 65536 ? (n.flags = l & -65537 | 128, n) : null;
      case 24:
        return Mu(Dl), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function og(l, n) {
    switch (Vd(n), n.tag) {
      case 3:
        Mu(Dl), Et();
        break;
      case 26:
      case 27:
      case 5:
        fe(n);
        break;
      case 4:
        Et();
        break;
      case 31:
        n.memoizedState !== null && ka(n);
        break;
      case 13:
        ka(n);
        break;
      case 19:
        B(cl);
        break;
      case 10:
        Mu(n.type);
        break;
      case 22:
      case 23:
        ka(n), Bf(), l !== null && B(Mn);
        break;
      case 24:
        Mu(Dl);
    }
  }
  function nu(l, n) {
    try {
      var u = n.updateQueue, c = u !== null ? u.lastEffect : null;
      if (c !== null) {
        var r = c.next;
        u = r;
        do {
          if ((u.tag & l) === l) {
            c = void 0;
            var s = u.create, m = u.inst;
            c = s(), m.destroy = c;
          }
          u = u.next;
        } while (u !== r);
      }
    } catch (S) {
      Xt(n, n.return, S);
    }
  }
  function Yn(l, n, u) {
    try {
      var c = n.updateQueue, r = c !== null ? c.lastEffect : null;
      if (r !== null) {
        var s = r.next;
        c = s;
        do {
          if ((c.tag & l) === l) {
            var m = c.inst, S = m.destroy;
            if (S !== void 0) {
              m.destroy = void 0, r = n;
              var O = u, j = S;
              try {
                j();
              } catch (K) {
                Xt(
                  r,
                  O,
                  K
                );
              }
            }
          }
          c = c.next;
        } while (c !== s);
      }
    } catch (K) {
      Xt(n, n.return, K);
    }
  }
  function Eh(l) {
    var n = l.updateQueue;
    if (n !== null) {
      var u = l.stateNode;
      try {
        qc(n, u);
      } catch (c) {
        Xt(l, l.return, c);
      }
    }
  }
  function Zc(l, n, u) {
    u.props = Lc(
      l.type,
      l.memoizedProps
    ), u.state = l.memoizedState;
    try {
      u.componentWillUnmount();
    } catch (c) {
      Xt(l, n, c);
    }
  }
  function pi(l, n) {
    try {
      var u = l.ref;
      if (u !== null) {
        switch (l.tag) {
          case 26:
          case 27:
          case 5:
            var c = l.stateNode;
            break;
          case 30:
            c = l.stateNode;
            break;
          default:
            c = l.stateNode;
        }
        typeof u == "function" ? l.refCleanup = u(c) : u.current = c;
      }
    } catch (r) {
      Xt(l, n, r);
    }
  }
  function xu(l, n) {
    var u = l.ref, c = l.refCleanup;
    if (u !== null)
      if (typeof c == "function")
        try {
          c();
        } catch (r) {
          Xt(l, n, r);
        } finally {
          l.refCleanup = null, l = l.alternate, l != null && (l.refCleanup = null);
        }
      else if (typeof u == "function")
        try {
          u(null);
        } catch (r) {
          Xt(l, n, r);
        }
      else u.current = null;
  }
  function Zy(l) {
    var n = l.type, u = l.memoizedProps, c = l.stateNode;
    try {
      e: switch (n) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          u.autoFocus && c.focus();
          break e;
        case "img":
          u.src ? c.src = u.src : u.srcSet && (c.srcset = u.srcSet);
      }
    } catch (r) {
      Xt(l, l.return, r);
    }
  }
  function Th(l, n, u) {
    try {
      var c = l.stateNode;
      p0(c, l.type, u, n), c[qt] = n;
    } catch (r) {
      Xt(l, l.return, r);
    }
  }
  function Jy(l) {
    return l.tag === 5 || l.tag === 3 || l.tag === 26 || l.tag === 27 && qu(l.type) || l.tag === 4;
  }
  function Jf(l) {
    e: for (; ; ) {
      for (; l.sibling === null; ) {
        if (l.return === null || Jy(l.return)) return null;
        l = l.return;
      }
      for (l.sibling.return = l.return, l = l.sibling; l.tag !== 5 && l.tag !== 6 && l.tag !== 18; ) {
        if (l.tag === 27 && qu(l.type) || l.flags & 2 || l.child === null || l.tag === 4) continue e;
        l.child.return = l, l = l.child;
      }
      if (!(l.flags & 2)) return l.stateNode;
    }
  }
  function Kf(l, n, u) {
    var c = l.tag;
    if (c === 5 || c === 6)
      l = l.stateNode, n ? (u.nodeType === 9 ? u.body : u.nodeName === "HTML" ? u.ownerDocument.body : u).insertBefore(l, n) : (n = u.nodeType === 9 ? u.body : u.nodeName === "HTML" ? u.ownerDocument.body : u, n.appendChild(l), u = u._reactRootContainer, u != null || n.onclick !== null || (n.onclick = on));
    else if (c !== 4 && (c === 27 && qu(l.type) && (u = l.stateNode, n = null), l = l.child, l !== null))
      for (Kf(l, n, u), l = l.sibling; l !== null; )
        Kf(l, n, u), l = l.sibling;
  }
  function $f(l, n, u) {
    var c = l.tag;
    if (c === 5 || c === 6)
      l = l.stateNode, n ? u.insertBefore(l, n) : u.appendChild(l);
    else if (c !== 4 && (c === 27 && qu(l.type) && (u = l.stateNode), l = l.child, l !== null))
      for ($f(l, n, u), l = l.sibling; l !== null; )
        $f(l, n, u), l = l.sibling;
  }
  function Ky(l) {
    var n = l.stateNode, u = l.memoizedProps;
    try {
      for (var c = l.type, r = n.attributes; r.length; )
        n.removeAttributeNode(r[0]);
      ba(n, c, u), n[Re] = l, n[qt] = u;
    } catch (s) {
      Xt(l, l.return, s);
    }
  }
  var uc = !1, wl = !1, Ah = !1, $y = typeof WeakSet == "function" ? WeakSet : Set, aa = null;
  function kf(l, n) {
    if (l = l.containerInfo, Vh = Jl, l = Oc(l), Ir(l)) {
      if ("selectionStart" in l)
        var u = {
          start: l.selectionStart,
          end: l.selectionEnd
        };
      else
        e: {
          u = (u = l.ownerDocument) && u.defaultView || window;
          var c = u.getSelection && u.getSelection();
          if (c && c.rangeCount !== 0) {
            u = c.anchorNode;
            var r = c.anchorOffset, s = c.focusNode;
            c = c.focusOffset;
            try {
              u.nodeType, s.nodeType;
            } catch {
              u = null;
              break e;
            }
            var m = 0, S = -1, O = -1, j = 0, K = 0, I = l, G = null;
            t: for (; ; ) {
              for (var J; I !== u || r !== 0 && I.nodeType !== 3 || (S = m + r), I !== s || c !== 0 && I.nodeType !== 3 || (O = m + c), I.nodeType === 3 && (m += I.nodeValue.length), (J = I.firstChild) !== null; )
                G = I, I = J;
              for (; ; ) {
                if (I === l) break t;
                if (G === u && ++j === r && (S = m), G === s && ++K === c && (O = m), (J = I.nextSibling) !== null) break;
                I = G, G = I.parentNode;
              }
              I = J;
            }
            u = S === -1 || O === -1 ? null : { start: S, end: O };
          } else u = null;
        }
      u = u || { start: 0, end: 0 };
    } else u = null;
    for (Qh = { focusedElem: l, selectionRange: u }, Jl = !1, aa = n; aa !== null; )
      if (n = aa, l = n.child, (n.subtreeFlags & 1028) !== 0 && l !== null)
        l.return = n, aa = l;
      else
        for (; aa !== null; ) {
          switch (n = aa, s = n.alternate, l = n.flags, n.tag) {
            case 0:
              if ((l & 4) !== 0 && (l = n.updateQueue, l = l !== null ? l.events : null, l !== null))
                for (u = 0; u < l.length; u++)
                  r = l[u], r.ref.impl = r.nextImpl;
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((l & 1024) !== 0 && s !== null) {
                l = void 0, u = n, r = s.memoizedProps, s = s.memoizedState, c = u.stateNode;
                try {
                  var be = Lc(
                    u.type,
                    r
                  );
                  l = c.getSnapshotBeforeUpdate(
                    be,
                    s
                  ), c.__reactInternalSnapshotBeforeUpdate = l;
                } catch (we) {
                  Xt(
                    u,
                    u.return,
                    we
                  );
                }
              }
              break;
            case 3:
              if ((l & 1024) !== 0) {
                if (l = n.stateNode.containerInfo, u = l.nodeType, u === 9)
                  ks(l);
                else if (u === 1)
                  switch (l.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      ks(l);
                      break;
                    default:
                      l.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((l & 1024) !== 0) throw Error(E(163));
          }
          if (l = n.sibling, l !== null) {
            l.return = n.return, aa = l;
            break;
          }
          aa = n.return;
        }
  }
  function Hs(l, n, u) {
    var c = u.flags;
    switch (u.tag) {
      case 0:
      case 11:
      case 15:
        ic(l, u), c & 4 && nu(5, u);
        break;
      case 1:
        if (ic(l, u), c & 4)
          if (l = u.stateNode, n === null)
            try {
              l.componentDidMount();
            } catch (m) {
              Xt(u, u.return, m);
            }
          else {
            var r = Lc(
              u.type,
              n.memoizedProps
            );
            n = n.memoizedState;
            try {
              l.componentDidUpdate(
                r,
                n,
                l.__reactInternalSnapshotBeforeUpdate
              );
            } catch (m) {
              Xt(
                u,
                u.return,
                m
              );
            }
          }
        c & 64 && Eh(u), c & 512 && pi(u, u.return);
        break;
      case 3:
        if (ic(l, u), c & 64 && (l = u.updateQueue, l !== null)) {
          if (n = null, u.child !== null)
            switch (u.child.tag) {
              case 27:
              case 5:
                n = u.child.stateNode;
                break;
              case 1:
                n = u.child.stateNode;
            }
          try {
            qc(l, n);
          } catch (m) {
            Xt(u, u.return, m);
          }
        }
        break;
      case 27:
        n === null && c & 4 && Ky(u);
      case 26:
      case 5:
        ic(l, u), n === null && c & 4 && Zy(u), c & 512 && pi(u, u.return);
        break;
      case 12:
        ic(l, u);
        break;
      case 31:
        ic(l, u), c & 4 && fg(l, u);
        break;
      case 13:
        ic(l, u), c & 4 && Wy(l, u), c & 64 && (l = u.memoizedState, l !== null && (l = l.dehydrated, l !== null && (u = wn.bind(
          null,
          u
        ), fr(l, u))));
        break;
      case 22:
        if (c = u.memoizedState !== null || uc, !c) {
          n = n !== null && n.memoizedState !== null || wl, r = uc;
          var s = wl;
          uc = c, (wl = n) && !s ? Nu(
            l,
            u,
            (u.subtreeFlags & 8772) !== 0
          ) : ic(l, u), uc = r, wl = s;
        }
        break;
      case 30:
        break;
      default:
        ic(l, u);
    }
  }
  function ky(l) {
    var n = l.alternate;
    n !== null && (l.alternate = null, ky(n)), l.child = null, l.deletions = null, l.sibling = null, l.tag === 5 && (n = l.stateNode, n !== null && hu(n)), l.stateNode = null, l.return = null, l.dependencies = null, l.memoizedProps = null, l.memoizedState = null, l.pendingProps = null, l.stateNode = null, l.updateQueue = null;
  }
  var It = null, Ia = !1;
  function gi(l, n, u) {
    for (u = u.child; u !== null; )
      Fy(l, n, u), u = u.sibling;
  }
  function Fy(l, n, u) {
    if (vl && typeof vl.onCommitFiberUnmount == "function")
      try {
        vl.onCommitFiberUnmount(Oa, u);
      } catch {
      }
    switch (u.tag) {
      case 26:
        wl || xu(u, n), gi(
          l,
          n,
          u
        ), u.memoizedState ? u.memoizedState.count-- : u.stateNode && (u = u.stateNode, u.parentNode.removeChild(u));
        break;
      case 27:
        wl || xu(u, n);
        var c = It, r = Ia;
        qu(u.type) && (It = u.stateNode, Ia = !1), gi(
          l,
          n,
          u
        ), $o(u.stateNode), It = c, Ia = r;
        break;
      case 5:
        wl || xu(u, n);
      case 6:
        if (c = It, r = Ia, It = null, gi(
          l,
          n,
          u
        ), It = c, Ia = r, It !== null)
          if (Ia)
            try {
              (It.nodeType === 9 ? It.body : It.nodeName === "HTML" ? It.ownerDocument.body : It).removeChild(u.stateNode);
            } catch (s) {
              Xt(
                u,
                n,
                s
              );
            }
          else
            try {
              It.removeChild(u.stateNode);
            } catch (s) {
              Xt(
                u,
                n,
                s
              );
            }
        break;
      case 18:
        It !== null && (Ia ? (l = It, b0(
          l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l,
          u.stateNode
        ), br(l)) : b0(It, u.stateNode));
        break;
      case 4:
        c = It, r = Ia, It = u.stateNode.containerInfo, Ia = !0, gi(
          l,
          n,
          u
        ), It = c, Ia = r;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Yn(2, u, n), wl || Yn(4, u, n), gi(
          l,
          n,
          u
        );
        break;
      case 1:
        wl || (xu(u, n), c = u.stateNode, typeof c.componentWillUnmount == "function" && Zc(
          u,
          n,
          c
        )), gi(
          l,
          n,
          u
        );
        break;
      case 21:
        gi(
          l,
          n,
          u
        );
        break;
      case 22:
        wl = (c = wl) || u.memoizedState !== null, gi(
          l,
          n,
          u
        ), wl = c;
        break;
      default:
        gi(
          l,
          n,
          u
        );
    }
  }
  function fg(l, n) {
    if (n.memoizedState === null && (l = n.alternate, l !== null && (l = l.memoizedState, l !== null))) {
      l = l.dehydrated;
      try {
        br(l);
      } catch (u) {
        Xt(n, n.return, u);
      }
    }
  }
  function Wy(l, n) {
    if (n.memoizedState === null && (l = n.alternate, l !== null && (l = l.memoizedState, l !== null && (l = l.dehydrated, l !== null))))
      try {
        br(l);
      } catch (u) {
        Xt(n, n.return, u);
      }
  }
  function xs(l) {
    switch (l.tag) {
      case 31:
      case 13:
      case 19:
        var n = l.stateNode;
        return n === null && (n = l.stateNode = new $y()), n;
      case 22:
        return l = l.stateNode, n = l._retryCache, n === null && (n = l._retryCache = new $y()), n;
      default:
        throw Error(E(435, l.tag));
    }
  }
  function Ns(l, n) {
    var u = xs(l);
    n.forEach(function(c) {
      if (!u.has(c)) {
        u.add(c);
        var r = Cg.bind(null, l, c);
        c.then(r, r);
      }
    });
  }
  function Pa(l, n) {
    var u = n.deletions;
    if (u !== null)
      for (var c = 0; c < u.length; c++) {
        var r = u[c], s = l, m = n, S = m;
        e: for (; S !== null; ) {
          switch (S.tag) {
            case 27:
              if (qu(S.type)) {
                It = S.stateNode, Ia = !1;
                break e;
              }
              break;
            case 5:
              It = S.stateNode, Ia = !1;
              break e;
            case 3:
            case 4:
              It = S.stateNode.containerInfo, Ia = !0;
              break e;
          }
          S = S.return;
        }
        if (It === null) throw Error(E(160));
        Fy(s, m, r), It = null, Ia = !1, s = r.alternate, s !== null && (s.return = null), r.return = null;
      }
    if (n.subtreeFlags & 13886)
      for (n = n.child; n !== null; )
        Rh(n, l), n = n.sibling;
  }
  var it = null;
  function Rh(l, n) {
    var u = l.alternate, c = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Pa(n, l), sn(l), c & 4 && (Yn(3, l, l.return), nu(3, l), Yn(5, l, l.return));
        break;
      case 1:
        Pa(n, l), sn(l), c & 512 && (wl || u === null || xu(u, u.return)), c & 64 && uc && (l = l.updateQueue, l !== null && (c = l.callbacks, c !== null && (u = l.shared.hiddenCallbacks, l.shared.hiddenCallbacks = u === null ? c : u.concat(c))));
        break;
      case 26:
        var r = it;
        if (Pa(n, l), sn(l), c & 512 && (wl || u === null || xu(u, u.return)), c & 4) {
          var s = u !== null ? u.memoizedState : null;
          if (c = l.memoizedState, u === null)
            if (c === null)
              if (l.stateNode === null) {
                e: {
                  c = l.type, u = l.memoizedProps, r = r.ownerDocument || r;
                  t: switch (c) {
                    case "title":
                      s = r.getElementsByTagName("title")[0], (!s || s[ya] || s[Re] || s.namespaceURI === "http://www.w3.org/2000/svg" || s.hasAttribute("itemprop")) && (s = r.createElement(c), r.head.insertBefore(
                        s,
                        r.querySelector("head > title")
                      )), ba(s, c, u), s[Re] = l, Mt(s), c = s;
                      break e;
                    case "link":
                      var m = R0(
                        "link",
                        "href",
                        r
                      ).get(c + (u.href || ""));
                      if (m) {
                        for (var S = 0; S < m.length; S++)
                          if (s = m[S], s.getAttribute("href") === (u.href == null || u.href === "" ? null : u.href) && s.getAttribute("rel") === (u.rel == null ? null : u.rel) && s.getAttribute("title") === (u.title == null ? null : u.title) && s.getAttribute("crossorigin") === (u.crossOrigin == null ? null : u.crossOrigin)) {
                            m.splice(S, 1);
                            break t;
                          }
                      }
                      s = r.createElement(c), ba(s, c, u), r.head.appendChild(s);
                      break;
                    case "meta":
                      if (m = R0(
                        "meta",
                        "content",
                        r
                      ).get(c + (u.content || ""))) {
                        for (S = 0; S < m.length; S++)
                          if (s = m[S], s.getAttribute("content") === (u.content == null ? null : "" + u.content) && s.getAttribute("name") === (u.name == null ? null : u.name) && s.getAttribute("property") === (u.property == null ? null : u.property) && s.getAttribute("http-equiv") === (u.httpEquiv == null ? null : u.httpEquiv) && s.getAttribute("charset") === (u.charSet == null ? null : u.charSet)) {
                            m.splice(S, 1);
                            break t;
                          }
                      }
                      s = r.createElement(c), ba(s, c, u), r.head.appendChild(s);
                      break;
                    default:
                      throw Error(E(468, c));
                  }
                  s[Re] = l, Mt(s), c = s;
                }
                l.stateNode = c;
              } else
                kh(
                  r,
                  l.type,
                  l.stateNode
                );
            else
              l.stateNode = A0(
                r,
                c,
                l.memoizedProps
              );
          else
            s !== c ? (s === null ? u.stateNode !== null && (u = u.stateNode, u.parentNode.removeChild(u)) : s.count--, c === null ? kh(
              r,
              l.type,
              l.stateNode
            ) : A0(
              r,
              c,
              l.memoizedProps
            )) : c === null && l.stateNode !== null && Th(
              l,
              l.memoizedProps,
              u.memoizedProps
            );
        }
        break;
      case 27:
        Pa(n, l), sn(l), c & 512 && (wl || u === null || xu(u, u.return)), u !== null && c & 4 && Th(
          l,
          l.memoizedProps,
          u.memoizedProps
        );
        break;
      case 5:
        if (Pa(n, l), sn(l), c & 512 && (wl || u === null || xu(u, u.return)), l.flags & 32) {
          r = l.stateNode;
          try {
            kn(r, "");
          } catch (be) {
            Xt(l, l.return, be);
          }
        }
        c & 4 && l.stateNode != null && (r = l.memoizedProps, Th(
          l,
          r,
          u !== null ? u.memoizedProps : r
        )), c & 1024 && (Ah = !0);
        break;
      case 6:
        if (Pa(n, l), sn(l), c & 4) {
          if (l.stateNode === null)
            throw Error(E(162));
          c = l.memoizedProps, u = l.stateNode;
          try {
            u.nodeValue = c;
          } catch (be) {
            Xt(l, l.return, be);
          }
        }
        break;
      case 3:
        if (yr = null, r = it, it = Ha(n.containerInfo), Pa(n, l), it = r, sn(l), c & 4 && u !== null && u.memoizedState.isDehydrated)
          try {
            br(n.containerInfo);
          } catch (be) {
            Xt(l, l.return, be);
          }
        Ah && (Ah = !1, Iy(l));
        break;
      case 4:
        c = it, it = Ha(
          l.stateNode.containerInfo
        ), Pa(n, l), sn(l), it = c;
        break;
      case 12:
        Pa(n, l), sn(l);
        break;
      case 31:
        Pa(n, l), sn(l), c & 4 && (c = l.updateQueue, c !== null && (l.updateQueue = null, Ns(l, c)));
        break;
      case 13:
        Pa(n, l), sn(l), l.child.flags & 8192 && l.memoizedState !== null != (u !== null && u.memoizedState !== null) && (wu = ul()), c & 4 && (c = l.updateQueue, c !== null && (l.updateQueue = null, Ns(l, c)));
        break;
      case 22:
        r = l.memoizedState !== null;
        var O = u !== null && u.memoizedState !== null, j = uc, K = wl;
        if (uc = j || r, wl = K || O, Pa(n, l), wl = K, uc = j, sn(l), c & 8192)
          e: for (n = l.stateNode, n._visibility = r ? n._visibility & -2 : n._visibility | 1, r && (u === null || O || uc || wl || Lo(l)), u = null, n = l; ; ) {
            if (n.tag === 5 || n.tag === 26) {
              if (u === null) {
                O = u = n;
                try {
                  if (s = O.stateNode, r)
                    m = s.style, typeof m.setProperty == "function" ? m.setProperty("display", "none", "important") : m.display = "none";
                  else {
                    S = O.stateNode;
                    var I = O.memoizedProps.style, G = I != null && I.hasOwnProperty("display") ? I.display : null;
                    S.style.display = G == null || typeof G == "boolean" ? "" : ("" + G).trim();
                  }
                } catch (be) {
                  Xt(O, O.return, be);
                }
              }
            } else if (n.tag === 6) {
              if (u === null) {
                O = n;
                try {
                  O.stateNode.nodeValue = r ? "" : O.memoizedProps;
                } catch (be) {
                  Xt(O, O.return, be);
                }
              }
            } else if (n.tag === 18) {
              if (u === null) {
                O = n;
                try {
                  var J = O.stateNode;
                  r ? Cl(J, !0) : Cl(O.stateNode, !1);
                } catch (be) {
                  Xt(O, O.return, be);
                }
              }
            } else if ((n.tag !== 22 && n.tag !== 23 || n.memoizedState === null || n === l) && n.child !== null) {
              n.child.return = n, n = n.child;
              continue;
            }
            if (n === l) break e;
            for (; n.sibling === null; ) {
              if (n.return === null || n.return === l) break e;
              u === n && (u = null), n = n.return;
            }
            u === n && (u = null), n.sibling.return = n.return, n = n.sibling;
          }
        c & 4 && (c = l.updateQueue, c !== null && (u = c.retryQueue, u !== null && (c.retryQueue = null, Ns(l, u))));
        break;
      case 19:
        Pa(n, l), sn(l), c & 4 && (c = l.updateQueue, c !== null && (l.updateQueue = null, Ns(l, c)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        Pa(n, l), sn(l);
    }
  }
  function sn(l) {
    var n = l.flags;
    if (n & 2) {
      try {
        for (var u, c = l.return; c !== null; ) {
          if (Jy(c)) {
            u = c;
            break;
          }
          c = c.return;
        }
        if (u == null) throw Error(E(160));
        switch (u.tag) {
          case 27:
            var r = u.stateNode, s = Jf(l);
            $f(l, s, r);
            break;
          case 5:
            var m = u.stateNode;
            u.flags & 32 && (kn(m, ""), u.flags &= -33);
            var S = Jf(l);
            $f(l, S, m);
            break;
          case 3:
          case 4:
            var O = u.stateNode.containerInfo, j = Jf(l);
            Kf(
              l,
              j,
              O
            );
            break;
          default:
            throw Error(E(161));
        }
      } catch (K) {
        Xt(l, l.return, K);
      }
      l.flags &= -3;
    }
    n & 4096 && (l.flags &= -4097);
  }
  function Iy(l) {
    if (l.subtreeFlags & 1024)
      for (l = l.child; l !== null; ) {
        var n = l;
        Iy(n), n.tag === 5 && n.flags & 1024 && n.stateNode.reset(), l = l.sibling;
      }
  }
  function ic(l, n) {
    if (n.subtreeFlags & 8772)
      for (n = n.child; n !== null; )
        Hs(l, n.alternate, n), n = n.sibling;
  }
  function Lo(l) {
    for (l = l.child; l !== null; ) {
      var n = l;
      switch (n.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Yn(4, n, n.return), Lo(n);
          break;
        case 1:
          xu(n, n.return);
          var u = n.stateNode;
          typeof u.componentWillUnmount == "function" && Zc(
            n,
            n.return,
            u
          ), Lo(n);
          break;
        case 27:
          $o(n.stateNode);
        case 26:
        case 5:
          xu(n, n.return), Lo(n);
          break;
        case 22:
          n.memoizedState === null && Lo(n);
          break;
        case 30:
          Lo(n);
          break;
        default:
          Lo(n);
      }
      l = l.sibling;
    }
  }
  function Nu(l, n, u) {
    for (u = u && (n.subtreeFlags & 8772) !== 0, n = n.child; n !== null; ) {
      var c = n.alternate, r = l, s = n, m = s.flags;
      switch (s.tag) {
        case 0:
        case 11:
        case 15:
          Nu(
            r,
            s,
            u
          ), nu(4, s);
          break;
        case 1:
          if (Nu(
            r,
            s,
            u
          ), c = s, r = c.stateNode, typeof r.componentDidMount == "function")
            try {
              r.componentDidMount();
            } catch (j) {
              Xt(c, c.return, j);
            }
          if (c = s, r = c.updateQueue, r !== null) {
            var S = c.stateNode;
            try {
              var O = r.shared.hiddenCallbacks;
              if (O !== null)
                for (r.shared.hiddenCallbacks = null, r = 0; r < O.length; r++)
                  kd(O[r], S);
            } catch (j) {
              Xt(c, c.return, j);
            }
          }
          u && m & 64 && Eh(s), pi(s, s.return);
          break;
        case 27:
          Ky(s);
        case 26:
        case 5:
          Nu(
            r,
            s,
            u
          ), u && c === null && m & 4 && Zy(s), pi(s, s.return);
          break;
        case 12:
          Nu(
            r,
            s,
            u
          );
          break;
        case 31:
          Nu(
            r,
            s,
            u
          ), u && m & 4 && fg(r, s);
          break;
        case 13:
          Nu(
            r,
            s,
            u
          ), u && m & 4 && Wy(r, s);
          break;
        case 22:
          s.memoizedState === null && Nu(
            r,
            s,
            u
          ), pi(s, s.return);
          break;
        case 30:
          break;
        default:
          Nu(
            r,
            s,
            u
          );
      }
      n = n.sibling;
    }
  }
  function _h(l, n) {
    var u = null;
    l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (u = l.memoizedState.cachePool.pool), l = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (l = n.memoizedState.cachePool.pool), l !== u && (l != null && l.refCount++, u != null && os(u));
  }
  function Oh(l, n) {
    l = null, n.alternate !== null && (l = n.alternate.memoizedState.cache), n = n.memoizedState.cache, n !== l && (n.refCount++, l != null && os(l));
  }
  function uu(l, n, u, c) {
    if (n.subtreeFlags & 10256)
      for (n = n.child; n !== null; )
        Ff(
          l,
          n,
          u,
          c
        ), n = n.sibling;
  }
  function Ff(l, n, u, c) {
    var r = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        uu(
          l,
          n,
          u,
          c
        ), r & 2048 && nu(9, n);
        break;
      case 1:
        uu(
          l,
          n,
          u,
          c
        );
        break;
      case 3:
        uu(
          l,
          n,
          u,
          c
        ), r & 2048 && (l = null, n.alternate !== null && (l = n.alternate.memoizedState.cache), n = n.memoizedState.cache, n !== l && (n.refCount++, l != null && os(l)));
        break;
      case 12:
        if (r & 2048) {
          uu(
            l,
            n,
            u,
            c
          ), l = n.stateNode;
          try {
            var s = n.memoizedProps, m = s.id, S = s.onPostCommit;
            typeof S == "function" && S(
              m,
              n.alternate === null ? "mount" : "update",
              l.passiveEffectDuration,
              -0
            );
          } catch (O) {
            Xt(n, n.return, O);
          }
        } else
          uu(
            l,
            n,
            u,
            c
          );
        break;
      case 31:
        uu(
          l,
          n,
          u,
          c
        );
        break;
      case 13:
        uu(
          l,
          n,
          u,
          c
        );
        break;
      case 23:
        break;
      case 22:
        s = n.stateNode, m = n.alternate, n.memoizedState !== null ? s._visibility & 2 ? uu(
          l,
          n,
          u,
          c
        ) : Bs(l, n) : s._visibility & 2 ? uu(
          l,
          n,
          u,
          c
        ) : (s._visibility |= 2, Wf(
          l,
          n,
          u,
          c,
          (n.subtreeFlags & 10256) !== 0 || !1
        )), r & 2048 && _h(m, n);
        break;
      case 24:
        uu(
          l,
          n,
          u,
          c
        ), r & 2048 && Oh(n.alternate, n);
        break;
      default:
        uu(
          l,
          n,
          u,
          c
        );
    }
  }
  function Wf(l, n, u, c, r) {
    for (r = r && ((n.subtreeFlags & 10256) !== 0 || !1), n = n.child; n !== null; ) {
      var s = l, m = n, S = u, O = c, j = m.flags;
      switch (m.tag) {
        case 0:
        case 11:
        case 15:
          Wf(
            s,
            m,
            S,
            O,
            r
          ), nu(8, m);
          break;
        case 23:
          break;
        case 22:
          var K = m.stateNode;
          m.memoizedState !== null ? K._visibility & 2 ? Wf(
            s,
            m,
            S,
            O,
            r
          ) : Bs(
            s,
            m
          ) : (K._visibility |= 2, Wf(
            s,
            m,
            S,
            O,
            r
          )), r && j & 2048 && _h(
            m.alternate,
            m
          );
          break;
        case 24:
          Wf(
            s,
            m,
            S,
            O,
            r
          ), r && j & 2048 && Oh(m.alternate, m);
          break;
        default:
          Wf(
            s,
            m,
            S,
            O,
            r
          );
      }
      n = n.sibling;
    }
  }
  function Bs(l, n) {
    if (n.subtreeFlags & 10256)
      for (n = n.child; n !== null; ) {
        var u = l, c = n, r = c.flags;
        switch (c.tag) {
          case 22:
            Bs(u, c), r & 2048 && _h(
              c.alternate,
              c
            );
            break;
          case 24:
            Bs(u, c), r & 2048 && Oh(c.alternate, c);
            break;
          default:
            Bs(u, c);
        }
        n = n.sibling;
      }
  }
  var dn = 8192;
  function vi(l, n, u) {
    if (l.subtreeFlags & dn)
      for (l = l.child; l !== null; )
        rg(
          l,
          n,
          u
        ), l = l.sibling;
  }
  function rg(l, n, u) {
    switch (l.tag) {
      case 26:
        vi(
          l,
          n,
          u
        ), l.flags & dn && l.memoizedState !== null && Ai(
          u,
          it,
          l.memoizedState,
          l.memoizedProps
        );
        break;
      case 5:
        vi(
          l,
          n,
          u
        );
        break;
      case 3:
      case 4:
        var c = it;
        it = Ha(l.stateNode.containerInfo), vi(
          l,
          n,
          u
        ), it = c;
        break;
      case 22:
        l.memoizedState === null && (c = l.alternate, c !== null && c.memoizedState !== null ? (c = dn, dn = 16777216, vi(
          l,
          n,
          u
        ), dn = c) : vi(
          l,
          n,
          u
        ));
        break;
      default:
        vi(
          l,
          n,
          u
        );
    }
  }
  function Dh(l) {
    var n = l.alternate;
    if (n !== null && (l = n.child, l !== null)) {
      n.child = null;
      do
        n = l.sibling, l.sibling = null, l = n;
      while (l !== null);
    }
  }
  function If(l) {
    var n = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (n !== null)
        for (var u = 0; u < n.length; u++) {
          var c = n[u];
          aa = c, zh(
            c,
            l
          );
        }
      Dh(l);
    }
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; )
        Py(l), l = l.sibling;
  }
  function Py(l) {
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        If(l), l.flags & 2048 && Yn(9, l, l.return);
        break;
      case 3:
        If(l);
        break;
      case 12:
        If(l);
        break;
      case 22:
        var n = l.stateNode;
        l.memoizedState !== null && n._visibility & 2 && (l.return === null || l.return.tag !== 13) ? (n._visibility &= -3, Ys(l)) : If(l);
        break;
      default:
        If(l);
    }
  }
  function Ys(l) {
    var n = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (n !== null)
        for (var u = 0; u < n.length; u++) {
          var c = n[u];
          aa = c, zh(
            c,
            l
          );
        }
      Dh(l);
    }
    for (l = l.child; l !== null; ) {
      switch (n = l, n.tag) {
        case 0:
        case 11:
        case 15:
          Yn(8, n, n.return), Ys(n);
          break;
        case 22:
          u = n.stateNode, u._visibility & 2 && (u._visibility &= -3, Ys(n));
          break;
        default:
          Ys(n);
      }
      l = l.sibling;
    }
  }
  function zh(l, n) {
    for (; aa !== null; ) {
      var u = aa;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          Yn(8, u, n);
          break;
        case 23:
        case 22:
          if (u.memoizedState !== null && u.memoizedState.cachePool !== null) {
            var c = u.memoizedState.cachePool.pool;
            c != null && c.refCount++;
          }
          break;
        case 24:
          os(u.memoizedState.cache);
      }
      if (c = u.child, c !== null) c.return = u, aa = c;
      else
        e: for (u = l; aa !== null; ) {
          c = aa;
          var r = c.sibling, s = c.return;
          if (ky(c), c === u) {
            aa = null;
            break e;
          }
          if (r !== null) {
            r.return = s, aa = r;
            break e;
          }
          aa = s;
        }
    }
  }
  var sg = {
    getCacheForType: function(l) {
      var n = P(Dl), u = n.data.get(l);
      return u === void 0 && (u = l(), n.data.set(l, u)), u;
    },
    cacheSignal: function() {
      return P(Dl).controller.signal;
    }
  }, e0 = typeof WeakMap == "function" ? WeakMap : Map, Ct = 0, Jt = null, bt = null, yt = 0, Lt = 0, Ve = null, Si = !1, Jc = !1, Mh = !1, Bu = 0, Pt = 0, Yu = 0, Xo = 0, Ch = 0, en = 0, yl = 0, ws = null, pl = null, Uh = !1, wu = 0, t0 = 0, Bt = 1 / 0, Pf = null, ol = null, Zl = 0, cc = null, Kc = null, bi = 0, hn = 0, Hh = null, xh = null, er = 0, qs = null;
  function mn() {
    return (Ct & 2) !== 0 && yt !== 0 ? yt & -yt : D.T !== null ? qh() : Pe();
  }
  function dg() {
    if (en === 0)
      if ((yt & 536870912) === 0 || St) {
        var l = ce;
        ce <<= 1, (ce & 3932160) === 0 && (ce = 262144), en = l;
      } else en = 536870912;
    return l = $a.current, l !== null && (l.flags |= 32), en;
  }
  function tn(l, n, u) {
    (l === Jt && (Lt === 2 || Lt === 9) || l.cancelPendingCommit !== null) && (Ei(l, 0), oc(
      l,
      yt,
      en,
      !1
    )), En(l, u), ((Ct & 2) === 0 || l !== Jt) && (l === Jt && ((Ct & 2) === 0 && (Xo |= u), Pt === 4 && oc(
      l,
      yt,
      en,
      !1
    )), Ti(l));
  }
  function hg(l, n, u) {
    if ((Ct & 6) !== 0) throw Error(E(327));
    var c = !u && (n & 127) === 0 && (n & l.expiredLanes) === 0 || nt(l, n), r = c ? vg(l, n) : Bh(l, n, !0), s = c;
    do {
      if (r === 0) {
        Jc && !c && oc(l, n, 0, !1);
        break;
      } else {
        if (u = l.current.alternate, s && !mg(u)) {
          r = Bh(l, n, !1), s = !1;
          continue;
        }
        if (r === 2) {
          if (s = n, l.errorRecoveryDisabledLanes & s)
            var m = 0;
          else
            m = l.pendingLanes & -536870913, m = m !== 0 ? m : m & 536870912 ? 536870912 : 0;
          if (m !== 0) {
            n = m;
            e: {
              var S = l;
              r = ws;
              var O = S.current.memoizedState.isDehydrated;
              if (O && (Ei(S, m).flags |= 256), m = Bh(
                S,
                m,
                !1
              ), m !== 2) {
                if (Mh && !O) {
                  S.errorRecoveryDisabledLanes |= s, Xo |= s, r = 4;
                  break e;
                }
                s = pl, pl = r, s !== null && (pl === null ? pl = s : pl.push.apply(
                  pl,
                  s
                ));
              }
              r = m;
            }
            if (s = !1, r !== 2) continue;
          }
        }
        if (r === 1) {
          Ei(l, 0), oc(l, n, 0, !0);
          break;
        }
        e: {
          switch (c = l, s = r, s) {
            case 0:
            case 1:
              throw Error(E(345));
            case 4:
              if ((n & 4194048) !== n) break;
            case 6:
              oc(
                c,
                n,
                en,
                !Si
              );
              break e;
            case 2:
              pl = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(E(329));
          }
          if ((n & 62914560) === n && (r = wu + 300 - ul(), 10 < r)) {
            if (oc(
              c,
              n,
              en,
              !Si
            ), Ee(c, 0, !0) !== 0) break e;
            bi = n, c.timeoutHandle = $s(
              js.bind(
                null,
                c,
                u,
                pl,
                Pf,
                Uh,
                n,
                en,
                Xo,
                yl,
                Si,
                s,
                "Throttled",
                -0,
                0
              ),
              r
            );
            break e;
          }
          js(
            c,
            u,
            pl,
            Pf,
            Uh,
            n,
            en,
            Xo,
            yl,
            Si,
            s,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    Ti(l);
  }
  function js(l, n, u, c, r, s, m, S, O, j, K, I, G, J) {
    if (l.timeoutHandle = -1, I = n.subtreeFlags, I & 8192 || (I & 16785408) === 16785408) {
      I = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: on
      }, rg(
        n,
        s,
        I
      );
      var be = (s & 62914560) === s ? wu - ul() : (s & 4194048) === s ? t0 - ul() : 0;
      if (be = O0(
        I,
        be
      ), be !== null) {
        bi = s, l.cancelPendingCommit = be(
          Tg.bind(
            null,
            l,
            n,
            s,
            u,
            c,
            r,
            m,
            S,
            O,
            K,
            I,
            null,
            G,
            J
          )
        ), oc(l, s, m, !j);
        return;
      }
    }
    Tg(
      l,
      n,
      s,
      u,
      c,
      r,
      m,
      S,
      O
    );
  }
  function mg(l) {
    for (var n = l; ; ) {
      var u = n.tag;
      if ((u === 0 || u === 11 || u === 15) && n.flags & 16384 && (u = n.updateQueue, u !== null && (u = u.stores, u !== null)))
        for (var c = 0; c < u.length; c++) {
          var r = u[c], s = r.getSnapshot;
          r = r.value;
          try {
            if (!Ca(s(), r)) return !1;
          } catch {
            return !1;
          }
        }
      if (u = n.child, n.subtreeFlags & 16384 && u !== null)
        u.return = n, n = u;
      else {
        if (n === l) break;
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === l) return !0;
          n = n.return;
        }
        n.sibling.return = n.return, n = n.sibling;
      }
    }
    return !0;
  }
  function oc(l, n, u, c) {
    n &= ~Ch, n &= ~Xo, l.suspendedLanes |= n, l.pingedLanes &= ~n, c && (l.warmLanes |= n), c = l.expirationTimes;
    for (var r = n; 0 < r; ) {
      var s = 31 - _l(r), m = 1 << s;
      c[s] = -1, r &= ~m;
    }
    u !== 0 && $n(l, u, n);
  }
  function tr() {
    return (Ct & 6) === 0 ? (rc(0), !1) : !0;
  }
  function l0() {
    if (bt !== null) {
      if (Lt === 0)
        var l = bt.return;
      else
        l = bt, zu = Wi = null, vs(l), Nc = null, Co = 0, l = bt;
      for (; l !== null; )
        og(l.alternate, l), l = l.return;
      bt = null;
    }
  }
  function Ei(l, n) {
    var u = l.timeoutHandle;
    u !== -1 && (l.timeoutHandle = -1, qg(u)), u = l.cancelPendingCommit, u !== null && (l.cancelPendingCommit = null, u()), bi = 0, l0(), Jt = l, bt = u = ki(l.current, null), yt = n, Lt = 0, Ve = null, Si = !1, Jc = nt(l, n), Mh = !1, yl = en = Ch = Xo = Yu = Pt = 0, pl = ws = null, Uh = !1, (n & 8) !== 0 && (n |= n & 32);
    var c = l.entangledLanes;
    if (c !== 0)
      for (l = l.entanglements, c &= n; 0 < c; ) {
        var r = 31 - _l(c), s = 1 << r;
        n |= l[r], c &= ~s;
      }
    return Bu = n, _n(), u;
  }
  function lr(l, n) {
    at = null, D.H = Os, n === Uc || n === xf ? (n = sy(), Lt = 3) : n === zo ? (n = sy(), Lt = 4) : Lt = n === ph ? 8 : n !== null && typeof n == "object" && typeof n.then == "function" ? 6 : 1, Ve = n, bt === null && (Pt = 1, Qf(
      l,
      Dn(n, l.current)
    ));
  }
  function yg() {
    var l = $a.current;
    return l === null ? !0 : (yt & 4194048) === yt ? Hn === null : (yt & 62914560) === yt || (yt & 536870912) !== 0 ? l === Hn : !1;
  }
  function pg() {
    var l = D.H;
    return D.H = Os, l === null ? Os : l;
  }
  function gg() {
    var l = D.A;
    return D.A = sg, l;
  }
  function Nh() {
    Pt = 4, Si || (yt & 4194048) !== yt && $a.current !== null || (Jc = !0), (Yu & 134217727) === 0 && (Xo & 134217727) === 0 || Jt === null || oc(
      Jt,
      yt,
      en,
      !1
    );
  }
  function Bh(l, n, u) {
    var c = Ct;
    Ct |= 2;
    var r = pg(), s = gg();
    (Jt !== l || yt !== n) && (Pf = null, Ei(l, n)), n = !1;
    var m = Pt;
    e: do
      try {
        if (Lt !== 0 && bt !== null) {
          var S = bt, O = Ve;
          switch (Lt) {
            case 8:
              l0(), m = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              $a.current === null && (n = !0);
              var j = Lt;
              if (Lt = 0, Ve = null, Vo(l, S, O, j), u && Jc) {
                m = 0;
                break e;
              }
              break;
            default:
              j = Lt, Lt = 0, Ve = null, Vo(l, S, O, j);
          }
        }
        c1(), m = Pt;
        break;
      } catch (K) {
        lr(l, K);
      }
    while (!0);
    return n && l.shellSuspendCounter++, zu = Wi = null, Ct = c, D.H = r, D.A = s, bt === null && (Jt = null, yt = 0, _n()), m;
  }
  function c1() {
    for (; bt !== null; ) Sg(bt);
  }
  function vg(l, n) {
    var u = Ct;
    Ct |= 2;
    var c = pg(), r = gg();
    Jt !== l || yt !== n ? (Pf = null, Bt = ul() + 500, Ei(l, n)) : Jc = nt(
      l,
      n
    );
    e: do
      try {
        if (Lt !== 0 && bt !== null) {
          n = bt;
          var s = Ve;
          t: switch (Lt) {
            case 1:
              Lt = 0, Ve = null, Vo(l, n, s, 1);
              break;
            case 2:
            case 9:
              if (fy(s)) {
                Lt = 0, Ve = null, bg(n);
                break;
              }
              n = function() {
                Lt !== 2 && Lt !== 9 || Jt !== l || (Lt = 7), Ti(l);
              }, s.then(n, n);
              break e;
            case 3:
              Lt = 7;
              break e;
            case 4:
              Lt = 5;
              break e;
            case 7:
              fy(s) ? (Lt = 0, Ve = null, bg(n)) : (Lt = 0, Ve = null, Vo(l, n, s, 7));
              break;
            case 5:
              var m = null;
              switch (bt.tag) {
                case 26:
                  m = bt.memoizedState;
                case 5:
                case 27:
                  var S = bt;
                  if (m ? pn(m) : S.stateNode.complete) {
                    Lt = 0, Ve = null;
                    var O = S.sibling;
                    if (O !== null) bt = O;
                    else {
                      var j = S.return;
                      j !== null ? (bt = j, Gs(j)) : bt = null;
                    }
                    break t;
                  }
              }
              Lt = 0, Ve = null, Vo(l, n, s, 5);
              break;
            case 6:
              Lt = 0, Ve = null, Vo(l, n, s, 6);
              break;
            case 8:
              l0(), Pt = 6;
              break e;
            default:
              throw Error(E(462));
          }
        }
        $c();
        break;
      } catch (K) {
        lr(l, K);
      }
    while (!0);
    return zu = Wi = null, D.H = c, D.A = r, Ct = u, bt !== null ? 0 : (Jt = null, yt = 0, _n(), Pt);
  }
  function $c() {
    for (; bt !== null && !da(); )
      Sg(bt);
  }
  function Sg(l) {
    var n = Xy(l.alternate, l, Bu);
    l.memoizedProps = l.pendingProps, n === null ? Gs(l) : bt = n;
  }
  function bg(l) {
    var n = l, u = n.alternate;
    switch (n.tag) {
      case 15:
      case 0:
        n = Vc(
          u,
          n,
          n.pendingProps,
          n.type,
          void 0,
          yt
        );
        break;
      case 11:
        n = Vc(
          u,
          n,
          n.pendingProps,
          n.type.render,
          n.ref,
          yt
        );
        break;
      case 5:
        vs(n);
      default:
        og(u, n), n = bt = ly(n, Bu), n = Xy(u, n, Bu);
    }
    l.memoizedProps = l.pendingProps, n === null ? Gs(l) : bt = n;
  }
  function Vo(l, n, u, c) {
    zu = Wi = null, vs(n), Nc = null, Co = 0;
    var r = n.return;
    try {
      if (i1(
        l,
        r,
        n,
        u,
        yt
      )) {
        Pt = 1, Qf(
          l,
          Dn(u, l.current)
        ), bt = null;
        return;
      }
    } catch (s) {
      if (r !== null) throw bt = r, s;
      Pt = 1, Qf(
        l,
        Dn(u, l.current)
      ), bt = null;
      return;
    }
    n.flags & 32768 ? (St || c === 1 ? l = !0 : Jc || (yt & 536870912) !== 0 ? l = !1 : (Si = l = !0, (c === 2 || c === 9 || c === 3 || c === 6) && (c = $a.current, c !== null && c.tag === 13 && (c.flags |= 16384))), Eg(n, l)) : Gs(n);
  }
  function Gs(l) {
    var n = l;
    do {
      if ((n.flags & 32768) !== 0) {
        Eg(
          n,
          Si
        );
        return;
      }
      l = n.return;
      var u = ig(
        n.alternate,
        n,
        Bu
      );
      if (u !== null) {
        bt = u;
        return;
      }
      if (n = n.sibling, n !== null) {
        bt = n;
        return;
      }
      bt = n = l;
    } while (n !== null);
    Pt === 0 && (Pt = 5);
  }
  function Eg(l, n) {
    do {
      var u = cg(l.alternate, l);
      if (u !== null) {
        u.flags &= 32767, bt = u;
        return;
      }
      if (u = l.return, u !== null && (u.flags |= 32768, u.subtreeFlags = 0, u.deletions = null), !n && (l = l.sibling, l !== null)) {
        bt = l;
        return;
      }
      bt = l = u;
    } while (l !== null);
    Pt = 6, bt = null;
  }
  function Tg(l, n, u, c, r, s, m, S, O) {
    l.cancelPendingCommit = null;
    do
      ar();
    while (Zl !== 0);
    if ((Ct & 6) !== 0) throw Error(E(327));
    if (n !== null) {
      if (n === l.current) throw Error(E(177));
      if (s = n.lanes | n.childLanes, s |= Pn, Fu(
        l,
        u,
        s,
        m,
        S,
        O
      ), l === Jt && (bt = Jt = null, yt = 0), Kc = n, cc = l, bi = u, hn = s, Hh = r, xh = c, (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0 ? (l.callbackNode = null, l.callbackPriority = 0, Ug(Ll, function() {
        return Dg(), null;
      })) : (l.callbackNode = null, l.callbackPriority = 0), c = (n.flags & 13878) !== 0, (n.subtreeFlags & 13878) !== 0 || c) {
        c = D.T, D.T = null, r = v.p, v.p = 2, m = Ct, Ct |= 4;
        try {
          kf(l, n, u);
        } finally {
          Ct = m, v.p = r, D.T = c;
        }
      }
      Zl = 1, Ag(), Rg(), _g();
    }
  }
  function Ag() {
    if (Zl === 1) {
      Zl = 0;
      var l = cc, n = Kc, u = (n.flags & 13878) !== 0;
      if ((n.subtreeFlags & 13878) !== 0 || u) {
        u = D.T, D.T = null;
        var c = v.p;
        v.p = 2;
        var r = Ct;
        Ct |= 4;
        try {
          Rh(n, l);
          var s = Qh, m = Oc(l.containerInfo), S = s.focusedElem, O = s.selectionRange;
          if (m !== S && S && S.ownerDocument && bo(
            S.ownerDocument.documentElement,
            S
          )) {
            if (O !== null && Ir(S)) {
              var j = O.start, K = O.end;
              if (K === void 0 && (K = j), "selectionStart" in S)
                S.selectionStart = j, S.selectionEnd = Math.min(
                  K,
                  S.value.length
                );
              else {
                var I = S.ownerDocument || document, G = I && I.defaultView || window;
                if (G.getSelection) {
                  var J = G.getSelection(), be = S.textContent.length, we = Math.min(O.start, be), $t = O.end === void 0 ? we : Math.min(O.end, be);
                  !J.extend && we > $t && (m = $t, $t = we, we = m);
                  var N = ey(
                    S,
                    we
                  ), C = ey(
                    S,
                    $t
                  );
                  if (N && C && (J.rangeCount !== 1 || J.anchorNode !== N.node || J.anchorOffset !== N.offset || J.focusNode !== C.node || J.focusOffset !== C.offset)) {
                    var w = I.createRange();
                    w.setStart(N.node, N.offset), J.removeAllRanges(), we > $t ? (J.addRange(w), J.extend(C.node, C.offset)) : (w.setEnd(C.node, C.offset), J.addRange(w));
                  }
                }
              }
            }
            for (I = [], J = S; J = J.parentNode; )
              J.nodeType === 1 && I.push({
                element: J,
                left: J.scrollLeft,
                top: J.scrollTop
              });
            for (typeof S.focus == "function" && S.focus(), S = 0; S < I.length; S++) {
              var F = I[S];
              F.element.scrollLeft = F.left, F.element.scrollTop = F.top;
            }
          }
          Jl = !!Vh, Qh = Vh = null;
        } finally {
          Ct = r, v.p = c, D.T = u;
        }
      }
      l.current = n, Zl = 2;
    }
  }
  function Rg() {
    if (Zl === 2) {
      Zl = 0;
      var l = cc, n = Kc, u = (n.flags & 8772) !== 0;
      if ((n.subtreeFlags & 8772) !== 0 || u) {
        u = D.T, D.T = null;
        var c = v.p;
        v.p = 2;
        var r = Ct;
        Ct |= 4;
        try {
          Hs(l, n.alternate, n);
        } finally {
          Ct = r, v.p = c, D.T = u;
        }
      }
      Zl = 3;
    }
  }
  function _g() {
    if (Zl === 4 || Zl === 3) {
      Zl = 0, Hl();
      var l = cc, n = Kc, u = bi, c = xh;
      (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0 ? Zl = 5 : (Zl = 0, Kc = cc = null, Og(l, l.pendingLanes));
      var r = l.pendingLanes;
      if (r === 0 && (ol = null), De(u), n = n.stateNode, vl && typeof vl.onCommitFiberRoot == "function")
        try {
          vl.onCommitFiberRoot(
            Oa,
            n,
            void 0,
            (n.current.flags & 128) === 128
          );
        } catch {
        }
      if (c !== null) {
        n = D.T, r = v.p, v.p = 2, D.T = null;
        try {
          for (var s = l.onRecoverableError, m = 0; m < c.length; m++) {
            var S = c[m];
            s(S.value, {
              componentStack: S.stack
            });
          }
        } finally {
          D.T = n, v.p = r;
        }
      }
      (bi & 3) !== 0 && ar(), Ti(l), r = l.pendingLanes, (u & 261930) !== 0 && (r & 42) !== 0 ? l === qs ? er++ : (er = 0, qs = l) : er = 0, rc(0);
    }
  }
  function Og(l, n) {
    (l.pooledCacheLanes &= n) === 0 && (n = l.pooledCache, n != null && (l.pooledCache = null, os(n)));
  }
  function ar() {
    return Ag(), Rg(), _g(), Dg();
  }
  function Dg() {
    if (Zl !== 5) return !1;
    var l = cc, n = hn;
    hn = 0;
    var u = De(bi), c = D.T, r = v.p;
    try {
      v.p = 32 > u ? 32 : u, D.T = null, u = Hh, Hh = null;
      var s = cc, m = bi;
      if (Zl = 0, Kc = cc = null, bi = 0, (Ct & 6) !== 0) throw Error(E(331));
      var S = Ct;
      if (Ct |= 4, Py(s.current), Ff(
        s,
        s.current,
        m,
        u
      ), Ct = S, rc(0, !1), vl && typeof vl.onPostCommitFiberRoot == "function")
        try {
          vl.onPostCommitFiberRoot(Oa, s);
        } catch {
        }
      return !0;
    } finally {
      v.p = r, D.T = c, Og(l, n);
    }
  }
  function zg(l, n, u) {
    n = Dn(u, n), n = xy(l.stateNode, n, 2), l = Un(l, n, 2), l !== null && (En(l, 2), Ti(l));
  }
  function Xt(l, n, u) {
    if (l.tag === 3)
      zg(l, l, u);
    else
      for (; n !== null; ) {
        if (n.tag === 3) {
          zg(
            n,
            l,
            u
          );
          break;
        } else if (n.tag === 1) {
          var c = n.stateNode;
          if (typeof n.type.getDerivedStateFromError == "function" || typeof c.componentDidCatch == "function" && (ol === null || !ol.has(c))) {
            l = Dn(u, l), u = Ny(2), c = Un(n, u, 2), c !== null && (By(
              u,
              c,
              n,
              l
            ), En(c, 2), Ti(c));
            break;
          }
        }
        n = n.return;
      }
  }
  function Ls(l, n, u) {
    var c = l.pingCache;
    if (c === null) {
      c = l.pingCache = new e0();
      var r = /* @__PURE__ */ new Set();
      c.set(n, r);
    } else
      r = c.get(n), r === void 0 && (r = /* @__PURE__ */ new Set(), c.set(n, r));
    r.has(u) || (Mh = !0, r.add(u), l = a0.bind(null, l, n, u), n.then(l, l));
  }
  function a0(l, n, u) {
    var c = l.pingCache;
    c !== null && c.delete(n), l.pingedLanes |= l.suspendedLanes & u, l.warmLanes &= ~u, Jt === l && (yt & u) === u && (Pt === 4 || Pt === 3 && (yt & 62914560) === yt && 300 > ul() - wu ? (Ct & 2) === 0 && Ei(l, 0) : Ch |= u, yl === yt && (yl = 0)), Ti(l);
  }
  function Mg(l, n) {
    n === 0 && (n = Sl()), l = $i(l, n), l !== null && (En(l, n), Ti(l));
  }
  function wn(l) {
    var n = l.memoizedState, u = 0;
    n !== null && (u = n.retryLane), Mg(l, u);
  }
  function Cg(l, n) {
    var u = 0;
    switch (l.tag) {
      case 31:
      case 13:
        var c = l.stateNode, r = l.memoizedState;
        r !== null && (u = r.retryLane);
        break;
      case 19:
        c = l.stateNode;
        break;
      case 22:
        c = l.stateNode._retryCache;
        break;
      default:
        throw Error(E(314));
    }
    c !== null && c.delete(n), Mg(l, u);
  }
  function Ug(l, n) {
    return ie(l, n);
  }
  var nr = null, Qo = null, n0 = !1, Yh = !1, u0 = !1, fc = 0;
  function Ti(l) {
    l !== Qo && l.next === null && (Qo === null ? nr = Qo = l : Qo = Qo.next = l), Yh = !0, n0 || (n0 = !0, Vs());
  }
  function rc(l, n) {
    if (!u0 && Yh) {
      u0 = !0;
      do
        for (var u = !1, c = nr; c !== null; ) {
          if (l !== 0) {
            var r = c.pendingLanes;
            if (r === 0) var s = 0;
            else {
              var m = c.suspendedLanes, S = c.pingedLanes;
              s = (1 << 31 - _l(42 | l) + 1) - 1, s &= r & ~(m & ~S), s = s & 201326741 ? s & 201326741 | 1 : s ? s | 2 : 0;
            }
            s !== 0 && (u = !0, Zo(c, s));
          } else
            s = yt, s = Ee(
              c,
              c === Jt ? s : 0,
              c.cancelPendingCommit !== null || c.timeoutHandle !== -1
            ), (s & 3) === 0 || nt(c, s) || (u = !0, Zo(c, s));
          c = c.next;
        }
      while (u);
      u0 = !1;
    }
  }
  function wh() {
    i0();
  }
  function i0() {
    Yh = n0 = !1;
    var l = 0;
    fc !== 0 && o1() && (l = fc);
    for (var n = ul(), u = null, c = nr; c !== null; ) {
      var r = c.next, s = c0(c, n);
      s === 0 ? (c.next = null, u === null ? nr = r : u.next = r, r === null && (Qo = u)) : (u = c, (l !== 0 || (s & 3) !== 0) && (Yh = !0)), c = r;
    }
    Zl !== 0 && Zl !== 5 || rc(l), fc !== 0 && (fc = 0);
  }
  function c0(l, n) {
    for (var u = l.suspendedLanes, c = l.pingedLanes, r = l.expirationTimes, s = l.pendingLanes & -62914561; 0 < s; ) {
      var m = 31 - _l(s), S = 1 << m, O = r[m];
      O === -1 ? ((S & u) === 0 || (S & c) !== 0) && (r[m] = je(S, n)) : O <= n && (l.expiredLanes |= S), s &= ~S;
    }
    if (n = Jt, u = yt, u = Ee(
      l,
      l === n ? u : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), c = l.callbackNode, u === 0 || l === n && (Lt === 2 || Lt === 9) || l.cancelPendingCommit !== null)
      return c !== null && c !== null && Ie(c), l.callbackNode = null, l.callbackPriority = 0;
    if ((u & 3) === 0 || nt(l, u)) {
      if (n = u & -u, n === l.callbackPriority) return n;
      switch (c !== null && Ie(c), De(u)) {
        case 2:
        case 8:
          u = un;
          break;
        case 32:
          u = Ll;
          break;
        case 268435456:
          u = su;
          break;
        default:
          u = Ll;
      }
      return c = Xs.bind(null, l), u = ie(u, c), l.callbackPriority = n, l.callbackNode = u, n;
    }
    return c !== null && c !== null && Ie(c), l.callbackPriority = 2, l.callbackNode = null, 2;
  }
  function Xs(l, n) {
    if (Zl !== 0 && Zl !== 5)
      return l.callbackNode = null, l.callbackPriority = 0, null;
    var u = l.callbackNode;
    if (ar() && l.callbackNode !== u)
      return null;
    var c = yt;
    return c = Ee(
      l,
      l === Jt ? c : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), c === 0 ? null : (hg(l, c, n), c0(l, ul()), l.callbackNode != null && l.callbackNode === u ? Xs.bind(null, l) : null);
  }
  function Zo(l, n) {
    if (ar()) return null;
    hg(l, n, !0);
  }
  function Vs() {
    jg(function() {
      (Ct & 6) !== 0 ? ie(
        Gl,
        wh
      ) : i0();
    });
  }
  function qh() {
    if (fc === 0) {
      var l = Cc;
      l === 0 && (l = ae, ae <<= 1, (ae & 261888) === 0 && (ae = 256)), fc = l;
    }
    return fc;
  }
  function Hg(l) {
    return l == null || typeof l == "symbol" || typeof l == "boolean" ? null : typeof l == "function" ? l : La("" + l);
  }
  function Jo(l, n) {
    var u = n.ownerDocument.createElement("input");
    return u.name = n.name, u.value = n.value, l.id && u.setAttribute("form", l.id), n.parentNode.insertBefore(u, n), l = new FormData(l), u.parentNode.removeChild(u), l;
  }
  function Qs(l, n, u, c, r) {
    if (n === "submit" && u && u.stateNode === r) {
      var s = Hg(
        (r[qt] || null).action
      ), m = c.submitter;
      m && (n = (n = m[qt] || null) ? Hg(n.formAction) : m.getAttribute("formAction"), n !== null && (s = n, m = null));
      var S = new kr(
        "action",
        "action",
        null,
        c,
        r
      );
      l.push({
        event: S,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (c.defaultPrevented) {
                if (fc !== 0) {
                  var O = m ? Jo(r, m) : new FormData(r);
                  Xf(
                    u,
                    {
                      pending: !0,
                      data: O,
                      method: r.method,
                      action: s
                    },
                    null,
                    O
                  );
                }
              } else
                typeof s == "function" && (S.preventDefault(), O = m ? Jo(r, m) : new FormData(r), Xf(
                  u,
                  {
                    pending: !0,
                    data: O,
                    method: r.method,
                    action: s
                  },
                  s,
                  O
                ));
            },
            currentTarget: r
          }
        ]
      });
    }
  }
  for (var jh = 0; jh < Df.length; jh++) {
    var ur = Df[jh], o0 = ur.toLowerCase(), f0 = ur[0].toUpperCase() + ur.slice(1);
    Qa(
      o0,
      "on" + f0
    );
  }
  Qa(es, "onAnimationEnd"), Qa(ty, "onAnimationIteration"), Qa(jd, "onAnimationStart"), Qa("dblclick", "onDoubleClick"), Qa("focusin", "onFocus"), Qa("focusout", "onBlur"), Qa(Eo, "onTransitionRun"), Qa(ts, "onTransitionStart"), Qa(li, "onTransitionCancel"), Qa(Vp, "onTransitionEnd"), Rn("onMouseEnter", ["mouseout", "mouseover"]), Rn("onMouseLeave", ["mouseout", "mouseover"]), Rn("onPointerEnter", ["pointerout", "pointerover"]), Rn("onPointerLeave", ["pointerout", "pointerover"]), yu(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), yu(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), yu("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), yu(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), yu(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), yu(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var ir = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), xg = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ir)
  );
  function Ng(l, n) {
    n = (n & 4) !== 0;
    for (var u = 0; u < l.length; u++) {
      var c = l[u], r = c.event;
      c = c.listeners;
      e: {
        var s = void 0;
        if (n)
          for (var m = c.length - 1; 0 <= m; m--) {
            var S = c[m], O = S.instance, j = S.currentTarget;
            if (S = S.listener, O !== s && r.isPropagationStopped())
              break e;
            s = S, r.currentTarget = j;
            try {
              s(r);
            } catch (K) {
              To(K);
            }
            r.currentTarget = null, s = O;
          }
        else
          for (m = 0; m < c.length; m++) {
            if (S = c[m], O = S.instance, j = S.currentTarget, S = S.listener, O !== s && r.isPropagationStopped())
              break e;
            s = S, r.currentTarget = j;
            try {
              s(r);
            } catch (K) {
              To(K);
            }
            r.currentTarget = null, s = O;
          }
      }
    }
  }
  function vt(l, n) {
    var u = n[Ga];
    u === void 0 && (u = n[Ga] = /* @__PURE__ */ new Set());
    var c = l + "__bubble";
    u.has(c) || (Zs(n, l, 2, !1), u.add(c));
  }
  function r0(l, n, u) {
    var c = 0;
    n && (c |= 4), Zs(
      u,
      l,
      c,
      n
    );
  }
  var Gh = "_reactListening" + Math.random().toString(36).slice(2);
  function cr(l) {
    if (!l[Gh]) {
      l[Gh] = !0, mu.forEach(function(u) {
        u !== "selectionchange" && (xg.has(u) || r0(u, !1, l), r0(u, !0, l));
      });
      var n = l.nodeType === 9 ? l : l.ownerDocument;
      n === null || n[Gh] || (n[Gh] = !0, r0("selectionchange", !1, n));
    }
  }
  function Zs(l, n, u, c) {
    switch (ed(n)) {
      case 2:
        var r = Ri;
        break;
      case 8:
        r = _i;
        break;
      default:
        r = Ea;
    }
    u = r.bind(
      null,
      n,
      u,
      l
    ), r = void 0, !Kr || n !== "touchstart" && n !== "touchmove" && n !== "wheel" || (r = !0), c ? r !== void 0 ? l.addEventListener(n, u, {
      capture: !0,
      passive: r
    }) : l.addEventListener(n, u, !0) : r !== void 0 ? l.addEventListener(n, u, {
      passive: r
    }) : l.addEventListener(n, u, !1);
  }
  function s0(l, n, u, c, r) {
    var s = c;
    if ((n & 1) === 0 && (n & 2) === 0 && c !== null)
      e: for (; ; ) {
        if (c === null) return;
        var m = c.tag;
        if (m === 3 || m === 4) {
          var S = c.stateNode.containerInfo;
          if (S === r) break;
          if (m === 4)
            for (m = c.return; m !== null; ) {
              var O = m.tag;
              if ((O === 3 || O === 4) && m.stateNode.containerInfo === r)
                return;
              m = m.return;
            }
          for (; S !== null; ) {
            if (m = xl(S), m === null) return;
            if (O = m.tag, O === 5 || O === 6 || O === 26 || O === 27) {
              c = s = m;
              continue e;
            }
            S = S.parentNode;
          }
        }
        c = c.return;
      }
    wm(function() {
      var j = s, K = Ec(u), I = [];
      e: {
        var G = ai.get(l);
        if (G !== void 0) {
          var J = kr, be = l;
          switch (l) {
            case "keypress":
              if (zd(u) === 0) break e;
            case "keydown":
            case "keyup":
              J = Hd;
              break;
            case "focusin":
              be = "focus", J = Cd;
              break;
            case "focusout":
              be = "blur", J = Cd;
              break;
            case "beforeblur":
            case "afterblur":
              J = Cd;
              break;
            case "click":
              if (u.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              J = Tf;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              J = Up;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              J = Yp;
              break;
            case es:
            case ty:
            case jd:
              J = xp;
              break;
            case Vp:
              J = l1;
              break;
            case "scroll":
            case "scrollend":
              J = e1;
              break;
            case "wheel":
              J = a1;
              break;
            case "copy":
            case "cut":
            case "paste":
              J = mo;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              J = Tu;
              break;
            case "toggle":
            case "beforetoggle":
              J = Jm;
          }
          var we = (n & 4) !== 0, $t = !we && (l === "scroll" || l === "scrollend"), N = we ? G !== null ? G + "Capture" : null : G;
          we = [];
          for (var C = j, w; C !== null; ) {
            var F = C;
            if (w = F.stateNode, F = F.tag, F !== 5 && F !== 26 && F !== 27 || w === null || N === null || (F = Wl(C, N), F != null && we.push(
              Js(C, F, w)
            )), $t) break;
            C = C.return;
          }
          0 < we.length && (G = new J(
            G,
            be,
            null,
            u,
            K
          ), I.push({ event: G, listeners: we }));
        }
      }
      if ((n & 7) === 0) {
        e: {
          if (G = l === "mouseover" || l === "pointerover", J = l === "mouseout" || l === "pointerout", G && u !== so && (be = u.relatedTarget || u.fromElement) && (xl(be) || be[Xl]))
            break e;
          if ((J || G) && (G = K.window === K ? K : (G = K.ownerDocument) ? G.defaultView || G.parentWindow : window, J ? (be = u.relatedTarget || u.toElement, J = j, be = be ? xl(be) : null, be !== null && ($t = te(be), we = be.tag, be !== $t || we !== 5 && we !== 27 && we !== 6) && (be = null)) : (J = null, be = j), J !== be)) {
            if (we = Tf, F = "onMouseLeave", N = "onMouseEnter", C = "mouse", (l === "pointerout" || l === "pointerover") && (we = Tu, F = "onPointerLeave", N = "onPointerEnter", C = "pointer"), $t = J == null ? G : Gi(J), w = be == null ? G : Gi(be), G = new we(
              F,
              C + "leave",
              J,
              u,
              K
            ), G.target = $t, G.relatedTarget = w, F = null, xl(K) === j && (we = new we(
              N,
              C + "enter",
              be,
              u,
              K
            ), we.target = w, we.relatedTarget = $t, F = we), $t = F, J && be)
              t: {
                for (we = Bg, N = J, C = be, w = 0, F = N; F; F = we(F))
                  w++;
                F = 0;
                for (var Ce = C; Ce; Ce = we(Ce))
                  F++;
                for (; 0 < w - F; )
                  N = we(N), w--;
                for (; 0 < F - w; )
                  C = we(C), F--;
                for (; w--; ) {
                  if (N === C || C !== null && N === C.alternate) {
                    we = N;
                    break t;
                  }
                  N = we(N), C = we(C);
                }
                we = null;
              }
            else we = null;
            J !== null && Lh(
              I,
              G,
              J,
              we,
              !1
            ), be !== null && $t !== null && Lh(
              I,
              $t,
              be,
              we,
              !0
            );
          }
        }
        e: {
          if (G = j ? Gi(j) : window, J = G.nodeName && G.nodeName.toLowerCase(), J === "select" || J === "input" && G.type === "file")
            var Dt = Wm;
          else if (ti(G))
            if (Bd)
              Dt = So;
            else {
              Dt = Lp;
              var Te = Gp;
            }
          else
            J = G.nodeName, !J || J.toLowerCase() !== "input" || G.type !== "checkbox" && G.type !== "radio" ? j && ro(j.elementType) && (Dt = Wm) : Dt = _c;
          if (Dt && (Dt = Dt(l, j))) {
            Fm(
              I,
              Dt,
              u,
              K
            );
            break e;
          }
          Te && Te(l, G, j), l === "focusout" && j && G.type === "number" && j.memoizedProps.value != null && vu(G, "number", G.value);
        }
        switch (Te = j ? Gi(j) : window, l) {
          case "focusin":
            (ti(Te) || Te.contentEditable === "true") && (Dc = Te, _f = j, In = null);
            break;
          case "focusout":
            In = _f = Dc = null;
            break;
          case "mousedown":
            Ru = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Ru = !1, qd(I, u, K);
            break;
          case "selectionchange":
            if (Pr) break;
          case "keydown":
          case "keyup":
            qd(I, u, K);
        }
        var et;
        if (Af)
          e: {
            switch (l) {
              case "compositionstart":
                var ct = "onCompositionStart";
                break e;
              case "compositionend":
                ct = "onCompositionEnd";
                break e;
              case "compositionupdate":
                ct = "onCompositionUpdate";
                break e;
            }
            ct = void 0;
          }
        else
          po ? Nd(l, u) && (ct = "onCompositionEnd") : l === "keydown" && u.keyCode === 229 && (ct = "onCompositionStart");
        ct && (Km && u.locale !== "ko" && (po || ct !== "onCompositionStart" ? ct === "onCompositionEnd" && po && (et = jm()) : (Ji = K, qm = "value" in Ji ? Ji.value : Ji.textContent, po = !0)), Te = Ks(j, ct), 0 < Te.length && (ct = new Np(
          ct,
          l,
          null,
          u,
          K
        ), I.push({ event: ct, listeners: Te }), et ? ct.data = et : (et = $m(u), et !== null && (ct.data = et)))), (et = Ma ? jp(l, u) : n1(l, u)) && (ct = Ks(j, "onBeforeInput"), 0 < ct.length && (Te = new Np(
          "onBeforeInput",
          "beforeinput",
          null,
          u,
          K
        ), I.push({
          event: Te,
          listeners: ct
        }), Te.data = et)), Qs(
          I,
          l,
          j,
          u,
          K
        );
      }
      Ng(I, n);
    });
  }
  function Js(l, n, u) {
    return {
      instance: l,
      listener: n,
      currentTarget: u
    };
  }
  function Ks(l, n) {
    for (var u = n + "Capture", c = []; l !== null; ) {
      var r = l, s = r.stateNode;
      if (r = r.tag, r !== 5 && r !== 26 && r !== 27 || s === null || (r = Wl(l, u), r != null && c.unshift(
        Js(l, r, s)
      ), r = Wl(l, n), r != null && c.push(
        Js(l, r, s)
      )), l.tag === 3) return c;
      l = l.return;
    }
    return [];
  }
  function Bg(l) {
    if (l === null) return null;
    do
      l = l.return;
    while (l && l.tag !== 5 && l.tag !== 27);
    return l || null;
  }
  function Lh(l, n, u, c, r) {
    for (var s = n._reactName, m = []; u !== null && u !== c; ) {
      var S = u, O = S.alternate, j = S.stateNode;
      if (S = S.tag, O !== null && O === c) break;
      S !== 5 && S !== 26 && S !== 27 || j === null || (O = j, r ? (j = Wl(u, s), j != null && m.unshift(
        Js(u, j, O)
      )) : r || (j = Wl(u, s), j != null && m.push(
        Js(u, j, O)
      ))), u = u.return;
    }
    m.length !== 0 && l.push({ event: n, listeners: m });
  }
  var Yg = /\r\n?/g, d0 = /\u0000|\uFFFD/g;
  function h0(l) {
    return (typeof l == "string" ? l : "" + l).replace(Yg, `
`).replace(d0, "");
  }
  function m0(l, n) {
    return n = h0(n), h0(l) === n;
  }
  function Kt(l, n, u, c, r, s) {
    switch (u) {
      case "children":
        typeof c == "string" ? n === "body" || n === "textarea" && c === "" || kn(l, c) : (typeof c == "number" || typeof c == "bigint") && n !== "body" && kn(l, "" + c);
        break;
      case "className":
        ga(l, "class", c);
        break;
      case "tabIndex":
        ga(l, "tabindex", c);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        ga(l, u, c);
        break;
      case "style":
        vf(l, c, s);
        break;
      case "data":
        if (n !== "object") {
          ga(l, "data", c);
          break;
        }
      case "src":
      case "href":
        if (c === "" && (n !== "a" || u !== "href")) {
          l.removeAttribute(u);
          break;
        }
        if (c == null || typeof c == "function" || typeof c == "symbol" || typeof c == "boolean") {
          l.removeAttribute(u);
          break;
        }
        c = La("" + c), l.setAttribute(u, c);
        break;
      case "action":
      case "formAction":
        if (typeof c == "function") {
          l.setAttribute(
            u,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof s == "function" && (u === "formAction" ? (n !== "input" && Kt(l, n, "name", r.name, r, null), Kt(
            l,
            n,
            "formEncType",
            r.formEncType,
            r,
            null
          ), Kt(
            l,
            n,
            "formMethod",
            r.formMethod,
            r,
            null
          ), Kt(
            l,
            n,
            "formTarget",
            r.formTarget,
            r,
            null
          )) : (Kt(l, n, "encType", r.encType, r, null), Kt(l, n, "method", r.method, r, null), Kt(l, n, "target", r.target, r, null)));
        if (c == null || typeof c == "symbol" || typeof c == "boolean") {
          l.removeAttribute(u);
          break;
        }
        c = La("" + c), l.setAttribute(u, c);
        break;
      case "onClick":
        c != null && (l.onclick = on);
        break;
      case "onScroll":
        c != null && vt("scroll", l);
        break;
      case "onScrollEnd":
        c != null && vt("scrollend", l);
        break;
      case "dangerouslySetInnerHTML":
        if (c != null) {
          if (typeof c != "object" || !("__html" in c))
            throw Error(E(61));
          if (u = c.__html, u != null) {
            if (r.children != null) throw Error(E(60));
            l.innerHTML = u;
          }
        }
        break;
      case "multiple":
        l.multiple = c && typeof c != "function" && typeof c != "symbol";
        break;
      case "muted":
        l.muted = c && typeof c != "function" && typeof c != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (c == null || typeof c == "function" || typeof c == "boolean" || typeof c == "symbol") {
          l.removeAttribute("xlink:href");
          break;
        }
        u = La("" + c), l.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          u
        );
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        c != null && typeof c != "function" && typeof c != "symbol" ? l.setAttribute(u, "" + c) : l.removeAttribute(u);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        c && typeof c != "function" && typeof c != "symbol" ? l.setAttribute(u, "") : l.removeAttribute(u);
        break;
      case "capture":
      case "download":
        c === !0 ? l.setAttribute(u, "") : c !== !1 && c != null && typeof c != "function" && typeof c != "symbol" ? l.setAttribute(u, c) : l.removeAttribute(u);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        c != null && typeof c != "function" && typeof c != "symbol" && !isNaN(c) && 1 <= c ? l.setAttribute(u, c) : l.removeAttribute(u);
        break;
      case "rowSpan":
      case "start":
        c == null || typeof c == "function" || typeof c == "symbol" || isNaN(c) ? l.removeAttribute(u) : l.setAttribute(u, c);
        break;
      case "popover":
        vt("beforetoggle", l), vt("toggle", l), za(l, "popover", c);
        break;
      case "xlinkActuate":
        hl(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          c
        );
        break;
      case "xlinkArcrole":
        hl(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          c
        );
        break;
      case "xlinkRole":
        hl(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          c
        );
        break;
      case "xlinkShow":
        hl(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          c
        );
        break;
      case "xlinkTitle":
        hl(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          c
        );
        break;
      case "xlinkType":
        hl(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          c
        );
        break;
      case "xmlBase":
        hl(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          c
        );
        break;
      case "xmlLang":
        hl(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          c
        );
        break;
      case "xmlSpace":
        hl(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          c
        );
        break;
      case "is":
        za(l, "is", c);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < u.length) || u[0] !== "o" && u[0] !== "O" || u[1] !== "n" && u[1] !== "N") && (u = Zr.get(u) || u, za(l, u, c));
    }
  }
  function y0(l, n, u, c, r, s) {
    switch (u) {
      case "style":
        vf(l, c, s);
        break;
      case "dangerouslySetInnerHTML":
        if (c != null) {
          if (typeof c != "object" || !("__html" in c))
            throw Error(E(61));
          if (u = c.__html, u != null) {
            if (r.children != null) throw Error(E(60));
            l.innerHTML = u;
          }
        }
        break;
      case "children":
        typeof c == "string" ? kn(l, c) : (typeof c == "number" || typeof c == "bigint") && kn(l, "" + c);
        break;
      case "onScroll":
        c != null && vt("scroll", l);
        break;
      case "onScrollEnd":
        c != null && vt("scrollend", l);
        break;
      case "onClick":
        c != null && (l.onclick = on);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!pa.hasOwnProperty(u))
          e: {
            if (u[0] === "o" && u[1] === "n" && (r = u.endsWith("Capture"), n = u.slice(2, r ? u.length - 7 : void 0), s = l[qt] || null, s = s != null ? s[u] : null, typeof s == "function" && l.removeEventListener(n, s, r), typeof c == "function")) {
              typeof s != "function" && s !== null && (u in l ? l[u] = null : l.hasAttribute(u) && l.removeAttribute(u)), l.addEventListener(n, c, r);
              break e;
            }
            u in l ? l[u] = c : c === !0 ? l.setAttribute(u, "") : za(l, u, c);
          }
    }
  }
  function ba(l, n, u) {
    switch (n) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        vt("error", l), vt("load", l);
        var c = !1, r = !1, s;
        for (s in u)
          if (u.hasOwnProperty(s)) {
            var m = u[s];
            if (m != null)
              switch (s) {
                case "src":
                  c = !0;
                  break;
                case "srcSet":
                  r = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(E(137, n));
                default:
                  Kt(l, n, s, m, u, null);
              }
          }
        r && Kt(l, n, "srcSet", u.srcSet, u, null), c && Kt(l, n, "src", u.src, u, null);
        return;
      case "input":
        vt("invalid", l);
        var S = s = m = r = null, O = null, j = null;
        for (c in u)
          if (u.hasOwnProperty(c)) {
            var K = u[c];
            if (K != null)
              switch (c) {
                case "name":
                  r = K;
                  break;
                case "type":
                  m = K;
                  break;
                case "checked":
                  O = K;
                  break;
                case "defaultChecked":
                  j = K;
                  break;
                case "value":
                  s = K;
                  break;
                case "defaultValue":
                  S = K;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (K != null)
                    throw Error(E(137, n));
                  break;
                default:
                  Kt(l, n, c, K, u, null);
              }
          }
        Qi(
          l,
          s,
          S,
          O,
          j,
          m,
          r,
          !1
        );
        return;
      case "select":
        vt("invalid", l), c = m = s = null;
        for (r in u)
          if (u.hasOwnProperty(r) && (S = u[r], S != null))
            switch (r) {
              case "value":
                s = S;
                break;
              case "defaultValue":
                m = S;
                break;
              case "multiple":
                c = S;
              default:
                Kt(l, n, r, S, u, null);
            }
        n = s, u = m, l.multiple = !!c, n != null ? Pu(l, !!c, n, !1) : u != null && Pu(l, !!c, u, !0);
        return;
      case "textarea":
        vt("invalid", l), s = r = c = null;
        for (m in u)
          if (u.hasOwnProperty(m) && (S = u[m], S != null))
            switch (m) {
              case "value":
                c = S;
                break;
              case "defaultValue":
                r = S;
                break;
              case "children":
                s = S;
                break;
              case "dangerouslySetInnerHTML":
                if (S != null) throw Error(E(91));
                break;
              default:
                Kt(l, n, m, S, u, null);
            }
        Od(l, c, r, s);
        return;
      case "option":
        for (O in u)
          u.hasOwnProperty(O) && (c = u[O], c != null) && (O === "selected" ? l.selected = c && typeof c != "function" && typeof c != "symbol" : Kt(l, n, O, c, u, null));
        return;
      case "dialog":
        vt("beforetoggle", l), vt("toggle", l), vt("cancel", l), vt("close", l);
        break;
      case "iframe":
      case "object":
        vt("load", l);
        break;
      case "video":
      case "audio":
        for (c = 0; c < ir.length; c++)
          vt(ir[c], l);
        break;
      case "image":
        vt("error", l), vt("load", l);
        break;
      case "details":
        vt("toggle", l);
        break;
      case "embed":
      case "source":
      case "link":
        vt("error", l), vt("load", l);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (j in u)
          if (u.hasOwnProperty(j) && (c = u[j], c != null))
            switch (j) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(E(137, n));
              default:
                Kt(l, n, j, c, u, null);
            }
        return;
      default:
        if (ro(n)) {
          for (K in u)
            u.hasOwnProperty(K) && (c = u[K], c !== void 0 && y0(
              l,
              n,
              K,
              c,
              u,
              void 0
            ));
          return;
        }
    }
    for (S in u)
      u.hasOwnProperty(S) && (c = u[S], c != null && Kt(l, n, S, c, u, null));
  }
  function p0(l, n, u, c) {
    switch (n) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var r = null, s = null, m = null, S = null, O = null, j = null, K = null;
        for (J in u) {
          var I = u[J];
          if (u.hasOwnProperty(J) && I != null)
            switch (J) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                O = I;
              default:
                c.hasOwnProperty(J) || Kt(l, n, J, null, c, I);
            }
        }
        for (var G in c) {
          var J = c[G];
          if (I = u[G], c.hasOwnProperty(G) && (J != null || I != null))
            switch (G) {
              case "type":
                s = J;
                break;
              case "name":
                r = J;
                break;
              case "checked":
                j = J;
                break;
              case "defaultChecked":
                K = J;
                break;
              case "value":
                m = J;
                break;
              case "defaultValue":
                S = J;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (J != null)
                  throw Error(E(137, n));
                break;
              default:
                J !== I && Kt(
                  l,
                  n,
                  G,
                  J,
                  c,
                  I
                );
            }
        }
        Vi(
          l,
          m,
          S,
          O,
          j,
          K,
          s,
          r
        );
        return;
      case "select":
        J = m = S = G = null;
        for (s in u)
          if (O = u[s], u.hasOwnProperty(s) && O != null)
            switch (s) {
              case "value":
                break;
              case "multiple":
                J = O;
              default:
                c.hasOwnProperty(s) || Kt(
                  l,
                  n,
                  s,
                  null,
                  c,
                  O
                );
            }
        for (r in c)
          if (s = c[r], O = u[r], c.hasOwnProperty(r) && (s != null || O != null))
            switch (r) {
              case "value":
                G = s;
                break;
              case "defaultValue":
                S = s;
                break;
              case "multiple":
                m = s;
              default:
                s !== O && Kt(
                  l,
                  n,
                  r,
                  s,
                  c,
                  O
                );
            }
        n = S, u = m, c = J, G != null ? Pu(l, !!u, G, !1) : !!c != !!u && (n != null ? Pu(l, !!u, n, !0) : Pu(l, !!u, u ? [] : "", !1));
        return;
      case "textarea":
        J = G = null;
        for (S in u)
          if (r = u[S], u.hasOwnProperty(S) && r != null && !c.hasOwnProperty(S))
            switch (S) {
              case "value":
                break;
              case "children":
                break;
              default:
                Kt(l, n, S, null, c, r);
            }
        for (m in c)
          if (r = c[m], s = u[m], c.hasOwnProperty(m) && (r != null || s != null))
            switch (m) {
              case "value":
                G = r;
                break;
              case "defaultValue":
                J = r;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (r != null) throw Error(E(91));
                break;
              default:
                r !== s && Kt(l, n, m, r, c, s);
            }
        fo(l, G, J);
        return;
      case "option":
        for (var be in u)
          G = u[be], u.hasOwnProperty(be) && G != null && !c.hasOwnProperty(be) && (be === "selected" ? l.selected = !1 : Kt(
            l,
            n,
            be,
            null,
            c,
            G
          ));
        for (O in c)
          G = c[O], J = u[O], c.hasOwnProperty(O) && G !== J && (G != null || J != null) && (O === "selected" ? l.selected = G && typeof G != "function" && typeof G != "symbol" : Kt(
            l,
            n,
            O,
            G,
            c,
            J
          ));
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var we in u)
          G = u[we], u.hasOwnProperty(we) && G != null && !c.hasOwnProperty(we) && Kt(l, n, we, null, c, G);
        for (j in c)
          if (G = c[j], J = u[j], c.hasOwnProperty(j) && G !== J && (G != null || J != null))
            switch (j) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (G != null)
                  throw Error(E(137, n));
                break;
              default:
                Kt(
                  l,
                  n,
                  j,
                  G,
                  c,
                  J
                );
            }
        return;
      default:
        if (ro(n)) {
          for (var $t in u)
            G = u[$t], u.hasOwnProperty($t) && G !== void 0 && !c.hasOwnProperty($t) && y0(
              l,
              n,
              $t,
              void 0,
              c,
              G
            );
          for (K in c)
            G = c[K], J = u[K], !c.hasOwnProperty(K) || G === J || G === void 0 && J === void 0 || y0(
              l,
              n,
              K,
              G,
              c,
              J
            );
          return;
        }
    }
    for (var N in u)
      G = u[N], u.hasOwnProperty(N) && G != null && !c.hasOwnProperty(N) && Kt(l, n, N, null, c, G);
    for (I in c)
      G = c[I], J = u[I], !c.hasOwnProperty(I) || G === J || G == null && J == null || Kt(l, n, I, G, c, J);
  }
  function Xh(l) {
    switch (l) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function g0() {
    if (typeof performance.getEntriesByType == "function") {
      for (var l = 0, n = 0, u = performance.getEntriesByType("resource"), c = 0; c < u.length; c++) {
        var r = u[c], s = r.transferSize, m = r.initiatorType, S = r.duration;
        if (s && S && Xh(m)) {
          for (m = 0, S = r.responseEnd, c += 1; c < u.length; c++) {
            var O = u[c], j = O.startTime;
            if (j > S) break;
            var K = O.transferSize, I = O.initiatorType;
            K && Xh(I) && (O = O.responseEnd, m += K * (O < S ? 1 : (S - j) / (O - j)));
          }
          if (--c, n += 8 * (s + m) / (r.duration / 1e3), l++, 10 < l) break;
        }
      }
      if (0 < l) return n / l / 1e6;
    }
    return navigator.connection && (l = navigator.connection.downlink, typeof l == "number") ? l : 5;
  }
  var Vh = null, Qh = null;
  function kc(l) {
    return l.nodeType === 9 ? l : l.ownerDocument;
  }
  function wg(l) {
    switch (l) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function v0(l, n) {
    if (l === 0)
      switch (n) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return l === 1 && n === "foreignObject" ? 0 : l;
  }
  function or(l, n) {
    return l === "textarea" || l === "noscript" || typeof n.children == "string" || typeof n.children == "number" || typeof n.children == "bigint" || typeof n.dangerouslySetInnerHTML == "object" && n.dangerouslySetInnerHTML !== null && n.dangerouslySetInnerHTML.__html != null;
  }
  var Zh = null;
  function o1() {
    var l = window.event;
    return l && l.type === "popstate" ? l === Zh ? !1 : (Zh = l, !0) : (Zh = null, !1);
  }
  var $s = typeof setTimeout == "function" ? setTimeout : void 0, qg = typeof clearTimeout == "function" ? clearTimeout : void 0, Ko = typeof Promise == "function" ? Promise : void 0, jg = typeof queueMicrotask == "function" ? queueMicrotask : typeof Ko < "u" ? function(l) {
    return Ko.resolve(null).then(l).catch(S0);
  } : $s;
  function S0(l) {
    setTimeout(function() {
      throw l;
    });
  }
  function qu(l) {
    return l === "head";
  }
  function b0(l, n) {
    var u = n, c = 0;
    do {
      var r = u.nextSibling;
      if (l.removeChild(u), r && r.nodeType === 8)
        if (u = r.data, u === "/$" || u === "/&") {
          if (c === 0) {
            l.removeChild(r), br(n);
            return;
          }
          c--;
        } else if (u === "$" || u === "$?" || u === "$~" || u === "$!" || u === "&")
          c++;
        else if (u === "html")
          $o(l.ownerDocument.documentElement);
        else if (u === "head") {
          u = l.ownerDocument.head, $o(u);
          for (var s = u.firstChild; s; ) {
            var m = s.nextSibling, S = s.nodeName;
            s[ya] || S === "SCRIPT" || S === "STYLE" || S === "LINK" && s.rel.toLowerCase() === "stylesheet" || u.removeChild(s), s = m;
          }
        } else
          u === "body" && $o(l.ownerDocument.body);
      u = r;
    } while (u);
    br(n);
  }
  function Cl(l, n) {
    var u = l;
    l = 0;
    do {
      var c = u.nextSibling;
      if (u.nodeType === 1 ? n ? (u._stashedDisplay = u.style.display, u.style.display = "none") : (u.style.display = u._stashedDisplay || "", u.getAttribute("style") === "" && u.removeAttribute("style")) : u.nodeType === 3 && (n ? (u._stashedText = u.nodeValue, u.nodeValue = "") : u.nodeValue = u._stashedText || ""), c && c.nodeType === 8)
        if (u = c.data, u === "/$") {
          if (l === 0) break;
          l--;
        } else
          u !== "$" && u !== "$?" && u !== "$~" && u !== "$!" || l++;
      u = c;
    } while (u);
  }
  function ks(l) {
    var n = l.firstChild;
    for (n && n.nodeType === 10 && (n = n.nextSibling); n; ) {
      var u = n;
      switch (n = n.nextSibling, u.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          ks(u), hu(u);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (u.rel.toLowerCase() === "stylesheet") continue;
      }
      l.removeChild(u);
    }
  }
  function f1(l, n, u, c) {
    for (; l.nodeType === 1; ) {
      var r = u;
      if (l.nodeName.toLowerCase() !== n.toLowerCase()) {
        if (!c && (l.nodeName !== "INPUT" || l.type !== "hidden"))
          break;
      } else if (c) {
        if (!l[ya])
          switch (n) {
            case "meta":
              if (!l.hasAttribute("itemprop")) break;
              return l;
            case "link":
              if (s = l.getAttribute("rel"), s === "stylesheet" && l.hasAttribute("data-precedence"))
                break;
              if (s !== r.rel || l.getAttribute("href") !== (r.href == null || r.href === "" ? null : r.href) || l.getAttribute("crossorigin") !== (r.crossOrigin == null ? null : r.crossOrigin) || l.getAttribute("title") !== (r.title == null ? null : r.title))
                break;
              return l;
            case "style":
              if (l.hasAttribute("data-precedence")) break;
              return l;
            case "script":
              if (s = l.getAttribute("src"), (s !== (r.src == null ? null : r.src) || l.getAttribute("type") !== (r.type == null ? null : r.type) || l.getAttribute("crossorigin") !== (r.crossOrigin == null ? null : r.crossOrigin)) && s && l.hasAttribute("async") && !l.hasAttribute("itemprop"))
                break;
              return l;
            default:
              return l;
          }
      } else if (n === "input" && l.type === "hidden") {
        var s = r.name == null ? null : "" + r.name;
        if (r.type === "hidden" && l.getAttribute("name") === s)
          return l;
      } else return l;
      if (l = ln(l.nextSibling), l === null) break;
    }
    return null;
  }
  function st(l, n, u) {
    if (n === "") return null;
    for (; l.nodeType !== 3; )
      if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !u || (l = ln(l.nextSibling), l === null)) return null;
    return l;
  }
  function Gg(l, n) {
    for (; l.nodeType !== 8; )
      if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !n || (l = ln(l.nextSibling), l === null)) return null;
    return l;
  }
  function iu(l) {
    return l.data === "$?" || l.data === "$~";
  }
  function Fc(l) {
    return l.data === "$!" || l.data === "$?" && l.ownerDocument.readyState !== "loading";
  }
  function fr(l, n) {
    var u = l.ownerDocument;
    if (l.data === "$~") l._reactRetry = n;
    else if (l.data !== "$?" || u.readyState !== "loading")
      n();
    else {
      var c = function() {
        n(), u.removeEventListener("DOMContentLoaded", c);
      };
      u.addEventListener("DOMContentLoaded", c), l._reactRetry = c;
    }
  }
  function ln(l) {
    for (; l != null; l = l.nextSibling) {
      var n = l.nodeType;
      if (n === 1 || n === 3) break;
      if (n === 8) {
        if (n = l.data, n === "$" || n === "$!" || n === "$?" || n === "$~" || n === "&" || n === "F!" || n === "F")
          break;
        if (n === "/$" || n === "/&") return null;
      }
    }
    return l;
  }
  var Fs = null;
  function Jh(l) {
    l = l.nextSibling;
    for (var n = 0; l; ) {
      if (l.nodeType === 8) {
        var u = l.data;
        if (u === "/$" || u === "/&") {
          if (n === 0)
            return ln(l.nextSibling);
          n--;
        } else
          u !== "$" && u !== "$!" && u !== "$?" && u !== "$~" && u !== "&" || n++;
      }
      l = l.nextSibling;
    }
    return null;
  }
  function ju(l) {
    l = l.previousSibling;
    for (var n = 0; l; ) {
      if (l.nodeType === 8) {
        var u = l.data;
        if (u === "$" || u === "$!" || u === "$?" || u === "$~" || u === "&") {
          if (n === 0) return l;
          n--;
        } else u !== "/$" && u !== "/&" || n++;
      }
      l = l.previousSibling;
    }
    return null;
  }
  function rr(l, n, u) {
    switch (n = kc(u), l) {
      case "html":
        if (l = n.documentElement, !l) throw Error(E(452));
        return l;
      case "head":
        if (l = n.head, !l) throw Error(E(453));
        return l;
      case "body":
        if (l = n.body, !l) throw Error(E(454));
        return l;
      default:
        throw Error(E(451));
    }
  }
  function $o(l) {
    for (var n = l.attributes; n.length; )
      l.removeAttributeNode(n[0]);
    hu(l);
  }
  var yn = /* @__PURE__ */ new Map(), Ws = /* @__PURE__ */ new Set();
  function Ha(l) {
    return typeof l.getRootNode == "function" ? l.getRootNode() : l.nodeType === 9 ? l : l.ownerDocument;
  }
  var Gu = v.d;
  v.d = {
    f: r1,
    r: Lg,
    D: Z,
    C: Yt,
    L: s1,
    m: E0,
    X: sc,
    S: T0,
    M: Wc
  };
  function r1() {
    var l = Gu.f(), n = tr();
    return l || n;
  }
  function Lg(l) {
    var n = An(l);
    n !== null && n.tag === 5 && n.type === "form" ? Zt(n) : Gu.r(l);
  }
  var sr = typeof document > "u" ? null : document;
  function ql(l, n, u) {
    var c = sr;
    if (c && typeof n == "string" && n) {
      var r = va(n);
      r = 'link[rel="' + l + '"][href="' + r + '"]', typeof u == "string" && (r += '[crossorigin="' + u + '"]'), Ws.has(r) || (Ws.add(r), l = { rel: l, crossOrigin: u, href: n }, c.querySelector(r) === null && (n = c.createElement("link"), ba(n, "link", l), Mt(n), c.head.appendChild(n)));
    }
  }
  function Z(l) {
    Gu.D(l), ql("dns-prefetch", l, null);
  }
  function Yt(l, n) {
    Gu.C(l, n), ql("preconnect", l, n);
  }
  function s1(l, n, u) {
    Gu.L(l, n, u);
    var c = sr;
    if (c && l && n) {
      var r = 'link[rel="preload"][as="' + va(n) + '"]';
      n === "image" && u && u.imageSrcSet ? (r += '[imagesrcset="' + va(
        u.imageSrcSet
      ) + '"]', typeof u.imageSizes == "string" && (r += '[imagesizes="' + va(
        u.imageSizes
      ) + '"]')) : r += '[href="' + va(l) + '"]';
      var s = r;
      switch (n) {
        case "style":
          s = qn(l);
          break;
        case "script":
          s = ko(l);
      }
      yn.has(s) || (l = Y(
        {
          rel: "preload",
          href: n === "image" && u && u.imageSrcSet ? void 0 : l,
          as: n
        },
        u
      ), yn.set(s, l), c.querySelector(r) !== null || n === "style" && c.querySelector(Ic(s)) || n === "script" && c.querySelector(mr(s)) || (n = c.createElement("link"), ba(n, "link", l), Mt(n), c.head.appendChild(n)));
    }
  }
  function E0(l, n) {
    Gu.m(l, n);
    var u = sr;
    if (u && l) {
      var c = n && typeof n.as == "string" ? n.as : "script", r = 'link[rel="modulepreload"][as="' + va(c) + '"][href="' + va(l) + '"]', s = r;
      switch (c) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          s = ko(l);
      }
      if (!yn.has(s) && (l = Y({ rel: "modulepreload", href: l }, n), yn.set(s, l), u.querySelector(r) === null)) {
        switch (c) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (u.querySelector(mr(s)))
              return;
        }
        c = u.createElement("link"), ba(c, "link", l), Mt(c), u.head.appendChild(c);
      }
    }
  }
  function T0(l, n, u) {
    Gu.S(l, n, u);
    var c = sr;
    if (c && l) {
      var r = Wu(c).hoistableStyles, s = qn(l);
      n = n || "default";
      var m = r.get(s);
      if (!m) {
        var S = { loading: 0, preload: null };
        if (m = c.querySelector(
          Ic(s)
        ))
          S.loading = 5;
        else {
          l = Y(
            { rel: "stylesheet", href: l, "data-precedence": n },
            u
          ), (u = yn.get(s)) && Kh(l, u);
          var O = m = c.createElement("link");
          Mt(O), ba(O, "link", l), O._p = new Promise(function(j, K) {
            O.onload = j, O.onerror = K;
          }), O.addEventListener("load", function() {
            S.loading |= 1;
          }), O.addEventListener("error", function() {
            S.loading |= 2;
          }), S.loading |= 4, Is(m, n, c);
        }
        m = {
          type: "stylesheet",
          instance: m,
          count: 1,
          state: S
        }, r.set(s, m);
      }
    }
  }
  function sc(l, n) {
    Gu.X(l, n);
    var u = sr;
    if (u && l) {
      var c = Wu(u).hoistableScripts, r = ko(l), s = c.get(r);
      s || (s = u.querySelector(mr(r)), s || (l = Y({ src: l, async: !0 }, n), (n = yn.get(r)) && $h(l, n), s = u.createElement("script"), Mt(s), ba(s, "link", l), u.head.appendChild(s)), s = {
        type: "script",
        instance: s,
        count: 1,
        state: null
      }, c.set(r, s));
    }
  }
  function Wc(l, n) {
    Gu.M(l, n);
    var u = sr;
    if (u && l) {
      var c = Wu(u).hoistableScripts, r = ko(l), s = c.get(r);
      s || (s = u.querySelector(mr(r)), s || (l = Y({ src: l, async: !0, type: "module" }, n), (n = yn.get(r)) && $h(l, n), s = u.createElement("script"), Mt(s), ba(s, "link", l), u.head.appendChild(s)), s = {
        type: "script",
        instance: s,
        count: 1,
        state: null
      }, c.set(r, s));
    }
  }
  function dr(l, n, u, c) {
    var r = (r = qe.current) ? Ha(r) : null;
    if (!r) throw Error(E(446));
    switch (l) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof u.precedence == "string" && typeof u.href == "string" ? (n = qn(u.href), u = Wu(
          r
        ).hoistableStyles, c = u.get(n), c || (c = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, u.set(n, c)), c) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (u.rel === "stylesheet" && typeof u.href == "string" && typeof u.precedence == "string") {
          l = qn(u.href);
          var s = Wu(
            r
          ).hoistableStyles, m = s.get(l);
          if (m || (r = r.ownerDocument || r, m = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, s.set(l, m), (s = r.querySelector(
            Ic(l)
          )) && !s._p && (m.instance = s, m.state.loading = 5), yn.has(l) || (u = {
            rel: "preload",
            as: "style",
            href: u.href,
            crossOrigin: u.crossOrigin,
            integrity: u.integrity,
            media: u.media,
            hrefLang: u.hrefLang,
            referrerPolicy: u.referrerPolicy
          }, yn.set(l, u), s || Xg(
            r,
            l,
            u,
            m.state
          ))), n && c === null)
            throw Error(E(528, ""));
          return m;
        }
        if (n && c !== null)
          throw Error(E(529, ""));
        return null;
      case "script":
        return n = u.async, u = u.src, typeof u == "string" && n && typeof n != "function" && typeof n != "symbol" ? (n = ko(u), u = Wu(
          r
        ).hoistableScripts, c = u.get(n), c || (c = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, u.set(n, c)), c) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(E(444, l));
    }
  }
  function qn(l) {
    return 'href="' + va(l) + '"';
  }
  function Ic(l) {
    return 'link[rel="stylesheet"][' + l + "]";
  }
  function hr(l) {
    return Y({}, l, {
      "data-precedence": l.precedence,
      precedence: null
    });
  }
  function Xg(l, n, u, c) {
    l.querySelector('link[rel="preload"][as="style"][' + n + "]") ? c.loading = 1 : (n = l.createElement("link"), c.preload = n, n.addEventListener("load", function() {
      return c.loading |= 1;
    }), n.addEventListener("error", function() {
      return c.loading |= 2;
    }), ba(n, "link", u), Mt(n), l.head.appendChild(n));
  }
  function ko(l) {
    return '[src="' + va(l) + '"]';
  }
  function mr(l) {
    return "script[async]" + l;
  }
  function A0(l, n, u) {
    if (n.count++, n.instance === null)
      switch (n.type) {
        case "style":
          var c = l.querySelector(
            'style[data-href~="' + va(u.href) + '"]'
          );
          if (c)
            return n.instance = c, Mt(c), c;
          var r = Y({}, u, {
            "data-href": u.href,
            "data-precedence": u.precedence,
            href: null,
            precedence: null
          });
          return c = (l.ownerDocument || l).createElement(
            "style"
          ), Mt(c), ba(c, "style", r), Is(c, u.precedence, l), n.instance = c;
        case "stylesheet":
          r = qn(u.href);
          var s = l.querySelector(
            Ic(r)
          );
          if (s)
            return n.state.loading |= 4, n.instance = s, Mt(s), s;
          c = hr(u), (r = yn.get(r)) && Kh(c, r), s = (l.ownerDocument || l).createElement("link"), Mt(s);
          var m = s;
          return m._p = new Promise(function(S, O) {
            m.onload = S, m.onerror = O;
          }), ba(s, "link", c), n.state.loading |= 4, Is(s, u.precedence, l), n.instance = s;
        case "script":
          return s = ko(u.src), (r = l.querySelector(
            mr(s)
          )) ? (n.instance = r, Mt(r), r) : (c = u, (r = yn.get(s)) && (c = Y({}, u), $h(c, r)), l = l.ownerDocument || l, r = l.createElement("script"), Mt(r), ba(r, "link", c), l.head.appendChild(r), n.instance = r);
        case "void":
          return null;
        default:
          throw Error(E(443, n.type));
      }
    else
      n.type === "stylesheet" && (n.state.loading & 4) === 0 && (c = n.instance, n.state.loading |= 4, Is(c, u.precedence, l));
    return n.instance;
  }
  function Is(l, n, u) {
    for (var c = u.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), r = c.length ? c[c.length - 1] : null, s = r, m = 0; m < c.length; m++) {
      var S = c[m];
      if (S.dataset.precedence === n) s = S;
      else if (s !== r) break;
    }
    s ? s.parentNode.insertBefore(l, s.nextSibling) : (n = u.nodeType === 9 ? u.head : u, n.insertBefore(l, n.firstChild));
  }
  function Kh(l, n) {
    l.crossOrigin == null && (l.crossOrigin = n.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = n.referrerPolicy), l.title == null && (l.title = n.title);
  }
  function $h(l, n) {
    l.crossOrigin == null && (l.crossOrigin = n.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = n.referrerPolicy), l.integrity == null && (l.integrity = n.integrity);
  }
  var yr = null;
  function R0(l, n, u) {
    if (yr === null) {
      var c = /* @__PURE__ */ new Map(), r = yr = /* @__PURE__ */ new Map();
      r.set(u, c);
    } else
      r = yr, c = r.get(u), c || (c = /* @__PURE__ */ new Map(), r.set(u, c));
    if (c.has(l)) return c;
    for (c.set(l, null), u = u.getElementsByTagName(l), r = 0; r < u.length; r++) {
      var s = u[r];
      if (!(s[ya] || s[Re] || l === "link" && s.getAttribute("rel") === "stylesheet") && s.namespaceURI !== "http://www.w3.org/2000/svg") {
        var m = s.getAttribute(n) || "";
        m = l + m;
        var S = c.get(m);
        S ? S.push(s) : c.set(m, [s]);
      }
    }
    return c;
  }
  function kh(l, n, u) {
    l = l.ownerDocument || l, l.head.insertBefore(
      u,
      n === "title" ? l.querySelector("head > title") : null
    );
  }
  function _0(l, n, u) {
    if (u === 1 || n.itemProp != null) return !1;
    switch (l) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof n.precedence != "string" || typeof n.href != "string" || n.href === "")
          break;
        return !0;
      case "link":
        if (typeof n.rel != "string" || typeof n.href != "string" || n.href === "" || n.onLoad || n.onError)
          break;
        return n.rel === "stylesheet" ? (l = n.disabled, typeof n.precedence == "string" && l == null) : !0;
      case "script":
        if (n.async && typeof n.async != "function" && typeof n.async != "symbol" && !n.onLoad && !n.onError && n.src && typeof n.src == "string")
          return !0;
    }
    return !1;
  }
  function pn(l) {
    return !(l.type === "stylesheet" && (l.state.loading & 3) === 0);
  }
  function Ai(l, n, u, c) {
    if (u.type === "stylesheet" && (typeof c.media != "string" || matchMedia(c.media).matches !== !1) && (u.state.loading & 4) === 0) {
      if (u.instance === null) {
        var r = qn(c.href), s = n.querySelector(
          Ic(r)
        );
        if (s) {
          n = s._p, n !== null && typeof n == "object" && typeof n.then == "function" && (l.count++, l = Fh.bind(l), n.then(l, l)), u.state.loading |= 4, u.instance = s, Mt(s);
          return;
        }
        s = n.ownerDocument || n, c = hr(c), (r = yn.get(r)) && Kh(c, r), s = s.createElement("link"), Mt(s);
        var m = s;
        m._p = new Promise(function(S, O) {
          m.onload = S, m.onerror = O;
        }), ba(s, "link", c), u.instance = s;
      }
      l.stylesheets === null && (l.stylesheets = /* @__PURE__ */ new Map()), l.stylesheets.set(u, n), (n = u.state.preload) && (u.state.loading & 3) === 0 && (l.count++, u = Fh.bind(l), n.addEventListener("load", u), n.addEventListener("error", u));
    }
  }
  var jn = 0;
  function O0(l, n) {
    return l.stylesheets && l.count === 0 && Ih(l, l.stylesheets), 0 < l.count || 0 < l.imgCount ? function(u) {
      var c = setTimeout(function() {
        if (l.stylesheets && Ih(l, l.stylesheets), l.unsuspend) {
          var s = l.unsuspend;
          l.unsuspend = null, s();
        }
      }, 6e4 + n);
      0 < l.imgBytes && jn === 0 && (jn = 62500 * g0());
      var r = setTimeout(
        function() {
          if (l.waitingForImages = !1, l.count === 0 && (l.stylesheets && Ih(l, l.stylesheets), l.unsuspend)) {
            var s = l.unsuspend;
            l.unsuspend = null, s();
          }
        },
        (l.imgBytes > jn ? 50 : 800) + n
      );
      return l.unsuspend = u, function() {
        l.unsuspend = null, clearTimeout(c), clearTimeout(r);
      };
    } : null;
  }
  function Fh() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) Ih(this, this.stylesheets);
      else if (this.unsuspend) {
        var l = this.unsuspend;
        this.unsuspend = null, l();
      }
    }
  }
  var Wh = null;
  function Ih(l, n) {
    l.stylesheets = null, l.unsuspend !== null && (l.count++, Wh = /* @__PURE__ */ new Map(), n.forEach(na, l), Wh = null, Fh.call(l));
  }
  function na(l, n) {
    if (!(n.state.loading & 4)) {
      var u = Wh.get(l);
      if (u) var c = u.get(null);
      else {
        u = /* @__PURE__ */ new Map(), Wh.set(l, u);
        for (var r = l.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), s = 0; s < r.length; s++) {
          var m = r[s];
          (m.nodeName === "LINK" || m.getAttribute("media") !== "not all") && (u.set(m.dataset.precedence, m), c = m);
        }
        c && u.set(null, c);
      }
      r = n.instance, m = r.getAttribute("data-precedence"), s = u.get(m) || c, s === c && u.set(null, r), u.set(m, r), this.count++, c = Fh.bind(this), r.addEventListener("load", c), r.addEventListener("error", c), s ? s.parentNode.insertBefore(r, s.nextSibling) : (l = l.nodeType === 9 ? l.head : l, l.insertBefore(r, l.firstChild)), n.state.loading |= 4;
    }
  }
  var Ps = {
    $$typeof: tt,
    Provider: null,
    Consumer: null,
    _currentValue: ue,
    _currentValue2: ue,
    _threadCount: 0
  };
  function D0(l, n, u, c, r, s, m, S, O) {
    this.tag = 1, this.containerInfo = l, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = ja(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = ja(0), this.hiddenUpdates = ja(null), this.identifierPrefix = c, this.onUncaughtError = r, this.onCaughtError = s, this.onRecoverableError = m, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = O, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Ph(l, n, u, c, r, s, m, S, O, j, K, I) {
    return l = new D0(
      l,
      n,
      u,
      m,
      O,
      j,
      K,
      I,
      S
    ), n = 1, s === !0 && (n |= 24), s = bl(3, null, null, n), l.current = s, s.stateNode = l, n = cs(), n.refCount++, l.pooledCache = n, n.refCount++, s.memoizedState = {
      element: c,
      isDehydrated: u,
      cache: n
    }, ms(s), l;
  }
  function Fo(l) {
    return l ? (l = Za, l) : Za;
  }
  function Vg(l, n, u, c, r, s) {
    r = Fo(r), c.context === null ? c.context = r : c.pendingContext = r, c = tc(n), c.payload = { element: u }, s = s === void 0 ? null : s, s !== null && (c.callback = s), u = Un(l, c, n), u !== null && (tn(u, l, n), Yc(u, l, n));
  }
  function em(l, n) {
    if (l = l.memoizedState, l !== null && l.dehydrated !== null) {
      var u = l.retryLane;
      l.retryLane = u !== 0 && u < n ? u : n;
    }
  }
  function z0(l, n) {
    em(l, n), (l = l.alternate) && em(l, n);
  }
  function Qg(l) {
    if (l.tag === 13 || l.tag === 31) {
      var n = $i(l, 67108864);
      n !== null && tn(n, l, 67108864), z0(l, 67108864);
    }
  }
  function Wo(l) {
    if (l.tag === 13 || l.tag === 31) {
      var n = mn();
      n = uo(n);
      var u = $i(l, n);
      u !== null && tn(u, l, n), z0(l, n);
    }
  }
  var Jl = !0;
  function Ri(l, n, u, c) {
    var r = D.T;
    D.T = null;
    var s = v.p;
    try {
      v.p = 2, Ea(l, n, u, c);
    } finally {
      v.p = s, D.T = r;
    }
  }
  function _i(l, n, u, c) {
    var r = D.T;
    D.T = null;
    var s = v.p;
    try {
      v.p = 8, Ea(l, n, u, c);
    } finally {
      v.p = s, D.T = r;
    }
  }
  function Ea(l, n, u, c) {
    if (Jl) {
      var r = M0(c);
      if (r === null)
        s0(
          l,
          n,
          c,
          tm,
          u
        ), dc(l, c);
      else if (d1(
        r,
        l,
        n,
        u,
        c
      ))
        c.stopPropagation();
      else if (dc(l, c), n & 4 && -1 < an.indexOf(l)) {
        for (; r !== null; ) {
          var s = An(r);
          if (s !== null)
            switch (s.tag) {
              case 3:
                if (s = s.stateNode, s.current.memoizedState.isDehydrated) {
                  var m = Me(s.pendingLanes);
                  if (m !== 0) {
                    var S = s;
                    for (S.pendingLanes |= 2, S.entangledLanes |= 2; m; ) {
                      var O = 1 << 31 - _l(m);
                      S.entanglements[1] |= O, m &= ~O;
                    }
                    Ti(s), (Ct & 6) === 0 && (Bt = ul() + 500, rc(0));
                  }
                }
                break;
              case 31:
              case 13:
                S = $i(s, 2), S !== null && tn(S, s, 2), tr(), z0(s, 2);
            }
          if (s = M0(c), s === null && s0(
            l,
            n,
            c,
            tm,
            u
          ), s === r) break;
          r = s;
        }
        r !== null && c.stopPropagation();
      } else
        s0(
          l,
          n,
          c,
          null,
          u
        );
    }
  }
  function M0(l) {
    return l = Ec(l), pr(l);
  }
  var tm = null;
  function pr(l) {
    if (tm = null, l = xl(l), l !== null) {
      var n = te(l);
      if (n === null) l = null;
      else {
        var u = n.tag;
        if (u === 13) {
          if (l = he(n), l !== null) return l;
          l = null;
        } else if (u === 31) {
          if (l = Q(n), l !== null) return l;
          l = null;
        } else if (u === 3) {
          if (n.stateNode.current.memoizedState.isDehydrated)
            return n.tag === 3 ? n.stateNode.containerInfo : null;
          l = null;
        } else n !== l && (l = null);
      }
    }
    return tm = l, null;
  }
  function ed(l) {
    switch (l) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (ha()) {
          case Gl:
            return 2;
          case un:
            return 8;
          case Ll:
          case bn:
            return 32;
          case su:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var gr = !1, Kl = null, Ta = null, xa = null, Pc = /* @__PURE__ */ new Map(), cu = /* @__PURE__ */ new Map(), fl = [], an = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function dc(l, n) {
    switch (l) {
      case "focusin":
      case "focusout":
        Kl = null;
        break;
      case "dragenter":
      case "dragleave":
        Ta = null;
        break;
      case "mouseover":
      case "mouseout":
        xa = null;
        break;
      case "pointerover":
      case "pointerout":
        Pc.delete(n.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        cu.delete(n.pointerId);
    }
  }
  function Io(l, n, u, c, r, s) {
    return l === null || l.nativeEvent !== s ? (l = {
      blockedOn: n,
      domEventName: u,
      eventSystemFlags: c,
      nativeEvent: s,
      targetContainers: [r]
    }, n !== null && (n = An(n), n !== null && Qg(n)), l) : (l.eventSystemFlags |= c, n = l.targetContainers, r !== null && n.indexOf(r) === -1 && n.push(r), l);
  }
  function d1(l, n, u, c, r) {
    switch (n) {
      case "focusin":
        return Kl = Io(
          Kl,
          l,
          n,
          u,
          c,
          r
        ), !0;
      case "dragenter":
        return Ta = Io(
          Ta,
          l,
          n,
          u,
          c,
          r
        ), !0;
      case "mouseover":
        return xa = Io(
          xa,
          l,
          n,
          u,
          c,
          r
        ), !0;
      case "pointerover":
        var s = r.pointerId;
        return Pc.set(
          s,
          Io(
            Pc.get(s) || null,
            l,
            n,
            u,
            c,
            r
          )
        ), !0;
      case "gotpointercapture":
        return s = r.pointerId, cu.set(
          s,
          Io(
            cu.get(s) || null,
            l,
            n,
            u,
            c,
            r
          )
        ), !0;
    }
    return !1;
  }
  function Zg(l) {
    var n = xl(l.target);
    if (n !== null) {
      var u = te(n);
      if (u !== null) {
        if (n = u.tag, n === 13) {
          if (n = he(u), n !== null) {
            l.blockedOn = n, Ge(l.priority, function() {
              Wo(u);
            });
            return;
          }
        } else if (n === 31) {
          if (n = Q(u), n !== null) {
            l.blockedOn = n, Ge(l.priority, function() {
              Wo(u);
            });
            return;
          }
        } else if (n === 3 && u.stateNode.current.memoizedState.isDehydrated) {
          l.blockedOn = u.tag === 3 ? u.stateNode.containerInfo : null;
          return;
        }
      }
    }
    l.blockedOn = null;
  }
  function td(l) {
    if (l.blockedOn !== null) return !1;
    for (var n = l.targetContainers; 0 < n.length; ) {
      var u = M0(l.nativeEvent);
      if (u === null) {
        u = l.nativeEvent;
        var c = new u.constructor(
          u.type,
          u
        );
        so = c, u.target.dispatchEvent(c), so = null;
      } else
        return n = An(u), n !== null && Qg(n), l.blockedOn = u, !1;
      n.shift();
    }
    return !0;
  }
  function vr(l, n, u) {
    td(l) && u.delete(n);
  }
  function Jg() {
    gr = !1, Kl !== null && td(Kl) && (Kl = null), Ta !== null && td(Ta) && (Ta = null), xa !== null && td(xa) && (xa = null), Pc.forEach(vr), cu.forEach(vr);
  }
  function Oi(l, n) {
    l.blockedOn === n && (l.blockedOn = null, gr || (gr = !0, T.unstable_scheduleCallback(
      T.unstable_NormalPriority,
      Jg
    )));
  }
  var Sr = null;
  function Kg(l) {
    Sr !== l && (Sr = l, T.unstable_scheduleCallback(
      T.unstable_NormalPriority,
      function() {
        Sr === l && (Sr = null);
        for (var n = 0; n < l.length; n += 3) {
          var u = l[n], c = l[n + 1], r = l[n + 2];
          if (typeof c != "function") {
            if (pr(c || u) === null)
              continue;
            break;
          }
          var s = An(u);
          s !== null && (l.splice(n, 3), n -= 3, Xf(
            s,
            {
              pending: !0,
              data: r,
              method: u.method,
              action: c
            },
            c,
            r
          ));
        }
      }
    ));
  }
  function br(l) {
    function n(O) {
      return Oi(O, l);
    }
    Kl !== null && Oi(Kl, l), Ta !== null && Oi(Ta, l), xa !== null && Oi(xa, l), Pc.forEach(n), cu.forEach(n);
    for (var u = 0; u < fl.length; u++) {
      var c = fl[u];
      c.blockedOn === l && (c.blockedOn = null);
    }
    for (; 0 < fl.length && (u = fl[0], u.blockedOn === null); )
      Zg(u), u.blockedOn === null && fl.shift();
    if (u = (l.ownerDocument || l).$$reactFormReplay, u != null)
      for (c = 0; c < u.length; c += 3) {
        var r = u[c], s = u[c + 1], m = r[qt] || null;
        if (typeof s == "function")
          m || Kg(u);
        else if (m) {
          var S = null;
          if (s && s.hasAttribute("formAction")) {
            if (r = s, m = s[qt] || null)
              S = m.formAction;
            else if (pr(r) !== null) continue;
          } else S = m.action;
          typeof S == "function" ? u[c + 1] = S : (u.splice(c, 3), c -= 3), Kg(u);
        }
      }
  }
  function C0() {
    function l(s) {
      s.canIntercept && s.info === "react-transition" && s.intercept({
        handler: function() {
          return new Promise(function(m) {
            return r = m;
          });
        },
        focusReset: "manual",
        scroll: "manual"
      });
    }
    function n() {
      r !== null && (r(), r = null), c || setTimeout(u, 20);
    }
    function u() {
      if (!c && !navigation.transition) {
        var s = navigation.currentEntry;
        s && s.url != null && navigation.navigate(s.url, {
          state: s.getState(),
          info: "react-transition",
          history: "replace"
        });
      }
    }
    if (typeof navigation == "object") {
      var c = !1, r = null;
      return navigation.addEventListener("navigate", l), navigation.addEventListener("navigatesuccess", n), navigation.addEventListener("navigateerror", n), setTimeout(u, 100), function() {
        c = !0, navigation.removeEventListener("navigate", l), navigation.removeEventListener("navigatesuccess", n), navigation.removeEventListener("navigateerror", n), r !== null && (r(), r = null);
      };
    }
  }
  function lm(l) {
    this._internalRoot = l;
  }
  am.prototype.render = lm.prototype.render = function(l) {
    var n = this._internalRoot;
    if (n === null) throw Error(E(409));
    var u = n.current, c = mn();
    Vg(u, c, l, n, null, null);
  }, am.prototype.unmount = lm.prototype.unmount = function() {
    var l = this._internalRoot;
    if (l !== null) {
      this._internalRoot = null;
      var n = l.containerInfo;
      Vg(l.current, 2, null, l, null, null), tr(), n[Xl] = null;
    }
  };
  function am(l) {
    this._internalRoot = l;
  }
  am.prototype.unstable_scheduleHydration = function(l) {
    if (l) {
      var n = Pe();
      l = { blockedOn: null, target: l, priority: n };
      for (var u = 0; u < fl.length && n !== 0 && n < fl[u].priority; u++) ;
      fl.splice(u, 0, l), u === 0 && Zg(l);
    }
  };
  var U0 = q.version;
  if (U0 !== "19.2.8")
    throw Error(
      E(
        527,
        U0,
        "19.2.8"
      )
    );
  v.findDOMNode = function(l) {
    var n = l._reactInternals;
    if (n === void 0)
      throw typeof l.render == "function" ? Error(E(188)) : (l = Object.keys(l).join(","), Error(E(268, l)));
    return l = V(n), l = l !== null ? de(l) : null, l = l === null ? null : l.stateNode, l;
  };
  var $g = {
    bundleType: 0,
    version: "19.2.8",
    rendererPackageName: "react-dom",
    currentDispatcherRef: D,
    reconcilerVersion: "19.2.8"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var ld = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!ld.isDisabled && ld.supportsFiber)
      try {
        Oa = ld.inject(
          $g
        ), vl = ld;
      } catch {
      }
  }
  return _p.createRoot = function(l, n) {
    if (!ee(l)) throw Error(E(299));
    var u = !1, c = "", r = mh, s = Hy, m = yh;
    return n != null && (n.unstable_strictMode === !0 && (u = !0), n.identifierPrefix !== void 0 && (c = n.identifierPrefix), n.onUncaughtError !== void 0 && (r = n.onUncaughtError), n.onCaughtError !== void 0 && (s = n.onCaughtError), n.onRecoverableError !== void 0 && (m = n.onRecoverableError)), n = Ph(
      l,
      1,
      !1,
      null,
      null,
      u,
      c,
      null,
      r,
      s,
      m,
      C0
    ), l[Xl] = n.current, cr(l), new lm(n);
  }, _p.hydrateRoot = function(l, n, u) {
    if (!ee(l)) throw Error(E(299));
    var c = !1, r = "", s = mh, m = Hy, S = yh, O = null;
    return u != null && (u.unstable_strictMode === !0 && (c = !0), u.identifierPrefix !== void 0 && (r = u.identifierPrefix), u.onUncaughtError !== void 0 && (s = u.onUncaughtError), u.onCaughtError !== void 0 && (m = u.onCaughtError), u.onRecoverableError !== void 0 && (S = u.onRecoverableError), u.formState !== void 0 && (O = u.formState)), n = Ph(
      l,
      1,
      !0,
      n,
      u ?? null,
      c,
      r,
      O,
      s,
      m,
      S,
      C0
    ), n.context = Fo(null), u = n.current, c = mn(), c = uo(c), r = tc(c), r.callback = null, Un(u, r, c), u = c, n.current.lanes = u, En(n, u), Ti(n), l[Xl] = n.current, cr(l), new am(n);
  }, _p.version = "19.2.8", _p;
}
var Op = {};
var I2;
function VT() {
  return I2 || (I2 = 1, process.env.NODE_ENV !== "production" && (function() {
    function T(e, t) {
      for (e = e.memoizedState; e !== null && 0 < t; )
        e = e.next, t--;
      return e;
    }
    function q(e, t, a, i) {
      if (a >= t.length) return i;
      var o = t[a], f = ql(e) ? e.slice() : st({}, e);
      return f[o] = q(e[o], t, a + 1, i), f;
    }
    function ne(e, t, a) {
      if (t.length !== a.length)
        console.warn("copyWithRename() expects paths of the same length");
      else {
        for (var i = 0; i < a.length - 1; i++)
          if (t[i] !== a[i]) {
            console.warn(
              "copyWithRename() expects paths to be the same except for the deepest key"
            );
            return;
          }
        return E(e, t, a, 0);
      }
    }
    function E(e, t, a, i) {
      var o = t[i], f = ql(e) ? e.slice() : st({}, e);
      return i + 1 === t.length ? (f[a[i]] = f[o], ql(f) ? f.splice(o, 1) : delete f[o]) : f[o] = E(
        e[o],
        t,
        a,
        i + 1
      ), f;
    }
    function ee(e, t, a) {
      var i = t[a], o = ql(e) ? e.slice() : st({}, e);
      return a + 1 === t.length ? (ql(o) ? o.splice(i, 1) : delete o[i], o) : (o[i] = ee(e[i], t, a + 1), o);
    }
    function te() {
      return !1;
    }
    function he() {
      return null;
    }
    function Q() {
      console.error(
        "Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://react.dev/link/rules-of-hooks"
      );
    }
    function W() {
      console.error(
        "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."
      );
    }
    function V() {
    }
    function de() {
    }
    function Y(e) {
      var t = [];
      return e.forEach(function(a) {
        t.push(a);
      }), t.sort().join(", ");
    }
    function H(e, t, a, i) {
      return new n1(e, t, a, i);
    }
    function oe(e, t) {
      e.context === Rr && (Lh(e.current, 2, t, e, null, null), Yn());
    }
    function ze(e, t) {
      if (Mi !== null) {
        var a = t.staleFamilies;
        t = t.updatedFamilies, xs(), jp(
          e.current,
          t,
          a
        ), Yn();
      }
    }
    function We(e) {
      Mi = e;
    }
    function Qe(e) {
      return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
    }
    function Ne(e) {
      var t = e, a = e;
      if (e.alternate) for (; t.return; ) t = t.return;
      else {
        e = t;
        do
          t = e, (t.flags & 4098) !== 0 && (a = t.return), e = t.return;
        while (e);
      }
      return t.tag === 3 ? a : null;
    }
    function Ot(e) {
      if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
      }
      return null;
    }
    function tt(e) {
      if (e.tag === 31) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
      }
      return null;
    }
    function wt(e) {
      if (Ne(e) !== e)
        throw Error("Unable to find node on an unmounted component.");
    }
    function Vt(e) {
      var t = e.alternate;
      if (!t) {
        if (t = Ne(e), t === null)
          throw Error("Unable to find node on an unmounted component.");
        return t !== e ? null : e;
      }
      for (var a = e, i = t; ; ) {
        var o = a.return;
        if (o === null) break;
        var f = o.alternate;
        if (f === null) {
          if (i = o.return, i !== null) {
            a = i;
            continue;
          }
          break;
        }
        if (o.child === f.child) {
          for (f = o.child; f; ) {
            if (f === a) return wt(o), e;
            if (f === i) return wt(o), t;
            f = f.sibling;
          }
          throw Error("Unable to find node on an unmounted component.");
        }
        if (a.return !== i.return) a = o, i = f;
        else {
          for (var d = !1, h = o.child; h; ) {
            if (h === a) {
              d = !0, a = o, i = f;
              break;
            }
            if (h === i) {
              d = !0, i = o, a = f;
              break;
            }
            h = h.sibling;
          }
          if (!d) {
            for (h = f.child; h; ) {
              if (h === a) {
                d = !0, a = f, i = o;
                break;
              }
              if (h === i) {
                d = !0, i = f, a = o;
                break;
              }
              h = h.sibling;
            }
            if (!d)
              throw Error(
                "Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue."
              );
          }
        }
        if (a.alternate !== i)
          throw Error(
            "Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue."
          );
      }
      if (a.tag !== 3)
        throw Error("Unable to find node on an unmounted component.");
      return a.stateNode.current === a ? e : t;
    }
    function Ft(e) {
      var t = e.tag;
      if (t === 5 || t === 26 || t === 27 || t === 6) return e;
      for (e = e.child; e !== null; ) {
        if (t = Ft(e), t !== null) return t;
        e = e.sibling;
      }
      return null;
    }
    function Ue(e) {
      return e === null || typeof e != "object" ? null : (e = Lg && e[Lg] || e["@@iterator"], typeof e == "function" ? e : null);
    }
    function lt(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === sr ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case fr:
          return "Fragment";
        case Fs:
          return "Profiler";
        case ln:
          return "StrictMode";
        case $o:
          return "Suspense";
        case yn:
          return "SuspenseList";
        case Gu:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case Fc:
            return "Portal";
          case ju:
            return e.displayName || "Context";
          case Jh:
            return (e._context.displayName || "Context") + ".Consumer";
          case rr:
            var t = e.render;
            return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case Ws:
            return t = e.displayName || null, t !== null ? t : lt(e.type) || "Memo";
          case Ha:
            t = e._payload, e = e._init;
            try {
              return lt(e(t));
            } catch {
            }
        }
      return null;
    }
    function gt(e) {
      return typeof e.tag == "number" ? pe(e) : typeof e.name == "string" ? e.name : null;
    }
    function pe(e) {
      var t = e.type;
      switch (e.tag) {
        case 31:
          return "Activity";
        case 24:
          return "Cache";
        case 9:
          return (t._context.displayName || "Context") + ".Consumer";
        case 10:
          return t.displayName || "Context";
        case 18:
          return "DehydratedFragment";
        case 11:
          return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
        case 7:
          return "Fragment";
        case 26:
        case 27:
        case 5:
          return t;
        case 4:
          return "Portal";
        case 3:
          return "Root";
        case 6:
          return "Text";
        case 16:
          return lt(t);
        case 8:
          return t === ln ? "StrictMode" : "Mode";
        case 22:
          return "Offscreen";
        case 12:
          return "Profiler";
        case 21:
          return "Scope";
        case 13:
          return "Suspense";
        case 19:
          return "SuspenseList";
        case 25:
          return "TracingMarker";
        case 1:
        case 0:
        case 14:
        case 15:
          if (typeof t == "function")
            return t.displayName || t.name || null;
          if (typeof t == "string") return t;
          break;
        case 29:
          if (t = e._debugInfo, t != null) {
            for (var a = t.length - 1; 0 <= a; a--)
              if (typeof t[a].name == "string") return t[a].name;
          }
          if (e.return !== null)
            return pe(e.return);
      }
      return null;
    }
    function Ht(e) {
      return { current: e };
    }
    function Se(e, t) {
      0 > sc ? console.error("Unexpected pop.") : (t !== T0[sc] && console.error("Unexpected Fiber popped."), e.current = E0[sc], E0[sc] = null, T0[sc] = null, sc--);
    }
    function Je(e, t, a) {
      sc++, E0[sc] = e.current, T0[sc] = a, e.current = t;
    }
    function Be(e) {
      return e === null && console.error(
        "Expected host context to exist. This error is likely caused by a bug in React. Please file an issue."
      ), e;
    }
    function ft(e, t) {
      Je(qn, t, e), Je(dr, e, e), Je(Wc, null, e);
      var a = t.nodeType;
      switch (a) {
        case 9:
        case 11:
          a = a === 9 ? "#document" : "#fragment", t = (t = t.documentElement) && (t = t.namespaceURI) ? mg(t) : hf;
          break;
        default:
          if (a = t.tagName, t = t.namespaceURI)
            t = mg(t), t = oc(
              t,
              a
            );
          else
            switch (a) {
              case "svg":
                t = xm;
                break;
              case "math":
                t = jv;
                break;
              default:
                t = hf;
            }
      }
      a = a.toLowerCase(), a = Iu(null, a), a = {
        context: t,
        ancestorInfo: a
      }, Se(Wc, e), Je(Wc, a, e);
    }
    function D(e) {
      Se(Wc, e), Se(dr, e), Se(qn, e);
    }
    function v() {
      return Be(Wc.current);
    }
    function ue(e) {
      e.memoizedState !== null && Je(Ic, e, e);
      var t = Be(Wc.current), a = e.type, i = oc(t.context, a);
      a = Iu(t.ancestorInfo, a), i = { context: i, ancestorInfo: a }, t !== i && (Je(dr, e, e), Je(Wc, i, e));
    }
    function me(e) {
      dr.current === e && (Se(Wc, e), Se(dr, e)), Ic.current === e && (Se(Ic, e), bp._currentValue = _d);
    }
    function ve() {
    }
    function b() {
      if (hr === 0) {
        Xg = console.log, ko = console.info, mr = console.warn, A0 = console.error, Is = console.group, Kh = console.groupCollapsed, $h = console.groupEnd;
        var e = {
          configurable: !0,
          enumerable: !0,
          value: ve,
          writable: !0
        };
        Object.defineProperties(console, {
          info: e,
          log: e,
          warn: e,
          error: e,
          group: e,
          groupCollapsed: e,
          groupEnd: e
        });
      }
      hr++;
    }
    function B() {
      if (hr--, hr === 0) {
        var e = { configurable: !0, enumerable: !0, writable: !0 };
        Object.defineProperties(console, {
          log: st({}, e, { value: Xg }),
          info: st({}, e, { value: ko }),
          warn: st({}, e, { value: mr }),
          error: st({}, e, { value: A0 }),
          group: st({}, e, { value: Is }),
          groupCollapsed: st({}, e, { value: Kh }),
          groupEnd: st({}, e, { value: $h })
        });
      }
      0 > hr && console.error(
        "disabledDepth fell below zero. This is a bug in React. Please file an issue."
      );
    }
    function $(e) {
      var t = Error.prepareStackTrace;
      if (Error.prepareStackTrace = void 0, e = e.stack, Error.prepareStackTrace = t, e.startsWith(`Error: react-stack-top-frame
`) && (e = e.slice(29)), t = e.indexOf(`
`), t !== -1 && (e = e.slice(t + 1)), t = e.indexOf("react_stack_bottom_frame"), t !== -1 && (t = e.lastIndexOf(
        `
`,
        t
      )), t !== -1)
        e = e.slice(0, t);
      else return "";
      return e;
    }
    function le(e) {
      if (yr === void 0)
        try {
          throw Error();
        } catch (a) {
          var t = a.stack.trim().match(/\n( *(at )?)/);
          yr = t && t[1] || "", R0 = -1 < a.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < a.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
      return `
` + yr + e + R0;
    }
    function Ae(e, t) {
      if (!e || kh) return "";
      var a = _0.get(e);
      if (a !== void 0) return a;
      kh = !0, a = Error.prepareStackTrace, Error.prepareStackTrace = void 0;
      var i = null;
      i = Z.H, Z.H = null, b();
      try {
        var o = {
          DetermineComponentFrameRoot: function() {
            try {
              if (t) {
                var R = function() {
                  throw Error();
                };
                if (Object.defineProperty(R.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                }), typeof Reflect == "object" && Reflect.construct) {
                  try {
                    Reflect.construct(R, []);
                  } catch (re) {
                    var L = re;
                  }
                  Reflect.construct(e, [], R);
                } else {
                  try {
                    R.call();
                  } catch (re) {
                    L = re;
                  }
                  e.call(R.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (re) {
                  L = re;
                }
                (R = e()) && typeof R.catch == "function" && R.catch(function() {
                });
              }
            } catch (re) {
              if (re && L && typeof re.stack == "string")
                return [re.stack, L.stack];
            }
            return [null, null];
          }
        };
        o.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
        var f = Object.getOwnPropertyDescriptor(
          o.DetermineComponentFrameRoot,
          "name"
        );
        f && f.configurable && Object.defineProperty(
          o.DetermineComponentFrameRoot,
          "name",
          { value: "DetermineComponentFrameRoot" }
        );
        var d = o.DetermineComponentFrameRoot(), h = d[0], y = d[1];
        if (h && y) {
          var p = h.split(`
`), M = y.split(`
`);
          for (d = f = 0; f < p.length && !p[f].includes(
            "DetermineComponentFrameRoot"
          ); )
            f++;
          for (; d < M.length && !M[d].includes(
            "DetermineComponentFrameRoot"
          ); )
            d++;
          if (f === p.length || d === M.length)
            for (f = p.length - 1, d = M.length - 1; 1 <= f && 0 <= d && p[f] !== M[d]; )
              d--;
          for (; 1 <= f && 0 <= d; f--, d--)
            if (p[f] !== M[d]) {
              if (f !== 1 || d !== 1)
                do
                  if (f--, d--, 0 > d || p[f] !== M[d]) {
                    var U = `
` + p[f].replace(
                      " at new ",
                      " at "
                    );
                    return e.displayName && U.includes("<anonymous>") && (U = U.replace("<anonymous>", e.displayName)), typeof e == "function" && _0.set(e, U), U;
                  }
                while (1 <= f && 0 <= d);
              break;
            }
        }
      } finally {
        kh = !1, Z.H = i, B(), Error.prepareStackTrace = a;
      }
      return p = (p = e ? e.displayName || e.name : "") ? le(p) : "", typeof e == "function" && _0.set(e, p), p;
    }
    function qe(e, t) {
      switch (e.tag) {
        case 26:
        case 27:
        case 5:
          return le(e.type);
        case 16:
          return le("Lazy");
        case 13:
          return e.child !== t && t !== null ? le("Suspense Fallback") : le("Suspense");
        case 19:
          return le("SuspenseList");
        case 0:
        case 15:
          return Ae(e.type, !1);
        case 11:
          return Ae(e.type.render, !1);
        case 1:
          return Ae(e.type, !0);
        case 31:
          return le("Activity");
        default:
          return "";
      }
    }
    function Oe(e) {
      try {
        var t = "", a = null;
        do {
          t += qe(e, a);
          var i = e._debugInfo;
          if (i)
            for (var o = i.length - 1; 0 <= o; o--) {
              var f = i[o];
              if (typeof f.name == "string") {
                var d = t;
                e: {
                  var h = f.name, y = f.env, p = f.debugLocation;
                  if (p != null) {
                    var M = $(p), U = M.lastIndexOf(`
`), R = U === -1 ? M : M.slice(U + 1);
                    if (R.indexOf(h) !== -1) {
                      var L = `
` + R;
                      break e;
                    }
                  }
                  L = le(
                    h + (y ? " [" + y + "]" : "")
                  );
                }
                t = d + L;
              }
            }
          a = e, e = e.return;
        } while (e);
        return t;
      } catch (re) {
        return `
Error generating stack: ` + re.message + `
` + re.stack;
      }
    }
    function Qt(e) {
      return (e = e ? e.displayName || e.name : "") ? le(e) : "";
    }
    function Et() {
      if (pn === null) return null;
      var e = pn._debugOwner;
      return e != null ? gt(e) : null;
    }
    function Fl() {
      if (pn === null) return "";
      var e = pn;
      try {
        var t = "";
        switch (e.tag === 6 && (e = e.return), e.tag) {
          case 26:
          case 27:
          case 5:
            t += le(e.type);
            break;
          case 13:
            t += le("Suspense");
            break;
          case 19:
            t += le("SuspenseList");
            break;
          case 31:
            t += le("Activity");
            break;
          case 30:
          case 0:
          case 15:
          case 1:
            e._debugOwner || t !== "" || (t += Qt(
              e.type
            ));
            break;
          case 11:
            e._debugOwner || t !== "" || (t += Qt(
              e.type.render
            ));
        }
        for (; e; )
          if (typeof e.tag == "number") {
            var a = e;
            e = a._debugOwner;
            var i = a._debugStack;
            if (e && i) {
              var o = $(i);
              o !== "" && (t += `
` + o);
            }
          } else if (e.debugStack != null) {
            var f = e.debugStack;
            (e = e.owner) && f && (t += `
` + $(f));
          } else break;
        var d = t;
      } catch (h) {
        d = `
Error generating stack: ` + h.message + `
` + h.stack;
      }
      return d;
    }
    function fe(e, t, a, i, o, f, d) {
      var h = pn;
      Ku(e);
      try {
        return e !== null && e._debugTask ? e._debugTask.run(
          t.bind(null, a, i, o, f, d)
        ) : t(a, i, o, f, d);
      } finally {
        Ku(h);
      }
      throw Error(
        "runWithFiberInDEV should never be called in production. This is a bug in React."
      );
    }
    function Ku(e) {
      Z.getCurrentStack = e === null ? null : Fl, Ai = !1, pn = e;
    }
    function Jn(e) {
      return typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
    }
    function _a(e) {
      try {
        return Kn(e), !1;
      } catch {
        return !0;
      }
    }
    function Kn(e) {
      return "" + e;
    }
    function rt(e, t) {
      if (_a(e))
        return console.error(
          "The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before using it here.",
          t,
          Jn(e)
        ), Kn(e);
    }
    function ll(e, t) {
      if (_a(e))
        return console.error(
          "The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before using it here.",
          t,
          Jn(e)
        ), Kn(e);
    }
    function $u(e) {
      if (_a(e))
        return console.error(
          "Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before using it here.",
          Jn(e)
        ), Kn(e);
    }
    function Sc(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u") return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled) return !0;
      if (!t.supportsFiber)
        return console.error(
          "The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://react.dev/link/react-devtools"
        ), !0;
      try {
        Wo = t.inject(e), Jl = t;
      } catch (a) {
        console.error("React instrumentation encountered an error: %o.", a);
      }
      return !!t.checkDCE;
    }
    function ie(e) {
      if (typeof z0 == "function" && Qg(e), Jl && typeof Jl.setStrictMode == "function")
        try {
          Jl.setStrictMode(Wo, e);
        } catch (t) {
          Ri || (Ri = !0, console.error(
            "React instrumentation encountered an error: %o",
            t
          ));
        }
    }
    function Ie(e) {
      return e >>>= 0, e === 0 ? 32 : 31 - (M0(e) / tm | 0) | 0;
    }
    function da(e) {
      var t = e & 42;
      if (t !== 0) return t;
      switch (e & -e) {
        case 1:
          return 1;
        case 2:
          return 2;
        case 4:
          return 4;
        case 8:
          return 8;
        case 16:
          return 16;
        case 32:
          return 32;
        case 64:
          return 64;
        case 128:
          return 128;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
          return e & 261888;
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return e & 3932160;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          return e & 62914560;
        case 67108864:
          return 67108864;
        case 134217728:
          return 134217728;
        case 268435456:
          return 268435456;
        case 536870912:
          return 536870912;
        case 1073741824:
          return 0;
        default:
          return console.error(
            "Should have found matching lanes. This is a bug in React."
          ), e;
      }
    }
    function Hl(e, t, a) {
      var i = e.pendingLanes;
      if (i === 0) return 0;
      var o = 0, f = e.suspendedLanes, d = e.pingedLanes;
      e = e.warmLanes;
      var h = i & 134217727;
      return h !== 0 ? (i = h & ~f, i !== 0 ? o = da(i) : (d &= h, d !== 0 ? o = da(d) : a || (a = h & ~e, a !== 0 && (o = da(a))))) : (h = i & ~f, h !== 0 ? o = da(h) : d !== 0 ? o = da(d) : a || (a = i & ~e, a !== 0 && (o = da(a)))), o === 0 ? 0 : t !== 0 && t !== o && (t & f) === 0 && (f = o & -o, a = t & -t, f >= a || f === 32 && (a & 4194048) !== 0) ? t : o;
    }
    function ul(e, t) {
      return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
    }
    function ha(e, t) {
      switch (e) {
        case 1:
        case 2:
        case 4:
        case 8:
        case 64:
          return t + 250;
        case 16:
        case 32:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return t + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          return -1;
        case 67108864:
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
          return -1;
        default:
          return console.error(
            "Should have found matching lanes. This is a bug in React."
          ), -1;
      }
    }
    function Gl() {
      var e = gr;
      return gr <<= 1, (gr & 62914560) === 0 && (gr = 4194304), e;
    }
    function un(e) {
      for (var t = [], a = 0; 31 > a; a++) t.push(e);
      return t;
    }
    function Ll(e, t) {
      e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
    }
    function bn(e, t, a, i, o, f) {
      var d = e.pendingLanes;
      e.pendingLanes = a, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= a, e.entangledLanes &= a, e.errorRecoveryDisabledLanes &= a, e.shellSuspendCounter = 0;
      var h = e.entanglements, y = e.expirationTimes, p = e.hiddenUpdates;
      for (a = d & ~a; 0 < a; ) {
        var M = 31 - Ea(a), U = 1 << M;
        h[M] = 0, y[M] = -1;
        var R = p[M];
        if (R !== null)
          for (p[M] = null, M = 0; M < R.length; M++) {
            var L = R[M];
            L !== null && (L.lane &= -536870913);
          }
        a &= ~U;
      }
      i !== 0 && su(e, i, 0), f !== 0 && o === 0 && e.tag !== 0 && (e.suspendedLanes |= f & ~(d & ~t));
    }
    function su(e, t, a) {
      e.pendingLanes |= t, e.suspendedLanes &= ~t;
      var i = 31 - Ea(t);
      e.entangledLanes |= t, e.entanglements[i] = e.entanglements[i] | 1073741824 | a & 261930;
    }
    function ku(e, t) {
      var a = e.entangledLanes |= t;
      for (e = e.entanglements; a; ) {
        var i = 31 - Ea(a), o = 1 << i;
        o & t | e[i] & t && (e[i] |= t), a &= ~o;
      }
    }
    function qa(e, t) {
      var a = t & -t;
      return a = (a & 42) !== 0 ? 1 : Oa(a), (a & (e.suspendedLanes | t)) !== 0 ? 0 : a;
    }
    function Oa(e) {
      switch (e) {
        case 2:
          e = 1;
          break;
        case 8:
          e = 4;
          break;
        case 32:
          e = 16;
          break;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          e = 128;
          break;
        case 268435456:
          e = 134217728;
          break;
        default:
          e = 0;
      }
      return e;
    }
    function vl(e, t, a) {
      if (_i)
        for (e = e.pendingUpdatersLaneMap; 0 < a; ) {
          var i = 31 - Ea(a), o = 1 << i;
          e[i].add(t), a &= ~o;
        }
    }
    function ma(e, t) {
      if (_i)
        for (var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; 0 < t; ) {
          var o = 31 - Ea(t);
          e = 1 << o, o = a[o], 0 < o.size && (o.forEach(function(f) {
            var d = f.alternate;
            d !== null && i.has(d) || i.add(f);
          }), o.clear()), t &= ~e;
        }
    }
    function _l(e) {
      return e &= -e, Kl < e ? Ta < e ? (e & 134217727) !== 0 ? xa : Pc : Ta : Kl;
    }
    function du() {
      var e = Yt.p;
      return e !== 0 ? e : (e = window.event, e === void 0 ? xa : Vh(e.type));
    }
    function g(e, t) {
      var a = Yt.p;
      try {
        return Yt.p = e, t();
      } finally {
        Yt.p = a;
      }
    }
    function x(e) {
      delete e[fl], delete e[an], delete e[Io], delete e[d1], delete e[Zg];
    }
    function ae(e) {
      var t = e[fl];
      if (t) return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[dc] || a[fl]) {
          if (a = t.alternate, t.child !== null || a !== null && a.child !== null)
            for (e = Qo(e); e !== null; ) {
              if (a = e[fl])
                return a;
              e = Qo(e);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function ce(e) {
      if (e = e[fl] || e[dc]) {
        var t = e.tag;
        if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3)
          return e;
      }
      return null;
    }
    function ge(e) {
      var t = e.tag;
      if (t === 5 || t === 26 || t === 27 || t === 6)
        return e.stateNode;
      throw Error("getNodeFromInstance: Invalid argument.");
    }
    function Me(e) {
      var t = e[td];
      return t || (t = e[td] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
    }
    function Ee(e) {
      e[vr] = !0;
    }
    function nt(e, t) {
      je(e, t), je(e + "Capture", t);
    }
    function je(e, t) {
      Oi[e] && console.error(
        "EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.",
        e
      ), Oi[e] = t;
      var a = e.toLowerCase();
      for (Sr[a] = e, e === "onDoubleClick" && (Sr.ondblclick = e), e = 0; e < t.length; e++)
        Jg.add(t[e]);
    }
    function Sl(e, t) {
      Kg[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || console.error(
        e === "select" ? "You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set `onChange`." : "You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."
      ), t.onChange || t.readOnly || t.disabled || t.checked == null || console.error(
        "You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`."
      );
    }
    function ja(e) {
      return jn.call(lm, e) ? !0 : jn.call(C0, e) ? !1 : br.test(e) ? lm[e] = !0 : (C0[e] = !0, console.error("Invalid attribute name: `%s`", e), !1);
    }
    function En(e, t, a) {
      if (ja(t)) {
        if (!e.hasAttribute(t)) {
          switch (typeof a) {
            case "symbol":
            case "object":
              return a;
            case "function":
              return a;
            case "boolean":
              if (a === !1) return a;
          }
          return a === void 0 ? void 0 : null;
        }
        return e = e.getAttribute(t), e === "" && a === !0 ? !0 : (rt(a, t), e === "" + a ? a : e);
      }
    }
    function Fu(e, t, a) {
      if (ja(t))
        if (a === null) e.removeAttribute(t);
        else {
          switch (typeof a) {
            case "undefined":
            case "function":
            case "symbol":
              e.removeAttribute(t);
              return;
            case "boolean":
              var i = t.toLowerCase().slice(0, 5);
              if (i !== "data-" && i !== "aria-") {
                e.removeAttribute(t);
                return;
              }
          }
          rt(a, t), e.setAttribute(t, "" + a);
        }
    }
    function $n(e, t, a) {
      if (a === null) e.removeAttribute(t);
      else {
        switch (typeof a) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            e.removeAttribute(t);
            return;
        }
        rt(a, t), e.setAttribute(t, "" + a);
      }
    }
    function cn(e, t, a, i) {
      if (i === null) e.removeAttribute(a);
      else {
        switch (typeof i) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            e.removeAttribute(a);
            return;
        }
        rt(i, a), e.setAttributeNS(t, a, "" + i);
      }
    }
    function Da(e) {
      switch (typeof e) {
        case "bigint":
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return $u(e), e;
        default:
          return "";
      }
    }
    function uo(e) {
      var t = e.type;
      return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function De(e, t, a) {
      var i = Object.getOwnPropertyDescriptor(
        e.constructor.prototype,
        t
      );
      if (!e.hasOwnProperty(t) && typeof i < "u" && typeof i.get == "function" && typeof i.set == "function") {
        var o = i.get, f = i.set;
        return Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return o.call(this);
          },
          set: function(d) {
            $u(d), a = "" + d, f.call(this, d);
          }
        }), Object.defineProperty(e, t, {
          enumerable: i.enumerable
        }), {
          getValue: function() {
            return a;
          },
          setValue: function(d) {
            $u(d), a = "" + d;
          },
          stopTracking: function() {
            e._valueTracker = null, delete e[t];
          }
        };
      }
    }
    function Pe(e) {
      if (!e._valueTracker) {
        var t = uo(e) ? "checked" : "value";
        e._valueTracker = De(
          e,
          t,
          "" + e[t]
        );
      }
    }
    function Ge(e) {
      if (!e) return !1;
      var t = e._valueTracker;
      if (!t) return !0;
      var a = t.getValue(), i = "";
      return e && (i = uo(e) ? e.checked ? "true" : "false" : e.value), e = i, e !== a ? (t.setValue(e), !0) : !1;
    }
    function xt(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    function Re(e) {
      return e.replace(
        am,
        function(t) {
          return "\\" + t.charCodeAt(0).toString(16) + " ";
        }
      );
    }
    function qt(e, t) {
      t.checked === void 0 || t.defaultChecked === void 0 || $g || (console.error(
        "%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://react.dev/link/controlled-components",
        Et() || "A component",
        t.type
      ), $g = !0), t.value === void 0 || t.defaultValue === void 0 || U0 || (console.error(
        "%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://react.dev/link/controlled-components",
        Et() || "A component",
        t.type
      ), U0 = !0);
    }
    function Xl(e, t, a, i, o, f, d, h) {
      e.name = "", d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" ? (rt(d, "type"), e.type = d) : e.removeAttribute("type"), t != null ? d === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + Da(t)) : e.value !== "" + Da(t) && (e.value = "" + Da(t)) : d !== "submit" && d !== "reset" || e.removeAttribute("value"), t != null ? io(e, d, Da(t)) : a != null ? io(e, d, Da(a)) : i != null && e.removeAttribute("value"), o == null && f != null && (e.defaultChecked = !!f), o != null && (e.checked = o && typeof o != "function" && typeof o != "symbol"), h != null && typeof h != "function" && typeof h != "symbol" && typeof h != "boolean" ? (rt(h, "name"), e.name = "" + Da(h)) : e.removeAttribute("name");
    }
    function Ga(e, t, a, i, o, f, d, h) {
      if (f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" && (rt(f, "type"), e.type = f), t != null || a != null) {
        if (!(f !== "submit" && f !== "reset" || t != null)) {
          Pe(e);
          return;
        }
        a = a != null ? "" + Da(a) : "", t = t != null ? "" + Da(t) : a, h || t === e.value || (e.value = t), e.defaultValue = t;
      }
      i = i ?? o, i = typeof i != "function" && typeof i != "symbol" && !!i, e.checked = h ? e.checked : !!i, e.defaultChecked = !!i, d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" && (rt(d, "name"), e.name = d), Pe(e);
    }
    function io(e, t, a) {
      t === "number" && xt(e.ownerDocument) === e || e.defaultValue === "" + a || (e.defaultValue = "" + a);
    }
    function Tn(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? ks.Children.forEach(t.children, function(a) {
        a == null || typeof a == "string" || typeof a == "number" || typeof a == "bigint" || l || (l = !0, console.error(
          "Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>."
        ));
      }) : t.dangerouslySetInnerHTML == null || n || (n = !0, console.error(
        "Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected."
      ))), t.selected == null || ld || (console.error(
        "Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."
      ), ld = !0);
    }
    function ji() {
      var e = Et();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    function ya(e, t, a, i) {
      if (e = e.options, t) {
        t = {};
        for (var o = 0; o < a.length; o++)
          t["$" + a[o]] = !0;
        for (a = 0; a < e.length; a++)
          o = t.hasOwnProperty("$" + e[a].value), e[a].selected !== o && (e[a].selected = o), o && i && (e[a].defaultSelected = !0);
      } else {
        for (a = "" + Da(a), t = null, o = 0; o < e.length; o++) {
          if (e[o].value === a) {
            e[o].selected = !0, i && (e[o].defaultSelected = !0);
            return;
          }
          t !== null || e[o].disabled || (t = e[o]);
        }
        t !== null && (t.selected = !0);
      }
    }
    function hu(e, t) {
      for (e = 0; e < c.length; e++) {
        var a = c[e];
        if (t[a] != null) {
          var i = ql(t[a]);
          t.multiple && !i ? console.error(
            "The `%s` prop supplied to <select> must be an array if `multiple` is true.%s",
            a,
            ji()
          ) : !t.multiple && i && console.error(
            "The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s",
            a,
            ji()
          );
        }
      }
      t.value === void 0 || t.defaultValue === void 0 || u || (console.error(
        "Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://react.dev/link/controlled-components"
      ), u = !0);
    }
    function xl(e, t) {
      t.value === void 0 || t.defaultValue === void 0 || r || (console.error(
        "%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://react.dev/link/controlled-components",
        Et() || "A component"
      ), r = !0), t.children != null && t.value == null && console.error(
        "Use the `defaultValue` or `value` props instead of setting children on <textarea>."
      );
    }
    function An(e, t, a) {
      if (t != null && (t = "" + Da(t), t !== e.value && (e.value = t), a == null)) {
        e.defaultValue !== t && (e.defaultValue = t);
        return;
      }
      e.defaultValue = a != null ? "" + Da(a) : "";
    }
    function Gi(e, t, a, i) {
      if (t == null) {
        if (i != null) {
          if (a != null)
            throw Error(
              "If you supply `defaultValue` on a <textarea>, do not pass children."
            );
          if (ql(i)) {
            if (1 < i.length)
              throw Error("<textarea> can only have at most one child.");
            i = i[0];
          }
          a = i;
        }
        a == null && (a = ""), t = a;
      }
      a = Da(t), e.defaultValue = a, i = e.textContent, i === a && i !== "" && i !== null && (e.value = i), Pe(e);
    }
    function Wu(e, t) {
      return e.serverProps === void 0 && e.serverTail.length === 0 && e.children.length === 1 && 3 < e.distanceFromLeaf && e.distanceFromLeaf > 15 - t ? Wu(e.children[0], t) : e;
    }
    function Mt(e) {
      return "  " + "  ".repeat(e);
    }
    function mu(e) {
      return "+ " + "  ".repeat(e);
    }
    function pa(e) {
      return "- " + "  ".repeat(e);
    }
    function yu(e) {
      switch (e.tag) {
        case 26:
        case 27:
        case 5:
          return e.type;
        case 16:
          return "Lazy";
        case 31:
          return "Activity";
        case 13:
          return "Suspense";
        case 19:
          return "SuspenseList";
        case 0:
        case 15:
          return e = e.type, e.displayName || e.name || null;
        case 11:
          return e = e.type.render, e.displayName || e.name || null;
        case 1:
          return e = e.type, e.displayName || e.name || null;
        default:
          return null;
      }
    }
    function Rn(e, t) {
      return s.test(e) ? (e = JSON.stringify(e), e.length > t - 2 ? 8 > t ? '{"..."}' : "{" + e.slice(0, t - 7) + '..."}' : "{" + e + "}") : e.length > t ? 5 > t ? '{"..."}' : e.slice(0, t - 3) + "..." : e;
    }
    function co(e, t, a) {
      var i = 120 - 2 * a;
      if (t === null)
        return mu(a) + Rn(e, i) + `
`;
      if (typeof t == "string") {
        for (var o = 0; o < t.length && o < e.length && t.charCodeAt(o) === e.charCodeAt(o); o++) ;
        return o > i - 8 && 10 < o && (e = "..." + e.slice(o - 8), t = "..." + t.slice(o - 8)), mu(a) + Rn(e, i) + `
` + pa(a) + Rn(t, i) + `
`;
      }
      return Mt(a) + Rn(e, i) + `
`;
    }
    function Xe(e) {
      return Object.prototype.toString.call(e).replace(/^\[object (.*)\]$/, function(t, a) {
        return a;
      });
    }
    function Ye(e, t) {
      switch (typeof e) {
        case "string":
          return e = JSON.stringify(e), e.length > t ? 5 > t ? '"..."' : e.slice(0, t - 4) + '..."' : e;
        case "object":
          if (e === null) return "null";
          if (ql(e)) return "[...]";
          if (e.$$typeof === iu)
            return (t = lt(e.type)) ? "<" + t + ">" : "<...>";
          var a = Xe(e);
          if (a === "Object") {
            a = "", t -= 2;
            for (var i in e)
              if (e.hasOwnProperty(i)) {
                var o = JSON.stringify(i);
                if (o !== '"' + i + '"' && (i = o), t -= i.length - 2, o = Ye(
                  e[i],
                  15 > t ? t : 15
                ), t -= o.length, 0 > t) {
                  a += a === "" ? "..." : ", ...";
                  break;
                }
                a += (a === "" ? "" : ",") + i + ":" + o;
              }
            return "{" + a + "}";
          }
          return a;
        case "function":
          return (t = e.displayName || e.name) ? "function " + t : "function";
        default:
          return String(e);
      }
    }
    function Nl(e, t) {
      return typeof e != "string" || s.test(e) ? "{" + Ye(e, t - 2) + "}" : e.length > t - 2 ? 5 > t ? '"..."' : '"' + e.slice(0, t - 5) + '..."' : '"' + e + '"';
    }
    function za(e, t, a) {
      var i = 120 - a.length - e.length, o = [], f;
      for (f in t)
        if (t.hasOwnProperty(f) && f !== "children") {
          var d = Nl(
            t[f],
            120 - a.length - f.length - 1
          );
          i -= f.length + d.length + 2, o.push(f + "=" + d);
        }
      return o.length === 0 ? a + "<" + e + `>
` : 0 < i ? a + "<" + e + " " + o.join(" ") + `>
` : a + "<" + e + `
` + a + "  " + o.join(`
` + a + "  ") + `
` + a + `>
`;
    }
    function ga(e, t, a) {
      var i = "", o = st({}, t), f;
      for (f in e)
        if (e.hasOwnProperty(f)) {
          delete o[f];
          var d = 120 - 2 * a - f.length - 2, h = Ye(e[f], d);
          t.hasOwnProperty(f) ? (d = Ye(t[f], d), i += mu(a) + f + ": " + h + `
`, i += pa(a) + f + ": " + d + `
`) : i += mu(a) + f + ": " + h + `
`;
        }
      for (var y in o)
        o.hasOwnProperty(y) && (e = Ye(
          o[y],
          120 - 2 * a - y.length - 2
        ), i += pa(a) + y + ": " + e + `
`);
      return i;
    }
    function hl(e, t, a, i) {
      var o = "", f = /* @__PURE__ */ new Map();
      for (p in a)
        a.hasOwnProperty(p) && f.set(
          p.toLowerCase(),
          p
        );
      if (f.size === 1 && f.has("children"))
        o += za(
          e,
          t,
          Mt(i)
        );
      else {
        for (var d in t)
          if (t.hasOwnProperty(d) && d !== "children") {
            var h = 120 - 2 * (i + 1) - d.length - 1, y = f.get(d.toLowerCase());
            if (y !== void 0) {
              f.delete(d.toLowerCase());
              var p = t[d];
              y = a[y];
              var M = Nl(
                p,
                h
              );
              h = Nl(
                y,
                h
              ), typeof p == "object" && p !== null && typeof y == "object" && y !== null && Xe(p) === "Object" && Xe(y) === "Object" && (2 < Object.keys(p).length || 2 < Object.keys(y).length || -1 < M.indexOf("...") || -1 < h.indexOf("...")) ? o += Mt(i + 1) + d + `={{
` + ga(
                p,
                y,
                i + 2
              ) + Mt(i + 1) + `}}
` : (o += mu(i + 1) + d + "=" + M + `
`, o += pa(i + 1) + d + "=" + h + `
`);
            } else
              o += Mt(i + 1) + d + "=" + Nl(t[d], h) + `
`;
          }
        f.forEach(function(U) {
          if (U !== "children") {
            var R = 120 - 2 * (i + 1) - U.length - 1;
            o += pa(i + 1) + U + "=" + Nl(a[U], R) + `
`;
          }
        }), o = o === "" ? Mt(i) + "<" + e + `>
` : Mt(i) + "<" + e + `
` + o + Mt(i) + `>
`;
      }
      return e = a.children, t = t.children, typeof e == "string" || typeof e == "number" || typeof e == "bigint" ? (f = "", (typeof t == "string" || typeof t == "number" || typeof t == "bigint") && (f = "" + t), o += co(f, "" + e, i + 1)) : (typeof t == "string" || typeof t == "number" || typeof t == "bigint") && (o = e == null ? o + co("" + t, null, i + 1) : o + co("" + t, void 0, i + 1)), o;
    }
    function Bl(e, t) {
      var a = yu(e);
      if (a === null) {
        for (a = "", e = e.child; e; )
          a += Bl(e, t), e = e.sibling;
        return a;
      }
      return Mt(t) + "<" + a + `>
`;
    }
    function pu(e, t) {
      var a = Wu(e, t);
      if (a !== e && (e.children.length !== 1 || e.children[0] !== a))
        return Mt(t) + `...
` + pu(a, t + 1);
      a = "";
      var i = e.fiber._debugInfo;
      if (i)
        for (var o = 0; o < i.length; o++) {
          var f = i[o].name;
          typeof f == "string" && (a += Mt(t) + "<" + f + `>
`, t++);
        }
      if (i = "", o = e.fiber.pendingProps, e.fiber.tag === 6)
        i = co(o, e.serverProps, t), t++;
      else if (f = yu(e.fiber), f !== null)
        if (e.serverProps === void 0) {
          i = t;
          var d = 120 - 2 * i - f.length - 2, h = "";
          for (p in o)
            if (o.hasOwnProperty(p) && p !== "children") {
              var y = Nl(o[p], 15);
              if (d -= p.length + y.length + 2, 0 > d) {
                h += " ...";
                break;
              }
              h += " " + p + "=" + y;
            }
          i = Mt(i) + "<" + f + h + `>
`, t++;
        } else
          e.serverProps === null ? (i = za(
            f,
            o,
            mu(t)
          ), t++) : typeof e.serverProps == "string" ? console.error(
            "Should not have matched a non HostText fiber to a Text node. This is a bug in React."
          ) : (i = hl(
            f,
            o,
            e.serverProps,
            t
          ), t++);
      var p = "";
      for (o = e.fiber.child, f = 0; o && f < e.children.length; )
        d = e.children[f], d.fiber === o ? (p += pu(d, t), f++) : p += Bl(o, t), o = o.sibling;
      for (o && 0 < e.children.length && (p += Mt(t) + `...
`), o = e.serverTail, e.serverProps === null && t--, e = 0; e < o.length; e++)
        f = o[e], p = typeof f == "string" ? p + (pa(t) + Rn(f, 120 - 2 * t) + `
`) : p + za(
          f.type,
          f.props,
          pa(t)
        );
      return a + i + p;
    }
    function Li(e) {
      try {
        return `

` + pu(e, 0);
      } catch {
        return "";
      }
    }
    function Xi(e, t, a) {
      for (var i = t, o = null, f = 0; i; )
        i === e && (f = 0), o = {
          fiber: i,
          children: o !== null ? [o] : [],
          serverProps: i === t ? a : i === e ? null : void 0,
          serverTail: [],
          distanceFromLeaf: f
        }, f++, i = i.return;
      return o !== null ? Li(o).replaceAll(/^[+-]/gm, ">") : "";
    }
    function Iu(e, t) {
      var a = st({}, e || K), i = { tag: t };
      return S.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), O.indexOf(t) !== -1 && (a.pTagInButtonScope = null), m.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), t === "#document" || t === "html" ? a.containerTagInScope = null : a.containerTagInScope || (a.containerTagInScope = i), e !== null || t !== "#document" && t !== "html" && t !== "body" ? a.implicitRootScope === !0 && (a.implicitRootScope = !1) : a.implicitRootScope = !0, a;
    }
    function gu(e, t, a) {
      switch (t) {
        case "select":
          return e === "hr" || e === "option" || e === "optgroup" || e === "script" || e === "template" || e === "#text";
        case "optgroup":
          return e === "option" || e === "#text";
        case "option":
          return e === "#text";
        case "tr":
          return e === "th" || e === "td" || e === "style" || e === "script" || e === "template";
        case "tbody":
        case "thead":
        case "tfoot":
          return e === "tr" || e === "style" || e === "script" || e === "template";
        case "colgroup":
          return e === "col" || e === "template";
        case "table":
          return e === "caption" || e === "colgroup" || e === "tbody" || e === "tfoot" || e === "thead" || e === "style" || e === "script" || e === "template";
        case "head":
          return e === "base" || e === "basefont" || e === "bgsound" || e === "link" || e === "meta" || e === "title" || e === "noscript" || e === "noframes" || e === "style" || e === "script" || e === "template";
        case "html":
          if (a) break;
          return e === "head" || e === "body" || e === "frameset";
        case "frameset":
          return e === "frame";
        case "#document":
          if (!a) return e === "html";
      }
      switch (e) {
        case "h1":
        case "h2":
        case "h3":
        case "h4":
        case "h5":
        case "h6":
          return t !== "h1" && t !== "h2" && t !== "h3" && t !== "h4" && t !== "h5" && t !== "h6";
        case "rp":
        case "rt":
          return j.indexOf(t) === -1;
        case "caption":
        case "col":
        case "colgroup":
        case "frameset":
        case "frame":
        case "tbody":
        case "td":
        case "tfoot":
        case "th":
        case "thead":
        case "tr":
          return t == null;
        case "head":
          return a || t === null;
        case "html":
          return a && t === "#document" || t === null;
        case "body":
          return a && (t === "#document" || t === "html") || t === null;
      }
      return !0;
    }
    function oo(e, t) {
      switch (e) {
        case "address":
        case "article":
        case "aside":
        case "blockquote":
        case "center":
        case "details":
        case "dialog":
        case "dir":
        case "div":
        case "dl":
        case "fieldset":
        case "figcaption":
        case "figure":
        case "footer":
        case "header":
        case "hgroup":
        case "main":
        case "menu":
        case "nav":
        case "ol":
        case "p":
        case "section":
        case "summary":
        case "ul":
        case "pre":
        case "listing":
        case "table":
        case "hr":
        case "xmp":
        case "h1":
        case "h2":
        case "h3":
        case "h4":
        case "h5":
        case "h6":
          return t.pTagInButtonScope;
        case "form":
          return t.formTag || t.pTagInButtonScope;
        case "li":
          return t.listItemTagAutoclosing;
        case "dd":
        case "dt":
          return t.dlItemTagAutoclosing;
        case "button":
          return t.buttonTagInScope;
        case "a":
          return t.aTagInScope;
        case "nobr":
          return t.nobrTagInScope;
      }
      return null;
    }
    function va(e, t) {
      for (; e; ) {
        switch (e.tag) {
          case 5:
          case 26:
          case 27:
            if (e.type === t) return e;
        }
        e = e.return;
      }
      return null;
    }
    function Vi(e, t) {
      t = t || K;
      var a = t.current;
      if (t = (a = gu(
        e,
        a && a.tag,
        t.implicitRootScope
      ) ? null : a) ? null : oo(e, t), t = a || t, !t) return !0;
      var i = t.tag;
      if (t = String(!!a) + "|" + e + "|" + i, I[t]) return !1;
      I[t] = !0;
      var o = (t = pn) ? va(t.return, i) : null, f = t !== null && o !== null ? Xi(o, t, null) : "", d = "<" + e + ">";
      return a ? (a = "", i === "table" && e === "tr" && (a += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), console.error(
        `In HTML, %s cannot be a child of <%s>.%s
This will cause a hydration error.%s`,
        d,
        i,
        a,
        f
      )) : console.error(
        `In HTML, %s cannot be a descendant of <%s>.
This will cause a hydration error.%s`,
        d,
        i,
        f
      ), t && (e = t.return, o === null || e === null || o === e && e._debugOwner === t._debugOwner || fe(o, function() {
        console.error(
          `<%s> cannot contain a nested %s.
See this log for the ancestor stack trace.`,
          i,
          d
        );
      })), !1;
    }
    function Qi(e, t, a) {
      if (a || gu("#text", t, !1))
        return !0;
      if (a = "#text|" + t, I[a]) return !1;
      I[a] = !0;
      var i = (a = pn) ? va(a, t) : null;
      return a = a !== null && i !== null ? Xi(
        i,
        a,
        a.tag !== 6 ? { children: null } : null
      ) : "", /\S/.test(e) ? console.error(
        `In HTML, text nodes cannot be a child of <%s>.
This will cause a hydration error.%s`,
        t,
        a
      ) : console.error(
        `In HTML, whitespace text nodes cannot be a child of <%s>. Make sure you don't have any extra whitespace between tags on each line of your source code.
This will cause a hydration error.%s`,
        t,
        a
      ), !1;
    }
    function vu(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === 3) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }
    function Pu(e) {
      return e.replace(N, function(t, a) {
        return a.toUpperCase();
      });
    }
    function fo(e, t, a) {
      var i = t.indexOf("--") === 0;
      i || (-1 < t.indexOf("-") ? w.hasOwnProperty(t) && w[t] || (w[t] = !0, console.error(
        "Unsupported style property %s. Did you mean %s?",
        t,
        Pu(t.replace($t, "ms-"))
      )) : we.test(t) ? w.hasOwnProperty(t) && w[t] || (w[t] = !0, console.error(
        "Unsupported vendor-prefixed style property %s. Did you mean %s?",
        t,
        t.charAt(0).toUpperCase() + t.slice(1)
      )) : !C.test(a) || F.hasOwnProperty(a) && F[a] || (F[a] = !0, console.error(
        `Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`,
        t,
        a.replace(C, "")
      )), typeof a == "number" && (isNaN(a) ? Ce || (Ce = !0, console.error(
        "`NaN` is an invalid value for the `%s` css style property.",
        t
      )) : isFinite(a) || Dt || (Dt = !0, console.error(
        "`Infinity` is an invalid value for the `%s` css style property.",
        t
      )))), a == null || typeof a == "boolean" || a === "" ? i ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : i ? e.setProperty(t, a) : typeof a != "number" || a === 0 || Te.has(t) ? t === "float" ? e.cssFloat = a : (ll(a, t), e[t] = ("" + a).trim()) : e[t] = a + "px";
    }
    function Od(e, t, a) {
      if (t != null && typeof t != "object")
        throw Error(
          "The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX."
        );
      if (t && Object.freeze(t), e = e.style, a != null) {
        if (t) {
          var i = {};
          if (a) {
            for (var o in a)
              if (a.hasOwnProperty(o) && !t.hasOwnProperty(o))
                for (var f = G[o] || [o], d = 0; d < f.length; d++)
                  i[f[d]] = o;
          }
          for (var h in t)
            if (t.hasOwnProperty(h) && (!a || a[h] !== t[h]))
              for (o = G[h] || [h], f = 0; f < o.length; f++)
                i[o[f]] = h;
          h = {};
          for (var y in t)
            for (o = G[y] || [y], f = 0; f < o.length; f++)
              h[o[f]] = y;
          y = {};
          for (var p in i)
            if (o = i[p], (f = h[p]) && o !== f && (d = o + "," + f, !y[d])) {
              y[d] = !0, d = console;
              var M = t[o];
              d.error.call(
                d,
                "%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.",
                M == null || typeof M == "boolean" || M === "" ? "Removing" : "Updating",
                o,
                f
              );
            }
        }
        for (var U in a)
          !a.hasOwnProperty(U) || t != null && t.hasOwnProperty(U) || (U.indexOf("--") === 0 ? e.setProperty(U, "") : U === "float" ? e.cssFloat = "" : e[U] = "");
        for (var R in t)
          p = t[R], t.hasOwnProperty(R) && a[R] !== p && fo(e, R, p);
      } else
        for (i in t)
          t.hasOwnProperty(i) && fo(e, i, t[i]);
    }
    function kn(e) {
      if (e.indexOf("-") === -1) return !1;
      switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return !1;
        default:
          return !0;
      }
    }
    function Qr(e) {
      return Ut.get(e) || e;
    }
    function gf(e, t) {
      if (jn.call(nm, t) && nm[t])
        return !0;
      if (dE.test(t)) {
        if (e = "aria-" + t.slice(4).toLowerCase(), e = kg.hasOwnProperty(e) ? e : null, e == null)
          return console.error(
            "Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.",
            t
          ), nm[t] = !0;
        if (t !== e)
          return console.error(
            "Invalid ARIA attribute `%s`. Did you mean `%s`?",
            t,
            e
          ), nm[t] = !0;
      }
      if (sE.test(t)) {
        if (e = t.toLowerCase(), e = kg.hasOwnProperty(e) ? e : null, e == null) return nm[t] = !0, !1;
        t !== e && (console.error(
          "Unknown ARIA attribute `%s`. Did you mean `%s`?",
          t,
          e
        ), nm[t] = !0);
      }
      return !0;
    }
    function vf(e, t) {
      var a = [], i;
      for (i in t)
        gf(e, i) || a.push(i);
      t = a.map(function(o) {
        return "`" + o + "`";
      }).join(", "), a.length === 1 ? console.error(
        "Invalid aria prop %s on <%s> tag. For details, see https://react.dev/link/invalid-aria-props",
        t,
        e
      ) : 1 < a.length && console.error(
        "Invalid aria props %s on <%s> tag. For details, see https://react.dev/link/invalid-aria-props",
        t,
        e
      );
    }
    function ro(e, t, a, i) {
      if (jn.call(Gn, t) && Gn[t])
        return !0;
      var o = t.toLowerCase();
      if (o === "onfocusin" || o === "onfocusout")
        return console.error(
          "React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."
        ), Gn[t] = !0;
      if (typeof a == "function" && (e === "form" && t === "action" || e === "input" && t === "formAction" || e === "button" && t === "formAction"))
        return !0;
      if (i != null) {
        if (e = i.possibleRegistrationNames, i.registrationNameDependencies.hasOwnProperty(t))
          return !0;
        if (i = e.hasOwnProperty(o) ? e[o] : null, i != null)
          return console.error(
            "Invalid event handler property `%s`. Did you mean `%s`?",
            t,
            i
          ), Gn[t] = !0;
        if (CS.test(t))
          return console.error(
            "Unknown event handler property `%s`. It will be ignored.",
            t
          ), Gn[t] = !0;
      } else if (CS.test(t))
        return hE.test(t) && console.error(
          "Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.",
          t
        ), Gn[t] = !0;
      if (mE.test(t) || yE.test(t)) return !0;
      if (o === "innerhtml")
        return console.error(
          "Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."
        ), Gn[t] = !0;
      if (o === "aria")
        return console.error(
          "The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."
        ), Gn[t] = !0;
      if (o === "is" && a !== null && a !== void 0 && typeof a != "string")
        return console.error(
          "Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.",
          typeof a
        ), Gn[t] = !0;
      if (typeof a == "number" && isNaN(a))
        return console.error(
          "Received NaN for the `%s` attribute. If this is expected, cast the value to a string.",
          t
        ), Gn[t] = !0;
      if (Lu.hasOwnProperty(o)) {
        if (o = Lu[o], o !== t)
          return console.error(
            "Invalid DOM property `%s`. Did you mean `%s`?",
            t,
            o
          ), Gn[t] = !0;
      } else if (t !== o)
        return console.error(
          "React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.",
          t,
          o
        ), Gn[t] = !0;
      switch (t) {
        case "dangerouslySetInnerHTML":
        case "children":
        case "style":
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "ref":
          return !0;
        case "innerText":
        case "textContent":
          return !0;
      }
      switch (typeof a) {
        case "boolean":
          switch (t) {
            case "autoFocus":
            case "checked":
            case "multiple":
            case "muted":
            case "selected":
            case "contentEditable":
            case "spellCheck":
            case "draggable":
            case "value":
            case "autoReverse":
            case "externalResourcesRequired":
            case "focusable":
            case "preserveAlpha":
            case "allowFullScreen":
            case "async":
            case "autoPlay":
            case "controls":
            case "default":
            case "defer":
            case "disabled":
            case "disablePictureInPicture":
            case "disableRemotePlayback":
            case "formNoValidate":
            case "hidden":
            case "loop":
            case "noModule":
            case "noValidate":
            case "open":
            case "playsInline":
            case "readOnly":
            case "required":
            case "reversed":
            case "scoped":
            case "seamless":
            case "itemScope":
            case "capture":
            case "download":
            case "inert":
              return !0;
            default:
              return o = t.toLowerCase().slice(0, 5), o === "data-" || o === "aria-" ? !0 : (a ? console.error(
                'Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.',
                a,
                t,
                t,
                a,
                t
              ) : console.error(
                'Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.',
                a,
                t,
                t,
                a,
                t,
                t,
                t
              ), Gn[t] = !0);
          }
        case "function":
        case "symbol":
          return Gn[t] = !0, !1;
        case "string":
          if (a === "false" || a === "true") {
            switch (t) {
              case "checked":
              case "selected":
              case "multiple":
              case "muted":
              case "allowFullScreen":
              case "async":
              case "autoPlay":
              case "controls":
              case "default":
              case "defer":
              case "disabled":
              case "disablePictureInPicture":
              case "disableRemotePlayback":
              case "formNoValidate":
              case "hidden":
              case "loop":
              case "noModule":
              case "noValidate":
              case "open":
              case "playsInline":
              case "readOnly":
              case "required":
              case "reversed":
              case "scoped":
              case "seamless":
              case "itemScope":
              case "inert":
                break;
              default:
                return !0;
            }
            console.error(
              "Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?",
              a,
              t,
              a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".',
              t,
              a
            ), Gn[t] = !0;
          }
      }
      return !0;
    }
    function Zr(e, t, a) {
      var i = [], o;
      for (o in t)
        ro(e, o, t[o], a) || i.push(o);
      t = i.map(function(f) {
        return "`" + f + "`";
      }).join(", "), i.length === 1 ? console.error(
        "Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://react.dev/link/attribute-behavior ",
        t,
        e
      ) : 1 < i.length && console.error(
        "Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://react.dev/link/attribute-behavior ",
        t,
        e
      );
    }
    function bc(e) {
      return pE.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
    }
    function La() {
    }
    function on(e) {
      return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
    }
    function so(e) {
      var t = ce(e);
      if (t && (e = t.stateNode)) {
        var a = e[an] || null;
        e: switch (e = t.stateNode, t.type) {
          case "input":
            if (Xl(
              e,
              a.value,
              a.defaultValue,
              a.defaultValue,
              a.checked,
              a.defaultChecked,
              a.type,
              a.name
            ), t = a.name, a.type === "radio" && t != null) {
              for (a = e; a.parentNode; ) a = a.parentNode;
              for (rt(t, "name"), a = a.querySelectorAll(
                'input[name="' + Re(
                  "" + t
                ) + '"][type="radio"]'
              ), t = 0; t < a.length; t++) {
                var i = a[t];
                if (i !== e && i.form === e.form) {
                  var o = i[an] || null;
                  if (!o)
                    throw Error(
                      "ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported."
                    );
                  Xl(
                    i,
                    o.value,
                    o.defaultValue,
                    o.defaultValue,
                    o.checked,
                    o.defaultChecked,
                    o.type,
                    o.name
                  );
                }
              }
              for (t = 0; t < a.length; t++)
                i = a[t], i.form === e.form && Ge(i);
            }
            break e;
          case "textarea":
            An(e, a.value, a.defaultValue);
            break e;
          case "select":
            t = a.value, t != null && ya(e, !!a.multiple, t, !1);
        }
      }
    }
    function Ec(e, t, a) {
      if (h1) return e(t, a);
      h1 = !0;
      try {
        var i = e(t);
        return i;
      } finally {
        if (h1 = !1, (um !== null || im !== null) && (Yn(), um && (t = um, e = im, im = um = null, so(t), e)))
          for (t = 0; t < e.length; t++) so(e[t]);
      }
    }
    function Xa(e, t) {
      var a = e.stateNode;
      if (a === null) return null;
      var i = a[an] || null;
      if (i === null) return null;
      a = i[t];
      e: switch (t) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          (i = !i.disabled) || (e = e.type, i = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !i;
          break e;
        default:
          e = !1;
      }
      if (e) return null;
      if (a && typeof a != "function")
        throw Error(
          "Expected `" + t + "` listener to be a function, instead got a value of `" + typeof a + "` type."
        );
      return a;
    }
    function Su() {
      if (Fg) return Fg;
      var e, t = y1, a = t.length, i, o = "value" in Er ? Er.value : Er.textContent, f = o.length;
      for (e = 0; e < a && t[e] === o[e]; e++) ;
      var d = a - e;
      for (i = 1; i <= d && t[a - i] === o[f - i]; i++) ;
      return Fg = o.slice(e, 1 < i ? 1 - i : void 0);
    }
    function Jr(e) {
      var t = e.keyCode;
      return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
    }
    function Sf() {
      return !0;
    }
    function wm() {
      return !1;
    }
    function Wl(e) {
      function t(a, i, o, f, d) {
        this._reactName = a, this._targetInst = o, this.type = i, this.nativeEvent = f, this.target = d, this.currentTarget = null;
        for (var h in e)
          e.hasOwnProperty(h) && (a = e[h], this[h] = a ? a(f) : f[h]);
        return this.isDefaultPrevented = (f.defaultPrevented != null ? f.defaultPrevented : f.returnValue === !1) ? Sf : wm, this.isPropagationStopped = wm, this;
      }
      return st(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = Sf);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = Sf);
        },
        persist: function() {
        },
        isPersistent: Sf
      }), t;
    }
    function Zi(e) {
      var t = this.nativeEvent;
      return t.getModifierState ? t.getModifierState(e) : (e = ME[e]) ? !!t[e] : !1;
    }
    function Kr() {
      return Zi;
    }
    function bf(e, t) {
      switch (e) {
        case "keyup":
          return LE.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== NS;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function Ji(e) {
      return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
    }
    function qm(e, t) {
      switch (e) {
        case "compositionend":
          return Ji(t);
        case "keypress":
          return t.which !== YS ? null : (qS = !0, wS);
        case "textInput":
          return e = t.data, e === wS && qS ? null : e;
        default:
          return null;
      }
    }
    function Dd(e, t) {
      if (cm)
        return e === "compositionend" || !S1 && bf(e, t) ? (e = Su(), Fg = y1 = Er = null, cm = !1, e) : null;
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
            if (t.char && 1 < t.char.length)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return BS && t.locale !== "ko" ? null : t.data;
        default:
          return null;
      }
    }
    function jm(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!VE[e.type] : t === "textarea";
    }
    function zd(e) {
      if (!eo) return !1;
      e = "on" + e;
      var t = e in document;
      return t || (t = document.createElement("div"), t.setAttribute(e, "return;"), t = typeof t[e] == "function"), t;
    }
    function $r(e, t, a, i) {
      um ? im ? im.push(i) : im = [i] : um = i, t = Yu(t, "onChange"), 0 < t.length && (a = new Wg(
        "onChange",
        "change",
        null,
        a,
        i
      ), e.push({ event: a, listeners: t }));
    }
    function Mp(e) {
      Lt(e, 0);
    }
    function Sa(e) {
      var t = ge(e);
      if (Ge(t)) return e;
    }
    function Tc(e, t) {
      if (e === "change") return t;
    }
    function kr() {
      w0 && (w0.detachEvent("onpropertychange", Ef), q0 = w0 = null);
    }
    function Ef(e) {
      if (e.propertyName === "value" && Sa(q0)) {
        var t = [];
        $r(
          t,
          q0,
          e,
          on(e)
        ), Ec(Mp, t);
      }
    }
    function e1(e, t, a) {
      e === "focusin" ? (kr(), w0 = t, q0 = a, w0.attachEvent("onpropertychange", Ef)) : e === "focusout" && kr();
    }
    function Gm(e) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return Sa(q0);
    }
    function Lm(e, t) {
      if (e === "click") return Sa(t);
    }
    function Fr(e, t) {
      if (e === "input" || e === "change")
        return Sa(t);
    }
    function Md(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    function Tf(e, t) {
      if (Ln(e, t)) return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length) return !1;
      for (i = 0; i < a.length; i++) {
        var o = a[i];
        if (!jn.call(t, o) || !Ln(e[o], t[o]))
          return !1;
      }
      return !0;
    }
    function Cp(e) {
      for (; e && e.firstChild; ) e = e.firstChild;
      return e;
    }
    function Up(e, t) {
      var a = Cp(e);
      e = 0;
      for (var i; a; ) {
        if (a.nodeType === 3) {
          if (i = e + a.textContent.length, e <= t && i >= t)
            return { node: a, offset: t - e };
          e = i;
        }
        e: {
          for (; a; ) {
            if (a.nextSibling) {
              a = a.nextSibling;
              break e;
            }
            a = a.parentNode;
          }
          a = void 0;
        }
        a = Cp(a);
      }
    }
    function Hp(e, t) {
      return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Hp(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
    }
    function Cd(e) {
      e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
      for (var t = xt(e.document); t instanceof e.HTMLIFrameElement; ) {
        try {
          var a = typeof t.contentWindow.location.href == "string";
        } catch {
          a = !1;
        }
        if (a) e = t.contentWindow;
        else break;
        t = xt(e.document);
      }
      return t;
    }
    function Xm(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function xp(e, t, a) {
      var i = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
      E1 || om == null || om !== xt(i) || (i = om, "selectionStart" in i && Xm(i) ? i = { start: i.selectionStart, end: i.selectionEnd } : (i = (i.ownerDocument && i.ownerDocument.defaultView || window).getSelection(), i = {
        anchorNode: i.anchorNode,
        anchorOffset: i.anchorOffset,
        focusNode: i.focusNode,
        focusOffset: i.focusOffset
      }), j0 && Tf(j0, i) || (j0 = i, i = Yu(b1, "onSelect"), 0 < i.length && (t = new Wg(
        "onSelect",
        "select",
        null,
        t,
        a
      ), e.push({ event: t, listeners: i }), t.target = om)));
    }
    function ho(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    function mo(e) {
      if (T1[e]) return T1[e];
      if (!fm[e]) return e;
      var t = fm[e], a;
      for (a in t)
        if (t.hasOwnProperty(a) && a in GS)
          return T1[e] = t[a];
      return e;
    }
    function bu(e, t) {
      ZS.set(e, t), nt(t, [e]);
    }
    function Np(e) {
      for (var t = Pg, a = 0; a < e.length; a++) {
        var i = e[a];
        if (typeof i == "object" && i !== null)
          if (ql(i) && i.length === 2 && typeof i[0] == "string") {
            if (t !== Pg && t !== D1)
              return _1;
            t = D1;
          } else return _1;
        else {
          if (typeof i == "function" || typeof i == "string" && 50 < i.length || t !== Pg && t !== O1)
            return _1;
          t = O1;
        }
      }
      return t;
    }
    function Vm(e, t, a, i) {
      for (var o in e)
        jn.call(e, o) && o[0] !== "_" && ei(o, e[o], t, a, i);
    }
    function ei(e, t, a, i, o) {
      switch (typeof t) {
        case "object":
          if (t === null) {
            t = "null";
            break;
          } else {
            if (t.$$typeof === iu) {
              var f = lt(t.type) || "…", d = t.key;
              t = t.props;
              var h = Object.keys(t), y = h.length;
              if (d == null && y === 0) {
                t = "<" + f + " />";
                break;
              }
              if (3 > i || y === 1 && h[0] === "children" && d == null) {
                t = "<" + f + " … />";
                break;
              }
              a.push([
                o + "  ".repeat(i) + e,
                "<" + f
              ]), d !== null && ei(
                "key",
                d,
                a,
                i + 1,
                o
              ), e = !1;
              for (var p in t)
                p === "children" ? t.children != null && (!ql(t.children) || 0 < t.children.length) && (e = !0) : jn.call(t, p) && p[0] !== "_" && ei(
                  p,
                  t[p],
                  a,
                  i + 1,
                  o
                );
              a.push([
                "",
                e ? ">…</" + f + ">" : "/>"
              ]);
              return;
            }
            if (f = Object.prototype.toString.call(t), f = f.slice(8, f.length - 1), f === "Array") {
              if (p = Np(t), p === O1 || p === Pg) {
                t = JSON.stringify(t);
                break;
              } else if (p === D1) {
                for (a.push([
                  o + "  ".repeat(i) + e,
                  ""
                ]), e = 0; e < t.length; e++)
                  f = t[e], ei(
                    f[0],
                    f[1],
                    a,
                    i + 1,
                    o
                  );
                return;
              }
            }
            if (f === "Promise") {
              if (t.status === "fulfilled") {
                if (f = a.length, ei(
                  e,
                  t.value,
                  a,
                  i,
                  o
                ), a.length > f) {
                  a = a[f], a[1] = "Promise<" + (a[1] || "Object") + ">";
                  return;
                }
              } else if (t.status === "rejected" && (f = a.length, ei(
                e,
                t.reason,
                a,
                i,
                o
              ), a.length > f)) {
                a = a[f], a[1] = "Rejected Promise<" + a[1] + ">";
                return;
              }
              a.push([
                "  ".repeat(i) + e,
                "Promise"
              ]);
              return;
            }
            f === "Object" && (p = Object.getPrototypeOf(t)) && typeof p.constructor == "function" && (f = p.constructor.name), a.push([
              o + "  ".repeat(i) + e,
              f === "Object" ? 3 > i ? "" : "…" : f
            ]), 3 > i && Vm(t, a, i + 1, o);
            return;
          }
        case "function":
          t = t.name === "" ? "() => {}" : t.name + "() {}";
          break;
        case "string":
          t = t === FE ? "…" : JSON.stringify(t);
          break;
        case "undefined":
          t = "undefined";
          break;
        case "boolean":
          t = t ? "true" : "false";
          break;
        default:
          t = String(t);
      }
      a.push([
        o + "  ".repeat(i) + e,
        t
      ]);
    }
    function Bp(e, t, a, i) {
      var o = !0;
      for (d in e)
        d in t || (a.push([
          ev + "  ".repeat(i) + d,
          "…"
        ]), o = !1);
      for (var f in t)
        if (f in e) {
          var d = e[f], h = t[f];
          if (d !== h) {
            if (i === 0 && f === "children")
              o = "  ".repeat(i) + f, a.push(
                [ev + o, "…"],
                [tv + o, "…"]
              );
            else {
              if (!(3 <= i)) {
                if (typeof d == "object" && typeof h == "object" && d !== null && h !== null && d.$$typeof === h.$$typeof)
                  if (h.$$typeof === iu) {
                    if (d.type === h.type && d.key === h.key) {
                      d = lt(h.type) || "…", o = "  ".repeat(i) + f, d = "<" + d + " … />", a.push(
                        [ev + o, d],
                        [tv + o, d]
                      ), o = !1;
                      continue;
                    }
                  } else {
                    var y = Object.prototype.toString.call(d), p = Object.prototype.toString.call(h);
                    if (y === p && (p === "[object Object]" || p === "[object Array]")) {
                      y = [
                        $S + "  ".repeat(i) + f,
                        p === "[object Array]" ? "Array" : ""
                      ], a.push(y), p = a.length, Bp(
                        d,
                        h,
                        a,
                        i + 1
                      ) ? p === a.length && (y[1] = "Referentially unequal but deeply equal objects. Consider memoization.") : o = !1;
                      continue;
                    }
                  }
                else if (typeof d == "function" && typeof h == "function" && d.name === h.name && d.length === h.length && (y = Function.prototype.toString.call(d), p = Function.prototype.toString.call(h), y === p)) {
                  d = h.name === "" ? "() => {}" : h.name + "() {}", a.push([
                    $S + "  ".repeat(i) + f,
                    d + " Referentially unequal function closure. Consider memoization."
                  ]);
                  continue;
                }
              }
              ei(f, d, a, i, ev), ei(f, h, a, i, tv);
            }
            o = !1;
          }
        } else
          a.push([
            tv + "  ".repeat(i) + f,
            "…"
          ]), o = !1;
      return o;
    }
    function Eu(e) {
      _t = e & 63 ? "Blocking" : e & 64 ? "Gesture" : e & 4194176 ? "Transition" : e & 62914560 ? "Suspense" : e & 2080374784 ? "Idle" : "Other";
    }
    function Fn(e, t, a, i) {
      rl && (Ar.start = t, Ar.end = a, Po.color = "warning", Po.tooltipText = i, Po.properties = null, (e = e._debugTask) ? e.run(
        performance.measure.bind(
          performance,
          i,
          Ar
        )
      ) : performance.measure(i, Ar));
    }
    function Ud(e, t, a) {
      Fn(e, t, a, "Reconnect");
    }
    function Hd(e, t, a, i, o) {
      var f = pe(e);
      if (f !== null && rl) {
        var d = e.alternate, h = e.actualDuration;
        if (d === null || d.child !== e.child)
          for (var y = e.child; y !== null; y = y.sibling)
            h -= y.actualDuration;
        i = 0.5 > h ? i ? "tertiary-light" : "primary-light" : 10 > h ? i ? "tertiary" : "primary" : 100 > h ? i ? "tertiary-dark" : "primary-dark" : "error";
        var p = e.memoizedProps;
        h = e._debugTask, p !== null && d !== null && d.memoizedProps !== p ? (y = [WE], p = Bp(
          d.memoizedProps,
          p,
          y,
          0
        ), 1 < y.length && (p && !Tr && (d.lanes & o) === 0 && 100 < e.actualDuration ? (Tr = !0, y[0] = IE, Po.color = "warning", Po.tooltipText = kS) : (Po.color = i, Po.tooltipText = f), Po.properties = y, Ar.start = t, Ar.end = a, h != null ? h.run(
          performance.measure.bind(
            performance,
            "​" + f,
            Ar
          )
        ) : performance.measure(
          "​" + f,
          Ar
        ))) : h != null ? h.run(
          console.timeStamp.bind(
            console,
            f,
            t,
            a,
            Di,
            void 0,
            i
          )
        ) : console.timeStamp(
          f,
          t,
          a,
          Di,
          void 0,
          i
        );
      }
    }
    function Qm(e, t, a, i) {
      if (rl) {
        var o = pe(e);
        if (o !== null) {
          for (var f = null, d = [], h = 0; h < i.length; h++) {
            var y = i[h];
            f == null && y.source !== null && (f = y.source._debugTask), y = y.value, d.push([
              "Error",
              typeof y == "object" && y !== null && typeof y.message == "string" ? String(y.message) : String(y)
            ]);
          }
          e.key !== null && ei("key", e.key, d, 0, ""), e.memoizedProps !== null && Vm(e.memoizedProps, d, 0, ""), f == null && (f = e._debugTask), e = {
            start: t,
            end: a,
            detail: {
              devtools: {
                color: "error",
                track: Di,
                tooltipText: e.tag === 13 ? "Hydration failed" : "Error boundary caught an error",
                properties: d
              }
            }
          }, f ? f.run(
            performance.measure.bind(performance, "​" + o, e)
          ) : performance.measure("​" + o, e);
        }
      }
    }
    function Tu(e, t, a, i, o) {
      if (o !== null) {
        if (rl) {
          var f = pe(e);
          if (f !== null) {
            i = [];
            for (var d = 0; d < o.length; d++) {
              var h = o[d].value;
              i.push([
                "Error",
                typeof h == "object" && h !== null && typeof h.message == "string" ? String(h.message) : String(h)
              ]);
            }
            e.key !== null && ei("key", e.key, i, 0, ""), e.memoizedProps !== null && Vm(e.memoizedProps, i, 0, ""), t = {
              start: t,
              end: a,
              detail: {
                devtools: {
                  color: "error",
                  track: Di,
                  tooltipText: "A lifecycle or effect errored",
                  properties: i
                }
              }
            }, (e = e._debugTask) ? e.run(
              performance.measure.bind(
                performance,
                "​" + f,
                t
              )
            ) : performance.measure("​" + f, t);
          }
        }
      } else
        f = pe(e), f !== null && rl && (o = 1 > i ? "secondary-light" : 100 > i ? "secondary" : 500 > i ? "secondary-dark" : "error", (e = e._debugTask) ? e.run(
          console.timeStamp.bind(
            console,
            f,
            t,
            a,
            Di,
            void 0,
            o
          )
        ) : console.timeStamp(
          f,
          t,
          a,
          Di,
          void 0,
          o
        ));
    }
    function t1(e, t, a, i) {
      if (rl && !(t <= e)) {
        var o = (a & 738197653) === a ? "tertiary-dark" : "primary-dark";
        a = (a & 536870912) === a ? "Prepared" : (a & 201326741) === a ? "Hydrated" : "Render", i ? i.run(
          console.timeStamp.bind(
            console,
            a,
            e,
            t,
            _t,
            At,
            o
          )
        ) : console.timeStamp(
          a,
          e,
          t,
          _t,
          At,
          o
        );
      }
    }
    function Yp(e, t, a, i) {
      !rl || t <= e || (a = (a & 738197653) === a ? "tertiary-dark" : "primary-dark", i ? i.run(
        console.timeStamp.bind(
          console,
          "Prewarm",
          e,
          t,
          _t,
          At,
          a
        )
      ) : console.timeStamp(
        "Prewarm",
        e,
        t,
        _t,
        At,
        a
      ));
    }
    function wp(e, t, a, i) {
      !rl || t <= e || (a = (a & 738197653) === a ? "tertiary-dark" : "primary-dark", i ? i.run(
        console.timeStamp.bind(
          console,
          "Suspended",
          e,
          t,
          _t,
          At,
          a
        )
      ) : console.timeStamp(
        "Suspended",
        e,
        t,
        _t,
        At,
        a
      ));
    }
    function l1(e, t, a, i, o, f) {
      if (rl && !(t <= e)) {
        a = [];
        for (var d = 0; d < i.length; d++) {
          var h = i[d].value;
          a.push([
            "Recoverable Error",
            typeof h == "object" && h !== null && typeof h.message == "string" ? String(h.message) : String(h)
          ]);
        }
        e = {
          start: e,
          end: t,
          detail: {
            devtools: {
              color: "primary-dark",
              track: _t,
              trackGroup: At,
              tooltipText: o ? "Hydration Failed" : "Recovered after Error",
              properties: a
            }
          }
        }, f ? f.run(
          performance.measure.bind(performance, "Recovered", e)
        ) : performance.measure("Recovered", e);
      }
    }
    function Zm(e, t, a, i) {
      !rl || t <= e || (i ? i.run(
        console.timeStamp.bind(
          console,
          "Errored",
          e,
          t,
          _t,
          At,
          "error"
        )
      ) : console.timeStamp(
        "Errored",
        e,
        t,
        _t,
        At,
        "error"
      ));
    }
    function a1(e, t, a, i) {
      !rl || t <= e || (i ? i.run(
        console.timeStamp.bind(
          console,
          a,
          e,
          t,
          _t,
          At,
          "secondary-light"
        )
      ) : console.timeStamp(
        a,
        e,
        t,
        _t,
        At,
        "secondary-light"
      ));
    }
    function qp(e, t, a, i, o) {
      if (rl && !(t <= e)) {
        for (var f = [], d = 0; d < a.length; d++) {
          var h = a[d].value;
          f.push([
            "Error",
            typeof h == "object" && h !== null && typeof h.message == "string" ? String(h.message) : String(h)
          ]);
        }
        e = {
          start: e,
          end: t,
          detail: {
            devtools: {
              color: "error",
              track: _t,
              trackGroup: At,
              tooltipText: i ? "Remaining Effects Errored" : "Commit Errored",
              properties: f
            }
          }
        }, o ? o.run(
          performance.measure.bind(performance, "Errored", e)
        ) : performance.measure("Errored", e);
      }
    }
    function Jm(e, t, a) {
      !rl || t <= e || console.timeStamp(
        "Animating",
        e,
        t,
        _t,
        At,
        "secondary-dark"
      );
    }
    function xd() {
      for (var e = rm, t = z1 = rm = 0; t < e; ) {
        var a = zi[t];
        zi[t++] = null;
        var i = zi[t];
        zi[t++] = null;
        var o = zi[t];
        zi[t++] = null;
        var f = zi[t];
        if (zi[t++] = null, i !== null && o !== null) {
          var d = i.pending;
          d === null ? o.next = o : (o.next = d.next, d.next = o), i.pending = o;
        }
        f !== 0 && Km(a, o, f);
      }
    }
    function Af(e, t, a, i) {
      zi[rm++] = e, zi[rm++] = t, zi[rm++] = a, zi[rm++] = i, z1 |= i, e.lanes |= i, e = e.alternate, e !== null && (e.lanes |= i);
    }
    function yo(e, t, a, i) {
      return Af(e, t, a, i), Wr(e);
    }
    function Ma(e, t) {
      return Af(e, null, null, t), Wr(e);
    }
    function Km(e, t, a) {
      e.lanes |= a;
      var i = e.alternate;
      i !== null && (i.lanes |= a);
      for (var o = !1, f = e.return; f !== null; )
        f.childLanes |= a, i = f.alternate, i !== null && (i.childLanes |= a), f.tag === 22 && (e = f.stateNode, e === null || e._visibility & G0 || (o = !0)), e = f, f = f.return;
      return e.tag === 3 ? (f = e.stateNode, o && t !== null && (o = 31 - Ea(a), e = f.hiddenUpdates, i = e[o], i === null ? e[o] = [t] : i.push(t), t.lane = a | 536870912), f) : null;
    }
    function Wr(e) {
      if (hp > mT)
        throw Sd = hp = 0, mp = cS = null, Error(
          "Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops."
        );
      Sd > yT && (Sd = 0, mp = null, console.error(
        "Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."
      )), e.alternate === null && (e.flags & 4098) !== 0 && uu(e);
      for (var t = e, a = t.return; a !== null; )
        t.alternate === null && (t.flags & 4098) !== 0 && uu(e), t = a, a = t.return;
      return t.tag === 3 ? t.stateNode : null;
    }
    function Ac(e) {
      if (Mi === null) return e;
      var t = Mi(e);
      return t === void 0 ? e : t.current;
    }
    function Nd(e) {
      if (Mi === null) return e;
      var t = Mi(e);
      return t === void 0 ? e != null && typeof e.render == "function" && (t = Ac(e.render), e.render !== t) ? (t = { $$typeof: rr, render: t }, e.displayName !== void 0 && (t.displayName = e.displayName), t) : e : t.current;
    }
    function $m(e, t) {
      if (Mi === null) return !1;
      var a = e.elementType;
      t = t.type;
      var i = !1, o = typeof t == "object" && t !== null ? t.$$typeof : null;
      switch (e.tag) {
        case 1:
          typeof t == "function" && (i = !0);
          break;
        case 0:
          (typeof t == "function" || o === Ha) && (i = !0);
          break;
        case 11:
          (o === rr || o === Ha) && (i = !0);
          break;
        case 14:
        case 15:
          (o === Ws || o === Ha) && (i = !0);
          break;
        default:
          return !1;
      }
      return !!(i && (e = Mi(a), e !== void 0 && e === Mi(t)));
    }
    function po(e) {
      Mi !== null && typeof WeakSet == "function" && (sm === null && (sm = /* @__PURE__ */ new WeakSet()), sm.add(e));
    }
    function jp(e, t, a) {
      do {
        var i = e, o = i.alternate, f = i.child, d = i.sibling, h = i.tag;
        i = i.type;
        var y = null;
        switch (h) {
          case 0:
          case 15:
          case 1:
            y = i;
            break;
          case 11:
            y = i.render;
        }
        if (Mi === null)
          throw Error("Expected resolveFamily to be set during hot reload.");
        var p = !1;
        if (i = !1, y !== null && (y = Mi(y), y !== void 0 && (a.has(y) ? i = !0 : t.has(y) && (h === 1 ? i = !0 : p = !0))), sm !== null && (sm.has(e) || o !== null && sm.has(o)) && (i = !0), i && (e._debugNeedsRemount = !0), (i || p) && (o = Ma(e, 2), o !== null && Ke(o, e, 2)), f === null || i || jp(
          f,
          t,
          a
        ), d === null) break;
        e = d;
      } while (!0);
    }
    function n1(e, t, a, i) {
      this.tag = e, this.key = a, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = i, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null, this.actualDuration = -0, this.actualStartTime = -1.1, this.treeBaseDuration = this.selfBaseDuration = -0, this._debugTask = this._debugStack = this._debugOwner = this._debugInfo = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, FS || typeof Object.preventExtensions != "function" || Object.preventExtensions(this);
    }
    function km(e) {
      return e = e.prototype, !(!e || !e.isReactComponent);
    }
    function ti(e, t) {
      var a = e.alternate;
      switch (a === null ? (a = H(
        e.tag,
        t,
        e.key,
        e.mode
      ), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugOwner = e._debugOwner, a._debugStack = e._debugStack, a._debugTask = e._debugTask, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = 0, a.subtreeFlags = 0, a.deletions = null, a.actualDuration = -0, a.actualStartTime = -1.1), a.flags = e.flags & 65011712, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue, t = e.dependencies, a.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext,
        _debugThenableState: t._debugThenableState
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.refCleanup = e.refCleanup, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugInfo = e._debugInfo, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case 0:
        case 15:
          a.type = Ac(e.type);
          break;
        case 1:
          a.type = Ac(e.type);
          break;
        case 11:
          a.type = Nd(e.type);
      }
      return a;
    }
    function Fm(e, t) {
      e.flags &= 65011714;
      var a = e.alternate;
      return a === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0) : (e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type, t = a.dependencies, e.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext,
        _debugThenableState: t._debugThenableState
      }, e.selfBaseDuration = a.selfBaseDuration, e.treeBaseDuration = a.treeBaseDuration), e;
    }
    function go(e, t, a, i, o, f) {
      var d = 0, h = e;
      if (typeof e == "function")
        km(e) && (d = 1), h = Ac(h);
      else if (typeof e == "string")
        d = v(), d = Ng(e, a, d) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
      else
        e: switch (e) {
          case Gu:
            return t = H(31, a, t, o), t.elementType = Gu, t.lanes = f, t;
          case fr:
            return vo(
              a.children,
              o,
              f,
              t
            );
          case ln:
            d = 8, o |= gn, o |= hc;
            break;
          case Fs:
            return e = a, i = o, typeof e.id != "string" && console.error(
              'Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.',
              typeof e.id
            ), t = H(12, e, t, i | dt), t.elementType = Fs, t.lanes = f, t.stateNode = { effectDuration: 0, passiveEffectDuration: 0 }, t;
          case $o:
            return t = H(13, a, t, o), t.elementType = $o, t.lanes = f, t;
          case yn:
            return t = H(19, a, t, o), t.elementType = yn, t.lanes = f, t;
          default:
            if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
                case ju:
                  d = 10;
                  break e;
                case Jh:
                  d = 9;
                  break e;
                case rr:
                  d = 11, h = Nd(h);
                  break e;
                case Ws:
                  d = 14;
                  break e;
                case Ha:
                  d = 16, h = null;
                  break e;
              }
            h = "", (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (h += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), e === null ? a = "null" : ql(e) ? a = "array" : e !== void 0 && e.$$typeof === iu ? (a = "<" + (lt(e.type) || "Unknown") + " />", h = " Did you accidentally export a JSX literal instead of a component?") : a = typeof e, (d = i ? gt(i) : null) && (h += `

Check the render method of \`` + d + "`."), d = 29, a = Error(
              "Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: " + (a + "." + h)
            ), h = null;
        }
      return t = H(d, a, t, o), t.elementType = e, t.type = h, t.lanes = f, t._debugOwner = i, t;
    }
    function Rc(e, t, a) {
      return t = go(
        e.type,
        e.key,
        e.props,
        e._owner,
        t,
        a
      ), t._debugOwner = e._owner, t._debugStack = e._debugStack, t._debugTask = e._debugTask, t;
    }
    function vo(e, t, a, i) {
      return e = H(7, e, i, t), e.lanes = a, e;
    }
    function Rf(e, t, a) {
      return e = H(6, e, null, t), e.lanes = a, e;
    }
    function Wm(e) {
      var t = H(18, null, null, Ze);
      return t.stateNode = e, t;
    }
    function Bd(e, t, a) {
      return t = H(
        4,
        e.children !== null ? e.children : [],
        e.key,
        t
      ), t.lanes = a, t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
      }, t;
    }
    function Va(e, t) {
      if (typeof e == "object" && e !== null) {
        var a = M1.get(e);
        return a !== void 0 ? a : (t = {
          value: e,
          source: t,
          stack: Oe(t)
        }, M1.set(e, t), t);
      }
      return {
        value: e,
        source: t,
        stack: Oe(t)
      };
    }
    function Au(e, t) {
      _c(), dm[hm++] = L0, dm[hm++] = lv, lv = e, L0 = t;
    }
    function Im(e, t, a) {
      _c(), Ci[Ui++] = tf, Ci[Ui++] = lf, Ci[Ui++] = nd, nd = e;
      var i = tf;
      e = lf;
      var o = 32 - Ea(i) - 1;
      i &= ~(1 << o), a += 1;
      var f = 32 - Ea(t) + o;
      if (30 < f) {
        var d = o - o % 5;
        f = (i & (1 << d) - 1).toString(32), i >>= d, o -= d, tf = 1 << 32 - Ea(t) + o | a << o | i, lf = f + e;
      } else
        tf = 1 << f | a << o | i, lf = e;
    }
    function Yd(e) {
      _c(), e.return !== null && (Au(e, 1), Im(e, 1, 0));
    }
    function wd(e) {
      for (; e === lv; )
        lv = dm[--hm], dm[hm] = null, L0 = dm[--hm], dm[hm] = null;
      for (; e === nd; )
        nd = Ci[--Ui], Ci[Ui] = null, lf = Ci[--Ui], Ci[Ui] = null, tf = Ci[--Ui], Ci[Ui] = null;
    }
    function Gp() {
      return _c(), nd !== null ? { id: tf, overflow: lf } : null;
    }
    function Lp(e, t) {
      _c(), Ci[Ui++] = tf, Ci[Ui++] = lf, Ci[Ui++] = nd, tf = t.id, lf = t.overflow, nd = e;
    }
    function _c() {
      Tt || console.error(
        "Expected to be hydrating. This is a bug in React. Please file an issue."
      );
    }
    function So(e, t) {
      if (e.return === null) {
        if (Xu === null)
          Xu = {
            fiber: e,
            children: [],
            serverProps: void 0,
            serverTail: [],
            distanceFromLeaf: t
          };
        else {
          if (Xu.fiber !== e)
            throw Error(
              "Saw multiple hydration diff roots in a pass. This is a bug in React."
            );
          Xu.distanceFromLeaf > t && (Xu.distanceFromLeaf = t);
        }
        return Xu;
      }
      var a = So(
        e.return,
        t + 1
      ).children;
      return 0 < a.length && a[a.length - 1].fiber === e ? (a = a[a.length - 1], a.distanceFromLeaf > t && (a.distanceFromLeaf = t), a) : (t = {
        fiber: e,
        children: [],
        serverProps: void 0,
        serverTail: [],
        distanceFromLeaf: t
      }, a.push(t), t);
    }
    function Xp() {
      Tt && console.error(
        "We should not be hydrating here. This is a bug in React. Please file a bug."
      );
    }
    function Ca(e, t) {
      to || (e = So(e, 0), e.serverProps = null, t !== null && (t = Cg(t), e.serverTail.push(t)));
    }
    function Wn(e) {
      var t = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : !1, a = "", i = Xu;
      throw i !== null && (Xu = null, a = Li(i)), Pr(
        Va(
          Error(
            "Hydration failed because the server rendered " + (t ? "text" : "HTML") + ` didn't match the client. As a result this tree will be regenerated on the client. This can happen if a SSR-ed Client Component used:

- A server/client branch \`if (typeof window !== 'undefined')\`.
- Variable input such as \`Date.now()\` or \`Math.random()\` which changes each time it's called.
- Date formatting in a user's locale which doesn't match the server.
- External changing data without sending a snapshot of it along with the HTML.
- Invalid HTML tag nesting.

It can also happen if the client has a browser extension installed which messes with the HTML before React loaded.

https://react.dev/link/hydration-mismatch` + a
          ),
          e
        )
      ), C1;
    }
    function Pm(e) {
      var t = e.stateNode, a = e.type, i = e.memoizedProps;
      switch (t[fl] = e, t[an] = i, en(a, i), a) {
        case "dialog":
          Ve("cancel", t), Ve("close", t);
          break;
        case "iframe":
        case "object":
        case "embed":
          Ve("load", t);
          break;
        case "video":
        case "audio":
          for (a = 0; a < yp.length; a++)
            Ve(yp[a], t);
          break;
        case "source":
          Ve("error", t);
          break;
        case "img":
        case "image":
        case "link":
          Ve("error", t), Ve("load", t);
          break;
        case "details":
          Ve("toggle", t);
          break;
        case "input":
          Sl("input", i), Ve("invalid", t), qt(t, i), Ga(
            t,
            i.value,
            i.defaultValue,
            i.checked,
            i.defaultChecked,
            i.type,
            i.name,
            !0
          );
          break;
        case "option":
          Tn(t, i);
          break;
        case "select":
          Sl("select", i), Ve("invalid", t), hu(t, i);
          break;
        case "textarea":
          Sl("textarea", i), Ve("invalid", t), xl(t, i), Gi(
            t,
            i.value,
            i.defaultValue,
            i.children
          );
      }
      a = i.children, typeof a != "string" && typeof a != "number" && typeof a != "bigint" || t.textContent === "" + a || i.suppressHydrationWarning === !0 || t0(t.textContent, a) ? (i.popover != null && (Ve("beforetoggle", t), Ve("toggle", t)), i.onScroll != null && Ve("scroll", t), i.onScrollEnd != null && Ve("scrollend", t), i.onClick != null && (t.onclick = La), t = !0) : t = !1, t || Wn(e, !0);
    }
    function ey(e) {
      for (nn = e.return; nn; )
        switch (nn.tag) {
          case 5:
          case 31:
          case 13:
            Hi = !1;
            return;
          case 27:
          case 3:
            Hi = !0;
            return;
          default:
            nn = nn.return;
        }
    }
    function bo(e) {
      if (e !== nn) return !1;
      if (!Tt)
        return ey(e), Tt = !0, !1;
      var t = e.tag, a;
      if ((a = t !== 3 && t !== 27) && ((a = t === 5) && (a = e.type, a = !(a !== "form" && a !== "button") || tr(e.type, e.memoizedProps)), a = !a), a && sl) {
        for (a = sl; a; ) {
          var i = So(e, 0), o = Cg(a);
          i.serverTail.push(o), a = o.type === "Suspense" ? nr(a) : wn(a.nextSibling);
        }
        Wn(e);
      }
      if (ey(e), t === 13) {
        if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
          throw Error(
            "Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue."
          );
        sl = nr(e);
      } else if (t === 31) {
        if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
          throw Error(
            "Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue."
          );
        sl = nr(e);
      } else
        t === 27 ? (t = sl, $c(e.type) ? (e = SS, SS = null, sl = e) : sl = t) : sl = nn ? wn(e.stateNode.nextSibling) : null;
      return !0;
    }
    function Oc() {
      sl = nn = null, to = Tt = !1;
    }
    function Ir() {
      var e = _r;
      return e !== null && (Zn === null ? Zn = e : Zn.push.apply(
        Zn,
        e
      ), _r = null), e;
    }
    function Pr(e) {
      _r === null ? _r = [e] : _r.push(e);
    }
    function Dc() {
      var e = Xu;
      if (e !== null) {
        Xu = null;
        for (var t = Li(e); 0 < e.children.length; )
          e = e.children[0];
        fe(e.fiber, function() {
          console.error(
            `A tree hydrated but some attributes of the server rendered HTML didn't match the client properties. This won't be patched up. This can happen if a SSR-ed Client Component used:

- A server/client branch \`if (typeof window !== 'undefined')\`.
- Variable input such as \`Date.now()\` or \`Math.random()\` which changes each time it's called.
- Date formatting in a user's locale which doesn't match the server.
- External changing data without sending a snapshot of it along with the HTML.
- Invalid HTML tag nesting.

It can also happen if the client has a browser extension installed which messes with the HTML before React loaded.

%s%s`,
            "https://react.dev/link/hydration-mismatch",
            t
          );
        });
      }
    }
    function _f() {
      mm = av = null, ym = !1;
    }
    function In(e, t, a) {
      Je(U1, t._currentValue, e), t._currentValue = a, Je(H1, t._currentRenderer, e), t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== IS && console.error(
        "Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."
      ), t._currentRenderer = IS;
    }
    function Ru(e, t) {
      e._currentValue = U1.current;
      var a = H1.current;
      Se(H1, t), e._currentRenderer = a, Se(U1, t);
    }
    function qd(e, t, a) {
      for (; e !== null; ) {
        var i = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t, i !== null && (i.childLanes |= t)) : i !== null && (i.childLanes & t) !== t && (i.childLanes |= t), e === a) break;
        e = e.return;
      }
      e !== a && console.error(
        "Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue."
      );
    }
    function Ki(e, t, a, i) {
      var o = e.child;
      for (o !== null && (o.return = e); o !== null; ) {
        var f = o.dependencies;
        if (f !== null) {
          var d = o.child;
          f = f.firstContext;
          e: for (; f !== null; ) {
            var h = f;
            f = o;
            for (var y = 0; y < t.length; y++)
              if (h.context === t[y]) {
                f.lanes |= a, h = f.alternate, h !== null && (h.lanes |= a), qd(
                  f.return,
                  a,
                  e
                ), i || (d = null);
                break e;
              }
            f = h.next;
          }
        } else if (o.tag === 18) {
          if (d = o.return, d === null)
            throw Error(
              "We just came from a parent so we must have had a parent. This is a bug in React."
            );
          d.lanes |= a, f = d.alternate, f !== null && (f.lanes |= a), qd(
            d,
            a,
            e
          ), d = null;
        } else d = o.child;
        if (d !== null) d.return = o;
        else
          for (d = o; d !== null; ) {
            if (d === e) {
              d = null;
              break;
            }
            if (o = d.sibling, o !== null) {
              o.return = d.return, d = o;
              break;
            }
            d = d.return;
          }
        o = d;
      }
    }
    function _u(e, t, a, i) {
      e = null;
      for (var o = t, f = !1; o !== null; ) {
        if (!f) {
          if ((o.flags & 524288) !== 0) f = !0;
          else if ((o.flags & 262144) !== 0) break;
        }
        if (o.tag === 10) {
          var d = o.alternate;
          if (d === null)
            throw Error("Should have a current fiber. This is a bug in React.");
          if (d = d.memoizedProps, d !== null) {
            var h = o.type;
            Ln(o.pendingProps.value, d.value) || (e !== null ? e.push(h) : e = [h]);
          }
        } else if (o === Ic.current) {
          if (d = o.alternate, d === null)
            throw Error("Should have a current fiber. This is a bug in React.");
          d.memoizedState.memoizedState !== o.memoizedState.memoizedState && (e !== null ? e.push(bp) : e = [bp]);
        }
        o = o.return;
      }
      e !== null && Ki(
        t,
        e,
        a,
        i
      ), t.flags |= 262144;
    }
    function Of(e) {
      for (e = e.firstContext; e !== null; ) {
        if (!Ln(
          e.context._currentValue,
          e.memoizedValue
        ))
          return !0;
        e = e.next;
      }
      return !1;
    }
    function zc(e) {
      av = e, mm = null, e = e.dependencies, e !== null && (e.firstContext = null);
    }
    function Nt(e) {
      return ym && console.error(
        "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."
      ), ty(av, e);
    }
    function es(e, t) {
      return av === null && zc(e), ty(e, t);
    }
    function ty(e, t) {
      var a = t._currentValue;
      if (t = { context: t, memoizedValue: a, next: null }, mm === null) {
        if (e === null)
          throw Error(
            "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."
          );
        mm = t, e.dependencies = {
          lanes: 0,
          firstContext: t,
          _debugThenableState: null
        }, e.flags |= 524288;
      } else mm = mm.next = t;
      return a;
    }
    function jd() {
      return {
        controller: new tT(),
        data: /* @__PURE__ */ new Map(),
        refCount: 0
      };
    }
    function Eo(e) {
      e.controller.signal.aborted && console.warn(
        "A cache instance was retained after it was already freed. This likely indicates a bug in React."
      ), e.refCount++;
    }
    function ts(e) {
      e.refCount--, 0 > e.refCount && console.warn(
        "A cache instance was released after it was already freed. This likely indicates a bug in React."
      ), e.refCount === 0 && lT(aT, function() {
        e.controller.abort();
      });
    }
    function li(e, t, a) {
      (e & 127) !== 0 ? 0 > lo && (lo = ia(), V0 = nv(t), x1 = t, a != null && (N1 = pe(a)), (zt & (Ra | Zu)) !== Ya && (Ul = !0, Dr = X0), e = lr(), t = Ei(), e !== pm || t !== Q0 ? pm = -1.1 : t !== null && (Dr = X0), cd = e, Q0 = t) : (e & 4194048) !== 0 && 0 > xi && (xi = ia(), Z0 = nv(t), PS = t, a != null && (eb = pe(a)), 0 > cf) && (e = lr(), t = Ei(), (e !== Mr || t !== od) && (Mr = -1.1), zr = e, od = t);
    }
    function Vp(e) {
      if (0 > lo) {
        lo = ia(), V0 = e._debugTask != null ? e._debugTask : null, (zt & (Ra | Zu)) !== Ya && (Dr = X0);
        var t = lr(), a = Ei();
        t !== pm || a !== Q0 ? pm = -1.1 : a !== null && (Dr = X0), cd = t, Q0 = a;
      }
      0 > xi && (xi = ia(), Z0 = e._debugTask != null ? e._debugTask : null, 0 > cf) && (e = lr(), t = Ei(), (e !== Mr || t !== od) && (Mr = -1.1), zr = e, od = t);
    }
    function ai() {
      var e = ud;
      return ud = 0, e;
    }
    function Df(e) {
      var t = ud;
      return ud = e, t;
    }
    function Qa(e) {
      var t = ud;
      return ud += e, t;
    }
    function To() {
      Le = xe = -1.1;
    }
    function il() {
      var e = xe;
      return xe = -1.1, e;
    }
    function Il(e) {
      0 <= e && (xe = e);
    }
    function Pn() {
      var e = Al;
      return Al = -0, e;
    }
    function _n(e) {
      0 <= e && (Al = e);
    }
    function On() {
      var e = gl;
      return gl = null, e;
    }
    function eu() {
      var e = Ul;
      return Ul = !1, e;
    }
    function $i(e) {
      Xn = ia(), 0 > e.actualStartTime && (e.actualStartTime = Xn);
    }
    function Gd(e) {
      if (0 <= Xn) {
        var t = ia() - Xn;
        e.actualDuration += t, e.selfBaseDuration = t, Xn = -1;
      }
    }
    function ls(e) {
      if (0 <= Xn) {
        var t = ia() - Xn;
        e.actualDuration += t, Xn = -1;
      }
    }
    function Za() {
      if (0 <= Xn) {
        var e = ia(), t = e - Xn;
        Xn = -1, ud += t, Al += t, Le = e;
      }
    }
    function Qp(e) {
      gl === null && (gl = []), gl.push(e), nf === null && (nf = []), nf.push(e);
    }
    function bl() {
      Xn = ia(), 0 > xe && (xe = Xn);
    }
    function Ao(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function ki(e, t) {
      if (K0 === null) {
        var a = K0 = [];
        Y1 = 0, fd = e0(), gm = {
          status: "pending",
          value: void 0,
          then: function(i) {
            a.push(i);
          }
        };
      }
      return Y1++, t.then(ly, ly), t;
    }
    function ly() {
      if (--Y1 === 0 && (-1 < xi || (cf = -1.1), K0 !== null)) {
        gm !== null && (gm.status = "fulfilled");
        var e = K0;
        K0 = null, fd = 0, gm = null;
        for (var t = 0; t < e.length; t++) (0, e[t])();
      }
    }
    function Ld(e, t) {
      var a = [], i = {
        status: "pending",
        value: null,
        reason: null,
        then: function(o) {
          a.push(o);
        }
      };
      return e.then(
        function() {
          i.status = "fulfilled", i.value = t;
          for (var o = 0; o < a.length; o++) (0, a[o])(t);
        },
        function(o) {
          for (i.status = "rejected", i.reason = o, o = 0; o < a.length; o++)
            (0, a[o])(void 0);
        }
      ), i;
    }
    function Fi() {
      var e = rd.current;
      return e !== null ? e : tl.pooledCache;
    }
    function zf(e, t) {
      t === null ? Je(rd, rd.current, e) : Je(rd, t.pool, e);
    }
    function ay() {
      var e = Fi();
      return e === null ? null : { parent: ua._currentValue, pool: e };
    }
    function Xd() {
      return { didWarnAboutUncachedPromise: !1, thenables: [] };
    }
    function ny(e) {
      return e = e.status, e === "fulfilled" || e === "rejected";
    }
    function Dn(e, t, a) {
      Z.actQueue !== null && (Z.didUsePromise = !0);
      var i = e.thenables;
      if (a = i[a], a === void 0 ? i.push(t) : a !== t && (e.didWarnAboutUncachedPromise || (e.didWarnAboutUncachedPromise = !0, console.error(
        "A component was suspended by an uncached promise. Creating promises inside a Client Component or hook is not yet supported, except via a Suspense-compatible library or framework."
      )), t.then(La, La), t = a), t._debugInfo === void 0) {
        e = performance.now(), i = t.displayName;
        var o = {
          name: typeof i == "string" ? i : "Promise",
          start: e,
          end: e,
          value: t
        };
        t._debugInfo = [{ awaited: o }], t.status !== "fulfilled" && t.status !== "rejected" && (e = function() {
          o.end = performance.now();
        }, t.then(e, e));
      }
      switch (t.status) {
        case "fulfilled":
          return t.value;
        case "rejected":
          throw e = t.reason, as(e), e;
        default:
          if (typeof t.status == "string")
            t.then(La, La);
          else {
            if (e = tl, e !== null && 100 < e.shellSuspendCounter)
              throw Error(
                "An unknown Component is an async Client Component. Only Server Components can be async at the moment. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server."
              );
            e = t, e.status = "pending", e.then(
              function(f) {
                if (t.status === "pending") {
                  var d = t;
                  d.status = "fulfilled", d.value = f;
                }
              },
              function(f) {
                if (t.status === "pending") {
                  var d = t;
                  d.status = "rejected", d.reason = f;
                }
              }
            );
          }
          switch (t.status) {
            case "fulfilled":
              return t.value;
            case "rejected":
              throw e = t.reason, as(e), e;
          }
          throw dd = t, ep = !0, vm;
      }
    }
    function zn(e) {
      try {
        return oT(e);
      } catch (t) {
        throw t !== null && typeof t == "object" && typeof t.then == "function" ? (dd = t, ep = !0, vm) : t;
      }
    }
    function Ro() {
      if (dd === null)
        throw Error(
          "Expected a suspended thenable. This is a bug in React. Please file an issue."
        );
      var e = dd;
      return dd = null, ep = !1, e;
    }
    function as(e) {
      if (e === vm || e === dv)
        throw Error(
          "Hooks are not supported inside an async component. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server."
        );
    }
    function Ol(e) {
      var t = ht;
      return e != null && (ht = t === null ? e : t.concat(e)), t;
    }
    function fn() {
      var e = ht;
      if (e != null) {
        for (var t = e.length - 1; 0 <= t; t--)
          if (e[t].name != null) {
            var a = e[t].debugTask;
            if (a != null) return a;
          }
      }
      return null;
    }
    function Ja(e, t, a) {
      for (var i = Object.keys(e.props), o = 0; o < i.length; o++) {
        var f = i[o];
        if (f !== "children" && f !== "key") {
          t === null && (t = Rc(e, a.mode, 0), t._debugInfo = ht, t.return = a), fe(
            t,
            function(d) {
              console.error(
                "Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",
                d
              );
            },
            f
          );
          break;
        }
      }
    }
    function Ou(e) {
      var t = tp;
      return tp += 1, Sm === null && (Sm = Xd()), Dn(Sm, e, t);
    }
    function rn(e, t) {
      t = t.props.ref, e.ref = t !== void 0 ? t : null;
    }
    function Du(e, t) {
      throw t.$$typeof === Gg ? Error(
        `A React Element from an older version of React was rendered. This is not supported. It can happen if:
- Multiple copies of the "react" package is used.
- A library pre-bundled an old copy of "react" or "react/jsx-runtime".
- A compiler tries to "inline" JSX instead of using the runtime.`
      ) : (e = Object.prototype.toString.call(t), Error(
        "Objects are not valid as a React child (found: " + (e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e) + "). If you meant to render a collection of children, use an array instead."
      ));
    }
    function tu(e, t) {
      var a = fn();
      a !== null ? a.run(
        Du.bind(null, e, t)
      ) : Du(e, t);
    }
    function uy(e, t) {
      var a = pe(e) || "Component";
      bb[a] || (bb[a] = !0, t = t.displayName || t.name || "Component", e.tag === 3 ? console.error(
        `Functions are not valid as a React child. This may happen if you return %s instead of <%s /> from render. Or maybe you meant to call this function rather than return it.
  root.render(%s)`,
        t,
        t,
        t
      ) : console.error(
        `Functions are not valid as a React child. This may happen if you return %s instead of <%s /> from render. Or maybe you meant to call this function rather than return it.
  <%s>{%s}</%s>`,
        t,
        t,
        a,
        t,
        a
      ));
    }
    function Mf(e, t) {
      var a = fn();
      a !== null ? a.run(
        uy.bind(null, e, t)
      ) : uy(e, t);
    }
    function Vd(e, t) {
      var a = pe(e) || "Component";
      Eb[a] || (Eb[a] = !0, t = String(t), e.tag === 3 ? console.error(
        `Symbols are not valid as a React child.
  root.render(%s)`,
        t
      ) : console.error(
        `Symbols are not valid as a React child.
  <%s>%s</%s>`,
        a,
        t,
        a
      ));
    }
    function ns(e, t) {
      var a = fn();
      a !== null ? a.run(
        Vd.bind(null, e, t)
      ) : Vd(e, t);
    }
    function Pl(e) {
      function t(A, _) {
        if (e) {
          var z = A.deletions;
          z === null ? (A.deletions = [_], A.flags |= 16) : z.push(_);
        }
      }
      function a(A, _) {
        if (!e) return null;
        for (; _ !== null; )
          t(A, _), _ = _.sibling;
        return null;
      }
      function i(A) {
        for (var _ = /* @__PURE__ */ new Map(); A !== null; )
          A.key !== null ? _.set(A.key, A) : _.set(A.index, A), A = A.sibling;
        return _;
      }
      function o(A, _) {
        return A = ti(A, _), A.index = 0, A.sibling = null, A;
      }
      function f(A, _, z) {
        return A.index = z, e ? (z = A.alternate, z !== null ? (z = z.index, z < _ ? (A.flags |= 67108866, _) : z) : (A.flags |= 67108866, _)) : (A.flags |= 1048576, _);
      }
      function d(A) {
        return e && A.alternate === null && (A.flags |= 67108866), A;
      }
      function h(A, _, z, k) {
        return _ === null || _.tag !== 6 ? (_ = Rf(
          z,
          A.mode,
          k
        ), _.return = A, _._debugOwner = A, _._debugTask = A._debugTask, _._debugInfo = ht, _) : (_ = o(_, z), _.return = A, _._debugInfo = ht, _);
      }
      function y(A, _, z, k) {
        var se = z.type;
        return se === fr ? (_ = M(
          A,
          _,
          z.props.children,
          k,
          z.key
        ), Ja(z, _, A), _) : _ !== null && (_.elementType === se || $m(_, z) || typeof se == "object" && se !== null && se.$$typeof === Ha && zn(se) === _.type) ? (_ = o(_, z.props), rn(_, z), _.return = A, _._debugOwner = z._owner, _._debugInfo = ht, _) : (_ = Rc(z, A.mode, k), rn(_, z), _.return = A, _._debugInfo = ht, _);
      }
      function p(A, _, z, k) {
        return _ === null || _.tag !== 4 || _.stateNode.containerInfo !== z.containerInfo || _.stateNode.implementation !== z.implementation ? (_ = Bd(z, A.mode, k), _.return = A, _._debugInfo = ht, _) : (_ = o(_, z.children || []), _.return = A, _._debugInfo = ht, _);
      }
      function M(A, _, z, k, se) {
        return _ === null || _.tag !== 7 ? (_ = vo(
          z,
          A.mode,
          k,
          se
        ), _.return = A, _._debugOwner = A, _._debugTask = A._debugTask, _._debugInfo = ht, _) : (_ = o(_, z), _.return = A, _._debugInfo = ht, _);
      }
      function U(A, _, z) {
        if (typeof _ == "string" && _ !== "" || typeof _ == "number" || typeof _ == "bigint")
          return _ = Rf(
            "" + _,
            A.mode,
            z
          ), _.return = A, _._debugOwner = A, _._debugTask = A._debugTask, _._debugInfo = ht, _;
        if (typeof _ == "object" && _ !== null) {
          switch (_.$$typeof) {
            case iu:
              return z = Rc(
                _,
                A.mode,
                z
              ), rn(z, _), z.return = A, A = Ol(_._debugInfo), z._debugInfo = ht, ht = A, z;
            case Fc:
              return _ = Bd(
                _,
                A.mode,
                z
              ), _.return = A, _._debugInfo = ht, _;
            case Ha:
              var k = Ol(_._debugInfo);
              return _ = zn(_), A = U(A, _, z), ht = k, A;
          }
          if (ql(_) || Ue(_))
            return z = vo(
              _,
              A.mode,
              z,
              null
            ), z.return = A, z._debugOwner = A, z._debugTask = A._debugTask, A = Ol(_._debugInfo), z._debugInfo = ht, ht = A, z;
          if (typeof _.then == "function")
            return k = Ol(_._debugInfo), A = U(
              A,
              Ou(_),
              z
            ), ht = k, A;
          if (_.$$typeof === ju)
            return U(
              A,
              es(A, _),
              z
            );
          tu(A, _);
        }
        return typeof _ == "function" && Mf(A, _), typeof _ == "symbol" && ns(A, _), null;
      }
      function R(A, _, z, k) {
        var se = _ !== null ? _.key : null;
        if (typeof z == "string" && z !== "" || typeof z == "number" || typeof z == "bigint")
          return se !== null ? null : h(A, _, "" + z, k);
        if (typeof z == "object" && z !== null) {
          switch (z.$$typeof) {
            case iu:
              return z.key === se ? (se = Ol(z._debugInfo), A = y(
                A,
                _,
                z,
                k
              ), ht = se, A) : null;
            case Fc:
              return z.key === se ? p(A, _, z, k) : null;
            case Ha:
              return se = Ol(z._debugInfo), z = zn(z), A = R(
                A,
                _,
                z,
                k
              ), ht = se, A;
          }
          if (ql(z) || Ue(z))
            return se !== null ? null : (se = Ol(z._debugInfo), A = M(
              A,
              _,
              z,
              k,
              null
            ), ht = se, A);
          if (typeof z.then == "function")
            return se = Ol(z._debugInfo), A = R(
              A,
              _,
              Ou(z),
              k
            ), ht = se, A;
          if (z.$$typeof === ju)
            return R(
              A,
              _,
              es(A, z),
              k
            );
          tu(A, z);
        }
        return typeof z == "function" && Mf(A, z), typeof z == "symbol" && ns(A, z), null;
      }
      function L(A, _, z, k, se) {
        if (typeof k == "string" && k !== "" || typeof k == "number" || typeof k == "bigint")
          return A = A.get(z) || null, h(_, A, "" + k, se);
        if (typeof k == "object" && k !== null) {
          switch (k.$$typeof) {
            case iu:
              return z = A.get(
                k.key === null ? z : k.key
              ) || null, A = Ol(k._debugInfo), _ = y(
                _,
                z,
                k,
                se
              ), ht = A, _;
            case Fc:
              return A = A.get(
                k.key === null ? z : k.key
              ) || null, p(_, A, k, se);
            case Ha:
              var Fe = Ol(k._debugInfo);
              return k = zn(k), _ = L(
                A,
                _,
                z,
                k,
                se
              ), ht = Fe, _;
          }
          if (ql(k) || Ue(k))
            return z = A.get(z) || null, A = Ol(k._debugInfo), _ = M(
              _,
              z,
              k,
              se,
              null
            ), ht = A, _;
          if (typeof k.then == "function")
            return Fe = Ol(k._debugInfo), _ = L(
              A,
              _,
              z,
              Ou(k),
              se
            ), ht = Fe, _;
          if (k.$$typeof === ju)
            return L(
              A,
              _,
              z,
              es(_, k),
              se
            );
          tu(_, k);
        }
        return typeof k == "function" && Mf(_, k), typeof k == "symbol" && ns(_, k), null;
      }
      function re(A, _, z, k) {
        if (typeof z != "object" || z === null) return k;
        switch (z.$$typeof) {
          case iu:
          case Fc:
            de(A, _, z);
            var se = z.key;
            if (typeof se != "string") break;
            if (k === null) {
              k = /* @__PURE__ */ new Set(), k.add(se);
              break;
            }
            if (!k.has(se)) {
              k.add(se);
              break;
            }
            fe(_, function() {
              console.error(
                "Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.",
                se
              );
            });
            break;
          case Ha:
            z = zn(z), re(A, _, z, k);
        }
        return k;
      }
      function ye(A, _, z, k) {
        for (var se = null, Fe = null, He = null, _e = _, ot = _ = 0, dl = null; _e !== null && ot < z.length; ot++) {
          _e.index > ot ? (dl = _e, _e = null) : dl = _e.sibling;
          var kl = R(
            A,
            _e,
            z[ot],
            k
          );
          if (kl === null) {
            _e === null && (_e = dl);
            break;
          }
          se = re(
            A,
            kl,
            z[ot],
            se
          ), e && _e && kl.alternate === null && t(A, _e), _ = f(kl, _, ot), He === null ? Fe = kl : He.sibling = kl, He = kl, _e = dl;
        }
        if (ot === z.length)
          return a(A, _e), Tt && Au(A, ot), Fe;
        if (_e === null) {
          for (; ot < z.length; ot++)
            _e = U(A, z[ot], k), _e !== null && (se = re(
              A,
              _e,
              z[ot],
              se
            ), _ = f(
              _e,
              _,
              ot
            ), He === null ? Fe = _e : He.sibling = _e, He = _e);
          return Tt && Au(A, ot), Fe;
        }
        for (_e = i(_e); ot < z.length; ot++)
          dl = L(
            _e,
            A,
            ot,
            z[ot],
            k
          ), dl !== null && (se = re(
            A,
            dl,
            z[ot],
            se
          ), e && dl.alternate !== null && _e.delete(
            dl.key === null ? ot : dl.key
          ), _ = f(
            dl,
            _,
            ot
          ), He === null ? Fe = dl : He.sibling = dl, He = dl);
        return e && _e.forEach(function(yf) {
          return t(A, yf);
        }), Tt && Au(A, ot), Fe;
      }
      function nl(A, _, z, k) {
        if (z == null)
          throw Error("An iterable object provided no iterator.");
        for (var se = null, Fe = null, He = _, _e = _ = 0, ot = null, dl = null, kl = z.next(); He !== null && !kl.done; _e++, kl = z.next()) {
          He.index > _e ? (ot = He, He = null) : ot = He.sibling;
          var yf = R(A, He, kl.value, k);
          if (yf === null) {
            He === null && (He = ot);
            break;
          }
          dl = re(
            A,
            yf,
            kl.value,
            dl
          ), e && He && yf.alternate === null && t(A, He), _ = f(yf, _, _e), Fe === null ? se = yf : Fe.sibling = yf, Fe = yf, He = ot;
        }
        if (kl.done)
          return a(A, He), Tt && Au(A, _e), se;
        if (He === null) {
          for (; !kl.done; _e++, kl = z.next())
            He = U(A, kl.value, k), He !== null && (dl = re(
              A,
              He,
              kl.value,
              dl
            ), _ = f(
              He,
              _,
              _e
            ), Fe === null ? se = He : Fe.sibling = He, Fe = He);
          return Tt && Au(A, _e), se;
        }
        for (He = i(He); !kl.done; _e++, kl = z.next())
          ot = L(
            He,
            A,
            _e,
            kl.value,
            k
          ), ot !== null && (dl = re(
            A,
            ot,
            kl.value,
            dl
          ), e && ot.alternate !== null && He.delete(
            ot.key === null ? _e : ot.key
          ), _ = f(
            ot,
            _,
            _e
          ), Fe === null ? se = ot : Fe.sibling = ot, Fe = ot);
        return e && He.forEach(function(HT) {
          return t(A, HT);
        }), Tt && Au(A, _e), se;
      }
      function Rt(A, _, z, k) {
        if (typeof z == "object" && z !== null && z.type === fr && z.key === null && (Ja(z, null, A), z = z.props.children), typeof z == "object" && z !== null) {
          switch (z.$$typeof) {
            case iu:
              var se = Ol(z._debugInfo);
              e: {
                for (var Fe = z.key; _ !== null; ) {
                  if (_.key === Fe) {
                    if (Fe = z.type, Fe === fr) {
                      if (_.tag === 7) {
                        a(
                          A,
                          _.sibling
                        ), k = o(
                          _,
                          z.props.children
                        ), k.return = A, k._debugOwner = z._owner, k._debugInfo = ht, Ja(z, k, A), A = k;
                        break e;
                      }
                    } else if (_.elementType === Fe || $m(
                      _,
                      z
                    ) || typeof Fe == "object" && Fe !== null && Fe.$$typeof === Ha && zn(Fe) === _.type) {
                      a(
                        A,
                        _.sibling
                      ), k = o(_, z.props), rn(k, z), k.return = A, k._debugOwner = z._owner, k._debugInfo = ht, A = k;
                      break e;
                    }
                    a(A, _);
                    break;
                  } else t(A, _);
                  _ = _.sibling;
                }
                z.type === fr ? (k = vo(
                  z.props.children,
                  A.mode,
                  k,
                  z.key
                ), k.return = A, k._debugOwner = A, k._debugTask = A._debugTask, k._debugInfo = ht, Ja(z, k, A), A = k) : (k = Rc(
                  z,
                  A.mode,
                  k
                ), rn(k, z), k.return = A, k._debugInfo = ht, A = k);
              }
              return A = d(A), ht = se, A;
            case Fc:
              e: {
                for (se = z, z = se.key; _ !== null; ) {
                  if (_.key === z)
                    if (_.tag === 4 && _.stateNode.containerInfo === se.containerInfo && _.stateNode.implementation === se.implementation) {
                      a(
                        A,
                        _.sibling
                      ), k = o(
                        _,
                        se.children || []
                      ), k.return = A, A = k;
                      break e;
                    } else {
                      a(A, _);
                      break;
                    }
                  else t(A, _);
                  _ = _.sibling;
                }
                k = Bd(
                  se,
                  A.mode,
                  k
                ), k.return = A, A = k;
              }
              return d(A);
            case Ha:
              return se = Ol(z._debugInfo), z = zn(z), A = Rt(
                A,
                _,
                z,
                k
              ), ht = se, A;
          }
          if (ql(z))
            return se = Ol(z._debugInfo), A = ye(
              A,
              _,
              z,
              k
            ), ht = se, A;
          if (Ue(z)) {
            if (se = Ol(z._debugInfo), Fe = Ue(z), typeof Fe != "function")
              throw Error(
                "An object is not an iterable. This error is likely caused by a bug in React. Please file an issue."
              );
            var He = Fe.call(z);
            return He === z ? (A.tag !== 0 || Object.prototype.toString.call(A.type) !== "[object GeneratorFunction]" || Object.prototype.toString.call(He) !== "[object Generator]") && (vb || console.error(
              "Using Iterators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. You can also use an Iterable that can iterate multiple times over the same items."
            ), vb = !0) : z.entries !== Fe || G1 || (console.error(
              "Using Maps as children is not supported. Use an array of keyed ReactElements instead."
            ), G1 = !0), A = nl(
              A,
              _,
              He,
              k
            ), ht = se, A;
          }
          if (typeof z.then == "function")
            return se = Ol(z._debugInfo), A = Rt(
              A,
              _,
              Ou(z),
              k
            ), ht = se, A;
          if (z.$$typeof === ju)
            return Rt(
              A,
              _,
              es(A, z),
              k
            );
          tu(A, z);
        }
        return typeof z == "string" && z !== "" || typeof z == "number" || typeof z == "bigint" ? (se = "" + z, _ !== null && _.tag === 6 ? (a(
          A,
          _.sibling
        ), k = o(_, se), k.return = A, A = k) : (a(A, _), k = Rf(
          se,
          A.mode,
          k
        ), k.return = A, k._debugOwner = A, k._debugTask = A._debugTask, k._debugInfo = ht, A = k), d(A)) : (typeof z == "function" && Mf(A, z), typeof z == "symbol" && ns(A, z), a(A, _));
      }
      return function(A, _, z, k) {
        var se = ht;
        ht = null;
        try {
          tp = 0;
          var Fe = Rt(
            A,
            _,
            z,
            k
          );
          return Sm = null, Fe;
        } catch (dl) {
          if (dl === vm || dl === dv) throw dl;
          var He = H(29, dl, null, A.mode);
          He.lanes = k, He.return = A;
          var _e = He._debugInfo = ht;
          if (He._debugOwner = A._debugOwner, He._debugTask = A._debugTask, _e != null) {
            for (var ot = _e.length - 1; 0 <= ot; ot--)
              if (typeof _e[ot].stack == "string") {
                He._debugOwner = _e[ot], He._debugTask = _e[ot].debugTask;
                break;
              }
          }
          return He;
        } finally {
          ht = se;
        }
      };
    }
    function Wt(e, t) {
      var a = ql(e);
      return e = !a && typeof Ue(e) == "function", a || e ? (a = a ? "array" : "iterable", console.error(
        "A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>",
        a,
        t,
        a
      ), !1) : !0;
    }
    function St(e) {
      e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: { pending: null, lanes: 0, hiddenCallbacks: null },
        callbacks: null
      };
    }
    function ni(e, t) {
      e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        callbacks: null
      });
    }
    function Vl(e) {
      return {
        lane: e,
        tag: Ab,
        payload: null,
        callback: null,
        next: null
      };
    }
    function ui(e, t, a) {
      var i = e.updateQueue;
      if (i === null) return null;
      if (i = i.shared, X1 === i && !Ob) {
        var o = pe(e);
        console.error(
          `An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback.

Please update the following component: %s`,
          o
        ), Ob = !0;
      }
      return (zt & Ra) !== Ya ? (o = i.pending, o === null ? t.next = t : (t.next = o.next, o.next = t), i.pending = t, t = Wr(e), Km(e, null, a), t) : (Af(e, i, t, a), Wr(e));
    }
    function lu(e, t, a) {
      if (t = t.updateQueue, t !== null && (t = t.shared, (a & 4194048) !== 0)) {
        var i = t.lanes;
        i &= e.pendingLanes, a |= i, t.lanes = a, ku(e, a);
      }
    }
    function us(e, t) {
      var a = e.updateQueue, i = e.alternate;
      if (i !== null && (i = i.updateQueue, a === i)) {
        var o = null, f = null;
        if (a = a.firstBaseUpdate, a !== null) {
          do {
            var d = {
              lane: a.lane,
              tag: a.tag,
              payload: a.payload,
              callback: null,
              next: null
            };
            f === null ? o = f = d : f = f.next = d, a = a.next;
          } while (a !== null);
          f === null ? o = f = t : f = f.next = t;
        } else o = f = t;
        a = {
          baseState: i.baseState,
          firstBaseUpdate: o,
          lastBaseUpdate: f,
          shared: i.shared,
          callbacks: i.callbacks
        }, e.updateQueue = a;
        return;
      }
      e = a.lastBaseUpdate, e === null ? a.firstBaseUpdate = t : e.next = t, a.lastBaseUpdate = t;
    }
    function Cf() {
      if (V1) {
        var e = gm;
        if (e !== null) throw e;
      }
    }
    function ii(e, t, a, i) {
      V1 = !1;
      var o = e.updateQueue;
      Cr = !1, X1 = o.shared;
      var f = o.firstBaseUpdate, d = o.lastBaseUpdate, h = o.shared.pending;
      if (h !== null) {
        o.shared.pending = null;
        var y = h, p = y.next;
        y.next = null, d === null ? f = p : d.next = p, d = y;
        var M = e.alternate;
        M !== null && (M = M.updateQueue, h = M.lastBaseUpdate, h !== d && (h === null ? M.firstBaseUpdate = p : h.next = p, M.lastBaseUpdate = y));
      }
      if (f !== null) {
        var U = o.baseState;
        d = 0, M = p = y = null, h = f;
        do {
          var R = h.lane & -536870913, L = R !== h.lane;
          if (L ? (mt & R) === R : (i & R) === R) {
            R !== 0 && R === fd && (V1 = !0), M !== null && (M = M.next = {
              lane: 0,
              tag: h.tag,
              payload: h.payload,
              callback: null,
              next: null
            });
            e: {
              R = e;
              var re = h, ye = t, nl = a;
              switch (re.tag) {
                case Rb:
                  if (re = re.payload, typeof re == "function") {
                    ym = !0;
                    var Rt = re.call(
                      nl,
                      U,
                      ye
                    );
                    if (R.mode & gn) {
                      ie(!0);
                      try {
                        re.call(nl, U, ye);
                      } finally {
                        ie(!1);
                      }
                    }
                    ym = !1, U = Rt;
                    break e;
                  }
                  U = re;
                  break e;
                case L1:
                  R.flags = R.flags & -65537 | 128;
                case Ab:
                  if (Rt = re.payload, typeof Rt == "function") {
                    if (ym = !0, re = Rt.call(
                      nl,
                      U,
                      ye
                    ), R.mode & gn) {
                      ie(!0);
                      try {
                        Rt.call(nl, U, ye);
                      } finally {
                        ie(!1);
                      }
                    }
                    ym = !1;
                  } else re = Rt;
                  if (re == null) break e;
                  U = st({}, U, re);
                  break e;
                case _b:
                  Cr = !0;
              }
            }
            R = h.callback, R !== null && (e.flags |= 64, L && (e.flags |= 8192), L = o.callbacks, L === null ? o.callbacks = [R] : L.push(R));
          } else
            L = {
              lane: R,
              tag: h.tag,
              payload: h.payload,
              callback: h.callback,
              next: null
            }, M === null ? (p = M = L, y = U) : M = M.next = L, d |= R;
          if (h = h.next, h === null) {
            if (h = o.shared.pending, h === null)
              break;
            L = h, h = L.next, L.next = null, o.lastBaseUpdate = L, o.shared.pending = null;
          }
        } while (!0);
        M === null && (y = U), o.baseState = y, o.firstBaseUpdate = p, o.lastBaseUpdate = M, f === null && (o.shared.lanes = 0), xr |= d, e.lanes = d, e.memoizedState = U;
      }
      X1 = null;
    }
    function Mc(e, t) {
      if (typeof e != "function")
        throw Error(
          "Invalid argument passed as callback. Expected a function. Instead received: " + e
        );
      e.call(t);
    }
    function iy(e, t) {
      var a = e.shared.hiddenCallbacks;
      if (a !== null)
        for (e.shared.hiddenCallbacks = null, e = 0; e < a.length; e++)
          Mc(a[e], t);
    }
    function Uf(e, t) {
      var a = e.callbacks;
      if (a !== null)
        for (e.callbacks = null, e = 0; e < a.length; e++)
          Mc(a[e], t);
    }
    function Qd(e, t) {
      var a = no;
      Je(mv, a, e), Je(bm, t, e), no = a | t.baseLanes;
    }
    function Wi(e) {
      Je(mv, no, e), Je(
        bm,
        bm.current,
        e
      );
    }
    function zu(e) {
      no = mv.current, Se(bm, e), Se(mv, e);
    }
    function Ka(e) {
      var t = e.alternate;
      Je(
        $l,
        $l.current & Em,
        e
      ), Je(Vu, e, e), Ni === null && (t === null || bm.current !== null || t.memoizedState !== null) && (Ni = e);
    }
    function Mu(e) {
      Je($l, $l.current, e), Je(Vu, e, e), Ni === null && (Ni = e);
    }
    function Zd(e) {
      e.tag === 22 ? (Je($l, $l.current, e), Je(Vu, e, e), Ni === null && (Ni = e)) : ci(e);
    }
    function ci(e) {
      Je($l, $l.current, e), Je(
        Vu,
        Vu.current,
        e
      );
    }
    function ea(e) {
      Se(Vu, e), Ni === e && (Ni = null), Se($l, e);
    }
    function _o(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === 13) {
          var a = t.memoizedState;
          if (a !== null && (a = a.dehydrated, a === null || Ls(a) || a0(a)))
            return t;
        } else if (t.tag === 19 && (t.memoizedProps.revealOrder === "forwards" || t.memoizedProps.revealOrder === "backwards" || t.memoizedProps.revealOrder === "unstable_legacy-backwards" || t.memoizedProps.revealOrder === "together")) {
          if ((t.flags & 128) !== 0) return t;
        } else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return null;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return null;
    }
    function $e() {
      var e = X;
      Yi === null ? Yi = [e] : Yi.push(e);
    }
    function P() {
      var e = X;
      if (Yi !== null && (rf++, Yi[rf] !== e)) {
        var t = pe(ke);
        if (!Db.has(t) && (Db.add(t), Yi !== null)) {
          for (var a = "", i = 0; i <= rf; i++) {
            var o = Yi[i], f = i === rf ? e : o;
            for (o = i + 1 + ". " + o; 30 > o.length; )
              o += " ";
            o += f + `
`, a += o;
          }
          console.error(
            `React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://react.dev/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`,
            t,
            a
          );
        }
      }
    }
    function Ii(e) {
      e == null || ql(e) || console.error(
        "%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.",
        X,
        typeof e
      );
    }
    function is() {
      var e = pe(ke);
      Mb.has(e) || (Mb.add(e), console.error(
        "ReactDOM.useFormState has been renamed to React.useActionState. Please update %s to use React.useActionState.",
        e
      ));
    }
    function El() {
      throw Error(
        `Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`
      );
    }
    function cy(e, t) {
      if (np) return !1;
      if (t === null)
        return console.error(
          "%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.",
          X
        ), !1;
      e.length !== t.length && console.error(
        `The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`,
        X,
        "[" + t.join(", ") + "]",
        "[" + e.join(", ") + "]"
      );
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!Ln(e[a], t[a])) return !1;
      return !0;
    }
    function oy(e, t, a, i, o, f) {
      of = f, ke = t, Yi = e !== null ? e._debugHookTypes : null, rf = -1, np = e !== null && e.type !== t.type, (Object.prototype.toString.call(a) === "[object AsyncFunction]" || Object.prototype.toString.call(a) === "[object AsyncGeneratorFunction]") && (f = pe(ke), Q1.has(f) || (Q1.add(f), console.error(
        "%s is an async Client Component. Only Server Components can be async at the moment. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server.",
        f === null ? "An unknown Component" : "<" + f + ">"
      ))), t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Z.H = e !== null && e.memoizedState !== null ? J1 : Yi !== null ? Cb : Z1, md = f = (t.mode & gn) !== Ze;
      var d = w1(a, i, o);
      if (md = !1, Am && (d = cs(
        t,
        a,
        i,
        o
      )), f) {
        ie(!0);
        try {
          d = cs(
            t,
            a,
            i,
            o
          );
        } finally {
          ie(!1);
        }
      }
      return Dl(e, t), d;
    }
    function Dl(e, t) {
      t._debugHookTypes = Yi, t.dependencies === null ? ff !== null && (t.dependencies = {
        lanes: 0,
        firstContext: null,
        _debugThenableState: ff
      }) : t.dependencies._debugThenableState = ff, Z.H = up;
      var a = el !== null && el.next !== null;
      if (of = 0, Yi = X = ca = el = ke = null, rf = -1, e !== null && (e.flags & 65011712) !== (t.flags & 65011712) && console.error(
        "Internal React error: Expected static flag was missing. Please notify the React team."
      ), pv = !1, ap = 0, ff = null, a)
        throw Error(
          "Rendered fewer hooks than expected. This may be caused by an accidental early return statement."
        );
      e === null || oa || (e = e.dependencies, e !== null && Of(e) && (oa = !0)), ep ? (ep = !1, e = !0) : e = !1, e && (t = pe(t) || "Unknown", zb.has(t) || Q1.has(t) || (zb.add(t), console.error(
        "`use` was called from inside a try/catch block. This is not allowed and can lead to unexpected behavior. To handle errors triggered by `use`, wrap your component in a error boundary."
      )));
    }
    function cs(e, t, a, i) {
      ke = e;
      var o = 0;
      do {
        if (Am && (ff = null), ap = 0, Am = !1, o >= rT)
          throw Error(
            "Too many re-renders. React limits the number of renders to prevent an infinite loop."
          );
        if (o += 1, np = !1, ca = el = null, e.updateQueue != null) {
          var f = e.updateQueue;
          f.lastEffect = null, f.events = null, f.stores = null, f.memoCache != null && (f.memoCache.index = 0);
        }
        rf = -1, Z.H = Ub, f = w1(t, a, i);
      } while (Am);
      return f;
    }
    function os() {
      var e = Z.H, t = e.useState()[0];
      return t = typeof t.then == "function" ? ss(t) : t, e = e.useState()[0], (el !== null ? el.memoizedState : null) !== e && (ke.flags |= 1024), t;
    }
    function Oo() {
      var e = gv !== 0;
      return gv = 0, e;
    }
    function fs(e, t, a) {
      t.updateQueue = e.updateQueue, t.flags = (t.mode & hc) !== Ze ? t.flags & -402655237 : t.flags & -2053, e.lanes &= ~a;
    }
    function Cc(e) {
      if (pv) {
        for (e = e.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        pv = !1;
      }
      of = 0, Yi = ca = el = ke = null, rf = -1, X = null, Am = !1, ap = gv = 0, ff = null;
    }
    function Yl() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return ca === null ? ke.memoizedState = ca = e : ca = ca.next = e, ca;
    }
    function jt() {
      if (el === null) {
        var e = ke.alternate;
        e = e !== null ? e.memoizedState : null;
      } else e = el.next;
      var t = ca === null ? ke.memoizedState : ca.next;
      if (t !== null)
        ca = t, el = e;
      else {
        if (e === null)
          throw ke.alternate === null ? Error(
            "Update hook called on initial render. This is likely a bug in React. Please file an issue."
          ) : Error("Rendered more hooks than during the previous render.");
        el = e, e = {
          memoizedState: el.memoizedState,
          baseState: el.baseState,
          baseQueue: el.baseQueue,
          queue: el.queue,
          next: null
        }, ca === null ? ke.memoizedState = ca = e : ca = ca.next = e;
      }
      return ca;
    }
    function rs() {
      return { lastEffect: null, events: null, stores: null, memoCache: null };
    }
    function ss(e) {
      var t = ap;
      return ap += 1, ff === null && (ff = Xd()), e = Dn(ff, e, t), t = ke, (ca === null ? t.memoizedState : ca.next) === null && (t = t.alternate, Z.H = t !== null && t.memoizedState !== null ? J1 : Z1), e;
    }
    function Pi(e) {
      if (e !== null && typeof e == "object") {
        if (typeof e.then == "function") return ss(e);
        if (e.$$typeof === ju) return Nt(e);
      }
      throw Error("An unsupported type was passed to use(): " + String(e));
    }
    function Mn(e) {
      var t = null, a = ke.updateQueue;
      if (a !== null && (t = a.memoCache), t == null) {
        var i = ke.alternate;
        i !== null && (i = i.updateQueue, i !== null && (i = i.memoCache, i != null && (t = {
          data: i.data.map(function(o) {
            return o.slice();
          }),
          index: 0
        })));
      }
      if (t == null && (t = { data: [], index: 0 }), a === null && (a = rs(), ke.updateQueue = a), a.memoCache = t, a = t.data[t.index], a === void 0 || np)
        for (a = t.data[t.index] = Array(e), i = 0; i < e; i++)
          a[i] = r1;
      else
        a.length !== e && console.error(
          "Expected a constant size argument for each invocation of useMemoCache. The previous cache was allocated with size %s but size %s was requested.",
          a.length,
          e
        );
      return t.index++, a;
    }
    function Cn(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function Hf(e, t, a) {
      var i = Yl();
      if (a !== void 0) {
        var o = a(t);
        if (md) {
          ie(!0);
          try {
            a(t);
          } finally {
            ie(!1);
          }
        }
      } else o = t;
      return i.memoizedState = i.baseState = o, e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: o
      }, i.queue = e, e = e.dispatch = u1.bind(
        null,
        ke,
        e
      ), [i.memoizedState, e];
    }
    function Do(e) {
      var t = jt();
      return Uc(t, el, e);
    }
    function Uc(e, t, a) {
      var i = e.queue;
      if (i === null)
        throw Error(
          "Should have a queue. You are likely calling Hooks conditionally, which is not allowed. (https://react.dev/link/invalid-hook-call)"
        );
      i.lastRenderedReducer = a;
      var o = e.baseQueue, f = i.pending;
      if (f !== null) {
        if (o !== null) {
          var d = o.next;
          o.next = f.next, f.next = d;
        }
        t.baseQueue !== o && console.error(
          "Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."
        ), t.baseQueue = o = f, i.pending = null;
      }
      if (f = e.baseState, o === null) e.memoizedState = f;
      else {
        t = o.next;
        var h = d = null, y = null, p = t, M = !1;
        do {
          var U = p.lane & -536870913;
          if (U !== p.lane ? (mt & U) === U : (of & U) === U) {
            var R = p.revertLane;
            if (R === 0)
              y !== null && (y = y.next = {
                lane: 0,
                revertLane: 0,
                gesture: null,
                action: p.action,
                hasEagerState: p.hasEagerState,
                eagerState: p.eagerState,
                next: null
              }), U === fd && (M = !0);
            else if ((of & R) === R) {
              p = p.next, R === fd && (M = !0);
              continue;
            } else
              U = {
                lane: 0,
                revertLane: p.revertLane,
                gesture: null,
                action: p.action,
                hasEagerState: p.hasEagerState,
                eagerState: p.eagerState,
                next: null
              }, y === null ? (h = y = U, d = f) : y = y.next = U, ke.lanes |= R, xr |= R;
            U = p.action, md && a(f, U), f = p.hasEagerState ? p.eagerState : a(f, U);
          } else
            R = {
              lane: U,
              revertLane: p.revertLane,
              gesture: p.gesture,
              action: p.action,
              hasEagerState: p.hasEagerState,
              eagerState: p.eagerState,
              next: null
            }, y === null ? (h = y = R, d = f) : y = y.next = R, ke.lanes |= U, xr |= U;
          p = p.next;
        } while (p !== null && p !== t);
        if (y === null ? d = f : y.next = h, !Ln(f, e.memoizedState) && (oa = !0, M && (a = gm, a !== null)))
          throw a;
        e.memoizedState = f, e.baseState = d, e.baseQueue = y, i.lastRenderedState = f;
      }
      return o === null && (i.lanes = 0), [e.memoizedState, i.dispatch];
    }
    function zo(e) {
      var t = jt(), a = t.queue;
      if (a === null)
        throw Error(
          "Should have a queue. You are likely calling Hooks conditionally, which is not allowed. (https://react.dev/link/invalid-hook-call)"
        );
      a.lastRenderedReducer = e;
      var i = a.dispatch, o = a.pending, f = t.memoizedState;
      if (o !== null) {
        a.pending = null;
        var d = o = o.next;
        do
          f = e(f, d.action), d = d.next;
        while (d !== o);
        Ln(f, t.memoizedState) || (oa = !0), t.memoizedState = f, t.baseQueue === null && (t.baseState = f), a.lastRenderedState = f;
      }
      return [f, i];
    }
    function xf(e, t, a) {
      var i = ke, o = Yl();
      if (Tt) {
        if (a === void 0)
          throw Error(
            "Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering."
          );
        var f = a();
        Tm || f === a() || (console.error(
          "The result of getServerSnapshot should be cached to avoid an infinite loop"
        ), Tm = !0);
      } else {
        if (f = t(), Tm || (a = t(), Ln(f, a) || (console.error(
          "The result of getSnapshot should be cached to avoid an infinite loop"
        ), Tm = !0)), tl === null)
          throw Error(
            "Expected a work-in-progress root. This is a bug in React. Please file an issue."
          );
        (mt & 127) !== 0 || fy(i, t, f);
      }
      return o.memoizedState = f, a = { value: f, getSnapshot: t }, o.queue = a, Uo(
        Hc.bind(null, i, a, e),
        [e]
      ), i.flags |= 2048, oi(
        Bi | Qn,
        { destroy: void 0 },
        ry.bind(
          null,
          i,
          a,
          f,
          t
        ),
        null
      ), f;
    }
    function Mo(e, t, a) {
      var i = ke, o = jt(), f = Tt;
      if (f) {
        if (a === void 0)
          throw Error(
            "Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering."
          );
        a = a();
      } else if (a = t(), !Tm) {
        var d = t();
        Ln(a, d) || (console.error(
          "The result of getSnapshot should be cached to avoid an infinite loop"
        ), Tm = !0);
      }
      (d = !Ln(
        (el || o).memoizedState,
        a
      )) && (o.memoizedState = a, oa = !0), o = o.queue;
      var h = Hc.bind(null, i, o, e);
      if (Ql(2048, Qn, h, [e]), o.getSnapshot !== t || d || ca !== null && ca.memoizedState.tag & Bi) {
        if (i.flags |= 2048, oi(
          Bi | Qn,
          { destroy: void 0 },
          ry.bind(
            null,
            i,
            o,
            a,
            t
          ),
          null
        ), tl === null)
          throw Error(
            "Expected a work-in-progress root. This is a bug in React. Please file an issue."
          );
        f || (of & 127) !== 0 || fy(i, t, a);
      }
      return a;
    }
    function fy(e, t, a) {
      e.flags |= 16384, e = { getSnapshot: t, value: a }, t = ke.updateQueue, t === null ? (t = rs(), ke.updateQueue = t, t.stores = [e]) : (a = t.stores, a === null ? t.stores = [e] : a.push(e));
    }
    function ry(e, t, a, i) {
      t.value = a, t.getSnapshot = i, xc(t) && sy(e);
    }
    function Hc(e, t, a) {
      return a(function() {
        xc(t) && (li(2, "updateSyncExternalStore()", e), sy(e));
      });
    }
    function xc(e) {
      var t = e.getSnapshot;
      e = e.value;
      try {
        var a = t();
        return !Ln(e, a);
      } catch {
        return !0;
      }
    }
    function sy(e) {
      var t = Ma(e, 2);
      t !== null && Ke(t, e, 2);
    }
    function Jd(e) {
      var t = Yl();
      if (typeof e == "function") {
        var a = e;
        if (e = a(), md) {
          ie(!0);
          try {
            a();
          } finally {
            ie(!1);
          }
        }
      }
      return t.memoizedState = t.baseState = e, t.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Cn,
        lastRenderedState: e
      }, t;
    }
    function Nc(e) {
      e = Jd(e);
      var t = e.queue, a = Id.bind(null, ke, t);
      return t.dispatch = a, [e.memoizedState, a];
    }
    function Co(e) {
      var t = Yl();
      t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return t.queue = a, t = vs.bind(
        null,
        ke,
        !0,
        a
      ), a.dispatch = t, [e, t];
    }
    function ds(e, t) {
      var a = jt();
      return Nf(a, el, e, t);
    }
    function Nf(e, t, a, i) {
      return e.baseState = a, Uc(
        e,
        el,
        typeof i == "function" ? i : Cn
      );
    }
    function hs(e, t) {
      var a = jt();
      return el !== null ? Nf(a, el, e, t) : (a.baseState = e, [e, a.queue.dispatch]);
    }
    function Zp(e, t, a, i, o) {
      if (ta(e))
        throw Error("Cannot update form state while rendering.");
      if (e = t.action, e !== null) {
        var f = {
          payload: o,
          action: e,
          next: null,
          isTransition: !0,
          status: "pending",
          value: null,
          reason: null,
          listeners: [],
          then: function(d) {
            f.listeners.push(d);
          }
        };
        Z.T !== null ? a(!0) : f.isTransition = !1, i(f), a = t.pending, a === null ? (f.next = t.pending = f, Bc(t, f)) : (f.next = a.next, t.pending = a.next = f);
      }
    }
    function Bc(e, t) {
      var a = t.action, i = t.payload, o = e.state;
      if (t.isTransition) {
        var f = Z.T, d = {};
        d._updatedFibers = /* @__PURE__ */ new Set(), Z.T = d;
        try {
          var h = a(o, i), y = Z.S;
          y !== null && y(d, h), dy(e, t, h);
        } catch (p) {
          ms(e, t, p);
        } finally {
          f !== null && d.types !== null && (f.types !== null && f.types !== d.types && console.error(
            "We expected inner Transitions to have transferred the outer types set and that you cannot add to the outer Transition while inside the inner.This is a bug in React."
          ), f.types = d.types), Z.T = f, f === null && d._updatedFibers && (e = d._updatedFibers.size, d._updatedFibers.clear(), 10 < e && console.warn(
            "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
          ));
        }
      } else
        try {
          d = a(o, i), dy(e, t, d);
        } catch (p) {
          ms(e, t, p);
        }
    }
    function dy(e, t, a) {
      a !== null && typeof a == "object" && typeof a.then == "function" ? (Z.asyncTransitions++, a.then(Ho, Ho), a.then(
        function(i) {
          ec(e, t, i);
        },
        function(i) {
          return ms(e, t, i);
        }
      ), t.isTransition || console.error(
        "An async function with useActionState was called outside of a transition. This is likely not what you intended (for example, isPending will not update correctly). Either call the returned function inside startTransition, or pass it to an `action` or `formAction` prop."
      )) : ec(e, t, a);
    }
    function ec(e, t, a) {
      t.status = "fulfilled", t.value = a, Kd(t), e.state = a, t = e.pending, t !== null && (a = t.next, a === t ? e.pending = null : (a = a.next, t.next = a, Bc(e, a)));
    }
    function ms(e, t, a) {
      var i = e.pending;
      if (e.pending = null, i !== null) {
        i = i.next;
        do
          t.status = "rejected", t.reason = a, Kd(t), t = t.next;
        while (t !== i);
      }
      e.action = null;
    }
    function Kd(e) {
      e = e.listeners;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
    function tc(e, t) {
      return t;
    }
    function Un(e, t) {
      if (Tt) {
        var a = tl.formState;
        if (a !== null) {
          e: {
            var i = ke;
            if (Tt) {
              if (sl) {
                t: {
                  for (var o = sl, f = Hi; o.nodeType !== 8; ) {
                    if (!f) {
                      o = null;
                      break t;
                    }
                    if (o = wn(
                      o.nextSibling
                    ), o === null) {
                      o = null;
                      break t;
                    }
                  }
                  f = o.data, o = f === yS || f === p2 ? o : null;
                }
                if (o) {
                  sl = wn(
                    o.nextSibling
                  ), i = o.data === yS;
                  break e;
                }
              }
              Wn(i);
            }
            i = !1;
          }
          i && (t = a[0]);
        }
      }
      return a = Yl(), a.memoizedState = a.baseState = t, i = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: tc,
        lastRenderedState: t
      }, a.queue = i, a = Id.bind(
        null,
        ke,
        i
      ), i.dispatch = a, i = Jd(!1), f = vs.bind(
        null,
        ke,
        !1,
        i.queue
      ), i = Yl(), o = {
        state: t,
        dispatch: null,
        action: e,
        pending: null
      }, i.queue = o, a = Zp.bind(
        null,
        ke,
        o,
        f,
        a
      ), o.dispatch = a, i.memoizedState = e, [t, a, !1];
    }
    function Yc(e) {
      var t = jt();
      return $d(t, el, e);
    }
    function $d(e, t, a) {
      if (t = Uc(
        e,
        t,
        tc
      )[0], e = Do(Cn)[0], typeof t == "object" && t !== null && typeof t.then == "function")
        try {
          var i = ss(t);
        } catch (d) {
          throw d === vm ? dv : d;
        }
      else i = t;
      t = jt();
      var o = t.queue, f = o.dispatch;
      return a !== t.memoizedState && (ke.flags |= 2048, oi(
        Bi | Qn,
        { destroy: void 0 },
        hy.bind(null, o, a),
        null
      )), [i, f, e];
    }
    function hy(e, t) {
      e.action = t;
    }
    function wc(e) {
      var t = jt(), a = el;
      if (a !== null)
        return $d(t, a, e);
      jt(), t = t.memoizedState, a = jt();
      var i = a.queue.dispatch;
      return a.memoizedState = e, [t, i, !1];
    }
    function oi(e, t, a, i) {
      return e = { tag: e, create: a, deps: i, inst: t, next: null }, t = ke.updateQueue, t === null && (t = rs(), ke.updateQueue = t), a = t.lastEffect, a === null ? t.lastEffect = e.next = e : (i = a.next, a.next = e, e.next = i, t.lastEffect = e), e;
    }
    function kd(e) {
      var t = Yl();
      return e = { current: e }, t.memoizedState = e;
    }
    function qc(e, t, a, i) {
      var o = Yl();
      ke.flags |= e, o.memoizedState = oi(
        Bi | t,
        { destroy: void 0 },
        a,
        i === void 0 ? null : i
      );
    }
    function Ql(e, t, a, i) {
      var o = jt();
      i = i === void 0 ? null : i;
      var f = o.memoizedState.inst;
      el !== null && i !== null && cy(i, el.memoizedState.deps) ? o.memoizedState = oi(t, f, a, i) : (ke.flags |= e, o.memoizedState = oi(
        Bi | t,
        f,
        a,
        i
      ));
    }
    function Uo(e, t) {
      (ke.mode & hc) !== Ze ? qc(276826112, Qn, e, t) : qc(8390656, Qn, e, t);
    }
    function Jp(e) {
      ke.flags |= 4;
      var t = ke.updateQueue;
      if (t === null)
        t = rs(), ke.updateQueue = t, t.events = [e];
      else {
        var a = t.events;
        a === null ? t.events = [e] : a.push(e);
      }
    }
    function ys(e) {
      var t = Yl(), a = { impl: e };
      return t.memoizedState = a, function() {
        if ((zt & Ra) !== Ya)
          throw Error(
            "A function wrapped in useEffectEvent can't be called during rendering."
          );
        return a.impl.apply(void 0, arguments);
      };
    }
    function Bf(e) {
      var t = jt().memoizedState;
      return Jp({ ref: t, nextImpl: e }), function() {
        if ((zt & Ra) !== Ya)
          throw Error(
            "A function wrapped in useEffectEvent can't be called during rendering."
          );
        return t.impl.apply(void 0, arguments);
      };
    }
    function $a(e, t) {
      var a = 4194308;
      return (ke.mode & hc) !== Ze && (a |= 134217728), qc(a, Qu, e, t);
    }
    function Hn(e, t) {
      if (typeof t == "function") {
        e = e();
        var a = t(e);
        return function() {
          typeof a == "function" ? a() : t(null);
        };
      }
      if (t != null)
        return t.hasOwnProperty("current") || console.error(
          "Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.",
          "an object with keys {" + Object.keys(t).join(", ") + "}"
        ), e = e(), t.current = e, function() {
          t.current = null;
        };
    }
    function fi(e, t, a) {
      typeof t != "function" && console.error(
        "Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.",
        t !== null ? typeof t : "null"
      ), a = a != null ? a.concat([e]) : null;
      var i = 4194308;
      (ke.mode & hc) !== Ze && (i |= 134217728), qc(
        i,
        Qu,
        Hn.bind(null, t, e),
        a
      );
    }
    function Yf(e, t, a) {
      typeof t != "function" && console.error(
        "Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.",
        t !== null ? typeof t : "null"
      ), a = a != null ? a.concat([e]) : null, Ql(
        4,
        Qu,
        Hn.bind(null, t, e),
        a
      );
    }
    function Fd(e, t) {
      return Yl().memoizedState = [
        e,
        t === void 0 ? null : t
      ], e;
    }
    function Cu(e, t) {
      var a = jt();
      t = t === void 0 ? null : t;
      var i = a.memoizedState;
      return t !== null && cy(t, i[1]) ? i[0] : (a.memoizedState = [e, t], e);
    }
    function ka(e, t) {
      var a = Yl();
      t = t === void 0 ? null : t;
      var i = e();
      if (md) {
        ie(!0);
        try {
          e();
        } finally {
          ie(!1);
        }
      }
      return a.memoizedState = [i, t], i;
    }
    function cl(e, t) {
      var a = jt();
      t = t === void 0 ? null : t;
      var i = a.memoizedState;
      if (t !== null && cy(t, i[1]))
        return i[0];
      if (i = e(), md) {
        ie(!0);
        try {
          e();
        } finally {
          ie(!1);
        }
      }
      return a.memoizedState = [i, t], i;
    }
    function wf(e, t) {
      var a = Yl();
      return Gt(a, e, t);
    }
    function ri(e, t) {
      var a = jt();
      return zl(
        a,
        el.memoizedState,
        e,
        t
      );
    }
    function at(e, t) {
      var a = jt();
      return el === null ? Gt(a, e, t) : zl(
        a,
        el.memoizedState,
        e,
        t
      );
    }
    function Gt(e, t, a) {
      return a === void 0 || (of & 1073741824) !== 0 && (mt & 261930) === 0 ? e.memoizedState = t : (e.memoizedState = a, e = Zf(), ke.lanes |= e, xr |= e, a);
    }
    function zl(e, t, a, i) {
      return Ln(a, t) ? a : bm.current !== null ? (e = Gt(e, a, i), Ln(e, t) || (oa = !0), e) : (of & 42) === 0 || (of & 1073741824) !== 0 && (mt & 261930) === 0 ? (oa = !0, e.memoizedState = a) : (e = Zf(), ke.lanes |= e, xr |= e, t);
    }
    function Ho() {
      Z.asyncTransitions--;
    }
    function xo(e, t, a, i, o) {
      var f = Yt.p;
      Yt.p = f !== 0 && f < Ta ? f : Ta;
      var d = Z.T, h = {};
      h._updatedFibers = /* @__PURE__ */ new Set(), Z.T = h, vs(e, !1, t, a);
      try {
        var y = o(), p = Z.S;
        if (p !== null && p(h, y), y !== null && typeof y == "object" && typeof y.then == "function") {
          Z.asyncTransitions++, y.then(Ho, Ho);
          var M = Ld(
            y,
            i
          );
          No(
            e,
            t,
            M,
            Ua(e)
          );
        } else
          No(
            e,
            t,
            i,
            Ua(e)
          );
      } catch (U) {
        No(
          e,
          t,
          { then: function() {
          }, status: "rejected", reason: U },
          Ua(e)
        );
      } finally {
        Yt.p = f, d !== null && h.types !== null && (d.types !== null && d.types !== h.types && console.error(
          "We expected inner Transitions to have transferred the outer types set and that you cannot add to the outer Transition while inside the inner.This is a bug in React."
        ), d.types = h.types), Z.T = d, d === null && h._updatedFibers && (e = h._updatedFibers.size, h._updatedFibers.clear(), 10 < e && console.warn(
          "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
        ));
      }
    }
    function lc(e, t, a, i) {
      if (e.tag !== 5)
        throw Error(
          "Expected the form instance to be a HostComponent. This is a bug in React."
        );
      var o = ps(e).queue;
      Vp(e), xo(
        e,
        o,
        t,
        _d,
        a === null ? V : function() {
          return qf(e), a(i);
        }
      );
    }
    function ps(e) {
      var t = e.memoizedState;
      if (t !== null) return t;
      t = {
        memoizedState: _d,
        baseState: _d,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Cn,
          lastRenderedState: _d
        },
        next: null
      };
      var a = {};
      return t.next = {
        memoizedState: a,
        baseState: a,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Cn,
          lastRenderedState: a
        },
        next: null
      }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
    }
    function qf(e) {
      Z.T === null && console.error(
        "requestFormReset was called outside a transition or action. To fix, move to an action, or wrap with startTransition."
      );
      var t = ps(e);
      t.next === null && (t = e.alternate.memoizedState), No(
        e,
        t.next.queue,
        {},
        Ua(e)
      );
    }
    function jc() {
      var e = Jd(!1);
      return e = xo.bind(
        null,
        ke,
        e.queue,
        !0,
        !1
      ), Yl().memoizedState = e, [!1, e];
    }
    function Kp() {
      var e = Do(Cn)[0], t = jt().memoizedState;
      return [
        typeof e == "boolean" ? e : ss(e),
        t
      ];
    }
    function ml() {
      var e = zo(Cn)[0], t = jt().memoizedState;
      return [
        typeof e == "boolean" ? e : ss(e),
        t
      ];
    }
    function ac() {
      return Nt(bp);
    }
    function gs() {
      var e = Yl(), t = tl.identifierPrefix;
      if (Tt) {
        var a = lf, i = tf;
        a = (i & ~(1 << 32 - Ea(i) - 1)).toString(32) + a, t = "_" + t + "R_" + a, a = gv++, 0 < a && (t += "H" + a.toString(32)), t += "_";
      } else
        a = fT++, t = "_" + t + "r_" + a.toString(32) + "_";
      return e.memoizedState = t;
    }
    function Wd() {
      return Yl().memoizedState = $p.bind(
        null,
        ke
      );
    }
    function $p(e, t) {
      for (var a = e.return; a !== null; ) {
        switch (a.tag) {
          case 24:
          case 3:
            var i = Ua(a), o = Vl(i), f = ui(a, o, i);
            f !== null && (li(i, "refresh()", e), Ke(f, a, i), lu(f, a, i)), e = jd(), t != null && f !== null && console.error(
              "The seed argument is not enabled outside experimental channels."
            ), o.payload = { cache: e };
            return;
        }
        a = a.return;
      }
    }
    function u1(e, t, a) {
      var i = arguments;
      typeof i[3] == "function" && console.error(
        "State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect()."
      ), i = Ua(e);
      var o = {
        lane: i,
        revertLane: 0,
        gesture: null,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      ta(e) ? Tl(t, o) : (o = yo(e, t, o, i), o !== null && (li(i, "dispatch()", e), Ke(o, e, i), Ss(o, t, i)));
    }
    function Id(e, t, a) {
      var i = arguments;
      typeof i[3] == "function" && console.error(
        "State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect()."
      ), i = Ua(e), No(e, t, a, i) && li(i, "setState()", e);
    }
    function No(e, t, a, i) {
      var o = {
        lane: i,
        revertLane: 0,
        gesture: null,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (ta(e)) Tl(t, o);
      else {
        var f = e.alternate;
        if (e.lanes === 0 && (f === null || f.lanes === 0) && (f = t.lastRenderedReducer, f !== null)) {
          var d = Z.H;
          Z.H = yc;
          try {
            var h = t.lastRenderedState, y = f(h, a);
            if (o.hasEagerState = !0, o.eagerState = y, Ln(y, h))
              return Af(e, t, o, 0), tl === null && xd(), !1;
          } catch {
          } finally {
            Z.H = d;
          }
        }
        if (a = yo(e, t, o, i), a !== null)
          return Ke(a, e, i), Ss(a, t, i), !0;
      }
      return !1;
    }
    function vs(e, t, a, i) {
      if (Z.T === null && fd === 0 && console.error(
        "An optimistic state update occurred outside a transition or action. To fix, move the update to an action, or wrap with startTransition."
      ), i = {
        lane: 2,
        revertLane: e0(),
        gesture: null,
        action: i,
        hasEagerState: !1,
        eagerState: null,
        next: null
      }, ta(e)) {
        if (t)
          throw Error("Cannot update optimistic state while rendering.");
        console.error("Cannot call startTransition while rendering.");
      } else
        t = yo(
          e,
          a,
          i,
          2
        ), t !== null && (li(2, "setOptimistic()", e), Ke(t, e, 2));
    }
    function ta(e) {
      var t = e.alternate;
      return e === ke || t !== null && t === ke;
    }
    function Tl(e, t) {
      Am = pv = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function Ss(e, t, a) {
      if ((a & 4194048) !== 0) {
        var i = t.lanes;
        i &= e.pendingLanes, a |= i, t.lanes = a, ku(e, a);
      }
    }
    function Bo(e) {
      if (e !== null && typeof e != "function") {
        var t = String(e);
        Xb.has(t) || (Xb.add(t), console.error(
          "Expected the last optional `callback` argument to be a function. Instead received: %s.",
          e
        ));
      }
    }
    function jf(e, t, a, i) {
      var o = e.memoizedState, f = a(i, o);
      if (e.mode & gn) {
        ie(!0);
        try {
          f = a(i, o);
        } finally {
          ie(!1);
        }
      }
      f === void 0 && (t = lt(t) || "Component", qb.has(t) || (qb.add(t), console.error(
        "%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.",
        t
      ))), o = f == null ? o : st({}, o, f), e.memoizedState = o, e.lanes === 0 && (e.updateQueue.baseState = o);
    }
    function Pd(e, t, a, i, o, f, d) {
      var h = e.stateNode;
      if (typeof h.shouldComponentUpdate == "function") {
        if (a = h.shouldComponentUpdate(
          i,
          f,
          d
        ), e.mode & gn) {
          ie(!0);
          try {
            a = h.shouldComponentUpdate(
              i,
              f,
              d
            );
          } finally {
            ie(!1);
          }
        }
        return a === void 0 && console.error(
          "%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.",
          lt(t) || "Component"
        ), a;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !Tf(a, i) || !Tf(o, f) : !0;
    }
    function si(e, t, a, i) {
      var o = t.state;
      typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== o && (e = pe(e) || "Component", xb.has(e) || (xb.add(e), console.error(
        "%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",
        e
      )), K1.enqueueReplaceState(
        t,
        t.state,
        null
      ));
    }
    function di(e, t) {
      var a = t;
      if ("ref" in t) {
        a = {};
        for (var i in t)
          i !== "ref" && (a[i] = t[i]);
      }
      if (e = e.defaultProps) {
        a === t && (a = st({}, a));
        for (var o in e)
          a[o] === void 0 && (a[o] = e[o]);
      }
      return a;
    }
    function eh(e) {
      R1(e), console.warn(
        `%s

%s
`,
        Rm ? "An error occurred in the <" + Rm + "> component." : "An error occurred in one of your React components.",
        `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://react.dev/link/error-boundaries to learn more about error boundaries.`
      );
    }
    function th(e) {
      var t = Rm ? "The above error occurred in the <" + Rm + "> component." : "The above error occurred in one of your React components.", a = "React will try to recreate this component tree from scratch using the error boundary you provided, " + (($1 || "Anonymous") + ".");
      if (typeof e == "object" && e !== null && typeof e.environmentName == "string") {
        var i = e.environmentName;
        e = [
          `%o

%s

%s
`,
          e,
          t,
          a
        ].slice(0), typeof e[0] == "string" ? e.splice(
          0,
          1,
          R2 + " " + e[0],
          _2,
          Xv + i + Xv,
          O2
        ) : e.splice(
          0,
          0,
          R2,
          _2,
          Xv + i + Xv,
          O2
        ), e.unshift(console), i = CT.apply(console.error, e), i();
      } else
        console.error(
          `%o

%s

%s
`,
          e,
          t,
          a
        );
    }
    function my(e) {
      R1(e);
    }
    function bs(e, t) {
      try {
        Rm = t.source ? pe(t.source) : null, $1 = null;
        var a = t.value;
        if (Z.actQueue !== null)
          Z.thrownErrors.push(a);
        else {
          var i = e.onUncaughtError;
          i(a, { componentStack: t.stack });
        }
      } catch (o) {
        setTimeout(function() {
          throw o;
        });
      }
    }
    function yy(e, t, a) {
      try {
        Rm = a.source ? pe(a.source) : null, $1 = pe(t);
        var i = e.onCaughtError;
        i(a.value, {
          componentStack: a.stack,
          errorBoundary: t.tag === 1 ? t.stateNode : null
        });
      } catch (o) {
        setTimeout(function() {
          throw o;
        });
      }
    }
    function lh(e, t, a) {
      return a = Vl(a), a.tag = L1, a.payload = { element: null }, a.callback = function() {
        fe(t.source, bs, e, t);
      }, a;
    }
    function ah(e) {
      return e = Vl(e), e.tag = L1, e;
    }
    function nh(e, t, a, i) {
      var o = a.type.getDerivedStateFromError;
      if (typeof o == "function") {
        var f = i.value;
        e.payload = function() {
          return o(f);
        }, e.callback = function() {
          po(a), fe(
            i.source,
            yy,
            t,
            a,
            i
          );
        };
      }
      var d = a.stateNode;
      d !== null && typeof d.componentDidCatch == "function" && (e.callback = function() {
        po(a), fe(
          i.source,
          yy,
          t,
          a,
          i
        ), typeof o != "function" && (Br === null ? Br = /* @__PURE__ */ new Set([this]) : Br.add(this)), uT(this, i), typeof o == "function" || (a.lanes & 2) === 0 && console.error(
          "%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.",
          pe(a) || "Unknown"
        );
      });
    }
    function py(e, t, a, i, o) {
      if (a.flags |= 32768, _i && Ff(e, o), i !== null && typeof i == "object" && typeof i.then == "function") {
        if (t = a.alternate, t !== null && _u(
          t,
          a,
          o,
          !0
        ), Tt && (to = !0), a = Vu.current, a !== null) {
          switch (a.tag) {
            case 31:
            case 13:
              return Ni === null ? Kf() : a.alternate === null && Rl === df && (Rl = bv), a.flags &= -257, a.flags |= 65536, a.lanes = o, i === hv ? a.flags |= 16384 : (t = a.updateQueue, t === null ? a.updateQueue = /* @__PURE__ */ new Set([i]) : t.add(i), Rh(e, i, o)), !1;
            case 22:
              return a.flags |= 65536, i === hv ? a.flags |= 16384 : (t = a.updateQueue, t === null ? (t = {
                transitions: null,
                markerInstances: null,
                retryQueue: /* @__PURE__ */ new Set([i])
              }, a.updateQueue = t) : (a = t.retryQueue, a === null ? t.retryQueue = /* @__PURE__ */ new Set([i]) : a.add(i)), Rh(e, i, o)), !1;
          }
          throw Error(
            "Unexpected Suspense handler tag (" + a.tag + "). This is a bug in React."
          );
        }
        return Rh(e, i, o), Kf(), !1;
      }
      if (Tt)
        return to = !0, t = Vu.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = o, i !== C1 && Pr(
          Va(
            Error(
              "There was an error while hydrating but React was able to recover by instead client rendering from the nearest Suspense boundary.",
              { cause: i }
            ),
            a
          )
        )) : (i !== C1 && Pr(
          Va(
            Error(
              "There was an error while hydrating but React was able to recover by instead client rendering the entire root.",
              { cause: i }
            ),
            a
          )
        ), e = e.current.alternate, e.flags |= 65536, o &= -o, e.lanes |= o, i = Va(i, a), o = lh(
          e.stateNode,
          i,
          o
        ), us(e, o), Rl !== Ur && (Rl = yd)), !1;
      var f = Va(
        Error(
          "There was an error during concurrent rendering but React was able to recover by instead synchronously rendering the entire root.",
          { cause: i }
        ),
        a
      );
      if (sp === null ? sp = [f] : sp.push(f), Rl !== Ur && (Rl = yd), t === null) return !0;
      i = Va(i, a), a = t;
      do {
        switch (a.tag) {
          case 3:
            return a.flags |= 65536, e = o & -o, a.lanes |= e, e = lh(
              a.stateNode,
              i,
              e
            ), us(a, e), !1;
          case 1:
            if (t = a.type, f = a.stateNode, (a.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || f !== null && typeof f.componentDidCatch == "function" && (Br === null || !Br.has(f))))
              return a.flags |= 65536, o &= -o, a.lanes |= o, o = ah(o), nh(
                o,
                e,
                a,
                i
              ), us(a, o), !1;
        }
        a = a.return;
      } while (a !== null);
      return !1;
    }
    function la(e, t, a, i) {
      t.child = e === null ? Tb(t, null, a, i) : hd(
        t,
        e.child,
        a,
        i
      );
    }
    function kp(e, t, a, i, o) {
      a = a.render;
      var f = t.ref;
      if ("ref" in i) {
        var d = {};
        for (var h in i)
          h !== "ref" && (d[h] = i[h]);
      } else d = i;
      return zc(t), i = oy(
        e,
        t,
        a,
        d,
        f,
        o
      ), h = Oo(), e !== null && !oa ? (fs(e, t, o), Uu(e, t, o)) : (Tt && h && Yd(t), t.flags |= 1, la(e, t, i, o), t.child);
    }
    function gy(e, t, a, i, o) {
      if (e === null) {
        var f = a.type;
        return typeof f == "function" && !km(f) && f.defaultProps === void 0 && a.compare === null ? (a = Ac(f), t.tag = 15, t.type = a, Gf(t, f), vy(
          e,
          t,
          a,
          i,
          o
        )) : (e = go(
          a.type,
          null,
          i,
          t,
          t.mode,
          o
        ), e.ref = t.ref, e.return = t, t.child = e);
      }
      if (f = e.child, !fh(e, o)) {
        var d = f.memoizedProps;
        if (a = a.compare, a = a !== null ? a : Tf, a(d, i) && e.ref === t.ref)
          return Uu(
            e,
            t,
            o
          );
      }
      return t.flags |= 1, e = ti(f, i), e.ref = t.ref, e.return = t, t.child = e;
    }
    function vy(e, t, a, i, o) {
      if (e !== null) {
        var f = e.memoizedProps;
        if (Tf(f, i) && e.ref === t.ref && t.type === e.type)
          if (oa = !1, t.pendingProps = i = f, fh(e, o))
            (e.flags & 131072) !== 0 && (oa = !0);
          else
            return t.lanes = e.lanes, Uu(e, t, o);
      }
      return Ty(
        e,
        t,
        a,
        i,
        o
      );
    }
    function Sy(e, t, a, i) {
      var o = i.children, f = e !== null ? e.memoizedState : null;
      if (e === null && t.stateNode === null && (t.stateNode = {
        _visibility: G0,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null
      }), i.mode === "hidden") {
        if ((t.flags & 128) !== 0) {
          if (f = f !== null ? f.baseLanes | a : a, e !== null) {
            for (i = t.child = e.child, o = 0; i !== null; )
              o = o | i.lanes | i.childLanes, i = i.sibling;
            i = o & ~f;
          } else i = 0, t.child = null;
          return by(
            e,
            t,
            f,
            a,
            i
          );
        }
        if ((a & 536870912) !== 0)
          t.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && zf(
            t,
            f !== null ? f.cachePool : null
          ), f !== null ? Qd(t, f) : Wi(t), Zd(t);
        else
          return i = t.lanes = 536870912, by(
            e,
            t,
            f !== null ? f.baseLanes | a : a,
            a,
            i
          );
      } else
        f !== null ? (zf(t, f.cachePool), Qd(t, f), ci(t), t.memoizedState = null) : (e !== null && zf(t, null), Wi(t), ci(t));
      return la(e, t, o, a), t.child;
    }
    function Yo(e, t) {
      return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = {
        _visibility: G0,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null
      }), t.sibling;
    }
    function by(e, t, a, i, o) {
      var f = Fi();
      return f = f === null ? null : {
        parent: ua._currentValue,
        pool: f
      }, t.memoizedState = {
        baseLanes: a,
        cachePool: f
      }, e !== null && zf(t, null), Wi(t), Zd(t), e !== null && _u(e, t, i, !0), t.childLanes = o, null;
    }
    function Es(e, t) {
      var a = t.hidden;
      return a !== void 0 && console.error(
        `<Activity> doesn't accept a hidden prop. Use mode="hidden" instead.
- <Activity %s>
+ <Activity %s>`,
        a === !0 ? "hidden" : a === !1 ? "hidden={false}" : "hidden={...}",
        a ? 'mode="hidden"' : 'mode="visible"'
      ), t = As(
        { mode: t.mode, children: t.children },
        e.mode
      ), t.ref = e.ref, e.child = t, t.return = e, t;
    }
    function Ey(e, t, a) {
      return hd(t, e.child, null, a), e = Es(
        t,
        t.pendingProps
      ), e.flags |= 2, ea(t), t.memoizedState = null, e;
    }
    function Fp(e, t, a) {
      var i = t.pendingProps, o = (t.flags & 128) !== 0;
      if (t.flags &= -129, e === null) {
        if (Tt) {
          if (i.mode === "hidden")
            return e = Es(t, i), t.lanes = 536870912, Yo(null, e);
          if (Mu(t), (e = sl) ? (a = Xt(
            e,
            Hi
          ), a = a !== null && a.data === Ed ? a : null, a !== null && (i = {
            dehydrated: a,
            treeContext: Gp(),
            retryLane: 536870912,
            hydrationErrors: null
          }, t.memoizedState = i, i = Wm(a), i.return = t, t.child = i, nn = t, sl = null)) : a = null, a === null)
            throw Ca(t, e), Wn(t);
          return t.lanes = 536870912, null;
        }
        return Es(t, i);
      }
      var f = e.memoizedState;
      if (f !== null) {
        var d = f.dehydrated;
        if (Mu(t), o)
          if (t.flags & 256)
            t.flags &= -257, t = Ey(
              e,
              t,
              a
            );
          else if (t.memoizedState !== null)
            t.child = e.child, t.flags |= 128, t = null;
          else
            throw Error(
              "Client rendering an Activity suspended it again. This is a bug in React."
            );
        else if (Xp(), (a & 536870912) !== 0 && Jf(t), oa || _u(
          e,
          t,
          a,
          !1
        ), o = (a & e.childLanes) !== 0, oa || o) {
          if (i = tl, i !== null && (d = qa(
            i,
            a
          ), d !== 0 && d !== f.retryLane))
            throw f.retryLane = d, Ma(e, d), Ke(i, e, d), k1;
          Kf(), t = Ey(
            e,
            t,
            a
          );
        } else
          e = f.treeContext, sl = wn(
            d.nextSibling
          ), nn = t, Tt = !0, _r = null, to = !1, Xu = null, Hi = !1, e !== null && Lp(t, e), t = Es(t, i), t.flags |= 4096;
        return t;
      }
      return f = e.child, i = { mode: i.mode, children: i.children }, (a & 536870912) !== 0 && (a & e.lanes) !== 0 && Jf(t), e = ti(f, i), e.ref = t.ref, t.child = e, e.return = t, e;
    }
    function Ts(e, t) {
      var a = t.ref;
      if (a === null)
        e !== null && e.ref !== null && (t.flags |= 4194816);
      else {
        if (typeof a != "function" && typeof a != "object")
          throw Error(
            "Expected ref to be a function, an object returned by React.createRef(), or undefined/null."
          );
        (e === null || e.ref !== a) && (t.flags |= 4194816);
      }
    }
    function Ty(e, t, a, i, o) {
      if (a.prototype && typeof a.prototype.render == "function") {
        var f = lt(a) || "Unknown";
        Vb[f] || (console.error(
          "The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.",
          f,
          f
        ), Vb[f] = !0);
      }
      return t.mode & gn && mc.recordLegacyContextWarning(
        t,
        null
      ), e === null && (Gf(t, t.type), a.contextTypes && (f = lt(a) || "Unknown", Zb[f] || (Zb[f] = !0, console.error(
        "%s uses the legacy contextTypes API which was removed in React 19. Use React.createContext() with React.useContext() instead. (https://react.dev/link/legacy-context)",
        f
      )))), zc(t), a = oy(
        e,
        t,
        a,
        i,
        void 0,
        o
      ), i = Oo(), e !== null && !oa ? (fs(e, t, o), Uu(e, t, o)) : (Tt && i && Yd(t), t.flags |= 1, la(e, t, a, o), t.child);
    }
    function Ay(e, t, a, i, o, f) {
      return zc(t), rf = -1, np = e !== null && e.type !== t.type, t.updateQueue = null, a = cs(
        t,
        i,
        a,
        o
      ), Dl(e, t), i = Oo(), e !== null && !oa ? (fs(e, t, f), Uu(e, t, f)) : (Tt && i && Yd(t), t.flags |= 1, la(e, t, a, f), t.child);
    }
    function wo(e, t, a, i, o) {
      switch (he(t)) {
        case !1:
          var f = t.stateNode, d = new t.type(
            t.memoizedProps,
            f.context
          ).state;
          f.updater.enqueueSetState(f, d, null);
          break;
        case !0:
          t.flags |= 128, t.flags |= 65536, f = Error("Simulated error coming from DevTools");
          var h = o & -o;
          if (t.lanes |= h, d = tl, d === null)
            throw Error(
              "Expected a work-in-progress root. This is a bug in React. Please file an issue."
            );
          h = ah(h), nh(
            h,
            d,
            t,
            Va(f, t)
          ), us(t, h);
      }
      if (zc(t), t.stateNode === null) {
        if (d = Rr, f = a.contextType, "contextType" in a && f !== null && (f === void 0 || f.$$typeof !== ju) && !Lb.has(a) && (Lb.add(a), h = f === void 0 ? " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof f != "object" ? " However, it is set to a " + typeof f + "." : f.$$typeof === Jh ? " Did you accidentally pass the Context.Consumer instead?" : " However, it is set to an object with keys {" + Object.keys(f).join(", ") + "}.", console.error(
          "%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s",
          lt(a) || "Component",
          h
        )), typeof f == "object" && f !== null && (d = Nt(f)), f = new a(i, d), t.mode & gn) {
          ie(!0);
          try {
            f = new a(i, d);
          } finally {
            ie(!1);
          }
        }
        if (d = t.memoizedState = f.state !== null && f.state !== void 0 ? f.state : null, f.updater = K1, t.stateNode = f, f._reactInternals = t, f._reactInternalInstance = Hb, typeof a.getDerivedStateFromProps == "function" && d === null && (d = lt(a) || "Component", Nb.has(d) || (Nb.add(d), console.error(
          "`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.",
          d,
          f.state === null ? "null" : "undefined",
          d
        ))), typeof a.getDerivedStateFromProps == "function" || typeof f.getSnapshotBeforeUpdate == "function") {
          var y = h = d = null;
          if (typeof f.componentWillMount == "function" && f.componentWillMount.__suppressDeprecationWarning !== !0 ? d = "componentWillMount" : typeof f.UNSAFE_componentWillMount == "function" && (d = "UNSAFE_componentWillMount"), typeof f.componentWillReceiveProps == "function" && f.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? h = "componentWillReceiveProps" : typeof f.UNSAFE_componentWillReceiveProps == "function" && (h = "UNSAFE_componentWillReceiveProps"), typeof f.componentWillUpdate == "function" && f.componentWillUpdate.__suppressDeprecationWarning !== !0 ? y = "componentWillUpdate" : typeof f.UNSAFE_componentWillUpdate == "function" && (y = "UNSAFE_componentWillUpdate"), d !== null || h !== null || y !== null) {
            f = lt(a) || "Component";
            var p = typeof a.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            Yb.has(f) || (Yb.add(f), console.error(
              `Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://react.dev/link/unsafe-component-lifecycles`,
              f,
              p,
              d !== null ? `
  ` + d : "",
              h !== null ? `
  ` + h : "",
              y !== null ? `
  ` + y : ""
            ));
          }
        }
        f = t.stateNode, d = lt(a) || "Component", f.render || (a.prototype && typeof a.prototype.render == "function" ? console.error(
          "No `render` method found on the %s instance: did you accidentally return an object from the constructor?",
          d
        ) : console.error(
          "No `render` method found on the %s instance: you may have forgotten to define `render`.",
          d
        )), !f.getInitialState || f.getInitialState.isReactClassApproved || f.state || console.error(
          "getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?",
          d
        ), f.getDefaultProps && !f.getDefaultProps.isReactClassApproved && console.error(
          "getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.",
          d
        ), f.contextType && console.error(
          "contextType was defined as an instance property on %s. Use a static property to define contextType instead.",
          d
        ), a.childContextTypes && !Gb.has(a) && (Gb.add(a), console.error(
          "%s uses the legacy childContextTypes API which was removed in React 19. Use React.createContext() instead. (https://react.dev/link/legacy-context)",
          d
        )), a.contextTypes && !jb.has(a) && (jb.add(a), console.error(
          "%s uses the legacy contextTypes API which was removed in React 19. Use React.createContext() with static contextType instead. (https://react.dev/link/legacy-context)",
          d
        )), typeof f.componentShouldUpdate == "function" && console.error(
          "%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.",
          d
        ), a.prototype && a.prototype.isPureReactComponent && typeof f.shouldComponentUpdate < "u" && console.error(
          "%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.",
          lt(a) || "A pure component"
        ), typeof f.componentDidUnmount == "function" && console.error(
          "%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?",
          d
        ), typeof f.componentDidReceiveProps == "function" && console.error(
          "%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().",
          d
        ), typeof f.componentWillRecieveProps == "function" && console.error(
          "%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?",
          d
        ), typeof f.UNSAFE_componentWillRecieveProps == "function" && console.error(
          "%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?",
          d
        ), h = f.props !== i, f.props !== void 0 && h && console.error(
          "When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.",
          d
        ), f.defaultProps && console.error(
          "Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.",
          d,
          d
        ), typeof f.getSnapshotBeforeUpdate != "function" || typeof f.componentDidUpdate == "function" || Bb.has(a) || (Bb.add(a), console.error(
          "%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.",
          lt(a)
        )), typeof f.getDerivedStateFromProps == "function" && console.error(
          "%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.",
          d
        ), typeof f.getDerivedStateFromError == "function" && console.error(
          "%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.",
          d
        ), typeof a.getSnapshotBeforeUpdate == "function" && console.error(
          "%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.",
          d
        ), (h = f.state) && (typeof h != "object" || ql(h)) && console.error("%s.state: must be set to an object or null", d), typeof f.getChildContext == "function" && typeof a.childContextTypes != "object" && console.error(
          "%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().",
          d
        ), f = t.stateNode, f.props = i, f.state = t.memoizedState, f.refs = {}, St(t), d = a.contextType, f.context = typeof d == "object" && d !== null ? Nt(d) : Rr, f.state === i && (d = lt(a) || "Component", wb.has(d) || (wb.add(d), console.error(
          "%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.",
          d
        ))), t.mode & gn && mc.recordLegacyContextWarning(
          t,
          f
        ), mc.recordUnsafeLifecycleWarnings(
          t,
          f
        ), f.state = t.memoizedState, d = a.getDerivedStateFromProps, typeof d == "function" && (jf(
          t,
          a,
          d,
          i
        ), f.state = t.memoizedState), typeof a.getDerivedStateFromProps == "function" || typeof f.getSnapshotBeforeUpdate == "function" || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (d = f.state, typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount(), d !== f.state && (console.error(
          "%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",
          pe(t) || "Component"
        ), K1.enqueueReplaceState(
          f,
          f.state,
          null
        )), ii(t, i, f, o), Cf(), f.state = t.memoizedState), typeof f.componentDidMount == "function" && (t.flags |= 4194308), (t.mode & hc) !== Ze && (t.flags |= 134217728), f = !0;
      } else if (e === null) {
        f = t.stateNode;
        var M = t.memoizedProps;
        h = di(a, M), f.props = h;
        var U = f.context;
        y = a.contextType, d = Rr, typeof y == "object" && y !== null && (d = Nt(y)), p = a.getDerivedStateFromProps, y = typeof p == "function" || typeof f.getSnapshotBeforeUpdate == "function", M = t.pendingProps !== M, y || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (M || U !== d) && si(
          t,
          f,
          i,
          d
        ), Cr = !1;
        var R = t.memoizedState;
        f.state = R, ii(t, i, f, o), Cf(), U = t.memoizedState, M || R !== U || Cr ? (typeof p == "function" && (jf(
          t,
          a,
          p,
          i
        ), U = t.memoizedState), (h = Cr || Pd(
          t,
          a,
          h,
          i,
          R,
          U,
          d
        )) ? (y || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount()), typeof f.componentDidMount == "function" && (t.flags |= 4194308), (t.mode & hc) !== Ze && (t.flags |= 134217728)) : (typeof f.componentDidMount == "function" && (t.flags |= 4194308), (t.mode & hc) !== Ze && (t.flags |= 134217728), t.memoizedProps = i, t.memoizedState = U), f.props = i, f.state = U, f.context = d, f = h) : (typeof f.componentDidMount == "function" && (t.flags |= 4194308), (t.mode & hc) !== Ze && (t.flags |= 134217728), f = !1);
      } else {
        f = t.stateNode, ni(e, t), d = t.memoizedProps, y = di(a, d), f.props = y, p = t.pendingProps, R = f.context, U = a.contextType, h = Rr, typeof U == "object" && U !== null && (h = Nt(U)), M = a.getDerivedStateFromProps, (U = typeof M == "function" || typeof f.getSnapshotBeforeUpdate == "function") || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (d !== p || R !== h) && si(
          t,
          f,
          i,
          h
        ), Cr = !1, R = t.memoizedState, f.state = R, ii(t, i, f, o), Cf();
        var L = t.memoizedState;
        d !== p || R !== L || Cr || e !== null && e.dependencies !== null && Of(e.dependencies) ? (typeof M == "function" && (jf(
          t,
          a,
          M,
          i
        ), L = t.memoizedState), (y = Cr || Pd(
          t,
          a,
          y,
          i,
          R,
          L,
          h
        ) || e !== null && e.dependencies !== null && Of(e.dependencies)) ? (U || typeof f.UNSAFE_componentWillUpdate != "function" && typeof f.componentWillUpdate != "function" || (typeof f.componentWillUpdate == "function" && f.componentWillUpdate(i, L, h), typeof f.UNSAFE_componentWillUpdate == "function" && f.UNSAFE_componentWillUpdate(
          i,
          L,
          h
        )), typeof f.componentDidUpdate == "function" && (t.flags |= 4), typeof f.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof f.componentDidUpdate != "function" || d === e.memoizedProps && R === e.memoizedState || (t.flags |= 4), typeof f.getSnapshotBeforeUpdate != "function" || d === e.memoizedProps && R === e.memoizedState || (t.flags |= 1024), t.memoizedProps = i, t.memoizedState = L), f.props = i, f.state = L, f.context = h, f = y) : (typeof f.componentDidUpdate != "function" || d === e.memoizedProps && R === e.memoizedState || (t.flags |= 4), typeof f.getSnapshotBeforeUpdate != "function" || d === e.memoizedProps && R === e.memoizedState || (t.flags |= 1024), f = !1);
      }
      if (h = f, Ts(e, t), d = (t.flags & 128) !== 0, h || d) {
        if (h = t.stateNode, Ku(t), d && typeof a.getDerivedStateFromError != "function")
          a = null, Xn = -1;
        else if (a = ob(h), t.mode & gn) {
          ie(!0);
          try {
            ob(h);
          } finally {
            ie(!1);
          }
        }
        t.flags |= 1, e !== null && d ? (t.child = hd(
          t,
          e.child,
          null,
          o
        ), t.child = hd(
          t,
          null,
          a,
          o
        )) : la(e, t, a, o), t.memoizedState = h.state, e = t.child;
      } else
        e = Uu(
          e,
          t,
          o
        );
      return o = t.stateNode, f && o.props !== i && (_m || console.error(
        "It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.",
        pe(t) || "a component"
      ), _m = !0), e;
    }
    function Ry(e, t, a, i) {
      return Oc(), t.flags |= 256, la(e, t, a, i), t.child;
    }
    function Gf(e, t) {
      t && t.childContextTypes && console.error(
        `childContextTypes cannot be defined on a function component.
  %s.childContextTypes = ...`,
        t.displayName || t.name || "Component"
      ), typeof t.getDerivedStateFromProps == "function" && (e = lt(t) || "Unknown", Jb[e] || (console.error(
        "%s: Function components do not support getDerivedStateFromProps.",
        e
      ), Jb[e] = !0)), typeof t.contextType == "object" && t.contextType !== null && (t = lt(t) || "Unknown", Qb[t] || (console.error(
        "%s: Function components do not support contextType.",
        t
      ), Qb[t] = !0));
    }
    function Lf(e) {
      return { baseLanes: e, cachePool: ay() };
    }
    function uh(e, t, a) {
      return e = e !== null ? e.childLanes & ~a : 0, t && (e |= ru), e;
    }
    function ih(e, t, a) {
      var i, o = t.pendingProps;
      te(t) && (t.flags |= 128);
      var f = !1, d = (t.flags & 128) !== 0;
      if ((i = d) || (i = e !== null && e.memoizedState === null ? !1 : ($l.current & lp) !== 0), i && (f = !0, t.flags &= -129), i = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
        if (Tt) {
          if (f ? Ka(t) : ci(t), (e = sl) ? (a = Xt(
            e,
            Hi
          ), a = a !== null && a.data !== Ed ? a : null, a !== null && (i = {
            dehydrated: a,
            treeContext: Gp(),
            retryLane: 536870912,
            hydrationErrors: null
          }, t.memoizedState = i, i = Wm(a), i.return = t, t.child = i, nn = t, sl = null)) : a = null, a === null)
            throw Ca(t, e), Wn(t);
          return a0(a) ? t.lanes = 32 : t.lanes = 536870912, null;
        }
        var h = o.children;
        if (o = o.fallback, f) {
          ci(t);
          var y = t.mode;
          return h = As(
            { mode: "hidden", children: h },
            y
          ), o = vo(
            o,
            y,
            a,
            null
          ), h.return = t, o.return = t, h.sibling = o, t.child = h, o = t.child, o.memoizedState = Lf(a), o.childLanes = uh(
            e,
            i,
            a
          ), t.memoizedState = F1, Yo(
            null,
            o
          );
        }
        return Ka(t), _y(
          t,
          h
        );
      }
      var p = e.memoizedState;
      if (p !== null) {
        var M = p.dehydrated;
        if (M !== null) {
          if (d)
            t.flags & 256 ? (Ka(t), t.flags &= -257, t = ch(
              e,
              t,
              a
            )) : t.memoizedState !== null ? (ci(t), t.child = e.child, t.flags |= 128, t = null) : (ci(t), h = o.fallback, y = t.mode, o = As(
              {
                mode: "visible",
                children: o.children
              },
              y
            ), h = vo(
              h,
              y,
              a,
              null
            ), h.flags |= 2, o.return = t, h.return = t, o.sibling = h, t.child = o, hd(
              t,
              e.child,
              null,
              a
            ), o = t.child, o.memoizedState = Lf(a), o.childLanes = uh(
              e,
              i,
              a
            ), t.memoizedState = F1, t = Yo(
              null,
              o
            ));
          else if (Ka(t), Xp(), (a & 536870912) !== 0 && Jf(t), a0(
            M
          )) {
            if (i = M.nextSibling && M.nextSibling.dataset, i) {
              h = i.dgst;
              var U = i.msg;
              y = i.stck;
              var R = i.cstck;
            }
            f = U, i = h, o = y, M = R, h = f, y = M, h = Error(h || "The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering."), h.stack = o || "", h.digest = i, i = y === void 0 ? null : y, o = {
              value: h,
              source: null,
              stack: i
            }, typeof i == "string" && M1.set(
              h,
              o
            ), Pr(o), t = ch(
              e,
              t,
              a
            );
          } else if (oa || _u(
            e,
            t,
            a,
            !1
          ), i = (a & e.childLanes) !== 0, oa || i) {
            if (i = tl, i !== null && (o = qa(
              i,
              a
            ), o !== 0 && o !== p.retryLane))
              throw p.retryLane = o, Ma(
                e,
                o
              ), Ke(
                i,
                e,
                o
              ), k1;
            Ls(
              M
            ) || Kf(), t = ch(
              e,
              t,
              a
            );
          } else
            Ls(
              M
            ) ? (t.flags |= 192, t.child = e.child, t = null) : (e = p.treeContext, sl = wn(
              M.nextSibling
            ), nn = t, Tt = !0, _r = null, to = !1, Xu = null, Hi = !1, e !== null && Lp(t, e), t = _y(
              t,
              o.children
            ), t.flags |= 4096);
          return t;
        }
      }
      return f ? (ci(t), h = o.fallback, y = t.mode, R = e.child, M = R.sibling, o = ti(
        R,
        {
          mode: "hidden",
          children: o.children
        }
      ), o.subtreeFlags = R.subtreeFlags & 65011712, M !== null ? h = ti(
        M,
        h
      ) : (h = vo(
        h,
        y,
        a,
        null
      ), h.flags |= 2), h.return = t, o.return = t, o.sibling = h, t.child = o, Yo(null, o), o = t.child, h = e.child.memoizedState, h === null ? h = Lf(a) : (y = h.cachePool, y !== null ? (R = ua._currentValue, y = y.parent !== R ? { parent: R, pool: R } : y) : y = ay(), h = {
        baseLanes: h.baseLanes | a,
        cachePool: y
      }), o.memoizedState = h, o.childLanes = uh(
        e,
        i,
        a
      ), t.memoizedState = F1, Yo(
        e.child,
        o
      )) : (p !== null && (a & 62914560) === a && (a & e.lanes) !== 0 && Jf(t), Ka(t), a = e.child, e = a.sibling, a = ti(a, {
        mode: "visible",
        children: o.children
      }), a.return = t, a.sibling = null, e !== null && (i = t.deletions, i === null ? (t.deletions = [e], t.flags |= 16) : i.push(e)), t.child = a, t.memoizedState = null, a);
    }
    function _y(e, t) {
      return t = As(
        { mode: "visible", children: t },
        e.mode
      ), t.return = e, e.child = t;
    }
    function As(e, t) {
      return e = H(22, e, null, t), e.lanes = 0, e;
    }
    function ch(e, t, a) {
      return hd(t, e.child, null, a), e = _y(
        t,
        t.pendingProps.children
      ), e.flags |= 2, t.memoizedState = null, e;
    }
    function Oy(e, t, a) {
      e.lanes |= t;
      var i = e.alternate;
      i !== null && (i.lanes |= t), qd(
        e.return,
        t,
        a
      );
    }
    function oh(e, t, a, i, o, f) {
      var d = e.memoizedState;
      d === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: i,
        tail: a,
        tailMode: o,
        treeForkCount: f
      } : (d.isBackwards = t, d.rendering = null, d.renderingStartTime = 0, d.last = i, d.tail = a, d.tailMode = o, d.treeForkCount = f);
    }
    function Dy(e, t, a) {
      var i = t.pendingProps, o = i.revealOrder, f = i.tail, d = i.children, h = $l.current;
      if ((i = (h & lp) !== 0) ? (h = h & Em | lp, t.flags |= 128) : h &= Em, Je($l, h, t), h = o ?? "null", o !== "forwards" && o !== "unstable_legacy-backwards" && o !== "together" && o !== "independent" && !Kb[h])
        if (Kb[h] = !0, o == null)
          console.error(
            'The default for the <SuspenseList revealOrder="..."> prop is changing. To be future compatible you must explictly specify either "independent" (the current default), "together", "forwards" or "legacy_unstable-backwards".'
          );
        else if (o === "backwards")
          console.error(
            'The rendering order of <SuspenseList revealOrder="backwards"> is changing. To be future compatible you must specify revealOrder="legacy_unstable-backwards" instead.'
          );
        else if (typeof o == "string")
          switch (o.toLowerCase()) {
            case "together":
            case "forwards":
            case "backwards":
            case "independent":
              console.error(
                '"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.',
                o,
                o.toLowerCase()
              );
              break;
            case "forward":
            case "backward":
              console.error(
                '"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.',
                o,
                o.toLowerCase()
              );
              break;
            default:
              console.error(
                '"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "independent", "together", "forwards" or "backwards"?',
                o
              );
          }
        else
          console.error(
            '%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "independent", "together", "forwards" or "backwards"?',
            o
          );
      h = f ?? "null", Sv[h] || (f == null ? (o === "forwards" || o === "backwards" || o === "unstable_legacy-backwards") && (Sv[h] = !0, console.error(
        'The default for the <SuspenseList tail="..."> prop is changing. To be future compatible you must explictly specify either "visible" (the current default), "collapsed" or "hidden".'
      )) : f !== "visible" && f !== "collapsed" && f !== "hidden" ? (Sv[h] = !0, console.error(
        '"%s" is not a supported value for tail on <SuspenseList />. Did you mean "visible", "collapsed" or "hidden"?',
        f
      )) : o !== "forwards" && o !== "backwards" && o !== "unstable_legacy-backwards" && (Sv[h] = !0, console.error(
        '<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?',
        f
      )));
      e: if ((o === "forwards" || o === "backwards" || o === "unstable_legacy-backwards") && d !== void 0 && d !== null && d !== !1)
        if (ql(d)) {
          for (h = 0; h < d.length; h++)
            if (!Wt(
              d[h],
              h
            ))
              break e;
        } else if (h = Ue(d), typeof h == "function") {
          if (h = h.call(d))
            for (var y = h.next(), p = 0; !y.done; y = h.next()) {
              if (!Wt(y.value, p)) break e;
              p++;
            }
        } else
          console.error(
            'A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?',
            o
          );
      if (la(e, t, d, a), Tt ? (_c(), d = L0) : d = 0, !i && e !== null && (e.flags & 128) !== 0)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13)
            e.memoizedState !== null && Oy(e, a, t);
          else if (e.tag === 19)
            Oy(e, a, t);
          else if (e.child !== null) {
            e.child.return = e, e = e.child;
            continue;
          }
          if (e === t) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t)
              break e;
            e = e.return;
          }
          e.sibling.return = e.return, e = e.sibling;
        }
      switch (o) {
        case "forwards":
          for (a = t.child, o = null; a !== null; )
            e = a.alternate, e !== null && _o(e) === null && (o = a), a = a.sibling;
          a = o, a === null ? (o = t.child, t.child = null) : (o = a.sibling, a.sibling = null), oh(
            t,
            !1,
            o,
            a,
            f,
            d
          );
          break;
        case "backwards":
        case "unstable_legacy-backwards":
          for (a = null, o = t.child, t.child = null; o !== null; ) {
            if (e = o.alternate, e !== null && _o(e) === null) {
              t.child = o;
              break;
            }
            e = o.sibling, o.sibling = a, a = o, o = e;
          }
          oh(
            t,
            !0,
            a,
            null,
            f,
            d
          );
          break;
        case "together":
          oh(
            t,
            !1,
            null,
            null,
            void 0,
            d
          );
          break;
        default:
          t.memoizedState = null;
      }
      return t.child;
    }
    function Uu(e, t, a) {
      if (e !== null && (t.dependencies = e.dependencies), Xn = -1, xr |= t.lanes, (a & t.childLanes) === 0)
        if (e !== null) {
          if (_u(
            e,
            t,
            a,
            !1
          ), (a & t.childLanes) === 0)
            return null;
        } else return null;
      if (e !== null && t.child !== e.child)
        throw Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        for (e = t.child, a = ti(e, e.pendingProps), t.child = a, a.return = t; e.sibling !== null; )
          e = e.sibling, a = a.sibling = ti(e, e.pendingProps), a.return = t;
        a.sibling = null;
      }
      return t.child;
    }
    function fh(e, t) {
      return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && Of(e)));
    }
    function Wp(e, t, a) {
      switch (t.tag) {
        case 3:
          ft(
            t,
            t.stateNode.containerInfo
          ), In(
            t,
            ua,
            e.memoizedState.cache
          ), Oc();
          break;
        case 27:
        case 5:
          ue(t);
          break;
        case 4:
          ft(
            t,
            t.stateNode.containerInfo
          );
          break;
        case 10:
          In(
            t,
            t.type,
            t.memoizedProps.value
          );
          break;
        case 12:
          (a & t.childLanes) !== 0 && (t.flags |= 4), t.flags |= 2048;
          var i = t.stateNode;
          i.effectDuration = -0, i.passiveEffectDuration = -0;
          break;
        case 31:
          if (t.memoizedState !== null)
            return t.flags |= 128, Mu(t), null;
          break;
        case 13:
          if (i = t.memoizedState, i !== null)
            return i.dehydrated !== null ? (Ka(t), t.flags |= 128, null) : (a & t.child.childLanes) !== 0 ? ih(
              e,
              t,
              a
            ) : (Ka(t), e = Uu(
              e,
              t,
              a
            ), e !== null ? e.sibling : null);
          Ka(t);
          break;
        case 19:
          var o = (e.flags & 128) !== 0;
          if (i = (a & t.childLanes) !== 0, i || (_u(
            e,
            t,
            a,
            !1
          ), i = (a & t.childLanes) !== 0), o) {
            if (i)
              return Dy(
                e,
                t,
                a
              );
            t.flags |= 128;
          }
          if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), Je(
            $l,
            $l.current,
            t
          ), i) break;
          return null;
        case 22:
          return t.lanes = 0, Sy(
            e,
            t,
            a,
            t.pendingProps
          );
        case 24:
          In(
            t,
            ua,
            e.memoizedState.cache
          );
      }
      return Uu(e, t, a);
    }
    function Rs(e, t, a) {
      if (t._debugNeedsRemount && e !== null) {
        a = go(
          t.type,
          t.key,
          t.pendingProps,
          t._debugOwner || null,
          t.mode,
          t.lanes
        ), a._debugStack = t._debugStack, a._debugTask = t._debugTask;
        var i = t.return;
        if (i === null) throw Error("Cannot swap the root fiber.");
        if (e.alternate = null, t.alternate = null, a.index = t.index, a.sibling = t.sibling, a.return = t.return, a.ref = t.ref, a._debugInfo = t._debugInfo, t === i.child)
          i.child = a;
        else {
          var o = i.child;
          if (o === null)
            throw Error("Expected parent to have a child.");
          for (; o.sibling !== t; )
            if (o = o.sibling, o === null)
              throw Error("Expected to find the previous sibling.");
          o.sibling = a;
        }
        return t = i.deletions, t === null ? (i.deletions = [e], i.flags |= 16) : t.push(e), a.flags |= 2, a;
      }
      if (e !== null)
        if (e.memoizedProps !== t.pendingProps || t.type !== e.type)
          oa = !0;
        else {
          if (!fh(e, a) && (t.flags & 128) === 0)
            return oa = !1, Wp(
              e,
              t,
              a
            );
          oa = (e.flags & 131072) !== 0;
        }
      else
        oa = !1, (i = Tt) && (_c(), i = (t.flags & 1048576) !== 0), i && (i = t.index, _c(), Im(t, L0, i));
      switch (t.lanes = 0, t.tag) {
        case 16:
          e: if (i = t.pendingProps, e = zn(t.elementType), t.type = e, typeof e == "function")
            km(e) ? (i = di(
              e,
              i
            ), t.tag = 1, t.type = e = Ac(e), t = wo(
              null,
              t,
              e,
              i,
              a
            )) : (t.tag = 0, Gf(t, e), t.type = e = Ac(e), t = Ty(
              null,
              t,
              e,
              i,
              a
            ));
          else {
            if (e != null) {
              if (o = e.$$typeof, o === rr) {
                t.tag = 11, t.type = e = Nd(e), t = kp(
                  null,
                  t,
                  e,
                  i,
                  a
                );
                break e;
              } else if (o === Ws) {
                t.tag = 14, t = gy(
                  null,
                  t,
                  e,
                  i,
                  a
                );
                break e;
              }
            }
            throw t = "", e !== null && typeof e == "object" && e.$$typeof === Ha && (t = " Did you wrap a component in React.lazy() more than once?"), a = lt(e) || e, Error(
              "Element type is invalid. Received a promise that resolves to: " + a + ". Lazy element type must resolve to a class or function." + t
            );
          }
          return t;
        case 0:
          return Ty(
            e,
            t,
            t.type,
            t.pendingProps,
            a
          );
        case 1:
          return i = t.type, o = di(
            i,
            t.pendingProps
          ), wo(
            e,
            t,
            i,
            o,
            a
          );
        case 3:
          e: {
            if (ft(
              t,
              t.stateNode.containerInfo
            ), e === null)
              throw Error(
                "Should have a current fiber. This is a bug in React."
              );
            i = t.pendingProps;
            var f = t.memoizedState;
            o = f.element, ni(e, t), ii(t, i, null, a);
            var d = t.memoizedState;
            if (i = d.cache, In(t, ua, i), i !== f.cache && Ki(
              t,
              [ua],
              a,
              !0
            ), Cf(), i = d.element, f.isDehydrated)
              if (f = {
                element: i,
                isDehydrated: !1,
                cache: d.cache
              }, t.updateQueue.baseState = f, t.memoizedState = f, t.flags & 256) {
                t = Ry(
                  e,
                  t,
                  i,
                  a
                );
                break e;
              } else if (i !== o) {
                o = Va(
                  Error(
                    "This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."
                  ),
                  t
                ), Pr(o), t = Ry(
                  e,
                  t,
                  i,
                  a
                );
                break e;
              } else
                for (e = t.stateNode.containerInfo, e.nodeType === 9 ? e = e.body : e = e.nodeName === "HTML" ? e.ownerDocument.body : e, sl = wn(e.firstChild), nn = t, Tt = !0, _r = null, to = !1, Xu = null, Hi = !0, a = Tb(
                  t,
                  null,
                  i,
                  a
                ), t.child = a; a; )
                  a.flags = a.flags & -3 | 4096, a = a.sibling;
            else {
              if (Oc(), i === o) {
                t = Uu(
                  e,
                  t,
                  a
                );
                break e;
              }
              la(
                e,
                t,
                i,
                a
              );
            }
            t = t.child;
          }
          return t;
        case 26:
          return Ts(e, t), e === null ? (a = c0(
            t.type,
            null,
            t.pendingProps,
            null
          )) ? t.memoizedState = a : Tt || (a = t.type, e = t.pendingProps, i = Be(
            qn.current
          ), i = js(
            i
          ).createElement(a), i[fl] = t, i[an] = e, ol(i, a, e), Ee(i), t.stateNode = i) : t.memoizedState = c0(
            t.type,
            e.memoizedProps,
            t.pendingProps,
            e.memoizedState
          ), null;
        case 27:
          return ue(t), e === null && Tt && (i = Be(qn.current), o = v(), i = t.stateNode = fc(
            t.type,
            t.pendingProps,
            i,
            o,
            !1
          ), to || (o = mn(
            i,
            t.type,
            t.pendingProps,
            o
          ), o !== null && (So(t, 0).serverProps = o)), nn = t, Hi = !0, o = sl, $c(t.type) ? (SS = o, sl = wn(
            i.firstChild
          )) : sl = o), la(
            e,
            t,
            t.pendingProps.children,
            a
          ), Ts(e, t), e === null && (t.flags |= 4194304), t.child;
        case 5:
          return e === null && Tt && (f = v(), i = Vi(
            t.type,
            f.ancestorInfo
          ), o = sl, (d = !o) || (d = Dg(
            o,
            t.type,
            t.pendingProps,
            Hi
          ), d !== null ? (t.stateNode = d, to || (f = mn(
            d,
            t.type,
            t.pendingProps,
            f
          ), f !== null && (So(t, 0).serverProps = f)), nn = t, sl = wn(
            d.firstChild
          ), Hi = !1, f = !0) : f = !1, d = !f), d && (i && Ca(t, o), Wn(t))), ue(t), o = t.type, f = t.pendingProps, d = e !== null ? e.memoizedProps : null, i = f.children, tr(o, f) ? i = null : d !== null && tr(o, d) && (t.flags |= 32), t.memoizedState !== null && (o = oy(
            e,
            t,
            os,
            null,
            null,
            a
          ), bp._currentValue = o), Ts(e, t), la(
            e,
            t,
            i,
            a
          ), t.child;
        case 6:
          return e === null && Tt && (a = t.pendingProps, e = v(), i = e.ancestorInfo.current, a = i != null ? Qi(
            a,
            i.tag,
            e.ancestorInfo.implicitRootScope
          ) : !0, e = sl, (i = !e) || (i = zg(
            e,
            t.pendingProps,
            Hi
          ), i !== null ? (t.stateNode = i, nn = t, sl = null, i = !0) : i = !1, i = !i), i && (a && Ca(t, e), Wn(t))), null;
        case 13:
          return ih(e, t, a);
        case 4:
          return ft(
            t,
            t.stateNode.containerInfo
          ), i = t.pendingProps, e === null ? t.child = hd(
            t,
            null,
            i,
            a
          ) : la(
            e,
            t,
            i,
            a
          ), t.child;
        case 11:
          return kp(
            e,
            t,
            t.type,
            t.pendingProps,
            a
          );
        case 7:
          return la(
            e,
            t,
            t.pendingProps,
            a
          ), t.child;
        case 8:
          return la(
            e,
            t,
            t.pendingProps.children,
            a
          ), t.child;
        case 12:
          return t.flags |= 4, t.flags |= 2048, i = t.stateNode, i.effectDuration = -0, i.passiveEffectDuration = -0, la(
            e,
            t,
            t.pendingProps.children,
            a
          ), t.child;
        case 10:
          return i = t.type, o = t.pendingProps, f = o.value, "value" in o || $b || ($b = !0, console.error(
            "The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"
          )), In(t, i, f), la(
            e,
            t,
            o.children,
            a
          ), t.child;
        case 9:
          return o = t.type._context, i = t.pendingProps.children, typeof i != "function" && console.error(
            "A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."
          ), zc(t), o = Nt(o), i = w1(
            i,
            o,
            void 0
          ), t.flags |= 1, la(
            e,
            t,
            i,
            a
          ), t.child;
        case 14:
          return gy(
            e,
            t,
            t.type,
            t.pendingProps,
            a
          );
        case 15:
          return vy(
            e,
            t,
            t.type,
            t.pendingProps,
            a
          );
        case 19:
          return Dy(
            e,
            t,
            a
          );
        case 31:
          return Fp(e, t, a);
        case 22:
          return Sy(
            e,
            t,
            a,
            t.pendingProps
          );
        case 24:
          return zc(t), i = Nt(ua), e === null ? (o = Fi(), o === null && (o = tl, f = jd(), o.pooledCache = f, Eo(f), f !== null && (o.pooledCacheLanes |= a), o = f), t.memoizedState = {
            parent: i,
            cache: o
          }, St(t), In(t, ua, o)) : ((e.lanes & a) !== 0 && (ni(e, t), ii(t, null, null, a), Cf()), o = e.memoizedState, f = t.memoizedState, o.parent !== i ? (o = {
            parent: i,
            cache: i
          }, t.memoizedState = o, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = o), In(t, ua, i)) : (i = f.cache, In(t, ua, i), i !== o.cache && Ki(
            t,
            [ua],
            a,
            !0
          ))), la(
            e,
            t,
            t.pendingProps.children,
            a
          ), t.child;
        case 29:
          throw t.pendingProps;
      }
      throw Error(
        "Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue."
      );
    }
    function hi(e) {
      e.flags |= 4;
    }
    function rh(e, t, a, i, o) {
      if ((t = (e.mode & eT) !== Ze) && (t = !1), t) {
        if (e.flags |= 16777216, (o & 335544128) === o)
          if (e.stateNode.complete) e.flags |= 8192;
          else if (Zy()) e.flags |= 8192;
          else
            throw dd = hv, j1;
      } else e.flags &= -16777217;
    }
    function Ip(e, t) {
      if (t.type !== "stylesheet" || (t.state.loading & wi) !== Rd)
        e.flags &= -16777217;
      else if (e.flags |= 16777216, !vt(t))
        if (Zy()) e.flags |= 8192;
        else
          throw dd = hv, j1;
    }
    function Xf(e, t) {
      t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? Gl() : 536870912, e.lanes |= t, vd |= t);
    }
    function Vf(e, t) {
      if (!Tt)
        switch (e.tailMode) {
          case "hidden":
            t = e.tail;
            for (var a = null; t !== null; )
              t.alternate !== null && (a = t), t = t.sibling;
            a === null ? e.tail = null : a.sibling = null;
            break;
          case "collapsed":
            a = e.tail;
            for (var i = null; a !== null; )
              a.alternate !== null && (i = a), a = a.sibling;
            i === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : i.sibling = null;
        }
    }
    function Zt(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, a = 0, i = 0;
      if (t)
        if ((e.mode & dt) !== Ze) {
          for (var o = e.selfBaseDuration, f = e.child; f !== null; )
            a |= f.lanes | f.childLanes, i |= f.subtreeFlags & 65011712, i |= f.flags & 65011712, o += f.treeBaseDuration, f = f.sibling;
          e.treeBaseDuration = o;
        } else
          for (o = e.child; o !== null; )
            a |= o.lanes | o.childLanes, i |= o.subtreeFlags & 65011712, i |= o.flags & 65011712, o.return = e, o = o.sibling;
      else if ((e.mode & dt) !== Ze) {
        o = e.actualDuration, f = e.selfBaseDuration;
        for (var d = e.child; d !== null; )
          a |= d.lanes | d.childLanes, i |= d.subtreeFlags, i |= d.flags, o += d.actualDuration, f += d.treeBaseDuration, d = d.sibling;
        e.actualDuration = o, e.treeBaseDuration = f;
      } else
        for (o = e.child; o !== null; )
          a |= o.lanes | o.childLanes, i |= o.subtreeFlags, i |= o.flags, o.return = e, o = o.sibling;
      return e.subtreeFlags |= i, e.childLanes = a, t;
    }
    function zy(e, t, a) {
      var i = t.pendingProps;
      switch (wd(t), t.tag) {
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
          return Zt(t), null;
        case 1:
          return Zt(t), null;
        case 3:
          return a = t.stateNode, i = null, e !== null && (i = e.memoizedState.cache), t.memoizedState.cache !== i && (t.flags |= 2048), Ru(ua, t), D(t), a.pendingContext && (a.context = a.pendingContext, a.pendingContext = null), (e === null || e.child === null) && (bo(t) ? (Dc(), hi(t)) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Ir())), Zt(t), null;
        case 26:
          var o = t.type, f = t.memoizedState;
          return e === null ? (hi(t), f !== null ? (Zt(t), Ip(
            t,
            f
          )) : (Zt(t), rh(
            t,
            o,
            null,
            i,
            a
          ))) : f ? f !== e.memoizedState ? (hi(t), Zt(t), Ip(
            t,
            f
          )) : (Zt(t), t.flags &= -16777217) : (e = e.memoizedProps, e !== i && hi(t), Zt(t), rh(
            t,
            o,
            e,
            i,
            a
          )), null;
        case 27:
          if (me(t), a = Be(qn.current), o = t.type, e !== null && t.stateNode != null)
            e.memoizedProps !== i && hi(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw Error(
                  "We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue."
                );
              return Zt(t), null;
            }
            e = v(), bo(t) ? Pm(t) : (e = fc(
              o,
              i,
              a,
              e,
              !0
            ), t.stateNode = e, hi(t));
          }
          return Zt(t), null;
        case 5:
          if (me(t), o = t.type, e !== null && t.stateNode != null)
            e.memoizedProps !== i && hi(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw Error(
                  "We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue."
                );
              return Zt(t), null;
            }
            var d = v();
            if (bo(t))
              Pm(t);
            else {
              switch (f = Be(qn.current), Vi(o, d.ancestorInfo), d = d.context, f = js(f), d) {
                case xm:
                  f = f.createElementNS(
                    ct,
                    o
                  );
                  break;
                case jv:
                  f = f.createElementNS(
                    et,
                    o
                  );
                  break;
                default:
                  switch (o) {
                    case "svg":
                      f = f.createElementNS(
                        ct,
                        o
                      );
                      break;
                    case "math":
                      f = f.createElementNS(
                        et,
                        o
                      );
                      break;
                    case "script":
                      f = f.createElement("div"), f.innerHTML = "<script><\/script>", f = f.removeChild(
                        f.firstChild
                      );
                      break;
                    case "select":
                      f = typeof i.is == "string" ? f.createElement("select", {
                        is: i.is
                      }) : f.createElement("select"), i.multiple ? f.multiple = !0 : i.size && (f.size = i.size);
                      break;
                    default:
                      f = typeof i.is == "string" ? f.createElement(o, {
                        is: i.is
                      }) : f.createElement(o), o.indexOf("-") === -1 && (o !== o.toLowerCase() && console.error(
                        "<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.",
                        o
                      ), Object.prototype.toString.call(f) !== "[object HTMLUnknownElement]" || jn.call(v2, o) || (v2[o] = !0, console.error(
                        "The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.",
                        o
                      )));
                  }
              }
              f[fl] = t, f[an] = i;
              e: for (d = t.child; d !== null; ) {
                if (d.tag === 5 || d.tag === 6)
                  f.appendChild(d.stateNode);
                else if (d.tag !== 4 && d.tag !== 27 && d.child !== null) {
                  d.child.return = d, d = d.child;
                  continue;
                }
                if (d === t) break e;
                for (; d.sibling === null; ) {
                  if (d.return === null || d.return === t)
                    break e;
                  d = d.return;
                }
                d.sibling.return = d.return, d = d.sibling;
              }
              t.stateNode = f;
              e: switch (ol(f, o, i), o) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  i = !!i.autoFocus;
                  break e;
                case "img":
                  i = !0;
                  break e;
                default:
                  i = !1;
              }
              i && hi(t);
            }
          }
          return Zt(t), rh(
            t,
            t.type,
            e === null ? null : e.memoizedProps,
            t.pendingProps,
            a
          ), null;
        case 6:
          if (e && t.stateNode != null)
            e.memoizedProps !== i && hi(t);
          else {
            if (typeof i != "string" && t.stateNode === null)
              throw Error(
                "We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue."
              );
            if (e = Be(qn.current), a = v(), bo(t)) {
              if (e = t.stateNode, a = t.memoizedProps, o = !to, i = null, f = nn, f !== null)
                switch (f.tag) {
                  case 3:
                    o && (o = Ug(
                      e,
                      a,
                      i
                    ), o !== null && (So(t, 0).serverProps = o));
                    break;
                  case 27:
                  case 5:
                    i = f.memoizedProps, o && (o = Ug(
                      e,
                      a,
                      i
                    ), o !== null && (So(
                      t,
                      0
                    ).serverProps = o));
                }
              e[fl] = t, e = !!(e.nodeValue === a || i !== null && i.suppressHydrationWarning === !0 || t0(e.nodeValue, a)), e || Wn(t, !0);
            } else
              o = a.ancestorInfo.current, o != null && Qi(
                i,
                o.tag,
                a.ancestorInfo.implicitRootScope
              ), e = js(e).createTextNode(
                i
              ), e[fl] = t, t.stateNode = e;
          }
          return Zt(t), null;
        case 31:
          if (a = t.memoizedState, e === null || e.memoizedState !== null) {
            if (i = bo(t), a !== null) {
              if (e === null) {
                if (!i)
                  throw Error(
                    "A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React."
                  );
                if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e)
                  throw Error(
                    "Expected to have a hydrated activity instance. This error is likely caused by a bug in React. Please file an issue."
                  );
                e[fl] = t, Zt(t), (t.mode & dt) !== Ze && a !== null && (e = t.child, e !== null && (t.treeBaseDuration -= e.treeBaseDuration));
              } else
                Dc(), Oc(), (t.flags & 128) === 0 && (a = t.memoizedState = null), t.flags |= 4, Zt(t), (t.mode & dt) !== Ze && a !== null && (e = t.child, e !== null && (t.treeBaseDuration -= e.treeBaseDuration));
              e = !1;
            } else
              a = Ir(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = a), e = !0;
            if (!e)
              return t.flags & 256 ? (ea(t), t) : (ea(t), null);
            if ((t.flags & 128) !== 0)
              throw Error(
                "Client rendering an Activity suspended it again. This is a bug in React."
              );
          }
          return Zt(t), null;
        case 13:
          if (i = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            if (o = i, f = bo(t), o !== null && o.dehydrated !== null) {
              if (e === null) {
                if (!f)
                  throw Error(
                    "A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React."
                  );
                if (f = t.memoizedState, f = f !== null ? f.dehydrated : null, !f)
                  throw Error(
                    "Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue."
                  );
                f[fl] = t, Zt(t), (t.mode & dt) !== Ze && o !== null && (o = t.child, o !== null && (t.treeBaseDuration -= o.treeBaseDuration));
              } else
                Dc(), Oc(), (t.flags & 128) === 0 && (o = t.memoizedState = null), t.flags |= 4, Zt(t), (t.mode & dt) !== Ze && o !== null && (o = t.child, o !== null && (t.treeBaseDuration -= o.treeBaseDuration));
              o = !1;
            } else
              o = Ir(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = o), o = !0;
            if (!o)
              return t.flags & 256 ? (ea(t), t) : (ea(t), null);
          }
          return ea(t), (t.flags & 128) !== 0 ? (t.lanes = a, (t.mode & dt) !== Ze && Ao(t), t) : (a = i !== null, e = e !== null && e.memoizedState !== null, a && (i = t.child, o = null, i.alternate !== null && i.alternate.memoizedState !== null && i.alternate.memoizedState.cachePool !== null && (o = i.alternate.memoizedState.cachePool.pool), f = null, i.memoizedState !== null && i.memoizedState.cachePool !== null && (f = i.memoizedState.cachePool.pool), f !== o && (i.flags |= 2048)), a !== e && a && (t.child.flags |= 8192), Xf(t, t.updateQueue), Zt(t), (t.mode & dt) !== Ze && a && (e = t.child, e !== null && (t.treeBaseDuration -= e.treeBaseDuration)), null);
        case 4:
          return D(t), e === null && Jc(
            t.stateNode.containerInfo
          ), Zt(t), null;
        case 10:
          return Ru(t.type, t), Zt(t), null;
        case 19:
          if (Se($l, t), i = t.memoizedState, i === null) return Zt(t), null;
          if (o = (t.flags & 128) !== 0, f = i.rendering, f === null)
            if (o) Vf(i, !1);
            else {
              if (Rl !== df || e !== null && (e.flags & 128) !== 0)
                for (e = t.child; e !== null; ) {
                  if (f = _o(e), f !== null) {
                    for (t.flags |= 128, Vf(i, !1), e = f.updateQueue, t.updateQueue = e, Xf(t, e), t.subtreeFlags = 0, e = a, a = t.child; a !== null; )
                      Fm(a, e), a = a.sibling;
                    return Je(
                      $l,
                      $l.current & Em | lp,
                      t
                    ), Tt && Au(t, i.treeForkCount), t.child;
                  }
                  e = e.sibling;
                }
              i.tail !== null && na() > Ov && (t.flags |= 128, o = !0, Vf(i, !1), t.lanes = 4194304);
            }
          else {
            if (!o)
              if (e = _o(f), e !== null) {
                if (t.flags |= 128, o = !0, e = e.updateQueue, t.updateQueue = e, Xf(t, e), Vf(i, !0), i.tail === null && i.tailMode === "hidden" && !f.alternate && !Tt)
                  return Zt(t), null;
              } else
                2 * na() - i.renderingStartTime > Ov && a !== 536870912 && (t.flags |= 128, o = !0, Vf(i, !1), t.lanes = 4194304);
            i.isBackwards ? (f.sibling = t.child, t.child = f) : (e = i.last, e !== null ? e.sibling = f : t.child = f, i.last = f);
          }
          return i.tail !== null ? (e = i.tail, i.rendering = e, i.tail = e.sibling, i.renderingStartTime = na(), e.sibling = null, a = $l.current, a = o ? a & Em | lp : a & Em, Je($l, a, t), Tt && Au(t, i.treeForkCount), e) : (Zt(t), null);
        case 22:
        case 23:
          return ea(t), zu(t), i = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== i && (t.flags |= 8192) : i && (t.flags |= 8192), i ? (a & 536870912) !== 0 && (t.flags & 128) === 0 && (Zt(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Zt(t), a = t.updateQueue, a !== null && Xf(t, a.retryQueue), a = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), i = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (i = t.memoizedState.cachePool.pool), i !== a && (t.flags |= 2048), e !== null && Se(rd, t), null;
        case 24:
          return a = null, e !== null && (a = e.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), Ru(ua, t), Zt(t), null;
        case 25:
          return null;
        case 30:
          return null;
      }
      throw Error(
        "Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue."
      );
    }
    function Pp(e, t) {
      switch (wd(t), t.tag) {
        case 1:
          return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, (t.mode & dt) !== Ze && Ao(t), t) : null;
        case 3:
          return Ru(ua, t), D(t), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
        case 26:
        case 27:
        case 5:
          return me(t), null;
        case 31:
          if (t.memoizedState !== null) {
            if (ea(t), t.alternate === null)
              throw Error(
                "Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue."
              );
            Oc();
          }
          return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, (t.mode & dt) !== Ze && Ao(t), t) : null;
        case 13:
          if (ea(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
            if (t.alternate === null)
              throw Error(
                "Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue."
              );
            Oc();
          }
          return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, (t.mode & dt) !== Ze && Ao(t), t) : null;
        case 19:
          return Se($l, t), null;
        case 4:
          return D(t), null;
        case 10:
          return Ru(t.type, t), null;
        case 22:
        case 23:
          return ea(t), zu(t), e !== null && Se(rd, t), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, (t.mode & dt) !== Ze && Ao(t), t) : null;
        case 24:
          return Ru(ua, t), null;
        case 25:
          return null;
        default:
          return null;
      }
    }
    function My(e, t) {
      switch (wd(t), t.tag) {
        case 3:
          Ru(ua, t), D(t);
          break;
        case 26:
        case 27:
        case 5:
          me(t);
          break;
        case 4:
          D(t);
          break;
        case 31:
          t.memoizedState !== null && ea(t);
          break;
        case 13:
          ea(t);
          break;
        case 19:
          Se($l, t);
          break;
        case 10:
          Ru(t.type, t);
          break;
        case 22:
        case 23:
          ea(t), zu(t), e !== null && Se(rd, t);
          break;
        case 24:
          Ru(ua, t);
      }
    }
    function mi(e) {
      return (e.mode & dt) !== Ze;
    }
    function eg(e, t) {
      mi(e) ? (bl(), nc(t, e), Za()) : nc(t, e);
    }
    function sh(e, t, a) {
      mi(e) ? (bl(), Gc(
        a,
        e,
        t
      ), Za()) : Gc(
        a,
        e,
        t
      );
    }
    function nc(e, t) {
      try {
        var a = t.updateQueue, i = a !== null ? a.lastEffect : null;
        if (i !== null) {
          var o = i.next;
          a = o;
          do {
            if ((a.tag & e) === e && (i = void 0, (e & Vn) !== yv && (Cm = !0), i = fe(
              t,
              iT,
              a
            ), (e & Vn) !== yv && (Cm = !1), i !== void 0 && typeof i != "function")) {
              var f = void 0;
              f = (a.tag & Qu) !== 0 ? "useLayoutEffect" : (a.tag & Vn) !== 0 ? "useInsertionEffect" : "useEffect";
              var d = void 0;
              d = i === null ? " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof i.then == "function" ? `

It looks like you wrote ` + f + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + f + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://react.dev/link/hooks-data-fetching` : " You returned: " + i, fe(
                t,
                function(h, y) {
                  console.error(
                    "%s must not return anything besides a function, which is used for clean-up.%s",
                    h,
                    y
                  );
                },
                f,
                d
              );
            }
            a = a.next;
          } while (a !== o);
        }
      } catch (h) {
        it(t, t.return, h);
      }
    }
    function Gc(e, t, a) {
      try {
        var i = t.updateQueue, o = i !== null ? i.lastEffect : null;
        if (o !== null) {
          var f = o.next;
          i = f;
          do {
            if ((i.tag & e) === e) {
              var d = i.inst, h = d.destroy;
              h !== void 0 && (d.destroy = void 0, (e & Vn) !== yv && (Cm = !0), o = t, fe(
                o,
                cT,
                o,
                a,
                h
              ), (e & Vn) !== yv && (Cm = !1));
            }
            i = i.next;
          } while (i !== f);
        }
      } catch (y) {
        it(t, t.return, y);
      }
    }
    function _s(e, t) {
      mi(e) ? (bl(), nc(t, e), Za()) : nc(t, e);
    }
    function dh(e, t, a) {
      mi(e) ? (bl(), Gc(
        a,
        e,
        t
      ), Za()) : Gc(
        a,
        e,
        t
      );
    }
    function Cy(e) {
      var t = e.updateQueue;
      if (t !== null) {
        var a = e.stateNode;
        e.type.defaultProps || "ref" in e.memoizedProps || _m || (a.props !== e.memoizedProps && console.error(
          "Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
          pe(e) || "instance"
        ), a.state !== e.memoizedState && console.error(
          "Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
          pe(e) || "instance"
        ));
        try {
          fe(
            e,
            Uf,
            t,
            a
          );
        } catch (i) {
          it(e, e.return, i);
        }
      }
    }
    function Os(e, t, a) {
      return e.getSnapshotBeforeUpdate(t, a);
    }
    function tg(e, t) {
      var a = t.memoizedProps, i = t.memoizedState;
      t = e.stateNode, e.type.defaultProps || "ref" in e.memoizedProps || _m || (t.props !== e.memoizedProps && console.error(
        "Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
        pe(e) || "instance"
      ), t.state !== e.memoizedState && console.error(
        "Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
        pe(e) || "instance"
      ));
      try {
        var o = di(
          e.type,
          a
        ), f = fe(
          e,
          Os,
          t,
          o,
          i
        );
        a = kb, f !== void 0 || a.has(e.type) || (a.add(e.type), fe(e, function() {
          console.error(
            "%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.",
            pe(e)
          );
        })), t.__reactInternalSnapshotBeforeUpdate = f;
      } catch (d) {
        it(e, e.return, d);
      }
    }
    function hh(e, t, a) {
      a.props = di(
        e.type,
        e.memoizedProps
      ), a.state = e.memoizedState, mi(e) ? (bl(), fe(
        e,
        mb,
        e,
        t,
        a
      ), Za()) : fe(
        e,
        mb,
        e,
        t,
        a
      );
    }
    function lg(e) {
      var t = e.ref;
      if (t !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var a = e.stateNode;
            break;
          case 30:
            a = e.stateNode;
            break;
          default:
            a = e.stateNode;
        }
        if (typeof t == "function")
          if (mi(e))
            try {
              bl(), e.refCleanup = t(a);
            } finally {
              Za();
            }
          else e.refCleanup = t(a);
        else
          typeof t == "string" ? console.error("String refs are no longer supported.") : t.hasOwnProperty("current") || console.error(
            "Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().",
            pe(e)
          ), t.current = a;
      }
    }
    function qo(e, t) {
      try {
        fe(e, lg, e);
      } catch (a) {
        it(e, t, a);
      }
    }
    function au(e, t) {
      var a = e.ref, i = e.refCleanup;
      if (a !== null)
        if (typeof i == "function")
          try {
            if (mi(e))
              try {
                bl(), fe(e, i);
              } finally {
                Za(e);
              }
            else fe(e, i);
          } catch (o) {
            it(e, t, o);
          } finally {
            e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
          }
        else if (typeof a == "function")
          try {
            if (mi(e))
              try {
                bl(), fe(e, a, null);
              } finally {
                Za(e);
              }
            else fe(e, a, null);
          } catch (o) {
            it(e, t, o);
          }
        else a.current = null;
    }
    function Uy(e, t, a, i) {
      var o = e.memoizedProps, f = o.id, d = o.onCommit;
      o = o.onRender, t = t === null ? "mount" : "update", fv && (t = "nested-update"), typeof o == "function" && o(
        f,
        t,
        e.actualDuration,
        e.treeBaseDuration,
        e.actualStartTime,
        a
      ), typeof d == "function" && d(f, t, i, a);
    }
    function ag(e, t, a, i) {
      var o = e.memoizedProps;
      e = o.id, o = o.onPostCommit, t = t === null ? "mount" : "update", fv && (t = "nested-update"), typeof o == "function" && o(
        e,
        t,
        i,
        a
      );
    }
    function Lc(e) {
      var t = e.type, a = e.memoizedProps, i = e.stateNode;
      try {
        fe(
          e,
          pg,
          i,
          t,
          a,
          e
        );
      } catch (o) {
        it(e, e.return, o);
      }
    }
    function mh(e, t, a) {
      try {
        fe(
          e,
          Nh,
          e.stateNode,
          e.type,
          a,
          t,
          e
        );
      } catch (i) {
        it(e, e.return, i);
      }
    }
    function Hy(e) {
      return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && $c(e.type) || e.tag === 4;
    }
    function yh(e) {
      e: for (; ; ) {
        for (; e.sibling === null; ) {
          if (e.return === null || Hy(e.return)) return null;
          e = e.return;
        }
        for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
          if (e.tag === 27 && $c(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
          e.child.return = e, e = e.child;
        }
        if (!(e.flags & 2)) return e.stateNode;
      }
    }
    function Qf(e, t, a) {
      var i = e.tag;
      if (i === 5 || i === 6)
        e = e.stateNode, t ? (vg(a), (a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a).insertBefore(e, t)) : (vg(a), t = a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a, t.appendChild(e), a = a._reactRootContainer, a != null || t.onclick !== null || (t.onclick = La));
      else if (i !== 4 && (i === 27 && $c(e.type) && (a = e.stateNode, t = null), e = e.child, e !== null))
        for (Qf(e, t, a), e = e.sibling; e !== null; )
          Qf(e, t, a), e = e.sibling;
    }
    function Ds(e, t, a) {
      var i = e.tag;
      if (i === 5 || i === 6)
        e = e.stateNode, t ? a.insertBefore(e, t) : a.appendChild(e);
      else if (i !== 4 && (i === 27 && $c(e.type) && (a = e.stateNode), e = e.child, e !== null))
        for (Ds(e, t, a), e = e.sibling; e !== null; )
          Ds(e, t, a), e = e.sibling;
    }
    function xy(e) {
      for (var t, a = e.return; a !== null; ) {
        if (Hy(a)) {
          t = a;
          break;
        }
        a = a.return;
      }
      if (t == null)
        throw Error(
          "Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue."
        );
      switch (t.tag) {
        case 27:
          t = t.stateNode, a = yh(e), Ds(
            e,
            a,
            t
          );
          break;
        case 5:
          a = t.stateNode, t.flags & 32 && (Bh(a), t.flags &= -33), t = yh(e), Ds(
            e,
            t,
            a
          );
          break;
        case 3:
        case 4:
          t = t.stateNode.containerInfo, a = yh(e), Qf(
            e,
            a,
            t
          );
          break;
        default:
          throw Error(
            "Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue."
          );
      }
    }
    function Ny(e) {
      var t = e.stateNode, a = e.memoizedProps;
      try {
        fe(
          e,
          Ti,
          e.type,
          a,
          t,
          e
        );
      } catch (i) {
        it(e, e.return, i);
      }
    }
    function By(e, t) {
      return t.tag === 31 ? (t = t.memoizedState, e.memoizedState !== null && t === null) : t.tag === 13 ? (e = e.memoizedState, t = t.memoizedState, e !== null && e.dehydrated !== null && (t === null || t.dehydrated === null)) : t.tag === 3 ? e.memoizedState.isDehydrated && (t.flags & 256) === 0 : !1;
    }
    function i1(e, t) {
      if (e = e.containerInfo, pS = Vv, e = Cd(e), Xm(e)) {
        if ("selectionStart" in e)
          var a = {
            start: e.selectionStart,
            end: e.selectionEnd
          };
        else
          e: {
            a = (a = e.ownerDocument) && a.defaultView || window;
            var i = a.getSelection && a.getSelection();
            if (i && i.rangeCount !== 0) {
              a = i.anchorNode;
              var o = i.anchorOffset, f = i.focusNode;
              i = i.focusOffset;
              try {
                a.nodeType, f.nodeType;
              } catch {
                a = null;
                break e;
              }
              var d = 0, h = -1, y = -1, p = 0, M = 0, U = e, R = null;
              t: for (; ; ) {
                for (var L; U !== a || o !== 0 && U.nodeType !== 3 || (h = d + o), U !== f || i !== 0 && U.nodeType !== 3 || (y = d + i), U.nodeType === 3 && (d += U.nodeValue.length), (L = U.firstChild) !== null; )
                  R = U, U = L;
                for (; ; ) {
                  if (U === e) break t;
                  if (R === a && ++p === o && (h = d), R === f && ++M === i && (y = d), (L = U.nextSibling) !== null) break;
                  U = R, R = U.parentNode;
                }
                U = L;
              }
              a = h === -1 || y === -1 ? null : { start: h, end: y };
            } else a = null;
          }
        a = a || { start: 0, end: 0 };
      } else a = null;
      for (gS = {
        focusedElem: e,
        selectionRange: a
      }, Vv = !1, Ba = t; Ba !== null; )
        if (t = Ba, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null)
          e.return = t, Ba = e;
        else
          for (; Ba !== null; ) {
            switch (e = t = Ba, a = e.alternate, o = e.flags, e.tag) {
              case 0:
                if ((o & 4) !== 0 && (e = e.updateQueue, e = e !== null ? e.events : null, e !== null))
                  for (a = 0; a < e.length; a++)
                    o = e[a], o.ref.impl = o.nextImpl;
                break;
              case 11:
              case 15:
                break;
              case 1:
                (o & 1024) !== 0 && a !== null && tg(e, a);
                break;
              case 3:
                if ((o & 1024) !== 0) {
                  if (e = e.stateNode.containerInfo, a = e.nodeType, a === 9)
                    ar(e);
                  else if (a === 1)
                    switch (e.nodeName) {
                      case "HEAD":
                      case "HTML":
                      case "BODY":
                        ar(e);
                        break;
                      default:
                        e.textContent = "";
                    }
                }
                break;
              case 5:
              case 26:
              case 27:
              case 6:
              case 4:
              case 17:
                break;
              default:
                if ((o & 1024) !== 0)
                  throw Error(
                    "This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue."
                  );
            }
            if (e = t.sibling, e !== null) {
              e.return = t.return, Ba = e;
              break;
            }
            Ba = t.return;
          }
    }
    function ph(e, t, a) {
      var i = il(), o = Pn(), f = On(), d = eu(), h = a.flags;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          xn(e, a), h & 4 && eg(a, Qu | Bi);
          break;
        case 1:
          if (xn(e, a), h & 4)
            if (e = a.stateNode, t === null)
              a.type.defaultProps || "ref" in a.memoizedProps || _m || (e.props !== a.memoizedProps && console.error(
                "Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
                pe(a) || "instance"
              ), e.state !== a.memoizedState && console.error(
                "Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
                pe(a) || "instance"
              )), mi(a) ? (bl(), fe(
                a,
                q1,
                a,
                e
              ), Za()) : fe(
                a,
                q1,
                a,
                e
              );
            else {
              var y = di(
                a.type,
                t.memoizedProps
              );
              t = t.memoizedState, a.type.defaultProps || "ref" in a.memoizedProps || _m || (e.props !== a.memoizedProps && console.error(
                "Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
                pe(a) || "instance"
              ), e.state !== a.memoizedState && console.error(
                "Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
                pe(a) || "instance"
              )), mi(a) ? (bl(), fe(
                a,
                sb,
                a,
                e,
                y,
                t,
                e.__reactInternalSnapshotBeforeUpdate
              ), Za()) : fe(
                a,
                sb,
                a,
                e,
                y,
                t,
                e.__reactInternalSnapshotBeforeUpdate
              );
            }
          h & 64 && Cy(a), h & 512 && qo(a, a.return);
          break;
        case 3:
          if (t = ai(), xn(e, a), h & 64 && (h = a.updateQueue, h !== null)) {
            if (y = null, a.child !== null)
              switch (a.child.tag) {
                case 27:
                case 5:
                  y = a.child.stateNode;
                  break;
                case 1:
                  y = a.child.stateNode;
              }
            try {
              fe(
                a,
                Uf,
                h,
                y
              );
            } catch (M) {
              it(a, a.return, M);
            }
          }
          e.effectDuration += Df(t);
          break;
        case 27:
          t === null && h & 4 && Ny(a);
        case 26:
        case 5:
          if (xn(e, a), t === null) {
            if (h & 4) Lc(a);
            else if (h & 64) {
              e = a.type, t = a.memoizedProps, y = a.stateNode;
              try {
                fe(
                  a,
                  gg,
                  y,
                  e,
                  t,
                  a
                );
              } catch (M) {
                it(
                  a,
                  a.return,
                  M
                );
              }
            }
          }
          h & 512 && qo(a, a.return);
          break;
        case 12:
          if (h & 4) {
            h = ai(), xn(e, a), e = a.stateNode, e.effectDuration += Qa(h);
            try {
              fe(
                a,
                Uy,
                a,
                t,
                Or,
                e.effectDuration
              );
            } catch (M) {
              it(a, a.return, M);
            }
          } else xn(e, a);
          break;
        case 31:
          xn(e, a), h & 4 && wy(e, a);
          break;
        case 13:
          xn(e, a), h & 4 && qy(e, a), h & 64 && (e = a.memoizedState, e !== null && (e = e.dehydrated, e !== null && (h = ic.bind(
            null,
            a
          ), Mg(e, h))));
          break;
        case 22:
          if (h = a.memoizedState !== null || sf, !h) {
            t = t !== null && t.memoizedState !== null || fa, y = sf;
            var p = fa;
            sf = h, (fa = t) && !p ? (Hu(
              e,
              a,
              (a.subtreeFlags & 8772) !== 0
            ), (a.mode & dt) !== Ze && 0 <= xe && 0 <= Le && 0.05 < Le - xe && Ud(
              a,
              xe,
              Le
            )) : xn(e, a), sf = y, fa = p;
          }
          break;
        case 30:
          break;
        default:
          xn(e, a);
      }
      (a.mode & dt) !== Ze && 0 <= xe && 0 <= Le && ((Ul || 0.05 < Al) && Tu(
        a,
        xe,
        Le,
        Al,
        gl
      ), a.alternate === null && a.return !== null && a.return.alternate !== null && 0.05 < Le - xe && (By(
        a.return.alternate,
        a.return
      ) || Fn(
        a,
        xe,
        Le,
        "Mount"
      ))), Il(i), _n(o), gl = f, Ul = d;
    }
    function Ml(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, Ml(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && x(t)), e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
    }
    function al(e, t, a) {
      for (a = a.child; a !== null; )
        Yy(
          e,
          t,
          a
        ), a = a.sibling;
    }
    function Yy(e, t, a) {
      if (Jl && typeof Jl.onCommitFiberUnmount == "function")
        try {
          Jl.onCommitFiberUnmount(Wo, a);
        } catch (p) {
          Ri || (Ri = !0, console.error(
            "React instrumentation encountered an error: %o",
            p
          ));
        }
      var i = il(), o = Pn(), f = On(), d = eu();
      switch (a.tag) {
        case 26:
          fa || au(a, t), al(
            e,
            t,
            a
          ), a.memoizedState ? a.memoizedState.count-- : a.stateNode && (e = a.stateNode, e.parentNode.removeChild(e));
          break;
        case 27:
          fa || au(a, t);
          var h = ra, y = ou;
          $c(a.type) && (ra = a.stateNode, ou = !1), al(
            e,
            t,
            a
          ), fe(
            a,
            rc,
            a.stateNode
          ), ra = h, ou = y;
          break;
        case 5:
          fa || au(a, t);
        case 6:
          if (h = ra, y = ou, ra = null, al(
            e,
            t,
            a
          ), ra = h, ou = y, ra !== null)
            if (ou)
              try {
                fe(
                  a,
                  bg,
                  ra,
                  a.stateNode
                );
              } catch (p) {
                it(
                  a,
                  t,
                  p
                );
              }
            else
              try {
                fe(
                  a,
                  Sg,
                  ra,
                  a.stateNode
                );
              } catch (p) {
                it(
                  a,
                  t,
                  p
                );
              }
          break;
        case 18:
          ra !== null && (ou ? (e = ra, Vo(
            e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
            a.stateNode
          ), Ko(e)) : Vo(ra, a.stateNode));
          break;
        case 4:
          h = ra, y = ou, ra = a.stateNode.containerInfo, ou = !0, al(
            e,
            t,
            a
          ), ra = h, ou = y;
          break;
        case 0:
        case 11:
        case 14:
        case 15:
          Gc(
            Vn,
            a,
            t
          ), fa || sh(
            a,
            t,
            Qu
          ), al(
            e,
            t,
            a
          );
          break;
        case 1:
          fa || (au(a, t), h = a.stateNode, typeof h.componentWillUnmount == "function" && hh(
            a,
            t,
            h
          )), al(
            e,
            t,
            a
          );
          break;
        case 21:
          al(
            e,
            t,
            a
          );
          break;
        case 22:
          fa = (h = fa) || a.memoizedState !== null, al(
            e,
            t,
            a
          ), fa = h;
          break;
        default:
          al(
            e,
            t,
            a
          );
      }
      (a.mode & dt) !== Ze && 0 <= xe && 0 <= Le && (Ul || 0.05 < Al) && Tu(
        a,
        xe,
        Le,
        Al,
        gl
      ), Il(i), _n(o), gl = f, Ul = d;
    }
    function wy(e, t) {
      if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null))) {
        e = e.dehydrated;
        try {
          fe(
            t,
            Yh,
            e
          );
        } catch (a) {
          it(t, t.return, a);
        }
      }
    }
    function qy(e, t) {
      if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
        try {
          fe(
            t,
            u0,
            e
          );
        } catch (a) {
          it(t, t.return, a);
        }
    }
    function ng(e) {
      switch (e.tag) {
        case 31:
        case 13:
        case 19:
          var t = e.stateNode;
          return t === null && (t = e.stateNode = new Fb()), t;
        case 22:
          return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new Fb()), t;
        default:
          throw Error(
            "Unexpected Suspense handler tag (" + e.tag + "). This is a bug in React."
          );
      }
    }
    function Xc(e, t) {
      var a = ng(e);
      t.forEach(function(i) {
        if (!a.has(i)) {
          if (a.add(i), _i)
            if (Om !== null && Dm !== null)
              Ff(Dm, Om);
            else
              throw Error(
                "Expected finished root and lanes to be set. This is a bug in React."
              );
          var o = Lo.bind(null, e, i);
          i.then(o, o);
        }
      });
    }
    function Fa(e, t) {
      var a = t.deletions;
      if (a !== null)
        for (var i = 0; i < a.length; i++) {
          var o = e, f = t, d = a[i], h = il(), y = f;
          e: for (; y !== null; ) {
            switch (y.tag) {
              case 27:
                if ($c(y.type)) {
                  ra = y.stateNode, ou = !1;
                  break e;
                }
                break;
              case 5:
                ra = y.stateNode, ou = !1;
                break e;
              case 3:
              case 4:
                ra = y.stateNode.containerInfo, ou = !0;
                break e;
            }
            y = y.return;
          }
          if (ra === null)
            throw Error(
              "Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue."
            );
          Yy(o, f, d), ra = null, ou = !1, (d.mode & dt) !== Ze && 0 <= xe && 0 <= Le && 0.05 < Le - xe && Fn(
            d,
            xe,
            Le,
            "Unmount"
          ), Il(h), o = d, f = o.alternate, f !== null && (f.return = null), o.return = null;
        }
      if (t.subtreeFlags & 13886)
        for (t = t.child; t !== null; )
          zs(t, e), t = t.sibling;
    }
    function zs(e, t) {
      var a = il(), i = Pn(), o = On(), f = eu(), d = e.alternate, h = e.flags;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Fa(t, e), Wa(e), h & 4 && (Gc(
            Vn | Bi,
            e,
            e.return
          ), nc(Vn | Bi, e), sh(
            e,
            e.return,
            Qu | Bi
          ));
          break;
        case 1:
          if (Fa(t, e), Wa(e), h & 512 && (fa || d === null || au(d, d.return)), h & 64 && sf && (h = e.updateQueue, h !== null && (d = h.callbacks, d !== null))) {
            var y = h.shared.hiddenCallbacks;
            h.shared.hiddenCallbacks = y === null ? d : y.concat(d);
          }
          break;
        case 26:
          if (y = pc, Fa(t, e), Wa(e), h & 512 && (fa || d === null || au(d, d.return)), h & 4) {
            var p = d !== null ? d.memoizedState : null;
            if (h = e.memoizedState, d === null)
              if (h === null)
                if (e.stateNode === null) {
                  e: {
                    h = e.type, d = e.memoizedProps, y = y.ownerDocument || y;
                    t: switch (h) {
                      case "title":
                        p = y.getElementsByTagName(
                          "title"
                        )[0], (!p || p[vr] || p[fl] || p.namespaceURI === ct || p.hasAttribute("itemprop")) && (p = y.createElement(h), y.head.insertBefore(
                          p,
                          y.querySelector(
                            "head > title"
                          )
                        )), ol(p, h, d), p[fl] = e, Ee(p), h = p;
                        break e;
                      case "link":
                        var M = ir(
                          "link",
                          "href",
                          y
                        ).get(h + (d.href || ""));
                        if (M) {
                          for (var U = 0; U < M.length; U++)
                            if (p = M[U], p.getAttribute("href") === (d.href == null || d.href === "" ? null : d.href) && p.getAttribute("rel") === (d.rel == null ? null : d.rel) && p.getAttribute("title") === (d.title == null ? null : d.title) && p.getAttribute("crossorigin") === (d.crossOrigin == null ? null : d.crossOrigin)) {
                              M.splice(U, 1);
                              break t;
                            }
                        }
                        p = y.createElement(h), ol(p, h, d), y.head.appendChild(
                          p
                        );
                        break;
                      case "meta":
                        if (M = ir(
                          "meta",
                          "content",
                          y
                        ).get(h + (d.content || ""))) {
                          for (U = 0; U < M.length; U++)
                            if (p = M[U], rt(
                              d.content,
                              "content"
                            ), p.getAttribute("content") === (d.content == null ? null : "" + d.content) && p.getAttribute("name") === (d.name == null ? null : d.name) && p.getAttribute("property") === (d.property == null ? null : d.property) && p.getAttribute("http-equiv") === (d.httpEquiv == null ? null : d.httpEquiv) && p.getAttribute("charset") === (d.charSet == null ? null : d.charSet)) {
                              M.splice(U, 1);
                              break t;
                            }
                        }
                        p = y.createElement(h), ol(p, h, d), y.head.appendChild(
                          p
                        );
                        break;
                      default:
                        throw Error(
                          'getNodesForType encountered a type it did not expect: "' + h + '". This is a bug in React.'
                        );
                    }
                    p[fl] = e, Ee(p), h = p;
                  }
                  e.stateNode = h;
                } else
                  xg(
                    y,
                    e.type,
                    e.stateNode
                  );
              else
                e.stateNode = jh(
                  y,
                  h,
                  e.memoizedProps
                );
            else
              p !== h ? (p === null ? d.stateNode !== null && (d = d.stateNode, d.parentNode.removeChild(d)) : p.count--, h === null ? xg(
                y,
                e.type,
                e.stateNode
              ) : jh(
                y,
                h,
                e.memoizedProps
              )) : h === null && e.stateNode !== null && mh(
                e,
                e.memoizedProps,
                d.memoizedProps
              );
          }
          break;
        case 27:
          Fa(t, e), Wa(e), h & 512 && (fa || d === null || au(d, d.return)), d !== null && h & 4 && mh(
            e,
            e.memoizedProps,
            d.memoizedProps
          );
          break;
        case 5:
          if (Fa(t, e), Wa(e), h & 512 && (fa || d === null || au(d, d.return)), e.flags & 32) {
            y = e.stateNode;
            try {
              fe(
                e,
                Bh,
                y
              );
            } catch (ye) {
              it(e, e.return, ye);
            }
          }
          h & 4 && e.stateNode != null && (y = e.memoizedProps, mh(
            e,
            y,
            d !== null ? d.memoizedProps : y
          )), h & 1024 && (W1 = !0, e.type !== "form" && console.error(
            "Unexpected host component type. Expected a form. This is a bug in React."
          ));
          break;
        case 6:
          if (Fa(t, e), Wa(e), h & 4) {
            if (e.stateNode === null)
              throw Error(
                "This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue."
              );
            h = e.memoizedProps, d = d !== null ? d.memoizedProps : h, y = e.stateNode;
            try {
              fe(
                e,
                c1,
                y,
                d,
                h
              );
            } catch (ye) {
              it(e, e.return, ye);
            }
          }
          break;
        case 3:
          if (y = ai(), Gv = null, p = pc, pc = wh(t.containerInfo), Fa(t, e), pc = p, Wa(e), h & 4 && d !== null && d.memoizedState.isDehydrated)
            try {
              fe(
                e,
                n0,
                t.containerInfo
              );
            } catch (ye) {
              it(e, e.return, ye);
            }
          W1 && (W1 = !1, ug(e)), t.effectDuration += Df(
            y
          );
          break;
        case 4:
          h = pc, pc = wh(
            e.stateNode.containerInfo
          ), Fa(t, e), Wa(e), pc = h;
          break;
        case 12:
          h = ai(), Fa(t, e), Wa(e), e.stateNode.effectDuration += Qa(h);
          break;
        case 31:
          Fa(t, e), Wa(e), h & 4 && (h = e.updateQueue, h !== null && (e.updateQueue = null, Xc(e, h)));
          break;
        case 13:
          Fa(t, e), Wa(e), e.child.flags & 8192 && e.memoizedState !== null != (d !== null && d.memoizedState !== null) && (_v = na()), h & 4 && (h = e.updateQueue, h !== null && (e.updateQueue = null, Xc(e, h)));
          break;
        case 22:
          y = e.memoizedState !== null;
          var R = d !== null && d.memoizedState !== null, L = sf, re = fa;
          if (sf = L || y, fa = re || R, Fa(t, e), fa = re, sf = L, R && !y && !L && !re && (e.mode & dt) !== Ze && 0 <= xe && 0 <= Le && 0.05 < Le - xe && Ud(
            e,
            xe,
            Le
          ), Wa(e), h & 8192)
            e: for (t = e.stateNode, t._visibility = y ? t._visibility & ~G0 : t._visibility | G0, !y || d === null || R || sf || fa || (Vc(e), (e.mode & dt) !== Ze && 0 <= xe && 0 <= Le && 0.05 < Le - xe && Fn(
              e,
              xe,
              Le,
              "Disconnect"
            )), d = null, t = e; ; ) {
              if (t.tag === 5 || t.tag === 26) {
                if (d === null) {
                  R = d = t;
                  try {
                    p = R.stateNode, y ? fe(
                      R,
                      Tg,
                      p
                    ) : fe(
                      R,
                      _g,
                      R.stateNode,
                      R.memoizedProps
                    );
                  } catch (ye) {
                    it(R, R.return, ye);
                  }
                }
              } else if (t.tag === 6) {
                if (d === null) {
                  R = t;
                  try {
                    M = R.stateNode, y ? fe(
                      R,
                      Ag,
                      M
                    ) : fe(
                      R,
                      Og,
                      M,
                      R.memoizedProps
                    );
                  } catch (ye) {
                    it(R, R.return, ye);
                  }
                }
              } else if (t.tag === 18) {
                if (d === null) {
                  R = t;
                  try {
                    U = R.stateNode, y ? fe(
                      R,
                      Eg,
                      U
                    ) : fe(
                      R,
                      Rg,
                      R.stateNode
                    );
                  } catch (ye) {
                    it(R, R.return, ye);
                  }
                }
              } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === e) && t.child !== null) {
                t.child.return = t, t = t.child;
                continue;
              }
              if (t === e) break e;
              for (; t.sibling === null; ) {
                if (t.return === null || t.return === e)
                  break e;
                d === t && (d = null), t = t.return;
              }
              d === t && (d = null), t.sibling.return = t.return, t = t.sibling;
            }
          h & 4 && (h = e.updateQueue, h !== null && (d = h.retryQueue, d !== null && (h.retryQueue = null, Xc(e, d))));
          break;
        case 19:
          Fa(t, e), Wa(e), h & 4 && (h = e.updateQueue, h !== null && (e.updateQueue = null, Xc(e, h)));
          break;
        case 30:
          break;
        case 21:
          break;
        default:
          Fa(t, e), Wa(e);
      }
      (e.mode & dt) !== Ze && 0 <= xe && 0 <= Le && ((Ul || 0.05 < Al) && Tu(
        e,
        xe,
        Le,
        Al,
        gl
      ), e.alternate === null && e.return !== null && e.return.alternate !== null && 0.05 < Le - xe && (By(
        e.return.alternate,
        e.return
      ) || Fn(
        e,
        xe,
        Le,
        "Mount"
      ))), Il(a), _n(i), gl = o, Ul = f;
    }
    function Wa(e) {
      var t = e.flags;
      if (t & 2) {
        try {
          fe(e, xy, e);
        } catch (a) {
          it(e, e.return, a);
        }
        e.flags &= -3;
      }
      t & 4096 && (e.flags &= -4097);
    }
    function ug(e) {
      if (e.subtreeFlags & 1024)
        for (e = e.child; e !== null; ) {
          var t = e;
          ug(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling;
        }
    }
    function xn(e, t) {
      if (t.subtreeFlags & 8772)
        for (t = t.child; t !== null; )
          ph(e, t.alternate, t), t = t.sibling;
    }
    function gh(e) {
      var t = il(), a = Pn(), i = On(), o = eu();
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          sh(
            e,
            e.return,
            Qu
          ), Vc(e);
          break;
        case 1:
          au(e, e.return);
          var f = e.stateNode;
          typeof f.componentWillUnmount == "function" && hh(
            e,
            e.return,
            f
          ), Vc(e);
          break;
        case 27:
          fe(
            e,
            rc,
            e.stateNode
          );
        case 26:
        case 5:
          au(e, e.return), Vc(e);
          break;
        case 22:
          e.memoizedState === null && Vc(e);
          break;
        case 30:
          Vc(e);
          break;
        default:
          Vc(e);
      }
      (e.mode & dt) !== Ze && 0 <= xe && 0 <= Le && (Ul || 0.05 < Al) && Tu(
        e,
        xe,
        Le,
        Al,
        gl
      ), Il(t), _n(a), gl = i, Ul = o;
    }
    function Vc(e) {
      for (e = e.child; e !== null; )
        gh(e), e = e.sibling;
    }
    function jy(e, t, a, i) {
      var o = il(), f = Pn(), d = On(), h = eu(), y = a.flags;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          Hu(
            e,
            a,
            i
          ), eg(a, Qu);
          break;
        case 1:
          if (Hu(
            e,
            a,
            i
          ), t = a.stateNode, typeof t.componentDidMount == "function" && fe(
            a,
            q1,
            a,
            t
          ), t = a.updateQueue, t !== null) {
            e = a.stateNode;
            try {
              fe(
                a,
                iy,
                t,
                e
              );
            } catch (p) {
              it(a, a.return, p);
            }
          }
          i && y & 64 && Cy(a), qo(a, a.return);
          break;
        case 27:
          Ny(a);
        case 26:
        case 5:
          Hu(
            e,
            a,
            i
          ), i && t === null && y & 4 && Lc(a), qo(a, a.return);
          break;
        case 12:
          if (i && y & 4) {
            y = ai(), Hu(
              e,
              a,
              i
            ), i = a.stateNode, i.effectDuration += Qa(y);
            try {
              fe(
                a,
                Uy,
                a,
                t,
                Or,
                i.effectDuration
              );
            } catch (p) {
              it(a, a.return, p);
            }
          } else
            Hu(
              e,
              a,
              i
            );
          break;
        case 31:
          Hu(
            e,
            a,
            i
          ), i && y & 4 && wy(e, a);
          break;
        case 13:
          Hu(
            e,
            a,
            i
          ), i && y & 4 && qy(e, a);
          break;
        case 22:
          a.memoizedState === null && Hu(
            e,
            a,
            i
          ), qo(a, a.return);
          break;
        case 30:
          break;
        default:
          Hu(
            e,
            a,
            i
          );
      }
      (a.mode & dt) !== Ze && 0 <= xe && 0 <= Le && (Ul || 0.05 < Al) && Tu(
        a,
        xe,
        Le,
        Al,
        gl
      ), Il(o), _n(f), gl = d, Ul = h;
    }
    function Hu(e, t, a) {
      for (a = a && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; )
        jy(
          e,
          t.alternate,
          t,
          a
        ), t = t.sibling;
    }
    function Ms(e, t) {
      var a = null;
      e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== a && (e != null && Eo(e), a != null && ts(a));
    }
    function Cs(e, t) {
      e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (Eo(t), e != null && ts(e));
    }
    function Nn(e, t, a, i, o) {
      if (t.subtreeFlags & 10256 || t.actualDuration !== 0 && (t.alternate === null || t.alternate.child !== t.child))
        for (t = t.child; t !== null; ) {
          var f = t.sibling;
          Gy(
            e,
            t,
            a,
            i,
            f !== null ? f.actualStartTime : o
          ), t = f;
        }
    }
    function Gy(e, t, a, i, o) {
      var f = il(), d = Pn(), h = On(), y = eu(), p = Tr, M = t.flags;
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          (t.mode & dt) !== Ze && 0 < t.actualStartTime && (t.flags & 1) !== 0 && Hd(
            t,
            t.actualStartTime,
            o,
            Aa,
            a
          ), Nn(
            e,
            t,
            a,
            i,
            o
          ), M & 2048 && _s(t, Qn | Bi);
          break;
        case 1:
          (t.mode & dt) !== Ze && 0 < t.actualStartTime && ((t.flags & 128) !== 0 ? Qm(
            t,
            t.actualStartTime,
            o,
            []
          ) : (t.flags & 1) !== 0 && Hd(
            t,
            t.actualStartTime,
            o,
            Aa,
            a
          )), Nn(
            e,
            t,
            a,
            i,
            o
          );
          break;
        case 3:
          var U = ai(), R = Aa;
          Aa = t.alternate !== null && t.alternate.memoizedState.isDehydrated && (t.flags & 256) === 0, Nn(
            e,
            t,
            a,
            i,
            o
          ), Aa = R, M & 2048 && (a = null, t.alternate !== null && (a = t.alternate.memoizedState.cache), i = t.memoizedState.cache, i !== a && (Eo(i), a != null && ts(a))), e.passiveEffectDuration += Df(
            U
          );
          break;
        case 12:
          if (M & 2048) {
            M = ai(), Nn(
              e,
              t,
              a,
              i,
              o
            ), e = t.stateNode, e.passiveEffectDuration += Qa(M);
            try {
              fe(
                t,
                ag,
                t,
                t.alternate,
                Or,
                e.passiveEffectDuration
              );
            } catch (L) {
              it(t, t.return, L);
            }
          } else
            Nn(
              e,
              t,
              a,
              i,
              o
            );
          break;
        case 31:
          M = Aa, U = t.alternate !== null ? t.alternate.memoizedState : null, R = t.memoizedState, U !== null && R === null ? (R = t.deletions, R !== null && 0 < R.length && R[0].tag === 18 ? (Aa = !1, U = U.hydrationErrors, U !== null && Qm(
            t,
            t.actualStartTime,
            o,
            U
          )) : Aa = !0) : Aa = !1, Nn(
            e,
            t,
            a,
            i,
            o
          ), Aa = M;
          break;
        case 13:
          M = Aa, U = t.alternate !== null ? t.alternate.memoizedState : null, R = t.memoizedState, U === null || U.dehydrated === null || R !== null && R.dehydrated !== null ? Aa = !1 : (R = t.deletions, R !== null && 0 < R.length && R[0].tag === 18 ? (Aa = !1, U = U.hydrationErrors, U !== null && Qm(
            t,
            t.actualStartTime,
            o,
            U
          )) : Aa = !0), Nn(
            e,
            t,
            a,
            i,
            o
          ), Aa = M;
          break;
        case 23:
          break;
        case 22:
          R = t.stateNode, U = t.alternate, t.memoizedState !== null ? R._visibility & ef ? Nn(
            e,
            t,
            a,
            i,
            o
          ) : jo(
            e,
            t,
            a,
            i,
            o
          ) : R._visibility & ef ? Nn(
            e,
            t,
            a,
            i,
            o
          ) : (R._visibility |= ef, Qc(
            e,
            t,
            a,
            i,
            (t.subtreeFlags & 10256) !== 0 || t.actualDuration !== 0 && (t.alternate === null || t.alternate.child !== t.child),
            o
          ), (t.mode & dt) === Ze || Aa || (e = t.actualStartTime, 0 <= e && 0.05 < o - e && Ud(t, e, o), 0 <= xe && 0 <= Le && 0.05 < Le - xe && Ud(
            t,
            xe,
            Le
          ))), M & 2048 && Ms(
            U,
            t
          );
          break;
        case 24:
          Nn(
            e,
            t,
            a,
            i,
            o
          ), M & 2048 && Cs(t.alternate, t);
          break;
        default:
          Nn(
            e,
            t,
            a,
            i,
            o
          );
      }
      (t.mode & dt) !== Ze && ((e = !Aa && t.alternate === null && t.return !== null && t.return.alternate !== null) && (a = t.actualStartTime, 0 <= a && 0.05 < o - a && Fn(
        t,
        a,
        o,
        "Mount"
      )), 0 <= xe && 0 <= Le && ((Ul || 0.05 < Al) && Tu(
        t,
        xe,
        Le,
        Al,
        gl
      ), e && 0.05 < Le - xe && Fn(
        t,
        xe,
        Le,
        "Mount"
      ))), Il(f), _n(d), gl = h, Ul = y, Tr = p;
    }
    function Qc(e, t, a, i, o, f) {
      for (o = o && ((t.subtreeFlags & 10256) !== 0 || t.actualDuration !== 0 && (t.alternate === null || t.alternate.child !== t.child)), t = t.child; t !== null; ) {
        var d = t.sibling;
        Us(
          e,
          t,
          a,
          i,
          o,
          d !== null ? d.actualStartTime : f
        ), t = d;
      }
    }
    function Us(e, t, a, i, o, f) {
      var d = il(), h = Pn(), y = On(), p = eu(), M = Tr;
      o && (t.mode & dt) !== Ze && 0 < t.actualStartTime && (t.flags & 1) !== 0 && Hd(
        t,
        t.actualStartTime,
        f,
        Aa,
        a
      );
      var U = t.flags;
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          Qc(
            e,
            t,
            a,
            i,
            o,
            f
          ), _s(t, Qn);
          break;
        case 23:
          break;
        case 22:
          var R = t.stateNode;
          t.memoizedState !== null ? R._visibility & ef ? Qc(
            e,
            t,
            a,
            i,
            o,
            f
          ) : jo(
            e,
            t,
            a,
            i,
            f
          ) : (R._visibility |= ef, Qc(
            e,
            t,
            a,
            i,
            o,
            f
          )), o && U & 2048 && Ms(
            t.alternate,
            t
          );
          break;
        case 24:
          Qc(
            e,
            t,
            a,
            i,
            o,
            f
          ), o && U & 2048 && Cs(t.alternate, t);
          break;
        default:
          Qc(
            e,
            t,
            a,
            i,
            o,
            f
          );
      }
      (t.mode & dt) !== Ze && 0 <= xe && 0 <= Le && (Ul || 0.05 < Al) && Tu(
        t,
        xe,
        Le,
        Al,
        gl
      ), Il(d), _n(h), gl = y, Ul = p, Tr = M;
    }
    function jo(e, t, a, i, o) {
      if (t.subtreeFlags & 10256 || t.actualDuration !== 0 && (t.alternate === null || t.alternate.child !== t.child))
        for (var f = t.child; f !== null; ) {
          t = f.sibling;
          var d = e, h = a, y = i, p = t !== null ? t.actualStartTime : o, M = Tr;
          (f.mode & dt) !== Ze && 0 < f.actualStartTime && (f.flags & 1) !== 0 && Hd(
            f,
            f.actualStartTime,
            p,
            Aa,
            h
          );
          var U = f.flags;
          switch (f.tag) {
            case 22:
              jo(
                d,
                f,
                h,
                y,
                p
              ), U & 2048 && Ms(f.alternate, f);
              break;
            case 24:
              jo(
                d,
                f,
                h,
                y,
                p
              ), U & 2048 && Cs(f.alternate, f);
              break;
            default:
              jo(
                d,
                f,
                h,
                y,
                p
              );
          }
          Tr = M, f = t;
        }
    }
    function Go(e, t, a) {
      if (e.subtreeFlags & ip)
        for (e = e.child; e !== null; )
          vh(
            e,
            t,
            a
          ), e = e.sibling;
    }
    function vh(e, t, a) {
      switch (e.tag) {
        case 26:
          Go(
            e,
            t,
            a
          ), e.flags & ip && e.memoizedState !== null && r0(
            a,
            pc,
            e.memoizedState,
            e.memoizedProps
          );
          break;
        case 5:
          Go(
            e,
            t,
            a
          );
          break;
        case 3:
        case 4:
          var i = pc;
          pc = wh(
            e.stateNode.containerInfo
          ), Go(
            e,
            t,
            a
          ), pc = i;
          break;
        case 22:
          e.memoizedState === null && (i = e.alternate, i !== null && i.memoizedState !== null ? (i = ip, ip = 16777216, Go(
            e,
            t,
            a
          ), ip = i) : Go(
            e,
            t,
            a
          ));
          break;
        default:
          Go(
            e,
            t,
            a
          );
      }
    }
    function Ly(e) {
      var t = e.alternate;
      if (t !== null && (e = t.child, e !== null)) {
        t.child = null;
        do
          t = e.sibling, e.sibling = null, e = t;
        while (e !== null);
      }
    }
    function Bn(e) {
      var t = e.deletions;
      if ((e.flags & 16) !== 0) {
        if (t !== null)
          for (var a = 0; a < t.length; a++) {
            var i = t[a], o = il();
            Ba = i, yi(
              i,
              e
            ), (i.mode & dt) !== Ze && 0 <= xe && 0 <= Le && 0.05 < Le - xe && Fn(
              i,
              xe,
              Le,
              "Unmount"
            ), Il(o);
          }
        Ly(e);
      }
      if (e.subtreeFlags & 10256)
        for (e = e.child; e !== null; )
          Sh(e), e = e.sibling;
    }
    function Sh(e) {
      var t = il(), a = Pn(), i = On(), o = eu();
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          Bn(e), e.flags & 2048 && dh(
            e,
            e.return,
            Qn | Bi
          );
          break;
        case 3:
          var f = ai();
          Bn(e), e.stateNode.passiveEffectDuration += Df(f);
          break;
        case 12:
          f = ai(), Bn(e), e.stateNode.passiveEffectDuration += Qa(f);
          break;
        case 22:
          f = e.stateNode, e.memoizedState !== null && f._visibility & ef && (e.return === null || e.return.tag !== 13) ? (f._visibility &= ~ef, bh(e), (e.mode & dt) !== Ze && 0 <= xe && 0 <= Le && 0.05 < Le - xe && Fn(
            e,
            xe,
            Le,
            "Disconnect"
          )) : Bn(e);
          break;
        default:
          Bn(e);
      }
      (e.mode & dt) !== Ze && 0 <= xe && 0 <= Le && (Ul || 0.05 < Al) && Tu(
        e,
        xe,
        Le,
        Al,
        gl
      ), Il(t), _n(a), Ul = o, gl = i;
    }
    function bh(e) {
      var t = e.deletions;
      if ((e.flags & 16) !== 0) {
        if (t !== null)
          for (var a = 0; a < t.length; a++) {
            var i = t[a], o = il();
            Ba = i, yi(
              i,
              e
            ), (i.mode & dt) !== Ze && 0 <= xe && 0 <= Le && 0.05 < Le - xe && Fn(
              i,
              xe,
              Le,
              "Unmount"
            ), Il(o);
          }
        Ly(e);
      }
      for (e = e.child; e !== null; )
        Xy(e), e = e.sibling;
    }
    function Xy(e) {
      var t = il(), a = Pn(), i = On(), o = eu();
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          dh(
            e,
            e.return,
            Qn
          ), bh(e);
          break;
        case 22:
          var f = e.stateNode;
          f._visibility & ef && (f._visibility &= ~ef, bh(e));
          break;
        default:
          bh(e);
      }
      (e.mode & dt) !== Ze && 0 <= xe && 0 <= Le && (Ul || 0.05 < Al) && Tu(
        e,
        xe,
        Le,
        Al,
        gl
      ), Il(t), _n(a), Ul = o, gl = i;
    }
    function yi(e, t) {
      for (; Ba !== null; ) {
        var a = Ba, i = a, o = t, f = il(), d = Pn(), h = On(), y = eu();
        switch (i.tag) {
          case 0:
          case 11:
          case 15:
            dh(
              i,
              o,
              Qn
            );
            break;
          case 23:
          case 22:
            i.memoizedState !== null && i.memoizedState.cachePool !== null && (o = i.memoizedState.cachePool.pool, o != null && Eo(o));
            break;
          case 24:
            ts(i.memoizedState.cache);
        }
        if ((i.mode & dt) !== Ze && 0 <= xe && 0 <= Le && (Ul || 0.05 < Al) && Tu(
          i,
          xe,
          Le,
          Al,
          gl
        ), Il(f), _n(d), Ul = y, gl = h, i = a.child, i !== null) i.return = a, Ba = i;
        else
          e: for (a = e; Ba !== null; ) {
            if (i = Ba, f = i.sibling, d = i.return, Ml(i), i === a) {
              Ba = null;
              break e;
            }
            if (f !== null) {
              f.return = d, Ba = f;
              break e;
            }
            Ba = d;
          }
      }
    }
    function Vy() {
      dT.forEach(function(e) {
        return e();
      });
    }
    function Qy() {
      var e = typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0;
      return e || Z.actQueue === null || console.error(
        "The current testing environment is not configured to support act(...)"
      ), e;
    }
    function Ua(e) {
      if ((zt & Ra) !== Ya && mt !== 0)
        return mt & -mt;
      var t = Z.T;
      return t !== null ? (t._updatedFibers || (t._updatedFibers = /* @__PURE__ */ new Set()), t._updatedFibers.add(e), e0()) : du();
    }
    function Zf() {
      if (ru === 0)
        if ((mt & 536870912) === 0 || Tt) {
          var e = ed;
          ed <<= 1, (ed & 3932160) === 0 && (ed = 262144), ru = e;
        } else ru = 536870912;
      return e = Vu.current, e !== null && (e.flags |= 32), ru;
    }
    function Ke(e, t, a) {
      if (Cm && console.error("useInsertionEffect must not schedule updates."), oS && (Mv = !0), (e === tl && (kt === pd || kt === gd) || e.cancelPendingCommit !== null) && (pi(e, 0), nu(
        e,
        mt,
        ru,
        !1
      )), Ll(e, a), (zt & Ra) !== Ya && e === tl) {
        if (Ai)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              e = pt && pe(pt) || "Unknown", s2.has(e) || (s2.add(e), t = pe(t) || "Unknown", console.error(
                "Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://react.dev/link/setstate-in-render",
                t,
                e,
                e
              ));
              break;
            case 1:
              r2 || (console.error(
                "Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."
              ), r2 = !0);
          }
      } else
        _i && vl(e, t, a), Bs(t), e === tl && ((zt & Ra) === Ya && (Nr |= a), Rl === Ur && nu(
          e,
          mt,
          ru,
          !1
        )), dn(e);
    }
    function ig(e, t, a) {
      if ((zt & (Ra | Zu)) !== Ya)
        throw Error("Should not already be working.");
      if (mt !== 0 && pt !== null) {
        var i = pt, o = na();
        switch (ab) {
          case fp:
          case pd:
            var f = J0;
            rl && ((i = i._debugTask) ? i.run(
              console.timeStamp.bind(
                console,
                "Suspended",
                f,
                o,
                Di,
                void 0,
                "primary-light"
              )
            ) : console.timeStamp(
              "Suspended",
              f,
              o,
              Di,
              void 0,
              "primary-light"
            ));
            break;
          case gd:
            f = J0, rl && ((i = i._debugTask) ? i.run(
              console.timeStamp.bind(
                console,
                "Action",
                f,
                o,
                Di,
                void 0,
                "primary-light"
              )
            ) : console.timeStamp(
              "Action",
              f,
              o,
              Di,
              void 0,
              "primary-light"
            ));
            break;
          default:
            rl && (i = o - J0, 3 > i || console.timeStamp(
              "Blocked",
              J0,
              o,
              Di,
              void 0,
              5 > i ? "primary-light" : 10 > i ? "primary" : 100 > i ? "primary-dark" : "error"
            ));
        }
      }
      f = (a = !a && (t & 127) === 0 && (t & e.expiredLanes) === 0 || ul(e, t)) ? uc(e, t) : $f(e, t, !0);
      var d = a;
      do {
        if (f === df) {
          zm && !a && nu(e, t, 0, !1), t = kt, J0 = ia(), ab = t;
          break;
        } else {
          if (i = na(), o = e.current.alternate, d && !og(o)) {
            Eu(t), o = Na, f = i, !rl || f <= o || (jl ? jl.run(
              console.timeStamp.bind(
                console,
                "Teared Render",
                o,
                f,
                _t,
                At,
                "error"
              )
            ) : console.timeStamp(
              "Teared Render",
              o,
              f,
              _t,
              At,
              "error"
            )), Zc(t, i), f = $f(e, t, !1), d = !1;
            continue;
          }
          if (f === yd) {
            if (d = t, e.errorRecoveryDisabledLanes & d)
              var h = 0;
            else
              h = e.pendingLanes & -536870913, h = h !== 0 ? h : h & 536870912 ? 536870912 : 0;
            if (h !== 0) {
              Eu(t), Zm(
                Na,
                i,
                t,
                jl
              ), Zc(t, i), t = h;
              e: {
                i = e, f = d, d = sp;
                var y = i.current.memoizedState.isDehydrated;
                if (y && (pi(i, h).flags |= 256), h = $f(
                  i,
                  h,
                  !1
                ), h !== yd) {
                  if (eS && !y) {
                    i.errorRecoveryDisabledLanes |= f, Nr |= f, f = Ur;
                    break e;
                  }
                  i = Zn, Zn = d, i !== null && (Zn === null ? Zn = i : Zn.push.apply(
                    Zn,
                    i
                  ));
                }
                f = h;
              }
              if (d = !1, f !== yd) continue;
              i = na();
            }
          }
          if (f === op) {
            Eu(t), Zm(
              Na,
              i,
              t,
              jl
            ), Zc(t, i), pi(e, 0), nu(e, t, 0, !0);
            break;
          }
          e: {
            switch (a = e, f) {
              case df:
              case op:
                throw Error("Root did not complete. This is a bug in React.");
              case Ur:
                if ((t & 4194048) !== t) break;
              case Ev:
                Eu(t), Yp(
                  Na,
                  i,
                  t,
                  jl
                ), Zc(t, i), o = t, (o & 127) !== 0 ? iv = i : (o & 4194048) !== 0 && (cv = i), nu(
                  a,
                  t,
                  ru,
                  !Hr
                );
                break e;
              case yd:
                Zn = null;
                break;
              case bv:
              case Wb:
                break;
              default:
                throw Error("Unknown root exit status.");
            }
            if (Z.actQueue !== null)
              It(
                a,
                o,
                t,
                Zn,
                dp,
                Rv,
                ru,
                Nr,
                vd,
                f,
                null,
                null,
                Na,
                i
              );
            else {
              if ((t & 62914560) === t && (d = _v + e2 - na(), 10 < d)) {
                if (nu(
                  a,
                  t,
                  ru,
                  !Hr
                ), Hl(a, 0, !0) !== 0) break e;
                gc = t, a.timeoutHandle = S2(
                  cg.bind(
                    null,
                    a,
                    o,
                    Zn,
                    dp,
                    Rv,
                    t,
                    ru,
                    Nr,
                    vd,
                    Hr,
                    f,
                    "Throttled",
                    Na,
                    i
                  ),
                  d
                );
                break e;
              }
              cg(
                a,
                o,
                Zn,
                dp,
                Rv,
                t,
                ru,
                Nr,
                vd,
                Hr,
                f,
                null,
                Na,
                i
              );
            }
          }
        }
        break;
      } while (!0);
      dn(e);
    }
    function cg(e, t, a, i, o, f, d, h, y, p, M, U, R, L) {
      e.timeoutHandle = Ad;
      var re = t.subtreeFlags, ye = null;
      if ((re & 8192 || (re & 16785408) === 16785408) && (ye = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: La
      }, vh(t, f, ye), re = (f & 62914560) === f ? _v - na() : (f & 4194048) === f ? Pb - na() : 0, re = Gh(ye, re), re !== null)) {
        gc = f, e.cancelPendingCommit = re(
          It.bind(
            null,
            e,
            t,
            f,
            a,
            i,
            o,
            d,
            h,
            y,
            M,
            ye,
            ye.waitingForViewTransition ? "Waiting for the previous Animation" : 0 < ye.count ? 0 < ye.imgCount ? "Suspended on CSS and Images" : "Suspended on CSS" : ye.imgCount === 1 ? "Suspended on an Image" : 0 < ye.imgCount ? "Suspended on Images" : null,
            R,
            L
          )
        ), nu(
          e,
          f,
          d,
          !p
        );
        return;
      }
      It(
        e,
        t,
        f,
        a,
        i,
        o,
        d,
        h,
        y,
        M,
        ye,
        U,
        R,
        L
      );
    }
    function og(e) {
      for (var t = e; ; ) {
        var a = t.tag;
        if ((a === 0 || a === 11 || a === 15) && t.flags & 16384 && (a = t.updateQueue, a !== null && (a = a.stores, a !== null)))
          for (var i = 0; i < a.length; i++) {
            var o = a[i], f = o.getSnapshot;
            o = o.value;
            try {
              if (!Ln(f(), o)) return !1;
            } catch {
              return !1;
            }
          }
        if (a = t.child, t.subtreeFlags & 16384 && a !== null)
          a.return = t, t = a;
        else {
          if (t === e) break;
          for (; t.sibling === null; ) {
            if (t.return === null || t.return === e) return !0;
            t = t.return;
          }
          t.sibling.return = t.return, t = t.sibling;
        }
      }
      return !0;
    }
    function nu(e, t, a, i) {
      t &= ~tS, t &= ~Nr, e.suspendedLanes |= t, e.pingedLanes &= ~t, i && (e.warmLanes |= t), i = e.expirationTimes;
      for (var o = t; 0 < o; ) {
        var f = 31 - Ea(o), d = 1 << f;
        i[f] = -1, o &= ~d;
      }
      a !== 0 && su(e, a, t);
    }
    function Yn() {
      return (zt & (Ra | Zu)) === Ya ? (vi(0), !1) : !0;
    }
    function Eh() {
      if (pt !== null) {
        if (kt === fu)
          var e = pt.return;
        else
          e = pt, _f(), Cc(e), Sm = null, tp = 0, e = pt;
        for (; e !== null; )
          My(e.alternate, e), e = e.return;
        pt = null;
      }
    }
    function Zc(e, t) {
      (e & 127) !== 0 && (id = t), (e & 4194048) !== 0 && (uf = t), (e & 62914560) !== 0 && (tb = t), (e & 2080374784) !== 0 && (lb = t);
    }
    function pi(e, t) {
      rl && (console.timeStamp(
        "Blocking Track",
        3e-3,
        3e-3,
        "Blocking",
        At,
        "primary-light"
      ), console.timeStamp(
        "Transition Track",
        3e-3,
        3e-3,
        "Transition",
        At,
        "primary-light"
      ), console.timeStamp(
        "Suspense Track",
        3e-3,
        3e-3,
        "Suspense",
        At,
        "primary-light"
      ), console.timeStamp(
        "Idle Track",
        3e-3,
        3e-3,
        "Idle",
        At,
        "primary-light"
      ));
      var a = Na;
      if (Na = ia(), mt !== 0 && 0 < a) {
        if (Eu(mt), Rl === bv || Rl === Ur)
          Yp(
            a,
            Na,
            t,
            jl
          );
        else {
          var i = Na, o = jl;
          if (rl && !(i <= a)) {
            var f = (t & 738197653) === t ? "tertiary-dark" : "primary-dark", d = (t & 536870912) === t ? "Prewarm" : (t & 201326741) === t ? "Interrupted Hydration" : "Interrupted Render";
            o ? o.run(
              console.timeStamp.bind(
                console,
                d,
                a,
                i,
                _t,
                At,
                f
              )
            ) : console.timeStamp(
              d,
              a,
              i,
              _t,
              At,
              f
            );
          }
        }
        Zc(mt, Na);
      }
      if (a = jl, jl = null, (t & 127) !== 0) {
        jl = V0, o = 0 <= lo && lo < id ? id : lo, i = 0 <= cd && cd < id ? id : cd, f = 0 <= i ? i : 0 <= o ? o : Na, 0 <= iv ? (Eu(2), wp(
          iv,
          f,
          t,
          a
        )) : ov & 127, a = o;
        var h = i, y = Q0, p = 0 < pm, M = Dr === X0, U = Dr === uv;
        if (o = Na, i = V0, f = x1, d = N1, rl) {
          if (_t = "Blocking", 0 < a ? a > o && (a = o) : a = o, 0 < h ? h > a && (h = a) : h = a, y !== null && a > h) {
            var R = p ? "secondary-light" : "warning";
            i ? i.run(
              console.timeStamp.bind(
                console,
                p ? "Consecutive" : "Event: " + y,
                h,
                a,
                _t,
                At,
                R
              )
            ) : console.timeStamp(
              p ? "Consecutive" : "Event: " + y,
              h,
              a,
              _t,
              At,
              R
            );
          }
          o > a && (h = M ? "error" : (t & 738197653) === t ? "tertiary-light" : "primary-light", M = U ? "Promise Resolved" : M ? "Cascading Update" : 5 < o - a ? "Update Blocked" : "Update", U = [], d != null && U.push(["Component name", d]), f != null && U.push(["Method name", f]), a = {
            start: a,
            end: o,
            detail: {
              devtools: {
                properties: U,
                track: _t,
                trackGroup: At,
                color: h
              }
            }
          }, i ? i.run(
            performance.measure.bind(
              performance,
              M,
              a
            )
          ) : performance.measure(M, a));
        }
        lo = -1.1, Dr = 0, N1 = x1 = null, iv = -1.1, pm = cd, cd = -1.1, id = ia();
      }
      if ((t & 4194048) !== 0 && (jl = Z0, o = 0 <= cf && cf < uf ? uf : cf, a = 0 <= xi && xi < uf ? uf : xi, i = 0 <= zr && zr < uf ? uf : zr, f = 0 <= i ? i : 0 <= a ? a : Na, 0 <= cv ? (Eu(256), wp(
        cv,
        f,
        t,
        jl
      )) : ov & 4194048, U = i, h = od, y = 0 < Mr, p = B1 === uv, f = Na, i = Z0, d = PS, M = eb, rl && (_t = "Transition", 0 < a ? a > f && (a = f) : a = f, 0 < o ? o > a && (o = a) : o = a, 0 < U ? U > o && (U = o) : U = o, o > U && h !== null && (R = y ? "secondary-light" : "warning", i ? i.run(
        console.timeStamp.bind(
          console,
          y ? "Consecutive" : "Event: " + h,
          U,
          o,
          _t,
          At,
          R
        )
      ) : console.timeStamp(
        y ? "Consecutive" : "Event: " + h,
        U,
        o,
        _t,
        At,
        R
      )), a > o && (i ? i.run(
        console.timeStamp.bind(
          console,
          "Action",
          o,
          a,
          _t,
          At,
          "primary-dark"
        )
      ) : console.timeStamp(
        "Action",
        o,
        a,
        _t,
        At,
        "primary-dark"
      )), f > a && (o = p ? "Promise Resolved" : 5 < f - a ? "Update Blocked" : "Update", U = [], M != null && U.push(["Component name", M]), d != null && U.push(["Method name", d]), a = {
        start: a,
        end: f,
        detail: {
          devtools: {
            properties: U,
            track: _t,
            trackGroup: At,
            color: "primary-light"
          }
        }
      }, i ? i.run(
        performance.measure.bind(
          performance,
          o,
          a
        )
      ) : performance.measure(o, a))), xi = cf = -1.1, B1 = 0, cv = -1.1, Mr = zr, zr = -1.1, uf = ia()), (t & 62914560) !== 0 && (ov & 62914560) !== 0 && (Eu(4194304), Jm(tb, Na)), (t & 2080374784) !== 0 && (ov & 2080374784) !== 0 && (Eu(268435456), Jm(lb, Na)), a = e.timeoutHandle, a !== Ad && (e.timeoutHandle = Ad, _T(a)), a = e.cancelPendingCommit, a !== null && (e.cancelPendingCommit = null, a()), gc = 0, Eh(), tl = e, pt = a = ti(
        e.current,
        null
      ), mt = t, kt = fu, Ju = null, Hr = !1, zm = ul(e, t), eS = !1, Rl = df, vd = ru = tS = Nr = xr = 0, Zn = sp = null, Rv = !1, (t & 8) !== 0 && (t |= t & 32), i = e.entangledLanes, i !== 0)
        for (e = e.entanglements, i &= t; 0 < i; )
          o = 31 - Ea(i), f = 1 << o, t |= e[o], i &= ~f;
      return no = t, xd(), e = KS(), 1e3 < e - JS && (Z.recentlyCreatedOwnerStacks = 0, JS = e), mc.discardPendingWarnings(), a;
    }
    function xu(e, t) {
      ke = null, Z.H = up, Z.getCurrentStack = null, Ai = !1, pn = null, t === vm || t === dv ? (t = Ro(), kt = fp) : t === j1 ? (t = Ro(), kt = Ib) : kt = t === k1 ? P1 : t !== null && typeof t == "object" && typeof t.then == "function" ? rp : Tv, Ju = t;
      var a = pt;
      a === null ? (Rl = op, bs(
        e,
        Va(t, e.current)
      )) : a.mode & dt && Gd(a);
    }
    function Zy() {
      var e = Vu.current;
      return e === null ? !0 : (mt & 4194048) === mt ? Ni === null : (mt & 62914560) === mt || (mt & 536870912) !== 0 ? e === Ni : !1;
    }
    function Th() {
      var e = Z.H;
      return Z.H = up, e === null ? up : e;
    }
    function Jy() {
      var e = Z.A;
      return Z.A = sT, e;
    }
    function Jf(e) {
      jl === null && (jl = e._debugTask == null ? null : e._debugTask);
    }
    function Kf() {
      Rl = Ur, Hr || (mt & 4194048) !== mt && Vu.current !== null || (zm = !0), (xr & 134217727) === 0 && (Nr & 134217727) === 0 || tl === null || nu(
        tl,
        mt,
        ru,
        !1
      );
    }
    function $f(e, t, a) {
      var i = zt;
      zt |= Ra;
      var o = Th(), f = Jy();
      if (tl !== e || mt !== t) {
        if (_i) {
          var d = e.memoizedUpdaters;
          0 < d.size && (Ff(e, mt), d.clear()), ma(e, t);
        }
        dp = null, pi(e, t);
      }
      t = !1, d = Rl;
      e: do
        try {
          if (kt !== fu && pt !== null) {
            var h = pt, y = Ju;
            switch (kt) {
              case P1:
                Eh(), d = Ev;
                break e;
              case fp:
              case pd:
              case gd:
              case rp:
                Vu.current === null && (t = !0);
                var p = kt;
                if (kt = fu, Ju = null, kf(e, h, y, p), a && zm) {
                  d = df;
                  break e;
                }
                break;
              default:
                p = kt, kt = fu, Ju = null, kf(e, h, y, p);
            }
          }
          Ky(), d = Rl;
          break;
        } catch (M) {
          xu(e, M);
        }
      while (!0);
      return t && e.shellSuspendCounter++, _f(), zt = i, Z.H = o, Z.A = f, pt === null && (tl = null, mt = 0, xd()), d;
    }
    function Ky() {
      for (; pt !== null; ) Ah(pt);
    }
    function uc(e, t) {
      var a = zt;
      zt |= Ra;
      var i = Th(), o = Jy();
      if (tl !== e || mt !== t) {
        if (_i) {
          var f = e.memoizedUpdaters;
          0 < f.size && (Ff(e, mt), f.clear()), ma(e, t);
        }
        dp = null, Ov = na() + t2, pi(e, t);
      } else
        zm = ul(
          e,
          t
        );
      e: do
        try {
          if (kt !== fu && pt !== null)
            t: switch (t = pt, f = Ju, kt) {
              case Tv:
                kt = fu, Ju = null, kf(
                  e,
                  t,
                  f,
                  Tv
                );
                break;
              case pd:
              case gd:
                if (ny(f)) {
                  kt = fu, Ju = null, $y(t);
                  break;
                }
                t = function() {
                  kt !== pd && kt !== gd || tl !== e || (kt = Av), dn(e);
                }, f.then(t, t);
                break e;
              case fp:
                kt = Av;
                break e;
              case Ib:
                kt = I1;
                break e;
              case Av:
                ny(f) ? (kt = fu, Ju = null, $y(t)) : (kt = fu, Ju = null, kf(
                  e,
                  t,
                  f,
                  Av
                ));
                break;
              case I1:
                var d = null;
                switch (pt.tag) {
                  case 26:
                    d = pt.memoizedState;
                  case 5:
                  case 27:
                    var h = pt;
                    if (d ? vt(d) : h.stateNode.complete) {
                      kt = fu, Ju = null;
                      var y = h.sibling;
                      if (y !== null) pt = y;
                      else {
                        var p = h.return;
                        p !== null ? (pt = p, Hs(p)) : pt = null;
                      }
                      break t;
                    }
                    break;
                  default:
                    console.error(
                      "Unexpected type of fiber triggered a suspensey commit. This is a bug in React."
                    );
                }
                kt = fu, Ju = null, kf(
                  e,
                  t,
                  f,
                  I1
                );
                break;
              case rp:
                kt = fu, Ju = null, kf(
                  e,
                  t,
                  f,
                  rp
                );
                break;
              case P1:
                Eh(), Rl = Ev;
                break e;
              default:
                throw Error(
                  "Unexpected SuspendedReason. This is a bug in React."
                );
            }
          Z.actQueue !== null ? Ky() : wl();
          break;
        } catch (M) {
          xu(e, M);
        }
      while (!0);
      return _f(), Z.H = i, Z.A = o, zt = a, pt !== null ? df : (tl = null, mt = 0, xd(), Rl);
    }
    function wl() {
      for (; pt !== null && !Wh(); )
        Ah(pt);
    }
    function Ah(e) {
      var t = e.alternate;
      (e.mode & dt) !== Ze ? ($i(e), t = fe(
        e,
        Rs,
        t,
        e,
        no
      ), Gd(e)) : t = fe(
        e,
        Rs,
        t,
        e,
        no
      ), e.memoizedProps = e.pendingProps, t === null ? Hs(e) : pt = t;
    }
    function $y(e) {
      var t = fe(e, aa, e);
      e.memoizedProps = e.pendingProps, t === null ? Hs(e) : pt = t;
    }
    function aa(e) {
      var t = e.alternate, a = (e.mode & dt) !== Ze;
      switch (a && $i(e), e.tag) {
        case 15:
        case 0:
          t = Ay(
            t,
            e,
            e.pendingProps,
            e.type,
            void 0,
            mt
          );
          break;
        case 11:
          t = Ay(
            t,
            e,
            e.pendingProps,
            e.type.render,
            e.ref,
            mt
          );
          break;
        case 5:
          Cc(e);
        default:
          My(t, e), e = pt = Fm(e, no), t = Rs(t, e, no);
      }
      return a && Gd(e), t;
    }
    function kf(e, t, a, i) {
      _f(), Cc(t), Sm = null, tp = 0;
      var o = t.return;
      try {
        if (py(
          e,
          o,
          t,
          a,
          mt
        )) {
          Rl = op, bs(
            e,
            Va(a, e.current)
          ), pt = null;
          return;
        }
      } catch (f) {
        if (o !== null) throw pt = o, f;
        Rl = op, bs(
          e,
          Va(a, e.current)
        ), pt = null;
        return;
      }
      t.flags & 32768 ? (Tt || i === Tv ? e = !0 : zm || (mt & 536870912) !== 0 ? e = !1 : (Hr = e = !0, (i === pd || i === gd || i === fp || i === rp) && (i = Vu.current, i !== null && i.tag === 13 && (i.flags |= 16384))), ky(t, e)) : Hs(t);
    }
    function Hs(e) {
      var t = e;
      do {
        if ((t.flags & 32768) !== 0) {
          ky(
            t,
            Hr
          );
          return;
        }
        var a = t.alternate;
        if (e = t.return, $i(t), a = fe(
          t,
          zy,
          a,
          t,
          no
        ), (t.mode & dt) !== Ze && ls(t), a !== null) {
          pt = a;
          return;
        }
        if (t = t.sibling, t !== null) {
          pt = t;
          return;
        }
        pt = t = e;
      } while (t !== null);
      Rl === df && (Rl = Wb);
    }
    function ky(e, t) {
      do {
        var a = Pp(e.alternate, e);
        if (a !== null) {
          a.flags &= 32767, pt = a;
          return;
        }
        if ((e.mode & dt) !== Ze) {
          ls(e), a = e.actualDuration;
          for (var i = e.child; i !== null; )
            a += i.actualDuration, i = i.sibling;
          e.actualDuration = a;
        }
        if (a = e.return, a !== null && (a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null), !t && (e = e.sibling, e !== null)) {
          pt = e;
          return;
        }
        pt = e = a;
      } while (e !== null);
      Rl = Ev, pt = null;
    }
    function It(e, t, a, i, o, f, d, h, y, p, M, U, R, L) {
      e.cancelPendingCommit = null;
      do
        xs();
      while (sa !== Yr);
      if (mc.flushLegacyContextWarning(), mc.flushPendingUnsafeLifecycleWarnings(), (zt & (Ra | Zu)) !== Ya)
        throw Error("Should not already be working.");
      if (Eu(a), p === yd ? Zm(
        R,
        L,
        a,
        jl
      ) : i !== null ? l1(
        R,
        L,
        a,
        i,
        t !== null && t.alternate !== null && t.alternate.memoizedState.isDehydrated && (t.flags & 256) !== 0,
        jl
      ) : t1(
        R,
        L,
        a,
        jl
      ), t !== null) {
        if (a === 0 && console.error(
          "finishedLanes should not be empty during a commit. This is a bug in React."
        ), t === e.current)
          throw Error(
            "Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue."
          );
        if (f = t.lanes | t.childLanes, f |= z1, bn(
          e,
          a,
          f,
          d,
          h,
          y
        ), e === tl && (pt = tl = null, mt = 0), Mm = t, wr = e, gc = a, nS = f, iS = o, c2 = i, uS = L, o2 = U, vc = Dv, f2 = null, t.actualDuration !== 0 || (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, Wf(Fo, function() {
          return vp = window.event, vc === Dv && (vc = aS), Ns(), null;
        })) : (e.callbackNode = null, e.callbackPriority = 0), nf = null, Or = ia(), U !== null && a1(
          L,
          Or,
          U,
          jl
        ), i = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || i) {
          i = Z.T, Z.T = null, o = Yt.p, Yt.p = Kl, d = zt, zt |= Zu;
          try {
            i1(e, t, a);
          } finally {
            zt = d, Yt.p = o, Z.T = i;
          }
        }
        sa = a2, Ia(), gi(), Fy();
      }
    }
    function Ia() {
      if (sa === a2) {
        sa = Yr;
        var e = wr, t = Mm, a = gc, i = (t.flags & 13878) !== 0;
        if ((t.subtreeFlags & 13878) !== 0 || i) {
          i = Z.T, Z.T = null;
          var o = Yt.p;
          Yt.p = Kl;
          var f = zt;
          zt |= Zu;
          try {
            Om = a, Dm = e, To(), zs(t, e), Dm = Om = null, a = gS;
            var d = Cd(e.containerInfo), h = a.focusedElem, y = a.selectionRange;
            if (d !== h && h && h.ownerDocument && Hp(
              h.ownerDocument.documentElement,
              h
            )) {
              if (y !== null && Xm(h)) {
                var p = y.start, M = y.end;
                if (M === void 0 && (M = p), "selectionStart" in h)
                  h.selectionStart = p, h.selectionEnd = Math.min(
                    M,
                    h.value.length
                  );
                else {
                  var U = h.ownerDocument || document, R = U && U.defaultView || window;
                  if (R.getSelection) {
                    var L = R.getSelection(), re = h.textContent.length, ye = Math.min(
                      y.start,
                      re
                    ), nl = y.end === void 0 ? ye : Math.min(y.end, re);
                    !L.extend && ye > nl && (d = nl, nl = ye, ye = d);
                    var Rt = Up(
                      h,
                      ye
                    ), A = Up(
                      h,
                      nl
                    );
                    if (Rt && A && (L.rangeCount !== 1 || L.anchorNode !== Rt.node || L.anchorOffset !== Rt.offset || L.focusNode !== A.node || L.focusOffset !== A.offset)) {
                      var _ = U.createRange();
                      _.setStart(Rt.node, Rt.offset), L.removeAllRanges(), ye > nl ? (L.addRange(_), L.extend(A.node, A.offset)) : (_.setEnd(A.node, A.offset), L.addRange(_));
                    }
                  }
                }
              }
              for (U = [], L = h; L = L.parentNode; )
                L.nodeType === 1 && U.push({
                  element: L,
                  left: L.scrollLeft,
                  top: L.scrollTop
                });
              for (typeof h.focus == "function" && h.focus(), h = 0; h < U.length; h++) {
                var z = U[h];
                z.element.scrollLeft = z.left, z.element.scrollTop = z.top;
              }
            }
            Vv = !!pS, gS = pS = null;
          } finally {
            zt = f, Yt.p = o, Z.T = i;
          }
        }
        e.current = t, sa = n2;
      }
    }
    function gi() {
      if (sa === n2) {
        sa = Yr;
        var e = f2;
        if (e !== null) {
          Or = ia();
          var t = af, a = Or;
          !rl || a <= t || console.timeStamp(
            e,
            t,
            a,
            _t,
            At,
            "secondary-light"
          );
        }
        e = wr, t = Mm, a = gc;
        var i = (t.flags & 8772) !== 0;
        if ((t.subtreeFlags & 8772) !== 0 || i) {
          i = Z.T, Z.T = null;
          var o = Yt.p;
          Yt.p = Kl;
          var f = zt;
          zt |= Zu;
          try {
            Om = a, Dm = e, To(), ph(
              e,
              t.alternate,
              t
            ), Dm = Om = null;
          } finally {
            zt = f, Yt.p = o, Z.T = i;
          }
        }
        e = uS, t = o2, af = ia(), e = t === null ? e : Or, t = af, a = vc === lS, i = jl, nf !== null ? qp(
          e,
          t,
          nf,
          !1,
          i
        ) : !rl || t <= e || (i ? i.run(
          console.timeStamp.bind(
            console,
            a ? "Commit Interrupted View Transition" : "Commit",
            e,
            t,
            _t,
            At,
            a ? "error" : "secondary-dark"
          )
        ) : console.timeStamp(
          a ? "Commit Interrupted View Transition" : "Commit",
          e,
          t,
          _t,
          At,
          a ? "error" : "secondary-dark"
        )), sa = u2;
      }
    }
    function Fy() {
      if (sa === i2 || sa === u2) {
        if (sa === i2) {
          var e = af;
          af = ia();
          var t = af, a = vc === lS;
          !rl || t <= e || console.timeStamp(
            a ? "Interrupted View Transition" : "Starting Animation",
            e,
            t,
            _t,
            At,
            a ? " error" : "secondary-light"
          ), vc !== lS && (vc = l2);
        }
        sa = Yr, Ih(), e = wr;
        var i = Mm;
        t = gc, a = c2;
        var o = i.actualDuration !== 0 || (i.subtreeFlags & 10256) !== 0 || (i.flags & 10256) !== 0;
        o ? sa = zv : (sa = Yr, Mm = wr = null, Wy(
          e,
          e.pendingLanes
        ), Sd = 0, mp = null);
        var f = e.pendingLanes;
        if (f === 0 && (Br = null), o || Oh(e), f = _l(t), i = i.stateNode, Jl && typeof Jl.onCommitFiberRoot == "function")
          try {
            var d = (i.current.flags & 128) === 128;
            switch (f) {
              case Kl:
                var h = D0;
                break;
              case Ta:
                h = Ph;
                break;
              case xa:
                h = Fo;
                break;
              case Pc:
                h = em;
                break;
              default:
                h = Fo;
            }
            Jl.onCommitFiberRoot(
              Wo,
              i,
              h,
              d
            );
          } catch (U) {
            Ri || (Ri = !0, console.error(
              "React instrumentation encountered an error: %o",
              U
            ));
          }
        if (_i && e.memoizedUpdaters.clear(), Vy(), a !== null) {
          d = Z.T, h = Yt.p, Yt.p = Kl, Z.T = null;
          try {
            var y = e.onRecoverableError;
            for (i = 0; i < a.length; i++) {
              var p = a[i], M = fg(p.stack);
              fe(
                p.source,
                y,
                p.value,
                M
              );
            }
          } finally {
            Z.T = d, Yt.p = h;
          }
        }
        (gc & 3) !== 0 && xs(), dn(e), f = e.pendingLanes, (t & 261930) !== 0 && (f & 42) !== 0 ? (rv = !0, e === cS ? hp++ : (hp = 0, cS = e)) : hp = 0, o || Zc(t, af), vi(0);
      }
    }
    function fg(e) {
      return e = { componentStack: e }, Object.defineProperty(e, "digest", {
        get: function() {
          console.error(
            'You are accessing "digest" from the errorInfo object passed to onRecoverableError. This property is no longer provided as part of errorInfo but can be accessed as a property of the Error instance itself.'
          );
        }
      }), e;
    }
    function Wy(e, t) {
      (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, ts(t)));
    }
    function xs() {
      return Ia(), gi(), Fy(), Ns();
    }
    function Ns() {
      if (sa !== zv) return !1;
      var e = wr, t = nS;
      nS = 0;
      var a = _l(gc), i = xa > a ? xa : a;
      a = Z.T;
      var o = Yt.p;
      try {
        Yt.p = i, Z.T = null;
        var f = iS;
        iS = null, i = wr;
        var d = gc;
        if (sa = Yr, Mm = wr = null, gc = 0, (zt & (Ra | Zu)) !== Ya)
          throw Error("Cannot flush passive effects while already rendering.");
        Eu(d), oS = !0, Mv = !1;
        var h = 0;
        if (nf = null, h = na(), vc === l2)
          Jm(
            af,
            h,
            nT
          );
        else {
          var y = af, p = h, M = vc === aS;
          !rl || p <= y || (jl ? jl.run(
            console.timeStamp.bind(
              console,
              M ? "Waiting for Paint" : "Waiting",
              y,
              p,
              _t,
              At,
              "secondary-light"
            )
          ) : console.timeStamp(
            M ? "Waiting for Paint" : "Waiting",
            y,
            p,
            _t,
            At,
            "secondary-light"
          ));
        }
        y = zt, zt |= Zu;
        var U = i.current;
        To(), Sh(U);
        var R = i.current;
        U = uS, To(), Gy(
          i,
          R,
          d,
          f,
          U
        ), Oh(i), zt = y;
        var L = na();
        if (R = h, U = jl, nf !== null ? qp(
          R,
          L,
          nf,
          !0,
          U
        ) : !rl || L <= R || (U ? U.run(
          console.timeStamp.bind(
            console,
            "Remaining Effects",
            R,
            L,
            _t,
            At,
            "secondary-dark"
          )
        ) : console.timeStamp(
          "Remaining Effects",
          R,
          L,
          _t,
          At,
          "secondary-dark"
        )), Zc(d, L), vi(0, !1), Mv ? i === mp ? Sd++ : (Sd = 0, mp = i) : Sd = 0, Mv = oS = !1, Jl && typeof Jl.onPostCommitFiberRoot == "function")
          try {
            Jl.onPostCommitFiberRoot(Wo, i);
          } catch (ye) {
            Ri || (Ri = !0, console.error(
              "React instrumentation encountered an error: %o",
              ye
            ));
          }
        var re = i.current.stateNode;
        return re.effectDuration = 0, re.passiveEffectDuration = 0, !0;
      } finally {
        Yt.p = o, Z.T = a, Wy(e, t);
      }
    }
    function Pa(e, t, a) {
      t = Va(a, t), Qp(t), t = lh(e.stateNode, t, 2), e = ui(e, t, 2), e !== null && (Ll(e, 2), dn(e));
    }
    function it(e, t, a) {
      if (Cm = !1, e.tag === 3)
        Pa(e, e, a);
      else {
        for (; t !== null; ) {
          if (t.tag === 3) {
            Pa(
              t,
              e,
              a
            );
            return;
          }
          if (t.tag === 1) {
            var i = t.stateNode;
            if (typeof t.type.getDerivedStateFromError == "function" || typeof i.componentDidCatch == "function" && (Br === null || !Br.has(i))) {
              e = Va(a, e), Qp(e), a = ah(2), i = ui(t, a, 2), i !== null && (nh(
                a,
                i,
                t,
                e
              ), Ll(i, 2), dn(i));
              return;
            }
          }
          t = t.return;
        }
        console.error(
          `Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Potential causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`,
          a
        );
      }
    }
    function Rh(e, t, a) {
      var i = e.pingCache;
      if (i === null) {
        i = e.pingCache = new hT();
        var o = /* @__PURE__ */ new Set();
        i.set(t, o);
      } else
        o = i.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), i.set(t, o));
      o.has(a) || (eS = !0, o.add(a), i = sn.bind(null, e, t, a), _i && Ff(e, a), t.then(i, i));
    }
    function sn(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t), e.pingedLanes |= e.suspendedLanes & a, e.warmLanes &= ~a, (a & 127) !== 0 ? 0 > lo && (id = lo = ia(), V0 = nv("Promise Resolved"), Dr = uv) : (a & 4194048) !== 0 && 0 > xi && (uf = xi = ia(), Z0 = nv("Promise Resolved"), B1 = uv), Qy() && Z.actQueue === null && console.error(
        `A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://react.dev/link/wrap-tests-with-act`
      ), tl === e && (mt & a) === a && (Rl === Ur || Rl === bv && (mt & 62914560) === mt && na() - _v < e2 ? (zt & Ra) === Ya && pi(e, 0) : tS |= a, vd === mt && (vd = 0)), dn(e);
    }
    function Iy(e, t) {
      t === 0 && (t = Gl()), e = Ma(e, t), e !== null && (Ll(e, t), dn(e));
    }
    function ic(e) {
      var t = e.memoizedState, a = 0;
      t !== null && (a = t.retryLane), Iy(e, a);
    }
    function Lo(e, t) {
      var a = 0;
      switch (e.tag) {
        case 31:
        case 13:
          var i = e.stateNode, o = e.memoizedState;
          o !== null && (a = o.retryLane);
          break;
        case 19:
          i = e.stateNode;
          break;
        case 22:
          i = e.stateNode._retryCache;
          break;
        default:
          throw Error(
            "Pinged unknown suspense boundary type. This is probably a bug in React."
          );
      }
      i !== null && i.delete(t), Iy(e, a);
    }
    function Nu(e, t, a) {
      if ((t.subtreeFlags & 67117056) !== 0)
        for (t = t.child; t !== null; ) {
          var i = e, o = t, f = o.type === ln;
          f = a || f, o.tag !== 22 ? o.flags & 67108864 ? f && fe(
            o,
            _h,
            i,
            o
          ) : Nu(
            i,
            o,
            f
          ) : o.memoizedState === null && (f && o.flags & 8192 ? fe(
            o,
            _h,
            i,
            o
          ) : o.subtreeFlags & 67108864 && fe(
            o,
            Nu,
            i,
            o,
            f
          )), t = t.sibling;
        }
    }
    function _h(e, t) {
      ie(!0);
      try {
        gh(t), Xy(t), jy(e, t.alternate, t, !1), Us(e, t, 0, null, !1, 0);
      } finally {
        ie(!1);
      }
    }
    function Oh(e) {
      var t = !0;
      e.current.mode & (gn | hc) || (t = !1), Nu(
        e,
        e.current,
        t
      );
    }
    function uu(e) {
      if ((zt & Ra) === Ya) {
        var t = e.tag;
        if (t === 3 || t === 1 || t === 0 || t === 11 || t === 14 || t === 15) {
          if (t = pe(e) || "ReactComponent", Cv !== null) {
            if (Cv.has(t)) return;
            Cv.add(t);
          } else Cv = /* @__PURE__ */ new Set([t]);
          fe(e, function() {
            console.error(
              "Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously tries to update the component. Move this work to useEffect instead."
            );
          });
        }
      }
    }
    function Ff(e, t) {
      _i && e.memoizedUpdaters.forEach(function(a) {
        vl(e, a, t);
      });
    }
    function Wf(e, t) {
      var a = Z.actQueue;
      return a !== null ? (a.push(t), pT) : O0(e, t);
    }
    function Bs(e) {
      Qy() && Z.actQueue === null && fe(e, function() {
        console.error(
          `An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://react.dev/link/wrap-tests-with-act`,
          pe(e)
        );
      });
    }
    function dn(e) {
      e !== Um && e.next === null && (Um === null ? Uv = Um = e : Um = Um.next = e), Hv = !0, Z.actQueue !== null ? rS || (rS = !0, sg()) : fS || (fS = !0, sg());
    }
    function vi(e, t) {
      if (!sS && Hv) {
        sS = !0;
        do
          for (var a = !1, i = Uv; i !== null; ) {
            if (e !== 0) {
              var o = i.pendingLanes;
              if (o === 0) var f = 0;
              else {
                var d = i.suspendedLanes, h = i.pingedLanes;
                f = (1 << 31 - Ea(42 | e) + 1) - 1, f &= o & ~(d & ~h), f = f & 201326741 ? f & 201326741 | 1 : f ? f | 2 : 0;
              }
              f !== 0 && (a = !0, Ys(i, f));
            } else
              f = mt, f = Hl(
                i,
                i === tl ? f : 0,
                i.cancelPendingCommit !== null || i.timeoutHandle !== Ad
              ), (f & 3) === 0 || ul(i, f) || (a = !0, Ys(i, f));
            i = i.next;
          }
        while (a);
        sS = !1;
      }
    }
    function rg() {
      vp = window.event, Dh();
    }
    function Dh() {
      Hv = rS = fS = !1;
      var e = 0;
      qr !== 0 && l0() && (e = qr);
      for (var t = na(), a = null, i = Uv; i !== null; ) {
        var o = i.next, f = If(i, t);
        f === 0 ? (i.next = null, a === null ? Uv = o : a.next = o, o === null && (Um = a)) : (a = i, (e !== 0 || (f & 3) !== 0) && (Hv = !0)), i = o;
      }
      sa !== Yr && sa !== zv || vi(e), qr !== 0 && (qr = 0);
    }
    function If(e, t) {
      for (var a = e.suspendedLanes, i = e.pingedLanes, o = e.expirationTimes, f = e.pendingLanes & -62914561; 0 < f; ) {
        var d = 31 - Ea(f), h = 1 << d, y = o[d];
        y === -1 ? ((h & a) === 0 || (h & i) !== 0) && (o[d] = ha(h, t)) : y <= t && (e.expiredLanes |= h), f &= ~h;
      }
      if (t = tl, a = mt, a = Hl(
        e,
        e === t ? a : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== Ad
      ), i = e.callbackNode, a === 0 || e === t && (kt === pd || kt === gd) || e.cancelPendingCommit !== null)
        return i !== null && zh(i), e.callbackNode = null, e.callbackPriority = 0;
      if ((a & 3) === 0 || ul(e, a)) {
        if (t = a & -a, t !== e.callbackPriority || Z.actQueue !== null && i !== dS)
          zh(i);
        else return t;
        switch (_l(a)) {
          case Kl:
          case Ta:
            a = Ph;
            break;
          case xa:
            a = Fo;
            break;
          case Pc:
            a = em;
            break;
          default:
            a = Fo;
        }
        return i = Py.bind(null, e), Z.actQueue !== null ? (Z.actQueue.push(i), a = dS) : a = O0(a, i), e.callbackPriority = t, e.callbackNode = a, t;
      }
      return i !== null && zh(i), e.callbackPriority = 2, e.callbackNode = null, 2;
    }
    function Py(e, t) {
      if (rv = fv = !1, vp = window.event, sa !== Yr && sa !== zv)
        return e.callbackNode = null, e.callbackPriority = 0, null;
      var a = e.callbackNode;
      if (vc === Dv && (vc = aS), xs() && e.callbackNode !== a)
        return null;
      var i = mt;
      return i = Hl(
        e,
        e === tl ? i : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== Ad
      ), i === 0 ? null : (ig(
        e,
        i,
        t
      ), If(e, na()), e.callbackNode != null && e.callbackNode === a ? Py.bind(null, e) : null);
    }
    function Ys(e, t) {
      if (xs()) return null;
      fv = rv, rv = !1, ig(e, t, !0);
    }
    function zh(e) {
      e !== dS && e !== null && Fh(e);
    }
    function sg() {
      Z.actQueue !== null && Z.actQueue.push(function() {
        return Dh(), null;
      }), OT(function() {
        (zt & (Ra | Zu)) !== Ya ? O0(
          D0,
          rg
        ) : Dh();
      });
    }
    function e0() {
      if (qr === 0) {
        var e = fd;
        e === 0 && (e = pr, pr <<= 1, (pr & 261888) === 0 && (pr = 256)), qr = e;
      }
      return qr;
    }
    function Ct(e) {
      return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : (rt(e, "action"), bc("" + e));
    }
    function Jt(e, t) {
      var a = t.ownerDocument.createElement("input");
      return a.name = t.name, a.value = t.value, e.id && a.setAttribute("form", e.id), t.parentNode.insertBefore(a, t), e = new FormData(e), a.parentNode.removeChild(a), e;
    }
    function bt(e, t, a, i, o) {
      if (t === "submit" && a && a.stateNode === o) {
        var f = Ct(
          (o[an] || null).action
        ), d = i.submitter;
        d && (t = (t = d[an] || null) ? Ct(t.formAction) : d.getAttribute("formAction"), t !== null && (f = t, d = null));
        var h = new Wg(
          "action",
          "action",
          null,
          i,
          o
        );
        e.push({
          event: h,
          listeners: [
            {
              instance: null,
              listener: function() {
                if (i.defaultPrevented) {
                  if (qr !== 0) {
                    var y = d ? Jt(
                      o,
                      d
                    ) : new FormData(o), p = {
                      pending: !0,
                      data: y,
                      method: o.method,
                      action: f
                    };
                    Object.freeze(p), lc(
                      a,
                      p,
                      null,
                      y
                    );
                  }
                } else
                  typeof f == "function" && (h.preventDefault(), y = d ? Jt(
                    o,
                    d
                  ) : new FormData(o), p = {
                    pending: !0,
                    data: y,
                    method: o.method,
                    action: f
                  }, Object.freeze(p), lc(
                    a,
                    p,
                    f,
                    y
                  ));
              },
              currentTarget: o
            }
          ]
        });
      }
    }
    function yt(e, t, a) {
      e.currentTarget = a;
      try {
        t(e);
      } catch (i) {
        R1(i);
      }
      e.currentTarget = null;
    }
    function Lt(e, t) {
      t = (t & 4) !== 0;
      for (var a = 0; a < e.length; a++) {
        var i = e[a];
        e: {
          var o = void 0, f = i.event;
          if (i = i.listeners, t)
            for (var d = i.length - 1; 0 <= d; d--) {
              var h = i[d], y = h.instance, p = h.currentTarget;
              if (h = h.listener, y !== o && f.isPropagationStopped())
                break e;
              y !== null ? fe(
                y,
                yt,
                f,
                h,
                p
              ) : yt(f, h, p), o = y;
            }
          else
            for (d = 0; d < i.length; d++) {
              if (h = i[d], y = h.instance, p = h.currentTarget, h = h.listener, y !== o && f.isPropagationStopped())
                break e;
              y !== null ? fe(
                y,
                yt,
                f,
                h,
                p
              ) : yt(f, h, p), o = y;
            }
        }
      }
    }
    function Ve(e, t) {
      hS.has(e) || console.error(
        'Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.',
        e
      );
      var a = t[Io];
      a === void 0 && (a = t[Io] = /* @__PURE__ */ new Set());
      var i = e + "__bubble";
      a.has(i) || (Mh(t, e, 2, !1), a.add(i));
    }
    function Si(e, t, a) {
      hS.has(e) && !t && console.error(
        'Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.',
        e
      );
      var i = 0;
      t && (i |= 4), Mh(
        a,
        e,
        i,
        t
      );
    }
    function Jc(e) {
      if (!e[xv]) {
        e[xv] = !0, Jg.forEach(function(a) {
          a !== "selectionchange" && (hS.has(a) || Si(a, !1, e), Si(a, !0, e));
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[xv] || (t[xv] = !0, Si("selectionchange", !1, t));
      }
    }
    function Mh(e, t, a, i) {
      switch (Vh(t)) {
        case Kl:
          var o = y0;
          break;
        case Ta:
          o = ba;
          break;
        default:
          o = p0;
      }
      a = o.bind(
        null,
        t,
        a,
        e
      ), o = void 0, !m1 || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), i ? o !== void 0 ? e.addEventListener(t, a, {
        capture: !0,
        passive: o
      }) : e.addEventListener(t, a, !0) : o !== void 0 ? e.addEventListener(t, a, {
        passive: o
      }) : e.addEventListener(
        t,
        a,
        !1
      );
    }
    function Bu(e, t, a, i, o) {
      var f = i;
      if ((t & 1) === 0 && (t & 2) === 0 && i !== null)
        e: for (; ; ) {
          if (i === null) return;
          var d = i.tag;
          if (d === 3 || d === 4) {
            var h = i.stateNode.containerInfo;
            if (h === o) break;
            if (d === 4)
              for (d = i.return; d !== null; ) {
                var y = d.tag;
                if ((y === 3 || y === 4) && d.stateNode.containerInfo === o)
                  return;
                d = d.return;
              }
            for (; h !== null; ) {
              if (d = ae(h), d === null) return;
              if (y = d.tag, y === 5 || y === 6 || y === 26 || y === 27) {
                i = f = d;
                continue e;
              }
              h = h.parentNode;
            }
          }
          i = i.return;
        }
      Ec(function() {
        var p = f, M = on(a), U = [];
        e: {
          var R = ZS.get(e);
          if (R !== void 0) {
            var L = Wg, re = e;
            switch (e) {
              case "keypress":
                if (Jr(a) === 0) break e;
              case "keydown":
              case "keyup":
                L = UE;
                break;
              case "focusin":
                re = "focus", L = v1;
                break;
              case "focusout":
                re = "blur", L = v1;
                break;
              case "beforeblur":
              case "afterblur":
                L = v1;
                break;
              case "click":
                if (a.button === 2) break e;
              case "auxclick":
              case "dblclick":
              case "mousedown":
              case "mousemove":
              case "mouseup":
              case "mouseout":
              case "mouseover":
              case "contextmenu":
                L = US;
                break;
              case "drag":
              case "dragend":
              case "dragenter":
              case "dragexit":
              case "dragleave":
              case "dragover":
              case "dragstart":
              case "drop":
                L = SE;
                break;
              case "touchcancel":
              case "touchend":
              case "touchmove":
              case "touchstart":
                L = NE;
                break;
              case LS:
              case XS:
              case VS:
                L = TE;
                break;
              case QS:
                L = YE;
                break;
              case "scroll":
              case "scrollend":
                L = gE;
                break;
              case "wheel":
                L = qE;
                break;
              case "copy":
              case "cut":
              case "paste":
                L = RE;
                break;
              case "gotpointercapture":
              case "lostpointercapture":
              case "pointercancel":
              case "pointerdown":
              case "pointermove":
              case "pointerout":
              case "pointerover":
              case "pointerup":
                L = xS;
                break;
              case "toggle":
              case "beforetoggle":
                L = GE;
            }
            var ye = (t & 4) !== 0, nl = !ye && (e === "scroll" || e === "scrollend"), Rt = ye ? R !== null ? R + "Capture" : null : R;
            ye = [];
            for (var A = p, _; A !== null; ) {
              var z = A;
              if (_ = z.stateNode, z = z.tag, z !== 5 && z !== 26 && z !== 27 || _ === null || Rt === null || (z = Xa(A, Rt), z != null && ye.push(
                Pt(
                  A,
                  z,
                  _
                )
              )), nl) break;
              A = A.return;
            }
            0 < ye.length && (R = new L(
              R,
              re,
              null,
              a,
              M
            ), U.push({
              event: R,
              listeners: ye
            }));
          }
        }
        if ((t & 7) === 0) {
          e: {
            if (R = e === "mouseover" || e === "pointerover", L = e === "mouseout" || e === "pointerout", R && a !== H0 && (re = a.relatedTarget || a.fromElement) && (ae(re) || re[dc]))
              break e;
            if ((L || R) && (R = M.window === M ? M : (R = M.ownerDocument) ? R.defaultView || R.parentWindow : window, L ? (re = a.relatedTarget || a.toElement, L = p, re = re ? ae(re) : null, re !== null && (nl = Ne(re), ye = re.tag, re !== nl || ye !== 5 && ye !== 27 && ye !== 6) && (re = null)) : (L = null, re = p), L !== re)) {
              if (ye = US, z = "onMouseLeave", Rt = "onMouseEnter", A = "mouse", (e === "pointerout" || e === "pointerover") && (ye = xS, z = "onPointerLeave", Rt = "onPointerEnter", A = "pointer"), nl = L == null ? R : ge(L), _ = re == null ? R : ge(re), R = new ye(
                z,
                A + "leave",
                L,
                a,
                M
              ), R.target = nl, R.relatedTarget = _, z = null, ae(M) === p && (ye = new ye(
                Rt,
                A + "enter",
                re,
                a,
                M
              ), ye.target = _, ye.relatedTarget = nl, z = ye), nl = z, L && re)
                t: {
                  for (ye = Xo, Rt = L, A = re, _ = 0, z = Rt; z; z = ye(z))
                    _++;
                  z = 0;
                  for (var k = A; k; k = ye(k))
                    z++;
                  for (; 0 < _ - z; )
                    Rt = ye(Rt), _--;
                  for (; 0 < z - _; )
                    A = ye(A), z--;
                  for (; _--; ) {
                    if (Rt === A || A !== null && Rt === A.alternate) {
                      ye = Rt;
                      break t;
                    }
                    Rt = ye(Rt), A = ye(A);
                  }
                  ye = null;
                }
              else ye = null;
              L !== null && Ch(
                U,
                R,
                L,
                ye,
                !1
              ), re !== null && nl !== null && Ch(
                U,
                nl,
                re,
                ye,
                !0
              );
            }
          }
          e: {
            if (R = p ? ge(p) : window, L = R.nodeName && R.nodeName.toLowerCase(), L === "select" || L === "input" && R.type === "file")
              var se = Tc;
            else if (jm(R))
              if (jS)
                se = Fr;
              else {
                se = Gm;
                var Fe = e1;
              }
            else
              L = R.nodeName, !L || L.toLowerCase() !== "input" || R.type !== "checkbox" && R.type !== "radio" ? p && kn(p.elementType) && (se = Tc) : se = Lm;
            if (se && (se = se(e, p))) {
              $r(
                U,
                se,
                a,
                M
              );
              break e;
            }
            Fe && Fe(e, R, p), e === "focusout" && p && R.type === "number" && p.memoizedProps.value != null && io(R, "number", R.value);
          }
          switch (Fe = p ? ge(p) : window, e) {
            case "focusin":
              (jm(Fe) || Fe.contentEditable === "true") && (om = Fe, b1 = p, j0 = null);
              break;
            case "focusout":
              j0 = b1 = om = null;
              break;
            case "mousedown":
              E1 = !0;
              break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
              E1 = !1, xp(
                U,
                a,
                M
              );
              break;
            case "selectionchange":
              if (QE) break;
            case "keydown":
            case "keyup":
              xp(
                U,
                a,
                M
              );
          }
          var He;
          if (S1)
            e: {
              switch (e) {
                case "compositionstart":
                  var _e = "onCompositionStart";
                  break e;
                case "compositionend":
                  _e = "onCompositionEnd";
                  break e;
                case "compositionupdate":
                  _e = "onCompositionUpdate";
                  break e;
              }
              _e = void 0;
            }
          else
            cm ? bf(e, a) && (_e = "onCompositionEnd") : e === "keydown" && a.keyCode === NS && (_e = "onCompositionStart");
          _e && (BS && a.locale !== "ko" && (cm || _e !== "onCompositionStart" ? _e === "onCompositionEnd" && cm && (He = Su()) : (Er = M, y1 = "value" in Er ? Er.value : Er.textContent, cm = !0)), Fe = Yu(
            p,
            _e
          ), 0 < Fe.length && (_e = new HS(
            _e,
            e,
            null,
            a,
            M
          ), U.push({
            event: _e,
            listeners: Fe
          }), He ? _e.data = He : (He = Ji(a), He !== null && (_e.data = He)))), (He = XE ? qm(e, a) : Dd(e, a)) && (_e = Yu(
            p,
            "onBeforeInput"
          ), 0 < _e.length && (Fe = new OE(
            "onBeforeInput",
            "beforeinput",
            null,
            a,
            M
          ), U.push({
            event: Fe,
            listeners: _e
          }), Fe.data = He)), bt(
            U,
            e,
            p,
            a,
            M
          );
        }
        Lt(U, t);
      });
    }
    function Pt(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function Yu(e, t) {
      for (var a = t + "Capture", i = []; e !== null; ) {
        var o = e, f = o.stateNode;
        if (o = o.tag, o !== 5 && o !== 26 && o !== 27 || f === null || (o = Xa(e, a), o != null && i.unshift(
          Pt(e, o, f)
        ), o = Xa(e, t), o != null && i.push(
          Pt(e, o, f)
        )), e.tag === 3) return i;
        e = e.return;
      }
      return [];
    }
    function Xo(e) {
      if (e === null) return null;
      do
        e = e.return;
      while (e && e.tag !== 5 && e.tag !== 27);
      return e || null;
    }
    function Ch(e, t, a, i, o) {
      for (var f = t._reactName, d = []; a !== null && a !== i; ) {
        var h = a, y = h.alternate, p = h.stateNode;
        if (h = h.tag, y !== null && y === i) break;
        h !== 5 && h !== 26 && h !== 27 || p === null || (y = p, o ? (p = Xa(a, f), p != null && d.unshift(
          Pt(a, p, y)
        )) : o || (p = Xa(a, f), p != null && d.push(
          Pt(a, p, y)
        ))), a = a.return;
      }
      d.length !== 0 && e.push({ event: t, listeners: d });
    }
    function en(e, t) {
      vf(e, t), e !== "input" && e !== "textarea" && e !== "select" || t == null || t.value !== null || MS || (MS = !0, e === "select" && t.multiple ? console.error(
        "`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.",
        e
      ) : console.error(
        "`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.",
        e
      ));
      var a = {
        registrationNameDependencies: Oi,
        possibleRegistrationNames: Sr
      };
      kn(e) || typeof t.is == "string" || Zr(e, t, a), t.contentEditable && !t.suppressContentEditableWarning && t.children != null && console.error(
        "A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."
      );
    }
    function yl(e, t, a, i) {
      t !== a && (a = wu(a), wu(t) !== a && (i[e] = t));
    }
    function ws(e, t, a) {
      t.forEach(function(i) {
        a[cc(i)] = i === "style" ? Kc(e) : e.getAttribute(i);
      });
    }
    function pl(e, t) {
      t === !1 ? console.error(
        "Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.",
        e,
        e,
        e
      ) : console.error(
        "Expected `%s` listener to be a function, instead got a value of `%s` type.",
        e,
        typeof t
      );
    }
    function Uh(e, t) {
      return e = e.namespaceURI === et || e.namespaceURI === ct ? e.ownerDocument.createElementNS(
        e.namespaceURI,
        e.tagName
      ) : e.ownerDocument.createElement(e.tagName), e.innerHTML = t, e.innerHTML;
    }
    function wu(e) {
      return _a(e) && (console.error(
        "The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before using it here.",
        Jn(e)
      ), Kn(e)), (typeof e == "string" ? e : "" + e).replace(gT, `
`).replace(vT, "");
    }
    function t0(e, t) {
      return t = wu(t), wu(e) === t;
    }
    function Bt(e, t, a, i, o, f) {
      switch (a) {
        case "children":
          typeof i == "string" ? (Qi(i, t, !1), t === "body" || t === "textarea" && i === "" || vu(e, i)) : (typeof i == "number" || typeof i == "bigint") && (Qi("" + i, t, !1), t !== "body" && vu(e, "" + i));
          break;
        case "className":
          $n(e, "class", i);
          break;
        case "tabIndex":
          $n(e, "tabindex", i);
          break;
        case "dir":
        case "role":
        case "viewBox":
        case "width":
        case "height":
          $n(e, a, i);
          break;
        case "style":
          Od(e, i, f);
          break;
        case "data":
          if (t !== "object") {
            $n(e, "data", i);
            break;
          }
        case "src":
        case "href":
          if (i === "" && (t !== "a" || a !== "href")) {
            console.error(
              a === "src" ? 'An empty string ("") was passed to the %s attribute. This may cause the browser to download the whole page again over the network. To fix this, either do not render the element at all or pass null to %s instead of an empty string.' : 'An empty string ("") was passed to the %s attribute. To fix this, either do not render the element at all or pass null to %s instead of an empty string.',
              a,
              a
            ), e.removeAttribute(a);
            break;
          }
          if (i == null || typeof i == "function" || typeof i == "symbol" || typeof i == "boolean") {
            e.removeAttribute(a);
            break;
          }
          rt(i, a), i = bc("" + i), e.setAttribute(a, i);
          break;
        case "action":
        case "formAction":
          if (i != null && (t === "form" ? a === "formAction" ? console.error(
            "You can only pass the formAction prop to <input> or <button>. Use the action prop on <form>."
          ) : typeof i == "function" && (o.encType == null && o.method == null || Yv || (Yv = !0, console.error(
            "Cannot specify a encType or method for a form that specifies a function as the action. React provides those automatically. They will get overridden."
          )), o.target == null || Bv || (Bv = !0, console.error(
            "Cannot specify a target for a form that specifies a function as the action. The function will always be executed in the same window."
          ))) : t === "input" || t === "button" ? a === "action" ? console.error(
            "You can only pass the action prop to <form>. Use the formAction prop on <input> or <button>."
          ) : t !== "input" || o.type === "submit" || o.type === "image" || Nv ? t !== "button" || o.type == null || o.type === "submit" || Nv ? typeof i == "function" && (o.name == null || m2 || (m2 = !0, console.error(
            'Cannot specify a "name" prop for a button that specifies a function as a formAction. React needs it to encode which action should be invoked. It will get overridden.'
          )), o.formEncType == null && o.formMethod == null || Yv || (Yv = !0, console.error(
            "Cannot specify a formEncType or formMethod for a button that specifies a function as a formAction. React provides those automatically. They will get overridden."
          )), o.formTarget == null || Bv || (Bv = !0, console.error(
            "Cannot specify a formTarget for a button that specifies a function as a formAction. The function will always be executed in the same window."
          ))) : (Nv = !0, console.error(
            'A button can only specify a formAction along with type="submit" or no type.'
          )) : (Nv = !0, console.error(
            'An input can only specify a formAction along with type="submit" or type="image".'
          )) : console.error(
            a === "action" ? "You can only pass the action prop to <form>." : "You can only pass the formAction prop to <input> or <button>."
          )), typeof i == "function") {
            e.setAttribute(
              a,
              "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
            );
            break;
          } else
            typeof f == "function" && (a === "formAction" ? (t !== "input" && Bt(e, t, "name", o.name, o, null), Bt(
              e,
              t,
              "formEncType",
              o.formEncType,
              o,
              null
            ), Bt(
              e,
              t,
              "formMethod",
              o.formMethod,
              o,
              null
            ), Bt(
              e,
              t,
              "formTarget",
              o.formTarget,
              o,
              null
            )) : (Bt(
              e,
              t,
              "encType",
              o.encType,
              o,
              null
            ), Bt(e, t, "method", o.method, o, null), Bt(
              e,
              t,
              "target",
              o.target,
              o,
              null
            )));
          if (i == null || typeof i == "symbol" || typeof i == "boolean") {
            e.removeAttribute(a);
            break;
          }
          rt(i, a), i = bc("" + i), e.setAttribute(a, i);
          break;
        case "onClick":
          i != null && (typeof i != "function" && pl(a, i), e.onclick = La);
          break;
        case "onScroll":
          i != null && (typeof i != "function" && pl(a, i), Ve("scroll", e));
          break;
        case "onScrollEnd":
          i != null && (typeof i != "function" && pl(a, i), Ve("scrollend", e));
          break;
        case "dangerouslySetInnerHTML":
          if (i != null) {
            if (typeof i != "object" || !("__html" in i))
              throw Error(
                "`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://react.dev/link/dangerously-set-inner-html for more information."
              );
            if (a = i.__html, a != null) {
              if (o.children != null)
                throw Error(
                  "Can only set one of `children` or `props.dangerouslySetInnerHTML`."
                );
              e.innerHTML = a;
            }
          }
          break;
        case "multiple":
          e.multiple = i && typeof i != "function" && typeof i != "symbol";
          break;
        case "muted":
          e.muted = i && typeof i != "function" && typeof i != "symbol";
          break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "ref":
          break;
        case "autoFocus":
          break;
        case "xlinkHref":
          if (i == null || typeof i == "function" || typeof i == "boolean" || typeof i == "symbol") {
            e.removeAttribute("xlink:href");
            break;
          }
          rt(i, a), a = bc("" + i), e.setAttributeNS(bd, "xlink:href", a);
          break;
        case "contentEditable":
        case "spellCheck":
        case "draggable":
        case "value":
        case "autoReverse":
        case "externalResourcesRequired":
        case "focusable":
        case "preserveAlpha":
          i != null && typeof i != "function" && typeof i != "symbol" ? (rt(i, a), e.setAttribute(a, "" + i)) : e.removeAttribute(a);
          break;
        case "inert":
          i !== "" || wv[a] || (wv[a] = !0, console.error(
            "Received an empty string for a boolean attribute `%s`. This will treat the attribute as if it were false. Either pass `false` to silence this warning, or pass `true` if you used an empty string in earlier versions of React to indicate this attribute is true.",
            a
          ));
        case "allowFullScreen":
        case "async":
        case "autoPlay":
        case "controls":
        case "default":
        case "defer":
        case "disabled":
        case "disablePictureInPicture":
        case "disableRemotePlayback":
        case "formNoValidate":
        case "hidden":
        case "loop":
        case "noModule":
        case "noValidate":
        case "open":
        case "playsInline":
        case "readOnly":
        case "required":
        case "reversed":
        case "scoped":
        case "seamless":
        case "itemScope":
          i && typeof i != "function" && typeof i != "symbol" ? e.setAttribute(a, "") : e.removeAttribute(a);
          break;
        case "capture":
        case "download":
          i === !0 ? e.setAttribute(a, "") : i !== !1 && i != null && typeof i != "function" && typeof i != "symbol" ? (rt(i, a), e.setAttribute(a, i)) : e.removeAttribute(a);
          break;
        case "cols":
        case "rows":
        case "size":
        case "span":
          i != null && typeof i != "function" && typeof i != "symbol" && !isNaN(i) && 1 <= i ? (rt(i, a), e.setAttribute(a, i)) : e.removeAttribute(a);
          break;
        case "rowSpan":
        case "start":
          i == null || typeof i == "function" || typeof i == "symbol" || isNaN(i) ? e.removeAttribute(a) : (rt(i, a), e.setAttribute(a, i));
          break;
        case "popover":
          Ve("beforetoggle", e), Ve("toggle", e), Fu(e, "popover", i);
          break;
        case "xlinkActuate":
          cn(
            e,
            bd,
            "xlink:actuate",
            i
          );
          break;
        case "xlinkArcrole":
          cn(
            e,
            bd,
            "xlink:arcrole",
            i
          );
          break;
        case "xlinkRole":
          cn(
            e,
            bd,
            "xlink:role",
            i
          );
          break;
        case "xlinkShow":
          cn(
            e,
            bd,
            "xlink:show",
            i
          );
          break;
        case "xlinkTitle":
          cn(
            e,
            bd,
            "xlink:title",
            i
          );
          break;
        case "xlinkType":
          cn(
            e,
            bd,
            "xlink:type",
            i
          );
          break;
        case "xmlBase":
          cn(
            e,
            mS,
            "xml:base",
            i
          );
          break;
        case "xmlLang":
          cn(
            e,
            mS,
            "xml:lang",
            i
          );
          break;
        case "xmlSpace":
          cn(
            e,
            mS,
            "xml:space",
            i
          );
          break;
        case "is":
          f != null && console.error(
            'Cannot update the "is" prop after it has been initialized.'
          ), Fu(e, "is", i);
          break;
        case "innerText":
        case "textContent":
          break;
        case "popoverTarget":
          y2 || i == null || typeof i != "object" || (y2 = !0, console.error(
            "The `popoverTarget` prop expects the ID of an Element as a string. Received %s instead.",
            i
          ));
        default:
          !(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N" ? (a = Qr(a), Fu(e, a, i)) : Oi.hasOwnProperty(a) && i != null && typeof i != "function" && pl(a, i);
      }
    }
    function Pf(e, t, a, i, o, f) {
      switch (a) {
        case "style":
          Od(e, i, f);
          break;
        case "dangerouslySetInnerHTML":
          if (i != null) {
            if (typeof i != "object" || !("__html" in i))
              throw Error(
                "`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://react.dev/link/dangerously-set-inner-html for more information."
              );
            if (a = i.__html, a != null) {
              if (o.children != null)
                throw Error(
                  "Can only set one of `children` or `props.dangerouslySetInnerHTML`."
                );
              e.innerHTML = a;
            }
          }
          break;
        case "children":
          typeof i == "string" ? vu(e, i) : (typeof i == "number" || typeof i == "bigint") && vu(e, "" + i);
          break;
        case "onScroll":
          i != null && (typeof i != "function" && pl(a, i), Ve("scroll", e));
          break;
        case "onScrollEnd":
          i != null && (typeof i != "function" && pl(a, i), Ve("scrollend", e));
          break;
        case "onClick":
          i != null && (typeof i != "function" && pl(a, i), e.onclick = La);
          break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "innerHTML":
        case "ref":
          break;
        case "innerText":
        case "textContent":
          break;
        default:
          if (Oi.hasOwnProperty(a))
            i != null && typeof i != "function" && pl(a, i);
          else
            e: {
              if (a[0] === "o" && a[1] === "n" && (o = a.endsWith("Capture"), t = a.slice(2, o ? a.length - 7 : void 0), f = e[an] || null, f = f != null ? f[a] : null, typeof f == "function" && e.removeEventListener(t, f, o), typeof i == "function")) {
                typeof f != "function" && f !== null && (a in e ? e[a] = null : e.hasAttribute(a) && e.removeAttribute(a)), e.addEventListener(t, i, o);
                break e;
              }
              a in e ? e[a] = i : i === !0 ? e.setAttribute(a, "") : Fu(e, a, i);
            }
      }
    }
    function ol(e, t, a) {
      switch (en(t, a), t) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
          break;
        case "img":
          Ve("error", e), Ve("load", e);
          var i = !1, o = !1, f;
          for (f in a)
            if (a.hasOwnProperty(f)) {
              var d = a[f];
              if (d != null)
                switch (f) {
                  case "src":
                    i = !0;
                    break;
                  case "srcSet":
                    o = !0;
                    break;
                  case "children":
                  case "dangerouslySetInnerHTML":
                    throw Error(
                      t + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                    );
                  default:
                    Bt(e, t, f, d, a, null);
                }
            }
          o && Bt(e, t, "srcSet", a.srcSet, a, null), i && Bt(e, t, "src", a.src, a, null);
          return;
        case "input":
          Sl("input", a), Ve("invalid", e);
          var h = f = d = o = null, y = null, p = null;
          for (i in a)
            if (a.hasOwnProperty(i)) {
              var M = a[i];
              if (M != null)
                switch (i) {
                  case "name":
                    o = M;
                    break;
                  case "type":
                    d = M;
                    break;
                  case "checked":
                    y = M;
                    break;
                  case "defaultChecked":
                    p = M;
                    break;
                  case "value":
                    f = M;
                    break;
                  case "defaultValue":
                    h = M;
                    break;
                  case "children":
                  case "dangerouslySetInnerHTML":
                    if (M != null)
                      throw Error(
                        t + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                      );
                    break;
                  default:
                    Bt(e, t, i, M, a, null);
                }
            }
          qt(e, a), Ga(
            e,
            f,
            h,
            y,
            p,
            d,
            o,
            !1
          );
          return;
        case "select":
          Sl("select", a), Ve("invalid", e), i = d = f = null;
          for (o in a)
            if (a.hasOwnProperty(o) && (h = a[o], h != null))
              switch (o) {
                case "value":
                  f = h;
                  break;
                case "defaultValue":
                  d = h;
                  break;
                case "multiple":
                  i = h;
                default:
                  Bt(
                    e,
                    t,
                    o,
                    h,
                    a,
                    null
                  );
              }
          hu(e, a), t = f, a = d, e.multiple = !!i, t != null ? ya(e, !!i, t, !1) : a != null && ya(e, !!i, a, !0);
          return;
        case "textarea":
          Sl("textarea", a), Ve("invalid", e), f = o = i = null;
          for (d in a)
            if (a.hasOwnProperty(d) && (h = a[d], h != null))
              switch (d) {
                case "value":
                  i = h;
                  break;
                case "defaultValue":
                  o = h;
                  break;
                case "children":
                  f = h;
                  break;
                case "dangerouslySetInnerHTML":
                  if (h != null)
                    throw Error(
                      "`dangerouslySetInnerHTML` does not make sense on <textarea>."
                    );
                  break;
                default:
                  Bt(
                    e,
                    t,
                    d,
                    h,
                    a,
                    null
                  );
              }
          xl(e, a), Gi(e, i, o, f);
          return;
        case "option":
          Tn(e, a);
          for (y in a)
            a.hasOwnProperty(y) && (i = a[y], i != null) && (y === "selected" ? e.selected = i && typeof i != "function" && typeof i != "symbol" : Bt(e, t, y, i, a, null));
          return;
        case "dialog":
          Ve("beforetoggle", e), Ve("toggle", e), Ve("cancel", e), Ve("close", e);
          break;
        case "iframe":
        case "object":
          Ve("load", e);
          break;
        case "video":
        case "audio":
          for (i = 0; i < yp.length; i++)
            Ve(yp[i], e);
          break;
        case "image":
          Ve("error", e), Ve("load", e);
          break;
        case "details":
          Ve("toggle", e);
          break;
        case "embed":
        case "source":
        case "link":
          Ve("error", e), Ve("load", e);
        case "area":
        case "base":
        case "br":
        case "col":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "track":
        case "wbr":
        case "menuitem":
          for (p in a)
            if (a.hasOwnProperty(p) && (i = a[p], i != null))
              switch (p) {
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(
                    t + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                  );
                default:
                  Bt(e, t, p, i, a, null);
              }
          return;
        default:
          if (kn(t)) {
            for (M in a)
              a.hasOwnProperty(M) && (i = a[M], i !== void 0 && Pf(
                e,
                t,
                M,
                i,
                a,
                void 0
              ));
            return;
          }
      }
      for (h in a)
        a.hasOwnProperty(h) && (i = a[h], i != null && Bt(e, t, h, i, a, null));
    }
    function Zl(e, t, a, i) {
      switch (en(t, i), t) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
          break;
        case "input":
          var o = null, f = null, d = null, h = null, y = null, p = null, M = null;
          for (L in a) {
            var U = a[L];
            if (a.hasOwnProperty(L) && U != null)
              switch (L) {
                case "checked":
                  break;
                case "value":
                  break;
                case "defaultValue":
                  y = U;
                default:
                  i.hasOwnProperty(L) || Bt(
                    e,
                    t,
                    L,
                    null,
                    i,
                    U
                  );
              }
          }
          for (var R in i) {
            var L = i[R];
            if (U = a[R], i.hasOwnProperty(R) && (L != null || U != null))
              switch (R) {
                case "type":
                  f = L;
                  break;
                case "name":
                  o = L;
                  break;
                case "checked":
                  p = L;
                  break;
                case "defaultChecked":
                  M = L;
                  break;
                case "value":
                  d = L;
                  break;
                case "defaultValue":
                  h = L;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (L != null)
                    throw Error(
                      t + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                    );
                  break;
                default:
                  L !== U && Bt(
                    e,
                    t,
                    R,
                    L,
                    i,
                    U
                  );
              }
          }
          t = a.type === "checkbox" || a.type === "radio" ? a.checked != null : a.value != null, i = i.type === "checkbox" || i.type === "radio" ? i.checked != null : i.value != null, t || !i || h2 || (console.error(
            "A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://react.dev/link/controlled-components"
          ), h2 = !0), !t || i || d2 || (console.error(
            "A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://react.dev/link/controlled-components"
          ), d2 = !0), Xl(
            e,
            d,
            h,
            y,
            p,
            M,
            f,
            o
          );
          return;
        case "select":
          L = d = h = R = null;
          for (f in a)
            if (y = a[f], a.hasOwnProperty(f) && y != null)
              switch (f) {
                case "value":
                  break;
                case "multiple":
                  L = y;
                default:
                  i.hasOwnProperty(f) || Bt(
                    e,
                    t,
                    f,
                    null,
                    i,
                    y
                  );
              }
          for (o in i)
            if (f = i[o], y = a[o], i.hasOwnProperty(o) && (f != null || y != null))
              switch (o) {
                case "value":
                  R = f;
                  break;
                case "defaultValue":
                  h = f;
                  break;
                case "multiple":
                  d = f;
                default:
                  f !== y && Bt(
                    e,
                    t,
                    o,
                    f,
                    i,
                    y
                  );
              }
          i = h, t = d, a = L, R != null ? ya(e, !!t, R, !1) : !!a != !!t && (i != null ? ya(e, !!t, i, !0) : ya(e, !!t, t ? [] : "", !1));
          return;
        case "textarea":
          L = R = null;
          for (h in a)
            if (o = a[h], a.hasOwnProperty(h) && o != null && !i.hasOwnProperty(h))
              switch (h) {
                case "value":
                  break;
                case "children":
                  break;
                default:
                  Bt(e, t, h, null, i, o);
              }
          for (d in i)
            if (o = i[d], f = a[d], i.hasOwnProperty(d) && (o != null || f != null))
              switch (d) {
                case "value":
                  R = o;
                  break;
                case "defaultValue":
                  L = o;
                  break;
                case "children":
                  break;
                case "dangerouslySetInnerHTML":
                  if (o != null)
                    throw Error(
                      "`dangerouslySetInnerHTML` does not make sense on <textarea>."
                    );
                  break;
                default:
                  o !== f && Bt(e, t, d, o, i, f);
              }
          An(e, R, L);
          return;
        case "option":
          for (var re in a)
            R = a[re], a.hasOwnProperty(re) && R != null && !i.hasOwnProperty(re) && (re === "selected" ? e.selected = !1 : Bt(
              e,
              t,
              re,
              null,
              i,
              R
            ));
          for (y in i)
            R = i[y], L = a[y], i.hasOwnProperty(y) && R !== L && (R != null || L != null) && (y === "selected" ? e.selected = R && typeof R != "function" && typeof R != "symbol" : Bt(
              e,
              t,
              y,
              R,
              i,
              L
            ));
          return;
        case "img":
        case "link":
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
        case "menuitem":
          for (var ye in a)
            R = a[ye], a.hasOwnProperty(ye) && R != null && !i.hasOwnProperty(ye) && Bt(
              e,
              t,
              ye,
              null,
              i,
              R
            );
          for (p in i)
            if (R = i[p], L = a[p], i.hasOwnProperty(p) && R !== L && (R != null || L != null))
              switch (p) {
                case "children":
                case "dangerouslySetInnerHTML":
                  if (R != null)
                    throw Error(
                      t + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                    );
                  break;
                default:
                  Bt(
                    e,
                    t,
                    p,
                    R,
                    i,
                    L
                  );
              }
          return;
        default:
          if (kn(t)) {
            for (var nl in a)
              R = a[nl], a.hasOwnProperty(nl) && R !== void 0 && !i.hasOwnProperty(nl) && Pf(
                e,
                t,
                nl,
                void 0,
                i,
                R
              );
            for (M in i)
              R = i[M], L = a[M], !i.hasOwnProperty(M) || R === L || R === void 0 && L === void 0 || Pf(
                e,
                t,
                M,
                R,
                i,
                L
              );
            return;
          }
      }
      for (var Rt in a)
        R = a[Rt], a.hasOwnProperty(Rt) && R != null && !i.hasOwnProperty(Rt) && Bt(e, t, Rt, null, i, R);
      for (U in i)
        R = i[U], L = a[U], !i.hasOwnProperty(U) || R === L || R == null && L == null || Bt(e, t, U, R, i, L);
    }
    function cc(e) {
      switch (e) {
        case "class":
          return "className";
        case "for":
          return "htmlFor";
        default:
          return e;
      }
    }
    function Kc(e) {
      var t = {};
      e = e.style;
      for (var a = 0; a < e.length; a++) {
        var i = e[a];
        t[i] = e.getPropertyValue(i);
      }
      return t;
    }
    function bi(e, t, a) {
      if (t != null && typeof t != "object")
        console.error(
          "The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX."
        );
      else {
        var i, o = i = "", f;
        for (f in t)
          if (t.hasOwnProperty(f)) {
            var d = t[f];
            d != null && typeof d != "boolean" && d !== "" && (f.indexOf("--") === 0 ? (ll(d, f), i += o + f + ":" + ("" + d).trim()) : typeof d != "number" || d === 0 || Te.has(f) ? (ll(d, f), i += o + f.replace(J, "-$1").toLowerCase().replace(be, "-ms-") + ":" + ("" + d).trim()) : i += o + f.replace(J, "-$1").toLowerCase().replace(be, "-ms-") + ":" + d + "px", o = ";");
          }
        i = i || null, t = e.getAttribute("style"), t !== i && (i = wu(i), wu(t) !== i && (a.style = Kc(e)));
      }
    }
    function hn(e, t, a, i, o, f) {
      if (o.delete(a), e = e.getAttribute(a), e === null)
        switch (typeof i) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            return;
        }
      else if (i != null)
        switch (typeof i) {
          case "function":
          case "symbol":
          case "boolean":
            break;
          default:
            if (rt(i, t), e === "" + i)
              return;
        }
      yl(t, e, i, f);
    }
    function Hh(e, t, a, i, o, f) {
      if (o.delete(a), e = e.getAttribute(a), e === null) {
        switch (typeof i) {
          case "function":
          case "symbol":
            return;
        }
        if (!i) return;
      } else
        switch (typeof i) {
          case "function":
          case "symbol":
            break;
          default:
            if (i) return;
        }
      yl(t, e, i, f);
    }
    function xh(e, t, a, i, o, f) {
      if (o.delete(a), e = e.getAttribute(a), e === null)
        switch (typeof i) {
          case "undefined":
          case "function":
          case "symbol":
            return;
        }
      else if (i != null)
        switch (typeof i) {
          case "function":
          case "symbol":
            break;
          default:
            if (rt(i, a), e === "" + i)
              return;
        }
      yl(t, e, i, f);
    }
    function er(e, t, a, i, o, f) {
      if (o.delete(a), e = e.getAttribute(a), e === null)
        switch (typeof i) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            return;
          default:
            if (isNaN(i)) return;
        }
      else if (i != null)
        switch (typeof i) {
          case "function":
          case "symbol":
          case "boolean":
            break;
          default:
            if (!isNaN(i) && (rt(i, t), e === "" + i))
              return;
        }
      yl(t, e, i, f);
    }
    function qs(e, t, a, i, o, f) {
      if (o.delete(a), e = e.getAttribute(a), e === null)
        switch (typeof i) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            return;
        }
      else if (i != null)
        switch (typeof i) {
          case "function":
          case "symbol":
          case "boolean":
            break;
          default:
            if (rt(i, t), a = bc("" + i), e === a)
              return;
        }
      yl(t, e, i, f);
    }
    function mn(e, t, a, i) {
      for (var o = {}, f = /* @__PURE__ */ new Set(), d = e.attributes, h = 0; h < d.length; h++)
        switch (d[h].name.toLowerCase()) {
          case "value":
            break;
          case "checked":
            break;
          case "selected":
            break;
          default:
            f.add(d[h].name);
        }
      if (kn(t)) {
        for (var y in a)
          if (a.hasOwnProperty(y)) {
            var p = a[y];
            if (p != null) {
              if (Oi.hasOwnProperty(y))
                typeof p != "function" && pl(y, p);
              else if (a.suppressHydrationWarning !== !0)
                switch (y) {
                  case "children":
                    typeof p != "string" && typeof p != "number" || yl(
                      "children",
                      e.textContent,
                      p,
                      o
                    );
                    continue;
                  case "suppressContentEditableWarning":
                  case "suppressHydrationWarning":
                  case "defaultValue":
                  case "defaultChecked":
                  case "innerHTML":
                  case "ref":
                    continue;
                  case "dangerouslySetInnerHTML":
                    d = e.innerHTML, p = p ? p.__html : void 0, p != null && (p = Uh(e, p), yl(
                      y,
                      d,
                      p,
                      o
                    ));
                    continue;
                  case "style":
                    f.delete(y), bi(e, p, o);
                    continue;
                  case "offsetParent":
                  case "offsetTop":
                  case "offsetLeft":
                  case "offsetWidth":
                  case "offsetHeight":
                  case "isContentEditable":
                  case "outerText":
                  case "outerHTML":
                    f.delete(y.toLowerCase()), console.error(
                      "Assignment to read-only property will result in a no-op: `%s`",
                      y
                    );
                    continue;
                  case "className":
                    f.delete("class"), d = En(
                      e,
                      "class",
                      p
                    ), yl(
                      "className",
                      d,
                      p,
                      o
                    );
                    continue;
                  default:
                    i.context === hf && t !== "svg" && t !== "math" ? f.delete(y.toLowerCase()) : f.delete(y), d = En(
                      e,
                      y,
                      p
                    ), yl(
                      y,
                      d,
                      p,
                      o
                    );
                }
            }
          }
      } else
        for (p in a)
          if (a.hasOwnProperty(p) && (y = a[p], y != null)) {
            if (Oi.hasOwnProperty(p))
              typeof y != "function" && pl(p, y);
            else if (a.suppressHydrationWarning !== !0)
              switch (p) {
                case "children":
                  typeof y != "string" && typeof y != "number" || yl(
                    "children",
                    e.textContent,
                    y,
                    o
                  );
                  continue;
                case "suppressContentEditableWarning":
                case "suppressHydrationWarning":
                case "value":
                case "checked":
                case "selected":
                case "defaultValue":
                case "defaultChecked":
                case "innerHTML":
                case "ref":
                  continue;
                case "dangerouslySetInnerHTML":
                  d = e.innerHTML, y = y ? y.__html : void 0, y != null && (y = Uh(e, y), d !== y && (o[p] = { __html: d }));
                  continue;
                case "className":
                  hn(
                    e,
                    p,
                    "class",
                    y,
                    f,
                    o
                  );
                  continue;
                case "tabIndex":
                  hn(
                    e,
                    p,
                    "tabindex",
                    y,
                    f,
                    o
                  );
                  continue;
                case "style":
                  f.delete(p), bi(e, y, o);
                  continue;
                case "multiple":
                  f.delete(p), yl(
                    p,
                    e.multiple,
                    y,
                    o
                  );
                  continue;
                case "muted":
                  f.delete(p), yl(
                    p,
                    e.muted,
                    y,
                    o
                  );
                  continue;
                case "autoFocus":
                  f.delete("autofocus"), yl(
                    p,
                    e.autofocus,
                    y,
                    o
                  );
                  continue;
                case "data":
                  if (t !== "object") {
                    f.delete(p), d = e.getAttribute("data"), yl(
                      p,
                      d,
                      y,
                      o
                    );
                    continue;
                  }
                case "src":
                case "href":
                  if (!(y !== "" || t === "a" && p === "href" || t === "object" && p === "data")) {
                    console.error(
                      p === "src" ? 'An empty string ("") was passed to the %s attribute. This may cause the browser to download the whole page again over the network. To fix this, either do not render the element at all or pass null to %s instead of an empty string.' : 'An empty string ("") was passed to the %s attribute. To fix this, either do not render the element at all or pass null to %s instead of an empty string.',
                      p,
                      p
                    );
                    continue;
                  }
                  qs(
                    e,
                    p,
                    p,
                    y,
                    f,
                    o
                  );
                  continue;
                case "action":
                case "formAction":
                  if (d = e.getAttribute(p), typeof y == "function") {
                    f.delete(p.toLowerCase()), p === "formAction" ? (f.delete("name"), f.delete("formenctype"), f.delete("formmethod"), f.delete("formtarget")) : (f.delete("enctype"), f.delete("method"), f.delete("target"));
                    continue;
                  } else if (d === ST) {
                    f.delete(p.toLowerCase()), yl(
                      p,
                      "function",
                      y,
                      o
                    );
                    continue;
                  }
                  qs(
                    e,
                    p,
                    p.toLowerCase(),
                    y,
                    f,
                    o
                  );
                  continue;
                case "xlinkHref":
                  qs(
                    e,
                    p,
                    "xlink:href",
                    y,
                    f,
                    o
                  );
                  continue;
                case "contentEditable":
                  xh(
                    e,
                    p,
                    "contenteditable",
                    y,
                    f,
                    o
                  );
                  continue;
                case "spellCheck":
                  xh(
                    e,
                    p,
                    "spellcheck",
                    y,
                    f,
                    o
                  );
                  continue;
                case "draggable":
                case "autoReverse":
                case "externalResourcesRequired":
                case "focusable":
                case "preserveAlpha":
                  xh(
                    e,
                    p,
                    p,
                    y,
                    f,
                    o
                  );
                  continue;
                case "allowFullScreen":
                case "async":
                case "autoPlay":
                case "controls":
                case "default":
                case "defer":
                case "disabled":
                case "disablePictureInPicture":
                case "disableRemotePlayback":
                case "formNoValidate":
                case "hidden":
                case "loop":
                case "noModule":
                case "noValidate":
                case "open":
                case "playsInline":
                case "readOnly":
                case "required":
                case "reversed":
                case "scoped":
                case "seamless":
                case "itemScope":
                  Hh(
                    e,
                    p,
                    p.toLowerCase(),
                    y,
                    f,
                    o
                  );
                  continue;
                case "capture":
                case "download":
                  e: {
                    h = e;
                    var M = d = p, U = o;
                    if (f.delete(M), h = h.getAttribute(M), h === null)
                      switch (typeof y) {
                        case "undefined":
                        case "function":
                        case "symbol":
                          break e;
                        default:
                          if (y === !1) break e;
                      }
                    else if (y != null)
                      switch (typeof y) {
                        case "function":
                        case "symbol":
                          break;
                        case "boolean":
                          if (y === !0 && h === "") break e;
                          break;
                        default:
                          if (rt(y, d), h === "" + y)
                            break e;
                      }
                    yl(
                      d,
                      h,
                      y,
                      U
                    );
                  }
                  continue;
                case "cols":
                case "rows":
                case "size":
                case "span":
                  e: {
                    if (h = e, M = d = p, U = o, f.delete(M), h = h.getAttribute(M), h === null)
                      switch (typeof y) {
                        case "undefined":
                        case "function":
                        case "symbol":
                        case "boolean":
                          break e;
                        default:
                          if (isNaN(y) || 1 > y) break e;
                      }
                    else if (y != null)
                      switch (typeof y) {
                        case "function":
                        case "symbol":
                        case "boolean":
                          break;
                        default:
                          if (!(isNaN(y) || 1 > y) && (rt(y, d), h === "" + y))
                            break e;
                      }
                    yl(
                      d,
                      h,
                      y,
                      U
                    );
                  }
                  continue;
                case "rowSpan":
                  er(
                    e,
                    p,
                    "rowspan",
                    y,
                    f,
                    o
                  );
                  continue;
                case "start":
                  er(
                    e,
                    p,
                    p,
                    y,
                    f,
                    o
                  );
                  continue;
                case "xHeight":
                  hn(
                    e,
                    p,
                    "x-height",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xlinkActuate":
                  hn(
                    e,
                    p,
                    "xlink:actuate",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xlinkArcrole":
                  hn(
                    e,
                    p,
                    "xlink:arcrole",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xlinkRole":
                  hn(
                    e,
                    p,
                    "xlink:role",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xlinkShow":
                  hn(
                    e,
                    p,
                    "xlink:show",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xlinkTitle":
                  hn(
                    e,
                    p,
                    "xlink:title",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xlinkType":
                  hn(
                    e,
                    p,
                    "xlink:type",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xmlBase":
                  hn(
                    e,
                    p,
                    "xml:base",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xmlLang":
                  hn(
                    e,
                    p,
                    "xml:lang",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xmlSpace":
                  hn(
                    e,
                    p,
                    "xml:space",
                    y,
                    f,
                    o
                  );
                  continue;
                case "inert":
                  y !== "" || wv[p] || (wv[p] = !0, console.error(
                    "Received an empty string for a boolean attribute `%s`. This will treat the attribute as if it were false. Either pass `false` to silence this warning, or pass `true` if you used an empty string in earlier versions of React to indicate this attribute is true.",
                    p
                  )), Hh(
                    e,
                    p,
                    p,
                    y,
                    f,
                    o
                  );
                  continue;
                default:
                  if (!(2 < p.length) || p[0] !== "o" && p[0] !== "O" || p[1] !== "n" && p[1] !== "N") {
                    h = Qr(p), d = !1, i.context === hf && t !== "svg" && t !== "math" ? f.delete(h.toLowerCase()) : (M = p.toLowerCase(), M = Lu.hasOwnProperty(
                      M
                    ) && Lu[M] || null, M !== null && M !== p && (d = !0, f.delete(M)), f.delete(h));
                    e: if (M = e, U = h, h = y, ja(U))
                      if (M.hasAttribute(U))
                        M = M.getAttribute(
                          U
                        ), rt(
                          h,
                          U
                        ), h = M === "" + h ? h : M;
                      else {
                        switch (typeof h) {
                          case "function":
                          case "symbol":
                            break e;
                          case "boolean":
                            if (M = U.toLowerCase().slice(0, 5), M !== "data-" && M !== "aria-")
                              break e;
                        }
                        h = h === void 0 ? void 0 : null;
                      }
                    else h = void 0;
                    d || yl(
                      p,
                      h,
                      y,
                      o
                    );
                  }
              }
          }
      return 0 < f.size && a.suppressHydrationWarning !== !0 && ws(e, f, o), Object.keys(o).length === 0 ? null : o;
    }
    function dg(e, t) {
      switch (e.length) {
        case 0:
          return "";
        case 1:
          return e[0];
        case 2:
          return e[0] + " " + t + " " + e[1];
        default:
          return e.slice(0, -1).join(", ") + ", " + t + " " + e[e.length - 1];
      }
    }
    function tn(e) {
      switch (e) {
        case "css":
        case "script":
        case "font":
        case "img":
        case "image":
        case "input":
        case "link":
          return !0;
        default:
          return !1;
      }
    }
    function hg() {
      if (typeof performance.getEntriesByType == "function") {
        for (var e = 0, t = 0, a = performance.getEntriesByType("resource"), i = 0; i < a.length; i++) {
          var o = a[i], f = o.transferSize, d = o.initiatorType, h = o.duration;
          if (f && h && tn(d)) {
            for (d = 0, h = o.responseEnd, i += 1; i < a.length; i++) {
              var y = a[i], p = y.startTime;
              if (p > h) break;
              var M = y.transferSize, U = y.initiatorType;
              M && tn(U) && (y = y.responseEnd, d += M * (y < h ? 1 : (h - p) / (y - p)));
            }
            if (--i, t += 8 * (f + d) / (o.duration / 1e3), e++, 10 < e) break;
          }
        }
        if (0 < e) return t / e / 1e6;
      }
      return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5;
    }
    function js(e) {
      return e.nodeType === 9 ? e : e.ownerDocument;
    }
    function mg(e) {
      switch (e) {
        case ct:
          return xm;
        case et:
          return jv;
        default:
          return hf;
      }
    }
    function oc(e, t) {
      if (e === hf)
        switch (t) {
          case "svg":
            return xm;
          case "math":
            return jv;
          default:
            return hf;
        }
      return e === xm && t === "foreignObject" ? hf : e;
    }
    function tr(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function l0() {
      var e = window.event;
      return e && e.type === "popstate" ? e === vS ? !1 : (vS = e, !0) : (vS = null, !1);
    }
    function Ei() {
      var e = window.event;
      return e && e !== vp ? e.type : null;
    }
    function lr() {
      var e = window.event;
      return e && e !== vp ? e.timeStamp : -1.1;
    }
    function yg(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function pg(e, t, a) {
      switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && e.focus();
          break;
        case "img":
          a.src ? e.src = a.src : a.srcSet && (e.srcset = a.srcSet);
      }
    }
    function gg() {
    }
    function Nh(e, t, a, i) {
      Zl(e, t, a, i), e[an] = i;
    }
    function Bh(e) {
      vu(e, "");
    }
    function c1(e, t, a) {
      e.nodeValue = a;
    }
    function vg(e) {
      if (!e.__reactWarnedAboutChildrenConflict) {
        var t = e[an] || null;
        if (t !== null) {
          var a = ce(e);
          a !== null && (typeof t.children == "string" || typeof t.children == "number" ? (e.__reactWarnedAboutChildrenConflict = !0, fe(a, function() {
            console.error(
              'Cannot use a ref on a React element as a container to `createRoot` or `createPortal` if that element also sets "children" text content using React. It should be a leaf with no children. Otherwise it\'s ambiguous which children should be used.'
            );
          })) : t.dangerouslySetInnerHTML != null && (e.__reactWarnedAboutChildrenConflict = !0, fe(a, function() {
            console.error(
              'Cannot use a ref on a React element as a container to `createRoot` or `createPortal` if that element also sets "dangerouslySetInnerHTML" using React. It should be a leaf with no children. Otherwise it\'s ambiguous which children should be used.'
            );
          })));
        }
      }
    }
    function $c(e) {
      return e === "head";
    }
    function Sg(e, t) {
      e.removeChild(t);
    }
    function bg(e, t) {
      (e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e).removeChild(t);
    }
    function Vo(e, t) {
      var a = t, i = 0;
      do {
        var o = a.nextSibling;
        if (e.removeChild(a), o && o.nodeType === 8)
          if (a = o.data, a === gp || a === qv) {
            if (i === 0) {
              e.removeChild(o), Ko(t);
              return;
            }
            i--;
          } else if (a === pp || a === jr || a === Td || a === Hm || a === Ed)
            i++;
          else if (a === ET)
            rc(
              e.ownerDocument.documentElement
            );
          else if (a === AT) {
            a = e.ownerDocument.head, rc(a);
            for (var f = a.firstChild; f; ) {
              var d = f.nextSibling, h = f.nodeName;
              f[vr] || h === "SCRIPT" || h === "STYLE" || h === "LINK" && f.rel.toLowerCase() === "stylesheet" || a.removeChild(f), f = d;
            }
          } else
            a === TT && rc(e.ownerDocument.body);
        a = o;
      } while (a);
      Ko(t);
    }
    function Gs(e, t) {
      var a = e;
      e = 0;
      do {
        var i = a.nextSibling;
        if (a.nodeType === 1 ? t ? (a._stashedDisplay = a.style.display, a.style.display = "none") : (a.style.display = a._stashedDisplay || "", a.getAttribute("style") === "" && a.removeAttribute("style")) : a.nodeType === 3 && (t ? (a._stashedText = a.nodeValue, a.nodeValue = "") : a.nodeValue = a._stashedText || ""), i && i.nodeType === 8)
          if (a = i.data, a === gp) {
            if (e === 0) break;
            e--;
          } else
            a !== pp && a !== jr && a !== Td && a !== Hm || e++;
        a = i;
      } while (a);
    }
    function Eg(e) {
      Gs(e, !0);
    }
    function Tg(e) {
      e = e.style, typeof e.setProperty == "function" ? e.setProperty("display", "none", "important") : e.display = "none";
    }
    function Ag(e) {
      e.nodeValue = "";
    }
    function Rg(e) {
      Gs(e, !1);
    }
    function _g(e, t) {
      t = t[RT], t = t != null && t.hasOwnProperty("display") ? t.display : null, e.style.display = t == null || typeof t == "boolean" ? "" : ("" + t).trim();
    }
    function Og(e, t) {
      e.nodeValue = t;
    }
    function ar(e) {
      var t = e.firstChild;
      for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
        var a = t;
        switch (t = t.nextSibling, a.nodeName) {
          case "HTML":
          case "HEAD":
          case "BODY":
            ar(a), x(a);
            continue;
          case "SCRIPT":
          case "STYLE":
            continue;
          case "LINK":
            if (a.rel.toLowerCase() === "stylesheet") continue;
        }
        e.removeChild(a);
      }
    }
    function Dg(e, t, a, i) {
      for (; e.nodeType === 1; ) {
        var o = a;
        if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
          if (!i && (e.nodeName !== "INPUT" || e.type !== "hidden"))
            break;
        } else if (i) {
          if (!e[vr])
            switch (t) {
              case "meta":
                if (!e.hasAttribute("itemprop")) break;
                return e;
              case "link":
                if (f = e.getAttribute("rel"), f === "stylesheet" && e.hasAttribute("data-precedence"))
                  break;
                if (f !== o.rel || e.getAttribute("href") !== (o.href == null || o.href === "" ? null : o.href) || e.getAttribute("crossorigin") !== (o.crossOrigin == null ? null : o.crossOrigin) || e.getAttribute("title") !== (o.title == null ? null : o.title))
                  break;
                return e;
              case "style":
                if (e.hasAttribute("data-precedence")) break;
                return e;
              case "script":
                if (f = e.getAttribute("src"), (f !== (o.src == null ? null : o.src) || e.getAttribute("type") !== (o.type == null ? null : o.type) || e.getAttribute("crossorigin") !== (o.crossOrigin == null ? null : o.crossOrigin)) && f && e.hasAttribute("async") && !e.hasAttribute("itemprop"))
                  break;
                return e;
              default:
                return e;
            }
        } else if (t === "input" && e.type === "hidden") {
          rt(o.name, "name");
          var f = o.name == null ? null : "" + o.name;
          if (o.type === "hidden" && e.getAttribute("name") === f)
            return e;
        } else return e;
        if (e = wn(e.nextSibling), e === null) break;
      }
      return null;
    }
    function zg(e, t, a) {
      if (t === "") return null;
      for (; e.nodeType !== 3; )
        if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !a || (e = wn(e.nextSibling), e === null)) return null;
      return e;
    }
    function Xt(e, t) {
      for (; e.nodeType !== 8; )
        if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = wn(e.nextSibling), e === null)) return null;
      return e;
    }
    function Ls(e) {
      return e.data === jr || e.data === Td;
    }
    function a0(e) {
      return e.data === Hm || e.data === jr && e.ownerDocument.readyState !== g2;
    }
    function Mg(e, t) {
      var a = e.ownerDocument;
      if (e.data === Td)
        e._reactRetry = t;
      else if (e.data !== jr || a.readyState !== g2)
        t();
      else {
        var i = function() {
          t(), a.removeEventListener("DOMContentLoaded", i);
        };
        a.addEventListener("DOMContentLoaded", i), e._reactRetry = i;
      }
    }
    function wn(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
          if (t = e.data, t === pp || t === Hm || t === jr || t === Td || t === Ed || t === yS || t === p2)
            break;
          if (t === gp || t === qv)
            return null;
        }
      }
      return e;
    }
    function Cg(e) {
      if (e.nodeType === 1) {
        for (var t = e.nodeName.toLowerCase(), a = {}, i = e.attributes, o = 0; o < i.length; o++) {
          var f = i[o];
          a[cc(f.name)] = f.name.toLowerCase() === "style" ? Kc(e) : f.value;
        }
        return { type: t, props: a };
      }
      return e.nodeType === 8 ? e.data === Ed ? { type: "Activity", props: {} } : { type: "Suspense", props: {} } : e.nodeValue;
    }
    function Ug(e, t, a) {
      return a === null || a[bT] !== !0 ? (e.nodeValue === t ? e = null : (t = wu(t), e = wu(e.nodeValue) === t ? null : e.nodeValue), e) : null;
    }
    function nr(e) {
      e = e.nextSibling;
      for (var t = 0; e; ) {
        if (e.nodeType === 8) {
          var a = e.data;
          if (a === gp || a === qv) {
            if (t === 0)
              return wn(e.nextSibling);
            t--;
          } else
            a !== pp && a !== Hm && a !== jr && a !== Td && a !== Ed || t++;
        }
        e = e.nextSibling;
      }
      return null;
    }
    function Qo(e) {
      e = e.previousSibling;
      for (var t = 0; e; ) {
        if (e.nodeType === 8) {
          var a = e.data;
          if (a === pp || a === Hm || a === jr || a === Td || a === Ed) {
            if (t === 0) return e;
            t--;
          } else
            a !== gp && a !== qv || t++;
        }
        e = e.previousSibling;
      }
      return null;
    }
    function n0(e) {
      Ko(e);
    }
    function Yh(e) {
      Ko(e);
    }
    function u0(e) {
      Ko(e);
    }
    function fc(e, t, a, i, o) {
      switch (o && Vi(e, i.ancestorInfo), t = js(a), e) {
        case "html":
          if (e = t.documentElement, !e)
            throw Error(
              "React expected an <html> element (document.documentElement) to exist in the Document but one was not found. React never removes the documentElement for any Document it renders into so the cause is likely in some other script running on this page."
            );
          return e;
        case "head":
          if (e = t.head, !e)
            throw Error(
              "React expected a <head> element (document.head) to exist in the Document but one was not found. React never removes the head for any Document it renders into so the cause is likely in some other script running on this page."
            );
          return e;
        case "body":
          if (e = t.body, !e)
            throw Error(
              "React expected a <body> element (document.body) to exist in the Document but one was not found. React never removes the body for any Document it renders into so the cause is likely in some other script running on this page."
            );
          return e;
        default:
          throw Error(
            "resolveSingletonInstance was called with an element type that is not supported. This is a bug in React."
          );
      }
    }
    function Ti(e, t, a, i) {
      if (!a[dc] && ce(a)) {
        var o = a.tagName.toLowerCase();
        console.error(
          "You are mounting a new %s component when a previous one has not first unmounted. It is an error to render more than one %s component at a time and attributes and children of these components will likely fail in unpredictable ways. Please only render a single instance of <%s> and if you need to mount a new one, ensure any previous ones have unmounted first.",
          o,
          o,
          o
        );
      }
      switch (e) {
        case "html":
        case "head":
        case "body":
          break;
        default:
          console.error(
            "acquireSingletonInstance was called with an element type that is not supported. This is a bug in React."
          );
      }
      for (o = a.attributes; o.length; )
        a.removeAttributeNode(o[0]);
      ol(a, e, t), a[fl] = i, a[an] = t;
    }
    function rc(e) {
      for (var t = e.attributes; t.length; )
        e.removeAttributeNode(t[0]);
      x(e);
    }
    function wh(e) {
      return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
    }
    function i0(e, t, a) {
      var i = Nm;
      if (i && typeof t == "string" && t) {
        var o = Re(t);
        o = 'link[rel="' + e + '"][href="' + o + '"]', typeof a == "string" && (o += '[crossorigin="' + a + '"]'), A2.has(o) || (A2.add(o), e = { rel: e, crossOrigin: a, href: t }, i.querySelector(o) === null && (t = i.createElement("link"), ol(t, "link", e), Ee(t), i.head.appendChild(t)));
      }
    }
    function c0(e, t, a, i) {
      var o = (o = qn.current) ? wh(o) : null;
      if (!o)
        throw Error(
          '"resourceRoot" was expected to exist. This is a bug in React.'
        );
      switch (e) {
        case "meta":
        case "title":
          return null;
        case "style":
          return typeof a.precedence == "string" && typeof a.href == "string" ? (a = Zo(a.href), t = Me(o).hoistableStyles, i = t.get(a), i || (i = {
            type: "style",
            instance: null,
            count: 0,
            state: null
          }, t.set(a, i)), i) : { type: "void", instance: null, count: 0, state: null };
        case "link":
          if (a.rel === "stylesheet" && typeof a.href == "string" && typeof a.precedence == "string") {
            e = Zo(a.href);
            var f = Me(o).hoistableStyles, d = f.get(e);
            if (!d && (o = o.ownerDocument || o, d = {
              type: "stylesheet",
              instance: null,
              count: 0,
              state: { loading: Rd, preload: null }
            }, f.set(e, d), (f = o.querySelector(
              Vs(e)
            )) && !f._p && (d.instance = f, d.state.loading = Sp | wi), !qi.has(e))) {
              var h = {
                rel: "preload",
                as: "style",
                href: a.href,
                crossOrigin: a.crossOrigin,
                integrity: a.integrity,
                media: a.media,
                hrefLang: a.hrefLang,
                referrerPolicy: a.referrerPolicy
              };
              qi.set(e, h), f || Hg(
                o,
                e,
                h,
                d.state
              );
            }
            if (t && i === null)
              throw a = `

  - ` + Xs(t) + `
  + ` + Xs(a), Error(
                "Expected <link> not to update to be updated to a stylesheet with precedence. Check the `rel`, `href`, and `precedence` props of this component. Alternatively, check whether two different <link> components render in the same slot or share the same key." + a
              );
            return d;
          }
          if (t && i !== null)
            throw a = `

  - ` + Xs(t) + `
  + ` + Xs(a), Error(
              "Expected stylesheet with precedence to not be updated to a different kind of <link>. Check the `rel`, `href`, and `precedence` props of this component. Alternatively, check whether two different <link> components render in the same slot or share the same key." + a
            );
          return null;
        case "script":
          return t = a.async, a = a.src, typeof a == "string" && t && typeof t != "function" && typeof t != "symbol" ? (a = Jo(a), t = Me(o).hoistableScripts, i = t.get(a), i || (i = {
            type: "script",
            instance: null,
            count: 0,
            state: null
          }, t.set(a, i)), i) : { type: "void", instance: null, count: 0, state: null };
        default:
          throw Error(
            'getResource encountered a type it did not expect: "' + e + '". this is a bug in React.'
          );
      }
    }
    function Xs(e) {
      var t = 0, a = "<link";
      return typeof e.rel == "string" ? (t++, a += ' rel="' + e.rel + '"') : jn.call(e, "rel") && (t++, a += ' rel="' + (e.rel === null ? "null" : "invalid type " + typeof e.rel) + '"'), typeof e.href == "string" ? (t++, a += ' href="' + e.href + '"') : jn.call(e, "href") && (t++, a += ' href="' + (e.href === null ? "null" : "invalid type " + typeof e.href) + '"'), typeof e.precedence == "string" ? (t++, a += ' precedence="' + e.precedence + '"') : jn.call(e, "precedence") && (t++, a += " precedence={" + (e.precedence === null ? "null" : "invalid type " + typeof e.precedence) + "}"), Object.getOwnPropertyNames(e).length > t && (a += " ..."), a + " />";
    }
    function Zo(e) {
      return 'href="' + Re(e) + '"';
    }
    function Vs(e) {
      return 'link[rel="stylesheet"][' + e + "]";
    }
    function qh(e) {
      return st({}, e, {
        "data-precedence": e.precedence,
        precedence: null
      });
    }
    function Hg(e, t, a, i) {
      e.querySelector(
        'link[rel="preload"][as="style"][' + t + "]"
      ) ? i.loading = Sp : (t = e.createElement("link"), i.preload = t, t.addEventListener("load", function() {
        return i.loading |= Sp;
      }), t.addEventListener("error", function() {
        return i.loading |= E2;
      }), ol(t, "link", a), Ee(t), e.head.appendChild(t));
    }
    function Jo(e) {
      return '[src="' + Re(e) + '"]';
    }
    function Qs(e) {
      return "script[async]" + e;
    }
    function jh(e, t, a) {
      if (t.count++, t.instance === null)
        switch (t.type) {
          case "style":
            var i = e.querySelector(
              'style[data-href~="' + Re(a.href) + '"]'
            );
            if (i)
              return t.instance = i, Ee(i), i;
            var o = st({}, a, {
              "data-href": a.href,
              "data-precedence": a.precedence,
              href: null,
              precedence: null
            });
            return i = (e.ownerDocument || e).createElement("style"), Ee(i), ol(i, "style", o), ur(i, a.precedence, e), t.instance = i;
          case "stylesheet":
            o = Zo(a.href);
            var f = e.querySelector(
              Vs(o)
            );
            if (f)
              return t.state.loading |= wi, t.instance = f, Ee(f), f;
            i = qh(a), (o = qi.get(o)) && o0(i, o), f = (e.ownerDocument || e).createElement("link"), Ee(f);
            var d = f;
            return d._p = new Promise(function(h, y) {
              d.onload = h, d.onerror = y;
            }), ol(f, "link", i), t.state.loading |= wi, ur(f, a.precedence, e), t.instance = f;
          case "script":
            return f = Jo(a.src), (o = e.querySelector(
              Qs(f)
            )) ? (t.instance = o, Ee(o), o) : (i = a, (o = qi.get(f)) && (i = st({}, a), f0(i, o)), e = e.ownerDocument || e, o = e.createElement("script"), Ee(o), ol(o, "link", i), e.head.appendChild(o), t.instance = o);
          case "void":
            return null;
          default:
            throw Error(
              'acquireResource encountered a resource type it did not expect: "' + t.type + '". this is a bug in React.'
            );
        }
      else
        t.type === "stylesheet" && (t.state.loading & wi) === Rd && (i = t.instance, t.state.loading |= wi, ur(i, a.precedence, e));
      return t.instance;
    }
    function ur(e, t, a) {
      for (var i = a.querySelectorAll(
        'link[rel="stylesheet"][data-precedence],style[data-precedence]'
      ), o = i.length ? i[i.length - 1] : null, f = o, d = 0; d < i.length; d++) {
        var h = i[d];
        if (h.dataset.precedence === t) f = h;
        else if (f !== o) break;
      }
      f ? f.parentNode.insertBefore(e, f.nextSibling) : (t = a.nodeType === 9 ? a.head : a, t.insertBefore(e, t.firstChild));
    }
    function o0(e, t) {
      e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
    }
    function f0(e, t) {
      e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
    }
    function ir(e, t, a) {
      if (Gv === null) {
        var i = /* @__PURE__ */ new Map(), o = Gv = /* @__PURE__ */ new Map();
        o.set(a, i);
      } else
        o = Gv, i = o.get(a), i || (i = /* @__PURE__ */ new Map(), o.set(a, i));
      if (i.has(e)) return i;
      for (i.set(e, null), a = a.getElementsByTagName(e), o = 0; o < a.length; o++) {
        var f = a[o];
        if (!(f[vr] || f[fl] || e === "link" && f.getAttribute("rel") === "stylesheet") && f.namespaceURI !== ct) {
          var d = f.getAttribute(t) || "";
          d = e + d;
          var h = i.get(d);
          h ? h.push(f) : i.set(d, [f]);
        }
      }
      return i;
    }
    function xg(e, t, a) {
      e = e.ownerDocument || e, e.head.insertBefore(
        a,
        t === "title" ? e.querySelector("head > title") : null
      );
    }
    function Ng(e, t, a) {
      var i = !a.ancestorInfo.containerTagInScope;
      if (a.context === xm || t.itemProp != null)
        return !i || t.itemProp == null || e !== "meta" && e !== "title" && e !== "style" && e !== "link" && e !== "script" || console.error(
          "Cannot render a <%s> outside the main document if it has an `itemProp` prop. `itemProp` suggests the tag belongs to an `itemScope` which can appear anywhere in the DOM. If you were intending for React to hoist this <%s> remove the `itemProp` prop. Otherwise, try moving this tag into the <head> or <body> of the Document.",
          e,
          e
        ), !1;
      switch (e) {
        case "meta":
        case "title":
          return !0;
        case "style":
          if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "") {
            i && console.error(
              'Cannot render a <style> outside the main document without knowing its precedence and a unique href key. React can hoist and deduplicate <style> tags if you provide a `precedence` prop along with an `href` prop that does not conflict with the `href` values used in any other hoisted <style> or <link rel="stylesheet" ...> tags.  Note that hoisting <style> tags is considered an advanced feature that most will not use directly. Consider moving the <style> tag to the <head> or consider adding a `precedence="default"` and `href="some unique resource identifier"`.'
            );
            break;
          }
          return !0;
        case "link":
          if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError) {
            if (t.rel === "stylesheet" && typeof t.precedence == "string") {
              e = t.href;
              var o = t.onError, f = t.disabled;
              a = [], t.onLoad && a.push("`onLoad`"), o && a.push("`onError`"), f != null && a.push("`disabled`"), o = dg(a, "and"), o += a.length === 1 ? " prop" : " props", f = a.length === 1 ? "an " + o : "the " + o, a.length && console.error(
                'React encountered a <link rel="stylesheet" href="%s" ... /> with a `precedence` prop that also included %s. The presence of loading and error handlers indicates an intent to manage the stylesheet loading state from your from your Component code and React will not hoist or deduplicate this stylesheet. If your intent was to have React hoist and deduplciate this stylesheet using the `precedence` prop remove the %s, otherwise remove the `precedence` prop.',
                e,
                f,
                o
              );
            }
            i && (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" ? console.error(
              "Cannot render a <link> outside the main document without a `rel` and `href` prop. Try adding a `rel` and/or `href` prop to this <link> or moving the link into the <head> tag"
            ) : (t.onError || t.onLoad) && console.error(
              "Cannot render a <link> with onLoad or onError listeners outside the main document. Try removing onLoad={...} and onError={...} or moving it into the root <head> tag or somewhere in the <body>."
            ));
            break;
          }
          return t.rel === "stylesheet" ? (e = t.precedence, t = t.disabled, typeof e != "string" && i && console.error(
            'Cannot render a <link rel="stylesheet" /> outside the main document without knowing its precedence. Consider adding precedence="default" or moving it into the root <head> tag.'
          ), typeof e == "string" && t == null) : !0;
        case "script":
          if (e = t.async && typeof t.async != "function" && typeof t.async != "symbol", !e || t.onLoad || t.onError || !t.src || typeof t.src != "string") {
            i && (e ? t.onLoad || t.onError ? console.error(
              "Cannot render a <script> with onLoad or onError listeners outside the main document. Try removing onLoad={...} and onError={...} or moving it into the root <head> tag or somewhere in the <body>."
            ) : console.error(
              "Cannot render a <script> outside the main document without `async={true}` and a non-empty `src` prop. Ensure there is a valid `src` and either make the script async or move it into the root <head> tag or somewhere in the <body>."
            ) : console.error(
              'Cannot render a sync or defer <script> outside the main document without knowing its order. Try adding async="" or moving it into the root <head> tag.'
            ));
            break;
          }
          return !0;
        case "noscript":
        case "template":
          i && console.error(
            "Cannot render <%s> outside the main document. Try moving it into the root <head> tag.",
            e
          );
      }
      return !1;
    }
    function vt(e) {
      return !(e.type === "stylesheet" && (e.state.loading & T2) === Rd);
    }
    function r0(e, t, a, i) {
      if (a.type === "stylesheet" && (typeof i.media != "string" || matchMedia(i.media).matches !== !1) && (a.state.loading & wi) === Rd) {
        if (a.instance === null) {
          var o = Zo(i.href), f = t.querySelector(
            Vs(o)
          );
          if (f) {
            t = f._p, t !== null && typeof t == "object" && typeof t.then == "function" && (e.count++, e = cr.bind(e), t.then(e, e)), a.state.loading |= wi, a.instance = f, Ee(f);
            return;
          }
          f = t.ownerDocument || t, i = qh(i), (o = qi.get(o)) && o0(i, o), f = f.createElement("link"), Ee(f);
          var d = f;
          d._p = new Promise(function(h, y) {
            d.onload = h, d.onerror = y;
          }), ol(f, "link", i), a.instance = f;
        }
        e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(a, t), (t = a.state.preload) && (a.state.loading & T2) === Rd && (e.count++, a = cr.bind(e), t.addEventListener("load", a), t.addEventListener("error", a));
      }
    }
    function Gh(e, t) {
      return e.stylesheets && e.count === 0 && Zs(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(a) {
        var i = setTimeout(function() {
          if (e.stylesheets && Zs(e, e.stylesheets), e.unsuspend) {
            var f = e.unsuspend;
            e.unsuspend = null, f();
          }
        }, DT + t);
        0 < e.imgBytes && bS === 0 && (bS = 125 * hg() * MT);
        var o = setTimeout(
          function() {
            if (e.waitingForImages = !1, e.count === 0 && (e.stylesheets && Zs(e, e.stylesheets), e.unsuspend)) {
              var f = e.unsuspend;
              e.unsuspend = null, f();
            }
          },
          (e.imgBytes > bS ? 50 : zT) + t
        );
        return e.unsuspend = a, function() {
          e.unsuspend = null, clearTimeout(i), clearTimeout(o);
        };
      } : null;
    }
    function cr() {
      if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
        if (this.stylesheets)
          Zs(this, this.stylesheets);
        else if (this.unsuspend) {
          var e = this.unsuspend;
          this.unsuspend = null, e();
        }
      }
    }
    function Zs(e, t) {
      e.stylesheets = null, e.unsuspend !== null && (e.count++, Lv = /* @__PURE__ */ new Map(), t.forEach(s0, e), Lv = null, cr.call(e));
    }
    function s0(e, t) {
      if (!(t.state.loading & wi)) {
        var a = Lv.get(e);
        if (a) var i = a.get(ES);
        else {
          a = /* @__PURE__ */ new Map(), Lv.set(e, a);
          for (var o = e.querySelectorAll(
            "link[data-precedence],style[data-precedence]"
          ), f = 0; f < o.length; f++) {
            var d = o[f];
            (d.nodeName === "LINK" || d.getAttribute("media") !== "not all") && (a.set(d.dataset.precedence, d), i = d);
          }
          i && a.set(ES, i);
        }
        o = t.instance, d = o.getAttribute("data-precedence"), f = a.get(d) || i, f === i && a.set(ES, o), a.set(d, o), this.count++, i = cr.bind(this), o.addEventListener("load", i), o.addEventListener("error", i), f ? f.parentNode.insertBefore(o, f.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(o, e.firstChild)), t.state.loading |= wi;
      }
    }
    function Js(e, t, a, i, o, f, d, h, y) {
      for (this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = Ad, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = un(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = un(0), this.hiddenUpdates = un(null), this.identifierPrefix = i, this.onUncaughtError = o, this.onCaughtError = f, this.onRecoverableError = d, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = y, this.incompleteTransitions = /* @__PURE__ */ new Map(), this.passiveEffectDuration = this.effectDuration = -0, this.memoizedUpdaters = /* @__PURE__ */ new Set(), e = this.pendingUpdatersLaneMap = [], t = 0; 31 > t; t++) e.push(/* @__PURE__ */ new Set());
      this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
    }
    function Ks(e, t, a, i, o, f, d, h, y, p, M, U) {
      return e = new Js(
        e,
        t,
        a,
        d,
        y,
        p,
        M,
        U,
        h
      ), t = PE, f === !0 && (t |= gn | hc), t |= dt, f = H(3, null, null, t), e.current = f, f.stateNode = e, t = jd(), Eo(t), e.pooledCache = t, Eo(t), f.memoizedState = {
        element: i,
        isDehydrated: a,
        cache: t
      }, St(f), e;
    }
    function Bg(e) {
      return e ? (e = Rr, e) : Rr;
    }
    function Lh(e, t, a, i, o, f) {
      if (Jl && typeof Jl.onScheduleFiberRoot == "function")
        try {
          Jl.onScheduleFiberRoot(Wo, i, a);
        } catch (d) {
          Ri || (Ri = !0, console.error(
            "React instrumentation encountered an error: %o",
            d
          ));
        }
      o = Bg(o), i.context === null ? i.context = o : i.pendingContext = o, Ai && pn !== null && !D2 && (D2 = !0, console.error(
        `Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`,
        pe(pn) || "Unknown"
      )), i = Vl(t), i.payload = { element: a }, f = f === void 0 ? null : f, f !== null && (typeof f != "function" && console.error(
        "Expected the last optional `callback` argument to be a function. Instead received: %s.",
        f
      ), i.callback = f), a = ui(e, i, t), a !== null && (li(t, "root.render()", null), Ke(a, e, t), lu(a, e, t));
    }
    function Yg(e, t) {
      if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
        var a = e.retryLane;
        e.retryLane = a !== 0 && a < t ? a : t;
      }
    }
    function d0(e, t) {
      Yg(e, t), (e = e.alternate) && Yg(e, t);
    }
    function h0(e) {
      if (e.tag === 13 || e.tag === 31) {
        var t = Ma(e, 67108864);
        t !== null && Ke(t, e, 67108864), d0(e, 67108864);
      }
    }
    function m0(e) {
      if (e.tag === 13 || e.tag === 31) {
        var t = Ua(e);
        t = Oa(t);
        var a = Ma(e, t);
        a !== null && Ke(a, e, t), d0(e, t);
      }
    }
    function Kt() {
      return pn;
    }
    function y0(e, t, a, i) {
      var o = Z.T;
      Z.T = null;
      var f = Yt.p;
      try {
        Yt.p = Kl, p0(e, t, a, i);
      } finally {
        Yt.p = f, Z.T = o;
      }
    }
    function ba(e, t, a, i) {
      var o = Z.T;
      Z.T = null;
      var f = Yt.p;
      try {
        Yt.p = Ta, p0(e, t, a, i);
      } finally {
        Yt.p = f, Z.T = o;
      }
    }
    function p0(e, t, a, i) {
      if (Vv) {
        var o = Xh(i);
        if (o === null)
          Bu(
            e,
            t,
            i,
            Qv,
            a
          ), Qh(e, i);
        else if (wg(
          o,
          e,
          t,
          a,
          i
        ))
          i.stopPropagation();
        else if (Qh(e, i), t & 4 && -1 < UT.indexOf(e)) {
          for (; o !== null; ) {
            var f = ce(o);
            if (f !== null)
              switch (f.tag) {
                case 3:
                  if (f = f.stateNode, f.current.memoizedState.isDehydrated) {
                    var d = da(f.pendingLanes);
                    if (d !== 0) {
                      var h = f;
                      for (h.pendingLanes |= 2, h.entangledLanes |= 2; d; ) {
                        var y = 1 << 31 - Ea(d);
                        h.entanglements[1] |= y, d &= ~y;
                      }
                      dn(f), (zt & (Ra | Zu)) === Ya && (Ov = na() + t2, vi(0));
                    }
                  }
                  break;
                case 31:
                case 13:
                  h = Ma(f, 2), h !== null && Ke(h, f, 2), Yn(), d0(f, 2);
              }
            if (f = Xh(i), f === null && Bu(
              e,
              t,
              i,
              Qv,
              a
            ), f === o) break;
            o = f;
          }
          o !== null && i.stopPropagation();
        } else
          Bu(
            e,
            t,
            i,
            null,
            a
          );
      }
    }
    function Xh(e) {
      return e = on(e), g0(e);
    }
    function g0(e) {
      if (Qv = null, e = ae(e), e !== null) {
        var t = Ne(e);
        if (t === null) e = null;
        else {
          var a = t.tag;
          if (a === 13) {
            if (e = Ot(t), e !== null) return e;
            e = null;
          } else if (a === 31) {
            if (e = tt(t), e !== null) return e;
            e = null;
          } else if (a === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
              return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null;
          } else t !== e && (e = null);
        }
      }
      return Qv = e, null;
    }
    function Vh(e) {
      switch (e) {
        case "beforetoggle":
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "toggle":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
          return Kl;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
          return Ta;
        case "message":
          switch (Ps()) {
            case D0:
              return Kl;
            case Ph:
              return Ta;
            case Fo:
            case Vg:
              return xa;
            case em:
              return Pc;
            default:
              return xa;
          }
        default:
          return xa;
      }
    }
    function Qh(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          Gr = null;
          break;
        case "dragenter":
        case "dragleave":
          Lr = null;
          break;
        case "mouseover":
        case "mouseout":
          Xr = null;
          break;
        case "pointerover":
        case "pointerout":
          Ep.delete(t.pointerId);
          break;
        case "gotpointercapture":
        case "lostpointercapture":
          Tp.delete(t.pointerId);
      }
    }
    function kc(e, t, a, i, o, f) {
      return e === null || e.nativeEvent !== f ? (e = {
        blockedOn: t,
        domEventName: a,
        eventSystemFlags: i,
        nativeEvent: f,
        targetContainers: [o]
      }, t !== null && (t = ce(t), t !== null && h0(t)), e) : (e.eventSystemFlags |= i, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
    }
    function wg(e, t, a, i, o) {
      switch (t) {
        case "focusin":
          return Gr = kc(
            Gr,
            e,
            t,
            a,
            i,
            o
          ), !0;
        case "dragenter":
          return Lr = kc(
            Lr,
            e,
            t,
            a,
            i,
            o
          ), !0;
        case "mouseover":
          return Xr = kc(
            Xr,
            e,
            t,
            a,
            i,
            o
          ), !0;
        case "pointerover":
          var f = o.pointerId;
          return Ep.set(
            f,
            kc(
              Ep.get(f) || null,
              e,
              t,
              a,
              i,
              o
            )
          ), !0;
        case "gotpointercapture":
          return f = o.pointerId, Tp.set(
            f,
            kc(
              Tp.get(f) || null,
              e,
              t,
              a,
              i,
              o
            )
          ), !0;
      }
      return !1;
    }
    function v0(e) {
      var t = ae(e.target);
      if (t !== null) {
        var a = Ne(t);
        if (a !== null) {
          if (t = a.tag, t === 13) {
            if (t = Ot(a), t !== null) {
              e.blockedOn = t, g(e.priority, function() {
                m0(a);
              });
              return;
            }
          } else if (t === 31) {
            if (t = tt(a), t !== null) {
              e.blockedOn = t, g(e.priority, function() {
                m0(a);
              });
              return;
            }
          } else if (t === 3 && a.stateNode.current.memoizedState.isDehydrated) {
            e.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
            return;
          }
        }
      }
      e.blockedOn = null;
    }
    function or(e) {
      if (e.blockedOn !== null) return !1;
      for (var t = e.targetContainers; 0 < t.length; ) {
        var a = Xh(e.nativeEvent);
        if (a === null) {
          a = e.nativeEvent;
          var i = new a.constructor(
            a.type,
            a
          ), o = i;
          H0 !== null && console.error(
            "Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."
          ), H0 = o, a.target.dispatchEvent(i), H0 === null && console.error(
            "Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."
          ), H0 = null;
        } else
          return t = ce(a), t !== null && h0(t), e.blockedOn = a, !1;
        t.shift();
      }
      return !0;
    }
    function Zh(e, t, a) {
      or(e) && a.delete(t);
    }
    function o1() {
      TS = !1, Gr !== null && or(Gr) && (Gr = null), Lr !== null && or(Lr) && (Lr = null), Xr !== null && or(Xr) && (Xr = null), Ep.forEach(Zh), Tp.forEach(Zh);
    }
    function $s(e, t) {
      e.blockedOn === t && (e.blockedOn = null, TS || (TS = !0, Cl.unstable_scheduleCallback(
        Cl.unstable_NormalPriority,
        o1
      )));
    }
    function qg(e) {
      Zv !== e && (Zv = e, Cl.unstable_scheduleCallback(
        Cl.unstable_NormalPriority,
        function() {
          Zv === e && (Zv = null);
          for (var t = 0; t < e.length; t += 3) {
            var a = e[t], i = e[t + 1], o = e[t + 2];
            if (typeof i != "function") {
              if (g0(i || a) === null)
                continue;
              break;
            }
            var f = ce(a);
            f !== null && (e.splice(t, 3), t -= 3, a = {
              pending: !0,
              data: o,
              method: a.method,
              action: i
            }, Object.freeze(a), lc(
              f,
              a,
              i,
              o
            ));
          }
        }
      ));
    }
    function Ko(e) {
      function t(y) {
        return $s(y, e);
      }
      Gr !== null && $s(Gr, e), Lr !== null && $s(Lr, e), Xr !== null && $s(Xr, e), Ep.forEach(t), Tp.forEach(t);
      for (var a = 0; a < Vr.length; a++) {
        var i = Vr[a];
        i.blockedOn === e && (i.blockedOn = null);
      }
      for (; 0 < Vr.length && (a = Vr[0], a.blockedOn === null); )
        v0(a), a.blockedOn === null && Vr.shift();
      if (a = (e.ownerDocument || e).$$reactFormReplay, a != null)
        for (i = 0; i < a.length; i += 3) {
          var o = a[i], f = a[i + 1], d = o[an] || null;
          if (typeof f == "function")
            d || qg(a);
          else if (d) {
            var h = null;
            if (f && f.hasAttribute("formAction")) {
              if (o = f, d = f[an] || null)
                h = d.formAction;
              else if (g0(o) !== null) continue;
            } else h = d.action;
            typeof h == "function" ? a[i + 1] = h : (a.splice(i, 3), i -= 3), qg(a);
          }
        }
    }
    function jg() {
      function e(f) {
        f.canIntercept && f.info === "react-transition" && f.intercept({
          handler: function() {
            return new Promise(function(d) {
              return o = d;
            });
          },
          focusReset: "manual",
          scroll: "manual"
        });
      }
      function t() {
        o !== null && (o(), o = null), i || setTimeout(a, 20);
      }
      function a() {
        if (!i && !navigation.transition) {
          var f = navigation.currentEntry;
          f && f.url != null && navigation.navigate(f.url, {
            state: f.getState(),
            info: "react-transition",
            history: "replace"
          });
        }
      }
      if (typeof navigation == "object") {
        var i = !1, o = null;
        return navigation.addEventListener("navigate", e), navigation.addEventListener("navigatesuccess", t), navigation.addEventListener("navigateerror", t), setTimeout(a, 100), function() {
          i = !0, navigation.removeEventListener("navigate", e), navigation.removeEventListener(
            "navigatesuccess",
            t
          ), navigation.removeEventListener(
            "navigateerror",
            t
          ), o !== null && (o(), o = null);
        };
      }
    }
    function S0(e) {
      this._internalRoot = e;
    }
    function qu(e) {
      this._internalRoot = e;
    }
    function b0(e) {
      e[dc] && (e._reactRootContainer ? console.error(
        "You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported."
      ) : console.error(
        "You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."
      ));
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var Cl = oE(), ks = Ym(), f1 = fE(), st = Object.assign, Gg = /* @__PURE__ */ Symbol.for("react.element"), iu = /* @__PURE__ */ Symbol.for("react.transitional.element"), Fc = /* @__PURE__ */ Symbol.for("react.portal"), fr = /* @__PURE__ */ Symbol.for("react.fragment"), ln = /* @__PURE__ */ Symbol.for("react.strict_mode"), Fs = /* @__PURE__ */ Symbol.for("react.profiler"), Jh = /* @__PURE__ */ Symbol.for("react.consumer"), ju = /* @__PURE__ */ Symbol.for("react.context"), rr = /* @__PURE__ */ Symbol.for("react.forward_ref"), $o = /* @__PURE__ */ Symbol.for("react.suspense"), yn = /* @__PURE__ */ Symbol.for("react.suspense_list"), Ws = /* @__PURE__ */ Symbol.for("react.memo"), Ha = /* @__PURE__ */ Symbol.for("react.lazy"), Gu = /* @__PURE__ */ Symbol.for("react.activity"), r1 = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), Lg = Symbol.iterator, sr = /* @__PURE__ */ Symbol.for("react.client.reference"), ql = Array.isArray, Z = ks.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Yt = f1.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, s1 = Object.freeze({
      pending: !1,
      data: null,
      method: null,
      action: null
    }), E0 = [], T0 = [], sc = -1, Wc = Ht(null), dr = Ht(null), qn = Ht(null), Ic = Ht(null), hr = 0, Xg, ko, mr, A0, Is, Kh, $h;
    ve.__reactDisabledLog = !0;
    var yr, R0, kh = !1, _0 = new (typeof WeakMap == "function" ? WeakMap : Map)(), pn = null, Ai = !1, jn = Object.prototype.hasOwnProperty, O0 = Cl.unstable_scheduleCallback, Fh = Cl.unstable_cancelCallback, Wh = Cl.unstable_shouldYield, Ih = Cl.unstable_requestPaint, na = Cl.unstable_now, Ps = Cl.unstable_getCurrentPriorityLevel, D0 = Cl.unstable_ImmediatePriority, Ph = Cl.unstable_UserBlockingPriority, Fo = Cl.unstable_NormalPriority, Vg = Cl.unstable_LowPriority, em = Cl.unstable_IdlePriority, z0 = Cl.log, Qg = Cl.unstable_setDisableYieldValue, Wo = null, Jl = null, Ri = !1, _i = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u", Ea = Math.clz32 ? Math.clz32 : Ie, M0 = Math.log, tm = Math.LN2, pr = 256, ed = 262144, gr = 4194304, Kl = 2, Ta = 8, xa = 32, Pc = 268435456, cu = Math.random().toString(36).slice(2), fl = "__reactFiber$" + cu, an = "__reactProps$" + cu, dc = "__reactContainer$" + cu, Io = "__reactEvents$" + cu, d1 = "__reactListeners$" + cu, Zg = "__reactHandles$" + cu, td = "__reactResources$" + cu, vr = "__reactMarker$" + cu, Jg = /* @__PURE__ */ new Set(), Oi = {}, Sr = {}, Kg = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    }, br = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), C0 = {}, lm = {}, am = /[\n"\\]/g, U0 = !1, $g = !1, ld = !1, l = !1, n = !1, u = !1, c = ["value", "defaultValue"], r = !1, s = /["'&<>\n\t]|^\s|\s$/, m = "address applet area article aside base basefont bgsound blockquote body br button caption center col colgroup dd details dir div dl dt embed fieldset figcaption figure footer form frame frameset h1 h2 h3 h4 h5 h6 head header hgroup hr html iframe img input isindex li link listing main marquee menu menuitem meta nav noembed noframes noscript object ol p param plaintext pre script section select source style summary table tbody td template textarea tfoot th thead title tr track ul wbr xmp".split(
      " "
    ), S = "applet caption html table td th marquee object template foreignObject desc title".split(
      " "
    ), O = S.concat(["button"]), j = "dd dt li option optgroup p rp rt".split(" "), K = {
      current: null,
      formTag: null,
      aTagInScope: null,
      buttonTagInScope: null,
      nobrTagInScope: null,
      pTagInButtonScope: null,
      listItemTagAutoclosing: null,
      dlItemTagAutoclosing: null,
      containerTagInScope: null,
      implicitRootScope: !1
    }, I = {}, G = {
      animation: "animationDelay animationDirection animationDuration animationFillMode animationIterationCount animationName animationPlayState animationTimingFunction".split(
        " "
      ),
      background: "backgroundAttachment backgroundClip backgroundColor backgroundImage backgroundOrigin backgroundPositionX backgroundPositionY backgroundRepeat backgroundSize".split(
        " "
      ),
      backgroundPosition: ["backgroundPositionX", "backgroundPositionY"],
      border: "borderBottomColor borderBottomStyle borderBottomWidth borderImageOutset borderImageRepeat borderImageSlice borderImageSource borderImageWidth borderLeftColor borderLeftStyle borderLeftWidth borderRightColor borderRightStyle borderRightWidth borderTopColor borderTopStyle borderTopWidth".split(
        " "
      ),
      borderBlockEnd: [
        "borderBlockEndColor",
        "borderBlockEndStyle",
        "borderBlockEndWidth"
      ],
      borderBlockStart: [
        "borderBlockStartColor",
        "borderBlockStartStyle",
        "borderBlockStartWidth"
      ],
      borderBottom: [
        "borderBottomColor",
        "borderBottomStyle",
        "borderBottomWidth"
      ],
      borderColor: [
        "borderBottomColor",
        "borderLeftColor",
        "borderRightColor",
        "borderTopColor"
      ],
      borderImage: [
        "borderImageOutset",
        "borderImageRepeat",
        "borderImageSlice",
        "borderImageSource",
        "borderImageWidth"
      ],
      borderInlineEnd: [
        "borderInlineEndColor",
        "borderInlineEndStyle",
        "borderInlineEndWidth"
      ],
      borderInlineStart: [
        "borderInlineStartColor",
        "borderInlineStartStyle",
        "borderInlineStartWidth"
      ],
      borderLeft: ["borderLeftColor", "borderLeftStyle", "borderLeftWidth"],
      borderRadius: [
        "borderBottomLeftRadius",
        "borderBottomRightRadius",
        "borderTopLeftRadius",
        "borderTopRightRadius"
      ],
      borderRight: [
        "borderRightColor",
        "borderRightStyle",
        "borderRightWidth"
      ],
      borderStyle: [
        "borderBottomStyle",
        "borderLeftStyle",
        "borderRightStyle",
        "borderTopStyle"
      ],
      borderTop: ["borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderWidth: [
        "borderBottomWidth",
        "borderLeftWidth",
        "borderRightWidth",
        "borderTopWidth"
      ],
      columnRule: ["columnRuleColor", "columnRuleStyle", "columnRuleWidth"],
      columns: ["columnCount", "columnWidth"],
      flex: ["flexBasis", "flexGrow", "flexShrink"],
      flexFlow: ["flexDirection", "flexWrap"],
      font: "fontFamily fontFeatureSettings fontKerning fontLanguageOverride fontSize fontSizeAdjust fontStretch fontStyle fontVariant fontVariantAlternates fontVariantCaps fontVariantEastAsian fontVariantLigatures fontVariantNumeric fontVariantPosition fontWeight lineHeight".split(
        " "
      ),
      fontVariant: "fontVariantAlternates fontVariantCaps fontVariantEastAsian fontVariantLigatures fontVariantNumeric fontVariantPosition".split(
        " "
      ),
      gap: ["columnGap", "rowGap"],
      grid: "gridAutoColumns gridAutoFlow gridAutoRows gridTemplateAreas gridTemplateColumns gridTemplateRows".split(
        " "
      ),
      gridArea: [
        "gridColumnEnd",
        "gridColumnStart",
        "gridRowEnd",
        "gridRowStart"
      ],
      gridColumn: ["gridColumnEnd", "gridColumnStart"],
      gridColumnGap: ["columnGap"],
      gridGap: ["columnGap", "rowGap"],
      gridRow: ["gridRowEnd", "gridRowStart"],
      gridRowGap: ["rowGap"],
      gridTemplate: [
        "gridTemplateAreas",
        "gridTemplateColumns",
        "gridTemplateRows"
      ],
      listStyle: ["listStyleImage", "listStylePosition", "listStyleType"],
      margin: ["marginBottom", "marginLeft", "marginRight", "marginTop"],
      marker: ["markerEnd", "markerMid", "markerStart"],
      mask: "maskClip maskComposite maskImage maskMode maskOrigin maskPositionX maskPositionY maskRepeat maskSize".split(
        " "
      ),
      maskPosition: ["maskPositionX", "maskPositionY"],
      outline: ["outlineColor", "outlineStyle", "outlineWidth"],
      overflow: ["overflowX", "overflowY"],
      padding: ["paddingBottom", "paddingLeft", "paddingRight", "paddingTop"],
      placeContent: ["alignContent", "justifyContent"],
      placeItems: ["alignItems", "justifyItems"],
      placeSelf: ["alignSelf", "justifySelf"],
      textDecoration: [
        "textDecorationColor",
        "textDecorationLine",
        "textDecorationStyle"
      ],
      textEmphasis: ["textEmphasisColor", "textEmphasisStyle"],
      transition: [
        "transitionDelay",
        "transitionDuration",
        "transitionProperty",
        "transitionTimingFunction"
      ],
      wordWrap: ["overflowWrap"]
    }, J = /([A-Z])/g, be = /^ms-/, we = /^(?:webkit|moz|o)[A-Z]/, $t = /^-ms-/, N = /-(.)/g, C = /;\s*$/, w = {}, F = {}, Ce = !1, Dt = !1, Te = new Set(
      "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
        " "
      )
    ), et = "http://www.w3.org/1998/Math/MathML", ct = "http://www.w3.org/2000/svg", Ut = /* @__PURE__ */ new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"]
    ]), Lu = {
      accept: "accept",
      acceptcharset: "acceptCharset",
      "accept-charset": "acceptCharset",
      accesskey: "accessKey",
      action: "action",
      allowfullscreen: "allowFullScreen",
      alt: "alt",
      as: "as",
      async: "async",
      autocapitalize: "autoCapitalize",
      autocomplete: "autoComplete",
      autocorrect: "autoCorrect",
      autofocus: "autoFocus",
      autoplay: "autoPlay",
      autosave: "autoSave",
      capture: "capture",
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      challenge: "challenge",
      charset: "charSet",
      checked: "checked",
      children: "children",
      cite: "cite",
      class: "className",
      classid: "classID",
      classname: "className",
      cols: "cols",
      colspan: "colSpan",
      content: "content",
      contenteditable: "contentEditable",
      contextmenu: "contextMenu",
      controls: "controls",
      controlslist: "controlsList",
      coords: "coords",
      crossorigin: "crossOrigin",
      dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
      data: "data",
      datetime: "dateTime",
      default: "default",
      defaultchecked: "defaultChecked",
      defaultvalue: "defaultValue",
      defer: "defer",
      dir: "dir",
      disabled: "disabled",
      disablepictureinpicture: "disablePictureInPicture",
      disableremoteplayback: "disableRemotePlayback",
      download: "download",
      draggable: "draggable",
      enctype: "encType",
      enterkeyhint: "enterKeyHint",
      fetchpriority: "fetchPriority",
      for: "htmlFor",
      form: "form",
      formmethod: "formMethod",
      formaction: "formAction",
      formenctype: "formEncType",
      formnovalidate: "formNoValidate",
      formtarget: "formTarget",
      frameborder: "frameBorder",
      headers: "headers",
      height: "height",
      hidden: "hidden",
      high: "high",
      href: "href",
      hreflang: "hrefLang",
      htmlfor: "htmlFor",
      httpequiv: "httpEquiv",
      "http-equiv": "httpEquiv",
      icon: "icon",
      id: "id",
      imagesizes: "imageSizes",
      imagesrcset: "imageSrcSet",
      inert: "inert",
      innerhtml: "innerHTML",
      inputmode: "inputMode",
      integrity: "integrity",
      is: "is",
      itemid: "itemID",
      itemprop: "itemProp",
      itemref: "itemRef",
      itemscope: "itemScope",
      itemtype: "itemType",
      keyparams: "keyParams",
      keytype: "keyType",
      kind: "kind",
      label: "label",
      lang: "lang",
      list: "list",
      loop: "loop",
      low: "low",
      manifest: "manifest",
      marginwidth: "marginWidth",
      marginheight: "marginHeight",
      max: "max",
      maxlength: "maxLength",
      media: "media",
      mediagroup: "mediaGroup",
      method: "method",
      min: "min",
      minlength: "minLength",
      multiple: "multiple",
      muted: "muted",
      name: "name",
      nomodule: "noModule",
      nonce: "nonce",
      novalidate: "noValidate",
      open: "open",
      optimum: "optimum",
      pattern: "pattern",
      placeholder: "placeholder",
      playsinline: "playsInline",
      poster: "poster",
      preload: "preload",
      profile: "profile",
      radiogroup: "radioGroup",
      readonly: "readOnly",
      referrerpolicy: "referrerPolicy",
      rel: "rel",
      required: "required",
      reversed: "reversed",
      role: "role",
      rows: "rows",
      rowspan: "rowSpan",
      sandbox: "sandbox",
      scope: "scope",
      scoped: "scoped",
      scrolling: "scrolling",
      seamless: "seamless",
      selected: "selected",
      shape: "shape",
      size: "size",
      sizes: "sizes",
      span: "span",
      spellcheck: "spellCheck",
      src: "src",
      srcdoc: "srcDoc",
      srclang: "srcLang",
      srcset: "srcSet",
      start: "start",
      step: "step",
      style: "style",
      summary: "summary",
      tabindex: "tabIndex",
      target: "target",
      title: "title",
      type: "type",
      usemap: "useMap",
      value: "value",
      width: "width",
      wmode: "wmode",
      wrap: "wrap",
      about: "about",
      accentheight: "accentHeight",
      "accent-height": "accentHeight",
      accumulate: "accumulate",
      additive: "additive",
      alignmentbaseline: "alignmentBaseline",
      "alignment-baseline": "alignmentBaseline",
      allowreorder: "allowReorder",
      alphabetic: "alphabetic",
      amplitude: "amplitude",
      arabicform: "arabicForm",
      "arabic-form": "arabicForm",
      ascent: "ascent",
      attributename: "attributeName",
      attributetype: "attributeType",
      autoreverse: "autoReverse",
      azimuth: "azimuth",
      basefrequency: "baseFrequency",
      baselineshift: "baselineShift",
      "baseline-shift": "baselineShift",
      baseprofile: "baseProfile",
      bbox: "bbox",
      begin: "begin",
      bias: "bias",
      by: "by",
      calcmode: "calcMode",
      capheight: "capHeight",
      "cap-height": "capHeight",
      clip: "clip",
      clippath: "clipPath",
      "clip-path": "clipPath",
      clippathunits: "clipPathUnits",
      cliprule: "clipRule",
      "clip-rule": "clipRule",
      color: "color",
      colorinterpolation: "colorInterpolation",
      "color-interpolation": "colorInterpolation",
      colorinterpolationfilters: "colorInterpolationFilters",
      "color-interpolation-filters": "colorInterpolationFilters",
      colorprofile: "colorProfile",
      "color-profile": "colorProfile",
      colorrendering: "colorRendering",
      "color-rendering": "colorRendering",
      contentscripttype: "contentScriptType",
      contentstyletype: "contentStyleType",
      cursor: "cursor",
      cx: "cx",
      cy: "cy",
      d: "d",
      datatype: "datatype",
      decelerate: "decelerate",
      descent: "descent",
      diffuseconstant: "diffuseConstant",
      direction: "direction",
      display: "display",
      divisor: "divisor",
      dominantbaseline: "dominantBaseline",
      "dominant-baseline": "dominantBaseline",
      dur: "dur",
      dx: "dx",
      dy: "dy",
      edgemode: "edgeMode",
      elevation: "elevation",
      enablebackground: "enableBackground",
      "enable-background": "enableBackground",
      end: "end",
      exponent: "exponent",
      externalresourcesrequired: "externalResourcesRequired",
      fill: "fill",
      fillopacity: "fillOpacity",
      "fill-opacity": "fillOpacity",
      fillrule: "fillRule",
      "fill-rule": "fillRule",
      filter: "filter",
      filterres: "filterRes",
      filterunits: "filterUnits",
      floodopacity: "floodOpacity",
      "flood-opacity": "floodOpacity",
      floodcolor: "floodColor",
      "flood-color": "floodColor",
      focusable: "focusable",
      fontfamily: "fontFamily",
      "font-family": "fontFamily",
      fontsize: "fontSize",
      "font-size": "fontSize",
      fontsizeadjust: "fontSizeAdjust",
      "font-size-adjust": "fontSizeAdjust",
      fontstretch: "fontStretch",
      "font-stretch": "fontStretch",
      fontstyle: "fontStyle",
      "font-style": "fontStyle",
      fontvariant: "fontVariant",
      "font-variant": "fontVariant",
      fontweight: "fontWeight",
      "font-weight": "fontWeight",
      format: "format",
      from: "from",
      fx: "fx",
      fy: "fy",
      g1: "g1",
      g2: "g2",
      glyphname: "glyphName",
      "glyph-name": "glyphName",
      glyphorientationhorizontal: "glyphOrientationHorizontal",
      "glyph-orientation-horizontal": "glyphOrientationHorizontal",
      glyphorientationvertical: "glyphOrientationVertical",
      "glyph-orientation-vertical": "glyphOrientationVertical",
      glyphref: "glyphRef",
      gradienttransform: "gradientTransform",
      gradientunits: "gradientUnits",
      hanging: "hanging",
      horizadvx: "horizAdvX",
      "horiz-adv-x": "horizAdvX",
      horizoriginx: "horizOriginX",
      "horiz-origin-x": "horizOriginX",
      ideographic: "ideographic",
      imagerendering: "imageRendering",
      "image-rendering": "imageRendering",
      in2: "in2",
      in: "in",
      inlist: "inlist",
      intercept: "intercept",
      k1: "k1",
      k2: "k2",
      k3: "k3",
      k4: "k4",
      k: "k",
      kernelmatrix: "kernelMatrix",
      kernelunitlength: "kernelUnitLength",
      kerning: "kerning",
      keypoints: "keyPoints",
      keysplines: "keySplines",
      keytimes: "keyTimes",
      lengthadjust: "lengthAdjust",
      letterspacing: "letterSpacing",
      "letter-spacing": "letterSpacing",
      lightingcolor: "lightingColor",
      "lighting-color": "lightingColor",
      limitingconeangle: "limitingConeAngle",
      local: "local",
      markerend: "markerEnd",
      "marker-end": "markerEnd",
      markerheight: "markerHeight",
      markermid: "markerMid",
      "marker-mid": "markerMid",
      markerstart: "markerStart",
      "marker-start": "markerStart",
      markerunits: "markerUnits",
      markerwidth: "markerWidth",
      mask: "mask",
      maskcontentunits: "maskContentUnits",
      maskunits: "maskUnits",
      mathematical: "mathematical",
      mode: "mode",
      numoctaves: "numOctaves",
      offset: "offset",
      opacity: "opacity",
      operator: "operator",
      order: "order",
      orient: "orient",
      orientation: "orientation",
      origin: "origin",
      overflow: "overflow",
      overlineposition: "overlinePosition",
      "overline-position": "overlinePosition",
      overlinethickness: "overlineThickness",
      "overline-thickness": "overlineThickness",
      paintorder: "paintOrder",
      "paint-order": "paintOrder",
      panose1: "panose1",
      "panose-1": "panose1",
      pathlength: "pathLength",
      patterncontentunits: "patternContentUnits",
      patterntransform: "patternTransform",
      patternunits: "patternUnits",
      pointerevents: "pointerEvents",
      "pointer-events": "pointerEvents",
      points: "points",
      pointsatx: "pointsAtX",
      pointsaty: "pointsAtY",
      pointsatz: "pointsAtZ",
      popover: "popover",
      popovertarget: "popoverTarget",
      popovertargetaction: "popoverTargetAction",
      prefix: "prefix",
      preservealpha: "preserveAlpha",
      preserveaspectratio: "preserveAspectRatio",
      primitiveunits: "primitiveUnits",
      property: "property",
      r: "r",
      radius: "radius",
      refx: "refX",
      refy: "refY",
      renderingintent: "renderingIntent",
      "rendering-intent": "renderingIntent",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      requiredextensions: "requiredExtensions",
      requiredfeatures: "requiredFeatures",
      resource: "resource",
      restart: "restart",
      result: "result",
      results: "results",
      rotate: "rotate",
      rx: "rx",
      ry: "ry",
      scale: "scale",
      security: "security",
      seed: "seed",
      shaperendering: "shapeRendering",
      "shape-rendering": "shapeRendering",
      slope: "slope",
      spacing: "spacing",
      specularconstant: "specularConstant",
      specularexponent: "specularExponent",
      speed: "speed",
      spreadmethod: "spreadMethod",
      startoffset: "startOffset",
      stddeviation: "stdDeviation",
      stemh: "stemh",
      stemv: "stemv",
      stitchtiles: "stitchTiles",
      stopcolor: "stopColor",
      "stop-color": "stopColor",
      stopopacity: "stopOpacity",
      "stop-opacity": "stopOpacity",
      strikethroughposition: "strikethroughPosition",
      "strikethrough-position": "strikethroughPosition",
      strikethroughthickness: "strikethroughThickness",
      "strikethrough-thickness": "strikethroughThickness",
      string: "string",
      stroke: "stroke",
      strokedasharray: "strokeDasharray",
      "stroke-dasharray": "strokeDasharray",
      strokedashoffset: "strokeDashoffset",
      "stroke-dashoffset": "strokeDashoffset",
      strokelinecap: "strokeLinecap",
      "stroke-linecap": "strokeLinecap",
      strokelinejoin: "strokeLinejoin",
      "stroke-linejoin": "strokeLinejoin",
      strokemiterlimit: "strokeMiterlimit",
      "stroke-miterlimit": "strokeMiterlimit",
      strokewidth: "strokeWidth",
      "stroke-width": "strokeWidth",
      strokeopacity: "strokeOpacity",
      "stroke-opacity": "strokeOpacity",
      suppresscontenteditablewarning: "suppressContentEditableWarning",
      suppresshydrationwarning: "suppressHydrationWarning",
      surfacescale: "surfaceScale",
      systemlanguage: "systemLanguage",
      tablevalues: "tableValues",
      targetx: "targetX",
      targety: "targetY",
      textanchor: "textAnchor",
      "text-anchor": "textAnchor",
      textdecoration: "textDecoration",
      "text-decoration": "textDecoration",
      textlength: "textLength",
      textrendering: "textRendering",
      "text-rendering": "textRendering",
      to: "to",
      transform: "transform",
      transformorigin: "transformOrigin",
      "transform-origin": "transformOrigin",
      typeof: "typeof",
      u1: "u1",
      u2: "u2",
      underlineposition: "underlinePosition",
      "underline-position": "underlinePosition",
      underlinethickness: "underlineThickness",
      "underline-thickness": "underlineThickness",
      unicode: "unicode",
      unicodebidi: "unicodeBidi",
      "unicode-bidi": "unicodeBidi",
      unicoderange: "unicodeRange",
      "unicode-range": "unicodeRange",
      unitsperem: "unitsPerEm",
      "units-per-em": "unitsPerEm",
      unselectable: "unselectable",
      valphabetic: "vAlphabetic",
      "v-alphabetic": "vAlphabetic",
      values: "values",
      vectoreffect: "vectorEffect",
      "vector-effect": "vectorEffect",
      version: "version",
      vertadvy: "vertAdvY",
      "vert-adv-y": "vertAdvY",
      vertoriginx: "vertOriginX",
      "vert-origin-x": "vertOriginX",
      vertoriginy: "vertOriginY",
      "vert-origin-y": "vertOriginY",
      vhanging: "vHanging",
      "v-hanging": "vHanging",
      videographic: "vIdeographic",
      "v-ideographic": "vIdeographic",
      viewbox: "viewBox",
      viewtarget: "viewTarget",
      visibility: "visibility",
      vmathematical: "vMathematical",
      "v-mathematical": "vMathematical",
      vocab: "vocab",
      widths: "widths",
      wordspacing: "wordSpacing",
      "word-spacing": "wordSpacing",
      writingmode: "writingMode",
      "writing-mode": "writingMode",
      x1: "x1",
      x2: "x2",
      x: "x",
      xchannelselector: "xChannelSelector",
      xheight: "xHeight",
      "x-height": "xHeight",
      xlinkactuate: "xlinkActuate",
      "xlink:actuate": "xlinkActuate",
      xlinkarcrole: "xlinkArcrole",
      "xlink:arcrole": "xlinkArcrole",
      xlinkhref: "xlinkHref",
      "xlink:href": "xlinkHref",
      xlinkrole: "xlinkRole",
      "xlink:role": "xlinkRole",
      xlinkshow: "xlinkShow",
      "xlink:show": "xlinkShow",
      xlinktitle: "xlinkTitle",
      "xlink:title": "xlinkTitle",
      xlinktype: "xlinkType",
      "xlink:type": "xlinkType",
      xmlbase: "xmlBase",
      "xml:base": "xmlBase",
      xmllang: "xmlLang",
      "xml:lang": "xmlLang",
      xmlns: "xmlns",
      "xml:space": "xmlSpace",
      xmlnsxlink: "xmlnsXlink",
      "xmlns:xlink": "xmlnsXlink",
      xmlspace: "xmlSpace",
      y1: "y1",
      y2: "y2",
      y: "y",
      ychannelselector: "yChannelSelector",
      z: "z",
      zoomandpan: "zoomAndPan"
    }, kg = {
      "aria-current": 0,
      "aria-description": 0,
      "aria-details": 0,
      "aria-disabled": 0,
      "aria-hidden": 0,
      "aria-invalid": 0,
      "aria-keyshortcuts": 0,
      "aria-label": 0,
      "aria-roledescription": 0,
      "aria-autocomplete": 0,
      "aria-checked": 0,
      "aria-expanded": 0,
      "aria-haspopup": 0,
      "aria-level": 0,
      "aria-modal": 0,
      "aria-multiline": 0,
      "aria-multiselectable": 0,
      "aria-orientation": 0,
      "aria-placeholder": 0,
      "aria-pressed": 0,
      "aria-readonly": 0,
      "aria-required": 0,
      "aria-selected": 0,
      "aria-sort": 0,
      "aria-valuemax": 0,
      "aria-valuemin": 0,
      "aria-valuenow": 0,
      "aria-valuetext": 0,
      "aria-atomic": 0,
      "aria-busy": 0,
      "aria-live": 0,
      "aria-relevant": 0,
      "aria-dropeffect": 0,
      "aria-grabbed": 0,
      "aria-activedescendant": 0,
      "aria-colcount": 0,
      "aria-colindex": 0,
      "aria-colspan": 0,
      "aria-controls": 0,
      "aria-describedby": 0,
      "aria-errormessage": 0,
      "aria-flowto": 0,
      "aria-labelledby": 0,
      "aria-owns": 0,
      "aria-posinset": 0,
      "aria-rowcount": 0,
      "aria-rowindex": 0,
      "aria-rowspan": 0,
      "aria-setsize": 0,
      "aria-braillelabel": 0,
      "aria-brailleroledescription": 0,
      "aria-colindextext": 0,
      "aria-rowindextext": 0
    }, nm = {}, sE = RegExp(
      "^(aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), dE = RegExp(
      "^(aria)[A-Z][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), MS = !1, Gn = {}, CS = /^on./, hE = /^on[^A-Z]/, mE = RegExp(
      "^(aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), yE = RegExp(
      "^(aria)[A-Z][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), pE = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i, H0 = null, um = null, im = null, h1 = !1, eo = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), m1 = !1;
    if (eo)
      try {
        var x0 = {};
        Object.defineProperty(x0, "passive", {
          get: function() {
            m1 = !0;
          }
        }), window.addEventListener("test", x0, x0), window.removeEventListener("test", x0, x0);
      } catch {
        m1 = !1;
      }
    var Er = null, y1 = null, Fg = null, ad = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, Wg = Wl(ad), N0 = st({}, ad, { view: 0, detail: 0 }), gE = Wl(N0), p1, g1, B0, Ig = st({}, N0, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Kr,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (e !== B0 && (B0 && e.type === "mousemove" ? (p1 = e.screenX - B0.screenX, g1 = e.screenY - B0.screenY) : g1 = p1 = 0, B0 = e), p1);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : g1;
      }
    }), US = Wl(Ig), vE = st({}, Ig, { dataTransfer: 0 }), SE = Wl(vE), bE = st({}, N0, { relatedTarget: 0 }), v1 = Wl(bE), EE = st({}, ad, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), TE = Wl(EE), AE = st({}, ad, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), RE = Wl(AE), _E = st({}, ad, { data: 0 }), HS = Wl(
      _E
    ), OE = HS, DE = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified"
    }, zE = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta"
    }, ME = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    }, CE = st({}, N0, {
      key: function(e) {
        if (e.key) {
          var t = DE[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress" ? (e = Jr(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? zE[e.keyCode] || "Unidentified" : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Kr,
      charCode: function(e) {
        return e.type === "keypress" ? Jr(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? Jr(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), UE = Wl(CE), HE = st({}, Ig, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0
    }), xS = Wl(HE), xE = st({}, N0, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Kr
    }), NE = Wl(xE), BE = st({}, ad, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), YE = Wl(BE), wE = st({}, Ig, {
      deltaX: function(e) {
        return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
      },
      deltaY: function(e) {
        return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
      },
      deltaZ: 0,
      deltaMode: 0
    }), qE = Wl(wE), jE = st({}, ad, {
      newState: 0,
      oldState: 0
    }), GE = Wl(jE), LE = [9, 13, 27, 32], NS = 229, S1 = eo && "CompositionEvent" in window, Y0 = null;
    eo && "documentMode" in document && (Y0 = document.documentMode);
    var XE = eo && "TextEvent" in window && !Y0, BS = eo && (!S1 || Y0 && 8 < Y0 && 11 >= Y0), YS = 32, wS = String.fromCharCode(YS), qS = !1, cm = !1, VE = {
      color: !0,
      date: !0,
      datetime: !0,
      "datetime-local": !0,
      email: !0,
      month: !0,
      number: !0,
      password: !0,
      range: !0,
      search: !0,
      tel: !0,
      text: !0,
      time: !0,
      url: !0,
      week: !0
    }, w0 = null, q0 = null, jS = !1;
    eo && (jS = zd("input") && (!document.documentMode || 9 < document.documentMode));
    var Ln = typeof Object.is == "function" ? Object.is : Md, QE = eo && "documentMode" in document && 11 >= document.documentMode, om = null, b1 = null, j0 = null, E1 = !1, fm = {
      animationend: ho("Animation", "AnimationEnd"),
      animationiteration: ho("Animation", "AnimationIteration"),
      animationstart: ho("Animation", "AnimationStart"),
      transitionrun: ho("Transition", "TransitionRun"),
      transitionstart: ho("Transition", "TransitionStart"),
      transitioncancel: ho("Transition", "TransitionCancel"),
      transitionend: ho("Transition", "TransitionEnd")
    }, T1 = {}, GS = {};
    eo && (GS = document.createElement("div").style, "AnimationEvent" in window || (delete fm.animationend.animation, delete fm.animationiteration.animation, delete fm.animationstart.animation), "TransitionEvent" in window || delete fm.transitionend.transition);
    var LS = mo("animationend"), XS = mo("animationiteration"), VS = mo("animationstart"), ZE = mo("transitionrun"), JE = mo("transitionstart"), KE = mo("transitioncancel"), QS = mo("transitionend"), ZS = /* @__PURE__ */ new Map(), A1 = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
    A1.push("scrollEnd");
    var JS = 0;
    if (typeof performance == "object" && typeof performance.now == "function")
      var $E = performance, KS = function() {
        return $E.now();
      };
    else {
      var kE = Date;
      KS = function() {
        return kE.now();
      };
    }
    var R1 = typeof reportError == "function" ? reportError : function(e) {
      if (typeof window == "object" && typeof window.ErrorEvent == "function") {
        var t = new window.ErrorEvent("error", {
          bubbles: !0,
          cancelable: !0,
          message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e),
          error: e
        });
        if (!window.dispatchEvent(t)) return;
      } else if (typeof process == "object" && typeof process.emit == "function") {
        process.emit("uncaughtException", e);
        return;
      }
      console.error(e);
    }, FE = "This object has been omitted by React in the console log to avoid sending too much data from the server. Try logging smaller or more specific objects.", Pg = 0, _1 = 1, O1 = 2, D1 = 3, ev = "– ", tv = "+ ", $S = "  ", rl = typeof console < "u" && typeof console.timeStamp == "function" && typeof performance < "u" && typeof performance.measure == "function", Di = "Components ⚛", At = "Scheduler ⚛", _t = "Blocking", Tr = !1, Po = {
      color: "primary",
      properties: null,
      tooltipText: "",
      track: Di
    }, Ar = {
      start: -0,
      end: -0,
      detail: { devtools: Po }
    }, WE = ["Changed Props", ""], kS = "This component received deeply equal props. It might benefit from useMemo or the React Compiler in its owner.", IE = ["Changed Props", kS], G0 = 1, ef = 2, zi = [], rm = 0, z1 = 0, Rr = {};
    Object.freeze(Rr);
    var Mi = null, sm = null, Ze = 0, PE = 1, dt = 2, gn = 8, hc = 16, eT = 32, FS = !1;
    try {
      var WS = Object.preventExtensions({});
    } catch {
      FS = !0;
    }
    var M1 = /* @__PURE__ */ new WeakMap(), dm = [], hm = 0, lv = null, L0 = 0, Ci = [], Ui = 0, nd = null, tf = 1, lf = "", nn = null, sl = null, Tt = !1, to = !1, Xu = null, _r = null, Hi = !1, C1 = Error(
      "Hydration Mismatch Exception: This is not a real error, and should not leak into userspace. If you're seeing this, it's likely a bug in React."
    ), U1 = Ht(null), H1 = Ht(null), IS = {}, av = null, mm = null, ym = !1, tT = typeof AbortController < "u" ? AbortController : function() {
      var e = [], t = this.signal = {
        aborted: !1,
        addEventListener: function(a, i) {
          e.push(i);
        }
      };
      this.abort = function() {
        t.aborted = !0, e.forEach(function(a) {
          return a();
        });
      };
    }, lT = Cl.unstable_scheduleCallback, aT = Cl.unstable_NormalPriority, ua = {
      $$typeof: ju,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
      _currentRenderer: null,
      _currentRenderer2: null
    }, ia = Cl.unstable_now, nv = console.createTask ? console.createTask : function() {
      return null;
    }, X0 = 1, uv = 2, Na = -0, Or = -0, af = -0, nf = null, Xn = -1.1, ud = -0, Al = -0, xe = -1.1, Le = -1.1, gl = null, Ul = !1, id = -0, lo = -1.1, V0 = null, Dr = 0, x1 = null, N1 = null, cd = -1.1, Q0 = null, pm = -1.1, iv = -1.1, uf = -0, cf = -1.1, xi = -1.1, B1 = 0, Z0 = null, PS = null, eb = null, zr = -1.1, od = null, Mr = -1.1, cv = -1.1, tb = -0, lb = -0, ov = 0, nT = null, ab = 0, J0 = -1.1, fv = !1, rv = !1, K0 = null, Y1 = 0, fd = 0, gm = null, nb = Z.S;
    Z.S = function(e, t) {
      if (Pb = na(), typeof t == "object" && t !== null && typeof t.then == "function") {
        if (0 > cf && 0 > xi) {
          cf = ia();
          var a = lr(), i = Ei();
          (a !== Mr || i !== od) && (Mr = -1.1), zr = a, od = i;
        }
        ki(e, t);
      }
      nb !== null && nb(e, t);
    };
    var rd = Ht(null), mc = {
      recordUnsafeLifecycleWarnings: function() {
      },
      flushPendingUnsafeLifecycleWarnings: function() {
      },
      recordLegacyContextWarning: function() {
      },
      flushLegacyContextWarning: function() {
      },
      discardPendingWarnings: function() {
      }
    }, $0 = [], k0 = [], F0 = [], W0 = [], I0 = [], P0 = [], sd = /* @__PURE__ */ new Set();
    mc.recordUnsafeLifecycleWarnings = function(e, t) {
      sd.has(e.type) || (typeof t.componentWillMount == "function" && t.componentWillMount.__suppressDeprecationWarning !== !0 && $0.push(e), e.mode & gn && typeof t.UNSAFE_componentWillMount == "function" && k0.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && F0.push(e), e.mode & gn && typeof t.UNSAFE_componentWillReceiveProps == "function" && W0.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && I0.push(e), e.mode & gn && typeof t.UNSAFE_componentWillUpdate == "function" && P0.push(e));
    }, mc.flushPendingUnsafeLifecycleWarnings = function() {
      var e = /* @__PURE__ */ new Set();
      0 < $0.length && ($0.forEach(function(h) {
        e.add(
          pe(h) || "Component"
        ), sd.add(h.type);
      }), $0 = []);
      var t = /* @__PURE__ */ new Set();
      0 < k0.length && (k0.forEach(function(h) {
        t.add(
          pe(h) || "Component"
        ), sd.add(h.type);
      }), k0 = []);
      var a = /* @__PURE__ */ new Set();
      0 < F0.length && (F0.forEach(function(h) {
        a.add(
          pe(h) || "Component"
        ), sd.add(h.type);
      }), F0 = []);
      var i = /* @__PURE__ */ new Set();
      0 < W0.length && (W0.forEach(
        function(h) {
          i.add(
            pe(h) || "Component"
          ), sd.add(h.type);
        }
      ), W0 = []);
      var o = /* @__PURE__ */ new Set();
      0 < I0.length && (I0.forEach(function(h) {
        o.add(
          pe(h) || "Component"
        ), sd.add(h.type);
      }), I0 = []);
      var f = /* @__PURE__ */ new Set();
      if (0 < P0.length && (P0.forEach(function(h) {
        f.add(
          pe(h) || "Component"
        ), sd.add(h.type);
      }), P0 = []), 0 < t.size) {
        var d = Y(
          t
        );
        console.error(
          `Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`,
          d
        );
      }
      0 < i.size && (d = Y(
        i
      ), console.error(
        `Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://react.dev/link/derived-state

Please update the following components: %s`,
        d
      )), 0 < f.size && (d = Y(
        f
      ), console.error(
        `Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`,
        d
      )), 0 < e.size && (d = Y(e), console.warn(
        `componentWillMount has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,
        d
      )), 0 < a.size && (d = Y(
        a
      ), console.warn(
        `componentWillReceiveProps has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://react.dev/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,
        d
      )), 0 < o.size && (d = Y(o), console.warn(
        `componentWillUpdate has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,
        d
      ));
    };
    var sv = /* @__PURE__ */ new Map(), ub = /* @__PURE__ */ new Set();
    mc.recordLegacyContextWarning = function(e, t) {
      for (var a = null, i = e; i !== null; )
        i.mode & gn && (a = i), i = i.return;
      a === null ? console.error(
        "Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue."
      ) : !ub.has(e.type) && (i = sv.get(a), e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], sv.set(a, i)), i.push(e));
    }, mc.flushLegacyContextWarning = function() {
      sv.forEach(function(e) {
        if (e.length !== 0) {
          var t = e[0], a = /* @__PURE__ */ new Set();
          e.forEach(function(o) {
            a.add(pe(o) || "Component"), ub.add(o.type);
          });
          var i = Y(a);
          fe(t, function() {
            console.error(
              `Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://react.dev/link/legacy-context`,
              i
            );
          });
        }
      });
    }, mc.discardPendingWarnings = function() {
      $0 = [], k0 = [], F0 = [], W0 = [], I0 = [], P0 = [], sv = /* @__PURE__ */ new Map();
    };
    var ib = {
      react_stack_bottom_frame: function(e, t, a) {
        var i = Ai;
        Ai = !0;
        try {
          return e(t, a);
        } finally {
          Ai = i;
        }
      }
    }, w1 = ib.react_stack_bottom_frame.bind(ib), cb = {
      react_stack_bottom_frame: function(e) {
        var t = Ai;
        Ai = !0;
        try {
          return e.render();
        } finally {
          Ai = t;
        }
      }
    }, ob = cb.react_stack_bottom_frame.bind(cb), fb = {
      react_stack_bottom_frame: function(e, t) {
        try {
          t.componentDidMount();
        } catch (a) {
          it(e, e.return, a);
        }
      }
    }, q1 = fb.react_stack_bottom_frame.bind(
      fb
    ), rb = {
      react_stack_bottom_frame: function(e, t, a, i, o) {
        try {
          t.componentDidUpdate(a, i, o);
        } catch (f) {
          it(e, e.return, f);
        }
      }
    }, sb = rb.react_stack_bottom_frame.bind(
      rb
    ), db = {
      react_stack_bottom_frame: function(e, t) {
        var a = t.stack;
        e.componentDidCatch(t.value, {
          componentStack: a !== null ? a : ""
        });
      }
    }, uT = db.react_stack_bottom_frame.bind(
      db
    ), hb = {
      react_stack_bottom_frame: function(e, t, a) {
        try {
          a.componentWillUnmount();
        } catch (i) {
          it(e, t, i);
        }
      }
    }, mb = hb.react_stack_bottom_frame.bind(
      hb
    ), yb = {
      react_stack_bottom_frame: function(e) {
        var t = e.create;
        return e = e.inst, t = t(), e.destroy = t;
      }
    }, iT = yb.react_stack_bottom_frame.bind(yb), pb = {
      react_stack_bottom_frame: function(e, t, a) {
        try {
          a();
        } catch (i) {
          it(e, t, i);
        }
      }
    }, cT = pb.react_stack_bottom_frame.bind(pb), gb = {
      react_stack_bottom_frame: function(e) {
        var t = e._init;
        return t(e._payload);
      }
    }, oT = gb.react_stack_bottom_frame.bind(gb), vm = Error(
      "Suspense Exception: This is not a real error! It's an implementation detail of `use` to interrupt the current render. You must either rethrow it immediately, or move the `use` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary, or call the promise's `.catch` method and pass the result to `use`."
    ), j1 = Error(
      "Suspense Exception: This is not a real error, and should not leak into userspace. If you're seeing this, it's likely a bug in React."
    ), dv = Error(
      "Suspense Exception: This is not a real error! It's an implementation detail of `useActionState` to interrupt the current render. You must either rethrow it immediately, or move the `useActionState` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary."
    ), hv = {
      then: function() {
        console.error(
          'Internal React error: A listener was unexpectedly attached to a "noop" thenable. This is a bug in React. Please file an issue.'
        );
      }
    }, dd = null, ep = !1, Sm = null, tp = 0, ht = null, G1, vb = G1 = !1, Sb = {}, bb = {}, Eb = {};
    de = function(e, t, a) {
      if (a !== null && typeof a == "object" && a._store && (!a._store.validated && a.key == null || a._store.validated === 2)) {
        if (typeof a._store != "object")
          throw Error(
            "React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue."
          );
        a._store.validated = 1;
        var i = pe(e), o = i || "null";
        if (!Sb[o]) {
          Sb[o] = !0, a = a._owner, e = e._debugOwner;
          var f = "";
          e && typeof e.tag == "number" && (o = pe(e)) && (f = `

Check the render method of \`` + o + "`."), f || i && (f = `

Check the top-level render call using <` + i + ">.");
          var d = "";
          a != null && e !== a && (i = null, typeof a.tag == "number" ? i = pe(a) : typeof a.name == "string" && (i = a.name), i && (d = " It was passed a child from " + i + ".")), fe(t, function() {
            console.error(
              'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
              f,
              d
            );
          });
        }
      }
    };
    var hd = Pl(!0), Tb = Pl(!1), Ab = 0, Rb = 1, _b = 2, L1 = 3, Cr = !1, Ob = !1, X1 = null, V1 = !1, bm = Ht(null), mv = Ht(0), Vu = Ht(null), Ni = null, Em = 1, lp = 2, $l = Ht(0), yv = 0, Bi = 1, Vn = 2, Qu = 4, Qn = 8, Tm, Db = /* @__PURE__ */ new Set(), zb = /* @__PURE__ */ new Set(), Q1 = /* @__PURE__ */ new Set(), Mb = /* @__PURE__ */ new Set(), of = 0, ke = null, el = null, ca = null, pv = !1, Am = !1, md = !1, gv = 0, ap = 0, ff = null, fT = 0, rT = 25, X = null, Yi = null, rf = -1, np = !1, up = {
      readContext: Nt,
      use: Pi,
      useCallback: El,
      useContext: El,
      useEffect: El,
      useImperativeHandle: El,
      useLayoutEffect: El,
      useInsertionEffect: El,
      useMemo: El,
      useReducer: El,
      useRef: El,
      useState: El,
      useDebugValue: El,
      useDeferredValue: El,
      useTransition: El,
      useSyncExternalStore: El,
      useId: El,
      useHostTransitionStatus: El,
      useFormState: El,
      useActionState: El,
      useOptimistic: El,
      useMemoCache: El,
      useCacheRefresh: El
    };
    up.useEffectEvent = El;
    var Z1 = null, Cb = null, J1 = null, Ub = null, ao = null, yc = null, vv = null;
    Z1 = {
      readContext: function(e) {
        return Nt(e);
      },
      use: Pi,
      useCallback: function(e, t) {
        return X = "useCallback", $e(), Ii(t), Fd(e, t);
      },
      useContext: function(e) {
        return X = "useContext", $e(), Nt(e);
      },
      useEffect: function(e, t) {
        return X = "useEffect", $e(), Ii(t), Uo(e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return X = "useImperativeHandle", $e(), Ii(a), fi(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        X = "useInsertionEffect", $e(), Ii(t), qc(4, Vn, e, t);
      },
      useLayoutEffect: function(e, t) {
        return X = "useLayoutEffect", $e(), Ii(t), $a(e, t);
      },
      useMemo: function(e, t) {
        X = "useMemo", $e(), Ii(t);
        var a = Z.H;
        Z.H = ao;
        try {
          return ka(e, t);
        } finally {
          Z.H = a;
        }
      },
      useReducer: function(e, t, a) {
        X = "useReducer", $e();
        var i = Z.H;
        Z.H = ao;
        try {
          return Hf(e, t, a);
        } finally {
          Z.H = i;
        }
      },
      useRef: function(e) {
        return X = "useRef", $e(), kd(e);
      },
      useState: function(e) {
        X = "useState", $e();
        var t = Z.H;
        Z.H = ao;
        try {
          return Nc(e);
        } finally {
          Z.H = t;
        }
      },
      useDebugValue: function() {
        X = "useDebugValue", $e();
      },
      useDeferredValue: function(e, t) {
        return X = "useDeferredValue", $e(), wf(e, t);
      },
      useTransition: function() {
        return X = "useTransition", $e(), jc();
      },
      useSyncExternalStore: function(e, t, a) {
        return X = "useSyncExternalStore", $e(), xf(
          e,
          t,
          a
        );
      },
      useId: function() {
        return X = "useId", $e(), gs();
      },
      useFormState: function(e, t) {
        return X = "useFormState", $e(), is(), Un(e, t);
      },
      useActionState: function(e, t) {
        return X = "useActionState", $e(), Un(e, t);
      },
      useOptimistic: function(e) {
        return X = "useOptimistic", $e(), Co(e);
      },
      useHostTransitionStatus: ac,
      useMemoCache: Mn,
      useCacheRefresh: function() {
        return X = "useCacheRefresh", $e(), Wd();
      },
      useEffectEvent: function(e) {
        return X = "useEffectEvent", $e(), ys(e);
      }
    }, Cb = {
      readContext: function(e) {
        return Nt(e);
      },
      use: Pi,
      useCallback: function(e, t) {
        return X = "useCallback", P(), Fd(e, t);
      },
      useContext: function(e) {
        return X = "useContext", P(), Nt(e);
      },
      useEffect: function(e, t) {
        return X = "useEffect", P(), Uo(e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return X = "useImperativeHandle", P(), fi(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        X = "useInsertionEffect", P(), qc(4, Vn, e, t);
      },
      useLayoutEffect: function(e, t) {
        return X = "useLayoutEffect", P(), $a(e, t);
      },
      useMemo: function(e, t) {
        X = "useMemo", P();
        var a = Z.H;
        Z.H = ao;
        try {
          return ka(e, t);
        } finally {
          Z.H = a;
        }
      },
      useReducer: function(e, t, a) {
        X = "useReducer", P();
        var i = Z.H;
        Z.H = ao;
        try {
          return Hf(e, t, a);
        } finally {
          Z.H = i;
        }
      },
      useRef: function(e) {
        return X = "useRef", P(), kd(e);
      },
      useState: function(e) {
        X = "useState", P();
        var t = Z.H;
        Z.H = ao;
        try {
          return Nc(e);
        } finally {
          Z.H = t;
        }
      },
      useDebugValue: function() {
        X = "useDebugValue", P();
      },
      useDeferredValue: function(e, t) {
        return X = "useDeferredValue", P(), wf(e, t);
      },
      useTransition: function() {
        return X = "useTransition", P(), jc();
      },
      useSyncExternalStore: function(e, t, a) {
        return X = "useSyncExternalStore", P(), xf(
          e,
          t,
          a
        );
      },
      useId: function() {
        return X = "useId", P(), gs();
      },
      useActionState: function(e, t) {
        return X = "useActionState", P(), Un(e, t);
      },
      useFormState: function(e, t) {
        return X = "useFormState", P(), is(), Un(e, t);
      },
      useOptimistic: function(e) {
        return X = "useOptimistic", P(), Co(e);
      },
      useHostTransitionStatus: ac,
      useMemoCache: Mn,
      useCacheRefresh: function() {
        return X = "useCacheRefresh", P(), Wd();
      },
      useEffectEvent: function(e) {
        return X = "useEffectEvent", P(), ys(e);
      }
    }, J1 = {
      readContext: function(e) {
        return Nt(e);
      },
      use: Pi,
      useCallback: function(e, t) {
        return X = "useCallback", P(), Cu(e, t);
      },
      useContext: function(e) {
        return X = "useContext", P(), Nt(e);
      },
      useEffect: function(e, t) {
        X = "useEffect", P(), Ql(2048, Qn, e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return X = "useImperativeHandle", P(), Yf(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        return X = "useInsertionEffect", P(), Ql(4, Vn, e, t);
      },
      useLayoutEffect: function(e, t) {
        return X = "useLayoutEffect", P(), Ql(4, Qu, e, t);
      },
      useMemo: function(e, t) {
        X = "useMemo", P();
        var a = Z.H;
        Z.H = yc;
        try {
          return cl(e, t);
        } finally {
          Z.H = a;
        }
      },
      useReducer: function(e, t, a) {
        X = "useReducer", P();
        var i = Z.H;
        Z.H = yc;
        try {
          return Do(e, t, a);
        } finally {
          Z.H = i;
        }
      },
      useRef: function() {
        return X = "useRef", P(), jt().memoizedState;
      },
      useState: function() {
        X = "useState", P();
        var e = Z.H;
        Z.H = yc;
        try {
          return Do(Cn);
        } finally {
          Z.H = e;
        }
      },
      useDebugValue: function() {
        X = "useDebugValue", P();
      },
      useDeferredValue: function(e, t) {
        return X = "useDeferredValue", P(), ri(e, t);
      },
      useTransition: function() {
        return X = "useTransition", P(), Kp();
      },
      useSyncExternalStore: function(e, t, a) {
        return X = "useSyncExternalStore", P(), Mo(
          e,
          t,
          a
        );
      },
      useId: function() {
        return X = "useId", P(), jt().memoizedState;
      },
      useFormState: function(e) {
        return X = "useFormState", P(), is(), Yc(e);
      },
      useActionState: function(e) {
        return X = "useActionState", P(), Yc(e);
      },
      useOptimistic: function(e, t) {
        return X = "useOptimistic", P(), ds(e, t);
      },
      useHostTransitionStatus: ac,
      useMemoCache: Mn,
      useCacheRefresh: function() {
        return X = "useCacheRefresh", P(), jt().memoizedState;
      },
      useEffectEvent: function(e) {
        return X = "useEffectEvent", P(), Bf(e);
      }
    }, Ub = {
      readContext: function(e) {
        return Nt(e);
      },
      use: Pi,
      useCallback: function(e, t) {
        return X = "useCallback", P(), Cu(e, t);
      },
      useContext: function(e) {
        return X = "useContext", P(), Nt(e);
      },
      useEffect: function(e, t) {
        X = "useEffect", P(), Ql(2048, Qn, e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return X = "useImperativeHandle", P(), Yf(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        return X = "useInsertionEffect", P(), Ql(4, Vn, e, t);
      },
      useLayoutEffect: function(e, t) {
        return X = "useLayoutEffect", P(), Ql(4, Qu, e, t);
      },
      useMemo: function(e, t) {
        X = "useMemo", P();
        var a = Z.H;
        Z.H = vv;
        try {
          return cl(e, t);
        } finally {
          Z.H = a;
        }
      },
      useReducer: function(e, t, a) {
        X = "useReducer", P();
        var i = Z.H;
        Z.H = vv;
        try {
          return zo(e, t, a);
        } finally {
          Z.H = i;
        }
      },
      useRef: function() {
        return X = "useRef", P(), jt().memoizedState;
      },
      useState: function() {
        X = "useState", P();
        var e = Z.H;
        Z.H = vv;
        try {
          return zo(Cn);
        } finally {
          Z.H = e;
        }
      },
      useDebugValue: function() {
        X = "useDebugValue", P();
      },
      useDeferredValue: function(e, t) {
        return X = "useDeferredValue", P(), at(e, t);
      },
      useTransition: function() {
        return X = "useTransition", P(), ml();
      },
      useSyncExternalStore: function(e, t, a) {
        return X = "useSyncExternalStore", P(), Mo(
          e,
          t,
          a
        );
      },
      useId: function() {
        return X = "useId", P(), jt().memoizedState;
      },
      useFormState: function(e) {
        return X = "useFormState", P(), is(), wc(e);
      },
      useActionState: function(e) {
        return X = "useActionState", P(), wc(e);
      },
      useOptimistic: function(e, t) {
        return X = "useOptimistic", P(), hs(e, t);
      },
      useHostTransitionStatus: ac,
      useMemoCache: Mn,
      useCacheRefresh: function() {
        return X = "useCacheRefresh", P(), jt().memoizedState;
      },
      useEffectEvent: function(e) {
        return X = "useEffectEvent", P(), Bf(e);
      }
    }, ao = {
      readContext: function(e) {
        return W(), Nt(e);
      },
      use: function(e) {
        return Q(), Pi(e);
      },
      useCallback: function(e, t) {
        return X = "useCallback", Q(), $e(), Fd(e, t);
      },
      useContext: function(e) {
        return X = "useContext", Q(), $e(), Nt(e);
      },
      useEffect: function(e, t) {
        return X = "useEffect", Q(), $e(), Uo(e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return X = "useImperativeHandle", Q(), $e(), fi(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        X = "useInsertionEffect", Q(), $e(), qc(4, Vn, e, t);
      },
      useLayoutEffect: function(e, t) {
        return X = "useLayoutEffect", Q(), $e(), $a(e, t);
      },
      useMemo: function(e, t) {
        X = "useMemo", Q(), $e();
        var a = Z.H;
        Z.H = ao;
        try {
          return ka(e, t);
        } finally {
          Z.H = a;
        }
      },
      useReducer: function(e, t, a) {
        X = "useReducer", Q(), $e();
        var i = Z.H;
        Z.H = ao;
        try {
          return Hf(e, t, a);
        } finally {
          Z.H = i;
        }
      },
      useRef: function(e) {
        return X = "useRef", Q(), $e(), kd(e);
      },
      useState: function(e) {
        X = "useState", Q(), $e();
        var t = Z.H;
        Z.H = ao;
        try {
          return Nc(e);
        } finally {
          Z.H = t;
        }
      },
      useDebugValue: function() {
        X = "useDebugValue", Q(), $e();
      },
      useDeferredValue: function(e, t) {
        return X = "useDeferredValue", Q(), $e(), wf(e, t);
      },
      useTransition: function() {
        return X = "useTransition", Q(), $e(), jc();
      },
      useSyncExternalStore: function(e, t, a) {
        return X = "useSyncExternalStore", Q(), $e(), xf(
          e,
          t,
          a
        );
      },
      useId: function() {
        return X = "useId", Q(), $e(), gs();
      },
      useFormState: function(e, t) {
        return X = "useFormState", Q(), $e(), Un(e, t);
      },
      useActionState: function(e, t) {
        return X = "useActionState", Q(), $e(), Un(e, t);
      },
      useOptimistic: function(e) {
        return X = "useOptimistic", Q(), $e(), Co(e);
      },
      useMemoCache: function(e) {
        return Q(), Mn(e);
      },
      useHostTransitionStatus: ac,
      useCacheRefresh: function() {
        return X = "useCacheRefresh", $e(), Wd();
      },
      useEffectEvent: function(e) {
        return X = "useEffectEvent", Q(), $e(), ys(e);
      }
    }, yc = {
      readContext: function(e) {
        return W(), Nt(e);
      },
      use: function(e) {
        return Q(), Pi(e);
      },
      useCallback: function(e, t) {
        return X = "useCallback", Q(), P(), Cu(e, t);
      },
      useContext: function(e) {
        return X = "useContext", Q(), P(), Nt(e);
      },
      useEffect: function(e, t) {
        X = "useEffect", Q(), P(), Ql(2048, Qn, e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return X = "useImperativeHandle", Q(), P(), Yf(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        return X = "useInsertionEffect", Q(), P(), Ql(4, Vn, e, t);
      },
      useLayoutEffect: function(e, t) {
        return X = "useLayoutEffect", Q(), P(), Ql(4, Qu, e, t);
      },
      useMemo: function(e, t) {
        X = "useMemo", Q(), P();
        var a = Z.H;
        Z.H = yc;
        try {
          return cl(e, t);
        } finally {
          Z.H = a;
        }
      },
      useReducer: function(e, t, a) {
        X = "useReducer", Q(), P();
        var i = Z.H;
        Z.H = yc;
        try {
          return Do(e, t, a);
        } finally {
          Z.H = i;
        }
      },
      useRef: function() {
        return X = "useRef", Q(), P(), jt().memoizedState;
      },
      useState: function() {
        X = "useState", Q(), P();
        var e = Z.H;
        Z.H = yc;
        try {
          return Do(Cn);
        } finally {
          Z.H = e;
        }
      },
      useDebugValue: function() {
        X = "useDebugValue", Q(), P();
      },
      useDeferredValue: function(e, t) {
        return X = "useDeferredValue", Q(), P(), ri(e, t);
      },
      useTransition: function() {
        return X = "useTransition", Q(), P(), Kp();
      },
      useSyncExternalStore: function(e, t, a) {
        return X = "useSyncExternalStore", Q(), P(), Mo(
          e,
          t,
          a
        );
      },
      useId: function() {
        return X = "useId", Q(), P(), jt().memoizedState;
      },
      useFormState: function(e) {
        return X = "useFormState", Q(), P(), Yc(e);
      },
      useActionState: function(e) {
        return X = "useActionState", Q(), P(), Yc(e);
      },
      useOptimistic: function(e, t) {
        return X = "useOptimistic", Q(), P(), ds(e, t);
      },
      useMemoCache: function(e) {
        return Q(), Mn(e);
      },
      useHostTransitionStatus: ac,
      useCacheRefresh: function() {
        return X = "useCacheRefresh", P(), jt().memoizedState;
      },
      useEffectEvent: function(e) {
        return X = "useEffectEvent", Q(), P(), Bf(e);
      }
    }, vv = {
      readContext: function(e) {
        return W(), Nt(e);
      },
      use: function(e) {
        return Q(), Pi(e);
      },
      useCallback: function(e, t) {
        return X = "useCallback", Q(), P(), Cu(e, t);
      },
      useContext: function(e) {
        return X = "useContext", Q(), P(), Nt(e);
      },
      useEffect: function(e, t) {
        X = "useEffect", Q(), P(), Ql(2048, Qn, e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return X = "useImperativeHandle", Q(), P(), Yf(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        return X = "useInsertionEffect", Q(), P(), Ql(4, Vn, e, t);
      },
      useLayoutEffect: function(e, t) {
        return X = "useLayoutEffect", Q(), P(), Ql(4, Qu, e, t);
      },
      useMemo: function(e, t) {
        X = "useMemo", Q(), P();
        var a = Z.H;
        Z.H = yc;
        try {
          return cl(e, t);
        } finally {
          Z.H = a;
        }
      },
      useReducer: function(e, t, a) {
        X = "useReducer", Q(), P();
        var i = Z.H;
        Z.H = yc;
        try {
          return zo(e, t, a);
        } finally {
          Z.H = i;
        }
      },
      useRef: function() {
        return X = "useRef", Q(), P(), jt().memoizedState;
      },
      useState: function() {
        X = "useState", Q(), P();
        var e = Z.H;
        Z.H = yc;
        try {
          return zo(Cn);
        } finally {
          Z.H = e;
        }
      },
      useDebugValue: function() {
        X = "useDebugValue", Q(), P();
      },
      useDeferredValue: function(e, t) {
        return X = "useDeferredValue", Q(), P(), at(e, t);
      },
      useTransition: function() {
        return X = "useTransition", Q(), P(), ml();
      },
      useSyncExternalStore: function(e, t, a) {
        return X = "useSyncExternalStore", Q(), P(), Mo(
          e,
          t,
          a
        );
      },
      useId: function() {
        return X = "useId", Q(), P(), jt().memoizedState;
      },
      useFormState: function(e) {
        return X = "useFormState", Q(), P(), wc(e);
      },
      useActionState: function(e) {
        return X = "useActionState", Q(), P(), wc(e);
      },
      useOptimistic: function(e, t) {
        return X = "useOptimistic", Q(), P(), hs(e, t);
      },
      useMemoCache: function(e) {
        return Q(), Mn(e);
      },
      useHostTransitionStatus: ac,
      useCacheRefresh: function() {
        return X = "useCacheRefresh", P(), jt().memoizedState;
      },
      useEffectEvent: function(e) {
        return X = "useEffectEvent", Q(), P(), Bf(e);
      }
    };
    var Hb = {}, xb = /* @__PURE__ */ new Set(), Nb = /* @__PURE__ */ new Set(), Bb = /* @__PURE__ */ new Set(), Yb = /* @__PURE__ */ new Set(), wb = /* @__PURE__ */ new Set(), qb = /* @__PURE__ */ new Set(), jb = /* @__PURE__ */ new Set(), Gb = /* @__PURE__ */ new Set(), Lb = /* @__PURE__ */ new Set(), Xb = /* @__PURE__ */ new Set();
    Object.freeze(Hb);
    var K1 = {
      enqueueSetState: function(e, t, a) {
        e = e._reactInternals;
        var i = Ua(e), o = Vl(i);
        o.payload = t, a != null && (Bo(a), o.callback = a), t = ui(e, o, i), t !== null && (li(i, "this.setState()", e), Ke(t, e, i), lu(t, e, i));
      },
      enqueueReplaceState: function(e, t, a) {
        e = e._reactInternals;
        var i = Ua(e), o = Vl(i);
        o.tag = Rb, o.payload = t, a != null && (Bo(a), o.callback = a), t = ui(e, o, i), t !== null && (li(i, "this.replaceState()", e), Ke(t, e, i), lu(t, e, i));
      },
      enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var a = Ua(e), i = Vl(a);
        i.tag = _b, t != null && (Bo(t), i.callback = t), t = ui(e, i, a), t !== null && (li(a, "this.forceUpdate()", e), Ke(t, e, a), lu(t, e, a));
      }
    }, Rm = null, $1 = null, k1 = Error(
      "This is not a real error. It's an implementation detail of React's selective hydration feature. If this leaks into userspace, it's a bug in React. Please file an issue."
    ), oa = !1, Vb = {}, Qb = {}, Zb = {}, Jb = {}, _m = !1, Kb = {}, Sv = {}, F1 = {
      dehydrated: null,
      treeContext: null,
      retryLane: 0,
      hydrationErrors: null
    }, $b = !1, kb = null;
    kb = /* @__PURE__ */ new Set();
    var sf = !1, fa = !1, W1 = !1, Fb = typeof WeakSet == "function" ? WeakSet : Set, Ba = null, Om = null, Dm = null, ra = null, ou = !1, pc = null, Aa = !1, ip = 8192, sT = {
      getCacheForType: function(e) {
        var t = Nt(ua), a = t.data.get(e);
        return a === void 0 && (a = e(), t.data.set(e, a)), a;
      },
      cacheSignal: function() {
        return Nt(ua).controller.signal;
      },
      getOwner: function() {
        return pn;
      }
    };
    if (typeof Symbol == "function" && Symbol.for) {
      var cp = Symbol.for;
      cp("selector.component"), cp("selector.has_pseudo_class"), cp("selector.role"), cp("selector.test_id"), cp("selector.text");
    }
    var dT = [], hT = typeof WeakMap == "function" ? WeakMap : Map, Ya = 0, Ra = 2, Zu = 4, df = 0, op = 1, yd = 2, bv = 3, Ur = 4, Ev = 6, Wb = 5, zt = Ya, tl = null, pt = null, mt = 0, fu = 0, Tv = 1, pd = 2, fp = 3, Ib = 4, I1 = 5, rp = 6, Av = 7, P1 = 8, gd = 9, kt = fu, Ju = null, Hr = !1, zm = !1, eS = !1, no = 0, Rl = df, xr = 0, Nr = 0, tS = 0, ru = 0, vd = 0, sp = null, Zn = null, Rv = !1, _v = 0, Pb = 0, e2 = 300, Ov = 1 / 0, t2 = 500, dp = null, jl = null, Br = null, Dv = 0, lS = 1, aS = 2, l2 = 3, Yr = 0, a2 = 1, n2 = 2, u2 = 3, i2 = 4, zv = 5, sa = 0, wr = null, Mm = null, gc = 0, nS = 0, uS = -0, iS = null, c2 = null, o2 = null, vc = Dv, f2 = null, mT = 50, hp = 0, cS = null, oS = !1, Mv = !1, yT = 50, Sd = 0, mp = null, Cm = !1, Cv = null, r2 = !1, s2 = /* @__PURE__ */ new Set(), pT = {}, Uv = null, Um = null, fS = !1, rS = !1, Hv = !1, sS = !1, qr = 0, dS = {};
    (function() {
      for (var e = 0; e < A1.length; e++) {
        var t = A1[e], a = t.toLowerCase();
        t = t[0].toUpperCase() + t.slice(1), bu(a, "on" + t);
      }
      bu(LS, "onAnimationEnd"), bu(XS, "onAnimationIteration"), bu(VS, "onAnimationStart"), bu("dblclick", "onDoubleClick"), bu("focusin", "onFocus"), bu("focusout", "onBlur"), bu(ZE, "onTransitionRun"), bu(JE, "onTransitionStart"), bu(KE, "onTransitionCancel"), bu(QS, "onTransitionEnd");
    })(), je("onMouseEnter", ["mouseout", "mouseover"]), je("onMouseLeave", ["mouseout", "mouseover"]), je("onPointerEnter", ["pointerout", "pointerover"]), je("onPointerLeave", ["pointerout", "pointerover"]), nt(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ), nt(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ), nt("onBeforeInput", [
      "compositionend",
      "keypress",
      "textInput",
      "paste"
    ]), nt(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ), nt(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ), nt(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
    var yp = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ), hS = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(yp)
    ), xv = "_reactListening" + Math.random().toString(36).slice(2), d2 = !1, h2 = !1, Nv = !1, m2 = !1, Bv = !1, Yv = !1, y2 = !1, wv = {}, gT = /\r\n?/g, vT = /\u0000|\uFFFD/g, bd = "http://www.w3.org/1999/xlink", mS = "http://www.w3.org/XML/1998/namespace", ST = "javascript:throw new Error('React form unexpectedly submitted.')", bT = "suppressHydrationWarning", Ed = "&", qv = "/&", pp = "$", gp = "/$", jr = "$?", Td = "$~", Hm = "$!", ET = "html", TT = "body", AT = "head", yS = "F!", p2 = "F", g2 = "loading", RT = "style", hf = 0, xm = 1, jv = 2, pS = null, gS = null, v2 = { dialog: !0, webview: !0 }, vS = null, vp = void 0, S2 = typeof setTimeout == "function" ? setTimeout : void 0, _T = typeof clearTimeout == "function" ? clearTimeout : void 0, Ad = -1, b2 = typeof Promise == "function" ? Promise : void 0, OT = typeof queueMicrotask == "function" ? queueMicrotask : typeof b2 < "u" ? function(e) {
      return b2.resolve(null).then(e).catch(yg);
    } : S2, SS = null, Rd = 0, Sp = 1, E2 = 2, T2 = 3, wi = 4, qi = /* @__PURE__ */ new Map(), A2 = /* @__PURE__ */ new Set(), mf = Yt.d;
    Yt.d = {
      f: function() {
        var e = mf.f(), t = Yn();
        return e || t;
      },
      r: function(e) {
        var t = ce(e);
        t !== null && t.tag === 5 && t.type === "form" ? qf(t) : mf.r(e);
      },
      D: function(e) {
        mf.D(e), i0("dns-prefetch", e, null);
      },
      C: function(e, t) {
        mf.C(e, t), i0("preconnect", e, t);
      },
      L: function(e, t, a) {
        mf.L(e, t, a);
        var i = Nm;
        if (i && e && t) {
          var o = 'link[rel="preload"][as="' + Re(t) + '"]';
          t === "image" && a && a.imageSrcSet ? (o += '[imagesrcset="' + Re(
            a.imageSrcSet
          ) + '"]', typeof a.imageSizes == "string" && (o += '[imagesizes="' + Re(
            a.imageSizes
          ) + '"]')) : o += '[href="' + Re(e) + '"]';
          var f = o;
          switch (t) {
            case "style":
              f = Zo(e);
              break;
            case "script":
              f = Jo(e);
          }
          qi.has(f) || (e = st(
            {
              rel: "preload",
              href: t === "image" && a && a.imageSrcSet ? void 0 : e,
              as: t
            },
            a
          ), qi.set(f, e), i.querySelector(o) !== null || t === "style" && i.querySelector(
            Vs(f)
          ) || t === "script" && i.querySelector(Qs(f)) || (t = i.createElement("link"), ol(t, "link", e), Ee(t), i.head.appendChild(t)));
        }
      },
      m: function(e, t) {
        mf.m(e, t);
        var a = Nm;
        if (a && e) {
          var i = t && typeof t.as == "string" ? t.as : "script", o = 'link[rel="modulepreload"][as="' + Re(i) + '"][href="' + Re(e) + '"]', f = o;
          switch (i) {
            case "audioworklet":
            case "paintworklet":
            case "serviceworker":
            case "sharedworker":
            case "worker":
            case "script":
              f = Jo(e);
          }
          if (!qi.has(f) && (e = st({ rel: "modulepreload", href: e }, t), qi.set(f, e), a.querySelector(o) === null)) {
            switch (i) {
              case "audioworklet":
              case "paintworklet":
              case "serviceworker":
              case "sharedworker":
              case "worker":
              case "script":
                if (a.querySelector(Qs(f)))
                  return;
            }
            i = a.createElement("link"), ol(i, "link", e), Ee(i), a.head.appendChild(i);
          }
        }
      },
      X: function(e, t) {
        mf.X(e, t);
        var a = Nm;
        if (a && e) {
          var i = Me(a).hoistableScripts, o = Jo(e), f = i.get(o);
          f || (f = a.querySelector(
            Qs(o)
          ), f || (e = st({ src: e, async: !0 }, t), (t = qi.get(o)) && f0(e, t), f = a.createElement("script"), Ee(f), ol(f, "link", e), a.head.appendChild(f)), f = {
            type: "script",
            instance: f,
            count: 1,
            state: null
          }, i.set(o, f));
        }
      },
      S: function(e, t, a) {
        mf.S(e, t, a);
        var i = Nm;
        if (i && e) {
          var o = Me(i).hoistableStyles, f = Zo(e);
          t = t || "default";
          var d = o.get(f);
          if (!d) {
            var h = { loading: Rd, preload: null };
            if (d = i.querySelector(
              Vs(f)
            ))
              h.loading = Sp | wi;
            else {
              e = st(
                {
                  rel: "stylesheet",
                  href: e,
                  "data-precedence": t
                },
                a
              ), (a = qi.get(f)) && o0(e, a);
              var y = d = i.createElement("link");
              Ee(y), ol(y, "link", e), y._p = new Promise(function(p, M) {
                y.onload = p, y.onerror = M;
              }), y.addEventListener("load", function() {
                h.loading |= Sp;
              }), y.addEventListener("error", function() {
                h.loading |= E2;
              }), h.loading |= wi, ur(d, t, i);
            }
            d = {
              type: "stylesheet",
              instance: d,
              count: 1,
              state: h
            }, o.set(f, d);
          }
        }
      },
      M: function(e, t) {
        mf.M(e, t);
        var a = Nm;
        if (a && e) {
          var i = Me(a).hoistableScripts, o = Jo(e), f = i.get(o);
          f || (f = a.querySelector(
            Qs(o)
          ), f || (e = st({ src: e, async: !0, type: "module" }, t), (t = qi.get(o)) && f0(e, t), f = a.createElement("script"), Ee(f), ol(f, "link", e), a.head.appendChild(f)), f = {
            type: "script",
            instance: f,
            count: 1,
            state: null
          }, i.set(o, f));
        }
      }
    };
    var Nm = typeof document > "u" ? null : document, Gv = null, DT = 6e4, zT = 800, MT = 500, bS = 0, ES = null, Lv = null, _d = s1, bp = {
      $$typeof: ju,
      Provider: null,
      Consumer: null,
      _currentValue: _d,
      _currentValue2: _d,
      _threadCount: 0
    }, R2 = "%c%s%c", _2 = "background: #e6e6e6;background: light-dark(rgba(0,0,0,0.1), rgba(255,255,255,0.25));color: #000000;color: light-dark(#000000, #ffffff);border-radius: 2px", O2 = "", Xv = " ", CT = Function.prototype.bind, D2 = !1, z2 = null, M2 = null, C2 = null, U2 = null, H2 = null, x2 = null, N2 = null, B2 = null, Y2 = null, w2 = null;
    z2 = function(e, t, a, i) {
      t = T(e, t), t !== null && (a = q(t.memoizedState, a, 0, i), t.memoizedState = a, t.baseState = a, e.memoizedProps = st({}, e.memoizedProps), a = Ma(e, 2), a !== null && Ke(a, e, 2));
    }, M2 = function(e, t, a) {
      t = T(e, t), t !== null && (a = ee(t.memoizedState, a, 0), t.memoizedState = a, t.baseState = a, e.memoizedProps = st({}, e.memoizedProps), a = Ma(e, 2), a !== null && Ke(a, e, 2));
    }, C2 = function(e, t, a, i) {
      t = T(e, t), t !== null && (a = ne(t.memoizedState, a, i), t.memoizedState = a, t.baseState = a, e.memoizedProps = st({}, e.memoizedProps), a = Ma(e, 2), a !== null && Ke(a, e, 2));
    }, U2 = function(e, t, a) {
      e.pendingProps = q(e.memoizedProps, t, 0, a), e.alternate && (e.alternate.pendingProps = e.pendingProps), t = Ma(e, 2), t !== null && Ke(t, e, 2);
    }, H2 = function(e, t) {
      e.pendingProps = ee(e.memoizedProps, t, 0), e.alternate && (e.alternate.pendingProps = e.pendingProps), t = Ma(e, 2), t !== null && Ke(t, e, 2);
    }, x2 = function(e, t, a) {
      e.pendingProps = ne(
        e.memoizedProps,
        t,
        a
      ), e.alternate && (e.alternate.pendingProps = e.pendingProps), t = Ma(e, 2), t !== null && Ke(t, e, 2);
    }, N2 = function(e) {
      var t = Ma(e, 2);
      t !== null && Ke(t, e, 2);
    }, B2 = function(e) {
      var t = Gl(), a = Ma(e, t);
      a !== null && Ke(a, e, t);
    }, Y2 = function(e) {
      he = e;
    }, w2 = function(e) {
      te = e;
    };
    var Vv = !0, Qv = null, TS = !1, Gr = null, Lr = null, Xr = null, Ep = /* @__PURE__ */ new Map(), Tp = /* @__PURE__ */ new Map(), Vr = [], UT = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
      " "
    ), Zv = null;
    if (qu.prototype.render = S0.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null) throw Error("Cannot update an unmounted root.");
      var a = arguments;
      typeof a[1] == "function" ? console.error(
        "does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect()."
      ) : Qe(a[1]) ? console.error(
        "You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root."
      ) : typeof a[1] < "u" && console.error(
        "You passed a second argument to root.render(...) but it only accepts one argument."
      ), a = e;
      var i = t.current, o = Ua(i);
      Lh(i, o, a, t, null, null);
    }, qu.prototype.unmount = S0.prototype.unmount = function() {
      var e = arguments;
      if (typeof e[0] == "function" && console.error(
        "does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect()."
      ), e = this._internalRoot, e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        (zt & (Ra | Zu)) !== Ya && console.error(
          "Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."
        ), Lh(e.current, 2, null, e, null, null), Yn(), t[dc] = null;
      }
    }, qu.prototype.unstable_scheduleHydration = function(e) {
      if (e) {
        var t = du();
        e = { blockedOn: null, target: e, priority: t };
        for (var a = 0; a < Vr.length && t !== 0 && t < Vr[a].priority; a++) ;
        Vr.splice(a, 0, e), a === 0 && v0(e);
      }
    }, (function() {
      var e = ks.version;
      if (e !== "19.2.8")
        throw Error(
          `Incompatible React versions: The "react" and "react-dom" packages must have the exact same version. Instead got:
  - react:      ` + (e + `
  - react-dom:  19.2.8
Learn more: https://react.dev/warnings/version-mismatch`)
        );
    })(), typeof Map == "function" && Map.prototype != null && typeof Map.prototype.forEach == "function" && typeof Set == "function" && Set.prototype != null && typeof Set.prototype.clear == "function" && typeof Set.prototype.forEach == "function" || console.error(
      "React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://react.dev/link/react-polyfills"
    ), Yt.findDOMNode = function(e) {
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == "function" ? Error("Unable to find node on an unmounted component.") : (e = Object.keys(e).join(","), Error(
          "Argument appears to not be a ReactComponent. Keys: " + e
        ));
      return e = Vt(t), e = e !== null ? Ft(e) : null, e = e === null ? null : e.stateNode, e;
    }, !(function() {
      var e = {
        bundleType: 1,
        version: "19.2.8",
        rendererPackageName: "react-dom",
        currentDispatcherRef: Z,
        reconcilerVersion: "19.2.8"
      };
      return e.overrideHookState = z2, e.overrideHookStateDeletePath = M2, e.overrideHookStateRenamePath = C2, e.overrideProps = U2, e.overridePropsDeletePath = H2, e.overridePropsRenamePath = x2, e.scheduleUpdate = N2, e.scheduleRetry = B2, e.setErrorHandler = Y2, e.setSuspenseHandler = w2, e.scheduleRefresh = ze, e.scheduleRoot = oe, e.setRefreshHandler = We, e.getCurrentFiber = Kt, Sc(e);
    })() && eo && window.top === window.self && (-1 < navigator.userAgent.indexOf("Chrome") && navigator.userAgent.indexOf("Edge") === -1 || -1 < navigator.userAgent.indexOf("Firefox"))) {
      var q2 = window.location.protocol;
      /^(https?|file):$/.test(q2) && console.info(
        "%cDownload the React DevTools for a better development experience: https://react.dev/link/react-devtools" + (q2 === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://react.dev/link/react-devtools-faq` : ""),
        "font-weight:bold"
      );
    }
    Op.createRoot = function(e, t) {
      if (!Qe(e))
        throw Error("Target container is not a DOM element.");
      b0(e);
      var a = !1, i = "", o = eh, f = th, d = my;
      return t != null && (t.hydrate ? console.warn(
        "hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead."
      ) : typeof t == "object" && t !== null && t.$$typeof === iu && console.error(
        `You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`
      ), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (i = t.identifierPrefix), t.onUncaughtError !== void 0 && (o = t.onUncaughtError), t.onCaughtError !== void 0 && (f = t.onCaughtError), t.onRecoverableError !== void 0 && (d = t.onRecoverableError)), t = Ks(
        e,
        1,
        !1,
        null,
        null,
        a,
        i,
        null,
        o,
        f,
        d,
        jg
      ), e[dc] = t.current, Jc(e), new S0(t);
    }, Op.hydrateRoot = function(e, t, a) {
      if (!Qe(e))
        throw Error("Target container is not a DOM element.");
      b0(e), t === void 0 && console.error(
        "Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)"
      );
      var i = !1, o = "", f = eh, d = th, h = my, y = null;
      return a != null && (a.unstable_strictMode === !0 && (i = !0), a.identifierPrefix !== void 0 && (o = a.identifierPrefix), a.onUncaughtError !== void 0 && (f = a.onUncaughtError), a.onCaughtError !== void 0 && (d = a.onCaughtError), a.onRecoverableError !== void 0 && (h = a.onRecoverableError), a.formState !== void 0 && (y = a.formState)), t = Ks(
        e,
        1,
        !0,
        t,
        a ?? null,
        i,
        o,
        y,
        f,
        d,
        h,
        jg
      ), t.context = Bg(null), a = t.current, i = Ua(a), i = Oa(i), o = Vl(i), o.callback = null, ui(a, o, i), li(i, "hydrateRoot()", null), a = i, t.current.lanes = a, Ll(t, a), dn(t), e[dc] = t.current, Jc(e), new qu(t);
    }, Op.version = "19.2.8", typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  })()), Op;
}
var P2;
function QT() {
  if (P2) return $v.exports;
  P2 = 1;
  function T() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
      if (process.env.NODE_ENV !== "production")
        throw new Error("^_^");
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(T);
      } catch (q) {
        console.error(q);
      }
    }
  }
  return process.env.NODE_ENV === "production" ? (T(), $v.exports = XT()) : $v.exports = VT(), $v.exports;
}
var ZT = QT();
const eE = [
  ["FF7A45", "FFB199"],
  ["4D7CFE", "9BC1FF"],
  ["16C79A", "9BE7C4"],
  ["FFC53D", "FFE9A8"],
  ["B15CFF", "E0B8FF"],
  ["FF4D7E", "FFB3C7"]
], JT = (T, q = 1200, ne = 800) => {
  const [E, ee] = eE[T % eE.length], te = String(T + 1).padStart(2, "0");
  return `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='${q}' height='${ne}'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' y1='0' x2='1' y2='1'%3E%3Cstop offset='0' stop-color='%23${E}'/%3E%3Cstop offset='1' stop-color='%23${ee}'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='${q}' height='${ne}' fill='url(%23g)'/%3E%3Ctext x='50%25' y='50%25' dy='.35em' text-anchor='middle' font-family='Inter, Helvetica, Arial, sans-serif' font-size='${Math.round(Math.min(q, ne) * 0.34)}' font-weight='700' fill='rgba(255,255,255,0.9)'%3E${te}%3C/text%3E%3C/svg%3E`.replace(/ /g, "%20").replace(/'/g, "%27").replace(/\(/g, "%28").replace(/\)/g, "%29");
}, KT = Array.from({ length: 12 }, (T, q) => ({
  image: JT(q, 800, 600),
  link: ""
})), $T = (
  /* glsl */
  `
precision highp float;
attribute vec2 aCorner;      // unit quad, -0.5 .. 0.5
uniform mat4 uMVP;
varying vec2 vUv;
void main() {
    vUv = aCorner + 0.5;
    gl_Position = uMVP * vec4(aCorner, 0.0, 1.0);
}
`
), kT = (
  /* glsl */
  `
precision highp float;

varying vec2 vUv;

uniform sampler2D uMap;
uniform float uHasTex;
uniform vec2  uHalf;     // half extents in aspect-correct local units
uniform float uRadius;   // corner radius in those same units
uniform float uAA;       // one screen pixel, in those same units
uniform float uOpacity;
uniform float uDim;      // depth shading, 0 = fully in shadow
uniform vec3  uPlaceholder;

float sdRoundBox(vec2 p, vec2 b, float r) {
    vec2 q = abs(p) - b + r;
    return min(max(q.x, q.y), 0.0) + length(max(q, 0.0)) - r;
}

void main() {
    vec2 p = (vUv - 0.5) * 2.0 * uHalf;
    /* uRadius reaching half the SHORT side means a full circle, not a stadium.
     * The sampled point still spans the plate's true half-extents, but the SDF
     * box narrows toward a square as the radius grows, so at maximum the two
     * meet at a circle and the long axis is clipped away. Deriving the dial
     * back out of uRadius keeps this to zero extra uniforms. */
    float sHalf = min(uHalf.x, uHalf.y);
    float t = sHalf > 0.0 ? clamp(uRadius / sHalf, 0.0, 1.0) : 0.0;
    vec2 box = mix(uHalf, vec2(sHalf), t);
    float d = sdRoundBox(p, box, uRadius);
    float aa = max(uAA, 1e-5);
    float mask = 1.0 - smoothstep(-aa, aa, d);
    if (mask <= 0.002) discard;

    vec3 col = mix(uPlaceholder, texture2D(uMap, vUv).rgb, uHasTex);
    col *= uDim;

    float a = mask * uOpacity;
    if (a <= 0.002) discard;
    // premultiplied: the context is premultipliedAlpha, and the additive halo
    // below needs blendFunc(ONE, ONE) to bloom rather than wash out
    gl_FragColor = vec4(col * a, a);
}
`
), FT = (
  /* glsl */
  `
precision highp float;
attribute vec3 aPos;
uniform mat4 uMVP;
uniform float uScale;
void main() {
    gl_Position = uMVP * vec4(aPos * uScale, 1.0);
}
`
), WT = (
  /* glsl */
  `
precision mediump float;
uniform vec4 uColor;
void main() {
    gl_FragColor = vec4(uColor.rgb * uColor.a, uColor.a);
}
`
), IT = Math.PI * (3 - Math.sqrt(5)), PT = 0.22, _S = 70, eA = 0.3, tA = 0.75, lA = 12, OS = 45, aA = 18, nA = 70, uA = 2.8, iA = 12, cA = 60, oA = 1, fA = 0.25, rA = 0.6, sA = 70, tE = 0.32, dA = 5, hA = 450, mA = "#1b1b20", yA = 32, pA = 24, Wv = 0.1, Iv = 2e3;
function gA(T) {
  const q = Math.sin(T * 12.9898 + 78.233) * 43758.5453;
  return q - Math.floor(q);
}
const wa = (T, q, ne) => T < q ? q : T > ne ? ne : T;
function Bm(T, q) {
  if (!T) return q.slice();
  const ne = String(T).trim(), E = ne.match(/^rgba?\(([^)]+)\)$/i);
  if (E) {
    const he = E[1].split(/[,\s/]+/).filter(Boolean), Q = (H) => H.indexOf("%") >= 0 ? parseFloat(H) / 100 : parseFloat(H) / 255, W = Q(he[0] ?? "0"), V = Q(he[1] ?? "0"), de = Q(he[2] ?? "0"), Y = he[3] === void 0 ? 1 : parseFloat(he[3]);
    return [W, V, de, Y].some((H) => !isFinite(H)) ? q.slice() : [wa(W, 0, 1), wa(V, 0, 1), wa(de, 0, 1), wa(Y, 0, 1)];
  }
  let ee = ne.replace(/^#/, "");
  if ((ee.length === 3 || ee.length === 4) && (ee = ee.split("").map((he) => he + he).join("")), ee.length !== 6 && ee.length !== 8) return q.slice();
  const te = parseInt(ee, 16);
  return isFinite(te) ? ee.length === 6 ? [
    (te >> 16 & 255) / 255,
    (te >> 8 & 255) / 255,
    (te & 255) / 255,
    1
  ] : [
    (te >>> 24 & 255) / 255,
    (te >>> 16 & 255) / 255,
    (te >>> 8 & 255) / 255,
    (te & 255) / 255
  ] : q.slice();
}
function Dp() {
  const T = new Float32Array(16);
  return T[0] = T[5] = T[10] = T[15] = 1, T;
}
function vA(T, q, ne) {
  const E = 1 / Math.tan(q / 2);
  return T.fill(0), T[0] = E / ne, T[5] = E, T[10] = (Iv + Wv) / (Wv - Iv), T[11] = -1, T[14] = 2 * Iv * Wv / (Wv - Iv), T;
}
function lE(T, q, ne) {
  for (let E = 0; E < 4; E++) {
    const ee = ne[E * 4], te = ne[E * 4 + 1], he = ne[E * 4 + 2], Q = ne[E * 4 + 3];
    T[E * 4] = q[0] * ee + q[4] * te + q[8] * he + q[12] * Q, T[E * 4 + 1] = q[1] * ee + q[5] * te + q[9] * he + q[13] * Q, T[E * 4 + 2] = q[2] * ee + q[6] * te + q[10] * he + q[14] * Q, T[E * 4 + 3] = q[3] * ee + q[7] * te + q[11] * he + q[15] * Q;
  }
  return T;
}
function SA(T, q, ne, E) {
  const ee = Math.cos(ne), te = Math.sin(ne), he = Math.cos(q), Q = Math.sin(q);
  return T[0] = he, T[1] = 0, T[2] = -Q, T[3] = 0, T[4] = Q * te, T[5] = ee, T[6] = he * te, T[7] = 0, T[8] = ee * Q, T[9] = -te, T[10] = ee * he, T[11] = 0, T[12] = 0, T[13] = 0, T[14] = -E, T[15] = 1, T;
}
function aE(T, q) {
  const ne = Math.cos(q), E = Math.sin(q), ee = Math.cos(T), te = Math.sin(T);
  return [ee, te * E, ne * te, 0, ne, -E, -te, ee * E, ne * ee];
}
function bA(T, q, ne, E, ee) {
  ee[0] = T[0] * q + T[1] * ne + T[2] * E, ee[1] = T[3] * q + T[4] * ne + T[5] * E, ee[2] = T[6] * q + T[7] * ne + T[8] * E;
}
function Pv(T, q, ne, E, ee) {
  ee[0] = T[0] * q + T[3] * ne + T[6] * E, ee[1] = T[1] * q + T[4] * ne + T[7] * E, ee[2] = T[2] * q + T[5] * ne + T[8] * E;
}
function EA(T, q, ne) {
  const E = Math.cos(T / 2), ee = Math.sin(T / 2), te = Math.cos(q / 2), he = Math.sin(q / 2);
  return ne[0] = E * he, ne[1] = ee * te, ne[2] = -ee * he, ne[3] = E * te, ne;
}
function TA(T, q, ne, E) {
  let ee = ne + 1, te, he, Q, W;
  ee < 1e-6 ? (te = 0, he = -1, Q = 0, W = 0) : (te = -q, he = T, Q = 0, W = ee);
  const V = Math.hypot(te, he, Q, W) || 1;
  return E[0] = te / V, E[1] = he / V, E[2] = Q / V, E[3] = W / V, E;
}
function AA(T, q, ne, E) {
  const ee = T[0], te = T[1], he = T[2], Q = T[3];
  let W = q[0], V = q[1], de = q[2], Y = q[3], H = Q * Y + ee * W + te * V + he * de;
  if (H < 0 && (H = -H, W = -W, V = -V, de = -de, Y = -Y), H >= 1)
    return E[0] = ee, E[1] = te, E[2] = he, E[3] = Q, E;
  const oe = 1 - H * H;
  if (oe <= Number.EPSILON) {
    const Ot = 1 - ne;
    E[0] = Ot * ee + ne * W, E[1] = Ot * te + ne * V, E[2] = Ot * he + ne * de, E[3] = Ot * Q + ne * Y;
    const tt = Math.hypot(E[0], E[1], E[2], E[3]) || 1;
    return E[0] /= tt, E[1] /= tt, E[2] /= tt, E[3] /= tt, E;
  }
  const ze = Math.sqrt(oe), We = Math.atan2(ze, H), Qe = Math.sin((1 - ne) * We) / ze, Ne = Math.sin(ne * We) / ze;
  return E[0] = ee * Qe + W * Ne, E[1] = te * Qe + V * Ne, E[2] = he * Qe + de * Ne, E[3] = Q * Qe + Y * Ne, E;
}
function RA(T, q, ne, E, ee, te, he, Q) {
  const W = ee[0], V = ee[1], de = ee[2], Y = ee[3], H = W + W, oe = V + V, ze = de + de, We = W * H, Qe = W * oe, Ne = W * ze, Ot = V * oe, tt = V * ze, wt = de * ze, Vt = Y * H, Ft = Y * oe, Ue = Y * ze;
  return T[0] = (1 - (Ot + wt)) * te, T[1] = (Qe + Ue) * te, T[2] = (Ne - Ft) * te, T[3] = 0, T[4] = (Qe - Ue) * he, T[5] = (1 - (We + wt)) * he, T[6] = (tt + Vt) * he, T[7] = 0, T[8] = (Ne + Ft) * Q, T[9] = (tt - Vt) * Q, T[10] = (1 - (We + Ot)) * Q, T[11] = 0, T[12] = q, T[13] = ne, T[14] = E, T[15] = 1, T;
}
function _A(T, q, ne, E) {
  const ee = T[0], te = T[1], he = T[2], Q = T[3], W = ee + ee, V = te + te, de = he + he, Y = ee * W, H = ee * V, oe = ee * de, ze = te * V, We = te * de, Qe = he * de, Ne = Q * W, Ot = Q * V, tt = Q * de;
  q[0] = 1 - (ze + Qe), q[1] = H + tt, q[2] = oe - Ot, ne[0] = H - tt, ne[1] = 1 - (Y + Qe), ne[2] = We + Ne, E[0] = oe + Ot, E[1] = We - Ne, E[2] = 1 - (Y + ze);
}
function OA(T, q) {
  const ne = [], E = [];
  let ee = 0;
  for (let Q = 0; Q <= q; Q++) {
    const W = [], de = Q / q * Math.PI;
    for (let Y = 0; Y <= T; Y++) {
      const oe = Y / T * Math.PI * 2;
      ne.push(
        -Math.cos(oe) * Math.sin(de),
        Math.cos(de),
        Math.sin(oe) * Math.sin(de)
      ), W.push(ee++);
    }
    E.push(W);
  }
  const te = [];
  for (let Q = 0; Q < q; Q++)
    for (let W = 0; W < T; W++) {
      const V = E[Q][W + 1], de = E[Q][W], Y = E[Q + 1][W], H = E[Q + 1][W + 1];
      Q !== 0 && te.push(V, de, H), Q !== q - 1 && te.push(de, Y, H);
    }
  const he = [];
  for (let Q = 0; Q < te.length; Q += 3) {
    const W = te[Q], V = te[Q + 1], de = te[Q + 2];
    he.push(W, V, V, de, de, W);
  }
  return {
    positions: new Float32Array(ne),
    tris: new Uint16Array(te),
    edges: new Uint16Array(he)
  };
}
function DA() {
  return {
    ox: 0,
    oy: 0,
    oz: 0,
    vx: 0,
    vy: 0,
    vz: 0,
    px: 0,
    py: 0,
    pz: 0,
    q: [0, 0, 0, 1],
    hx: 0,
    hy: 0
  };
}
function nE(T, q, ne) {
  const E = T.createShader(q);
  return E ? (T.shaderSource(E, ne), T.compileShader(E), T.getShaderParameter(E, T.COMPILE_STATUS) ? E : (console.error("[SphereGallery3D] shader", T.getShaderInfoLog(E)), T.deleteShader(E), null)) : null;
}
function uE(T, q, ne) {
  const E = nE(T, T.VERTEX_SHADER, q), ee = nE(T, T.FRAGMENT_SHADER, ne);
  if (!E || !ee) return null;
  const te = T.createProgram();
  return te ? (T.attachShader(te, E), T.attachShader(te, ee), T.linkProgram(te), T.deleteShader(E), T.deleteShader(ee), T.getProgramParameter(te, T.LINK_STATUS) ? te : (console.error("[SphereGallery3D] link", T.getProgramInfoLog(te)), T.deleteProgram(te), null)) : null;
}
function rE(T) {
  const {
    images: q = [{ link: "", image: `https://images.unsplash.com/photo-1738443213486-369884a438cc?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dmlicmFudCUyMGltYWdlc3xlbnwwfDB8MHx8fDA%3D
` }, { link: "", image: "https://images.unsplash.com/photo-1588576892215-4e38d33fd73d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dmlicmFudCUyMGltYWdlc3xlbnwwfDB8MHx8fDA%3D" }, { link: "", image: "https://images.unsplash.com/photo-1738599433881-580f23c6df20?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHZpYnJhbnQlMjBpbWFnZXN8ZW58MHwwfDB8fHww" }, { link: "", image: "https://images.unsplash.com/photo-1737834495647-f60b20534b22?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fHZpYnJhbnQlMjBpbWFnZXN8ZW58MHwwfDB8fHww" }, { link: "", image: "https://images.unsplash.com/photo-1675629202502-ff91f9459e70?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fHZpYnJhbnQlMjBpbWFnZXN8ZW58MHwwfDB8fHww" }, { link: "", image: "https://images.unsplash.com/photo-1741597491776-d43d0deb7c1e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzF8fHZpYnJhbnQlMjBpbWFnZXN8ZW58MHwwfDB8fHww" }, { link: "", image: "https://images.unsplash.com/photo-1649878486523-3c6ff2b2380d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjN8fHZpYnJhbnQlMjBpbWFnZXN8ZW58MHwwfDB8fHww" }],
    branches: ne = iA,
    background: E = "#000000",
    scale: ee = 60,
    size: te = 28,
    scatter: he = 0,
    speed: Q = 18,
    direction: W = "counterclockwise",
    hover: V = 200,
    rounded: de = 18,
    // a group the designer never opened arrives undefined (rule 8) — every
    // field also carries its own fallback below
    core: Y = { coreSize: 24, coreColor: "#FFFFFF59", lineColor: "#FFFFFF59" },
    className: H,
    style: oe
  } = T, ze = q, We = ze && ze.length ? ze : KT, Qe = wa(Math.round(ne), 1, cA), Ne = pf.useRef(null), Ot = pf.useRef(null), tt = lA, wt = Y.coreColor ?? "#7ab8ffff", Vt = Y.lineColor ?? "#4a6a9959", Ft = Bm(wt, [0.48, 0.72, 1, 1])[3], Ue = Bm(Vt, [0.29, 0.42, 0.6, 0.35])[3], lt = W === "clockwise" ? -1 : 1, gt = pf.useRef({});
  gt.current = {
    count: Qe,
    radius: tt,
    depthRand: wa(he / 100, 0, 1),
    itemSize: tt * wa(te / 100, 0.01, 2),
    coreColor: wt,
    coreSize: tt * wa((Y.coreSize ?? 16) / 100, 0, 1),
    coreGlow: Ft,
    lineColor: Vt,
    lineOpacity: Ue,
    rounded: wa(de / 100, 0, 1),
    // 50 is the rate the sphere shipped at (rule 11); Direction is the sign
    spin: PT * Q * lt / 50,
    // One Hover Pull dial drives both the pull and the capture radius: they
    // are one gesture, and two dials for it is where "hover does nothing"
    // comes from (rule M).
    force: wa(V / 100, 0, 3),
    hoverDist: tt * wa(V / 100 * 0.35, 0, 3),
    // Scale DIVIDES the camera dolly rather than resizing the shell: node
    // size, scatter, core size and the hover reach are all percentages OF
    // the radius, so growing the radius would move every one of them too.
    scale: wa(ee / 100, 0.2, 4),
    minZoom: aA,
    maxZoom: nA,
    zoomGain: oA,
    orbitSpeed: fA,
    orbitDamping: rA,
    orbitLimit: sA
  };
  const pe = pf.useRef([]);
  pe.current = Array.from(
    { length: Qe },
    (Be, ft) => We[ft % We.length]?.link || ""
  );
  const Ht = pf.useRef([]), Se = pf.useRef([]), Je = pf.useMemo(
    () => We.map((Be) => Be?.image || "").join("|"),
    [We]
  );
  return pf.useEffect(() => {
    let Be = !0;
    const ft = We.map(() => ({
      image: null,
      aspect: 1,
      texture: null,
      applied: !1
    }));
    return Ht.current = ft, We.forEach((D, v) => {
      const ue = D?.image;
      if (!ue) return;
      const me = new Image();
      me.crossOrigin = "anonymous", me.onload = () => {
        Be && (ft[v].image = me, ft[v].aspect = (me.naturalWidth || 1) / Math.max(1, me.naturalHeight || 1));
      }, me.onerror = () => {
      }, me.src = ue;
    }), () => {
      Be = !1, ft.forEach((D) => {
        D.texture && Se.current.push(D.texture), D.texture = null;
      });
    };
  }, [Je]), pf.useEffect(() => {
    const Be = Ot.current, ft = Ne.current;
    if (!Be || !ft) return;
    const D = {
      antialias: !0,
      alpha: !0,
      premultipliedAlpha: !0,
      depth: !0,
      powerPreference: "high-performance"
    }, v = Be.getContext("webgl2", D) || Be.getContext("webgl", D) || Be.getContext(
      "experimental-webgl",
      D
    );
    if (!v) {
      console.error("[SphereGallery3D] WebGL unavailable");
      return;
    }
    const ue = typeof WebGL2RenderingContext < "u" && v instanceof WebGL2RenderingContext, me = v.getExtension("EXT_texture_filter_anisotropic") || v.getExtension("WEBKIT_EXT_texture_filter_anisotropic"), ve = uE(v, $T, kT), b = uE(v, FT, WT);
    if (!ve || !b) return;
    const B = {
      aCorner: v.getAttribLocation(ve, "aCorner"),
      uMVP: v.getUniformLocation(ve, "uMVP"),
      uMap: v.getUniformLocation(ve, "uMap"),
      uHasTex: v.getUniformLocation(ve, "uHasTex"),
      uHalf: v.getUniformLocation(ve, "uHalf"),
      uRadius: v.getUniformLocation(ve, "uRadius"),
      uAA: v.getUniformLocation(ve, "uAA"),
      uOpacity: v.getUniformLocation(ve, "uOpacity"),
      uDim: v.getUniformLocation(ve, "uDim"),
      uPlaceholder: v.getUniformLocation(ve, "uPlaceholder")
    }, $ = {
      aPos: v.getAttribLocation(b, "aPos"),
      uMVP: v.getUniformLocation(b, "uMVP"),
      uScale: v.getUniformLocation(b, "uScale"),
      uColor: v.getUniformLocation(b, "uColor")
    }, le = [
      ...Object.entries(B),
      ...Object.entries($)
    ].filter(([, De]) => De === null || De === -1);
    le.length && console.error(
      "[SphereGallery3D] unresolved GL locations:",
      le.map(([De]) => De).join(", ")
    );
    const Ae = v.createBuffer();
    v.bindBuffer(v.ARRAY_BUFFER, Ae), v.bufferData(
      v.ARRAY_BUFFER,
      // two triangles, CCW, spanning -0.5..0.5
      new Float32Array([
        -0.5,
        -0.5,
        0.5,
        -0.5,
        0.5,
        0.5,
        -0.5,
        -0.5,
        0.5,
        0.5,
        -0.5,
        0.5
      ]),
      v.STATIC_DRAW
    );
    const qe = OA(yA, pA), Oe = v.createBuffer();
    v.bindBuffer(v.ARRAY_BUFFER, Oe), v.bufferData(v.ARRAY_BUFFER, qe.positions, v.STATIC_DRAW);
    const Qt = v.createBuffer();
    v.bindBuffer(v.ELEMENT_ARRAY_BUFFER, Qt), v.bufferData(v.ELEMENT_ARRAY_BUFFER, qe.tris, v.STATIC_DRAW);
    const Et = v.createBuffer();
    v.bindBuffer(v.ELEMENT_ARRAY_BUFFER, Et), v.bufferData(v.ELEMENT_ARRAY_BUFFER, qe.edges, v.STATIC_DRAW);
    const Fl = v.createBuffer();
    let fe = new Float32Array(0);
    const Ku = (De) => {
      fe.length !== De * 6 && (fe = new Float32Array(De * 6), v.bindBuffer(v.ARRAY_BUFFER, Fl), v.bufferData(v.ARRAY_BUFFER, fe, v.DYNAMIC_DRAW));
    }, Jn = v.createTexture();
    v.bindTexture(v.TEXTURE_2D, Jn), v.texImage2D(
      v.TEXTURE_2D,
      0,
      v.RGBA,
      1,
      1,
      0,
      v.RGBA,
      v.UNSIGNED_BYTE,
      new Uint8Array([255, 255, 255, 255])
    ), v.texParameteri(v.TEXTURE_2D, v.TEXTURE_MIN_FILTER, v.LINEAR), v.texParameteri(v.TEXTURE_2D, v.TEXTURE_MAG_FILTER, v.LINEAR), v.texParameteri(v.TEXTURE_2D, v.TEXTURE_WRAP_S, v.CLAMP_TO_EDGE), v.texParameteri(v.TEXTURE_2D, v.TEXTURE_WRAP_T, v.CLAMP_TO_EDGE);
    const _a = (De) => (De & De - 1) === 0 && De > 0, Kn = (De) => {
      const Pe = v.createTexture();
      if (!Pe) return null;
      if (v.bindTexture(v.TEXTURE_2D, Pe), v.pixelStorei(v.UNPACK_FLIP_Y_WEBGL, !0), v.texImage2D(
        v.TEXTURE_2D,
        0,
        ue ? v.SRGB8_ALPHA8 : v.RGBA,
        v.RGBA,
        v.UNSIGNED_BYTE,
        De
      ), v.pixelStorei(v.UNPACK_FLIP_Y_WEBGL, !1), v.texParameteri(v.TEXTURE_2D, v.TEXTURE_WRAP_S, v.CLAMP_TO_EDGE), v.texParameteri(v.TEXTURE_2D, v.TEXTURE_WRAP_T, v.CLAMP_TO_EDGE), v.texParameteri(v.TEXTURE_2D, v.TEXTURE_MAG_FILTER, v.LINEAR), ue || _a(De.naturalWidth) && _a(De.naturalHeight)) {
        if (v.texParameteri(
          v.TEXTURE_2D,
          v.TEXTURE_MIN_FILTER,
          v.LINEAR_MIPMAP_LINEAR
        ), v.generateMipmap(v.TEXTURE_2D), me) {
          const xt = v.getParameter(
            me.MAX_TEXTURE_MAX_ANISOTROPY_EXT
          );
          v.texParameterf(
            v.TEXTURE_2D,
            me.TEXTURE_MAX_ANISOTROPY_EXT,
            Math.min(8, xt || 1)
          );
        }
      } else
        v.texParameteri(
          v.TEXTURE_2D,
          v.TEXTURE_MIN_FILTER,
          v.LINEAR
        );
      return Pe;
    };
    let rt = 1, ll = 1;
    const $u = () => {
      const De = Math.max(1, ft.clientWidth), Pe = Math.max(1, ft.clientHeight), Ge = Math.min(2, window.devicePixelRatio || 1);
      rt = Math.max(1, Math.round(De * Ge)), ll = Math.max(1, Math.round(Pe * Ge)), Be.width !== rt && (Be.width = rt), Be.height !== ll && (Be.height = ll);
    };
    $u();
    const Sc = new ResizeObserver($u);
    Sc.observe(ft);
    const ie = {
      nx: 0,
      ny: 0,
      inside: !1,
      dragging: !1,
      lastX: 0,
      lastY: 0,
      downX: 0,
      downY: 0,
      downAt: 0
    }, Ie = {
      yaw: 0,
      pitch: 0,
      yawVel: 0,
      // deg/sec, inertia after release
      pitchVel: 0,
      spin: 0,
      // auto-rotation accumulator, radians
      zoom: wa(
        gt.current.radius * uA,
        gt.current.minZoom,
        gt.current.maxZoom
      ),
      zoomTarget: 0
    };
    Ie.zoomTarget = Ie.zoom;
    let da = Ie.zoom / gt.current.scale;
    const Hl = [], ul = (De) => {
      const Pe = ft.getBoundingClientRect();
      ie.nx = (De.clientX - Pe.left) / Math.max(1, Pe.width) * 2 - 1, ie.ny = -((De.clientY - Pe.top) / Math.max(1, Pe.height)) * 2 + 1;
    }, ha = [0, 0, 0], Gl = [0, 0, -1], un = [0, 0, 0], Ll = [0, 0, -1], bn = [0, 0, 0], su = [0, 0, 0], ku = [0, 0, 0], qa = [0, 0, 0], Oa = (De, Pe, Ge) => {
      const xt = Math.tan(Pe / 2), Re = ie.nx * xt * Ge, qt = ie.ny * xt, Xl = -1, Ga = Math.hypot(Re, qt, Xl) || 1;
      ha[0] = 0, ha[1] = 0, ha[2] = De, Gl[0] = Re / Ga, Gl[1] = qt / Ga, Gl[2] = Xl / Ga;
    }, vl = (De) => {
      Pv(De, ha[0], ha[1], ha[2], un), Pv(De, Gl[0], Gl[1], Gl[2], Ll);
      let Pe = -1, Ge = 1 / 0;
      for (let xt = 0; xt < Hl.length; xt++) {
        const Re = Hl[xt];
        _A(Re.q, su, ku, qa);
        const qt = Ll[0] * qa[0] + Ll[1] * qa[1] + Ll[2] * qa[2];
        if (Math.abs(qt) < 1e-8) continue;
        const Xl = Re.px - un[0], Ga = Re.py - un[1], io = Re.pz - un[2], Tn = (Xl * qa[0] + Ga * qa[1] + io * qa[2]) / qt;
        if (Tn <= 0 || Tn >= Ge) continue;
        const ji = un[0] + Ll[0] * Tn - Re.px, ya = un[1] + Ll[1] * Tn - Re.py, hu = un[2] + Ll[2] * Tn - Re.pz, xl = ji * su[0] + ya * su[1] + hu * su[2], An = ji * ku[0] + ya * ku[1] + hu * ku[2];
        Math.abs(xl) > Re.hx || Math.abs(An) > Re.hy || (Ge = Tn, Pe = xt);
      }
      return Pe;
    };
    let ma = aE(0, 0);
    const _l = (De) => {
      ul(De), ie.inside = !0, ie.dragging = !0, ie.lastX = De.clientX, ie.lastY = De.clientY, ie.downX = De.clientX, ie.downY = De.clientY, ie.downAt = performance.now(), Ie.yawVel = 0, Ie.pitchVel = 0, Be.style.cursor = "grabbing";
    }, du = (De) => {
      const Pe = ft.getBoundingClientRect(), Ge = De.clientX >= Pe.left && De.clientX <= Pe.right && De.clientY >= Pe.top && De.clientY <= Pe.bottom;
      if (ie.inside = Ge || ie.dragging, ie.inside && ul(De), !ie.dragging) {
        if (Ge) {
          Oa(da, OS * Math.PI / 180, rt / ll);
          const Ga = vl(ma);
          Be.style.cursor = Ga >= 0 && pe.current[Ga] ? "pointer" : "grab";
        }
        return;
      }
      const xt = De.clientX - ie.lastX, Re = De.clientY - ie.lastY;
      ie.lastX = De.clientX, ie.lastY = De.clientY;
      const qt = gt.current;
      Ie.yaw += xt * qt.orbitSpeed * Math.PI / 180, Ie.pitch += Re * qt.orbitSpeed * Math.PI / 180;
      const Xl = qt.orbitLimit * Math.PI / 180;
      Ie.pitch = wa(Ie.pitch, -Xl, Xl), Ie.yawVel = xt * qt.orbitSpeed * 60, Ie.pitchVel = Re * qt.orbitSpeed * 60;
    }, g = (De) => {
      if (!ie.dragging) return;
      ie.dragging = !1, Be.style.cursor = "grab";
      const Pe = performance.now() - ie.downAt;
      if (Math.abs(De.clientX - ie.downX) + Math.abs(De.clientY - ie.downY) <= dA && Pe <= hA) {
        Ie.yawVel = 0, Ie.pitchVel = 0, ul(De), Oa(da, OS * Math.PI / 180, rt / ll);
        const xt = vl(ma), Re = xt >= 0 ? pe.current[xt] : "";
        Re && window.open(Re, "_blank", "noopener,noreferrer");
      }
    }, x = () => {
      ie.dragging || (ie.inside = !1);
    }, ae = (De) => {
      De.preventDefault();
      const Pe = gt.current;
      Ie.zoomTarget = wa(
        Ie.zoomTarget + De.deltaY * 0.02 * Pe.zoomGain,
        Pe.minZoom,
        Pe.maxZoom
      );
    };
    Be.style.cursor = "grab", Be.style.touchAction = "none", Be.addEventListener("pointerdown", _l), Be.addEventListener("pointerleave", x), Be.addEventListener("wheel", ae, { passive: !1 }), window.addEventListener("pointermove", du), window.addEventListener("pointerup", g), window.addEventListener("pointercancel", g);
    const ce = Dp(), ge = Dp(), Me = Dp(), Ee = Dp(), nt = Dp(), je = [0, 0, 0, 1], Sl = [0, 0, 0, 1], ja = [0, 0, 0, 1], En = [0, 0, -1], Fu = Bm(mA, [0, 0, 0, 1]), $n = [];
    v.clearColor(0, 0, 0, 0), v.enable(v.DEPTH_TEST);
    let cn = 0, Da = performance.now();
    const uo = () => {
      cn = requestAnimationFrame(uo);
      const De = performance.now(), Pe = Math.min(0.05, (De - Da) / 1e3);
      Da = De;
      const Ge = gt.current, xt = Ht.current, Re = Math.max(0, Ge.count | 0), qt = (Xe) => xt.length ? xt[Xe % xt.length] : void 0, Xl = Se.current;
      for (; Xl.length; ) v.deleteTexture(Xl.pop());
      for (; Hl.length < Re; ) Hl.push(DA());
      Hl.length > Re && (Hl.length = Re), Ku(Re), v.viewport(0, 0, rt, ll), v.depthMask(!0), v.clear(v.COLOR_BUFFER_BIT | v.DEPTH_BUFFER_BIT);
      const Ga = Math.min(Ge.minZoom, Ge.maxZoom), io = Math.max(Ge.minZoom, Ge.maxZoom);
      Ie.zoomTarget = wa(Ie.zoomTarget, Ga, io), Ie.zoom += (Ie.zoomTarget - Ie.zoom) * (1 - Math.exp(-9 * Pe)), da = Ie.zoom / Math.max(1e-3, Ge.scale);
      const Tn = OS * Math.PI / 180, ji = rt / ll;
      if (vA(ce, Tn, ji), !ie.dragging) {
        const Xe = Ge.orbitDamping <= 0 ? 0 : Math.exp(-6 / Math.max(1e-3, Ge.orbitDamping) * Pe);
        Ie.yaw += Ie.yawVel * Pe * Math.PI / 180 * Xe, Ie.pitch += Ie.pitchVel * Pe * Math.PI / 180 * Xe, Ie.yawVel *= Xe, Ie.pitchVel *= Xe;
        const Ye = Ge.orbitLimit * Math.PI / 180;
        Ie.pitch = wa(Ie.pitch, -Ye, Ye);
      }
      Ie.spin += Ge.spin * Pe, Ie.spin > Math.PI * 2 && (Ie.spin -= Math.PI * 2);
      const ya = Ie.spin + Ie.yaw, hu = Ie.pitch;
      SA(ge, ya, hu, da), lE(Me, ce, ge);
      const xl = aE(ya, hu);
      ma = xl, EA(ya, hu, je), Sl[0] = -je[0], Sl[1] = -je[1], Sl[2] = -je[2], Sl[3] = je[3], Pv(xl, 0, 0, -1, En);
      const An = Math.max(1e-3, Ge.coreSize);
      if (v.useProgram(b), v.uniformMatrix4fv($.uMVP, !1, Me), v.bindBuffer(v.ARRAY_BUFFER, Oe), v.enableVertexAttribArray($.aPos), v.vertexAttribPointer($.aPos, 3, v.FLOAT, !1, 0, 0), Ge.coreSize > 1e-3) {
        const Xe = Bm(Ge.coreColor, [0.48, 0.72, 1, 1]);
        v.disable(v.BLEND), v.enable(v.CULL_FACE), v.cullFace(v.BACK), v.depthMask(!0), v.uniform1f($.uScale, An), v.uniform4f($.uColor, Xe[0], Xe[1], Xe[2], 1), v.bindBuffer(v.ELEMENT_ARRAY_BUFFER, Qt), v.drawElements(
          v.TRIANGLES,
          qe.tris.length,
          v.UNSIGNED_SHORT,
          0
        ), v.disable(v.CULL_FACE);
      }
      v.disableVertexAttribArray($.aPos), v.enable(v.BLEND), v.depthMask(!1), v.blendFunc(v.ONE, v.ONE_MINUS_SRC_ALPHA);
      const Gi = () => {
        if (Ge.coreGlow <= 2e-3) return;
        const Xe = Bm(Ge.coreColor, [0.48, 0.72, 1, 1]);
        v.useProgram(b), v.uniformMatrix4fv($.uMVP, !1, Me), v.bindBuffer(v.ARRAY_BUFFER, Oe), v.enableVertexAttribArray($.aPos), v.vertexAttribPointer($.aPos, 3, v.FLOAT, !1, 0, 0), v.blendFunc(v.ONE, v.ONE), v.uniform1f($.uScale, An * 1.45), v.uniform4f($.uColor, Xe[0], Xe[1], Xe[2], Ge.coreGlow), v.bindBuffer(v.ELEMENT_ARRAY_BUFFER, Et), v.drawElements(
          v.LINES,
          qe.edges.length,
          v.UNSIGNED_SHORT,
          0
        ), v.disableVertexAttribArray($.aPos), v.blendFunc(v.ONE, v.ONE_MINUS_SRC_ALPHA);
      };
      if (!Re) {
        v.disableVertexAttribArray($.aPos), Gi();
        return;
      }
      const Wu = ie.inside && Ge.force > 0 && Ge.hoverDist > 0;
      Wu && Oa(da, Tn, ji);
      const Mt = 2 * Math.tan(Tn / 2) / ll;
      for (let Xe = 0; Xe < Re; Xe++) {
        const Ye = Hl[Xe], Nl = 1 - 2 * (Xe + 0.5) / Re, za = Math.sqrt(Math.max(0, 1 - Nl * Nl)), ga = IT * Xe, hl = 1 + (gA(Xe) - 0.5) * Ge.depthRand, Bl = Ge.radius * hl, pu = Math.cos(ga) * za * Bl, Li = Nl * Bl, Xi = Math.sin(ga) * za * Bl;
        let Iu = 0, gu = 0, oo = 0, va = 0;
        if (Wu) {
          bA(xl, pu, Li, Xi, bn);
          const gf = bn[0], vf = bn[1], ro = bn[2], Zr = Math.max(
            0,
            (gf - ha[0]) * Gl[0] + (vf - ha[1]) * Gl[1] + (ro - ha[2]) * Gl[2]
          ), bc = ha[0] + Gl[0] * Zr, La = ha[1] + Gl[1] * Zr, on = ha[2] + Gl[2] * Zr, so = Math.hypot(bc - gf, La - vf, on - ro);
          if (so < Ge.hoverDist) {
            const Ec = 1 - so / Ge.hoverDist;
            Iu = Ec * Ec * (3 - 2 * Ec), Pv(xl, bc - gf, La - vf, on - ro, bn);
            const Xa = Iu * Ge.force;
            gu = bn[0] * Xa, oo = bn[1] * Xa, va = bn[2] * Xa;
            const Su = -Xa * Ge.radius * 0.12;
            gu += En[0] * Su, oo += En[1] * Su, va += En[2] * Su;
          }
        }
        Ye.vx += (gu - Ye.ox) * _S * Pe, Ye.vy += (oo - Ye.oy) * _S * Pe, Ye.vz += (va - Ye.oz) * _S * Pe;
        const Vi = Math.exp(-11.6 * Pe);
        Ye.vx *= Vi, Ye.vy *= Vi, Ye.vz *= Vi, Ye.ox += Ye.vx * Pe, Ye.oy += Ye.vy * Pe, Ye.oz += Ye.vz * Pe;
        const Qi = pu + Ye.ox, vu = Li + Ye.oy, Pu = Xi + Ye.oz;
        Ye.px = Qi, Ye.py = vu, Ye.pz = Pu;
        const fo = Math.hypot(Qi, vu, Pu) || 1;
        TA(Qi / fo, vu / fo, Pu / fo, ja), AA(ja, Sl, tA, Ye.q);
        const kn = qt(Xe)?.aspect || 1, Qr = Ge.itemSize * (1 + eA * Iu);
        Ye.hx = Qr * kn / 2, Ye.hy = Qr / 2, $n[Xe] = Xe;
      }
      $n.length = Re;
      const mu = (Xe) => xl[6] * Xe.px + xl[7] * Xe.py + xl[8] * Xe.pz;
      $n.sort((Xe, Ye) => mu(Hl[Xe]) - mu(Hl[Ye]));
      let pa = 0;
      for (; pa < Re && mu(Hl[$n[pa]]) < 0; ) pa++;
      for (let Xe = 0; Xe < Re; Xe++) {
        const Ye = Hl[$n[Xe]], Nl = Math.hypot(Ye.px, Ye.py, Ye.pz) || 1, za = An / Nl;
        fe[Xe * 6 + 0] = Ye.px * za, fe[Xe * 6 + 1] = Ye.py * za, fe[Xe * 6 + 2] = Ye.pz * za, fe[Xe * 6 + 3] = Ye.px, fe[Xe * 6 + 4] = Ye.py, fe[Xe * 6 + 5] = Ye.pz;
      }
      Ge.lineOpacity > 2e-3 && (v.bindBuffer(v.ARRAY_BUFFER, Fl), v.bufferSubData(v.ARRAY_BUFFER, 0, fe));
      const yu = (Xe, Ye) => {
        if (Ye <= 0 || Ge.lineOpacity <= 2e-3) return;
        const Nl = Bm(Ge.lineColor, [0.29, 0.42, 0.6, 1]);
        v.useProgram(b), v.uniformMatrix4fv($.uMVP, !1, Me), v.bindBuffer(v.ARRAY_BUFFER, Fl), v.enableVertexAttribArray($.aPos), v.vertexAttribPointer($.aPos, 3, v.FLOAT, !1, 0, 0), v.uniform1f($.uScale, 1), v.uniform4f($.uColor, Nl[0], Nl[1], Nl[2], Ge.lineOpacity), v.drawArrays(v.LINES, Xe * 2, Ye * 2), v.disableVertexAttribArray($.aPos);
      }, Rn = () => {
        v.useProgram(ve), v.bindBuffer(v.ARRAY_BUFFER, Ae), v.enableVertexAttribArray(B.aCorner), v.vertexAttribPointer(B.aCorner, 2, v.FLOAT, !1, 0, 0), v.uniform1i(B.uMap, 0), v.uniform3f(
          B.uPlaceholder,
          Fu[0],
          Fu[1],
          Fu[2]
        ), v.uniform1f(B.uOpacity, 1), v.activeTexture(v.TEXTURE0);
      }, co = (Xe, Ye) => {
        for (let Nl = Xe; Nl < Ye; Nl++) {
          const za = $n[Nl], ga = Hl[za], hl = qt(za);
          hl && hl.image && !hl.texture && (hl.texture = Kn(hl.image), hl.applied = !1, hl.image = null);
          const Bl = hl?.aspect || 1, pu = hl && hl.texture ? 1 : 0;
          v.bindTexture(v.TEXTURE_2D, pu ? hl.texture : Jn), v.uniform1f(B.uHasTex, pu), pu ? (v.uniform2f(B.uHalf, Bl / 2, 0.5), v.uniform1f(
            B.uRadius,
            Ge.rounded * Math.min(Bl / 2, 0.5)
          )) : (v.uniform2f(B.uHalf, 0.5, 0.5), v.uniform1f(B.uRadius, Ge.rounded * 0.5));
          const Li = ga.hy * 2, Xi = ga.hx * 2;
          RA(Ee, ga.px, ga.py, ga.pz, ga.q, Xi, Li, 1), lE(nt, Me, Ee), v.uniformMatrix4fv(B.uMVP, !1, nt);
          const Iu = xl[6] * ga.px + xl[7] * ga.py + xl[8] * ga.pz, gu = wa((Iu + Ge.radius) / (2 * Ge.radius), 0, 1);
          v.uniform1f(B.uDim, tE + (1 - tE) * gu);
          const oo = Math.max(1e-3, da - Iu);
          v.uniform1f(B.uAA, Mt * oo / Math.max(1e-4, Li)), v.drawArrays(v.TRIANGLES, 0, 6);
        }
      };
      yu(0, pa), Rn(), co(0, pa), v.disableVertexAttribArray(B.aCorner), Gi(), yu(pa, Re - pa), Rn(), co(pa, Re), v.disableVertexAttribArray(B.aCorner);
    };
    return cn = requestAnimationFrame(uo), () => {
      for (cancelAnimationFrame(cn), Sc.disconnect(), Be.removeEventListener("pointerdown", _l), Be.removeEventListener("pointerleave", x), Be.removeEventListener("wheel", ae), window.removeEventListener("pointermove", du), window.removeEventListener("pointerup", g), window.removeEventListener("pointercancel", g), v.deleteBuffer(Ae), v.deleteBuffer(Oe), v.deleteBuffer(Qt), v.deleteBuffer(Et), v.deleteBuffer(Fl), v.deleteTexture(Jn), Ht.current.forEach((De) => {
        De.texture && v.deleteTexture(De.texture), De.texture = null;
      }); Se.current.length; )
        v.deleteTexture(Se.current.pop());
      v.deleteProgram(ve), v.deleteProgram(b);
    };
  }, []), /* @__PURE__ */ DS.jsx(
    "div",
    {
      ref: Ne,
      className: H,
      style: {
        position: "relative",
        width: "100%",
        height: "100%",
        // Framer Fit Content collapses a 100% root to 0x0 — floor it
        // BEFORE the spread, so an explicit instance size still wins
        minWidth: 1200,
        minHeight: 800,
        overflow: "hidden",
        background: E,
        isolation: "isolate",
        ...oe
      },
      children: /* @__PURE__ */ DS.jsx(
        "canvas",
        {
          ref: Ot,
          style: {
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            display: "block"
          }
        }
      )
    }
  );
}
const iE = /* @__PURE__ */ new Map();
function zS(T, q, ne = {}) {
  document.querySelectorAll(T).forEach((E) => {
    if (iE.has(E)) return;
    const ee = ZT.createRoot(E);
    ee.render(/* @__PURE__ */ DS.jsx(q, { ...ne })), iE.set(E, ee);
  });
}
function cE() {
  const T = window.SolarTermsData || [];
  T.length && zS(".hero-spectrum", rE, {
    images: T.map((q) => ({
      image: `../assets/seasons/${q.id}.png`,
      link: `#term-${q.id}`
    })),
    branches: 24,
    background: "transparent",
    scale: 130,
    size: 16,
    scatter: 20,
    speed: 42,
    direction: "clockwise",
    hover: 54,
    rounded: 100,
    core: {
      coreColor: "rgba(185, 201, 160, 0.62)",
      coreSize: 18,
      lineColor: "rgba(95, 119, 108, 0.24)"
    },
    style: {
      minWidth: "100%",
      minHeight: "100%"
    }
  });
}
window.MuseumReact = {
  mountIsland: zS,
  mountSphereGallery(T, q = {}) {
    zS(T, rE, q);
  }
};
document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", cE) : cE();
