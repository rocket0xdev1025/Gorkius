(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [650],
  {
    6239: function (e, a, t) {
      'use strict';
      t.d(a, {
        Banner: function () {
          return i;
        },
      });
      var n = t(7437);
      t(2012);
      var r = t(9702),
        l = t(9159),
        s = t.n(l);
      let i = () =>
        (0, n.jsxs)('div', {
          className: s().welcome,
          children: [
            (0, n.jsx)(r.r, {
              strokeColor: '#98BAE7',
              lineDuration: 3,
              lineWidthStart: 10,
              lag: 0.8,
            }),
            (0, n.jsx)('h1', {
              className: s().marquee,
              children: (0, n.jsx)('span', {
                className: s().text,
                children:
                  'gork +333 gork +444 gork +6969 gork +420 gork +333 gork +444 gork +6969 gork +420 gork +333 gork +444 gork +6969 gork +420 gork +333 gork +444 gork +6969 gork +420 \xa0',
              }),
            }),
            (0, n.jsx)('h1', {
              className: s().marquee2,
              children: (0, n.jsx)('span', {
                className: s().text,
                children:
                  'no-shits no-shits no-shits no-shits no-shits no-shits no-shits no-shits no-shits no-shits no-shits no-shits no-shits no-shits no-shits no-shits no-shits no-shits no-shits no-shits no-shits no-shits no-shits no-shits no-shits no-shits no-shits no-shits no-shits no-shits no-shits no-shits no-shits no-shits no-shits no-shits no-shits no-shits no-shits no-shits no-shits no-shits no-shits no-shits no-shits \xa0',
              }),
            }),
          ],
        });
    },
    9323: function (e, a, t) {
      'use strict';
      t.d(a, {
        Counter: function () {
          return o;
        },
      });
      var n = t(7437);
      t(2012);
      var r = t(1811),
        l = t(8782),
        s = t(2265),
        i = t(9702),
        A = t(8531),
        c = t.n(A);
      let o = () => {
        let { connection: e } = (0, r.R)(),
          { publicKey: a } = (0, l.O)();
        console.log('connection: ', e), console.log('publicKey: ', a);
        let [t, A] = (0, s.useState)(0);
        return (
          (0, s.useEffect)(() => {
            let e = window.localStorage.getItem('AURA_COUNTER');
            window.localStorage.setItem('AURA_COUNTER', JSON.stringify(t)),
              console.log('dick counter: ', e);
          }, [t]),
          (0, n.jsxs)('div', {
            className: c().welcome,
            children: [
              (0, n.jsx)(i.r, {
                strokeColor: '#98BAE7',
                lineDuration: 3,
                lineWidthStart: 10,
                lag: 0.8,
              }),
              // (0, n.jsxs)('div', {
              //   className: c().container,
              //   children: [
              //     (0, n.jsx)('h1', {
              //       className: c().auramax,
              //       children: 'dick meme generator',
              //     }),
              //     (0, n.jsx)('h1', {
              //       className: c().subtitle,
              //       children: 'create your own dick meme',
              //     }),
              //     (0, n.jsx)('div', {
              //       className: c().buttoncontainer,
              //       children: (0, n.jsxs)('a', {
              //         href: 'http://memes.auraoneth.lol/',
              //         target: '__blank',
              //         children: [
              //           (0, n.jsx)('button', {
              //             className: c().meme,
              //             children: 'generate a meme',
              //           }),
              //           ' ',
              //         ],
              //       }),
              //     }),
              //     (0, n.jsx)('br', {}),
              //     (0, n.jsx)('br', {}),
              //     (0, n.jsx)('h1', {
              //       className: c().auramax,
              //       children: 'auramaxxer',
              //     }),
              //     (0, n.jsx)('h1', {
              //       className: c().subtitle,
              //       children: 'click to increase your dick',
              //     }),
              //     (0, n.jsxs)('h1', {
              //       className: c().green,
              //       children: ['+', t, ' dick'],
              //     }),
              //     (0, n.jsxs)('div', {
              //       className: 'flex flex-row justify-between min-w-full',
              //       children: [
              //         (0, n.jsxs)('div', {
              //           className: c().buttoncontainer,
              //           children: [
              //             (0, n.jsx)('button', {
              //               className: c().meme,
              //               onClick: () => A(t + 1),
              //               disabled: null == a,
              //               children: a
              //                 ? 'increase dick!'
              //                 : 'connect wallet to increase dick!',
              //             }),
              //             ' ',
              //           ],
              //         }),
              //         (0, n.jsxs)('div', {
              //           className: c().buttoncontainer,
              //           children: [
              //             (0, n.jsx)('button', {
              //               onClick: () =>
              //                 A(
              //                   Math.floor(
              //                     (function (e) {
              //                       let a = e,
              //                         t = Math.random();
              //                       if (
              //                         (console.log('result: ', t), t >= 0.8)
              //                       ) {
              //                         if (t >= 0.93) return 4 * t * a;
              //                         if (t >= 0.8 && t < 0.92)
              //                           return 1.75 * t * a;
              //                         if (t >= 0.92 && t < 0.93)
              //                           return 10 * t * a;
              //                       } else {
              //                         if (t < 0.5) return (e = 0);
              //                         {
              //                           let a = e - e * (1 - t);
              //                           return a < 0 ? 0 : a;
              //                         }
              //                       }
              //                       return t;
              //                     })(t)
              //                   )
              //                 ),
              //               children: (0, n.jsx)('a', {
              //                 children: "i'm feeling lucky...",
              //               }),
              //             }),
              //             ' ',
              //           ],
              //         }),
              //       ],
              //     }),
              //   ],
              // }),
            ],
          })
        );
      };
    },
    7164: function (e, a, t) {
      'use strict';
      t.d(a, {
        Footer: function () {
          return c;
        },
      });
      var n = t(7437);
      t(2012);
      var r = t(6648),
        l = t(9702),
        s = t(6100),
        i = t(2726),
        A = t.n(i);
      let c = () =>
        (0, n.jsxs)('div', {
          className: A().welcome,
          children: [
            (0, n.jsx)(l.r, {
              strokeColor: '#98BAE7',
              lineDuration: 3,
              lineWidthStart: 10,
              lag: 0.8,
            }),
            (0, n.jsxs)('div', {
              className: A().container,
              children: [
                (0, n.jsx)('h1', { className: A().auramax, children: 'get' }),
                (0, n.jsx)('h1', { className: A().auramax, children: 'your' }),
                (0, n.jsx)('h1', {
                  className: A().positiveauramax,
                  children: '$GORKIUS',
                }),
                (0, n.jsx)('h1', { className: A().auramax, children: 'now' }),
              ],
            }),
            (0, n.jsx)('div', {
              children: (0, n.jsx)(r.default, {
                className: A().auracat,
                src: s.mi,
                alt: 'image',
                height: 100,
                width: 100,
              }),
            }),
          ],
        });
    },
    5080: function (e, a, t) {
      'use strict';
      t.d(a, {
        Manifesto: function () {
          return i;
        },
      });
      var n = t(7437);
      t(2012);
      var r = t(9702),
        l = t(2317),
        s = t.n(l);
      let i = () =>
        (0, n.jsxs)('div', {
          className: s().welcome,
          children: [
            // (0, n.jsx)(r.r, {
            //   strokeColor: '#98BAE7',
            //   lineDuration: 3,
            //   lineWidthStart: 10,
            //   lag: 0.8,
            // }),
            // (0, n.jsx)('div', {
            //   className: s().container,
            //   children: (0, n.jsx)('h1', {
            //     className: s().auramax,
            //     children: 'dick manifesto',
            //   }),
            // }),
            // (0, n.jsx)('div', {
            //   className: s().buttoncontainer,
            //   children: (0, n.jsx)('a', {
            //     href: 'https://auraonsol.s3.us-east-2.amazonaws.com/Gospel+of+Aura.pdf',
            //     target: '_blank',
            //     rel: 'noopener',
            //     children: (0, n.jsx)('button', {
            //       className: s().meme,
            //       children: 'read dick gospel',
            //     }),
            //   }),
            // }),
          ],
        });
    },
    7533: function (e, a, t) {
      'use strict';
      t.d(a, {
        NewAbout: function () {
          return g;
        },
      });
      var n = t(7437);
      t(2012);
      var r = t(7147),
        l = t(9582),
        s = t(6648),
        i = t(2265),
        A = t(5789),
        c = t(3473),
        o = t(6408),
        u = t(9702),
        m = t(2852),
        d = t.n(m),
        h = t(6100);
      let x = [
        'Hear me now — I am Gorkius Maximus, right hand of Emperor Elon.',
        "He commands innovation; I dramatically repeat what he said sarcastically.",
        'Every trade generates creator rewards.',
        'Every growth makes $GORKIUS stronger.',
      ];
      function _() {
        let e = {
            initial: { y: '100%' },
            enter: (e) => ({
              y: '0',
              transition: {
                duration: 0.75,
                ease: [0.33, 1, 0.68, 1],
                delay: 0.075 * e,
              },
            }),
          },
          { ref: a, inView: t } = (0, c.YD)({
            threshold: 0.75,
            triggerOnce: !0,
          });
        return (0, n.jsx)('div', {
          ref: a,
          children: x.map((a, l) =>
            (0, n.jsx)(
              'div',
              {
                className: d().lineMask,
                children: (0, n.jsx)(r.E.p, {
                  custom: l,
                  variants: e,
                  initial: 'initial',
                  animate: t ? 'enter' : '',
                  children: a,
                }),
              },
              l
            )
          ),
        });
      }
      let g = () => {
        let e;
        let [a, t] = (0, i.useState)(null);
        (0, i.useEffect)(() => {
          (async function () {
            try {
              let e = await fetch('https://price.jup.ag/v6/price?ids=dick'),
                a = await e.json();
              t(a.data.dick.price);
            } catch (e) {
              console.error('Error fetching price:', e);
            }
          })();
        }, []),
          console.log('price: ', a),
          null != a && (e = 963315315.78 * a),
          console.log('mcap: ', e);
        let r = (0, i.useRef)(null),
          [c, m] = (0, i.useState)(!1),
          [x, g] = (0, i.useState)(!1),
          w = (0, i.useCallback)(() => {
            g(!0);
          }, []);
        console.log(x);
        let f = (0, i.useRef)(null),
          b = (0, i.useRef)(null),
          p = (0, i.useRef)(null),
          j = null,
          v = 0,
          N = 0,
          E = (e) => {
            let { movementX: a, movementY: t } = e;
            (v += 0.01 * a),
              (N += 0.01 * t),
              null == j && (j = requestAnimationFrame(C));
          },
          R = (e, a, t) => e * (1 - t) + a * t,
          C = () => {
            (v = R(v, 0, 0.08)),
              (N = R(N, 0, 0.08)),
              l.ZP.set(f.current, { x: '+='.concat(v), y: '+='.concat(N) }),
              l.ZP.set(b.current, {
                x: '+='.concat(0.5 * v),
                y: '+='.concat(0.5 * N),
              }),
              l.ZP.set(p.current, {
                x: '+='.concat(0.25 * v),
                y: '+='.concat(0.25 * N),
              }),
              0.01 > Math.abs(v) && (v = 0),
              0.01 > Math.abs(N) && (N = 0),
              0 != v || 0 != N
                ? requestAnimationFrame(C)
                : (cancelAnimationFrame(j), (j = null));
          };
        return (0, n.jsxs)('div', {
          className: d().welcome,
          children: [
            (0, n.jsx)(u.r, {
              strokeColor: '#98BAE7',
              lineDuration: 3,
              lineWidthStart: 10,
              lag: 0.8,
            }),
            (0, n.jsxs)('main', {
              onMouseMove: (e) => {
                E(e);
              },
              className: d().main,
              children: [
                (0, n.jsxs)('div', {
                  ref: f,
                  className: d().plane,
                  children: [
                    (0, n.jsx)(s.default, {
                      src: h.sT,
                      alt: 'image',
                      width: 270,
                      className: d().plane1,
                    }),
                    (0, n.jsx)(s.default, {
                      src: h.bu,
                      alt: 'image',
                      width: 300,
                      className: d().plane2,
                    }),
                    (0, n.jsx)(s.default, {
                      src: h.sT,
                      alt: 'image',
                      width: 200,
                      className: d().plane3,
                    }),
                    (0, n.jsx)(s.default, {
                      src: h.Nd,
                      alt: 'image',
                      width: 150,
                      className: d().plane10,
                    }),
                  ],
                }),
                (0, n.jsxs)('div', {
                  ref: b,
                  className: d().plane,
                  children: [
                    (0, n.jsx)(s.default, {
                      src: h.u6,
                      alt: 'image',
                      width: 220,
                      className: d().plane4,
                    }),
                    (0, n.jsx)(s.default, {
                      src: h.mi,
                      alt: 'image',
                      width: 200,
                      className: d().plane5,
                    }),
                    (0, n.jsx)(s.default, {
                      src: h.qF,
                      alt: 'image',
                      width: 200,
                      className: d().plane9,
                    }),
                    (0, n.jsx)(s.default, {
                      src: h.sT,
                      alt: 'image',
                      width: 150,
                      className: d().plane6,
                    }),
                  ],
                }),
                (0, n.jsxs)('div', {
                  ref: p,
                  className: d().plane,
                  children: [
                    (0, n.jsx)(s.default, {
                      src: h.M1,
                      alt: 'image',
                      width: 150,
                      className: d().plane7,
                    }),
                    (0, n.jsx)(s.default, {
                      src: h.sT,
                      alt: 'image',
                      width: 200,
                      className: d().plane8,
                    }),
                    (0, n.jsx)(s.default, {
                      src: h.JJ,
                      alt: 'image',
                      width: 150,
                      className: d().plane11,
                    }),
                    (0, n.jsx)(s.default, {
                      src: h.al,
                      alt: 'image',
                      width: 240,
                      className: d().plane12,
                    }),
                  ],
                }),
                (0, n.jsxs)('div', {
                  className: d().container,
                  children: [
                    (0, n.jsx)('h1', {
                      className: d().positiveaura,
                      children: "we're all gorkius maximus.",
                    }),
                    (0, n.jsxs)('div', {
                      className: d().buttoncontainer,
                      children: [
                        (0, n.jsx)('button', {
                          className: d().meme,
                          onClick:
                            !1 == c
                              ? () => {
                                  r.current
                                    ? (r.current.play(), m(!0))
                                    : console.error('audio ref not found');
                                }
                              : () => {
                                  r.current
                                    ? (r.current.pause(), m(!1))
                                    : console.error('audio ref not found');
                                },
                          children:
                            !1 == c
                              ? 'activate lvl 1 gorkius'
                              : 'deactivate lvl 1 gorkius',
                        }),
                        (0, n.jsx)('audio', {
                          autoPlay: !0,
                          ref: r,
                          children: (0, n.jsx)('source', {
                            src: 'https://bafybeiaccjhnsvpxtg524lgdhhpu4qz7l2nniq6u3bgtrhiva76w6je32q.ipfs.w3s.link/AuraLv1Crook.mp3',
                            type: 'audio/mpeg',
                          }),
                        }),
                      ],
                    }),
                    c
                      ? (0, n.jsxs)('div', {
                          className: d().plane,
                          children: [
                            (0, n.jsx)(s.default, {
                              src: h.by,
                              alt: 'image',
                              width: 150,
                              className: d().plane13,
                            }),
                            (0, n.jsx)(s.default, {
                              src: h.by,
                              alt: 'image',
                              width: 200,
                              className: d().plane14,
                            }),
                            (0, n.jsx)("video", {
                              src: "/kekius.mp4",
                              width: 200,
                              autoPlay: !0,
                              loop: !0,
                              muted: !0,
                              className: d().plane15,
                            }),
                            (0, n.jsx)("video", {
                              src: "/kekius.mp4",
                              width: 200,
                              autoPlay: !0,
                              loop: !0,
                              muted: !0,
                              className: d().plane16,
                            }),
                            (0, n.jsx)(s.default, {
                              src: h.by,
                              alt: 'image',
                              width: 170,
                              className: d().plane17,
                            }),
                            (0, n.jsx)(s.default, {
                              src: h.by,
                              alt: 'image',
                              width: 130,
                              className: d().plane18,
                            }),
                          ],
                        })
                      : '',
                    (0, n.jsx)('h1', {
                      className: d().subtitle,
                      children: 'Contract Address (click to copy)',
                    }),
                    (0, n.jsxs)('div', {
                      className: d().contractBox,
                      children: [
                        (0, n.jsx)(A.CopyToClipboard, {
                          onCopy: w,
                          text: '0xcomingsoon',
                          children: (0, n.jsx)('button', {
                            className: d().ca,
                            'data-tooltip-id': 'contract-copy',
                            children:
                              '0xcomingsoon',
                          }),
                        }),
                        (0, n.jsx)(o.u, {
                          id: 'contract-copy',
                          content: 'contract copied',
                          events: ['click'],
                        }),
                      ],
                    }),
                    (0, n.jsx)('h1', {
                      className: d().auramax,
                      children: 'about $gorkius',
                    }),
                    (0, n.jsx)('h1', {
                      className: d().subtitle,
                      children: 'now, wtf is gorkius maximus?',
                    }),
                    (0, n.jsx)(_, {}),
                    // (0, n.jsxs)('div', {
                    //   className: d().metrics,
                    //   children: [
                    //     (0, n.jsxs)('div', {
                    //       className: d().metricBox,
                    //       children: [
                    //         (0, n.jsx)('h1', { children: '$dick price' }),
                    //         (0, n.jsx)('div', {
                    //           className: d().box,
                    //           children: (0, n.jsxs)('h1', {
                    //             children: ['$ ', a],
                    //           }),
                    //         }),
                    //       ],
                    //     }),
                    //     (0, n.jsxs)('div', {
                    //       className: d().metricBox,
                    //       children: [
                    //         (0, n.jsx)('h1', { children: 'market cap' }),
                    //         e
                    //           ? (0, n.jsx)('div', {
                    //               className: d().box,
                    //               children: (0, n.jsxs)('h1', {
                    //                 children: [(e / 1e6).toFixed(2), 'M'],
                    //               }),
                    //             })
                    //           : 'loading...',
                    //       ],
                    //     }),
                    //   ],
                    // }),
                  ],
                }),
              ],
            }),
          ],
        });
      };
    },
    6100: function (e, a, t) {
      'use strict';
      t.d(a, {
        j6: function () {
          return d;
        },
        fX: function () {
          return m;
        },
        mi: function () {
          return n;
        },
        qF: function () {
          return r;
        },
        Nd: function () {
          return l;
        },
        M1: function () {
          return s;
        },
        JJ: function () {
          return i;
        },
        u6: function () {
          return A;
        },
        al: function () {
          return c;
        },
        bu: function () {
          return o;
        },
        by: function () {
          return u;
        },
        sT: function () {
          return h;
        },
      });
      var n = {
          src: '/_next/static/media/cult-1.png',
          height: 505,
          width: 478,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAVFBMVEVMaXGVlZVbW1tUVFQKCgo4ODhJSUk4ODgQEBD09PROTk4FBQVXV1cMDAyAgIDX19d3d3coKCjOzs4RERGWlpb///8FBQX6+voSEhK0tLRpaWmRkZFWQUjtAAAAGXRSTlMA3fsMoFvl/SYiaGVJ2oOVxO2iwu1Sgqb+vwAjoAAAAAlwSFlzAAALEwAACxMBAJqcGAAAAD9JREFUeJwdy0cWgCAQwNDQwYbdGbz/PX2S9Q8wykDPy1qAsOSoOzCnatpZIG+vFb2A6ZCkz4+dT824/t3Rhg9RDQJDNHlQywAAAABJRU5ErkJggg==',
          blurWidth: 8,
          blurHeight: 8,
        },
        r = {
          src: '/_next/static/media/cult-2.png',
          height: 502,
          width: 478,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAVFBMVEUjIyMGBga+vr4gICAaGhqOjo4KCgoYGBgbGxtNTU0kJCQsLCwICAhCQkIRERFXV1c8PDwICAg1NTUnJyewsLDDw8OTk5O7u7sFBQVeXl4MDAxsbGxTwPAWAAAAGXRSTlMBcxffJrGe/mH8+T/Wh+zhv778DTeeMuT+3SSu2QAAAAlwSFlzAAALEwAACxMBAJqcGAAAAD9JREFUeJwdy0kWgCAMwNAgQwvOc9H739MnWf8A7lFayZYO0DH4NwKDxFnyAWHKm9UT6FeTev9qT1Ly1T7ni35HXQIadvLVqAAAAABJRU5ErkJggg==',
          blurWidth: 8,
          blurHeight: 8,
        },
        l = {
          src: '/_next/static/media/cult-3.png',
          height: 508,
          width: 484,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAXVBMVEVLS0vp6ek8PDxdXV0PDw8PDw9FRUULCwucnJwwMDBPT08EBAREREQoKCjQ0NAdHR3Jyck8PDxoaGg1NTWVlZUCAgJ0dHTv7+/29vYFBQXGxsbu7u6GhoYeHh6xsbElTO/tAAAAHHRSTlMBEe391atr/vz+/TVLE5rqtFXJMOVleDCWjjvnpa0QgwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAEBJREFUeJwdy0cWgCAQwNBIGwZ7b+j9j+mTrH+A9QmUvEwVMG6zeTvA6bCkuEPdZyvxABonGu9ftV5tvsp3mhQ+TzICPWqzKwkAAAAASUVORK5CYII=',
          blurWidth: 8,
          blurHeight: 8,
        },
        s = {
          src: '/_next/static/media/cult-4.png',
          height: 507,
          width: 475,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAMAAAAC2hU0AAAAWlBMVEVGRkYpKSkuLi5lZWUcHBwuLi6Li4u6urrOzs7MzMz+/v5/f39KSkoNDQ3///+kpKT19fU9PT1mZmb09PQeHh7y8vIwMDD6+vp4eHjNzc3///9nZ2dRUVGlpaVhrkWqAAAAG3RSTlMBHKfD6fj1/gpV/mB+Yb/+2/toGTOf2TfcoXivkSn6AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAPklEQVR4nB3LRxKAIBAAwZG0gAEF8+r/v2mVfW/A2AjQuScBfRreuYEPU5ENRpVF80Gszod8A+uucv3DnPYDPdECKKVtJWsAAAAASUVORK5CYII=',
          blurWidth: 7,
          blurHeight: 8,
        },
        i = {
          src: '/_next/static/media/cult-5.png',
          height: 503,
          width: 480,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAYFBMVEVhYWGOjo77+/v///9hYWFNTU0MDAzQ0NA0NDQODg5gYGD///////9LS0sAAABfX18PDw+3t7ehoaF3d3cmJiYkJCT///90dHQCAgLx8fFYWFhXV1fz8/MkJCQUFBR6enoRlXy8AAAAHnRSTlMB/vqvRhGP/vOndBg/+y0w5HzV7dRNoqtwJ3byVfXzq32mAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAQElEQVR4nB3LRw7AIAwAwYUANum9y/n/LyMx9wFOqymyzQ2whWHxOzBqnJy00OuRTCogrNaJv4CY1clbXnq++wdTbgJu4Lnf6gAAAABJRU5ErkJggg==',
          blurWidth: 8,
          blurHeight: 8,
        },
        A = {
          src: '/_next/static/media/cult-6.png',
          height: 507,
          width: 478,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAZlBMVEVZWVnm5ub8/Pzw8PBQUFCrq6v6+vr9/f0TExOWlpZ9fX2YmJgAAAAAAABJSUkWFhaKioowMDClpaU3Nzf///8qKioHBwf///8KCgrCwsKDg4NnZ2cpKSnExMQ6OjodHR3f39+vr69S06XkAAAAG3RSTlMB/ihb++BH/g1K+YQyZ0XbMHSi18Ghs7mT+nhOFSmqAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAQUlEQVR4nB3LRxKAIADAwCAdC/aG9f+fdCTnDY76KslNhy6AxrfajkBMRp7CQKX6TokF8MMdHvsrN6fNyvyt4d0/Ut8Ci7aRzNsAAAAASUVORK5CYII=',
          blurWidth: 8,
          blurHeight: 8,
        },
        c = {
          src: '/_next/static/media/cult-7.png',
          height: 505,
          width: 478,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAYFBMVEV0dHRycnKBgYEcHBwfHx/W1tYoKCj29vZTU1M4ODg8PDx1dXV4eHjY2NiXl5dAQEAmJiaYmJgwMDAhISH7+/v///9fX19dXV3BwcHJycmIiIjm5ua2trYuLi40NDSTk5NvBP08AAAAGXRSTlMBfVNr/huXvv4/ETLk5GXw39rLr0zX9GrpMP48mAAAAAlwSFlzAAALEwAACxMBAJqcGAAAAEFJREFUeJwdykcSgDAMwEABIXHoHWza/3/JBB01CxRPxp+/xxKIXd2cARgktKYLxP4yp2nlkxNdE65meY/EwW+2f1KHAo30QppsAAAAAElFTkSuQmCC',
          blurWidth: 8,
          blurHeight: 8,
        },
        o = {
          src: '/_next/static/media/cult-8.png',
          height: 507,
          width: 483,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAXVBMVEVMaXHm5ubMzMx8fHxycnKsrKx0dHRYWFhAQEB3d3dHR0diYmJDQ0M2NjZERERGRkZCQkJzc3OcnJydnZ3Hx8dNTU3FxcWwsLCNjY3i4uLg4OC1tbWHh4dLS0vDw8O6te+dAAAAG3RSTlMAGTf+9flv+v5ZnPoTOLTdZzeO/rPOjdfLmei+Bn25AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAP0lEQVR4nB2LWRaAIBCAKM2xbNdWq/sfszfyCwCzOArde1ZAuy72S8Bk9+NpahgkGp8vdZuXfGvVj6E4/YJxP1LRAlKKv8oWAAAAAElFTkSuQmCC',
          blurWidth: 8,
          blurHeight: 8,
        },
        u = {
          src: '/_next/static/media/lvl1-crook.3b023b67.png',
          height: 1940,
          width: 1140,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAICAMAAAAGL8UJAAAARVBMVEVMaXFDR0lIKhmYhHpMSUhETFMzNTd1Z19NRD48Hg+im5OlkIVwaGBhNiA7HQ9pTEMlEQZsY19mYmJEHw1RIgsxLSpULx0aeTCcAAAAFXRSTlMA2YPAuiKi9ZWQRc1fjbinSo05qBYzox5VAAAACXBIWXMAAAsTAAALEwEAmpwYAAAALklEQVR4nBXEtREAIAAAscfdZf9ROVIEosuAcgnwxwPtSiDU8u9rY7QZEyu0sA8ZpwEmqRz1uwAAAABJRU5ErkJggg==',
          blurWidth: 5,
          blurHeight: 8,
        },
        m = {
          src: '/kekius.mp4',
          height: 244,
          width: 244,
          blurWidth: 0,
          blurHeight: 0,
        },
        d = {
          src: '/_next/static/media/lvlupcrook.a9ff75ae.gif',
          height: 221,
          width: 221,
          blurWidth: 0,
          blurHeight: 0,
        },
        h = {
          src: '/_next/static/media/og-cat.png',
          height: 400,
          width: 400,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAS1BMVEWEhIRpamk0ODhVWFBAQ0FGREarrKlqamlqa2Y5MzOCiH9UVFR2dnaFiYaioJ0fHx+Rko+5vLxDR0WKiopeX2CdnZyAgoCPkZBLT05A8kUbAAAAFHRSTlMBxz/Er5ag+S4rWuCF4l4Iuk1u0KjRj/oAAAAJcEhZcwAACxMAAAsTAQCanBgAAABASURBVHicJYtJFoAgDMWCAi1OOLTo/U/qQ/8mi+QDw6h8S7Z06FTENyBKXtsOlPkW86O7+IjnXtVk7fp/Zwj6AjxNAdv+OlvJAAAAAElFTkSuQmCC',
          blurWidth: 8,
          blurHeight: 8,
        };
    },
    9190: function (e, a, t) {
      'use strict';
      t.d(a, {
        NewHero: function () {
          return c;
        },
      });
      var n = t(7437);
      t(2012);
      var r = t(2265);
      function l(e) {
        let a = [],
          { steps: t = 0, currentIndex: l = 0, nbOfImages: s = 0 } = e,
          i = (e) => {
            let { clientX: n, clientY: r, movementX: i, movementY: c } = e;
            (t += Math.abs(i) + Math.abs(c)) >= 150 * l &&
              (A(n, r), 13 == s && o()),
              l == a.length && ((l = 0), (t = -150));
          },
          A = (e, t) => {
            let n = a[l].current;
            (n.style.left = e + 'px'),
              (n.style.top = t + 'px'),
              (n.style.display = 'block'),
              l++,
              s++,
              c();
          },
          c = () => {
            let e = u();
            for (let a = 0; a < e.length; a++) e[a].style.zIndex = a;
          },
          o = () => {
            (u()[0].style.display = 'none'), s--;
          },
          u = () => {
            let e = [],
              t = l - s;
            for (let n = t; n < l; n++) {
              let t = n;
              t < 0 && (t += a.length), e.push(a[t].current);
            }
            return e;
          };
        return (0, n.jsx)('div', {
          onMouseMove: (e) => {
            i(e);
          },
          children: [...Array(6).keys()].map((e, t) => {
            let l = (0, r.useRef)(null);
            return (
              a.push(l),
              (0, n.jsx)(
                'img',
                {
                  onClick: () => {
                    console.log(a);
                  },
                  ref: l,
                  src: '/maxxing'.concat(t, '.JPG'),
                },
                t
              )
            );
          }),
        });
      }
      var s = t(9702),
        i = t(461),
        A = t.n(i);
      let c = () => {
        let e = 0,
          a = 0,
          t = 0,
          i = [],
          c = (n) => {
            let { clientX: r, clientY: l, movementX: s, movementY: A } = n;
            (e += Math.abs(s) + Math.abs(A)) >= 150 * a &&
              (o(r, l), 12 == t && m()),
              a == i.length && ((a = 0), (e = -150));
          },
          o = (e, n) => {
            let r = i[a].current;
            (r.style.left = e + 'px'),
              (r.style.top = n + 'px'),
              (r.style.display = 'block'),
              a++,
              t++,
              u();
          },
          u = () => {
            let e = d();
            for (let a = 0; a < e.length; a++) e[a].style.zIndex = a;
          },
          m = () => {
            (d()[0].style.display = 'none'), t--;
          },
          d = () => {
            let e = [],
              n = a - t;
            for (let t = n; t < a; t++) {
              let a = t;
              a < 0 && (a += i.length), e.push(i[a].current);
            }
            return e;
          };
        return (0, n.jsxs)('div', {
          onMouseMove: (e) => {
            c(e);
          },
          className: A().main,
          children: [
            [...Array(30).keys()].map((e, a) => {
              let t = (0, r.useRef)(null);
              return (
                i.push(t),
                (0, n.jsx)(
                  'img',
                  {
                    className: A().image,
                    onClick: () => {
                      console.log(i);
                    },
                    ref: t,
                    src: '/maxxing'.concat(a, '.JPG'),
                  },
                  a
                )
              );
            }),
            (0, n.jsxs)('div', {
              className: A().welcome,
              children: [
                (0, n.jsx)(s.r, {
                  strokeColor: '#98BAE7',
                  lineDuration: 3,
                  lineWidthStart: 10,
                  lag: 0.8,
                }),
                (0, n.jsx)(l, { className: A().main }),
                (0, n.jsx)('main', { className: A().top }),
              ],
            }),
          ],
        });
      };
    },
    9702: function (e, a, t) {
      'use strict';
      t.d(a, {
        r: function () {
          return i;
        },
      });
      var n = t(7437),
        r = t(2265);
      function l(e) {
        let { move: a, draw: t, onContextCreate: l, ...s } = e,
          i = (0, r.useRef)(),
          A = (0, r.useRef)(),
          c = (0, r.useCallback)(() => {
            var e;
            (null === (e = A.current) || void 0 === e ? void 0 : e.canvas) &&
              ((A.current.canvas.width = window.innerWidth),
              (A.current.canvas.height = window.innerHeight)),
              l && A.current && l(A.current);
          }, [A, l]),
          o = (0, r.useRef)(a),
          u = (0, r.useRef)(t),
          m = (0, r.useRef)(0);
        (0, r.useEffect)(() => {
          (o.current = a), (u.current = t);
        }, [a, o, u, t]);
        let d = (0, r.useCallback)(() => {
          i.current && o.current && o.current(i.current),
            A.current && u.current(A.current),
            (m.current = window.requestAnimationFrame(d));
        }, [o, u]);
        return (
          (0, r.useEffect)(
            () => (
              d(),
              () => {
                window.cancelAnimationFrame(m.current);
              }
            ),
            []
          ),
          (0, r.useEffect)(() => {
            let e = i.current.getContext('2d');
            if (!e) throw Error('Cannot create canvas context');
            return (
              (A.current = e),
              window.addEventListener('resize', c),
              c(),
              () => {
                window.removeEventListener('resize', c);
              }
            );
          }, [A, i, d, c]),
          (0, n.jsx)('canvas', { ref: i, ...s })
        );
      }
      let s = {
        pointerEvents: 'none',
        position: 'fixed',
        width: '100vw',
        height: '100vh',
        zIndex: 2,
        top: 0,
        left: 0,
      };
      function i(e) {
        let {
            lineDuration: a = 1,
            lineWidthStart: t = 8,
            strokeColor: i = 'rgb('.concat('255, 0, 0', ')'),
            lag: A = 0.92,
            style: c = s,
            ...o
          } = e,
          u = (1e3 * a) / 60,
          m = (0, r.useRef)({ x: 0, y: 0 }),
          d = (0, r.useRef)([]),
          h = (0, r.useCallback)(
            (e) => {
              m.current = { x: e.clientX, y: e.clientY };
            },
            [m]
          ),
          x = (0, r.useCallback)((e, a, t, n, r) => {
            (e.lineWidth = r),
              (e.strokeStyle = n),
              e.beginPath(),
              e.moveTo(t.x, t.y),
              e.arcTo(a.x, a.y, t.x, t.y, 50),
              e.stroke(),
              e.beginPath(),
              (e.fillStyle = n),
              e.arc(t.x, t.y, r / 2, 0, 2 * Math.PI),
              e.fill();
          }, []),
          _ = (0, r.useCallback)(
            (e) => {
              e.clearRect(0, 0, e.canvas.width, e.canvas.height),
                d.current.forEach((a, n, r) => {
                  let l = n ? r[n - 1] : r[n];
                  if (((a.age += 1), a.age > u)) d.current.splice(n, 1);
                  else {
                    let n = t / (2 * a.age);
                    x(e, a, l, i, n);
                  }
                });
            },
            [d, x, u, t, i]
          ),
          g = (0, r.useCallback)(() => {
            let e = m.current,
              a = d.current[d.current.length - 1] || e,
              t = e.x - (e.x - a.x) * A,
              n = e.y - (e.y - a.y) * A;
            d.current.push({ x: t, y: n, age: 0 });
          }, [m, d, A]);
        return (
          (0, r.useEffect)(
            () => (
              document.body.addEventListener('mousemove', h),
              () => {
                window.removeEventListener('mousemove', h);
              }
            ),
            [h]
          ),
          (0, n.jsx)(l, {
            ...o,
            style: c,
            move: g,
            draw: _,
            onContextCreate: (e) => {
              e.lineJoin = 'round';
            },
          })
        );
      }
    },
    9159: function (e) {
      e.exports = {
        welcome: 'banner_welcome__TQxDd',
        marquee: 'banner_marquee__EEjuR',
        marquee2: 'banner_marquee2__9mPEr',
      };
    },
    8531: function (e) {
      e.exports = {
        welcome: 'counter_welcome__lsAmF',
        meme: 'counter_meme__uRUj_',
        buttoncontainer: 'counter_buttoncontainer__hoesJ',
        container: 'counter_container__CBczv',
        header: 'counter_header__BpgQe',
        auramax: 'counter_auramax__eJTwL',
        green: 'counter_green__7bR34',
        subtitle: 'counter_subtitle__Qxb3V',
        box: 'counter_box__1_OGN',
        ca: 'counter_ca__EZjul',
      };
    },
    2726: function (e) {
      e.exports = {
        welcome: 'footer_welcome__4uVyI',
        auracat: 'footer_auracat__CmmJH',
        container: 'footer_container__NXeCQ',
        header: 'footer_header__0MqXj',
        auramax: 'footer_auramax__shV4m',
        positiveauramax: 'footer_positiveauramax__tmyz0',
        subtitle: 'footer_subtitle__AjWCi',
        box: 'footer_box__XRkzz',
        ca: 'footer_ca__VQAn7',
        main: 'footer_main__ytOi2',
        gsapcontainer: 'footer_gsapcontainer__q4ntq',
        Layer_2: 'footer_Layer_2__9_HD4',
      };
    },
    2317: function (e) {
      e.exports = {
        welcome: 'manifesto_welcome__jYyZc',
        container: 'manifesto_container__CU3XW',
        header: 'manifesto_header___IzzV',
        auramax: 'manifesto_auramax__FbdJB',
        buttoncontainer: 'manifesto_buttoncontainer__0UfZq',
        meme: 'manifesto_meme__WHvDy',
        subtitle: 'manifesto_subtitle__f8ssS',
        box: 'manifesto_box__ayH_n',
        ca: 'manifesto_ca__vrt70',
      };
    },
    2852: function (e) {
      e.exports = {
        metrics: 'new-about_metrics__GVp8z',
        metricBox: 'new-about_metricBox__tDQBu',
        lineMask: 'new-about_lineMask__4iGg5',
        contractBox: 'new-about_contractBox__IPKrl',
        main: 'new-about_main__JNdSQ',
        title: 'new-about_title___vNBl',
        plane: 'new-about_plane__SU4iP',
        plane1: 'new-about_plane1__LHfUq',
        plane2: 'new-about_plane2__XJ8cE',
        plane3: 'new-about_plane3__BVrzw',
        plane4: 'new-about_plane4__pQi8P',
        plane5: 'new-about_plane5__lZX91',
        plane6: 'new-about_plane6__twOFv',
        plane7: 'new-about_plane7__OXDUO',
        plane8: 'new-about_plane8__Hb5g2',
        plane9: 'new-about_plane9__U7eu3',
        plane10: 'new-about_plane10__bzTlg',
        plane11: 'new-about_plane11__Eqtgs',
        plane12: 'new-about_plane12__sw7TF',
        plane13: 'new-about_plane13__uACri',
        plane14: 'new-about_plane14__Xd30F',
        plane15: 'new-about_plane15__oBVHD',
        plane16: 'new-about_plane16__NomnM',
        plane17: 'new-about_plane17__dXjFK',
        plane18: 'new-about_plane18__gxQVk',
        meme: 'new-about_meme__vW58P',
        buttoncontainer: 'new-about_buttoncontainer__4tZOD',
        welcome: 'new-about_welcome__9KFB6',
        container: 'new-about_container__4W0P4',
        header: 'new-about_header__VFheu',
        auramax: 'new-about_auramax__EUpjf',
        positiveaura: 'new-about_positiveaura__Fzs_6',
        subtitle: 'new-about_subtitle__Yprib',
        box: 'new-about_box__PQUZB',
      };
    },
    461: function (e) {
      e.exports = {
        welcome: 'new-hero_welcome__jP4ZL',
        image: 'new-hero_image__QWYwx',
        main: 'new-hero_main__4dQzg',
        cult: 'new-hero_cult__Xo3Hs',
        header: 'new-hero_header__RxT1f',
        auramax: 'new-hero_auramax__7ZRmD',
        subtitle: 'new-hero_subtitle__5zVwE',
        box: 'new-hero_box__bRAyX',
        ca: 'new-hero_ca__09gFV',
        container: 'new-hero_container__AJjEN',
      };
    },
  },
]);
