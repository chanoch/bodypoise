webpackJsonp([1],{

/***/ 53:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(10);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _App = __webpack_require__(54);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render(_react2.default.createElement(_App2.default, null), document.getElementById('root'));

/***/ }),

/***/ 54:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _EmailLink = __webpack_require__(55);

var _EmailLink2 = _interopRequireDefault(_EmailLink);

var _TelephoneLink = __webpack_require__(56);

var _TelephoneLink2 = _interopRequireDefault(_TelephoneLink);

var _ImageLink = __webpack_require__(57);

var _ImageLink2 = _interopRequireDefault(_ImageLink);

var _Header = __webpack_require__(70);

var _Header2 = _interopRequireDefault(_Header);

var _AboutBlock = __webpack_require__(58);

var _AboutBlock2 = _interopRequireDefault(_AboutBlock);

var _BackToTop = __webpack_require__(59);

var _BackToTop2 = _interopRequireDefault(_BackToTop);

var _BdrTop = __webpack_require__(60);

var _BdrTop2 = _interopRequireDefault(_BdrTop);

var _CallToAction = __webpack_require__(61);

var _CallToAction2 = _interopRequireDefault(_CallToAction);

var _FeatureList = __webpack_require__(62);

var _FeatureList2 = _interopRequireDefault(_FeatureList);

var _FeatureBlock = __webpack_require__(63);

var _FeatureBlock2 = _interopRequireDefault(_FeatureBlock);

var _Navigation = __webpack_require__(64);

var _Navigation2 = _interopRequireDefault(_Navigation);

var _Slider = __webpack_require__(65);

var _Slider2 = _interopRequireDefault(_Slider);

var _SectionSpace = __webpack_require__(66);

var _SectionSpace2 = _interopRequireDefault(_SectionSpace);

var _Services = __webpack_require__(67);

var _Services2 = _interopRequireDefault(_Services);

var _Footer = __webpack_require__(68);

var _Footer2 = _interopRequireDefault(_Footer);

var _TinyFooter = __webpack_require__(69);

var _TinyFooter2 = _interopRequireDefault(_TinyFooter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App(props) {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

        _this.state = {
            context: props.context
        };
        return _this;
    }

    _createClass(App, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    _Header2.default,
                    null,
                    _react2.default.createElement(_ImageLink2.default, { link: '/',
                        title: 'Body Poise Home Page',
                        src: 'images/logo.png',
                        altText: 'Body Poise Logo' }),
                    _react2.default.createElement(_EmailLink2.default, { email: 'heather@bodypoise.co.uk', subject: 'General Query' }),
                    _react2.default.createElement(_TelephoneLink2.default, { number: '07886 407 274' })
                ),
                _react2.default.createElement(_Navigation2.default, null),
                _react2.default.createElement(_Slider2.default, null),
                _react2.default.createElement(
                    _FeatureList2.default,
                    { title: 'Daily health care assistance',
                        description: 'We are one of the leading providers of domiciliary care and health care staffing services.' },
                    _react2.default.createElement(
                        _FeatureBlock2.default,
                        { icon: 'icon-medical-records',
                            title: 'Residential Care' },
                        'Get helpful tips on what to look for when touring residential care facilities.'
                    ),
                    _react2.default.createElement(
                        _FeatureBlock2.default,
                        { icon: 'icon-drugs-3',
                            title: 'Urgent Care at Home' },
                        'Provides convenient walk-in services for individuals of all ages.'
                    ),
                    _react2.default.createElement(
                        _FeatureBlock2.default,
                        { icon: 'icon-first-aid-kit',
                            title: 'Home Live in care' },
                        'Many families struggle to make decisions about the best living situation for their aging.'
                    )
                ),
                _react2.default.createElement(_Services2.default, null),
                _react2.default.createElement(_SectionSpace2.default, null),
                _react2.default.createElement(
                    _BdrTop2.default,
                    null,
                    _react2.default.createElement(
                        _AboutBlock2.default,
                        { title: 'Who we are',
                            link: 'team-listing.html',
                            linkText: 'Meet The Team' },
                        'More than 20 years of providing innovative solutions that improve health and quality of life for those in need of in-home health services.',
                        _react2.default.createElement(
                            'strong',
                            null,
                            'Staff on call 24 hours a day'
                        ),
                        ', seven days a week, to help ensure continuity.'
                    ),
                    _react2.default.createElement(
                        _AboutBlock2.default,
                        { title: 'What we offer',
                            link: 'service-listing-image.html',
                            linkText: 'View Services' },
                        'Service is focused on patients and ',
                        _react2.default.createElement(
                            'strong',
                            null,
                            'dedicated to delivering quality patient care'
                        ),
                        ' and service\u2014all supported by a nationwide network of experienced healthcare professionals and staff.'
                    )
                ),
                _react2.default.createElement(
                    _FeatureList2.default,
                    { title: 'Why choose our health care',
                        description: 'More than 20 years of providing innovative solutions that improve health and quality of life.',
                        classes: 'section-color' },
                    _react2.default.createElement(
                        _FeatureBlock2.default,
                        { icon: 'icon-coffee-cup',
                            title: 'Quality Care' },
                        'Health care center providing quality care for the elderly, children, adult.'
                    ),
                    _react2.default.createElement(
                        _FeatureBlock2.default,
                        { icon: 'icon-document',
                            title: 'Certified Healthcare' },
                        'Health care is Licensing and Certification is a unit in the Division of Health Care Services.'
                    ),
                    _react2.default.createElement(
                        _FeatureBlock2.default,
                        { icon: 'icon-avatar',
                            title: 'Professional Staff' },
                        'Professionals and Experienced staff provide the most timely & efficient services possible.'
                    ),
                    _react2.default.createElement(
                        _FeatureBlock2.default,
                        { icon: 'icon-calendar',
                            title: '24 Hours a Day' },
                        'Safe environments with friendly and professional teams of highly trained staff 24 hours a day'
                    )
                ),
                _react2.default.createElement(
                    _CallToAction2.default,
                    { link: 'contact-us.html', buttonText: 'Contact Us' },
                    'Do You Need Private Home Care Specialists? Call +1 800 234 5678'
                ),
                _react2.default.createElement(_Footer2.default, null),
                _react2.default.createElement(
                    _TinyFooter2.default,
                    null,
                    '@ 2018 Body Poise. All Reserved.'
                ),
                _react2.default.createElement(_BackToTop2.default, null)
            );
        }
    }]);

    return App;
}(_react2.default.Component);

exports.default = App;

/***/ }),

/***/ 55:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EmailLink = function (_React$Component) {
    _inherits(EmailLink, _React$Component);

    function EmailLink(props) {
        _classCallCheck(this, EmailLink);

        return _possibleConstructorReturn(this, (EmailLink.__proto__ || Object.getPrototypeOf(EmailLink)).call(this, props));
    }

    _createClass(EmailLink, [{
        key: "render",
        value: function render() {
            var _props = this.props,
                email = _props.email,
                subject = _props.subject;

            var emailLink = "mailto:" + email + "?subject=" + subject;
            return _react2.default.createElement(
                "a",
                { href: emailLink },
                email
            );
        }
    }]);

    return EmailLink;
}(_react2.default.Component);

exports.default = EmailLink;

/***/ }),

/***/ 56:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TelephoneLink = function (_React$Component) {
    _inherits(TelephoneLink, _React$Component);

    function TelephoneLink(props) {
        _classCallCheck(this, TelephoneLink);

        return _possibleConstructorReturn(this, (TelephoneLink.__proto__ || Object.getPrototypeOf(TelephoneLink)).call(this, props));
    }

    _createClass(TelephoneLink, [{
        key: "render",
        value: function render() {
            var number = this.props.number;

            var telLink = "tel:" + number;
            return _react2.default.createElement(
                "a",
                { href: telLink },
                number
            );
        }
    }]);

    return TelephoneLink;
}(_react2.default.Component);

exports.default = TelephoneLink;

/***/ }),

/***/ 57:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ImageLink = function (_React$Component) {
    _inherits(ImageLink, _React$Component);

    function ImageLink(props) {
        _classCallCheck(this, ImageLink);

        return _possibleConstructorReturn(this, (ImageLink.__proto__ || Object.getPrototypeOf(ImageLink)).call(this, props));
    }

    _createClass(ImageLink, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                link = _props.link,
                linkTitle = _props.linkTitle,
                src = _props.src,
                altText = _props.altText;

            return _react2.default.createElement(
                'a',
                { href: link, title: linkTitle },
                _react2.default.createElement('img', { src: src, alt: altText })
            );
        }
    }]);

    return ImageLink;
}(_react2.default.Component);

exports.default = ImageLink;

/***/ }),

/***/ 58:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AboutBlock = function (_React$PureComponent) {
    _inherits(AboutBlock, _React$PureComponent);

    function AboutBlock(props) {
        _classCallCheck(this, AboutBlock);

        return _possibleConstructorReturn(this, (AboutBlock.__proto__ || Object.getPrototypeOf(AboutBlock)).call(this, props));
    }

    _createClass(AboutBlock, [{
        key: "render",
        value: function render() {
            var _props = this.props,
                title = _props.title,
                children = _props.children,
                link = _props.link,
                linkText = _props.linkText;

            return _react2.default.createElement(
                "div",
                { className: "col-md-6 about-block" },
                _react2.default.createElement(
                    "h2",
                    null,
                    title
                ),
                _react2.default.createElement(
                    "p",
                    null,
                    children
                ),
                _react2.default.createElement(
                    "a",
                    { href: link, className: "btn btn-secondary" },
                    linkText
                )
            );
        }
    }]);

    return AboutBlock;
}(_react2.default.PureComponent);

exports.default = AboutBlock;

/***/ }),

/***/ 59:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BackToTop = function (_React$PureComponent) {
    _inherits(BackToTop, _React$PureComponent);

    function BackToTop(props) {
        _classCallCheck(this, BackToTop);

        return _possibleConstructorReturn(this, (BackToTop.__proto__ || Object.getPrototypeOf(BackToTop)).call(this, props));
    }

    _createClass(BackToTop, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "a",
                { href: "#0", className: "cd-top", title: "Go to top" },
                "Top"
            );
        }
    }]);

    return BackToTop;
}(_react2.default.PureComponent);

exports.default = BackToTop;

/***/ }),

/***/ 60:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BdrTop = function (_React$PureComponent) {
    _inherits(BdrTop, _React$PureComponent);

    function BdrTop(props) {
        _classCallCheck(this, BdrTop);

        return _possibleConstructorReturn(this, (BdrTop.__proto__ || Object.getPrototypeOf(BdrTop)).call(this, props));
    }

    _createClass(BdrTop, [{
        key: "render",
        value: function render() {
            var children = this.props.children;

            return _react2.default.createElement(
                "div",
                { className: "bdr-top" },
                _react2.default.createElement(
                    "div",
                    { className: "container" },
                    _react2.default.createElement(
                        "div",
                        { className: "row" },
                        children
                    )
                )
            );
        }
    }]);

    return BdrTop;
}(_react2.default.PureComponent);

exports.default = BdrTop;

/***/ }),

/***/ 61:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CallToAction = function (_React$PureComponent) {
  _inherits(CallToAction, _React$PureComponent);

  function CallToAction(props) {
    _classCallCheck(this, CallToAction);

    return _possibleConstructorReturn(this, (CallToAction.__proto__ || Object.getPrototypeOf(CallToAction)).call(this, props));
  }

  _createClass(CallToAction, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          children = _props.children,
          link = _props.link,
          buttonText = _props.buttonText;

      return _react2.default.createElement(
        "div",
        { className: "section-default-bg section-space-40 cta-section" },
        _react2.default.createElement(
          "div",
          { className: "container" },
          _react2.default.createElement(
            "div",
            { className: "row" },
            _react2.default.createElement(
              "div",
              { className: "col-md-10 cta-title" },
              _react2.default.createElement(
                "h2",
                { className: "heading-title-white" },
                children
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "col-md-2" },
              _react2.default.createElement(
                "a",
                { href: link, className: "btn btn-secondary btn-block" },
                buttonText
              )
            )
          )
        )
      );
    }
  }]);

  return CallToAction;
}(_react2.default.PureComponent);

exports.default = CallToAction;

/***/ }),

/***/ 62:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FeatureList = function (_React$Component) {
    _inherits(FeatureList, _React$Component);

    function FeatureList(props) {
        _classCallCheck(this, FeatureList);

        return _possibleConstructorReturn(this, (FeatureList.__proto__ || Object.getPrototypeOf(FeatureList)).call(this, props));
    }

    _createClass(FeatureList, [{
        key: "calculateChildSizes",
        value: function calculateChildSizes(children) {
            var blockSize = "col-md-4",
                iconSize = "icon-large";
            if (children && children.length && children.length === 4) {
                blockSize = "col-md-3";
                iconSize = "icon-medium";
            }
            return {
                blockSize: blockSize,
                iconSize: iconSize
            };
        }
    }, {
        key: "render",
        value: function render() {
            var _props = this.props,
                title = _props.title,
                description = _props.description,
                children = _props.children,
                classes = _props.classes;

            var additionalProps = this.calculateChildSizes(children);
            var childrenWithSize = _react2.default.Children.map(children, function (child) {
                return _react2.default.cloneElement(child, additionalProps);
            });
            var listClasses =  true ? classes : "";
            return _react2.default.createElement(
                "div",
                { className: listClasses },
                _react2.default.createElement(
                    "div",
                    { className: "container" },
                    _react2.default.createElement(
                        "div",
                        { className: "row" },
                        _react2.default.createElement(
                            "div",
                            { className: "col-md-offset-2 col-md-8 section-title text-center" },
                            _react2.default.createElement(
                                "h1",
                                null,
                                title
                            ),
                            _react2.default.createElement(
                                "p",
                                null,
                                description
                            )
                        )
                    ),
                    _react2.default.createElement(
                        "div",
                        { className: "row" },
                        childrenWithSize
                    )
                )
            );
        }
    }]);

    return FeatureList;
}(_react2.default.Component);

exports.default = FeatureList;

/***/ }),

/***/ 63:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FeatureBlock = function (_React$Component) {
    _inherits(FeatureBlock, _React$Component);

    function FeatureBlock(props) {
        _classCallCheck(this, FeatureBlock);

        return _possibleConstructorReturn(this, (FeatureBlock.__proto__ || Object.getPrototypeOf(FeatureBlock)).call(this, props));
    }

    _createClass(FeatureBlock, [{
        key: "render",
        value: function render() {
            var _props = this.props,
                title = _props.title,
                children = _props.children,
                icon = _props.icon,
                iconSize = _props.iconSize,
                blockSize = _props.blockSize;

            var icons = iconSize + " " + icon;
            var featureClasses = "feature feature-centre " + blockSize;
            return _react2.default.createElement(
                "div",
                { className: featureClasses },
                _react2.default.createElement(
                    "div",
                    { className: "feature-icon" },
                    _react2.default.createElement("i", { className: icons })
                ),
                _react2.default.createElement(
                    "div",
                    { className: "feature-content" },
                    _react2.default.createElement(
                        "h2",
                        null,
                        title
                    ),
                    _react2.default.createElement(
                        "p",
                        null,
                        children
                    )
                )
            );
        }
    }]);

    return FeatureBlock;
}(_react2.default.Component);

exports.default = FeatureBlock;

/***/ }),

/***/ 64:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Navigation = function (_React$PureComponent) {
    _inherits(Navigation, _React$PureComponent);

    function Navigation(props) {
        _classCallCheck(this, Navigation);

        var _this = _possibleConstructorReturn(this, (Navigation.__proto__ || Object.getPrototypeOf(Navigation)).call(this, props));

        _this.state = {
            context: props.context
        };
        return _this;
    }

    _createClass(Navigation, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                { className: "navigation" },
                _react2.default.createElement(
                    "div",
                    { className: "container" },
                    _react2.default.createElement(
                        "div",
                        { className: "row" },
                        _react2.default.createElement(
                            "div",
                            { className: "col-md-12" },
                            _react2.default.createElement(
                                "div",
                                { id: "navigation" },
                                _react2.default.createElement(
                                    "ul",
                                    null,
                                    _react2.default.createElement(
                                        "li",
                                        { className: "active" },
                                        _react2.default.createElement(
                                            "a",
                                            { href: "index.html", title: "Home" },
                                            "Home"
                                        )
                                    ),
                                    _react2.default.createElement(
                                        "li",
                                        null,
                                        _react2.default.createElement(
                                            "a",
                                            { href: "about-us-1.html", title: "About us", className: "animsition-link" },
                                            "About"
                                        ),
                                        _react2.default.createElement(
                                            "ul",
                                            null,
                                            _react2.default.createElement(
                                                "li",
                                                null,
                                                _react2.default.createElement(
                                                    "a",
                                                    { href: "about-us-1.html", title: "About us v.1", className: "animsition-link" },
                                                    "About us v.1"
                                                )
                                            ),
                                            _react2.default.createElement(
                                                "li",
                                                null,
                                                _react2.default.createElement(
                                                    "a",
                                                    { href: "about-us-2.html", title: "About us v.2", className: "animsition-link" },
                                                    "About us v.2"
                                                )
                                            )
                                        )
                                    ),
                                    _react2.default.createElement(
                                        "li",
                                        null,
                                        _react2.default.createElement(
                                            "a",
                                            { href: "service-listing-image.html", title: "Service", className: "animsition-link" },
                                            "Our Service"
                                        ),
                                        _react2.default.createElement(
                                            "ul",
                                            null,
                                            _react2.default.createElement(
                                                "li",
                                                null,
                                                _react2.default.createElement(
                                                    "a",
                                                    { href: "service-listing-image.html", title: "Service With Image", className: "animsition-link" },
                                                    "Service With Image"
                                                )
                                            ),
                                            _react2.default.createElement(
                                                "li",
                                                null,
                                                _react2.default.createElement(
                                                    "a",
                                                    { href: "service-home-health-care.html", title: "Home Health Care", className: "animsition-link" },
                                                    "Home Health Care "
                                                )
                                            ),
                                            _react2.default.createElement(
                                                "li",
                                                null,
                                                _react2.default.createElement(
                                                    "a",
                                                    { href: "service-pediatric-care.html", title: "Pediatric Care", className: "animsition-link" },
                                                    "Pediatric Care "
                                                )
                                            ),
                                            _react2.default.createElement(
                                                "li",
                                                null,
                                                _react2.default.createElement(
                                                    "a",
                                                    { href: "service-companion-care.html", title: "Companion Care", className: "animsition-link" },
                                                    "Companion Care "
                                                )
                                            ),
                                            _react2.default.createElement(
                                                "li",
                                                null,
                                                _react2.default.createElement(
                                                    "a",
                                                    { href: "service-condition.html", title: "Condition Treatment", className: "animsition-link" },
                                                    "Condition Treatment "
                                                )
                                            )
                                        )
                                    ),
                                    _react2.default.createElement(
                                        "li",
                                        null,
                                        _react2.default.createElement(
                                            "a",
                                            { href: "#", title: "Feature" },
                                            "Features"
                                        ),
                                        _react2.default.createElement(
                                            "ul",
                                            null,
                                            _react2.default.createElement(
                                                "li",
                                                null,
                                                _react2.default.createElement(
                                                    "a",
                                                    { href: "career-list.html", title: "Career", className: "animsition-link" },
                                                    "Career"
                                                ),
                                                _react2.default.createElement(
                                                    "ul",
                                                    null,
                                                    _react2.default.createElement(
                                                        "li",
                                                        null,
                                                        _react2.default.createElement(
                                                            "a",
                                                            { href: "career-list.html", title: "Career List", className: "animsition-link" },
                                                            "Career List"
                                                        )
                                                    ),
                                                    _react2.default.createElement(
                                                        "li",
                                                        null,
                                                        _react2.default.createElement(
                                                            "a",
                                                            { href: "career-details.html", title: "Career Detail", className: "animsition-link" },
                                                            "career Detail"
                                                        )
                                                    )
                                                )
                                            ),
                                            _react2.default.createElement(
                                                "li",
                                                null,
                                                _react2.default.createElement(
                                                    "a",
                                                    { href: "fees.html", title: "Fees", className: "animsition-link" },
                                                    "Fees"
                                                )
                                            ),
                                            _react2.default.createElement(
                                                "li",
                                                null,
                                                _react2.default.createElement(
                                                    "a",
                                                    { href: "faq.html", title: "FAQs", className: "animsition-link" },
                                                    "FAQ's"
                                                )
                                            ),
                                            _react2.default.createElement(
                                                "li",
                                                null,
                                                _react2.default.createElement(
                                                    "a",
                                                    { href: "partner.html", title: "Partner", className: "animsition-link" },
                                                    "Partner"
                                                )
                                            ),
                                            _react2.default.createElement(
                                                "li",
                                                null,
                                                _react2.default.createElement(
                                                    "a",
                                                    { href: "testimonials.html", title: "Testimonials", className: "animsition-link" },
                                                    "Testimonials"
                                                )
                                            ),
                                            _react2.default.createElement(
                                                "li",
                                                null,
                                                _react2.default.createElement(
                                                    "a",
                                                    { href: "error-page.html", title: "404 Error", className: "animsition-link" },
                                                    "404 error"
                                                )
                                            ),
                                            _react2.default.createElement(
                                                "li",
                                                null,
                                                _react2.default.createElement(
                                                    "a",
                                                    { href: "#", title: "Shortcodes", className: "animsition-link" },
                                                    "Shortcodes"
                                                ),
                                                _react2.default.createElement(
                                                    "ul",
                                                    null,
                                                    _react2.default.createElement(
                                                        "li",
                                                        null,
                                                        _react2.default.createElement(
                                                            "a",
                                                            { href: "shortcodes-accordion.html", title: "Shortcodes Accordion", className: "animsition-link" },
                                                            "Shortcodes Accordion"
                                                        )
                                                    ),
                                                    _react2.default.createElement(
                                                        "li",
                                                        null,
                                                        _react2.default.createElement(
                                                            "a",
                                                            { href: "shortcodes-tabs.html", title: "Shortcodes Tabs", className: "animsition-link" },
                                                            "Shortcodes Tabs"
                                                        )
                                                    ),
                                                    _react2.default.createElement(
                                                        "li",
                                                        null,
                                                        _react2.default.createElement(
                                                            "a",
                                                            { href: "shortcodes-alerts.html", title: "Shortcodes Alerts", className: "animsition-link" },
                                                            "Shortcodes Alerts"
                                                        )
                                                    ),
                                                    _react2.default.createElement(
                                                        "li",
                                                        null,
                                                        _react2.default.createElement(
                                                            "a",
                                                            { href: "shortcodes-columns.html", title: "Shortcodes Columns", className: "animsition-link" },
                                                            "Shortcodes Columns"
                                                        )
                                                    ),
                                                    _react2.default.createElement(
                                                        "li",
                                                        null,
                                                        _react2.default.createElement(
                                                            "a",
                                                            { href: "shortcodes-buttons.html", title: "Shortcodes Buttons", className: "animsition-link" },
                                                            "Shortcodes Buttons"
                                                        )
                                                    )
                                                )
                                            )
                                        )
                                    ),
                                    _react2.default.createElement(
                                        "li",
                                        null,
                                        _react2.default.createElement(
                                            "a",
                                            { href: "contact-us.html", title: "Contact Us", className: "animsition-link" },
                                            "Contact us"
                                        ),
                                        _react2.default.createElement(
                                            "ul",
                                            null,
                                            _react2.default.createElement(
                                                "li",
                                                null,
                                                _react2.default.createElement(
                                                    "a",
                                                    { href: "contact-us.html", title: "Contact Us", className: "animsition-link" },
                                                    "Contact Us"
                                                )
                                            ),
                                            _react2.default.createElement(
                                                "li",
                                                null,
                                                _react2.default.createElement(
                                                    "a",
                                                    { href: "location.html", title: "Location", className: "animsition-link" },
                                                    "Location"
                                                )
                                            )
                                        )
                                    )
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Navigation;
}(_react2.default.PureComponent);

exports.default = Navigation;

/***/ }),

/***/ 65:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Slider = function (_React$PureComponent) {
  _inherits(Slider, _React$PureComponent);

  function Slider(props) {
    _classCallCheck(this, Slider);

    return _possibleConstructorReturn(this, (Slider.__proto__ || Object.getPrototypeOf(Slider)).call(this, props));
  }

  _createClass(Slider, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "slider" },
        _react2.default.createElement(
          "div",
          null,
          _react2.default.createElement(
            "div",
            { className: "slider-img" },
            _react2.default.createElement("img", { src: "./images/slider-1.jpg", alt: "", className: "" })
          ),
          _react2.default.createElement(
            "div",
            { className: "container" },
            _react2.default.createElement(
              "div",
              { className: "row" },
              _react2.default.createElement(
                "div",
                { className: "slider-captions" },
                _react2.default.createElement(
                  "h1",
                  { className: "slider-title" },
                  "Quality training leads to ",
                  _react2.default.createElement(
                    "strong",
                    null,
                    " excellence & skilled"
                  ),
                  " in caregiving"
                ),
                _react2.default.createElement(
                  "p",
                  { className: "slider-text" },
                  "Healthcare staff are carefully selected to ensure that clients only receive the most professional, skilled care."
                ),
                _react2.default.createElement(
                  "a",
                  { href: "service-listing-image.html", className: "btn btn-primary btn-lg" },
                  "View Service"
                ),
                " "
              )
            )
          )
        ),
        _react2.default.createElement(
          "div",
          null,
          _react2.default.createElement(
            "div",
            { className: "slider-img" },
            _react2.default.createElement("img", { src: "./images/slider-2.jpg", alt: "", className: "" })
          ),
          _react2.default.createElement(
            "div",
            { className: "container" },
            _react2.default.createElement(
              "div",
              { className: "row" },
              _react2.default.createElement(
                "div",
                { className: "slider-captions" },
                _react2.default.createElement(
                  "h1",
                  { className: "slider-title" },
                  "Healthcare is the best in-home ",
                  _react2.default.createElement(
                    "strong",
                    null,
                    "care for seniors"
                  ),
                  " & ",
                  _react2.default.createElement(
                    "strong",
                    null,
                    "disabled adults"
                  )
                ),
                _react2.default.createElement(
                  "p",
                  { className: "slider-text" },
                  "Healthcare offers quality for the elderly and people of all ages to give you the peace of mind you need."
                ),
                _react2.default.createElement(
                  "a",
                  { href: "location.html", className: "btn btn-primary btn-lg" },
                  "Find Locations"
                ),
                " "
              )
            )
          )
        ),
        _react2.default.createElement(
          "div",
          null,
          _react2.default.createElement(
            "div",
            { className: "slider-img" },
            _react2.default.createElement("img", { src: "./images/slider-3.jpg", alt: "", className: "" })
          ),
          _react2.default.createElement(
            "div",
            { className: "container" },
            _react2.default.createElement(
              "div",
              { className: "row" },
              _react2.default.createElement(
                "div",
                { className: "slider-captions" },
                _react2.default.createElement(
                  "h1",
                  { className: "slider-title" },
                  "Providing Health Care Service for ",
                  _react2.default.createElement(
                    "strong",
                    null,
                    "Adults, Seniors & Children"
                  )
                ),
                _react2.default.createElement(
                  "p",
                  { className: "slider-text" },
                  "Healthcare Services has established itself as one of the most experienced homecare companies in the industry."
                ),
                _react2.default.createElement(
                  "a",
                  { href: "repair-team.html", className: "btn btn-default btn-lg" },
                  "Meet The Team"
                ),
                " "
              )
            )
          )
        )
      );
    }
  }]);

  return Slider;
}(_react2.default.PureComponent);

exports.default = Slider;

/***/ }),

/***/ 66:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SectionSpace = function (_React$PureComponent) {
    _inherits(SectionSpace, _React$PureComponent);

    function SectionSpace(props) {
        _classCallCheck(this, SectionSpace);

        return _possibleConstructorReturn(this, (SectionSpace.__proto__ || Object.getPrototypeOf(SectionSpace)).call(this, props));
    }

    _createClass(SectionSpace, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                { className: "section-space" },
                _react2.default.createElement(
                    "div",
                    { className: "container" },
                    _react2.default.createElement(
                        "div",
                        { className: "row" },
                        _react2.default.createElement(
                            "div",
                            { className: "col-md-offset-2 col-md-8 section-title text-center" },
                            _react2.default.createElement(
                                "h1",
                                null,
                                "About health care"
                            ),
                            _react2.default.createElement(
                                "p",
                                { className: "lead" },
                                "We help ",
                                _react2.default.createElement(
                                    "strong",
                                    null,
                                    "child, adults, seniors "
                                ),
                                "and the disabled with all activities of daily living right from dressing."
                            )
                        )
                    )
                )
            );
        }
    }]);

    return SectionSpace;
}(_react2.default.PureComponent);

exports.default = SectionSpace;

/***/ }),

/***/ 67:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Services = function (_React$PureComponent) {
  _inherits(Services, _React$PureComponent);

  function Services(props) {
    _classCallCheck(this, Services);

    return _possibleConstructorReturn(this, (Services.__proto__ || Object.getPrototypeOf(Services)).call(this, props));
  }

  _createClass(Services, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "section-space section-color" },
        _react2.default.createElement(
          "div",
          { className: "container" },
          _react2.default.createElement(
            "div",
            { className: "row" },
            _react2.default.createElement(
              "div",
              { className: "col-md-offset-2 col-md-8 section-title text-center" },
              _react2.default.createElement(
                "h1",
                null,
                "Health care services"
              ),
              _react2.default.createElement(
                "p",
                null,
                "We are one of the leading providers of domiciliary care and health care staffing services."
              )
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "row" },
            _react2.default.createElement(
              "div",
              { className: "col-md-3 service-image-block" },
              _react2.default.createElement(
                "div",
                { className: "service-img" },
                " ",
                _react2.default.createElement(
                  "a",
                  { href: "service-home-health-care.html", title: "Home health care Service" },
                  " ",
                  _react2.default.createElement("img", { src: "images/service-1.jpg", alt: "", className: "img-responsive" })
                )
              ),
              _react2.default.createElement(
                "div",
                { className: "service-content" },
                _react2.default.createElement(
                  "h2",
                  null,
                  _react2.default.createElement(
                    "a",
                    { href: "service-home-health-care.html", className: "heading-title", title: "Service Title" },
                    "Home health care"
                  )
                ),
                _react2.default.createElement(
                  "p",
                  null,
                  "Patients realize that their illness restricts activity in their daily lives, making living alone too difficult."
                ),
                _react2.default.createElement(
                  "a",
                  { href: "service-home-health-care.html", className: "btn-link" },
                  "Read more"
                ),
                " "
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "col-md-3 service-image-block" },
              _react2.default.createElement(
                "div",
                { className: "service-img" },
                " ",
                _react2.default.createElement(
                  "a",
                  { href: "service-pediatric-care.html", title: "Pediatric Care Service" },
                  " ",
                  _react2.default.createElement("img", { src: "images/service-2.jpg", alt: "", className: "img-responsive" })
                )
              ),
              _react2.default.createElement(
                "div",
                { className: "service-content" },
                _react2.default.createElement(
                  "h2",
                  null,
                  _react2.default.createElement(
                    "a",
                    { href: "service-pediatric-care.html", className: "heading-title", title: "Service Title" },
                    "Pediatric care"
                  )
                ),
                _react2.default.createElement(
                  "p",
                  null,
                  "Children receive the necessary assistance they need at home to have a safe, healthy, and happy childhood."
                ),
                _react2.default.createElement(
                  "a",
                  { href: "service-pediatric-care.html", className: "btn-link" },
                  "Read more"
                ),
                " "
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "col-md-3 service-image-block" },
              _react2.default.createElement(
                "div",
                { className: "service-img" },
                " ",
                _react2.default.createElement(
                  "a",
                  { href: "service-companion-care.html", title: "Companion care Service" },
                  " ",
                  _react2.default.createElement("img", { src: "images/service-3.jpg", alt: "", className: "img-responsive" })
                )
              ),
              _react2.default.createElement(
                "div",
                { className: "service-content" },
                _react2.default.createElement(
                  "h2",
                  null,
                  _react2.default.createElement(
                    "a",
                    { href: "service-companion-care.html", className: "heading-title", title: "Service Title" },
                    "Companion care"
                  )
                ),
                _react2.default.createElement(
                  "p",
                  null,
                  "Ensure your loved one receives the attention and care needed, while delivering the peace of mind."
                ),
                _react2.default.createElement(
                  "a",
                  { href: "service-companion-care", className: "btn-link" },
                  "Read more"
                ),
                " "
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "col-md-3 service-image-block" },
              _react2.default.createElement(
                "div",
                { className: "service-img" },
                " ",
                _react2.default.createElement(
                  "a",
                  { href: "service-conditions.html", title: "Conditions Treated Service" },
                  " ",
                  _react2.default.createElement("img", { src: "images/service-4.jpg", alt: "", className: "img-responsive" })
                )
              ),
              _react2.default.createElement(
                "div",
                { className: "service-content" },
                _react2.default.createElement(
                  "h2",
                  null,
                  _react2.default.createElement(
                    "a",
                    { href: "service-conditions.html", className: "heading-title", title: "Service Title" },
                    "Conditions treated"
                  )
                ),
                _react2.default.createElement(
                  "p",
                  null,
                  "Patients with a variety of conditions including disease, cancer, neurological and respiratory disorders and more. "
                ),
                _react2.default.createElement(
                  "a",
                  { href: "service-conditions.html", className: "btn-link" },
                  "Read more"
                ),
                " "
              )
            )
          )
        )
      );
    }
  }]);

  return Services;
}(_react2.default.PureComponent);

exports.default = Services;

/***/ }),

/***/ 68:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Footer = function (_React$Component) {
  _inherits(Footer, _React$Component);

  function Footer(props) {
    _classCallCheck(this, Footer);

    return _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).call(this, props));
  }

  _createClass(Footer, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "footer" },
        _react2.default.createElement(
          "div",
          { className: "container" },
          _react2.default.createElement(
            "div",
            { className: "row" },
            _react2.default.createElement(
              "div",
              { className: "col-md-2 footer-widget" },
              _react2.default.createElement(
                "h3",
                { className: "footer-widget-title" },
                "Quick links"
              ),
              _react2.default.createElement(
                "ul",
                { className: "listnone arrow" },
                _react2.default.createElement(
                  "li",
                  null,
                  _react2.default.createElement(
                    "a",
                    { href: "#" },
                    "Home"
                  )
                ),
                _react2.default.createElement(
                  "li",
                  null,
                  _react2.default.createElement(
                    "a",
                    { href: "#" },
                    "About us"
                  )
                ),
                _react2.default.createElement(
                  "li",
                  null,
                  _react2.default.createElement(
                    "a",
                    { href: "#" },
                    "Our services"
                  )
                ),
                _react2.default.createElement(
                  "li",
                  null,
                  _react2.default.createElement(
                    "a",
                    { href: "#" },
                    "FAQs"
                  )
                ),
                _react2.default.createElement(
                  "li",
                  null,
                  _react2.default.createElement(
                    "a",
                    { href: "#" },
                    "Contact us"
                  )
                )
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "col-md-4 footer-widget" },
              _react2.default.createElement(
                "h3",
                { className: "footer-widget-title" },
                "Contact us"
              ),
              _react2.default.createElement(
                "ul",
                { className: "listnone" },
                _react2.default.createElement(
                  "li",
                  null,
                  " 245 North Spruce Street, Redwood city, California 94061 "
                ),
                _react2.default.createElement(
                  "li",
                  null,
                  " Phone : 413-658-5373"
                ),
                _react2.default.createElement(
                  "li",
                  null,
                  " Email : info@healthcare.com"
                ),
                _react2.default.createElement(
                  "li",
                  null,
                  " We are available 24 hours 7 days a week "
                )
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "col-md-2 footer-widget" },
              _react2.default.createElement(
                "h3",
                { className: "footer-widget-title" },
                "Our Locations"
              ),
              _react2.default.createElement(
                "ul",
                { className: "listnone arrow" },
                _react2.default.createElement(
                  "li",
                  null,
                  _react2.default.createElement(
                    "a",
                    { href: "#" },
                    "Bapunagar"
                  )
                )
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "col-md-4 footer-widget" },
              _react2.default.createElement(
                "h3",
                { className: "footer-widget-title" },
                "About us"
              ),
              _react2.default.createElement(
                "p",
                null,
                "Health care is well established and trusted care provider providing care for the elderly since 2000. We have mulitiple location center.",
                _react2.default.createElement(
                  "a",
                  { href: "#", className: "btn-link" },
                  " View Location"
                ),
                " "
              ),
              _react2.default.createElement(
                "p",
                null,
                "Health care have comfortable relaxed interiors which are tastefully decorated to high standards."
              )
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "row footer-newsletter-section" },
            _react2.default.createElement(
              "div",
              { className: "col-md-8 footer-widget newsletter-widget" },
              _react2.default.createElement(
                "h3",
                { className: "footer-widget-title" },
                "Subscribe for newsletter"
              ),
              _react2.default.createElement(
                "form",
                { method: "post", action: "newsletter.php" },
                _react2.default.createElement(
                  "div",
                  { className: "row" },
                  _react2.default.createElement(
                    "div",
                    { className: "col-md-8" },
                    _react2.default.createElement(
                      "label",
                      { htmlFor: "newsletter", className: "sr-only" },
                      "Email address"
                    ),
                    _react2.default.createElement("input", { type: "email", name: "newsletter", className: "form-control", id: "newsletter", placeholder: "E-Mail Address", required: true })
                  ),
                  _react2.default.createElement(
                    "div",
                    { className: "col-md-4" },
                    _react2.default.createElement(
                      "button",
                      { type: "submit", className: "btn btn-primary btn-block" },
                      "Subscribe"
                    )
                  )
                )
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "col-md-4 footer-widget footer-social-widget" },
              _react2.default.createElement(
                "h3",
                { className: "footer-widget-title" },
                "Follow me"
              ),
              _react2.default.createElement(
                "ul",
                { className: "listnone" },
                _react2.default.createElement(
                  "li",
                  null,
                  _react2.default.createElement(
                    "a",
                    { href: "#" },
                    _react2.default.createElement("i", { className: "fa fa-facebook" })
                  )
                ),
                _react2.default.createElement(
                  "li",
                  null,
                  _react2.default.createElement(
                    "a",
                    { href: "#" },
                    _react2.default.createElement("i", { className: "fa fa-twitter" })
                  )
                ),
                _react2.default.createElement(
                  "li",
                  null,
                  _react2.default.createElement(
                    "a",
                    { href: "#" },
                    _react2.default.createElement("i", { className: "fa fa-linkedin-square" })
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Footer;
}(_react2.default.Component);

exports.default = Footer;

/***/ }),

/***/ 69:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TinyFooter = function (_React$Component) {
    _inherits(TinyFooter, _React$Component);

    function TinyFooter(props) {
        _classCallCheck(this, TinyFooter);

        return _possibleConstructorReturn(this, (TinyFooter.__proto__ || Object.getPrototypeOf(TinyFooter)).call(this, props));
    }

    _createClass(TinyFooter, [{
        key: "render",
        value: function render() {
            var children = this.props.children;

            return _react2.default.createElement(
                "div",
                { className: "tiny-footer" },
                _react2.default.createElement(
                    "div",
                    { className: "container" },
                    _react2.default.createElement(
                        "div",
                        { className: "row" },
                        _react2.default.createElement(
                            "div",
                            { className: "col-md-12" },
                            _react2.default.createElement(
                                "p",
                                { className: "copyright-text" },
                                children
                            )
                        )
                    )
                )
            );
        }
    }]);

    return TinyFooter;
}(_react2.default.Component);

exports.default = TinyFooter;

/***/ }),

/***/ 70:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _ComponentWithChildren = __webpack_require__(71);

var _ComponentWithChildren2 = _interopRequireDefault(_ComponentWithChildren);

var _ImageLink = __webpack_require__(57);

var _ImageLink2 = _interopRequireDefault(_ImageLink);

var _EmailLink = __webpack_require__(55);

var _EmailLink2 = _interopRequireDefault(_EmailLink);

var _TelephoneLink = __webpack_require__(56);

var _TelephoneLink2 = _interopRequireDefault(_TelephoneLink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_ComponentWithChildre) {
    _inherits(Header, _ComponentWithChildre);

    function Header(props) {
        _classCallCheck(this, Header);

        return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this, props));
    }

    _createClass(Header, [{
        key: 'render',
        value: function render() {
            var children = this.props.children;


            var telComponent = this.getChildOfType("TelephoneLink");
            var emailComponent = this.getChildOfType("EmailLink");
            var imageComponent = this.getChildOfType("ImageLink");
            return _react2.default.createElement(
                'div',
                { className: 'header' },
                _react2.default.createElement(
                    'div',
                    { className: 'container' },
                    _react2.default.createElement(
                        'div',
                        { className: 'row' },
                        _react2.default.createElement(
                            'div',
                            { className: 'col-md-4 header-logo' },
                            imageComponent
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'col-md-8 header-text' },
                            _react2.default.createElement(
                                'span',
                                { className: 'text-call' },
                                telComponent
                            ),
                            _react2.default.createElement(
                                'span',
                                { className: 'text-email' },
                                emailComponent
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Header;
}(_ComponentWithChildren2.default);

exports.default = Header;

/***/ }),

/***/ 71:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ComponentWithChildren = function (_React$PureComponent) {
    _inherits(ComponentWithChildren, _React$PureComponent);

    function ComponentWithChildren(props) {
        _classCallCheck(this, ComponentWithChildren);

        return _possibleConstructorReturn(this, (ComponentWithChildren.__proto__ || Object.getPrototypeOf(ComponentWithChildren)).call(this, props));
    }

    _createClass(ComponentWithChildren, [{
        key: "isChildTypeName",
        value: function isChildTypeName(element, typeName) {
            return element && element.type && element.type.name === typeName;
        }
    }, {
        key: "getChildOfType",
        value: function getChildOfType(typeName) {
            var _this2 = this;

            var children = this.props.children;

            if (children) {
                if (Array.isArray(children)) {
                    return children.find(function (child) {
                        return _this2.isChildTypeName(child, typeName);
                    });
                } else {
                    return this.isChildTypeName(children, typeName) ? children : "";
                }
            }
            return "";
        }
    }]);

    return ComponentWithChildren;
}(_react2.default.PureComponent);

exports.default = ComponentWithChildren;

/***/ })

},[53]);