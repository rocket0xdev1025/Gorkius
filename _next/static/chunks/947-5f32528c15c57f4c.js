(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [947],
  {
    19: function (t, e, r) {
      'use strict';
      r.d(e, {
        V: function () {
          return h;
        },
      });
      var n = r(2265),
        i = r(9582);
      /*!
       * @gsap/react 2.1.1
       * https://gsap.com
       *
       * Copyright 2008-2024, GreenSock. All rights reserved.
       * Subject to the terms at https://gsap.com/standard-license or for
       * Club GSAP members, the agreement issued with that membership.
       * @author: Jack Doyle, jack@greensock.com
       */ let o =
          'undefined' != typeof window ? n.useLayoutEffect : n.useEffect,
        s = (t) => t && !Array.isArray(t) && 'object' == typeof t,
        a = [],
        u = {},
        l = i.ZP,
        h = (t, e = a) => {
          let r = u;
          s(t)
            ? ((r = t),
              (t = null),
              (e = 'dependencies' in r ? r.dependencies : a))
            : s(e) && (e = 'dependencies' in (r = e) ? r.dependencies : a),
            t &&
              'function' != typeof t &&
              console.warn(
                'First parameter must be a function or config object'
              );
          let { scope: i, revertOnUpdate: h } = r,
            c = (0, n.useRef)(!1),
            f = (0, n.useRef)(l.context(() => {}, i)),
            d = (0, n.useRef)((t) => f.current.add(null, t)),
            p = e && e.length && !h;
          return (
            o(() => {
              if ((t && f.current.add(t, i), !p || !c.current))
                return () => f.current.revert();
            }, e),
            p && o(() => ((c.current = !0), () => f.current.revert()), a),
            { context: f.current, contextSafe: d.current }
          );
        };
      (h.register = (t) => {
        l = t;
      }),
        (h.headless = !0);
    },
    4459: function (t, e, r) {
      'use strict';
      (e._O = e.Jq = e.KB = e.u8 = e.cv = void 0),
        (e.Ik = e.A9 = e.n_ = e.gM = void 0);
      let n = r(9109);
      function i(t) {
        if (!(t instanceof Uint8Array))
          throw TypeError('b must be a Uint8Array');
      }
      function o(t) {
        return i(t), n.Buffer.from(t.buffer, t.byteOffset, t.length);
      }
      class s {
        constructor(t, e) {
          if (!Number.isInteger(t)) throw TypeError('span must be an integer');
          (this.span = t), (this.property = e);
        }
        makeDestinationObject() {
          return {};
        }
        getSpan(t, e) {
          if (0 > this.span) throw RangeError('indeterminate span');
          return this.span;
        }
        replicate(t) {
          let e = Object.create(this.constructor.prototype);
          return Object.assign(e, this), (e.property = t), e;
        }
        fromArray(t) {}
      }
      function a(t, e) {
        return e.property ? t + '[' + e.property + ']' : t;
      }
      class u extends s {
        isCount() {
          throw Error('ExternalLayout is abstract');
        }
      }
      class l extends u {
        constructor(t, e = 0, r) {
          if (!(t instanceof s)) throw TypeError('layout must be a Layout');
          if (!Number.isInteger(e))
            throw TypeError('offset must be integer or undefined');
          super(t.span, r || t.property), (this.layout = t), (this.offset = e);
        }
        isCount() {
          return this.layout instanceof h || this.layout instanceof c;
        }
        decode(t, e = 0) {
          return this.layout.decode(t, e + this.offset);
        }
        encode(t, e, r = 0) {
          return this.layout.encode(t, e, r + this.offset);
        }
      }
      class h extends s {
        constructor(t, e) {
          if ((super(t, e), 6 < this.span))
            throw RangeError('span must not exceed 6 bytes');
        }
        decode(t, e = 0) {
          return o(t).readUIntLE(e, this.span);
        }
        encode(t, e, r = 0) {
          return o(e).writeUIntLE(t, r, this.span), this.span;
        }
      }
      class c extends s {
        constructor(t, e) {
          if ((super(t, e), 6 < this.span))
            throw RangeError('span must not exceed 6 bytes');
        }
        decode(t, e = 0) {
          return o(t).readUIntBE(e, this.span);
        }
        encode(t, e, r = 0) {
          return o(e).writeUIntBE(t, r, this.span), this.span;
        }
      }
      function f(t) {
        let e = Math.floor(t / 4294967296);
        return { hi32: e, lo32: t - 4294967296 * e };
      }
      function d(t, e) {
        return 4294967296 * t + e;
      }
      class p extends s {
        constructor(t) {
          super(8, t);
        }
        decode(t, e = 0) {
          let r = o(t),
            n = r.readUInt32LE(e);
          return d(r.readUInt32LE(e + 4), n);
        }
        encode(t, e, r = 0) {
          let n = f(t),
            i = o(e);
          return i.writeUInt32LE(n.lo32, r), i.writeUInt32LE(n.hi32, r + 4), 8;
        }
      }
      class y extends s {
        constructor(t) {
          super(8, t);
        }
        decode(t, e = 0) {
          let r = o(t),
            n = r.readUInt32LE(e);
          return d(r.readInt32LE(e + 4), n);
        }
        encode(t, e, r = 0) {
          let n = f(t),
            i = o(e);
          return i.writeUInt32LE(n.lo32, r), i.writeInt32LE(n.hi32, r + 4), 8;
        }
      }
      class m extends s {
        constructor(t, e, r) {
          if (!(t instanceof s))
            throw TypeError('elementLayout must be a Layout');
          if (
            !(
              (e instanceof u && e.isCount()) ||
              (Number.isInteger(e) && 0 <= e)
            )
          )
            throw TypeError(
              'count must be non-negative integer or an unsigned integer ExternalLayout'
            );
          let n = -1;
          e instanceof u || !(0 < t.span) || (n = e * t.span),
            super(n, r),
            (this.elementLayout = t),
            (this.count = e);
        }
        getSpan(t, e = 0) {
          if (0 <= this.span) return this.span;
          let r = 0,
            n = this.count;
          if (
            (n instanceof u && (n = n.decode(t, e)),
            0 < this.elementLayout.span)
          )
            r = n * this.elementLayout.span;
          else {
            let i = 0;
            for (; i < n; ) (r += this.elementLayout.getSpan(t, e + r)), ++i;
          }
          return r;
        }
        decode(t, e = 0) {
          let r = [],
            n = 0,
            i = this.count;
          for (i instanceof u && (i = i.decode(t, e)); n < i; )
            r.push(this.elementLayout.decode(t, e)),
              (e += this.elementLayout.getSpan(t, e)),
              (n += 1);
          return r;
        }
        encode(t, e, r = 0) {
          let n = this.elementLayout,
            i = t.reduce((t, i) => t + n.encode(i, e, r + t), 0);
          return (
            this.count instanceof u && this.count.encode(t.length, e, r), i
          );
        }
      }
      class g extends s {
        constructor(t, e, r) {
          if (
            !(Array.isArray(t) && t.reduce((t, e) => t && e instanceof s, !0))
          )
            throw TypeError('fields must be array of Layout instances');
          for (let n of ('boolean' == typeof e &&
            void 0 === r &&
            ((r = e), (e = void 0)),
          t))
            if (0 > n.span && void 0 === n.property)
              throw Error(
                'fields cannot contain unnamed variable-length layout'
              );
          let n = -1;
          try {
            n = t.reduce((t, e) => t + e.getSpan(), 0);
          } catch (t) {}
          super(n, e), (this.fields = t), (this.decodePrefixes = !!r);
        }
        getSpan(t, e = 0) {
          if (0 <= this.span) return this.span;
          let r = 0;
          try {
            r = this.fields.reduce((r, n) => {
              let i = n.getSpan(t, e);
              return (e += i), r + i;
            }, 0);
          } catch (t) {
            throw RangeError('indeterminate span');
          }
          return r;
        }
        decode(t, e = 0) {
          i(t);
          let r = this.makeDestinationObject();
          for (let n of this.fields)
            if (
              (void 0 !== n.property && (r[n.property] = n.decode(t, e)),
              (e += n.getSpan(t, e)),
              this.decodePrefixes && t.length === e)
            )
              break;
          return r;
        }
        encode(t, e, r = 0) {
          let n = r,
            i = 0,
            o = 0;
          for (let n of this.fields) {
            let s = n.span;
            if (((o = 0 < s ? s : 0), void 0 !== n.property)) {
              let i = t[n.property];
              void 0 !== i &&
                ((o = n.encode(i, e, r)), 0 > s && (s = n.getSpan(e, r)));
            }
            (i = r), (r += s);
          }
          return i + o - n;
        }
        fromArray(t) {
          let e = this.makeDestinationObject();
          for (let r of this.fields)
            void 0 !== r.property &&
              0 < t.length &&
              (e[r.property] = t.shift());
          return e;
        }
        layoutFor(t) {
          if ('string' != typeof t) throw TypeError('property must be string');
          for (let e of this.fields) if (e.property === t) return e;
        }
        offsetOf(t) {
          if ('string' != typeof t) throw TypeError('property must be string');
          let e = 0;
          for (let r of this.fields) {
            if (r.property === t) return e;
            0 > r.span ? (e = -1) : 0 <= e && (e += r.span);
          }
        }
      }
      class w {
        constructor(t) {
          this.property = t;
        }
        decode(t, e) {
          throw Error('UnionDiscriminator is abstract');
        }
        encode(t, e, r) {
          throw Error('UnionDiscriminator is abstract');
        }
      }
      class v extends w {
        constructor(t, e) {
          if (!(t instanceof u && t.isCount()))
            throw TypeError(
              'layout must be an unsigned integer ExternalLayout'
            );
          super(e || t.property || 'variant'), (this.layout = t);
        }
        decode(t, e) {
          return this.layout.decode(t, e);
        }
        encode(t, e, r) {
          return this.layout.encode(t, e, r);
        }
      }
      class b extends s {
        constructor(t, e, r) {
          let n;
          if (t instanceof h || t instanceof c) n = new v(new l(t));
          else if (t instanceof u && t.isCount()) n = new v(t);
          else if (t instanceof w) n = t;
          else
            throw TypeError(
              'discr must be a UnionDiscriminator or an unsigned integer layout'
            );
          if ((void 0 === e && (e = null), !(null === e || e instanceof s)))
            throw TypeError('defaultLayout must be null or a Layout');
          if (null !== e) {
            if (0 > e.span)
              throw Error('defaultLayout must have constant span');
            void 0 === e.property && (e = e.replicate('content'));
          }
          let i = -1;
          e &&
            0 <= (i = e.span) &&
            (t instanceof h || t instanceof c) &&
            (i += n.layout.span),
            super(i, r),
            (this.discriminator = n),
            (this.usesPrefixDiscriminator = t instanceof h || t instanceof c),
            (this.defaultLayout = e),
            (this.registry = {});
          let o = this.defaultGetSourceVariant.bind(this);
          (this.getSourceVariant = function (t) {
            return o(t);
          }),
            (this.configGetSourceVariant = function (t) {
              o = t.bind(this);
            });
        }
        getSpan(t, e = 0) {
          if (0 <= this.span) return this.span;
          let r = this.getVariant(t, e);
          if (!r)
            throw Error('unable to determine span for unrecognized variant');
          return r.getSpan(t, e);
        }
        defaultGetSourceVariant(t) {
          if (
            Object.prototype.hasOwnProperty.call(t, this.discriminator.property)
          ) {
            if (
              this.defaultLayout &&
              this.defaultLayout.property &&
              Object.prototype.hasOwnProperty.call(
                t,
                this.defaultLayout.property
              )
            )
              return;
            let e = this.registry[t[this.discriminator.property]];
            if (
              e &&
              (!e.layout ||
                (e.property &&
                  Object.prototype.hasOwnProperty.call(t, e.property)))
            )
              return e;
          } else
            for (let e in this.registry) {
              let r = this.registry[e];
              if (
                r.property &&
                Object.prototype.hasOwnProperty.call(t, r.property)
              )
                return r;
            }
          throw Error('unable to infer src variant');
        }
        decode(t, e = 0) {
          let r;
          let n = this.discriminator,
            i = n.decode(t, e),
            o = this.registry[i];
          if (void 0 === o) {
            let o = this.defaultLayout,
              s = 0;
            this.usesPrefixDiscriminator && (s = n.layout.span),
              ((r = this.makeDestinationObject())[n.property] = i),
              (r[o.property] = o.decode(t, e + s));
          } else r = o.decode(t, e);
          return r;
        }
        encode(t, e, r = 0) {
          let n = this.getSourceVariant(t);
          if (void 0 === n) {
            let n = this.discriminator,
              i = this.defaultLayout,
              o = 0;
            return (
              this.usesPrefixDiscriminator && (o = n.layout.span),
              n.encode(t[n.property], e, r),
              o + i.encode(t[i.property], e, r + o)
            );
          }
          return n.encode(t, e, r);
        }
        addVariant(t, e, r) {
          let n = new E(this, t, e, r);
          return (this.registry[t] = n), n;
        }
        getVariant(t, e = 0) {
          let r;
          return (
            t instanceof Uint8Array
              ? (r = this.discriminator.decode(t, e))
              : (r = t),
            this.registry[r]
          );
        }
      }
      class E extends s {
        constructor(t, e, r, n) {
          if (!(t instanceof b)) throw TypeError('union must be a Union');
          if (!Number.isInteger(e) || 0 > e)
            throw TypeError('variant must be a (non-negative) integer');
          if (
            ('string' == typeof r && void 0 === n && ((n = r), (r = null)), r)
          ) {
            if (!(r instanceof s)) throw TypeError('layout must be a Layout');
            if (
              null !== t.defaultLayout &&
              0 <= r.span &&
              r.span > t.defaultLayout.span
            )
              throw Error('variant span exceeds span of containing union');
            if ('string' != typeof n)
              throw TypeError('variant must have a String property');
          }
          let i = t.span;
          0 > t.span &&
            0 <= (i = r ? r.span : 0) &&
            t.usesPrefixDiscriminator &&
            (i += t.discriminator.layout.span),
            super(i, n),
            (this.union = t),
            (this.variant = e),
            (this.layout = r || null);
        }
        getSpan(t, e = 0) {
          if (0 <= this.span) return this.span;
          let r = 0;
          this.union.usesPrefixDiscriminator &&
            (r = this.union.discriminator.layout.span);
          let n = 0;
          return this.layout && (n = this.layout.getSpan(t, e + r)), r + n;
        }
        decode(t, e = 0) {
          let r = this.makeDestinationObject();
          if (this !== this.union.getVariant(t, e))
            throw Error('variant mismatch');
          let n = 0;
          return (
            this.union.usesPrefixDiscriminator &&
              (n = this.union.discriminator.layout.span),
            this.layout
              ? (r[this.property] = this.layout.decode(t, e + n))
              : this.property
              ? (r[this.property] = !0)
              : this.union.usesPrefixDiscriminator &&
                (r[this.union.discriminator.property] = this.variant),
            r
          );
        }
        encode(t, e, r = 0) {
          let n = 0;
          if (
            (this.union.usesPrefixDiscriminator &&
              (n = this.union.discriminator.layout.span),
            this.layout &&
              !Object.prototype.hasOwnProperty.call(t, this.property))
          )
            throw TypeError('variant lacks property ' + this.property);
          this.union.discriminator.encode(this.variant, e, r);
          let i = n;
          if (
            this.layout &&
            (this.layout.encode(t[this.property], e, r + n),
            (i += this.layout.getSpan(e, r + n)),
            0 <= this.union.span && i > this.union.span)
          )
            throw Error('encoded variant overruns containing union');
          return i;
        }
        fromArray(t) {
          if (this.layout) return this.layout.fromArray(t);
        }
      }
      function M(t) {
        return 0 > t && (t += 4294967296), t;
      }
      class _ extends s {
        constructor(t, e, r) {
          if (!(t instanceof h || t instanceof c))
            throw TypeError('word must be a UInt or UIntBE layout');
          if (
            ('string' == typeof e && void 0 === r && ((r = e), (e = !1)),
            4 < t.span)
          )
            throw RangeError('word cannot exceed 32 bits');
          super(t.span, r),
            (this.word = t),
            (this.msb = !!e),
            (this.fields = []);
          let n = 0;
          (this._packedSetValue = function (t) {
            return (n = M(t)), this;
          }),
            (this._packedGetValue = function () {
              return n;
            });
        }
        decode(t, e = 0) {
          let r = this.makeDestinationObject(),
            n = this.word.decode(t, e);
          for (let e of (this._packedSetValue(n), this.fields))
            void 0 !== e.property && (r[e.property] = e.decode(t));
          return r;
        }
        encode(t, e, r = 0) {
          let n = this.word.decode(e, r);
          for (let e of (this._packedSetValue(n), this.fields))
            if (void 0 !== e.property) {
              let r = t[e.property];
              void 0 !== r && e.encode(r);
            }
          return this.word.encode(this._packedGetValue(), e, r);
        }
        addField(t, e) {
          let r = new S(this, t, e);
          return this.fields.push(r), r;
        }
        addBoolean(t) {
          let e = new A(this, t);
          return this.fields.push(e), e;
        }
        fieldFor(t) {
          if ('string' != typeof t) throw TypeError('property must be string');
          for (let e of this.fields) if (e.property === t) return e;
        }
      }
      class S {
        constructor(t, e, r) {
          if (!(t instanceof _))
            throw TypeError('container must be a BitStructure');
          if (!Number.isInteger(e) || 0 >= e)
            throw TypeError('bits must be positive integer');
          let n = 8 * t.span,
            i = t.fields.reduce((t, e) => t + e.bits, 0);
          if (e + i > n)
            throw Error(
              'bits too long for span remainder (' +
                (n - i) +
                ' of ' +
                n +
                ' remain)'
            );
          (this.container = t),
            (this.bits = e),
            (this.valueMask = (1 << e) - 1),
            32 === e && (this.valueMask = 4294967295),
            (this.start = i),
            this.container.msb && (this.start = n - i - e),
            (this.wordMask = M(this.valueMask << this.start)),
            (this.property = r);
        }
        decode(t, e) {
          return (
            M(this.container._packedGetValue() & this.wordMask) >>> this.start
          );
        }
        encode(t) {
          if (
            'number' != typeof t ||
            !Number.isInteger(t) ||
            t !== M(t & this.valueMask)
          )
            throw TypeError(
              a('BitField.encode', this) +
                ' value must be integer not exceeding ' +
                this.valueMask
            );
          let e = this.container._packedGetValue(),
            r = M(t << this.start);
          this.container._packedSetValue(M(e & ~this.wordMask) | r);
        }
      }
      class A extends S {
        constructor(t, e) {
          super(t, 1, e);
        }
        decode(t, e) {
          return !!super.decode(t, e);
        }
        encode(t) {
          'boolean' == typeof t && (t = +t), super.encode(t);
        }
      }
      class x extends s {
        constructor(t, e) {
          if (
            !(
              (t instanceof u && t.isCount()) ||
              (Number.isInteger(t) && 0 <= t)
            )
          )
            throw TypeError(
              'length must be positive integer or an unsigned integer ExternalLayout'
            );
          let r = -1;
          t instanceof u || (r = t), super(r, e), (this.length = t);
        }
        getSpan(t, e) {
          let r = this.span;
          return 0 > r && (r = this.length.decode(t, e)), r;
        }
        decode(t, e = 0) {
          let r = this.span;
          return 0 > r && (r = this.length.decode(t, e)), o(t).slice(e, e + r);
        }
        encode(t, e, r) {
          let n = this.length;
          if (
            (this.length instanceof u && (n = t.length),
            !(t instanceof Uint8Array && n === t.length))
          )
            throw TypeError(
              a('Blob.encode', this) +
                ' requires (length ' +
                n +
                ') Uint8Array as src'
            );
          if (r + n > e.length)
            throw RangeError('encoding overruns Uint8Array');
          let i = o(t);
          return (
            o(e).write(i.toString('hex'), r, n, 'hex'),
            this.length instanceof u && this.length.encode(n, e, r),
            n
          );
        }
      }
      (e.cv = (t, e, r) => new l(t, e, r)),
        (e.u8 = (t) => new h(1, t)),
        (e.KB = (t) => new h(2, t)),
        (e.Jq = (t) => new h(4, t)),
        (e._O = (t) => new p(t)),
        (e.gM = (t) => new y(t)),
        (e.n_ = (t, e, r) => new g(t, e, r)),
        (e.A9 = (t, e, r) => new m(t, e, r)),
        (e.Ik = (t, e) => new x(t, e));
    },
    8443: function (t, e, r) {
      var n = r(5197);
      t.exports = n(
        '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz'
      );
    },
    5197: function (t, e, r) {
      'use strict';
      var n = r(632).Buffer;
      t.exports = function (t) {
        if (t.length >= 255) throw TypeError('Alphabet too long');
        for (var e = new Uint8Array(256), r = 0; r < e.length; r++) e[r] = 255;
        for (var i = 0; i < t.length; i++) {
          var o = t.charAt(i),
            s = o.charCodeAt(0);
          if (255 !== e[s]) throw TypeError(o + ' is ambiguous');
          e[s] = i;
        }
        var a = t.length,
          u = t.charAt(0),
          l = Math.log(a) / Math.log(256),
          h = Math.log(256) / Math.log(a);
        function c(t) {
          if ('string' != typeof t) throw TypeError('Expected String');
          if (0 === t.length) return n.alloc(0);
          for (var r = 0, i = 0, o = 0; t[r] === u; ) i++, r++;
          for (
            var s = ((t.length - r) * l + 1) >>> 0, h = new Uint8Array(s);
            t[r];

          ) {
            var c = e[t.charCodeAt(r)];
            if (255 === c) return;
            for (var f = 0, d = s - 1; (0 !== c || f < o) && -1 !== d; d--, f++)
              (c += (a * h[d]) >>> 0),
                (h[d] = c % 256 >>> 0),
                (c = (c / 256) >>> 0);
            if (0 !== c) throw Error('Non-zero carry');
            (o = f), r++;
          }
          for (var p = s - o; p !== s && 0 === h[p]; ) p++;
          var y = n.allocUnsafe(i + (s - p));
          y.fill(0, 0, i);
          for (var m = i; p !== s; ) y[m++] = h[p++];
          return y;
        }
        return {
          encode: function (e) {
            if (
              ((Array.isArray(e) || e instanceof Uint8Array) && (e = n.from(e)),
              !n.isBuffer(e))
            )
              throw TypeError('Expected Buffer');
            if (0 === e.length) return '';
            for (var r = 0, i = 0, o = 0, s = e.length; o !== s && 0 === e[o]; )
              o++, r++;
            for (
              var l = ((s - o) * h + 1) >>> 0, c = new Uint8Array(l);
              o !== s;

            ) {
              for (
                var f = e[o], d = 0, p = l - 1;
                (0 !== f || d < i) && -1 !== p;
                p--, d++
              )
                (f += (256 * c[p]) >>> 0),
                  (c[p] = f % a >>> 0),
                  (f = (f / a) >>> 0);
              if (0 !== f) throw Error('Non-zero carry');
              (i = d), o++;
            }
            for (var y = l - i; y !== l && 0 === c[y]; ) y++;
            for (var m = u.repeat(r); y < l; ++y) m += t.charAt(c[y]);
            return m;
          },
          decodeUnsafe: c,
          decode: function (t) {
            var e = c(t);
            if (e) return e;
            throw Error('Non-base' + a + ' character');
          },
        };
      };
    },
    8738: function (t, e) {
      'use strict';
      (e.byteLength = function (t) {
        var e = u(t),
          r = e[0],
          n = e[1];
        return ((r + n) * 3) / 4 - n;
      }),
        (e.toByteArray = function (t) {
          var e,
            r,
            o = u(t),
            s = o[0],
            a = o[1],
            l = new i(((s + a) * 3) / 4 - a),
            h = 0,
            c = a > 0 ? s - 4 : s;
          for (r = 0; r < c; r += 4)
            (e =
              (n[t.charCodeAt(r)] << 18) |
              (n[t.charCodeAt(r + 1)] << 12) |
              (n[t.charCodeAt(r + 2)] << 6) |
              n[t.charCodeAt(r + 3)]),
              (l[h++] = (e >> 16) & 255),
              (l[h++] = (e >> 8) & 255),
              (l[h++] = 255 & e);
          return (
            2 === a &&
              ((e = (n[t.charCodeAt(r)] << 2) | (n[t.charCodeAt(r + 1)] >> 4)),
              (l[h++] = 255 & e)),
            1 === a &&
              ((e =
                (n[t.charCodeAt(r)] << 10) |
                (n[t.charCodeAt(r + 1)] << 4) |
                (n[t.charCodeAt(r + 2)] >> 2)),
              (l[h++] = (e >> 8) & 255),
              (l[h++] = 255 & e)),
            l
          );
        }),
        (e.fromByteArray = function (t) {
          for (
            var e, n = t.length, i = n % 3, o = [], s = 0, a = n - i;
            s < a;
            s += 16383
          )
            o.push(
              (function (t, e, n) {
                for (var i, o = [], s = e; s < n; s += 3)
                  o.push(
                    r[
                      ((i =
                        ((t[s] << 16) & 16711680) +
                        ((t[s + 1] << 8) & 65280) +
                        (255 & t[s + 2])) >>
                        18) &
                        63
                    ] +
                      r[(i >> 12) & 63] +
                      r[(i >> 6) & 63] +
                      r[63 & i]
                  );
                return o.join('');
              })(t, s, s + 16383 > a ? a : s + 16383)
            );
          return (
            1 === i
              ? o.push(r[(e = t[n - 1]) >> 2] + r[(e << 4) & 63] + '==')
              : 2 === i &&
                o.push(
                  r[(e = (t[n - 2] << 8) + t[n - 1]) >> 10] +
                    r[(e >> 4) & 63] +
                    r[(e << 2) & 63] +
                    '='
                ),
            o.join('')
          );
        });
      for (
        var r = [],
          n = [],
          i = 'undefined' != typeof Uint8Array ? Uint8Array : Array,
          o =
            'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
          s = 0,
          a = o.length;
        s < a;
        ++s
      )
        (r[s] = o[s]), (n[o.charCodeAt(s)] = s);
      function u(t) {
        var e = t.length;
        if (e % 4 > 0)
          throw Error('Invalid string. Length must be a multiple of 4');
        var r = t.indexOf('=');
        -1 === r && (r = e);
        var n = r === e ? 0 : 4 - (r % 4);
        return [r, n];
      }
      (n['-'.charCodeAt(0)] = 62), (n['_'.charCodeAt(0)] = 63);
    },
    2653: function (t, e, r) {
      'use strict';
      var n = r(9109).Buffer;
      (e.oU = function (t) {
        {
          let e = n.from(t);
          e.reverse();
          let r = e.toString('hex');
          return 0 === r.length ? BigInt(0) : BigInt(`0x${r}`);
        }
      }),
        (e.k$ = function (t, e) {
          {
            let r = t.toString(16),
              i = n.from(r.padStart(2 * e, '0').slice(0, 2 * e), 'hex');
            return i.reverse(), i;
          }
        });
    },
    8171: function (t, e, r) {
      !(function (t, e) {
        'use strict';
        function n(t, e) {
          if (!t) throw Error(e || 'Assertion failed');
        }
        function i(t, e) {
          t.super_ = e;
          var r = function () {};
          (r.prototype = e.prototype),
            (t.prototype = new r()),
            (t.prototype.constructor = t);
        }
        function o(t, e, r) {
          if (o.isBN(t)) return t;
          (this.negative = 0),
            (this.words = null),
            (this.length = 0),
            (this.red = null),
            null !== t &&
              (('le' === e || 'be' === e) && ((r = e), (e = 10)),
              this._init(t || 0, e || 10, r || 'be'));
        }
        'object' == typeof t ? (t.exports = o) : (e.BN = o),
          (o.BN = o),
          (o.wordSize = 26);
        try {
          c =
            'undefined' != typeof window && void 0 !== window.Buffer
              ? window.Buffer
              : r(6601).Buffer;
        } catch (t) {}
        function s(t, e) {
          var r = t.charCodeAt(e);
          return r >= 48 && r <= 57
            ? r - 48
            : r >= 65 && r <= 70
            ? r - 55
            : r >= 97 && r <= 102
            ? r - 87
            : void n(!1, 'Invalid character in ' + t);
        }
        function a(t, e, r) {
          var n = s(t, r);
          return r - 1 >= e && (n |= s(t, r - 1) << 4), n;
        }
        function u(t, e, r, i) {
          for (var o = 0, s = 0, a = Math.min(t.length, r), u = e; u < a; u++) {
            var l = t.charCodeAt(u) - 48;
            (o *= i),
              (s = l >= 49 ? l - 49 + 10 : l >= 17 ? l - 17 + 10 : l),
              n(l >= 0 && s < i, 'Invalid character'),
              (o += s);
          }
          return o;
        }
        function l(t, e) {
          (t.words = e.words),
            (t.length = e.length),
            (t.negative = e.negative),
            (t.red = e.red);
        }
        if (
          ((o.isBN = function (t) {
            return (
              t instanceof o ||
              (null !== t &&
                'object' == typeof t &&
                t.constructor.wordSize === o.wordSize &&
                Array.isArray(t.words))
            );
          }),
          (o.max = function (t, e) {
            return t.cmp(e) > 0 ? t : e;
          }),
          (o.min = function (t, e) {
            return 0 > t.cmp(e) ? t : e;
          }),
          (o.prototype._init = function (t, e, r) {
            if ('number' == typeof t) return this._initNumber(t, e, r);
            if ('object' == typeof t) return this._initArray(t, e, r);
            'hex' === e && (e = 16), n(e === (0 | e) && e >= 2 && e <= 36);
            var i = 0;
            '-' === (t = t.toString().replace(/\s+/g, ''))[0] &&
              (i++, (this.negative = 1)),
              i < t.length &&
                (16 === e
                  ? this._parseHex(t, i, r)
                  : (this._parseBase(t, e, i),
                    'le' === r && this._initArray(this.toArray(), e, r)));
          }),
          (o.prototype._initNumber = function (t, e, r) {
            t < 0 && ((this.negative = 1), (t = -t)),
              t < 67108864
                ? ((this.words = [67108863 & t]), (this.length = 1))
                : t < 4503599627370496
                ? ((this.words = [67108863 & t, (t / 67108864) & 67108863]),
                  (this.length = 2))
                : (n(t < 9007199254740992),
                  (this.words = [67108863 & t, (t / 67108864) & 67108863, 1]),
                  (this.length = 3)),
              'le' === r && this._initArray(this.toArray(), e, r);
          }),
          (o.prototype._initArray = function (t, e, r) {
            if ((n('number' == typeof t.length), t.length <= 0))
              return (this.words = [0]), (this.length = 1), this;
            (this.length = Math.ceil(t.length / 3)),
              (this.words = Array(this.length));
            for (var i, o, s = 0; s < this.length; s++) this.words[s] = 0;
            var a = 0;
            if ('be' === r)
              for (s = t.length - 1, i = 0; s >= 0; s -= 3)
                (o = t[s] | (t[s - 1] << 8) | (t[s - 2] << 16)),
                  (this.words[i] |= (o << a) & 67108863),
                  (this.words[i + 1] = (o >>> (26 - a)) & 67108863),
                  (a += 24) >= 26 && ((a -= 26), i++);
            else if ('le' === r)
              for (s = 0, i = 0; s < t.length; s += 3)
                (o = t[s] | (t[s + 1] << 8) | (t[s + 2] << 16)),
                  (this.words[i] |= (o << a) & 67108863),
                  (this.words[i + 1] = (o >>> (26 - a)) & 67108863),
                  (a += 24) >= 26 && ((a -= 26), i++);
            return this._strip();
          }),
          (o.prototype._parseHex = function (t, e, r) {
            (this.length = Math.ceil((t.length - e) / 6)),
              (this.words = Array(this.length));
            for (var n, i = 0; i < this.length; i++) this.words[i] = 0;
            var o = 0,
              s = 0;
            if ('be' === r)
              for (i = t.length - 1; i >= e; i -= 2)
                (n = a(t, e, i) << o),
                  (this.words[s] |= 67108863 & n),
                  o >= 18
                    ? ((o -= 18), (s += 1), (this.words[s] |= n >>> 26))
                    : (o += 8);
            else
              for (
                i = (t.length - e) % 2 == 0 ? e + 1 : e;
                i < t.length;
                i += 2
              )
                (n = a(t, e, i) << o),
                  (this.words[s] |= 67108863 & n),
                  o >= 18
                    ? ((o -= 18), (s += 1), (this.words[s] |= n >>> 26))
                    : (o += 8);
            this._strip();
          }),
          (o.prototype._parseBase = function (t, e, r) {
            (this.words = [0]), (this.length = 1);
            for (var n = 0, i = 1; i <= 67108863; i *= e) n++;
            n--, (i = (i / e) | 0);
            for (
              var o = t.length - r,
                s = o % n,
                a = Math.min(o, o - s) + r,
                l = 0,
                h = r;
              h < a;
              h += n
            )
              (l = u(t, h, h + n, e)),
                this.imuln(i),
                this.words[0] + l < 67108864
                  ? (this.words[0] += l)
                  : this._iaddn(l);
            if (0 !== s) {
              var c = 1;
              for (l = u(t, h, t.length, e), h = 0; h < s; h++) c *= e;
              this.imuln(c),
                this.words[0] + l < 67108864
                  ? (this.words[0] += l)
                  : this._iaddn(l);
            }
            this._strip();
          }),
          (o.prototype.copy = function (t) {
            t.words = Array(this.length);
            for (var e = 0; e < this.length; e++) t.words[e] = this.words[e];
            (t.length = this.length),
              (t.negative = this.negative),
              (t.red = this.red);
          }),
          (o.prototype._move = function (t) {
            l(t, this);
          }),
          (o.prototype.clone = function () {
            var t = new o(null);
            return this.copy(t), t;
          }),
          (o.prototype._expand = function (t) {
            for (; this.length < t; ) this.words[this.length++] = 0;
            return this;
          }),
          (o.prototype._strip = function () {
            for (; this.length > 1 && 0 === this.words[this.length - 1]; )
              this.length--;
            return this._normSign();
          }),
          (o.prototype._normSign = function () {
            return (
              1 === this.length && 0 === this.words[0] && (this.negative = 0),
              this
            );
          }),
          'undefined' != typeof Symbol && 'function' == typeof Symbol.for)
        )
          try {
            o.prototype[Symbol.for('nodejs.util.inspect.custom')] = h;
          } catch (t) {
            o.prototype.inspect = h;
          }
        else o.prototype.inspect = h;
        function h() {
          return (this.red ? '<BN-R: ' : '<BN: ') + this.toString(16) + '>';
        }
        var c,
          f = [
            '',
            '0',
            '00',
            '000',
            '0000',
            '00000',
            '000000',
            '0000000',
            '00000000',
            '000000000',
            '0000000000',
            '00000000000',
            '000000000000',
            '0000000000000',
            '00000000000000',
            '000000000000000',
            '0000000000000000',
            '00000000000000000',
            '000000000000000000',
            '0000000000000000000',
            '00000000000000000000',
            '000000000000000000000',
            '0000000000000000000000',
            '00000000000000000000000',
            '000000000000000000000000',
            '0000000000000000000000000',
          ],
          d = [
            0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6,
            5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
          ],
          p = [
            0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607,
            16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536,
            11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101,
            5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368,
            20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875,
            60466176,
          ];
        function y(t, e, r) {
          r.negative = e.negative ^ t.negative;
          var n = (t.length + e.length) | 0;
          (r.length = n), (n = (n - 1) | 0);
          var i = 0 | t.words[0],
            o = 0 | e.words[0],
            s = i * o,
            a = 67108863 & s,
            u = (s / 67108864) | 0;
          r.words[0] = a;
          for (var l = 1; l < n; l++) {
            for (
              var h = u >>> 26,
                c = 67108863 & u,
                f = Math.min(l, e.length - 1),
                d = Math.max(0, l - t.length + 1);
              d <= f;
              d++
            ) {
              var p = (l - d) | 0;
              (h +=
                ((s = (i = 0 | t.words[p]) * (o = 0 | e.words[d]) + c) /
                  67108864) |
                0),
                (c = 67108863 & s);
            }
            (r.words[l] = 0 | c), (u = 0 | h);
          }
          return 0 !== u ? (r.words[l] = 0 | u) : r.length--, r._strip();
        }
        (o.prototype.toString = function (t, e) {
          if (((e = 0 | e || 1), 16 === (t = t || 10) || 'hex' === t)) {
            r = '';
            for (var r, i = 0, o = 0, s = 0; s < this.length; s++) {
              var a = this.words[s],
                u = (((a << i) | o) & 16777215).toString(16);
              (o = (a >>> (24 - i)) & 16777215),
                (i += 2) >= 26 && ((i -= 26), s--),
                (r =
                  0 !== o || s !== this.length - 1
                    ? f[6 - u.length] + u + r
                    : u + r);
            }
            for (0 !== o && (r = o.toString(16) + r); r.length % e != 0; )
              r = '0' + r;
            return 0 !== this.negative && (r = '-' + r), r;
          }
          if (t === (0 | t) && t >= 2 && t <= 36) {
            var l = d[t],
              h = p[t];
            r = '';
            var c = this.clone();
            for (c.negative = 0; !c.isZero(); ) {
              var y = c.modrn(h).toString(t);
              r = (c = c.idivn(h)).isZero() ? y + r : f[l - y.length] + y + r;
            }
            for (this.isZero() && (r = '0' + r); r.length % e != 0; )
              r = '0' + r;
            return 0 !== this.negative && (r = '-' + r), r;
          }
          n(!1, 'Base should be between 2 and 36');
        }),
          (o.prototype.toNumber = function () {
            var t = this.words[0];
            return (
              2 === this.length
                ? (t += 67108864 * this.words[1])
                : 3 === this.length && 1 === this.words[2]
                ? (t += 4503599627370496 + 67108864 * this.words[1])
                : this.length > 2 &&
                  n(!1, 'Number can only safely store up to 53 bits'),
              0 !== this.negative ? -t : t
            );
          }),
          (o.prototype.toJSON = function () {
            return this.toString(16, 2);
          }),
          c &&
            (o.prototype.toBuffer = function (t, e) {
              return this.toArrayLike(c, t, e);
            }),
          (o.prototype.toArray = function (t, e) {
            return this.toArrayLike(Array, t, e);
          }),
          (o.prototype.toArrayLike = function (t, e, r) {
            this._strip();
            var i = this.byteLength(),
              o = r || Math.max(1, i);
            n(i <= o, 'byte array longer than desired length'),
              n(o > 0, 'Requested array length <= 0');
            var s = t.allocUnsafe ? t.allocUnsafe(o) : new t(o);
            return this['_toArrayLike' + ('le' === e ? 'LE' : 'BE')](s, i), s;
          }),
          (o.prototype._toArrayLikeLE = function (t, e) {
            for (var r = 0, n = 0, i = 0, o = 0; i < this.length; i++) {
              var s = (this.words[i] << o) | n;
              (t[r++] = 255 & s),
                r < t.length && (t[r++] = (s >> 8) & 255),
                r < t.length && (t[r++] = (s >> 16) & 255),
                6 === o
                  ? (r < t.length && (t[r++] = (s >> 24) & 255),
                    (n = 0),
                    (o = 0))
                  : ((n = s >>> 24), (o += 2));
            }
            if (r < t.length) for (t[r++] = n; r < t.length; ) t[r++] = 0;
          }),
          (o.prototype._toArrayLikeBE = function (t, e) {
            for (
              var r = t.length - 1, n = 0, i = 0, o = 0;
              i < this.length;
              i++
            ) {
              var s = (this.words[i] << o) | n;
              (t[r--] = 255 & s),
                r >= 0 && (t[r--] = (s >> 8) & 255),
                r >= 0 && (t[r--] = (s >> 16) & 255),
                6 === o
                  ? (r >= 0 && (t[r--] = (s >> 24) & 255), (n = 0), (o = 0))
                  : ((n = s >>> 24), (o += 2));
            }
            if (r >= 0) for (t[r--] = n; r >= 0; ) t[r--] = 0;
          }),
          Math.clz32
            ? (o.prototype._countBits = function (t) {
                return 32 - Math.clz32(t);
              })
            : (o.prototype._countBits = function (t) {
                var e = t,
                  r = 0;
                return (
                  e >= 4096 && ((r += 13), (e >>>= 13)),
                  e >= 64 && ((r += 7), (e >>>= 7)),
                  e >= 8 && ((r += 4), (e >>>= 4)),
                  e >= 2 && ((r += 2), (e >>>= 2)),
                  r + e
                );
              }),
          (o.prototype._zeroBits = function (t) {
            if (0 === t) return 26;
            var e = t,
              r = 0;
            return (
              (8191 & e) == 0 && ((r += 13), (e >>>= 13)),
              (127 & e) == 0 && ((r += 7), (e >>>= 7)),
              (15 & e) == 0 && ((r += 4), (e >>>= 4)),
              (3 & e) == 0 && ((r += 2), (e >>>= 2)),
              (1 & e) == 0 && r++,
              r
            );
          }),
          (o.prototype.bitLength = function () {
            var t = this.words[this.length - 1],
              e = this._countBits(t);
            return (this.length - 1) * 26 + e;
          }),
          (o.prototype.zeroBits = function () {
            if (this.isZero()) return 0;
            for (var t = 0, e = 0; e < this.length; e++) {
              var r = this._zeroBits(this.words[e]);
              if (((t += r), 26 !== r)) break;
            }
            return t;
          }),
          (o.prototype.byteLength = function () {
            return Math.ceil(this.bitLength() / 8);
          }),
          (o.prototype.toTwos = function (t) {
            return 0 !== this.negative
              ? this.abs().inotn(t).iaddn(1)
              : this.clone();
          }),
          (o.prototype.fromTwos = function (t) {
            return this.testn(t - 1)
              ? this.notn(t).iaddn(1).ineg()
              : this.clone();
          }),
          (o.prototype.isNeg = function () {
            return 0 !== this.negative;
          }),
          (o.prototype.neg = function () {
            return this.clone().ineg();
          }),
          (o.prototype.ineg = function () {
            return this.isZero() || (this.negative ^= 1), this;
          }),
          (o.prototype.iuor = function (t) {
            for (; this.length < t.length; ) this.words[this.length++] = 0;
            for (var e = 0; e < t.length; e++)
              this.words[e] = this.words[e] | t.words[e];
            return this._strip();
          }),
          (o.prototype.ior = function (t) {
            return n((this.negative | t.negative) == 0), this.iuor(t);
          }),
          (o.prototype.or = function (t) {
            return this.length > t.length
              ? this.clone().ior(t)
              : t.clone().ior(this);
          }),
          (o.prototype.uor = function (t) {
            return this.length > t.length
              ? this.clone().iuor(t)
              : t.clone().iuor(this);
          }),
          (o.prototype.iuand = function (t) {
            var e;
            e = this.length > t.length ? t : this;
            for (var r = 0; r < e.length; r++)
              this.words[r] = this.words[r] & t.words[r];
            return (this.length = e.length), this._strip();
          }),
          (o.prototype.iand = function (t) {
            return n((this.negative | t.negative) == 0), this.iuand(t);
          }),
          (o.prototype.and = function (t) {
            return this.length > t.length
              ? this.clone().iand(t)
              : t.clone().iand(this);
          }),
          (o.prototype.uand = function (t) {
            return this.length > t.length
              ? this.clone().iuand(t)
              : t.clone().iuand(this);
          }),
          (o.prototype.iuxor = function (t) {
            this.length > t.length
              ? ((e = this), (r = t))
              : ((e = t), (r = this));
            for (var e, r, n = 0; n < r.length; n++)
              this.words[n] = e.words[n] ^ r.words[n];
            if (this !== e)
              for (; n < e.length; n++) this.words[n] = e.words[n];
            return (this.length = e.length), this._strip();
          }),
          (o.prototype.ixor = function (t) {
            return n((this.negative | t.negative) == 0), this.iuxor(t);
          }),
          (o.prototype.xor = function (t) {
            return this.length > t.length
              ? this.clone().ixor(t)
              : t.clone().ixor(this);
          }),
          (o.prototype.uxor = function (t) {
            return this.length > t.length
              ? this.clone().iuxor(t)
              : t.clone().iuxor(this);
          }),
          (o.prototype.inotn = function (t) {
            n('number' == typeof t && t >= 0);
            var e = 0 | Math.ceil(t / 26),
              r = t % 26;
            this._expand(e), r > 0 && e--;
            for (var i = 0; i < e; i++)
              this.words[i] = 67108863 & ~this.words[i];
            return (
              r > 0 &&
                (this.words[i] = ~this.words[i] & (67108863 >> (26 - r))),
              this._strip()
            );
          }),
          (o.prototype.notn = function (t) {
            return this.clone().inotn(t);
          }),
          (o.prototype.setn = function (t, e) {
            n('number' == typeof t && t >= 0);
            var r = (t / 26) | 0,
              i = t % 26;
            return (
              this._expand(r + 1),
              e
                ? (this.words[r] = this.words[r] | (1 << i))
                : (this.words[r] = this.words[r] & ~(1 << i)),
              this._strip()
            );
          }),
          (o.prototype.iadd = function (t) {
            if (0 !== this.negative && 0 === t.negative)
              return (
                (this.negative = 0),
                (e = this.isub(t)),
                (this.negative ^= 1),
                this._normSign()
              );
            if (0 === this.negative && 0 !== t.negative)
              return (
                (t.negative = 0),
                (e = this.isub(t)),
                (t.negative = 1),
                e._normSign()
              );
            this.length > t.length
              ? ((r = this), (n = t))
              : ((r = t), (n = this));
            for (var e, r, n, i = 0, o = 0; o < n.length; o++)
              (e = (0 | r.words[o]) + (0 | n.words[o]) + i),
                (this.words[o] = 67108863 & e),
                (i = e >>> 26);
            for (; 0 !== i && o < r.length; o++)
              (e = (0 | r.words[o]) + i),
                (this.words[o] = 67108863 & e),
                (i = e >>> 26);
            if (((this.length = r.length), 0 !== i))
              (this.words[this.length] = i), this.length++;
            else if (r !== this)
              for (; o < r.length; o++) this.words[o] = r.words[o];
            return this;
          }),
          (o.prototype.add = function (t) {
            var e;
            return 0 !== t.negative && 0 === this.negative
              ? ((t.negative = 0), (e = this.sub(t)), (t.negative ^= 1), e)
              : 0 === t.negative && 0 !== this.negative
              ? ((this.negative = 0), (e = t.sub(this)), (this.negative = 1), e)
              : this.length > t.length
              ? this.clone().iadd(t)
              : t.clone().iadd(this);
          }),
          (o.prototype.isub = function (t) {
            if (0 !== t.negative) {
              t.negative = 0;
              var e,
                r,
                n = this.iadd(t);
              return (t.negative = 1), n._normSign();
            }
            if (0 !== this.negative)
              return (
                (this.negative = 0),
                this.iadd(t),
                (this.negative = 1),
                this._normSign()
              );
            var i = this.cmp(t);
            if (0 === i)
              return (
                (this.negative = 0),
                (this.length = 1),
                (this.words[0] = 0),
                this
              );
            i > 0 ? ((e = this), (r = t)) : ((e = t), (r = this));
            for (var o = 0, s = 0; s < r.length; s++)
              (o = (n = (0 | e.words[s]) - (0 | r.words[s]) + o) >> 26),
                (this.words[s] = 67108863 & n);
            for (; 0 !== o && s < e.length; s++)
              (o = (n = (0 | e.words[s]) + o) >> 26),
                (this.words[s] = 67108863 & n);
            if (0 === o && s < e.length && e !== this)
              for (; s < e.length; s++) this.words[s] = e.words[s];
            return (
              (this.length = Math.max(this.length, s)),
              e !== this && (this.negative = 1),
              this._strip()
            );
          }),
          (o.prototype.sub = function (t) {
            return this.clone().isub(t);
          });
        var m = function (t, e, r) {
          var n,
            i,
            o,
            s = t.words,
            a = e.words,
            u = r.words,
            l = 0,
            h = 0 | s[0],
            c = 8191 & h,
            f = h >>> 13,
            d = 0 | s[1],
            p = 8191 & d,
            y = d >>> 13,
            m = 0 | s[2],
            g = 8191 & m,
            w = m >>> 13,
            v = 0 | s[3],
            b = 8191 & v,
            E = v >>> 13,
            M = 0 | s[4],
            _ = 8191 & M,
            S = M >>> 13,
            A = 0 | s[5],
            x = 8191 & A,
            O = A >>> 13,
            I = 0 | s[6],
            R = 8191 & I,
            B = I >>> 13,
            C = 0 | s[7],
            L = 8191 & C,
            T = C >>> 13,
            N = 0 | s[8],
            P = 8191 & N,
            U = N >>> 13,
            k = 0 | s[9],
            j = 8191 & k,
            D = k >>> 13,
            z = 0 | a[0],
            q = 8191 & z,
            F = z >>> 13,
            $ = 0 | a[1],
            W = 8191 & $,
            H = $ >>> 13,
            Z = 0 | a[2],
            V = 8191 & Z,
            K = Z >>> 13,
            G = 0 | a[3],
            Q = 8191 & G,
            Y = G >>> 13,
            J = 0 | a[4],
            X = 8191 & J,
            tt = J >>> 13,
            te = 0 | a[5],
            tr = 8191 & te,
            tn = te >>> 13,
            ti = 0 | a[6],
            to = 8191 & ti,
            ts = ti >>> 13,
            ta = 0 | a[7],
            tu = 8191 & ta,
            tl = ta >>> 13,
            th = 0 | a[8],
            tc = 8191 & th,
            tf = th >>> 13,
            td = 0 | a[9],
            tp = 8191 & td,
            ty = td >>> 13;
          (r.negative = t.negative ^ e.negative), (r.length = 19);
          var tm =
            (((l + (n = Math.imul(c, q))) | 0) +
              ((8191 & (i = ((i = Math.imul(c, F)) + Math.imul(f, q)) | 0)) <<
                13)) |
            0;
          (l = ((((o = Math.imul(f, F)) + (i >>> 13)) | 0) + (tm >>> 26)) | 0),
            (tm &= 67108863),
            (n = Math.imul(p, q)),
            (i = ((i = Math.imul(p, F)) + Math.imul(y, q)) | 0),
            (o = Math.imul(y, F));
          var tg =
            (((l + (n = (n + Math.imul(c, W)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(c, H)) | 0) + Math.imul(f, W)) | 0)) <<
                13)) |
            0;
          (l =
            ((((o = (o + Math.imul(f, H)) | 0) + (i >>> 13)) | 0) +
              (tg >>> 26)) |
            0),
            (tg &= 67108863),
            (n = Math.imul(g, q)),
            (i = ((i = Math.imul(g, F)) + Math.imul(w, q)) | 0),
            (o = Math.imul(w, F)),
            (n = (n + Math.imul(p, W)) | 0),
            (i = ((i = (i + Math.imul(p, H)) | 0) + Math.imul(y, W)) | 0),
            (o = (o + Math.imul(y, H)) | 0);
          var tw =
            (((l + (n = (n + Math.imul(c, V)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(c, K)) | 0) + Math.imul(f, V)) | 0)) <<
                13)) |
            0;
          (l =
            ((((o = (o + Math.imul(f, K)) | 0) + (i >>> 13)) | 0) +
              (tw >>> 26)) |
            0),
            (tw &= 67108863),
            (n = Math.imul(b, q)),
            (i = ((i = Math.imul(b, F)) + Math.imul(E, q)) | 0),
            (o = Math.imul(E, F)),
            (n = (n + Math.imul(g, W)) | 0),
            (i = ((i = (i + Math.imul(g, H)) | 0) + Math.imul(w, W)) | 0),
            (o = (o + Math.imul(w, H)) | 0),
            (n = (n + Math.imul(p, V)) | 0),
            (i = ((i = (i + Math.imul(p, K)) | 0) + Math.imul(y, V)) | 0),
            (o = (o + Math.imul(y, K)) | 0);
          var tv =
            (((l + (n = (n + Math.imul(c, Q)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(c, Y)) | 0) + Math.imul(f, Q)) | 0)) <<
                13)) |
            0;
          (l =
            ((((o = (o + Math.imul(f, Y)) | 0) + (i >>> 13)) | 0) +
              (tv >>> 26)) |
            0),
            (tv &= 67108863),
            (n = Math.imul(_, q)),
            (i = ((i = Math.imul(_, F)) + Math.imul(S, q)) | 0),
            (o = Math.imul(S, F)),
            (n = (n + Math.imul(b, W)) | 0),
            (i = ((i = (i + Math.imul(b, H)) | 0) + Math.imul(E, W)) | 0),
            (o = (o + Math.imul(E, H)) | 0),
            (n = (n + Math.imul(g, V)) | 0),
            (i = ((i = (i + Math.imul(g, K)) | 0) + Math.imul(w, V)) | 0),
            (o = (o + Math.imul(w, K)) | 0),
            (n = (n + Math.imul(p, Q)) | 0),
            (i = ((i = (i + Math.imul(p, Y)) | 0) + Math.imul(y, Q)) | 0),
            (o = (o + Math.imul(y, Y)) | 0);
          var tb =
            (((l + (n = (n + Math.imul(c, X)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(c, tt)) | 0) + Math.imul(f, X)) | 0)) <<
                13)) |
            0;
          (l =
            ((((o = (o + Math.imul(f, tt)) | 0) + (i >>> 13)) | 0) +
              (tb >>> 26)) |
            0),
            (tb &= 67108863),
            (n = Math.imul(x, q)),
            (i = ((i = Math.imul(x, F)) + Math.imul(O, q)) | 0),
            (o = Math.imul(O, F)),
            (n = (n + Math.imul(_, W)) | 0),
            (i = ((i = (i + Math.imul(_, H)) | 0) + Math.imul(S, W)) | 0),
            (o = (o + Math.imul(S, H)) | 0),
            (n = (n + Math.imul(b, V)) | 0),
            (i = ((i = (i + Math.imul(b, K)) | 0) + Math.imul(E, V)) | 0),
            (o = (o + Math.imul(E, K)) | 0),
            (n = (n + Math.imul(g, Q)) | 0),
            (i = ((i = (i + Math.imul(g, Y)) | 0) + Math.imul(w, Q)) | 0),
            (o = (o + Math.imul(w, Y)) | 0),
            (n = (n + Math.imul(p, X)) | 0),
            (i = ((i = (i + Math.imul(p, tt)) | 0) + Math.imul(y, X)) | 0),
            (o = (o + Math.imul(y, tt)) | 0);
          var tE =
            (((l + (n = (n + Math.imul(c, tr)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(c, tn)) | 0) + Math.imul(f, tr)) | 0)) <<
                13)) |
            0;
          (l =
            ((((o = (o + Math.imul(f, tn)) | 0) + (i >>> 13)) | 0) +
              (tE >>> 26)) |
            0),
            (tE &= 67108863),
            (n = Math.imul(R, q)),
            (i = ((i = Math.imul(R, F)) + Math.imul(B, q)) | 0),
            (o = Math.imul(B, F)),
            (n = (n + Math.imul(x, W)) | 0),
            (i = ((i = (i + Math.imul(x, H)) | 0) + Math.imul(O, W)) | 0),
            (o = (o + Math.imul(O, H)) | 0),
            (n = (n + Math.imul(_, V)) | 0),
            (i = ((i = (i + Math.imul(_, K)) | 0) + Math.imul(S, V)) | 0),
            (o = (o + Math.imul(S, K)) | 0),
            (n = (n + Math.imul(b, Q)) | 0),
            (i = ((i = (i + Math.imul(b, Y)) | 0) + Math.imul(E, Q)) | 0),
            (o = (o + Math.imul(E, Y)) | 0),
            (n = (n + Math.imul(g, X)) | 0),
            (i = ((i = (i + Math.imul(g, tt)) | 0) + Math.imul(w, X)) | 0),
            (o = (o + Math.imul(w, tt)) | 0),
            (n = (n + Math.imul(p, tr)) | 0),
            (i = ((i = (i + Math.imul(p, tn)) | 0) + Math.imul(y, tr)) | 0),
            (o = (o + Math.imul(y, tn)) | 0);
          var tM =
            (((l + (n = (n + Math.imul(c, to)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(c, ts)) | 0) + Math.imul(f, to)) | 0)) <<
                13)) |
            0;
          (l =
            ((((o = (o + Math.imul(f, ts)) | 0) + (i >>> 13)) | 0) +
              (tM >>> 26)) |
            0),
            (tM &= 67108863),
            (n = Math.imul(L, q)),
            (i = ((i = Math.imul(L, F)) + Math.imul(T, q)) | 0),
            (o = Math.imul(T, F)),
            (n = (n + Math.imul(R, W)) | 0),
            (i = ((i = (i + Math.imul(R, H)) | 0) + Math.imul(B, W)) | 0),
            (o = (o + Math.imul(B, H)) | 0),
            (n = (n + Math.imul(x, V)) | 0),
            (i = ((i = (i + Math.imul(x, K)) | 0) + Math.imul(O, V)) | 0),
            (o = (o + Math.imul(O, K)) | 0),
            (n = (n + Math.imul(_, Q)) | 0),
            (i = ((i = (i + Math.imul(_, Y)) | 0) + Math.imul(S, Q)) | 0),
            (o = (o + Math.imul(S, Y)) | 0),
            (n = (n + Math.imul(b, X)) | 0),
            (i = ((i = (i + Math.imul(b, tt)) | 0) + Math.imul(E, X)) | 0),
            (o = (o + Math.imul(E, tt)) | 0),
            (n = (n + Math.imul(g, tr)) | 0),
            (i = ((i = (i + Math.imul(g, tn)) | 0) + Math.imul(w, tr)) | 0),
            (o = (o + Math.imul(w, tn)) | 0),
            (n = (n + Math.imul(p, to)) | 0),
            (i = ((i = (i + Math.imul(p, ts)) | 0) + Math.imul(y, to)) | 0),
            (o = (o + Math.imul(y, ts)) | 0);
          var t_ =
            (((l + (n = (n + Math.imul(c, tu)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(c, tl)) | 0) + Math.imul(f, tu)) | 0)) <<
                13)) |
            0;
          (l =
            ((((o = (o + Math.imul(f, tl)) | 0) + (i >>> 13)) | 0) +
              (t_ >>> 26)) |
            0),
            (t_ &= 67108863),
            (n = Math.imul(P, q)),
            (i = ((i = Math.imul(P, F)) + Math.imul(U, q)) | 0),
            (o = Math.imul(U, F)),
            (n = (n + Math.imul(L, W)) | 0),
            (i = ((i = (i + Math.imul(L, H)) | 0) + Math.imul(T, W)) | 0),
            (o = (o + Math.imul(T, H)) | 0),
            (n = (n + Math.imul(R, V)) | 0),
            (i = ((i = (i + Math.imul(R, K)) | 0) + Math.imul(B, V)) | 0),
            (o = (o + Math.imul(B, K)) | 0),
            (n = (n + Math.imul(x, Q)) | 0),
            (i = ((i = (i + Math.imul(x, Y)) | 0) + Math.imul(O, Q)) | 0),
            (o = (o + Math.imul(O, Y)) | 0),
            (n = (n + Math.imul(_, X)) | 0),
            (i = ((i = (i + Math.imul(_, tt)) | 0) + Math.imul(S, X)) | 0),
            (o = (o + Math.imul(S, tt)) | 0),
            (n = (n + Math.imul(b, tr)) | 0),
            (i = ((i = (i + Math.imul(b, tn)) | 0) + Math.imul(E, tr)) | 0),
            (o = (o + Math.imul(E, tn)) | 0),
            (n = (n + Math.imul(g, to)) | 0),
            (i = ((i = (i + Math.imul(g, ts)) | 0) + Math.imul(w, to)) | 0),
            (o = (o + Math.imul(w, ts)) | 0),
            (n = (n + Math.imul(p, tu)) | 0),
            (i = ((i = (i + Math.imul(p, tl)) | 0) + Math.imul(y, tu)) | 0),
            (o = (o + Math.imul(y, tl)) | 0);
          var tS =
            (((l + (n = (n + Math.imul(c, tc)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(c, tf)) | 0) + Math.imul(f, tc)) | 0)) <<
                13)) |
            0;
          (l =
            ((((o = (o + Math.imul(f, tf)) | 0) + (i >>> 13)) | 0) +
              (tS >>> 26)) |
            0),
            (tS &= 67108863),
            (n = Math.imul(j, q)),
            (i = ((i = Math.imul(j, F)) + Math.imul(D, q)) | 0),
            (o = Math.imul(D, F)),
            (n = (n + Math.imul(P, W)) | 0),
            (i = ((i = (i + Math.imul(P, H)) | 0) + Math.imul(U, W)) | 0),
            (o = (o + Math.imul(U, H)) | 0),
            (n = (n + Math.imul(L, V)) | 0),
            (i = ((i = (i + Math.imul(L, K)) | 0) + Math.imul(T, V)) | 0),
            (o = (o + Math.imul(T, K)) | 0),
            (n = (n + Math.imul(R, Q)) | 0),
            (i = ((i = (i + Math.imul(R, Y)) | 0) + Math.imul(B, Q)) | 0),
            (o = (o + Math.imul(B, Y)) | 0),
            (n = (n + Math.imul(x, X)) | 0),
            (i = ((i = (i + Math.imul(x, tt)) | 0) + Math.imul(O, X)) | 0),
            (o = (o + Math.imul(O, tt)) | 0),
            (n = (n + Math.imul(_, tr)) | 0),
            (i = ((i = (i + Math.imul(_, tn)) | 0) + Math.imul(S, tr)) | 0),
            (o = (o + Math.imul(S, tn)) | 0),
            (n = (n + Math.imul(b, to)) | 0),
            (i = ((i = (i + Math.imul(b, ts)) | 0) + Math.imul(E, to)) | 0),
            (o = (o + Math.imul(E, ts)) | 0),
            (n = (n + Math.imul(g, tu)) | 0),
            (i = ((i = (i + Math.imul(g, tl)) | 0) + Math.imul(w, tu)) | 0),
            (o = (o + Math.imul(w, tl)) | 0),
            (n = (n + Math.imul(p, tc)) | 0),
            (i = ((i = (i + Math.imul(p, tf)) | 0) + Math.imul(y, tc)) | 0),
            (o = (o + Math.imul(y, tf)) | 0);
          var tA =
            (((l + (n = (n + Math.imul(c, tp)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(c, ty)) | 0) + Math.imul(f, tp)) | 0)) <<
                13)) |
            0;
          (l =
            ((((o = (o + Math.imul(f, ty)) | 0) + (i >>> 13)) | 0) +
              (tA >>> 26)) |
            0),
            (tA &= 67108863),
            (n = Math.imul(j, W)),
            (i = ((i = Math.imul(j, H)) + Math.imul(D, W)) | 0),
            (o = Math.imul(D, H)),
            (n = (n + Math.imul(P, V)) | 0),
            (i = ((i = (i + Math.imul(P, K)) | 0) + Math.imul(U, V)) | 0),
            (o = (o + Math.imul(U, K)) | 0),
            (n = (n + Math.imul(L, Q)) | 0),
            (i = ((i = (i + Math.imul(L, Y)) | 0) + Math.imul(T, Q)) | 0),
            (o = (o + Math.imul(T, Y)) | 0),
            (n = (n + Math.imul(R, X)) | 0),
            (i = ((i = (i + Math.imul(R, tt)) | 0) + Math.imul(B, X)) | 0),
            (o = (o + Math.imul(B, tt)) | 0),
            (n = (n + Math.imul(x, tr)) | 0),
            (i = ((i = (i + Math.imul(x, tn)) | 0) + Math.imul(O, tr)) | 0),
            (o = (o + Math.imul(O, tn)) | 0),
            (n = (n + Math.imul(_, to)) | 0),
            (i = ((i = (i + Math.imul(_, ts)) | 0) + Math.imul(S, to)) | 0),
            (o = (o + Math.imul(S, ts)) | 0),
            (n = (n + Math.imul(b, tu)) | 0),
            (i = ((i = (i + Math.imul(b, tl)) | 0) + Math.imul(E, tu)) | 0),
            (o = (o + Math.imul(E, tl)) | 0),
            (n = (n + Math.imul(g, tc)) | 0),
            (i = ((i = (i + Math.imul(g, tf)) | 0) + Math.imul(w, tc)) | 0),
            (o = (o + Math.imul(w, tf)) | 0);
          var tx =
            (((l + (n = (n + Math.imul(p, tp)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(p, ty)) | 0) + Math.imul(y, tp)) | 0)) <<
                13)) |
            0;
          (l =
            ((((o = (o + Math.imul(y, ty)) | 0) + (i >>> 13)) | 0) +
              (tx >>> 26)) |
            0),
            (tx &= 67108863),
            (n = Math.imul(j, V)),
            (i = ((i = Math.imul(j, K)) + Math.imul(D, V)) | 0),
            (o = Math.imul(D, K)),
            (n = (n + Math.imul(P, Q)) | 0),
            (i = ((i = (i + Math.imul(P, Y)) | 0) + Math.imul(U, Q)) | 0),
            (o = (o + Math.imul(U, Y)) | 0),
            (n = (n + Math.imul(L, X)) | 0),
            (i = ((i = (i + Math.imul(L, tt)) | 0) + Math.imul(T, X)) | 0),
            (o = (o + Math.imul(T, tt)) | 0),
            (n = (n + Math.imul(R, tr)) | 0),
            (i = ((i = (i + Math.imul(R, tn)) | 0) + Math.imul(B, tr)) | 0),
            (o = (o + Math.imul(B, tn)) | 0),
            (n = (n + Math.imul(x, to)) | 0),
            (i = ((i = (i + Math.imul(x, ts)) | 0) + Math.imul(O, to)) | 0),
            (o = (o + Math.imul(O, ts)) | 0),
            (n = (n + Math.imul(_, tu)) | 0),
            (i = ((i = (i + Math.imul(_, tl)) | 0) + Math.imul(S, tu)) | 0),
            (o = (o + Math.imul(S, tl)) | 0),
            (n = (n + Math.imul(b, tc)) | 0),
            (i = ((i = (i + Math.imul(b, tf)) | 0) + Math.imul(E, tc)) | 0),
            (o = (o + Math.imul(E, tf)) | 0);
          var tO =
            (((l + (n = (n + Math.imul(g, tp)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(g, ty)) | 0) + Math.imul(w, tp)) | 0)) <<
                13)) |
            0;
          (l =
            ((((o = (o + Math.imul(w, ty)) | 0) + (i >>> 13)) | 0) +
              (tO >>> 26)) |
            0),
            (tO &= 67108863),
            (n = Math.imul(j, Q)),
            (i = ((i = Math.imul(j, Y)) + Math.imul(D, Q)) | 0),
            (o = Math.imul(D, Y)),
            (n = (n + Math.imul(P, X)) | 0),
            (i = ((i = (i + Math.imul(P, tt)) | 0) + Math.imul(U, X)) | 0),
            (o = (o + Math.imul(U, tt)) | 0),
            (n = (n + Math.imul(L, tr)) | 0),
            (i = ((i = (i + Math.imul(L, tn)) | 0) + Math.imul(T, tr)) | 0),
            (o = (o + Math.imul(T, tn)) | 0),
            (n = (n + Math.imul(R, to)) | 0),
            (i = ((i = (i + Math.imul(R, ts)) | 0) + Math.imul(B, to)) | 0),
            (o = (o + Math.imul(B, ts)) | 0),
            (n = (n + Math.imul(x, tu)) | 0),
            (i = ((i = (i + Math.imul(x, tl)) | 0) + Math.imul(O, tu)) | 0),
            (o = (o + Math.imul(O, tl)) | 0),
            (n = (n + Math.imul(_, tc)) | 0),
            (i = ((i = (i + Math.imul(_, tf)) | 0) + Math.imul(S, tc)) | 0),
            (o = (o + Math.imul(S, tf)) | 0);
          var tI =
            (((l + (n = (n + Math.imul(b, tp)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(b, ty)) | 0) + Math.imul(E, tp)) | 0)) <<
                13)) |
            0;
          (l =
            ((((o = (o + Math.imul(E, ty)) | 0) + (i >>> 13)) | 0) +
              (tI >>> 26)) |
            0),
            (tI &= 67108863),
            (n = Math.imul(j, X)),
            (i = ((i = Math.imul(j, tt)) + Math.imul(D, X)) | 0),
            (o = Math.imul(D, tt)),
            (n = (n + Math.imul(P, tr)) | 0),
            (i = ((i = (i + Math.imul(P, tn)) | 0) + Math.imul(U, tr)) | 0),
            (o = (o + Math.imul(U, tn)) | 0),
            (n = (n + Math.imul(L, to)) | 0),
            (i = ((i = (i + Math.imul(L, ts)) | 0) + Math.imul(T, to)) | 0),
            (o = (o + Math.imul(T, ts)) | 0),
            (n = (n + Math.imul(R, tu)) | 0),
            (i = ((i = (i + Math.imul(R, tl)) | 0) + Math.imul(B, tu)) | 0),
            (o = (o + Math.imul(B, tl)) | 0),
            (n = (n + Math.imul(x, tc)) | 0),
            (i = ((i = (i + Math.imul(x, tf)) | 0) + Math.imul(O, tc)) | 0),
            (o = (o + Math.imul(O, tf)) | 0);
          var tR =
            (((l + (n = (n + Math.imul(_, tp)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(_, ty)) | 0) + Math.imul(S, tp)) | 0)) <<
                13)) |
            0;
          (l =
            ((((o = (o + Math.imul(S, ty)) | 0) + (i >>> 13)) | 0) +
              (tR >>> 26)) |
            0),
            (tR &= 67108863),
            (n = Math.imul(j, tr)),
            (i = ((i = Math.imul(j, tn)) + Math.imul(D, tr)) | 0),
            (o = Math.imul(D, tn)),
            (n = (n + Math.imul(P, to)) | 0),
            (i = ((i = (i + Math.imul(P, ts)) | 0) + Math.imul(U, to)) | 0),
            (o = (o + Math.imul(U, ts)) | 0),
            (n = (n + Math.imul(L, tu)) | 0),
            (i = ((i = (i + Math.imul(L, tl)) | 0) + Math.imul(T, tu)) | 0),
            (o = (o + Math.imul(T, tl)) | 0),
            (n = (n + Math.imul(R, tc)) | 0),
            (i = ((i = (i + Math.imul(R, tf)) | 0) + Math.imul(B, tc)) | 0),
            (o = (o + Math.imul(B, tf)) | 0);
          var tB =
            (((l + (n = (n + Math.imul(x, tp)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(x, ty)) | 0) + Math.imul(O, tp)) | 0)) <<
                13)) |
            0;
          (l =
            ((((o = (o + Math.imul(O, ty)) | 0) + (i >>> 13)) | 0) +
              (tB >>> 26)) |
            0),
            (tB &= 67108863),
            (n = Math.imul(j, to)),
            (i = ((i = Math.imul(j, ts)) + Math.imul(D, to)) | 0),
            (o = Math.imul(D, ts)),
            (n = (n + Math.imul(P, tu)) | 0),
            (i = ((i = (i + Math.imul(P, tl)) | 0) + Math.imul(U, tu)) | 0),
            (o = (o + Math.imul(U, tl)) | 0),
            (n = (n + Math.imul(L, tc)) | 0),
            (i = ((i = (i + Math.imul(L, tf)) | 0) + Math.imul(T, tc)) | 0),
            (o = (o + Math.imul(T, tf)) | 0);
          var tC =
            (((l + (n = (n + Math.imul(R, tp)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(R, ty)) | 0) + Math.imul(B, tp)) | 0)) <<
                13)) |
            0;
          (l =
            ((((o = (o + Math.imul(B, ty)) | 0) + (i >>> 13)) | 0) +
              (tC >>> 26)) |
            0),
            (tC &= 67108863),
            (n = Math.imul(j, tu)),
            (i = ((i = Math.imul(j, tl)) + Math.imul(D, tu)) | 0),
            (o = Math.imul(D, tl)),
            (n = (n + Math.imul(P, tc)) | 0),
            (i = ((i = (i + Math.imul(P, tf)) | 0) + Math.imul(U, tc)) | 0),
            (o = (o + Math.imul(U, tf)) | 0);
          var tL =
            (((l + (n = (n + Math.imul(L, tp)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(L, ty)) | 0) + Math.imul(T, tp)) | 0)) <<
                13)) |
            0;
          (l =
            ((((o = (o + Math.imul(T, ty)) | 0) + (i >>> 13)) | 0) +
              (tL >>> 26)) |
            0),
            (tL &= 67108863),
            (n = Math.imul(j, tc)),
            (i = ((i = Math.imul(j, tf)) + Math.imul(D, tc)) | 0),
            (o = Math.imul(D, tf));
          var tT =
            (((l + (n = (n + Math.imul(P, tp)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(P, ty)) | 0) + Math.imul(U, tp)) | 0)) <<
                13)) |
            0;
          (l =
            ((((o = (o + Math.imul(U, ty)) | 0) + (i >>> 13)) | 0) +
              (tT >>> 26)) |
            0),
            (tT &= 67108863);
          var tN =
            (((l + (n = Math.imul(j, tp))) | 0) +
              ((8191 & (i = ((i = Math.imul(j, ty)) + Math.imul(D, tp)) | 0)) <<
                13)) |
            0;
          return (
            (l =
              ((((o = Math.imul(D, ty)) + (i >>> 13)) | 0) + (tN >>> 26)) | 0),
            (tN &= 67108863),
            (u[0] = tm),
            (u[1] = tg),
            (u[2] = tw),
            (u[3] = tv),
            (u[4] = tb),
            (u[5] = tE),
            (u[6] = tM),
            (u[7] = t_),
            (u[8] = tS),
            (u[9] = tA),
            (u[10] = tx),
            (u[11] = tO),
            (u[12] = tI),
            (u[13] = tR),
            (u[14] = tB),
            (u[15] = tC),
            (u[16] = tL),
            (u[17] = tT),
            (u[18] = tN),
            0 !== l && ((u[19] = l), r.length++),
            r
          );
        };
        function g(t, e, r) {
          (r.negative = e.negative ^ t.negative),
            (r.length = t.length + e.length);
          for (var n = 0, i = 0, o = 0; o < r.length - 1; o++) {
            var s = i;
            i = 0;
            for (
              var a = 67108863 & n,
                u = Math.min(o, e.length - 1),
                l = Math.max(0, o - t.length + 1);
              l <= u;
              l++
            ) {
              var h = o - l,
                c = (0 | t.words[h]) * (0 | e.words[l]),
                f = 67108863 & c;
              (s = (s + ((c / 67108864) | 0)) | 0),
                (a = 67108863 & (f = (f + a) | 0)),
                (i += (s = (s + (f >>> 26)) | 0) >>> 26),
                (s &= 67108863);
            }
            (r.words[o] = a), (n = s), (s = i);
          }
          return 0 !== n ? (r.words[o] = n) : r.length--, r._strip();
        }
        function w(t, e) {
          (this.x = t), (this.y = e);
        }
        Math.imul || (m = y),
          (o.prototype.mulTo = function (t, e) {
            var r,
              n = this.length + t.length;
            return 10 === this.length && 10 === t.length
              ? m(this, t, e)
              : n < 63
              ? y(this, t, e)
              : g(this, t, e);
          }),
          (w.prototype.makeRBT = function (t) {
            for (
              var e = Array(t), r = o.prototype._countBits(t) - 1, n = 0;
              n < t;
              n++
            )
              e[n] = this.revBin(n, r, t);
            return e;
          }),
          (w.prototype.revBin = function (t, e, r) {
            if (0 === t || t === r - 1) return t;
            for (var n = 0, i = 0; i < e; i++)
              (n |= (1 & t) << (e - i - 1)), (t >>= 1);
            return n;
          }),
          (w.prototype.permute = function (t, e, r, n, i, o) {
            for (var s = 0; s < o; s++) (n[s] = e[t[s]]), (i[s] = r[t[s]]);
          }),
          (w.prototype.transform = function (t, e, r, n, i, o) {
            this.permute(o, t, e, r, n, i);
            for (var s = 1; s < i; s <<= 1)
              for (
                var a = s << 1,
                  u = Math.cos((2 * Math.PI) / a),
                  l = Math.sin((2 * Math.PI) / a),
                  h = 0;
                h < i;
                h += a
              )
                for (var c = u, f = l, d = 0; d < s; d++) {
                  var p = r[h + d],
                    y = n[h + d],
                    m = r[h + d + s],
                    g = n[h + d + s],
                    w = c * m - f * g;
                  (g = c * g + f * m),
                    (m = w),
                    (r[h + d] = p + m),
                    (n[h + d] = y + g),
                    (r[h + d + s] = p - m),
                    (n[h + d + s] = y - g),
                    d !== a &&
                      ((w = u * c - l * f), (f = u * f + l * c), (c = w));
                }
          }),
          (w.prototype.guessLen13b = function (t, e) {
            var r = 1 | Math.max(e, t),
              n = 1 & r,
              i = 0;
            for (r = (r / 2) | 0; r; r >>>= 1) i++;
            return 1 << (i + 1 + n);
          }),
          (w.prototype.conjugate = function (t, e, r) {
            if (!(r <= 1))
              for (var n = 0; n < r / 2; n++) {
                var i = t[n];
                (t[n] = t[r - n - 1]),
                  (t[r - n - 1] = i),
                  (i = e[n]),
                  (e[n] = -e[r - n - 1]),
                  (e[r - n - 1] = -i);
              }
          }),
          (w.prototype.normalize13b = function (t, e) {
            for (var r = 0, n = 0; n < e / 2; n++) {
              var i =
                8192 * Math.round(t[2 * n + 1] / e) +
                Math.round(t[2 * n] / e) +
                r;
              (t[n] = 67108863 & i),
                (r = i < 67108864 ? 0 : (i / 67108864) | 0);
            }
            return t;
          }),
          (w.prototype.convert13b = function (t, e, r, i) {
            for (var o = 0, s = 0; s < e; s++)
              (o += 0 | t[s]),
                (r[2 * s] = 8191 & o),
                (o >>>= 13),
                (r[2 * s + 1] = 8191 & o),
                (o >>>= 13);
            for (s = 2 * e; s < i; ++s) r[s] = 0;
            n(0 === o), n((-8192 & o) == 0);
          }),
          (w.prototype.stub = function (t) {
            for (var e = Array(t), r = 0; r < t; r++) e[r] = 0;
            return e;
          }),
          (w.prototype.mulp = function (t, e, r) {
            var n = 2 * this.guessLen13b(t.length, e.length),
              i = this.makeRBT(n),
              o = this.stub(n),
              s = Array(n),
              a = Array(n),
              u = Array(n),
              l = Array(n),
              h = Array(n),
              c = Array(n),
              f = r.words;
            (f.length = n),
              this.convert13b(t.words, t.length, s, n),
              this.convert13b(e.words, e.length, l, n),
              this.transform(s, o, a, u, n, i),
              this.transform(l, o, h, c, n, i);
            for (var d = 0; d < n; d++) {
              var p = a[d] * h[d] - u[d] * c[d];
              (u[d] = a[d] * c[d] + u[d] * h[d]), (a[d] = p);
            }
            return (
              this.conjugate(a, u, n),
              this.transform(a, u, f, o, n, i),
              this.conjugate(f, o, n),
              this.normalize13b(f, n),
              (r.negative = t.negative ^ e.negative),
              (r.length = t.length + e.length),
              r._strip()
            );
          }),
          (o.prototype.mul = function (t) {
            var e = new o(null);
            return (e.words = Array(this.length + t.length)), this.mulTo(t, e);
          }),
          (o.prototype.mulf = function (t) {
            var e = new o(null);
            return (e.words = Array(this.length + t.length)), g(this, t, e);
          }),
          (o.prototype.imul = function (t) {
            return this.clone().mulTo(t, this);
          }),
          (o.prototype.imuln = function (t) {
            var e = t < 0;
            e && (t = -t), n('number' == typeof t), n(t < 67108864);
            for (var r = 0, i = 0; i < this.length; i++) {
              var o = (0 | this.words[i]) * t,
                s = (67108863 & o) + (67108863 & r);
              (r >>= 26),
                (r += ((o / 67108864) | 0) + (s >>> 26)),
                (this.words[i] = 67108863 & s);
            }
            return (
              0 !== r && ((this.words[i] = r), this.length++),
              e ? this.ineg() : this
            );
          }),
          (o.prototype.muln = function (t) {
            return this.clone().imuln(t);
          }),
          (o.prototype.sqr = function () {
            return this.mul(this);
          }),
          (o.prototype.isqr = function () {
            return this.imul(this.clone());
          }),
          (o.prototype.pow = function (t) {
            var e = (function (t) {
              for (var e = Array(t.bitLength()), r = 0; r < e.length; r++) {
                var n = (r / 26) | 0,
                  i = r % 26;
                e[r] = (t.words[n] >>> i) & 1;
              }
              return e;
            })(t);
            if (0 === e.length) return new o(1);
            for (
              var r = this, n = 0;
              n < e.length && 0 === e[n];
              n++, r = r.sqr()
            );
            if (++n < e.length)
              for (var i = r.sqr(); n < e.length; n++, i = i.sqr())
                0 !== e[n] && (r = r.mul(i));
            return r;
          }),
          (o.prototype.iushln = function (t) {
            n('number' == typeof t && t >= 0);
            var e,
              r = t % 26,
              i = (t - r) / 26,
              o = (67108863 >>> (26 - r)) << (26 - r);
            if (0 !== r) {
              var s = 0;
              for (e = 0; e < this.length; e++) {
                var a = this.words[e] & o,
                  u = ((0 | this.words[e]) - a) << r;
                (this.words[e] = u | s), (s = a >>> (26 - r));
              }
              s && ((this.words[e] = s), this.length++);
            }
            if (0 !== i) {
              for (e = this.length - 1; e >= 0; e--)
                this.words[e + i] = this.words[e];
              for (e = 0; e < i; e++) this.words[e] = 0;
              this.length += i;
            }
            return this._strip();
          }),
          (o.prototype.ishln = function (t) {
            return n(0 === this.negative), this.iushln(t);
          }),
          (o.prototype.iushrn = function (t, e, r) {
            n('number' == typeof t && t >= 0),
              (i = e ? (e - (e % 26)) / 26 : 0);
            var i,
              o = t % 26,
              s = Math.min((t - o) / 26, this.length),
              a = 67108863 ^ ((67108863 >>> o) << o);
            if (((i -= s), (i = Math.max(0, i)), r)) {
              for (var u = 0; u < s; u++) r.words[u] = this.words[u];
              r.length = s;
            }
            if (0 === s);
            else if (this.length > s)
              for (this.length -= s, u = 0; u < this.length; u++)
                this.words[u] = this.words[u + s];
            else (this.words[0] = 0), (this.length = 1);
            var l = 0;
            for (u = this.length - 1; u >= 0 && (0 !== l || u >= i); u--) {
              var h = 0 | this.words[u];
              (this.words[u] = (l << (26 - o)) | (h >>> o)), (l = h & a);
            }
            return (
              r && 0 !== l && (r.words[r.length++] = l),
              0 === this.length && ((this.words[0] = 0), (this.length = 1)),
              this._strip()
            );
          }),
          (o.prototype.ishrn = function (t, e, r) {
            return n(0 === this.negative), this.iushrn(t, e, r);
          }),
          (o.prototype.shln = function (t) {
            return this.clone().ishln(t);
          }),
          (o.prototype.ushln = function (t) {
            return this.clone().iushln(t);
          }),
          (o.prototype.shrn = function (t) {
            return this.clone().ishrn(t);
          }),
          (o.prototype.ushrn = function (t) {
            return this.clone().iushrn(t);
          }),
          (o.prototype.testn = function (t) {
            n('number' == typeof t && t >= 0);
            var e = t % 26,
              r = (t - e) / 26;
            return !(this.length <= r) && !!(this.words[r] & (1 << e));
          }),
          (o.prototype.imaskn = function (t) {
            n('number' == typeof t && t >= 0);
            var e = t % 26,
              r = (t - e) / 26;
            return (n(
              0 === this.negative,
              'imaskn works only with positive numbers'
            ),
            this.length <= r)
              ? this
              : (0 !== e && r++,
                (this.length = Math.min(r, this.length)),
                0 !== e &&
                  (this.words[this.length - 1] &=
                    67108863 ^ ((67108863 >>> e) << e)),
                this._strip());
          }),
          (o.prototype.maskn = function (t) {
            return this.clone().imaskn(t);
          }),
          (o.prototype.iaddn = function (t) {
            return (n('number' == typeof t), n(t < 67108864), t < 0)
              ? this.isubn(-t)
              : 0 !== this.negative
              ? (1 === this.length && (0 | this.words[0]) <= t
                  ? ((this.words[0] = t - (0 | this.words[0])),
                    (this.negative = 0))
                  : ((this.negative = 0), this.isubn(t), (this.negative = 1)),
                this)
              : this._iaddn(t);
          }),
          (o.prototype._iaddn = function (t) {
            this.words[0] += t;
            for (var e = 0; e < this.length && this.words[e] >= 67108864; e++)
              (this.words[e] -= 67108864),
                e === this.length - 1
                  ? (this.words[e + 1] = 1)
                  : this.words[e + 1]++;
            return (this.length = Math.max(this.length, e + 1)), this;
          }),
          (o.prototype.isubn = function (t) {
            if ((n('number' == typeof t), n(t < 67108864), t < 0))
              return this.iaddn(-t);
            if (0 !== this.negative)
              return (
                (this.negative = 0), this.iaddn(t), (this.negative = 1), this
              );
            if (((this.words[0] -= t), 1 === this.length && this.words[0] < 0))
              (this.words[0] = -this.words[0]), (this.negative = 1);
            else
              for (var e = 0; e < this.length && this.words[e] < 0; e++)
                (this.words[e] += 67108864), (this.words[e + 1] -= 1);
            return this._strip();
          }),
          (o.prototype.addn = function (t) {
            return this.clone().iaddn(t);
          }),
          (o.prototype.subn = function (t) {
            return this.clone().isubn(t);
          }),
          (o.prototype.iabs = function () {
            return (this.negative = 0), this;
          }),
          (o.prototype.abs = function () {
            return this.clone().iabs();
          }),
          (o.prototype._ishlnsubmul = function (t, e, r) {
            var i,
              o,
              s = t.length + r;
            this._expand(s);
            var a = 0;
            for (i = 0; i < t.length; i++) {
              o = (0 | this.words[i + r]) + a;
              var u = (0 | t.words[i]) * e;
              (o -= 67108863 & u),
                (a = (o >> 26) - ((u / 67108864) | 0)),
                (this.words[i + r] = 67108863 & o);
            }
            for (; i < this.length - r; i++)
              (a = (o = (0 | this.words[i + r]) + a) >> 26),
                (this.words[i + r] = 67108863 & o);
            if (0 === a) return this._strip();
            for (n(-1 === a), a = 0, i = 0; i < this.length; i++)
              (a = (o = -(0 | this.words[i]) + a) >> 26),
                (this.words[i] = 67108863 & o);
            return (this.negative = 1), this._strip();
          }),
          (o.prototype._wordDiv = function (t, e) {
            var r,
              n = this.length - t.length,
              i = this.clone(),
              s = t,
              a = 0 | s.words[s.length - 1];
            0 != (n = 26 - this._countBits(a)) &&
              ((s = s.ushln(n)), i.iushln(n), (a = 0 | s.words[s.length - 1]));
            var u = i.length - s.length;
            if ('mod' !== e) {
              ((r = new o(null)).length = u + 1), (r.words = Array(r.length));
              for (var l = 0; l < r.length; l++) r.words[l] = 0;
            }
            var h = i.clone()._ishlnsubmul(s, 1, u);
            0 === h.negative && ((i = h), r && (r.words[u] = 1));
            for (var c = u - 1; c >= 0; c--) {
              var f =
                (0 | i.words[s.length + c]) * 67108864 +
                (0 | i.words[s.length + c - 1]);
              for (
                f = Math.min((f / a) | 0, 67108863), i._ishlnsubmul(s, f, c);
                0 !== i.negative;

              )
                f--,
                  (i.negative = 0),
                  i._ishlnsubmul(s, 1, c),
                  i.isZero() || (i.negative ^= 1);
              r && (r.words[c] = f);
            }
            return (
              r && r._strip(),
              i._strip(),
              'div' !== e && 0 !== n && i.iushrn(n),
              { div: r || null, mod: i }
            );
          }),
          (o.prototype.divmod = function (t, e, r) {
            var i, s, a;
            return (n(!t.isZero()), this.isZero())
              ? { div: new o(0), mod: new o(0) }
              : 0 !== this.negative && 0 === t.negative
              ? ((a = this.neg().divmod(t, e)),
                'mod' !== e && (i = a.div.neg()),
                'div' !== e &&
                  ((s = a.mod.neg()), r && 0 !== s.negative && s.iadd(t)),
                { div: i, mod: s })
              : 0 === this.negative && 0 !== t.negative
              ? ((a = this.divmod(t.neg(), e)),
                'mod' !== e && (i = a.div.neg()),
                { div: i, mod: a.mod })
              : (this.negative & t.negative) != 0
              ? ((a = this.neg().divmod(t.neg(), e)),
                'div' !== e &&
                  ((s = a.mod.neg()), r && 0 !== s.negative && s.isub(t)),
                { div: a.div, mod: s })
              : t.length > this.length || 0 > this.cmp(t)
              ? { div: new o(0), mod: this }
              : 1 === t.length
              ? 'div' === e
                ? { div: this.divn(t.words[0]), mod: null }
                : 'mod' === e
                ? { div: null, mod: new o(this.modrn(t.words[0])) }
                : {
                    div: this.divn(t.words[0]),
                    mod: new o(this.modrn(t.words[0])),
                  }
              : this._wordDiv(t, e);
          }),
          (o.prototype.div = function (t) {
            return this.divmod(t, 'div', !1).div;
          }),
          (o.prototype.mod = function (t) {
            return this.divmod(t, 'mod', !1).mod;
          }),
          (o.prototype.umod = function (t) {
            return this.divmod(t, 'mod', !0).mod;
          }),
          (o.prototype.divRound = function (t) {
            var e = this.divmod(t);
            if (e.mod.isZero()) return e.div;
            var r = 0 !== e.div.negative ? e.mod.isub(t) : e.mod,
              n = t.ushrn(1),
              i = t.andln(1),
              o = r.cmp(n);
            return o < 0 || (1 === i && 0 === o)
              ? e.div
              : 0 !== e.div.negative
              ? e.div.isubn(1)
              : e.div.iaddn(1);
          }),
          (o.prototype.modrn = function (t) {
            var e = t < 0;
            e && (t = -t), n(t <= 67108863);
            for (var r = 67108864 % t, i = 0, o = this.length - 1; o >= 0; o--)
              i = (r * i + (0 | this.words[o])) % t;
            return e ? -i : i;
          }),
          (o.prototype.modn = function (t) {
            return this.modrn(t);
          }),
          (o.prototype.idivn = function (t) {
            var e = t < 0;
            e && (t = -t), n(t <= 67108863);
            for (var r = 0, i = this.length - 1; i >= 0; i--) {
              var o = (0 | this.words[i]) + 67108864 * r;
              (this.words[i] = (o / t) | 0), (r = o % t);
            }
            return this._strip(), e ? this.ineg() : this;
          }),
          (o.prototype.divn = function (t) {
            return this.clone().idivn(t);
          }),
          (o.prototype.egcd = function (t) {
            n(0 === t.negative), n(!t.isZero());
            var e = this,
              r = t.clone();
            e = 0 !== e.negative ? e.umod(t) : e.clone();
            for (
              var i = new o(1), s = new o(0), a = new o(0), u = new o(1), l = 0;
              e.isEven() && r.isEven();

            )
              e.iushrn(1), r.iushrn(1), ++l;
            for (var h = r.clone(), c = e.clone(); !e.isZero(); ) {
              for (
                var f = 0, d = 1;
                (e.words[0] & d) == 0 && f < 26;
                ++f, d <<= 1
              );
              if (f > 0)
                for (e.iushrn(f); f-- > 0; )
                  (i.isOdd() || s.isOdd()) && (i.iadd(h), s.isub(c)),
                    i.iushrn(1),
                    s.iushrn(1);
              for (
                var p = 0, y = 1;
                (r.words[0] & y) == 0 && p < 26;
                ++p, y <<= 1
              );
              if (p > 0)
                for (r.iushrn(p); p-- > 0; )
                  (a.isOdd() || u.isOdd()) && (a.iadd(h), u.isub(c)),
                    a.iushrn(1),
                    u.iushrn(1);
              e.cmp(r) >= 0
                ? (e.isub(r), i.isub(a), s.isub(u))
                : (r.isub(e), a.isub(i), u.isub(s));
            }
            return { a: a, b: u, gcd: r.iushln(l) };
          }),
          (o.prototype._invmp = function (t) {
            n(0 === t.negative), n(!t.isZero());
            var e,
              r = this,
              i = t.clone();
            r = 0 !== r.negative ? r.umod(t) : r.clone();
            for (
              var s = new o(1), a = new o(0), u = i.clone();
              r.cmpn(1) > 0 && i.cmpn(1) > 0;

            ) {
              for (
                var l = 0, h = 1;
                (r.words[0] & h) == 0 && l < 26;
                ++l, h <<= 1
              );
              if (l > 0)
                for (r.iushrn(l); l-- > 0; )
                  s.isOdd() && s.iadd(u), s.iushrn(1);
              for (
                var c = 0, f = 1;
                (i.words[0] & f) == 0 && c < 26;
                ++c, f <<= 1
              );
              if (c > 0)
                for (i.iushrn(c); c-- > 0; )
                  a.isOdd() && a.iadd(u), a.iushrn(1);
              r.cmp(i) >= 0 ? (r.isub(i), s.isub(a)) : (i.isub(r), a.isub(s));
            }
            return 0 > (e = 0 === r.cmpn(1) ? s : a).cmpn(0) && e.iadd(t), e;
          }),
          (o.prototype.gcd = function (t) {
            if (this.isZero()) return t.abs();
            if (t.isZero()) return this.abs();
            var e = this.clone(),
              r = t.clone();
            (e.negative = 0), (r.negative = 0);
            for (var n = 0; e.isEven() && r.isEven(); n++)
              e.iushrn(1), r.iushrn(1);
            for (;;) {
              for (; e.isEven(); ) e.iushrn(1);
              for (; r.isEven(); ) r.iushrn(1);
              var i = e.cmp(r);
              if (i < 0) {
                var o = e;
                (e = r), (r = o);
              } else if (0 === i || 0 === r.cmpn(1)) break;
              e.isub(r);
            }
            return r.iushln(n);
          }),
          (o.prototype.invm = function (t) {
            return this.egcd(t).a.umod(t);
          }),
          (o.prototype.isEven = function () {
            return (1 & this.words[0]) == 0;
          }),
          (o.prototype.isOdd = function () {
            return (1 & this.words[0]) == 1;
          }),
          (o.prototype.andln = function (t) {
            return this.words[0] & t;
          }),
          (o.prototype.bincn = function (t) {
            n('number' == typeof t);
            var e = t % 26,
              r = (t - e) / 26,
              i = 1 << e;
            if (this.length <= r)
              return this._expand(r + 1), (this.words[r] |= i), this;
            for (var o = i, s = r; 0 !== o && s < this.length; s++) {
              var a = 0 | this.words[s];
              (a += o), (o = a >>> 26), (a &= 67108863), (this.words[s] = a);
            }
            return 0 !== o && ((this.words[s] = o), this.length++), this;
          }),
          (o.prototype.isZero = function () {
            return 1 === this.length && 0 === this.words[0];
          }),
          (o.prototype.cmpn = function (t) {
            var e,
              r = t < 0;
            if (0 !== this.negative && !r) return -1;
            if (0 === this.negative && r) return 1;
            if ((this._strip(), this.length > 1)) e = 1;
            else {
              r && (t = -t), n(t <= 67108863, 'Number is too big');
              var i = 0 | this.words[0];
              e = i === t ? 0 : i < t ? -1 : 1;
            }
            return 0 !== this.negative ? 0 | -e : e;
          }),
          (o.prototype.cmp = function (t) {
            if (0 !== this.negative && 0 === t.negative) return -1;
            if (0 === this.negative && 0 !== t.negative) return 1;
            var e = this.ucmp(t);
            return 0 !== this.negative ? 0 | -e : e;
          }),
          (o.prototype.ucmp = function (t) {
            if (this.length > t.length) return 1;
            if (this.length < t.length) return -1;
            for (var e = 0, r = this.length - 1; r >= 0; r--) {
              var n = 0 | this.words[r],
                i = 0 | t.words[r];
              if (n !== i) {
                n < i ? (e = -1) : n > i && (e = 1);
                break;
              }
            }
            return e;
          }),
          (o.prototype.gtn = function (t) {
            return 1 === this.cmpn(t);
          }),
          (o.prototype.gt = function (t) {
            return 1 === this.cmp(t);
          }),
          (o.prototype.gten = function (t) {
            return this.cmpn(t) >= 0;
          }),
          (o.prototype.gte = function (t) {
            return this.cmp(t) >= 0;
          }),
          (o.prototype.ltn = function (t) {
            return -1 === this.cmpn(t);
          }),
          (o.prototype.lt = function (t) {
            return -1 === this.cmp(t);
          }),
          (o.prototype.lten = function (t) {
            return 0 >= this.cmpn(t);
          }),
          (o.prototype.lte = function (t) {
            return 0 >= this.cmp(t);
          }),
          (o.prototype.eqn = function (t) {
            return 0 === this.cmpn(t);
          }),
          (o.prototype.eq = function (t) {
            return 0 === this.cmp(t);
          }),
          (o.red = function (t) {
            return new A(t);
          }),
          (o.prototype.toRed = function (t) {
            return (
              n(!this.red, 'Already a number in reduction context'),
              n(0 === this.negative, 'red works only with positives'),
              t.convertTo(this)._forceRed(t)
            );
          }),
          (o.prototype.fromRed = function () {
            return (
              n(
                this.red,
                'fromRed works only with numbers in reduction context'
              ),
              this.red.convertFrom(this)
            );
          }),
          (o.prototype._forceRed = function (t) {
            return (this.red = t), this;
          }),
          (o.prototype.forceRed = function (t) {
            return (
              n(!this.red, 'Already a number in reduction context'),
              this._forceRed(t)
            );
          }),
          (o.prototype.redAdd = function (t) {
            return (
              n(this.red, 'redAdd works only with red numbers'),
              this.red.add(this, t)
            );
          }),
          (o.prototype.redIAdd = function (t) {
            return (
              n(this.red, 'redIAdd works only with red numbers'),
              this.red.iadd(this, t)
            );
          }),
          (o.prototype.redSub = function (t) {
            return (
              n(this.red, 'redSub works only with red numbers'),
              this.red.sub(this, t)
            );
          }),
          (o.prototype.redISub = function (t) {
            return (
              n(this.red, 'redISub works only with red numbers'),
              this.red.isub(this, t)
            );
          }),
          (o.prototype.redShl = function (t) {
            return (
              n(this.red, 'redShl works only with red numbers'),
              this.red.shl(this, t)
            );
          }),
          (o.prototype.redMul = function (t) {
            return (
              n(this.red, 'redMul works only with red numbers'),
              this.red._verify2(this, t),
              this.red.mul(this, t)
            );
          }),
          (o.prototype.redIMul = function (t) {
            return (
              n(this.red, 'redMul works only with red numbers'),
              this.red._verify2(this, t),
              this.red.imul(this, t)
            );
          }),
          (o.prototype.redSqr = function () {
            return (
              n(this.red, 'redSqr works only with red numbers'),
              this.red._verify1(this),
              this.red.sqr(this)
            );
          }),
          (o.prototype.redISqr = function () {
            return (
              n(this.red, 'redISqr works only with red numbers'),
              this.red._verify1(this),
              this.red.isqr(this)
            );
          }),
          (o.prototype.redSqrt = function () {
            return (
              n(this.red, 'redSqrt works only with red numbers'),
              this.red._verify1(this),
              this.red.sqrt(this)
            );
          }),
          (o.prototype.redInvm = function () {
            return (
              n(this.red, 'redInvm works only with red numbers'),
              this.red._verify1(this),
              this.red.invm(this)
            );
          }),
          (o.prototype.redNeg = function () {
            return (
              n(this.red, 'redNeg works only with red numbers'),
              this.red._verify1(this),
              this.red.neg(this)
            );
          }),
          (o.prototype.redPow = function (t) {
            return (
              n(this.red && !t.red, 'redPow(normalNum)'),
              this.red._verify1(this),
              this.red.pow(this, t)
            );
          });
        var v = { k256: null, p224: null, p192: null, p25519: null };
        function b(t, e) {
          (this.name = t),
            (this.p = new o(e, 16)),
            (this.n = this.p.bitLength()),
            (this.k = new o(1).iushln(this.n).isub(this.p)),
            (this.tmp = this._tmp());
        }
        function E() {
          b.call(
            this,
            'k256',
            'ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f'
          );
        }
        function M() {
          b.call(
            this,
            'p224',
            'ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001'
          );
        }
        function _() {
          b.call(
            this,
            'p192',
            'ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff'
          );
        }
        function S() {
          b.call(
            this,
            '25519',
            '7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed'
          );
        }
        function A(t) {
          if ('string' == typeof t) {
            var e = o._prime(t);
            (this.m = e.p), (this.prime = e);
          } else
            n(t.gtn(1), 'modulus must be greater than 1'),
              (this.m = t),
              (this.prime = null);
        }
        function x(t) {
          A.call(this, t),
            (this.shift = this.m.bitLength()),
            this.shift % 26 != 0 && (this.shift += 26 - (this.shift % 26)),
            (this.r = new o(1).iushln(this.shift)),
            (this.r2 = this.imod(this.r.sqr())),
            (this.rinv = this.r._invmp(this.m)),
            (this.minv = this.rinv.mul(this.r).isubn(1).div(this.m)),
            (this.minv = this.minv.umod(this.r)),
            (this.minv = this.r.sub(this.minv));
        }
        (b.prototype._tmp = function () {
          var t = new o(null);
          return (t.words = Array(Math.ceil(this.n / 13))), t;
        }),
          (b.prototype.ireduce = function (t) {
            var e,
              r = t;
            do
              this.split(r, this.tmp),
                (e = (r = (r = this.imulK(r)).iadd(this.tmp)).bitLength());
            while (e > this.n);
            var n = e < this.n ? -1 : r.ucmp(this.p);
            return (
              0 === n
                ? ((r.words[0] = 0), (r.length = 1))
                : n > 0
                ? r.isub(this.p)
                : void 0 !== r.strip
                ? r.strip()
                : r._strip(),
              r
            );
          }),
          (b.prototype.split = function (t, e) {
            t.iushrn(this.n, 0, e);
          }),
          (b.prototype.imulK = function (t) {
            return t.imul(this.k);
          }),
          i(E, b),
          (E.prototype.split = function (t, e) {
            for (var r = Math.min(t.length, 9), n = 0; n < r; n++)
              e.words[n] = t.words[n];
            if (((e.length = r), t.length <= 9)) {
              (t.words[0] = 0), (t.length = 1);
              return;
            }
            var i = t.words[9];
            for (n = 10, e.words[e.length++] = 4194303 & i; n < t.length; n++) {
              var o = 0 | t.words[n];
              (t.words[n - 10] = ((4194303 & o) << 4) | (i >>> 22)), (i = o);
            }
            (i >>>= 22),
              (t.words[n - 10] = i),
              0 === i && t.length > 10 ? (t.length -= 10) : (t.length -= 9);
          }),
          (E.prototype.imulK = function (t) {
            (t.words[t.length] = 0),
              (t.words[t.length + 1] = 0),
              (t.length += 2);
            for (var e = 0, r = 0; r < t.length; r++) {
              var n = 0 | t.words[r];
              (e += 977 * n),
                (t.words[r] = 67108863 & e),
                (e = 64 * n + ((e / 67108864) | 0));
            }
            return (
              0 === t.words[t.length - 1] &&
                (t.length--, 0 === t.words[t.length - 1] && t.length--),
              t
            );
          }),
          i(M, b),
          i(_, b),
          i(S, b),
          (S.prototype.imulK = function (t) {
            for (var e = 0, r = 0; r < t.length; r++) {
              var n = (0 | t.words[r]) * 19 + e,
                i = 67108863 & n;
              (n >>>= 26), (t.words[r] = i), (e = n);
            }
            return 0 !== e && (t.words[t.length++] = e), t;
          }),
          (o._prime = function (t) {
            var e;
            if (v[t]) return v[t];
            if ('k256' === t) e = new E();
            else if ('p224' === t) e = new M();
            else if ('p192' === t) e = new _();
            else if ('p25519' === t) e = new S();
            else throw Error('Unknown prime ' + t);
            return (v[t] = e), e;
          }),
          (A.prototype._verify1 = function (t) {
            n(0 === t.negative, 'red works only with positives'),
              n(t.red, 'red works only with red numbers');
          }),
          (A.prototype._verify2 = function (t, e) {
            n((t.negative | e.negative) == 0, 'red works only with positives'),
              n(t.red && t.red === e.red, 'red works only with red numbers');
          }),
          (A.prototype.imod = function (t) {
            return this.prime
              ? this.prime.ireduce(t)._forceRed(this)
              : (l(t, t.umod(this.m)._forceRed(this)), t);
          }),
          (A.prototype.neg = function (t) {
            return t.isZero() ? t.clone() : this.m.sub(t)._forceRed(this);
          }),
          (A.prototype.add = function (t, e) {
            this._verify2(t, e);
            var r = t.add(e);
            return r.cmp(this.m) >= 0 && r.isub(this.m), r._forceRed(this);
          }),
          (A.prototype.iadd = function (t, e) {
            this._verify2(t, e);
            var r = t.iadd(e);
            return r.cmp(this.m) >= 0 && r.isub(this.m), r;
          }),
          (A.prototype.sub = function (t, e) {
            this._verify2(t, e);
            var r = t.sub(e);
            return 0 > r.cmpn(0) && r.iadd(this.m), r._forceRed(this);
          }),
          (A.prototype.isub = function (t, e) {
            this._verify2(t, e);
            var r = t.isub(e);
            return 0 > r.cmpn(0) && r.iadd(this.m), r;
          }),
          (A.prototype.shl = function (t, e) {
            return this._verify1(t), this.imod(t.ushln(e));
          }),
          (A.prototype.imul = function (t, e) {
            return this._verify2(t, e), this.imod(t.imul(e));
          }),
          (A.prototype.mul = function (t, e) {
            return this._verify2(t, e), this.imod(t.mul(e));
          }),
          (A.prototype.isqr = function (t) {
            return this.imul(t, t.clone());
          }),
          (A.prototype.sqr = function (t) {
            return this.mul(t, t);
          }),
          (A.prototype.sqrt = function (t) {
            if (t.isZero()) return t.clone();
            var e = this.m.andln(3);
            if ((n(e % 2 == 1), 3 === e)) {
              var r = this.m.add(new o(1)).iushrn(2);
              return this.pow(t, r);
            }
            for (
              var i = this.m.subn(1), s = 0;
              !i.isZero() && 0 === i.andln(1);

            )
              s++, i.iushrn(1);
            n(!i.isZero());
            var a = new o(1).toRed(this),
              u = a.redNeg(),
              l = this.m.subn(1).iushrn(1),
              h = this.m.bitLength();
            for (
              h = new o(2 * h * h).toRed(this);
              0 !== this.pow(h, l).cmp(u);

            )
              h.redIAdd(u);
            for (
              var c = this.pow(h, i),
                f = this.pow(t, i.addn(1).iushrn(1)),
                d = this.pow(t, i),
                p = s;
              0 !== d.cmp(a);

            ) {
              for (var y = d, m = 0; 0 !== y.cmp(a); m++) y = y.redSqr();
              n(m < p);
              var g = this.pow(c, new o(1).iushln(p - m - 1));
              (f = f.redMul(g)), (c = g.redSqr()), (d = d.redMul(c)), (p = m);
            }
            return f;
          }),
          (A.prototype.invm = function (t) {
            var e = t._invmp(this.m);
            return 0 !== e.negative
              ? ((e.negative = 0), this.imod(e).redNeg())
              : this.imod(e);
          }),
          (A.prototype.pow = function (t, e) {
            if (e.isZero()) return new o(1).toRed(this);
            if (0 === e.cmpn(1)) return t.clone();
            var r = Array(16);
            (r[0] = new o(1).toRed(this)), (r[1] = t);
            for (var n = 2; n < r.length; n++) r[n] = this.mul(r[n - 1], t);
            var i = r[0],
              s = 0,
              a = 0,
              u = e.bitLength() % 26;
            for (0 === u && (u = 26), n = e.length - 1; n >= 0; n--) {
              for (var l = e.words[n], h = u - 1; h >= 0; h--) {
                var c = (l >> h) & 1;
                if ((i !== r[0] && (i = this.sqr(i)), 0 === c && 0 === s)) {
                  a = 0;
                  continue;
                }
                (s <<= 1),
                  (s |= c),
                  (4 == ++a || (0 === n && 0 === h)) &&
                    ((i = this.mul(i, r[s])), (a = 0), (s = 0));
              }
              u = 26;
            }
            return i;
          }),
          (A.prototype.convertTo = function (t) {
            var e = t.umod(this.m);
            return e === t ? e.clone() : e;
          }),
          (A.prototype.convertFrom = function (t) {
            var e = t.clone();
            return (e.red = null), e;
          }),
          (o.mont = function (t) {
            return new x(t);
          }),
          i(x, A),
          (x.prototype.convertTo = function (t) {
            return this.imod(t.ushln(this.shift));
          }),
          (x.prototype.convertFrom = function (t) {
            var e = this.imod(t.mul(this.rinv));
            return (e.red = null), e;
          }),
          (x.prototype.imul = function (t, e) {
            if (t.isZero() || e.isZero())
              return (t.words[0] = 0), (t.length = 1), t;
            var r = t.imul(e),
              n = r
                .maskn(this.shift)
                .mul(this.minv)
                .imaskn(this.shift)
                .mul(this.m),
              i = r.isub(n).iushrn(this.shift),
              o = i;
            return (
              i.cmp(this.m) >= 0
                ? (o = i.isub(this.m))
                : 0 > i.cmpn(0) && (o = i.iadd(this.m)),
              o._forceRed(this)
            );
          }),
          (x.prototype.mul = function (t, e) {
            if (t.isZero() || e.isZero()) return new o(0)._forceRed(this);
            var r = t.mul(e),
              n = r
                .maskn(this.shift)
                .mul(this.minv)
                .imaskn(this.shift)
                .mul(this.m),
              i = r.isub(n).iushrn(this.shift),
              s = i;
            return (
              i.cmp(this.m) >= 0
                ? (s = i.isub(this.m))
                : 0 > i.cmpn(0) && (s = i.iadd(this.m)),
              s._forceRed(this)
            );
          }),
          (x.prototype.invm = function (t) {
            return this.imod(t._invmp(this.m).mul(this.r2))._forceRed(this);
          });
      })((t = r.nmd(t)), this);
    },
    5810: function (t, e, r) {
      'use strict';
      var n = r(9109).Buffer,
        i =
          (this && this.__createBinding) ||
          (Object.create
            ? function (t, e, r, n) {
                void 0 === n && (n = r),
                  Object.defineProperty(t, n, {
                    enumerable: !0,
                    get: function () {
                      return e[r];
                    },
                  });
              }
            : function (t, e, r, n) {
                void 0 === n && (n = r), (t[n] = e[r]);
              }),
        o =
          (this && this.__setModuleDefault) ||
          (Object.create
            ? function (t, e) {
                Object.defineProperty(t, 'default', {
                  enumerable: !0,
                  value: e,
                });
              }
            : function (t, e) {
                t.default = e;
              }),
        s =
          (this && this.__decorate) ||
          function (t, e, r, n) {
            var i,
              o = arguments.length,
              s =
                o < 3
                  ? e
                  : null === n
                  ? (n = Object.getOwnPropertyDescriptor(e, r))
                  : n;
            if (
              'object' == typeof Reflect &&
              'function' == typeof Reflect.decorate
            )
              s = Reflect.decorate(t, e, r, n);
            else
              for (var a = t.length - 1; a >= 0; a--)
                (i = t[a]) &&
                  (s = (o < 3 ? i(s) : o > 3 ? i(e, r, s) : i(e, r)) || s);
            return o > 3 && s && Object.defineProperty(e, r, s), s;
          },
        a =
          (this && this.__importStar) ||
          function (t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
              for (var r in t)
                'default' !== r &&
                  Object.hasOwnProperty.call(t, r) &&
                  i(e, t, r);
            return o(e, t), e;
          },
        u =
          (this && this.__importDefault) ||
          function (t) {
            return t && t.__esModule ? t : { default: t };
          };
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.deserializeUnchecked =
          e.deserialize =
          e.serialize =
          e.BinaryReader =
          e.BinaryWriter =
          e.BorshError =
          e.baseDecode =
          e.baseEncode =
            void 0);
      let l = u(r(8171)),
        h = u(r(5824)),
        c = a(r(7139)),
        f = new (
          'function' != typeof TextDecoder ? c.TextDecoder : TextDecoder
        )('utf-8', { fatal: !0 });
      (e.baseEncode = function (t) {
        return (
          'string' == typeof t && (t = n.from(t, 'utf8')),
          h.default.encode(n.from(t))
        );
      }),
        (e.baseDecode = function (t) {
          return n.from(h.default.decode(t));
        });
      class d extends Error {
        constructor(t) {
          super(t), (this.fieldPath = []), (this.originalMessage = t);
        }
        addToFieldPath(t) {
          this.fieldPath.splice(0, 0, t),
            (this.message =
              this.originalMessage + ': ' + this.fieldPath.join('.'));
        }
      }
      e.BorshError = d;
      class p {
        constructor() {
          (this.buf = n.alloc(1024)), (this.length = 0);
        }
        maybeResize() {
          this.buf.length < 16 + this.length &&
            (this.buf = n.concat([this.buf, n.alloc(1024)]));
        }
        writeU8(t) {
          this.maybeResize(),
            this.buf.writeUInt8(t, this.length),
            (this.length += 1);
        }
        writeU16(t) {
          this.maybeResize(),
            this.buf.writeUInt16LE(t, this.length),
            (this.length += 2);
        }
        writeU32(t) {
          this.maybeResize(),
            this.buf.writeUInt32LE(t, this.length),
            (this.length += 4);
        }
        writeU64(t) {
          this.maybeResize(),
            this.writeBuffer(n.from(new l.default(t).toArray('le', 8)));
        }
        writeU128(t) {
          this.maybeResize(),
            this.writeBuffer(n.from(new l.default(t).toArray('le', 16)));
        }
        writeU256(t) {
          this.maybeResize(),
            this.writeBuffer(n.from(new l.default(t).toArray('le', 32)));
        }
        writeU512(t) {
          this.maybeResize(),
            this.writeBuffer(n.from(new l.default(t).toArray('le', 64)));
        }
        writeBuffer(t) {
          (this.buf = n.concat([
            n.from(this.buf.subarray(0, this.length)),
            t,
            n.alloc(1024),
          ])),
            (this.length += t.length);
        }
        writeString(t) {
          this.maybeResize();
          let e = n.from(t, 'utf8');
          this.writeU32(e.length), this.writeBuffer(e);
        }
        writeFixedArray(t) {
          this.writeBuffer(n.from(t));
        }
        writeArray(t, e) {
          for (let r of (this.maybeResize(), this.writeU32(t.length), t))
            this.maybeResize(), e(r);
        }
        toArray() {
          return this.buf.subarray(0, this.length);
        }
      }
      function y(t, e, r) {
        let n = r.value;
        r.value = function (...t) {
          try {
            return n.apply(this, t);
          } catch (t) {
            if (
              t instanceof RangeError &&
              ['ERR_BUFFER_OUT_OF_BOUNDS', 'ERR_OUT_OF_RANGE'].indexOf(
                t.code
              ) >= 0
            )
              throw new d('Reached the end of buffer when deserializing');
            throw t;
          }
        };
      }
      e.BinaryWriter = p;
      class m {
        constructor(t) {
          (this.buf = t), (this.offset = 0);
        }
        readU8() {
          let t = this.buf.readUInt8(this.offset);
          return (this.offset += 1), t;
        }
        readU16() {
          let t = this.buf.readUInt16LE(this.offset);
          return (this.offset += 2), t;
        }
        readU32() {
          let t = this.buf.readUInt32LE(this.offset);
          return (this.offset += 4), t;
        }
        readU64() {
          let t = this.readBuffer(8);
          return new l.default(t, 'le');
        }
        readU128() {
          let t = this.readBuffer(16);
          return new l.default(t, 'le');
        }
        readU256() {
          let t = this.readBuffer(32);
          return new l.default(t, 'le');
        }
        readU512() {
          let t = this.readBuffer(64);
          return new l.default(t, 'le');
        }
        readBuffer(t) {
          if (this.offset + t > this.buf.length)
            throw new d(`Expected buffer length ${t} isn't within bounds`);
          let e = this.buf.slice(this.offset, this.offset + t);
          return (this.offset += t), e;
        }
        readString() {
          let t = this.readU32(),
            e = this.readBuffer(t);
          try {
            return f.decode(e);
          } catch (t) {
            throw new d(`Error decoding UTF-8 string: ${t}`);
          }
        }
        readFixedArray(t) {
          return new Uint8Array(this.readBuffer(t));
        }
        readArray(t) {
          let e = this.readU32(),
            r = [];
          for (let n = 0; n < e; ++n) r.push(t());
          return r;
        }
      }
      function g(t) {
        return t.charAt(0).toUpperCase() + t.slice(1);
      }
      function w(t, e, r, n, i) {
        try {
          if ('string' == typeof n) i[`write${g(n)}`](r);
          else if (n instanceof Array) {
            if ('number' == typeof n[0]) {
              if (r.length !== n[0])
                throw new d(
                  `Expecting byte array of length ${n[0]}, but got ${r.length} bytes`
                );
              i.writeFixedArray(r);
            } else if (2 === n.length && 'number' == typeof n[1]) {
              if (r.length !== n[1])
                throw new d(
                  `Expecting byte array of length ${n[1]}, but got ${r.length} bytes`
                );
              for (let e = 0; e < n[1]; e++) w(t, null, r[e], n[0], i);
            } else
              i.writeArray(r, (r) => {
                w(t, e, r, n[0], i);
              });
          } else if (void 0 !== n.kind)
            switch (n.kind) {
              case 'option':
                null == r
                  ? i.writeU8(0)
                  : (i.writeU8(1), w(t, e, r, n.type, i));
                break;
              case 'map':
                i.writeU32(r.size),
                  r.forEach((r, o) => {
                    w(t, e, o, n.key, i), w(t, e, r, n.value, i);
                  });
                break;
              default:
                throw new d(`FieldType ${n} unrecognized`);
            }
          else v(t, r, i);
        } catch (t) {
          throw (t instanceof d && t.addToFieldPath(e), t);
        }
      }
      function v(t, e, r) {
        if ('function' == typeof e.borshSerialize) {
          e.borshSerialize(r);
          return;
        }
        let n = t.get(e.constructor);
        if (!n) throw new d(`Class ${e.constructor.name} is missing in schema`);
        if ('struct' === n.kind)
          n.fields.map(([n, i]) => {
            w(t, n, e[n], i, r);
          });
        else if ('enum' === n.kind) {
          let i = e[n.field];
          for (let o = 0; o < n.values.length; ++o) {
            let [s, a] = n.values[o];
            if (s === i) {
              r.writeU8(o), w(t, s, e[s], a, r);
              break;
            }
          }
        } else
          throw new d(
            `Unexpected schema kind: ${n.kind} for ${e.constructor.name}`
          );
      }
      function b(t, e, r, n) {
        try {
          if ('string' == typeof r) return n[`read${g(r)}`]();
          if (r instanceof Array) {
            if ('number' == typeof r[0]) return n.readFixedArray(r[0]);
            if ('number' != typeof r[1])
              return n.readArray(() => b(t, e, r[0], n));
            {
              let e = [];
              for (let i = 0; i < r[1]; i++) e.push(b(t, null, r[0], n));
              return e;
            }
          }
          if ('option' === r.kind) {
            if (n.readU8()) return b(t, e, r.type, n);
            return;
          }
          if ('map' === r.kind) {
            let i = new Map(),
              o = n.readU32();
            for (let s = 0; s < o; s++) {
              let o = b(t, e, r.key, n),
                s = b(t, e, r.value, n);
              i.set(o, s);
            }
            return i;
          }
          return E(t, r, n);
        } catch (t) {
          throw (t instanceof d && t.addToFieldPath(e), t);
        }
      }
      function E(t, e, r) {
        if ('function' == typeof e.borshDeserialize)
          return e.borshDeserialize(r);
        let n = t.get(e);
        if (!n) throw new d(`Class ${e.name} is missing in schema`);
        if ('struct' === n.kind) {
          let n = {};
          for (let [i, o] of t.get(e).fields) n[i] = b(t, i, o, r);
          return new e(n);
        }
        if ('enum' === n.kind) {
          let i = r.readU8();
          if (i >= n.values.length)
            throw new d(`Enum index: ${i} is out of range`);
          let [o, s] = n.values[i],
            a = b(t, o, s, r);
          return new e({ [o]: a });
        }
        throw new d(
          `Unexpected schema kind: ${n.kind} for ${e.constructor.name}`
        );
      }
      s([y], m.prototype, 'readU8', null),
        s([y], m.prototype, 'readU16', null),
        s([y], m.prototype, 'readU32', null),
        s([y], m.prototype, 'readU64', null),
        s([y], m.prototype, 'readU128', null),
        s([y], m.prototype, 'readU256', null),
        s([y], m.prototype, 'readU512', null),
        s([y], m.prototype, 'readString', null),
        s([y], m.prototype, 'readFixedArray', null),
        s([y], m.prototype, 'readArray', null),
        (e.BinaryReader = m),
        (e.serialize = function (t, e, r = p) {
          let n = new r();
          return v(t, e, n), n.toArray();
        }),
        (e.deserialize = function (t, e, r, n = m) {
          let i = new n(r),
            o = E(t, e, i);
          if (i.offset < r.length)
            throw new d(
              `Unexpected ${r.length - i.offset} bytes after deserialized data`
            );
          return o;
        }),
        (e.deserializeUnchecked = function (t, e, r, n = m) {
          return E(t, e, new n(r));
        });
    },
    5824: function (t, e, r) {
      var n = r(5197);
      t.exports = n(
        '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz'
      );
    },
    8672: function (t, e, r) {
      let n = r(2768);
      t.exports = n(
        '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz'
      );
    },
    2768: function (t) {
      'use strict';
      t.exports = function (t) {
        if (t.length >= 255) throw TypeError('Alphabet too long');
        for (var e = new Uint8Array(256), r = 0; r < e.length; r++) e[r] = 255;
        for (var n = 0; n < t.length; n++) {
          var i = t.charAt(n),
            o = i.charCodeAt(0);
          if (255 !== e[o]) throw TypeError(i + ' is ambiguous');
          e[o] = n;
        }
        var s = t.length,
          a = t.charAt(0),
          u = Math.log(s) / Math.log(256),
          l = Math.log(256) / Math.log(s);
        function h(t) {
          if ('string' != typeof t) throw TypeError('Expected String');
          if (0 === t.length) return new Uint8Array();
          for (var r = 0, n = 0, i = 0; t[r] === a; ) n++, r++;
          for (
            var o = ((t.length - r) * u + 1) >>> 0, l = new Uint8Array(o);
            t[r];

          ) {
            var h = e[t.charCodeAt(r)];
            if (255 === h) return;
            for (var c = 0, f = o - 1; (0 !== h || c < i) && -1 !== f; f--, c++)
              (h += (s * l[f]) >>> 0),
                (l[f] = h % 256 >>> 0),
                (h = (h / 256) >>> 0);
            if (0 !== h) throw Error('Non-zero carry');
            (i = c), r++;
          }
          for (var d = o - i; d !== o && 0 === l[d]; ) d++;
          for (var p = new Uint8Array(n + (o - d)), y = n; d !== o; )
            p[y++] = l[d++];
          return p;
        }
        return {
          encode: function (e) {
            if (
              (e instanceof Uint8Array ||
                (ArrayBuffer.isView(e)
                  ? (e = new Uint8Array(e.buffer, e.byteOffset, e.byteLength))
                  : Array.isArray(e) && (e = Uint8Array.from(e))),
              !(e instanceof Uint8Array))
            )
              throw TypeError('Expected Uint8Array');
            if (0 === e.length) return '';
            for (var r = 0, n = 0, i = 0, o = e.length; i !== o && 0 === e[i]; )
              i++, r++;
            for (
              var u = ((o - i) * l + 1) >>> 0, h = new Uint8Array(u);
              i !== o;

            ) {
              for (
                var c = e[i], f = 0, d = u - 1;
                (0 !== c || f < n) && -1 !== d;
                d--, f++
              )
                (c += (256 * h[d]) >>> 0),
                  (h[d] = c % s >>> 0),
                  (c = (c / s) >>> 0);
              if (0 !== c) throw Error('Non-zero carry');
              (n = f), i++;
            }
            for (var p = u - n; p !== u && 0 === h[p]; ) p++;
            for (var y = a.repeat(r); p < u; ++p) y += t.charAt(h[p]);
            return y;
          },
          decodeUnsafe: h,
          decode: function (t) {
            var e = h(t);
            if (e) return e;
            throw Error('Non-base' + s + ' character');
          },
        };
      };
    },
    9109: function (t, e, r) {
      'use strict';
      /*!
       * The buffer module from node.js, for the browser.
       *
       * @author   Feross Aboukhadijeh <https://feross.org>
       * @license  MIT
       */ let n = r(8738),
        i = r(6868),
        o =
          'function' == typeof Symbol && 'function' == typeof Symbol.for
            ? Symbol.for('nodejs.util.inspect.custom')
            : null;
      function s(t) {
        if (t > 2147483647)
          throw RangeError(
            'The value "' + t + '" is invalid for option "size"'
          );
        let e = new Uint8Array(t);
        return Object.setPrototypeOf(e, a.prototype), e;
      }
      function a(t, e, r) {
        if ('number' == typeof t) {
          if ('string' == typeof e)
            throw TypeError(
              'The "string" argument must be of type string. Received type number'
            );
          return h(t);
        }
        return u(t, e, r);
      }
      function u(t, e, r) {
        if ('string' == typeof t)
          return (function (t, e) {
            if (
              (('string' != typeof e || '' === e) && (e = 'utf8'),
              !a.isEncoding(e))
            )
              throw TypeError('Unknown encoding: ' + e);
            let r = 0 | p(t, e),
              n = s(r),
              i = n.write(t, e);
            return i !== r && (n = n.slice(0, i)), n;
          })(t, e);
        if (ArrayBuffer.isView(t))
          return (function (t) {
            if (k(t, Uint8Array)) {
              let e = new Uint8Array(t);
              return f(e.buffer, e.byteOffset, e.byteLength);
            }
            return c(t);
          })(t);
        if (null == t)
          throw TypeError(
            'The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type ' +
              typeof t
          );
        if (
          k(t, ArrayBuffer) ||
          (t && k(t.buffer, ArrayBuffer)) ||
          ('undefined' != typeof SharedArrayBuffer &&
            (k(t, SharedArrayBuffer) || (t && k(t.buffer, SharedArrayBuffer))))
        )
          return f(t, e, r);
        if ('number' == typeof t)
          throw TypeError(
            'The "value" argument must not be of type number. Received type number'
          );
        let n = t.valueOf && t.valueOf();
        if (null != n && n !== t) return a.from(n, e, r);
        let i = (function (t) {
          var e;
          if (a.isBuffer(t)) {
            let e = 0 | d(t.length),
              r = s(e);
            return 0 === r.length || t.copy(r, 0, 0, e), r;
          }
          return void 0 !== t.length
            ? 'number' != typeof t.length || (e = t.length) != e
              ? s(0)
              : c(t)
            : 'Buffer' === t.type && Array.isArray(t.data)
            ? c(t.data)
            : void 0;
        })(t);
        if (i) return i;
        if (
          'undefined' != typeof Symbol &&
          null != Symbol.toPrimitive &&
          'function' == typeof t[Symbol.toPrimitive]
        )
          return a.from(t[Symbol.toPrimitive]('string'), e, r);
        throw TypeError(
          'The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type ' +
            typeof t
        );
      }
      function l(t) {
        if ('number' != typeof t)
          throw TypeError('"size" argument must be of type number');
        if (t < 0)
          throw RangeError(
            'The value "' + t + '" is invalid for option "size"'
          );
      }
      function h(t) {
        return l(t), s(t < 0 ? 0 : 0 | d(t));
      }
      function c(t) {
        let e = t.length < 0 ? 0 : 0 | d(t.length),
          r = s(e);
        for (let n = 0; n < e; n += 1) r[n] = 255 & t[n];
        return r;
      }
      function f(t, e, r) {
        let n;
        if (e < 0 || t.byteLength < e)
          throw RangeError('"offset" is outside of buffer bounds');
        if (t.byteLength < e + (r || 0))
          throw RangeError('"length" is outside of buffer bounds');
        return (
          Object.setPrototypeOf(
            (n =
              void 0 === e && void 0 === r
                ? new Uint8Array(t)
                : void 0 === r
                ? new Uint8Array(t, e)
                : new Uint8Array(t, e, r)),
            a.prototype
          ),
          n
        );
      }
      function d(t) {
        if (t >= 2147483647)
          throw RangeError(
            'Attempt to allocate Buffer larger than maximum size: 0x7fffffff bytes'
          );
        return 0 | t;
      }
      function p(t, e) {
        if (a.isBuffer(t)) return t.length;
        if (ArrayBuffer.isView(t) || k(t, ArrayBuffer)) return t.byteLength;
        if ('string' != typeof t)
          throw TypeError(
            'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' +
              typeof t
          );
        let r = t.length,
          n = arguments.length > 2 && !0 === arguments[2];
        if (!n && 0 === r) return 0;
        let i = !1;
        for (;;)
          switch (e) {
            case 'ascii':
            case 'latin1':
            case 'binary':
              return r;
            case 'utf8':
            case 'utf-8':
              return N(t).length;
            case 'ucs2':
            case 'ucs-2':
            case 'utf16le':
            case 'utf-16le':
              return 2 * r;
            case 'hex':
              return r >>> 1;
            case 'base64':
              return P(t).length;
            default:
              if (i) return n ? -1 : N(t).length;
              (e = ('' + e).toLowerCase()), (i = !0);
          }
      }
      function y(t, e, r) {
        let i = !1;
        if (
          ((void 0 === e || e < 0) && (e = 0),
          e > this.length ||
            ((void 0 === r || r > this.length) && (r = this.length),
            r <= 0 || (r >>>= 0) <= (e >>>= 0)))
        )
          return '';
        for (t || (t = 'utf8'); ; )
          switch (t) {
            case 'hex':
              return (function (t, e, r) {
                let n = t.length;
                (!e || e < 0) && (e = 0), (!r || r < 0 || r > n) && (r = n);
                let i = '';
                for (let n = e; n < r; ++n) i += j[t[n]];
                return i;
              })(this, e, r);
            case 'utf8':
            case 'utf-8':
              return v(this, e, r);
            case 'ascii':
              return (function (t, e, r) {
                let n = '';
                r = Math.min(t.length, r);
                for (let i = e; i < r; ++i)
                  n += String.fromCharCode(127 & t[i]);
                return n;
              })(this, e, r);
            case 'latin1':
            case 'binary':
              return (function (t, e, r) {
                let n = '';
                r = Math.min(t.length, r);
                for (let i = e; i < r; ++i) n += String.fromCharCode(t[i]);
                return n;
              })(this, e, r);
            case 'base64':
              var o, s;
              return (
                (o = e),
                (s = r),
                0 === o && s === this.length
                  ? n.fromByteArray(this)
                  : n.fromByteArray(this.slice(o, s))
              );
            case 'ucs2':
            case 'ucs-2':
            case 'utf16le':
            case 'utf-16le':
              return (function (t, e, r) {
                let n = t.slice(e, r),
                  i = '';
                for (let t = 0; t < n.length - 1; t += 2)
                  i += String.fromCharCode(n[t] + 256 * n[t + 1]);
                return i;
              })(this, e, r);
            default:
              if (i) throw TypeError('Unknown encoding: ' + t);
              (t = (t + '').toLowerCase()), (i = !0);
          }
      }
      function m(t, e, r) {
        let n = t[e];
        (t[e] = t[r]), (t[r] = n);
      }
      function g(t, e, r, n, i) {
        var o;
        if (0 === t.length) return -1;
        if (
          ('string' == typeof r
            ? ((n = r), (r = 0))
            : r > 2147483647
            ? (r = 2147483647)
            : r < -2147483648 && (r = -2147483648),
          (o = r = +r) != o && (r = i ? 0 : t.length - 1),
          r < 0 && (r = t.length + r),
          r >= t.length)
        ) {
          if (i) return -1;
          r = t.length - 1;
        } else if (r < 0) {
          if (!i) return -1;
          r = 0;
        }
        if (('string' == typeof e && (e = a.from(e, n)), a.isBuffer(e)))
          return 0 === e.length ? -1 : w(t, e, r, n, i);
        if ('number' == typeof e)
          return ((e &= 255), 'function' == typeof Uint8Array.prototype.indexOf)
            ? i
              ? Uint8Array.prototype.indexOf.call(t, e, r)
              : Uint8Array.prototype.lastIndexOf.call(t, e, r)
            : w(t, [e], r, n, i);
        throw TypeError('val must be string, number or Buffer');
      }
      function w(t, e, r, n, i) {
        let o,
          s = 1,
          a = t.length,
          u = e.length;
        if (
          void 0 !== n &&
          ('ucs2' === (n = String(n).toLowerCase()) ||
            'ucs-2' === n ||
            'utf16le' === n ||
            'utf-16le' === n)
        ) {
          if (t.length < 2 || e.length < 2) return -1;
          (s = 2), (a /= 2), (u /= 2), (r /= 2);
        }
        function l(t, e) {
          return 1 === s ? t[e] : t.readUInt16BE(e * s);
        }
        if (i) {
          let n = -1;
          for (o = r; o < a; o++)
            if (l(t, o) === l(e, -1 === n ? 0 : o - n)) {
              if ((-1 === n && (n = o), o - n + 1 === u)) return n * s;
            } else -1 !== n && (o -= o - n), (n = -1);
        } else
          for (r + u > a && (r = a - u), o = r; o >= 0; o--) {
            let r = !0;
            for (let n = 0; n < u; n++)
              if (l(t, o + n) !== l(e, n)) {
                r = !1;
                break;
              }
            if (r) return o;
          }
        return -1;
      }
      function v(t, e, r) {
        r = Math.min(t.length, r);
        let n = [],
          i = e;
        for (; i < r; ) {
          let e = t[i],
            o = null,
            s = e > 239 ? 4 : e > 223 ? 3 : e > 191 ? 2 : 1;
          if (i + s <= r) {
            let r, n, a, u;
            switch (s) {
              case 1:
                e < 128 && (o = e);
                break;
              case 2:
                (192 & (r = t[i + 1])) == 128 &&
                  (u = ((31 & e) << 6) | (63 & r)) > 127 &&
                  (o = u);
                break;
              case 3:
                (r = t[i + 1]),
                  (n = t[i + 2]),
                  (192 & r) == 128 &&
                    (192 & n) == 128 &&
                    (u = ((15 & e) << 12) | ((63 & r) << 6) | (63 & n)) >
                      2047 &&
                    (u < 55296 || u > 57343) &&
                    (o = u);
                break;
              case 4:
                (r = t[i + 1]),
                  (n = t[i + 2]),
                  (a = t[i + 3]),
                  (192 & r) == 128 &&
                    (192 & n) == 128 &&
                    (192 & a) == 128 &&
                    (u =
                      ((15 & e) << 18) |
                      ((63 & r) << 12) |
                      ((63 & n) << 6) |
                      (63 & a)) > 65535 &&
                    u < 1114112 &&
                    (o = u);
            }
          }
          null === o
            ? ((o = 65533), (s = 1))
            : o > 65535 &&
              ((o -= 65536),
              n.push(((o >>> 10) & 1023) | 55296),
              (o = 56320 | (1023 & o))),
            n.push(o),
            (i += s);
        }
        return (function (t) {
          let e = t.length;
          if (e <= 4096) return String.fromCharCode.apply(String, t);
          let r = '',
            n = 0;
          for (; n < e; )
            r += String.fromCharCode.apply(String, t.slice(n, (n += 4096)));
          return r;
        })(n);
      }
      function b(t, e, r) {
        if (t % 1 != 0 || t < 0) throw RangeError('offset is not uint');
        if (t + e > r)
          throw RangeError('Trying to access beyond buffer length');
      }
      function E(t, e, r, n, i, o) {
        if (!a.isBuffer(t))
          throw TypeError('"buffer" argument must be a Buffer instance');
        if (e > i || e < o)
          throw RangeError('"value" argument is out of bounds');
        if (r + n > t.length) throw RangeError('Index out of range');
      }
      function M(t, e, r, n, i) {
        B(e, n, i, t, r, 7);
        let o = Number(e & BigInt(4294967295));
        (t[r++] = o),
          (o >>= 8),
          (t[r++] = o),
          (o >>= 8),
          (t[r++] = o),
          (o >>= 8),
          (t[r++] = o);
        let s = Number((e >> BigInt(32)) & BigInt(4294967295));
        return (
          (t[r++] = s),
          (s >>= 8),
          (t[r++] = s),
          (s >>= 8),
          (t[r++] = s),
          (s >>= 8),
          (t[r++] = s),
          r
        );
      }
      function _(t, e, r, n, i) {
        B(e, n, i, t, r, 7);
        let o = Number(e & BigInt(4294967295));
        (t[r + 7] = o),
          (o >>= 8),
          (t[r + 6] = o),
          (o >>= 8),
          (t[r + 5] = o),
          (o >>= 8),
          (t[r + 4] = o);
        let s = Number((e >> BigInt(32)) & BigInt(4294967295));
        return (
          (t[r + 3] = s),
          (s >>= 8),
          (t[r + 2] = s),
          (s >>= 8),
          (t[r + 1] = s),
          (s >>= 8),
          (t[r] = s),
          r + 8
        );
      }
      function S(t, e, r, n, i, o) {
        if (r + n > t.length || r < 0) throw RangeError('Index out of range');
      }
      function A(t, e, r, n, o) {
        return (
          (e = +e),
          (r >>>= 0),
          o || S(t, e, r, 4, 34028234663852886e22, -34028234663852886e22),
          i.write(t, e, r, n, 23, 4),
          r + 4
        );
      }
      function x(t, e, r, n, o) {
        return (
          (e = +e),
          (r >>>= 0),
          o || S(t, e, r, 8, 17976931348623157e292, -17976931348623157e292),
          i.write(t, e, r, n, 52, 8),
          r + 8
        );
      }
      (e.Buffer = a),
        (e.SlowBuffer = function (t) {
          return +t != t && (t = 0), a.alloc(+t);
        }),
        (e.INSPECT_MAX_BYTES = 50),
        (e.kMaxLength = 2147483647),
        (a.TYPED_ARRAY_SUPPORT = (function () {
          try {
            let t = new Uint8Array(1),
              e = {
                foo: function () {
                  return 42;
                },
              };
            return (
              Object.setPrototypeOf(e, Uint8Array.prototype),
              Object.setPrototypeOf(t, e),
              42 === t.foo()
            );
          } catch (t) {
            return !1;
          }
        })()),
        a.TYPED_ARRAY_SUPPORT ||
          'undefined' == typeof console ||
          'function' != typeof console.error ||
          console.error(
            'This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.'
          ),
        Object.defineProperty(a.prototype, 'parent', {
          enumerable: !0,
          get: function () {
            if (a.isBuffer(this)) return this.buffer;
          },
        }),
        Object.defineProperty(a.prototype, 'offset', {
          enumerable: !0,
          get: function () {
            if (a.isBuffer(this)) return this.byteOffset;
          },
        }),
        (a.poolSize = 8192),
        (a.from = function (t, e, r) {
          return u(t, e, r);
        }),
        Object.setPrototypeOf(a.prototype, Uint8Array.prototype),
        Object.setPrototypeOf(a, Uint8Array),
        (a.alloc = function (t, e, r) {
          return (l(t), t <= 0)
            ? s(t)
            : void 0 !== e
            ? 'string' == typeof r
              ? s(t).fill(e, r)
              : s(t).fill(e)
            : s(t);
        }),
        (a.allocUnsafe = function (t) {
          return h(t);
        }),
        (a.allocUnsafeSlow = function (t) {
          return h(t);
        }),
        (a.isBuffer = function (t) {
          return null != t && !0 === t._isBuffer && t !== a.prototype;
        }),
        (a.compare = function (t, e) {
          if (
            (k(t, Uint8Array) && (t = a.from(t, t.offset, t.byteLength)),
            k(e, Uint8Array) && (e = a.from(e, e.offset, e.byteLength)),
            !a.isBuffer(t) || !a.isBuffer(e))
          )
            throw TypeError(
              'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
            );
          if (t === e) return 0;
          let r = t.length,
            n = e.length;
          for (let i = 0, o = Math.min(r, n); i < o; ++i)
            if (t[i] !== e[i]) {
              (r = t[i]), (n = e[i]);
              break;
            }
          return r < n ? -1 : n < r ? 1 : 0;
        }),
        (a.isEncoding = function (t) {
          switch (String(t).toLowerCase()) {
            case 'hex':
            case 'utf8':
            case 'utf-8':
            case 'ascii':
            case 'latin1':
            case 'binary':
            case 'base64':
            case 'ucs2':
            case 'ucs-2':
            case 'utf16le':
            case 'utf-16le':
              return !0;
            default:
              return !1;
          }
        }),
        (a.concat = function (t, e) {
          let r;
          if (!Array.isArray(t))
            throw TypeError('"list" argument must be an Array of Buffers');
          if (0 === t.length) return a.alloc(0);
          if (void 0 === e)
            for (r = 0, e = 0; r < t.length; ++r) e += t[r].length;
          let n = a.allocUnsafe(e),
            i = 0;
          for (r = 0; r < t.length; ++r) {
            let e = t[r];
            if (k(e, Uint8Array))
              i + e.length > n.length
                ? (a.isBuffer(e) || (e = a.from(e)), e.copy(n, i))
                : Uint8Array.prototype.set.call(n, e, i);
            else if (a.isBuffer(e)) e.copy(n, i);
            else throw TypeError('"list" argument must be an Array of Buffers');
            i += e.length;
          }
          return n;
        }),
        (a.byteLength = p),
        (a.prototype._isBuffer = !0),
        (a.prototype.swap16 = function () {
          let t = this.length;
          if (t % 2 != 0)
            throw RangeError('Buffer size must be a multiple of 16-bits');
          for (let e = 0; e < t; e += 2) m(this, e, e + 1);
          return this;
        }),
        (a.prototype.swap32 = function () {
          let t = this.length;
          if (t % 4 != 0)
            throw RangeError('Buffer size must be a multiple of 32-bits');
          for (let e = 0; e < t; e += 4)
            m(this, e, e + 3), m(this, e + 1, e + 2);
          return this;
        }),
        (a.prototype.swap64 = function () {
          let t = this.length;
          if (t % 8 != 0)
            throw RangeError('Buffer size must be a multiple of 64-bits');
          for (let e = 0; e < t; e += 8)
            m(this, e, e + 7),
              m(this, e + 1, e + 6),
              m(this, e + 2, e + 5),
              m(this, e + 3, e + 4);
          return this;
        }),
        (a.prototype.toString = function () {
          let t = this.length;
          return 0 === t
            ? ''
            : 0 == arguments.length
            ? v(this, 0, t)
            : y.apply(this, arguments);
        }),
        (a.prototype.toLocaleString = a.prototype.toString),
        (a.prototype.equals = function (t) {
          if (!a.isBuffer(t)) throw TypeError('Argument must be a Buffer');
          return this === t || 0 === a.compare(this, t);
        }),
        (a.prototype.inspect = function () {
          let t = '',
            r = e.INSPECT_MAX_BYTES;
          return (
            (t = this.toString('hex', 0, r)
              .replace(/(.{2})/g, '$1 ')
              .trim()),
            this.length > r && (t += ' ... '),
            '<Buffer ' + t + '>'
          );
        }),
        o && (a.prototype[o] = a.prototype.inspect),
        (a.prototype.compare = function (t, e, r, n, i) {
          if (
            (k(t, Uint8Array) && (t = a.from(t, t.offset, t.byteLength)),
            !a.isBuffer(t))
          )
            throw TypeError(
              'The "target" argument must be one of type Buffer or Uint8Array. Received type ' +
                typeof t
            );
          if (
            (void 0 === e && (e = 0),
            void 0 === r && (r = t ? t.length : 0),
            void 0 === n && (n = 0),
            void 0 === i && (i = this.length),
            e < 0 || r > t.length || n < 0 || i > this.length)
          )
            throw RangeError('out of range index');
          if (n >= i && e >= r) return 0;
          if (n >= i) return -1;
          if (e >= r) return 1;
          if (((e >>>= 0), (r >>>= 0), (n >>>= 0), (i >>>= 0), this === t))
            return 0;
          let o = i - n,
            s = r - e,
            u = Math.min(o, s),
            l = this.slice(n, i),
            h = t.slice(e, r);
          for (let t = 0; t < u; ++t)
            if (l[t] !== h[t]) {
              (o = l[t]), (s = h[t]);
              break;
            }
          return o < s ? -1 : s < o ? 1 : 0;
        }),
        (a.prototype.includes = function (t, e, r) {
          return -1 !== this.indexOf(t, e, r);
        }),
        (a.prototype.indexOf = function (t, e, r) {
          return g(this, t, e, r, !0);
        }),
        (a.prototype.lastIndexOf = function (t, e, r) {
          return g(this, t, e, r, !1);
        }),
        (a.prototype.write = function (t, e, r, n) {
          var i, o, s, a, u, l, h, c;
          if (void 0 === e) (n = 'utf8'), (r = this.length), (e = 0);
          else if (void 0 === r && 'string' == typeof e)
            (n = e), (r = this.length), (e = 0);
          else if (isFinite(e))
            (e >>>= 0),
              isFinite(r)
                ? ((r >>>= 0), void 0 === n && (n = 'utf8'))
                : ((n = r), (r = void 0));
          else
            throw Error(
              'Buffer.write(string, encoding, offset[, length]) is no longer supported'
            );
          let f = this.length - e;
          if (
            ((void 0 === r || r > f) && (r = f),
            (t.length > 0 && (r < 0 || e < 0)) || e > this.length)
          )
            throw RangeError('Attempt to write outside buffer bounds');
          n || (n = 'utf8');
          let d = !1;
          for (;;)
            switch (n) {
              case 'hex':
                return (function (t, e, r, n) {
                  let i;
                  r = Number(r) || 0;
                  let o = t.length - r;
                  n ? (n = Number(n)) > o && (n = o) : (n = o);
                  let s = e.length;
                  for (n > s / 2 && (n = s / 2), i = 0; i < n; ++i) {
                    let n = parseInt(e.substr(2 * i, 2), 16);
                    if (n != n) break;
                    t[r + i] = n;
                  }
                  return i;
                })(this, t, e, r);
              case 'utf8':
              case 'utf-8':
                return (i = e), (o = r), U(N(t, this.length - i), this, i, o);
              case 'ascii':
              case 'latin1':
              case 'binary':
                return (
                  (s = e),
                  (a = r),
                  U(
                    (function (t) {
                      let e = [];
                      for (let r = 0; r < t.length; ++r)
                        e.push(255 & t.charCodeAt(r));
                      return e;
                    })(t),
                    this,
                    s,
                    a
                  )
                );
              case 'base64':
                return (u = e), (l = r), U(P(t), this, u, l);
              case 'ucs2':
              case 'ucs-2':
              case 'utf16le':
              case 'utf-16le':
                return (
                  (h = e),
                  (c = r),
                  U(
                    (function (t, e) {
                      let r, n;
                      let i = [];
                      for (let o = 0; o < t.length && !((e -= 2) < 0); ++o)
                        (n = (r = t.charCodeAt(o)) >> 8),
                          i.push(r % 256),
                          i.push(n);
                      return i;
                    })(t, this.length - h),
                    this,
                    h,
                    c
                  )
                );
              default:
                if (d) throw TypeError('Unknown encoding: ' + n);
                (n = ('' + n).toLowerCase()), (d = !0);
            }
        }),
        (a.prototype.toJSON = function () {
          return {
            type: 'Buffer',
            data: Array.prototype.slice.call(this._arr || this, 0),
          };
        }),
        (a.prototype.slice = function (t, e) {
          let r = this.length;
          (t = ~~t),
            (e = void 0 === e ? r : ~~e),
            t < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r),
            e < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r),
            e < t && (e = t);
          let n = this.subarray(t, e);
          return Object.setPrototypeOf(n, a.prototype), n;
        }),
        (a.prototype.readUintLE = a.prototype.readUIntLE =
          function (t, e, r) {
            (t >>>= 0), (e >>>= 0), r || b(t, e, this.length);
            let n = this[t],
              i = 1,
              o = 0;
            for (; ++o < e && (i *= 256); ) n += this[t + o] * i;
            return n;
          }),
        (a.prototype.readUintBE = a.prototype.readUIntBE =
          function (t, e, r) {
            (t >>>= 0), (e >>>= 0), r || b(t, e, this.length);
            let n = this[t + --e],
              i = 1;
            for (; e > 0 && (i *= 256); ) n += this[t + --e] * i;
            return n;
          }),
        (a.prototype.readUint8 = a.prototype.readUInt8 =
          function (t, e) {
            return (t >>>= 0), e || b(t, 1, this.length), this[t];
          }),
        (a.prototype.readUint16LE = a.prototype.readUInt16LE =
          function (t, e) {
            return (
              (t >>>= 0),
              e || b(t, 2, this.length),
              this[t] | (this[t + 1] << 8)
            );
          }),
        (a.prototype.readUint16BE = a.prototype.readUInt16BE =
          function (t, e) {
            return (
              (t >>>= 0),
              e || b(t, 2, this.length),
              (this[t] << 8) | this[t + 1]
            );
          }),
        (a.prototype.readUint32LE = a.prototype.readUInt32LE =
          function (t, e) {
            return (
              (t >>>= 0),
              e || b(t, 4, this.length),
              (this[t] | (this[t + 1] << 8) | (this[t + 2] << 16)) +
                16777216 * this[t + 3]
            );
          }),
        (a.prototype.readUint32BE = a.prototype.readUInt32BE =
          function (t, e) {
            return (
              (t >>>= 0),
              e || b(t, 4, this.length),
              16777216 * this[t] +
                ((this[t + 1] << 16) | (this[t + 2] << 8) | this[t + 3])
            );
          }),
        (a.prototype.readBigUInt64LE = D(function (t) {
          C((t >>>= 0), 'offset');
          let e = this[t],
            r = this[t + 7];
          (void 0 === e || void 0 === r) && L(t, this.length - 8);
          let n =
              e + 256 * this[++t] + 65536 * this[++t] + 16777216 * this[++t],
            i = this[++t] + 256 * this[++t] + 65536 * this[++t] + 16777216 * r;
          return BigInt(n) + (BigInt(i) << BigInt(32));
        })),
        (a.prototype.readBigUInt64BE = D(function (t) {
          C((t >>>= 0), 'offset');
          let e = this[t],
            r = this[t + 7];
          (void 0 === e || void 0 === r) && L(t, this.length - 8);
          let n =
              16777216 * e + 65536 * this[++t] + 256 * this[++t] + this[++t],
            i = 16777216 * this[++t] + 65536 * this[++t] + 256 * this[++t] + r;
          return (BigInt(n) << BigInt(32)) + BigInt(i);
        })),
        (a.prototype.readIntLE = function (t, e, r) {
          (t >>>= 0), (e >>>= 0), r || b(t, e, this.length);
          let n = this[t],
            i = 1,
            o = 0;
          for (; ++o < e && (i *= 256); ) n += this[t + o] * i;
          return n >= (i *= 128) && (n -= Math.pow(2, 8 * e)), n;
        }),
        (a.prototype.readIntBE = function (t, e, r) {
          (t >>>= 0), (e >>>= 0), r || b(t, e, this.length);
          let n = e,
            i = 1,
            o = this[t + --n];
          for (; n > 0 && (i *= 256); ) o += this[t + --n] * i;
          return o >= (i *= 128) && (o -= Math.pow(2, 8 * e)), o;
        }),
        (a.prototype.readInt8 = function (t, e) {
          return ((t >>>= 0), e || b(t, 1, this.length), 128 & this[t])
            ? -((255 - this[t] + 1) * 1)
            : this[t];
        }),
        (a.prototype.readInt16LE = function (t, e) {
          (t >>>= 0), e || b(t, 2, this.length);
          let r = this[t] | (this[t + 1] << 8);
          return 32768 & r ? 4294901760 | r : r;
        }),
        (a.prototype.readInt16BE = function (t, e) {
          (t >>>= 0), e || b(t, 2, this.length);
          let r = this[t + 1] | (this[t] << 8);
          return 32768 & r ? 4294901760 | r : r;
        }),
        (a.prototype.readInt32LE = function (t, e) {
          return (
            (t >>>= 0),
            e || b(t, 4, this.length),
            this[t] |
              (this[t + 1] << 8) |
              (this[t + 2] << 16) |
              (this[t + 3] << 24)
          );
        }),
        (a.prototype.readInt32BE = function (t, e) {
          return (
            (t >>>= 0),
            e || b(t, 4, this.length),
            (this[t] << 24) |
              (this[t + 1] << 16) |
              (this[t + 2] << 8) |
              this[t + 3]
          );
        }),
        (a.prototype.readBigInt64LE = D(function (t) {
          C((t >>>= 0), 'offset');
          let e = this[t],
            r = this[t + 7];
          return (
            (void 0 === e || void 0 === r) && L(t, this.length - 8),
            (BigInt(
              this[t + 4] + 256 * this[t + 5] + 65536 * this[t + 6] + (r << 24)
            ) <<
              BigInt(32)) +
              BigInt(
                e + 256 * this[++t] + 65536 * this[++t] + 16777216 * this[++t]
              )
          );
        })),
        (a.prototype.readBigInt64BE = D(function (t) {
          C((t >>>= 0), 'offset');
          let e = this[t],
            r = this[t + 7];
          return (
            (void 0 === e || void 0 === r) && L(t, this.length - 8),
            (BigInt(
              (e << 24) + 65536 * this[++t] + 256 * this[++t] + this[++t]
            ) <<
              BigInt(32)) +
              BigInt(
                16777216 * this[++t] + 65536 * this[++t] + 256 * this[++t] + r
              )
          );
        })),
        (a.prototype.readFloatLE = function (t, e) {
          return (
            (t >>>= 0), e || b(t, 4, this.length), i.read(this, t, !0, 23, 4)
          );
        }),
        (a.prototype.readFloatBE = function (t, e) {
          return (
            (t >>>= 0), e || b(t, 4, this.length), i.read(this, t, !1, 23, 4)
          );
        }),
        (a.prototype.readDoubleLE = function (t, e) {
          return (
            (t >>>= 0), e || b(t, 8, this.length), i.read(this, t, !0, 52, 8)
          );
        }),
        (a.prototype.readDoubleBE = function (t, e) {
          return (
            (t >>>= 0), e || b(t, 8, this.length), i.read(this, t, !1, 52, 8)
          );
        }),
        (a.prototype.writeUintLE = a.prototype.writeUIntLE =
          function (t, e, r, n) {
            if (((t = +t), (e >>>= 0), (r >>>= 0), !n)) {
              let n = Math.pow(2, 8 * r) - 1;
              E(this, t, e, r, n, 0);
            }
            let i = 1,
              o = 0;
            for (this[e] = 255 & t; ++o < r && (i *= 256); )
              this[e + o] = (t / i) & 255;
            return e + r;
          }),
        (a.prototype.writeUintBE = a.prototype.writeUIntBE =
          function (t, e, r, n) {
            if (((t = +t), (e >>>= 0), (r >>>= 0), !n)) {
              let n = Math.pow(2, 8 * r) - 1;
              E(this, t, e, r, n, 0);
            }
            let i = r - 1,
              o = 1;
            for (this[e + i] = 255 & t; --i >= 0 && (o *= 256); )
              this[e + i] = (t / o) & 255;
            return e + r;
          }),
        (a.prototype.writeUint8 = a.prototype.writeUInt8 =
          function (t, e, r) {
            return (
              (t = +t),
              (e >>>= 0),
              r || E(this, t, e, 1, 255, 0),
              (this[e] = 255 & t),
              e + 1
            );
          }),
        (a.prototype.writeUint16LE = a.prototype.writeUInt16LE =
          function (t, e, r) {
            return (
              (t = +t),
              (e >>>= 0),
              r || E(this, t, e, 2, 65535, 0),
              (this[e] = 255 & t),
              (this[e + 1] = t >>> 8),
              e + 2
            );
          }),
        (a.prototype.writeUint16BE = a.prototype.writeUInt16BE =
          function (t, e, r) {
            return (
              (t = +t),
              (e >>>= 0),
              r || E(this, t, e, 2, 65535, 0),
              (this[e] = t >>> 8),
              (this[e + 1] = 255 & t),
              e + 2
            );
          }),
        (a.prototype.writeUint32LE = a.prototype.writeUInt32LE =
          function (t, e, r) {
            return (
              (t = +t),
              (e >>>= 0),
              r || E(this, t, e, 4, 4294967295, 0),
              (this[e + 3] = t >>> 24),
              (this[e + 2] = t >>> 16),
              (this[e + 1] = t >>> 8),
              (this[e] = 255 & t),
              e + 4
            );
          }),
        (a.prototype.writeUint32BE = a.prototype.writeUInt32BE =
          function (t, e, r) {
            return (
              (t = +t),
              (e >>>= 0),
              r || E(this, t, e, 4, 4294967295, 0),
              (this[e] = t >>> 24),
              (this[e + 1] = t >>> 16),
              (this[e + 2] = t >>> 8),
              (this[e + 3] = 255 & t),
              e + 4
            );
          }),
        (a.prototype.writeBigUInt64LE = D(function (t, e = 0) {
          return M(this, t, e, BigInt(0), BigInt('0xffffffffffffffff'));
        })),
        (a.prototype.writeBigUInt64BE = D(function (t, e = 0) {
          return _(this, t, e, BigInt(0), BigInt('0xffffffffffffffff'));
        })),
        (a.prototype.writeIntLE = function (t, e, r, n) {
          if (((t = +t), (e >>>= 0), !n)) {
            let n = Math.pow(2, 8 * r - 1);
            E(this, t, e, r, n - 1, -n);
          }
          let i = 0,
            o = 1,
            s = 0;
          for (this[e] = 255 & t; ++i < r && (o *= 256); )
            t < 0 && 0 === s && 0 !== this[e + i - 1] && (s = 1),
              (this[e + i] = (((t / o) >> 0) - s) & 255);
          return e + r;
        }),
        (a.prototype.writeIntBE = function (t, e, r, n) {
          if (((t = +t), (e >>>= 0), !n)) {
            let n = Math.pow(2, 8 * r - 1);
            E(this, t, e, r, n - 1, -n);
          }
          let i = r - 1,
            o = 1,
            s = 0;
          for (this[e + i] = 255 & t; --i >= 0 && (o *= 256); )
            t < 0 && 0 === s && 0 !== this[e + i + 1] && (s = 1),
              (this[e + i] = (((t / o) >> 0) - s) & 255);
          return e + r;
        }),
        (a.prototype.writeInt8 = function (t, e, r) {
          return (
            (t = +t),
            (e >>>= 0),
            r || E(this, t, e, 1, 127, -128),
            t < 0 && (t = 255 + t + 1),
            (this[e] = 255 & t),
            e + 1
          );
        }),
        (a.prototype.writeInt16LE = function (t, e, r) {
          return (
            (t = +t),
            (e >>>= 0),
            r || E(this, t, e, 2, 32767, -32768),
            (this[e] = 255 & t),
            (this[e + 1] = t >>> 8),
            e + 2
          );
        }),
        (a.prototype.writeInt16BE = function (t, e, r) {
          return (
            (t = +t),
            (e >>>= 0),
            r || E(this, t, e, 2, 32767, -32768),
            (this[e] = t >>> 8),
            (this[e + 1] = 255 & t),
            e + 2
          );
        }),
        (a.prototype.writeInt32LE = function (t, e, r) {
          return (
            (t = +t),
            (e >>>= 0),
            r || E(this, t, e, 4, 2147483647, -2147483648),
            (this[e] = 255 & t),
            (this[e + 1] = t >>> 8),
            (this[e + 2] = t >>> 16),
            (this[e + 3] = t >>> 24),
            e + 4
          );
        }),
        (a.prototype.writeInt32BE = function (t, e, r) {
          return (
            (t = +t),
            (e >>>= 0),
            r || E(this, t, e, 4, 2147483647, -2147483648),
            t < 0 && (t = 4294967295 + t + 1),
            (this[e] = t >>> 24),
            (this[e + 1] = t >>> 16),
            (this[e + 2] = t >>> 8),
            (this[e + 3] = 255 & t),
            e + 4
          );
        }),
        (a.prototype.writeBigInt64LE = D(function (t, e = 0) {
          return M(
            this,
            t,
            e,
            -BigInt('0x8000000000000000'),
            BigInt('0x7fffffffffffffff')
          );
        })),
        (a.prototype.writeBigInt64BE = D(function (t, e = 0) {
          return _(
            this,
            t,
            e,
            -BigInt('0x8000000000000000'),
            BigInt('0x7fffffffffffffff')
          );
        })),
        (a.prototype.writeFloatLE = function (t, e, r) {
          return A(this, t, e, !0, r);
        }),
        (a.prototype.writeFloatBE = function (t, e, r) {
          return A(this, t, e, !1, r);
        }),
        (a.prototype.writeDoubleLE = function (t, e, r) {
          return x(this, t, e, !0, r);
        }),
        (a.prototype.writeDoubleBE = function (t, e, r) {
          return x(this, t, e, !1, r);
        }),
        (a.prototype.copy = function (t, e, r, n) {
          if (!a.isBuffer(t)) throw TypeError('argument should be a Buffer');
          if (
            (r || (r = 0),
            n || 0 === n || (n = this.length),
            e >= t.length && (e = t.length),
            e || (e = 0),
            n > 0 && n < r && (n = r),
            n === r || 0 === t.length || 0 === this.length)
          )
            return 0;
          if (e < 0) throw RangeError('targetStart out of bounds');
          if (r < 0 || r >= this.length) throw RangeError('Index out of range');
          if (n < 0) throw RangeError('sourceEnd out of bounds');
          n > this.length && (n = this.length),
            t.length - e < n - r && (n = t.length - e + r);
          let i = n - r;
          return (
            this === t && 'function' == typeof Uint8Array.prototype.copyWithin
              ? this.copyWithin(e, r, n)
              : Uint8Array.prototype.set.call(t, this.subarray(r, n), e),
            i
          );
        }),
        (a.prototype.fill = function (t, e, r, n) {
          let i;
          if ('string' == typeof t) {
            if (
              ('string' == typeof e
                ? ((n = e), (e = 0), (r = this.length))
                : 'string' == typeof r && ((n = r), (r = this.length)),
              void 0 !== n && 'string' != typeof n)
            )
              throw TypeError('encoding must be a string');
            if ('string' == typeof n && !a.isEncoding(n))
              throw TypeError('Unknown encoding: ' + n);
            if (1 === t.length) {
              let e = t.charCodeAt(0);
              (('utf8' === n && e < 128) || 'latin1' === n) && (t = e);
            }
          } else
            'number' == typeof t
              ? (t &= 255)
              : 'boolean' == typeof t && (t = Number(t));
          if (e < 0 || this.length < e || this.length < r)
            throw RangeError('Out of range index');
          if (r <= e) return this;
          if (
            ((e >>>= 0),
            (r = void 0 === r ? this.length : r >>> 0),
            t || (t = 0),
            'number' == typeof t)
          )
            for (i = e; i < r; ++i) this[i] = t;
          else {
            let o = a.isBuffer(t) ? t : a.from(t, n),
              s = o.length;
            if (0 === s)
              throw TypeError(
                'The value "' + t + '" is invalid for argument "value"'
              );
            for (i = 0; i < r - e; ++i) this[i + e] = o[i % s];
          }
          return this;
        });
      let O = {};
      function I(t, e, r) {
        O[t] = class extends r {
          constructor() {
            super(),
              Object.defineProperty(this, 'message', {
                value: e.apply(this, arguments),
                writable: !0,
                configurable: !0,
              }),
              (this.name = `${this.name} [${t}]`),
              this.stack,
              delete this.name;
          }
          get code() {
            return t;
          }
          set code(t) {
            Object.defineProperty(this, 'code', {
              configurable: !0,
              enumerable: !0,
              value: t,
              writable: !0,
            });
          }
          toString() {
            return `${this.name} [${t}]: ${this.message}`;
          }
        };
      }
      function R(t) {
        let e = '',
          r = t.length,
          n = '-' === t[0] ? 1 : 0;
        for (; r >= n + 4; r -= 3) e = `_${t.slice(r - 3, r)}${e}`;
        return `${t.slice(0, r)}${e}`;
      }
      function B(t, e, r, n, i, o) {
        if (t > r || t < e) {
          let n;
          let i = 'bigint' == typeof e ? 'n' : '';
          throw (
            ((n =
              o > 3
                ? 0 === e || e === BigInt(0)
                  ? `>= 0${i} and < 2${i} ** ${(o + 1) * 8}${i}`
                  : `>= -(2${i} ** ${(o + 1) * 8 - 1}${i}) and < 2 ** ${
                      (o + 1) * 8 - 1
                    }${i}`
                : `>= ${e}${i} and <= ${r}${i}`),
            new O.ERR_OUT_OF_RANGE('value', n, t))
          );
        }
        C(i, 'offset'),
          (void 0 === n[i] || void 0 === n[i + o]) && L(i, n.length - (o + 1));
      }
      function C(t, e) {
        if ('number' != typeof t)
          throw new O.ERR_INVALID_ARG_TYPE(e, 'number', t);
      }
      function L(t, e, r) {
        if (Math.floor(t) !== t)
          throw (
            (C(t, r), new O.ERR_OUT_OF_RANGE(r || 'offset', 'an integer', t))
          );
        if (e < 0) throw new O.ERR_BUFFER_OUT_OF_BOUNDS();
        throw new O.ERR_OUT_OF_RANGE(
          r || 'offset',
          `>= ${r ? 1 : 0} and <= ${e}`,
          t
        );
      }
      I(
        'ERR_BUFFER_OUT_OF_BOUNDS',
        function (t) {
          return t
            ? `${t} is outside of buffer bounds`
            : 'Attempt to access memory outside buffer bounds';
        },
        RangeError
      ),
        I(
          'ERR_INVALID_ARG_TYPE',
          function (t, e) {
            return `The "${t}" argument must be of type number. Received type ${typeof e}`;
          },
          TypeError
        ),
        I(
          'ERR_OUT_OF_RANGE',
          function (t, e, r) {
            let n = `The value of "${t}" is out of range.`,
              i = r;
            return (
              Number.isInteger(r) && Math.abs(r) > 4294967296
                ? (i = R(String(r)))
                : 'bigint' == typeof r &&
                  ((i = String(r)),
                  (r > BigInt(2) ** BigInt(32) ||
                    r < -(BigInt(2) ** BigInt(32))) &&
                    (i = R(i)),
                  (i += 'n')),
              (n += ` It must be ${e}. Received ${i}`)
            );
          },
          RangeError
        );
      let T = /[^+/0-9A-Za-z-_]/g;
      function N(t, e) {
        let r;
        e = e || 1 / 0;
        let n = t.length,
          i = null,
          o = [];
        for (let s = 0; s < n; ++s) {
          if ((r = t.charCodeAt(s)) > 55295 && r < 57344) {
            if (!i) {
              if (r > 56319 || s + 1 === n) {
                (e -= 3) > -1 && o.push(239, 191, 189);
                continue;
              }
              i = r;
              continue;
            }
            if (r < 56320) {
              (e -= 3) > -1 && o.push(239, 191, 189), (i = r);
              continue;
            }
            r = (((i - 55296) << 10) | (r - 56320)) + 65536;
          } else i && (e -= 3) > -1 && o.push(239, 191, 189);
          if (((i = null), r < 128)) {
            if ((e -= 1) < 0) break;
            o.push(r);
          } else if (r < 2048) {
            if ((e -= 2) < 0) break;
            o.push((r >> 6) | 192, (63 & r) | 128);
          } else if (r < 65536) {
            if ((e -= 3) < 0) break;
            o.push((r >> 12) | 224, ((r >> 6) & 63) | 128, (63 & r) | 128);
          } else if (r < 1114112) {
            if ((e -= 4) < 0) break;
            o.push(
              (r >> 18) | 240,
              ((r >> 12) & 63) | 128,
              ((r >> 6) & 63) | 128,
              (63 & r) | 128
            );
          } else throw Error('Invalid code point');
        }
        return o;
      }
      function P(t) {
        return n.toByteArray(
          (function (t) {
            if ((t = (t = t.split('=')[0]).trim().replace(T, '')).length < 2)
              return '';
            for (; t.length % 4 != 0; ) t += '=';
            return t;
          })(t)
        );
      }
      function U(t, e, r, n) {
        let i;
        for (i = 0; i < n && !(i + r >= e.length) && !(i >= t.length); ++i)
          e[i + r] = t[i];
        return i;
      }
      function k(t, e) {
        return (
          t instanceof e ||
          (null != t &&
            null != t.constructor &&
            null != t.constructor.name &&
            t.constructor.name === e.name)
        );
      }
      let j = (function () {
        let t = '0123456789abcdef',
          e = Array(256);
        for (let r = 0; r < 16; ++r) {
          let n = 16 * r;
          for (let i = 0; i < 16; ++i) e[n + i] = t[r] + t[i];
        }
        return e;
      })();
      function D(t) {
        return 'undefined' == typeof BigInt ? z : t;
      }
      function z() {
        throw Error('BigInt not supported');
      }
    },
    7836: function (t) {
      'use strict';
      var e = Object.prototype.hasOwnProperty,
        r = '~';
      function n() {}
      function i(t, e, r) {
        (this.fn = t), (this.context = e), (this.once = r || !1);
      }
      function o(t, e, n, o, s) {
        if ('function' != typeof n)
          throw TypeError('The listener must be a function');
        var a = new i(n, o || t, s),
          u = r ? r + e : e;
        return (
          t._events[u]
            ? t._events[u].fn
              ? (t._events[u] = [t._events[u], a])
              : t._events[u].push(a)
            : ((t._events[u] = a), t._eventsCount++),
          t
        );
      }
      function s(t, e) {
        0 == --t._eventsCount ? (t._events = new n()) : delete t._events[e];
      }
      function a() {
        (this._events = new n()), (this._eventsCount = 0);
      }
      Object.create &&
        ((n.prototype = Object.create(null)), new n().__proto__ || (r = !1)),
        (a.prototype.eventNames = function () {
          var t,
            n,
            i = [];
          if (0 === this._eventsCount) return i;
          for (n in (t = this._events))
            e.call(t, n) && i.push(r ? n.slice(1) : n);
          return Object.getOwnPropertySymbols
            ? i.concat(Object.getOwnPropertySymbols(t))
            : i;
        }),
        (a.prototype.listeners = function (t) {
          var e = r ? r + t : t,
            n = this._events[e];
          if (!n) return [];
          if (n.fn) return [n.fn];
          for (var i = 0, o = n.length, s = Array(o); i < o; i++)
            s[i] = n[i].fn;
          return s;
        }),
        (a.prototype.listenerCount = function (t) {
          var e = r ? r + t : t,
            n = this._events[e];
          return n ? (n.fn ? 1 : n.length) : 0;
        }),
        (a.prototype.emit = function (t, e, n, i, o, s) {
          var a = r ? r + t : t;
          if (!this._events[a]) return !1;
          var u,
            l,
            h = this._events[a],
            c = arguments.length;
          if (h.fn) {
            switch ((h.once && this.removeListener(t, h.fn, void 0, !0), c)) {
              case 1:
                return h.fn.call(h.context), !0;
              case 2:
                return h.fn.call(h.context, e), !0;
              case 3:
                return h.fn.call(h.context, e, n), !0;
              case 4:
                return h.fn.call(h.context, e, n, i), !0;
              case 5:
                return h.fn.call(h.context, e, n, i, o), !0;
              case 6:
                return h.fn.call(h.context, e, n, i, o, s), !0;
            }
            for (l = 1, u = Array(c - 1); l < c; l++) u[l - 1] = arguments[l];
            h.fn.apply(h.context, u);
          } else {
            var f,
              d = h.length;
            for (l = 0; l < d; l++)
              switch (
                (h[l].once && this.removeListener(t, h[l].fn, void 0, !0), c)
              ) {
                case 1:
                  h[l].fn.call(h[l].context);
                  break;
                case 2:
                  h[l].fn.call(h[l].context, e);
                  break;
                case 3:
                  h[l].fn.call(h[l].context, e, n);
                  break;
                case 4:
                  h[l].fn.call(h[l].context, e, n, i);
                  break;
                default:
                  if (!u)
                    for (f = 1, u = Array(c - 1); f < c; f++)
                      u[f - 1] = arguments[f];
                  h[l].fn.apply(h[l].context, u);
              }
          }
          return !0;
        }),
        (a.prototype.on = function (t, e, r) {
          return o(this, t, e, r, !1);
        }),
        (a.prototype.once = function (t, e, r) {
          return o(this, t, e, r, !0);
        }),
        (a.prototype.removeListener = function (t, e, n, i) {
          var o = r ? r + t : t;
          if (!this._events[o]) return this;
          if (!e) return s(this, o), this;
          var a = this._events[o];
          if (a.fn)
            a.fn !== e ||
              (i && !a.once) ||
              (n && a.context !== n) ||
              s(this, o);
          else {
            for (var u = 0, l = [], h = a.length; u < h; u++)
              (a[u].fn !== e ||
                (i && !a[u].once) ||
                (n && a[u].context !== n)) &&
                l.push(a[u]);
            l.length
              ? (this._events[o] = 1 === l.length ? l[0] : l)
              : s(this, o);
          }
          return this;
        }),
        (a.prototype.removeAllListeners = function (t) {
          var e;
          return (
            t
              ? ((e = r ? r + t : t), this._events[e] && s(this, e))
              : ((this._events = new n()), (this._eventsCount = 0)),
            this
          );
        }),
        (a.prototype.off = a.prototype.removeListener),
        (a.prototype.addListener = a.prototype.on),
        (a.prefixed = r),
        (a.EventEmitter = a),
        (t.exports = a);
    },
    6868: function (t, e) {
      /*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */ (e.read =
        function (t, e, r, n, i) {
          var o,
            s,
            a = 8 * i - n - 1,
            u = (1 << a) - 1,
            l = u >> 1,
            h = -7,
            c = r ? i - 1 : 0,
            f = r ? -1 : 1,
            d = t[e + c];
          for (
            c += f, o = d & ((1 << -h) - 1), d >>= -h, h += a;
            h > 0;
            o = 256 * o + t[e + c], c += f, h -= 8
          );
          for (
            s = o & ((1 << -h) - 1), o >>= -h, h += n;
            h > 0;
            s = 256 * s + t[e + c], c += f, h -= 8
          );
          if (0 === o) o = 1 - l;
          else {
            if (o === u) return s ? NaN : (1 / 0) * (d ? -1 : 1);
            (s += Math.pow(2, n)), (o -= l);
          }
          return (d ? -1 : 1) * s * Math.pow(2, o - n);
        }),
        (e.write = function (t, e, r, n, i, o) {
          var s,
            a,
            u,
            l = 8 * o - i - 1,
            h = (1 << l) - 1,
            c = h >> 1,
            f = 23 === i ? 5960464477539062e-23 : 0,
            d = n ? 0 : o - 1,
            p = n ? 1 : -1,
            y = e < 0 || (0 === e && 1 / e < 0) ? 1 : 0;
          for (
            isNaN((e = Math.abs(e))) || e === 1 / 0
              ? ((a = isNaN(e) ? 1 : 0), (s = h))
              : ((s = Math.floor(Math.log(e) / Math.LN2)),
                e * (u = Math.pow(2, -s)) < 1 && (s--, (u *= 2)),
                s + c >= 1 ? (e += f / u) : (e += f * Math.pow(2, 1 - c)),
                e * u >= 2 && (s++, (u /= 2)),
                s + c >= h
                  ? ((a = 0), (s = h))
                  : s + c >= 1
                  ? ((a = (e * u - 1) * Math.pow(2, i)), (s += c))
                  : ((a = e * Math.pow(2, c - 1) * Math.pow(2, i)), (s = 0)));
            i >= 8;
            t[r + d] = 255 & a, d += p, a /= 256, i -= 8
          );
          for (
            s = (s << i) | a, l += i;
            l > 0;
            t[r + d] = 255 & s, d += p, s /= 256, l -= 8
          );
          t[r + d - p] |= 128 * y;
        });
    },
    4531: function (t, e, r) {
      'use strict';
      let n = r(3538).v4,
        i = r(2309),
        o = function (t, e) {
          if (!(this instanceof o)) return new o(t, e);
          e || (e = {}),
            (this.options = {
              reviver: void 0 !== e.reviver ? e.reviver : null,
              replacer: void 0 !== e.replacer ? e.replacer : null,
              generator:
                void 0 !== e.generator
                  ? e.generator
                  : function () {
                      return n();
                    },
              version: void 0 !== e.version ? e.version : 2,
              notificationIdNull:
                'boolean' == typeof e.notificationIdNull &&
                e.notificationIdNull,
            }),
            (this.callServer = t);
        };
      (t.exports = o),
        (o.prototype.request = function (t, e, r, n) {
          let o;
          let s = this,
            a = null,
            u = Array.isArray(t) && 'function' == typeof e;
          if (1 === this.options.version && u)
            throw TypeError('JSON-RPC 1.0 does not support batching');
          let l = !u && t && 'object' == typeof t && 'function' == typeof e;
          if (u || l) (n = e), (a = t);
          else {
            'function' == typeof r && ((n = r), (r = void 0));
            let o = 'function' == typeof n;
            try {
              a = i(t, e, r, {
                generator: this.options.generator,
                version: this.options.version,
                notificationIdNull: this.options.notificationIdNull,
              });
            } catch (t) {
              if (o) return n(t);
              throw t;
            }
            if (!o) return a;
          }
          try {
            o = JSON.stringify(a, this.options.replacer);
          } catch (t) {
            return n(t);
          }
          return (
            this.callServer(o, function (t, e) {
              s._parseResponse(t, e, n);
            }),
            a
          );
        }),
        (o.prototype._parseResponse = function (t, e, r) {
          let n;
          if (t) {
            r(t);
            return;
          }
          if (!e) return r();
          try {
            n = JSON.parse(e, this.options.reviver);
          } catch (t) {
            return r(t);
          }
          if (3 === r.length) {
            if (!Array.isArray(n)) return r(null, n.error, n.result);
            {
              let t = function (t) {
                return void 0 !== t.error;
              };
              return r(
                null,
                n.filter(t),
                n.filter(function (e) {
                  return !t(e);
                })
              );
            }
          }
          r(null, n);
        });
    },
    2309: function (t, e, r) {
      'use strict';
      let n = r(3538).v4;
      t.exports = function (t, e, r, i) {
        if ('string' != typeof t) throw TypeError(t + ' must be a string');
        let o = 'number' == typeof (i = i || {}).version ? i.version : 2;
        if (1 !== o && 2 !== o) throw TypeError(o + ' must be 1 or 2');
        let s = { method: t };
        if ((2 === o && (s.jsonrpc = '2.0'), e)) {
          if ('object' != typeof e && !Array.isArray(e))
            throw TypeError(e + ' must be an object, array or omitted');
          s.params = e;
        }
        if (void 0 === r) {
          let t =
            'function' == typeof i.generator
              ? i.generator
              : function () {
                  return n();
                };
          s.id = t(s, i);
        } else
          2 === o && null === r
            ? i.notificationIdNull && (s.id = null)
            : (s.id = r);
        return s;
      };
    },
    7138: function (t, e, r) {
      'use strict';
      r.d(e, {
        default: function () {
          return i.a;
        },
      });
      var n = r(231),
        i = r.n(n);
    },
    6463: function (t, e, r) {
      'use strict';
      var n = r(1169);
      r.o(n, 'usePathname') &&
        r.d(e, {
          usePathname: function () {
            return n.usePathname;
          },
        });
    },
    1877: function (t, e, r) {
      'use strict';
      r.d(e, {
        default: function () {
          return i.a;
        },
      });
      var n = r(4080),
        i = r.n(n);
    },
    844: function (t, e, r) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 }),
        Object.defineProperty(e, 'addLocale', {
          enumerable: !0,
          get: function () {
            return n;
          },
        }),
        r(8157);
      let n = function (t) {
        for (
          var e = arguments.length, r = Array(e > 1 ? e - 1 : 0), n = 1;
          n < e;
          n++
        )
          r[n - 1] = arguments[n];
        return t;
      };
      ('function' == typeof e.default ||
        ('object' == typeof e.default && null !== e.default)) &&
        void 0 === e.default.__esModule &&
        (Object.defineProperty(e.default, '__esModule', { value: !0 }),
        Object.assign(e.default, e),
        (t.exports = e.default));
    },
    5944: function (t, e, r) {
      'use strict';
      function n(t, e, r, n) {
        return !1;
      }
      Object.defineProperty(e, '__esModule', { value: !0 }),
        Object.defineProperty(e, 'getDomainLocale', {
          enumerable: !0,
          get: function () {
            return n;
          },
        }),
        r(8157),
        ('function' == typeof e.default ||
          ('object' == typeof e.default && null !== e.default)) &&
          void 0 === e.default.__esModule &&
          (Object.defineProperty(e.default, '__esModule', { value: !0 }),
          Object.assign(e.default, e),
          (t.exports = e.default));
    },
    905: function (t, e) {
      'use strict';
      let r;
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (function (t, e) {
          for (var r in e)
            Object.defineProperty(t, r, { enumerable: !0, get: e[r] });
        })(e, {
          DOMAttributeNames: function () {
            return n;
          },
          default: function () {
            return s;
          },
          isEqualNode: function () {
            return o;
          },
        });
      let n = {
        acceptCharset: 'accept-charset',
        className: 'class',
        htmlFor: 'for',
        httpEquiv: 'http-equiv',
        noModule: 'noModule',
      };
      function i(t) {
        let { type: e, props: r } = t,
          i = document.createElement(e);
        for (let t in r) {
          if (
            !r.hasOwnProperty(t) ||
            'children' === t ||
            'dangerouslySetInnerHTML' === t ||
            void 0 === r[t]
          )
            continue;
          let o = n[t] || t.toLowerCase();
          'script' === e && ('async' === o || 'defer' === o || 'noModule' === o)
            ? (i[o] = !!r[t])
            : i.setAttribute(o, r[t]);
        }
        let { children: o, dangerouslySetInnerHTML: s } = r;
        return (
          s
            ? (i.innerHTML = s.__html || '')
            : o &&
              (i.textContent =
                'string' == typeof o ? o : Array.isArray(o) ? o.join('') : ''),
          i
        );
      }
      function o(t, e) {
        if (t instanceof HTMLElement && e instanceof HTMLElement) {
          let r = e.getAttribute('nonce');
          if (r && !t.getAttribute('nonce')) {
            let n = e.cloneNode(!0);
            return (
              n.setAttribute('nonce', ''),
              (n.nonce = r),
              r === t.nonce && t.isEqualNode(n)
            );
          }
        }
        return t.isEqualNode(e);
      }
      function s() {
        return {
          mountedInstances: new Set(),
          updateHead: (t) => {
            let e = {};
            t.forEach((t) => {
              if ('link' === t.type && t.props['data-optimized-fonts']) {
                if (
                  document.querySelector(
                    'style[data-href="' + t.props['data-href'] + '"]'
                  )
                )
                  return;
                (t.props.href = t.props['data-href']),
                  (t.props['data-href'] = void 0);
              }
              let r = e[t.type] || [];
              r.push(t), (e[t.type] = r);
            });
            let n = e.title ? e.title[0] : null,
              i = '';
            if (n) {
              let { children: t } = n.props;
              i = 'string' == typeof t ? t : Array.isArray(t) ? t.join('') : '';
            }
            i !== document.title && (document.title = i),
              ['meta', 'base', 'link', 'style', 'script'].forEach((t) => {
                r(t, e[t] || []);
              });
          },
        };
      }
      (r = (t, e) => {
        let r = document.getElementsByTagName('head')[0],
          n = r.querySelector('meta[name=next-head-count]'),
          s = Number(n.content),
          a = [];
        for (
          let e = 0, r = n.previousElementSibling;
          e < s;
          e++, r = (null == r ? void 0 : r.previousElementSibling) || null
        ) {
          var u;
          (null == r
            ? void 0
            : null == (u = r.tagName)
            ? void 0
            : u.toLowerCase()) === t && a.push(r);
        }
        let l = e.map(i).filter((t) => {
          for (let e = 0, r = a.length; e < r; e++)
            if (o(a[e], t)) return a.splice(e, 1), !1;
          return !0;
        });
        a.forEach((t) => {
          var e;
          return null == (e = t.parentNode) ? void 0 : e.removeChild(t);
        }),
          l.forEach((t) => r.insertBefore(t, n)),
          (n.content = (s - a.length + l.length).toString());
      }),
        ('function' == typeof e.default ||
          ('object' == typeof e.default && null !== e.default)) &&
          void 0 === e.default.__esModule &&
          (Object.defineProperty(e.default, '__esModule', { value: !0 }),
          Object.assign(e.default, e),
          (t.exports = e.default));
    },
    231: function (t, e, r) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 }),
        Object.defineProperty(e, 'default', {
          enumerable: !0,
          get: function () {
            return b;
          },
        });
      let n = r(9920),
        i = r(7437),
        o = n._(r(2265)),
        s = r(8016),
        a = r(8029),
        u = r(1142),
        l = r(3461),
        h = r(844),
        c = r(291),
        f = r(4467),
        d = r(3106),
        p = r(5944),
        y = r(4897),
        m = r(1507),
        g = new Set();
      function w(t, e, r, n, i, o) {
        if ('undefined' != typeof window && (o || (0, a.isLocalURL)(e))) {
          if (!n.bypassPrefetchedCheck) {
            let i =
              e +
              '%' +
              r +
              '%' +
              (void 0 !== n.locale
                ? n.locale
                : 'locale' in t
                ? t.locale
                : void 0);
            if (g.has(i)) return;
            g.add(i);
          }
          (async () => (o ? t.prefetch(e, i) : t.prefetch(e, r, n)))().catch(
            (t) => {}
          );
        }
      }
      function v(t) {
        return 'string' == typeof t ? t : (0, u.formatUrl)(t);
      }
      let b = o.default.forwardRef(function (t, e) {
        let r, n;
        let {
          href: u,
          as: g,
          children: b,
          prefetch: E = null,
          passHref: M,
          replace: _,
          shallow: S,
          scroll: A,
          locale: x,
          onClick: O,
          onMouseEnter: I,
          onTouchStart: R,
          legacyBehavior: B = !1,
          ...C
        } = t;
        (r = b),
          B &&
            ('string' == typeof r || 'number' == typeof r) &&
            (r = (0, i.jsx)('a', { children: r }));
        let L = o.default.useContext(c.RouterContext),
          T = o.default.useContext(f.AppRouterContext),
          N = null != L ? L : T,
          P = !L,
          U = !1 !== E,
          k = null === E ? m.PrefetchKind.AUTO : m.PrefetchKind.FULL,
          { href: j, as: D } = o.default.useMemo(() => {
            if (!L) {
              let t = v(u);
              return { href: t, as: g ? v(g) : t };
            }
            let [t, e] = (0, s.resolveHref)(L, u, !0);
            return { href: t, as: g ? (0, s.resolveHref)(L, g) : e || t };
          }, [L, u, g]),
          z = o.default.useRef(j),
          q = o.default.useRef(D);
        B && (n = o.default.Children.only(r));
        let F = B ? n && 'object' == typeof n && n.ref : e,
          [$, W, H] = (0, d.useIntersection)({ rootMargin: '200px' }),
          Z = o.default.useCallback(
            (t) => {
              (q.current !== D || z.current !== j) &&
                (H(), (q.current = D), (z.current = j)),
                $(t),
                F &&
                  ('function' == typeof F
                    ? F(t)
                    : 'object' == typeof F && (F.current = t));
            },
            [D, F, j, H, $]
          );
        o.default.useEffect(() => {
          N && W && U && w(N, j, D, { locale: x }, { kind: k }, P);
        }, [D, j, W, x, U, null == L ? void 0 : L.locale, N, P, k]);
        let V = {
          ref: Z,
          onClick(t) {
            B || 'function' != typeof O || O(t),
              B &&
                n.props &&
                'function' == typeof n.props.onClick &&
                n.props.onClick(t),
              N &&
                !t.defaultPrevented &&
                (function (t, e, r, n, i, s, u, l, h) {
                  let { nodeName: c } = t.currentTarget;
                  if (
                    'A' === c.toUpperCase() &&
                    ((function (t) {
                      let e = t.currentTarget.getAttribute('target');
                      return (
                        (e && '_self' !== e) ||
                        t.metaKey ||
                        t.ctrlKey ||
                        t.shiftKey ||
                        t.altKey ||
                        (t.nativeEvent && 2 === t.nativeEvent.which)
                      );
                    })(t) ||
                      (!h && !(0, a.isLocalURL)(r)))
                  )
                    return;
                  t.preventDefault();
                  let f = () => {
                    let t = null == u || u;
                    'beforePopState' in e
                      ? e[i ? 'replace' : 'push'](r, n, {
                          shallow: s,
                          locale: l,
                          scroll: t,
                        })
                      : e[i ? 'replace' : 'push'](n || r, { scroll: t });
                  };
                  h ? o.default.startTransition(f) : f();
                })(t, N, j, D, _, S, A, x, P);
          },
          onMouseEnter(t) {
            B || 'function' != typeof I || I(t),
              B &&
                n.props &&
                'function' == typeof n.props.onMouseEnter &&
                n.props.onMouseEnter(t),
              N &&
                (U || !P) &&
                w(
                  N,
                  j,
                  D,
                  { locale: x, priority: !0, bypassPrefetchedCheck: !0 },
                  { kind: k },
                  P
                );
          },
          onTouchStart: function (t) {
            B || 'function' != typeof R || R(t),
              B &&
                n.props &&
                'function' == typeof n.props.onTouchStart &&
                n.props.onTouchStart(t),
              N &&
                (U || !P) &&
                w(
                  N,
                  j,
                  D,
                  { locale: x, priority: !0, bypassPrefetchedCheck: !0 },
                  { kind: k },
                  P
                );
          },
        };
        if ((0, l.isAbsoluteUrl)(D)) V.href = D;
        else if (!B || M || ('a' === n.type && !('href' in n.props))) {
          let t = void 0 !== x ? x : null == L ? void 0 : L.locale,
            e =
              (null == L ? void 0 : L.isLocaleDomain) &&
              (0, p.getDomainLocale)(
                D,
                t,
                null == L ? void 0 : L.locales,
                null == L ? void 0 : L.domainLocales
              );
          V.href =
            e ||
            (0, y.addBasePath)(
              (0, h.addLocale)(D, t, null == L ? void 0 : L.defaultLocale)
            );
        }
        return B
          ? o.default.cloneElement(n, V)
          : (0, i.jsx)('a', { ...C, ...V, children: r });
      });
      ('function' == typeof e.default ||
        ('object' == typeof e.default && null !== e.default)) &&
        void 0 === e.default.__esModule &&
        (Object.defineProperty(e.default, '__esModule', { value: !0 }),
        Object.assign(e.default, e),
        (t.exports = e.default));
    },
    9189: function (t, e) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (function (t, e) {
          for (var r in e)
            Object.defineProperty(t, r, { enumerable: !0, get: e[r] });
        })(e, {
          cancelIdleCallback: function () {
            return n;
          },
          requestIdleCallback: function () {
            return r;
          },
        });
      let r =
          ('undefined' != typeof self &&
            self.requestIdleCallback &&
            self.requestIdleCallback.bind(window)) ||
          function (t) {
            let e = Date.now();
            return self.setTimeout(function () {
              t({
                didTimeout: !1,
                timeRemaining: function () {
                  return Math.max(0, 50 - (Date.now() - e));
                },
              });
            }, 1);
          },
        n =
          ('undefined' != typeof self &&
            self.cancelIdleCallback &&
            self.cancelIdleCallback.bind(window)) ||
          function (t) {
            return clearTimeout(t);
          };
      ('function' == typeof e.default ||
        ('object' == typeof e.default && null !== e.default)) &&
        void 0 === e.default.__esModule &&
        (Object.defineProperty(e.default, '__esModule', { value: !0 }),
        Object.assign(e.default, e),
        (t.exports = e.default));
    },
    8016: function (t, e, r) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 }),
        Object.defineProperty(e, 'resolveHref', {
          enumerable: !0,
          get: function () {
            return c;
          },
        });
      let n = r(8323),
        i = r(1142),
        o = r(5519),
        s = r(3461),
        a = r(8157),
        u = r(8029),
        l = r(9195),
        h = r(20);
      function c(t, e, r) {
        let c;
        let f = 'string' == typeof e ? e : (0, i.formatWithValidation)(e),
          d = f.match(/^[a-zA-Z]{1,}:\/\//),
          p = d ? f.slice(d[0].length) : f;
        if ((p.split('?', 1)[0] || '').match(/(\/\/|\\)/)) {
          console.error(
            "Invalid href '" +
              f +
              "' passed to next/router in page: '" +
              t.pathname +
              "'. Repeated forward-slashes (//) or backslashes \\ are not valid in the href."
          );
          let e = (0, s.normalizeRepeatedSlashes)(p);
          f = (d ? d[0] : '') + e;
        }
        if (!(0, u.isLocalURL)(f)) return r ? [f] : f;
        try {
          c = new URL(f.startsWith('#') ? t.asPath : t.pathname, 'http://n');
        } catch (t) {
          c = new URL('/', 'http://n');
        }
        try {
          let t = new URL(f, c);
          t.pathname = (0, a.normalizePathTrailingSlash)(t.pathname);
          let e = '';
          if ((0, l.isDynamicRoute)(t.pathname) && t.searchParams && r) {
            let r = (0, n.searchParamsToUrlQuery)(t.searchParams),
              { result: s, params: a } = (0, h.interpolateAs)(
                t.pathname,
                t.pathname,
                r
              );
            s &&
              (e = (0, i.formatWithValidation)({
                pathname: s,
                hash: t.hash,
                query: (0, o.omit)(r, a),
              }));
          }
          let s =
            t.origin === c.origin ? t.href.slice(t.origin.length) : t.href;
          return r ? [s, e || s] : s;
        } catch (t) {
          return r ? [f] : f;
        }
      }
      ('function' == typeof e.default ||
        ('object' == typeof e.default && null !== e.default)) &&
        void 0 === e.default.__esModule &&
        (Object.defineProperty(e.default, '__esModule', { value: !0 }),
        Object.assign(e.default, e),
        (t.exports = e.default));
    },
    4080: function (t, e, r) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (function (t, e) {
          for (var r in e)
            Object.defineProperty(t, r, { enumerable: !0, get: e[r] });
        })(e, {
          default: function () {
            return v;
          },
          handleClientScriptLoad: function () {
            return m;
          },
          initScriptLoader: function () {
            return g;
          },
        });
      let n = r(9920),
        i = r(1452),
        o = r(7437),
        s = n._(r(4887)),
        a = i._(r(2265)),
        u = r(6590),
        l = r(905),
        h = r(9189),
        c = new Map(),
        f = new Set(),
        d = [
          'onLoad',
          'onReady',
          'dangerouslySetInnerHTML',
          'children',
          'onError',
          'strategy',
          'stylesheets',
        ],
        p = (t) => {
          if (s.default.preinit) {
            t.forEach((t) => {
              s.default.preinit(t, { as: 'style' });
            });
            return;
          }
          if ('undefined' != typeof window) {
            let e = document.head;
            t.forEach((t) => {
              let r = document.createElement('link');
              (r.type = 'text/css'),
                (r.rel = 'stylesheet'),
                (r.href = t),
                e.appendChild(r);
            });
          }
        },
        y = (t) => {
          let {
              src: e,
              id: r,
              onLoad: n = () => {},
              onReady: i = null,
              dangerouslySetInnerHTML: o,
              children: s = '',
              strategy: a = 'afterInteractive',
              onError: u,
              stylesheets: h,
            } = t,
            y = r || e;
          if (y && f.has(y)) return;
          if (c.has(e)) {
            f.add(y), c.get(e).then(n, u);
            return;
          }
          let m = () => {
              i && i(), f.add(y);
            },
            g = document.createElement('script'),
            w = new Promise((t, e) => {
              g.addEventListener('load', function (e) {
                t(), n && n.call(this, e), m();
              }),
                g.addEventListener('error', function (t) {
                  e(t);
                });
            }).catch(function (t) {
              u && u(t);
            });
          for (let [r, n] of (o
            ? ((g.innerHTML = o.__html || ''), m())
            : s
            ? ((g.textContent =
                'string' == typeof s ? s : Array.isArray(s) ? s.join('') : ''),
              m())
            : e && ((g.src = e), c.set(e, w)),
          Object.entries(t))) {
            if (void 0 === n || d.includes(r)) continue;
            let t = l.DOMAttributeNames[r] || r.toLowerCase();
            g.setAttribute(t, n);
          }
          'worker' === a && g.setAttribute('type', 'text/partytown'),
            g.setAttribute('data-nscript', a),
            h && p(h),
            document.body.appendChild(g);
        };
      function m(t) {
        let { strategy: e = 'afterInteractive' } = t;
        'lazyOnload' === e
          ? window.addEventListener('load', () => {
              (0, h.requestIdleCallback)(() => y(t));
            })
          : y(t);
      }
      function g(t) {
        t.forEach(m),
          [
            ...document.querySelectorAll('[data-nscript="beforeInteractive"]'),
            ...document.querySelectorAll('[data-nscript="beforePageRender"]'),
          ].forEach((t) => {
            let e = t.id || t.getAttribute('src');
            f.add(e);
          });
      }
      function w(t) {
        let {
            id: e,
            src: r = '',
            onLoad: n = () => {},
            onReady: i = null,
            strategy: l = 'afterInteractive',
            onError: c,
            stylesheets: d,
            ...p
          } = t,
          {
            updateScripts: m,
            scripts: g,
            getIsSsr: w,
            appDir: v,
            nonce: b,
          } = (0, a.useContext)(u.HeadManagerContext),
          E = (0, a.useRef)(!1);
        (0, a.useEffect)(() => {
          let t = e || r;
          E.current || (i && t && f.has(t) && i(), (E.current = !0));
        }, [i, e, r]);
        let M = (0, a.useRef)(!1);
        if (
          ((0, a.useEffect)(() => {
            !M.current &&
              ('afterInteractive' === l
                ? y(t)
                : 'lazyOnload' === l &&
                  ('complete' === document.readyState
                    ? (0, h.requestIdleCallback)(() => y(t))
                    : window.addEventListener('load', () => {
                        (0, h.requestIdleCallback)(() => y(t));
                      })),
              (M.current = !0));
          }, [t, l]),
          ('beforeInteractive' === l || 'worker' === l) &&
            (m
              ? ((g[l] = (g[l] || []).concat([
                  { id: e, src: r, onLoad: n, onReady: i, onError: c, ...p },
                ])),
                m(g))
              : w && w()
              ? f.add(e || r)
              : w && !w() && y(t)),
          v)
        ) {
          if (
            (d &&
              d.forEach((t) => {
                s.default.preinit(t, { as: 'style' });
              }),
            'beforeInteractive' === l)
          )
            return r
              ? (s.default.preload(
                  r,
                  p.integrity
                    ? { as: 'script', integrity: p.integrity, nonce: b }
                    : { as: 'script', nonce: b }
                ),
                (0, o.jsx)('script', {
                  nonce: b,
                  dangerouslySetInnerHTML: {
                    __html:
                      '(self.__next_s=self.__next_s||[]).push(' +
                      JSON.stringify([r, { ...p, id: e }]) +
                      ')',
                  },
                }))
              : (p.dangerouslySetInnerHTML &&
                  ((p.children = p.dangerouslySetInnerHTML.__html),
                  delete p.dangerouslySetInnerHTML),
                (0, o.jsx)('script', {
                  nonce: b,
                  dangerouslySetInnerHTML: {
                    __html:
                      '(self.__next_s=self.__next_s||[]).push(' +
                      JSON.stringify([0, { ...p, id: e }]) +
                      ')',
                  },
                }));
          'afterInteractive' === l &&
            r &&
            s.default.preload(
              r,
              p.integrity
                ? { as: 'script', integrity: p.integrity, nonce: b }
                : { as: 'script', nonce: b }
            );
        }
        return null;
      }
      Object.defineProperty(w, '__nextScript', { value: !0 });
      let v = w;
      ('function' == typeof e.default ||
        ('object' == typeof e.default && null !== e.default)) &&
        void 0 === e.default.__esModule &&
        (Object.defineProperty(e.default, '__esModule', { value: !0 }),
        Object.assign(e.default, e),
        (t.exports = e.default));
    },
    3106: function (t, e, r) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 }),
        Object.defineProperty(e, 'useIntersection', {
          enumerable: !0,
          get: function () {
            return u;
          },
        });
      let n = r(2265),
        i = r(9189),
        o = 'function' == typeof IntersectionObserver,
        s = new Map(),
        a = [];
      function u(t) {
        let { rootRef: e, rootMargin: r, disabled: u } = t,
          l = u || !o,
          [h, c] = (0, n.useState)(!1),
          f = (0, n.useRef)(null),
          d = (0, n.useCallback)((t) => {
            f.current = t;
          }, []);
        return (
          (0, n.useEffect)(() => {
            if (o) {
              if (l || h) return;
              let t = f.current;
              if (t && t.tagName)
                return (function (t, e, r) {
                  let {
                    id: n,
                    observer: i,
                    elements: o,
                  } = (function (t) {
                    let e;
                    let r = {
                        root: t.root || null,
                        margin: t.rootMargin || '',
                      },
                      n = a.find(
                        (t) => t.root === r.root && t.margin === r.margin
                      );
                    if (n && (e = s.get(n))) return e;
                    let i = new Map();
                    return (
                      (e = {
                        id: r,
                        observer: new IntersectionObserver((t) => {
                          t.forEach((t) => {
                            let e = i.get(t.target),
                              r = t.isIntersecting || t.intersectionRatio > 0;
                            e && r && e(r);
                          });
                        }, t),
                        elements: i,
                      }),
                      a.push(r),
                      s.set(r, e),
                      e
                    );
                  })(r);
                  return (
                    o.set(t, e),
                    i.observe(t),
                    function () {
                      if ((o.delete(t), i.unobserve(t), 0 === o.size)) {
                        i.disconnect(), s.delete(n);
                        let t = a.findIndex(
                          (t) => t.root === n.root && t.margin === n.margin
                        );
                        t > -1 && a.splice(t, 1);
                      }
                    }
                  );
                })(t, (t) => t && c(t), {
                  root: null == e ? void 0 : e.current,
                  rootMargin: r,
                });
            } else if (!h) {
              let t = (0, i.requestIdleCallback)(() => c(!0));
              return () => (0, i.cancelIdleCallback)(t);
            }
          }, [l, r, e, h, f.current]),
          [
            d,
            h,
            (0, n.useCallback)(() => {
              c(!1);
            }, []),
          ]
        );
      }
      ('function' == typeof e.default ||
        ('object' == typeof e.default && null !== e.default)) &&
        void 0 === e.default.__esModule &&
        (Object.defineProperty(e.default, '__esModule', { value: !0 }),
        Object.assign(e.default, e),
        (t.exports = e.default));
    },
    1943: function (t, e) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 }),
        Object.defineProperty(e, 'escapeStringRegexp', {
          enumerable: !0,
          get: function () {
            return i;
          },
        });
      let r = /[|\\{}()[\]^$+*?.-]/,
        n = /[|\\{}()[\]^$+*?.-]/g;
      function i(t) {
        return r.test(t) ? t.replace(n, '\\$&') : t;
      }
    },
    912: function (t, e, r) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 }),
        Object.defineProperty(e, 'BailoutToCSR', {
          enumerable: !0,
          get: function () {
            return i;
          },
        });
      let n = r(5592);
      function i(t) {
        let { reason: e, children: r } = t;
        if ('undefined' == typeof window) throw new n.BailoutToCSRError(e);
        return r;
      }
    },
    1481: function (t, e, r) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 }),
        Object.defineProperty(e, 'PreloadCss', {
          enumerable: !0,
          get: function () {
            return o;
          },
        });
      let n = r(7437),
        i = r(8512);
      function o(t) {
        let { moduleIds: e } = t;
        if ('undefined' != typeof window) return null;
        let r = (0, i.getExpectedRequestStore)('next/dynamic css'),
          o = [];
        if (r.reactLoadableManifest && e) {
          let t = r.reactLoadableManifest;
          for (let r of e) {
            if (!t[r]) continue;
            let e = t[r].files.filter((t) => t.endsWith('.css'));
            o.push(...e);
          }
        }
        return 0 === o.length
          ? null
          : (0, n.jsx)(n.Fragment, {
              children: o.map((t) =>
                (0, n.jsx)(
                  'link',
                  {
                    precedence: 'dynamic',
                    rel: 'stylesheet',
                    href: r.assetPrefix + '/_next/' + encodeURI(t),
                    as: 'style',
                  },
                  t
                )
              ),
            });
      }
    },
    1142: function (t, e, r) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (function (t, e) {
          for (var r in e)
            Object.defineProperty(t, r, { enumerable: !0, get: e[r] });
        })(e, {
          formatUrl: function () {
            return o;
          },
          formatWithValidation: function () {
            return a;
          },
          urlObjectKeys: function () {
            return s;
          },
        });
      let n = r(1452)._(r(8323)),
        i = /https?|ftp|gopher|file/;
      function o(t) {
        let { auth: e, hostname: r } = t,
          o = t.protocol || '',
          s = t.pathname || '',
          a = t.hash || '',
          u = t.query || '',
          l = !1;
        (e = e ? encodeURIComponent(e).replace(/%3A/i, ':') + '@' : ''),
          t.host
            ? (l = e + t.host)
            : r &&
              ((l = e + (~r.indexOf(':') ? '[' + r + ']' : r)),
              t.port && (l += ':' + t.port)),
          u &&
            'object' == typeof u &&
            (u = String(n.urlQueryToSearchParams(u)));
        let h = t.search || (u && '?' + u) || '';
        return (
          o && !o.endsWith(':') && (o += ':'),
          t.slashes || ((!o || i.test(o)) && !1 !== l)
            ? ((l = '//' + (l || '')), s && '/' !== s[0] && (s = '/' + s))
            : l || (l = ''),
          a && '#' !== a[0] && (a = '#' + a),
          h && '?' !== h[0] && (h = '?' + h),
          '' +
            o +
            l +
            (s = s.replace(/[?#]/g, encodeURIComponent)) +
            (h = h.replace('#', '%23')) +
            a
        );
      }
      let s = [
        'auth',
        'hash',
        'host',
        'hostname',
        'href',
        'path',
        'pathname',
        'port',
        'protocol',
        'query',
        'search',
        'slashes',
      ];
      function a(t) {
        return o(t);
      }
    },
    9195: function (t, e, r) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (function (t, e) {
          for (var r in e)
            Object.defineProperty(t, r, { enumerable: !0, get: e[r] });
        })(e, {
          getSortedRoutes: function () {
            return n.getSortedRoutes;
          },
          isDynamicRoute: function () {
            return i.isDynamicRoute;
          },
        });
      let n = r(9089),
        i = r(8083);
    },
    20: function (t, e, r) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 }),
        Object.defineProperty(e, 'interpolateAs', {
          enumerable: !0,
          get: function () {
            return o;
          },
        });
      let n = r(1533),
        i = r(3169);
      function o(t, e, r) {
        let o = '',
          s = (0, i.getRouteRegex)(t),
          a = s.groups,
          u = (e !== t ? (0, n.getRouteMatcher)(s)(e) : '') || r;
        o = t;
        let l = Object.keys(a);
        return (
          l.every((t) => {
            let e = u[t] || '',
              { repeat: r, optional: n } = a[t],
              i = '[' + (r ? '...' : '') + t + ']';
            return (
              n && (i = (e ? '' : '/') + '[' + i + ']'),
              r && !Array.isArray(e) && (e = [e]),
              (n || t in u) &&
                (o =
                  o.replace(
                    i,
                    r
                      ? e.map((t) => encodeURIComponent(t)).join('/')
                      : encodeURIComponent(e)
                  ) || '/')
            );
          }) || (o = ''),
          { params: l, result: o }
        );
      }
    },
    8083: function (t, e, r) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 }),
        Object.defineProperty(e, 'isDynamicRoute', {
          enumerable: !0,
          get: function () {
            return o;
          },
        });
      let n = r(2269),
        i = /\/\[[^/]+?\](?=\/|$)/;
      function o(t) {
        return (
          (0, n.isInterceptionRouteAppPath)(t) &&
            (t = (0, n.extractInterceptionRouteInformation)(
              t
            ).interceptedRoute),
          i.test(t)
        );
      }
    },
    8029: function (t, e, r) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 }),
        Object.defineProperty(e, 'isLocalURL', {
          enumerable: !0,
          get: function () {
            return o;
          },
        });
      let n = r(3461),
        i = r(9404);
      function o(t) {
        if (!(0, n.isAbsoluteUrl)(t)) return !0;
        try {
          let e = (0, n.getLocationOrigin)(),
            r = new URL(t, e);
          return r.origin === e && (0, i.hasBasePath)(r.pathname);
        } catch (t) {
          return !1;
        }
      }
    },
    5519: function (t, e) {
      'use strict';
      function r(t, e) {
        let r = {};
        return (
          Object.keys(t).forEach((n) => {
            e.includes(n) || (r[n] = t[n]);
          }),
          r
        );
      }
      Object.defineProperty(e, '__esModule', { value: !0 }),
        Object.defineProperty(e, 'omit', {
          enumerable: !0,
          get: function () {
            return r;
          },
        });
    },
    8323: function (t, e) {
      'use strict';
      function r(t) {
        let e = {};
        return (
          t.forEach((t, r) => {
            void 0 === e[r]
              ? (e[r] = t)
              : Array.isArray(e[r])
              ? e[r].push(t)
              : (e[r] = [e[r], t]);
          }),
          e
        );
      }
      function n(t) {
        return 'string' != typeof t &&
          ('number' != typeof t || isNaN(t)) &&
          'boolean' != typeof t
          ? ''
          : String(t);
      }
      function i(t) {
        let e = new URLSearchParams();
        return (
          Object.entries(t).forEach((t) => {
            let [r, i] = t;
            Array.isArray(i)
              ? i.forEach((t) => e.append(r, n(t)))
              : e.set(r, n(i));
          }),
          e
        );
      }
      function o(t) {
        for (
          var e = arguments.length, r = Array(e > 1 ? e - 1 : 0), n = 1;
          n < e;
          n++
        )
          r[n - 1] = arguments[n];
        return (
          r.forEach((e) => {
            Array.from(e.keys()).forEach((e) => t.delete(e)),
              e.forEach((e, r) => t.append(r, e));
          }),
          t
        );
      }
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (function (t, e) {
          for (var r in e)
            Object.defineProperty(t, r, { enumerable: !0, get: e[r] });
        })(e, {
          assign: function () {
            return o;
          },
          searchParamsToUrlQuery: function () {
            return r;
          },
          urlQueryToSearchParams: function () {
            return i;
          },
        });
    },
    1533: function (t, e, r) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 }),
        Object.defineProperty(e, 'getRouteMatcher', {
          enumerable: !0,
          get: function () {
            return i;
          },
        });
      let n = r(3461);
      function i(t) {
        let { re: e, groups: r } = t;
        return (t) => {
          let i = e.exec(t);
          if (!i) return !1;
          let o = (t) => {
              try {
                return decodeURIComponent(t);
              } catch (t) {
                throw new n.DecodeError('failed to decode param');
              }
            },
            s = {};
          return (
            Object.keys(r).forEach((t) => {
              let e = r[t],
                n = i[e.pos];
              void 0 !== n &&
                (s[t] = ~n.indexOf('/')
                  ? n.split('/').map((t) => o(t))
                  : e.repeat
                  ? [o(n)]
                  : o(n));
            }),
            s
          );
        };
      }
    },
    3169: function (t, e, r) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (function (t, e) {
          for (var r in e)
            Object.defineProperty(t, r, { enumerable: !0, get: e[r] });
        })(e, {
          getNamedMiddlewareRegex: function () {
            return f;
          },
          getNamedRouteRegex: function () {
            return c;
          },
          getRouteRegex: function () {
            return u;
          },
        });
      let n = r(2269),
        i = r(1943),
        o = r(7741);
      function s(t) {
        let e = t.startsWith('[') && t.endsWith(']');
        e && (t = t.slice(1, -1));
        let r = t.startsWith('...');
        return r && (t = t.slice(3)), { key: t, repeat: r, optional: e };
      }
      function a(t) {
        let e = (0, o.removeTrailingSlash)(t).slice(1).split('/'),
          r = {},
          a = 1;
        return {
          parameterizedRoute: e
            .map((t) => {
              let e = n.INTERCEPTION_ROUTE_MARKERS.find((e) => t.startsWith(e)),
                o = t.match(/\[((?:\[.*\])|.+)\]/);
              if (e && o) {
                let { key: t, optional: n, repeat: u } = s(o[1]);
                return (
                  (r[t] = { pos: a++, repeat: u, optional: n }),
                  '/' + (0, i.escapeStringRegexp)(e) + '([^/]+?)'
                );
              }
              if (!o) return '/' + (0, i.escapeStringRegexp)(t);
              {
                let { key: t, repeat: e, optional: n } = s(o[1]);
                return (
                  (r[t] = { pos: a++, repeat: e, optional: n }),
                  e ? (n ? '(?:/(.+?))?' : '/(.+?)') : '/([^/]+?)'
                );
              }
            })
            .join(''),
          groups: r,
        };
      }
      function u(t) {
        let { parameterizedRoute: e, groups: r } = a(t);
        return { re: RegExp('^' + e + '(?:/)?$'), groups: r };
      }
      function l(t) {
        let {
            interceptionMarker: e,
            getSafeRouteKey: r,
            segment: n,
            routeKeys: o,
            keyPrefix: a,
          } = t,
          { key: u, optional: l, repeat: h } = s(n),
          c = u.replace(/\W/g, '');
        a && (c = '' + a + c);
        let f = !1;
        (0 === c.length || c.length > 30) && (f = !0),
          isNaN(parseInt(c.slice(0, 1))) || (f = !0),
          f && (c = r()),
          a ? (o[c] = '' + a + u) : (o[c] = u);
        let d = e ? (0, i.escapeStringRegexp)(e) : '';
        return h
          ? l
            ? '(?:/' + d + '(?<' + c + '>.+?))?'
            : '/' + d + '(?<' + c + '>.+?)'
          : '/' + d + '(?<' + c + '>[^/]+?)';
      }
      function h(t, e) {
        let r;
        let s = (0, o.removeTrailingSlash)(t).slice(1).split('/'),
          a =
            ((r = 0),
            () => {
              let t = '',
                e = ++r;
              for (; e > 0; )
                (t += String.fromCharCode(97 + ((e - 1) % 26))),
                  (e = Math.floor((e - 1) / 26));
              return t;
            }),
          u = {};
        return {
          namedParameterizedRoute: s
            .map((t) => {
              let r = n.INTERCEPTION_ROUTE_MARKERS.some((e) => t.startsWith(e)),
                o = t.match(/\[((?:\[.*\])|.+)\]/);
              if (r && o) {
                let [r] = t.split(o[0]);
                return l({
                  getSafeRouteKey: a,
                  interceptionMarker: r,
                  segment: o[1],
                  routeKeys: u,
                  keyPrefix: e ? 'nxtI' : void 0,
                });
              }
              return o
                ? l({
                    getSafeRouteKey: a,
                    segment: o[1],
                    routeKeys: u,
                    keyPrefix: e ? 'nxtP' : void 0,
                  })
                : '/' + (0, i.escapeStringRegexp)(t);
            })
            .join(''),
          routeKeys: u,
        };
      }
      function c(t, e) {
        let r = h(t, e);
        return {
          ...u(t),
          namedRegex: '^' + r.namedParameterizedRoute + '(?:/)?$',
          routeKeys: r.routeKeys,
        };
      }
      function f(t, e) {
        let { parameterizedRoute: r } = a(t),
          { catchAll: n = !0 } = e;
        if ('/' === r) return { namedRegex: '^/' + (n ? '.*' : '') + '$' };
        let { namedParameterizedRoute: i } = h(t, !1);
        return { namedRegex: '^' + i + (n ? '(?:(/.*)?)' : '') + '$' };
      }
    },
    9089: function (t, e) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 }),
        Object.defineProperty(e, 'getSortedRoutes', {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
      class r {
        insert(t) {
          this._insert(t.split('/').filter(Boolean), [], !1);
        }
        smoosh() {
          return this._smoosh();
        }
        _smoosh(t) {
          void 0 === t && (t = '/');
          let e = [...this.children.keys()].sort();
          null !== this.slugName && e.splice(e.indexOf('[]'), 1),
            null !== this.restSlugName && e.splice(e.indexOf('[...]'), 1),
            null !== this.optionalRestSlugName &&
              e.splice(e.indexOf('[[...]]'), 1);
          let r = e
            .map((e) => this.children.get(e)._smoosh('' + t + e + '/'))
            .reduce((t, e) => [...t, ...e], []);
          if (
            (null !== this.slugName &&
              r.push(
                ...this.children
                  .get('[]')
                  ._smoosh(t + '[' + this.slugName + ']/')
              ),
            !this.placeholder)
          ) {
            let e = '/' === t ? '/' : t.slice(0, -1);
            if (null != this.optionalRestSlugName)
              throw Error(
                'You cannot define a route with the same specificity as a optional catch-all route ("' +
                  e +
                  '" and "' +
                  e +
                  '[[...' +
                  this.optionalRestSlugName +
                  ']]").'
              );
            r.unshift(e);
          }
          return (
            null !== this.restSlugName &&
              r.push(
                ...this.children
                  .get('[...]')
                  ._smoosh(t + '[...' + this.restSlugName + ']/')
              ),
            null !== this.optionalRestSlugName &&
              r.push(
                ...this.children
                  .get('[[...]]')
                  ._smoosh(t + '[[...' + this.optionalRestSlugName + ']]/')
              ),
            r
          );
        }
        _insert(t, e, n) {
          if (0 === t.length) {
            this.placeholder = !1;
            return;
          }
          if (n) throw Error('Catch-all must be the last part of the URL.');
          let i = t[0];
          if (i.startsWith('[') && i.endsWith(']')) {
            let r = i.slice(1, -1),
              s = !1;
            if (
              (r.startsWith('[') &&
                r.endsWith(']') &&
                ((r = r.slice(1, -1)), (s = !0)),
              r.startsWith('...') && ((r = r.substring(3)), (n = !0)),
              r.startsWith('[') || r.endsWith(']'))
            )
              throw Error(
                "Segment names may not start or end with extra brackets ('" +
                  r +
                  "')."
              );
            if (r.startsWith('.'))
              throw Error(
                "Segment names may not start with erroneous periods ('" +
                  r +
                  "')."
              );
            function o(t, r) {
              if (null !== t && t !== r)
                throw Error(
                  "You cannot use different slug names for the same dynamic path ('" +
                    t +
                    "' !== '" +
                    r +
                    "')."
                );
              e.forEach((t) => {
                if (t === r)
                  throw Error(
                    'You cannot have the same slug name "' +
                      r +
                      '" repeat within a single dynamic path'
                  );
                if (t.replace(/\W/g, '') === i.replace(/\W/g, ''))
                  throw Error(
                    'You cannot have the slug names "' +
                      t +
                      '" and "' +
                      r +
                      '" differ only by non-word symbols within a single dynamic path'
                  );
              }),
                e.push(r);
            }
            if (n) {
              if (s) {
                if (null != this.restSlugName)
                  throw Error(
                    'You cannot use both an required and optional catch-all route at the same level ("[...' +
                      this.restSlugName +
                      ']" and "' +
                      t[0] +
                      '" ).'
                  );
                o(this.optionalRestSlugName, r),
                  (this.optionalRestSlugName = r),
                  (i = '[[...]]');
              } else {
                if (null != this.optionalRestSlugName)
                  throw Error(
                    'You cannot use both an optional and required catch-all route at the same level ("[[...' +
                      this.optionalRestSlugName +
                      ']]" and "' +
                      t[0] +
                      '").'
                  );
                o(this.restSlugName, r), (this.restSlugName = r), (i = '[...]');
              }
            } else {
              if (s)
                throw Error(
                  'Optional route parameters are not yet supported ("' +
                    t[0] +
                    '").'
                );
              o(this.slugName, r), (this.slugName = r), (i = '[]');
            }
          }
          this.children.has(i) || this.children.set(i, new r()),
            this.children.get(i)._insert(t.slice(1), e, n);
        }
        constructor() {
          (this.placeholder = !0),
            (this.children = new Map()),
            (this.slugName = null),
            (this.restSlugName = null),
            (this.optionalRestSlugName = null);
        }
      }
      function n(t) {
        let e = new r();
        return t.forEach((t) => e.insert(t)), e.smoosh();
      }
    },
    3461: function (t, e) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (function (t, e) {
          for (var r in e)
            Object.defineProperty(t, r, { enumerable: !0, get: e[r] });
        })(e, {
          DecodeError: function () {
            return p;
          },
          MiddlewareNotFoundError: function () {
            return w;
          },
          MissingStaticPage: function () {
            return g;
          },
          NormalizeError: function () {
            return y;
          },
          PageNotFoundError: function () {
            return m;
          },
          SP: function () {
            return f;
          },
          ST: function () {
            return d;
          },
          WEB_VITALS: function () {
            return r;
          },
          execOnce: function () {
            return n;
          },
          getDisplayName: function () {
            return u;
          },
          getLocationOrigin: function () {
            return s;
          },
          getURL: function () {
            return a;
          },
          isAbsoluteUrl: function () {
            return o;
          },
          isResSent: function () {
            return l;
          },
          loadGetInitialProps: function () {
            return c;
          },
          normalizeRepeatedSlashes: function () {
            return h;
          },
          stringifyError: function () {
            return v;
          },
        });
      let r = ['CLS', 'FCP', 'FID', 'INP', 'LCP', 'TTFB'];
      function n(t) {
        let e,
          r = !1;
        return function () {
          for (var n = arguments.length, i = Array(n), o = 0; o < n; o++)
            i[o] = arguments[o];
          return r || ((r = !0), (e = t(...i))), e;
        };
      }
      let i = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/,
        o = (t) => i.test(t);
      function s() {
        let { protocol: t, hostname: e, port: r } = window.location;
        return t + '//' + e + (r ? ':' + r : '');
      }
      function a() {
        let { href: t } = window.location,
          e = s();
        return t.substring(e.length);
      }
      function u(t) {
        return 'string' == typeof t ? t : t.displayName || t.name || 'Unknown';
      }
      function l(t) {
        return t.finished || t.headersSent;
      }
      function h(t) {
        let e = t.split('?');
        return (
          e[0].replace(/\\/g, '/').replace(/\/\/+/g, '/') +
          (e[1] ? '?' + e.slice(1).join('?') : '')
        );
      }
      async function c(t, e) {
        let r = e.res || (e.ctx && e.ctx.res);
        if (!t.getInitialProps)
          return e.ctx && e.Component
            ? { pageProps: await c(e.Component, e.ctx) }
            : {};
        let n = await t.getInitialProps(e);
        if (r && l(r)) return n;
        if (!n)
          throw Error(
            '"' +
              u(t) +
              '.getInitialProps()" should resolve to an object. But found "' +
              n +
              '" instead.'
          );
        return n;
      }
      let f = 'undefined' != typeof performance,
        d =
          f &&
          ['mark', 'measure', 'getEntriesByName'].every(
            (t) => 'function' == typeof performance[t]
          );
      class p extends Error {}
      class y extends Error {}
      class m extends Error {
        constructor(t) {
          super(),
            (this.code = 'ENOENT'),
            (this.name = 'PageNotFoundError'),
            (this.message = 'Cannot find module for page: ' + t);
        }
      }
      class g extends Error {
        constructor(t, e) {
          super(),
            (this.message =
              'Failed to load static file for page: ' + t + ' ' + e);
        }
      }
      class w extends Error {
        constructor() {
          super(),
            (this.code = 'ENOENT'),
            (this.message = 'Cannot find the middleware module');
        }
      }
      function v(t) {
        return JSON.stringify({ message: t.message, stack: t.stack });
      }
    },
    3466: function (t) {
      'use strict';
      var e = Object.prototype.hasOwnProperty,
        r = '~';
      function n() {}
      function i(t, e, r) {
        (this.fn = t), (this.context = e), (this.once = r || !1);
      }
      function o(t, e, n, o, s) {
        if ('function' != typeof n)
          throw TypeError('The listener must be a function');
        var a = new i(n, o || t, s),
          u = r ? r + e : e;
        return (
          t._events[u]
            ? t._events[u].fn
              ? (t._events[u] = [t._events[u], a])
              : t._events[u].push(a)
            : ((t._events[u] = a), t._eventsCount++),
          t
        );
      }
      function s(t, e) {
        0 == --t._eventsCount ? (t._events = new n()) : delete t._events[e];
      }
      function a() {
        (this._events = new n()), (this._eventsCount = 0);
      }
      Object.create &&
        ((n.prototype = Object.create(null)), new n().__proto__ || (r = !1)),
        (a.prototype.eventNames = function () {
          var t,
            n,
            i = [];
          if (0 === this._eventsCount) return i;
          for (n in (t = this._events))
            e.call(t, n) && i.push(r ? n.slice(1) : n);
          return Object.getOwnPropertySymbols
            ? i.concat(Object.getOwnPropertySymbols(t))
            : i;
        }),
        (a.prototype.listeners = function (t) {
          var e = r ? r + t : t,
            n = this._events[e];
          if (!n) return [];
          if (n.fn) return [n.fn];
          for (var i = 0, o = n.length, s = Array(o); i < o; i++)
            s[i] = n[i].fn;
          return s;
        }),
        (a.prototype.listenerCount = function (t) {
          var e = r ? r + t : t,
            n = this._events[e];
          return n ? (n.fn ? 1 : n.length) : 0;
        }),
        (a.prototype.emit = function (t, e, n, i, o, s) {
          var a = r ? r + t : t;
          if (!this._events[a]) return !1;
          var u,
            l,
            h = this._events[a],
            c = arguments.length;
          if (h.fn) {
            switch ((h.once && this.removeListener(t, h.fn, void 0, !0), c)) {
              case 1:
                return h.fn.call(h.context), !0;
              case 2:
                return h.fn.call(h.context, e), !0;
              case 3:
                return h.fn.call(h.context, e, n), !0;
              case 4:
                return h.fn.call(h.context, e, n, i), !0;
              case 5:
                return h.fn.call(h.context, e, n, i, o), !0;
              case 6:
                return h.fn.call(h.context, e, n, i, o, s), !0;
            }
            for (l = 1, u = Array(c - 1); l < c; l++) u[l - 1] = arguments[l];
            h.fn.apply(h.context, u);
          } else {
            var f,
              d = h.length;
            for (l = 0; l < d; l++)
              switch (
                (h[l].once && this.removeListener(t, h[l].fn, void 0, !0), c)
              ) {
                case 1:
                  h[l].fn.call(h[l].context);
                  break;
                case 2:
                  h[l].fn.call(h[l].context, e);
                  break;
                case 3:
                  h[l].fn.call(h[l].context, e, n);
                  break;
                case 4:
                  h[l].fn.call(h[l].context, e, n, i);
                  break;
                default:
                  if (!u)
                    for (f = 1, u = Array(c - 1); f < c; f++)
                      u[f - 1] = arguments[f];
                  h[l].fn.apply(h[l].context, u);
              }
          }
          return !0;
        }),
        (a.prototype.on = function (t, e, r) {
          return o(this, t, e, r, !1);
        }),
        (a.prototype.once = function (t, e, r) {
          return o(this, t, e, r, !0);
        }),
        (a.prototype.removeListener = function (t, e, n, i) {
          var o = r ? r + t : t;
          if (!this._events[o]) return this;
          if (!e) return s(this, o), this;
          var a = this._events[o];
          if (a.fn)
            a.fn !== e ||
              (i && !a.once) ||
              (n && a.context !== n) ||
              s(this, o);
          else {
            for (var u = 0, l = [], h = a.length; u < h; u++)
              (a[u].fn !== e ||
                (i && !a[u].once) ||
                (n && a[u].context !== n)) &&
                l.push(a[u]);
            l.length
              ? (this._events[o] = 1 === l.length ? l[0] : l)
              : s(this, o);
          }
          return this;
        }),
        (a.prototype.removeAllListeners = function (t) {
          var e;
          return (
            t
              ? ((e = r ? r + t : t), this._events[e] && s(this, e))
              : ((this._events = new n()), (this._eventsCount = 0)),
            this
          );
        }),
        (a.prototype.off = a.prototype.removeListener),
        (a.prototype.addListener = a.prototype.on),
        (a.prefixed = r),
        (a.EventEmitter = a),
        (t.exports = a);
    },
    632: function (t, e, r) {
      /*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */ var n =
          r(9109),
        i = n.Buffer;
      function o(t, e) {
        for (var r in t) e[r] = t[r];
      }
      function s(t, e, r) {
        return i(t, e, r);
      }
      i.from && i.alloc && i.allocUnsafe && i.allocUnsafeSlow
        ? (t.exports = n)
        : (o(n, e), (e.Buffer = s)),
        (s.prototype = Object.create(i.prototype)),
        o(i, s),
        (s.from = function (t, e, r) {
          if ('number' == typeof t)
            throw TypeError('Argument must not be a number');
          return i(t, e, r);
        }),
        (s.alloc = function (t, e, r) {
          if ('number' != typeof t)
            throw TypeError('Argument must be a number');
          var n = i(t);
          return (
            void 0 !== e
              ? 'string' == typeof r
                ? n.fill(e, r)
                : n.fill(e)
              : n.fill(0),
            n
          );
        }),
        (s.allocUnsafe = function (t) {
          if ('number' != typeof t)
            throw TypeError('Argument must be a number');
          return i(t);
        }),
        (s.allocUnsafeSlow = function (t) {
          if ('number' != typeof t)
            throw TypeError('Argument must be a number');
          return n.SlowBuffer(t);
        });
    },
    7139: function (t, e) {
      'use strict';
      function r(t, e, r) {
        return e <= t && t <= r;
      }
      function n(t) {
        if (void 0 === t) return {};
        if (t === Object(t)) return t;
        throw TypeError('Could not convert argument to dictionary');
      }
      function i(t) {
        this.tokens = [].slice.call(t);
      }
      function o(t, e) {
        if (t) throw TypeError('Decoder error');
        return e || 65533;
      }
      i.prototype = {
        endOfStream: function () {
          return !this.tokens.length;
        },
        read: function () {
          return this.tokens.length ? this.tokens.shift() : -1;
        },
        prepend: function (t) {
          if (Array.isArray(t)) for (; t.length; ) this.tokens.unshift(t.pop());
          else this.tokens.unshift(t);
        },
        push: function (t) {
          if (Array.isArray(t)) for (; t.length; ) this.tokens.push(t.shift());
          else this.tokens.push(t);
        },
      };
      var s = 'utf-8';
      function a(t, e) {
        if (!(this instanceof a)) return new a(t, e);
        if ((t = void 0 !== t ? String(t).toLowerCase() : s) !== s)
          throw Error('Encoding not supported. Only utf-8 is supported');
        (e = n(e)),
          (this._streaming = !1),
          (this._BOMseen = !1),
          (this._decoder = null),
          (this._fatal = !!e.fatal),
          (this._ignoreBOM = !!e.ignoreBOM),
          Object.defineProperty(this, 'encoding', { value: 'utf-8' }),
          Object.defineProperty(this, 'fatal', { value: this._fatal }),
          Object.defineProperty(this, 'ignoreBOM', { value: this._ignoreBOM });
      }
      function u(t, e) {
        if (!(this instanceof u)) return new u(t, e);
        if ((t = void 0 !== t ? String(t).toLowerCase() : s) !== s)
          throw Error('Encoding not supported. Only utf-8 is supported');
        (e = n(e)),
          (this._streaming = !1),
          (this._encoder = null),
          (this._options = { fatal: !!e.fatal }),
          Object.defineProperty(this, 'encoding', { value: 'utf-8' });
      }
      function l(t) {
        var e = t.fatal,
          n = 0,
          i = 0,
          s = 0,
          a = 128,
          u = 191;
        this.handler = function (t, l) {
          if (-1 === l && 0 !== s) return (s = 0), o(e);
          if (-1 === l) return -1;
          if (0 === s) {
            if (r(l, 0, 127)) return l;
            if (r(l, 194, 223)) (s = 1), (n = l - 192);
            else if (r(l, 224, 239))
              224 === l && (a = 160),
                237 === l && (u = 159),
                (s = 2),
                (n = l - 224);
            else {
              if (!r(l, 240, 244)) return o(e);
              240 === l && (a = 144),
                244 === l && (u = 143),
                (s = 3),
                (n = l - 240);
            }
            return (n <<= 6 * s), null;
          }
          if (!r(l, a, u))
            return (n = s = i = 0), (a = 128), (u = 191), t.prepend(l), o(e);
          if (
            ((a = 128),
            (u = 191),
            (i += 1),
            (n += (l - 128) << (6 * (s - i))),
            i !== s)
          )
            return null;
          var h = n;
          return (n = s = i = 0), h;
        };
      }
      function h(t) {
        t.fatal,
          (this.handler = function (t, e) {
            if (-1 === e) return -1;
            if (r(e, 0, 127)) return e;
            r(e, 128, 2047)
              ? ((n = 1), (i = 192))
              : r(e, 2048, 65535)
              ? ((n = 2), (i = 224))
              : r(e, 65536, 1114111) && ((n = 3), (i = 240));
            for (var n, i, o = [(e >> (6 * n)) + i]; n > 0; ) {
              var s = e >> (6 * (n - 1));
              o.push(128 | (63 & s)), (n -= 1);
            }
            return o;
          });
      }
      (a.prototype = {
        decode: function (t, e) {
          (r =
            'object' == typeof t && t instanceof ArrayBuffer
              ? new Uint8Array(t)
              : 'object' == typeof t &&
                'buffer' in t &&
                t.buffer instanceof ArrayBuffer
              ? new Uint8Array(t.buffer, t.byteOffset, t.byteLength)
              : new Uint8Array(0)),
            (e = n(e)),
            this._streaming ||
              ((this._decoder = new l({ fatal: this._fatal })),
              (this._BOMseen = !1)),
            (this._streaming = !!e.stream);
          for (
            var r, o, s = new i(r), a = [];
            !s.endOfStream() && -1 !== (o = this._decoder.handler(s, s.read()));

          )
            null !== o && (Array.isArray(o) ? a.push.apply(a, o) : a.push(o));
          if (!this._streaming) {
            do {
              if (-1 === (o = this._decoder.handler(s, s.read()))) break;
              if (null === o) continue;
              Array.isArray(o) ? a.push.apply(a, o) : a.push(o);
            } while (!s.endOfStream());
            this._decoder = null;
          }
          return (
            !a.length ||
              -1 === ['utf-8'].indexOf(this.encoding) ||
              this._ignoreBOM ||
              this._BOMseen ||
              (65279 === a[0]
                ? ((this._BOMseen = !0), a.shift())
                : (this._BOMseen = !0)),
            (function (t) {
              for (var e = '', r = 0; r < t.length; ++r) {
                var n = t[r];
                n <= 65535
                  ? (e += String.fromCharCode(n))
                  : ((n -= 65536),
                    (e += String.fromCharCode(
                      (n >> 10) + 55296,
                      (1023 & n) + 56320
                    )));
              }
              return e;
            })(a)
          );
        },
      }),
        (u.prototype = {
          encode: function (t, e) {
            (t = t ? String(t) : ''),
              (e = n(e)),
              this._streaming || (this._encoder = new h(this._options)),
              (this._streaming = !!e.stream);
            for (
              var r,
                o = [],
                s = new i(
                  (function (t) {
                    for (
                      var e = String(t), r = e.length, n = 0, i = [];
                      n < r;

                    ) {
                      var o = e.charCodeAt(n);
                      if (o < 55296 || o > 57343) i.push(o);
                      else if (56320 <= o && o <= 57343) i.push(65533);
                      else if (55296 <= o && o <= 56319) {
                        if (n === r - 1) i.push(65533);
                        else {
                          var s = t.charCodeAt(n + 1);
                          if (56320 <= s && s <= 57343) {
                            var a = 1023 & o,
                              u = 1023 & s;
                            i.push(65536 + (a << 10) + u), (n += 1);
                          } else i.push(65533);
                        }
                      }
                      n += 1;
                    }
                    return i;
                  })(t)
                );
              !s.endOfStream() &&
              -1 !== (r = this._encoder.handler(s, s.read()));

            )
              Array.isArray(r) ? o.push.apply(o, r) : o.push(r);
            if (!this._streaming) {
              for (; -1 !== (r = this._encoder.handler(s, s.read())); )
                Array.isArray(r) ? o.push.apply(o, r) : o.push(r);
              this._encoder = null;
            }
            return new Uint8Array(o);
          },
        }),
        (e.TextEncoder = u),
        (e.TextDecoder = a);
    },
    4492: function (t, e, r) {
      'use strict';
      /**
       * @license React
       * use-sync-external-store-shim.production.min.js
       *
       * Copyright (c) Facebook, Inc. and its affiliates.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       */ var n = r(2265),
        i =
          'function' == typeof Object.is
            ? Object.is
            : function (t, e) {
                return (
                  (t === e && (0 !== t || 1 / t == 1 / e)) || (t != t && e != e)
                );
              },
        o = n.useState,
        s = n.useEffect,
        a = n.useLayoutEffect,
        u = n.useDebugValue;
      function l(t) {
        var e = t.getSnapshot;
        t = t.value;
        try {
          var r = e();
          return !i(t, r);
        } catch (t) {
          return !0;
        }
      }
      var h =
        'undefined' == typeof window ||
        void 0 === window.document ||
        void 0 === window.document.createElement
          ? function (t, e) {
              return e();
            }
          : function (t, e) {
              var r = e(),
                n = o({ inst: { value: r, getSnapshot: e } }),
                i = n[0].inst,
                h = n[1];
              return (
                a(
                  function () {
                    (i.value = r), (i.getSnapshot = e), l(i) && h({ inst: i });
                  },
                  [t, r, e]
                ),
                s(
                  function () {
                    return (
                      l(i) && h({ inst: i }),
                      t(function () {
                        l(i) && h({ inst: i });
                      })
                    );
                  },
                  [t]
                ),
                u(r),
                r
              );
            };
      e.useSyncExternalStore =
        void 0 !== n.useSyncExternalStore ? n.useSyncExternalStore : h;
    },
    5107: function (t, e, r) {
      'use strict';
      /**
       * @license React
       * use-sync-external-store-shim/with-selector.production.min.js
       *
       * Copyright (c) Facebook, Inc. and its affiliates.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       */ var n = r(2265),
        i = r(554),
        o =
          'function' == typeof Object.is
            ? Object.is
            : function (t, e) {
                return (
                  (t === e && (0 !== t || 1 / t == 1 / e)) || (t != t && e != e)
                );
              },
        s = i.useSyncExternalStore,
        a = n.useRef,
        u = n.useEffect,
        l = n.useMemo,
        h = n.useDebugValue;
      e.useSyncExternalStoreWithSelector = function (t, e, r, n, i) {
        var c = a(null);
        if (null === c.current) {
          var f = { hasValue: !1, value: null };
          c.current = f;
        } else f = c.current;
        var d = s(
          t,
          (c = l(
            function () {
              function t(t) {
                if (!u) {
                  if (
                    ((u = !0), (s = t), (t = n(t)), void 0 !== i && f.hasValue)
                  ) {
                    var e = f.value;
                    if (i(e, t)) return (a = e);
                  }
                  return (a = t);
                }
                if (((e = a), o(s, t))) return e;
                var r = n(t);
                return void 0 !== i && i(e, r) ? e : ((s = t), (a = r));
              }
              var s,
                a,
                u = !1,
                l = void 0 === r ? null : r;
              return [
                function () {
                  return t(e());
                },
                null === l
                  ? void 0
                  : function () {
                      return t(l());
                    },
              ];
            },
            [e, r, n, i]
          ))[0],
          c[1]
        );
        return (
          u(
            function () {
              (f.hasValue = !0), (f.value = d);
            },
            [d]
          ),
          h(d),
          d
        );
      };
    },
    554: function (t, e, r) {
      'use strict';
      t.exports = r(4492);
    },
    5006: function (t, e, r) {
      'use strict';
      t.exports = r(5107);
    },
    3538: function (t, e, r) {
      'use strict';
      r.d(e, {
        v4: function () {
          return l;
        },
      });
      for (
        var n,
          i = new Uint8Array(16),
          o =
            /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,
          s = [],
          a = 0;
        a < 256;
        ++a
      )
        s.push((a + 256).toString(16).substr(1));
      var u = function (t) {
          var e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 0,
            r = (
              s[t[e + 0]] +
              s[t[e + 1]] +
              s[t[e + 2]] +
              s[t[e + 3]] +
              '-' +
              s[t[e + 4]] +
              s[t[e + 5]] +
              '-' +
              s[t[e + 6]] +
              s[t[e + 7]] +
              '-' +
              s[t[e + 8]] +
              s[t[e + 9]] +
              '-' +
              s[t[e + 10]] +
              s[t[e + 11]] +
              s[t[e + 12]] +
              s[t[e + 13]] +
              s[t[e + 14]] +
              s[t[e + 15]]
            ).toLowerCase();
          if (!('string' == typeof r && o.test(r)))
            throw TypeError('Stringified UUID is invalid');
          return r;
        },
        l = function (t, e, r) {
          var o =
            (t = t || {}).random ||
            (
              t.rng ||
              function () {
                if (
                  !n &&
                  !(n =
                    ('undefined' != typeof crypto &&
                      crypto.getRandomValues &&
                      crypto.getRandomValues.bind(crypto)) ||
                    ('undefined' != typeof msCrypto &&
                      'function' == typeof msCrypto.getRandomValues &&
                      msCrypto.getRandomValues.bind(msCrypto)))
                )
                  throw Error(
                    'crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported'
                  );
                return n(i);
              }
            )();
          if (((o[6] = (15 & o[6]) | 64), (o[8] = (63 & o[8]) | 128), e)) {
            r = r || 0;
            for (var s = 0; s < 16; ++s) e[r + s] = o[s];
            return e;
          }
          return u(o);
        };
    },
    5438: function () {},
    1785: function (t) {
      t.exports = {
        style: {
          fontFamily: "'__Inter_aaf875', '__Inter_Fallback_aaf875'",
          fontStyle: 'normal',
        },
        className: '__className_aaf875',
        variable: '__variable_aaf875',
      };
    },
    5332: function (t, e, r) {
      'use strict';
      r.d(e, {
        K: function () {
          return u;
        },
        M: function () {
          return a;
        },
      });
      var n = r(3554),
        i = r(1678);
      /*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */ let o =
          BigInt(0),
        s = BigInt(1);
      function a(t, e) {
        let r = (t, e) => {
            let r = e.negate();
            return t ? r : e;
          },
          n = (t) => ({
            windows: Math.ceil(e / t) + 1,
            windowSize: 2 ** (t - 1),
          });
        return {
          constTimeNegate: r,
          unsafeLadder(e, r) {
            let n = t.ZERO,
              i = e;
            for (; r > o; )
              r & s && (n = n.add(i)), (i = i.double()), (r >>= s);
            return n;
          },
          precomputeWindow(t, e) {
            let { windows: r, windowSize: i } = n(e),
              o = [],
              s = t,
              a = s;
            for (let t = 0; t < r; t++) {
              (a = s), o.push(a);
              for (let t = 1; t < i; t++) (a = a.add(s)), o.push(a);
              s = a.double();
            }
            return o;
          },
          wNAF(e, i, o) {
            let { windows: a, windowSize: u } = n(e),
              l = t.ZERO,
              h = t.BASE,
              c = BigInt(2 ** e - 1),
              f = 2 ** e,
              d = BigInt(e);
            for (let t = 0; t < a; t++) {
              let e = t * u,
                n = Number(o & c);
              (o >>= d), n > u && ((n -= f), (o += s));
              let a = e + Math.abs(n) - 1,
                p = t % 2 != 0,
                y = n < 0;
              0 === n ? (h = h.add(r(p, i[e]))) : (l = l.add(r(y, i[a])));
            }
            return { p: l, f: h };
          },
          wNAFCached(t, e, r, n) {
            let i = t._WINDOW_SIZE || 1,
              o = e.get(t);
            return (
              o ||
                ((o = this.precomputeWindow(t, i)), 1 !== i && e.set(t, n(o))),
              this.wNAF(i, o, r)
            );
          },
        };
      }
      function u(t) {
        return (
          (0, n.OP)(t.Fp),
          (0, i.FF)(
            t,
            { n: 'bigint', h: 'bigint', Gx: 'field', Gy: 'field' },
            { nBitLength: 'isSafeInteger', nByteLength: 'isSafeInteger' }
          ),
          Object.freeze({
            ...(0, n.kK)(t.n, t.nBitLength),
            ...t,
            p: t.Fp.ORDER,
          })
        );
      }
    },
    3554: function (t, e, r) {
      'use strict';
      r.d(e, {
        DV: function () {
          return v;
        },
        OP: function () {
          return m;
        },
        PS: function () {
          return E;
        },
        Tu: function () {
          return p;
        },
        U_: function () {
          return d;
        },
        Us: function () {
          return M;
        },
        gN: function () {
          return w;
        },
        kK: function () {
          return g;
        },
        oA: function () {
          return f;
        },
        wQ: function () {
          return c;
        },
      });
      var n = r(1678);
      /*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */ let i =
          BigInt(0),
        o = BigInt(1),
        s = BigInt(2),
        a = BigInt(3),
        u = BigInt(4),
        l = BigInt(5),
        h = BigInt(8);
      function c(t, e) {
        let r = t % e;
        return r >= i ? r : e + r;
      }
      function f(t, e, r) {
        let n = t;
        for (; e-- > i; ) (n *= n), (n %= r);
        return n;
      }
      function d(t, e) {
        if (t === i || e <= i)
          throw Error(
            `invert: expected positive integers, got n=${t} mod=${e}`
          );
        let r = c(t, e),
          n = e,
          s = i,
          a = o,
          u = o,
          l = i;
        for (; r !== i; ) {
          let t = n / r,
            e = n % r,
            i = s - u * t,
            o = a - l * t;
          (n = r), (r = e), (s = u), (a = l), (u = i), (l = o);
        }
        if (n !== o) throw Error('invert: does not exist');
        return c(s, e);
      }
      BigInt(9), BigInt(16);
      let p = (t, e) => (c(t, e) & o) === o,
        y = [
          'create',
          'isValid',
          'is0',
          'neg',
          'inv',
          'sqrt',
          'sqr',
          'eql',
          'add',
          'sub',
          'mul',
          'pow',
          'div',
          'addN',
          'subN',
          'mulN',
          'sqrN',
        ];
      function m(t) {
        let e = y.reduce((t, e) => ((t[e] = 'function'), t), {
          ORDER: 'bigint',
          MASK: 'bigint',
          BYTES: 'isSafeInteger',
          BITS: 'isSafeInteger',
        });
        return (0, n.FF)(t, e);
      }
      function g(t, e) {
        let r = void 0 !== e ? e : t.toString(2).length;
        return { nBitLength: r, nByteLength: Math.ceil(r / 8) };
      }
      function w(t, e, r = !1, f = {}) {
        if (t <= i) throw Error(`Expected Field ORDER > 0, got ${t}`);
        let { nBitLength: p, nByteLength: y } = g(t, e);
        if (y > 2048)
          throw Error('Field lengths over 2048 bytes are not supported');
        let m = (function (t) {
            if (t % u === a) {
              let e = (t + o) / u;
              return function (t, r) {
                let n = t.pow(r, e);
                if (!t.eql(t.sqr(n), r)) throw Error('Cannot find square root');
                return n;
              };
            }
            if (t % h === l) {
              let e = (t - l) / h;
              return function (t, r) {
                let n = t.mul(r, s),
                  i = t.pow(n, e),
                  o = t.mul(r, i),
                  a = t.mul(t.mul(o, s), i),
                  u = t.mul(o, t.sub(a, t.ONE));
                if (!t.eql(t.sqr(u), r)) throw Error('Cannot find square root');
                return u;
              };
            }
            return (function (t) {
              let e, r, n;
              let a = (t - o) / s;
              for (e = t - o, r = 0; e % s === i; e /= s, r++);
              for (
                n = s;
                n < t &&
                (function (t, e, r) {
                  if (r <= i || e < i) throw Error('Expected power/modulo > 0');
                  if (r === o) return i;
                  let n = o;
                  for (; e > i; )
                    e & o && (n = (n * t) % r), (t = (t * t) % r), (e >>= o);
                  return n;
                })(n, a, t) !==
                  t - o;
                n++
              );
              if (1 === r) {
                let e = (t + o) / u;
                return function (t, r) {
                  let n = t.pow(r, e);
                  if (!t.eql(t.sqr(n), r))
                    throw Error('Cannot find square root');
                  return n;
                };
              }
              let l = (e + o) / s;
              return function (t, i) {
                if (t.pow(i, a) === t.neg(t.ONE))
                  throw Error('Cannot find square root');
                let s = r,
                  u = t.pow(t.mul(t.ONE, n), e),
                  h = t.pow(i, l),
                  c = t.pow(i, e);
                for (; !t.eql(c, t.ONE); ) {
                  if (t.eql(c, t.ZERO)) return t.ZERO;
                  let e = 1;
                  for (let r = t.sqr(c); e < s && !t.eql(r, t.ONE); e++)
                    r = t.sqr(r);
                  let r = t.pow(u, o << BigInt(s - e - 1));
                  (u = t.sqr(r)), (h = t.mul(h, r)), (c = t.mul(c, u)), (s = e);
                }
                return h;
              };
            })(t);
          })(t),
          w = Object.freeze({
            ORDER: t,
            BITS: p,
            BYTES: y,
            MASK: (0, n.dQ)(p),
            ZERO: i,
            ONE: o,
            create: (e) => c(e, t),
            isValid: (e) => {
              if ('bigint' != typeof e)
                throw Error(
                  `Invalid field element: expected bigint, got ${typeof e}`
                );
              return i <= e && e < t;
            },
            is0: (t) => t === i,
            isOdd: (t) => (t & o) === o,
            neg: (e) => c(-e, t),
            eql: (t, e) => t === e,
            sqr: (e) => c(e * e, t),
            add: (e, r) => c(e + r, t),
            sub: (e, r) => c(e - r, t),
            mul: (e, r) => c(e * r, t),
            pow: (t, e) =>
              (function (t, e, r) {
                if (r < i) throw Error('Expected power > 0');
                if (r === i) return t.ONE;
                if (r === o) return e;
                let n = t.ONE,
                  s = e;
                for (; r > i; )
                  r & o && (n = t.mul(n, s)), (s = t.sqr(s)), (r >>= o);
                return n;
              })(w, t, e),
            div: (e, r) => c(e * d(r, t), t),
            sqrN: (t) => t * t,
            addN: (t, e) => t + e,
            subN: (t, e) => t - e,
            mulN: (t, e) => t * e,
            inv: (e) => d(e, t),
            sqrt: f.sqrt || ((t) => m(w, t)),
            invertBatch: (t) =>
              (function (t, e) {
                let r = Array(e.length),
                  n = e.reduce(
                    (e, n, i) => (t.is0(n) ? e : ((r[i] = e), t.mul(e, n))),
                    t.ONE
                  ),
                  i = t.inv(n);
                return (
                  e.reduceRight(
                    (e, n, i) =>
                      t.is0(n) ? e : ((r[i] = t.mul(e, r[i])), t.mul(e, n)),
                    i
                  ),
                  r
                );
              })(w, t),
            cmov: (t, e, r) => (r ? e : t),
            toBytes: (t) => (r ? (0, n.S5)(t, y) : (0, n.tL)(t, y)),
            fromBytes: (t) => {
              if (t.length !== y)
                throw Error(`Fp.fromBytes: expected ${y}, got ${t.length}`);
              return r ? (0, n.ty)(t) : (0, n.bytesToNumberBE)(t);
            },
          });
        return Object.freeze(w);
      }
      function v(t, e) {
        if (!t.isOdd) throw Error("Field doesn't have isOdd");
        let r = t.sqrt(e);
        return t.isOdd(r) ? t.neg(r) : r;
      }
      function b(t) {
        if ('bigint' != typeof t) throw Error('field order must be bigint');
        return Math.ceil(t.toString(2).length / 8);
      }
      function E(t) {
        let e = b(t);
        return e + Math.ceil(e / 2);
      }
      function M(t, e, r = !1) {
        let i = t.length,
          s = b(e),
          a = E(e);
        if (i < 16 || i < a || i > 1024)
          throw Error(`expected ${a}-1024 bytes of input, got ${i}`);
        let u = c(r ? (0, n.bytesToNumberBE)(t) : (0, n.ty)(t), e - o) + o;
        return r ? (0, n.S5)(u, s) : (0, n.tL)(u, s);
      }
    },
    1678: function (t, e, r) {
      'use strict';
      r.d(e, {
        FF: function () {
          return S;
        },
        S5: function () {
          return m;
        },
        _t: function () {
          return o;
        },
        bytesToNumberBE: function () {
          return d;
        },
        ci: function () {
          return u;
        },
        dQ: function () {
          return v;
        },
        eV: function () {
          return w;
        },
        gk: function () {
          return s;
        },
        hexToBytes: function () {
          return f;
        },
        n$: function () {
          return M;
        },
        ql: function () {
          return g;
        },
        tL: function () {
          return y;
        },
        ty: function () {
          return p;
        },
      }),
        BigInt(0);
      let n = BigInt(1),
        i = BigInt(2);
      function o(t) {
        return (
          t instanceof Uint8Array ||
          (null != t &&
            'object' == typeof t &&
            'Uint8Array' === t.constructor.name)
        );
      }
      function s(t) {
        if (!o(t)) throw Error('Uint8Array expected');
      }
      let a = Array.from({ length: 256 }, (t, e) =>
        e.toString(16).padStart(2, '0')
      );
      function u(t) {
        s(t);
        let e = '';
        for (let r = 0; r < t.length; r++) e += a[t[r]];
        return e;
      }
      function l(t) {
        if ('string' != typeof t)
          throw Error('hex string expected, got ' + typeof t);
        return BigInt('' === t ? '0' : `0x${t}`);
      }
      let h = { _0: 48, _9: 57, _A: 65, _F: 70, _a: 97, _f: 102 };
      function c(t) {
        return t >= h._0 && t <= h._9
          ? t - h._0
          : t >= h._A && t <= h._F
          ? t - (h._A - 10)
          : t >= h._a && t <= h._f
          ? t - (h._a - 10)
          : void 0;
      }
      function f(t) {
        if ('string' != typeof t)
          throw Error('hex string expected, got ' + typeof t);
        let e = t.length,
          r = e / 2;
        if (e % 2)
          throw Error(
            'padded hex string expected, got unpadded hex of length ' + e
          );
        let n = new Uint8Array(r);
        for (let e = 0, i = 0; e < r; e++, i += 2) {
          let r = c(t.charCodeAt(i)),
            o = c(t.charCodeAt(i + 1));
          if (void 0 === r || void 0 === o)
            throw Error(
              'hex string expected, got non-hex character "' +
                (t[i] + t[i + 1]) +
                '" at index ' +
                i
            );
          n[e] = 16 * r + o;
        }
        return n;
      }
      function d(t) {
        return l(u(t));
      }
      function p(t) {
        return s(t), l(u(Uint8Array.from(t).reverse()));
      }
      function y(t, e) {
        return f(t.toString(16).padStart(2 * e, '0'));
      }
      function m(t, e) {
        return y(t, e).reverse();
      }
      function g(t, e, r) {
        let n;
        if ('string' == typeof e)
          try {
            n = f(e);
          } catch (r) {
            throw Error(
              `${t} must be valid hex string, got "${e}". Cause: ${r}`
            );
          }
        else if (o(e)) n = Uint8Array.from(e);
        else throw Error(`${t} must be hex string or Uint8Array`);
        let i = n.length;
        if ('number' == typeof r && i !== r)
          throw Error(`${t} expected ${r} bytes, got ${i}`);
        return n;
      }
      function w(...t) {
        let e = 0;
        for (let r = 0; r < t.length; r++) {
          let n = t[r];
          s(n), (e += n.length);
        }
        let r = new Uint8Array(e);
        for (let e = 0, n = 0; e < t.length; e++) {
          let i = t[e];
          r.set(i, n), (n += i.length);
        }
        return r;
      }
      let v = (t) => (i << BigInt(t - 1)) - n,
        b = (t) => new Uint8Array(t),
        E = (t) => Uint8Array.from(t);
      function M(t, e, r) {
        if ('number' != typeof t || t < 2)
          throw Error('hashLen must be a number');
        if ('number' != typeof e || e < 2)
          throw Error('qByteLen must be a number');
        if ('function' != typeof r) throw Error('hmacFn must be a function');
        let n = b(t),
          i = b(t),
          o = 0,
          s = () => {
            n.fill(1), i.fill(0), (o = 0);
          },
          a = (...t) => r(i, n, ...t),
          u = (t = b()) => {
            (i = a(E([0]), t)),
              (n = a()),
              0 !== t.length && ((i = a(E([1]), t)), (n = a()));
          },
          l = () => {
            if (o++ >= 1e3) throw Error('drbg: tried 1000 values');
            let t = 0,
              r = [];
            for (; t < e; ) {
              let e = (n = a()).slice();
              r.push(e), (t += n.length);
            }
            return w(...r);
          };
        return (t, e) => {
          let r;
          for (s(), u(t); !(r = e(l())); ) u();
          return s(), r;
        };
      }
      let _ = {
        bigint: (t) => 'bigint' == typeof t,
        function: (t) => 'function' == typeof t,
        boolean: (t) => 'boolean' == typeof t,
        string: (t) => 'string' == typeof t,
        stringOrUint8Array: (t) => 'string' == typeof t || o(t),
        isSafeInteger: (t) => Number.isSafeInteger(t),
        array: (t) => Array.isArray(t),
        field: (t, e) => e.Fp.isValid(t),
        hash: (t) =>
          'function' == typeof t && Number.isSafeInteger(t.outputLen),
      };
      function S(t, e, r = {}) {
        let n = (e, r, n) => {
          let i = _[r];
          if ('function' != typeof i)
            throw Error(`Invalid validator "${r}", expected function`);
          let o = t[e];
          if ((!n || void 0 !== o) && !i(o, t))
            throw Error(
              `Invalid param ${String(e)}=${o} (${typeof o}), expected ${r}`
            );
        };
        for (let [t, r] of Object.entries(e)) n(t, r, !1);
        for (let [t, e] of Object.entries(r)) n(t, e, !0);
        return t;
      }
    },
    2552: function (t, e, r) {
      'use strict';
      r.d(e, {
        UN: function () {
          return T;
        },
      });
      var n = r(4815),
        i = r(5390),
        o = r(8104);
      let [s, a] = i.ZP.split(
          [
            '0x428a2f98d728ae22',
            '0x7137449123ef65cd',
            '0xb5c0fbcfec4d3b2f',
            '0xe9b5dba58189dbbc',
            '0x3956c25bf348b538',
            '0x59f111f1b605d019',
            '0x923f82a4af194f9b',
            '0xab1c5ed5da6d8118',
            '0xd807aa98a3030242',
            '0x12835b0145706fbe',
            '0x243185be4ee4b28c',
            '0x550c7dc3d5ffb4e2',
            '0x72be5d74f27b896f',
            '0x80deb1fe3b1696b1',
            '0x9bdc06a725c71235',
            '0xc19bf174cf692694',
            '0xe49b69c19ef14ad2',
            '0xefbe4786384f25e3',
            '0x0fc19dc68b8cd5b5',
            '0x240ca1cc77ac9c65',
            '0x2de92c6f592b0275',
            '0x4a7484aa6ea6e483',
            '0x5cb0a9dcbd41fbd4',
            '0x76f988da831153b5',
            '0x983e5152ee66dfab',
            '0xa831c66d2db43210',
            '0xb00327c898fb213f',
            '0xbf597fc7beef0ee4',
            '0xc6e00bf33da88fc2',
            '0xd5a79147930aa725',
            '0x06ca6351e003826f',
            '0x142929670a0e6e70',
            '0x27b70a8546d22ffc',
            '0x2e1b21385c26c926',
            '0x4d2c6dfc5ac42aed',
            '0x53380d139d95b3df',
            '0x650a73548baf63de',
            '0x766a0abb3c77b2a8',
            '0x81c2c92e47edaee6',
            '0x92722c851482353b',
            '0xa2bfe8a14cf10364',
            '0xa81a664bbc423001',
            '0xc24b8b70d0f89791',
            '0xc76c51a30654be30',
            '0xd192e819d6ef5218',
            '0xd69906245565a910',
            '0xf40e35855771202a',
            '0x106aa07032bbd1b8',
            '0x19a4c116b8d2d0c8',
            '0x1e376c085141ab53',
            '0x2748774cdf8eeb99',
            '0x34b0bcb5e19b48a8',
            '0x391c0cb3c5c95a63',
            '0x4ed8aa4ae3418acb',
            '0x5b9cca4f7763e373',
            '0x682e6ff3d6b2b8a3',
            '0x748f82ee5defb2fc',
            '0x78a5636f43172f60',
            '0x84c87814a1f0ab72',
            '0x8cc702081a6439ec',
            '0x90befffa23631e28',
            '0xa4506cebde82bde9',
            '0xbef9a3f7b2c67915',
            '0xc67178f2e372532b',
            '0xca273eceea26619c',
            '0xd186b8c721c0c207',
            '0xeada7dd6cde0eb1e',
            '0xf57d4f7fee6ed178',
            '0x06f067aa72176fba',
            '0x0a637dc5a2c898a6',
            '0x113f9804bef90dae',
            '0x1b710b35131c471b',
            '0x28db77f523047d84',
            '0x32caab7b40c72493',
            '0x3c9ebe0a15c9bebc',
            '0x431d67c49c100d4c',
            '0x4cc5d4becb3e42b6',
            '0x597f299cfc657e2a',
            '0x5fcb6fab3ad6faec',
            '0x6c44198c4a475817',
          ].map((t) => BigInt(t))
        ),
        u = new Uint32Array(80),
        l = new Uint32Array(80);
      class h extends n.VR {
        constructor() {
          super(128, 64, 16, !1),
            (this.Ah = 1779033703),
            (this.Al = -205731576),
            (this.Bh = -1150833019),
            (this.Bl = -2067093701),
            (this.Ch = 1013904242),
            (this.Cl = -23791573),
            (this.Dh = -1521486534),
            (this.Dl = 1595750129),
            (this.Eh = 1359893119),
            (this.El = -1377402159),
            (this.Fh = -1694144372),
            (this.Fl = 725511199),
            (this.Gh = 528734635),
            (this.Gl = -79577749),
            (this.Hh = 1541459225),
            (this.Hl = 327033209);
        }
        get() {
          let {
            Ah: t,
            Al: e,
            Bh: r,
            Bl: n,
            Ch: i,
            Cl: o,
            Dh: s,
            Dl: a,
            Eh: u,
            El: l,
            Fh: h,
            Fl: c,
            Gh: f,
            Gl: d,
            Hh: p,
            Hl: y,
          } = this;
          return [t, e, r, n, i, o, s, a, u, l, h, c, f, d, p, y];
        }
        set(t, e, r, n, i, o, s, a, u, l, h, c, f, d, p, y) {
          (this.Ah = 0 | t),
            (this.Al = 0 | e),
            (this.Bh = 0 | r),
            (this.Bl = 0 | n),
            (this.Ch = 0 | i),
            (this.Cl = 0 | o),
            (this.Dh = 0 | s),
            (this.Dl = 0 | a),
            (this.Eh = 0 | u),
            (this.El = 0 | l),
            (this.Fh = 0 | h),
            (this.Fl = 0 | c),
            (this.Gh = 0 | f),
            (this.Gl = 0 | d),
            (this.Hh = 0 | p),
            (this.Hl = 0 | y);
        }
        process(t, e) {
          for (let r = 0; r < 16; r++, e += 4)
            (u[r] = t.getUint32(e)), (l[r] = t.getUint32((e += 4)));
          for (let t = 16; t < 80; t++) {
            let e = 0 | u[t - 15],
              r = 0 | l[t - 15],
              n =
                i.ZP.rotrSH(e, r, 1) ^
                i.ZP.rotrSH(e, r, 8) ^
                i.ZP.shrSH(e, r, 7),
              o =
                i.ZP.rotrSL(e, r, 1) ^
                i.ZP.rotrSL(e, r, 8) ^
                i.ZP.shrSL(e, r, 7),
              s = 0 | u[t - 2],
              a = 0 | l[t - 2],
              h =
                i.ZP.rotrSH(s, a, 19) ^
                i.ZP.rotrBH(s, a, 61) ^
                i.ZP.shrSH(s, a, 6),
              c =
                i.ZP.rotrSL(s, a, 19) ^
                i.ZP.rotrBL(s, a, 61) ^
                i.ZP.shrSL(s, a, 6),
              f = i.ZP.add4L(o, c, l[t - 7], l[t - 16]),
              d = i.ZP.add4H(f, n, h, u[t - 7], u[t - 16]);
            (u[t] = 0 | d), (l[t] = 0 | f);
          }
          let {
            Ah: r,
            Al: n,
            Bh: o,
            Bl: h,
            Ch: c,
            Cl: f,
            Dh: d,
            Dl: p,
            Eh: y,
            El: m,
            Fh: g,
            Fl: w,
            Gh: v,
            Gl: b,
            Hh: E,
            Hl: M,
          } = this;
          for (let t = 0; t < 80; t++) {
            let e =
                i.ZP.rotrSH(y, m, 14) ^
                i.ZP.rotrSH(y, m, 18) ^
                i.ZP.rotrBH(y, m, 41),
              _ =
                i.ZP.rotrSL(y, m, 14) ^
                i.ZP.rotrSL(y, m, 18) ^
                i.ZP.rotrBL(y, m, 41),
              S = (y & g) ^ (~y & v),
              A = (m & w) ^ (~m & b),
              x = i.ZP.add5L(M, _, A, a[t], l[t]),
              O = i.ZP.add5H(x, E, e, S, s[t], u[t]),
              I = 0 | x,
              R =
                i.ZP.rotrSH(r, n, 28) ^
                i.ZP.rotrBH(r, n, 34) ^
                i.ZP.rotrBH(r, n, 39),
              B =
                i.ZP.rotrSL(r, n, 28) ^
                i.ZP.rotrBL(r, n, 34) ^
                i.ZP.rotrBL(r, n, 39),
              C = (r & o) ^ (r & c) ^ (o & c),
              L = (n & h) ^ (n & f) ^ (h & f);
            (E = 0 | v),
              (M = 0 | b),
              (v = 0 | g),
              (b = 0 | w),
              (g = 0 | y),
              (w = 0 | m),
              ({ h: y, l: m } = i.ZP.add(0 | d, 0 | p, 0 | O, 0 | I)),
              (d = 0 | c),
              (p = 0 | f),
              (c = 0 | o),
              (f = 0 | h),
              (o = 0 | r),
              (h = 0 | n);
            let T = i.ZP.add3L(I, B, L);
            (r = i.ZP.add3H(T, O, R, C)), (n = 0 | T);
          }
          ({ h: r, l: n } = i.ZP.add(0 | this.Ah, 0 | this.Al, 0 | r, 0 | n)),
            ({ h: o, l: h } = i.ZP.add(0 | this.Bh, 0 | this.Bl, 0 | o, 0 | h)),
            ({ h: c, l: f } = i.ZP.add(0 | this.Ch, 0 | this.Cl, 0 | c, 0 | f)),
            ({ h: d, l: p } = i.ZP.add(0 | this.Dh, 0 | this.Dl, 0 | d, 0 | p)),
            ({ h: y, l: m } = i.ZP.add(0 | this.Eh, 0 | this.El, 0 | y, 0 | m)),
            ({ h: g, l: w } = i.ZP.add(0 | this.Fh, 0 | this.Fl, 0 | g, 0 | w)),
            ({ h: v, l: b } = i.ZP.add(0 | this.Gh, 0 | this.Gl, 0 | v, 0 | b)),
            ({ h: E, l: M } = i.ZP.add(0 | this.Hh, 0 | this.Hl, 0 | E, 0 | M)),
            this.set(r, n, o, h, c, f, d, p, y, m, g, w, v, b, E, M);
        }
        roundClean() {
          u.fill(0), l.fill(0);
        }
        destroy() {
          this.buffer.fill(0),
            this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
        }
      }
      let c = (0, o.hE)(() => new h());
      var f = r(3554),
        d = r(1678),
        p = r(5332);
      /*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */ let y =
          BigInt(0),
        m = BigInt(1),
        g = BigInt(2),
        w = BigInt(8),
        v = { zip215: !0 },
        b = BigInt(
          '57896044618658097711785492504343953926634992332820282019728792003956564819949'
        ),
        E = BigInt(
          '19681161376707505956807079304988542015446066515923890162744021073123829784752'
        ),
        M = BigInt(0),
        _ = BigInt(1),
        S = BigInt(2),
        A = BigInt(5),
        x = BigInt(10),
        O = BigInt(20),
        I = BigInt(40),
        R = BigInt(80);
      function B(t, e) {
        let r = (0, f.wQ)(e * e * e, b),
          n = (function (t) {
            let e = (((t * t) % b) * t) % b,
              r = ((0, f.oA)(e, S, b) * e) % b,
              n = ((0, f.oA)(r, _, b) * t) % b,
              i = ((0, f.oA)(n, A, b) * n) % b,
              o = ((0, f.oA)(i, x, b) * i) % b,
              s = ((0, f.oA)(o, O, b) * o) % b,
              a = ((0, f.oA)(s, I, b) * s) % b,
              u = ((0, f.oA)(a, R, b) * a) % b,
              l = ((0, f.oA)(u, R, b) * a) % b,
              h = ((0, f.oA)(l, x, b) * i) % b;
            return { pow_p_5_8: ((0, f.oA)(h, S, b) * t) % b, b2: e };
          })(t * (0, f.wQ)(r * r * e, b)).pow_p_5_8,
          i = (0, f.wQ)(t * r * n, b),
          o = (0, f.wQ)(e * i * i, b),
          s = i,
          a = (0, f.wQ)(i * E, b),
          u = o === t,
          l = o === (0, f.wQ)(-t, b),
          h = o === (0, f.wQ)(-t * E, b);
        return (
          u && (i = s),
          (l || h) && (i = a),
          (0, f.Tu)(i, b) && (i = (0, f.wQ)(-i, b)),
          { isValid: u || l, value: i }
        );
      }
      let C = (0, f.gN)(b, void 0, !0),
        L = {
          a: BigInt(-1),
          d: BigInt(
            '37095705934669439343138083508754565189542113879843219016388785533085940283555'
          ),
          Fp: C,
          n: BigInt(
            '7237005577332262213973186563042994240857116359379907606001950938285454250989'
          ),
          h: BigInt(8),
          Gx: BigInt(
            '15112221349535400772501151409588531511454012693041857206046113283949847762202'
          ),
          Gy: BigInt(
            '46316835694926478169428394003475163141307993866256225615783033603165251855960'
          ),
          hash: c,
          randomBytes: o.O6,
          adjustScalarBytes: function (t) {
            return (t[0] &= 248), (t[31] &= 127), (t[31] |= 64), t;
          },
          uvRatio: B,
        },
        T = (function (t) {
          let e = (function (t) {
              let e = (0, p.K)(t);
              return (
                d.FF(
                  t,
                  {
                    hash: 'function',
                    a: 'bigint',
                    d: 'bigint',
                    randomBytes: 'function',
                  },
                  {
                    adjustScalarBytes: 'function',
                    domain: 'function',
                    uvRatio: 'function',
                    mapToCurve: 'function',
                  }
                ),
                Object.freeze({ ...e })
              );
            })(t),
            {
              Fp: r,
              n: n,
              prehash: i,
              hash: o,
              randomBytes: s,
              nByteLength: a,
              h: u,
            } = e,
            l = g << (BigInt(8 * a) - m),
            h = r.create,
            c =
              e.uvRatio ||
              ((t, e) => {
                try {
                  return { isValid: !0, value: r.sqrt(t * r.inv(e)) };
                } catch (t) {
                  return { isValid: !1, value: y };
                }
              }),
            b = e.adjustScalarBytes || ((t) => t),
            E =
              e.domain ||
              ((t, e, r) => {
                if (e.length || r)
                  throw Error('Contexts/pre-hash are not supported');
                return t;
              }),
            M = (t) => 'bigint' == typeof t && y < t,
            _ = (t, e) => M(t) && M(e) && t < e,
            S = (t) => t === y || _(t, l);
          function A(t, e) {
            if (_(t, e)) return t;
            throw Error(`Expected valid scalar < ${e}, got ${typeof t} ${t}`);
          }
          function x(t) {
            return t === y ? t : A(t, n);
          }
          let O = new Map();
          function I(t) {
            if (!(t instanceof R)) throw Error('ExtendedPoint expected');
          }
          class R {
            constructor(t, e, r, n) {
              if (
                ((this.ex = t),
                (this.ey = e),
                (this.ez = r),
                (this.et = n),
                !S(t))
              )
                throw Error('x required');
              if (!S(e)) throw Error('y required');
              if (!S(r)) throw Error('z required');
              if (!S(n)) throw Error('t required');
            }
            get x() {
              return this.toAffine().x;
            }
            get y() {
              return this.toAffine().y;
            }
            static fromAffine(t) {
              if (t instanceof R) throw Error('extended point not allowed');
              let { x: e, y: r } = t || {};
              if (!S(e) || !S(r)) throw Error('invalid affine point');
              return new R(e, r, m, h(e * r));
            }
            static normalizeZ(t) {
              let e = r.invertBatch(t.map((t) => t.ez));
              return t.map((t, r) => t.toAffine(e[r])).map(R.fromAffine);
            }
            _setWindowSize(t) {
              (this._WINDOW_SIZE = t), O.delete(this);
            }
            assertValidity() {
              let { a: t, d: r } = e;
              if (this.is0()) throw Error('bad point: ZERO');
              let { ex: n, ey: i, ez: o, et: s } = this,
                a = h(n * n),
                u = h(i * i),
                l = h(o * o),
                c = h(l * l),
                f = h(a * t);
              if (h(l * h(f + u)) !== h(c + h(r * h(a * u))))
                throw Error('bad point: equation left != right (1)');
              if (h(n * i) !== h(o * s))
                throw Error('bad point: equation left != right (2)');
            }
            equals(t) {
              I(t);
              let { ex: e, ey: r, ez: n } = this,
                { ex: i, ey: o, ez: s } = t,
                a = h(e * s),
                u = h(i * n),
                l = h(r * s),
                c = h(o * n);
              return a === u && l === c;
            }
            is0() {
              return this.equals(R.ZERO);
            }
            negate() {
              return new R(h(-this.ex), this.ey, this.ez, h(-this.et));
            }
            double() {
              let { a: t } = e,
                { ex: r, ey: n, ez: i } = this,
                o = h(r * r),
                s = h(n * n),
                a = h(g * h(i * i)),
                u = h(t * o),
                l = r + n,
                c = h(h(l * l) - o - s),
                f = u + s,
                d = f - a,
                p = u - s,
                y = h(c * d),
                m = h(f * p),
                w = h(c * p);
              return new R(y, m, h(d * f), w);
            }
            add(t) {
              I(t);
              let { a: r, d: n } = e,
                { ex: i, ey: o, ez: s, et: a } = this,
                { ex: u, ey: l, ez: c, et: f } = t;
              if (r === BigInt(-1)) {
                let t = h((o - i) * (l + u)),
                  e = h((o + i) * (l - u)),
                  r = h(e - t);
                if (r === y) return this.double();
                let n = h(s * g * f),
                  d = h(a * g * c),
                  p = d + n,
                  m = e + t,
                  w = d - n,
                  v = h(p * r),
                  b = h(m * w),
                  E = h(p * w);
                return new R(v, b, h(r * m), E);
              }
              let d = h(i * u),
                p = h(o * l),
                m = h(a * n * f),
                w = h(s * c),
                v = h((i + o) * (u + l) - d - p),
                b = w - m,
                E = w + m,
                M = h(p - r * d),
                _ = h(v * b),
                S = h(E * M),
                A = h(v * M);
              return new R(_, S, h(b * E), A);
            }
            subtract(t) {
              return this.add(t.negate());
            }
            wNAF(t) {
              return L.wNAFCached(this, O, t, R.normalizeZ);
            }
            multiply(t) {
              let { p: e, f: r } = this.wNAF(A(t, n));
              return R.normalizeZ([e, r])[0];
            }
            multiplyUnsafe(t) {
              let e = x(t);
              return e === y
                ? C
                : this.equals(C) || e === m
                ? this
                : this.equals(B)
                ? this.wNAF(e).p
                : L.unsafeLadder(this, e);
            }
            isSmallOrder() {
              return this.multiplyUnsafe(u).is0();
            }
            isTorsionFree() {
              return L.unsafeLadder(this, n).is0();
            }
            toAffine(t) {
              let { ex: e, ey: n, ez: i } = this,
                o = this.is0();
              null == t && (t = o ? w : r.inv(i));
              let s = h(e * t),
                a = h(n * t),
                u = h(i * t);
              if (o) return { x: y, y: m };
              if (u !== m) throw Error('invZ was invalid');
              return { x: s, y: a };
            }
            clearCofactor() {
              let { h: t } = e;
              return t === m ? this : this.multiplyUnsafe(t);
            }
            static fromHex(t, n = !1) {
              let { d: i, a: o } = e,
                s = r.BYTES,
                a = (t = (0, d.ql)('pointHex', t, s)).slice(),
                u = t[s - 1];
              a[s - 1] = -129 & u;
              let f = d.ty(a);
              f === y || (n ? A(f, l) : A(f, r.ORDER));
              let p = h(f * f),
                { isValid: g, value: w } = c(h(p - m), h(i * p - o));
              if (!g) throw Error('Point.fromHex: invalid y coordinate');
              let v = (w & m) === m,
                b = (128 & u) != 0;
              if (!n && w === y && b)
                throw Error('Point.fromHex: x=0 and x_0=1');
              return b !== v && (w = h(-w)), R.fromAffine({ x: w, y: f });
            }
            static fromPrivateKey(t) {
              return N(t).point;
            }
            toRawBytes() {
              let { x: t, y: e } = this.toAffine(),
                n = d.S5(e, r.BYTES);
              return (n[n.length - 1] |= t & m ? 128 : 0), n;
            }
            toHex() {
              return d.ci(this.toRawBytes());
            }
          }
          (R.BASE = new R(e.Gx, e.Gy, m, h(e.Gx * e.Gy))),
            (R.ZERO = new R(y, m, m, y));
          let { BASE: B, ZERO: C } = R,
            L = (0, p.M)(R, 8 * a);
          function T(t) {
            var e;
            return (e = d.ty(t)), (0, f.wQ)(e, n);
          }
          function N(t) {
            t = (0, d.ql)('private key', t, a);
            let e = (0, d.ql)('hashed private key', o(t), 2 * a),
              r = b(e.slice(0, a)),
              n = e.slice(a, 2 * a),
              i = T(r),
              s = B.multiply(i),
              u = s.toRawBytes();
            return { head: r, prefix: n, scalar: i, point: s, pointBytes: u };
          }
          function P(t = new Uint8Array(), ...e) {
            return T(o(E(d.eV(...e), (0, d.ql)('context', t), !!i)));
          }
          return (
            B._setWindowSize(8),
            {
              CURVE: e,
              getPublicKey: function (t) {
                return N(t).pointBytes;
              },
              sign: function (t, e, o = {}) {
                var s;
                (t = (0, d.ql)('message', t)), i && (t = i(t));
                let { prefix: u, scalar: l, pointBytes: h } = N(e),
                  c = P(o.context, u, t),
                  p = B.multiply(c).toRawBytes(),
                  y = ((s = c + P(o.context, p, h, t) * l), (0, f.wQ)(s, n));
                x(y);
                let m = d.eV(p, d.S5(y, r.BYTES));
                return (0, d.ql)('result', m, 2 * a);
              },
              verify: function (t, e, n, o = v) {
                let s, a, u;
                let { context: l, zip215: h } = o,
                  c = r.BYTES;
                (t = (0, d.ql)('signature', t, 2 * c)),
                  (e = (0, d.ql)('message', e)),
                  i && (e = i(e));
                let f = d.ty(t.slice(c, 2 * c));
                try {
                  (s = R.fromHex(n, h)),
                    (a = R.fromHex(t.slice(0, c), h)),
                    (u = B.multiplyUnsafe(f));
                } catch (t) {
                  return !1;
                }
                if (!h && s.isSmallOrder()) return !1;
                let p = P(l, a.toRawBytes(), s.toRawBytes(), e);
                return a
                  .add(s.multiplyUnsafe(p))
                  .subtract(u)
                  .clearCofactor()
                  .equals(R.ZERO);
              },
              ExtendedPoint: R,
              utils: {
                getExtendedPublicKey: N,
                randomPrivateKey: () => s(r.BYTES),
                precompute: (t = 8, e = R.BASE) => (
                  e._setWindowSize(t), e.multiply(BigInt(3)), e
                ),
              },
            }
          );
        })(L);
      ({ ...L });
      let N = (C.ORDER + BigInt(3)) / BigInt(8);
      function P(t) {
        if (!(t instanceof W)) throw Error('RistrettoPoint expected');
      }
      C.pow(S, N),
        C.sqrt(C.neg(C.ONE)),
        C.ORDER,
        BigInt(5),
        BigInt(8),
        BigInt(486662),
        (0, f.DV)(C, C.neg(BigInt(486664)));
      let U = BigInt(
          '25063068953384623474111414158702152701244531502492656460079210482610430750235'
        ),
        k = BigInt(
          '54469307008909316920995813868745141605393597292927456921205312896311721017578'
        ),
        j = BigInt(
          '1159843021668779879193775521855586647937357759715417654439879720876111806838'
        ),
        D = BigInt(
          '40440834346308536858101042469323190826248399146238708352240133220865137265952'
        ),
        z = (t) => B(_, t),
        q = BigInt(
          '0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff'
        ),
        F = (t) => T.CURVE.Fp.create(bytesToNumberLE(t) & q);
      function $(t) {
        let { d: e } = T.CURVE,
          r = T.CURVE.Fp.ORDER,
          n = T.CURVE.Fp.create,
          i = n(null * t * t),
          o = n((i + _) * j),
          s = BigInt(-1),
          a = n((s - e * i) * n(i + e)),
          { isValid: u, value: l } = B(o, a),
          h = n(l * t);
        isNegativeLE(h, r) || (h = n(-h)), u || (l = h), u || (s = i);
        let c = n(s * (i - _) * D - a),
          f = l * l,
          d = n((l + l) * a),
          p = n(c * U),
          y = n(_ - f),
          m = n(_ + f);
        return new T.ExtendedPoint(n(d * m), n(y * p), n(p * m), n(d * y));
      }
      class W {
        constructor(t) {
          this.ep = t;
        }
        static fromAffine(t) {
          return new W(T.ExtendedPoint.fromAffine(t));
        }
        static hashToCurve(t) {
          let e = $(F((t = ensureBytes('ristrettoHash', t, 64)).slice(0, 32))),
            r = $(F(t.slice(32, 64)));
          return new W(e.add(r));
        }
        static fromHex(t) {
          t = ensureBytes('ristrettoHex', t, 32);
          let { a: e, d: r } = T.CURVE,
            n = T.CURVE.Fp.ORDER,
            i = T.CURVE.Fp.create,
            o =
              'RistrettoPoint.fromHex: the hex is not valid encoding of RistrettoPoint',
            s = F(t);
          if (!equalBytes(numberToBytesLE(s, 32), t) || isNegativeLE(s, n))
            throw Error(o);
          let a = i(s * s),
            u = i(_ + e * a),
            l = i(_ - e * a),
            h = i(u * u),
            c = i(l * l),
            f = i(e * r * h - c),
            { isValid: d, value: p } = z(i(f * c)),
            y = i(p * l),
            m = i(p * y * f),
            g = i((s + s) * y);
          isNegativeLE(g, n) && (g = i(-g));
          let w = i(u * m),
            v = i(g * w);
          if (!d || isNegativeLE(v, n) || w === M) throw Error(o);
          return new W(new T.ExtendedPoint(g, w, _, v));
        }
        toRawBytes() {
          let t,
            { ex: e, ey: r, ez: n, et: i } = this.ep,
            o = T.CURVE.Fp.ORDER,
            s = T.CURVE.Fp.create,
            a = s(s(n + r) * s(n - r)),
            u = s(e * r),
            l = s(u * u),
            { value: h } = z(s(a * l)),
            c = s(h * a),
            f = s(h * u),
            d = s(c * f * i);
          if (isNegativeLE(i * d, o)) {
            let n = s(null * r),
              i = s(null * e);
            (e = n), (r = i), (t = s(c * k));
          } else t = f;
          isNegativeLE(e * d, o) && (r = s(-r));
          let p = s((n - r) * t);
          return isNegativeLE(p, o) && (p = s(-p)), numberToBytesLE(p, 32);
        }
        toHex() {
          return bytesToHex(this.toRawBytes());
        }
        toString() {
          return this.toHex();
        }
        equals(t) {
          P(t);
          let { ex: e, ey: r } = this.ep,
            { ex: n, ey: i } = t.ep,
            o = T.CURVE.Fp.create,
            s = o(e * i) === o(r * n),
            a = o(r * i) === o(e * n);
          return s || a;
        }
        add(t) {
          return P(t), new W(this.ep.add(t.ep));
        }
        subtract(t) {
          return P(t), new W(this.ep.subtract(t.ep));
        }
        multiply(t) {
          return new W(this.ep.multiply(t));
        }
        multiplyUnsafe(t) {
          return new W(this.ep.multiplyUnsafe(t));
        }
        double() {
          return new W(this.ep.double());
        }
        negate() {
          return new W(this.ep.negate());
        }
      }
    },
    666: function (t, e, r) {
      'use strict';
      r.d(e, {
        kA: function () {
          return _;
        },
      });
      var n = r(5530),
        i = r(3554),
        o = r(5376),
        s = r(8104);
      class a extends s.kb {
        constructor(t, e) {
          super(), (this.finished = !1), (this.destroyed = !1), (0, o.vp)(t);
          let r = (0, s.O0)(e);
          if (
            ((this.iHash = t.create()), 'function' != typeof this.iHash.update)
          )
            throw Error('Expected instance of class which extends utils.Hash');
          (this.blockLen = this.iHash.blockLen),
            (this.outputLen = this.iHash.outputLen);
          let n = this.blockLen,
            i = new Uint8Array(n);
          i.set(r.length > n ? t.create().update(r).digest() : r);
          for (let t = 0; t < i.length; t++) i[t] ^= 54;
          this.iHash.update(i), (this.oHash = t.create());
          for (let t = 0; t < i.length; t++) i[t] ^= 106;
          this.oHash.update(i), i.fill(0);
        }
        update(t) {
          return (0, o.Gg)(this), this.iHash.update(t), this;
        }
        digestInto(t) {
          (0, o.Gg)(this),
            (0, o.aI)(t, this.outputLen),
            (this.finished = !0),
            this.iHash.digestInto(t),
            this.oHash.update(t),
            this.oHash.digestInto(t),
            this.destroy();
        }
        digest() {
          let t = new Uint8Array(this.oHash.outputLen);
          return this.digestInto(t), t;
        }
        _cloneInto(t) {
          t || (t = Object.create(Object.getPrototypeOf(this), {}));
          let {
            oHash: e,
            iHash: r,
            finished: n,
            destroyed: i,
            blockLen: o,
            outputLen: s,
          } = this;
          return (
            (t.finished = n),
            (t.destroyed = i),
            (t.blockLen = o),
            (t.outputLen = s),
            (t.oHash = e._cloneInto(t.oHash)),
            (t.iHash = r._cloneInto(t.iHash)),
            t
          );
        }
        destroy() {
          (this.destroyed = !0), this.oHash.destroy(), this.iHash.destroy();
        }
      }
      let u = (t, e, r) => new a(t, e).update(r).digest();
      u.create = (t, e) => new a(t, e);
      var l = r(1678),
        h = r(5332);
      let { bytesToNumberBE: c, hexToBytes: f } = l,
        d = {
          Err: class extends Error {
            constructor(t = '') {
              super(t);
            }
          },
          _parseInt(t) {
            let { Err: e } = d;
            if (t.length < 2 || 2 !== t[0])
              throw new e('Invalid signature integer tag');
            let r = t[1],
              n = t.subarray(2, r + 2);
            if (!r || n.length !== r)
              throw new e('Invalid signature integer: wrong length');
            if (128 & n[0]) throw new e('Invalid signature integer: negative');
            if (0 === n[0] && !(128 & n[1]))
              throw new e(
                'Invalid signature integer: unnecessary leading zero'
              );
            return { d: c(n), l: t.subarray(r + 2) };
          },
          toSig(t) {
            let { Err: e } = d,
              r = 'string' == typeof t ? f(t) : t;
            l.gk(r);
            let n = r.length;
            if (n < 2 || 48 != r[0]) throw new e('Invalid signature tag');
            if (r[1] !== n - 2)
              throw new e('Invalid signature: incorrect length');
            let { d: i, l: o } = d._parseInt(r.subarray(2)),
              { d: s, l: a } = d._parseInt(o);
            if (a.length)
              throw new e('Invalid signature: left bytes after parsing');
            return { r: i, s };
          },
          hexFromSig(t) {
            let e = (t) => (8 & Number.parseInt(t[0], 16) ? '00' + t : t),
              r = (t) => {
                let e = t.toString(16);
                return 1 & e.length ? `0${e}` : e;
              },
              n = e(r(t.s)),
              i = e(r(t.r)),
              o = n.length / 2,
              s = i.length / 2,
              a = r(o),
              u = r(s);
            return `30${r(s + o + 4)}02${u}${i}02${a}${n}`;
          },
        },
        p = BigInt(0),
        y = BigInt(1),
        m = (BigInt(2), BigInt(3));
      BigInt(4);
      /*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */ let g =
          BigInt(
            '0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f'
          ),
        w = BigInt(
          '0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141'
        ),
        v = BigInt(1),
        b = BigInt(2),
        E = (t, e) => (t + e / b) / e,
        M = (0, i.gN)(g, void 0, void 0, {
          sqrt: function (t) {
            let e = BigInt(3),
              r = BigInt(6),
              n = BigInt(11),
              o = BigInt(22),
              s = BigInt(23),
              a = BigInt(44),
              u = BigInt(88),
              l = (t * t * t) % g,
              h = (l * l * t) % g,
              c = ((0, i.oA)(h, e, g) * h) % g,
              f = ((0, i.oA)(c, e, g) * h) % g,
              d = ((0, i.oA)(f, b, g) * l) % g,
              p = ((0, i.oA)(d, n, g) * d) % g,
              y = ((0, i.oA)(p, o, g) * p) % g,
              m = ((0, i.oA)(y, a, g) * y) % g,
              w = ((0, i.oA)(m, u, g) * m) % g,
              v = ((0, i.oA)(w, a, g) * y) % g,
              E = ((0, i.oA)(v, e, g) * h) % g,
              _ = ((0, i.oA)(E, s, g) * p) % g,
              S = ((0, i.oA)(_, r, g) * l) % g,
              A = (0, i.oA)(S, b, g);
            if (!M.eql(M.sqr(A), t)) throw Error('Cannot find square root');
            return A;
          },
        }),
        _ = (function (t, e) {
          let r = (e) =>
            (function (t) {
              let e = (function (t) {
                  let e = (0, h.K)(t);
                  return (
                    l.FF(
                      e,
                      {
                        hash: 'hash',
                        hmac: 'function',
                        randomBytes: 'function',
                      },
                      {
                        bits2int: 'function',
                        bits2int_modN: 'function',
                        lowS: 'boolean',
                      }
                    ),
                    Object.freeze({ lowS: !0, ...e })
                  );
                })(t),
                { Fp: r, n: n } = e,
                o = r.BYTES + 1,
                s = 2 * r.BYTES + 1;
              function a(t) {
                return i.wQ(t, n);
              }
              function u(t) {
                return i.U_(t, n);
              }
              let {
                  ProjectivePoint: c,
                  normPrivateKeyToScalar: f,
                  weierstrassEquation: g,
                  isWithinCurveOrder: w,
                } = (function (t) {
                  let e =
                      /*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */ (function (
                        t
                      ) {
                        let e = (0, h.K)(t);
                        l.FF(
                          e,
                          { a: 'field', b: 'field' },
                          {
                            allowedPrivateKeyLengths: 'array',
                            wrapPrivateKey: 'boolean',
                            isTorsionFree: 'function',
                            clearCofactor: 'function',
                            allowInfinityPoint: 'boolean',
                            fromBytes: 'function',
                            toBytes: 'function',
                          }
                        );
                        let { endo: r, Fp: n, a: i } = e;
                        if (r) {
                          if (!n.eql(i, n.ZERO))
                            throw Error(
                              'Endomorphism can only be defined for Koblitz curves that have a=0'
                            );
                          if (
                            'object' != typeof r ||
                            'bigint' != typeof r.beta ||
                            'function' != typeof r.splitScalar
                          )
                            throw Error(
                              'Expected endomorphism with beta: bigint and splitScalar: function'
                            );
                        }
                        return Object.freeze({ ...e });
                      })(t),
                    { Fp: r } = e,
                    n =
                      e.toBytes ||
                      ((t, e, n) => {
                        let i = e.toAffine();
                        return l.eV(
                          Uint8Array.from([4]),
                          r.toBytes(i.x),
                          r.toBytes(i.y)
                        );
                      }),
                    o =
                      e.fromBytes ||
                      ((t) => {
                        let e = t.subarray(1);
                        return {
                          x: r.fromBytes(e.subarray(0, r.BYTES)),
                          y: r.fromBytes(e.subarray(r.BYTES, 2 * r.BYTES)),
                        };
                      });
                  function s(t) {
                    let { a: n, b: i } = e,
                      o = r.sqr(t),
                      s = r.mul(o, t);
                    return r.add(r.add(s, r.mul(t, n)), i);
                  }
                  if (!r.eql(r.sqr(e.Gy), s(e.Gx)))
                    throw Error('bad generator point: equation left != right');
                  function a(t) {
                    return 'bigint' == typeof t && p < t && t < e.n;
                  }
                  function u(t) {
                    if (!a(t))
                      throw Error(
                        'Expected valid bigint: 0 < bigint < curve.n'
                      );
                  }
                  function c(t) {
                    let r;
                    let {
                      allowedPrivateKeyLengths: n,
                      nByteLength: o,
                      wrapPrivateKey: s,
                      n: a,
                    } = e;
                    if (n && 'bigint' != typeof t) {
                      if (
                        (l._t(t) && (t = l.ci(t)),
                        'string' != typeof t || !n.includes(t.length))
                      )
                        throw Error('Invalid key');
                      t = t.padStart(2 * o, '0');
                    }
                    try {
                      r =
                        'bigint' == typeof t
                          ? t
                          : l.bytesToNumberBE((0, l.ql)('private key', t, o));
                    } catch (e) {
                      throw Error(
                        `private key must be ${o} bytes, hex or bigint, not ${typeof t}`
                      );
                    }
                    return s && (r = i.wQ(r, a)), u(r), r;
                  }
                  let f = new Map();
                  function d(t) {
                    if (!(t instanceof g))
                      throw Error('ProjectivePoint expected');
                  }
                  class g {
                    constructor(t, e, n) {
                      if (
                        ((this.px = t),
                        (this.py = e),
                        (this.pz = n),
                        null == t || !r.isValid(t))
                      )
                        throw Error('x required');
                      if (null == e || !r.isValid(e)) throw Error('y required');
                      if (null == n || !r.isValid(n)) throw Error('z required');
                    }
                    static fromAffine(t) {
                      let { x: e, y: n } = t || {};
                      if (!t || !r.isValid(e) || !r.isValid(n))
                        throw Error('invalid affine point');
                      if (t instanceof g)
                        throw Error('projective point not allowed');
                      let i = (t) => r.eql(t, r.ZERO);
                      return i(e) && i(n) ? g.ZERO : new g(e, n, r.ONE);
                    }
                    get x() {
                      return this.toAffine().x;
                    }
                    get y() {
                      return this.toAffine().y;
                    }
                    static normalizeZ(t) {
                      let e = r.invertBatch(t.map((t) => t.pz));
                      return t
                        .map((t, r) => t.toAffine(e[r]))
                        .map(g.fromAffine);
                    }
                    static fromHex(t) {
                      let e = g.fromAffine(o((0, l.ql)('pointHex', t)));
                      return e.assertValidity(), e;
                    }
                    static fromPrivateKey(t) {
                      return g.BASE.multiply(c(t));
                    }
                    _setWindowSize(t) {
                      (this._WINDOW_SIZE = t), f.delete(this);
                    }
                    assertValidity() {
                      if (this.is0()) {
                        if (e.allowInfinityPoint && !r.is0(this.py)) return;
                        throw Error('bad point: ZERO');
                      }
                      let { x: t, y: n } = this.toAffine();
                      if (!r.isValid(t) || !r.isValid(n))
                        throw Error('bad point: x or y not FE');
                      let i = r.sqr(n),
                        o = s(t);
                      if (!r.eql(i, o))
                        throw Error('bad point: equation left != right');
                      if (!this.isTorsionFree())
                        throw Error('bad point: not in prime-order subgroup');
                    }
                    hasEvenY() {
                      let { y: t } = this.toAffine();
                      if (r.isOdd) return !r.isOdd(t);
                      throw Error("Field doesn't support isOdd");
                    }
                    equals(t) {
                      d(t);
                      let { px: e, py: n, pz: i } = this,
                        { px: o, py: s, pz: a } = t,
                        u = r.eql(r.mul(e, a), r.mul(o, i)),
                        l = r.eql(r.mul(n, a), r.mul(s, i));
                      return u && l;
                    }
                    negate() {
                      return new g(this.px, r.neg(this.py), this.pz);
                    }
                    double() {
                      let { a: t, b: n } = e,
                        i = r.mul(n, m),
                        { px: o, py: s, pz: a } = this,
                        u = r.ZERO,
                        l = r.ZERO,
                        h = r.ZERO,
                        c = r.mul(o, o),
                        f = r.mul(s, s),
                        d = r.mul(a, a),
                        p = r.mul(o, s);
                      return (
                        (p = r.add(p, p)),
                        (h = r.mul(o, a)),
                        (h = r.add(h, h)),
                        (u = r.mul(t, h)),
                        (l = r.mul(i, d)),
                        (l = r.add(u, l)),
                        (u = r.sub(f, l)),
                        (l = r.add(f, l)),
                        (l = r.mul(u, l)),
                        (u = r.mul(p, u)),
                        (h = r.mul(i, h)),
                        (d = r.mul(t, d)),
                        (p = r.sub(c, d)),
                        (p = r.mul(t, p)),
                        (p = r.add(p, h)),
                        (h = r.add(c, c)),
                        (c = r.add(h, c)),
                        (c = r.add(c, d)),
                        (c = r.mul(c, p)),
                        (l = r.add(l, c)),
                        (d = r.mul(s, a)),
                        (d = r.add(d, d)),
                        (c = r.mul(d, p)),
                        (u = r.sub(u, c)),
                        (h = r.mul(d, f)),
                        (h = r.add(h, h)),
                        new g(u, l, (h = r.add(h, h)))
                      );
                    }
                    add(t) {
                      d(t);
                      let { px: n, py: i, pz: o } = this,
                        { px: s, py: a, pz: u } = t,
                        l = r.ZERO,
                        h = r.ZERO,
                        c = r.ZERO,
                        f = e.a,
                        p = r.mul(e.b, m),
                        y = r.mul(n, s),
                        w = r.mul(i, a),
                        v = r.mul(o, u),
                        b = r.add(n, i),
                        E = r.add(s, a);
                      (b = r.mul(b, E)),
                        (E = r.add(y, w)),
                        (b = r.sub(b, E)),
                        (E = r.add(n, o));
                      let M = r.add(s, u);
                      return (
                        (E = r.mul(E, M)),
                        (M = r.add(y, v)),
                        (E = r.sub(E, M)),
                        (M = r.add(i, o)),
                        (l = r.add(a, u)),
                        (M = r.mul(M, l)),
                        (l = r.add(w, v)),
                        (M = r.sub(M, l)),
                        (c = r.mul(f, E)),
                        (l = r.mul(p, v)),
                        (c = r.add(l, c)),
                        (l = r.sub(w, c)),
                        (c = r.add(w, c)),
                        (h = r.mul(l, c)),
                        (w = r.add(y, y)),
                        (w = r.add(w, y)),
                        (v = r.mul(f, v)),
                        (E = r.mul(p, E)),
                        (w = r.add(w, v)),
                        (v = r.sub(y, v)),
                        (v = r.mul(f, v)),
                        (E = r.add(E, v)),
                        (y = r.mul(w, E)),
                        (h = r.add(h, y)),
                        (y = r.mul(M, E)),
                        (l = r.mul(b, l)),
                        (l = r.sub(l, y)),
                        (y = r.mul(b, w)),
                        (c = r.mul(M, c)),
                        new g(l, h, (c = r.add(c, y)))
                      );
                    }
                    subtract(t) {
                      return this.add(t.negate());
                    }
                    is0() {
                      return this.equals(g.ZERO);
                    }
                    wNAF(t) {
                      return v.wNAFCached(this, f, t, (t) => {
                        let e = r.invertBatch(t.map((t) => t.pz));
                        return t
                          .map((t, r) => t.toAffine(e[r]))
                          .map(g.fromAffine);
                      });
                    }
                    multiplyUnsafe(t) {
                      let n = g.ZERO;
                      if (t === p) return n;
                      if ((u(t), t === y)) return this;
                      let { endo: i } = e;
                      if (!i) return v.unsafeLadder(this, t);
                      let {
                          k1neg: o,
                          k1: s,
                          k2neg: a,
                          k2: l,
                        } = i.splitScalar(t),
                        h = n,
                        c = n,
                        f = this;
                      for (; s > p || l > p; )
                        s & y && (h = h.add(f)),
                          l & y && (c = c.add(f)),
                          (f = f.double()),
                          (s >>= y),
                          (l >>= y);
                      return (
                        o && (h = h.negate()),
                        a && (c = c.negate()),
                        (c = new g(r.mul(c.px, i.beta), c.py, c.pz)),
                        h.add(c)
                      );
                    }
                    multiply(t) {
                      let n, i;
                      u(t);
                      let { endo: o } = e;
                      if (o) {
                        let {
                            k1neg: e,
                            k1: s,
                            k2neg: a,
                            k2: u,
                          } = o.splitScalar(t),
                          { p: l, f: h } = this.wNAF(s),
                          { p: c, f: f } = this.wNAF(u);
                        (l = v.constTimeNegate(e, l)),
                          (c = v.constTimeNegate(a, c)),
                          (c = new g(r.mul(c.px, o.beta), c.py, c.pz)),
                          (n = l.add(c)),
                          (i = h.add(f));
                      } else {
                        let { p: e, f: r } = this.wNAF(t);
                        (n = e), (i = r);
                      }
                      return g.normalizeZ([n, i])[0];
                    }
                    multiplyAndAddUnsafe(t, e, r) {
                      let n = g.BASE,
                        i = (t, e) =>
                          e !== p && e !== y && t.equals(n)
                            ? t.multiply(e)
                            : t.multiplyUnsafe(e),
                        o = i(this, e).add(i(t, r));
                      return o.is0() ? void 0 : o;
                    }
                    toAffine(t) {
                      let { px: e, py: n, pz: i } = this,
                        o = this.is0();
                      null == t && (t = o ? r.ONE : r.inv(i));
                      let s = r.mul(e, t),
                        a = r.mul(n, t),
                        u = r.mul(i, t);
                      if (o) return { x: r.ZERO, y: r.ZERO };
                      if (!r.eql(u, r.ONE)) throw Error('invZ was invalid');
                      return { x: s, y: a };
                    }
                    isTorsionFree() {
                      let { h: t, isTorsionFree: r } = e;
                      if (t === y) return !0;
                      if (r) return r(g, this);
                      throw Error(
                        'isTorsionFree() has not been declared for the elliptic curve'
                      );
                    }
                    clearCofactor() {
                      let { h: t, clearCofactor: r } = e;
                      return t === y
                        ? this
                        : r
                        ? r(g, this)
                        : this.multiplyUnsafe(e.h);
                    }
                    toRawBytes(t = !0) {
                      return this.assertValidity(), n(g, this, t);
                    }
                    toHex(t = !0) {
                      return l.ci(this.toRawBytes(t));
                    }
                  }
                  (g.BASE = new g(e.Gx, e.Gy, r.ONE)),
                    (g.ZERO = new g(r.ZERO, r.ONE, r.ZERO));
                  let w = e.nBitLength,
                    v = (0, h.M)(g, e.endo ? Math.ceil(w / 2) : w);
                  return {
                    CURVE: e,
                    ProjectivePoint: g,
                    normPrivateKeyToScalar: c,
                    weierstrassEquation: s,
                    isWithinCurveOrder: a,
                  };
                })({
                  ...e,
                  toBytes(t, e, n) {
                    let i = e.toAffine(),
                      o = r.toBytes(i.x),
                      s = l.eV;
                    return n
                      ? s(Uint8Array.from([e.hasEvenY() ? 2 : 3]), o)
                      : s(Uint8Array.from([4]), o, r.toBytes(i.y));
                  },
                  fromBytes(t) {
                    let e = t.length,
                      n = t[0],
                      i = t.subarray(1);
                    if (e === o && (2 === n || 3 === n)) {
                      let t;
                      let e = l.bytesToNumberBE(i);
                      if (!(p < e && e < r.ORDER))
                        throw Error('Point is not on curve');
                      let o = g(e);
                      try {
                        t = r.sqrt(o);
                      } catch (t) {
                        throw Error(
                          'Point is not on curve' +
                            (t instanceof Error ? ': ' + t.message : '')
                        );
                      }
                      return (
                        ((1 & n) == 1) != ((t & y) === y) && (t = r.neg(t)),
                        { x: e, y: t }
                      );
                    }
                    if (e === s && 4 === n)
                      return {
                        x: r.fromBytes(i.subarray(0, r.BYTES)),
                        y: r.fromBytes(i.subarray(r.BYTES, 2 * r.BYTES)),
                      };
                    throw Error(
                      `Point of length ${e} was invalid. Expected ${o} compressed bytes or ${s} uncompressed bytes`
                    );
                  },
                }),
                v = (t) => l.ci(l.tL(t, e.nByteLength)),
                b = (t, e, r) => l.bytesToNumberBE(t.slice(e, r));
              class E {
                constructor(t, e, r) {
                  (this.r = t),
                    (this.s = e),
                    (this.recovery = r),
                    this.assertValidity();
                }
                static fromCompact(t) {
                  let r = e.nByteLength;
                  return new E(
                    b((t = (0, l.ql)('compactSignature', t, 2 * r)), 0, r),
                    b(t, r, 2 * r)
                  );
                }
                static fromDER(t) {
                  let { r: e, s: r } = d.toSig((0, l.ql)('DER', t));
                  return new E(e, r);
                }
                assertValidity() {
                  if (!w(this.r)) throw Error('r must be 0 < r < CURVE.n');
                  if (!w(this.s)) throw Error('s must be 0 < s < CURVE.n');
                }
                addRecoveryBit(t) {
                  return new E(this.r, this.s, t);
                }
                recoverPublicKey(t) {
                  let { r: n, s: i, recovery: o } = this,
                    s = S((0, l.ql)('msgHash', t));
                  if (null == o || ![0, 1, 2, 3].includes(o))
                    throw Error('recovery id invalid');
                  let h = 2 === o || 3 === o ? n + e.n : n;
                  if (h >= r.ORDER) throw Error('recovery id 2 or 3 invalid');
                  let f = (1 & o) == 0 ? '02' : '03',
                    d = c.fromHex(f + v(h)),
                    p = u(h),
                    y = a(-s * p),
                    m = a(i * p),
                    g = c.BASE.multiplyAndAddUnsafe(d, y, m);
                  if (!g) throw Error('point at infinify');
                  return g.assertValidity(), g;
                }
                hasHighS() {
                  return this.s > n >> y;
                }
                normalizeS() {
                  return this.hasHighS()
                    ? new E(this.r, a(-this.s), this.recovery)
                    : this;
                }
                toDERRawBytes() {
                  return l.hexToBytes(this.toDERHex());
                }
                toDERHex() {
                  return d.hexFromSig({ r: this.r, s: this.s });
                }
                toCompactRawBytes() {
                  return l.hexToBytes(this.toCompactHex());
                }
                toCompactHex() {
                  return v(this.r) + v(this.s);
                }
              }
              function M(t) {
                let e = l._t(t),
                  r = 'string' == typeof t,
                  n = (e || r) && t.length;
                return e
                  ? n === o || n === s
                  : r
                  ? n === 2 * o || n === 2 * s
                  : t instanceof c;
              }
              let _ =
                  e.bits2int ||
                  function (t) {
                    let r = l.bytesToNumberBE(t),
                      n = 8 * t.length - e.nBitLength;
                    return n > 0 ? r >> BigInt(n) : r;
                  },
                S =
                  e.bits2int_modN ||
                  function (t) {
                    return a(_(t));
                  },
                A = l.dQ(e.nBitLength);
              function x(t) {
                if ('bigint' != typeof t) throw Error('bigint expected');
                if (!(p <= t && t < A))
                  throw Error(`bigint expected < 2^${e.nBitLength}`);
                return l.tL(t, e.nByteLength);
              }
              let O = { lowS: e.lowS, prehash: !1 },
                I = { lowS: e.lowS, prehash: !1 };
              return (
                c.BASE._setWindowSize(8),
                {
                  CURVE: e,
                  getPublicKey: function (t, e = !0) {
                    return c.fromPrivateKey(t).toRawBytes(e);
                  },
                  getSharedSecret: function (t, e, r = !0) {
                    if (M(t)) throw Error('first arg must be private key');
                    if (!M(e)) throw Error('second arg must be public key');
                    return c.fromHex(e).multiply(f(t)).toRawBytes(r);
                  },
                  sign: function (t, i, o = O) {
                    let { seed: s, k2sig: h } = (function (t, i, o = O) {
                      if (['recovered', 'canonical'].some((t) => t in o))
                        throw Error('sign() legacy options not supported');
                      let { hash: s, randomBytes: h } = e,
                        { lowS: d, prehash: m, extraEntropy: g } = o;
                      null == d && (d = !0),
                        (t = (0, l.ql)('msgHash', t)),
                        m && (t = (0, l.ql)('prehashed msgHash', s(t)));
                      let v = S(t),
                        b = f(i),
                        M = [x(b), x(v)];
                      if (null != g && !1 !== g) {
                        let t = !0 === g ? h(r.BYTES) : g;
                        M.push((0, l.ql)('extraEntropy', t));
                      }
                      return {
                        seed: l.eV(...M),
                        k2sig: function (t) {
                          let e = _(t);
                          if (!w(e)) return;
                          let r = u(e),
                            i = c.BASE.multiply(e).toAffine(),
                            o = a(i.x);
                          if (o === p) return;
                          let s = a(r * a(v + o * b));
                          if (s === p) return;
                          let l = (i.x === o ? 0 : 2) | Number(i.y & y),
                            h = s;
                          if (d && s > n >> y)
                            (h = s > n >> y ? a(-s) : s), (l ^= 1);
                          return new E(o, h, l);
                        },
                      };
                    })(t, i, o);
                    return l.n$(e.hash.outputLen, e.nByteLength, e.hmac)(s, h);
                  },
                  verify: function (t, r, n, i = I) {
                    let o, s;
                    if (
                      ((r = (0, l.ql)('msgHash', r)),
                      (n = (0, l.ql)('publicKey', n)),
                      'strict' in i)
                    )
                      throw Error('options.strict was renamed to lowS');
                    let { lowS: h, prehash: f } = i;
                    try {
                      if ('string' == typeof t || l._t(t))
                        try {
                          s = E.fromDER(t);
                        } catch (e) {
                          if (!(e instanceof d.Err)) throw e;
                          s = E.fromCompact(t);
                        }
                      else if (
                        'object' == typeof t &&
                        'bigint' == typeof t.r &&
                        'bigint' == typeof t.s
                      ) {
                        let { r: e, s: r } = t;
                        s = new E(e, r);
                      } else throw Error('PARSE');
                      o = c.fromHex(n);
                    } catch (t) {
                      if ('PARSE' === t.message)
                        throw Error(
                          'signature must be Signature instance, Uint8Array or hex string'
                        );
                      return !1;
                    }
                    if (h && s.hasHighS()) return !1;
                    f && (r = e.hash(r));
                    let { r: p, s: y } = s,
                      m = S(r),
                      g = u(y),
                      w = a(m * g),
                      v = a(p * g),
                      b = c.BASE.multiplyAndAddUnsafe(o, w, v)?.toAffine();
                    return !!b && a(b.x) === p;
                  },
                  ProjectivePoint: c,
                  Signature: E,
                  utils: {
                    isValidPrivateKey(t) {
                      try {
                        return f(t), !0;
                      } catch (t) {
                        return !1;
                      }
                    },
                    normPrivateKeyToScalar: f,
                    randomPrivateKey: () => {
                      let t = i.PS(e.n);
                      return i.Us(e.randomBytes(t), e.n);
                    },
                    precompute: (t = 8, e = c.BASE) => (
                      e._setWindowSize(t), e.multiply(BigInt(3)), e
                    ),
                  },
                }
              );
            })({
              ...t,
              hash: e,
              hmac: (t, ...r) => u(e, t, (0, s.eV)(...r)),
              randomBytes: s.O6,
            });
          return Object.freeze({ ...r(e), create: r });
        })(
          {
            a: BigInt(0),
            b: BigInt(7),
            Fp: M,
            n: w,
            Gx: BigInt(
              '55066263022277343669578718895168534326250603453777594175500187360389116729240'
            ),
            Gy: BigInt(
              '32670510020758816978083085130507043184471273380659243275938904335757337482424'
            ),
            h: BigInt(1),
            lowS: !0,
            endo: {
              beta: BigInt(
                '0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee'
              ),
              splitScalar: (t) => {
                let e = BigInt('0x3086d221a7d46bcde86c90e49284eb15'),
                  r = -v * BigInt('0xe4437ed6010e88286f547fa90abfe4c3'),
                  n = BigInt('0x114ca50f7a8e2f3f657c1108d9d44cfd8'),
                  o = BigInt('0x100000000000000000000000000000000'),
                  s = E(e * t, w),
                  a = E(-r * t, w),
                  u = (0, i.wQ)(t - s * e - a * n, w),
                  l = (0, i.wQ)(-s * r - a * e, w),
                  h = u > o,
                  c = l > o;
                if ((h && (u = w - u), c && (l = w - l), u > o || l > o))
                  throw Error('splitScalar: Endomorphism failed, k=' + t);
                return { k1neg: h, k1: u, k2neg: c, k2: l };
              },
            },
          },
          n.J
        );
      BigInt(0), _.ProjectivePoint;
    },
    5376: function (t, e, r) {
      'use strict';
      function n(t) {
        if (!Number.isSafeInteger(t) || t < 0)
          throw Error(`positive integer expected, not ${t}`);
      }
      function i(t, ...e) {
        if (
          !(
            t instanceof Uint8Array ||
            (null != t &&
              'object' == typeof t &&
              'Uint8Array' === t.constructor.name)
          )
        )
          throw Error('Uint8Array expected');
        if (e.length > 0 && !e.includes(t.length))
          throw Error(
            `Uint8Array expected of length ${e}, not of length=${t.length}`
          );
      }
      function o(t) {
        if ('function' != typeof t || 'function' != typeof t.create)
          throw Error('Hash should be wrapped by utils.wrapConstructor');
        n(t.outputLen), n(t.blockLen);
      }
      function s(t, e = !0) {
        if (t.destroyed) throw Error('Hash instance has been destroyed');
        if (e && t.finished)
          throw Error('Hash#digest() has already been called');
      }
      function a(t, e) {
        i(t);
        let r = e.outputLen;
        if (t.length < r)
          throw Error(
            `digestInto() expects output buffer of length at least ${r}`
          );
      }
      r.d(e, {
        Gg: function () {
          return s;
        },
        J8: function () {
          return a;
        },
        Rx: function () {
          return n;
        },
        aI: function () {
          return i;
        },
        vp: function () {
          return o;
        },
      });
    },
    4815: function (t, e, r) {
      'use strict';
      r.d(e, {
        VR: function () {
          return a;
        },
        bc: function () {
          return o;
        },
        l3: function () {
          return s;
        },
      });
      var n = r(5376),
        i = r(8104);
      let o = (t, e, r) => (t & e) ^ (~t & r),
        s = (t, e, r) => (t & e) ^ (t & r) ^ (e & r);
      class a extends i.kb {
        constructor(t, e, r, n) {
          super(),
            (this.blockLen = t),
            (this.outputLen = e),
            (this.padOffset = r),
            (this.isLE = n),
            (this.finished = !1),
            (this.length = 0),
            (this.pos = 0),
            (this.destroyed = !1),
            (this.buffer = new Uint8Array(t)),
            (this.view = (0, i.GL)(this.buffer));
        }
        update(t) {
          (0, n.Gg)(this);
          let { view: e, buffer: r, blockLen: o } = this,
            s = (t = (0, i.O0)(t)).length;
          for (let n = 0; n < s; ) {
            let a = Math.min(o - this.pos, s - n);
            if (a === o) {
              let e = (0, i.GL)(t);
              for (; o <= s - n; n += o) this.process(e, n);
              continue;
            }
            r.set(t.subarray(n, n + a), this.pos),
              (this.pos += a),
              (n += a),
              this.pos === o && (this.process(e, 0), (this.pos = 0));
          }
          return (this.length += t.length), this.roundClean(), this;
        }
        digestInto(t) {
          (0, n.Gg)(this), (0, n.J8)(t, this), (this.finished = !0);
          let { buffer: e, view: r, blockLen: o, isLE: s } = this,
            { pos: a } = this;
          (e[a++] = 128),
            this.buffer.subarray(a).fill(0),
            this.padOffset > o - a && (this.process(r, 0), (a = 0));
          for (let t = a; t < o; t++) e[t] = 0;
          !(function (t, e, r, n) {
            if ('function' == typeof t.setBigUint64)
              return t.setBigUint64(e, r, n);
            let i = BigInt(32),
              o = BigInt(4294967295),
              s = Number((r >> i) & o),
              a = Number(r & o),
              u = n ? 4 : 0,
              l = n ? 0 : 4;
            t.setUint32(e + u, s, n), t.setUint32(e + l, a, n);
          })(r, o - 8, BigInt(8 * this.length), s),
            this.process(r, 0);
          let u = (0, i.GL)(t),
            l = this.outputLen;
          if (l % 4) throw Error('_sha2: outputLen should be aligned to 32bit');
          let h = l / 4,
            c = this.get();
          if (h > c.length) throw Error('_sha2: outputLen bigger than state');
          for (let t = 0; t < h; t++) u.setUint32(4 * t, c[t], s);
        }
        digest() {
          let { buffer: t, outputLen: e } = this;
          this.digestInto(t);
          let r = t.slice(0, e);
          return this.destroy(), r;
        }
        _cloneInto(t) {
          t || (t = new this.constructor()), t.set(...this.get());
          let {
            blockLen: e,
            buffer: r,
            length: n,
            finished: i,
            destroyed: o,
            pos: s,
          } = this;
          return (
            (t.length = n),
            (t.pos = s),
            (t.finished = i),
            (t.destroyed = o),
            n % e && t.buffer.set(r),
            t
          );
        }
      }
    },
    5390: function (t, e, r) {
      'use strict';
      r.d(e, {
        EP: function () {
          return a;
        },
        SD: function () {
          return l;
        },
        Vl: function () {
          return s;
        },
        gm: function () {
          return u;
        },
        mk: function () {
          return h;
        },
      });
      let n = BigInt(4294967296 - 1),
        i = BigInt(32);
      function o(t, e = !1) {
        return e
          ? { h: Number(t & n), l: Number((t >> i) & n) }
          : { h: 0 | Number((t >> i) & n), l: 0 | Number(t & n) };
      }
      function s(t, e = !1) {
        let r = new Uint32Array(t.length),
          n = new Uint32Array(t.length);
        for (let i = 0; i < t.length; i++) {
          let { h: s, l: a } = o(t[i], e);
          [r[i], n[i]] = [s, a];
        }
        return [r, n];
      }
      let a = (t, e, r) => (t << r) | (e >>> (32 - r)),
        u = (t, e, r) => (e << r) | (t >>> (32 - r)),
        l = (t, e, r) => (e << (r - 32)) | (t >>> (64 - r)),
        h = (t, e, r) => (t << (r - 32)) | (e >>> (64 - r));
      e.ZP = {
        fromBig: o,
        split: s,
        toBig: (t, e) => (BigInt(t >>> 0) << i) | BigInt(e >>> 0),
        shrSH: (t, e, r) => t >>> r,
        shrSL: (t, e, r) => (t << (32 - r)) | (e >>> r),
        rotrSH: (t, e, r) => (t >>> r) | (e << (32 - r)),
        rotrSL: (t, e, r) => (t << (32 - r)) | (e >>> r),
        rotrBH: (t, e, r) => (t << (64 - r)) | (e >>> (r - 32)),
        rotrBL: (t, e, r) => (t >>> (r - 32)) | (e << (64 - r)),
        rotr32H: (t, e) => e,
        rotr32L: (t, e) => t,
        rotlSH: a,
        rotlSL: u,
        rotlBH: l,
        rotlBL: h,
        add: function (t, e, r, n) {
          let i = (e >>> 0) + (n >>> 0);
          return { h: (t + r + ((i / 4294967296) | 0)) | 0, l: 0 | i };
        },
        add3L: (t, e, r) => (t >>> 0) + (e >>> 0) + (r >>> 0),
        add3H: (t, e, r, n) => (e + r + n + ((t / 4294967296) | 0)) | 0,
        add4L: (t, e, r, n) => (t >>> 0) + (e >>> 0) + (r >>> 0) + (n >>> 0),
        add4H: (t, e, r, n, i) => (e + r + n + i + ((t / 4294967296) | 0)) | 0,
        add5H: (t, e, r, n, i, o) =>
          (e + r + n + i + o + ((t / 4294967296) | 0)) | 0,
        add5L: (t, e, r, n, i) =>
          (t >>> 0) + (e >>> 0) + (r >>> 0) + (n >>> 0) + (i >>> 0),
      };
    },
    5530: function (t, e, r) {
      'use strict';
      r.d(e, {
        J: function () {
          return l;
        },
      });
      var n = r(4815),
        i = r(8104);
      let o = new Uint32Array([
          1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993,
          2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987,
          1925078388, 2162078206, 2614888103, 3248222580, 3835390401,
          4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692,
          1996064986, 2554220882, 2821834349, 2952996808, 3210313671,
          3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912,
          1294757372, 1396182291, 1695183700, 1986661051, 2177026350,
          2456956037, 2730485921, 2820302411, 3259730800, 3345764771,
          3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616,
          659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779,
          1955562222, 2024104815, 2227730452, 2361852424, 2428436474,
          2756734187, 3204031479, 3329325298,
        ]),
        s = new Uint32Array([
          1779033703, 3144134277, 1013904242, 2773480762, 1359893119,
          2600822924, 528734635, 1541459225,
        ]),
        a = new Uint32Array(64);
      class u extends n.VR {
        constructor() {
          super(64, 32, 8, !1),
            (this.A = 0 | s[0]),
            (this.B = 0 | s[1]),
            (this.C = 0 | s[2]),
            (this.D = 0 | s[3]),
            (this.E = 0 | s[4]),
            (this.F = 0 | s[5]),
            (this.G = 0 | s[6]),
            (this.H = 0 | s[7]);
        }
        get() {
          let { A: t, B: e, C: r, D: n, E: i, F: o, G: s, H: a } = this;
          return [t, e, r, n, i, o, s, a];
        }
        set(t, e, r, n, i, o, s, a) {
          (this.A = 0 | t),
            (this.B = 0 | e),
            (this.C = 0 | r),
            (this.D = 0 | n),
            (this.E = 0 | i),
            (this.F = 0 | o),
            (this.G = 0 | s),
            (this.H = 0 | a);
        }
        process(t, e) {
          for (let r = 0; r < 16; r++, e += 4) a[r] = t.getUint32(e, !1);
          for (let t = 16; t < 64; t++) {
            let e = a[t - 15],
              r = a[t - 2],
              n = (0, i.np)(e, 7) ^ (0, i.np)(e, 18) ^ (e >>> 3),
              o = (0, i.np)(r, 17) ^ (0, i.np)(r, 19) ^ (r >>> 10);
            a[t] = (o + a[t - 7] + n + a[t - 16]) | 0;
          }
          let { A: r, B: s, C: u, D: l, E: h, F: c, G: f, H: d } = this;
          for (let t = 0; t < 64; t++) {
            let e =
                (d +
                  ((0, i.np)(h, 6) ^ (0, i.np)(h, 11) ^ (0, i.np)(h, 25)) +
                  (0, n.bc)(h, c, f) +
                  o[t] +
                  a[t]) |
                0,
              p =
                (((0, i.np)(r, 2) ^ (0, i.np)(r, 13) ^ (0, i.np)(r, 22)) +
                  (0, n.l3)(r, s, u)) |
                0;
            (d = f),
              (f = c),
              (c = h),
              (h = (l + e) | 0),
              (l = u),
              (u = s),
              (s = r),
              (r = (e + p) | 0);
          }
          (r = (r + this.A) | 0),
            (s = (s + this.B) | 0),
            (u = (u + this.C) | 0),
            (l = (l + this.D) | 0),
            (h = (h + this.E) | 0),
            (c = (c + this.F) | 0),
            (f = (f + this.G) | 0),
            (d = (d + this.H) | 0),
            this.set(r, s, u, l, h, c, f, d);
        }
        roundClean() {
          a.fill(0);
        }
        destroy() {
          this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0);
        }
      }
      let l = (0, i.hE)(() => new u());
    },
    5743: function (t, e, r) {
      'use strict';
      r.d(e, {
        fr: function () {
          return b;
        },
      });
      var n = r(5376),
        i = r(5390),
        o = r(8104);
      let s = [],
        a = [],
        u = [],
        l = BigInt(0),
        h = BigInt(1),
        c = BigInt(2),
        f = BigInt(7),
        d = BigInt(256),
        p = BigInt(113);
      for (let t = 0, e = h, r = 1, n = 0; t < 24; t++) {
        ([r, n] = [n, (2 * r + 3 * n) % 5]),
          s.push(2 * (5 * n + r)),
          a.push((((t + 1) * (t + 2)) / 2) % 64);
        let i = l;
        for (let t = 0; t < 7; t++)
          (e = ((e << h) ^ ((e >> f) * p)) % d) & c &&
            (i ^= h << ((h << BigInt(t)) - h));
        u.push(i);
      }
      let [y, m] = (0, i.Vl)(u, !0),
        g = (t, e, r) => (r > 32 ? (0, i.SD)(t, e, r) : (0, i.EP)(t, e, r)),
        w = (t, e, r) => (r > 32 ? (0, i.mk)(t, e, r) : (0, i.gm)(t, e, r));
      class v extends o.kb {
        constructor(t, e, r, i = !1, s = 24) {
          if (
            (super(),
            (this.blockLen = t),
            (this.suffix = e),
            (this.outputLen = r),
            (this.enableXOF = i),
            (this.rounds = s),
            (this.pos = 0),
            (this.posOut = 0),
            (this.finished = !1),
            (this.destroyed = !1),
            (0, n.Rx)(r),
            0 >= this.blockLen || this.blockLen >= 200)
          )
            throw Error('Sha3 supports only keccak-f1600 function');
          (this.state = new Uint8Array(200)),
            (this.state32 = (0, o.Jq)(this.state));
        }
        keccak() {
          o.iA || (0, o.l1)(this.state32),
            (function (t, e = 24) {
              let r = new Uint32Array(10);
              for (let n = 24 - e; n < 24; n++) {
                for (let e = 0; e < 10; e++)
                  r[e] = t[e] ^ t[e + 10] ^ t[e + 20] ^ t[e + 30] ^ t[e + 40];
                for (let e = 0; e < 10; e += 2) {
                  let n = (e + 8) % 10,
                    i = (e + 2) % 10,
                    o = r[i],
                    s = r[i + 1],
                    a = g(o, s, 1) ^ r[n],
                    u = w(o, s, 1) ^ r[n + 1];
                  for (let r = 0; r < 50; r += 10)
                    (t[e + r] ^= a), (t[e + r + 1] ^= u);
                }
                let e = t[2],
                  i = t[3];
                for (let r = 0; r < 24; r++) {
                  let n = a[r],
                    o = g(e, i, n),
                    u = w(e, i, n),
                    l = s[r];
                  (e = t[l]), (i = t[l + 1]), (t[l] = o), (t[l + 1] = u);
                }
                for (let e = 0; e < 50; e += 10) {
                  for (let n = 0; n < 10; n++) r[n] = t[e + n];
                  for (let n = 0; n < 10; n++)
                    t[e + n] ^= ~r[(n + 2) % 10] & r[(n + 4) % 10];
                }
                (t[0] ^= y[n]), (t[1] ^= m[n]);
              }
              r.fill(0);
            })(this.state32, this.rounds),
            o.iA || (0, o.l1)(this.state32),
            (this.posOut = 0),
            (this.pos = 0);
        }
        update(t) {
          (0, n.Gg)(this);
          let { blockLen: e, state: r } = this,
            i = (t = (0, o.O0)(t)).length;
          for (let n = 0; n < i; ) {
            let o = Math.min(e - this.pos, i - n);
            for (let e = 0; e < o; e++) r[this.pos++] ^= t[n++];
            this.pos === e && this.keccak();
          }
          return this;
        }
        finish() {
          if (this.finished) return;
          this.finished = !0;
          let { state: t, suffix: e, pos: r, blockLen: n } = this;
          (t[r] ^= e),
            (128 & e) != 0 && r === n - 1 && this.keccak(),
            (t[n - 1] ^= 128),
            this.keccak();
        }
        writeInto(t) {
          (0, n.Gg)(this, !1), (0, n.aI)(t), this.finish();
          let e = this.state,
            { blockLen: r } = this;
          for (let n = 0, i = t.length; n < i; ) {
            this.posOut >= r && this.keccak();
            let o = Math.min(r - this.posOut, i - n);
            t.set(e.subarray(this.posOut, this.posOut + o), n),
              (this.posOut += o),
              (n += o);
          }
          return t;
        }
        xofInto(t) {
          if (!this.enableXOF)
            throw Error('XOF is not possible for this instance');
          return this.writeInto(t);
        }
        xof(t) {
          return (0, n.Rx)(t), this.xofInto(new Uint8Array(t));
        }
        digestInto(t) {
          if (((0, n.J8)(t, this), this.finished))
            throw Error('digest() was already called');
          return this.writeInto(t), this.destroy(), t;
        }
        digest() {
          return this.digestInto(new Uint8Array(this.outputLen));
        }
        destroy() {
          (this.destroyed = !0), this.state.fill(0);
        }
        _cloneInto(t) {
          let {
            blockLen: e,
            suffix: r,
            outputLen: n,
            rounds: i,
            enableXOF: o,
          } = this;
          return (
            t || (t = new v(e, r, n, o, i)),
            t.state32.set(this.state32),
            (t.pos = this.pos),
            (t.posOut = this.posOut),
            (t.finished = this.finished),
            (t.rounds = i),
            (t.suffix = r),
            (t.outputLen = n),
            (t.enableXOF = o),
            (t.destroyed = this.destroyed),
            t
          );
        }
      }
      let b = (0, o.hE)(() => new v(136, 1, 32));
    },
    8104: function (t, e, r) {
      'use strict';
      r.d(e, {
        kb: function () {
          return p;
        },
        l1: function () {
          return h;
        },
        eV: function () {
          return d;
        },
        GL: function () {
          return s;
        },
        iA: function () {
          return u;
        },
        O6: function () {
          return m;
        },
        np: function () {
          return a;
        },
        O0: function () {
          return f;
        },
        Jq: function () {
          return o;
        },
        iY: function () {
          return c;
        },
        hE: function () {
          return y;
        },
      });
      let n =
        'object' == typeof globalThis && 'crypto' in globalThis
          ? globalThis.crypto
          : void 0;
      var i = r(5376);
      let o = (t) =>
          new Uint32Array(t.buffer, t.byteOffset, Math.floor(t.byteLength / 4)),
        s = (t) => new DataView(t.buffer, t.byteOffset, t.byteLength),
        a = (t, e) => (t << (32 - e)) | (t >>> e),
        u = 68 === new Uint8Array(new Uint32Array([287454020]).buffer)[0],
        l = (t) =>
          ((t << 24) & 4278190080) |
          ((t << 8) & 16711680) |
          ((t >>> 8) & 65280) |
          ((t >>> 24) & 255);
      function h(t) {
        for (let e = 0; e < t.length; e++) t[e] = l(t[e]);
      }
      function c(t) {
        if ('string' != typeof t)
          throw Error(`utf8ToBytes expected string, got ${typeof t}`);
        return new Uint8Array(new TextEncoder().encode(t));
      }
      function f(t) {
        return 'string' == typeof t && (t = c(t)), (0, i.aI)(t), t;
      }
      function d(...t) {
        let e = 0;
        for (let r = 0; r < t.length; r++) {
          let n = t[r];
          (0, i.aI)(n), (e += n.length);
        }
        let r = new Uint8Array(e);
        for (let e = 0, n = 0; e < t.length; e++) {
          let i = t[e];
          r.set(i, n), (n += i.length);
        }
        return r;
      }
      class p {
        clone() {
          return this._cloneInto();
        }
      }
      function y(t) {
        let e = (e) => t().update(f(e)).digest(),
          r = t();
        return (
          (e.outputLen = r.outputLen),
          (e.blockLen = r.blockLen),
          (e.create = () => t()),
          e
        );
      }
      function m(t = 32) {
        if (n && 'function' == typeof n.getRandomValues)
          return n.getRandomValues(new Uint8Array(t));
        throw Error('crypto.getRandomValues must be defined');
      }
    },
    277: function (t, e, r) {
      'use strict';
      r.d(e, {
        H: function () {
          return l;
        },
        i1: function () {
          return i;
        },
        mI: function () {
          return a;
        },
        su: function () {
          return u;
        },
      });
      var n,
        i,
        o = r(7836),
        s = r(9860);
      ((n = i || (i = {})).Installed = 'Installed'),
        (n.NotDetected = 'NotDetected'),
        (n.Loadable = 'Loadable'),
        (n.Unsupported = 'Unsupported');
      class a extends o {
        get connected() {
          return !!this.publicKey;
        }
        async autoConnect() {
          await this.connect();
        }
        async prepareTransaction(t, e, r = {}) {
          let n = this.publicKey;
          if (!n) throw new s.oS();
          return (
            (t.feePayer = t.feePayer || n),
            (t.recentBlockhash =
              t.recentBlockhash ||
              (
                await e.getLatestBlockhash({
                  commitment: r.preflightCommitment,
                  minContextSlot: r.minContextSlot,
                })
              ).blockhash),
            t
          );
        }
      }
      function u(t) {
        if ('undefined' == typeof window || 'undefined' == typeof document)
          return;
        let e = [];
        function r() {
          if (t()) for (let t of e) t();
        }
        let n = setInterval(r, 1e3);
        e.push(() => clearInterval(n)),
          'loading' === document.readyState &&
            (document.addEventListener('DOMContentLoaded', r, { once: !0 }),
            e.push(() => document.removeEventListener('DOMContentLoaded', r))),
          'complete' !== document.readyState &&
            (window.addEventListener('load', r, { once: !0 }),
            e.push(() => window.removeEventListener('load', r))),
          r();
      }
      function l() {
        if (!navigator) return !1;
        let t = navigator.userAgent.toLowerCase(),
          e = t.includes('iphone') || t.includes('ipad'),
          r = t.includes('safari');
        return e && r;
      }
    },
    9860: function (t, e, r) {
      'use strict';
      r.d(e, {
        $w: function () {
          return s;
        },
        IW: function () {
          return f;
        },
        Nx: function () {
          return h;
        },
        OZ: function () {
          return i;
        },
        PY: function () {
          return d;
        },
        UG: function () {
          return u;
        },
        at: function () {
          return a;
        },
        bD: function () {
          return y;
        },
        cO: function () {
          return l;
        },
        fk: function () {
          return p;
        },
        lj: function () {
          return n;
        },
        oS: function () {
          return c;
        },
        p6: function () {
          return o;
        },
      });
      class n extends Error {
        constructor(t, e) {
          super(t), (this.error = e);
        }
      }
      class i extends n {
        constructor() {
          super(...arguments), (this.name = 'WalletNotReadyError');
        }
      }
      class o extends n {
        constructor() {
          super(...arguments), (this.name = 'WalletConfigError');
        }
      }
      class s extends n {
        constructor() {
          super(...arguments), (this.name = 'WalletConnectionError');
        }
      }
      class a extends n {
        constructor() {
          super(...arguments), (this.name = 'WalletDisconnectedError');
        }
      }
      class u extends n {
        constructor() {
          super(...arguments), (this.name = 'WalletDisconnectionError');
        }
      }
      class l extends n {
        constructor() {
          super(...arguments), (this.name = 'WalletAccountError');
        }
      }
      class h extends n {
        constructor() {
          super(...arguments), (this.name = 'WalletPublicKeyError');
        }
      }
      class c extends n {
        constructor() {
          super(...arguments), (this.name = 'WalletNotConnectedError');
        }
      }
      class f extends n {
        constructor() {
          super(...arguments), (this.name = 'WalletSendTransactionError');
        }
      }
      class d extends n {
        constructor() {
          super(...arguments), (this.name = 'WalletSignTransactionError');
        }
      }
      class p extends n {
        constructor() {
          super(...arguments), (this.name = 'WalletSignMessageError');
        }
      }
      class y extends n {
        constructor() {
          super(...arguments), (this.name = 'WalletSignInError');
        }
      }
    },
    4750: function (t, e, r) {
      'use strict';
      r.d(e, {
        eC: function () {
          return a;
        },
        qz: function () {
          return u;
        },
      });
      var n = r(277),
        i = r(9860),
        o = r(9931);
      class s extends n.mI {
        async sendTransaction(t, e, r = {}) {
          let n = !0;
          try {
            if ((0, o.W)(t)) {
              if (!this.supportedTransactionVersions)
                throw new i.IW(
                  "Sending versioned transactions isn't supported by this wallet"
                );
              if (!this.supportedTransactionVersions.has(t.version))
                throw new i.IW(
                  `Sending transaction version ${t.version} isn't supported by this wallet`
                );
              try {
                let n = (t = await this.signTransaction(t)).serialize();
                return await e.sendRawTransaction(n, r);
              } catch (t) {
                if (t instanceof i.PY) throw ((n = !1), t);
                throw new i.IW(t?.message, t);
              }
            } else
              try {
                let { signers: n, ...i } = r;
                (t = await this.prepareTransaction(t, e, i)),
                  n?.length && t.partialSign(...n);
                let o = (t = await this.signTransaction(t)).serialize();
                return await e.sendRawTransaction(o, i);
              } catch (t) {
                if (t instanceof i.PY) throw ((n = !1), t);
                throw new i.IW(t?.message, t);
              }
          } catch (t) {
            throw (n && this.emit('error', t), t);
          }
        }
        async signAllTransactions(t) {
          for (let e of t)
            if ((0, o.W)(e)) {
              if (!this.supportedTransactionVersions)
                throw new i.PY(
                  "Signing versioned transactions isn't supported by this wallet"
                );
              if (!this.supportedTransactionVersions.has(e.version))
                throw new i.PY(
                  `Signing transaction version ${e.version} isn't supported by this wallet`
                );
            }
          let e = [];
          for (let r of t) e.push(await this.signTransaction(r));
          return e;
        }
      }
      class a extends s {}
      class u extends a {}
    },
    9931: function (t, e, r) {
      'use strict';
      function n(t) {
        return 'version' in t;
      }
      r.d(e, {
        W: function () {
          return n;
        },
      });
    },
    5538: function (t, e, r) {
      'use strict';
      r.d(e, {
        O: function () {
          return u;
        },
      });
      var n = r(4750),
        i = r(277),
        o = r(9860),
        s = r(9931),
        a = r(5429);
      class u extends n.eC {
        constructor(t = {}) {
          super(),
            (this.name = 'Phantom'),
            (this.url = 'https://phantom.app'),
            (this.icon =
              'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDgiIGhlaWdodD0iMTA4IiB2aWV3Qm94PSIwIDAgMTA4IDEwOCIgZmlsbD0ibm9uZSI+CjxyZWN0IHdpZHRoPSIxMDgiIGhlaWdodD0iMTA4IiByeD0iMjYiIGZpbGw9IiNBQjlGRjIiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00Ni41MjY3IDY5LjkyMjlDNDIuMDA1NCA3Ni44NTA5IDM0LjQyOTIgODUuNjE4MiAyNC4zNDggODUuNjE4MkMxOS41ODI0IDg1LjYxODIgMTUgODMuNjU2MyAxNSA3NS4xMzQyQzE1IDUzLjQzMDUgNDQuNjMyNiAxOS44MzI3IDcyLjEyNjggMTkuODMyN0M4Ny43NjggMTkuODMyNyA5NCAzMC42ODQ2IDk0IDQzLjAwNzlDOTQgNTguODI1OCA4My43MzU1IDc2LjkxMjIgNzMuNTMyMSA3Ni45MTIyQzcwLjI5MzkgNzYuOTEyMiA2OC43MDUzIDc1LjEzNDIgNjguNzA1MyA3Mi4zMTRDNjguNzA1MyA3MS41NzgzIDY4LjgyNzUgNzAuNzgxMiA2OS4wNzE5IDY5LjkyMjlDNjUuNTg5MyA3NS44Njk5IDU4Ljg2ODUgODEuMzg3OCA1Mi41NzU0IDgxLjM4NzhDNDcuOTkzIDgxLjM4NzggNDUuNjcxMyA3OC41MDYzIDQ1LjY3MTMgNzQuNDU5OEM0NS42NzEzIDcyLjk4ODQgNDUuOTc2OCA3MS40NTU2IDQ2LjUyNjcgNjkuOTIyOVpNODMuNjc2MSA0Mi41Nzk0QzgzLjY3NjEgNDYuMTcwNCA4MS41NTc1IDQ3Ljk2NTggNzkuMTg3NSA0Ny45NjU4Qzc2Ljc4MTYgNDcuOTY1OCA3NC42OTg5IDQ2LjE3MDQgNzQuNjk4OSA0Mi41Nzk0Qzc0LjY5ODkgMzguOTg4NSA3Ni43ODE2IDM3LjE5MzEgNzkuMTg3NSAzNy4xOTMxQzgxLjU1NzUgMzcuMTkzMSA4My42NzYxIDM4Ljk4ODUgODMuNjc2MSA0Mi41Nzk0Wk03MC4yMTAzIDQyLjU3OTVDNzAuMjEwMyA0Ni4xNzA0IDY4LjA5MTYgNDcuOTY1OCA2NS43MjE2IDQ3Ljk2NThDNjMuMzE1NyA0Ny45NjU4IDYxLjIzMyA0Ni4xNzA0IDYxLjIzMyA0Mi41Nzk1QzYxLjIzMyAzOC45ODg1IDYzLjMxNTcgMzcuMTkzMSA2NS43MjE2IDM3LjE5MzFDNjguMDkxNiAzNy4xOTMxIDcwLjIxMDMgMzguOTg4NSA3MC4yMTAzIDQyLjU3OTVaIiBmaWxsPSIjRkZGREY4Ii8+Cjwvc3ZnPg=='),
            (this.supportedTransactionVersions = new Set(['legacy', 0])),
            (this._readyState =
              'undefined' == typeof window || 'undefined' == typeof document
                ? i.i1.Unsupported
                : i.i1.NotDetected),
            (this._disconnected = () => {
              let t = this._wallet;
              t &&
                (t.off('disconnect', this._disconnected),
                t.off('accountChanged', this._accountChanged),
                (this._wallet = null),
                (this._publicKey = null),
                this.emit('error', new o.at()),
                this.emit('disconnect'));
            }),
            (this._accountChanged = (t) => {
              let e = this._publicKey;
              if (e) {
                try {
                  t = new a.nh(t.toBytes());
                } catch (t) {
                  this.emit('error', new o.Nx(t?.message, t));
                  return;
                }
                e.equals(t) || ((this._publicKey = t), this.emit('connect', t));
              }
            }),
            (this._connecting = !1),
            (this._wallet = null),
            (this._publicKey = null),
            this._readyState !== i.i1.Unsupported &&
              ((0, i.H)()
                ? ((this._readyState = i.i1.Loadable),
                  this.emit('readyStateChange', this._readyState))
                : (0, i.su)(
                    () =>
                      !!(
                        window.phantom?.solana?.isPhantom ||
                        window.solana?.isPhantom
                      ) &&
                      ((this._readyState = i.i1.Installed),
                      this.emit('readyStateChange', this._readyState),
                      !0)
                  ));
        }
        get publicKey() {
          return this._publicKey;
        }
        get connecting() {
          return this._connecting;
        }
        get readyState() {
          return this._readyState;
        }
        async autoConnect() {
          this.readyState === i.i1.Installed && (await this.connect());
        }
        async connect() {
          try {
            let t;
            if (this.connected || this.connecting) return;
            if (this.readyState === i.i1.Loadable) {
              let t = encodeURIComponent(window.location.href),
                e = encodeURIComponent(window.location.origin);
              window.location.href = `https://phantom.app/ul/browse/${t}?ref=${e}`;
              return;
            }
            if (this.readyState !== i.i1.Installed) throw new o.OZ();
            this._connecting = !0;
            let e = window.phantom?.solana || window.solana;
            if (!e.isConnected)
              try {
                await e.connect();
              } catch (t) {
                throw new o.$w(t?.message, t);
              }
            if (!e.publicKey) throw new o.cO();
            try {
              t = new a.nh(e.publicKey.toBytes());
            } catch (t) {
              throw new o.Nx(t?.message, t);
            }
            e.on('disconnect', this._disconnected),
              e.on('accountChanged', this._accountChanged),
              (this._wallet = e),
              (this._publicKey = t),
              this.emit('connect', t);
          } catch (t) {
            throw (this.emit('error', t), t);
          } finally {
            this._connecting = !1;
          }
        }
        async disconnect() {
          let t = this._wallet;
          if (t) {
            t.off('disconnect', this._disconnected),
              t.off('accountChanged', this._accountChanged),
              (this._wallet = null),
              (this._publicKey = null);
            try {
              await t.disconnect();
            } catch (t) {
              this.emit('error', new o.UG(t?.message, t));
            }
          }
          this.emit('disconnect');
        }
        async sendTransaction(t, e, r = {}) {
          try {
            let n = this._wallet;
            if (!n) throw new o.oS();
            try {
              let { signers: i, ...o } = r;
              (0, s.W)(t)
                ? i?.length && t.sign(i)
                : ((t = await this.prepareTransaction(t, e, o)),
                  i?.length && t.partialSign(...i)),
                (o.preflightCommitment = o.preflightCommitment || e.commitment);
              let { signature: a } = await n.signAndSendTransaction(t, o);
              return a;
            } catch (t) {
              if (t instanceof o.lj) throw t;
              throw new o.IW(t?.message, t);
            }
          } catch (t) {
            throw (this.emit('error', t), t);
          }
        }
        async signTransaction(t) {
          try {
            let e = this._wallet;
            if (!e) throw new o.oS();
            try {
              return (await e.signTransaction(t)) || t;
            } catch (t) {
              throw new o.PY(t?.message, t);
            }
          } catch (t) {
            throw (this.emit('error', t), t);
          }
        }
        async signAllTransactions(t) {
          try {
            let e = this._wallet;
            if (!e) throw new o.oS();
            try {
              return (await e.signAllTransactions(t)) || t;
            } catch (t) {
              throw new o.PY(t?.message, t);
            }
          } catch (t) {
            throw (this.emit('error', t), t);
          }
        }
        async signMessage(t) {
          try {
            let e = this._wallet;
            if (!e) throw new o.oS();
            try {
              let { signature: r } = await e.signMessage(t);
              return r;
            } catch (t) {
              throw new o.fk(t?.message, t);
            }
          } catch (t) {
            throw (this.emit('error', t), t);
          }
        }
      }
    },
    2426: function (t, e, r) {
      'use strict';
      r.d(e, {
        z: function () {
          return i;
        },
      });
      var n = r(2265);
      let i = (t) =>
        n.createElement(
          'button',
          {
            className: `wallet-adapter-button ${t.className || ''}`,
            disabled: t.disabled,
            style: t.style,
            onClick: t.onClick,
            tabIndex: t.tabIndex || 0,
            type: 'button',
          },
          t.startIcon &&
            n.createElement(
              'i',
              { className: 'wallet-adapter-button-start-icon' },
              t.startIcon
            ),
          t.children,
          t.endIcon &&
            n.createElement(
              'i',
              { className: 'wallet-adapter-button-end-icon' },
              t.endIcon
            )
        );
    },
    7549: function (t, e, r) {
      'use strict';
      r.d(e, {
        o: function () {
          return i;
        },
      });
      var n = r(2265);
      let i = ({ wallet: t, ...e }) =>
        t &&
        n.createElement('img', {
          src: t.adapter.icon,
          alt: `${t.adapter.name} icon`,
          ...e,
        });
    },
    1303: function (t, e, r) {
      'use strict';
      r.d(e, {
        s: function () {
          return p;
        },
      });
      var n = r(2265),
        i = r(8058),
        o = r(277),
        s = r(8782),
        a = r(4887);
      let u = ({ id: t, children: e, expanded: r = !1 }) => {
        let i = (0, n.useRef)(null),
          o = (0, n.useRef)(!0),
          s = () => {
            let t = i.current;
            t &&
              requestAnimationFrame(() => {
                t.style.height = t.scrollHeight + 'px';
              });
          },
          a = () => {
            let t = i.current;
            t &&
              requestAnimationFrame(() => {
                (t.style.height = t.offsetHeight + 'px'),
                  (t.style.overflow = 'hidden'),
                  requestAnimationFrame(() => {
                    t.style.height = '0';
                  });
              });
          };
        return (
          (0, n.useLayoutEffect)(() => {
            r ? s() : a();
          }, [r]),
          (0, n.useLayoutEffect)(() => {
            let t = i.current;
            if (t)
              return (
                o.current && (e(), (o.current = !1)),
                t.addEventListener('transitionend', n),
                () => t.removeEventListener('transitionend', n)
              );
            function e() {
              t &&
                ((t.style.overflow = r ? 'initial' : 'hidden'),
                r && (t.style.height = 'auto'));
            }
            function n(r) {
              t && r.target === t && 'height' === r.propertyName && e();
            }
          }, [r]),
          n.createElement(
            'div',
            {
              className: 'wallet-adapter-collapse',
              id: t,
              ref: i,
              role: 'region',
              style: {
                height: 0,
                transition: o.current ? void 0 : 'height 250ms ease-out',
              },
            },
            e
          )
        );
      };
      var l = r(2426),
        h = r(7549);
      let c = ({ handleClick: t, tabIndex: e, wallet: r }) =>
          n.createElement(
            'li',
            null,
            n.createElement(
              l.z,
              {
                onClick: t,
                startIcon: n.createElement(h.o, { wallet: r }),
                tabIndex: e,
              },
              r.adapter.name,
              r.readyState === o.i1.Installed &&
                n.createElement('span', null, 'Detected')
            )
          ),
        f = () =>
          n.createElement(
            'svg',
            {
              width: '97',
              height: '96',
              viewBox: '0 0 97 96',
              fill: 'none',
              xmlns: 'http://www.w3.org/2000/svg',
            },
            n.createElement('circle', {
              cx: '48.5',
              cy: '48',
              r: '48',
              fill: 'url(#paint0_linear_880_5115)',
              fillOpacity: '0.1',
            }),
            n.createElement('circle', {
              cx: '48.5',
              cy: '48',
              r: '47',
              stroke: 'url(#paint1_linear_880_5115)',
              strokeOpacity: '0.4',
              strokeWidth: '2',
            }),
            n.createElement(
              'g',
              { clipPath: 'url(#clip0_880_5115)' },
              n.createElement('path', {
                d: 'M65.5769 28.1523H31.4231C27.6057 28.1523 24.5 31.258 24.5 35.0754V60.9215C24.5 64.7389 27.6057 67.8446 31.4231 67.8446H65.5769C69.3943 67.8446 72.5 64.7389 72.5 60.9215V35.0754C72.5 31.258 69.3943 28.1523 65.5769 28.1523ZM69.7308 52.1523H59.5769C57.2865 52.1523 55.4231 50.289 55.4231 47.9985C55.4231 45.708 57.2864 43.8446 59.5769 43.8446H69.7308V52.1523ZM69.7308 41.0754H59.5769C55.7595 41.0754 52.6539 44.1811 52.6539 47.9985C52.6539 51.8159 55.7595 54.9215 59.5769 54.9215H69.7308V60.9215C69.7308 63.2119 67.8674 65.0754 65.5769 65.0754H31.4231C29.1327 65.0754 27.2692 63.212 27.2692 60.9215V35.0754C27.2692 32.785 29.1326 30.9215 31.4231 30.9215H65.5769C67.8673 30.9215 69.7308 32.7849 69.7308 35.0754V41.0754Z',
                fill: 'url(#paint2_linear_880_5115)',
              }),
              n.createElement('path', {
                d: 'M61.4231 46.6172H59.577C58.8123 46.6172 58.1924 47.2371 58.1924 48.0018C58.1924 48.7665 58.8123 49.3863 59.577 49.3863H61.4231C62.1878 49.3863 62.8077 48.7664 62.8077 48.0018C62.8077 47.2371 62.1878 46.6172 61.4231 46.6172Z',
                fill: 'url(#paint3_linear_880_5115)',
              })
            ),
            n.createElement(
              'defs',
              null,
              n.createElement(
                'linearGradient',
                {
                  id: 'paint0_linear_880_5115',
                  x1: '3.41664',
                  y1: '98.0933',
                  x2: '103.05',
                  y2: '8.42498',
                  gradientUnits: 'userSpaceOnUse',
                },
                n.createElement('stop', { stopColor: '#9945FF' }),
                n.createElement('stop', {
                  offset: '0.14',
                  stopColor: '#8A53F4',
                }),
                n.createElement('stop', {
                  offset: '0.42',
                  stopColor: '#6377D6',
                }),
                n.createElement('stop', {
                  offset: '0.79',
                  stopColor: '#24B0A7',
                }),
                n.createElement('stop', {
                  offset: '0.99',
                  stopColor: '#00D18C',
                }),
                n.createElement('stop', { offset: '1', stopColor: '#00D18C' })
              ),
              n.createElement(
                'linearGradient',
                {
                  id: 'paint1_linear_880_5115',
                  x1: '3.41664',
                  y1: '98.0933',
                  x2: '103.05',
                  y2: '8.42498',
                  gradientUnits: 'userSpaceOnUse',
                },
                n.createElement('stop', { stopColor: '#9945FF' }),
                n.createElement('stop', {
                  offset: '0.14',
                  stopColor: '#8A53F4',
                }),
                n.createElement('stop', {
                  offset: '0.42',
                  stopColor: '#6377D6',
                }),
                n.createElement('stop', {
                  offset: '0.79',
                  stopColor: '#24B0A7',
                }),
                n.createElement('stop', {
                  offset: '0.99',
                  stopColor: '#00D18C',
                }),
                n.createElement('stop', { offset: '1', stopColor: '#00D18C' })
              ),
              n.createElement(
                'linearGradient',
                {
                  id: 'paint2_linear_880_5115',
                  x1: '25.9583',
                  y1: '68.7101',
                  x2: '67.2337',
                  y2: '23.7879',
                  gradientUnits: 'userSpaceOnUse',
                },
                n.createElement('stop', { stopColor: '#9945FF' }),
                n.createElement('stop', {
                  offset: '0.14',
                  stopColor: '#8A53F4',
                }),
                n.createElement('stop', {
                  offset: '0.42',
                  stopColor: '#6377D6',
                }),
                n.createElement('stop', {
                  offset: '0.79',
                  stopColor: '#24B0A7',
                }),
                n.createElement('stop', {
                  offset: '0.99',
                  stopColor: '#00D18C',
                }),
                n.createElement('stop', { offset: '1', stopColor: '#00D18C' })
              ),
              n.createElement(
                'linearGradient',
                {
                  id: 'paint3_linear_880_5115',
                  x1: '58.3326',
                  y1: '49.4467',
                  x2: '61.0002',
                  y2: '45.4453',
                  gradientUnits: 'userSpaceOnUse',
                },
                n.createElement('stop', { stopColor: '#9945FF' }),
                n.createElement('stop', {
                  offset: '0.14',
                  stopColor: '#8A53F4',
                }),
                n.createElement('stop', {
                  offset: '0.42',
                  stopColor: '#6377D6',
                }),
                n.createElement('stop', {
                  offset: '0.79',
                  stopColor: '#24B0A7',
                }),
                n.createElement('stop', {
                  offset: '0.99',
                  stopColor: '#00D18C',
                }),
                n.createElement('stop', { offset: '1', stopColor: '#00D18C' })
              ),
              n.createElement(
                'clipPath',
                { id: 'clip0_880_5115' },
                n.createElement('rect', {
                  width: '48',
                  height: '48',
                  fill: 'white',
                  transform: 'translate(24.5 24)',
                })
              )
            )
          ),
        d = ({ className: t = '', container: e = 'body' }) => {
          let r = (0, n.useRef)(null),
            { wallets: l, select: h } = (0, s.O)(),
            { setVisible: d } = (0, i.h)(),
            [p, y] = (0, n.useState)(!1),
            [m, g] = (0, n.useState)(!1),
            [w, v] = (0, n.useState)(null),
            [b, E] = (0, n.useMemo)(() => {
              let t = [],
                e = [];
              for (let r of l)
                r.readyState === o.i1.Installed ? t.push(r) : e.push(r);
              return t.length ? [t, e] : [e, []];
            }, [l]),
            M = (0, n.useCallback)(() => {
              g(!1), setTimeout(() => d(!1), 150);
            }, [d]),
            _ = (0, n.useCallback)(
              (t) => {
                t.preventDefault(), M();
              },
              [M]
            ),
            S = (0, n.useCallback)(
              (t, e) => {
                h(e), _(t);
              },
              [h, _]
            ),
            A = (0, n.useCallback)(() => y(!p), [p]),
            x = (0, n.useCallback)(
              (t) => {
                let e = r.current;
                if (!e) return;
                let n = e.querySelectorAll('button'),
                  i = n[0],
                  o = n[n.length - 1];
                t.shiftKey
                  ? document.activeElement === i &&
                    (o.focus(), t.preventDefault())
                  : document.activeElement === o &&
                    (i.focus(), t.preventDefault());
              },
              [r]
            );
          return (
            (0, n.useLayoutEffect)(() => {
              let t = (t) => {
                  'Escape' === t.key ? M() : 'Tab' === t.key && x(t);
                },
                { overflow: e } = window.getComputedStyle(document.body);
              return (
                setTimeout(() => g(!0), 0),
                (document.body.style.overflow = 'hidden'),
                window.addEventListener('keydown', t, !1),
                () => {
                  (document.body.style.overflow = e),
                    window.removeEventListener('keydown', t, !1);
                }
              );
            }, [M, x]),
            (0, n.useLayoutEffect)(() => v(document.querySelector(e)), [e]),
            w &&
              (0, a.createPortal)(
                n.createElement(
                  'div',
                  {
                    'aria-labelledby': 'wallet-adapter-modal-title',
                    'aria-modal': 'true',
                    className: `wallet-adapter-modal ${
                      m && 'wallet-adapter-modal-fade-in'
                    } ${t}`,
                    ref: r,
                    role: 'dialog',
                  },
                  n.createElement(
                    'div',
                    { className: 'wallet-adapter-modal-container' },
                    n.createElement(
                      'div',
                      { className: 'wallet-adapter-modal-wrapper' },
                      n.createElement(
                        'button',
                        {
                          onClick: _,
                          className: 'wallet-adapter-modal-button-close',
                        },
                        n.createElement(
                          'svg',
                          { width: '14', height: '14' },
                          n.createElement('path', {
                            d: 'M14 12.461 8.3 6.772l5.234-5.233L12.006 0 6.772 5.234 1.54 0 0 1.539l5.234 5.233L0 12.006l1.539 1.528L6.772 8.3l5.69 5.7L14 12.461z',
                          })
                        )
                      ),
                      b.length
                        ? n.createElement(
                            n.Fragment,
                            null,
                            n.createElement(
                              'h1',
                              { className: 'wallet-adapter-modal-title' },
                              'Connect a wallet on Solana to continue'
                            ),
                            n.createElement(
                              'ul',
                              { className: 'wallet-adapter-modal-list' },
                              b.map((t) =>
                                n.createElement(c, {
                                  key: t.adapter.name,
                                  handleClick: (e) => S(e, t.adapter.name),
                                  wallet: t,
                                })
                              ),
                              E.length
                                ? n.createElement(
                                    u,
                                    {
                                      expanded: p,
                                      id: 'wallet-adapter-modal-collapse',
                                    },
                                    E.map((t) =>
                                      n.createElement(c, {
                                        key: t.adapter.name,
                                        handleClick: (e) =>
                                          S(e, t.adapter.name),
                                        tabIndex: p ? 0 : -1,
                                        wallet: t,
                                      })
                                    )
                                  )
                                : null
                            ),
                            E.length
                              ? n.createElement(
                                  'button',
                                  {
                                    className: 'wallet-adapter-modal-list-more',
                                    onClick: A,
                                    tabIndex: 0,
                                  },
                                  n.createElement(
                                    'span',
                                    null,
                                    p ? 'Less ' : 'More ',
                                    'options'
                                  ),
                                  n.createElement(
                                    'svg',
                                    {
                                      width: '13',
                                      height: '7',
                                      viewBox: '0 0 13 7',
                                      xmlns: 'http://www.w3.org/2000/svg',
                                      className: `${
                                        p
                                          ? 'wallet-adapter-modal-list-more-icon-rotate'
                                          : ''
                                      }`,
                                    },
                                    n.createElement('path', {
                                      d: 'M0.71418 1.626L5.83323 6.26188C5.91574 6.33657 6.0181 6.39652 6.13327 6.43762C6.24844 6.47872 6.37371 6.5 6.50048 6.5C6.62725 6.5 6.75252 6.47872 6.8677 6.43762C6.98287 6.39652 7.08523 6.33657 7.16774 6.26188L12.2868 1.626C12.7753 1.1835 12.3703 0.5 11.6195 0.5H1.37997C0.629216 0.5 0.224175 1.1835 0.71418 1.626Z',
                                    })
                                  )
                                )
                              : null
                          )
                        : n.createElement(
                            n.Fragment,
                            null,
                            n.createElement(
                              'h1',
                              { className: 'wallet-adapter-modal-title' },
                              "You'll need a wallet on Solana to continue"
                            ),
                            n.createElement(
                              'div',
                              { className: 'wallet-adapter-modal-middle' },
                              n.createElement(f, null)
                            ),
                            E.length
                              ? n.createElement(
                                  n.Fragment,
                                  null,
                                  n.createElement(
                                    'button',
                                    {
                                      className:
                                        'wallet-adapter-modal-list-more',
                                      onClick: A,
                                      tabIndex: 0,
                                    },
                                    n.createElement(
                                      'span',
                                      null,
                                      p
                                        ? 'Hide '
                                        : 'Already have a wallet? View ',
                                      'options'
                                    ),
                                    n.createElement(
                                      'svg',
                                      {
                                        width: '13',
                                        height: '7',
                                        viewBox: '0 0 13 7',
                                        xmlns: 'http://www.w3.org/2000/svg',
                                        className: `${
                                          p
                                            ? 'wallet-adapter-modal-list-more-icon-rotate'
                                            : ''
                                        }`,
                                      },
                                      n.createElement('path', {
                                        d: 'M0.71418 1.626L5.83323 6.26188C5.91574 6.33657 6.0181 6.39652 6.13327 6.43762C6.24844 6.47872 6.37371 6.5 6.50048 6.5C6.62725 6.5 6.75252 6.47872 6.8677 6.43762C6.98287 6.39652 7.08523 6.33657 7.16774 6.26188L12.2868 1.626C12.7753 1.1835 12.3703 0.5 11.6195 0.5H1.37997C0.629216 0.5 0.224175 1.1835 0.71418 1.626Z',
                                      })
                                    )
                                  ),
                                  n.createElement(
                                    u,
                                    {
                                      expanded: p,
                                      id: 'wallet-adapter-modal-collapse',
                                    },
                                    n.createElement(
                                      'ul',
                                      {
                                        className: 'wallet-adapter-modal-list',
                                      },
                                      E.map((t) =>
                                        n.createElement(c, {
                                          key: t.adapter.name,
                                          handleClick: (e) =>
                                            S(e, t.adapter.name),
                                          tabIndex: p ? 0 : -1,
                                          wallet: t,
                                        })
                                      )
                                    )
                                  )
                                )
                              : null
                          )
                    )
                  ),
                  n.createElement('div', {
                    className: 'wallet-adapter-modal-overlay',
                    onMouseDown: _,
                  })
                ),
                w
              )
          );
        },
        p = ({ children: t, ...e }) => {
          let [r, o] = (0, n.useState)(!1);
          return n.createElement(
            i.g.Provider,
            { value: { visible: r, setVisible: o } },
            t,
            r && n.createElement(d, { ...e })
          );
        };
    },
    7099: function (t, e, r) {
      'use strict';
      r.d(e, {
        a: function () {
          return c;
        },
      });
      var n = r(2265),
        i = r(8782),
        o = r(2426),
        s = r(7549);
      function a({ walletIcon: t, walletName: e, ...r }) {
        return n.createElement(o.z, {
          ...r,
          className: 'wallet-adapter-button-trigger',
          startIcon:
            t && e
              ? n.createElement(s.o, {
                  wallet: { adapter: { icon: t, name: e } },
                })
              : void 0,
        });
      }
      var u = r(8058);
      function l({ children: t, labels: e, ...r }) {
        let { setVisible: o } = (0, u.h)(),
          {
            buttonState: s,
            onConnect: l,
            onDisconnect: h,
            publicKey: c,
            walletIcon: f,
            walletName: d,
          } = (function ({ onSelectWallet: t }) {
            let e;
            let {
              connect: r,
              connected: o,
              connecting: s,
              disconnect: a,
              disconnecting: u,
              publicKey: l,
              select: h,
              wallet: c,
              wallets: f,
            } = (0, i.O)();
            e = s
              ? 'connecting'
              : o
              ? 'connected'
              : u
              ? 'disconnecting'
              : c
              ? 'has-wallet'
              : 'no-wallet';
            let d = (0, n.useCallback)(() => {
                r().catch(() => {});
              }, [r]),
              p = (0, n.useCallback)(() => {
                a().catch(() => {});
              }, [a]);
            return {
              buttonState: e,
              onConnect: 'has-wallet' === e ? d : void 0,
              onDisconnect:
                'disconnecting' !== e && 'no-wallet' !== e ? p : void 0,
              onSelectWallet: (0, n.useCallback)(() => {
                t({ onSelectWallet: h, wallets: f });
              }, [t, h, f]),
              publicKey: l ?? void 0,
              walletIcon: c?.adapter.icon,
              walletName: c?.adapter.name,
            };
          })({
            onSelectWallet() {
              o(!0);
            },
          }),
          [p, y] = (0, n.useState)(!1),
          [m, g] = (0, n.useState)(!1),
          w = (0, n.useRef)(null);
        (0, n.useEffect)(() => {
          let t = (t) => {
            let e = w.current;
            !e || e.contains(t.target) || g(!1);
          };
          return (
            document.addEventListener('mousedown', t),
            document.addEventListener('touchstart', t),
            () => {
              document.removeEventListener('mousedown', t),
                document.removeEventListener('touchstart', t);
            }
          );
        }, []);
        let v = (0, n.useMemo)(() => {
          if (t) return t;
          if (c) {
            let t = c.toBase58();
            return t.slice(0, 4) + '..' + t.slice(-4);
          }
          return 'connecting' === s || 'has-wallet' === s
            ? e[s]
            : e['no-wallet'];
        }, [s, t, e, c]);
        return "";n.createElement(
          'div',
          { className: 'wallet-adapter-dropdown' },
          n.createElement(
            a,
            {
              ...r,
              'aria-expanded': m,
              style: { pointerEvents: m ? 'none' : 'auto', ...r.style },
              onClick: () => {
                switch (s) {
                  case 'no-wallet':
                    o(!0);
                    break;
                  case 'has-wallet':
                    l && l();
                    break;
                  case 'connected':
                    g(!0);
                }
              },
              walletIcon: f,
              walletName: d,
            },
            v
          ),
          n.createElement(
            'ul',
            {
              'aria-label': 'dropdown-list',
              className: `wallet-adapter-dropdown-list ${
                m && 'wallet-adapter-dropdown-list-active'
              }`,
              ref: w,
              role: 'menu',
            },
            c
              ? n.createElement(
                  'li',
                  {
                    className: 'wallet-adapter-dropdown-list-item',
                    onClick: async () => {
                      await navigator.clipboard.writeText(c.toBase58()),
                        y(!0),
                        setTimeout(() => y(!1), 400);
                    },
                    role: 'menuitem',
                  },
                  p ? e.copied : e['copy-address']
                )
              : null,
            n.createElement(
              'li',
              {
                className: 'wallet-adapter-dropdown-list-item',
                onClick: () => {
                  o(!0), g(!1);
                },
                role: 'menuitem',
              },
              e['change-wallet']
            ),
            h
              ? n.createElement(
                  'li',
                  {
                    className: 'wallet-adapter-dropdown-list-item',
                    onClick: () => {
                      h(), g(!1);
                    },
                    role: 'menuitem',
                  },
                  e.disconnect
                )
              : null
          )
        );
      }
      let h = {
        'change-wallet': 'Change wallet',
        connecting: 'Connecting ...',
        'copy-address': 'Copy address',
        copied: 'Copied',
        disconnect: 'Disconnect',
        'has-wallet': 'Connect',
        'no-wallet': 'Select Wallet',
      };
      function c(t) {
        return n.createElement(l, { ...t, labels: h });
      }
    },
    8058: function (t, e, r) {
      'use strict';
      r.d(e, {
        g: function () {
          return s;
        },
        h: function () {
          return a;
        },
      });
      var n = r(2265);
      let i = {
        setVisible(t) {
          console.error(o('call', 'setVisible'));
        },
        visible: !1,
      };
      function o(t, e) {
        return `You have tried to  ${t} "${e}" on a WalletModalContext without providing one. Make sure to render a WalletModalProvider as an ancestor of the component that uses WalletModalContext`;
      }
      Object.defineProperty(i, 'visible', {
        get: () => (console.error(o('read', 'visible')), !1),
      });
      let s = (0, n.createContext)(i);
      function a() {
        return (0, n.useContext)(s);
      }
    },
    1910: function (t, e, r) {
      'use strict';
      r.d(e, {
        U: function () {
          return s;
        },
      });
      var n = r(5429),
        i = r(2265),
        o = r(1811);
      let s = ({
        children: t,
        endpoint: e,
        config: r = { commitment: 'confirmed' },
      }) => {
        let s = (0, i.useMemo)(() => new n.ew(e, r), [e, r]);
        return i.createElement(o.h.Provider, { value: { connection: s } }, t);
      };
    },
    6984: function (t, e, r) {
      'use strict';
      let n, i, o;
      r.d(e, {
        n: function () {
          return tU;
        },
      });
      var s,
        a,
        u,
        l,
        h,
        c,
        f,
        d,
        p,
        y,
        m,
        g,
        w,
        v,
        b,
        E,
        M,
        _,
        S,
        A,
        x,
        O = r(4750),
        I = r(277),
        R = r(9860),
        B = r(5429);
      let C = `(?:\\nURI: (?<uri>[^\\n]+))?(?:\\nVersion: (?<version>[^\\n]+))?(?:\\nChain ID: (?<chainId>[^\\n]+))?(?:\\nNonce: (?<nonce>[^\\n]+))?(?:\\nIssued At: (?<issuedAt>[^\\n]+))?(?:\\nExpiration Time: (?<expirationTime>[^\\n]+))?(?:\\nNot Before: (?<notBefore>[^\\n]+))?(?:\\nRequest ID: (?<requestId>[^\\n]+))?(?:\\nResources:(?<resources>(?:\\n- [^\\n]+)*))?`;
      RegExp(
        `^(?<domain>[^\\n]+?) wants you to sign in with your Solana account:\\n(?<address>[^\\n]+)(?:\\n|$)(?:\\n(?<statement>[\\S\\s]*?)(?:\\n|$))??${C}\\n*$`
      );
      let L = {
        ERROR_ASSOCIATION_PORT_OUT_OF_RANGE:
          'ERROR_ASSOCIATION_PORT_OUT_OF_RANGE',
        ERROR_FORBIDDEN_WALLET_BASE_URL: 'ERROR_FORBIDDEN_WALLET_BASE_URL',
        ERROR_SECURE_CONTEXT_REQUIRED: 'ERROR_SECURE_CONTEXT_REQUIRED',
        ERROR_SESSION_CLOSED: 'ERROR_SESSION_CLOSED',
        ERROR_SESSION_TIMEOUT: 'ERROR_SESSION_TIMEOUT',
        ERROR_WALLET_NOT_FOUND: 'ERROR_WALLET_NOT_FOUND',
        ERROR_INVALID_PROTOCOL_VERSION: 'ERROR_INVALID_PROTOCOL_VERSION',
      };
      class T extends Error {
        constructor(...t) {
          let [e, r, n] = t;
          super(r),
            (this.code = e),
            (this.data = n),
            (this.name = 'SolanaMobileWalletAdapterError');
        }
      }
      class N extends Error {
        constructor(...t) {
          let [e, r, n, i] = t;
          super(n),
            (this.code = r),
            (this.data = i),
            (this.jsonRpcMessageId = e),
            (this.name = 'SolanaMobileWalletAdapterProtocolError');
        }
      }
      function P(t, e, r, n) {
        return new (r || (r = Promise))(function (i, o) {
          function s(t) {
            try {
              u(n.next(t));
            } catch (t) {
              o(t);
            }
          }
          function a(t) {
            try {
              u(n.throw(t));
            } catch (t) {
              o(t);
            }
          }
          function u(t) {
            var e;
            t.done
              ? i(t.value)
              : ((e = t.value) instanceof r
                  ? e
                  : new r(function (t) {
                      t(e);
                    })
                ).then(s, a);
          }
          u((n = n.apply(t, e || [])).next());
        });
      }
      let U = 'solana:cloneAuthorization';
      function k(t, e) {
        return P(this, void 0, void 0, function* () {
          let r = t.slice(0, 4),
            i = t.slice(4, 16),
            o = t.slice(16),
            s = yield crypto.subtle.decrypt(j(r, i), e, o);
          return (void 0 === n && (n = new TextDecoder('utf-8')), n).decode(s);
        });
      }
      function j(t, e) {
        return { additionalData: t, iv: e, name: 'AES-GCM', tagLength: 128 };
      }
      function D(t) {
        if (t < 49152 || t > 65535)
          throw new T(
            L.ERROR_ASSOCIATION_PORT_OUT_OF_RANGE,
            `Association port number must be between 49152 and 65535. ${t} given.`,
            { port: t }
          );
        return t;
      }
      function z(t) {
        return t.replace(/(^\/+|\/+$)/g, '').split('/');
      }
      let q = { Firefox: 0, Other: 1 },
        F = null,
        $ = [150, 150, 200, 500, 500, 750, 750, 1e3];
      function W(t) {
        return new DataView(t).getUint32(0, !1);
      }
      var H = r(8672);
      function Z(t, e) {
        var r = {};
        for (var n in t)
          Object.prototype.hasOwnProperty.call(t, n) &&
            0 > e.indexOf(n) &&
            (r[n] = t[n]);
        if (null != t && 'function' == typeof Object.getOwnPropertySymbols)
          for (
            var i = 0, n = Object.getOwnPropertySymbols(t);
            i < n.length;
            i++
          )
            0 > e.indexOf(n[i]) &&
              Object.prototype.propertyIsEnumerable.call(t, n[i]) &&
              (r[n[i]] = t[n[i]]);
        return r;
      }
      function V(t, e, r, n) {
        return new (r || (r = Promise))(function (i, o) {
          function s(t) {
            try {
              u(n.next(t));
            } catch (t) {
              o(t);
            }
          }
          function a(t) {
            try {
              u(n.throw(t));
            } catch (t) {
              o(t);
            }
          }
          function u(t) {
            var e;
            t.done
              ? i(t.value)
              : ((e = t.value) instanceof r
                  ? e
                  : new r(function (t) {
                      t(e);
                    })
                ).then(s, a);
          }
          u((n = n.apply(t, e || [])).next());
        });
      }
      function K(t) {
        return window.btoa(String.fromCharCode.call(null, ...t));
      }
      function G(t) {
        return new Uint8Array(
          window
            .atob(t)
            .split('')
            .map((t) => t.charCodeAt(0))
        );
      }
      function Q(t) {
        return K(
          'version' in t
            ? t.serialize()
            : t.serialize({ requireAllSignatures: !1, verifySignatures: !1 })
        );
      }
      function Y(t) {
        let e = t[0] * B.eT + 1;
        return 'legacy' === B.EC.deserializeMessageVersion(t.slice(e, t.length))
          ? B.YW.from(t)
          : B.GS.deserialize(t);
      }
      function J(t, e, r, n) {
        return new (r || (r = Promise))(function (i, o) {
          function s(t) {
            try {
              u(n.next(t));
            } catch (t) {
              o(t);
            }
          }
          function a(t) {
            try {
              u(n.throw(t));
            } catch (t) {
              o(t);
            }
          }
          function u(t) {
            var e;
            t.done
              ? i(t.value)
              : ((e = t.value) instanceof r
                  ? e
                  : new r(function (t) {
                      t(e);
                    })
                ).then(s, a);
          }
          u((n = n.apply(t, e || [])).next());
        });
      }
      function X(t) {
        return new Uint8Array(
          window
            .atob(t)
            .split('')
            .map((t) => t.charCodeAt(0))
        );
      }
      let tt = 'Mobile Wallet Adapter';
      function te(t) {
        return 'version' in t;
      }
      class tr extends O.qz {
        constructor(t) {
          var e;
          super(),
            (this.supportedTransactionVersions = new Set(['legacy', 0])),
            (this.name = tt),
            (this.url = 'https://solanamobile.com/wallets'),
            (this.icon =
              'data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjI4IiB3aWR0aD0iMjgiIHZpZXdCb3g9Ii0zIDAgMjggMjgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0iI0RDQjhGRiI+PHBhdGggZD0iTTE3LjQgMTcuNEgxNXYyLjRoMi40di0yLjRabTEuMi05LjZoLTIuNHYyLjRoMi40VjcuOFoiLz48cGF0aCBkPSJNMjEuNiAzVjBoLTIuNHYzaC0zLjZWMGgtMi40djNoLTIuNHY2LjZINC41YTIuMSAyLjEgMCAxIDEgMC00LjJoMi43VjNINC41QTQuNSA0LjUgMCAwIDAgMCA3LjVWMjRoMjEuNnYtNi42aC0yLjR2NC4ySDIuNFYxMS41Yy41LjMgMS4yLjQgMS44LjVoNy41QTYuNiA2LjYgMCAwIDAgMjQgOVYzaC0yLjRabTAgNS43YTQuMiA0LjIgMCAxIDEtOC40IDBWNS40aDguNHYzLjNaIi8+PC9nPjwvc3ZnPg=='),
            (this._connecting = !1),
            (this._connectionGeneration = 0),
            (this._readyState =
              'undefined' != typeof window &&
              window.isSecureContext &&
              'undefined' != typeof document &&
              /android/i.test(navigator.userAgent)
                ? I.i1.Loadable
                : I.i1.Unsupported),
            (this._authorizationResultCache = t.authorizationResultCache),
            (this._addressSelector = t.addressSelector),
            (this._appIdentity = t.appIdentity),
            (this._chain =
              null !== (e = t.chain) && void 0 !== e ? e : t.cluster),
            (this._onWalletNotFound = t.onWalletNotFound),
            this._readyState !== I.i1.Unsupported &&
              this._authorizationResultCache.get().then((t) => {
                t && this.declareWalletAsInstalled();
              });
        }
        get publicKey() {
          if (null == this._publicKey && null != this._selectedAddress)
            try {
              this._publicKey = (function (t) {
                let e = X(t);
                return new B.nh(e);
              })(this._selectedAddress);
            } catch (t) {
              throw new R.Nx(
                (t instanceof Error && (null == t ? void 0 : t.message)) ||
                  'Unknown error',
                t
              );
            }
          return this._publicKey ? this._publicKey : null;
        }
        get connected() {
          return !!this._authorizationResult;
        }
        get connecting() {
          return this._connecting;
        }
        get readyState() {
          return this._readyState;
        }
        declareWalletAsInstalled() {
          this._readyState !== I.i1.Installed &&
            this.emit('readyStateChange', (this._readyState = I.i1.Installed));
        }
        runWithGuard(t) {
          return J(this, void 0, void 0, function* () {
            try {
              return yield t();
            } catch (t) {
              throw (this.emit('error', t), t);
            }
          });
        }
        autoConnect_DO_NOT_USE_OR_YOU_WILL_BE_FIRED() {
          return J(this, void 0, void 0, function* () {
            return yield this.autoConnect();
          });
        }
        autoConnect() {
          return J(this, void 0, void 0, function* () {
            if (!this.connecting && !this.connected)
              return yield this.runWithGuard(() =>
                J(this, void 0, void 0, function* () {
                  if (
                    this._readyState !== I.i1.Installed &&
                    this._readyState !== I.i1.Loadable
                  )
                    throw new R.OZ();
                  this._connecting = !0;
                  try {
                    let t = yield this._authorizationResultCache.get();
                    t && this.handleAuthorizationResult(t);
                  } catch (t) {
                    throw new R.$w(
                      (t instanceof Error && t.message) || 'Unknown error',
                      t
                    );
                  } finally {
                    this._connecting = !1;
                  }
                })
              );
          });
        }
        connect() {
          return J(this, void 0, void 0, function* () {
            if (!this.connecting && !this.connected)
              return yield this.runWithGuard(() =>
                J(this, void 0, void 0, function* () {
                  if (
                    this._readyState !== I.i1.Installed &&
                    this._readyState !== I.i1.Loadable
                  )
                    throw new R.OZ();
                  this._connecting = !0;
                  try {
                    yield this.performAuthorization();
                  } catch (t) {
                    throw new R.$w(
                      (t instanceof Error && t.message) || 'Unknown error',
                      t
                    );
                  } finally {
                    this._connecting = !1;
                  }
                })
              );
          });
        }
        performAuthorization(t) {
          return J(this, void 0, void 0, function* () {
            try {
              let e = yield this._authorizationResultCache.get();
              if (e) return this.handleAuthorizationResult(e), e;
              return yield this.transact((e) =>
                J(this, void 0, void 0, function* () {
                  let r = yield e.authorize({
                    chain: this._chain,
                    identity: this._appIdentity,
                    sign_in_payload: t,
                  });
                  return (
                    Promise.all([
                      this._authorizationResultCache.set(r),
                      this.handleAuthorizationResult(r),
                    ]),
                    r
                  );
                })
              );
            } catch (t) {
              throw new R.$w(
                (t instanceof Error && t.message) || 'Unknown error',
                t
              );
            }
          });
        }
        handleAuthorizationResult(t) {
          var e;
          return J(this, void 0, void 0, function* () {
            let r =
              null == this._authorizationResult ||
              (null === (e = this._authorizationResult) || void 0 === e
                ? void 0
                : e.accounts.length) !== t.accounts.length ||
              this._authorizationResult.accounts.some(
                (e, r) => e.address !== t.accounts[r].address
              );
            if (
              ((this._authorizationResult = t),
              this.declareWalletAsInstalled(),
              r)
            ) {
              let e = yield this._addressSelector.select(
                t.accounts.map(({ address: t }) => t)
              );
              e !== this._selectedAddress &&
                ((this._selectedAddress = e),
                delete this._publicKey,
                this.emit('connect', this.publicKey));
            }
          });
        }
        performReauthorization(t, e) {
          return J(this, void 0, void 0, function* () {
            try {
              let r = yield t.authorize({
                auth_token: e,
                identity: this._appIdentity,
              });
              Promise.all([
                this._authorizationResultCache.set(r),
                this.handleAuthorizationResult(r),
              ]);
            } catch (t) {
              throw (
                (this.disconnect(),
                new R.at(
                  (t instanceof Error && (null == t ? void 0 : t.message)) ||
                    'Unknown error',
                  t
                ))
              );
            }
          });
        }
        disconnect() {
          return J(this, void 0, void 0, function* () {
            this._authorizationResultCache.clear(),
              (this._connecting = !1),
              this._connectionGeneration++,
              delete this._authorizationResult,
              delete this._publicKey,
              delete this._selectedAddress,
              this.emit('disconnect');
          });
        }
        transact(t) {
          var e;
          return J(this, void 0, void 0, function* () {
            let r =
                null === (e = this._authorizationResult) || void 0 === e
                  ? void 0
                  : e.wallet_uri_base,
              n = this._connectionGeneration;
            try {
              return yield (function (t, e) {
                return V(this, void 0, void 0, function* () {
                  return yield (function (t, e) {
                    return P(this, void 0, void 0, function* () {
                      let r;
                      !(function () {
                        if (
                          'undefined' == typeof window ||
                          !0 !== window.isSecureContext
                        )
                          throw new T(
                            L.ERROR_SECURE_CONTEXT_REQUIRED,
                            'The mobile wallet adapter protocol must be used in a secure context (`https`).'
                          );
                      })();
                      let n = yield (function () {
                          return P(this, void 0, void 0, function* () {
                            return yield crypto.subtle.generateKey(
                              { name: 'ECDSA', namedCurve: 'P-256' },
                              !1,
                              ['sign']
                            );
                          });
                        })(),
                        i = yield (function (t, e) {
                          return P(this, void 0, void 0, function* () {
                            let r = D(
                                49152 + Math.floor(16384 * Math.random())
                              ),
                              n = yield (function (t, e, r, n = ['v1']) {
                                return P(this, void 0, void 0, function* () {
                                  let i = D(e),
                                    o = (function (t) {
                                      let e = '',
                                        r = new Uint8Array(t),
                                        n = r.byteLength;
                                      for (let t = 0; t < n; t++)
                                        e += String.fromCharCode(r[t]);
                                      return window.btoa(e);
                                    })(yield crypto.subtle.exportKey('raw', t)),
                                    s = (function (t, e) {
                                      let r = null;
                                      if (e) {
                                        try {
                                          r = new URL(e);
                                        } catch (t) {}
                                        if (
                                          (null == r ? void 0 : r.protocol) !==
                                          'https:'
                                        )
                                          throw new T(
                                            L.ERROR_FORBIDDEN_WALLET_BASE_URL,
                                            'Base URLs supplied by wallets must be valid `https` URLs'
                                          );
                                      }
                                      return (
                                        r || (r = new URL('solana-wallet:/')),
                                        new URL(
                                          t.startsWith('/')
                                            ? t
                                            : [...z(r.pathname), ...z(t)].join(
                                                '/'
                                              ),
                                          r
                                        )
                                      );
                                    })('v1/associate/local', r);
                                  return (
                                    s.searchParams.set(
                                      'association',
                                      o.replace(
                                        /[/+=]/g,
                                        (t) =>
                                          ({ '/': '_', '+': '-', '=': '.' }[t])
                                      )
                                    ),
                                    s.searchParams.set('port', `${i}`),
                                    n.forEach((t) => {
                                      s.searchParams.set('v', t);
                                    }),
                                    s
                                  );
                                });
                              })(t, r, e);
                            if ('https:' === n.protocol)
                              window.location.assign(n);
                            else
                              try {
                                switch (
                                  -1 !== navigator.userAgent.indexOf('Firefox/')
                                    ? q.Firefox
                                    : q.Other
                                ) {
                                  case q.Firefox:
                                    null == F &&
                                      (((F =
                                        document.createElement(
                                          'iframe'
                                        )).style.display = 'none'),
                                      document.body.appendChild(F)),
                                      (F.contentWindow.location.href =
                                        n.toString());
                                    break;
                                  case q.Other: {
                                    let t = new Promise((t, e) => {
                                      function r() {
                                        clearTimeout(i),
                                          window.removeEventListener('blur', n);
                                      }
                                      function n() {
                                        r(), t();
                                      }
                                      window.addEventListener('blur', n);
                                      let i = setTimeout(() => {
                                        r(), e();
                                      }, 2e3);
                                    });
                                    window.location.assign(n), yield t;
                                  }
                                }
                              } catch (t) {
                                throw new T(
                                  L.ERROR_WALLET_NOT_FOUND,
                                  'Found no installed wallet that supports the mobile wallet protocol.'
                                );
                              }
                            return r;
                          });
                        })(n.publicKey, null == e ? void 0 : e.baseUri),
                        o = `ws://localhost:${i}/solana-wallet`,
                        s = (() => {
                          let t = [...$];
                          return () => (t.length > 1 ? t.shift() : t[0]);
                        })(),
                        a = 1,
                        u = 0,
                        l = { __type: 'disconnected' };
                      return new Promise((e, h) => {
                        let c, f, d;
                        let p = {},
                          y = () =>
                            P(this, void 0, void 0, function* () {
                              if ('connecting' !== l.__type) {
                                console.warn(
                                  `Expected adapter state to be \`connecting\` at the moment the websocket opens. Got \`${l.__type}\`.`
                                );
                                return;
                              }
                              let { associationKeypair: t } = l;
                              c.removeEventListener('open', y);
                              let e = yield (function () {
                                return P(this, void 0, void 0, function* () {
                                  return yield crypto.subtle.generateKey(
                                    { name: 'ECDH', namedCurve: 'P-256' },
                                    !1,
                                    ['deriveKey', 'deriveBits']
                                  );
                                });
                              })();
                              c.send(
                                yield (function (t, e) {
                                  return P(this, void 0, void 0, function* () {
                                    let r = yield crypto.subtle.exportKey(
                                        'raw',
                                        t
                                      ),
                                      n = yield crypto.subtle.sign(
                                        { hash: 'SHA-256', name: 'ECDSA' },
                                        e,
                                        r
                                      ),
                                      i = new Uint8Array(
                                        r.byteLength + n.byteLength
                                      );
                                    return (
                                      i.set(new Uint8Array(r), 0),
                                      i.set(new Uint8Array(n), r.byteLength),
                                      i
                                    );
                                  });
                                })(e.publicKey, t.privateKey)
                              ),
                                (l = {
                                  __type: 'hello_req_sent',
                                  associationPublicKey: t.publicKey,
                                  ecdhPrivateKey: e.privateKey,
                                });
                            }),
                          m = (t) => {
                            t.wasClean
                              ? (l = { __type: 'disconnected' })
                              : h(
                                  new T(
                                    L.ERROR_SESSION_CLOSED,
                                    `The wallet session dropped unexpectedly (${t.code}: ${t.reason}).`,
                                    { closeEvent: t }
                                  )
                                ),
                              f();
                          },
                          g = (t) =>
                            P(this, void 0, void 0, function* () {
                              f(),
                                Date.now() - r >= 3e4
                                  ? h(
                                      new T(
                                        L.ERROR_SESSION_TIMEOUT,
                                        `Failed to connect to the wallet websocket on port ${i}.`
                                      )
                                    )
                                  : (yield new Promise((t) => {
                                      let e = s();
                                      d = window.setTimeout(t, e);
                                    }),
                                    v());
                            }),
                          w = (r) =>
                            P(this, void 0, void 0, function* () {
                              let n = yield r.data.arrayBuffer();
                              switch (l.__type) {
                                case 'connected':
                                  try {
                                    let t = n.slice(0, 4),
                                      e = W(t);
                                    if (e !== u + 1)
                                      throw Error(
                                        'Encrypted message has invalid sequence number'
                                      );
                                    u = e;
                                    let r = yield (function (t, e) {
                                        return P(
                                          this,
                                          void 0,
                                          void 0,
                                          function* () {
                                            let r = JSON.parse(yield k(t, e));
                                            if (
                                              Object.hasOwnProperty.call(
                                                r,
                                                'error'
                                              )
                                            )
                                              throw new N(
                                                r.id,
                                                r.error.code,
                                                r.error.message
                                              );
                                            return r;
                                          }
                                        );
                                      })(n, l.sharedSecret),
                                      i = p[r.id];
                                    delete p[r.id], i.resolve(r.result);
                                  } catch (t) {
                                    if (t instanceof N) {
                                      let e = p[t.jsonRpcMessageId];
                                      delete p[t.jsonRpcMessageId], e.reject(t);
                                    } else throw t;
                                  }
                                  break;
                                case 'hello_req_sent': {
                                  var i, o;
                                  let r = yield (function (t, e, r) {
                                      return P(
                                        this,
                                        void 0,
                                        void 0,
                                        function* () {
                                          let [n, i] = yield Promise.all([
                                              crypto.subtle.exportKey('raw', e),
                                              crypto.subtle.importKey(
                                                'raw',
                                                t.slice(0, 65),
                                                {
                                                  name: 'ECDH',
                                                  namedCurve: 'P-256',
                                                },
                                                !1,
                                                []
                                              ),
                                            ]),
                                            o = yield crypto.subtle.deriveBits(
                                              { name: 'ECDH', public: i },
                                              r,
                                              256
                                            ),
                                            s = yield crypto.subtle.importKey(
                                              'raw',
                                              o,
                                              'HKDF',
                                              !1,
                                              ['deriveKey']
                                            );
                                          return yield crypto.subtle.deriveKey(
                                            {
                                              name: 'HKDF',
                                              hash: 'SHA-256',
                                              salt: new Uint8Array(n),
                                              info: new Uint8Array(),
                                            },
                                            s,
                                            { name: 'AES-GCM', length: 128 },
                                            !1,
                                            ['encrypt', 'decrypt']
                                          );
                                        }
                                      );
                                    })(
                                      n,
                                      l.associationPublicKey,
                                      l.ecdhPrivateKey
                                    ),
                                    s = n.slice(65),
                                    d =
                                      0 !== s.byteLength
                                        ? yield P(
                                            this,
                                            void 0,
                                            void 0,
                                            function* () {
                                              let t = W(s.slice(0, 4));
                                              if (t !== u + 1)
                                                throw Error(
                                                  'Encrypted message has invalid sequence number'
                                                );
                                              return (
                                                (u = t),
                                                (function (t, e) {
                                                  return P(
                                                    this,
                                                    void 0,
                                                    void 0,
                                                    function* () {
                                                      let r = JSON.parse(
                                                          yield k(t, e)
                                                        ),
                                                        n = 'legacy';
                                                      if (
                                                        Object.hasOwnProperty.call(
                                                          r,
                                                          'v'
                                                        )
                                                      )
                                                        switch (r.v) {
                                                          case 1:
                                                          case '1':
                                                          case 'v1':
                                                            n = 'v1';
                                                            break;
                                                          case 'legacy':
                                                            n = 'legacy';
                                                            break;
                                                          default:
                                                            throw new T(
                                                              L.ERROR_INVALID_PROTOCOL_VERSION,
                                                              `Unknown/unsupported protocol version: ${r.v}`
                                                            );
                                                        }
                                                      return {
                                                        protocol_version: n,
                                                      };
                                                    }
                                                  );
                                                })(s, r)
                                              );
                                            }
                                          )
                                        : { protocol_version: 'legacy' };
                                  l = {
                                    __type: 'connected',
                                    sharedSecret: r,
                                    sessionProperties: d,
                                  };
                                  let y =
                                    ((i = d.protocol_version),
                                    (o = (t, e) =>
                                      P(this, void 0, void 0, function* () {
                                        let n = a++;
                                        return (
                                          c.send(
                                            yield (function (t, e) {
                                              return P(
                                                this,
                                                void 0,
                                                void 0,
                                                function* () {
                                                  let r = JSON.stringify(t);
                                                  return (function (t, e, r) {
                                                    return P(
                                                      this,
                                                      void 0,
                                                      void 0,
                                                      function* () {
                                                        let n = (function (t) {
                                                            if (t >= 4294967296)
                                                              throw Error(
                                                                'Outbound sequence number overflow. The maximum sequence number is 32-bytes.'
                                                              );
                                                            let e =
                                                              new ArrayBuffer(
                                                                4
                                                              );
                                                            return (
                                                              new DataView(
                                                                e
                                                              ).setUint32(
                                                                0,
                                                                t,
                                                                !1
                                                              ),
                                                              new Uint8Array(e)
                                                            );
                                                          })(e),
                                                          i = new Uint8Array(
                                                            12
                                                          );
                                                        crypto.getRandomValues(
                                                          i
                                                        );
                                                        let o =
                                                            yield crypto.subtle.encrypt(
                                                              j(n, i),
                                                              r,
                                                              new TextEncoder().encode(
                                                                t
                                                              )
                                                            ),
                                                          s = new Uint8Array(
                                                            n.byteLength +
                                                              i.byteLength +
                                                              o.byteLength
                                                          );
                                                        return (
                                                          s.set(
                                                            new Uint8Array(n),
                                                            0
                                                          ),
                                                          s.set(
                                                            new Uint8Array(i),
                                                            n.byteLength
                                                          ),
                                                          s.set(
                                                            new Uint8Array(o),
                                                            n.byteLength +
                                                              i.byteLength
                                                          ),
                                                          s
                                                        );
                                                      }
                                                    );
                                                  })(r, t.id, e);
                                                }
                                              );
                                            })(
                                              {
                                                id: n,
                                                jsonrpc: '2.0',
                                                method: t,
                                                params: null != e ? e : {},
                                              },
                                              r
                                            )
                                          ),
                                          new Promise((e, r) => {
                                            p[n] = {
                                              resolve(n) {
                                                switch (t) {
                                                  case 'authorize':
                                                  case 'reauthorize': {
                                                    let { wallet_uri_base: t } =
                                                      n;
                                                    if (null != t)
                                                      try {
                                                        !(function (t) {
                                                          let e;
                                                          try {
                                                            e = new URL(t);
                                                          } catch (t) {
                                                            throw new T(
                                                              L.ERROR_FORBIDDEN_WALLET_BASE_URL,
                                                              'Invalid base URL supplied by wallet'
                                                            );
                                                          }
                                                          if (
                                                            'https:' !==
                                                            e.protocol
                                                          )
                                                            throw new T(
                                                              L.ERROR_FORBIDDEN_WALLET_BASE_URL,
                                                              'Base URLs supplied by wallets must be valid `https` URLs'
                                                            );
                                                        })(t);
                                                      } catch (t) {
                                                        r(t);
                                                        return;
                                                      }
                                                  }
                                                }
                                                e(n);
                                              },
                                              reject: r,
                                            };
                                          })
                                        );
                                      })),
                                    new Proxy(
                                      {},
                                      {
                                        get: (t, e) => (
                                          null == t[e] &&
                                            (t[e] = function (t) {
                                              return P(
                                                this,
                                                void 0,
                                                void 0,
                                                function* () {
                                                  let { method: r, params: n } =
                                                      (function (t, e, r) {
                                                        let n = e,
                                                          i = t
                                                            .toString()
                                                            .replace(
                                                              /[A-Z]/g,
                                                              (t) =>
                                                                `_${t.toLowerCase()}`
                                                            )
                                                            .toLowerCase();
                                                        switch (t) {
                                                          case 'authorize': {
                                                            let { chain: t } =
                                                              n;
                                                            if (
                                                              'legacy' === r
                                                            ) {
                                                              switch (t) {
                                                                case 'solana:testnet':
                                                                  t = 'testnet';
                                                                  break;
                                                                case 'solana:devnet':
                                                                  t = 'devnet';
                                                                  break;
                                                                case 'solana:mainnet':
                                                                  t =
                                                                    'mainnet-beta';
                                                                  break;
                                                                default:
                                                                  t = n.cluster;
                                                              }
                                                              n.cluster = t;
                                                            } else {
                                                              switch (t) {
                                                                case 'testnet':
                                                                case 'devnet':
                                                                  t = `solana:${t}`;
                                                                  break;
                                                                case 'mainnet-beta':
                                                                  t =
                                                                    'solana:mainnet';
                                                              }
                                                              n.chain = t;
                                                            }
                                                          }
                                                          case 'reauthorize': {
                                                            let {
                                                              auth_token: t,
                                                              identity: e,
                                                            } = n;
                                                            t &&
                                                              ('legacy' === r
                                                                ? ((i =
                                                                    'reauthorize'),
                                                                  (n = {
                                                                    auth_token:
                                                                      t,
                                                                    identity: e,
                                                                  }))
                                                                : (i =
                                                                    'authorize'));
                                                          }
                                                        }
                                                        return {
                                                          method: i,
                                                          params: n,
                                                        };
                                                      })(e, t, i),
                                                    s = yield o(r, n);
                                                  return (
                                                    'authorize' === r &&
                                                      n.sign_in_payload &&
                                                      !s.sign_in_result &&
                                                      (s.sign_in_result =
                                                        yield (function (
                                                          t,
                                                          e,
                                                          r
                                                        ) {
                                                          var n;
                                                          return P(
                                                            this,
                                                            void 0,
                                                            void 0,
                                                            function* () {
                                                              var i, o;
                                                              let s =
                                                                  null !==
                                                                    (n =
                                                                      t.domain) &&
                                                                  void 0 !== n
                                                                    ? n
                                                                    : window
                                                                        .location
                                                                        .host,
                                                                a =
                                                                  e.accounts[0]
                                                                    .address,
                                                                u =
                                                                  ((i =
                                                                    Object.assign(
                                                                      Object.assign(
                                                                        {},
                                                                        t
                                                                      ),
                                                                      {
                                                                        domain:
                                                                          s,
                                                                        address:
                                                                          a,
                                                                      }
                                                                    )),
                                                                  (o =
                                                                    (function (
                                                                      t
                                                                    ) {
                                                                      let e = `${t.domain} wants you to sign in with your Solana account:
`;
                                                                      (e += `${t.address}`),
                                                                        t.statement &&
                                                                          (e += `

${t.statement}`);
                                                                      let r =
                                                                        [];
                                                                      if (
                                                                        (t.uri &&
                                                                          r.push(
                                                                            `URI: ${t.uri}`
                                                                          ),
                                                                        t.version &&
                                                                          r.push(
                                                                            `Version: ${t.version}`
                                                                          ),
                                                                        t.chainId &&
                                                                          r.push(
                                                                            `Chain ID: ${t.chainId}`
                                                                          ),
                                                                        t.nonce &&
                                                                          r.push(
                                                                            `Nonce: ${t.nonce}`
                                                                          ),
                                                                        t.issuedAt &&
                                                                          r.push(
                                                                            `Issued At: ${t.issuedAt}`
                                                                          ),
                                                                        t.expirationTime &&
                                                                          r.push(
                                                                            `Expiration Time: ${t.expirationTime}`
                                                                          ),
                                                                        t.notBefore &&
                                                                          r.push(
                                                                            `Not Before: ${t.notBefore}`
                                                                          ),
                                                                        t.requestId &&
                                                                          r.push(
                                                                            `Request ID: ${t.requestId}`
                                                                          ),
                                                                        t.resources)
                                                                      )
                                                                        for (let e of (r.push(
                                                                          'Resources:'
                                                                        ),
                                                                        t.resources))
                                                                          r.push(
                                                                            `- ${e}`
                                                                          );
                                                                      return (
                                                                        r.length &&
                                                                          (e += `

${r.join('\n')}`),
                                                                        e
                                                                      );
                                                                    })(i)),
                                                                  window.btoa(
                                                                    o
                                                                  )),
                                                                l = yield r(
                                                                  'sign_messages',
                                                                  {
                                                                    addresses: [
                                                                      a,
                                                                    ],
                                                                    payloads: [
                                                                      u,
                                                                    ],
                                                                  }
                                                                );
                                                              return {
                                                                address: a,
                                                                signed_message:
                                                                  u,
                                                                signature:
                                                                  l.signed_payloads[0].slice(
                                                                    u.length
                                                                  ),
                                                              };
                                                            }
                                                          );
                                                        })(
                                                          n.sign_in_payload,
                                                          s,
                                                          o
                                                        )),
                                                    (function (t, e, r) {
                                                      if (
                                                        'getCapabilities' === t
                                                      )
                                                        switch (r) {
                                                          case 'legacy': {
                                                            let t = [
                                                              'solana:signTransactions',
                                                            ];
                                                            return (
                                                              !0 ===
                                                                e.supports_clone_authorization &&
                                                                t.push(U),
                                                              Object.assign(
                                                                Object.assign(
                                                                  {},
                                                                  e
                                                                ),
                                                                { features: t }
                                                              )
                                                            );
                                                          }
                                                          case 'v1':
                                                            return Object.assign(
                                                              Object.assign(
                                                                {},
                                                                e
                                                              ),
                                                              {
                                                                supports_sign_and_send_transactions:
                                                                  !0,
                                                                supports_clone_authorization:
                                                                  e.features.includes(
                                                                    U
                                                                  ),
                                                              }
                                                            );
                                                        }
                                                      return e;
                                                    })(e, s, i)
                                                  );
                                                }
                                              );
                                            }),
                                          t[e]
                                        ),
                                        defineProperty: () => !1,
                                        deleteProperty: () => !1,
                                      }
                                    ));
                                  try {
                                    e(yield t(y));
                                  } catch (t) {
                                    h(t);
                                  } finally {
                                    f(), c.close();
                                  }
                                }
                              }
                            }),
                          v = () => {
                            f && f(),
                              (l = {
                                __type: 'connecting',
                                associationKeypair: n,
                              }),
                              void 0 === r && (r = Date.now()),
                              (c = new WebSocket(o, [
                                'com.solana.mobilewalletadapter.v1',
                              ])).addEventListener('open', y),
                              c.addEventListener('close', m),
                              c.addEventListener('error', g),
                              c.addEventListener('message', w),
                              (f = () => {
                                window.clearTimeout(d),
                                  c.removeEventListener('open', y),
                                  c.removeEventListener('close', m),
                                  c.removeEventListener('error', g),
                                  c.removeEventListener('message', w);
                              });
                          };
                        v();
                      });
                    });
                  })(
                    (e) =>
                      t(
                        new Proxy(
                          {},
                          {
                            get(t, r) {
                              if (null == t[r])
                                switch (r) {
                                  case 'signAndSendTransactions':
                                    t[r] = function (t) {
                                      var {
                                          minContextSlot: r,
                                          commitment: n,
                                          skipPreflight: i,
                                          maxRetries: o,
                                          waitForCommitmentToSendNextTransaction:
                                            s,
                                          transactions: a,
                                        } = t,
                                        u = Z(t, [
                                          'minContextSlot',
                                          'commitment',
                                          'skipPreflight',
                                          'maxRetries',
                                          'waitForCommitmentToSendNextTransaction',
                                          'transactions',
                                        ]);
                                      return V(
                                        this,
                                        void 0,
                                        void 0,
                                        function* () {
                                          let t = a.map(Q),
                                            l = {
                                              min_context_slot: r,
                                              commitment: n,
                                              skip_preflight: i,
                                              max_retries: o,
                                              wait_for_commitment_to_send_next_transaction:
                                                s,
                                            },
                                            { signatures: h } =
                                              yield e.signAndSendTransactions(
                                                Object.assign(
                                                  Object.assign(
                                                    Object.assign({}, u),
                                                    Object.values(l).some(
                                                      (t) => null != t
                                                    )
                                                      ? { options: l }
                                                      : null
                                                  ),
                                                  { payloads: t }
                                                )
                                              );
                                          return h.map(G).map(H.encode);
                                        }
                                      );
                                    };
                                    break;
                                  case 'signMessages':
                                    t[r] = function (t) {
                                      var { payloads: r } = t,
                                        n = Z(t, ['payloads']);
                                      return V(
                                        this,
                                        void 0,
                                        void 0,
                                        function* () {
                                          let t = r.map(K),
                                            { signed_payloads: i } =
                                              yield e.signMessages(
                                                Object.assign(
                                                  Object.assign({}, n),
                                                  { payloads: t }
                                                )
                                              );
                                          return i.map(G);
                                        }
                                      );
                                    };
                                    break;
                                  case 'signTransactions':
                                    t[r] = function (t) {
                                      var { transactions: r } = t,
                                        n = Z(t, ['transactions']);
                                      return V(
                                        this,
                                        void 0,
                                        void 0,
                                        function* () {
                                          let t = r.map(Q),
                                            { signed_payloads: i } =
                                              yield e.signTransactions(
                                                Object.assign(
                                                  Object.assign({}, n),
                                                  { payloads: t }
                                                )
                                              );
                                          return i.map(G).map(Y);
                                        }
                                      );
                                    };
                                    break;
                                  default:
                                    t[r] = e[r];
                                }
                              return t[r];
                            },
                            defineProperty: () => !1,
                            deleteProperty: () => !1,
                          }
                        )
                      ),
                    e
                  );
                });
              })(t, r ? { baseUri: r } : void 0);
            } catch (t) {
              throw (
                (this._connectionGeneration !== n &&
                  (yield new Promise(() => {})),
                t instanceof Error &&
                  'SolanaMobileWalletAdapterError' === t.name &&
                  'ERROR_WALLET_NOT_FOUND' === t.code &&
                  (yield this._onWalletNotFound(this)),
                t)
              );
            }
          });
        }
        assertIsAuthorized() {
          if (!this._authorizationResult || !this._selectedAddress)
            throw new R.oS();
          return {
            authToken: this._authorizationResult.auth_token,
            selectedAddress: this._selectedAddress,
          };
        }
        performSignTransactions(t) {
          return J(this, void 0, void 0, function* () {
            let { authToken: e } = this.assertIsAuthorized();
            try {
              return yield this.transact((r) =>
                J(this, void 0, void 0, function* () {
                  return (
                    yield this.performReauthorization(r, e),
                    yield r.signTransactions({ transactions: t })
                  );
                })
              );
            } catch (t) {
              throw new R.PY(null == t ? void 0 : t.message, t);
            }
          });
        }
        sendTransaction(t, e, r) {
          return J(this, void 0, void 0, function* () {
            return yield this.runWithGuard(() =>
              J(this, void 0, void 0, function* () {
                let { authToken: n } = this.assertIsAuthorized(),
                  i = null == r ? void 0 : r.minContextSlot;
                try {
                  return yield this.transact((o) =>
                    J(this, void 0, void 0, function* () {
                      function s() {
                        let t, n;
                        switch (e.commitment) {
                          case 'confirmed':
                          case 'finalized':
                          case 'processed':
                            t = e.commitment;
                            break;
                          default:
                            t = 'finalized';
                        }
                        switch (null == r ? void 0 : r.preflightCommitment) {
                          case 'confirmed':
                          case 'finalized':
                          case 'processed':
                            n = r.preflightCommitment;
                            break;
                          case void 0:
                            n = t;
                            break;
                          default:
                            n = 'finalized';
                        }
                        let i =
                            'finalized' === n ? 2 : 'confirmed' === n ? 1 : 0,
                          o = 'finalized' === t ? 2 : 'confirmed' === t ? 1 : 0;
                        return i < o ? n : t;
                      }
                      let [a, u, l] = yield Promise.all([
                        o.getCapabilities(),
                        this.performReauthorization(o, n),
                        te(t)
                          ? null
                          : J(this, void 0, void 0, function* () {
                              var r;
                              if (
                                (t.feePayer ||
                                  (t.feePayer =
                                    null !== (r = this.publicKey) &&
                                    void 0 !== r
                                      ? r
                                      : void 0),
                                null == t.recentBlockhash)
                              ) {
                                let { blockhash: r } =
                                  yield e.getLatestBlockhash({
                                    commitment: s(),
                                  });
                                t.recentBlockhash = r;
                              }
                            }),
                      ]);
                      if (a.supports_sign_and_send_transactions)
                        return (yield o.signAndSendTransactions({
                          minContextSlot: i,
                          transactions: [t],
                        }))[0];
                      {
                        let [n] = yield o.signTransactions({
                          transactions: [t],
                        });
                        if (te(n)) return yield e.sendTransaction(n);
                        {
                          let t = n.serialize();
                          return yield e.sendRawTransaction(
                            t,
                            Object.assign(Object.assign({}, r), {
                              preflightCommitment: s(),
                            })
                          );
                        }
                      }
                    })
                  );
                } catch (t) {
                  throw new R.IW(null == t ? void 0 : t.message, t);
                }
              })
            );
          });
        }
        signTransaction(t) {
          return J(this, void 0, void 0, function* () {
            return yield this.runWithGuard(() =>
              J(this, void 0, void 0, function* () {
                let [e] = yield this.performSignTransactions([t]);
                return e;
              })
            );
          });
        }
        signAllTransactions(t) {
          return J(this, void 0, void 0, function* () {
            return yield this.runWithGuard(() =>
              J(this, void 0, void 0, function* () {
                return yield this.performSignTransactions(t);
              })
            );
          });
        }
        signMessage(t) {
          return J(this, void 0, void 0, function* () {
            return yield this.runWithGuard(() =>
              J(this, void 0, void 0, function* () {
                let { authToken: e, selectedAddress: r } =
                  this.assertIsAuthorized();
                try {
                  return yield this.transact((n) =>
                    J(this, void 0, void 0, function* () {
                      yield this.performReauthorization(n, e);
                      let [i] = yield n.signMessages({
                        addresses: [r],
                        payloads: [t],
                      });
                      return i.slice(-64);
                    })
                  );
                } catch (t) {
                  throw new R.fk(null == t ? void 0 : t.message, t);
                }
              })
            );
          });
        }
        signIn(t) {
          return J(this, void 0, void 0, function* () {
            return yield this.runWithGuard(() =>
              J(this, void 0, void 0, function* () {
                var e, r;
                if (
                  this._readyState !== I.i1.Installed &&
                  this._readyState !== I.i1.Loadable
                )
                  throw new R.OZ();
                this._connecting = !0;
                try {
                  let n = yield this.performAuthorization(
                    Object.assign(Object.assign({}, t), {
                      domain:
                        null !== (e = null == t ? void 0 : t.domain) &&
                        void 0 !== e
                          ? e
                          : window.location.host,
                    })
                  );
                  if (!n.sign_in_result)
                    throw Error(
                      'Sign in failed, no sign in result returned by wallet'
                    );
                  let i = n.sign_in_result.address;
                  return {
                    account: Object.assign(
                      Object.assign(
                        {},
                        null !== (r = n.accounts.find((t) => t.address == i)) &&
                          void 0 !== r
                          ? r
                          : { address: i }
                      ),
                      { publicKey: X(i) }
                    ),
                    signedMessage: X(n.sign_in_result.signed_message),
                    signature: X(n.sign_in_result.signature),
                  };
                } catch (t) {
                  throw new R.$w(
                    (t instanceof Error && t.message) || 'Unknown error',
                    t
                  );
                } finally {
                  this._connecting = !1;
                }
              })
            );
          });
        }
      }
      let tn = 'SolanaMobileWalletAdapterDefaultAuthorizationCache';
      function ti(t) {
        return J(this, void 0, void 0, function* () {
          'undefined' != typeof window && window.location.assign(t.url);
        });
      }
      let to = 'solana:signAndSendTransaction',
        ts = 'solana:signTransaction',
        ta = 'standard:connect',
        tu = 'standard:events',
        tl = function (t) {
          return (
            ta in t.features &&
            tu in t.features &&
            (to in t.features || ts in t.features)
          );
        };
      var th = r(9931);
      let tc = 'solana:signMessage',
        tf = 'solana:signIn',
        td = 'solana:mainnet';
      function tp(t) {
        switch (t) {
          case 'processed':
          case 'confirmed':
          case 'finalized':
          case void 0:
            return t;
          case 'recent':
            return 'processed';
          case 'single':
          case 'singleGossip':
            return 'confirmed';
          case 'max':
          case 'root':
            return 'finalized';
          default:
            return;
        }
      }
      let ty = 'standard:disconnect';
      new WeakMap(),
        new WeakMap(),
        new WeakMap(),
        new WeakMap(),
        new WeakMap(),
        new WeakMap();
      var tm = function (t, e, r, n, i) {
          if ('m' === n) throw TypeError('Private method is not writable');
          if ('a' === n && !i)
            throw TypeError('Private accessor was defined without a setter');
          if ('function' == typeof e ? t !== e || !i : !e.has(t))
            throw TypeError(
              'Cannot write private member to an object whose class did not declare it'
            );
          return 'a' === n ? i.call(t, r) : i ? (i.value = r) : e.set(t, r), r;
        },
        tg = function (t, e, r, n) {
          if ('a' === r && !n)
            throw TypeError('Private accessor was defined without a getter');
          if ('function' == typeof e ? t !== e || !n : !e.has(t))
            throw TypeError(
              'Cannot read private member from an object whose class did not declare it'
            );
          return 'm' === r ? n : 'a' === r ? n.call(t) : n ? n.value : e.get(t);
        };
      class tw extends I.mI {
        constructor({ wallet: t }) {
          super(),
            a.add(this),
            u.set(this, void 0),
            l.set(this, void 0),
            h.set(this, void 0),
            c.set(this, void 0),
            f.set(this, void 0),
            d.set(this, void 0),
            p.set(this, void 0),
            y.set(
              this,
              'undefined' == typeof window || 'undefined' == typeof document
                ? I.i1.Unsupported
                : I.i1.Installed
            ),
            b.set(this, (t) => {
              if ('accounts' in t) {
                let t = tg(this, p, 'f').accounts[0];
                tg(this, u, 'f') &&
                  !tg(this, c, 'f') &&
                  t !== tg(this, u, 'f') &&
                  (t
                    ? tg(this, a, 'm', g).call(this, t)
                    : (this.emit('error', new R.at()),
                      tg(this, a, 'm', w).call(this)));
              }
              'features' in t && tg(this, a, 'm', v).call(this);
            }),
            tm(this, p, t, 'f'),
            tm(this, u, null, 'f'),
            tm(this, l, null, 'f'),
            tm(this, h, !1, 'f'),
            tm(this, c, !1, 'f'),
            tm(
              this,
              f,
              tg(this, p, 'f').features[tu].on('change', tg(this, b, 'f')),
              'f'
            ),
            tg(this, a, 'm', v).call(this);
        }
        get name() {
          return tg(this, p, 'f').name;
        }
        get url() {
          return 'https://github.com/solana-labs/wallet-standard';
        }
        get icon() {
          return tg(this, p, 'f').icon;
        }
        get readyState() {
          return tg(this, y, 'f');
        }
        get publicKey() {
          return tg(this, l, 'f');
        }
        get connecting() {
          return tg(this, h, 'f');
        }
        get supportedTransactionVersions() {
          return tg(this, d, 'f');
        }
        get wallet() {
          return tg(this, p, 'f');
        }
        get standard() {
          return !0;
        }
        destroy() {
          tm(this, u, null, 'f'),
            tm(this, l, null, 'f'),
            tm(this, h, !1, 'f'),
            tm(this, c, !1, 'f');
          let t = tg(this, f, 'f');
          t && (tm(this, f, null, 'f'), t());
        }
        async autoConnect() {
          return tg(this, a, 'm', m).call(this, { silent: !0 });
        }
        async connect() {
          return tg(this, a, 'm', m).call(this);
        }
        async disconnect() {
          if (ty in tg(this, p, 'f').features)
            try {
              tm(this, c, !0, 'f'),
                await tg(this, p, 'f').features[ty].disconnect();
            } catch (t) {
              this.emit('error', new R.UG(t?.message, t));
            } finally {
              tm(this, c, !1, 'f');
            }
          tg(this, a, 'm', w).call(this);
        }
        async sendTransaction(t, e, r = {}) {
          try {
            var n;
            let i;
            let o = tg(this, u, 'f');
            if (!o) throw new R.oS();
            if (to in tg(this, p, 'f').features) {
              if (o.features.includes(to)) i = to;
              else if (
                ts in tg(this, p, 'f').features &&
                o.features.includes(ts)
              )
                i = ts;
              else throw new R.cO();
            } else if (ts in tg(this, p, 'f').features) {
              if (!o.features.includes(ts)) throw new R.cO();
              i = ts;
            } else throw new R.p6();
            let s = (n = e.rpcEndpoint).includes(
              'https://api.mainnet-beta.solana.com'
            )
              ? td
              : /\bdevnet\b/i.test(n)
              ? 'solana:devnet'
              : /\btestnet\b/i.test(n)
              ? 'solana:testnet'
              : /\blocalhost\b/i.test(n) || /\b127\.0\.0\.1\b/.test(n)
              ? 'solana:localnet'
              : td;
            if (!o.chains.includes(s)) throw new R.IW();
            try {
              let n;
              let { signers: a, ...u } = r;
              if (
                ((0, th.W)(t)
                  ? (a?.length && t.sign(a), (n = t.serialize()))
                  : ((t = await this.prepareTransaction(t, e, u)),
                    a?.length && t.partialSign(...a),
                    (n = new Uint8Array(
                      t.serialize({
                        requireAllSignatures: !1,
                        verifySignatures: !1,
                      })
                    ))),
                i === to)
              ) {
                let [t] = await tg(this, p, 'f').features[
                  to
                ].signAndSendTransaction({
                  account: o,
                  chain: s,
                  transaction: n,
                  options: {
                    preflightCommitment: tp(
                      u.preflightCommitment || e.commitment
                    ),
                    skipPreflight: u.skipPreflight,
                    maxRetries: u.maxRetries,
                    minContextSlot: u.minContextSlot,
                  },
                });
                return H.encode(t.signature);
              }
              {
                let [t] = await tg(this, p, 'f').features[ts].signTransaction({
                  account: o,
                  chain: s,
                  transaction: n,
                  options: {
                    preflightCommitment: tp(
                      u.preflightCommitment || e.commitment
                    ),
                    minContextSlot: u.minContextSlot,
                  },
                });
                return await e.sendRawTransaction(t.signedTransaction, {
                  ...u,
                  preflightCommitment: tp(
                    u.preflightCommitment || e.commitment
                  ),
                });
              }
            } catch (t) {
              if (t instanceof R.lj) throw t;
              throw new R.IW(t?.message, t);
            }
          } catch (t) {
            throw (this.emit('error', t), t);
          }
        }
      }
      (u = new WeakMap()),
        (l = new WeakMap()),
        (h = new WeakMap()),
        (c = new WeakMap()),
        (f = new WeakMap()),
        (d = new WeakMap()),
        (p = new WeakMap()),
        (y = new WeakMap()),
        (b = new WeakMap()),
        (a = new WeakSet()),
        (m = async function (t) {
          try {
            if (this.connected || this.connecting) return;
            if (tg(this, y, 'f') !== I.i1.Installed) throw new R.OZ();
            if ((tm(this, h, !0, 'f'), !tg(this, p, 'f').accounts.length))
              try {
                await tg(this, p, 'f').features[ta].connect(t);
              } catch (t) {
                throw new R.$w(t?.message, t);
              }
            let e = tg(this, p, 'f').accounts[0];
            if (!e) throw new R.cO();
            tg(this, a, 'm', g).call(this, e);
          } catch (t) {
            throw (this.emit('error', t), t);
          } finally {
            tm(this, h, !1, 'f');
          }
        }),
        (g = function (t) {
          let e;
          try {
            e = new B.nh(t.address);
          } catch (t) {
            throw new R.Nx(t?.message, t);
          }
          tm(this, u, t, 'f'),
            tm(this, l, e, 'f'),
            tg(this, a, 'm', v).call(this),
            this.emit('connect', e);
        }),
        (w = function () {
          tm(this, u, null, 'f'),
            tm(this, l, null, 'f'),
            tg(this, a, 'm', v).call(this),
            this.emit('disconnect');
        }),
        (v = function () {
          let t =
            to in tg(this, p, 'f').features
              ? tg(this, p, 'f').features[to].supportedTransactionVersions
              : tg(this, p, 'f').features[ts].supportedTransactionVersions;
          tm(
            this,
            d,
            !(function (t, e) {
              if (t === e) return !0;
              let r = t.length;
              if (r !== e.length) return !1;
              for (let n = 0; n < r; n++) if (t[n] !== e[n]) return !1;
              return !0;
            })(t, ['legacy'])
              ? new Set(t)
              : null,
            'f'
          ),
            ts in tg(this, p, 'f').features &&
            tg(this, u, 'f')?.features.includes(ts)
              ? ((this.signTransaction = tg(this, a, 'm', E)),
                (this.signAllTransactions = tg(this, a, 'm', M)))
              : (delete this.signTransaction, delete this.signAllTransactions),
            tc in tg(this, p, 'f').features &&
            tg(this, u, 'f')?.features.includes(tc)
              ? (this.signMessage = tg(this, a, 'm', _))
              : delete this.signMessage,
            tf in tg(this, p, 'f').features
              ? (this.signIn = tg(this, a, 'm', S))
              : delete this.signIn;
        }),
        (E = async function (t) {
          try {
            let e = tg(this, u, 'f');
            if (!e) throw new R.oS();
            if (!(ts in tg(this, p, 'f').features)) throw new R.p6();
            if (!e.features.includes(ts)) throw new R.cO();
            try {
              let r = (
                await tg(this, p, 'f').features[ts].signTransaction({
                  account: e,
                  transaction: (0, th.W)(t)
                    ? t.serialize()
                    : new Uint8Array(
                        t.serialize({
                          requireAllSignatures: !1,
                          verifySignatures: !1,
                        })
                      ),
                })
              )[0].signedTransaction;
              return (0, th.W)(t) ? B.GS.deserialize(r) : B.YW.from(r);
            } catch (t) {
              if (t instanceof R.lj) throw t;
              throw new R.PY(t?.message, t);
            }
          } catch (t) {
            throw (this.emit('error', t), t);
          }
        }),
        (M = async function (t) {
          try {
            let e = tg(this, u, 'f');
            if (!e) throw new R.oS();
            if (!(ts in tg(this, p, 'f').features)) throw new R.p6();
            if (!e.features.includes(ts)) throw new R.cO();
            try {
              let r = await tg(this, p, 'f').features[ts].signTransaction(
                ...t.map((t) => ({
                  account: e,
                  transaction: (0, th.W)(t)
                    ? t.serialize()
                    : new Uint8Array(
                        t.serialize({
                          requireAllSignatures: !1,
                          verifySignatures: !1,
                        })
                      ),
                }))
              );
              return t.map((t, e) => {
                let n = r[e].signedTransaction;
                return (0, th.W)(t) ? B.GS.deserialize(n) : B.YW.from(n);
              });
            } catch (t) {
              throw new R.PY(t?.message, t);
            }
          } catch (t) {
            throw (this.emit('error', t), t);
          }
        }),
        (_ = async function (t) {
          try {
            let e = tg(this, u, 'f');
            if (!e) throw new R.oS();
            if (!(tc in tg(this, p, 'f').features)) throw new R.p6();
            if (!e.features.includes(tc)) throw new R.cO();
            try {
              return (
                await tg(this, p, 'f').features[tc].signMessage({
                  account: e,
                  message: t,
                })
              )[0].signature;
            } catch (t) {
              throw new R.fk(t?.message, t);
            }
          } catch (t) {
            throw (this.emit('error', t), t);
          }
        }),
        (S = async function (t = {}) {
          try {
            let e;
            if (!(tf in tg(this, p, 'f').features)) throw new R.p6();
            try {
              [e] = await tg(this, p, 'f').features[tf].signIn(t);
            } catch (t) {
              throw new R.bD(t?.message, t);
            }
            if (!e) throw new R.bD();
            return tg(this, a, 'm', g).call(this, e.account), e;
          } catch (t) {
            throw (this.emit('error', t), t);
          }
        });
      var tv = function (t, e, r, n, i) {
          if ('m' === n) throw TypeError('Private method is not writable');
          if ('a' === n && !i)
            throw TypeError('Private accessor was defined without a setter');
          if ('function' == typeof e ? t !== e || !i : !e.has(t))
            throw TypeError(
              'Cannot write private member to an object whose class did not declare it'
            );
          return 'a' === n ? i.call(t, r) : i ? (i.value = r) : e.set(t, r), r;
        },
        tb = function (t, e, r, n) {
          if ('a' === r && !n)
            throw TypeError('Private accessor was defined without a getter');
          if ('function' == typeof e ? t !== e || !n : !e.has(t))
            throw TypeError(
              'Cannot read private member from an object whose class did not declare it'
            );
          return 'm' === r ? n : 'a' === r ? n.call(t) : n ? n.value : e.get(t);
        };
      let tE = new Set(),
        tM = {};
      function t_(...t) {
        return (t = t.filter((t) => !tE.has(t))).length
          ? (t.forEach((t) => tE.add(t)),
            tM.register?.forEach((e) => tx(() => e(...t))),
            function () {
              t.forEach((t) => tE.delete(t)),
                tM.unregister?.forEach((e) => tx(() => e(...t)));
            })
          : () => {};
      }
      function tS() {
        return [...tE];
      }
      function tA(t, e) {
        return (
          tM[t]?.push(e) || (tM[t] = [e]),
          function () {
            tM[t] = tM[t]?.filter((t) => e !== t);
          }
        );
      }
      function tx(t) {
        try {
          t();
        } catch (t) {
          console.error(t);
        }
      }
      class tO extends Event {
        constructor(t) {
          super('wallet-standard:app-ready', {
            bubbles: !1,
            cancelable: !1,
            composed: !1,
          }),
            A.set(this, void 0),
            tv(this, A, t, 'f');
        }
        get detail() {
          return tb(this, A, 'f');
        }
        get type() {
          return 'wallet-standard:app-ready';
        }
        preventDefault() {
          throw Error('preventDefault cannot be called');
        }
        stopImmediatePropagation() {
          throw Error('stopImmediatePropagation cannot be called');
        }
        stopPropagation() {
          throw Error('stopPropagation cannot be called');
        }
      }
      A = new WeakMap();
      var tI = r(2265);
      function tR(t) {
        let e = (0, tI.useRef)();
        return e.current || (e.current = { value: t() }), e.current.value;
      }
      function tB(t) {
        return t.filter(tl).map((t) => new tw({ wallet: t }));
      }
      ((s = x || (x = {}))[(s.DESKTOP_WEB = 0)] = 'DESKTOP_WEB'),
        (s[(s.MOBILE_WEB = 1)] = 'MOBILE_WEB');
      var tC = r(1811);
      class tL extends R.lj {
        constructor() {
          super(...arguments), (this.name = 'WalletNotSelectedError');
        }
      }
      var tT = r(8782);
      function tN({
        children: t,
        wallets: e,
        adapter: r,
        isUnloadingRef: n,
        onAutoConnectRequest: i,
        onConnectError: o,
        onError: s,
        onSelectWallet: a,
      }) {
        let u = (0, tI.useRef)(!1),
          [l, h] = (0, tI.useState)(!1),
          c = (0, tI.useRef)(!1),
          [f, d] = (0, tI.useState)(!1),
          [p, y] = (0, tI.useState)(() => r?.publicKey ?? null),
          [m, g] = (0, tI.useState)(() => r?.connected ?? !1),
          w = (0, tI.useRef)(s);
        (0, tI.useEffect)(
          () => (
            (w.current = s),
            () => {
              w.current = void 0;
            }
          ),
          [s]
        );
        let v = (0, tI.useRef)(
            (t, e) => (
              !n.current &&
                (w.current
                  ? w.current(t, e)
                  : (console.error(t, e),
                    t instanceof R.OZ &&
                      'undefined' != typeof window &&
                      e &&
                      window.open(e.url, '_blank'))),
              t
            )
          ),
          [b, E] = (0, tI.useState)(() =>
            e
              .map((t) => ({ adapter: t, readyState: t.readyState }))
              .filter(({ readyState: t }) => t !== I.i1.Unsupported)
          );
        (0, tI.useEffect)(() => {
          function t(t) {
            E((e) => {
              let r = e.findIndex(({ adapter: t }) => t === this);
              if (-1 === r) return e;
              let { adapter: n } = e[r];
              return [
                ...e.slice(0, r),
                { adapter: n, readyState: t },
                ...e.slice(r + 1),
              ].filter(({ readyState: t }) => t !== I.i1.Unsupported);
            });
          }
          return (
            E((t) =>
              e
                .map((e, r) => {
                  let n = t[r];
                  return n && n.adapter === e && n.readyState === e.readyState
                    ? n
                    : { adapter: e, readyState: e.readyState };
                })
                .filter(({ readyState: t }) => t !== I.i1.Unsupported)
            ),
            e.forEach((e) => e.on('readyStateChange', t, e)),
            () => {
              e.forEach((e) => e.off('readyStateChange', t, e));
            }
          );
        }, [r, e]);
        let M = (0, tI.useMemo)(
          () => b.find((t) => t.adapter === r) ?? null,
          [r, b]
        );
        (0, tI.useEffect)(() => {
          if (!r) return;
          let t = (t) => {
              y(t), (u.current = !1), h(!1), g(!0), (c.current = !1), d(!1);
            },
            e = () => {
              n.current ||
                (y(null),
                (u.current = !1),
                h(!1),
                g(!1),
                (c.current = !1),
                d(!1));
            },
            i = (t) => {
              v.current(t, r);
            };
          return (
            r.on('connect', t),
            r.on('disconnect', e),
            r.on('error', i),
            () => {
              r.off('connect', t),
                r.off('disconnect', e),
                r.off('error', i),
                e();
            }
          );
        }, [r, n]);
        let _ = (0, tI.useRef)(!1);
        (0, tI.useEffect)(
          () => () => {
            _.current = !1;
          },
          [r]
        ),
          (0, tI.useEffect)(() => {
            _.current ||
              u.current ||
              m ||
              !i ||
              (M?.readyState !== I.i1.Installed &&
                M?.readyState !== I.i1.Loadable) ||
              ((u.current = !0),
              h(!0),
              (_.current = !0),
              (async function () {
                try {
                  await i();
                } catch {
                  o();
                } finally {
                  h(!1), (u.current = !1);
                }
              })());
          }, [m, i, o, M]);
        let S = (0, tI.useCallback)(
            async (t, e, n) => {
              if (!r) throw v.current(new tL());
              if (!m) throw v.current(new R.oS(), r);
              return await r.sendTransaction(t, e, n);
            },
            [r, m]
          ),
          A = (0, tI.useMemo)(
            () =>
              r && 'signTransaction' in r
                ? async (t) => {
                    if (!m) throw v.current(new R.oS(), r);
                    return await r.signTransaction(t);
                  }
                : void 0,
            [r, m]
          ),
          x = (0, tI.useMemo)(
            () =>
              r && 'signAllTransactions' in r
                ? async (t) => {
                    if (!m) throw v.current(new R.oS(), r);
                    return await r.signAllTransactions(t);
                  }
                : void 0,
            [r, m]
          ),
          O = (0, tI.useMemo)(
            () =>
              r && 'signMessage' in r
                ? async (t) => {
                    if (!m) throw v.current(new R.oS(), r);
                    return await r.signMessage(t);
                  }
                : void 0,
            [r, m]
          ),
          B = (0, tI.useMemo)(
            () =>
              r && 'signIn' in r ? async (t) => await r.signIn(t) : void 0,
            [r]
          ),
          C = (0, tI.useCallback)(async () => {
            if (u.current || c.current || M?.adapter.connected) return;
            if (!M) throw v.current(new tL());
            let { adapter: t, readyState: e } = M;
            if (!(e === I.i1.Installed || e === I.i1.Loadable))
              throw v.current(new R.OZ(), t);
            (u.current = !0), h(!0);
            try {
              await t.connect();
            } catch (t) {
              throw (o(), t);
            } finally {
              h(!1), (u.current = !1);
            }
          }, [o, M]),
          L = (0, tI.useCallback)(async () => {
            if (!c.current && r) {
              (c.current = !0), d(!0);
              try {
                await r.disconnect();
              } finally {
                d(!1), (c.current = !1);
              }
            }
          }, [r]);
        return tI.createElement(
          tT.z.Provider,
          {
            value: {
              autoConnect: !!i,
              wallets: b,
              wallet: M,
              publicKey: p,
              connected: m,
              connecting: l,
              disconnecting: f,
              select: a,
              connect: C,
              disconnect: L,
              sendTransaction: S,
              signTransaction: A,
              signAllTransactions: x,
              signMessage: O,
              signIn: B,
            },
          },
          t
        );
      }
      function tP(t) {
        return (
          (function ({ adapters: t, userAgentString: e }) {
            return t.some(
              (t) => t.name !== tt && t.readyState === I.i1.Installed
            )
              ? x.DESKTOP_WEB
              : e &&
                /android/i.test(e) &&
                !/(WebView|Version\/.+(Chrome)\/(\d+)\.(\d+)\.(\d+)\.(\d+)|; wv\).+(Chrome)\/(\d+)\.(\d+)\.(\d+)\.(\d+))/i.test(
                  e
                )
              ? x.MOBILE_WEB
              : x.DESKTOP_WEB;
          })({
            adapters: t,
            userAgentString:
              (void 0 === i && (i = globalThis.navigator?.userAgent ?? null),
              i),
          }) === x.MOBILE_WEB
        );
      }
      function tU({
        children: t,
        wallets: e,
        autoConnect: r,
        localStorageKey: n = 'walletName',
        onError: i,
      }) {
        let { connection: s } = (0, tC.R)(),
          a = (function (t) {
            let e = tR(() => new Set()),
              { get: r, on: n } = tR(() =>
                (function () {
                  if (
                    o ||
                    ((o = (function () {
                      if (
                        o ||
                        ((o = Object.freeze({ register: t_, get: tS, on: tA })),
                        'undefined' == typeof window)
                      )
                        return o;
                      let t = Object.freeze({ register: t_ });
                      try {
                        window.addEventListener(
                          'wallet-standard:register-wallet',
                          ({ detail: e }) => e(t)
                        );
                      } catch (t) {
                        console.error(
                          'wallet-standard:register-wallet event listener could not be added\n',
                          t
                        );
                      }
                      try {
                        window.dispatchEvent(new tO(t));
                      } catch (t) {
                        console.error(
                          'wallet-standard:app-ready event could not be dispatched\n',
                          t
                        );
                      }
                      return o;
                    })()),
                    'undefined' == typeof window)
                  )
                    return o;
                  let t = window.navigator.wallets || [];
                  if (!Array.isArray(t))
                    return (
                      console.error('window.navigator.wallets is not an array'),
                      o
                    );
                  let { register: e } = o,
                    r = (...t) =>
                      t.forEach((t) => tx(() => t({ register: e })));
                  try {
                    Object.defineProperty(window.navigator, 'wallets', {
                      value: Object.freeze({ push: r }),
                    });
                  } catch (t) {
                    return (
                      console.error(
                        'window.navigator.wallets could not be set'
                      ),
                      o
                    );
                  }
                  return r(...t), o;
                })()
              ),
              [i, s] = (0, tI.useState)(() => tB(r()));
            (0, tI.useEffect)(() => {
              let t = [
                n('register', (...t) => s((e) => [...e, ...tB(t)])),
                n('unregister', (...t) =>
                  s((e) => e.filter((e) => t.some((t) => t === e.wallet)))
                ),
              ];
              return () => t.forEach((t) => t());
            }, [n]);
            let a = (function (t) {
              let e = (0, tI.useRef)();
              return (
                (0, tI.useEffect)(() => {
                  e.current = t;
                }),
                e.current
              );
            })(i);
            return (
              (0, tI.useEffect)(() => {
                if (!a) return;
                let t = new Set(i);
                new Set(a.filter((e) => !t.has(e))).forEach((t) => t.destroy());
              }, [a, i]),
              (0, tI.useEffect)(() => () => i.forEach((t) => t.destroy()), []),
              (0, tI.useMemo)(
                () => [
                  ...i,
                  ...t.filter(
                    ({ name: t }) =>
                      !i.some((e) => e.name === t) ||
                      (e.has(t) ||
                        (e.add(t),
                        console.warn(
                          `${t} was registered as a Standard Wallet. The Wallet Adapter for ${t} can be removed from your app.`
                        )),
                      !1)
                  ),
                ],
                [i, t, e]
              )
            );
          })(e),
          u = (0, tI.useMemo)(() => {
            var t;
            if (!tP(a)) return null;
            let e = a.find((t) => t.name === tt);
            return (
              e ||
              new tr({
                addressSelector: {
                  select(t) {
                    return J(this, void 0, void 0, function* () {
                      return t[0];
                    });
                  },
                },
                appIdentity: {
                  uri: (function () {
                    let t = globalThis.location;
                    if (t) return `${t.protocol}//${t.host}`;
                  })(),
                },
                authorizationResultCache: (function () {
                  let t;
                  try {
                    t = window.localStorage;
                  } catch (t) {}
                  return {
                    clear() {
                      return J(this, void 0, void 0, function* () {
                        if (t)
                          try {
                            t.removeItem(tn);
                          } catch (t) {}
                      });
                    },
                    get() {
                      return J(this, void 0, void 0, function* () {
                        if (t)
                          try {
                            return JSON.parse(t.getItem(tn)) || void 0;
                          } catch (t) {}
                      });
                    },
                    set(e) {
                      return J(this, void 0, void 0, function* () {
                        if (t)
                          try {
                            t.setItem(tn, JSON.stringify(e));
                          } catch (t) {}
                      });
                    },
                  };
                })(),
                cluster: (t = s?.rpcEndpoint)
                  ? /devnet/i.test(t)
                    ? 'devnet'
                    : /testnet/i.test(t)
                    ? 'testnet'
                    : 'mainnet-beta'
                  : 'mainnet-beta',
                onWalletNotFound: ti,
              })
            );
          }, [a, s?.rpcEndpoint]),
          l = (0, tI.useMemo)(
            () => (null == u || -1 !== a.indexOf(u) ? a : [u, ...a]),
            [a, u]
          ),
          [h, c] = (function (t, e) {
            let r = (0, tI.useState)(() => {
                try {
                  let e = localStorage.getItem(t);
                  if (e) return JSON.parse(e);
                } catch (t) {
                  'undefined' != typeof window && console.error(t);
                }
                return e;
              }),
              n = r[0],
              i = (0, tI.useRef)(!0);
            return (
              (0, tI.useEffect)(() => {
                if (i.current) {
                  i.current = !1;
                  return;
                }
                try {
                  null === n
                    ? localStorage.removeItem(t)
                    : localStorage.setItem(t, JSON.stringify(n));
                } catch (t) {
                  'undefined' != typeof window && console.error(t);
                }
              }, [n, t]),
              r
            );
          })(n, tP(a) ? tt : null),
          f = (0, tI.useMemo)(
            () => l.find((t) => t.name === h) ?? null,
            [l, h]
          ),
          d = (0, tI.useCallback)(
            (t) => {
              h !== t && (f && f.name !== tt && f.disconnect(), c(t));
            },
            [f, c, h]
          );
        (0, tI.useEffect)(() => {
          if (f)
            return (
              f.on('disconnect', t),
              () => {
                f.off('disconnect', t);
              }
            );
          function t() {
            !m.current && ((h === tt && tP(a)) || c(null));
          }
        }, [f, a, c, h]);
        let p = (0, tI.useRef)(!1),
          y = (0, tI.useMemo)(() => {
            if (r && f)
              return async () => {
                (!0 === r || (await r(f))) &&
                  (p.current ? await f.connect() : await f.autoConnect());
              };
          }, [r, f]),
          m = (0, tI.useRef)(!1);
        (0, tI.useEffect)(() => {
          if (h === tt && tP(a)) {
            m.current = !1;
            return;
          }
          function t() {
            m.current = !0;
          }
          return (
            window.addEventListener('beforeunload', t),
            () => {
              window.removeEventListener('beforeunload', t);
            }
          );
        }, [a, h]);
        let g = (0, tI.useCallback)(() => {
            f && f.name !== tt && d(null);
          }, [f, d]),
          w = (0, tI.useCallback)(
            (t) => {
              (p.current = !0), d(t);
            },
            [d]
          );
        return tI.createElement(
          tN,
          {
            wallets: l,
            adapter: f,
            isUnloadingRef: m,
            onAutoConnectRequest: y,
            onConnectError: g,
            onError: i,
            onSelectWallet: w,
          },
          t
        );
      }
    },
    1074: function (t, e, r) {
      'use strict';
      r.d(e, {
        S: function () {
          return N;
        },
      });
      var n = 'undefined' == typeof window || 'Deno' in globalThis;
      function i() {}
      function o(t, e) {
        return 'function' == typeof t ? t(e) : t;
      }
      function s(t, e) {
        let {
          type: r = 'all',
          exact: n,
          fetchStatus: i,
          predicate: o,
          queryKey: s,
          stale: a,
        } = t;
        if (s) {
          if (n) {
            if (e.queryHash !== u(s, e.options)) return !1;
          } else if (!h(e.queryKey, s)) return !1;
        }
        if ('all' !== r) {
          let t = e.isActive();
          if (('active' === r && !t) || ('inactive' === r && t)) return !1;
        }
        return (
          ('boolean' != typeof a || e.isStale() === a) &&
          (!i || i === e.state.fetchStatus) &&
          (!o || !!o(e))
        );
      }
      function a(t, e) {
        let { exact: r, status: n, predicate: i, mutationKey: o } = t;
        if (o) {
          if (!e.options.mutationKey) return !1;
          if (r) {
            if (l(e.options.mutationKey) !== l(o)) return !1;
          } else if (!h(e.options.mutationKey, o)) return !1;
        }
        return (!n || e.state.status === n) && (!i || !!i(e));
      }
      function u(t, e) {
        return (e?.queryKeyHashFn || l)(t);
      }
      function l(t) {
        return JSON.stringify(t, (t, e) =>
          f(e)
            ? Object.keys(e)
                .sort()
                .reduce((t, r) => ((t[r] = e[r]), t), {})
            : e
        );
      }
      function h(t, e) {
        return (
          t === e ||
          (typeof t == typeof e &&
            !!t &&
            !!e &&
            'object' == typeof t &&
            'object' == typeof e &&
            !Object.keys(e).some((r) => !h(t[r], e[r])))
        );
      }
      function c(t) {
        return Array.isArray(t) && t.length === Object.keys(t).length;
      }
      function f(t) {
        if (!d(t)) return !1;
        let e = t.constructor;
        if (void 0 === e) return !0;
        let r = e.prototype;
        return (
          !!(d(r) && r.hasOwnProperty('isPrototypeOf')) &&
          Object.getPrototypeOf(t) === Object.prototype
        );
      }
      function d(t) {
        return '[object Object]' === Object.prototype.toString.call(t);
      }
      function p(t, e, r = 0) {
        let n = [...t, e];
        return r && n.length > r ? n.slice(1) : n;
      }
      function y(t, e, r = 0) {
        let n = [e, ...t];
        return r && n.length > r ? n.slice(0, -1) : n;
      }
      var m = Symbol(),
        g = (t, e) =>
          !t.queryFn && e?.initialPromise
            ? () => e.initialPromise
            : t.queryFn && t.queryFn !== m
            ? t.queryFn
            : () => Promise.reject(Error(`Missing queryFn: '${t.queryHash}'`)),
        w = (function () {
          let t = [],
            e = 0,
            r = (t) => {
              t();
            },
            n = (t) => {
              t();
            },
            i = (t) => setTimeout(t, 0),
            o = (n) => {
              e
                ? t.push(n)
                : i(() => {
                    r(n);
                  });
            },
            s = () => {
              let e = t;
              (t = []),
                e.length &&
                  i(() => {
                    n(() => {
                      e.forEach((t) => {
                        r(t);
                      });
                    });
                  });
            };
          return {
            batch: (t) => {
              let r;
              e++;
              try {
                r = t();
              } finally {
                --e || s();
              }
              return r;
            },
            batchCalls:
              (t) =>
              (...e) => {
                o(() => {
                  t(...e);
                });
              },
            schedule: o,
            setNotifyFunction: (t) => {
              r = t;
            },
            setBatchNotifyFunction: (t) => {
              n = t;
            },
            setScheduler: (t) => {
              i = t;
            },
          };
        })(),
        v = class {
          constructor() {
            (this.listeners = new Set()),
              (this.subscribe = this.subscribe.bind(this));
          }
          subscribe(t) {
            return (
              this.listeners.add(t),
              this.onSubscribe(),
              () => {
                this.listeners.delete(t), this.onUnsubscribe();
              }
            );
          }
          hasListeners() {
            return this.listeners.size > 0;
          }
          onSubscribe() {}
          onUnsubscribe() {}
        },
        b = new (class extends v {
          #t;
          #e;
          #r;
          constructor() {
            super(),
              (this.#r = (t) => {
                if (!n && window.addEventListener) {
                  let e = () => t();
                  return (
                    window.addEventListener('visibilitychange', e, !1),
                    () => {
                      window.removeEventListener('visibilitychange', e);
                    }
                  );
                }
              });
          }
          onSubscribe() {
            this.#e || this.setEventListener(this.#r);
          }
          onUnsubscribe() {
            this.hasListeners() || (this.#e?.(), (this.#e = void 0));
          }
          setEventListener(t) {
            (this.#r = t),
              this.#e?.(),
              (this.#e = t((t) => {
                'boolean' == typeof t ? this.setFocused(t) : this.onFocus();
              }));
          }
          setFocused(t) {
            this.#t !== t && ((this.#t = t), this.onFocus());
          }
          onFocus() {
            let t = this.isFocused();
            this.listeners.forEach((e) => {
              e(t);
            });
          }
          isFocused() {
            return 'boolean' == typeof this.#t
              ? this.#t
              : globalThis.document?.visibilityState !== 'hidden';
          }
        })(),
        E = new (class extends v {
          #n = !0;
          #e;
          #r;
          constructor() {
            super(),
              (this.#r = (t) => {
                if (!n && window.addEventListener) {
                  let e = () => t(!0),
                    r = () => t(!1);
                  return (
                    window.addEventListener('online', e, !1),
                    window.addEventListener('offline', r, !1),
                    () => {
                      window.removeEventListener('online', e),
                        window.removeEventListener('offline', r);
                    }
                  );
                }
              });
          }
          onSubscribe() {
            this.#e || this.setEventListener(this.#r);
          }
          onUnsubscribe() {
            this.hasListeners() || (this.#e?.(), (this.#e = void 0));
          }
          setEventListener(t) {
            (this.#r = t),
              this.#e?.(),
              (this.#e = t(this.setOnline.bind(this)));
          }
          setOnline(t) {
            this.#n !== t &&
              ((this.#n = t),
              this.listeners.forEach((e) => {
                e(t);
              }));
          }
          isOnline() {
            return this.#n;
          }
        })();
      function M(t) {
        return Math.min(1e3 * 2 ** t, 3e4);
      }
      function _(t) {
        return (t ?? 'online') !== 'online' || E.isOnline();
      }
      var S = class {
        constructor(t) {
          (this.revert = t?.revert), (this.silent = t?.silent);
        }
      };
      function A(t) {
        return t instanceof S;
      }
      function x(t) {
        let e,
          r,
          i,
          o = !1,
          s = 0,
          a = !1,
          u = new Promise((t, e) => {
            (r = t), (i = e);
          }),
          l = () =>
            b.isFocused() &&
            ('always' === t.networkMode || E.isOnline()) &&
            t.canRun(),
          h = () => _(t.networkMode) && t.canRun(),
          c = (n) => {
            a || ((a = !0), t.onSuccess?.(n), e?.(), r(n));
          },
          f = (r) => {
            a || ((a = !0), t.onError?.(r), e?.(), i(r));
          },
          d = () =>
            new Promise((r) => {
              (e = (t) => {
                (a || l()) && r(t);
              }),
                t.onPause?.();
            }).then(() => {
              (e = void 0), a || t.onContinue?.();
            }),
          p = () => {
            let e;
            if (a) return;
            let r = 0 === s ? t.initialPromise : void 0;
            try {
              e = r ?? t.fn();
            } catch (t) {
              e = Promise.reject(t);
            }
            Promise.resolve(e)
              .then(c)
              .catch((e) => {
                if (a) return;
                let r = t.retry ?? (n ? 0 : 3),
                  i = t.retryDelay ?? M,
                  u = 'function' == typeof i ? i(s, e) : i,
                  h =
                    !0 === r ||
                    ('number' == typeof r && s < r) ||
                    ('function' == typeof r && r(s, e));
                if (o || !h) {
                  f(e);
                  return;
                }
                s++,
                  t.onFail?.(s, e),
                  new Promise((t) => {
                    setTimeout(t, u);
                  })
                    .then(() => (l() ? void 0 : d()))
                    .then(() => {
                      o ? f(e) : p();
                    });
              });
          };
        return {
          promise: u,
          cancel: (e) => {
            a || (f(new S(e)), t.abort?.());
          },
          continue: () => (e?.(), u),
          cancelRetry: () => {
            o = !0;
          },
          continueRetry: () => {
            o = !1;
          },
          canStart: h,
          start: () => (h() ? p() : d().then(p), u),
        };
      }
      var O = class {
          #i;
          destroy() {
            this.clearGcTimeout();
          }
          scheduleGc() {
            var t;
            this.clearGcTimeout(),
              'number' == typeof (t = this.gcTime) &&
                t >= 0 &&
                t !== 1 / 0 &&
                (this.#i = setTimeout(() => {
                  this.optionalRemove();
                }, this.gcTime));
          }
          updateGcTime(t) {
            this.gcTime = Math.max(this.gcTime || 0, t ?? (n ? 1 / 0 : 3e5));
          }
          clearGcTimeout() {
            this.#i && (clearTimeout(this.#i), (this.#i = void 0));
          }
        },
        I = class extends O {
          #o;
          #s;
          #a;
          #u;
          #l;
          #h;
          constructor(t) {
            super(),
              (this.#h = !1),
              (this.#l = t.defaultOptions),
              this.setOptions(t.options),
              (this.observers = []),
              (this.#a = t.cache),
              (this.queryKey = t.queryKey),
              (this.queryHash = t.queryHash),
              (this.#o =
                t.state ||
                (function (t) {
                  let e =
                      'function' == typeof t.initialData
                        ? t.initialData()
                        : t.initialData,
                    r = void 0 !== e,
                    n = r
                      ? 'function' == typeof t.initialDataUpdatedAt
                        ? t.initialDataUpdatedAt()
                        : t.initialDataUpdatedAt
                      : 0;
                  return {
                    data: e,
                    dataUpdateCount: 0,
                    dataUpdatedAt: r ? n ?? Date.now() : 0,
                    error: null,
                    errorUpdateCount: 0,
                    errorUpdatedAt: 0,
                    fetchFailureCount: 0,
                    fetchFailureReason: null,
                    fetchMeta: null,
                    isInvalidated: !1,
                    status: r ? 'success' : 'pending',
                    fetchStatus: 'idle',
                  };
                })(this.options)),
              (this.state = this.#o),
              this.scheduleGc();
          }
          get meta() {
            return this.options.meta;
          }
          get promise() {
            return this.#u?.promise;
          }
          setOptions(t) {
            (this.options = { ...this.#l, ...t }),
              this.updateGcTime(this.options.gcTime);
          }
          optionalRemove() {
            this.observers.length ||
              'idle' !== this.state.fetchStatus ||
              this.#a.remove(this);
          }
          setData(t, e) {
            var r, n;
            let i =
              ((r = this.state.data),
              'function' == typeof (n = this.options).structuralSharing
                ? n.structuralSharing(r, t)
                : !1 !== n.structuralSharing
                ? (function t(e, r) {
                    if (e === r) return e;
                    let n = c(e) && c(r);
                    if (n || (f(e) && f(r))) {
                      let i = n ? e : Object.keys(e),
                        o = i.length,
                        s = n ? r : Object.keys(r),
                        a = s.length,
                        u = n ? [] : {},
                        l = 0;
                      for (let o = 0; o < a; o++) {
                        let a = n ? o : s[o];
                        ((!n && i.includes(a)) || n) &&
                        void 0 === e[a] &&
                        void 0 === r[a]
                          ? ((u[a] = void 0), l++)
                          : ((u[a] = t(e[a], r[a])),
                            u[a] === e[a] && void 0 !== e[a] && l++);
                      }
                      return o === a && l === o ? e : u;
                    }
                    return r;
                  })(r, t)
                : t);
            return (
              this.#c({
                data: i,
                type: 'success',
                dataUpdatedAt: e?.updatedAt,
                manual: e?.manual,
              }),
              i
            );
          }
          setState(t, e) {
            this.#c({ type: 'setState', state: t, setStateOptions: e });
          }
          cancel(t) {
            let e = this.#u?.promise;
            return (
              this.#u?.cancel(t), e ? e.then(i).catch(i) : Promise.resolve()
            );
          }
          destroy() {
            super.destroy(), this.cancel({ silent: !0 });
          }
          reset() {
            this.destroy(), this.setState(this.#o);
          }
          isActive() {
            return this.observers.some((t) => !1 !== t.options.enabled);
          }
          isDisabled() {
            return this.getObserversCount() > 0 && !this.isActive();
          }
          isStale() {
            return (
              !!this.state.isInvalidated ||
              (this.getObserversCount() > 0
                ? this.observers.some((t) => t.getCurrentResult().isStale)
                : void 0 === this.state.data)
            );
          }
          isStaleByTime(t = 0) {
            return (
              this.state.isInvalidated ||
              void 0 === this.state.data ||
              !Math.max(this.state.dataUpdatedAt + (t || 0) - Date.now(), 0)
            );
          }
          onFocus() {
            let t = this.observers.find((t) => t.shouldFetchOnWindowFocus());
            t?.refetch({ cancelRefetch: !1 }), this.#u?.continue();
          }
          onOnline() {
            let t = this.observers.find((t) => t.shouldFetchOnReconnect());
            t?.refetch({ cancelRefetch: !1 }), this.#u?.continue();
          }
          addObserver(t) {
            this.observers.includes(t) ||
              (this.observers.push(t),
              this.clearGcTimeout(),
              this.#a.notify({
                type: 'observerAdded',
                query: this,
                observer: t,
              }));
          }
          removeObserver(t) {
            this.observers.includes(t) &&
              ((this.observers = this.observers.filter((e) => e !== t)),
              this.observers.length ||
                (this.#u &&
                  (this.#h
                    ? this.#u.cancel({ revert: !0 })
                    : this.#u.cancelRetry()),
                this.scheduleGc()),
              this.#a.notify({
                type: 'observerRemoved',
                query: this,
                observer: t,
              }));
          }
          getObserversCount() {
            return this.observers.length;
          }
          invalidate() {
            this.state.isInvalidated || this.#c({ type: 'invalidate' });
          }
          fetch(t, e) {
            if ('idle' !== this.state.fetchStatus) {
              if (void 0 !== this.state.data && e?.cancelRefetch)
                this.cancel({ silent: !0 });
              else if (this.#u) return this.#u.continueRetry(), this.#u.promise;
            }
            if ((t && this.setOptions(t), !this.options.queryFn)) {
              let t = this.observers.find((t) => t.options.queryFn);
              t && this.setOptions(t.options);
            }
            let r = new AbortController(),
              n = (t) => {
                Object.defineProperty(t, 'signal', {
                  enumerable: !0,
                  get: () => ((this.#h = !0), r.signal),
                });
              },
              i = {
                fetchOptions: e,
                options: this.options,
                queryKey: this.queryKey,
                state: this.state,
                fetchFn: () => {
                  let t = g(this.options, e),
                    r = { queryKey: this.queryKey, meta: this.meta };
                  return (n(r), (this.#h = !1), this.options.persister)
                    ? this.options.persister(t, r, this)
                    : t(r);
                },
              };
            n(i),
              this.options.behavior?.onFetch(i, this),
              (this.#s = this.state),
              ('idle' === this.state.fetchStatus ||
                this.state.fetchMeta !== i.fetchOptions?.meta) &&
                this.#c({ type: 'fetch', meta: i.fetchOptions?.meta });
            let o = (t) => {
              (A(t) && t.silent) || this.#c({ type: 'error', error: t }),
                A(t) ||
                  (this.#a.config.onError?.(t, this),
                  this.#a.config.onSettled?.(this.state.data, t, this)),
                this.isFetchingOptimistic || this.scheduleGc(),
                (this.isFetchingOptimistic = !1);
            };
            return (
              (this.#u = x({
                initialPromise: e?.initialPromise,
                fn: i.fetchFn,
                abort: r.abort.bind(r),
                onSuccess: (t) => {
                  if (void 0 === t) {
                    o(Error(`${this.queryHash} data is undefined`));
                    return;
                  }
                  this.setData(t),
                    this.#a.config.onSuccess?.(t, this),
                    this.#a.config.onSettled?.(t, this.state.error, this),
                    this.isFetchingOptimistic || this.scheduleGc(),
                    (this.isFetchingOptimistic = !1);
                },
                onError: o,
                onFail: (t, e) => {
                  this.#c({ type: 'failed', failureCount: t, error: e });
                },
                onPause: () => {
                  this.#c({ type: 'pause' });
                },
                onContinue: () => {
                  this.#c({ type: 'continue' });
                },
                retry: i.options.retry,
                retryDelay: i.options.retryDelay,
                networkMode: i.options.networkMode,
                canRun: () => !0,
              })),
              this.#u.start()
            );
          }
          #c(t) {
            (this.state = ((e) => {
              switch (t.type) {
                case 'failed':
                  return {
                    ...e,
                    fetchFailureCount: t.failureCount,
                    fetchFailureReason: t.error,
                  };
                case 'pause':
                  return { ...e, fetchStatus: 'paused' };
                case 'continue':
                  return { ...e, fetchStatus: 'fetching' };
                case 'fetch':
                  var r;
                  return {
                    ...e,
                    ...((r = e.data),
                    {
                      fetchFailureCount: 0,
                      fetchFailureReason: null,
                      fetchStatus: _(this.options.networkMode)
                        ? 'fetching'
                        : 'paused',
                      ...(void 0 === r && { error: null, status: 'pending' }),
                    }),
                    fetchMeta: t.meta ?? null,
                  };
                case 'success':
                  return {
                    ...e,
                    data: t.data,
                    dataUpdateCount: e.dataUpdateCount + 1,
                    dataUpdatedAt: t.dataUpdatedAt ?? Date.now(),
                    error: null,
                    isInvalidated: !1,
                    status: 'success',
                    ...(!t.manual && {
                      fetchStatus: 'idle',
                      fetchFailureCount: 0,
                      fetchFailureReason: null,
                    }),
                  };
                case 'error':
                  let n = t.error;
                  if (A(n) && n.revert && this.#s)
                    return { ...this.#s, fetchStatus: 'idle' };
                  return {
                    ...e,
                    error: n,
                    errorUpdateCount: e.errorUpdateCount + 1,
                    errorUpdatedAt: Date.now(),
                    fetchFailureCount: e.fetchFailureCount + 1,
                    fetchFailureReason: n,
                    fetchStatus: 'idle',
                    status: 'error',
                  };
                case 'invalidate':
                  return { ...e, isInvalidated: !0 };
                case 'setState':
                  return { ...e, ...t.state };
              }
            })(this.state)),
              w.batch(() => {
                this.observers.forEach((t) => {
                  t.onQueryUpdate();
                }),
                  this.#a.notify({ query: this, type: 'updated', action: t });
              });
          }
        },
        R = class extends v {
          constructor(t = {}) {
            super(), (this.config = t), (this.#f = new Map());
          }
          #f;
          build(t, e, r) {
            let n = e.queryKey,
              i = e.queryHash ?? u(n, e),
              o = this.get(i);
            return (
              o ||
                ((o = new I({
                  cache: this,
                  queryKey: n,
                  queryHash: i,
                  options: t.defaultQueryOptions(e),
                  state: r,
                  defaultOptions: t.getQueryDefaults(n),
                })),
                this.add(o)),
              o
            );
          }
          add(t) {
            this.#f.has(t.queryHash) ||
              (this.#f.set(t.queryHash, t),
              this.notify({ type: 'added', query: t }));
          }
          remove(t) {
            let e = this.#f.get(t.queryHash);
            e &&
              (t.destroy(),
              e === t && this.#f.delete(t.queryHash),
              this.notify({ type: 'removed', query: t }));
          }
          clear() {
            w.batch(() => {
              this.getAll().forEach((t) => {
                this.remove(t);
              });
            });
          }
          get(t) {
            return this.#f.get(t);
          }
          getAll() {
            return [...this.#f.values()];
          }
          find(t) {
            let e = { exact: !0, ...t };
            return this.getAll().find((t) => s(e, t));
          }
          findAll(t = {}) {
            let e = this.getAll();
            return Object.keys(t).length > 0 ? e.filter((e) => s(t, e)) : e;
          }
          notify(t) {
            w.batch(() => {
              this.listeners.forEach((e) => {
                e(t);
              });
            });
          }
          onFocus() {
            w.batch(() => {
              this.getAll().forEach((t) => {
                t.onFocus();
              });
            });
          }
          onOnline() {
            w.batch(() => {
              this.getAll().forEach((t) => {
                t.onOnline();
              });
            });
          }
        },
        B = class extends O {
          #d;
          #p;
          #u;
          constructor(t) {
            super(),
              (this.mutationId = t.mutationId),
              (this.#p = t.mutationCache),
              (this.#d = []),
              (this.state = t.state || {
                context: void 0,
                data: void 0,
                error: null,
                failureCount: 0,
                failureReason: null,
                isPaused: !1,
                status: 'idle',
                variables: void 0,
                submittedAt: 0,
              }),
              this.setOptions(t.options),
              this.scheduleGc();
          }
          setOptions(t) {
            (this.options = t), this.updateGcTime(this.options.gcTime);
          }
          get meta() {
            return this.options.meta;
          }
          addObserver(t) {
            this.#d.includes(t) ||
              (this.#d.push(t),
              this.clearGcTimeout(),
              this.#p.notify({
                type: 'observerAdded',
                mutation: this,
                observer: t,
              }));
          }
          removeObserver(t) {
            (this.#d = this.#d.filter((e) => e !== t)),
              this.scheduleGc(),
              this.#p.notify({
                type: 'observerRemoved',
                mutation: this,
                observer: t,
              });
          }
          optionalRemove() {
            this.#d.length ||
              ('pending' === this.state.status
                ? this.scheduleGc()
                : this.#p.remove(this));
          }
          continue() {
            return this.#u?.continue() ?? this.execute(this.state.variables);
          }
          async execute(t) {
            this.#u = x({
              fn: () =>
                this.options.mutationFn
                  ? this.options.mutationFn(t)
                  : Promise.reject(Error('No mutationFn found')),
              onFail: (t, e) => {
                this.#c({ type: 'failed', failureCount: t, error: e });
              },
              onPause: () => {
                this.#c({ type: 'pause' });
              },
              onContinue: () => {
                this.#c({ type: 'continue' });
              },
              retry: this.options.retry ?? 0,
              retryDelay: this.options.retryDelay,
              networkMode: this.options.networkMode,
              canRun: () => this.#p.canRun(this),
            });
            let e = 'pending' === this.state.status,
              r = !this.#u.canStart();
            try {
              if (!e) {
                this.#c({ type: 'pending', variables: t, isPaused: r }),
                  await this.#p.config.onMutate?.(t, this);
                let e = await this.options.onMutate?.(t);
                e !== this.state.context &&
                  this.#c({
                    type: 'pending',
                    context: e,
                    variables: t,
                    isPaused: r,
                  });
              }
              let n = await this.#u.start();
              return (
                await this.#p.config.onSuccess?.(
                  n,
                  t,
                  this.state.context,
                  this
                ),
                await this.options.onSuccess?.(n, t, this.state.context),
                await this.#p.config.onSettled?.(
                  n,
                  null,
                  this.state.variables,
                  this.state.context,
                  this
                ),
                await this.options.onSettled?.(n, null, t, this.state.context),
                this.#c({ type: 'success', data: n }),
                n
              );
            } catch (e) {
              try {
                throw (
                  (await this.#p.config.onError?.(
                    e,
                    t,
                    this.state.context,
                    this
                  ),
                  await this.options.onError?.(e, t, this.state.context),
                  await this.#p.config.onSettled?.(
                    void 0,
                    e,
                    this.state.variables,
                    this.state.context,
                    this
                  ),
                  await this.options.onSettled?.(
                    void 0,
                    e,
                    t,
                    this.state.context
                  ),
                  e)
                );
              } finally {
                this.#c({ type: 'error', error: e });
              }
            } finally {
              this.#p.runNext(this);
            }
          }
          #c(t) {
            (this.state = ((e) => {
              switch (t.type) {
                case 'failed':
                  return {
                    ...e,
                    failureCount: t.failureCount,
                    failureReason: t.error,
                  };
                case 'pause':
                  return { ...e, isPaused: !0 };
                case 'continue':
                  return { ...e, isPaused: !1 };
                case 'pending':
                  return {
                    ...e,
                    context: t.context,
                    data: void 0,
                    failureCount: 0,
                    failureReason: null,
                    error: null,
                    isPaused: t.isPaused,
                    status: 'pending',
                    variables: t.variables,
                    submittedAt: Date.now(),
                  };
                case 'success':
                  return {
                    ...e,
                    data: t.data,
                    failureCount: 0,
                    failureReason: null,
                    error: null,
                    status: 'success',
                    isPaused: !1,
                  };
                case 'error':
                  return {
                    ...e,
                    data: void 0,
                    error: t.error,
                    failureCount: e.failureCount + 1,
                    failureReason: t.error,
                    isPaused: !1,
                    status: 'error',
                  };
              }
            })(this.state)),
              w.batch(() => {
                this.#d.forEach((e) => {
                  e.onMutationUpdate(t);
                }),
                  this.#p.notify({
                    mutation: this,
                    type: 'updated',
                    action: t,
                  });
              });
          }
        },
        C = class extends v {
          constructor(t = {}) {
            super(),
              (this.config = t),
              (this.#y = new Map()),
              (this.#m = Date.now());
          }
          #y;
          #m;
          build(t, e, r) {
            let n = new B({
              mutationCache: this,
              mutationId: ++this.#m,
              options: t.defaultMutationOptions(e),
              state: r,
            });
            return this.add(n), n;
          }
          add(t) {
            let e = L(t),
              r = this.#y.get(e) ?? [];
            r.push(t),
              this.#y.set(e, r),
              this.notify({ type: 'added', mutation: t });
          }
          remove(t) {
            let e = L(t);
            if (this.#y.has(e)) {
              let r = this.#y.get(e)?.filter((e) => e !== t);
              r && (0 === r.length ? this.#y.delete(e) : this.#y.set(e, r));
            }
            this.notify({ type: 'removed', mutation: t });
          }
          canRun(t) {
            let e = this.#y
              .get(L(t))
              ?.find((t) => 'pending' === t.state.status);
            return !e || e === t;
          }
          runNext(t) {
            let e = this.#y.get(L(t))?.find((e) => e !== t && e.state.isPaused);
            return e?.continue() ?? Promise.resolve();
          }
          clear() {
            w.batch(() => {
              this.getAll().forEach((t) => {
                this.remove(t);
              });
            });
          }
          getAll() {
            return [...this.#y.values()].flat();
          }
          find(t) {
            let e = { exact: !0, ...t };
            return this.getAll().find((t) => a(e, t));
          }
          findAll(t = {}) {
            return this.getAll().filter((e) => a(t, e));
          }
          notify(t) {
            w.batch(() => {
              this.listeners.forEach((e) => {
                e(t);
              });
            });
          }
          resumePausedMutations() {
            let t = this.getAll().filter((t) => t.state.isPaused);
            return w.batch(() =>
              Promise.all(t.map((t) => t.continue().catch(i)))
            );
          }
        };
      function L(t) {
        return t.options.scope?.id ?? String(t.mutationId);
      }
      function T(t, { pages: e, pageParams: r }) {
        let n = e.length - 1;
        return t.getNextPageParam(e[n], e, r[n], r);
      }
      var N = class {
        #g;
        #p;
        #l;
        #w;
        #v;
        #b;
        #E;
        #M;
        constructor(t = {}) {
          (this.#g = t.queryCache || new R()),
            (this.#p = t.mutationCache || new C()),
            (this.#l = t.defaultOptions || {}),
            (this.#w = new Map()),
            (this.#v = new Map()),
            (this.#b = 0);
        }
        mount() {
          this.#b++,
            1 === this.#b &&
              ((this.#E = b.subscribe(async (t) => {
                t && (await this.resumePausedMutations(), this.#g.onFocus());
              })),
              (this.#M = E.subscribe(async (t) => {
                t && (await this.resumePausedMutations(), this.#g.onOnline());
              })));
        }
        unmount() {
          this.#b--,
            0 === this.#b &&
              (this.#E?.(),
              (this.#E = void 0),
              this.#M?.(),
              (this.#M = void 0));
        }
        isFetching(t) {
          return this.#g.findAll({ ...t, fetchStatus: 'fetching' }).length;
        }
        isMutating(t) {
          return this.#p.findAll({ ...t, status: 'pending' }).length;
        }
        getQueryData(t) {
          let e = this.defaultQueryOptions({ queryKey: t });
          return this.#g.get(e.queryHash)?.state.data;
        }
        ensureQueryData(t) {
          let e = this.getQueryData(t.queryKey);
          if (void 0 === e) return this.fetchQuery(t);
          {
            let r = this.defaultQueryOptions(t),
              n = this.#g.build(this, r);
            return (
              t.revalidateIfStale &&
                n.isStaleByTime(o(r.staleTime, n)) &&
                this.prefetchQuery(r),
              Promise.resolve(e)
            );
          }
        }
        getQueriesData(t) {
          return this.#g
            .findAll(t)
            .map(({ queryKey: t, state: e }) => [t, e.data]);
        }
        setQueryData(t, e, r) {
          let n = this.defaultQueryOptions({ queryKey: t }),
            i = this.#g.get(n.queryHash),
            o = i?.state.data,
            s = 'function' == typeof e ? e(o) : e;
          if (void 0 !== s)
            return this.#g.build(this, n).setData(s, { ...r, manual: !0 });
        }
        setQueriesData(t, e, r) {
          return w.batch(() =>
            this.#g
              .findAll(t)
              .map(({ queryKey: t }) => [t, this.setQueryData(t, e, r)])
          );
        }
        getQueryState(t) {
          let e = this.defaultQueryOptions({ queryKey: t });
          return this.#g.get(e.queryHash)?.state;
        }
        removeQueries(t) {
          let e = this.#g;
          w.batch(() => {
            e.findAll(t).forEach((t) => {
              e.remove(t);
            });
          });
        }
        resetQueries(t, e) {
          let r = this.#g,
            n = { type: 'active', ...t };
          return w.batch(
            () => (
              r.findAll(t).forEach((t) => {
                t.reset();
              }),
              this.refetchQueries(n, e)
            )
          );
        }
        cancelQueries(t = {}, e = {}) {
          let r = { revert: !0, ...e };
          return Promise.all(
            w.batch(() => this.#g.findAll(t).map((t) => t.cancel(r)))
          )
            .then(i)
            .catch(i);
        }
        invalidateQueries(t = {}, e = {}) {
          return w.batch(() => {
            if (
              (this.#g.findAll(t).forEach((t) => {
                t.invalidate();
              }),
              'none' === t.refetchType)
            )
              return Promise.resolve();
            let r = { ...t, type: t.refetchType ?? t.type ?? 'active' };
            return this.refetchQueries(r, e);
          });
        }
        refetchQueries(t = {}, e) {
          let r = { ...e, cancelRefetch: e?.cancelRefetch ?? !0 };
          return Promise.all(
            w.batch(() =>
              this.#g
                .findAll(t)
                .filter((t) => !t.isDisabled())
                .map((t) => {
                  let e = t.fetch(void 0, r);
                  return (
                    r.throwOnError || (e = e.catch(i)),
                    'paused' === t.state.fetchStatus ? Promise.resolve() : e
                  );
                })
            )
          ).then(i);
        }
        fetchQuery(t) {
          let e = this.defaultQueryOptions(t);
          void 0 === e.retry && (e.retry = !1);
          let r = this.#g.build(this, e);
          return r.isStaleByTime(o(e.staleTime, r))
            ? r.fetch(e)
            : Promise.resolve(r.state.data);
        }
        prefetchQuery(t) {
          return this.fetchQuery(t).then(i).catch(i);
        }
        fetchInfiniteQuery(t) {
          var e;
          return (
            (t.behavior =
              ((e = t.pages),
              {
                onFetch: (t, r) => {
                  let n = async () => {
                    let r;
                    let n = t.options,
                      i = t.fetchOptions?.meta?.fetchMore?.direction,
                      o = t.state.data?.pages || [],
                      s = t.state.data?.pageParams || [],
                      a = !1,
                      u = (e) => {
                        Object.defineProperty(e, 'signal', {
                          enumerable: !0,
                          get: () => (
                            t.signal.aborted
                              ? (a = !0)
                              : t.signal.addEventListener('abort', () => {
                                  a = !0;
                                }),
                            t.signal
                          ),
                        });
                      },
                      l = g(t.options, t.fetchOptions),
                      h = async (e, r, n) => {
                        if (a) return Promise.reject();
                        if (null == r && e.pages.length)
                          return Promise.resolve(e);
                        let i = {
                          queryKey: t.queryKey,
                          pageParam: r,
                          direction: n ? 'backward' : 'forward',
                          meta: t.options.meta,
                        };
                        u(i);
                        let o = await l(i),
                          { maxPages: s } = t.options,
                          h = n ? y : p;
                        return {
                          pages: h(e.pages, o, s),
                          pageParams: h(e.pageParams, r, s),
                        };
                      };
                    if (i && o.length) {
                      let t = 'backward' === i,
                        e = { pages: o, pageParams: s },
                        a = (
                          t
                            ? function (t, { pages: e, pageParams: r }) {
                                return t.getPreviousPageParam?.(
                                  e[0],
                                  e,
                                  r[0],
                                  r
                                );
                              }
                            : T
                        )(n, e);
                      r = await h(e, a, t);
                    } else {
                      r = await h(
                        { pages: [], pageParams: [] },
                        s[0] ?? n.initialPageParam
                      );
                      let t = e ?? o.length;
                      for (let e = 1; e < t; e++) {
                        let t = T(n, r);
                        r = await h(r, t);
                      }
                    }
                    return r;
                  };
                  t.options.persister
                    ? (t.fetchFn = () =>
                        t.options.persister?.(
                          n,
                          {
                            queryKey: t.queryKey,
                            meta: t.options.meta,
                            signal: t.signal,
                          },
                          r
                        ))
                    : (t.fetchFn = n);
                },
              })),
            this.fetchQuery(t)
          );
        }
        prefetchInfiniteQuery(t) {
          return this.fetchInfiniteQuery(t).then(i).catch(i);
        }
        resumePausedMutations() {
          return E.isOnline()
            ? this.#p.resumePausedMutations()
            : Promise.resolve();
        }
        getQueryCache() {
          return this.#g;
        }
        getMutationCache() {
          return this.#p;
        }
        getDefaultOptions() {
          return this.#l;
        }
        setDefaultOptions(t) {
          this.#l = t;
        }
        setQueryDefaults(t, e) {
          this.#w.set(l(t), { queryKey: t, defaultOptions: e });
        }
        getQueryDefaults(t) {
          let e = [...this.#w.values()],
            r = {};
          return (
            e.forEach((e) => {
              h(t, e.queryKey) && (r = { ...r, ...e.defaultOptions });
            }),
            r
          );
        }
        setMutationDefaults(t, e) {
          this.#v.set(l(t), { mutationKey: t, defaultOptions: e });
        }
        getMutationDefaults(t) {
          let e = [...this.#v.values()],
            r = {};
          return (
            e.forEach((e) => {
              h(t, e.mutationKey) && (r = { ...r, ...e.defaultOptions });
            }),
            r
          );
        }
        defaultQueryOptions(t) {
          if (t._defaulted) return t;
          let e = {
            ...this.#l.queries,
            ...this.getQueryDefaults(t.queryKey),
            ...t,
            _defaulted: !0,
          };
          return (
            e.queryHash || (e.queryHash = u(e.queryKey, e)),
            void 0 === e.refetchOnReconnect &&
              (e.refetchOnReconnect = 'always' !== e.networkMode),
            void 0 === e.throwOnError && (e.throwOnError = !!e.suspense),
            !e.networkMode && e.persister && (e.networkMode = 'offlineFirst'),
            !0 !== e.enabled && e.queryFn === m && (e.enabled = !1),
            e
          );
        }
        defaultMutationOptions(t) {
          return t?._defaulted
            ? t
            : {
                ...this.#l.mutations,
                ...(t?.mutationKey && this.getMutationDefaults(t.mutationKey)),
                ...t,
                _defaulted: !0,
              };
        }
        clear() {
          this.#g.clear(), this.#p.clear();
        }
      };
    },
    3191: function (t, e, r) {
      'use strict';
      r.d(e, {
        aH: function () {
          return s;
        },
      });
      var n = r(2265),
        i = r(7437),
        o = n.createContext(void 0),
        s = (t) => {
          let { client: e, children: r } = t;
          return (
            n.useEffect(
              () => (
                e.mount(),
                () => {
                  e.unmount();
                }
              ),
              [e]
            ),
            (0, i.jsx)(o.Provider, { value: e, children: r })
          );
        };
    },
    1164: function (t, e, r) {
      'use strict';
      r.d(e, {
        Analytics: function () {
          return u;
        },
      });
      var n = r(2265),
        i = () => {
          window.va ||
            (window.va = function () {
              for (var t = arguments.length, e = Array(t), r = 0; r < t; r++)
                e[r] = arguments[r];
              (window.vaq = window.vaq || []).push(e);
            });
        };
      function o() {
        return 'undefined' != typeof window;
      }
      function s() {
        return 'production';
      }
      function a() {
        return 'development' === ((o() ? window.vam : s()) || 'production');
      }
      function u(t) {
        return (
          (0, n.useEffect)(() => {
            !(function () {
              var t;
              let e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : { debug: !0 };
              if (!o()) return;
              (function () {
                let t =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : 'auto';
                if ('auto' === t) {
                  window.vam = s();
                  return;
                }
                window.vam = t;
              })(e.mode),
                i(),
                e.beforeSend &&
                  (null == (t = window.va) ||
                    t.call(window, 'beforeSend', e.beforeSend));
              let r =
                e.scriptSrc ||
                (a()
                  ? 'https://va.vercel-scripts.com/v1/script.debug.js'
                  : '/_vercel/insights/script.js');
              if (document.head.querySelector('script[src*="'.concat(r, '"]')))
                return;
              let n = document.createElement('script');
              (n.src = r),
                (n.defer = !0),
                (n.dataset.sdkn =
                  '@vercel/analytics' +
                  (e.framework ? '/'.concat(e.framework) : '')),
                (n.dataset.sdkv = '1.3.1'),
                e.disableAutoTrack && (n.dataset.disableAutoTrack = '1'),
                e.endpoint && (n.dataset.endpoint = e.endpoint),
                e.dsn && (n.dataset.dsn = e.dsn),
                (n.onerror = () => {
                  let t = a()
                    ? 'Please check if any ad blockers are enabled and try again.'
                    : 'Be sure to enable Web Analytics for your project and deploy again. See https://vercel.com/docs/analytics/quickstart for more information.';
                  console.log(
                    '[Vercel Web Analytics] Failed to load script from '
                      .concat(r, '. ')
                      .concat(t)
                  );
                }),
                a() && !1 === e.debug && (n.dataset.debug = 'false'),
                document.head.appendChild(n);
            })({
              framework: t.framework || 'react',
              ...(void 0 !== t.route && { disableAutoTrack: !0 }),
              ...t,
            });
          }, []),
          (0, n.useEffect)(() => {
            t.route &&
              t.path &&
              (function (t) {
                var e;
                let { route: r, path: n } = t;
                null == (e = window.va) ||
                  e.call(window, 'pageview', { route: r, path: n });
              })({ route: t.route, path: t.path });
          }, [t.route, t.path]),
          null
        );
      }
    },
    4839: function (t, e, r) {
      'use strict';
      function n() {
        for (var t, e, r = 0, n = '', i = arguments.length; r < i; r++)
          (t = arguments[r]) &&
            (e = (function t(e) {
              var r,
                n,
                i = '';
              if ('string' == typeof e || 'number' == typeof e) i += e;
              else if ('object' == typeof e) {
                if (Array.isArray(e)) {
                  var o = e.length;
                  for (r = 0; r < o; r++)
                    e[r] && (n = t(e[r])) && (i && (i += ' '), (i += n));
                } else for (n in e) e[n] && (i && (i += ' '), (i += n));
              }
              return i;
            })(t)) &&
            (n && (n += ' '), (n += e));
        return n;
      }
      r.d(e, {
        W: function () {
          return n;
        },
      });
    },
    8194: function (t, e, r) {
      'use strict';
      r.d(e, {
        Z: function () {
          return n;
        },
      });
      var n = function (t, e, r) {
        var n = null,
          i = null,
          o = function () {
            n && (clearTimeout(n), (i = null), (n = null));
          },
          s = function () {
            if (!e) return t.apply(this, arguments);
            var s = this,
              a = arguments,
              u = r && !n;
            if (
              (o(),
              (i = function () {
                t.apply(s, a);
              }),
              (n = setTimeout(function () {
                if (((n = null), !u)) {
                  var t = i;
                  return (i = null), t();
                }
              }, e)),
              u)
            )
              return i();
          };
        return (
          (s.cancel = o),
          (s.flush = function () {
            var t = i;
            o(), t && t();
          }),
          s
        );
      };
    },
    3364: function (t, e, r) {
      'use strict';
      r.d(e, {
        Ey: function () {
          return u;
        },
        XY: function () {
          return s;
        },
      });
      var n = r(9109),
        i = r(3466),
        o = class extends i {
          socket;
          constructor(t, e, r) {
            super(),
              (this.socket = new window.WebSocket(t, r)),
              (this.socket.onopen = () => this.emit('open')),
              (this.socket.onmessage = (t) => this.emit('message', t.data)),
              (this.socket.onerror = (t) => this.emit('error', t)),
              (this.socket.onclose = (t) => {
                this.emit('close', t.code, t.reason);
              });
          }
          send(t, e, r) {
            let n = r || e;
            try {
              this.socket.send(t), n();
            } catch (t) {
              n(t);
            }
          }
          close(t, e) {
            this.socket.close(t, e);
          }
          addEventListener(t, e, r) {
            this.socket.addEventListener(t, e, r);
          }
        };
      function s(t, e) {
        return new o(t, e);
      }
      var a = class {
          encode(t) {
            return JSON.stringify(t);
          }
          decode(t) {
            return JSON.parse(t);
          }
        },
        u = class extends i {
          address;
          rpc_id;
          queue;
          options;
          autoconnect;
          ready;
          reconnect;
          reconnect_timer_id;
          reconnect_interval;
          max_reconnects;
          rest_options;
          current_reconnects;
          generate_request_id;
          socket;
          webSocketFactory;
          dataPack;
          constructor(
            t,
            e = 'ws://localhost:8080',
            {
              autoconnect: r = !0,
              reconnect: n = !0,
              reconnect_interval: i = 1e3,
              max_reconnects: o = 5,
              ...s
            } = {},
            u,
            l
          ) {
            super(),
              (this.webSocketFactory = t),
              (this.queue = {}),
              (this.rpc_id = 0),
              (this.address = e),
              (this.autoconnect = r),
              (this.ready = !1),
              (this.reconnect = n),
              (this.reconnect_timer_id = void 0),
              (this.reconnect_interval = i),
              (this.max_reconnects = o),
              (this.rest_options = s),
              (this.current_reconnects = 0),
              (this.generate_request_id = u || (() => ++this.rpc_id)),
              l ? (this.dataPack = l) : (this.dataPack = new a()),
              this.autoconnect &&
                this._connect(this.address, {
                  autoconnect: this.autoconnect,
                  reconnect: this.reconnect,
                  reconnect_interval: this.reconnect_interval,
                  max_reconnects: this.max_reconnects,
                  ...this.rest_options,
                });
          }
          connect() {
            this.socket ||
              this._connect(this.address, {
                autoconnect: this.autoconnect,
                reconnect: this.reconnect,
                reconnect_interval: this.reconnect_interval,
                max_reconnects: this.max_reconnects,
                ...this.rest_options,
              });
          }
          call(t, e, r, n) {
            return (
              n || 'object' != typeof r || ((n = r), (r = null)),
              new Promise((i, o) => {
                if (!this.ready) return o(Error('socket not ready'));
                let s = this.generate_request_id(t, e);
                this.socket.send(
                  this.dataPack.encode({
                    jsonrpc: '2.0',
                    method: t,
                    params: e || void 0,
                    id: s,
                  }),
                  n,
                  (t) => {
                    if (t) return o(t);
                    (this.queue[s] = { promise: [i, o] }),
                      r &&
                        (this.queue[s].timeout = setTimeout(() => {
                          delete this.queue[s], o(Error('reply timeout'));
                        }, r));
                  }
                );
              })
            );
          }
          async login(t) {
            let e = await this.call('rpc.login', t);
            if (!e) throw Error('authentication failed');
            return e;
          }
          async listMethods() {
            return await this.call('__listMethods');
          }
          notify(t, e) {
            return new Promise((r, n) => {
              if (!this.ready) return n(Error('socket not ready'));
              this.socket.send(
                this.dataPack.encode({ jsonrpc: '2.0', method: t, params: e }),
                (t) => {
                  if (t) return n(t);
                  r();
                }
              );
            });
          }
          async subscribe(t) {
            'string' == typeof t && (t = [t]);
            let e = await this.call('rpc.on', t);
            if ('string' == typeof t && 'ok' !== e[t])
              throw Error(
                "Failed subscribing to an event '" + t + "' with: " + e[t]
              );
            return e;
          }
          async unsubscribe(t) {
            'string' == typeof t && (t = [t]);
            let e = await this.call('rpc.off', t);
            if ('string' == typeof t && 'ok' !== e[t])
              throw Error('Failed unsubscribing from an event with: ' + e);
            return e;
          }
          close(t, e) {
            this.socket.close(t || 1e3, e);
          }
          setAutoReconnect(t) {
            this.reconnect = t;
          }
          setReconnectInterval(t) {
            this.reconnect_interval = t;
          }
          setMaxReconnects(t) {
            this.max_reconnects = t;
          }
          _connect(t, e) {
            clearTimeout(this.reconnect_timer_id),
              (this.socket = this.webSocketFactory(t, e)),
              this.socket.addEventListener('open', () => {
                (this.ready = !0),
                  this.emit('open'),
                  (this.current_reconnects = 0);
              }),
              this.socket.addEventListener('message', ({ data: t }) => {
                t instanceof ArrayBuffer && (t = n.Buffer.from(t).toString());
                try {
                  t = this.dataPack.decode(t);
                } catch (t) {
                  return;
                }
                if (t.notification && this.listeners(t.notification).length) {
                  if (!Object.keys(t.params).length)
                    return this.emit(t.notification);
                  let e = [t.notification];
                  if (t.params.constructor === Object) e.push(t.params);
                  else
                    for (let r = 0; r < t.params.length; r++)
                      e.push(t.params[r]);
                  return Promise.resolve().then(() => {
                    this.emit.apply(this, e);
                  });
                }
                if (!this.queue[t.id])
                  return t.method
                    ? Promise.resolve().then(() => {
                        this.emit(t.method, t?.params);
                      })
                    : void 0;
                'error' in t == 'result' in t &&
                  this.queue[t.id].promise[1](
                    Error(
                      'Server response malformed. Response must include either "result" or "error", but not both.'
                    )
                  ),
                  this.queue[t.id].timeout &&
                    clearTimeout(this.queue[t.id].timeout),
                  t.error
                    ? this.queue[t.id].promise[1](t.error)
                    : this.queue[t.id].promise[0](t.result),
                  delete this.queue[t.id];
              }),
              this.socket.addEventListener('error', (t) =>
                this.emit('error', t)
              ),
              this.socket.addEventListener(
                'close',
                ({ code: r, reason: n }) => {
                  this.ready && setTimeout(() => this.emit('close', r, n), 0),
                    (this.ready = !1),
                    (this.socket = void 0),
                    1e3 !== r &&
                      (this.current_reconnects++,
                      this.reconnect &&
                        (this.max_reconnects > this.current_reconnects ||
                          0 === this.max_reconnects) &&
                        (this.reconnect_timer_id = setTimeout(
                          () => this._connect(t, e),
                          this.reconnect_interval
                        )));
                }
              );
          }
        };
    },
    6517: function (t, e, r) {
      'use strict';
      r.d(e, {
        AG: function () {
          return g;
        },
        G0: function () {
          return S;
        },
        IM: function () {
          return b;
        },
        IX: function () {
          return d;
        },
        O7: function () {
          return p;
        },
        Rx: function () {
          return w;
        },
        Ue: function () {
          return l;
        },
        Yj: function () {
          return f;
        },
        Z_: function () {
          return E;
        },
        _4: function () {
          return A;
        },
        bc: function () {
          return M;
        },
        dt: function () {
          return _;
        },
        eE: function () {
          return y;
        },
        i0: function () {
          return m;
        },
        jt: function () {
          return v;
        },
        oQ: function () {
          return x;
        },
      });
      class n extends TypeError {
        constructor(t, e) {
          let r;
          let { message: n, explanation: i, ...o } = t,
            { path: s } = t,
            a = 0 === s.length ? n : `At path: ${s.join('.')} -- ${n}`;
          super(i ?? a),
            null != i && (this.cause = a),
            Object.assign(this, o),
            (this.name = this.constructor.name),
            (this.failures = () => r ?? (r = [t, ...e()]));
        }
      }
      function i(t) {
        return 'object' == typeof t && null != t;
      }
      function o(t) {
        return 'symbol' == typeof t
          ? t.toString()
          : 'string' == typeof t
          ? JSON.stringify(t)
          : `${t}`;
      }
      function* s(t, e, r, n) {
        var s;
        for (let a of ((i((s = t)) &&
          'function' == typeof s[Symbol.iterator]) ||
          (t = [t]),
        t)) {
          let t = (function (t, e, r, n) {
            if (!0 === t) return;
            !1 === t ? (t = {}) : 'string' == typeof t && (t = { message: t });
            let { path: i, branch: s } = e,
              { type: a } = r,
              {
                refinement: u,
                message: l = `Expected a value of type \`${a}\`${
                  u ? ` with refinement \`${u}\`` : ''
                }, but received: \`${o(n)}\``,
              } = t;
            return {
              value: n,
              type: a,
              refinement: u,
              key: i[i.length - 1],
              path: i,
              branch: s,
              ...t,
              message: l,
            };
          })(a, e, r, n);
          t && (yield t);
        }
      }
      function* a(t, e, r = {}) {
        let { path: n = [], branch: o = [t], coerce: s = !1, mask: u = !1 } = r,
          l = { path: n, branch: o };
        if (
          s &&
          ((t = e.coercer(t, l)),
          u && 'type' !== e.type && i(e.schema) && i(t) && !Array.isArray(t))
        )
          for (let r in t) void 0 === e.schema[r] && delete t[r];
        let h = 'valid';
        for (let n of e.validator(t, l))
          (n.explanation = r.message), (h = 'not_valid'), yield [n, void 0];
        for (let [c, f, d] of e.entries(t, l))
          for (let e of a(f, d, {
            path: void 0 === c ? n : [...n, c],
            branch: void 0 === c ? o : [...o, f],
            coerce: s,
            mask: u,
            message: r.message,
          }))
            e[0]
              ? ((h = null != e[0].refinement ? 'not_refined' : 'not_valid'),
                yield [e[0], void 0])
              : s &&
                ((f = e[1]),
                void 0 === c
                  ? (t = f)
                  : t instanceof Map
                  ? t.set(c, f)
                  : t instanceof Set
                  ? t.add(f)
                  : i(t) && (void 0 !== f || c in t) && (t[c] = f));
        if ('not_valid' !== h)
          for (let n of e.refiner(t, l))
            (n.explanation = r.message), (h = 'not_refined'), yield [n, void 0];
        'valid' === h && (yield [void 0, t]);
      }
      class u {
        constructor(t) {
          let {
            type: e,
            schema: r,
            validator: n,
            refiner: i,
            coercer: o = (t) => t,
            entries: a = function* () {},
          } = t;
          (this.type = e),
            (this.schema = r),
            (this.entries = a),
            (this.coercer = o),
            n
              ? (this.validator = (t, e) => s(n(t, e), e, this, t))
              : (this.validator = () => []),
            i
              ? (this.refiner = (t, e) => s(i(t, e), e, this, t))
              : (this.refiner = () => []);
        }
        assert(t, e) {
          return (function (t, e, r) {
            let n = h(t, e, { message: r });
            if (n[0]) throw n[0];
          })(t, this, e);
        }
        create(t, e) {
          return l(t, this, e);
        }
        is(t) {
          return !h(t, this)[0];
        }
        mask(t, e) {
          return (function (t, e, r) {
            let n = h(t, e, { coerce: !0, mask: !0, message: r });
            if (!n[0]) return n[1];
            throw n[0];
          })(t, this, e);
        }
        validate(t, e = {}) {
          return h(t, this, e);
        }
      }
      function l(t, e, r) {
        let n = h(t, e, { coerce: !0, message: r });
        if (!n[0]) return n[1];
        throw n[0];
      }
      function h(t, e, r = {}) {
        let i = a(t, e, r),
          o = (function (t) {
            let { done: e, value: r } = t.next();
            return e ? void 0 : r;
          })(i);
        return o[0]
          ? [
              new n(o[0], function* () {
                for (let t of i) t[0] && (yield t[0]);
              }),
              void 0,
            ]
          : [void 0, o[1]];
      }
      function c(t, e) {
        return new u({ type: t, schema: null, validator: e });
      }
      function f() {
        return c('any', () => !0);
      }
      function d(t) {
        return new u({
          type: 'array',
          schema: t,
          *entries(e) {
            if (t && Array.isArray(e))
              for (let [r, n] of e.entries()) yield [r, n, t];
          },
          coercer: (t) => (Array.isArray(t) ? t.slice() : t),
          validator: (t) =>
            Array.isArray(t) ||
            `Expected an array value, but received: ${o(t)}`,
        });
      }
      function p() {
        return c('boolean', (t) => 'boolean' == typeof t);
      }
      function y(t) {
        return c(
          'instance',
          (e) =>
            e instanceof t ||
            `Expected a \`${t.name}\` instance, but received: ${o(e)}`
        );
      }
      function m(t) {
        let e = o(t),
          r = typeof t;
        return new u({
          type: 'literal',
          schema:
            'string' === r || 'number' === r || 'boolean' === r ? t : null,
          validator: (r) =>
            r === t || `Expected the literal \`${e}\`, but received: ${o(r)}`,
        });
      }
      function g(t) {
        return new u({
          ...t,
          validator: (e, r) => null === e || t.validator(e, r),
          refiner: (e, r) => null === e || t.refiner(e, r),
        });
      }
      function w() {
        return c(
          'number',
          (t) =>
            ('number' == typeof t && !isNaN(t)) ||
            `Expected a number, but received: ${o(t)}`
        );
      }
      function v(t) {
        return new u({
          ...t,
          validator: (e, r) => void 0 === e || t.validator(e, r),
          refiner: (e, r) => void 0 === e || t.refiner(e, r),
        });
      }
      function b(t, e) {
        return new u({
          type: 'record',
          schema: null,
          *entries(r) {
            if (i(r))
              for (let n in r) {
                let i = r[n];
                yield [n, n, t], yield [n, i, e];
              }
          },
          validator: (t) => i(t) || `Expected an object, but received: ${o(t)}`,
        });
      }
      function E() {
        return c(
          'string',
          (t) =>
            'string' == typeof t || `Expected a string, but received: ${o(t)}`
        );
      }
      function M(t) {
        let e = c('never', () => !1);
        return new u({
          type: 'tuple',
          schema: null,
          *entries(r) {
            if (Array.isArray(r)) {
              let n = Math.max(t.length, r.length);
              for (let i = 0; i < n; i++) yield [i, r[i], t[i] || e];
            }
          },
          validator: (t) =>
            Array.isArray(t) || `Expected an array, but received: ${o(t)}`,
        });
      }
      function _(t) {
        let e = Object.keys(t);
        return new u({
          type: 'type',
          schema: t,
          *entries(r) {
            if (i(r)) for (let n of e) yield [n, r[n], t[n]];
          },
          validator: (t) => i(t) || `Expected an object, but received: ${o(t)}`,
          coercer: (t) => (i(t) ? { ...t } : t),
        });
      }
      function S(t) {
        let e = t.map((t) => t.type).join(' | ');
        return new u({
          type: 'union',
          schema: null,
          coercer(e) {
            for (let r of t) {
              let [t, n] = r.validate(e, { coerce: !0 });
              if (!t) return n;
            }
            return e;
          },
          validator(r, n) {
            let i = [];
            for (let e of t) {
              let [...t] = a(r, e, n),
                [o] = t;
              if (!o[0]) return [];
              for (let [e] of t) e && i.push(e);
            }
            return [
              `Expected the value to satisfy a union of \`${e}\`, but received: ${o(
                r
              )}`,
              ...i,
            ];
          },
        });
      }
      function A() {
        return c('unknown', () => !0);
      }
      function x(t, e, r) {
        return new u({
          ...t,
          coercer: (n, i) =>
            h(n, e)[0] ? t.coercer(n, i) : t.coercer(r(n, i), i),
        });
      }
    },
    9099: function (t, e, r) {
      'use strict';
      r.d(e, {
        Ue: function () {
          return f;
        },
      });
      let n = (t) => {
          let e;
          let r = new Set(),
            n = (t, n) => {
              let i = 'function' == typeof t ? t(e) : t;
              if (!Object.is(i, e)) {
                let t = e;
                (e = (null != n ? n : 'object' != typeof i || null === i)
                  ? i
                  : Object.assign({}, e, i)),
                  r.forEach((r) => r(e, t));
              }
            },
            i = () => e,
            o = {
              setState: n,
              getState: i,
              getInitialState: () => s,
              subscribe: (t) => (r.add(t), () => r.delete(t)),
              destroy: () => {
                console.warn(
                  '[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected.'
                ),
                  r.clear();
              },
            },
            s = (e = t(n, i, o));
          return o;
        },
        i = (t) => (t ? n(t) : n);
      var o = r(2265),
        s = r(5006);
      let { useDebugValue: a } = o,
        { useSyncExternalStoreWithSelector: u } = s,
        l = !1,
        h = (t) => t,
        c = (t) => {
          'function' != typeof t &&
            console.warn(
              "[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`."
            );
          let e = 'function' == typeof t ? i(t) : t,
            r = (t, r) =>
              (function (t, e = h, r) {
                r &&
                  !l &&
                  (console.warn(
                    "[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"
                  ),
                  (l = !0));
                let n = u(
                  t.subscribe,
                  t.getState,
                  t.getServerState || t.getInitialState,
                  e,
                  r
                );
                return a(n), n;
              })(e, t, r);
          return Object.assign(r, e), r;
        },
        f = (t) => (t ? c(t) : c);
    },
  },
]);
