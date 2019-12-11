function require( path ){ return $node[ path ] };

var $node = $node || {}
void function( module ) { var exports = module.exports = this; function require( id ) { return $node[ id.replace( /^.\// , "../mol/" ) ] }; 
;
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
module.exports;
//mol.js.map
;

$node[ "../mol/mol" ] = $node[ "../mol/mol.js" ] = module.exports }.call( {} , {} )
;
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

;
"use strict"
/// Fake namespace for optional overrides
///
/// 	namespace $ { export var x = 1 , y = 1 } // defaults
/// 	namespace $.$$ { export var x = 2 } // overrides
/// 	namespace $.$$ { console.log( x , y ) } // usage
///
var $ = ( typeof module === 'object' ) ? Object.setPrototypeOf( module['export'+'s'] , self ) : self
$.$$ = $

$.$mol = $  // deprecated

;
"use strict";
var $;
(function ($) {
    function $mol_class(Class) {
        Class[Symbol.toStringTag] = Class.name;
        if (!Class.prototype.hasOwnProperty(Symbol.toStringTag)) {
            Class.prototype[Symbol.toStringTag] = Class.name;
        }
        return Class;
    }
    $.$mol_class = $mol_class;
})($ || ($ = {}));
//class.js.map
;
"use strict";
var $;
(function ($) {
    let $$;
    (function ($$_1) {
    })($$ = $.$$ || ($.$$ = {}));
    function $mol_ambient(overrides) {
        return Object.setPrototypeOf(overrides, this);
    }
    $.$mol_ambient = $mol_ambient;
})($ || ($ = {}));
//ambient.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    var $mol_object2_1;
    let $mol_object2 = $mol_object2_1 = class $mol_object2 extends Object {
        constructor(init) {
            super();
            if (init)
                init(this);
        }
        static get $$() { return this.$; }
        get $$() { return this.$; }
        static make(init) {
            return new this(init);
        }
        static toString() { return this[Symbol.toStringTag] || this.name; }
        destructor() { }
        toString() {
            return this[Symbol.toStringTag];
        }
        toJSON() {
            return this.toString();
        }
    };
    $mol_object2.$ = $;
    $mol_object2 = $mol_object2_1 = __decorate([
        $.$mol_class
    ], $mol_object2);
    $.$mol_object2 = $mol_object2;
    Object.defineProperty($mol_object2.prototype, '$', { value: $mol_object2.$, enumerable: false, writable: true });
})($ || ($ = {}));
//object2.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_after_tick extends $.$mol_object2 {
        constructor(task) {
            super();
            this.task = task;
            this.cancelled = false;
            this.promise = Promise.resolve().then(() => {
                if (this.cancelled)
                    return;
                task();
            });
        }
        destructor() {
            this.cancelled = true;
        }
    }
    $.$mol_after_tick = $mol_after_tick;
})($ || ($ = {}));
//tick.js.map
;
"use strict";
var $;
(function ($) {
})($ || ($ = {}));
//context.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_dom_context = self;
})($ || ($ = {}));
//context.web.js.map
;
"use strict";
var $;
(function ($) {
    let all = [];
    let el = null;
    let timer = null;
    function $mol_style_attach(id, text) {
        all.push(`/* ${id} */\n\n${text}`);
        if (timer)
            return el;
        const doc = $.$mol_dom_context.document;
        if (!doc)
            return null;
        el = doc.createElement('style');
        el.id = `$mol_style_attach`;
        doc.head.appendChild(el);
        timer = new $.$mol_after_tick(() => {
            el.innerHTML = '\n' + all.join('\n\n');
            all = [];
            el = null;
            timer = null;
        });
        return el;
    }
    $.$mol_style_attach = $mol_style_attach;
})($ || ($ = {}));
//attach.js.map
;
"use strict";
//theme.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/theme/theme.css", "[mol_theme] , :root {\n\tbackground-color: var(--mol_theme_back);\n\tcolor: var(--mol_theme_text);\n\tfill: var(--mol_theme_text);\n}\n\n[mol_theme=\"$mol_theme_light\"] , :root {\n\t--mol_theme_back: hsl( 210 , 50% , 99% );\n\t--mol_theme_hover: rgba( 0 , 0 , 0 , .05 );\n\t--mol_theme_current: hsl( 210 , 100% , 80% );\n\t--mol_theme_text: rgba( 0 , 0 , 0 , .9 );\n\t--mol_theme_control: hsla( 210 , 60% , 35% , 1 );\n\t--mol_theme_shade: rgba( 0 , 0 , 0 , .5 );\n\t--mol_theme_line: rgba( 220 , 220 , 220 , 1 );\n\t--mol_theme_focus: hsla( 0 , 60% , 50% , 0.75 );\n\t--mol_theme_field: white;\n}\n\n[mol_theme=\"$mol_theme_dark\"] {\n\t--mol_theme_back: hsl( 210 , 50% , 10% );\n\t--mol_theme_hover: #333;\n\t--mol_theme_current: hsl( 210 , 100% , 20% );\n\t--mol_theme_text: rgba( 255 , 255 , 255 , .8 );\n\t--mol_theme_control: hsla( 210 , 60% , 70% , 1 );\n\t--mol_theme_shade: rgba( 255 , 255 , 255 , .5 );\n\t--mol_theme_line: rgba( 50 , 50 , 50 , 1 );\n\t--mol_theme_focus: rgba( 204 , 68 , 50 , .75 );\n\t--mol_theme_field: black;\n}\n\n[mol_theme=\"$mol_theme_base\"] {\n\t--mol_theme_back: hsla( 210 , 60% , 35% , 1 );\n\t--mol_theme_hover: rgba( 0 , 0 , 0 , .05 );\n\t--mol_theme_current: hsl( 210 , 100% , 20% );\n\t--mol_theme_text: white;\n\t--mol_theme_line: white;\n\t--mol_theme_control: white;\n}\n\n[mol_theme=\"$mol_theme_accent\"] {\n\t--mol_theme_back: rgb(204, 68, 50);\n\t--mol_theme_hover: rgb(165, 56, 42);\n\t--mol_theme_text: white;\n\t--mol_theme_line: rgba( 50 , 50 , 50 , 1 );\n\t--mol_theme_control: white;\n}\n");
})($ || ($ = {}));
//theme.css.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_fail(error) {
        throw error;
    }
    $.$mol_fail = $mol_fail;
})($ || ($ = {}));
//fail.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_fail_hidden(error) {
        throw error; /// Use 'Never Pause Here' breakpoint in DevTools or simply blackbox this script
    }
    $.$mol_fail_hidden = $mol_fail_hidden;
})($ || ($ = {}));
//hidden.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    let $mol_wrapper = class $mol_wrapper extends $.$mol_object2 {
        static run(task) {
            return this.func(task)();
        }
        static func(func) {
            return this.wrap(func);
        }
        static get class() {
            return (Class) => {
                const construct = (target, args) => new Class(...args);
                const handler = {
                    construct: this.func(construct)
                };
                handler[Symbol.toStringTag] = Class.name + '#';
                return new Proxy(Class, handler);
            };
        }
        static get method() {
            return (obj, name, descr) => {
                descr.value = this.func(descr.value);
                return descr;
            };
        }
    };
    $mol_wrapper = __decorate([
        $.$mol_class
    ], $mol_wrapper);
    $.$mol_wrapper = $mol_wrapper;
})($ || ($ = {}));
//wrapper.js.map
;
"use strict";
var $;
(function ($) {
    // https://docs.google.com/document/d/1FTascZXT9cxfetuPRT2eXPQKXui4nWFivUnS_335T3U/preview#
    $['devtoolsFormatters'] = $['devtoolsFormatters'] || [];
    function $mol_dev_format_register(config) {
        $['devtoolsFormatters'].push(config);
    }
    $.$mol_dev_format_register = $mol_dev_format_register;
    $.$mol_dev_format_head = Symbol('$mol_dev_format_head');
    $.$mol_dev_format_body = Symbol('$mol_dev_format_body');
    $mol_dev_format_register({
        header: (val, config = false) => {
            if (config)
                return null;
            if (!val)
                return null;
            if ($.$mol_dev_format_head in val) {
                return val[$.$mol_dev_format_head]();
            }
            return null;
        },
        hasBody: val => val[$.$mol_dev_format_body],
        body: val => val[$.$mol_dev_format_body](),
    });
    function $mol_dev_format_native(obj) {
        if (typeof obj === 'undefined')
            return $.$mol_dev_format_shade('undefined');
        if (typeof obj !== 'object')
            return obj;
        return [
            'object',
            {
                object: obj,
                config: true,
            },
        ];
    }
    $.$mol_dev_format_native = $mol_dev_format_native;
    function $mol_dev_format_auto(obj) {
        if (obj == null)
            return $.$mol_dev_format_shade(String(obj));
        if (typeof obj === 'object' && $.$mol_dev_format_head in obj) {
            return obj[$.$mol_dev_format_head]();
        }
        return [
            'object',
            {
                object: obj,
                config: false,
            },
        ];
    }
    $.$mol_dev_format_auto = $mol_dev_format_auto;
    function $mol_dev_format_element(element, style, ...content) {
        const styles = [];
        for (let key in style)
            styles.push(`${key} : ${style[key]}`);
        return [
            element,
            {
                style: styles.join(' ; '),
            },
            ...content,
        ];
    }
    $.$mol_dev_format_element = $mol_dev_format_element;
    $.$mol_dev_format_div = $mol_dev_format_element.bind(null, 'div');
    $.$mol_dev_format_span = $mol_dev_format_element.bind(null, 'span');
    $.$mol_dev_format_ol = $mol_dev_format_element.bind(null, 'ol');
    $.$mol_dev_format_li = $mol_dev_format_element.bind(null, 'li');
    $.$mol_dev_format_table = $mol_dev_format_element.bind(null, 'table');
    $.$mol_dev_format_tr = $mol_dev_format_element.bind(null, 'tr');
    $.$mol_dev_format_td = $mol_dev_format_element.bind(null, 'td');
    $.$mol_dev_format_accent = $.$mol_dev_format_span.bind(null, {
        'color': 'magenta',
    });
    $.$mol_dev_format_strong = $.$mol_dev_format_span.bind(null, {
        'font-weight': 'bold',
    });
    $.$mol_dev_format_string = $.$mol_dev_format_span.bind(null, {
        'color': 'green',
    });
    $.$mol_dev_format_shade = $.$mol_dev_format_span.bind(null, {
        'color': 'gray',
    });
    $.$mol_dev_format_indent = $.$mol_dev_format_div.bind(null, {
        'margin-left': '13px'
    });
})($ || ($ = {}));
//format.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_maybe(value) {
        return (value == null) ? [] : [value];
    }
    $.$mol_maybe = $mol_maybe;
})($ || ($ = {}));
//maybe.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_log(path, ...values) {
        if ($.$mol_log_filter() == null)
            return;
        path = String(path);
        if (path.indexOf($.$mol_log_filter()) === -1)
            return;
        const context = $.$mol_log_context();
        if (context)
            context();
        console.debug(path, ...values);
        if ($.$mol_log_debug() == null)
            return;
        if (path.indexOf($.$mol_log_debug()) === -1)
            return;
        debugger;
    }
    $.$mol_log = $mol_log;
})($ || ($ = {}));
//log.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_log_group(name, task) {
        const filter = $.$mol_log_filter();
        if (filter == null)
            return task;
        return function $mol_log_group_wrapper(...args) {
            let started = false;
            let prev = $.$mol_log_context();
            $.$mol_log_context(() => {
                if (prev)
                    prev();
                started = true;
                if (filter || prev)
                    console.group(name);
                else
                    console.groupCollapsed(name);
                $.$mol_log_context(prev = null);
            });
            try {
                return task.apply(this, args);
            }
            finally {
                if (started)
                    console.groupEnd();
                $.$mol_log_context(prev);
            }
        };
    }
    $.$mol_log_group = $mol_log_group;
})($ || ($ = {}));
//log_group.js.map
;
"use strict";
var $;
(function ($) {
    let context = null;
    function $mol_log_context(next = context) {
        return context = next;
    }
    $.$mol_log_context = $mol_log_context;
})($ || ($ = {}));
//log_context.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_log_debug(next) {
        if (next !== undefined) {
            if (next == null) {
                sessionStorage.removeItem('$mol_log_debug()');
            }
            else {
                sessionStorage.setItem('$mol_log_debug()', next);
            }
        }
        return sessionStorage.getItem('$mol_log_debug()');
    }
    $.$mol_log_debug = $mol_log_debug;
})($ || ($ = {}));
//log_debug.web.js.map
;
"use strict";
var $;
(function ($) {
    let filter = undefined;
    $.$mol_log_filter = function $mol_log_filter(next) {
        if (next !== undefined) {
            if (next == null) {
                sessionStorage.removeItem('$mol_log_filter()');
            }
            else {
                sessionStorage.setItem('$mol_log_filter()', next);
            }
            filter = next;
        }
        if (filter !== undefined)
            return filter;
        return filter = sessionStorage.getItem('$mol_log_filter()');
    };
    if (typeof sessionStorage === 'undefined')
        $.$mol_log_filter = (next = null) => filter = next;
    if ($.$mol_log_filter() == null)
        console.info('Use $mol_log_filter( needle : string|null ) to toggle logs');
})($ || ($ = {}));
//log_filter.web.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    var $mol_log2_1;
    let $mol_log2 = $mol_log2_1 = class $mol_log2 extends $.$mol_wrapper {
        constructor(host, id, args) {
            super();
            this.host = host;
            this.id = id;
            this.args = args;
            this.stream = [];
            this[Symbol.toStringTag] = host ? `${host}.${id}` : id;
        }
        static wrap(task) {
            const Inner = this;
            const wrapped = function (...args) {
                const outer = $mol_log2_1.current;
                const inner = $mol_log2_1.current = new Inner(this, task.name, args);
                try {
                    return task.call(this, ...args);
                }
                finally {
                    $mol_log2_1.current = outer;
                    inner.flush();
                }
            };
            return wrapped;
        }
        flush() {
            if (this.stream.length === 0)
                return;
            console.debug(this);
        }
        info(...values) {
            this.stream.push(new $mol_log2_line(...$mol_log2_1.prefix, ...values));
        }
        [$.$mol_dev_format_head]() {
            return $.$mol_dev_format_span({}, ...$.$mol_maybe(this.host).map($.$mol_dev_format_auto), '.', $.$mol_dev_format_strong(this.id), '(', ...this.args.map($.$mol_dev_format_auto), ') ', $.$mol_dev_format_auto(this.stream));
        }
        static info(...values) {
            const excludes = $mol_log2_1.excludes;
            if (!excludes)
                return;
            const skip = excludes.some((regexp, index) => {
                return regexp && regexp.test(String(values[index])) || false;
            });
            if (skip)
                return;
            if (!$mol_log2_1.current) {
                console.warn(new Error(`$mol_log.current is not defined. Wrap entry point to $mol_log!`));
                $mol_log2_1.current = new $mol_log2_1(null, '$mol_log2_default', []);
                console.debug($mol_log2_1.current);
            }
            $mol_log2_1.current.info(...values);
        }
    };
    $mol_log2.current = null;
    /**
     * Enable all logs
     *
     * 	$mol_log2.excludes = []
     *
     * Exclude all atom logs:
     *
     * 	$mol_log2.excludes = [ , /˸|🠈|⏭|⏯|►|💤|☍|☌|✓|✔|✘|🕱|�/ ]
     *
     * Disable logs:
     *
     * 	$mol_log2.excludes = null
     */
    $mol_log2.excludes = null;
    $mol_log2.prefix = [];
    $mol_log2 = $mol_log2_1 = __decorate([
        $.$mol_class
    ], $mol_log2);
    $.$mol_log2 = $mol_log2;
    class $mol_log2_indent extends $.$mol_wrapper {
        static wrap(task) {
            const Inner = this;
            const wrapped = function (...args) {
                try {
                    $mol_log2.prefix.push($.$mol_log2_token_indent);
                    return task.call(this, ...args);
                }
                finally {
                    $mol_log2.prefix.pop();
                }
            };
            return wrapped;
        }
    }
    $.$mol_log2_indent = $mol_log2_indent;
    let $mol_log2_table = class $mol_log2_table extends $mol_log2 {
        [$.$mol_dev_format_head]() {
            return $.$mol_dev_format_span({}, $.$mol_dev_format_strong(`${this}(`), ...this.args.map($.$mol_dev_format_auto), $.$mol_dev_format_strong(`) `));
        }
        [$.$mol_dev_format_body]() {
            return $.$mol_dev_format_table({}, ...this.stream.map($.$mol_dev_format_auto));
        }
    };
    $mol_log2_table = __decorate([
        $.$mol_class
    ], $mol_log2_table);
    $.$mol_log2_table = $mol_log2_table;
    let $mol_log2_hidden = class $mol_log2_hidden extends $mol_log2 {
        flush() { }
    };
    $mol_log2_hidden = __decorate([
        $.$mol_class
    ], $mol_log2_hidden);
    $.$mol_log2_hidden = $mol_log2_hidden;
    let $mol_log2_line = class $mol_log2_line extends Array {
        constructor(...items) {
            super(...items);
        }
        [$.$mol_dev_format_head]() {
            return $.$mol_dev_format_tr({}, ...this.map(item => $.$mol_dev_format_td({}, $.$mol_dev_format_auto(item))));
        }
    };
    $mol_log2_line = __decorate([
        $.$mol_class
    ], $mol_log2_line);
    $.$mol_log2_line = $mol_log2_line;
    let $mol_log2_token = class $mol_log2_token extends Array {
        constructor(...items) {
            super(...items);
        }
        [$.$mol_dev_format_head]() {
            return $.$mol_dev_format_accent(...this);
        }
    };
    $mol_log2_token = __decorate([
        $.$mol_class
    ], $mol_log2_token);
    $.$mol_log2_token = $mol_log2_token;
    $.$mol_log2_token_empty = new $mol_log2_token('');
    $.$mol_log2_token_indent = new $mol_log2_token('\t');
    $.$mol_log2_legend = new $mol_log2_table(null, '$mol_log2_legend', []);
    if (!$mol_log2.excludes)
        $.$mol_log2_legend.info($.$mol_log2_token_empty, 'Use `$mol_log2.excludes : null | RegExp[]` to toggle logs');
})($ || ($ = {}));
//log2.js.map
;
"use strict";
var $;
(function ($) {
    console.debug($.$mol_log2_legend);
})($ || ($ = {}));
//log2.web.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_after_frame extends $.$mol_object2 {
        constructor(task) {
            super();
            this.task = task;
            this.id = requestAnimationFrame(task);
        }
        destructor() {
            cancelAnimationFrame(this.id);
        }
    }
    $.$mol_after_frame = $mol_after_frame;
})($ || ($ = {}));
//frame.web.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_compare_any(a, b) {
        if (a === b)
            return true;
        if (!Number.isNaN(a))
            return false;
        if (!Number.isNaN(b))
            return false;
        return true;
    }
    $.$mol_compare_any = $mol_compare_any;
})($ || ($ = {}));
//any.js.map
;
"use strict";
var $;
(function ($) {
    const cache = new WeakMap();
    $.$mol_conform_stack = [];
    function $mol_conform(target, source) {
        if ($.$mol_compare_any(target, source))
            return source;
        if (!target || typeof target !== 'object')
            return target;
        if (!source || typeof source !== 'object')
            return target;
        if (target instanceof Error)
            return target;
        if (source instanceof Error)
            return target;
        if (target['constructor'] !== source['constructor'])
            return target;
        if (cache.get(target))
            return target;
        cache.set(target, true);
        const conform = $.$mol_conform_handlers.get(target['constructor']);
        if (!conform)
            return target;
        if ($.$mol_conform_stack.indexOf(target) !== -1)
            return target;
        $.$mol_conform_stack.push(target);
        try {
            return conform(target, source);
        }
        finally {
            $.$mol_conform_stack.pop();
        }
    }
    $.$mol_conform = $mol_conform;
    $.$mol_conform_handlers = new WeakMap();
    function $mol_conform_handler(cl, handler) {
        $.$mol_conform_handlers.set(cl, handler);
    }
    $.$mol_conform_handler = $mol_conform_handler;
    function $mol_conform_array(target, source) {
        if (source.length !== target.length)
            return target;
        for (let i = 0; i < target.length; ++i) {
            if (!$.$mol_compare_any(source[i], target[i]))
                return target;
        }
        return source;
    }
    $mol_conform_handler(Array, $mol_conform_array);
    $mol_conform_handler(Uint8Array, $mol_conform_array);
    $mol_conform_handler(Uint16Array, $mol_conform_array);
    $mol_conform_handler(Uint32Array, $mol_conform_array);
    $mol_conform_handler(Object, (target, source) => {
        let count = 0;
        let equal = true;
        for (let key in target) {
            const conformed = $mol_conform(target[key], source[key]);
            if (conformed !== target[key]) {
                try {
                    target[key] = conformed;
                }
                catch (error) { }
                if (!$.$mol_compare_any(conformed, target[key]))
                    equal = false;
            }
            if (!$.$mol_compare_any(conformed, source[key]))
                equal = false;
            ++count;
        }
        for (let key in source)
            if (--count < 0)
                break;
        return (equal && count === 0) ? source : target;
    });
    $mol_conform_handler(Date, (target, source) => {
        if (target.getTime() === source.getTime())
            return source;
        return target;
    });
    $mol_conform_handler(RegExp, (target, source) => {
        if (target.toString() === source.toString())
            return source;
        return target;
    });
})($ || ($ = {}));
//conform.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_array_trim(array) {
        let last = array.length;
        while (last > 0) {
            --last;
            const value = array[last];
            if (value === undefined)
                array.pop();
            else
                break;
        }
        return array;
    }
    $.$mol_array_trim = $mol_array_trim;
})($ || ($ = {}));
//trim.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    var $mol_fiber_1;
    function $mol_fiber_defer(calculate) {
        const fiber = new $mol_fiber;
        fiber.calculate = calculate;
        fiber[Symbol.toStringTag] = calculate.name;
        fiber.schedule();
        return fiber;
    }
    $.$mol_fiber_defer = $mol_fiber_defer;
    function $mol_fiber_func(calculate) {
        console.warn('$mol_fiber_func is deprecated. Use $mol_fiber.func instead.');
        return $mol_fiber.func(calculate);
    }
    $.$mol_fiber_func = $mol_fiber_func;
    function $mol_fiber_root(calculate) {
        const wrapper = function (...args) {
            const fiber = new $mol_fiber();
            fiber.calculate = calculate.bind(this, ...args);
            return fiber.wake();
        };
        wrapper[Symbol.toStringTag] = calculate.name;
        return wrapper;
    }
    $.$mol_fiber_root = $mol_fiber_root;
    function $mol_fiber_method(obj, name, descr) {
        console.warn('$mol_fiber_method is deprecated. Use $mol_fiber.method instead.');
        return $mol_fiber.method(obj, name, descr);
    }
    $.$mol_fiber_method = $mol_fiber_method;
    function $mol_fiber_async(task) {
        return (...args) => new Promise($mol_fiber_root((done, fail) => {
            try {
                done(task(...args));
            }
            catch (error) {
                if ('then' in error)
                    return $.$mol_fail_hidden(error);
                fail(error);
            }
        }));
    }
    $.$mol_fiber_async = $mol_fiber_async;
    function $mol_fiber_sync(request) {
        return function $mol_fiber_sync_wrapper(...args) {
            const slave = $mol_fiber.current;
            let master = slave && slave.master;
            if (!master || master.constructor !== $mol_fiber) {
                master = new $mol_fiber;
                master.cursor = -3 /* persist */;
                master.error = request.call(this, ...args).then($.$mol_log2.func(master.push).bind(master), $.$mol_log2.func(master.fail).bind(master));
                const prefix = slave ? `${slave}/${slave.cursor / 2}:` : '/';
                master[Symbol.toStringTag] = prefix + (request.name || $mol_fiber_sync.name);
            }
            return master.get();
        };
    }
    $.$mol_fiber_sync = $mol_fiber_sync;
    async function $mol_fiber_warp() {
        const deadline = $mol_fiber.deadline;
        try {
            $mol_fiber.deadline = Number.POSITIVE_INFINITY;
            while ($mol_fiber.queue.length)
                await $mol_fiber.tick();
            return Promise.resolve();
        }
        finally {
            $mol_fiber.deadline = deadline;
        }
    }
    $.$mol_fiber_warp = $mol_fiber_warp;
    function $mol_fiber_fence(func) {
        const prev = $mol_fiber.current;
        try {
            $mol_fiber.current = null;
            return func();
        }
        finally {
            $mol_fiber.current = prev;
        }
    }
    $.$mol_fiber_fence = $mol_fiber_fence;
    function $mol_fiber_unlimit(task) {
        const deadline = $mol_fiber.deadline;
        try {
            $mol_fiber.deadline = Number.POSITIVE_INFINITY;
            return task();
        }
        finally {
            $mol_fiber.deadline = deadline;
        }
    }
    $.$mol_fiber_unlimit = $mol_fiber_unlimit;
    let $mol_fiber_solid = class $mol_fiber_solid extends $.$mol_wrapper {
        static func(task) {
            function wrapped(...args) {
                const deadline = $mol_fiber.deadline;
                try {
                    $mol_fiber.deadline = Number.POSITIVE_INFINITY;
                    return task.call(this, ...args);
                }
                catch (error) {
                    if ('then' in error)
                        $.$mol_fail(new Error('Solid fiber can not be suspended.'));
                    return $.$mol_fail_hidden(error);
                }
                finally {
                    $mol_fiber.deadline = deadline;
                }
            }
            return $mol_fiber.func(wrapped);
        }
    };
    $mol_fiber_solid = __decorate([
        $.$mol_class
    ], $mol_fiber_solid);
    $.$mol_fiber_solid = $mol_fiber_solid;
    let $mol_fiber = $mol_fiber_1 = class $mol_fiber extends $.$mol_wrapper {
        constructor() {
            super(...arguments);
            this.value = undefined;
            this.error = null;
            this.cursor = 0 /* obsolete */;
            this.masters = [];
        }
        static wrap(task) {
            return function $mol_fiber_wrapper(...args) {
                const slave = $mol_fiber_1.current;
                let master = slave && slave.master;
                if (!master || master.constructor !== $mol_fiber_1) {
                    master = new $mol_fiber_1;
                    master.calculate = task.bind(this, ...args);
                    const prefix = slave ? `${slave}/${slave.cursor / 2}:` : '/';
                    master[Symbol.toStringTag] = `${prefix}${task.name}`;
                }
                return master.get();
            };
        }
        static async tick() {
            while ($mol_fiber_1.queue.length > 0) {
                const now = Date.now();
                if (now >= $mol_fiber_1.deadline) {
                    $mol_fiber_1.schedule();
                    $mol_fiber_1.liveline = now;
                    return;
                }
                const task = $mol_fiber_1.queue.shift();
                await task();
            }
        }
        static schedule() {
            if (!$mol_fiber_1.scheduled) {
                $mol_fiber_1.scheduled = new $.$mol_after_frame(async () => {
                    const now = Date.now();
                    let quant = $mol_fiber_1.quant;
                    if ($mol_fiber_1.liveline) {
                        quant = Math.max(quant, Math.floor((now - $mol_fiber_1.liveline) / 2));
                        $mol_fiber_1.liveline = 0;
                    }
                    $mol_fiber_1.deadline = now + quant;
                    $mol_fiber_1.scheduled = null;
                    await $mol_fiber_1.tick();
                });
            }
            const promise = new this.$.Promise(done => this.queue.push(() => (done(), promise)));
            return promise;
        }
        schedule() {
            $mol_fiber_1.schedule().then(() => this.wake());
        }
        wake() {
            try {
                if (this.cursor > -2 /* actual */)
                    return this.get();
            }
            catch (error) {
                if ('then' in error)
                    return;
                $.$mol_fail_hidden(error);
            }
        }
        push(value) {
            value = this.$.$mol_conform(value, this.value);
            if (this.error || !Object.is(this.value, value)) {
                this.$.$mol_log2.info(this, $.$mol_fiber_token_changed1, value, $.$mol_fiber_token_changed2, this.error || this.value);
                this.obsolete_slaves();
                this.forget();
            }
            else {
                this.$.$mol_log2.info(this, $.$mol_fiber_token_actualized, value);
            }
            this.error = null;
            this.value = value;
            this.complete();
            return value;
        }
        fail(error) {
            this.complete();
            this.$.$mol_log2.info(this, $.$mol_fiber_token_failed, error);
            this.error = error;
            this.obsolete_slaves();
            return error;
        }
        wait(promise) {
            this.error = promise;
            this.$.$mol_log2.info(this, $.$mol_fiber_token_sleeped, promise);
            this.cursor = 0 /* obsolete */;
            return promise;
        }
        complete() {
            if (this.cursor <= -2 /* actual */)
                return;
            for (let index = 0; index < this.masters.length; index += 2) {
                this.complete_master(index);
            }
            this.cursor = -2 /* actual */;
        }
        complete_master(master_index) {
            this.disobey(master_index);
        }
        pull() {
            this.push(this.calculate());
        }
        update() {
            const slave = $mol_fiber_1.current;
            try {
                this.limit();
                $mol_fiber_1.current = this;
                this.$.$mol_log2.info(this, $.$mol_fiber_token_runned);
                this.pull();
            }
            catch (error) {
                if ('then' in error) {
                    if (!slave) {
                        const listener = () => this.wake();
                        error = error.then(listener, listener);
                    }
                    this.wait(error);
                }
                else {
                    this.fail(error);
                }
            }
            finally {
                $mol_fiber_1.current = slave;
            }
        }
        get() {
            if (this.cursor > 0 /* obsolete */) {
                this.$.$mol_fail(new Error(`Cyclic dependency at ${this}`));
            }
            const slave = $mol_fiber_1.current;
            if (slave)
                slave.master = this;
            if (this.cursor > -2 /* actual */)
                this.update();
            if (this.error)
                return this.$.$mol_fail_hidden(this.error);
            return this.value;
        }
        limit() {
            if (!$mol_fiber_1.deadline)
                return;
            if (!$mol_fiber_1.current)
                return;
            if (Date.now() < $mol_fiber_1.deadline)
                return;
            this.$.$mol_fail_hidden($mol_fiber_1.schedule());
        }
        get master() {
            return this.masters[this.cursor];
        }
        set master(next) {
            if (this.cursor === -1 /* doubt */)
                return;
            const cursor = this.cursor;
            const prev = this.masters[this.cursor];
            if (prev !== next) {
                if (prev)
                    this.rescue(prev, cursor);
                this.masters[cursor] = next;
                this.masters[cursor + 1] = this.obey(next, cursor);
            }
            this.cursor = cursor + 2;
        }
        rescue(master, master_index) { }
        obey(master, master_index) { return -1; }
        lead(slave, master_index) { return -1; }
        dislead(slave_index) {
            this.destructor();
        }
        disobey(master_index) {
            const master = this.masters[master_index];
            if (!master)
                return;
            master.dislead(this.masters[master_index + 1]);
            this.masters[master_index] = undefined;
            this.masters[master_index + 1] = undefined;
            this.$.$mol_array_trim(this.masters);
        }
        obsolete_slaves() { }
        obsolete(master_index) { }
        forget() {
            this.value = undefined;
        }
        abort() {
            this.forget();
            return true;
        }
        destructor() {
            if (!this.abort())
                return;
            this.$.$mol_log2.info(this, $.$mol_fiber_token_destructed);
            this.complete();
        }
        [$.$mol_dev_format_head]() {
            return $.$mol_dev_format_native(this);
        }
    };
    $mol_fiber.quant = 32;
    $mol_fiber.deadline = 0;
    $mol_fiber.liveline = 0;
    $mol_fiber.current = null;
    $mol_fiber.scheduled = null;
    $mol_fiber.queue = [];
    __decorate([
        $.$mol_log2.method
    ], $mol_fiber.prototype, "wake", null);
    __decorate([
        $.$mol_log2_indent.method
    ], $mol_fiber.prototype, "update", null);
    $mol_fiber = $mol_fiber_1 = __decorate([
        $.$mol_class
    ], $mol_fiber);
    $.$mol_fiber = $mol_fiber;
    $.$mol_fiber_token_runned = new $.$mol_log2_token(' ► ');
    $.$mol_fiber_token_changed1 = new $.$mol_log2_token(' ˸ ');
    $.$mol_fiber_token_changed2 = new $.$mol_log2_token(' 🠈 ');
    $.$mol_fiber_token_actualized = new $.$mol_log2_token(' ✓ ');
    $.$mol_fiber_token_sleeped = new $.$mol_log2_token(' 💤 ');
    $.$mol_fiber_token_failed = new $.$mol_log2_token(' 🔥 ');
    $.$mol_fiber_token_destructed = new $.$mol_log2_token(' 🕱 ');
    $.$mol_log2_legend.info($.$mol_fiber_token_runned, '$mol_fiber starts execution');
    $.$mol_log2_legend.info(new $.$mol_log2_line($.$mol_fiber_token_changed1, $.$mol_fiber_token_changed2), '$mol_fiber value is changed to different value');
    $.$mol_log2_legend.info($.$mol_fiber_token_actualized, 'Actual $mol_fiber value is same as before');
    $.$mol_log2_legend.info($.$mol_fiber_token_sleeped, '$mol_fiber can not run now and awaits on promise');
    $.$mol_log2_legend.info($.$mol_fiber_token_failed, '$mol_fiber is failed and will be throw an Error or Promise');
    $.$mol_log2_legend.info($.$mol_fiber_token_destructed, '$mol_fiber fully destructed');
})($ || ($ = {}));
//fiber.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_owning_map = new WeakMap();
    function $mol_owning_allow(having) {
        if (!having)
            return false;
        if (typeof having !== 'object')
            return false;
        if (!('destructor' in having))
            return false;
        return true;
    }
    $.$mol_owning_allow = $mol_owning_allow;
    function $mol_owning_get(having, Owner) {
        if (!$mol_owning_allow(having))
            return null;
        while (true) {
            const owner = $.$mol_owning_map.get(having);
            if (!owner)
                return owner;
            if (!Owner)
                return owner;
            if (owner instanceof Owner)
                return owner;
            having = owner;
        }
    }
    $.$mol_owning_get = $mol_owning_get;
    function $mol_owning_check(owner, having) {
        if (!$mol_owning_allow(having))
            return false;
        if ($.$mol_owning_map.get(having) !== owner)
            return false;
        return true;
    }
    $.$mol_owning_check = $mol_owning_check;
    function $mol_owning_catch(owner, having) {
        if (!$mol_owning_allow(having))
            return false;
        if ($.$mol_owning_map.get(having))
            return false;
        $.$mol_owning_map.set(having, owner);
        return true;
    }
    $.$mol_owning_catch = $mol_owning_catch;
})($ || ($ = {}));
//owning.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    var $mol_atom2_1;
    function $mol_atom2_value(task) {
        const cached = $mol_atom2.cached;
        try {
            $mol_atom2.cached = true;
            return task();
        }
        finally {
            $mol_atom2.cached = cached;
        }
    }
    $.$mol_atom2_value = $mol_atom2_value;
    let $mol_atom2 = $mol_atom2_1 = class $mol_atom2 extends $.$mol_fiber {
        constructor() {
            super(...arguments);
            this.slaves = [];
            this._value = undefined;
            this._error = null;
        }
        static get current() {
            const atom = $.$mol_fiber.current;
            if (atom instanceof $mol_atom2_1)
                return atom;
            return null;
        }
        static reap(atom) {
            this.reap_queue.push(atom);
            if (this.reap_task)
                return;
            this.reap_task = $.$mol_fiber_defer(() => {
                this.reap_task = null;
                while (true) {
                    const atom = this.reap_queue.pop();
                    if (!atom)
                        break;
                    if (!atom.alone)
                        continue;
                    atom.destructor();
                }
            });
        }
        rescue(master, cursor) {
            if (!(master instanceof $mol_atom2_1))
                return;
            const master_index = this.masters.length;
            const slave_index = this.masters[cursor + 1] + 1;
            master.slaves[slave_index] = master_index;
            this.masters.push(master, this.masters[cursor + 1]);
        }
        get() {
            if ($mol_atom2_1.cached)
                return this.value;
            const value = super.get();
            if (value === undefined)
                $.$mol_fail(new Error(`Not defined: ${this}`));
            return value;
        }
        pull() {
            if (this.cursor === 0 /* obsolete */)
                return super.pull();
            this.$.$mol_log2.info(this, $.$mol_atom2_token_revalidation);
            const masters = this.masters;
            for (let index = 0; index < masters.length; index += 2) {
                const master = masters[index];
                if (!master)
                    continue;
                try {
                    master.get();
                }
                catch (error) {
                    if ('then' in error)
                        $.$mol_fail_hidden(error);
                    this.cursor = 0 /* obsolete */;
                }
                if (this.cursor !== 0 /* obsolete */)
                    continue;
                this.$.$mol_log2.info(this, $.$mol_atom2_token_stumbled, this._error || this._value);
                return super.pull();
            }
            this.$.$mol_log2.info(this, $.$mol_atom2_token_revalidated, this._error || this._value);
            this.cursor = -2 /* actual */;
            return this.value;
        }
        get value() { return this._value; }
        set value(next) {
            const prev = this._value;
            if (prev && this.$.$mol_owning_check(this, prev))
                prev.destructor();
            if (next && this.$.$mol_owning_catch(this, next)) {
                next[Symbol.toStringTag] = this[Symbol.toStringTag];
                next[$.$mol_object_field] = this[$.$mol_object_field];
            }
            this._value = next;
        }
        get error() { return this._error; }
        set error(next) {
            const prev = this._error;
            if (prev && this.$.$mol_owning_check(this, prev))
                prev.destructor();
            if (next && this.$.$mol_owning_catch(this, next)) {
                next[Symbol.toStringTag] = this[Symbol.toStringTag];
                next[$.$mol_object_field] = this[$.$mol_object_field];
            }
            this._error = next;
        }
        put(next) {
            this.cursor = this.masters.length;
            next = this.push(next);
            this.cursor = -3 /* persist */;
            return next;
        }
        complete_master(master_index) {
            if (this.masters[master_index] instanceof $mol_atom2_1) {
                if (master_index >= this.cursor)
                    this.disobey(master_index);
            }
            else {
                this.disobey(master_index);
            }
        }
        obey(master, master_index) {
            return master.lead(this, master_index);
        }
        lead(slave, master_index) {
            this.$.$mol_log2.info(this, $.$mol_atom2_token_leaded, slave);
            const slave_index = this.slaves.length;
            this.slaves[slave_index] = slave;
            this.slaves[slave_index + 1] = master_index;
            return slave_index;
        }
        dislead(slave_index) {
            if (slave_index < 0)
                return; // slave is fiber
            this.$.$mol_log2.info(this, $.$mol_atom2_token_disleaded, this.slaves[slave_index]);
            this.slaves[slave_index] = undefined;
            this.slaves[slave_index + 1] = undefined;
            $.$mol_array_trim(this.slaves);
            if (this.cursor > -3 /* persist */ && this.alone)
                $mol_atom2_1.reap(this);
        }
        obsolete(master_index = -1) {
            if (this.cursor > 0 /* obsolete */) {
                if (master_index >= this.cursor - 2)
                    return;
                const path = [];
                let current = this;
                collect: while (current) {
                    path.push(current);
                    current = current.masters[current.cursor - 2];
                }
                this.$.$mol_fail(new Error(`Obsoleted while calculation \n\n${path.join('\n')}\n`));
            }
            if (this.cursor === 0 /* obsolete */)
                return;
            this.$.$mol_log2.info(this, $.$mol_atom2_token_obsoleted, this._error || this._value);
            if (this.cursor !== -1 /* doubt */)
                this.doubt_slaves();
            this.cursor = 0 /* obsolete */;
        }
        doubt(master_index = -1) {
            if (this.cursor > 0 /* obsolete */) {
                if (master_index >= this.cursor - 2)
                    return;
                const path = [];
                let current = this;
                collect: while (current) {
                    path.push(current);
                    current = current.masters[current.cursor - 2];
                }
                this.$.$mol_fail(new Error(`Doubted while calculation \n\n${path.join('\n')}\n`));
            }
            if (this.cursor >= -1 /* doubt */)
                return;
            this.$.$mol_log2.info(this, $.$mol_atom2_token_doubted, this._error || this._value);
            this.cursor = -1 /* doubt */;
            this.doubt_slaves();
        }
        obsolete_slaves() {
            for (let index = 0; index < this.slaves.length; index += 2) {
                const slave = this.slaves[index];
                if (slave)
                    slave.obsolete(this.slaves[index + 1]);
            }
        }
        doubt_slaves() {
            for (let index = 0; index < this.slaves.length; index += 2) {
                const slave = this.slaves[index];
                if (slave)
                    slave.doubt(this.slaves[index + 1]);
            }
        }
        get fresh() {
            return $.$mol_log2_hidden.func(() => {
                if (this.cursor !== -2 /* actual */)
                    return;
                this.cursor = 0 /* obsolete */;
                $.$mol_fiber_solid.run(() => this.update());
            });
        }
        get alone() {
            return this.slaves.length === 0;
        }
        get derived() {
            for (let index = 0; index < this.masters.length; index += 2) {
                if (this.masters[index])
                    return true;
            }
            return false;
        }
        destructor() {
            if (!this.abort())
                return;
            this.$.$mol_log2.info(this, $.$mol_fiber_token_destructed);
            this.cursor = -3 /* persist */;
            for (let index = 0; index < this.masters.length; index += 2) {
                this.complete_master(index);
            }
        }
    };
    $mol_atom2.cached = false;
    $mol_atom2.reap_task = null;
    $mol_atom2.reap_queue = [];
    __decorate([
        $.$mol_log2_indent.method
    ], $mol_atom2.prototype, "obsolete_slaves", null);
    __decorate([
        $.$mol_log2_indent.method
    ], $mol_atom2.prototype, "doubt_slaves", null);
    $mol_atom2 = $mol_atom2_1 = __decorate([
        $.$mol_class
    ], $mol_atom2);
    $.$mol_atom2 = $mol_atom2;
    $.$mol_atom2_token_revalidation = new $.$mol_log2_token(' ⏭ ');
    $.$mol_atom2_token_stumbled = new $.$mol_log2_token(' ⏯ ');
    $.$mol_atom2_token_revalidated = new $.$mol_log2_token(' ✔ ');
    $.$mol_atom2_token_leaded = new $.$mol_log2_token(' ☍ ');
    $.$mol_atom2_token_disleaded = new $.$mol_log2_token(' ☌ ');
    $.$mol_atom2_token_obsoleted = new $.$mol_log2_token(' ✘ ');
    $.$mol_atom2_token_doubted = new $.$mol_log2_token(' � ');
    $.$mol_log2_legend.info($.$mol_atom2_token_revalidation, '$mol_atom2 starts masters cheking for changes');
    $.$mol_log2_legend.info($.$mol_atom2_token_stumbled, '$mol_atom2 is obsoleted while masters checking');
    $.$mol_log2_legend.info($.$mol_atom2_token_revalidated, '$mol_atom2 is actual becasue there is no changed masters');
    $.$mol_log2_legend.info($.$mol_atom2_token_leaded, '$mol_atom2 leads some slave');
    $.$mol_log2_legend.info($.$mol_atom2_token_disleaded, '$mol_atom2 disleads some slave');
    $.$mol_log2_legend.info($.$mol_atom2_token_obsoleted, '$mol_atom2 is obsoleted because some master is changed');
    $.$mol_log2_legend.info($.$mol_atom2_token_doubted, '$mol_atom2 is doubted because some master is doubted or obsoleted');
})($ || ($ = {}));
//atom2.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_const(value) {
        var getter = (() => value);
        getter['()'] = value;
        getter[Symbol.toStringTag] = value;
        return getter;
    }
    $.$mol_const = $mol_const;
})($ || ($ = {}));
//const.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_atom2_field(proto, name, descr) {
        if (!descr)
            descr = Object.getOwnPropertyDescriptor(proto, name);
        const get = descr ? (descr.get || $.$mol_const(descr.value)) : (() => undefined);
        const set = descr && descr.set || function (next) { get_cache(this).put(next); };
        const store = new WeakMap();
        Object.defineProperty(proto, name + "@", {
            get: function () {
                return store.get(this);
            }
        });
        const get_cache = (host) => {
            let cache = store.get(host);
            if (!cache) {
                cache = new $.$mol_atom2;
                cache.calculate = get.bind(host);
                cache[Symbol.toStringTag] = `${host}.${name}`;
                cache.abort = () => {
                    store.delete(host);
                    cache.forget();
                    return true;
                };
                store.set(host, cache);
            }
            return cache;
        };
        return {
            get() {
                return get_cache(this).get();
            },
            set,
        };
    }
    $.$mol_atom2_field = $mol_atom2_field;
})($ || ($ = {}));
//field.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($_1) {
    let $$;
    (function ($$) {
        let $;
    })($$ = $_1.$$ || ($_1.$$ = {}));
    $_1.$mol_object_field = Symbol('$mol_object_field');
    class $mol_object extends Object {
        constructor() {
            super(...arguments);
            this[Symbol.toStringTag] = `${this.constructor.name}.make()`;
        }
        static get $$() { return this.$; }
        get $() {
            if (this._$)
                return this._$;
            const owner = $_1.$mol_owning_get(this);
            return this._$ = (owner && owner.$$ || $);
        }
        set $(next) {
            this._$ = next;
        }
        get $$() { return this.$; }
        static make(config) {
            const instance = new this;
            for (let key in config)
                instance[key] = config[key];
            return instance;
        }
        static toString() {
            return this.name;
        }
        // 'object_owner()' : any
        // object_owner( next? : any ) {
        // 	return this[ 'object_owner()' ] || ( this[ 'object_owner()' ] = next || $mol_owning_get( this ) )
        // }
        // 'object_host()' : any
        // object_host( next? : any ) {
        // 	return this[ 'object_host()' ] || ( this[ 'object_host()' ] = next || $mol_owning_get( $mol_owning_get( this ) ) )
        // }
        // 'object_field()' : string
        // object_field( next? : string ) {
        // 	return this[ 'object_field()' ] || ( this[ 'object_field()' ] = next || `${ this }`.replace( /^(.*)\(.*?$/g , '$1' ).replace( /^.*\./g , ''  ) )
        // }
        // object_id( next? : string ) {
        // 	return this[ Symbol.toStringTag ] || ( this[ Symbol.toStringTag ] = next ) || ''
        // }
        toString() {
            return this[Symbol.toStringTag];
        }
        toJSON() {
            return this.toString();
        }
        destructor() { }
    }
    $mol_object.$ = $;
    __decorate([
        $_1.$mol_atom2_field
    ], $mol_object.prototype, "_$", void 0);
    $_1.$mol_object = $mol_object;
    Object.defineProperty($mol_object.prototype, '$', { value: $mol_object.$, enumerable: false, writable: true });
    $mol_object.prototype[Symbol.toStringTag] = '$mol_object.make()';
})($ || ($ = {}));
//object.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    let $mol_mem_force = class $mol_mem_force extends Object {
        constructor() {
            super();
            this.$mol_mem_force = true;
        }
        static toString() { return this.name; }
    };
    $mol_mem_force.$mol_mem_force = true;
    $mol_mem_force = __decorate([
        $.$mol_class
    ], $mol_mem_force);
    $.$mol_mem_force = $mol_mem_force;
    class $mol_mem_force_cache extends $mol_mem_force {
    }
    $.$mol_mem_force_cache = $mol_mem_force_cache;
    class $mol_mem_force_update extends $mol_mem_force {
    }
    $.$mol_mem_force_update = $mol_mem_force_update;
    class $mol_mem_force_fail extends $mol_mem_force_cache {
    }
    $.$mol_mem_force_fail = $mol_mem_force_fail;
})($ || ($ = {}));
//force.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_mem(proto, name, descr) {
        const value = descr.value;
        const store = new WeakMap();
        Object.defineProperty(proto, name + "()", {
            get: function () {
                return store.get(this);
            }
        });
        const get_cache = (host) => {
            let cache = store.get(host);
            if (cache)
                return cache;
            let cache2 = new $.$mol_atom2;
            cache2.calculate = value.bind(host);
            cache2[Symbol.toStringTag] = `${host}.${name}()`;
            cache2.abort = () => {
                store.delete(host);
                cache2.forget();
                return true;
            };
            $.$mol_owning_catch(host, cache2);
            cache2[$.$mol_object_field] = name;
            store.set(host, cache2);
            return cache2;
        };
        return {
            value(next, force) {
                if (next === undefined) {
                    const cache = get_cache(this);
                    if (force === $.$mol_mem_force_cache)
                        cache.obsolete(Number.NaN);
                    if ($.$mol_atom2.current)
                        return cache.get();
                    else
                        return $.$mol_fiber.run(() => cache.get());
                }
                return $.$mol_fiber.run(() => {
                    if (force === $.$mol_mem_force_fail)
                        return get_cache(this).fail(next);
                    if (force !== $.$mol_mem_force_cache)
                        next = value.call(this, next);
                    return get_cache(this).put(next);
                });
            }
        };
    }
    $.$mol_mem = $mol_mem;
})($ || ($ = {}));
//mem.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_dict_key(value) {
        if (!value)
            return value;
        if (typeof value !== 'object')
            return value;
        if (Array.isArray(value))
            return value.join(' , ');
        if (Object.getPrototypeOf(Object.getPrototypeOf(value)) === null)
            return JSON.stringify(value);
        return value;
    }
    $.$mol_dict_key = $mol_dict_key;
    class $mol_dict extends Map {
        get(key) {
            return super.get($mol_dict_key(key));
        }
        has(key) {
            return super.has($mol_dict_key(key));
        }
        set(key, value) {
            return super.set($mol_dict_key(key), value);
        }
        delete(key) {
            return super.delete($mol_dict_key(key));
        }
        forEach(back, context) {
            return super.forEach((val, key, dict) => {
                if (typeof key === 'string')
                    key = JSON.parse(key);
                return back.call(this, val, key, dict);
            }, context);
        }
        [Symbol.iterator]() {
            const iterator = super[Symbol.iterator]();
            return {
                [Symbol.iterator]() {
                    return this;
                },
                next() {
                    const iteration = iterator.next();
                    if (!iteration.done) {
                        const key = iteration.value[0];
                        if (typeof key === 'string')
                            iteration.value[0] = JSON.parse(key);
                    }
                    return iteration;
                }
            };
        }
    }
    $.$mol_dict = $mol_dict;
})($ || ($ = {}));
//dict.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_mem_key(proto, name, descr) {
        const value = descr.value;
        const store = new WeakMap();
        Object.defineProperty(proto, name + "()", {
            get: function () {
                return store.get(this);
            }
        });
        const get_cache = (host, key) => {
            let dict = store.get(host);
            if (!dict)
                store.set(host, dict = new $.$mol_dict);
            let cache = dict.get(key);
            if (cache)
                return cache;
            let cache2 = new $.$mol_atom2;
            cache2[Symbol.toStringTag] = `${host}.${name}(${JSON.stringify(key)})`;
            cache2.calculate = value.bind(host, key);
            cache2.abort = () => {
                dict.delete(key);
                if (dict.size === 0)
                    store.delete(host);
                cache2.forget();
                return true;
            };
            $.$mol_owning_catch(host, cache2);
            cache2[$.$mol_object_field] = name;
            dict.set(key, cache2);
            return cache2;
        };
        return {
            value(key, next, force) {
                if (next === undefined) {
                    const cache = get_cache(this, key);
                    if (force === $.$mol_mem_force_cache)
                        cache.obsolete();
                    if ($.$mol_atom2.current)
                        return cache.get();
                    else
                        return $.$mol_fiber.run(() => cache.get());
                }
                return $.$mol_fiber.run(() => {
                    if (force === $.$mol_mem_force_fail)
                        return get_cache(this, key).fail(next);
                    if (force !== $.$mol_mem_force_cache)
                        next = value.call(this, key, next);
                    return get_cache(this, key).put(next);
                });
            }
        };
    }
    $.$mol_mem_key = $mol_mem_key;
})($ || ($ = {}));
//key.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_state_local extends $.$mol_object {
        static native() {
            if (this['native()'])
                return this['native()'];
            check: try {
                const native = $.$mol_dom_context.localStorage;
                if (!native)
                    break check;
                native.setItem('', '');
                native.removeItem('');
                return this['native()'] = native;
            }
            catch (error) {
                console.warn(error);
            }
            return this['native()'] = {
                getItem(key) {
                    return this[':' + key];
                },
                setItem(key, value) {
                    this[':' + key] = value;
                },
                removeItem(key) {
                    this[':' + key] = void 0;
                }
            };
        }
        static value(key, next, force) {
            if (next === void 0)
                return JSON.parse(this.native().getItem(key) || 'null');
            if (next === null)
                this.native().removeItem(key);
            else
                this.native().setItem(key, JSON.stringify(next));
            return next;
        }
        prefix() { return ''; }
        value(key, next) {
            return $mol_state_local.value(this.prefix() + '.' + key, next);
        }
    }
    __decorate([
        $.$mol_mem_key
    ], $mol_state_local, "value", null);
    $.$mol_state_local = $mol_state_local;
})($ || ($ = {}));
//local.js.map
;
"use strict";
var $;
(function ($) {
    self.addEventListener('storage', event => {
        if (!event.key)
            return; // @TODO clear support
        $.$mol_state_local.value(event.key, undefined, $.$mol_mem_force_cache);
    });
})($ || ($ = {}));
//local.web.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_dom_parse(text, type = 'application/xhtml+xml') {
        const parser = new $.$mol_dom_context.DOMParser();
        const doc = parser.parseFromString(text, type);
        const error = doc.getElementsByTagName('parsererror')[0];
        if (error)
            throw new Error(error.textContent);
        return doc;
    }
    $.$mol_dom_parse = $mol_dom_parse;
})($ || ($ = {}));
//parse.js.map
;
"use strict";
// @ts-ignore
var $node = $node || {};
//node.web.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    let $mol_fetch_response = class $mol_fetch_response extends $.$mol_object2 {
        constructor(native) {
            super();
            this.native = native;
        }
        headers() {
            return this.native.headers;
        }
        mime() {
            return this.headers().get('content-type');
        }
        stream() {
            return this.native.body;
        }
        text() {
            const buffer = this.buffer();
            const native = this.native;
            const mime = native.headers.get('content-type') || '';
            const [, charset] = /charset=(.*)/.exec(mime) || [, 'utf-8'];
            const decoder = new TextDecoder(charset);
            return decoder.decode(buffer);
        }
        json() {
            const response = this.native;
            const parse = $.$mol_fiber_sync(response.json);
            return parse.call(response);
        }
        buffer() {
            const response = this.native;
            const parse = $.$mol_fiber_sync(response.arrayBuffer);
            return parse.call(response);
        }
        xml() {
            return $.$mol_dom_parse(this.text(), 'application/xml');
        }
        xhtml() {
            return $.$mol_dom_parse(this.text(), 'application/xhtml+xml');
        }
        html() {
            return $.$mol_dom_parse(this.text(), 'text/html');
        }
    };
    __decorate([
        $.$mol_fiber.method
    ], $mol_fetch_response.prototype, "stream", null);
    __decorate([
        $.$mol_fiber.method
    ], $mol_fetch_response.prototype, "text", null);
    __decorate([
        $.$mol_fiber.method
    ], $mol_fetch_response.prototype, "json", null);
    __decorate([
        $.$mol_fiber.method
    ], $mol_fetch_response.prototype, "buffer", null);
    __decorate([
        $.$mol_fiber.method
    ], $mol_fetch_response.prototype, "xml", null);
    __decorate([
        $.$mol_fiber.method
    ], $mol_fetch_response.prototype, "xhtml", null);
    __decorate([
        $.$mol_fiber.method
    ], $mol_fetch_response.prototype, "html", null);
    $mol_fetch_response = __decorate([
        $.$mol_class
    ], $mol_fetch_response);
    $.$mol_fetch_response = $mol_fetch_response;
    let $mol_fetch = class $mol_fetch extends $.$mol_object2 {
        static response(input, init) {
            const response = this.request(input, init);
            if (Math.floor(response.status / 100) === 2)
                return new $mol_fetch_response(response);
            throw new Error(response.statusText || `HTTP Error ${response.status}`);
        }
        static stream(input, init) {
            return this.response(input, init).stream();
        }
        static text(input, init) {
            return this.response(input, init).text();
        }
        static json(input, init) {
            return this.response(input, init).json();
        }
        static buffer(input, init) {
            this.response(input, init).buffer();
        }
        static xml(input, init) {
            return this.response(input, init).xml();
        }
        static xhtml(input, init) {
            return this.response(input, init).xhtml();
        }
        static html(input, init) {
            return this.response(input, init).html();
        }
    };
    $mol_fetch.request = $.$mol_fiber_sync((input, init = {}) => {
        if (typeof AbortController === 'function') {
            var controller = new AbortController();
            init.signal = controller.signal;
            const fiber = $.$mol_fiber.current;
            fiber.abort = () => {
                if (fiber.cursor === -2 /* actual */)
                    return true;
                controller.abort();
                return true;
            };
        }
        let native = $.$mol_dom_context.fetch;
        if (!native)
            native = $node['node-fetch'];
        return native(input, init);
    });
    __decorate([
        $.$mol_fiber.method
    ], $mol_fetch, "response", null);
    __decorate([
        $.$mol_fiber.method
    ], $mol_fetch, "stream", null);
    __decorate([
        $.$mol_fiber.method
    ], $mol_fetch, "text", null);
    __decorate([
        $.$mol_fiber.method
    ], $mol_fetch, "json", null);
    __decorate([
        $.$mol_fiber.method
    ], $mol_fetch, "buffer", null);
    __decorate([
        $.$mol_fiber.method
    ], $mol_fetch, "xml", null);
    __decorate([
        $.$mol_fiber.method
    ], $mol_fetch, "xhtml", null);
    __decorate([
        $.$mol_fiber.method
    ], $mol_fetch, "html", null);
    $mol_fetch = __decorate([
        $.$mol_class
    ], $mol_fetch);
    $.$mol_fetch = $mol_fetch;
})($ || ($ = {}));
//fetch.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_file extends $.$mol_object {
        static absolute(path) {
            return $mol_file.make({
                path: $.$mol_const(path)
            });
        }
        static relative(path) {
            return this.absolute(new URL(path, this.base).toString());
        }
        path() {
            return '.';
        }
        parent() {
            return this.resolve('..');
        }
        name() {
            return this.path().replace(/^.*\//, '');
        }
        ext() {
            var match = /((?:\.\w+)+)$/.exec(this.path());
            return match && match[1].substring(1);
        }
        content(next, force) {
            return $.$mol_fetch.text(this.path());
        }
        resolve(path) {
            let res = this.path() + '/' + path;
            while (true) {
                let prev = res;
                res = res.replace(/\/[^\/.]+\/\.\.\//, '/');
                if (prev === res)
                    break;
            }
            return this.constructor.absolute(res);
        }
        relate(base = this.constructor.relative('.')) {
            throw new Error('Not implemented yet');
        }
    }
    $mol_file.base = $.$mol_dom_context.document
        ? new URL('.', $.$mol_dom_context.document.currentScript['src']).toString()
        : '';
    __decorate([
        $.$mol_mem
    ], $mol_file.prototype, "content", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_file, "absolute", null);
    $.$mol_file = $mol_file;
})($ || ($ = {}));
//file.web.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_locale extends $.$mol_object {
        static lang_default() {
            return 'en';
        }
        static lang(next) {
            return $.$mol_state_local.value('locale', next) || $.$mol_dom_context.navigator.language.replace(/-.*/, '') || this.lang_default();
        }
        static source(lang) {
            return JSON.parse($.$mol_file.relative(`web.locale=${lang}.json`).content().toString());
        }
        static texts(lang, next) {
            if (next)
                return next;
            try {
                return this.source(lang).valueOf();
            }
            catch (error) {
                if ('then' in error)
                    $.$mol_fail_hidden(error);
                const def = this.lang_default();
                if (lang === def)
                    throw error;
                return this.source(def);
            }
        }
        static text(key) {
            for (let lang of [this.lang(), 'en']) {
                const text = this.texts(lang)[key];
                if (text)
                    return text;
                console.warn(`Not translated to "${lang}": ${key}`);
            }
            return `<${key}>`;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_locale, "lang_default", null);
    __decorate([
        $.$mol_mem
    ], $mol_locale, "lang", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_locale, "source", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_locale, "texts", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_locale, "text", null);
    $.$mol_locale = $mol_locale;
})($ || ($ = {}));
//locale.js.map
;
"use strict";
var $;
(function ($) {
    class $mpk_tss_todo extends Error {
        constructor() {
            super(...arguments);
            this.name = '$mpk_tss_todo';
        }
    }
    $.$mpk_tss_todo = $mpk_tss_todo;
    class $mpk_tss_todo_unknown extends Error {
        constructor() {
            super(...arguments);
            this.name = '$mpk_tss_todo_unknown';
        }
    }
    $.$mpk_tss_todo_unknown = $mpk_tss_todo_unknown;
})($ || ($ = {}));
//todo.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mpk_tss_domain_terminal {
        static current() { return new this; }
        id() { throw new $.$mpk_tss_todo; }
    }
    __decorate([
        $.$mol_mem
    ], $mpk_tss_domain_terminal, "current", null);
    $.$mpk_tss_domain_terminal = $mpk_tss_domain_terminal;
})($ || ($ = {}));
//terminal.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_unit extends $.$mol_object {
        constructor(value) {
            super();
            if (value !== undefined)
                this['valueOf()'] = value;
        }
        prefix() {
            return '';
        }
        postfix() {
            return '';
        }
        valueOf() {
            return this['valueOf()'];
        }
        delimiter() {
            return ' ';
        }
        value_view() {
            return this.valueOf().toLocaleString();
        }
        toString() {
            return this.prefix() + this.value_view() + this.postfix();
        }
        static summ(a, b) {
            var Class = a.constructor;
            if (Class !== b.constructor)
                throw new Error(`Not same measure: ${Class} , ${b.constructor}`);
            return new Class(a.valueOf() + b.valueOf());
        }
        mult(m) {
            var Class = this.constructor;
            return new Class(this.valueOf() * m);
        }
    }
    $.$mol_unit = $mol_unit;
})($ || ($ = {}));
//unit.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_unit_money extends $.$mol_unit {
    }
    $.$mol_unit_money = $mol_unit_money;
    class $mol_unit_money_usd extends $mol_unit_money {
        prefix() {
            return '$';
        }
    }
    $.$mol_unit_money_usd = $mol_unit_money_usd;
    class $mol_unit_money_rur extends $mol_unit_money {
        postfix() {
            return ' ₽';
        }
    }
    $.$mol_unit_money_rur = $mol_unit_money_rur;
})($ || ($ = {}));
//money.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_time_base {
        static formatter(pattern) {
            if (this.patterns[pattern])
                return this.patterns[pattern];
            var tokens = Object.keys(this.patterns)
                .sort()
                .reverse()
                .map((token) => token.replace(/([-+*.\[\]()\^])/g, '\\$1'));
            var lexer = RegExp('(.*?)(' + tokens.join('|') + '|$)', 'g');
            var funcs = [];
            pattern.replace(lexer, (str, text, token) => {
                if (text)
                    funcs.push(() => text);
                if (token)
                    funcs.push(this.patterns[token]);
                return str;
            });
            return this.patterns[pattern] = (arg) => {
                return funcs.reduce((res, func) => res + func(arg), '');
            };
        }
        toString(pattern) {
            var Base = this.constructor;
            var formatter = Base.formatter(pattern);
            return formatter.call(Base, this);
        }
    }
    $mol_time_base.patterns = {};
    $.$mol_time_base = $mol_time_base;
})($ || ($ = {}));
//base.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_time_duration extends $.$mol_time_base {
        constructor(config = 0) {
            super();
            this.year = 0;
            this.month = 0;
            this.day = 0;
            this.hour = 0;
            this.minute = 0;
            this.second = 0;
            if (typeof config === 'number') {
                this.second = config / 1000;
                return;
            }
            if (typeof config === 'string') {
                if (config === 'Z') {
                    this.hour = 0;
                    this.minute = 0;
                    return;
                }
                duration: {
                    const parser = /^P(?:([+-]?\d+(?:\.\d+)?)Y)?(?:([+-]?\d+(?:\.\d+)?)M)?(?:([+-]?\d+(?:\.\d+)?)D)?(?:T(?:([+-]?\d+(?:\.\d+)?)h)?(?:([+-]?\d+(?:\.\d+)?)m)?(?:([+-]?\d+(?:\.\d+)?)s)?)?$/i;
                    const found = parser.exec(config);
                    if (!found)
                        break duration;
                    if (found[1])
                        this.year = Number(found[1]);
                    if (found[2])
                        this.month = Number(found[2]);
                    if (found[3])
                        this.day = Number(found[3]);
                    if (found[4])
                        this.hour = Number(found[4]);
                    if (found[5])
                        this.minute = Number(found[5]);
                    if (found[6])
                        this.second = Number(found[6]);
                    return;
                }
                offset: {
                    var parser = /^[+-](\d\d)(?::?(\d\d))?$/i;
                    var found = parser.exec(config);
                    if (!found)
                        break offset;
                    if (found[1])
                        this.hour = Number(found[1]);
                    if (found[2])
                        this.minute = Number(found[2]);
                    return;
                }
                throw new Error(`Can not parse time duration (${config})`);
            }
            this.year = config.year || 0;
            this.month = config.month || 0;
            this.day = config.day || 0;
            this.hour = config.hour || 0;
            this.minute = config.minute || 0;
            this.second = config.second || 0;
        }
        summ(config) {
            const duration = new $mol_time_duration(config);
            return new $mol_time_duration({
                year: this.year + duration.year,
                month: this.month + duration.month,
                day: this.day + duration.day,
                hour: this.hour + duration.hour,
                minute: this.minute + duration.minute,
                second: this.second + duration.second,
            });
        }
        mult(numb) {
            return new $mol_time_duration({
                year: this.year && this.year * numb,
                month: this.month && this.month * numb,
                day: this.day && this.day * numb,
                hour: this.hour && this.hour * numb,
                minute: this.minute && this.minute * numb,
                second: this.second && this.second * numb,
            });
        }
        count(config) {
            const duration = new $mol_time_duration(config);
            return this.valueOf() / duration.valueOf();
        }
        valueOf() {
            var day = this.year * 365 + this.month * 30.4 + this.day;
            var second = ((day * 24 + this.hour) * 60 + this.minute) * 60 + this.second;
            return second * 1000;
        }
        toJSON() { return this.toString(); }
        toString(pattern = 'P#Y#M#DT#h#m#s') {
            return super.toString(pattern);
        }
    }
    $mol_time_duration.patterns = {
        '#Y': (duration) => {
            if (!duration.year)
                return '';
            return duration.year + 'Y';
        },
        '#M': (duration) => {
            if (!duration.month)
                return '';
            return duration.month + 'M';
        },
        '#D': (duration) => {
            if (!duration.day)
                return '';
            return duration.day + 'D';
        },
        '#h': (duration) => {
            if (!duration.hour)
                return '';
            return duration.hour + 'H';
        },
        '#m': (duration) => {
            if (!duration.minute)
                return '';
            return duration.minute + 'M';
        },
        '#s': (duration) => {
            if (!duration.second)
                return '';
            return duration.second + 'S';
        },
        '+hh': (duration) => {
            var hour = duration.hour;
            var sign = '+';
            if (hour < 0) {
                sign = '-';
                hour = -hour;
            }
            return (hour < 10)
                ? (sign + '0' + hour)
                : (sign + hour);
        },
        'mm': (duration) => {
            return (duration.minute < 10)
                ? ('0' + duration.minute)
                : String(duration.minute);
        },
    };
    $.$mol_time_duration = $mol_time_duration;
})($ || ($ = {}));
//duration.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_time_moment extends $.$mol_time_base {
        constructor(config = new Date) {
            super();
            if (typeof config === 'number')
                config = new Date(config);
            if (typeof config === 'string') {
                var parsed = /^(?:(\d\d\d\d)(?:-?(\d\d)(?:-?(\d\d))?)?)?(?:[T ](\d\d)(?::?(\d\d)(?::?(\d\d(?:\.\d+)?))?)?(Z|[\+\-]\d\d(?::?(?:\d\d)?)?)?)?$/.exec(config);
                if (!parsed)
                    throw new Error(`Can not parse time moment (${config})`);
                if (parsed[1])
                    this.year = Number(parsed[1]);
                if (parsed[2])
                    this.month = Number(parsed[2]) - 1;
                if (parsed[3])
                    this.day = Number(parsed[3]) - 1;
                if (parsed[4])
                    this.hour = Number(parsed[4]);
                if (parsed[5])
                    this.minute = Number(parsed[5]);
                if (parsed[6])
                    this.second = Number(parsed[6]);
                if (parsed[7])
                    this.offset = new $.$mol_time_duration(parsed[7]);
                return;
            }
            if (config instanceof Date) {
                this.year = config.getFullYear();
                this.month = config.getMonth();
                this.day = config.getDate() - 1;
                this.hour = config.getHours();
                this.minute = config.getMinutes();
                this.second = config.getSeconds() + config.getMilliseconds() / 1000;
                var offset = -config.getTimezoneOffset();
                this.offset = new $.$mol_time_duration({
                    hour: (offset < 0) ? Math.ceil(offset / 60) : Math.floor(offset / 60),
                    minute: offset % 60
                });
                return;
            }
            this.year = config.year;
            this.month = config.month;
            this.day = config.day;
            this.hour = config.hour;
            this.minute = config.minute;
            this.second = config.second;
            if (config.offset != null) {
                this.offset = new $.$mol_time_duration(config.offset);
            }
        }
        get weekday() {
            return (this.native.getDay() + 6) % 7;
        }
        get native() {
            if (this._native)
                return this._native;
            var utc = this.toOffset('Z');
            return this._native = new Date(Date.UTC((utc.year || 0), (utc.month || 0), (utc.day || 0) + 1, (utc.hour || 0), (utc.minute || 0), (utc.second && Math.floor(utc.second) || 0), (utc.second && Math.floor((utc.second - Math.floor(utc.second)) * 1000) || 0)));
        }
        get normal() {
            if (this._normal)
                return this._normal;
            const moment = new $mol_time_moment(this.native);
            return this._normal = new $mol_time_moment({
                year: (this.year === undefined) ? undefined : moment.year,
                month: (this.month === undefined) ? undefined : moment.month,
                day: (this.day === undefined) ? undefined : moment.day,
                hour: (this.hour === undefined) ? undefined : moment.hour,
                minute: (this.minute === undefined) ? undefined : moment.minute,
                second: (this.second === undefined) ? undefined : moment.second,
                offset: (this.offset === undefined) ? undefined : moment.offset,
            });
        }
        merge(config) {
            var moment = new $mol_time_moment(config);
            return new $mol_time_moment({
                year: (moment.year === undefined) ? this.year : moment.year,
                month: (moment.month === undefined) ? this.month : moment.month,
                day: (moment.day === undefined) ? this.day : moment.day,
                hour: (moment.hour === undefined) ? this.hour : moment.hour,
                minute: (moment.minute === undefined) ? this.minute : moment.minute,
                second: (moment.second === undefined) ? this.second : moment.second,
                offset: (moment.offset === undefined) ? this.offset : moment.offset,
            });
        }
        shift(config) {
            var duration = new $.$mol_time_duration(config);
            var moment = new $mol_time_moment().merge(this);
            var second = (moment.second) + (duration.second || 0);
            var native = new Date((moment.year) + (duration.year || 0), (moment.month) + (duration.month || 0), (moment.day) + 1 + (duration.day || 0), (moment.hour) + (duration.hour || 0), (moment.minute) + (duration.minute || 0), Math.floor(second), (second - Math.floor(second)) * 1000);
            if (isNaN(native.valueOf()))
                throw new Error('Wrong time');
            return new $mol_time_moment({
                year: (this.year === undefined) ? undefined : native.getFullYear(),
                month: (this.month === undefined) ? undefined : native.getMonth(),
                day: (this.day === undefined) ? undefined : native.getDate() - 1,
                hour: (this.hour === undefined) ? undefined : native.getHours(),
                minute: (this.minute === undefined) ? undefined : native.getMinutes(),
                second: (this.second === undefined) ? undefined : native.getSeconds() + native.getMilliseconds() / 1000,
                offset: this.offset,
            });
        }
        toOffset(config) {
            const duration = new $.$mol_time_duration(config);
            const offset = this.offset || new $mol_time_moment().offset;
            const moment = this.shift(duration.summ(offset.mult(-1)));
            return moment.merge({ offset: duration });
        }
        valueOf() { return this.native.getTime(); }
        toJSON() { return this.toString(); }
        toString(pattern = 'YYYY-MM-DDThh:mm:ss.sssZ') {
            return super.toString(pattern);
        }
    }
    /// Mnemonics:
    ///  * single letter for numbers: M - month number, D - day of month.
    ///  * uppercase letters for dates, lowercase for times: M - month number , m - minutes number
    ///  * repeated letters for define register count: YYYY - full year, YY - shot year, MM - padded month number
    ///  * words for word representation: Month - month name, WeekDay - day of week name
    ///  * shortcuts: WD - short day of week, Mon - short month name.
    $mol_time_moment.patterns = {
        'YYYY': (moment) => {
            if (moment.year == null)
                return '';
            return String(moment.year);
        },
        'AD': (moment) => {
            if (moment.year == null)
                return '';
            return String(Math.floor(moment.year / 100) + 1);
        },
        'YY': (moment) => {
            if (moment.year == null)
                return '';
            return String(moment.year % 100);
        },
        'Month': (moment) => {
            if (moment.month == null)
                return '';
            return moment.native.toLocaleString(undefined, { month: 'long' });
        },
        'DD Month': (moment) => {
            return moment.native.toLocaleString(undefined, { day: '2-digit', month: 'long' });
        },
        'D Month': (moment) => {
            return moment.native.toLocaleString(undefined, { day: 'numeric', month: 'long' });
        },
        'Mon': (moment) => {
            if (moment.month == null)
                return '';
            return moment.native.toLocaleString(undefined, { month: 'short' });
        },
        'DD Mon': (moment) => {
            return moment.native.toLocaleString(undefined, { day: '2-digit', month: 'short' });
        },
        'D Mon': (moment) => {
            return moment.native.toLocaleString(undefined, { day: 'numeric', month: 'short' });
        },
        '-MM': (moment) => {
            if (moment.month == null)
                return '';
            return '-' + $mol_time_moment.patterns['MM'](moment);
        },
        'MM': (moment) => {
            if (moment.month == null)
                return '';
            var month = moment.month + 1;
            return (month < 10)
                ? ('0' + month)
                : ('' + month);
        },
        'M': (moment) => {
            if (moment.month == null)
                return '';
            return String(moment.month + 1);
        },
        'WeekDay': (moment) => {
            if (moment.weekday == null)
                return '';
            return moment.native.toLocaleString(undefined, { weekday: 'long' });
        },
        'WD': (moment) => {
            if (moment.weekday == null)
                return '';
            return moment.native.toLocaleString(undefined, { weekday: 'short' });
        },
        '-DD': (moment) => {
            if (moment.day == null)
                return '';
            return '-' + $mol_time_moment.patterns['DD'](moment);
        },
        'DD': (moment) => {
            if (moment.day == null)
                return '';
            var day = moment.day + 1;
            return (day < 10)
                ? ('0' + day)
                : String(day);
        },
        'D': (moment) => {
            if (moment.day == null)
                return '';
            return String(moment.day + 1);
        },
        'Thh': (moment) => {
            if (moment.hour == null)
                return '';
            return 'T' + $mol_time_moment.patterns['hh'](moment);
        },
        'hh': (moment) => {
            if (moment.hour == null)
                return '';
            return (moment.hour < 10)
                ? ('0' + moment.hour)
                : String(moment.hour);
        },
        'h': (moment) => {
            if (moment.hour == null)
                return '';
            return String(moment.hour);
        },
        ':mm': (moment) => {
            if (moment.minute == null)
                return '';
            return ':' + $mol_time_moment.patterns['mm'](moment);
        },
        'mm': (moment) => {
            if (moment.minute == null)
                return '';
            return (moment.minute < 10)
                ? ('0' + moment.minute)
                : String(moment.minute);
        },
        'm': (moment) => {
            if (moment.minute == null)
                return '';
            return String(moment.minute);
        },
        ':ss': (moment) => {
            if (moment.second == null)
                return '';
            return ':' + $mol_time_moment.patterns['ss'](moment);
        },
        'ss': (moment) => {
            if (moment.second == null)
                return '';
            var second = Math.floor(moment.second);
            return (second < 10)
                ? ('0' + second)
                : String(second);
        },
        's': (moment) => {
            if (moment.second == null)
                return '';
            return String(Math.floor(moment.second));
        },
        '.sss': (moment) => {
            if (moment.second == null)
                return '';
            if (moment.second - Math.floor(moment.second) === 0)
                return '';
            return '.' + $mol_time_moment.patterns['sss'](moment);
        },
        'sss': (moment) => {
            if (moment.second == null)
                return '';
            var millisecond = Math.floor((moment.second - Math.floor(moment.second)) * 1000);
            return (millisecond < 10)
                ? ('00' + millisecond)
                : (millisecond < 100)
                    ? ('0' + millisecond)
                    : String(millisecond);
        },
        'Z': (moment) => {
            var offset = moment.offset;
            if (!offset)
                return '';
            return offset.toString('+hh:mm');
        }
    };
    $.$mol_time_moment = $mol_time_moment;
})($ || ($ = {}));
//moment.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_stub_select_random(list) {
        return list[Math.floor(Math.random() * list.length)];
    }
    $.$mol_stub_select_random = $mol_stub_select_random;
    function $mol_stub_strings(prefix = '', count = 10, length = 10) {
        if (prefix.length >= length)
            return [];
        let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split('');
        let strings = [];
        for (let i = 0; i < count; i++) {
            let text = prefix;
            for (let j = prefix.length; j < length; j++) {
                text += $mol_stub_select_random(possible);
            }
            strings.push(text);
        }
        return strings;
    }
    $.$mol_stub_strings = $mol_stub_strings;
    function $mol_stub_code(length = 8) {
        var max = Math.pow(16, length);
        var min = Math.pow(16, length - 1);
        var value = min + Math.floor(Math.random() * (max - min));
        return value.toString(16).toUpperCase();
    }
    $.$mol_stub_code = $mol_stub_code;
    function $mol_stub_price(max = 1000) {
        var min = Math.floor(max / 16 / 16);
        var value = min + Math.floor(Math.random() * (max - min));
        return new $.$mol_unit_money_usd(value);
    }
    $.$mol_stub_price = $mol_stub_price;
    function $mol_stub_product_name() {
        var name = $mol_stub_select_random([
            'Monitor 15"',
            'Monitor 17"',
            'Monitor 19"',
            'Graphics card',
            'Frame grabber card'
        ]);
        var port = $mol_stub_select_random(['D-SUB', 'DVI', 'HDMI']);
        var resolution = $mol_stub_select_random(['VGA', 'Full HD', '4K']);
        return [name, port, resolution].join(', ');
    }
    $.$mol_stub_product_name = $mol_stub_product_name;
    function $mol_stub_company_name_big() {
        var product = $mol_stub_select_random(['Everything', 'Something', 'Anything', 'Nothing']);
        var type = $mol_stub_select_random(['Company', 'Corporation', 'Holding']);
        return `A ${type} that makes ${product}`;
    }
    $.$mol_stub_company_name_big = $mol_stub_company_name_big;
    function $mol_stub_company_name_small() {
        return $mol_stub_select_random(['ACME inc.', 'Dream Company', 'Just Company']);
    }
    $.$mol_stub_company_name_small = $mol_stub_company_name_small;
    function $mol_stub_company_name() {
        return $mol_stub_select_random([$mol_stub_company_name_small, $mol_stub_company_name_big])();
    }
    $.$mol_stub_company_name = $mol_stub_company_name;
    function $mol_stub_person_name() {
        var first = $mol_stub_select_random(['Ivan', 'Petr', 'Sidor']);
        var last = $mol_stub_select_random(['Ivanov', 'Petrov', 'Sidorov']);
        return `${first} ${last}`;
    }
    $.$mol_stub_person_name = $mol_stub_person_name;
    function $mol_stub_city() {
        return $mol_stub_select_random(['Moscow', 'London', 'Washington', 'Buenos Aires']);
    }
    $.$mol_stub_city = $mol_stub_city;
    function $mol_stub_time(maxShift = 60 * 24 * 365) {
        return new $.$mol_time_moment().shift({ minute: Math.round(Math.random() * maxShift) });
    }
    $.$mol_stub_time = $mol_stub_time;
})($ || ($ = {}));
//stub.js.map
;
"use strict";
var $;
(function ($) {
    function $mpk_tss_stub_id() {
        return $.$mol_stub_code();
    }
    $.$mpk_tss_stub_id = $mpk_tss_stub_id;
    function $mpk_tss_stub_ids(max = 10) {
        const ids = [];
        for (let i = 0; i < max; i++) {
            ids.push($mpk_tss_stub_id());
        }
        return ids;
    }
    $.$mpk_tss_stub_ids = $mpk_tss_stub_ids;
    function $mpk_tss_stub_number(min = 20, max = 80) {
        return min + Math.floor(Math.random() * (max - min));
    }
    $.$mpk_tss_stub_number = $mpk_tss_stub_number;
    function $mpk_tss_stub_mem(obj, name, descr) {
        const value = descr.value;
        const store = new WeakMap();
        descr.value = function $mpk_tss_stub_mem_value(id) {
            let map = store.get(this);
            if (!map) {
                map = new Map();
                store.set(this, map);
            }
            const key = JSON.stringify(id);
            let result = map.get(key);
            if (result === undefined) {
                result = value.call(this, id);
                map.set(key, result);
            }
            return result;
        };
        descr.value['value'] = value;
    }
    $.$mpk_tss_stub_mem = $mpk_tss_stub_mem;
})($ || ($ = {}));
//stub.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mpk_tss_domain_terminal_mock extends $.$mpk_tss_domain_terminal {
        id() {
            return String($.$mpk_tss_stub_number(1000, 9000));
        }
    }
    __decorate([
        $.$mol_mem
    ], $mpk_tss_domain_terminal_mock.prototype, "id", null);
    $.$mpk_tss_domain_terminal_mock = $mpk_tss_domain_terminal_mock;
})($ || ($ = {}));
//mock.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mpk_tss_domain_user extends $.$mol_object {
        static current() { return new this; }
        email(next) { throw new $.$mpk_tss_todo; }
        password(next) { throw new $.$mpk_tss_todo; }
        logged() { throw new $.$mpk_tss_todo; }
        login() { throw new $.$mpk_tss_todo; }
        logout() { throw new $.$mpk_tss_todo; }
    }
    __decorate([
        $.$mol_mem
    ], $mpk_tss_domain_user, "current", null);
    $.$mpk_tss_domain_user = $mpk_tss_domain_user;
})($ || ($ = {}));
//user.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_merge_dict(target, source) {
        let result = {};
        for (let key in target)
            result[key] = target[key];
        for (let key in source)
            result[key] = source[key];
        return result;
    }
    $.$mol_merge_dict = $mol_merge_dict;
})($ || ($ = {}));
//dict.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_state_arg extends $.$mol_object {
        constructor(prefix = '') {
            super();
            this.prefix = prefix;
        }
        static href(next, force) {
            if (next === undefined)
                return $.$mol_dom_context.location.href;
            history.replaceState(history.state, $.$mol_dom_context.document.title, next);
            return next;
        }
        static dict(next) {
            var href = this.href(next && this.make_link(next)).split(/#/)[1] || '';
            var chunks = href.split(/[\/\?#&;]/g);
            var params = {};
            chunks.forEach(chunk => {
                if (!chunk)
                    return;
                var vals = chunk.split('=').map(decodeURIComponent);
                params[vals.shift()] = vals.join('=');
            });
            return params;
        }
        static dict_cut(except) {
            const dict = this.dict();
            const cut = {};
            for (const key in dict) {
                if (except.indexOf(key) >= 0)
                    continue;
                cut[key] = dict[key];
            }
            return cut;
        }
        static value(key, next) {
            const nextDict = (next === void 0) ? void 0 : $.$mol_merge_dict(this.dict(), { [key]: next });
            const next2 = this.dict(nextDict)[key];
            return (next2 == null) ? null : next2;
        }
        static link(next) {
            return this.make_link($.$mol_merge_dict(this.dict_cut(Object.keys(next)), next));
        }
        static make_link(next) {
            const chunks = [];
            for (let key in next) {
                if (null == next[key])
                    continue;
                const val = next[key];
                chunks.push([key].concat(val ? [val] : []).map(this.encode).join('='));
            }
            return new URL('#' + chunks.join('/'), $.$mol_dom_context.location.href).toString();
        }
        static encode(str) {
            return encodeURIComponent(str).replace(/\(/g, '%28').replace(/\)/g, '%29');
        }
        value(key, next) {
            return this.constructor.value(this.prefix + key, next);
        }
        sub(postfix) {
            return new this.constructor(this.prefix + postfix + '.');
        }
        link(next) {
            var prefix = this.prefix;
            var dict = {};
            for (var key in next) {
                dict[prefix + key] = next[key];
            }
            return this.constructor.link(dict);
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_state_arg, "href", null);
    __decorate([
        $.$mol_mem
    ], $mol_state_arg, "dict", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_state_arg, "dict_cut", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_state_arg, "value", null);
    $.$mol_state_arg = $mol_state_arg;
    self.addEventListener('hashchange', $.$mol_fiber_root($.$mol_log_group('$mol_state_arg hashchange', (event) => {
        $mol_state_arg.href($.$mol_dom_context.location.href);
    })));
})($ || ($ = {}));
//arg.web.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mpk_tss_domain_user_mock extends $.$mpk_tss_domain_user {
        server_data(next) {
            return this.$.$mol_state_arg.value('login', next) || '';
        }
        email(next) {
            if (next !== undefined)
                return next;
            return this.server_data();
        }
        password(next) {
            return '';
        }
        logged() {
            return this.server_data() !== '';
        }
        login() {
            this.server_data(this.email());
            this.password('');
        }
        logout() {
            this.server_data(null);
            this.email('');
            this.password('');
        }
    }
    __decorate([
        $.$mol_mem
    ], $mpk_tss_domain_user_mock.prototype, "email", null);
    __decorate([
        $.$mol_mem
    ], $mpk_tss_domain_user_mock.prototype, "password", null);
    $.$mpk_tss_domain_user_mock = $mpk_tss_domain_user_mock;
})($ || ($ = {}));
//mock.js.map
;
"use strict";
var $;
(function ($) {
    class $mpk_tss_pereferial_domain_units extends $.$mol_object {
        unit(id) {
            throw new $.$mpk_tss_todo;
        }
        filter_name(next) {
            return next || '';
        }
        units() {
            throw new $.$mpk_tss_todo;
        }
    }
    $.$mpk_tss_pereferial_domain_units = $mpk_tss_pereferial_domain_units;
    let $mpk_tss_pereferial_domain_type;
    (function ($mpk_tss_pereferial_domain_type) {
        $mpk_tss_pereferial_domain_type["ups"] = "UPS";
    })($mpk_tss_pereferial_domain_type = $.$mpk_tss_pereferial_domain_type || ($.$mpk_tss_pereferial_domain_type = {}));
    let $mpk_tss_pereferial_domain_status;
    (function ($mpk_tss_pereferial_domain_status) {
        $mpk_tss_pereferial_domain_status["ready"] = "ready";
        $mpk_tss_pereferial_domain_status["error"] = "error";
        $mpk_tss_pereferial_domain_status["not_responding"] = "not_responding";
        $mpk_tss_pereferial_domain_status["inactive"] = "inactive";
        $mpk_tss_pereferial_domain_status["unknown"] = "unknown";
    })($mpk_tss_pereferial_domain_status = $.$mpk_tss_pereferial_domain_status || ($.$mpk_tss_pereferial_domain_status = {}));
    $.$mpk_tss_pereferial_domain_status_weights = {
        ready: 20,
        error: 0,
        not_responding: 5,
        inactive: 6,
        unknown: 7,
    };
    class $mpk_tss_pereferial_domain_unit extends $.$mol_object {
        id() { throw new $.$mpk_tss_todo; }
        type() { throw new $.$mpk_tss_todo; }
        name() { throw new $.$mpk_tss_todo; }
        status() { throw new $.$mpk_tss_todo; }
        updated(next) { throw new $.$mpk_tss_todo; }
    }
    $.$mpk_tss_pereferial_domain_unit = $mpk_tss_pereferial_domain_unit;
    let $mpk_tss_pereferial_domain_ups_power_source;
    (function ($mpk_tss_pereferial_domain_ups_power_source) {
        $mpk_tss_pereferial_domain_ups_power_source["linein"] = "linein";
        $mpk_tss_pereferial_domain_ups_power_source["internal"] = "internal";
    })($mpk_tss_pereferial_domain_ups_power_source = $.$mpk_tss_pereferial_domain_ups_power_source || ($.$mpk_tss_pereferial_domain_ups_power_source = {}));
    class $mpk_tss_pereferial_domain_ups extends $mpk_tss_pereferial_domain_unit {
        type() { return $mpk_tss_pereferial_domain_type.ups; }
        power_source() { throw new $.$mpk_tss_todo; }
        voltage() { throw new $.$mpk_tss_todo; }
        /**
          Battery level 0-100%
         */
        battery_level() { throw new $.$mpk_tss_todo; }
        battery_time() { throw new $.$mpk_tss_todo; }
    }
    $.$mpk_tss_pereferial_domain_ups = $mpk_tss_pereferial_domain_ups;
})($ || ($ = {}));
//domain.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mpk_tss_pereferial_domain_mock_units extends $.$mpk_tss_pereferial_domain_units {
        max_units() { return 4; }
        unit(id) {
            return $mpk_tss_pereferial_domain_mock_ups.make({ id: $.$mol_const(id) });
        }
        /* protected */ units_all() {
            return $.$mpk_tss_stub_ids(this.max_units())
                .map(id => this.unit(id))
                .sort((unitA, unitB) => {
                const a = unitA.status();
                const b = unitB.status();
                const aw = $.$mpk_tss_pereferial_domain_status_weights[a];
                const bw = $.$mpk_tss_pereferial_domain_status_weights[b];
                if (aw === bw)
                    return 0;
                if (aw > bw)
                    return 1;
                if (aw < bw)
                    return -1;
            });
        }
        units() {
            const filter = this.filter_name().toUpperCase();
            return this.units_all()
                .filter(unit => unit.name().toUpperCase().indexOf(filter) !== -1
                || (filter.length >= 3 && unit.type().toUpperCase().indexOf(filter) !== -1));
        }
    }
    __decorate([
        $.$mol_mem_key
    ], $mpk_tss_pereferial_domain_mock_units.prototype, "unit", null);
    __decorate([
        $.$mol_mem
    ], $mpk_tss_pereferial_domain_mock_units.prototype, "units_all", null);
    __decorate([
        $.$mol_mem
    ], $mpk_tss_pereferial_domain_mock_units.prototype, "units", null);
    $.$mpk_tss_pereferial_domain_mock_units = $mpk_tss_pereferial_domain_mock_units;
    class $mpk_tss_pereferial_domain_mock_ups extends $.$mpk_tss_pereferial_domain_ups {
        status() {
            return $mpk_tss_pereferial_domain_mock_stub_status();
        }
        name() {
            const firm = $.$mol_stub_select_random([
                'Shtil 1103L',
                'Shtil 1104M',
            ]);
            const number = $.$mol_stub_select_random(['N1', 'N2', 'N3', 'N4']);
            return `${firm} ${number}`;
        }
        updated(next) {
            if (this.status() === $.$mpk_tss_pereferial_domain_status.unknown)
                return null;
            return $.$mol_stub_time(-60);
        }
        power_source() {
            if (this.status() === $.$mpk_tss_pereferial_domain_status.unknown)
                return null;
            return $.$mol_stub_select_random(['linein', 'internal']);
        }
        voltage() {
            if (this.status() === $.$mpk_tss_pereferial_domain_status.unknown)
                return null;
            return $.$mpk_tss_stub_number(0, 250);
        }
        battery_level() {
            if (this.status() === $.$mpk_tss_pereferial_domain_status.unknown)
                return null;
            return $.$mpk_tss_stub_number(0, 100);
        }
        battery_time() {
            if (this.status() === $.$mpk_tss_pereferial_domain_status.unknown)
                return null;
            return new $.$mol_time_duration({ minute: $.$mpk_tss_stub_number(0, 300) });
        }
    }
    __decorate([
        $.$mpk_tss_stub_mem
    ], $mpk_tss_pereferial_domain_mock_ups.prototype, "status", null);
    __decorate([
        $.$mpk_tss_stub_mem
    ], $mpk_tss_pereferial_domain_mock_ups.prototype, "name", null);
    __decorate([
        $.$mol_mem
    ], $mpk_tss_pereferial_domain_mock_ups.prototype, "updated", null);
    __decorate([
        $.$mpk_tss_stub_mem
    ], $mpk_tss_pereferial_domain_mock_ups.prototype, "power_source", null);
    __decorate([
        $.$mpk_tss_stub_mem
    ], $mpk_tss_pereferial_domain_mock_ups.prototype, "voltage", null);
    __decorate([
        $.$mpk_tss_stub_mem
    ], $mpk_tss_pereferial_domain_mock_ups.prototype, "battery_level", null);
    __decorate([
        $.$mpk_tss_stub_mem
    ], $mpk_tss_pereferial_domain_mock_ups.prototype, "battery_time", null);
    function $mpk_tss_pereferial_domain_mock_stub_status() {
        return $.$mol_stub_select_random([
            'ready', 'error', 'not_responding', 'inactive', 'unknown'
        ]);
    }
})($ || ($ = {}));
//mock.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    const t = $.$mpk_tss_todo;
    class $mpk_tss_reports_domain_trains extends $.$mol_object {
        report(id) {
            throw new t;
        }
        filter_number(next) {
            throw new t;
        }
        filter_resolution(next) {
            throw new t;
        }
        reports() {
            throw new t;
        }
    }
    __decorate([
        $.$mol_mem_key
    ], $mpk_tss_reports_domain_trains.prototype, "report", null);
    __decorate([
        $.$mol_mem
    ], $mpk_tss_reports_domain_trains.prototype, "filter_number", null);
    __decorate([
        $.$mol_mem
    ], $mpk_tss_reports_domain_trains.prototype, "filter_resolution", null);
    __decorate([
        $.$mol_mem
    ], $mpk_tss_reports_domain_trains.prototype, "reports", null);
    $.$mpk_tss_reports_domain_trains = $mpk_tss_reports_domain_trains;
    let $mpk_tss_reports_domain_resolution;
    (function ($mpk_tss_reports_domain_resolution) {
        $mpk_tss_reports_domain_resolution["success"] = "success";
        $mpk_tss_reports_domain_resolution["warning"] = "warning";
    })($mpk_tss_reports_domain_resolution = $.$mpk_tss_reports_domain_resolution || ($.$mpk_tss_reports_domain_resolution = {}));
    let $mpk_tss_reports_domain_load;
    (function ($mpk_tss_reports_domain_load) {
        $mpk_tss_reports_domain_load["free"] = "free";
        $mpk_tss_reports_domain_load["full"] = "full";
    })($mpk_tss_reports_domain_load = $.$mpk_tss_reports_domain_load || ($.$mpk_tss_reports_domain_load = {}));
    let $mpk_tss_reports_domain_violation;
    (function ($mpk_tss_reports_domain_violation) {
        $mpk_tss_reports_domain_violation["slider"] = "slider";
        $mpk_tss_reports_domain_violation["vyscherbiny"] = "vyscherbiny";
        $mpk_tss_reports_domain_violation["sink"] = "sink";
        $mpk_tss_reports_domain_violation["dent"] = "dent";
    })($mpk_tss_reports_domain_violation = $.$mpk_tss_reports_domain_violation || ($.$mpk_tss_reports_domain_violation = {}));
    let $mpk_tss_reports_domain_carriage_type;
    (function ($mpk_tss_reports_domain_carriage_type) {
        $mpk_tss_reports_domain_carriage_type["hopper"] = "hopper";
        $mpk_tss_reports_domain_carriage_type["flatcar"] = "flatcar";
        $mpk_tss_reports_domain_carriage_type["tank"] = "tank";
        $mpk_tss_reports_domain_carriage_type["covered"] = "covered";
    })($mpk_tss_reports_domain_carriage_type = $.$mpk_tss_reports_domain_carriage_type || ($.$mpk_tss_reports_domain_carriage_type = {}));
    class $mpk_tss_reports_domain_wheel extends $.$mol_object {
        id() { throw new t; }
        resolution() { throw new t; }
        violation() { throw new t; }
        forces() { throw new t; }
    }
    $.$mpk_tss_reports_domain_wheel = $mpk_tss_reports_domain_wheel;
    class $mpk_tss_reports_domain_axle extends $.$mol_object {
        id() { return String(this.axle_number()); }
        axle_number() { throw new t; }
        resolution() { throw new t; }
        violation() { throw new t; }
        wheel(id) { throw new t; }
        wheels() {
            throw new t;
        }
    }
    $.$mpk_tss_reports_domain_axle = $mpk_tss_reports_domain_axle;
    class $mpk_tss_reports_domain_carriage extends $.$mol_object {
        id() { return this.carriage_number(); }
        train() { throw new t; }
        carriage_number() { throw new t; }
        place() { throw new t; }
        resolution() { throw new t; }
        violation() { throw new t; }
        load() { throw new t; }
        // Measured speed at time point, km/h
        measured_speed() { throw new t; }
        // kg
        total_weight() { throw new t; }
        // meters
        length() { throw new t; }
        type() { throw new t; }
        axis() { throw new t; }
        axle(id) { throw new t; }
    }
    $.$mpk_tss_reports_domain_carriage = $mpk_tss_reports_domain_carriage;
    let $mpk_tss_reports_domain_delivery;
    (function ($mpk_tss_reports_domain_delivery) {
        $mpk_tss_reports_domain_delivery["preparing"] = "preparing";
        $mpk_tss_reports_domain_delivery["sending"] = "sending";
        $mpk_tss_reports_domain_delivery["sent"] = "sent";
        $mpk_tss_reports_domain_delivery["error"] = "error";
    })($mpk_tss_reports_domain_delivery = $.$mpk_tss_reports_domain_delivery || ($.$mpk_tss_reports_domain_delivery = {}));
    class $mpk_tss_reports_domain_carriages extends $.$mol_object {
        carriage(id) { throw new t; }
        filter_number(next) {
            throw new t;
        }
        filter_resolution(next) {
            throw new t;
        }
        carriages() { throw new t; }
    }
    __decorate([
        $.$mol_mem_key
    ], $mpk_tss_reports_domain_carriages.prototype, "carriage", null);
    __decorate([
        $.$mol_mem
    ], $mpk_tss_reports_domain_carriages.prototype, "filter_number", null);
    __decorate([
        $.$mol_mem
    ], $mpk_tss_reports_domain_carriages.prototype, "filter_resolution", null);
    __decorate([
        $.$mol_mem
    ], $mpk_tss_reports_domain_carriages.prototype, "carriages", null);
    $.$mpk_tss_reports_domain_carriages = $mpk_tss_reports_domain_carriages;
    class $mpk_tss_reports_domain_report extends $.$mol_object {
        id() { throw new t; }
        train_number() { throw new t; }
        send_count() { throw new t; }
        delivery() { throw new t; }
        // Average speed, km/h
        average_speed() { throw new t; }
        resolution() { throw new t; }
        started() { throw new t; }
        carriages(config) { throw new t; }
    }
    $.$mpk_tss_reports_domain_report = $mpk_tss_reports_domain_report;
})($ || ($ = {}));
//domain.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mpk_tss_reports_domain_mock_trains extends $.$mpk_tss_reports_domain_trains {
        max_reports() { return 100; }
        report(id) {
            return this.reports_all().find(report => report.id() === id) || this.reports_all()[0];
        }
        reports_all() {
            return $.$mpk_tss_stub_ids(this.max_reports())
                .map(id => $mpk_tss_reports_domain_mock_report.make({ id: $.$mol_const(id) }))
                .sort((r1, r2) => {
                if (r1.started() > r2.started())
                    return -1;
                if (r1.started() < r2.started())
                    return 1;
                return 0;
            });
        }
        reports() {
            const filter_number = this.filter_number().toUpperCase();
            const filter_resolution = this.filter_resolution();
            return this.reports_all()
                .filter(report => {
                if (filter_number && report.train_number().toUpperCase().indexOf(filter_number) === -1) {
                    return false;
                }
                if (filter_resolution && report.resolution() !== filter_resolution) {
                    return false;
                }
                return true;
            });
        }
    }
    __decorate([
        $.$mpk_tss_stub_mem
    ], $mpk_tss_reports_domain_mock_trains.prototype, "report", null);
    __decorate([
        $.$mpk_tss_stub_mem
    ], $mpk_tss_reports_domain_mock_trains.prototype, "reports_all", null);
    __decorate([
        $.$mol_mem
    ], $mpk_tss_reports_domain_mock_trains.prototype, "reports", null);
    $.$mpk_tss_reports_domain_mock_trains = $mpk_tss_reports_domain_mock_trains;
    class $mpk_tss_reports_domain_mock_report extends $.$mpk_tss_reports_domain_report {
        train_number() {
            return '' + $.$mpk_tss_stub_number(1000, 9000) + '-' + $.$mpk_tss_stub_number(1000, 9000);
        }
        send_count() {
            return $.$mpk_tss_stub_number(0, 10);
        }
        resolution() {
            return this.carriages_store().carriages_all().reduce((status, carriage) => {
                if (carriage.resolution() === $.$mpk_tss_reports_domain_resolution.warning)
                    return $.$mpk_tss_reports_domain_resolution.warning;
                return status;
            }, $.$mpk_tss_reports_domain_resolution.success);
        }
        delivery() {
            return $mpk_tss_reports_domain_mock_stub_report_status();
        }
        average_speed() {
            return $.$mpk_tss_stub_number(50, 55);
        }
        started() {
            return $.$mol_stub_time(-10);
        }
        carriages_store() {
            return $mpk_tss_reports_domain_mock_carriages.make({
                train: $.$mol_const(this),
            });
        }
        carriages(config) {
            return $mpk_tss_reports_domain_mock_carriages.make(Object.assign(Object.assign({}, config), { carriages_all: () => this.carriages_store().carriages_all(), carriage: (id) => this.carriages_store().carriage(id) }));
        }
    }
    __decorate([
        $.$mpk_tss_stub_mem
    ], $mpk_tss_reports_domain_mock_report.prototype, "train_number", null);
    __decorate([
        $.$mpk_tss_stub_mem
    ], $mpk_tss_reports_domain_mock_report.prototype, "send_count", null);
    __decorate([
        $.$mpk_tss_stub_mem
    ], $mpk_tss_reports_domain_mock_report.prototype, "resolution", null);
    __decorate([
        $.$mpk_tss_stub_mem
    ], $mpk_tss_reports_domain_mock_report.prototype, "delivery", null);
    __decorate([
        $.$mpk_tss_stub_mem
    ], $mpk_tss_reports_domain_mock_report.prototype, "average_speed", null);
    __decorate([
        $.$mpk_tss_stub_mem
    ], $mpk_tss_reports_domain_mock_report.prototype, "started", null);
    __decorate([
        $.$mpk_tss_stub_mem
    ], $mpk_tss_reports_domain_mock_report.prototype, "carriages_store", null);
    __decorate([
        $.$mpk_tss_stub_mem
    ], $mpk_tss_reports_domain_mock_report.prototype, "carriages", null);
    class $mpk_tss_reports_domain_mock_carriages extends $.$mpk_tss_reports_domain_carriages {
        train() { throw new $.$mpk_tss_todo; }
        carriages_all() {
            return $.$mpk_tss_stub_ids($.$mpk_tss_stub_number(30, 45)).map((id, index) => {
                return $mpk_tss_reports_domain_mock_carriage.make({
                    id: $.$mol_const(id),
                    train: $.$mol_const(this.train()),
                    place: $.$mol_const(index + 1),
                });
            });
        }
        carriages() {
            const filter_number = this.filter_number().toUpperCase();
            const filter_resolution = this.filter_resolution();
            return this.carriages_all()
                .filter(carriage => {
                if (filter_number && carriage.carriage_number().toUpperCase().indexOf(filter_number) === -1) {
                    return false;
                }
                if (filter_resolution && carriage.resolution() !== filter_resolution) {
                    return false;
                }
                return true;
            });
        }
        carriage(id) {
            return this.carriages_all().find(carriage => carriage.id() === id) || this.carriages_all()[0];
        }
    }
    __decorate([
        $.$mpk_tss_stub_mem
    ], $mpk_tss_reports_domain_mock_carriages.prototype, "train", null);
    __decorate([
        $.$mpk_tss_stub_mem
    ], $mpk_tss_reports_domain_mock_carriages.prototype, "carriages_all", null);
    __decorate([
        $.$mol_mem
    ], $mpk_tss_reports_domain_mock_carriages.prototype, "carriages", null);
    class $mpk_tss_reports_domain_mock_carriage extends $.$mpk_tss_reports_domain_carriage {
        place() {
            return $.$mpk_tss_stub_number(1, 50);
        }
        resolution() {
            return this.axis().reduce((resolution, axle) => {
                if (axle.resolution() !== $.$mpk_tss_reports_domain_resolution.success) {
                    return axle.resolution();
                }
                return resolution;
            }, $.$mpk_tss_reports_domain_resolution.success);
        }
        carriage_number() {
            return '' + $.$mpk_tss_stub_number(1000, 9000) + '-' + $.$mpk_tss_stub_number(1000, 9000);
        }
        load() {
            return $mpk_tss_reports_domain_mock_stub_carriage_load();
        }
        type() {
            return $mpk_tss_reports_domain_mock_stub_carriage_type();
        }
        length() {
            return $.$mpk_tss_stub_number(65, 85);
        }
        total_weight() {
            return $.$mpk_tss_stub_number(65, 85) * 1000;
        }
        measured_speed() {
            return $.$mpk_tss_stub_number(50, 55);
        }
        violation() {
            if (this.resolution() == $.$mpk_tss_reports_domain_resolution.success)
                return null;
            return this.axis().reduce((violation, axle) => {
                if (axle.violation() !== null) {
                    return axle.violation();
                }
                return violation;
            }, null);
        }
        axis() {
            return [1, 2, 3, 4].map(index => {
                return $mpk_tss_reports_domain_mock_axle.make({
                    id: $.$mol_const(String(index)),
                    axle_number: $.$mol_const(index),
                });
            });
        }
        axle(id) {
            return this.axis().find(axle => axle.id() === id);
        }
    }
    __decorate([
        $.$mpk_tss_stub_mem
    ], $mpk_tss_reports_domain_mock_carriage.prototype, "place", null);
    __decorate([
        $.$mpk_tss_stub_mem
    ], $mpk_tss_reports_domain_mock_carriage.prototype, "resolution", null);
    __decorate([
        $.$mpk_tss_stub_mem
    ], $mpk_tss_reports_domain_mock_carriage.prototype, "carriage_number", null);
    __decorate([
        $.$mpk_tss_stub_mem
    ], $mpk_tss_reports_domain_mock_carriage.prototype, "load", null);
    __decorate([
        $.$mpk_tss_stub_mem
    ], $mpk_tss_reports_domain_mock_carriage.prototype, "type", null);
    __decorate([
        $.$mpk_tss_stub_mem
    ], $mpk_tss_reports_domain_mock_carriage.prototype, "length", null);
    __decorate([
        $.$mpk_tss_stub_mem
    ], $mpk_tss_reports_domain_mock_carriage.prototype, "total_weight", null);
    __decorate([
        $.$mpk_tss_stub_mem
    ], $mpk_tss_reports_domain_mock_carriage.prototype, "measured_speed", null);
    __decorate([
        $.$mpk_tss_stub_mem
    ], $mpk_tss_reports_domain_mock_carriage.prototype, "violation", null);
    __decorate([
        $.$mpk_tss_stub_mem
    ], $mpk_tss_reports_domain_mock_carriage.prototype, "axis", null);
    __decorate([
        $.$mpk_tss_stub_mem
    ], $mpk_tss_reports_domain_mock_carriage.prototype, "axle", null);
    class $mpk_tss_reports_domain_mock_axle extends $.$mpk_tss_reports_domain_axle {
        resolution() {
            return this.wheels().reduce((resolution, wheel) => {
                if (wheel.resolution() !== $.$mpk_tss_reports_domain_resolution.success) {
                    return wheel.resolution();
                }
                return resolution;
            }, $.$mpk_tss_reports_domain_resolution.success);
        }
        violation() {
            if (this.resolution() === $.$mpk_tss_reports_domain_resolution.success)
                return null;
            return this.wheels().reduce((violation, wheel) => {
                if (wheel.violation() !== null) {
                    return wheel.violation();
                }
                return violation;
            }, null);
        }
        wheels() {
            return [1, 2].map(id => $mpk_tss_reports_domain_mock_wheel.make({
                id: $.$mol_const('' + id),
            }));
        }
        wheel(id) {
            return this.wheels().find(wheel => wheel.id() === id) || this.wheels()[0];
        }
    }
    __decorate([
        $.$mpk_tss_stub_mem
    ], $mpk_tss_reports_domain_mock_axle.prototype, "resolution", null);
    __decorate([
        $.$mpk_tss_stub_mem
    ], $mpk_tss_reports_domain_mock_axle.prototype, "violation", null);
    __decorate([
        $.$mpk_tss_stub_mem
    ], $mpk_tss_reports_domain_mock_axle.prototype, "wheels", null);
    __decorate([
        $.$mpk_tss_stub_mem
    ], $mpk_tss_reports_domain_mock_axle.prototype, "wheel", null);
    class $mpk_tss_reports_domain_mock_wheel extends $.$mpk_tss_reports_domain_wheel {
        resolution() {
            if (Math.random() > 0.999)
                return $.$mpk_tss_reports_domain_resolution.warning;
            return $.$mpk_tss_reports_domain_resolution.success;
        }
        violation() {
            if (this.resolution() === $.$mpk_tss_reports_domain_resolution.success)
                return null;
            return $mpk_tss_reports_domain_mock_stub_violation();
        }
        forces() {
            const samples_count = 10000;
            const max_x = 600;
            const base_y = 80;
            const amplitude = 5;
            const freq = 50;
            const series_x = [];
            const series_y = [];
            const ratio = max_x / samples_count;
            for (let i = 0; i < samples_count; i++) {
                const deviation = Math.random() > 0.6 ? (Math.random() * 3) : Math.random();
                const value = Number((base_y + Math.sin((freq / samples_count) * i) * amplitude * deviation).toFixed(3));
                series_x.push(Number(Number(i * ratio).toFixed(3)));
                series_y.push(value);
            }
            return [series_x, series_y];
        }
    }
    __decorate([
        $.$mpk_tss_stub_mem
    ], $mpk_tss_reports_domain_mock_wheel.prototype, "resolution", null);
    __decorate([
        $.$mpk_tss_stub_mem
    ], $mpk_tss_reports_domain_mock_wheel.prototype, "violation", null);
    __decorate([
        $.$mpk_tss_stub_mem
    ], $mpk_tss_reports_domain_mock_wheel.prototype, "forces", null);
    function $mpk_tss_reports_domain_mock_stub_carriage_type() {
        return $.$mol_stub_select_random([
            $.$mpk_tss_reports_domain_carriage_type.tank,
            $.$mpk_tss_reports_domain_carriage_type.hopper,
            $.$mpk_tss_reports_domain_carriage_type.flatcar,
            $.$mpk_tss_reports_domain_carriage_type.covered,
        ]);
    }
    function $mpk_tss_reports_domain_mock_stub_violation() {
        return $.$mol_stub_select_random([
            $.$mpk_tss_reports_domain_violation.slider,
            $.$mpk_tss_reports_domain_violation.vyscherbiny,
            $.$mpk_tss_reports_domain_violation.sink,
            $.$mpk_tss_reports_domain_violation.dent,
        ]);
    }
    function $mpk_tss_reports_domain_mock_stub_report_status() {
        return $.$mol_stub_select_random([
            $.$mpk_tss_reports_domain_delivery.preparing,
            $.$mpk_tss_reports_domain_delivery.sending,
            $.$mpk_tss_reports_domain_delivery.sent,
            $.$mpk_tss_reports_domain_delivery.error,
        ]);
    }
    function $mpk_tss_reports_domain_mock_stub_carriage_load() {
        return $.$mol_stub_select_random([
            $.$mpk_tss_reports_domain_load.free,
            $.$mpk_tss_reports_domain_load.full,
        ]);
    }
})($ || ($ = {}));
//mock.js.map
;
"use strict";
var $;
(function ($) {
    let $mol_keyboard_code;
    (function ($mol_keyboard_code) {
        $mol_keyboard_code[$mol_keyboard_code["backspace"] = 8] = "backspace";
        $mol_keyboard_code[$mol_keyboard_code["tab"] = 9] = "tab";
        $mol_keyboard_code[$mol_keyboard_code["enter"] = 13] = "enter";
        $mol_keyboard_code[$mol_keyboard_code["shift"] = 16] = "shift";
        $mol_keyboard_code[$mol_keyboard_code["ctrl"] = 17] = "ctrl";
        $mol_keyboard_code[$mol_keyboard_code["alt"] = 18] = "alt";
        $mol_keyboard_code[$mol_keyboard_code["pause"] = 19] = "pause";
        $mol_keyboard_code[$mol_keyboard_code["capsLock"] = 20] = "capsLock";
        $mol_keyboard_code[$mol_keyboard_code["escape"] = 27] = "escape";
        $mol_keyboard_code[$mol_keyboard_code["space"] = 32] = "space";
        $mol_keyboard_code[$mol_keyboard_code["pageUp"] = 33] = "pageUp";
        $mol_keyboard_code[$mol_keyboard_code["pageDown"] = 34] = "pageDown";
        $mol_keyboard_code[$mol_keyboard_code["end"] = 35] = "end";
        $mol_keyboard_code[$mol_keyboard_code["home"] = 36] = "home";
        $mol_keyboard_code[$mol_keyboard_code["left"] = 37] = "left";
        $mol_keyboard_code[$mol_keyboard_code["up"] = 38] = "up";
        $mol_keyboard_code[$mol_keyboard_code["right"] = 39] = "right";
        $mol_keyboard_code[$mol_keyboard_code["down"] = 40] = "down";
        $mol_keyboard_code[$mol_keyboard_code["insert"] = 45] = "insert";
        $mol_keyboard_code[$mol_keyboard_code["delete"] = 46] = "delete";
        $mol_keyboard_code[$mol_keyboard_code["key0"] = 48] = "key0";
        $mol_keyboard_code[$mol_keyboard_code["key1"] = 49] = "key1";
        $mol_keyboard_code[$mol_keyboard_code["key2"] = 50] = "key2";
        $mol_keyboard_code[$mol_keyboard_code["key3"] = 51] = "key3";
        $mol_keyboard_code[$mol_keyboard_code["key4"] = 52] = "key4";
        $mol_keyboard_code[$mol_keyboard_code["key5"] = 53] = "key5";
        $mol_keyboard_code[$mol_keyboard_code["key6"] = 54] = "key6";
        $mol_keyboard_code[$mol_keyboard_code["key7"] = 55] = "key7";
        $mol_keyboard_code[$mol_keyboard_code["key8"] = 56] = "key8";
        $mol_keyboard_code[$mol_keyboard_code["key9"] = 57] = "key9";
        $mol_keyboard_code[$mol_keyboard_code["A"] = 65] = "A";
        $mol_keyboard_code[$mol_keyboard_code["B"] = 66] = "B";
        $mol_keyboard_code[$mol_keyboard_code["C"] = 67] = "C";
        $mol_keyboard_code[$mol_keyboard_code["D"] = 68] = "D";
        $mol_keyboard_code[$mol_keyboard_code["E"] = 69] = "E";
        $mol_keyboard_code[$mol_keyboard_code["F"] = 70] = "F";
        $mol_keyboard_code[$mol_keyboard_code["G"] = 71] = "G";
        $mol_keyboard_code[$mol_keyboard_code["H"] = 72] = "H";
        $mol_keyboard_code[$mol_keyboard_code["I"] = 73] = "I";
        $mol_keyboard_code[$mol_keyboard_code["J"] = 74] = "J";
        $mol_keyboard_code[$mol_keyboard_code["K"] = 75] = "K";
        $mol_keyboard_code[$mol_keyboard_code["L"] = 76] = "L";
        $mol_keyboard_code[$mol_keyboard_code["M"] = 77] = "M";
        $mol_keyboard_code[$mol_keyboard_code["N"] = 78] = "N";
        $mol_keyboard_code[$mol_keyboard_code["O"] = 79] = "O";
        $mol_keyboard_code[$mol_keyboard_code["P"] = 80] = "P";
        $mol_keyboard_code[$mol_keyboard_code["Q"] = 81] = "Q";
        $mol_keyboard_code[$mol_keyboard_code["R"] = 82] = "R";
        $mol_keyboard_code[$mol_keyboard_code["S"] = 83] = "S";
        $mol_keyboard_code[$mol_keyboard_code["T"] = 84] = "T";
        $mol_keyboard_code[$mol_keyboard_code["U"] = 85] = "U";
        $mol_keyboard_code[$mol_keyboard_code["V"] = 86] = "V";
        $mol_keyboard_code[$mol_keyboard_code["W"] = 87] = "W";
        $mol_keyboard_code[$mol_keyboard_code["X"] = 88] = "X";
        $mol_keyboard_code[$mol_keyboard_code["Y"] = 89] = "Y";
        $mol_keyboard_code[$mol_keyboard_code["Z"] = 90] = "Z";
        $mol_keyboard_code[$mol_keyboard_code["metaLeft"] = 91] = "metaLeft";
        $mol_keyboard_code[$mol_keyboard_code["metaRight"] = 92] = "metaRight";
        $mol_keyboard_code[$mol_keyboard_code["select"] = 93] = "select";
        $mol_keyboard_code[$mol_keyboard_code["numpad0"] = 96] = "numpad0";
        $mol_keyboard_code[$mol_keyboard_code["numpad1"] = 97] = "numpad1";
        $mol_keyboard_code[$mol_keyboard_code["numpad2"] = 98] = "numpad2";
        $mol_keyboard_code[$mol_keyboard_code["numpad3"] = 99] = "numpad3";
        $mol_keyboard_code[$mol_keyboard_code["numpad4"] = 100] = "numpad4";
        $mol_keyboard_code[$mol_keyboard_code["numpad5"] = 101] = "numpad5";
        $mol_keyboard_code[$mol_keyboard_code["numpad6"] = 102] = "numpad6";
        $mol_keyboard_code[$mol_keyboard_code["numpad7"] = 103] = "numpad7";
        $mol_keyboard_code[$mol_keyboard_code["numpad8"] = 104] = "numpad8";
        $mol_keyboard_code[$mol_keyboard_code["numpad9"] = 105] = "numpad9";
        $mol_keyboard_code[$mol_keyboard_code["multiply"] = 106] = "multiply";
        $mol_keyboard_code[$mol_keyboard_code["add"] = 107] = "add";
        $mol_keyboard_code[$mol_keyboard_code["subtract"] = 109] = "subtract";
        $mol_keyboard_code[$mol_keyboard_code["decimal"] = 110] = "decimal";
        $mol_keyboard_code[$mol_keyboard_code["divide"] = 111] = "divide";
        $mol_keyboard_code[$mol_keyboard_code["F1"] = 112] = "F1";
        $mol_keyboard_code[$mol_keyboard_code["F2"] = 113] = "F2";
        $mol_keyboard_code[$mol_keyboard_code["F3"] = 114] = "F3";
        $mol_keyboard_code[$mol_keyboard_code["F4"] = 115] = "F4";
        $mol_keyboard_code[$mol_keyboard_code["F5"] = 116] = "F5";
        $mol_keyboard_code[$mol_keyboard_code["F6"] = 117] = "F6";
        $mol_keyboard_code[$mol_keyboard_code["F7"] = 118] = "F7";
        $mol_keyboard_code[$mol_keyboard_code["F8"] = 119] = "F8";
        $mol_keyboard_code[$mol_keyboard_code["F9"] = 120] = "F9";
        $mol_keyboard_code[$mol_keyboard_code["F10"] = 121] = "F10";
        $mol_keyboard_code[$mol_keyboard_code["F11"] = 122] = "F11";
        $mol_keyboard_code[$mol_keyboard_code["F12"] = 123] = "F12";
        $mol_keyboard_code[$mol_keyboard_code["numLock"] = 144] = "numLock";
        $mol_keyboard_code[$mol_keyboard_code["scrollLock"] = 145] = "scrollLock";
        $mol_keyboard_code[$mol_keyboard_code["semicolon"] = 186] = "semicolon";
        $mol_keyboard_code[$mol_keyboard_code["equals"] = 187] = "equals";
        $mol_keyboard_code[$mol_keyboard_code["comma"] = 188] = "comma";
        $mol_keyboard_code[$mol_keyboard_code["dash"] = 189] = "dash";
        $mol_keyboard_code[$mol_keyboard_code["period"] = 190] = "period";
        $mol_keyboard_code[$mol_keyboard_code["forwardSlash"] = 191] = "forwardSlash";
        $mol_keyboard_code[$mol_keyboard_code["graveAccent"] = 192] = "graveAccent";
        $mol_keyboard_code[$mol_keyboard_code["bracketOpen"] = 219] = "bracketOpen";
        $mol_keyboard_code[$mol_keyboard_code["slashBack"] = 220] = "slashBack";
        $mol_keyboard_code[$mol_keyboard_code["slashBackLeft"] = 226] = "slashBackLeft";
        $mol_keyboard_code[$mol_keyboard_code["bracketClose"] = 221] = "bracketClose";
        $mol_keyboard_code[$mol_keyboard_code["quoteSingle"] = 222] = "quoteSingle";
    })($mol_keyboard_code = $.$mol_keyboard_code || ($.$mol_keyboard_code = {}));
})($ || ($ = {}));
//code.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/skin/skin.css", ":root {\n\t--mol_skin_font: 1rem/1.5 \"-apple-system\", BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif;\n\t--mol_skin_font_monospace: Monaco, monospace;\n}\n\n/* Deprecated, use mol_theme instead */\n:root {\n\n\t--mol_skin_outline: 0 0 0 1px var(--mol_theme_line);\n\t\n\t--mol_skin_base: #3a8ccb;\n\t--mol_skin_base_text: white;\n\t\n\t--mol_skin_current: var(--mol_skin_base);\n\t--mol_skin_current_text: white;\n\t--mol_skin_current_line: #1471b8;\n\t\n\t--mol_skin_button: var(--mol_skin_card);\n\t--mol_skin_hover: rgba( 0 , 0 , 0 , .05 );\n\t\n\t--mol_skin_round: 0px;\n\t\n\t--mol_skin_focus_line: rgba( 0 , 0 , 0 , .2 );\n\t--mol_skin_focus_outline: 0 0 0 1px var(--mol_skin_focus_line);\n\t\n\t--mol_skin_float: var(--mol_skin_focus_outline);\n\n\t--mol_skin_passive: #eee;\n\t--mol_skin_passive_text: rgba( 0 , 0 , 0 , .5 );\n\t\n\t--mol_skin_light: #fcfcfc;\n\t--mol_skin_light_line: rgba( 230 , 230 , 230 , .75 );\n\t--mol_skin_light_text: rgba( 0 , 0 , 0 , .9 );\n\t--mol_skin_light_hover: #f7f7f7;\n\t--mol_skin_light_outline: 0 0 0 1px var(--mol_theme_line);\n\n\t--mol_skin_card: var(--mol_theme_back);\n\t--mol_skin_card_text: var(--mol_theme_text);\n\t\n\t--mol_skin_accent: #dd0e3e;\n\t--mol_skin_accent_text: white;\n\t--mol_skin_accent_hover: #c50d37;\n\n\t--mol_skin_warn: rgba( 255 , 50 , 50 , 0.75 );\n\t--mol_skin_warn_text: white;\n\t--mol_skin_warn_hover: color( var(--mol_skin_warn) lightness(-5%) );\n\n\t--mol_skin_good: #96DAA9;\n\t--mol_skin_good_text: black;\n\n\t--mol_skin_bad: #CC5252;\n\t--mol_skin_bad_text: white;\n}\n");
})($ || ($ = {}));
//skin.css.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_window extends $.$mol_object {
        static size(next, force) {
            return next || {
                width: self.innerWidth,
                height: self.innerHeight,
            };
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_window, "size", null);
    $.$mol_window = $mol_window;
    self.addEventListener('resize', $.$mol_fiber_root($.$mol_log_group(`$mol_window resize`, () => {
        $mol_window.size(undefined, $.$mol_mem_force_cache);
    })));
})($ || ($ = {}));
//window.web.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_atom2_autorun(calculate) {
        return $.$mol_atom2.make(atom => {
            atom.calculate = calculate;
            atom.obsolete_slaves = atom.schedule;
            atom.doubt_slaves = atom.schedule;
            atom[Symbol.toStringTag] = calculate[Symbol.toStringTag] || calculate.name || '$mol_atom2_autorun';
            atom.schedule();
        });
    }
    $.$mol_atom2_autorun = $mol_atom2_autorun;
})($ || ($ = {}));
//autorun.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_defer extends $.$mol_object {
        constructor(run) {
            super();
            this.run = run;
            $mol_defer.add(this);
        }
        destructor() {
            $mol_defer.drop(this);
        }
        static schedule() {
            if (this.timer)
                return;
            this.timer = this.scheduleNative(() => {
                this.timer = null;
                this.run();
            });
        }
        static unschedule() {
            if (!this.timer)
                return;
            cancelAnimationFrame(this.timer);
            this.timer = null;
        }
        static add(defer) {
            this.all.push(defer);
            this.schedule();
        }
        static drop(defer) {
            var index = this.all.indexOf(defer);
            if (index >= 0)
                this.all.splice(index, 1);
        }
        static run() {
            if (this.all.length === 0)
                return;
            this.schedule();
            for (var defer; defer = this.all.shift();)
                defer.run();
            //this.unschedule()
        }
    }
    $mol_defer.all = [];
    $mol_defer.timer = null;
    $mol_defer.scheduleNative = (typeof requestAnimationFrame == 'function')
        ? handler => requestAnimationFrame(handler)
        : handler => setTimeout(handler, 16);
    $.$mol_defer = $mol_defer;
})($ || ($ = {}));
//defer.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    let $mol_view_selection = class $mol_view_selection extends $.$mol_object {
        static focused(next) {
            if (next === undefined)
                return [];
            const parents = [];
            let element = next[0];
            while (element) {
                parents.push(element);
                element = element.parentNode;
            }
            new $.$mol_defer($.$mol_log2.func(() => {
                const element = $.$mol_atom2_value(() => this.focused())[0];
                if (element)
                    element.focus();
                else
                    $.$mol_dom_context.blur();
            }));
            return parents;
        }
        static focus(event) {
            this.focused([event.target]);
        }
        static blur(event) {
            this.focused([]);
        }
    };
    __decorate([
        $.$mol_mem
    ], $mol_view_selection, "focused", null);
    __decorate([
        $.$mol_log2.method
    ], $mol_view_selection, "focus", null);
    __decorate([
        $.$mol_log2.method
    ], $mol_view_selection, "blur", null);
    $mol_view_selection = __decorate([
        $.$mol_class
    ], $mol_view_selection);
    $.$mol_view_selection = $mol_view_selection;
})($ || ($ = {}));
//selection.js.map
;
"use strict";
var $;
(function ($) {
    if ($.$mol_dom_context.document) {
        $.$mol_dom_context.document.addEventListener('focus', (event) => {
            new $.$mol_after_tick($.$mol_fiber_root(() => $.$mol_view_selection.focus(event)));
        }, true);
        $.$mol_dom_context.document.addEventListener('blur', (event) => {
            new $.$mol_after_tick($.$mol_fiber_root(() => $.$mol_view_selection.blur(event)));
        }, true);
    }
})($ || ($ = {}));
//selection.web.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_dom_render_attributes(el, attrs) {
        for (let name in attrs) {
            let val = attrs[name];
            if (val === null || val === false)
                el.removeAttribute(name);
            else
                el.setAttribute(name, String(val));
        }
    }
    $.$mol_dom_render_attributes = $mol_dom_render_attributes;
})($ || ($ = {}));
//attributes.js.map
;
"use strict";
var $;
(function ($) {
    const cacthed = new WeakMap();
    function $mol_fail_catch(error) {
        if (cacthed.get(error))
            return false;
        cacthed.set(error, true);
        return true;
    }
    $.$mol_fail_catch = $mol_fail_catch;
})($ || ($ = {}));
//catch.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_dom_render_styles(el, styles) {
        for (let name in styles) {
            let val = styles[name];
            const style = el.style;
            const cur = style[name];
            if (typeof val === 'number') {
                if (parseFloat(cur) == val)
                    continue;
                style[name] = `${val}px`;
            }
            if (cur !== val)
                style[name] = val;
        }
    }
    $.$mol_dom_render_styles = $mol_dom_render_styles;
})($ || ($ = {}));
//styles.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_dom_render_fields(el, fields) {
        for (let key in fields) {
            const val = fields[key];
            if (val === undefined)
                continue;
            // if( el[ key ] === val ) continue
            el[key] = val;
        }
    }
    $.$mol_dom_render_fields = $mol_dom_render_fields;
})($ || ($ = {}));
//fields.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_dom_render_children(el, childNodes) {
        const node_set = new Set(childNodes);
        let nextNode = el.firstChild;
        for (let view of childNodes) {
            if (view == null)
                continue;
            if (view instanceof $.$mol_dom_context.Node) {
                while (true) {
                    if (!nextNode) {
                        el.appendChild(view);
                        break;
                    }
                    if (nextNode == view) {
                        nextNode = nextNode.nextSibling;
                        break;
                    }
                    else {
                        if (node_set.has(nextNode)) {
                            el.insertBefore(view, nextNode);
                            break;
                        }
                        else {
                            const nn = nextNode.nextSibling;
                            el.removeChild(nextNode);
                            nextNode = nn;
                        }
                    }
                }
            }
            else {
                if (nextNode && nextNode.nodeName === '#text') {
                    const str = String(view);
                    if (nextNode.nodeValue !== str)
                        nextNode.nodeValue = str;
                    nextNode = nextNode.nextSibling;
                }
                else {
                    const textNode = $.$mol_dom_context.document.createTextNode(String(view));
                    el.insertBefore(textNode, nextNode);
                }
            }
        }
        while (nextNode) {
            const currNode = nextNode;
            nextNode = currNode.nextSibling;
            el.removeChild(currNode);
        }
    }
    $.$mol_dom_render_children = $mol_dom_render_children;
})($ || ($ = {}));
//children.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_func_name(func) {
        return func.name;
    }
    $.$mol_func_name = $mol_func_name;
    function $mol_func_name_from(target, source) {
        Object.defineProperty(target, 'name', { value: source.name });
        return target;
    }
    $.$mol_func_name_from = $mol_func_name_from;
})($ || ($ = {}));
//name.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_deprecated(message) {
        return (host, field, descr) => {
            const value = descr.value;
            descr.value = function $mol_deprecated_wrapper(...args) {
                console.warn(`${host.constructor.name}::${field} is deprecated. ${message}`);
                return value.call(this, ...args);
            };
        };
    }
    $.$mol_deprecated = $mol_deprecated;
})($ || ($ = {}));
//deprecated.js.map
;
"use strict";
//extract.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    function $mol_view_visible_width() {
        return $.$mol_window.size().width;
    }
    $.$mol_view_visible_width = $mol_view_visible_width;
    function $mol_view_visible_height() {
        return $.$mol_window.size().height;
    }
    $.$mol_view_visible_height = $mol_view_visible_height;
    function $mol_view_state_key(suffix) {
        return suffix;
    }
    $.$mol_view_state_key = $mol_view_state_key;
    /// Reactive statefull lazy ViewModel
    class $mol_view extends $.$mol_object {
        static Root(id) {
            return new this;
        }
        autorun() {
            return $.$mol_atom2_autorun(() => {
                this.dom_tree();
                document.title = this.title();
                return this;
            });
        }
        static autobind() {
            const nodes = $.$mol_dom_context.document.querySelectorAll('[mol_view_root]');
            for (let i = nodes.length - 1; i >= 0; --i) {
                const name = nodes.item(i).getAttribute('mol_view_root');
                const View = $[name];
                if (!View) {
                    console.error(`Can not attach view. Class not found: ${name}`);
                    continue;
                }
                const view = View.Root(i);
                view.dom_node(nodes.item(i));
                view.autorun();
            }
        }
        title() {
            return this.constructor.toString();
        }
        focused(next) {
            let node = this.dom_node();
            const value = $.$mol_view_selection.focused(next === undefined ? undefined : (next ? [node] : []));
            return value.indexOf(node) !== -1;
        }
        state_key(suffix = '') {
            return this.$.$mol_view_state_key(suffix);
        }
        /// Name of element that created when element not found in DOM
        dom_name() {
            return this.constructor.toString().replace('$', '') || 'div';
        }
        /// NameSpace of element that created when element not found in DOM
        dom_name_space() { return 'http://www.w3.org/1999/xhtml'; }
        /// Raw child views
        sub() {
            return [];
        }
        /// Visible sub views with defined ambient context
        /// Render all by default
        sub_visible() {
            const sub = this.sub();
            if (!sub)
                return sub;
            const context = this.$$;
            sub.forEach(child => {
                if (child instanceof $mol_view) {
                    child.$ = context;
                }
            });
            return sub;
        }
        /// Minimal width that used for lazy rendering
        minimal_width() {
            const sub = this.sub();
            if (!sub)
                return 0;
            let min = 0;
            sub.forEach(view => {
                if (view instanceof $mol_view) {
                    min = Math.max(min, view.minimal_width());
                }
            });
            return min;
        }
        /// Minimal height that used for lazy rendering
        minimal_height() {
            return this.content_height();
        }
        content_height() {
            const sub = this.sub();
            if (!sub)
                return 0;
            let min = 0;
            sub.forEach(view => {
                if (view instanceof $mol_view) {
                    min = Math.max(min, view.minimal_height());
                }
            });
            return min;
        }
        dom_id() {
            return this.toString();
        }
        dom_node(next) {
            const node = next || $.$mol_dom_context.document.createElementNS(this.dom_name_space(), this.dom_name());
            const id = this.dom_id();
            node.setAttribute('id', id);
            node.toString = $.$mol_const('<#' + id + '>');
            $.$mol_dom_render_attributes(node, this.attr_static());
            const events = this.event();
            for (let event_name in events) {
                node.addEventListener(event_name, $.$mol_log2.func($.$mol_fiber_root(events[event_name])), { passive: false });
            }
            return node;
        }
        dom_tree(next) {
            const node = this.dom_node(next);
            try {
                $.$mol_dom_render_attributes(node, { mol_view_error: null });
                for (let plugin of this.plugins()) {
                    if (plugin instanceof $.$mol_plugin) {
                        plugin.render();
                    }
                }
                this.render();
            }
            catch (error) {
                const need_catch = $.$mol_fail_catch(error);
                if (need_catch) {
                    $.$mol_dom_render_attributes(node, { mol_view_error: error.name || error.constructor.name });
                }
                if (error instanceof Promise)
                    $.$mol_fail_hidden(error);
                if (need_catch) {
                    try {
                        void (node.innerText = error.message);
                    }
                    catch (e) { }
                    console.error(error);
                }
            }
            return node;
        }
        dom_node_actual() {
            const node = this.dom_node();
            const attr = this.attr();
            const style = this.style();
            const fields = this.field();
            $.$mol_dom_render_attributes(node, attr);
            $.$mol_dom_render_styles(node, style);
            $.$mol_dom_render_fields(node, fields);
            return node;
        }
        render() {
            const node = this.dom_node_actual();
            const sub = this.sub_visible();
            const nodes = sub.map(child => {
                if (child == null)
                    return null;
                return (child instanceof $mol_view) ? child.dom_node() : String(child);
            });
            $.$mol_dom_render_children(node, nodes);
            for (const el of sub)
                if (el && typeof el === 'object' && 'dom_tree' in el)
                    el['dom_tree']();
        }
        static view_classes() {
            const proto = this.prototype;
            let current = proto;
            const classes = [];
            while (current) {
                classes.push(current.constructor);
                if (!(current instanceof $mol_view))
                    break;
                current = Object.getPrototypeOf(current);
            }
            return classes;
        }
        view_names_owned() {
            const names = [];
            let owner = $.$mol_owning_get(this, $mol_view);
            if (owner instanceof $mol_view) {
                const suffix = this[$.$mol_object_field];
                const suffix2 = '_' + suffix[0].toLowerCase() + suffix.substring(1);
                for (let Class of owner.constructor.view_classes()) {
                    if (suffix in Class.prototype)
                        names.push($.$mol_func_name(Class) + suffix2);
                    else
                        break;
                }
                for (let prefix of owner.view_names_owned()) {
                    names.push(prefix + suffix2);
                }
            }
            return names;
        }
        view_names() {
            const names = [];
            for (let name of this.view_names_owned()) {
                if (names.indexOf(name) < 0)
                    names.push(name);
            }
            for (let Class of this.constructor.view_classes()) {
                const name = $.$mol_func_name(Class);
                if (!name)
                    continue;
                if (names.indexOf(name) < 0)
                    names.push(name);
            }
            return names;
        }
        attr_static() {
            let attrs = {};
            for (let name of this.view_names())
                attrs[name.replace(/\$/g, '').replace(/^(?=\d)/, '_').toLowerCase()] = '';
            return attrs;
        }
        attr() {
            return {};
        }
        style() {
            return {};
        }
        field() {
            return {};
        }
        event() {
            return {};
        }
        event_async() {
            return {};
        }
        plugins() {
            return [];
        }
        [$.$mol_dev_format_head]() {
            return $.$mol_dev_format_span({}, $.$mol_dev_format_native(this), $.$mol_dev_format_auto($.$mol_atom2_value(() => this.sub())));
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_view.prototype, "autorun", null);
    __decorate([
        $.$mol_mem
    ], $mol_view.prototype, "focused", null);
    __decorate([
        $.$mol_mem
    ], $mol_view.prototype, "minimal_width", null);
    __decorate([
        $.$mol_mem
    ], $mol_view.prototype, "content_height", null);
    __decorate([
        $.$mol_mem
    ], $mol_view.prototype, "dom_node", null);
    __decorate([
        $.$mol_mem
    ], $mol_view.prototype, "dom_tree", null);
    __decorate([
        $.$mol_mem
    ], $mol_view.prototype, "dom_node_actual", null);
    __decorate([
        $.$mol_mem
    ], $mol_view.prototype, "view_names", null);
    __decorate([
        $.$mol_deprecated('Use $mol_view::event instead.')
    ], $mol_view.prototype, "event_async", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_view, "Root", null);
    __decorate([
        $.$mol_mem
    ], $mol_view, "view_classes", null);
    $.$mol_view = $mol_view;
})($ || ($ = {}));
//view.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/view/view.css", "[mol_view] {\n\ttransition-property: background-color, height, width, min-height, min-width, max-width, max-height, transform;\n\ttransition-duration: .2s;\n\ttransition-timing-function: ease-out;\n\t-webkit-appearance: none;\n\tword-break: break-word;\n}\n\n[mol_view] > * {\n\tword-break: inherit;\n}\n\n[mol_view_root] {\n\tmargin: 0;\n\tpadding: 0;\n\twidth: 100%;\n\theight: 100%;\n\tbox-sizing: border-box;\n\tfont: var(--mol_skin_font);\n\tbackground: var(--mol_theme_back);\n\tcolor: var(--mol_theme_text);\n}\n\n[mol_view][mol_view_error]:not([mol_view_error=\"Promise\"]) {\n\tbackground-image: repeating-linear-gradient(\n\t\t135deg,\n\t\trgba(255,220,220,1),\n\t\trgba(255,220,220,1) 11px,\n\t\trgba(255,255,220,1) 10px,\n\t\trgba(255,255,220,1) 20px\n\t);\n\tbackground-size: 28px 28px;\n\tcolor: black;\n}\n[mol_view][mol_view_error] * {\n\tbackground: none;\n}\n\n@keyframes mol_view_wait_move {\n\tfrom {\n\t\tbackground-position: 0 0;\n\t}\n\tto {\n\t\tbackground-position: 200vmax 0;\n\t}\n}\n\n@keyframes mol_view_wait_show {\n\tto {\n\t\tbackground-image: repeating-linear-gradient(\n\t\t\t45deg,\n\t\t\thsla( 0 , 0% , 50% , .1 ) 0% ,\n\t\t\thsla( 0 , 0% , 50% , 0 ) 5% ,\n\t\t\thsla( 0 , 0% , 50% , 0 ) 45% ,\n\t\t\thsla( 0 , 0% , 50% , .1 ) 50% ,\n\t\t\thsla( 0 , 0% , 50% , 0 ) 55% ,\n\t\t\thsla( 0 , 0% , 50% , 0 ) 95% ,\n\t\t\thsla( 0 , 0% , 50% , .1 ) 100%\n\t\t);\n\t\tbackground-size: 200vmax 200vmax;\n\t}\n}\n\n[mol_view][mol_view_error=\"Promise\"] {\n\tanimation: mol_view_wait_show .5s .5s linear forwards , mol_view_wait_move 1s linear infinite;\n}\n\n[mol_view][mol_view_error=\"Promise\"] * {\n\t\tbackground: none;\n}\n");
})($ || ($ = {}));
//view.css.js.map
;
"use strict";
var $;
(function ($) {
    if ($.$mol_dom_context.document) {
        /// Autoattach view roots to loaded DOM.
        const event_name = self.cordova ? 'deviceready' : 'DOMContentLoaded';
        $.$mol_dom_context.document.addEventListener(event_name, $.$mol_fiber_root($.$mol_log2.func((event) => {
            $.$mol_view.autobind();
            $.$mol_defer.run();
        })));
    }
})($ || ($ = {}));
//view.web.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_string extends $.$mol_view {
        /**
         *  ```
         *  dom_name \input
         *  ```
         **/
        dom_name() {
            return "input";
        }
        /**
         *  ```
         *  enabled true
         *  ```
         **/
        enabled() {
            return true;
        }
        /**
         *  ```
         *  debounce 0
         *  ```
         **/
        debounce() {
            return 0;
        }
        /**
         *  ```
         *  minimal_height 40
         *  ```
         **/
        minimal_height() {
            return 40;
        }
        /**
         *  ```
         *  autocomplete false
         *  ```
         **/
        autocomplete() {
            return false;
        }
        /**
         *  ```
         *  field *
         *  	^
         *  	disabled <= disabled
         *  	value <= value_changed?val
         *  	placeholder <= hint
         *  	type <= type?val
         *  	spellcheck <= spellcheck
         *  	autocomplete <= autocomplete_native
         *  ```
         **/
        field() {
            return (Object.assign(Object.assign({}, super.field()), { "disabled": this.disabled(), "value": this.value_changed(), "placeholder": this.hint(), "type": this.type(), "spellcheck": this.spellcheck(), "autocomplete": this.autocomplete_native() }));
        }
        /**
         *  ```
         *  disabled false
         *  ```
         **/
        disabled() {
            return false;
        }
        /**
         *  ```
         *  value_changed?val <=> value?val
         *  ```
         **/
        value_changed(val, force) {
            return this.value(val);
        }
        /**
         *  ```
         *  value?val \
         *  ```
         **/
        value(val, force) {
            return (val !== void 0) ? val : "";
        }
        /**
         *  ```
         *  hint \
         *  ```
         **/
        hint() {
            return "";
        }
        /**
         *  ```
         *  type?val \text
         *  ```
         **/
        type(val, force) {
            return (val !== void 0) ? val : "text";
        }
        /**
         *  ```
         *  spellcheck false
         *  ```
         **/
        spellcheck() {
            return false;
        }
        /**
         *  ```
         *  autocomplete_native \
         *  ```
         **/
        autocomplete_native() {
            return "";
        }
        /**
         *  ```
         *  attr *
         *  	^
         *  	maxlength <= length_max
         *  ```
         **/
        attr() {
            return (Object.assign(Object.assign({}, super.attr()), { "maxlength": this.length_max() }));
        }
        /**
         *  ```
         *  length_max Infinity
         *  ```
         **/
        length_max() {
            return Infinity;
        }
        /**
         *  ```
         *  event *
         *  	^
         *  	input?event <=> event_change?event
         *  	keydown?event <=> event_key_press?event
         *  ```
         **/
        event() {
            return (Object.assign(Object.assign({}, super.event()), { "input": (event) => this.event_change(event), "keydown": (event) => this.event_key_press(event) }));
        }
        /**
         *  ```
         *  event_change?event null
         *  ```
         **/
        event_change(event, force) {
            return (event !== void 0) ? event : null;
        }
        /**
         *  ```
         *  event_key_press?event null
         *  ```
         **/
        event_key_press(event, force) {
            return (event !== void 0) ? event : null;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_string.prototype, "value_changed", null);
    __decorate([
        $.$mol_mem
    ], $mol_string.prototype, "value", null);
    __decorate([
        $.$mol_mem
    ], $mol_string.prototype, "type", null);
    __decorate([
        $.$mol_mem
    ], $mol_string.prototype, "event_change", null);
    __decorate([
        $.$mol_mem
    ], $mol_string.prototype, "event_key_press", null);
    $.$mol_string = $mol_string;
})($ || ($ = {}));
//string.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_string extends $.$mol_string {
            // _timer = null as any
            event_change(next) {
                if (!next)
                    return;
                // clearTimeout( this._timer )
                // this._timer = setTimeout( $mol_log_group( `${ this }.event_change()` , () => {
                this.value(next.target.value);
                // } ) , this.debounce() )
            }
            event_key_press(next) {
                if (!next)
                    return;
                if (next.keyCode === $.$mol_keyboard_code.enter) {
                    this.value(next.target.value);
                }
            }
            disabled() {
                return !this.enabled();
            }
            autocomplete_native() {
                return this.autocomplete() ? 'on' : 'off';
            }
        }
        $$.$mol_string = $mol_string;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//string.view.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/string/string.view.css", "[mol_string] {\n\tbox-sizing: border-box;\n\toutline-offset: 0;\n\tborder: none;\n\tborder-radius: var(--mol_skin_round);\n\twhite-space: nowrap;\n\toverflow: hidden;\n\tpadding: .5rem 1rem;\n\ttext-align: left;\n\tposition: relative;\n\tz-index: 0;\n\tfont: inherit;\n\tflex: 0 1 auto;\n\twidth: 100%;\n\tbackground: var(--mol_theme_field);\n\tcolor: var(--mol_theme_text);\n\tbox-shadow: inset 0 0 0 .5px var(--mol_theme_line);\n\tmargin: 0;\n}\n\n[mol_string]:disabled {\n\tbackground-color: transparent;\n}\n\n[mol_string]:focus {\n\toutline: none;\n\tz-index: 1;\n\tbox-shadow: inset 0 0 0 .5px var(--mol_theme_focus);\n}\n\n[mol_string]::-ms-clear {\n\tdisplay: none;\n}\n");
})($ || ($ = {}));
//string.view.css.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_after_timeout extends $.$mol_object2 {
        constructor(delay, task) {
            super();
            this.delay = delay;
            this.task = task;
            this.id = setTimeout(task, delay);
        }
        destructor() {
            clearTimeout(this.id);
        }
    }
    $.$mol_after_timeout = $mol_after_timeout;
})($ || ($ = {}));
//timeout.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_state_time extends $.$mol_object {
        static now(precision = 0, next) {
            if (precision > 0) {
                new $.$mol_after_timeout(precision, $.$mol_atom2.current.fresh);
            }
            else {
                new $.$mol_after_frame($.$mol_atom2.current.fresh);
            }
            return Date.now();
        }
    }
    __decorate([
        $.$mol_mem_key
    ], $mol_state_time, "now", null);
    $.$mol_state_time = $mol_state_time;
})($ || ($ = {}));
//time.js.map
;
"use strict";
var $;
(function ($) {
    let canvas;
    function $mol_font_canvas(next = canvas) {
        if (!next)
            next = $.$mol_dom_context.document.createElement('canvas').getContext('2d');
        return canvas = next;
    }
    $.$mol_font_canvas = $mol_font_canvas;
})($ || ($ = {}));
//canvas.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_font_measure(size, face, text) {
        const canvas = $.$mol_font_canvas();
        canvas.font = size + 'px ' + face;
        return canvas.measureText(text).width;
    }
    $.$mol_font_measure = $mol_font_measure;
})($ || ($ = {}));
//measure.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_svg extends $.$mol_view {
        /**
         *  ```
         *  dom_name \svg
         *  ```
         **/
        dom_name() {
            return "svg";
        }
        /**
         *  ```
         *  dom_name_space \http://www.w3.org/2000/svg
         *  ```
         **/
        dom_name_space() {
            return "http://www.w3.org/2000/svg";
        }
        /**
         *  ```
         *  text_width?text 0
         *  ```
         **/
        text_width(text, force) {
            return (text !== void 0) ? text : 0;
        }
        /**
         *  ```
         *  font_size 16
         *  ```
         **/
        font_size() {
            return 16;
        }
        /**
         *  ```
         *  font_family \
         *  ```
         **/
        font_family() {
            return "";
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_svg.prototype, "text_width", null);
    $.$mol_svg = $mol_svg;
})($ || ($ = {}));
//svg.view.tree.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_svg extends $.$mol_svg {
            computed_style() {
                const win = this.$.$mol_dom_context;
                const style = win.getComputedStyle(this.dom_node());
                if (!style['font-size'])
                    $.$mol_state_time.now();
                return style;
            }
            font_size() {
                return parseInt(this.computed_style()['font-size']) || 16;
            }
            font_family() {
                return this.computed_style()['font-family'];
            }
            text_width(text) {
                return $.$mol_font_measure(this.font_size(), this.font_family(), text);
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_svg.prototype, "computed_style", null);
        __decorate([
            $.$mol_mem
        ], $mol_svg.prototype, "font_size", null);
        __decorate([
            $.$mol_mem
        ], $mol_svg.prototype, "font_family", null);
        $$.$mol_svg = $mol_svg;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//svg.view.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/svg/root/root.view.css", "[mol_svg_root] {\n\toverflow: hidden;\n}\n");
})($ || ($ = {}));
//root.view.css.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_svg_root extends $.$mol_svg {
        /**
         *  ```
         *  dom_name \svg
         *  ```
         **/
        dom_name() {
            return "svg";
        }
        /**
         *  ```
         *  attr *
         *  	^
         *  	viewBox <= view_box
         *  	preserveAspectRatio <= aspect
         *  ```
         **/
        attr() {
            return (Object.assign(Object.assign({}, super.attr()), { "viewBox": this.view_box(), "preserveAspectRatio": this.aspect() }));
        }
        /**
         *  ```
         *  view_box \0 0 100 100
         *  ```
         **/
        view_box() {
            return "0 0 100 100";
        }
        /**
         *  ```
         *  aspect \xMidYMid
         *  ```
         **/
        aspect() {
            return "xMidYMid";
        }
    }
    $.$mol_svg_root = $mol_svg_root;
})($ || ($ = {}));
//root.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_svg_path extends $.$mol_svg {
        /**
         *  ```
         *  dom_name \path
         *  ```
         **/
        dom_name() {
            return "path";
        }
        /**
         *  ```
         *  attr *
         *  	^
         *  	d <= geometry
         *  ```
         **/
        attr() {
            return (Object.assign(Object.assign({}, super.attr()), { "d": this.geometry() }));
        }
        /**
         *  ```
         *  geometry \
         *  ```
         **/
        geometry() {
            return "";
        }
    }
    $.$mol_svg_path = $mol_svg_path;
})($ || ($ = {}));
//path.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/icon/icon.view.css", "[mol_icon] {\n\tfill: currentColor;\n\tstroke: none;\n\twidth: 1em;\n\theight: 1em;\n\tflex: 0 0 auto;\n\tvertical-align: -.1em;\n\twill-change: transform;\n}\n");
})($ || ($ = {}));
//icon.view.css.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_icon extends $.$mol_svg_root {
        /**
         *  ```
         *  view_box \0 0 24 24
         *  ```
         **/
        view_box() {
            return "0 0 24 24";
        }
        /**
         *  ```
         *  minimal_width 16
         *  ```
         **/
        minimal_width() {
            return 16;
        }
        /**
         *  ```
         *  minimal_height 16
         *  ```
         **/
        minimal_height() {
            return 16;
        }
        /**
         *  ```
         *  sub / <= Path
         *  ```
         **/
        sub() {
            return [this.Path()];
        }
        /**
         *  ```
         *  Path $mol_svg_path geometry <= path
         *  ```
         **/
        Path() {
            return ((obj) => {
                obj.geometry = () => this.path();
                return obj;
            })(new this.$.$mol_svg_path());
        }
        /**
         *  ```
         *  path \
         *  ```
         **/
        path() {
            return "";
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_icon.prototype, "Path", null);
    $.$mol_icon = $mol_icon;
})($ || ($ = {}));
//icon.view.tree.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_button extends $.$mol_view {
        /**
         *  ```
         *  enabled true
         *  ```
         **/
        enabled() {
            return true;
        }
        /**
         *  ```
         *  minimal_height 40
         *  ```
         **/
        minimal_height() {
            return 40;
        }
        /**
         *  ```
         *  click?event null
         *  ```
         **/
        click(event, force) {
            return (event !== void 0) ? event : null;
        }
        /**
         *  ```
         *  event_click?event null
         *  ```
         **/
        event_click(event, force) {
            return (event !== void 0) ? event : null;
        }
        /**
         *  ```
         *  event *
         *  	^
         *  	click?event <=> event_activate?event
         *  	keypress?event <=> event_key_press?event
         *  ```
         **/
        event() {
            return (Object.assign(Object.assign({}, super.event()), { "click": (event) => this.event_activate(event), "keypress": (event) => this.event_key_press(event) }));
        }
        /**
         *  ```
         *  event_activate?event null
         *  ```
         **/
        event_activate(event, force) {
            return (event !== void 0) ? event : null;
        }
        /**
         *  ```
         *  event_key_press?event null
         *  ```
         **/
        event_key_press(event, force) {
            return (event !== void 0) ? event : null;
        }
        /**
         *  ```
         *  attr *
         *  	^
         *  	disabled <= disabled
         *  	role \button
         *  	tabindex <= tab_index
         *  	title <= hint
         *  ```
         **/
        attr() {
            return (Object.assign(Object.assign({}, super.attr()), { "disabled": this.disabled(), "role": "button", "tabindex": this.tab_index(), "title": this.hint() }));
        }
        /**
         *  ```
         *  disabled false
         *  ```
         **/
        disabled() {
            return false;
        }
        /**
         *  ```
         *  tab_index 0
         *  ```
         **/
        tab_index() {
            return 0;
        }
        /**
         *  ```
         *  hint \
         *  ```
         **/
        hint() {
            return "";
        }
        /**
         *  ```
         *  sub /$mol_view_content <= title
         *  ```
         **/
        sub() {
            return [this.title()];
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_button.prototype, "click", null);
    __decorate([
        $.$mol_mem
    ], $mol_button.prototype, "event_click", null);
    __decorate([
        $.$mol_mem
    ], $mol_button.prototype, "event_activate", null);
    __decorate([
        $.$mol_mem
    ], $mol_button.prototype, "event_key_press", null);
    $.$mol_button = $mol_button;
})($ || ($ = {}));
//button.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_button extends $.$mol_button {
            disabled() {
                return !this.enabled();
            }
            event_activate(next) {
                if (!next)
                    return;
                if (!this.enabled())
                    return;
                this.event_click(next);
                this.click(next);
            }
            event_key_press(event) {
                if (event.keyCode === $.$mol_keyboard_code.enter) {
                    return this.event_activate(event);
                }
            }
            tab_index() {
                return this.enabled() ? super.tab_index() : -1;
            }
        }
        $$.$mol_button = $mol_button;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//button.view.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/button/button.view.css", "[mol_button] {\n\tborder: none;\n\tfont: inherit;\n\tbackground-color: none;\n\tdisplay: inline-flex;\n\tflex-shrink: 0;\n\ttext-decoration: inherit;\n\tcursor: inherit;\n\tposition: relative;\n\tbox-sizing: border-box;\n\tword-break: normal;\n\tcursor: default;\n}\n[mol_button]:focus {\n\toutline: none;\n}\n\n[mol_button_typed] {\n\tjustify-content: center;\n\talign-content: center;\n\talign-items: center;\n\tvertical-align: middle;\n\ttext-align: center;\n\tpadding: .5rem 1rem;\n\tborder-radius: var(--mol_skin_round);\n}\n\n[mol_button_typed][disabled] {\n\tcolor: var(--mol_theme_text);\n\tpointer-events: none;\n}\n\n[mol_button_major] {\n\tbox-shadow: 0 0 0 1px var(--mol_theme_back);\n}\n\n[mol_button_minor] {\n\tcolor: var(--mol_theme_control);\n}\n\n[mol_button_major][disabled] {\n\topacity: .5;\n}\n\n[mol_button_typed]:hover ,\n[mol_button_typed]:focus {\n\tcursor: pointer;\n\tbackground-color: var(--mol_theme_hover);\n}\n");
})($ || ($ = {}));
//button.view.css.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_button_typed extends $.$mol_button {
    }
    $.$mol_button_typed = $mol_button_typed;
})($ || ($ = {}));
(function ($) {
    class $mol_button_major extends $.$mol_button_typed {
        /**
         *  ```
         *  attr *
         *  	^
         *  	mol_theme \$mol_theme_accent
         *  ```
         **/
        attr() {
            return (Object.assign(Object.assign({}, super.attr()), { "mol_theme": "$mol_theme_accent" }));
        }
    }
    $.$mol_button_major = $mol_button_major;
})($ || ($ = {}));
(function ($) {
    class $mol_button_minor extends $.$mol_button_typed {
    }
    $.$mol_button_minor = $mol_button_minor;
})($ || ($ = {}));
//button_types.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_offline(uri = 'web.js') {
        if (typeof window === 'undefined') {
            self.addEventListener('install', (event) => {
                self['skipWaiting']();
            });
            self.addEventListener('activate', (event) => {
                self['clients'].claim();
                console.info('$mol_offline activated');
            });
            self.addEventListener('fetch', (event) => {
                event.respondWith(fetch(event.request)
                    .then(response => {
                    caches.open('v1')
                        .then(cache => cache.put(event.request, response));
                    return response.clone();
                })
                    .catch(error => {
                    return caches.match(event.request)
                        .catch(error2 => $.$mol_fail_hidden(error));
                }));
            });
            self.addEventListener('beforeinstallprompt', (event) => {
                console.log(event);
                event.prompt();
            });
        }
        else {
            if (navigator.serviceWorker)
                navigator.serviceWorker.register(uri);
            else if (location.protocol === 'http:')
                console.warn('HTTPS is required for service workers.');
            else
                console.warn('Service Worker is not supported.');
        }
    }
    $.$mol_offline = $mol_offline;
})($ || ($ = {}));
//offline.web.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_offline();
})($ || ($ = {}));
//install.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_plugin extends $.$mol_view {
        dom_node(next) {
            const node = next || $.$mol_owning_get(this, $.$mol_view).dom_node();
            $.$mol_dom_render_attributes(node, this.attr_static());
            const events = this.event();
            for (let event_name in events) {
                node.addEventListener(event_name, $.$mol_log2.func($.$mol_fiber_root(events[event_name])), { passive: false });
            }
            return node;
        }
        attr_static() {
            return {};
        }
        event() {
            return {};
        }
        render() {
            this.dom_node_actual();
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_plugin.prototype, "dom_node", null);
    $.$mol_plugin = $mol_plugin;
})($ || ($ = {}));
//plugin.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_meter extends $.$mol_plugin {
        /**
         *  ```
         *  zoom 1
         *  ```
         **/
        zoom() {
            return 1;
        }
        /**
         *  ```
         *  width?val 0
         *  ```
         **/
        width(val, force) {
            return (val !== void 0) ? val : 0;
        }
        /**
         *  ```
         *  height?val 0
         *  ```
         **/
        height(val, force) {
            return (val !== void 0) ? val : 0;
        }
        /**
         *  ```
         *  left?val 0
         *  ```
         **/
        left(val, force) {
            return (val !== void 0) ? val : 0;
        }
        /**
         *  ```
         *  right?val 0
         *  ```
         **/
        right(val, force) {
            return (val !== void 0) ? val : 0;
        }
        /**
         *  ```
         *  bottom?val 0
         *  ```
         **/
        bottom(val, force) {
            return (val !== void 0) ? val : 0;
        }
        /**
         *  ```
         *  top?val 0
         *  ```
         **/
        top(val, force) {
            return (val !== void 0) ? val : 0;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_meter.prototype, "width", null);
    __decorate([
        $.$mol_mem
    ], $mol_meter.prototype, "height", null);
    __decorate([
        $.$mol_mem
    ], $mol_meter.prototype, "left", null);
    __decorate([
        $.$mol_mem
    ], $mol_meter.prototype, "right", null);
    __decorate([
        $.$mol_mem
    ], $mol_meter.prototype, "bottom", null);
    __decorate([
        $.$mol_mem
    ], $mol_meter.prototype, "top", null);
    $.$mol_meter = $mol_meter;
})($ || ($ = {}));
//meter.view.tree.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_meter extends $.$mol_meter {
            rect() {
                const node = this.dom_node();
                const win = this.$.$mol_dom_context;
                if (node !== $.$mol_dom_context.document.body) {
                    new $.$mol_after_frame($.$mol_atom2.current.fresh);
                    try {
                        const { left, top, right, bottom, width, height } = node.getBoundingClientRect();
                        return { left, top, right, bottom, width, height, zoom: win.devicePixelRatio || 1 };
                    }
                    catch (error) {
                        // IE11
                    }
                }
                const size = $.$mol_window.size();
                return {
                    zoom: win.devicePixelRatio || 1,
                    left: 0,
                    top: 0,
                    right: size.width,
                    bottom: size.height,
                    width: size.width,
                    height: size.height,
                };
            }
            top() {
                return this.rect().top;
            }
            bottom() {
                return this.rect().bottom;
            }
            left() {
                return this.rect().left;
            }
            right() {
                return this.rect().right;
            }
            width() {
                return this.rect().width;
            }
            height() {
                return this.rect().height;
            }
            zoom() {
                return this.rect().zoom;
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_meter.prototype, "rect", null);
        __decorate([
            $.$mol_mem
        ], $mol_meter.prototype, "top", null);
        __decorate([
            $.$mol_mem
        ], $mol_meter.prototype, "bottom", null);
        __decorate([
            $.$mol_mem
        ], $mol_meter.prototype, "left", null);
        __decorate([
            $.$mol_mem
        ], $mol_meter.prototype, "right", null);
        __decorate([
            $.$mol_mem
        ], $mol_meter.prototype, "width", null);
        __decorate([
            $.$mol_mem
        ], $mol_meter.prototype, "height", null);
        __decorate([
            $.$mol_mem
        ], $mol_meter.prototype, "zoom", null);
        $$.$mol_meter = $mol_meter;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//meter.view.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_touch extends $.$mol_plugin {
        /**
         *  ```
         *  start_zoom?val 0
         *  ```
         **/
        start_zoom(val, force) {
            return (val !== void 0) ? val : 0;
        }
        /**
         *  ```
         *  start_distance?val 0
         *  ```
         **/
        start_distance(val, force) {
            return (val !== void 0) ? val : 0;
        }
        /**
         *  ```
         *  zoom?val 1
         *  ```
         **/
        zoom(val, force) {
            return (val !== void 0) ? val : 1;
        }
        /**
         *  ```
         *  start_pan?val /
         *  	0
         *  	0
         *  ```
         **/
        start_pan(val, force) {
            return (val !== void 0) ? val : [0, 0];
        }
        /**
         *  ```
         *  pan?val /
         *  	0
         *  	0
         *  ```
         **/
        pan(val, force) {
            return (val !== void 0) ? val : [0, 0];
        }
        /**
         *  ```
         *  pos?val /
         *  	NaN
         *  	NaN
         *  ```
         **/
        pos(val, force) {
            return (val !== void 0) ? val : [NaN, NaN];
        }
        /**
         *  ```
         *  start_pos?val null
         *  ```
         **/
        start_pos(val, force) {
            return (val !== void 0) ? val : null;
        }
        /**
         *  ```
         *  swipe_precision 16
         *  ```
         **/
        swipe_precision() {
            return 16;
        }
        /**
         *  ```
         *  swipe_right?val null
         *  ```
         **/
        swipe_right(val, force) {
            return (val !== void 0) ? val : null;
        }
        /**
         *  ```
         *  swipe_bottom?val null
         *  ```
         **/
        swipe_bottom(val, force) {
            return (val !== void 0) ? val : null;
        }
        /**
         *  ```
         *  swipe_left?val null
         *  ```
         **/
        swipe_left(val, force) {
            return (val !== void 0) ? val : null;
        }
        /**
         *  ```
         *  swipe_top?val null
         *  ```
         **/
        swipe_top(val, force) {
            return (val !== void 0) ? val : null;
        }
        /**
         *  ```
         *  swipe_from_right?val null
         *  ```
         **/
        swipe_from_right(val, force) {
            return (val !== void 0) ? val : null;
        }
        /**
         *  ```
         *  swipe_from_bottom?val null
         *  ```
         **/
        swipe_from_bottom(val, force) {
            return (val !== void 0) ? val : null;
        }
        /**
         *  ```
         *  swipe_from_left?val null
         *  ```
         **/
        swipe_from_left(val, force) {
            return (val !== void 0) ? val : null;
        }
        /**
         *  ```
         *  swipe_from_top?val null
         *  ```
         **/
        swipe_from_top(val, force) {
            return (val !== void 0) ? val : null;
        }
        /**
         *  ```
         *  swipe_to_right?val null
         *  ```
         **/
        swipe_to_right(val, force) {
            return (val !== void 0) ? val : null;
        }
        /**
         *  ```
         *  swipe_to_bottom?val null
         *  ```
         **/
        swipe_to_bottom(val, force) {
            return (val !== void 0) ? val : null;
        }
        /**
         *  ```
         *  swipe_to_left?val null
         *  ```
         **/
        swipe_to_left(val, force) {
            return (val !== void 0) ? val : null;
        }
        /**
         *  ```
         *  swipe_to_top?val null
         *  ```
         **/
        swipe_to_top(val, force) {
            return (val !== void 0) ? val : null;
        }
        /**
         *  ```
         *  style *
         *  	^
         *  	touch-action \none
         *  ```
         **/
        style() {
            return (Object.assign(Object.assign({}, super.style()), { "touch-action": "none" }));
        }
        /**
         *  ```
         *  event *
         *  	^
         *  	touchstart?event <=> event_start?event
         *  	touchmove?event <=> event_move?event
         *  	touchend?event <=> event_end?event
         *  	mousedown?event <=> event_start?event
         *  	mousemove?event <=> event_move?event
         *  	mouseup?event <=> event_end?event
         *  	mouseleave?event <=> event_leave?event
         *  	wheel?event <=> event_wheel?event
         *  ```
         **/
        event() {
            return (Object.assign(Object.assign({}, super.event()), { "touchstart": (event) => this.event_start(event), "touchmove": (event) => this.event_move(event), "touchend": (event) => this.event_end(event), "mousedown": (event) => this.event_start(event), "mousemove": (event) => this.event_move(event), "mouseup": (event) => this.event_end(event), "mouseleave": (event) => this.event_leave(event), "wheel": (event) => this.event_wheel(event) }));
        }
        /**
         *  ```
         *  event_start?event null
         *  ```
         **/
        event_start(event, force) {
            return (event !== void 0) ? event : null;
        }
        /**
         *  ```
         *  event_move?event null
         *  ```
         **/
        event_move(event, force) {
            return (event !== void 0) ? event : null;
        }
        /**
         *  ```
         *  event_end?event null
         *  ```
         **/
        event_end(event, force) {
            return (event !== void 0) ? event : null;
        }
        /**
         *  ```
         *  event_leave?event null
         *  ```
         **/
        event_leave(event, force) {
            return (event !== void 0) ? event : null;
        }
        /**
         *  ```
         *  event_wheel?event null
         *  ```
         **/
        event_wheel(event, force) {
            return (event !== void 0) ? event : null;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "start_zoom", null);
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "start_distance", null);
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "zoom", null);
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "start_pan", null);
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "pan", null);
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "pos", null);
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "start_pos", null);
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "swipe_right", null);
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "swipe_bottom", null);
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "swipe_left", null);
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "swipe_top", null);
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "swipe_from_right", null);
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "swipe_from_bottom", null);
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "swipe_from_left", null);
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "swipe_from_top", null);
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "swipe_to_right", null);
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "swipe_to_bottom", null);
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "swipe_to_left", null);
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "swipe_to_top", null);
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "event_start", null);
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "event_move", null);
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "event_end", null);
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "event_leave", null);
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "event_wheel", null);
    $.$mol_touch = $mol_touch;
})($ || ($ = {}));
//touch.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_touch extends $.$mol_touch {
            rect() {
                return this.dom_node().getBoundingClientRect();
            }
            event_start(event) {
                if (event.defaultPrevented)
                    return;
                this.start_pan(this.pan());
                let pos;
                if (event instanceof MouseEvent) {
                    if (event.buttons === 1) {
                        pos = [event.pageX, event.pageY];
                        this.start_pos(pos);
                    }
                }
                else if (event instanceof TouchEvent) {
                    if (event.touches.length === 1) {
                        pos = [event.touches[0].pageX, event.touches[0].pageY];
                        this.start_pos(pos);
                    }
                    if (event.touches.length === 2) {
                        const distance = ((event.touches[1].pageX - event.touches[0].pageX) ** 2 + (event.touches[1].pageY - event.touches[0].pageY) ** 2) ** .5;
                        this.start_distance(distance);
                        this.start_zoom(this.zoom());
                    }
                }
            }
            event_leave(event) {
                if (event.defaultPrevented)
                    return;
                if (event instanceof MouseEvent)
                    this.pos(super.pos());
            }
            event_move(event) {
                if (event.defaultPrevented)
                    return;
                const start_pan = this.start_pan();
                let pos;
                let cursor_pos;
                if (event instanceof MouseEvent) {
                    cursor_pos = [event.pageX, event.pageY];
                    if (event.buttons === 1)
                        pos = cursor_pos;
                    else
                        this.start_pos(null);
                }
                else if (event instanceof TouchEvent) {
                    cursor_pos = [event.touches[0].pageX, event.touches[0].pageY];
                    if (event.touches.length === 1)
                        pos = cursor_pos;
                    else
                        this.start_pos(null);
                }
                if (cursor_pos) {
                    const { left, top } = this.rect();
                    this.pos([
                        Math.max(0, Math.round(cursor_pos[0] - left)),
                        Math.max(0, Math.round(cursor_pos[1] - top)),
                    ]);
                }
                if (pos) {
                    const start_pos = this.start_pos();
                    if (!start_pos)
                        return;
                    if (this.pan !== $mol_touch.prototype.pan) {
                        this.pan([start_pan[0] + pos[0] - start_pos[0], start_pan[1] + pos[1] - start_pos[1]]);
                        event.preventDefault();
                    }
                    if (typeof TouchEvent === 'undefined')
                        return;
                    if (!(event instanceof TouchEvent))
                        return;
                    const precision = this.swipe_precision();
                    if ((this.swipe_right !== $mol_touch.prototype.swipe_right
                        || this.swipe_from_left !== $mol_touch.prototype.swipe_from_left
                        || this.swipe_to_right !== $mol_touch.prototype.swipe_to_right)
                        && pos[0] - start_pos[0] > precision * 2
                        && Math.abs(pos[1] - start_pos[1]) < precision) {
                        this.swipe_right(event);
                        event.preventDefault();
                    }
                    if ((this.swipe_left !== $mol_touch.prototype.swipe_left
                        || this.swipe_from_right !== $mol_touch.prototype.swipe_from_right
                        || this.swipe_to_left !== $mol_touch.prototype.swipe_to_left)
                        && start_pos[0] - pos[0] > precision * 2
                        && Math.abs(pos[1] - start_pos[1]) < precision) {
                        this.swipe_left(event);
                        event.preventDefault();
                    }
                    if ((this.swipe_bottom !== $mol_touch.prototype.swipe_bottom
                        || this.swipe_from_top !== $mol_touch.prototype.swipe_from_top
                        || this.swipe_to_bottom !== $mol_touch.prototype.swipe_to_bottom)
                        && pos[1] - start_pos[1] > precision * 2
                        && Math.abs(pos[0] - start_pos[0]) < precision) {
                        this.swipe_bottom(event);
                        event.preventDefault();
                    }
                    if ((this.swipe_top !== $mol_touch.prototype.swipe_top
                        || this.swipe_from_bottom !== $mol_touch.prototype.swipe_from_bottom
                        || this.swipe_to_top !== $mol_touch.prototype.swipe_to_top)
                        && start_pos[1] - pos[1] > precision * 2
                        && Math.abs(pos[0] - start_pos[0]) < precision) {
                        this.swipe_top(event);
                        event.preventDefault();
                    }
                }
                if (typeof TouchEvent === 'undefined')
                    return;
                if (!(event instanceof TouchEvent))
                    return;
                if (event.touches.length === 2) {
                    if (this.zoom === $mol_touch.prototype.zoom)
                        return;
                    const pos0 = [event.touches[0].pageX, event.touches[0].pageY];
                    const pos1 = [event.touches[1].pageX, event.touches[1].pageY];
                    const distance = ((pos1[0] - pos0[0]) ** 2 + (pos1[1] - pos0[1]) ** 2) ** .5;
                    const center = [pos1[0] / 2 + pos0[0] / 2, pos1[1] / 2 + pos0[1] / 2];
                    const start_zoom = this.start_zoom();
                    const mult = distance / this.start_distance();
                    this.zoom(start_zoom * mult);
                    const pan = [(start_pan[0] - center[0]) * mult + center[0], (start_pan[1] - center[1]) * mult + center[1]];
                    this.pan(pan);
                    event.preventDefault();
                }
            }
            swipe_left(event) {
                if (this.rect().right - this.start_pos()[0] < this.swipe_precision() * 2)
                    this.swipe_from_right(event);
                else
                    this.swipe_to_left(event);
                this.event_end(event);
            }
            swipe_right(event) {
                if (this.start_pos()[0] - this.rect().left < this.swipe_precision() * 2)
                    this.swipe_from_left(event);
                else
                    this.swipe_to_right(event);
                this.event_end(event);
            }
            swipe_top(event) {
                if (this.rect().bottom - this.start_pos()[1] < this.swipe_precision() * 2)
                    this.swipe_from_bottom(event);
                else
                    this.swipe_to_top(event);
                this.event_end(event);
            }
            swipe_bottom(event) {
                if (this.start_pos()[1] - this.rect().top < this.swipe_precision() * 2)
                    this.swipe_from_top(event);
                else
                    this.swipe_to_bottom(event);
                this.event_end(event);
            }
            event_end(event) {
                this.start_pos(null);
            }
            event_wheel(event) {
                if (this.pan !== $mol_touch.prototype.pan) {
                    event.preventDefault();
                }
                const zoom_prev = this.zoom() || 0.001;
                const zoom_next = zoom_prev * (1 - .1 * Math.sign(event.deltaY));
                const mult = zoom_next / zoom_prev;
                this.zoom(zoom_next);
                const pan_prev = this.pan();
                const center = [event.offsetX, event.offsetY];
                const pan_next = [(pan_prev[0] - center[0]) * mult + center[0], (pan_prev[1] - center[1]) * mult + center[1]];
                this.pan(pan_next);
            }
        }
        $$.$mol_touch = $mol_touch;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//touch.view.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_dom_render_events(el, events) {
        for (let name in events) {
            el.addEventListener(name, $.$mol_log_group(el.id + ' ' + name, events[name]), { passive: false });
        }
    }
    $.$mol_dom_render_events = $mol_dom_render_events;
    function $mol_dom_render_events_async(el, events) {
        for (let name in events) {
            el.addEventListener(name, $.$mol_log_group(el.id + ' ' + name, events[name]), { passive: true });
        }
    }
    $.$mol_dom_render_events_async = $mol_dom_render_events_async;
})($ || ($ = {}));
//events.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_ghost extends $.$mol_view {
        /**
         *  ```
         *  Sub $mol_view
         *  ```
         **/
        Sub() {
            return ((obj) => {
                return obj;
            })(new this.$.$mol_view());
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_ghost.prototype, "Sub", null);
    $.$mol_ghost = $mol_ghost;
})($ || ($ = {}));
//ghost.view.tree.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_ghost extends $.$mol_ghost {
            dom_node() {
                const node = this.Sub().dom_node();
                $.$mol_dom_render_attributes(node, this.attr_static());
                $.$mol_dom_render_events(node, this.event());
                return node;
            }
            dom_tree() {
                const Sub = this.Sub();
                Sub.$ = this.$;
                const node = Sub.dom_tree();
                this.dom_node_actual();
                return node;
            }
            title() {
                return this.Sub().title();
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_ghost.prototype, "dom_node", null);
        $$.$mol_ghost = $mol_ghost;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//ghost.view.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_book extends $.$mol_view {
        /**
         *  ```
         *  sub <= pages_wrapped
         *  ```
         **/
        sub() {
            return this.pages_wrapped();
        }
        /**
         *  ```
         *  pages_wrapped /$mol_view
         *  ```
         **/
        pages_wrapped() {
            return [];
        }
        /**
         *  ```
         *  pages /$mol_view
         *  ```
         **/
        pages() {
            return [];
        }
        /**
         *  ```
         *  plugins /$mol_plugin
         *  	<= Meter
         *  	<= Touch
         *  ```
         **/
        plugins() {
            return [this.Meter(), this.Touch()];
        }
        width() {
            return this.Meter().width();
        }
        /**
         *  ```
         *  Meter $mol_meter width => width
         *  ```
         **/
        Meter() {
            return ((obj) => {
                return obj;
            })(new this.$.$mol_meter());
        }
        /**
         *  ```
         *  Touch $mol_touch
         *  	swipe_from_left?val <=> event_front_up?val
         *  	swipe_to_left?val <=> event_front_down?val
         *  ```
         **/
        Touch() {
            return ((obj) => {
                obj.swipe_from_left = (val) => this.event_front_up(val);
                obj.swipe_to_left = (val) => this.event_front_down(val);
                return obj;
            })(new this.$.$mol_touch());
        }
        /**
         *  ```
         *  event_front_up?val null
         *  ```
         **/
        event_front_up(val, force) {
            return (val !== void 0) ? val : null;
        }
        /**
         *  ```
         *  event_front_down?val null
         *  ```
         **/
        event_front_down(val, force) {
            return (val !== void 0) ? val : null;
        }
        /**
         *  ```
         *  Page!index $mol_book_page
         *  	Sub <= page!index
         *  	visible <= page_visible!index
         *  ```
         **/
        Page(index) {
            return ((obj) => {
                obj.Sub = () => this.page(index);
                obj.visible = () => this.page_visible(index);
                return obj;
            })(new this.$.$mol_book_page());
        }
        /**
         *  ```
         *  page!index null
         *  ```
         **/
        page(index) {
            return null;
        }
        /**
         *  ```
         *  page_visible!index true
         *  ```
         **/
        page_visible(index) {
            return true;
        }
        /**
         *  ```
         *  Placeholder $mol_book_placeholder title <= title
         *  ```
         **/
        Placeholder() {
            return ((obj) => {
                obj.title = () => this.title();
                return obj;
            })(new this.$.$mol_book_placeholder());
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_book.prototype, "Meter", null);
    __decorate([
        $.$mol_mem
    ], $mol_book.prototype, "Touch", null);
    __decorate([
        $.$mol_mem
    ], $mol_book.prototype, "event_front_up", null);
    __decorate([
        $.$mol_mem
    ], $mol_book.prototype, "event_front_down", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_book.prototype, "Page", null);
    __decorate([
        $.$mol_mem
    ], $mol_book.prototype, "Placeholder", null);
    $.$mol_book = $mol_book;
})($ || ($ = {}));
(function ($) {
    class $mol_book_placeholder extends $.$mol_view {
        /**
         *  ```
         *  minimal_width 400
         *  ```
         **/
        minimal_width() {
            return 400;
        }
        /**
         *  ```
         *  attr *
         *  	^
         *  	tabindex null
         *  ```
         **/
        attr() {
            return (Object.assign(Object.assign({}, super.attr()), { "tabindex": null }));
        }
    }
    $.$mol_book_placeholder = $mol_book_placeholder;
})($ || ($ = {}));
(function ($) {
    class $mol_book_page extends $.$mol_ghost {
        /**
         *  ```
         *  attr_static *
         *  	^
         *  	tabindex 0
         *  	mol_book_page_visible true
         *  ```
         **/
        attr_static() {
            return (Object.assign(Object.assign({}, super.attr_static()), { "tabindex": 0, "mol_book_page_visible": true }));
        }
        /**
         *  ```
         *  attr *
         *  	^
         *  	mol_book_page_focused <= focused
         *  	mol_book_page_visible <= visible
         *  ```
         **/
        attr() {
            return (Object.assign(Object.assign({}, super.attr()), { "mol_book_page_focused": this.focused(), "mol_book_page_visible": this.visible() }));
        }
        /**
         *  ```
         *  visible true
         *  ```
         **/
        visible() {
            return true;
        }
    }
    $.$mol_book_page = $mol_book_page;
})($ || ($ = {}));
//book.view.tree.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_book extends $.$mol_book {
            pages_extended() {
                return [this.Placeholder(), ...this.pages()];
            }
            break_point() {
                const pages = this.pages_extended();
                const limit = this.width();
                let width = 0;
                for (var break_point = pages.length; break_point > 0; --break_point) {
                    const page = pages[break_point - 1];
                    if (!page)
                        continue;
                    const page_width = page.minimal_width();
                    if (width + page_width > limit)
                        break;
                    width += page_width;
                }
                if (width === 0)
                    --break_point;
                return break_point;
            }
            page(index) {
                return this.pages_extended()[index];
            }
            page_visible(index) {
                return index >= this.break_point();
            }
            pages_wrapped() {
                const pages = this.pages_extended();
                const extended = [];
                for (let i = 1; i < pages.length; ++i) {
                    if (pages[i])
                        extended.push(this.Page(i));
                }
                if (pages[0])
                    extended.push(this.Page(0));
                return extended;
            }
            title() {
                return this.pages().map(page => page.title()).reverse().join(' | ');
            }
            event_front_up(event) {
                if (!event)
                    return;
                if (event.defaultPrevented)
                    return;
                this.page(1).focused(true);
            }
            event_front_down(event) {
                if (!event)
                    return;
                if (event.defaultPrevented)
                    return;
                this.page(1).focused(false);
            }
            minimal_width() {
                return this.pages().reduce((sum, page) => page.minimal_width() + sum, 0);
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_book.prototype, "pages_extended", null);
        __decorate([
            $.$mol_mem
        ], $mol_book.prototype, "break_point", null);
        __decorate([
            $.$mol_mem
        ], $mol_book.prototype, "pages_wrapped", null);
        __decorate([
            $.$mol_mem
        ], $mol_book.prototype, "minimal_width", null);
        $$.$mol_book = $mol_book;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//book.view.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/book/book.view.css", "[mol_book] {\n\tdisplay: flex;\n\tflex-flow: row nowrap;\n\talign-items: stretch;\n\tjustify-content: flex-start;\n\toverflow: hidden;\n\tflex: 1 1 auto;\n\talign-self: stretch;\n\tmargin: 0;\n\tbox-shadow: 0 0 0 1px var(--mol_theme_line);\n\ttransform: translateZ( 0 );\n}\n\n[mol_book] > *:not([mol_book_page_visible]) {\n\tposition: absolute; \n\tleft: 0;\n\ttop: 0;\n}\n\n[mol_book] > [mol_book_page_focused]:not([mol_book_page_visible]) ~ * {\n\topacity: .25;\n\tpointer-events: none;\n\tz-index: -1;\n}\n\n[mol_book] > *:not([mol_book_page_visible]):not([mol_book_page_focused]) {\n\ttransform: translate3d( -100% , 0 , 0 );\n}\n\n[mol_book] > *:not([mol_book_page_visible]):not([mol_book_page_focused]) + *:before {\n\tcontent : '•••';\n\tposition: absolute;\n\ttop: 1rem;\n\tleft: 0;\n\tz-index: 1;\n\tpointer-events: none;\n\tcolor: var(--mol_skin_base_text);\n\ttransform: rotate(90deg);\n}\n\n[mol_book] > * {\n\tposition: relative;\n\t/* animation: mol_book_page_show linear .2s; */\n\ttransition-timing-function: linear;\n\tz-index: 0;\n\tmin-height: 100%;\n\tmax-height: 100%;\n}\n\n[mol_book_placeholder] {\n\tflex: 1000 1 400px;\n\tbox-shadow: 0 0 0 1px var(--mol_theme_line);\n\tbackground: var(--mol_theme_field);\n\tz-index: -1;\n}\n\n[mol_book_placeholder]:hover {\n\toutline: none;\n}\n\n@keyframes mol_book_page_show {\n\tfrom {\n\t\ttransform: translateX( 100% );\n\t\topacity: 0;\n\t\tz-index: -1;\n\t}\n}\n\n[mol_book_page]:not(:first-child) {\n\tanimation: mol_book_page_show .25s ease-out;\n}\n");
})($ || ($ = {}));
//book.view.css.js.map
;
"use strict";
var $;
(function ($) {
    class $mpk_tss_icon_train extends $.$mol_icon {
        /**
         *  ```
         *  path \M12 2c-4 0-8 .5-8 4v9.5C4 17.43 5.57 19 7.5 19L6 20.5v.5h2.23l2-2H14l2 2h2v-.5L16.5 19c1.93 0 3.5-1.57 3.5-3.5V6c0-3.5-3.58-4-8-4zM7.5 17c-.83 0-1.5-.67-1.5-1.5S6.67 14 7.5 14s1.5.67 1.5 1.5S8.33 17 7.5 17zm3.5-7H6V6h5v4zm2 0V6h5v4h-5zm3.5 7c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z
         *  ```
         **/
        path() {
            return "M12 2c-4 0-8 .5-8 4v9.5C4 17.43 5.57 19 7.5 19L6 20.5v.5h2.23l2-2H14l2 2h2v-.5L16.5 19c1.93 0 3.5-1.57 3.5-3.5V6c0-3.5-3.58-4-8-4zM7.5 17c-.83 0-1.5-.67-1.5-1.5S6.67 14 7.5 14s1.5.67 1.5 1.5S8.33 17 7.5 17zm3.5-7H6V6h5v4zm2 0V6h5v4h-5zm3.5 7c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z";
        }
    }
    $.$mpk_tss_icon_train = $mpk_tss_icon_train;
})($ || ($ = {}));
(function ($) {
    class $mpk_tss_icon_exit_to_app extends $.$mol_icon {
        /**
         *  ```
         *  path \M10.09 15.59L11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5c-1.11 0-2 .9-2 2v4h2V5h14v14H5v-4H3v4c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z
         *  ```
         **/
        path() {
            return "M10.09 15.59L11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5c-1.11 0-2 .9-2 2v4h2V5h14v14H5v-4H3v4c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z";
        }
    }
    $.$mpk_tss_icon_exit_to_app = $mpk_tss_icon_exit_to_app;
})($ || ($ = {}));
(function ($) {
    class $mpk_tss_icon_autorenew extends $.$mol_icon {
        /**
         *  ```
         *  path \M12 6v3l4-4-4-4v3c-4.42 0-8 3.58-8 8 0 1.57.46 3.03 1.24 4.26L6.7 14.8c-.45-.83-.7-1.79-.7-2.8 0-3.31 2.69-6 6-6zm6.76 1.74L17.3 9.2c.44.84.7 1.79.7 2.8 0 3.31-2.69 6-6 6v-3l-4 4 4 4v-3c4.42 0 8-3.58 8-8 0-1.57-.46-3.03-1.24-4.26z
         *  ```
         **/
        path() {
            return "M12 6v3l4-4-4-4v3c-4.42 0-8 3.58-8 8 0 1.57.46 3.03 1.24 4.26L6.7 14.8c-.45-.83-.7-1.79-.7-2.8 0-3.31 2.69-6 6-6zm6.76 1.74L17.3 9.2c.44.84.7 1.79.7 2.8 0 3.31-2.69 6-6 6v-3l-4 4 4 4v-3c4.42 0 8-3.58 8-8 0-1.57-.46-3.03-1.24-4.26z";
        }
    }
    $.$mpk_tss_icon_autorenew = $mpk_tss_icon_autorenew;
})($ || ($ = {}));
(function ($) {
    class $mpk_tss_icon_cloud_download extends $.$mol_icon {
        /**
         *  ```
         *  path \M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM17 13l-5 5-5-5h3V9h4v4h3
         *  ```
         **/
        path() {
            return "M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM17 13l-5 5-5-5h3V9h4v4h3";
        }
    }
    $.$mpk_tss_icon_cloud_download = $mpk_tss_icon_cloud_download;
})($ || ($ = {}));
(function ($) {
    class $mpk_tss_icon_done extends $.$mol_icon {
        /**
         *  ```
         *  path \M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z
         *  ```
         **/
        path() {
            return "M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z";
        }
    }
    $.$mpk_tss_icon_done = $mpk_tss_icon_done;
})($ || ($ = {}));
(function ($) {
    class $mpk_tss_icon_schedule extends $.$mol_icon {
        /**
         *  ```
         *  path \M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z
         *  ```
         **/
        path() {
            return "M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z";
        }
    }
    $.$mpk_tss_icon_schedule = $mpk_tss_icon_schedule;
})($ || ($ = {}));
(function ($) {
    class $mpk_tss_icon_error extends $.$mol_icon {
        /**
         *  ```
         *  path \M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 36h-2v-2h2v2zm0-4h-2V7h2v6z
         *  ```
         **/
        path() {
            return "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 36h-2v-2h2v2zm0-4h-2V7h2v6z";
        }
    }
    $.$mpk_tss_icon_error = $mpk_tss_icon_error;
})($ || ($ = {}));
(function ($) {
    class $mpk_tss_icon_warning extends $.$mol_icon {
        /**
         *  ```
         *  path \M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z
         *  ```
         **/
        path() {
            return "M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z";
        }
    }
    $.$mpk_tss_icon_warning = $mpk_tss_icon_warning;
})($ || ($ = {}));
(function ($) {
    class $mpk_tss_icon_sync extends $.$mol_icon {
        /**
         *  ```
         *  path \M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z
         *  ```
         **/
        path() {
            return "M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z";
        }
    }
    $.$mpk_tss_icon_sync = $mpk_tss_icon_sync;
})($ || ($ = {}));
(function ($) {
    class $mpk_tss_icon_clear extends $.$mol_icon {
        /**
         *  ```
         *  path \M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z
         *  ```
         **/
        path() {
            return "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z";
        }
    }
    $.$mpk_tss_icon_clear = $mpk_tss_icon_clear;
})($ || ($ = {}));
(function ($) {
    class $mpk_tss_icon_block extends $.$mol_icon {
        /**
         *  ```
         *  path \M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM4 12c0-4.42 3.58-8 8-8 1.85 0 3.55.63 4.9 1.69L5.69 16.9C4.63 15.55 4 13.85 4 12zm8 8c-1.85 0-3.55-.63-4.9-1.69L18.31 7.1C19.37 8.45 20 10.15 20 12c0 4.42-3.58 8-8 8z
         *  ```
         **/
        path() {
            return "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM4 12c0-4.42 3.58-8 8-8 1.85 0 3.55.63 4.9 1.69L5.69 16.9C4.63 15.55 4 13.85 4 12zm8 8c-1.85 0-3.55-.63-4.9-1.69L18.31 7.1C19.37 8.45 20 10.15 20 12c0 4.42-3.58 8-8 8z";
        }
    }
    $.$mpk_tss_icon_block = $mpk_tss_icon_block;
})($ || ($ = {}));
(function ($) {
    class $mpk_tss_icon_circle_outline extends $.$mol_icon {
        /**
         *  ```
         *  path \M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.88-11.71L10 14.17l-1.88-1.88c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41l2.59 2.59c.39.39 1.02.39 1.41 0L17.3 9.7c.39-.39.39-1.02 0-1.41-.39-.39-1.03-.39-1.42 0z
         *  ```
         **/
        path() {
            return "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.88-11.71L10 14.17l-1.88-1.88c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41l2.59 2.59c.39.39 1.02.39 1.41 0L17.3 9.7c.39-.39.39-1.02 0-1.41-.39-.39-1.03-.39-1.42 0z";
        }
    }
    $.$mpk_tss_icon_circle_outline = $mpk_tss_icon_circle_outline;
})($ || ($ = {}));
(function ($) {
    class $mpk_tss_icon_round_warning extends $.$mol_icon {
        /**
         *  ```
         *  path \M4.47 21h15.06c1.54 0 2.5-1.67 1.73-3L13.73 4.99c-.77-1.33-2.69-1.33-3.46 0L2.74 18c-.77 1.33.19 3 1.73 3zM12 14c-.55 0-1-.45-1-1v-2c0-.55.45-1 1-1s1 .45 1 1v2c0 .55-.45 1-1 1zm1 4h-2v-2h2v2z
         *  ```
         **/
        path() {
            return "M4.47 21h15.06c1.54 0 2.5-1.67 1.73-3L13.73 4.99c-.77-1.33-2.69-1.33-3.46 0L2.74 18c-.77 1.33.19 3 1.73 3zM12 14c-.55 0-1-.45-1-1v-2c0-.55.45-1 1-1s1 .45 1 1v2c0 .55-.45 1-1 1zm1 4h-2v-2h2v2z";
        }
    }
    $.$mpk_tss_icon_round_warning = $mpk_tss_icon_round_warning;
})($ || ($ = {}));
//icon.view.tree.js.map
;
"use strict";
//exclude.js.map
;
"use strict";
//omit.js.map
;
"use strict";
//class.js.map
;
"use strict";
//element.js.map
;
"use strict";
//properties.js.map
;
"use strict";
//definition.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_style_sheet(Component, config) {
        let rules = [];
        const make_class = (prefix, suffix, config) => {
            const props = [];
            for (const key of Object.keys(config).reverse()) {
                if (/^[a-z]/.test(key)) {
                    const name = key.replace(/[A-Z]/g, letter => '-' + letter.toLowerCase());
                    const val = config[key];
                    props.push(`\t${name}: ${val};\n`);
                }
                else if (/^[A-Z]/.test(key)) {
                    make_class(prefix + '_' + key.toLowerCase(), suffix, config[key]);
                }
                else if (key[0] === '$') {
                    make_class(prefix + '] ' + key.replace('$', '['), suffix, config[key]);
                }
                else if (key === '>') {
                    const types = config[key];
                    for (let type in types) {
                        make_class(prefix + '] > ' + type.replace('$', '['), suffix, types[type]);
                    }
                }
                else if (key === '@') {
                    const attrs = config[key];
                    for (let name in attrs) {
                        for (let val in attrs[name]) {
                            make_class(prefix, suffix + '[' + name + '=' + JSON.stringify(val) + ']', attrs[name][val]);
                        }
                    }
                }
                else if (key === '@media') {
                    const media = config[key];
                    for (let query in media) {
                        rules.push('}\n');
                        make_class(prefix, suffix, media[query]);
                        rules.push(`${key} ${query} {\n`);
                    }
                }
                else {
                    make_class(prefix, suffix + key, config[key]);
                }
            }
            if (props.length) {
                rules.push(`${prefix}${suffix} {\n${props.reverse().join('')}}\n`);
            }
        };
        make_class(Component.name.replace('$', '['), ']', config);
        return rules.reverse().join('');
    }
    $.$mol_style_sheet = $mol_style_sheet;
})($ || ($ = {}));
//sheet.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_style_define(Component, config) {
        return $.$mol_style_attach(Component.name, $.$mol_style_sheet(Component, config));
    }
    $.$mol_style_define = $mol_style_define;
})($ || ($ = {}));
//define.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_link extends $.$mol_view {
        /**
         *  ```
         *  minimal_height 40
         *  ```
         **/
        minimal_height() {
            return 40;
        }
        /**
         *  ```
         *  dom_name \a
         *  ```
         **/
        dom_name() {
            return "a";
        }
        /**
         *  ```
         *  attr *
         *  	^
         *  	href <= uri
         *  	title <= hint
         *  	target <= target
         *  	download <= file_name
         *  	mol_link_current <= current
         *  ```
         **/
        attr() {
            return (Object.assign(Object.assign({}, super.attr()), { "href": this.uri(), "title": this.hint(), "target": this.target(), "download": this.file_name(), "mol_link_current": this.current() }));
        }
        /**
         *  ```
         *  uri \
         *  ```
         **/
        uri() {
            return "";
        }
        /**
         *  ```
         *  hint \
         *  ```
         **/
        hint() {
            return "";
        }
        /**
         *  ```
         *  target \_self
         *  ```
         **/
        target() {
            return "_self";
        }
        /**
         *  ```
         *  file_name \
         *  ```
         **/
        file_name() {
            return "";
        }
        /**
         *  ```
         *  current false
         *  ```
         **/
        current() {
            return false;
        }
        /**
         *  ```
         *  sub /$mol_view_content <= title
         *  ```
         **/
        sub() {
            return [this.title()];
        }
        /**
         *  ```
         *  arg *
         *  ```
         **/
        arg() {
            return ({});
        }
        /**
         *  ```
         *  event *
         *  	^
         *  	click?event <=> click?event
         *  ```
         **/
        event() {
            return (Object.assign(Object.assign({}, super.event()), { "click": (event) => this.click(event) }));
        }
        /**
         *  ```
         *  click?event <=> event_click?event
         *  ```
         **/
        click(event, force) {
            return this.event_click(event);
        }
        /**
         *  ```
         *  event_click?event null
         *  ```
         **/
        event_click(event, force) {
            return (event !== void 0) ? event : null;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_link.prototype, "click", null);
    __decorate([
        $.$mol_mem
    ], $mol_link.prototype, "event_click", null);
    $.$mol_link = $mol_link;
})($ || ($ = {}));
//link.view.tree.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_link extends $.$mol_link {
            uri() {
                return new this.$.$mol_state_arg(this.state_key()).link(this.arg());
            }
            current() {
                if (this.uri() === this.$.$mol_state_arg.href())
                    return true;
                const args = this.arg();
                const keys = Object.keys(args).filter(key => args[key] != null);
                if (keys.length === 0)
                    return false;
                for (const key of keys) {
                    if (this.$.$mol_state_arg.value(key) !== args[key])
                        return false;
                }
                return true;
            }
            event_click(event) {
                if (!event || event.defaultPrevented)
                    return;
                this.focused(false);
                // setTimeout( $mol_log_group( `${ this }.event_click()` , ()=> this.focused( false ) ) , 50 )
            }
            file_name() {
                return null;
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_link.prototype, "uri", null);
        __decorate([
            $.$mol_mem
        ], $mol_link.prototype, "current", null);
        $$.$mol_link = $mol_link;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//link.view.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_define($.$mol_link, {
        textDecoration: 'none',
        color: "var(--mol_theme_control)" /* control */,
        stroke: 'currentColor',
        cursor: 'pointer',
        padding: '.5rem',
        boxSizing: 'border-box',
        position: 'relative',
        ':hover': {
            backgroundColor: "var(--mol_theme_hover)" /* hover */,
        },
        ':focus': {
            outline: 'none',
            backgroundColor: "var(--mol_theme_hover)" /* hover */,
        },
        '@': {
            mol_link_current: {
                'true': {
                    backgroundColor: "var(--mol_theme_current)" /* current */,
                    color: "var(--mol_theme_text)" /* text */,
                }
            }
        },
    });
})($ || ($ = {}));
//link.view.css.js.map
;
"use strict";
var $;
(function ($) {
    class $mpk_tss_link extends $.$mol_link {
        /**
         *  ```
         *  copy_params /string
         *  ```
         **/
        copy_params() {
            return [];
        }
    }
    $.$mpk_tss_link = $mpk_tss_link;
})($ || ($ = {}));
//link.view.tree.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mpk_tss_link extends $.$mpk_tss_link {
            uri() {
                const arg = this.$.$mol_state_arg;
                const dict = arg.dict();
                const params = this.copy_params();
                const href_args = Object.assign({}, this.arg());
                for (let key of params)
                    href_args[key] = dict[key];
                return arg.make_link(href_args);
            }
        }
        __decorate([
            $.$mol_mem
        ], $mpk_tss_link.prototype, "uri", null);
        $$.$mpk_tss_link = $mpk_tss_link;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//link.view.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_state_session extends $.$mol_object {
        static native() {
            if (this['native()'])
                return this['native()'];
            check: try {
                const native = $.$mol_dom_context.sessionStorage;
                if (!native)
                    break check;
                native.setItem('', '');
                native.removeItem('');
                return this['native()'] = native;
            }
            catch (error) {
                console.warn(error);
            }
            return this['native()'] = {
                getItem(key) {
                    return this[':' + key];
                },
                setItem(key, value) {
                    this[':' + key] = value;
                },
                removeItem(key) {
                    this[':' + key] = void 0;
                }
            };
        }
        static value(key, next) {
            if (next === void 0)
                return JSON.parse(this.native().getItem(key) || 'null');
            if (next === null)
                this.native().removeItem(key);
            else
                this.native().setItem(key, JSON.stringify(next));
            return next;
        }
        prefix() { return ''; }
        value(key, next) {
            return $mol_state_session.value(this.prefix() + '.' + key, next);
        }
    }
    __decorate([
        $.$mol_mem_key
    ], $mol_state_session, "value", null);
    $.$mol_state_session = $mol_state_session;
})($ || ($ = {}));
//session.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_scroll extends $.$mol_view {
        /**
         *  ```
         *  minimal_height 0
         *  ```
         **/
        minimal_height() {
            return 0;
        }
        /**
         *  ```
         *  field *
         *  	^
         *  	scrollTop <= scroll_top?val
         *  	scrollLeft <= scroll_left?val
         *  	scrollBottom <= scroll_bottom?val
         *  	scrollRight <= scroll_right?val
         *  ```
         **/
        field() {
            return (Object.assign(Object.assign({}, super.field()), { "scrollTop": this.scroll_top(), "scrollLeft": this.scroll_left(), "scrollBottom": this.scroll_bottom(), "scrollRight": this.scroll_right() }));
        }
        /**
         *  ```
         *  scroll_top?val 0
         *  ```
         **/
        scroll_top(val, force) {
            return (val !== void 0) ? val : 0;
        }
        /**
         *  ```
         *  scroll_left?val 0
         *  ```
         **/
        scroll_left(val, force) {
            return (val !== void 0) ? val : 0;
        }
        /**
         *  ```
         *  scroll_bottom?val 0
         *  ```
         **/
        scroll_bottom(val, force) {
            return (val !== void 0) ? val : 0;
        }
        /**
         *  ```
         *  scroll_right?val 0
         *  ```
         **/
        scroll_right(val, force) {
            return (val !== void 0) ? val : 0;
        }
        /**
         *  ```
         *  event *
         *  	^
         *  	scroll?event <=> event_scroll?event
         *  ```
         **/
        event() {
            return (Object.assign(Object.assign({}, super.event()), { "scroll": (event) => this.event_scroll(event) }));
        }
        /**
         *  ```
         *  event_scroll?event null
         *  ```
         **/
        event_scroll(event, force) {
            return (event !== void 0) ? event : null;
        }
        /**
         *  ```
         *  Strut $mol_view style * transform <= strut_transform
         *  ```
         **/
        Strut() {
            return ((obj) => {
                obj.style = () => ({
                    "transform": this.strut_transform(),
                });
                return obj;
            })(new this.$.$mol_view());
        }
        /**
         *  ```
         *  strut_transform \
         *  ```
         **/
        strut_transform() {
            return "";
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_scroll.prototype, "scroll_top", null);
    __decorate([
        $.$mol_mem
    ], $mol_scroll.prototype, "scroll_left", null);
    __decorate([
        $.$mol_mem
    ], $mol_scroll.prototype, "scroll_bottom", null);
    __decorate([
        $.$mol_mem
    ], $mol_scroll.prototype, "scroll_right", null);
    __decorate([
        $.$mol_mem
    ], $mol_scroll.prototype, "event_scroll", null);
    __decorate([
        $.$mol_mem
    ], $mol_scroll.prototype, "Strut", null);
    $.$mol_scroll = $mol_scroll;
})($ || ($ = {}));
//scroll.view.tree.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    var $$;
    (function ($$) {
        function $mol_scroll_top() {
            return 0;
        }
        $$.$mol_scroll_top = $mol_scroll_top;
        function $mol_scroll_left() {
            return 0;
        }
        $$.$mol_scroll_left = $mol_scroll_left;
        function $mol_scroll_moving() {
            return false;
        }
        $$.$mol_scroll_moving = $mol_scroll_moving;
        class $mol_scroll extends $.$mol_scroll {
            // scroll_top( next? : number ) {
            // 	return $mol_state_session.value( `${ this }.scroll_top()` , next ) || 0
            // }
            // 
            // scroll_left( next? : number ) {
            // 	return $mol_state_session.value( `${ this }.scroll_left()` , next ) || 0
            // }
            scroll_bottom(next) {
                return next || 0;
            }
            scroll_right(next) {
                return next || 0;
            }
            event_scroll(next) {
                const el = this.dom_node();
                const top = Math.max(0, el.scrollTop);
                const left = Math.max(0, el.scrollLeft);
                this.scroll_top(top);
                this.scroll_left(left);
                this.scroll_bottom(Math.max(0, el.scrollHeight - top - el.offsetHeight));
                this.scroll_right(Math.max(0, el.scrollWidth - left - el.offsetWidth));
            }
            get $$() {
                return this.$.$mol_ambient({
                    $mol_view_visible_height: () => {
                        const sizeWin = $.$mol_window.size();
                        const limit = this.$.$mol_view_visible_height();
                        return this.scroll_top() + Math.min(sizeWin.height, limit);
                    },
                    $mol_view_visible_width: () => {
                        const sizeWin = $.$mol_window.size();
                        const limit = this.$.$mol_view_visible_width();
                        return this.scroll_left() + Math.min(sizeWin.width, limit);
                    },
                    $mol_scroll_top: () => this.scroll_top(),
                    $mol_scroll_left: () => this.scroll_left(),
                });
            }
            strut_transform() {
                // try {
                return `translate3d( 0 , ${this.content_height()}px , 0 )`;
                // } catch( error ) {
                // 	return ''
                // }
            }
            sub_visible() {
                const sub = [
                    ...(this.sub() || []),
                    this.Strut(),
                ];
                const context = this.$$;
                sub.forEach(child => {
                    if (child instanceof $.$mol_view) {
                        child.$ = context;
                    }
                });
                return sub;
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_scroll.prototype, "scroll_bottom", null);
        __decorate([
            $.$mol_mem
        ], $mol_scroll.prototype, "scroll_right", null);
        __decorate([
            $.$mol_atom2_field
        ], $mol_scroll.prototype, "$$", null);
        $$.$mol_scroll = $mol_scroll;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//scroll.view.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        $.$mol_style_define($$.$mol_scroll, {
            display: 'block',
            overflow: 'auto',
            flex: '1 1 auto',
            alignSelf: 'stretch',
            boxSizing: 'border-box',
            willChange: 'scroll-position',
            transform: 'translateZ(0)',
            boxShadow: `inset 0 0 0 .5px ${"var(--mol_theme_line)" /* line */}`,
            maxHeight: '100%',
            maxWidth: '100%',
            webkitOverflowScrolling: 'touch',
            '::-webkit-scrollbar': {
                width: '.5rem',
                height: '.5rem',
            },
            '::-webkit-scrollbar-corner': {
                background: "var(--mol_theme_line)" /* line */,
            },
            '::-webkit-scrollbar-track': {
                background: "var(--mol_theme_line)" /* line */,
            },
            '::-webkit-scrollbar-thumb': {
                background: "var(--mol_theme_control)" /* control */,
            },
            '>': {
                $mol_view: {
                    transform: 'translateZ(0)',
                }
            },
            Strut: {
                position: 'absolute',
                top: '0',
                display: 'block',
                padding: '1px 1px 0 0',
                margin: '-1px 0 0 0',
                zIndex: '0',
                transition: 'none',
            },
            '@media': {
                'print': {
                    overflow: 'visible',
                }
            }
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//scroll.view.css.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_page extends $.$mol_view {
        /**
         *  ```
         *  sub /
         *  	<= Head
         *  	<= Body
         *  	<= Foot
         *  ```
         **/
        sub() {
            return [this.Head(), this.Body(), this.Foot()];
        }
        /**
         *  ```
         *  Head $mol_view
         *  	attr * mol_theme \$mol_theme_base
         *  	sub <= head
         *  ```
         **/
        Head() {
            return ((obj) => {
                obj.attr = () => ({
                    "mol_theme": "$mol_theme_base",
                });
                obj.sub = () => this.head();
                return obj;
            })(new this.$.$mol_view());
        }
        /**
         *  ```
         *  head /
         *  	<= Title
         *  	<= Tools
         *  ```
         **/
        head() {
            return [this.Title(), this.Tools()];
        }
        /**
         *  ```
         *  Title $mol_button
         *  	sub / <= title
         *  	event_click?val <=> event_top?val
         *  ```
         **/
        Title() {
            return ((obj) => {
                obj.sub = () => [this.title()];
                obj.event_click = (val) => this.event_top(val);
                return obj;
            })(new this.$.$mol_button());
        }
        /**
         *  ```
         *  event_top?val null
         *  ```
         **/
        event_top(val, force) {
            return (val !== void 0) ? val : null;
        }
        /**
         *  ```
         *  Tools $mol_view sub <= tools
         *  ```
         **/
        Tools() {
            return ((obj) => {
                obj.sub = () => this.tools();
                return obj;
            })(new this.$.$mol_view());
        }
        /**
         *  ```
         *  tools /$mol_view_content
         *  ```
         **/
        tools() {
            return [];
        }
        /**
         *  ```
         *  Body $mol_scroll
         *  	scroll_top?val <=> body_scroll_top?val
         *  	sub <= body
         *  ```
         **/
        Body() {
            return ((obj) => {
                obj.scroll_top = (val) => this.body_scroll_top(val);
                obj.sub = () => this.body();
                return obj;
            })(new this.$.$mol_scroll());
        }
        /**
         *  ```
         *  body_scroll_top?val 0
         *  ```
         **/
        body_scroll_top(val, force) {
            return (val !== void 0) ? val : 0;
        }
        /**
         *  ```
         *  body /$mol_view_content
         *  ```
         **/
        body() {
            return [];
        }
        /**
         *  ```
         *  Foot $mol_view
         *  	attr * mol_theme \$mol_theme_base
         *  	sub <= foot
         *  ```
         **/
        Foot() {
            return ((obj) => {
                obj.attr = () => ({
                    "mol_theme": "$mol_theme_base",
                });
                obj.sub = () => this.foot();
                return obj;
            })(new this.$.$mol_view());
        }
        /**
         *  ```
         *  foot /$mol_view
         *  ```
         **/
        foot() {
            return [];
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_page.prototype, "Head", null);
    __decorate([
        $.$mol_mem
    ], $mol_page.prototype, "Title", null);
    __decorate([
        $.$mol_mem
    ], $mol_page.prototype, "event_top", null);
    __decorate([
        $.$mol_mem
    ], $mol_page.prototype, "Tools", null);
    __decorate([
        $.$mol_mem
    ], $mol_page.prototype, "Body", null);
    __decorate([
        $.$mol_mem
    ], $mol_page.prototype, "body_scroll_top", null);
    __decorate([
        $.$mol_mem
    ], $mol_page.prototype, "Foot", null);
    $.$mol_page = $mol_page;
})($ || ($ = {}));
//page.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_page extends $.$mol_page {
            body_scroll_top(next) {
                return $.$mol_state_session.value(`${this}.body_scroll_top()`, next) || 0;
            }
        }
        $$.$mol_page = $mol_page;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//page.view.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        $.$mol_style_define($$.$mol_page, {
            display: 'flex',
            margin: '0',
            flexDirection: 'column',
            flex: '1 1 auto',
            position: 'relative',
            alignSelf: 'stretch',
            maxWidth: '100%',
            maxHeight: '100%',
            boxSizing: 'border-box',
            background: "var(--mol_theme_back)" /* back */,
            color: "var(--mol_theme_text)" /* text */,
            zIndex: '0',
            overflow: 'hidden',
            boxShadow: `inset 0 0 0 .5px ${"var(--mol_theme_line)" /* line */}`,
            ':focus': {
                outline: 'none',
            },
            Head: {
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                flex: '0 0 auto',
                position: 'relative',
                margin: '0',
                minHeight: 'calc( 1.5em + 1rem )',
                padding: '.5rem',
            },
            Title: {
                flex: '1000 1 50%',
                padding: '.5rem',
                wordBreak: 'normal',
                cursor: 'default',
                ':empty': {
                    display: 'none',
                },
            },
            Tools: {
                flex: '1 1 auto',
                display: 'flex',
                justifyContent: 'flex-end',
                ':empty': {
                    display: 'none',
                },
            },
            Body: {
                flex: '1000 1 100%',
                margin: '0',
            },
            Foot: {
                display: 'flex',
                justifyContent: 'space-between',
                flex: '0 0 auto',
                margin: '0',
                overflow: 'hidden',
            }
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//page.view.css.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/filler/filler.view.css", "[mol_filler] {\n\ttext-align: left;\n}\n");
})($ || ($ = {}));
//filler.view.css.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_filler extends $.$mol_view {
        /**
         *  ```
         *  minimal_height 500
         *  ```
         **/
        minimal_height() {
            return 500;
        }
        /**
         *  ```
         *  sub /
         *  	\Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor. Praesent et diam eget libero egestas mattis sit amet vitae augue. Nam tincidunt congue enim, ut porta lorem lacinia consectetur. Donec ut libero sed arcu vehicula ultricies a non tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut gravida lorem. Ut turpis felis, pulvinar a semper sed, adipiscing id dolor. Pellentesque auctor nisi id magna consequat sagittis. Curabitur dapibus enim sit amet elit pharetra tincidunt feugiat nisl imperdiet. Ut convallis libero in urna ultrices accumsan. Donec sed odio eros. Donec viverra mi quis quam pulvinar at malesuada arcu rhoncus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In rutrum accumsan ultricies. Mauris vitae nisi at sem facilisis semper ac in est.
         *  	\Vivamus fermentum semper porta. Nunc diam velit, adipiscing ut tristique vitae, sagittis vel odio. Maecenas convallis ullamcorper ultricies. Curabitur ornare, ligula semper consectetur sagittis, nisi diam iaculis velit, id fringilla sem nunc vel mi. Nam dictum, odio nec pretium volutpat, arcu ante placerat erat, non tristique elit urna et turpis. Quisque mi metus, ornare sit amet fermentum et, tincidunt et orci. Fusce eget orci a orci congue vestibulum. Ut dolor diam, elementum et vestibulum eu, porttitor vel elit. Curabitur venenatis pulvinar tellus gravida ornare. Sed et erat faucibus nunc euismod ultricies ut id justo. Nullam cursus suscipit nisi, et ultrices justo sodales nec. Fusce venenatis facilisis lectus ac semper. Aliquam at massa ipsum. Quisque bibendum purus convallis nulla ultrices ultricies. Nullam aliquam, mi eu aliquam tincidunt, purus velit laoreet tortor, viverra pretium nisi quam vitae mi. Fusce vel volutpat elit. Nam sagittis nisi dui.
         *  	\Suspendisse lectus leo, consectetur in tempor sit amet, placerat quis neque. Etiam luctus porttitor lorem, sed suscipit est rutrum non. Curabitur lobortis nisl a enim congue semper. Aenean commodo ultrices imperdiet. Vestibulum ut justo vel sapien venenatis tincidunt. Phasellus eget dolor sit amet ipsum dapibus condimentum vitae quis lectus. Aliquam ut massa in turpis dapibus convallis. Praesent elit lacus, vestibulum at malesuada et, ornare et est. Ut augue nunc, sodales ut euismod non, adipiscing vitae orci. Mauris ut placerat justo. Mauris in ultricies enim. Quisque nec est eleifend nulla ultrices egestas quis ut quam. Donec sollicitudin lectus a mauris pulvinar id aliquam urna cursus. Cras quis ligula sem, vel elementum mi. Phasellus non ullamcorper urna.
         *  	\Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In euismod ultrices facilisis. Vestibulum porta sapien adipiscing augue congue id pretium lectus molestie. Proin quis dictum nisl. Morbi id quam sapien, sed vestibulum sem. Duis elementum rutrum mauris sed convallis. Proin vestibulum magna mi. Aenean tristique hendrerit magna, ac facilisis nulla hendrerit ut. Sed non tortor sodales quam auctor elementum. Donec hendrerit nunc eget elit pharetra pulvinar. Suspendisse id tempus tortor. Aenean luctus, elit commodo laoreet commodo, justo nisi consequat massa, sed vulputate quam urna quis eros. Donec vel.
         *  	\Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor. Praesent et diam eget libero egestas mattis sit amet vitae augue. Nam tincidunt congue enim, ut porta lorem lacinia consectetur. Donec ut libero sed arcu vehicula ultricies a non tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut gravida lorem. Ut turpis felis, pulvinar a semper sed, adipiscing id dolor. Pellentesque auctor nisi id magna consequat sagittis. Curabitur dapibus enim sit amet elit pharetra tincidunt feugiat nisl imperdiet. Ut convallis libero in urna ultrices accumsan. Donec sed odio eros. Donec viverra mi quis quam pulvinar at malesuada arcu rhoncus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In rutrum accumsan ultricies. Mauris vitae nisi at sem facilisis semper ac in est.
         *  	\Vivamus fermentum semper porta. Nunc diam velit, adipiscing ut tristique vitae, sagittis vel odio. Maecenas convallis ullamcorper ultricies. Curabitur ornare, ligula semper consectetur sagittis, nisi diam iaculis velit, id fringilla sem nunc vel mi. Nam dictum, odio nec pretium volutpat, arcu ante placerat erat, non tristique elit urna et turpis. Quisque mi metus, ornare sit amet fermentum et, tincidunt et orci. Fusce eget orci a orci congue vestibulum. Ut dolor diam, elementum et vestibulum eu, porttitor vel elit. Curabitur venenatis pulvinar tellus gravida ornare. Sed et erat faucibus nunc euismod ultricies ut id justo. Nullam cursus suscipit nisi, et ultrices justo sodales nec. Fusce venenatis facilisis lectus ac semper. Aliquam at massa ipsum. Quisque bibendum purus convallis nulla ultrices ultricies. Nullam aliquam, mi eu aliquam tincidunt, purus velit laoreet tortor, viverra pretium nisi quam vitae mi. Fusce vel volutpat elit. Nam sagittis nisi dui.
         *  	\Suspendisse lectus leo, consectetur in tempor sit amet, placerat quis neque. Etiam luctus porttitor lorem, sed suscipit est rutrum non. Curabitur lobortis nisl a enim congue semper. Aenean commodo ultrices imperdiet. Vestibulum ut justo vel sapien venenatis tincidunt. Phasellus eget dolor sit amet ipsum dapibus condimentum vitae quis lectus. Aliquam ut massa in turpis dapibus convallis. Praesent elit lacus, vestibulum at malesuada et, ornare et est. Ut augue nunc, sodales ut euismod non, adipiscing vitae orci. Mauris ut placerat justo. Mauris in ultricies enim. Quisque nec est eleifend nulla ultrices egestas quis ut quam. Donec sollicitudin lectus a mauris pulvinar id aliquam urna cursus. Cras quis ligula sem, vel elementum mi. Phasellus non ullamcorper urna.
         *  	\Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In euismod ultrices facilisis. Vestibulum porta sapien adipiscing augue congue id pretium lectus molestie. Proin quis dictum nisl. Morbi id quam sapien, sed vestibulum sem. Duis elementum rutrum mauris sed convallis. Proin vestibulum magna mi. Aenean tristique hendrerit magna, ac facilisis nulla hendrerit ut. Sed non tortor sodales quam auctor elementum. Donec hendrerit nunc eget elit pharetra pulvinar. Suspendisse id tempus tortor. Aenean luctus, elit commodo laoreet commodo, justo nisi consequat massa, sed vulputate quam urna quis eros. Donec vel.
         *  ```
         **/
        sub() {
            return ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor. Praesent et diam eget libero egestas mattis sit amet vitae augue. Nam tincidunt congue enim, ut porta lorem lacinia consectetur. Donec ut libero sed arcu vehicula ultricies a non tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut gravida lorem. Ut turpis felis, pulvinar a semper sed, adipiscing id dolor. Pellentesque auctor nisi id magna consequat sagittis. Curabitur dapibus enim sit amet elit pharetra tincidunt feugiat nisl imperdiet. Ut convallis libero in urna ultrices accumsan. Donec sed odio eros. Donec viverra mi quis quam pulvinar at malesuada arcu rhoncus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In rutrum accumsan ultricies. Mauris vitae nisi at sem facilisis semper ac in est.", "Vivamus fermentum semper porta. Nunc diam velit, adipiscing ut tristique vitae, sagittis vel odio. Maecenas convallis ullamcorper ultricies. Curabitur ornare, ligula semper consectetur sagittis, nisi diam iaculis velit, id fringilla sem nunc vel mi. Nam dictum, odio nec pretium volutpat, arcu ante placerat erat, non tristique elit urna et turpis. Quisque mi metus, ornare sit amet fermentum et, tincidunt et orci. Fusce eget orci a orci congue vestibulum. Ut dolor diam, elementum et vestibulum eu, porttitor vel elit. Curabitur venenatis pulvinar tellus gravida ornare. Sed et erat faucibus nunc euismod ultricies ut id justo. Nullam cursus suscipit nisi, et ultrices justo sodales nec. Fusce venenatis facilisis lectus ac semper. Aliquam at massa ipsum. Quisque bibendum purus convallis nulla ultrices ultricies. Nullam aliquam, mi eu aliquam tincidunt, purus velit laoreet tortor, viverra pretium nisi quam vitae mi. Fusce vel volutpat elit. Nam sagittis nisi dui.", "Suspendisse lectus leo, consectetur in tempor sit amet, placerat quis neque. Etiam luctus porttitor lorem, sed suscipit est rutrum non. Curabitur lobortis nisl a enim congue semper. Aenean commodo ultrices imperdiet. Vestibulum ut justo vel sapien venenatis tincidunt. Phasellus eget dolor sit amet ipsum dapibus condimentum vitae quis lectus. Aliquam ut massa in turpis dapibus convallis. Praesent elit lacus, vestibulum at malesuada et, ornare et est. Ut augue nunc, sodales ut euismod non, adipiscing vitae orci. Mauris ut placerat justo. Mauris in ultricies enim. Quisque nec est eleifend nulla ultrices egestas quis ut quam. Donec sollicitudin lectus a mauris pulvinar id aliquam urna cursus. Cras quis ligula sem, vel elementum mi. Phasellus non ullamcorper urna.", "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In euismod ultrices facilisis. Vestibulum porta sapien adipiscing augue congue id pretium lectus molestie. Proin quis dictum nisl. Morbi id quam sapien, sed vestibulum sem. Duis elementum rutrum mauris sed convallis. Proin vestibulum magna mi. Aenean tristique hendrerit magna, ac facilisis nulla hendrerit ut. Sed non tortor sodales quam auctor elementum. Donec hendrerit nunc eget elit pharetra pulvinar. Suspendisse id tempus tortor. Aenean luctus, elit commodo laoreet commodo, justo nisi consequat massa, sed vulputate quam urna quis eros. Donec vel.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor. Praesent et diam eget libero egestas mattis sit amet vitae augue. Nam tincidunt congue enim, ut porta lorem lacinia consectetur. Donec ut libero sed arcu vehicula ultricies a non tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut gravida lorem. Ut turpis felis, pulvinar a semper sed, adipiscing id dolor. Pellentesque auctor nisi id magna consequat sagittis. Curabitur dapibus enim sit amet elit pharetra tincidunt feugiat nisl imperdiet. Ut convallis libero in urna ultrices accumsan. Donec sed odio eros. Donec viverra mi quis quam pulvinar at malesuada arcu rhoncus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In rutrum accumsan ultricies. Mauris vitae nisi at sem facilisis semper ac in est.", "Vivamus fermentum semper porta. Nunc diam velit, adipiscing ut tristique vitae, sagittis vel odio. Maecenas convallis ullamcorper ultricies. Curabitur ornare, ligula semper consectetur sagittis, nisi diam iaculis velit, id fringilla sem nunc vel mi. Nam dictum, odio nec pretium volutpat, arcu ante placerat erat, non tristique elit urna et turpis. Quisque mi metus, ornare sit amet fermentum et, tincidunt et orci. Fusce eget orci a orci congue vestibulum. Ut dolor diam, elementum et vestibulum eu, porttitor vel elit. Curabitur venenatis pulvinar tellus gravida ornare. Sed et erat faucibus nunc euismod ultricies ut id justo. Nullam cursus suscipit nisi, et ultrices justo sodales nec. Fusce venenatis facilisis lectus ac semper. Aliquam at massa ipsum. Quisque bibendum purus convallis nulla ultrices ultricies. Nullam aliquam, mi eu aliquam tincidunt, purus velit laoreet tortor, viverra pretium nisi quam vitae mi. Fusce vel volutpat elit. Nam sagittis nisi dui.", "Suspendisse lectus leo, consectetur in tempor sit amet, placerat quis neque. Etiam luctus porttitor lorem, sed suscipit est rutrum non. Curabitur lobortis nisl a enim congue semper. Aenean commodo ultrices imperdiet. Vestibulum ut justo vel sapien venenatis tincidunt. Phasellus eget dolor sit amet ipsum dapibus condimentum vitae quis lectus. Aliquam ut massa in turpis dapibus convallis. Praesent elit lacus, vestibulum at malesuada et, ornare et est. Ut augue nunc, sodales ut euismod non, adipiscing vitae orci. Mauris ut placerat justo. Mauris in ultricies enim. Quisque nec est eleifend nulla ultrices egestas quis ut quam. Donec sollicitudin lectus a mauris pulvinar id aliquam urna cursus. Cras quis ligula sem, vel elementum mi. Phasellus non ullamcorper urna.", "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In euismod ultrices facilisis. Vestibulum porta sapien adipiscing augue congue id pretium lectus molestie. Proin quis dictum nisl. Morbi id quam sapien, sed vestibulum sem. Duis elementum rutrum mauris sed convallis. Proin vestibulum magna mi. Aenean tristique hendrerit magna, ac facilisis nulla hendrerit ut. Sed non tortor sodales quam auctor elementum. Donec hendrerit nunc eget elit pharetra pulvinar. Suspendisse id tempus tortor. Aenean luctus, elit commodo laoreet commodo, justo nisi consequat massa, sed vulputate quam urna quis eros. Donec vel."];
        }
    }
    $.$mol_filler = $mol_filler;
})($ || ($ = {}));
//filler.view.tree.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mpk_tss_software extends $.$mol_page {
        /**
         *  ```
         *  title @ \Software
         *  ```
         **/
        title() {
            return this.$.$mol_locale.text("$mpk_tss_software_title");
        }
        /**
         *  ```
         *  body / <= Content
         *  ```
         **/
        body() {
            return [this.Content()];
        }
        /**
         *  ```
         *  Content $mol_filler
         *  ```
         **/
        Content() {
            return ((obj) => {
                return obj;
            })(new this.$.$mol_filler());
        }
    }
    __decorate([
        $.$mol_mem
    ], $mpk_tss_software.prototype, "Content", null);
    $.$mpk_tss_software = $mpk_tss_software;
})($ || ($ = {}));
//software.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/bar/bar.view.css", "[mol_bar] {\n\tdisplay: flex;\n\tbox-shadow: inset 0 0 0 .5px var(--mol_theme_line);\n\tborder-radius: var(--mol_skin_round);\n}\n\n[mol_bar] > * {\n\tborder-radius: 0;\n}\n\n[mol_bar] > *:first-child {\n\tborder-top-left-radius: var(--mol_skin_round);\n\tborder-bottom-left-radius: var(--mol_skin_round);\n}\n\n[mol_bar] > *:not(:first-child) {\n\tmargin-left: 1px;\n}\n\n[mol_bar] > *:last-child {\n\tborder-top-right-radius: var(--mol_skin_round);\n\tborder-bottom-right-radius: var(--mol_skin_round);\n}\n");
})($ || ($ = {}));
//bar.view.css.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_bar extends $.$mol_view {
    }
    $.$mol_bar = $mol_bar;
})($ || ($ = {}));
//bar.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_match_text(query, values) {
        const tags = query.toLowerCase().trim().split(/\s+/).filter(tag => tag);
        if (tags.length === 0)
            return () => true;
        return (variant) => {
            const vals = values(variant);
            return tags.every(tag => vals.some(val => val.toLowerCase().indexOf(tag) >= 0));
        };
    }
    $.$mol_match_text = $mol_match_text;
})($ || ($ = {}));
//text.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_pop extends $.$mol_view {
        /**
         *  ```
         *  event * keydown?event <=> keydown?event
         *  ```
         **/
        event() {
            return ({
                "keydown": (event) => this.keydown(event),
            });
        }
        /**
         *  ```
         *  keydown?event null
         *  ```
         **/
        keydown(event, force) {
            return (event !== void 0) ? event : null;
        }
        /**
         *  ```
         *  showed?val false
         *  ```
         **/
        showed(val, force) {
            return (val !== void 0) ? val : false;
        }
        /**
         *  ```
         *  plugins /$mol_plugin <= Meter
         *  ```
         **/
        plugins() {
            return [this.Meter()];
        }
        top() {
            return this.Meter().top();
        }
        bottom() {
            return this.Meter().bottom();
        }
        left() {
            return this.Meter().left();
        }
        right() {
            return this.Meter().right();
        }
        /**
         *  ```
         *  Meter $mol_meter
         *  	top => top
         *  	bottom => bottom
         *  	left => left
         *  	right => right
         *  ```
         **/
        Meter() {
            return ((obj) => {
                return obj;
            })(new this.$.$mol_meter());
        }
        /**
         *  ```
         *  sub /
         *  	<= Anchor
         *  	<= Bubble
         *  ```
         **/
        sub() {
            return [this.Anchor(), this.Bubble()];
        }
        /**
         *  ```
         *  Anchor null
         *  ```
         **/
        Anchor() {
            return null;
        }
        /**
         *  ```
         *  Bubble $mol_pop_bubble
         *  	align <= align
         *  	content <= bubble_content
         *  	height_max <= height_max
         *  ```
         **/
        Bubble() {
            return ((obj) => {
                obj.align = () => this.align();
                obj.content = () => this.bubble_content();
                obj.height_max = () => this.height_max();
                return obj;
            })(new this.$.$mol_pop_bubble());
        }
        /**
         *  ```
         *  align \bottom_center
         *  ```
         **/
        align() {
            return "bottom_center";
        }
        /**
         *  ```
         *  bubble_content /$mol_view_content
         *  ```
         **/
        bubble_content() {
            return [];
        }
        /**
         *  ```
         *  height_max 9999
         *  ```
         **/
        height_max() {
            return 9999;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_pop.prototype, "keydown", null);
    __decorate([
        $.$mol_mem
    ], $mol_pop.prototype, "showed", null);
    __decorate([
        $.$mol_mem
    ], $mol_pop.prototype, "Meter", null);
    __decorate([
        $.$mol_mem
    ], $mol_pop.prototype, "Bubble", null);
    $.$mol_pop = $mol_pop;
})($ || ($ = {}));
(function ($) {
    class $mol_pop_bubble extends $.$mol_scroll {
        /**
         *  ```
         *  sub <= content
         *  ```
         **/
        sub() {
            return this.content();
        }
        /**
         *  ```
         *  content /$mol_view_content
         *  ```
         **/
        content() {
            return [];
        }
        /**
         *  ```
         *  style *
         *  	^
         *  	maxHeight <= height_max
         *  ```
         **/
        style() {
            return (Object.assign(Object.assign({}, super.style()), { "maxHeight": this.height_max() }));
        }
        /**
         *  ```
         *  height_max 9999
         *  ```
         **/
        height_max() {
            return 9999;
        }
        /**
         *  ```
         *  attr *
         *  	^
         *  	mol_pop_align <= align
         *  	tabindex 0
         *  ```
         **/
        attr() {
            return (Object.assign(Object.assign({}, super.attr()), { "mol_pop_align": this.align(), "tabindex": 0 }));
        }
        /**
         *  ```
         *  align \
         *  ```
         **/
        align() {
            return "";
        }
    }
    $.$mol_pop_bubble = $mol_pop_bubble;
})($ || ($ = {}));
//pop.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_pop extends $.$mol_pop {
            sub() {
                return [
                    this.Anchor(),
                    ...this.showed() ? [this.Bubble()] : [],
                ];
            }
            height_max() {
                return this.$.$mol_window.size().height * 0.33;
            }
            align() {
                const viewport = this.$.$mol_window.size();
                const vert = this.top() > (viewport.height - this.bottom()) ? 'top' : 'bottom';
                const hor = this.left() > (viewport.width - this.right()) ? 'left' : 'right';
                return `${vert}_${hor}`;
            }
            keydown(event) {
                if (event.defaultPrevented)
                    return;
                if (event.keyCode === $.$mol_keyboard_code.escape) {
                    event.preventDefault();
                    this.showed(false);
                }
            }
        }
        $$.$mol_pop = $mol_pop;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//pop.view.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/pop/pop.view.css", "[mol_pop] {\n\tposition: relative;\n\tdisplay: inline-flex;\n}\n\n[mol_pop]:hover {\n\tz-index: 4;\n}\n\n[mol_pop_bubble] {\n\tbox-shadow: 0 0 0 1px var(--mol_theme_line);\n\tborder-radius: var(--mol_skin_round);\n\tposition: absolute;\n\tz-index: 3;\n\tbackground: var(--mol_theme_back);\n\tmax-width: none;\n\tmax-height: none;\n\toverflow: hidden;\n\toverflow-y: auto;\n\tword-break: normal;\n}\n\n[mol_pop_bubble][mol_scroll] {\n\tbackground: var(--mol_theme_back);\n}\n\n[mol_pop_bubble]:focus {\n\toutline: none;\n}\n\n[mol_pop_align=\"left_top\"] {\n\ttransform: translate(-100%);\n\tleft: 0;\n\tbottom: 0;\n}\n\n[mol_pop_align=\"left_center\"] {\n\ttransform: translate(-100%, -50%);\n\tleft: 0;\n\ttop: 50%;\n}\n\n[mol_pop_align=\"left_bottom\"] {\n\ttransform: translate(-100%);\n\tleft: 0;\n\ttop: 0;\n}\n\n[mol_pop_align=\"right_top\"] {\n\ttransform: translate(100%);\n\tright: 0;\n\tbottom: 0;\n}\n\n[mol_pop_align=\"right_center\"] {\n\ttransform: translate(100%, -50%);\n\tright: 0;\n\ttop: 50%;\n}\n\n[mol_pop_align=\"right_bottom\"] {\n\ttransform: translate(100%);\n\tright: 0;\n\ttop: 0;\n}\n\n[mol_pop_align=\"center\"] {\n\tleft: 50%;\n\ttop: 50%;\n\ttransform: translate(-50%, -50%);\n}\n\n[mol_pop_align=\"top_left\"] {\n\tright: 0;\n\tbottom: 100%;\n}\n\n[mol_pop_align=\"top_center\"] {\n\ttransform: translate(-50%);\n\tleft: 50%;\n\tbottom: 100%;\n}\n\n[mol_pop_align=\"top_right\"] {\n\tleft: 0;\n\tbottom: 100%;\n}\n\n[mol_pop_align=\"bottom_left\"] {\n\tright: 0;\n\ttop: 100%;\n}\n\n[mol_pop_align=\"bottom_center\"] {\n\ttransform: translate(-50%);\n\tleft: 50%;\n\ttop: 100%;\n}\n\n[mol_pop_align=\"bottom_right\"] {\n\tleft: 0;\n\ttop: 100%;\n}\n");
})($ || ($ = {}));
//pop.view.css.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_dimmer extends $.$mol_view {
        /**
         *  ```
         *  haystack \
         *  ```
         **/
        haystack() {
            return "";
        }
        /**
         *  ```
         *  needle \
         *  ```
         **/
        needle() {
            return "";
        }
        /**
         *  ```
         *  sub <= parts
         *  ```
         **/
        sub() {
            return this.parts();
        }
        /**
         *  ```
         *  parts /$mol_view_content
         *  ```
         **/
        parts() {
            return [];
        }
        /**
         *  ```
         *  Low!id $mol_view sub / <= string!id
         *  ```
         **/
        Low(id) {
            return ((obj) => {
                obj.sub = () => [this.string(id)];
                return obj;
            })(new this.$.$mol_view());
        }
        /**
         *  ```
         *  string!id \
         *  ```
         **/
        string(id) {
            return "";
        }
    }
    __decorate([
        $.$mol_mem_key
    ], $mol_dimmer.prototype, "Low", null);
    $.$mol_dimmer = $mol_dimmer;
})($ || ($ = {}));
//dimmer.view.tree.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_dimmer extends $.$mol_dimmer {
            parts() {
                const needle = this.needle();
                if (!needle)
                    return [this.haystack()];
                let chunks = [];
                let strings = this.strings();
                for (let index = 0; index < strings.length; index++) {
                    if (strings[index] === '')
                        continue;
                    chunks.push((index % 2) ? strings[index] : this.Low(index));
                }
                return chunks;
            }
            strings() {
                return this.haystack().split(new RegExp(`(${this.needle()})`, 'gi'));
            }
            string(index) {
                return this.strings()[index];
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_dimmer.prototype, "strings", null);
        $$.$mol_dimmer = $mol_dimmer;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//dimmer.view.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/dimmer/dimmer.view.css", "[mol_dimmer_low] {\n\topacity: 0.66;\n}\n");
})($ || ($ = {}));
//dimmer.view.css.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_nav extends $.$mol_plugin {
        /**
         *  ```
         *  cycle?val false
         *  ```
         **/
        cycle(val, force) {
            return (val !== void 0) ? val : false;
        }
        /**
         *  ```
         *  mod_ctrl false
         *  ```
         **/
        mod_ctrl() {
            return false;
        }
        /**
         *  ```
         *  mod_shift false
         *  ```
         **/
        mod_shift() {
            return false;
        }
        /**
         *  ```
         *  mod_alt false
         *  ```
         **/
        mod_alt() {
            return false;
        }
        /**
         *  ```
         *  keys_x?val /
         *  ```
         **/
        keys_x(val, force) {
            return (val !== void 0) ? val : [];
        }
        /**
         *  ```
         *  keys_y?val /
         *  ```
         **/
        keys_y(val, force) {
            return (val !== void 0) ? val : [];
        }
        /**
         *  ```
         *  current_x?val \
         *  ```
         **/
        current_x(val, force) {
            return (val !== void 0) ? val : "";
        }
        /**
         *  ```
         *  current_y?val \
         *  ```
         **/
        current_y(val, force) {
            return (val !== void 0) ? val : "";
        }
        /**
         *  ```
         *  event_up?event null
         *  ```
         **/
        event_up(event, force) {
            return (event !== void 0) ? event : null;
        }
        /**
         *  ```
         *  event_down?event null
         *  ```
         **/
        event_down(event, force) {
            return (event !== void 0) ? event : null;
        }
        /**
         *  ```
         *  event_left?event null
         *  ```
         **/
        event_left(event, force) {
            return (event !== void 0) ? event : null;
        }
        /**
         *  ```
         *  event_right?event null
         *  ```
         **/
        event_right(event, force) {
            return (event !== void 0) ? event : null;
        }
        /**
         *  ```
         *  event *
         *  	^
         *  	keydown?event <=> event_key?event
         *  ```
         **/
        event() {
            return (Object.assign(Object.assign({}, super.event()), { "keydown": (event) => this.event_key(event) }));
        }
        /**
         *  ```
         *  event_key?event null
         *  ```
         **/
        event_key(event, force) {
            return (event !== void 0) ? event : null;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_nav.prototype, "cycle", null);
    __decorate([
        $.$mol_mem
    ], $mol_nav.prototype, "keys_x", null);
    __decorate([
        $.$mol_mem
    ], $mol_nav.prototype, "keys_y", null);
    __decorate([
        $.$mol_mem
    ], $mol_nav.prototype, "current_x", null);
    __decorate([
        $.$mol_mem
    ], $mol_nav.prototype, "current_y", null);
    __decorate([
        $.$mol_mem
    ], $mol_nav.prototype, "event_up", null);
    __decorate([
        $.$mol_mem
    ], $mol_nav.prototype, "event_down", null);
    __decorate([
        $.$mol_mem
    ], $mol_nav.prototype, "event_left", null);
    __decorate([
        $.$mol_mem
    ], $mol_nav.prototype, "event_right", null);
    __decorate([
        $.$mol_mem
    ], $mol_nav.prototype, "event_key", null);
    $.$mol_nav = $mol_nav;
})($ || ($ = {}));
//nav.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_nav extends $.$mol_nav {
            event_key(event) {
                if (event.defaultPrevented)
                    return;
                if (this.mod_ctrl() && !event.ctrlKey)
                    return;
                if (this.mod_shift() && !event.shiftKey)
                    return;
                if (this.mod_alt() && !event.altKey)
                    return;
                switch (event.keyCode) {
                    case $.$mol_keyboard_code.up: return this.event_up(event);
                    case $.$mol_keyboard_code.down: return this.event_down(event);
                    case $.$mol_keyboard_code.left: return this.event_left(event);
                    case $.$mol_keyboard_code.right: return this.event_right(event);
                    case $.$mol_keyboard_code.pageUp: return this.event_up(event);
                    case $.$mol_keyboard_code.pageDown: return this.event_down(event);
                }
            }
            event_up(event) {
                const keys = this.keys_y();
                if (keys.length < 2)
                    return;
                const index_y = this.index_y();
                const index_old = index_y === null ? 0 : index_y;
                const index_new = (index_old + keys.length - 1) % keys.length;
                event.preventDefault();
                if (index_old === 0 && !this.cycle())
                    return;
                this.current_y(this.keys_y()[index_new]);
            }
            event_down(event) {
                const keys = this.keys_y();
                if (keys.length < 2)
                    return;
                const index_y = this.index_y();
                const index_old = index_y === null ? keys.length - 1 : index_y;
                const index_new = (index_old + 1) % keys.length;
                event.preventDefault();
                if (index_new === 0 && !this.cycle())
                    return;
                this.current_y(this.keys_y()[index_new]);
            }
            event_left(event) {
                const keys = this.keys_x();
                if (keys.length < 2)
                    return;
                const index_x = this.index_x();
                const index_old = index_x === null ? 0 : index_x;
                const index_new = (index_old + keys.length - 1) % keys.length;
                event.preventDefault();
                if (index_old === 0 && !this.cycle())
                    return;
                this.current_x(this.keys_x()[index_new]);
            }
            event_right(event) {
                const keys = this.keys_x();
                if (keys.length < 2)
                    return;
                const index_x = this.index_x();
                const index_old = index_x === null ? keys.length - 1 : index_x;
                const index_new = (index_old + 1) % keys.length;
                event.preventDefault();
                if (index_new === 0 && !this.cycle())
                    return;
                this.current_x(this.keys_x()[index_new]);
            }
            index_y() {
                let index = this.keys_y().indexOf(this.current_y());
                if (index < 0)
                    return null;
                return index;
            }
            index_x() {
                let index = this.keys_x().indexOf(this.current_x());
                if (index < 0)
                    return null;
                return index;
            }
        }
        $$.$mol_nav = $mol_nav;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//nav.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_list extends $.$mol_view {
        /**
         *  ```
         *  sub <= rows
         *  ```
         **/
        sub() {
            return this.rows();
        }
        /**
         *  ```
         *  rows /$mol_view
         *  ```
         **/
        rows() {
            return [];
        }
        /**
         *  ```
         *  Empty null
         *  ```
         **/
        Empty() {
            return null;
        }
    }
    $.$mol_list = $mol_list;
})($ || ($ = {}));
//list.view.tree.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_list extends $.$mol_list {
            sub() {
                const rows = this.rows();
                return (rows.length === 0) ? [this.Empty()] : rows;
            }
            row_offsets() {
                var sub = this.sub();
                let heightLimit = this.$.$mol_view_visible_height();
                var offset = 0;
                var next = [];
                for (let child of sub) {
                    next.push(offset);
                    if (child instanceof $.$mol_view) {
                        offset += child.minimal_height();
                    }
                    if (offset > heightLimit)
                        break;
                }
                return next;
            }
            row_context(index) {
                return this.$.$mol_ambient({
                    $mol_view_visible_height: () => this.$.$mol_view_visible_height() - this.row_offsets()[index],
                });
            }
            sub_visible() {
                var sub = this.sub();
                if (!sub)
                    return sub;
                for (let i = 0; i < sub.length; ++i) {
                    const child = sub[i];
                    if (child instanceof $.$mol_view) {
                        child.$ = this.row_context(i);
                    }
                }
                var limit = this.row_offsets().length;
                var next = [];
                for (let i = 0; i < limit; ++i) {
                    const child = sub[i];
                    if (child == null)
                        continue;
                    next.push(child);
                }
                return next;
            }
            minimal_height() {
                var height = 0;
                var sub = this.sub();
                if (sub)
                    sub.forEach((child) => {
                        if (child instanceof $.$mol_view) {
                            height += child.minimal_height();
                        }
                    });
                return height;
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_list.prototype, "sub", null);
        __decorate([
            $.$mol_mem
        ], $mol_list.prototype, "row_offsets", null);
        __decorate([
            $.$mol_mem_key
        ], $mol_list.prototype, "row_context", null);
        __decorate([
            $.$mol_mem
        ], $mol_list.prototype, "sub_visible", null);
        __decorate([
            $.$mol_mem
        ], $mol_list.prototype, "minimal_height", null);
        $$.$mol_list = $mol_list;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//list.view.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/list/list.view.css", "[mol_list] {\n\twill-change: contents;\n\tdisplay: block;\n}\n\n[mol_list] > * {\n\tdisplay: block;\n}\n");
})($ || ($ = {}));
//list.view.css.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_icon_chevron extends $.$mol_icon {
        /**
         *  ```
         *  path \M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z
         *  ```
         **/
        path() {
            return "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z";
        }
    }
    $.$mol_icon_chevron = $mol_icon_chevron;
})($ || ($ = {}));
//chevron.view.tree.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_select extends $.$mol_pop {
        /**
         *  ```
         *  dictionary *
         *  ```
         **/
        dictionary() {
            return ({});
        }
        /**
         *  ```
         *  options /string
         *  ```
         **/
        options() {
            return [];
        }
        /**
         *  ```
         *  value?val \
         *  ```
         **/
        value(val, force) {
            return (val !== void 0) ? val : "";
        }
        /**
         *  ```
         *  minimal_height 40
         *  ```
         **/
        minimal_height() {
            return 40;
        }
        /**
         *  ```
         *  Option_row!id $mol_button_minor
         *  	event_click?event <=> event_select!id?event
         *  	sub <= option_content!id
         *  ```
         **/
        Option_row(id) {
            return ((obj) => {
                obj.event_click = (event) => this.event_select(id, event);
                obj.sub = () => this.option_content(id);
                return obj;
            })(new this.$.$mol_button_minor());
        }
        /**
         *  ```
         *  event_select!id?event null
         *  ```
         **/
        event_select(id, event, force) {
            return (event !== void 0) ? event : null;
        }
        /**
         *  ```
         *  option_content!id / <= Option_label!id
         *  ```
         **/
        option_content(id) {
            return [this.Option_label(id)];
        }
        /**
         *  ```
         *  Option_label!id $mol_dimmer
         *  	minimal_height 40
         *  	haystack <= option_label!id
         *  	needle <= filter_pattern?val
         *  ```
         **/
        Option_label(id) {
            return ((obj) => {
                obj.minimal_height = () => 40;
                obj.haystack = () => this.option_label(id);
                obj.needle = () => this.filter_pattern();
                return obj;
            })(new this.$.$mol_dimmer());
        }
        /**
         *  ```
         *  option_label!id \
         *  ```
         **/
        option_label(id) {
            return "";
        }
        /**
         *  ```
         *  filter_pattern?val \
         *  ```
         **/
        filter_pattern(val, force) {
            return (val !== void 0) ? val : "";
        }
        /**
         *  ```
         *  No_options $mol_view sub / <= no_options_message
         *  ```
         **/
        No_options() {
            return ((obj) => {
                obj.sub = () => [this.no_options_message()];
                return obj;
            })(new this.$.$mol_view());
        }
        /**
         *  ```
         *  no_options_message @ \No options
         *  ```
         **/
        no_options_message() {
            return this.$.$mol_locale.text("$mol_select_no_options_message");
        }
        /**
         *  ```
         *  plugins /
         *  	^
         *  	<= Nav
         *  ```
         **/
        plugins() {
            return [...super.plugins(), this.Nav()];
        }
        /**
         *  ```
         *  Nav $mol_nav
         *  	keys_y <= nav_components
         *  	current_y?component <=> option_focused?component
         *  	cycle?val <=> nav_cycle?val
         *  ```
         **/
        Nav() {
            return ((obj) => {
                obj.keys_y = () => this.nav_components();
                obj.current_y = (component) => this.option_focused(component);
                obj.cycle = (val) => this.nav_cycle(val);
                return obj;
            })(new this.$.$mol_nav());
        }
        /**
         *  ```
         *  nav_components /$mol_view
         *  ```
         **/
        nav_components() {
            return [];
        }
        /**
         *  ```
         *  option_focused?component null
         *  ```
         **/
        option_focused(component, force) {
            return (component !== void 0) ? component : null;
        }
        /**
         *  ```
         *  nav_cycle?val true
         *  ```
         **/
        nav_cycle(val, force) {
            return (val !== void 0) ? val : true;
        }
        /**
         *  ```
         *  showed?val <=> options_showed?val
         *  ```
         **/
        showed(val, force) {
            return this.options_showed(val);
        }
        /**
         *  ```
         *  options_showed?val false
         *  ```
         **/
        options_showed(val, force) {
            return (val !== void 0) ? val : false;
        }
        /**
         *  ```
         *  Anchor <= Trigger
         *  ```
         **/
        Anchor() {
            return this.Trigger();
        }
        /**
         *  ```
         *  Trigger $mol_button_minor
         *  	click?event <=> open?event
         *  	sub <= trigger_content
         *  ```
         **/
        Trigger() {
            return ((obj) => {
                obj.click = (event) => this.open(event);
                obj.sub = () => this.trigger_content();
                return obj;
            })(new this.$.$mol_button_minor());
        }
        /**
         *  ```
         *  open?event null
         *  ```
         **/
        open(event, force) {
            return (event !== void 0) ? event : null;
        }
        /**
         *  ```
         *  trigger_content /$mol_view_content
         *  ```
         **/
        trigger_content() {
            return [];
        }
        /**
         *  ```
         *  bubble_content / <= Menu
         *  ```
         **/
        bubble_content() {
            return [this.Menu()];
        }
        /**
         *  ```
         *  Menu $mol_list rows <= menu_content
         *  ```
         **/
        Menu() {
            return ((obj) => {
                obj.rows = () => this.menu_content();
                return obj;
            })(new this.$.$mol_list());
        }
        /**
         *  ```
         *  menu_content /$mol_view
         *  ```
         **/
        menu_content() {
            return [];
        }
        /**
         *  ```
         *  option_content_current /$mol_view_content
         *  ```
         **/
        option_content_current() {
            return [];
        }
        /**
         *  ```
         *  Filter $mol_string
         *  	value?val <=> filter_pattern?val
         *  	hint <= filter_hint
         *  	debounce <= debounce
         *  ```
         **/
        Filter() {
            return ((obj) => {
                obj.value = (val) => this.filter_pattern(val);
                obj.hint = () => this.filter_hint();
                obj.debounce = () => this.debounce();
                return obj;
            })(new this.$.$mol_string());
        }
        /**
         *  ```
         *  filter_hint <= hint
         *  ```
         **/
        filter_hint() {
            return this.hint();
        }
        /**
         *  ```
         *  hint @ \Search..
         *  ```
         **/
        hint() {
            return this.$.$mol_locale.text("$mol_select_hint");
        }
        /**
         *  ```
         *  debounce 200
         *  ```
         **/
        debounce() {
            return 200;
        }
        /**
         *  ```
         *  Trigger_icon $mol_icon_chevron
         *  ```
         **/
        Trigger_icon() {
            return ((obj) => {
                return obj;
            })(new this.$.$mol_icon_chevron());
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_select.prototype, "value", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_select.prototype, "Option_row", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_select.prototype, "event_select", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_select.prototype, "Option_label", null);
    __decorate([
        $.$mol_mem
    ], $mol_select.prototype, "filter_pattern", null);
    __decorate([
        $.$mol_mem
    ], $mol_select.prototype, "No_options", null);
    __decorate([
        $.$mol_mem
    ], $mol_select.prototype, "Nav", null);
    __decorate([
        $.$mol_mem
    ], $mol_select.prototype, "option_focused", null);
    __decorate([
        $.$mol_mem
    ], $mol_select.prototype, "nav_cycle", null);
    __decorate([
        $.$mol_mem
    ], $mol_select.prototype, "showed", null);
    __decorate([
        $.$mol_mem
    ], $mol_select.prototype, "options_showed", null);
    __decorate([
        $.$mol_mem
    ], $mol_select.prototype, "Trigger", null);
    __decorate([
        $.$mol_mem
    ], $mol_select.prototype, "open", null);
    __decorate([
        $.$mol_mem
    ], $mol_select.prototype, "Menu", null);
    __decorate([
        $.$mol_mem
    ], $mol_select.prototype, "Filter", null);
    __decorate([
        $.$mol_mem
    ], $mol_select.prototype, "Trigger_icon", null);
    $.$mol_select = $mol_select;
})($ || ($ = {}));
//select.view.tree.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_select extends $.$mol_select {
            filter_pattern(next) {
                if (!this.focused())
                    return '';
                return next || '';
            }
            open() {
                this.options_showed(true);
            }
            options_showed(next = false) {
                this.focused();
                return next;
            }
            options() {
                return Object.keys(this.dictionary());
            }
            options_filtered() {
                let options = this.options();
                options = options.filter($.$mol_match_text(this.filter_pattern(), (id) => [this.option_label(id)]));
                const index = options.indexOf(this.value());
                if (index >= 0)
                    options = [...options.slice(0, index), ...options.slice(index + 1)];
                return options;
            }
            option_label(id) {
                const value = this.dictionary()[id];
                return value == null ? id : value;
            }
            option_rows() {
                if (this.options_filtered().length === 0)
                    return [this.No_options()];
                let options = this.options_filtered().map((option) => this.Option_row(option));
                return options;
            }
            option_focused(component) {
                if (component == null) {
                    for (let comp of this.nav_components()) {
                        if (comp && comp.focused())
                            return comp;
                    }
                    return this.Filter();
                }
                if (this.options_showed()) {
                    component.focused(true);
                }
                return component;
            }
            event_select(id, event) {
                this.value(id);
                this.focused(false);
            }
            nav_components() {
                return [this.Filter(), ...this.option_rows()];
            }
            option_content_current() {
                return this.option_content(this.value());
            }
            trigger_content() {
                return (!this.value() && this.Filter())
                    ? [this.Filter()]
                    : [...this.option_content_current(), this.Trigger_icon()];
            }
            menu_content() {
                return (this.value() && this.Filter())
                    ? [this.Filter(), ...this.option_rows()]
                    : this.option_rows();
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_select.prototype, "filter_pattern", null);
        __decorate([
            $.$mol_mem
        ], $mol_select.prototype, "options_showed", null);
        __decorate([
            $.$mol_mem
        ], $mol_select.prototype, "options", null);
        __decorate([
            $.$mol_mem
        ], $mol_select.prototype, "options_filtered", null);
        __decorate([
            $.$mol_mem
        ], $mol_select.prototype, "option_focused", null);
        $$.$mol_select = $mol_select;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//select.view.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/select/select.view.css", "[mol_select] {\n\tdisplay: flex;\n\tword-break: normal;\n\talign-self: flex-start;\n}\n\n[mol_select_anchor] {\n\tdisplay: flex;\n\tflex: 1 1 auto;\n\tjustify-content: space-between;\n}\n\n[mol_select_option_row] {\n\tmin-width: 100%;\n\tpadding: 0;\n\tjustify-content: flex-start;\n}\n\n[mol_select_bubble] {\n\tmin-width: 100%;\n}\n\n[mol_select_filter] {\n\tz-index: 2;\n\topacity: 1 !important;\n\tflex: 1 1 auto;\n\talign-self: stretch;\n}\n\n[mol_select_option_label] {\n\tpadding: .5rem 1rem;\n\ttext-align: left;\n\tmin-height: 1.5em;\n\tdisplay: block;\n}\n\n[mol_select_clear_option_content] {\n\tpadding: .5em 1rem .5rem 0;\n\ttext-align: left;\n\tbox-shadow: var(--mol_theme_line);\n\tflex: 1 0 auto;\n}\n\n[mol_select_no_options] {\n\tpadding: .5em 1rem;\n\ttext-align: left;\n\tdisplay: block;\n\tcolor: var(--mol_theme_shade);\n}\n\n[mol_select_trigger] {\n\tpadding: 0;\n\tflex: 1 1 auto;\n\tdisplay: flex;\n\tjustify-content: flex-end;\n}\n\n[mol_select_trigger_icon] {\n\ttransform: rotateZ(90deg);\n\tmargin: .5rem .5rem .5rem -1rem;\n}\n:hover > [mol_select_trigger_icon] {\n\ttransform: rotateZ(90deg) scale(1.25);\n}\n\n[mol_select_menu] {\n\tdisplay: flex;\n\tflex-direction: column;\n}\n\n");
})($ || ($ = {}));
//select.view.css.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_icon_cross extends $.$mol_icon {
        /**
         *  ```
         *  path \M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z
         *  ```
         **/
        path() {
            return "M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z";
        }
    }
    $.$mol_icon_cross = $mol_icon_cross;
})($ || ($ = {}));
//cross.view.tree.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_search extends $.$mol_bar {
        /**
         *  ```
         *  query?val \
         *  ```
         **/
        query(val, force) {
            return (val !== void 0) ? val : "";
        }
        /**
         *  ```
         *  sub /
         *  	<= Suggest
         *  	<= Clear
         *  ```
         **/
        sub() {
            return [this.Suggest(), this.Clear()];
        }
        /**
         *  ```
         *  Suggest $mol_select
         *  	value?val <=> suggest_selected?val
         *  	filter_pattern?val <=> suggest_selected?val
         *  	hint <= hint
         *  	filter_pattern?val <=> query?val
         *  	options_showed <= suggests_showed
         *  	options <= suggests
         *  	Trigger_icon null
         *  	debounce <= debounce
         *  ```
         **/
        Suggest() {
            return ((obj) => {
                obj.value = (val) => this.suggest_selected(val);
                obj.filter_pattern = (val) => this.suggest_selected(val);
                obj.hint = () => this.hint();
                obj.filter_pattern = (val) => this.query(val);
                obj.options_showed = () => this.suggests_showed();
                obj.options = () => this.suggests();
                obj.Trigger_icon = () => null;
                obj.debounce = () => this.debounce();
                return obj;
            })(new this.$.$mol_select());
        }
        /**
         *  ```
         *  suggest_selected?val \
         *  ```
         **/
        suggest_selected(val, force) {
            return (val !== void 0) ? val : "";
        }
        /**
         *  ```
         *  hint @ \Search...
         *  ```
         **/
        hint() {
            return this.$.$mol_locale.text("$mol_search_hint");
        }
        /**
         *  ```
         *  suggests_showed false
         *  ```
         **/
        suggests_showed() {
            return false;
        }
        /**
         *  ```
         *  suggests /string
         *  ```
         **/
        suggests() {
            return [];
        }
        /**
         *  ```
         *  debounce 200
         *  ```
         **/
        debounce() {
            return 200;
        }
        /**
         *  ```
         *  Clear $mol_button_minor
         *  	sub / <= Clear_icon
         *  	event_click?val <=> event_clear?val
         *  ```
         **/
        Clear() {
            return ((obj) => {
                obj.sub = () => [this.Clear_icon()];
                obj.event_click = (val) => this.event_clear(val);
                return obj;
            })(new this.$.$mol_button_minor());
        }
        /**
         *  ```
         *  Clear_icon $mol_icon_cross
         *  ```
         **/
        Clear_icon() {
            return ((obj) => {
                return obj;
            })(new this.$.$mol_icon_cross());
        }
        /**
         *  ```
         *  event_clear?val null
         *  ```
         **/
        event_clear(val, force) {
            return (val !== void 0) ? val : null;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_search.prototype, "query", null);
    __decorate([
        $.$mol_mem
    ], $mol_search.prototype, "Suggest", null);
    __decorate([
        $.$mol_mem
    ], $mol_search.prototype, "suggest_selected", null);
    __decorate([
        $.$mol_mem
    ], $mol_search.prototype, "Clear", null);
    __decorate([
        $.$mol_mem
    ], $mol_search.prototype, "Clear_icon", null);
    __decorate([
        $.$mol_mem
    ], $mol_search.prototype, "event_clear", null);
    $.$mol_search = $mol_search;
})($ || ($ = {}));
//search.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_search extends $.$mol_search {
            suggests_showed() {
                if (!this.focused())
                    return false;
                return this.suggests().length > 1;
            }
            suggest_selected(next) {
                if (next === undefined)
                    return;
                this.Suggest().Filter().focused(true);
                this.query(next);
            }
            sub() {
                return [
                    this.Suggest(),
                    ...(this.query().length > 0) ? [this.Clear()] : [],
                ];
            }
            event_clear(event) {
                this.query('');
            }
        }
        $$.$mol_search = $mol_search;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//search.view.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/search/search.view.css", "[mol_search] {\n\talign-self: flex-start;\n\tflex: auto;\n}\n\n[mol_search_suggest] {\n\tflex: 1 1 auto;\n}\n\n[mol_search_clear] {\n\tmargin: 0;\n\tflex: none;\n}\n\n[mol_search_clear_icon] {\n}\n");
})($ || ($ = {}));
//search.view.css.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mpk/tss/pereferial/page/page.css", "[mpk_tss_pereferial_page_body] {\n\toverflow-y: scroll;\n}\n\n[mpk_tss_pereferial_page_filter_value] {\n\talign-self: stretch;\n}\n");
})($ || ($ = {}));
//page.css.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mpk_tss_pereferial_page extends $.$mol_page {
        /**
         *  ```
         *  unit_current_id?v \
         *  ```
         **/
        unit_current_id(v, force) {
            return (v !== void 0) ? v : "";
        }
        /**
         *  ```
         *  sub /
         *  	<= Head
         *  	<= Filter_value
         *  	<= Body
         *  ```
         **/
        sub() {
            return [this.Head(), this.Filter_value(), this.Body()];
        }
        /**
         *  ```
         *  Filter_value $mol_search
         *  	hint <= filter_hint
         *  	query?val <=> filter_value?val
         *  ```
         **/
        Filter_value() {
            return ((obj) => {
                obj.hint = () => this.filter_hint();
                obj.query = (val) => this.filter_value(val);
                return obj;
            })(new this.$.$mol_search());
        }
        /**
         *  ```
         *  filter_hint @ \Unit name or type
         *  ```
         **/
        filter_hint() {
            return this.$.$mol_locale.text("$mpk_tss_pereferial_page_filter_hint");
        }
        /**
         *  ```
         *  filter_value?val \
         *  ```
         **/
        filter_value(val, force) {
            return (val !== void 0) ? val : "";
        }
    }
    __decorate([
        $.$mol_mem
    ], $mpk_tss_pereferial_page.prototype, "unit_current_id", null);
    __decorate([
        $.$mol_mem
    ], $mpk_tss_pereferial_page.prototype, "Filter_value", null);
    __decorate([
        $.$mol_mem
    ], $mpk_tss_pereferial_page.prototype, "filter_value", null);
    $.$mpk_tss_pereferial_page = $mpk_tss_pereferial_page;
})($ || ($ = {}));
//page.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mpk_tss_pereferial_page extends $.$mpk_tss_pereferial_page {
        }
        $$.$mpk_tss_pereferial_page = $mpk_tss_pereferial_page;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//page.view.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mpk/tss/pereferial/status/status.css", "[mpk_tss_pereferial_status_type=\"ready\"] {\n\tcolor: var(--mpk_theme_status_text_success);\n}\n\n[mpk_tss_pereferial_status_type=\"not_responding\"],\n[mpk_tss_pereferial_status_type=\"error\"] {\n\tcolor: var(--mpk_theme_status_text_error);\n}\n\n\n[mpk_tss_pereferial_status_type=\"unknown\"],\n[mpk_tss_pereferial_status_type=\"inactive\"] {\n\tcolor: var(--mpk_theme_status_text_inactive);\n}\n");
})($ || ($ = {}));
//status.css.js.map
;
"use strict";
var $;
(function ($) {
    class $mpk_tss_pereferial_status extends $.$mol_view {
        /**
         *  ```
         *  status null
         *  ```
         **/
        status() {
            return null;
        }
        /**
         *  ```
         *  colors true
         *  ```
         **/
        colors() {
            return true;
        }
        /**
         *  ```
         *  statuses *
         *  	ready <= ready
         *  	error <= error
         *  	not_responding <= not_responding
         *  	inactive <= inactive
         *  	unknown <= unknown
         *  ```
         **/
        statuses() {
            return ({
                "ready": this.ready(),
                "error": this.error(),
                "not_responding": this.not_responding(),
                "inactive": this.inactive(),
                "unknown": this.unknown(),
            });
        }
        /**
         *  ```
         *  ready @ \Ready
         *  ```
         **/
        ready() {
            return this.$.$mol_locale.text("$mpk_tss_pereferial_status_ready");
        }
        /**
         *  ```
         *  error @ \Error
         *  ```
         **/
        error() {
            return this.$.$mol_locale.text("$mpk_tss_pereferial_status_error");
        }
        /**
         *  ```
         *  not_responding @ \Not responding
         *  ```
         **/
        not_responding() {
            return this.$.$mol_locale.text("$mpk_tss_pereferial_status_not_responding");
        }
        /**
         *  ```
         *  inactive @ \Inactive
         *  ```
         **/
        inactive() {
            return this.$.$mol_locale.text("$mpk_tss_pereferial_status_inactive");
        }
        /**
         *  ```
         *  unknown @ \Unknown
         *  ```
         **/
        unknown() {
            return this.$.$mol_locale.text("$mpk_tss_pereferial_status_unknown");
        }
        /**
         *  ```
         *  sub / <= status_text
         *  ```
         **/
        sub() {
            return [this.status_text()];
        }
        /**
         *  ```
         *  status_text <= unknown
         *  ```
         **/
        status_text() {
            return this.unknown();
        }
    }
    $.$mpk_tss_pereferial_status = $mpk_tss_pereferial_status;
})($ || ($ = {}));
//status.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mpk_tss_pereferial_status extends $.$mpk_tss_pereferial_status {
            status_text() {
                if (!this.status())
                    return this.statuses().unknown;
                return this.statuses()[this.status()] || this.statuses().unknown;
            }
            attr() {
                if (!this.colors())
                    return super.attr();
                return (Object.assign(Object.assign({}, super.attr()), { 'mpk_tss_pereferial_status_type': this.status() }));
            }
        }
        $$.$mpk_tss_pereferial_status = $mpk_tss_pereferial_status;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//status.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mpk_tss_pereferial_source extends $.$mol_view {
        /**
         *  ```
         *  status null
         *  ```
         **/
        status() {
            return null;
        }
        /**
         *  ```
         *  statuses *
         *  	linein <= linein
         *  	internal <= internal
         *  ```
         **/
        statuses() {
            return ({
                "linein": this.linein(),
                "internal": this.internal(),
            });
        }
        /**
         *  ```
         *  linein @ \Linein
         *  ```
         **/
        linein() {
            return this.$.$mol_locale.text("$mpk_tss_pereferial_source_linein");
        }
        /**
         *  ```
         *  internal @ \Internal
         *  ```
         **/
        internal() {
            return this.$.$mol_locale.text("$mpk_tss_pereferial_source_internal");
        }
        /**
         *  ```
         *  sub / <= status_text
         *  ```
         **/
        sub() {
            return [this.status_text()];
        }
        /**
         *  ```
         *  status_text \
         *  ```
         **/
        status_text() {
            return "";
        }
    }
    $.$mpk_tss_pereferial_source = $mpk_tss_pereferial_source;
})($ || ($ = {}));
//source.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mpk_tss_pereferial_source extends $.$mpk_tss_pereferial_source {
            status_text() {
                return this.statuses()[this.status()] || this.status();
            }
        }
        $$.$mpk_tss_pereferial_source = $mpk_tss_pereferial_source;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//source.view.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mpk/tss/parameter/unknown/unknown.css", "[mpk_tss_parameter_unknown] {\n\tcolor: var(--mpk_theme_status_text_unknown);\n}\n");
})($ || ($ = {}));
//unknown.css.js.map
;
"use strict";
var $;
(function ($) {
    class $mpk_tss_parameter_unknown extends $.$mol_view {
        /**
         *  ```
         *  sub / <= title
         *  ```
         **/
        sub() {
            return [this.title()];
        }
        /**
         *  ```
         *  title @ \Unknown
         *  ```
         **/
        title() {
            return this.$.$mol_locale.text("$mpk_tss_parameter_unknown_title");
        }
    }
    $.$mpk_tss_parameter_unknown = $mpk_tss_parameter_unknown;
})($ || ($ = {}));
//unknown.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_row extends $.$mol_view {
    }
    $.$mol_row = $mol_row;
})($ || ($ = {}));
(function ($) {
    class $mol_row_sub extends $.$mol_view {
    }
    $.$mol_row_sub = $mol_row_sub;
})($ || ($ = {}));
//row.view.tree.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_row extends $.$mol_row {
            item_offsets_top() {
                let next = [];
                let sub = this.sub();
                if (!sub)
                    return next;
                const context = this.$$;
                const widthLimit = context.$mol_view_visible_width();
                let allHeight = 0;
                let rowWidth = 0;
                let row_height = 0;
                for (let child of sub) {
                    next.push(allHeight);
                    if (!(child instanceof $.$mol_view))
                        continue;
                    const width = child.minimal_width();
                    const height = child.minimal_height();
                    rowWidth += width;
                    if (rowWidth > widthLimit) {
                        allHeight += row_height;
                        rowWidth = width;
                        row_height = height;
                    }
                    else {
                        row_height = Math.max(row_height, height);
                    }
                }
                next.push(allHeight + row_height);
                return next;
            }
            sub_visible() {
                const sub = this.sub();
                const context = this.$$;
                for (let i = 0; i < sub.length; ++i) {
                    const child = sub[i];
                    if (child instanceof $.$mol_view) {
                        child.$ = context;
                    }
                }
                const visible = [];
                const heightLimit = context.$mol_view_visible_height();
                const offsets = this.item_offsets_top();
                let height = 0;
                for (let i = 0; i < offsets.length - 1; ++i) {
                    if (offsets[i] > heightLimit)
                        break;
                    const child = sub[i];
                    visible.push(child);
                }
                return visible;
            }
            minimal_height() {
                const offsets = this.item_offsets_top();
                return offsets[offsets.length - 1];
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_row.prototype, "item_offsets_top", null);
        $$.$mol_row = $mol_row;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//row.view.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/row/row.view.css", "[mol_row] {\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\talign-items: flex-start;\n\talign-content: flex-start;\n\tjustify-content: flex-start;\n\tpadding: .5rem;\n\tflex: 1 0 auto;\n\t/* box-shadow: 0 0 0 1px var(--mol_theme_line); */\n\t/* border-radius: var(--mol_skin_round); */\n\tbox-sizing: border-box;\n\tmax-width: 100%;\n}\n\n[mol_row] > * ,\n[mol_row_sub] > * {\n\tmargin: .5rem;\n\tmax-width: 100%;\n}\n\n[mol_row_sub] {\n\tmargin: 0;\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\tflex: 1 1 auto;\n}\n");
})($ || ($ = {}));
//row.view.css.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/labeler/labeler.view.css", "[mol_labeler] {\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: stretch;\n\tcursor: inherit;\n}\n\n[mol_labeler_title] {\n\tcolor: var(--mol_theme_shade);\n\tfont-size: .875rem;\n}\n\n[mol_labeler_content] {\n\tdisplay: flex;\n}\n");
})($ || ($ = {}));
//labeler.view.css.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_labeler extends $.$mol_view {
        /**
         *  ```
         *  sub /
         *  	<= Title
         *  	<= Content
         *  ```
         **/
        sub() {
            return [this.Title(), this.Content()];
        }
        /**
         *  ```
         *  Title $mol_view sub <= label
         *  ```
         **/
        Title() {
            return ((obj) => {
                obj.sub = () => this.label();
                return obj;
            })(new this.$.$mol_view());
        }
        /**
         *  ```
         *  label /$mol_view_content <= title
         *  ```
         **/
        label() {
            return [this.title()];
        }
        /**
         *  ```
         *  Content $mol_view sub <= content
         *  ```
         **/
        Content() {
            return ((obj) => {
                obj.sub = () => this.content();
                return obj;
            })(new this.$.$mol_view());
        }
        /**
         *  ```
         *  content /
         *  ```
         **/
        content() {
            return [];
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_labeler.prototype, "Title", null);
    __decorate([
        $.$mol_mem
    ], $mol_labeler.prototype, "Content", null);
    $.$mol_labeler = $mol_labeler;
})($ || ($ = {}));
//labeler.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mpk_tss_parameter_date extends $.$mol_view {
        /**
         *  ```
         *  date null
         *  ```
         **/
        date() {
            return null;
        }
        /**
         *  ```
         *  sub / <= date_formatted
         *  ```
         **/
        sub() {
            return [this.date_formatted()];
        }
        /**
         *  ```
         *  date_formatted null
         *  ```
         **/
        date_formatted() {
            return null;
        }
    }
    $.$mpk_tss_parameter_date = $mpk_tss_parameter_date;
})($ || ($ = {}));
//date.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mpk_tss_parameter_date extends $.$mpk_tss_parameter_date {
            date() {
                throw new $.$mpk_tss_todo;
            }
            date_formatted() {
                return this.date().native.toLocaleString();
            }
        }
        $$.$mpk_tss_parameter_date = $mpk_tss_parameter_date;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//date.view.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mpk/tss/parameter/parameter.css", "[mpk_tss_parameter] {\n\t/* justify-content: space-between; */\n\tpadding: 0;\n\tmargin: 0 0rem;\n}\n\n[mpk_tss_parameter]:nth-child(2n) {\n\tbackground: var(--mol_theme_line);\n}\n[mpk_tss_parameter_name] {\n\tflex-grow: 0;\n\tflex-basis: 15rem;\n}\n\n[mpk_tss_parameter_value] {\n\tflex-grow: 0;\n\tflex-basis: 7rem;\n}\n\n[mpk_tss_parameter_updated] {\n\tflex-basis: 10rem;\n}\n\n[mpk_tss_parameter_unknown] {\n\tcolor: var(--mol_theme_shade);\n}\n");
})($ || ($ = {}));
//parameter.css.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mpk_tss_parameter extends $.$mol_row {
        /**
         *  ```
         *  Unknown_value $mpk_tss_parameter_unknown
         *  ```
         **/
        Unknown_value() {
            return ((obj) => {
                return obj;
            })(new this.$.$mpk_tss_parameter_unknown());
        }
        /**
         *  ```
         *  Unknown_updated $mpk_tss_parameter_unknown
         *  ```
         **/
        Unknown_updated() {
            return ((obj) => {
                return obj;
            })(new this.$.$mpk_tss_parameter_unknown());
        }
        /**
         *  ```
         *  value null
         *  ```
         **/
        value() {
            return null;
        }
        /**
         *  ```
         *  updated null
         *  ```
         **/
        updated() {
            return null;
        }
        /**
         *  ```
         *  sub /
         *  	<= Name
         *  	<= Value
         *  	<= Updated
         *  ```
         **/
        sub() {
            return [this.Name(), this.Value(), this.Updated()];
        }
        /**
         *  ```
         *  Name $mol_labeler
         *  	title <= name_title
         *  	Content <= Name_content
         *  ```
         **/
        Name() {
            return ((obj) => {
                obj.title = () => this.name_title();
                obj.Content = () => this.Name_content();
                return obj;
            })(new this.$.$mol_labeler());
        }
        /**
         *  ```
         *  name_title @ \Parameter
         *  ```
         **/
        name_title() {
            return this.$.$mol_locale.text("$mpk_tss_parameter_name_title");
        }
        /**
         *  ```
         *  Name_content $mol_view sub / <= name
         *  ```
         **/
        Name_content() {
            return ((obj) => {
                obj.sub = () => [this.name()];
                return obj;
            })(new this.$.$mol_view());
        }
        /**
         *  ```
         *  name \
         *  ```
         **/
        name() {
            return "";
        }
        /**
         *  ```
         *  Value $mol_labeler
         *  	title <= value_title
         *  	Content <= Value_content
         *  ```
         **/
        Value() {
            return ((obj) => {
                obj.title = () => this.value_title();
                obj.Content = () => this.Value_content();
                return obj;
            })(new this.$.$mol_labeler());
        }
        /**
         *  ```
         *  value_title @ \Value
         *  ```
         **/
        value_title() {
            return this.$.$mol_locale.text("$mpk_tss_parameter_value_title");
        }
        /**
         *  ```
         *  Value_content null
         *  ```
         **/
        Value_content() {
            return null;
        }
        /**
         *  ```
         *  Updated $mol_labeler
         *  	title <= updated_title
         *  	Content <= Updated_value
         *  ```
         **/
        Updated() {
            return ((obj) => {
                obj.title = () => this.updated_title();
                obj.Content = () => this.Updated_value();
                return obj;
            })(new this.$.$mol_labeler());
        }
        /**
         *  ```
         *  updated_title @ \Updated
         *  ```
         **/
        updated_title() {
            return this.$.$mol_locale.text("$mpk_tss_parameter_updated_title");
        }
        /**
         *  ```
         *  Updated_value null
         *  ```
         **/
        Updated_value() {
            return null;
        }
        /**
         *  ```
         *  Date $mpk_tss_parameter_date date <= updated
         *  ```
         **/
        Date() {
            return ((obj) => {
                obj.date = () => this.updated();
                return obj;
            })(new this.$.$mpk_tss_parameter_date());
        }
    }
    __decorate([
        $.$mol_mem
    ], $mpk_tss_parameter.prototype, "Unknown_value", null);
    __decorate([
        $.$mol_mem
    ], $mpk_tss_parameter.prototype, "Unknown_updated", null);
    __decorate([
        $.$mol_mem
    ], $mpk_tss_parameter.prototype, "Name", null);
    __decorate([
        $.$mol_mem
    ], $mpk_tss_parameter.prototype, "Name_content", null);
    __decorate([
        $.$mol_mem
    ], $mpk_tss_parameter.prototype, "Value", null);
    __decorate([
        $.$mol_mem
    ], $mpk_tss_parameter.prototype, "Updated", null);
    __decorate([
        $.$mol_mem
    ], $mpk_tss_parameter.prototype, "Date", null);
    $.$mpk_tss_parameter = $mpk_tss_parameter;
})($ || ($ = {}));
//parameter.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mpk_tss_parameter extends $.$mpk_tss_parameter {
            Value_content() {
                if (this.value() === null || this.value() === undefined)
                    return this.Unknown_value();
                return this.value();
            }
            Updated_value() {
                if (this.updated() === null || this.updated() === undefined)
                    return this.Unknown_updated();
                return this.Date();
            }
        }
        $$.$mpk_tss_parameter = $mpk_tss_parameter;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//parameter.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mpk_tss_parameter_voltage extends $.$mol_view {
        /**
         *  ```
         *  sub /
         *  	<= value
         *  	<= spacer
         *  	<= unit
         *  ```
         **/
        sub() {
            return [this.value(), this.spacer(), this.unit()];
        }
        /**
         *  ```
         *  value 0
         *  ```
         **/
        value() {
            return 0;
        }
        /**
         *  ```
         *  spacer \
         *  ```
         **/
        spacer() {
            return " ";
        }
        /**
         *  ```
         *  unit @ \V
         *  ```
         **/
        unit() {
            return this.$.$mol_locale.text("$mpk_tss_parameter_voltage_unit");
        }
    }
    $.$mpk_tss_parameter_voltage = $mpk_tss_parameter_voltage;
})($ || ($ = {}));
//voltage.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mpk_tss_parameter_duration extends $.$mol_view {
        /**
         *  ```
         *  minutes @ \min
         *  ```
         **/
        minutes() {
            return this.$.$mol_locale.text("$mpk_tss_parameter_duration_minutes");
        }
        /**
         *  ```
         *  value null
         *  ```
         **/
        value() {
            return null;
        }
        /**
         *  ```
         *  sub / <= formatted_value
         *  ```
         **/
        sub() {
            return [this.formatted_value()];
        }
        /**
         *  ```
         *  formatted_value \
         *  ```
         **/
        formatted_value() {
            return "";
        }
    }
    $.$mpk_tss_parameter_duration = $mpk_tss_parameter_duration;
})($ || ($ = {}));
//duration.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mpk_tss_parameter_duration extends $.$mpk_tss_parameter_duration {
            value() { throw new $.$mpk_tss_todo; }
            formatted_value() {
                return this.value().minute + ' ' + this.minutes();
            }
        }
        $$.$mpk_tss_parameter_duration = $mpk_tss_parameter_duration;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//duration.view.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mpk/tss/parameter/list/list.css", "[mpk_tss_parameter_list] {\n\tbackground: var(--mol_theme_field);\n}\n");
})($ || ($ = {}));
//list.css.js.map
;
"use strict";
var $;
(function ($) {
    class $mpk_tss_parameter_list extends $.$mol_list {
    }
    $.$mpk_tss_parameter_list = $mpk_tss_parameter_list;
})($ || ($ = {}));
//list.view.tree.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mpk_tss_pereferial_ups extends $.$mpk_tss_parameter_list {
        /**
         *  ```
         *  unit null
         *  ```
         **/
        unit() {
            return null;
        }
        /**
         *  ```
         *  rows /
         *  	<= Status
         *  	<= Power
         *  	<= Voltage
         *  	<= Bat_level
         *  	<= Bat_time
         *  ```
         **/
        rows() {
            return [this.Status(), this.Power(), this.Voltage(), this.Bat_level(), this.Bat_time()];
        }
        /**
         *  ```
         *  Status $mpk_tss_parameter
         *  	name <= status_title
         *  	value <= status
         *  	updated <= updated
         *  ```
         **/
        Status() {
            return ((obj) => {
                obj.name = () => this.status_title();
                obj.value = () => this.status();
                obj.updated = () => this.updated();
                return obj;
            })(new this.$.$mpk_tss_parameter());
        }
        /**
         *  ```
         *  status_title @ \State
         *  ```
         **/
        status_title() {
            return this.$.$mol_locale.text("$mpk_tss_pereferial_ups_status_title");
        }
        /**
         *  ```
         *  status null
         *  ```
         **/
        status() {
            return null;
        }
        /**
         *  ```
         *  updated null
         *  ```
         **/
        updated() {
            return null;
        }
        /**
         *  ```
         *  Power $mpk_tss_parameter
         *  	name <= power_title
         *  	value <= power_source
         *  	updated <= updated
         *  ```
         **/
        Power() {
            return ((obj) => {
                obj.name = () => this.power_title();
                obj.value = () => this.power_source();
                obj.updated = () => this.updated();
                return obj;
            })(new this.$.$mpk_tss_parameter());
        }
        /**
         *  ```
         *  power_title @ \Power source
         *  ```
         **/
        power_title() {
            return this.$.$mol_locale.text("$mpk_tss_pereferial_ups_power_title");
        }
        /**
         *  ```
         *  power_source null
         *  ```
         **/
        power_source() {
            return null;
        }
        /**
         *  ```
         *  Voltage $mpk_tss_parameter
         *  	name <= voltage_title
         *  	value <= voltage
         *  	updated <= updated
         *  ```
         **/
        Voltage() {
            return ((obj) => {
                obj.name = () => this.voltage_title();
                obj.value = () => this.voltage();
                obj.updated = () => this.updated();
                return obj;
            })(new this.$.$mpk_tss_parameter());
        }
        /**
         *  ```
         *  voltage_title @ \Voltage
         *  ```
         **/
        voltage_title() {
            return this.$.$mol_locale.text("$mpk_tss_pereferial_ups_voltage_title");
        }
        /**
         *  ```
         *  voltage null
         *  ```
         **/
        voltage() {
            return null;
        }
        /**
         *  ```
         *  Bat_level $mpk_tss_parameter
         *  	name <= bat_level_title
         *  	value <= battery_level
         *  	updated <= updated
         *  ```
         **/
        Bat_level() {
            return ((obj) => {
                obj.name = () => this.bat_level_title();
                obj.value = () => this.battery_level();
                obj.updated = () => this.updated();
                return obj;
            })(new this.$.$mpk_tss_parameter());
        }
        /**
         *  ```
         *  bat_level_title @ \Bat. level
         *  ```
         **/
        bat_level_title() {
            return this.$.$mol_locale.text("$mpk_tss_pereferial_ups_bat_level_title");
        }
        /**
         *  ```
         *  battery_level null
         *  ```
         **/
        battery_level() {
            return null;
        }
        /**
         *  ```
         *  Bat_time $mpk_tss_parameter
         *  	name <= bat_time_title
         *  	value <= battery_time
         *  	updated <= updated
         *  ```
         **/
        Bat_time() {
            return ((obj) => {
                obj.name = () => this.bat_time_title();
                obj.value = () => this.battery_time();
                obj.updated = () => this.updated();
                return obj;
            })(new this.$.$mpk_tss_parameter());
        }
        /**
         *  ```
         *  bat_time_title @ \Bat. time
         *  ```
         **/
        bat_time_title() {
            return this.$.$mol_locale.text("$mpk_tss_pereferial_ups_bat_time_title");
        }
        /**
         *  ```
         *  battery_time null
         *  ```
         **/
        battery_time() {
            return null;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mpk_tss_pereferial_ups.prototype, "Status", null);
    __decorate([
        $.$mol_mem
    ], $mpk_tss_pereferial_ups.prototype, "Power", null);
    __decorate([
        $.$mol_mem
    ], $mpk_tss_pereferial_ups.prototype, "Voltage", null);
    __decorate([
        $.$mol_mem
    ], $mpk_tss_pereferial_ups.prototype, "Bat_level", null);
    __decorate([
        $.$mol_mem
    ], $mpk_tss_pereferial_ups.prototype, "Bat_time", null);
    $.$mpk_tss_pereferial_ups = $mpk_tss_pereferial_ups;
})($ || ($ = {}));
//ups.view.tree.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mpk_tss_pereferial_ups extends $.$mpk_tss_pereferial_ups {
            unit() { throw new $.$mpk_tss_todo; }
            updated() { return this.unit().updated(); }
            status() { return $$.$mpk_tss_pereferial_status.make({ status: () => this.unit().status() }); }
            power_source() {
                return this.unit().power_source() && $$.$mpk_tss_pereferial_source.make({ status: () => this.unit().power_source() });
            }
            voltage() {
                return this.unit().voltage() && $.$mpk_tss_parameter_voltage.make({ value: () => this.unit().voltage() });
            }
            battery_level() {
                return this.unit().battery_level() && (this.unit().battery_level() + '%');
            }
            battery_time() {
                return this.unit().battery_time() && $$.$mpk_tss_parameter_duration.make({ value: () => this.unit().battery_time() });
            }
        }
        __decorate([
            $.$mol_mem
        ], $mpk_tss_pereferial_ups.prototype, "status", null);
        __decorate([
            $.$mol_mem
        ], $mpk_tss_pereferial_ups.prototype, "power_source", null);
        __decorate([
            $.$mol_mem
        ], $mpk_tss_pereferial_ups.prototype, "voltage", null);
        __decorate([
            $.$mol_mem
        ], $mpk_tss_pereferial_ups.prototype, "battery_level", null);
        __decorate([
            $.$mol_mem
        ], $mpk_tss_pereferial_ups.prototype, "battery_time", null);
        $$.$mpk_tss_pereferial_ups = $mpk_tss_pereferial_ups;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//ups.view.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mpk/tss/pereferial/details/details.css", "[mpk_tss_pereferial_details] {\n\tflex: 1 1 36rem;\n}\n");
})($ || ($ = {}));
//details.css.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mpk_tss_pereferial_details extends $.$mol_page {
        /**
         *  ```
         *  unit null
         *  ```
         **/
        unit() {
            return null;
        }
        /**
         *  ```
         *  minimal_width 400
         *  ```
         **/
        minimal_width() {
            return 400;
        }
        /**
         *  ```
         *  tools / <= Details_close
         *  ```
         **/
        tools() {
            return [this.Details_close()];
        }
        /**
         *  ```
         *  Details_close $mpk_tss_link
         *  	arg * unit null
         *  	sub / <= Details_close_icon
         *  	copy_params /
         *  		\login
         *  		\page
         *  ```
         **/
        Details_close() {
            return ((obj) => {
                obj.arg = () => ({
                    "unit": null,
                });
                obj.sub = () => [this.Details_close_icon()];
                obj.copy_params = () => ["login", "page"];
                return obj;
            })(new this.$.$mpk_tss_link());
        }
        /**
         *  ```
         *  Details_close_icon $mol_icon_cross
         *  ```
         **/
        Details_close_icon() {
            return ((obj) => {
                return obj;
            })(new this.$.$mol_icon_cross());
        }
        /**
         *  ```
         *  body / <= unit_details
         *  ```
         **/
        body() {
            return [this.unit_details()];
        }
        /**
         *  ```
         *  unit_details null
         *  ```
         **/
        unit_details() {
            return null;
        }
        /**
         *  ```
         *  Ups $mpk_tss_pereferial_ups unit <= unit
         *  ```
         **/
        Ups() {
            return ((obj) => {
                obj.unit = () => this.unit();
                return obj;
            })(new this.$.$mpk_tss_pereferial_ups());
        }
    }
    __decorate([
        $.$mol_mem
    ], $mpk_tss_pereferial_details.prototype, "Details_close", null);
    __decorate([
        $.$mol_mem
    ], $mpk_tss_pereferial_details.prototype, "Details_close_icon", null);
    __decorate([
        $.$mol_mem
    ], $mpk_tss_pereferial_details.prototype, "Ups", null);
    $.$mpk_tss_pereferial_details = $mpk_tss_pereferial_details;
})($ || ($ = {}));
//details.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mpk_tss_pereferial_details extends $.$mpk_tss_pereferial_details {
            unit() {
                throw new $.$mpk_tss_todo;
            }
            title() {
                return this.type() + ' | ' + this.name();
            }
            type() { return this.unit().type(); }
            name() { return this.unit().name(); }
            unit_details() {
                switch (this.unit().type()) {
                    case $.$mpk_tss_pereferial_domain_type.ups: return this.Ups();
                }
                throw new $.$mpk_tss_todo_unknown;
            }
        }
        $$.$mpk_tss_pereferial_details = $mpk_tss_pereferial_details;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//details.view.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_card extends $.$mol_list {
        /**
         *  ```
         *  attr *
         *  	^
         *  	mol_card_status_type <= status
         *  ```
         **/
        attr() {
            return (Object.assign(Object.assign({}, super.attr()), { "mol_card_status_type": this.status() }));
        }
        /**
         *  ```
         *  status \
         *  ```
         **/
        status() {
            return "";
        }
        /**
         *  ```
         *  rows /$mol_view
         *  	<= Content
         *  	<= Status
         *  ```
         **/
        rows() {
            return [this.Content(), this.Status()];
        }
        /**
         *  ```
         *  Content $mol_view sub <= content
         *  ```
         **/
        Content() {
            return ((obj) => {
                obj.sub = () => this.content();
                return obj;
            })(new this.$.$mol_view());
        }
        /**
         *  ```
         *  content /$mol_view_content
         *  ```
         **/
        content() {
            return [];
        }
        /**
         *  ```
         *  Status $mol_view
         *  	minimal_height 30
         *  	sub / <= status_text
         *  ```
         **/
        Status() {
            return ((obj) => {
                obj.minimal_height = () => 30;
                obj.sub = () => [this.status_text()];
                return obj;
            })(new this.$.$mol_view());
        }
        /**
         *  ```
         *  status_text <= status
         *  ```
         **/
        status_text() {
            return this.status();
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_card.prototype, "Content", null);
    __decorate([
        $.$mol_mem
    ], $mol_card.prototype, "Status", null);
    $.$mol_card = $mol_card;
})($ || ($ = {}));
//card.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_card extends $.$mol_card {
            rows() {
                return [
                    this.Content(),
                    ...this.status_text() ? [this.Status()] : [],
                ];
            }
        }
        $$.$mol_card = $mol_card;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//card.view.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/card/card.view.css", "[mol_card] {\n\tbox-shadow: 0 0 0 1px var(--mol_theme_line);\n\tbackground: var(--mol_theme_back);\n\tcolor: var(--mol_theme_text);\n\tborder-radius: var(--mol_skin_round);\n\tdisplay: flex;\n\tflex: 0 1 auto;\n\tflex-direction: column;\n}\n\n[mol_card_content] {\n\tflex: 1 1 auto;\n\tborder-radius: var(--mol_skin_round);\n\tmargin: 0;\n}\n\n[mol_card_status] {\n\tbackground: var(--mol_theme_line);\n\ttext-transform: capitalize;\n\tpadding: 0 1rem;\n\tline-height: 2;\n\tmargin: 0;\n}\n\n[mol_card_status_type=\"approved\"] {\n\t--mol_theme_line: hsl(140, 50%, 50%);\n}\n[mol_card_status] {\n\tbackground: var(--mol_theme_line);\n}\n");
})($ || ($ = {}));
//card.view.css.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mpk/tss/card/card.css", "[mpk_tss_card] {\n\tpadding: 0.5rem;\n\tdisplay: block;\n\tflex: 0 1 auto;\n\tposition: relative;\n\tmin-height: 110px;\n}\n\n[mpk_tss_card_content] {\n\tpadding: 0;\n}\n\n[mpk_tss_card_status] {\n\tbackground: var(--mol_theme_line);\n\tcolor: var(--mol_theme_text);\n\tpadding: 0;\n\tline-height: 2;\n\tmargin: 0;\n\tdisplay: flex;\n\tjustify-content: space-between;\n}\n\n[mpk_tss_card_status_text] {\n\tpadding: 0 0.5rem;\n}\n\n[mpk_tss_card] > [mol_card_status_type=\"success\"] {\n\t--mol_theme_line: var(--mpk_theme_status_bg_success);\n\t--mol_theme_control: var(--mpk_theme_status_control);\n\t--mol_theme_text: var(--mpk_theme_status_text);\n}\n\n[mpk_tss_card] > [mol_card_status_type=\"warning\"] {\n\t--mol_theme_line: var(--mpk_theme_status_bg_warning);\n\t--mol_theme_control: var(--mpk_theme_status_control);\n\t--mol_theme_text: var(--mpk_theme_status_text);\n}\n[mpk_tss_card] > [mol_card_status_type=\"ready\"] {\n\t--mol_theme_line: var(--mpk_theme_status_bg_success);\n\t--mol_theme_control: var(--mpk_theme_status_control);\n\t--mol_theme_text: var(--mpk_theme_status_text);\n}\n\n[mpk_tss_card] > [mol_card_status_type=\"not_responding\"],\n[mpk_tss_card] > [mol_card_status_type=\"error\"] {\n\t--mol_theme_line: var(--mpk_theme_status_bg_error);\n\t--mol_theme_control: var(--mol_theme_field);\n\t--mol_theme_text: var(--mpk_theme_status_text);\n}\n\n[mpk_tss_card] > [mol_card_status_type=\"inactive\"] {\n\t--mol_theme_line: var(--mpk_theme_status_bg_inactive);\n\t--mol_theme_control: var(--mol_theme_field);\n\t--mol_theme_text: var(--mpk_theme_status_text);\n}\n\n[mpk_tss_card] > [mol_card_status_type=\"unknown\"] {\n\t--mol_theme_line: var(--mpk_theme_status_bg_unknown);\n\t--mol_theme_control: var(--mol_theme_field);\n\t--mol_theme_text: var(--mpk_theme_status_text);\n}\n");
})($ || ($ = {}));
//card.css.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mpk_tss_card extends $.$mpk_tss_link {
        /**
         *  ```
         *  minimal_height 200
         *  ```
         **/
        minimal_height() {
            return 200;
        }
        /**
         *  ```
         *  sub / <= Card
         *  ```
         **/
        sub() {
            return [this.Card()];
        }
        /**
         *  ```
         *  Card $mol_card
         *  	status <= status
         *  	Status <= Status
         *  	Content <= Content
         *  ```
         **/
        Card() {
            return ((obj) => {
                obj.status = () => this.status();
                obj.Status = () => this.Status();
                obj.Content = () => this.Content();
                return obj;
            })(new this.$.$mol_card());
        }
        /**
         *  ```
         *  status \
         *  ```
         **/
        status() {
            return "";
        }
        /**
         *  ```
         *  Status $mol_view sub /
         *  	<= Status_text
         *  	<= Tools
         *  ```
         **/
        Status() {
            return ((obj) => {
                obj.sub = () => [this.Status_text(), this.Tools()];
                return obj;
            })(new this.$.$mol_view());
        }
        /**
         *  ```
         *  Status_text null
         *  ```
         **/
        Status_text() {
            return null;
        }
        /**
         *  ```
         *  Tools $mol_view sub
         *  	<= tools
         *  	<= Status_action
         *  ```
         **/
        Tools() {
            return ((obj) => {
                obj.sub = () => this.tools();
                return obj;
            })(new this.$.$mol_view());
        }
        /**
         *  ```
         *  tools /
         *  ```
         **/
        tools() {
            return [];
        }
        /**
         *  ```
         *  Status_action $mol_button_minor
         *  	event_click?event <=> status_click?event
         *  	sub / <= Status_icon
         *  ```
         **/
        Status_action() {
            return ((obj) => {
                obj.event_click = (event) => this.status_click(event);
                obj.sub = () => [this.Status_icon()];
                return obj;
            })(new this.$.$mol_button_minor());
        }
        /**
         *  ```
         *  status_click?event null
         *  ```
         **/
        status_click(event, force) {
            return (event !== void 0) ? event : null;
        }
        /**
         *  ```
         *  Status_icon $mpk_tss_icon_cloud_download
         *  ```
         **/
        Status_icon() {
            return ((obj) => {
                return obj;
            })(new this.$.$mpk_tss_icon_cloud_download());
        }
        /**
         *  ```
         *  Content $mol_row sub <= items
         *  ```
         **/
        Content() {
            return ((obj) => {
                obj.sub = () => this.items();
                return obj;
            })(new this.$.$mol_row());
        }
        /**
         *  ```
         *  items /
         *  ```
         **/
        items() {
            return [];
        }
    }
    __decorate([
        $.$mol_mem
    ], $mpk_tss_card.prototype, "Card", null);
    __decorate([
        $.$mol_mem
    ], $mpk_tss_card.prototype, "Status", null);
    __decorate([
        $.$mol_mem
    ], $mpk_tss_card.prototype, "Tools", null);
    __decorate([
        $.$mol_mem
    ], $mpk_tss_card.prototype, "Status_action", null);
    __decorate([
        $.$mol_mem
    ], $mpk_tss_card.prototype, "status_click", null);
    __decorate([
        $.$mol_mem
    ], $mpk_tss_card.prototype, "Status_icon", null);
    __decorate([
        $.$mol_mem
    ], $mpk_tss_card.prototype, "Content", null);
    $.$mpk_tss_card = $mpk_tss_card;
})($ || ($ = {}));
//card.view.tree.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mpk_tss_pereferial_link extends $.$mpk_tss_card {
        /**
         *  ```
         *  unit null
         *  ```
         **/
        unit() {
            return null;
        }
        /**
         *  ```
         *  arg * unit <= unit_id
         *  ```
         **/
        arg() {
            return ({
                "unit": this.unit_id(),
            });
        }
        /**
         *  ```
         *  unit_id \
         *  ```
         **/
        unit_id() {
            return "";
        }
        /**
         *  ```
         *  copy_params /
         *  	\login
         *  	\page
         *  	\units
         *  ```
         **/
        copy_params() {
            return ["login", "page", "units"];
        }
        /**
         *  ```
         *  status <= unit_status
         *  ```
         **/
        status() {
            return this.unit_status();
        }
        /**
         *  ```
         *  unit_status \
         *  ```
         **/
        unit_status() {
            return "";
        }
        /**
         *  ```
         *  Status_text $mpk_tss_pereferial_status
         *  	colors false
         *  	status <= unit_status
         *  ```
         **/
        Status_text() {
            return ((obj) => {
                obj.colors = () => false;
                obj.status = () => this.unit_status();
                return obj;
            })(new this.$.$mpk_tss_pereferial_status());
        }
        /**
         *  ```
         *  Status_icon $mpk_tss_icon_autorenew
         *  ```
         **/
        Status_icon() {
            return ((obj) => {
                return obj;
            })(new this.$.$mpk_tss_icon_autorenew());
        }
        /**
         *  ```
         *  status_click?event <=> unit_status_click?event
         *  ```
         **/
        status_click(event, force) {
            return this.unit_status_click(event);
        }
        /**
         *  ```
         *  unit_status_click?event null
         *  ```
         **/
        unit_status_click(event, force) {
            return (event !== void 0) ? event : null;
        }
        /**
         *  ```
         *  items /
         *  	<= Type_item
         *  	<= Name_item
         *  ```
         **/
        items() {
            return [this.Type_item(), this.Name_item()];
        }
        /**
         *  ```
         *  Type_item $mol_labeler
         *  	title <= type_title
         *  	content / <= type
         *  ```
         **/
        Type_item() {
            return ((obj) => {
                obj.title = () => this.type_title();
                obj.content = () => [this.type()];
                return obj;
            })(new this.$.$mol_labeler());
        }
        /**
         *  ```
         *  type_title @ \Type
         *  ```
         **/
        type_title() {
            return this.$.$mol_locale.text("$mpk_tss_pereferial_link_type_title");
        }
        /**
         *  ```
         *  type \
         *  ```
         **/
        type() {
            return "";
        }
        /**
         *  ```
         *  Name_item $mol_labeler
         *  	title <= name_title
         *  	content / <= name
         *  ```
         **/
        Name_item() {
            return ((obj) => {
                obj.title = () => this.name_title();
                obj.content = () => [this.name()];
                return obj;
            })(new this.$.$mol_labeler());
        }
        /**
         *  ```
         *  name_title @ \Element
         *  ```
         **/
        name_title() {
            return this.$.$mol_locale.text("$mpk_tss_pereferial_link_name_title");
        }
        /**
         *  ```
         *  name \
         *  ```
         **/
        name() {
            return "";
        }
    }
    __decorate([
        $.$mol_mem
    ], $mpk_tss_pereferial_link.prototype, "Status_text", null);
    __decorate([
        $.$mol_mem
    ], $mpk_tss_pereferial_link.prototype, "Status_icon", null);
    __decorate([
        $.$mol_mem
    ], $mpk_tss_pereferial_link.prototype, "status_click", null);
    __decorate([
        $.$mol_mem
    ], $mpk_tss_pereferial_link.prototype, "unit_status_click", null);
    __decorate([
        $.$mol_mem
    ], $mpk_tss_pereferial_link.prototype, "Type_item", null);
    __decorate([
        $.$mol_mem
    ], $mpk_tss_pereferial_link.prototype, "Name_item", null);
    $.$mpk_tss_pereferial_link = $mpk_tss_pereferial_link;
})($ || ($ = {}));
//link.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mpk_tss_pereferial_link extends $.$mpk_tss_pereferial_link {
            unit() {
                throw new $.$mpk_tss_todo;
            }
            unit_id() {
                return this.unit().id();
            }
            type() {
                return this.unit().type();
            }
            name() {
                return this.unit().name();
            }
            unit_status() {
                return this.unit().status();
            }
            unit_status_click(event) {
                if (event)
                    event.preventDefault();
                this.unit().updated(new $.$mol_time_moment());
            }
        }
        $$.$mpk_tss_pereferial_link = $mpk_tss_pereferial_link;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//link.view.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mpk/tss/pereferial/list/list.css", "[mpk_tss_pereferial_list_main] {\n\tflex: 1 1 20rem;\n}\n");
})($ || ($ = {}));
//list.css.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mpk_tss_pereferial_list extends $.$mol_view {
        /**
         *  ```
         *  title @ \Pereferials
         *  ```
         **/
        title() {
            return this.$.$mol_locale.text("$mpk_tss_pereferial_list_title");
        }
        /**
         *  ```
         *  pages /
         *  	<= Main
         *  	<= Unit_current
         *  ```
         **/
        pages() {
            return [this.Main(), this.Unit_current()];
        }
        /**
         *  ```
         *  Main $mpk_tss_pereferial_page
         *  	minimal_width 200
         *  	event_top?e <=> event_top?e
         *  	tools <= tools
         *  	title <= title
         *  	unit_current_id?v <=> unit_current_id?v
         *  	filter_value?val <=> filter_value?val
         *  	body / <= List
         *  ```
         **/
        Main() {
            return ((obj) => {
                obj.minimal_width = () => 200;
                obj.event_top = (e) => this.event_top(e);
                obj.tools = () => this.tools();
                obj.title = () => this.title();
                obj.unit_current_id = (v) => this.unit_current_id(v);
                obj.filter_value = (val) => this.filter_value(val);
                obj.body = () => [this.List()];
                return obj;
            })(new this.$.$mpk_tss_pereferial_page());
        }
        /**
         *  ```
         *  event_top?e null
         *  ```
         **/
        event_top(e, force) {
            return (e !== void 0) ? e : null;
        }
        /**
         *  ```
         *  tools /
         *  ```
         **/
        tools() {
            return [];
        }
        /**
         *  ```
         *  unit_current_id?v \
         *  ```
         **/
        unit_current_id(v, force) {
            return (v !== void 0) ? v : "";
        }
        /**
         *  ```
         *  filter_value?val \
         *  ```
         **/
        filter_value(val, force) {
            return (val !== void 0) ? val : "";
        }
        /**
         *  ```
         *  List $mol_list rows <= unit_links
         *  ```
         **/
        List() {
            return ((obj) => {
                obj.rows = () => this.unit_links();
                return obj;
            })(new this.$.$mol_list());
        }
        /**
         *  ```
         *  unit_links /
         *  ```
         **/
        unit_links() {
            return [];
        }
        /**
         *  ```
         *  Unit_current null
         *  ```
         **/
        Unit_current() {
            return null;
        }
        /**
         *  ```
         *  Unit_details!id $mpk_tss_pereferial_details
         *  	event_top?e <=> details_event_top?e
         *  	unit <= unit!id
         *  ```
         **/
        Unit_details(id) {
            return ((obj) => {
                obj.event_top = (e) => this.details_event_top(e);
                obj.unit = () => this.unit(id);
                return obj;
            })(new this.$.$mpk_tss_pereferial_details());
        }
        /**
         *  ```
         *  details_event_top?e null
         *  ```
         **/
        details_event_top(e, force) {
            return (e !== void 0) ? e : null;
        }
        /**
         *  ```
         *  unit!id null
         *  ```
         **/
        unit(id) {
            return null;
        }
        /**
         *  ```
         *  Unit_link!id $mpk_tss_pereferial_link unit <= unit!id
         *  ```
         **/
        Unit_link(id) {
            return ((obj) => {
                obj.unit = () => this.unit(id);
                return obj;
            })(new this.$.$mpk_tss_pereferial_link());
        }
    }
    __decorate([
        $.$mol_mem
    ], $mpk_tss_pereferial_list.prototype, "Main", null);
    __decorate([
        $.$mol_mem
    ], $mpk_tss_pereferial_list.prototype, "event_top", null);
    __decorate([
        $.$mol_mem
    ], $mpk_tss_pereferial_list.prototype, "unit_current_id", null);
    __decorate([
        $.$mol_mem
    ], $mpk_tss_pereferial_list.prototype, "filter_value", null);
    __decorate([
        $.$mol_mem
    ], $mpk_tss_pereferial_list.prototype, "List", null);
    __decorate([
        $.$mol_mem_key
    ], $mpk_tss_pereferial_list.prototype, "Unit_details", null);
    __decorate([
        $.$mol_mem
    ], $mpk_tss_pereferial_list.prototype, "details_event_top", null);
    __decorate([
        $.$mol_mem_key
    ], $mpk_tss_pereferial_list.prototype, "Unit_link", null);
    $.$mpk_tss_pereferial_list = $mpk_tss_pereferial_list;
})($ || ($ = {}));
//list.view.tree.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mpk_tss_pereferial_list extends $.$mpk_tss_pereferial_list {
            domain() {
                return this.$.$mpk_tss_pereferial_domain_units.make({
                    filter_name: () => this.filter_value()
                });
            }
            unit_links() {
                return this.domain().units().map(unit => this.Unit_link(unit.id()));
            }
            unit(id) {
                return this.domain().unit(id);
            }
            filter_value(next) {
                return this.$.$mol_state_arg.value(this.state_key('units'), next ? next : null) || '';
            }
            unit_current_id(next) {
                return this.$.$mol_state_arg.value(this.state_key('unit'), next) || '';
            }
            Unit_current() {
                return this.unit_current_id() && this.Unit_details(this.unit_current_id());
            }
            details_event_top(event) {
                this.Main().focused(true);
            }
        }
        __decorate([
            $.$mol_mem
        ], $mpk_tss_pereferial_list.prototype, "domain", null);
        __decorate([
            $.$mol_mem
        ], $mpk_tss_pereferial_list.prototype, "unit_links", null);
        __decorate([
            $.$mol_mem
        ], $mpk_tss_pereferial_list.prototype, "filter_value", null);
        $$.$mpk_tss_pereferial_list = $mpk_tss_pereferial_list;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//list.view.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mpk_tss_sensors extends $.$mol_page {
        /**
         *  ```
         *  title @ \Sensors
         *  ```
         **/
        title() {
            return this.$.$mol_locale.text("$mpk_tss_sensors_title");
        }
        /**
         *  ```
         *  body / <= Content
         *  ```
         **/
        body() {
            return [this.Content()];
        }
        /**
         *  ```
         *  Content $mol_filler
         *  ```
         **/
        Content() {
            return ((obj) => {
                return obj;
            })(new this.$.$mol_filler());
        }
    }
    __decorate([
        $.$mol_mem
    ], $mpk_tss_sensors.prototype, "Content", null);
    $.$mpk_tss_sensors = $mpk_tss_sensors;
})($ || ($ = {}));
//sensors.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/check/check.css", "[mol_check] {\n\tflex: 0 0 auto;\n\tjustify-content: flex-start;\n\talign-content: center;\n\talign-items: flex-start;\n\tborder: none;\n\tfont-weight: inherit;\n\tbox-shadow: none;\n\ttext-align: left;\n\tpadding: .5rem;\n\tdisplay: inline-flex;\n\tflex-wrap: nowrap;\n}\n");
})($ || ($ = {}));
//check.css.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_check extends $.$mol_button_minor {
        /**
         *  ```
         *  attr *
         *  	^
         *  	mol_check_checked <= checked?val
         *  	aria-checked <= checked?val
         *  	role \checkbox
         *  ```
         **/
        attr() {
            return (Object.assign(Object.assign({}, super.attr()), { "mol_check_checked": this.checked(), "aria-checked": this.checked(), "role": "checkbox" }));
        }
        /**
         *  ```
         *  checked?val false
         *  ```
         **/
        checked(val, force) {
            return (val !== void 0) ? val : false;
        }
        /**
         *  ```
         *  sub /
         *  	<= Icon
         *  	<= label
         *  ```
         **/
        sub() {
            return [this.Icon(), this.label()];
        }
        /**
         *  ```
         *  Icon null
         *  ```
         **/
        Icon() {
            return null;
        }
        /**
         *  ```
         *  label / <= Title
         *  ```
         **/
        label() {
            return [this.Title()];
        }
        /**
         *  ```
         *  Title $mol_view sub / <= title
         *  ```
         **/
        Title() {
            return ((obj) => {
                obj.sub = () => [this.title()];
                return obj;
            })(new this.$.$mol_view());
        }
        /**
         *  ```
         *  title \
         *  ```
         **/
        title() {
            return "";
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_check.prototype, "checked", null);
    __decorate([
        $.$mol_mem
    ], $mol_check.prototype, "Title", null);
    $.$mol_check = $mol_check;
})($ || ($ = {}));
//check.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_check extends $.$mol_check {
            event_click(next) {
                this.checked(!this.checked());
                if (next)
                    next.preventDefault();
            }
            sub() {
                return [
                    ...$.$mol_maybe(this.Icon()),
                    ...this.label(),
                ];
            }
        }
        $$.$mol_check = $mol_check;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//check.view.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/check/icon/icon.view.css", "[mol_check_icon][mol_check_checked] {\n\tcolor: var(--mol_skin_accent);\n}\n");
})($ || ($ = {}));
//icon.view.css.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_check_icon extends $.$mol_check {
    }
    $.$mol_check_icon = $mol_check_icon;
})($ || ($ = {}));
//icon.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mpk/tss/reports/check/warning/warning.css", "[mpk_tss_reports_check_warning] {\n\t--mol_theme_control: gray;\n\t--mol_skin_accent: var(--mpk_theme_status_bg_warning);\n\n\tmargin-bottom: 1px;\n\tbox-shadow: 0 0 0 1px var(--mol_theme_line);\n}\n\n[mpk_tss_reports_check_warning_icon] {\n\twidth: 1.5em;\n\theight: 1.5em;\n}\n");
})($ || ($ = {}));
//warning.css.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mpk_tss_reports_check_warning extends $.$mol_check_icon {
        /**
         *  ```
         *  checked?val <=> filter_warning?val
         *  ```
         **/
        checked(val, force) {
            return this.filter_warning(val);
        }
        /**
         *  ```
         *  filter_warning?val true
         *  ```
         **/
        filter_warning(val, force) {
            return (val !== void 0) ? val : true;
        }
        /**
         *  ```
         *  Icon $mpk_tss_icon_round_warning
         *  ```
         **/
        Icon() {
            return ((obj) => {
                return obj;
            })(new this.$.$mpk_tss_icon_round_warning());
        }
    }
    __decorate([
        $.$mol_mem
    ], $mpk_tss_reports_check_warning.prototype, "checked", null);
    __decorate([
        $.$mol_mem
    ], $mpk_tss_reports_check_warning.prototype, "filter_warning", null);
    __decorate([
        $.$mol_mem
    ], $mpk_tss_reports_check_warning.prototype, "Icon", null);
    $.$mpk_tss_reports_check_warning = $mpk_tss_reports_check_warning;
})($ || ($ = {}));
//warning.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mpk/tss/reports/train/page/page.css", "[mpk_tss_reports_train_page_body] {\n\toverflow-y: scroll;\n}\n\n[mpk_tss_reports_train_page_search] {\n\tdisplay: inline-flex;\n\talign-items: baseline;\n}\n");
})($ || ($ = {}));
//page.css.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mpk_tss_reports_train_page extends $.$mol_page {
        /**
         *  ```
         *  minimal_width 520
         *  ```
         **/
        minimal_width() {
            return 520;
        }
        /**
         *  ```
         *  report_current_id?uri \
         *  ```
         **/
        report_current_id(uri, force) {
            return (uri !== void 0) ? uri : "";
        }
        /**
         *  ```
         *  sub /
         *  	<= Head
         *  	<= Search
         *  	<= Body
         *  ```
         **/
        sub() {
            return [this.Head(), this.Search(), this.Body()];
        }
        /**
         *  ```
         *  Search $mol_view sub /
         *  	<= Filter_number
         *  	<= Filter_warning
         *  ```
         **/
        Search() {
            return ((obj) => {
                obj.sub = () => [this.Filter_number(), this.Filter_warning()];
                return obj;
            })(new this.$.$mol_view());
        }
        /**
         *  ```
         *  Filter_number $mol_search
         *  	hint <= hint
         *  	query?val <=> filter_number?val
         *  ```
         **/
        Filter_number() {
            return ((obj) => {
                obj.hint = () => this.hint();
                obj.query = (val) => this.filter_number(val);
                return obj;
            })(new this.$.$mol_search());
        }
        /**
         *  ```
         *  hint @ \Train number or report id
         *  ```
         **/
        hint() {
            return this.$.$mol_locale.text("$mpk_tss_reports_train_page_hint");
        }
        /**
         *  ```
         *  filter_number?val \
         *  ```
         **/
        filter_number(val, force) {
            return (val !== void 0) ? val : "";
        }
        /**
         *  ```
         *  Filter_warning $mpk_tss_reports_check_warning checked?val <=> filter_warning?val
         *  ```
         **/
        Filter_warning() {
            return ((obj) => {
                obj.checked = (val) => this.filter_warning(val);
                return obj;
            })(new this.$.$mpk_tss_reports_check_warning());
        }
        /**
         *  ```
         *  filter_warning?val true
         *  ```
         **/
        filter_warning(val, force) {
            return (val !== void 0) ? val : true;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mpk_tss_reports_train_page.prototype, "report_current_id", null);
    __decorate([
        $.$mol_mem
    ], $mpk_tss_reports_train_page.prototype, "Search", null);
    __decorate([
        $.$mol_mem
    ], $mpk_tss_reports_train_page.prototype, "Filter_number", null);
    __decorate([
        $.$mol_mem
    ], $mpk_tss_reports_train_page.prototype, "filter_number", null);
    __decorate([
        $.$mol_mem
    ], $mpk_tss_reports_train_page.prototype, "Filter_warning", null);
    __decorate([
        $.$mol_mem
    ], $mpk_tss_reports_train_page.prototype, "filter_warning", null);
    $.$mpk_tss_reports_train_page = $mpk_tss_reports_train_page;
})($ || ($ = {}));
//page.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mpk_tss_reports_train_page extends $.$mpk_tss_reports_train_page {
        }
        $$.$mpk_tss_reports_train_page = $mpk_tss_reports_train_page;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//page.view.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mpk/tss/card/list/list.css", "[mpk_tss_card_list_selected=\"true\"] > :not([mol_link_current=\"true\"]) > [mol_card] {\n\t--mol_theme_line: lightgray;\n}\n");
})($ || ($ = {}));
//list.css.js.map
;
"use strict";
var $;
(function ($) {
    class $mpk_tss_card_list extends $.$mol_list {
        /**
         *  ```
         *  minimal_width 300
         *  ```
         **/
        minimal_width() {
            return 300;
        }
        /**
         *  ```
         *  current_id \
         *  ```
         **/
        current_id() {
            return "";
        }
        /**
         *  ```
         *  attr *
         *  	^
         *  	mpk_tss_card_list_selected <= selected
         *  ```
         **/
        attr() {
            return (Object.assign(Object.assign({}, super.attr()), { "mpk_tss_card_list_selected": this.selected() }));
        }
        /**
         *  ```
         *  selected false
         *  ```
         **/
        selected() {
            return false;
        }
    }
    $.$mpk_tss_card_list = $mpk_tss_card_list;
})($ || ($ = {}));
//list.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mpk_tss_card_list extends $.$mpk_tss_card_list {
            selected() {
                return !!this.current_id();
            }
        }
        $$.$mpk_tss_card_list = $mpk_tss_card_list;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//list.view.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mpk/tss/reports/resolution/resolution.css", "[mpk_tss_reports_resolution] {\n\tdisplay: inline-flex;\n\talign-items: baseline;\n}\n\n[mpk_tss_reports_resolution_text] {\n\tmargin-left: 0.1rem;\n\twhite-space: nowrap;\n\tdisplay: inline-flex;\n}\n\n[mpk_tss_reports_resolution_icon_place] {\n\tdisplay: inline-flex;\n\talign-self: center;\n\tmargin-top: -.2em;\n\t--mol_theme_control: hsl(46, 73%, 55%);\n}\n\n[mpk_tss_reports_resolution_icon_place] > [mol_icon] {\n\twidth: 1.3em;\n\theight: 1.3em;\n}\n");
})($ || ($ = {}));
//resolution.css.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mpk_tss_reports_resolution extends $.$mol_view {
        /**
         *  ```
         *  attr *
         *  	^
         *  	mpk_tss_reports_resolution_type <= status
         *  ```
         **/
        attr() {
            return (Object.assign(Object.assign({}, super.attr()), { "mpk_tss_reports_resolution_type": this.status() }));
        }
        /**
         *  ```
         *  status \
         *  ```
         **/
        status() {
            return "";
        }
        /**
         *  ```
         *  statuses *
         *  	success <= success
         *  	warning <= warning
         *  ```
         **/
        statuses() {
            return ({
                "success": this.success(),
                "warning": this.warning(),
            });
        }
        /**
         *  ```
         *  success @ \Success
         *  ```
         **/
        success() {
            return this.$.$mol_locale.text("$mpk_tss_reports_resolution_success");
        }
        /**
         *  ```
         *  warning @ \Warning
         *  ```
         **/
        warning() {
            return this.$.$mol_locale.text("$mpk_tss_reports_resolution_warning");
        }
        /**
         *  ```
         *  icons *
         *  	success <= Success
         *  	warning <= Warning
         *  ```
         **/
        icons() {
            return ({
                "success": this.Success(),
                "warning": this.Warning(),
            });
        }
        /**
         *  ```
         *  Success $mpk_tss_icon_circle_outline
         *  ```
         **/
        Success() {
            return ((obj) => {
                return obj;
            })(new this.$.$mpk_tss_icon_circle_outline());
        }
        /**
         *  ```
         *  Warning $mpk_tss_icon_round_warning
         *  ```
         **/
        Warning() {
            return ((obj) => {
                return obj;
            })(new this.$.$mpk_tss_icon_round_warning());
        }
        /**
         *  ```
         *  sub / <= Text
         *  ```
         **/
        sub() {
            return [this.Text()];
        }
        /**
         *  ```
         *  Text $mol_view sub / <= status_text
         *  ```
         **/
        Text() {
            return ((obj) => {
                obj.sub = () => [this.status_text()];
                return obj;
            })(new this.$.$mol_view());
        }
        /**
         *  ```
         *  status_text \
         *  ```
         **/
        status_text() {
            return "";
        }
    }
    __decorate([
        $.$mol_mem
    ], $mpk_tss_reports_resolution.prototype, "Success", null);
    __decorate([
        $.$mol_mem
    ], $mpk_tss_reports_resolution.prototype, "Warning", null);
    __decorate([
        $.$mol_mem
    ], $mpk_tss_reports_resolution.prototype, "Text", null);
    $.$mpk_tss_reports_resolution = $mpk_tss_reports_resolution;
})($ || ($ = {}));
//resolution.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mpk_tss_reports_resolution extends $.$mpk_tss_reports_resolution {
            status() { throw new $.$mpk_tss_todo; }
            status_text() {
                return this.statuses()[this.status()] || this.status();
            }
            Icon() {
                return this.icons()[this.status()] || this.icons().warning;
            }
        }
        $$.$mpk_tss_reports_resolution = $mpk_tss_reports_resolution;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//resolution.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mpk_tss_parameter_speed extends $.$mol_view {
        /**
         *  ```
         *  sub /
         *  	<= value
         *  	<= spacer
         *  	<= unit
         *  ```
         **/
        sub() {
            return [this.value(), this.spacer(), this.unit()];
        }
        /**
         *  ```
         *  value 0
         *  ```
         **/
        value() {
            return 0;
        }
        /**
         *  ```
         *  spacer \
         *  ```
         **/
        spacer() {
            return " ";
        }
        /**
         *  ```
         *  unit @ \km/h
         *  ```
         **/
        unit() {
            return this.$.$mol_locale.text("$mpk_tss_parameter_speed_unit");
        }
    }
    $.$mpk_tss_parameter_speed = $mpk_tss_parameter_speed;
})($ || ($ = {}));
//speed.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mpk/tss/reports/delivery/delivery.css", "[mpk_tss_reports_delivery_type=\"preparing\"] {\n\tcolor: rgb(151, 151, 1);\n}\n\n[mpk_tss_reports_delivery_type=\"error\"] {\n\tcolor: red;\n}\n\n[mpk_tss_reports_delivery_type=\"sending\"] {\n\tcolor: rgb(73, 118, 168);\n}\n\n[mpk_tss_reports_delivery_type=\"sent\"] {\n\tcolor: green;\n}\n\n[mpk_tss_reports_delivery] {\n\t/* display: inline-flex; */\n}\n\n[mpk_tss_reports_delivery_text] {\n\tmargin-left: 0.1rem;\n\twhite-space: nowrap;\n\tdisplay: inline-block;\n}\n");
})($ || ($ = {}));
//delivery.css.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mpk_tss_reports_delivery extends $.$mol_view {
        /**
         *  ```
         *  attr *
         *  	^
         *  	mpk_tss_reports_delivery_type <= status
         *  ```
         **/
        attr() {
            return (Object.assign(Object.assign({}, super.attr()), { "mpk_tss_reports_delivery_type": this.status() }));
        }
        /**
         *  ```
         *  status null
         *  ```
         **/
        status() {
            return null;
        }
        /**
         *  ```
         *  statuses *
         *  	preparing <= preparing
         *  	sending <= sending
         *  	sent <= sent
         *  	error <= error
         *  ```
         **/
        statuses() {
            return ({
                "preparing": this.preparing(),
                "sending": this.sending(),
                "sent": this.sent(),
                "error": this.error(),
            });
        }
        /**
         *  ```
         *  preparing @ \Preparing
         *  ```
         **/
        preparing() {
            return this.$.$mol_locale.text("$mpk_tss_reports_delivery_preparing");
        }
        /**
         *  ```
         *  sending @ \Sending
         *  ```
         **/
        sending() {
            return this.$.$mol_locale.text("$mpk_tss_reports_delivery_sending");
        }
        /**
         *  ```
         *  sent @ \Sent
         *  ```
         **/
        sent() {
            return this.$.$mol_locale.text("$mpk_tss_reports_delivery_sent");
        }
        /**
         *  ```
         *  error @ \Error
         *  ```
         **/
        error() {
            return this.$.$mol_locale.text("$mpk_tss_reports_delivery_error");
        }
        /**
         *  ```
         *  icons *
         *  	preparing <= Preparing
         *  	sending <= Sending
         *  	sent <= Sent
         *  	error <= Error
         *  ```
         **/
        icons() {
            return ({
                "preparing": this.Preparing(),
                "sending": this.Sending(),
                "sent": this.Sent(),
                "error": this.Error(),
            });
        }
        /**
         *  ```
         *  Preparing $mpk_tss_icon_sync
         *  ```
         **/
        Preparing() {
            return ((obj) => {
                return obj;
            })(new this.$.$mpk_tss_icon_sync());
        }
        /**
         *  ```
         *  Sending $mpk_tss_icon_sync
         *  ```
         **/
        Sending() {
            return ((obj) => {
                return obj;
            })(new this.$.$mpk_tss_icon_sync());
        }
        /**
         *  ```
         *  Sent $mpk_tss_icon_done
         *  ```
         **/
        Sent() {
            return ((obj) => {
                return obj;
            })(new this.$.$mpk_tss_icon_done());
        }
        /**
         *  ```
         *  Error $mpk_tss_icon_clear
         *  ```
         **/
        Error() {
            return ((obj) => {
                return obj;
            })(new this.$.$mpk_tss_icon_clear());
        }
        /**
         *  ```
         *  sub /
         *  	<= Icon
         *  	<= Text
         *  ```
         **/
        sub() {
            return [this.Icon(), this.Text()];
        }
        /**
         *  ```
         *  Icon null
         *  ```
         **/
        Icon() {
            return null;
        }
        /**
         *  ```
         *  Text $mol_view sub / <= status_text
         *  ```
         **/
        Text() {
            return ((obj) => {
                obj.sub = () => [this.status_text()];
                return obj;
            })(new this.$.$mol_view());
        }
        /**
         *  ```
         *  status_text \
         *  ```
         **/
        status_text() {
            return "";
        }
    }
    __decorate([
        $.$mol_mem
    ], $mpk_tss_reports_delivery.prototype, "Preparing", null);
    __decorate([
        $.$mol_mem
    ], $mpk_tss_reports_delivery.prototype, "Sending", null);
    __decorate([
        $.$mol_mem
    ], $mpk_tss_reports_delivery.prototype, "Sent", null);
    __decorate([
        $.$mol_mem
    ], $mpk_tss_reports_delivery.prototype, "Error", null);
    __decorate([
        $.$mol_mem
    ], $mpk_tss_reports_delivery.prototype, "Text", null);
    $.$mpk_tss_reports_delivery = $mpk_tss_reports_delivery;
})($ || ($ = {}));
//delivery.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mpk_tss_reports_delivery extends $.$mpk_tss_reports_delivery {
            status() {
                return $.$mpk_tss_reports_domain_delivery.preparing;
            }
            status_text() {
                return this.statuses()[this.status()] || this.status();
            }
            Icon() {
                return this.icons()[this.status()] || this.icons().error;
            }
        }
        $$.$mpk_tss_reports_delivery = $mpk_tss_reports_delivery;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//delivery.view.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mpk/tss/reports/train/link/link.css", "[mpk_tss_reports_train_link_id] {\n\tflex: 1 1 5rem;\n}\n\n[mpk_tss_reports_train_link_train_number] {\n\tflex: 1 1 7rem;\n}\n\n[mpk_tss_reports_train_link_started] {\n\tflex: 1 1 5rem;\n}\n[mpk_tss_reports_train_link_average_speed] {\n\tflex: 1 1 4rem;\n}\n[mpk_tss_reports_train_link_delivery] {\n    flex: 1 1 7rem;\n}\n");
})($ || ($ = {}));
//link.css.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mpk_tss_reports_train_link extends $.$mpk_tss_card {
        /**
         *  ```
         *  report null
         *  ```
         **/
        report() {
            return null;
        }
        /**
         *  ```
         *  arg * report <= report_id
         *  ```
         **/
        arg() {
            return ({
                "report": this.report_id(),
            });
        }
        /**
         *  ```
         *  report_id \
         *  ```
         **/
        report_id() {
            return "";
        }
        /**
         *  ```
         *  copy_params /
         *  	\login
         *  	\page
         *  	\trains
         *  	\carriages
         *  	\train_warning
         *  	\carriage_warning
         *  ```
         **/
        copy_params() {
            return ["login", "page", "trains", "carriages", "train_warning", "carriage_warning"];
        }
        /**
         *  ```
         *  status <= resolution
         *  ```
         **/
        status() {
            return this.resolution();
        }
        /**
         *  ```
         *  Status_text $mpk_tss_reports_resolution status <= resolution
         *  ```
         **/
        Status_text() {
            return ((obj) => {
                obj.status = () => this.resolution();
                return obj;
            })(new this.$.$mpk_tss_reports_resolution());
        }
        /**
         *  ```
         *  resolution null
         *  ```
         **/
        resolution() {
            return null;
        }
        /**
         *  ```
         *  status_click?event <=> report_status_click?event
         *  ```
         **/
        status_click(event, force) {
            return this.report_status_click(event);
        }
        /**
         *  ```
         *  report_status_click?event null
         *  ```
         **/
        report_status_click(event, force) {
            return (event !== void 0) ? event : null;
        }
        /**
         *  ```
         *  items /
         *  	<= Id
         *  	<= Started
         *  	<= Average_speed
         *  	<= Delivery
         *  	<= Train_number
         *  ```
         **/
        items() {
            return [this.Id(), this.Started(), this.Average_speed(), this.Delivery(), this.Train_number()];
        }
        /**
         *  ```
         *  Id $mol_labeler
         *  	title <= id_title
         *  	content / <= report_id
         *  ```
         **/
        Id() {
            return ((obj) => {
                obj.title = () => this.id_title();
                obj.content = () => [this.report_id()];
                return obj;
            })(new this.$.$mol_labeler());
        }
        /**
         *  ```
         *  id_title @ \Id
         *  ```
         **/
        id_title() {
            return this.$.$mol_locale.text("$mpk_tss_reports_train_link_id_title");
        }
        /**
         *  ```
         *  Started $mol_labeler
         *  	title <= started_title
         *  	content / <= started
         *  ```
         **/
        Started() {
            return ((obj) => {
                obj.title = () => this.started_title();
                obj.content = () => [this.started()];
                return obj;
            })(new this.$.$mol_labeler());
        }
        /**
         *  ```
         *  started_title @ \Date
         *  ```
         **/
        started_title() {
            return this.$.$mol_locale.text("$mpk_tss_reports_train_link_started_title");
        }
        /**
         *  ```
         *  started \
         *  ```
         **/
        started() {
            return "";
        }
        /**
         *  ```
         *  Average_speed $mol_labeler
         *  	title <= average_speed_title
         *  	content / <= Average_speed_formatted
         *  ```
         **/
        Average_speed() {
            return ((obj) => {
                obj.title = () => this.average_speed_title();
                obj.content = () => [this.Average_speed_formatted()];
                return obj;
            })(new this.$.$mol_labeler());
        }
        /**
         *  ```
         *  average_speed_title @ \Speed
         *  ```
         **/
        average_speed_title() {
            return this.$.$mol_locale.text("$mpk_tss_reports_train_link_average_speed_title");
        }
        /**
         *  ```
         *  Average_speed_formatted $mpk_tss_parameter_speed value <= average_speed
         *  ```
         **/
        Average_speed_formatted() {
            return ((obj) => {
                obj.value = () => this.average_speed();
                return obj;
            })(new this.$.$mpk_tss_parameter_speed());
        }
        /**
         *  ```
         *  average_speed 0
         *  ```
         **/
        average_speed() {
            return 0;
        }
        /**
         *  ```
         *  Delivery $mol_labeler
         *  	title <= delivery_title
         *  	Content <= Delivery_value
         *  ```
         **/
        Delivery() {
            return ((obj) => {
                obj.title = () => this.delivery_title();
                obj.Content = () => this.Delivery_value();
                return obj;
            })(new this.$.$mol_labeler());
        }
        /**
         *  ```
         *  delivery_title @ \Delivery
         *  ```
         **/
        delivery_title() {
            return this.$.$mol_locale.text("$mpk_tss_reports_train_link_delivery_title");
        }
        /**
         *  ```
         *  Delivery_value $mpk_tss_reports_delivery status <= delivery
         *  ```
         **/
        Delivery_value() {
            return ((obj) => {
                obj.status = () => this.delivery();
                return obj;
            })(new this.$.$mpk_tss_reports_delivery());
        }
        /**
         *  ```
         *  delivery null
         *  ```
         **/
        delivery() {
            return null;
        }
        /**
         *  ```
         *  Train_number $mol_labeler
         *  	title <= train_number_title
         *  	content / <= train_number
         *  ```
         **/
        Train_number() {
            return ((obj) => {
                obj.title = () => this.train_number_title();
                obj.content = () => [this.train_number()];
                return obj;
            })(new this.$.$mol_labeler());
        }
        /**
         *  ```
         *  train_number_title @ \Train
         *  ```
         **/
        train_number_title() {
            return this.$.$mol_locale.text("$mpk_tss_reports_train_link_train_number_title");
        }
        /**
         *  ```
         *  train_number \
         *  ```
         **/
        train_number() {
            return "";
        }
    }
    __decorate([
        $.$mol_mem
    ], $mpk_tss_reports_train_link.prototype, "Status_text", null);
    __decorate([
        $.$mol_mem
    ], $mpk_tss_reports_train_link.prototype, "status_click", null);
    __decorate([
        $.$mol_mem
    ], $mpk_tss_reports_train_link.prototype, "report_status_click", null);
    __decorate([
        $.$mol_mem
    ], $mpk_tss_reports_train_link.prototype, "Id", null);
    __decorate([
        $.$mol_mem
    ], $mpk_tss_reports_train_link.prototype, "Started", null);
    __decorate([
        $.$mol_mem
    ], $mpk_tss_reports_train_link.prototype, "Average_speed", null);
    __decorate([
        $.$mol_mem
    ], $mpk_tss_reports_train_link.prototype, "Average_speed_formatted", null);
    __decorate([
        $.$mol_mem
    ], $mpk_tss_reports_train_link.prototype, "Delivery", null);
    __decorate([
        $.$mol_mem
    ], $mpk_tss_reports_train_link.prototype, "Delivery_value", null);
    __decorate([
        $.$mol_mem
    ], $mpk_tss_reports_train_link.prototype, "Train_number", null);
    $.$mpk_tss_reports_train_link = $mpk_tss_reports_train_link;
})($ || ($ = {}));
//link.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mpk_tss_reports_train_link extends $.$mpk_tss_reports_train_link {
            report() {
                throw new $.$mpk_tss_todo;
            }
            report_id() {
                return this.report().id();
            }
            train_number() {
                return this.report().train_number();
            }
            resolution() {
                return this.report().resolution();
            }
            started() {
                const start = this.report().started();
                return start ? start.native.toLocaleDateString() : null;
            }
            average_speed() {
                return this.report().average_speed();
            }
            delivery() {
                return this.report().delivery();
            }
            report_status_click(even) {
                if (event)
                    event.preventDefault();
                alert('Report...');
            }
        }
        $$.$mpk_tss_reports_train_link = $mpk_tss_reports_train_link;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//link.view.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mpk/tss/reports/carriage/page/page.css", "[mpk_tss_reports_carriage_page_search] {\n\tdisplay: inline-flex;\n}\n");
})($ || ($ = {}));
//page.css.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mpk_tss_reports_carriage_page extends $.$mol_page {
        /**
         *  ```
         *  minimal_width 337
         *  ```
         **/
        minimal_width() {
            return 337;
        }
        /**
         *  ```
         *  sub /
         *  	<= Head
         *  	<= Search
         *  	<= Body
         *  ```
         **/
        sub() {
            return [this.Head(), this.Search(), this.Body()];
        }
        /**
         *  ```
         *  Search $mol_view sub /
         *  	<= Filter_number
         *  	<= Filter_warning
         *  ```
         **/
        Search() {
            return ((obj) => {
                obj.sub = () => [this.Filter_number(), this.Filter_warning()];
                return obj;
            })(new this.$.$mol_view());
        }
        /**
         *  ```
         *  Filter_number $mol_search
         *  	hint <= hint
         *  	query?val <=> filter_number?val
         *  ```
         **/
        Filter_number() {
            return ((obj) => {
                obj.hint = () => this.hint();
                obj.query = (val) => this.filter_number(val);
                return obj;
            })(new this.$.$mol_search());
        }
        /**
         *  ```
         *  hint @ \Carriage number
         *  ```
         **/
        hint() {
            return this.$.$mol_locale.text("$mpk_tss_reports_carriage_page_hint");
        }
        /**
         *  ```
         *  filter_number?val \
         *  ```
         **/
        filter_number(val, force) {
            return (val !== void 0) ? val : "";
        }
        /**
         *  ```
         *  Filter_warning $mpk_tss_reports_check_warning checked?val <=> filter_warning?val
         *  ```
         **/
        Filter_warning() {
            return ((obj) => {
                obj.checked = (val) => this.filter_warning(val);
                return obj;
            })(new this.$.$mpk_tss_reports_check_warning());
        }
        /**
         *  ```
         *  filter_warning?val true
         *  ```
         **/
        filter_warning(val, force) {
            return (val !== void 0) ? val : true;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mpk_tss_reports_carriage_page.prototype, "Search", null);
    __decorate([
        $.$mol_mem
    ], $mpk_tss_reports_carriage_page.prototype, "Filter_number", null);
    __decorate([
        $.$mol_mem
    ], $mpk_tss_reports_carriage_page.prototype, "filter_number", null);
    __decorate([
        $.$mol_mem
    ], $mpk_tss_reports_carriage_page.prototype, "Filter_warning", null);
    __decorate([
        $.$mol_mem
    ], $mpk_tss_reports_carriage_page.prototype, "filter_warning", null);
    $.$mpk_tss_reports_carriage_page = $mpk_tss_reports_carriage_page;
})($ || ($ = {}));
//page.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mpk_tss_reports_violation extends $.$mol_view {
        /**
         *  ```
         *  status null
         *  ```
         **/
        status() {
            return null;
        }
        /**
         *  ```
         *  none @ \None
         *  ```
         **/
        none() {
            return this.$.$mol_locale.text("$mpk_tss_reports_violation_none");
        }
        /**
         *  ```
         *  empty false
         *  ```
         **/
        empty() {
            return false;
        }
        /**
         *  ```
         *  statuses *
         *  	slider <= slider
         *  	vyscherbiny <= vyscherbiny
         *  	sink <= sink
         *  	dent <= dent
         *  ```
         **/
        statuses() {
            return ({
                "slider": this.slider(),
                "vyscherbiny": this.vyscherbiny(),
                "sink": this.sink(),
                "dent": this.dent(),
            });
        }
        /**
         *  ```
         *  slider @ \Slider
         *  ```
         **/
        slider() {
            return this.$.$mol_locale.text("$mpk_tss_reports_violation_slider");
        }
        /**
         *  ```
         *  vyscherbiny @ \Vyscherbiny
         *  ```
         **/
        vyscherbiny() {
            return this.$.$mol_locale.text("$mpk_tss_reports_violation_vyscherbiny");
        }
        /**
         *  ```
         *  sink @ \Sink
         *  ```
         **/
        sink() {
            return this.$.$mol_locale.text("$mpk_tss_reports_violation_sink");
        }
        /**
         *  ```
         *  dent @ \Dent
         *  ```
         **/
        dent() {
            return this.$.$mol_locale.text("$mpk_tss_reports_violation_dent");
        }
        /**
         *  ```
         *  group / <= status_text
         *  ```
         **/
        group() {
            return [this.status_text()];
        }
        /**
         *  ```
         *  status_text \
         *  ```
         **/
        status_text() {
            return "";
        }
        /**
         *  ```
         *  sub <= group
         *  ```
         **/
        sub() {
            return this.group();
        }
    }
    $.$mpk_tss_reports_violation = $mpk_tss_reports_violation;
})($ || ($ = {}));
//violation.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mpk_tss_reports_violation extends $.$mpk_tss_reports_violation {
            status_text() {
                if (!this.status())
                    return this.none();
                return this.statuses()[this.status()] || this.status();
            }
            sub() {
                if (!this.empty() && !this.status())
                    return [null];
                return super.sub();
            }
        }
        $$.$mpk_tss_reports_violation = $mpk_tss_reports_violation;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//violation.view.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mpk/tss/reports/carriage/violation/violation.css", "[mpk_tss_reports_carriage_violation] {\n\tpadding-left: 0.3rem;\n}\n");
})($ || ($ = {}));
//violation.css.js.map
;
"use strict";
var $;
(function ($) {
    class $mpk_tss_reports_carriage_violation extends $.$mpk_tss_reports_violation {
        /**
         *  ```
         *  group /
         *  	<= before
         *  	<= status_text
         *  	<= after
         *  ```
         **/
        group() {
            return [this.before(), this.status_text(), this.after()];
        }
        /**
         *  ```
         *  before \(
         *  ```
         **/
        before() {
            return "(";
        }
        /**
         *  ```
         *  after \)
         *  ```
         **/
        after() {
            return ")";
        }
    }
    $.$mpk_tss_reports_carriage_violation = $mpk_tss_reports_carriage_violation;
})($ || ($ = {}));
//violation.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mpk_tss_reports_carriage_load extends $.$mol_view {
        /**
         *  ```
         *  status null
         *  ```
         **/
        status() {
            return null;
        }
        /**
         *  ```
         *  statuses *
         *  	free <= free
         *  	full <= full
         *  ```
         **/
        statuses() {
            return ({
                "free": this.free(),
                "full": this.full(),
            });
        }
        /**
         *  ```
         *  free @ \Free
         *  ```
         **/
        free() {
            return this.$.$mol_locale.text("$mpk_tss_reports_carriage_load_free");
        }
        /**
         *  ```
         *  full @ \Full
         *  ```
         **/
        full() {
            return this.$.$mol_locale.text("$mpk_tss_reports_carriage_load_full");
        }
        /**
         *  ```
         *  sub / <= status_text
         *  ```
         **/
        sub() {
            return [this.status_text()];
        }
        /**
         *  ```
         *  status_text \
         *  ```
         **/
        status_text() {
            return "";
        }
    }
    $.$mpk_tss_reports_carriage_load = $mpk_tss_reports_carriage_load;
})($ || ($ = {}));
//load.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mpk_tss_reports_carriage_load extends $.$mpk_tss_reports_carriage_load {
            status_text() {
                return this.statuses()[this.status()] || this.status();
            }
        }
        $$.$mpk_tss_reports_carriage_load = $mpk_tss_reports_carriage_load;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//load.view.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mpk/tss/reports/carriage/link/link.css", "[mpk_tss_reports_carriage_link_place] {\n\tflex: 1 1 3rem;\n}\n\n[mpk_tss_reports_carriage_link_carriage_number] {\n\tflex: 1 1 5rem;\n}\n\n[mpk_tss_reports_carriage_link_load] {\n\tflex: 1 1 4rem;\n}\n\n[mpk_tss_reports_carriage_link_speed] {\n\tflex: 1 1 4rem;\n}\n");
})($ || ($ = {}));
//link.css.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mpk_tss_reports_carriage_link extends $.$mpk_tss_card {
        /**
         *  ```
         *  minimal_height 100
         *  ```
         **/
        minimal_height() {
            return 100;
        }
        /**
         *  ```
         *  carriage null
         *  ```
         **/
        carriage() {
            return null;
        }
        /**
         *  ```
         *  arg * carriage <= carriage_id
         *  ```
         **/
        arg() {
            return ({
                "carriage": this.carriage_id(),
            });
        }
        /**
         *  ```
         *  carriage_id \
         *  ```
         **/
        carriage_id() {
            return "";
        }
        /**
         *  ```
         *  copy_params /
         *  	\login
         *  	\page
         *  	\report
         *  	\carriages
         *  	\trains
         *  	\train_warning
         *  	\carriage_warning
         *  ```
         **/
        copy_params() {
            return ["login", "page", "report", "carriages", "trains", "train_warning", "carriage_warning"];
        }
        /**
         *  ```
         *  title @ \Train %train_number | Carriage %carriage_number
         *  ```
         **/
        title() {
            return this.$.$mol_locale.text("$mpk_tss_reports_carriage_link_title");
        }
        /**
         *  ```
         *  status <= resolution
         *  ```
         **/
        status() {
            return this.resolution();
        }
        /**
         *  ```
         *  Status_text $mol_view sub /
         *  	<= Status_main
         *  	<= Violation
         *  ```
         **/
        Status_text() {
            return ((obj) => {
                obj.sub = () => [this.Status_main(), this.Violation()];
                return obj;
            })(new this.$.$mol_view());
        }
        /**
         *  ```
         *  Status_main $mpk_tss_reports_resolution status <= resolution
         *  ```
         **/
        Status_main() {
            return ((obj) => {
                obj.status = () => this.resolution();
                return obj;
            })(new this.$.$mpk_tss_reports_resolution());
        }
        /**
         *  ```
         *  resolution null
         *  ```
         **/
        resolution() {
            return null;
        }
        /**
         *  ```
         *  Violation $mpk_tss_reports_carriage_violation status <= violation
         *  ```
         **/
        Violation() {
            return ((obj) => {
                obj.status = () => this.violation();
                return obj;
            })(new this.$.$mpk_tss_reports_carriage_violation());
        }
        /**
         *  ```
         *  violation \
         *  ```
         **/
        violation() {
            return "";
        }
        /**
         *  ```
         *  Status_icon $mpk_tss_icon_cloud_download
         *  ```
         **/
        Status_icon() {
            return ((obj) => {
                return obj;
            })(new this.$.$mpk_tss_icon_cloud_download());
        }
        /**
         *  ```
         *  status_click?event <=> carriage_status_click?event
         *  ```
         **/
        status_click(event, force) {
            return this.carriage_status_click(event);
        }
        /**
         *  ```
         *  carriage_status_click?event null
         *  ```
         **/
        carriage_status_click(event, force) {
            return (event !== void 0) ? event : null;
        }
        /**
         *  ```
         *  additional /
         *  ```
         **/
        additional() {
            return [];
        }
        /**
         *  ```
         *  items /
         *  	<= Place
         *  	<= Carriage_number
         *  	<= Load
         *  	<= Speed
         *  ```
         **/
        items() {
            return [this.Place(), this.Carriage_number(), this.Load(), this.Speed()];
        }
        /**
         *  ```
         *  Place $mol_labeler
         *  	title <= place_title
         *  	content / <= place
         *  ```
         **/
        Place() {
            return ((obj) => {
                obj.title = () => this.place_title();
                obj.content = () => [this.place()];
                return obj;
            })(new this.$.$mol_labeler());
        }
        /**
         *  ```
         *  place_title @ \Place
         *  ```
         **/
        place_title() {
            return this.$.$mol_locale.text("$mpk_tss_reports_carriage_link_place_title");
        }
        /**
         *  ```
         *  place \
         *  ```
         **/
        place() {
            return "";
        }
        /**
         *  ```
         *  Carriage_number $mol_labeler
         *  	title <= carriage_number_title
         *  	content / <= carriage_number
         *  ```
         **/
        Carriage_number() {
            return ((obj) => {
                obj.title = () => this.carriage_number_title();
                obj.content = () => [this.carriage_number()];
                return obj;
            })(new this.$.$mol_labeler());
        }
        /**
         *  ```
         *  carriage_number_title @ \Carriage
         *  ```
         **/
        carriage_number_title() {
            return this.$.$mol_locale.text("$mpk_tss_reports_carriage_link_carriage_number_title");
        }
        /**
         *  ```
         *  carriage_number \
         *  ```
         **/
        carriage_number() {
            return "";
        }
        /**
         *  ```
         *  Load $mol_labeler
         *  	title <= load_title
         *  	content / <= Load_text
         *  ```
         **/
        Load() {
            return ((obj) => {
                obj.title = () => this.load_title();
                obj.content = () => [this.Load_text()];
                return obj;
            })(new this.$.$mol_labeler());
        }
        /**
         *  ```
         *  load_title @ \Load
         *  ```
         **/
        load_title() {
            return this.$.$mol_locale.text("$mpk_tss_reports_carriage_link_load_title");
        }
        /**
         *  ```
         *  Load_text $mpk_tss_reports_carriage_load status <= load
         *  ```
         **/
        Load_text() {
            return ((obj) => {
                obj.status = () => this.load();
                return obj;
            })(new this.$.$mpk_tss_reports_carriage_load());
        }
        /**
         *  ```
         *  load \
         *  ```
         **/
        load() {
            return "";
        }
        /**
         *  ```
         *  Speed $mol_labeler
         *  	title <= speed_title
         *  	content / <= Speed_formatted
         *  ```
         **/
        Speed() {
            return ((obj) => {
                obj.title = () => this.speed_title();
                obj.content = () => [this.Speed_formatted()];
                return obj;
            })(new this.$.$mol_labeler());
        }
        /**
         *  ```
         *  speed_title @ \Speed
         *  ```
         **/
        speed_title() {
            return this.$.$mol_locale.text("$mpk_tss_reports_carriage_link_speed_title");
        }
        /**
         *  ```
         *  Speed_formatted $mpk_tss_parameter_speed value <= speed
         *  ```
         **/
        Speed_formatted() {
            return ((obj) => {
                obj.value = () => this.speed();
                return obj;
            })(new this.$.$mpk_tss_parameter_speed());
        }
        /**
         *  ```
         *  speed 0
         *  ```
         **/
        speed() {
            return 0;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mpk_tss_reports_carriage_link.prototype, "Status_text", null);
    __decorate([
        $.$mol_mem
    ], $mpk_tss_reports_carriage_link.prototype, "Status_main", null);
    __decorate([
        $.$mol_mem
    ], $mpk_tss_reports_carriage_link.prototype, "Violation", null);
    __decorate([
        $.$mol_mem
    ], $mpk_tss_reports_carriage_link.prototype, "Status_icon", null);
    __decorate([
        $.$mol_mem
    ], $mpk_tss_reports_carriage_link.prototype, "status_click", null);
    __decorate([
        $.$mol_mem
    ], $mpk_tss_reports_carriage_link.prototype, "carriage_status_click", null);
    __decorate([
        $.$mol_mem
    ], $mpk_tss_reports_carriage_link.prototype, "Place", null);
    __decorate([
        $.$mol_mem
    ], $mpk_tss_reports_carriage_link.prototype, "Carriage_number", null);
    __decorate([
        $.$mol_mem
    ], $mpk_tss_reports_carriage_link.prototype, "Load", null);
    __decorate([
        $.$mol_mem
    ], $mpk_tss_reports_carriage_link.prototype, "Load_text", null);
    __decorate([
        $.$mol_mem
    ], $mpk_tss_reports_carriage_link.prototype, "Speed", null);
    __decorate([
        $.$mol_mem
    ], $mpk_tss_reports_carriage_link.prototype, "Speed_formatted", null);
    $.$mpk_tss_reports_carriage_link = $mpk_tss_reports_carriage_link;
})($ || ($ = {}));
//link.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mpk_tss_reports_carriage_link extends $.$mpk_tss_reports_carriage_link {
            carriage() { throw new $.$mpk_tss_todo; }
            title() {
                return super.title()
                    .replace('%train_number', this.carriage().train().train_number())
                    .replace('%carriage_number', this.carriage_number());
            }
            carriage_id() {
                return this.carriage().id();
            }
            place() {
                return '' + this.carriage().place();
            }
            carriage_number() {
                return this.carriage().carriage_number();
            }
            resolution() {
                return this.carriage().resolution();
            }
            load() {
                return this.carriage().load();
            }
            violation() {
                return this.carriage().violation();
            }
            speed() {
                return this.carriage().measured_speed();
            }
            items() {
                return super.items().concat(this.additional());
            }
        }
        $$.$mpk_tss_reports_carriage_link = $mpk_tss_reports_carriage_link;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//link.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mpk_tss_parameter_weight extends $.$mol_view {
        /**
         *  ```
         *  sub /
         *  	<= value
         *  	<= spacer
         *  	<= unit
         *  ```
         **/
        sub() {
            return [this.value(), this.spacer(), this.unit()];
        }
        /**
         *  ```
         *  value 0
         *  ```
         **/
        value() {
            return 0;
        }
        /**
         *  ```
         *  spacer \
         *  ```
         **/
        spacer() {
            return " ";
        }
        /**
         *  ```
         *  unit @ \kg
         *  ```
         **/
        unit() {
            return this.$.$mol_locale.text("$mpk_tss_parameter_weight_unit");
        }
    }
    $.$mpk_tss_parameter_weight = $mpk_tss_parameter_weight;
})($ || ($ = {}));
//weight.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mpk_tss_reports_carriage_type extends $.$mol_view {
        /**
         *  ```
         *  value null
         *  ```
         **/
        value() {
            return null;
        }
        /**
         *  ```
         *  values *
         *  	hopper <= hopper
         *  	flatcar <= flatcar
         *  	tank <= tank
         *  	covered <= covered
         *  ```
         **/
        values() {
            return ({
                "hopper": this.hopper(),
                "flatcar": this.flatcar(),
                "tank": this.tank(),
                "covered": this.covered(),
            });
        }
        /**
         *  ```
         *  hopper @ \Hopper
         *  ```
         **/
        hopper() {
            return this.$.$mol_locale.text("$mpk_tss_reports_carriage_type_hopper");
        }
        /**
         *  ```
         *  flatcar @ \Flatcar
         *  ```
         **/
        flatcar() {
            return this.$.$mol_locale.text("$mpk_tss_reports_carriage_type_flatcar");
        }
        /**
         *  ```
         *  tank @ \Tank
         *  ```
         **/
        tank() {
            return this.$.$mol_locale.text("$mpk_tss_reports_carriage_type_tank");
        }
        /**
         *  ```
         *  covered @ \Covered
         *  ```
         **/
        covered() {
            return this.$.$mol_locale.text("$mpk_tss_reports_carriage_type_covered");
        }
        /**
         *  ```
         *  sub / <= status_text
         *  ```
         **/
        sub() {
            return [this.status_text()];
        }
        /**
         *  ```
         *  status_text \
         *  ```
         **/
        status_text() {
            return "";
        }
    }
    $.$mpk_tss_reports_carriage_type = $mpk_tss_reports_carriage_type;
})($ || ($ = {}));
//type.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mpk_tss_reports_carriage_type extends $.$mpk_tss_reports_carriage_type {
            status_text() {
                return this.values()[this.value()] || this.value();
            }
        }
        $$.$mpk_tss_reports_carriage_type = $mpk_tss_reports_carriage_type;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//type.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mpk_tss_parameter_length extends $.$mol_view {
        /**
         *  ```
         *  sub /
         *  	<= value
         *  	<= spacer
         *  	<= unit
         *  ```
         **/
        sub() {
            return [this.value(), this.spacer(), this.unit()];
        }
        /**
         *  ```
         *  value 0
         *  ```
         **/
        value() {
            return 0;
        }
        /**
         *  ```
         *  spacer \
         *  ```
         **/
        spacer() {
            return " ";
        }
        /**
         *  ```
         *  unit @ \m
         *  ```
         **/
        unit() {
            return this.$.$mol_locale.text("$mpk_tss_parameter_length_unit");
        }
    }
    $.$mpk_tss_parameter_length = $mpk_tss_parameter_length;
})($ || ($ = {}));
//length.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mpk/tss/reports/wheel/link/wheel.css", "[mpk_tss_reports_wheel_link] {\n\twidth: 4rem;\n\tpadding: 0.3rem;\n\tdisplay: flex;\n\tjustify-content: center;\n\tbackground-color: var(--mol_theme_line);\n\t/* box-shadow: 0 0 0 1px var(--mol_theme_line); */\n}\n\n[mpk_tss_reports_wheel_type=\"success\"] {\n\t--mol_theme_line: var(--mpk_theme_status_bg_success);\n\t--mol_theme_control: var(--mol_theme_field);\n}\n\n[mpk_tss_reports_wheel_type=\"warning\"] {\n\t--mol_theme_line: var(--mpk_theme_status_bg_warning);\n\t--mol_theme_control: var(--mol_theme_field);\n}\n");
})($ || ($ = {}));
//wheel.css.js.map
;
"use strict";
var $;
(function ($) {
    class $mpk_tss_reports_wheel_link extends $.$mol_view {
        /**
         *  ```
         *  wheel null
         *  ```
         **/
        wheel() {
            return null;
        }
        /**
         *  ```
         *  axle_id \
         *  ```
         **/
        axle_id() {
            return "";
        }
        /**
         *  ```
         *  attr *
         *  	^
         *  	mpk_tss_reports_wheel_type <= resolution
         *  ```
         **/
        attr() {
            return (Object.assign(Object.assign({}, super.attr()), { "mpk_tss_reports_wheel_type": this.resolution() }));
        }
        /**
         *  ```
         *  resolution \
         *  ```
         **/
        resolution() {
            return "";
        }
        /**
         *  ```
         *  sub / <= name
         *  ```
         **/
        sub() {
            return [this.name()];
        }
        /**
         *  ```
         *  name \
         *  ```
         **/
        name() {
            return "";
        }
    }
    $.$mpk_tss_reports_wheel_link = $mpk_tss_reports_wheel_link;
})($ || ($ = {}));
//wheel.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mpk_tss_reports_wheel_link extends $.$mpk_tss_reports_wheel_link {
            wheel() { throw new $.$mpk_tss_todo; }
            id() {
                return this.wheel().id();
            }
            resolution() {
                return this.wheel().resolution();
            }
            violation() {
                return this.wheel().violation();
            }
            name() {
                const side = this.wheel().id() === '1' ? 'L' : 'R';
                return `${this.axle_id()}.${side}`;
            }
        }
        $$.$mpk_tss_reports_wheel_link = $mpk_tss_reports_wheel_link;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//wheel.view.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mpk/tss/reports/axle/link/link.css", "[mpk_tss_reports_axle_link] {\n\t--mol_theme_control: var(--mol_theme_field);\n}\n\n[mpk_tss_reports_axle_link_wheels] {\n\tdisplay: flex;\n\tflex-direction: column-reverse;\n\theight: 5rem;\n\tjustify-content: space-between;\n}\n");
})($ || ($ = {}));
//link.css.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mpk_tss_reports_axle_link extends $.$mpk_tss_link {
        /**
         *  ```
         *  axle null
         *  ```
         **/
        axle() {
            return null;
        }
        /**
         *  ```
         *  arg * axle <= axle_id
         *  ```
         **/
        arg() {
            return ({
                "axle": this.axle_id(),
            });
        }
        /**
         *  ```
         *  axle_id \
         *  ```
         **/
        axle_id() {
            return "";
        }
        /**
         *  ```
         *  copy_params /
         *  	\login
         *  	\page
         *  	\report
         *  	\carriage
         *  	\trains
         *  	\carriages
         *  	\train_warining
         *  	\carriage_warining
         *  ```
         **/
        copy_params() {
            return ["login", "page", "report", "carriage", "trains", "carriages", "train_warining", "carriage_warining"];
        }
        /**
         *  ```
         *  sub / <= Wheels
         *  ```
         **/
        sub() {
            return [this.Wheels()];
        }
        /**
         *  ```
         *  Wheels $mol_list rows <= wheels
         *  ```
         **/
        Wheels() {
            return ((obj) => {
                obj.rows = () => this.wheels();
                return obj;
            })(new this.$.$mol_list());
        }
        /**
         *  ```
         *  wheels /
         *  ```
         **/
        wheels() {
            return [];
        }
        /**
         *  ```
         *  Wheel!id $mpk_tss_reports_wheel_link
         *  	wheel <= wheel!id
         *  	axle_id <= axle_id
         *  ```
         **/
        Wheel(id) {
            return ((obj) => {
                obj.wheel = () => this.wheel(id);
                obj.axle_id = () => this.axle_id();
                return obj;
            })(new this.$.$mpk_tss_reports_wheel_link());
        }
        /**
         *  ```
         *  wheel!id null
         *  ```
         **/
        wheel(id) {
            return null;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mpk_tss_reports_axle_link.prototype, "Wheels", null);
    __decorate([
        $.$mol_mem_key
    ], $mpk_tss_reports_axle_link.prototype, "Wheel", null);
    $.$mpk_tss_reports_axle_link = $mpk_tss_reports_axle_link;
})($ || ($ = {}));
//link.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mpk_tss_reports_axle_link extends $.$mpk_tss_reports_axle_link {
            axle() { throw new $.$mpk_tss_todo; }
            axle_id() {
                return this.axle().id() + '';
            }
            number() {
                return this.axle().axle_number();
            }
            resolution() {
                return this.axle().resolution();
            }
            violation() {
                return this.axle().violation();
            }
            wheel(id) {
                return this.axle().wheel(id);
            }
            wheels() {
                return this.axle().wheels().map(wheel => this.Wheel(wheel.id()));
            }
        }
        $$.$mpk_tss_reports_axle_link = $mpk_tss_reports_axle_link;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//link.view.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mpk/tss/reports/axle/list/list.css", "[mpk_tss_reports_axle_list] {\n\tdisplay: inline-flex;\n\tpadding: 0.5rem;\n\tflex: 1 1 30rem;\n\tbox-shadow: 0 0 0 1px var(--mol_theme_line);\n}\n\n[mpk_tss_reports_axle_list] > [mol_link_current=\"true\"] {\n\t--mol_theme_control: var(--mol_theme_field);\n}\n");
})($ || ($ = {}));
//list.css.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mpk_tss_reports_axle_list extends $.$mol_list {
        /**
         *  ```
         *  carriage null
         *  ```
         **/
        carriage() {
            return null;
        }
        /**
         *  ```
         *  axle_current null
         *  ```
         **/
        axle_current() {
            return null;
        }
        /**
         *  ```
         *  rows <= axis
         *  ```
         **/
        rows() {
            return this.axis();
        }
        /**
         *  ```
         *  axis /
         *  ```
         **/
        axis() {
            return [];
        }
        /**
         *  ```
         *  Axle_link!id $mpk_tss_reports_axle_link
         *  	axle <= axle!id
         *  	current <= current!id
         *  ```
         **/
        Axle_link(id) {
            return ((obj) => {
                obj.axle = () => this.axle(id);
                obj.current = () => this.current(id);
                return obj;
            })(new this.$.$mpk_tss_reports_axle_link());
        }
        /**
         *  ```
         *  axle!id null
         *  ```
         **/
        axle(id) {
            return null;
        }
        /**
         *  ```
         *  current!id false
         *  ```
         **/
        current(id) {
            return false;
        }
    }
    __decorate([
        $.$mol_mem_key
    ], $mpk_tss_reports_axle_list.prototype, "Axle_link", null);
    $.$mpk_tss_reports_axle_list = $mpk_tss_reports_axle_list;
})($ || ($ = {}));
//list.view.tree.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mpk_tss_reports_axle_list extends $.$mpk_tss_reports_axle_list {
            carriage() { throw new $.$mpk_tss_todo; }
            axle(id) {
                return this.carriage().axle(id);
            }
            axle_current_id(next) {
                return this.$.$mol_state_arg.value(this.state_key('axle'), next) || this.carriage().axis()[0].id();
            }
            current(id) {
                return this.axle_current_id() === id;
            }
            axle_current() {
                if (!this.axle_current_id())
                    return null;
                return this.axle(this.axle_current_id());
            }
            axis() {
                return this.carriage().axis().map((axle, index) => this.Axle_link(axle.id()));
            }
            destructor() {
                this.axle_current_id(null);
            }
        }
        __decorate([
            $.$mol_mem
        ], $mpk_tss_reports_axle_list.prototype, "axle_current_id", null);
        $$.$mpk_tss_reports_axle_list = $mpk_tss_reports_axle_list;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//list.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_vector extends Array {
        constructor(...values) { super(...values); }
        map(convert, self) {
            return super.map(convert, self);
        }
        merged(patches, combine) {
            return this.map((value, index) => combine(value, patches[index]));
        }
        limited(limits) {
            return this.merged(limits, (value, [min, max]) => (value < min) ? min : (value > max) ? max : value);
        }
        added0(diff) {
            return this.map(value => value + diff);
        }
        added1(diff) {
            return this.merged(diff, (a, b) => a + b);
        }
        multed0(mult) {
            return this.map(value => value * mult);
        }
        multed1(mults) {
            return this.merged(mults, (a, b) => a * b);
        }
        expanded1(point) {
            return this.merged(point, (range, value) => range.expanded0(value));
        }
        expanded2(point) {
            return this.merged(point, (range1, range2) => {
                let next = range1;
                const Range = range1.constructor;
                if (range1[0] > range2[0])
                    next = new Range(range2[0], next.max);
                if (range1[1] < range2[1])
                    next = new Range(next.min, range2[1]);
                return next;
            });
        }
    }
    $.$mol_vector = $mol_vector;
    class $mol_vector_1d extends $mol_vector {
        get x() { return this[0]; }
    }
    $.$mol_vector_1d = $mol_vector_1d;
    class $mol_vector_2d extends $mol_vector {
        get x() { return this[0]; }
        get y() { return this[1]; }
    }
    $.$mol_vector_2d = $mol_vector_2d;
    class $mol_vector_3d extends $mol_vector {
        get x() { return this[0]; }
        get y() { return this[1]; }
        get z() { return this[2]; }
    }
    $.$mol_vector_3d = $mol_vector_3d;
    class $mol_vector_range extends $mol_vector {
        get min() { return this[0]; }
        get max() { return this[1]; }
        get inversed() {
            return new this.constructor(this.max, this.min);
        }
        expanded0(value) {
            const Range = this.constructor;
            let range = this;
            if (value > range.max)
                range = new Range(range.min, value);
            if (value < range.min)
                range = new Range(value, range.max);
            return range;
        }
    }
    $.$mol_vector_range = $mol_vector_range;
    $.$mol_vector_range_full = new $mol_vector_range(Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY);
    class $mol_vector_matrix extends $mol_vector {
        added2(diff) {
            return this.merged(diff, (a, b) => a.map((a2, index) => a2 + b[index]));
        }
        multed2(diff) {
            return this.merged(diff, (a, b) => a.map((a2, index) => a2 * b[index]));
        }
    }
    $.$mol_vector_matrix = $mol_vector_matrix;
})($ || ($ = {}));
//vector.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_svg_group extends $.$mol_svg {
        /**
         *  ```
         *  dom_name \g
         *  ```
         **/
        dom_name() {
            return "g";
        }
    }
    $.$mol_svg_group = $mol_svg_group;
})($ || ($ = {}));
//group.view.tree.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_plot_graph extends $.$mol_svg_group {
        /**
         *  ```
         *  series_x /number
         *  ```
         **/
        series_x() {
            return [];
        }
        /**
         *  ```
         *  series_y /number
         *  ```
         **/
        series_y() {
            return [];
        }
        /**
         *  ```
         *  attr *
         *  	^
         *  	mol_plot_graph_type <= type
         *  ```
         **/
        attr() {
            return (Object.assign(Object.assign({}, super.attr()), { "mol_plot_graph_type": this.type() }));
        }
        /**
         *  ```
         *  type \solid
         *  ```
         **/
        type() {
            return "solid";
        }
        /**
         *  ```
         *  style *
         *  	^
         *  	color <= color
         *  ```
         **/
        style() {
            return (Object.assign(Object.assign({}, super.style()), { "color": this.color() }));
        }
        /**
         *  ```
         *  color \
         *  ```
         **/
        color() {
            return "";
        }
        /**
         *  ```
         *  viewport $mol_vector_2d /
         *  	<= viewport_x
         *  	<= viewport_y
         *  ```
         **/
        viewport() {
            return ((obj) => {
                return obj;
            })(new this.$.$mol_vector_2d(this.viewport_x(), this.viewport_y()));
        }
        /**
         *  ```
         *  viewport_x $mol_vector_range /
         *  	Infinity
         *  	-Infinity
         *  ```
         **/
        viewport_x() {
            return ((obj) => {
                return obj;
            })(new this.$.$mol_vector_range(Infinity, -Infinity));
        }
        /**
         *  ```
         *  viewport_y $mol_vector_range /
         *  	Infinity
         *  	-Infinity
         *  ```
         **/
        viewport_y() {
            return ((obj) => {
                return obj;
            })(new this.$.$mol_vector_range(Infinity, -Infinity));
        }
        /**
         *  ```
         *  shift /number
         *  	0
         *  	0
         *  ```
         **/
        shift() {
            return [0, 0];
        }
        /**
         *  ```
         *  scale /number
         *  	1
         *  	1
         *  ```
         **/
        scale() {
            return [1, 1];
        }
        /**
         *  ```
         *  cursor_position $mol_vector_2d /
         *  	NaN
         *  	NaN
         *  ```
         **/
        cursor_position() {
            return ((obj) => {
                return obj;
            })(new this.$.$mol_vector_2d(NaN, NaN));
        }
        /**
         *  ```
         *  dimensions_pane $mol_vector_2d /
         *  	<= dimensions_pane_x
         *  	<= dimensions_pane_y
         *  ```
         **/
        dimensions_pane() {
            return ((obj) => {
                return obj;
            })(new this.$.$mol_vector_2d(this.dimensions_pane_x(), this.dimensions_pane_y()));
        }
        /**
         *  ```
         *  dimensions_pane_x $mol_vector_range /
         *  	Infinity
         *  	-Infinity
         *  ```
         **/
        dimensions_pane_x() {
            return ((obj) => {
                return obj;
            })(new this.$.$mol_vector_range(Infinity, -Infinity));
        }
        /**
         *  ```
         *  dimensions_pane_y $mol_vector_range /
         *  	Infinity
         *  	-Infinity
         *  ```
         **/
        dimensions_pane_y() {
            return ((obj) => {
                return obj;
            })(new this.$.$mol_vector_range(Infinity, -Infinity));
        }
        /**
         *  ```
         *  dimensions $mol_vector_2d /
         *  	<= dimensions_x
         *  	<= dimensions_y
         *  ```
         **/
        dimensions() {
            return ((obj) => {
                return obj;
            })(new this.$.$mol_vector_2d(this.dimensions_x(), this.dimensions_y()));
        }
        /**
         *  ```
         *  dimensions_x $mol_vector_range /
         *  	Infinity
         *  	-Infinity
         *  ```
         **/
        dimensions_x() {
            return ((obj) => {
                return obj;
            })(new this.$.$mol_vector_range(Infinity, -Infinity));
        }
        /**
         *  ```
         *  dimensions_y $mol_vector_range /
         *  	Infinity
         *  	-Infinity
         *  ```
         **/
        dimensions_y() {
            return ((obj) => {
                return obj;
            })(new this.$.$mol_vector_range(Infinity, -Infinity));
        }
        /**
         *  ```
         *  size_real $mol_vector_2d /
         *  	0
         *  	0
         *  ```
         **/
        size_real() {
            return ((obj) => {
                return obj;
            })(new this.$.$mol_vector_2d(0, 0));
        }
        /**
         *  ```
         *  gap $mol_vector_2d /
         *  	<= gap_x
         *  	<= gap_y
         *  ```
         **/
        gap() {
            return ((obj) => {
                return obj;
            })(new this.$.$mol_vector_2d(this.gap_x(), this.gap_y()));
        }
        /**
         *  ```
         *  gap_x $mol_vector_range /
         *  	0
         *  	0
         *  ```
         **/
        gap_x() {
            return ((obj) => {
                return obj;
            })(new this.$.$mol_vector_range(0, 0));
        }
        /**
         *  ```
         *  gap_y $mol_vector_range /
         *  	0
         *  	0
         *  ```
         **/
        gap_y() {
            return ((obj) => {
                return obj;
            })(new this.$.$mol_vector_range(0, 0));
        }
        /**
         *  ```
         *  indexes /number
         *  ```
         **/
        indexes() {
            return [];
        }
        /**
         *  ```
         *  points /readonly(number)[]
         *  ```
         **/
        points() {
            return [];
        }
        /**
         *  ```
         *  front /$mol_svg
         *  ```
         **/
        front() {
            return [];
        }
        /**
         *  ```
         *  back /$mol_svg
         *  ```
         **/
        back() {
            return [];
        }
        /**
         *  ```
         *  hue NaN
         *  ```
         **/
        hue() {
            return NaN;
        }
        /**
         *  ```
         *  Sample null
         *  ```
         **/
        Sample() {
            return null;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_plot_graph.prototype, "viewport", null);
    __decorate([
        $.$mol_mem
    ], $mol_plot_graph.prototype, "viewport_x", null);
    __decorate([
        $.$mol_mem
    ], $mol_plot_graph.prototype, "viewport_y", null);
    __decorate([
        $.$mol_mem
    ], $mol_plot_graph.prototype, "cursor_position", null);
    __decorate([
        $.$mol_mem
    ], $mol_plot_graph.prototype, "dimensions_pane", null);
    __decorate([
        $.$mol_mem
    ], $mol_plot_graph.prototype, "dimensions_pane_x", null);
    __decorate([
        $.$mol_mem
    ], $mol_plot_graph.prototype, "dimensions_pane_y", null);
    __decorate([
        $.$mol_mem
    ], $mol_plot_graph.prototype, "dimensions", null);
    __decorate([
        $.$mol_mem
    ], $mol_plot_graph.prototype, "dimensions_x", null);
    __decorate([
        $.$mol_mem
    ], $mol_plot_graph.prototype, "dimensions_y", null);
    __decorate([
        $.$mol_mem
    ], $mol_plot_graph.prototype, "size_real", null);
    __decorate([
        $.$mol_mem
    ], $mol_plot_graph.prototype, "gap", null);
    __decorate([
        $.$mol_mem
    ], $mol_plot_graph.prototype, "gap_x", null);
    __decorate([
        $.$mol_mem
    ], $mol_plot_graph.prototype, "gap_y", null);
    $.$mol_plot_graph = $mol_plot_graph;
})($ || ($ = {}));
(function ($) {
    class $mol_plot_graph_sample extends $.$mol_view {
        /**
         *  ```
         *  attr *
         *  	^
         *  	mol_plot_graph_type <= type
         *  ```
         **/
        attr() {
            return (Object.assign(Object.assign({}, super.attr()), { "mol_plot_graph_type": this.type() }));
        }
        /**
         *  ```
         *  type \solid
         *  ```
         **/
        type() {
            return "solid";
        }
        /**
         *  ```
         *  style *
         *  	^
         *  	color <= color
         *  ```
         **/
        style() {
            return (Object.assign(Object.assign({}, super.style()), { "color": this.color() }));
        }
        /**
         *  ```
         *  color \black
         *  ```
         **/
        color() {
            return "black";
        }
    }
    $.$mol_plot_graph_sample = $mol_plot_graph_sample;
})($ || ($ = {}));
//graph.view.tree.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_plot_graph extends $.$mol_plot_graph {
            viewport() {
                const size = this.size_real();
                return new this.$.$mol_vector_2d(new this.$.$mol_vector_range(0, size.x), new this.$.$mol_vector_range(0, size.y));
            }
            points() {
                const [shift_x, shift_y] = this.shift();
                const [scale_x, scale_y] = this.scale();
                const series_x = this.series_x();
                const series_y = this.series_y();
                return this.indexes().map(index => {
                    const point_x = Math.round(shift_x + series_x[index] * scale_x);
                    const point_y = Math.round(shift_y + series_y[index] * scale_y);
                    return [point_x, point_y];
                });
            }
            series_x() {
                return this.series_y().map((val, index) => index);
            }
            dimensions() {
                let next = new this.$.$mol_vector_2d($.$mol_vector_range_full.inversed, $.$mol_vector_range_full.inversed);
                const series_x = this.series_x();
                const series_y = this.series_y();
                for (let i = 0; i < series_x.length; i++) {
                    next = next.expanded1([series_x[i], series_y[i]]);
                }
                return next;
            }
            color() {
                const hue = this.hue();
                return hue ? `hsl( ${hue} , 100% , 35% )` : '';
            }
            front() {
                return [this];
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_plot_graph.prototype, "series_x", null);
        __decorate([
            $.$mol_mem
        ], $mol_plot_graph.prototype, "dimensions", null);
        $$.$mol_plot_graph = $mol_plot_graph;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//graph.view.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/plot/graph/graph.view.css", "[mol_plot_graph] {\n\tstroke: currentColor;\n}\n\n[mol_plot_graph_sample] {\n\tborder-width: 0;\n\tborder-style: solid;\n}\n\n[mol_plot_graph_type=\"dashed\"] {\n\tstroke-dasharray: 4 4;\n\tborder-style: dashed;\n}\n");
})($ || ($ = {}));
//graph.view.css.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_chart_legend extends $.$mol_scroll {
        /**
         *  ```
         *  graphs /$mol_plot_graph
         *  ```
         **/
        graphs() {
            return [];
        }
        /**
         *  ```
         *  sub <= graph_legends
         *  ```
         **/
        sub() {
            return this.graph_legends();
        }
        /**
         *  ```
         *  graph_legends /$mol_view
         *  ```
         **/
        graph_legends() {
            return [];
        }
        /**
         *  ```
         *  Graph_legend!id $mol_view sub /
         *  	<= Graph_sample_box!id
         *  	<= Graph_title!id
         *  ```
         **/
        Graph_legend(id) {
            return ((obj) => {
                obj.sub = () => [this.Graph_sample_box(id), this.Graph_title(id)];
                return obj;
            })(new this.$.$mol_view());
        }
        /**
         *  ```
         *  Graph_sample_box!id $mol_view sub / <= Graph_sample!id
         *  ```
         **/
        Graph_sample_box(id) {
            return ((obj) => {
                obj.sub = () => [this.Graph_sample(id)];
                return obj;
            })(new this.$.$mol_view());
        }
        /**
         *  ```
         *  Graph_sample!id null
         *  ```
         **/
        Graph_sample(id) {
            return null;
        }
        /**
         *  ```
         *  Graph_title!id $mol_view sub / <= graph_title!id
         *  ```
         **/
        Graph_title(id) {
            return ((obj) => {
                obj.sub = () => [this.graph_title(id)];
                return obj;
            })(new this.$.$mol_view());
        }
        /**
         *  ```
         *  graph_title!id \
         *  ```
         **/
        graph_title(id) {
            return "";
        }
    }
    __decorate([
        $.$mol_mem_key
    ], $mol_chart_legend.prototype, "Graph_legend", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_chart_legend.prototype, "Graph_sample_box", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_chart_legend.prototype, "Graph_title", null);
    $.$mol_chart_legend = $mol_chart_legend;
})($ || ($ = {}));
//legend.view.tree.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_chart_legend extends $.$mol_chart_legend {
            graphs_front() {
                return this.graphs().filter(graph => graph.Sample());
            }
            graph_legends() {
                return this.graphs_front().map((graph, index) => this.Graph_legend(index));
            }
            graph_title(index) {
                return this.graphs_front()[index].title();
            }
            Graph_sample(index) {
                return this.graphs_front()[index].Sample();
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_chart_legend.prototype, "graphs_front", null);
        $$.$mol_chart_legend = $mol_chart_legend;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//legend.view.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/chart/legend/legend.view.css", "[mol_chart_legend] {\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\tflex-direction: row;\n\tpadding: .5rem;\n\tmargin: .5rem;\n\tflex: 0 1 auto;\n}\n\n[mol_chart_legend_graph_legend] {\n\tdisplay: flex;\n\tjustify-content: flex-start;\n\tflex: 1 1 8rem;\n\tpadding: .5rem;\n}\n\n[mol_chart_legend_graph_title] {\n\tmargin: 0 .25rem;\n}\n\n[mol_chart_legend_graph_sample_box] {\n\tposition: relative;\n\twidth: 1.5rem;\n\tflex: none;\n}\n");
})($ || ($ = {}));
//legend.view.css.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_plot_pane extends $.$mol_svg_root {
        /**
         *  ```
         *  aspect \none
         *  ```
         **/
        aspect() {
            return "none";
        }
        /**
         *  ```
         *  hue_base?val NaN
         *  ```
         **/
        hue_base(val, force) {
            return (val !== void 0) ? val : NaN;
        }
        /**
         *  ```
         *  hue_shift?val 111
         *  ```
         **/
        hue_shift(val, force) {
            return (val !== void 0) ? val : 111;
        }
        /**
         *  ```
         *  gap_hor 48
         *  ```
         **/
        gap_hor() {
            return 48;
        }
        /**
         *  ```
         *  gap_vert 24
         *  ```
         **/
        gap_vert() {
            return 24;
        }
        /**
         *  ```
         *  gap_left <= gap_hor
         *  ```
         **/
        gap_left() {
            return this.gap_hor();
        }
        /**
         *  ```
         *  gap_right <= gap_hor
         *  ```
         **/
        gap_right() {
            return this.gap_hor();
        }
        /**
         *  ```
         *  gap_top <= gap_vert
         *  ```
         **/
        gap_top() {
            return this.gap_vert();
        }
        /**
         *  ```
         *  gap_bottom <= gap_vert
         *  ```
         **/
        gap_bottom() {
            return this.gap_vert();
        }
        /**
         *  ```
         *  gap $mol_vector_2d /
         *  	<= gap_x
         *  	<= gap_y
         *  ```
         **/
        gap() {
            return ((obj) => {
                return obj;
            })(new this.$.$mol_vector_2d(this.gap_x(), this.gap_y()));
        }
        /**
         *  ```
         *  gap_x $mol_vector_range /
         *  	<= gap_left
         *  	<= gap_right
         *  ```
         **/
        gap_x() {
            return ((obj) => {
                return obj;
            })(new this.$.$mol_vector_range(this.gap_left(), this.gap_right()));
        }
        /**
         *  ```
         *  gap_y $mol_vector_range /
         *  	<= gap_bottom
         *  	<= gap_top
         *  ```
         **/
        gap_y() {
            return ((obj) => {
                return obj;
            })(new this.$.$mol_vector_range(this.gap_bottom(), this.gap_top()));
        }
        /**
         *  ```
         *  shift_limit $mol_vector_2d /
         *  	<= shift_limit_x
         *  	<= shift_limit_y
         *  ```
         **/
        shift_limit() {
            return ((obj) => {
                return obj;
            })(new this.$.$mol_vector_2d(this.shift_limit_x(), this.shift_limit_y()));
        }
        /**
         *  ```
         *  shift_limit_x $mol_vector_range /
         *  	0
         *  	0
         *  ```
         **/
        shift_limit_x() {
            return ((obj) => {
                return obj;
            })(new this.$.$mol_vector_range(0, 0));
        }
        /**
         *  ```
         *  shift_limit_y $mol_vector_range /
         *  	0
         *  	0
         *  ```
         **/
        shift_limit_y() {
            return ((obj) => {
                return obj;
            })(new this.$.$mol_vector_range(0, 0));
        }
        /**
         *  ```
         *  shift_default /number
         *  	0
         *  	0
         *  ```
         **/
        shift_default() {
            return [0, 0];
        }
        /**
         *  ```
         *  shift?val /number
         *  	0
         *  	0
         *  ```
         **/
        shift(val, force) {
            return (val !== void 0) ? val : [0, 0];
        }
        /**
         *  ```
         *  scale_limit $mol_vector_2d /
         *  	<= scale_limit_x
         *  	<= scale_limit_y
         *  ```
         **/
        scale_limit() {
            return ((obj) => {
                return obj;
            })(new this.$.$mol_vector_2d(this.scale_limit_x(), this.scale_limit_y()));
        }
        /**
         *  ```
         *  scale_limit_x $mol_vector_range /
         *  	0
         *  	Infinity
         *  ```
         **/
        scale_limit_x() {
            return ((obj) => {
                return obj;
            })(new this.$.$mol_vector_range(0, Infinity));
        }
        /**
         *  ```
         *  scale_limit_y $mol_vector_range /
         *  	0
         *  	Infinity
         *  ```
         **/
        scale_limit_y() {
            return ((obj) => {
                return obj;
            })(new this.$.$mol_vector_range(0, Infinity));
        }
        /**
         *  ```
         *  scale_default /number
         *  	0
         *  	0
         *  ```
         **/
        scale_default() {
            return [0, 0];
        }
        /**
         *  ```
         *  scale?val /number
         *  	1
         *  	1
         *  ```
         **/
        scale(val, force) {
            return (val !== void 0) ? val : [1, 1];
        }
        /**
         *  ```
         *  scale_x?val 0
         *  ```
         **/
        scale_x(val, force) {
            return (val !== void 0) ? val : 0;
        }
        /**
         *  ```
         *  scale_y?val 0
         *  ```
         **/
        scale_y(val, force) {
            return (val !== void 0) ? val : 0;
        }
        /**
         *  ```
         *  size $mol_vector_2d /
         *  	0
         *  	0
         *  ```
         **/
        size() {
            return ((obj) => {
                return obj;
            })(new this.$.$mol_vector_2d(0, 0));
        }
        /**
         *  ```
         *  size_real $mol_vector_2d /
         *  	1
         *  	1
         *  ```
         **/
        size_real() {
            return ((obj) => {
                return obj;
            })(new this.$.$mol_vector_2d(1, 1));
        }
        /**
         *  ```
         *  dimensions_viewport $mol_vector_2d /
         *  	<= dimensions_viewport_x
         *  	<= dimensions_viewport_y
         *  ```
         **/
        dimensions_viewport() {
            return ((obj) => {
                return obj;
            })(new this.$.$mol_vector_2d(this.dimensions_viewport_x(), this.dimensions_viewport_y()));
        }
        /**
         *  ```
         *  dimensions_viewport_x $mol_vector_range /
         *  	Infinity
         *  	-Infinity
         *  ```
         **/
        dimensions_viewport_x() {
            return ((obj) => {
                return obj;
            })(new this.$.$mol_vector_range(Infinity, -Infinity));
        }
        /**
         *  ```
         *  dimensions_viewport_y $mol_vector_range /
         *  	Infinity
         *  	-Infinity
         *  ```
         **/
        dimensions_viewport_y() {
            return ((obj) => {
                return obj;
            })(new this.$.$mol_vector_range(Infinity, -Infinity));
        }
        /**
         *  ```
         *  dimensions $mol_vector_2d /
         *  	<= dimensions_x
         *  	<= dimensions_y
         *  ```
         **/
        dimensions() {
            return ((obj) => {
                return obj;
            })(new this.$.$mol_vector_2d(this.dimensions_x(), this.dimensions_y()));
        }
        /**
         *  ```
         *  dimensions_x $mol_vector_range /
         *  	Infinity
         *  	-Infinity
         *  ```
         **/
        dimensions_x() {
            return ((obj) => {
                return obj;
            })(new this.$.$mol_vector_range(Infinity, -Infinity));
        }
        /**
         *  ```
         *  dimensions_y $mol_vector_range /
         *  	Infinity
         *  	-Infinity
         *  ```
         **/
        dimensions_y() {
            return ((obj) => {
                return obj;
            })(new this.$.$mol_vector_range(Infinity, -Infinity));
        }
        /**
         *  ```
         *  sub <= graphs_sorted
         *  ```
         **/
        sub() {
            return this.graphs_sorted();
        }
        /**
         *  ```
         *  graphs_sorted /$mol_svg
         *  ```
         **/
        graphs_sorted() {
            return [];
        }
        /**
         *  ```
         *  graphs_colored <= graphs_positioned
         *  ```
         **/
        graphs_colored() {
            return this.graphs_positioned();
        }
        /**
         *  ```
         *  graphs_positioned <= graphs
         *  ```
         **/
        graphs_positioned() {
            return this.graphs();
        }
        /**
         *  ```
         *  graphs /$mol_plot_graph
         *  ```
         **/
        graphs() {
            return [];
        }
        /**
         *  ```
         *  cursor_position?val $mol_vector_2d /
         *  	NaN
         *  	NaN
         *  ```
         **/
        cursor_position(val, force) {
            return (val !== void 0) ? val : ((obj) => {
                return obj;
            })(new this.$.$mol_vector_2d(NaN, NaN));
        }
        /**
         *  ```
         *  plugins /
         *  	^
         *  	<= Meter
         *  	<= Touch
         *  ```
         **/
        plugins() {
            return [...super.plugins(), this.Meter(), this.Touch()];
        }
        width() {
            return this.Meter().width();
        }
        height() {
            return this.Meter().height();
        }
        /**
         *  ```
         *  Meter $mol_meter
         *  	width => width
         *  	height => height
         *  ```
         **/
        Meter() {
            return ((obj) => {
                return obj;
            })(new this.$.$mol_meter());
        }
        /**
         *  ```
         *  Touch $mol_touch
         *  	zoom?val <=> scale_x?val
         *  	pan?val <=> shift?val
         *  	pos?val <=> cursor_position?val
         *  ```
         **/
        Touch() {
            return ((obj) => {
                obj.zoom = (val) => this.scale_x(val);
                obj.pan = (val) => this.shift(val);
                obj.pos = (val) => this.cursor_position(val);
                return obj;
            })(new this.$.$mol_touch());
        }
        /**
         *  ```
         *  event *
         *  	^
         *  	dblclick?event <=> reset?event
         *  ```
         **/
        event() {
            return (Object.assign(Object.assign({}, super.event()), { "dblclick": (event) => this.reset(event) }));
        }
        /**
         *  ```
         *  reset?event null
         *  ```
         **/
        reset(event, force) {
            return (event !== void 0) ? event : null;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_plot_pane.prototype, "hue_base", null);
    __decorate([
        $.$mol_mem
    ], $mol_plot_pane.prototype, "hue_shift", null);
    __decorate([
        $.$mol_mem
    ], $mol_plot_pane.prototype, "gap", null);
    __decorate([
        $.$mol_mem
    ], $mol_plot_pane.prototype, "gap_x", null);
    __decorate([
        $.$mol_mem
    ], $mol_plot_pane.prototype, "gap_y", null);
    __decorate([
        $.$mol_mem
    ], $mol_plot_pane.prototype, "shift_limit", null);
    __decorate([
        $.$mol_mem
    ], $mol_plot_pane.prototype, "shift_limit_x", null);
    __decorate([
        $.$mol_mem
    ], $mol_plot_pane.prototype, "shift_limit_y", null);
    __decorate([
        $.$mol_mem
    ], $mol_plot_pane.prototype, "shift", null);
    __decorate([
        $.$mol_mem
    ], $mol_plot_pane.prototype, "scale_limit", null);
    __decorate([
        $.$mol_mem
    ], $mol_plot_pane.prototype, "scale_limit_x", null);
    __decorate([
        $.$mol_mem
    ], $mol_plot_pane.prototype, "scale_limit_y", null);
    __decorate([
        $.$mol_mem
    ], $mol_plot_pane.prototype, "scale", null);
    __decorate([
        $.$mol_mem
    ], $mol_plot_pane.prototype, "scale_x", null);
    __decorate([
        $.$mol_mem
    ], $mol_plot_pane.prototype, "scale_y", null);
    __decorate([
        $.$mol_mem
    ], $mol_plot_pane.prototype, "size", null);
    __decorate([
        $.$mol_mem
    ], $mol_plot_pane.prototype, "size_real", null);
    __decorate([
        $.$mol_mem
    ], $mol_plot_pane.prototype, "dimensions_viewport", null);
    __decorate([
        $.$mol_mem
    ], $mol_plot_pane.prototype, "dimensions_viewport_x", null);
    __decorate([
        $.$mol_mem
    ], $mol_plot_pane.prototype, "dimensions_viewport_y", null);
    __decorate([
        $.$mol_mem
    ], $mol_plot_pane.prototype, "dimensions", null);
    __decorate([
        $.$mol_mem
    ], $mol_plot_pane.prototype, "dimensions_x", null);
    __decorate([
        $.$mol_mem
    ], $mol_plot_pane.prototype, "dimensions_y", null);
    __decorate([
        $.$mol_mem
    ], $mol_plot_pane.prototype, "cursor_position", null);
    __decorate([
        $.$mol_mem
    ], $mol_plot_pane.prototype, "Meter", null);
    __decorate([
        $.$mol_mem
    ], $mol_plot_pane.prototype, "Touch", null);
    __decorate([
        $.$mol_mem
    ], $mol_plot_pane.prototype, "reset", null);
    $.$mol_plot_pane = $mol_plot_pane;
})($ || ($ = {}));
//pane.view.tree.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_plot_pane extends $.$mol_plot_pane {
            constructor() {
                super(...arguments);
                this.graph_touched = false;
            }
            dimensions() {
                const graphs = this.graphs();
                let next = new this.$.$mol_vector_2d($.$mol_vector_range_full.inversed, $.$mol_vector_range_full.inversed);
                for (let graph of graphs) {
                    next = next.expanded2(graph.dimensions());
                }
                return next;
            }
            size() {
                const dims = this.dimensions();
                return new this.$.$mol_vector_2d((dims.x.max - dims.x.min) || 1, (dims.y.max - dims.y.min) || 1);
            }
            graph_hue(index) {
                return (360 + (this.hue_base() + this.hue_shift() * index) % 360) % 360;
            }
            graphs_colored() {
                const graphs = this.graphs_positioned();
                for (let index = 0; index < graphs.length; index++) {
                    graphs[index].hue = () => this.graph_hue(index);
                }
                return graphs;
            }
            size_real() {
                return new this.$.$mol_vector_2d(this.width(), this.height());
            }
            view_box() {
                const size = this.size_real();
                return `0 0 ${size.x} ${size.y}`;
            }
            scale_limit() {
                const { x: { max: right }, y: { max: top } } = super.scale_limit();
                const gap = this.gap();
                const size = this.size();
                const real = this.size_real();
                const left = +(real.x - gap.x.min - gap.x.max) / size.x;
                const bottom = -(real.y - gap.y.max - gap.y.min) / size.y;
                return new this.$.$mol_vector_2d(new this.$.$mol_vector_range(left, right), new this.$.$mol_vector_range(bottom, top));
            }
            scale_default() {
                const limits = this.scale_limit();
                return [limits.x.min, limits.y.min];
            }
            scale(next, force) {
                if (next === undefined) {
                    if (!this.graph_touched)
                        return this.scale_default();
                    next = $.$mol_atom2_value(() => this.scale()) || this.scale_default();
                }
                this.graph_touched = true;
                return new this.$.$mol_vector_2d(...next).limited(this.scale_limit());
            }
            scale_x(next) {
                return this.scale(next && [next, this.scale()[1]])[0];
            }
            scale_y(next) {
                return this.scale(next && [this.scale()[0], next])[1];
            }
            shift_limit() {
                const dims = this.dimensions();
                const [scale_x, scale_y] = this.scale();
                const size = this.size_real();
                const gap = this.gap();
                const left = gap.x.min - dims.x.min * scale_x;
                const right = size.x - gap.x.max - dims.x.max * scale_x;
                const top = gap.y.max - dims.y.max * scale_y;
                const bottom = size.y - gap.y.min - dims.y.min * scale_y;
                return new this.$.$mol_vector_2d(new this.$.$mol_vector_range(right, left), new this.$.$mol_vector_range(bottom, top));
            }
            shift_default() {
                const limits = this.shift_limit();
                return [limits.x.min, limits.y.min];
            }
            shift(next, force) {
                if (next === undefined) {
                    if (!this.graph_touched)
                        return this.shift_default();
                    next = $.$mol_atom2_value(() => this.shift()) || this.shift_default();
                }
                this.graph_touched = true;
                return new this.$.$mol_vector_2d(...next).limited(this.shift_limit());
            }
            reset(event) {
                this.graph_touched = false;
                this.scale(this.scale_default(), $.$mol_mem_force_cache);
                this.shift(this.shift_default(), $.$mol_mem_force_cache);
            }
            graphs_positioned() {
                const graphs = this.graphs();
                for (let graph of graphs) {
                    graph.shift = () => this.shift();
                    graph.scale = () => this.scale();
                    graph.dimensions_pane = () => this.dimensions();
                    graph.viewport = () => this.viewport();
                    graph.size_real = () => this.size_real();
                    graph.cursor_position = () => this.cursor_position();
                    graph.gap = () => this.gap();
                }
                return graphs;
            }
            viewport() {
                const size = this.size_real();
                return new this.$.$mol_vector_2d(new this.$.$mol_vector_range(0, size.x), new this.$.$mol_vector_range(0, size.y));
            }
            graphs_sorted() {
                const graphs = this.graphs_colored();
                const sorted = [];
                for (let graph of graphs)
                    sorted.push(...graph.back());
                for (let graph of graphs)
                    sorted.push(...graph.front());
                return sorted;
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_plot_pane.prototype, "dimensions", null);
        __decorate([
            $.$mol_mem
        ], $mol_plot_pane.prototype, "size", null);
        __decorate([
            $.$mol_mem
        ], $mol_plot_pane.prototype, "graphs_colored", null);
        __decorate([
            $.$mol_mem
        ], $mol_plot_pane.prototype, "scale_limit", null);
        __decorate([
            $.$mol_mem
        ], $mol_plot_pane.prototype, "scale", null);
        __decorate([
            $.$mol_mem
        ], $mol_plot_pane.prototype, "shift_limit", null);
        __decorate([
            $.$mol_mem
        ], $mol_plot_pane.prototype, "shift_default", null);
        __decorate([
            $.$mol_mem
        ], $mol_plot_pane.prototype, "shift", null);
        __decorate([
            $.$mol_mem
        ], $mol_plot_pane.prototype, "graphs_positioned", null);
        __decorate([
            $.$mol_mem
        ], $mol_plot_pane.prototype, "viewport", null);
        __decorate([
            $.$mol_mem
        ], $mol_plot_pane.prototype, "graphs_sorted", null);
        $$.$mol_plot_pane = $mol_plot_pane;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//pane.view.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/plot/pane/pane.view.css", "[mol_plot_pane] {\n\tflex: 1 1 auto;\n\talign-self: stretch;\n\tstroke-width: 2px;\n}\n");
})($ || ($ = {}));
//pane.view.css.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/chart/chart.view.css", "[mol_chart] {\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-self: stretch;\n\tflex: 1 1 auto;\n\tpadding: .5rem;\n}\n\n[mol_chart_plot] {\n\tflex: 1 0 50%;\n\tmargin: .5rem;\n}\n");
})($ || ($ = {}));
//chart.view.css.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_chart extends $.$mol_view {
        /**
         *  ```
         *  gap_hor 48
         *  ```
         **/
        gap_hor() {
            return 48;
        }
        /**
         *  ```
         *  gap_vert 24
         *  ```
         **/
        gap_vert() {
            return 24;
        }
        /**
         *  ```
         *  gap_left <= gap_hor
         *  ```
         **/
        gap_left() {
            return this.gap_hor();
        }
        /**
         *  ```
         *  gap_right <= gap_hor
         *  ```
         **/
        gap_right() {
            return this.gap_hor();
        }
        /**
         *  ```
         *  gap_bottom <= gap_vert
         *  ```
         **/
        gap_bottom() {
            return this.gap_vert();
        }
        /**
         *  ```
         *  gap_top <= gap_vert
         *  ```
         **/
        gap_top() {
            return this.gap_vert();
        }
        /**
         *  ```
         *  graphs /$mol_plot_graph
         *  ```
         **/
        graphs() {
            return [];
        }
        /**
         *  ```
         *  sub /
         *  	<= Legend
         *  	<= Plot
         *  ```
         **/
        sub() {
            return [this.Legend(), this.Plot()];
        }
        /**
         *  ```
         *  Legend $mol_chart_legend graphs <= graphs_colored
         *  ```
         **/
        Legend() {
            return ((obj) => {
                obj.graphs = () => this.graphs_colored();
                return obj;
            })(new this.$.$mol_chart_legend());
        }
        graphs_colored() {
            return this.Plot().graphs_colored();
        }
        /**
         *  ```
         *  Plot $mol_plot_pane
         *  	gap_left <= gap_left
         *  	gap_right <= gap_right
         *  	gap_bottom <= gap_bottom
         *  	gap_top <= gap_top
         *  	graphs <= graphs
         *  	graphs_colored => graphs_colored
         *  	hue_base?val <= hue_base
         *  	hue_shift?val <= hue_shift
         *  ```
         **/
        Plot() {
            return ((obj) => {
                obj.gap_left = () => this.gap_left();
                obj.gap_right = () => this.gap_right();
                obj.gap_bottom = () => this.gap_bottom();
                obj.gap_top = () => this.gap_top();
                obj.graphs = () => this.graphs();
                obj.hue_base = (val) => this.hue_base();
                obj.hue_shift = (val) => this.hue_shift();
                return obj;
            })(new this.$.$mol_plot_pane());
        }
        /**
         *  ```
         *  hue_base 140
         *  ```
         **/
        hue_base() {
            return 140;
        }
        /**
         *  ```
         *  hue_shift 111
         *  ```
         **/
        hue_shift() {
            return 111;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_chart.prototype, "Legend", null);
    __decorate([
        $.$mol_mem
    ], $mol_chart.prototype, "Plot", null);
    $.$mol_chart = $mol_chart;
})($ || ($ = {}));
//chart.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_coord_pack(a, b) {
        return a << 16 | b & 0xFFFF;
    }
    $.$mol_coord_pack = $mol_coord_pack;
    function $mol_coord_high(key) {
        return key >> 16;
    }
    $.$mol_coord_high = $mol_coord_high;
    function $mol_coord_low(key) {
        return (key & 0xFFFF) << 16 >> 16;
    }
    $.$mol_coord_low = $mol_coord_low;
})($ || ($ = {}));
//coord.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_plot_dot extends $.$mol_plot_graph {
        /**
         *  ```
         *  points_max Infinity
         *  ```
         **/
        points_max() {
            return Infinity;
        }
        /**
         *  ```
         *  style *
         *  	^
         *  	stroke-width <= diameter
         *  ```
         **/
        style() {
            return (Object.assign(Object.assign({}, super.style()), { "stroke-width": this.diameter() }));
        }
        /**
         *  ```
         *  diameter 8
         *  ```
         **/
        diameter() {
            return 8;
        }
        /**
         *  ```
         *  sub / <= Curve
         *  ```
         **/
        sub() {
            return [this.Curve()];
        }
        /**
         *  ```
         *  Curve $mol_svg_path geometry <= curve
         *  ```
         **/
        Curve() {
            return ((obj) => {
                obj.geometry = () => this.curve();
                return obj;
            })(new this.$.$mol_svg_path());
        }
        /**
         *  ```
         *  curve \
         *  ```
         **/
        curve() {
            return "";
        }
        /**
         *  ```
         *  Sample $mol_plot_graph_sample color <= color
         *  ```
         **/
        Sample() {
            return ((obj) => {
                obj.color = () => this.color();
                return obj;
            })(new this.$.$mol_plot_graph_sample());
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_plot_dot.prototype, "Curve", null);
    __decorate([
        $.$mol_mem
    ], $mol_plot_dot.prototype, "Sample", null);
    $.$mol_plot_dot = $mol_plot_dot;
})($ || ($ = {}));
//dot.view.tree.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_plot_dot extends $.$mol_plot_dot {
            filled() {
                return new Set();
            }
            indexes() {
                const radius = this.diameter() / 2;
                // calculate by cpu
                const points_max = this.points_max();
                const viewport = this.viewport();
                const viewport_left = viewport.x.min - radius;
                const viewport_right = viewport.x.max + radius;
                const viewport_bottom = viewport.y.min - radius;
                const viewport_top = viewport.y.max + radius;
                const [shift_x, shift_y] = this.shift();
                const [scale_x, scale_y] = this.scale();
                let last_x = Number.NEGATIVE_INFINITY;
                let last_y = Number.NEGATIVE_INFINITY;
                let spacing = 0;
                let filled = this.filled();
                let indexes;
                const series_x = this.series_x();
                const series_y = this.series_y();
                do {
                    indexes = [];
                    for (let i = 0; i < series_x.length; i++) {
                        const point_x = series_x[i];
                        const point_y = series_y[i];
                        const scaled_x = Math.round(shift_x + point_x * scale_x);
                        const scaled_y = Math.round(shift_y + point_y * scale_y);
                        if (Math.abs(scaled_x - last_x) < radius
                            && Math.abs(scaled_y - last_y) < radius)
                            continue;
                        last_x = scaled_x;
                        last_y = scaled_y;
                        if (scaled_x < viewport_left)
                            continue;
                        if (scaled_y < viewport_bottom)
                            continue;
                        if (scaled_x > viewport_right)
                            continue;
                        if (scaled_y > viewport_top)
                            continue;
                        if (spacing !== 0) {
                            const key = $.$mol_coord_pack(Math.round(point_x * scale_x / spacing) * spacing, Math.round(point_y * scale_y / spacing) * spacing);
                            if (filled.has(key))
                                continue;
                            filled.add(key);
                        }
                        indexes.push(i);
                        if (indexes.length > points_max)
                            break;
                    }
                    spacing += Math.ceil(radius);
                    filled.clear();
                } while (indexes.length > points_max);
                return indexes;
            }
            curve() {
                const points = this.points();
                if (points.length === 0)
                    return '';
                return points.map(point => `M ${point.join(' ')} v 0`).join(' ');
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_plot_dot.prototype, "filled", null);
        __decorate([
            $.$mol_mem
        ], $mol_plot_dot.prototype, "indexes", null);
        $$.$mol_plot_dot = $mol_plot_dot;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//dot.view.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/plot/dot/dot.view.css", "[mol_plot_dot] {\n\tcolor: var(--mol_skin_base);\n\tstroke-linecap: round;\n\tfill: none;\n}\n\n[mol_plot_dot_sample] {\n\twidth: .5rem;\n\theight: .5rem;\n\tborder-radius: 1rem;\n\tbackground: currentColor;\n\tposition: absolute;\n\ttop: .75em;\n\tleft: 50%;\n\ttransform: translate(-50%, -50%);\n}\n");
})($ || ($ = {}));
//dot.view.css.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_math_round_expand(val, gap = 1) {
        if (val === 0)
            return 0;
        const val_abs = Math.abs(val);
        const val_sign = val ? Math.round(val / val_abs) : 0;
        const digits = Math.floor(Math.log(val_abs) / Math.log(10));
        const precission = Math.pow(10, digits - gap);
        const val_expanded = precission * Math.ceil(val_abs / precission);
        return val_sign * val_expanded;
    }
    $.$mol_math_round_expand = $mol_math_round_expand;
})($ || ($ = {}));
//expand.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_svg_rect extends $.$mol_svg {
        /**
         *  ```
         *  dom_name \rect
         *  ```
         **/
        dom_name() {
            return "rect";
        }
        /**
         *  ```
         *  pos /
         *  ```
         **/
        pos() {
            return [];
        }
        /**
         *  ```
         *  attr *
         *  	^
         *  	width <= width
         *  	height <= height
         *  	x <= pos_x
         *  	y <= pos_y
         *  ```
         **/
        attr() {
            return (Object.assign(Object.assign({}, super.attr()), { "width": this.width(), "height": this.height(), "x": this.pos_x(), "y": this.pos_y() }));
        }
        /**
         *  ```
         *  width \0
         *  ```
         **/
        width() {
            return "0";
        }
        /**
         *  ```
         *  height \0
         *  ```
         **/
        height() {
            return "0";
        }
        /**
         *  ```
         *  pos_x \
         *  ```
         **/
        pos_x() {
            return "";
        }
        /**
         *  ```
         *  pos_y \
         *  ```
         **/
        pos_y() {
            return "";
        }
    }
    $.$mol_svg_rect = $mol_svg_rect;
})($ || ($ = {}));
//rect.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_svg_rect extends $.$mol_svg_rect {
            pos_x() {
                return this.pos()[0];
            }
            pos_y() {
                return this.pos()[1];
            }
        }
        $$.$mol_svg_rect = $mol_svg_rect;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//rect.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_svg_text extends $.$mol_svg {
        /**
         *  ```
         *  dom_name \text
         *  ```
         **/
        dom_name() {
            return "text";
        }
        /**
         *  ```
         *  pos /
         *  ```
         **/
        pos() {
            return [];
        }
        /**
         *  ```
         *  attr *
         *  	^
         *  	x <= pos_x
         *  	y <= pos_y
         *  	text-anchor <= align
         *  ```
         **/
        attr() {
            return (Object.assign(Object.assign({}, super.attr()), { "x": this.pos_x(), "y": this.pos_y(), "text-anchor": this.align() }));
        }
        /**
         *  ```
         *  pos_x \
         *  ```
         **/
        pos_x() {
            return "";
        }
        /**
         *  ```
         *  pos_y \
         *  ```
         **/
        pos_y() {
            return "";
        }
        /**
         *  ```
         *  align \middle
         *  ```
         **/
        align() {
            return "middle";
        }
        /**
         *  ```
         *  sub / <= text
         *  ```
         **/
        sub() {
            return [this.text()];
        }
        /**
         *  ```
         *  text \
         *  ```
         **/
        text() {
            return "";
        }
    }
    $.$mol_svg_text = $mol_svg_text;
})($ || ($ = {}));
//text.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_svg_text extends $.$mol_svg_text {
            pos_x() {
                return this.pos()[0];
            }
            pos_y() {
                return this.pos()[1];
            }
        }
        $$.$mol_svg_text = $mol_svg_text;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//text.view.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/svg/text/text.view.css", "[mol_svg_text] {\n\tfill: currentColor;\n\tstroke: none;\n}\n");
})($ || ($ = {}));
//text.view.css.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_svg_text_box extends $.$mol_svg_group {
        /**
         *  ```
         *  font_size 16
         *  ```
         **/
        font_size() {
            return 16;
        }
        /**
         *  ```
         *  sub /
         *  	<= Back
         *  	<= Text
         *  ```
         **/
        sub() {
            return [this.Back(), this.Text()];
        }
        /**
         *  ```
         *  Back $mol_svg_rect
         *  	width <= box_width
         *  	height <= box_height
         *  	pos /
         *  		<= box_pos_x
         *  		<= box_pos_y
         *  ```
         **/
        Back() {
            return ((obj) => {
                obj.width = () => this.box_width();
                obj.height = () => this.box_height();
                obj.pos = () => [this.box_pos_x(), this.box_pos_y()];
                return obj;
            })(new this.$.$mol_svg_rect());
        }
        /**
         *  ```
         *  box_width \0.5rem
         *  ```
         **/
        box_width() {
            return "0.5rem";
        }
        /**
         *  ```
         *  box_height \1rem
         *  ```
         **/
        box_height() {
            return "1rem";
        }
        /**
         *  ```
         *  box_pos_x <= pos_x
         *  ```
         **/
        box_pos_x() {
            return this.pos_x();
        }
        /**
         *  ```
         *  box_pos_y \0
         *  ```
         **/
        box_pos_y() {
            return "0";
        }
        /**
         *  ```
         *  Text $mol_svg_text
         *  	pos /
         *  		<= pos_x
         *  		<= pos_y
         *  	align <= align
         *  	sub / <= text
         *  ```
         **/
        Text() {
            return ((obj) => {
                obj.pos = () => [this.pos_x(), this.pos_y()];
                obj.align = () => this.align();
                obj.sub = () => [this.text()];
                return obj;
            })(new this.$.$mol_svg_text());
        }
        /**
         *  ```
         *  pos_x \0
         *  ```
         **/
        pos_x() {
            return "0";
        }
        /**
         *  ```
         *  pos_y \100%
         *  ```
         **/
        pos_y() {
            return "100%";
        }
        /**
         *  ```
         *  align \start
         *  ```
         **/
        align() {
            return "start";
        }
        /**
         *  ```
         *  text \
         *  ```
         **/
        text() {
            return "";
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_svg_text_box.prototype, "Back", null);
    __decorate([
        $.$mol_mem
    ], $mol_svg_text_box.prototype, "Text", null);
    $.$mol_svg_text_box = $mol_svg_text_box;
})($ || ($ = {}));
//box.view.tree.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_svg_text_box extends $.$mol_svg_text_box {
            box_width() {
                return this.text_width(this.text());
            }
            box_pos_x() {
                const align = this.align();
                if (align === 'end')
                    return `calc(${this.pos_x()} - ${this.box_width()})`;
                if (align === 'middle')
                    return `calc(${this.pos_x()} - ${Math.round(this.box_width() / 2)})`;
                return this.pos_x();
            }
            box_pos_y() {
                return `calc(${this.pos_y()} - ${this.font_size() - 2})`;
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_svg_text_box.prototype, "box_width", null);
        $$.$mol_svg_text_box = $mol_svg_text_box;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//box.view.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/svg/text/box/box.view.css", "[mol_svg_text_box_back] {\n\tstroke: none;\n\tfill: var(--mol_theme_back);\n}\n");
})($ || ($ = {}));
//box.view.css.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_plot_ruler extends $.$mol_plot_graph {
        /**
         *  ```
         *  step 0
         *  ```
         **/
        step() {
            return 0;
        }
        /**
         *  ```
         *  scale_axis 1
         *  ```
         **/
        scale_axis() {
            return 1;
        }
        /**
         *  ```
         *  scale_step 1
         *  ```
         **/
        scale_step() {
            return 1;
        }
        /**
         *  ```
         *  shift_axis 1
         *  ```
         **/
        shift_axis() {
            return 1;
        }
        /**
         *  ```
         *  dimensions_axis $mol_vector_range /
         *  	Infinity
         *  	-Infinity
         *  ```
         **/
        dimensions_axis() {
            return ((obj) => {
                return obj;
            })(new this.$.$mol_vector_range(Infinity, -Infinity));
        }
        /**
         *  ```
         *  viewport_axis $mol_vector_range /
         *  	Infinity
         *  	-Infinity
         *  ```
         **/
        viewport_axis() {
            return ((obj) => {
                return obj;
            })(new this.$.$mol_vector_range(Infinity, -Infinity));
        }
        /**
         *  ```
         *  axis_points /number
         *  ```
         **/
        axis_points() {
            return [];
        }
        /**
         *  ```
         *  normalize?val 0
         *  ```
         **/
        normalize(val, force) {
            return (val !== void 0) ? val : 0;
        }
        /**
         *  ```
         *  precision 1
         *  ```
         **/
        precision() {
            return 1;
        }
        /**
         *  ```
         *  sub /
         *  	<= Background
         *  	<= Curve
         *  	<= labels_formatted
         *  	<= Title
         *  ```
         **/
        sub() {
            return [this.Background(), this.Curve(), this.labels_formatted(), this.Title()];
        }
        /**
         *  ```
         *  Background $mol_svg_rect
         *  	pos_x <= background_x
         *  	pos_y <= background_y
         *  	width <= background_width
         *  	height <= background_height
         *  ```
         **/
        Background() {
            return ((obj) => {
                obj.pos_x = () => this.background_x();
                obj.pos_y = () => this.background_y();
                obj.width = () => this.background_width();
                obj.height = () => this.background_height();
                return obj;
            })(new this.$.$mol_svg_rect());
        }
        /**
         *  ```
         *  background_x \0
         *  ```
         **/
        background_x() {
            return "0";
        }
        /**
         *  ```
         *  background_y \0
         *  ```
         **/
        background_y() {
            return "0";
        }
        /**
         *  ```
         *  background_width \100%
         *  ```
         **/
        background_width() {
            return "100%";
        }
        /**
         *  ```
         *  background_height \14
         *  ```
         **/
        background_height() {
            return "14";
        }
        /**
         *  ```
         *  Curve $mol_svg_path geometry <= curve
         *  ```
         **/
        Curve() {
            return ((obj) => {
                obj.geometry = () => this.curve();
                return obj;
            })(new this.$.$mol_svg_path());
        }
        /**
         *  ```
         *  curve \
         *  ```
         **/
        curve() {
            return "";
        }
        /**
         *  ```
         *  labels_formatted /
         *  ```
         **/
        labels_formatted() {
            return [];
        }
        /**
         *  ```
         *  Title $mol_svg_text_box
         *  	pos_x <= title_pos_x
         *  	pos_y <= title_pos_y
         *  	align <= title_align
         *  	text <= title
         *  ```
         **/
        Title() {
            return ((obj) => {
                obj.pos_x = () => this.title_pos_x();
                obj.pos_y = () => this.title_pos_y();
                obj.align = () => this.title_align();
                obj.text = () => this.title();
                return obj;
            })(new this.$.$mol_svg_text_box());
        }
        /**
         *  ```
         *  title_pos_x \0
         *  ```
         **/
        title_pos_x() {
            return "0";
        }
        /**
         *  ```
         *  title_pos_y \100%
         *  ```
         **/
        title_pos_y() {
            return "100%";
        }
        /**
         *  ```
         *  title_align \start
         *  ```
         **/
        title_align() {
            return "start";
        }
        /**
         *  ```
         *  Label!index $mol_svg_text
         *  	pos <= label_pos!index
         *  	text <= label_text!index
         *  	align <= label_align
         *  ```
         **/
        Label(index) {
            return ((obj) => {
                obj.pos = () => this.label_pos(index);
                obj.text = () => this.label_text(index);
                obj.align = () => this.label_align();
                return obj;
            })(new this.$.$mol_svg_text());
        }
        /**
         *  ```
         *  label_pos!index /
         *  	<= label_pos_x!index
         *  	<= label_pos_y!index
         *  ```
         **/
        label_pos(index) {
            return [this.label_pos_x(index), this.label_pos_y(index)];
        }
        /**
         *  ```
         *  label_pos_x!index \
         *  ```
         **/
        label_pos_x(index) {
            return "";
        }
        /**
         *  ```
         *  label_pos_y!index \
         *  ```
         **/
        label_pos_y(index) {
            return "";
        }
        /**
         *  ```
         *  label_text!index \
         *  ```
         **/
        label_text(index) {
            return "";
        }
        /**
         *  ```
         *  label_align \
         *  ```
         **/
        label_align() {
            return "";
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_plot_ruler.prototype, "dimensions_axis", null);
    __decorate([
        $.$mol_mem
    ], $mol_plot_ruler.prototype, "viewport_axis", null);
    __decorate([
        $.$mol_mem
    ], $mol_plot_ruler.prototype, "normalize", null);
    __decorate([
        $.$mol_mem
    ], $mol_plot_ruler.prototype, "Background", null);
    __decorate([
        $.$mol_mem
    ], $mol_plot_ruler.prototype, "Curve", null);
    __decorate([
        $.$mol_mem
    ], $mol_plot_ruler.prototype, "Title", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_plot_ruler.prototype, "Label", null);
    $.$mol_plot_ruler = $mol_plot_ruler;
})($ || ($ = {}));
//ruler.view.tree.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_plot_ruler extends $.$mol_plot_ruler {
            labels_formatted() {
                return this.axis_points().map((point, index) => this.Label(index));
            }
            step() {
                const scale = this.scale_step();
                const dims = this.dimensions_axis();
                const range = dims.max - dims.min;
                const min_width = (Math.abs(Math.log10(range)) + 2) * 15;
                const size = $.$mol_math_round_expand(range, -1);
                const count = Math.max(1, Math.pow(10, Math.floor(Math.log(size * scale / min_width) / Math.log(10))));
                let step = size / count;
                const step_max = min_width * 2 / scale;
                if (step > step_max)
                    step /= 2;
                if (step > step_max)
                    step /= 2;
                return Math.max(step, Math.abs(dims.min) / 1e10, Math.abs(dims.max) / 1e10);
            }
            snap_to_grid(coord) {
                const viewport = this.viewport_axis();
                const scale = this.scale_axis();
                const shift = this.shift_axis();
                const step = this.step();
                const val = Math.round(coord / step) * step;
                if (scale == 0)
                    return val;
                const step_scaled = step * scale;
                const scaled = val * scale + shift;
                let count = 0;
                if (scaled < viewport.min)
                    count = (scaled - viewport.min) / step_scaled;
                if (scaled > viewport.max)
                    count = (scaled - viewport.max) / step_scaled;
                return val - Math.floor(count) * step;
            }
            axis_points() {
                const dims = this.dimensions_axis();
                const start = this.snap_to_grid(dims.min);
                const end = this.snap_to_grid(dims.max);
                const step = this.step();
                const next = [];
                for (let val = start; val <= end; val += step) {
                    next.push(val);
                }
                return next;
            }
            precision() {
                const step = this.step();
                return Math.max(0, Math.min(15, (step - Math.floor(step)).toString().length - 2));
            }
            label_text(index) {
                const point = this.axis_points()[index];
                return point.toFixed(this.precision());
            }
            font_size() {
                return this.Background().font_size();
            }
            back() {
                return [this.Curve()];
            }
            front() {
                return [this.Background(), ...this.labels_formatted(), this.Title()];
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_plot_ruler.prototype, "step", null);
        __decorate([
            $.$mol_mem
        ], $mol_plot_ruler.prototype, "axis_points", null);
        __decorate([
            $.$mol_mem
        ], $mol_plot_ruler.prototype, "precision", null);
        $$.$mol_plot_ruler = $mol_plot_ruler;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//ruler.view.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/plot/ruler/ruler.view.css", "[mol_plot_ruler_curve] {\n\tcolor: var(--mol_theme_line);\n\tstroke-width: 1px;\n\tstroke: currentColor;\n}\n\n[mol_plot_ruler_label] {\n\tcolor: var(--mol_theme_text);\n}\n\n[mol_plot_ruler_title] {\n\tcolor: var(--mol_theme_shade);\n\tbackground-color: var(--mol_theme_back);\n}\n\n[mol_plot_ruler_background] {\n\tstroke: none;\n\tfill: var(--mol_theme_back);\n\topacity: 0.8;\n}\n");
})($ || ($ = {}));
//ruler.view.css.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_plot_ruler_vert extends $.$mol_plot_ruler {
        /**
         *  ```
         *  title_align \end
         *  ```
         **/
        title_align() {
            return "end";
        }
        /**
         *  ```
         *  label_align \end
         *  ```
         **/
        label_align() {
            return "end";
        }
        /**
         *  ```
         *  title_pos_y \14
         *  ```
         **/
        title_pos_y() {
            return "14";
        }
        /**
         *  ```
         *  label_pos_x!v <= title_pos_x
         *  ```
         **/
        label_pos_x(v) {
            return this.title_pos_x();
        }
        /**
         *  ```
         *  background_height \100%
         *  ```
         **/
        background_height() {
            return "100%";
        }
        /**
         *  ```
         *  background_width <= title_pos_x
         *  ```
         **/
        background_width() {
            return this.title_pos_x();
        }
    }
    $.$mol_plot_ruler_vert = $mol_plot_ruler_vert;
})($ || ($ = {}));
//vert.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_plot_ruler_vert extends $.$mol_plot_ruler_vert {
            dimensions_axis() {
                return this.dimensions_pane().y;
            }
            viewport_axis() {
                return new this.$.$mol_vector_range(0, this.size_real().y);
            }
            scale_axis() {
                return this.scale()[1];
            }
            scale_step() {
                return -this.scale()[1];
            }
            shift_axis() {
                return this.shift()[1];
            }
            curve() {
                const [, shift] = this.shift();
                const [, scale] = this.scale();
                return this.axis_points().map(point => {
                    const scaled = point * scale + shift;
                    return `M 0 ${scaled.toFixed(3)} H 2000`;
                }).join(' ');
            }
            title_pos_x() {
                return String(this.gap().x.min);
            }
            label_pos_y(index) {
                return (this.axis_points()[index] * this.scale()[1] + this.shift()[1]).toFixed(3);
            }
        }
        $$.$mol_plot_ruler_vert = $mol_plot_ruler_vert;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//vert.view.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/plot/ruler/vert/vert.view.css", "[mol_plot_ruler_vert_label] {\n\ttransform: translateY( 4px );\n}\n");
})($ || ($ = {}));
//vert.view.css.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_plot_ruler_hor extends $.$mol_plot_ruler {
        /**
         *  ```
         *  title_align \start
         *  ```
         **/
        title_align() {
            return "start";
        }
        /**
         *  ```
         *  label_align \middle
         *  ```
         **/
        label_align() {
            return "middle";
        }
        /**
         *  ```
         *  title_pos_x \0
         *  ```
         **/
        title_pos_x() {
            return "0";
        }
        /**
         *  ```
         *  title_pos_y \100%
         *  ```
         **/
        title_pos_y() {
            return "100%";
        }
        /**
         *  ```
         *  label_pos_y!v <= title_pos_y
         *  ```
         **/
        label_pos_y(v) {
            return this.title_pos_y();
        }
        /**
         *  ```
         *  background_width \100%
         *  ```
         **/
        background_width() {
            return "100%";
        }
    }
    $.$mol_plot_ruler_hor = $mol_plot_ruler_hor;
})($ || ($ = {}));
//hor.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_plot_ruler_hor extends $.$mol_plot_ruler_hor {
            dimensions_axis() {
                return this.dimensions_pane().x;
            }
            viewport_axis() {
                return new this.$.$mol_vector_range(0, this.size_real().x);
            }
            scale_axis() {
                return this.scale()[0];
            }
            scale_step() {
                return this.scale()[0];
            }
            shift_axis() {
                return this.shift()[0];
            }
            curve() {
                const [shift] = this.shift();
                const [scale] = this.scale();
                return this.axis_points().map(point => {
                    const scaled = point * scale + shift;
                    return `M ${scaled.toFixed(3)} 1000 V 0`;
                }).join(' ');
            }
            label_pos_x(index) {
                return (this.axis_points()[index] * this.scale()[0] + this.shift()[0]).toFixed(3);
            }
            background_y() {
                return String(this.size_real()[1] - this.font_size());
            }
            background_height() {
                return String(this.font_size());
            }
        }
        $$.$mol_plot_ruler_hor = $mol_plot_ruler_hor;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//hor.view.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/plot/ruler/hor/hor.view.css", "[mol_plot_ruler_hor_label] {\n\ttransform: translateY( -4px );\n}\n\n[mol_plot_ruler_hor_title] {\n\ttransform: translateY( -4px );\n}\n");
})($ || ($ = {}));
//hor.view.css.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_plot_mark_cross extends $.$mol_plot_graph {
        /**
         *  ```
         *  labels /string
         *  ```
         **/
        labels() {
            return [];
        }
        /**
         *  ```
         *  title_x_gap 4
         *  ```
         **/
        title_x_gap() {
            return 4;
        }
        /**
         *  ```
         *  threshold 16
         *  ```
         **/
        threshold() {
            return 16;
        }
        /**
         *  ```
         *  graphs /$mol_plot_graph
         *  ```
         **/
        graphs() {
            return [];
        }
        /**
         *  ```
         *  dimensions $mol_vector_2d /
         *  	<= dimensions_x
         *  	<= dimensions_y
         *  ```
         **/
        dimensions() {
            return ((obj) => {
                return obj;
            })(new this.$.$mol_vector_2d(this.dimensions_x(), this.dimensions_y()));
        }
        /**
         *  ```
         *  dimensions_x $mol_vector_range /
         *  	Infinity
         *  	-Infinity
         *  ```
         **/
        dimensions_x() {
            return ((obj) => {
                return obj;
            })(new this.$.$mol_vector_range(Infinity, -Infinity));
        }
        /**
         *  ```
         *  dimensions_y $mol_vector_range /
         *  	Infinity
         *  	-Infinity
         *  ```
         **/
        dimensions_y() {
            return ((obj) => {
                return obj;
            })(new this.$.$mol_vector_range(Infinity, -Infinity));
        }
        /**
         *  ```
         *  sub /
         *  	<= Curve
         *  	<= Label_x
         *  	<= Label_y
         *  ```
         **/
        sub() {
            return [this.Curve(), this.Label_x(), this.Label_y()];
        }
        /**
         *  ```
         *  Curve $mol_svg_path geometry <= curve
         *  ```
         **/
        Curve() {
            return ((obj) => {
                obj.geometry = () => this.curve();
                return obj;
            })(new this.$.$mol_svg_path());
        }
        /**
         *  ```
         *  curve \
         *  ```
         **/
        curve() {
            return "";
        }
        /**
         *  ```
         *  Label_x $mol_svg_text_box
         *  	pos_x <= title_x_pos_x
         *  	pos_y <= title_x_pos_y
         *  	text <= title_x
         *  ```
         **/
        Label_x() {
            return ((obj) => {
                obj.pos_x = () => this.title_x_pos_x();
                obj.pos_y = () => this.title_x_pos_y();
                obj.text = () => this.title_x();
                return obj;
            })(new this.$.$mol_svg_text_box());
        }
        /**
         *  ```
         *  title_x_pos_x \0
         *  ```
         **/
        title_x_pos_x() {
            return "0";
        }
        /**
         *  ```
         *  title_x_pos_y \100%
         *  ```
         **/
        title_x_pos_y() {
            return "100%";
        }
        /**
         *  ```
         *  title_x \
         *  ```
         **/
        title_x() {
            return "";
        }
        /**
         *  ```
         *  Label_y $mol_svg_text_box
         *  	pos_x <= title_y_pos_x
         *  	pos_y <= title_y_pos_y
         *  	text <= title_y
         *  ```
         **/
        Label_y() {
            return ((obj) => {
                obj.pos_x = () => this.title_y_pos_x();
                obj.pos_y = () => this.title_y_pos_y();
                obj.text = () => this.title_y();
                return obj;
            })(new this.$.$mol_svg_text_box());
        }
        /**
         *  ```
         *  title_y_pos_x \0
         *  ```
         **/
        title_y_pos_x() {
            return "0";
        }
        /**
         *  ```
         *  title_y_pos_y \0
         *  ```
         **/
        title_y_pos_y() {
            return "0";
        }
        /**
         *  ```
         *  title_y \
         *  ```
         **/
        title_y() {
            return "";
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_plot_mark_cross.prototype, "dimensions", null);
    __decorate([
        $.$mol_mem
    ], $mol_plot_mark_cross.prototype, "dimensions_x", null);
    __decorate([
        $.$mol_mem
    ], $mol_plot_mark_cross.prototype, "dimensions_y", null);
    __decorate([
        $.$mol_mem
    ], $mol_plot_mark_cross.prototype, "Curve", null);
    __decorate([
        $.$mol_mem
    ], $mol_plot_mark_cross.prototype, "Label_x", null);
    __decorate([
        $.$mol_mem
    ], $mol_plot_mark_cross.prototype, "Label_y", null);
    $.$mol_plot_mark_cross = $mol_plot_mark_cross;
})($ || ($ = {}));
//cross.view.tree.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_plot_mark_cross extends $.$mol_plot_mark_cross {
            nearest() {
                let delta = this.threshold() ** 2;
                const [cursor_x, cursor_y] = this.cursor_position();
                if (Number.isNaN(cursor_x) || Number.isNaN(cursor_y))
                    return null;
                const graphs = this.graphs();
                let index = 0;
                let graph = null;
                const [shift_x, shift_y] = this.shift();
                const [scale_x, scale_y] = this.scale();
                for (let current of graphs) {
                    const indexes = current.indexes();
                    const series_x = current.series_x();
                    const series_y = current.series_y();
                    for (let i of indexes) {
                        const point_x = shift_x + series_x[i] * scale_x;
                        const point_y = shift_y + series_y[i] * scale_y;
                        const diff = (point_x - cursor_x) ** 2 + (point_y - cursor_y) ** 2;
                        if (diff < delta) {
                            delta = diff;
                            index = i;
                            graph = current;
                        }
                    }
                }
                if (!graph)
                    return null;
                const value = new $.$mol_vector_2d(graph.series_x()[index], graph.series_y()[index]);
                const scaled = new $.$mol_vector_2d(shift_x + value.x * scale_x, shift_y + value.y * scale_y);
                return { value, scaled, index };
            }
            curve() {
                const nearest = this.nearest();
                if (!nearest)
                    return '';
                return `M ${nearest.scaled.x.toFixed(3)} 1000 V 0 M 0 ${nearest.scaled.y.toFixed(3)} H 2000`;
            }
            title_x() {
                const nearest = this.nearest();
                if (!nearest)
                    return '';
                const labels = this.labels();
                if (labels.length > nearest.index)
                    return labels[nearest.index];
                return String(nearest.value.x);
            }
            title_x_pos_x() {
                const nearest = this.nearest();
                if (!nearest)
                    return '0';
                const width = this.text_width(this.title_x());
                return (nearest.scaled.x - width / 2).toFixed(3);
            }
            title_x_pos_y() {
                const nearest = this.nearest();
                if (!nearest)
                    return '0';
                const pos = this.size_real().y - this.title_x_gap();
                return pos.toFixed(3);
            }
            title_y() {
                const nearest = this.nearest();
                if (!nearest)
                    return '';
                return String(nearest.value.y);
            }
            title_y_pos_y() {
                const nearest = this.nearest();
                if (!nearest)
                    return '0';
                return nearest.scaled.y.toFixed(3);
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_plot_mark_cross.prototype, "nearest", null);
        $$.$mol_plot_mark_cross = $mol_plot_mark_cross;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//cross.view.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/plot/mark/cross/cross.view.css", "[mol_plot_mark_cross_curve] {\n\tcolor: var(--mol_theme_focus);\n\tstroke-width: 1px;\n\tstroke: currentColor;\n}\n\n[mol_plot_mark_cross_label_x], [mol_plot_mark_cross_label_y] {\n\tcolor: var(--mol_theme_focus);\n\tfont-weight: bold;\n\tpointer-events: none;\n}\n\n[mol_plot_mark_cross_label_y] {\n\ttransform: translateY( 4px );\n}\n");
})($ || ($ = {}));
//cross.view.css.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mpk/tss/reports/axle/chart/chart.css", "[mpk_tss_reports_axle_chart] {\n\theight: 60%;\n}\n\n");
})($ || ($ = {}));
//chart.css.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mpk_tss_reports_axle_chart extends $.$mol_chart {
        /**
         *  ```
         *  axle null
         *  ```
         **/
        axle() {
            return null;
        }
        /**
         *  ```
         *  carriage null
         *  ```
         **/
        carriage() {
            return null;
        }
        /**
         *  ```
         *  gap_left 48
         *  ```
         **/
        gap_left() {
            return 48;
        }
        /**
         *  ```
         *  gap_right 16
         *  ```
         **/
        gap_right() {
            return 16;
        }
        /**
         *  ```
         *  gap_bottom 24
         *  ```
         **/
        gap_bottom() {
            return 24;
        }
        /**
         *  ```
         *  gap_top 16
         *  ```
         **/
        gap_top() {
            return 16;
        }
        /**
         *  ```
         *  graphs /
         *  	<= Forces_left
         *  	<= Forces_right
         *  	<= Vert_ruler
         *  	<= Hor_ruler
         *  	<= Cross
         *  ```
         **/
        graphs() {
            return [this.Forces_left(), this.Forces_right(), this.Vert_ruler(), this.Hor_ruler(), this.Cross()];
        }
        /**
         *  ```
         *  Forces_left $mol_plot_dot
         *  	title <= forces_left_title
         *  	series_x <= forces_left_x
         *  	series_y <= forces_left_y
         *  	points_max <= points_max
         *  ```
         **/
        Forces_left() {
            return ((obj) => {
                obj.title = () => this.forces_left_title();
                obj.series_x = () => this.forces_left_x();
                obj.series_y = () => this.forces_left_y();
                obj.points_max = () => this.points_max();
                return obj;
            })(new this.$.$mol_plot_dot());
        }
        /**
         *  ```
         *  forces_left_title @ \Left wheel
         *  ```
         **/
        forces_left_title() {
            return this.$.$mol_locale.text("$mpk_tss_reports_axle_chart_forces_left_title");
        }
        /**
         *  ```
         *  forces_left_x /number
         *  ```
         **/
        forces_left_x() {
            return [];
        }
        /**
         *  ```
         *  forces_left_y /number
         *  ```
         **/
        forces_left_y() {
            return [];
        }
        /**
         *  ```
         *  points_max 600
         *  ```
         **/
        points_max() {
            return 600;
        }
        /**
         *  ```
         *  Forces_right $mol_plot_dot
         *  	title <= forces_right_title
         *  	series_x <= forces_right_x
         *  	series_y <= forces_right_y
         *  	points_max <= points_max
         *  ```
         **/
        Forces_right() {
            return ((obj) => {
                obj.title = () => this.forces_right_title();
                obj.series_x = () => this.forces_right_x();
                obj.series_y = () => this.forces_right_y();
                obj.points_max = () => this.points_max();
                return obj;
            })(new this.$.$mol_plot_dot());
        }
        /**
         *  ```
         *  forces_right_title @ \Right wheel
         *  ```
         **/
        forces_right_title() {
            return this.$.$mol_locale.text("$mpk_tss_reports_axle_chart_forces_right_title");
        }
        /**
         *  ```
         *  forces_right_x /number
         *  ```
         **/
        forces_right_x() {
            return [];
        }
        /**
         *  ```
         *  forces_right_y /number
         *  ```
         **/
        forces_right_y() {
            return [];
        }
        /**
         *  ```
         *  Vert_ruler $mol_plot_ruler_vert title <= vert_title
         *  ```
         **/
        Vert_ruler() {
            return ((obj) => {
                obj.title = () => this.vert_title();
                return obj;
            })(new this.$.$mol_plot_ruler_vert());
        }
        /**
         *  ```
         *  vert_title @ \kN
         *  ```
         **/
        vert_title() {
            return this.$.$mol_locale.text("$mpk_tss_reports_axle_chart_vert_title");
        }
        /**
         *  ```
         *  Hor_ruler $mol_plot_ruler_hor
         *  	title <= hor_title
         *  	series_x <= forces_left_x
         *  ```
         **/
        Hor_ruler() {
            return ((obj) => {
                obj.title = () => this.hor_title();
                obj.series_x = () => this.forces_left_x();
                return obj;
            })(new this.$.$mol_plot_ruler_hor());
        }
        /**
         *  ```
         *  hor_title @ \cm
         *  ```
         **/
        hor_title() {
            return this.$.$mol_locale.text("$mpk_tss_reports_axle_chart_hor_title");
        }
        /**
         *  ```
         *  Cross $mol_plot_mark_cross graphs /
         *  	<= Forces_left
         *  	<= Forces_right
         *  ```
         **/
        Cross() {
            return ((obj) => {
                obj.graphs = () => [this.Forces_left(), this.Forces_right()];
                return obj;
            })(new this.$.$mol_plot_mark_cross());
        }
    }
    __decorate([
        $.$mol_mem
    ], $mpk_tss_reports_axle_chart.prototype, "Forces_left", null);
    __decorate([
        $.$mol_mem
    ], $mpk_tss_reports_axle_chart.prototype, "Forces_right", null);
    __decorate([
        $.$mol_mem
    ], $mpk_tss_reports_axle_chart.prototype, "Vert_ruler", null);
    __decorate([
        $.$mol_mem
    ], $mpk_tss_reports_axle_chart.prototype, "Hor_ruler", null);
    __decorate([
        $.$mol_mem
    ], $mpk_tss_reports_axle_chart.prototype, "Cross", null);
    $.$mpk_tss_reports_axle_chart = $mpk_tss_reports_axle_chart;
})($ || ($ = {}));
//chart.view.tree.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mpk_tss_reports_axle_chart extends $.$mpk_tss_reports_axle_chart {
            axle() { throw new $.$mpk_tss_todo; }
            carriage() { throw new $.$mpk_tss_todo; }
            wheel_left() {
                return this.axle().wheels()[0];
            }
            wheel_right() {
                return this.axle().wheels()[1];
            }
            forces_left_x() {
                return this.wheel_left().forces()[0];
            }
            forces_right_x() {
                return this.wheel_right().forces()[0];
            }
            forces_left_y() {
                return this.wheel_left().forces()[1];
            }
            forces_right_y() {
                return this.wheel_right().forces()[1];
            }
        }
        __decorate([
            $.$mol_mem
        ], $mpk_tss_reports_axle_chart.prototype, "wheel_left", null);
        __decorate([
            $.$mol_mem
        ], $mpk_tss_reports_axle_chart.prototype, "wheel_right", null);
        $$.$mpk_tss_reports_axle_chart = $mpk_tss_reports_axle_chart;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//chart.view.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mpk/tss/reports/carriage/details/details.css", "[mpk_tss_reports_carriage_details] {\n\tflex: 1000 1 1200px;\n}\n\n[mpk_tss_reports_carriage_details_weight] {\n\tflex: 1 1 4rem;\n}\n\n[mpk_tss_reports_carriage_details_type] {\n\tflex: 1 1 4rem;\n}\n\n[mpk_tss_reports_carriage_details_length] {\n\tflex: 1 1 4rem;\n}\n\n[mpk_tss_reports_carriage_details_violation] {\n\tflex: 1 1 5rem;\n}\n\n[mpk_tss_reports_carriage_details_info] {\n\tflex: 1000 1 35rem;\n}\n\n[mpk_tss_reports_carriage_details_axle_list] {\n\tflex: 0 1 10rem;\n}\n");
})($ || ($ = {}));
//details.css.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mpk_tss_reports_carriage_details extends $.$mol_page {
        /**
         *  ```
         *  carriage null
         *  ```
         **/
        carriage() {
            return null;
        }
        /**
         *  ```
         *  title @ \Train %train_number | Carriage %carriage_number
         *  ```
         **/
        title() {
            return this.$.$mol_locale.text("$mpk_tss_reports_carriage_details_title");
        }
        /**
         *  ```
         *  minimal_width 1400
         *  ```
         **/
        minimal_width() {
            return 1400;
        }
        /**
         *  ```
         *  tools / <= Close
         *  ```
         **/
        tools() {
            return [this.Close()];
        }
        /**
         *  ```
         *  Close $mpk_tss_link
         *  	arg * carriage null
         *  	sub / <= Close_icon
         *  	copy_params /
         *  		\page
         *  		\login
         *  		\report
         *  		\carriages
         *  		\trains
         *  		\train_warning
         *  		\carriage_warning
         *  ```
         **/
        Close() {
            return ((obj) => {
                obj.arg = () => ({
                    "carriage": null,
                });
                obj.sub = () => [this.Close_icon()];
                obj.copy_params = () => ["page", "login", "report", "carriages", "trains", "train_warning", "carriage_warning"];
                return obj;
            })(new this.$.$mpk_tss_link());
        }
        /**
         *  ```
         *  Close_icon $mol_icon_cross
         *  ```
         **/
        Close_icon() {
            return ((obj) => {
                return obj;
            })(new this.$.$mol_icon_cross());
        }
        /**
         *  ```
         *  body /
         *  	<= Main
         *  	<= Axle_chart
         *  ```
         **/
        body() {
            return [this.Main(), this.Axle_chart()];
        }
        /**
         *  ```
         *  Main $mol_row sub /
         *  	<= Info
         *  	<= Axle_list
         *  ```
         **/
        Main() {
            return ((obj) => {
                obj.sub = () => [this.Info(), this.Axle_list()];
                return obj;
            })(new this.$.$mol_row());
        }
        /**
         *  ```
         *  Info $mpk_tss_reports_carriage_link
         *  	carriage <= carriage
         *  	additional /
         *  		<= Weight
         *  		<= Type
         *  		<= Length
         *  		<= Violation
         *  ```
         **/
        Info() {
            return ((obj) => {
                obj.carriage = () => this.carriage();
                obj.additional = () => [this.Weight(), this.Type(), this.Length(), this.Violation()];
                return obj;
            })(new this.$.$mpk_tss_reports_carriage_link());
        }
        /**
         *  ```
         *  Weight $mol_labeler
         *  	title <= total_weight_title
         *  	content / <= Weight_content
         *  ```
         **/
        Weight() {
            return ((obj) => {
                obj.title = () => this.total_weight_title();
                obj.content = () => [this.Weight_content()];
                return obj;
            })(new this.$.$mol_labeler());
        }
        /**
         *  ```
         *  total_weight_title @ \Total weight
         *  ```
         **/
        total_weight_title() {
            return this.$.$mol_locale.text("$mpk_tss_reports_carriage_details_total_weight_title");
        }
        /**
         *  ```
         *  Weight_content $mpk_tss_parameter_weight value <= total_weight
         *  ```
         **/
        Weight_content() {
            return ((obj) => {
                obj.value = () => this.total_weight();
                return obj;
            })(new this.$.$mpk_tss_parameter_weight());
        }
        /**
         *  ```
         *  total_weight 0
         *  ```
         **/
        total_weight() {
            return 0;
        }
        /**
         *  ```
         *  Type $mol_labeler
         *  	title <= type_title
         *  	content / <= Type_content
         *  ```
         **/
        Type() {
            return ((obj) => {
                obj.title = () => this.type_title();
                obj.content = () => [this.Type_content()];
                return obj;
            })(new this.$.$mol_labeler());
        }
        /**
         *  ```
         *  type_title @ \Type
         *  ```
         **/
        type_title() {
            return this.$.$mol_locale.text("$mpk_tss_reports_carriage_details_type_title");
        }
        /**
         *  ```
         *  Type_content $mpk_tss_reports_carriage_type value <= type
         *  ```
         **/
        Type_content() {
            return ((obj) => {
                obj.value = () => this.type();
                return obj;
            })(new this.$.$mpk_tss_reports_carriage_type());
        }
        /**
         *  ```
         *  type \
         *  ```
         **/
        type() {
            return "";
        }
        /**
         *  ```
         *  Length $mol_labeler
         *  	title <= length_title
         *  	content / <= Length_content
         *  ```
         **/
        Length() {
            return ((obj) => {
                obj.title = () => this.length_title();
                obj.content = () => [this.Length_content()];
                return obj;
            })(new this.$.$mol_labeler());
        }
        /**
         *  ```
         *  length_title @ \Length
         *  ```
         **/
        length_title() {
            return this.$.$mol_locale.text("$mpk_tss_reports_carriage_details_length_title");
        }
        /**
         *  ```
         *  Length_content $mpk_tss_parameter_length value <= length
         *  ```
         **/
        Length_content() {
            return ((obj) => {
                obj.value = () => this.length();
                return obj;
            })(new this.$.$mpk_tss_parameter_length());
        }
        /**
         *  ```
         *  length 0
         *  ```
         **/
        length() {
            return 0;
        }
        /**
         *  ```
         *  Violation $mol_labeler
         *  	title <= violation_title
         *  	content / <= Violation_content
         *  ```
         **/
        Violation() {
            return ((obj) => {
                obj.title = () => this.violation_title();
                obj.content = () => [this.Violation_content()];
                return obj;
            })(new this.$.$mol_labeler());
        }
        /**
         *  ```
         *  violation_title @ \Violation
         *  ```
         **/
        violation_title() {
            return this.$.$mol_locale.text("$mpk_tss_reports_carriage_details_violation_title");
        }
        /**
         *  ```
         *  Violation_content $mpk_tss_reports_violation
         *  	empty true
         *  	status <= violation
         *  ```
         **/
        Violation_content() {
            return ((obj) => {
                obj.empty = () => true;
                obj.status = () => this.violation();
                return obj;
            })(new this.$.$mpk_tss_reports_violation());
        }
        /**
         *  ```
         *  violation \
         *  ```
         **/
        violation() {
            return "";
        }
        axle_current() {
            return this.Axle_list().axle_current();
        }
        /**
         *  ```
         *  Axle_list $mpk_tss_reports_axle_list
         *  	carriage <= carriage
         *  	axle_current => axle_current
         *  ```
         **/
        Axle_list() {
            return ((obj) => {
                obj.carriage = () => this.carriage();
                return obj;
            })(new this.$.$mpk_tss_reports_axle_list());
        }
        /**
         *  ```
         *  Axle_chart $mpk_tss_reports_axle_chart
         *  	carriage <= carriage
         *  	axle <= axle_current
         *  ```
         **/
        Axle_chart() {
            return ((obj) => {
                obj.carriage = () => this.carriage();
                obj.axle = () => this.axle_current();
                return obj;
            })(new this.$.$mpk_tss_reports_axle_chart());
        }
    }
    __decorate([
        $.$mol_mem
    ], $mpk_tss_reports_carriage_details.prototype, "Close", null);
    __decorate([
        $.$mol_mem
    ], $mpk_tss_reports_carriage_details.prototype, "Close_icon", null);
    __decorate([
        $.$mol_mem
    ], $mpk_tss_reports_carriage_details.prototype, "Main", null);
    __decorate([
        $.$mol_mem
    ], $mpk_tss_reports_carriage_details.prototype, "Info", null);
    __decorate([
        $.$mol_mem
    ], $mpk_tss_reports_carriage_details.prototype, "Weight", null);
    __decorate([
        $.$mol_mem
    ], $mpk_tss_reports_carriage_details.prototype, "Weight_content", null);
    __decorate([
        $.$mol_mem
    ], $mpk_tss_reports_carriage_details.prototype, "Type", null);
    __decorate([
        $.$mol_mem
    ], $mpk_tss_reports_carriage_details.prototype, "Type_content", null);
    __decorate([
        $.$mol_mem
    ], $mpk_tss_reports_carriage_details.prototype, "Length", null);
    __decorate([
        $.$mol_mem
    ], $mpk_tss_reports_carriage_details.prototype, "Length_content", null);
    __decorate([
        $.$mol_mem
    ], $mpk_tss_reports_carriage_details.prototype, "Violation", null);
    __decorate([
        $.$mol_mem
    ], $mpk_tss_reports_carriage_details.prototype, "Violation_content", null);
    __decorate([
        $.$mol_mem
    ], $mpk_tss_reports_carriage_details.prototype, "Axle_list", null);
    __decorate([
        $.$mol_mem
    ], $mpk_tss_reports_carriage_details.prototype, "Axle_chart", null);
    $.$mpk_tss_reports_carriage_details = $mpk_tss_reports_carriage_details;
})($ || ($ = {}));
//details.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mpk_tss_reports_carriage_details extends $.$mpk_tss_reports_carriage_details {
            carriage() { throw new $.$mpk_tss_todo; }
            title() {
                return super.title()
                    .replace('%train_number', this.carriage().train().train_number())
                    .replace('%carriage_number', this.carriage().carriage_number());
            }
            total_weight() {
                return this.carriage().total_weight();
            }
            type() {
                return this.carriage().type();
            }
            violation() {
                return this.carriage().violation();
            }
            length() {
                return this.carriage().length();
            }
        }
        $$.$mpk_tss_reports_carriage_details = $mpk_tss_reports_carriage_details;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//details.view.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mpk/tss/reports/carriage/list/list.css", "[mpk_tss_reports_carriage_list_main] {\n\tflex: 1 1 22rem;\n}\n");
})($ || ($ = {}));
//list.css.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mpk_tss_reports_carriage_list extends $.$mol_view {
        /**
         *  ```
         *  report null
         *  ```
         **/
        report() {
            return null;
        }
        /**
         *  ```
         *  title @ \Train № %train_number
         *  ```
         **/
        title() {
            return this.$.$mol_locale.text("$mpk_tss_reports_carriage_list_title");
        }
        /**
         *  ```
         *  pages /
         *  	<= Main
         *  	<= Carriage
         *  ```
         **/
        pages() {
            return [this.Main(), this.Carriage()];
        }
        /**
         *  ```
         *  Main $mpk_tss_reports_carriage_page
         *  	title <= title
         *  	filter_number?val <=> filter_number?val
         *  	filter_warning?val <=> filter_warning?val
         *  	event_top?e <=> event_top?e
         *  	tools / <= Details_close
         *  	body / <= Carriages
         *  ```
         **/
        Main() {
            return ((obj) => {
                obj.title = () => this.title();
                obj.filter_number = (val) => this.filter_number(val);
                obj.filter_warning = (val) => this.filter_warning(val);
                obj.event_top = (e) => this.event_top(e);
                obj.tools = () => [this.Details_close()];
                obj.body = () => [this.Carriages()];
                return obj;
            })(new this.$.$mpk_tss_reports_carriage_page());
        }
        /**
         *  ```
         *  filter_number?val \
         *  ```
         **/
        filter_number(val, force) {
            return (val !== void 0) ? val : "";
        }
        /**
         *  ```
         *  filter_warning?val true
         *  ```
         **/
        filter_warning(val, force) {
            return (val !== void 0) ? val : true;
        }
        /**
         *  ```
         *  event_top?e null
         *  ```
         **/
        event_top(e, force) {
            return (e !== void 0) ? e : null;
        }
        /**
         *  ```
         *  Details_close $mpk_tss_link
         *  	arg * report null
         *  	sub / <= Details_close_icon
         *  	copy_params /
         *  		\login
         *  		\page
         *  		\trains
         *  		\carriages
         *  		\train_warining
         *  		\carriage_warining
         *  ```
         **/
        Details_close() {
            return ((obj) => {
                obj.arg = () => ({
                    "report": null,
                });
                obj.sub = () => [this.Details_close_icon()];
                obj.copy_params = () => ["login", "page", "trains", "carriages", "train_warining", "carriage_warining"];
                return obj;
            })(new this.$.$mpk_tss_link());
        }
        /**
         *  ```
         *  Details_close_icon $mol_icon_cross
         *  ```
         **/
        Details_close_icon() {
            return ((obj) => {
                return obj;
            })(new this.$.$mol_icon_cross());
        }
        /**
         *  ```
         *  Carriages $mol_list rows <= carriage_links
         *  ```
         **/
        Carriages() {
            return ((obj) => {
                obj.rows = () => this.carriage_links();
                return obj;
            })(new this.$.$mol_list());
        }
        /**
         *  ```
         *  carriage_links /
         *  ```
         **/
        carriage_links() {
            return [];
        }
        /**
         *  ```
         *  Carriage null
         *  ```
         **/
        Carriage() {
            return null;
        }
        /**
         *  ```
         *  Carriage_details!id $mpk_tss_reports_carriage_details
         *  	carriage <= carriage!id
         *  	event_top?e <=> focus_main?e
         *  ```
         **/
        Carriage_details(id) {
            return ((obj) => {
                obj.carriage = () => this.carriage(id);
                obj.event_top = (e) => this.focus_main(e);
                return obj;
            })(new this.$.$mpk_tss_reports_carriage_details());
        }
        /**
         *  ```
         *  carriage!id null
         *  ```
         **/
        carriage(id) {
            return null;
        }
        /**
         *  ```
         *  focus_main?e null
         *  ```
         **/
        focus_main(e, force) {
            return (e !== void 0) ? e : null;
        }
        /**
         *  ```
         *  Carriage_link!id $mpk_tss_reports_carriage_link carriage <= carriage!id
         *  ```
         **/
        Carriage_link(id) {
            return ((obj) => {
                obj.carriage = () => this.carriage(id);
                return obj;
            })(new this.$.$mpk_tss_reports_carriage_link());
        }
    }
    __decorate([
        $.$mol_mem
    ], $mpk_tss_reports_carriage_list.prototype, "Main", null);
    __decorate([
        $.$mol_mem
    ], $mpk_tss_reports_carriage_list.prototype, "filter_number", null);
    __decorate([
        $.$mol_mem
    ], $mpk_tss_reports_carriage_list.prototype, "filter_warning", null);
    __decorate([
        $.$mol_mem
    ], $mpk_tss_reports_carriage_list.prototype, "event_top", null);
    __decorate([
        $.$mol_mem
    ], $mpk_tss_reports_carriage_list.prototype, "Details_close", null);
    __decorate([
        $.$mol_mem
    ], $mpk_tss_reports_carriage_list.prototype, "Details_close_icon", null);
    __decorate([
        $.$mol_mem
    ], $mpk_tss_reports_carriage_list.prototype, "Carriages", null);
    __decorate([
        $.$mol_mem_key
    ], $mpk_tss_reports_carriage_list.prototype, "Carriage_details", null);
    __decorate([
        $.$mol_mem
    ], $mpk_tss_reports_carriage_list.prototype, "focus_main", null);
    __decorate([
        $.$mol_mem_key
    ], $mpk_tss_reports_carriage_list.prototype, "Carriage_link", null);
    $.$mpk_tss_reports_carriage_list = $mpk_tss_reports_carriage_list;
})($ || ($ = {}));
//list.view.tree.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mpk_tss_reports_carriage_list extends $.$mpk_tss_reports_carriage_list {
            report() {
                throw new $.$mpk_tss_todo;
            }
            carriages() {
                return this.report().carriages({
                    filter_number: (next) => this.filter_number(),
                    filter_resolution: () => {
                        return this.filter_warning()
                            ? $.$mpk_tss_reports_domain_resolution.warning
                            : null;
                    },
                });
            }
            filter_warning(next) {
                const param = this.$.$mol_state_arg.value(this.state_key('carriages_warning'), next ? '1' : null);
                return !!param;
            }
            title() {
                return super.title().replace('%train_number', this.report().train_number());
            }
            carriage(id) {
                return this.carriages().carriage(id);
            }
            carriage_links() {
                return this.carriages().carriages()
                    .map(carriage => this.Carriage_link(carriage.id()));
            }
            carriage_id(next) {
                return this.$.$mol_state_arg.value(this.state_key('carriage'), next) || '';
            }
            Carriage() {
                if (!this.carriage_id())
                    return null;
                return this.Carriage_details(this.carriage_id());
            }
            focus_main() {
                this.Main().focused(true);
            }
            filter_number(next) {
                return this.$.$mol_state_arg.value(this.state_key('carriages'), next === '' ? null : next) || '';
            }
        }
        __decorate([
            $.$mol_mem
        ], $mpk_tss_reports_carriage_list.prototype, "carriages", null);
        __decorate([
            $.$mol_mem
        ], $mpk_tss_reports_carriage_list.prototype, "filter_warning", null);
        __decorate([
            $.$mol_mem
        ], $mpk_tss_reports_carriage_list.prototype, "filter_number", null);
        $$.$mpk_tss_reports_carriage_list = $mpk_tss_reports_carriage_list;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//list.view.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mpk/tss/reports/train/list/list.css", "[mpk_tss_reports_train_list_main] {\n\tflex: 1 1 35rem;\n}\n");
})($ || ($ = {}));
//list.css.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mpk_tss_reports_train_list extends $.$mol_view {
        /**
         *  ```
         *  title @ \Reports
         *  ```
         **/
        title() {
            return this.$.$mol_locale.text("$mpk_tss_reports_train_list_title");
        }
        /**
         *  ```
         *  pages / <= Main
         *  ```
         **/
        pages() {
            return [this.Main()];
        }
        /**
         *  ```
         *  Main $mpk_tss_reports_train_page
         *  	event_top?e <=> event_top?e
         *  	tools <= tools
         *  	title <= title
         *  	report_current_id?id <=> report_current_id?id
         *  	filter_number?val <=> filter_number?val
         *  	filter_warning?val <=> filter_warning?val
         *  	body / <= Reports
         *  ```
         **/
        Main() {
            return ((obj) => {
                obj.event_top = (e) => this.event_top(e);
                obj.tools = () => this.tools();
                obj.title = () => this.title();
                obj.report_current_id = (id) => this.report_current_id(id);
                obj.filter_number = (val) => this.filter_number(val);
                obj.filter_warning = (val) => this.filter_warning(val);
                obj.body = () => [this.Reports()];
                return obj;
            })(new this.$.$mpk_tss_reports_train_page());
        }
        /**
         *  ```
         *  event_top?e null
         *  ```
         **/
        event_top(e, force) {
            return (e !== void 0) ? e : null;
        }
        /**
         *  ```
         *  tools /
         *  ```
         **/
        tools() {
            return [];
        }
        /**
         *  ```
         *  report_current_id?id \
         *  ```
         **/
        report_current_id(id, force) {
            return (id !== void 0) ? id : "";
        }
        /**
         *  ```
         *  filter_number?val \
         *  ```
         **/
        filter_number(val, force) {
            return (val !== void 0) ? val : "";
        }
        /**
         *  ```
         *  filter_warning?val true
         *  ```
         **/
        filter_warning(val, force) {
            return (val !== void 0) ? val : true;
        }
        /**
         *  ```
         *  Reports $mpk_tss_card_list
         *  	current_id <= report_current_id?id
         *  	minimal_width 300
         *  	rows <= report_links
         *  ```
         **/
        Reports() {
            return ((obj) => {
                obj.current_id = () => this.report_current_id();
                obj.minimal_width = () => 300;
                obj.rows = () => this.report_links();
                return obj;
            })(new this.$.$mpk_tss_card_list());
        }
        /**
         *  ```
         *  report_links /
         *  ```
         **/
        report_links() {
            return [];
        }
        /**
         *  ```
         *  Report_link!id $mpk_tss_reports_train_link
         *  	minimal_height 100
         *  	report <= report!id
         *  ```
         **/
        Report_link(id) {
            return ((obj) => {
                obj.minimal_height = () => 100;
                obj.report = () => this.report(id);
                return obj;
            })(new this.$.$mpk_tss_reports_train_link());
        }
        /**
         *  ```
         *  report!id null
         *  ```
         **/
        report(id) {
            return null;
        }
        /**
         *  ```
         *  Report_details!id $mpk_tss_reports_carriage_list
         *  	report <= report!id
         *  	event_top?e <=> focus_main?e
         *  ```
         **/
        Report_details(id) {
            return ((obj) => {
                obj.report = () => this.report(id);
                obj.event_top = (e) => this.focus_main(e);
                return obj;
            })(new this.$.$mpk_tss_reports_carriage_list());
        }
        /**
         *  ```
         *  focus_main?e null
         *  ```
         **/
        focus_main(e, force) {
            return (e !== void 0) ? e : null;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mpk_tss_reports_train_list.prototype, "Main", null);
    __decorate([
        $.$mol_mem
    ], $mpk_tss_reports_train_list.prototype, "event_top", null);
    __decorate([
        $.$mol_mem
    ], $mpk_tss_reports_train_list.prototype, "report_current_id", null);
    __decorate([
        $.$mol_mem
    ], $mpk_tss_reports_train_list.prototype, "filter_number", null);
    __decorate([
        $.$mol_mem
    ], $mpk_tss_reports_train_list.prototype, "filter_warning", null);
    __decorate([
        $.$mol_mem
    ], $mpk_tss_reports_train_list.prototype, "Reports", null);
    __decorate([
        $.$mol_mem_key
    ], $mpk_tss_reports_train_list.prototype, "Report_link", null);
    __decorate([
        $.$mol_mem_key
    ], $mpk_tss_reports_train_list.prototype, "Report_details", null);
    __decorate([
        $.$mol_mem
    ], $mpk_tss_reports_train_list.prototype, "focus_main", null);
    $.$mpk_tss_reports_train_list = $mpk_tss_reports_train_list;
})($ || ($ = {}));
//list.view.tree.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mpk_tss_reports_train_list extends $.$mpk_tss_reports_train_list {
            domain() {
                return this.$.$mpk_tss_reports_domain_trains.make({
                    filter_number: (next) => this.filter_number(),
                    filter_resolution: () => {
                        return this.filter_warning()
                            ? $.$mpk_tss_reports_domain_resolution.warning
                            : null;
                    },
                });
            }
            main_blended() {
                return !!this.report_current_id();
            }
            report_links() {
                return this.domain().reports().map(report => this.Report_link(report.id()));
            }
            report(id) {
                return this.domain().report(id);
            }
            filter_number(next) {
                return this.$.$mol_state_arg.value(this.state_key('trains'), next === '' ? null : next) || '';
            }
            filter_warning(next) {
                const param = this.$.$mol_state_arg.value(this.state_key('trains_warning'), next ? '1' : null);
                return !!param;
            }
            report_current_id(next) {
                return this.$.$mol_state_arg.value(this.state_key('report'), next) || '';
            }
            pages() {
                return super.pages().concat(this.Details_pages());
            }
            Details_pages() {
                if (!this.report_current_id())
                    return [];
                return this.Report_details(this.report_current_id()).pages();
            }
            focus_main() {
                this.Main().focused(true);
            }
        }
        __decorate([
            $.$mol_mem
        ], $mpk_tss_reports_train_list.prototype, "domain", null);
        __decorate([
            $.$mol_mem
        ], $mpk_tss_reports_train_list.prototype, "report_links", null);
        __decorate([
            $.$mol_mem
        ], $mpk_tss_reports_train_list.prototype, "filter_warning", null);
        $$.$mpk_tss_reports_train_list = $mpk_tss_reports_train_list;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//list.view.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/image/image.view.css", "[mol_image] {\n\tbox-shadow: 0 0 0 1px var(--mol_theme_line);\n\tborder-radius: var(--mol_skin_round);\n\toverflow: hidden;\n\tflex: 0 1 auto;\n\tmax-width: 100%;\n}\n");
})($ || ($ = {}));
//image.view.css.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_image extends $.$mol_view {
        /**
         *  ```
         *  dom_name \img
         *  ```
         **/
        dom_name() {
            return "img";
        }
        /**
         *  ```
         *  field *
         *  	^
         *  	src <= uri
         *  	alt <= title
         *  ```
         **/
        field() {
            return (Object.assign(Object.assign({}, super.field()), { "src": this.uri(), "alt": this.title() }));
        }
        /**
         *  ```
         *  uri \
         *  ```
         **/
        uri() {
            return "";
        }
    }
    $.$mol_image = $mol_image;
})($ || ($ = {}));
//image.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/form/field/field.view.css", "[mol_form_field] {\n\talign-items: stretch;\n}\n\n[mol_form_field_bid] {\n\tcolor: var(--mol_skin_accent);\n\tmargin-left: .5rem;\n\tdisplay: inline-block;\n}\n");
})($ || ($ = {}));
//field.view.css.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_form_field extends $.$mol_labeler {
        /**
         *  ```
         *  label /
         *  	<= name
         *  	<= Bid
         *  ```
         **/
        label() {
            return [this.name(), this.Bid()];
        }
        /**
         *  ```
         *  name \
         *  ```
         **/
        name() {
            return "";
        }
        /**
         *  ```
         *  Bid $mol_view sub / <= bid
         *  ```
         **/
        Bid() {
            return ((obj) => {
                obj.sub = () => [this.bid()];
                return obj;
            })(new this.$.$mol_view());
        }
        /**
         *  ```
         *  bid \
         *  ```
         **/
        bid() {
            return "";
        }
        /**
         *  ```
         *  Content <= control
         *  ```
         **/
        Content() {
            return this.control();
        }
        /**
         *  ```
         *  control null
         *  ```
         **/
        control() {
            return null;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_form_field.prototype, "Bid", null);
    $.$mol_form_field = $mol_form_field;
})($ || ($ = {}));
//field.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/form/form.css", "[mol_form_bar_fields] {\n\tdisplay: flex;\n\tflex-direction: column;\n}\n\n[mol_form_bar_fields] > * {\n\tmargin: .5rem;\n}\n\n[mol_form_bar_buttons] {\n\tbox-shadow: none;\n\tpadding: 0;\n}\n\n[mol_form_bar_buttons] > * {\n\tflex: 1 1 auto;\n}\n");
})($ || ($ = {}));
//form.css.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_form extends $.$mol_view {
        /**
         *  ```
         *  submit_blocked false
         *  ```
         **/
        submit_blocked() {
            return false;
        }
        /**
         *  ```
         *  event *
         *  	^
         *  	keydown?event <=> keydown?event
         *  ```
         **/
        event() {
            return (Object.assign(Object.assign({}, super.event()), { "keydown": (event) => this.keydown(event) }));
        }
        /**
         *  ```
         *  keydown?event null
         *  ```
         **/
        keydown(event, force) {
            return (event !== void 0) ? event : null;
        }
        /**
         *  ```
         *  submit?event null
         *  ```
         **/
        submit(event, force) {
            return (event !== void 0) ? event : null;
        }
        /**
         *  ```
         *  sub /
         *  	<= Bar_fields
         *  	<= Bar_buttons
         *  ```
         **/
        sub() {
            return [this.Bar_fields(), this.Bar_buttons()];
        }
        /**
         *  ```
         *  Bar_fields $mol_view sub <= form_fields
         *  ```
         **/
        Bar_fields() {
            return ((obj) => {
                obj.sub = () => this.form_fields();
                return obj;
            })(new this.$.$mol_view());
        }
        /**
         *  ```
         *  form_fields /$mol_form_field
         *  ```
         **/
        form_fields() {
            return [];
        }
        /**
         *  ```
         *  Bar_buttons $mol_row sub <= buttons
         *  ```
         **/
        Bar_buttons() {
            return ((obj) => {
                obj.sub = () => this.buttons();
                return obj;
            })(new this.$.$mol_row());
        }
        /**
         *  ```
         *  buttons /$mol_view
         *  ```
         **/
        buttons() {
            return [];
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_form.prototype, "keydown", null);
    __decorate([
        $.$mol_mem
    ], $mol_form.prototype, "submit", null);
    __decorate([
        $.$mol_mem
    ], $mol_form.prototype, "Bar_fields", null);
    __decorate([
        $.$mol_mem
    ], $mol_form.prototype, "Bar_buttons", null);
    $.$mol_form = $mol_form;
})($ || ($ = {}));
//form.view.tree.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_form extends $.$mol_form {
            submit_blocked() {
                return this.form_fields().some(field => field.bid());
            }
            keydown(next) {
                if (next.ctrlKey && next.keyCode === $.$mol_keyboard_code.enter && !this.submit_blocked())
                    this.submit(event);
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_form.prototype, "submit_blocked", null);
        $$.$mol_form = $mol_form;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//form.view.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mpk_tss_login extends $.$mol_list {
        /**
         *  ```
         *  submit?v false
         *  ```
         **/
        submit(v, force) {
            return (v !== void 0) ? v : false;
        }
        /**
         *  ```
         *  sub / <= Form
         *  ```
         **/
        sub() {
            return [this.Form()];
        }
        /**
         *  ```
         *  Form $mol_form
         *  	form_fields /
         *  		<= Login_field
         *  		<= Password_field
         *  	buttons / <= Submit
         *  ```
         **/
        Form() {
            return ((obj) => {
                obj.form_fields = () => [this.Login_field(), this.Password_field()];
                obj.buttons = () => [this.Submit()];
                return obj;
            })(new this.$.$mol_form());
        }
        /**
         *  ```
         *  Login_field $mol_form_field
         *  	name <= login_label
         *  	control <= Login
         *  ```
         **/
        Login_field() {
            return ((obj) => {
                obj.name = () => this.login_label();
                obj.control = () => this.Login();
                return obj;
            })(new this.$.$mol_form_field());
        }
        /**
         *  ```
         *  login_label @ \User name
         *  ```
         **/
        login_label() {
            return this.$.$mol_locale.text("$mpk_tss_login_login_label");
        }
        /**
         *  ```
         *  Login $mol_string value?val <=> login?val
         *  ```
         **/
        Login() {
            return ((obj) => {
                obj.value = (val) => this.login(val);
                return obj;
            })(new this.$.$mol_string());
        }
        /**
         *  ```
         *  login?val \
         *  ```
         **/
        login(val, force) {
            return (val !== void 0) ? val : "";
        }
        /**
         *  ```
         *  Password_field $mol_form_field
         *  	name <= password_label
         *  	control <= Password
         *  ```
         **/
        Password_field() {
            return ((obj) => {
                obj.name = () => this.password_label();
                obj.control = () => this.Password();
                return obj;
            })(new this.$.$mol_form_field());
        }
        /**
         *  ```
         *  password_label @ \Password
         *  ```
         **/
        password_label() {
            return this.$.$mol_locale.text("$mpk_tss_login_password_label");
        }
        /**
         *  ```
         *  Password $mol_string
         *  	value?val <=> password?val
         *  	type \password
         *  ```
         **/
        Password() {
            return ((obj) => {
                obj.value = (val) => this.password(val);
                obj.type = () => "password";
                return obj;
            })(new this.$.$mol_string());
        }
        /**
         *  ```
         *  password?val \
         *  ```
         **/
        password(val, force) {
            return (val !== void 0) ? val : "";
        }
        /**
         *  ```
         *  Submit $mol_button_major
         *  	sub / <= submit_label
         *  	event_click?val <=> event_submit?val
         *  	disabled <= submit_blocked
         *  ```
         **/
        Submit() {
            return ((obj) => {
                obj.sub = () => [this.submit_label()];
                obj.event_click = (val) => this.event_submit(val);
                obj.disabled = () => this.submit_blocked();
                return obj;
            })(new this.$.$mol_button_major());
        }
        /**
         *  ```
         *  submit_label @ \Log In
         *  ```
         **/
        submit_label() {
            return this.$.$mol_locale.text("$mpk_tss_login_submit_label");
        }
        /**
         *  ```
         *  event_submit?val null
         *  ```
         **/
        event_submit(val, force) {
            return (val !== void 0) ? val : null;
        }
        /**
         *  ```
         *  submit_blocked false
         *  ```
         **/
        submit_blocked() {
            return false;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mpk_tss_login.prototype, "submit", null);
    __decorate([
        $.$mol_mem
    ], $mpk_tss_login.prototype, "Form", null);
    __decorate([
        $.$mol_mem
    ], $mpk_tss_login.prototype, "Login_field", null);
    __decorate([
        $.$mol_mem
    ], $mpk_tss_login.prototype, "Login", null);
    __decorate([
        $.$mol_mem
    ], $mpk_tss_login.prototype, "login", null);
    __decorate([
        $.$mol_mem
    ], $mpk_tss_login.prototype, "Password_field", null);
    __decorate([
        $.$mol_mem
    ], $mpk_tss_login.prototype, "Password", null);
    __decorate([
        $.$mol_mem
    ], $mpk_tss_login.prototype, "password", null);
    __decorate([
        $.$mol_mem
    ], $mpk_tss_login.prototype, "Submit", null);
    __decorate([
        $.$mol_mem
    ], $mpk_tss_login.prototype, "event_submit", null);
    $.$mpk_tss_login = $mpk_tss_login;
})($ || ($ = {}));
//login.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mpk_tss_login extends $.$mpk_tss_login {
            event_submit() {
                // validate
                this.submit(true);
            }
        }
        $$.$mpk_tss_login = $mpk_tss_login;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//login.view.js.map
;
var $node = $node || {} ; $node[ "/mpk/tss/wheel.svg" ] = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhLS0gQ3JlYXRlZCB3aXRoIElua3NjYXBlIChodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy8pIC0tPgoKPHN2ZwogICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgIHhtbG5zOmNjPSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyMiCiAgIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIKICAgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiCiAgIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIgogICB3aWR0aD0iMjEwbW0iCiAgIGhlaWdodD0iMjk3bW0iCiAgIHZpZXdCb3g9IjAgMCAyMTAgMjk3IgogICB2ZXJzaW9uPSIxLjEiCiAgIGlkPSJzdmc4IgogICBpbmtzY2FwZTp2ZXJzaW9uPSIwLjkyLjMgKDI0MDU1NDYsIDIwMTgtMDMtMTEpIgogICBzb2RpcG9kaTpkb2NuYW1lPSJ3aGVlbC5zdmciPgogIDxkZWZzCiAgICAgaWQ9ImRlZnMyIiAvPgogIDxzb2RpcG9kaTpuYW1lZHZpZXcKICAgICBpZD0iYmFzZSIKICAgICBwYWdlY29sb3I9IiNmZmZmZmYiCiAgICAgYm9yZGVyY29sb3I9IiM2NjY2NjYiCiAgICAgYm9yZGVyb3BhY2l0eT0iMS4wIgogICAgIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwLjAiCiAgICAgaW5rc2NhcGU6cGFnZXNoYWRvdz0iMiIKICAgICBpbmtzY2FwZTp6b29tPSIxLjk0OTIzMDgiCiAgICAgaW5rc2NhcGU6Y3g9IjIyOC4xMzMzOSIKICAgICBpbmtzY2FwZTpjeT0iNzAwLjI5MTYiCiAgICAgaW5rc2NhcGU6ZG9jdW1lbnQtdW5pdHM9Im1tIgogICAgIGlua3NjYXBlOmN1cnJlbnQtbGF5ZXI9ImxheWVyMSIKICAgICBzaG93Z3JpZD0iZmFsc2UiCiAgICAgaW5rc2NhcGU6d2luZG93LXdpZHRoPSIxNjAwIgogICAgIGlua3NjYXBlOndpbmRvdy1oZWlnaHQ9Ijg2NyIKICAgICBpbmtzY2FwZTp3aW5kb3cteD0iMCIKICAgICBpbmtzY2FwZTp3aW5kb3cteT0iMzMiCiAgICAgaW5rc2NhcGU6d2luZG93LW1heGltaXplZD0iMSIgLz4KICA8bWV0YWRhdGEKICAgICBpZD0ibWV0YWRhdGE1Ij4KICAgIDxyZGY6UkRGPgogICAgICA8Y2M6V29yawogICAgICAgICByZGY6YWJvdXQ9IiI+CiAgICAgICAgPGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+CiAgICAgICAgPGRjOnR5cGUKICAgICAgICAgICByZGY6cmVzb3VyY2U9Imh0dHA6Ly9wdXJsLm9yZy9kYy9kY21pdHlwZS9TdGlsbEltYWdlIiAvPgogICAgICAgIDxkYzp0aXRsZT48L2RjOnRpdGxlPgogICAgICA8L2NjOldvcms+CiAgICA8L3JkZjpSREY+CiAgPC9tZXRhZGF0YT4KICA8ZwogICAgIGlua3NjYXBlOmxhYmVsPSJMYXllciAxIgogICAgIGlua3NjYXBlOmdyb3VwbW9kZT0ibGF5ZXIiCiAgICAgaWQ9ImxheWVyMSI+CiAgICA8cGF0aAogICAgICAgaWQ9InBhdGg4MjEiCiAgICAgICBzdHlsZT0iZmlsbDpub25lO2ZpbGwtcnVsZTpldmVub2RkO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDowLjcxMzAyNDMyO3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjEiCiAgICAgICBkPSJNIDIyLjM5NjY1NSw5My41OTMyNTkgSCA3My45ODI1MjcgTSA0NC4zNjY2MjMsMTAzLjE3NDg4IEggNTIuMDEyNTYgTSA0OC4xODk1OTIsODQuMDExNjQ1IFYgMTAzLjQ2NTIzIE0gMzEuNjY2MTI2LDgzLjk4OTg1MyBoIDMzLjA0NjkyOSB2IDUuOTQ3NDEgSCAzMS42NjYxMjYgWiIgLz4KICA8L2c+Cjwvc3ZnPgo="

;
var $node = $node || {} ; $node[ "/mpk/tss/placeholder.svg" ] = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTEgNTExIj4KICA8ZyBmaWxsPSIjNkM5MUNGIiBzdHJva2U9IiM2QzkxQ0YiPgogICAgPHBhdGggZD0iTTQ4Ny41IDI0aC00NjRDMTAuNSAyNCAwIDM0LjUgMCA0Ny41djMwNGMwIDEzIDEwLjUgMjMuNSAyMy41IDIzLjVoMTU4TDE3MCA0MTZoLTM0LjNjLTQgMC03LjUgMy40LTcuNSA3LjVzMy40IDcuNSA3LjUgNy41aDEzNmM0IDAgNy41LTMuNCA3LjUtNy41cy0zLjQtNy41LTcuNS03LjVoLTg2bDExLjctNDFoNzQuM2M0IDAgNy41LTMuNCA3LjUtNy41cy0zLjQtNy41LTcuNS03LjVoLTI0OGMtNC43IDAtOC41LTMuOC04LjUtOC41di0zMDRjMC00LjcgMy44LTguNSA4LjUtOC41aDQ2NGM0LjcgMCA4LjUgMy44IDguNSA4LjV2MzA0YzAgNCAzLjQgNy41IDcuNSA3LjVzNy41LTMuNCA3LjUtNy41di0zMDRjMC0xMy0xMC41LTIzLjUtMjMuNS0yMy41eiIvPgogICAgPHBhdGggZD0iTTQ3MS41IDU2aC00MzJjLTQgMC03LjUgMy40LTcuNSA3LjV2MjcyYzAgNCAzLjQgNy41IDcuNSA3LjVoMjMyYzQgMCA3LjUtMy40IDcuNS03LjVzLTMuNC03LjUtNy41LTcuNUg0N1YxMzVoNDE3djMyLjVjMCA0IDMuNCA3LjUgNy41IDcuNXM3LjUtMy40IDcuNS03LjV2LTEwNGMwLTQtMy40LTcuNS03LjUtNy41ek00NyAxMjBWNzFoNDE3djQ5SDQ3eiIvPgogICAgPHBhdGggZD0iTTM5MS41IDg4aC0yNDBjLTQgMC03LjUgMy40LTcuNSA3LjVzMy40IDcuNSA3LjUgNy41aDI0MGM0IDAgNy41LTMuNCA3LjUtNy41cy0zLjQtNy41LTcuNS03LjV6TTQzOS41IDg4aC0xNmMtNCAwLTcuNSAzLjQtNy41IDcuNXMzLjQgNy41IDcuNSA3LjVoMTZjNCAwIDcuNS0zLjQgNy41LTcuNXMtMy40LTcuNS03LjUtNy41ek03MS41IDg4Yy0yIDAtNCAuOC01LjMgMi4yLTEuNCAxLjQtMi4yIDMuMy0yLjIgNS4zcy44IDQgMi4yIDUuM2MxLjQgMS40IDMuMyAyLjIgNS4zIDIuMnM0LS44IDUuMy0yLjJjMS40LTEuNCAyLjItMy4zIDIuMi01LjNzLS44LTQtMi4yLTUuM2MtMS40LTEuNC0zLjMtMi4yLTUuMy0yLjJ6TTk1LjUgODhjLTIgMC00IC44LTUuMyAyLjItMS40IDEuNC0yLjIgMy4zLTIuMiA1LjNzLjggNCAyLjIgNS4zYzEuNCAxLjQgMy4zIDIuMiA1LjMgMi4yczQtLjggNS4zLTIuMmMxLjQtMS40IDIuMi0zLjMgMi4yLTUuM3MtLjgtNC0yLjItNS4zYy0xLjQtMS40LTMuMy0yLjItNS4zLTIuMnpNMTE5LjUgODhjLTIgMC00IC44LTUuMyAyLjItMS40IDEuNC0yLjIgMy4zLTIuMiA1LjNzLjggNCAyLjIgNS4zYzEuNCAxLjQgMy4zIDIuMiA1LjMgMi4yczQtLjggNS4zLTIuMmMxLjQtMS40IDIuMi0zLjMgMi4yLTUuM3MtLjgtNC0yLjItNS4zYy0xLjQtMS40LTMuMy0yLjItNS4zLTIuMnpNNDU1LjUgMTkyaC0xMzZjLTEzIDAtMjMuNSAxMC41LTIzLjUgMjMuNXYyNDhjMCAxMyAxMC41IDIzLjUgMjMuNSAyMy41aDEzNmMxMyAwIDIzLjUtMTAuNSAyMy41LTIzLjV2LTI0OGMwLTEzLTEwLjUtMjMuNS0yMy41LTIzLjV6TTMxMSAyMzloMTUzdjMzSDMxMXYtMzN6bTAgNDhoMTUzdjE1M0gzMTFWMjg3em04LjUtODBoMTM2YzQuNyAwIDguNSAzLjggOC41IDguNXY4LjVIMzExdi04LjVjMC00LjcgMy44LTguNSA4LjUtOC41em0xMzYgMjY1aC0xMzZjLTQuNyAwLTguNS0zLjgtOC41LTguNVY0NTVoMTUzdjguNWMwIDQuNy0zLjggOC41LTguNSA4LjV6Ii8+CiAgICA8cGF0aCBkPSJNNDE1LjUgMjQ4aC04OGMtNCAwLTcuNSAzLjQtNy41IDcuNXMzLjQgNy41IDcuNSA3LjVoODhjNCAwIDcuNS0zLjQgNy41LTcuNXMtMy40LTcuNS03LjUtNy41ek00NDcuNSAyNDhoLThjLTQgMC03LjUgMy40LTcuNSA3LjVzMy40IDcuNSA3LjUgNy41aDhjNCAwIDcuNS0zLjQgNy41LTcuNXMtMy40LTcuNS03LjUtNy41ek04Ny41IDE2MEM3OSAxNjAgNzIgMTY3IDcyIDE3NS41djEwNGMwIDguNSA3IDE1LjUgMTUuNSAxNS41aDEyMGM4LjUgMCAxNS41LTcgMTUuNS0xNS41di0xMDRjMC04LjUtNy0xNS41LTE1LjUtMTUuNWgtMTIwem03MS4zIDY3LjVMMjA4IDE4NHY4N2wtNDkuMi00My41em0tMTEuMy0xMEw5OS4zIDE3NWg5Ni40bC00OC4yIDQyLjV6TTg3IDI3MXYtODdsNDkuMiA0My41TDg3IDI3MXptNjAuNS0zMy41bDQ4LjIgNDIuNUg5OS4zbDQ4LjItNDIuNXpNMjU1LjUgMTc1aDE4NGM0IDAgNy41LTMuNCA3LjUtNy41cy0zLjQtNy41LTcuNS03LjVoLTE4NGMtNCAwLTcuNSAzLjQtNy41IDcuNXMzLjQgNy41IDcuNSA3LjV6TTI3MS41IDIwMGgtMTZjLTQgMC03LjUgMy40LTcuNSA3LjVzMy40IDcuNSA3LjUgNy41aDE2YzQgMCA3LjUtMy40IDcuNS03LjVzLTMuNC03LjUtNy41LTcuNXpNMjcxLjUgMjQwaC0xNmMtNCAwLTcuNSAzLjQtNy41IDcuNXMzLjQgNy41IDcuNSA3LjVoMTZjNCAwIDcuNS0zLjQgNy41LTcuNXMtMy40LTcuNS03LjUtNy41ek0yNzEuNSAyODBoLTE2Yy00IDAtNy41IDMuNC03LjUgNy41czMuNCA3LjUgNy41IDcuNWgxNmM0IDAgNy41LTMuNCA3LjUtNy41cy0zLjQtNy41LTcuNS03LjV6TTQzMS41IDMwNGgtODhjLTguNSAwLTE1LjUgNy0xNS41IDE1LjV2NTZjMCA4LjUgNyAxNS41IDE1LjUgMTUuNWg4OGM4LjUgMCAxNS41LTcgMTUuNS0xNS41di01NmMwLTguNS03LTE1LjUtMTUuNS0xNS41em0tMzAgNDMuNUw0MzIgMzI4djM5bC0zMC41LTE5LjV6bS0xNC05TDM1Ni43IDMxOWg2MS42bC0zMC44IDE5LjZ6TTM0MyAzNjd2LTM5bDMwLjUgMTkuNUwzNDMgMzY3em00NC41LTEwLjZsMzAuOCAxOS42aC02MS42bDMwLjgtMTkuNnpNNDM5LjUgNDA4aC0xMDRjLTQgMC03LjUgMy40LTcuNSA3LjVzMy40IDcuNSA3LjUgNy41aDEwNGM0IDAgNy41LTMuNCA3LjUtNy41cy0zLjQtNy41LTcuNS03LjV6Ii8+CiAgPC9nPgo8L3N2Zz4K"

;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mpk_tss extends $.$mol_view {
        /**
         *  ```
         *  title \Terminal № %terminal_number | Traffic security system
         *  ```
         **/
        title() {
            return "Terminal № %terminal_number | Traffic security system";
        }
        /**
         *  ```
         *  attr * mol_theme <= theme
         *  ```
         **/
        attr() {
            return ({
                "mol_theme": this.theme(),
            });
        }
        /**
         *  ```
         *  theme \$mol_theme_light
         *  ```
         **/
        theme() {
            return "$mol_theme_light";
        }
        /**
         *  ```
         *  terminal_text @ \Terminal № %terminal_number
         *  ```
         **/
        terminal_text() {
            return this.$.$mol_locale.text("$mpk_tss_terminal_text");
        }
        /**
         *  ```
         *  sub /
         *  	<= Head
         *  	<= Body
         *  ```
         **/
        sub() {
            return [this.Head(), this.Body()];
        }
        /**
         *  ```
         *  Head $mol_view sub /
         *  	<= Terminal_link
         *  	<= Logged_user
         *  ```
         **/
        Head() {
            return ((obj) => {
                obj.sub = () => [this.Terminal_link(), this.Logged_user()];
                return obj;
            })(new this.$.$mol_view());
        }
        /**
         *  ```
         *  Terminal_link $mol_button_minor
         *  	enabled false
         *  	sub / <= terminal_formatted_label
         *  ```
         **/
        Terminal_link() {
            return ((obj) => {
                obj.enabled = () => false;
                obj.sub = () => [this.terminal_formatted_label()];
                return obj;
            })(new this.$.$mol_button_minor());
        }
        /**
         *  ```
         *  terminal_formatted_label \
         *  ```
         **/
        terminal_formatted_label() {
            return "";
        }
        Logged_user() {
            return this.Body().Logged_user();
        }
        /**
         *  ```
         *  Body $mpk_tss_main Logged_user => Logged_user
         *  ```
         **/
        Body() {
            return ((obj) => {
                return obj;
            })(new this.$.$mpk_tss_main());
        }
    }
    __decorate([
        $.$mol_mem
    ], $mpk_tss.prototype, "Head", null);
    __decorate([
        $.$mol_mem
    ], $mpk_tss.prototype, "Terminal_link", null);
    __decorate([
        $.$mol_mem
    ], $mpk_tss.prototype, "Body", null);
    $.$mpk_tss = $mpk_tss;
})($ || ($ = {}));
(function ($) {
    class $mpk_tss_main extends $.$mol_book {
        /**
         *  ```
         *  Logged_user null
         *  ```
         **/
        Logged_user() {
            return null;
        }
        /**
         *  ```
         *  User_link $mol_button_minor
         *  	event_click?event <=> logout_click?event
         *  	sub /
         *  		<= User_email
         *  		<= User_signout
         *  ```
         **/
        User_link() {
            return ((obj) => {
                obj.event_click = (event) => this.logout_click(event);
                obj.sub = () => [this.User_email(), this.User_signout()];
                return obj;
            })(new this.$.$mol_button_minor());
        }
        /**
         *  ```
         *  logout_click?event null
         *  ```
         **/
        logout_click(event, force) {
            return (event !== void 0) ? event : null;
        }
        /**
         *  ```
         *  User_email $mol_view sub / <= logged_email
         *  ```
         **/
        User_email() {
            return ((obj) => {
                obj.sub = () => [this.logged_email()];
                return obj;
            })(new this.$.$mol_view());
        }
        /**
         *  ```
         *  logged_email \
         *  ```
         **/
        logged_email() {
            return "";
        }
        /**
         *  ```
         *  User_signout $mpk_tss_icon_exit_to_app
         *  ```
         **/
        User_signout() {
            return ((obj) => {
                return obj;
            })(new this.$.$mpk_tss_icon_exit_to_app());
        }
        /**
         *  ```
         *  Menu_item!id $mpk_tss_link
         *  	arg <= menu_page_arg!id
         *  	title <= menu_page_title!id
         *  	copy_params / \login
         *  ```
         **/
        Menu_item(id) {
            return ((obj) => {
                obj.arg = () => this.menu_page_arg(id);
                obj.title = () => this.menu_page_title(id);
                obj.copy_params = () => ["login"];
                return obj;
            })(new this.$.$mpk_tss_link());
        }
        /**
         *  ```
         *  menu_page_arg!id *
         *  ```
         **/
        menu_page_arg(id) {
            return ({});
        }
        /**
         *  ```
         *  menu_page_title!id \
         *  ```
         **/
        menu_page_title(id) {
            return "";
        }
        /**
         *  ```
         *  menu_pages *
         *  	summary <= Summary
         *  	software <= Software
         *  	pereferial <= Pereferial
         *  	sensors <= Sensors
         *  	reports <= Reports
         *  ```
         **/
        menu_pages() {
            return ({
                "summary": this.Summary(),
                "software": this.Software(),
                "pereferial": this.Pereferial(),
                "sensors": this.Sensors(),
                "reports": this.Reports(),
            });
        }
        /**
         *  ```
         *  Summary $mpk_tss_summary event_top?event <=> event_front_up?event
         *  ```
         **/
        Summary() {
            return ((obj) => {
                obj.event_top = (event) => this.event_front_up(event);
                return obj;
            })(new this.$.$mpk_tss_summary());
        }
        /**
         *  ```
         *  Software $mpk_tss_software
         *  	tools <= common_tools
         *  	event_top?event <=> event_front_up?event
         *  ```
         **/
        Software() {
            return ((obj) => {
                obj.tools = () => this.common_tools();
                obj.event_top = (event) => this.event_front_up(event);
                return obj;
            })(new this.$.$mpk_tss_software());
        }
        /**
         *  ```
         *  Pereferial $mpk_tss_pereferial_list
         *  	tools <= common_tools
         *  	event_top?event <=> event_front_up?event
         *  ```
         **/
        Pereferial() {
            return ((obj) => {
                obj.tools = () => this.common_tools();
                obj.event_top = (event) => this.event_front_up(event);
                return obj;
            })(new this.$.$mpk_tss_pereferial_list());
        }
        /**
         *  ```
         *  Sensors $mpk_tss_sensors
         *  	tools <= common_tools
         *  	event_top?event <=> event_front_up?event
         *  ```
         **/
        Sensors() {
            return ((obj) => {
                obj.tools = () => this.common_tools();
                obj.event_top = (event) => this.event_front_up(event);
                return obj;
            })(new this.$.$mpk_tss_sensors());
        }
        /**
         *  ```
         *  Reports $mpk_tss_reports_train_list
         *  	tools <= common_tools
         *  	event_top?event <=> event_front_up?event
         *  ```
         **/
        Reports() {
            return ((obj) => {
                obj.tools = () => this.common_tools();
                obj.event_top = (event) => this.event_front_up(event);
                return obj;
            })(new this.$.$mpk_tss_reports_train_list());
        }
        /**
         *  ```
         *  common_tools / <= Details_close
         *  ```
         **/
        common_tools() {
            return [this.Details_close()];
        }
        /**
         *  ```
         *  Details_close $mpk_tss_link
         *  	arg * page null
         *  	sub / <= Details_close_icon
         *  	copy_params / \login
         *  ```
         **/
        Details_close() {
            return ((obj) => {
                obj.arg = () => ({
                    "page": null,
                });
                obj.sub = () => [this.Details_close_icon()];
                obj.copy_params = () => ["login"];
                return obj;
            })(new this.$.$mpk_tss_link());
        }
        /**
         *  ```
         *  Details_close_icon $mol_icon_cross
         *  ```
         **/
        Details_close_icon() {
            return ((obj) => {
                return obj;
            })(new this.$.$mol_icon_cross());
        }
        /**
         *  ```
         *  pages /
         *  	<= Sidebar
         *  	<= Summary
         *  	<= menu_pages
         *  	<= details
         *  ```
         **/
        pages() {
            return [this.Sidebar(), this.Summary(), this.menu_pages(), this.details()];
        }
        /**
         *  ```
         *  Sidebar $mol_page
         *  	head / <= Logo
         *  	title <= sidebar_title
         *  	minimal_width 230
         *  	body
         *  		<= sidebar_items
         *  		<= Login
         *  		<= Menu
         *  	foot / <= Foot_content
         *  ```
         **/
        Sidebar() {
            return ((obj) => {
                obj.head = () => [this.Logo()];
                obj.title = () => this.sidebar_title();
                obj.minimal_width = () => 230;
                obj.body = () => this.sidebar_items();
                obj.foot = () => [this.Foot_content()];
                return obj;
            })(new this.$.$mol_page());
        }
        /**
         *  ```
         *  Logo $mol_image
         *  	uri \mpk/tss/tss_logo.svg
         *  	event * click?val <=> event_top?val
         *  ```
         **/
        Logo() {
            return ((obj) => {
                obj.uri = () => "mpk/tss/tss_logo.svg";
                obj.event = () => ({
                    "click": (val) => this.event_top(val),
                });
                return obj;
            })(new this.$.$mol_image());
        }
        /**
         *  ```
         *  event_top?val null
         *  ```
         **/
        event_top(val, force) {
            return (val !== void 0) ? val : null;
        }
        /**
         *  ```
         *  sidebar_title @ \Menu
         *  ```
         **/
        sidebar_title() {
            return this.$.$mol_locale.text("$mpk_tss_main_sidebar_title");
        }
        /**
         *  ```
         *  sidebar_items /
         *  ```
         **/
        sidebar_items() {
            return [];
        }
        /**
         *  ```
         *  Login $mpk_tss_login submit?v <=> login_submit?v
         *  ```
         **/
        Login() {
            return ((obj) => {
                obj.submit = (v) => this.login_submit(v);
                return obj;
            })(new this.$.$mpk_tss_login());
        }
        /**
         *  ```
         *  login_submit?v false
         *  ```
         **/
        login_submit(v, force) {
            return (v !== void 0) ? v : false;
        }
        /**
         *  ```
         *  Menu $mol_list rows <= menu_items
         *  ```
         **/
        Menu() {
            return ((obj) => {
                obj.rows = () => this.menu_items();
                return obj;
            })(new this.$.$mol_list());
        }
        /**
         *  ```
         *  menu_items /
         *  ```
         **/
        menu_items() {
            return [];
        }
        /**
         *  ```
         *  Foot_content $mol_row sub / <= Foot_text
         *  ```
         **/
        Foot_content() {
            return ((obj) => {
                obj.sub = () => [this.Foot_text()];
                return obj;
            })(new this.$.$mol_row());
        }
        /**
         *  ```
         *  Foot_text $mol_view sub / <= copyright
         *  ```
         **/
        Foot_text() {
            return ((obj) => {
                obj.sub = () => [this.copyright()];
                return obj;
            })(new this.$.$mol_view());
        }
        /**
         *  ```
         *  copyright @ \© %year MPK Software, Russia
         *  ```
         **/
        copyright() {
            return this.$.$mol_locale.text("$mpk_tss_main_copyright");
        }
        /**
         *  ```
         *  details null
         *  ```
         **/
        details() {
            return null;
        }
        /**
         *  ```
         *  Placeholder $mpk_tss_placeholder title \
         *  ```
         **/
        Placeholder() {
            return ((obj) => {
                obj.title = () => "";
                return obj;
            })(new this.$.$mpk_tss_placeholder());
        }
    }
    __decorate([
        $.$mol_mem
    ], $mpk_tss_main.prototype, "User_link", null);
    __decorate([
        $.$mol_mem
    ], $mpk_tss_main.prototype, "logout_click", null);
    __decorate([
        $.$mol_mem
    ], $mpk_tss_main.prototype, "User_email", null);
    __decorate([
        $.$mol_mem
    ], $mpk_tss_main.prototype, "User_signout", null);
    __decorate([
        $.$mol_mem_key
    ], $mpk_tss_main.prototype, "Menu_item", null);
    __decorate([
        $.$mol_mem
    ], $mpk_tss_main.prototype, "Summary", null);
    __decorate([
        $.$mol_mem
    ], $mpk_tss_main.prototype, "Software", null);
    __decorate([
        $.$mol_mem
    ], $mpk_tss_main.prototype, "Pereferial", null);
    __decorate([
        $.$mol_mem
    ], $mpk_tss_main.prototype, "Sensors", null);
    __decorate([
        $.$mol_mem
    ], $mpk_tss_main.prototype, "Reports", null);
    __decorate([
        $.$mol_mem
    ], $mpk_tss_main.prototype, "Details_close", null);
    __decorate([
        $.$mol_mem
    ], $mpk_tss_main.prototype, "Details_close_icon", null);
    __decorate([
        $.$mol_mem
    ], $mpk_tss_main.prototype, "Sidebar", null);
    __decorate([
        $.$mol_mem
    ], $mpk_tss_main.prototype, "Logo", null);
    __decorate([
        $.$mol_mem
    ], $mpk_tss_main.prototype, "event_top", null);
    __decorate([
        $.$mol_mem
    ], $mpk_tss_main.prototype, "Login", null);
    __decorate([
        $.$mol_mem
    ], $mpk_tss_main.prototype, "login_submit", null);
    __decorate([
        $.$mol_mem
    ], $mpk_tss_main.prototype, "Menu", null);
    __decorate([
        $.$mol_mem
    ], $mpk_tss_main.prototype, "Foot_content", null);
    __decorate([
        $.$mol_mem
    ], $mpk_tss_main.prototype, "Foot_text", null);
    __decorate([
        $.$mol_mem
    ], $mpk_tss_main.prototype, "Placeholder", null);
    $.$mpk_tss_main = $mpk_tss_main;
})($ || ($ = {}));
(function ($) {
    class $mpk_tss_placeholder extends $.$mol_page {
        /**
         *  ```
         *  attr *
         *  	^
         *  	tabindex null
         *  ```
         **/
        attr() {
            return (Object.assign(Object.assign({}, super.attr()), { "tabindex": null }));
        }
        /**
         *  ```
         *  title \
         *  ```
         **/
        title() {
            return "";
        }
        /**
         *  ```
         *  tools /
         *  ```
         **/
        tools() {
            return [];
        }
        /**
         *  ```
         *  body / <= Image
         *  ```
         **/
        body() {
            return [this.Image()];
        }
        /**
         *  ```
         *  Image $mol_image uri \mpk/tss/placeholder.svg
         *  ```
         **/
        Image() {
            return ((obj) => {
                obj.uri = () => "mpk/tss/placeholder.svg";
                return obj;
            })(new this.$.$mol_image());
        }
    }
    __decorate([
        $.$mol_mem
    ], $mpk_tss_placeholder.prototype, "Image", null);
    $.$mpk_tss_placeholder = $mpk_tss_placeholder;
})($ || ($ = {}));
//tss.view.tree.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mpk_tss_locale extends $.$mol_locale {
            static lang_default() {
                return 'ru';
            }
        }
        __decorate([
            $.$mol_mem
        ], $mpk_tss_locale, "lang_default", null);
        class $mpk_tss extends $.$mpk_tss {
            terminal() {
                return this.$.$mpk_tss_domain_terminal.current();
            }
            title() {
                return super.title().replace('%terminal_number', this.terminal().id());
            }
            terminal_formatted_label() {
                return this.terminal_text().replace('%terminal_number', this.terminal().id());
            }
            get $() {
                return super.$.$mol_ambient({
                    $mpk_tss_domain_terminal: $.$mpk_tss_domain_terminal_mock,
                    $mol_locale: $mpk_tss_locale,
                    $mpk_tss_domain_user: $.$mpk_tss_domain_user_mock,
                    $mpk_tss_pereferial_domain_units: $.$mpk_tss_pereferial_domain_mock_units,
                    $mpk_tss_reports_domain_trains: $.$mpk_tss_reports_domain_mock_trains,
                });
            }
        }
        __decorate([
            $.$mol_atom2_field
        ], $mpk_tss.prototype, "$", null);
        $$.$mpk_tss = $mpk_tss;
        class $mpk_tss_main extends $.$mpk_tss_main {
            Pereferial() {
                const Pereferial = super.Pereferial();
                // see https://github.com/eigenmethod/mol/issues/324
                Pereferial.$ = this.$;
                return Pereferial;
            }
            Reports() {
                const Reports = super.Reports();
                // see https://github.com/eigenmethod/mol/issues/324
                Reports.$ = this.$;
                return Reports;
            }
            copyright() {
                return super.copyright().replace('%year', '' + new Date().getFullYear());
            }
            current_user() {
                return this.$.$mpk_tss_domain_user.current();
            }
            login_submit(next) {
                const form = this.Login();
                const user = this.current_user();
                user.email(form.login());
                user.password(form.password());
                user.login();
            }
            entered() {
                return this.current_user().logged();
            }
            Logged_user() {
                if (!this.entered())
                    return null;
                return this.User_link();
            }
            logout_click() {
                return this.current_user().logout();
            }
            menu_items() {
                return Object.keys(this.menu_pages()).map(id => this.Menu_item(id));
            }
            menu_page_arg(id) {
                return { page: id };
            }
            logged_email() {
                return this.current_user().email();
            }
            menu_page_title(id) {
                return this.menu_pages()[id].title();
            }
            page_id(next) {
                return this.$.$mol_state_arg.value(this.state_key('page'), next) || '';
            }
            sidebar_items() {
                if (!this.entered())
                    return [this.Login()];
                return [this.Menu()];
            }
            pages() {
                if (!this.entered())
                    return [this.Sidebar()];
                const id = this.page_id() || 'summary';
                const page = this.menu_pages()[id];
                const pages = page && page.pages ? page.pages() : [page];
                return [
                    this.Sidebar(),
                    ...pages,
                ];
            }
        }
        __decorate([
            $.$mol_mem
        ], $mpk_tss_main.prototype, "page_id", null);
        $$.$mpk_tss_main = $mpk_tss_main;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//tss.view.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mpk/tss/theme.css", "[mpk_theme=\"$mpk_theme_base\"] , :root {\n\t--mpk_theme_status_bg_error: hsl(0, 50%, 50%);\n\t--mpk_theme_status_bg_warning: hsl(46, 73%, 55%);\n\t--mpk_theme_status_bg_success: hsl(140, 50%, 50%);\n\t--mpk_theme_status_bg_inactive:hsl(225, 2%, 60%);\n\t--mpk_theme_status_bg_unknown: hsl(0, 1%, 60%);\n\n\t--mpk_theme_status_text: var(--mol_theme_text);\n\t--mpk_theme_status_control: var(--mol_theme_field);\n\t/* --mpk_theme_status_text: white; */\n\n\t--mpk_theme_status_text_error: hsl(0, 50%, 50%);\n\t--mpk_theme_status_text_warning: hsl(46, 73%, 55%);\n\t--mpk_theme_status_text_success: hsl(140, 50%, 50%);\n\t--mpk_theme_status_text_inactive:hsl(225, 2%, 60%);\n\t--mpk_theme_status_text_unknown: hsl(0, 1%, 60%);\n}\n");
})($ || ($ = {}));
//theme.css.js.map
;
var $node = $node || {} ; $node[ "/mpk/tss/tss_logo.svg" ] = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIgogICB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIKICAgd2lkdGg9IjI0IgogICBoZWlnaHQ9IjI0IgogICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgIHZlcnNpb249IjEuMSIKICAgaWQ9InN2Zzg5MSIKICAgc29kaXBvZGk6ZG9jbmFtZT0idHNzX2xvZ28uc3ZnIgogICBpbmtzY2FwZTp2ZXJzaW9uPSIwLjkyLjMgKDI0MDU1NDYsIDIwMTgtMDMtMTEpIj4KICA8bWV0YWRhdGEKICAgICBpZD0ibWV0YWRhdGE4OTciPgogICAgPHJkZjpSREY+CiAgICAgIDxjYzpXb3JrCiAgICAgICAgIHJkZjphYm91dD0iIj4KICAgICAgICA8ZGM6Zm9ybWF0PmltYWdlL3N2Zyt4bWw8L2RjOmZvcm1hdD4KICAgICAgICA8ZGM6dHlwZQogICAgICAgICAgIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiIC8+CiAgICAgIDwvY2M6V29yaz4KICAgIDwvcmRmOlJERj4KICA8L21ldGFkYXRhPgogIDxkZWZzCiAgICAgaWQ9ImRlZnM4OTUiIC8+CiAgPHNvZGlwb2RpOm5hbWVkdmlldwogICAgIHBhZ2Vjb2xvcj0iI2ZmZmZmZiIKICAgICBib3JkZXJjb2xvcj0iIzY2NjY2NiIKICAgICBib3JkZXJvcGFjaXR5PSIxIgogICAgIG9iamVjdHRvbGVyYW5jZT0iMTAiCiAgICAgZ3JpZHRvbGVyYW5jZT0iMTAiCiAgICAgZ3VpZGV0b2xlcmFuY2U9IjEwIgogICAgIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwIgogICAgIGlua3NjYXBlOnBhZ2VzaGFkb3c9IjIiCiAgICAgaW5rc2NhcGU6d2luZG93LXdpZHRoPSIxNjAwIgogICAgIGlua3NjYXBlOndpbmRvdy1oZWlnaHQ9Ijg2NyIKICAgICBpZD0ibmFtZWR2aWV3ODkzIgogICAgIHNob3dncmlkPSJmYWxzZSIKICAgICBpbmtzY2FwZTp6b29tPSIyOS4zMzMzMzMiCiAgICAgaW5rc2NhcGU6Y3g9IjEyIgogICAgIGlua3NjYXBlOmN5PSIxMiIKICAgICBpbmtzY2FwZTp3aW5kb3cteD0iMCIKICAgICBpbmtzY2FwZTp3aW5kb3cteT0iMzMiCiAgICAgaW5rc2NhcGU6d2luZG93LW1heGltaXplZD0iMSIKICAgICBpbmtzY2FwZTpjdXJyZW50LWxheWVyPSJzdmc4OTEiIC8+CiAgPHBhdGgKICAgICBkPSJNMTIgMmMtNCAwLTggLjUtOCA0djkuNUM0IDE3LjQzIDUuNTcgMTkgNy41IDE5TDYgMjAuNXYuNWgyLjIzbDItMkgxNGwyIDJoMnYtLjVMMTYuNSAxOWMxLjkzIDAgMy41LTEuNTcgMy41LTMuNVY2YzAtMy41LTMuNTgtNC04LTR6TTcuNSAxN2MtLjgzIDAtMS41LS42Ny0xLjUtMS41UzYuNjcgMTQgNy41IDE0czEuNS42NyAxLjUgMS41UzguMzMgMTcgNy41IDE3em0zLjUtN0g2VjZoNXY0em0yIDBWNmg1djRoLTV6bTMuNSA3Yy0uODMgMC0xLjUtLjY3LTEuNS0xLjVzLjY3LTEuNSAxLjUtMS41IDEuNS42NyAxLjUgMS41LS42NyAxLjUtMS41IDEuNXoiCiAgICAgaWQ9InBhdGg4ODciCiAgICAgc3R5bGU9ImZpbGw6I2UyZTNkYiIgLz4KICA8cGF0aAogICAgIGZpbGw9Im5vbmUiCiAgICAgZD0iTTAgMGgyNHYyNEgwVjB6IgogICAgIGlkPSJwYXRoODg5IiAvPgo8L3N2Zz4K"

;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mpk/tss/tss.view.css", "[mpk_tss_main] * [mol_string] {\n\t/* padding: 0.45rem 1rem; */\n}\n\n[mol_icon] {\n\tstroke: none;\n}\n\n[mpk_tss] {\n\tflex-direction: column;\n\tdisplay: flex;\n}\n\n[mpk_tss_head] {\n\tdisplay: flex;\n\tpadding: 0;\n\tline-height: 2;\n}\n\n[mpk_tss_head] > [mol_button] {\n\tpadding: 0 .5rem;\n}\n\n[mpk_tss_body] {\n\tflex: 1000 1 auto;\n}\n\n[mpk_tss_main_body_content] {\n\theight: 100%;\n}\n\n[mpk_tss_main_placeholder] {\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n}\n\n[mpk_tss_main_foot_content] {\n\tjustify-content: space-between;\n}\n\n[mpk_tss_main_foot_text] {\n\tmax-width: 20rem;\n}\n\n[mpk_tss_main_logo] {\n\tcolor: white;\n\tbox-shadow: none;\n\theight: 2.5rem;\n\talign-self: center;\n\tflex: none;\n}\n\n[mpk_tss_main_sidebar] {\n\tflex: 0 0 auto;\n\tbackground-color: var(--mol_theme_line);\n}\n\n[mpk_tss_main_sidebar_foot] {\n\tbackground-color: inherit;\n\tfont-size: 0.9rem;\n\tcolor: var(--mol_theme_shade);\n}\n\n[mpk_tss_main_menu] {\n\tpadding: .5rem 0 0;\n\tdisplay: flex;\n\tflex-direction: column;\n}\n\n[mpk_tss_main_user_email] {\n\tmargin-right: 0.5rem;\n}\n\n[mpk_tss_main_placeholder] {\n\tfont-size: 1em;\n\tpadding: 0;\n\talign-items: stretch;\n\tbackground: none;\n\tflex: 1000 1000 auto;\n\tposition: relative;\n\tanimation: none !important;\n}\n\n[mpk_tss_placeholder_head] {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-between;\n    flex: 0 0 auto;\n    position: relative;\n    margin: 0;\n    min-height: calc( 1.5em + 1rem );\n    padding: .5rem;\t\n}\n\n[mol_view][mpk_tss_placeholder_body] {\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: space-evenly;\n\talign-items: center;\n\tpadding: 1rem;\n\tbackground-color: rgba(238, 238, 238, 0.199);\n}\n\n[mpk_tss_placeholder_image] {\n\twidth: 25%;\n\tbox-shadow: none;\n\topacity: .25;\n}\n\n[mpk_tss_placeholder_links] {\n\tflex: 0 0 auto;\n\tdisplay: flex;\n\tflex-wrap: wrap;\n}\n");
})($ || ($ = {}));
//tss.view.css.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/section/section.view.css", "[mol_section_head] {\n\tfont-size: 1.5rem;\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: flex-end;\n\tflex-wrap: wrap;\n}\n");
})($ || ($ = {}));
//section.view.css.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_section extends $.$mol_list {
        /**
         *  ```
         *  rows /
         *  	<= Head
         *  	<= Content
         *  ```
         **/
        rows() {
            return [this.Head(), this.Content()];
        }
        /**
         *  ```
         *  Head $mol_view sub <= head
         *  ```
         **/
        Head() {
            return ((obj) => {
                obj.sub = () => this.head();
                return obj;
            })(new this.$.$mol_view());
        }
        /**
         *  ```
         *  head /
         *  ```
         **/
        head() {
            return [];
        }
        /**
         *  ```
         *  Content null
         *  ```
         **/
        Content() {
            return null;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_section.prototype, "Head", null);
    $.$mol_section = $mol_section;
})($ || ($ = {}));
//section.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mpk/tss/summary/section/section.view.css", "[mpk_tss_summary_section] {\n\tmargin-bottom: 1.5rem;\n}\n\n[mpk_tss_summary_section_head] {\n\tmargin-bottom: 1rem;\n}\n");
})($ || ($ = {}));
//section.view.css.js.map
;
"use strict";
var $;
(function ($) {
    class $mpk_tss_summary_section extends $.$mol_section {
    }
    $.$mpk_tss_summary_section = $mpk_tss_summary_section;
})($ || ($ = {}));
//section.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mpk/tss/summary/status/status.css", "[mpk_tss_summary_status_type=\"warning\"] {\n\tbackground-color: var(--mpk_theme_status_bg_warning);\n}\n\n[mpk_tss_summary_status_type=\"error\"] {\n\tbackground-color: var(--mpk_theme_status_bg_error);\n}\n\n[mpk_tss_summary_status_type=\"success\"] {\n\tbackground-color: var(--mpk_theme_status_bg_success);\n}\n\n[mpk_tss_summary_status_type=\"ready\"] {\n\tbackground-color: var(--mpk_theme_status_bg_success);\n}\n\n[mpk_tss_summary_status] {\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tpadding: .1rem .5rem;\n\tcolor: var(--mpk_theme_status_text);\n\tmin-width: 10rem;\n\tborder-radius: var(--mol_skin_round);\n}\n");
})($ || ($ = {}));
//status.css.js.map
;
"use strict";
var $;
(function ($) {
    class $mpk_tss_summary_status extends $.$mol_view {
        /**
         *  ```
         *  title \
         *  ```
         **/
        title() {
            return "";
        }
        /**
         *  ```
         *  statuses *
         *  	warning <= warning
         *  	error <= error
         *  	success <= success
         *  	ready <= ready
         *  ```
         **/
        statuses() {
            return ({
                "warning": this.warning(),
                "error": this.error(),
                "success": this.success(),
                "ready": this.ready(),
            });
        }
        /**
         *  ```
         *  warning @ \Warning
         *  ```
         **/
        warning() {
            return this.$.$mol_locale.text("$mpk_tss_summary_status_warning");
        }
        /**
         *  ```
         *  error @ \Error
         *  ```
         **/
        error() {
            return this.$.$mol_locale.text("$mpk_tss_summary_status_error");
        }
        /**
         *  ```
         *  success @ \Success
         *  ```
         **/
        success() {
            return this.$.$mol_locale.text("$mpk_tss_summary_status_success");
        }
        /**
         *  ```
         *  ready @ \Ready
         *  ```
         **/
        ready() {
            return this.$.$mol_locale.text("$mpk_tss_summary_status_ready");
        }
        /**
         *  ```
         *  sub / <= title
         *  ```
         **/
        sub() {
            return [this.title()];
        }
        /**
         *  ```
         *  attr *
         *  	^
         *  	mpk_tss_summary_status_type <= type
         *  ```
         **/
        attr() {
            return (Object.assign(Object.assign({}, super.attr()), { "mpk_tss_summary_status_type": this.type() }));
        }
        /**
         *  ```
         *  type \success
         *  ```
         **/
        type() {
            return "success";
        }
    }
    $.$mpk_tss_summary_status = $mpk_tss_summary_status;
})($ || ($ = {}));
//status.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mpk_tss_summary_status extends $.$mpk_tss_summary_status {
            title() {
                return this.statuses()[this.type()] || super.type();
            }
        }
        $$.$mpk_tss_summary_status = $mpk_tss_summary_status;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//status.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_icon_tick extends $.$mol_icon {
        /**
         *  ```
         *  path \M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z
         *  ```
         **/
        path() {
            return "M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z";
        }
    }
    $.$mol_icon_tick = $mol_icon_tick;
})($ || ($ = {}));
//tick.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/check/box/box.view.css", "[mol_check_box_icon] {\n\tmargin: .25rem;\n\tborder-radius: var(--mol_skin_round);\n\tbox-shadow: 0 0 0 1px var(--mol_theme_line);\n}\n\n[mol_check]:not([mol_check_checked]) > [mol_check_box_icon] {\n\tfill: transparent;\n}\n\n[mol_check]:not([disabled]) > [mol_check_box_icon] {\n\tbackground: var(--mol_theme_field);\n\tcolor: var(--mol_theme_text);\n}\n");
})($ || ($ = {}));
//box.view.css.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_check_box extends $.$mol_check {
        /**
         *  ```
         *  Icon $mol_icon_tick
         *  ```
         **/
        Icon() {
            return ((obj) => {
                return obj;
            })(new this.$.$mol_icon_tick());
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_check_box.prototype, "Icon", null);
    $.$mol_check_box = $mol_check_box;
})($ || ($ = {}));
//box.view.tree.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_check_expand extends $.$mol_check {
        /**
         *  ```
         *  minimal_height 32
         *  ```
         **/
        minimal_height() {
            return 32;
        }
        /**
         *  ```
         *  Icon $mol_icon_chevron
         *  ```
         **/
        Icon() {
            return ((obj) => {
                return obj;
            })(new this.$.$mol_icon_chevron());
        }
        /**
         *  ```
         *  level 0
         *  ```
         **/
        level() {
            return 0;
        }
        /**
         *  ```
         *  style *
         *  	^
         *  	paddingLeft <= level_style
         *  ```
         **/
        style() {
            return (Object.assign(Object.assign({}, super.style()), { "paddingLeft": this.level_style() }));
        }
        /**
         *  ```
         *  level_style \0px
         *  ```
         **/
        level_style() {
            return "0px";
        }
        /**
         *  ```
         *  checked?val <=> expanded?val
         *  ```
         **/
        checked(val, force) {
            return this.expanded(val);
        }
        /**
         *  ```
         *  expanded?val false
         *  ```
         **/
        expanded(val, force) {
            return (val !== void 0) ? val : false;
        }
        /**
         *  ```
         *  enabled <= expandable
         *  ```
         **/
        enabled() {
            return this.expandable();
        }
        /**
         *  ```
         *  expandable false
         *  ```
         **/
        expandable() {
            return false;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_check_expand.prototype, "Icon", null);
    __decorate([
        $.$mol_mem
    ], $mol_check_expand.prototype, "checked", null);
    __decorate([
        $.$mol_mem
    ], $mol_check_expand.prototype, "expanded", null);
    $.$mol_check_expand = $mol_check_expand;
})($ || ($ = {}));
//expand.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_check_expand extends $.$mol_check_expand {
            level_style() {
                return `${this.level() * 1.25 - 1}rem`;
            }
            expandable() {
                return this.expanded() !== null;
            }
        }
        $$.$mol_check_expand = $mol_check_expand;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//expand.view.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/check/expand/expand.view.css", "[mol_check_expand] {\n}\n\n[mol_check_expand][disabled] [mol_check_expand_icon] {\n\tvisibility: hidden;\n}\n\n[mol_check_expand_icon] {\n\tbox-shadow: none;\n\tmargin: .25rem 0;\n}\n[mol_check_expand]:not([mol_check_checked]) > [mol_check_expand_icon] {\n\ttransform: rotateZ(0deg);\n}\n\n[mol_check_expand][mol_check_checked] > [mol_check_expand_icon] {\n\ttransform: rotateZ(90deg);\n}\n\n[mol_check_expand]:hover > [mol_check_expand_icon] {\n\ttransform: scale(1.25);\n}\n\n[mol_check_expand][mol_check_checked]:hover > [mol_check_expand_icon] {\n\ttransform: rotateZ(90deg) scale(1.25);\n}\n\n[mol_check_box_icon] + div:not(:empty) {\n}\n\n[mol_check_expand_icon] {\n\tvertical-align: text-top;\n}\n\n[mol_check_expand_label] {\n\tmargin-left: 0;\n}\n");
})($ || ($ = {}));
//expand.view.css.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_expander extends $.$mol_list {
        /**
         *  ```
         *  rows /
         *  	<= Label
         *  	<= Content
         *  ```
         **/
        rows() {
            return [this.Label(), this.Content()];
        }
        /**
         *  ```
         *  Label $mol_view sub /
         *  	<= Trigger
         *  	<= Tools
         *  ```
         **/
        Label() {
            return ((obj) => {
                obj.sub = () => [this.Trigger(), this.Tools()];
                return obj;
            })(new this.$.$mol_view());
        }
        /**
         *  ```
         *  Trigger $mol_check_expand
         *  	checked?val <=> expanded?val
         *  	label <= label
         *  ```
         **/
        Trigger() {
            return ((obj) => {
                obj.checked = (val) => this.expanded(val);
                obj.label = () => this.label();
                return obj;
            })(new this.$.$mol_check_expand());
        }
        /**
         *  ```
         *  expanded?val false
         *  ```
         **/
        expanded(val, force) {
            return (val !== void 0) ? val : false;
        }
        /**
         *  ```
         *  label / <= title
         *  ```
         **/
        label() {
            return [this.title()];
        }
        /**
         *  ```
         *  Tools null
         *  ```
         **/
        Tools() {
            return null;
        }
        /**
         *  ```
         *  Content $mol_view sub <= content
         *  ```
         **/
        Content() {
            return ((obj) => {
                obj.sub = () => this.content();
                return obj;
            })(new this.$.$mol_view());
        }
        /**
         *  ```
         *  content /
         *  ```
         **/
        content() {
            return [];
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_expander.prototype, "Label", null);
    __decorate([
        $.$mol_mem
    ], $mol_expander.prototype, "Trigger", null);
    __decorate([
        $.$mol_mem
    ], $mol_expander.prototype, "expanded", null);
    __decorate([
        $.$mol_mem
    ], $mol_expander.prototype, "Content", null);
    $.$mol_expander = $mol_expander;
})($ || ($ = {}));
//expander.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_expander extends $.$mol_expander {
            rows() {
                return [
                    this.Label(),
                    ...this.expanded() ? [this.Content()] : []
                ];
            }
        }
        $$.$mol_expander = $mol_expander;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//expander.view.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/expander/expander.view.css", "[mol_expander] {\n\tflex-direction: column;\n\tflex: 1 1 auto;\n}\n\n[mol_expander_label] {\n\tdisplay: flex;\n\tflex-wrap: wrap;\n}\n\n[mol_expander_trigger] {\n\tflex: auto;\n}\n");
})($ || ($ = {}));
//expander.view.css.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_syntax {
        constructor(lexems) {
            this['lexems()'] = lexems;
        }
        lexems() {
            return this['lexems()'];
        }
        rules() {
            let rules = this['rules()'];
            if (rules)
                return rules;
            rules = [];
            let lexems = this.lexems();
            for (let name in lexems) {
                rules.push({
                    name: name,
                    regExp: lexems[name],
                    size: RegExp('^$|' + lexems[name].source).exec('').length - 1,
                });
            }
            return this['rules()'] = rules;
        }
        regExp() {
            let regExp = this['regExp()'];
            if (regExp)
                return regExp;
            const parts = '(' + this.rules().map(rule => rule.regExp.source).join(')|(') + ')';
            regExp = RegExp(`([^]*?)(?:(${parts})|$(?![^]))`, 'gm');
            return this['regExp()'] = regExp;
        }
        tokenize(text) {
            const tokens = [];
            const rules = this.rules();
            const regExp = this.regExp();
            const regExpSize = RegExp('^$|' + regExp.source).exec('').length - 1;
            let position = 0;
            parsing: while (position < text.length) {
                regExp.lastIndex = position;
                var found = regExp.exec(text);
                if (position === regExp.lastIndex)
                    throw new Error('Empty token');
                position = regExp.lastIndex;
                var prefix = found[1];
                if (prefix) {
                    tokens.push({
                        name: '',
                        found: prefix,
                        chunks: [],
                    });
                }
                var suffix = found[2];
                if (suffix) {
                    let offset = 4;
                    for (let rule of rules) {
                        if (found[offset - 1]) {
                            tokens.push({
                                name: rule.name,
                                found: suffix,
                                chunks: found.slice(offset, offset + rule.size)
                            });
                            continue parsing;
                        }
                        offset += rule.size + 1;
                    }
                    throw new Error('Something wrong');
                }
            }
            return tokens;
        }
    }
    $.$mol_syntax = $mol_syntax;
})($ || ($ = {}));
//syntax.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_syntax_md_flow = new $.$mol_syntax({
        'quote': /^((?:(?:> )(?:[^]*?)$(\r?\n?))+)([\n\r]*)/,
        'header': /^(#+)(\s*)(.*?)$([\n\r]*)/,
        'list': /^((?:(?:\s?[*+-]|\d+\.)\s+(?:[^]*?)$(?:\r?\n?))+)((?:\r?\n)*)/,
        'code': /^(```\s*)(\w*)[\r\n]+([^]*?)^(```)$([\n\r]*)/,
        'code-indent': /^((?:(?:  |\t)(?:[^]*?)$([\n\r]*))+)/,
        'table': /((?:^\|.+?$\r?\n)+)([\n\r]*)/,
        'block': /^(.*?(?:\r?\n.+?)*)$((?:\r?\n)*)/,
    });
    $.$mol_syntax_md_line = new $.$mol_syntax({
        'strong': /\*\*(.+?)\*\*/,
        'emphasis': /\*(?!\s)(.+?)\*/,
        'code3': /```(.+?)```/,
        'code': /`(.+?)`/,
        'strike': /~~(.+?)~~/,
        'text-link': /\[(.*?(?:\[.*?\].*?)*)\]\((.*?)\)/,
        'image-link': /!\[([^\[\]]*?)\]\((.*?)\)/,
    });
    $.$mol_syntax_md_code = new $.$mol_syntax({
        'code-docs': /\/\/\/.*?$/,
        'code-comment-block': /(?:\/\*[^]*?\*\/|\/\+[^]*?\+\/|<![^]*?>)/,
        'code-link': /\w+:\/\/\S*/,
        'code-comment-inline': /\/\/.*?$/,
        'code-string': /(?:".*?"|'.*?'|`.*?`|\/.+?\/[gmi]*|(?:^|[ \t])\\[^\n]*\n)/,
        'code-number': /[+-]?(?:\d*\.)?\d+\w*/,
        'code-call': /\.?\w+(?=\()/,
        'code-field': /(?:\.\w+|[\w-]+\??\s*:(?!\/\/))/,
        'code-keyword': /\b(class|interface|type|function|extends|implements|module|namespace|import|export|include|require|var|let|const|for|do|while|until|in|of|new|if|then|else|switch|case|this|return|async|await|try|catch|break|continue|get|set|public|private|protected|string|boolean|number|null|undefined|true|false|void)\b/,
        'code-global': /[$]\w*/,
        'code-decorator': /@\s*\S+/,
        'code-tag': /<\/?[\w-]+\/?>?/,
        'code-punctuation': /[\-\[\]\{\}\(\)<=>`~!\?@#\$%&\*_\+\\\/\|'";:\.,\^]/,
    });
})($ || ($ = {}));
//md.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/float/float.view.css", "[mol_float] {\n\tposition: sticky;\n\ttop: 0;\n\tleft: 0;\n\tz-index: 1;\n\topacity: 1;\n\ttransition: opacity .25s ease-in;\n\tdisplay: block;\n}\n\n[mol_float_scrolling] {\n\topacity: 0;\n\ttransition-duration: 0;\n}\n");
})($ || ($ = {}));
//float.view.css.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_float extends $.$mol_view {
    }
    $.$mol_float = $mol_float;
})($ || ($ = {}));
//float.view.tree.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_grid extends $.$mol_scroll {
        /**
         *  ```
         *  row_ids /string[]
         *  ```
         **/
        row_ids() {
            return [];
        }
        /**
         *  ```
         *  row_id!index null
         *  ```
         **/
        row_id(index) {
            return null;
        }
        /**
         *  ```
         *  col_ids /
         *  ```
         **/
        col_ids() {
            return [];
        }
        /**
         *  ```
         *  records *
         *  ```
         **/
        records() {
            return ({});
        }
        /**
         *  ```
         *  record!id null
         *  ```
         **/
        record(id) {
            return null;
        }
        /**
         *  ```
         *  hierarchy null
         *  ```
         **/
        hierarchy() {
            return null;
        }
        /**
         *  ```
         *  hierarchy_col \
         *  ```
         **/
        hierarchy_col() {
            return "";
        }
        /**
         *  ```
         *  sub / <= Table
         *  ```
         **/
        sub() {
            return [this.Table()];
        }
        /**
         *  ```
         *  Table $mol_grid_table
         *  	offset <= gap_top
         *  	sub <= rows_visible
         *  ```
         **/
        Table() {
            return ((obj) => {
                obj.offset = () => this.gap_top();
                obj.sub = () => this.rows_visible();
                return obj;
            })(new this.$.$mol_grid_table());
        }
        /**
         *  ```
         *  gap_top 0
         *  ```
         **/
        gap_top() {
            return 0;
        }
        /**
         *  ```
         *  rows_visible /$mol_view
         *  ```
         **/
        rows_visible() {
            return [];
        }
        /**
         *  ```
         *  rows /
         *  ```
         **/
        rows() {
            return [];
        }
        /**
         *  ```
         *  Head $mol_grid_row
         *  	height <= row_height
         *  	cells <= head_cells
         *  ```
         **/
        Head() {
            return ((obj) => {
                obj.height = () => this.row_height();
                obj.cells = () => this.head_cells();
                return obj;
            })(new this.$.$mol_grid_row());
        }
        /**
         *  ```
         *  row_height 40
         *  ```
         **/
        row_height() {
            return 40;
        }
        /**
         *  ```
         *  head_cells /$mol_view
         *  ```
         **/
        head_cells() {
            return [];
        }
        /**
         *  ```
         *  Row!id $mol_grid_row
         *  	height <= row_height
         *  	cells <= cells!id
         *  ```
         **/
        Row(id) {
            return ((obj) => {
                obj.height = () => this.row_height();
                obj.cells = () => this.cells(id);
                return obj;
            })(new this.$.$mol_grid_row());
        }
        /**
         *  ```
         *  cells!id /$mol_view
         *  ```
         **/
        cells(id) {
            return [];
        }
        /**
         *  ```
         *  Cell!id $mol_view
         *  ```
         **/
        Cell(id) {
            return ((obj) => {
                return obj;
            })(new this.$.$mol_view());
        }
        /**
         *  ```
         *  cell!id null
         *  ```
         **/
        cell(id) {
            return null;
        }
        /**
         *  ```
         *  Cell_text!id $mol_grid_cell sub <= cell_content_text!id
         *  ```
         **/
        Cell_text(id) {
            return ((obj) => {
                obj.sub = () => this.cell_content_text(id);
                return obj;
            })(new this.$.$mol_grid_cell());
        }
        /**
         *  ```
         *  cell_content_text!id <= cell_content!id
         *  ```
         **/
        cell_content_text(id) {
            return this.cell_content(id);
        }
        /**
         *  ```
         *  cell_content!id /$mol_view_content
         *  ```
         **/
        cell_content(id) {
            return [];
        }
        /**
         *  ```
         *  Cell_number!id $mol_grid_number sub <= cell_content_number!id
         *  ```
         **/
        Cell_number(id) {
            return ((obj) => {
                obj.sub = () => this.cell_content_number(id);
                return obj;
            })(new this.$.$mol_grid_number());
        }
        /**
         *  ```
         *  cell_content_number!id <= cell_content!id
         *  ```
         **/
        cell_content_number(id) {
            return this.cell_content(id);
        }
        /**
         *  ```
         *  Col_head!id $mol_float
         *  	dom_name \th
         *  	sub <= col_head_content!id
         *  ```
         **/
        Col_head(id) {
            return ((obj) => {
                obj.dom_name = () => "th";
                obj.sub = () => this.col_head_content(id);
                return obj;
            })(new this.$.$mol_float());
        }
        /**
         *  ```
         *  col_head_content!id /$mol_view_content
         *  ```
         **/
        col_head_content(id) {
            return [];
        }
        /**
         *  ```
         *  Cell_branch!id $mol_check_expand
         *  	level <= cell_level!id
         *  	label <= cell_content!id
         *  	expanded?val <=> cell_expanded!id?val
         *  ```
         **/
        Cell_branch(id) {
            return ((obj) => {
                obj.level = () => this.cell_level(id);
                obj.label = () => this.cell_content(id);
                obj.expanded = (val) => this.cell_expanded(id, val);
                return obj;
            })(new this.$.$mol_check_expand());
        }
        /**
         *  ```
         *  cell_level!id 0
         *  ```
         **/
        cell_level(id) {
            return 0;
        }
        /**
         *  ```
         *  cell_expanded!id?val false
         *  ```
         **/
        cell_expanded(id, val, force) {
            return (val !== void 0) ? val : false;
        }
        /**
         *  ```
         *  Cell_content!id / <= Cell_dimmer!id
         *  ```
         **/
        Cell_content(id) {
            return [this.Cell_dimmer(id)];
        }
        /**
         *  ```
         *  Cell_dimmer!id $mol_dimmer
         *  	needle <= needle
         *  	haystack <= cell_value!id
         *  ```
         **/
        Cell_dimmer(id) {
            return ((obj) => {
                obj.needle = () => this.needle();
                obj.haystack = () => this.cell_value(id);
                return obj;
            })(new this.$.$mol_dimmer());
        }
        /**
         *  ```
         *  needle \
         *  ```
         **/
        needle() {
            return "";
        }
        /**
         *  ```
         *  cell_value!id \
         *  ```
         **/
        cell_value(id) {
            return "";
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_grid.prototype, "Table", null);
    __decorate([
        $.$mol_mem
    ], $mol_grid.prototype, "Head", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_grid.prototype, "Row", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_grid.prototype, "Cell", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_grid.prototype, "Cell_text", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_grid.prototype, "Cell_number", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_grid.prototype, "Col_head", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_grid.prototype, "Cell_branch", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_grid.prototype, "cell_expanded", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_grid.prototype, "Cell_dimmer", null);
    $.$mol_grid = $mol_grid;
})($ || ($ = {}));
(function ($) {
    class $mol_grid_table extends $.$mol_view {
        /**
         *  ```
         *  dom_name \table
         *  ```
         **/
        dom_name() {
            return "table";
        }
        /**
         *  ```
         *  style *
         *  	^
         *  	top <= offset
         *  ```
         **/
        style() {
            return (Object.assign(Object.assign({}, super.style()), { "top": this.offset() }));
        }
        /**
         *  ```
         *  offset 0
         *  ```
         **/
        offset() {
            return 0;
        }
    }
    $.$mol_grid_table = $mol_grid_table;
})($ || ($ = {}));
(function ($) {
    class $mol_grid_gap extends $.$mol_view {
        /**
         *  ```
         *  style *
         *  	^
         *  	top <= offset
         *  ```
         **/
        style() {
            return (Object.assign(Object.assign({}, super.style()), { "top": this.offset() }));
        }
        /**
         *  ```
         *  offset 0
         *  ```
         **/
        offset() {
            return 0;
        }
    }
    $.$mol_grid_gap = $mol_grid_gap;
})($ || ($ = {}));
(function ($) {
    class $mol_grid_row extends $.$mol_view {
        /**
         *  ```
         *  dom_name \tr
         *  ```
         **/
        dom_name() {
            return "tr";
        }
        /**
         *  ```
         *  style *
         *  	^
         *  	height <= height
         *  ```
         **/
        style() {
            return (Object.assign(Object.assign({}, super.style()), { "height": this.height() }));
        }
        /**
         *  ```
         *  height 40
         *  ```
         **/
        height() {
            return 40;
        }
        /**
         *  ```
         *  sub <= cells
         *  ```
         **/
        sub() {
            return this.cells();
        }
        /**
         *  ```
         *  cells /$mol_view
         *  ```
         **/
        cells() {
            return [];
        }
    }
    $.$mol_grid_row = $mol_grid_row;
})($ || ($ = {}));
(function ($) {
    class $mol_grid_cell extends $.$mol_view {
        /**
         *  ```
         *  dom_name \td
         *  ```
         **/
        dom_name() {
            return "td";
        }
    }
    $.$mol_grid_cell = $mol_grid_cell;
})($ || ($ = {}));
(function ($) {
    class $mol_grid_number extends $.$mol_grid_cell {
    }
    $.$mol_grid_number = $mol_grid_number;
})($ || ($ = {}));
//grid.view.tree.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_grid extends $.$mol_grid {
            rows_visible() {
                const rows = this.rows();
                const view_window = this.view_window();
                return [
                    this.Head(),
                    ...rows.slice(view_window.top, view_window.bottom),
                ];
            }
            rows_visible_max() {
                return Math.ceil(this.$.$mol_view_visible_height() / this.row_height());
            }
            view_window() {
                const rows = this.rows();
                const count = rows.length;
                const context = this.$$;
                const scrollTop = context.$mol_scroll_top();
                const top = Math.max(0, Math.floor(scrollTop / this.row_height()) - 1);
                const bottom = Math.min(count, top + this.rows_visible_max());
                return { top, bottom, count };
            }
            gap_top() {
                const view_window = this.view_window();
                return view_window.top * this.row_height();
            }
            height() {
                const view_window = this.view_window();
                return view_window.count * this.row_height();
            }
            content_height() {
                return this.rows().length * this.row_height();
            }
            head_cells() {
                return this.col_ids().map(colId => this.Col_head(colId));
            }
            col_head_content(colId) {
                return [colId];
            }
            rows() {
                return this.row_ids().map(id => this.Row(id));
            }
            cells(row_id) {
                return this.col_ids().map(col_id => this.Cell({ row: row_id, col: col_id }));
            }
            col_type(col_id) {
                if (col_id === this.hierarchy_col())
                    return 'branch';
                const rowFirst = this.row_id(0);
                const val = this.record(rowFirst[rowFirst.length - 1])[col_id];
                if (typeof val === 'number')
                    return 'number';
                return 'text';
            }
            Cell(id) {
                switch (this.col_type(id.col).valueOf()) {
                    case 'branch': return this.Cell_branch(id);
                    case 'number': return this.Cell_number(id);
                }
                return this.Cell_text(id);
            }
            cell_content(id) {
                return [this.record(id.row[id.row.length - 1])[id.col]];
            }
            records() {
                return [];
            }
            record(id) {
                return this.records()[id];
            }
            record_ids() {
                return Object.keys(this.records());
            }
            row_id(index) {
                return this.row_ids().slice(index, index + 1).valueOf()[0];
            }
            col_ids() {
                const rowFirst = this.row_id(0);
                if (rowFirst === void 0)
                    return [];
                const record = this.record(rowFirst[rowFirst.length - 1]);
                if (!record)
                    return [];
                return Object.keys(record);
            }
            hierarchy() {
                const hierarchy = {};
                const root = hierarchy[''] = {
                    id: '',
                    parent: null,
                    sub: [],
                };
                this.record_ids().map(id => {
                    root.sub.push(hierarchy[id] = {
                        id,
                        parent: root,
                        sub: [],
                    });
                });
                return hierarchy;
            }
            row_sub_ids(row) {
                return this.hierarchy()[row[row.length - 1]].sub.map(child => row.concat(child.id));
            }
            row_root_id() {
                return [''];
            }
            cell_level(id) {
                return id.row.length - 1;
            }
            row_ids() {
                const next = [];
                const add = (row) => {
                    next.push(row);
                    if (this.row_expanded(row)) {
                        this.row_sub_ids(row).forEach(child => add(child));
                    }
                };
                this.row_sub_ids(this.row_root_id()).forEach(child => add(child));
                return next;
            }
            row_expanded(row_id, next) {
                if (!this.row_sub_ids(row_id).length)
                    return null;
                const key = `row_expanded(${JSON.stringify(row_id)})`;
                const next2 = $.$mol_state_session.value(key, next);
                return (next2 == null) ? this.row_expanded_default(row_id) : next2;
            }
            row_expanded_default(row_id) {
                return row_id.length < 3;
            }
            cell_expanded(id, next) {
                return this.row_expanded(id.row, next);
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_grid.prototype, "rows_visible", null);
        __decorate([
            $.$mol_mem
        ], $mol_grid.prototype, "rows_visible_max", null);
        __decorate([
            $.$mol_mem
        ], $mol_grid.prototype, "view_window", null);
        __decorate([
            $.$mol_mem
        ], $mol_grid.prototype, "head_cells", null);
        __decorate([
            $.$mol_mem
        ], $mol_grid.prototype, "rows", null);
        __decorate([
            $.$mol_mem_key
        ], $mol_grid.prototype, "col_type", null);
        __decorate([
            $.$mol_mem
        ], $mol_grid.prototype, "record_ids", null);
        __decorate([
            $.$mol_mem
        ], $mol_grid.prototype, "hierarchy", null);
        __decorate([
            $.$mol_mem
        ], $mol_grid.prototype, "row_ids", null);
        $$.$mol_grid = $mol_grid;
        class $mol_grid_table extends $.$mol_grid_table {
            get $$() {
                return this.$.$mol_ambient({
                    $mol_scroll_top: () => this.$.$mol_scroll_top() - this.offset(),
                });
            }
        }
        __decorate([
            $.$mol_atom2_field
        ], $mol_grid_table.prototype, "$$", null);
        $$.$mol_grid_table = $mol_grid_table;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//grid.view.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/grid/grid.view.css", "[mol_grid] {\n\tdisplay: block;\n\tflex: 1 1 auto;\n\tposition: relative;\n\tbackground: var(--mol_theme_back);\n}\n\n[mol_grid_gap] {\n\tposition: absolute;\n\tpadding: .1px;\n\ttop: 0;\n\ttransform: translateZ(0);\n}\n\n[mol_grid_table] {\n\tborder-spacing: 0;\n\tdisplay: block; /** prevent full repaint on scroll **/\n\tposition: relative;\n\tbox-shadow: inset 0 0 0 .5px var(--mol_theme_line);\n}\n\n[mol_grid_table] > * {\n\tdisplay: table-row;\n\ttransition: none;\n}\n\n[mol_grid_table] > * > * {\n\tdisplay: table-cell;\n\ttransform: translateZ(0);\n\tpadding: 0 1rem;\n\twhite-space: nowrap;\n\tvertical-align: middle;\n\tbox-shadow: inset 0 0 0 .5px var(--mol_theme_line);\n}\n\n[mol_grid_head] {\n\ttransform: none;\n}\n\n[mol_grid_head] > * {\n\tbackground: var(--mol_theme_back);\n}\n\n[mol_grid_cell_number] {\n\ttext-align: right;\n}\n\n[mol_grid_col_head] {\n\tfont-weight: inherit;\n\ttext-align: inherit;\n}\n\n[mol_grid_cell_dimmer] {\n\tdisplay: inline-block;\n\tvertical-align: inherit;\n}\n");
})($ || ($ = {}));
//grid.view.css.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_text extends $.$mol_list {
        /**
         *  ```
         *  uri_base \
         *  ```
         **/
        uri_base() {
            return "";
        }
        /**
         *  ```
         *  text \
         *  ```
         **/
        text() {
            return "";
        }
        /**
         *  ```
         *  tokens /$mol_syntax_token
         *  ```
         **/
        tokens() {
            return [];
        }
        /**
         *  ```
         *  Quote!id $mol_text text <= quote_text!id
         *  ```
         **/
        Quote(id) {
            return ((obj) => {
                obj.text = () => this.quote_text(id);
                return obj;
            })(new this.$.$mol_text());
        }
        /**
         *  ```
         *  quote_text!id \
         *  ```
         **/
        quote_text(id) {
            return "";
        }
        /**
         *  ```
         *  Row!id $mol_text_row
         *  	sub <= block_content!id
         *  	type <= block_type!id
         *  ```
         **/
        Row(id) {
            return ((obj) => {
                obj.sub = () => this.block_content(id);
                obj.type = () => this.block_type(id);
                return obj;
            })(new this.$.$mol_text_row());
        }
        /**
         *  ```
         *  block_content!id /
         *  ```
         **/
        block_content(id) {
            return [];
        }
        /**
         *  ```
         *  block_type!id \
         *  ```
         **/
        block_type(id) {
            return "";
        }
        /**
         *  ```
         *  Span!id $mol_text_span
         *  ```
         **/
        Span(id) {
            return ((obj) => {
                return obj;
            })(new this.$.$mol_text_span());
        }
        /**
         *  ```
         *  Link!id $mol_text_link
         *  ```
         **/
        Link(id) {
            return ((obj) => {
                return obj;
            })(new this.$.$mol_text_link());
        }
        /**
         *  ```
         *  Image!id $mol_text_image
         *  ```
         **/
        Image(id) {
            return ((obj) => {
                return obj;
            })(new this.$.$mol_text_image());
        }
        /**
         *  ```
         *  Header!id $mol_text_header
         *  	level <= header_level!id
         *  	content <= header_content!id
         *  ```
         **/
        Header(id) {
            return ((obj) => {
                obj.level = () => this.header_level(id);
                obj.content = () => this.header_content(id);
                return obj;
            })(new this.$.$mol_text_header());
        }
        /**
         *  ```
         *  header_level!id 0
         *  ```
         **/
        header_level(id) {
            return 0;
        }
        /**
         *  ```
         *  header_content!id /
         *  ```
         **/
        header_content(id) {
            return [];
        }
        /**
         *  ```
         *  Table!id $mol_grid
         *  	head_cells <= table_head_cells!id
         *  	rows <= table_rows!id
         *  ```
         **/
        Table(id) {
            return ((obj) => {
                obj.head_cells = () => this.table_head_cells(id);
                obj.rows = () => this.table_rows(id);
                return obj;
            })(new this.$.$mol_grid());
        }
        /**
         *  ```
         *  table_head_cells!id /
         *  ```
         **/
        table_head_cells(id) {
            return [];
        }
        /**
         *  ```
         *  table_rows!id /
         *  ```
         **/
        table_rows(id) {
            return [];
        }
        /**
         *  ```
         *  Table_row!id $mol_grid_row cells <= table_cells!id
         *  ```
         **/
        Table_row(id) {
            return ((obj) => {
                obj.cells = () => this.table_cells(id);
                return obj;
            })(new this.$.$mol_grid_row());
        }
        /**
         *  ```
         *  table_cells!id /
         *  ```
         **/
        table_cells(id) {
            return [];
        }
        /**
         *  ```
         *  Table_cell!id $mol_grid_cell sub <= table_cell_content!id
         *  ```
         **/
        Table_cell(id) {
            return ((obj) => {
                obj.sub = () => this.table_cell_content(id);
                return obj;
            })(new this.$.$mol_grid_cell());
        }
        /**
         *  ```
         *  table_cell_content!id /
         *  ```
         **/
        table_cell_content(id) {
            return [];
        }
        /**
         *  ```
         *  Table_cell_head!id $mol_float sub <= table_cell_content!id
         *  ```
         **/
        Table_cell_head(id) {
            return ((obj) => {
                obj.sub = () => this.table_cell_content(id);
                return obj;
            })(new this.$.$mol_float());
        }
    }
    __decorate([
        $.$mol_mem_key
    ], $mol_text.prototype, "Quote", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_text.prototype, "Row", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_text.prototype, "Span", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_text.prototype, "Link", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_text.prototype, "Image", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_text.prototype, "Header", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_text.prototype, "Table", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_text.prototype, "Table_row", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_text.prototype, "Table_cell", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_text.prototype, "Table_cell_head", null);
    $.$mol_text = $mol_text;
})($ || ($ = {}));
(function ($) {
    class $mol_text_row extends $.$mol_view {
        /**
         *  ```
         *  minimal_height 40
         *  ```
         **/
        minimal_height() {
            return 40;
        }
        /**
         *  ```
         *  attr *
         *  	^
         *  	mol_text_type <= type
         *  ```
         **/
        attr() {
            return (Object.assign(Object.assign({}, super.attr()), { "mol_text_type": this.type() }));
        }
        /**
         *  ```
         *  type \
         *  ```
         **/
        type() {
            return "";
        }
    }
    $.$mol_text_row = $mol_text_row;
})($ || ($ = {}));
(function ($) {
    class $mol_text_header extends $.$mol_view {
        /**
         *  ```
         *  dom_name \h
         *  ```
         **/
        dom_name() {
            return "h";
        }
        /**
         *  ```
         *  minimal_height 50
         *  ```
         **/
        minimal_height() {
            return 50;
        }
        /**
         *  ```
         *  attr *
         *  	^
         *  	mol_text_header_level <= level?val
         *  ```
         **/
        attr() {
            return (Object.assign(Object.assign({}, super.attr()), { "mol_text_header_level": this.level() }));
        }
        /**
         *  ```
         *  level?val 0
         *  ```
         **/
        level(val, force) {
            return (val !== void 0) ? val : 0;
        }
        /**
         *  ```
         *  sub <= content
         *  ```
         **/
        sub() {
            return this.content();
        }
        /**
         *  ```
         *  content /
         *  ```
         **/
        content() {
            return [];
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_text_header.prototype, "level", null);
    $.$mol_text_header = $mol_text_header;
})($ || ($ = {}));
(function ($) {
    class $mol_text_span extends $.$mol_view {
        /**
         *  ```
         *  dom_name \span
         *  ```
         **/
        dom_name() {
            return "span";
        }
        /**
         *  ```
         *  attr *
         *  	^
         *  	mol_text_type <= type?val
         *  ```
         **/
        attr() {
            return (Object.assign(Object.assign({}, super.attr()), { "mol_text_type": this.type() }));
        }
        /**
         *  ```
         *  type?val \
         *  ```
         **/
        type(val, force) {
            return (val !== void 0) ? val : "";
        }
        /**
         *  ```
         *  sub <= content?val
         *  ```
         **/
        sub() {
            return this.content();
        }
        /**
         *  ```
         *  content?val /
         *  ```
         **/
        content(val, force) {
            return (val !== void 0) ? val : [];
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_text_span.prototype, "type", null);
    __decorate([
        $.$mol_mem
    ], $mol_text_span.prototype, "content", null);
    $.$mol_text_span = $mol_text_span;
})($ || ($ = {}));
(function ($) {
    class $mol_text_link extends $.$mol_link {
        /**
         *  ```
         *  attr *
         *  	^
         *  	mol_text_type <= type?val
         *  ```
         **/
        attr() {
            return (Object.assign(Object.assign({}, super.attr()), { "mol_text_type": this.type() }));
        }
        /**
         *  ```
         *  type?val \
         *  ```
         **/
        type(val, force) {
            return (val !== void 0) ? val : "";
        }
        /**
         *  ```
         *  uri <= link?val
         *  ```
         **/
        uri() {
            return this.link();
        }
        /**
         *  ```
         *  link?val \
         *  ```
         **/
        link(val, force) {
            return (val !== void 0) ? val : "";
        }
        /**
         *  ```
         *  sub <= content?val
         *  ```
         **/
        sub() {
            return this.content();
        }
        /**
         *  ```
         *  content?val /
         *  ```
         **/
        content(val, force) {
            return (val !== void 0) ? val : [];
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_text_link.prototype, "type", null);
    __decorate([
        $.$mol_mem
    ], $mol_text_link.prototype, "link", null);
    __decorate([
        $.$mol_mem
    ], $mol_text_link.prototype, "content", null);
    $.$mol_text_link = $mol_text_link;
})($ || ($ = {}));
(function ($) {
    class $mol_text_image extends $.$mol_view {
        /**
         *  ```
         *  dom_name \object
         *  ```
         **/
        dom_name() {
            return "object";
        }
        /**
         *  ```
         *  attr *
         *  	^
         *  	allowfullscreen true
         *  	mol_text_type <= type?val
         *  	data <= link?val
         *  ```
         **/
        attr() {
            return (Object.assign(Object.assign({}, super.attr()), { "allowfullscreen": true, "mol_text_type": this.type(), "data": this.link() }));
        }
        /**
         *  ```
         *  type?val \
         *  ```
         **/
        type(val, force) {
            return (val !== void 0) ? val : "";
        }
        /**
         *  ```
         *  link?val \
         *  ```
         **/
        link(val, force) {
            return (val !== void 0) ? val : "";
        }
        /**
         *  ```
         *  sub / <= title?val
         *  ```
         **/
        sub() {
            return [this.title()];
        }
        /**
         *  ```
         *  title?val \
         *  ```
         **/
        title(val, force) {
            return (val !== void 0) ? val : "";
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_text_image.prototype, "type", null);
    __decorate([
        $.$mol_mem
    ], $mol_text_image.prototype, "link", null);
    __decorate([
        $.$mol_mem
    ], $mol_text_image.prototype, "title", null);
    $.$mol_text_image = $mol_text_image;
})($ || ($ = {}));
//text.view.tree.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_text extends $.$mol_text {
            tokens() {
                return this.$.$mol_syntax_md_flow.tokenize(this.text());
            }
            rows() {
                return this.tokens().map((token, index) => {
                    switch (token.name) {
                        case 'table': return this.Table(index);
                        case 'header': return this.Header(index);
                        case 'quote': return this.Quote(index);
                    }
                    return this.Row(index);
                });
            }
            header_level(index) {
                return this.tokens()[index].chunks[0].length;
            }
            header_content(index) {
                return this.text2spans(`${index}`, this.tokens()[index].chunks[2]);
            }
            quote_text(index) {
                return this.tokens()[index].chunks[0].replace(/^> /mg, '');
            }
            block_type(index) {
                return this.tokens()[index].name;
            }
            cell_contents(indexBlock) {
                return this.tokens()[indexBlock].chunks[0]
                    .split(/\r?\n/g)
                    .filter(row => row && !/\|--/.test(row))
                    .map((row, rowId) => {
                    return row.split(/\|/g)
                        .filter(cell => cell)
                        .map((cell, cellId) => cell.trim());
                });
            }
            table_rows(blockId) {
                return this.cell_contents(blockId)
                    .slice(1)
                    .map((row, rowId) => this.Table_row({ block: blockId, row: rowId + 1 }));
            }
            table_head_cells(blockId) {
                return this.cell_contents(blockId)[0]
                    .map((cell, cellId) => this.Table_cell_head({ block: blockId, row: 0, cell: cellId }));
            }
            table_cells(id) {
                return this.cell_contents(id.block)[id.row]
                    .map((cell, cellId) => this.Table_cell({ block: id.block, row: id.row, cell: cellId }));
            }
            table_cell_content(id) {
                return this.text2spans(`${id.block}/${id.row}/${id.cell}`, this.cell_contents(id.block)[id.row][id.cell]);
            }
            uri_base() {
                return $.$mol_dom_context.document.location.href;
            }
            uri_resolve(uri) {
                const url = new URL(uri, this.uri_base());
                return url.toString();
            }
            text2spans(prefix, text) {
                return this.$.$mol_syntax_md_line.tokenize(text).map((token, index) => {
                    const id = `${prefix}/${index}`;
                    switch (token.name) {
                        case 'text-link': {
                            if (/^(\w+script+:)+/.test(token.chunks[1])) {
                                const span = this.Span(id);
                                span.content(this.text2spans(id, token.chunks[0]));
                                return span;
                            }
                            else {
                                const span = this.Link(id);
                                span.type(token.name);
                                span.link(this.uri_resolve(token.chunks[1]));
                                span.content(this.text2spans(id, token.chunks[0]));
                                return span;
                            }
                        }
                        case 'image-link': {
                            const span = this.Image(token.chunks[1]);
                            span.type(token.name);
                            span.link(this.uri_resolve(token.chunks[1]));
                            span.title(token.chunks[0]);
                            return span;
                        }
                        case 'code3':
                        case 'code': {
                            const span = this.Span(id);
                            span.type('code');
                            span.content(this.code2spans(id, token.chunks[0]));
                            return span;
                        }
                    }
                    const span = this.Span(id);
                    span.type(token.name);
                    span.content(token.name
                        ? [].concat.apply([], token.chunks.map((text, index) => this.text2spans(`${id}/${index}`, text)))
                        : [token.found]);
                    return span;
                });
            }
            code2spans(prefix, text) {
                return this.$.$mol_syntax_md_code.tokenize(text).map((token, index) => {
                    const id = `${prefix}/${index}`;
                    const span = this.Span(id);
                    span.type(token.name);
                    switch (token.name) {
                        case 'code-docs': {
                            span.content(this.text2spans(`${id}/${index}`, token.found));
                            return span;
                        }
                        case 'code-string': {
                            span.content([token.found[0], ...this.code2spans(`${id}/${index}`, token.found.slice(1, token.found.length - 1)), token.found[token.found.length - 1]]);
                            return span;
                        }
                        default: {
                            span.content([token.found]);
                            return span;
                        }
                    }
                });
            }
            block_content(indexBlock) {
                const token = this.tokens()[indexBlock];
                switch (token.name) {
                    case 'header': return this.text2spans(`${indexBlock}`, token.chunks[2]);
                    case 'list': return this.text2spans(`${indexBlock}`, token.chunks[0]);
                    case 'code': return this.code2spans(`${indexBlock}`, token.chunks[2]);
                    case 'code-indent': return this.code2spans(`${indexBlock}`, token.chunks[0].replace(/[\n\r]*$/, '\n').replace(/^\t/gm, ''));
                }
                return this.text2spans(`${indexBlock}`, token.chunks[0]);
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_text.prototype, "tokens", null);
        __decorate([
            $.$mol_mem
        ], $mol_text.prototype, "rows", null);
        __decorate([
            $.$mol_mem_key
        ], $mol_text.prototype, "cell_contents", null);
        __decorate([
            $.$mol_mem_key
        ], $mol_text.prototype, "table_rows", null);
        __decorate([
            $.$mol_mem_key
        ], $mol_text.prototype, "table_head_cells", null);
        __decorate([
            $.$mol_mem_key
        ], $mol_text.prototype, "table_cells", null);
        __decorate([
            $.$mol_mem_key
        ], $mol_text.prototype, "table_cell_content", null);
        __decorate([
            $.$mol_fiber.method
        ], $mol_text.prototype, "text2spans", null);
        __decorate([
            $.$mol_fiber.method
        ], $mol_text.prototype, "code2spans", null);
        __decorate([
            $.$mol_mem_key
        ], $mol_text.prototype, "block_content", null);
        $$.$mol_text = $mol_text;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//text.view.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/text/text.view.css", "[mol_text] {\n\tline-height: 1.5;\n\tbox-sizing: border-box;\n\tmax-width: 60rem;\n\tbox-shadow: 0 0 0 1px var(--mol_theme_line);\n\tpadding: .5rem;\n\tborder-radius: var(--mol_skin_round);\n\twhite-space: pre-line;\n\tdisplay: flex;\n\tflex-direction: column;\n\tflex: 0 0 auto;\n\ttab-size: 4;\n}\n\n[mol_text_row] {\n\tmargin: .5rem;\n\toverflow: auto;\n\tmax-width: 100%;\n}\n\n[mol_text_type=\"block\"] {\n}\n\n[mol_text_header] {\n\tdisplay: block;\n\tpadding: .5rem;\n\tfont-weight: 500;\n\tmargin: 0;\n}\n\n[mol_text_header_level=\"1\"] {\n\tfont-size: 1.5em;\n}\n\n[mol_text_header_level=\"2\"] {\n\tfont-size: 1.3em;\n}\n\n[mol_text_header_level=\"3\"] {\n\tfont-size: 1.1em;\n}\n\n[mol_text_header_level=\"4\"] {\n\tfont-size: 1.1em;\n\tfont-style: italic;\n}\n\n[mol_text_header_level=\"5\"] {\n\tfont-size: 1.1em;\n\tfont-weight: normal;\n\tfont-style: italic;\n}\n\n[mol_text_type=\"list-item\"] {\n\tdisplay: list-item;\n}\n\n[mol_text_type=\"list-item\"]:before {\n\tcontent: '•';\n\tmargin-right: 1ch;\n}\n\n[mol_text_table] {\n\tmax-width: 100%;\n\tmax-height: 75vh;\n\toverflow: auto;\n\tmargin: .5rem;\n\tflex-grow: 0;\n}\n\n[mol_text_type=\"code-indent\"] ,\n[mol_text_type=\"code\"] {\n\tfont-family: var(--mol_skin_font_monospace);\n\twhite-space: pre-wrap;\n\tborder-radius: var(--mol_skin_round);\n}\n\n[mol_text_type=\"text-link\"] {\n\tcolor: var(--mol_theme_control);\n\ttext-decoration: none;\n\tpadding: 0;\n}\n\n[mol_text_link]:hover ,\n[mol_text_link]:focus {\n\toutline: none;\n}\n\n[mol_text_image] {\n\tmax-width: 100%;\n\tmax-height: 75vh;\n\tobject-fit: scale-down;\n}\n\n[mol_text_type=\"strong\"] {\n\tfont-weight: bolder;\n}\n\n[mol_text_type=\"emphasis\"] {\n\tfont-style: italic;\n}\n\n[mol_text_type=\"strike\"] {\n\ttext-decoration: line-through;\n\tcolor: var(--mol_theme_shade);\n}\n\n[mol_text_type=\"code-keyword\"] {\n\tcolor: hsl(0, 70%, 60%);\n}\n\n[mol_text_type=\"code-field\"] {\n\tcolor: hsl(300, 70%, 60%);\n}\n\n[mol_text_type=\"code-tag\"] {\n\tcolor: hsl(330, 70%, 60%);\n}\n\n[mol_text_type=\"code-global\"] {\n\tcolor: hsl(210, 80%, 60%);\n}\n\n[mol_text_type=\"code-decorator\"] {\n\tcolor: hsl(180, 40%, 60%);\n}\n\n[mol_text_type=\"code-punctuation\"] {\n\topacity: .5;\n}\n\n[mol_text_type=\"code-string\"] {\n\tcolor: hsl(90, 40%, 50%);\n}\n\n[mol_text_type=\"code-number\"] {\n\tcolor: hsl(60, 70%, 30%);\n}\n\n[mol_text_type=\"code-call\"] {\n\tcolor: hsl(270, 60%, 60%);\n}\n\n[mol_text_type=\"code-link\"] {\n\tcolor: hsl(240, 60%, 60%);\n}\n\n[mol_text_type=\"code-comment-inline\"] ,\n[mol_text_type=\"code-comment-block\"] {\n\topacity: .5;\n}\n\n[mol_text_type=\"code-docs\"] {\n\topacity: .75;\n}\n");
})($ || ($ = {}));
//text.view.css.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mpk/tss/summary/summary.css", "[mpk_tss_summary_body] {\n\tpadding: 0.5rem;\n}\n[mpk_tss_summary_log],\n[mpk_tss_summary_item] {\n\tbackground: white;\n\tbox-shadow: var(--mol_skin_light_outline);\n\tborder-radius: var(--mol_skin_round);\n\tmargin-bottom: 0.5rem;\n\tdisplay: flex;\n\tjustify-content: space-between;\n\tflex-wrap: wrap;\n}\n[mpk_tss_main_summary] {\n\tflex: 1000 0 600px;\n}\n[mpk_tss_summary_item]:last-child {\n\tmargin-bottom: 0;\n}\n\n[mpk_tss_summary_item_title] {\n\tdisplay: flex;\n\talign-items: center;\n\tflex-grow: 1000;\n}\n\n[mpk_tss_summary_all] {\n\tmargin-bottom: 1rem;\n\tmargin-top: 1rem;\n}\n");
})($ || ($ = {}));
//summary.css.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mpk_tss_summary extends $.$mol_page {
        /**
         *  ```
         *  title @ \Summary
         *  ```
         **/
        title() {
            return this.$.$mol_locale.text("$mpk_tss_summary_title");
        }
        /**
         *  ```
         *  minimal_width 600
         *  ```
         **/
        minimal_width() {
            return 600;
        }
        /**
         *  ```
         *  body /
         *  	<= Statuses
         *  	<= Log
         *  ```
         **/
        body() {
            return [this.Statuses(), this.Log()];
        }
        /**
         *  ```
         *  Statuses $mpk_tss_summary_section Content <= Statuses_content
         *  ```
         **/
        Statuses() {
            return ((obj) => {
                obj.Content = () => this.Statuses_content();
                return obj;
            })(new this.$.$mpk_tss_summary_section());
        }
        /**
         *  ```
         *  Statuses_content $mol_view sub /
         *  	<= All
         *  	<= Software
         *  	<= Sensors
         *  	<= Pereferials
         *  ```
         **/
        Statuses_content() {
            return ((obj) => {
                obj.sub = () => [this.All(), this.Software(), this.Sensors(), this.Pereferials()];
                return obj;
            })(new this.$.$mol_view());
        }
        /**
         *  ```
         *  All $mpk_tss_summary_status type \warning
         *  ```
         **/
        All() {
            return ((obj) => {
                obj.type = () => "warning";
                return obj;
            })(new this.$.$mpk_tss_summary_status());
        }
        /**
         *  ```
         *  Software $mpk_tss_summary_item
         *  	title <= software_title
         *  	type \warning
         *  	arg * page \software
         *  ```
         **/
        Software() {
            return ((obj) => {
                obj.title = () => this.software_title();
                obj.type = () => "warning";
                obj.arg = () => ({
                    "page": "software",
                });
                return obj;
            })(new this.$.$mpk_tss_summary_item());
        }
        /**
         *  ```
         *  software_title @ \Software
         *  ```
         **/
        software_title() {
            return this.$.$mol_locale.text("$mpk_tss_summary_software_title");
        }
        /**
         *  ```
         *  Sensors $mpk_tss_summary_item
         *  	title <= sensors_title
         *  	type \ready
         *  	arg * page \sensors
         *  ```
         **/
        Sensors() {
            return ((obj) => {
                obj.title = () => this.sensors_title();
                obj.type = () => "ready";
                obj.arg = () => ({
                    "page": "sensors",
                });
                return obj;
            })(new this.$.$mpk_tss_summary_item());
        }
        /**
         *  ```
         *  sensors_title @ \Sensors
         *  ```
         **/
        sensors_title() {
            return this.$.$mol_locale.text("$mpk_tss_summary_sensors_title");
        }
        /**
         *  ```
         *  Pereferials $mpk_tss_summary_item
         *  	title <= pereferial_title
         *  	type \error
         *  	arg * page \pereferial
         *  ```
         **/
        Pereferials() {
            return ((obj) => {
                obj.title = () => this.pereferial_title();
                obj.type = () => "error";
                obj.arg = () => ({
                    "page": "pereferial",
                });
                return obj;
            })(new this.$.$mpk_tss_summary_item());
        }
        /**
         *  ```
         *  pereferial_title @ \Pereferial
         *  ```
         **/
        pereferial_title() {
            return this.$.$mol_locale.text("$mpk_tss_summary_pereferial_title");
        }
        /**
         *  ```
         *  Log $mol_expander
         *  	title <= log_title
         *  	Content <= Log_content
         *  ```
         **/
        Log() {
            return ((obj) => {
                obj.title = () => this.log_title();
                obj.Content = () => this.Log_content();
                return obj;
            })(new this.$.$mol_expander());
        }
        /**
         *  ```
         *  log_title @ \Show log ...
         *  ```
         **/
        log_title() {
            return this.$.$mol_locale.text("$mpk_tss_summary_log_title");
        }
        /**
         *  ```
         *  Log_content $mol_text text \
         *  	\ Wed 24 Apr 2019 02:33:14 PM MSK: Report was successfully sent
         *  	\ Wed 24 Apr 2019 02:32:24 PM MSK: Connection to SKAT server (10.32.35.11) established
         *  	\ Wed 24 Apr 2019 02:32:09 PM MSK: Connecting to SKAT server (10.32.35.11), attempt 1...
         *  	\ Wed 24 Apr 2019 02:31:49 PM MSK: Violation report prepared to sending
         *  	\ Wed 24 Apr 2019 02:31:45 PM MSK: Violation report successfully created
         *  	\ Wed 24 Apr 2019 02:31:40 PM MSK: Values processing finished. Violation detected
         *  	\ Wed 24 Apr 2019 02:31:35 PM MSK: Values processing finished. Violation detected
         *  	\ Wed 24 Apr 2019 02:30:05 PM MSK: Values processing started
         *  ```
         **/
        Log_content() {
            return ((obj) => {
                obj.text = () => " Wed 24 Apr 2019 02:33:14 PM MSK: Report was successfully sent\n Wed 24 Apr 2019 02:32:24 PM MSK: Connection to SKAT server (10.32.35.11) established\n Wed 24 Apr 2019 02:32:09 PM MSK: Connecting to SKAT server (10.32.35.11), attempt 1...\n Wed 24 Apr 2019 02:31:49 PM MSK: Violation report prepared to sending\n Wed 24 Apr 2019 02:31:45 PM MSK: Violation report successfully created\n Wed 24 Apr 2019 02:31:40 PM MSK: Values processing finished. Violation detected\n Wed 24 Apr 2019 02:31:35 PM MSK: Values processing finished. Violation detected\n Wed 24 Apr 2019 02:30:05 PM MSK: Values processing started";
                return obj;
            })(new this.$.$mol_text());
        }
    }
    __decorate([
        $.$mol_mem
    ], $mpk_tss_summary.prototype, "Statuses", null);
    __decorate([
        $.$mol_mem
    ], $mpk_tss_summary.prototype, "Statuses_content", null);
    __decorate([
        $.$mol_mem
    ], $mpk_tss_summary.prototype, "All", null);
    __decorate([
        $.$mol_mem
    ], $mpk_tss_summary.prototype, "Software", null);
    __decorate([
        $.$mol_mem
    ], $mpk_tss_summary.prototype, "Sensors", null);
    __decorate([
        $.$mol_mem
    ], $mpk_tss_summary.prototype, "Pereferials", null);
    __decorate([
        $.$mol_mem
    ], $mpk_tss_summary.prototype, "Log", null);
    __decorate([
        $.$mol_mem
    ], $mpk_tss_summary.prototype, "Log_content", null);
    $.$mpk_tss_summary = $mpk_tss_summary;
})($ || ($ = {}));
(function ($) {
    class $mpk_tss_summary_item extends $.$mpk_tss_link {
        /**
         *  ```
         *  copy_params / \login
         *  ```
         **/
        copy_params() {
            return ["login"];
        }
        /**
         *  ```
         *  type \
         *  ```
         **/
        type() {
            return "";
        }
        /**
         *  ```
         *  sub /
         *  	<= Title
         *  	<= Status
         *  ```
         **/
        sub() {
            return [this.Title(), this.Status()];
        }
        /**
         *  ```
         *  Title $mol_view sub / <= title
         *  ```
         **/
        Title() {
            return ((obj) => {
                obj.sub = () => [this.title()];
                return obj;
            })(new this.$.$mol_view());
        }
        /**
         *  ```
         *  Status $mpk_tss_summary_status type <= type
         *  ```
         **/
        Status() {
            return ((obj) => {
                obj.type = () => this.type();
                return obj;
            })(new this.$.$mpk_tss_summary_status());
        }
    }
    __decorate([
        $.$mol_mem
    ], $mpk_tss_summary_item.prototype, "Title", null);
    __decorate([
        $.$mol_mem
    ], $mpk_tss_summary_item.prototype, "Status", null);
    $.$mpk_tss_summary_item = $mpk_tss_summary_item;
})($ || ($ = {}));
//summary.view.tree.js.map

//# sourceMappingURL=web.js.map
