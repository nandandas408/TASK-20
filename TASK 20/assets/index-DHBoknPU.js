(function() {
    const n = document.createElement("link").relList;
    if (n && n.supports && n.supports("modulepreload"))
        return;
    for (const i of document.querySelectorAll('link[rel="modulepreload"]'))
        r(i);
    new MutationObserver(i => {
        for (const a of i)
            if (a.type === "childList")
                for (const o of a.addedNodes)
                    o.tagName === "LINK" && o.rel === "modulepreload" && r(o)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function t(i) {
        const a = {};
        return i.integrity && (a.integrity = i.integrity),
        i.referrerPolicy && (a.referrerPolicy = i.referrerPolicy),
        i.crossOrigin === "use-credentials" ? a.credentials = "include" : i.crossOrigin === "anonymous" ? a.credentials = "omit" : a.credentials = "same-origin",
        a
    }
    function r(i) {
        if (i.ep)
            return;
        i.ep = !0;
        const a = t(i);
        fetch(i.href, a)
    }
}
)();
function nf(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var tf = {
    exports: {}
}
  , na = {}
  , rf = {
    exports: {}
}
  , M = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ar = Symbol.for("react.element")
  , Kd = Symbol.for("react.portal")
  , Gd = Symbol.for("react.fragment")
  , Zd = Symbol.for("react.strict_mode")
  , Jd = Symbol.for("react.profiler")
  , qd = Symbol.for("react.provider")
  , ep = Symbol.for("react.context")
  , np = Symbol.for("react.forward_ref")
  , tp = Symbol.for("react.suspense")
  , rp = Symbol.for("react.memo")
  , ip = Symbol.for("react.lazy")
  , wu = Symbol.iterator;
function ap(e) {
    return e === null || typeof e != "object" ? null : (e = wu && e[wu] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var af = {
    isMounted: function() {
        return !1
    },
    enqueueForceUpdate: function() {},
    enqueueReplaceState: function() {},
    enqueueSetState: function() {}
}
  , of = Object.assign
  , lf = {};
function Lt(e, n, t) {
    this.props = e,
    this.context = n,
    this.refs = lf,
    this.updater = t || af
}
Lt.prototype.isReactComponent = {};
Lt.prototype.setState = function(e, n) {
    if (typeof e != "object" && typeof e != "function" && e != null)
        throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, n, "setState")
}
;
Lt.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
}
;
function uf() {}
uf.prototype = Lt.prototype;
function fl(e, n, t) {
    this.props = e,
    this.context = n,
    this.refs = lf,
    this.updater = t || af
}
var cl = fl.prototype = new uf;
cl.constructor = fl;
of(cl, Lt.prototype);
cl.isPureReactComponent = !0;
var ku = Array.isArray
  , sf = Object.prototype.hasOwnProperty
  , dl = {
    current: null
}
  , ff = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function cf(e, n, t) {
    var r, i = {}, a = null, o = null;
    if (n != null)
        for (r in n.ref !== void 0 && (o = n.ref),
        n.key !== void 0 && (a = "" + n.key),
        n)
            sf.call(n, r) && !ff.hasOwnProperty(r) && (i[r] = n[r]);
    var l = arguments.length - 2;
    if (l === 1)
        i.children = t;
    else if (1 < l) {
        for (var u = Array(l), s = 0; s < l; s++)
            u[s] = arguments[s + 2];
        i.children = u
    }
    if (e && e.defaultProps)
        for (r in l = e.defaultProps,
        l)
            i[r] === void 0 && (i[r] = l[r]);
    return {
        $$typeof: Ar,
        type: e,
        key: a,
        ref: o,
        props: i,
        _owner: dl.current
    }
}
function op(e, n) {
    return {
        $$typeof: Ar,
        type: e.type,
        key: n,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
    }
}
function pl(e) {
    return typeof e == "object" && e !== null && e.$$typeof === Ar
}
function lp(e) {
    var n = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function(t) {
        return n[t]
    })
}
var Su = /\/+/g;
function _a(e, n) {
    return typeof e == "object" && e !== null && e.key != null ? lp("" + e.key) : n.toString(36)
}
function di(e, n, t, r, i) {
    var a = typeof e;
    (a === "undefined" || a === "boolean") && (e = null);
    var o = !1;
    if (e === null)
        o = !0;
    else
        switch (a) {
        case "string":
        case "number":
            o = !0;
            break;
        case "object":
            switch (e.$$typeof) {
            case Ar:
            case Kd:
                o = !0
            }
        }
    if (o)
        return o = e,
        i = i(o),
        e = r === "" ? "." + _a(o, 0) : r,
        ku(i) ? (t = "",
        e != null && (t = e.replace(Su, "$&/") + "/"),
        di(i, n, t, "", function(s) {
            return s
        })) : i != null && (pl(i) && (i = op(i, t + (!i.key || o && o.key === i.key ? "" : ("" + i.key).replace(Su, "$&/") + "/") + e)),
        n.push(i)),
        1;
    if (o = 0,
    r = r === "" ? "." : r + ":",
    ku(e))
        for (var l = 0; l < e.length; l++) {
            a = e[l];
            var u = r + _a(a, l);
            o += di(a, n, t, u, i)
        }
    else if (u = ap(e),
    typeof u == "function")
        for (e = u.call(e),
        l = 0; !(a = e.next()).done; )
            a = a.value,
            u = r + _a(a, l++),
            o += di(a, n, t, u, i);
    else if (a === "object")
        throw n = String(e),
        Error("Objects are not valid as a React child (found: " + (n === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : n) + "). If you meant to render a collection of children, use an array instead.");
    return o
}
function $r(e, n, t) {
    if (e == null)
        return e;
    var r = []
      , i = 0;
    return di(e, r, "", "", function(a) {
        return n.call(t, a, i++)
    }),
    r
}
function up(e) {
    if (e._status === -1) {
        var n = e._result;
        n = n(),
        n.then(function(t) {
            (e._status === 0 || e._status === -1) && (e._status = 1,
            e._result = t)
        }, function(t) {
            (e._status === 0 || e._status === -1) && (e._status = 2,
            e._result = t)
        }),
        e._status === -1 && (e._status = 0,
        e._result = n)
    }
    if (e._status === 1)
        return e._result.default;
    throw e._result
}
var me = {
    current: null
}
  , pi = {
    transition: null
}
  , sp = {
    ReactCurrentDispatcher: me,
    ReactCurrentBatchConfig: pi,
    ReactCurrentOwner: dl
};
function df() {
    throw Error("act(...) is not supported in production builds of React.")
}
M.Children = {
    map: $r,
    forEach: function(e, n, t) {
        $r(e, function() {
            n.apply(this, arguments)
        }, t)
    },
    count: function(e) {
        var n = 0;
        return $r(e, function() {
            n++
        }),
        n
    },
    toArray: function(e) {
        return $r(e, function(n) {
            return n
        }) || []
    },
    only: function(e) {
        if (!pl(e))
            throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
};
M.Component = Lt;
M.Fragment = Gd;
M.Profiler = Jd;
M.PureComponent = fl;
M.StrictMode = Zd;
M.Suspense = tp;
M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = sp;
M.act = df;
M.cloneElement = function(e, n, t) {
    if (e == null)
        throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = of({}, e.props)
      , i = e.key
      , a = e.ref
      , o = e._owner;
    if (n != null) {
        if (n.ref !== void 0 && (a = n.ref,
        o = dl.current),
        n.key !== void 0 && (i = "" + n.key),
        e.type && e.type.defaultProps)
            var l = e.type.defaultProps;
        for (u in n)
            sf.call(n, u) && !ff.hasOwnProperty(u) && (r[u] = n[u] === void 0 && l !== void 0 ? l[u] : n[u])
    }
    var u = arguments.length - 2;
    if (u === 1)
        r.children = t;
    else if (1 < u) {
        l = Array(u);
        for (var s = 0; s < u; s++)
            l[s] = arguments[s + 2];
        r.children = l
    }
    return {
        $$typeof: Ar,
        type: e.type,
        key: i,
        ref: a,
        props: r,
        _owner: o
    }
}
;
M.createContext = function(e) {
    return e = {
        $$typeof: ep,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    },
    e.Provider = {
        $$typeof: qd,
        _context: e
    },
    e.Consumer = e
}
;
M.createElement = cf;
M.createFactory = function(e) {
    var n = cf.bind(null, e);
    return n.type = e,
    n
}
;
M.createRef = function() {
    return {
        current: null
    }
}
;
M.forwardRef = function(e) {
    return {
        $$typeof: np,
        render: e
    }
}
;
M.isValidElement = pl;
M.lazy = function(e) {
    return {
        $$typeof: ip,
        _payload: {
            _status: -1,
            _result: e
        },
        _init: up
    }
}
;
M.memo = function(e, n) {
    return {
        $$typeof: rp,
        type: e,
        compare: n === void 0 ? null : n
    }
}
;
M.startTransition = function(e) {
    var n = pi.transition;
    pi.transition = {};
    try {
        e()
    } finally {
        pi.transition = n
    }
}
;
M.unstable_act = df;
M.useCallback = function(e, n) {
    return me.current.useCallback(e, n)
}
;
M.useContext = function(e) {
    return me.current.useContext(e)
}
;
M.useDebugValue = function() {}
;
M.useDeferredValue = function(e) {
    return me.current.useDeferredValue(e)
}
;
M.useEffect = function(e, n) {
    return me.current.useEffect(e, n)
}
;
M.useId = function() {
    return me.current.useId()
}
;
M.useImperativeHandle = function(e, n, t) {
    return me.current.useImperativeHandle(e, n, t)
}
;
M.useInsertionEffect = function(e, n) {
    return me.current.useInsertionEffect(e, n)
}
;
M.useLayoutEffect = function(e, n) {
    return me.current.useLayoutEffect(e, n)
}
;
M.useMemo = function(e, n) {
    return me.current.useMemo(e, n)
}
;
M.useReducer = function(e, n, t) {
    return me.current.useReducer(e, n, t)
}
;
M.useRef = function(e) {
    return me.current.useRef(e)
}
;
M.useState = function(e) {
    return me.current.useState(e)
}
;
M.useSyncExternalStore = function(e, n, t) {
    return me.current.useSyncExternalStore(e, n, t)
}
;
M.useTransition = function() {
    return me.current.useTransition()
}
;
M.version = "18.3.1";
rf.exports = M;
var ta = rf.exports;
const ml = nf(ta);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var fp = ta
  , cp = Symbol.for("react.element")
  , dp = Symbol.for("react.fragment")
  , pp = Object.prototype.hasOwnProperty
  , mp = fp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
  , vp = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function pf(e, n, t) {
    var r, i = {}, a = null, o = null;
    t !== void 0 && (a = "" + t),
    n.key !== void 0 && (a = "" + n.key),
    n.ref !== void 0 && (o = n.ref);
    for (r in n)
        pp.call(n, r) && !vp.hasOwnProperty(r) && (i[r] = n[r]);
    if (e && e.defaultProps)
        for (r in n = e.defaultProps,
        n)
            i[r] === void 0 && (i[r] = n[r]);
    return {
        $$typeof: cp,
        type: e,
        key: a,
        ref: o,
        props: i,
        _owner: mp.current
    }
}
na.Fragment = dp;
na.jsx = pf;
na.jsxs = pf;
tf.exports = na;
var z = tf.exports
  , to = {}
  , mf = {
    exports: {}
}
  , _e = {}
  , vf = {
    exports: {}
}
  , hf = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
    function n(P, A) {
        var L = P.length;
        P.push(A);
        e: for (; 0 < L; ) {
            var G = L - 1 >>> 1
              , te = P[G];
            if (0 < i(te, A))
                P[G] = A,
                P[L] = te,
                L = G;
            else
                break e
        }
    }
    function t(P) {
        return P.length === 0 ? null : P[0]
    }
    function r(P) {
        if (P.length === 0)
            return null;
        var A = P[0]
          , L = P.pop();
        if (L !== A) {
            P[0] = L;
            e: for (var G = 0, te = P.length, Dr = te >>> 1; G < Dr; ) {
                var Mn = 2 * (G + 1) - 1
                  , Ca = P[Mn]
                  , jn = Mn + 1
                  , br = P[jn];
                if (0 > i(Ca, L))
                    jn < te && 0 > i(br, Ca) ? (P[G] = br,
                    P[jn] = L,
                    G = jn) : (P[G] = Ca,
                    P[Mn] = L,
                    G = Mn);
                else if (jn < te && 0 > i(br, L))
                    P[G] = br,
                    P[jn] = L,
                    G = jn;
                else
                    break e
            }
        }
        return A
    }
    function i(P, A) {
        var L = P.sortIndex - A.sortIndex;
        return L !== 0 ? L : P.id - A.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var a = performance;
        e.unstable_now = function() {
            return a.now()
        }
    } else {
        var o = Date
          , l = o.now();
        e.unstable_now = function() {
            return o.now() - l
        }
    }
    var u = []
      , s = []
      , d = 1
      , m = null
      , v = 3
      , h = !1
      , y = !1
      , k = !1
      , T = typeof setTimeout == "function" ? setTimeout : null
      , c = typeof clearTimeout == "function" ? clearTimeout : null
      , f = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function p(P) {
        for (var A = t(s); A !== null; ) {
            if (A.callback === null)
                r(s);
            else if (A.startTime <= P)
                r(s),
                A.sortIndex = A.expirationTime,
                n(u, A);
            else
                break;
            A = t(s)
        }
    }
    function g(P) {
        if (k = !1,
        p(P),
        !y)
            if (t(u) !== null)
                y = !0,
                xa(S);
            else {
                var A = t(s);
                A !== null && Ea(g, A.startTime - P)
            }
    }
    function S(P, A) {
        y = !1,
        k && (k = !1,
        c(O),
        O = -1),
        h = !0;
        var L = v;
        try {
            for (p(A),
            m = t(u); m !== null && (!(m.expirationTime > A) || P && !Re()); ) {
                var G = m.callback;
                if (typeof G == "function") {
                    m.callback = null,
                    v = m.priorityLevel;
                    var te = G(m.expirationTime <= A);
                    A = e.unstable_now(),
                    typeof te == "function" ? m.callback = te : m === t(u) && r(u),
                    p(A)
                } else
                    r(u);
                m = t(u)
            }
            if (m !== null)
                var Dr = !0;
            else {
                var Mn = t(s);
                Mn !== null && Ea(g, Mn.startTime - A),
                Dr = !1
            }
            return Dr
        } finally {
            m = null,
            v = L,
            h = !1
        }
    }
    var C = !1
      , _ = null
      , O = -1
      , F = 5
      , I = -1;
    function Re() {
        return !(e.unstable_now() - I < F)
    }
    function jt() {
        if (_ !== null) {
            var P = e.unstable_now();
            I = P;
            var A = !0;
            try {
                A = _(!0, P)
            } finally {
                A ? Ft() : (C = !1,
                _ = null)
            }
        } else
            C = !1
    }
    var Ft;
    if (typeof f == "function")
        Ft = function() {
            f(jt)
        }
        ;
    else if (typeof MessageChannel < "u") {
        var yu = new MessageChannel
          , Xd = yu.port2;
        yu.port1.onmessage = jt,
        Ft = function() {
            Xd.postMessage(null)
        }
    } else
        Ft = function() {
            T(jt, 0)
        }
        ;
    function xa(P) {
        _ = P,
        C || (C = !0,
        Ft())
    }
    function Ea(P, A) {
        O = T(function() {
            P(e.unstable_now())
        }, A)
    }
    e.unstable_IdlePriority = 5,
    e.unstable_ImmediatePriority = 1,
    e.unstable_LowPriority = 4,
    e.unstable_NormalPriority = 3,
    e.unstable_Profiling = null,
    e.unstable_UserBlockingPriority = 2,
    e.unstable_cancelCallback = function(P) {
        P.callback = null
    }
    ,
    e.unstable_continueExecution = function() {
        y || h || (y = !0,
        xa(S))
    }
    ,
    e.unstable_forceFrameRate = function(P) {
        0 > P || 125 < P ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : F = 0 < P ? Math.floor(1e3 / P) : 5
    }
    ,
    e.unstable_getCurrentPriorityLevel = function() {
        return v
    }
    ,
    e.unstable_getFirstCallbackNode = function() {
        return t(u)
    }
    ,
    e.unstable_next = function(P) {
        switch (v) {
        case 1:
        case 2:
        case 3:
            var A = 3;
            break;
        default:
            A = v
        }
        var L = v;
        v = A;
        try {
            return P()
        } finally {
            v = L
        }
    }
    ,
    e.unstable_pauseExecution = function() {}
    ,
    e.unstable_requestPaint = function() {}
    ,
    e.unstable_runWithPriority = function(P, A) {
        switch (P) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            break;
        default:
            P = 3
        }
        var L = v;
        v = P;
        try {
            return A()
        } finally {
            v = L
        }
    }
    ,
    e.unstable_scheduleCallback = function(P, A, L) {
        var G = e.unstable_now();
        switch (typeof L == "object" && L !== null ? (L = L.delay,
        L = typeof L == "number" && 0 < L ? G + L : G) : L = G,
        P) {
        case 1:
            var te = -1;
            break;
        case 2:
            te = 250;
            break;
        case 5:
            te = 1073741823;
            break;
        case 4:
            te = 1e4;
            break;
        default:
            te = 5e3
        }
        return te = L + te,
        P = {
            id: d++,
            callback: A,
            priorityLevel: P,
            startTime: L,
            expirationTime: te,
            sortIndex: -1
        },
        L > G ? (P.sortIndex = L,
        n(s, P),
        t(u) === null && P === t(s) && (k ? (c(O),
        O = -1) : k = !0,
        Ea(g, L - G))) : (P.sortIndex = te,
        n(u, P),
        y || h || (y = !0,
        xa(S))),
        P
    }
    ,
    e.unstable_shouldYield = Re,
    e.unstable_wrapCallback = function(P) {
        var A = v;
        return function() {
            var L = v;
            v = A;
            try {
                return P.apply(this, arguments)
            } finally {
                v = L
            }
        }
    }
}
)(hf);
vf.exports = hf;
var hp = vf.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var gp = ta
  , Ce = hp;
function w(e) {
    for (var n = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, t = 1; t < arguments.length; t++)
        n += "&args[]=" + encodeURIComponent(arguments[t]);
    return "Minified React error #" + e + "; visit " + n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var gf = new Set
  , ur = {};
function qn(e, n) {
    Ct(e, n),
    Ct(e + "Capture", n)
}
function Ct(e, n) {
    for (ur[e] = n,
    e = 0; e < n.length; e++)
        gf.add(n[e])
}
var nn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
  , ro = Object.prototype.hasOwnProperty
  , yp = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/
  , xu = {}
  , Eu = {};
function wp(e) {
    return ro.call(Eu, e) ? !0 : ro.call(xu, e) ? !1 : yp.test(e) ? Eu[e] = !0 : (xu[e] = !0,
    !1)
}
function kp(e, n, t, r) {
    if (t !== null && t.type === 0)
        return !1;
    switch (typeof n) {
    case "function":
    case "symbol":
        return !0;
    case "boolean":
        return r ? !1 : t !== null ? !t.acceptsBooleans : (e = e.toLowerCase().slice(0, 5),
        e !== "data-" && e !== "aria-");
    default:
        return !1
    }
}
function Sp(e, n, t, r) {
    if (n === null || typeof n > "u" || kp(e, n, t, r))
        return !0;
    if (r)
        return !1;
    if (t !== null)
        switch (t.type) {
        case 3:
            return !n;
        case 4:
            return n === !1;
        case 5:
            return isNaN(n);
        case 6:
            return isNaN(n) || 1 > n
        }
    return !1
}
function ve(e, n, t, r, i, a, o) {
    this.acceptsBooleans = n === 2 || n === 3 || n === 4,
    this.attributeName = r,
    this.attributeNamespace = i,
    this.mustUseProperty = t,
    this.propertyName = e,
    this.type = n,
    this.sanitizeURL = a,
    this.removeEmptyString = o
}
var le = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    le[e] = new ve(e,0,!1,e,null,!1,!1)
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var n = e[0];
    le[n] = new ve(n,1,!1,e[1],null,!1,!1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    le[e] = new ve(e,2,!1,e.toLowerCase(),null,!1,!1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    le[e] = new ve(e,2,!1,e,null,!1,!1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    le[e] = new ve(e,3,!1,e.toLowerCase(),null,!1,!1)
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
    le[e] = new ve(e,3,!0,e,null,!1,!1)
});
["capture", "download"].forEach(function(e) {
    le[e] = new ve(e,4,!1,e,null,!1,!1)
});
["cols", "rows", "size", "span"].forEach(function(e) {
    le[e] = new ve(e,6,!1,e,null,!1,!1)
});
["rowSpan", "start"].forEach(function(e) {
    le[e] = new ve(e,5,!1,e.toLowerCase(),null,!1,!1)
});
var vl = /[\-:]([a-z])/g;
function hl(e) {
    return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var n = e.replace(vl, hl);
    le[n] = new ve(n,1,!1,e,null,!1,!1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var n = e.replace(vl, hl);
    le[n] = new ve(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var n = e.replace(vl, hl);
    le[n] = new ve(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)
});
["tabIndex", "crossOrigin"].forEach(function(e) {
    le[e] = new ve(e,1,!1,e.toLowerCase(),null,!1,!1)
});
le.xlinkHref = new ve("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);
["src", "href", "action", "formAction"].forEach(function(e) {
    le[e] = new ve(e,1,!1,e.toLowerCase(),null,!0,!0)
});
function gl(e, n, t, r) {
    var i = le.hasOwnProperty(n) ? le[n] : null;
    (i !== null ? i.type !== 0 : r || !(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") && (Sp(n, t, i, r) && (t = null),
    r || i === null ? wp(n) && (t === null ? e.removeAttribute(n) : e.setAttribute(n, "" + t)) : i.mustUseProperty ? e[i.propertyName] = t === null ? i.type === 3 ? !1 : "" : t : (n = i.attributeName,
    r = i.attributeNamespace,
    t === null ? e.removeAttribute(n) : (i = i.type,
    t = i === 3 || i === 4 && t === !0 ? "" : "" + t,
    r ? e.setAttributeNS(r, n, t) : e.setAttribute(n, t))))
}
var sn = gp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
  , Ur = Symbol.for("react.element")
  , tt = Symbol.for("react.portal")
  , rt = Symbol.for("react.fragment")
  , yl = Symbol.for("react.strict_mode")
  , io = Symbol.for("react.profiler")
  , yf = Symbol.for("react.provider")
  , wf = Symbol.for("react.context")
  , wl = Symbol.for("react.forward_ref")
  , ao = Symbol.for("react.suspense")
  , oo = Symbol.for("react.suspense_list")
  , kl = Symbol.for("react.memo")
  , pn = Symbol.for("react.lazy")
  , kf = Symbol.for("react.offscreen")
  , Cu = Symbol.iterator;
function Dt(e) {
    return e === null || typeof e != "object" ? null : (e = Cu && e[Cu] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var Q = Object.assign, Pa;
function Yt(e) {
    if (Pa === void 0)
        try {
            throw Error()
        } catch (t) {
            var n = t.stack.trim().match(/\n( *(at )?)/);
            Pa = n && n[1] || ""
        }
    return `
` + Pa + e
}
var Na = !1;
function Oa(e, n) {
    if (!e || Na)
        return "";
    Na = !0;
    var t = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (n)
            if (n = function() {
                throw Error()
            }
            ,
            Object.defineProperty(n.prototype, "props", {
                set: function() {
                    throw Error()
                }
            }),
            typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(n, [])
                } catch (s) {
                    var r = s
                }
                Reflect.construct(e, [], n)
            } else {
                try {
                    n.call()
                } catch (s) {
                    r = s
                }
                e.call(n.prototype)
            }
        else {
            try {
                throw Error()
            } catch (s) {
                r = s
            }
            e()
        }
    } catch (s) {
        if (s && r && typeof s.stack == "string") {
            for (var i = s.stack.split(`
`), a = r.stack.split(`
`), o = i.length - 1, l = a.length - 1; 1 <= o && 0 <= l && i[o] !== a[l]; )
                l--;
            for (; 1 <= o && 0 <= l; o--,
            l--)
                if (i[o] !== a[l]) {
                    if (o !== 1 || l !== 1)
                        do
                            if (o--,
                            l--,
                            0 > l || i[o] !== a[l]) {
                                var u = `
` + i[o].replace(" at new ", " at ");
                                return e.displayName && u.includes("<anonymous>") && (u = u.replace("<anonymous>", e.displayName)),
                                u
                            }
                        while (1 <= o && 0 <= l);
                    break
                }
        }
    } finally {
        Na = !1,
        Error.prepareStackTrace = t
    }
    return (e = e ? e.displayName || e.name : "") ? Yt(e) : ""
}
function xp(e) {
    switch (e.tag) {
    case 5:
        return Yt(e.type);
    case 16:
        return Yt("Lazy");
    case 13:
        return Yt("Suspense");
    case 19:
        return Yt("SuspenseList");
    case 0:
    case 2:
    case 15:
        return e = Oa(e.type, !1),
        e;
    case 11:
        return e = Oa(e.type.render, !1),
        e;
    case 1:
        return e = Oa(e.type, !0),
        e;
    default:
        return ""
    }
}
function lo(e) {
    if (e == null)
        return null;
    if (typeof e == "function")
        return e.displayName || e.name || null;
    if (typeof e == "string")
        return e;
    switch (e) {
    case rt:
        return "Fragment";
    case tt:
        return "Portal";
    case io:
        return "Profiler";
    case yl:
        return "StrictMode";
    case ao:
        return "Suspense";
    case oo:
        return "SuspenseList"
    }
    if (typeof e == "object")
        switch (e.$$typeof) {
        case wf:
            return (e.displayName || "Context") + ".Consumer";
        case yf:
            return (e._context.displayName || "Context") + ".Provider";
        case wl:
            var n = e.render;
            return e = e.displayName,
            e || (e = n.displayName || n.name || "",
            e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"),
            e;
        case kl:
            return n = e.displayName || null,
            n !== null ? n : lo(e.type) || "Memo";
        case pn:
            n = e._payload,
            e = e._init;
            try {
                return lo(e(n))
            } catch {}
        }
    return null
}
function Ep(e) {
    var n = e.type;
    switch (e.tag) {
    case 24:
        return "Cache";
    case 9:
        return (n.displayName || "Context") + ".Consumer";
    case 10:
        return (n._context.displayName || "Context") + ".Provider";
    case 18:
        return "DehydratedFragment";
    case 11:
        return e = n.render,
        e = e.displayName || e.name || "",
        n.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
        return "Fragment";
    case 5:
        return n;
    case 4:
        return "Portal";
    case 3:
        return "Root";
    case 6:
        return "Text";
    case 16:
        return lo(n);
    case 8:
        return n === yl ? "StrictMode" : "Mode";
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
    case 17:
    case 2:
    case 14:
    case 15:
        if (typeof n == "function")
            return n.displayName || n.name || null;
        if (typeof n == "string")
            return n
    }
    return null
}
function Nn(e) {
    switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
        return e;
    case "object":
        return e;
    default:
        return ""
    }
}
function Sf(e) {
    var n = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (n === "checkbox" || n === "radio")
}
function Cp(e) {
    var n = Sf(e) ? "checked" : "value"
      , t = Object.getOwnPropertyDescriptor(e.constructor.prototype, n)
      , r = "" + e[n];
    if (!e.hasOwnProperty(n) && typeof t < "u" && typeof t.get == "function" && typeof t.set == "function") {
        var i = t.get
          , a = t.set;
        return Object.defineProperty(e, n, {
            configurable: !0,
            get: function() {
                return i.call(this)
            },
            set: function(o) {
                r = "" + o,
                a.call(this, o)
            }
        }),
        Object.defineProperty(e, n, {
            enumerable: t.enumerable
        }),
        {
            getValue: function() {
                return r
            },
            setValue: function(o) {
                r = "" + o
            },
            stopTracking: function() {
                e._valueTracker = null,
                delete e[n]
            }
        }
    }
}
function Wr(e) {
    e._valueTracker || (e._valueTracker = Cp(e))
}
function xf(e) {
    if (!e)
        return !1;
    var n = e._valueTracker;
    if (!n)
        return !0;
    var t = n.getValue()
      , r = "";
    return e && (r = Sf(e) ? e.checked ? "true" : "false" : e.value),
    e = r,
    e !== t ? (n.setValue(e),
    !0) : !1
}
function Pi(e) {
    if (e = e || (typeof document < "u" ? document : void 0),
    typeof e > "u")
        return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}
function uo(e, n) {
    var t = n.checked;
    return Q({}, n, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: t ?? e._wrapperState.initialChecked
    })
}
function _u(e, n) {
    var t = n.defaultValue == null ? "" : n.defaultValue
      , r = n.checked != null ? n.checked : n.defaultChecked;
    t = Nn(n.value != null ? n.value : t),
    e._wrapperState = {
        initialChecked: r,
        initialValue: t,
        controlled: n.type === "checkbox" || n.type === "radio" ? n.checked != null : n.value != null
    }
}
function Ef(e, n) {
    n = n.checked,
    n != null && gl(e, "checked", n, !1)
}
function so(e, n) {
    Ef(e, n);
    var t = Nn(n.value)
      , r = n.type;
    if (t != null)
        r === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + t) : e.value !== "" + t && (e.value = "" + t);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return
    }
    n.hasOwnProperty("value") ? fo(e, n.type, t) : n.hasOwnProperty("defaultValue") && fo(e, n.type, Nn(n.defaultValue)),
    n.checked == null && n.defaultChecked != null && (e.defaultChecked = !!n.defaultChecked)
}
function Pu(e, n, t) {
    if (n.hasOwnProperty("value") || n.hasOwnProperty("defaultValue")) {
        var r = n.type;
        if (!(r !== "submit" && r !== "reset" || n.value !== void 0 && n.value !== null))
            return;
        n = "" + e._wrapperState.initialValue,
        t || n === e.value || (e.value = n),
        e.defaultValue = n
    }
    t = e.name,
    t !== "" && (e.name = ""),
    e.defaultChecked = !!e._wrapperState.initialChecked,
    t !== "" && (e.name = t)
}
function fo(e, n, t) {
    (n !== "number" || Pi(e.ownerDocument) !== e) && (t == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + t && (e.defaultValue = "" + t))
}
var Qt = Array.isArray;
function gt(e, n, t, r) {
    if (e = e.options,
    n) {
        n = {};
        for (var i = 0; i < t.length; i++)
            n["$" + t[i]] = !0;
        for (t = 0; t < e.length; t++)
            i = n.hasOwnProperty("$" + e[t].value),
            e[t].selected !== i && (e[t].selected = i),
            i && r && (e[t].defaultSelected = !0)
    } else {
        for (t = "" + Nn(t),
        n = null,
        i = 0; i < e.length; i++) {
            if (e[i].value === t) {
                e[i].selected = !0,
                r && (e[i].defaultSelected = !0);
                return
            }
            n !== null || e[i].disabled || (n = e[i])
        }
        n !== null && (n.selected = !0)
    }
}
function co(e, n) {
    if (n.dangerouslySetInnerHTML != null)
        throw Error(w(91));
    return Q({}, n, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
    })
}
function Nu(e, n) {
    var t = n.value;
    if (t == null) {
        if (t = n.children,
        n = n.defaultValue,
        t != null) {
            if (n != null)
                throw Error(w(92));
            if (Qt(t)) {
                if (1 < t.length)
                    throw Error(w(93));
                t = t[0]
            }
            n = t
        }
        n == null && (n = ""),
        t = n
    }
    e._wrapperState = {
        initialValue: Nn(t)
    }
}
function Cf(e, n) {
    var t = Nn(n.value)
      , r = Nn(n.defaultValue);
    t != null && (t = "" + t,
    t !== e.value && (e.value = t),
    n.defaultValue == null && e.defaultValue !== t && (e.defaultValue = t)),
    r != null && (e.defaultValue = "" + r)
}
function Ou(e) {
    var n = e.textContent;
    n === e._wrapperState.initialValue && n !== "" && n !== null && (e.value = n)
}
function _f(e) {
    switch (e) {
    case "svg":
        return "http://www.w3.org/2000/svg";
    case "math":
        return "http://www.w3.org/1998/Math/MathML";
    default:
        return "http://www.w3.org/1999/xhtml"
    }
}
function po(e, n) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? _f(n) : e === "http://www.w3.org/2000/svg" && n === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var Hr, Pf = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(n, t, r, i) {
        MSApp.execUnsafeLocalFunction(function() {
            return e(n, t, r, i)
        })
    }
    : e
}(function(e, n) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML"in e)
        e.innerHTML = n;
    else {
        for (Hr = Hr || document.createElement("div"),
        Hr.innerHTML = "<svg>" + n.valueOf().toString() + "</svg>",
        n = Hr.firstChild; e.firstChild; )
            e.removeChild(e.firstChild);
        for (; n.firstChild; )
            e.appendChild(n.firstChild)
    }
});
function sr(e, n) {
    if (n) {
        var t = e.firstChild;
        if (t && t === e.lastChild && t.nodeType === 3) {
            t.nodeValue = n;
            return
        }
    }
    e.textContent = n
}
var Zt = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
}
  , _p = ["Webkit", "ms", "Moz", "O"];
Object.keys(Zt).forEach(function(e) {
    _p.forEach(function(n) {
        n = n + e.charAt(0).toUpperCase() + e.substring(1),
        Zt[n] = Zt[e]
    })
});
function Nf(e, n, t) {
    return n == null || typeof n == "boolean" || n === "" ? "" : t || typeof n != "number" || n === 0 || Zt.hasOwnProperty(e) && Zt[e] ? ("" + n).trim() : n + "px"
}
function Of(e, n) {
    e = e.style;
    for (var t in n)
        if (n.hasOwnProperty(t)) {
            var r = t.indexOf("--") === 0
              , i = Nf(t, n[t], r);
            t === "float" && (t = "cssFloat"),
            r ? e.setProperty(t, i) : e[t] = i
        }
}
var Pp = Q({
    menuitem: !0
}, {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
});
function mo(e, n) {
    if (n) {
        if (Pp[e] && (n.children != null || n.dangerouslySetInnerHTML != null))
            throw Error(w(137, e));
        if (n.dangerouslySetInnerHTML != null) {
            if (n.children != null)
                throw Error(w(60));
            if (typeof n.dangerouslySetInnerHTML != "object" || !("__html"in n.dangerouslySetInnerHTML))
                throw Error(w(61))
        }
        if (n.style != null && typeof n.style != "object")
            throw Error(w(62))
    }
}
function vo(e, n) {
    if (e.indexOf("-") === -1)
        return typeof n.is == "string";
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
        return !0
    }
}
var ho = null;
function Sl(e) {
    return e = e.target || e.srcElement || window,
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
}
var go = null
  , yt = null
  , wt = null;
function Tu(e) {
    if (e = Ir(e)) {
        if (typeof go != "function")
            throw Error(w(280));
        var n = e.stateNode;
        n && (n = la(n),
        go(e.stateNode, e.type, n))
    }
}
function Tf(e) {
    yt ? wt ? wt.push(e) : wt = [e] : yt = e
}
function Af() {
    if (yt) {
        var e = yt
          , n = wt;
        if (wt = yt = null,
        Tu(e),
        n)
            for (e = 0; e < n.length; e++)
                Tu(n[e])
    }
}
function zf(e, n) {
    return e(n)
}
function Lf() {}
var Ta = !1;
function If(e, n, t) {
    if (Ta)
        return e(n, t);
    Ta = !0;
    try {
        return zf(e, n, t)
    } finally {
        Ta = !1,
        (yt !== null || wt !== null) && (Lf(),
        Af())
    }
}
function fr(e, n) {
    var t = e.stateNode;
    if (t === null)
        return null;
    var r = la(t);
    if (r === null)
        return null;
    t = r[n];
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
        (r = !r.disabled) || (e = e.type,
        r = !(e === "button" || e === "input" || e === "select" || e === "textarea")),
        e = !r;
        break e;
    default:
        e = !1
    }
    if (e)
        return null;
    if (t && typeof t != "function")
        throw Error(w(231, n, typeof t));
    return t
}
var yo = !1;
if (nn)
    try {
        var bt = {};
        Object.defineProperty(bt, "passive", {
            get: function() {
                yo = !0
            }
        }),
        window.addEventListener("test", bt, bt),
        window.removeEventListener("test", bt, bt)
    } catch {
        yo = !1
    }
function Np(e, n, t, r, i, a, o, l, u) {
    var s = Array.prototype.slice.call(arguments, 3);
    try {
        n.apply(t, s)
    } catch (d) {
        this.onError(d)
    }
}
var Jt = !1
  , Ni = null
  , Oi = !1
  , wo = null
  , Op = {
    onError: function(e) {
        Jt = !0,
        Ni = e
    }
};
function Tp(e, n, t, r, i, a, o, l, u) {
    Jt = !1,
    Ni = null,
    Np.apply(Op, arguments)
}
function Ap(e, n, t, r, i, a, o, l, u) {
    if (Tp.apply(this, arguments),
    Jt) {
        if (Jt) {
            var s = Ni;
            Jt = !1,
            Ni = null
        } else
            throw Error(w(198));
        Oi || (Oi = !0,
        wo = s)
    }
}
function et(e) {
    var n = e
      , t = e;
    if (e.alternate)
        for (; n.return; )
            n = n.return;
    else {
        e = n;
        do
            n = e,
            n.flags & 4098 && (t = n.return),
            e = n.return;
        while (e)
    }
    return n.tag === 3 ? t : null
}
function Rf(e) {
    if (e.tag === 13) {
        var n = e.memoizedState;
        if (n === null && (e = e.alternate,
        e !== null && (n = e.memoizedState)),
        n !== null)
            return n.dehydrated
    }
    return null
}
function Au(e) {
    if (et(e) !== e)
        throw Error(w(188))
}
function zp(e) {
    var n = e.alternate;
    if (!n) {
        if (n = et(e),
        n === null)
            throw Error(w(188));
        return n !== e ? null : e
    }
    for (var t = e, r = n; ; ) {
        var i = t.return;
        if (i === null)
            break;
        var a = i.alternate;
        if (a === null) {
            if (r = i.return,
            r !== null) {
                t = r;
                continue
            }
            break
        }
        if (i.child === a.child) {
            for (a = i.child; a; ) {
                if (a === t)
                    return Au(i),
                    e;
                if (a === r)
                    return Au(i),
                    n;
                a = a.sibling
            }
            throw Error(w(188))
        }
        if (t.return !== r.return)
            t = i,
            r = a;
        else {
            for (var o = !1, l = i.child; l; ) {
                if (l === t) {
                    o = !0,
                    t = i,
                    r = a;
                    break
                }
                if (l === r) {
                    o = !0,
                    r = i,
                    t = a;
                    break
                }
                l = l.sibling
            }
            if (!o) {
                for (l = a.child; l; ) {
                    if (l === t) {
                        o = !0,
                        t = a,
                        r = i;
                        break
                    }
                    if (l === r) {
                        o = !0,
                        r = a,
                        t = i;
                        break
                    }
                    l = l.sibling
                }
                if (!o)
                    throw Error(w(189))
            }
        }
        if (t.alternate !== r)
            throw Error(w(190))
    }
    if (t.tag !== 3)
        throw Error(w(188));
    return t.stateNode.current === t ? e : n
}
function Mf(e) {
    return e = zp(e),
    e !== null ? jf(e) : null
}
function jf(e) {
    if (e.tag === 5 || e.tag === 6)
        return e;
    for (e = e.child; e !== null; ) {
        var n = jf(e);
        if (n !== null)
            return n;
        e = e.sibling
    }
    return null
}
var Ff = Ce.unstable_scheduleCallback
  , zu = Ce.unstable_cancelCallback
  , Lp = Ce.unstable_shouldYield
  , Ip = Ce.unstable_requestPaint
  , Z = Ce.unstable_now
  , Rp = Ce.unstable_getCurrentPriorityLevel
  , xl = Ce.unstable_ImmediatePriority
  , Df = Ce.unstable_UserBlockingPriority
  , Ti = Ce.unstable_NormalPriority
  , Mp = Ce.unstable_LowPriority
  , bf = Ce.unstable_IdlePriority
  , ra = null
  , Xe = null;
function jp(e) {
    if (Xe && typeof Xe.onCommitFiberRoot == "function")
        try {
            Xe.onCommitFiberRoot(ra, e, void 0, (e.current.flags & 128) === 128)
        } catch {}
}
var $e = Math.clz32 ? Math.clz32 : bp
  , Fp = Math.log
  , Dp = Math.LN2;
function bp(e) {
    return e >>>= 0,
    e === 0 ? 32 : 31 - (Fp(e) / Dp | 0) | 0
}
var Vr = 64
  , Br = 4194304;
function Xt(e) {
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
        return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return e & 130023424;
    case 134217728:
        return 134217728;
    case 268435456:
        return 268435456;
    case 536870912:
        return 536870912;
    case 1073741824:
        return 1073741824;
    default:
        return e
    }
}
function Ai(e, n) {
    var t = e.pendingLanes;
    if (t === 0)
        return 0;
    var r = 0
      , i = e.suspendedLanes
      , a = e.pingedLanes
      , o = t & 268435455;
    if (o !== 0) {
        var l = o & ~i;
        l !== 0 ? r = Xt(l) : (a &= o,
        a !== 0 && (r = Xt(a)))
    } else
        o = t & ~i,
        o !== 0 ? r = Xt(o) : a !== 0 && (r = Xt(a));
    if (r === 0)
        return 0;
    if (n !== 0 && n !== r && !(n & i) && (i = r & -r,
    a = n & -n,
    i >= a || i === 16 && (a & 4194240) !== 0))
        return n;
    if (r & 4 && (r |= t & 16),
    n = e.entangledLanes,
    n !== 0)
        for (e = e.entanglements,
        n &= r; 0 < n; )
            t = 31 - $e(n),
            i = 1 << t,
            r |= e[t],
            n &= ~i;
    return r
}
function $p(e, n) {
    switch (e) {
    case 1:
    case 2:
    case 4:
        return n + 250;
    case 8:
    case 16:
    case 32:
    case 64:
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
    case 67108864:
        return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
        return -1;
    default:
        return -1
    }
}
function Up(e, n) {
    for (var t = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, a = e.pendingLanes; 0 < a; ) {
        var o = 31 - $e(a)
          , l = 1 << o
          , u = i[o];
        u === -1 ? (!(l & t) || l & r) && (i[o] = $p(l, n)) : u <= n && (e.expiredLanes |= l),
        a &= ~l
    }
}
function ko(e) {
    return e = e.pendingLanes & -1073741825,
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}
function $f() {
    var e = Vr;
    return Vr <<= 1,
    !(Vr & 4194240) && (Vr = 64),
    e
}
function Aa(e) {
    for (var n = [], t = 0; 31 > t; t++)
        n.push(e);
    return n
}
function zr(e, n, t) {
    e.pendingLanes |= n,
    n !== 536870912 && (e.suspendedLanes = 0,
    e.pingedLanes = 0),
    e = e.eventTimes,
    n = 31 - $e(n),
    e[n] = t
}
function Wp(e, n) {
    var t = e.pendingLanes & ~n;
    e.pendingLanes = n,
    e.suspendedLanes = 0,
    e.pingedLanes = 0,
    e.expiredLanes &= n,
    e.mutableReadLanes &= n,
    e.entangledLanes &= n,
    n = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < t; ) {
        var i = 31 - $e(t)
          , a = 1 << i;
        n[i] = 0,
        r[i] = -1,
        e[i] = -1,
        t &= ~a
    }
}
function El(e, n) {
    var t = e.entangledLanes |= n;
    for (e = e.entanglements; t; ) {
        var r = 31 - $e(t)
          , i = 1 << r;
        i & n | e[r] & n && (e[r] |= n),
        t &= ~i
    }
}
var D = 0;
function Uf(e) {
    return e &= -e,
    1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var Wf, Cl, Hf, Vf, Bf, So = !1, Yr = [], wn = null, kn = null, Sn = null, cr = new Map, dr = new Map, vn = [], Hp = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Lu(e, n) {
    switch (e) {
    case "focusin":
    case "focusout":
        wn = null;
        break;
    case "dragenter":
    case "dragleave":
        kn = null;
        break;
    case "mouseover":
    case "mouseout":
        Sn = null;
        break;
    case "pointerover":
    case "pointerout":
        cr.delete(n.pointerId);
        break;
    case "gotpointercapture":
    case "lostpointercapture":
        dr.delete(n.pointerId)
    }
}
function $t(e, n, t, r, i, a) {
    return e === null || e.nativeEvent !== a ? (e = {
        blockedOn: n,
        domEventName: t,
        eventSystemFlags: r,
        nativeEvent: a,
        targetContainers: [i]
    },
    n !== null && (n = Ir(n),
    n !== null && Cl(n)),
    e) : (e.eventSystemFlags |= r,
    n = e.targetContainers,
    i !== null && n.indexOf(i) === -1 && n.push(i),
    e)
}
function Vp(e, n, t, r, i) {
    switch (n) {
    case "focusin":
        return wn = $t(wn, e, n, t, r, i),
        !0;
    case "dragenter":
        return kn = $t(kn, e, n, t, r, i),
        !0;
    case "mouseover":
        return Sn = $t(Sn, e, n, t, r, i),
        !0;
    case "pointerover":
        var a = i.pointerId;
        return cr.set(a, $t(cr.get(a) || null, e, n, t, r, i)),
        !0;
    case "gotpointercapture":
        return a = i.pointerId,
        dr.set(a, $t(dr.get(a) || null, e, n, t, r, i)),
        !0
    }
    return !1
}
function Yf(e) {
    var n = bn(e.target);
    if (n !== null) {
        var t = et(n);
        if (t !== null) {
            if (n = t.tag,
            n === 13) {
                if (n = Rf(t),
                n !== null) {
                    e.blockedOn = n,
                    Bf(e.priority, function() {
                        Hf(t)
                    });
                    return
                }
            } else if (n === 3 && t.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = t.tag === 3 ? t.stateNode.containerInfo : null;
                return
            }
        }
    }
    e.blockedOn = null
}
function mi(e) {
    if (e.blockedOn !== null)
        return !1;
    for (var n = e.targetContainers; 0 < n.length; ) {
        var t = xo(e.domEventName, e.eventSystemFlags, n[0], e.nativeEvent);
        if (t === null) {
            t = e.nativeEvent;
            var r = new t.constructor(t.type,t);
            ho = r,
            t.target.dispatchEvent(r),
            ho = null
        } else
            return n = Ir(t),
            n !== null && Cl(n),
            e.blockedOn = t,
            !1;
        n.shift()
    }
    return !0
}
function Iu(e, n, t) {
    mi(e) && t.delete(n)
}
function Bp() {
    So = !1,
    wn !== null && mi(wn) && (wn = null),
    kn !== null && mi(kn) && (kn = null),
    Sn !== null && mi(Sn) && (Sn = null),
    cr.forEach(Iu),
    dr.forEach(Iu)
}
function Ut(e, n) {
    e.blockedOn === n && (e.blockedOn = null,
    So || (So = !0,
    Ce.unstable_scheduleCallback(Ce.unstable_NormalPriority, Bp)))
}
function pr(e) {
    function n(i) {
        return Ut(i, e)
    }
    if (0 < Yr.length) {
        Ut(Yr[0], e);
        for (var t = 1; t < Yr.length; t++) {
            var r = Yr[t];
            r.blockedOn === e && (r.blockedOn = null)
        }
    }
    for (wn !== null && Ut(wn, e),
    kn !== null && Ut(kn, e),
    Sn !== null && Ut(Sn, e),
    cr.forEach(n),
    dr.forEach(n),
    t = 0; t < vn.length; t++)
        r = vn[t],
        r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < vn.length && (t = vn[0],
    t.blockedOn === null); )
        Yf(t),
        t.blockedOn === null && vn.shift()
}
var kt = sn.ReactCurrentBatchConfig
  , zi = !0;
function Yp(e, n, t, r) {
    var i = D
      , a = kt.transition;
    kt.transition = null;
    try {
        D = 1,
        _l(e, n, t, r)
    } finally {
        D = i,
        kt.transition = a
    }
}
function Qp(e, n, t, r) {
    var i = D
      , a = kt.transition;
    kt.transition = null;
    try {
        D = 4,
        _l(e, n, t, r)
    } finally {
        D = i,
        kt.transition = a
    }
}
function _l(e, n, t, r) {
    if (zi) {
        var i = xo(e, n, t, r);
        if (i === null)
            $a(e, n, r, Li, t),
            Lu(e, r);
        else if (Vp(i, e, n, t, r))
            r.stopPropagation();
        else if (Lu(e, r),
        n & 4 && -1 < Hp.indexOf(e)) {
            for (; i !== null; ) {
                var a = Ir(i);
                if (a !== null && Wf(a),
                a = xo(e, n, t, r),
                a === null && $a(e, n, r, Li, t),
                a === i)
                    break;
                i = a
            }
            i !== null && r.stopPropagation()
        } else
            $a(e, n, r, null, t)
    }
}
var Li = null;
function xo(e, n, t, r) {
    if (Li = null,
    e = Sl(r),
    e = bn(e),
    e !== null)
        if (n = et(e),
        n === null)
            e = null;
        else if (t = n.tag,
        t === 13) {
            if (e = Rf(n),
            e !== null)
                return e;
            e = null
        } else if (t === 3) {
            if (n.stateNode.current.memoizedState.isDehydrated)
                return n.tag === 3 ? n.stateNode.containerInfo : null;
            e = null
        } else
            n !== e && (e = null);
    return Li = e,
    null
}
function Qf(e) {
    switch (e) {
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
        return 1;
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
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
        return 4;
    case "message":
        switch (Rp()) {
        case xl:
            return 1;
        case Df:
            return 4;
        case Ti:
        case Mp:
            return 16;
        case bf:
            return 536870912;
        default:
            return 16
        }
    default:
        return 16
    }
}
var gn = null
  , Pl = null
  , vi = null;
function Xf() {
    if (vi)
        return vi;
    var e, n = Pl, t = n.length, r, i = "value"in gn ? gn.value : gn.textContent, a = i.length;
    for (e = 0; e < t && n[e] === i[e]; e++)
        ;
    var o = t - e;
    for (r = 1; r <= o && n[t - r] === i[a - r]; r++)
        ;
    return vi = i.slice(e, 1 < r ? 1 - r : void 0)
}
function hi(e) {
    var n = e.keyCode;
    return "charCode"in e ? (e = e.charCode,
    e === 0 && n === 13 && (e = 13)) : e = n,
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
}
function Qr() {
    return !0
}
function Ru() {
    return !1
}
function Pe(e) {
    function n(t, r, i, a, o) {
        this._reactName = t,
        this._targetInst = i,
        this.type = r,
        this.nativeEvent = a,
        this.target = o,
        this.currentTarget = null;
        for (var l in e)
            e.hasOwnProperty(l) && (t = e[l],
            this[l] = t ? t(a) : a[l]);
        return this.isDefaultPrevented = (a.defaultPrevented != null ? a.defaultPrevented : a.returnValue === !1) ? Qr : Ru,
        this.isPropagationStopped = Ru,
        this
    }
    return Q(n.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var t = this.nativeEvent;
            t && (t.preventDefault ? t.preventDefault() : typeof t.returnValue != "unknown" && (t.returnValue = !1),
            this.isDefaultPrevented = Qr)
        },
        stopPropagation: function() {
            var t = this.nativeEvent;
            t && (t.stopPropagation ? t.stopPropagation() : typeof t.cancelBubble != "unknown" && (t.cancelBubble = !0),
            this.isPropagationStopped = Qr)
        },
        persist: function() {},
        isPersistent: Qr
    }),
    n
}
var It = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
        return e.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0
}, Nl = Pe(It), Lr = Q({}, It, {
    view: 0,
    detail: 0
}), Xp = Pe(Lr), za, La, Wt, ia = Q({}, Lr, {
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
    getModifierState: Ol,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
    },
    movementX: function(e) {
        return "movementX"in e ? e.movementX : (e !== Wt && (Wt && e.type === "mousemove" ? (za = e.screenX - Wt.screenX,
        La = e.screenY - Wt.screenY) : La = za = 0,
        Wt = e),
        za)
    },
    movementY: function(e) {
        return "movementY"in e ? e.movementY : La
    }
}), Mu = Pe(ia), Kp = Q({}, ia, {
    dataTransfer: 0
}), Gp = Pe(Kp), Zp = Q({}, Lr, {
    relatedTarget: 0
}), Ia = Pe(Zp), Jp = Q({}, It, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
}), qp = Pe(Jp), em = Q({}, It, {
    clipboardData: function(e) {
        return "clipboardData"in e ? e.clipboardData : window.clipboardData
    }
}), nm = Pe(em), tm = Q({}, It, {
    data: 0
}), ju = Pe(tm), rm = {
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
}, im = {
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
}, am = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
};
function om(e) {
    var n = this.nativeEvent;
    return n.getModifierState ? n.getModifierState(e) : (e = am[e]) ? !!n[e] : !1
}
function Ol() {
    return om
}
var lm = Q({}, Lr, {
    key: function(e) {
        if (e.key) {
            var n = rm[e.key] || e.key;
            if (n !== "Unidentified")
                return n
        }
        return e.type === "keypress" ? (e = hi(e),
        e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? im[e.keyCode] || "Unidentified" : ""
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Ol,
    charCode: function(e) {
        return e.type === "keypress" ? hi(e) : 0
    },
    keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    },
    which: function(e) {
        return e.type === "keypress" ? hi(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    }
})
  , um = Pe(lm)
  , sm = Q({}, ia, {
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
})
  , Fu = Pe(sm)
  , fm = Q({}, Lr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Ol
})
  , cm = Pe(fm)
  , dm = Q({}, It, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
})
  , pm = Pe(dm)
  , mm = Q({}, ia, {
    deltaX: function(e) {
        return "deltaX"in e ? e.deltaX : "wheelDeltaX"in e ? -e.wheelDeltaX : 0
    },
    deltaY: function(e) {
        return "deltaY"in e ? e.deltaY : "wheelDeltaY"in e ? -e.wheelDeltaY : "wheelDelta"in e ? -e.wheelDelta : 0
    },
    deltaZ: 0,
    deltaMode: 0
})
  , vm = Pe(mm)
  , hm = [9, 13, 27, 32]
  , Tl = nn && "CompositionEvent"in window
  , qt = null;
nn && "documentMode"in document && (qt = document.documentMode);
var gm = nn && "TextEvent"in window && !qt
  , Kf = nn && (!Tl || qt && 8 < qt && 11 >= qt)
  , Du = " "
  , bu = !1;
function Gf(e, n) {
    switch (e) {
    case "keyup":
        return hm.indexOf(n.keyCode) !== -1;
    case "keydown":
        return n.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
        return !0;
    default:
        return !1
    }
}
function Zf(e) {
    return e = e.detail,
    typeof e == "object" && "data"in e ? e.data : null
}
var it = !1;
function ym(e, n) {
    switch (e) {
    case "compositionend":
        return Zf(n);
    case "keypress":
        return n.which !== 32 ? null : (bu = !0,
        Du);
    case "textInput":
        return e = n.data,
        e === Du && bu ? null : e;
    default:
        return null
    }
}
function wm(e, n) {
    if (it)
        return e === "compositionend" || !Tl && Gf(e, n) ? (e = Xf(),
        vi = Pl = gn = null,
        it = !1,
        e) : null;
    switch (e) {
    case "paste":
        return null;
    case "keypress":
        if (!(n.ctrlKey || n.altKey || n.metaKey) || n.ctrlKey && n.altKey) {
            if (n.char && 1 < n.char.length)
                return n.char;
            if (n.which)
                return String.fromCharCode(n.which)
        }
        return null;
    case "compositionend":
        return Kf && n.locale !== "ko" ? null : n.data;
    default:
        return null
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
function $u(e) {
    var n = e && e.nodeName && e.nodeName.toLowerCase();
    return n === "input" ? !!km[e.type] : n === "textarea"
}
function Jf(e, n, t, r) {
    Tf(r),
    n = Ii(n, "onChange"),
    0 < n.length && (t = new Nl("onChange","change",null,t,r),
    e.push({
        event: t,
        listeners: n
    }))
}
var er = null
  , mr = null;
function Sm(e) {
    sc(e, 0)
}
function aa(e) {
    var n = lt(e);
    if (xf(n))
        return e
}
function xm(e, n) {
    if (e === "change")
        return n
}
var qf = !1;
if (nn) {
    var Ra;
    if (nn) {
        var Ma = "oninput"in document;
        if (!Ma) {
            var Uu = document.createElement("div");
            Uu.setAttribute("oninput", "return;"),
            Ma = typeof Uu.oninput == "function"
        }
        Ra = Ma
    } else
        Ra = !1;
    qf = Ra && (!document.documentMode || 9 < document.documentMode)
}
function Wu() {
    er && (er.detachEvent("onpropertychange", ec),
    mr = er = null)
}
function ec(e) {
    if (e.propertyName === "value" && aa(mr)) {
        var n = [];
        Jf(n, mr, e, Sl(e)),
        If(Sm, n)
    }
}
function Em(e, n, t) {
    e === "focusin" ? (Wu(),
    er = n,
    mr = t,
    er.attachEvent("onpropertychange", ec)) : e === "focusout" && Wu()
}
function Cm(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return aa(mr)
}
function _m(e, n) {
    if (e === "click")
        return aa(n)
}
function Pm(e, n) {
    if (e === "input" || e === "change")
        return aa(n)
}
function Nm(e, n) {
    return e === n && (e !== 0 || 1 / e === 1 / n) || e !== e && n !== n
}
var We = typeof Object.is == "function" ? Object.is : Nm;
function vr(e, n) {
    if (We(e, n))
        return !0;
    if (typeof e != "object" || e === null || typeof n != "object" || n === null)
        return !1;
    var t = Object.keys(e)
      , r = Object.keys(n);
    if (t.length !== r.length)
        return !1;
    for (r = 0; r < t.length; r++) {
        var i = t[r];
        if (!ro.call(n, i) || !We(e[i], n[i]))
            return !1
    }
    return !0
}
function Hu(e) {
    for (; e && e.firstChild; )
        e = e.firstChild;
    return e
}
function Vu(e, n) {
    var t = Hu(e);
    e = 0;
    for (var r; t; ) {
        if (t.nodeType === 3) {
            if (r = e + t.textContent.length,
            e <= n && r >= n)
                return {
                    node: t,
                    offset: n - e
                };
            e = r
        }
        e: {
            for (; t; ) {
                if (t.nextSibling) {
                    t = t.nextSibling;
                    break e
                }
                t = t.parentNode
            }
            t = void 0
        }
        t = Hu(t)
    }
}
function nc(e, n) {
    return e && n ? e === n ? !0 : e && e.nodeType === 3 ? !1 : n && n.nodeType === 3 ? nc(e, n.parentNode) : "contains"in e ? e.contains(n) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(n) & 16) : !1 : !1
}
function tc() {
    for (var e = window, n = Pi(); n instanceof e.HTMLIFrameElement; ) {
        try {
            var t = typeof n.contentWindow.location.href == "string"
        } catch {
            t = !1
        }
        if (t)
            e = n.contentWindow;
        else
            break;
        n = Pi(e.document)
    }
    return n
}
function Al(e) {
    var n = e && e.nodeName && e.nodeName.toLowerCase();
    return n && (n === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || n === "textarea" || e.contentEditable === "true")
}
function Om(e) {
    var n = tc()
      , t = e.focusedElem
      , r = e.selectionRange;
    if (n !== t && t && t.ownerDocument && nc(t.ownerDocument.documentElement, t)) {
        if (r !== null && Al(t)) {
            if (n = r.start,
            e = r.end,
            e === void 0 && (e = n),
            "selectionStart"in t)
                t.selectionStart = n,
                t.selectionEnd = Math.min(e, t.value.length);
            else if (e = (n = t.ownerDocument || document) && n.defaultView || window,
            e.getSelection) {
                e = e.getSelection();
                var i = t.textContent.length
                  , a = Math.min(r.start, i);
                r = r.end === void 0 ? a : Math.min(r.end, i),
                !e.extend && a > r && (i = r,
                r = a,
                a = i),
                i = Vu(t, a);
                var o = Vu(t, r);
                i && o && (e.rangeCount !== 1 || e.anchorNode !== i.node || e.anchorOffset !== i.offset || e.focusNode !== o.node || e.focusOffset !== o.offset) && (n = n.createRange(),
                n.setStart(i.node, i.offset),
                e.removeAllRanges(),
                a > r ? (e.addRange(n),
                e.extend(o.node, o.offset)) : (n.setEnd(o.node, o.offset),
                e.addRange(n)))
            }
        }
        for (n = [],
        e = t; e = e.parentNode; )
            e.nodeType === 1 && n.push({
                element: e,
                left: e.scrollLeft,
                top: e.scrollTop
            });
        for (typeof t.focus == "function" && t.focus(),
        t = 0; t < n.length; t++)
            e = n[t],
            e.element.scrollLeft = e.left,
            e.element.scrollTop = e.top
    }
}
var Tm = nn && "documentMode"in document && 11 >= document.documentMode
  , at = null
  , Eo = null
  , nr = null
  , Co = !1;
function Bu(e, n, t) {
    var r = t.window === t ? t.document : t.nodeType === 9 ? t : t.ownerDocument;
    Co || at == null || at !== Pi(r) || (r = at,
    "selectionStart"in r && Al(r) ? r = {
        start: r.selectionStart,
        end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(),
    r = {
        anchorNode: r.anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
    }),
    nr && vr(nr, r) || (nr = r,
    r = Ii(Eo, "onSelect"),
    0 < r.length && (n = new Nl("onSelect","select",null,n,t),
    e.push({
        event: n,
        listeners: r
    }),
    n.target = at)))
}
function Xr(e, n) {
    var t = {};
    return t[e.toLowerCase()] = n.toLowerCase(),
    t["Webkit" + e] = "webkit" + n,
    t["Moz" + e] = "moz" + n,
    t
}
var ot = {
    animationend: Xr("Animation", "AnimationEnd"),
    animationiteration: Xr("Animation", "AnimationIteration"),
    animationstart: Xr("Animation", "AnimationStart"),
    transitionend: Xr("Transition", "TransitionEnd")
}
  , ja = {}
  , rc = {};
nn && (rc = document.createElement("div").style,
"AnimationEvent"in window || (delete ot.animationend.animation,
delete ot.animationiteration.animation,
delete ot.animationstart.animation),
"TransitionEvent"in window || delete ot.transitionend.transition);
function oa(e) {
    if (ja[e])
        return ja[e];
    if (!ot[e])
        return e;
    var n = ot[e], t;
    for (t in n)
        if (n.hasOwnProperty(t) && t in rc)
            return ja[e] = n[t];
    return e
}
var ic = oa("animationend")
  , ac = oa("animationiteration")
  , oc = oa("animationstart")
  , lc = oa("transitionend")
  , uc = new Map
  , Yu = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Ln(e, n) {
    uc.set(e, n),
    qn(n, [e])
}
for (var Fa = 0; Fa < Yu.length; Fa++) {
    var Da = Yu[Fa]
      , Am = Da.toLowerCase()
      , zm = Da[0].toUpperCase() + Da.slice(1);
    Ln(Am, "on" + zm)
}
Ln(ic, "onAnimationEnd");
Ln(ac, "onAnimationIteration");
Ln(oc, "onAnimationStart");
Ln("dblclick", "onDoubleClick");
Ln("focusin", "onFocus");
Ln("focusout", "onBlur");
Ln(lc, "onTransitionEnd");
Ct("onMouseEnter", ["mouseout", "mouseover"]);
Ct("onMouseLeave", ["mouseout", "mouseover"]);
Ct("onPointerEnter", ["pointerout", "pointerover"]);
Ct("onPointerLeave", ["pointerout", "pointerover"]);
qn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
qn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
qn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
qn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
qn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
qn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Kt = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
  , Lm = new Set("cancel close invalid load scroll toggle".split(" ").concat(Kt));
function Qu(e, n, t) {
    var r = e.type || "unknown-event";
    e.currentTarget = t,
    Ap(r, n, void 0, e),
    e.currentTarget = null
}
function sc(e, n) {
    n = (n & 4) !== 0;
    for (var t = 0; t < e.length; t++) {
        var r = e[t]
          , i = r.event;
        r = r.listeners;
        e: {
            var a = void 0;
            if (n)
                for (var o = r.length - 1; 0 <= o; o--) {
                    var l = r[o]
                      , u = l.instance
                      , s = l.currentTarget;
                    if (l = l.listener,
                    u !== a && i.isPropagationStopped())
                        break e;
                    Qu(i, l, s),
                    a = u
                }
            else
                for (o = 0; o < r.length; o++) {
                    if (l = r[o],
                    u = l.instance,
                    s = l.currentTarget,
                    l = l.listener,
                    u !== a && i.isPropagationStopped())
                        break e;
                    Qu(i, l, s),
                    a = u
                }
        }
    }
    if (Oi)
        throw e = wo,
        Oi = !1,
        wo = null,
        e
}
function $(e, n) {
    var t = n[To];
    t === void 0 && (t = n[To] = new Set);
    var r = e + "__bubble";
    t.has(r) || (fc(n, e, 2, !1),
    t.add(r))
}
function ba(e, n, t) {
    var r = 0;
    n && (r |= 4),
    fc(t, e, r, n)
}
var Kr = "_reactListening" + Math.random().toString(36).slice(2);
function hr(e) {
    if (!e[Kr]) {
        e[Kr] = !0,
        gf.forEach(function(t) {
            t !== "selectionchange" && (Lm.has(t) || ba(t, !1, e),
            ba(t, !0, e))
        });
        var n = e.nodeType === 9 ? e : e.ownerDocument;
        n === null || n[Kr] || (n[Kr] = !0,
        ba("selectionchange", !1, n))
    }
}
function fc(e, n, t, r) {
    switch (Qf(n)) {
    case 1:
        var i = Yp;
        break;
    case 4:
        i = Qp;
        break;
    default:
        i = _l
    }
    t = i.bind(null, n, t, e),
    i = void 0,
    !yo || n !== "touchstart" && n !== "touchmove" && n !== "wheel" || (i = !0),
    r ? i !== void 0 ? e.addEventListener(n, t, {
        capture: !0,
        passive: i
    }) : e.addEventListener(n, t, !0) : i !== void 0 ? e.addEventListener(n, t, {
        passive: i
    }) : e.addEventListener(n, t, !1)
}
function $a(e, n, t, r, i) {
    var a = r;
    if (!(n & 1) && !(n & 2) && r !== null)
        e: for (; ; ) {
            if (r === null)
                return;
            var o = r.tag;
            if (o === 3 || o === 4) {
                var l = r.stateNode.containerInfo;
                if (l === i || l.nodeType === 8 && l.parentNode === i)
                    break;
                if (o === 4)
                    for (o = r.return; o !== null; ) {
                        var u = o.tag;
                        if ((u === 3 || u === 4) && (u = o.stateNode.containerInfo,
                        u === i || u.nodeType === 8 && u.parentNode === i))
                            return;
                        o = o.return
                    }
                for (; l !== null; ) {
                    if (o = bn(l),
                    o === null)
                        return;
                    if (u = o.tag,
                    u === 5 || u === 6) {
                        r = a = o;
                        continue e
                    }
                    l = l.parentNode
                }
            }
            r = r.return
        }
    If(function() {
        var s = a
          , d = Sl(t)
          , m = [];
        e: {
            var v = uc.get(e);
            if (v !== void 0) {
                var h = Nl
                  , y = e;
                switch (e) {
                case "keypress":
                    if (hi(t) === 0)
                        break e;
                case "keydown":
                case "keyup":
                    h = um;
                    break;
                case "focusin":
                    y = "focus",
                    h = Ia;
                    break;
                case "focusout":
                    y = "blur",
                    h = Ia;
                    break;
                case "beforeblur":
                case "afterblur":
                    h = Ia;
                    break;
                case "click":
                    if (t.button === 2)
                        break e;
                case "auxclick":
                case "dblclick":
                case "mousedown":
                case "mousemove":
                case "mouseup":
                case "mouseout":
                case "mouseover":
                case "contextmenu":
                    h = Mu;
                    break;
                case "drag":
                case "dragend":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "dragstart":
                case "drop":
                    h = Gp;
                    break;
                case "touchcancel":
                case "touchend":
                case "touchmove":
                case "touchstart":
                    h = cm;
                    break;
                case ic:
                case ac:
                case oc:
                    h = qp;
                    break;
                case lc:
                    h = pm;
                    break;
                case "scroll":
                    h = Xp;
                    break;
                case "wheel":
                    h = vm;
                    break;
                case "copy":
                case "cut":
                case "paste":
                    h = nm;
                    break;
                case "gotpointercapture":
                case "lostpointercapture":
                case "pointercancel":
                case "pointerdown":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "pointerup":
                    h = Fu
                }
                var k = (n & 4) !== 0
                  , T = !k && e === "scroll"
                  , c = k ? v !== null ? v + "Capture" : null : v;
                k = [];
                for (var f = s, p; f !== null; ) {
                    p = f;
                    var g = p.stateNode;
                    if (p.tag === 5 && g !== null && (p = g,
                    c !== null && (g = fr(f, c),
                    g != null && k.push(gr(f, g, p)))),
                    T)
                        break;
                    f = f.return
                }
                0 < k.length && (v = new h(v,y,null,t,d),
                m.push({
                    event: v,
                    listeners: k
                }))
            }
        }
        if (!(n & 7)) {
            e: {
                if (v = e === "mouseover" || e === "pointerover",
                h = e === "mouseout" || e === "pointerout",
                v && t !== ho && (y = t.relatedTarget || t.fromElement) && (bn(y) || y[tn]))
                    break e;
                if ((h || v) && (v = d.window === d ? d : (v = d.ownerDocument) ? v.defaultView || v.parentWindow : window,
                h ? (y = t.relatedTarget || t.toElement,
                h = s,
                y = y ? bn(y) : null,
                y !== null && (T = et(y),
                y !== T || y.tag !== 5 && y.tag !== 6) && (y = null)) : (h = null,
                y = s),
                h !== y)) {
                    if (k = Mu,
                    g = "onMouseLeave",
                    c = "onMouseEnter",
                    f = "mouse",
                    (e === "pointerout" || e === "pointerover") && (k = Fu,
                    g = "onPointerLeave",
                    c = "onPointerEnter",
                    f = "pointer"),
                    T = h == null ? v : lt(h),
                    p = y == null ? v : lt(y),
                    v = new k(g,f + "leave",h,t,d),
                    v.target = T,
                    v.relatedTarget = p,
                    g = null,
                    bn(d) === s && (k = new k(c,f + "enter",y,t,d),
                    k.target = p,
                    k.relatedTarget = T,
                    g = k),
                    T = g,
                    h && y)
                        n: {
                            for (k = h,
                            c = y,
                            f = 0,
                            p = k; p; p = nt(p))
                                f++;
                            for (p = 0,
                            g = c; g; g = nt(g))
                                p++;
                            for (; 0 < f - p; )
                                k = nt(k),
                                f--;
                            for (; 0 < p - f; )
                                c = nt(c),
                                p--;
                            for (; f--; ) {
                                if (k === c || c !== null && k === c.alternate)
                                    break n;
                                k = nt(k),
                                c = nt(c)
                            }
                            k = null
                        }
                    else
                        k = null;
                    h !== null && Xu(m, v, h, k, !1),
                    y !== null && T !== null && Xu(m, T, y, k, !0)
                }
            }
            e: {
                if (v = s ? lt(s) : window,
                h = v.nodeName && v.nodeName.toLowerCase(),
                h === "select" || h === "input" && v.type === "file")
                    var S = xm;
                else if ($u(v))
                    if (qf)
                        S = Pm;
                    else {
                        S = Cm;
                        var C = Em
                    }
                else
                    (h = v.nodeName) && h.toLowerCase() === "input" && (v.type === "checkbox" || v.type === "radio") && (S = _m);
                if (S && (S = S(e, s))) {
                    Jf(m, S, t, d);
                    break e
                }
                C && C(e, v, s),
                e === "focusout" && (C = v._wrapperState) && C.controlled && v.type === "number" && fo(v, "number", v.value)
            }
            switch (C = s ? lt(s) : window,
            e) {
            case "focusin":
                ($u(C) || C.contentEditable === "true") && (at = C,
                Eo = s,
                nr = null);
                break;
            case "focusout":
                nr = Eo = at = null;
                break;
            case "mousedown":
                Co = !0;
                break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
                Co = !1,
                Bu(m, t, d);
                break;
            case "selectionchange":
                if (Tm)
                    break;
            case "keydown":
            case "keyup":
                Bu(m, t, d)
            }
            var _;
            if (Tl)
                e: {
                    switch (e) {
                    case "compositionstart":
                        var O = "onCompositionStart";
                        break e;
                    case "compositionend":
                        O = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        O = "onCompositionUpdate";
                        break e
                    }
                    O = void 0
                }
            else
                it ? Gf(e, t) && (O = "onCompositionEnd") : e === "keydown" && t.keyCode === 229 && (O = "onCompositionStart");
            O && (Kf && t.locale !== "ko" && (it || O !== "onCompositionStart" ? O === "onCompositionEnd" && it && (_ = Xf()) : (gn = d,
            Pl = "value"in gn ? gn.value : gn.textContent,
            it = !0)),
            C = Ii(s, O),
            0 < C.length && (O = new ju(O,e,null,t,d),
            m.push({
                event: O,
                listeners: C
            }),
            _ ? O.data = _ : (_ = Zf(t),
            _ !== null && (O.data = _)))),
            (_ = gm ? ym(e, t) : wm(e, t)) && (s = Ii(s, "onBeforeInput"),
            0 < s.length && (d = new ju("onBeforeInput","beforeinput",null,t,d),
            m.push({
                event: d,
                listeners: s
            }),
            d.data = _))
        }
        sc(m, n)
    })
}
function gr(e, n, t) {
    return {
        instance: e,
        listener: n,
        currentTarget: t
    }
}
function Ii(e, n) {
    for (var t = n + "Capture", r = []; e !== null; ) {
        var i = e
          , a = i.stateNode;
        i.tag === 5 && a !== null && (i = a,
        a = fr(e, t),
        a != null && r.unshift(gr(e, a, i)),
        a = fr(e, n),
        a != null && r.push(gr(e, a, i))),
        e = e.return
    }
    return r
}
function nt(e) {
    if (e === null)
        return null;
    do
        e = e.return;
    while (e && e.tag !== 5);
    return e || null
}
function Xu(e, n, t, r, i) {
    for (var a = n._reactName, o = []; t !== null && t !== r; ) {
        var l = t
          , u = l.alternate
          , s = l.stateNode;
        if (u !== null && u === r)
            break;
        l.tag === 5 && s !== null && (l = s,
        i ? (u = fr(t, a),
        u != null && o.unshift(gr(t, u, l))) : i || (u = fr(t, a),
        u != null && o.push(gr(t, u, l)))),
        t = t.return
    }
    o.length !== 0 && e.push({
        event: n,
        listeners: o
    })
}
var Im = /\r\n?/g
  , Rm = /\u0000|\uFFFD/g;
function Ku(e) {
    return (typeof e == "string" ? e : "" + e).replace(Im, `
`).replace(Rm, "")
}
function Gr(e, n, t) {
    if (n = Ku(n),
    Ku(e) !== n && t)
        throw Error(w(425))
}
function Ri() {}
var _o = null
  , Po = null;
function No(e, n) {
    return e === "textarea" || e === "noscript" || typeof n.children == "string" || typeof n.children == "number" || typeof n.dangerouslySetInnerHTML == "object" && n.dangerouslySetInnerHTML !== null && n.dangerouslySetInnerHTML.__html != null
}
var Oo = typeof setTimeout == "function" ? setTimeout : void 0
  , Mm = typeof clearTimeout == "function" ? clearTimeout : void 0
  , Gu = typeof Promise == "function" ? Promise : void 0
  , jm = typeof queueMicrotask == "function" ? queueMicrotask : typeof Gu < "u" ? function(e) {
    return Gu.resolve(null).then(e).catch(Fm)
}
: Oo;
function Fm(e) {
    setTimeout(function() {
        throw e
    })
}
function Ua(e, n) {
    var t = n
      , r = 0;
    do {
        var i = t.nextSibling;
        if (e.removeChild(t),
        i && i.nodeType === 8)
            if (t = i.data,
            t === "/$") {
                if (r === 0) {
                    e.removeChild(i),
                    pr(n);
                    return
                }
                r--
            } else
                t !== "$" && t !== "$?" && t !== "$!" || r++;
        t = i
    } while (t);
    pr(n)
}
function xn(e) {
    for (; e != null; e = e.nextSibling) {
        var n = e.nodeType;
        if (n === 1 || n === 3)
            break;
        if (n === 8) {
            if (n = e.data,
            n === "$" || n === "$!" || n === "$?")
                break;
            if (n === "/$")
                return null
        }
    }
    return e
}
function Zu(e) {
    e = e.previousSibling;
    for (var n = 0; e; ) {
        if (e.nodeType === 8) {
            var t = e.data;
            if (t === "$" || t === "$!" || t === "$?") {
                if (n === 0)
                    return e;
                n--
            } else
                t === "/$" && n++
        }
        e = e.previousSibling
    }
    return null
}
var Rt = Math.random().toString(36).slice(2)
  , Ye = "__reactFiber$" + Rt
  , yr = "__reactProps$" + Rt
  , tn = "__reactContainer$" + Rt
  , To = "__reactEvents$" + Rt
  , Dm = "__reactListeners$" + Rt
  , bm = "__reactHandles$" + Rt;
function bn(e) {
    var n = e[Ye];
    if (n)
        return n;
    for (var t = e.parentNode; t; ) {
        if (n = t[tn] || t[Ye]) {
            if (t = n.alternate,
            n.child !== null || t !== null && t.child !== null)
                for (e = Zu(e); e !== null; ) {
                    if (t = e[Ye])
                        return t;
                    e = Zu(e)
                }
            return n
        }
        e = t,
        t = e.parentNode
    }
    return null
}
function Ir(e) {
    return e = e[Ye] || e[tn],
    !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}
function lt(e) {
    if (e.tag === 5 || e.tag === 6)
        return e.stateNode;
    throw Error(w(33))
}
function la(e) {
    return e[yr] || null
}
var Ao = []
  , ut = -1;
function In(e) {
    return {
        current: e
    }
}
function W(e) {
    0 > ut || (e.current = Ao[ut],
    Ao[ut] = null,
    ut--)
}
function b(e, n) {
    ut++,
    Ao[ut] = e.current,
    e.current = n
}
var On = {}
  , ce = In(On)
  , ye = In(!1)
  , Yn = On;
function _t(e, n) {
    var t = e.type.contextTypes;
    if (!t)
        return On;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === n)
        return r.__reactInternalMemoizedMaskedChildContext;
    var i = {}, a;
    for (a in t)
        i[a] = n[a];
    return r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = n,
    e.__reactInternalMemoizedMaskedChildContext = i),
    i
}
function we(e) {
    return e = e.childContextTypes,
    e != null
}
function Mi() {
    W(ye),
    W(ce)
}
function Ju(e, n, t) {
    if (ce.current !== On)
        throw Error(w(168));
    b(ce, n),
    b(ye, t)
}
function cc(e, n, t) {
    var r = e.stateNode;
    if (n = n.childContextTypes,
    typeof r.getChildContext != "function")
        return t;
    r = r.getChildContext();
    for (var i in r)
        if (!(i in n))
            throw Error(w(108, Ep(e) || "Unknown", i));
    return Q({}, t, r)
}
function ji(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || On,
    Yn = ce.current,
    b(ce, e),
    b(ye, ye.current),
    !0
}
function qu(e, n, t) {
    var r = e.stateNode;
    if (!r)
        throw Error(w(169));
    t ? (e = cc(e, n, Yn),
    r.__reactInternalMemoizedMergedChildContext = e,
    W(ye),
    W(ce),
    b(ce, e)) : W(ye),
    b(ye, t)
}
var Ze = null
  , ua = !1
  , Wa = !1;
function dc(e) {
    Ze === null ? Ze = [e] : Ze.push(e)
}
function $m(e) {
    ua = !0,
    dc(e)
}
function Rn() {
    if (!Wa && Ze !== null) {
        Wa = !0;
        var e = 0
          , n = D;
        try {
            var t = Ze;
            for (D = 1; e < t.length; e++) {
                var r = t[e];
                do
                    r = r(!0);
                while (r !== null)
            }
            Ze = null,
            ua = !1
        } catch (i) {
            throw Ze !== null && (Ze = Ze.slice(e + 1)),
            Ff(xl, Rn),
            i
        } finally {
            D = n,
            Wa = !1
        }
    }
    return null
}
var st = []
  , ft = 0
  , Fi = null
  , Di = 0
  , Oe = []
  , Te = 0
  , Qn = null
  , Je = 1
  , qe = "";
function Fn(e, n) {
    st[ft++] = Di,
    st[ft++] = Fi,
    Fi = e,
    Di = n
}
function pc(e, n, t) {
    Oe[Te++] = Je,
    Oe[Te++] = qe,
    Oe[Te++] = Qn,
    Qn = e;
    var r = Je;
    e = qe;
    var i = 32 - $e(r) - 1;
    r &= ~(1 << i),
    t += 1;
    var a = 32 - $e(n) + i;
    if (30 < a) {
        var o = i - i % 5;
        a = (r & (1 << o) - 1).toString(32),
        r >>= o,
        i -= o,
        Je = 1 << 32 - $e(n) + i | t << i | r,
        qe = a + e
    } else
        Je = 1 << a | t << i | r,
        qe = e
}
function zl(e) {
    e.return !== null && (Fn(e, 1),
    pc(e, 1, 0))
}
function Ll(e) {
    for (; e === Fi; )
        Fi = st[--ft],
        st[ft] = null,
        Di = st[--ft],
        st[ft] = null;
    for (; e === Qn; )
        Qn = Oe[--Te],
        Oe[Te] = null,
        qe = Oe[--Te],
        Oe[Te] = null,
        Je = Oe[--Te],
        Oe[Te] = null
}
var Ee = null
  , xe = null
  , V = !1
  , De = null;
function mc(e, n) {
    var t = Ae(5, null, null, 0);
    t.elementType = "DELETED",
    t.stateNode = n,
    t.return = e,
    n = e.deletions,
    n === null ? (e.deletions = [t],
    e.flags |= 16) : n.push(t)
}
function es(e, n) {
    switch (e.tag) {
    case 5:
        var t = e.type;
        return n = n.nodeType !== 1 || t.toLowerCase() !== n.nodeName.toLowerCase() ? null : n,
        n !== null ? (e.stateNode = n,
        Ee = e,
        xe = xn(n.firstChild),
        !0) : !1;
    case 6:
        return n = e.pendingProps === "" || n.nodeType !== 3 ? null : n,
        n !== null ? (e.stateNode = n,
        Ee = e,
        xe = null,
        !0) : !1;
    case 13:
        return n = n.nodeType !== 8 ? null : n,
        n !== null ? (t = Qn !== null ? {
            id: Je,
            overflow: qe
        } : null,
        e.memoizedState = {
            dehydrated: n,
            treeContext: t,
            retryLane: 1073741824
        },
        t = Ae(18, null, null, 0),
        t.stateNode = n,
        t.return = e,
        e.child = t,
        Ee = e,
        xe = null,
        !0) : !1;
    default:
        return !1
    }
}
function zo(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}
function Lo(e) {
    if (V) {
        var n = xe;
        if (n) {
            var t = n;
            if (!es(e, n)) {
                if (zo(e))
                    throw Error(w(418));
                n = xn(t.nextSibling);
                var r = Ee;
                n && es(e, n) ? mc(r, t) : (e.flags = e.flags & -4097 | 2,
                V = !1,
                Ee = e)
            }
        } else {
            if (zo(e))
                throw Error(w(418));
            e.flags = e.flags & -4097 | 2,
            V = !1,
            Ee = e
        }
    }
}
function ns(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
        e = e.return;
    Ee = e
}
function Zr(e) {
    if (e !== Ee)
        return !1;
    if (!V)
        return ns(e),
        V = !0,
        !1;
    var n;
    if ((n = e.tag !== 3) && !(n = e.tag !== 5) && (n = e.type,
    n = n !== "head" && n !== "body" && !No(e.type, e.memoizedProps)),
    n && (n = xe)) {
        if (zo(e))
            throw vc(),
            Error(w(418));
        for (; n; )
            mc(e, n),
            n = xn(n.nextSibling)
    }
    if (ns(e),
    e.tag === 13) {
        if (e = e.memoizedState,
        e = e !== null ? e.dehydrated : null,
        !e)
            throw Error(w(317));
        e: {
            for (e = e.nextSibling,
            n = 0; e; ) {
                if (e.nodeType === 8) {
                    var t = e.data;
                    if (t === "/$") {
                        if (n === 0) {
                            xe = xn(e.nextSibling);
                            break e
                        }
                        n--
                    } else
                        t !== "$" && t !== "$!" && t !== "$?" || n++
                }
                e = e.nextSibling
            }
            xe = null
        }
    } else
        xe = Ee ? xn(e.stateNode.nextSibling) : null;
    return !0
}
function vc() {
    for (var e = xe; e; )
        e = xn(e.nextSibling)
}
function Pt() {
    xe = Ee = null,
    V = !1
}
function Il(e) {
    De === null ? De = [e] : De.push(e)
}
var Um = sn.ReactCurrentBatchConfig;
function Ht(e, n, t) {
    if (e = t.ref,
    e !== null && typeof e != "function" && typeof e != "object") {
        if (t._owner) {
            if (t = t._owner,
            t) {
                if (t.tag !== 1)
                    throw Error(w(309));
                var r = t.stateNode
            }
            if (!r)
                throw Error(w(147, e));
            var i = r
              , a = "" + e;
            return n !== null && n.ref !== null && typeof n.ref == "function" && n.ref._stringRef === a ? n.ref : (n = function(o) {
                var l = i.refs;
                o === null ? delete l[a] : l[a] = o
            }
            ,
            n._stringRef = a,
            n)
        }
        if (typeof e != "string")
            throw Error(w(284));
        if (!t._owner)
            throw Error(w(290, e))
    }
    return e
}
function Jr(e, n) {
    throw e = Object.prototype.toString.call(n),
    Error(w(31, e === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : e))
}
function ts(e) {
    var n = e._init;
    return n(e._payload)
}
function hc(e) {
    function n(c, f) {
        if (e) {
            var p = c.deletions;
            p === null ? (c.deletions = [f],
            c.flags |= 16) : p.push(f)
        }
    }
    function t(c, f) {
        if (!e)
            return null;
        for (; f !== null; )
            n(c, f),
            f = f.sibling;
        return null
    }
    function r(c, f) {
        for (c = new Map; f !== null; )
            f.key !== null ? c.set(f.key, f) : c.set(f.index, f),
            f = f.sibling;
        return c
    }
    function i(c, f) {
        return c = Pn(c, f),
        c.index = 0,
        c.sibling = null,
        c
    }
    function a(c, f, p) {
        return c.index = p,
        e ? (p = c.alternate,
        p !== null ? (p = p.index,
        p < f ? (c.flags |= 2,
        f) : p) : (c.flags |= 2,
        f)) : (c.flags |= 1048576,
        f)
    }
    function o(c) {
        return e && c.alternate === null && (c.flags |= 2),
        c
    }
    function l(c, f, p, g) {
        return f === null || f.tag !== 6 ? (f = Ka(p, c.mode, g),
        f.return = c,
        f) : (f = i(f, p),
        f.return = c,
        f)
    }
    function u(c, f, p, g) {
        var S = p.type;
        return S === rt ? d(c, f, p.props.children, g, p.key) : f !== null && (f.elementType === S || typeof S == "object" && S !== null && S.$$typeof === pn && ts(S) === f.type) ? (g = i(f, p.props),
        g.ref = Ht(c, f, p),
        g.return = c,
        g) : (g = Ei(p.type, p.key, p.props, null, c.mode, g),
        g.ref = Ht(c, f, p),
        g.return = c,
        g)
    }
    function s(c, f, p, g) {
        return f === null || f.tag !== 4 || f.stateNode.containerInfo !== p.containerInfo || f.stateNode.implementation !== p.implementation ? (f = Ga(p, c.mode, g),
        f.return = c,
        f) : (f = i(f, p.children || []),
        f.return = c,
        f)
    }
    function d(c, f, p, g, S) {
        return f === null || f.tag !== 7 ? (f = Bn(p, c.mode, g, S),
        f.return = c,
        f) : (f = i(f, p),
        f.return = c,
        f)
    }
    function m(c, f, p) {
        if (typeof f == "string" && f !== "" || typeof f == "number")
            return f = Ka("" + f, c.mode, p),
            f.return = c,
            f;
        if (typeof f == "object" && f !== null) {
            switch (f.$$typeof) {
            case Ur:
                return p = Ei(f.type, f.key, f.props, null, c.mode, p),
                p.ref = Ht(c, null, f),
                p.return = c,
                p;
            case tt:
                return f = Ga(f, c.mode, p),
                f.return = c,
                f;
            case pn:
                var g = f._init;
                return m(c, g(f._payload), p)
            }
            if (Qt(f) || Dt(f))
                return f = Bn(f, c.mode, p, null),
                f.return = c,
                f;
            Jr(c, f)
        }
        return null
    }
    function v(c, f, p, g) {
        var S = f !== null ? f.key : null;
        if (typeof p == "string" && p !== "" || typeof p == "number")
            return S !== null ? null : l(c, f, "" + p, g);
        if (typeof p == "object" && p !== null) {
            switch (p.$$typeof) {
            case Ur:
                return p.key === S ? u(c, f, p, g) : null;
            case tt:
                return p.key === S ? s(c, f, p, g) : null;
            case pn:
                return S = p._init,
                v(c, f, S(p._payload), g)
            }
            if (Qt(p) || Dt(p))
                return S !== null ? null : d(c, f, p, g, null);
            Jr(c, p)
        }
        return null
    }
    function h(c, f, p, g, S) {
        if (typeof g == "string" && g !== "" || typeof g == "number")
            return c = c.get(p) || null,
            l(f, c, "" + g, S);
        if (typeof g == "object" && g !== null) {
            switch (g.$$typeof) {
            case Ur:
                return c = c.get(g.key === null ? p : g.key) || null,
                u(f, c, g, S);
            case tt:
                return c = c.get(g.key === null ? p : g.key) || null,
                s(f, c, g, S);
            case pn:
                var C = g._init;
                return h(c, f, p, C(g._payload), S)
            }
            if (Qt(g) || Dt(g))
                return c = c.get(p) || null,
                d(f, c, g, S, null);
            Jr(f, g)
        }
        return null
    }
    function y(c, f, p, g) {
        for (var S = null, C = null, _ = f, O = f = 0, F = null; _ !== null && O < p.length; O++) {
            _.index > O ? (F = _,
            _ = null) : F = _.sibling;
            var I = v(c, _, p[O], g);
            if (I === null) {
                _ === null && (_ = F);
                break
            }
            e && _ && I.alternate === null && n(c, _),
            f = a(I, f, O),
            C === null ? S = I : C.sibling = I,
            C = I,
            _ = F
        }
        if (O === p.length)
            return t(c, _),
            V && Fn(c, O),
            S;
        if (_ === null) {
            for (; O < p.length; O++)
                _ = m(c, p[O], g),
                _ !== null && (f = a(_, f, O),
                C === null ? S = _ : C.sibling = _,
                C = _);
            return V && Fn(c, O),
            S
        }
        for (_ = r(c, _); O < p.length; O++)
            F = h(_, c, O, p[O], g),
            F !== null && (e && F.alternate !== null && _.delete(F.key === null ? O : F.key),
            f = a(F, f, O),
            C === null ? S = F : C.sibling = F,
            C = F);
        return e && _.forEach(function(Re) {
            return n(c, Re)
        }),
        V && Fn(c, O),
        S
    }
    function k(c, f, p, g) {
        var S = Dt(p);
        if (typeof S != "function")
            throw Error(w(150));
        if (p = S.call(p),
        p == null)
            throw Error(w(151));
        for (var C = S = null, _ = f, O = f = 0, F = null, I = p.next(); _ !== null && !I.done; O++,
        I = p.next()) {
            _.index > O ? (F = _,
            _ = null) : F = _.sibling;
            var Re = v(c, _, I.value, g);
            if (Re === null) {
                _ === null && (_ = F);
                break
            }
            e && _ && Re.alternate === null && n(c, _),
            f = a(Re, f, O),
            C === null ? S = Re : C.sibling = Re,
            C = Re,
            _ = F
        }
        if (I.done)
            return t(c, _),
            V && Fn(c, O),
            S;
        if (_ === null) {
            for (; !I.done; O++,
            I = p.next())
                I = m(c, I.value, g),
                I !== null && (f = a(I, f, O),
                C === null ? S = I : C.sibling = I,
                C = I);
            return V && Fn(c, O),
            S
        }
        for (_ = r(c, _); !I.done; O++,
        I = p.next())
            I = h(_, c, O, I.value, g),
            I !== null && (e && I.alternate !== null && _.delete(I.key === null ? O : I.key),
            f = a(I, f, O),
            C === null ? S = I : C.sibling = I,
            C = I);
        return e && _.forEach(function(jt) {
            return n(c, jt)
        }),
        V && Fn(c, O),
        S
    }
    function T(c, f, p, g) {
        if (typeof p == "object" && p !== null && p.type === rt && p.key === null && (p = p.props.children),
        typeof p == "object" && p !== null) {
            switch (p.$$typeof) {
            case Ur:
                e: {
                    for (var S = p.key, C = f; C !== null; ) {
                        if (C.key === S) {
                            if (S = p.type,
                            S === rt) {
                                if (C.tag === 7) {
                                    t(c, C.sibling),
                                    f = i(C, p.props.children),
                                    f.return = c,
                                    c = f;
                                    break e
                                }
                            } else if (C.elementType === S || typeof S == "object" && S !== null && S.$$typeof === pn && ts(S) === C.type) {
                                t(c, C.sibling),
                                f = i(C, p.props),
                                f.ref = Ht(c, C, p),
                                f.return = c,
                                c = f;
                                break e
                            }
                            t(c, C);
                            break
                        } else
                            n(c, C);
                        C = C.sibling
                    }
                    p.type === rt ? (f = Bn(p.props.children, c.mode, g, p.key),
                    f.return = c,
                    c = f) : (g = Ei(p.type, p.key, p.props, null, c.mode, g),
                    g.ref = Ht(c, f, p),
                    g.return = c,
                    c = g)
                }
                return o(c);
            case tt:
                e: {
                    for (C = p.key; f !== null; ) {
                        if (f.key === C)
                            if (f.tag === 4 && f.stateNode.containerInfo === p.containerInfo && f.stateNode.implementation === p.implementation) {
                                t(c, f.sibling),
                                f = i(f, p.children || []),
                                f.return = c,
                                c = f;
                                break e
                            } else {
                                t(c, f);
                                break
                            }
                        else
                            n(c, f);
                        f = f.sibling
                    }
                    f = Ga(p, c.mode, g),
                    f.return = c,
                    c = f
                }
                return o(c);
            case pn:
                return C = p._init,
                T(c, f, C(p._payload), g)
            }
            if (Qt(p))
                return y(c, f, p, g);
            if (Dt(p))
                return k(c, f, p, g);
            Jr(c, p)
        }
        return typeof p == "string" && p !== "" || typeof p == "number" ? (p = "" + p,
        f !== null && f.tag === 6 ? (t(c, f.sibling),
        f = i(f, p),
        f.return = c,
        c = f) : (t(c, f),
        f = Ka(p, c.mode, g),
        f.return = c,
        c = f),
        o(c)) : t(c, f)
    }
    return T
}
var Nt = hc(!0)
  , gc = hc(!1)
  , bi = In(null)
  , $i = null
  , ct = null
  , Rl = null;
function Ml() {
    Rl = ct = $i = null
}
function jl(e) {
    var n = bi.current;
    W(bi),
    e._currentValue = n
}
function Io(e, n, t) {
    for (; e !== null; ) {
        var r = e.alternate;
        if ((e.childLanes & n) !== n ? (e.childLanes |= n,
        r !== null && (r.childLanes |= n)) : r !== null && (r.childLanes & n) !== n && (r.childLanes |= n),
        e === t)
            break;
        e = e.return
    }
}
function St(e, n) {
    $i = e,
    Rl = ct = null,
    e = e.dependencies,
    e !== null && e.firstContext !== null && (e.lanes & n && (ge = !0),
    e.firstContext = null)
}
function Le(e) {
    var n = e._currentValue;
    if (Rl !== e)
        if (e = {
            context: e,
            memoizedValue: n,
            next: null
        },
        ct === null) {
            if ($i === null)
                throw Error(w(308));
            ct = e,
            $i.dependencies = {
                lanes: 0,
                firstContext: e
            }
        } else
            ct = ct.next = e;
    return n
}
var $n = null;
function Fl(e) {
    $n === null ? $n = [e] : $n.push(e)
}
function yc(e, n, t, r) {
    var i = n.interleaved;
    return i === null ? (t.next = t,
    Fl(n)) : (t.next = i.next,
    i.next = t),
    n.interleaved = t,
    rn(e, r)
}
function rn(e, n) {
    e.lanes |= n;
    var t = e.alternate;
    for (t !== null && (t.lanes |= n),
    t = e,
    e = e.return; e !== null; )
        e.childLanes |= n,
        t = e.alternate,
        t !== null && (t.childLanes |= n),
        t = e,
        e = e.return;
    return t.tag === 3 ? t.stateNode : null
}
var mn = !1;
function Dl(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}
function wc(e, n) {
    e = e.updateQueue,
    n.updateQueue === e && (n.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
    })
}
function en(e, n) {
    return {
        eventTime: e,
        lane: n,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}
function En(e, n, t) {
    var r = e.updateQueue;
    if (r === null)
        return null;
    if (r = r.shared,
    j & 2) {
        var i = r.pending;
        return i === null ? n.next = n : (n.next = i.next,
        i.next = n),
        r.pending = n,
        rn(e, t)
    }
    return i = r.interleaved,
    i === null ? (n.next = n,
    Fl(r)) : (n.next = i.next,
    i.next = n),
    r.interleaved = n,
    rn(e, t)
}
function gi(e, n, t) {
    if (n = n.updateQueue,
    n !== null && (n = n.shared,
    (t & 4194240) !== 0)) {
        var r = n.lanes;
        r &= e.pendingLanes,
        t |= r,
        n.lanes = t,
        El(e, t)
    }
}
function rs(e, n) {
    var t = e.updateQueue
      , r = e.alternate;
    if (r !== null && (r = r.updateQueue,
    t === r)) {
        var i = null
          , a = null;
        if (t = t.firstBaseUpdate,
        t !== null) {
            do {
                var o = {
                    eventTime: t.eventTime,
                    lane: t.lane,
                    tag: t.tag,
                    payload: t.payload,
                    callback: t.callback,
                    next: null
                };
                a === null ? i = a = o : a = a.next = o,
                t = t.next
            } while (t !== null);
            a === null ? i = a = n : a = a.next = n
        } else
            i = a = n;
        t = {
            baseState: r.baseState,
            firstBaseUpdate: i,
            lastBaseUpdate: a,
            shared: r.shared,
            effects: r.effects
        },
        e.updateQueue = t;
        return
    }
    e = t.lastBaseUpdate,
    e === null ? t.firstBaseUpdate = n : e.next = n,
    t.lastBaseUpdate = n
}
function Ui(e, n, t, r) {
    var i = e.updateQueue;
    mn = !1;
    var a = i.firstBaseUpdate
      , o = i.lastBaseUpdate
      , l = i.shared.pending;
    if (l !== null) {
        i.shared.pending = null;
        var u = l
          , s = u.next;
        u.next = null,
        o === null ? a = s : o.next = s,
        o = u;
        var d = e.alternate;
        d !== null && (d = d.updateQueue,
        l = d.lastBaseUpdate,
        l !== o && (l === null ? d.firstBaseUpdate = s : l.next = s,
        d.lastBaseUpdate = u))
    }
    if (a !== null) {
        var m = i.baseState;
        o = 0,
        d = s = u = null,
        l = a;
        do {
            var v = l.lane
              , h = l.eventTime;
            if ((r & v) === v) {
                d !== null && (d = d.next = {
                    eventTime: h,
                    lane: 0,
                    tag: l.tag,
                    payload: l.payload,
                    callback: l.callback,
                    next: null
                });
                e: {
                    var y = e
                      , k = l;
                    switch (v = n,
                    h = t,
                    k.tag) {
                    case 1:
                        if (y = k.payload,
                        typeof y == "function") {
                            m = y.call(h, m, v);
                            break e
                        }
                        m = y;
                        break e;
                    case 3:
                        y.flags = y.flags & -65537 | 128;
                    case 0:
                        if (y = k.payload,
                        v = typeof y == "function" ? y.call(h, m, v) : y,
                        v == null)
                            break e;
                        m = Q({}, m, v);
                        break e;
                    case 2:
                        mn = !0
                    }
                }
                l.callback !== null && l.lane !== 0 && (e.flags |= 64,
                v = i.effects,
                v === null ? i.effects = [l] : v.push(l))
            } else
                h = {
                    eventTime: h,
                    lane: v,
                    tag: l.tag,
                    payload: l.payload,
                    callback: l.callback,
                    next: null
                },
                d === null ? (s = d = h,
                u = m) : d = d.next = h,
                o |= v;
            if (l = l.next,
            l === null) {
                if (l = i.shared.pending,
                l === null)
                    break;
                v = l,
                l = v.next,
                v.next = null,
                i.lastBaseUpdate = v,
                i.shared.pending = null
            }
        } while (!0);
        if (d === null && (u = m),
        i.baseState = u,
        i.firstBaseUpdate = s,
        i.lastBaseUpdate = d,
        n = i.shared.interleaved,
        n !== null) {
            i = n;
            do
                o |= i.lane,
                i = i.next;
            while (i !== n)
        } else
            a === null && (i.shared.lanes = 0);
        Kn |= o,
        e.lanes = o,
        e.memoizedState = m
    }
}
function is(e, n, t) {
    if (e = n.effects,
    n.effects = null,
    e !== null)
        for (n = 0; n < e.length; n++) {
            var r = e[n]
              , i = r.callback;
            if (i !== null) {
                if (r.callback = null,
                r = t,
                typeof i != "function")
                    throw Error(w(191, i));
                i.call(r)
            }
        }
}
var Rr = {}
  , Ke = In(Rr)
  , wr = In(Rr)
  , kr = In(Rr);
function Un(e) {
    if (e === Rr)
        throw Error(w(174));
    return e
}
function bl(e, n) {
    switch (b(kr, n),
    b(wr, e),
    b(Ke, Rr),
    e = n.nodeType,
    e) {
    case 9:
    case 11:
        n = (n = n.documentElement) ? n.namespaceURI : po(null, "");
        break;
    default:
        e = e === 8 ? n.parentNode : n,
        n = e.namespaceURI || null,
        e = e.tagName,
        n = po(n, e)
    }
    W(Ke),
    b(Ke, n)
}
function Ot() {
    W(Ke),
    W(wr),
    W(kr)
}
function kc(e) {
    Un(kr.current);
    var n = Un(Ke.current)
      , t = po(n, e.type);
    n !== t && (b(wr, e),
    b(Ke, t))
}
function $l(e) {
    wr.current === e && (W(Ke),
    W(wr))
}
var B = In(0);
function Wi(e) {
    for (var n = e; n !== null; ) {
        if (n.tag === 13) {
            var t = n.memoizedState;
            if (t !== null && (t = t.dehydrated,
            t === null || t.data === "$?" || t.data === "$!"))
                return n
        } else if (n.tag === 19 && n.memoizedProps.revealOrder !== void 0) {
            if (n.flags & 128)
                return n
        } else if (n.child !== null) {
            n.child.return = n,
            n = n.child;
            continue
        }
        if (n === e)
            break;
        for (; n.sibling === null; ) {
            if (n.return === null || n.return === e)
                return null;
            n = n.return
        }
        n.sibling.return = n.return,
        n = n.sibling
    }
    return null
}
var Ha = [];
function Ul() {
    for (var e = 0; e < Ha.length; e++)
        Ha[e]._workInProgressVersionPrimary = null;
    Ha.length = 0
}
var yi = sn.ReactCurrentDispatcher
  , Va = sn.ReactCurrentBatchConfig
  , Xn = 0
  , Y = null
  , q = null
  , re = null
  , Hi = !1
  , tr = !1
  , Sr = 0
  , Wm = 0;
function ue() {
    throw Error(w(321))
}
function Wl(e, n) {
    if (n === null)
        return !1;
    for (var t = 0; t < n.length && t < e.length; t++)
        if (!We(e[t], n[t]))
            return !1;
    return !0
}
function Hl(e, n, t, r, i, a) {
    if (Xn = a,
    Y = n,
    n.memoizedState = null,
    n.updateQueue = null,
    n.lanes = 0,
    yi.current = e === null || e.memoizedState === null ? Ym : Qm,
    e = t(r, i),
    tr) {
        a = 0;
        do {
            if (tr = !1,
            Sr = 0,
            25 <= a)
                throw Error(w(301));
            a += 1,
            re = q = null,
            n.updateQueue = null,
            yi.current = Xm,
            e = t(r, i)
        } while (tr)
    }
    if (yi.current = Vi,
    n = q !== null && q.next !== null,
    Xn = 0,
    re = q = Y = null,
    Hi = !1,
    n)
        throw Error(w(300));
    return e
}
function Vl() {
    var e = Sr !== 0;
    return Sr = 0,
    e
}
function Ve() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return re === null ? Y.memoizedState = re = e : re = re.next = e,
    re
}
function Ie() {
    if (q === null) {
        var e = Y.alternate;
        e = e !== null ? e.memoizedState : null
    } else
        e = q.next;
    var n = re === null ? Y.memoizedState : re.next;
    if (n !== null)
        re = n,
        q = e;
    else {
        if (e === null)
            throw Error(w(310));
        q = e,
        e = {
            memoizedState: q.memoizedState,
            baseState: q.baseState,
            baseQueue: q.baseQueue,
            queue: q.queue,
            next: null
        },
        re === null ? Y.memoizedState = re = e : re = re.next = e
    }
    return re
}
function xr(e, n) {
    return typeof n == "function" ? n(e) : n
}
function Ba(e) {
    var n = Ie()
      , t = n.queue;
    if (t === null)
        throw Error(w(311));
    t.lastRenderedReducer = e;
    var r = q
      , i = r.baseQueue
      , a = t.pending;
    if (a !== null) {
        if (i !== null) {
            var o = i.next;
            i.next = a.next,
            a.next = o
        }
        r.baseQueue = i = a,
        t.pending = null
    }
    if (i !== null) {
        a = i.next,
        r = r.baseState;
        var l = o = null
          , u = null
          , s = a;
        do {
            var d = s.lane;
            if ((Xn & d) === d)
                u !== null && (u = u.next = {
                    lane: 0,
                    action: s.action,
                    hasEagerState: s.hasEagerState,
                    eagerState: s.eagerState,
                    next: null
                }),
                r = s.hasEagerState ? s.eagerState : e(r, s.action);
            else {
                var m = {
                    lane: d,
                    action: s.action,
                    hasEagerState: s.hasEagerState,
                    eagerState: s.eagerState,
                    next: null
                };
                u === null ? (l = u = m,
                o = r) : u = u.next = m,
                Y.lanes |= d,
                Kn |= d
            }
            s = s.next
        } while (s !== null && s !== a);
        u === null ? o = r : u.next = l,
        We(r, n.memoizedState) || (ge = !0),
        n.memoizedState = r,
        n.baseState = o,
        n.baseQueue = u,
        t.lastRenderedState = r
    }
    if (e = t.interleaved,
    e !== null) {
        i = e;
        do
            a = i.lane,
            Y.lanes |= a,
            Kn |= a,
            i = i.next;
        while (i !== e)
    } else
        i === null && (t.lanes = 0);
    return [n.memoizedState, t.dispatch]
}
function Ya(e) {
    var n = Ie()
      , t = n.queue;
    if (t === null)
        throw Error(w(311));
    t.lastRenderedReducer = e;
    var r = t.dispatch
      , i = t.pending
      , a = n.memoizedState;
    if (i !== null) {
        t.pending = null;
        var o = i = i.next;
        do
            a = e(a, o.action),
            o = o.next;
        while (o !== i);
        We(a, n.memoizedState) || (ge = !0),
        n.memoizedState = a,
        n.baseQueue === null && (n.baseState = a),
        t.lastRenderedState = a
    }
    return [a, r]
}
function Sc() {}
function xc(e, n) {
    var t = Y
      , r = Ie()
      , i = n()
      , a = !We(r.memoizedState, i);
    if (a && (r.memoizedState = i,
    ge = !0),
    r = r.queue,
    Bl(_c.bind(null, t, r, e), [e]),
    r.getSnapshot !== n || a || re !== null && re.memoizedState.tag & 1) {
        if (t.flags |= 2048,
        Er(9, Cc.bind(null, t, r, i, n), void 0, null),
        ie === null)
            throw Error(w(349));
        Xn & 30 || Ec(t, n, i)
    }
    return i
}
function Ec(e, n, t) {
    e.flags |= 16384,
    e = {
        getSnapshot: n,
        value: t
    },
    n = Y.updateQueue,
    n === null ? (n = {
        lastEffect: null,
        stores: null
    },
    Y.updateQueue = n,
    n.stores = [e]) : (t = n.stores,
    t === null ? n.stores = [e] : t.push(e))
}
function Cc(e, n, t, r) {
    n.value = t,
    n.getSnapshot = r,
    Pc(n) && Nc(e)
}
function _c(e, n, t) {
    return t(function() {
        Pc(n) && Nc(e)
    })
}
function Pc(e) {
    var n = e.getSnapshot;
    e = e.value;
    try {
        var t = n();
        return !We(e, t)
    } catch {
        return !0
    }
}
function Nc(e) {
    var n = rn(e, 1);
    n !== null && Ue(n, e, 1, -1)
}
function as(e) {
    var n = Ve();
    return typeof e == "function" && (e = e()),
    n.memoizedState = n.baseState = e,
    e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: xr,
        lastRenderedState: e
    },
    n.queue = e,
    e = e.dispatch = Bm.bind(null, Y, e),
    [n.memoizedState, e]
}
function Er(e, n, t, r) {
    return e = {
        tag: e,
        create: n,
        destroy: t,
        deps: r,
        next: null
    },
    n = Y.updateQueue,
    n === null ? (n = {
        lastEffect: null,
        stores: null
    },
    Y.updateQueue = n,
    n.lastEffect = e.next = e) : (t = n.lastEffect,
    t === null ? n.lastEffect = e.next = e : (r = t.next,
    t.next = e,
    e.next = r,
    n.lastEffect = e)),
    e
}
function Oc() {
    return Ie().memoizedState
}
function wi(e, n, t, r) {
    var i = Ve();
    Y.flags |= e,
    i.memoizedState = Er(1 | n, t, void 0, r === void 0 ? null : r)
}
function sa(e, n, t, r) {
    var i = Ie();
    r = r === void 0 ? null : r;
    var a = void 0;
    if (q !== null) {
        var o = q.memoizedState;
        if (a = o.destroy,
        r !== null && Wl(r, o.deps)) {
            i.memoizedState = Er(n, t, a, r);
            return
        }
    }
    Y.flags |= e,
    i.memoizedState = Er(1 | n, t, a, r)
}
function os(e, n) {
    return wi(8390656, 8, e, n)
}
function Bl(e, n) {
    return sa(2048, 8, e, n)
}
function Tc(e, n) {
    return sa(4, 2, e, n)
}
function Ac(e, n) {
    return sa(4, 4, e, n)
}
function zc(e, n) {
    if (typeof n == "function")
        return e = e(),
        n(e),
        function() {
            n(null)
        }
        ;
    if (n != null)
        return e = e(),
        n.current = e,
        function() {
            n.current = null
        }
}
function Lc(e, n, t) {
    return t = t != null ? t.concat([e]) : null,
    sa(4, 4, zc.bind(null, n, e), t)
}
function Yl() {}
function Ic(e, n) {
    var t = Ie();
    n = n === void 0 ? null : n;
    var r = t.memoizedState;
    return r !== null && n !== null && Wl(n, r[1]) ? r[0] : (t.memoizedState = [e, n],
    e)
}
function Rc(e, n) {
    var t = Ie();
    n = n === void 0 ? null : n;
    var r = t.memoizedState;
    return r !== null && n !== null && Wl(n, r[1]) ? r[0] : (e = e(),
    t.memoizedState = [e, n],
    e)
}
function Mc(e, n, t) {
    return Xn & 21 ? (We(t, n) || (t = $f(),
    Y.lanes |= t,
    Kn |= t,
    e.baseState = !0),
    n) : (e.baseState && (e.baseState = !1,
    ge = !0),
    e.memoizedState = t)
}
function Hm(e, n) {
    var t = D;
    D = t !== 0 && 4 > t ? t : 4,
    e(!0);
    var r = Va.transition;
    Va.transition = {};
    try {
        e(!1),
        n()
    } finally {
        D = t,
        Va.transition = r
    }
}
function jc() {
    return Ie().memoizedState
}
function Vm(e, n, t) {
    var r = _n(e);
    if (t = {
        lane: r,
        action: t,
        hasEagerState: !1,
        eagerState: null,
        next: null
    },
    Fc(e))
        Dc(n, t);
    else if (t = yc(e, n, t, r),
    t !== null) {
        var i = pe();
        Ue(t, e, r, i),
        bc(t, n, r)
    }
}
function Bm(e, n, t) {
    var r = _n(e)
      , i = {
        lane: r,
        action: t,
        hasEagerState: !1,
        eagerState: null,
        next: null
    };
    if (Fc(e))
        Dc(n, i);
    else {
        var a = e.alternate;
        if (e.lanes === 0 && (a === null || a.lanes === 0) && (a = n.lastRenderedReducer,
        a !== null))
            try {
                var o = n.lastRenderedState
                  , l = a(o, t);
                if (i.hasEagerState = !0,
                i.eagerState = l,
                We(l, o)) {
                    var u = n.interleaved;
                    u === null ? (i.next = i,
                    Fl(n)) : (i.next = u.next,
                    u.next = i),
                    n.interleaved = i;
                    return
                }
            } catch {} finally {}
        t = yc(e, n, i, r),
        t !== null && (i = pe(),
        Ue(t, e, r, i),
        bc(t, n, r))
    }
}
function Fc(e) {
    var n = e.alternate;
    return e === Y || n !== null && n === Y
}
function Dc(e, n) {
    tr = Hi = !0;
    var t = e.pending;
    t === null ? n.next = n : (n.next = t.next,
    t.next = n),
    e.pending = n
}
function bc(e, n, t) {
    if (t & 4194240) {
        var r = n.lanes;
        r &= e.pendingLanes,
        t |= r,
        n.lanes = t,
        El(e, t)
    }
}
var Vi = {
    readContext: Le,
    useCallback: ue,
    useContext: ue,
    useEffect: ue,
    useImperativeHandle: ue,
    useInsertionEffect: ue,
    useLayoutEffect: ue,
    useMemo: ue,
    useReducer: ue,
    useRef: ue,
    useState: ue,
    useDebugValue: ue,
    useDeferredValue: ue,
    useTransition: ue,
    useMutableSource: ue,
    useSyncExternalStore: ue,
    useId: ue,
    unstable_isNewReconciler: !1
}
  , Ym = {
    readContext: Le,
    useCallback: function(e, n) {
        return Ve().memoizedState = [e, n === void 0 ? null : n],
        e
    },
    useContext: Le,
    useEffect: os,
    useImperativeHandle: function(e, n, t) {
        return t = t != null ? t.concat([e]) : null,
        wi(4194308, 4, zc.bind(null, n, e), t)
    },
    useLayoutEffect: function(e, n) {
        return wi(4194308, 4, e, n)
    },
    useInsertionEffect: function(e, n) {
        return wi(4, 2, e, n)
    },
    useMemo: function(e, n) {
        var t = Ve();
        return n = n === void 0 ? null : n,
        e = e(),
        t.memoizedState = [e, n],
        e
    },
    useReducer: function(e, n, t) {
        var r = Ve();
        return n = t !== void 0 ? t(n) : n,
        r.memoizedState = r.baseState = n,
        e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: n
        },
        r.queue = e,
        e = e.dispatch = Vm.bind(null, Y, e),
        [r.memoizedState, e]
    },
    useRef: function(e) {
        var n = Ve();
        return e = {
            current: e
        },
        n.memoizedState = e
    },
    useState: as,
    useDebugValue: Yl,
    useDeferredValue: function(e) {
        return Ve().memoizedState = e
    },
    useTransition: function() {
        var e = as(!1)
          , n = e[0];
        return e = Hm.bind(null, e[1]),
        Ve().memoizedState = e,
        [n, e]
    },
    useMutableSource: function() {},
    useSyncExternalStore: function(e, n, t) {
        var r = Y
          , i = Ve();
        if (V) {
            if (t === void 0)
                throw Error(w(407));
            t = t()
        } else {
            if (t = n(),
            ie === null)
                throw Error(w(349));
            Xn & 30 || Ec(r, n, t)
        }
        i.memoizedState = t;
        var a = {
            value: t,
            getSnapshot: n
        };
        return i.queue = a,
        os(_c.bind(null, r, a, e), [e]),
        r.flags |= 2048,
        Er(9, Cc.bind(null, r, a, t, n), void 0, null),
        t
    },
    useId: function() {
        var e = Ve()
          , n = ie.identifierPrefix;
        if (V) {
            var t = qe
              , r = Je;
            t = (r & ~(1 << 32 - $e(r) - 1)).toString(32) + t,
            n = ":" + n + "R" + t,
            t = Sr++,
            0 < t && (n += "H" + t.toString(32)),
            n += ":"
        } else
            t = Wm++,
            n = ":" + n + "r" + t.toString(32) + ":";
        return e.memoizedState = n
    },
    unstable_isNewReconciler: !1
}
  , Qm = {
    readContext: Le,
    useCallback: Ic,
    useContext: Le,
    useEffect: Bl,
    useImperativeHandle: Lc,
    useInsertionEffect: Tc,
    useLayoutEffect: Ac,
    useMemo: Rc,
    useReducer: Ba,
    useRef: Oc,
    useState: function() {
        return Ba(xr)
    },
    useDebugValue: Yl,
    useDeferredValue: function(e) {
        var n = Ie();
        return Mc(n, q.memoizedState, e)
    },
    useTransition: function() {
        var e = Ba(xr)[0]
          , n = Ie().memoizedState;
        return [e, n]
    },
    useMutableSource: Sc,
    useSyncExternalStore: xc,
    useId: jc,
    unstable_isNewReconciler: !1
}
  , Xm = {
    readContext: Le,
    useCallback: Ic,
    useContext: Le,
    useEffect: Bl,
    useImperativeHandle: Lc,
    useInsertionEffect: Tc,
    useLayoutEffect: Ac,
    useMemo: Rc,
    useReducer: Ya,
    useRef: Oc,
    useState: function() {
        return Ya(xr)
    },
    useDebugValue: Yl,
    useDeferredValue: function(e) {
        var n = Ie();
        return q === null ? n.memoizedState = e : Mc(n, q.memoizedState, e)
    },
    useTransition: function() {
        var e = Ya(xr)[0]
          , n = Ie().memoizedState;
        return [e, n]
    },
    useMutableSource: Sc,
    useSyncExternalStore: xc,
    useId: jc,
    unstable_isNewReconciler: !1
};
function je(e, n) {
    if (e && e.defaultProps) {
        n = Q({}, n),
        e = e.defaultProps;
        for (var t in e)
            n[t] === void 0 && (n[t] = e[t]);
        return n
    }
    return n
}
function Ro(e, n, t, r) {
    n = e.memoizedState,
    t = t(r, n),
    t = t == null ? n : Q({}, n, t),
    e.memoizedState = t,
    e.lanes === 0 && (e.updateQueue.baseState = t)
}
var fa = {
    isMounted: function(e) {
        return (e = e._reactInternals) ? et(e) === e : !1
    },
    enqueueSetState: function(e, n, t) {
        e = e._reactInternals;
        var r = pe()
          , i = _n(e)
          , a = en(r, i);
        a.payload = n,
        t != null && (a.callback = t),
        n = En(e, a, i),
        n !== null && (Ue(n, e, i, r),
        gi(n, e, i))
    },
    enqueueReplaceState: function(e, n, t) {
        e = e._reactInternals;
        var r = pe()
          , i = _n(e)
          , a = en(r, i);
        a.tag = 1,
        a.payload = n,
        t != null && (a.callback = t),
        n = En(e, a, i),
        n !== null && (Ue(n, e, i, r),
        gi(n, e, i))
    },
    enqueueForceUpdate: function(e, n) {
        e = e._reactInternals;
        var t = pe()
          , r = _n(e)
          , i = en(t, r);
        i.tag = 2,
        n != null && (i.callback = n),
        n = En(e, i, r),
        n !== null && (Ue(n, e, r, t),
        gi(n, e, r))
    }
};
function ls(e, n, t, r, i, a, o) {
    return e = e.stateNode,
    typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, a, o) : n.prototype && n.prototype.isPureReactComponent ? !vr(t, r) || !vr(i, a) : !0
}
function $c(e, n, t) {
    var r = !1
      , i = On
      , a = n.contextType;
    return typeof a == "object" && a !== null ? a = Le(a) : (i = we(n) ? Yn : ce.current,
    r = n.contextTypes,
    a = (r = r != null) ? _t(e, i) : On),
    n = new n(t,a),
    e.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null,
    n.updater = fa,
    e.stateNode = n,
    n._reactInternals = e,
    r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = i,
    e.__reactInternalMemoizedMaskedChildContext = a),
    n
}
function us(e, n, t, r) {
    e = n.state,
    typeof n.componentWillReceiveProps == "function" && n.componentWillReceiveProps(t, r),
    typeof n.UNSAFE_componentWillReceiveProps == "function" && n.UNSAFE_componentWillReceiveProps(t, r),
    n.state !== e && fa.enqueueReplaceState(n, n.state, null)
}
function Mo(e, n, t, r) {
    var i = e.stateNode;
    i.props = t,
    i.state = e.memoizedState,
    i.refs = {},
    Dl(e);
    var a = n.contextType;
    typeof a == "object" && a !== null ? i.context = Le(a) : (a = we(n) ? Yn : ce.current,
    i.context = _t(e, a)),
    i.state = e.memoizedState,
    a = n.getDerivedStateFromProps,
    typeof a == "function" && (Ro(e, n, a, t),
    i.state = e.memoizedState),
    typeof n.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (n = i.state,
    typeof i.componentWillMount == "function" && i.componentWillMount(),
    typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(),
    n !== i.state && fa.enqueueReplaceState(i, i.state, null),
    Ui(e, t, i, r),
    i.state = e.memoizedState),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308)
}
function Tt(e, n) {
    try {
        var t = ""
          , r = n;
        do
            t += xp(r),
            r = r.return;
        while (r);
        var i = t
    } catch (a) {
        i = `
Error generating stack: ` + a.message + `
` + a.stack
    }
    return {
        value: e,
        source: n,
        stack: i,
        digest: null
    }
}
function Qa(e, n, t) {
    return {
        value: e,
        source: null,
        stack: t ?? null,
        digest: n ?? null
    }
}
function jo(e, n) {
    try {
        console.error(n.value)
    } catch (t) {
        setTimeout(function() {
            throw t
        })
    }
}
var Km = typeof WeakMap == "function" ? WeakMap : Map;
function Uc(e, n, t) {
    t = en(-1, t),
    t.tag = 3,
    t.payload = {
        element: null
    };
    var r = n.value;
    return t.callback = function() {
        Yi || (Yi = !0,
        Yo = r),
        jo(e, n)
    }
    ,
    t
}
function Wc(e, n, t) {
    t = en(-1, t),
    t.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var i = n.value;
        t.payload = function() {
            return r(i)
        }
        ,
        t.callback = function() {
            jo(e, n)
        }
    }
    var a = e.stateNode;
    return a !== null && typeof a.componentDidCatch == "function" && (t.callback = function() {
        jo(e, n),
        typeof r != "function" && (Cn === null ? Cn = new Set([this]) : Cn.add(this));
        var o = n.stack;
        this.componentDidCatch(n.value, {
            componentStack: o !== null ? o : ""
        })
    }
    ),
    t
}
function ss(e, n, t) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new Km;
        var i = new Set;
        r.set(n, i)
    } else
        i = r.get(n),
        i === void 0 && (i = new Set,
        r.set(n, i));
    i.has(t) || (i.add(t),
    e = sv.bind(null, e, n, t),
    n.then(e, e))
}
function fs(e) {
    do {
        var n;
        if ((n = e.tag === 13) && (n = e.memoizedState,
        n = n !== null ? n.dehydrated !== null : !0),
        n)
            return e;
        e = e.return
    } while (e !== null);
    return null
}
function cs(e, n, t, r, i) {
    return e.mode & 1 ? (e.flags |= 65536,
    e.lanes = i,
    e) : (e === n ? e.flags |= 65536 : (e.flags |= 128,
    t.flags |= 131072,
    t.flags &= -52805,
    t.tag === 1 && (t.alternate === null ? t.tag = 17 : (n = en(-1, 1),
    n.tag = 2,
    En(t, n, 1))),
    t.lanes |= 1),
    e)
}
var Gm = sn.ReactCurrentOwner
  , ge = !1;
function de(e, n, t, r) {
    n.child = e === null ? gc(n, null, t, r) : Nt(n, e.child, t, r)
}
function ds(e, n, t, r, i) {
    t = t.render;
    var a = n.ref;
    return St(n, i),
    r = Hl(e, n, t, r, a, i),
    t = Vl(),
    e !== null && !ge ? (n.updateQueue = e.updateQueue,
    n.flags &= -2053,
    e.lanes &= ~i,
    an(e, n, i)) : (V && t && zl(n),
    n.flags |= 1,
    de(e, n, r, i),
    n.child)
}
function ps(e, n, t, r, i) {
    if (e === null) {
        var a = t.type;
        return typeof a == "function" && !eu(a) && a.defaultProps === void 0 && t.compare === null && t.defaultProps === void 0 ? (n.tag = 15,
        n.type = a,
        Hc(e, n, a, r, i)) : (e = Ei(t.type, null, r, n, n.mode, i),
        e.ref = n.ref,
        e.return = n,
        n.child = e)
    }
    if (a = e.child,
    !(e.lanes & i)) {
        var o = a.memoizedProps;
        if (t = t.compare,
        t = t !== null ? t : vr,
        t(o, r) && e.ref === n.ref)
            return an(e, n, i)
    }
    return n.flags |= 1,
    e = Pn(a, r),
    e.ref = n.ref,
    e.return = n,
    n.child = e
}
function Hc(e, n, t, r, i) {
    if (e !== null) {
        var a = e.memoizedProps;
        if (vr(a, r) && e.ref === n.ref)
            if (ge = !1,
            n.pendingProps = r = a,
            (e.lanes & i) !== 0)
                e.flags & 131072 && (ge = !0);
            else
                return n.lanes = e.lanes,
                an(e, n, i)
    }
    return Fo(e, n, t, r, i)
}
function Vc(e, n, t) {
    var r = n.pendingProps
      , i = r.children
      , a = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(n.mode & 1))
            n.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            b(pt, Se),
            Se |= t;
        else {
            if (!(t & 1073741824))
                return e = a !== null ? a.baseLanes | t : t,
                n.lanes = n.childLanes = 1073741824,
                n.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null
                },
                n.updateQueue = null,
                b(pt, Se),
                Se |= e,
                null;
            n.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            r = a !== null ? a.baseLanes : t,
            b(pt, Se),
            Se |= r
        }
    else
        a !== null ? (r = a.baseLanes | t,
        n.memoizedState = null) : r = t,
        b(pt, Se),
        Se |= r;
    return de(e, n, i, t),
    n.child
}
function Bc(e, n) {
    var t = n.ref;
    (e === null && t !== null || e !== null && e.ref !== t) && (n.flags |= 512,
    n.flags |= 2097152)
}
function Fo(e, n, t, r, i) {
    var a = we(t) ? Yn : ce.current;
    return a = _t(n, a),
    St(n, i),
    t = Hl(e, n, t, r, a, i),
    r = Vl(),
    e !== null && !ge ? (n.updateQueue = e.updateQueue,
    n.flags &= -2053,
    e.lanes &= ~i,
    an(e, n, i)) : (V && r && zl(n),
    n.flags |= 1,
    de(e, n, t, i),
    n.child)
}
function ms(e, n, t, r, i) {
    if (we(t)) {
        var a = !0;
        ji(n)
    } else
        a = !1;
    if (St(n, i),
    n.stateNode === null)
        ki(e, n),
        $c(n, t, r),
        Mo(n, t, r, i),
        r = !0;
    else if (e === null) {
        var o = n.stateNode
          , l = n.memoizedProps;
        o.props = l;
        var u = o.context
          , s = t.contextType;
        typeof s == "object" && s !== null ? s = Le(s) : (s = we(t) ? Yn : ce.current,
        s = _t(n, s));
        var d = t.getDerivedStateFromProps
          , m = typeof d == "function" || typeof o.getSnapshotBeforeUpdate == "function";
        m || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (l !== r || u !== s) && us(n, o, r, s),
        mn = !1;
        var v = n.memoizedState;
        o.state = v,
        Ui(n, r, o, i),
        u = n.memoizedState,
        l !== r || v !== u || ye.current || mn ? (typeof d == "function" && (Ro(n, t, d, r),
        u = n.memoizedState),
        (l = mn || ls(n, t, l, r, v, u, s)) ? (m || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(),
        typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()),
        typeof o.componentDidMount == "function" && (n.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (n.flags |= 4194308),
        n.memoizedProps = r,
        n.memoizedState = u),
        o.props = r,
        o.state = u,
        o.context = s,
        r = l) : (typeof o.componentDidMount == "function" && (n.flags |= 4194308),
        r = !1)
    } else {
        o = n.stateNode,
        wc(e, n),
        l = n.memoizedProps,
        s = n.type === n.elementType ? l : je(n.type, l),
        o.props = s,
        m = n.pendingProps,
        v = o.context,
        u = t.contextType,
        typeof u == "object" && u !== null ? u = Le(u) : (u = we(t) ? Yn : ce.current,
        u = _t(n, u));
        var h = t.getDerivedStateFromProps;
        (d = typeof h == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (l !== m || v !== u) && us(n, o, r, u),
        mn = !1,
        v = n.memoizedState,
        o.state = v,
        Ui(n, r, o, i);
        var y = n.memoizedState;
        l !== m || v !== y || ye.current || mn ? (typeof h == "function" && (Ro(n, t, h, r),
        y = n.memoizedState),
        (s = mn || ls(n, t, s, r, v, y, u) || !1) ? (d || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, y, u),
        typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(r, y, u)),
        typeof o.componentDidUpdate == "function" && (n.flags |= 4),
        typeof o.getSnapshotBeforeUpdate == "function" && (n.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || l === e.memoizedProps && v === e.memoizedState || (n.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && v === e.memoizedState || (n.flags |= 1024),
        n.memoizedProps = r,
        n.memoizedState = y),
        o.props = r,
        o.state = y,
        o.context = u,
        r = s) : (typeof o.componentDidUpdate != "function" || l === e.memoizedProps && v === e.memoizedState || (n.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && v === e.memoizedState || (n.flags |= 1024),
        r = !1)
    }
    return Do(e, n, t, r, a, i)
}
function Do(e, n, t, r, i, a) {
    Bc(e, n);
    var o = (n.flags & 128) !== 0;
    if (!r && !o)
        return i && qu(n, t, !1),
        an(e, n, a);
    r = n.stateNode,
    Gm.current = n;
    var l = o && typeof t.getDerivedStateFromError != "function" ? null : r.render();
    return n.flags |= 1,
    e !== null && o ? (n.child = Nt(n, e.child, null, a),
    n.child = Nt(n, null, l, a)) : de(e, n, l, a),
    n.memoizedState = r.state,
    i && qu(n, t, !0),
    n.child
}
function Yc(e) {
    var n = e.stateNode;
    n.pendingContext ? Ju(e, n.pendingContext, n.pendingContext !== n.context) : n.context && Ju(e, n.context, !1),
    bl(e, n.containerInfo)
}
function vs(e, n, t, r, i) {
    return Pt(),
    Il(i),
    n.flags |= 256,
    de(e, n, t, r),
    n.child
}
var bo = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};
function $o(e) {
    return {
        baseLanes: e,
        cachePool: null,
        transitions: null
    }
}
function Qc(e, n, t) {
    var r = n.pendingProps, i = B.current, a = !1, o = (n.flags & 128) !== 0, l;
    if ((l = o) || (l = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    l ? (a = !0,
    n.flags &= -129) : (e === null || e.memoizedState !== null) && (i |= 1),
    b(B, i & 1),
    e === null)
        return Lo(n),
        e = n.memoizedState,
        e !== null && (e = e.dehydrated,
        e !== null) ? (n.mode & 1 ? e.data === "$!" ? n.lanes = 8 : n.lanes = 1073741824 : n.lanes = 1,
        null) : (o = r.children,
        e = r.fallback,
        a ? (r = n.mode,
        a = n.child,
        o = {
            mode: "hidden",
            children: o
        },
        !(r & 1) && a !== null ? (a.childLanes = 0,
        a.pendingProps = o) : a = pa(o, r, 0, null),
        e = Bn(e, r, t, null),
        a.return = n,
        e.return = n,
        a.sibling = e,
        n.child = a,
        n.child.memoizedState = $o(t),
        n.memoizedState = bo,
        e) : Ql(n, o));
    if (i = e.memoizedState,
    i !== null && (l = i.dehydrated,
    l !== null))
        return Zm(e, n, o, r, l, i, t);
    if (a) {
        a = r.fallback,
        o = n.mode,
        i = e.child,
        l = i.sibling;
        var u = {
            mode: "hidden",
            children: r.children
        };
        return !(o & 1) && n.child !== i ? (r = n.child,
        r.childLanes = 0,
        r.pendingProps = u,
        n.deletions = null) : (r = Pn(i, u),
        r.subtreeFlags = i.subtreeFlags & 14680064),
        l !== null ? a = Pn(l, a) : (a = Bn(a, o, t, null),
        a.flags |= 2),
        a.return = n,
        r.return = n,
        r.sibling = a,
        n.child = r,
        r = a,
        a = n.child,
        o = e.child.memoizedState,
        o = o === null ? $o(t) : {
            baseLanes: o.baseLanes | t,
            cachePool: null,
            transitions: o.transitions
        },
        a.memoizedState = o,
        a.childLanes = e.childLanes & ~t,
        n.memoizedState = bo,
        r
    }
    return a = e.child,
    e = a.sibling,
    r = Pn(a, {
        mode: "visible",
        children: r.children
    }),
    !(n.mode & 1) && (r.lanes = t),
    r.return = n,
    r.sibling = null,
    e !== null && (t = n.deletions,
    t === null ? (n.deletions = [e],
    n.flags |= 16) : t.push(e)),
    n.child = r,
    n.memoizedState = null,
    r
}
function Ql(e, n) {
    return n = pa({
        mode: "visible",
        children: n
    }, e.mode, 0, null),
    n.return = e,
    e.child = n
}
function qr(e, n, t, r) {
    return r !== null && Il(r),
    Nt(n, e.child, null, t),
    e = Ql(n, n.pendingProps.children),
    e.flags |= 2,
    n.memoizedState = null,
    e
}
function Zm(e, n, t, r, i, a, o) {
    if (t)
        return n.flags & 256 ? (n.flags &= -257,
        r = Qa(Error(w(422))),
        qr(e, n, o, r)) : n.memoizedState !== null ? (n.child = e.child,
        n.flags |= 128,
        null) : (a = r.fallback,
        i = n.mode,
        r = pa({
            mode: "visible",
            children: r.children
        }, i, 0, null),
        a = Bn(a, i, o, null),
        a.flags |= 2,
        r.return = n,
        a.return = n,
        r.sibling = a,
        n.child = r,
        n.mode & 1 && Nt(n, e.child, null, o),
        n.child.memoizedState = $o(o),
        n.memoizedState = bo,
        a);
    if (!(n.mode & 1))
        return qr(e, n, o, null);
    if (i.data === "$!") {
        if (r = i.nextSibling && i.nextSibling.dataset,
        r)
            var l = r.dgst;
        return r = l,
        a = Error(w(419)),
        r = Qa(a, r, void 0),
        qr(e, n, o, r)
    }
    if (l = (o & e.childLanes) !== 0,
    ge || l) {
        if (r = ie,
        r !== null) {
            switch (o & -o) {
            case 4:
                i = 2;
                break;
            case 16:
                i = 8;
                break;
            case 64:
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
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
                i = 32;
                break;
            case 536870912:
                i = 268435456;
                break;
            default:
                i = 0
            }
            i = i & (r.suspendedLanes | o) ? 0 : i,
            i !== 0 && i !== a.retryLane && (a.retryLane = i,
            rn(e, i),
            Ue(r, e, i, -1))
        }
        return ql(),
        r = Qa(Error(w(421))),
        qr(e, n, o, r)
    }
    return i.data === "$?" ? (n.flags |= 128,
    n.child = e.child,
    n = fv.bind(null, e),
    i._reactRetry = n,
    null) : (e = a.treeContext,
    xe = xn(i.nextSibling),
    Ee = n,
    V = !0,
    De = null,
    e !== null && (Oe[Te++] = Je,
    Oe[Te++] = qe,
    Oe[Te++] = Qn,
    Je = e.id,
    qe = e.overflow,
    Qn = n),
    n = Ql(n, r.children),
    n.flags |= 4096,
    n)
}
function hs(e, n, t) {
    e.lanes |= n;
    var r = e.alternate;
    r !== null && (r.lanes |= n),
    Io(e.return, n, t)
}
function Xa(e, n, t, r, i) {
    var a = e.memoizedState;
    a === null ? e.memoizedState = {
        isBackwards: n,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: t,
        tailMode: i
    } : (a.isBackwards = n,
    a.rendering = null,
    a.renderingStartTime = 0,
    a.last = r,
    a.tail = t,
    a.tailMode = i)
}
function Xc(e, n, t) {
    var r = n.pendingProps
      , i = r.revealOrder
      , a = r.tail;
    if (de(e, n, r.children, t),
    r = B.current,
    r & 2)
        r = r & 1 | 2,
        n.flags |= 128;
    else {
        if (e !== null && e.flags & 128)
            e: for (e = n.child; e !== null; ) {
                if (e.tag === 13)
                    e.memoizedState !== null && hs(e, t, n);
                else if (e.tag === 19)
                    hs(e, t, n);
                else if (e.child !== null) {
                    e.child.return = e,
                    e = e.child;
                    continue
                }
                if (e === n)
                    break e;
                for (; e.sibling === null; ) {
                    if (e.return === null || e.return === n)
                        break e;
                    e = e.return
                }
                e.sibling.return = e.return,
                e = e.sibling
            }
        r &= 1
    }
    if (b(B, r),
    !(n.mode & 1))
        n.memoizedState = null;
    else
        switch (i) {
        case "forwards":
            for (t = n.child,
            i = null; t !== null; )
                e = t.alternate,
                e !== null && Wi(e) === null && (i = t),
                t = t.sibling;
            t = i,
            t === null ? (i = n.child,
            n.child = null) : (i = t.sibling,
            t.sibling = null),
            Xa(n, !1, i, t, a);
            break;
        case "backwards":
            for (t = null,
            i = n.child,
            n.child = null; i !== null; ) {
                if (e = i.alternate,
                e !== null && Wi(e) === null) {
                    n.child = i;
                    break
                }
                e = i.sibling,
                i.sibling = t,
                t = i,
                i = e
            }
            Xa(n, !0, t, null, a);
            break;
        case "together":
            Xa(n, !1, null, null, void 0);
            break;
        default:
            n.memoizedState = null
        }
    return n.child
}
function ki(e, n) {
    !(n.mode & 1) && e !== null && (e.alternate = null,
    n.alternate = null,
    n.flags |= 2)
}
function an(e, n, t) {
    if (e !== null && (n.dependencies = e.dependencies),
    Kn |= n.lanes,
    !(t & n.childLanes))
        return null;
    if (e !== null && n.child !== e.child)
        throw Error(w(153));
    if (n.child !== null) {
        for (e = n.child,
        t = Pn(e, e.pendingProps),
        n.child = t,
        t.return = n; e.sibling !== null; )
            e = e.sibling,
            t = t.sibling = Pn(e, e.pendingProps),
            t.return = n;
        t.sibling = null
    }
    return n.child
}
function Jm(e, n, t) {
    switch (n.tag) {
    case 3:
        Yc(n),
        Pt();
        break;
    case 5:
        kc(n);
        break;
    case 1:
        we(n.type) && ji(n);
        break;
    case 4:
        bl(n, n.stateNode.containerInfo);
        break;
    case 10:
        var r = n.type._context
          , i = n.memoizedProps.value;
        b(bi, r._currentValue),
        r._currentValue = i;
        break;
    case 13:
        if (r = n.memoizedState,
        r !== null)
            return r.dehydrated !== null ? (b(B, B.current & 1),
            n.flags |= 128,
            null) : t & n.child.childLanes ? Qc(e, n, t) : (b(B, B.current & 1),
            e = an(e, n, t),
            e !== null ? e.sibling : null);
        b(B, B.current & 1);
        break;
    case 19:
        if (r = (t & n.childLanes) !== 0,
        e.flags & 128) {
            if (r)
                return Xc(e, n, t);
            n.flags |= 128
        }
        if (i = n.memoizedState,
        i !== null && (i.rendering = null,
        i.tail = null,
        i.lastEffect = null),
        b(B, B.current),
        r)
            break;
        return null;
    case 22:
    case 23:
        return n.lanes = 0,
        Vc(e, n, t)
    }
    return an(e, n, t)
}
var Kc, Uo, Gc, Zc;
Kc = function(e, n) {
    for (var t = n.child; t !== null; ) {
        if (t.tag === 5 || t.tag === 6)
            e.appendChild(t.stateNode);
        else if (t.tag !== 4 && t.child !== null) {
            t.child.return = t,
            t = t.child;
            continue
        }
        if (t === n)
            break;
        for (; t.sibling === null; ) {
            if (t.return === null || t.return === n)
                return;
            t = t.return
        }
        t.sibling.return = t.return,
        t = t.sibling
    }
}
;
Uo = function() {}
;
Gc = function(e, n, t, r) {
    var i = e.memoizedProps;
    if (i !== r) {
        e = n.stateNode,
        Un(Ke.current);
        var a = null;
        switch (t) {
        case "input":
            i = uo(e, i),
            r = uo(e, r),
            a = [];
            break;
        case "select":
            i = Q({}, i, {
                value: void 0
            }),
            r = Q({}, r, {
                value: void 0
            }),
            a = [];
            break;
        case "textarea":
            i = co(e, i),
            r = co(e, r),
            a = [];
            break;
        default:
            typeof i.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Ri)
        }
        mo(t, r);
        var o;
        t = null;
        for (s in i)
            if (!r.hasOwnProperty(s) && i.hasOwnProperty(s) && i[s] != null)
                if (s === "style") {
                    var l = i[s];
                    for (o in l)
                        l.hasOwnProperty(o) && (t || (t = {}),
                        t[o] = "")
                } else
                    s !== "dangerouslySetInnerHTML" && s !== "children" && s !== "suppressContentEditableWarning" && s !== "suppressHydrationWarning" && s !== "autoFocus" && (ur.hasOwnProperty(s) ? a || (a = []) : (a = a || []).push(s, null));
        for (s in r) {
            var u = r[s];
            if (l = i != null ? i[s] : void 0,
            r.hasOwnProperty(s) && u !== l && (u != null || l != null))
                if (s === "style")
                    if (l) {
                        for (o in l)
                            !l.hasOwnProperty(o) || u && u.hasOwnProperty(o) || (t || (t = {}),
                            t[o] = "");
                        for (o in u)
                            u.hasOwnProperty(o) && l[o] !== u[o] && (t || (t = {}),
                            t[o] = u[o])
                    } else
                        t || (a || (a = []),
                        a.push(s, t)),
                        t = u;
                else
                    s === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0,
                    l = l ? l.__html : void 0,
                    u != null && l !== u && (a = a || []).push(s, u)) : s === "children" ? typeof u != "string" && typeof u != "number" || (a = a || []).push(s, "" + u) : s !== "suppressContentEditableWarning" && s !== "suppressHydrationWarning" && (ur.hasOwnProperty(s) ? (u != null && s === "onScroll" && $("scroll", e),
                    a || l === u || (a = [])) : (a = a || []).push(s, u))
        }
        t && (a = a || []).push("style", t);
        var s = a;
        (n.updateQueue = s) && (n.flags |= 4)
    }
}
;
Zc = function(e, n, t, r) {
    t !== r && (n.flags |= 4)
}
;
function Vt(e, n) {
    if (!V)
        switch (e.tailMode) {
        case "hidden":
            n = e.tail;
            for (var t = null; n !== null; )
                n.alternate !== null && (t = n),
                n = n.sibling;
            t === null ? e.tail = null : t.sibling = null;
            break;
        case "collapsed":
            t = e.tail;
            for (var r = null; t !== null; )
                t.alternate !== null && (r = t),
                t = t.sibling;
            r === null ? n || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
        }
}
function se(e) {
    var n = e.alternate !== null && e.alternate.child === e.child
      , t = 0
      , r = 0;
    if (n)
        for (var i = e.child; i !== null; )
            t |= i.lanes | i.childLanes,
            r |= i.subtreeFlags & 14680064,
            r |= i.flags & 14680064,
            i.return = e,
            i = i.sibling;
    else
        for (i = e.child; i !== null; )
            t |= i.lanes | i.childLanes,
            r |= i.subtreeFlags,
            r |= i.flags,
            i.return = e,
            i = i.sibling;
    return e.subtreeFlags |= r,
    e.childLanes = t,
    n
}
function qm(e, n, t) {
    var r = n.pendingProps;
    switch (Ll(n),
    n.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
        return se(n),
        null;
    case 1:
        return we(n.type) && Mi(),
        se(n),
        null;
    case 3:
        return r = n.stateNode,
        Ot(),
        W(ye),
        W(ce),
        Ul(),
        r.pendingContext && (r.context = r.pendingContext,
        r.pendingContext = null),
        (e === null || e.child === null) && (Zr(n) ? n.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(n.flags & 256) || (n.flags |= 1024,
        De !== null && (Ko(De),
        De = null))),
        Uo(e, n),
        se(n),
        null;
    case 5:
        $l(n);
        var i = Un(kr.current);
        if (t = n.type,
        e !== null && n.stateNode != null)
            Gc(e, n, t, r, i),
            e.ref !== n.ref && (n.flags |= 512,
            n.flags |= 2097152);
        else {
            if (!r) {
                if (n.stateNode === null)
                    throw Error(w(166));
                return se(n),
                null
            }
            if (e = Un(Ke.current),
            Zr(n)) {
                r = n.stateNode,
                t = n.type;
                var a = n.memoizedProps;
                switch (r[Ye] = n,
                r[yr] = a,
                e = (n.mode & 1) !== 0,
                t) {
                case "dialog":
                    $("cancel", r),
                    $("close", r);
                    break;
                case "iframe":
                case "object":
                case "embed":
                    $("load", r);
                    break;
                case "video":
                case "audio":
                    for (i = 0; i < Kt.length; i++)
                        $(Kt[i], r);
                    break;
                case "source":
                    $("error", r);
                    break;
                case "img":
                case "image":
                case "link":
                    $("error", r),
                    $("load", r);
                    break;
                case "details":
                    $("toggle", r);
                    break;
                case "input":
                    _u(r, a),
                    $("invalid", r);
                    break;
                case "select":
                    r._wrapperState = {
                        wasMultiple: !!a.multiple
                    },
                    $("invalid", r);
                    break;
                case "textarea":
                    Nu(r, a),
                    $("invalid", r)
                }
                mo(t, a),
                i = null;
                for (var o in a)
                    if (a.hasOwnProperty(o)) {
                        var l = a[o];
                        o === "children" ? typeof l == "string" ? r.textContent !== l && (a.suppressHydrationWarning !== !0 && Gr(r.textContent, l, e),
                        i = ["children", l]) : typeof l == "number" && r.textContent !== "" + l && (a.suppressHydrationWarning !== !0 && Gr(r.textContent, l, e),
                        i = ["children", "" + l]) : ur.hasOwnProperty(o) && l != null && o === "onScroll" && $("scroll", r)
                    }
                switch (t) {
                case "input":
                    Wr(r),
                    Pu(r, a, !0);
                    break;
                case "textarea":
                    Wr(r),
                    Ou(r);
                    break;
                case "select":
                case "option":
                    break;
                default:
                    typeof a.onClick == "function" && (r.onclick = Ri)
                }
                r = i,
                n.updateQueue = r,
                r !== null && (n.flags |= 4)
            } else {
                o = i.nodeType === 9 ? i : i.ownerDocument,
                e === "http://www.w3.org/1999/xhtml" && (e = _f(t)),
                e === "http://www.w3.org/1999/xhtml" ? t === "script" ? (e = o.createElement("div"),
                e.innerHTML = "<script><\/script>",
                e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = o.createElement(t, {
                    is: r.is
                }) : (e = o.createElement(t),
                t === "select" && (o = e,
                r.multiple ? o.multiple = !0 : r.size && (o.size = r.size))) : e = o.createElementNS(e, t),
                e[Ye] = n,
                e[yr] = r,
                Kc(e, n, !1, !1),
                n.stateNode = e;
                e: {
                    switch (o = vo(t, r),
                    t) {
                    case "dialog":
                        $("cancel", e),
                        $("close", e),
                        i = r;
                        break;
                    case "iframe":
                    case "object":
                    case "embed":
                        $("load", e),
                        i = r;
                        break;
                    case "video":
                    case "audio":
                        for (i = 0; i < Kt.length; i++)
                            $(Kt[i], e);
                        i = r;
                        break;
                    case "source":
                        $("error", e),
                        i = r;
                        break;
                    case "img":
                    case "image":
                    case "link":
                        $("error", e),
                        $("load", e),
                        i = r;
                        break;
                    case "details":
                        $("toggle", e),
                        i = r;
                        break;
                    case "input":
                        _u(e, r),
                        i = uo(e, r),
                        $("invalid", e);
                        break;
                    case "option":
                        i = r;
                        break;
                    case "select":
                        e._wrapperState = {
                            wasMultiple: !!r.multiple
                        },
                        i = Q({}, r, {
                            value: void 0
                        }),
                        $("invalid", e);
                        break;
                    case "textarea":
                        Nu(e, r),
                        i = co(e, r),
                        $("invalid", e);
                        break;
                    default:
                        i = r
                    }
                    mo(t, i),
                    l = i;
                    for (a in l)
                        if (l.hasOwnProperty(a)) {
                            var u = l[a];
                            a === "style" ? Of(e, u) : a === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0,
                            u != null && Pf(e, u)) : a === "children" ? typeof u == "string" ? (t !== "textarea" || u !== "") && sr(e, u) : typeof u == "number" && sr(e, "" + u) : a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && a !== "autoFocus" && (ur.hasOwnProperty(a) ? u != null && a === "onScroll" && $("scroll", e) : u != null && gl(e, a, u, o))
                        }
                    switch (t) {
                    case "input":
                        Wr(e),
                        Pu(e, r, !1);
                        break;
                    case "textarea":
                        Wr(e),
                        Ou(e);
                        break;
                    case "option":
                        r.value != null && e.setAttribute("value", "" + Nn(r.value));
                        break;
                    case "select":
                        e.multiple = !!r.multiple,
                        a = r.value,
                        a != null ? gt(e, !!r.multiple, a, !1) : r.defaultValue != null && gt(e, !!r.multiple, r.defaultValue, !0);
                        break;
                    default:
                        typeof i.onClick == "function" && (e.onclick = Ri)
                    }
                    switch (t) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                        r = !!r.autoFocus;
                        break e;
                    case "img":
                        r = !0;
                        break e;
                    default:
                        r = !1
                    }
                }
                r && (n.flags |= 4)
            }
            n.ref !== null && (n.flags |= 512,
            n.flags |= 2097152)
        }
        return se(n),
        null;
    case 6:
        if (e && n.stateNode != null)
            Zc(e, n, e.memoizedProps, r);
        else {
            if (typeof r != "string" && n.stateNode === null)
                throw Error(w(166));
            if (t = Un(kr.current),
            Un(Ke.current),
            Zr(n)) {
                if (r = n.stateNode,
                t = n.memoizedProps,
                r[Ye] = n,
                (a = r.nodeValue !== t) && (e = Ee,
                e !== null))
                    switch (e.tag) {
                    case 3:
                        Gr(r.nodeValue, t, (e.mode & 1) !== 0);
                        break;
                    case 5:
                        e.memoizedProps.suppressHydrationWarning !== !0 && Gr(r.nodeValue, t, (e.mode & 1) !== 0)
                    }
                a && (n.flags |= 4)
            } else
                r = (t.nodeType === 9 ? t : t.ownerDocument).createTextNode(r),
                r[Ye] = n,
                n.stateNode = r
        }
        return se(n),
        null;
    case 13:
        if (W(B),
        r = n.memoizedState,
        e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            if (V && xe !== null && n.mode & 1 && !(n.flags & 128))
                vc(),
                Pt(),
                n.flags |= 98560,
                a = !1;
            else if (a = Zr(n),
            r !== null && r.dehydrated !== null) {
                if (e === null) {
                    if (!a)
                        throw Error(w(318));
                    if (a = n.memoizedState,
                    a = a !== null ? a.dehydrated : null,
                    !a)
                        throw Error(w(317));
                    a[Ye] = n
                } else
                    Pt(),
                    !(n.flags & 128) && (n.memoizedState = null),
                    n.flags |= 4;
                se(n),
                a = !1
            } else
                De !== null && (Ko(De),
                De = null),
                a = !0;
            if (!a)
                return n.flags & 65536 ? n : null
        }
        return n.flags & 128 ? (n.lanes = t,
        n) : (r = r !== null,
        r !== (e !== null && e.memoizedState !== null) && r && (n.child.flags |= 8192,
        n.mode & 1 && (e === null || B.current & 1 ? ee === 0 && (ee = 3) : ql())),
        n.updateQueue !== null && (n.flags |= 4),
        se(n),
        null);
    case 4:
        return Ot(),
        Uo(e, n),
        e === null && hr(n.stateNode.containerInfo),
        se(n),
        null;
    case 10:
        return jl(n.type._context),
        se(n),
        null;
    case 17:
        return we(n.type) && Mi(),
        se(n),
        null;
    case 19:
        if (W(B),
        a = n.memoizedState,
        a === null)
            return se(n),
            null;
        if (r = (n.flags & 128) !== 0,
        o = a.rendering,
        o === null)
            if (r)
                Vt(a, !1);
            else {
                if (ee !== 0 || e !== null && e.flags & 128)
                    for (e = n.child; e !== null; ) {
                        if (o = Wi(e),
                        o !== null) {
                            for (n.flags |= 128,
                            Vt(a, !1),
                            r = o.updateQueue,
                            r !== null && (n.updateQueue = r,
                            n.flags |= 4),
                            n.subtreeFlags = 0,
                            r = t,
                            t = n.child; t !== null; )
                                a = t,
                                e = r,
                                a.flags &= 14680066,
                                o = a.alternate,
                                o === null ? (a.childLanes = 0,
                                a.lanes = e,
                                a.child = null,
                                a.subtreeFlags = 0,
                                a.memoizedProps = null,
                                a.memoizedState = null,
                                a.updateQueue = null,
                                a.dependencies = null,
                                a.stateNode = null) : (a.childLanes = o.childLanes,
                                a.lanes = o.lanes,
                                a.child = o.child,
                                a.subtreeFlags = 0,
                                a.deletions = null,
                                a.memoizedProps = o.memoizedProps,
                                a.memoizedState = o.memoizedState,
                                a.updateQueue = o.updateQueue,
                                a.type = o.type,
                                e = o.dependencies,
                                a.dependencies = e === null ? null : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext
                                }),
                                t = t.sibling;
                            return b(B, B.current & 1 | 2),
                            n.child
                        }
                        e = e.sibling
                    }
                a.tail !== null && Z() > At && (n.flags |= 128,
                r = !0,
                Vt(a, !1),
                n.lanes = 4194304)
            }
        else {
            if (!r)
                if (e = Wi(o),
                e !== null) {
                    if (n.flags |= 128,
                    r = !0,
                    t = e.updateQueue,
                    t !== null && (n.updateQueue = t,
                    n.flags |= 4),
                    Vt(a, !0),
                    a.tail === null && a.tailMode === "hidden" && !o.alternate && !V)
                        return se(n),
                        null
                } else
                    2 * Z() - a.renderingStartTime > At && t !== 1073741824 && (n.flags |= 128,
                    r = !0,
                    Vt(a, !1),
                    n.lanes = 4194304);
            a.isBackwards ? (o.sibling = n.child,
            n.child = o) : (t = a.last,
            t !== null ? t.sibling = o : n.child = o,
            a.last = o)
        }
        return a.tail !== null ? (n = a.tail,
        a.rendering = n,
        a.tail = n.sibling,
        a.renderingStartTime = Z(),
        n.sibling = null,
        t = B.current,
        b(B, r ? t & 1 | 2 : t & 1),
        n) : (se(n),
        null);
    case 22:
    case 23:
        return Jl(),
        r = n.memoizedState !== null,
        e !== null && e.memoizedState !== null !== r && (n.flags |= 8192),
        r && n.mode & 1 ? Se & 1073741824 && (se(n),
        n.subtreeFlags & 6 && (n.flags |= 8192)) : se(n),
        null;
    case 24:
        return null;
    case 25:
        return null
    }
    throw Error(w(156, n.tag))
}
function ev(e, n) {
    switch (Ll(n),
    n.tag) {
    case 1:
        return we(n.type) && Mi(),
        e = n.flags,
        e & 65536 ? (n.flags = e & -65537 | 128,
        n) : null;
    case 3:
        return Ot(),
        W(ye),
        W(ce),
        Ul(),
        e = n.flags,
        e & 65536 && !(e & 128) ? (n.flags = e & -65537 | 128,
        n) : null;
    case 5:
        return $l(n),
        null;
    case 13:
        if (W(B),
        e = n.memoizedState,
        e !== null && e.dehydrated !== null) {
            if (n.alternate === null)
                throw Error(w(340));
            Pt()
        }
        return e = n.flags,
        e & 65536 ? (n.flags = e & -65537 | 128,
        n) : null;
    case 19:
        return W(B),
        null;
    case 4:
        return Ot(),
        null;
    case 10:
        return jl(n.type._context),
        null;
    case 22:
    case 23:
        return Jl(),
        null;
    case 24:
        return null;
    default:
        return null
    }
}
var ei = !1
  , fe = !1
  , nv = typeof WeakSet == "function" ? WeakSet : Set
  , E = null;
function dt(e, n) {
    var t = e.ref;
    if (t !== null)
        if (typeof t == "function")
            try {
                t(null)
            } catch (r) {
                X(e, n, r)
            }
        else
            t.current = null
}
function Wo(e, n, t) {
    try {
        t()
    } catch (r) {
        X(e, n, r)
    }
}
var gs = !1;
function tv(e, n) {
    if (_o = zi,
    e = tc(),
    Al(e)) {
        if ("selectionStart"in e)
            var t = {
                start: e.selectionStart,
                end: e.selectionEnd
            };
        else
            e: {
                t = (t = e.ownerDocument) && t.defaultView || window;
                var r = t.getSelection && t.getSelection();
                if (r && r.rangeCount !== 0) {
                    t = r.anchorNode;
                    var i = r.anchorOffset
                      , a = r.focusNode;
                    r = r.focusOffset;
                    try {
                        t.nodeType,
                        a.nodeType
                    } catch {
                        t = null;
                        break e
                    }
                    var o = 0
                      , l = -1
                      , u = -1
                      , s = 0
                      , d = 0
                      , m = e
                      , v = null;
                    n: for (; ; ) {
                        for (var h; m !== t || i !== 0 && m.nodeType !== 3 || (l = o + i),
                        m !== a || r !== 0 && m.nodeType !== 3 || (u = o + r),
                        m.nodeType === 3 && (o += m.nodeValue.length),
                        (h = m.firstChild) !== null; )
                            v = m,
                            m = h;
                        for (; ; ) {
                            if (m === e)
                                break n;
                            if (v === t && ++s === i && (l = o),
                            v === a && ++d === r && (u = o),
                            (h = m.nextSibling) !== null)
                                break;
                            m = v,
                            v = m.parentNode
                        }
                        m = h
                    }
                    t = l === -1 || u === -1 ? null : {
                        start: l,
                        end: u
                    }
                } else
                    t = null
            }
        t = t || {
            start: 0,
            end: 0
        }
    } else
        t = null;
    for (Po = {
        focusedElem: e,
        selectionRange: t
    },
    zi = !1,
    E = n; E !== null; )
        if (n = E,
        e = n.child,
        (n.subtreeFlags & 1028) !== 0 && e !== null)
            e.return = n,
            E = e;
        else
            for (; E !== null; ) {
                n = E;
                try {
                    var y = n.alternate;
                    if (n.flags & 1024)
                        switch (n.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (y !== null) {
                                var k = y.memoizedProps
                                  , T = y.memoizedState
                                  , c = n.stateNode
                                  , f = c.getSnapshotBeforeUpdate(n.elementType === n.type ? k : je(n.type, k), T);
                                c.__reactInternalSnapshotBeforeUpdate = f
                            }
                            break;
                        case 3:
                            var p = n.stateNode.containerInfo;
                            p.nodeType === 1 ? p.textContent = "" : p.nodeType === 9 && p.documentElement && p.removeChild(p.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(w(163))
                        }
                } catch (g) {
                    X(n, n.return, g)
                }
                if (e = n.sibling,
                e !== null) {
                    e.return = n.return,
                    E = e;
                    break
                }
                E = n.return
            }
    return y = gs,
    gs = !1,
    y
}
function rr(e, n, t) {
    var r = n.updateQueue;
    if (r = r !== null ? r.lastEffect : null,
    r !== null) {
        var i = r = r.next;
        do {
            if ((i.tag & e) === e) {
                var a = i.destroy;
                i.destroy = void 0,
                a !== void 0 && Wo(n, t, a)
            }
            i = i.next
        } while (i !== r)
    }
}
function ca(e, n) {
    if (n = n.updateQueue,
    n = n !== null ? n.lastEffect : null,
    n !== null) {
        var t = n = n.next;
        do {
            if ((t.tag & e) === e) {
                var r = t.create;
                t.destroy = r()
            }
            t = t.next
        } while (t !== n)
    }
}
function Ho(e) {
    var n = e.ref;
    if (n !== null) {
        var t = e.stateNode;
        switch (e.tag) {
        case 5:
            e = t;
            break;
        default:
            e = t
        }
        typeof n == "function" ? n(e) : n.current = e
    }
}
function Jc(e) {
    var n = e.alternate;
    n !== null && (e.alternate = null,
    Jc(n)),
    e.child = null,
    e.deletions = null,
    e.sibling = null,
    e.tag === 5 && (n = e.stateNode,
    n !== null && (delete n[Ye],
    delete n[yr],
    delete n[To],
    delete n[Dm],
    delete n[bm])),
    e.stateNode = null,
    e.return = null,
    e.dependencies = null,
    e.memoizedProps = null,
    e.memoizedState = null,
    e.pendingProps = null,
    e.stateNode = null,
    e.updateQueue = null
}
function qc(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function ys(e) {
    e: for (; ; ) {
        for (; e.sibling === null; ) {
            if (e.return === null || qc(e.return))
                return null;
            e = e.return
        }
        for (e.sibling.return = e.return,
        e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
            if (e.flags & 2 || e.child === null || e.tag === 4)
                continue e;
            e.child.return = e,
            e = e.child
        }
        if (!(e.flags & 2))
            return e.stateNode
    }
}
function Vo(e, n, t) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        n ? t.nodeType === 8 ? t.parentNode.insertBefore(e, n) : t.insertBefore(e, n) : (t.nodeType === 8 ? (n = t.parentNode,
        n.insertBefore(e, t)) : (n = t,
        n.appendChild(e)),
        t = t._reactRootContainer,
        t != null || n.onclick !== null || (n.onclick = Ri));
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (Vo(e, n, t),
        e = e.sibling; e !== null; )
            Vo(e, n, t),
            e = e.sibling
}
function Bo(e, n, t) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        n ? t.insertBefore(e, n) : t.appendChild(e);
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (Bo(e, n, t),
        e = e.sibling; e !== null; )
            Bo(e, n, t),
            e = e.sibling
}
var ae = null
  , Fe = !1;
function cn(e, n, t) {
    for (t = t.child; t !== null; )
        ed(e, n, t),
        t = t.sibling
}
function ed(e, n, t) {
    if (Xe && typeof Xe.onCommitFiberUnmount == "function")
        try {
            Xe.onCommitFiberUnmount(ra, t)
        } catch {}
    switch (t.tag) {
    case 5:
        fe || dt(t, n);
    case 6:
        var r = ae
          , i = Fe;
        ae = null,
        cn(e, n, t),
        ae = r,
        Fe = i,
        ae !== null && (Fe ? (e = ae,
        t = t.stateNode,
        e.nodeType === 8 ? e.parentNode.removeChild(t) : e.removeChild(t)) : ae.removeChild(t.stateNode));
        break;
    case 18:
        ae !== null && (Fe ? (e = ae,
        t = t.stateNode,
        e.nodeType === 8 ? Ua(e.parentNode, t) : e.nodeType === 1 && Ua(e, t),
        pr(e)) : Ua(ae, t.stateNode));
        break;
    case 4:
        r = ae,
        i = Fe,
        ae = t.stateNode.containerInfo,
        Fe = !0,
        cn(e, n, t),
        ae = r,
        Fe = i;
        break;
    case 0:
    case 11:
    case 14:
    case 15:
        if (!fe && (r = t.updateQueue,
        r !== null && (r = r.lastEffect,
        r !== null))) {
            i = r = r.next;
            do {
                var a = i
                  , o = a.destroy;
                a = a.tag,
                o !== void 0 && (a & 2 || a & 4) && Wo(t, n, o),
                i = i.next
            } while (i !== r)
        }
        cn(e, n, t);
        break;
    case 1:
        if (!fe && (dt(t, n),
        r = t.stateNode,
        typeof r.componentWillUnmount == "function"))
            try {
                r.props = t.memoizedProps,
                r.state = t.memoizedState,
                r.componentWillUnmount()
            } catch (l) {
                X(t, n, l)
            }
        cn(e, n, t);
        break;
    case 21:
        cn(e, n, t);
        break;
    case 22:
        t.mode & 1 ? (fe = (r = fe) || t.memoizedState !== null,
        cn(e, n, t),
        fe = r) : cn(e, n, t);
        break;
    default:
        cn(e, n, t)
    }
}
function ws(e) {
    var n = e.updateQueue;
    if (n !== null) {
        e.updateQueue = null;
        var t = e.stateNode;
        t === null && (t = e.stateNode = new nv),
        n.forEach(function(r) {
            var i = cv.bind(null, e, r);
            t.has(r) || (t.add(r),
            r.then(i, i))
        })
    }
}
function Me(e, n) {
    var t = n.deletions;
    if (t !== null)
        for (var r = 0; r < t.length; r++) {
            var i = t[r];
            try {
                var a = e
                  , o = n
                  , l = o;
                e: for (; l !== null; ) {
                    switch (l.tag) {
                    case 5:
                        ae = l.stateNode,
                        Fe = !1;
                        break e;
                    case 3:
                        ae = l.stateNode.containerInfo,
                        Fe = !0;
                        break e;
                    case 4:
                        ae = l.stateNode.containerInfo,
                        Fe = !0;
                        break e
                    }
                    l = l.return
                }
                if (ae === null)
                    throw Error(w(160));
                ed(a, o, i),
                ae = null,
                Fe = !1;
                var u = i.alternate;
                u !== null && (u.return = null),
                i.return = null
            } catch (s) {
                X(i, n, s)
            }
        }
    if (n.subtreeFlags & 12854)
        for (n = n.child; n !== null; )
            nd(n, e),
            n = n.sibling
}
function nd(e, n) {
    var t = e.alternate
      , r = e.flags;
    switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
        if (Me(n, e),
        He(e),
        r & 4) {
            try {
                rr(3, e, e.return),
                ca(3, e)
            } catch (k) {
                X(e, e.return, k)
            }
            try {
                rr(5, e, e.return)
            } catch (k) {
                X(e, e.return, k)
            }
        }
        break;
    case 1:
        Me(n, e),
        He(e),
        r & 512 && t !== null && dt(t, t.return);
        break;
    case 5:
        if (Me(n, e),
        He(e),
        r & 512 && t !== null && dt(t, t.return),
        e.flags & 32) {
            var i = e.stateNode;
            try {
                sr(i, "")
            } catch (k) {
                X(e, e.return, k)
            }
        }
        if (r & 4 && (i = e.stateNode,
        i != null)) {
            var a = e.memoizedProps
              , o = t !== null ? t.memoizedProps : a
              , l = e.type
              , u = e.updateQueue;
            if (e.updateQueue = null,
            u !== null)
                try {
                    l === "input" && a.type === "radio" && a.name != null && Ef(i, a),
                    vo(l, o);
                    var s = vo(l, a);
                    for (o = 0; o < u.length; o += 2) {
                        var d = u[o]
                          , m = u[o + 1];
                        d === "style" ? Of(i, m) : d === "dangerouslySetInnerHTML" ? Pf(i, m) : d === "children" ? sr(i, m) : gl(i, d, m, s)
                    }
                    switch (l) {
                    case "input":
                        so(i, a);
                        break;
                    case "textarea":
                        Cf(i, a);
                        break;
                    case "select":
                        var v = i._wrapperState.wasMultiple;
                        i._wrapperState.wasMultiple = !!a.multiple;
                        var h = a.value;
                        h != null ? gt(i, !!a.multiple, h, !1) : v !== !!a.multiple && (a.defaultValue != null ? gt(i, !!a.multiple, a.defaultValue, !0) : gt(i, !!a.multiple, a.multiple ? [] : "", !1))
                    }
                    i[yr] = a
                } catch (k) {
                    X(e, e.return, k)
                }
        }
        break;
    case 6:
        if (Me(n, e),
        He(e),
        r & 4) {
            if (e.stateNode === null)
                throw Error(w(162));
            i = e.stateNode,
            a = e.memoizedProps;
            try {
                i.nodeValue = a
            } catch (k) {
                X(e, e.return, k)
            }
        }
        break;
    case 3:
        if (Me(n, e),
        He(e),
        r & 4 && t !== null && t.memoizedState.isDehydrated)
            try {
                pr(n.containerInfo)
            } catch (k) {
                X(e, e.return, k)
            }
        break;
    case 4:
        Me(n, e),
        He(e);
        break;
    case 13:
        Me(n, e),
        He(e),
        i = e.child,
        i.flags & 8192 && (a = i.memoizedState !== null,
        i.stateNode.isHidden = a,
        !a || i.alternate !== null && i.alternate.memoizedState !== null || (Gl = Z())),
        r & 4 && ws(e);
        break;
    case 22:
        if (d = t !== null && t.memoizedState !== null,
        e.mode & 1 ? (fe = (s = fe) || d,
        Me(n, e),
        fe = s) : Me(n, e),
        He(e),
        r & 8192) {
            if (s = e.memoizedState !== null,
            (e.stateNode.isHidden = s) && !d && e.mode & 1)
                for (E = e,
                d = e.child; d !== null; ) {
                    for (m = E = d; E !== null; ) {
                        switch (v = E,
                        h = v.child,
                        v.tag) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                            rr(4, v, v.return);
                            break;
                        case 1:
                            dt(v, v.return);
                            var y = v.stateNode;
                            if (typeof y.componentWillUnmount == "function") {
                                r = v,
                                t = v.return;
                                try {
                                    n = r,
                                    y.props = n.memoizedProps,
                                    y.state = n.memoizedState,
                                    y.componentWillUnmount()
                                } catch (k) {
                                    X(r, t, k)
                                }
                            }
                            break;
                        case 5:
                            dt(v, v.return);
                            break;
                        case 22:
                            if (v.memoizedState !== null) {
                                Ss(m);
                                continue
                            }
                        }
                        h !== null ? (h.return = v,
                        E = h) : Ss(m)
                    }
                    d = d.sibling
                }
            e: for (d = null,
            m = e; ; ) {
                if (m.tag === 5) {
                    if (d === null) {
                        d = m;
                        try {
                            i = m.stateNode,
                            s ? (a = i.style,
                            typeof a.setProperty == "function" ? a.setProperty("display", "none", "important") : a.display = "none") : (l = m.stateNode,
                            u = m.memoizedProps.style,
                            o = u != null && u.hasOwnProperty("display") ? u.display : null,
                            l.style.display = Nf("display", o))
                        } catch (k) {
                            X(e, e.return, k)
                        }
                    }
                } else if (m.tag === 6) {
                    if (d === null)
                        try {
                            m.stateNode.nodeValue = s ? "" : m.memoizedProps
                        } catch (k) {
                            X(e, e.return, k)
                        }
                } else if ((m.tag !== 22 && m.tag !== 23 || m.memoizedState === null || m === e) && m.child !== null) {
                    m.child.return = m,
                    m = m.child;
                    continue
                }
                if (m === e)
                    break e;
                for (; m.sibling === null; ) {
                    if (m.return === null || m.return === e)
                        break e;
                    d === m && (d = null),
                    m = m.return
                }
                d === m && (d = null),
                m.sibling.return = m.return,
                m = m.sibling
            }
        }
        break;
    case 19:
        Me(n, e),
        He(e),
        r & 4 && ws(e);
        break;
    case 21:
        break;
    default:
        Me(n, e),
        He(e)
    }
}
function He(e) {
    var n = e.flags;
    if (n & 2) {
        try {
            e: {
                for (var t = e.return; t !== null; ) {
                    if (qc(t)) {
                        var r = t;
                        break e
                    }
                    t = t.return
                }
                throw Error(w(160))
            }
            switch (r.tag) {
            case 5:
                var i = r.stateNode;
                r.flags & 32 && (sr(i, ""),
                r.flags &= -33);
                var a = ys(e);
                Bo(e, a, i);
                break;
            case 3:
            case 4:
                var o = r.stateNode.containerInfo
                  , l = ys(e);
                Vo(e, l, o);
                break;
            default:
                throw Error(w(161))
            }
        } catch (u) {
            X(e, e.return, u)
        }
        e.flags &= -3
    }
    n & 4096 && (e.flags &= -4097)
}
function rv(e, n, t) {
    E = e,
    td(e)
}
function td(e, n, t) {
    for (var r = (e.mode & 1) !== 0; E !== null; ) {
        var i = E
          , a = i.child;
        if (i.tag === 22 && r) {
            var o = i.memoizedState !== null || ei;
            if (!o) {
                var l = i.alternate
                  , u = l !== null && l.memoizedState !== null || fe;
                l = ei;
                var s = fe;
                if (ei = o,
                (fe = u) && !s)
                    for (E = i; E !== null; )
                        o = E,
                        u = o.child,
                        o.tag === 22 && o.memoizedState !== null ? xs(i) : u !== null ? (u.return = o,
                        E = u) : xs(i);
                for (; a !== null; )
                    E = a,
                    td(a),
                    a = a.sibling;
                E = i,
                ei = l,
                fe = s
            }
            ks(e)
        } else
            i.subtreeFlags & 8772 && a !== null ? (a.return = i,
            E = a) : ks(e)
    }
}
function ks(e) {
    for (; E !== null; ) {
        var n = E;
        if (n.flags & 8772) {
            var t = n.alternate;
            try {
                if (n.flags & 8772)
                    switch (n.tag) {
                    case 0:
                    case 11:
                    case 15:
                        fe || ca(5, n);
                        break;
                    case 1:
                        var r = n.stateNode;
                        if (n.flags & 4 && !fe)
                            if (t === null)
                                r.componentDidMount();
                            else {
                                var i = n.elementType === n.type ? t.memoizedProps : je(n.type, t.memoizedProps);
                                r.componentDidUpdate(i, t.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                            }
                        var a = n.updateQueue;
                        a !== null && is(n, a, r);
                        break;
                    case 3:
                        var o = n.updateQueue;
                        if (o !== null) {
                            if (t = null,
                            n.child !== null)
                                switch (n.child.tag) {
                                case 5:
                                    t = n.child.stateNode;
                                    break;
                                case 1:
                                    t = n.child.stateNode
                                }
                            is(n, o, t)
                        }
                        break;
                    case 5:
                        var l = n.stateNode;
                        if (t === null && n.flags & 4) {
                            t = l;
                            var u = n.memoizedProps;
                            switch (n.type) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                u.autoFocus && t.focus();
                                break;
                            case "img":
                                u.src && (t.src = u.src)
                            }
                        }
                        break;
                    case 6:
                        break;
                    case 4:
                        break;
                    case 12:
                        break;
                    case 13:
                        if (n.memoizedState === null) {
                            var s = n.alternate;
                            if (s !== null) {
                                var d = s.memoizedState;
                                if (d !== null) {
                                    var m = d.dehydrated;
                                    m !== null && pr(m)
                                }
                            }
                        }
                        break;
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                        break;
                    default:
                        throw Error(w(163))
                    }
                fe || n.flags & 512 && Ho(n)
            } catch (v) {
                X(n, n.return, v)
            }
        }
        if (n === e) {
            E = null;
            break
        }
        if (t = n.sibling,
        t !== null) {
            t.return = n.return,
            E = t;
            break
        }
        E = n.return
    }
}
function Ss(e) {
    for (; E !== null; ) {
        var n = E;
        if (n === e) {
            E = null;
            break
        }
        var t = n.sibling;
        if (t !== null) {
            t.return = n.return,
            E = t;
            break
        }
        E = n.return
    }
}
function xs(e) {
    for (; E !== null; ) {
        var n = E;
        try {
            switch (n.tag) {
            case 0:
            case 11:
            case 15:
                var t = n.return;
                try {
                    ca(4, n)
                } catch (u) {
                    X(n, t, u)
                }
                break;
            case 1:
                var r = n.stateNode;
                if (typeof r.componentDidMount == "function") {
                    var i = n.return;
                    try {
                        r.componentDidMount()
                    } catch (u) {
                        X(n, i, u)
                    }
                }
                var a = n.return;
                try {
                    Ho(n)
                } catch (u) {
                    X(n, a, u)
                }
                break;
            case 5:
                var o = n.return;
                try {
                    Ho(n)
                } catch (u) {
                    X(n, o, u)
                }
            }
        } catch (u) {
            X(n, n.return, u)
        }
        if (n === e) {
            E = null;
            break
        }
        var l = n.sibling;
        if (l !== null) {
            l.return = n.return,
            E = l;
            break
        }
        E = n.return
    }
}
var iv = Math.ceil
  , Bi = sn.ReactCurrentDispatcher
  , Xl = sn.ReactCurrentOwner
  , ze = sn.ReactCurrentBatchConfig
  , j = 0
  , ie = null
  , J = null
  , oe = 0
  , Se = 0
  , pt = In(0)
  , ee = 0
  , Cr = null
  , Kn = 0
  , da = 0
  , Kl = 0
  , ir = null
  , he = null
  , Gl = 0
  , At = 1 / 0
  , Ge = null
  , Yi = !1
  , Yo = null
  , Cn = null
  , ni = !1
  , yn = null
  , Qi = 0
  , ar = 0
  , Qo = null
  , Si = -1
  , xi = 0;
function pe() {
    return j & 6 ? Z() : Si !== -1 ? Si : Si = Z()
}
function _n(e) {
    return e.mode & 1 ? j & 2 && oe !== 0 ? oe & -oe : Um.transition !== null ? (xi === 0 && (xi = $f()),
    xi) : (e = D,
    e !== 0 || (e = window.event,
    e = e === void 0 ? 16 : Qf(e.type)),
    e) : 1
}
function Ue(e, n, t, r) {
    if (50 < ar)
        throw ar = 0,
        Qo = null,
        Error(w(185));
    zr(e, t, r),
    (!(j & 2) || e !== ie) && (e === ie && (!(j & 2) && (da |= t),
    ee === 4 && hn(e, oe)),
    ke(e, r),
    t === 1 && j === 0 && !(n.mode & 1) && (At = Z() + 500,
    ua && Rn()))
}
function ke(e, n) {
    var t = e.callbackNode;
    Up(e, n);
    var r = Ai(e, e === ie ? oe : 0);
    if (r === 0)
        t !== null && zu(t),
        e.callbackNode = null,
        e.callbackPriority = 0;
    else if (n = r & -r,
    e.callbackPriority !== n) {
        if (t != null && zu(t),
        n === 1)
            e.tag === 0 ? $m(Es.bind(null, e)) : dc(Es.bind(null, e)),
            jm(function() {
                !(j & 6) && Rn()
            }),
            t = null;
        else {
            switch (Uf(r)) {
            case 1:
                t = xl;
                break;
            case 4:
                t = Df;
                break;
            case 16:
                t = Ti;
                break;
            case 536870912:
                t = bf;
                break;
            default:
                t = Ti
            }
            t = fd(t, rd.bind(null, e))
        }
        e.callbackPriority = n,
        e.callbackNode = t
    }
}
function rd(e, n) {
    if (Si = -1,
    xi = 0,
    j & 6)
        throw Error(w(327));
    var t = e.callbackNode;
    if (xt() && e.callbackNode !== t)
        return null;
    var r = Ai(e, e === ie ? oe : 0);
    if (r === 0)
        return null;
    if (r & 30 || r & e.expiredLanes || n)
        n = Xi(e, r);
    else {
        n = r;
        var i = j;
        j |= 2;
        var a = ad();
        (ie !== e || oe !== n) && (Ge = null,
        At = Z() + 500,
        Vn(e, n));
        do
            try {
                lv();
                break
            } catch (l) {
                id(e, l)
            }
        while (!0);
        Ml(),
        Bi.current = a,
        j = i,
        J !== null ? n = 0 : (ie = null,
        oe = 0,
        n = ee)
    }
    if (n !== 0) {
        if (n === 2 && (i = ko(e),
        i !== 0 && (r = i,
        n = Xo(e, i))),
        n === 1)
            throw t = Cr,
            Vn(e, 0),
            hn(e, r),
            ke(e, Z()),
            t;
        if (n === 6)
            hn(e, r);
        else {
            if (i = e.current.alternate,
            !(r & 30) && !av(i) && (n = Xi(e, r),
            n === 2 && (a = ko(e),
            a !== 0 && (r = a,
            n = Xo(e, a))),
            n === 1))
                throw t = Cr,
                Vn(e, 0),
                hn(e, r),
                ke(e, Z()),
                t;
            switch (e.finishedWork = i,
            e.finishedLanes = r,
            n) {
            case 0:
            case 1:
                throw Error(w(345));
            case 2:
                Dn(e, he, Ge);
                break;
            case 3:
                if (hn(e, r),
                (r & 130023424) === r && (n = Gl + 500 - Z(),
                10 < n)) {
                    if (Ai(e, 0) !== 0)
                        break;
                    if (i = e.suspendedLanes,
                    (i & r) !== r) {
                        pe(),
                        e.pingedLanes |= e.suspendedLanes & i;
                        break
                    }
                    e.timeoutHandle = Oo(Dn.bind(null, e, he, Ge), n);
                    break
                }
                Dn(e, he, Ge);
                break;
            case 4:
                if (hn(e, r),
                (r & 4194240) === r)
                    break;
                for (n = e.eventTimes,
                i = -1; 0 < r; ) {
                    var o = 31 - $e(r);
                    a = 1 << o,
                    o = n[o],
                    o > i && (i = o),
                    r &= ~a
                }
                if (r = i,
                r = Z() - r,
                r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * iv(r / 1960)) - r,
                10 < r) {
                    e.timeoutHandle = Oo(Dn.bind(null, e, he, Ge), r);
                    break
                }
                Dn(e, he, Ge);
                break;
            case 5:
                Dn(e, he, Ge);
                break;
            default:
                throw Error(w(329))
            }
        }
    }
    return ke(e, Z()),
    e.callbackNode === t ? rd.bind(null, e) : null
}
function Xo(e, n) {
    var t = ir;
    return e.current.memoizedState.isDehydrated && (Vn(e, n).flags |= 256),
    e = Xi(e, n),
    e !== 2 && (n = he,
    he = t,
    n !== null && Ko(n)),
    e
}
function Ko(e) {
    he === null ? he = e : he.push.apply(he, e)
}
function av(e) {
    for (var n = e; ; ) {
        if (n.flags & 16384) {
            var t = n.updateQueue;
            if (t !== null && (t = t.stores,
            t !== null))
                for (var r = 0; r < t.length; r++) {
                    var i = t[r]
                      , a = i.getSnapshot;
                    i = i.value;
                    try {
                        if (!We(a(), i))
                            return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (t = n.child,
        n.subtreeFlags & 16384 && t !== null)
            t.return = n,
            n = t;
        else {
            if (n === e)
                break;
            for (; n.sibling === null; ) {
                if (n.return === null || n.return === e)
                    return !0;
                n = n.return
            }
            n.sibling.return = n.return,
            n = n.sibling
        }
    }
    return !0
}
function hn(e, n) {
    for (n &= ~Kl,
    n &= ~da,
    e.suspendedLanes |= n,
    e.pingedLanes &= ~n,
    e = e.expirationTimes; 0 < n; ) {
        var t = 31 - $e(n)
          , r = 1 << t;
        e[t] = -1,
        n &= ~r
    }
}
function Es(e) {
    if (j & 6)
        throw Error(w(327));
    xt();
    var n = Ai(e, 0);
    if (!(n & 1))
        return ke(e, Z()),
        null;
    var t = Xi(e, n);
    if (e.tag !== 0 && t === 2) {
        var r = ko(e);
        r !== 0 && (n = r,
        t = Xo(e, r))
    }
    if (t === 1)
        throw t = Cr,
        Vn(e, 0),
        hn(e, n),
        ke(e, Z()),
        t;
    if (t === 6)
        throw Error(w(345));
    return e.finishedWork = e.current.alternate,
    e.finishedLanes = n,
    Dn(e, he, Ge),
    ke(e, Z()),
    null
}
function Zl(e, n) {
    var t = j;
    j |= 1;
    try {
        return e(n)
    } finally {
        j = t,
        j === 0 && (At = Z() + 500,
        ua && Rn())
    }
}
function Gn(e) {
    yn !== null && yn.tag === 0 && !(j & 6) && xt();
    var n = j;
    j |= 1;
    var t = ze.transition
      , r = D;
    try {
        if (ze.transition = null,
        D = 1,
        e)
            return e()
    } finally {
        D = r,
        ze.transition = t,
        j = n,
        !(j & 6) && Rn()
    }
}
function Jl() {
    Se = pt.current,
    W(pt)
}
function Vn(e, n) {
    e.finishedWork = null,
    e.finishedLanes = 0;
    var t = e.timeoutHandle;
    if (t !== -1 && (e.timeoutHandle = -1,
    Mm(t)),
    J !== null)
        for (t = J.return; t !== null; ) {
            var r = t;
            switch (Ll(r),
            r.tag) {
            case 1:
                r = r.type.childContextTypes,
                r != null && Mi();
                break;
            case 3:
                Ot(),
                W(ye),
                W(ce),
                Ul();
                break;
            case 5:
                $l(r);
                break;
            case 4:
                Ot();
                break;
            case 13:
                W(B);
                break;
            case 19:
                W(B);
                break;
            case 10:
                jl(r.type._context);
                break;
            case 22:
            case 23:
                Jl()
            }
            t = t.return
        }
    if (ie = e,
    J = e = Pn(e.current, null),
    oe = Se = n,
    ee = 0,
    Cr = null,
    Kl = da = Kn = 0,
    he = ir = null,
    $n !== null) {
        for (n = 0; n < $n.length; n++)
            if (t = $n[n],
            r = t.interleaved,
            r !== null) {
                t.interleaved = null;
                var i = r.next
                  , a = t.pending;
                if (a !== null) {
                    var o = a.next;
                    a.next = i,
                    r.next = o
                }
                t.pending = r
            }
        $n = null
    }
    return e
}
function id(e, n) {
    do {
        var t = J;
        try {
            if (Ml(),
            yi.current = Vi,
            Hi) {
                for (var r = Y.memoizedState; r !== null; ) {
                    var i = r.queue;
                    i !== null && (i.pending = null),
                    r = r.next
                }
                Hi = !1
            }
            if (Xn = 0,
            re = q = Y = null,
            tr = !1,
            Sr = 0,
            Xl.current = null,
            t === null || t.return === null) {
                ee = 1,
                Cr = n,
                J = null;
                break
            }
            e: {
                var a = e
                  , o = t.return
                  , l = t
                  , u = n;
                if (n = oe,
                l.flags |= 32768,
                u !== null && typeof u == "object" && typeof u.then == "function") {
                    var s = u
                      , d = l
                      , m = d.tag;
                    if (!(d.mode & 1) && (m === 0 || m === 11 || m === 15)) {
                        var v = d.alternate;
                        v ? (d.updateQueue = v.updateQueue,
                        d.memoizedState = v.memoizedState,
                        d.lanes = v.lanes) : (d.updateQueue = null,
                        d.memoizedState = null)
                    }
                    var h = fs(o);
                    if (h !== null) {
                        h.flags &= -257,
                        cs(h, o, l, a, n),
                        h.mode & 1 && ss(a, s, n),
                        n = h,
                        u = s;
                        var y = n.updateQueue;
                        if (y === null) {
                            var k = new Set;
                            k.add(u),
                            n.updateQueue = k
                        } else
                            y.add(u);
                        break e
                    } else {
                        if (!(n & 1)) {
                            ss(a, s, n),
                            ql();
                            break e
                        }
                        u = Error(w(426))
                    }
                } else if (V && l.mode & 1) {
                    var T = fs(o);
                    if (T !== null) {
                        !(T.flags & 65536) && (T.flags |= 256),
                        cs(T, o, l, a, n),
                        Il(Tt(u, l));
                        break e
                    }
                }
                a = u = Tt(u, l),
                ee !== 4 && (ee = 2),
                ir === null ? ir = [a] : ir.push(a),
                a = o;
                do {
                    switch (a.tag) {
                    case 3:
                        a.flags |= 65536,
                        n &= -n,
                        a.lanes |= n;
                        var c = Uc(a, u, n);
                        rs(a, c);
                        break e;
                    case 1:
                        l = u;
                        var f = a.type
                          , p = a.stateNode;
                        if (!(a.flags & 128) && (typeof f.getDerivedStateFromError == "function" || p !== null && typeof p.componentDidCatch == "function" && (Cn === null || !Cn.has(p)))) {
                            a.flags |= 65536,
                            n &= -n,
                            a.lanes |= n;
                            var g = Wc(a, l, n);
                            rs(a, g);
                            break e
                        }
                    }
                    a = a.return
                } while (a !== null)
            }
            ld(t)
        } catch (S) {
            n = S,
            J === t && t !== null && (J = t = t.return);
            continue
        }
        break
    } while (!0)
}
function ad() {
    var e = Bi.current;
    return Bi.current = Vi,
    e === null ? Vi : e
}
function ql() {
    (ee === 0 || ee === 3 || ee === 2) && (ee = 4),
    ie === null || !(Kn & 268435455) && !(da & 268435455) || hn(ie, oe)
}
function Xi(e, n) {
    var t = j;
    j |= 2;
    var r = ad();
    (ie !== e || oe !== n) && (Ge = null,
    Vn(e, n));
    do
        try {
            ov();
            break
        } catch (i) {
            id(e, i)
        }
    while (!0);
    if (Ml(),
    j = t,
    Bi.current = r,
    J !== null)
        throw Error(w(261));
    return ie = null,
    oe = 0,
    ee
}
function ov() {
    for (; J !== null; )
        od(J)
}
function lv() {
    for (; J !== null && !Lp(); )
        od(J)
}
function od(e) {
    var n = sd(e.alternate, e, Se);
    e.memoizedProps = e.pendingProps,
    n === null ? ld(e) : J = n,
    Xl.current = null
}
function ld(e) {
    var n = e;
    do {
        var t = n.alternate;
        if (e = n.return,
        n.flags & 32768) {
            if (t = ev(t, n),
            t !== null) {
                t.flags &= 32767,
                J = t;
                return
            }
            if (e !== null)
                e.flags |= 32768,
                e.subtreeFlags = 0,
                e.deletions = null;
            else {
                ee = 6,
                J = null;
                return
            }
        } else if (t = qm(t, n, Se),
        t !== null) {
            J = t;
            return
        }
        if (n = n.sibling,
        n !== null) {
            J = n;
            return
        }
        J = n = e
    } while (n !== null);
    ee === 0 && (ee = 5)
}
function Dn(e, n, t) {
    var r = D
      , i = ze.transition;
    try {
        ze.transition = null,
        D = 1,
        uv(e, n, t, r)
    } finally {
        ze.transition = i,
        D = r
    }
    return null
}
function uv(e, n, t, r) {
    do
        xt();
    while (yn !== null);
    if (j & 6)
        throw Error(w(327));
    t = e.finishedWork;
    var i = e.finishedLanes;
    if (t === null)
        return null;
    if (e.finishedWork = null,
    e.finishedLanes = 0,
    t === e.current)
        throw Error(w(177));
    e.callbackNode = null,
    e.callbackPriority = 0;
    var a = t.lanes | t.childLanes;
    if (Wp(e, a),
    e === ie && (J = ie = null,
    oe = 0),
    !(t.subtreeFlags & 2064) && !(t.flags & 2064) || ni || (ni = !0,
    fd(Ti, function() {
        return xt(),
        null
    })),
    a = (t.flags & 15990) !== 0,
    t.subtreeFlags & 15990 || a) {
        a = ze.transition,
        ze.transition = null;
        var o = D;
        D = 1;
        var l = j;
        j |= 4,
        Xl.current = null,
        tv(e, t),
        nd(t, e),
        Om(Po),
        zi = !!_o,
        Po = _o = null,
        e.current = t,
        rv(t),
        Ip(),
        j = l,
        D = o,
        ze.transition = a
    } else
        e.current = t;
    if (ni && (ni = !1,
    yn = e,
    Qi = i),
    a = e.pendingLanes,
    a === 0 && (Cn = null),
    jp(t.stateNode),
    ke(e, Z()),
    n !== null)
        for (r = e.onRecoverableError,
        t = 0; t < n.length; t++)
            i = n[t],
            r(i.value, {
                componentStack: i.stack,
                digest: i.digest
            });
    if (Yi)
        throw Yi = !1,
        e = Yo,
        Yo = null,
        e;
    return Qi & 1 && e.tag !== 0 && xt(),
    a = e.pendingLanes,
    a & 1 ? e === Qo ? ar++ : (ar = 0,
    Qo = e) : ar = 0,
    Rn(),
    null
}
function xt() {
    if (yn !== null) {
        var e = Uf(Qi)
          , n = ze.transition
          , t = D;
        try {
            if (ze.transition = null,
            D = 16 > e ? 16 : e,
            yn === null)
                var r = !1;
            else {
                if (e = yn,
                yn = null,
                Qi = 0,
                j & 6)
                    throw Error(w(331));
                var i = j;
                for (j |= 4,
                E = e.current; E !== null; ) {
                    var a = E
                      , o = a.child;
                    if (E.flags & 16) {
                        var l = a.deletions;
                        if (l !== null) {
                            for (var u = 0; u < l.length; u++) {
                                var s = l[u];
                                for (E = s; E !== null; ) {
                                    var d = E;
                                    switch (d.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        rr(8, d, a)
                                    }
                                    var m = d.child;
                                    if (m !== null)
                                        m.return = d,
                                        E = m;
                                    else
                                        for (; E !== null; ) {
                                            d = E;
                                            var v = d.sibling
                                              , h = d.return;
                                            if (Jc(d),
                                            d === s) {
                                                E = null;
                                                break
                                            }
                                            if (v !== null) {
                                                v.return = h,
                                                E = v;
                                                break
                                            }
                                            E = h
                                        }
                                }
                            }
                            var y = a.alternate;
                            if (y !== null) {
                                var k = y.child;
                                if (k !== null) {
                                    y.child = null;
                                    do {
                                        var T = k.sibling;
                                        k.sibling = null,
                                        k = T
                                    } while (k !== null)
                                }
                            }
                            E = a
                        }
                    }
                    if (a.subtreeFlags & 2064 && o !== null)
                        o.return = a,
                        E = o;
                    else
                        e: for (; E !== null; ) {
                            if (a = E,
                            a.flags & 2048)
                                switch (a.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    rr(9, a, a.return)
                                }
                            var c = a.sibling;
                            if (c !== null) {
                                c.return = a.return,
                                E = c;
                                break e
                            }
                            E = a.return
                        }
                }
                var f = e.current;
                for (E = f; E !== null; ) {
                    o = E;
                    var p = o.child;
                    if (o.subtreeFlags & 2064 && p !== null)
                        p.return = o,
                        E = p;
                    else
                        e: for (o = f; E !== null; ) {
                            if (l = E,
                            l.flags & 2048)
                                try {
                                    switch (l.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        ca(9, l)
                                    }
                                } catch (S) {
                                    X(l, l.return, S)
                                }
                            if (l === o) {
                                E = null;
                                break e
                            }
                            var g = l.sibling;
                            if (g !== null) {
                                g.return = l.return,
                                E = g;
                                break e
                            }
                            E = l.return
                        }
                }
                if (j = i,
                Rn(),
                Xe && typeof Xe.onPostCommitFiberRoot == "function")
                    try {
                        Xe.onPostCommitFiberRoot(ra, e)
                    } catch {}
                r = !0
            }
            return r
        } finally {
            D = t,
            ze.transition = n
        }
    }
    return !1
}
function Cs(e, n, t) {
    n = Tt(t, n),
    n = Uc(e, n, 1),
    e = En(e, n, 1),
    n = pe(),
    e !== null && (zr(e, 1, n),
    ke(e, n))
}
function X(e, n, t) {
    if (e.tag === 3)
        Cs(e, e, t);
    else
        for (; n !== null; ) {
            if (n.tag === 3) {
                Cs(n, e, t);
                break
            } else if (n.tag === 1) {
                var r = n.stateNode;
                if (typeof n.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Cn === null || !Cn.has(r))) {
                    e = Tt(t, e),
                    e = Wc(n, e, 1),
                    n = En(n, e, 1),
                    e = pe(),
                    n !== null && (zr(n, 1, e),
                    ke(n, e));
                    break
                }
            }
            n = n.return
        }
}
function sv(e, n, t) {
    var r = e.pingCache;
    r !== null && r.delete(n),
    n = pe(),
    e.pingedLanes |= e.suspendedLanes & t,
    ie === e && (oe & t) === t && (ee === 4 || ee === 3 && (oe & 130023424) === oe && 500 > Z() - Gl ? Vn(e, 0) : Kl |= t),
    ke(e, n)
}
function ud(e, n) {
    n === 0 && (e.mode & 1 ? (n = Br,
    Br <<= 1,
    !(Br & 130023424) && (Br = 4194304)) : n = 1);
    var t = pe();
    e = rn(e, n),
    e !== null && (zr(e, n, t),
    ke(e, t))
}
function fv(e) {
    var n = e.memoizedState
      , t = 0;
    n !== null && (t = n.retryLane),
    ud(e, t)
}
function cv(e, n) {
    var t = 0;
    switch (e.tag) {
    case 13:
        var r = e.stateNode
          , i = e.memoizedState;
        i !== null && (t = i.retryLane);
        break;
    case 19:
        r = e.stateNode;
        break;
    default:
        throw Error(w(314))
    }
    r !== null && r.delete(n),
    ud(e, t)
}
var sd;
sd = function(e, n, t) {
    if (e !== null)
        if (e.memoizedProps !== n.pendingProps || ye.current)
            ge = !0;
        else {
            if (!(e.lanes & t) && !(n.flags & 128))
                return ge = !1,
                Jm(e, n, t);
            ge = !!(e.flags & 131072)
        }
    else
        ge = !1,
        V && n.flags & 1048576 && pc(n, Di, n.index);
    switch (n.lanes = 0,
    n.tag) {
    case 2:
        var r = n.type;
        ki(e, n),
        e = n.pendingProps;
        var i = _t(n, ce.current);
        St(n, t),
        i = Hl(null, n, r, e, i, t);
        var a = Vl();
        return n.flags |= 1,
        typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0 ? (n.tag = 1,
        n.memoizedState = null,
        n.updateQueue = null,
        we(r) ? (a = !0,
        ji(n)) : a = !1,
        n.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null,
        Dl(n),
        i.updater = fa,
        n.stateNode = i,
        i._reactInternals = n,
        Mo(n, r, e, t),
        n = Do(null, n, r, !0, a, t)) : (n.tag = 0,
        V && a && zl(n),
        de(null, n, i, t),
        n = n.child),
        n;
    case 16:
        r = n.elementType;
        e: {
            switch (ki(e, n),
            e = n.pendingProps,
            i = r._init,
            r = i(r._payload),
            n.type = r,
            i = n.tag = pv(r),
            e = je(r, e),
            i) {
            case 0:
                n = Fo(null, n, r, e, t);
                break e;
            case 1:
                n = ms(null, n, r, e, t);
                break e;
            case 11:
                n = ds(null, n, r, e, t);
                break e;
            case 14:
                n = ps(null, n, r, je(r.type, e), t);
                break e
            }
            throw Error(w(306, r, ""))
        }
        return n;
    case 0:
        return r = n.type,
        i = n.pendingProps,
        i = n.elementType === r ? i : je(r, i),
        Fo(e, n, r, i, t);
    case 1:
        return r = n.type,
        i = n.pendingProps,
        i = n.elementType === r ? i : je(r, i),
        ms(e, n, r, i, t);
    case 3:
        e: {
            if (Yc(n),
            e === null)
                throw Error(w(387));
            r = n.pendingProps,
            a = n.memoizedState,
            i = a.element,
            wc(e, n),
            Ui(n, r, null, t);
            var o = n.memoizedState;
            if (r = o.element,
            a.isDehydrated)
                if (a = {
                    element: r,
                    isDehydrated: !1,
                    cache: o.cache,
                    pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
                    transitions: o.transitions
                },
                n.updateQueue.baseState = a,
                n.memoizedState = a,
                n.flags & 256) {
                    i = Tt(Error(w(423)), n),
                    n = vs(e, n, r, t, i);
                    break e
                } else if (r !== i) {
                    i = Tt(Error(w(424)), n),
                    n = vs(e, n, r, t, i);
                    break e
                } else
                    for (xe = xn(n.stateNode.containerInfo.firstChild),
                    Ee = n,
                    V = !0,
                    De = null,
                    t = gc(n, null, r, t),
                    n.child = t; t; )
                        t.flags = t.flags & -3 | 4096,
                        t = t.sibling;
            else {
                if (Pt(),
                r === i) {
                    n = an(e, n, t);
                    break e
                }
                de(e, n, r, t)
            }
            n = n.child
        }
        return n;
    case 5:
        return kc(n),
        e === null && Lo(n),
        r = n.type,
        i = n.pendingProps,
        a = e !== null ? e.memoizedProps : null,
        o = i.children,
        No(r, i) ? o = null : a !== null && No(r, a) && (n.flags |= 32),
        Bc(e, n),
        de(e, n, o, t),
        n.child;
    case 6:
        return e === null && Lo(n),
        null;
    case 13:
        return Qc(e, n, t);
    case 4:
        return bl(n, n.stateNode.containerInfo),
        r = n.pendingProps,
        e === null ? n.child = Nt(n, null, r, t) : de(e, n, r, t),
        n.child;
    case 11:
        return r = n.type,
        i = n.pendingProps,
        i = n.elementType === r ? i : je(r, i),
        ds(e, n, r, i, t);
    case 7:
        return de(e, n, n.pendingProps, t),
        n.child;
    case 8:
        return de(e, n, n.pendingProps.children, t),
        n.child;
    case 12:
        return de(e, n, n.pendingProps.children, t),
        n.child;
    case 10:
        e: {
            if (r = n.type._context,
            i = n.pendingProps,
            a = n.memoizedProps,
            o = i.value,
            b(bi, r._currentValue),
            r._currentValue = o,
            a !== null)
                if (We(a.value, o)) {
                    if (a.children === i.children && !ye.current) {
                        n = an(e, n, t);
                        break e
                    }
                } else
                    for (a = n.child,
                    a !== null && (a.return = n); a !== null; ) {
                        var l = a.dependencies;
                        if (l !== null) {
                            o = a.child;
                            for (var u = l.firstContext; u !== null; ) {
                                if (u.context === r) {
                                    if (a.tag === 1) {
                                        u = en(-1, t & -t),
                                        u.tag = 2;
                                        var s = a.updateQueue;
                                        if (s !== null) {
                                            s = s.shared;
                                            var d = s.pending;
                                            d === null ? u.next = u : (u.next = d.next,
                                            d.next = u),
                                            s.pending = u
                                        }
                                    }
                                    a.lanes |= t,
                                    u = a.alternate,
                                    u !== null && (u.lanes |= t),
                                    Io(a.return, t, n),
                                    l.lanes |= t;
                                    break
                                }
                                u = u.next
                            }
                        } else if (a.tag === 10)
                            o = a.type === n.type ? null : a.child;
                        else if (a.tag === 18) {
                            if (o = a.return,
                            o === null)
                                throw Error(w(341));
                            o.lanes |= t,
                            l = o.alternate,
                            l !== null && (l.lanes |= t),
                            Io(o, t, n),
                            o = a.sibling
                        } else
                            o = a.child;
                        if (o !== null)
                            o.return = a;
                        else
                            for (o = a; o !== null; ) {
                                if (o === n) {
                                    o = null;
                                    break
                                }
                                if (a = o.sibling,
                                a !== null) {
                                    a.return = o.return,
                                    o = a;
                                    break
                                }
                                o = o.return
                            }
                        a = o
                    }
            de(e, n, i.children, t),
            n = n.child
        }
        return n;
    case 9:
        return i = n.type,
        r = n.pendingProps.children,
        St(n, t),
        i = Le(i),
        r = r(i),
        n.flags |= 1,
        de(e, n, r, t),
        n.child;
    case 14:
        return r = n.type,
        i = je(r, n.pendingProps),
        i = je(r.type, i),
        ps(e, n, r, i, t);
    case 15:
        return Hc(e, n, n.type, n.pendingProps, t);
    case 17:
        return r = n.type,
        i = n.pendingProps,
        i = n.elementType === r ? i : je(r, i),
        ki(e, n),
        n.tag = 1,
        we(r) ? (e = !0,
        ji(n)) : e = !1,
        St(n, t),
        $c(n, r, i),
        Mo(n, r, i, t),
        Do(null, n, r, !0, e, t);
    case 19:
        return Xc(e, n, t);
    case 22:
        return Vc(e, n, t)
    }
    throw Error(w(156, n.tag))
}
;
function fd(e, n) {
    return Ff(e, n)
}
function dv(e, n, t, r) {
    this.tag = e,
    this.key = t,
    this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
    this.index = 0,
    this.ref = null,
    this.pendingProps = n,
    this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
    this.mode = r,
    this.subtreeFlags = this.flags = 0,
    this.deletions = null,
    this.childLanes = this.lanes = 0,
    this.alternate = null
}
function Ae(e, n, t, r) {
    return new dv(e,n,t,r)
}
function eu(e) {
    return e = e.prototype,
    !(!e || !e.isReactComponent)
}
function pv(e) {
    if (typeof e == "function")
        return eu(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof,
        e === wl)
            return 11;
        if (e === kl)
            return 14
    }
    return 2
}
function Pn(e, n) {
    var t = e.alternate;
    return t === null ? (t = Ae(e.tag, n, e.key, e.mode),
    t.elementType = e.elementType,
    t.type = e.type,
    t.stateNode = e.stateNode,
    t.alternate = e,
    e.alternate = t) : (t.pendingProps = n,
    t.type = e.type,
    t.flags = 0,
    t.subtreeFlags = 0,
    t.deletions = null),
    t.flags = e.flags & 14680064,
    t.childLanes = e.childLanes,
    t.lanes = e.lanes,
    t.child = e.child,
    t.memoizedProps = e.memoizedProps,
    t.memoizedState = e.memoizedState,
    t.updateQueue = e.updateQueue,
    n = e.dependencies,
    t.dependencies = n === null ? null : {
        lanes: n.lanes,
        firstContext: n.firstContext
    },
    t.sibling = e.sibling,
    t.index = e.index,
    t.ref = e.ref,
    t
}
function Ei(e, n, t, r, i, a) {
    var o = 2;
    if (r = e,
    typeof e == "function")
        eu(e) && (o = 1);
    else if (typeof e == "string")
        o = 5;
    else
        e: switch (e) {
        case rt:
            return Bn(t.children, i, a, n);
        case yl:
            o = 8,
            i |= 8;
            break;
        case io:
            return e = Ae(12, t, n, i | 2),
            e.elementType = io,
            e.lanes = a,
            e;
        case ao:
            return e = Ae(13, t, n, i),
            e.elementType = ao,
            e.lanes = a,
            e;
        case oo:
            return e = Ae(19, t, n, i),
            e.elementType = oo,
            e.lanes = a,
            e;
        case kf:
            return pa(t, i, a, n);
        default:
            if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                case yf:
                    o = 10;
                    break e;
                case wf:
                    o = 9;
                    break e;
                case wl:
                    o = 11;
                    break e;
                case kl:
                    o = 14;
                    break e;
                case pn:
                    o = 16,
                    r = null;
                    break e
                }
            throw Error(w(130, e == null ? e : typeof e, ""))
        }
    return n = Ae(o, t, n, i),
    n.elementType = e,
    n.type = r,
    n.lanes = a,
    n
}
function Bn(e, n, t, r) {
    return e = Ae(7, e, r, n),
    e.lanes = t,
    e
}
function pa(e, n, t, r) {
    return e = Ae(22, e, r, n),
    e.elementType = kf,
    e.lanes = t,
    e.stateNode = {
        isHidden: !1
    },
    e
}
function Ka(e, n, t) {
    return e = Ae(6, e, null, n),
    e.lanes = t,
    e
}
function Ga(e, n, t) {
    return n = Ae(4, e.children !== null ? e.children : [], e.key, n),
    n.lanes = t,
    n.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
    },
    n
}
function mv(e, n, t, r, i) {
    this.tag = n,
    this.containerInfo = e,
    this.finishedWork = this.pingCache = this.current = this.pendingChildren = null,
    this.timeoutHandle = -1,
    this.callbackNode = this.pendingContext = this.context = null,
    this.callbackPriority = 0,
    this.eventTimes = Aa(0),
    this.expirationTimes = Aa(-1),
    this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
    this.entanglements = Aa(0),
    this.identifierPrefix = r,
    this.onRecoverableError = i,
    this.mutableSourceEagerHydrationData = null
}
function nu(e, n, t, r, i, a, o, l, u) {
    return e = new mv(e,n,t,l,u),
    n === 1 ? (n = 1,
    a === !0 && (n |= 8)) : n = 0,
    a = Ae(3, null, null, n),
    e.current = a,
    a.stateNode = e,
    a.memoizedState = {
        element: r,
        isDehydrated: t,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    },
    Dl(a),
    e
}
function vv(e, n, t) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: tt,
        key: r == null ? null : "" + r,
        children: e,
        containerInfo: n,
        implementation: t
    }
}
function cd(e) {
    if (!e)
        return On;
    e = e._reactInternals;
    e: {
        if (et(e) !== e || e.tag !== 1)
            throw Error(w(170));
        var n = e;
        do {
            switch (n.tag) {
            case 3:
                n = n.stateNode.context;
                break e;
            case 1:
                if (we(n.type)) {
                    n = n.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e
                }
            }
            n = n.return
        } while (n !== null);
        throw Error(w(171))
    }
    if (e.tag === 1) {
        var t = e.type;
        if (we(t))
            return cc(e, t, n)
    }
    return n
}
function dd(e, n, t, r, i, a, o, l, u) {
    return e = nu(t, r, !0, e, i, a, o, l, u),
    e.context = cd(null),
    t = e.current,
    r = pe(),
    i = _n(t),
    a = en(r, i),
    a.callback = n ?? null,
    En(t, a, i),
    e.current.lanes = i,
    zr(e, i, r),
    ke(e, r),
    e
}
function ma(e, n, t, r) {
    var i = n.current
      , a = pe()
      , o = _n(i);
    return t = cd(t),
    n.context === null ? n.context = t : n.pendingContext = t,
    n = en(a, o),
    n.payload = {
        element: e
    },
    r = r === void 0 ? null : r,
    r !== null && (n.callback = r),
    e = En(i, n, o),
    e !== null && (Ue(e, i, o, a),
    gi(e, i, o)),
    o
}
function Ki(e) {
    if (e = e.current,
    !e.child)
        return null;
    switch (e.child.tag) {
    case 5:
        return e.child.stateNode;
    default:
        return e.child.stateNode
    }
}
function _s(e, n) {
    if (e = e.memoizedState,
    e !== null && e.dehydrated !== null) {
        var t = e.retryLane;
        e.retryLane = t !== 0 && t < n ? t : n
    }
}
function tu(e, n) {
    _s(e, n),
    (e = e.alternate) && _s(e, n)
}
function hv() {
    return null
}
var pd = typeof reportError == "function" ? reportError : function(e) {
    console.error(e)
}
;
function ru(e) {
    this._internalRoot = e
}
va.prototype.render = ru.prototype.render = function(e) {
    var n = this._internalRoot;
    if (n === null)
        throw Error(w(409));
    ma(e, n, null, null)
}
;
va.prototype.unmount = ru.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var n = e.containerInfo;
        Gn(function() {
            ma(null, e, null, null)
        }),
        n[tn] = null
    }
}
;
function va(e) {
    this._internalRoot = e
}
va.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
        var n = Vf();
        e = {
            blockedOn: null,
            target: e,
            priority: n
        };
        for (var t = 0; t < vn.length && n !== 0 && n < vn[t].priority; t++)
            ;
        vn.splice(t, 0, e),
        t === 0 && Yf(e)
    }
}
;
function iu(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}
function ha(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}
function Ps() {}
function gv(e, n, t, r, i) {
    if (i) {
        if (typeof r == "function") {
            var a = r;
            r = function() {
                var s = Ki(o);
                a.call(s)
            }
        }
        var o = dd(n, r, e, 0, null, !1, !1, "", Ps);
        return e._reactRootContainer = o,
        e[tn] = o.current,
        hr(e.nodeType === 8 ? e.parentNode : e),
        Gn(),
        o
    }
    for (; i = e.lastChild; )
        e.removeChild(i);
    if (typeof r == "function") {
        var l = r;
        r = function() {
            var s = Ki(u);
            l.call(s)
        }
    }
    var u = nu(e, 0, !1, null, null, !1, !1, "", Ps);
    return e._reactRootContainer = u,
    e[tn] = u.current,
    hr(e.nodeType === 8 ? e.parentNode : e),
    Gn(function() {
        ma(n, u, t, r)
    }),
    u
}
function ga(e, n, t, r, i) {
    var a = t._reactRootContainer;
    if (a) {
        var o = a;
        if (typeof i == "function") {
            var l = i;
            i = function() {
                var u = Ki(o);
                l.call(u)
            }
        }
        ma(n, o, e, i)
    } else
        o = gv(t, n, e, i, r);
    return Ki(o)
}
Wf = function(e) {
    switch (e.tag) {
    case 3:
        var n = e.stateNode;
        if (n.current.memoizedState.isDehydrated) {
            var t = Xt(n.pendingLanes);
            t !== 0 && (El(n, t | 1),
            ke(n, Z()),
            !(j & 6) && (At = Z() + 500,
            Rn()))
        }
        break;
    case 13:
        Gn(function() {
            var r = rn(e, 1);
            if (r !== null) {
                var i = pe();
                Ue(r, e, 1, i)
            }
        }),
        tu(e, 1)
    }
}
;
Cl = function(e) {
    if (e.tag === 13) {
        var n = rn(e, 134217728);
        if (n !== null) {
            var t = pe();
            Ue(n, e, 134217728, t)
        }
        tu(e, 134217728)
    }
}
;
Hf = function(e) {
    if (e.tag === 13) {
        var n = _n(e)
          , t = rn(e, n);
        if (t !== null) {
            var r = pe();
            Ue(t, e, n, r)
        }
        tu(e, n)
    }
}
;
Vf = function() {
    return D
}
;
Bf = function(e, n) {
    var t = D;
    try {
        return D = e,
        n()
    } finally {
        D = t
    }
}
;
go = function(e, n, t) {
    switch (n) {
    case "input":
        if (so(e, t),
        n = t.name,
        t.type === "radio" && n != null) {
            for (t = e; t.parentNode; )
                t = t.parentNode;
            for (t = t.querySelectorAll("input[name=" + JSON.stringify("" + n) + '][type="radio"]'),
            n = 0; n < t.length; n++) {
                var r = t[n];
                if (r !== e && r.form === e.form) {
                    var i = la(r);
                    if (!i)
                        throw Error(w(90));
                    xf(r),
                    so(r, i)
                }
            }
        }
        break;
    case "textarea":
        Cf(e, t);
        break;
    case "select":
        n = t.value,
        n != null && gt(e, !!t.multiple, n, !1)
    }
}
;
zf = Zl;
Lf = Gn;
var yv = {
    usingClientEntryPoint: !1,
    Events: [Ir, lt, la, Tf, Af, Zl]
}
  , Bt = {
    findFiberByHostInstance: bn,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom"
}
  , wv = {
    bundleType: Bt.bundleType,
    version: Bt.version,
    rendererPackageName: Bt.rendererPackageName,
    rendererConfig: Bt.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: sn.ReactCurrentDispatcher,
    findHostInstanceByFiber: function(e) {
        return e = Mf(e),
        e === null ? null : e.stateNode
    },
    findFiberByHostInstance: Bt.findFiberByHostInstance || hv,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var ti = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!ti.isDisabled && ti.supportsFiber)
        try {
            ra = ti.inject(wv),
            Xe = ti
        } catch {}
}
_e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = yv;
_e.createPortal = function(e, n) {
    var t = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!iu(n))
        throw Error(w(200));
    return vv(e, n, null, t)
}
;
_e.createRoot = function(e, n) {
    if (!iu(e))
        throw Error(w(299));
    var t = !1
      , r = ""
      , i = pd;
    return n != null && (n.unstable_strictMode === !0 && (t = !0),
    n.identifierPrefix !== void 0 && (r = n.identifierPrefix),
    n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
    n = nu(e, 1, !1, null, null, t, !1, r, i),
    e[tn] = n.current,
    hr(e.nodeType === 8 ? e.parentNode : e),
    new ru(n)
}
;
_e.findDOMNode = function(e) {
    if (e == null)
        return null;
    if (e.nodeType === 1)
        return e;
    var n = e._reactInternals;
    if (n === void 0)
        throw typeof e.render == "function" ? Error(w(188)) : (e = Object.keys(e).join(","),
        Error(w(268, e)));
    return e = Mf(n),
    e = e === null ? null : e.stateNode,
    e
}
;
_e.flushSync = function(e) {
    return Gn(e)
}
;
_e.hydrate = function(e, n, t) {
    if (!ha(n))
        throw Error(w(200));
    return ga(null, e, n, !0, t)
}
;
_e.hydrateRoot = function(e, n, t) {
    if (!iu(e))
        throw Error(w(405));
    var r = t != null && t.hydratedSources || null
      , i = !1
      , a = ""
      , o = pd;
    if (t != null && (t.unstable_strictMode === !0 && (i = !0),
    t.identifierPrefix !== void 0 && (a = t.identifierPrefix),
    t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    n = dd(n, null, e, 1, t ?? null, i, !1, a, o),
    e[tn] = n.current,
    hr(e),
    r)
        for (e = 0; e < r.length; e++)
            t = r[e],
            i = t._getVersion,
            i = i(t._source),
            n.mutableSourceEagerHydrationData == null ? n.mutableSourceEagerHydrationData = [t, i] : n.mutableSourceEagerHydrationData.push(t, i);
    return new va(n)
}
;
_e.render = function(e, n, t) {
    if (!ha(n))
        throw Error(w(200));
    return ga(null, e, n, !1, t)
}
;
_e.unmountComponentAtNode = function(e) {
    if (!ha(e))
        throw Error(w(40));
    return e._reactRootContainer ? (Gn(function() {
        ga(null, null, e, !1, function() {
            e._reactRootContainer = null,
            e[tn] = null
        })
    }),
    !0) : !1
}
;
_e.unstable_batchedUpdates = Zl;
_e.unstable_renderSubtreeIntoContainer = function(e, n, t, r) {
    if (!ha(t))
        throw Error(w(200));
    if (e == null || e._reactInternals === void 0)
        throw Error(w(38));
    return ga(e, n, t, !1, r)
}
;
_e.version = "18.3.1-next-f1338f8080-20240426";
function md() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
        try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(md)
        } catch (e) {
            console.error(e)
        }
}
md(),
mf.exports = _e;
var kv = mf.exports
  , Ns = kv;
to.createRoot = Ns.createRoot,
to.hydrateRoot = Ns.hydrateRoot;
const Sv = ({shoe: e, addToCart: n}) => z.jsxs("div", {
    className: "shoe-item",
    children: [z.jsx("img", {
        src: e.image,
        alt: e.name
    }), z.jsxs("div", {
        className: "item-name",
        children: [z.jsx("h3", {
            children: e.name
        }), z.jsxs("p", {
            children: ["$", e.price]
        }), z.jsx("button", {
            onClick: () => n(e),
            children: "Add to Cart"
        })]
    })]
})
  , xv = "/assets/shoe1-BGRM_viW.png"
  , Ev = "/assets/shoe2-DHC7iR0j.png"
  , Cv = "/assets/shoe3-QaXyn1bf.png"
  , _v = "/assets/shoe4-CGz-3c0T.png"
  , Pv = "/assets/shoe5-BSSFXzte.png"
  , Nv = "/assets/shoe6-LRx4jtaq.png"
  , Ov = [{
    id: 1,
    name: "Running Shoes",
    price: 100,
    image: xv
}, {
    id: 2,
    name: "Basketball Shoes",
    price: 150,
    image: Ev
}, {
    id: 3,
    name: "Casual Shoes",
    price: 80,
    image: Cv
}, {
    id: 4,
    name: "Nike Shoes",
    price: 80,
    image: _v
}, {
    id: 5,
    name: "Reebok Shoes",
    price: 80,
    image: Pv
}, {
    id: 6,
    name: "Adidas Shoes",
    price: 80,
    image: Nv
}]
  , Tv = ({addToCart: e}) => z.jsx("div", {
    className: "shoe-list",
    children: Ov.map(n => z.jsx(Sv, {
        shoe: n,
        addToCart: e
    }, n.id))
});
function Os(e, n) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        n && (r = r.filter(function(i) {
            return Object.getOwnPropertyDescriptor(e, i).enumerable
        })),
        t.push.apply(t, r)
    }
    return t
}
function x(e) {
    for (var n = 1; n < arguments.length; n++) {
        var t = arguments[n] != null ? arguments[n] : {};
        n % 2 ? Os(Object(t), !0).forEach(function(r) {
            ne(e, r, t[r])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Os(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
        })
    }
    return e
}
function Gi(e) {
    "@babel/helpers - typeof";
    return Gi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(n) {
        return typeof n
    }
    : function(n) {
        return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
    }
    ,
    Gi(e)
}
function Av(e, n) {
    if (!(e instanceof n))
        throw new TypeError("Cannot call a class as a function")
}
function zv(e, n) {
    for (var t = 0; t < n.length; t++) {
        var r = n[t];
        r.enumerable = r.enumerable || !1,
        r.configurable = !0,
        "value"in r && (r.writable = !0),
        Object.defineProperty(e, r.key, r)
    }
}
function Lv(e, n, t) {
    return n && zv(e.prototype, n),
    Object.defineProperty(e, "prototype", {
        writable: !1
    }),
    e
}
function ne(e, n, t) {
    return n in e ? Object.defineProperty(e, n, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[n] = t,
    e
}
function au(e, n) {
    return Rv(e) || jv(e, n) || vd(e, n) || Dv()
}
function Mr(e) {
    return Iv(e) || Mv(e) || vd(e) || Fv()
}
function Iv(e) {
    if (Array.isArray(e))
        return Go(e)
}
function Rv(e) {
    if (Array.isArray(e))
        return e
}
function Mv(e) {
    if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
        return Array.from(e)
}
function jv(e, n) {
    var t = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
    if (t != null) {
        var r = [], i = !0, a = !1, o, l;
        try {
            for (t = t.call(e); !(i = (o = t.next()).done) && (r.push(o.value),
            !(n && r.length === n)); i = !0)
                ;
        } catch (u) {
            a = !0,
            l = u
        } finally {
            try {
                !i && t.return != null && t.return()
            } finally {
                if (a)
                    throw l
            }
        }
        return r
    }
}
function vd(e, n) {
    if (e) {
        if (typeof e == "string")
            return Go(e, n);
        var t = Object.prototype.toString.call(e).slice(8, -1);
        if (t === "Object" && e.constructor && (t = e.constructor.name),
        t === "Map" || t === "Set")
            return Array.from(e);
        if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
            return Go(e, n)
    }
}
function Go(e, n) {
    (n == null || n > e.length) && (n = e.length);
    for (var t = 0, r = new Array(n); t < n; t++)
        r[t] = e[t];
    return r
}
function Fv() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}
function Dv() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}
var Ts = function() {}
  , ou = {}
  , hd = {}
  , gd = null
  , yd = {
    mark: Ts,
    measure: Ts
};
try {
    typeof window < "u" && (ou = window),
    typeof document < "u" && (hd = document),
    typeof MutationObserver < "u" && (gd = MutationObserver),
    typeof performance < "u" && (yd = performance)
} catch {}
var bv = ou.navigator || {}
  , As = bv.userAgent
  , zs = As === void 0 ? "" : As
  , Tn = ou
  , H = hd
  , Ls = gd
  , ri = yd;
Tn.document;
var fn = !!H.documentElement && !!H.head && typeof H.addEventListener == "function" && typeof H.createElement == "function", wd = ~zs.indexOf("MSIE") || ~zs.indexOf("Trident/"), ii, ai, oi, li, ui, on = "___FONT_AWESOME___", Zo = 16, kd = "fa", Sd = "svg-inline--fa", Zn = "data-fa-i2svg", Jo = "data-fa-pseudo-element", $v = "data-fa-pseudo-element-pending", lu = "data-prefix", uu = "data-icon", Is = "fontawesome-i2svg", Uv = "async", Wv = ["HTML", "HEAD", "STYLE", "SCRIPT"], xd = function() {
    try {
        return !0
    } catch {
        return !1
    }
}(), U = "classic", K = "sharp", su = [U, K];
function jr(e) {
    return new Proxy(e,{
        get: function(t, r) {
            return r in t ? t[r] : t[U]
        }
    })
}
var _r = jr((ii = {},
ne(ii, U, {
    fa: "solid",
    fas: "solid",
    "fa-solid": "solid",
    far: "regular",
    "fa-regular": "regular",
    fal: "light",
    "fa-light": "light",
    fat: "thin",
    "fa-thin": "thin",
    fad: "duotone",
    "fa-duotone": "duotone",
    fab: "brands",
    "fa-brands": "brands",
    fak: "kit",
    fakd: "kit",
    "fa-kit": "kit",
    "fa-kit-duotone": "kit"
}),
ne(ii, K, {
    fa: "solid",
    fass: "solid",
    "fa-solid": "solid",
    fasr: "regular",
    "fa-regular": "regular",
    fasl: "light",
    "fa-light": "light",
    fast: "thin",
    "fa-thin": "thin"
}),
ii))
  , Pr = jr((ai = {},
ne(ai, U, {
    solid: "fas",
    regular: "far",
    light: "fal",
    thin: "fat",
    duotone: "fad",
    brands: "fab",
    kit: "fak"
}),
ne(ai, K, {
    solid: "fass",
    regular: "fasr",
    light: "fasl",
    thin: "fast"
}),
ai))
  , Nr = jr((oi = {},
ne(oi, U, {
    fab: "fa-brands",
    fad: "fa-duotone",
    fak: "fa-kit",
    fal: "fa-light",
    far: "fa-regular",
    fas: "fa-solid",
    fat: "fa-thin"
}),
ne(oi, K, {
    fass: "fa-solid",
    fasr: "fa-regular",
    fasl: "fa-light",
    fast: "fa-thin"
}),
oi))
  , Hv = jr((li = {},
ne(li, U, {
    "fa-brands": "fab",
    "fa-duotone": "fad",
    "fa-kit": "fak",
    "fa-light": "fal",
    "fa-regular": "far",
    "fa-solid": "fas",
    "fa-thin": "fat"
}),
ne(li, K, {
    "fa-solid": "fass",
    "fa-regular": "fasr",
    "fa-light": "fasl",
    "fa-thin": "fast"
}),
li))
  , Vv = /fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/
  , Ed = "fa-layers-text"
  , Bv = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i
  , Yv = jr((ui = {},
ne(ui, U, {
    900: "fas",
    400: "far",
    normal: "far",
    300: "fal",
    100: "fat"
}),
ne(ui, K, {
    900: "fass",
    400: "fasr",
    300: "fasl",
    100: "fast"
}),
ui))
  , Cd = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  , Qv = Cd.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20])
  , Xv = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"]
  , Wn = {
    GROUP: "duotone-group",
    SWAP_OPACITY: "swap-opacity",
    PRIMARY: "primary",
    SECONDARY: "secondary"
}
  , Or = new Set;
Object.keys(Pr[U]).map(Or.add.bind(Or));
Object.keys(Pr[K]).map(Or.add.bind(Or));
var Kv = [].concat(su, Mr(Or), ["2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "fw", "inverse", "layers-counter", "layers-text", "layers", "li", "pull-left", "pull-right", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", Wn.GROUP, Wn.SWAP_OPACITY, Wn.PRIMARY, Wn.SECONDARY]).concat(Cd.map(function(e) {
    return "".concat(e, "x")
})).concat(Qv.map(function(e) {
    return "w-".concat(e)
}))
  , or = Tn.FontAwesomeConfig || {};
function Gv(e) {
    var n = H.querySelector("script[" + e + "]");
    if (n)
        return n.getAttribute(e)
}
function Zv(e) {
    return e === "" ? !0 : e === "false" ? !1 : e === "true" ? !0 : e
}
if (H && typeof H.querySelector == "function") {
    var Jv = [["data-family-prefix", "familyPrefix"], ["data-css-prefix", "cssPrefix"], ["data-family-default", "familyDefault"], ["data-style-default", "styleDefault"], ["data-replacement-class", "replacementClass"], ["data-auto-replace-svg", "autoReplaceSvg"], ["data-auto-add-css", "autoAddCss"], ["data-auto-a11y", "autoA11y"], ["data-search-pseudo-elements", "searchPseudoElements"], ["data-observe-mutations", "observeMutations"], ["data-mutate-approach", "mutateApproach"], ["data-keep-original-source", "keepOriginalSource"], ["data-measure-performance", "measurePerformance"], ["data-show-missing-icons", "showMissingIcons"]];
    Jv.forEach(function(e) {
        var n = au(e, 2)
          , t = n[0]
          , r = n[1]
          , i = Zv(Gv(t));
        i != null && (or[r] = i)
    })
}
var _d = {
    styleDefault: "solid",
    familyDefault: "classic",
    cssPrefix: kd,
    replacementClass: Sd,
    autoReplaceSvg: !0,
    autoAddCss: !0,
    autoA11y: !0,
    searchPseudoElements: !1,
    observeMutations: !0,
    mutateApproach: "async",
    keepOriginalSource: !0,
    measurePerformance: !1,
    showMissingIcons: !0
};
or.familyPrefix && (or.cssPrefix = or.familyPrefix);
var zt = x(x({}, _d), or);
zt.autoReplaceSvg || (zt.observeMutations = !1);
var N = {};
Object.keys(_d).forEach(function(e) {
    Object.defineProperty(N, e, {
        enumerable: !0,
        set: function(t) {
            zt[e] = t,
            lr.forEach(function(r) {
                return r(N)
            })
        },
        get: function() {
            return zt[e]
        }
    })
});
Object.defineProperty(N, "familyPrefix", {
    enumerable: !0,
    set: function(n) {
        zt.cssPrefix = n,
        lr.forEach(function(t) {
            return t(N)
        })
    },
    get: function() {
        return zt.cssPrefix
    }
});
Tn.FontAwesomeConfig = N;
var lr = [];
function qv(e) {
    return lr.push(e),
    function() {
        lr.splice(lr.indexOf(e), 1)
    }
}
var dn = Zo
  , Qe = {
    size: 16,
    x: 0,
    y: 0,
    rotate: 0,
    flipX: !1,
    flipY: !1
};
function eh(e) {
    if (!(!e || !fn)) {
        var n = H.createElement("style");
        n.setAttribute("type", "text/css"),
        n.innerHTML = e;
        for (var t = H.head.childNodes, r = null, i = t.length - 1; i > -1; i--) {
            var a = t[i]
              , o = (a.tagName || "").toUpperCase();
            ["STYLE", "LINK"].indexOf(o) > -1 && (r = a)
        }
        return H.head.insertBefore(n, r),
        e
    }
}
var nh = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function Tr() {
    for (var e = 12, n = ""; e-- > 0; )
        n += nh[Math.random() * 62 | 0];
    return n
}
function Mt(e) {
    for (var n = [], t = (e || []).length >>> 0; t--; )
        n[t] = e[t];
    return n
}
function fu(e) {
    return e.classList ? Mt(e.classList) : (e.getAttribute("class") || "").split(" ").filter(function(n) {
        return n
    })
}
function Pd(e) {
    return "".concat(e).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
}
function th(e) {
    return Object.keys(e || {}).reduce(function(n, t) {
        return n + "".concat(t, '="').concat(Pd(e[t]), '" ')
    }, "").trim()
}
function ya(e) {
    return Object.keys(e || {}).reduce(function(n, t) {
        return n + "".concat(t, ": ").concat(e[t].trim(), ";")
    }, "")
}
function cu(e) {
    return e.size !== Qe.size || e.x !== Qe.x || e.y !== Qe.y || e.rotate !== Qe.rotate || e.flipX || e.flipY
}
function rh(e) {
    var n = e.transform
      , t = e.containerWidth
      , r = e.iconWidth
      , i = {
        transform: "translate(".concat(t / 2, " 256)")
    }
      , a = "translate(".concat(n.x * 32, ", ").concat(n.y * 32, ") ")
      , o = "scale(".concat(n.size / 16 * (n.flipX ? -1 : 1), ", ").concat(n.size / 16 * (n.flipY ? -1 : 1), ") ")
      , l = "rotate(".concat(n.rotate, " 0 0)")
      , u = {
        transform: "".concat(a, " ").concat(o, " ").concat(l)
    }
      , s = {
        transform: "translate(".concat(r / 2 * -1, " -256)")
    };
    return {
        outer: i,
        inner: u,
        path: s
    }
}
function ih(e) {
    var n = e.transform
      , t = e.width
      , r = t === void 0 ? Zo : t
      , i = e.height
      , a = i === void 0 ? Zo : i
      , o = e.startCentered
      , l = o === void 0 ? !1 : o
      , u = "";
    return l && wd ? u += "translate(".concat(n.x / dn - r / 2, "em, ").concat(n.y / dn - a / 2, "em) ") : l ? u += "translate(calc(-50% + ".concat(n.x / dn, "em), calc(-50% + ").concat(n.y / dn, "em)) ") : u += "translate(".concat(n.x / dn, "em, ").concat(n.y / dn, "em) "),
    u += "scale(".concat(n.size / dn * (n.flipX ? -1 : 1), ", ").concat(n.size / dn * (n.flipY ? -1 : 1), ") "),
    u += "rotate(".concat(n.rotate, "deg) "),
    u
}
var ah = `:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, 0));
          transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;
function Nd() {
    var e = kd
      , n = Sd
      , t = N.cssPrefix
      , r = N.replacementClass
      , i = ah;
    if (t !== e || r !== n) {
        var a = new RegExp("\\.".concat(e, "\\-"),"g")
          , o = new RegExp("\\--".concat(e, "\\-"),"g")
          , l = new RegExp("\\.".concat(n),"g");
        i = i.replace(a, ".".concat(t, "-")).replace(o, "--".concat(t, "-")).replace(l, ".".concat(r))
    }
    return i
}
var Rs = !1;
function Za() {
    N.autoAddCss && !Rs && (eh(Nd()),
    Rs = !0)
}
var oh = {
    mixout: function() {
        return {
            dom: {
                css: Nd,
                insertCss: Za
            }
        }
    },
    hooks: function() {
        return {
            beforeDOMElementCreation: function() {
                Za()
            },
            beforeI2svg: function() {
                Za()
            }
        }
    }
}
  , ln = Tn || {};
ln[on] || (ln[on] = {});
ln[on].styles || (ln[on].styles = {});
ln[on].hooks || (ln[on].hooks = {});
ln[on].shims || (ln[on].shims = []);
var be = ln[on]
  , Od = []
  , lh = function e() {
    H.removeEventListener("DOMContentLoaded", e),
    Zi = 1,
    Od.map(function(n) {
        return n()
    })
}
  , Zi = !1;
fn && (Zi = (H.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(H.readyState),
Zi || H.addEventListener("DOMContentLoaded", lh));
function uh(e) {
    fn && (Zi ? setTimeout(e, 0) : Od.push(e))
}
function Fr(e) {
    var n = e.tag
      , t = e.attributes
      , r = t === void 0 ? {} : t
      , i = e.children
      , a = i === void 0 ? [] : i;
    return typeof e == "string" ? Pd(e) : "<".concat(n, " ").concat(th(r), ">").concat(a.map(Fr).join(""), "</").concat(n, ">")
}
function Ms(e, n, t) {
    if (e && e[n] && e[n][t])
        return {
            prefix: n,
            iconName: t,
            icon: e[n][t]
        }
}
var Ja = function(n, t, r, i) {
    var a = Object.keys(n), o = a.length, l = t, u, s, d;
    for (r === void 0 ? (u = 1,
    d = n[a[0]]) : (u = 0,
    d = r); u < o; u++)
        s = a[u],
        d = l(d, n[s], s, n);
    return d
};
function sh(e) {
    for (var n = [], t = 0, r = e.length; t < r; ) {
        var i = e.charCodeAt(t++);
        if (i >= 55296 && i <= 56319 && t < r) {
            var a = e.charCodeAt(t++);
            (a & 64512) == 56320 ? n.push(((i & 1023) << 10) + (a & 1023) + 65536) : (n.push(i),
            t--)
        } else
            n.push(i)
    }
    return n
}
function qo(e) {
    var n = sh(e);
    return n.length === 1 ? n[0].toString(16) : null
}
function fh(e, n) {
    var t = e.length, r = e.charCodeAt(n), i;
    return r >= 55296 && r <= 56319 && t > n + 1 && (i = e.charCodeAt(n + 1),
    i >= 56320 && i <= 57343) ? (r - 55296) * 1024 + i - 56320 + 65536 : r
}
function js(e) {
    return Object.keys(e).reduce(function(n, t) {
        var r = e[t]
          , i = !!r.icon;
        return i ? n[r.iconName] = r.icon : n[t] = r,
        n
    }, {})
}
function el(e, n) {
    var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}
      , r = t.skipHooks
      , i = r === void 0 ? !1 : r
      , a = js(n);
    typeof be.hooks.addPack == "function" && !i ? be.hooks.addPack(e, js(n)) : be.styles[e] = x(x({}, be.styles[e] || {}), a),
    e === "fas" && el("fa", n)
}
var si, fi, ci, mt = be.styles, ch = be.shims, dh = (si = {},
ne(si, U, Object.values(Nr[U])),
ne(si, K, Object.values(Nr[K])),
si), du = null, Td = {}, Ad = {}, zd = {}, Ld = {}, Id = {}, ph = (fi = {},
ne(fi, U, Object.keys(_r[U])),
ne(fi, K, Object.keys(_r[K])),
fi);
function mh(e) {
    return ~Kv.indexOf(e)
}
function vh(e, n) {
    var t = n.split("-")
      , r = t[0]
      , i = t.slice(1).join("-");
    return r === e && i !== "" && !mh(i) ? i : null
}
var Rd = function() {
    var n = function(a) {
        return Ja(mt, function(o, l, u) {
            return o[u] = Ja(l, a, {}),
            o
        }, {})
    };
    Td = n(function(i, a, o) {
        if (a[3] && (i[a[3]] = o),
        a[2]) {
            var l = a[2].filter(function(u) {
                return typeof u == "number"
            });
            l.forEach(function(u) {
                i[u.toString(16)] = o
            })
        }
        return i
    }),
    Ad = n(function(i, a, o) {
        if (i[o] = o,
        a[2]) {
            var l = a[2].filter(function(u) {
                return typeof u == "string"
            });
            l.forEach(function(u) {
                i[u] = o
            })
        }
        return i
    }),
    Id = n(function(i, a, o) {
        var l = a[2];
        return i[o] = o,
        l.forEach(function(u) {
            i[u] = o
        }),
        i
    });
    var t = "far"in mt || N.autoFetchSvg
      , r = Ja(ch, function(i, a) {
        var o = a[0]
          , l = a[1]
          , u = a[2];
        return l === "far" && !t && (l = "fas"),
        typeof o == "string" && (i.names[o] = {
            prefix: l,
            iconName: u
        }),
        typeof o == "number" && (i.unicodes[o.toString(16)] = {
            prefix: l,
            iconName: u
        }),
        i
    }, {
        names: {},
        unicodes: {}
    });
    zd = r.names,
    Ld = r.unicodes,
    du = wa(N.styleDefault, {
        family: N.familyDefault
    })
};
qv(function(e) {
    du = wa(e.styleDefault, {
        family: N.familyDefault
    })
});
Rd();
function pu(e, n) {
    return (Td[e] || {})[n]
}
function hh(e, n) {
    return (Ad[e] || {})[n]
}
function Hn(e, n) {
    return (Id[e] || {})[n]
}
function Md(e) {
    return zd[e] || {
        prefix: null,
        iconName: null
    }
}
function gh(e) {
    var n = Ld[e]
      , t = pu("fas", e);
    return n || (t ? {
        prefix: "fas",
        iconName: t
    } : null) || {
        prefix: null,
        iconName: null
    }
}
function An() {
    return du
}
var mu = function() {
    return {
        prefix: null,
        iconName: null,
        rest: []
    }
};
function wa(e) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
      , t = n.family
      , r = t === void 0 ? U : t
      , i = _r[r][e]
      , a = Pr[r][e] || Pr[r][i]
      , o = e in be.styles ? e : null;
    return a || o || null
}
var Fs = (ci = {},
ne(ci, U, Object.keys(Nr[U])),
ne(ci, K, Object.keys(Nr[K])),
ci);
function ka(e) {
    var n, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = t.skipLookups, i = r === void 0 ? !1 : r, a = (n = {},
    ne(n, U, "".concat(N.cssPrefix, "-").concat(U)),
    ne(n, K, "".concat(N.cssPrefix, "-").concat(K)),
    n), o = null, l = U;
    (e.includes(a[U]) || e.some(function(s) {
        return Fs[U].includes(s)
    })) && (l = U),
    (e.includes(a[K]) || e.some(function(s) {
        return Fs[K].includes(s)
    })) && (l = K);
    var u = e.reduce(function(s, d) {
        var m = vh(N.cssPrefix, d);
        if (mt[d] ? (d = dh[l].includes(d) ? Hv[l][d] : d,
        o = d,
        s.prefix = d) : ph[l].indexOf(d) > -1 ? (o = d,
        s.prefix = wa(d, {
            family: l
        })) : m ? s.iconName = m : d !== N.replacementClass && d !== a[U] && d !== a[K] && s.rest.push(d),
        !i && s.prefix && s.iconName) {
            var v = o === "fa" ? Md(s.iconName) : {}
              , h = Hn(s.prefix, s.iconName);
            v.prefix && (o = null),
            s.iconName = v.iconName || h || s.iconName,
            s.prefix = v.prefix || s.prefix,
            s.prefix === "far" && !mt.far && mt.fas && !N.autoFetchSvg && (s.prefix = "fas")
        }
        return s
    }, mu());
    return (e.includes("fa-brands") || e.includes("fab")) && (u.prefix = "fab"),
    (e.includes("fa-duotone") || e.includes("fad")) && (u.prefix = "fad"),
    !u.prefix && l === K && (mt.fass || N.autoFetchSvg) && (u.prefix = "fass",
    u.iconName = Hn(u.prefix, u.iconName) || u.iconName),
    (u.prefix === "fa" || o === "fa") && (u.prefix = An() || "fas"),
    u
}
var yh = function() {
    function e() {
        Av(this, e),
        this.definitions = {}
    }
    return Lv(e, [{
        key: "add",
        value: function() {
            for (var t = this, r = arguments.length, i = new Array(r), a = 0; a < r; a++)
                i[a] = arguments[a];
            var o = i.reduce(this._pullDefinitions, {});
            Object.keys(o).forEach(function(l) {
                t.definitions[l] = x(x({}, t.definitions[l] || {}), o[l]),
                el(l, o[l]);
                var u = Nr[U][l];
                u && el(u, o[l]),
                Rd()
            })
        }
    }, {
        key: "reset",
        value: function() {
            this.definitions = {}
        }
    }, {
        key: "_pullDefinitions",
        value: function(t, r) {
            var i = r.prefix && r.iconName && r.icon ? {
                0: r
            } : r;
            return Object.keys(i).map(function(a) {
                var o = i[a]
                  , l = o.prefix
                  , u = o.iconName
                  , s = o.icon
                  , d = s[2];
                t[l] || (t[l] = {}),
                d.length > 0 && d.forEach(function(m) {
                    typeof m == "string" && (t[l][m] = s)
                }),
                t[l][u] = s
            }),
            t
        }
    }]),
    e
}()
  , Ds = []
  , vt = {}
  , Et = {}
  , wh = Object.keys(Et);
function kh(e, n) {
    var t = n.mixoutsTo;
    return Ds = e,
    vt = {},
    Object.keys(Et).forEach(function(r) {
        wh.indexOf(r) === -1 && delete Et[r]
    }),
    Ds.forEach(function(r) {
        var i = r.mixout ? r.mixout() : {};
        if (Object.keys(i).forEach(function(o) {
            typeof i[o] == "function" && (t[o] = i[o]),
            Gi(i[o]) === "object" && Object.keys(i[o]).forEach(function(l) {
                t[o] || (t[o] = {}),
                t[o][l] = i[o][l]
            })
        }),
        r.hooks) {
            var a = r.hooks();
            Object.keys(a).forEach(function(o) {
                vt[o] || (vt[o] = []),
                vt[o].push(a[o])
            })
        }
        r.provides && r.provides(Et)
    }),
    t
}
function nl(e, n) {
    for (var t = arguments.length, r = new Array(t > 2 ? t - 2 : 0), i = 2; i < t; i++)
        r[i - 2] = arguments[i];
    var a = vt[e] || [];
    return a.forEach(function(o) {
        n = o.apply(null, [n].concat(r))
    }),
    n
}
function Jn(e) {
    for (var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++)
        t[r - 1] = arguments[r];
    var i = vt[e] || [];
    i.forEach(function(a) {
        a.apply(null, t)
    })
}
function un() {
    var e = arguments[0]
      , n = Array.prototype.slice.call(arguments, 1);
    return Et[e] ? Et[e].apply(null, n) : void 0
}
function tl(e) {
    e.prefix === "fa" && (e.prefix = "fas");
    var n = e.iconName
      , t = e.prefix || An();
    if (n)
        return n = Hn(t, n) || n,
        Ms(jd.definitions, t, n) || Ms(be.styles, t, n)
}
var jd = new yh
  , Sh = function() {
    N.autoReplaceSvg = !1,
    N.observeMutations = !1,
    Jn("noAuto")
}
  , xh = {
    i2svg: function() {
        var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        return fn ? (Jn("beforeI2svg", n),
        un("pseudoElements2svg", n),
        un("i2svg", n)) : Promise.reject("Operation requires a DOM of some kind.")
    },
    watch: function() {
        var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}
          , t = n.autoReplaceSvgRoot;
        N.autoReplaceSvg === !1 && (N.autoReplaceSvg = !0),
        N.observeMutations = !0,
        uh(function() {
            Ch({
                autoReplaceSvgRoot: t
            }),
            Jn("watch", n)
        })
    }
}
  , Eh = {
    icon: function(n) {
        if (n === null)
            return null;
        if (Gi(n) === "object" && n.prefix && n.iconName)
            return {
                prefix: n.prefix,
                iconName: Hn(n.prefix, n.iconName) || n.iconName
            };
        if (Array.isArray(n) && n.length === 2) {
            var t = n[1].indexOf("fa-") === 0 ? n[1].slice(3) : n[1]
              , r = wa(n[0]);
            return {
                prefix: r,
                iconName: Hn(r, t) || t
            }
        }
        if (typeof n == "string" && (n.indexOf("".concat(N.cssPrefix, "-")) > -1 || n.match(Vv))) {
            var i = ka(n.split(" "), {
                skipLookups: !0
            });
            return {
                prefix: i.prefix || An(),
                iconName: Hn(i.prefix, i.iconName) || i.iconName
            }
        }
        if (typeof n == "string") {
            var a = An();
            return {
                prefix: a,
                iconName: Hn(a, n) || n
            }
        }
    }
}
  , Ne = {
    noAuto: Sh,
    config: N,
    dom: xh,
    parse: Eh,
    library: jd,
    findIconDefinition: tl,
    toHtml: Fr
}
  , Ch = function() {
    var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}
      , t = n.autoReplaceSvgRoot
      , r = t === void 0 ? H : t;
    (Object.keys(be.styles).length > 0 || N.autoFetchSvg) && fn && N.autoReplaceSvg && Ne.dom.i2svg({
        node: r
    })
};
function Sa(e, n) {
    return Object.defineProperty(e, "abstract", {
        get: n
    }),
    Object.defineProperty(e, "html", {
        get: function() {
            return e.abstract.map(function(r) {
                return Fr(r)
            })
        }
    }),
    Object.defineProperty(e, "node", {
        get: function() {
            if (fn) {
                var r = H.createElement("div");
                return r.innerHTML = e.html,
                r.children
            }
        }
    }),
    e
}
function _h(e) {
    var n = e.children
      , t = e.main
      , r = e.mask
      , i = e.attributes
      , a = e.styles
      , o = e.transform;
    if (cu(o) && t.found && !r.found) {
        var l = t.width
          , u = t.height
          , s = {
            x: l / u / 2,
            y: .5
        };
        i.style = ya(x(x({}, a), {}, {
            "transform-origin": "".concat(s.x + o.x / 16, "em ").concat(s.y + o.y / 16, "em")
        }))
    }
    return [{
        tag: "svg",
        attributes: i,
        children: n
    }]
}
function Ph(e) {
    var n = e.prefix
      , t = e.iconName
      , r = e.children
      , i = e.attributes
      , a = e.symbol
      , o = a === !0 ? "".concat(n, "-").concat(N.cssPrefix, "-").concat(t) : a;
    return [{
        tag: "svg",
        attributes: {
            style: "display: none;"
        },
        children: [{
            tag: "symbol",
            attributes: x(x({}, i), {}, {
                id: o
            }),
            children: r
        }]
    }]
}
function vu(e) {
    var n = e.icons
      , t = n.main
      , r = n.mask
      , i = e.prefix
      , a = e.iconName
      , o = e.transform
      , l = e.symbol
      , u = e.title
      , s = e.maskId
      , d = e.titleId
      , m = e.extra
      , v = e.watchable
      , h = v === void 0 ? !1 : v
      , y = r.found ? r : t
      , k = y.width
      , T = y.height
      , c = i === "fak"
      , f = [N.replacementClass, a ? "".concat(N.cssPrefix, "-").concat(a) : ""].filter(function(F) {
        return m.classes.indexOf(F) === -1
    }).filter(function(F) {
        return F !== "" || !!F
    }).concat(m.classes).join(" ")
      , p = {
        children: [],
        attributes: x(x({}, m.attributes), {}, {
            "data-prefix": i,
            "data-icon": a,
            class: f,
            role: m.attributes.role || "img",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 ".concat(k, " ").concat(T)
        })
    }
      , g = c && !~m.classes.indexOf("fa-fw") ? {
        width: "".concat(k / T * 16 * .0625, "em")
    } : {};
    h && (p.attributes[Zn] = ""),
    u && (p.children.push({
        tag: "title",
        attributes: {
            id: p.attributes["aria-labelledby"] || "title-".concat(d || Tr())
        },
        children: [u]
    }),
    delete p.attributes.title);
    var S = x(x({}, p), {}, {
        prefix: i,
        iconName: a,
        main: t,
        mask: r,
        maskId: s,
        transform: o,
        symbol: l,
        styles: x(x({}, g), m.styles)
    })
      , C = r.found && t.found ? un("generateAbstractMask", S) || {
        children: [],
        attributes: {}
    } : un("generateAbstractIcon", S) || {
        children: [],
        attributes: {}
    }
      , _ = C.children
      , O = C.attributes;
    return S.children = _,
    S.attributes = O,
    l ? Ph(S) : _h(S)
}
function bs(e) {
    var n = e.content
      , t = e.width
      , r = e.height
      , i = e.transform
      , a = e.title
      , o = e.extra
      , l = e.watchable
      , u = l === void 0 ? !1 : l
      , s = x(x(x({}, o.attributes), a ? {
        title: a
    } : {}), {}, {
        class: o.classes.join(" ")
    });
    u && (s[Zn] = "");
    var d = x({}, o.styles);
    cu(i) && (d.transform = ih({
        transform: i,
        startCentered: !0,
        width: t,
        height: r
    }),
    d["-webkit-transform"] = d.transform);
    var m = ya(d);
    m.length > 0 && (s.style = m);
    var v = [];
    return v.push({
        tag: "span",
        attributes: s,
        children: [n]
    }),
    a && v.push({
        tag: "span",
        attributes: {
            class: "sr-only"
        },
        children: [a]
    }),
    v
}
function Nh(e) {
    var n = e.content
      , t = e.title
      , r = e.extra
      , i = x(x(x({}, r.attributes), t ? {
        title: t
    } : {}), {}, {
        class: r.classes.join(" ")
    })
      , a = ya(r.styles);
    a.length > 0 && (i.style = a);
    var o = [];
    return o.push({
        tag: "span",
        attributes: i,
        children: [n]
    }),
    t && o.push({
        tag: "span",
        attributes: {
            class: "sr-only"
        },
        children: [t]
    }),
    o
}
var qa = be.styles;
function rl(e) {
    var n = e[0]
      , t = e[1]
      , r = e.slice(4)
      , i = au(r, 1)
      , a = i[0]
      , o = null;
    return Array.isArray(a) ? o = {
        tag: "g",
        attributes: {
            class: "".concat(N.cssPrefix, "-").concat(Wn.GROUP)
        },
        children: [{
            tag: "path",
            attributes: {
                class: "".concat(N.cssPrefix, "-").concat(Wn.SECONDARY),
                fill: "currentColor",
                d: a[0]
            }
        }, {
            tag: "path",
            attributes: {
                class: "".concat(N.cssPrefix, "-").concat(Wn.PRIMARY),
                fill: "currentColor",
                d: a[1]
            }
        }]
    } : o = {
        tag: "path",
        attributes: {
            fill: "currentColor",
            d: a
        }
    },
    {
        found: !0,
        width: n,
        height: t,
        icon: o
    }
}
var Oh = {
    found: !1,
    width: 512,
    height: 512
};
function Th(e, n) {
    !xd && !N.showMissingIcons && e && console.error('Icon with name "'.concat(e, '" and prefix "').concat(n, '" is missing.'))
}
function il(e, n) {
    var t = n;
    return n === "fa" && N.styleDefault !== null && (n = An()),
    new Promise(function(r, i) {
        if (un("missingIconAbstract"),
        t === "fa") {
            var a = Md(e) || {};
            e = a.iconName || e,
            n = a.prefix || n
        }
        if (e && n && qa[n] && qa[n][e]) {
            var o = qa[n][e];
            return r(rl(o))
        }
        Th(e, n),
        r(x(x({}, Oh), {}, {
            icon: N.showMissingIcons && e ? un("missingIconAbstract") || {} : {}
        }))
    }
    )
}
var $s = function() {}
  , al = N.measurePerformance && ri && ri.mark && ri.measure ? ri : {
    mark: $s,
    measure: $s
}
  , Gt = 'FA "6.5.2"'
  , Ah = function(n) {
    return al.mark("".concat(Gt, " ").concat(n, " begins")),
    function() {
        return Fd(n)
    }
}
  , Fd = function(n) {
    al.mark("".concat(Gt, " ").concat(n, " ends")),
    al.measure("".concat(Gt, " ").concat(n), "".concat(Gt, " ").concat(n, " begins"), "".concat(Gt, " ").concat(n, " ends"))
}
  , hu = {
    begin: Ah,
    end: Fd
}
  , Ci = function() {};
function Us(e) {
    var n = e.getAttribute ? e.getAttribute(Zn) : null;
    return typeof n == "string"
}
function zh(e) {
    var n = e.getAttribute ? e.getAttribute(lu) : null
      , t = e.getAttribute ? e.getAttribute(uu) : null;
    return n && t
}
function Lh(e) {
    return e && e.classList && e.classList.contains && e.classList.contains(N.replacementClass)
}
function Ih() {
    if (N.autoReplaceSvg === !0)
        return _i.replace;
    var e = _i[N.autoReplaceSvg];
    return e || _i.replace
}
function Rh(e) {
    return H.createElementNS("http://www.w3.org/2000/svg", e)
}
function Mh(e) {
    return H.createElement(e)
}
function Dd(e) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
      , t = n.ceFn
      , r = t === void 0 ? e.tag === "svg" ? Rh : Mh : t;
    if (typeof e == "string")
        return H.createTextNode(e);
    var i = r(e.tag);
    Object.keys(e.attributes || []).forEach(function(o) {
        i.setAttribute(o, e.attributes[o])
    });
    var a = e.children || [];
    return a.forEach(function(o) {
        i.appendChild(Dd(o, {
            ceFn: r
        }))
    }),
    i
}
function jh(e) {
    var n = " ".concat(e.outerHTML, " ");
    return n = "".concat(n, "Font Awesome fontawesome.com "),
    n
}
var _i = {
    replace: function(n) {
        var t = n[0];
        if (t.parentNode)
            if (n[1].forEach(function(i) {
                t.parentNode.insertBefore(Dd(i), t)
            }),
            t.getAttribute(Zn) === null && N.keepOriginalSource) {
                var r = H.createComment(jh(t));
                t.parentNode.replaceChild(r, t)
            } else
                t.remove()
    },
    nest: function(n) {
        var t = n[0]
          , r = n[1];
        if (~fu(t).indexOf(N.replacementClass))
            return _i.replace(n);
        var i = new RegExp("".concat(N.cssPrefix, "-.*"));
        if (delete r[0].attributes.id,
        r[0].attributes.class) {
            var a = r[0].attributes.class.split(" ").reduce(function(l, u) {
                return u === N.replacementClass || u.match(i) ? l.toSvg.push(u) : l.toNode.push(u),
                l
            }, {
                toNode: [],
                toSvg: []
            });
            r[0].attributes.class = a.toSvg.join(" "),
            a.toNode.length === 0 ? t.removeAttribute("class") : t.setAttribute("class", a.toNode.join(" "))
        }
        var o = r.map(function(l) {
            return Fr(l)
        }).join(`
`);
        t.setAttribute(Zn, ""),
        t.innerHTML = o
    }
};
function Ws(e) {
    e()
}
function bd(e, n) {
    var t = typeof n == "function" ? n : Ci;
    if (e.length === 0)
        t();
    else {
        var r = Ws;
        N.mutateApproach === Uv && (r = Tn.requestAnimationFrame || Ws),
        r(function() {
            var i = Ih()
              , a = hu.begin("mutate");
            e.map(i),
            a(),
            t()
        })
    }
}
var gu = !1;
function $d() {
    gu = !0
}
function ol() {
    gu = !1
}
var Ji = null;
function Hs(e) {
    if (Ls && N.observeMutations) {
        var n = e.treeCallback
          , t = n === void 0 ? Ci : n
          , r = e.nodeCallback
          , i = r === void 0 ? Ci : r
          , a = e.pseudoElementsCallback
          , o = a === void 0 ? Ci : a
          , l = e.observeMutationsRoot
          , u = l === void 0 ? H : l;
        Ji = new Ls(function(s) {
            if (!gu) {
                var d = An();
                Mt(s).forEach(function(m) {
                    if (m.type === "childList" && m.addedNodes.length > 0 && !Us(m.addedNodes[0]) && (N.searchPseudoElements && o(m.target),
                    t(m.target)),
                    m.type === "attributes" && m.target.parentNode && N.searchPseudoElements && o(m.target.parentNode),
                    m.type === "attributes" && Us(m.target) && ~Xv.indexOf(m.attributeName))
                        if (m.attributeName === "class" && zh(m.target)) {
                            var v = ka(fu(m.target))
                              , h = v.prefix
                              , y = v.iconName;
                            m.target.setAttribute(lu, h || d),
                            y && m.target.setAttribute(uu, y)
                        } else
                            Lh(m.target) && i(m.target)
                })
            }
        }
        ),
        fn && Ji.observe(u, {
            childList: !0,
            attributes: !0,
            characterData: !0,
            subtree: !0
        })
    }
}
function Fh() {
    Ji && Ji.disconnect()
}
function Dh(e) {
    var n = e.getAttribute("style")
      , t = [];
    return n && (t = n.split(";").reduce(function(r, i) {
        var a = i.split(":")
          , o = a[0]
          , l = a.slice(1);
        return o && l.length > 0 && (r[o] = l.join(":").trim()),
        r
    }, {})),
    t
}
function bh(e) {
    var n = e.getAttribute("data-prefix")
      , t = e.getAttribute("data-icon")
      , r = e.innerText !== void 0 ? e.innerText.trim() : ""
      , i = ka(fu(e));
    return i.prefix || (i.prefix = An()),
    n && t && (i.prefix = n,
    i.iconName = t),
    i.iconName && i.prefix || (i.prefix && r.length > 0 && (i.iconName = hh(i.prefix, e.innerText) || pu(i.prefix, qo(e.innerText))),
    !i.iconName && N.autoFetchSvg && e.firstChild && e.firstChild.nodeType === Node.TEXT_NODE && (i.iconName = e.firstChild.data)),
    i
}
function $h(e) {
    var n = Mt(e.attributes).reduce(function(i, a) {
        return i.name !== "class" && i.name !== "style" && (i[a.name] = a.value),
        i
    }, {})
      , t = e.getAttribute("title")
      , r = e.getAttribute("data-fa-title-id");
    return N.autoA11y && (t ? n["aria-labelledby"] = "".concat(N.replacementClass, "-title-").concat(r || Tr()) : (n["aria-hidden"] = "true",
    n.focusable = "false")),
    n
}
function Uh() {
    return {
        iconName: null,
        title: null,
        titleId: null,
        prefix: null,
        transform: Qe,
        symbol: !1,
        mask: {
            iconName: null,
            prefix: null,
            rest: []
        },
        maskId: null,
        extra: {
            classes: [],
            styles: {},
            attributes: {}
        }
    }
}
function Vs(e) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
        styleParser: !0
    }
      , t = bh(e)
      , r = t.iconName
      , i = t.prefix
      , a = t.rest
      , o = $h(e)
      , l = nl("parseNodeAttributes", {}, e)
      , u = n.styleParser ? Dh(e) : [];
    return x({
        iconName: r,
        title: e.getAttribute("title"),
        titleId: e.getAttribute("data-fa-title-id"),
        prefix: i,
        transform: Qe,
        mask: {
            iconName: null,
            prefix: null,
            rest: []
        },
        maskId: null,
        symbol: !1,
        extra: {
            classes: a,
            styles: u,
            attributes: o
        }
    }, l)
}
var Wh = be.styles;
function Ud(e) {
    var n = N.autoReplaceSvg === "nest" ? Vs(e, {
        styleParser: !1
    }) : Vs(e);
    return ~n.extra.classes.indexOf(Ed) ? un("generateLayersText", e, n) : un("generateSvgReplacementMutation", e, n)
}
var zn = new Set;
su.map(function(e) {
    zn.add("fa-".concat(e))
});
Object.keys(_r[U]).map(zn.add.bind(zn));
Object.keys(_r[K]).map(zn.add.bind(zn));
zn = Mr(zn);
function Bs(e) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
    if (!fn)
        return Promise.resolve();
    var t = H.documentElement.classList
      , r = function(m) {
        return t.add("".concat(Is, "-").concat(m))
    }
      , i = function(m) {
        return t.remove("".concat(Is, "-").concat(m))
    }
      , a = N.autoFetchSvg ? zn : su.map(function(d) {
        return "fa-".concat(d)
    }).concat(Object.keys(Wh));
    a.includes("fa") || a.push("fa");
    var o = [".".concat(Ed, ":not([").concat(Zn, "])")].concat(a.map(function(d) {
        return ".".concat(d, ":not([").concat(Zn, "])")
    })).join(", ");
    if (o.length === 0)
        return Promise.resolve();
    var l = [];
    try {
        l = Mt(e.querySelectorAll(o))
    } catch {}
    if (l.length > 0)
        r("pending"),
        i("complete");
    else
        return Promise.resolve();
    var u = hu.begin("onTree")
      , s = l.reduce(function(d, m) {
        try {
            var v = Ud(m);
            v && d.push(v)
        } catch (h) {
            xd || h.name === "MissingIcon" && console.error(h)
        }
        return d
    }, []);
    return new Promise(function(d, m) {
        Promise.all(s).then(function(v) {
            bd(v, function() {
                r("active"),
                r("complete"),
                i("pending"),
                typeof n == "function" && n(),
                u(),
                d()
            })
        }).catch(function(v) {
            u(),
            m(v)
        })
    }
    )
}
function Hh(e) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
    Ud(e).then(function(t) {
        t && bd([t], n)
    })
}
function Vh(e) {
    return function(n) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
          , r = (n || {}).icon ? n : tl(n || {})
          , i = t.mask;
        return i && (i = (i || {}).icon ? i : tl(i || {})),
        e(r, x(x({}, t), {}, {
            mask: i
        }))
    }
}
var Bh = function(n) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
      , r = t.transform
      , i = r === void 0 ? Qe : r
      , a = t.symbol
      , o = a === void 0 ? !1 : a
      , l = t.mask
      , u = l === void 0 ? null : l
      , s = t.maskId
      , d = s === void 0 ? null : s
      , m = t.title
      , v = m === void 0 ? null : m
      , h = t.titleId
      , y = h === void 0 ? null : h
      , k = t.classes
      , T = k === void 0 ? [] : k
      , c = t.attributes
      , f = c === void 0 ? {} : c
      , p = t.styles
      , g = p === void 0 ? {} : p;
    if (n) {
        var S = n.prefix
          , C = n.iconName
          , _ = n.icon;
        return Sa(x({
            type: "icon"
        }, n), function() {
            return Jn("beforeDOMElementCreation", {
                iconDefinition: n,
                params: t
            }),
            N.autoA11y && (v ? f["aria-labelledby"] = "".concat(N.replacementClass, "-title-").concat(y || Tr()) : (f["aria-hidden"] = "true",
            f.focusable = "false")),
            vu({
                icons: {
                    main: rl(_),
                    mask: u ? rl(u.icon) : {
                        found: !1,
                        width: null,
                        height: null,
                        icon: {}
                    }
                },
                prefix: S,
                iconName: C,
                transform: x(x({}, Qe), i),
                symbol: o,
                title: v,
                maskId: d,
                titleId: y,
                extra: {
                    attributes: f,
                    styles: g,
                    classes: T
                }
            })
        })
    }
}
  , Yh = {
    mixout: function() {
        return {
            icon: Vh(Bh)
        }
    },
    hooks: function() {
        return {
            mutationObserverCallbacks: function(t) {
                return t.treeCallback = Bs,
                t.nodeCallback = Hh,
                t
            }
        }
    },
    provides: function(n) {
        n.i2svg = function(t) {
            var r = t.node
              , i = r === void 0 ? H : r
              , a = t.callback
              , o = a === void 0 ? function() {}
            : a;
            return Bs(i, o)
        }
        ,
        n.generateSvgReplacementMutation = function(t, r) {
            var i = r.iconName
              , a = r.title
              , o = r.titleId
              , l = r.prefix
              , u = r.transform
              , s = r.symbol
              , d = r.mask
              , m = r.maskId
              , v = r.extra;
            return new Promise(function(h, y) {
                Promise.all([il(i, l), d.iconName ? il(d.iconName, d.prefix) : Promise.resolve({
                    found: !1,
                    width: 512,
                    height: 512,
                    icon: {}
                })]).then(function(k) {
                    var T = au(k, 2)
                      , c = T[0]
                      , f = T[1];
                    h([t, vu({
                        icons: {
                            main: c,
                            mask: f
                        },
                        prefix: l,
                        iconName: i,
                        transform: u,
                        symbol: s,
                        maskId: m,
                        title: a,
                        titleId: o,
                        extra: v,
                        watchable: !0
                    })])
                }).catch(y)
            }
            )
        }
        ,
        n.generateAbstractIcon = function(t) {
            var r = t.children
              , i = t.attributes
              , a = t.main
              , o = t.transform
              , l = t.styles
              , u = ya(l);
            u.length > 0 && (i.style = u);
            var s;
            return cu(o) && (s = un("generateAbstractTransformGrouping", {
                main: a,
                transform: o,
                containerWidth: a.width,
                iconWidth: a.width
            })),
            r.push(s || a.icon),
            {
                children: r,
                attributes: i
            }
        }
    }
}
  , Qh = {
    mixout: function() {
        return {
            layer: function(t) {
                var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
                  , i = r.classes
                  , a = i === void 0 ? [] : i;
                return Sa({
                    type: "layer"
                }, function() {
                    Jn("beforeDOMElementCreation", {
                        assembler: t,
                        params: r
                    });
                    var o = [];
                    return t(function(l) {
                        Array.isArray(l) ? l.map(function(u) {
                            o = o.concat(u.abstract)
                        }) : o = o.concat(l.abstract)
                    }),
                    [{
                        tag: "span",
                        attributes: {
                            class: ["".concat(N.cssPrefix, "-layers")].concat(Mr(a)).join(" ")
                        },
                        children: o
                    }]
                })
            }
        }
    }
}
  , Xh = {
    mixout: function() {
        return {
            counter: function(t) {
                var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
                  , i = r.title
                  , a = i === void 0 ? null : i
                  , o = r.classes
                  , l = o === void 0 ? [] : o
                  , u = r.attributes
                  , s = u === void 0 ? {} : u
                  , d = r.styles
                  , m = d === void 0 ? {} : d;
                return Sa({
                    type: "counter",
                    content: t
                }, function() {
                    return Jn("beforeDOMElementCreation", {
                        content: t,
                        params: r
                    }),
                    Nh({
                        content: t.toString(),
                        title: a,
                        extra: {
                            attributes: s,
                            styles: m,
                            classes: ["".concat(N.cssPrefix, "-layers-counter")].concat(Mr(l))
                        }
                    })
                })
            }
        }
    }
}
  , Kh = {
    mixout: function() {
        return {
            text: function(t) {
                var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
                  , i = r.transform
                  , a = i === void 0 ? Qe : i
                  , o = r.title
                  , l = o === void 0 ? null : o
                  , u = r.classes
                  , s = u === void 0 ? [] : u
                  , d = r.attributes
                  , m = d === void 0 ? {} : d
                  , v = r.styles
                  , h = v === void 0 ? {} : v;
                return Sa({
                    type: "text",
                    content: t
                }, function() {
                    return Jn("beforeDOMElementCreation", {
                        content: t,
                        params: r
                    }),
                    bs({
                        content: t,
                        transform: x(x({}, Qe), a),
                        title: l,
                        extra: {
                            attributes: m,
                            styles: h,
                            classes: ["".concat(N.cssPrefix, "-layers-text")].concat(Mr(s))
                        }
                    })
                })
            }
        }
    },
    provides: function(n) {
        n.generateLayersText = function(t, r) {
            var i = r.title
              , a = r.transform
              , o = r.extra
              , l = null
              , u = null;
            if (wd) {
                var s = parseInt(getComputedStyle(t).fontSize, 10)
                  , d = t.getBoundingClientRect();
                l = d.width / s,
                u = d.height / s
            }
            return N.autoA11y && !i && (o.attributes["aria-hidden"] = "true"),
            Promise.resolve([t, bs({
                content: t.innerHTML,
                width: l,
                height: u,
                transform: a,
                title: i,
                extra: o,
                watchable: !0
            })])
        }
    }
}
  , Gh = new RegExp('"',"ug")
  , Ys = [1105920, 1112319];
function Zh(e) {
    var n = e.replace(Gh, "")
      , t = fh(n, 0)
      , r = t >= Ys[0] && t <= Ys[1]
      , i = n.length === 2 ? n[0] === n[1] : !1;
    return {
        value: qo(i ? n[0] : n),
        isSecondary: r || i
    }
}
function Qs(e, n) {
    var t = "".concat($v).concat(n.replace(":", "-"));
    return new Promise(function(r, i) {
        if (e.getAttribute(t) !== null)
            return r();
        var a = Mt(e.children)
          , o = a.filter(function(_) {
            return _.getAttribute(Jo) === n
        })[0]
          , l = Tn.getComputedStyle(e, n)
          , u = l.getPropertyValue("font-family").match(Bv)
          , s = l.getPropertyValue("font-weight")
          , d = l.getPropertyValue("content");
        if (o && !u)
            return e.removeChild(o),
            r();
        if (u && d !== "none" && d !== "") {
            var m = l.getPropertyValue("content")
              , v = ~["Sharp"].indexOf(u[2]) ? K : U
              , h = ~["Solid", "Regular", "Light", "Thin", "Duotone", "Brands", "Kit"].indexOf(u[2]) ? Pr[v][u[2].toLowerCase()] : Yv[v][s]
              , y = Zh(m)
              , k = y.value
              , T = y.isSecondary
              , c = u[0].startsWith("FontAwesome")
              , f = pu(h, k)
              , p = f;
            if (c) {
                var g = gh(k);
                g.iconName && g.prefix && (f = g.iconName,
                h = g.prefix)
            }
            if (f && !T && (!o || o.getAttribute(lu) !== h || o.getAttribute(uu) !== p)) {
                e.setAttribute(t, p),
                o && e.removeChild(o);
                var S = Uh()
                  , C = S.extra;
                C.attributes[Jo] = n,
                il(f, h).then(function(_) {
                    var O = vu(x(x({}, S), {}, {
                        icons: {
                            main: _,
                            mask: mu()
                        },
                        prefix: h,
                        iconName: p,
                        extra: C,
                        watchable: !0
                    }))
                      , F = H.createElementNS("http://www.w3.org/2000/svg", "svg");
                    n === "::before" ? e.insertBefore(F, e.firstChild) : e.appendChild(F),
                    F.outerHTML = O.map(function(I) {
                        return Fr(I)
                    }).join(`
`),
                    e.removeAttribute(t),
                    r()
                }).catch(i)
            } else
                r()
        } else
            r()
    }
    )
}
function Jh(e) {
    return Promise.all([Qs(e, "::before"), Qs(e, "::after")])
}
function qh(e) {
    return e.parentNode !== document.head && !~Wv.indexOf(e.tagName.toUpperCase()) && !e.getAttribute(Jo) && (!e.parentNode || e.parentNode.tagName !== "svg")
}
function Xs(e) {
    if (fn)
        return new Promise(function(n, t) {
            var r = Mt(e.querySelectorAll("*")).filter(qh).map(Jh)
              , i = hu.begin("searchPseudoElements");
            $d(),
            Promise.all(r).then(function() {
                i(),
                ol(),
                n()
            }).catch(function() {
                i(),
                ol(),
                t()
            })
        }
        )
}
var e0 = {
    hooks: function() {
        return {
            mutationObserverCallbacks: function(t) {
                return t.pseudoElementsCallback = Xs,
                t
            }
        }
    },
    provides: function(n) {
        n.pseudoElements2svg = function(t) {
            var r = t.node
              , i = r === void 0 ? H : r;
            N.searchPseudoElements && Xs(i)
        }
    }
}
  , Ks = !1
  , n0 = {
    mixout: function() {
        return {
            dom: {
                unwatch: function() {
                    $d(),
                    Ks = !0
                }
            }
        }
    },
    hooks: function() {
        return {
            bootstrap: function() {
                Hs(nl("mutationObserverCallbacks", {}))
            },
            noAuto: function() {
                Fh()
            },
            watch: function(t) {
                var r = t.observeMutationsRoot;
                Ks ? ol() : Hs(nl("mutationObserverCallbacks", {
                    observeMutationsRoot: r
                }))
            }
        }
    }
}
  , Gs = function(n) {
    var t = {
        size: 16,
        x: 0,
        y: 0,
        flipX: !1,
        flipY: !1,
        rotate: 0
    };
    return n.toLowerCase().split(" ").reduce(function(r, i) {
        var a = i.toLowerCase().split("-")
          , o = a[0]
          , l = a.slice(1).join("-");
        if (o && l === "h")
            return r.flipX = !0,
            r;
        if (o && l === "v")
            return r.flipY = !0,
            r;
        if (l = parseFloat(l),
        isNaN(l))
            return r;
        switch (o) {
        case "grow":
            r.size = r.size + l;
            break;
        case "shrink":
            r.size = r.size - l;
            break;
        case "left":
            r.x = r.x - l;
            break;
        case "right":
            r.x = r.x + l;
            break;
        case "up":
            r.y = r.y - l;
            break;
        case "down":
            r.y = r.y + l;
            break;
        case "rotate":
            r.rotate = r.rotate + l;
            break
        }
        return r
    }, t)
}
  , t0 = {
    mixout: function() {
        return {
            parse: {
                transform: function(t) {
                    return Gs(t)
                }
            }
        }
    },
    hooks: function() {
        return {
            parseNodeAttributes: function(t, r) {
                var i = r.getAttribute("data-fa-transform");
                return i && (t.transform = Gs(i)),
                t
            }
        }
    },
    provides: function(n) {
        n.generateAbstractTransformGrouping = function(t) {
            var r = t.main
              , i = t.transform
              , a = t.containerWidth
              , o = t.iconWidth
              , l = {
                transform: "translate(".concat(a / 2, " 256)")
            }
              , u = "translate(".concat(i.x * 32, ", ").concat(i.y * 32, ") ")
              , s = "scale(".concat(i.size / 16 * (i.flipX ? -1 : 1), ", ").concat(i.size / 16 * (i.flipY ? -1 : 1), ") ")
              , d = "rotate(".concat(i.rotate, " 0 0)")
              , m = {
                transform: "".concat(u, " ").concat(s, " ").concat(d)
            }
              , v = {
                transform: "translate(".concat(o / 2 * -1, " -256)")
            }
              , h = {
                outer: l,
                inner: m,
                path: v
            };
            return {
                tag: "g",
                attributes: x({}, h.outer),
                children: [{
                    tag: "g",
                    attributes: x({}, h.inner),
                    children: [{
                        tag: r.icon.tag,
                        children: r.icon.children,
                        attributes: x(x({}, r.icon.attributes), h.path)
                    }]
                }]
            }
        }
    }
}
  , eo = {
    x: 0,
    y: 0,
    width: "100%",
    height: "100%"
};
function Zs(e) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
    return e.attributes && (e.attributes.fill || n) && (e.attributes.fill = "black"),
    e
}
function r0(e) {
    return e.tag === "g" ? e.children : [e]
}
var i0 = {
    hooks: function() {
        return {
            parseNodeAttributes: function(t, r) {
                var i = r.getAttribute("data-fa-mask")
                  , a = i ? ka(i.split(" ").map(function(o) {
                    return o.trim()
                })) : mu();
                return a.prefix || (a.prefix = An()),
                t.mask = a,
                t.maskId = r.getAttribute("data-fa-mask-id"),
                t
            }
        }
    },
    provides: function(n) {
        n.generateAbstractMask = function(t) {
            var r = t.children
              , i = t.attributes
              , a = t.main
              , o = t.mask
              , l = t.maskId
              , u = t.transform
              , s = a.width
              , d = a.icon
              , m = o.width
              , v = o.icon
              , h = rh({
                transform: u,
                containerWidth: m,
                iconWidth: s
            })
              , y = {
                tag: "rect",
                attributes: x(x({}, eo), {}, {
                    fill: "white"
                })
            }
              , k = d.children ? {
                children: d.children.map(Zs)
            } : {}
              , T = {
                tag: "g",
                attributes: x({}, h.inner),
                children: [Zs(x({
                    tag: d.tag,
                    attributes: x(x({}, d.attributes), h.path)
                }, k))]
            }
              , c = {
                tag: "g",
                attributes: x({}, h.outer),
                children: [T]
            }
              , f = "mask-".concat(l || Tr())
              , p = "clip-".concat(l || Tr())
              , g = {
                tag: "mask",
                attributes: x(x({}, eo), {}, {
                    id: f,
                    maskUnits: "userSpaceOnUse",
                    maskContentUnits: "userSpaceOnUse"
                }),
                children: [y, c]
            }
              , S = {
                tag: "defs",
                children: [{
                    tag: "clipPath",
                    attributes: {
                        id: p
                    },
                    children: r0(v)
                }, g]
            };
            return r.push(S, {
                tag: "rect",
                attributes: x({
                    fill: "currentColor",
                    "clip-path": "url(#".concat(p, ")"),
                    mask: "url(#".concat(f, ")")
                }, eo)
            }),
            {
                children: r,
                attributes: i
            }
        }
    }
}
  , a0 = {
    provides: function(n) {
        var t = !1;
        Tn.matchMedia && (t = Tn.matchMedia("(prefers-reduced-motion: reduce)").matches),
        n.missingIconAbstract = function() {
            var r = []
              , i = {
                fill: "currentColor"
            }
              , a = {
                attributeType: "XML",
                repeatCount: "indefinite",
                dur: "2s"
            };
            r.push({
                tag: "path",
                attributes: x(x({}, i), {}, {
                    d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
                })
            });
            var o = x(x({}, a), {}, {
                attributeName: "opacity"
            })
              , l = {
                tag: "circle",
                attributes: x(x({}, i), {}, {
                    cx: "256",
                    cy: "364",
                    r: "28"
                }),
                children: []
            };
            return t || l.children.push({
                tag: "animate",
                attributes: x(x({}, a), {}, {
                    attributeName: "r",
                    values: "28;14;28;28;14;28;"
                })
            }, {
                tag: "animate",
                attributes: x(x({}, o), {}, {
                    values: "1;0;1;1;0;1;"
                })
            }),
            r.push(l),
            r.push({
                tag: "path",
                attributes: x(x({}, i), {}, {
                    opacity: "1",
                    d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
                }),
                children: t ? [] : [{
                    tag: "animate",
                    attributes: x(x({}, o), {}, {
                        values: "1;0;0;0;0;1;"
                    })
                }]
            }),
            t || r.push({
                tag: "path",
                attributes: x(x({}, i), {}, {
                    opacity: "0",
                    d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
                }),
                children: [{
                    tag: "animate",
                    attributes: x(x({}, o), {}, {
                        values: "0;0;1;1;0;0;"
                    })
                }]
            }),
            {
                tag: "g",
                attributes: {
                    class: "missing"
                },
                children: r
            }
        }
    }
}
  , o0 = {
    hooks: function() {
        return {
            parseNodeAttributes: function(t, r) {
                var i = r.getAttribute("data-fa-symbol")
                  , a = i === null ? !1 : i === "" ? !0 : i;
                return t.symbol = a,
                t
            }
        }
    }
}
  , l0 = [oh, Yh, Qh, Xh, Kh, e0, n0, t0, i0, a0, o0];
kh(l0, {
    mixoutsTo: Ne
});
Ne.noAuto;
Ne.config;
Ne.library;
Ne.dom;
var ll = Ne.parse;
Ne.findIconDefinition;
Ne.toHtml;
var u0 = Ne.icon;
Ne.layer;
Ne.text;
Ne.counter;
var Wd = {
    exports: {}
}
  , s0 = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
  , f0 = s0
  , c0 = f0;
function Hd() {}
function Vd() {}
Vd.resetWarningCache = Hd;
var d0 = function() {
    function e(r, i, a, o, l, u) {
        if (u !== c0) {
            var s = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
            throw s.name = "Invariant Violation",
            s
        }
    }
    e.isRequired = e;
    function n() {
        return e
    }
    var t = {
        array: e,
        bigint: e,
        bool: e,
        func: e,
        number: e,
        object: e,
        string: e,
        symbol: e,
        any: e,
        arrayOf: n,
        element: e,
        elementType: e,
        instanceOf: n,
        node: e,
        objectOf: n,
        oneOf: n,
        oneOfType: n,
        shape: n,
        exact: n,
        checkPropTypes: Vd,
        resetWarningCache: Hd
    };
    return t.PropTypes = t,
    t
};
Wd.exports = d0();
var p0 = Wd.exports;
const R = nf(p0);
function Js(e, n) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        n && (r = r.filter(function(i) {
            return Object.getOwnPropertyDescriptor(e, i).enumerable
        })),
        t.push.apply(t, r)
    }
    return t
}
function Be(e) {
    for (var n = 1; n < arguments.length; n++) {
        var t = arguments[n] != null ? arguments[n] : {};
        n % 2 ? Js(Object(t), !0).forEach(function(r) {
            ht(e, r, t[r])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Js(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
        })
    }
    return e
}
function qi(e) {
    "@babel/helpers - typeof";
    return qi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(n) {
        return typeof n
    }
    : function(n) {
        return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
    }
    ,
    qi(e)
}
function ht(e, n, t) {
    return n in e ? Object.defineProperty(e, n, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[n] = t,
    e
}
function m0(e, n) {
    if (e == null)
        return {};
    var t = {}, r = Object.keys(e), i, a;
    for (a = 0; a < r.length; a++)
        i = r[a],
        !(n.indexOf(i) >= 0) && (t[i] = e[i]);
    return t
}
function v0(e, n) {
    if (e == null)
        return {};
    var t = m0(e, n), r, i;
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (i = 0; i < a.length; i++)
            r = a[i],
            !(n.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (t[r] = e[r])
    }
    return t
}
function ul(e) {
    return h0(e) || g0(e) || y0(e) || w0()
}
function h0(e) {
    if (Array.isArray(e))
        return sl(e)
}
function g0(e) {
    if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
        return Array.from(e)
}
function y0(e, n) {
    if (e) {
        if (typeof e == "string")
            return sl(e, n);
        var t = Object.prototype.toString.call(e).slice(8, -1);
        if (t === "Object" && e.constructor && (t = e.constructor.name),
        t === "Map" || t === "Set")
            return Array.from(e);
        if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
            return sl(e, n)
    }
}
function sl(e, n) {
    (n == null || n > e.length) && (n = e.length);
    for (var t = 0, r = new Array(n); t < n; t++)
        r[t] = e[t];
    return r
}
function w0() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}
function k0(e) {
    var n, t = e.beat, r = e.fade, i = e.beatFade, a = e.bounce, o = e.shake, l = e.flash, u = e.spin, s = e.spinPulse, d = e.spinReverse, m = e.pulse, v = e.fixedWidth, h = e.inverse, y = e.border, k = e.listItem, T = e.flip, c = e.size, f = e.rotation, p = e.pull, g = (n = {
        "fa-beat": t,
        "fa-fade": r,
        "fa-beat-fade": i,
        "fa-bounce": a,
        "fa-shake": o,
        "fa-flash": l,
        "fa-spin": u,
        "fa-spin-reverse": d,
        "fa-spin-pulse": s,
        "fa-pulse": m,
        "fa-fw": v,
        "fa-inverse": h,
        "fa-border": y,
        "fa-li": k,
        "fa-flip": T === !0,
        "fa-flip-horizontal": T === "horizontal" || T === "both",
        "fa-flip-vertical": T === "vertical" || T === "both"
    },
    ht(n, "fa-".concat(c), typeof c < "u" && c !== null),
    ht(n, "fa-rotate-".concat(f), typeof f < "u" && f !== null && f !== 0),
    ht(n, "fa-pull-".concat(p), typeof p < "u" && p !== null),
    ht(n, "fa-swap-opacity", e.swapOpacity),
    n);
    return Object.keys(g).map(function(S) {
        return g[S] ? S : null
    }).filter(function(S) {
        return S
    })
}
function S0(e) {
    return e = e - 0,
    e === e
}
function Bd(e) {
    return S0(e) ? e : (e = e.replace(/[\-_\s]+(.)?/g, function(n, t) {
        return t ? t.toUpperCase() : ""
    }),
    e.substr(0, 1).toLowerCase() + e.substr(1))
}
var x0 = ["style"];
function E0(e) {
    return e.charAt(0).toUpperCase() + e.slice(1)
}
function C0(e) {
    return e.split(";").map(function(n) {
        return n.trim()
    }).filter(function(n) {
        return n
    }).reduce(function(n, t) {
        var r = t.indexOf(":")
          , i = Bd(t.slice(0, r))
          , a = t.slice(r + 1).trim();
        return i.startsWith("webkit") ? n[E0(i)] = a : n[i] = a,
        n
    }, {})
}
function Yd(e, n) {
    var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    if (typeof n == "string")
        return n;
    var r = (n.children || []).map(function(u) {
        return Yd(e, u)
    })
      , i = Object.keys(n.attributes || {}).reduce(function(u, s) {
        var d = n.attributes[s];
        switch (s) {
        case "class":
            u.attrs.className = d,
            delete n.attributes.class;
            break;
        case "style":
            u.attrs.style = C0(d);
            break;
        default:
            s.indexOf("aria-") === 0 || s.indexOf("data-") === 0 ? u.attrs[s.toLowerCase()] = d : u.attrs[Bd(s)] = d
        }
        return u
    }, {
        attrs: {}
    })
      , a = t.style
      , o = a === void 0 ? {} : a
      , l = v0(t, x0);
    return i.attrs.style = Be(Be({}, i.attrs.style), o),
    e.apply(void 0, [n.tag, Be(Be({}, i.attrs), l)].concat(ul(r)))
}
var Qd = !1;
try {
    Qd = !0
} catch {}
function _0() {
    if (!Qd && console && typeof console.error == "function") {
        var e;
        (e = console).error.apply(e, arguments)
    }
}
function qs(e) {
    if (e && qi(e) === "object" && e.prefix && e.iconName && e.icon)
        return e;
    if (ll.icon)
        return ll.icon(e);
    if (e === null)
        return null;
    if (e && qi(e) === "object" && e.prefix && e.iconName)
        return e;
    if (Array.isArray(e) && e.length === 2)
        return {
            prefix: e[0],
            iconName: e[1]
        };
    if (typeof e == "string")
        return {
            prefix: "fas",
            iconName: e
        }
}
function no(e, n) {
    return Array.isArray(n) && n.length > 0 || !Array.isArray(n) && n ? ht({}, e, n) : {}
}
var ef = {
    border: !1,
    className: "",
    mask: null,
    maskId: null,
    fixedWidth: !1,
    inverse: !1,
    flip: !1,
    icon: null,
    listItem: !1,
    pull: null,
    pulse: !1,
    rotation: null,
    size: null,
    spin: !1,
    spinPulse: !1,
    spinReverse: !1,
    beat: !1,
    fade: !1,
    beatFade: !1,
    bounce: !1,
    shake: !1,
    symbol: !1,
    title: "",
    titleId: null,
    transform: null,
    swapOpacity: !1
}
  , ea = ml.forwardRef(function(e, n) {
    var t = Be(Be({}, ef), e)
      , r = t.icon
      , i = t.mask
      , a = t.symbol
      , o = t.className
      , l = t.title
      , u = t.titleId
      , s = t.maskId
      , d = qs(r)
      , m = no("classes", [].concat(ul(k0(t)), ul((o || "").split(" "))))
      , v = no("transform", typeof t.transform == "string" ? ll.transform(t.transform) : t.transform)
      , h = no("mask", qs(i))
      , y = u0(d, Be(Be(Be(Be({}, m), v), h), {}, {
        symbol: a,
        title: l,
        titleId: u,
        maskId: s
    }));
    if (!y)
        return _0("Could not find icon", d),
        null;
    var k = y.abstract
      , T = {
        ref: n
    };
    return Object.keys(t).forEach(function(c) {
        ef.hasOwnProperty(c) || (T[c] = t[c])
    }),
    P0(k[0], T)
});
ea.displayName = "FontAwesomeIcon";
ea.propTypes = {
    beat: R.bool,
    border: R.bool,
    beatFade: R.bool,
    bounce: R.bool,
    className: R.string,
    fade: R.bool,
    flash: R.bool,
    mask: R.oneOfType([R.object, R.array, R.string]),
    maskId: R.string,
    fixedWidth: R.bool,
    inverse: R.bool,
    flip: R.oneOf([!0, !1, "horizontal", "vertical", "both"]),
    icon: R.oneOfType([R.object, R.array, R.string]),
    listItem: R.bool,
    pull: R.oneOf(["right", "left"]),
    pulse: R.bool,
    rotation: R.oneOf([0, 90, 180, 270]),
    shake: R.bool,
    size: R.oneOf(["2xs", "xs", "sm", "lg", "xl", "2xl", "1x", "2x", "3x", "4x", "5x", "6x", "7x", "8x", "9x", "10x"]),
    spin: R.bool,
    spinPulse: R.bool,
    spinReverse: R.bool,
    symbol: R.oneOfType([R.bool, R.string]),
    title: R.string,
    titleId: R.string,
    transform: R.oneOfType([R.string, R.object]),
    swapOpacity: R.bool
};
var P0 = Yd.bind(null, ml.createElement)
  , N0 = {
    prefix: "fas",
    iconName: "minus",
    icon: [448, 512, [8211, 8722, 10134, "subtract"], "f068", "M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"]
}
  , O0 = {
    prefix: "fas",
    iconName: "plus",
    icon: [448, 512, [10133, 61543, "add"], "2b", "M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"]
};
const T0 = ({item: e, removeFromCart: n, incrementQuantity: t, decrementQuantity: r}) => z.jsxs("div", {
    className: "cart-item",
    children: [z.jsx("h4", {
        children: e.name
    }), z.jsxs("div", {
        className: "item-row",
        children: [z.jsxs("p", {
            children: ["$", e.price * e.quantity]
        }), z.jsxs("div", {
            className: "quantity-controls",
            children: [z.jsx("button", {
                onClick: () => r(e.id),
                children: z.jsx(ea, {
                    icon: N0
                })
            }), z.jsx("span", {
                children: e.quantity
            }), z.jsx("button", {
                onClick: () => t(e.id),
                children: z.jsx(ea, {
                    icon: O0
                })
            })]
        }), z.jsx("button", {
            onClick: () => n(e.id),
            children: "Remove"
        })]
    })]
})
  , A0 = ({cart: e, removeFromCart: n, incrementQuantity: t, decrementQuantity: r}) => {
    const i = e.reduce( (a, o) => a + o.price * o.quantity, 0);
    return z.jsxs("div", {
        className: "cart",
        children: [z.jsx("h2", {
            children: "Shopping Cart"
        }), e.map(a => z.jsx(T0, {
            item: a,
            removeFromCart: n,
            incrementQuantity: t,
            decrementQuantity: r
        }, a.id)), z.jsxs("h3", {
            children: ["Total: $", i.toFixed(2)]
        })]
    })
}
;
function z0() {
    return z.jsx(z.Fragment, {
        children: z.jsxs("div", {
            className: "Navbar",
            children: [z.jsx("img", {
                src: "https://raw.githubusercontent.com/Archie3105/Upskill-mafia-Assignment-18/main/logo.jpg",
                alt: "logo"
            }), z.jsxs("ul", {
                children: [z.jsx("li", {
                    children: z.jsx("a", {
                        href: "#",
                        children: "Home"
                    })
                }), z.jsx("li", {
                    children: z.jsx("a", {
                        href: "#",
                        children: "Categories"
                    })
                }), z.jsx("li", {
                    children: z.jsx("a", {
                        href: "#",
                        children: "About Us"
                    })
                })]
            })]
        })
    })
}
const L0 = () => {
    const [e,n] = ta.useState([])
      , t = o => {
        n(l => l.find(s => s.id === o.id) ? l.map(s => s.id === o.id ? {
            ...s,
            quantity: s.quantity + 1
        } : s) : [...l, {
            ...o,
            quantity: 1
        }])
    }
      , r = o => {
        n(l => l.filter(u => u.id !== o))
    }
      , i = o => {
        n(l => l.map(u => u.id === o ? {
            ...u,
            quantity: u.quantity + 1
        } : u))
    }
      , a = o => {
        n(l => l.find(s => s.id === o).quantity === 1 ? l.filter(s => s.id !== o) : l.map(s => s.id === o ? {
            ...s,
            quantity: s.quantity - 1
        } : s))
    }
    ;
    return z.jsxs("div", {
        className: "main",
        children: [z.jsx(z0, {}), z.jsxs("div", {
            className: "app",
            children: [z.jsx(Tv, {
                addToCart: t
            }), z.jsx(A0, {
                cart: e,
                removeFromCart: r,
                incrementQuantity: i,
                decrementQuantity: a
            })]
        })]
    })
}
;
to.createRoot(document.getElementById("root")).render(z.jsx(ml.StrictMode, {
    children: z.jsx(L0, {})
}));
