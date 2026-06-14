(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0,15198,(e,t,r) => {
    var i = {
            675: function(e,t) {
                "use strict";
                t.byteLength = function(e) {
                    var t = l(e),
                        r = t[0],
                        i = t[1];
                    return (r + i) * 3 / 4 - i
                },t.toByteArray = function(e) {
                    var t,r,n = l(e),
                        a = n[0],
                        o = n[1],
                        h = new s((a + o) * 3 / 4 - o),
                        u = 0,
                        c = o > 0 ? a - 4 : a;
                    for (r = 0; r < c; r += 4) t = i[e.charCodeAt(r)] << 18 | i[e.charCodeAt(r + 1)] << 12 | i[e.charCodeAt(r + 2)] << 6 | i[e.charCodeAt(r + 3)],h[u++] = t >> 16 & 255,h[u++] = t >> 8 & 255,h[u++] = 255 & t;
                    return 2 === o && (t = i[e.charCodeAt(r)] << 2 | i[e.charCodeAt(r + 1)] >> 4,h[u++] = 255 & t),1 === o && (t = i[e.charCodeAt(r)] << 10 | i[e.charCodeAt(r + 1)] << 4 | i[e.charCodeAt(r + 2)] >> 2,h[u++] = t >> 8 & 255,h[u++] = 255 & t),h
                },t.fromByteArray = function(e) {
                    for (var t,i = e.length,s = i % 3,n = [],a = 0,o = i - s; a < o; a += 16383) n.push(function(e,t,i) {
                        for (var s,n = [],a = t; a < i; a += 3) s = (e[a] << 16 & 0xff0000) + (e[a + 1] << 8 & 65280) + (255 & e[a + 2]),n.push(r[s >> 18 & 63] + r[s >> 12 & 63] + r[s >> 6 & 63] + r[63 & s]);
                        return n.join("")
                    }(e,a,a + 16383 > o ? o : a + 16383));
                    return 1 === s ? n.push(r[(t = e[i - 1]) >> 2] + r[t << 4 & 63] + "==") : 2 === s && n.push(r[(t = (e[i - 2] << 8) + e[i - 1]) >> 10] + r[t >> 4 & 63] + r[t << 2 & 63] + "="),n.join("")
                };
                for (var r = [],i = [],s = "u" > typeof Uint8Array ? Uint8Array : Array,n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",a = 0,o = n.length; a < o; ++a) r[a] = n[a],i[n.charCodeAt(a)] = a;

                function l(e) {
                    var t = e.length;
                    if (t % 4 > 0) throw Error("Invalid string.Length must be a multiple of 4");
                    var r = e.indexOf("="); - 1 === r && (r = t);
                    var i = r === t ? 0 : 4 - r % 4;
                    return [r,i]
                }
                i[45] = 62,i[95] = 63
            },
            72: function(e,t,r) {
                "use strict";
                var i = r(675),
                    s = r(783),
                    n = "function" == typeof Symbol && "function" == typeof Symbol.for ? Symbol.for("nodejs.util.inspect.custom") : null;

                function a(e) {
                    if (e > 0x7fffffff) throw RangeError('The value "' + e + '" is invalid for option "size"');
                    var t = new Uint8Array(e);
                    return Object.setPrototypeOf(t,o.prototype),t
                }

                function o(e,t,r) {
                    if ("number" == typeof e) {
                        if ("string" == typeof t) throw TypeError('The "string" argument must be of type string.Received type number');
                        return u(e)
                    }
                    return l(e,t,r)
                }

                function l(e,t,r) {
                    if ("string" == typeof e) {
                        var i = e,
                            s = t;
                        if (("string"!= typeof s || "" === s) && (s = "utf8"),!o.isEncoding(s)) throw TypeError("Unknown encoding: " + s);
                        var n = 0 | p(i,s),
                            l = a(n),
                            h = l.write(i,s);
                        return h!== n && (l = l.slice(0,h)),l
                    }
                    if (ArrayBuffer.isView(e)) return c(e);
                    if (null == e) throw TypeError("The first argument must be one of type string,Buffer,ArrayBuffer,Array,or Array-like Object.Received type " + typeof e);
                    if (P(e,ArrayBuffer) || e && P(e.buffer,ArrayBuffer) || "u" > typeof SharedArrayBuffer && (P(e,SharedArrayBuffer) || e && P(e.buffer,SharedArrayBuffer))) return function(e,t,r) {
                        var i;
                        if (t < 0 || e.byteLength < t) throw RangeError('"offset" is outside of buffer bounds');
                        if (e.byteLength < t + (r || 0)) throw RangeError('"length" is outside of buffer bounds');
                        return Object.setPrototypeOf(i = void 0 === t && void 0 === r ? new Uint8Array(e) : void 0 === r ? new Uint8Array(e,t) : new Uint8Array(e,t,r),o.prototype),i
                    }(e,t,r);
                    if ("number" == typeof e) throw TypeError('The "value" argument must not be of type number.Received type number');
                    var u = e.valueOf && e.valueOf();
                    if (null!= u && u!== e) return o.from(u,t,r);
                    var f = function(e) {
                        if (o.isBuffer(e)) {
                            var t = 0 | d(e.length),
                                r = a(t);
                            return 0 === r.length || e.copy(r,0,0,t),r
                        }
                        return void 0!== e.length ? "number"!= typeof e.length || function(e) {
                            return e!= e
                        }(e.length) ? a(0) : c(e) : "Buffer" === e.type && Array.isArray(e.data) ? c(e.data) : void 0
                    }(e);
                    if (f) return f;
                    if ("u" > typeof Symbol && null!= Symbol.toPrimitive && "function" == typeof e[Symbol.toPrimitive]) return o.from(e[Symbol.toPrimitive]("string"),t,r);
                    throw TypeError("The first argument must be one of type string,Buffer,ArrayBuffer,Array,or Array-like Object.Received type " + typeof e)
                }

                function h(e) {
                    if ("number"!= typeof e) throw TypeError('"size" argument must be of type number');
                    if (e < 0) throw RangeError('The value "' + e + '" is invalid for option "size"')
                }

                function u(e) {
                    return h(e),a(e < 0 ? 0 : 0 | d(e))
                }

                function c(e) {
                    for (var t = e.length < 0 ? 0 : 0 | d(e.length),r = a(t),i = 0; i < t; i += 1) r[i] = 255 & e[i];
                    return r
                }
                t.Buffer = o,t.SlowBuffer = function(e) {
                    return +e!= e && (e = 0),o.alloc(+e)
                },t.INSPECT_MAX_BYTES = 50,t.kMaxLength = 0x7fffffff,o.TYPED_ARRAY_SUPPORT = function() {
                    try {
                        var e = new Uint8Array(1),
                            t = {
                                foo: function() {
                                    return 42
                                }
                            };
                        return Object.setPrototypeOf(t,Uint8Array.prototype),Object.setPrototypeOf(e,t),42 === e.foo()
                    } catch (e) {
                        return!1
                    }
                }(),!o.TYPED_ARRAY_SUPPORT && "u" > typeof console && "function" == typeof console.error && console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x.Use `buffer` v4.x if you require old browser support."),Object.defineProperty(o.prototype,"parent",{
                    enumerable:!0,
                    get: function() {
                        if (o.isBuffer(this)) return this.buffer
                    }
                }),Object.defineProperty(o.prototype,"offset",{
                    enumerable:!0,
                    get: function() {
                        if (o.isBuffer(this)) return this.byteOffset
                    }
                }),o.poolSize = 8192,o.from = function(e,t,r) {
                    return l(e,t,r)
                },Object.setPrototypeOf(o.prototype,Uint8Array.prototype),Object.setPrototypeOf(o,Uint8Array),o.alloc = function(e,t,r) {
                    return (h(e),e <= 0) ? a(e) : void 0!== t ? "string" == typeof r ? a(e).fill(t,r) : a(e).fill(t) : a(e)
                },o.allocUnsafe = function(e) {
                    return u(e)
                },o.allocUnsafeSlow = function(e) {
                    return u(e)
                };

                function d(e) {
                    if (e >= 0x7fffffff) throw RangeError("Attempt to allocate Buffer larger than maximum size: 0x7fffffff bytes");
                    return 0 | e
                }

                function p(e,t) {
                    if (o.isBuffer(e)) return e.length;
                    if (ArrayBuffer.isView(e) || P(e,ArrayBuffer)) return e.byteLength;
                    if ("string"!= typeof e) throw TypeError('The "string" argument must be one of type string,Buffer,or ArrayBuffer.Received type ' + typeof e);
                    var r = e.length,
                        i = arguments.length > 2 &&!0 === arguments[2];
                    if (!i && 0 === r) return 0;
                    for (var s =!1;;) switch (t) {
                        case "ascii":
                        case "latin1":
                        case "binary":
                            return r;
                        case "utf8":
                        case "utf-8":
                            return E(e).length;
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return 2 * r;
                        case "hex":
                            return r >>> 1;
                        case "base64":
                            return A(e).length;
                        default:
                            if (s) return i ? -1 : E(e).length;
                            t = ("" + t).toLowerCase(),s =!0
                    }
                }

                function f(e,t,r) {
                    var s,n,a,o =!1;
                    if ((void 0 === t || t < 0) && (t = 0),t > this.length || ((void 0 === r || r > this.length) && (r = this.length),r <= 0 || (r >>>= 0) <= (t >>>= 0))) return "";
                    for (e || (e = "utf8");;) switch (e) {
                        case "hex":
                            return function(e,t,r) {
                                var i = e.length;
                                (!t || t < 0) && (t = 0),(!r || r < 0 || r > i) && (r = i);
                                for (var s = "",n = t; n < r; ++n) s += j[e[n]];
                                return s
                            }(this,t,r);
                        case "utf8":
                        case "utf-8":
                            return v(this,t,r);
                        case "ascii":
                            return function(e,t,r) {
                                var i = "";
                                r = Math.min(e.length,r);
                                for (var s = t; s < r; ++s) i += String.fromCharCode(127 & e[s]);
                                return i
                            }(this,t,r);
                        case "latin1":
                        case "binary":
                            return function(e,t,r) {
                                var i = "";
                                r = Math.min(e.length,r);
                                for (var s = t; s < r; ++s) i += String.fromCharCode(e[s]);
                                return i
                            }(this,t,r);
                        case "base64":
                            return s = this,n = t,a = r,0 === n && a === s.length ? i.fromByteArray(s) : i.fromByteArray(s.slice(n,a));
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return function(e,t,r) {
                                for (var i = e.slice(t,r),s = "",n = 0; n < i.length; n += 2) s += String.fromCharCode(i[n] + 256 * i[n + 1]);
                                return s
                            }(this,t,r);
                        default:
                            if (o) throw TypeError("Unknown encoding: " + e);
                            e = (e + "").toLowerCase(),o =!0
                    }
                }

                function m(e,t,r) {
                    var i = e[t];
                    e[t] = e[r],e[r] = i
                }

                function g(e,t,r,i,s) {
                    var n;
                    if (0 === e.length) return -1;
                    if ("string" == typeof r ? (i = r,r = 0) : r > 0x7fffffff ? r = 0x7fffffff : r < -0x80000000 && (r = -0x80000000),(n = r *= 1)!= n && (r = s ? 0 : e.length - 1),r < 0 && (r = e.length + r),r >= e.length)
                        if (s) return -1;
                        else r = e.length - 1;
                    else if (r < 0)
                        if (!s) return -1;
                        else r = 0;
                    if ("string" == typeof t && (t = o.from(t,i)),o.isBuffer(t)) return 0 === t.length ? -1 : y(e,t,r,i,s);
                    if ("number" == typeof t) {
                        if (t &= 255,"function" == typeof Uint8Array.prototype.indexOf)
                            if (s) return Uint8Array.prototype.indexOf.call(e,t,r);
                            else return Uint8Array.prototype.lastIndexOf.call(e,t,r);
                        return y(e,[t],r,i,s)
                    }
                    throw TypeError("val must be string,number or Buffer")
                }

                function y(e,t,r,i,s) {
                    var n,a = 1,
                        o = e.length,
                        l = t.length;
                    if (void 0!== i && ("ucs2" === (i = String(i).toLowerCase()) || "ucs-2" === i || "utf16le" === i || "utf-16le" === i)) {
                        if (e.length < 2 || t.length < 2) return -1;
                        a = 2,o /= 2,l /= 2,r /= 2
                    }

                    function h(e,t) {
                        return 1 === a ? e[t] : e.readUInt16BE(t * a)
                    }
                    if (s) {
                        var u = -1;
                        for (n = r; n < o; n++)
                            if (h(e,n) === h(t,-1 === u ? 0 : n - u)) {
                                if (-1 === u && (u = n),n - u + 1 === l) return u * a
                            } else -1!== u && (n -= n - u),u = -1
                    } else
                        for (r + l > o && (r = o - l),n = r; n >= 0; n--) {
                            for (var c =!0,d = 0; d < l; d++)
                                if (h(e,n + d)!== h(t,d)) {
                                    c =!1;
                                    break
                                }
                            if (c) return n
                        }
                    return -1
                }
                o.isBuffer = function(e) {
                    return null!= e &&!0 === e._isBuffer && e!== o.prototype
                },o.compare = function(e,t) {
                    if (P(e,Uint8Array) && (e = o.from(e,e.offset,e.byteLength)),P(t,Uint8Array) && (t = o.from(t,t.offset,t.byteLength)),!o.isBuffer(e) ||!o.isBuffer(t)) throw TypeError('The "buf1","buf2" arguments must be one of type Buffer or Uint8Array');
                    if (e === t) return 0;
                    for (var r = e.length,i = t.length,s = 0,n = Math.min(r,i); s < n; ++s)
                        if (e[s]!== t[s]) {
                            r = e[s],i = t[s];
                            break
                        }
                    return r < i ? -1 : +(i < r)
                },o.isEncoding = function(e) {
                    switch (String(e).toLowerCase()) {
                        case "hex":
                        case "utf8":
                        case "utf-8":
                        case "ascii":
                        case "latin1":
                        case "binary":
                        case "base64":
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return!0;
                        default:
                            return!1
                    }
                },o.concat = function(e,t) {
                    if (!Array.isArray(e)) throw TypeError('"list" argument must be an Array of Buffers');
                    if (0 === e.length) return o.alloc(0);
                    if (void 0 === t)
                        for (r = 0,t = 0; r < e.length; ++r) t += e[r].length;
                    var r,i = o.allocUnsafe(t),
                        s = 0;
                    for (r = 0; r < e.length; ++r) {
                        var n = e[r];
                        if (P(n,Uint8Array) && (n = o.from(n)),!o.isBuffer(n)) throw TypeError('"list" argument must be an Array of Buffers');
                        n.copy(i,s),s += n.length
                    }
                    return i
                },o.byteLength = p,o.prototype._isBuffer =!0,o.prototype.swap16 = function() {
                    var e = this.length;
                    if (e % 2!= 0) throw RangeError("Buffer size must be a multiple of 16-bits");
                    for (var t = 0; t < e; t += 2) m(this,t,t + 1);
                    return this
                },o.prototype.swap32 = function() {
                    var e = this.length;
                    if (e % 4!= 0) throw RangeError("Buffer size must be a multiple of 32-bits");
                    for (var t = 0; t < e; t += 4) m(this,t,t + 3),m(this,t + 1,t + 2);
                    return this
                },o.prototype.swap64 = function() {
                    var e = this.length;
                    if (e % 8!= 0) throw RangeError("Buffer size must be a multiple of 64-bits");
                    for (var t = 0; t < e; t += 8) m(this,t,t + 7),m(this,t + 1,t + 6),m(this,t + 2,t + 5),m(this,t + 3,t + 4);
                    return this
                },o.prototype.toString = function() {
                    var e = this.length;
                    return 0 === e ? "" : 0 == arguments.length ? v(this,0,e) : f.apply(this,arguments)
                },o.prototype.toLocaleString = o.prototype.toString,o.prototype.equals = function(e) {
                    if (!o.isBuffer(e)) throw TypeError("Argument must be a Buffer");
                    return this === e || 0 === o.compare(this,e)
                },o.prototype.inspect = function() {
                    var e = "",
                        r = t.INSPECT_MAX_BYTES;
                    return e = this.toString("hex",0,r).replace(/(.{2})/g,"$1 ").trim(),this.length > r && (e += " ..."),"<Buffer " + e + ">"
                },n && (o.prototype[n] = o.prototype.inspect),o.prototype.compare = function(e,t,r,i,s) {
                    if (P(e,Uint8Array) && (e = o.from(e,e.offset,e.byteLength)),!o.isBuffer(e)) throw TypeError('The "target" argument must be one of type Buffer or Uint8Array.Received type ' + typeof e);
                    if (void 0 === t && (t = 0),void 0 === r && (r = e ? e.length : 0),void 0 === i && (i = 0),void 0 === s && (s = this.length),t < 0 || r > e.length || i < 0 || s > this.length) throw RangeError("out of range index");
                    if (i >= s && t >= r) return 0;
                    if (i >= s) return -1;
                    if (t >= r) return 1;
                    if (t >>>= 0,r >>>= 0,i >>>= 0,s >>>= 0,this === e) return 0;
                    for (var n = s - i,a = r - t,l = Math.min(n,a),h = this.slice(i,s),u = e.slice(t,r),c = 0; c < l; ++c)
                        if (h[c]!== u[c]) {
                            n = h[c],a = u[c];
                            break
                        }
                    return n < a ? -1 : +(a < n)
                },o.prototype.includes = function(e,t,r) {
                    return -1!== this.indexOf(e,t,r)
                },o.prototype.indexOf = function(e,t,r) {
                    return g(this,e,t,r,!0)
                },o.prototype.lastIndexOf = function(e,t,r) {
                    return g(this,e,t,r,!1)
                };

                function v(e,t,r) {
                    r = Math.min(e.length,r);
                    for (var i = [],s = t; s < r;) {
                        var n,a,o,l,h = e[s],
                            u = null,
                            c = h > 239 ? 4 : h > 223 ? 3 : h > 191 ? 2 : 1;
                        if (s + c <= r) switch (c) {
                            case 1:
                                h < 128 && (u = h);
                                break;
                            case 2:
                                (192 & (n = e[s + 1])) == 128 && (l = (31 & h) << 6 | 63 & n) > 127 && (u = l);
                                break;
                            case 3:
                                n = e[s + 1],a = e[s + 2],(192 & n) == 128 && (192 & a) == 128 && (l = (15 & h) << 12 | (63 & n) << 6 | 63 & a) > 2047 && (l < 55296 || l > 57343) && (u = l);
                                break;
                            case 4:
                                n = e[s + 1],a = e[s + 2],o = e[s + 3],(192 & n) == 128 && (192 & a) == 128 && (192 & o) == 128 && (l = (15 & h) << 18 | (63 & n) << 12 | (63 & a) << 6 | 63 & o) > 65535 && l < 1114112 && (u = l)
                        }
                        null === u ? (u = 65533,c = 1) : u > 65535 && (u -= 65536,i.push(u >>> 10 & 1023 | 55296),u = 56320 | 1023 & u),i.push(u),s += c
                    }
                    var d = i,
                        p = d.length;
                    if (p <= 4096) return String.fromCharCode.apply(String,d);
                    for (var f = "",m = 0; m < p;) f += String.fromCharCode.apply(String,d.slice(m,m += 4096));
                    return f
                }

                function w(e,t,r) {
                    if (e % 1!= 0 || e < 0) throw RangeError("offset is not uint");
                    if (e + t > r) throw RangeError("Trying to access beyond buffer length")
                }

                function b(e,t,r,i,s,n) {
                    if (!o.isBuffer(e)) throw TypeError('"buffer" argument must be a Buffer instance');
                    if (t > s || t < n) throw RangeError('"value" argument is out of bounds');
                    if (r + i > e.length) throw RangeError("Index out of range")
                }

                function x(e,t,r,i,s,n) {
                    if (r + i > e.length || r < 0) throw RangeError("Index out of range")
                }

                function k(e,t,r,i,n) {
                    return t *= 1,r >>>= 0,n || x(e,t,r,4,34028234663852886e22,-34028234663852886e22),s.write(e,t,r,i,23,4),r + 4
                }

                function S(e,t,r,i,n) {
                    return t *= 1,r >>>= 0,n || x(e,t,r,8,17976931348623157e292,-17976931348623157e292),s.write(e,t,r,i,52,8),r + 8
                }
                o.prototype.write = function(e,t,r,i) {
                    if (void 0 === t) i = "utf8",r = this.length,t = 0;
                    else if (void 0 === r && "string" == typeof t) i = t,r = this.length,t = 0;
                    else if (isFinite(t)) t >>>= 0,isFinite(r) ? (r >>>= 0,void 0 === i && (i = "utf8")) : (i = r,r = void 0);
                    else throw Error("Buffer.write(string,encoding,offset[,length]) is no longer supported");
                    var s,n,a,o,l,h,u,c,d = this.length - t;
                    if ((void 0 === r || r > d) && (r = d),e.length > 0 && (r < 0 || t < 0) || t > this.length) throw RangeError("Attempt to write outside buffer bounds");
                    i || (i = "utf8");
                    for (var p =!1;;) switch (i) {
                        case "hex":
                            return function(e,t,r,i) {
                                r = Number(r) || 0;
                                var s = e.length - r;
                                i ? (i = Number(i)) > s && (i = s) : i = s;
                                var n = t.length;
                                i > n / 2 && (i = n / 2);
                                for (var a = 0; a < i; ++a) {
                                    var o,l = parseInt(t.substr(2 * a,2),16);
                                    if ((o = l)!= o) break;
                                    e[r + a] = l
                                }
                                return a
                            }(this,e,t,r);
                        case "utf8":
                        case "utf-8":
                            return s = t,n = r,R(E(e,this.length - s),this,s,n);
                        case "ascii":
                            return a = t,o = r,R(T(e),this,a,o);
                        case "latin1":
                        case "binary":
                            return function(e,t,r,i) {
                                return R(T(t),e,r,i)
                            }(this,e,t,r);
                        case "base64":
                            return l = t,h = r,R(A(e),this,l,h);
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return u = t,c = r,R(function(e,t) {
                                for (var r,i,s = [],n = 0; n < e.length &&!((t -= 2) < 0); ++n) i = (r = e.charCodeAt(n)) >> 8,s.push(r % 256),s.push(i);
                                return s
                            }(e,this.length - u),this,u,c);
                        default:
                            if (p) throw TypeError("Unknown encoding: " + i);
                            i = ("" + i).toLowerCase(),p =!0
                    }
                },o.prototype.toJSON = function() {
                    return {
                        type: "Buffer",
                        data: Array.prototype.slice.call(this._arr || this,0)
                    }
                },o.prototype.slice = function(e,t) {
                    var r = this.length;
                    e = ~~e,t = void 0 === t ? r : ~~t,e < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r),t < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r),t < e && (t = e);
                    var i = this.subarray(e,t);
                    return Object.setPrototypeOf(i,o.prototype),i
                },o.prototype.readUIntLE = function(e,t,r) {
                    e >>>= 0,t >>>= 0,r || w(e,t,this.length);
                    for (var i = this[e],s = 1,n = 0; ++n < t && (s *= 256);) i += this[e + n] * s;
                    return i
                },o.prototype.readUIntBE = function(e,t,r) {
                    e >>>= 0,t >>>= 0,r || w(e,t,this.length);
                    for (var i = this[e + --t],s = 1; t > 0 && (s *= 256);) i += this[e + --t] * s;
                    return i
                },o.prototype.readUInt8 = function(e,t) {
                    return e >>>= 0,t || w(e,1,this.length),this[e]
                },o.prototype.readUInt16LE = function(e,t) {
                    return e >>>= 0,t || w(e,2,this.length),this[e] | this[e + 1] << 8
                },o.prototype.readUInt16BE = function(e,t) {
                    return e >>>= 0,t || w(e,2,this.length),this[e] << 8 | this[e + 1]
                },o.prototype.readUInt32LE = function(e,t) {
                    return e >>>= 0,t || w(e,4,this.length),(this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 0x1000000 * this[e + 3]
                },o.prototype.readUInt32BE = function(e,t) {
                    return e >>>= 0,t || w(e,4,this.length),0x1000000 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3])
                },o.prototype.readIntLE = function(e,t,r) {
                    e >>>= 0,t >>>= 0,r || w(e,t,this.length);
                    for (var i = this[e],s = 1,n = 0; ++n < t && (s *= 256);) i += this[e + n] * s;
                    return i >= (s *= 128) && (i -= Math.pow(2,8 * t)),i
                },o.prototype.readIntBE = function(e,t,r) {
                    e >>>= 0,t >>>= 0,r || w(e,t,this.length);
                    for (var i = t,s = 1,n = this[e + --i]; i > 0 && (s *= 256);) n += this[e + --i] * s;
                    return n >= (s *= 128) && (n -= Math.pow(2,8 * t)),n
                },o.prototype.readInt8 = function(e,t) {
                    return (e >>>= 0,t || w(e,1,this.length),128 & this[e]) ? -((255 - this[e] + 1) * 1) : this[e]
                },o.prototype.readInt16LE = function(e,t) {
                    e >>>= 0,t || w(e,2,this.length);
                    var r = this[e] | this[e + 1] << 8;
                    return 32768 & r ? 0xffff0000 | r : r
                },o.prototype.readInt16BE = function(e,t) {
                    e >>>= 0,t || w(e,2,this.length);
                    var r = this[e + 1] | this[e] << 8;
                    return 32768 & r ? 0xffff0000 | r : r
                },o.prototype.readInt32LE = function(e,t) {
                    return e >>>= 0,t || w(e,4,this.length),this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24
                },o.prototype.readInt32BE = function(e,t) {
                    return e >>>= 0,t || w(e,4,this.length),this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]
                },o.prototype.readFloatLE = function(e,t) {
                    return e >>>= 0,t || w(e,4,this.length),s.read(this,e,!0,23,4)
                },o.prototype.readFloatBE = function(e,t) {
                    return e >>>= 0,t || w(e,4,this.length),s.read(this,e,!1,23,4)
                },o.prototype.readDoubleLE = function(e,t) {
                    return e >>>= 0,t || w(e,8,this.length),s.read(this,e,!0,52,8)
                },o.prototype.readDoubleBE = function(e,t) {
                    return e >>>= 0,t || w(e,8,this.length),s.read(this,e,!1,52,8)
                },o.prototype.writeUIntLE = function(e,t,r,i) {
                    if (e *= 1,t >>>= 0,r >>>= 0,!i) {
                        var s = Math.pow(2,8 * r) - 1;
                        b(this,e,t,r,s,0)
                    }
                    var n = 1,
                        a = 0;
                    for (this[t] = 255 & e; ++a < r && (n *= 256);) this[t + a] = e / n & 255;
                    return t + r
                },o.prototype.writeUIntBE = function(e,t,r,i) {
                    if (e *= 1,t >>>= 0,r >>>= 0,!i) {
                        var s = Math.pow(2,8 * r) - 1;
                        b(this,e,t,r,s,0)
                    }
                    var n = r - 1,
                        a = 1;
                    for (this[t + n] = 255 & e; --n >= 0 && (a *= 256);) this[t + n] = e / a & 255;
                    return t + r
                },o.prototype.writeUInt8 = function(e,t,r) {
                    return e *= 1,t >>>= 0,r || b(this,e,t,1,255,0),this[t] = 255 & e,t + 1
                },o.prototype.writeUInt16LE = function(e,t,r) {
                    return e *= 1,t >>>= 0,r || b(this,e,t,2,65535,0),this[t] = 255 & e,this[t + 1] = e >>> 8,t + 2
                },o.prototype.writeUInt16BE = function(e,t,r) {
                    return e *= 1,t >>>= 0,r || b(this,e,t,2,65535,0),this[t] = e >>> 8,this[t + 1] = 255 & e,t + 2
                },o.prototype.writeUInt32LE = function(e,t,r) {
                    return e *= 1,t >>>= 0,r || b(this,e,t,4,0xffffffff,0),this[t + 3] = e >>> 24,this[t + 2] = e >>> 16,this[t + 1] = e >>> 8,this[t] = 255 & e,t + 4
                },o.prototype.writeUInt32BE = function(e,t,r) {
                    return e *= 1,t >>>= 0,r || b(this,e,t,4,0xffffffff,0),this[t] = e >>> 24,this[t + 1] = e >>> 16,this[t + 2] = e >>> 8,this[t + 3] = 255 & e,t + 4
                },o.prototype.writeIntLE = function(e,t,r,i) {
                    if (e *= 1,t >>>= 0,!i) {
                        var s = Math.pow(2,8 * r - 1);
                        b(this,e,t,r,s - 1,-s)
                    }
                    var n = 0,
                        a = 1,
                        o = 0;
                    for (this[t] = 255 & e; ++n < r && (a *= 256);) e < 0 && 0 === o && 0!== this[t + n - 1] && (o = 1),this[t + n] = (e / a | 0) - o & 255;
                    return t + r
                },o.prototype.writeIntBE = function(e,t,r,i) {
                    if (e *= 1,t >>>= 0,!i) {
                        var s = Math.pow(2,8 * r - 1);
                        b(this,e,t,r,s - 1,-s)
                    }
                    var n = r - 1,
                        a = 1,
                        o = 0;
                    for (this[t + n] = 255 & e; --n >= 0 && (a *= 256);) e < 0 && 0 === o && 0!== this[t + n + 1] && (o = 1),this[t + n] = (e / a | 0) - o & 255;
                    return t + r
                },o.prototype.writeInt8 = function(e,t,r) {
                    return e *= 1,t >>>= 0,r || b(this,e,t,1,127,-128),e < 0 && (e = 255 + e + 1),this[t] = 255 & e,t + 1
                },o.prototype.writeInt16LE = function(e,t,r) {
                    return e *= 1,t >>>= 0,r || b(this,e,t,2,32767,-32768),this[t] = 255 & e,this[t + 1] = e >>> 8,t + 2
                },o.prototype.writeInt16BE = function(e,t,r) {
                    return e *= 1,t >>>= 0,r || b(this,e,t,2,32767,-32768),this[t] = e >>> 8,this[t + 1] = 255 & e,t + 2
                },o.prototype.writeInt32LE = function(e,t,r) {
                    return e *= 1,t >>>= 0,r || b(this,e,t,4,0x7fffffff,-0x80000000),this[t] = 255 & e,this[t + 1] = e >>> 8,this[t + 2] = e >>> 16,this[t + 3] = e >>> 24,t + 4
                },o.prototype.writeInt32BE = function(e,t,r) {
                    return e *= 1,t >>>= 0,r || b(this,e,t,4,0x7fffffff,-0x80000000),e < 0 && (e = 0xffffffff + e + 1),this[t] = e >>> 24,this[t + 1] = e >>> 16,this[t + 2] = e >>> 8,this[t + 3] = 255 & e,t + 4
                },o.prototype.writeFloatLE = function(e,t,r) {
                    return k(this,e,t,!0,r)
                },o.prototype.writeFloatBE = function(e,t,r) {
                    return k(this,e,t,!1,r)
                },o.prototype.writeDoubleLE = function(e,t,r) {
                    return S(this,e,t,!0,r)
                },o.prototype.writeDoubleBE = function(e,t,r) {
                    return S(this,e,t,!1,r)
                },o.prototype.copy = function(e,t,r,i) {
                    if (!o.isBuffer(e)) throw TypeError("argument should be a Buffer");
                    if (r || (r = 0),i || 0 === i || (i = this.length),t >= e.length && (t = e.length),t || (t = 0),i > 0 && i < r && (i = r),i === r || 0 === e.length || 0 === this.length) return 0;
                    if (t < 0) throw RangeError("targetStart out of bounds");
                    if (r < 0 || r >= this.length) throw RangeError("Index out of range");
                    if (i < 0) throw RangeError("sourceEnd out of bounds");
                    i > this.length && (i = this.length),e.length - t < i - r && (i = e.length - t + r);
                    var s = i - r;
                    if (this === e && "function" == typeof Uint8Array.prototype.copyWithin) this.copyWithin(t,r,i);
                    else if (this === e && r < t && t < i)
                        for (var n = s - 1; n >= 0; --n) e[n + t] = this[n + r];
                    else Uint8Array.prototype.set.call(e,this.subarray(r,i),t);
                    return s
                },o.prototype.fill = function(e,t,r,i) {
                    if ("string" == typeof e) {
                        if ("string" == typeof t ? (i = t,t = 0,r = this.length) : "string" == typeof r && (i = r,r = this.length),void 0!== i && "string"!= typeof i) throw TypeError("encoding must be a string");
                        if ("string" == typeof i &&!o.isEncoding(i)) throw TypeError("Unknown encoding: " + i);
                        if (1 === e.length) {
                            var s,n = e.charCodeAt(0);
                            ("utf8" === i && n < 128 || "latin1" === i) && (e = n)
                        }
                    } else "number" == typeof e ? e &= 255 : "boolean" == typeof e && (e = Number(e));
                    if (t < 0 || this.length < t || this.length < r) throw RangeError("Out of range index");
                    if (r <= t) return this;
                    if (t >>>= 0,r = void 0 === r ? this.length : r >>> 0,e || (e = 0),"number" == typeof e)
                        for (s = t; s < r; ++s) this[s] = e;
                    else {
                        var a = o.isBuffer(e) ? e : o.from(e,i),
                            l = a.length;
                        if (0 === l) throw TypeError('The value "' + e + '" is invalid for argument "value"');
                        for (s = 0; s < r - t; ++s) this[s + t] = a[s % l]
                    }
                    return this
                };
                var _ = /[^+/0-9A-Za-z-_]/g;

                function E(e,t) {
                    t = t || 1 / 0;
                    for (var r,i = e.length,s = null,n = [],a = 0; a < i; ++a) {
                        if ((r = e.charCodeAt(a)) > 55295 && r < 57344) {
                            if (!s) {
                                if (r > 56319 || a + 1 === i) {
                                    (t -= 3) > -1 && n.push(239,191,189);
                                    continue
                                }
                                s = r;
                                continue
                            }
                            if (r < 56320) {
                                (t -= 3) > -1 && n.push(239,191,189),s = r;
                                continue
                            }
                            r = (s - 55296 << 10 | r - 56320) + 65536
                        } else s && (t -= 3) > -1 && n.push(239,191,189);
                        if (s = null,r < 128) {
                            if ((t -= 1) < 0) break;
                            n.push(r)
                        } else if (r < 2048) {
                            if ((t -= 2) < 0) break;
                            n.push(r >> 6 | 192,63 & r | 128)
                        } else if (r < 65536) {
                            if ((t -= 3) < 0) break;
                            n.push(r >> 12 | 224,r >> 6 & 63 | 128,63 & r | 128)
                        } else if (r < 1114112) {
                            if ((t -= 4) < 0) break;
                            n.push(r >> 18 | 240,r >> 12 & 63 | 128,r >> 6 & 63 | 128,63 & r | 128)
                        } else throw Error("Invalid code point")
                    }
                    return n
                }

                function T(e) {
                    for (var t = [],r = 0; r < e.length; ++r) t.push(255 & e.charCodeAt(r));
                    return t
                }

                function A(e) {
                    return i.toByteArray(function(e) {
                        if ((e = (e = e.split("=")[0]).trim().replace(_,"")).length < 2) return "";
                        for (; e.length % 4!= 0;) e += "=";
                        return e
                    }(e))
                }

                function R(e,t,r,i) {
                    for (var s = 0; s < i &&!(s + r >= t.length) &&!(s >= e.length); ++s) t[s + r] = e[s];
                    return s
                }

                function P(e,t) {
                    return e instanceof t || null!= e && null!= e.constructor && null!= e.constructor.name && e.constructor.name === t.name
                }
                var j = function() {
                    for (var e = "0123456789abcdef",t = Array(256),r = 0; r < 16; ++r)
                        for (var i = 16 * r,s = 0; s < 16; ++s) t[i + s] = e[r] + e[s];
                    return t
                }()
            },
            783: function(e,t) {
                t.read = function(e,t,r,i,s) {
                    var n,a,o = 8 * s - i - 1,
                        l = (1 << o) - 1,
                        h = l >> 1,
                        u = -7,
                        c = r ? s - 1 : 0,
                        d = r ? -1 : 1,
                        p = e[t + c];
                    for (c += d,n = p & (1 << -u) - 1,p >>= -u,u += o; u > 0; n = 256 * n + e[t + c],c += d,u -= 8);
                    for (a = n & (1 << -u) - 1,n >>= -u,u += i; u > 0; a = 256 * a + e[t + c],c += d,u -= 8);
                    if (0 === n) n = 1 - h;
                    else {
                        if (n === l) return a ? NaN : 1 / 0 * (p ? -1 : 1);
                        a += Math.pow(2,i),n -= h
                    }
                    return (p ? -1 : 1) * a * Math.pow(2,n - i)
                },t.write = function(e,t,r,i,s,n) {
                    var a,o,l,h = 8 * n - s - 1,
                        u = (1 << h) - 1,
                        c = u >> 1,
                        d = 5960464477539062e-23 * (23 === s),
                        p = i ? 0 : n - 1,
                        f = i ? 1 : -1,
                        m = +(t < 0 || 0 === t && 1 / t < 0);
                    for (isNaN(t = Math.abs(t)) || t === 1 / 0 ? (o = +!!isNaN(t),a = u) : (a = Math.floor(Math.log(t) / Math.LN2),t * (l = Math.pow(2,-a)) < 1 && (a--,l *= 2),a + c >= 1 ? t += d / l : t += d * Math.pow(2,1 - c),t * l >= 2 && (a++,l /= 2),a + c >= u ? (o = 0,a = u) : a + c >= 1 ? (o = (t * l - 1) * Math.pow(2,s),a += c) : (o = t * Math.pow(2,c - 1) * Math.pow(2,s),a = 0)); s >= 8; e[r + p] = 255 & o,p += f,o /= 256,s -= 8);
                    for (a = a << s | o,h += s; h > 0; e[r + p] = 255 & a,p += f,a /= 256,h -= 8);
                    e[r + p - f] |= 128 * m
                }
            }
        },
        s = {};

    function n(e) {
        var t = s[e];
        if (void 0!== t) return t.exports;
        var r = s[e] = {
                exports: {}
            },
            a =!0;
        try {
            i[e](r,r.exports,n),a =!1
        } finally {
            a && delete s[e]
        }
        return r.exports
    }
    n.ab = "/ROOT/node_modules/.pnpm/next@16.2.6_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/buffer/",t.exports = n(72)
},31713,e => {
    "use strict";
    let t,r,i,s,n,a,o,l;
    var h,u,c,d,p,f,m,g,y,v,w,b,x,k,S,_,E,T,A = e.i(72673),
        R = e.i(73447);
    let P = ["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],
        j = new Set(P),
        C = (e,t,r) => r > t ? t : r < e ? e : r,
        O = {
            test: e => "number" == typeof e,
            parse: parseFloat,
            transform: e => e
        },
        N = { ...O,
            transform: e => C(0,1,e)
        },
        I = { ...O,
            default: 1
        },
        $ = e => Math.round(1e5 * e) / 1e5,
        M = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu,
        L = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
        D = (e,t) => r =>!!("string" == typeof r && L.test(r) && r.startsWith(e) || t && null!= r && Object.prototype.hasOwnProperty.call(r,t)),
        U = (e,t,r) => i => {
            if ("string"!= typeof i) return i;
            let [s,n,a,o] = i.match(M);
            return {
                [e]: parseFloat(s),
                [t]: parseFloat(n),
                [r]: parseFloat(a),
                alpha: void 0!== o ? parseFloat(o) : 1
            }
        },
        B = { ...O,
            transform: e => Math.round(C(0,255,e))
        },
        V = {
            test: D("rgb","red"),
            parse: U("red","green","blue"),
            transform: ({
                red: e,
                green: t,
                blue: r,
                alpha: i = 1
            }) => "rgba(" + B.transform(e) + "," + B.transform(t) + "," + B.transform(r) + "," + $(N.transform(i)) + ")"
        },
        F = {
            test: D("#"),
            parse: function(e) {
                let t = "",
                    r = "",
                    i = "",
                    s = "";
                return e.length > 5 ? (t = e.substring(1,3),r = e.substring(3,5),i = e.substring(5,7),s = e.substring(7,9)) : (t = e.substring(1,2),r = e.substring(2,3),i = e.substring(3,4),s = e.substring(4,5),t += t,r += r,i += i,s += s),{
                    red: parseInt(t,16),
                    green: parseInt(r,16),
                    blue: parseInt(i,16),
                    alpha: s ? parseInt(s,16) / 255 : 1
                }
            },
            transform: V.transform
        },
        z = e => ({
            test: t => "string" == typeof t && t.endsWith(e) && 1 === t.split(" ").length,
            parse: parseFloat,
            transform: t => `${t}${e}`
        }),
        q = z("deg"),
        H = z("%"),
        W = z("px"),
        K = z("vh"),
        G = z("vw"),
        J = { ...H,
            parse: e => H.parse(e) / 100,
            transform: e => H.transform(100 * e)
        },
        Y = {
            test: D("hsl","hue"),
            parse: U("hue","saturation","lightness"),
            transform: ({
                hue: e,
                saturation: t,
                lightness: r,
                alpha: i = 1
            }) => "hsla(" + Math.round(e) + "," + H.transform($(t)) + "," + H.transform($(r)) + "," + $(N.transform(i)) + ")"
        },
        X = {
            test: e => V.test(e) || F.test(e) || Y.test(e),
            parse: e => V.test(e) ? V.parse(e) : Y.test(e) ? Y.parse(e) : F.parse(e),
            transform: e => "string" == typeof e ? e : e.hasOwnProperty("red") ? V.transform(e) : Y.transform(e),
            getAnimatableNone: e => {
                let t = X.parse(e);
                return t.alpha = 0,X.transform(t)
            }
        },
        Q = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu,
        Z = "number",
        ee = "color",
        et = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;

    function er(e) {
        let t = e.toString(),
            r = [],
            i = {
                color: [],
                number: [],
                var: []
            },
            s = [],
            n = 0,
            a = t.replace(et,e => (X.test(e) ? (i.color.push(n),s.push(ee),r.push(X.parse(e))) : e.startsWith("var(") ? (i.var.push(n),s.push("var"),r.push(e)) : (i.number.push(n),s.push(Z),r.push(parseFloat(e))),++n,"${}")).split("${}");
        return {
            values: r,
            split: a,
            indexes: i,
            types: s
        }
    }

    function ei({
        split: e,
        types: t
    }) {
        let r = e.length;
        return i => {
            let s = "";
            for (let n = 0; n < r; n++)
                if (s += e[n],void 0!== i[n]) {
                    let e = t[n];
                    e === Z ? s += $(i[n]) : e === ee ? s += X.transform(i[n]) : s += i[n]
                }
            return s
        }
    }
    let es = {
            test: function(e) {
                return isNaN(e) && "string" == typeof e && (e.match(M) ?.length || 0) + (e.match(Q) ?.length || 0) > 0
            },
            parse: function(e) {
                return er(e).values
            },
            createTransformer: function(e) {
                return ei(er(e))
            },
            getAnimatableNone: function(e) {
                let t = er(e);
                return ei(t)(t.values.map((e,r) => ((e,t) => "number" == typeof e ? t ?.trim().endsWith("/") ? e : 0 : "number" == typeof e ? 0 : X.test(e) ? X.getAnimatableNone(e) : e)(e,t.split[r])))
            }
        },
        en = new Set(["brightness","contrast","saturate","opacity"]);

    function ea(e) {
        let [t,r] = e.slice(0,-1).split("(");
        if ("drop-shadow" === t) return e;
        let [i] = r.match(M) || [];
        if (!i) return e;
        let s = r.replace(i,""),
            n = +!!en.has(t);
        return i!== r && (n *= 100),t + "(" + n + s + ")"
    }
    let eo = /\b([a-z-]*)\(.*?\)/gu,
        el = { ...es,
            getAnimatableNone: e => {
                let t = e.match(eo);
                return t ? t.map(ea).join(" ") : e
            }
        },
        eh = { ...es,
            getAnimatableNone: e => {
                let t = es.parse(e);
                return es.createTransformer(e)(t.map(e => "number" == typeof e ? 0 : "object" == typeof e ? { ...e,
                    alpha: 1
                } : e))
            }
        },
        eu = { ...O,
            transform: Math.round
        },
        ec = {
            borderWidth: W,
            borderTopWidth: W,
            borderRightWidth: W,
            borderBottomWidth: W,
            borderLeftWidth: W,
            borderRadius: W,
            borderTopLeftRadius: W,
            borderTopRightRadius: W,
            borderBottomRightRadius: W,
            borderBottomLeftRadius: W,
            width: W,
            maxWidth: W,
            height: W,
            maxHeight: W,
            top: W,
            right: W,
            bottom: W,
            left: W,
            inset: W,
            insetBlock: W,
            insetBlockStart: W,
            insetBlockEnd: W,
            insetInline: W,
            insetInlineStart: W,
            insetInlineEnd: W,
            padding: W,
            paddingTop: W,
            paddingRight: W,
            paddingBottom: W,
            paddingLeft: W,
            paddingBlock: W,
            paddingBlockStart: W,
            paddingBlockEnd: W,
            paddingInline: W,
            paddingInlineStart: W,
            paddingInlineEnd: W,
            margin: W,
            marginTop: W,
            marginRight: W,
            marginBottom: W,
            marginLeft: W,
            marginBlock: W,
            marginBlockStart: W,
            marginBlockEnd: W,
            marginInline: W,
            marginInlineStart: W,
            marginInlineEnd: W,
            fontSize: W,
            backgroundPositionX: W,
            backgroundPositionY: W,
            rotate: q,
            rotateX: q,
            rotateY: q,
            rotateZ: q,
            scale: I,
            scaleX: I,
            scaleY: I,
            scaleZ: I,
            skew: q,
            skewX: q,
            skewY: q,
            distance: W,
            translateX: W,
            translateY: W,
            translateZ: W,
            x: W,
            y: W,
            z: W,
            perspective: W,
            transformPerspective: W,
            opacity: N,
            originX: J,
            originY: J,
            originZ: W,
            zIndex: eu,
            fillOpacity: N,
            strokeOpacity: N,
            numOctaves: eu
        },
        ed = { ...ec,
            color: X,
            backgroundColor: X,
            outlineColor: X,
            fill: X,
            stroke: X,
            borderColor: X,
            borderTopColor: X,
            borderRightColor: X,
            borderBottomColor: X,
            borderLeftColor: X,
            filter: el,
            WebkitFilter: el,
            mask: eh,
            WebkitMask: eh
        },
        ep = e => ed[e],
        ef = () => ({
            translate: 0,
            scale: 1,
            origin: 0,
            originPoint: 0
        }),
        em = () => ({
            x: ef(),
            y: ef()
        }),
        eg = () => ({
            min: 0,
            max: 0
        }),
        ey = () => ({
            x: eg(),
            y: eg()
        }),
        ev = e =>!!(e && e.getVelocity),
        ew = new Set(["width","height","top","left","right","bottom",...P]),
        eb = e => t => t.test(e),
        ex = [O,W,H,q,G,K,{
            test: e => "auto" === e,
            parse: e => e
        }],
        ek = e => ex.find(eb(e));
    var eS = e.i(93441);
    let e_ = () => {},
        eE = () => {};
    eS.default;
    let eT = e => t => "string" == typeof t && t.startsWith(e),
        eA = eT("--"),
        eR = eT("var(--"),
        eP = e =>!!eR(e) && ej.test(e.split("/*")[0].trim()),
        ej = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;

    function eC(e) {
        return "string" == typeof e && e.split("/*")[0].includes("var(--")
    }
    let eO = /^var\(--(?:([\w-]+)|([\w-]+),?([a-zA-Z\d ()%#.,-]+))\)/u,
        eN = e => 180 * e / Math.PI,
        eI = e => eM(eN(Math.atan2(e[1],e[0]))),
        e$ = {
            x: 4,
            y: 5,
            translateX: 4,
            translateY: 5,
            scaleX: 0,
            scaleY: 3,
            scale: e => (Math.abs(e[0]) + Math.abs(e[3])) / 2,
            rotate: eI,
            rotateZ: eI,
            skewX: e => eN(Math.atan(e[1])),
            skewY: e => eN(Math.atan(e[2])),
            skew: e => (Math.abs(e[1]) + Math.abs(e[2])) / 2
        },
        eM = e => ((e %= 360) < 0 && (e += 360),e),
        eL = e => Math.sqrt(e[0] * e[0] + e[1] * e[1]),
        eD = e => Math.sqrt(e[4] * e[4] + e[5] * e[5]),
        eU = {
            x: 12,
            y: 13,
            z: 14,
            translateX: 12,
            translateY: 13,
            translateZ: 14,
            scaleX: eL,
            scaleY: eD,
            scale: e => (eL(e) + eD(e)) / 2,
            rotateX: e => eM(eN(Math.atan2(e[6],e[5]))),
            rotateY: e => eM(eN(Math.atan2(-e[2],e[0]))),
            rotateZ: eI,
            rotate: eI,
            skewX: e => eN(Math.atan(e[4])),
            skewY: e => eN(Math.atan(e[1])),
            skew: e => (Math.abs(e[1]) + Math.abs(e[4])) / 2
        };

    function eB(e) {
        return +!!e.includes("scale")
    }

    function eV(e,t) {
        let r,i;
        if (!e || "none" === e) return eB(t);
        let s = e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
        if (s) r = eU,i = s;
        else {
            let t = e.match(/^matrix\(([-\d.e\s,]+)\)$/u);
            r = e$,i = t
        }
        if (!i) return eB(t);
        let n = r[t],
            a = i[1].split(",").map(eF);
        return "function" == typeof n ? n(a) : a[n]
    }

    function eF(e) {
        return parseFloat(e.trim())
    }
    let ez = e => e === O || e === W,
        eq = new Set(["x","y","z"]),
        eH = P.filter(e =>!eq.has(e)),
        eW = {
            width: ({
                x: e
            },{
                paddingLeft: t = "0",
                paddingRight: r = "0",
                boxSizing: i
            }) => {
                let s = e.max - e.min;
                return "border-box" === i ? s : s - parseFloat(t) - parseFloat(r)
            },
            height: ({
                y: e
            },{
                paddingTop: t = "0",
                paddingBottom: r = "0",
                boxSizing: i
            }) => {
                let s = e.max - e.min;
                return "border-box" === i ? s : s - parseFloat(t) - parseFloat(r)
            },
            top: (e,{
                top: t
            }) => parseFloat(t),
            left: (e,{
                left: t
            }) => parseFloat(t),
            bottom: ({
                y: e
            },{
                top: t
            }) => parseFloat(t) + (e.max - e.min),
            right: ({
                x: e
            },{
                left: t
            }) => parseFloat(t) + (e.max - e.min),
            x: (e,{
                transform: t
            }) => eV(t,"x"),
            y: (e,{
                transform: t
            }) => eV(t,"y")
        };
    eW.translateX = eW.x,eW.translateY = eW.y;
    let eK = e => e,
        eG = {},
        eJ = ["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];

    function eY(e,t) {
        let r =!1,
            i =!0,
            s = {
                delta: 0,
                timestamp: 0,
                isProcessing:!1
            },
            n = () => r =!0,
            a = eJ.reduce((e,r) => (e[r] = function(e,t) {
                let r = new Set,
                    i = new Set,
                    s =!1,
                    n =!1,
                    a = new WeakSet,
                    o = {
                        delta: 0,
                        timestamp: 0,
                        isProcessing:!1
                    },
                    l = 0;

                function h(t) {
                    a.has(t) && (u.schedule(t),e()),l++,t(o)
                }
                let u = {
                    schedule: (e,t =!1,n =!1) => {
                        let o = n && s ? r : i;
                        return t && a.add(e),o.add(e),e
                    },
                    cancel: e => {
                        i.delete(e),a.delete(e)
                    },
                    process: e => {
                        if (o = e,s) {
                            n =!0;
                            return
                        }
                        s =!0;
                        let a = r;
                        r = i,i = a,r.forEach(h),t,l = 0,r.clear(),s =!1,n && (n =!1,u.process(e))
                    }
                };
                return u
            }(n,t ? r : void 0),e),{}),
            {
                setup: o,
                read: l,
                resolveKeyframes: h,
                preUpdate: u,
                update: c,
                preRender: d,
                render: p,
                postRender: f
            } = a,
            m = () => {
                let n = eG.useManualTiming,
                    a = n ? s.timestamp : performance.now();
                r =!1,n || (s.delta = i ? 1e3 / 60 : Math.max(Math.min(a - s.timestamp,40),1)),s.timestamp = a,s.isProcessing =!0,o.process(s),l.process(s),h.process(s),u.process(s),c.process(s),d.process(s),p.process(s),f.process(s),s.isProcessing =!1,r && t && (i =!1,e(m))
            };
        return {
            schedule: eJ.reduce((t,n) => {
                let o = a[n];
                return t[n] = (t,n =!1,a =!1) => (!r && (r =!0,i =!0,s.isProcessing || e(m)),o.schedule(t,n,a)),t
            },{}),
            cancel: e => {
                for (let t = 0; t < eJ.length; t++) a[eJ[t]].cancel(e)
            },
            state: s,
            steps: a
        }
    }
    let {
        schedule: eX,
        cancel: eQ,
        state: eZ,
        steps: e0
    } = eY("u" > typeof requestAnimationFrame ? requestAnimationFrame : eK,!0),e1 = new Set,e2 =!1,e5 =!1,e3 =!1;

    function e8() {
        if (e5) {
            let e = Array.from(e1).filter(e => e.needsMeasurement),
                t = new Set(e.map(e => e.element)),
                r = new Map;
            t.forEach(e => {
                let t,i = (t = [],eH.forEach(r => {
                    let i = e.getValue(r);
                    void 0!== i && (t.push([r,i.get()]),i.set(+!!r.startsWith("scale")))
                }),t);
                i.length && (r.set(e,i),e.render())
            }),e.forEach(e => e.measureInitialState()),t.forEach(e => {
                e.render();
                let t = r.get(e);
                t && t.forEach(([t,r]) => {
                    e.getValue(t) ?.set(r)
                })
            }),e.forEach(e => e.measureEndState()),e.forEach(e => {
                void 0!== e.suspendedScrollY && window.scrollTo(0,e.suspendedScrollY)
            })
        }
        e5 =!1,e2 =!1,e1.forEach(e => e.complete(e3)),e1.clear()
    }

    function e4() {
        e1.forEach(e => {
            e.readKeyframes(),e.needsMeasurement && (e5 =!0)
        })
    }
    class e6 {
        constructor(e,t,r,i,s,n =!1) {
            this.state = "pending",this.isAsync =!1,this.needsMeasurement =!1,this.unresolvedKeyframes = [...e],this.onComplete = t,this.name = r,this.motionValue = i,this.element = s,this.isAsync = n
        }
        scheduleResolve() {
            this.state = "scheduled",this.isAsync ? (e1.add(this),e2 || (e2 =!0,eX.read(e4),eX.resolveKeyframes(e8))) : (this.readKeyframes(),this.complete())
        }
        readKeyframes() {
            let {
                unresolvedKeyframes: e,
                name: t,
                element: r,
                motionValue: i
            } = this;
            if (null === e[0]) {
                let s = i ?.get(),
                    n = e[e.length - 1];
                if (void 0!== s) e[0] = s;
                else if (r && t) {
                    let i = r.readValue(t,n);
                    null!= i && (e[0] = i)
                }
                void 0 === e[0] && (e[0] = n),i && void 0 === s && i.set(e[0])
            }
            for (let t = 1; t < e.length; t++) e[t] ?? (e[t] = e[t - 1])
        }
        setFinalKeyframe() {}
        measureInitialState() {}
        renderEndStyles() {}
        measureEndState() {}
        complete(e =!1) {
            this.state = "complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,e),e1.delete(this)
        }
        cancel() {
            "scheduled" === this.state && (e1.delete(this),this.state = "pending")
        }
        resume() {
            "pending" === this.state && this.scheduleResolve()
        }
    }
    let e9 = new Set([el,eh]);

    function e7(e,t) {
        let r = ep(e);
        return e9.has(r) || (r = es),r.getAnimatableNone ? r.getAnimatableNone(t) : void 0
    }
    let te = new Set(["auto","none","0"]);
    class tt extends e6 {
        constructor(e,t,r,i,s) {
            super(e,t,r,i,s,!0)
        }
        readKeyframes() {
            let {
                unresolvedKeyframes: e,
                element: t,
                name: r
            } = this;
            if (!t ||!t.current) return;
            super.readKeyframes();
            for (let r = 0; r < e.length; r++) {
                let i = e[r];
                if ("string" == typeof i && eP(i = i.trim())) {
                    let s = function e(t,r,i = 1) {
                        eE(i <= 4,`Max CSS variable fallback depth detected in property "${t}".This may indicate a circular fallback dependency.`,"max-css-var-depth");
                        let [s,n] = function(e) {
                            let t = eO.exec(e);
                            if (!t) return [,];
                            let [,r,i,s] = t;
                            return [`--${r??i}`,s]
                        }(t);
                        if (!s) return;
                        let a = window.getComputedStyle(r).getPropertyValue(s);
                        if (a) {
                            let e = a.trim();
                            return /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e) ? parseFloat(e) : e
                        }
                        return eP(n) ? e(n,r,i + 1) : n
                    }(i,t.current);
                    void 0!== s && (e[r] = s),r === e.length - 1 && (this.finalKeyframe = i)
                }
            }
            if (this.resolveNoneKeyframes(),!ew.has(r) || 2!== e.length) return;
            let [i,s] = e,n = ek(i),a = ek(s);
            if (eC(i)!== eC(s) && eW[r]) {
                this.needsMeasurement =!0;
                return
            }
            if (n!== a)
                if (ez(n) && ez(a))
                    for (let t = 0; t < e.length; t++) {
                        let r = e[t];
                        "string" == typeof r && (e[t] = parseFloat(r))
                    } else eW[r] && (this.needsMeasurement =!0)
        }
        resolveNoneKeyframes() {
            let {
                unresolvedKeyframes: e,
                name: t
            } = this,r = [];
            for (let t = 0; t < e.length; t++)(null === e[t] || function(e) {
                if ("number" == typeof e) return 0 === e;
                if (null === e) return!0;
                return "none" === e || "0" === e || /^0[^.\s]+$/u.test(e)
            }(e[t])) && r.push(t);
            r.length && function(e,t,r) {
                let i,s = 0;
                for (; s < e.length &&!i;) {
                    let t = e[s];
                    "string" == typeof t &&!te.has(t) && er(t).values.length && (i = e[s]),s++
                }
                if (i && r)
                    for (let s of t) e[s] = e7(r,i)
            }(e,r,t)
        }
        measureInitialState() {
            let {
                element: e,
                unresolvedKeyframes: t,
                name: r
            } = this;
            if (!e ||!e.current) return;
            "height" === r && (this.suspendedScrollY = window.pageYOffset),this.measuredOrigin = eW[r](e.measureViewportBox(),window.getComputedStyle(e.current)),t[0] = this.measuredOrigin;
            let i = t[t.length - 1];
            void 0!== i && e.getValue(r,i).jump(i,!1)
        }
        measureEndState() {
            let {
                element: e,
                name: t,
                unresolvedKeyframes: r
            } = this;
            if (!e ||!e.current) return;
            let i = e.getValue(t);
            i && i.jump(this.measuredOrigin,!1);
            let s = r.length - 1,
                n = r[s];
            r[s] = eW[t](e.measureViewportBox(),window.getComputedStyle(e.current)),null!== n && void 0 === this.finalKeyframe && (this.finalKeyframe = n),this.removedTransforms ?.length && this.removedTransforms.forEach(([t,r]) => {
                e.getValue(t).set(r)
            }),this.resolveNoneKeyframes()
        }
    }
    let tr = e => 1e3 * e;

    function ti(e,t) {
        -1 === e.indexOf(t) && e.push(t)
    }

    function ts(e,t) {
        let r = e.indexOf(t);
        r > -1 && e.splice(r,1)
    }
    class tn {
        constructor() {
            this.subscriptions = []
        }
        add(e) {
            return ti(this.subscriptions,e),() => ts(this.subscriptions,e)
        }
        notify(e,t,r) {
            let i = this.subscriptions.length;
            if (i)
                if (1 === i) this.subscriptions[0](e,t,r);
                else
                    for (let s = 0; s < i; s++) {
                        let i = this.subscriptions[s];
                        i && i(e,t,r)
                    }
        }
        getSize() {
            return this.subscriptions.length
        }
        clear() {
            this.subscriptions.length = 0
        }
    }

    function ta(e,t,r) {
        t.startsWith("--") ? e.style.setProperty(t,r) : e.style[t] = r
    }

    function to(e) {
        let t;
        return () => (void 0 === t && (t = e()),t)
    }
    let tl = {};

    function th(e,t) {
        let r = to(e);
        return () => tl[t] ?? r()
    }
    let tu = th(() => void 0!== window.ScrollTimeline,"scrollTimeline"),
        tc = e => null!== e;

    function td(e,{
        repeat: t,
        repeatType: r = "loop"
    },i,s = 1) {
        let n = e.filter(tc),
            a = s < 0 || t && "loop"!== r && t % 2 == 1 ? 0 : n.length - 1;
        return a && void 0!== i ? i : n[a]
    }
    class tp {
        constructor() {
            this.updateFinished()
        }
        get finished() {
            return this._finished
        }
        updateFinished() {
            this._finished = new Promise(e => {
                this.resolve = e
            })
        }
        notifyFinished() {
            this.resolve()
        }
        then(e,t) {
            return this.finished.then(e,t)
        }
    }
    let tf = {
            layout: 0,
            mainThread: 0,
            waapi: 0
        },
        tm = e => Array.isArray(e) && "number" == typeof e[0],
        tg = th(() => {
            try {
                document.createElement("div").animate({
                    opacity: 0
                },{
                    easing: "linear(0,1)"
                })
            } catch (e) {
                return!1
            }
            return!0
        },"linearEasing"),
        ty = (e,t,r = 10) => {
            let i = "",
                s = Math.max(Math.round(t / r),2);
            for (let t = 0; t < s; t++) i += Math.round(1e4 * e(t / (s - 1))) / 1e4 + ",";
            return `linear(${i.substring(0,i.length-2)})`
        },
        tv = ([e,t,r,i]) => `cubic-bezier(${e},${t},${r},${i})`,
        tw = {
            linear: "linear",
            ease: "ease",
            easeIn: "ease-in",
            easeOut: "ease-out",
            easeInOut: "ease-in-out",
            circIn: tv([0,.65,.55,1]),
            circOut: tv([.55,0,1,.45]),
            backIn: tv([.31,.01,.66,-.59]),
            backOut: tv([.33,1.53,.69,.99])
        };

    function tb(e) {
        return "function" == typeof e && "applyToOptions" in e
    }
    class tx extends tp {
        constructor(e) {
            if (super(),this.finishedTime = null,this.isStopped =!1,this.manualStartTime = null,!e) return;
            const {
                element: t,
                name: r,
                keyframes: i,
                pseudoElement: s,
                allowFlatten: n =!1,
                finalKeyframe: a,
                onComplete: o
            } = e;
            this.isPseudoElement =!!s,this.allowFlatten = n,this.options = e,eE("string"!= typeof e.type,'Mini animate() doesn\'t support "type" as a string.',"mini-spring");
            const l = function({
                type: e,
                ...t
            }) {
                return tb(e) && tg() ? e.applyToOptions(t) : (t.duration ?? (t.duration = 300),t.ease ?? (t.ease = "easeOut"),t)
            }(e);
            this.animation = function(e,t,r,{
                delay: i = 0,
                duration: s = 300,
                repeat: n = 0,
                repeatType: a = "loop",
                ease: o = "easeOut",
                times: l
            } = {},h) {
                let u = {
                    [t]: r
                };
                l && (u.offset = l);
                let c = function e(t,r) {
                    if (t) return "function" == typeof t ? tg() ? ty(t,r) : "ease-out" : tm(t) ? tv(t) : Array.isArray(t) ? t.map(t => e(t,r) || tw.easeOut) : tw[t]
                }(o,s);
                Array.isArray(c) && (u.easing = c);
                let d = {
                    delay: i,
                    duration: s,
                    easing: Array.isArray(c) ? "linear" : c,
                    fill: "both",
                    iterations: n + 1,
                    direction: "reverse" === a ? "alternate" : "normal"
                };
                h && (d.pseudoElement = h);
                let p = e.animate(u,d);
                return p
            }(t,r,i,l,s),!1 === l.autoplay && this.animation.pause(),this.animation.onfinish = () => {
                if (this.finishedTime = this.time,!s) {
                    let e = td(i,this.options,a,this.speed);
                    this.updateMotionValue && this.updateMotionValue(e),ta(t,r,e),this.animation.cancel()
                }
                o ?.(),this.notifyFinished()
            }
        }
        play() {
            this.isStopped || (this.manualStartTime = null,this.animation.play(),"finished" === this.state && this.updateFinished())
        }
        pause() {
            this.animation.pause()
        }
        complete() {
            this.animation.finish ?.()
        }
        cancel() {
            try {
                this.animation.cancel()
            } catch (e) {}
        }
        stop() {
            if (this.isStopped) return;
            this.isStopped =!0;
            let {
                state: e
            } = this;
            "idle"!== e && "finished"!== e && (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(),this.isPseudoElement || this.cancel())
        }
        commitStyles() {
            let e = this.options ?.element;
           !this.isPseudoElement && e ?.isConnected && this.animation.commitStyles ?.()
        }
        get duration() {
            return Number(this.animation.effect ?.getComputedTiming ?.().duration || 0) / 1e3
        }
        get iterationDuration() {
            let {
                delay: e = 0
            } = this.options || {};
            return this.duration + e / 1e3
        }
        get time() {
            return (Number(this.animation.currentTime) || 0) / 1e3
        }
        set time(e) {
            let t = null!== this.finishedTime;
            this.manualStartTime = null,this.finishedTime = null,this.animation.currentTime = tr(e),t && this.animation.pause()
        }
        get speed() {
            return this.animation.playbackRate
        }
        set speed(e) {
            e < 0 && (this.finishedTime = null),this.animation.playbackRate = e
        }
        get state() {
            return null!== this.finishedTime ? "finished" : this.animation.playState
        }
        get startTime() {
            return this.manualStartTime ?? Number(this.animation.startTime)
        }
        set startTime(e) {
            this.manualStartTime = this.animation.startTime = e
        }
        attachTimeline({
            timeline: e,
            rangeStart: t,
            rangeEnd: r,
            observe: i
        }) {
            return (this.allowFlatten && this.animation.effect ?.updateTiming({
                easing: "linear"
            }),this.animation.onfinish = null,e && tu()) ? (this.animation.timeline = e,t && (this.animation.rangeStart = t),r && (this.animation.rangeEnd = r),eK) : i(this)
        }
    }
    let tk = new Set(["opacity","clipPath","filter","transform"]),
        {
            schedule: tS
        } = eY(queueMicrotask,!1);

    function t_() {
        t = void 0
    }
    let tE = {
        now: () => (void 0 === t && tE.set(eZ.isProcessing || eG.useManualTiming ? eZ.timestamp : performance.now()),t),
        set: e => {
            t = e,queueMicrotask(t_)
        }
    };
    class tT {
        constructor(e,t = {}) {
            this.canTrackVelocity = null,this.events = {},this.updateAndNotify = e => {
                let t = tE.now();
                if (this.updatedAt!== t && this.setPrevFrameValue(),this.prev = this.current,this.setCurrent(e),this.current!== this.prev && (this.events.change ?.notify(this.current),this.dependents))
                    for (let e of this.dependents) e.dirty()
            },this.hasAnimated =!1,this.setCurrent(e),this.owner = t.owner
        }
        setCurrent(e) {
            this.current = e,this.updatedAt = tE.now(),null === this.canTrackVelocity && void 0!== e && (this.canTrackVelocity =!isNaN(parseFloat(this.current)))
        }
        setPrevFrameValue(e = this.current) {
            this.prevFrameValue = e,this.prevUpdatedAt = this.updatedAt
        }
        onChange(e) {
            return this.on("change",e)
        }
        on(e,t) {
            this.events[e] || (this.events[e] = new tn);
            let r = this.events[e].add(t);
            return "change" === e ? () => {
                r(),eX.read(() => {
                    this.events.change.getSize() || this.stop()
                })
            } : r
        }
        clearListeners() {
            for (let e in this.events) this.events[e].clear()
        }
        attach(e,t) {
            this.passiveEffect = e,this.stopPassiveEffect = t
        }
        set(e) {
            this.passiveEffect ? this.passiveEffect(e,this.updateAndNotify) : this.updateAndNotify(e)
        }
        setWithVelocity(e,t,r) {
            this.set(t),this.prev = void 0,this.prevFrameValue = e,this.prevUpdatedAt = this.updatedAt - r
        }
        jump(e,t =!0) {
            this.updateAndNotify(e),this.prev = e,this.prevUpdatedAt = this.prevFrameValue = void 0,t && this.stop(),this.stopPassiveEffect && this.stopPassiveEffect()
        }
        dirty() {
            this.events.change ?.notify(this.current)
        }
        addDependent(e) {
            this.dependents || (this.dependents = new Set),this.dependents.add(e)
        }
        removeDependent(e) {
            this.dependents && this.dependents.delete(e)
        }
        get() {
            return l && l.push(this),this.current
        }
        getPrevious() {
            return this.prev
        }
        getVelocity() {
            var e;
            let t = tE.now();
            if (!this.canTrackVelocity || void 0 === this.prevFrameValue || t - this.updatedAt > 30) return 0;
            let r = Math.min(this.updatedAt - this.prevUpdatedAt,30);
            return e = parseFloat(this.current) - parseFloat(this.prevFrameValue),r ? 1e3 / r * e : 0
        }
        start(e) {
            return this.stop(),new Promise(t => {
                this.hasAnimated =!0,this.animation = e(t),this.events.animationStart && this.events.animationStart.notify()
            }).then(() => {
                this.events.animationComplete && this.events.animationComplete.notify(),this.clearAnimation()
            })
        }
        stop() {
            this.animation && (this.animation.stop(),this.events.animationCancel && this.events.animationCancel.notify()),this.clearAnimation()
        }
        isAnimating() {
            return!!this.animation
        }
        clearAnimation() {
            delete this.animation
        }
        destroy() {
            this.dependents ?.clear(),this.events.destroy ?.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect && this.stopPassiveEffect()
        }
    }

    function tA(e,t) {
        return new tT(e,t)
    }
    let tR = [...ex,X,es],
        tP = new WeakMap;

    function tj(e) {
        return null!== e && "object" == typeof e && "function" == typeof e.start
    }

    function tC(e) {
        return "string" == typeof e || Array.isArray(e)
    }
    let tO = ["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],
        tN = ["initial",...tO];

    function tI(e) {
        return tj(e.animate) || tN.some(t => tC(e[t]))
    }

    function t$(e) {
        return!!(tI(e) || e.variants)
    }
    let tM = {
            current: null
        },
        tL = {
            current:!1
        },
        tD = "u" > typeof window;

    function tU(e) {
        let t = [{},{}];
        return e ?.values.forEach((e,r) => {
            t[0][r] = e.get(),t[1][r] = e.getVelocity()
        }),t
    }

    function tB(e,t,r,i) {
        if ("function" == typeof t) {
            let [s,n] = tU(i);
            t = t(void 0!== r ? r : e.custom,s,n)
        }
        if ("string" == typeof t && (t = e.variants && e.variants[t]),"function" == typeof t) {
            let [s,n] = tU(i);
            t = t(void 0!== r ? r : e.custom,s,n)
        }
        return t
    }
    let tV = ["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"],
        tF = {};
    class tz {
        scrapeMotionValuesFromProps(e,t,r) {
            return {}
        }
        constructor({
            parent: e,
            props: t,
            presenceContext: r,
            reducedMotionConfig: i,
            skipAnimations: s,
            blockInitialAnimation: n,
            visualState: a
        },o = {}) {
            this.current = null,this.children = new Set,this.isVariantNode =!1,this.isControllingVariants =!1,this.shouldReduceMotion = null,this.shouldSkipAnimations =!1,this.values = new Map,this.KeyframeResolver = e6,this.features = {},this.valueSubscriptions = new Map,this.prevMotionValues = {},this.hasBeenMounted =!1,this.events = {},this.propEventSubscriptions = {},this.notifyUpdate = () => this.notify("Update",this.latestValues),this.render = () => {
                this.current && (this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))
            },this.renderScheduledAt = 0,this.scheduleRender = () => {
                let e = tE.now();
                this.renderScheduledAt < e && (this.renderScheduledAt = e,eX.render(this.render,!1,!0))
            };
            const {
                latestValues: l,
                renderState: h
            } = a;
            this.latestValues = l,this.baseTarget = { ...l
            },this.initialValues = t.initial ? { ...l
            } : {},this.renderState = h,this.parent = e,this.props = t,this.presenceContext = r,this.depth = e ? e.depth + 1 : 0,this.reducedMotionConfig = i,this.skipAnimationsConfig = s,this.options = o,this.blockInitialAnimation =!!n,this.isControllingVariants = tI(t),this.isVariantNode = t$(t),this.isVariantNode && (this.variantChildren = new Set),this.manuallyAnimateOnMount =!!(e && e.current);
            const {
                willChange: u,
                ...c
            } = this.scrapeMotionValuesFromProps(t,{},this);
            for (const e in c) {
                const t = c[e];
                void 0!== l[e] && ev(t) && t.set(l[e])
            }
        }
        mount(e) {
            if (this.hasBeenMounted)
                for (let e in this.initialValues) this.values.get(e) ?.jump(this.initialValues[e]),this.latestValues[e] = this.initialValues[e];
            this.current = e,tP.set(e,this),this.projection &&!this.projection.instance && this.projection.mount(e),this.parent && this.isVariantNode &&!this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)),this.values.forEach((e,t) => this.bindToMotionValue(t,e)),"never" === this.reducedMotionConfig ? this.shouldReduceMotion =!1 : "always" === this.reducedMotionConfig ? this.shouldReduceMotion =!0 : (tL.current || function() {
                if (tL.current =!0,tD)
                    if (window.matchMedia) {
                        let e = window.matchMedia("(prefers-reduced-motion)"),
                            t = () => tM.current = e.matches;
                        e.addEventListener("change",t),t()
                    } else tM.current =!1
            }(),this.shouldReduceMotion = tM.current),this.shouldSkipAnimations = this.skipAnimationsConfig ??!1,this.parent ?.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted =!0
        }
        unmount() {
            for (let e in this.projection && this.projection.unmount(),eQ(this.notifyUpdate),eQ(this.render),this.valueSubscriptions.forEach(e => e()),this.valueSubscriptions.clear(),this.removeFromVariantTree && this.removeFromVariantTree(),this.parent ?.removeChild(this),this.events) this.events[e].clear();
            for (let e in this.features) {
                let t = this.features[e];
                t && (t.unmount(),t.isMounted =!1)
            }
            this.current = null
        }
        addChild(e) {
            this.children.add(e),this.enteringChildren ?? (this.enteringChildren = new Set),this.enteringChildren.add(e)
        }
        removeChild(e) {
            this.children.delete(e),this.enteringChildren && this.enteringChildren.delete(e)
        }
        bindToMotionValue(e,t) {
            let r;
            if (this.valueSubscriptions.has(e) && this.valueSubscriptions.get(e)(),t.accelerate && tk.has(e) && this.current instanceof HTMLElement) {
                let {
                    factory: r,
                    keyframes: i,
                    times: s,
                    ease: n,
                    duration: a
                } = t.accelerate,o = new tx({
                    element: this.current,
                    name: e,
                    keyframes: i,
                    times: s,
                    ease: n,
                    duration: tr(a)
                }),l = r(o);
                this.valueSubscriptions.set(e,() => {
                    l(),o.cancel()
                });
                return
            }
            let i = j.has(e);
            i && this.onBindTransform && this.onBindTransform();
            let s = t.on("change",t => {
                this.latestValues[e] = t,this.props.onUpdate && eX.preRender(this.notifyUpdate),i && this.projection && (this.projection.isTransformDirty =!0),this.scheduleRender()
            });
            "u" > typeof window && window.MotionCheckAppearSync && (r = window.MotionCheckAppearSync(this,e,t)),this.valueSubscriptions.set(e,() => {
                s(),r && r(),t.owner && t.stop()
            })
        }
        sortNodePosition(e) {
            return this.current && this.sortInstanceNodePosition && this.type === e.type ? this.sortInstanceNodePosition(this.current,e.current) : 0
        }
        updateFeatures() {
            let e = "animation";
            for (e in tF) {
                let t = tF[e];
                if (!t) continue;
                let {
                    isEnabled: r,
                    Feature: i
                } = t;
                if (!this.features[e] && i && r(this.props) && (this.features[e] = new i(this)),this.features[e]) {
                    let t = this.features[e];
                    t.isMounted ? t.update() : (t.mount(),t.isMounted =!0)
                }
            }
        }
        triggerBuild() {
            this.build(this.renderState,this.latestValues,this.props)
        }
        measureViewportBox() {
            return this.current ? this.measureInstanceViewportBox(this.current,this.props) : ey()
        }
        getStaticValue(e) {
            return this.latestValues[e]
        }
        setStaticValue(e,t) {
            this.latestValues[e] = t
        }
        update(e,t) {
            (e.transformTemplate || this.props.transformTemplate) && this.scheduleRender(),this.prevProps = this.props,this.props = e,this.prevPresenceContext = this.presenceContext,this.presenceContext = t;
            for (let t = 0; t < tV.length; t++) {
                let r = tV[t];
                this.propEventSubscriptions[r] && (this.propEventSubscriptions[r](),delete this.propEventSubscriptions[r]);
                let i = e["on" + r];
                i && (this.propEventSubscriptions[r] = this.on(r,i))
            }
            this.prevMotionValues = function(e,t,r) {
                for (let i in t) {
                    let s = t[i],
                        n = r[i];
                    if (ev(s)) e.addValue(i,s);
                    else if (ev(n)) e.addValue(i,tA(s,{
                        owner: e
                    }));
                    else if (n!== s)
                        if (e.hasValue(i)) {
                            let t = e.getValue(i);
                           !0 === t.liveStyle ? t.jump(s) : t.hasAnimated || t.set(s)
                        } else {
                            let t = e.getStaticValue(i);
                            e.addValue(i,tA(void 0!== t ? t : s,{
                                owner: e
                            }))
                        }
                }
                for (let i in r) void 0 === t[i] && e.removeValue(i);
                return t
            }(this,this.scrapeMotionValuesFromProps(e,this.prevProps || {},this),this.prevMotionValues),this.handleChildMotionValue && this.handleChildMotionValue()
        }
        getProps() {
            return this.props
        }
        getVariant(e) {
            return this.props.variants ? this.props.variants[e] : void 0
        }
        getDefaultTransition() {
            return this.props.transition
        }
        getTransformPagePoint() {
            return this.props.transformPagePoint
        }
        getClosestVariantNode() {
            return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
        }
        addVariantChild(e) {
            let t = this.getClosestVariantNode();
            if (t) return t.variantChildren && t.variantChildren.add(e),() => t.variantChildren.delete(e)
        }
        addValue(e,t) {
            let r = this.values.get(e);
            t!== r && (r && this.removeValue(e),this.bindToMotionValue(e,t),this.values.set(e,t),this.latestValues[e] = t.get())
        }
        removeValue(e) {
            this.values.delete(e);
            let t = this.valueSubscriptions.get(e);
            t && (t(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)
        }
        hasValue(e) {
            return this.values.has(e)
        }
        getValue(e,t) {
            if (this.props.values && this.props.values[e]) return this.props.values[e];
            let r = this.values.get(e);
            return void 0 === r && void 0!== t && (r = tA(null === t ? void 0 : t,{
                owner: this
            }),this.addValue(e,r)),r
        }
        readValue(e,t) {
            let r = void 0 === this.latestValues[e] && this.current ? this.getBaseTargetFromProps(this.props,e) ?? this.readValueFromInstance(this.current,e,this.options) : this.latestValues[e];
            if (null!= r) {
                let i,s;
                if ("string" == typeof r && (i = r,/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(i) || (s = r,/^0[^.\s]+$/u.test(s)))) r = parseFloat(r);
                else {
                    let i;
                    i = r,!tR.find(eb(i)) && es.test(t) && (r = e7(e,t))
                }
                this.setBaseTarget(e,ev(r) ? r.get() : r)
            }
            return ev(r) ? r.get() : r
        }
        setBaseTarget(e,t) {
            this.baseTarget[e] = t
        }
        getBaseTarget(e) {
            let t,{
                initial: r
            } = this.props;
            if ("string" == typeof r || "object" == typeof r) {
                let i = tB(this.props,r,this.presenceContext ?.custom);
                i && (t = i[e])
            }
            if (r && void 0!== t) return t;
            let i = this.getBaseTargetFromProps(this.props,e);
            return void 0 === i || ev(i) ? void 0!== this.initialValues[e] && void 0 === t ? void 0 : this.baseTarget[e] : i
        }
        on(e,t) {
            return this.events[e] || (this.events[e] = new tn),this.events[e].add(t)
        }
        notify(e,...t) {
            this.events[e] && this.events[e].notify(...t)
        }
        scheduleRenderMicrotask() {
            tS.render(this.render)
        }
    }
    class tq extends tz {
        constructor() {
            super(...arguments),this.KeyframeResolver = tt
        }
        sortInstanceNodePosition(e,t) {
            return 2 & e.compareDocumentPosition(t) ? 1 : -1
        }
        getBaseTargetFromProps(e,t) {
            let r = e.style;
            return r ? r[t] : void 0
        }
        removeValueFromRenderState(e,{
            vars: t,
            style: r
        }) {
            delete t[e],delete r[e]
        }
        handleChildMotionValue() {
            this.childSubscription && (this.childSubscription(),delete this.childSubscription);
            let {
                children: e
            } = this.props;
            ev(e) && (this.childSubscription = e.on("change",e => {
                this.current && (this.current.textContent = `${e}`)
            }))
        }
    }

    function tH(e) {
        return e.replace(/([A-Z])/g,e => `-${e.toLowerCase()}`)
    }
    let tW = (e,t) => t && "number" == typeof e ? t.transform(e) : e,
        tK = {
            x: "translateX",
            y: "translateY",
            z: "translateZ",
            transformPerspective: "perspective"
        },
        tG = P.length;

    function tJ(e,t,r) {
        let {
            style: i,
            vars: s,
            transformOrigin: n
        } = e,a =!1,o =!1;
        for (let e in t) {
            let r = t[e];
            if (j.has(e)) {
                a =!0;
                continue
            }
            if (eA(e)) {
                s[e] = r;
                continue
            } {
                let t = tW(r,ec[e]);
                e.startsWith("origin") ? (o =!0,n[e] = t) : i[e] = t
            }
        }
        if (!t.transform && (a || r ? i.transform = function(e,t,r) {
                let i = "",
                    s =!0;
                for (let n = 0; n < tG; n++) {
                    let a = P[n],
                        o = e[a];
                    if (void 0 === o) continue;
                    let l =!0;
                    if ("number" == typeof o) l = o === +!!a.startsWith("scale");
                    else {
                        let e = parseFloat(o);
                        l = a.startsWith("scale") ? 1 === e : 0 === e
                    }
                    if (!l || r) {
                        let e = tW(o,ec[a]);
                        if (!l) {
                            s =!1;
                            let t = tK[a] || a;
                            i += `${t}(${e}) `
                        }
                        r && (t[a] = e)
                    }
                }
                return i = i.trim(),r ? i = r(t,s ? "" : i) : s && (i = "none"),i
            }(t,e.transform,r) : i.transform && (i.transform = "none")),o) {
            let {
                originX: e = "50%",
                originY: t = "50%",
                originZ: r = 0
            } = n;
            i.transformOrigin = `${e} ${t} ${r}`
        }
    }
    let tY = {
            offset: "stroke-dashoffset",
            array: "stroke-dasharray"
        },
        tX = {
            offset: "strokeDashoffset",
            array: "strokeDasharray"
        },
        tQ = ["offsetDistance","offsetPath","offsetRotate","offsetAnchor"];

    function tZ(e,{
        attrX: t,
        attrY: r,
        attrScale: i,
        pathLength: s,
        pathSpacing: n = 1,
        pathOffset: a = 0,
        ...o
    },l,h,u) {
        if (tJ(e,o,h),l) {
            e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
            return
        }
        e.attrs = e.style,e.style = {};
        let {
            attrs: c,
            style: d
        } = e;
        for (let e of (c.transform && (d.transform = c.transform,delete c.transform),(d.transform || c.transformOrigin) && (d.transformOrigin = c.transformOrigin ?? "50% 50%",delete c.transformOrigin),d.transform && (d.transformBox = u ?.transformBox ?? "fill-box",delete c.transformBox),tQ)) void 0!== c[e] && (d[e] = c[e],delete c[e]);
        void 0!== t && (c.x = t),void 0!== r && (c.y = r),void 0!== i && (c.scale = i),void 0!== s && function(e,t,r = 1,i = 0,s =!0) {
            e.pathLength = 1;
            let n = s ? tY : tX;
            e[n.offset] = `${-i}`,e[n.array] = `${t} ${r}`
        }(c,s,n,a,!1)
    }
    let t0 = new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]),
        t1 = e => "string" == typeof e && "svg" === e.toLowerCase();

    function t2(e,{
        style: t,
        vars: r
    },i,s) {
        let n,a = e.style;
        for (n in t) a[n] = t[n];
        for (n in s ?.applyProjectionStyles(a,i),r) a.setProperty(n,r[n])
    }

    function t5(e,t) {
        return t.max === t.min ? 0 : e / (t.max - t.min) * 100
    }
    let t3 = {
            correct: (e,t) => {
                if (!t.target) return e;
                if ("string" == typeof e)
                    if (!W.test(e)) return e;
                    else e = parseFloat(e);
                let r = t5(e,t.target.x),
                    i = t5(e,t.target.y);
                return `${r}% ${i}%`
            }
        },
        t8 = (e,t,r) => e + (t - e) * r,
        t4 = {
            borderRadius: { ...t3,
                applyTo: ["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]
            },
            borderTopLeftRadius: t3,
            borderTopRightRadius: t3,
            borderBottomLeftRadius: t3,
            borderBottomRightRadius: t3,
            boxShadow: {
                correct: (e,{
                    treeScale: t,
                    projectionDelta: r
                }) => {
                    let i = es.parse(e);
                    if (i.length > 5) return e;
                    let s = es.createTransformer(e),
                        n = +("number"!= typeof i[0]),
                        a = r.x.scale * t.x,
                        o = r.y.scale * t.y;
                    i[0 + n] /= a,i[1 + n] /= o;
                    let l = t8(a,o,.5);
                    return "number" == typeof i[2 + n] && (i[2 + n] /= l),"number" == typeof i[3 + n] && (i[3 + n] /= l),s(i)
                }
            }
        };

    function t6(e,{
        layout: t,
        layoutId: r
    }) {
        return j.has(e) || e.startsWith("origin") || (t || void 0!== r) && (!!t4[e] || "opacity" === e)
    }

    function t9(e,t,r) {
        let i = e.style,
            s = t ?.style,
            n = {};
        if (!i) return n;
        for (let t in i)(ev(i[t]) || s && ev(s[t]) || t6(t,e) || r ?.getValue(t) ?.liveStyle!== void 0) && (n[t] = i[t]);
        return n
    }

    function t7(e,t,r) {
        let i = t9(e,t,r);
        for (let r in e)(ev(e[r]) || ev(t[r])) && (i[-1!== P.indexOf(r) ? "attr" + r.charAt(0).toUpperCase() + r.substring(1) : r] = e[r]);
        return i
    }
    class re extends tq {
        constructor() {
            super(...arguments),this.type = "svg",this.isSVGTag =!1,this.measureInstanceViewportBox = ey
        }
        getBaseTargetFromProps(e,t) {
            return e[t]
        }
        readValueFromInstance(e,t) {
            if (j.has(t)) {
                let e = ep(t);
                return e && e.default || 0
            }
            return t = t0.has(t) ? t : tH(t),e.getAttribute(t)
        }
        scrapeMotionValuesFromProps(e,t,r) {
            return t7(e,t,r)
        }
        build(e,t,r) {
            tZ(e,t,this.isSVGTag,r.transformTemplate,r.style)
        }
        renderInstance(e,t,r,i) {
            for (let r in t2(e,t,void 0,i),t.attrs) e.setAttribute(t0.has(r) ? r : tH(r),t.attrs[r])
        }
        mount(e) {
            this.isSVGTag = t1(e.tagName),super.mount(e)
        }
    }

    function rt({
        top: e,
        left: t,
        right: r,
        bottom: i
    }) {
        return {
            x: {
                min: t,
                max: r
            },
            y: {
                min: e,
                max: i
            }
        }
    }

    function rr(e) {
        return void 0 === e || 1 === e
    }

    function ri({
        scale: e,
        scaleX: t,
        scaleY: r
    }) {
        return!rr(e) ||!rr(t) ||!rr(r)
    }

    function rs(e) {
        return ri(e) || rn(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY
    }

    function rn(e) {
        var t,r;
        return (t = e.x) && "0%"!== t || (r = e.y) && "0%"!== r
    }

    function ra(e,t,r,i,s) {
        return void 0!== s && (e = i + s * (e - i)),i + r * (e - i) + t
    }

    function ro(e,t = 0,r = 1,i,s) {
        e.min = ra(e.min,t,r,i,s),e.max = ra(e.max,t,r,i,s)
    }

    function rl(e,{
        x: t,
        y: r
    }) {
        ro(e.x,t.translate,t.scale,t.originPoint),ro(e.y,r.translate,r.scale,r.originPoint)
    }

    function rh(e,t) {
        e.min += t,e.max += t
    }

    function ru(e,t,r,i,s = .5) {
        let n = t8(e.min,e.max,s);
        ro(e,t,r,n,i)
    }

    function rc(e,t) {
        return "string" == typeof e ? parseFloat(e) / 100 * (t.max - t.min) : e
    }

    function rd(e,t,r) {
        let i = r ?? e;
        ru(e.x,rc(t.x,i.x),t.scaleX,t.scale,t.originX),ru(e.y,rc(t.y,i.y),t.scaleY,t.scale,t.originY)
    }

    function rp(e,t) {
        return rt(function(e,t) {
            if (!t) return e;
            let r = t({
                    x: e.left,
                    y: e.top
                }),
                i = t({
                    x: e.right,
                    y: e.bottom
                });
            return {
                top: r.y,
                left: r.x,
                bottom: i.y,
                right: i.x
            }
        }(e.getBoundingClientRect(),t))
    }
    class rf extends tq {
        constructor() {
            super(...arguments),this.type = "html",this.renderInstance = t2
        }
        readValueFromInstance(e,t) {
            if (j.has(t)) return this.projection ?.isProjecting ? eB(t) : ((e,t) => {
                let {
                    transform: r = "none"
                } = getComputedStyle(e);
                return eV(r,t)
            })(e,t); {
                let r = window.getComputedStyle(e),
                    i = (eA(t) ? r.getPropertyValue(t) : r[t]) || 0;
                return "string" == typeof i ? i.trim() : i
            }
        }
        measureInstanceViewportBox(e,{
            transformPagePoint: t
        }) {
            return rp(e,t)
        }
        build(e,t,r) {
            tJ(e,t,r.transformTemplate)
        }
        scrapeMotionValuesFromProps(e,t,r) {
            return t9(e,t,r)
        }
    }
    let rm = ["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];

    function rg(e) {
        if ("string"!= typeof e || e.includes("-"));
        else if (rm.indexOf(e) > -1 || /[A-Z]/u.test(e)) return!0;
        return!1
    }
    let ry = (0,R.createContext)({}),
        rv = (0,R.createContext)({
            strict:!1
        }),
        rw = (0,R.createContext)({
            transformPagePoint: e => e,
            isStatic:!1,
            reducedMotion: "never"
        }),
        rb = (0,R.createContext)({});

    function rx(e) {
        return Array.isArray(e) ? e.join(" ") : e
    }
    let rk = () => ({
        style: {},
        transform: {},
        transformOrigin: {},
        vars: {}
    });

    function rS(e,t,r) {
        for (let i in t) ev(t[i]) || t6(i,r) || (e[i] = t[i])
    }
    let r_ = () => ({ ...rk(),
            attrs: {}
        }),
        rE = new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","propagate","ignoreStrict","viewport"]);

    function rT(e) {
        return e.startsWith("while") || e.startsWith("drag") && "draggable"!== e || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || rE.has(e)
    }
    let rA = e =>!rT(e);
    try {
        h = (() => {
            let e = Error("Cannot find module '@emotion/is-prop-valid'");
            throw e.code = "MODULE_NOT_FOUND",e
        })().default,"function" == typeof h && (rA = e => e.startsWith("on") ?!rT(e) : h(e))
    } catch {}

    function rR(e) {
        return ev(e) ? e.get() : e
    }
    let rP = (0,R.createContext)(null);

    function rj(e) {
        let t = (0,R.useRef)(null);
        return null === t.current && (t.current = e()),t.current
    }
    let rC = e => (t,r) => {
            let i = (0,R.useContext)(rb),
                s = (0,R.useContext)(rP),
                n = () => (function({
                    scrapeMotionValuesFromProps: e,
                    createRenderState: t
                },r,i,s) {
                    return {
                        latestValues: function(e,t,r,i) {
                            let s = {},
                                n = i(e,{});
                            for (let e in n) s[e] = rR(n[e]);
                            let {
                                initial: a,
                                animate: o
                            } = e,l = tI(e),h = t$(e);
                            t && h &&!l &&!1!== e.inherit && (void 0 === a && (a = t.initial),void 0 === o && (o = t.animate));
                            let u =!!r &&!1 === r.initial,
                                c = (u = u ||!1 === a) ? o : a;
                            if (c && "boolean"!= typeof c &&!tj(c)) {
                                let t = Array.isArray(c) ? c : [c];
                                for (let r = 0; r < t.length; r++) {
                                    let i = tB(e,t[r]);
                                    if (i) {
                                        let {
                                            transitionEnd: e,
                                            transition: t,
                                            ...r
                                        } = i;
                                        for (let e in r) {
                                            let t = r[e];
                                            if (Array.isArray(t)) {
                                                let e = u ? t.length - 1 : 0;
                                                t = t[e]
                                            }
                                            null!== t && (s[e] = t)
                                        }
                                        for (let t in e) s[t] = e[t]
                                    }
                                }
                            }
                            return s
                        }(r,i,s,e),
                        renderState: t()
                    }
                })(e,t,i,s);
            return r ? n() : rj(n)
        },
        rO = rC({
            scrapeMotionValuesFromProps: t9,
            createRenderState: rk
        }),
        rN = rC({
            scrapeMotionValuesFromProps: t7,
            createRenderState: r_
        }),
        rI = {
            animation: ["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],
            exit: ["exit"],
            drag: ["drag","dragControls"],
            focus: ["whileFocus"],
            hover: ["whileHover","onHoverStart","onHoverEnd"],
            tap: ["whileTap","onTap","onTapStart","onTapCancel"],
            pan: ["onPan","onPanStart","onPanSessionStart","onPanEnd"],
            inView: ["whileInView","onViewportEnter","onViewportLeave"],
            layout: ["layout","layoutId"]
        },
        r$ =!1;

    function rM() {
        return! function() {
            if (r$) return;
            let e = {};
            for (let t in rI) e[t] = {
                isEnabled: e => rI[t].some(t =>!!e[t])
            };
            tF = e,r$ =!0
        }(),tF
    }
    let rL = Symbol.for("motionComponentSymbol"),
        rD = "data-" + tH("framerAppearId"),
        rU = (0,R.createContext)({});

    function rB(e) {
        return e && "object" == typeof e && Object.prototype.hasOwnProperty.call(e,"current")
    }
    let rV = "u" > typeof window ? R.useLayoutEffect : R.useEffect;

    function rF(e,{
        forwardMotionProps: t =!1,
        type: r
    } = {},i,s) {
        i && function(e) {
            let t = rM();
            for (let r in e) t[r] = { ...t[r],
                ...e[r]
            };
            tF = t
        }(i);
        let n = r ? "svg" === r : rg(e),
            a = n ? rN : rO;

        function o(r,i) {
            var o;
            let l,h,u,c = { ...(0,R.useContext)(rw),
                    ...r,
                    layoutId: function({
                        layoutId: e
                    }) {
                        let t = (0,R.useContext)(ry).id;
                        return t && void 0!== e ? t + "-" + e : e
                    }(r)
                },
                {
                    isStatic: d
                } = c,
                p = function(e) {
                    let {
                        initial: t,
                        animate: r
                    } = function(e,t) {
                        if (tI(e)) {
                            let {
                                initial: t,
                                animate: r
                            } = e;
                            return {
                                initial:!1 === t || tC(t) ? t : void 0,
                                animate: tC(r) ? r : void 0
                            }
                        }
                        return!1!== e.inherit ? t : {}
                    }(e,(0,R.useContext)(rb));
                    return (0,R.useMemo)(() => ({
                        initial: t,
                        animate: r
                    }),[rx(t),rx(r)])
                }(r),
                f = a(r,d);
            if (!d && "u" > typeof window) {
                (0,R.useContext)(rv).strict;
                let t = function(e) {
                    let {
                        drag: t,
                        layout: r
                    } = rM();
                    if (!t &&!r) return {};
                    let i = { ...t,
                        ...r
                    };
                    return {
                        MeasureLayout: t ?.isEnabled(e) || r ?.isEnabled(e) ? i.MeasureLayout : void 0,
                        ProjectionNode: i.ProjectionNode
                    }
                }(c);
                l = t.MeasureLayout,p.visualElement = function(e,t,r,i,s,n) {
                    let {
                        visualElement: a
                    } = (0,R.useContext)(rb),o = (0,R.useContext)(rv),l = (0,R.useContext)(rP),h = (0,R.useContext)(rw),u = h.reducedMotion,c = h.skipAnimations,d = (0,R.useRef)(null),p = (0,R.useRef)(!1);
                    i = i || o.renderer,!d.current && i && (d.current = i(e,{
                        visualState: t,
                        parent: a,
                        props: r,
                        presenceContext: l,
                        blockInitialAnimation:!!l &&!1 === l.initial,
                        reducedMotionConfig: u,
                        skipAnimations: c,
                        isSVG: n
                    }),p.current && d.current && (d.current.manuallyAnimateOnMount =!0));
                    let f = d.current,
                        m = (0,R.useContext)(rU);
                    f &&!f.projection && s && ("html" === f.type || "svg" === f.type) && function(e,t,r,i) {
                        let {
                            layoutId: s,
                            layout: n,
                            drag: a,
                            dragConstraints: o,
                            layoutScroll: l,
                            layoutRoot: h,
                            layoutAnchor: u,
                            layoutCrossfade: c
                        } = t;
                        e.projection = new r(e.latestValues,t["data-framer-portal-id"] ? void 0 : function e(t) {
                            if (t) return!1!== t.options.allowProjection ? t.projection : e(t.parent)
                        }(e.parent)),e.projection.setOptions({
                            layoutId: s,
                            layout: n,
                            alwaysMeasureLayout:!!a || o && rB(o),
                            visualElement: e,
                            animationType: "string" == typeof n ? n : "both",
                            initialPromotionConfig: i,
                            crossfade: c,
                            layoutScroll: l,
                            layoutRoot: h,
                            layoutAnchor: u
                        })
                    }(d.current,r,s,m);
                    let g = (0,R.useRef)(!1);
                    (0,R.useInsertionEffect)(() => {
                        f && g.current && f.update(r,l)
                    });
                    let y = r[rD],
                        v = (0,R.useRef)(!!y && "u" > typeof window &&!window.MotionHandoffIsComplete ?.(y) && window.MotionHasOptimisedAnimation ?.(y));
                    return rV(() => {
                        p.current =!0,f && (g.current =!0,window.MotionIsMounted =!0,f.updateFeatures(),f.scheduleRenderMicrotask(),v.current && f.animationState && f.animationState.animateChanges())
                    }),(0,R.useEffect)(() => {
                        f && (!v.current && f.animationState && f.animationState.animateChanges(),v.current && (queueMicrotask(() => {
                            window.MotionHandoffMarkAsComplete ?.(y)
                        }),v.current =!1),f.enteringChildren = void 0)
                    }),f
                }(e,f,c,s,t.ProjectionNode,n)
            }
            return (0,A.jsxs)(rb.Provider,{
                value: p,
                children: [l && p.visualElement ? (0,A.jsx)(l,{
                    visualElement: p.visualElement,
                    ...c
                }) : null,function(e,t,r,{
                    latestValues: i
                },s,n =!1,a) {
                    let o = (a ?? rg(e) ? function(e,t,r,i) {
                            let s = (0,R.useMemo)(() => {
                                let r = r_();
                                return tZ(r,t,t1(i),e.transformTemplate,e.style),{ ...r.attrs,
                                    style: { ...r.style
                                    }
                                }
                            },[t]);
                            if (e.style) {
                                let t = {};
                                rS(t,e.style,e),s.style = { ...t,
                                    ...s.style
                                }
                            }
                            return s
                        } : function(e,t) {
                            let r,i,s = {},
                                n = (r = e.style || {},rS(i = {},r,e),Object.assign(i,function({
                                    transformTemplate: e
                                },t) {
                                    return (0,R.useMemo)(() => {
                                        let r = rk();
                                        return tJ(r,t,e),Object.assign({},r.vars,r.style)
                                    },[t])
                                }(e,t)),i);
                            return e.drag &&!1!== e.dragListener && (s.draggable =!1,n.userSelect = n.WebkitUserSelect = n.WebkitTouchCallout = "none",n.touchAction =!0 === e.drag ? "none" : `pan-${"x"===e.drag?"y":"x"}`),void 0 === e.tabIndex && (e.onTap || e.onTapStart || e.whileTap) && (s.tabIndex = 0),s.style = n,s
                        })(t,i,s,e),
                        l = function(e,t,r) {
                            let i = {};
                            for (let s in e)("values"!== s || "object"!= typeof e.values) &&!ev(e[s]) && (rA(s) ||!0 === r && rT(s) ||!t &&!rT(s) || e.draggable && s.startsWith("onDrag")) && (i[s] = e[s]);
                            return i
                        }(t,"string" == typeof e,n),
                        h = e!== R.Fragment ? { ...l,
                            ...o,
                            ref: r
                        } : {},
                        {
                            children: u
                        } = t,
                        c = (0,R.useMemo)(() => ev(u) ? u.get() : u,[u]);
                    return (0,R.createElement)(e,{ ...h,
                        children: c
                    })
                }(e,r,(o = p.visualElement,h = (0,R.useRef)(i),(0,R.useInsertionEffect)(() => {
                    h.current = i
                }),u = (0,R.useRef)(null),(0,R.useCallback)(e => {
                    e && f.onMount ?.(e);
                    let t = h.current;
                    if ("function" == typeof t)
                        if (e) {
                            let r = t(e);
                            "function" == typeof r && (u.current = r)
                        } else u.current ? (u.current(),u.current = null) : t(e);
                    else t && (t.current = e);
                    o && (e ? o.mount(e) : o.unmount())
                },[o])),f,d,t,n)]
            })
        }
        o.displayName = `motion.${"string"==typeof e?e:`create(${e.displayName??e.name??""})`}`;
        let l = (0,R.forwardRef)(o);
        return l[rL] = e,l
    }
    class rz {
        constructor(e) {
            this.isMounted =!1,this.node = e
        }
        update() {}
    }

    function rq(e,t,r) {
        let i = e.getProps();
        return tB(i,t,void 0!== r ? r : i.custom,e)
    }

    function rH(e,t) {
        if (e ?.inherit && t) {
            let {
                inherit: r,
                ...i
            } = e;
            return { ...t,
                ...i
            }
        }
        return e
    }

    function rW(e,t) {
        let r = e ?.[t] ?? e ?.default ?? e;
        return r!== e ? rH(r,e) : r
    }
    let rK = e => Array.isArray(e);

    function rG(e,t) {
        let r = e.getValue("willChange");
        if (ev(r) && r.add) return r.add(t);
        if (!r && eG.WillChange) {
            let r = new eG.WillChange("auto");
            e.addValue("willChange",r),r.add(t)
        }
    }
    let rJ = (e,t) => r => t(e(r)),
        rY = (...e) => e.reduce(rJ);

    function rX(e,t,r) {
        return (r < 0 && (r += 1),r > 1 && (r -= 1),r < 1 / 6) ? e + (t - e) * 6 * r : r < .5 ? t : r < 2 / 3 ? e + (t - e) * (2 / 3 - r) * 6 : e
    }

    function rQ(e,t) {
        return r => r > 0 ? t : e
    }
    let rZ = (e,t,r) => {
            let i = e * e,
                s = r * (t * t - i) + i;
            return s < 0 ? 0 : Math.sqrt(s)
        },
        r0 = [F,V,Y];

    function r1(e) {
        let t = r0.find(t => t.test(e));
        if (e_(!!t,`'${e}' is not an animatable color.Use the equivalent color code instead.`,"color-not-animatable"),!t) return!1;
        let r = t.parse(e);
        return t === Y && (r = function({
            hue: e,
            saturation: t,
            lightness: r,
            alpha: i
        }) {
            e /= 360,r /= 100;
            let s = 0,
                n = 0,
                a = 0;
            if (t /= 100) {
                let i = r < .5 ? r * (1 + t) : r + t - r * t,
                    o = 2 * r - i;
                s = rX(o,i,e + 1 / 3),n = rX(o,i,e),a = rX(o,i,e - 1 / 3)
            } else s = n = a = r;
            return {
                red: Math.round(255 * s),
                green: Math.round(255 * n),
                blue: Math.round(255 * a),
                alpha: i
            }
        }(r)),r
    }
    let r2 = (e,t) => {
            let r = r1(e),
                i = r1(t);
            if (!r ||!i) return rQ(e,t);
            let s = { ...r
            };
            return e => (s.red = rZ(r.red,i.red,e),s.green = rZ(r.green,i.green,e),s.blue = rZ(r.blue,i.blue,e),s.alpha = t8(r.alpha,i.alpha,e),V.transform(s))
        },
        r5 = new Set(["none","hidden"]);

    function r3(e,t) {
        return r => t8(e,t,r)
    }

    function r8(e) {
        return "number" == typeof e ? r3 : "string" == typeof e ? eP(e) ? rQ : X.test(e) ? r2 : r9 : Array.isArray(e) ? r4 : "object" == typeof e ? X.test(e) ? r2 : r6 : rQ
    }

    function r4(e,t) {
        let r = [...e],
            i = r.length,
            s = e.map((e,r) => r8(e)(e,t[r]));
        return e => {
            for (let t = 0; t < i; t++) r[t] = s[t](e);
            return r
        }
    }

    function r6(e,t) {
        let r = { ...e,
                ...t
            },
            i = {};
        for (let s in r) void 0!== e[s] && void 0!== t[s] && (i[s] = r8(e[s])(e[s],t[s]));
        return e => {
            for (let t in i) r[t] = i[t](e);
            return r
        }
    }
    let r9 = (e,t) => {
        let r = es.createTransformer(t),
            i = er(e),
            s = er(t);
        if (!(i.indexes.var.length === s.indexes.var.length && i.indexes.color.length === s.indexes.color.length && i.indexes.number.length >= s.indexes.number.length)) return e_(!0,`Complex values '${e}' and '${t}' too different to mix.Ensure all colors are of the same type,and that each contains the same quantity of number and color values.Falling back to instant transition.`,"complex-values-different"),rQ(e,t);
        if (r5.has(e) &&!s.values.length || r5.has(t) &&!i.values.length) return r5.has(e) ? r => r <= 0 ? e : t : r => r >= 1 ? t : e;
        return rY(r4(function(e,t) {
            let r = [],
                i = {
                    color: 0,
                    var: 0,
                    number: 0
                };
            for (let s = 0; s < t.values.length; s++) {
                let n = t.types[s],
                    a = e.indexes[n][i[n]],
                    o = e.values[a] ?? 0;
                r[s] = o,i[n]++
            }
            return r
        }(i,s),s.values),r)
    };

    function r7(e,t,r) {
        return "number" == typeof e && "number" == typeof t && "number" == typeof r ? t8(e,t,r) : r8(e)(e,t)
    }
    let ie = e => {
        let t = ({
            timestamp: t
        }) => e(t);
        return {
            start: (e =!0) => eX.update(t,e),
            stop: () => eQ(t),
            now: () => eZ.isProcessing ? eZ.timestamp : tE.now()
        }
    };

    function it(e) {
        let t = 0,
            r = e.next(t);
        for (;!r.done && t < 2e4;) t += 50,r = e.next(t);
        return t >= 2e4 ? 1 / 0 : t
    }
    let ir = .01,
        ii = 2,
        is = .005,
        ia = .5;

    function io(e,t) {
        return e * Math.sqrt(1 - t * t)
    }
    let il = ["duration","bounce"],
        ih = ["stiffness","damping","mass"];

    function iu(e,t) {
        return t.some(t => void 0!== e[t])
    }

    function ic(e = .3,t = .3) {
        let r,i,s,n,a,o,l = "object"!= typeof e ? {
                visualDuration: e,
                keyframes: [0,1],
                bounce: t
            } : e,
            {
                restSpeed: h,
                restDelta: u
            } = l,
            c = l.keyframes[0],
            d = l.keyframes[l.keyframes.length - 1],
            p = {
                done:!1,
                value: c
            },
            {
                stiffness: f,
                damping: m,
                mass: g,
                duration: y,
                velocity: v,
                isResolvedFromDuration: w
            } = function(e) {
                let t = {
                    velocity: 0,
                    stiffness: 100,
                    damping: 10,
                    mass: 1,
                    isResolvedFromDuration:!1,
                    ...e
                };
                if (!iu(e,ih) && iu(e,il))
                    if (t.velocity = 0,e.visualDuration) {
                        let r = 2 * Math.PI / (1.2 * e.visualDuration),
                            i = r * r,
                            s = 2 * C(.05,1,1 - (e.bounce || 0)) * Math.sqrt(i);
                        t = { ...t,
                            mass: 1,
                            stiffness: i,
                            damping: s
                        }
                    } else {
                        let r = function({
                            duration: e = 800,
                            bounce: t = .3,
                            velocity: r = 0,
                            mass: i = 1
                        }) {
                            let s,n;
                            e_(e <= tr(10),"Spring duration must be 10 seconds or less","spring-duration-limit");
                            let a = 1 - t;
                            a = C(.05,1,a),e = C(.01,10,e / 1e3),a < 1 ? (s = t => {
                                let i = t * a,
                                    s = i * e;
                                return .001 - (i - r) / io(t,a) * Math.exp(-s)
                            },n = t => {
                                let i = t * a * e,
                                    n = Math.pow(a,2) * Math.pow(t,2) * e,
                                    o = Math.exp(-i),
                                    l = io(Math.pow(t,2),a);
                                return (i * r + r - n) * o * (-s(t) + .001 > 0 ? -1 : 1) / l
                            }) : (s = t => -.001 + Math.exp(-t * e) * ((t - r) * e + 1),n = t => e * e * (r - t) * Math.exp(-t * e));
                            let o = function(e,t,r) {
                                let i = r;
                                for (let r = 1; r < 12; r++) i -= e(i) / t(i);
                                return i
                            }(s,n,5 / e);
                            if (e = tr(e),isNaN(o)) return {
                                stiffness: 100,
                                damping: 10,
                                duration: e
                            }; {
                                let t = Math.pow(o,2) * i;
                                return {
                                    stiffness: t,
                                    damping: 2 * a * Math.sqrt(i * t),
                                    duration: e
                                }
                            }
                        }({ ...e,
                            velocity: 0
                        });
                        (t = { ...t,
                            ...r,
                            mass: 1
                        }).isResolvedFromDuration =!0
                    }
                return t
            }({ ...l,
                velocity: -((l.velocity || 0) / 1e3)
            }),
            b = v || 0,
            x = m / (2 * Math.sqrt(f * g)),
            k = d - c,
            S = Math.sqrt(f / g) / 1e3,
            _ = 5 > Math.abs(k);
        if (h || (h = _ ? ir : ii),u || (u = _ ? is : ia),x < 1) s = io(S,x),n = (b + x * S * k) / s,r = e => d - Math.exp(-x * S * e) * (n * Math.sin(s * e) + k * Math.cos(s * e)),a = x * S * n + k * s,o = x * S * k - n * s,i = e => Math.exp(-x * S * e) * (a * Math.sin(s * e) + o * Math.cos(s * e));
        else if (1 === x) {
            r = e => d - Math.exp(-S * e) * (k + (b + S * k) * e);
            let e = b + S * k;
            i = t => Math.exp(-S * t) * (S * e * t - b)
        } else {
            let e = S * Math.sqrt(x * x - 1);
            r = t => {
                let r = Math.exp(-x * S * t),
                    i = Math.min(e * t,300);
                return d - r * ((b + x * S * k) * Math.sinh(i) + e * k * Math.cosh(i)) / e
            };
            let t = (b + x * S * k) / e,
                s = x * S * t - k * e,
                n = x * S * k - t * e;
            i = t => {
                let r = Math.exp(-x * S * t),
                    i = Math.min(e * t,300);
                return r * (s * Math.sinh(i) + n * Math.cosh(i))
            }
        }
        let E = {
            calculatedDuration: w && y || null,
            velocity: e => tr(i(e)),
            next: e => {
                if (!w && x < 1) {
                    let t = Math.exp(-x * S * e),
                        r = Math.sin(s * e),
                        i = Math.cos(s * e),
                        l = d - t * (n * r + k * i);
                    return p.done = Math.abs(tr(t * (a * r + o * i))) <= h && Math.abs(d - l) <= u,p.value = p.done ? d : l,p
                }
                let t = r(e);
                return w ? p.done = e >= y : p.done = Math.abs(tr(i(e))) <= h && Math.abs(d - t) <= u,p.value = p.done ? d : t,p
            },
            toString: () => {
                let e = Math.min(it(E),2e4),
                    t = ty(t => E.next(e * t).value,e,30);
                return e + "ms " + t
            },
            toTransition: () => {}
        };
        return E
    }

    function id(e,t,r) {
        var i,s;
        let n = Math.max(t - 5,0);
        return i = r - e(n),(s = t - n) ? 1e3 / s * i : 0
    }

    function ip({
        keyframes: e,
        velocity: t = 0,
        power: r = .8,
        timeConstant: i = 325,
        bounceDamping: s = 10,
        bounceStiffness: n = 500,
        modifyTarget: a,
        min: o,
        max: l,
        restDelta: h = .5,
        restSpeed: u
    }) {
        let c,d,p = e[0],
            f = {
                done:!1,
                value: p
            },
            m = r * t,
            g = p + m,
            y = void 0 === a ? g : a(g);
        y!== g && (m = y - p);
        let v = e => -m * Math.exp(-e / i),
            w = e => y + v(e),
            b = e => {
                let t = v(e),
                    r = w(e);
                f.done = Math.abs(t) <= h,f.value = f.done ? y : r
            },
            x = e => {
                let t;
                if (t = f.value,void 0!== o && t < o || void 0!== l && t > l) {
                    var r;
                    c = e,d = ic({
                        keyframes: [f.value,(r = f.value,void 0 === o ? l : void 0 === l || Math.abs(o - r) < Math.abs(l - r) ? o : l)],
                        velocity: id(w,e,f.value),
                        damping: s,
                        stiffness: n,
                        restDelta: h,
                        restSpeed: u
                    })
                }
            };
        return x(0),{
            calculatedDuration: null,
            next: e => {
                let t =!1;
                return (d || void 0!== c || (t =!0,b(e),x(e)),void 0!== c && e >= c) ? d.next(e - c) : (t || b(e),f)
            }
        }
    }
    ic.applyToOptions = e => {
        let t = function(e,t = 100,r) {
            let i = r({ ...e,
                    keyframes: [0,t]
                }),
                s = Math.min(it(i),2e4);
            return {
                type: "keyframes",
                ease: e => i.next(s * e).value / t,
                duration: s / 1e3
            }
        }(e,100,ic);
        return e.ease = t.ease,e.duration = tr(t.duration),e.type = "keyframes",e
    };
    let im = (e,t,r) => (((1 - 3 * r + 3 * t) * e + (3 * r - 6 * t)) * e + 3 * t) * e;

    function ig(e,t,r,i) {
        return e === t && r === i ? eK : s => 0 === s || 1 === s ? s : im(function(e,t,r,i,s) {
            let n,a,o = 0;
            do(n = im(a = t + (r - t) / 2,i,s) - e) > 0 ? r = a : t = a; while (Math.abs(n) > 1e-7 && ++o < 12) return a
        }(s,0,1,e,r),t,i)
    }
    let iy = ig(.42,0,1,1),
        iv = ig(0,0,.58,1),
        iw = ig(.42,0,.58,1),
        ib = e => t => t <= .5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
        ix = e => t => 1 - e(1 - t),
        ik = ig(.33,1.53,.69,.99),
        iS = ix(ik),
        i_ = ib(iS),
        iE = e => e >= 1 ? 1 : (e *= 2) < 1 ?.5 * iS(e) : .5 * (2 - Math.pow(2,-10 * (e - 1))),
        iT = e => 1 - Math.sin(Math.acos(e)),
        iA = ix(iT),
        iR = ib(iT),
        iP = {
            linear: eK,
            easeIn: iy,
            easeInOut: iw,
            easeOut: iv,
            circIn: iT,
            circInOut: iR,
            circOut: iA,
            backIn: iS,
            backInOut: i_,
            backOut: ik,
            anticipate: iE
        },
        ij = e => {
            if (tm(e)) {
                eE(4 === e.length,"Cubic bezier arrays must contain four numerical values.","cubic-bezier-length");
                let [t,r,i,s] = e;
                return ig(t,r,i,s)
            }
            return "string" == typeof e ? (eE(void 0!== iP[e],`Invalid easing type '${e}'`,"invalid-easing-type"),iP[e]) : e
        },
        iC = (e,t,r) => {
            let i = t - e;
            return 0 === i ? 1 : (r - e) / i
        };

    function iO({
        duration: e = 300,
        keyframes: t,
        times: r,
        ease: i = "easeInOut"
    }) {
        var s;
        let n,a = Array.isArray(i) && "number"!= typeof i[0] ? i.map(ij) : ij(i),
            o = {
                done:!1,
                value: t[0]
            },
            l = function(e,t,{
                clamp: r =!0,
                ease: i,
                mixer: s
            } = {}) {
                let n = e.length;
                if (eE(n === t.length,"Both input and output ranges must be the same length","range-length"),1 === n) return () => t[0];
                if (2 === n && t[0] === t[1]) return () => t[1];
                let a = e[0] === e[1];
                e[0] > e[n - 1] && (e = [...e].reverse(),t = [...t].reverse());
                let o = function(e,t,r) {
                        let i = [],
                            s = r || eG.mix || r7,
                            n = e.length - 1;
                        for (let r = 0; r < n; r++) {
                            let n = s(e[r],e[r + 1]);
                            t && (n = rY(Array.isArray(t) ? t[r] || eK : t,n)),i.push(n)
                        }
                        return i
                    }(t,i,s),
                    l = o.length,
                    h = r => {
                        if (a && r < e[0]) return t[0];
                        let i = 0;
                        if (l > 1)
                            for (; i < e.length - 2 &&!(r < e[i + 1]); i++);
                        let s = iC(e[i],e[i + 1],r);
                        return o[i](s)
                    };
                return r ? t => h(C(e[0],e[n - 1],t)) : h
            }((s = r && r.length === t.length ? r : (! function(e,t) {
                let r = e[e.length - 1];
                for (let i = 1; i <= t; i++) {
                    let s = iC(0,t,i);
                    e.push(t8(r,1,s))
                }
            }(n = [0],t.length - 1),n),s.map(t => t * e)),t,{
                ease: Array.isArray(a) ? a : t.map(() => a || iw).splice(0,t.length - 1)
            });
        return {
            calculatedDuration: e,
            next: t => (o.value = l(t),o.done = t >= e,o)
        }
    }
    let iN = {
        decay: ip,
        inertia: ip,
        tween: iO,
        keyframes: iO,
        spring: ic
    };

    function iI(e) {
        "string" == typeof e.type && (e.type = iN[e.type])
    }
    let i$ = e => e / 100;
    class iM extends tp {
        constructor(e) {
            super(),this.state = "idle",this.startTime = null,this.isStopped =!1,this.currentTime = 0,this.holdTime = null,this.playbackSpeed = 1,this.delayState = {
                done:!1,
                value: void 0
            },this.stop = () => {
                let {
                    motionValue: e
                } = this.options;
                e && e.updatedAt!== tE.now() && this.tick(tE.now()),this.isStopped =!0,"idle"!== this.state && (this.teardown(),this.options.onStop ?.())
            },tf.mainThread++,this.options = e,this.initAnimation(),this.play(),!1 === e.autoplay && this.pause()
        }
        initAnimation() {
            let {
                options: e
            } = this;
            iI(e);
            let {
                type: t = iO,
                repeat: r = 0,
                repeatDelay: i = 0,
                repeatType: s,
                velocity: n = 0
            } = e,{
                keyframes: a
            } = e,o = t || iO;
            o!== iO && "number"!= typeof a[0] && (this.mixKeyframes = rY(i$,r7(a[0],a[1])),a = [0,100]);
            let l = o({ ...e,
                keyframes: a
            });
            "mirror" === s && (this.mirroredGenerator = o({ ...e,
                keyframes: [...a].reverse(),
                velocity: -n
            })),null === l.calculatedDuration && (l.calculatedDuration = it(l));
            let {
                calculatedDuration: h
            } = l;
            this.calculatedDuration = h,this.resolvedDuration = h + i,this.totalDuration = this.resolvedDuration * (r + 1) - i,this.generator = l
        }
        updateTime(e) {
            let t = Math.round(e - this.startTime) * this.playbackSpeed;
            null!== this.holdTime ? this.currentTime = this.holdTime : this.currentTime = t
        }
        tick(e,t =!1) {
            let r,{
                generator: i,
                totalDuration: s,
                mixKeyframes: n,
                mirroredGenerator: a,
                resolvedDuration: o,
                calculatedDuration: l
            } = this;
            if (null === this.startTime) return i.next(0);
            let {
                delay: h = 0,
                keyframes: u,
                repeat: c,
                repeatType: d,
                repeatDelay: p,
                type: f,
                onUpdate: m,
                finalKeyframe: g
            } = this.options;
            this.speed > 0 ? this.startTime = Math.min(this.startTime,e) : this.speed < 0 && (this.startTime = Math.min(e - s / this.speed,this.startTime)),t ? this.currentTime = e : this.updateTime(e);
            let y = this.currentTime - h * (this.playbackSpeed >= 0 ? 1 : -1),
                v = this.playbackSpeed >= 0 ? y < 0 : y > s;
            this.currentTime = Math.max(y,0),"finished" === this.state && null === this.holdTime && (this.currentTime = s);
            let w = this.currentTime,
                b = i;
            if (c) {
                let e = Math.min(this.currentTime,s) / o,
                    t = Math.floor(e),
                    r = e % 1;
               !r && e >= 1 && (r = 1),1 === r && t--,(t = Math.min(t,c + 1)) % 2 && ("reverse" === d ? (r = 1 - r,p && (r -= p / o)) : "mirror" === d && (b = a)),w = C(0,1,r) * o
            }
            v ? (this.delayState.value = u[0],r = this.delayState) : r = b.next(w),n &&!v && (r.value = n(r.value));
            let {
                done: x
            } = r;
            v || null === l || (x = this.playbackSpeed >= 0 ? this.currentTime >= s : this.currentTime <= 0);
            let k = null === this.holdTime && ("finished" === this.state || "running" === this.state && x);
            return k && f!== ip && (r.value = td(u,this.options,g,this.speed)),m && m(r.value),k && this.finish(),r
        }
        then(e,t) {
            return this.finished.then(e,t)
        }
        get duration() {
            return this.calculatedDuration / 1e3
        }
        get iterationDuration() {
            let {
                delay: e = 0
            } = this.options || {};
            return this.duration + e / 1e3
        }
        get time() {
            return this.currentTime / 1e3
        }
        set time(e) {
            e = tr(e),this.currentTime = e,null === this.startTime || null!== this.holdTime || 0 === this.playbackSpeed ? this.holdTime = e : this.driver && (this.startTime = this.driver.now() - e / this.playbackSpeed),this.driver ? this.driver.start(!1) : (this.startTime = 0,this.state = "paused",this.holdTime = e,this.tick(e))
        }
        getGeneratorVelocity() {
            let e = this.currentTime;
            if (e <= 0) return this.options.velocity || 0;
            if (this.generator.velocity) return this.generator.velocity(e);
            let t = this.generator.next(e).value;
            return id(e => this.generator.next(e).value,e,t)
        }
        get speed() {
            return this.playbackSpeed
        }
        set speed(e) {
            let t = this.playbackSpeed!== e;
            t && this.driver && this.updateTime(tE.now()),this.playbackSpeed = e,t && this.driver && (this.time = this.currentTime / 1e3)
        }
        play() {
            if (this.isStopped) return;
            let {
                driver: e = ie,
                startTime: t
            } = this.options;
            this.driver || (this.driver = e(e => this.tick(e))),this.options.onPlay ?.();
            let r = this.driver.now();
            "finished" === this.state ? (this.updateFinished(),this.startTime = r) : null!== this.holdTime ? this.startTime = r - this.holdTime : this.startTime || (this.startTime = t ?? r),"finished" === this.state && this.speed < 0 && (this.startTime += this.calculatedDuration),this.holdTime = null,this.state = "running",this.driver.start()
        }
        pause() {
            this.state = "paused",this.updateTime(tE.now()),this.holdTime = this.currentTime
        }
        complete() {
            "running"!== this.state && this.play(),this.state = "finished",this.holdTime = null
        }
        finish() {
            this.notifyFinished(),this.teardown(),this.state = "finished",this.options.onComplete ?.()
        }
        cancel() {
            this.holdTime = null,this.startTime = 0,this.tick(0),this.teardown(),this.options.onCancel ?.()
        }
        teardown() {
            this.state = "idle",this.stopDriver(),this.startTime = this.holdTime = null,tf.mainThread--
        }
        stopDriver() {
            this.driver && (this.driver.stop(),this.driver = void 0)
        }
        sample(e) {
            return this.startTime = 0,this.tick(e,!0)
        }
        attachTimeline(e) {
            return this.options.allowFlatten && (this.options.type = "keyframes",this.options.ease = "linear",this.initAnimation()),this.driver ?.stop(),e.observe(this)
        }
    }
    let iL = {
        anticipate: iE,
        backInOut: i_,
        circInOut: iR
    };
    class iD extends tx {
        constructor(e) {
           ! function(e) {
                "string" == typeof e.ease && e.ease in iL && (e.ease = iL[e.ease])
            }(e),iI(e),super(e),void 0!== e.startTime &&!1!== e.autoplay && (this.startTime = e.startTime),this.options = e
        }
        updateMotionValue(e) {
            let {
                motionValue: t,
                onUpdate: r,
                onComplete: i,
                element: s,
                ...n
            } = this.options;
            if (!t) return;
            if (void 0!== e) return void t.set(e);
            let a = new iM({ ...n,
                    autoplay:!1
                }),
                o = Math.max(10,tE.now() - this.startTime),
                l = C(0,10,o - 10),
                h = a.sample(o).value,
                {
                    name: u
                } = this.options;
            s && u && ta(s,u,h),t.setWithVelocity(a.sample(Math.max(0,o - l)).value,h,l),a.stop()
        }
    }
    let iU = (e,t) => "zIndex"!== t &&!!("number" == typeof e || Array.isArray(e) || "string" == typeof e && (es.test(e) || "0" === e) &&!e.startsWith("url("));

    function iB(e) {
        e.duration = 0,e.type = "keyframes"
    }
    let iV = /^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/,
        iF = new Set(["color","backgroundColor","outlineColor","fill","stroke","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor"]),
        iz = to(() => Object.hasOwnProperty.call(Element.prototype,"animate"));
    class iq extends tp {
        constructor({
            autoplay: e =!0,
            delay: t = 0,
            type: r = "keyframes",
            repeat: i = 0,
            repeatDelay: s = 0,
            repeatType: n = "loop",
            keyframes: a,
            name: o,
            motionValue: l,
            element: h,
            ...u
        }) {
            super(),this.stop = () => {
                this._animation && (this._animation.stop(),this.stopTimeline ?.()),this.keyframeResolver ?.cancel()
            },this.createdAt = tE.now();
            const c = {
                    autoplay: e,
                    delay: t,
                    type: r,
                    repeat: i,
                    repeatDelay: s,
                    repeatType: n,
                    name: o,
                    motionValue: l,
                    element: h,
                    ...u
                },
                d = h ?.KeyframeResolver || e6;
            this.keyframeResolver = new d(a,(e,t,r) => this.onKeyframesResolved(e,t,c,!r),o,l,h),this.keyframeResolver ?.scheduleResolve()
        }
        onKeyframesResolved(e,t,r,i) {
            let s;
            this.keyframeResolver = void 0;
            let {
                name: n,
                type: a,
                velocity: o,
                delay: l,
                isHandoff: h,
                onUpdate: u
            } = r;
            this.resolvedAt = tE.now();
            let c =!0;
           ! function(e,t,r,i) {
                let s = e[0];
                if (null === s) return!1;
                if ("display" === t || "visibility" === t) return!0;
                let n = e[e.length - 1],
                    a = iU(s,t),
                    o = iU(n,t);
                return e_(a === o,`You are trying to animate ${t} from "${s}" to "${n}"."${a?n:s}" is not an animatable value.`,"value-not-animatable"),!!a &&!!o && (function(e) {
                    let t = e[0];
                    if (1 === e.length) return!0;
                    for (let r = 0; r < e.length; r++)
                        if (e[r]!== t) return!0
                }(e) || ("spring" === r || tb(r)) && i)
            }(e,n,a,o) && (c =!1,(eG.instantAnimations ||!l) && u ?.(td(e,r,t)),e[0] = e[e.length - 1],iB(r),r.repeat = 0);
            let d = {
                    startTime: i ? this.resolvedAt && this.resolvedAt - this.createdAt > 40 ? this.resolvedAt : this.createdAt : void 0,
                    finalKeyframe: t,
                    ...r,
                    keyframes: e
                },
                p = c &&!h && function(e) {
                    let {
                        motionValue: t,
                        name: r,
                        repeatDelay: i,
                        repeatType: s,
                        damping: n,
                        type: a,
                        keyframes: o
                    } = e;
                    if (!(t ?.owner ?.current instanceof HTMLElement)) return!1;
                    let {
                        onUpdate: l,
                        transformTemplate: h
                    } = t.owner.getProps();
                    return iz() && r && (tk.has(r) || iF.has(r) && function(e) {
                        for (let t = 0; t < e.length; t++)
                            if ("string" == typeof e[t] && iV.test(e[t])) return!0;
                        return!1
                    }(o)) && ("transform"!== r ||!h) &&!l &&!i && "mirror"!== s && 0!== n && "inertia"!== a
                }(d),
                f = d.motionValue ?.owner ?.current;
            if (p) try {
                s = new iD({ ...d,
                    element: f
                })
            } catch {
                s = new iM(d)
            } else s = new iM(d);
            s.finished.then(() => {
                this.notifyFinished()
            }).catch(eK),this.pendingTimeline && (this.stopTimeline = s.attachTimeline(this.pendingTimeline),this.pendingTimeline = void 0),this._animation = s
        }
        get finished() {
            return this._animation ? this.animation.finished : this._finished
        }
        then(e,t) {
            return this.finished.finally(e).then(() => {})
        }
        get animation() {
            return this._animation || (this.keyframeResolver ?.resume(),e3 =!0,e4(),e8(),e3 =!1),this._animation
        }
        get duration() {
            return this.animation.duration
        }
        get iterationDuration() {
            return this.animation.iterationDuration
        }
        get time() {
            return this.animation.time
        }
        set time(e) {
            this.animation.time = e
        }
        get speed() {
            return this.animation.speed
        }
        get state() {
            return this.animation.state
        }
        set speed(e) {
            this.animation.speed = e
        }
        get startTime() {
            return this.animation.startTime
        }
        attachTimeline(e) {
            return this._animation ? this.stopTimeline = this.animation.attachTimeline(e) : this.pendingTimeline = e,() => this.stop()
        }
        play() {
            this.animation.play()
        }
        pause() {
            this.animation.pause()
        }
        complete() {
            this.animation.complete()
        }
        cancel() {
            this._animation && this.animation.cancel(),this.keyframeResolver ?.cancel()
        }
    }
    let iH = {
            type: "spring",
            stiffness: 500,
            damping: 25,
            restSpeed: 10
        },
        iW = {
            type: "keyframes",
            duration: .8
        },
        iK = {
            type: "keyframes",
            ease: [.25,.1,.35,1],
            duration: .3
        },
        iG = new Set(["when","delay","delayChildren","staggerChildren","staggerDirection","repeat","repeatType","repeatDelay","from","elapsed"]),
        iJ = (e,t,r,i = {},s,n) => a => {
            let o = rW(i,e) || {},
                l = o.delay || i.delay || 0,
                {
                    elapsed: h = 0
                } = i;
            h -= tr(l);
            let u = {
                keyframes: Array.isArray(r) ? r : [null,r],
                ease: "easeOut",
                velocity: t.getVelocity(),
                ...o,
                delay: -h,
                onUpdate: e => {
                    t.set(e),o.onUpdate && o.onUpdate(e)
                },
                onComplete: () => {
                    a(),o.onComplete && o.onComplete()
                },
                name: e,
                motionValue: t,
                element: n ? void 0 : s
            };
           ! function(e) {
                for (let t in e)
                    if (!iG.has(t)) return!0;
                return!1
            }(o) && Object.assign(u,((e,{
                keyframes: t
            }) => t.length > 2 ? iW : j.has(e) ? e.startsWith("scale") ? {
                type: "spring",
                stiffness: 550,
                damping: 0 === t[1] ? 2 * Math.sqrt(550) : 30,
                restSpeed: 10
            } : iH : iK)(e,u)),u.duration && (u.duration = tr(u.duration)),u.repeatDelay && (u.repeatDelay = tr(u.repeatDelay)),void 0!== u.from && (u.keyframes[0] = u.from);
            let c =!1;
            if (!1!== u.type && (0!== u.duration || u.repeatDelay) || (iB(u),0 === u.delay && (c =!0)),(eG.instantAnimations || eG.skipAnimations || s ?.shouldSkipAnimations) && (c =!0,iB(u),u.delay = 0),u.allowFlatten =!o.type &&!o.ease,c &&!n && void 0!== t.get()) {
                let e = td(u.keyframes,o);
                if (void 0!== e) return void eX.update(() => {
                    u.onUpdate(e),u.onComplete()
                })
            }
            return o.isSync ? new iM(u) : new iq(u)
        };

    function iY(e,t,{
        delay: r = 0,
        transitionOverride: i,
        type: s
    } = {}) {
        let {
            transition: n,
            transitionEnd: a,
            ...o
        } = t,l = e.getDefaultTransition();
        n = n ? rH(n,l) : l;
        let h = n ?.reduceMotion;
        i && (n = i);
        let u = [],
            c = s && e.animationState && e.animationState.getState()[s];
        for (let t in o) {
            let i = e.getValue(t,e.latestValues[t] ?? null),
                s = o[t];
            if (void 0 === s || c && function({
                    protectedKeys: e,
                    needsAnimating: t
                },r) {
                    let i = e.hasOwnProperty(r) &&!0!== t[r];
                    return t[r] =!1,i
                }(c,t)) continue;
            let a = {
                    delay: r,
                    ...rW(n || {},t)
                },
                l = i.get();
            if (void 0!== l &&!i.isAnimating() &&!Array.isArray(s) && s === l &&!a.velocity) {
                eX.update(() => i.set(s));
                continue
            }
            let d =!1;
            if (window.MotionHandoffAnimation) {
                let r = e.props[rD];
                if (r) {
                    let e = window.MotionHandoffAnimation(r,t,eX);
                    null!== e && (a.startTime = e,d =!0)
                }
            }
            rG(e,t);
            let p = h ?? e.shouldReduceMotion;
            i.start(iJ(t,i,s,p && ew.has(t) ? {
                type:!1
            } : a,e,d));
            let f = i.animation;
            f && u.push(f)
        }
        if (a) {
            let t = () => eX.update(() => {
                a && function(e,t) {
                    let {
                        transitionEnd: r = {},
                        transition: i = {},
                        ...s
                    } = rq(e,t) || {};
                    for (let t in s = { ...s,
                            ...r
                        }) {
                        var n;
                        let r = rK(n = s[t]) ? n[n.length - 1] || 0 : n;
                        e.hasValue(t) ? e.getValue(t).set(r) : e.addValue(t,tA(r))
                    }
                }(e,a)
            });
            u.length ? Promise.all(u).then(t) : t()
        }
        return u
    }

    function iX(e,t,r,i = 0,s = 1) {
        let n = Array.from(e).sort((e,t) => e.sortNodePosition(t)).indexOf(t),
            a = e.size,
            o = (a - 1) * i;
        return "function" == typeof r ? r(n,a) : 1 === s ? n * i : o - n * i
    }

    function iQ(e,t,r = {}) {
        let i = rq(e,t,"exit" === r.type ? e.presenceContext ?.custom : void 0),
            {
                transition: s = e.getDefaultTransition() || {}
            } = i || {};
        r.transitionOverride && (s = r.transitionOverride);
        let n = i ? () => Promise.all(iY(e,i,r)) : () => Promise.resolve(),
            a = e.variantChildren && e.variantChildren.size ? (i = 0) => {
                let {
                    delayChildren: n = 0,
                    staggerChildren: a,
                    staggerDirection: o
                } = s;
                return function(e,t,r = 0,i = 0,s = 0,n = 1,a) {
                    let o = [];
                    for (let l of e.variantChildren) l.notify("AnimationStart",t),o.push(iQ(l,t,{ ...a,
                        delay: r + ("function" == typeof i ? 0 : i) + iX(e.variantChildren,l,i,s,n)
                    }).then(() => l.notify("AnimationComplete",t)));
                    return Promise.all(o)
                }(e,t,i,n,a,o,r)
            } : () => Promise.resolve(),
            {
                when: o
            } = s;
        if (!o) return Promise.all([n(),a(r.delay)]); {
            let [e,t] = "beforeChildren" === o ? [n,a] : [a,n];
            return e().then(() => t())
        }
    }
    let iZ = tN.length;

    function i0(e,t) {
        if (!Array.isArray(t)) return!1;
        let r = t.length;
        if (r!== e.length) return!1;
        for (let i = 0; i < r; i++)
            if (t[i]!== e[i]) return!1;
        return!0
    }
    let i1 = [...tO].reverse(),
        i2 = tO.length;

    function i5(e =!1) {
        return {
            isActive: e,
            protectedKeys: {},
            needsAnimating: {},
            prevResolvedValues: {}
        }
    }

    function i3() {
        return {
            animate: i5(!0),
            whileInView: i5(),
            whileHover: i5(),
            whileTap: i5(),
            whileDrag: i5(),
            whileFocus: i5(),
            exit: i5()
        }
    }
    let i8 = 0;

    function i4(e) {
        return [e("x"),e("y")]
    }

    function i6(e,t,r,i = {
        passive:!0
    }) {
        return e.addEventListener(t,r,i),() => e.removeEventListener(t,r)
    }
    let i9 = {
        x:!1,
        y:!1
    };

    function i7(e) {
        return e.max - e.min
    }

    function se(e,t,r,i = .5) {
        e.origin = i,e.originPoint = t8(t.min,t.max,e.origin),e.scale = i7(r) / i7(t),e.translate = t8(r.min,r.max,e.origin) - e.originPoint,(e.scale >= .9999 && e.scale <= 1.0001 || isNaN(e.scale)) && (e.scale = 1),(e.translate >= -.01 && e.translate <= .01 || isNaN(e.translate)) && (e.translate = 0)
    }

    function st(e,t,r,i) {
        se(e.x,t.x,r.x,i ? i.originX : void 0),se(e.y,t.y,r.y,i ? i.originY : void 0)
    }

    function sr(e,t,r,i = 0) {
        e.min = (i ? t8(r.min,r.max,i) : r.min) + t.min,e.max = e.min + i7(t)
    }

    function si(e,t,r,i = 0) {
        let s = i ? t8(r.min,r.max,i) : r.min;
        e.min = t.min - s,e.max = e.min + i7(t)
    }

    function ss(e,t,r,i) {
        si(e.x,t.x,r.x,i ?.x),si(e.y,t.y,r.y,i ?.y)
    }

    function sn(e) {
        return "object" == typeof e && null!== e
    }

    function sa(e) {
        return sn(e) && "ownerSVGElement" in e
    }

    function so(e,t,r) {
        if (null == e) return [];
        if (e instanceof EventTarget) return [e];
        if ("string" == typeof e) {
            let i = document;
            t && (i = t.current);
            let s = r ?.[e] ?? i.querySelectorAll(e);
            return s ? Array.from(s) : []
        }
        return Array.from(e).filter(e => null!= e)
    }
    let sl = new WeakMap,
        sh = (e,t,r) => (i,s) => s && s[0] ? s[0][e + "Size"] : sa(i) && "getBBox" in i ? i.getBBox()[t] : i[r],
        su = sh("inline","width","offsetWidth"),
        sc = sh("block","height","offsetHeight");

    function sd({
        target: e,
        borderBoxSize: t
    }) {
        sl.get(e) ?.forEach(r => {
            r(e,{
                get width() {
                    return su(e,t)
                },
                get height() {
                    return sc(e,t)
                }
            })
        })
    }

    function sp(e) {
        e.forEach(sd)
    }
    let sf = new Set;

    function sm(e,t) {
        let s;
        return "function" == typeof e ? (sf.add(e),i || (i = () => {
            let e = {
                get width() {
                    return window.innerWidth
                },
                get height() {
                    return window.innerHeight
                }
            };
            sf.forEach(t => t(e))
        },window.addEventListener("resize",i)),() => {
            sf.delete(e),sf.size || "function"!= typeof i || (window.removeEventListener("resize",i),i = void 0)
        }) : (!r && "u" > typeof ResizeObserver && (r = new ResizeObserver(sp)),(s = so(e)).forEach(e => {
            let i = sl.get(e);
            i || (i = new Set,sl.set(e,i)),i.add(t),r ?.observe(e)
        }),() => {
            s.forEach(e => {
                let i = sl.get(e);
                i ?.delete(t),i ?.size || r ?.unobserve(e)
            })
        })
    }
    let sg = new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]),
        sy = new Set(["INPUT","SELECT","TEXTAREA"]),
        sv = e => "mouse" === e.pointerType ? "number"!= typeof e.button || e.button <= 0 :!1!== e.isPrimary;

    function sw(e) {
        return {
            point: {
                x: e.pageX,
                y: e.pageY
            }
        }
    }

    function sb(e,t,r,i) {
        return i6(e,t,e => sv(e) && r(e,sw(e)),i)
    }
    let sx = ({
            current: e
        }) => e ? e.ownerDocument.defaultView : null,
        sk = (e,t) => Math.abs(e - t),
        sS = new Set(["auto","scroll"]);
    class s_ {
        constructor(e,t,{
            transformPagePoint: r,
            contextWindow: i = window,
            dragSnapToOrigin: s =!1,
            distanceThreshold: n = 3,
            element: a
        } = {}) {
            if (this.startEvent = null,this.lastMoveEvent = null,this.lastMoveEventInfo = null,this.lastRawMoveEventInfo = null,this.handlers = {},this.contextWindow = window,this.scrollPositions = new Map,this.removeScrollListeners = null,this.onElementScroll = e => {
                    this.handleScroll(e.target)
                },this.onWindowScroll = () => {
                    this.handleScroll(window)
                },this.updatePoint = () => {
                    var e,t;
                    if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
                    this.lastRawMoveEventInfo && (this.lastMoveEventInfo = sE(this.lastRawMoveEventInfo,this.transformPagePoint));
                    let r = sA(this.lastMoveEventInfo,this.history),
                        i = null!== this.startEvent,
                        s = (e = r.offset,t = {
                            x: 0,
                            y: 0
                        },Math.sqrt(sk(e.x,t.x) ** 2 + sk(e.y,t.y) ** 2) >= this.distanceThreshold);
                    if (!i &&!s) return;
                    let {
                        point: n
                    } = r,{
                        timestamp: a
                    } = eZ;
                    this.history.push({ ...n,
                        timestamp: a
                    });
                    let {
                        onStart: o,
                        onMove: l
                    } = this.handlers;
                    i || (o && o(this.lastMoveEvent,r),this.startEvent = this.lastMoveEvent),l && l(this.lastMoveEvent,r)
                },this.handlePointerMove = (e,t) => {
                    this.lastMoveEvent = e,this.lastRawMoveEventInfo = t,this.lastMoveEventInfo = sE(t,this.transformPagePoint),eX.update(this.updatePoint,!0)
                },this.handlePointerUp = (e,t) => {
                    this.end();
                    let {
                        onEnd: r,
                        onSessionEnd: i,
                        resumeAnimation: s
                    } = this.handlers;
                    if ((this.dragSnapToOrigin ||!this.startEvent) && s && s(),!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
                    let n = sA("pointercancel" === e.type ? this.lastMoveEventInfo : sE(t,this.transformPagePoint),this.history);
                    this.startEvent && r && r(e,n),i && i(e,n)
                },!sv(e)) return;
            this.dragSnapToOrigin = s,this.handlers = t,this.transformPagePoint = r,this.distanceThreshold = n,this.contextWindow = i || window;
            const o = sE(sw(e),this.transformPagePoint),
                {
                    point: l
                } = o,
                {
                    timestamp: h
                } = eZ;
            this.history = [{ ...l,
                timestamp: h
            }];
            const {
                onSessionStart: u
            } = t;
            u && u(e,sA(o,this.history)),this.removeListeners = rY(sb(this.contextWindow,"pointermove",this.handlePointerMove),sb(this.contextWindow,"pointerup",this.handlePointerUp),sb(this.contextWindow,"pointercancel",this.handlePointerUp)),a && this.startScrollTracking(a)
        }
        startScrollTracking(e) {
            let t = e.parentElement;
            for (; t;) {
                let e = getComputedStyle(t);
                (sS.has(e.overflowX) || sS.has(e.overflowY)) && this.scrollPositions.set(t,{
                    x: t.scrollLeft,
                    y: t.scrollTop
                }),t = t.parentElement
            }
            this.scrollPositions.set(window,{
                x: window.scrollX,
                y: window.scrollY
            }),window.addEventListener("scroll",this.onElementScroll,{
                capture:!0
            }),window.addEventListener("scroll",this.onWindowScroll),this.removeScrollListeners = () => {
                window.removeEventListener("scroll",this.onElementScroll,{
                    capture:!0
                }),window.removeEventListener("scroll",this.onWindowScroll)
            }
        }
        handleScroll(e) {
            let t = this.scrollPositions.get(e);
            if (!t) return;
            let r = e === window,
                i = r ? {
                    x: window.scrollX,
                    y: window.scrollY
                } : {
                    x: e.scrollLeft,
                    y: e.scrollTop
                },
                s = {
                    x: i.x - t.x,
                    y: i.y - t.y
                };
            (0!== s.x || 0!== s.y) && (r ? this.lastMoveEventInfo && (this.lastMoveEventInfo.point.x += s.x,this.lastMoveEventInfo.point.y += s.y) : this.history.length > 0 && (this.history[0].x -= s.x,this.history[0].y -= s.y),this.scrollPositions.set(e,i),eX.update(this.updatePoint,!0))
        }
        updateHandlers(e) {
            this.handlers = e
        }
        end() {
            this.removeListeners && this.removeListeners(),this.removeScrollListeners && this.removeScrollListeners(),this.scrollPositions.clear(),eQ(this.updatePoint)
        }
    }

    function sE(e,t) {
        return t ? {
            point: t(e.point)
        } : e
    }

    function sT(e,t) {
        return {
            x: e.x - t.x,
            y: e.y - t.y
        }
    }

    function sA({
        point: e
    },t) {
        return {
            point: e,
            delta: sT(e,sR(t)),
            offset: sT(e,t[0]),
            velocity: function(e) {
                if (e.length < 2) return {
                    x: 0,
                    y: 0
                };
                let t = e.length - 1,
                    r = null,
                    i = sR(e);
                for (; t >= 0 && (r = e[t],!(i.timestamp - r.timestamp > tr(.1)));) t--;
                if (!r) return {
                    x: 0,
                    y: 0
                };
                r === e[0] && e.length > 2 && i.timestamp - r.timestamp > 2 * tr(.1) && (r = e[1]);
                let s = (i.timestamp - r.timestamp) / 1e3;
                if (0 === s) return {
                    x: 0,
                    y: 0
                };
                let n = {
                    x: (i.x - r.x) / s,
                    y: (i.y - r.y) / s
                };
                return n.x === 1 / 0 && (n.x = 0),n.y === 1 / 0 && (n.y = 0),n
            }(t)
        }
    }

    function sR(e) {
        return e[e.length - 1]
    }

    function sP(e,t,r) {
        return {
            min: void 0!== t ? e.min + t : void 0,
            max: void 0!== r ? e.max + r - (e.max - e.min) : void 0
        }
    }

    function sj(e,t) {
        let r = t.min - e.min,
            i = t.max - e.max;
        return t.max - t.min < e.max - e.min && ([r,i] = [i,r]),{
            min: r,
            max: i
        }
    }

    function sC(e,t,r) {
        return {
            min: sO(e,t),
            max: sO(e,r)
        }
    }

    function sO(e,t) {
        return "number" == typeof e ? e : e[t] || 0
    }
    let sN = new WeakMap;
    class sI {
        constructor(e) {
            this.openDragLock = null,this.isDragging =!1,this.currentDirection = null,this.originPoint = {
                x: 0,
                y: 0
            },this.constraints =!1,this.hasMutatedConstraints =!1,this.elastic = ey(),this.latestPointerEvent = null,this.latestPanInfo = null,this.visualElement = e
        }
        start(e,{
            snapToCursor: t =!1,
            distanceThreshold: r
        } = {}) {
            let {
                presenceContext: i
            } = this.visualElement;
            if (i &&!1 === i.isPresent) return;
            let s = e => {
                    t && this.snapToCursor(sw(e).point),this.stopAnimation()
                },
                n = (e,t) => {
                    let {
                        drag: r,
                        dragPropagation: i,
                        onDragStart: s
                    } = this.getProps();
                    if (r &&!i && (this.openDragLock && this.openDragLock(),this.openDragLock = function(e) {
                            if ("x" === e || "y" === e)
                                if (i9[e]) return null;
                                else return i9[e] =!0,() => {
                                    i9[e] =!1
                                };
                            return i9.x || i9.y ? null : (i9.x = i9.y =!0,() => {
                                i9.x = i9.y =!1
                            })
                        }(r),!this.openDragLock)) return;
                    this.latestPointerEvent = e,this.latestPanInfo = t,this.isDragging =!0,this.currentDirection = null,this.resolveConstraints(),this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked =!0,this.visualElement.projection.target = void 0),i4(e => {
                        let t = this.getAxisMotionValue(e).get() || 0;
                        if (H.test(t)) {
                            let {
                                projection: r
                            } = this.visualElement;
                            if (r && r.layout) {
                                let i = r.layout.layoutBox[e];
                                i && (t = i7(i) * (parseFloat(t) / 100))
                            }
                        }
                        this.originPoint[e] = t
                    }),s && eX.update(() => s(e,t),!1,!0),rG(this.visualElement,"transform");
                    let {
                        animationState: n
                    } = this.visualElement;
                    n && n.setActive("whileDrag",!0)
                },
                a = (e,t) => {
                    this.latestPointerEvent = e,this.latestPanInfo = t;
                    let {
                        dragPropagation: r,
                        dragDirectionLock: i,
                        onDirectionLock: s,
                        onDrag: n
                    } = this.getProps();
                    if (!r &&!this.openDragLock) return;
                    let {
                        offset: a
                    } = t;
                    if (i && null === this.currentDirection) {
                        this.currentDirection = function(e,t = 10) {
                            let r = null;
                            return Math.abs(e.y) > t ? r = "y" : Math.abs(e.x) > t && (r = "x"),r
                        }(a),null!== this.currentDirection && s && s(this.currentDirection);
                        return
                    }
                    this.updateAxis("x",t.point,a),this.updateAxis("y",t.point,a),this.visualElement.render(),n && eX.update(() => n(e,t),!1,!0)
                },
                o = (e,t) => {
                    this.latestPointerEvent = e,this.latestPanInfo = t,this.stop(e,t),this.latestPointerEvent = null,this.latestPanInfo = null
                },
                l = () => {
                    let {
                        dragSnapToOrigin: e
                    } = this.getProps();
                    (e || this.constraints) && this.startAnimation({
                        x: 0,
                        y: 0
                    })
                },
                {
                    dragSnapToOrigin: h
                } = this.getProps();
            this.panSession = new s_(e,{
                onSessionStart: s,
                onStart: n,
                onMove: a,
                onSessionEnd: o,
                resumeAnimation: l
            },{
                transformPagePoint: this.visualElement.getTransformPagePoint(),
                dragSnapToOrigin: h,
                distanceThreshold: r,
                contextWindow: sx(this.visualElement),
                element: this.visualElement.current
            })
        }
        stop(e,t) {
            let r = e || this.latestPointerEvent,
                i = t || this.latestPanInfo,
                s = this.isDragging;
            if (this.cancel(),!s ||!i ||!r) return;
            let {
                velocity: n
            } = i;
            this.startAnimation(n);
            let {
                onDragEnd: a
            } = this.getProps();
            a && eX.postRender(() => a(r,i))
        }
        cancel() {
            this.isDragging =!1;
            let {
                projection: e,
                animationState: t
            } = this.visualElement;
            e && (e.isAnimationBlocked =!1),this.endPanSession();
            let {
                dragPropagation: r
            } = this.getProps();
           !r && this.openDragLock && (this.openDragLock(),this.openDragLock = null),t && t.setActive("whileDrag",!1)
        }
        endPanSession() {
            this.panSession && this.panSession.end(),this.panSession = void 0
        }
        updateAxis(e,t,r) {
            let {
                drag: i
            } = this.getProps();
            if (!r ||!sM(e,i,this.currentDirection)) return;
            let s = this.getAxisMotionValue(e),
                n = this.originPoint[e] + r[e];
            this.constraints && this.constraints[e] && (n = function(e,{
                min: t,
                max: r
            },i) {
                return void 0!== t && e < t ? e = i ? t8(t,e,i.min) : Math.max(e,t) : void 0!== r && e > r && (e = i ? t8(r,e,i.max) : Math.min(e,r)),e
            }(n,this.constraints[e],this.elastic[e])),s.set(n)
        }
        resolveConstraints() {
            let {
                dragConstraints: e,
                dragElastic: t
            } = this.getProps(),r = this.visualElement.projection &&!this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : this.visualElement.projection ?.layout,i = this.constraints;
            e && rB(e) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : e && r ? this.constraints = function(e,{
                top: t,
                left: r,
                bottom: i,
                right: s
            }) {
                return {
                    x: sP(e.x,r,s),
                    y: sP(e.y,t,i)
                }
            }(r.layoutBox,e) : this.constraints =!1,this.elastic = function(e = .35) {
                return!1 === e ? e = 0 :!0 === e && (e = .35),{
                    x: sC(e,"left","right"),
                    y: sC(e,"top","bottom")
                }
            }(t),i!== this.constraints &&!rB(e) && r && this.constraints &&!this.hasMutatedConstraints && i4(e => {
                var t,i;
                let s;
               !1!== this.constraints && this.getAxisMotionValue(e) && (this.constraints[e] = (t = r.layoutBox[e],i = this.constraints[e],s = {},void 0!== i.min && (s.min = i.min - t.min),void 0!== i.max && (s.max = i.max - t.min),s))
            })
        }
        resolveRefConstraints() {
            var e;
            let {
                dragConstraints: t,
                onMeasureDragConstraints: r
            } = this.getProps();
            if (!t ||!rB(t)) return!1;
            let i = t.current;
            eE(null!== i,"If `dragConstraints` is set as a React ref,that ref must be passed to another component's `ref` prop.","drag-constraints-ref");
            let {
                projection: s
            } = this.visualElement;
            if (!s ||!s.layout) return!1;
            let n = function(e,t,r) {
                    let i = rp(e,r),
                        {
                            scroll: s
                        } = t;
                    return s && (rh(i.x,s.offset.x),rh(i.y,s.offset.y)),i
                }(i,s.root,this.visualElement.getTransformPagePoint()),
                a = (e = s.layout.layoutBox,{
                    x: sj(e.x,n.x),
                    y: sj(e.y,n.y)
                });
            if (r) {
                let e = r(function({
                    x: e,
                    y: t
                }) {
                    return {
                        top: t.min,
                        right: e.max,
                        bottom: t.max,
                        left: e.min
                    }
                }(a));
                this.hasMutatedConstraints =!!e,e && (a = rt(e))
            }
            return a
        }
        startAnimation(e) {
            let {
                drag: t,
                dragMomentum: r,
                dragElastic: i,
                dragTransition: s,
                dragSnapToOrigin: n,
                onDragTransitionEnd: a
            } = this.getProps(),o = this.constraints || {};
            return Promise.all(i4(a => {
                if (!sM(a,t,this.currentDirection)) return;
                let l = o && o[a] || {};
                (!0 === n || n === a) && (l = {
                    min: 0,
                    max: 0
                });
                let h = {
                    type: "inertia",
                    velocity: r ? e[a] : 0,
                    bounceStiffness: i ? 200 : 1e6,
                    bounceDamping: i ? 40 : 1e7,
                    timeConstant: 750,
                    restDelta: 1,
                    restSpeed: 10,
                    ...s,
                    ...l
                };
                return this.startAxisValueAnimation(a,h)
            })).then(a)
        }
        startAxisValueAnimation(e,t) {
            let r = this.getAxisMotionValue(e);
            return rG(this.visualElement,e),r.start(iJ(e,r,0,t,this.visualElement,!1))
        }
        stopAnimation() {
            i4(e => this.getAxisMotionValue(e).stop())
        }
        getAxisMotionValue(e) {
            let t = `_drag${e.toUpperCase()}`,
                r = this.visualElement.getProps();
            return r[t] || this.visualElement.getValue(e,(r.initial ? r.initial[e] : void 0) || 0)
        }
        snapToCursor(e) {
            i4(t => {
                let {
                    drag: r
                } = this.getProps();
                if (!sM(t,r,this.currentDirection)) return;
                let {
                    projection: i
                } = this.visualElement,s = this.getAxisMotionValue(t);
                if (i && i.layout) {
                    let {
                        min: r,
                        max: n
                    } = i.layout.layoutBox[t],a = s.get() || 0;
                    s.set(e[t] - t8(r,n,.5) + a)
                }
            })
        }
        scalePositionWithinConstraints() {
            if (!this.visualElement.current) return;
            let {
                drag: e,
                dragConstraints: t
            } = this.getProps(),{
                projection: r
            } = this.visualElement;
            if (!rB(t) ||!r ||!this.constraints) return;
            this.stopAnimation();
            let i = {
                x: 0,
                y: 0
            };
            i4(e => {
                let t = this.getAxisMotionValue(e);
                if (t &&!1!== this.constraints) {
                    var r,s;
                    let n,a,o,l = t.get();
                    i[e] = (r = {
                        min: l,
                        max: l
                    },s = this.constraints[e],n = .5,a = i7(r),(o = i7(s)) > a ? n = iC(s.min,s.max - a,r.min) : a > o && (n = iC(r.min,r.max - o,s.min)),C(0,1,n))
                }
            });
            let {
                transformTemplate: s
            } = this.visualElement.getProps();
            this.visualElement.current.style.transform = s ? s({},"") : "none",r.root && r.root.updateScroll(),r.updateLayout(),this.constraints =!1,this.resolveConstraints(),i4(t => {
                if (!sM(t,e,null)) return;
                let r = this.getAxisMotionValue(t),
                    {
                        min: s,
                        max: n
                    } = this.constraints[t];
                r.set(t8(s,n,i[t]))
            }),this.visualElement.render()
        }
        addListeners() {
            let e;
            if (!this.visualElement.current) return;
            sN.set(this.visualElement,this);
            let t = this.visualElement.current,
                r = sb(t,"pointerdown",e => {
                    let {
                        drag: r,
                        dragListener: i =!0
                    } = this.getProps(),s = e.target,n = s!== t && (sy.has(s.tagName) ||!0 === s.isContentEditable);
                    r && i &&!n && this.start(e)
                }),
                i = () => {
                    var r,i,s;
                    let n,a,{
                        dragConstraints: o
                    } = this.getProps();
                    rB(o) && o.current && (this.constraints = this.resolveRefConstraints(),e || (r = t,i = o.current,n = sm(r,s$(s = () => this.scalePositionWithinConstraints())),a = sm(i,s$(s)),e = () => {
                        n(),a()
                    }))
                },
                {
                    projection: s
                } = this.visualElement,
                n = s.addEventListener("measure",i);
            s &&!s.layout && (s.root && s.root.updateScroll(),s.updateLayout()),eX.read(i);
            let a = i6(window,"resize",() => this.scalePositionWithinConstraints()),
                o = s.addEventListener("didUpdate",({
                    delta: e,
                    hasLayoutChanged: t
                }) => {
                    this.isDragging && t && (i4(t => {
                        let r = this.getAxisMotionValue(t);
                        r && (this.originPoint[t] += e[t].translate,r.set(r.get() + e[t].translate))
                    }),this.visualElement.render())
                });
            return () => {
                a(),r(),n(),o && o(),e && e()
            }
        }
        getProps() {
            let e = this.visualElement.getProps(),
                {
                    drag: t =!1,
                    dragDirectionLock: r =!1,
                    dragPropagation: i =!1,
                    dragConstraints: s =!1,
                    dragElastic: n = .35,
                    dragMomentum: a =!0
                } = e;
            return { ...e,
                drag: t,
                dragDirectionLock: r,
                dragPropagation: i,
                dragConstraints: s,
                dragElastic: n,
                dragMomentum: a
            }
        }
    }

    function s$(e) {
        let t =!0;
        return () => {
            if (t) {
                t =!1;
                return
            }
            e()
        }
    }

    function sM(e,t,r) {
        return (!0 === t || t === e) && (null === r || r === e)
    }
    let sL = e => (t,r) => {
            e && eX.update(() => e(t,r),!1,!0)
        },
        sD = {
            hasAnimatedSinceResize:!0,
            hasEverUpdated:!1
        };
    var sU = R;

    function sB(e =!0) {
        let t = (0,R.useContext)(rP);
        if (null === t) return [!0,null];
        let {
            isPresent: r,
            onExitComplete: i,
            register: s
        } = t,n = (0,R.useId)();
        (0,R.useEffect)(() => {
            if (e) return s(n)
        },[e]);
        let a = (0,R.useCallback)(() => e && i && i(n),[n,i,e]);
        return!r && i ? [!1,a] : [!0]
    }
    let sV =!1;
    class sF extends sU.Component {
        componentDidMount() {
            let {
                visualElement: e,
                layoutGroup: t,
                switchLayoutGroup: r,
                layoutId: i
            } = this.props,{
                projection: s
            } = e;
            s && (t.group && t.group.add(s),r && r.register && i && r.register(s),sV && s.root.didUpdate(),s.addEventListener("animationComplete",() => {
                this.safeToRemove()
            }),s.setOptions({ ...s.options,
                layoutDependency: this.props.layoutDependency,
                onExitComplete: () => this.safeToRemove()
            })),sD.hasEverUpdated =!0
        }
        getSnapshotBeforeUpdate(e) {
            let {
                layoutDependency: t,
                visualElement: r,
                drag: i,
                isPresent: s
            } = this.props,{
                projection: n
            } = r;
            return n && (n.isPresent = s,e.layoutDependency!== t && n.setOptions({ ...n.options,
                layoutDependency: t
            }),sV =!0,i || e.layoutDependency!== t || void 0 === t || e.isPresent!== s ? n.willUpdate() : this.safeToRemove(),e.isPresent!== s && (s ? n.promote() : n.relegate() || eX.postRender(() => {
                let e = n.getStack();
                e && e.members.length || this.safeToRemove()
            }))),null
        }
        componentDidUpdate() {
            let {
                visualElement: e,
                layoutAnchor: t
            } = this.props,{
                projection: r
            } = e;
            r && (r.options.layoutAnchor = t,r.root.didUpdate(),tS.postRender(() => {
               !r.currentAnimation && r.isLead() && this.safeToRemove()
            }))
        }
        componentWillUnmount() {
            let {
                visualElement: e,
                layoutGroup: t,
                switchLayoutGroup: r
            } = this.props,{
                projection: i
            } = e;
            sV =!0,i && (i.scheduleCheckAfterUnmount(),t && t.group && t.group.remove(i),r && r.deregister && r.deregister(i))
        }
        safeToRemove() {
            let {
                safeToRemove: e
            } = this.props;
            e && e()
        }
        render() {
            return null
        }
    }

    function sz(e) {
        let [t,r] = sB(),i = (0,sU.useContext)(ry);
        return (0,A.jsx)(sF,{ ...e,
            layoutGroup: i,
            switchLayoutGroup: (0,sU.useContext)(rU),
            isPresent: t,
            safeToRemove: r
        })
    }
    let sq = ["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"],
        sH = sq.length,
        sW = e => "string" == typeof e ? parseFloat(e) : e,
        sK = e => "number" == typeof e || W.test(e);

    function sG(e,t) {
        return void 0!== e[t] ? e[t] : e.borderRadius
    }
    let sJ = sX(0,.5,iA),
        sY = sX(.5,.95,eK);

    function sX(e,t,r) {
        return i => i < e ? 0 : i > t ? 1 : r(iC(e,t,i))
    }

    function sQ(e,t) {
        e.min = t.min,e.max = t.max
    }

    function sZ(e,t) {
        sQ(e.x,t.x),sQ(e.y,t.y)
    }

    function s0(e,t) {
        e.translate = t.translate,e.scale = t.scale,e.originPoint = t.originPoint,e.origin = t.origin
    }

    function s1(e,t,r,i,s) {
        return e -= t,e = i + 1 / r * (e - i),void 0!== s && (e = i + 1 / s * (e - i)),e
    }

    function s2(e,t,[r,i,s],n,a) {
       ! function(e,t = 0,r = 1,i = .5,s,n = e,a = e) {
            if (H.test(t) && (t = parseFloat(t),t = t8(a.min,a.max,t / 100) - a.min),"number"!= typeof t) return;
            let o = t8(n.min,n.max,i);
            e === n && (o -= t),e.min = s1(e.min,t,r,o,s),e.max = s1(e.max,t,r,o,s)
        }(e,t[r],t[i],t[s],t.scale,n,a)
    }
    let s5 = ["x","scaleX","originX"],
        s3 = ["y","scaleY","originY"];

    function s8(e,t,r,i) {
        s2(e.x,t,s5,r ? r.x : void 0,i ? i.x : void 0),s2(e.y,t,s3,r ? r.y : void 0,i ? i.y : void 0)
    }

    function s4(e) {
        return 0 === e.translate && 1 === e.scale
    }

    function s6(e) {
        return s4(e.x) && s4(e.y)
    }

    function s9(e,t) {
        return e.min === t.min && e.max === t.max
    }

    function s7(e,t) {
        return Math.round(e.min) === Math.round(t.min) && Math.round(e.max) === Math.round(t.max)
    }

    function ne(e,t) {
        return s7(e.x,t.x) && s7(e.y,t.y)
    }

    function nt(e) {
        return i7(e.x) / i7(e.y)
    }

    function nr(e,t) {
        return e.translate === t.translate && e.scale === t.scale && e.originPoint === t.originPoint
    }
    class ni {
        constructor() {
            this.members = []
        }
        add(e) {
            ti(this.members,e);
            for (let t = this.members.length - 1; t >= 0; t--) {
                let r = this.members[t];
                if (r === e || r === this.lead || r === this.prevLead) continue;
                let i = r.instance;
                i &&!1!== i.isConnected || r.snapshot || (ts(this.members,r),r.unmount())
            }
            e.scheduleRender()
        }
        remove(e) {
            if (ts(this.members,e),e === this.prevLead && (this.prevLead = void 0),e === this.lead) {
                let e = this.members[this.members.length - 1];
                e && this.promote(e)
            }
        }
        relegate(e) {
            for (let t = this.members.indexOf(e) - 1; t >= 0; t--) {
                let e = this.members[t];
                if (!1!== e.isPresent && e.instance ?.isConnected!==!1) return this.promote(e),!0
            }
            return!1
        }
        promote(e,t) {
            let r = this.lead;
            if (e!== r && (this.prevLead = r,this.lead = e,e.show(),r)) {
                r.updateSnapshot(),e.scheduleRender();
                let {
                    layoutDependency: i
                } = r.options,{
                    layoutDependency: s
                } = e.options;
                (void 0 === i || i!== s) && (e.resumeFrom = r,t && (r.preserveOpacity =!0),r.snapshot && (e.snapshot = r.snapshot,e.snapshot.latestValues = r.animationValues || r.latestValues),e.root ?.isUpdating && (e.isLayoutDirty =!0)),!1 === e.options.crossfade && r.hide()
            }
        }
        exitAnimationComplete() {
            this.members.forEach(e => {
                e.options.onExitComplete ?.(),e.resumingFrom ?.options.onExitComplete ?.()
            })
        }
        scheduleRender() {
            this.members.forEach(e => e.instance && e.scheduleRender(!1))
        }
        removeLeadSnapshot() {
            this.lead ?.snapshot && (this.lead.snapshot = void 0)
        }
    }
    let ns = (e,t) => e.depth - t.depth;
    class nn {
        constructor() {
            this.children = [],this.isDirty =!1
        }
        add(e) {
            ti(this.children,e),this.isDirty =!0
        }
        remove(e) {
            ts(this.children,e),this.isDirty =!0
        }
        forEach(e) {
            this.isDirty && this.children.sort(ns),this.isDirty =!1,this.children.forEach(e)
        }
    }
    let na = ["","X","Y","Z"],
        no = 0;

    function nl(e,t,r,i) {
        let {
            latestValues: s
        } = t;
        s[e] && (r[e] = s[e],t.setStaticValue(e,0),i && (i[e] = 0))
    }

    function nh({
        attachResizeListener: e,
        defaultParent: t,
        measureScroll: r,
        checkIsScrollRoot: i,
        resetTransform: s
    }) {
        return class {
            constructor(e = {},r = t ?.()) {
                this.id = no++,this.animationId = 0,this.animationCommitId = 0,this.children = new Set,this.options = {},this.isTreeAnimating =!1,this.isAnimationBlocked =!1,this.isLayoutDirty =!1,this.isProjectionDirty =!1,this.isSharedProjectionDirty =!1,this.isTransformDirty =!1,this.updateManuallyBlocked =!1,this.updateBlockedByResize =!1,this.isUpdating =!1,this.isSVG =!1,this.needsReset =!1,this.shouldResetTransform =!1,this.hasCheckedOptimisedAppear =!1,this.treeScale = {
                    x: 1,
                    y: 1
                },this.eventHandlers = new Map,this.hasTreeAnimated =!1,this.layoutVersion = 0,this.updateScheduled =!1,this.scheduleUpdate = () => this.update(),this.projectionUpdateScheduled =!1,this.checkUpdateFailed = () => {
                    this.isUpdating && (this.isUpdating =!1,this.clearAllSnapshots())
                },this.updateProjection = () => {
                    this.projectionUpdateScheduled =!1,this.nodes.forEach(nd),this.nodes.forEach(nx),this.nodes.forEach(nk),this.nodes.forEach(np)
                },this.resolvedRelativeTargetAt = 0,this.linkedParentVersion = 0,this.hasProjected =!1,this.isVisible =!0,this.animationProgress = 0,this.sharedNodes = new Map,this.latestValues = e,this.root = r ? r.root || r : this,this.path = r ? [...r.path,r] : [],this.parent = r,this.depth = r ? r.depth + 1 : 0;
                for (let e = 0; e < this.path.length; e++) this.path[e].shouldResetTransform =!0;
                this.root === this && (this.nodes = new nn)
            }
            addEventListener(e,t) {
                return this.eventHandlers.has(e) || this.eventHandlers.set(e,new tn),this.eventHandlers.get(e).add(t)
            }
            notifyListeners(e,...t) {
                let r = this.eventHandlers.get(e);
                r && r.notify(...t)
            }
            hasListeners(e) {
                return this.eventHandlers.has(e)
            }
            mount(t) {
                if (this.instance) return;
                this.isSVG = sa(t) &&!(sa(t) && "svg" === t.tagName),this.instance = t;
                let {
                    layoutId: r,
                    layout: i,
                    visualElement: s
                } = this.options;
                if (s &&!s.current && s.mount(t),this.root.nodes.add(this),this.parent && this.parent.children.add(this),this.root.hasTreeAnimated && (i || r) && (this.isLayoutDirty =!0),e) {
                    let r,i = 0,
                        s = () => this.root.updateBlockedByResize =!1;
                    eX.read(() => {
                        i = window.innerWidth
                    }),e(t,() => {
                        let e = window.innerWidth;
                        if (e!== i) {
                            let t,n;
                            i = e,this.root.updateBlockedByResize =!0,r && r(),t = tE.now(),n = ({
                                timestamp: e
                            }) => {
                                let r = e - t;
                                r >= 250 && (eQ(n),s(r - 250))
                            },eX.setup(n,!0),r = () => eQ(n),sD.hasAnimatedSinceResize && (sD.hasAnimatedSinceResize =!1,this.nodes.forEach(nb))
                        }
                    })
                }
                r && this.root.registerSharedNode(r,this),!1!== this.options.animate && s && (r || i) && this.addEventListener("didUpdate",({
                    delta: e,
                    hasLayoutChanged: t,
                    hasRelativeLayoutChanged: r,
                    layout: i
                }) => {
                    if (this.isTreeAnimationBlocked()) {
                        this.target = void 0,this.relativeTarget = void 0;
                        return
                    }
                    let n = this.options.transition || s.getDefaultTransition() || nR,
                        {
                            onLayoutAnimationStart: a,
                            onLayoutAnimationComplete: o
                        } = s.getProps(),
                        l =!this.targetLayout ||!ne(this.targetLayout,i),
                        h =!t && r;
                    if (this.options.layoutRoot || this.resumeFrom || h || t && (l ||!this.currentAnimation)) {
                        this.resumeFrom && (this.resumingFrom = this.resumeFrom,this.resumingFrom.resumingFrom = void 0);
                        let t = { ...rW(n,"layout"),
                            onPlay: a,
                            onComplete: o
                        };
                        (s.shouldReduceMotion || this.options.layoutRoot) && (t.delay = 0,t.type =!1),this.startAnimation(t),this.setAnimationOrigin(e,h)
                    } else t || nb(this),this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                    this.targetLayout = i
                })
            }
            unmount() {
                this.options.layoutId && this.willUpdate(),this.root.nodes.remove(this);
                let e = this.getStack();
                e && e.remove(this),this.parent && this.parent.children.delete(this),this.instance = void 0,this.eventHandlers.clear(),eQ(this.updateProjection)
            }
            blockUpdate() {
                this.updateManuallyBlocked =!0
            }
            unblockUpdate() {
                this.updateManuallyBlocked =!1
            }
            isUpdateBlocked() {
                return this.updateManuallyBlocked || this.updateBlockedByResize
            }
            isTreeAnimationBlocked() {
                return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() ||!1
            }
            startUpdate() {
               !this.isUpdateBlocked() && (this.isUpdating =!0,this.nodes && this.nodes.forEach(nS),this.animationId++)
            }
            getTransformTemplate() {
                let {
                    visualElement: e
                } = this.options;
                return e && e.getProps().transformTemplate
            }
            willUpdate(e =!0) {
                if (this.root.hasTreeAnimated =!0,this.root.isUpdateBlocked()) {
                    this.options.onExitComplete && this.options.onExitComplete();
                    return
                }
                if (window.MotionCancelOptimisedAnimation &&!this.hasCheckedOptimisedAppear && function e(t) {
                        if (t.hasCheckedOptimisedAppear =!0,t.root === t) return;
                        let {
                            visualElement: r
                        } = t.options;
                        if (!r) return;
                        let i = r.props[rD];
                        if (window.MotionHasOptimisedAnimation(i,"transform")) {
                            let {
                                layout: e,
                                layoutId: r
                            } = t.options;
                            window.MotionCancelOptimisedAnimation(i,"transform",eX,!(e || r))
                        }
                        let {
                            parent: s
                        } = t;
                        s &&!s.hasCheckedOptimisedAppear && e(s)
                    }(this),this.root.isUpdating || this.root.startUpdate(),this.isLayoutDirty) return;
                this.isLayoutDirty =!0;
                for (let e = 0; e < this.path.length; e++) {
                    let t = this.path[e];
                    t.shouldResetTransform =!0,("string" == typeof t.latestValues.x || "string" == typeof t.latestValues.y) && (t.isLayoutDirty =!0),t.updateScroll("snapshot"),t.options.layoutRoot && t.willUpdate(!1)
                }
                let {
                    layoutId: t,
                    layout: r
                } = this.options;
                if (void 0 === t &&!r) return;
                let i = this.getTransformTemplate();
                this.prevTransformTemplateValue = i ? i(this.latestValues,"") : void 0,this.updateSnapshot(),e && this.notifyListeners("willUpdate")
            }
            update() {
                if (this.updateScheduled =!1,this.isUpdateBlocked()) {
                    let e = this.updateBlockedByResize;
                    this.unblockUpdate(),this.updateBlockedByResize =!1,this.clearAllSnapshots(),e && this.nodes.forEach(ng),this.nodes.forEach(nm);
                    return
                }
                if (this.animationId <= this.animationCommitId) return void this.nodes.forEach(ny);
                this.animationCommitId = this.animationId,this.isUpdating ? (this.isUpdating =!1,this.nodes.forEach(nv),this.nodes.forEach(nw),this.nodes.forEach(nu),this.nodes.forEach(nc)) : this.nodes.forEach(ny),this.clearAllSnapshots();
                let e = tE.now();
                eZ.delta = C(0,1e3 / 60,e - eZ.timestamp),eZ.timestamp = e,eZ.isProcessing =!0,e0.update.process(eZ),e0.preRender.process(eZ),e0.render.process(eZ),eZ.isProcessing =!1
            }
            didUpdate() {
                this.updateScheduled || (this.updateScheduled =!0,tS.read(this.scheduleUpdate))
            }
            clearAllSnapshots() {
                this.nodes.forEach(nf),this.sharedNodes.forEach(n_)
            }
            scheduleUpdateProjection() {
                this.projectionUpdateScheduled || (this.projectionUpdateScheduled =!0,eX.preRender(this.updateProjection,!1,!0))
            }
            scheduleCheckAfterUnmount() {
                eX.postRender(() => {
                    this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
                })
            }
            updateSnapshot() {
               !this.snapshot && this.instance && (this.snapshot = this.measure(),!this.snapshot || i7(this.snapshot.measuredBox.x) || i7(this.snapshot.measuredBox.y) || (this.snapshot = void 0))
            }
            updateLayout() {
                if (!this.instance || (this.updateScroll(),!(this.options.alwaysMeasureLayout && this.isLead()) &&!this.isLayoutDirty)) return;
                if (this.resumeFrom &&!this.resumeFrom.instance)
                    for (let e = 0; e < this.path.length; e++) this.path[e].updateScroll();
                let e = this.layout;
                this.layout = this.measure(!1),this.layoutVersion++,this.layoutCorrected || (this.layoutCorrected = ey()),this.isLayoutDirty =!1,this.projectionDelta = void 0,this.notifyListeners("measure",this.layout.layoutBox);
                let {
                    visualElement: t
                } = this.options;
                t && t.notify("LayoutMeasure",this.layout.layoutBox,e ? e.layoutBox : void 0)
            }
            updateScroll(e = "measure") {
                let t =!!(this.options.layoutScroll && this.instance);
                if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === e && (t =!1),t && this.instance) {
                    let t = i(this.instance);
                    this.scroll = {
                        animationId: this.root.animationId,
                        phase: e,
                        isRoot: t,
                        offset: r(this.instance),
                        wasRoot: this.scroll ? this.scroll.isRoot : t
                    }
                }
            }
            resetTransform() {
                if (!s) return;
                let e = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout,
                    t = this.projectionDelta &&!s6(this.projectionDelta),
                    r = this.getTransformTemplate(),
                    i = r ? r(this.latestValues,"") : void 0,
                    n = i!== this.prevTransformTemplateValue;
                e && this.instance && (t || rs(this.latestValues) || n) && (s(this.instance,i),this.shouldResetTransform =!1,this.scheduleRender())
            }
            measure(e =!0) {
                var t;
                let r = this.measurePageBox(),
                    i = this.removeElementScroll(r);
                return e && (i = this.removeTransform(i)),nC((t = i).x),nC(t.y),{
                    animationId: this.root.animationId,
                    measuredBox: r,
                    layoutBox: i,
                    latestValues: {},
                    source: this.id
                }
            }
            measurePageBox() {
                let {
                    visualElement: e
                } = this.options;
                if (!e) return ey();
                let t = e.measureViewportBox();
                if (!(this.scroll ?.wasRoot || this.path.some(nN))) {
                    let {
                        scroll: e
                    } = this.root;
                    e && (rh(t.x,e.offset.x),rh(t.y,e.offset.y))
                }
                return t
            }
            removeElementScroll(e) {
                let t = ey();
                if (sZ(t,e),this.scroll ?.wasRoot) return t;
                for (let r = 0; r < this.path.length; r++) {
                    let i = this.path[r],
                        {
                            scroll: s,
                            options: n
                        } = i;
                    i!== this.root && s && n.layoutScroll && (s.wasRoot && sZ(t,e),rh(t.x,s.offset.x),rh(t.y,s.offset.y))
                }
                return t
            }
            applyTransform(e,t =!1,r) {
                let i = r || ey();
                sZ(i,e);
                for (let e = 0; e < this.path.length; e++) {
                    let r = this.path[e];
                   !t && r.options.layoutScroll && r.scroll && r!== r.root && (rh(i.x,-r.scroll.offset.x),rh(i.y,-r.scroll.offset.y)),rs(r.latestValues) && rd(i,r.latestValues,r.layout ?.layoutBox)
                }
                return rs(this.latestValues) && rd(i,this.latestValues,this.layout ?.layoutBox),i
            }
            removeTransform(e) {
                let t = ey();
                sZ(t,e);
                for (let e = 0; e < this.path.length; e++) {
                    let r,i = this.path[e];
                    rs(i.latestValues) && (i.instance && (ri(i.latestValues) && i.updateSnapshot(),sZ(r = ey(),i.measurePageBox())),s8(t,i.latestValues,i.snapshot ?.layoutBox,r))
                }
                return rs(this.latestValues) && s8(t,this.latestValues),t
            }
            setTargetDelta(e) {
                this.targetDelta = e,this.root.scheduleUpdateProjection(),this.isProjectionDirty =!0
            }
            setOptions(e) {
                this.options = { ...this.options,
                    ...e,
                    crossfade: void 0 === e.crossfade || e.crossfade
                }
            }
            clearMeasurements() {
                this.scroll = void 0,this.layout = void 0,this.snapshot = void 0,this.prevTransformTemplateValue = void 0,this.targetDelta = void 0,this.target = void 0,this.isLayoutDirty =!1
            }
            forceRelativeParentToResolveTarget() {
                this.relativeParent && this.relativeParent.resolvedRelativeTargetAt!== eZ.timestamp && this.relativeParent.resolveTargetDelta(!0)
            }
            resolveTargetDelta(e =!1) {
                let t = this.getLead();
                this.isProjectionDirty || (this.isProjectionDirty = t.isProjectionDirty),this.isTransformDirty || (this.isTransformDirty = t.isTransformDirty),this.isSharedProjectionDirty || (this.isSharedProjectionDirty = t.isSharedProjectionDirty);
                let r =!!this.resumingFrom || this!== t;
                if (!(e || r && this.isSharedProjectionDirty || this.isProjectionDirty || this.parent ?.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize)) return;
                let {
                    layout: i,
                    layoutId: s
                } = this.options;
                if (!this.layout ||!(i || s)) return;
                this.resolvedRelativeTargetAt = eZ.timestamp;
                let n = this.getClosestProjectingParent();
                if (n && this.linkedParentVersion!== n.layoutVersion &&!n.options.layoutRoot && this.removeRelativeTarget(),this.targetDelta || this.relativeTarget || (!1!== this.options.layoutAnchor && n && n.layout ? this.createRelativeTarget(n,this.layout.layoutBox,n.layout.layoutBox) : this.removeRelativeTarget()),this.relativeTarget || this.targetDelta) {
                    if (this.target || (this.target = ey(),this.targetWithTransforms = ey()),this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target) {
                        var a,o,l,h;
                        this.forceRelativeParentToResolveTarget(),a = this.target,o = this.relativeTarget,l = this.relativeParent.target,h = this.options.layoutAnchor || void 0,sr(a.x,o.x,l.x,h ?.x),sr(a.y,o.y,l.y,h ?.y)
                    } else this.targetDelta ? (this.resumingFrom ? this.applyTransform(this.layout.layoutBox,!1,this.target) : sZ(this.target,this.layout.layoutBox),rl(this.target,this.targetDelta)) : sZ(this.target,this.layout.layoutBox);
                    this.attemptToResolveRelativeTarget && (this.attemptToResolveRelativeTarget =!1,!1!== this.options.layoutAnchor && n &&!!n.resumingFrom ==!!this.resumingFrom &&!n.options.layoutScroll && n.target && 1!== this.animationProgress ? this.createRelativeTarget(n,this.target,n.target) : this.relativeParent = this.relativeTarget = void 0)
                }
            }
            getClosestProjectingParent() {
                if (!(!this.parent || ri(this.parent.latestValues) || rn(this.parent.latestValues)))
                    if (this.parent.isProjecting()) return this.parent;
                    else return this.parent.getClosestProjectingParent()
            }
            isProjecting() {
                return!!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
            }
            createRelativeTarget(e,t,r) {
                this.relativeParent = e,this.linkedParentVersion = e.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget = ey(),this.relativeTargetOrigin = ey(),ss(this.relativeTargetOrigin,t,r,this.options.layoutAnchor || void 0),sZ(this.relativeTarget,this.relativeTargetOrigin)
            }
            removeRelativeTarget() {
                this.relativeParent = this.relativeTarget = void 0
            }
            calcProjection() {
                let e = this.getLead(),
                    t =!!this.resumingFrom || this!== e,
                    r =!0;
                if ((this.isProjectionDirty || this.parent ?.isProjectionDirty) && (r =!1),t && (this.isSharedProjectionDirty || this.isTransformDirty) && (r =!1),this.resolvedRelativeTargetAt === eZ.timestamp && (r =!1),r) return;
                let {
                    layout: i,
                    layoutId: s
                } = this.options;
                if (this.isTreeAnimating =!!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation),this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0),!this.layout ||!(i || s)) return;
                sZ(this.layoutCorrected,this.layout.layoutBox);
                let n = this.treeScale.x,
                    a = this.treeScale.y;
               ! function(e,t,r,i =!1) {
                    let s,n,a = r.length;
                    if (a) {
                        t.x = t.y = 1;
                        for (let o = 0; o < a; o++) {
                            n = (s = r[o]).projectionDelta;
                            let {
                                visualElement: a
                            } = s.options;
                            (!a ||!a.props.style || "contents"!== a.props.style.display) && (i && s.options.layoutScroll && s.scroll && s!== s.root && (rh(e.x,-s.scroll.offset.x),rh(e.y,-s.scroll.offset.y)),n && (t.x *= n.x.scale,t.y *= n.y.scale,rl(e,n)),i && rs(s.latestValues) && rd(e,s.latestValues,s.layout ?.layoutBox))
                        }
                        t.x < 1.0000000000001 && t.x > .999999999999 && (t.x = 1),t.y < 1.0000000000001 && t.y > .999999999999 && (t.y = 1)
                    }
                }(this.layoutCorrected,this.treeScale,this.path,t),e.layout &&!e.target && (1!== this.treeScale.x || 1!== this.treeScale.y) && (e.target = e.layout.layoutBox,e.targetWithTransforms = ey());
                let {
                    target: o
                } = e;
                if (!o) {
                    this.prevProjectionDelta && (this.createProjectionDeltas(),this.scheduleRender());
                    return
                }
                this.projectionDelta && this.prevProjectionDelta ? (s0(this.prevProjectionDelta.x,this.projectionDelta.x),s0(this.prevProjectionDelta.y,this.projectionDelta.y)) : this.createProjectionDeltas(),st(this.projectionDelta,this.layoutCorrected,o,this.latestValues),this.treeScale.x === n && this.treeScale.y === a && nr(this.projectionDelta.x,this.prevProjectionDelta.x) && nr(this.projectionDelta.y,this.prevProjectionDelta.y) || (this.hasProjected =!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",o))
            }
            hide() {
                this.isVisible =!1
            }
            show() {
                this.isVisible =!0
            }
            scheduleRender(e =!0) {
                if (this.options.visualElement ?.scheduleRender(),e) {
                    let e = this.getStack();
                    e && e.scheduleRender()
                }
                this.resumingFrom &&!this.resumingFrom.instance && (this.resumingFrom = void 0)
            }
            createProjectionDeltas() {
                this.prevProjectionDelta = em(),this.projectionDelta = em(),this.projectionDeltaWithTransform = em()
            }
            setAnimationOrigin(e,t =!1) {
                let r,i = this.snapshot,
                    s = i ? i.latestValues : {},
                    n = { ...this.latestValues
                    },
                    a = em();
                this.relativeParent && this.relativeParent.options.layoutRoot || (this.relativeTarget = this.relativeTargetOrigin = void 0),this.attemptToResolveRelativeTarget =!t;
                let o = ey(),
                    l = (i ? i.source : void 0)!== (this.layout ? this.layout.source : void 0),
                    h = this.getStack(),
                    u =!h || h.members.length <= 1,
                    c =!!(l &&!u &&!0 === this.options.crossfade &&!this.path.some(nA));
                this.animationProgress = 0,this.mixTargetDelta = t => {
                    let i = t / 1e3;
                    if (nE(a.x,e.x,i),nE(a.y,e.y,i),this.setTargetDelta(a),this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout) {
                        var h,d,p,f,m,g;
                        ss(o,this.layout.layoutBox,this.relativeParent.layout.layoutBox,this.options.layoutAnchor || void 0),p = this.relativeTarget,f = this.relativeTargetOrigin,m = o,g = i,nT(p.x,f.x,m.x,g),nT(p.y,f.y,m.y,g),r && (h = this.relativeTarget,d = r,s9(h.x,d.x) && s9(h.y,d.y)) && (this.isProjectionDirty =!1),r || (r = ey()),sZ(r,this.relativeTarget)
                    }
                    l && (this.animationValues = n,function(e,t,r,i,s,n) {
                        s ? (e.opacity = t8(0,r.opacity ?? 1,sJ(i)),e.opacityExit = t8(t.opacity ?? 1,0,sY(i))) : n && (e.opacity = t8(t.opacity ?? 1,r.opacity ?? 1,i));
                        for (let s = 0; s < sH; s++) {
                            let n = sq[s],
                                a = sG(t,n),
                                o = sG(r,n);
                            (void 0!== a || void 0!== o) && (a || (a = 0),o || (o = 0),0 === a || 0 === o || sK(a) === sK(o) ? (e[n] = Math.max(t8(sW(a),sW(o),i),0),(H.test(o) || H.test(a)) && (e[n] += "%")) : e[n] = o)
                        }(t.rotate || r.rotate) && (e.rotate = t8(t.rotate || 0,r.rotate || 0,i))
                    }(n,s,this.latestValues,i,c,u)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress = i
                },this.mixTargetDelta(1e3 *!!this.options.layoutRoot)
            }
            startAnimation(e) {
                this.notifyListeners("animationStart"),this.currentAnimation ?.stop(),this.resumingFrom ?.currentAnimation ?.stop(),this.pendingAnimation && (eQ(this.pendingAnimation),this.pendingAnimation = void 0),this.pendingAnimation = eX.update(() => {
                    var t,r,i;
                    let s;
                    sD.hasAnimatedSinceResize =!0,tf.layout++,this.motionValue || (this.motionValue = tA(0)),this.motionValue.jump(0,!1),this.currentAnimation = (t = this.motionValue,r = [0,1e3],i = { ...e,
                        velocity: 0,
                        isSync:!0,
                        onUpdate: t => {
                            this.mixTargetDelta(t),e.onUpdate && e.onUpdate(t)
                        },
                        onStop: () => {
                            tf.layout--
                        },
                        onComplete: () => {
                            tf.layout--,e.onComplete && e.onComplete(),this.completeAnimation()
                        }
                    },(s = ev(t) ? t : tA(t)).start(iJ("",s,r,i)),s.animation),this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation),this.pendingAnimation = void 0
                })
            }
            completeAnimation() {
                this.resumingFrom && (this.resumingFrom.currentAnimation = void 0,this.resumingFrom.preserveOpacity = void 0);
                let e = this.getStack();
                e && e.exitAnimationComplete(),this.resumingFrom = this.currentAnimation = this.animationValues = void 0,this.notifyListeners("animationComplete")
            }
            finishAnimation() {
                this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(1e3),this.currentAnimation.stop()),this.completeAnimation()
            }
            applyTransformsToTarget() {
                let e = this.getLead(),
                    {
                        targetWithTransforms: t,
                        target: r,
                        layout: i,
                        latestValues: s
                    } = e;
                if (t && r && i) {
                    if (this!== e && this.layout && i && nO(this.options.animationType,this.layout.layoutBox,i.layoutBox)) {
                        r = this.target || ey();
                        let t = i7(this.layout.layoutBox.x);
                        r.x.min = e.target.x.min,r.x.max = r.x.min + t;
                        let i = i7(this.layout.layoutBox.y);
                        r.y.min = e.target.y.min,r.y.max = r.y.min + i
                    }
                    sZ(t,r),rd(t,s),st(this.projectionDeltaWithTransform,this.layoutCorrected,t,s)
                }
            }
            registerSharedNode(e,t) {
                this.sharedNodes.has(e) || this.sharedNodes.set(e,new ni),this.sharedNodes.get(e).add(t);
                let r = t.options.initialPromotionConfig;
                t.promote({
                    transition: r ? r.transition : void 0,
                    preserveFollowOpacity: r && r.shouldPreserveFollowOpacity ? r.shouldPreserveFollowOpacity(t) : void 0
                })
            }
            isLead() {
                let e = this.getStack();
                return!e || e.lead === this
            }
            getLead() {
                let {
                    layoutId: e
                } = this.options;
                return e && this.getStack() ?.lead || this
            }
            getPrevLead() {
                let {
                    layoutId: e
                } = this.options;
                return e ? this.getStack() ?.prevLead : void 0
            }
            getStack() {
                let {
                    layoutId: e
                } = this.options;
                if (e) return this.root.sharedNodes.get(e)
            }
            promote({
                needsReset: e,
                transition: t,
                preserveFollowOpacity: r
            } = {}) {
                let i = this.getStack();
                i && i.promote(this,r),e && (this.projectionDelta = void 0,this.needsReset =!0),t && this.setOptions({
                    transition: t
                })
            }
            relegate() {
                let e = this.getStack();
                return!!e && e.relegate(this)
            }
            resetSkewAndRotation() {
                let {
                    visualElement: e
                } = this.options;
                if (!e) return;
                let t =!1,
                    {
                        latestValues: r
                    } = e;
                if ((r.z || r.rotate || r.rotateX || r.rotateY || r.rotateZ || r.skewX || r.skewY) && (t =!0),!t) return;
                let i = {};
                r.z && nl("z",e,i,this.animationValues);
                for (let t = 0; t < na.length; t++) nl(`rotate${na[t]}`,e,i,this.animationValues),nl(`skew${na[t]}`,e,i,this.animationValues);
                for (let t in e.render(),i) e.setStaticValue(t,i[t]),this.animationValues && (this.animationValues[t] = i[t]);
                e.scheduleRender()
            }
            applyProjectionStyles(e,t) {
                if (!this.instance || this.isSVG) return;
                if (!this.isVisible) {
                    e.visibility = "hidden";
                    return
                }
                let r = this.getTransformTemplate();
                if (this.needsReset) {
                    this.needsReset =!1,e.visibility = "",e.opacity = "",e.pointerEvents = rR(t ?.pointerEvents) || "",e.transform = r ? r(this.latestValues,"") : "none";
                    return
                }
                let i = this.getLead();
                if (!this.projectionDelta ||!this.layout ||!i.target) {
                    this.options.layoutId && (e.opacity = void 0!== this.latestValues.opacity ? this.latestValues.opacity : 1,e.pointerEvents = rR(t ?.pointerEvents) || ""),this.hasProjected &&!rs(this.latestValues) && (e.transform = r ? r({},"") : "none",this.hasProjected =!1);
                    return
                }
                e.visibility = "";
                let s = i.animationValues || i.latestValues;
                this.applyTransformsToTarget();
                let n = function(e,t,r) {
                    let i = "",
                        s = e.x.translate / t.x,
                        n = e.y.translate / t.y,
                        a = r ?.z || 0;
                    if ((s || n || a) && (i = `translate3d(${s}px,${n}px,${a}px) `),(1!== t.x || 1!== t.y) && (i += `scale(${1/t.x},${1/t.y}) `),r) {
                        let {
                            transformPerspective: e,
                            rotate: t,
                            rotateX: s,
                            rotateY: n,
                            skewX: a,
                            skewY: o
                        } = r;
                        e && (i = `perspective(${e}px) ${i}`),t && (i += `rotate(${t}deg) `),s && (i += `rotateX(${s}deg) `),n && (i += `rotateY(${n}deg) `),a && (i += `skewX(${a}deg) `),o && (i += `skewY(${o}deg) `)
                    }
                    let o = e.x.scale * t.x,
                        l = e.y.scale * t.y;
                    return (1!== o || 1!== l) && (i += `scale(${o},${l})`),i || "none"
                }(this.projectionDeltaWithTransform,this.treeScale,s);
                r && (n = r(s,n)),e.transform = n;
                let {
                    x: a,
                    y: o
                } = this.projectionDelta;
                for (let t in e.transformOrigin = `${100*a.origin}% ${100*o.origin}% 0`,i.animationValues ? e.opacity = i === this ? s.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : s.opacityExit : e.opacity = i === this ? void 0!== s.opacity ? s.opacity : "" : void 0!== s.opacityExit ? s.opacityExit : 0,t4) {
                    if (void 0 === s[t]) continue;
                    let {
                        correct: r,
                        applyTo: a,
                        isCSSVariable: o
                    } = t4[t],l = "none" === n ? s[t] : r(s[t],i);
                    if (a) {
                        let t = a.length;
                        for (let r = 0; r < t; r++) e[a[r]] = l
                    } else o ? this.options.visualElement.renderState.vars[t] = l : e[t] = l
                }
                this.options.layoutId && (e.pointerEvents = i === this ? rR(t ?.pointerEvents) || "" : "none")
            }
            clearSnapshot() {
                this.resumeFrom = this.snapshot = void 0
            }
            resetTree() {
                this.root.nodes.forEach(e => e.currentAnimation ?.stop()),this.root.nodes.forEach(nm),this.root.sharedNodes.clear()
            }
        }
    }

    function nu(e) {
        e.updateLayout()
    }

    function nc(e) {
        let t = e.resumeFrom ?.snapshot || e.snapshot;
        if (e.isLead() && e.layout && t && e.hasListeners("didUpdate")) {
            let {
                layoutBox: r,
                measuredBox: i
            } = e.layout,{
                animationType: s
            } = e.options,n = t.source!== e.layout.source;
            if ("size" === s) i4(e => {
                let i = n ? t.measuredBox[e] : t.layoutBox[e],
                    s = i7(i);
                i.min = r[e].min,i.max = i.min + s
            });
            else if ("x" === s || "y" === s) {
                let e = "x" === s ? "y" : "x";
                sQ(n ? t.measuredBox[e] : t.layoutBox[e],r[e])
            } else nO(s,t.layoutBox,r) && i4(i => {
                let s = n ? t.measuredBox[i] : t.layoutBox[i],
                    a = i7(r[i]);
                s.max = s.min + a,e.relativeTarget &&!e.currentAnimation && (e.isProjectionDirty =!0,e.relativeTarget[i].max = e.relativeTarget[i].min + a)
            });
            let a = em();
            st(a,r,t.layoutBox);
            let o = em();
            n ? st(o,e.applyTransform(i,!0),t.measuredBox) : st(o,r,t.layoutBox);
            let l =!s6(a),
                h =!1;
            if (!e.resumeFrom) {
                let i = e.getClosestProjectingParent();
                if (i &&!i.resumeFrom) {
                    let {
                        snapshot: s,
                        layout: n
                    } = i;
                    if (s && n) {
                        let a = e.options.layoutAnchor || void 0,
                            o = ey();
                        ss(o,t.layoutBox,s.layoutBox,a);
                        let l = ey();
                        ss(l,r,n.layoutBox,a),ne(o,l) || (h =!0),i.options.layoutRoot && (e.relativeTarget = l,e.relativeTargetOrigin = o,e.relativeParent = i)
                    }
                }
            }
            e.notifyListeners("didUpdate",{
                layout: r,
                snapshot: t,
                delta: o,
                layoutDelta: a,
                hasLayoutChanged: l,
                hasRelativeLayoutChanged: h
            })
        } else if (e.isLead()) {
            let {
                onExitComplete: t
            } = e.options;
            t && t()
        }
        e.options.transition = void 0
    }

    function nd(e) {
        e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),e.isSharedProjectionDirty || (e.isSharedProjectionDirty =!!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)),e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty))
    }

    function np(e) {
        e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty =!1
    }

    function nf(e) {
        e.clearSnapshot()
    }

    function nm(e) {
        e.clearMeasurements()
    }

    function ng(e) {
        e.isLayoutDirty =!0,e.updateLayout()
    }

    function ny(e) {
        e.isLayoutDirty =!1
    }

    function nv(e) {
        e.isAnimationBlocked && e.layout &&!e.isLayoutDirty && (e.snapshot = e.layout,e.isLayoutDirty =!0)
    }

    function nw(e) {
        let {
            visualElement: t
        } = e.options;
        t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"),e.resetTransform()
    }

    function nb(e) {
        e.finishAnimation(),e.targetDelta = e.relativeTarget = e.target = void 0,e.isProjectionDirty =!0
    }

    function nx(e) {
        e.resolveTargetDelta()
    }

    function nk(e) {
        e.calcProjection()
    }

    function nS(e) {
        e.resetSkewAndRotation()
    }

    function n_(e) {
        e.removeLeadSnapshot()
    }

    function nE(e,t,r) {
        e.translate = t8(t.translate,0,r),e.scale = t8(t.scale,1,r),e.origin = t.origin,e.originPoint = t.originPoint
    }

    function nT(e,t,r,i) {
        e.min = t8(t.min,r.min,i),e.max = t8(t.max,r.max,i)
    }

    function nA(e) {
        return e.animationValues && void 0!== e.animationValues.opacityExit
    }
    let nR = {
            duration: .45,
            ease: [.4,0,.1,1]
        },
        nP = e => "u" > typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().includes(e),
        nj = nP("applewebkit/") &&!nP("chrome/") ? Math.round : eK;

    function nC(e) {
        e.min = nj(e.min),e.max = nj(e.max)
    }

    function nO(e,t,r) {
        return "position" === e || "preserve-aspect" === e &&!(.2 >= Math.abs(nt(t) - nt(r)))
    }

    function nN(e) {
        return e!== e.root && e.scroll ?.wasRoot
    }
    let nI = nh({
            attachResizeListener: (e,t) => i6(e,"resize",t),
            measureScroll: () => ({
                x: document.documentElement.scrollLeft || document.body ?.scrollLeft || 0,
                y: document.documentElement.scrollTop || document.body ?.scrollTop || 0
            }),
            checkIsScrollRoot: () =>!0
        }),
        n$ = {
            current: void 0
        },
        nM = nh({
            measureScroll: e => ({
                x: e.scrollLeft,
                y: e.scrollTop
            }),
            defaultParent: () => {
                if (!n$.current) {
                    let e = new nI({});
                    e.mount(window),e.setOptions({
                        layoutScroll:!0
                    }),n$.current = e
                }
                return n$.current
            },
            resetTransform: (e,t) => {
                e.style.transform = void 0!== t ? t : "none"
            },
            checkIsScrollRoot: e => "fixed" === window.getComputedStyle(e).position
        });

    function nL(e,t) {
        let r = so(e),
            i = new AbortController;
        return [r,{
            passive:!0,
            ...t,
            signal: i.signal
        },() => i.abort()]
    }

    function nD(e,t,r) {
        let {
            props: i
        } = e;
        e.animationState && i.whileHover && e.animationState.setActive("whileHover","Start" === r);
        let s = i["onHover" + r];
        s && eX.postRender(() => s(t,sw(t)))
    }

    function nU(e) {
        return sn(e) && "offsetHeight" in e &&!("ownerSVGElement" in e)
    }
    let nB = (e,t) =>!!t && (e === t || nB(e,t.parentElement)),
        nV = new WeakSet;

    function nF(e) {
        return t => {
            "Enter" === t.key && e(t)
        }
    }

    function nz(e,t) {
        e.dispatchEvent(new PointerEvent("pointer" + t,{
            isPrimary:!0,
            bubbles:!0
        }))
    }

    function nq(e) {
        return sv(e) &&!(i9.x || i9.y)
    }
    let nH = new WeakSet;

    function nW(e,t,r) {
        let {
            props: i
        } = e;
        if (e.current instanceof HTMLButtonElement && e.current.disabled) return;
        e.animationState && i.whileTap && e.animationState.setActive("whileTap","Start" === r);
        let s = i["onTap" + ("End" === r ? "" : r)];
        s && eX.postRender(() => s(t,sw(t)))
    }
    let nK = new WeakMap,
        nG = new WeakMap,
        nJ = e => {
            let t = nK.get(e.target);
            t && t(e)
        },
        nY = e => {
            e.forEach(nJ)
        },
        nX = {
            some: 0,
            all: 1
        },
        nQ = function(e,t) {
            if ("u" < typeof Proxy) return rF;
            let r = new Map,
                i = (r,i) => rF(r,i,e,t);
            return new Proxy((e,t) => i(e,t),{
                get: (s,n) => "create" === n ? i : (r.has(n) || r.set(n,rF(n,void 0,e,t)),r.get(n))
            })
        }({
            animation: {
                Feature: class extends rz {
                    constructor(e) {
                        super(e),e.animationState || (e.animationState = function(e) {
                            let t = t => Promise.all(t.map(({
                                    animation: t,
                                    options: r
                                }) => (function(e,t,r = {}) {
                                    let i;
                                    if (e.notify("AnimationStart",t),Array.isArray(t)) i = Promise.all(t.map(t => iQ(e,t,r)));
                                    else if ("string" == typeof t) i = iQ(e,t,r);
                                    else {
                                        let s = "function" == typeof t ? rq(e,t,r.custom) : t;
                                        i = Promise.all(iY(e,s,r))
                                    }
                                    return i.then(() => {
                                        e.notify("AnimationComplete",t)
                                    })
                                })(e,t,r))),
                                r = i3(),
                                i =!0,
                                s =!1,
                                n = t => (r,i) => {
                                    let s = rq(e,i,"exit" === t ? e.presenceContext ?.custom : void 0);
                                    if (s) {
                                        let {
                                            transition: e,
                                            transitionEnd: t,
                                            ...i
                                        } = s;
                                        r = { ...r,
                                            ...i,
                                            ...t
                                        }
                                    }
                                    return r
                                };

                            function a(a) {
                                let {
                                    props: o
                                } = e,l = function e(t) {
                                    if (!t) return;
                                    if (!t.isControllingVariants) {
                                        let r = t.parent && e(t.parent) || {};
                                        return void 0!== t.props.initial && (r.initial = t.props.initial),r
                                    }
                                    let r = {};
                                    for (let e = 0; e < iZ; e++) {
                                        let i = tN[e],
                                            s = t.props[i];
                                        (tC(s) ||!1 === s) && (r[i] = s)
                                    }
                                    return r
                                }(e.parent) || {},h = [],u = new Set,c = {},d = 1 / 0;
                                for (let t = 0; t < i2; t++) {
                                    var p,f;
                                    let m = i1[t],
                                        g = r[m],
                                        y = void 0!== o[m] ? o[m] : l[m],
                                        v = tC(y),
                                        w = m === a ? g.isActive : null;
                                   !1 === w && (d = t);
                                    let b = y === l[m] && y!== o[m] && v;
                                    if (b && (i || s) && e.manuallyAnimateOnMount && (b =!1),g.protectedKeys = { ...c
                                        },!g.isActive && null === w ||!y &&!g.prevProp || tj(y) || "boolean" == typeof y) continue;
                                    if ("exit" === m && g.isActive &&!0!== w) {
                                        g.prevResolvedValues && (c = { ...c,
                                            ...g.prevResolvedValues
                                        });
                                        continue
                                    }
                                    let x = (p = g.prevProp,"string" == typeof(f = y) ? f!== p :!!Array.isArray(f) &&!i0(f,p)),
                                        k = x || m === a && g.isActive &&!b && v || t > d && v,
                                        S =!1,
                                        _ = Array.isArray(y) ? y : [y],
                                        E = _.reduce(n(m),{});
                                   !1 === w && (E = {});
                                    let {
                                        prevResolvedValues: T = {}
                                    } = g,A = { ...T,
                                        ...E
                                    },R = t => {
                                        k =!0,u.has(t) && (S =!0,u.delete(t)),g.needsAnimating[t] =!0;
                                        let r = e.getValue(t);
                                        r && (r.liveStyle =!1)
                                    };
                                    for (let e in A) {
                                        let t = E[e],
                                            r = T[e];
                                        if (!c.hasOwnProperty(e))(rK(t) && rK(r) ? i0(t,r) : t === r) ? void 0!== t && u.has(e) ? R(e) : g.protectedKeys[e] =!0 : null!= t ? R(e) : u.add(e)
                                    }
                                    g.prevProp = y,g.prevResolvedValues = E,g.isActive && (c = { ...c,
                                        ...E
                                    }),(i || s) && e.blockInitialAnimation && (k =!1);
                                    let P = b && x,
                                        j =!P || S;
                                    k && j && h.push(..._.map(t => {
                                        let r = {
                                            type: m
                                        };
                                        if ("string" == typeof t && (i || s) &&!P && e.manuallyAnimateOnMount && e.parent) {
                                            let {
                                                parent: i
                                            } = e,s = rq(i,t);
                                            if (i.enteringChildren && s) {
                                                let {
                                                    delayChildren: t
                                                } = s.transition || {};
                                                r.delay = iX(i.enteringChildren,e,t)
                                            }
                                        }
                                        return {
                                            animation: t,
                                            options: r
                                        }
                                    }))
                                }
                                if (u.size) {
                                    let t = {};
                                    if ("boolean"!= typeof o.initial) {
                                        let r = rq(e,Array.isArray(o.initial) ? o.initial[0] : o.initial);
                                        r && r.transition && (t.transition = r.transition)
                                    }
                                    u.forEach(r => {
                                        let i = e.getBaseTarget(r),
                                            s = e.getValue(r);
                                        s && (s.liveStyle =!0),t[r] = i ?? null
                                    }),h.push({
                                        animation: t
                                    })
                                }
                                let m =!!h.length;
                                return i && (!1 === o.initial || o.initial === o.animate) &&!e.manuallyAnimateOnMount && (m =!1),i =!1,s =!1,m ? t(h) : Promise.resolve()
                            }
                            return {
                                animateChanges: a,
                                setActive: function(t,i) {
                                    if (r[t].isActive === i) return Promise.resolve();
                                    e.variantChildren ?.forEach(e => e.animationState ?.setActive(t,i)),r[t].isActive = i;
                                    let s = a(t);
                                    for (let e in r) r[e].protectedKeys = {};
                                    return s
                                },
                                setAnimateFunction: function(r) {
                                    t = r(e)
                                },
                                getState: () => r,
                                reset: () => {
                                    r = i3(),s =!0
                                }
                            }
                        }(e))
                    }
                    updateAnimationControlsSubscription() {
                        let {
                            animate: e
                        } = this.node.getProps();
                        tj(e) && (this.unmountControls = e.subscribe(this.node))
                    }
                    mount() {
                        this.updateAnimationControlsSubscription()
                    }
                    update() {
                        let {
                            animate: e
                        } = this.node.getProps(),{
                            animate: t
                        } = this.node.prevProps || {};
                        e!== t && this.updateAnimationControlsSubscription()
                    }
                    unmount() {
                        this.node.animationState.reset(),this.unmountControls ?.()
                    }
                }
            },
            exit: {
                Feature: class extends rz {
                    constructor() {
                        super(...arguments),this.id = i8++,this.isExitComplete =!1
                    }
                    update() {
                        if (!this.node.presenceContext) return;
                        let {
                            isPresent: e,
                            onExitComplete: t
                        } = this.node.presenceContext,{
                            isPresent: r
                        } = this.node.prevPresenceContext || {};
                        if (!this.node.animationState || e === r) return;
                        if (e &&!1 === r) {
                            if (this.isExitComplete) {
                                let {
                                    initial: e,
                                    custom: t
                                } = this.node.getProps();
                                if ("string" == typeof e) {
                                    let r = rq(this.node,e,t);
                                    if (r) {
                                        let {
                                            transition: e,
                                            transitionEnd: t,
                                            ...i
                                        } = r;
                                        for (let e in i) this.node.getValue(e) ?.jump(i[e])
                                    }
                                }
                                this.node.animationState.reset(),this.node.animationState.animateChanges()
                            } else this.node.animationState.setActive("exit",!1);
                            this.isExitComplete =!1;
                            return
                        }
                        let i = this.node.animationState.setActive("exit",!e);
                        t &&!e && i.then(() => {
                            this.isExitComplete =!0,t(this.id)
                        })
                    }
                    mount() {
                        let {
                            register: e,
                            onExitComplete: t
                        } = this.node.presenceContext || {};
                        t && t(this.id),e && (this.unmount = e(this.id))
                    }
                    unmount() {}
                }
            },
            inView: {
                Feature: class extends rz {
                    constructor() {
                        super(...arguments),this.hasEnteredView =!1,this.isInView =!1
                    }
                    startObserver() {
                        var e;
                        let t;
                        this.stopObserver ?.();
                        let {
                            viewport: r = {}
                        } = this.node.getProps(),{
                            root: i,
                            margin: s,
                            amount: n = "some",
                            once: a
                        } = r,o = {
                            root: i ? i.current : void 0,
                            rootMargin: s,
                            threshold: "number" == typeof n ? n : nX[n]
                        },l = e => {
                            let {
                                isIntersecting: t
                            } = e;
                            if (this.isInView === t || (this.isInView = t,a &&!t && this.hasEnteredView)) return;
                            t && (this.hasEnteredView =!0),this.node.animationState && this.node.animationState.setActive("whileInView",t);
                            let {
                                onViewportEnter: r,
                                onViewportLeave: i
                            } = this.node.getProps(),s = t ? r : i;
                            s && s(e)
                        };
                        this.stopObserver = (e = this.node.current,t = function({
                            root: e,
                            ...t
                        }) {
                            let r = e || document;
                            nG.has(r) || nG.set(r,{});
                            let i = nG.get(r),
                                s = JSON.stringify(t);
                            return i[s] || (i[s] = new IntersectionObserver(nY,{
                                root: e,
                                ...t
                            })),i[s]
                        }(o),nK.set(e,l),t.observe(e),() => {
                            nK.delete(e),t.unobserve(e)
                        })
                    }
                    mount() {
                        this.startObserver()
                    }
                    update() {
                        if ("u" < typeof IntersectionObserver) return;
                        let {
                            props: e,
                            prevProps: t
                        } = this.node;
                        ["amount","margin","root"].some(function({
                            viewport: e = {}
                        },{
                            viewport: t = {}
                        } = {}) {
                            return r => e[r]!== t[r]
                        }(e,t)) && this.startObserver()
                    }
                    unmount() {
                        this.stopObserver ?.(),this.hasEnteredView =!1,this.isInView =!1
                    }
                }
            },
            tap: {
                Feature: class extends rz {
                    mount() {
                        let {
                            current: e
                        } = this.node;
                        if (!e) return;
                        let {
                            globalTapTarget: t,
                            propagate: r
                        } = this.node.props;
                        this.unmount = function(e,t,r = {}) {
                            let [i,s,n] = nL(e,r),a = e => {
                                let i = e.currentTarget;
                                if (!nq(e) || nH.has(e)) return;
                                nV.add(i),r.stopPropagation && nH.add(e);
                                let n = t(i,e),
                                    a = (e,t) => {
                                        window.removeEventListener("pointerup",o),window.removeEventListener("pointercancel",l),nV.has(i) && nV.delete(i),nq(e) && "function" == typeof n && n(e,{
                                            success: t
                                        })
                                    },
                                    o = e => {
                                        a(e,i === window || i === document || r.useGlobalTarget || nB(i,e.target))
                                    },
                                    l = e => {
                                        a(e,!1)
                                    };
                                window.addEventListener("pointerup",o,s),window.addEventListener("pointercancel",l,s)
                            };
                            return i.forEach(e => {
                                ((r.useGlobalTarget ? window : e).addEventListener("pointerdown",a,s),nU(e)) && (e.addEventListener("focus",e => ((e,t) => {
                                    let r = e.currentTarget;
                                    if (!r) return;
                                    let i = nF(() => {
                                        if (nV.has(r)) return;
                                        nz(r,"down");
                                        let e = nF(() => {
                                            nz(r,"up")
                                        });
                                        r.addEventListener("keyup",e,t),r.addEventListener("blur",() => nz(r,"cancel"),t)
                                    });
                                    r.addEventListener("keydown",i,t),r.addEventListener("blur",() => r.removeEventListener("keydown",i),t)
                                })(e,s)),sg.has(e.tagName) ||!0 === e.isContentEditable || e.hasAttribute("tabindex") || (e.tabIndex = 0))
                            }),n
                        }(e,(e,t) => (nW(this.node,t,"Start"),(e,{
                            success: t
                        }) => nW(this.node,e,t ? "End" : "Cancel")),{
                            useGlobalTarget: t,
                            stopPropagation: r ?.tap ===!1
                        })
                    }
                    unmount() {}
                }
            },
            focus: {
                Feature: class extends rz {
                    constructor() {
                        super(...arguments),this.isActive =!1
                    }
                    onFocus() {
                        let e =!1;
                        try {
                            e = this.node.current.matches(":focus-visible")
                        } catch (t) {
                            e =!0
                        }
                        e && this.node.animationState && (this.node.animationState.setActive("whileFocus",!0),this.isActive =!0)
                    }
                    onBlur() {
                        this.isActive && this.node.animationState && (this.node.animationState.setActive("whileFocus",!1),this.isActive =!1)
                    }
                    mount() {
                        this.unmount = rY(i6(this.node.current,"focus",() => this.onFocus()),i6(this.node.current,"blur",() => this.onBlur()))
                    }
                    unmount() {}
                }
            },
            hover: {
                Feature: class extends rz {
                    mount() {
                        let {
                            current: e
                        } = this.node;
                        e && (this.unmount = function(e,t,r = {}) {
                            let [i,s,n] = nL(e,r);
                            return i.forEach(e => {
                                let r,i =!1,
                                    n =!1,
                                    a = t => {
                                        r && (r(t),r = void 0),e.removeEventListener("pointerleave",l)
                                    },
                                    o = e => {
                                        i =!1,window.removeEventListener("pointerup",o),window.removeEventListener("pointercancel",o),n && (n =!1,a(e))
                                    },
                                    l = e => {
                                        if ("touch"!== e.pointerType) {
                                            if (i) {
                                                n =!0;
                                                return
                                            }
                                            a(e)
                                        }
                                    };
                                e.addEventListener("pointerenter",i => {
                                    if ("touch" === i.pointerType || i9.x || i9.y) return;
                                    n =!1;
                                    let a = t(e,i);
                                    "function" == typeof a && (r = a,e.addEventListener("pointerleave",l,s))
                                },s),e.addEventListener("pointerdown",() => {
                                    i =!0,window.addEventListener("pointerup",o,s),window.addEventListener("pointercancel",o,s)
                                },s)
                            }),n
                        }(e,(e,t) => (nD(this.node,t,"Start"),e => nD(this.node,e,"End"))))
                    }
                    unmount() {}
                }
            },
            pan: {
                Feature: class extends rz {
                    constructor() {
                        super(...arguments),this.removePointerDownListener = eK
                    }
                    onPointerDown(e) {
                        this.session = new s_(e,this.createPanHandlers(),{
                            transformPagePoint: this.node.getTransformPagePoint(),
                            contextWindow: sx(this.node)
                        })
                    }
                    createPanHandlers() {
                        let {
                            onPanSessionStart: e,
                            onPanStart: t,
                            onPan: r,
                            onPanEnd: i
                        } = this.node.getProps();
                        return {
                            onSessionStart: sL(e),
                            onStart: sL(t),
                            onMove: sL(r),
                            onEnd: (e,t) => {
                                delete this.session,i && eX.postRender(() => i(e,t))
                            }
                        }
                    }
                    mount() {
                        this.removePointerDownListener = sb(this.node.current,"pointerdown",e => this.onPointerDown(e))
                    }
                    update() {
                        this.session && this.session.updateHandlers(this.createPanHandlers())
                    }
                    unmount() {
                        this.removePointerDownListener(),this.session && this.session.end()
                    }
                }
            },
            drag: {
                Feature: class extends rz {
                    constructor(e) {
                        super(e),this.removeGroupControls = eK,this.removeListeners = eK,this.controls = new sI(e)
                    }
                    mount() {
                        let {
                            dragControls: e
                        } = this.node.getProps();
                        e && (this.removeGroupControls = e.subscribe(this.controls)),this.removeListeners = this.controls.addListeners() || eK
                    }
                    update() {
                        let {
                            dragControls: e
                        } = this.node.getProps(),{
                            dragControls: t
                        } = this.node.prevProps || {};
                        e!== t && (this.removeGroupControls(),e && (this.removeGroupControls = e.subscribe(this.controls)))
                    }
                    unmount() {
                        this.removeGroupControls(),this.removeListeners(),this.controls.isDragging || this.controls.endPanSession()
                    }
                },
                ProjectionNode: nM,
                MeasureLayout: sz
            },
            layout: {
                ProjectionNode: nM,
                MeasureLayout: sz
            }
        },(e,t) => t.isSVG ?? rg(e) ? new re(t) : new rf(t,{
            allowProjection: e!== R.Fragment
        }));
    var nZ = R;

    function n0(e,t) {
        if ("function" == typeof e) return e(t);
        null!= e && (e.current = t)
    }
    class n1 extends nZ.Component {
        getSnapshotBeforeUpdate(e) {
            let t = this.props.childRef.current;
            if (nU(t) && e.isPresent &&!this.props.isPresent &&!1!== this.props.pop) {
                let e = t.offsetParent,
                    r = nU(e) && e.offsetWidth || 0,
                    i = nU(e) && e.offsetHeight || 0,
                    s = getComputedStyle(t),
                    n = this.props.sizeRef.current;
                n.height = parseFloat(s.height),n.width = parseFloat(s.width),n.top = t.offsetTop,n.left = t.offsetLeft,n.right = r - n.width - n.left,n.bottom = i - n.height - n.top
            }
            return null
        }
        componentDidUpdate() {}
        render() {
            return this.props.children
        }
    }

    function n2({
        children: e,
        isPresent: t,
        anchorX: r,
        anchorY: i,
        root: s,
        pop: n
    }) {
        let a = (0,nZ.useId)(),
            o = (0,nZ.useRef)(null),
            l = (0,nZ.useRef)({
                width: 0,
                height: 0,
                top: 0,
                left: 0,
                right: 0,
                bottom: 0
            }),
            {
                nonce: h
            } = (0,nZ.useContext)(rw),
            u = function(...e) {
                return R.useCallback(function(...e) {
                    return t => {
                        let r =!1,
                            i = e.map(e => {
                                let i = n0(e,t);
                                return r || "function"!= typeof i || (r =!0),i
                            });
                        if (r) return () => {
                            for (let t = 0; t < i.length; t++) {
                                let r = i[t];
                                "function" == typeof r ? r() : n0(e[t],null)
                            }
                        }
                    }
                }(...e),e)
            }(o,e.props ?.ref ?? e ?.ref);
        return (0,nZ.useInsertionEffect)(() => {
            let {
                width: e,
                height: u,
                top: c,
                left: d,
                right: p,
                bottom: f
            } = l.current;
            if (t ||!1 === n ||!o.current ||!e ||!u) return;
            let m = "left" === r ? `left: ${d}` : `right: ${p}`,
                g = "bottom" === i ? `bottom: ${f}` : `top: ${c}`;
            o.current.dataset.motionPopId = a;
            let y = document.createElement("style");
            h && (y.nonce = h);
            let v = s ?? document.head;
            return v.appendChild(y),y.sheet && y.sheet.insertRule(`
          [data-motion-pop-id="${a}"] {
            position: absolute!important;
            width: ${e}px!important;
            height: ${u}px!important;
            ${m}px!important;
            ${g}px!important;
          }
        `),() => {
                o.current ?.removeAttribute("data-motion-pop-id"),v.contains(y) && v.removeChild(y)
            }
        },[t]),(0,A.jsx)(n1,{
            isPresent: t,
            childRef: o,
            sizeRef: l,
            pop: n,
            children:!1 === n ? e : nZ.cloneElement(e,{
                ref: u
            })
        })
    }
    let n5 = ({
        children: e,
        initial: t,
        isPresent: r,
        onExitComplete: i,
        custom: s,
        presenceAffectsLayout: n,
        mode: a,
        anchorX: o,
        anchorY: l,
        root: h
    }) => {
        let u = rj(n3),
            c = (0,R.useId)(),
            d =!0,
            p = (0,R.useMemo)(() => (d =!1,{
                id: c,
                initial: t,
                isPresent: r,
                custom: s,
                onExitComplete: e => {
                    for (let t of (u.set(e,!0),u.values()))
                        if (!t) return;
                    i && i()
                },
                register: e => (u.set(e,!1),() => u.delete(e))
            }),[r,u,i]);
        return n && d && (p = { ...p
        }),(0,R.useMemo)(() => {
            u.forEach((e,t) => u.set(t,!1))
        },[r]),R.useEffect(() => {
            r || u.size ||!i || i()
        },[r]),e = (0,A.jsx)(n2,{
            pop: "popLayout" === a,
            isPresent: r,
            anchorX: o,
            anchorY: l,
            root: h,
            children: e
        }),(0,A.jsx)(rP.Provider,{
            value: p,
            children: e
        })
    };

    function n3() {
        return new Map
    }
    let n8 = e => e.key || "";

    function n4(e) {
        let t = [];
        return R.Children.forEach(e,e => {
            (0,R.isValidElement)(e) && t.push(e)
        }),t
    }
    let n6 = ({
            children: e,
            custom: t,
            initial: r =!0,
            onExitComplete: i,
            presenceAffectsLayout: s =!0,
            mode: n = "sync",
            propagate: a =!1,
            anchorX: o = "left",
            anchorY: l = "top",
            root: h
        }) => {
            let [u,c] = sB(a),d = (0,R.useMemo)(() => n4(e),[e]),p = a &&!u ? [] : d.map(n8),f = (0,R.useRef)(!0),m = (0,R.useRef)(d),g = rj(() => new Map),y = (0,R.useRef)(new Set),[v,w] = (0,R.useState)(d),[b,x] = (0,R.useState)(d);
            rV(() => {
                f.current =!1,m.current = d;
                for (let e = 0; e < b.length; e++) {
                    let t = n8(b[e]);
                    p.includes(t) ? (g.delete(t),y.current.delete(t)) :!0!== g.get(t) && g.set(t,!1)
                }
            },[b,p.length,p.join("-")]);
            let k = [];
            if (d!== v) {
                let e = [...d];
                for (let t = 0; t < b.length; t++) {
                    let r = b[t],
                        i = n8(r);
                    p.includes(i) || (e.splice(t,0,r),k.push(r))
                }
                return "wait" === n && k.length && (e = k),x(n4(e)),w(d),null
            }
            let {
                forceRender: S
            } = (0,R.useContext)(ry);
            return (0,A.jsx)(A.Fragment,{
                children: b.map(e => {
                    let v = n8(e),
                        w = (!a ||!!u) && (d === b || p.includes(v));
                    return (0,A.jsx)(n5,{
                        isPresent: w,
                        initial: (!f.current ||!!r) && void 0,
                        custom: t,
                        presenceAffectsLayout: s,
                        mode: n,
                        root: h,
                        onExitComplete: w ? void 0 : () => {
                            if (y.current.has(v) ||!g.has(v)) return;
                            y.current.add(v),g.set(v,!0);
                            let e =!0;
                            g.forEach(t => {
                                t || (e =!1)
                            }),e && (S ?.(),x(m.current),a && c ?.(),i && i())
                        },
                        anchorX: o,
                        anchorY: l,
                        children: e
                    },v)
                })
            })
        },
        n9 = (...e) => e.filter((e,t,r) =>!!e && ""!== e.trim() && r.indexOf(e) === t).join(" ").trim(),
        n7 = e => {
            let t = e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,r) => r ? r.toUpperCase() : t.toLowerCase());
            return t.charAt(0).toUpperCase() + t.slice(1)
        };
    var ae = {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round"
    };
    let at = (0,R.forwardRef)(({
            color: e = "currentColor",
            size: t = 24,
            strokeWidth: r = 2,
            absoluteStrokeWidth: i,
            className: s = "",
            children: n,
            iconNode: a,
            ...o
        },l) => (0,R.createElement)("svg",{
            ref: l,
            ...ae,
            width: t,
            height: t,
            stroke: e,
            strokeWidth: i ? 24 * Number(r) / Number(t) : r,
            className: n9("lucide",s),
            ...!n &&!(e => {
                for (let t in e)
                    if (t.startsWith("aria-") || "role" === t || "title" === t) return!0;
                return!1
            })(o) && {
                "aria-hidden": "true"
            },
            ...o
        },[...a.map(([e,t]) => (0,R.createElement)(e,t)),...Array.isArray(n) ? n : [n]])),
        ar = (e,t) => {
            let r = (0,R.forwardRef)(({
                className: r,
                ...i
            },s) => (0,R.createElement)(at,{
                ref: s,
                iconNode: t,
                className: n9(`lucide-${n7(e).replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,`lucide-${e}`,r),
                ...i
            }));
            return r.displayName = n7(e),r
        },
        ai = ar("heart",[
            ["path",{
                d: "M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",
                key: "mvr1a0"
            }]
        ]),
        as = ar("sparkles",[
            ["path",{
                d: "M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",
                key: "1s2grr"
            }],
            ["path",{
                d: "M20 2v4",
                key: "1rf3ol"
            }],
            ["path",{
                d: "M22 4h-4",
                key: "gwowj6"
            }],
            ["circle",{
                cx: "4",
                cy: "20",
                r: "2",
                key: "6kqj1y"
            }]
        ]);

    function an({
        onOpen: e
    }) {
        let [t,r] = (0,R.useState)(!1),[i,s] = (0,R.useState)([]);
        return (0,R.useEffect)(() => {
            s(Array.from({
                length: 22
            },(e,t) => ({
                id: t,
                x: 100 * Math.random(),
                y: 100 * Math.random()
            })))
        },[]),(0,A.jsx)(n6,{
            children: t ? (0,A.jsx)(nQ.div,{
                initial: {
                    opacity: 1
                },
                animate: {
                    opacity: 0
                },
                transition: {
                    duration: 1,
                    delay: .2
                },
                className: "fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f0f23]",
                children: (0,A.jsxs)(nQ.div,{
                    initial: {
                        scale: 1
                    },
                    animate: {
                        scale: 2,
                        opacity: 0
                    },
                    transition: {
                        duration: 1,
                        ease: "easeInOut"
                    },
                    className: "relative",
                    children: [
                        [...Array(12)].map((e,t) => (0,A.jsx)(nQ.div,{
                            initial: {
                                x: 0,
                                y: 0,
                                scale: 0,
                                opacity: 1
                            },
                            animate: {
                                x: 150 * Math.cos(t / 12 * Math.PI * 2),
                                y: 150 * Math.sin(t / 12 * Math.PI * 2),
                                scale: 1,
                                opacity: 0
                            },
                            transition: {
                                duration: .8,
                                delay: .1
                            },
                            className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
                            children: (0,A.jsx)(ai,{
                                className: "w-7 h-7 text-[#c9a050]",
                                fill: "currentColor"
                            })
                        },t)),(0,A.jsx)(nQ.div,{
                            animate: {
                                rotate: [0,360]
                            },
                            transition: {
                                duration: .8
                            },
                            className: "w-32 h-32 rounded-full bg-gradient-to-br from-[#e0c486] to-[#9a7430] flex items-center justify-center shadow-2xl",
                            children: (0,A.jsx)(ai,{
                                className: "w-14 h-14 text-white",
                                fill: "currentColor"
                            })
                        })
                    ]
                })
            }) : (0,A.jsxs)(nQ.div,{
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: 1
                },
                exit: {
                    opacity: 0,
                    transition: {
                        duration: .6
                    }
                },
                className: "fixed inset-0 z-50 flex items-center justify-center overflow-hidden",
                children: [(0,A.jsxs)("div",{
                    className: "absolute inset-0 bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f0f23]",
                    children: [i.map(e => (0,A.jsx)(nQ.div,{
                        className: "absolute w-[5px] h-[5px] bg-[#c9a050] rounded-full",
                        style: {
                            left: `${e.x}%`,
                            top: `${e.y}%`
                        },
                        animate: {
                            y: [0,-30,0],
                            opacity: [.25,.8,.25],
                            scale: [1,1.5,1]
                        },
                        transition: {
                            duration: 4 + 3 * Math.random(),
                            repeat: 1 / 0,
                            delay: 2 * Math.random(),
                            ease: "easeInOut"
                        }
                    },e.id)),(0,A.jsx)(nQ.div,{
                        className: "absolute top-1/4 left-1/4 w-64 h-64 border border-[#c9a050]/15 rounded-full",
                        animate: {
                            rotate: 360,
                            scale: [1,1.1,1]
                        },
                        transition: {
                            rotate: {
                                duration: 30,
                                repeat: 1 / 0,
                                ease: "linear"
                            },
                            scale: {
                                duration: 8,
                                repeat: 1 / 0
                            }
                        }
                    }),(0,A.jsx)(nQ.div,{
                        className: "absolute bottom-1/4 right-1/4 w-96 h-96 border border-[#c9a050]/10 rounded-full",
                        animate: {
                            rotate: -360
                        },
                        transition: {
                            duration: 40,
                            repeat: 1 / 0,
                            ease: "linear"
                        }
                    }),(0,A.jsx)(nQ.div,{
                        className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-[#c9a050]/5 rounded-full",
                        animate: {
                            rotate: 360
                        },
                        transition: {
                            duration: 60,
                            repeat: 1 / 0,
                            ease: "linear"
                        }
                    })]
                }),(0,A.jsxs)(nQ.div,{
                    initial: {
                        opacity: 0,
                        y: 30,
                        scale: .9
                    },
                    animate: {
                        opacity: 1,
                        y: 0,
                        scale: 1
                    },
                    transition: {
                        duration: 1.2,
                        ease: [.2,.7,.3,1]
                    },
                    className: "relative z-10 text-center px-6 w-full max-w-[34rem] mx-auto",
                    children: [(0,A.jsx)("div",{
                        className: "absolute -inset-10 border border-[#c9a050]/20 rounded-2xl pointer-events-none"
                    }),(0,A.jsx)(nQ.div,{
                        className: "absolute -top-6 -left-6 text-[#c9a050]/45",
                        animate: {
                            rotate: 360
                        },
                        transition: {
                            duration: 10,
                            repeat: 1 / 0,
                            ease: "linear"
                        },
                        children: (0,A.jsx)(as,{
                            className: "w-5 h-5"
                        })
                    }),(0,A.jsx)(nQ.div,{
                        className: "absolute -bottom-6 -right-6 text-[#c9a050]/45",
                        animate: {
                            rotate: -360
                        },
                        transition: {
                            duration: 12,
                            repeat: 1 / 0,
                            ease: "linear"
                        },
                        children: (0,A.jsx)(as,{
                            className: "w-5 h-5"
                        })
                    }),(0,A.jsxs)(nQ.div,{
                        initial: {
                            scaleX: 0
                        },
                        animate: {
                            scaleX: 1
                        },
                        transition: {
                            delay: .3,
                            duration: 1
                        },
                        className: "flex items-center justify-center gap-3 mb-9",
                        children: [(0,A.jsx)("div",{
                            className: "h-px w-24 bg-gradient-to-r from-transparent to-[#c9a050]"
                        }),(0,A.jsx)(nQ.div,{
                            animate: {
                                scale: [1,1.3,1],
                                rotate: [0,360,0]
                            },
                            transition: {
                                duration: 4,
                                repeat: 1 / 0,
                                ease: "easeInOut"
                            },
                            children: (0,A.jsx)(ai,{
                                className: "w-5 h-5 text-[#c9a050]",
                                fill: "currentColor"
                            })
                        }),(0,A.jsx)("div",{
                            className: "h-px w-24 bg-gradient-to-l from-transparent to-[#c9a050]"
                        })]
                    }),(0,A.jsx)(nQ.p,{
                        initial: {
                            opacity: 0,
                            y: 10
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            delay: .5,
                            duration: .8
                        },
                        className: "text-[#c9a050]/85 uppercase tracking-[0.38em] text-[0.72rem] font-medium mb-6",
                        children: "Nikoh Taklifnomasi"
                    }),(0,A.jsx)(nQ.h1,{
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            delay: .7,
                            duration: .8
                        },
                        className: "font-serif text-white font-semibold drop-shadow-lg",
                        style: {
                            fontSize: "clamp(2.6rem,9vw,4.6rem)",
                            lineHeight: 1.05
                        },
                        children: "Lazizbek"
                    }),(0,A.jsx)(nQ.div,{
                        initial: {
                            opacity: 0,
                            scale: 0
                        },
                        animate: {
                            opacity: 1,
                            scale: 1
                        },
                        transition: {
                            delay: .9,
                            duration: .6
                        },
                        className: "text-[#c9a050] font-serif my-1",
                        style: {
                            fontSize: "clamp(1.6rem,5vw,2.4rem)"
                        },
                        children: "&"
                    }),(0,A.jsx)(nQ.h1,{
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            delay: 1.1,
                            duration: .8
                        },
                        className: "font-serif text-white font-semibold drop-shadow-lg mb-10",
                        style: {
                            fontSize: "clamp(2.6rem,9vw,4.6rem)",
                            lineHeight: 1.05
                        },
                        children: "Mahbuba"
                    }),(0,A.jsxs)(nQ.div,{
                        initial: {
                            scaleX: 0
                        },
                        animate: {
                            scaleX: 1
                        },
                        transition: {
                            delay: 1.3,
                            duration: 1
                        },
                        className: "flex items-center justify-center gap-3 mb-10",
                        children: [(0,A.jsx)("div",{
                            className: "h-px w-24 bg-gradient-to-r from-transparent to-[#c9a050]"
                        }),(0,A.jsx)("div",{
                            className: "w-2 h-2 bg-[#c9a050] rotate-45"
                        }),(0,A.jsx)("div",{
                            className: "h-px w-24 bg-gradient-to-l from-transparent to-[#c9a050]"
                        })]
                    }),(0,A.jsxs)(nQ.button,{
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            delay: 1.5,
                            duration: .8
                        },
                        onClick: () => {
                            r(!0),setTimeout(() => {
                                e()
                            },1400)
                        },
                        whileHover: {
                            scale: 1.05
                        },
                        whileTap: {
                            scale: .96
                        },
                        className: "relative inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full overflow-hidden cursor-pointer border-none",
                        style: {
                            boxShadow: "0 0 30px rgba(201,160,80,.45)"
                        },
                        children: [(0,A.jsx)("span",{
                            className: "absolute inset-0 bg-gradient-to-r from-[#9a7430] via-[#c9a050] to-[#9a7430]"
                        }),(0,A.jsx)(nQ.span,{
                            className: "absolute inset-0 bg-gradient-to-r from-transparent via-white/45 to-transparent",
                            animate: {
                                x: ["-200%","200%"]
                            },
                            transition: {
                                duration: 2.5,
                                repeat: 1 / 0,
                                repeatDelay: .5
                            }
                        }),(0,A.jsxs)("span",{
                            className: "relative z-10 flex items-center gap-2 text-white font-semibold text-[1.05rem]",
                            children: [(0,A.jsx)(nQ.span,{
                                animate: {
                                    scale: [1,1.2,1]
                                },
                                transition: {
                                    duration: 1.5,
                                    repeat: 1 / 0
                                },
                                children: (0,A.jsx)(ai,{
                                    className: "w-4 h-4",
                                    fill: "currentColor"
                                })
                            }),"Taklifnomani ochish"]
                        })]
                    }),(0,A.jsxs)(nQ.div,{
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: 1
                        },
                        transition: {
                            delay: 1.8,
                            duration: .8
                        },
                        className: "flex flex-col items-center gap-2 mt-7",
                        children: [(0,A.jsxs)("span",{
                            className: "text-white/60 text-[0.98rem] tracking-[0.04em]",
                            children: ["28.06.2026"," — ","Navoiy viloyati,Navoiy shahri".split(",")[0]]
                        }),(0,A.jsx)("div",{
                            className: "w-10 h-px bg-[#c9a050]/50"
                        }),(0,A.jsxs)("span",{
                            className: "text-white/60 text-[0.98rem] tracking-[0.04em]",
                            children: ["01.07.2026"," — ","Navoiy viloyati,Xatirchi tumani".split(",")[0]]
                        })]
                    })]
                })]
            })
        })
    }

    function aa() {
        let [e,t] = (0,R.useState)([]);
        return (0,R.useEffect)(() => {
            t(Array.from({
                length: 14
            },(e,t) => ({
                id: t,
                x: 4 + 6.8 * t,
                delay: .5 * t,
                duration: 10 + 6 * Math.random()
            })))
        },[]),(0,A.jsxs)("section",{
            className: "relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4",
            children: [(0,A.jsxs)("div",{
                className: "absolute inset-0 bg-gradient-to-b from-[var(--cream)] via-white to-[var(--cream)]",
                children: [e.map(e => (0,A.jsx)(nQ.div,{
                    className: "absolute text-[#c9a050]/18",
                    style: {
                        left: `${e.x}%`,
                        width: 20,
                        height: 20
                    },
                    initial: {
                        y: "110vh"
                    },
                    animate: {
                        y: "-12vh",
                        rotate: [0,15,-15,0]
                    },
                    transition: {
                        duration: e.duration,
                        repeat: 1 / 0,
                        delay: e.delay,
                        ease: "linear"
                    },
                    children: (0,A.jsx)(ai,{
                        className: "w-5 h-5",
                        fill: "currentColor"
                    })
                },e.id)),(0,A.jsx)(nQ.div,{
                    className: "absolute top-[12%] left-[6%] w-32 h-32 border border-[#c9a050]/25 rounded-full",
                    animate: {
                        scale: [1,1.2,1],
                        opacity: [.25,.5,.25]
                    },
                    transition: {
                        duration: 5,
                        repeat: 1 / 0
                    }
                }),(0,A.jsx)(nQ.div,{
                    className: "absolute top-[24%] right-[7%] w-20 h-20 border border-[#c9a050]/25 rounded-full",
                    animate: {
                        scale: [1,1.25,1],
                        opacity: [.25,.5,.25]
                    },
                    transition: {
                        duration: 5,
                        repeat: 1 / 0,
                        delay: .5
                    }
                }),(0,A.jsx)(nQ.div,{
                    className: "absolute bottom-[24%] left-[18%] w-16 h-16 border border-[#c9a050]/25 rounded-full",
                    animate: {
                        scale: [1,1.2,1],
                        opacity: [.25,.5,.25]
                    },
                    transition: {
                        duration: 5,
                        repeat: 1 / 0,
                        delay: 1
                    }
                }),(0,A.jsx)(nQ.div,{
                    className: "absolute bottom-[30%] right-[20%] w-12 h-12 border border-[#c9a050]/25 rounded-full",
                    animate: {
                        scale: [1,1.3,1]
                    },
                    transition: {
                        duration: 5,
                        repeat: 1 / 0,
                        delay: 1.5
                    }
                })]
            }),(0,A.jsxs)(nQ.div,{
                initial: {
                    opacity: 0,
                    y: 50
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: 1.5,
                    ease: "easeOut"
                },
                className: "relative z-10 text-center w-full max-w-4xl mx-auto",
                children: [(0,A.jsxs)(nQ.div,{
                    initial: {
                        scaleX: 0
                    },
                    animate: {
                        scaleX: 1
                    },
                    transition: {
                        duration: 1.2,
                        delay: .3
                    },
                    className: "flex items-center justify-center gap-3 mb-9",
                    children: [(0,A.jsx)("div",{
                        className: "h-px bg-gradient-to-r from-transparent to-[#c9a050]",
                        style: {
                            width: "clamp(2.5rem,8vw,8rem)"
                        }
                    }),(0,A.jsx)(nQ.div,{
                        animate: {
                            scale: [1,1.3,1],
                            rotate: [0,360,0]
                        },
                        transition: {
                            duration: 4,
                            repeat: 1 / 0,
                            ease: "easeInOut"
                        },
                        children: (0,A.jsx)(ai,{
                            className: "w-6 h-6 text-[#c9a050]",
                            fill: "currentColor"
                        })
                    }),(0,A.jsx)("div",{
                        className: "h-px bg-gradient-to-l from-transparent to-[#c9a050]",
                        style: {
                            width: "clamp(2.5rem,8vw,8rem)"
                        }
                    })]
                }),(0,A.jsx)(nQ.h1,{
                    initial: {
                        opacity: 0,
                        y: 30
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: 1.2,
                        delay: .7
                    },
                    className: "font-serif text-foreground font-semibold",
                    style: {
                        fontSize: "clamp(3.4rem,13vw,8.5rem)",
                        lineHeight: 1
                    },
                    children: "Lazizbek"
                }),(0,A.jsxs)(nQ.div,{
                    initial: {
                        opacity: 0,
                        scale: 0
                    },
                    animate: {
                        opacity: 1,
                        scale: 1
                    },
                    transition: {
                        duration: .8,
                        delay: 1
                    },
                    className: "flex items-center justify-center gap-4 my-4",
                    children: [(0,A.jsx)("div",{
                        className: "h-px bg-[#c9a050]",
                        style: {
                            width: "clamp(2rem,6vw,5rem)"
                        }
                    }),(0,A.jsx)("span",{
                        className: "text-[#c9a050] font-serif",
                        style: {
                            fontSize: "clamp(2rem,6vw,3rem)"
                        },
                        children: "&"
                    }),(0,A.jsx)("div",{
                        className: "h-px bg-[#c9a050]",
                        style: {
                            width: "clamp(2rem,6vw,5rem)"
                        }
                    })]
                }),(0,A.jsx)(nQ.h1,{
                    initial: {
                        opacity: 0,
                        y: 30
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: 1.2,
                        delay: 1.2
                    },
                    className: "font-serif text-foreground font-semibold mb-8",
                    style: {
                        fontSize: "clamp(3.4rem,13vw,8.5rem)",
                        lineHeight: 1
                    },
                    children: "Mahbuba"
                }),(0,A.jsxs)(nQ.div,{
                    initial: {
                        scaleX: 0
                    },
                    animate: {
                        scaleX: 1
                    },
                    transition: {
                        duration: 1.2,
                        delay: 1.5
                    },
                    className: "flex items-center justify-center gap-3 mb-7",
                    children: [(0,A.jsx)("div",{
                        className: "h-px bg-gradient-to-r from-transparent to-[#c9a050]",
                        style: {
                            width: "clamp(2.5rem,8vw,8rem)"
                        }
                    }),(0,A.jsx)("div",{
                        className: "w-2 h-2 bg-[#c9a050] rotate-45"
                    }),(0,A.jsx)("div",{
                        className: "h-px bg-gradient-to-l from-transparent to-[#c9a050]",
                        style: {
                            width: "clamp(2.5rem,8vw,8rem)"
                        }
                    })]
                }),(0,A.jsxs)(nQ.div,{
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    transition: {
                        duration: .8,
                        delay: 1.7
                    },
                    className: "flex items-center justify-center flex-wrap gap-x-10 gap-y-3",
                    children: [(0,A.jsxs)("div",{
                        className: "text-center",
                        children: [(0,A.jsx)("div",{
                            className: "font-serif text-foreground",
                            style: {
                                fontSize: "clamp(1.3rem,4vw,1.9rem)"
                            },
                            children: "28.06.2026"
                        }),(0,A.jsx)("div",{
                            className: "text-[#9a7430] uppercase tracking-[0.12em] mt-1",
                            style: {
                                fontSize: "clamp(0.9rem,2.4vw,1.05rem)"
                            },
                            children: "Navoiy viloyati,Navoiy shahri".split(",")[0]
                        })]
                    }),(0,A.jsx)("div",{
                        className: "w-px h-10 bg-[#c9a050]/50"
                    }),(0,A.jsxs)("div",{
                        className: "text-center",
                        children: [(0,A.jsx)("div",{
                            className: "font-serif text-foreground",
                            style: {
                                fontSize: "clamp(1.3rem,4vw,1.9rem)"
                            },
                            children: "01.07.2026"
                        }),(0,A.jsx)("div",{
                            className: "text-[#9a7430] uppercase tracking-[0.12em] mt-1",
                            style: {
                                fontSize: "clamp(0.9rem,2.4vw,1.05rem)"
                            },
                            children: "Navoiy viloyati,Karmana tumani".split(",")[0]
                        })]
                    })]
                })]
            }),(0,A.jsx)(nQ.div,{
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: 1
                },
                transition: {
                    delay: 2.5,
                    duration: 1
                },
                className: "absolute bottom-8 left-1/2 -translate-x-1/2",
                children: (0,A.jsxs)(nQ.div,{
                    animate: {
                        y: [0,8,0]
                    },
                    transition: {
                        duration: 2,
                        repeat: 1 / 0,
                        ease: "easeInOut"
                    },
                    className: "flex flex-col items-center gap-2",
                    children: [(0,A.jsx)("span",{
                        className: "text-sm text-muted-foreground tracking-widest",
                        children: "Pastga"
                    }),(0,A.jsx)("div",{
                        className: "w-6 h-9 border-2 border-[#c9a050]/50 rounded-full flex justify-center pt-2",
                        children: (0,A.jsx)(nQ.div,{
                            animate: {
                                y: [0,10,0]
                            },
                            transition: {
                                duration: 1.5,
                                repeat: 1 / 0,
                                ease: "easeInOut"
                            },
                            className: "w-1.5 h-1.5 bg-[#c9a050] rounded-full"
                        })
                    })]
                })
            })]
        })
    }
    let ao = ar("quote",[
        ["path",{
            d: "M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",
            key: "rib7q0"
        }],
        ["path",{
            d: "M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",
            key: "1ymkrd"
        }]
    ]);

    function al() {
        return (0,A.jsxs)("section",{
            className: "relative pt-0 pb-20 sm:pb-28 overflow-hidden",
            children: [(0,A.jsx)("div",{
                className: "absolute inset-0 bg-gradient-to-b from-[var(--cream)] via-white to-[var(--cream)]"
            }),(0,A.jsx)(nQ.div,{
                initial: {
                    opacity: 0,
                    x: -50
                },
                whileInView: {
                    opacity: .1,
                    x: 0
                },
                viewport: {
                    once:!0
                },
                transition: {
                    duration: 1
                },
                className: "absolute left-0 top-1/2 -translate-y-1/2 w-32 h-64 hidden sm:block",
                children: (0,A.jsx)("div",{
                    className: "w-full h-full border-l-2 border-t-2 border-b-2 border-[#c9a050] rounded-l-full"
                })
            }),(0,A.jsx)(nQ.div,{
                initial: {
                    opacity: 0,
                    x: 50
                },
                whileInView: {
                    opacity: .1,
                    x: 0
                },
                viewport: {
                    once:!0
                },
                transition: {
                    duration: 1
                },
                className: "absolute right-0 top-1/2 -translate-y-1/2 w-32 h-64 hidden sm:block",
                children: (0,A.jsx)("div",{
                    className: "w-full h-full border-r-2 border-t-2 border-b-2 border-[#c9a050] rounded-r-full"
                })
            }),(0,A.jsxs)("div",{
                className: "relative z-10 flex flex-col items-center pt-2 pb-10",
                children: [(0,A.jsx)(nQ.div,{
                    initial: {
                        scaleY: 0
                    },
                    whileInView: {
                        scaleY: 1
                    },
                    viewport: {
                        once:!0
                    },
                    transition: {
                        duration: .7
                    },
                    className: "w-px h-14 bg-gradient-to-b from-transparent to-[#c9a050]/60"
                }),(0,A.jsx)(nQ.div,{
                    initial: {
                        scale: 0,
                        rotate: -45
                    },
                    whileInView: {
                        scale: 1,
                        rotate: 0
                    },
                    viewport: {
                        once:!0
                    },
                    transition: {
                        duration: .6,
                        delay: .3
                    },
                    className: "my-1",
                    children: (0,A.jsxs)("svg",{
                        width: "36",
                        height: "36",
                        viewBox: "0 0 36 36",
                        fill: "none",
                        children: [(0,A.jsx)("rect",{
                            x: "15",
                            y: "0",
                            width: "6",
                            height: "6",
                            rx: "1",
                            fill: "#c9a050",
                            transform: "rotate(45 18 3)"
                        }),(0,A.jsx)("rect",{
                            x: "15",
                            y: "27",
                            width: "6",
                            height: "6",
                            rx: "1",
                            fill: "#c9a050",
                            transform: "rotate(45 18 30)"
                        }),(0,A.jsx)("rect",{
                            x: "0",
                            y: "15",
                            width: "6",
                            height: "6",
                            rx: "1",
                            fill: "#c9a050",
                            transform: "rotate(45 3 18)"
                        }),(0,A.jsx)("rect",{
                            x: "27",
                            y: "15",
                            width: "6",
                            height: "6",
                            rx: "1",
                            fill: "#c9a050",
                            transform: "rotate(45 30 18)"
                        }),(0,A.jsx)("circle",{
                            cx: "18",
                            cy: "18",
                            r: "4",
                            fill: "#c9a050"
                        }),(0,A.jsx)("line",{
                            x1: "18",
                            y1: "6",
                            x2: "18",
                            y2: "13",
                            stroke: "#c9a050",
                            strokeWidth: "1",
                            strokeOpacity: "0.5"
                        }),(0,A.jsx)("line",{
                            x1: "18",
                            y1: "23",
                            x2: "18",
                            y2: "30",
                            stroke: "#c9a050",
                            strokeWidth: "1",
                            strokeOpacity: "0.5"
                        }),(0,A.jsx)("line",{
                            x1: "6",
                            y1: "18",
                            x2: "13",
                            y2: "18",
                            stroke: "#c9a050",
                            strokeWidth: "1",
                            strokeOpacity: "0.5"
                        }),(0,A.jsx)("line",{
                            x1: "23",
                            y1: "18",
                            x2: "30",
                            y2: "18",
                            stroke: "#c9a050",
                            strokeWidth: "1",
                            strokeOpacity: "0.5"
                        })]
                    })
                }),(0,A.jsx)(nQ.div,{
                    initial: {
                        scaleY: 0
                    },
                    whileInView: {
                        scaleY: 1
                    },
                    viewport: {
                        once:!0
                    },
                    transition: {
                        duration: .7,
                        delay: .4
                    },
                    className: "w-px h-10 bg-gradient-to-b from-[#c9a050]/60 to-transparent"
                })]
            }),(0,A.jsx)("div",{
                className: "relative z-10 mx-auto px-4 sm:px-6 max-w-3xl",
                children: (0,A.jsxs)(nQ.div,{
                    initial: {
                        opacity: 0,
                        y: 30
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    viewport: {
                        once:!0,
                        margin: "-50px"
                    },
                    transition: {
                        duration: .8
                    },
                    className: "text-center",
                    children: [(0,A.jsx)(nQ.div,{
                        initial: {
                            opacity: 0,
                            scale: 0
                        },
                        whileInView: {
                            opacity: 1,
                            scale: 1
                        },
                        viewport: {
                            once:!0
                        },
                        transition: {
                            duration: .6,
                            delay: .2
                        },
                        className: "w-[3.8rem] h-[3.8rem] mx-auto mb-8 rounded-full bg-[#c9a050]/10 flex items-center justify-center",
                        children: (0,A.jsx)(ao,{
                            className: "w-8 h-8 text-[#c9a050]"
                        })
                    }),(0,A.jsx)("h2",{
                        className: "font-serif text-3xl sm:text-4xl md:text-5xl text-foreground mb-6",
                        children: "Hurmatli Mehmon!"
                    }),(0,A.jsx)(nQ.div,{
                        initial: {
                            scaleX: 0
                        },
                        whileInView: {
                            scaleX: 1
                        },
                        viewport: {
                            once:!0
                        },
                        transition: {
                            duration: .8,
                            delay: .3
                        },
                        className: "w-24 h-px bg-gradient-to-r from-transparent via-[#c9a050] to-transparent mx-auto mb-10"
                    }),(0,A.jsx)(nQ.p,{
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        whileInView: {
                            opacity: 1,
                            y: 0
                        },
                        viewport: {
                            once:!0
                        },
                        transition: {
                            duration: .8,
                            delay: .4
                        },
                        className: "text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed mb-7",
                        children: "Sizni hayotimizning eng muhim va quvonchli kuniga taklif qilishdan mamnunmiz.Bu baxtli kunimizni siz bilan birga nishonlash biz uchun katta sharafdir."
                    }),(0,A.jsx)(nQ.p,{
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        whileInView: {
                            opacity: 1,
                            y: 0
                        },
                        viewport: {
                            once:!0
                        },
                        transition: {
                            duration: .8,
                            delay: .6
                        },
                        className: "text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed mb-10",
                        children: "Sizning ishtirokingiz bizning to'yimizni yanada unutilmas qiladi.Siz bilan bo'lishgan har bir lahza qalbimizda abadiy xotira bo'lib qoladi."
                    }),(0,A.jsxs)(nQ.div,{
                        initial: {
                            scaleX: 0
                        },
                        whileInView: {
                            scaleX: 1
                        },
                        viewport: {
                            once:!0
                        },
                        transition: {
                            duration: .8,
                            delay: .7
                        },
                        className: "flex items-center justify-center gap-3 mb-8",
                        children: [(0,A.jsx)("div",{
                            className: "w-20 h-px bg-gradient-to-r from-transparent to-[#c9a050]"
                        }),(0,A.jsx)(ai,{
                            className: "w-4 h-4 text-[#c9a050]",
                            fill: "currentColor"
                        }),(0,A.jsx)("div",{
                            className: "w-20 h-px bg-gradient-to-l from-transparent to-[#c9a050]"
                        })]
                    }),(0,A.jsxs)(nQ.div,{
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        whileInView: {
                            opacity: 1,
                            y: 0
                        },
                        viewport: {
                            once:!0
                        },
                        transition: {
                            duration: .8,
                            delay: .8
                        },
                        className: "relative inline-block",
                        children: [(0,A.jsxs)("span",{
                            className: "font-serif text-xl sm:text-2xl md:text-3xl text-[#9a7430] italic",
                            children: ["Hurmat bilan,","Lazizbek"," va ","Mahbuba"]
                        }),(0,A.jsx)(nQ.div,{
                            initial: {
                                scaleX: 0
                            },
                            whileInView: {
                                scaleX: 1
                            },
                            viewport: {
                                once:!0
                            },
                            transition: {
                                duration: .8,
                                delay: 1
                            },
                            className: "absolute -bottom-2 left-0 right-0 h-px bg-[#c9a050]/30"
                        })]
                    })]
                })
            })]
        })
    }
    let ah = ar("map-pin",[
            ["path",{
                d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
                key: "1r0f0z"
            }],
            ["circle",{
                cx: "12",
                cy: "10",
                r: "3",
                key: "ilqhr7"
            }]
        ]),
        au = ar("calendar",[
            ["path",{
                d: "M8 2v4",
                key: "1cmpym"
            }],
            ["path",{
                d: "M16 2v4",
                key: "4m81vk"
            }],
            ["rect",{
                width: "18",
                height: "18",
                x: "3",
                y: "4",
                rx: "2",
                key: "1hopcy"
            }],
            ["path",{
                d: "M3 10h18",
                key: "8toen8"
            }]
        ]),
        ac = ar("navigation",[
            ["polygon",{
                points: "3 11 22 2 13 21 11 13 3 11",
                key: "1ltx0t"
            }]
        ]);
    var ad = Object.defineProperty,
        ap = Object.getOwnPropertySymbols,
        af = Object.prototype.hasOwnProperty,
        am = Object.prototype.propertyIsEnumerable,
        ag = (e,t,r) => t in e ? ad(e,t,{
            enumerable:!0,
            configurable:!0,
            writable:!0,
            value: r
        }) : e[t] = r,
        ay = (e,t) => {
            for (var r in t || (t = {})) af.call(t,r) && ag(e,r,t[r]);
            if (ap)
                for (var r of ap(t)) am.call(t,r) && ag(e,r,t[r]);
            return e
        },
        av = (e,t) => {
            var r = {};
            for (var i in e) af.call(e,i) && 0 > t.indexOf(i) && (r[i] = e[i]);
            if (null!= e && ap)
                for (var i of ap(e)) 0 > t.indexOf(i) && am.call(e,i) && (r[i] = e[i]);
            return r
        };
    (e => {
        let t = class t {
            constructor(e,r,i,n) {
                if (this.version = e,this.errorCorrectionLevel = r,this.modules = [],this.isFunction = [],e < t.MIN_VERSION || e > t.MAX_VERSION) throw RangeError("Version value out of range");
                if (n < -1 || n > 7) throw RangeError("Mask value out of range");
                this.size = 4 * e + 17;
                let a = [];
                for (let e = 0; e < this.size; e++) a.push(!1);
                for (let e = 0; e < this.size; e++) this.modules.push(a.slice()),this.isFunction.push(a.slice());
                this.drawFunctionPatterns();
                const o = this.addEccAndInterleave(i);
                if (this.drawCodewords(o),-1 == n) {
                    let e = 1e9;
                    for (let t = 0; t < 8; t++) {
                        this.applyMask(t),this.drawFormatBits(t);
                        const r = this.getPenaltyScore();
                        r < e && (n = t,e = r),this.applyMask(t)
                    }
                }
                s(0 <= n && n <= 7),this.mask = n,this.applyMask(n),this.drawFormatBits(n),this.isFunction = []
            }
            static encodeText(r,i) {
                let s = e.QrSegment.makeSegments(r);
                return t.encodeSegments(s,i)
            }
            static encodeBinary(r,i) {
                let s = e.QrSegment.makeBytes(r);
                return t.encodeSegments([s],i)
            }
            static encodeSegments(e,i,n = 1,o = 40,l = -1,h =!0) {
                let u,c;
                if (!(t.MIN_VERSION <= n && n <= o && o <= t.MAX_VERSION) || l < -1 || l > 7) throw RangeError("Invalid value");
                for (u = n;; u++) {
                    let r = 8 * t.getNumDataCodewords(u,i),
                        s = a.getTotalBits(e,u);
                    if (s <= r) {
                        c = s;
                        break
                    }
                    if (u >= o) throw RangeError("Data too long")
                }
                for (let e of [t.Ecc.MEDIUM,t.Ecc.QUARTILE,t.Ecc.HIGH]) h && c <= 8 * t.getNumDataCodewords(u,e) && (i = e);
                let d = [];
                for (let t of e)
                    for (let e of (r(t.mode.modeBits,4,d),r(t.numChars,t.mode.numCharCountBits(u),d),t.getData())) d.push(e);
                s(d.length == c);
                let p = 8 * t.getNumDataCodewords(u,i);
                s(d.length <= p),r(0,Math.min(4,p - d.length),d),r(0,(8 - d.length % 8) % 8,d),s(d.length % 8 == 0);
                for (let e = 236; d.length < p; e ^= 253) r(e,8,d);
                let f = [];
                for (; 8 * f.length < d.length;) f.push(0);
                return d.forEach((e,t) => f[t >>> 3] |= e << 7 - (7 & t)),new t(u,i,f,l)
            }
            getModule(e,t) {
                return 0 <= e && e < this.size && 0 <= t && t < this.size && this.modules[t][e]
            }
            getModules() {
                return this.modules
            }
            drawFunctionPatterns() {
                for (let e = 0; e < this.size; e++) this.setFunctionModule(6,e,e % 2 == 0),this.setFunctionModule(e,6,e % 2 == 0);
                this.drawFinderPattern(3,3),this.drawFinderPattern(this.size - 4,3),this.drawFinderPattern(3,this.size - 4);
                let e = this.getAlignmentPatternPositions(),
                    t = e.length;
                for (let r = 0; r < t; r++)
                    for (let i = 0; i < t; i++)(0!= r || 0!= i) && (0!= r || i!= t - 1) && (r!= t - 1 || 0!= i) && this.drawAlignmentPattern(e[r],e[i]);
                this.drawFormatBits(0),this.drawVersion()
            }
            drawFormatBits(e) {
                let t = this.errorCorrectionLevel.formatBits << 3 | e,
                    r = t;
                for (let e = 0; e < 10; e++) r = r << 1 ^ (r >>> 9) * 1335;
                let n = (t << 10 | r) ^ 21522;
                s(n >>> 15 == 0);
                for (let e = 0; e <= 5; e++) this.setFunctionModule(8,e,i(n,e));
                this.setFunctionModule(8,7,i(n,6)),this.setFunctionModule(8,8,i(n,7)),this.setFunctionModule(7,8,i(n,8));
                for (let e = 9; e < 15; e++) this.setFunctionModule(14 - e,8,i(n,e));
                for (let e = 0; e < 8; e++) this.setFunctionModule(this.size - 1 - e,8,i(n,e));
                for (let e = 8; e < 15; e++) this.setFunctionModule(8,this.size - 15 + e,i(n,e));
                this.setFunctionModule(8,this.size - 8,!0)
            }
            drawVersion() {
                if (this.version < 7) return;
                let e = this.version;
                for (let t = 0; t < 12; t++) e = e << 1 ^ (e >>> 11) * 7973;
                let t = this.version << 12 | e;
                s(t >>> 18 == 0);
                for (let e = 0; e < 18; e++) {
                    let r = i(t,e),
                        s = this.size - 11 + e % 3,
                        n = Math.floor(e / 3);
                    this.setFunctionModule(s,n,r),this.setFunctionModule(n,s,r)
                }
            }
            drawFinderPattern(e,t) {
                for (let r = -4; r <= 4; r++)
                    for (let i = -4; i <= 4; i++) {
                        let s = Math.max(Math.abs(i),Math.abs(r)),
                            n = e + i,
                            a = t + r;
                        0 <= n && n < this.size && 0 <= a && a < this.size && this.setFunctionModule(n,a,2!= s && 4!= s)
                    }
            }
            drawAlignmentPattern(e,t) {
                for (let r = -2; r <= 2; r++)
                    for (let i = -2; i <= 2; i++) this.setFunctionModule(e + i,t + r,1!= Math.max(Math.abs(i),Math.abs(r)))
            }
            setFunctionModule(e,t,r) {
                this.modules[t][e] = r,this.isFunction[t][e] =!0
            }
            addEccAndInterleave(e) {
                let r = this.version,
                    i = this.errorCorrectionLevel;
                if (e.length!= t.getNumDataCodewords(r,i)) throw RangeError("Invalid argument");
                let n = t.NUM_ERROR_CORRECTION_BLOCKS[i.ordinal][r],
                    a = t.ECC_CODEWORDS_PER_BLOCK[i.ordinal][r],
                    o = Math.floor(t.getNumRawDataModules(r) / 8),
                    l = n - o % n,
                    h = Math.floor(o / n),
                    u = [],
                    c = t.reedSolomonComputeDivisor(a);
                for (let r = 0,i = 0; r < n; r++) {
                    let s = e.slice(i,i + h - a + (r < l ? 0 : 1));
                    i += s.length;
                    let n = t.reedSolomonComputeRemainder(s,c);
                    r < l && s.push(0),u.push(s.concat(n))
                }
                let d = [];
                for (let e = 0; e < u[0].length; e++) u.forEach((t,r) => {
                    (e!= h - a || r >= l) && d.push(t[e])
                });
                return s(d.length == o),d
            }
            drawCodewords(e) {
                if (e.length!= Math.floor(t.getNumRawDataModules(this.version) / 8)) throw RangeError("Invalid argument");
                let r = 0;
                for (let t = this.size - 1; t >= 1; t -= 2) {
                    6 == t && (t = 5);
                    for (let s = 0; s < this.size; s++)
                        for (let n = 0; n < 2; n++) {
                            let a = t - n,
                                o = (t + 1 & 2) == 0 ? this.size - 1 - s : s;
                           !this.isFunction[o][a] && r < 8 * e.length && (this.modules[o][a] = i(e[r >>> 3],7 - (7 & r)),r++)
                        }
                }
                s(r == 8 * e.length)
            }
            applyMask(e) {
                if (e < 0 || e > 7) throw RangeError("Mask value out of range");
                for (let t = 0; t < this.size; t++)
                    for (let r = 0; r < this.size; r++) {
                        let i;
                        switch (e) {
                            case 0:
                                i = (r + t) % 2 == 0;
                                break;
                            case 1:
                                i = t % 2 == 0;
                                break;
                            case 2:
                                i = r % 3 == 0;
                                break;
                            case 3:
                                i = (r + t) % 3 == 0;
                                break;
                            case 4:
                                i = (Math.floor(r / 3) + Math.floor(t / 2)) % 2 == 0;
                                break;
                            case 5:
                                i = r * t % 2 + r * t % 3 == 0;
                                break;
                            case 6:
                                i = (r * t % 2 + r * t % 3) % 2 == 0;
                                break;
                            case 7:
                                i = ((r + t) % 2 + r * t % 3) % 2 == 0;
                                break;
                            default:
                                throw Error("Unreachable")
                        }!this.isFunction[t][r] && i && (this.modules[t][r] =!this.modules[t][r])
                    }
            }
            getPenaltyScore() {
                let e = 0;
                for (let r = 0; r < this.size; r++) {
                    let i =!1,
                        s = 0,
                        n = [0,0,0,0,0,0,0];
                    for (let a = 0; a < this.size; a++) this.modules[r][a] == i ? 5 == ++s ? e += t.PENALTY_N1 : s > 5 && e++ : (this.finderPenaltyAddHistory(s,n),i || (e += this.finderPenaltyCountPatterns(n) * t.PENALTY_N3),i = this.modules[r][a],s = 1);
                    e += this.finderPenaltyTerminateAndCount(i,s,n) * t.PENALTY_N3
                }
                for (let r = 0; r < this.size; r++) {
                    let i =!1,
                        s = 0,
                        n = [0,0,0,0,0,0,0];
                    for (let a = 0; a < this.size; a++) this.modules[a][r] == i ? 5 == ++s ? e += t.PENALTY_N1 : s > 5 && e++ : (this.finderPenaltyAddHistory(s,n),i || (e += this.finderPenaltyCountPatterns(n) * t.PENALTY_N3),i = this.modules[a][r],s = 1);
                    e += this.finderPenaltyTerminateAndCount(i,s,n) * t.PENALTY_N3
                }
                for (let r = 0; r < this.size - 1; r++)
                    for (let i = 0; i < this.size - 1; i++) {
                        let s = this.modules[r][i];
                        s == this.modules[r][i + 1] && s == this.modules[r + 1][i] && s == this.modules[r + 1][i + 1] && (e += t.PENALTY_N2)
                    }
                let r = 0;
                for (let e of this.modules) r = e.reduce((e,t) => e + +!!t,r);
                let i = this.size * this.size,
                    n = Math.ceil(Math.abs(20 * r - 10 * i) / i) - 1;
                return s(0 <= n && n <= 9),s(0 <= (e += n * t.PENALTY_N4) && e <= 2568888),e
            }
            getAlignmentPatternPositions() {
                if (1 == this.version) return []; {
                    let e = Math.floor(this.version / 7) + 2,
                        t = 32 == this.version ? 26 : 2 * Math.ceil((4 * this.version + 4) / (2 * e - 2)),
                        r = [6];
                    for (let i = this.size - 7; r.length < e; i -= t) r.splice(1,0,i);
                    return r
                }
            }
            static getNumRawDataModules(e) {
                if (e < t.MIN_VERSION || e > t.MAX_VERSION) throw RangeError("Version number out of range");
                let r = (16 * e + 128) * e + 64;
                if (e >= 2) {
                    let t = Math.floor(e / 7) + 2;
                    r -= (25 * t - 10) * t - 55,e >= 7 && (r -= 36)
                }
                return s(208 <= r && r <= 29648),r
            }
            static getNumDataCodewords(e,r) {
                return Math.floor(t.getNumRawDataModules(e) / 8) - t.ECC_CODEWORDS_PER_BLOCK[r.ordinal][e] * t.NUM_ERROR_CORRECTION_BLOCKS[r.ordinal][e]
            }
            static reedSolomonComputeDivisor(e) {
                if (e < 1 || e > 255) throw RangeError("Degree out of range");
                let r = [];
                for (let t = 0; t < e - 1; t++) r.push(0);
                r.push(1);
                let i = 1;
                for (let s = 0; s < e; s++) {
                    for (let e = 0; e < r.length; e++) r[e] = t.reedSolomonMultiply(r[e],i),e + 1 < r.length && (r[e] ^= r[e + 1]);
                    i = t.reedSolomonMultiply(i,2)
                }
                return r
            }
            static reedSolomonComputeRemainder(e,r) {
                let i = r.map(e => 0);
                for (let s of e) {
                    let e = s ^ i.shift();
                    i.push(0),r.forEach((r,s) => i[s] ^= t.reedSolomonMultiply(r,e))
                }
                return i
            }
            static reedSolomonMultiply(e,t) {
                if (e >>> 8!= 0 || t >>> 8!= 0) throw RangeError("Byte out of range");
                let r = 0;
                for (let i = 7; i >= 0; i--) r = r << 1 ^ (r >>> 7) * 285 ^ (t >>> i & 1) * e;
                return s(r >>> 8 == 0),r
            }
            finderPenaltyCountPatterns(e) {
                let t = e[1];
                s(t <= 3 * this.size);
                let r = t > 0 && e[2] == t && e[3] == 3 * t && e[4] == t && e[5] == t;
                return (r && e[0] >= 4 * t && e[6] >= t ? 1 : 0) + (r && e[6] >= 4 * t && e[0] >= t ? 1 : 0)
            }
            finderPenaltyTerminateAndCount(e,t,r) {
                return e && (this.finderPenaltyAddHistory(t,r),t = 0),t += this.size,this.finderPenaltyAddHistory(t,r),this.finderPenaltyCountPatterns(r)
            }
            finderPenaltyAddHistory(e,t) {
                0 == t[0] && (e += this.size),t.pop(),t.unshift(e)
            }
        };

        function r(e,t,r) {
            if (t < 0 || t > 31 || e >>> t!= 0) throw RangeError("Value out of range");
            for (let i = t - 1; i >= 0; i--) r.push(e >>> i & 1)
        }

        function i(e,t) {
            return (e >>> t & 1)!= 0
        }

        function s(e) {
            if (!e) throw Error("Assertion error")
        }
        t.MIN_VERSION = 1,t.MAX_VERSION = 40,t.PENALTY_N1 = 3,t.PENALTY_N2 = 3,t.PENALTY_N3 = 40,t.PENALTY_N4 = 10,t.ECC_CODEWORDS_PER_BLOCK = [
            [-1,7,10,15,20,26,18,20,24,30,18,20,24,26,30,22,24,28,30,28,28,28,28,30,30,26,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],
            [-1,10,16,26,18,24,16,18,22,22,26,30,22,22,24,24,28,28,26,26,26,26,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28],
            [-1,13,22,18,26,18,24,18,22,20,24,28,26,24,20,30,24,28,28,26,30,28,30,30,30,30,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],
            [-1,17,28,22,16,22,28,26,26,24,28,24,28,22,24,24,30,28,28,26,28,30,24,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30]
        ],t.NUM_ERROR_CORRECTION_BLOCKS = [
            [-1,1,1,1,1,1,2,2,2,2,4,4,4,4,4,6,6,6,6,7,8,8,9,9,10,12,12,12,13,14,15,16,17,18,19,19,20,21,22,24,25],
            [-1,1,1,1,2,2,4,4,4,5,5,5,8,9,9,10,10,11,13,14,16,17,17,18,20,21,23,25,26,28,29,31,33,35,37,38,40,43,45,47,49],
            [-1,1,1,2,2,4,4,6,6,8,8,8,10,12,16,12,17,16,18,21,20,23,23,25,27,29,34,34,35,38,40,43,45,48,51,53,56,59,62,65,68],
            [-1,1,1,2,4,4,4,5,6,8,8,11,11,16,16,18,16,19,21,25,25,25,34,30,32,35,37,40,42,45,48,51,54,57,60,63,66,70,74,77,81]
        ],e.QrCode = t;
        let n = class e {
            constructor(e,t,r) {
                if (this.mode = e,this.numChars = t,this.bitData = r,t < 0) throw RangeError("Invalid argument");
                this.bitData = r.slice()
            }
            static makeBytes(t) {
                let i = [];
                for (let e of t) r(e,8,i);
                return new e(e.Mode.BYTE,t.length,i)
            }
            static makeNumeric(t) {
                if (!e.isNumeric(t)) throw RangeError("String contains non-numeric characters");
                let i = [];
                for (let e = 0; e < t.length;) {
                    let s = Math.min(t.length - e,3);
                    r(parseInt(t.substring(e,e + s),10),3 * s + 1,i),e += s
                }
                return new e(e.Mode.NUMERIC,t.length,i)
            }
            static makeAlphanumeric(t) {
                let i;
                if (!e.isAlphanumeric(t)) throw RangeError("String contains unencodable characters in alphanumeric mode");
                let s = [];
                for (i = 0; i + 2 <= t.length; i += 2) {
                    let n = 45 * e.ALPHANUMERIC_CHARSET.indexOf(t.charAt(i));
                    r(n += e.ALPHANUMERIC_CHARSET.indexOf(t.charAt(i + 1)),11,s)
                }
                return i < t.length && r(e.ALPHANUMERIC_CHARSET.indexOf(t.charAt(i)),6,s),new e(e.Mode.ALPHANUMERIC,t.length,s)
            }
            static makeSegments(t) {
                return "" == t ? [] : e.isNumeric(t) ? [e.makeNumeric(t)] : e.isAlphanumeric(t) ? [e.makeAlphanumeric(t)] : [e.makeBytes(e.toUtf8ByteArray(t))]
            }
            static makeEci(t) {
                let i = [];
                if (t < 0) throw RangeError("ECI assignment value out of range");
                if (t < 128) r(t,8,i);
                else if (t < 16384) r(2,2,i),r(t,14,i);
                else if (t < 1e6) r(6,3,i),r(t,21,i);
                else throw RangeError("ECI assignment value out of range");
                return new e(e.Mode.ECI,0,i)
            }
            static isNumeric(t) {
                return e.NUMERIC_REGEX.test(t)
            }
            static isAlphanumeric(t) {
                return e.ALPHANUMERIC_REGEX.test(t)
            }
            getData() {
                return this.bitData.slice()
            }
            static getTotalBits(e,t) {
                let r = 0;
                for (let i of e) {
                    let e = i.mode.numCharCountBits(t);
                    if (i.numChars >= 1 << e) return 1 / 0;
                    r += 4 + e + i.bitData.length
                }
                return r
            }
            static toUtf8ByteArray(e) {
                e = encodeURI(e);
                let t = [];
                for (let r = 0; r < e.length; r++) "%"!= e.charAt(r) ? t.push(e.charCodeAt(r)) : (t.push(parseInt(e.substring(r + 1,r + 3),16)),r += 2);
                return t
            }
        };
        n.NUMERIC_REGEX = /^[0-9]*$/,n.ALPHANUMERIC_REGEX = /^[A-Z0-9 $%*+.\/:-]*$/,n.ALPHANUMERIC_CHARSET = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:";
        let a = n;
        e.QrSegment = n
    })(b || (b = {})),c = (u = b || (b = {})).QrCode || (u.QrCode = {}),(a = class {
        constructor(e,t) {
            this.ordinal = e,this.formatBits = t
        }
    }).LOW = new a(0,1),a.MEDIUM = new a(1,0),a.QUARTILE = new a(2,3),a.HIGH = new a(3,2),c.Ecc = a,p = (d = b || (b = {})).QrSegment || (d.QrSegment = {}),(o = class {
        constructor(e,t) {
            this.modeBits = e,this.numBitsCharCount = t
        }
        numCharCountBits(e) {
            return this.numBitsCharCount[Math.floor((e + 7) / 17)]
        }
    }).NUMERIC = new o(1,[10,12,14]),o.ALPHANUMERIC = new o(2,[9,11,13]),o.BYTE = new o(4,[8,16,16]),o.KANJI = new o(8,[8,10,12]),o.ECI = new o(7,[0,0,0]),p.Mode = o;
    var aw = b,
        ab = {
            L: aw.QrCode.Ecc.LOW,
            M: aw.QrCode.Ecc.MEDIUM,
            Q: aw.QrCode.Ecc.QUARTILE,
            H: aw.QrCode.Ecc.HIGH
        },
        ax = "#FFFFFF",
        ak = "#000000";

    function aS(e,t = 0) {
        let r = [];
        return e.forEach(function(e,i) {
            let s = null;
            e.forEach(function(n,a) {
                if (!n && null!== s) {
                    r.push(`M${s+t} ${i+t}h${a-s}v1H${s+t}z`),s = null;
                    return
                }
                if (a === e.length - 1) {
                    if (!n) return;
                    null === s ? r.push(`M${a+t},${i+t} h1v1H${a+t}z`) : r.push(`M${s+t},${i+t} h${a+1-s}v1H${s+t}z`);
                    return
                }
                n && null === s && (s = a)
            })
        }),r.join("")
    }

    function a_(e,t) {
        return e.slice().map((e,r) => r < t.y || r >= t.y + t.h ? e : e.map((e,r) => (r < t.x || r >= t.x + t.w) && e))
    }

    function aE({
        value: e,
        level: t,
        minVersion: r,
        includeMargin: i,
        marginSize: s,
        imageSettings: n,
        size: a,
        boostLevel: o
    }) {
        let l = R.default.useMemo(() => {
                let i = (Array.isArray(e) ? e : [e]).reduce((e,t) => (e.push(...aw.QrSegment.makeSegments(t)),e),[]);
                return aw.QrCode.encodeSegments(i,ab[t],r,void 0,void 0,o)
            },[e,t,r,o]),
            {
                cells: h,
                margin: u,
                numCells: c,
                calculatedImageSettings: d
            } = R.default.useMemo(() => {
                let e = l.getModules(),
                    t = null!= s ? Math.max(Math.floor(s),0) : 4 *!!i,
                    r = e.length + 2 * t,
                    o = function(e,t,r,i) {
                        if (null == i) return null;
                        let s = e.length + 2 * r,
                            n = Math.floor(.1 * t),
                            a = s / t,
                            o = (i.width || n) * a,
                            l = (i.height || n) * a,
                            h = null == i.x ? e.length / 2 - o / 2 : i.x * a,
                            u = null == i.y ? e.length / 2 - l / 2 : i.y * a,
                            c = null == i.opacity ? 1 : i.opacity,
                            d = null;
                        if (i.excavate) {
                            let e = Math.floor(h),
                                t = Math.floor(u),
                                r = Math.ceil(o + h - e),
                                i = Math.ceil(l + u - t);
                            d = {
                                x: e,
                                y: t,
                                w: r,
                                h: i
                            }
                        }
                        return {
                            x: h,
                            y: u,
                            h: l,
                            w: o,
                            excavation: d,
                            opacity: c,
                            crossOrigin: i.crossOrigin
                        }
                    }(e,a,t,n);
                return {
                    cells: e,
                    margin: t,
                    numCells: r,
                    calculatedImageSettings: o
                }
            },[l,a,n,i,s]);
        return {
            qrcode: l,
            margin: u,
            cells: h,
            numCells: c,
            calculatedImageSettings: d
        }
    }
    var aT = function() {
        try {
            new Path2D().addPath(new Path2D)
        } catch (e) {
            return!1
        }
        return!0
    }();
    R.default.forwardRef(function(e,t) {
        let {
            value: r,
            size: i = 128,
            level: s = "L",
            bgColor: n = ax,
            fgColor: a = ak,
            includeMargin: o =!1,
            minVersion: l = 1,
            boostLevel: h,
            marginSize: u,
            imageSettings: c
        } = e,d = av(e,["value","size","level","bgColor","fgColor","includeMargin","minVersion","boostLevel","marginSize","imageSettings"]),{
            style: p
        } = d,f = av(d,["style"]),m = null == c ? void 0 : c.src,g = R.default.useRef(null),y = R.default.useRef(null),v = R.default.useCallback(e => {
            g.current = e,"function" == typeof t ? t(e) : t && (t.current = e)
        },[t]),[w,b] = R.default.useState(!1),{
            margin: x,
            cells: k,
            numCells: S,
            calculatedImageSettings: _
        } = aE({
            value: r,
            level: s,
            minVersion: l,
            boostLevel: h,
            includeMargin: o,
            marginSize: u,
            imageSettings: c,
            size: i
        });
        R.default.useEffect(() => {
            if (null!= g.current) {
                let e = g.current,
                    t = e.getContext("2d");
                if (!t) return;
                let r = k,
                    s = y.current,
                    o = null!= _ && null!== s && s.complete && 0!== s.naturalHeight && 0!== s.naturalWidth;
                o && null!= _.excavation && (r = a_(k,_.excavation));
                let l = window.devicePixelRatio || 1;
                e.height = e.width = i * l;
                let h = i / S * l;
                t.scale(h,h),t.fillStyle = n,t.fillRect(0,0,S,S),t.fillStyle = a,aT ? t.fill(new Path2D(aS(r,x))) : k.forEach(function(e,r) {
                    e.forEach(function(e,i) {
                        e && t.fillRect(i + x,r + x,1,1)
                    })
                }),_ && (t.globalAlpha = _.opacity),o && t.drawImage(s,_.x + x,_.y + x,_.w,_.h)
            }
        }),R.default.useEffect(() => {
            b(!1)
        },[m]);
        let E = ay({
                height: i,
                width: i
            },p),
            T = null;
        return null!= m && (T = R.default.createElement("img",{
            src: m,
            key: m,
            style: {
                display: "none"
            },
            onLoad: () => {
                b(!0)
            },
            ref: y,
            crossOrigin: null == _ ? void 0 : _.crossOrigin
        })),R.default.createElement(R.default.Fragment,null,R.default.createElement("canvas",ay({
            style: E,
            height: i,
            width: i,
            ref: v,
            role: "img"
        },f)),T)
    }).displayName = "QRCodeCanvas";
    var aA = R.default.forwardRef(function(e,t) {
        let {
            value: r,
            size: i = 128,
            level: s = "L",
            bgColor: n = ax,
            fgColor: a = ak,
            includeMargin: o =!1,
            minVersion: l = 1,
            boostLevel: h,
            title: u,
            marginSize: c,
            imageSettings: d
        } = e,p = av(e,["value","size","level","bgColor","fgColor","includeMargin","minVersion","boostLevel","title","marginSize","imageSettings"]),{
            margin: f,
            cells: m,
            numCells: g,
            calculatedImageSettings: y
        } = aE({
            value: r,
            level: s,
            minVersion: l,
            boostLevel: h,
            includeMargin: o,
            marginSize: c,
            imageSettings: d,
            size: i
        }),v = m,w = null;
        null!= d && null!= y && (null!= y.excavation && (v = a_(m,y.excavation)),w = R.default.createElement("image",{
            href: d.src,
            height: y.h,
            width: y.w,
            x: y.x + f,
            y: y.y + f,
            preserveAspectRatio: "none",
            opacity: y.opacity,
            crossOrigin: y.crossOrigin
        }));
        let b = aS(v,f);
        return R.default.createElement("svg",ay({
            height: i,
            width: i,
            viewBox: `0 0 ${g} ${g}`,
            ref: t,
            role: "img"
        },p),!!u && R.default.createElement("title",null,u),R.default.createElement("path",{
            fill: n,
            d: `M0,0 h${g}v${g}H0z`,
            shapeRendering: "crispEdges"
        }),R.default.createElement("path",{
            fill: a,
            d: b,
            shapeRendering: "crispEdges"
        }),w)
    });

    function aR({
        num: e,
        tag: t,
        date: r,
        year: i,
        venue: s,
        place: n,
        mapsUrl: a,
        calDate: o,
        delay: l = 0
    }) {
        return (0,A.jsx)(nQ.div,{
            initial: {
                opacity: 0,
                y: 30
            },
            whileInView: {
                opacity: 1,
                y: 0
            },
            viewport: {
                once:!0
            },
            transition: {
                duration: .8,
                delay: l
            },
            children: (0,A.jsxs)(nQ.div,{
                whileHover: {
                    y: -6
                },
                transition: {
                    type: "spring",
                    stiffness: 300
                },
                className: "relative bg-white rounded-[1.2rem] border border-[#e0c486]/55 overflow-hidden flex flex-col items-center text-center",
                style: {
                    padding: "clamp(1.6rem,4vw,2.6rem) clamp(1.4rem,4vw,2.4rem)",
                    boxShadow: "0 18px 44px rgba(154,116,48,.12)"
                },
                children: [(0,A.jsx)("span",{
                    className: "absolute top-0 left-0 w-[4.5rem] h-[4.5rem] border-t-2 border-l-2 border-[#c9a050] rounded-tl-[1.2rem]"
                }),(0,A.jsx)("span",{
                    className: "absolute bottom-0 right-0 w-[4.5rem] h-[4.5rem] border-b-2 border-r-2 border-[#c9a050] rounded-br-[1.2rem]"
                }),(0,A.jsx)("div",{
                    className: "w-12 h-12 rounded-full border-[1.5px] border-[#c9a050] flex items-center justify-center mb-4 font-serif text-[#9a7430] text-xl",
                    children: e
                }),(0,A.jsx)("div",{
                    className: "text-[#9a7430] uppercase tracking-[0.26em] text-[0.72rem] font-semibold mb-4",
                    children: t
                }),(0,A.jsxs)("div",{
                    className: "font-serif text-foreground",
                    style: {
                        fontSize: "clamp(2rem,7vw,2.9rem)",
                        lineHeight: 1
                    },
                    children: [r,(0,A.jsx)("span",{
                        className: "block text-[#9a7430] tracking-[0.3em] mt-2",
                        style: {
                            fontSize: "0.42em"
                        },
                        children: i
                    })]
                }),(0,A.jsx)("div",{
                    className: "w-16 h-px bg-gradient-to-r from-transparent via-[#c9a050] to-transparent my-5"
                }),(0,A.jsx)("div",{
                    className: "font-serif text-foreground mb-1",
                    style: {
                        fontSize: "clamp(1.3rem,3.6vw,1.7rem)"
                    },
                    children: s
                }),(0,A.jsxs)("div",{
                    className: "text-muted-foreground flex items-center gap-1 justify-center mb-6",
                    style: {
                        fontSize: "clamp(1rem,2.6vw,1.15rem)"
                    },
                    children: [(0,A.jsx)(ah,{
                        className: "w-4 h-4 flex-shrink-0 text-[#c9a050]"
                    }),n]
                }),(0,A.jsx)("div",{
                    className: "mb-2 p-3 border border-[#e0c486]/70 rounded-xl bg-white",
                    children: (0,A.jsx)(aA,{
                        value: a,
                        size: 120,
                        bgColor: "#ffffff",
                        fgColor: "#16213e",
                        level: "M"
                    })
                }),(0,A.jsx)("p",{
                    className: "text-muted-foreground text-xs tracking-wide mb-5",
                    children: "Manzilni QR orqali oching"
                }),(0,A.jsxs)("div",{
                    className: "flex flex-col gap-3 w-full mt-auto",
                    children: [(0,A.jsxs)(nQ.button,{
                        onClick: () => window.open(a,"_blank"),
                        whileHover: {
                            scale: 1.02
                        },
                        whileTap: {
                            scale: .98
                        },
                        className: "relative w-full py-4 rounded-[.8rem] overflow-hidden border-none cursor-pointer",
                        children: [(0,A.jsx)("span",{
                            className: "absolute inset-0 bg-gradient-to-r from-[#9a7430] via-[#c9a050] to-[#9a7430]"
                        }),(0,A.jsx)(nQ.span,{
                            className: "absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent",
                            animate: {
                                x: ["-200%","200%"]
                            },
                            transition: {
                                duration: 3,
                                repeat: 1 / 0,
                                repeatDelay: 0
                            }
                        }),(0,A.jsxs)("span",{
                            className: "relative z-10 flex items-center justify-center gap-2 text-white font-semibold text-base",
                            children: [(0,A.jsx)(ac,{
                                className: "w-4 h-4"
                            }),"Google xaritada ko'rish"]
                        })]
                    }),(0,A.jsxs)(nQ.button,{
                        onClick: () => {
                            let e = `Lazizbek & Mahbuba — ${s}`,
                                t = new Blob([`BEGIN:VCALENDAR\r
VERSION:2.0\r
PRODID:-//Wedding//UZ\r
BEGIN:VEVENT\r
UID:${o}-wedding@toy\r
DTSTART;VALUE=DATE:${o}\r
DTEND;VALUE=DATE:${String(Number(o)+1)}\r
SUMMARY:${e}\r
LOCATION:${s},${n}\r
DESCRIPTION:Nikoh marosimiga taklif\r
END:VEVENT\r
END:VCALENDAR`],{
                                    type: "text/calendar;charset=utf-8"
                                }),
                                r = URL.createObjectURL(t),
                                i = document.createElement("a");
                            i.href = r,i.download = `toy-${o}.ics`,document.body.appendChild(i),i.click(),document.body.removeChild(i),setTimeout(() => URL.revokeObjectURL(r),1e3)
                        },
                        whileHover: {
                            backgroundColor: "#c9a050",
                            color: "#fff"
                        },
                        className: "w-full py-[.85rem] rounded-[.8rem] border-[1.5px] border-[#c9a050] bg-transparent text-[#9a7430] font-semibold text-base flex items-center justify-center gap-2 cursor-pointer transition-colors duration-200",
                        children: [(0,A.jsx)(au,{
                            className: "w-4 h-4"
                        }),"Kalendarga qo'shish"]
                    })]
                })]
            })
        })
    }

    function aP() {
        return (0,A.jsxs)("section",{
            className: "relative py-16 sm:py-20 md:py-28 lg:py-36 overflow-hidden",
            children: [(0,A.jsx)("div",{
                className: "absolute inset-0 bg-gradient-to-b from-white via-[var(--cream)] to-white"
            }),(0,A.jsx)("div",{
                className: "absolute inset-0 opacity-[0.04]",
                style: {
                    backgroundImage: "radial-gradient(circle at 2px 2px,#c9a050 1px,transparent 0)",
                    backgroundSize: "32px 32px"
                }
            }),(0,A.jsx)(nQ.div,{
                className: "absolute -top-20 -right-20 w-64 h-64 border border-[#c9a050]/10 rounded-full hidden sm:block",
                animate: {
                    rotate: 360
                },
                transition: {
                    duration: 60,
                    repeat: 1 / 0,
                    ease: "linear"
                }
            }),(0,A.jsx)(nQ.div,{
                className: "absolute -bottom-20 -left-20 w-80 h-80 border border-[#c9a050]/10 rounded-full hidden sm:block",
                animate: {
                    rotate: -360
                },
                transition: {
                    duration: 80,
                    repeat: 1 / 0,
                    ease: "linear"
                }
            }),(0,A.jsxs)("div",{
                className: "relative z-10 mx-auto px-4 sm:px-6 max-w-5xl",
                children: [(0,A.jsxs)(nQ.div,{
                    initial: {
                        opacity: 0,
                        y: 30
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    viewport: {
                        once:!0,
                        margin: "-50px"
                    },
                    transition: {
                        duration: .8
                    },
                    className: "text-center mb-12 md:mb-16",
                    children: [(0,A.jsx)(nQ.div,{
                        initial: {
                            scale: 0
                        },
                        whileInView: {
                            scale: 1
                        },
                        viewport: {
                            once:!0
                        },
                        transition: {
                            duration: .5
                        },
                        className: "mb-5",
                        children: (0,A.jsx)(ai,{
                            className: "w-8 h-8 mx-auto text-[#c9a050]",
                            fill: "currentColor"
                        })
                    }),(0,A.jsx)("h2",{
                        className: "font-serif text-3xl sm:text-4xl md:text-5xl text-foreground mb-4",
                        children: "To'y Marosimlari"
                    }),(0,A.jsx)("p",{
                        className: "text-muted-foreground text-base sm:text-lg mb-4",
                        children: "To'yimiz ikki shaharda — ikki marosimda nishonlanadi"
                    }),(0,A.jsx)("div",{
                        className: "w-24 h-px bg-gradient-to-r from-transparent via-[#c9a050] to-transparent mx-auto"
                    })]
                }),(0,A.jsxs)("div",{
                    className: "grid md:grid-cols-2 gap-6 md:gap-8",
                    children: [(0,A.jsx)(aR,{
                        num: "I",
                        tag: "Birinchi marosim",
                        date: "06.06",
                        year: "2026-yil",
                        venue: "Oqsaroy to'yxonasi",
                        place: "Navoiy viloyati,Navoiy shahri",
                        mapsUrl: "https://yandex.com/maps?whatshere%5Bpoint%5D=64.307305%2C39.887659&whatshere%5Bzoom%5D=15.354682&ll=64.30730499991027%2C39.88765899896387&z=15.354682&si=00b9prnvzp4y29w1rcyux93aw4",
                        calDate: "20260628",
                        delay: .2
                    }),(0,A.jsx)(aR,{
                        num: "II",
                        tag: "Ikkinchi marosim",
                        date: "13.06",
                        year: "2026-yil",
                        venue: "Sher to'yxonasi",
                        place: "Navoiy viloyati,Xatirchi tumani",
                        mapsUrl: "https://maps.app.goo.gl/FKytkkYQmZC8C26X9",
                        calDate: "20260701",
                        delay: .4
                    })]
                })]
            })]
        })
    }
    aA.displayName = "QRCodeSVG";
    let aj = ar("message-circle",[
        ["path",{
            d: "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",
            key: "1sd12s"
        }]
    ]);
    class aC extends Error {
        constructor(e,t = "FunctionsError",r) {
            super(e),this.name = t,this.context = r
        }
        toJSON() {
            return {
                name: this.name,
                message: this.message,
                context: this.context
            }
        }
    }
    class aO extends aC {
        constructor(e) {
            super("Failed to send a request to the Edge Function","FunctionsFetchError",e)
        }
    }
    class aN extends aC {
        constructor(e) {
            super("Relay Error invoking the Edge Function","FunctionsRelayError",e)
        }
    }
    class aI extends aC {
        constructor(e) {
            super("Edge Function returned a non-2xx status code","FunctionsHttpError",e)
        }
    }(f = x || (x = {})).Any = "any",f.ApNortheast1 = "ap-northeast-1",f.ApNortheast2 = "ap-northeast-2",f.ApSouth1 = "ap-south-1",f.ApSoutheast1 = "ap-southeast-1",f.ApSoutheast2 = "ap-southeast-2",f.CaCentral1 = "ca-central-1",f.EuCentral1 = "eu-central-1",f.EuWest1 = "eu-west-1",f.EuWest2 = "eu-west-2",f.EuWest3 = "eu-west-3",f.SaEast1 = "sa-east-1",f.UsEast1 = "us-east-1",f.UsWest1 = "us-west-1",f.UsWest2 = "us-west-2";

    function a$(e,t) {
        var r = {};
        for (var i in e) Object.prototype.hasOwnProperty.call(e,i) && 0 > t.indexOf(i) && (r[i] = e[i]);
        if (null!= e && "function" == typeof Object.getOwnPropertySymbols)
            for (var s = 0,i = Object.getOwnPropertySymbols(e); s < i.length; s++) 0 > t.indexOf(i[s]) && Object.prototype.propertyIsEnumerable.call(e,i[s]) && (r[i[s]] = e[i[s]]);
        return r
    }
    "function" == typeof SuppressedError && SuppressedError;
    class aM {
        constructor(e,{
            headers: t = {},
            customFetch: r,
            region: i = x.Any
        } = {}) {
            this.url = e,this.headers = t,this.region = i,this.fetch = (e => e ? (...t) => e(...t) : (...e) => fetch(...e))(r)
        }
        setAuth(e) {
            this.headers.Authorization = `Bearer ${e}`
        }
        invoke(e) {
            var t,r,i,s;
            return t = this,r = arguments,i = void 0,s = function*(e,t = {}) {
                var r;
                let i,s;
                try {
                    let n,{
                            headers: a,
                            method: o,
                            body: l,
                            signal: h,
                            timeout: u
                        } = t,
                        c = {},
                        {
                            region: d
                        } = t;
                    d || (d = this.region);
                    let p = new URL(`${this.url}/${e}`);
                    d && "any"!== d && (c["x-region"] = d,p.searchParams.set("forceFunctionRegion",d)),l && (a &&!Object.prototype.hasOwnProperty.call(a,"Content-Type") ||!a) ? "u" > typeof Blob && l instanceof Blob || l instanceof ArrayBuffer ? (c["Content-Type"] = "application/octet-stream",n = l) : "string" == typeof l ? (c["Content-Type"] = "text/plain",n = l) : "u" > typeof FormData && l instanceof FormData ? n = l : (c["Content-Type"] = "application/json",n = JSON.stringify(l)) : n =!l || "string" == typeof l || "u" > typeof Blob && l instanceof Blob || l instanceof ArrayBuffer || "u" > typeof FormData && l instanceof FormData ? l : JSON.stringify(l);
                    let f = h;
                    u && (s = new AbortController,i = setTimeout(() => s.abort(),u),h ? (f = s.signal,h.addEventListener("abort",() => s.abort())) : f = s.signal);
                    let m = yield this.fetch(p.toString(),{
                        method: o || "POST",
                        headers: Object.assign(Object.assign(Object.assign({},c),this.headers),a),
                        body: n,
                        signal: f
                    }).catch(e => {
                        throw new aO(e)
                    }),g = m.headers.get("x-relay-error");
                    if (g && "true" === g) throw new aN(m);
                    if (!m.ok) throw new aI(m);
                    let y = (null!= (r = m.headers.get("Content-Type")) ? r : "text/plain").split(";")[0].trim();
                    return {
                        data: "application/json" === y ? yield m.json(): "application/octet-stream" === y || "application/pdf" === y ? yield m.blob(): "text/event-stream" === y ? m : "multipart/form-data" === y ? yield m.formData(): yield m.text(),error: null,response: m
                    }
                } catch (e) {
                    return {
                        data: null,
                        error: e,
                        response: e instanceof aI || e instanceof aN ? e.context : void 0
                    }
                } finally {
                    i && clearTimeout(i)
                }
            },new(i || (i = Promise))(function(e,n) {
                function a(e) {
                    try {
                        l(s.next(e))
                    } catch (e) {
                        n(e)
                    }
                }

                function o(e) {
                    try {
                        l(s.throw(e))
                    } catch (e) {
                        n(e)
                    }
                }

                function l(t) {
                    var r;
                    t.done ? e(t.value) : ((r = t.value) instanceof i ? r : new i(function(e) {
                        e(r)
                    })).then(a,o)
                }
                l((s = s.apply(t,r || [])).next())
            })
        }
    }
    let aL = e => Math.min(1e3 * 2 ** e,3e4),
        aD = [520,503],
        aU = ["GET","HEAD","OPTIONS"];
    var aB = class extends Error {
        constructor(e) {
            super(e.message),this.name = "PostgrestError",this.details = e.details,this.hint = e.hint,this.code = e.code
        }
        toJSON() {
            return {
                name: this.name,
                message: this.message,
                details: this.details,
                hint: this.hint,
                code: this.code
            }
        }
    };

    function aV(e,t) {
        return new Promise(r => {
            if (null == t ? void 0 : t.aborted) return void r();
            let i = setTimeout(() => {
                null == t || t.removeEventListener("abort",s),r()
            },e);

            function s() {
                clearTimeout(i),r()
            }
            null == t || t.addEventListener("abort",s)
        })
    }
    var aF = class {
            constructor(e) {
                var t,r,i,s,n;
                this.shouldThrowOnError =!1,this.retryEnabled =!0,this.method = e.method,this.url = e.url,this.headers = new Headers(e.headers),this.schema = e.schema,this.body = e.body,this.shouldThrowOnError = null!= (t = e.shouldThrowOnError) && t,this.signal = e.signal,this.isMaybeSingle = null!= (r = e.isMaybeSingle) && r,this.shouldStripNulls = null!= (i = e.shouldStripNulls) && i,this.urlLengthLimit = null!= (s = e.urlLengthLimit) ? s : 8e3,this.retryEnabled = null == (n = e.retry) || n,e.fetch ? this.fetch = e.fetch : this.fetch = fetch
            }
            throwOnError() {
                return this.shouldThrowOnError =!0,this
            }
            stripNulls() {
                if ("text/csv" === this.headers.get("Accept")) throw Error("stripNulls() cannot be used with csv()");
                return this.shouldStripNulls =!0,this
            }
            setHeader(e,t) {
                return this.headers = new Headers(this.headers),this.headers.set(e,t),this
            }
            retry(e) {
                return this.retryEnabled = e,this
            }
            then(e,t) {
                var r = this;
                if (void 0 === this.schema || (["GET","HEAD"].includes(this.method) ? this.headers.set("Accept-Profile",this.schema) : this.headers.set("Content-Profile",this.schema)),"GET"!== this.method && "HEAD"!== this.method && this.headers.set("Content-Type","application/json"),this.shouldStripNulls) {
                    let e = this.headers.get("Accept");
                    "application/vnd.pgrst.object+json" === e ? this.headers.set("Accept","application/vnd.pgrst.object+json;nulls=stripped") : e && "application/json"!== e || this.headers.set("Accept","application/vnd.pgrst.array+json;nulls=stripped")
                }
                let i = this.fetch,
                    s = (async () => {
                        let e = 0;
                        for (;;) {
                            var t,s,n,a,o;
                            let l,h = new Headers(r.headers);
                            e > 0 && h.set("X-Retry-Count",String(e));
                            try {
                                l = await i(r.url.toString(),{
                                    method: r.method,
                                    headers: h,
                                    body: JSON.stringify(r.body,(e,t) => "bigint" == typeof t ? t.toString() : t),
                                    signal: r.signal
                                })
                            } catch (t) {
                                if ((null == t ? void 0 : t.name) === "AbortError" || (null == t ? void 0 : t.code) === "ABORT_ERR" ||!aU.includes(r.method)) throw t;
                                if (r.retryEnabled && e < 3) {
                                    let t = aL(e);
                                    e++,await aV(t,r.signal);
                                    continue
                                }
                                throw t
                            }
                            if (t = r.method,s = l.status,n = e,r.retryEnabled &&!(n >= 3) && aU.includes(t) && aD.includes(s) && 1) {
                                let t = null!= (a = null == (o = l.headers) ? void 0 : o.get("Retry-After")) ? a : null,
                                    i = null!== t ? 1e3 * Math.max(0,parseInt(t,10) || 0) : aL(e);
                                await l.text(),e++,await aV(i,r.signal);
                                continue
                            }
                            return await r.processResponse(l)
                        }
                    })();
                return this.shouldThrowOnError || (s = s.catch(e => {
                    var t,r,i,s,n,a;
                    let o = "",
                        l = "",
                        h = "",
                        u = null == e ? void 0 : e.cause;
                    if (u) {
                        let t = null!= (r = null == u ? void 0 : u.message) ? r : "",
                            a = null!= (i = null == u ? void 0 : u.code) ? i : "";
                        o = `${null!=(s=null==e?void 0:e.name)?s:"FetchError"}: ${null==e?void 0:e.message}

Caused by: ${null!=(n=null==u?void 0:u.name)?n:"Error"}: ${t}`,a && (o += ` (${a})`),(null == u ? void 0 : u.stack) && (o += `
${u.stack}`)
                    } else o = null!= (a = null == e ? void 0 : e.stack) ? a : "";
                    let c = this.url.toString().length;
                    return (null == e ? void 0 : e.name) === "AbortError" || (null == e ? void 0 : e.code) === "ABORT_ERR" ? (h = "",l = "Request was aborted (timeout or manual cancellation)",c > this.urlLengthLimit && (l += `.Note: Your request URL is ${c} characters,which may exceed server limits.If selecting many fields,consider using views.If filtering with large arrays (e.g.,.in('id',[many IDs])),consider using an RPC function to pass values server-side.`)) : ((null == u ? void 0 : u.name) === "HeadersOverflowError" || (null == u ? void 0 : u.code) === "UND_ERR_HEADERS_OVERFLOW") && (h = "",l = "HTTP headers exceeded server limits (typically 16KB)",c > this.urlLengthLimit && (l += `.Your request URL is ${c} characters.If selecting many fields,consider using views.If filtering with large arrays (e.g.,.in('id',[200+ IDs])),consider using an RPC function instead.`)),{
                        success:!1,
                        error: {
                            message: `${null!=(t=null==e?void 0:e.name)?t:"FetchError"}: ${null==e?void 0:e.message}`,
                            details: o,
                            hint: l,
                            code: h
                        },
                        data: null,
                        count: null,
                        status: 0,
                        statusText: ""
                    }
                })),s.then(e,t)
            }
            async processResponse(e) {
                var t,r,i;
                let s = null,
                    n = null,
                    a = null,
                    o = e.status,
                    l = e.statusText;
                if (e.ok) {
                    if ("HEAD"!== this.method) {
                        let t = await e.text();
                        "" === t || (n = "text/csv" === this.headers.get("Accept") || this.headers.get("Accept") && (null == (i = this.headers.get("Accept")) ? void 0 : i.includes("application/vnd.pgrst.plan+text")) ? t : JSON.parse(t))
                    }
                    let h = null == (t = this.headers.get("Prefer")) ? void 0 : t.match(/count=(exact|planned|estimated)/),
                        u = null == (r = e.headers.get("content-range")) ? void 0 : r.split("/");
                    h && u && u.length > 1 && (a = parseInt(u[1])),this.isMaybeSingle && Array.isArray(n) && (n.length > 1 ? (s = {
                        code: "PGRST116",
                        details: `Results contain ${n.length} rows,application/vnd.pgrst.object+json requires 1 row`,
                        hint: null,
                        message: "JSON object requested,multiple (or no) rows returned"
                    },n = null,a = null,o = 406,l = "Not Acceptable") : n = 1 === n.length ? n[0] : null)
                } else {
                    let t = await e.text();
                    try {
                        s = JSON.parse(t),Array.isArray(s) && 404 === e.status && (n = [],s = null,o = 200,l = "OK")
                    } catch (r) {
                        404 === e.status && "" === t ? (o = 204,l = "No Content") : s = {
                            message: t
                        }
                    }
                    if (s && this.shouldThrowOnError) throw new aB(s)
                }
                return {
                    success: null === s,
                    error: s,
                    data: n,
                    count: a,
                    status: o,
                    statusText: l
                }
            }
            returns() {
                return this
            }
            overrideTypes() {
                return this
            }
        },
        az = class extends aF {
            select(e) {
                let t =!1,
                    r = (null!= e ? e : "*").split("").map(e => /\s/.test(e) &&!t ? "" : ('"' === e && (t =!t),e)).join("");
                return this.url.searchParams.set("select",r),this.headers.append("Prefer","return=representation"),this
            }
            order(e,{
                ascending: t =!0,
                nullsFirst: r,
                foreignTable: i,
                referencedTable: s = i
            } = {}) {
                let n = s ? `${s}.order` : "order",
                    a = this.url.searchParams.get(n);
                return this.url.searchParams.set(n,`${a?`${a},`:""}${e}.${t?"asc":"desc"}${void 0===r?"":r?".nullsfirst":".nullslast"}`),this
            }
            limit(e,{
                foreignTable: t,
                referencedTable: r = t
            } = {}) {
                let i = void 0 === r ? "limit" : `${r}.limit`;
                return this.url.searchParams.set(i,`${e}`),this
            }
            range(e,t,{
                foreignTable: r,
                referencedTable: i = r
            } = {}) {
                let s = void 0 === i ? "offset" : `${i}.offset`,
                    n = void 0 === i ? "limit" : `${i}.limit`;
                return this.url.searchParams.set(s,`${e}`),this.url.searchParams.set(n,`${t-e+1}`),this
            }
            abortSignal(e) {
                return this.signal = e,this
            }
            single() {
                return this.headers.set("Accept","application/vnd.pgrst.object+json"),this
            }
            maybeSingle() {
                return this.isMaybeSingle =!0,this
            }
            csv() {
                return this.headers.set("Accept","text/csv"),this
            }
            geojson() {
                return this.headers.set("Accept","application/geo+json"),this
            }
            explain({
                analyze: e =!1,
                verbose: t =!1,
                settings: r =!1,
                buffers: i =!1,
                wal: s =!1,
                format: n = "text"
            } = {}) {
                var a;
                let o = [e ? "analyze" : null,t ? "verbose" : null,r ? "settings" : null,i ? "buffers" : null,s ? "wal" : null].filter(Boolean).join("|"),
                    l = null!= (a = this.headers.get("Accept")) ? a : "application/json";
                return this.headers.set("Accept",`application/vnd.pgrst.plan+${n}; for="${l}"; options=${o};`),this
            }
            rollback() {
                return this.headers.append("Prefer","tx=rollback"),this
            }
            returns() {
                return this
            }
            maxAffected(e) {
                return this.headers.append("Prefer","handling=strict"),this.headers.append("Prefer",`max-affected=${e}`),this
            }
        };
    let aq = RegExp("[,()]");
    var aH = class extends az {
            eq(e,t) {
                return this.url.searchParams.append(e,`eq.${t}`),this
            }
            neq(e,t) {
                return this.url.searchParams.append(e,`neq.${t}`),this
            }
            gt(e,t) {
                return this.url.searchParams.append(e,`gt.${t}`),this
            }
            gte(e,t) {
                return this.url.searchParams.append(e,`gte.${t}`),this
            }
            lt(e,t) {
                return this.url.searchParams.append(e,`lt.${t}`),this
            }
            lte(e,t) {
                return this.url.searchParams.append(e,`lte.${t}`),this
            }
            like(e,t) {
                return this.url.searchParams.append(e,`like.${t}`),this
            }
            likeAllOf(e,t) {
                return this.url.searchParams.append(e,`like(all).{${t.join(",")}}`),this
            }
            likeAnyOf(e,t) {
                return this.url.searchParams.append(e,`like(any).{${t.join(",")}}`),this
            }
            ilike(e,t) {
                return this.url.searchParams.append(e,`ilike.${t}`),this
            }
            ilikeAllOf(e,t) {
                return this.url.searchParams.append(e,`ilike(all).{${t.join(",")}}`),this
            }
            ilikeAnyOf(e,t) {
                return this.url.searchParams.append(e,`ilike(any).{${t.join(",")}}`),this
            }
            regexMatch(e,t) {
                return this.url.searchParams.append(e,`match.${t}`),this
            }
            regexIMatch(e,t) {
                return this.url.searchParams.append(e,`imatch.${t}`),this
            }
            is(e,t) {
                return this.url.searchParams.append(e,`is.${t}`),this
            }
            isDistinct(e,t) {
                return this.url.searchParams.append(e,`isdistinct.${t}`),this
            } in (e,t) {
                let r = Array.from(new Set(t)).map(e => "string" == typeof e && aq.test(e) ? `"${e}"` : `${e}`).join(",");
                return this.url.searchParams.append(e,`in.(${r})`),this
            }
            notIn(e,t) {
                let r = Array.from(new Set(t)).map(e => "string" == typeof e && aq.test(e) ? `"${e}"` : `${e}`).join(",");
                return this.url.searchParams.append(e,`not.in.(${r})`),this
            }
            contains(e,t) {
                return "string" == typeof t ? this.url.searchParams.append(e,`cs.${t}`) : Array.isArray(t) ? this.url.searchParams.append(e,`cs.{${t.join(",")}}`) : this.url.searchParams.append(e,`cs.${JSON.stringify(t)}`),this
            }
            containedBy(e,t) {
                return "string" == typeof t ? this.url.searchParams.append(e,`cd.${t}`) : Array.isArray(t) ? this.url.searchParams.append(e,`cd.{${t.join(",")}}`) : this.url.searchParams.append(e,`cd.${JSON.stringify(t)}`),this
            }
            rangeGt(e,t) {
                return this.url.searchParams.append(e,`sr.${t}`),this
            }
            rangeGte(e,t) {
                return this.url.searchParams.append(e,`nxl.${t}`),this
            }
            rangeLt(e,t) {
                return this.url.searchParams.append(e,`sl.${t}`),this
            }
            rangeLte(e,t) {
                return this.url.searchParams.append(e,`nxr.${t}`),this
            }
            rangeAdjacent(e,t) {
                return this.url.searchParams.append(e,`adj.${t}`),this
            }
            overlaps(e,t) {
                return "string" == typeof t ? this.url.searchParams.append(e,`ov.${t}`) : this.url.searchParams.append(e,`ov.{${t.join(",")}}`),this
            }
            textSearch(e,t,{
                config: r,
                type: i
            } = {}) {
                let s = "";
                "plain" === i ? s = "pl" : "phrase" === i ? s = "ph" : "websearch" === i && (s = "w");
                let n = void 0 === r ? "" : `(${r})`;
                return this.url.searchParams.append(e,`${s}fts${n}.${t}`),this
            }
            match(e) {
                return Object.entries(e).filter(([e,t]) => void 0!== t).forEach(([e,t]) => {
                    this.url.searchParams.append(e,`eq.${t}`)
                }),this
            }
            not(e,t,r) {
                return this.url.searchParams.append(e,`not.${t}.${r}`),this
            }
            or(e,{
                foreignTable: t,
                referencedTable: r = t
            } = {}) {
                let i = r ? `${r}.or` : "or";
                return this.url.searchParams.append(i,`(${e})`),this
            }
            filter(e,t,r) {
                return this.url.searchParams.append(e,`${t}.${r}`),this
            }
        },
        aW = class {
            constructor(e,{
                headers: t = {},
                schema: r,
                fetch: i,
                urlLengthLimit: s = 8e3,
                retry: n
            }) {
                this.url = e,this.headers = new Headers(t),this.schema = r,this.fetch = i,this.urlLengthLimit = s,this.retry = n
            }
            cloneRequestState() {
                return {
                    url: new URL(this.url.toString()),
                    headers: new Headers(this.headers)
                }
            }
            select(e,t) {
                let {
                    head: r =!1,
                    count: i
                } = null!= t ? t : {},s =!1,n = (null!= e ? e : "*").split("").map(e => /\s/.test(e) &&!s ? "" : ('"' === e && (s =!s),e)).join(""),{
                    url: a,
                    headers: o
                } = this.cloneRequestState();
                return a.searchParams.set("select",n),i && o.append("Prefer",`count=${i}`),new aH({
                    method: r ? "HEAD" : "GET",
                    url: a,
                    headers: o,
                    schema: this.schema,
                    fetch: this.fetch,
                    urlLengthLimit: this.urlLengthLimit,
                    retry: this.retry
                })
            }
            insert(e,{
                count: t,
                defaultToNull: r =!0
            } = {}) {
                var i;
                let {
                    url: s,
                    headers: n
                } = this.cloneRequestState();
                if (t && n.append("Prefer",`count=${t}`),r || n.append("Prefer","missing=default"),Array.isArray(e)) {
                    let t = e.reduce((e,t) => e.concat(Object.keys(t)),[]);
                    if (t.length > 0) {
                        let e = [...new Set(t)].map(e => `"${e}"`);
                        s.searchParams.set("columns",e.join(","))
                    }
                }
                return new aH({
                    method: "POST",
                    url: s,
                    headers: n,
                    schema: this.schema,
                    body: e,
                    fetch: null!= (i = this.fetch) ? i : fetch,
                    urlLengthLimit: this.urlLengthLimit,
                    retry: this.retry
                })
            }
            upsert(e,{
                onConflict: t,
                ignoreDuplicates: r =!1,
                count: i,
                defaultToNull: s =!0
            } = {}) {
                var n;
                let {
                    url: a,
                    headers: o
                } = this.cloneRequestState();
                if (o.append("Prefer",`resolution=${r?"ignore":"merge"}-duplicates`),void 0!== t && a.searchParams.set("on_conflict",t),i && o.append("Prefer",`count=${i}`),s || o.append("Prefer","missing=default"),Array.isArray(e)) {
                    let t = e.reduce((e,t) => e.concat(Object.keys(t)),[]);
                    if (t.length > 0) {
                        let e = [...new Set(t)].map(e => `"${e}"`);
                        a.searchParams.set("columns",e.join(","))
                    }
                }
                return new aH({
                    method: "POST",
                    url: a,
                    headers: o,
                    schema: this.schema,
                    body: e,
                    fetch: null!= (n = this.fetch) ? n : fetch,
                    urlLengthLimit: this.urlLengthLimit,
                    retry: this.retry
                })
            }
            update(e,{
                count: t
            } = {}) {
                var r;
                let {
                    url: i,
                    headers: s
                } = this.cloneRequestState();
                return t && s.append("Prefer",`count=${t}`),new aH({
                    method: "PATCH",
                    url: i,
                    headers: s,
                    schema: this.schema,
                    body: e,
                    fetch: null!= (r = this.fetch) ? r : fetch,
                    urlLengthLimit: this.urlLengthLimit,
                    retry: this.retry
                })
            }
            delete({
                count: e
            } = {}) {
                var t;
                let {
                    url: r,
                    headers: i
                } = this.cloneRequestState();
                return e && i.append("Prefer",`count=${e}`),new aH({
                    method: "DELETE",
                    url: r,
                    headers: i,
                    schema: this.schema,
                    fetch: null!= (t = this.fetch) ? t : fetch,
                    urlLengthLimit: this.urlLengthLimit,
                    retry: this.retry
                })
            }
        };

    function aK(e) {
        return (aK = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e!== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function aG(e,t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            t && (i = i.filter(function(t) {
                return Object.getOwnPropertyDescriptor(e,t).enumerable
            })),r.push.apply(r,i)
        }
        return r
    }

    function aJ(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = null!= arguments[t] ? arguments[t] : {};
            t % 2 ? aG(Object(r),!0).forEach(function(t) {
               ! function(e,t,r) {
                    var i;
                    (i = function(e,t) {
                        if ("object"!= aK(e) ||!e) return e;
                        var r = e[Symbol.toPrimitive];
                        if (void 0!== r) {
                            var i = r.call(e,t || "default");
                            if ("object"!= aK(i)) return i;
                            throw TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === t ? String : Number)(e)
                    }(t,"string"),(t = "symbol" == aK(i) ? i : i + "") in e) ? Object.defineProperty(e,t,{
                        value: r,
                        enumerable:!0,
                        configurable:!0,
                        writable:!0
                    }): e[t] = r
                }(e,t,r[t])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)) : aG(Object(r)).forEach(function(t) {
                Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))
            })
        }
        return e
    }
    var aY = class e {
        constructor(e,{
            headers: t = {},
            schema: r,
            fetch: i,
            timeout: s,
            urlLengthLimit: n = 8e3,
            retry: a
        } = {}) {
            this.url = e,this.headers = new Headers(t),this.schemaName = r,this.urlLengthLimit = n;
            const o = null!= i ? i : globalThis.fetch;
            void 0!== s && s > 0 ? this.fetch = (e,t) => {
                let r = new AbortController,
                    i = setTimeout(() => r.abort(),s),
                    n = null == t ? void 0 : t.signal;
                if (n) {
                    if (n.aborted) return clearTimeout(i),o(e,t);
                    let s = () => {
                        clearTimeout(i),r.abort()
                    };
                    return n.addEventListener("abort",s,{
                        once:!0
                    }),o(e,aJ(aJ({},t),{},{
                        signal: r.signal
                    })).finally(() => {
                        clearTimeout(i),n.removeEventListener("abort",s)
                    })
                }
                return o(e,aJ(aJ({},t),{},{
                    signal: r.signal
                })).finally(() => clearTimeout(i))
            } : this.fetch = o,this.retry = a
        }
        from(e) {
            if (!e || "string"!= typeof e || "" === e.trim()) throw Error("Invalid relation name: relation must be a non-empty string.");
            return new aW(new URL(`${this.url}/${e}`),{
                headers: new Headers(this.headers),
                schema: this.schemaName,
                fetch: this.fetch,
                urlLengthLimit: this.urlLengthLimit,
                retry: this.retry
            })
        }
        schema(t) {
            return new e(this.url,{
                headers: this.headers,
                schema: t,
                fetch: this.fetch,
                urlLengthLimit: this.urlLengthLimit,
                retry: this.retry
            })
        }
        rpc(e,t = {},{
            head: r =!1,
            get: i =!1,
            count: s
        } = {}) {
            var n;
            let a,o,l = new URL(`${this.url}/rpc/${e}`),
                h = e => null!== e && "object" == typeof e && (!Array.isArray(e) || e.some(h)),
                u = r && Object.values(t).some(h);
            u ? (a = "POST",o = t) : r || i ? (a = r ? "HEAD" : "GET",Object.entries(t).filter(([e,t]) => void 0!== t).map(([e,t]) => [e,Array.isArray(t) ? `{${t.join(",")}}` : `${t}`]).forEach(([e,t]) => {
                l.searchParams.append(e,t)
            })) : (a = "POST",o = t);
            let c = new Headers(this.headers);
            return u ? c.set("Prefer",s ? `count=${s},return=minimal` : "return=minimal") : s && c.set("Prefer",`count=${s}`),new aH({
                method: a,
                url: l,
                headers: c,
                schema: this.schemaName,
                body: o,
                fetch: null!= (n = this.fetch) ? n : fetch,
                urlLengthLimit: this.urlLengthLimit,
                retry: this.retry
            })
        }
    };
    let aX = class {
            static detectEnvironment() {
                var t;
                if ("u" > typeof WebSocket) return {
                    type: "native",
                    wsConstructor: WebSocket
                };
                let r = globalThis;
                if ("u" > typeof globalThis && void 0!== r.WebSocket) return {
                    type: "native",
                    wsConstructor: r.WebSocket
                };
                let i = e.g;
                if (i && void 0!== i.WebSocket) return {
                    type: "native",
                    wsConstructor: i.WebSocket
                };
                if ("u" > typeof globalThis && void 0!== r.WebSocketPair && void 0 === globalThis.WebSocket) return {
                    type: "cloudflare",
                    error: "Cloudflare Workers detected.WebSocket clients are not supported in Cloudflare Workers.",
                    workaround: "Use Cloudflare Workers WebSocket API for server-side WebSocket handling,or deploy to a different runtime."
                };
                if ("u" > typeof globalThis && r.EdgeRuntime || "u" > typeof navigator && (null == (t = navigator.userAgent) ? void 0 : t.includes("Vercel-Edge"))) return {
                    type: "unsupported",
                    error: "Edge runtime detected (Vercel Edge/Netlify Edge).WebSockets are not supported in edge functions.",
                    workaround: "Use serverless functions or a different deployment target for WebSocket functionality."
                };
                let s = globalThis.process;
                if (s) {
                    let e = s.versions;
                    if (e && e.node) {
                        let t = parseInt(e.node.replace(/^v/,"").split(".")[0]);
                        return t >= 22 ? void 0!== globalThis.WebSocket ? {
                            type: "native",
                            wsConstructor: globalThis.WebSocket
                        } : {
                            type: "unsupported",
                            error: `Node.js ${t} detected but native WebSocket not found.`,
                            workaround: "Provide a WebSocket implementation via the transport option."
                        } : {
                            type: "unsupported",
                            error: `Node.js ${t} detected without native WebSocket support.`,
                            workaround: 'For Node.js < 22,install "ws" package and provide it via the transport option:\nimport ws from "ws"\nnew RealtimeClient(url,{ transport: ws })'
                        }
                    }
                }
                return {
                    type: "unsupported",
                    error: "Unknown JavaScript runtime without WebSocket support.",
                    workaround: "Ensure you're running in a supported environment (browser,Node.js,Deno) or provide a custom WebSocket implementation."
                }
            }
            static getWebSocketConstructor() {
                let e = this.detectEnvironment();
                if (e.wsConstructor) return e.wsConstructor;
                let t = e.error || "WebSocket not supported in this environment.";
                throw e.workaround && (t += `

Suggested solution: ${e.workaround}`),Error(t)
            }
            static isWebSocketSupported() {
                try {
                    let e = this.detectEnvironment();
                    return "native" === e.type || "ws" === e.type
                } catch (e) {
                    return!1
                }
            }
        },
        aQ = "2.0.0",
        aZ = "errored",
        a0 = "joined",
        a1 = {
            close: "phx_close",
            error: "phx_error",
            join: "phx_join",
            reply: "phx_reply",
            leave: "phx_leave",
            access_token: "access_token"
        };
    class a2 {
        constructor(e) {
            this.HEADER_LENGTH = 1,this.USER_BROADCAST_PUSH_META_LENGTH = 6,this.KINDS = {
                userBroadcastPush: 3,
                userBroadcast: 4
            },this.BINARY_ENCODING = 0,this.JSON_ENCODING = 1,this.BROADCAST_EVENT = "broadcast",this.allowedMetadataKeys = [],this.allowedMetadataKeys = null!= e ? e : []
        }
        encode(e,t) {
            return e.event!== this.BROADCAST_EVENT || e.payload instanceof ArrayBuffer || "string"!= typeof e.payload.event ? t(JSON.stringify([e.join_ref,e.ref,e.topic,e.event,e.payload])) : t(this._binaryEncodeUserBroadcastPush(e))
        }
        _binaryEncodeUserBroadcastPush(e) {
            var t;
            return this._isArrayBuffer(null == (t = e.payload) ? void 0 : t.payload) ? this._encodeBinaryUserBroadcastPush(e) : this._encodeJsonUserBroadcastPush(e)
        }
        _encodeBinaryUserBroadcastPush(e) {
            var t,r;
            let i = null!= (r = null == (t = e.payload) ? void 0 : t.payload) ? r : new ArrayBuffer(0);
            return this._encodeUserBroadcastPush(e,this.BINARY_ENCODING,i)
        }
        _encodeJsonUserBroadcastPush(e) {
            var t,r;
            let i = null!= (r = null == (t = e.payload) ? void 0 : t.payload) ? r : {},
                s = new TextEncoder().encode(JSON.stringify(i)).buffer;
            return this._encodeUserBroadcastPush(e,this.JSON_ENCODING,s)
        }
        _encodeUserBroadcastPush(e,t,r) {
            let i = e.topic,
                s = null!= (p = e.ref) ? p : "",
                n = null!= (f = e.join_ref) ? f : "",
                a = e.payload.event,
                o = this.allowedMetadataKeys ? this._pick(e.payload,this.allowedMetadataKeys) : {},
                l = 0 === Object.keys(o).length ? "" : JSON.stringify(o);
            if (n.length > 255) throw Error(`joinRef length ${n.length} exceeds maximum of 255`);
            if (s.length > 255) throw Error(`ref length ${s.length} exceeds maximum of 255`);
            if (i.length > 255) throw Error(`topic length ${i.length} exceeds maximum of 255`);
            if (a.length > 255) throw Error(`userEvent length ${a.length} exceeds maximum of 255`);
            if (l.length > 255) throw Error(`metadata length ${l.length} exceeds maximum of 255`);
            let h = this.USER_BROADCAST_PUSH_META_LENGTH + n.length + s.length + i.length + a.length + l.length,
                u = new ArrayBuffer(this.HEADER_LENGTH + h),
                c = new DataView(u),
                d = 0;
            c.setUint8(d++,this.KINDS.userBroadcastPush),c.setUint8(d++,n.length),c.setUint8(d++,s.length),c.setUint8(d++,i.length),c.setUint8(d++,a.length),c.setUint8(d++,l.length),c.setUint8(d++,t),Array.from(n,e => c.setUint8(d++,e.charCodeAt(0))),Array.from(s,e => c.setUint8(d++,e.charCodeAt(0))),Array.from(i,e => c.setUint8(d++,e.charCodeAt(0))),Array.from(a,e => c.setUint8(d++,e.charCodeAt(0))),Array.from(l,e => c.setUint8(d++,e.charCodeAt(0)));
            var p,f,m = new Uint8Array(u.byteLength + r.byteLength);
            return m.set(new Uint8Array(u),0),m.set(new Uint8Array(r),u.byteLength),m.buffer
        }
        decode(e,t) {
            if (this._isArrayBuffer(e)) return t(this._binaryDecode(e));
            if ("string" == typeof e) {
                let [r,i,s,n,a] = JSON.parse(e);
                return t({
                    join_ref: r,
                    ref: i,
                    topic: s,
                    event: n,
                    payload: a
                })
            }
            return t({})
        }
        _binaryDecode(e) {
            let t = new DataView(e),
                r = t.getUint8(0),
                i = new TextDecoder;
            if (r === this.KINDS.userBroadcast) return this._decodeUserBroadcast(e,t,i)
        }
        _decodeUserBroadcast(e,t,r) {
            let i = t.getUint8(1),
                s = t.getUint8(2),
                n = t.getUint8(3),
                a = t.getUint8(4),
                o = this.HEADER_LENGTH + 4,
                l = r.decode(e.slice(o,o + i));
            o += i;
            let h = r.decode(e.slice(o,o + s));
            o += s;
            let u = r.decode(e.slice(o,o + n));
            o += n;
            let c = e.slice(o,e.byteLength),
                d = a === this.JSON_ENCODING ? JSON.parse(r.decode(c)) : c,
                p = {
                    type: this.BROADCAST_EVENT,
                    event: h,
                    payload: d
                };
            return n > 0 && (p.meta = JSON.parse(u)),{
                join_ref: null,
                ref: null,
                topic: l,
                event: this.BROADCAST_EVENT,
                payload: p
            }
        }
        _isArrayBuffer(e) {
            var t;
            return e instanceof ArrayBuffer || (null == (t = null == e ? void 0 : e.constructor) ? void 0 : t.name) === "ArrayBuffer"
        }
        _pick(e,t) {
            return e && "object" == typeof e ? Object.fromEntries(Object.entries(e).filter(([e]) => t.includes(e))) : {}
        }
    }(m = k || (k = {})).abstime = "abstime",m.bool = "bool",m.date = "date",m.daterange = "daterange",m.float4 = "float4",m.float8 = "float8",m.int2 = "int2",m.int4 = "int4",m.int4range = "int4range",m.int8 = "int8",m.int8range = "int8range",m.json = "json",m.jsonb = "jsonb",m.money = "money",m.numeric = "numeric",m.oid = "oid",m.reltime = "reltime",m.text = "text",m.time = "time",m.timestamp = "timestamp",m.timestamptz = "timestamptz",m.timetz = "timetz",m.tsrange = "tsrange",m.tstzrange = "tstzrange";
    let a5 = (e,t,r = {}) => {
            var i;
            let s = null!= (i = r.skipTypes) ? i : [];
            return t ? Object.keys(t).reduce((r,i) => (r[i] = a3(i,e,t,s),r),{}) : {}
        },
        a3 = (e,t,r,i) => {
            let s = t.find(t => t.name === e),
                n = null == s ? void 0 : s.type,
                a = r[e];
            return n &&!i.includes(n) ? a8(n,a) : a4(a)
        },
        a8 = (e,t) => {
            if ("_" === e.charAt(0)) return oe(t,e.slice(1,e.length));
            switch (e) {
                case k.bool:
                    return a6(t);
                case k.float4:
                case k.float8:
                case k.int2:
                case k.int4:
                case k.int8:
                case k.numeric:
                case k.oid:
                    return a9(t);
                case k.json:
                case k.jsonb:
                    return a7(t);
                case k.timestamp:
                    return ot(t);
                case k.abstime:
                case k.date:
                case k.daterange:
                case k.int4range:
                case k.int8range:
                case k.money:
                case k.reltime:
                case k.text:
                case k.time:
                case k.timestamptz:
                case k.timetz:
                case k.tsrange:
                case k.tstzrange:
                default:
                    return a4(t)
            }
        },
        a4 = e => e,
        a6 = e => {
            switch (e) {
                case "t":
                    return!0;
                case "f":
                    return!1;
                default:
                    return e
            }
        },
        a9 = e => {
            if ("string" == typeof e) {
                let t = parseFloat(e);
                if (!Number.isNaN(t)) return t
            }
            return e
        },
        a7 = e => {
            if ("string" == typeof e) try {
                return JSON.parse(e)
            } catch (e) {}
            return e
        },
        oe = (e,t) => {
            if ("string"!= typeof e) return e;
            let r = e.length - 1,
                i = e[r];
            if ("{" === e[0] && "}" === i) {
                let i,s = e.slice(1,r);
                try {
                    i = JSON.parse("[" + s + "]")
                } catch (e) {
                    i = s ? s.split(",") : []
                }
                return i.map(e => a8(t,e))
            }
            return e
        },
        ot = e => "string" == typeof e ? e.replace(" ","T") : e,
        or = e => {
            let t = new URL(e);
            return t.protocol = t.protocol.replace(/^ws/i,"http"),t.pathname = t.pathname.replace(/\/+$/,"").replace(/\/socket\/websocket$/i,"").replace(/\/socket$/i,"").replace(/\/websocket$/i,""),"" === t.pathname || "/" === t.pathname ? t.pathname = "/api/broadcast" : t.pathname = t.pathname + "/api/broadcast",t.href
        };
    var oi = e => "function" == typeof e ? e : function() {
            return e
        },
        os = "u" > typeof window ? window : null,
        on = ("u" > typeof self ? self : null) || os || globalThis,
        oa = "closed",
        oo = "errored",
        ol = "joined",
        oh = "joining",
        ou = "leaving",
        oc = "phx_close",
        od = "phx_error",
        op = "phx_reply",
        of = "phx_leave",
        om = "websocket",
        og = "base64url.bearer.phx.",
        oy = class {
            constructor(e,t,r,i) {
                this.channel = e,this.event = t,this.payload = r || function() {
                    return {}
                },this.receivedResp = null,this.timeout = i,this.timeoutTimer = null,this.recHooks = [],this.sent =!1,this.ref = void 0
            }
            resend(e) {
                this.timeout = e,this.reset(),this.send()
            }
            send() {
                this.hasReceived("timeout") || (this.startTimeout(),this.sent =!0,this.channel.socket.push({
                    topic: this.channel.topic,
                    event: this.event,
                    payload: this.payload(),
                    ref: this.ref,
                    join_ref: this.channel.joinRef()
                }))
            }
            receive(e,t) {
                return this.hasReceived(e) && t(this.receivedResp.response),this.recHooks.push({
                    status: e,
                    callback: t
                }),this
            }
            reset() {
                this.cancelRefEvent(),this.ref = null,this.refEvent = null,this.receivedResp = null,this.sent =!1
            }
            destroy() {
                this.cancelRefEvent(),this.cancelTimeout()
            }
            matchReceive({
                status: e,
                response: t,
                _ref: r
            }) {
                this.recHooks.filter(t => t.status === e).forEach(e => e.callback(t))
            }
            cancelRefEvent() {
                this.refEvent && this.channel.off(this.refEvent)
            }
            cancelTimeout() {
                clearTimeout(this.timeoutTimer),this.timeoutTimer = null
            }
            startTimeout() {
                this.timeoutTimer && this.cancelTimeout(),this.ref = this.channel.socket.makeRef(),this.refEvent = this.channel.replyEventName(this.ref),this.channel.on(this.refEvent,e => {
                    this.cancelRefEvent(),this.cancelTimeout(),this.receivedResp = e,this.matchReceive(e)
                }),this.timeoutTimer = setTimeout(() => {
                    this.trigger("timeout",{})
                },this.timeout)
            }
            hasReceived(e) {
                return this.receivedResp && this.receivedResp.status === e
            }
            trigger(e,t) {
                this.channel.trigger(this.refEvent,{
                    status: e,
                    response: t
                })
            }
        },
        ov = class {
            constructor(e,t) {
                this.callback = e,this.timerCalc = t,this.timer = void 0,this.tries = 0
            }
            reset() {
                this.tries = 0,clearTimeout(this.timer)
            }
            scheduleTimeout() {
                clearTimeout(this.timer),this.timer = setTimeout(() => {
                    this.tries = this.tries + 1,this.callback()
                },this.timerCalc(this.tries + 1))
            }
        },
        ow = class {
            constructor(e,t,r) {
                this.state = oa,this.topic = e,this.params = oi(t || {}),this.socket = r,this.bindings = [],this.bindingRef = 0,this.timeout = this.socket.timeout,this.joinedOnce =!1,this.joinPush = new oy(this,"phx_join",this.params,this.timeout),this.pushBuffer = [],this.stateChangeRefs = [],this.rejoinTimer = new ov(() => {
                    this.socket.isConnected() && this.rejoin()
                },this.socket.rejoinAfterMs),this.stateChangeRefs.push(this.socket.onError(() => this.rejoinTimer.reset())),this.stateChangeRefs.push(this.socket.onOpen(() => {
                    this.rejoinTimer.reset(),this.isErrored() && this.rejoin()
                })),this.joinPush.receive("ok",() => {
                    this.state = ol,this.rejoinTimer.reset(),this.pushBuffer.forEach(e => e.send()),this.pushBuffer = []
                }),this.joinPush.receive("error",e => {
                    this.state = oo,this.socket.hasLogger() && this.socket.log("channel",`error ${this.topic}`,e),this.socket.isConnected() && this.rejoinTimer.scheduleTimeout()
                }),this.onClose(() => {
                    this.rejoinTimer.reset(),this.socket.hasLogger() && this.socket.log("channel",`close ${this.topic}`),this.state = oa,this.socket.remove(this)
                }),this.onError(e => {
                    this.socket.hasLogger() && this.socket.log("channel",`error ${this.topic}`,e),this.isJoining() && this.joinPush.reset(),this.state = oo,this.socket.isConnected() && this.rejoinTimer.scheduleTimeout()
                }),this.joinPush.receive("timeout",() => {
                    this.socket.hasLogger() && this.socket.log("channel",`timeout ${this.topic}`,this.joinPush.timeout),new oy(this,of ,oi({}),this.timeout).send(),this.state = oo,this.joinPush.reset(),this.socket.isConnected() && this.rejoinTimer.scheduleTimeout()
                }),this.on(op,(e,t) => {
                    this.trigger(this.replyEventName(t),e)
                })
            }
            join(e = this.timeout) {
                if (!this.joinedOnce) return this.timeout = e,this.joinedOnce =!0,this.rejoin(),this.joinPush;
                throw Error("tried to join multiple times.'join' can only be called a single time per channel instance")
            }
            teardown() {
                this.pushBuffer.forEach(e => e.destroy()),this.pushBuffer = [],this.rejoinTimer.reset(),this.joinPush.destroy(),this.state = oa,this.bindings = []
            }
            onClose(e) {
                this.on(oc,e)
            }
            onError(e) {
                return this.on(od,t => e(t))
            }
            on(e,t) {
                let r = this.bindingRef++;
                return this.bindings.push({
                    event: e,
                    ref: r,
                    callback: t
                }),r
            }
            off(e,t) {
                this.bindings = this.bindings.filter(r => r.event!== e || void 0!== t && t!== r.ref)
            }
            canPush() {
                return this.socket.isConnected() && this.isJoined()
            }
            push(e,t,r = this.timeout) {
                if (t = t || {},!this.joinedOnce) throw Error(`tried to push '${e}' to '${this.topic}' before joining.Use channel.join() before pushing events`);
                let i = new oy(this,e,function() {
                    return t
                },r);
                return this.canPush() ? i.send() : (i.startTimeout(),this.pushBuffer.push(i)),i
            }
            leave(e = this.timeout) {
                this.rejoinTimer.reset(),this.joinPush.cancelTimeout(),this.state = ou;
                let t = () => {
                        this.socket.hasLogger() && this.socket.log("channel",`leave ${this.topic}`),this.trigger(oc,"leave")
                    },
                    r = new oy(this,of ,oi({}),e);
                return r.receive("ok",() => t()).receive("timeout",() => t()),r.send(),this.canPush() || r.trigger("ok",{}),r
            }
            onMessage(e,t,r) {
                return t
            }
            filterBindings(e,t,r) {
                return!0
            }
            isMember(e,t,r,i) {
                return this.topic === e && (!i || i === this.joinRef() || (this.socket.hasLogger() && this.socket.log("channel","dropping outdated message",{
                    topic: e,
                    event: t,
                    payload: r,
                    joinRef: i
                }),!1))
            }
            joinRef() {
                return this.joinPush.ref
            }
            rejoin(e = this.timeout) {
                this.isLeaving() || (this.socket.leaveOpenTopic(this.topic),this.state = oh,this.joinPush.resend(e))
            }
            trigger(e,t,r,i) {
                let s = this.onMessage(e,t,r,i);
                if (t &&!s) throw Error("channel onMessage callbacks must return the payload,modified or unmodified");
                let n = this.bindings.filter(i => i.event === e && this.filterBindings(i,t,r));
                for (let e = 0; e < n.length; e++) n[e].callback(s,r,i || this.joinRef())
            }
            replyEventName(e) {
                return `chan_reply_${e}`
            }
            isClosed() {
                return this.state === oa
            }
            isErrored() {
                return this.state === oo
            }
            isJoined() {
                return this.state === ol
            }
            isJoining() {
                return this.state === oh
            }
            isLeaving() {
                return this.state === ou
            }
        },
        ob = class {
            static request(e,t,r,i,s,n,a) {
                if (on.XDomainRequest) {
                    let r = new on.XDomainRequest;
                    return this.xdomainRequest(r,e,t,i,s,n,a)
                }
                if (on.XMLHttpRequest) {
                    let o = new on.XMLHttpRequest;
                    return this.xhrRequest(o,e,t,r,i,s,n,a)
                }
                if (on.fetch && on.AbortController) return this.fetchRequest(e,t,r,i,s,n,a);
                throw Error("No suitable XMLHttpRequest implementation found")
            }
            static fetchRequest(e,t,r,i,s,n,a) {
                let o = {
                        method: e,
                        headers: r,
                        body: i
                    },
                    l = null;
                return s && (l = new AbortController,setTimeout(() => l.abort(),s),o.signal = l.signal),on.fetch(t,o).then(e => e.text()).then(e => this.parseJSON(e)).then(e => a && a(e)).catch(e => {
                    "AbortError" === e.name && n ? n() : a && a(null)
                }),l
            }
            static xdomainRequest(e,t,r,i,s,n,a) {
                return e.timeout = s,e.open(t,r),e.onload = () => {
                    let t = this.parseJSON(e.responseText);
                    a && a(t)
                },n && (e.ontimeout = n),e.onprogress = () => {},e.send(i),e
            }
            static xhrRequest(e,t,r,i,s,n,a,o) {
                for (let [s,a] of (e.open(t,r,!0),e.timeout = n,Object.entries(i))) e.setRequestHeader(s,a);
                return e.onerror = () => o && o(null),e.onreadystatechange = () => {
                    4 === e.readyState && o && o(this.parseJSON(e.responseText))
                },a && (e.ontimeout = a),e.send(s),e
            }
            static parseJSON(e) {
                if (!e || "" === e) return null;
                try {
                    return JSON.parse(e)
                } catch {
                    return console && console.log("failed to parse JSON response",e),null
                }
            }
            static serialize(e,t) {
                let r = [];
                for (var i in e) {
                    if (!Object.prototype.hasOwnProperty.call(e,i)) continue;
                    let s = t ? `${t}[${i}]` : i,
                        n = e[i];
                    "object" == typeof n ? r.push(this.serialize(n,s)) : r.push(encodeURIComponent(s) + "=" + encodeURIComponent(n))
                }
                return r.join("&")
            }
            static appendParams(e,t) {
                if (0 === Object.keys(t).length) return e;
                let r = e.match(/\?/) ? "&" : "?";
                return `${e}${r}${this.serialize(t)}`
            }
        },
        ox = class {
            constructor(e,t) {
                t && 2 === t.length && t[1].startsWith(og) && (this.authToken = atob(t[1].slice(og.length))),this.endPoint = null,this.token = null,this.skipHeartbeat =!0,this.reqs = new Set,this.awaitingBatchAck =!1,this.currentBatch = null,this.currentBatchTimer = null,this.batchBuffer = [],this.onopen = function() {},this.onerror = function() {},this.onmessage = function() {},this.onclose = function() {},this.pollEndpoint = this.normalizeEndpoint(e),this.readyState = 0,setTimeout(() => this.poll(),0)
            }
            normalizeEndpoint(e) {
                return e.replace("ws://","http://").replace("wss://","https://").replace(RegExp("(.*)/" + om),"$1/longpoll")
            }
            endpointURL() {
                return ob.appendParams(this.pollEndpoint,{
                    token: this.token
                })
            }
            closeAndRetry(e,t,r) {
                this.close(e,t,r),this.readyState = 0
            }
            ontimeout() {
                this.onerror("timeout"),this.closeAndRetry(1005,"timeout",!1)
            }
            isActive() {
                return 1 === this.readyState || 0 === this.readyState
            }
            poll() {
                let e = {
                    Accept: "application/json"
                };
                this.authToken && (e["X-Phoenix-AuthToken"] = this.authToken),this.ajax("GET",e,null,() => this.ontimeout(),e => {
                    if (e) {
                        var {
                            status: t,
                            token: r,
                            messages: i
                        } = e;
                        if (410 === t && null!== this.token) {
                            this.onerror(410),this.closeAndRetry(3410,"session_gone",!1);
                            return
                        }
                        this.token = r
                    } else t = 0;
                    switch (t) {
                        case 200:
                            i.forEach(e => {
                                setTimeout(() => this.onmessage({
                                    data: e
                                }),0)
                            }),this.poll();
                            break;
                        case 204:
                            this.poll();
                            break;
                        case 410:
                            this.readyState = 1,this.onopen({}),this.poll();
                            break;
                        case 403:
                            this.onerror(403),this.close(1008,"forbidden",!1);
                            break;
                        case 0:
                        case 500:
                            this.onerror(500),this.closeAndRetry(1011,"internal server error",500);
                            break;
                        default:
                            throw Error(`unhandled poll status ${t}`)
                    }
                })
            }
            send(e) {
                "string"!= typeof e && (e = (e => {
                    let t = "",
                        r = new Uint8Array(e),
                        i = r.byteLength;
                    for (let e = 0; e < i; e++) t += String.fromCharCode(r[e]);
                    return btoa(t)
                })(e)),this.currentBatch ? this.currentBatch.push(e) : this.awaitingBatchAck ? this.batchBuffer.push(e) : (this.currentBatch = [e],this.currentBatchTimer = setTimeout(() => {
                    this.batchSend(this.currentBatch),this.currentBatch = null
                },0))
            }
            batchSend(e) {
                this.awaitingBatchAck =!0,this.ajax("POST",{
                    "Content-Type": "application/x-ndjson"
                },e.join("\n"),() => this.onerror("timeout"),e => {
                    this.awaitingBatchAck =!1,e && 200 === e.status ? this.batchBuffer.length > 0 && (this.batchSend(this.batchBuffer),this.batchBuffer = []) : (this.onerror(e && e.status),this.closeAndRetry(1011,"internal server error",!1))
                })
            }
            close(e,t,r) {
                for (let e of this.reqs) e.abort();
                this.readyState = 3;
                let i = Object.assign({
                    code: 1e3,
                    reason: void 0,
                    wasClean:!0
                },{
                    code: e,
                    reason: t,
                    wasClean: r
                });
                this.batchBuffer = [],clearTimeout(this.currentBatchTimer),this.currentBatchTimer = null,"u" > typeof CloseEvent ? this.onclose(new CloseEvent("close",i)) : this.onclose(i)
            }
            ajax(e,t,r,i,s) {
                let n,a = () => {
                    this.reqs.delete(n),i()
                };
                n = ob.request(e,this.endpointURL(),t,r,this.timeout,a,e => {
                    this.reqs.delete(n),this.isActive() && s(e)
                }),this.reqs.add(n)
            }
        },
        ok = class e {
            constructor(t,r = {}) {
                let i = r.events || {
                    state: "presence_state",
                    diff: "presence_diff"
                };
                this.state = {},this.pendingDiffs = [],this.channel = t,this.joinRef = null,this.caller = {
                    onJoin: function() {},
                    onLeave: function() {},
                    onSync: function() {}
                },this.channel.on(i.state,t => {
                    let {
                        onJoin: r,
                        onLeave: i,
                        onSync: s
                    } = this.caller;
                    this.joinRef = this.channel.joinRef(),this.state = e.syncState(this.state,t,r,i),this.pendingDiffs.forEach(t => {
                        this.state = e.syncDiff(this.state,t,r,i)
                    }),this.pendingDiffs = [],s()
                }),this.channel.on(i.diff,t => {
                    let {
                        onJoin: r,
                        onLeave: i,
                        onSync: s
                    } = this.caller;
                    this.inPendingSyncState() ? this.pendingDiffs.push(t) : (this.state = e.syncDiff(this.state,t,r,i),s())
                })
            }
            onJoin(e) {
                this.caller.onJoin = e
            }
            onLeave(e) {
                this.caller.onLeave = e
            }
            onSync(e) {
                this.caller.onSync = e
            }
            list(t) {
                return e.list(this.state,t)
            }
            inPendingSyncState() {
                return!this.joinRef || this.joinRef!== this.channel.joinRef()
            }
            static syncState(e,t,r,i) {
                let s = this.clone(e),
                    n = {},
                    a = {};
                return this.map(s,(e,r) => {
                    t[e] || (a[e] = r)
                }),this.map(t,(e,t) => {
                    let r = s[e];
                    if (r) {
                        let i = t.metas.map(e => e.phx_ref),
                            s = r.metas.map(e => e.phx_ref),
                            o = t.metas.filter(e => 0 > s.indexOf(e.phx_ref)),
                            l = r.metas.filter(e => 0 > i.indexOf(e.phx_ref));
                        o.length > 0 && (n[e] = t,n[e].metas = o),l.length > 0 && (a[e] = this.clone(r),a[e].metas = l)
                    } else n[e] = t
                }),this.syncDiff(s,{
                    joins: n,
                    leaves: a
                },r,i)
            }
            static syncDiff(e,t,r,i) {
                let {
                    joins: s,
                    leaves: n
                } = this.clone(t);
                return r || (r = function() {}),i || (i = function() {}),this.map(s,(t,i) => {
                    let s = e[t];
                    if (e[t] = this.clone(i),s) {
                        let r = e[t].metas.map(e => e.phx_ref),
                            i = s.metas.filter(e => 0 > r.indexOf(e.phx_ref));
                        e[t].metas.unshift(...i)
                    }
                    r(t,s,i)
                }),this.map(n,(t,r) => {
                    let s = e[t];
                    if (!s) return;
                    let n = r.metas.map(e => e.phx_ref);
                    s.metas = s.metas.filter(e => 0 > n.indexOf(e.phx_ref)),i(t,s,r),0 === s.metas.length && delete e[t]
                }),e
            }
            static list(e,t) {
                return t || (t = function(e,t) {
                    return t
                }),this.map(e,(e,r) => t(e,r))
            }
            static map(e,t) {
                return Object.getOwnPropertyNames(e).map(r => t(r,e[r]))
            }
            static clone(e) {
                return JSON.parse(JSON.stringify(e))
            }
        },
        oS = {
            HEADER_LENGTH: 1,
            META_LENGTH: 4,
            KINDS: {
                push: 0,
                reply: 1,
                broadcast: 2
            },
            encode(e,t) {
                return e.payload.constructor === ArrayBuffer ? t(this.binaryEncode(e)) : t(JSON.stringify([e.join_ref,e.ref,e.topic,e.event,e.payload]))
            },
            decode(e,t) {
                if (e.constructor === ArrayBuffer) return t(this.binaryDecode(e)); {
                    let [r,i,s,n,a] = JSON.parse(e);
                    return t({
                        join_ref: r,
                        ref: i,
                        topic: s,
                        event: n,
                        payload: a
                    })
                }
            },
            binaryEncode(e) {
                let {
                    join_ref: t,
                    ref: r,
                    event: i,
                    topic: s,
                    payload: n
                } = e,a = this.META_LENGTH + t.length + r.length + s.length + i.length,o = new ArrayBuffer(this.HEADER_LENGTH + a),l = new DataView(o),h = 0;
                l.setUint8(h++,this.KINDS.push),l.setUint8(h++,t.length),l.setUint8(h++,r.length),l.setUint8(h++,s.length),l.setUint8(h++,i.length),Array.from(t,e => l.setUint8(h++,e.charCodeAt(0))),Array.from(r,e => l.setUint8(h++,e.charCodeAt(0))),Array.from(s,e => l.setUint8(h++,e.charCodeAt(0))),Array.from(i,e => l.setUint8(h++,e.charCodeAt(0)));
                var u = new Uint8Array(o.byteLength + n.byteLength);
                return u.set(new Uint8Array(o),0),u.set(new Uint8Array(n),o.byteLength),u.buffer
            },
            binaryDecode(e) {
                let t = new DataView(e),
                    r = t.getUint8(0),
                    i = new TextDecoder;
                switch (r) {
                    case this.KINDS.push:
                        return this.decodePush(e,t,i);
                    case this.KINDS.reply:
                        return this.decodeReply(e,t,i);
                    case this.KINDS.broadcast:
                        return this.decodeBroadcast(e,t,i)
                }
            },
            decodePush(e,t,r) {
                let i = t.getUint8(1),
                    s = t.getUint8(2),
                    n = t.getUint8(3),
                    a = this.HEADER_LENGTH + this.META_LENGTH - 1,
                    o = r.decode(e.slice(a,a + i));
                a += i;
                let l = r.decode(e.slice(a,a + s));
                a += s;
                let h = r.decode(e.slice(a,a + n));
                return a += n,{
                    join_ref: o,
                    ref: null,
                    topic: l,
                    event: h,
                    payload: e.slice(a,e.byteLength)
                }
            },
            decodeReply(e,t,r) {
                let i = t.getUint8(1),
                    s = t.getUint8(2),
                    n = t.getUint8(3),
                    a = t.getUint8(4),
                    o = this.HEADER_LENGTH + this.META_LENGTH,
                    l = r.decode(e.slice(o,o + i));
                o += i;
                let h = r.decode(e.slice(o,o + s));
                o += s;
                let u = r.decode(e.slice(o,o + n));
                o += n;
                let c = r.decode(e.slice(o,o + a));
                return o += a,{
                    join_ref: l,
                    ref: h,
                    topic: u,
                    event: op,
                    payload: {
                        status: c,
                        response: e.slice(o,e.byteLength)
                    }
                }
            },
            decodeBroadcast(e,t,r) {
                let i = t.getUint8(1),
                    s = t.getUint8(2),
                    n = this.HEADER_LENGTH + 2,
                    a = r.decode(e.slice(n,n + i));
                n += i;
                let o = r.decode(e.slice(n,n + s));
                return n += s,{
                    join_ref: null,
                    ref: null,
                    topic: a,
                    event: o,
                    payload: e.slice(n,e.byteLength)
                }
            }
        },
        o_ = class {
            constructor(e,t = {}) {
                this.stateChangeCallbacks = {
                    open: [],
                    close: [],
                    error: [],
                    message: []
                },this.channels = [],this.sendBuffer = [],this.ref = 0,this.fallbackRef = null,this.timeout = t.timeout || 1e4,this.transport = t.transport || on.WebSocket || ox,this.conn = void 0,this.primaryPassedHealthCheck =!1,this.longPollFallbackMs = t.longPollFallbackMs,this.fallbackTimer = null;
                let r = null;
                try {
                    r = on && on.sessionStorage
                } catch {}
                this.sessionStore = t.sessionStorage || r,this.establishedConnections = 0,this.defaultEncoder = oS.encode.bind(oS),this.defaultDecoder = oS.decode.bind(oS),this.closeWasClean =!0,this.disconnecting =!1,this.binaryType = t.binaryType || "arraybuffer",this.connectClock = 1,this.pageHidden =!1,this.encode = void 0,this.decode = void 0,this.transport!== ox ? (this.encode = t.encode || this.defaultEncoder,this.decode = t.decode || this.defaultDecoder) : (this.encode = this.defaultEncoder,this.decode = this.defaultDecoder);
                let i = null;
                os && os.addEventListener && (os.addEventListener("pagehide",e => {
                    this.conn && (this.disconnect(),i = this.connectClock)
                }),os.addEventListener("pageshow",e => {
                    i === this.connectClock && (i = null,this.connect())
                }),os.addEventListener("visibilitychange",() => {
                    "hidden" === document.visibilityState ? this.pageHidden =!0 : (this.pageHidden =!1,this.isConnected() || this.closeWasClean || this.teardown(() => this.connect()))
                })),this.heartbeatIntervalMs = t.heartbeatIntervalMs || 3e4,this.autoSendHeartbeat = t.autoSendHeartbeat ??!0,this.heartbeatCallback = t.heartbeatCallback ?? (() => {}),this.rejoinAfterMs = e => t.rejoinAfterMs ? t.rejoinAfterMs(e) : [1e3,2e3,5e3][e - 1] || 1e4,this.reconnectAfterMs = e => t.reconnectAfterMs ? t.reconnectAfterMs(e) : [10,50,100,150,200,250,500,1e3,2e3][e - 1] || 5e3,this.logger = t.logger || null,!this.logger && t.debug && (this.logger = (e,t,r) => {
                    console.log(`${e}: ${t}`,r)
                }),this.longpollerTimeout = t.longpollerTimeout || 2e4,this.params = oi(t.params || {}),this.endPoint = `${e}/${om}`,this.vsn = t.vsn || "2.0.0",this.heartbeatTimeoutTimer = null,this.heartbeatTimer = null,this.heartbeatSentAt = null,this.pendingHeartbeatRef = null,this.reconnectTimer = new ov(() => {
                    if (this.pageHidden) {
                        this.log("Not reconnecting as page is hidden!"),this.teardown();
                        return
                    }
                    this.teardown(async () => {
                        t.beforeReconnect && await t.beforeReconnect(),this.connect()
                    })
                },this.reconnectAfterMs),this.authToken = t.authToken
            }
            getLongPollTransport() {
                return ox
            }
            replaceTransport(e) {
                this.connectClock++,this.closeWasClean =!0,clearTimeout(this.fallbackTimer),this.reconnectTimer.reset(),this.conn && (this.conn.close(),this.conn = null),this.transport = e
            }
            protocol() {
                return location.protocol.match(/^https/) ? "wss" : "ws"
            }
            endPointURL() {
                let e = ob.appendParams(ob.appendParams(this.endPoint,this.params()),{
                    vsn: this.vsn
                });
                return "/"!== e.charAt(0) ? e : "/" === e.charAt(1) ? `${this.protocol()}:${e}` : `${this.protocol()}://${location.host}${e}`
            }
            disconnect(e,t,r) {
                this.connectClock++,this.disconnecting =!0,this.closeWasClean =!0,clearTimeout(this.fallbackTimer),this.reconnectTimer.reset(),this.teardown(() => {
                    this.disconnecting =!1,e && e()
                },t,r)
            }
            connect(e) {
                e && (console && console.log("passing params to connect is deprecated.Instead pass :params to the Socket constructor"),this.params = oi(e)),(!this.conn || this.disconnecting) && (this.longPollFallbackMs && this.transport!== ox ? this.connectWithFallback(ox,this.longPollFallbackMs) : this.transportConnect())
            }
            log(e,t,r) {
                this.logger && this.logger(e,t,r)
            }
            hasLogger() {
                return null!== this.logger
            }
            onOpen(e) {
                let t = this.makeRef();
                return this.stateChangeCallbacks.open.push([t,e]),t
            }
            onClose(e) {
                let t = this.makeRef();
                return this.stateChangeCallbacks.close.push([t,e]),t
            }
            onError(e) {
                let t = this.makeRef();
                return this.stateChangeCallbacks.error.push([t,e]),t
            }
            onMessage(e) {
                let t = this.makeRef();
                return this.stateChangeCallbacks.message.push([t,e]),t
            }
            onHeartbeat(e) {
                this.heartbeatCallback = e
            }
            ping(e) {
                if (!this.isConnected()) return!1;
                let t = this.makeRef(),
                    r = Date.now();
                this.push({
                    topic: "phoenix",
                    event: "heartbeat",
                    payload: {},
                    ref: t
                });
                let i = this.onMessage(s => {
                    s.ref === t && (this.off([i]),e(Date.now() - r))
                });
                return!0
            }
            transportName(e) {
                return e === ox ? "LongPoll" : e.name
            }
            transportConnect() {
                let e;
                this.connectClock++,this.closeWasClean =!1,this.authToken && (e = ["phoenix",`${og}${btoa(this.authToken).replace(/=/g,"")}`]),this.conn = new this.transport(this.endPointURL(),e),this.conn.binaryType = this.binaryType,this.conn.timeout = this.longpollerTimeout,this.conn.onopen = () => this.onConnOpen(),this.conn.onerror = e => this.onConnError(e),this.conn.onmessage = e => this.onConnMessage(e),this.conn.onclose = e => this.onConnClose(e)
            }
            getSession(e) {
                return this.sessionStore && this.sessionStore.getItem(e)
            }
            storeSession(e,t) {
                this.sessionStore && this.sessionStore.setItem(e,t)
            }
            connectWithFallback(e,t = 2500) {
                let r,i;
                clearTimeout(this.fallbackTimer);
                let s =!1,
                    n =!0,
                    a = this.transportName(e),
                    o = t => {
                        this.log("transport",`falling back to ${a}...`,t),this.off([r,i]),n =!1,this.replaceTransport(e),this.transportConnect()
                    };
                if (this.getSession(`phx:fallback:${a}`)) return o("memorized");
                this.fallbackTimer = setTimeout(o,t),i = this.onError(e => {
                    this.log("transport","error",e),n &&!s && (clearTimeout(this.fallbackTimer),o(e))
                }),this.fallbackRef && this.off([this.fallbackRef]),this.fallbackRef = this.onOpen(() => {
                    if (s =!0,!n) {
                        let t = this.transportName(e);
                        return this.primaryPassedHealthCheck || this.storeSession(`phx:fallback:${t}`,"true"),this.log("transport",`established ${t} fallback`)
                    }
                    clearTimeout(this.fallbackTimer),this.fallbackTimer = setTimeout(o,t),this.ping(e => {
                        this.log("transport","connected to primary after",e),this.primaryPassedHealthCheck =!0,clearTimeout(this.fallbackTimer)
                    })
                }),this.transportConnect()
            }
            clearHeartbeats() {
                clearTimeout(this.heartbeatTimer),clearTimeout(this.heartbeatTimeoutTimer)
            }
            onConnOpen() {
                this.hasLogger() && this.log("transport",`connected to ${this.endPointURL()}`),this.closeWasClean =!1,this.disconnecting =!1,this.establishedConnections++,this.flushSendBuffer(),this.reconnectTimer.reset(),this.autoSendHeartbeat && this.resetHeartbeat(),this.triggerStateCallbacks("open")
            }
            heartbeatTimeout() {
                if (this.pendingHeartbeatRef) {
                    this.pendingHeartbeatRef = null,this.heartbeatSentAt = null,this.hasLogger() && this.log("transport","heartbeat timeout.Attempting to re-establish connection");
                    try {
                        this.heartbeatCallback("timeout")
                    } catch (e) {
                        this.log("error","error in heartbeat callback",e)
                    }
                    this.triggerChanError(Error("heartbeat timeout")),this.closeWasClean =!1,this.teardown(() => this.reconnectTimer.scheduleTimeout(),1e3,"heartbeat timeout")
                }
            }
            resetHeartbeat() {
                this.conn && this.conn.skipHeartbeat || (this.pendingHeartbeatRef = null,this.clearHeartbeats(),this.heartbeatTimer = setTimeout(() => this.sendHeartbeat(),this.heartbeatIntervalMs))
            }
            teardown(e,t,r) {
                if (!this.conn) return e && e();
                let i = this.conn;
                this.waitForBufferDone(i,() => {
                    t ? i.close(t,r || "") : i.close(),this.waitForSocketClosed(i,() => {
                        this.conn === i && (this.conn.onopen = function() {},this.conn.onerror = function() {},this.conn.onmessage = function() {},this.conn.onclose = function() {},this.conn = null),e && e()
                    })
                })
            }
            waitForBufferDone(e,t,r = 1) {
                5!== r && e.bufferedAmount ? setTimeout(() => {
                    this.waitForBufferDone(e,t,r + 1)
                },150 * r) : t()
            }
            waitForSocketClosed(e,t,r = 1) {
                5 === r || 3 === e.readyState ? t() : setTimeout(() => {
                    this.waitForSocketClosed(e,t,r + 1)
                },150 * r)
            }
            onConnClose(e) {
                this.conn && (this.conn.onclose = () => {}),this.hasLogger() && this.log("transport","close",e),this.triggerChanError(e),this.clearHeartbeats(),this.closeWasClean || this.reconnectTimer.scheduleTimeout(),this.triggerStateCallbacks("close",e)
            }
            onConnError(e) {
                this.hasLogger() && this.log("transport","error",e);
                let t = this.transport,
                    r = this.establishedConnections;
                this.triggerStateCallbacks("error",e,t,r),(t === this.transport || r > 0) && this.triggerChanError(e)
            }
            triggerChanError(e) {
                this.channels.forEach(t => {
                    t.isErrored() || t.isLeaving() || t.isClosed() || t.trigger(od,e)
                })
            }
            connectionState() {
                switch (this.conn && this.conn.readyState) {
                    case 0:
                        return "connecting";
                    case 1:
                        return "open";
                    case 2:
                        return "closing";
                    default:
                        return "closed"
                }
            }
            isConnected() {
                return "open" === this.connectionState()
            }
            remove(e) {
                this.off(e.stateChangeRefs),this.channels = this.channels.filter(t => t!== e)
            }
            off(e) {
                for (let t in this.stateChangeCallbacks) this.stateChangeCallbacks[t] = this.stateChangeCallbacks[t].filter(([t]) => -1 === e.indexOf(t))
            }
            channel(e,t = {}) {
                let r = new ow(e,t,this);
                return this.channels.push(r),r
            }
            push(e) {
                if (this.hasLogger()) {
                    let {
                        topic: t,
                        event: r,
                        payload: i,
                        ref: s,
                        join_ref: n
                    } = e;
                    this.log("push",`${t} ${r} (${n},${s})`,i)
                }
                this.isConnected() ? this.encode(e,e => this.conn.send(e)) : this.sendBuffer.push(() => this.encode(e,e => this.conn.send(e)))
            }
            makeRef() {
                let e = this.ref + 1;
                return e === this.ref ? this.ref = 0 : this.ref = e,this.ref.toString()
            }
            sendHeartbeat() {
                if (!this.isConnected()) {
                    try {
                        this.heartbeatCallback("disconnected")
                    } catch (e) {
                        this.log("error","error in heartbeat callback",e)
                    }
                    return
                }
                if (this.pendingHeartbeatRef) return void this.heartbeatTimeout();
                this.pendingHeartbeatRef = this.makeRef(),this.heartbeatSentAt = Date.now(),this.push({
                    topic: "phoenix",
                    event: "heartbeat",
                    payload: {},
                    ref: this.pendingHeartbeatRef
                });
                try {
                    this.heartbeatCallback("sent")
                } catch (e) {
                    this.log("error","error in heartbeat callback",e)
                }
                this.heartbeatTimeoutTimer = setTimeout(() => this.heartbeatTimeout(),this.heartbeatIntervalMs)
            }
            flushSendBuffer() {
                this.isConnected() && this.sendBuffer.length > 0 && (this.sendBuffer.forEach(e => e()),this.sendBuffer = [])
            }
            onConnMessage(e) {
                this.decode(e.data,e => {
                    let {
                        topic: t,
                        event: r,
                        payload: i,
                        ref: s,
                        join_ref: n
                    } = e;
                    if (s && s === this.pendingHeartbeatRef) {
                        let e = this.heartbeatSentAt ? Date.now() - this.heartbeatSentAt : void 0;
                        this.clearHeartbeats();
                        try {
                            this.heartbeatCallback("ok" === i.status ? "ok" : "error",e)
                        } catch (e) {
                            this.log("error","error in heartbeat callback",e)
                        }
                        this.pendingHeartbeatRef = null,this.heartbeatSentAt = null,this.autoSendHeartbeat && (this.heartbeatTimer = setTimeout(() => this.sendHeartbeat(),this.heartbeatIntervalMs))
                    }
                    this.hasLogger() && this.log("receive",`${i.status||""} ${t} ${r} ${s&&"("+s+")"||""}`.trim(),i);
                    for (let e = 0; e < this.channels.length; e++) {
                        let a = this.channels[e];
                        a.isMember(t,r,i,n) && a.trigger(r,i,s,n)
                    }
                    this.triggerStateCallbacks("message",e)
                })
            }
            triggerStateCallbacks(e,...t) {
                try {
                    this.stateChangeCallbacks[e].forEach(([r,i]) => {
                        try {
                            i(...t)
                        } catch (t) {
                            this.log("error",`error in ${e} callback`,t)
                        }
                    })
                } catch (t) {
                    this.log("error",`error triggering ${e} callbacks`,t)
                }
            }
            leaveOpenTopic(e) {
                let t = this.channels.find(t => t.topic === e && (t.isJoined() || t.isJoining()));
                t && (this.hasLogger() && this.log("transport",`leaving duplicate topic "${e}"`),t.leave())
            }
        };
    class oE {
        constructor(e,t) {
            const r = function(e) {
                return (null == e ? void 0 : e.events) && {
                    events: e.events
                }
            }(t);
            this.presence = new ok(e.getChannel(),r),this.presence.onJoin((t,r,i) => {
                let s = oE.onJoinPayload(t,r,i);
                e.getChannel().trigger("presence",s)
            }),this.presence.onLeave((t,r,i) => {
                let s = oE.onLeavePayload(t,r,i);
                e.getChannel().trigger("presence",s)
            }),this.presence.onSync(() => {
                e.getChannel().trigger("presence",{
                    event: "sync"
                })
            })
        }
        get state() {
            return oE.transformState(this.presence.state)
        }
        static transformState(e) {
            return Object.getOwnPropertyNames(e = JSON.parse(JSON.stringify(e))).reduce((t,r) => {
                let i = e[r];
                return t[r] = oT(i),t
            },{})
        }
        static onJoinPayload(e,t,r) {
            return {
                event: "join",
                key: e,
                currentPresences: oA(t),
                newPresences: oT(r)
            }
        }
        static onLeavePayload(e,t,r) {
            return {
                event: "leave",
                key: e,
                currentPresences: oA(t),
                leftPresences: oT(r)
            }
        }
    }

    function oT(e) {
        return e.metas.map(e => (e.presence_ref = e.phx_ref,delete e.phx_ref,delete e.phx_ref_prev,e))
    }

    function oA(e) {
        return (null == e ? void 0 : e.metas) ? oT(e) : []
    }(g = S || (S = {})).SYNC = "sync",g.JOIN = "join",g.LEAVE = "leave";
    class oR {
        get state() {
            return this.presenceAdapter.state
        }
        constructor(e,t) {
            this.channel = e,this.presenceAdapter = new oE(this.channel.channelAdapter,t)
        }
    }
    class oP {
        constructor(e,t,r) {
            const i = function(e) {
                return {
                    config: Object.assign({
                        broadcast: {
                            ack:!1,
                            self:!1
                        },
                        presence: {
                            key: "",
                            enabled:!1
                        },
                        private:!1
                    },e.config)
                }
            }(r);
            this.channel = e.getSocket().channel(t,i),this.socket = e
        }
        get state() {
            return this.channel.state
        }
        set state(e) {
            this.channel.state = e
        }
        get joinedOnce() {
            return this.channel.joinedOnce
        }
        get joinPush() {
            return this.channel.joinPush
        }
        get rejoinTimer() {
            return this.channel.rejoinTimer
        }
        on(e,t) {
            return this.channel.on(e,t)
        }
        off(e,t) {
            this.channel.off(e,t)
        }
        subscribe(e) {
            return this.channel.join(e)
        }
        unsubscribe(e) {
            return this.channel.leave(e)
        }
        teardown() {
            this.channel.teardown()
        }
        onClose(e) {
            this.channel.onClose(e)
        }
        onError(e) {
            return this.channel.onError(e)
        }
        push(e,t,r) {
            let i;
            try {
                i = this.channel.push(e,t,r)
            } catch (t) {
                throw Error(`tried to push '${e}' to '${this.channel.topic}' before joining.Use channel.subscribe() before pushing events`)
            }
            if (this.channel.pushBuffer.length > 100) {
                let e = this.channel.pushBuffer.shift();
                e.cancelTimeout(),this.socket.log("channel",`discarded push due to buffer overflow: ${e.event}`,e.payload())
            }
            return i
        }
        updateJoinPayload(e) {
            let t = this.channel.joinPush.payload();
            this.channel.joinPush.payload = () => Object.assign(Object.assign({},t),e)
        }
        canPush() {
            return this.socket.isConnected() && this.state === a0
        }
        isJoined() {
            return this.state === a0
        }
        isJoining() {
            return "joining" === this.state
        }
        isClosed() {
            return "closed" === this.state
        }
        isLeaving() {
            return "leaving" === this.state
        }
        updateFilterBindings(e) {
            this.channel.filterBindings = e
        }
        updatePayloadTransform(e) {
            this.channel.onMessage = e
        }
        getChannel() {
            return this.channel
        }
    }(y = _ || (_ = {})).ALL = "*",y.INSERT = "INSERT",y.UPDATE = "UPDATE",y.DELETE = "DELETE",(v = E || (E = {})).BROADCAST = "broadcast",v.PRESENCE = "presence",v.POSTGRES_CHANGES = "postgres_changes",v.SYSTEM = "system",(w = T || (T = {})).SUBSCRIBED = "SUBSCRIBED",w.TIMED_OUT = "TIMED_OUT",w.CLOSED = "CLOSED",w.CHANNEL_ERROR = "CHANNEL_ERROR";
    class oj {
        get state() {
            return this.channelAdapter.state
        }
        set state(e) {
            this.channelAdapter.state = e
        }
        get joinedOnce() {
            return this.channelAdapter.joinedOnce
        }
        get timeout() {
            return this.socket.timeout
        }
        get joinPush() {
            return this.channelAdapter.joinPush
        }
        get rejoinTimer() {
            return this.channelAdapter.rejoinTimer
        }
        constructor(e,t = {
            config: {}
        },r) {
            var i,s;
            if (this.topic = e,this.params = t,this.socket = r,this.bindings = {},this.subTopic = e.replace(/^realtime:/i,""),this.params.config = Object.assign({
                    broadcast: {
                        ack:!1,
                        self:!1
                    },
                    presence: {
                        key: "",
                        enabled:!1
                    },
                    private:!1
                },t.config),this.channelAdapter = new oP(this.socket.socketAdapter,e,this.params),this.presence = new oR(this),this._onClose(() => {
                    this.socket._remove(this)
                }),this._updateFilterTransform(),this.broadcastEndpointURL = or(this.socket.socketAdapter.endPointURL()),this.private = this.params.config.private ||!1,!this.private && (null == (s = null == (i = this.params.config) ? void 0 : i.broadcast) ? void 0 : s.replay)) throw Error(`tried to use replay on public channel '${this.topic}'.It must be a private channel.`)
        }
        subscribe(e,t = this.timeout) {
            var r,i,s;
            if (this.socket.isConnected() || this.socket.connect(),this.channelAdapter.isClosed()) {
                let {
                    config: {
                        broadcast: n,
                        presence: a,
                        private: o
                    }
                } = this.params,l = null!= (i = null == (r = this.bindings.postgres_changes) ? void 0 : r.map(e => e.filter)) ? i : [],h =!!this.bindings[E.PRESENCE] && this.bindings[E.PRESENCE].length > 0 || (null == (s = this.params.config.presence) ? void 0 : s.enabled) ===!0,u = {},c = {
                    broadcast: n,
                    presence: Object.assign(Object.assign({},a),{
                        enabled: h
                    }),
                    postgres_changes: l,
                    private: o
                };
                this.socket.accessTokenValue && (u.access_token = this.socket.accessTokenValue),this._onError(t => {
                    null == e || e(T.CHANNEL_ERROR,function(e) {
                        if (e instanceof Error) return e;
                        if ("string" == typeof e) return Error(e);
                        if (e && "object" == typeof e) {
                            if ("number" == typeof e.code) {
                                let t = "string" == typeof e.reason && e.reason ? ` (${e.reason})` : "";
                                return Error(`socket closed: ${e.code}${t}`,{
                                    cause: e
                                })
                            }
                            return Error("channel error: transport failure",{
                                cause: e
                            })
                        }
                        return Error("channel error: connection lost")
                    }(t))
                }),this._onClose(() => null == e ? void 0 : e(T.CLOSED)),this.updateJoinPayload(Object.assign({
                    config: c
                },u)),this._updateFilterMessage(),this.channelAdapter.subscribe(t).receive("ok",async ({
                    postgres_changes: t
                }) => {
                    if (this.socket._isManualToken() || this.socket.setAuth(),void 0 === t) {
                        null == e || e(T.SUBSCRIBED);
                        return
                    }
                    this._updatePostgresBindings(t,e)
                }).receive("error",t => {
                    this.state = aZ;
                    let r = Object.values(t).join(",") || "error";
                    null == e || e(T.CHANNEL_ERROR,Error(r,{
                        cause: t
                    }))
                }).receive("timeout",() => {
                    null == e || e(T.TIMED_OUT)
                })
            }
            return this
        }
        _updatePostgresBindings(e,t) {
            var r;
            let i = this.bindings.postgres_changes,
                s = null!= (r = null == i ? void 0 : i.length) ? r : 0,
                n = [];
            for (let r = 0; r < s; r++) {
                let s = i[r],
                    {
                        filter: {
                            event: a,
                            schema: o,
                            table: l,
                            filter: h
                        }
                    } = s,
                    u = e && e[r];
                if (u && u.event === a && oj.isFilterValueEqual(u.schema,o) && oj.isFilterValueEqual(u.table,l) && oj.isFilterValueEqual(u.filter,h)) n.push(Object.assign(Object.assign({},s),{
                    id: u.id
                }));
                else {
                    this.unsubscribe(),this.state = aZ,null == t || t(T.CHANNEL_ERROR,Error("mismatch between server and client bindings for postgres changes"));
                    return
                }
            }
            this.bindings.postgres_changes = n,this.state!= aZ && t && t(T.SUBSCRIBED)
        }
        presenceState() {
            return this.presence.state
        }
        async track(e,t = {}) {
            return await this.send({
                type: "presence",
                event: "track",
                payload: e
            },t.timeout || this.timeout)
        }
        async untrack(e = {}) {
            return await this.send({
                type: "presence",
                event: "untrack"
            },e)
        }
        on(e,t,r) {
            let i = this.channelAdapter.isJoined() || this.channelAdapter.isJoining(),
                s = e === E.PRESENCE || e === E.POSTGRES_CHANGES;
            if (i && s) throw this.socket.log("channel",`cannot add \`${e}\` callbacks for ${this.topic} after \`subscribe()\`.`),Error(`cannot add \`${e}\` callbacks for ${this.topic} after \`subscribe()\`.`);
            return this._on(e,t,r)
        }
        async httpSend(e,t,r = {}) {
            var i;
            if (null == t) return Promise.reject(Error("Payload is required for httpSend()"));
            let s = {
                apikey: this.socket.apiKey ? this.socket.apiKey : "",
                "Content-Type": "application/json"
            };
            this.socket.accessTokenValue && (s.Authorization = `Bearer ${this.socket.accessTokenValue}`);
            let n = {
                    method: "POST",
                    headers: s,
                    body: JSON.stringify({
                        messages: [{
                            topic: this.subTopic,
                            event: e,
                            payload: t,
                            private: this.private
                        }]
                    })
                },
                a = await this._fetchWithTimeout(this.broadcastEndpointURL,n,null!= (i = r.timeout) ? i : this.timeout);
            if (202 === a.status) return {
                success:!0
            };
            let o = a.statusText;
            try {
                let e = await a.json();
                o = e.error || e.message || o
            } catch (e) {}
            return Promise.reject(Error(o))
        }
        async send(e,t = {}) {
            var r,i;
            if (this.channelAdapter.canPush() || "broadcast"!== e.type) return new Promise(r => {
                var i,s,n;
                let a = this.channelAdapter.push(e.type,e,t.timeout || this.timeout);
                "broadcast"!== e.type || (null == (n = null == (s = null == (i = this.params) ? void 0 : i.config) ? void 0 : s.broadcast) ? void 0 : n.ack) || r("ok"),a.receive("ok",() => r("ok")),a.receive("error",() => r("error")),a.receive("timeout",() => r("timed out"))
            }); {
                console.warn("Realtime send() is automatically falling back to REST API.This behavior will be deprecated in the future.Please use httpSend() explicitly for REST delivery.");
                let {
                    event: s,
                    payload: n
                } = e,a = {
                    apikey: this.socket.apiKey ? this.socket.apiKey : "",
                    "Content-Type": "application/json"
                };
                this.socket.accessTokenValue && (a.Authorization = `Bearer ${this.socket.accessTokenValue}`);
                let o = {
                    method: "POST",
                    headers: a,
                    body: JSON.stringify({
                        messages: [{
                            topic: this.subTopic,
                            event: s,
                            payload: n,
                            private: this.private
                        }]
                    })
                };
                try {
                    let e = await this._fetchWithTimeout(this.broadcastEndpointURL,o,null!= (r = t.timeout) ? r : this.timeout);
                    return await (null == (i = e.body) ? void 0 : i.cancel()),e.ok ? "ok" : "error"
                } catch (e) {
                    if (e instanceof Error && "AbortError" === e.name) return "timed out";
                    return "error"
                }
            }
        }
        updateJoinPayload(e) {
            this.channelAdapter.updateJoinPayload(e)
        }
        async unsubscribe(e = this.timeout) {
            return new Promise(t => {
                this.channelAdapter.unsubscribe(e).receive("ok",() => t("ok")).receive("timeout",() => t("timed out")).receive("error",() => t("error"))
            })
        }
        teardown() {
            this.channelAdapter.teardown()
        }
        async _fetchWithTimeout(e,t,r) {
            let i = new AbortController,
                s = setTimeout(() => i.abort(),r),
                n = await this.socket.fetch(e,Object.assign(Object.assign({},t),{
                    signal: i.signal
                }));
            return clearTimeout(s),n
        }
        _on(e,t,r) {
            let i = e.toLocaleLowerCase(),
                s = this.channelAdapter.on(e,r),
                n = {
                    type: i,
                    filter: t,
                    callback: r,
                    ref: s
                };
            return this.bindings[i] ? this.bindings[i].push(n) : this.bindings[i] = [n],this._updateFilterMessage(),this
        }
        _onClose(e) {
            this.channelAdapter.onClose(e)
        }
        _onError(e) {
            this.channelAdapter.onError(e)
        }
        _updateFilterMessage() {
            this.channelAdapter.updateFilterBindings((e,t,r) => {
                var i,s,n,a,o,l,h;
                let u = e.event.toLocaleLowerCase();
                if (this._notThisChannelEvent(u,r)) return!1;
                let c = null == (i = this.bindings[u]) ? void 0 : i.find(t => t.ref === e.ref);
                if (!c) return!0;
                if (!["broadcast","presence","postgres_changes"].includes(u)) return c.type.toLocaleLowerCase() === u;
                if ("id" in c) {
                    let e = c.id,
                        r = null == (s = c.filter) ? void 0 : s.event;
                    return e && (null == (n = t.ids) ? void 0 : n.includes(e)) && ("*" === r || (null == r ? void 0 : r.toLocaleLowerCase()) === (null == (a = t.data) ? void 0 : a.type.toLocaleLowerCase()))
                } {
                    let e = null == (l = null == (o = null == c ? void 0 : c.filter) ? void 0 : o.event) ? void 0 : l.toLocaleLowerCase();
                    return "*" === e || e === (null == (h = null == t ? void 0 : t.event) ? void 0 : h.toLocaleLowerCase())
                }
            })
        }
        _notThisChannelEvent(e,t) {
            let {
                close: r,
                error: i,
                leave: s,
                join: n
            } = a1;
            return t && [r,i,s,n].includes(e) && t!== this.joinPush.ref
        }
        _updateFilterTransform() {
            this.channelAdapter.updatePayloadTransform((e,t,r) => {
                if ("object" == typeof t && "ids" in t) {
                    let e = t.data,
                        {
                            schema: r,
                            table: i,
                            commit_timestamp: s,
                            type: n,
                            errors: a
                        } = e;
                    return Object.assign(Object.assign({},{
                        schema: r,
                        table: i,
                        commit_timestamp: s,
                        eventType: n,
                        new: {},
                        old: {},
                        errors: a
                    }),this._getPayloadRecords(e))
                }
                return t
            })
        }
        copyBindings(e) {
            if (this.joinedOnce) throw Error("cannot copy bindings into joined channel");
            for (let t in e.bindings)
                for (let r of e.bindings[t]) this._on(r.type,r.filter,r.callback)
        }
        static isFilterValueEqual(e,t) {
            return (null!= e ? e : void 0) === (null!= t ? t : void 0)
        }
        _getPayloadRecords(e) {
            let t = {
                new: {},
                old: {}
            };
            return ("INSERT" === e.type || "UPDATE" === e.type) && (t.new = a5(e.columns,e.record)),("UPDATE" === e.type || "DELETE" === e.type) && (t.old = a5(e.columns,e.old_record)),t
        }
    }
    class oC {
        constructor(e,t) {
            this.socket = new o_(e,t)
        }
        get timeout() {
            return this.socket.timeout
        }
        get endPoint() {
            return this.socket.endPoint
        }
        get transport() {
            return this.socket.transport
        }
        get heartbeatIntervalMs() {
            return this.socket.heartbeatIntervalMs
        }
        get heartbeatCallback() {
            return this.socket.heartbeatCallback
        }
        set heartbeatCallback(e) {
            this.socket.heartbeatCallback = e
        }
        get heartbeatTimer() {
            return this.socket.heartbeatTimer
        }
        get pendingHeartbeatRef() {
            return this.socket.pendingHeartbeatRef
        }
        get reconnectTimer() {
            return this.socket.reconnectTimer
        }
        get vsn() {
            return this.socket.vsn
        }
        get encode() {
            return this.socket.encode
        }
        get decode() {
            return this.socket.decode
        }
        get reconnectAfterMs() {
            return this.socket.reconnectAfterMs
        }
        get sendBuffer() {
            return this.socket.sendBuffer
        }
        get stateChangeCallbacks() {
            return this.socket.stateChangeCallbacks
        }
        connect() {
            this.socket.connect()
        }
        disconnect(e,t,r,i = 1e4) {
            return new Promise(s => {
                setTimeout(() => s("timeout"),i),this.socket.disconnect(() => {
                    e(),s("ok")
                },t,r)
            })
        }
        push(e) {
            this.socket.push(e)
        }
        log(e,t,r) {
            this.socket.log(e,t,r)
        }
        makeRef() {
            return this.socket.makeRef()
        }
        onOpen(e) {
            this.socket.onOpen(e)
        }
        onClose(e) {
            this.socket.onClose(e)
        }
        onError(e) {
            this.socket.onError(e)
        }
        onMessage(e) {
            this.socket.onMessage(e)
        }
        isConnected() {
            return this.socket.isConnected()
        }
        isConnecting() {
            return "connecting" == this.socket.connectionState()
        }
        isDisconnecting() {
            return "closing" == this.socket.connectionState()
        }
        connectionState() {
            return this.socket.connectionState()
        }
        endPointURL() {
            return this.socket.endPointURL()
        }
        sendHeartbeat() {
            this.socket.sendHeartbeat()
        }
        getSocket() {
            return this.socket
        }
    }
    let oO = [1e3,2e3,5e3,1e4],
        oN = `
  addEventListener("message",(e) => {
    if (e.data.event === "start") {
      setInterval(() => postMessage({ event: "keepAlive" }),e.data.interval);
    }
  });`;
    class oI {
        get endPoint() {
            return this.socketAdapter.endPoint
        }
        get timeout() {
            return this.socketAdapter.timeout
        }
        get transport() {
            return this.socketAdapter.transport
        }
        get heartbeatCallback() {
            return this.socketAdapter.heartbeatCallback
        }
        get heartbeatIntervalMs() {
            return this.socketAdapter.heartbeatIntervalMs
        }
        get heartbeatTimer() {
            return this.worker ? this._workerHeartbeatTimer : this.socketAdapter.heartbeatTimer
        }
        get pendingHeartbeatRef() {
            return this.worker ? this._pendingWorkerHeartbeatRef : this.socketAdapter.pendingHeartbeatRef
        }
        get reconnectTimer() {
            return this.socketAdapter.reconnectTimer
        }
        get vsn() {
            return this.socketAdapter.vsn
        }
        get encode() {
            return this.socketAdapter.encode
        }
        get decode() {
            return this.socketAdapter.decode
        }
        get reconnectAfterMs() {
            return this.socketAdapter.reconnectAfterMs
        }
        get sendBuffer() {
            return this.socketAdapter.sendBuffer
        }
        get stateChangeCallbacks() {
            return this.socketAdapter.stateChangeCallbacks
        }
        constructor(e,t) {
            var r;
            if (this.channels = [],this.accessTokenValue = null,this.accessToken = null,this.apiKey = null,this.httpEndpoint = "",this.headers = {},this.params = {},this.ref = 0,this.serializer = new a2,this._manuallySetToken =!1,this._authPromise = null,this._workerHeartbeatTimer = void 0,this._pendingWorkerHeartbeatRef = null,this._pendingDisconnectTimer = null,this._disconnectOnEmptyChannelsAfterMs = 0,this._resolveFetch = e => e ? (...t) => e(...t) : (...e) => fetch(...e),!(null == (r = null == t ? void 0 : t.params) ? void 0 : r.apikey)) throw Error("API key is required to connect to Realtime");
            this.apiKey = t.params.apikey;
            const i = this._initializeOptions(t);
            this.socketAdapter = new oC(e,i),this.httpEndpoint = or(e),this.fetch = this._resolveFetch(null == t ? void 0 : t.fetch)
        }
        connect() {
            if (!(this.isConnecting() || this.isDisconnecting() || this.isConnected())) {
                this.accessToken &&!this._authPromise && this._setAuthSafely("connect"),this._setupConnectionHandlers();
                try {
                    this.socketAdapter.connect()
                } catch (t) {
                    let e = t.message;
                    if (e.includes("Node.js")) throw Error(`${e}

To use Realtime in Node.js,you need to provide a WebSocket implementation:

Option 1: Use Node.js 22+ which has native WebSocket support
Option 2: Install and provide the "ws" package:

  npm install ws

  import ws from "ws"
  const client = new RealtimeClient(url,{
    ...options,
    transport: ws
  })`);
                    throw Error(`WebSocket not available: ${e}`)
                }
                this._handleNodeJsRaceCondition()
            }
        }
        endpointURL() {
            return this.socketAdapter.endPointURL()
        }
        async disconnect(e,t) {
            return (this._cancelPendingDisconnect(),this.isDisconnecting()) ? "ok" : await this.socketAdapter.disconnect(() => {
                clearInterval(this._workerHeartbeatTimer),this._terminateWorker()
            },e,t)
        }
        getChannels() {
            return this.channels
        }
        async removeChannel(e) {
            let t = await e.unsubscribe();
            return "ok" === t && e.teardown(),t
        }
        async removeAllChannels() {
            let e = this.channels.map(async e => {
                    let t = await e.unsubscribe();
                    return e.teardown(),t
                }),
                t = await Promise.all(e);
            return await this.disconnect(),t
        }
        log(e,t,r) {
            this.socketAdapter.log(e,t,r)
        }
        connectionState() {
            return this.socketAdapter.connectionState() || "closed"
        }
        isConnected() {
            return this.socketAdapter.isConnected()
        }
        isConnecting() {
            return this.socketAdapter.isConnecting()
        }
        isDisconnecting() {
            return this.socketAdapter.isDisconnecting()
        }
        channel(e,t = {
            config: {}
        }) {
            let r = `realtime:${e}`,
                i = this.getChannels().find(e => e.topic === r);
            if (i) return i; {
                let r = new oj(`realtime:${e}`,t,this);
                return this._cancelPendingDisconnect(),this.channels.push(r),r
            }
        }
        push(e) {
            this.socketAdapter.push(e)
        }
        async setAuth(e = null) {
            this._authPromise = this._performAuth(e);
            try {
                await this._authPromise
            } finally {
                this._authPromise = null
            }
        }
        _isManualToken() {
            return this._manuallySetToken
        }
        async sendHeartbeat() {
            this.socketAdapter.sendHeartbeat()
        }
        onHeartbeat(e) {
            this.socketAdapter.heartbeatCallback = this._wrapHeartbeatCallback(e)
        }
        _makeRef() {
            return this.socketAdapter.makeRef()
        }
        _remove(e) {
            this.channels = this.channels.filter(t => t.topic!== e.topic),0 === this.channels.length && (this.log("transport","no channels remaining,scheduling disconnect"),this._schedulePendingDisconnect())
        }
        _schedulePendingDisconnect() {
            if (this._cancelPendingDisconnect(),0 === this._disconnectOnEmptyChannelsAfterMs) {
                this.log("transport","disconnecting immediately - no channels"),this.disconnect();
                return
            }
            this._pendingDisconnectTimer = setTimeout(() => {
                this._pendingDisconnectTimer = null,0 === this.channels.length && (this.log("transport","deferred disconnect fired - no channels,disconnecting"),this.disconnect())
            },this._disconnectOnEmptyChannelsAfterMs),this.log("transport",`deferred disconnect scheduled in ${this._disconnectOnEmptyChannelsAfterMs}ms`)
        }
        _cancelPendingDisconnect() {
            null!== this._pendingDisconnectTimer && (this.log("transport","pending disconnect cancelled - channel activity detected"),clearTimeout(this._pendingDisconnectTimer),this._pendingDisconnectTimer = null)
        }
        async _performAuth(e = null) {
            let t,r =!1;
            if (e) t = e,r =!0;
            else if (this.accessToken) try {
                t = await this.accessToken()
            } catch (e) {
                this.log("error","Error fetching access token from callback",e),t = this.accessTokenValue
            } else t = this.accessTokenValue;
            r ? this._manuallySetToken =!0 : this.accessToken && (this._manuallySetToken =!1),this.accessTokenValue!= t && (this.accessTokenValue = t,this.channels.forEach(e => {
                let r = {
                    access_token: t,
                    version: "realtime-js/2.106.2"
                };
                t && e.updateJoinPayload(r),e.joinedOnce && e.channelAdapter.isJoined() && e.channelAdapter.push(a1.access_token,{
                    access_token: t
                })
            }))
        }
        async _waitForAuthIfNeeded() {
            this._authPromise && await this._authPromise
        }
        _setAuthSafely(e = "general") {
            this._isManualToken() || this.setAuth().catch(t => {
                this.log("error",`Error setting auth in ${e}`,t)
            })
        }
        _setupConnectionHandlers() {
            this.socketAdapter.onOpen(() => {
                (this._authPromise || (this.accessToken &&!this.accessTokenValue ? this.setAuth() : Promise.resolve())).catch(e => {
                    this.log("error","error waiting for auth on connect",e)
                }),this.worker &&!this.workerRef && this._startWorkerHeartbeat()
            }),this.socketAdapter.onClose(() => {
                this.worker && this.workerRef && this._terminateWorker()
            }),this.socketAdapter.onMessage(e => {
                e.ref && e.ref === this._pendingWorkerHeartbeatRef && (this._pendingWorkerHeartbeatRef = null)
            })
        }
        _handleNodeJsRaceCondition() {
            this.socketAdapter.isConnected() && this.socketAdapter.getSocket().onConnOpen()
        }
        _wrapHeartbeatCallback(e) {
            return (t,r) => {
                "sent" == t && this._setAuthSafely(),e && e(t,r)
            }
        }
        _startWorkerHeartbeat() {
            this.workerUrl ? this.log("worker",`starting worker for from ${this.workerUrl}`) : this.log("worker","starting default worker");
            let e = this._workerObjectUrl(this.workerUrl);
            this.workerRef = new Worker(e),this.workerRef.onerror = e => {
                this.log("worker","worker error",e.message),this._terminateWorker(),this.disconnect()
            },this.workerRef.onmessage = e => {
                "keepAlive" === e.data.event && this.sendHeartbeat()
            },this.workerRef.postMessage({
                event: "start",
                interval: this.heartbeatIntervalMs
            })
        }
        _terminateWorker() {
            this.workerRef && (this.log("worker","terminating worker"),this.workerRef.terminate(),this.workerRef = void 0)
        }
        _workerObjectUrl(e) {
            let t;
            if (e) t = e;
            else {
                let e = new Blob([oN],{
                    type: "application/javascript"
                });
                t = URL.createObjectURL(e)
            }
            return t
        }
        _initializeOptions(e) {
            var t,r,i,s,n,a,o,l,h,u,c,d;
            let p,f;
            this.worker = null!= (t = null == e ? void 0 : e.worker) && t,this.accessToken = null!= (r = null == e ? void 0 : e.accessToken) ? r : null;
            let m = {};
            m.timeout = null!= (i = null == e ? void 0 : e.timeout) ? i : 1e4,m.heartbeatIntervalMs = null!= (s = null == e ? void 0 : e.heartbeatIntervalMs) ? s : 25e3,this._disconnectOnEmptyChannelsAfterMs = null!= (n = null == e ? void 0 : e.disconnectOnEmptyChannelsAfterMs) ? n : 2 * (null!= (a = null == e ? void 0 : e.heartbeatIntervalMs) ? a : 25e3),m.transport = null!= (o = null == e ? void 0 : e.transport) ? o : aX.getWebSocketConstructor(),m.params = null == e ? void 0 : e.params,m.logger = null == e ? void 0 : e.logger,m.heartbeatCallback = this._wrapHeartbeatCallback(null == e ? void 0 : e.heartbeatCallback),m.sessionStorage = null!= (l = null == e ? void 0 : e.sessionStorage) ? l : function() {
                let e;
                try {
                    if ("u" > typeof globalThis && globalThis.sessionStorage) return globalThis.sessionStorage
                } catch (e) {}
                return e = new Map,{
                    get length() {
                        return e.size
                    },
                    clear() {
                        e.clear()
                    },
                    getItem: t => e.has(t) ? e.get(t) : null,
                    key(t) {
                        var r;
                        return null!= (r = Array.from(e.keys())[t]) ? r : null
                    },
                    removeItem(t) {
                        e.delete(t)
                    },
                    setItem(t,r) {
                        e.set(t,String(r))
                    }
                }
            }(),m.reconnectAfterMs = null!= (h = null == e ? void 0 : e.reconnectAfterMs) ? h : e => oO[e - 1] || 1e4;
            let g = null!= (u = null == e ? void 0 : e.vsn) ? u : aQ;
            switch (g) {
                case "1.0.0":
                    p = (e,t) => t(JSON.stringify(e)),f = (e,t) => t(JSON.parse(e));
                    break;
                case aQ:
                    p = this.serializer.encode.bind(this.serializer),f = this.serializer.decode.bind(this.serializer);
                    break;
                default:
                    throw Error(`Unsupported serializer version: ${m.vsn}`)
            }
            if (m.vsn = g,m.encode = null!= (c = null == e ? void 0 : e.encode) ? c : p,m.decode = null!= (d = null == e ? void 0 : e.decode) ? d : f,m.beforeReconnect = this._reconnectAuth.bind(this),((null == e ? void 0 : e.logLevel) || (null == e ? void 0 : e.log_level)) && (this.logLevel = e.logLevel || e.log_level,m.params = Object.assign(Object.assign({},m.params),{
                    log_level: this.logLevel
                })),this.worker) {
                if ("u" > typeof window &&!window.Worker) throw Error("Web Worker is not supported");
                this.workerUrl = null == e ? void 0 : e.workerUrl,m.autoSendHeartbeat =!this.worker
            }
            return m
        }
        async _reconnectAuth() {
            await this._waitForAuthIfNeeded(),this.isConnected() || this.connect()
        }
    }
    var o$ = e.i(15198),
        oM = class extends Error {
            constructor(e,t) {
                super(e),this.name = "IcebergError",this.status = t.status,this.icebergType = t.icebergType,this.icebergCode = t.icebergCode,this.details = t.details,this.isCommitStateUnknown = "CommitStateUnknownException" === t.icebergType || [500,502,504].includes(t.status) && t.icebergType ?.includes("CommitState") ===!0
            }
            isNotFound() {
                return 404 === this.status
            }
            isConflict() {
                return 409 === this.status
            }
            isAuthenticationTimeout() {
                return 419 === this.status
            }
        };
    async function oL(e) {
        return e && "none"!== e.type ? "bearer" === e.type ? {
            Authorization: `Bearer ${e.token}`
        } : "header" === e.type ? {
            [e.name]: e.value
        } : "custom" === e.type ? await e.getHeaders() : {} : {}
    }

    function oD(e) {
        return e.join("\x1f")
    }
    var oU = class {
        constructor(e,t = "") {
            this.client = e,this.prefix = t
        }
        async listNamespaces(e) {
            let t = e ? {
                parent: oD(e.namespace)
            } : void 0;
            return (await this.client.request({
                method: "GET",
                path: `${this.prefix}/namespaces`,
                query: t
            })).data.namespaces.map(e => ({
                namespace: e
            }))
        }
        async createNamespace(e,t) {
            let r = {
                namespace: e.namespace,
                properties: t ?.properties
            };
            return (await this.client.request({
                method: "POST",
                path: `${this.prefix}/namespaces`,
                body: r
            })).data
        }
        async dropNamespace(e) {
            await this.client.request({
                method: "DELETE",
                path: `${this.prefix}/namespaces/${oD(e.namespace)}`
            })
        }
        async loadNamespaceMetadata(e) {
            return {
                properties: (await this.client.request({
                    method: "GET",
                    path: `${this.prefix}/namespaces/${oD(e.namespace)}`
                })).data.properties
            }
        }
        async namespaceExists(e) {
            try {
                return await this.client.request({
                    method: "HEAD",
                    path: `${this.prefix}/namespaces/${oD(e.namespace)}`
                }),!0
            } catch (e) {
                if (e instanceof oM && 404 === e.status) return!1;
                throw e
            }
        }
        async createNamespaceIfNotExists(e,t) {
            try {
                return await this.createNamespace(e,t)
            } catch (e) {
                if (e instanceof oM && 409 === e.status) return;
                throw e
            }
        }
    };

    function oB(e) {
        return e.join("\x1f")
    }
    var oV = class {
            constructor(e,t = "",r) {
                this.client = e,this.prefix = t,this.accessDelegation = r
            }
            async listTables(e) {
                return (await this.client.request({
                    method: "GET",
                    path: `${this.prefix}/namespaces/${oB(e.namespace)}/tables`
                })).data.identifiers
            }
            async createTable(e,t) {
                let r = {};
                return this.accessDelegation && (r["X-Iceberg-Access-Delegation"] = this.accessDelegation),(await this.client.request({
                    method: "POST",
                    path: `${this.prefix}/namespaces/${oB(e.namespace)}/tables`,
                    body: t,
                    headers: r
                })).data.metadata
            }
            async updateTable(e,t) {
                let r = await this.client.request({
                    method: "POST",
                    path: `${this.prefix}/namespaces/${oB(e.namespace)}/tables/${e.name}`,
                    body: t
                });
                return {
                    "metadata-location": r.data["metadata-location"],
                    metadata: r.data.metadata
                }
            }
            async dropTable(e,t) {
                await this.client.request({
                    method: "DELETE",
                    path: `${this.prefix}/namespaces/${oB(e.namespace)}/tables/${e.name}`,
                    query: {
                        purgeRequested: String(t ?.purge ??!1)
                    }
                })
            }
            async loadTable(e) {
                let t = {};
                return this.accessDelegation && (t["X-Iceberg-Access-Delegation"] = this.accessDelegation),(await this.client.request({
                    method: "GET",
                    path: `${this.prefix}/namespaces/${oB(e.namespace)}/tables/${e.name}`,
                    headers: t
                })).data.metadata
            }
            async tableExists(e) {
                let t = {};
                this.accessDelegation && (t["X-Iceberg-Access-Delegation"] = this.accessDelegation);
                try {
                    return await this.client.request({
                        method: "HEAD",
                        path: `${this.prefix}/namespaces/${oB(e.namespace)}/tables/${e.name}`,
                        headers: t
                    }),!0
                } catch (e) {
                    if (e instanceof oM && 404 === e.status) return!1;
                    throw e
                }
            }
            async createTableIfNotExists(e,t) {
                try {
                    return await this.createTable(e,t)
                } catch (r) {
                    if (r instanceof oM && 409 === r.status) return await this.loadTable({
                        namespace: e.namespace,
                        name: t.name
                    });
                    throw r
                }
            }
        },
        oF = class {
            constructor(e) {
                let t = "v1";
                e.catalogName && (t += `/${e.catalogName}`);
                const r = e.baseUrl.endsWith("/") ? e.baseUrl : `${e.baseUrl}/`;
                this.client = function(e) {
                    let t = e.fetchImpl ?? globalThis.fetch;
                    return {
                        async request({
                            method: r,
                            path: i,
                            query: s,
                            body: n,
                            headers: a
                        }) {
                            let o = function(e,t,r) {
                                    let i = new URL(t,e);
                                    if (r)
                                        for (let [e,t] of Object.entries(r)) void 0!== t && i.searchParams.set(e,t);
                                    return i.toString()
                                }(e.baseUrl,i,s),
                                l = await oL(e.auth),
                                h = await t(o,{
                                    method: r,
                                    headers: { ...n ? {
                                            "Content-Type": "application/json"
                                        } : {},
                                        ...l,
                                        ...a
                                    },
                                    body: n ? JSON.stringify(n) : void 0
                                }),
                                u = await h.text(),
                                c = (h.headers.get("content-type") || "").includes("application/json"),
                                d = c && u ? JSON.parse(u) : u;
                            if (!h.ok) {
                                let e = c ? d : void 0,
                                    t = e ?.error;
                                throw new oM(t ?.message ?? `Request failed with status ${h.status}`,{
                                    status: h.status,
                                    icebergType: t ?.type,
                                    icebergCode: t ?.code,
                                    details: e
                                })
                            }
                            return {
                                status: h.status,
                                headers: h.headers,
                                data: d
                            }
                        }
                    }
                }({
                    baseUrl: r,
                    auth: e.auth,
                    fetchImpl: e.fetch
                }),this.accessDelegation = e.accessDelegation ?.join(","),this.namespaceOps = new oU(this.client,t),this.tableOps = new oV(this.client,t,this.accessDelegation)
            }
            async listNamespaces(e) {
                return this.namespaceOps.listNamespaces(e)
            }
            async createNamespace(e,t) {
                return this.namespaceOps.createNamespace(e,t)
            }
            async dropNamespace(e) {
                await this.namespaceOps.dropNamespace(e)
            }
            async loadNamespaceMetadata(e) {
                return this.namespaceOps.loadNamespaceMetadata(e)
            }
            async listTables(e) {
                return this.tableOps.listTables(e)
            }
            async createTable(e,t) {
                return this.tableOps.createTable(e,t)
            }
            async updateTable(e,t) {
                return this.tableOps.updateTable(e,t)
            }
            async dropTable(e,t) {
                await this.tableOps.dropTable(e,t)
            }
            async loadTable(e) {
                return this.tableOps.loadTable(e)
            }
            async namespaceExists(e) {
                return this.namespaceOps.namespaceExists(e)
            }
            async tableExists(e) {
                return this.tableOps.tableExists(e)
            }
            async createNamespaceIfNotExists(e,t) {
                return this.namespaceOps.createNamespaceIfNotExists(e,t)
            }
            async createTableIfNotExists(e,t) {
                return this.tableOps.createTableIfNotExists(e,t)
            }
        };

    function oz(e) {
        return (oz = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e!== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function oq(e,t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            t && (i = i.filter(function(t) {
                return Object.getOwnPropertyDescriptor(e,t).enumerable
            })),r.push.apply(r,i)
        }
        return r
    }

    function oH(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = null!= arguments[t] ? arguments[t] : {};
            t % 2 ? oq(Object(r),!0).forEach(function(t) {
               ! function(e,t,r) {
                    var i;
                    (i = function(e,t) {
                        if ("object"!= oz(e) ||!e) return e;
                        var r = e[Symbol.toPrimitive];
                        if (void 0!== r) {
                            var i = r.call(e,t || "default");
                            if ("object"!= oz(i)) return i;
                            throw TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === t ? String : Number)(e)
                    }(t,"string"),(t = "symbol" == oz(i) ? i : i + "") in e) ? Object.defineProperty(e,t,{
                        value: r,
                        enumerable:!0,
                        configurable:!0,
                        writable:!0
                    }): e[t] = r
                }(e,t,r[t])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)) : oq(Object(r)).forEach(function(t) {
                Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))
            })
        }
        return e
    }
    var oW = class extends Error {
        constructor(e,t = "storage",r,i) {
            super(e),this.__isStorageError =!0,this.namespace = t,this.name = "vectors" === t ? "StorageVectorsError" : "StorageError",this.status = r,this.statusCode = i
        }
        toJSON() {
            return {
                name: this.name,
                message: this.message,
                status: this.status,
                statusCode: this.statusCode
            }
        }
    };

    function oK(e) {
        return "object" == typeof e && null!== e && "__isStorageError" in e
    }
    var oG = class extends oW {
            constructor(e,t,r,i = "storage") {
                super(e,i,t,r),this.name = "vectors" === i ? "StorageVectorsApiError" : "StorageApiError",this.status = t,this.statusCode = r
            }
            toJSON() {
                return oH({},super.toJSON())
            }
        },
        oJ = class extends oW {
            constructor(e,t,r = "storage") {
                super(e,r),this.name = "vectors" === r ? "StorageVectorsUnknownError" : "StorageUnknownError",this.originalError = t
            }
        };

    function oY(e,t,r) {
        let i = oH({},e),
            s = t.toLowerCase();
        for (let e of Object.keys(i)) e.toLowerCase() === s && delete i[e];
        return i[s] = r,i
    }
    let oX = e => {
            if (Array.isArray(e)) return e.map(e => oX(e));
            if ("function" == typeof e || e!== Object(e)) return e;
            let t = {};
            return Object.entries(e).forEach(([e,r]) => {
                t[e.replace(/([-_][a-z])/gi,e => e.toUpperCase().replace(/[-_]/g,""))] = oX(r)
            }),t
        },
        oQ = e => {
            if ("object" == typeof e && null!== e) {
                if ("string" == typeof e.msg) return e.msg;
                if ("string" == typeof e.message) return e.message;
                if ("string" == typeof e.error_description) return e.error_description;
                if ("string" == typeof e.error) return e.error;
                if ("object" == typeof e.error && null!== e.error) {
                    let t = e.error;
                    if ("string" == typeof t.message) return t.message
                }
            }
            return JSON.stringify(e)
        },
        oZ = async (e,t,r,i) => {
            if (null!== e && "object" == typeof e && "json" in e && "function" == typeof e.json) {
                let r = parseInt(String(e.status),10);
                Number.isFinite(r) || (r = 500),e.json().then(e => {
                    let s = (null == e ? void 0 : e.statusCode) || (null == e ? void 0 : e.code) || r + "";
                    t(new oG(oQ(e),r,s,i))
                }).catch(() => {
                    let s = r + "";
                    t(new oG(e.statusText || `HTTP ${r} error`,r,s,i))
                })
            } else t(new oJ(oQ(e),e,i))
        };
    async function o0(e,t,r,i,s,n,a) {
        return new Promise((o,l) => {
            e(r,((e,t,r,i) => {
                let s = {
                    method: e,
                    headers: (null == t ? void 0 : t.headers) || {}
                };
                if ("GET" === e || "HEAD" === e ||!i) return oH(oH({},s),r);
                if ((e => {
                        if ("object"!= typeof e || null === e) return!1;
                        let t = Object.getPrototypeOf(e);
                        return (null === t || t === Object.prototype || null === Object.getPrototypeOf(t)) &&!(Symbol.toStringTag in e) &&!(Symbol.iterator in e)
                    })(i)) {
                    var n;
                    let e,r = (null == t ? void 0 : t.headers) || {};
                    for (let [t,i] of Object.entries(r)) "content-type" === t.toLowerCase() && (e = i);
                    s.headers = oY(r,"Content-Type",null!= (n = e) ? n : "application/json"),s.body = JSON.stringify(i)
                } else s.body = i;
                return (null == t ? void 0 : t.duplex) && (s.duplex = t.duplex),oH(oH({},s),r)
            })(t,i,s,n)).then(e => {
                if (!e.ok) throw e;
                if (null == i ? void 0 : i.noResolveJson) return e;
                if ("vectors" === a) {
                    let t = e.headers.get("content-type");
                    if ("0" === e.headers.get("content-length") || 204 === e.status ||!t ||!t.includes("application/json")) return {}
                }
                return e.json()
            }).then(e => o(e)).catch(e => oZ(e,l,i,a))
        })
    }

    function o1(e = "storage") {
        return {
            get: async (t,r,i,s) => o0(t,"GET",r,i,s,void 0,e),
            post: async (t,r,i,s,n) => o0(t,"POST",r,s,n,i,e),
            put: async (t,r,i,s,n) => o0(t,"PUT",r,s,n,i,e),
            head: async (t,r,i,s) => o0(t,"HEAD",r,oH(oH({},i),{},{
                noResolveJson:!0
            }),s,void 0,e),
            remove: async (t,r,i,s,n) => o0(t,"DELETE",r,s,n,i,e)
        }
    }
    let {
        get: o2,
        post: o5,
        put: o3,
        head: o8,
        remove: o4
    } = o1("storage"),o6 = o1("vectors");
    var o9 = class {
        constructor(e,t = {},r,i = "storage") {
            this.shouldThrowOnError =!1,this.url = e,this.headers = function(e) {
                let t = {};
                for (let [r,i] of Object.entries(e)) t[r.toLowerCase()] = i;
                return t
            }(t),this.fetch = (e => e ? (...t) => e(...t) : (...e) => fetch(...e))(r),this.namespace = i
        }
        throwOnError() {
            return this.shouldThrowOnError =!0,this
        }
        setHeader(e,t) {
            return this.headers = oY(this.headers,e,t),this
        }
        async handleOperation(e) {
            try {
                return {
                    data: await e(),
                    error: null
                }
            } catch (e) {
                if (this.shouldThrowOnError) throw e;
                if (oK(e)) return {
                    data: null,
                    error: e
                };
                throw e
            }
        }
    };
    s = Symbol.toStringTag;
    var o7 = class {
        constructor(e,t) {
            this.downloadFn = e,this.shouldThrowOnError = t,this[s] = "StreamDownloadBuilder",this.promise = null
        }
        then(e,t) {
            return this.getPromise().then(e,t)
        } catch (e) {
            return this.getPromise().catch(e)
        } finally(e) {
            return this.getPromise().finally(e)
        }
        getPromise() {
            return this.promise || (this.promise = this.execute()),this.promise
        }
        async execute() {
            try {
                return {
                    data: (await this.downloadFn()).body,
                    error: null
                }
            } catch (e) {
                if (this.shouldThrowOnError) throw e;
                if (oK(e)) return {
                    data: null,
                    error: e
                };
                throw e
            }
        }
    };
    n = Symbol.toStringTag;
    var le = class {
        constructor(e,t) {
            this.downloadFn = e,this.shouldThrowOnError = t,this[n] = "BlobDownloadBuilder",this.promise = null
        }
        asStream() {
            return new o7(this.downloadFn,this.shouldThrowOnError)
        }
        then(e,t) {
            return this.getPromise().then(e,t)
        } catch (e) {
            return this.getPromise().catch(e)
        } finally(e) {
            return this.getPromise().finally(e)
        }
        getPromise() {
            return this.promise || (this.promise = this.execute()),this.promise
        }
        async execute() {
            try {
                return {
                    data: await (await this.downloadFn()).blob(),
                    error: null
                }
            } catch (e) {
                if (this.shouldThrowOnError) throw e;
                if (oK(e)) return {
                    data: null,
                    error: e
                };
                throw e
            }
        }
    };
    let lt = {
            limit: 100,
            offset: 0,
            sortBy: {
                column: "name",
                order: "asc"
            }
        },
        lr = {
            cacheControl: "3600",
            contentType: "text/plain;charset=UTF-8",
            upsert:!1
        };
    var li = class extends o9 {
        constructor(e,t = {},r,i) {
            super(e,t,i,"storage"),this.bucketId = r
        }
        async uploadOrUpdate(e,t,r,i) {
            var s = this;
            return s.handleOperation(async () => {
                let n,a = oH(oH({},lr),i),
                    o = oH(oH({},s.headers),"POST" === e && {
                        "x-upsert": String(a.upsert)
                    }),
                    l = a.metadata;
                if ("u" > typeof Blob && r instanceof Blob ? ((n = new FormData).append("cacheControl",a.cacheControl),l && n.append("metadata",s.encodeMetadata(l)),n.append("",r)) : "u" > typeof FormData && r instanceof FormData ? ((n = r).has("cacheControl") || n.append("cacheControl",a.cacheControl),l &&!n.has("metadata") && n.append("metadata",s.encodeMetadata(l))) : (n = r,o["cache-control"] = `max-age=${a.cacheControl}`,o["content-type"] = a.contentType,l && (o["x-metadata"] = s.toBase64(s.encodeMetadata(l))),("u" > typeof ReadableStream && n instanceof ReadableStream || n && "object" == typeof n && "pipe" in n && "function" == typeof n.pipe) &&!a.duplex && (a.duplex = "half")),null == i ? void 0 : i.headers)
                    for (let [e,t] of Object.entries(i.headers)) o = oY(o,e,t);
                let h = s._removeEmptyFolders(t),
                    u = s._getFinalPath(h),
                    c = await ("PUT" == e ? o3 : o5)(s.fetch,`${s.url}/object/${u}`,n,oH({
                        headers: o
                    },(null == a ? void 0 : a.duplex) ? {
                        duplex: a.duplex
                    } : {}));
                return {
                    path: h,
                    id: c.Id,
                    fullPath: c.Key
                }
            })
        }
        async upload(e,t,r) {
            return this.uploadOrUpdate("POST",e,t,r)
        }
        async uploadToSignedUrl(e,t,r,i) {
            var s = this;
            let n = s._removeEmptyFolders(e),
                a = s._getFinalPath(n),
                o = new URL(s.url + `/object/upload/sign/${a}`);
            return o.searchParams.set("token",t),s.handleOperation(async () => {
                let e,t = oH(oH({},lr),i),
                    a = oH(oH({},s.headers),{
                        "x-upsert": String(t.upsert)
                    }),
                    l = t.metadata;
                if ("u" > typeof Blob && r instanceof Blob ? ((e = new FormData).append("cacheControl",t.cacheControl),l && e.append("metadata",s.encodeMetadata(l)),e.append("",r)) : "u" > typeof FormData && r instanceof FormData ? ((e = r).has("cacheControl") || e.append("cacheControl",t.cacheControl),l &&!e.has("metadata") && e.append("metadata",s.encodeMetadata(l))) : (e = r,a["cache-control"] = `max-age=${t.cacheControl}`,a["content-type"] = t.contentType,l && (a["x-metadata"] = s.toBase64(s.encodeMetadata(l))),("u" > typeof ReadableStream && e instanceof ReadableStream || e && "object" == typeof e && "pipe" in e && "function" == typeof e.pipe) &&!t.duplex && (t.duplex = "half")),null == i ? void 0 : i.headers)
                    for (let [e,t] of Object.entries(i.headers)) a = oY(a,e,t);
                return {
                    path: n,
                    fullPath: (await o3(s.fetch,o.toString(),e,oH({
                        headers: a
                    },(null == t ? void 0 : t.duplex) ? {
                        duplex: t.duplex
                    } : {}))).Key
                }
            })
        }
        async createSignedUploadUrl(e,t) {
            var r = this;
            return r.handleOperation(async () => {
                let i = r._getFinalPath(e),
                    s = oH({},r.headers);
                (null == t ? void 0 : t.upsert) && (s["x-upsert"] = "true");
                let n = await o5(r.fetch,`${r.url}/object/upload/sign/${i}`,{},{
                        headers: s
                    }),
                    a = new URL(r.url + n.url),
                    o = a.searchParams.get("token");
                if (!o) throw new oW("No token returned by API");
                return {
                    signedUrl: a.toString(),
                    path: e,
                    token: o
                }
            })
        }
        async update(e,t,r) {
            return this.uploadOrUpdate("PUT",e,t,r)
        }
        async move(e,t,r) {
            var i = this;
            return i.handleOperation(async () => await o5(i.fetch,`${i.url}/object/move`,{
                bucketId: i.bucketId,
                sourceKey: e,
                destinationKey: t,
                destinationBucket: null == r ? void 0 : r.destinationBucket
            },{
                headers: i.headers
            }))
        }
        async copy(e,t,r) {
            var i = this;
            return i.handleOperation(async () => ({
                path: (await o5(i.fetch,`${i.url}/object/copy`,{
                    bucketId: i.bucketId,
                    sourceKey: e,
                    destinationKey: t,
                    destinationBucket: null == r ? void 0 : r.destinationBucket
                },{
                    headers: i.headers
                })).Key
            }))
        }
        async createSignedUrl(e,t,r) {
            var i = this;
            return i.handleOperation(async () => {
                let s = i._getFinalPath(e),
                    n = "object" == typeof(null == r ? void 0 : r.transform) && null!== r.transform && Object.keys(r.transform).length > 0,
                    a = await o5(i.fetch,`${i.url}/object/sign/${s}`,oH({
                        expiresIn: t
                    },n ? {
                        transform: r.transform
                    } : {}),{
                        headers: i.headers
                    }),
                    o = new URLSearchParams;
                (null == r ? void 0 : r.download) && o.set("download",!0 === r.download ? "" : r.download),(null == r ? void 0 : r.cacheNonce)!= null && o.set("cacheNonce",String(r.cacheNonce));
                let l = o.toString();
                return {
                    signedUrl: encodeURI(`${i.url}${a.signedURL}${l?`&${l}`:""}`)
                }
            })
        }
        async createSignedUrls(e,t,r) {
            var i = this;
            return i.handleOperation(async () => {
                let s = await o5(i.fetch,`${i.url}/object/sign/${i.bucketId}`,{
                        expiresIn: t,
                        paths: e
                    },{
                        headers: i.headers
                    }),
                    n = new URLSearchParams;
                (null == r ? void 0 : r.download) && n.set("download",!0 === r.download ? "" : r.download),(null == r ? void 0 : r.cacheNonce)!= null && n.set("cacheNonce",String(r.cacheNonce));
                let a = n.toString();
                return s.map(e => oH(oH({},e),{},{
                    signedUrl: e.signedURL ? encodeURI(`${i.url}${e.signedURL}${a?`&${a}`:""}`) : null
                }))
            })
        }
        download(e,t,r) {
            let i = "object" == typeof(null == t ? void 0 : t.transform) && null!== t.transform && Object.keys(t.transform).length > 0 ? "render/image/authenticated" : "object",
                s = new URLSearchParams;
            (null == t ? void 0 : t.transform) && this.applyTransformOptsToQuery(s,t.transform),(null == t ? void 0 : t.cacheNonce)!= null && s.set("cacheNonce",String(t.cacheNonce));
            let n = s.toString(),
                a = this._getFinalPath(e);
            return new le(() => o2(this.fetch,`${this.url}/${i}/${a}${n?`?${n}`:""}`,{
                headers: this.headers,
                noResolveJson:!0
            },r),this.shouldThrowOnError)
        }
        async info(e) {
            var t = this;
            let r = t._getFinalPath(e);
            return t.handleOperation(async () => oX(await o2(t.fetch,`${t.url}/object/info/${r}`,{
                headers: t.headers
            })))
        }
        async exists(e) {
            var t;
            let r = this._getFinalPath(e);
            try {
                return await o8(this.fetch,`${this.url}/object/${r}`,{
                    headers: this.headers
                }),{
                    data:!0,
                    error: null
                }
            } catch (e) {
                if (this.shouldThrowOnError) throw e;
                if (oK(e)) {
                    let r = e instanceof oG ? e.status : e instanceof oJ ? null == (t = e.originalError) ? void 0 : t.status : void 0;
                    if (void 0!== r && [400,404].includes(r)) return {
                        data:!1,
                        error: e
                    }
                }
                throw e
            }
        }
        getPublicUrl(e,t) {
            let r = this._getFinalPath(e),
                i = new URLSearchParams;
            (null == t ? void 0 : t.download) && i.set("download",!0 === t.download ? "" : t.download),(null == t ? void 0 : t.transform) && this.applyTransformOptsToQuery(i,t.transform),(null == t ? void 0 : t.cacheNonce)!= null && i.set("cacheNonce",String(t.cacheNonce));
            let s = i.toString(),
                n = "object" == typeof(null == t ? void 0 : t.transform) && null!== t.transform && Object.keys(t.transform).length > 0 ? "render/image" : "object";
            return {
                data: {
                    publicUrl: encodeURI(`${this.url}/${n}/public/${r}`) + (s ? `?${s}` : "")
                }
            }
        }
        async remove(e) {
            var t = this;
            return t.handleOperation(async () => await o4(t.fetch,`${t.url}/object/${t.bucketId}`,{
                prefixes: e
            },{
                headers: t.headers
            }))
        }
        async list(e,t,r) {
            var i = this;
            return i.handleOperation(async () => {
                let s = oH(oH(oH({},lt),t),{},{
                    prefix: e || ""
                });
                return await o5(i.fetch,`${i.url}/object/list/${i.bucketId}`,s,{
                    headers: i.headers
                },r)
            })
        }
        async listV2(e,t) {
            var r = this;
            return r.handleOperation(async () => {
                let i = oH({},e);
                return await o5(r.fetch,`${r.url}/object/list-v2/${r.bucketId}`,i,{
                    headers: r.headers
                },t)
            })
        }
        encodeMetadata(e) {
            return JSON.stringify(e)
        }
        toBase64(e) {
            return void 0!== o$.Buffer ? o$.Buffer.from(e).toString("base64") : btoa(e)
        }
        _getFinalPath(e) {
            return `${this.bucketId}/${e.replace(/^\/+/,"")}`
        }
        _removeEmptyFolders(e) {
            return e.replace(/^\/|\/$/g,"").replace(/\/+/g,"/")
        }
        applyTransformOptsToQuery(e,t) {
            return t.width && e.set("width",t.width.toString()),t.height && e.set("height",t.height.toString()),t.resize && e.set("resize",t.resize),t.format && e.set("format",t.format),t.quality && e.set("quality",t.quality.toString()),e
        }
    };
    let ls = {
        "X-Client-Info": "storage-js/2.106.2"
    };
    var ln = class extends o9 {
            constructor(e,t = {},r,i) {
                const s = new URL(e);
                (null == i ? void 0 : i.useNewHostname) && /supabase\.(co|in|red)$/.test(s.hostname) &&!s.hostname.includes("storage.supabase.") && (s.hostname = s.hostname.replace("supabase.","storage.supabase.")),super(s.href.replace(/\/$/,""),oH(oH({},ls),t),r,"storage")
            }
            async listBuckets(e) {
                var t = this;
                return t.handleOperation(async () => {
                    let r = t.listBucketOptionsToQueryString(e);
                    return await o2(t.fetch,`${t.url}/bucket${r}`,{
                        headers: t.headers
                    })
                })
            }
            async getBucket(e) {
                var t = this;
                return t.handleOperation(async () => await o2(t.fetch,`${t.url}/bucket/${e}`,{
                    headers: t.headers
                }))
            }
            async createBucket(e,t = {
                public:!1
            }) {
                var r = this;
                return r.handleOperation(async () => await o5(r.fetch,`${r.url}/bucket`,{
                    id: e,
                    name: e,
                    type: t.type,
                    public: t.public,
                    file_size_limit: t.fileSizeLimit,
                    allowed_mime_types: t.allowedMimeTypes
                },{
                    headers: r.headers
                }))
            }
            async updateBucket(e,t) {
                var r = this;
                return r.handleOperation(async () => await o3(r.fetch,`${r.url}/bucket/${e}`,{
                    id: e,
                    name: e,
                    public: t.public,
                    file_size_limit: t.fileSizeLimit,
                    allowed_mime_types: t.allowedMimeTypes
                },{
                    headers: r.headers
                }))
            }
            async emptyBucket(e) {
                var t = this;
                return t.handleOperation(async () => await o5(t.fetch,`${t.url}/bucket/${e}/empty`,{},{
                    headers: t.headers
                }))
            }
            async deleteBucket(e) {
                var t = this;
                return t.handleOperation(async () => await o4(t.fetch,`${t.url}/bucket/${e}`,{},{
                    headers: t.headers
                }))
            }
            listBucketOptionsToQueryString(e) {
                let t = {};
                return e && ("limit" in e && (t.limit = String(e.limit)),"offset" in e && (t.offset = String(e.offset)),e.search && (t.search = e.search),e.sortColumn && (t.sortColumn = e.sortColumn),e.sortOrder && (t.sortOrder = e.sortOrder)),Object.keys(t).length > 0 ? "?" + new URLSearchParams(t).toString() : ""
            }
        },
        la = class extends o9 {
            constructor(e,t = {},r) {
                super(e.replace(/\/$/,""),oH(oH({},ls),t),r,"storage")
            }
            async createBucket(e) {
                var t = this;
                return t.handleOperation(async () => await o5(t.fetch,`${t.url}/bucket`,{
                    name: e
                },{
                    headers: t.headers
                }))
            }
            async listBuckets(e) {
                var t = this;
                return t.handleOperation(async () => {
                    let r = new URLSearchParams;
                    (null == e ? void 0 : e.limit)!== void 0 && r.set("limit",e.limit.toString()),(null == e ? void 0 : e.offset)!== void 0 && r.set("offset",e.offset.toString()),(null == e ? void 0 : e.sortColumn) && r.set("sortColumn",e.sortColumn),(null == e ? void 0 : e.sortOrder) && r.set("sortOrder",e.sortOrder),(null == e ? void 0 : e.search) && r.set("search",e.search);
                    let i = r.toString(),
                        s = i ? `${t.url}/bucket?${i}` : `${t.url}/bucket`;
                    return await o2(t.fetch,s,{
                        headers: t.headers
                    })
                })
            }
            async deleteBucket(e) {
                var t = this;
                return t.handleOperation(async () => await o4(t.fetch,`${t.url}/bucket/${e}`,{},{
                    headers: t.headers
                }))
            }
            from(e) {
                var t = this;
                if (!(!(!e || "string"!= typeof e || 0 === e.length || e.length > 100 || e.trim()!== e || e.includes("/") || e.includes("\\")) && /^[\w!.\*'() &$@=;:+,?-]+$/.test(e))) throw new oW("Invalid bucket name: File,folder,and bucket names must follow AWS object key naming guidelines and should avoid the use of any other characters.");
                let r = new oF({
                        baseUrl: this.url,
                        catalogName: e,
                        auth: {
                            type: "custom",
                            getHeaders: async () => t.headers
                        },
                        fetch: this.fetch
                    }),
                    i = this.shouldThrowOnError;
                return new Proxy(r,{
                    get(e,t) {
                        let r = e[t];
                        return "function"!= typeof r ? r : async (...t) => {
                            try {
                                return {
                                    data: await r.apply(e,t),
                                    error: null
                                }
                            } catch (e) {
                                if (i) throw e;
                                return {
                                    data: null,
                                    error: e
                                }
                            }
                        }
                    }
                })
            }
        },
        lo = class extends o9 {
            constructor(e,t = {},r) {
                super(e.replace(/\/$/,""),oH(oH({},ls),{},{
                    "Content-Type": "application/json"
                },t),r,"vectors")
            }
            async createIndex(e) {
                var t = this;
                return t.handleOperation(async () => await o6.post(t.fetch,`${t.url}/CreateIndex`,e,{
                    headers: t.headers
                }) || {})
            }
            async getIndex(e,t) {
                var r = this;
                return r.handleOperation(async () => await o6.post(r.fetch,`${r.url}/GetIndex`,{
                    vectorBucketName: e,
                    indexName: t
                },{
                    headers: r.headers
                }))
            }
            async listIndexes(e) {
                var t = this;
                return t.handleOperation(async () => await o6.post(t.fetch,`${t.url}/ListIndexes`,e,{
                    headers: t.headers
                }))
            }
            async deleteIndex(e,t) {
                var r = this;
                return r.handleOperation(async () => await o6.post(r.fetch,`${r.url}/DeleteIndex`,{
                    vectorBucketName: e,
                    indexName: t
                },{
                    headers: r.headers
                }) || {})
            }
        },
        ll = class extends o9 {
            constructor(e,t = {},r) {
                super(e.replace(/\/$/,""),oH(oH({},ls),{},{
                    "Content-Type": "application/json"
                },t),r,"vectors")
            }
            async putVectors(e) {
                var t = this;
                if (e.vectors.length < 1 || e.vectors.length > 500) throw Error("Vector batch size must be between 1 and 500 items");
                return t.handleOperation(async () => await o6.post(t.fetch,`${t.url}/PutVectors`,e,{
                    headers: t.headers
                }) || {})
            }
            async getVectors(e) {
                var t = this;
                return t.handleOperation(async () => await o6.post(t.fetch,`${t.url}/GetVectors`,e,{
                    headers: t.headers
                }))
            }
            async listVectors(e) {
                var t = this;
                if (void 0!== e.segmentCount) {
                    if (e.segmentCount < 1 || e.segmentCount > 16) throw Error("segmentCount must be between 1 and 16");
                    if (void 0!== e.segmentIndex && (e.segmentIndex < 0 || e.segmentIndex >= e.segmentCount)) throw Error(`segmentIndex must be between 0 and ${e.segmentCount-1}`)
                }
                return t.handleOperation(async () => await o6.post(t.fetch,`${t.url}/ListVectors`,e,{
                    headers: t.headers
                }))
            }
            async queryVectors(e) {
                var t = this;
                return t.handleOperation(async () => await o6.post(t.fetch,`${t.url}/QueryVectors`,e,{
                    headers: t.headers
                }))
            }
            async deleteVectors(e) {
                var t = this;
                if (e.keys.length < 1 || e.keys.length > 500) throw Error("Keys batch size must be between 1 and 500 items");
                return t.handleOperation(async () => await o6.post(t.fetch,`${t.url}/DeleteVectors`,e,{
                    headers: t.headers
                }) || {})
            }
        },
        lh = class extends o9 {
            constructor(e,t = {},r) {
                super(e.replace(/\/$/,""),oH(oH({},ls),{},{
                    "Content-Type": "application/json"
                },t),r,"vectors")
            }
            async createBucket(e) {
                var t = this;
                return t.handleOperation(async () => await o6.post(t.fetch,`${t.url}/CreateVectorBucket`,{
                    vectorBucketName: e
                },{
                    headers: t.headers
                }) || {})
            }
            async getBucket(e) {
                var t = this;
                return t.handleOperation(async () => await o6.post(t.fetch,`${t.url}/GetVectorBucket`,{
                    vectorBucketName: e
                },{
                    headers: t.headers
                }))
            }
            async listBuckets(e = {}) {
                var t = this;
                return t.handleOperation(async () => await o6.post(t.fetch,`${t.url}/ListVectorBuckets`,e,{
                    headers: t.headers
                }))
            }
            async deleteBucket(e) {
                var t = this;
                return t.handleOperation(async () => await o6.post(t.fetch,`${t.url}/DeleteVectorBucket`,{
                    vectorBucketName: e
                },{
                    headers: t.headers
                }) || {})
            }
        },
        lu = class extends lh {
            constructor(e,t = {}) {
                super(e,t.headers || {},t.fetch)
            }
            from(e) {
                return new lc(this.url,this.headers,e,this.fetch)
            }
            async createBucket(e) {
                return super.createBucket.call(this,e)
            }
            async getBucket(e) {
                return super.getBucket.call(this,e)
            }
            async listBuckets(e = {}) {
                return super.listBuckets.call(this,e)
            }
            async deleteBucket(e) {
                return super.deleteBucket.call(this,e)
            }
        },
        lc = class extends lo {
            constructor(e,t,r,i) {
                super(e,t,i),this.vectorBucketName = r
            }
            async createIndex(e) {
                return super.createIndex.call(this,oH(oH({},e),{},{
                    vectorBucketName: this.vectorBucketName
                }))
            }
            async listIndexes(e = {}) {
                return super.listIndexes.call(this,oH(oH({},e),{},{
                    vectorBucketName: this.vectorBucketName
                }))
            }
            async getIndex(e) {
                return super.getIndex.call(this,this.vectorBucketName,e)
            }
            async deleteIndex(e) {
                return super.deleteIndex.call(this,this.vectorBucketName,e)
            }
            index(e) {
                return new ld(this.url,this.headers,this.vectorBucketName,e,this.fetch)
            }
        },
        ld = class extends ll {
            constructor(e,t,r,i,s) {
                super(e,t,s),this.vectorBucketName = r,this.indexName = i
            }
            async putVectors(e) {
                return super.putVectors.call(this,oH(oH({},e),{},{
                    vectorBucketName: this.vectorBucketName,
                    indexName: this.indexName
                }))
            }
            async getVectors(e) {
                return super.getVectors.call(this,oH(oH({},e),{},{
                    vectorBucketName: this.vectorBucketName,
                    indexName: this.indexName
                }))
            }
            async listVectors(e = {}) {
                return super.listVectors.call(this,oH(oH({},e),{},{
                    vectorBucketName: this.vectorBucketName,
                    indexName: this.indexName
                }))
            }
            async queryVectors(e) {
                return super.queryVectors.call(this,oH(oH({},e),{},{
                    vectorBucketName: this.vectorBucketName,
                    indexName: this.indexName
                }))
            }
            async deleteVectors(e) {
                return super.deleteVectors.call(this,oH(oH({},e),{},{
                    vectorBucketName: this.vectorBucketName,
                    indexName: this.indexName
                }))
            }
        },
        lp = class extends ln {
            constructor(e,t = {},r,i) {
                super(e,t,r,i)
            }
            from(e) {
                return new li(this.url,this.headers,e,this.fetch)
            }
            get vectors() {
                return new lu(this.url + "/vector",{
                    headers: this.headers,
                    fetch: this.fetch
                })
            }
            get analytics() {
                return new la(this.url + "/iceberg",this.headers,this.fetch)
            }
        };
    let lf = "2.106.2",
        lm = {
            "X-Client-Info": `gotrue-js/${lf}`
        },
        lg = "X-Supabase-Api-Version",
        ly = {
            "2024-01-01": {
                timestamp: Date.parse("2024-01-01T00:00:00.0Z"),
                name: "2024-01-01"
            }
        },
        lv = /^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}$|[a-z0-9_-]{2}$)$/i;
    class lw extends Error {
        constructor(e,t,r) {
            super(e),this.__isAuthError =!0,this.name = "AuthError",this.status = t,this.code = r
        }
        toJSON() {
            return {
                name: this.name,
                message: this.message,
                status: this.status,
                code: this.code
            }
        }
    }

    function lb(e) {
        return "object" == typeof e && null!== e && "__isAuthError" in e
    }
    class lx extends lw {
        constructor(e,t,r) {
            super(e,t,r),this.name = "AuthApiError",this.status = t,this.code = r
        }
    }
    class lk extends lw {
        constructor(e,t) {
            super(e),this.name = "AuthUnknownError",this.originalError = t
        }
    }
    class lS extends lw {
        constructor(e,t,r,i) {
            super(e,r,i),this.name = t,this.status = r
        }
    }
    class l_ extends lS {
        constructor() {
            super("Auth session missing!","AuthSessionMissingError",400,void 0)
        }
    }

    function lE(e) {
        return lb(e) && "AuthSessionMissingError" === e.name
    }
    class lT extends lS {
        constructor() {
            super("Auth session or user missing","AuthInvalidTokenResponseError",500,void 0)
        }
    }
    class lA extends lS {
        constructor(e) {
            super(e,"AuthInvalidCredentialsError",400,void 0)
        }
    }
    class lR extends lS {
        constructor(e,t = null) {
            super(e,"AuthImplicitGrantRedirectError",500,void 0),this.details = null,this.details = t
        }
        toJSON() {
            return Object.assign(Object.assign({},super.toJSON()),{
                details: this.details
            })
        }
    }
    class lP extends lS {
        constructor(e,t = null) {
            super(e,"AuthPKCEGrantCodeExchangeError",500,void 0),this.details = null,this.details = t
        }
        toJSON() {
            return Object.assign(Object.assign({},super.toJSON()),{
                details: this.details
            })
        }
    }
    class lj extends lS {
        constructor() {
            super("PKCE code verifier not found in storage.This can happen if the auth flow was initiated in a different browser or device,or if the storage was cleared.For SSR frameworks (Next.js,SvelteKit,etc.),use @supabase/ssr on both the server and client to store the code verifier in cookies.","AuthPKCECodeVerifierMissingError",400,"pkce_code_verifier_not_found")
        }
    }
    class lC extends lS {
        constructor(e,t) {
            super(e,"AuthRetryableFetchError",t,void 0)
        }
    }

    function lO(e) {
        return lb(e) && "AuthRetryableFetchError" === e.name
    }
    class lN extends lS {
        constructor(e,t,r) {
            super(e,"AuthWeakPasswordError",t,"weak_password"),this.reasons = r
        }
        toJSON() {
            return Object.assign(Object.assign({},super.toJSON()),{
                reasons: this.reasons
            })
        }
    }
    class lI extends lS {
        constructor(e) {
            super(e,"AuthInvalidJwtError",400,"invalid_jwt")
        }
    }
    let l$ = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".split(""),
        lM = " 	\n\r=".split(""),
        lL = (() => {
            let e = Array(128);
            for (let t = 0; t < e.length; t += 1) e[t] = -1;
            for (let t = 0; t < lM.length; t += 1) e[lM[t].charCodeAt(0)] = -2;
            for (let t = 0; t < l$.length; t += 1) e[l$[t].charCodeAt(0)] = t;
            return e
        })();

    function lD(e,t,r) {
        if (null!== e)
            for (t.queue = t.queue << 8 | e,t.queuedBits += 8; t.queuedBits >= 6;) r(l$[t.queue >> t.queuedBits - 6 & 63]),t.queuedBits -= 6;
        else if (t.queuedBits > 0)
            for (t.queue = t.queue << 6 - t.queuedBits,t.queuedBits = 6; t.queuedBits >= 6;) r(l$[t.queue >> t.queuedBits - 6 & 63]),t.queuedBits -= 6
    }

    function lU(e,t,r) {
        let i = lL[e];
        if (i > -1)
            for (t.queue = t.queue << 6 | i,t.queuedBits += 6; t.queuedBits >= 8;) r(t.queue >> t.queuedBits - 8 & 255),t.queuedBits -= 8;
        else if (-2 === i) return;
        else throw Error(`Invalid Base64-URL character "${String.fromCharCode(e)}"`)
    }

    function lB(e) {
        let t = [],
            r = e => {
                t.push(String.fromCodePoint(e))
            },
            i = {
                utf8seq: 0,
                codepoint: 0
            },
            s = {
                queue: 0,
                queuedBits: 0
            },
            n = e => {
               ! function(e,t,r) {
                    if (0 === t.utf8seq) {
                        if (e <= 127) return r(e);
                        for (let r = 1; r < 6; r += 1)
                            if ((e >> 7 - r & 1) == 0) {
                                t.utf8seq = r;
                                break
                            }
                        if (2 === t.utf8seq) t.codepoint = 31 & e;
                        else if (3 === t.utf8seq) t.codepoint = 15 & e;
                        else if (4 === t.utf8seq) t.codepoint = 7 & e;
                        else throw Error("Invalid UTF-8 sequence");
                        t.utf8seq -= 1
                    } else if (t.utf8seq > 0) {
                        if (e <= 127) throw Error("Invalid UTF-8 sequence");
                        t.codepoint = t.codepoint << 6 | 63 & e,t.utf8seq -= 1,0 === t.utf8seq && r(t.codepoint)
                    }
                }(e,i,r)
            };
        for (let t = 0; t < e.length; t += 1) lU(e.charCodeAt(t),s,n);
        return t.join("")
    }

    function lV(e) {
        let t = [],
            r = {
                queue: 0,
                queuedBits: 0
            },
            i = e => {
                t.push(e)
            };
        for (let t = 0; t < e.length; t += 1) lU(e.charCodeAt(t),r,i);
        return new Uint8Array(t)
    }

    function lF(e) {
        let t = [],
            r = {
                queue: 0,
                queuedBits: 0
            },
            i = e => {
                t.push(e)
            };
        return e.forEach(e => lD(e,r,i)),lD(null,r,i),t.join("")
    }
    let lz = () => "u" > typeof window && "u" > typeof document,
        lq = {
            tested:!1,
            writable:!1
        },
        lH = () => {
            if (!lz()) return!1;
            try {
                if ("object"!= typeof globalThis.localStorage) return!1
            } catch (e) {
                return!1
            }
            if (lq.tested) return lq.writable;
            let e = `lswt-${Math.random()}${Math.random()}`;
            try {
                globalThis.localStorage.setItem(e,e),globalThis.localStorage.removeItem(e),lq.tested =!0,lq.writable =!0
            } catch (e) {
                lq.tested =!0,lq.writable =!1
            }
            return lq.writable
        },
        lW = e => e ? (...t) => e(...t) : (...e) => fetch(...e),
        lK = async (e,t,r) => {
            await e.setItem(t,JSON.stringify(r))
        },
        lG = async (e,t) => {
            let r = await e.getItem(t);
            if (!r) return null;
            try {
                return JSON.parse(r)
            } catch (e) {
                return null
            }
        },
        lJ = async (e,t) => {
            await e.removeItem(t)
        };
    class lY {
        constructor() {
            this.promise = new lY.promiseConstructor((e,t) => {
                this.resolve = e,this.reject = t
            })
        }
    }

    function lX(e) {
        let t = e.split(".");
        if (3!== t.length) throw new lI("Invalid JWT structure");
        for (let e = 0; e < t.length; e++)
            if (!lv.test(t[e])) throw new lI("JWT not in base64url format");
        return {
            header: JSON.parse(lB(t[0])),
            payload: JSON.parse(lB(t[1])),
            signature: lV(t[2]),
            raw: {
                header: t[0],
                payload: t[1]
            }
        }
    }
    async function lQ(e) {
        return await new Promise(t => {
            setTimeout(() => t(null),e)
        })
    }

    function lZ(e) {
        return ("0" + e.toString(16)).substr(-2)
    }
    async function l0(e) {
        let t = new TextEncoder().encode(e);
        return Array.from(new Uint8Array(await crypto.subtle.digest("SHA-256",t))).map(e => String.fromCharCode(e)).join("")
    }
    async function l1(e) {
        return "u" > typeof crypto && void 0!== crypto.subtle && "u" > typeof TextEncoder ? btoa(await l0(e)).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"") : (console.warn("WebCrypto API is not supported.Code challenge method will default to use plain instead of sha256."),e)
    }
    async function l2(e,t,r =!1) {
        let i = function() {
                let e = new Uint32Array(56);
                if ("u" < typeof crypto) {
                    let e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~",
                        t = e.length,
                        r = "";
                    for (let i = 0; i < 56; i++) r += e.charAt(Math.floor(Math.random() * t));
                    return r
                }
                return crypto.getRandomValues(e),Array.from(e,lZ).join("")
            }(),
            s = i;
        r && (s += "/recovery"),await lK(e,`${t}-code-verifier`,s);
        let n = await l1(i),
            a = i === n ? "plain" : "s256";
        return [n,a]
    }
    lY.promiseConstructor = Promise;
    let l5 = /^2[0-9]{3}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/i,
        l3 = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;

    function l8(e) {
        if (!l3.test(e)) throw Error("@supabase/auth-js: Expected parameter to be UUID but is not")
    }

    function l4(e) {
        if (!e.passkey) throw Error("@supabase/auth-js: the passkey API is experimental and disabled by default.Enable it by passing `auth: { experimental: { passkey: true } }` to createClient (or to the GoTrueClient constructor).")
    }

    function l6() {
        return new Proxy({},{
            get: (e,t) => {
                if ("__isUserNotAvailableProxy" === t) return!0;
                if ("symbol" == typeof t) {
                    let e = t.toString();
                    if ("Symbol(Symbol.toPrimitive)" === e || "Symbol(Symbol.toStringTag)" === e || "Symbol(util.inspect.custom)" === e) return
                }
                throw Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage.Accessing the "${t}" property of the session object is not supported.Please use getUser() instead.`)
            },
            set: (e,t) => {
                throw Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage.Setting the "${t}" property of the session object is not supported.Please use getUser() to fetch a user object you can manipulate.`)
            },
            deleteProperty: (e,t) => {
                throw Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage.Deleting the "${t}" property of the session object is not supported.Please use getUser() to fetch a user object you can manipulate.`)
            }
        })
    }

    function l9(e) {
        return JSON.parse(JSON.stringify(e))
    }
    let l7 = e => {
            if ("object" == typeof e && null!== e) {
                if ("string" == typeof e.msg) return e.msg;
                if ("string" == typeof e.message) return e.message;
                if ("string" == typeof e.error_description) return e.error_description;
                if ("string" == typeof e.error) return e.error
            }
            return JSON.stringify(e)
        },
        he = [502,503,504,520,521,522,523,524,530];
    async function ht(e) {
        var t;
        let r,i;
        if (!("object" == typeof e && null!== e && "status" in e && "ok" in e && "json" in e && "function" == typeof e.json)) throw new lC(l7(e),0);
        if (he.includes(e.status)) throw new lC(l7(e),e.status);
        try {
            r = await e.json()
        } catch (e) {
            throw new lk(l7(e),e)
        }
        let s = function(e) {
            let t = e.headers.get(lg);
            if (!t ||!t.match(l5)) return null;
            try {
                return new Date(`${t}T00:00:00.0Z`)
            } catch (e) {
                return null
            }
        }(e);
        if (s && s.getTime() >= ly["2024-01-01"].timestamp && "object" == typeof r && r && "string" == typeof r.code ? i = r.code : "object" == typeof r && r && "string" == typeof r.error_code && (i = r.error_code),i) {
            if ("weak_password" === i) throw new lN(l7(r),e.status,(null == (t = r.weak_password) ? void 0 : t.reasons) || []);
            else if ("session_not_found" === i) throw new l_
        } else if ("object" == typeof r && r && "object" == typeof r.weak_password && r.weak_password && Array.isArray(r.weak_password.reasons) && r.weak_password.reasons.length && r.weak_password.reasons.reduce((e,t) => e && "string" == typeof t,!0)) throw new lN(l7(r),e.status,r.weak_password.reasons);
        throw new lx(l7(r),e.status || 500,i)
    }
    async function hr(e,t,r,i) {
        var s;
        let n = Object.assign({},null == i ? void 0 : i.headers);
        n[lg] || (n[lg] = ly["2024-01-01"].name),(null == i ? void 0 : i.jwt) && (n.Authorization = `Bearer ${i.jwt}`);
        let a = null!= (s = null == i ? void 0 : i.query) ? s : {};
        (null == i ? void 0 : i.redirectTo) && (a.redirect_to = i.redirectTo);
        let o = Object.keys(a).length ? "?" + new URLSearchParams(a).toString() : "",
            l = await hi(e,t,r + o,{
                headers: n,
                noResolveJson: null == i ? void 0 : i.noResolveJson
            },{},null == i ? void 0 : i.body);
        return (null == i ? void 0 : i.xform) ? null == i ? void 0 : i.xform(l) : {
            data: Object.assign({},l),
            error: null
        }
    }
    async function hi(e,t,r,i,s,n) {
        let a,o,l = (o = {
            method: t,
            headers: (null == i ? void 0 : i.headers) || {}
        },"GET" === t ? o : (o.headers = Object.assign({
            "Content-Type": "application/json;charset=UTF-8"
        },null == i ? void 0 : i.headers),o.body = JSON.stringify(n),Object.assign(Object.assign({},o),s)));
        try {
            a = await e(r,Object.assign({},l))
        } catch (e) {
            throw console.error(e),new lC(l7(e),0)
        }
        if (a.ok || await ht(a),null == i ? void 0 : i.noResolveJson) return a;
        try {
            return await a.json()
        } catch (e) {
            await ht(e)
        }
    }

    function hs(e) {
        var t,r,i;
        let s = null;
        (i = e).access_token && i.refresh_token && i.expires_in && (s = Object.assign({},e),e.expires_at || (s.expires_at = (r = e.expires_in,Math.round(Date.now() / 1e3) + r)));
        return {
            data: {
                session: s,
                user: null!= (t = e.user) ? t : "string" == typeof(null == e ? void 0 : e.id) ? e : null
            },
            error: null
        }
    }

    function hn(e) {
        let t = hs(e);
        return!t.error && e.weak_password && "object" == typeof e.weak_password && Array.isArray(e.weak_password.reasons) && e.weak_password.reasons.length && e.weak_password.message && "string" == typeof e.weak_password.message && e.weak_password.reasons.reduce((e,t) => e && "string" == typeof t,!0) && (t.data.weak_password = e.weak_password),t
    }

    function ha(e) {
        var t;
        return {
            data: {
                user: null!= (t = e.user) ? t : e
            },
            error: null
        }
    }

    function ho(e) {
        return {
            data: e,
            error: null
        }
    }

    function hl(e) {
        let {
            action_link: t,
            email_otp: r,
            hashed_token: i,
            redirect_to: s,
            verification_type: n
        } = e;
        return {
            data: {
                properties: {
                    action_link: t,
                    email_otp: r,
                    hashed_token: i,
                    redirect_to: s,
                    verification_type: n
                },
                user: Object.assign({},a$(e,["action_link","email_otp","hashed_token","redirect_to","verification_type"]))
            },
            error: null
        }
    }

    function hh(e) {
        return e
    }
    let hu = ["global","local","others"];
    class hc {
        _encodePathSegment(e) {
            if ("." === e || ".." === e) throw new lw("Invalid path segment");
            return encodeURIComponent(e)
        }
        constructor({
            url: e = "",
            headers: t = {},
            fetch: r,
            experimental: i
        }) {
            this.url = e,this.headers = t,this.fetch = lW(r),this.experimental = null!= i ? i : {},this.mfa = {
                listFactors: this._listFactors.bind(this),
                deleteFactor: this._deleteFactor.bind(this)
            },this.oauth = {
                listClients: this._listOAuthClients.bind(this),
                createClient: this._createOAuthClient.bind(this),
                getClient: this._getOAuthClient.bind(this),
                updateClient: this._updateOAuthClient.bind(this),
                deleteClient: this._deleteOAuthClient.bind(this),
                regenerateClientSecret: this._regenerateOAuthClientSecret.bind(this)
            },this.customProviders = {
                listProviders: this._listCustomProviders.bind(this),
                createProvider: this._createCustomProvider.bind(this),
                getProvider: this._getCustomProvider.bind(this),
                updateProvider: this._updateCustomProvider.bind(this),
                deleteProvider: this._deleteCustomProvider.bind(this)
            },this.passkey = {
                listPasskeys: this._adminListPasskeys.bind(this),
                deletePasskey: this._adminDeletePasskey.bind(this)
            }
        }
        async signOut(e,t = hu[0]) {
            if (0 > hu.indexOf(t)) throw Error(`@supabase/auth-js: Parameter scope must be one of ${hu.join(",")}`);
            try {
                return await hr(this.fetch,"POST",`${this.url}/logout?scope=${t}`,{
                    headers: this.headers,
                    jwt: e,
                    noResolveJson:!0
                }),{
                    data: null,
                    error: null
                }
            } catch (e) {
                if (lb(e)) return {
                    data: null,
                    error: e
                };
                throw e
            }
        }
        async inviteUserByEmail(e,t = {}) {
            try {
                return await hr(this.fetch,"POST",`${this.url}/invite`,{
                    body: {
                        email: e,
                        data: t.data
                    },
                    headers: this.headers,
                    redirectTo: t.redirectTo,
                    xform: ha
                })
            } catch (e) {
                if (lb(e)) return {
                    data: {
                        user: null
                    },
                    error: e
                };
                throw e
            }
        }
        async generateLink(e) {
            try {
                let {
                    options: t
                } = e,r = a$(e,["options"]),i = Object.assign(Object.assign({},r),t);
                return "newEmail" in r && (i.new_email = null == r ? void 0 : r.newEmail,delete i.newEmail),await hr(this.fetch,"POST",`${this.url}/admin/generate_link`,{
                    body: i,
                    headers: this.headers,
                    xform: hl,
                    redirectTo: null == t ? void 0 : t.redirectTo
                })
            } catch (e) {
                if (lb(e)) return {
                    data: {
                        properties: null,
                        user: null
                    },
                    error: e
                };
                throw e
            }
        }
        async createUser(e) {
            try {
                return await hr(this.fetch,"POST",`${this.url}/admin/users`,{
                    body: e,
                    headers: this.headers,
                    xform: ha
                })
            } catch (e) {
                if (lb(e)) return {
                    data: {
                        user: null
                    },
                    error: e
                };
                throw e
            }
        }
        async listUsers(e) {
            var t,r,i,s,n,a,o;
            try {
                let l = {
                        nextPage: null,
                        lastPage: 0,
                        total: 0
                    },
                    h = await hr(this.fetch,"GET",`${this.url}/admin/users`,{
                        headers: this.headers,
                        noResolveJson:!0,
                        query: {
                            page: null!= (r = null == (t = null == e ? void 0 : e.page) ? void 0 : t.toString()) ? r : "",
                            per_page: null!= (s = null == (i = null == e ? void 0 : e.perPage) ? void 0 : i.toString()) ? s : ""
                        },
                        xform: hh
                    });
                if (h.error) throw h.error;
                let u = await h.json(),
                    c = null!= (n = h.headers.get("x-total-count")) ? n : 0,
                    d = null!= (o = null == (a = h.headers.get("link")) ? void 0 : a.split(",")) ? o : [];
                return d.length > 0 && (d.forEach(e => {
                    let t = parseInt(e.split(";")[0].split("=")[1].substring(0,1)),
                        r = JSON.parse(e.split(";")[1].split("=")[1]);
                    l[`${r}Page`] = t
                }),l.total = parseInt(c)),{
                    data: Object.assign(Object.assign({},u),l),
                    error: null
                }
            } catch (e) {
                if (lb(e)) return {
                    data: {
                        users: []
                    },
                    error: e
                };
                throw e
            }
        }
        async getUserById(e) {
            l8(e);
            try {
                return await hr(this.fetch,"GET",`${this.url}/admin/users/${e}`,{
                    headers: this.headers,
                    xform: ha
                })
            } catch (e) {
                if (lb(e)) return {
                    data: {
                        user: null
                    },
                    error: e
                };
                throw e
            }
        }
        async updateUserById(e,t) {
            l8(e);
            try {
                return await hr(this.fetch,"PUT",`${this.url}/admin/users/${e}`,{
                    body: t,
                    headers: this.headers,
                    xform: ha
                })
            } catch (e) {
                if (lb(e)) return {
                    data: {
                        user: null
                    },
                    error: e
                };
                throw e
            }
        }
        async deleteUser(e,t =!1) {
            l8(e);
            try {
                return await hr(this.fetch,"DELETE",`${this.url}/admin/users/${e}`,{
                    headers: this.headers,
                    body: {
                        should_soft_delete: t
                    },
                    xform: ha
                })
            } catch (e) {
                if (lb(e)) return {
                    data: {
                        user: null
                    },
                    error: e
                };
                throw e
            }
        }
        async _listFactors(e) {
            l8(e.userId);
            try {
                let {
                    data: t,
                    error: r
                } = await hr(this.fetch,"GET",`${this.url}/admin/users/${e.userId}/factors`,{
                    headers: this.headers,
                    xform: e => ({
                        data: {
                            factors: e
                        },
                        error: null
                    })
                });
                return {
                    data: t,
                    error: r
                }
            } catch (e) {
                if (lb(e)) return {
                    data: null,
                    error: e
                };
                throw e
            }
        }
        async _deleteFactor(e) {
            l8(e.userId),l8(e.id);
            try {
                return {
                    data: await hr(this.fetch,"DELETE",`${this.url}/admin/users/${e.userId}/factors/${e.id}`,{
                        headers: this.headers
                    }),
                    error: null
                }
            } catch (e) {
                if (lb(e)) return {
                    data: null,
                    error: e
                };
                throw e
            }
        }
        async _listOAuthClients(e) {
            var t,r,i,s,n,a,o;
            try {
                let l = {
                        nextPage: null,
                        lastPage: 0,
                        total: 0
                    },
                    h = await hr(this.fetch,"GET",`${this.url}/admin/oauth/clients`,{
                        headers: this.headers,
                        noResolveJson:!0,
                        query: {
                            page: null!= (r = null == (t = null == e ? void 0 : e.page) ? void 0 : t.toString()) ? r : "",
                            per_page: null!= (s = null == (i = null == e ? void 0 : e.perPage) ? void 0 : i.toString()) ? s : ""
                        },
                        xform: hh
                    });
                if (h.error) throw h.error;
                let u = await h.json(),
                    c = null!= (n = h.headers.get("x-total-count")) ? n : 0,
                    d = null!= (o = null == (a = h.headers.get("link")) ? void 0 : a.split(",")) ? o : [];
                return d.length > 0 && (d.forEach(e => {
                    let t = parseInt(e.split(";")[0].split("=")[1].substring(0,1)),
                        r = JSON.parse(e.split(";")[1].split("=")[1]);
                    l[`${r}Page`] = t
                }),l.total = parseInt(c)),{
                    data: Object.assign(Object.assign({},u),l),
                    error: null
                }
            } catch (e) {
                if (lb(e)) return {
                    data: {
                        clients: []
                    },
                    error: e
                };
                throw e
            }
        }
        async _createOAuthClient(e) {
            try {
                return await hr(this.fetch,"POST",`${this.url}/admin/oauth/clients`,{
                    body: e,
                    headers: this.headers,
                    xform: e => ({
                        data: e,
                        error: null
                    })
                })
            } catch (e) {
                if (lb(e)) return {
                    data: null,
                    error: e
                };
                throw e
            }
        }
        async _getOAuthClient(e) {
            try {
                let t = this._encodePathSegment(e);
                return await hr(this.fetch,"GET",`${this.url}/admin/oauth/clients/${t}`,{
                    headers: this.headers,
                    xform: e => ({
                        data: e,
                        error: null
                    })
                })
            } catch (e) {
                if (lb(e)) return {
                    data: null,
                    error: e
                };
                throw e
            }
        }
        async _updateOAuthClient(e,t) {
            try {
                let r = this._encodePathSegment(e);
                return await hr(this.fetch,"PUT",`${this.url}/admin/oauth/clients/${r}`,{
                    body: t,
                    headers: this.headers,
                    xform: e => ({
                        data: e,
                        error: null
                    })
                })
            } catch (e) {
                if (lb(e)) return {
                    data: null,
                    error: e
                };
                throw e
            }
        }
        async _deleteOAuthClient(e) {
            try {
                let t = this._encodePathSegment(e);
                return await hr(this.fetch,"DELETE",`${this.url}/admin/oauth/clients/${t}`,{
                    headers: this.headers,
                    noResolveJson:!0
                }),{
                    data: null,
                    error: null
                }
            } catch (e) {
                if (lb(e)) return {
                    data: null,
                    error: e
                };
                throw e
            }
        }
        async _regenerateOAuthClientSecret(e) {
            try {
                let t = this._encodePathSegment(e);
                return await hr(this.fetch,"POST",`${this.url}/admin/oauth/clients/${t}/regenerate_secret`,{
                    headers: this.headers,
                    xform: e => ({
                        data: e,
                        error: null
                    })
                })
            } catch (e) {
                if (lb(e)) return {
                    data: null,
                    error: e
                };
                throw e
            }
        }
        async _listCustomProviders(e) {
            try {
                let t = {};
                return (null == e ? void 0 : e.type) && (t.type = e.type),await hr(this.fetch,"GET",`${this.url}/admin/custom-providers`,{
                    headers: this.headers,
                    query: t,
                    xform: e => {
                        var t;
                        return {
                            data: {
                                providers: null!= (t = null == e ? void 0 : e.providers) ? t : []
                            },
                            error: null
                        }
                    }
                })
            } catch (e) {
                if (lb(e)) return {
                    data: {
                        providers: []
                    },
                    error: e
                };
                throw e
            }
        }
        async _createCustomProvider(e) {
            try {
                return await hr(this.fetch,"POST",`${this.url}/admin/custom-providers`,{
                    body: e,
                    headers: this.headers,
                    xform: e => ({
                        data: e,
                        error: null
                    })
                })
            } catch (e) {
                if (lb(e)) return {
                    data: null,
                    error: e
                };
                throw e
            }
        }
        async _getCustomProvider(e) {
            try {
                let t = this._encodePathSegment(e);
                return await hr(this.fetch,"GET",`${this.url}/admin/custom-providers/${t}`,{
                    headers: this.headers,
                    xform: e => ({
                        data: e,
                        error: null
                    })
                })
            } catch (e) {
                if (lb(e)) return {
                    data: null,
                    error: e
                };
                throw e
            }
        }
        async _updateCustomProvider(e,t) {
            try {
                let r = this._encodePathSegment(e);
                return await hr(this.fetch,"PUT",`${this.url}/admin/custom-providers/${r}`,{
                    body: t,
                    headers: this.headers,
                    xform: e => ({
                        data: e,
                        error: null
                    })
                })
            } catch (e) {
                if (lb(e)) return {
                    data: null,
                    error: e
                };
                throw e
            }
        }
        async _deleteCustomProvider(e) {
            try {
                let t = this._encodePathSegment(e);
                return await hr(this.fetch,"DELETE",`${this.url}/admin/custom-providers/${t}`,{
                    headers: this.headers,
                    noResolveJson:!0
                }),{
                    data: null,
                    error: null
                }
            } catch (e) {
                if (lb(e)) return {
                    data: null,
                    error: e
                };
                throw e
            }
        }
        async _adminListPasskeys(e) {
            l4(this.experimental),l8(e.userId);
            try {
                return await hr(this.fetch,"GET",`${this.url}/admin/users/${e.userId}/passkeys`,{
                    headers: this.headers,
                    xform: e => ({
                        data: e,
                        error: null
                    })
                })
            } catch (e) {
                if (lb(e)) return {
                    data: null,
                    error: e
                };
                throw e
            }
        }
        async _adminDeletePasskey(e) {
            l4(this.experimental),l8(e.userId),l8(e.passkeyId);
            try {
                return await hr(this.fetch,"DELETE",`${this.url}/admin/users/${e.userId}/passkeys/${e.passkeyId}`,{
                    headers: this.headers,
                    noResolveJson:!0
                }),{
                    data: null,
                    error: null
                }
            } catch (e) {
                if (lb(e)) return {
                    data: null,
                    error: e
                };
                throw e
            }
        }
    }

    function hd(e = {}) {
        return {
            getItem: t => e[t] || null,
            setItem: (t,r) => {
                e[t] = r
            },
            removeItem: t => {
                delete e[t]
            }
        }
    }
    let hp = {
        debug:!!(globalThis && lH() && globalThis.localStorage && "true" === globalThis.localStorage.getItem("supabase.gotrue-js.locks.debug"))
    };
    class hf extends Error {
        constructor(e) {
            super(e),this.isAcquireTimeout =!0
        }
    }
    class hm extends hf {}
    async function hg(e,t,r) {
        let i;
        hp.debug && console.log("@supabase/gotrue-js: navigatorLock: acquire lock",e,t);
        let s = new globalThis.AbortController;
        t > 0 && (i = setTimeout(() => {
            s.abort(),hp.debug && console.log("@supabase/gotrue-js: navigatorLock acquire timed out",e)
        },t)),await Promise.resolve();
        try {
            return await globalThis.navigator.locks.request(e,0 === t ? {
                mode: "exclusive",
                ifAvailable:!0
            } : {
                mode: "exclusive",
                signal: s.signal
            },async s => {
                if (s) {
                    clearTimeout(i),hp.debug && console.log("@supabase/gotrue-js: navigatorLock: acquired",e,s.name);
                    try {
                        return await r()
                    } finally {
                        hp.debug && console.log("@supabase/gotrue-js: navigatorLock: released",e,s.name)
                    }
                }
                if (0 === t) throw hp.debug && console.log("@supabase/gotrue-js: navigatorLock: not immediately available",e),new hm(`Acquiring an exclusive Navigator LockManager lock "${e}" immediately failed`);
                if (hp.debug) try {
                    let e = await globalThis.navigator.locks.query();
                    console.log("@supabase/gotrue-js: Navigator LockManager state",JSON.stringify(e,null,"  "))
                } catch (e) {
                    console.warn("@supabase/gotrue-js: Error when querying Navigator LockManager state",e)
                }
                return console.warn("@supabase/gotrue-js: Navigator LockManager returned a null lock when using #request without ifAvailable set to true,it appears this browser is not following the LockManager spec https://developer.mozilla.org/en-US/docs/Web/API/LockManager/request"),clearTimeout(i),await r()
            })
        } catch (n) {
            if (t > 0 && clearTimeout(i),null!== n && "object" == typeof n && "name" in n && "AbortError" === n.name && t > 0)
                if (s.signal.aborted) return hp.debug && console.log("@supabase/gotrue-js: navigatorLock: acquire timeout,recovering by stealing lock",e),console.warn(`@supabase/gotrue-js: Lock "${e}" was not released within ${t}ms.This may indicate an orphaned lock from a component unmount (e.g.,React Strict Mode).Forcefully acquiring the lock to recover.`),await Promise.resolve().then(() => globalThis.navigator.locks.request(e,{
                    mode: "exclusive",
                    steal:!0
                },async t => {
                    if (!t) return console.warn("@supabase/gotrue-js: Navigator LockManager returned null lock even with steal: true"),await r();
                    hp.debug && console.log("@supabase/gotrue-js: navigatorLock: recovered (stolen)",e,t.name);
                    try {
                        return await r()
                    } finally {
                        hp.debug && console.log("@supabase/gotrue-js: navigatorLock: released (stolen)",e,t.name)
                    }
                }));
                else throw hp.debug && console.log("@supabase/gotrue-js: navigatorLock: lock was stolen by another request",e),new hm(`Lock "${e}" was released because another request stole it`);
            throw n
        }
    }

    function hy(e) {
        if (!/^0x[a-fA-F0-9]{40}$/.test(e)) throw Error(`@supabase/auth-js: Address "${e}" is invalid.`);
        return e.toLowerCase()
    }
    class hv extends Error {
        constructor({
            message: e,
            code: t,
            cause: r,
            name: i
        }) {
            var s;
            super(e,{
                cause: r
            }),this.__isWebAuthnError =!0,this.name = null!= (s = null!= i ? i : r instanceof Error ? r.name : void 0) ? s : "Unknown Error",this.code = t
        }
        toJSON() {
            return {
                name: this.name,
                message: this.message,
                code: this.code
            }
        }
    }
    class hw extends hv {
        constructor(e,t) {
            super({
                code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
                cause: t,
                message: e
            }),this.name = "WebAuthnUnknownError",this.originalError = t
        }
    }
    let hb = new class {
        createNewAbortSignal() {
            if (this.controller) {
                let e = Error("Cancelling existing WebAuthn API call for new one");
                e.name = "AbortError",this.controller.abort(e)
            }
            let e = new AbortController;
            return this.controller = e,e.signal
        }
        cancelCeremony() {
            if (this.controller) {
                let e = Error("Manually cancelling existing WebAuthn API call");
                e.name = "AbortError",this.controller.abort(e),this.controller = void 0
            }
        }
    };

    function hx(e) {
        if (!e) throw Error("Credential creation options are required");
        if ("u" > typeof PublicKeyCredential && "parseCreationOptionsFromJSON" in PublicKeyCredential && "function" == typeof PublicKeyCredential.parseCreationOptionsFromJSON) return PublicKeyCredential.parseCreationOptionsFromJSON(e);
        let {
            challenge: t,
            user: r,
            excludeCredentials: i
        } = e,s = a$(e,["challenge","user","excludeCredentials"]),n = lV(t).buffer,a = Object.assign(Object.assign({},r),{
            id: lV(r.id).buffer
        }),o = Object.assign(Object.assign({},s),{
            challenge: n,
            user: a
        });
        if (i && i.length > 0) {
            o.excludeCredentials = Array(i.length);
            for (let e = 0; e < i.length; e++) {
                let t = i[e];
                o.excludeCredentials[e] = Object.assign(Object.assign({},t),{
                    id: lV(t.id).buffer,
                    type: t.type || "public-key",
                    transports: t.transports
                })
            }
        }
        return o
    }

    function hk(e) {
        if (!e) throw Error("Credential request options are required");
        if ("u" > typeof PublicKeyCredential && "parseRequestOptionsFromJSON" in PublicKeyCredential && "function" == typeof PublicKeyCredential.parseRequestOptionsFromJSON) return PublicKeyCredential.parseRequestOptionsFromJSON(e);
        let {
            challenge: t,
            allowCredentials: r
        } = e,i = a$(e,["challenge","allowCredentials"]),s = lV(t).buffer,n = Object.assign(Object.assign({},i),{
            challenge: s
        });
        if (r && r.length > 0) {
            n.allowCredentials = Array(r.length);
            for (let e = 0; e < r.length; e++) {
                let t = r[e];
                n.allowCredentials[e] = Object.assign(Object.assign({},t),{
                    id: lV(t.id).buffer,
                    type: t.type || "public-key",
                    transports: t.transports
                })
            }
        }
        return n
    }

    function hS(e) {
        var t;
        return "toJSON" in e && "function" == typeof e.toJSON ? e.toJSON() : {
            id: e.id,
            rawId: e.id,
            response: {
                attestationObject: lF(new Uint8Array(e.response.attestationObject)),
                clientDataJSON: lF(new Uint8Array(e.response.clientDataJSON))
            },
            type: "public-key",
            clientExtensionResults: e.getClientExtensionResults(),
            authenticatorAttachment: null!= (t = e.authenticatorAttachment) ? t : void 0
        }
    }

    function h_(e) {
        var t;
        if ("toJSON" in e && "function" == typeof e.toJSON) return e.toJSON();
        let r = e.getClientExtensionResults(),
            i = e.response;
        return {
            id: e.id,
            rawId: e.id,
            response: {
                authenticatorData: lF(new Uint8Array(i.authenticatorData)),
                clientDataJSON: lF(new Uint8Array(i.clientDataJSON)),
                signature: lF(new Uint8Array(i.signature)),
                userHandle: i.userHandle ? lF(new Uint8Array(i.userHandle)) : void 0
            },
            type: "public-key",
            clientExtensionResults: r,
            authenticatorAttachment: null!= (t = e.authenticatorAttachment) ? t : void 0
        }
    }

    function hE(e) {
        return "localhost" === e || /^([a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,}$/i.test(e)
    }

    function hT() {
        var e,t;
        return!!(lz() && "PublicKeyCredential" in window && window.PublicKeyCredential && "credentials" in navigator && "function" == typeof(null == (e = null == navigator ? void 0 : navigator.credentials) ? void 0 : e.create) && "function" == typeof(null == (t = null == navigator ? void 0 : navigator.credentials) ? void 0 : t.get))
    }
    async function hA(e) {
        try {
            let t = await navigator.credentials.create(e);
            if (!t) return {
                data: null,
                error: new hw("Empty credential response",t)
            };
            if (!(t instanceof PublicKeyCredential)) return {
                data: null,
                error: new hw("Browser returned unexpected credential type",t)
            };
            return {
                data: t,
                error: null
            }
        } catch (t) {
            return {
                data: null,
                error: function({
                    error: e,
                    options: t
                }) {
                    var r,i,s;
                    let {
                        publicKey: n
                    } = t;
                    if (!n) throw Error("options was missing required publicKey property");
                    if ("AbortError" === e.name) {
                        if (t.signal instanceof AbortSignal) return new hv({
                            message: "Registration ceremony was sent an abort signal",
                            code: "ERROR_CEREMONY_ABORTED",
                            cause: e
                        })
                    } else if ("ConstraintError" === e.name) {
                        if ((null == (r = n.authenticatorSelection) ? void 0 : r.requireResidentKey) ===!0) return new hv({
                            message: "Discoverable credentials were required but no available authenticator supported it",
                            code: "ERROR_AUTHENTICATOR_MISSING_DISCOVERABLE_CREDENTIAL_SUPPORT",
                            cause: e
                        });
                        else if ("conditional" === t.mediation && (null == (i = n.authenticatorSelection) ? void 0 : i.userVerification) === "required") return new hv({
                            message: "User verification was required during automatic registration but it could not be performed",
                            code: "ERROR_AUTO_REGISTER_USER_VERIFICATION_FAILURE",
                            cause: e
                        });
                        else if ((null == (s = n.authenticatorSelection) ? void 0 : s.userVerification) === "required") return new hv({
                            message: "User verification was required but no available authenticator supported it",
                            code: "ERROR_AUTHENTICATOR_MISSING_USER_VERIFICATION_SUPPORT",
                            cause: e
                        })
                    } else if ("InvalidStateError" === e.name) return new hv({
                        message: "The authenticator was previously registered",
                        code: "ERROR_AUTHENTICATOR_PREVIOUSLY_REGISTERED",
                        cause: e
                    });
                    else if ("NotAllowedError" === e.name) return new hv({
                        message: e.message,
                        code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
                        cause: e
                    });
                    else if ("NotSupportedError" === e.name) return new hv(0 === n.pubKeyCredParams.filter(e => "public-key" === e.type).length ? {
                        message: 'No entry in pubKeyCredParams was of type "public-key"',
                        code: "ERROR_MALFORMED_PUBKEYCREDPARAMS",
                        cause: e
                    } : {
                        message: "No available authenticator supported any of the specified pubKeyCredParams algorithms",
                        code: "ERROR_AUTHENTICATOR_NO_SUPPORTED_PUBKEYCREDPARAMS_ALG",
                        cause: e
                    });
                    else if ("SecurityError" === e.name) {
                        let t = window.location.hostname;
                        if (!hE(t)) return new hv({
                            message: `${window.location.hostname} is an invalid domain`,
                            code: "ERROR_INVALID_DOMAIN",
                            cause: e
                        });
                        if (n.rp.id!== t) return new hv({
                            message: `The RP ID "${n.rp.id}" is invalid for this domain`,
                            code: "ERROR_INVALID_RP_ID",
                            cause: e
                        })
                    } else if ("TypeError" === e.name) {
                        if (n.user.id.byteLength < 1 || n.user.id.byteLength > 64) return new hv({
                            message: "User ID was not between 1 and 64 characters",
                            code: "ERROR_INVALID_USER_ID_LENGTH",
                            cause: e
                        })
                    } else if ("UnknownError" === e.name) return new hv({
                        message: "The authenticator was unable to process the specified options,or could not create a new credential",
                        code: "ERROR_AUTHENTICATOR_GENERAL_ERROR",
                        cause: e
                    });
                    return new hv({
                        message: "a Non-Webauthn related error has occurred",
                        code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
                        cause: e
                    })
                }({
                    error: t,
                    options: e
                })
            }
        }
    }
    async function hR(e) {
        try {
            let t = await navigator.credentials.get(e);
            if (!t) return {
                data: null,
                error: new hw("Empty credential response",t)
            };
            if (!(t instanceof PublicKeyCredential)) return {
                data: null,
                error: new hw("Browser returned unexpected credential type",t)
            };
            return {
                data: t,
                error: null
            }
        } catch (t) {
            return {
                data: null,
                error: function({
                    error: e,
                    options: t
                }) {
                    let {
                        publicKey: r
                    } = t;
                    if (!r) throw Error("options was missing required publicKey property");
                    if ("AbortError" === e.name) {
                        if (t.signal instanceof AbortSignal) return new hv({
                            message: "Authentication ceremony was sent an abort signal",
                            code: "ERROR_CEREMONY_ABORTED",
                            cause: e
                        })
                    } else if ("NotAllowedError" === e.name) return new hv({
                        message: e.message,
                        code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
                        cause: e
                    });
                    else if ("SecurityError" === e.name) {
                        let t = window.location.hostname;
                        if (!hE(t)) return new hv({
                            message: `${window.location.hostname} is an invalid domain`,
                            code: "ERROR_INVALID_DOMAIN",
                            cause: e
                        });
                        if (r.rpId!== t) return new hv({
                            message: `The RP ID "${r.rpId}" is invalid for this domain`,
                            code: "ERROR_INVALID_RP_ID",
                            cause: e
                        })
                    } else if ("UnknownError" === e.name) return new hv({
                        message: "The authenticator was unable to process the specified options,or could not create a new assertion signature",
                        code: "ERROR_AUTHENTICATOR_GENERAL_ERROR",
                        cause: e
                    });
                    return new hv({
                        message: "a Non-Webauthn related error has occurred",
                        code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
                        cause: e
                    })
                }({
                    error: t,
                    options: e
                })
            }
        }
    }
    let hP = {
            hints: ["security-key"],
            authenticatorSelection: {
                authenticatorAttachment: "cross-platform",
                requireResidentKey:!1,
                userVerification: "preferred",
                residentKey: "discouraged"
            },
            attestation: "direct"
        },
        hj = {
            userVerification: "preferred",
            hints: ["security-key"],
            attestation: "direct"
        };

    function hC(...e) {
        let t = e => null!== e && "object" == typeof e &&!Array.isArray(e),
            r = e => e instanceof ArrayBuffer || ArrayBuffer.isView(e),
            i = {};
        for (let s of e)
            if (s)
                for (let e in s) {
                    let n = s[e];
                    if (void 0!== n)
                        if (Array.isArray(n)) i[e] = n;
                        else if (r(n)) i[e] = n;
                    else if (t(n)) {
                        let r = i[e];
                        t(r) ? i[e] = hC(r,n) : i[e] = hC(n)
                    } else i[e] = n
                }
        return i
    }
    class hO {
        constructor(e) {
            this.client = e,this.enroll = this._enroll.bind(this),this.challenge = this._challenge.bind(this),this.verify = this._verify.bind(this),this.authenticate = this._authenticate.bind(this),this.register = this._register.bind(this)
        }
        async _enroll(e) {
            return this.client.mfa.enroll(Object.assign(Object.assign({},e),{
                factorType: "webauthn"
            }))
        }
        async _challenge({
            factorId: e,
            webauthn: t,
            friendlyName: r,
            signal: i
        },s) {
            var n,a,o,l,h;
            try {
                let {
                    data: u,
                    error: c
                } = await this.client.mfa.challenge({
                    factorId: e,
                    webauthn: t
                });
                if (!u) return {
                    data: null,
                    error: c
                };
                let d = null!= i ? i : hb.createNewAbortSignal();
                if ("create" === u.webauthn.type) {
                    let {
                        user: e
                    } = u.webauthn.credential_options.publicKey;
                    if (!e.name)
                        if (r) e.name = `${e.id}:${r}`;
                        else {
                            let t = (await this.client.getUser()).data.user,
                                r = (null == (n = null == t ? void 0 : t.user_metadata) ? void 0 : n.name) || (null == t ? void 0 : t.email) || (null == t ? void 0 : t.id) || "User";
                            e.name = `${e.id}:${r}`
                        }
                    e.displayName || (e.displayName = e.name)
                }
                switch (u.webauthn.type) {
                    case "create":
                        {
                            let t = (a = u.webauthn.credential_options.publicKey,o = null == s ? void 0 : s.create,hC(hP,a,o || {})),
                                {
                                    data: r,
                                    error: i
                                } = await hA({
                                    publicKey: t,
                                    signal: d
                                });
                            if (r) return {
                                data: {
                                    factorId: e,
                                    challengeId: u.id,
                                    webauthn: {
                                        type: u.webauthn.type,
                                        credential_response: r
                                    }
                                },
                                error: null
                            };
                            return {
                                data: null,
                                error: i
                            }
                        }
                    case "request":
                        {
                            let t = (l = u.webauthn.credential_options.publicKey,h = null == s ? void 0 : s.request,hC(hj,l,h || {})),
                                {
                                    data: r,
                                    error: i
                                } = await hR(Object.assign(Object.assign({},u.webauthn.credential_options),{
                                    publicKey: t,
                                    signal: d
                                }));
                            if (r) return {
                                data: {
                                    factorId: e,
                                    challengeId: u.id,
                                    webauthn: {
                                        type: u.webauthn.type,
                                        credential_response: r
                                    }
                                },
                                error: null
                            };
                            return {
                                data: null,
                                error: i
                            }
                        }
                }
            } catch (e) {
                if (lb(e)) return {
                    data: null,
                    error: e
                };
                return {
                    data: null,
                    error: new lk("Unexpected error in challenge",e)
                }
            }
        }
        async _verify({
            challengeId: e,
            factorId: t,
            webauthn: r
        }) {
            return this.client.mfa.verify({
                factorId: t,
                challengeId: e,
                webauthn: r
            })
        }
        async _authenticate({
            factorId: e,
            webauthn: {
                rpId: t = "u" > typeof window ? window.location.hostname : void 0,
                rpOrigins: r = "u" > typeof window ? [window.location.origin] : void 0,
                signal: i
            } = {}
        },s) {
            if (!t) return {
                data: null,
                error: new lw("rpId is required for WebAuthn authentication")
            };
            try {
                if (!hT()) return {
                    data: null,
                    error: new lk("Browser does not support WebAuthn",null)
                };
                let {
                    data: n,
                    error: a
                } = await this.challenge({
                    factorId: e,
                    webauthn: {
                        rpId: t,
                        rpOrigins: r
                    },
                    signal: i
                },{
                    request: s
                });
                if (!n) return {
                    data: null,
                    error: a
                };
                let {
                    webauthn: o
                } = n;
                return this._verify({
                    factorId: e,
                    challengeId: n.challengeId,
                    webauthn: {
                        type: o.type,
                        rpId: t,
                        rpOrigins: r,
                        credential_response: o.credential_response
                    }
                })
            } catch (e) {
                if (lb(e)) return {
                    data: null,
                    error: e
                };
                return {
                    data: null,
                    error: new lk("Unexpected error in authenticate",e)
                }
            }
        }
        async _register({
            friendlyName: e,
            webauthn: {
                rpId: t = "u" > typeof window ? window.location.hostname : void 0,
                rpOrigins: r = "u" > typeof window ? [window.location.origin] : void 0,
                signal: i
            } = {}
        },s) {
            if (!t) return {
                data: null,
                error: new lw("rpId is required for WebAuthn registration")
            };
            try {
                if (!hT()) return {
                    data: null,
                    error: new lk("Browser does not support WebAuthn",null)
                };
                let {
                    data: n,
                    error: a
                } = await this._enroll({
                    friendlyName: e
                });
                if (!n) return await this.client.mfa.listFactors().then(t => {
                    var r;
                    return null == (r = t.data) ? void 0 : r.all.find(t => "webauthn" === t.factor_type && t.friendly_name === e && "unverified"!== t.status)
                }).then(e => e ? this.client.mfa.unenroll({
                    factorId: null == e ? void 0 : e.id
                }) : void 0),{
                    data: null,
                    error: a
                };
                let {
                    data: o,
                    error: l
                } = await this._challenge({
                    factorId: n.id,
                    friendlyName: n.friendly_name,
                    webauthn: {
                        rpId: t,
                        rpOrigins: r
                    },
                    signal: i
                },{
                    create: s
                });
                if (!o) return {
                    data: null,
                    error: l
                };
                return this._verify({
                    factorId: n.id,
                    challengeId: o.challengeId,
                    webauthn: {
                        rpId: t,
                        rpOrigins: r,
                        type: o.webauthn.type,
                        credential_response: o.webauthn.credential_response
                    }
                })
            } catch (e) {
                if (lb(e)) return {
                    data: null,
                    error: e
                };
                return {
                    data: null,
                    error: new lk("Unexpected error in register",e)
                }
            }
        }
    }
    if ("object"!= typeof globalThis) try {
        Object.defineProperty(Object.prototype,"__magic__",{
            get: function() {
                return this
            },
            configurable:!0
        }),__magic__.globalThis = __magic__,delete Object.prototype.__magic__
    } catch (e) {
        "u" > typeof self && (self.globalThis = self)
    }
    let hN = {
        url: "http://localhost:9999",
        storageKey: "supabase.auth.token",
        autoRefreshToken:!0,
        persistSession:!0,
        detectSessionInUrl:!0,
        headers: lm,
        flowType: "implicit",
        debug:!1,
        hasCustomAuthorizationHeader:!1,
        throwOnError:!1,
        lockAcquireTimeout: 5e3,
        skipAutoInitialize:!1,
        experimental: {}
    };
    async function hI(e,t,r) {
        return await r()
    }
    let h$ = {};
    class hM {
        get jwks() {
            var e,t;
            return null!= (t = null == (e = h$[this.storageKey]) ? void 0 : e.jwks) ? t : {
                keys: []
            }
        }
        set jwks(e) {
            h$[this.storageKey] = Object.assign(Object.assign({},h$[this.storageKey]),{
                jwks: e
            })
        }
        get jwks_cached_at() {
            var e,t;
            return null!= (t = null == (e = h$[this.storageKey]) ? void 0 : e.cachedAt) ? t : Number.MIN_SAFE_INTEGER
        }
        set jwks_cached_at(e) {
            h$[this.storageKey] = Object.assign(Object.assign({},h$[this.storageKey]),{
                cachedAt: e
            })
        }
        constructor(e) {
            var t,r,i,s;
            this.userStorage = null,this.memoryStorage = null,this.stateChangeEmitters = new Map,this.autoRefreshTicker = null,this.autoRefreshTickTimeout = null,this.visibilityChangedCallback = null,this.refreshingDeferred = null,this.initializePromise = null,this.detectSessionInUrl =!0,this.hasCustomAuthorizationHeader =!1,this.suppressGetSessionWarning =!1,this.lockAcquired =!1,this.pendingInLock = [],this.broadcastChannel = null,this.logger = console.log;
            const n = Object.assign(Object.assign({},hN),e);
            if (this.storageKey = n.storageKey,this.instanceID = null!= (t = hM.nextInstanceID[this.storageKey]) ? t : 0,hM.nextInstanceID[this.storageKey] = this.instanceID + 1,this.logDebugMessages =!!n.debug,"function" == typeof n.debug && (this.logger = n.debug),this.instanceID > 0 && lz()) {
                const e = `${this._logPrefix()} Multiple GoTrueClient instances detected in the same browser context.It is not an error,but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key.`;
                console.warn(e),this.logDebugMessages && console.trace(e)
            }
            if (this.persistSession = n.persistSession,this.autoRefreshToken = n.autoRefreshToken,this.experimental = null!= (r = n.experimental) ? r : {},this.admin = new hc({
                    url: n.url,
                    headers: n.headers,
                    fetch: n.fetch,
                    experimental: this.experimental
                }),this.url = n.url,this.headers = n.headers,this.fetch = lW(n.fetch),this.lock = n.lock || hI,this.detectSessionInUrl = n.detectSessionInUrl,this.flowType = n.flowType,this.hasCustomAuthorizationHeader = n.hasCustomAuthorizationHeader,this.throwOnError = n.throwOnError,this.lockAcquireTimeout = n.lockAcquireTimeout,n.lock ? this.lock = n.lock : this.persistSession && lz() && (null == (i = null == globalThis ? void 0 : globalThis.navigator) ? void 0 : i.locks) ? this.lock = hg : this.lock = hI,this.jwks || (this.jwks = {
                    keys: []
                },this.jwks_cached_at = Number.MIN_SAFE_INTEGER),this.mfa = {
                    verify: this._verify.bind(this),
                    enroll: this._enroll.bind(this),
                    unenroll: this._unenroll.bind(this),
                    challenge: this._challenge.bind(this),
                    listFactors: this._listFactors.bind(this),
                    challengeAndVerify: this._challengeAndVerify.bind(this),
                    getAuthenticatorAssuranceLevel: this._getAuthenticatorAssuranceLevel.bind(this),
                    webauthn: new hO(this)
                },this.oauth = {
                    getAuthorizationDetails: this._getAuthorizationDetails.bind(this),
                    approveAuthorization: this._approveAuthorization.bind(this),
                    denyAuthorization: this._denyAuthorization.bind(this),
                    listGrants: this._listOAuthGrants.bind(this),
                    revokeGrant: this._revokeOAuthGrant.bind(this)
                },this.passkey = {
                    startRegistration: this._startPasskeyRegistration.bind(this),
                    verifyRegistration: this._verifyPasskeyRegistration.bind(this),
                    startAuthentication: this._startPasskeyAuthentication.bind(this),
                    verifyAuthentication: this._verifyPasskeyAuthentication.bind(this),
                    list: this._listPasskeys.bind(this),
                    update: this._updatePasskey.bind(this),
                    delete: this._deletePasskey.bind(this)
                },this.persistSession ? (n.storage ? this.storage = n.storage : lH() ? this.storage = globalThis.localStorage : (this.memoryStorage = {},this.storage = hd(this.memoryStorage)),n.userStorage && (this.userStorage = n.userStorage)) : (this.memoryStorage = {},this.storage = hd(this.memoryStorage)),lz() && globalThis.BroadcastChannel && this.persistSession && this.storageKey) {
                try {
                    this.broadcastChannel = new globalThis.BroadcastChannel(this.storageKey)
                } catch (e) {
                    console.error("Failed to create a new BroadcastChannel,multi-tab state changes will not be available",e)
                }
                null == (s = this.broadcastChannel) || s.addEventListener("message",async e => {
                    this._debug("received broadcast notification from other tab or client",e);
                    try {
                        await this._notifyAllSubscribers(e.data.event,e.data.session,!1)
                    } catch (e) {
                        this._debug("#broadcastChannel","error",e)
                    }
                })
            }
            n.skipAutoInitialize || this.initialize().catch(e => {
                this._debug("#initialize()","error",e)
            })
        }
        isThrowOnErrorEnabled() {
            return this.throwOnError
        }
        _returnResult(e) {
            if (this.throwOnError && e && e.error) throw e.error;
            return e
        }
        _logPrefix() {
            return `GoTrueClient@${this.storageKey}:${this.instanceID} (${lf}) ${new Date().toISOString()}`
        }
        _debug(...e) {
            return this.logDebugMessages && this.logger(this._logPrefix(),...e),this
        }
        async initialize() {
            return this.initializePromise || (this.initializePromise = (async () => await this._acquireLock(this.lockAcquireTimeout,async () => await this._initialize()))()),await this.initializePromise
        }
        async _initialize() {
            var e;
            try {
                let t = {},
                    r = "none";
                if (lz() && (t = function(e) {
                        let t = {},
                            r = new URL(e);
                        if (r.hash && "#" === r.hash[0]) try {
                            new URLSearchParams(r.hash.substring(1)).forEach((e,r) => {
                                t[r] = e
                            })
                        } catch (e) {}
                        return r.searchParams.forEach((e,r) => {
                            t[r] = e
                        }),t
                    }(window.location.href),this._isImplicitGrantCallback(t) ? r = "implicit" : await this._isPKCECallback(t) && (r = "pkce")),lz() && this.detectSessionInUrl && "none"!== r) {
                    let {
                        data: i,
                        error: s
                    } = await this._getSessionFromURL(t,r);
                    if (s) {
                        (this._debug("#_initialize()","error detecting session from URL",s),lb(s) && "AuthImplicitGrantRedirectError" === s.name) && (null == (e = s.details) || e.code);
                        return {
                            error: s
                        }
                    }
                    let {
                        session: n,
                        redirectType: a
                    } = i;
                    return this._debug("#_initialize()","detected session in URL",n,"redirect type",a),await this._saveSession(n),setTimeout(async () => {
                        "recovery" === a ? await this._notifyAllSubscribers("PASSWORD_RECOVERY",n) : await this._notifyAllSubscribers("SIGNED_IN",n)
                    },0),{
                        error: null
                    }
                }
                return await this._recoverAndRefresh(),{
                    error: null
                }
            } catch (e) {
                if (lb(e)) return this._returnResult({
                    error: e
                });
                return this._returnResult({
                    error: new lk("Unexpected error during initialization",e)
                })
            } finally {
                await this._handleVisibilityChange(),this._debug("#_initialize()","end")
            }
        }
        async signInAnonymously(e) {
            var t,r,i;
            try {
                let {
                    data: s,
                    error: n
                } = await hr(this.fetch,"POST",`${this.url}/signup`,{
                    headers: this.headers,
                    body: {
                        data: null!= (r = null == (t = null == e ? void 0 : e.options) ? void 0 : t.data) ? r : {},
                        gotrue_meta_security: {
                            captcha_token: null == (i = null == e ? void 0 : e.options) ? void 0 : i.captchaToken
                        }
                    },
                    xform: hs
                });
                if (n ||!s) return this._returnResult({
                    data: {
                        user: null,
                        session: null
                    },
                    error: n
                });
                let a = s.session,
                    o = s.user;
                return s.session && (await this._saveSession(s.session),await this._notifyAllSubscribers("SIGNED_IN",a)),this._returnResult({
                    data: {
                        user: o,
                        session: a
                    },
                    error: null
                })
            } catch (e) {
                if (lb(e)) return this._returnResult({
                    data: {
                        user: null,
                        session: null
                    },
                    error: e
                });
                throw e
            }
        }
        async signUp(e) {
            var t,r,i;
            try {
                let s;
                if ("email" in e) {
                    let {
                        email: r,
                        password: i,
                        options: n
                    } = e,a = null,o = null;
                    "pkce" === this.flowType && ([a,o] = await l2(this.storage,this.storageKey)),s = await hr(this.fetch,"POST",`${this.url}/signup`,{
                        headers: this.headers,
                        redirectTo: null == n ? void 0 : n.emailRedirectTo,
                        body: {
                            email: r,
                            password: i,
                            data: null!= (t = null == n ? void 0 : n.data) ? t : {},
                            gotrue_meta_security: {
                                captcha_token: null == n ? void 0 : n.captchaToken
                            },
                            code_challenge: a,
                            code_challenge_method: o
                        },
                        xform: hs
                    })
                } else if ("phone" in e) {
                    let {
                        phone: t,
                        password: n,
                        options: a
                    } = e;
                    s = await hr(this.fetch,"POST",`${this.url}/signup`,{
                        headers: this.headers,
                        body: {
                            phone: t,
                            password: n,
                            data: null!= (r = null == a ? void 0 : a.data) ? r : {},
                            channel: null!= (i = null == a ? void 0 : a.channel) ? i : "sms",
                            gotrue_meta_security: {
                                captcha_token: null == a ? void 0 : a.captchaToken
                            }
                        },
                        xform: hs
                    })
                } else throw new lA("You must provide either an email or phone number and a password");
                let {
                    data: n,
                    error: a
                } = s;
                if (a ||!n) return await lJ(this.storage,`${this.storageKey}-code-verifier`),this._returnResult({
                    data: {
                        user: null,
                        session: null
                    },
                    error: a
                });
                let o = n.session,
                    l = n.user;
                return n.session && (await this._saveSession(n.session),await this._notifyAllSubscribers("SIGNED_IN",o)),this._returnResult({
                    data: {
                        user: l,
                        session: o
                    },
                    error: null
                })
            } catch (e) {
                if (await lJ(this.storage,`${this.storageKey}-code-verifier`),lb(e)) return this._returnResult({
                    data: {
                        user: null,
                        session: null
                    },
                    error: e
                });
                throw e
            }
        }
        async signInWithPassword(e) {
            try {
                let t;
                if ("email" in e) {
                    let {
                        email: r,
                        password: i,
                        options: s
                    } = e;
                    t = await hr(this.fetch,"POST",`${this.url}/token?grant_type=password`,{
                        headers: this.headers,
                        body: {
                            email: r,
                            password: i,
                            gotrue_meta_security: {
                                captcha_token: null == s ? void 0 : s.captchaToken
                            }
                        },
                        xform: hn
                    })
                } else if ("phone" in e) {
                    let {
                        phone: r,
                        password: i,
                        options: s
                    } = e;
                    t = await hr(this.fetch,"POST",`${this.url}/token?grant_type=password`,{
                        headers: this.headers,
                        body: {
                            phone: r,
                            password: i,
                            gotrue_meta_security: {
                                captcha_token: null == s ? void 0 : s.captchaToken
                            }
                        },
                        xform: hn
                    })
                } else throw new lA("You must provide either an email or phone number and a password");
                let {
                    data: r,
                    error: i
                } = t;
                if (i) return this._returnResult({
                    data: {
                        user: null,
                        session: null
                    },
                    error: i
                });
                if (!r ||!r.session ||!r.user) {
                    let e = new lT;
                    return this._returnResult({
                        data: {
                            user: null,
                            session: null
                        },
                        error: e
                    })
                }
                return r.session && (await this._saveSession(r.session),await this._notifyAllSubscribers("SIGNED_IN",r.session)),this._returnResult({
                    data: Object.assign({
                        user: r.user,
                        session: r.session
                    },r.weak_password ? {
                        weakPassword: r.weak_password
                    } : null),
                    error: i
                })
            } catch (e) {
                if (lb(e)) return this._returnResult({
                    data: {
                        user: null,
                        session: null
                    },
                    error: e
                });
                throw e
            }
        }
        async signInWithOAuth(e) {
            var t,r,i,s;
            return await this._handleProviderSignIn(e.provider,{
                redirectTo: null == (t = e.options) ? void 0 : t.redirectTo,
                scopes: null == (r = e.options) ? void 0 : r.scopes,
                queryParams: null == (i = e.options) ? void 0 : i.queryParams,
                skipBrowserRedirect: null == (s = e.options) ? void 0 : s.skipBrowserRedirect
            })
        }
        async exchangeCodeForSession(e) {
            return await this.initializePromise,this._acquireLock(this.lockAcquireTimeout,async () => this._exchangeCodeForSession(e))
        }
        async signInWithWeb3(e) {
            let {
                chain: t
            } = e;
            switch (t) {
                case "ethereum":
                    return await this.signInWithEthereum(e);
                case "solana":
                    return await this.signInWithSolana(e);
                default:
                    throw Error(`@supabase/auth-js: Unsupported chain "${t}"`)
            }
        }
        async signInWithEthereum(e) {
            var t,r,i,s,n,a,o,l,h,u,c,d;
            let p,f;
            if ("message" in e) p = e.message,f = e.signature;
            else {
                let u,{
                    chain: c,
                    wallet: m,
                    statement: g,
                    options: y
                } = e;
                if (lz())
                    if ("object" == typeof m) u = m;
                    else {
                        let e = window;
                        if ("ethereum" in e && "object" == typeof e.ethereum && "request" in e.ethereum && "function" == typeof e.ethereum.request) u = e.ethereum;
                        else throw Error("@supabase/auth-js: No compatible Ethereum wallet interface on the window object (window.ethereum) detected.Make sure the user already has a wallet installed and connected for this app.Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'ethereum',wallet: resolvedUserWallet }) instead.")
                    }
                else {
                    if ("object"!= typeof m ||!(null == y ? void 0 : y.url)) throw Error("@supabase/auth-js: Both wallet and url must be specified in non-browser environments.");
                    u = m
                }
                let v = new URL(null!= (t = null == y ? void 0 : y.url) ? t : window.location.href),
                    w = await u.request({
                        method: "eth_requestAccounts"
                    }).then(e => e).catch(() => {
                        throw Error("@supabase/auth-js: Wallet method eth_requestAccounts is missing or invalid")
                    });
                if (!w || 0 === w.length) throw Error("@supabase/auth-js: No accounts available.Please ensure the wallet is connected.");
                let b = hy(w[0]),
                    x = null == (r = null == y ? void 0 : y.signInWithEthereum) ? void 0 : r.chainId;
                x || (x = parseInt(await u.request({
                    method: "eth_chainId"
                }),16)),p = function(e) {
                    var t;
                    let {
                        chainId: r,
                        domain: i,
                        expirationTime: s,
                        issuedAt: n = new Date,
                        nonce: a,
                        notBefore: o,
                        requestId: l,
                        resources: h,
                        scheme: u,
                        uri: c,
                        version: d
                    } = e;
                    if (!Number.isInteger(r)) throw Error(`@supabase/auth-js: Invalid SIWE message field "chainId".Chain ID must be a EIP-155 chain ID.Provided value: ${r}`);
                    if (!i) throw Error('@supabase/auth-js: Invalid SIWE message field "domain".Domain must be provided.');
                    if (a && a.length < 8) throw Error(`@supabase/auth-js: Invalid SIWE message field "nonce".Nonce must be at least 8 characters.Provided value: ${a}`);
                    if (!c) throw Error('@supabase/auth-js: Invalid SIWE message field "uri".URI must be provided.');
                    if ("1"!== d) throw Error(`@supabase/auth-js: Invalid SIWE message field "version".Version must be '1'.Provided value: ${d}`);
                    if (null == (t = e.statement) ? void 0 : t.includes("\n")) throw Error(`@supabase/auth-js: Invalid SIWE message field "statement".Statement must not include '\\n'.Provided value: ${e.statement}`);
                    let p = hy(e.address),
                        f = u ? `${u}://${i}` : i,
                        m = e.statement ? `${e.statement}
` : "",
                        g = `${f} wants you to sign in with your Ethereum account:
${p}

${m}`,
                        y = `URI: ${c}
Version: ${d}
Chain ID: ${r}${a?`
Nonce: ${a}`:""}
Issued At: ${n.toISOString()}`;
                    if (s && (y += `
Expiration Time: ${s.toISOString()}`),o && (y += `
Not Before: ${o.toISOString()}`),l && (y += `
Request ID: ${l}`),h) {
                        let e = "\nResources:";
                        for (let t of h) {
                            if (!t || "string"!= typeof t) throw Error(`@supabase/auth-js: Invalid SIWE message field "resources".Every resource must be a valid string.Provided value: ${t}`);
                            e += `
- ${t}`
                        }
                        y += e
                    }
                    return `${g}
${y}`
                }({
                    domain: v.host,
                    address: b,
                    statement: g,
                    uri: v.href,
                    version: "1",
                    chainId: x,
                    nonce: null == (i = null == y ? void 0 : y.signInWithEthereum) ? void 0 : i.nonce,
                    issuedAt: null!= (n = null == (s = null == y ? void 0 : y.signInWithEthereum) ? void 0 : s.issuedAt) ? n : new Date,
                    expirationTime: null == (a = null == y ? void 0 : y.signInWithEthereum) ? void 0 : a.expirationTime,
                    notBefore: null == (o = null == y ? void 0 : y.signInWithEthereum) ? void 0 : o.notBefore,
                    requestId: null == (l = null == y ? void 0 : y.signInWithEthereum) ? void 0 : l.requestId,
                    resources: null == (h = null == y ? void 0 : y.signInWithEthereum) ? void 0 : h.resources
                }),f = await u.request({
                    method: "personal_sign",
                    params: [(d = p,"0x" + Array.from(new TextEncoder().encode(d),e => e.toString(16).padStart(2,"0")).join("")),b]
                })
            }
            try {
                let {
                    data: t,
                    error: r
                } = await hr(this.fetch,"POST",`${this.url}/token?grant_type=web3`,{
                    headers: this.headers,
                    body: Object.assign({
                        chain: "ethereum",
                        message: p,
                        signature: f
                    },(null == (u = e.options) ? void 0 : u.captchaToken) ? {
                        gotrue_meta_security: {
                            captcha_token: null == (c = e.options) ? void 0 : c.captchaToken
                        }
                    } : null),
                    xform: hs
                });
                if (r) throw r;
                if (!t ||!t.session ||!t.user) {
                    let e = new lT;
                    return this._returnResult({
                        data: {
                            user: null,
                            session: null
                        },
                        error: e
                    })
                }
                return t.session && (await this._saveSession(t.session),await this._notifyAllSubscribers("SIGNED_IN",t.session)),this._returnResult({
                    data: Object.assign({},t),
                    error: r
                })
            } catch (e) {
                if (lb(e)) return this._returnResult({
                    data: {
                        user: null,
                        session: null
                    },
                    error: e
                });
                throw e
            }
        }
        async signInWithSolana(e) {
            var t,r,i,s,n,a,o,l,h,u,c,d;
            let p,f;
            if ("message" in e) p = e.message,f = e.signature;
            else {
                let c,{
                    chain: d,
                    wallet: m,
                    statement: g,
                    options: y
                } = e;
                if (lz())
                    if ("object" == typeof m) c = m;
                    else {
                        let e = window;
                        if ("solana" in e && "object" == typeof e.solana && ("signIn" in e.solana && "function" == typeof e.solana.signIn || "signMessage" in e.solana && "function" == typeof e.solana.signMessage)) c = e.solana;
                        else throw Error("@supabase/auth-js: No compatible Solana wallet interface on the window object (window.solana) detected.Make sure the user already has a wallet installed and connected for this app.Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'solana',wallet: resolvedUserWallet }) instead.")
                    }
                else {
                    if ("object"!= typeof m ||!(null == y ? void 0 : y.url)) throw Error("@supabase/auth-js: Both wallet and url must be specified in non-browser environments.");
                    c = m
                }
                let v = new URL(null!= (t = null == y ? void 0 : y.url) ? t : window.location.href);
                if ("signIn" in c && c.signIn) {
                    let e,t = await c.signIn(Object.assign(Object.assign(Object.assign({
                        issuedAt: new Date().toISOString()
                    },null == y ? void 0 : y.signInWithSolana),{
                        version: "1",
                        domain: v.host,
                        uri: v.href
                    }),g ? {
                        statement: g
                    } : null));
                    if (Array.isArray(t) && t[0] && "object" == typeof t[0]) e = t[0];
                    else if (t && "object" == typeof t && "signedMessage" in t && "signature" in t) e = t;
                    else throw Error("@supabase/auth-js: Wallet method signIn() returned unrecognized value");
                    if ("signedMessage" in e && "signature" in e && ("string" == typeof e.signedMessage || e.signedMessage instanceof Uint8Array) && e.signature instanceof Uint8Array) p = "string" == typeof e.signedMessage ? e.signedMessage : new TextDecoder().decode(e.signedMessage),f = e.signature;
                    else throw Error("@supabase/auth-js: Wallet method signIn() API returned object without signedMessage and signature fields")
                } else {
                    if (!("signMessage" in c) || "function"!= typeof c.signMessage ||!("publicKey" in c) || "object"!= typeof c ||!c.publicKey ||!("toBase58" in c.publicKey) || "function"!= typeof c.publicKey.toBase58) throw Error("@supabase/auth-js: Wallet does not have a compatible signMessage() and publicKey.toBase58() API");
                    p = [`${v.host} wants you to sign in with your Solana account:`,c.publicKey.toBase58(),...g ? ["",g,""] : [""],"Version: 1",`URI: ${v.href}`,`Issued At: ${null!=(i=null==(r=null==y?void 0:y.signInWithSolana)?void 0:r.issuedAt)?i:new Date().toISOString()}`,...(null == (s = null == y ? void 0 : y.signInWithSolana) ? void 0 : s.notBefore) ? [`Not Before: ${y.signInWithSolana.notBefore}`] : [],...(null == (n = null == y ? void 0 : y.signInWithSolana) ? void 0 : n.expirationTime) ? [`Expiration Time: ${y.signInWithSolana.expirationTime}`] : [],...(null == (a = null == y ? void 0 : y.signInWithSolana) ? void 0 : a.chainId) ? [`Chain ID: ${y.signInWithSolana.chainId}`] : [],...(null == (o = null == y ? void 0 : y.signInWithSolana) ? void 0 : o.nonce) ? [`Nonce: ${y.signInWithSolana.nonce}`] : [],...(null == (l = null == y ? void 0 : y.signInWithSolana) ? void 0 : l.requestId) ? [`Request ID: ${y.signInWithSolana.requestId}`] : [],...(null == (u = null == (h = null == y ? void 0 : y.signInWithSolana) ? void 0 : h.resources) ? void 0 : u.length) ? ["Resources",...y.signInWithSolana.resources.map(e => `- ${e}`)] : []].join("\n");
                    let e = await c.signMessage(new TextEncoder().encode(p),"utf8");
                    if (!e ||!(e instanceof Uint8Array)) throw Error("@supabase/auth-js: Wallet signMessage() API returned an recognized value");
                    f = e
                }
            }
            try {
                let {
                    data: t,
                    error: r
                } = await hr(this.fetch,"POST",`${this.url}/token?grant_type=web3`,{
                    headers: this.headers,
                    body: Object.assign({
                        chain: "solana",
                        message: p,
                        signature: lF(f)
                    },(null == (c = e.options) ? void 0 : c.captchaToken) ? {
                        gotrue_meta_security: {
                            captcha_token: null == (d = e.options) ? void 0 : d.captchaToken
                        }
                    } : null),
                    xform: hs
                });
                if (r) throw r;
                if (!t ||!t.session ||!t.user) {
                    let e = new lT;
                    return this._returnResult({
                        data: {
                            user: null,
                            session: null
                        },
                        error: e
                    })
                }
                return t.session && (await this._saveSession(t.session),await this._notifyAllSubscribers("SIGNED_IN",t.session)),this._returnResult({
                    data: Object.assign({},t),
                    error: r
                })
            } catch (e) {
                if (lb(e)) return this._returnResult({
                    data: {
                        user: null,
                        session: null
                    },
                    error: e
                });
                throw e
            }
        }
        async _exchangeCodeForSession(e) {
            let t = await lG(this.storage,`${this.storageKey}-code-verifier`),
                [r,i] = (null!= t ? t : "").split("/");
            try {
                if (!r && "pkce" === this.flowType) throw new lj;
                let {
                    data: t,
                    error: s
                } = await hr(this.fetch,"POST",`${this.url}/token?grant_type=pkce`,{
                    headers: this.headers,
                    body: {
                        auth_code: e,
                        code_verifier: r
                    },
                    xform: hs
                });
                if (await lJ(this.storage,`${this.storageKey}-code-verifier`),s) throw s;
                if (!t ||!t.session ||!t.user) {
                    let e = new lT;
                    return this._returnResult({
                        data: {
                            user: null,
                            session: null,
                            redirectType: null
                        },
                        error: e
                    })
                }
                return t.session && (await this._saveSession(t.session),await this._notifyAllSubscribers("recovery" === i ? "PASSWORD_RECOVERY" : "SIGNED_IN",t.session)),this._returnResult({
                    data: Object.assign(Object.assign({},t),{
                        redirectType: null!= i ? i : null
                    }),
                    error: s
                })
            } catch (e) {
                if (await lJ(this.storage,`${this.storageKey}-code-verifier`),lb(e)) return this._returnResult({
                    data: {
                        user: null,
                        session: null,
                        redirectType: null
                    },
                    error: e
                });
                throw e
            }
        }
        async signInWithIdToken(e) {
            try {
                let {
                    options: t,
                    provider: r,
                    token: i,
                    access_token: s,
                    nonce: n
                } = e,{
                    data: a,
                    error: o
                } = await hr(this.fetch,"POST",`${this.url}/token?grant_type=id_token`,{
                    headers: this.headers,
                    body: {
                        provider: r,
                        id_token: i,
                        access_token: s,
                        nonce: n,
                        gotrue_meta_security: {
                            captcha_token: null == t ? void 0 : t.captchaToken
                        }
                    },
                    xform: hs
                });
                if (o) return this._returnResult({
                    data: {
                        user: null,
                        session: null
                    },
                    error: o
                });
                if (!a ||!a.session ||!a.user) {
                    let e = new lT;
                    return this._returnResult({
                        data: {
                            user: null,
                            session: null
                        },
                        error: e
                    })
                }
                return a.session && (await this._saveSession(a.session),await this._notifyAllSubscribers("SIGNED_IN",a.session)),this._returnResult({
                    data: a,
                    error: o
                })
            } catch (e) {
                if (lb(e)) return this._returnResult({
                    data: {
                        user: null,
                        session: null
                    },
                    error: e
                });
                throw e
            }
        }
        async signInWithOtp(e) {
            var t,r,i,s,n;
            try {
                if ("email" in e) {
                    let {
                        email: i,
                        options: s
                    } = e,n = null,a = null;
                    "pkce" === this.flowType && ([n,a] = await l2(this.storage,this.storageKey));
                    let {
                        error: o
                    } = await hr(this.fetch,"POST",`${this.url}/otp`,{
                        headers: this.headers,
                        body: {
                            email: i,
                            data: null!= (t = null == s ? void 0 : s.data) ? t : {},
                            create_user: null == (r = null == s ? void 0 : s.shouldCreateUser) || r,
                            gotrue_meta_security: {
                                captcha_token: null == s ? void 0 : s.captchaToken
                            },
                            code_challenge: n,
                            code_challenge_method: a
                        },
                        redirectTo: null == s ? void 0 : s.emailRedirectTo
                    });
                    return this._returnResult({
                        data: {
                            user: null,
                            session: null
                        },
                        error: o
                    })
                }
                if ("phone" in e) {
                    let {
                        phone: t,
                        options: r
                    } = e,{
                        data: a,
                        error: o
                    } = await hr(this.fetch,"POST",`${this.url}/otp`,{
                        headers: this.headers,
                        body: {
                            phone: t,
                            data: null!= (i = null == r ? void 0 : r.data) ? i : {},
                            create_user: null == (s = null == r ? void 0 : r.shouldCreateUser) || s,
                            gotrue_meta_security: {
                                captcha_token: null == r ? void 0 : r.captchaToken
                            },
                            channel: null!= (n = null == r ? void 0 : r.channel) ? n : "sms"
                        }
                    });
                    return this._returnResult({
                        data: {
                            user: null,
                            session: null,
                            messageId: null == a ? void 0 : a.message_id
                        },
                        error: o
                    })
                }
                throw new lA("You must provide either an email or phone number.")
            } catch (e) {
                if (await lJ(this.storage,`${this.storageKey}-code-verifier`),lb(e)) return this._returnResult({
                    data: {
                        user: null,
                        session: null
                    },
                    error: e
                });
                throw e
            }
        }
        async verifyOtp(e) {
            var t,r;
            try {
                let i,s;
                "options" in e && (i = null == (t = e.options) ? void 0 : t.redirectTo,s = null == (r = e.options) ? void 0 : r.captchaToken);
                let {
                    data: n,
                    error: a
                } = await hr(this.fetch,"POST",`${this.url}/verify`,{
                    headers: this.headers,
                    body: Object.assign(Object.assign({},e),{
                        gotrue_meta_security: {
                            captcha_token: s
                        }
                    }),
                    redirectTo: i,
                    xform: hs
                });
                if (a) throw a;
                if (!n) throw Error("An error occurred on token verification.");
                let o = n.session,
                    l = n.user;
                return (null == o ? void 0 : o.access_token) && (await this._saveSession(o),await this._notifyAllSubscribers("recovery" == e.type ? "PASSWORD_RECOVERY" : "SIGNED_IN",o)),this._returnResult({
                    data: {
                        user: l,
                        session: o
                    },
                    error: null
                })
            } catch (e) {
                if (lb(e)) return this._returnResult({
                    data: {
                        user: null,
                        session: null
                    },
                    error: e
                });
                throw e
            }
        }
        async signInWithSSO(e) {
            var t,r,i,s,n;
            try {
                let a = null,
                    o = null;
                "pkce" === this.flowType && ([a,o] = await l2(this.storage,this.storageKey));
                let l = await hr(this.fetch,"POST",`${this.url}/sso`,{
                    body: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},"providerId" in e ? {
                        provider_id: e.providerId
                    } : null),"domain" in e ? {
                        domain: e.domain
                    } : null),{
                        redirect_to: null!= (r = null == (t = e.options) ? void 0 : t.redirectTo) ? r : void 0
                    }),(null == (i = null == e ? void 0 : e.options) ? void 0 : i.captchaToken) ? {
                        gotrue_meta_security: {
                            captcha_token: e.options.captchaToken
                        }
                    } : null),{
                        skip_http_redirect:!0,
                        code_challenge: a,
                        code_challenge_method: o
                    }),
                    headers: this.headers,
                    xform: ho
                });
                return (null == (s = l.data) ? void 0 : s.url) && lz() &&!(null == (n = e.options) ? void 0 : n.skipBrowserRedirect) && window.location.assign(l.data.url),this._returnResult(l)
            } catch (e) {
                if (await lJ(this.storage,`${this.storageKey}-code-verifier`),lb(e)) return this._returnResult({
                    data: null,
                    error: e
                });
                throw e
            }
        }
        async reauthenticate() {
            return await this.initializePromise,await this._acquireLock(this.lockAcquireTimeout,async () => await this._reauthenticate())
        }
        async _reauthenticate() {
            try {
                return await this._useSession(async e => {
                    let {
                        data: {
                            session: t
                        },
                        error: r
                    } = e;
                    if (r) throw r;
                    if (!t) throw new l_;
                    let {
                        error: i
                    } = await hr(this.fetch,"GET",`${this.url}/reauthenticate`,{
                        headers: this.headers,
                        jwt: t.access_token
                    });
                    return this._returnResult({
                        data: {
                            user: null,
                            session: null
                        },
                        error: i
                    })
                })
            } catch (e) {
                if (lb(e)) return this._returnResult({
                    data: {
                        user: null,
                        session: null
                    },
                    error: e
                });
                throw e
            }
        }
        async resend(e) {
            try {
                let t = `${this.url}/resend`;
                if ("email" in e) {
                    let {
                        email: r,
                        type: i,
                        options: s
                    } = e,{
                        error: n
                    } = await hr(this.fetch,"POST",t,{
                        headers: this.headers,
                        body: {
                            email: r,
                            type: i,
                            gotrue_meta_security: {
                                captcha_token: null == s ? void 0 : s.captchaToken
                            }
                        },
                        redirectTo: null == s ? void 0 : s.emailRedirectTo
                    });
                    return this._returnResult({
                        data: {
                            user: null,
                            session: null
                        },
                        error: n
                    })
                }
                if ("phone" in e) {
                    let {
                        phone: r,
                        type: i,
                        options: s
                    } = e,{
                        data: n,
                        error: a
                    } = await hr(this.fetch,"POST",t,{
                        headers: this.headers,
                        body: {
                            phone: r,
                            type: i,
                            gotrue_meta_security: {
                                captcha_token: null == s ? void 0 : s.captchaToken
                            }
                        }
                    });
                    return this._returnResult({
                        data: {
                            user: null,
                            session: null,
                            messageId: null == n ? void 0 : n.message_id
                        },
                        error: a
                    })
                }
                throw new lA("You must provide either an email or phone number and a type")
            } catch (e) {
                if (lb(e)) return this._returnResult({
                    data: {
                        user: null,
                        session: null
                    },
                    error: e
                });
                throw e
            }
        }
        async getSession() {
            return await this.initializePromise,await this._acquireLock(this.lockAcquireTimeout,async () => this._useSession(async e => e))
        }
        async _acquireLock(e,t) {
            this._debug("#_acquireLock","begin",e);
            try {
                if (this.lockAcquired) {
                    let e = this.pendingInLock.length ? this.pendingInLock[this.pendingInLock.length - 1] : Promise.resolve(),
                        r = (async () => (await e,await t()))();
                    return this.pendingInLock.push((async () => {
                        try {
                            await r
                        } catch (e) {}
                    })()),r
                }
                return await this.lock(`lock:${this.storageKey}`,e,async () => {
                    this._debug("#_acquireLock","lock acquired for storage key",this.storageKey);
                    try {
                        this.lockAcquired =!0;
                        let e = t();
                        for (this.pendingInLock.push((async () => {
                                try {
                                    await e
                                } catch (e) {}
                            })()),await e; this.pendingInLock.length;) {
                            let e = [...this.pendingInLock];
                            await Promise.all(e),this.pendingInLock.splice(0,e.length)
                        }
                        return await e
                    } finally {
                        this._debug("#_acquireLock","lock released for storage key",this.storageKey),this.lockAcquired =!1
                    }
                })
            } finally {
                this._debug("#_acquireLock","end")
            }
        }
        async _useSession(e) {
            this._debug("#_useSession","begin");
            try {
                let t = await this.__loadSession();
                return await e(t)
            } finally {
                this._debug("#_useSession","end")
            }
        }
        async __loadSession() {
            this._debug("#__loadSession()","begin"),this.lockAcquired || this._debug("#__loadSession()","used outside of an acquired lock!",Error().stack);
            try {
                let t = null,
                    r = await lG(this.storage,this.storageKey);
                if (this._debug("#getSession()","session from storage",r),null!== r && (this._isValidSession(r) ? t = r : (this._debug("#getSession()","session from storage is not valid"),await this._removeSession())),!t) return {
                    data: {
                        session: null
                    },
                    error: null
                };
                let i =!!t.expires_at && 1e3 * t.expires_at - Date.now() < 9e4;
                if (this._debug("#__loadSession()",`session has${i?"":" not"} expired`,"expires_at",t.expires_at),!i) {
                    if (this.userStorage) {
                        let e = await lG(this.userStorage,this.storageKey + "-user");
                        (null == e ? void 0 : e.user) ? t.user = e.user: t.user = l6()
                    }
                    if (this.storage.isServer && t.user &&!t.user.__isUserNotAvailableProxy) {
                        var e;
                        let r = {
                            value: this.suppressGetSessionWarning
                        };
                        t.user = (e = t.user,new Proxy(e,{
                            get: (e,t,i) => {
                                if ("__isInsecureUserWarningProxy" === t) return!0;
                                if ("symbol" == typeof t) {
                                    let r = t.toString();
                                    if ("Symbol(Symbol.toPrimitive)" === r || "Symbol(Symbol.toStringTag)" === r || "Symbol(util.inspect.custom)" === r || "Symbol(nodejs.util.inspect.custom)" === r) return Reflect.get(e,t,i)
                                }
                                return r.value || "string"!= typeof t || (console.warn("Using the user object as returned from supabase.auth.getSession() or from some supabase.auth.onAuthStateChange() events could be insecure! This value comes directly from the storage medium (usually cookies on the server) and may not be authentic.Use supabase.auth.getUser() instead which authenticates the data by contacting the Supabase Auth server."),r.value =!0),Reflect.get(e,t,i)
                            }
                        })),r.value && (this.suppressGetSessionWarning =!0)
                    }
                    return {
                        data: {
                            session: t
                        },
                        error: null
                    }
                }
                let {
                    data: s,
                    error: n
                } = await this._callRefreshToken(t.refresh_token);
                if (n) return this._returnResult({
                    data: {
                        session: null
                    },
                    error: n
                });
                return this._returnResult({
                    data: {
                        session: s
                    },
                    error: null
                })
            } finally {
                this._debug("#__loadSession()","end")
            }
        }
        async getUser(e) {
            if (e) return await this._getUser(e);
            await this.initializePromise;
            let t = await this._acquireLock(this.lockAcquireTimeout,async () => await this._getUser());
            return t.data.user && (this.suppressGetSessionWarning =!0),t
        }
        async _getUser(e) {
            try {
                if (e) return await hr(this.fetch,"GET",`${this.url}/user`,{
                    headers: this.headers,
                    jwt: e,
                    xform: ha
                });
                return await this._useSession(async e => {
                    var t,r,i;
                    let {
                        data: s,
                        error: n
                    } = e;
                    if (n) throw n;
                    return (null == (t = s.session) ? void 0 : t.access_token) || this.hasCustomAuthorizationHeader ? await hr(this.fetch,"GET",`${this.url}/user`,{
                        headers: this.headers,
                        jwt: null!= (i = null == (r = s.session) ? void 0 : r.access_token) ? i : void 0,
                        xform: ha
                    }) : {
                        data: {
                            user: null
                        },
                        error: new l_
                    }
                })
            } catch (e) {
                if (lb(e)) return lE(e) && (await this._removeSession(),await lJ(this.storage,`${this.storageKey}-code-verifier`)),this._returnResult({
                    data: {
                        user: null
                    },
                    error: e
                });
                throw e
            }
        }
        async updateUser(e,t = {}) {
            return await this.initializePromise,await this._acquireLock(this.lockAcquireTimeout,async () => await this._updateUser(e,t))
        }
        async _updateUser(e,t = {}) {
            try {
                return await this._useSession(async r => {
                    let {
                        data: i,
                        error: s
                    } = r;
                    if (s) throw s;
                    if (!i.session) throw new l_;
                    let n = i.session,
                        a = null,
                        o = null;
                    "pkce" === this.flowType && null!= e.email && ([a,o] = await l2(this.storage,this.storageKey));
                    let {
                        data: l,
                        error: h
                    } = await hr(this.fetch,"PUT",`${this.url}/user`,{
                        headers: this.headers,
                        redirectTo: null == t ? void 0 : t.emailRedirectTo,
                        body: Object.assign(Object.assign({},e),{
                            code_challenge: a,
                            code_challenge_method: o
                        }),
                        jwt: n.access_token,
                        xform: ha
                    });
                    if (h) throw h;
                    return n.user = l.user,await this._saveSession(n),await this._notifyAllSubscribers("USER_UPDATED",n),this._returnResult({
                        data: {
                            user: n.user
                        },
                        error: null
                    })
                })
            } catch (e) {
                if (await lJ(this.storage,`${this.storageKey}-code-verifier`),lb(e)) return this._returnResult({
                    data: {
                        user: null
                    },
                    error: e
                });
                throw e
            }
        }
        async setSession(e) {
            return await this.initializePromise,await this._acquireLock(this.lockAcquireTimeout,async () => await this._setSession(e))
        }
        async _setSession(e) {
            try {
                if (!e.access_token ||!e.refresh_token) throw new l_;
                let t = Date.now() / 1e3,
                    r = t,
                    i =!0,
                    s = null,
                    {
                        payload: n
                    } = lX(e.access_token);
                if (n.exp && (i = (r = n.exp) <= t),i) {
                    let {
                        data: t,
                        error: r
                    } = await this._callRefreshToken(e.refresh_token);
                    if (r) return this._returnResult({
                        data: {
                            user: null,
                            session: null
                        },
                        error: r
                    });
                    if (!t) return {
                        data: {
                            user: null,
                            session: null
                        },
                        error: null
                    };
                    s = t
                } else {
                    let {
                        data: i,
                        error: n
                    } = await this._getUser(e.access_token);
                    if (n) return this._returnResult({
                        data: {
                            user: null,
                            session: null
                        },
                        error: n
                    });
                    s = {
                        access_token: e.access_token,
                        refresh_token: e.refresh_token,
                        user: i.user,
                        token_type: "bearer",
                        expires_in: r - t,
                        expires_at: r
                    },await this._saveSession(s),await this._notifyAllSubscribers("SIGNED_IN",s)
                }
                return this._returnResult({
                    data: {
                        user: s.user,
                        session: s
                    },
                    error: null
                })
            } catch (e) {
                if (lb(e)) return this._returnResult({
                    data: {
                        session: null,
                        user: null
                    },
                    error: e
                });
                throw e
            }
        }
        async refreshSession(e) {
            return await this.initializePromise,await this._acquireLock(this.lockAcquireTimeout,async () => await this._refreshSession(e))
        }
        async _refreshSession(e) {
            try {
                return await this._useSession(async t => {
                    var r;
                    if (!e) {
                        let {
                            data: i,
                            error: s
                        } = t;
                        if (s) throw s;
                        e = null!= (r = i.session) ? r : void 0
                    }
                    if (!(null == e ? void 0 : e.refresh_token)) throw new l_;
                    let {
                        data: i,
                        error: s
                    } = await this._callRefreshToken(e.refresh_token);
                    return s ? this._returnResult({
                        data: {
                            user: null,
                            session: null
                        },
                        error: s
                    }) : i ? this._returnResult({
                        data: {
                            user: i.user,
                            session: i
                        },
                        error: null
                    }) : this._returnResult({
                        data: {
                            user: null,
                            session: null
                        },
                        error: null
                    })
                })
            } catch (e) {
                if (lb(e)) return this._returnResult({
                    data: {
                        user: null,
                        session: null
                    },
                    error: e
                });
                throw e
            }
        }
        async _getSessionFromURL(e,t) {
            var r;
            try {
                if (!lz()) throw new lR("No browser detected.");
                if (e.error || e.error_description || e.error_code) throw new lR(e.error_description || "Error in URL with unspecified error_description",{
                    error: e.error || "unspecified_error",
                    code: e.error_code || "unspecified_code"
                });
                switch (t) {
                    case "implicit":
                        if ("pkce" === this.flowType) throw new lP("Not a valid PKCE flow url.");
                        break;
                    case "pkce":
                        if ("implicit" === this.flowType) throw new lR("Not a valid implicit grant flow url.")
                }
                if ("pkce" === t) {
                    if (this._debug("#_initialize()","begin","is PKCE flow",!0),!e.code) throw new lP("No code detected.");
                    let {
                        data: t,
                        error: i
                    } = await this._exchangeCodeForSession(e.code);
                    if (i) throw i;
                    let s = new URL(window.location.href);
                    return s.searchParams.delete("code"),window.history.replaceState(window.history.state,"",s.toString()),{
                        data: {
                            session: t.session,
                            redirectType: null!= (r = t.redirectType) ? r : null
                        },
                        error: null
                    }
                }
                let {
                    provider_token: i,
                    provider_refresh_token: s,
                    access_token: n,
                    refresh_token: a,
                    expires_in: o,
                    expires_at: l,
                    token_type: h
                } = e;
                if (!n ||!o ||!a ||!h) throw new lR("No session defined in URL");
                let u = Math.round(Date.now() / 1e3),
                    c = parseInt(o),
                    d = u + c;
                l && (d = parseInt(l));
                let p = d - u;
                1e3 * p <= 3e4 && console.warn(`@supabase/gotrue-js: Session as retrieved from URL expires in ${p}s,should have been closer to ${c}s`);
                let f = d - c;
                u - f >= 120 ? console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued over 120s ago,URL could be stale",f,d,u) : u - f < 0 && console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued in the future? Check the device clock for skew",f,d,u);
                let {
                    data: m,
                    error: g
                } = await this._getUser(n);
                if (g) throw g;
                let y = {
                    provider_token: i,
                    provider_refresh_token: s,
                    access_token: n,
                    expires_in: c,
                    expires_at: d,
                    refresh_token: a,
                    token_type: h,
                    user: m.user
                };
                return window.location.hash = "",this._debug("#_getSessionFromURL()","clearing window.location.hash"),this._returnResult({
                    data: {
                        session: y,
                        redirectType: e.type
                    },
                    error: null
                })
            } catch (e) {
                if (lb(e)) return this._returnResult({
                    data: {
                        session: null,
                        redirectType: null
                    },
                    error: e
                });
                throw e
            }
        }
        _isImplicitGrantCallback(e) {
            return "function" == typeof this.detectSessionInUrl ? this.detectSessionInUrl(new URL(window.location.href),e) :!!(e.access_token || e.error_description)
        }
        async _isPKCECallback(e) {
            let t = await lG(this.storage,`${this.storageKey}-code-verifier`);
            return!!(e.code && t)
        }
        async signOut(e = {
            scope: "global"
        }) {
            return await this.initializePromise,await this._acquireLock(this.lockAcquireTimeout,async () => await this._signOut(e))
        }
        async _signOut({
            scope: e
        } = {
            scope: "global"
        }) {
            return await this._useSession(async t => {
                var r;
                let {
                    data: i,
                    error: s
                } = t;
                if (s &&!lE(s)) return this._returnResult({
                    error: s
                });
                let n = null == (r = i.session) ? void 0 : r.access_token;
                if (n) {
                    let {
                        error: t
                    } = await this.admin.signOut(n,e);
                    if (t &&!(lb(t) && "AuthApiError" === t.name && (404 === t.status || 401 === t.status || 403 === t.status) || lE(t))) return this._returnResult({
                        error: t
                    })
                }
                return "others"!== e && (await this._removeSession(),await lJ(this.storage,`${this.storageKey}-code-verifier`)),this._returnResult({
                    error: null
                })
            })
        }
        onAuthStateChange(e) {
            let t = Symbol("auth-callback"),
                r = {
                    id: t,
                    callback: e,
                    unsubscribe: () => {
                        this._debug("#unsubscribe()","state change callback with id removed",t),this.stateChangeEmitters.delete(t)
                    }
                };
            return this._debug("#onAuthStateChange()","registered callback with id",t),this.stateChangeEmitters.set(t,r),(async () => {
                await this.initializePromise,await this._acquireLock(this.lockAcquireTimeout,async () => {
                    this._emitInitialSession(t)
                })
            })(),{
                data: {
                    subscription: r
                }
            }
        }
        async _emitInitialSession(e) {
            return await this._useSession(async t => {
                var r,i;
                try {
                    let {
                        data: {
                            session: i
                        },
                        error: s
                    } = t;
                    if (s) throw s;
                    await (null == (r = this.stateChangeEmitters.get(e)) ? void 0 : r.callback("INITIAL_SESSION",i)),this._debug("INITIAL_SESSION","callback id",e,"session",i)
                } catch (t) {
                    await (null == (i = this.stateChangeEmitters.get(e)) ? void 0 : i.callback("INITIAL_SESSION",null)),this._debug("INITIAL_SESSION","callback id",e,"error",t),lE(t) ? console.warn(t) : console.error(t)
                }
            })
        }
        async resetPasswordForEmail(e,t = {}) {
            let r = null,
                i = null;
            "pkce" === this.flowType && ([r,i] = await l2(this.storage,this.storageKey,!0));
            try {
                return await hr(this.fetch,"POST",`${this.url}/recover`,{
                    body: {
                        email: e,
                        code_challenge: r,
                        code_challenge_method: i,
                        gotrue_meta_security: {
                            captcha_token: t.captchaToken
                        }
                    },
                    headers: this.headers,
                    redirectTo: t.redirectTo
                })
            } catch (e) {
                if (await lJ(this.storage,`${this.storageKey}-code-verifier`),lb(e)) return this._returnResult({
                    data: null,
                    error: e
                });
                throw e
            }
        }
        async getUserIdentities() {
            var e;
            try {
                let {
                    data: t,
                    error: r
                } = await this.getUser();
                if (r) throw r;
                return this._returnResult({
                    data: {
                        identities: null!= (e = t.user.identities) ? e : []
                    },
                    error: null
                })
            } catch (e) {
                if (lb(e)) return this._returnResult({
                    data: null,
                    error: e
                });
                throw e
            }
        }
        async linkIdentity(e) {
            return "token" in e ? this.linkIdentityIdToken(e) : this.linkIdentityOAuth(e)
        }
        async linkIdentityOAuth(e) {
            var t;
            try {
                let {
                    data: r,
                    error: i
                } = await this._useSession(async t => {
                    var r,i,s,n,a;
                    let {
                        data: o,
                        error: l
                    } = t;
                    if (l) throw l;
                    let h = await this._getUrlForProvider(`${this.url}/user/identities/authorize`,e.provider,{
                        redirectTo: null == (r = e.options) ? void 0 : r.redirectTo,
                        scopes: null == (i = e.options) ? void 0 : i.scopes,
                        queryParams: null == (s = e.options) ? void 0 : s.queryParams,
                        skipBrowserRedirect:!0
                    });
                    return await hr(this.fetch,"GET",h,{
                        headers: this.headers,
                        jwt: null!= (a = null == (n = o.session) ? void 0 : n.access_token) ? a : void 0
                    })
                });
                if (i) throw i;
                return!lz() || (null == (t = e.options) ? void 0 : t.skipBrowserRedirect) || window.location.assign(null == r ? void 0 : r.url),this._returnResult({
                    data: {
                        provider: e.provider,
                        url: null == r ? void 0 : r.url
                    },
                    error: null
                })
            } catch (t) {
                if (lb(t)) return this._returnResult({
                    data: {
                        provider: e.provider,
                        url: null
                    },
                    error: t
                });
                throw t
            }
        }
        async linkIdentityIdToken(e) {
            return await this._useSession(async t => {
                var r;
                try {
                    let {
                        error: i,
                        data: {
                            session: s
                        }
                    } = t;
                    if (i) throw i;
                    let {
                        options: n,
                        provider: a,
                        token: o,
                        access_token: l,
                        nonce: h
                    } = e,{
                        data: u,
                        error: c
                    } = await hr(this.fetch,"POST",`${this.url}/token?grant_type=id_token`,{
                        headers: this.headers,
                        jwt: null!= (r = null == s ? void 0 : s.access_token) ? r : void 0,
                        body: {
                            provider: a,
                            id_token: o,
                            access_token: l,
                            nonce: h,
                            link_identity:!0,
                            gotrue_meta_security: {
                                captcha_token: null == n ? void 0 : n.captchaToken
                            }
                        },
                        xform: hs
                    });
                    if (c) return this._returnResult({
                        data: {
                            user: null,
                            session: null
                        },
                        error: c
                    });
                    if (!u ||!u.session ||!u.user) return this._returnResult({
                        data: {
                            user: null,
                            session: null
                        },
                        error: new lT
                    });
                    return u.session && (await this._saveSession(u.session),await this._notifyAllSubscribers("USER_UPDATED",u.session)),this._returnResult({
                        data: u,
                        error: c
                    })
                } catch (e) {
                    if (await lJ(this.storage,`${this.storageKey}-code-verifier`),lb(e)) return this._returnResult({
                        data: {
                            user: null,
                            session: null
                        },
                        error: e
                    });
                    throw e
                }
            })
        }
        async unlinkIdentity(e) {
            try {
                return await this._useSession(async t => {
                    var r,i;
                    let {
                        data: s,
                        error: n
                    } = t;
                    if (n) throw n;
                    return await hr(this.fetch,"DELETE",`${this.url}/user/identities/${e.identity_id}`,{
                        headers: this.headers,
                        jwt: null!= (i = null == (r = s.session) ? void 0 : r.access_token) ? i : void 0
                    })
                })
            } catch (e) {
                if (lb(e)) return this._returnResult({
                    data: null,
                    error: e
                });
                throw e
            }
        }
        async _refreshAccessToken(e) {
            let t = `#_refreshAccessToken(${e.substring(0,5)}...)`;
            this._debug(t,"begin");
            try {
                var r,i;
                let s = Date.now();
                return await (r = async r => (r > 0 && await lQ(200 * Math.pow(2,r - 1)),this._debug(t,"refreshing attempt",r),await hr(this.fetch,"POST",`${this.url}/token?grant_type=refresh_token`,{
                    body: {
                        refresh_token: e
                    },
                    headers: this.headers,
                    xform: hs
                })),i = (e,t) => {
                    let r = 200 * Math.pow(2,e);
                    return t && lO(t) && Date.now() + r - s < 3e4
                },new Promise((e,t) => {
                    (async () => {
                        for (let s = 0; s < 1 / 0; s++) try {
                            let t = await r(s);
                            if (!i(s,null,t)) return void e(t)
                        } catch (e) {
                            if (!i(s,e)) return void t(e)
                        }
                    })()
                }))
            } catch (e) {
                if (this._debug(t,"error",e),lb(e)) return this._returnResult({
                    data: {
                        session: null,
                        user: null
                    },
                    error: e
                });
                throw e
            } finally {
                this._debug(t,"end")
            }
        }
        _isValidSession(e) {
            return "object" == typeof e && null!== e && "access_token" in e && "refresh_token" in e && "expires_at" in e
        }
        async _handleProviderSignIn(e,t) {
            let r = await this._getUrlForProvider(`${this.url}/authorize`,e,{
                redirectTo: t.redirectTo,
                scopes: t.scopes,
                queryParams: t.queryParams
            });
            return this._debug("#_handleProviderSignIn()","provider",e,"options",t,"url",r),lz() &&!t.skipBrowserRedirect && window.location.assign(r),{
                data: {
                    provider: e,
                    url: r
                },
                error: null
            }
        }
        async _recoverAndRefresh() {
            var e,t;
            let r = "#_recoverAndRefresh()";
            this._debug(r,"begin");
            try {
                let i = await lG(this.storage,this.storageKey);
                if (i && this.userStorage) {
                    let t = await lG(this.userStorage,this.storageKey + "-user");
                   !this.storage.isServer && Object.is(this.storage,this.userStorage) &&!t && (t = {
                        user: i.user
                    },await lK(this.userStorage,this.storageKey + "-user",t)),i.user = null!= (e = null == t ? void 0 : t.user) ? e : l6()
                } else if (i &&!i.user &&!i.user) {
                    let e = await lG(this.storage,this.storageKey + "-user");
                    e && (null == e ? void 0 : e.user) ? (i.user = e.user,await lJ(this.storage,this.storageKey + "-user"),await lK(this.storage,this.storageKey,i)) : i.user = l6()
                }
                if (this._debug(r,"session from storage",i),!this._isValidSession(i)) {
                    this._debug(r,"session is not valid"),null!== i && await this._removeSession();
                    return
                }
                let s = (null!= (t = i.expires_at) ? t : 1 / 0) * 1e3 - Date.now() < 9e4;
                if (this._debug(r,`session has${s?"":" not"} expired with margin of 90000s`),s) {
                    if (this.autoRefreshToken && i.refresh_token) {
                        let {
                            error: e
                        } = await this._callRefreshToken(i.refresh_token);
                        e && (console.error(e),lO(e) || (this._debug(r,"refresh failed with a non-retryable error,removing the session",e),await this._removeSession()))
                    }
                } else if (i.user &&!0 === i.user.__isUserNotAvailableProxy) try {
                    let {
                        data: e,
                        error: t
                    } = await this._getUser(i.access_token);
                   !t && (null == e ? void 0 : e.user) ? (i.user = e.user,await this._saveSession(i),await this._notifyAllSubscribers("SIGNED_IN",i)) : this._debug(r,"could not get user data,skipping SIGNED_IN notification")
                } catch (e) {
                    console.error("Error getting user data:",e),this._debug(r,"error getting user data,skipping SIGNED_IN notification",e)
                } else await this._notifyAllSubscribers("SIGNED_IN",i)
            } catch (e) {
                this._debug(r,"error",e),console.error(e);
                return
            } finally {
                this._debug(r,"end")
            }
        }
        async _callRefreshToken(e) {
            var t,r;
            if (!e) throw new l_;
            if (this.refreshingDeferred) return this.refreshingDeferred.promise;
            let i = `#_callRefreshToken(${e.substring(0,5)}...)`;
            this._debug(i,"begin");
            try {
                this.refreshingDeferred = new lY;
                let {
                    data: t,
                    error: r
                } = await this._refreshAccessToken(e);
                if (r) throw r;
                if (!t.session) throw new l_;
                await this._saveSession(t.session),await this._notifyAllSubscribers("TOKEN_REFRESHED",t.session);
                let i = {
                    data: t.session,
                    error: null
                };
                return this.refreshingDeferred.resolve(i),i
            } catch (e) {
                if (this._debug(i,"error",e),lb(e)) {
                    let r = {
                        data: null,
                        error: e
                    };
                    return lO(e) || await this._removeSession(),null == (t = this.refreshingDeferred) || t.resolve(r),r
                }
                throw null == (r = this.refreshingDeferred) || r.reject(e),e
            } finally {
                this.refreshingDeferred = null,this._debug(i,"end")
            }
        }
        async _notifyAllSubscribers(e,t,r =!0) {
            let i = `#_notifyAllSubscribers(${e})`;
            this._debug(i,"begin",t,`broadcast = ${r}`);
            try {
                this.broadcastChannel && r && this.broadcastChannel.postMessage({
                    event: e,
                    session: t
                });
                let i = [],
                    s = Array.from(this.stateChangeEmitters.values()).map(async r => {
                        try {
                            await r.callback(e,t)
                        } catch (e) {
                            i.push(e)
                        }
                    });
                if (await Promise.all(s),i.length > 0) {
                    for (let e = 0; e < i.length; e += 1) console.error(i[e]);
                    throw i[0]
                }
            } finally {
                this._debug(i,"end")
            }
        }
        async _saveSession(e) {
            this._debug("#_saveSession()",e),this.suppressGetSessionWarning =!0,await lJ(this.storage,`${this.storageKey}-code-verifier`);
            let t = Object.assign({},e),
                r = t.user &&!0 === t.user.__isUserNotAvailableProxy;
            if (this.userStorage) {
               !r && t.user && await lK(this.userStorage,this.storageKey + "-user",{
                    user: t.user
                });
                let e = Object.assign({},t);
                delete e.user;
                let i = l9(e);
                await lK(this.storage,this.storageKey,i)
            } else {
                let e = l9(t);
                await lK(this.storage,this.storageKey,e)
            }
        }
        async _removeSession() {
            this._debug("#_removeSession()"),this.suppressGetSessionWarning =!1,await lJ(this.storage,this.storageKey),await lJ(this.storage,this.storageKey + "-code-verifier"),await lJ(this.storage,this.storageKey + "-user"),this.userStorage && await lJ(this.userStorage,this.storageKey + "-user"),await this._notifyAllSubscribers("SIGNED_OUT",null)
        }
        _removeVisibilityChangedCallback() {
            this._debug("#_removeVisibilityChangedCallback()");
            let e = this.visibilityChangedCallback;
            this.visibilityChangedCallback = null;
            try {
                e && lz() && (null == window ? void 0 : window.removeEventListener) && window.removeEventListener("visibilitychange",e)
            } catch (e) {
                console.error("removing visibilitychange callback failed",e)
            }
        }
        async _startAutoRefresh() {
            await this._stopAutoRefresh(),this._debug("#_startAutoRefresh()");
            let e = setInterval(() => this._autoRefreshTokenTick(),3e4);
            this.autoRefreshTicker = e,e && "object" == typeof e && "function" == typeof e.unref ? e.unref() : "u" > typeof Deno && "function" == typeof Deno.unrefTimer && Deno.unrefTimer(e);
            let t = setTimeout(async () => {
                await this.initializePromise,await this._autoRefreshTokenTick()
            },0);
            this.autoRefreshTickTimeout = t,t && "object" == typeof t && "function" == typeof t.unref ? t.unref() : "u" > typeof Deno && "function" == typeof Deno.unrefTimer && Deno.unrefTimer(t)
        }
        async _stopAutoRefresh() {
            this._debug("#_stopAutoRefresh()");
            let e = this.autoRefreshTicker;
            this.autoRefreshTicker = null,e && clearInterval(e);
            let t = this.autoRefreshTickTimeout;
            this.autoRefreshTickTimeout = null,t && clearTimeout(t)
        }
        async startAutoRefresh() {
            this._removeVisibilityChangedCallback(),await this._startAutoRefresh()
        }
        async stopAutoRefresh() {
            this._removeVisibilityChangedCallback(),await this._stopAutoRefresh()
        }
        async _autoRefreshTokenTick() {
            this._debug("#_autoRefreshTokenTick()","begin");
            try {
                await this._acquireLock(0,async () => {
                    try {
                        let e = Date.now();
                        try {
                            return await this._useSession(async t => {
                                let {
                                    data: {
                                        session: r
                                    }
                                } = t;
                                if (!r ||!r.refresh_token ||!r.expires_at) return void this._debug("#_autoRefreshTokenTick()","no session");
                                let i = Math.floor((1e3 * r.expires_at - e) / 3e4);
                                this._debug("#_autoRefreshTokenTick()",`access token expires in ${i} ticks,a tick lasts 30000ms,refresh threshold is 3 ticks`),i <= 3 && await this._callRefreshToken(r.refresh_token)
                            })
                        } catch (e) {
                            console.error("Auto refresh tick failed with error.This is likely a transient error.",e)
                        }
                    } finally {
                        this._debug("#_autoRefreshTokenTick()","end")
                    }
                })
            } catch (e) {
                if (e instanceof hf) this._debug("auto refresh token tick lock not available");
                else throw e
            }
        }
        async _handleVisibilityChange() {
            if (this._debug("#_handleVisibilityChange()"),!lz() ||!(null == window ? void 0 : window.addEventListener)) return this.autoRefreshToken && this.startAutoRefresh(),!1;
            try {
                this.visibilityChangedCallback = async () => {
                    try {
                        await this._onVisibilityChanged(!1)
                    } catch (e) {
                        this._debug("#visibilityChangedCallback","error",e)
                    }
                },null == window || window.addEventListener("visibilitychange",this.visibilityChangedCallback),await this._onVisibilityChanged(!0)
            } catch (e) {
                console.error("_handleVisibilityChange",e)
            }
        }
        async _onVisibilityChanged(e) {
            let t = `#_onVisibilityChanged(${e})`;
            this._debug(t,"visibilityState",document.visibilityState),"visible" === document.visibilityState ? (this.autoRefreshToken && this._startAutoRefresh(),e || (await this.initializePromise,await this._acquireLock(this.lockAcquireTimeout,async () => {
                "visible"!== document.visibilityState ? this._debug(t,"acquired the lock to recover the session,but the browser visibilityState is no longer visible,aborting") : await this._recoverAndRefresh()
            }))) : "hidden" === document.visibilityState && this.autoRefreshToken && this._stopAutoRefresh()
        }
        async _getUrlForProvider(e,t,r) {
            let i = [`provider=${encodeURIComponent(t)}`];
            if ((null == r ? void 0 : r.redirectTo) && i.push(`redirect_to=${encodeURIComponent(r.redirectTo)}`),(null == r ? void 0 : r.scopes) && i.push(`scopes=${encodeURIComponent(r.scopes)}`),"pkce" === this.flowType) {
                let [e,t] = await l2(this.storage,this.storageKey),r = new URLSearchParams({
                    code_challenge: `${encodeURIComponent(e)}`,
                    code_challenge_method: `${encodeURIComponent(t)}`
                });
                i.push(r.toString())
            }
            if (null == r ? void 0 : r.queryParams) {
                let e = new URLSearchParams(r.queryParams);
                i.push(e.toString())
            }
            return (null == r ? void 0 : r.skipBrowserRedirect) && i.push(`skip_http_redirect=${r.skipBrowserRedirect}`),`${e}?${i.join("&")}`
        }
        async _unenroll(e) {
            try {
                return await this._useSession(async t => {
                    var r;
                    let {
                        data: i,
                        error: s
                    } = t;
                    return s ? this._returnResult({
                        data: null,
                        error: s
                    }) : await hr(this.fetch,"DELETE",`${this.url}/factors/${e.factorId}`,{
                        headers: this.headers,
                        jwt: null == (r = null == i ? void 0 : i.session) ? void 0 : r.access_token
                    })
                })
            } catch (e) {
                if (lb(e)) return this._returnResult({
                    data: null,
                    error: e
                });
                throw e
            }
        }
        async _enroll(e) {
            try {
                return await this._useSession(async t => {
                    var r,i;
                    let {
                        data: s,
                        error: n
                    } = t;
                    if (n) return this._returnResult({
                        data: null,
                        error: n
                    });
                    let a = Object.assign({
                            friendly_name: e.friendlyName,
                            factor_type: e.factorType
                        },"phone" === e.factorType ? {
                            phone: e.phone
                        } : "totp" === e.factorType ? {
                            issuer: e.issuer
                        } : {}),
                        {
                            data: o,
                            error: l
                        } = await hr(this.fetch,"POST",`${this.url}/factors`,{
                            body: a,
                            headers: this.headers,
                            jwt: null == (r = null == s ? void 0 : s.session) ? void 0 : r.access_token
                        });
                    return l ? this._returnResult({
                        data: null,
                        error: l
                    }) : ("totp" === e.factorType && "totp" === o.type && (null == (i = null == o ? void 0 : o.totp) ? void 0 : i.qr_code) && (o.totp.qr_code = `data:image/svg+xml;utf-8,${o.totp.qr_code}`),this._returnResult({
                        data: o,
                        error: null
                    }))
                })
            } catch (e) {
                if (lb(e)) return this._returnResult({
                    data: null,
                    error: e
                });
                throw e
            }
        }
        async _verify(e) {
            return this._acquireLock(this.lockAcquireTimeout,async () => {
                try {
                    return await this._useSession(async t => {
                        var r;
                        let {
                            data: i,
                            error: s
                        } = t;
                        if (s) return this._returnResult({
                            data: null,
                            error: s
                        });
                        let n = Object.assign({
                                challenge_id: e.challengeId
                            },"webauthn" in e ? {
                                webauthn: Object.assign(Object.assign({},e.webauthn),{
                                    credential_response: "create" === e.webauthn.type ? hS(e.webauthn.credential_response) : h_(e.webauthn.credential_response)
                                })
                            } : {
                                code: e.code
                            }),
                            {
                                data: a,
                                error: o
                            } = await hr(this.fetch,"POST",`${this.url}/factors/${e.factorId}/verify`,{
                                body: n,
                                headers: this.headers,
                                jwt: null == (r = null == i ? void 0 : i.session) ? void 0 : r.access_token
                            });
                        return o ? this._returnResult({
                            data: null,
                            error: o
                        }) : (await this._saveSession(Object.assign({
                            expires_at: Math.round(Date.now() / 1e3) + a.expires_in
                        },a)),await this._notifyAllSubscribers("MFA_CHALLENGE_VERIFIED",a),this._returnResult({
                            data: a,
                            error: o
                        }))
                    })
                } catch (e) {
                    if (lb(e)) return this._returnResult({
                        data: null,
                        error: e
                    });
                    throw e
                }
            })
        }
        async _challenge(e) {
            return this._acquireLock(this.lockAcquireTimeout,async () => {
                try {
                    return await this._useSession(async t => {
                        var r;
                        let {
                            data: i,
                            error: s
                        } = t;
                        if (s) return this._returnResult({
                            data: null,
                            error: s
                        });
                        let n = await hr(this.fetch,"POST",`${this.url}/factors/${e.factorId}/challenge`,{
                            body: e,
                            headers: this.headers,
                            jwt: null == (r = null == i ? void 0 : i.session) ? void 0 : r.access_token
                        });
                        if (n.error) return n;
                        let {
                            data: a
                        } = n;
                        if ("webauthn"!== a.type) return {
                            data: a,
                            error: null
                        };
                        switch (a.webauthn.type) {
                            case "create":
                                return {
                                    data: Object.assign(Object.assign({},a),{
                                        webauthn: Object.assign(Object.assign({},a.webauthn),{
                                            credential_options: Object.assign(Object.assign({},a.webauthn.credential_options),{
                                                publicKey: hx(a.webauthn.credential_options.publicKey)
                                            })
                                        })
                                    }),
                                    error: null
                                };
                            case "request":
                                return {
                                    data: Object.assign(Object.assign({},a),{
                                        webauthn: Object.assign(Object.assign({},a.webauthn),{
                                            credential_options: Object.assign(Object.assign({},a.webauthn.credential_options),{
                                                publicKey: hk(a.webauthn.credential_options.publicKey)
                                            })
                                        })
                                    }),
                                    error: null
                                }
                        }
                    })
                } catch (e) {
                    if (lb(e)) return this._returnResult({
                        data: null,
                        error: e
                    });
                    throw e
                }
            })
        }
        async _challengeAndVerify(e) {
            let {
                data: t,
                error: r
            } = await this._challenge({
                factorId: e.factorId
            });
            return r ? this._returnResult({
                data: null,
                error: r
            }) : await this._verify({
                factorId: e.factorId,
                challengeId: t.id,
                code: e.code
            })
        }
        async _listFactors() {
            var e;
            let {
                data: {
                    user: t
                },
                error: r
            } = await this.getUser();
            if (r) return {
                data: null,
                error: r
            };
            let i = {
                all: [],
                phone: [],
                totp: [],
                webauthn: []
            };
            for (let r of null!= (e = null == t ? void 0 : t.factors) ? e : []) i.all.push(r),"verified" === r.status && i[r.factor_type].push(r);
            return {
                data: i,
                error: null
            }
        }
        async _getAuthenticatorAssuranceLevel(e) {
            var t,r,i,s;
            if (e) try {
                let {
                    payload: i
                } = lX(e),s = null;
                i.aal && (s = i.aal);
                let n = s,
                    {
                        data: {
                            user: a
                        },
                        error: o
                    } = await this.getUser(e);
                if (o) return this._returnResult({
                    data: null,
                    error: o
                });
                (null!= (r = null == (t = null == a ? void 0 : a.factors) ? void 0 : t.filter(e => "verified" === e.status)) ? r : []).length > 0 && (n = "aal2");
                let l = i.amr || [];
                return {
                    data: {
                        currentLevel: s,
                        nextLevel: n,
                        currentAuthenticationMethods: l
                    },
                    error: null
                }
            } catch (e) {
                if (lb(e)) return this._returnResult({
                    data: null,
                    error: e
                });
                throw e
            }
            let {
                data: {
                    session: n
                },
                error: a
            } = await this.getSession();
            if (a) return this._returnResult({
                data: null,
                error: a
            });
            if (!n) return {
                data: {
                    currentLevel: null,
                    nextLevel: null,
                    currentAuthenticationMethods: []
                },
                error: null
            };
            let {
                payload: o
            } = lX(n.access_token),l = null;
            o.aal && (l = o.aal);
            let h = l;
            return (null!= (s = null == (i = n.user.factors) ? void 0 : i.filter(e => "verified" === e.status)) ? s : []).length > 0 && (h = "aal2"),{
                data: {
                    currentLevel: l,
                    nextLevel: h,
                    currentAuthenticationMethods: o.amr || []
                },
                error: null
            }
        }
        async _getAuthorizationDetails(e) {
            try {
                return await this._useSession(async t => {
                    let {
                        data: {
                            session: r
                        },
                        error: i
                    } = t;
                    return i ? this._returnResult({
                        data: null,
                        error: i
                    }) : r ? await hr(this.fetch,"GET",`${this.url}/oauth/authorizations/${e}`,{
                        headers: this.headers,
                        jwt: r.access_token,
                        xform: e => ({
                            data: e,
                            error: null
                        })
                    }) : this._returnResult({
                        data: null,
                        error: new l_
                    })
                })
            } catch (e) {
                if (lb(e)) return this._returnResult({
                    data: null,
                    error: e
                });
                throw e
            }
        }
        async _approveAuthorization(e,t) {
            try {
                return await this._useSession(async r => {
                    let {
                        data: {
                            session: i
                        },
                        error: s
                    } = r;
                    if (s) return this._returnResult({
                        data: null,
                        error: s
                    });
                    if (!i) return this._returnResult({
                        data: null,
                        error: new l_
                    });
                    let n = await hr(this.fetch,"POST",`${this.url}/oauth/authorizations/${e}/consent`,{
                        headers: this.headers,
                        jwt: i.access_token,
                        body: {
                            action: "approve"
                        },
                        xform: e => ({
                            data: e,
                            error: null
                        })
                    });
                    return n.data && n.data.redirect_url && lz() &&!(null == t ? void 0 : t.skipBrowserRedirect) && window.location.assign(n.data.redirect_url),n
                })
            } catch (e) {
                if (lb(e)) return this._returnResult({
                    data: null,
                    error: e
                });
                throw e
            }
        }
        async _denyAuthorization(e,t) {
            try {
                return await this._useSession(async r => {
                    let {
                        data: {
                            session: i
                        },
                        error: s
                    } = r;
                    if (s) return this._returnResult({
                        data: null,
                        error: s
                    });
                    if (!i) return this._returnResult({
                        data: null,
                        error: new l_
                    });
                    let n = await hr(this.fetch,"POST",`${this.url}/oauth/authorizations/${e}/consent`,{
                        headers: this.headers,
                        jwt: i.access_token,
                        body: {
                            action: "deny"
                        },
                        xform: e => ({
                            data: e,
                            error: null
                        })
                    });
                    return n.data && n.data.redirect_url && lz() &&!(null == t ? void 0 : t.skipBrowserRedirect) && window.location.assign(n.data.redirect_url),n
                })
            } catch (e) {
                if (lb(e)) return this._returnResult({
                    data: null,
                    error: e
                });
                throw e
            }
        }
        async _listOAuthGrants() {
            try {
                return await this._useSession(async e => {
                    let {
                        data: {
                            session: t
                        },
                        error: r
                    } = e;
                    return r ? this._returnResult({
                        data: null,
                        error: r
                    }) : t ? await hr(this.fetch,"GET",`${this.url}/user/oauth/grants`,{
                        headers: this.headers,
                        jwt: t.access_token,
                        xform: e => ({
                            data: e,
                            error: null
                        })
                    }) : this._returnResult({
                        data: null,
                        error: new l_
                    })
                })
            } catch (e) {
                if (lb(e)) return this._returnResult({
                    data: null,
                    error: e
                });
                throw e
            }
        }
        async _revokeOAuthGrant(e) {
            try {
                return await this._useSession(async t => {
                    let {
                        data: {
                            session: r
                        },
                        error: i
                    } = t;
                    return i ? this._returnResult({
                        data: null,
                        error: i
                    }) : r ? (await hr(this.fetch,"DELETE",`${this.url}/user/oauth/grants`,{
                        headers: this.headers,
                        jwt: r.access_token,
                        query: {
                            client_id: e.clientId
                        },
                        noResolveJson:!0
                    }),{
                        data: {},
                        error: null
                    }) : this._returnResult({
                        data: null,
                        error: new l_
                    })
                })
            } catch (e) {
                if (lb(e)) return this._returnResult({
                    data: null,
                    error: e
                });
                throw e
            }
        }
        async fetchJwk(e,t = {
            keys: []
        }) {
            let r = t.keys.find(t => t.kid === e);
            if (r) return r;
            let i = Date.now();
            if ((r = this.jwks.keys.find(t => t.kid === e)) && this.jwks_cached_at + 6e5 > i) return r;
            let {
                data: s,
                error: n
            } = await hr(this.fetch,"GET",`${this.url}/.well-known/jwks.json`,{
                headers: this.headers
            });
            if (n) throw n;
            return s.keys && 0!== s.keys.length && (this.jwks = s,this.jwks_cached_at = i,r = s.keys.find(t => t.kid === e)) ? r : null
        }
        async getClaims(e,t = {}) {
            try {
                var r;
                let i,s = e;
                if (!s) {
                    let {
                        data: e,
                        error: t
                    } = await this.getSession();
                    if (t ||!e.session) return this._returnResult({
                        data: null,
                        error: t
                    });
                    s = e.session.access_token
                }
                let {
                    header: n,
                    payload: a,
                    signature: o,
                    raw: {
                        header: l,
                        payload: h
                    }
                } = lX(s);
                (null == t ? void 0 : t.allowExpired) || function(e) {
                    if (!e) throw Error("Missing exp claim");
                    if (e <= Math.floor(Date.now() / 1e3)) throw Error("JWT has expired")
                }(a.exp);
                let u =!n.alg || n.alg.startsWith("HS") ||!n.kid ||!("crypto" in globalThis && "subtle" in globalThis.crypto) ? null : await this.fetchJwk(n.kid,(null == t ? void 0 : t.keys) ? {
                    keys: t.keys
                } : null == t ? void 0 : t.jwks);
                if (!u) {
                    let {
                        error: e
                    } = await this.getUser(s);
                    if (e) throw e;
                    return {
                        data: {
                            claims: a,
                            header: n,
                            signature: o
                        },
                        error: null
                    }
                }
                let c = function(e) {
                        switch (e) {
                            case "RS256":
                                return {
                                    name: "RSASSA-PKCS1-v1_5",
                                    hash: {
                                        name: "SHA-256"
                                    }
                                };
                            case "ES256":
                                return {
                                    name: "ECDSA",
                                    namedCurve: "P-256",
                                    hash: {
                                        name: "SHA-256"
                                    }
                                };
                            default:
                                throw Error("Invalid alg claim")
                        }
                    }(n.alg),
                    d = await crypto.subtle.importKey("jwk",u,c,!0,["verify"]);
                if (!await crypto.subtle.verify(c,d,o,(r = `${l}.${h}`,i = [],! function(e,t) {
                        for (let r = 0; r < e.length; r += 1) {
                            let i = e.charCodeAt(r);
                            if (i > 55295 && i <= 56319) {
                                let t = (i - 55296) * 1024 & 65535;
                                i = (e.charCodeAt(r + 1) - 56320 & 65535 | t) + 65536,r += 1
                            }! function(e,t) {
                                if (e <= 127) return t(e);
                                if (e <= 2047) {
                                    t(192 | e >> 6),t(128 | 63 & e);
                                    return
                                }
                                if (e <= 65535) {
                                    t(224 | e >> 12),t(128 | e >> 6 & 63),t(128 | 63 & e);
                                    return
                                }
                                if (e <= 1114111) {
                                    t(240 | e >> 18),t(128 | e >> 12 & 63),t(128 | e >> 6 & 63),t(128 | 63 & e);
                                    return
                                }
                                throw Error(`Unrecognized Unicode codepoint: ${e.toString(16)}`)
                            }(i,t)
                        }
                    }(r,e => i.push(e)),new Uint8Array(i)))) throw new lI("Invalid JWT signature");
                return {
                    data: {
                        claims: a,
                        header: n,
                        signature: o
                    },
                    error: null
                }
            } catch (e) {
                if (lb(e)) return this._returnResult({
                    data: null,
                    error: e
                });
                throw e
            }
        }
        async signInWithPasskey(e) {
            var t,r,i;
            l4(this.experimental);
            try {
                if (!hT()) return this._returnResult({
                    data: null,
                    error: new lk("Browser does not support WebAuthn",null)
                });
                let {
                    data: s,
                    error: n
                } = await this._startPasskeyAuthentication({
                    options: {
                        captchaToken: null == (t = null == e ? void 0 : e.options) ? void 0 : t.captchaToken
                    }
                });
                if (n ||!s) return this._returnResult({
                    data: null,
                    error: n
                });
                let a = hk(s.options),
                    o = null!= (i = null == (r = null == e ? void 0 : e.options) ? void 0 : r.signal) ? i : hb.createNewAbortSignal(),
                    {
                        data: l,
                        error: h
                    } = await hR({
                        publicKey: a,
                        signal: o
                    });
                if (h ||!l) return this._returnResult({
                    data: null,
                    error: null!= h ? h : new lk("WebAuthn ceremony failed",null)
                });
                let u = h_(l);
                return this._verifyPasskeyAuthentication({
                    challengeId: s.challenge_id,
                    credential: u
                })
            } catch (e) {
                if (lb(e)) return this._returnResult({
                    data: null,
                    error: e
                });
                throw e
            }
        }
        async registerPasskey(e) {
            var t,r;
            l4(this.experimental);
            try {
                if (!hT()) return this._returnResult({
                    data: null,
                    error: new lk("Browser does not support WebAuthn",null)
                });
                let {
                    data: i,
                    error: s
                } = await this._startPasskeyRegistration();
                if (s ||!i) return this._returnResult({
                    data: null,
                    error: s
                });
                let n = hx(i.options),
                    a = null!= (r = null == (t = null == e ? void 0 : e.options) ? void 0 : t.signal) ? r : hb.createNewAbortSignal(),
                    {
                        data: o,
                        error: l
                    } = await hA({
                        publicKey: n,
                        signal: a
                    });
                if (l ||!o) return this._returnResult({
                    data: null,
                    error: null!= l ? l : new lk("WebAuthn ceremony failed",null)
                });
                let h = hS(o);
                return this._verifyPasskeyRegistration({
                    challengeId: i.challenge_id,
                    credential: h
                })
            } catch (e) {
                if (lb(e)) return this._returnResult({
                    data: null,
                    error: e
                });
                throw e
            }
        }
        async _startPasskeyRegistration() {
            l4(this.experimental);
            try {
                return await this._useSession(async e => {
                    let {
                        data: {
                            session: t
                        },
                        error: r
                    } = e;
                    if (r) return this._returnResult({
                        data: null,
                        error: r
                    });
                    if (!t) return this._returnResult({
                        data: null,
                        error: new l_
                    });
                    let {
                        data: i,
                        error: s
                    } = await hr(this.fetch,"POST",`${this.url}/passkeys/registration/options`,{
                        headers: this.headers,
                        jwt: t.access_token,
                        body: {}
                    });
                    return s ? this._returnResult({
                        data: null,
                        error: s
                    }) : this._returnResult({
                        data: i,
                        error: null
                    })
                })
            } catch (e) {
                if (lb(e)) return this._returnResult({
                    data: null,
                    error: e
                });
                throw e
            }
        }
        async _verifyPasskeyRegistration(e) {
            l4(this.experimental);
            try {
                return await this._useSession(async t => {
                    let {
                        data: {
                            session: r
                        },
                        error: i
                    } = t;
                    if (i) return this._returnResult({
                        data: null,
                        error: i
                    });
                    if (!r) return this._returnResult({
                        data: null,
                        error: new l_
                    });
                    let {
                        data: s,
                        error: n
                    } = await hr(this.fetch,"POST",`${this.url}/passkeys/registration/verify`,{
                        headers: this.headers,
                        jwt: r.access_token,
                        body: {
                            challenge_id: e.challengeId,
                            credential: e.credential
                        }
                    });
                    return n ? this._returnResult({
                        data: null,
                        error: n
                    }) : this._returnResult({
                        data: s,
                        error: null
                    })
                })
            } catch (e) {
                if (lb(e)) return this._returnResult({
                    data: null,
                    error: e
                });
                throw e
            }
        }
        async _startPasskeyAuthentication(e) {
            var t;
            l4(this.experimental);
            try {
                let {
                    data: r,
                    error: i
                } = await hr(this.fetch,"POST",`${this.url}/passkeys/authentication/options`,{
                    headers: this.headers,
                    body: {
                        gotrue_meta_security: {
                            captcha_token: null == (t = null == e ? void 0 : e.options) ? void 0 : t.captchaToken
                        }
                    }
                });
                if (i) return this._returnResult({
                    data: null,
                    error: i
                });
                return this._returnResult({
                    data: r,
                    error: null
                })
            } catch (e) {
                if (lb(e)) return this._returnResult({
                    data: null,
                    error: e
                });
                throw e
            }
        }
        async _verifyPasskeyAuthentication(e) {
            l4(this.experimental);
            try {
                let {
                    data: t,
                    error: r
                } = await hr(this.fetch,"POST",`${this.url}/passkeys/authentication/verify`,{
                    headers: this.headers,
                    body: {
                        challenge_id: e.challengeId,
                        credential: e.credential
                    },
                    xform: hs
                });
                if (r) return this._returnResult({
                    data: null,
                    error: r
                });
                return t.session && (await this._saveSession(t.session),await this._notifyAllSubscribers("SIGNED_IN",t.session)),this._returnResult({
                    data: t,
                    error: null
                })
            } catch (e) {
                if (lb(e)) return this._returnResult({
                    data: null,
                    error: e
                });
                throw e
            }
        }
        async _listPasskeys() {
            l4(this.experimental);
            try {
                return await this._useSession(async e => {
                    let {
                        data: {
                            session: t
                        },
                        error: r
                    } = e;
                    if (r) return this._returnResult({
                        data: null,
                        error: r
                    });
                    if (!t) return this._returnResult({
                        data: null,
                        error: new l_
                    });
                    let {
                        data: i,
                        error: s
                    } = await hr(this.fetch,"GET",`${this.url}/passkeys`,{
                        headers: this.headers,
                        jwt: t.access_token,
                        xform: e => ({
                            data: e,
                            error: null
                        })
                    });
                    return s ? this._returnResult({
                        data: null,
                        error: s
                    }) : this._returnResult({
                        data: i,
                        error: null
                    })
                })
            } catch (e) {
                if (lb(e)) return this._returnResult({
                    data: null,
                    error: e
                });
                throw e
            }
        }
        async _updatePasskey(e) {
            l4(this.experimental);
            try {
                return await this._useSession(async t => {
                    let {
                        data: {
                            session: r
                        },
                        error: i
                    } = t;
                    if (i) return this._returnResult({
                        data: null,
                        error: i
                    });
                    if (!r) return this._returnResult({
                        data: null,
                        error: new l_
                    });
                    let {
                        data: s,
                        error: n
                    } = await hr(this.fetch,"PATCH",`${this.url}/passkeys/${e.passkeyId}`,{
                        headers: this.headers,
                        jwt: r.access_token,
                        body: {
                            friendly_name: e.friendlyName
                        }
                    });
                    return n ? this._returnResult({
                        data: null,
                        error: n
                    }) : this._returnResult({
                        data: s,
                        error: null
                    })
                })
            } catch (e) {
                if (lb(e)) return this._returnResult({
                    data: null,
                    error: e
                });
                throw e
            }
        }
        async _deletePasskey(e) {
            l4(this.experimental);
            try {
                return await this._useSession(async t => {
                    let {
                        data: {
                            session: r
                        },
                        error: i
                    } = t;
                    if (i) return this._returnResult({
                        data: null,
                        error: i
                    });
                    if (!r) return this._returnResult({
                        data: null,
                        error: new l_
                    });
                    let {
                        error: s
                    } = await hr(this.fetch,"DELETE",`${this.url}/passkeys/${e.passkeyId}`,{
                        headers: this.headers,
                        jwt: r.access_token,
                        noResolveJson:!0
                    });
                    return s ? this._returnResult({
                        data: null,
                        error: s
                    }) : this._returnResult({
                        data: null,
                        error: null
                    })
                })
            } catch (e) {
                if (lb(e)) return this._returnResult({
                    data: null,
                    error: e
                });
                throw e
            }
        }
    }
    hM.nextInstanceID = {};
    let hL = hM,
        hD = "";
    hD = "u" > typeof Deno ? "deno" : "u" > typeof document ? "web" : "u" > typeof navigator && "ReactNative" === navigator.product ? "react-native" : "node";
    let hU = {
            headers: {
                "X-Client-Info": `supabase-js-${hD}/2.106.2`
            }
        },
        hB = {
            schema: "public"
        },
        hV = {
            autoRefreshToken:!0,
            persistSession:!0,
            detectSessionInUrl:!0,
            flowType: "implicit"
        },
        hF = {},
        hz = {
            enabled:!1,
            respectSamplingDecision:!0
        },
        hq = null;

    function hH(e) {
        return (hH = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e!== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function hW(e,t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            t && (i = i.filter(function(t) {
                return Object.getOwnPropertyDescriptor(e,t).enumerable
            })),r.push.apply(r,i)
        }
        return r
    }

    function hK(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = null!= arguments[t] ? arguments[t] : {};
            t % 2 ? hW(Object(r),!0).forEach(function(t) {
               ! function(e,t,r) {
                    var i;
                    (i = function(e,t) {
                        if ("object"!= hH(e) ||!e) return e;
                        var r = e[Symbol.toPrimitive];
                        if (void 0!== r) {
                            var i = r.call(e,t || "default");
                            if ("object"!= hH(i)) return i;
                            throw TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === t ? String : Number)(e)
                    }(t,"string"),(t = "symbol" == hH(i) ? i : i + "") in e) ? Object.defineProperty(e,t,{
                        value: r,
                        enumerable:!0,
                        configurable:!0,
                        writable:!0
                    }): e[t] = r
                }(e,t,r[t])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)) : hW(Object(r)).forEach(function(t) {
                Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))
            })
        }
        return e
    }
    async function hG(e,t,r) {
        if (! function(e,t) {
                let r;
                if (!e ||!t || 0 === t.length) return!1;
                if (e instanceof URL) r = e;
                else try {
                    r = new URL(e)
                } catch (e) {
                    return!1
                }
                for (let e of t) try {
                    if ("string" == typeof e) {
                        if (function(e,t) {
                                if (t === e) return!0;
                                if (t.startsWith("*.")) {
                                    let r = t.slice(2);
                                    if (e.endsWith(r) && (e === r || e.endsWith("." + r))) return!0
                                }
                                return!1
                            }(r.hostname,e)) return!0
                    } else if (e instanceof RegExp) {
                        if (e.test(r.hostname)) return!0
                    } else if ("function" == typeof e && e(r)) return!0
                } catch (e) {
                    continue
                }
                return!1
            }("string" == typeof e || e instanceof URL ? e : e.url,t)) return null;
        let i = await
        function() {
            var e,t,r,i;
            return e = this,t = void 0,r = void 0,i = function*() {
                try {
                    let e = yield(null === hq && (hq =
                        import ("@opentelemetry/api").catch(() => null)),hq);
                    if (!e ||!e.propagation ||!e.context) return null;
                    let t = {};
                    e.propagation.inject(e.context.active(),t);
                    let r = t.traceparent;
                    if (!r) return null;
                    return {
                        traceparent: r,
                        tracestate: t.tracestate,
                        baggage: t.baggage
                    }
                } catch (e) {
                    return null
                }
            },new(r || (r = Promise))(function(s,n) {
                function a(e) {
                    try {
                        l(i.next(e))
                    } catch (e) {
                        n(e)
                    }
                }

                function o(e) {
                    try {
                        l(i.throw(e))
                    } catch (e) {
                        n(e)
                    }
                }

                function l(e) {
                    var t;
                    e.done ? s(e.value) : ((t = e.value) instanceof r ? t : new r(function(e) {
                        e(t)
                    })).then(a,o)
                }
                l((i = i.apply(e,t || [])).next())
            })
        }();
        if (!i ||!i.traceparent) return null;
        if (r) {
            let e = function(e) {
                if (!e || "string"!= typeof e) return null;
                let t = e.split("-");
                if (4!== t.length) return null;
                let [r,i,s,n] = t;
                if (2!== r.length || 32!== i.length || 16!== s.length || 2!== n.length) return null;
                let a = /^[0-9a-f]+$/i;
                return a.test(r) && a.test(i) && a.test(s) && a.test(n) && "00000000000000000000000000000000"!== i && "0000000000000000"!== s ? {
                    version: r,
                    traceId: i,
                    parentId: s,
                    traceFlags: n,
                    isSampled: (1 & parseInt(n,16)) == 1
                } : null
            }(i.traceparent);
            if (e &&!e.isSampled) return null
        }
        return i
    }

    function hJ(e) {
        return "boolean" == typeof e ? {
            enabled: e
        } : e
    }
    var hY = class extends hL {
            constructor(e) {
                super(e)
            }
        },
        hX = class {
            constructor(e,t,r) {
                var i,s,n;
                this.supabaseUrl = e,this.supabaseKey = t;
                const a = function(e) {
                    let t = null == e ? void 0 : e.trim();
                    if (!t) throw Error("supabaseUrl is required.");
                    if (!t.match(/^https?:\/\//i)) throw Error("Invalid supabaseUrl: Must be a valid HTTP or HTTPS URL.");
                    try {
                        return new URL(t.endsWith("/") ? t : t + "/")
                    } catch (e) {
                        throw Error("Invalid supabaseUrl: Provided URL is malformed.")
                    }
                }(e);
                if (!t) throw Error("supabaseKey is required.");
                this.realtimeUrl = new URL("realtime/v1",a),this.realtimeUrl.protocol = this.realtimeUrl.protocol.replace("http","ws"),this.authUrl = new URL("auth/v1",a),this.storageUrl = new URL("storage/v1",a),this.functionsUrl = new URL("functions/v1",a);
                const o = `sb-${a.hostname.split(".")[0]}-auth-token`,
                    l = function(e,t) {
                        var r,i,s,n,a,o;
                        let {
                            db: l,
                            auth: h,
                            realtime: u,
                            global: c
                        } = e,{
                            db: d,
                            auth: p,
                            realtime: f,
                            global: m
                        } = t,g = hJ(e.tracePropagation),y = hJ(t.tracePropagation),v = {
                            db: hK(hK({},d),l),
                            auth: hK(hK({},p),h),
                            realtime: hK(hK({},f),u),
                            storage: {},
                            global: hK(hK(hK({},m),c),{},{
                                headers: hK(hK({},null!= (r = null == m ? void 0 : m.headers) ? r : {}),null!= (i = null == c ? void 0 : c.headers) ? i : {})
                            }),
                            tracePropagation: {
                                enabled: null!= (s = null!= (n = null == g ? void 0 : g.enabled) ? n : null == y ? void 0 : y.enabled) && s,
                                respectSamplingDecision: null == (a = null!= (o = null == g ? void 0 : g.respectSamplingDecision) ? o : null == y ? void 0 : y.respectSamplingDecision) || a
                            },
                            accessToken: async () => ""
                        };
                        return e.accessToken ? v.accessToken = e.accessToken : delete v.accessToken,v
                    }(null!= r ? r : {},{
                        db: hB,
                        realtime: hF,
                        auth: hK(hK({},hV),{},{
                            storageKey: o
                        }),
                        global: hU,
                        tracePropagation: hz
                    });
                this.settings = l,this.storageKey = null!= (i = l.auth.storageKey) ? i : "",this.headers = null!= (s = l.global.headers) ? s : {},l.accessToken ? (this.accessToken = l.accessToken,this.auth = new Proxy({},{
                    get: (e,t) => {
                        throw Error(`@supabase/supabase-js: Supabase Client is configured with the accessToken option,accessing supabase.auth.${String(t)} is not possible`)
                    }
                })) : this.auth = this._initSupabaseAuthClient(null!= (n = l.auth) ? n : {},this.headers,l.global.fetch),this.fetch = ((e,t,r,i,s) => {
                    let n = i ? (...e) => i(...e) : (...e) => fetch(...e),
                        a = Headers,
                        o = (null == s ? void 0 : s.enabled) ===!0,
                        l = (null == s ? void 0 : s.respectSamplingDecision)!==!1,
                        h = o ? function(e) {
                            let t = [];
                            try {
                                let r = new URL(e);
                                t.push(r.hostname)
                            } catch (e) {}
                            return t.push("*.supabase.co","*.supabase.in"),t.push("localhost","127.0.0.1","[::1]"),t
                        }(t) : null;
                    return async (t,i) => {
                        var s;
                        let o = null!= (s = await r()) ? s : e,
                            u = new a(null == i ? void 0 : i.headers);
                        if (u.has("apikey") || u.set("apikey",e),u.has("Authorization") || u.set("Authorization",`Bearer ${o}`),h) {
                            let e = await hG(t,h,l);
                            e && (e.traceparent &&!u.has("traceparent") && u.set("traceparent",e.traceparent),e.tracestate &&!u.has("tracestate") && u.set("tracestate",e.tracestate),e.baggage &&!u.has("baggage") && u.set("baggage",e.baggage))
                        }
                        return n(t,hK(hK({},i),{},{
                            headers: u
                        }))
                    }
                })(t,e,this._getAccessToken.bind(this),l.global.fetch,l.tracePropagation),this.realtime = this._initRealtimeClient(hK({
                    headers: this.headers,
                    accessToken: this._getAccessToken.bind(this),
                    fetch: this.fetch
                },l.realtime)),this.accessToken && Promise.resolve(this.accessToken()).then(e => this.realtime.setAuth(e)).catch(e => console.warn("Failed to set initial Realtime auth token:",e)),this.rest = new aY(new URL("rest/v1",a).href,{
                    headers: this.headers,
                    schema: l.db.schema,
                    fetch: this.fetch,
                    timeout: l.db.timeout,
                    urlLengthLimit: l.db.urlLengthLimit
                }),this.storage = new lp(this.storageUrl.href,this.headers,this.fetch,null == r ? void 0 : r.storage),l.accessToken || this._listenForAuthEvents()
            }
            get functions() {
                return new aM(this.functionsUrl.href,{
                    headers: this.headers,
                    customFetch: this.fetch
                })
            }
            from(e) {
                return this.rest.from(e)
            }
            schema(e) {
                return this.rest.schema(e)
            }
            rpc(e,t = {},r = {
                head:!1,
                get:!1,
                count: void 0
            }) {
                return this.rest.rpc(e,t,r)
            }
            channel(e,t = {
                config: {}
            }) {
                return this.realtime.channel(e,t)
            }
            getChannels() {
                return this.realtime.getChannels()
            }
            removeChannel(e) {
                return this.realtime.removeChannel(e)
            }
            removeAllChannels() {
                return this.realtime.removeAllChannels()
            }
            async _getAccessToken() {
                var e,t;
                if (this.accessToken) return await this.accessToken();
                let {
                    data: r
                } = await this.auth.getSession();
                return null!= (e = null == (t = r.session) ? void 0 : t.access_token) ? e : this.supabaseKey
            }
            _initSupabaseAuthClient({
                autoRefreshToken: e,
                persistSession: t,
                detectSessionInUrl: r,
                storage: i,
                userStorage: s,
                storageKey: n,
                flowType: a,
                lock: o,
                debug: l,
                throwOnError: h,
                experimental: u,
                lockAcquireTimeout: c,
                skipAutoInitialize: d
            },p,f) {
                let m = {
                    Authorization: `Bearer ${this.supabaseKey}`,
                    apikey: `${this.supabaseKey}`
                };
                return new hY({
                    url: this.authUrl.href,
                    headers: hK(hK({},m),p),
                    storageKey: n,
                    autoRefreshToken: e,
                    persistSession: t,
                    detectSessionInUrl: r,
                    storage: i,
                    userStorage: s,
                    flowType: a,
                    lock: o,
                    debug: l,
                    throwOnError: h,
                    experimental: u,
                    fetch: f,
                    lockAcquireTimeout: c,
                    skipAutoInitialize: d,
                    hasCustomAuthorizationHeader: Object.keys(this.headers).some(e => "authorization" === e.toLowerCase())
                })
            }
            _initRealtimeClient(e) {
                return new oI(this.realtimeUrl.href,hK(hK({},e),{},{
                    params: hK(hK({},{
                        apikey: this.supabaseKey
                    }),null == e ? void 0 : e.params)
                }))
            }
            _listenForAuthEvents() {
                return this.auth.onAuthStateChange((e,t) => {
                    this._handleTokenChanged(e,"CLIENT",null == t ? void 0 : t.access_token)
                })
            }
            _handleTokenChanged(e,t,r) {
                ("TOKEN_REFRESHED" === e || "SIGNED_IN" === e) && this.changedAccessToken!== r ? (this.changedAccessToken = r,this.realtime.setAuth(r)) : "SIGNED_OUT" === e && (this.realtime.setAuth(),"STORAGE" == t && this.auth.signOut(),this.changedAccessToken = void 0)
            }
        };
    (function() {
        if ("u" > typeof window) return!1;
        let e = globalThis.process;
        if (!e) return!1;
        let t = e.version;
        if (null == t) return!1;
        let r = t.match(/^v(\d+)\./);
        return!!r && 18 >= parseInt(r[1],10)
    })() && console.warn("⚠️  Node.js 18 and below are deprecated and will no longer be supported in future versions of @supabase/supabase-js.Please upgrade to Node.js 20 or later.For more information,visit: https://github.com/orgs/supabase/discussions/37217");
    let hQ = new hX("https://icnscyilifmurzsqzsrs.supabase.co","sb_publishable_YKn0x1-VZ1zfswFbsCEBHA_x9wISTso",void 0),
        hZ = [-2.5,1.2,-1,2,-1.8,.8,-2,1.5,-.5,2.2];

    function h0() {
        let [e,t] = (0,R.useState)(""),[r,i] = (0,R.useState)(""),[s,n] = (0,R.useState)([]),[a,o] = (0,R.useState)(!0),[l,h] = (0,R.useState)(!1),u = (0,R.useRef)(0);
        async function c() {
            try {
                let {
                    data: e
                } = await hQ.from("guestbook").select("*").order("t",{
                    ascending:!1
                });
                e && e.length > 0 && (n(e),u.current = e[0].t)
            } catch {} finally {
                o(!1)
            }
        }
        async function d() {
            try {
                let {
                    data: e
                } = await hQ.from("guestbook").select("*").gt("t",u.current).order("t",{
                    ascending:!1
                });
                e && e.length > 0 && (n(t => [...e,...t]),u.current = e[0].t)
            } catch {}
        }(0,R.useEffect)(() => {
            c();
            let e = setInterval(d,2e3);
            return () => clearInterval(e)
        },[]);
        let p = async s => {
            if (s.preventDefault(),e.trim() && r.trim() &&!l) {
                h(!0);
                try {
                    let s = {
                        name: e.trim(),
                        msg: r.trim(),
                        t: Date.now()
                    };
                    await hQ.from("guestbook").insert(s),t(""),i("")
                } catch {} finally {
                    h(!1)
                }
            }
        };
        return (0,A.jsxs)("section",{
            className: "relative py-16 sm:py-20 md:py-28 lg:py-36 overflow-hidden",
            children: [(0,A.jsx)("div",{
                className: "absolute inset-0 bg-gradient-to-b from-[var(--cream)] via-white to-[var(--cream)]"
            }),(0,A.jsxs)("div",{
                className: "relative z-10 mx-auto px-4 sm:px-6 max-w-3xl",
                children: [(0,A.jsxs)(nQ.div,{
                    initial: {
                        opacity: 0,
                        y: 30
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    viewport: {
                        once:!0,
                        margin: "-50px"
                    },
                    transition: {
                        duration: .8
                    },
                    className: "text-center mb-10 md:mb-14",
                    children: [(0,A.jsx)(nQ.div,{
                        initial: {
                            scale: 0
                        },
                        whileInView: {
                            scale: 1
                        },
                        viewport: {
                            once:!0
                        },
                        transition: {
                            duration: .5
                        },
                        className: "mb-5",
                        children: (0,A.jsx)(aj,{
                            className: "w-8 h-8 mx-auto text-[#c9a050]"
                        })
                    }),(0,A.jsx)("h2",{
                        className: "font-serif text-3xl sm:text-4xl md:text-5xl text-foreground mb-4",
                        children: "Yaxshi Tilaklar"
                    }),(0,A.jsx)("p",{
                        className: "text-muted-foreground text-base sm:text-lg mb-4",
                        children: "Bizga eng chiroyli tilaklaringizni qoldiring"
                    }),(0,A.jsx)("div",{
                        className: "w-24 h-px bg-gradient-to-r from-transparent via-[#c9a050] to-transparent mx-auto"
                    })]
                }),(0,A.jsxs)(nQ.form,{
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    viewport: {
                        once:!0
                    },
                    transition: {
                        duration: .8,
                        delay: .2
                    },
                    onSubmit: p,
                    className: "flex flex-col gap-4 max-w-lg mx-auto mb-10",
                    autoComplete: "off",
                    children: [(0,A.jsx)("input",{
                        type: "text",
                        value: e,
                        onChange: e => t(e.target.value),
                        maxLength: 40,
                        placeholder: "Ismingiz",
                        required:!0,
                        className: "w-full font-sans text-lg text-foreground bg-white border border-[#e0c486]/70 rounded-xl px-4 py-3 outline-none focus:border-[#c9a050] focus:ring-2 focus:ring-[#c9a050]/18 transition-all"
                    }),(0,A.jsx)("textarea",{
                        value: r,
                        onChange: e => i(e.target.value),
                        maxLength: 240,
                        placeholder: "Tilak va tabriklaringiz...",
                        required:!0,
                        rows: 4,
                        className: "w-full font-sans text-lg text-foreground bg-white border border-[#e0c486]/70 rounded-xl px-4 py-3 outline-none focus:border-[#c9a050] focus:ring-2 focus:ring-[#c9a050]/18 transition-all resize-y"
                    }),(0,A.jsxs)(nQ.button,{
                        type: "submit",
                        disabled: l,
                        whileHover: {
                            scale: l ? 1 : 1.02
                        },
                        whileTap: {
                            scale: l ? 1 : .98
                        },
                        className: "relative w-full py-4 rounded-xl overflow-hidden border-none cursor-pointer disabled:opacity-70",
                        children: [(0,A.jsx)("span",{
                            className: "absolute inset-0 bg-gradient-to-r from-[#9a7430] via-[#c9a050] to-[#9a7430]"
                        }),!l && (0,A.jsx)(nQ.span,{
                            className: "absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent",
                            animate: {
                                x: ["-200%","200%"]
                            },
                            transition: {
                                duration: 3,
                                repeat: 1 / 0,
                                repeatDelay: 0
                            }
                        }),(0,A.jsxs)("span",{
                            className: "relative z-10 flex items-center justify-center gap-2 text-white font-semibold text-base",
                            children: [(0,A.jsx)(ai,{
                                className: "w-4 h-4",
                                fill: "currentColor"
                            }),l ? "Saqlanmoqda..." : "Tilak qoldirish"]
                        })]
                    })]
                }),a ? (0,A.jsx)("div",{
                    className: "text-center text-muted-foreground opacity-60",
                    children: "Yuklanmoqda..."
                }) : 0 === s.length ? (0,A.jsx)("p",{
                    className: "text-muted-foreground text-center opacity-80",
                    children: "Hozircha tilaklar yo'q — birinchi bo'lib yozing! 💛"
                }) : (0,A.jsx)("div",{
                    className: "columns-2 sm:columns-3 gap-3",
                    children: s.map((e,t) => (0,A.jsx)(nQ.div,{
                        initial: {
                            opacity: 0,
                            scale: .85
                        },
                        animate: {
                            opacity: 1,
                            scale: 1
                        },
                        transition: {
                            delay: Math.min(.04 * t,.4)
                        },
                        className: "break-inside-avoid mb-3 inline-block w-full",
                        style: {
                            rotate: `${hZ[t%hZ.length]}deg`
                        },
                        children: (0,A.jsxs)("div",{
                            className: "bg-white border border-[#e0c486]/50 rounded-lg px-3 py-3 shadow-sm text-left hover:shadow-md transition-shadow",
                            children: [(0,A.jsxs)("div",{
                                className: "font-serif text-[#9a7430] text-sm mb-1 flex items-center gap-1.5",
                                children: [(0,A.jsx)(ai,{
                                    className: "w-3 h-3 flex-shrink-0",
                                    fill: "currentColor"
                                }),(0,A.jsx)("span",{
                                    className: "truncate",
                                    children: e.name
                                })]
                            }),(0,A.jsx)("div",{
                                className: "text-muted-foreground text-sm leading-snug",
                                children: e.msg
                            })]
                        })
                    },e.id))
                })]
            })]
        })
    }

    function h1() {
        let e = "Lazizbek",
            t = "Mahbuba";
        return (0,A.jsxs)("footer",{
            className: "relative py-12 sm:py-14 md:py-16 overflow-hidden",
            children: [(0,A.jsx)("div",{
                className: "absolute inset-0 bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f0f23]"
            }),(0,A.jsx)("div",{
                className: "absolute inset-0 opacity-[0.04]",
                style: {
                    backgroundImage: "radial-gradient(circle at 2px 2px,#c9a050 1px,transparent 0)",
                    backgroundSize: "24px 24px"
                }
            }),(0,A.jsx)(nQ.div,{
                className: "absolute top-8 left-[10%] text-[#c9a050]/30 hidden sm:block",
                animate: {
                    rotate: 360,
                    scale: [1,1.2,1]
                },
                transition: {
                    rotate: {
                        duration: 15,
                        repeat: 1 / 0
                    },
                    scale: {
                        duration: 3,
                        repeat: 1 / 0
                    }
                },
                children: (0,A.jsx)(as,{
                    className: "w-5 h-5"
                })
            }),(0,A.jsx)(nQ.div,{
                className: "absolute bottom-8 right-[10%] text-[#c9a050]/30 hidden sm:block",
                animate: {
                    rotate: -360,
                    scale: [1,1.2,1]
                },
                transition: {
                    rotate: {
                        duration: 18,
                        repeat: 1 / 0
                    },
                    scale: {
                        duration: 3.5,
                        repeat: 1 / 0,
                        delay: 1
                    }
                },
                children: (0,A.jsx)(as,{
                    className: "w-5 h-5"
                })
            }),(0,A.jsx)("div",{
                className: "relative z-10 mx-auto px-4 sm:px-6 text-center",
                children: (0,A.jsxs)(nQ.div,{
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    viewport: {
                        once:!0
                    },
                    transition: {
                        duration: .8
                    },
                    children: [(0,A.jsxs)("h3",{
                        className: "font-serif text-white mb-6",
                        style: {
                            fontSize: "clamp(1.9rem,6vw,3rem)"
                        },
                        children: [e," & ",t]
                    }),(0,A.jsxs)("div",{
                        className: "flex items-center justify-center gap-4 mb-7",
                        children: [(0,A.jsx)("div",{
                            className: "w-16 h-px bg-gradient-to-r from-transparent to-[#c9a050]"
                        }),(0,A.jsx)(nQ.div,{
                            animate: {
                                scale: [1,1.3,1]
                            },
                            transition: {
                                duration: 1.5,
                                repeat: 1 / 0
                            },
                            children: (0,A.jsx)(ai,{
                                className: "w-5 h-5 text-[#c9a050]",
                                fill: "currentColor"
                            })
                        }),(0,A.jsx)("div",{
                            className: "w-16 h-px bg-gradient-to-l from-transparent to-[#c9a050]"
                        })]
                    }),(0,A.jsxs)("div",{
                        className: "flex flex-wrap items-center justify-center gap-x-6 gap-y-1 text-[#c9a050] font-semibold",
                        style: {
                            fontSize: "clamp(1rem,2.8vw,1.25rem)"
                        },
                        children: [(0,A.jsxs)("span",{
                            children: ["28.06.2026"," · ","Navoiy viloyati,Navoiy shahri".split(",")[0]]
                        }),(0,A.jsx)("span",{
                            className: "w-[5px] h-[5px] bg-[#c9a050] rounded-full opacity-60 hidden sm:inline-block"
                        }),(0,A.jsxs)("span",{
                            children: ["01.07.2026"," · ","Navoiy viloyati,Xatirchi tumani".split(",")[0]]
                        })]
                    }),(0,A.jsx)("p",{
                        className: "text-white/60 mt-2",
                        style: {
                            fontSize: "clamp(.95rem,2.4vw,1.1rem)"
                        },
                        children: "O'zbekiston"
                    }),(0,A.jsx)(nQ.div,{
                        className: "mt-10 pt-7 border-t border-white/10",
                        initial: {
                            opacity: 0
                        },
                        whileInView: {
                            opacity: 1
                        },
                        viewport: {
                            once:!0
                        },
                        transition: {
                            delay: .5
                        },
                        children: (0,A.jsxs)("p",{
                            className: "text-white/40 text-sm flex items-center justify-center gap-2",
                            children: [e[0]," ",(0,A.jsx)(ai,{
                                className: "w-3 h-3 text-red-400",
                                fill: "currentColor"
                            })," ",t[0]]
                        })
                    })]
                })
            })]
        })
    }
    e.s(["default",0,function() {
        let [e,t] = (0,R.useState)(!1);
        return (0,A.jsxs)("main",{
            className: "min-h-screen",
            children: [!e && (0,A.jsx)(an,{
                onOpen: () => t(!0)
            }),(0,A.jsx)(n6,{
                children: e && (0,A.jsxs)(nQ.div,{
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    transition: {
                        duration: 1,
                        delay: .5
                    },
                    children: [(0,A.jsx)(aa,{}),(0,A.jsx)(al,{}),(0,A.jsx)(aP,{}),(0,A.jsx)(h0,{}),(0,A.jsx)(h1,{})]
                })
            })]
        })
    }],31713)
}]);
