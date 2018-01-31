webpackJsonp([1],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(62);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */
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

var Feature = function (_React$Component) {
    _inherits(Feature, _React$Component);

    function Feature(props) {
        _classCallCheck(this, Feature);

        return _possibleConstructorReturn(this, (Feature.__proto__ || Object.getPrototypeOf(Feature)).call(this, props));
    }

    _createClass(Feature, [{
        key: "render",
        value: function render() {
            var _props$feature = this.props.feature,
                title = _props$feature.title,
                children = _props$feature.children,
                icon = _props$feature.icon,
                iconSize = _props$feature.iconSize,
                description = _props$feature.description,
                blockSize = _props$feature.blockSize;

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
                        description
                    )
                )
            );
        }
    }]);

    return Feature;
}(_react2.default.Component);

exports.default = Feature;

/***/ }),
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(12);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _App = __webpack_require__(57);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render(_react2.default.createElement(_App2.default, null), document.getElementById('root'));

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _EmailLink = __webpack_require__(70);

var _EmailLink2 = _interopRequireDefault(_EmailLink);

var _PhoneLink = __webpack_require__(71);

var _PhoneLink2 = _interopRequireDefault(_PhoneLink);

var _Link = __webpack_require__(72);

var _Link2 = _interopRequireDefault(_Link);

var _About = __webpack_require__(58);

var _About2 = _interopRequireDefault(_About);

var _Header = __webpack_require__(63);

var _Header2 = _interopRequireDefault(_Header);

var _Navigation = __webpack_require__(67);

var _Navigation2 = _interopRequireDefault(_Navigation);

var _Footer = __webpack_require__(73);

var _Footer2 = _interopRequireDefault(_Footer);

var _Copyright = __webpack_require__(91);

var _Copyright2 = _interopRequireDefault(_Copyright);

var _Services = __webpack_require__(79);

var _Services2 = _interopRequireDefault(_Services);

var _Declaration = __webpack_require__(81);

var _Declaration2 = _interopRequireDefault(_Declaration);

var _Features = __webpack_require__(83);

var _Features2 = _interopRequireDefault(_Features);

var _Feature = __webpack_require__(24);

var _Feature2 = _interopRequireDefault(_Feature);

var _global = __webpack_require__(98);

var _global2 = _interopRequireDefault(_global);

var _benefits = __webpack_require__(96);

var _benefits2 = _interopRequireDefault(_benefits);

var _services = __webpack_require__(97);

var _services2 = _interopRequireDefault(_services);

var _declaration = __webpack_require__(99);

var _declaration2 = _interopRequireDefault(_declaration);

var _CallToAction = __webpack_require__(80);

var _CallToAction2 = _interopRequireDefault(_CallToAction);

var _Slider = __webpack_require__(82);

var _Slider2 = _interopRequireDefault(_Slider);

var _BackToTop = __webpack_require__(84);

var _BackToTop2 = _interopRequireDefault(_BackToTop);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// data


// styles
// reversable style

// TODO


var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App(props) {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

        context: props.context;
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
                    _react2.default.createElement(
                        _Link2.default,
                        { link: '/' },
                        _react2.default.createElement(
                            'h1',
                            null,
                            'BodyPoise'
                        ),
                        _react2.default.createElement(
                            'h2',
                            null,
                            _global2.default.strapline
                        )
                    ),
                    _react2.default.createElement(_EmailLink2.default, { email: _global2.default.email, subject: _global2.default.emailSubject }),
                    _react2.default.createElement(_PhoneLink2.default, { number: _global2.default.phone })
                ),
                _react2.default.createElement(_Navigation2.default, null),
                _react2.default.createElement(_Features2.default, { title: _services2.default.title,
                    description: _services2.default.description,
                    classes: 'section-color',
                    features: _services2.default.features }),
                _react2.default.createElement(_Declaration2.default, { heading: _declaration2.default.heading, text: _declaration2.default.text }),
                _react2.default.createElement(_Features2.default, { title: _benefits2.default.title,
                    description: _benefits2.default.description,
                    classes: 'section-color',
                    features: _benefits2.default.features }),
                _react2.default.createElement(
                    _CallToAction2.default,
                    { link: "mailto:" + _global2.default.email, buttonText: 'Email' },
                    _global2.default.callToAction,
                    ' Ring on ',
                    _react2.default.createElement(_PhoneLink2.default, { number: _global2.default.phone }),
                    ' or'
                ),
                _react2.default.createElement(_Footer2.default, null),
                _react2.default.createElement(
                    _Copyright2.default,
                    null,
                    _global2.default.copyright
                ),
                _react2.default.createElement(_BackToTop2.default, null)
            );
        }
    }]);

    return App;
}(_react2.default.Component);

exports.default = App;

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _AboutBlock = __webpack_require__(59);

var _AboutBlock2 = _interopRequireDefault(_AboutBlock);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var About = function (_React$PureComponent) {
    _inherits(About, _React$PureComponent);

    function About(props) {
        _classCallCheck(this, About);

        return _possibleConstructorReturn(this, (About.__proto__ || Object.getPrototypeOf(About)).call(this, props));
    }

    _createClass(About, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'bdr-top' },
                _react2.default.createElement(
                    'div',
                    { className: 'container' },
                    _react2.default.createElement(
                        'div',
                        { className: 'row' },
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
                    )
                )
            );
        }
    }]);

    return About;
}(_react2.default.PureComponent);

exports.default = About;

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(60);

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
        key: 'render',
        value: function render() {
            var _props = this.props,
                title = _props.title,
                children = _props.children,
                link = _props.link,
                linkText = _props.linkText;

            return _react2.default.createElement(
                'div',
                { className: 'col-md-6 about-block' },
                _react2.default.createElement(
                    'h2',
                    null,
                    title
                ),
                _react2.default.createElement(
                    'p',
                    null,
                    children
                ),
                _react2.default.createElement(
                    'a',
                    { href: link, className: 'btn btn-secondary' },
                    linkText
                )
            );
        }
    }]);

    return AboutBlock;
}(_react2.default.PureComponent);

exports.default = AboutBlock;

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(61);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(5)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../../node_modules/css-loader/index.js!./about.css", function() {
		var newContent = require("!!../../../node_modules/css-loader/index.js!./about.css");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, ".about-block{padding: 100px 60px; text-align: center;}\n\n", ""]);

// exports


/***/ }),
/* 62 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _ComponentWithChildren = __webpack_require__(64);

var _ComponentWithChildren2 = _interopRequireDefault(_ComponentWithChildren);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

__webpack_require__(65);

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


            var telComponent = this.getChildOfType("PhoneLink");
            var emailComponent = this.getChildOfType("EmailLink");
            var imageComponent = this.getChildOfType("ImageLink");
            var text = this.getChildOfType("Link");
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
                            imageComponent,
                            ' ',
                            text
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
/* 64 */
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

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(66);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(5)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../../node_modules/css-loader/index.js!./header.css", function() {
		var newContent = require("!!../../../node_modules/css-loader/index.js!./header.css");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, ".header{padding-top: 40px; padding-bottom: 40px;color: #1f7b76;}\n.header-logo h1{\n    padding-top: 14px;\n    color: #1f7b76; \n}\n.header-text{\n    padding-top: 14px;\n    font-size: 14px;\n    font-weight: 600;text-align: right;\n}\n\n.text-call, .text-email, .text-hours{padding-right: 20px;}\n\n.text-call{}\n.text-email{}\n.text-hours{}\n\n@media only screen and (max-width: 768px) {\n\t.header{padding-top: 20px; padding-bottom: 20px;}\n\t .header-logo{text-align: center;margin-bottom: 10px;}\n\t .text-hours{display: none;}\n}\n", ""]);

// exports


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(68);

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
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'navigation' },
                _react2.default.createElement(
                    'div',
                    { className: 'container' },
                    _react2.default.createElement(
                        'div',
                        { className: 'row' },
                        _react2.default.createElement(
                            'div',
                            { className: 'col-md-12' },
                            _react2.default.createElement(
                                'div',
                                { id: 'navigation' },
                                _react2.default.createElement('ul', null)
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
/* 68 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(69);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(5)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../../node_modules/css-loader/index.js!./navigation.css", function() {
		var newContent = require("!!../../../node_modules/css-loader/index.js!./navigation.css");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, ".navigation{background-color: #1f7b76;border-bottom: 4px solid #74b281; position: relative;z-index: 9;}\n#navigation,\n#navigation ul,\n#navigation ul li,\n#navigation ul li a,\n#navigation #menu-button {margin: 0; padding: 0; border: 0; list-style: none; line-height: 1; display: block;\n  position: relative; -webkit-box-sizing: border-box; -moz-box-sizing: border-box; box-sizing: border-box;}\n#navigation:after,\n#navigation > ul:after {content: \".\"; display: block; clear: both; visibility: hidden; line-height: 0; height: 0;}\n#navigation #menu-button {display: none;}\n#navigation {}\n#navigation > ul > li {float: left;}\n#navigation.align-center > ul {font-size: 0; text-align: center;}\n#navigation.align-center > ul > li {display: inline-block; float: none;}\n#navigation.align-center ul ul {text-align: left;}\n#navigation.align-right > ul > li {float: right;}\n#navigation > ul > li > a {padding: 20px 10px 20px 30px; font-size: 13px; letter-spacing: 1px; text-decoration: none;\n  color: #b5d1cf; font-weight: 600; text-transform: uppercase; border-left: 1px solid #186d68; \n  border-right: 1px solid #186d68; margin-right: -1px;}\n#navigation > ul > li:hover > a {color: #ffffff;background-color: #74b281;}\n#navigation > ul > li.active > a {background-color: #74b281; color: #ffffff;}\n#navigation > ul > li.has-sub > a {padding-right: 50px;}\n#navigation > ul > li.has-sub > a:after {position: absolute; top: 19px; right: 30px; display: block; content: '\\F107';\n  font: normal normal normal 14px/1 FontAwesome;}\n/*#navigation > ul > li.has-sub > a:before {position: absolute; top: 21px; right: 33px; display: block; width: 2px;\n  height: 8px; background: #dddddd; content: ''; -webkit-transition: all .25s ease; -moz-transition: all .25s ease;\n  -ms-transition: all .25s ease; -o-transition: all .25s ease; transition: all .25s ease;}*/\n#navigation > ul > li.has-sub:hover > a:before {top: 23px; height: 0;}\n#navigation ul ul {position: absolute; left: -9999px;} \n#navigation.align-right ul ul {text-align: right;}\n#navigation ul ul li {height: 0; -webkit-transition: all .25s ease; -moz-transition: all .25s ease; \n  -ms-transition: all .25s ease; -o-transition: all .25s ease; transition: all .25s ease; }\n#navigation li:hover > ul {left: auto; }\n#navigation.align-right li:hover > ul {left: auto; right: 0; }\n#navigation li:hover > ul > li {height: 51px;}\n#navigation ul ul ul {margin-left: 100%; top: 0;}\n#navigation.align-right ul ul ul {margin-left: 0; margin-right: 100%; }\n#navigation ul ul li a {padding: 18px 15px; width: 220px; font-size: 14px; text-decoration: none; color: #bee4c6;\n  font-weight: 500; background: #74b281; border-bottom: 1px solid #549661; }\n#navigation ul ul li:last-child > a, #navigation ul ul li.last-item > a {border-bottom: 0;}\n#navigation ul ul li:hover > a, #navigation ul ul li a:hover {color: #ffffff;}\n#navigation ul ul li.has-sub > a:after {position: absolute; top: 16px; right: 11px; width: 8px; height: 2px; display: block;\n  content: '\\F105'; font: normal normal normal 14px/1 FontAwesome;}\n#navigation.align-right ul ul li.has-sub > a:after {right: auto; left: 11px;}\n/*#navigation ul ul li.has-sub > a:before {position: absolute; top: 13px; right: 14px; display: block; width: 2px;\n  height: 8px; background: #dddddd; content: ''; -webkit-transition: all .25s ease; -moz-transition: all .25s ease;\n  -ms-transition: all .25s ease; -o-transition: all .25s ease; transition: all .25s ease; }*/\n#navigation.align-right ul ul li.has-sub > a:before {right: auto; left: 14px;}\n#navigation ul ul > li.has-sub:hover > a:before {top: 17px; height: 0;}\n@media all and (max-width: 768px), only screen and (-webkit-min-device-pixel-ratio: 2) \nand (max-width: 1024px), only screen and (min--moz-device-pixel-ratio: 2) and (max-width: 1024px), only screen \nand (-o-min-device-pixel-ratio: 2/1) and (max-width: 1024px), only screen and (min-device-pixel-ratio: 2) \nand (max-width: 1024px), only screen and (min-resolution: 192dpi) and (max-width: 1024px), only screen \nand (min-resolution: 2dppx) and (max-width: 1024px) {\n  #navigation {width: 100%;}\n  #navigation ul {width: 100%; display: none;}\n  #navigation.align-center > ul {text-align: left;}\n  #navigation ul li {width: 100%; border-top: 1px solid #186d68;}\n  #navigation ul ul li, #navigation li:hover > ul > li {height: auto;}\n  #navigation ul li a, #navigation ul ul li a {width: 100%; border-bottom: 0;}\n  #navigation > ul > li {float: none;}\n  #navigation ul ul li a {padding-left: 55px;}\n  #navigation ul ul ul li a {padding-left: 35px;}\n  #navigation ul ul li a {color: #dddddd; background: none;}\n  #navigation ul ul li:hover > a, #navigation ul ul li.active > a {color: #ffffff;}\n  #navigation ul ul, #navigation ul ul ul, #navigation.align-right ul ul {position: relative; left: 0; width: 100%;\n    margin: 0; text-align: left;}\n  #navigation > ul > li.has-sub > a:after, #navigation > ul > li.has-sub > a:before, #navigation ul ul > li.has-sub > a:after,\n  #navigation ul ul > li.has-sub > a:before {display: none;}\n  #navigation #menu-button {display: block; padding: 17px; color: #83bc90; cursor: pointer; font-size: 12px; \n    text-transform: uppercase; font-weight: 700;}\n  #navigation #menu-button:after {\n    position: absolute;\n    top: 22px;\n    right: 17px;\n    display: block;\n    height: 8px;\n    width: 20px;\n    border-top: 2px solid #83bc90;\n    border-bottom: 2px solid #83bc90;\n    content: '';\n  }\n  #navigation #menu-button:before {\n    position: absolute;\n    top: 16px;\n    right: 17px;\n    display: block;\n    height: 2px;\n    width: 20px;\n    background: #83bc90;\n    content: '';\n  }\n  #navigation #menu-button.menu-opened:after {\n    top: 23px;\n    border: 0;\n    height: 2px;\n    width: 15px;\n    background: #ffffff;\n    -webkit-transform: rotate(45deg);\n    -moz-transform: rotate(45deg);\n    -ms-transform: rotate(45deg);\n    -o-transform: rotate(45deg);\n    transform: rotate(45deg);\n  }\n  #navigation #menu-button.menu-opened:before {\n    top: 23px;\n    background: #ffffff;\n    width: 15px;\n    -webkit-transform: rotate(-45deg);\n    -moz-transform: rotate(-45deg);\n    -ms-transform: rotate(-45deg);\n    -o-transform: rotate(-45deg);\n    transform: rotate(-45deg);\n  }\n  #navigation .submenu-button {\n    position: absolute;\n    z-index: 99;\n    right: 0;\n    top: 0;\n    display: block;\n    border-left: 1px solid #186d68;\n    height: 53px;\n    width: 53px;\n    cursor: pointer;\n  }\n  #navigation .submenu-button.submenu-opened {\n    background: #186d68;\n  }\n  #navigation ul ul .submenu-button {\n    height: 34px;\n    width: 34px;\n  }\n  #navigation .submenu-button:after {\n    position: absolute;\n    top: 25px;\n    right: 22px;\n    width: 8px;\n    height: 2px;\n    display: block;\n    background: #dddddd;\n    content: '';\n  }\n  #navigation ul ul .submenu-button:after {\n    top: 15px;\n    right: 13px;\n  }\n  #navigation .submenu-button.submenu-opened:after {\n    background: #ffffff;\n  }\n  #navigation .submenu-button:before {\n    position: absolute;\n    top: 22px;\n    right: 25px;\n    display: block;\n    width: 2px;\n    height: 8px;\n    background: #dddddd;\n    content: '';\n  }\n  #navigation ul ul .submenu-button:before {\n    top: 12px;\n    right: 16px;\n  }\n  #navigation .submenu-button.submenu-opened:before {\n    display: none;\n  }\n}\n\n@media only screen and (max-width: 768px) {\n    #navigation > ul > li > a {\n        padding: 20px 10px 20px 30px;\n    }\n   font-size: 13px;\n   letter-spacing: 1px;\n   text-decoration: none;\n   color: #b5d1cf;\n   font-weight: 600;\n   text-transform: uppercase;\n   border-left: 1px solid transparent;\n   border-right: 1px solid transparent;\n   margin-right: -1px;\n}", ""]);

// exports


/***/ }),
/* 70 */
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
/* 71 */
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

var PhoneLink = function (_React$Component) {
    _inherits(PhoneLink, _React$Component);

    function PhoneLink(props) {
        _classCallCheck(this, PhoneLink);

        return _possibleConstructorReturn(this, (PhoneLink.__proto__ || Object.getPrototypeOf(PhoneLink)).call(this, props));
    }

    _createClass(PhoneLink, [{
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

    return PhoneLink;
}(_react2.default.Component);

exports.default = PhoneLink;

/***/ }),
/* 72 */
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

var Link = function (_React$Component) {
    _inherits(Link, _React$Component);

    function Link(props) {
        _classCallCheck(this, Link);

        return _possibleConstructorReturn(this, (Link.__proto__ || Object.getPrototypeOf(Link)).call(this, props));
    }

    _createClass(Link, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                link = _props.link,
                children = _props.children;

            return _react2.default.createElement(
                'a',
                { href: link },
                children
            );
        }
    }]);

    return Link;
}(_react2.default.Component);

exports.default = Link;

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(74);

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
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'footer' },
        _react2.default.createElement(
          'div',
          { className: 'container' },
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement('div', { className: 'col-md-2 footer-widget' }),
            _react2.default.createElement('div', { className: 'col-md-4 footer-widget' }),
            _react2.default.createElement('div', { className: 'col-md-2 footer-widget' }),
            _react2.default.createElement('div', { className: 'col-md-4 footer-widget' })
          )
        )
      );
    }
  }]);

  return Footer;
}(_react2.default.Component);

exports.default = Footer;

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(75);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(5)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../../node_modules/css-loader/index.js!./footer.css", function() {
		var newContent = require("!!../../../node_modules/css-loader/index.js!./footer.css");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, "/*---------------- footer ---------------*/\n.footer{background-color: #2f3330;padding-top: 80px; padding-bottom: 80px; color: #6a716c;}\n.footer-widget{}\n.footer-widget-title{color: #bfc4c0;}\n.footer-widget ul{}\n.footer-widget ul li{margin-bottom: 10px;}\n.footer-widget ul li a{color: #6a716c;}\n.footer-widget ul li a:hover{color: #6ca578;}\n.footer-newsletter-section{margin-top: 60px;}\n.newsletter-widget{}\n.newsletter-widget .form-control{background-color: #383c39; border-color: #383c39;}\n.newsletter-widget .form-control:focus {border-color: #282c29; outline: 0;\n\t-webkit-box-shadow: inset 0 0px 0px rgba(0,0,0,.075), 0 0 2px rgba(0,0,0,.6);\n\tbox-shadow: inset 0 0px 0px rgba(0,0,0,.075), 0 0 2px rgba(0,0,0,.6);}\n.footer-social-widget {}\n.footer-social-widget ul{}\n.footer-social-widget ul li{float: left; margin-right: 10px;}\n.footer-social-widget  ul li a {background-color: #383c39; padding: 16px 18px; border-radius: 4px; color: #6a716c;\n\tdisplay: inline-block; line-height: 0;}\n.footer-social-widget ul li a:hover {background-color: #74b281;   border-radius: 4px; color: #fff;}\n", ""]);

// exports


/***/ }),
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(89);

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
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'section-space section-color' },
        _react2.default.createElement(
          'div',
          { className: 'container' },
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
              'div',
              { className: 'col-md-offset-2 col-md-8 section-title text-center' },
              _react2.default.createElement(
                'h1',
                null,
                'Health care services'
              ),
              _react2.default.createElement(
                'p',
                null,
                'We are one of the leading providers of domiciliary care and health care staffing services.'
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
              'div',
              { className: 'col-md-3 service-image-block' },
              _react2.default.createElement(
                'div',
                { className: 'service-img' },
                ' ',
                _react2.default.createElement(
                  'a',
                  { href: 'service-home-health-care.html', title: 'Home health care Service' },
                  ' ',
                  _react2.default.createElement('img', { src: 'images/service-1.jpg', alt: '', className: 'img-responsive' })
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'service-content' },
                _react2.default.createElement(
                  'h2',
                  null,
                  _react2.default.createElement(
                    'a',
                    { href: 'service-home-health-care.html', className: 'heading-title', title: 'Service Title' },
                    'Home health care'
                  )
                ),
                _react2.default.createElement(
                  'p',
                  null,
                  'Patients realize that their illness restricts activity in their daily lives, making living alone too difficult.'
                ),
                _react2.default.createElement(
                  'a',
                  { href: 'service-home-health-care.html', className: 'btn-link' },
                  'Read more'
                ),
                ' '
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'col-md-3 service-image-block' },
              _react2.default.createElement(
                'div',
                { className: 'service-img' },
                ' ',
                _react2.default.createElement(
                  'a',
                  { href: 'service-pediatric-care.html', title: 'Pediatric Care Service' },
                  ' ',
                  _react2.default.createElement('img', { src: 'images/service-2.jpg', alt: '', className: 'img-responsive' })
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'service-content' },
                _react2.default.createElement(
                  'h2',
                  null,
                  _react2.default.createElement(
                    'a',
                    { href: 'service-pediatric-care.html', className: 'heading-title', title: 'Service Title' },
                    'Pediatric care'
                  )
                ),
                _react2.default.createElement(
                  'p',
                  null,
                  'Children receive the necessary assistance they need at home to have a safe, healthy, and happy childhood.'
                ),
                _react2.default.createElement(
                  'a',
                  { href: 'service-pediatric-care.html', className: 'btn-link' },
                  'Read more'
                ),
                ' '
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'col-md-3 service-image-block' },
              _react2.default.createElement(
                'div',
                { className: 'service-img' },
                ' ',
                _react2.default.createElement(
                  'a',
                  { href: 'service-companion-care.html', title: 'Companion care Service' },
                  ' ',
                  _react2.default.createElement('img', { src: 'images/service-3.jpg', alt: '', className: 'img-responsive' })
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'service-content' },
                _react2.default.createElement(
                  'h2',
                  null,
                  _react2.default.createElement(
                    'a',
                    { href: 'service-companion-care.html', className: 'heading-title', title: 'Service Title' },
                    'Companion care'
                  )
                ),
                _react2.default.createElement(
                  'p',
                  null,
                  'Ensure your loved one receives the attention and care needed, while delivering the peace of mind.'
                ),
                _react2.default.createElement(
                  'a',
                  { href: 'service-companion-care', className: 'btn-link' },
                  'Read more'
                ),
                ' '
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'col-md-3 service-image-block' },
              _react2.default.createElement(
                'div',
                { className: 'service-img' },
                ' ',
                _react2.default.createElement(
                  'a',
                  { href: 'service-conditions.html', title: 'Conditions Treated Service' },
                  ' ',
                  _react2.default.createElement('img', { src: 'images/service-4.jpg', alt: '', className: 'img-responsive' })
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'service-content' },
                _react2.default.createElement(
                  'h2',
                  null,
                  _react2.default.createElement(
                    'a',
                    { href: 'service-conditions.html', className: 'heading-title', title: 'Service Title' },
                    'Conditions treated'
                  )
                ),
                _react2.default.createElement(
                  'p',
                  null,
                  'Patients with a variety of conditions including disease, cancer, neurological and respiratory disorders and more. '
                ),
                _react2.default.createElement(
                  'a',
                  { href: 'service-conditions.html', className: 'btn-link' },
                  'Read more'
                ),
                ' '
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
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(87);

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
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          link = _props.link,
          buttonText = _props.buttonText;

      return _react2.default.createElement(
        'div',
        { className: 'section-default-bg section-space-40 cta-section' },
        _react2.default.createElement(
          'div',
          { className: 'container' },
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
              'div',
              { className: 'col-md-10 cta-title' },
              _react2.default.createElement(
                'h2',
                { className: 'heading-title-white' },
                children
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'col-md-2' },
              _react2.default.createElement(
                'a',
                { href: link, className: 'btn btn-secondary btn-block' },
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
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(85);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Declaration = function (_React$PureComponent) {
    _inherits(Declaration, _React$PureComponent);

    function Declaration(props) {
        _classCallCheck(this, Declaration);

        return _possibleConstructorReturn(this, (Declaration.__proto__ || Object.getPrototypeOf(Declaration)).call(this, props));
    }

    _createClass(Declaration, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                heading = _props.heading,
                text = _props.text;

            return _react2.default.createElement(
                'div',
                { className: 'section-space' },
                _react2.default.createElement(
                    'div',
                    { className: 'container' },
                    _react2.default.createElement(
                        'div',
                        { className: 'row' },
                        _react2.default.createElement(
                            'div',
                            { className: 'col-md-offset-2 col-md-8 section-title text-center' },
                            _react2.default.createElement(
                                'h1',
                                null,
                                heading
                            ),
                            _react2.default.createElement(
                                'p',
                                { className: 'lead' },
                                text
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Declaration;
}(_react2.default.PureComponent);

exports.default = Declaration;

/***/ }),
/* 82 */
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
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Feature = __webpack_require__(24);

var _Feature2 = _interopRequireDefault(_Feature);

__webpack_require__(94);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Features = function (_React$Component) {
    _inherits(Features, _React$Component);

    function Features(props) {
        _classCallCheck(this, Features);

        return _possibleConstructorReturn(this, (Features.__proto__ || Object.getPrototypeOf(Features)).call(this, props));
    }

    _createClass(Features, [{
        key: 'calculateChildSizes',
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
        key: 'render',
        value: function render() {
            var _props = this.props,
                title = _props.title,
                description = _props.description,
                classes = _props.classes,
                features = _props.features;

            var additionalProps = this.calculateChildSizes(features);

            var childrenWithSize = features.map(function (child) {
                return Object.assign({}, child, additionalProps);
            });
            var listClasses = "section-space " + (classes ? classes : "");
            return _react2.default.createElement(
                'div',
                { className: listClasses },
                _react2.default.createElement(
                    'div',
                    { className: 'container' },
                    _react2.default.createElement(
                        'div',
                        { className: 'row' },
                        _react2.default.createElement(
                            'div',
                            { className: 'col-md-offset-2 col-md-8 section-title text-center' },
                            _react2.default.createElement(
                                'h1',
                                null,
                                title
                            ),
                            _react2.default.createElement(
                                'p',
                                null,
                                description
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'row' },
                        childrenWithSize.map(function (feature) {
                            return _react2.default.createElement(_Feature2.default, { key: feature.id, feature: feature });
                        })
                    )
                )
            );
        }
    }]);

    return Features;
}(_react2.default.Component);

exports.default = Features;

/***/ }),
/* 84 */
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
/* 85 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(86);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(5)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../../node_modules/css-loader/index.js!./declaration.css", function() {
		var newContent = require("!!../../../node_modules/css-loader/index.js!./declaration.css");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, ".lead{font-size: 21px; line-height: 35px; font-weight: 400;}\n", ""]);

// exports


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(88);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(5)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../../node_modules/css-loader/index.js!./calltoaction.css", function() {
		var newContent = require("!!../../../node_modules/css-loader/index.js!./calltoaction.css");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, ".cta-outline{border:2px solid #e9eae4; padding: 30px; border-radius: 4px; }\n.cta-btn{text-align: center; margin-top: 25px;}\n", ""]);

// exports


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(90);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(5)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../../node_modules/css-loader/index.js!./service.css", function() {
		var newContent = require("!!../../../node_modules/css-loader/index.js!./service.css");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, ".service-image-block{}\n.service-img{margin-bottom: 30px;}\n.service-img img{opacity: .8;}\n.service-img img:hover{opacity: 1;}\n.service-content{}\n\n", ""]);

// exports


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(92);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Copyright = function (_React$Component) {
    _inherits(Copyright, _React$Component);

    function Copyright(props) {
        _classCallCheck(this, Copyright);

        return _possibleConstructorReturn(this, (Copyright.__proto__ || Object.getPrototypeOf(Copyright)).call(this, props));
    }

    _createClass(Copyright, [{
        key: 'render',
        value: function render() {
            var children = this.props.children;

            return _react2.default.createElement(
                'div',
                { className: 'tiny-footer' },
                _react2.default.createElement(
                    'div',
                    { className: 'container' },
                    _react2.default.createElement(
                        'div',
                        { className: 'row' },
                        _react2.default.createElement(
                            'div',
                            { className: 'col-md-12' },
                            _react2.default.createElement(
                                'p',
                                { className: 'copyright-text' },
                                children
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Copyright;
}(_react2.default.Component);

exports.default = Copyright;

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(93);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(5)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../../node_modules/css-loader/index.js!./copyright.css", function() {
		var newContent = require("!!../../../node_modules/css-loader/index.js!./copyright.css");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, ".tiny-footer{background-color: #252926;padding-top: 10px; padding-bottom: 10px;}\n.copyright-text{font-size: 12px;color: #6a716c;}\n", ""]);

// exports


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(95);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(5)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../../node_modules/css-loader/index.js!./feature.css", function() {
		var newContent = require("!!../../../node_modules/css-loader/index.js!./feature.css");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, ".feature{margin-bottom: 30px;}\n.feature-icon{color: #74b281;  margin-bottom: 30px;}\n.icon-large{font-size: 52px;}\n.icon-medium{font-size: 42px;}\n.feature-inner{padding: 40px;}\n.feature-bg{}\n.feature-content{}\n.feature-left{}\n.feature-left .feature-icon{float: left;}\n.feature-left .feature-content{padding-left: 60px; text-align: left;}\n\n.feature-center{text-align: center;}\n", ""]);

// exports


/***/ }),
/* 96 */
/***/ (function(module, exports) {

module.exports = {"title":"Why choose me?","description":"My passion is to treat the whole person and not just the pain area. I work with you towards your goals and to develop tools to take control of your life.","features":[{"id":1,"icon":"icon-coffee-cup","title":"Quality Care","description":"Providing a friendly and professional service, I specialise in supporting those with long term conditions."},{"id":2,"icon":"icon-document","title":"Certifications","description":"I am a fully qualified physiotherapist with post graduate certification in acupuncture and a pilates instructor."},{"id":3,"icon":"icon-avatar","title":"One to One Sessions","description":"For those with special requirements, I can provide one-to-one guidance and personalised service."},{"id":4,"icon":"icon-calendar","title":"Regular Classes","description":"I run weekly pilates sessions at a convenient location. Get in contact for more information."}]}

/***/ }),
/* 97 */
/***/ (function(module, exports) {

module.exports = {"title":"Pilates for your body and mind","description":"A trained and experienced physiotherapist, I specialise in Pilates exercises for building core muscles.","features":[{"id":1,"icon":"icon-medical-records","title":"Pregnancy and post-natal Pilates","description":"I have developed exercise routines specifically aimed at pregnant women and new mothers."},{"id":2,"icon":"icon-drugs-3","title":"Pain Management","description":"Pilates can help with joint pain, chronic pain, Fibromyalgia, and sports injury."},{"id":3,"icon":"icon-like","title":"Stress management","description":"The focus and percision of movement can help with stress through relaxation and meditation."}]}

/***/ }),
/* 98 */
/***/ (function(module, exports) {

module.exports = {"phone":" 07886 407274","email":"heather@bodypoise.co.uk","emailSubject":"General Enquiry","copyright":"@2018 Body Poise. All Reserved.","callToAction":"Contact me to discuss your personalised plan.","strapline":"Physio-led Pilates and more"}

/***/ }),
/* 99 */
/***/ (function(module, exports) {

module.exports = {"heading":"Body Poise","text":"Restoring balance for bodies, regaining composure for life."}

/***/ })
],[56]);