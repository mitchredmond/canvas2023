/*! For license information please see stories-Button-stories.345d5b61.iframe.bundle.js.LICENSE.txt */
"use strict";
(self.webpackChunkstorybook = self.webpackChunkstorybook || []).push([
  [256],
  {
    "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js": function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      __webpack_require__.d(__webpack_exports__, {
        Z: function () {
          return _objectSpread2;
        },
      });
      var esm_typeof = __webpack_require__(
        "./node_modules/@babel/runtime/helpers/esm/typeof.js"
      );
      function _toPropertyKey(arg) {
        var key = (function _toPrimitive(input, hint) {
          if ("object" !== (0, esm_typeof.Z)(input) || null === input)
            return input;
          var prim = input[Symbol.toPrimitive];
          if (void 0 !== prim) {
            var res = prim.call(input, hint || "default");
            if ("object" !== (0, esm_typeof.Z)(res)) return res;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === hint ? String : Number)(input);
        })(arg, "string");
        return "symbol" === (0, esm_typeof.Z)(key) ? key : String(key);
      }
      function _defineProperty(obj, key, value) {
        return (
          (key = _toPropertyKey(key)) in obj
            ? Object.defineProperty(obj, key, {
                value: value,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (obj[key] = value),
          obj
        );
      }
      function ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var symbols = Object.getOwnPropertySymbols(object);
          enumerableOnly &&
            (symbols = symbols.filter(function (sym) {
              return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            })),
            keys.push.apply(keys, symbols);
        }
        return keys;
      }
      function _objectSpread2(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {};
          i % 2
            ? ownKeys(Object(source), !0).forEach(function (key) {
                _defineProperty(target, key, source[key]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(
                target,
                Object.getOwnPropertyDescriptors(source)
              )
            : ownKeys(Object(source)).forEach(function (key) {
                Object.defineProperty(
                  target,
                  key,
                  Object.getOwnPropertyDescriptor(source, key)
                );
              });
        }
        return target;
      }
    },
    "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":
      function (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) {
        function _objectWithoutProperties(source, excluded) {
          if (null == source) return {};
          var key,
            i,
            target = (function _objectWithoutPropertiesLoose(source, excluded) {
              if (null == source) return {};
              var key,
                i,
                target = {},
                sourceKeys = Object.keys(source);
              for (i = 0; i < sourceKeys.length; i++)
                (key = sourceKeys[i]),
                  excluded.indexOf(key) >= 0 || (target[key] = source[key]);
              return target;
            })(source, excluded);
          if (Object.getOwnPropertySymbols) {
            var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
            for (i = 0; i < sourceSymbolKeys.length; i++)
              (key = sourceSymbolKeys[i]),
                excluded.indexOf(key) >= 0 ||
                  (Object.prototype.propertyIsEnumerable.call(source, key) &&
                    (target[key] = source[key]));
          }
          return target;
        }
        __webpack_require__.d(__webpack_exports__, {
          Z: function () {
            return _objectWithoutProperties;
          },
        });
      },
    "./node_modules/@babel/runtime/helpers/esm/typeof.js": function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      function _typeof(obj) {
        return (
          (_typeof =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (obj) {
                  return typeof obj;
                }
              : function (obj) {
                  return obj &&
                    "function" == typeof Symbol &&
                    obj.constructor === Symbol &&
                    obj !== Symbol.prototype
                    ? "symbol"
                    : typeof obj;
                }),
          _typeof(obj)
        );
      }
      __webpack_require__.d(__webpack_exports__, {
        Z: function () {
          return _typeof;
        },
      });
    },
    "./src/stories/Button.stories.js": function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Large: function () {
            return Large;
          },
          Primary: function () {
            return Primary;
          },
          Secondary: function () {
            return Secondary;
          },
          Small: function () {
            return Small;
          },
          __namedExportsOrder: function () {
            return __namedExportsOrder;
          },
        });
      var _Primary$parameters,
        _Primary$parameters2,
        _Primary$parameters2$,
        _Secondary$parameters,
        _Secondary$parameters2,
        _Secondary$parameters3,
        _Large$parameters,
        _Large$parameters2,
        _Large$parameters2$do,
        _Small$parameters,
        _Small$parameters2,
        _Small$parameters2$do,
        _Users_mredmond_Documents_GitHub_canvas2023_storybook_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"
          ),
        _Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          "./src/stories/Button.jsx"
        );
      __webpack_exports__.default = {
        title: "Example/Button",
        component: _Button__WEBPACK_IMPORTED_MODULE_0__.z,
        tags: ["autodocs"],
        argTypes: { backgroundColor: { control: "color" } },
      };
      var Primary = { args: { primary: !0, label: "Button" } },
        Secondary = { args: { label: "Button" } },
        Large = { args: { size: "large", label: "Button" } },
        Small = { args: { size: "small", label: "Button" } };
      (Primary.parameters = (0,
      _Users_mredmond_Documents_GitHub_canvas2023_storybook_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__.Z)(
        (0,
        _Users_mredmond_Documents_GitHub_canvas2023_storybook_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__.Z)(
          {},
          Primary.parameters
        ),
        {},
        {
          docs: (0,
          _Users_mredmond_Documents_GitHub_canvas2023_storybook_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__.Z)(
            (0,
            _Users_mredmond_Documents_GitHub_canvas2023_storybook_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__.Z)(
              {},
              null === (_Primary$parameters = Primary.parameters) ||
                void 0 === _Primary$parameters
                ? void 0
                : _Primary$parameters.docs
            ),
            {},
            {
              source: (0,
              _Users_mredmond_Documents_GitHub_canvas2023_storybook_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__.Z)(
                {
                  originalSource:
                    "{\n  args: {\n    primary: true,\n    label: 'Button'\n  }\n}",
                },
                null === (_Primary$parameters2 = Primary.parameters) ||
                  void 0 === _Primary$parameters2 ||
                  null ===
                    (_Primary$parameters2$ = _Primary$parameters2.docs) ||
                  void 0 === _Primary$parameters2$
                  ? void 0
                  : _Primary$parameters2$.source
              ),
            }
          ),
        }
      )),
        (Secondary.parameters = (0,
        _Users_mredmond_Documents_GitHub_canvas2023_storybook_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__.Z)(
          (0,
          _Users_mredmond_Documents_GitHub_canvas2023_storybook_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__.Z)(
            {},
            Secondary.parameters
          ),
          {},
          {
            docs: (0,
            _Users_mredmond_Documents_GitHub_canvas2023_storybook_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__.Z)(
              (0,
              _Users_mredmond_Documents_GitHub_canvas2023_storybook_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__.Z)(
                {},
                null === (_Secondary$parameters = Secondary.parameters) ||
                  void 0 === _Secondary$parameters
                  ? void 0
                  : _Secondary$parameters.docs
              ),
              {},
              {
                source: (0,
                _Users_mredmond_Documents_GitHub_canvas2023_storybook_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__.Z)(
                  {
                    originalSource: "{\n  args: {\n    label: 'Button'\n  }\n}",
                  },
                  null === (_Secondary$parameters2 = Secondary.parameters) ||
                    void 0 === _Secondary$parameters2 ||
                    null ===
                      (_Secondary$parameters3 = _Secondary$parameters2.docs) ||
                    void 0 === _Secondary$parameters3
                    ? void 0
                    : _Secondary$parameters3.source
                ),
              }
            ),
          }
        )),
        (Large.parameters = (0,
        _Users_mredmond_Documents_GitHub_canvas2023_storybook_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__.Z)(
          (0,
          _Users_mredmond_Documents_GitHub_canvas2023_storybook_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__.Z)(
            {},
            Large.parameters
          ),
          {},
          {
            docs: (0,
            _Users_mredmond_Documents_GitHub_canvas2023_storybook_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__.Z)(
              (0,
              _Users_mredmond_Documents_GitHub_canvas2023_storybook_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__.Z)(
                {},
                null === (_Large$parameters = Large.parameters) ||
                  void 0 === _Large$parameters
                  ? void 0
                  : _Large$parameters.docs
              ),
              {},
              {
                source: (0,
                _Users_mredmond_Documents_GitHub_canvas2023_storybook_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__.Z)(
                  {
                    originalSource:
                      "{\n  args: {\n    size: 'large',\n    label: 'Button'\n  }\n}",
                  },
                  null === (_Large$parameters2 = Large.parameters) ||
                    void 0 === _Large$parameters2 ||
                    null ===
                      (_Large$parameters2$do = _Large$parameters2.docs) ||
                    void 0 === _Large$parameters2$do
                    ? void 0
                    : _Large$parameters2$do.source
                ),
              }
            ),
          }
        )),
        (Small.parameters = (0,
        _Users_mredmond_Documents_GitHub_canvas2023_storybook_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__.Z)(
          (0,
          _Users_mredmond_Documents_GitHub_canvas2023_storybook_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__.Z)(
            {},
            Small.parameters
          ),
          {},
          {
            docs: (0,
            _Users_mredmond_Documents_GitHub_canvas2023_storybook_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__.Z)(
              (0,
              _Users_mredmond_Documents_GitHub_canvas2023_storybook_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__.Z)(
                {},
                null === (_Small$parameters = Small.parameters) ||
                  void 0 === _Small$parameters
                  ? void 0
                  : _Small$parameters.docs
              ),
              {},
              {
                source: (0,
                _Users_mredmond_Documents_GitHub_canvas2023_storybook_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__.Z)(
                  {
                    originalSource:
                      "{\n  args: {\n    size: 'small',\n    label: 'Button'\n  }\n}",
                  },
                  null === (_Small$parameters2 = Small.parameters) ||
                    void 0 === _Small$parameters2 ||
                    null ===
                      (_Small$parameters2$do = _Small$parameters2.docs) ||
                    void 0 === _Small$parameters2$do
                    ? void 0
                    : _Small$parameters2$do.source
                ),
              }
            ),
          }
        ));
      var __namedExportsOrder = ["Primary", "Secondary", "Large", "Small"];
    },
    "./src/stories/Button.jsx": function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      __webpack_require__.d(__webpack_exports__, {
        z: function () {
          return Button;
        },
      });
      var objectSpread2 = __webpack_require__(
          "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"
        ),
        objectWithoutProperties = __webpack_require__(
          "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"
        ),
        jsx_runtime =
          (__webpack_require__("./node_modules/react/index.js"),
          __webpack_require__("./node_modules/react/jsx-runtime.js")),
        _excluded = ["primary", "backgroundColor", "size", "label"],
        Button = function Button(_ref) {
          var primary = _ref.primary,
            backgroundColor = _ref.backgroundColor,
            size = _ref.size,
            label = _ref.label,
            props = (0, objectWithoutProperties.Z)(_ref, _excluded),
            mode = primary
              ? "storybook-button--primary"
              : "storybook-button--secondary";
          return (0, jsx_runtime.jsx)(
            "button",
            (0, objectSpread2.Z)(
              (0, objectSpread2.Z)(
                {
                  type: "button",
                  className: [
                    "storybook-button",
                    "storybook-button--".concat(size),
                    mode,
                  ].join(" "),
                  style: backgroundColor && {
                    backgroundColor: backgroundColor,
                  },
                },
                props
              ),
              {},
              { children: label }
            )
          );
        };
      (Button.defaultProps = {
        backgroundColor: null,
        primary: !1,
        size: "medium",
        onClick: void 0,
      }),
        (Button.__docgenInfo = {
          description: "Primary UI component for user interaction",
          methods: [],
          displayName: "Button",
          props: {
            backgroundColor: {
              defaultValue: { value: "null", computed: !1 },
              description: "What background color to use",
              type: { name: "string" },
              required: !1,
            },
            primary: {
              defaultValue: { value: "false", computed: !1 },
              description: "Is this the principal call to action on the page?",
              type: { name: "bool" },
              required: !1,
            },
            size: {
              defaultValue: { value: "'medium'", computed: !1 },
              description: "How large should the button be?",
              type: {
                name: "enum",
                value: [
                  { value: "'small'", computed: !1 },
                  { value: "'medium'", computed: !1 },
                  { value: "'large'", computed: !1 },
                ],
              },
              required: !1,
            },
            onClick: {
              defaultValue: { value: "undefined", computed: !0 },
              description: "Optional click handler",
              type: { name: "func" },
              required: !1,
            },
            label: {
              description: "Button contents",
              type: { name: "string" },
              required: !0,
            },
          },
        });
    },
    "./node_modules/react/cjs/react-jsx-runtime.production.min.js": function (
      __unused_webpack_module,
      exports,
      __webpack_require__
    ) {
      var f = __webpack_require__("./node_modules/react/index.js"),
        k = Symbol.for("react.element"),
        l = Symbol.for("react.fragment"),
        m = Object.prototype.hasOwnProperty,
        n =
          f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        p = { key: !0, ref: !0, __self: !0, __source: !0 };
      function q(c, a, g) {
        var b,
          d = {},
          e = null,
          h = null;
        for (b in (void 0 !== g && (e = "" + g),
        void 0 !== a.key && (e = "" + a.key),
        void 0 !== a.ref && (h = a.ref),
        a))
          m.call(a, b) && !p.hasOwnProperty(b) && (d[b] = a[b]);
        if (c && c.defaultProps)
          for (b in (a = c.defaultProps)) void 0 === d[b] && (d[b] = a[b]);
        return {
          $$typeof: k,
          type: c,
          key: e,
          ref: h,
          props: d,
          _owner: n.current,
        };
      }
      (exports.Fragment = l), (exports.jsx = q), (exports.jsxs = q);
    },
    "./node_modules/react/jsx-runtime.js": function (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) {
      module.exports = __webpack_require__(
        "./node_modules/react/cjs/react-jsx-runtime.production.min.js"
      );
    },
  },
]);
