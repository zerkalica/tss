"use strict";
function require( path ){ return $node[ path ] };
"use strict"

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	else for (var i = decorators.length - 1; i >= 0; i--) if ((d = decorators[i])) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var $ = ( typeof module === 'object' ) ? ( module['export'+'s'] = globalThis ) : globalThis
$.$$ = $

;

var $node = $node || {}
void function( module ) { var exports = module.exports = this; function require( id ) { return $node[ id.replace( /^.\// , "../" ) ] }; 
;
"use strict";
Error.stackTraceLimit = 50;
var $;
(function ($) {
})($ || ($ = {}));
module.exports = $;
//mam.ts
;

$node[ "../mam.ts" ] = $node[ "../mam.ts" ] = module.exports }.call( {} , {} )
;
"use strict";
var $;
(function ($) {
    $.$mol_ambient_ref = Symbol('$mol_ambient_ref');
    function $mol_ambient(overrides) {
        return Object.setPrototypeOf(overrides, this || $);
    }
    $.$mol_ambient = $mol_ambient;
})($ || ($ = {}));
//mol/ambient/ambient.ts
;
"use strict";
var $;
(function ($) {
    const instances = new WeakSet();
    function $mol_delegate(proto, target) {
        const proxy = new Proxy(proto, {
            get: (_, field) => {
                const obj = target();
                let val = Reflect.get(obj, field);
                if (typeof val === 'function') {
                    val = val.bind(obj);
                }
                return val;
            },
            has: (_, field) => Reflect.has(target(), field),
            set: (_, field, value) => Reflect.set(target(), field, value),
            getOwnPropertyDescriptor: (_, field) => Reflect.getOwnPropertyDescriptor(target(), field),
            ownKeys: () => Reflect.ownKeys(target()),
            getPrototypeOf: () => Reflect.getPrototypeOf(target()),
            setPrototypeOf: (_, donor) => Reflect.setPrototypeOf(target(), donor),
            isExtensible: () => Reflect.isExtensible(target()),
            preventExtensions: () => Reflect.preventExtensions(target()),
            apply: (_, self, args) => Reflect.apply(target(), self, args),
            construct: (_, args, retarget) => Reflect.construct(target(), args, retarget),
            defineProperty: (_, field, descr) => Reflect.defineProperty(target(), field, descr),
            deleteProperty: (_, field) => Reflect.deleteProperty(target(), field),
        });
        instances.add(proxy);
        return proxy;
    }
    $.$mol_delegate = $mol_delegate;
    Reflect.defineProperty($mol_delegate, Symbol.hasInstance, {
        value: (obj) => instances.has(obj),
    });
})($ || ($ = {}));
//mol/delegate/delegate.ts
;
"use strict";
var $;
(function ($) {
    $.$mol_owning_map = new WeakMap();
    function $mol_owning_allow(having) {
        try {
            if (!having)
                return false;
            if (typeof having !== 'object')
                return false;
            if (having instanceof $mol_delegate)
                return false;
            if (typeof having['destructor'] !== 'function')
                return false;
            return true;
        }
        catch {
            return false;
        }
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
//mol/owning/owning.ts
;
"use strict";
var $;
(function ($) {
    function $mol_fail(error) {
        throw error;
    }
    $.$mol_fail = $mol_fail;
})($ || ($ = {}));
//mol/fail/fail.ts
;
"use strict";
var $;
(function ($) {
    function $mol_fail_hidden(error) {
        throw error;
    }
    $.$mol_fail_hidden = $mol_fail_hidden;
})($ || ($ = {}));
//mol/fail/hidden/hidden.ts
;
"use strict";
//mol/type/writable/writable.ts
;
"use strict";
var $;
(function ($) {
    class $mol_object2 {
        static $ = $;
        [$mol_ambient_ref] = null;
        get $() {
            if (this[$mol_ambient_ref])
                return this[$mol_ambient_ref];
            const owner = $mol_owning_get(this);
            return this[$mol_ambient_ref] = owner?.$ || $mol_object2.$;
        }
        set $(next) {
            if (this[$mol_ambient_ref])
                $mol_fail_hidden(new Error('Context already defined'));
            this[$mol_ambient_ref] = next;
        }
        static create(init) {
            const obj = new this;
            if (init)
                init(obj);
            return obj;
        }
        static [Symbol.toPrimitive]() {
            return this.toString();
        }
        static toString() {
            if (Symbol.toStringTag in this)
                return this[Symbol.toStringTag];
            return this.name;
        }
        destructor() { }
        toString() {
            return this[Symbol.toStringTag] || this.constructor.name + '()';
        }
        toJSON() {
            return this.toString();
        }
    }
    $.$mol_object2 = $mol_object2;
})($ || ($ = {}));
//mol/object2/object2.ts
;
"use strict";
var $;
(function ($) {
    class $mol_after_tick extends $mol_object2 {
        task;
        promise;
        cancelled = false;
        constructor(task) {
            super();
            this.task = task;
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
//mol/after/tick/tick.ts
;
"use strict";
var $;
(function ($) {
})($ || ($ = {}));
//mol/dom/context/context.ts
;
"use strict";
var $;
(function ($) {
    $.$mol_dom_context = self;
})($ || ($ = {}));
//mol/dom/context/context.web.ts
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
        const doc = $mol_dom_context.document;
        if (!doc)
            return null;
        el = doc.createElement('style');
        el.id = `$mol_style_attach`;
        doc.head.appendChild(el);
        timer = new $mol_after_tick(() => {
            el.innerHTML = '\n' + all.join('\n\n');
            all = [];
            el = null;
            timer = null;
        });
        return el;
    }
    $.$mol_style_attach = $mol_style_attach;
})($ || ($ = {}));
//mol/style/attach/attach.ts
;
"use strict";
var $;
(function ($) {
    class $mol_decor {
        value;
        constructor(value) {
            this.value = value;
        }
        prefix() { return ''; }
        valueOf() { return this.value; }
        postfix() { return ''; }
        toString() {
            return `${this.prefix()}${this.valueOf()}${this.postfix()}`;
        }
    }
    $.$mol_decor = $mol_decor;
})($ || ($ = {}));
//mol/decor/decor.ts
;
"use strict";
var $;
(function ($) {
    class $mol_style_unit extends $mol_decor {
        literal;
        constructor(value, literal) {
            super(value);
            this.literal = literal;
        }
        postfix() {
            return this.literal;
        }
        static per(value) { return new $mol_style_unit(value, '%'); }
        static px(value) { return new $mol_style_unit(value, 'px'); }
        static mm(value) { return new $mol_style_unit(value, 'mm'); }
        static cm(value) { return new $mol_style_unit(value, 'cm'); }
        static Q(value) { return new $mol_style_unit(value, 'Q'); }
        static in(value) { return new $mol_style_unit(value, 'in'); }
        static pc(value) { return new $mol_style_unit(value, 'pc'); }
        static pt(value) { return new $mol_style_unit(value, 'pt'); }
        static cap(value) { return new $mol_style_unit(value, 'cap'); }
        static ch(value) { return new $mol_style_unit(value, 'ch'); }
        static em(value) { return new $mol_style_unit(value, 'em'); }
        static rem(value) { return new $mol_style_unit(value, 'rem'); }
        static ex(value) { return new $mol_style_unit(value, 'ex'); }
        static ic(value) { return new $mol_style_unit(value, 'ic'); }
        static lh(value) { return new $mol_style_unit(value, 'lh'); }
        static rlh(value) { return new $mol_style_unit(value, 'rlh'); }
        static vh(value) { return new $mol_style_unit(value, 'vh'); }
        static vw(value) { return new $mol_style_unit(value, 'vw'); }
        static vi(value) { return new $mol_style_unit(value, 'vi'); }
        static vb(value) { return new $mol_style_unit(value, 'vb'); }
        static vmin(value) { return new $mol_style_unit(value, 'vmin'); }
        static vmax(value) { return new $mol_style_unit(value, 'vmax'); }
        static deg(value) { return new $mol_style_unit(value, 'deg'); }
        static rad(value) { return new $mol_style_unit(value, 'rad'); }
        static grad(value) { return new $mol_style_unit(value, 'grad'); }
        static turn(value) { return new $mol_style_unit(value, 'turn'); }
        static s(value) { return new $mol_style_unit(value, 's'); }
        static ms(value) { return new $mol_style_unit(value, 'ms'); }
    }
    $.$mol_style_unit = $mol_style_unit;
})($ || ($ = {}));
//mol/style/unit/unit.ts
;
"use strict";
var $;
(function ($) {
    const { per } = $mol_style_unit;
    class $mol_style_func extends $mol_decor {
        name;
        constructor(name, value) {
            super(value);
            this.name = name;
        }
        prefix() { return this.name + '('; }
        postfix() { return ')'; }
        static calc(value) {
            return new $mol_style_func('calc', value);
        }
        static vary(name) {
            return new $mol_style_func('var', name);
        }
        static url(href) {
            return new $mol_style_func('url', JSON.stringify(href));
        }
        static hsla(hue, saturation, lightness, alpha) {
            return new $mol_style_func('hsla', [hue, per(saturation), per(lightness), alpha]);
        }
        static clamp(min, mid, max) {
            return new $mol_style_func('clamp', [min, mid, max]);
        }
        static rgba(red, green, blue, alpha) {
            return new $mol_style_func('rgba', [red, green, blue, alpha]);
        }
        static scale(zoom) {
            return new $mol_style_func('scale', [zoom]);
        }
    }
    $.$mol_style_func = $mol_style_func;
})($ || ($ = {}));
//mol/style/func/func.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/theme/theme.css", ":root {\n\t--mol_theme_hue: 210deg;\n\t--mol_theme_luma: -1;\n\t--mol_theme_satur: 1;\n\t--mol_theme_image: none;\n}\n\n[mol_theme] {\n\tcolor: var(--mol_theme_text);\n\tfill: var(--mol_theme_text);\n}\n:where([mol_theme]) {\n\tbackground-color: var(--mol_theme_back);\n}\n\t\n:root, [mol_theme] {\n\t--mol_theme_back: hsl( var(--mol_theme_hue), calc( var(--mol_theme_satur) * 20% ), calc( 55% + 45% * var(--mol_theme_luma) ) );\n\t--mol_theme_text: hsl( var(--mol_theme_hue), 0%, calc( 40% - 40% * var(--mol_theme_luma) ) );\n\t--mol_theme_field: hsl( var(--mol_theme_hue), calc( var(--mol_theme_satur) * 50% ), calc( 54% + 46% * var(--mol_theme_luma) ), .25 );\n\t\n\t--mol_theme_card: hsl( var(--mol_theme_hue), calc( var(--mol_theme_satur) * 50% ), calc( 55% + 35% * var(--mol_theme_luma) ), .25 );\n\t--mol_theme_hover: hsl( var(--mol_theme_hue), 0%, 50%, .1 );\n\t--mol_theme_line: hsl( var(--mol_theme_hue), 0%, 50%, .2 );\n\t--mol_theme_shade: hsl( var(--mol_theme_hue), 0%, 50%, 1 );\n\t\n\t--mol_theme_control: hsl( var(--mol_theme_hue), 50%, calc( 50% - 10% * var(--mol_theme_luma) ) );\n\t--mol_theme_current: hsl( calc( var(--mol_theme_hue) - 90deg ), 50%, calc( 50% - 10% * var(--mol_theme_luma) ) );\n\t--mol_theme_special: hsl( calc( var(--mol_theme_hue) + 90deg ), 50%, calc( 50% - 10% * var(--mol_theme_luma) ) );\n\t--mol_theme_focus: hsl( calc( var(--mol_theme_hue) + 180deg ), 100%, calc( 55% - 10% * var(--mol_theme_luma) ) );\n\t\n}\n\n[mol_theme=\"$mol_theme_light\"] {\n\t--mol_theme_luma: 1;\n\t--mol_theme_image: none;\n}\n\n[mol_theme=\"$mol_theme_dark\"] {\n\t--mol_theme_luma: -1;\n\t--mol_theme_image: invert(1) hue-rotate( 180deg );\n}\n\n[mol_theme=\"$mol_theme_base\"] {\n\t--mol_theme_luma: -2;\n\t--mol_theme_back: hsl( var(--mol_theme_hue), 50%, 40% );\n\t--mol_theme_hover: hsl( var(--mol_theme_hue), 60%, 30% );\n\t--mol_theme_current: hsl( var(--mol_theme_hue), 100%, 20% );\n}\n\n[mol_theme=\"$mol_theme_current\"] {\n\tbackground-color: var(--mol_theme_back);\n\t--mol_theme_back: hsl( calc( var(--mol_theme_hue) - 90deg ), 50%, calc( 50% + 30% * var(--mol_theme_luma) ) );\n}\n\n[mol_theme=\"$mol_theme_special\"] {\n\t--mol_theme_card: hsl( calc( var(--mol_theme_hue) + 90deg ), 50%, calc( 55% + 35% * var(--mol_theme_luma) ), .25 );\n}\n\n[mol_theme=\"$mol_theme_accent\"] {\n\tbackground-color: var(--mol_theme_back);\n\t--mol_theme_luma: -2;\n\t--mol_theme_back: hsl( calc( var(--mol_theme_hue) + 180deg ), 90%, 50% );\n\t--mol_theme_hover: hsl( calc( var(--mol_theme_hue) + 180deg ), 80%, 35% );\n}\n\n[mol_theme=\"$mol_theme_accent\"] [mol_theme=\"$mol_theme_accent\"] {\n\t--mol_theme_back: black;\n}\n");
})($ || ($ = {}));
//mol/theme/-css/theme.css.ts
;
"use strict";
var $;
(function ($) {
    const { vary } = $mol_style_func;
    $.$mol_theme = {
        back: vary('--mol_theme_back'),
        hover: vary('--mol_theme_hover'),
        card: vary('--mol_theme_card'),
        current: vary('--mol_theme_current'),
        special: vary('--mol_theme_special'),
        text: vary('--mol_theme_text'),
        control: vary('--mol_theme_control'),
        shade: vary('--mol_theme_shade'),
        line: vary('--mol_theme_line'),
        focus: vary('--mol_theme_focus'),
        field: vary('--mol_theme_field'),
        image: vary('--mol_theme_image'),
    };
})($ || ($ = {}));
//mol/theme/theme.ts
;
"use strict";
var $;
(function ($) {
    const blacklist = new Set([
        '//cse.google.com/adsense/search/async-ads.js'
    ]);
    function $mol_offline() {
        if (typeof window === 'undefined') {
            self.addEventListener('install', (event) => {
                self['skipWaiting']();
            });
            self.addEventListener('activate', (event) => {
                caches.delete('v1');
                caches.delete('$mol_offline');
                self['clients'].claim();
                console.info('$mol_offline activated');
            });
            self.addEventListener('fetch', (event) => {
                if (blacklist.has(event.request.url.replace(/^https?:/, ''))) {
                    return event.respondWith(new Response(null, {
                        status: 418,
                        statusText: 'Blocked'
                    }));
                }
                if (event.request.method !== 'GET') {
                    return event.respondWith(fetch(event.request));
                }
                const fresh = fetch(event.request).then(response => {
                    event.waitUntil(caches.open('$mol_offline').then(cache => cache.put(event.request, response)));
                    return response.clone();
                });
                event.waitUntil(fresh);
                event.respondWith(caches.match(event.request).then(response => response || fresh));
            });
            self.addEventListener('beforeinstallprompt', (event) => {
                console.log(event);
                event.prompt();
            });
        }
        else if (location.protocol !== 'https:' && location.hostname !== 'localhost') {
            console.warn('HTTPS or localhost is required for service workers.');
        }
        else if (!navigator.serviceWorker) {
            console.warn('Service Worker is not supported.');
        }
        else {
            navigator.serviceWorker.register('web.js');
        }
    }
    $.$mol_offline = $mol_offline;
})($ || ($ = {}));
//mol/offline/offline.web.ts
;
"use strict";
var $;
(function ($) {
    $mol_offline();
})($ || ($ = {}));
//mol/offline/install/install.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/gap/gap.css", ":root {\n\t--mol_gap_block: .75rem;\n\t--mol_gap_text: .5rem .75rem;\n\t--mol_gap_round: .25rem;\n\t--mol_gap_space: .25rem;\n\t--mol_gap_blur: .5rem;\n}\n");
})($ || ($ = {}));
//mol/gap/-css/gap.css.ts
;
"use strict";
var $;
(function ($) {
    const { vary } = $mol_style_func;
    $.$mol_gap = {
        block: vary('--mol_gap_block'),
        text: vary('--mol_gap_text'),
        round: vary('--mol_gap_round'),
        space: vary('--mol_gap_space'),
        blur: vary('--mol_gap_blur'),
    };
})($ || ($ = {}));
//mol/gap/gap.ts
;
"use strict";
var $;
(function ($_1) {
    let $$;
    (function ($$) {
        let $;
    })($$ = $_1.$$ || ($_1.$$ = {}));
    $_1.$mol_object_field = Symbol('$mol_object_field');
    class $mol_object extends $mol_object2 {
        static make(config) {
            return super.create(obj => {
                for (let key in config)
                    obj[key] = config[key];
            });
        }
    }
    $_1.$mol_object = $mol_object;
})($ || ($ = {}));
//mol/object/object.ts
;
"use strict";
var $;
(function ($) {
    let $mol_wire_cursor;
    (function ($mol_wire_cursor) {
        $mol_wire_cursor[$mol_wire_cursor["stale"] = -1] = "stale";
        $mol_wire_cursor[$mol_wire_cursor["doubt"] = -2] = "doubt";
        $mol_wire_cursor[$mol_wire_cursor["fresh"] = -3] = "fresh";
        $mol_wire_cursor[$mol_wire_cursor["final"] = -4] = "final";
    })($mol_wire_cursor = $.$mol_wire_cursor || ($.$mol_wire_cursor = {}));
})($ || ($ = {}));
//mol/wire/cursor/cursor.ts
;
"use strict";
var $;
(function ($) {
    class $mol_wire_pub extends Object {
        data = [];
        static get [Symbol.species]() {
            return Array;
        }
        sub_from = 0;
        get sub_list() {
            const res = [];
            for (let i = this.sub_from; i < this.data.length; i += 2) {
                res.push(this.data[i]);
            }
            return res;
        }
        get sub_empty() {
            return this.sub_from === this.data.length;
        }
        sub_on(sub, pub_pos) {
            const pos = this.data.length;
            this.data.push(sub, pub_pos);
            return pos;
        }
        sub_off(sub_pos) {
            if (!(sub_pos < this.data.length)) {
                $mol_fail(new Error(`Wrong pos ${sub_pos}`));
            }
            const end = this.data.length - 2;
            if (sub_pos !== end) {
                this.peer_move(end, sub_pos);
            }
            this.data.pop();
            this.data.pop();
            if (this.data.length === this.sub_from)
                this.reap();
        }
        reap() { }
        promote() {
            $mol_wire_auto()?.track_next(this);
        }
        fresh() { }
        complete() { }
        emit(quant = $mol_wire_cursor.stale) {
            for (let i = this.sub_from; i < this.data.length; i += 2) {
                ;
                this.data[i].absorb(quant);
            }
        }
        peer_move(from_pos, to_pos) {
            const peer = this.data[from_pos];
            const self_pos = this.data[from_pos + 1];
            this.data[to_pos] = peer;
            this.data[to_pos + 1] = self_pos;
            peer.peer_repos(self_pos, to_pos);
        }
        peer_repos(peer_pos, self_pos) {
            this.data[peer_pos + 1] = self_pos;
        }
    }
    $.$mol_wire_pub = $mol_wire_pub;
})($ || ($ = {}));
//mol/wire/pub/pub.ts
;
"use strict";
//mol/wire/sub/sub.ts
;
"use strict";
var $;
(function ($) {
    let auto = null;
    function $mol_wire_auto(next = auto) {
        return auto = next;
    }
    $.$mol_wire_auto = $mol_wire_auto;
    $.$mol_wire_affected = [];
})($ || ($ = {}));
//mol/wire/wire.ts
;
"use strict";
var $;
(function ($) {
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
            if (typeof val === 'function') {
                return $mol_dev_format_native(val);
            }
            return null;
        },
        hasBody: val => val[$.$mol_dev_format_body],
        body: val => val[$.$mol_dev_format_body](),
    });
    function $mol_dev_format_native(obj) {
        if (typeof obj === 'undefined')
            return $.$mol_dev_format_shade('undefined');
        if (typeof obj !== 'object' && typeof obj !== 'function')
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
    function $mol_dev_format_span(style, ...content) {
        return $mol_dev_format_element('span', {
            'vertical-align': '8%',
            ...style,
        }, ...content);
    }
    $.$mol_dev_format_span = $mol_dev_format_span;
    $.$mol_dev_format_div = $mol_dev_format_element.bind(null, 'div');
    $.$mol_dev_format_ol = $mol_dev_format_element.bind(null, 'ol');
    $.$mol_dev_format_li = $mol_dev_format_element.bind(null, 'li');
    $.$mol_dev_format_table = $mol_dev_format_element.bind(null, 'table');
    $.$mol_dev_format_tr = $mol_dev_format_element.bind(null, 'tr');
    $.$mol_dev_format_td = $mol_dev_format_element.bind(null, 'td');
    $.$mol_dev_format_accent = $mol_dev_format_span.bind(null, {
        'color': 'magenta',
    });
    $.$mol_dev_format_strong = $mol_dev_format_span.bind(null, {
        'font-weight': 'bold',
    });
    $.$mol_dev_format_string = $mol_dev_format_span.bind(null, {
        'color': 'green',
    });
    $.$mol_dev_format_shade = $mol_dev_format_span.bind(null, {
        'color': 'gray',
    });
    $.$mol_dev_format_indent = $.$mol_dev_format_div.bind(null, {
        'margin-left': '13px'
    });
})($ || ($ = {}));
//mol/dev/format/format.ts
;
"use strict";
var $;
(function ($) {
    class $mol_wire_pub_sub extends $mol_wire_pub {
        pub_from = 0;
        cursor = $mol_wire_cursor.stale;
        get pub_list() {
            const res = [];
            const max = this.cursor >= 0 ? this.cursor : this.sub_from;
            for (let i = this.pub_from; i < max; i += 2) {
                if (this.data[i])
                    res.push(this.data[i]);
            }
            return res;
        }
        track_on() {
            this.cursor = this.pub_from;
            const sub = $mol_wire_auto();
            $mol_wire_auto(this);
            return sub;
        }
        promote() {
            if (this.cursor >= this.pub_from) {
                $mol_fail(new Error('Circular subscription'));
            }
            super.promote();
        }
        track_next(pub) {
            if (this.cursor < 0)
                $mol_fail(new Error('Promo to non begun sub'));
            if (this.cursor < this.sub_from) {
                const next = this.data[this.cursor];
                if (pub === undefined)
                    return next ?? null;
                if (next === pub) {
                    this.cursor += 2;
                    return next;
                }
                if (next) {
                    if (this.sub_from < this.data.length) {
                        this.peer_move(this.sub_from, this.data.length);
                    }
                    this.peer_move(this.cursor, this.sub_from);
                    this.sub_from += 2;
                }
            }
            else {
                if (pub === undefined)
                    return null;
                if (this.sub_from < this.data.length) {
                    this.peer_move(this.sub_from, this.data.length);
                }
                this.sub_from += 2;
            }
            this.data[this.cursor] = pub;
            this.data[this.cursor + 1] = pub.sub_on(this, this.cursor);
            this.cursor += 2;
            return pub;
        }
        track_off(sub) {
            $mol_wire_auto(sub);
            if (this.cursor < 0) {
                $mol_fail(new Error('End of non begun sub'));
            }
            for (let cursor = this.pub_from; cursor < this.cursor; cursor += 2) {
                const pub = this.data[cursor];
                pub.fresh();
            }
            this.cursor = $mol_wire_cursor.fresh;
        }
        pub_off(sub_pos) {
            this.data[sub_pos] = undefined;
            this.data[sub_pos + 1] = undefined;
        }
        destructor() {
            for (let cursor = this.data.length - 2; cursor >= this.sub_from; cursor -= 2) {
                const sub = this.data[cursor];
                const pos = this.data[cursor + 1];
                sub.pub_off(pos);
                this.data.pop();
                this.data.pop();
            }
            this.cursor = this.pub_from;
            this.track_cut();
            this.cursor = $mol_wire_cursor.final;
        }
        track_cut() {
            if (this.cursor < this.pub_from) {
                $mol_fail(new Error('Cut of non begun sub'));
            }
            let tail = 0;
            for (let cursor = this.cursor; cursor < this.sub_from; cursor += 2) {
                const pub = this.data[cursor];
                pub?.sub_off(this.data[cursor + 1]);
                if (this.sub_from < this.data.length) {
                    this.peer_move(this.data.length - 2, cursor);
                    this.data.pop();
                    this.data.pop();
                }
                else {
                    ++tail;
                }
            }
            for (; tail; --tail) {
                this.data.pop();
                this.data.pop();
            }
            this.sub_from = this.cursor;
        }
        complete() { }
        complete_pubs() {
            const limit = this.cursor < 0 ? this.sub_from : this.cursor;
            for (let cursor = this.pub_from; cursor < limit; cursor += 2) {
                const pub = this.data[cursor];
                pub?.complete();
            }
        }
        absorb(quant = $mol_wire_cursor.stale) {
            if (this.cursor === $mol_wire_cursor.final)
                return;
            if (this.cursor >= quant)
                return;
            this.cursor = quant;
            this.emit($mol_wire_cursor.doubt);
        }
        [$mol_dev_format_head]() {
            return $mol_dev_format_native(this);
        }
        get pub_empty() {
            return this.sub_from === this.pub_from;
        }
    }
    $.$mol_wire_pub_sub = $mol_wire_pub_sub;
})($ || ($ = {}));
//mol/wire/pub/sub/sub.ts
;
"use strict";
var $;
(function ($) {
    class $mol_after_frame extends $mol_object2 {
        task;
        static _promise = null;
        static get promise() {
            if (this._promise)
                return this._promise;
            return this._promise = new Promise(done => {
                const complete = () => {
                    this._promise = null;
                    done();
                };
                if (typeof requestAnimationFrame === 'function') {
                    requestAnimationFrame(complete);
                }
                else {
                    setTimeout(complete, 16);
                }
            });
        }
        cancelled = false;
        promise;
        constructor(task) {
            super();
            this.task = task;
            this.promise = $mol_after_frame.promise.then(() => {
                if (this.cancelled)
                    return;
                task();
            });
        }
        destructor() {
            this.cancelled = true;
        }
    }
    $.$mol_after_frame = $mol_after_frame;
})($ || ($ = {}));
//mol/after/frame/frame.web.ts
;
"use strict";
var $;
(function ($) {
    const handled = new WeakSet();
    class $mol_wire_fiber extends $mol_wire_pub_sub {
        task;
        host;
        static warm = true;
        static planning = new Set();
        static reaping = new Set();
        static plan_task = null;
        static plan() {
            if (this.plan_task)
                return;
            this.plan_task = new $mol_after_frame(() => {
                try {
                    this.sync();
                }
                finally {
                    $mol_wire_fiber.plan_task = null;
                }
            });
        }
        static sync() {
            while (this.planning.size) {
                for (const fiber of this.planning) {
                    this.planning.delete(fiber);
                    if (fiber.cursor >= 0)
                        continue;
                    if (fiber.cursor === $mol_wire_cursor.final)
                        continue;
                    fiber.fresh();
                }
            }
            while (this.reaping.size) {
                const fibers = this.reaping;
                this.reaping = new Set;
                for (const fiber of fibers) {
                    if (!fiber.sub_empty)
                        continue;
                    fiber.destructor();
                }
            }
        }
        cache = undefined;
        get args() {
            return this.data.slice(0, this.pub_from);
        }
        result() {
            if (this.cache instanceof Promise)
                return;
            if (this.cache instanceof Error)
                return;
            return this.cache;
        }
        field() {
            return this.task.name + '()';
        }
        constructor(id, task, host, args) {
            super();
            this.task = task;
            this.host = host;
            if (args)
                this.data.push(...args);
            this.pub_from = this.sub_from = args?.length ?? 0;
            this[Symbol.toStringTag] = id;
        }
        plan() {
            $mol_wire_fiber.planning.add(this);
            $mol_wire_fiber.plan();
        }
        reap() {
            $mol_wire_fiber.reaping.add(this);
            $mol_wire_fiber.plan();
        }
        toString() {
            return this[Symbol.toStringTag];
        }
        toJSON() {
            return this[Symbol.toStringTag];
        }
        [$mol_dev_format_head]() {
            const cursor = {
                [$mol_wire_cursor.stale]: '🔴',
                [$mol_wire_cursor.doubt]: '🟡',
                [$mol_wire_cursor.fresh]: '🟢',
                [$mol_wire_cursor.final]: '🔵',
            }[this.cursor] ?? this.cursor.toString();
            return $mol_dev_format_div({}, $mol_dev_format_native(this), $mol_dev_format_shade(cursor + ' '), $mol_dev_format_auto(this.cache));
        }
        get $() {
            return (this.host ?? this.task)['$'];
        }
        emit(quant = $mol_wire_cursor.stale) {
            if (this.sub_empty)
                this.plan();
            else
                super.emit(quant);
        }
        fresh() {
            if (this.cursor === $mol_wire_cursor.fresh)
                return;
            if (this.cursor === $mol_wire_cursor.final)
                return;
            check: if (this.cursor === $mol_wire_cursor.doubt) {
                for (let i = this.pub_from; i < this.sub_from; i += 2) {
                    ;
                    this.data[i]?.fresh();
                    if (this.cursor !== $mol_wire_cursor.doubt)
                        break check;
                }
                this.cursor = $mol_wire_cursor.fresh;
                return;
            }
            const bu = this.track_on();
            let result;
            try {
                switch (this.pub_from) {
                    case 0:
                        result = this.task.call(this.host);
                        break;
                    case 1:
                        result = this.task.call(this.host, this.data[0]);
                        break;
                    default:
                        result = this.task.call(this.host, ...this.args);
                        break;
                }
                if (result instanceof Promise) {
                    const put = (res) => {
                        if (this.cache === result)
                            this.put(res);
                        return res;
                    };
                    result = Object.assign(result.then(put, put), {
                        destructor: result['destructor'] ?? (() => { })
                    });
                    handled.add(result);
                }
            }
            catch (error) {
                if (error instanceof Error || error instanceof Promise) {
                    result = error;
                }
                else {
                    result = new Error(String(error), { cause: error });
                }
                if (result instanceof Promise && !handled.has(result)) {
                    result = Object.assign(result.finally(() => {
                        if (this.cache === result)
                            this.absorb();
                    }), {
                        destructor: result['destructor'] ?? (() => { })
                    });
                    handled.add(result);
                }
            }
            if (!(result instanceof Promise)) {
                this.track_cut();
            }
            this.track_off(bu);
            this.put(result);
        }
        refresh() {
            this.cursor = $mol_wire_cursor.stale;
            this.fresh();
        }
        sync() {
            if (!$mol_wire_fiber.warm) {
                return this.result();
            }
            this.promote();
            this.fresh();
            if (this.cache instanceof Error) {
                return $mol_fail_hidden(this.cache);
            }
            if (this.cache instanceof Promise) {
                return $mol_fail_hidden(this.cache);
            }
            return this.cache;
        }
        async async() {
            while (true) {
                this.fresh();
                if (this.cache instanceof Error) {
                    $mol_fail_hidden(this.cache);
                }
                if (!(this.cache instanceof Promise))
                    return this.cache;
                await this.cache;
                if (this.cursor === $mol_wire_cursor.final) {
                    await new Promise(() => { });
                }
            }
        }
    }
    $.$mol_wire_fiber = $mol_wire_fiber;
})($ || ($ = {}));
//mol/wire/fiber/fiber.ts
;
"use strict";
var $;
(function ($) {
    const named = new WeakSet();
    function $mol_func_name(func) {
        let name = func.name;
        if (name?.length > 1)
            return name;
        if (named.has(func))
            return name;
        for (let key in this) {
            try {
                if (this[key] !== func)
                    continue;
                name = key;
                Object.defineProperty(func, 'name', { value: name });
                break;
            }
            catch { }
        }
        named.add(func);
        return name;
    }
    $.$mol_func_name = $mol_func_name;
    function $mol_func_name_from(target, source) {
        Object.defineProperty(target, 'name', { value: source.name });
        return target;
    }
    $.$mol_func_name_from = $mol_func_name_from;
})($ || ($ = {}));
//mol/func/name/name.ts
;
"use strict";
var $;
(function ($) {
    function $mol_guid(length = 8, exists = () => false) {
        for (;;) {
            let id = Math.random().toString(36).substring(2, length + 2).toUpperCase();
            if (exists(id))
                continue;
            return id;
        }
    }
    $.$mol_guid = $mol_guid;
})($ || ($ = {}));
//mol/guid/guid.ts
;
"use strict";
var $;
(function ($) {
    $.$mol_key_store = new WeakMap();
    function $mol_key(value) {
        if (!value)
            return JSON.stringify(value);
        if (typeof value !== 'object' && typeof value !== 'function')
            return JSON.stringify(value);
        return JSON.stringify(value, (field, value) => {
            if (!value)
                return value;
            if (typeof value !== 'object' && typeof value !== 'function')
                return value;
            if (Array.isArray(value))
                return value;
            const proto = Reflect.getPrototypeOf(value);
            if (!proto)
                return value;
            if (Reflect.getPrototypeOf(proto) === null)
                return value;
            if ('toJSON' in value)
                return value;
            if (value instanceof RegExp)
                return value.toString();
            let key = $.$mol_key_store.get(value);
            if (key)
                return key;
            key = $mol_guid();
            $.$mol_key_store.set(value, key);
            return key;
        });
    }
    $.$mol_key = $mol_key;
})($ || ($ = {}));
//mol/key/key.ts
;
"use strict";
var $;
(function ($) {
    $.$mol_compare_deep_cache = new WeakMap();
    function $mol_compare_deep(left, right) {
        if (Object.is(left, right))
            return true;
        if (left === null)
            return false;
        if (right === null)
            return false;
        if (typeof left !== 'object')
            return false;
        if (typeof right !== 'object')
            return false;
        const left_proto = Reflect.getPrototypeOf(left);
        const right_proto = Reflect.getPrototypeOf(right);
        if (left_proto !== right_proto)
            return false;
        if (left instanceof Boolean)
            return Object.is(left.valueOf(), right['valueOf']());
        if (left instanceof Number)
            return Object.is(left.valueOf(), right['valueOf']());
        if (left instanceof String)
            return Object.is(left.valueOf(), right['valueOf']());
        if (left instanceof Date)
            return Object.is(left.valueOf(), right['valueOf']());
        if (left instanceof RegExp)
            return left.source === right['source'] && left.flags === right['flags'];
        if (left instanceof Error)
            return left.message === right['message'] && left.stack === right['stack'];
        let left_cache = $.$mol_compare_deep_cache.get(left);
        if (left_cache) {
            const right_cache = left_cache.get(right);
            if (typeof right_cache === 'boolean')
                return right_cache;
        }
        else {
            left_cache = new WeakMap([[right, true]]);
            $.$mol_compare_deep_cache.set(left, left_cache);
        }
        let result;
        try {
            if (left_proto && !Reflect.getPrototypeOf(left_proto))
                result = compare_pojo(left, right);
            else if (Array.isArray(left))
                result = compare_array(left, right);
            else if (left instanceof Set)
                result = compare_set(left, right);
            else if (left instanceof Map)
                result = compare_map(left, right);
            else if (ArrayBuffer.isView(left))
                result = compare_buffer(left, right);
            else if (Symbol.toPrimitive in left)
                result = compare_primitive(left, right);
            else
                result = false;
        }
        finally {
            left_cache.set(right, result);
        }
        return result;
    }
    $.$mol_compare_deep = $mol_compare_deep;
    function compare_array(left, right) {
        const len = left.length;
        if (len !== right.length)
            return false;
        for (let i = 0; i < len; ++i) {
            if (!$mol_compare_deep(left[i], right[i]))
                return false;
        }
        return true;
    }
    function compare_buffer(left, right) {
        const len = left.byteLength;
        if (len !== right.byteLength)
            return false;
        for (let i = 0; i < len; ++i) {
            if (left[i] !== right[i])
                return false;
        }
        return true;
    }
    function compare_iterator(left, right) {
        while (true) {
            const left_next = left.next();
            const right_next = right.next();
            if (left_next.done !== right_next.done)
                return false;
            if (left_next.done)
                break;
            if (!$mol_compare_deep(left_next.value, right_next.value))
                return false;
        }
        return true;
    }
    function compare_set(left, right) {
        if (left.size !== right.size)
            return false;
        return compare_iterator(left.values(), right.values());
    }
    function compare_map(left, right) {
        if (left.size !== right.size)
            return false;
        return compare_iterator(left.keys(), right.keys())
            && compare_iterator(left.values(), right.values());
    }
    function compare_pojo(left, right) {
        const left_keys = Object.getOwnPropertyNames(left);
        const right_keys = Object.getOwnPropertyNames(right);
        if (left_keys.length !== right_keys.length)
            return false;
        for (let key of left_keys) {
            if (!$mol_compare_deep(left[key], Reflect.get(right, key)))
                return false;
        }
        return true;
    }
    function compare_primitive(left, right) {
        return Object.is(left[Symbol.toPrimitive]('default'), right[Symbol.toPrimitive]('default'));
    }
})($ || ($ = {}));
//mol/compare/deep/deep.ts
;
"use strict";
var $;
(function ($) {
    class $mol_wire_task extends $mol_wire_fiber {
        static getter(task) {
            return function $mol_wire_task_get(host, args) {
                const sub = $mol_wire_auto();
                const existen = sub?.track_next();
                reuse: if (existen) {
                    if (!(existen instanceof $mol_wire_task))
                        break reuse;
                    if (existen.host !== host)
                        break reuse;
                    if (existen.task !== task)
                        break reuse;
                    if (!$mol_compare_deep(existen.args, args))
                        break reuse;
                    return existen;
                }
                return new $mol_wire_task(`${host?.[Symbol.toStringTag] ?? host}.${task.name}(#)`, task, host, args);
            };
        }
        complete() {
            if (this.cache instanceof Promise)
                return;
            this.destructor();
        }
        put(next) {
            const prev = this.cache;
            this.cache = next;
            if (next instanceof Promise) {
                this.cursor = $mol_wire_cursor.fresh;
                if (next !== prev)
                    this.emit();
                return next;
            }
            this.cursor = $mol_wire_cursor.final;
            if (this.sub_empty)
                this.destructor();
            else if (next !== prev)
                this.emit();
            return next;
        }
    }
    $.$mol_wire_task = $mol_wire_task;
})($ || ($ = {}));
//mol/wire/task/task.ts
;
"use strict";
var $;
(function ($) {
    function $mol_wire_method(host, field, descr) {
        if (!descr)
            descr = Reflect.getOwnPropertyDescriptor(host, field);
        const orig = descr?.value ?? host[field];
        const sup = Reflect.getPrototypeOf(host);
        if (typeof sup[field] === 'function') {
            Object.defineProperty(orig, 'name', { value: sup[field].name });
        }
        const temp = $mol_wire_task.getter(orig);
        const value = function (...args) {
            const fiber = temp(this ?? null, args);
            return fiber.sync();
        };
        Object.defineProperty(value, 'name', { value: orig.name + ' ' });
        Object.assign(value, { orig });
        const descr2 = { ...descr, value };
        Reflect.defineProperty(host, field, descr2);
        return descr2;
    }
    $.$mol_wire_method = $mol_wire_method;
})($ || ($ = {}));
//mol/wire/method/method.ts
;
"use strict";
//mol/type/tail/tail.ts
;
"use strict";
//mol/type/foot/foot.ts
;
"use strict";
var $;
(function ($) {
    const cacthed = new WeakMap();
    function $mol_fail_catch(error) {
        if (typeof error !== 'object')
            return false;
        if (error instanceof Promise)
            $mol_fail_hidden(error);
        if (cacthed.get(error))
            return false;
        cacthed.set(error, true);
        return true;
    }
    $.$mol_fail_catch = $mol_fail_catch;
})($ || ($ = {}));
//mol/fail/catch/catch.ts
;
"use strict";
var $;
(function ($) {
    function $mol_fail_log(error) {
        if (error instanceof Promise)
            return false;
        if (!$mol_fail_catch(error))
            return false;
        console.error(error);
        return true;
    }
    $.$mol_fail_log = $mol_fail_log;
})($ || ($ = {}));
//mol/fail/log/log.ts
;
"use strict";
var $;
(function ($) {
    class $mol_wire_atom extends $mol_wire_fiber {
        static solo(host, task) {
            const field = task.name + '()';
            const existen = Object.getOwnPropertyDescriptor(host ?? task, field)?.value;
            if (existen)
                return existen;
            const prefix = host?.[Symbol.toStringTag] ?? (host instanceof Function ? $$.$mol_func_name(host) : host);
            const key = `${prefix}.${field}`;
            const fiber = new $mol_wire_atom(key, task, host, []);
            (host ?? task)[field] = fiber;
            return fiber;
        }
        static plex(host, task, key) {
            const field = task.name + '()';
            let dict = Object.getOwnPropertyDescriptor(host ?? task, field)?.value;
            const prefix = host?.[Symbol.toStringTag] ?? (host instanceof Function ? $$.$mol_func_name(host) : host);
            const id = `${prefix}.${task.name}(${$mol_key(key)})`;
            if (dict) {
                const existen = dict.get(id);
                if (existen)
                    return existen;
            }
            else {
                dict = (host ?? task)[field] = new Map();
            }
            const fiber = new $mol_wire_atom(id, task, host, [key]);
            dict.set(id, fiber);
            return fiber;
        }
        static watching = new Set();
        static watch() {
            new $mol_after_frame($mol_wire_atom.watch);
            for (const atom of $mol_wire_atom.watching) {
                if (atom.cursor === $mol_wire_cursor.final) {
                    $mol_wire_atom.watching.delete(atom);
                }
                else {
                    atom.cursor = $mol_wire_cursor.stale;
                    atom.fresh();
                }
            }
        }
        watch() {
            $mol_wire_atom.watching.add(this);
        }
        resync(args) {
            return this.put(this.task.call(this.host, ...args));
        }
        once() {
            return this.sync();
        }
        channel() {
            return Object.assign((next) => {
                if (next !== undefined)
                    return this.resync([...this.args, next]);
                if (!$mol_wire_fiber.warm)
                    return this.result();
                if ($mol_wire_auto() instanceof $mol_wire_task) {
                    return this.once();
                }
                else {
                    return this.sync();
                }
            }, { atom: this });
        }
        destructor() {
            super.destructor();
            const prev = this.cache;
            if ($mol_owning_check(this, prev)) {
                prev.destructor();
            }
            if (this.pub_from === 0) {
                ;
                (this.host ?? this.task)[this.field()] = null;
            }
            else {
                ;
                (this.host ?? this.task)[this.field()].delete(this[Symbol.toStringTag]);
            }
        }
        put(next) {
            const prev = this.cache;
            update: if (next !== prev) {
                try {
                    if ($mol_compare_deep(prev, next))
                        break update;
                }
                catch (error) {
                    $mol_fail_log(error);
                }
                if ($mol_owning_check(this, prev)) {
                    prev.destructor();
                }
                if ($mol_owning_catch(this, next)) {
                    try {
                        next[Symbol.toStringTag] = this[Symbol.toStringTag];
                    }
                    catch {
                        Object.defineProperty(next, Symbol.toStringTag, { value: this[Symbol.toStringTag] });
                    }
                }
                if (!this.sub_empty)
                    this.emit();
            }
            this.cache = next;
            this.cursor = $mol_wire_cursor.fresh;
            if (next instanceof Promise)
                return next;
            this.complete_pubs();
            return next;
        }
    }
    __decorate([
        $mol_wire_method
    ], $mol_wire_atom.prototype, "resync", null);
    __decorate([
        $mol_wire_method
    ], $mol_wire_atom.prototype, "once", null);
    $.$mol_wire_atom = $mol_wire_atom;
    $mol_wire_atom.watch();
})($ || ($ = {}));
//mol/wire/atom/atom.ts
;
"use strict";
var $;
(function ($) {
    function $mol_wire_solo(host, field, descr) {
        if (!descr)
            descr = Reflect.getOwnPropertyDescriptor(host, field);
        const orig = descr?.value ?? host[field];
        const sup = Reflect.getPrototypeOf(host);
        if (typeof sup[field] === 'function') {
            Object.defineProperty(orig, 'name', { value: sup[field].name });
        }
        const descr2 = {
            ...descr,
            value: function (...args) {
                let atom = $mol_wire_atom.solo(this, orig);
                if ((args.length === 0) || (args[0] === undefined)) {
                    if (!$mol_wire_fiber.warm)
                        return atom.result();
                    if ($mol_wire_auto() instanceof $mol_wire_task) {
                        return atom.once();
                    }
                    else {
                        return atom.sync();
                    }
                }
                return atom.resync(args);
            }
        };
        Reflect.defineProperty(descr2.value, 'name', { value: orig.name + ' ' });
        Object.assign(descr2.value, { orig });
        Reflect.defineProperty(host, field, descr2);
        return descr2;
    }
    $.$mol_wire_solo = $mol_wire_solo;
})($ || ($ = {}));
//mol/wire/solo/solo.ts
;
"use strict";
var $;
(function ($) {
    function $mol_wire_plex(host, field, descr) {
        if (!descr)
            descr = Reflect.getOwnPropertyDescriptor(host, field);
        const orig = descr?.value ?? host[field];
        const sup = Reflect.getPrototypeOf(host);
        if (typeof sup[field] === 'function') {
            Object.defineProperty(orig, 'name', { value: sup[field].name });
        }
        const descr2 = {
            ...descr,
            value: function (...args) {
                let atom = $mol_wire_atom.plex(this, orig, args[0]);
                if ((args.length === 1) || (args[1] === undefined)) {
                    if (!$mol_wire_fiber.warm)
                        return atom.result();
                    if ($mol_wire_auto() instanceof $mol_wire_task) {
                        return atom.once();
                    }
                    else {
                        return atom.sync();
                    }
                }
                return atom.resync(args);
            }
        };
        Reflect.defineProperty(descr2.value, 'name', { value: orig.name + ' ' });
        Object.assign(descr2.value, { orig });
        Reflect.defineProperty(host, field, descr2);
        return descr2;
    }
    $.$mol_wire_plex = $mol_wire_plex;
})($ || ($ = {}));
//mol/wire/plex/plex.ts
;
"use strict";
var $;
(function ($) {
    $.$mol_mem = $mol_wire_solo;
    $.$mol_mem_key = $mol_wire_plex;
})($ || ($ = {}));
//mol/mem/mem.ts
;
"use strict";
var $;
(function ($) {
    class $mol_window extends $mol_object {
        static size() {
            this.resizes();
            return {
                width: self.innerWidth,
                height: self.innerHeight,
            };
        }
        static resizes(next) { return next; }
    }
    __decorate([
        $mol_mem
    ], $mol_window, "size", null);
    __decorate([
        $mol_mem
    ], $mol_window, "resizes", null);
    $.$mol_window = $mol_window;
    self.addEventListener('resize', event => $mol_window.resizes(event));
})($ || ($ = {}));
//mol/window/window.web.ts
;
"use strict";
var $;
(function ($) {
    class $mol_view_selection extends $mol_object {
        static focused(next, notify) {
            const parents = [];
            let element = next?.[0] ?? $mol_dom_context.document.activeElement;
            while (element) {
                parents.push(element);
                element = element.parentNode;
            }
            if (!next || notify)
                return parents;
            new $mol_after_tick(() => {
                const element = this.focused()[0];
                if (element)
                    element.focus();
                else
                    $mol_dom_context.blur();
            });
            return parents;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_view_selection, "focused", null);
    $.$mol_view_selection = $mol_view_selection;
})($ || ($ = {}));
//mol/view/selection/selection.ts
;
"use strict";
var $;
(function ($) {
    function $mol_maybe(value) {
        return (value == null) ? [] : [value];
    }
    $.$mol_maybe = $mol_maybe;
})($ || ($ = {}));
//mol/maybe/maybe.ts
;
"use strict";
var $;
(function ($) {
    if ($mol_dom_context.document) {
        $mol_dom_context.document.documentElement.addEventListener('focus', (event) => {
            $mol_view_selection.focused($mol_maybe($mol_dom_context.document.activeElement), 'notify');
        }, true);
    }
})($ || ($ = {}));
//mol/view/selection/selection.web.ts
;
"use strict";
var $;
(function ($) {
    class $mol_wrapper extends $mol_object2 {
        static wrap;
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
        static get field() {
            return (obj, name, descr) => {
                descr.get = descr.set = this.func(descr.get);
                return descr;
            };
        }
    }
    $.$mol_wrapper = $mol_wrapper;
})($ || ($ = {}));
//mol/wrapper/wrapper.ts
;
"use strict";
var $;
(function ($) {
    class $mol_memo extends $mol_wrapper {
        static wrap(task) {
            const store = new WeakMap();
            return function (next) {
                if (next === undefined && store.has(this))
                    return store.get(this);
                const val = task.call(this, next) ?? next;
                store.set(this, val);
                return val;
            };
        }
    }
    $.$mol_memo = $mol_memo;
})($ || ($ = {}));
//mol/memo/memo.ts
;
"use strict";
var $;
(function ($) {
    function $mol_dom_qname(name) {
        return name.replace(/\W/g, '').replace(/^(?=\d+)/, '_');
    }
    $.$mol_dom_qname = $mol_dom_qname;
})($ || ($ = {}));
//mol/dom/qname/qname.ts
;
"use strict";
var $;
(function ($) {
    function $mol_wire_probe(task, next) {
        const warm = $mol_wire_fiber.warm;
        try {
            $mol_wire_fiber.warm = false;
            return task();
        }
        finally {
            $mol_wire_fiber.warm = warm;
        }
    }
    $.$mol_wire_probe = $mol_wire_probe;
})($ || ($ = {}));
//mol/wire/probe/probe.ts
;
"use strict";
var $;
(function ($) {
    function $mol_wire_watch() {
        const atom = $mol_wire_auto();
        if (atom instanceof $mol_wire_atom) {
            atom.watch();
        }
        else {
            $mol_fail(new Error('Atom is required for watching'));
        }
    }
    $.$mol_wire_watch = $mol_wire_watch;
})($ || ($ = {}));
//mol/wire/watch/watch.ts
;
"use strict";
var $;
(function ($) {
    function $mol_wire_solid() {
        const current = $mol_wire_auto();
        if (current.reap !== nothing) {
            current?.sub_on(sub, sub.data.length);
        }
        current.reap = nothing;
    }
    $.$mol_wire_solid = $mol_wire_solid;
    const nothing = () => { };
    const sub = new $mol_wire_pub_sub;
})($ || ($ = {}));
//mol/wire/solid/solid.ts
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
//mol/const/const.ts
;
"use strict";
var $;
(function ($) {
    function $mol_dom_render_attributes(el, attrs) {
        for (let name in attrs) {
            let val = attrs[name];
            if (val === null || val === false) {
                if (!el.hasAttribute(name))
                    continue;
                el.removeAttribute(name);
            }
            else {
                const str = String(val);
                if (el.getAttribute(name) === str)
                    continue;
                el.setAttribute(name, str);
            }
        }
    }
    $.$mol_dom_render_attributes = $mol_dom_render_attributes;
})($ || ($ = {}));
//mol/dom/render/attributes/attributes.ts
;
"use strict";
var $;
(function ($) {
    function $mol_wire_async(obj) {
        let fiber;
        const temp = $mol_wire_task.getter(obj);
        return new Proxy(obj, {
            get(obj, field) {
                const val = obj[field];
                if (typeof val !== 'function')
                    return val;
                let fiber;
                const temp = $mol_wire_task.getter(val);
                return function $mol_wire_async(...args) {
                    fiber?.destructor();
                    fiber = temp(obj, args);
                    return fiber.async();
                };
            },
            apply(obj, self, args) {
                fiber?.destructor();
                fiber = temp(self, args);
                return fiber.async();
            },
        });
    }
    $.$mol_wire_async = $mol_wire_async;
})($ || ($ = {}));
//mol/wire/async/async.ts
;
"use strict";
var $;
(function ($) {
    function $mol_dom_render_events(el, events, passive = false) {
        for (let name in events) {
            el.addEventListener(name, events[name], { passive });
        }
    }
    $.$mol_dom_render_events = $mol_dom_render_events;
})($ || ($ = {}));
//mol/dom/render/events/events.ts
;
"use strict";
var $;
(function ($) {
    function $mol_dom_render_styles(el, styles) {
        for (let name in styles) {
            let val = styles[name];
            const style = el.style;
            if (typeof val === 'number') {
                style[name] = `${val}px`;
            }
            else {
                style[name] = val;
            }
        }
    }
    $.$mol_dom_render_styles = $mol_dom_render_styles;
})($ || ($ = {}));
//mol/dom/render/styles/styles.ts
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
            if (view instanceof $mol_dom_context.Node) {
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
                    const textNode = $mol_dom_context.document.createTextNode(String(view));
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
//mol/dom/render/children/children.ts
;
"use strict";
var $;
(function ($) {
    function $mol_dom_render_fields(el, fields) {
        for (let key in fields) {
            const val = fields[key];
            if (val === undefined)
                continue;
            el[key] = val;
        }
    }
    $.$mol_dom_render_fields = $mol_dom_render_fields;
})($ || ($ = {}));
//mol/dom/render/fields/fields.ts
;
"use strict";
//mol/type/keys/extract/extract.ts
;
"use strict";
//mol/type/pick/pick.ts
;
"use strict";
var $;
(function ($) {
    function $mol_view_visible_width() {
        return $mol_window.size().width;
    }
    $.$mol_view_visible_width = $mol_view_visible_width;
    function $mol_view_visible_height() {
        return $mol_window.size().height;
    }
    $.$mol_view_visible_height = $mol_view_visible_height;
    function $mol_view_state_key(suffix) {
        return suffix;
    }
    $.$mol_view_state_key = $mol_view_state_key;
    const error_showed = new WeakMap();
    class $mol_view extends $mol_object {
        static Root(id) {
            return new this;
        }
        autorun() {
            try {
                this.dom_tree();
                document.title = this.title();
            }
            catch (error) {
                $mol_fail_log(error);
            }
        }
        static autobind() {
            const nodes = $mol_dom_context.document.querySelectorAll('[mol_view_root]:not([mol_view_root=""])');
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
            return this.toString().match(/.*\.(\w+)/)?.[1] ?? this.toString();
        }
        focused(next) {
            let node = this.dom_node();
            const value = $mol_view_selection.focused(next === undefined ? undefined : (next ? [node] : []));
            return value.indexOf(node) !== -1;
        }
        state_key(suffix = '') {
            return this.$.$mol_view_state_key(suffix);
        }
        dom_name() {
            return $mol_dom_qname(this.constructor.toString()) || 'div';
        }
        dom_name_space() { return 'http://www.w3.org/1999/xhtml'; }
        sub() {
            return [];
        }
        sub_visible() {
            return this.sub();
        }
        minimal_width() {
            let min = 0;
            try {
                const sub = this.sub();
                if (!sub)
                    return 0;
                sub.forEach(view => {
                    if (view instanceof $mol_view) {
                        min = Math.max(min, view.minimal_width());
                    }
                });
            }
            catch (error) {
                $mol_fail_log(error);
                return 24;
            }
            return min;
        }
        maximal_width() {
            return this.minimal_width();
        }
        minimal_height() {
            let min = 0;
            try {
                for (const view of this.sub() ?? []) {
                    if (view instanceof $mol_view) {
                        min = Math.max(min, view.minimal_height());
                    }
                }
            }
            catch (error) {
                $mol_fail_log(error);
                return 24;
            }
            return min;
        }
        static watchers = new Set();
        view_rect() {
            if ($mol_wire_probe(() => this.view_rect()) === undefined) {
                $mol_wire_watch();
                return null;
            }
            else {
                const { width, height, left, right, top, bottom } = this.dom_node().getBoundingClientRect();
                return { width, height, left, right, top, bottom };
            }
        }
        dom_id() {
            return this.toString();
        }
        dom_node(next) {
            $mol_wire_solid();
            const node = next || $mol_dom_context.document.createElementNS(this.dom_name_space(), this.dom_name());
            const id = this.dom_id();
            node.setAttribute('id', id);
            node.toString = $mol_const('<#' + id + '>');
            $mol_dom_render_attributes(node, this.attr_static());
            const events = $mol_wire_async(this.event());
            $mol_dom_render_events(node, events);
            return node;
        }
        dom_final() {
            this.render();
            const sub = this.sub_visible();
            if (!sub)
                return;
            for (const el of sub) {
                if (el && typeof el === 'object' && 'dom_final' in el) {
                    el['dom_final']();
                }
            }
            return this.dom_node();
        }
        dom_tree(next) {
            const node = this.dom_node(next);
            render: try {
                $mol_dom_render_attributes(node, { mol_view_error: null });
                try {
                    this.render();
                }
                finally {
                    for (let plugin of this.plugins()) {
                        if (plugin instanceof $mol_plugin) {
                            plugin.dom_tree();
                        }
                    }
                }
            }
            catch (error) {
                $mol_fail_log(error);
                $mol_dom_render_attributes(node, { mol_view_error: error.name || error.constructor.name });
                if (error instanceof Promise)
                    break render;
                if ((error_showed.get(error) ?? this) !== this)
                    break render;
                try {
                    const message = error.message || error;
                    node.innerText = message.replace(/^|$/mg, '\xA0\xA0');
                }
                catch { }
                error_showed.set(error, this);
            }
            try {
                this.auto();
            }
            catch (error) {
                $mol_fail_log(error);
            }
            return node;
        }
        dom_node_actual() {
            const node = this.dom_node();
            $mol_dom_render_styles(node, this.style_size());
            const attr = this.attr();
            const style = this.style();
            const fields = this.field();
            $mol_dom_render_attributes(node, attr);
            $mol_dom_render_styles(node, style);
            return node;
        }
        auto() {
            return null;
        }
        render() {
            const node = this.dom_node_actual();
            const sub = this.sub_visible();
            if (!sub)
                return;
            const nodes = sub.map(child => {
                if (child == null)
                    return null;
                return (child instanceof $mol_view)
                    ? child.dom_node()
                    : child instanceof $mol_dom_context.Node
                        ? child
                        : String(child);
            });
            $mol_dom_render_children(node, nodes);
            for (const el of sub)
                if (el && typeof el === 'object' && 'dom_tree' in el)
                    el['dom_tree']();
            $mol_dom_render_fields(node, this.field());
        }
        static view_classes() {
            const proto = this.prototype;
            let current = proto;
            const classes = [];
            while (current) {
                if (current.constructor.name !== classes.at(-1)?.name) {
                    classes.push(current.constructor);
                }
                if (!(current instanceof $mol_view))
                    break;
                current = Object.getPrototypeOf(current);
            }
            return classes;
        }
        static _view_names;
        static view_names(suffix) {
            let cache = Reflect.getOwnPropertyDescriptor(this, '_view_names')?.value;
            if (!cache)
                cache = this._view_names = new Map;
            const cached = cache.get(suffix);
            if (cached)
                return cached;
            const names = [];
            const suffix2 = '_' + suffix[0].toLowerCase() + suffix.substring(1);
            for (const Class of this.view_classes()) {
                if (suffix in Class.prototype)
                    names.push(this.$.$mol_func_name(Class) + suffix2);
                else
                    break;
            }
            cache.set(suffix, names);
            return names;
        }
        view_names_owned() {
            const names = [];
            let owner = $mol_owning_get(this);
            if (!(owner?.host instanceof $mol_view))
                return names;
            const suffix = owner.task.name.trim();
            const suffix2 = '_' + suffix[0].toLowerCase() + suffix.substring(1);
            names.push(...owner.host.constructor.view_names(suffix));
            for (let prefix of owner.host.view_names_owned()) {
                names.push(prefix + suffix2);
            }
            return names;
        }
        view_names() {
            const names = new Set();
            for (let name of this.view_names_owned())
                names.add(name);
            for (let Class of this.constructor.view_classes()) {
                const name = this.$.$mol_func_name(Class);
                if (name)
                    names.add(name);
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
        style_size() {
            return {
                minHeight: this.minimal_height(),
                minWidth: this.minimal_width(),
            };
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
        plugins() {
            return [];
        }
        [$mol_dev_format_head]() {
            return $mol_dev_format_span({}, $mol_dev_format_native(this));
        }
        *view_find(check, path = []) {
            if (check(this))
                return yield [...path, this];
            try {
                for (const item of this.sub()) {
                    if (item instanceof $mol_view) {
                        yield* item.view_find(check, [...path, this]);
                    }
                }
            }
            catch (error) {
                if (error instanceof Promise)
                    $mol_fail_hidden(error);
                $mol_fail_log(error);
            }
        }
        force_render(path) {
            const kids = this.sub();
            const index = kids.findIndex(item => {
                if (item instanceof $mol_view) {
                    return path.has(item);
                }
                else {
                    return false;
                }
            });
            if (index >= 0) {
                kids[index].force_render(path);
            }
        }
        ensure_visible(view, align = "start") {
            const path = this.view_find(v => v === view).next().value;
            this.force_render(new Set(path));
            this.dom_final();
            view.dom_node().scrollIntoView({ block: align });
        }
        bring() {
            const win = this.$.$mol_dom_context;
            if (win.parent !== win.self && !win.document.hasFocus())
                return;
            new this.$.$mol_after_frame(() => {
                this.dom_node().scrollIntoView({ block: 'start', inline: 'end' });
                this.focused(true);
            });
        }
    }
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "autorun", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "title", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "focused", null);
    __decorate([
        $mol_memo.method
    ], $mol_view.prototype, "dom_name", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "minimal_width", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "minimal_height", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "view_rect", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "dom_node", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "dom_final", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "dom_tree", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "dom_node_actual", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "render", null);
    __decorate([
        $mol_memo.method
    ], $mol_view.prototype, "view_names_owned", null);
    __decorate([
        $mol_memo.method
    ], $mol_view.prototype, "view_names", null);
    __decorate([
        $mol_mem_key
    ], $mol_view, "Root", null);
    __decorate([
        $mol_mem
    ], $mol_view, "autobind", null);
    __decorate([
        $mol_memo.method
    ], $mol_view, "view_classes", null);
    $.$mol_view = $mol_view;
})($ || ($ = {}));
//mol/view/view/view.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/view/view/view.css", "[mol_view] {\n\ttransition-property: height, width, min-height, min-width, max-width, max-height, transform;\n\ttransition-duration: .2s;\n\ttransition-timing-function: ease-out;\n\t-webkit-appearance: none;\n\tbox-sizing: border-box;\n\tdisplay: flex;\n\tflex-shrink: 0;\n\tcontain: style;\n\tscrollbar-color: var(--mol_theme_line) transparent;\n\tscrollbar-width: thin;\n}\t\n\n[mol_view]::selection {\n\tbackground: var(--mol_theme_line);\n}\t\n\n[mol_view]::-webkit-scrollbar {\n\twidth: .25rem;\n\theight: .25rem;\n}\n\n[mol_view]::-webkit-scrollbar-corner {\n\tbackground-color: var(--mol_theme_line);\n}\n\n[mol_view]::-webkit-scrollbar-track {\n\tbackground-color: transparent;\n}\n\n[mol_view]::-webkit-scrollbar-thumb {\n\tbackground-color: var(--mol_theme_line);\n\tborder-radius: var(--mol_gap_round);\n}\n\n[mol_view] > * {\n\tword-break: inherit;\n}\n\n[mol_view_root] {\n\tmargin: 0;\n\tpadding: 0;\n\twidth: 100%;\n\theight: 100%;\n\tbox-sizing: border-box;\n\tfont-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n\tfont-size: 1rem;\n\tline-height: 1.5rem;\n\tbackground: var(--mol_theme_back);\n\tcolor: var(--mol_theme_text);\n\tcontain: unset; /** Fixes bg ignoring when applied to body on Chrome */\n\ttab-size: 4;\n}\n\n[mol_view][mol_view_error]:not([mol_view_error=\"Promise\"]) {\n\tbackground-image: repeating-linear-gradient(\n\t\t-45deg,\n\t\t#f92323,\n\t\t#f92323 .5rem,\n\t\t#ff3d3d .5rem,\n\t\t#ff3d3d 1.5rem\n\t);\n\tcolor: black;\n\talign-items: center;\n    justify-content: center;\n}\n\n@keyframes mol_view_wait_move {\n\tfrom {\n\t\tbackground-position: 0 0;\n\t}\n\tto {\n\t\tbackground-position: 200vmax 0;\n\t}\n}\n\n@keyframes mol_view_wait_show {\n\tto {\n\t\tbackground-image: repeating-linear-gradient(\n\t\t\t45deg,\n\t\t\thsla( 0 , 0% , 50% , .5 ) 0% ,\n\t\t\thsla( 0 , 0% , 50% , 0 ) 5% ,\n\t\t\thsla( 0 , 0% , 50% , 0 ) 45% ,\n\t\t\thsla( 0 , 0% , 50% , .5 ) 50% ,\n\t\t\thsla( 0 , 0% , 50% , 0 ) 55% ,\n\t\t\thsla( 0 , 0% , 50% , 0 ) 95% ,\n\t\t\thsla( 0 , 0% , 50% , .5 ) 100%\n\t\t);\n\t\tbackground-size: 200vmax 200vmax;\n\t}\n}\n\n[mol_view][mol_view_error=\"Promise\"] {\n\tanimation: mol_view_wait_show .5s .5s linear forwards , mol_view_wait_move 1s linear infinite;\n\topacity: .75;\n}\n");
})($ || ($ = {}));
//mol/view/view/-css/view.css.ts
;
"use strict";
var $;
(function ($) {
    $mol_dom_context.document?.addEventListener('DOMContentLoaded', () => $mol_view.autobind(), { once: true });
})($ || ($ = {}));
//mol/view/view/view.web.ts
;
"use strict";
var $;
(function ($) {
    class $mol_state_local extends $mol_object {
        static 'native()';
        static native() {
            if (this['native()'])
                return this['native()'];
            check: try {
                const native = $mol_dom_context.localStorage;
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
        static changes(next) { return next; }
        static value(key, next) {
            this.changes();
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
        $mol_mem
    ], $mol_state_local, "changes", null);
    __decorate([
        $mol_mem_key
    ], $mol_state_local, "value", null);
    $.$mol_state_local = $mol_state_local;
})($ || ($ = {}));
//mol/state/local/local.ts
;
"use strict";
var $;
(function ($) {
    self.addEventListener('storage', event => $.$mol_state_local.changes(event));
})($ || ($ = {}));
//mol/state/local/local.web.ts
;
"use strict";
//mol/charset/encoding/encoding.ts
;
"use strict";
var $;
(function ($) {
    const decoders = {};
    function $mol_charset_decode(buffer, encoding = 'utf8') {
        let decoder = decoders[encoding];
        if (!decoder)
            decoder = decoders[encoding] = new TextDecoder(encoding);
        return decoder.decode(buffer);
    }
    $.$mol_charset_decode = $mol_charset_decode;
})($ || ($ = {}));
//mol/charset/decode/decode.ts
;
"use strict";
//node/node.ts
;
"use strict";
var $node = $node || {};
//node/node.web.ts
;
"use strict";
var $;
(function ($) {
    const TextEncoder = globalThis.TextEncoder ?? $node.util.TextEncoder;
    const encoder = new TextEncoder();
    function $mol_charset_encode(value) {
        return encoder.encode(value);
    }
    $.$mol_charset_encode = $mol_charset_encode;
})($ || ($ = {}));
//mol/charset/encode/encode.ts
;
"use strict";
var $;
(function ($) {
    class $mol_file_not_found extends Error {
    }
    $.$mol_file_not_found = $mol_file_not_found;
    class $mol_file extends $mol_object {
        static absolute(path) {
            throw new Error('Not implemented yet');
        }
        static relative(path) {
            throw new Error('Not implemented yet');
        }
        static base = '';
        path() {
            return '.';
        }
        parent() {
            return this.resolve('..');
        }
        reset() {
            try {
                this.stat(null);
            }
            catch (error) {
                if (error instanceof $mol_file_not_found)
                    return;
                return $mol_fail_hidden(error);
            }
        }
        version() {
            return this.stat()?.mtime.getTime().toString(36).toUpperCase() ?? '';
        }
        watcher() {
            console.warn('$mol_file_web.watcher() not implemented');
            return {
                destructor() { }
            };
        }
        exists(next) {
            let exists = Boolean(this.stat());
            if (next === undefined)
                return exists;
            if (next === exists)
                return exists;
            if (next)
                this.parent().exists(true);
            this.ensure();
            this.reset();
            return next;
        }
        type() {
            return this.stat()?.type ?? '';
        }
        name() {
            return this.path().replace(/^.*\//, '');
        }
        ext() {
            const match = /((?:\.\w+)+)$/.exec(this.path());
            return match ? match[1].substring(1) : '';
        }
        text(next, virt) {
            if (virt) {
                const now = new Date;
                this.stat({
                    type: 'file',
                    size: 0,
                    atime: now,
                    mtime: now,
                    ctime: now,
                }, 'virt');
                return next;
            }
            if (next === undefined) {
                return $mol_charset_decode(this.buffer(undefined));
            }
            else {
                const buffer = next === undefined ? undefined : $mol_charset_encode(next);
                this.buffer(buffer);
                return next;
            }
        }
        find(include, exclude) {
            const found = [];
            const sub = this.sub();
            for (const child of sub) {
                const child_path = child.path();
                if (exclude && child_path.match(exclude))
                    continue;
                if (!include || child_path.match(include))
                    found.push(child);
                if (child.type() === 'dir') {
                    const sub_child = child.find(include, exclude);
                    for (const child of sub_child)
                        found.push(child);
                }
            }
            return found;
        }
        size() {
            switch (this.type()) {
                case 'file': return this.stat()?.size ?? 0;
                default: return 0;
            }
        }
    }
    __decorate([
        $mol_mem
    ], $mol_file.prototype, "exists", null);
    __decorate([
        $mol_mem
    ], $mol_file.prototype, "text", null);
    __decorate([
        $mol_mem_key
    ], $mol_file, "absolute", null);
    $.$mol_file = $mol_file;
})($ || ($ = {}));
//mol/file/file.ts
;
"use strict";
var $;
(function ($) {
    $.$mol_action = $mol_wire_method;
})($ || ($ = {}));
//mol/action/action.ts
;
"use strict";
var $;
(function ($) {
    function $mol_wire_sync(obj) {
        return new Proxy(obj, {
            get(obj, field) {
                const val = obj[field];
                if (typeof val !== 'function')
                    return val;
                const temp = $mol_wire_task.getter(val);
                return function $mol_wire_sync(...args) {
                    const fiber = temp(obj, args);
                    return fiber.sync();
                };
            },
            apply(obj, self, args) {
                const temp = $mol_wire_task.getter(obj);
                const fiber = temp(self, args);
                return fiber.sync();
            },
        });
    }
    $.$mol_wire_sync = $mol_wire_sync;
})($ || ($ = {}));
//mol/wire/sync/sync.ts
;
"use strict";
var $;
(function ($) {
    function $mol_dom_parse(text, type = 'application/xhtml+xml') {
        const parser = new $mol_dom_context.DOMParser();
        const doc = parser.parseFromString(text, type);
        const error = doc.getElementsByTagName('parsererror');
        if (error.length)
            throw new Error(error[0].textContent);
        return doc;
    }
    $.$mol_dom_parse = $mol_dom_parse;
})($ || ($ = {}));
//mol/dom/parse/parse.ts
;
"use strict";
var $;
(function ($) {
    class $mol_fetch_response extends $mol_object2 {
        native;
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
            return $mol_wire_sync(this.native).json();
        }
        buffer() {
            return $mol_wire_sync(this.native).arrayBuffer();
        }
        xml() {
            return $mol_dom_parse(this.text(), 'application/xml');
        }
        xhtml() {
            return $mol_dom_parse(this.text(), 'application/xhtml+xml');
        }
        html() {
            return $mol_dom_parse(this.text(), 'text/html');
        }
    }
    __decorate([
        $mol_action
    ], $mol_fetch_response.prototype, "stream", null);
    __decorate([
        $mol_action
    ], $mol_fetch_response.prototype, "text", null);
    __decorate([
        $mol_action
    ], $mol_fetch_response.prototype, "buffer", null);
    __decorate([
        $mol_action
    ], $mol_fetch_response.prototype, "xml", null);
    __decorate([
        $mol_action
    ], $mol_fetch_response.prototype, "xhtml", null);
    __decorate([
        $mol_action
    ], $mol_fetch_response.prototype, "html", null);
    $.$mol_fetch_response = $mol_fetch_response;
    class $mol_fetch extends $mol_object2 {
        static request(input, init = {}) {
            const native = globalThis.fetch ?? $node['undici'].fetch;
            const controller = new AbortController();
            let done = false;
            const promise = native(input, {
                ...init,
                signal: controller.signal,
            }).finally(() => {
                done = true;
            });
            return Object.assign(promise, {
                destructor: () => {
                    if (!done)
                        controller.abort();
                },
            });
        }
        static response(input, init) {
            const response = $mol_wire_sync(this).request(input, init);
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
            return this.response(input, init).buffer();
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
    }
    __decorate([
        $mol_action
    ], $mol_fetch, "response", null);
    __decorate([
        $mol_action
    ], $mol_fetch, "stream", null);
    __decorate([
        $mol_action
    ], $mol_fetch, "text", null);
    __decorate([
        $mol_action
    ], $mol_fetch, "json", null);
    __decorate([
        $mol_action
    ], $mol_fetch, "buffer", null);
    __decorate([
        $mol_action
    ], $mol_fetch, "xml", null);
    __decorate([
        $mol_action
    ], $mol_fetch, "xhtml", null);
    __decorate([
        $mol_action
    ], $mol_fetch, "html", null);
    $.$mol_fetch = $mol_fetch;
})($ || ($ = {}));
//mol/fetch/fetch.ts
;
"use strict";
var $;
(function ($) {
    class $mol_file_web extends $mol_file {
        static absolute(path) {
            return this.make({
                path: $mol_const(path)
            });
        }
        static relative(path) {
            return this.absolute(new URL(path, this.base).toString());
        }
        static base = $mol_dom_context.document
            ? new URL('.', $mol_dom_context.document.currentScript['src']).toString()
            : '';
        buffer(next) {
            if (next !== undefined)
                throw new Error(`Saving content not supported: ${this.path}`);
            const response = $mol_fetch.response(this.path());
            if (response.native.status === 404)
                throw new $mol_file_not_found(`File not found: ${this.path()}`);
            return new Uint8Array(response.buffer());
        }
        stat(next, virt) {
            let stat = next;
            if (next === undefined) {
                const content = this.text();
                const ctime = new Date();
                stat = {
                    type: 'file',
                    size: content.length,
                    ctime,
                    atime: ctime,
                    mtime: ctime
                };
            }
            this.parent().watcher();
            return stat;
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
        ensure() {
            throw new Error('$mol_file_web.ensure() not implemented');
        }
        sub() {
            throw new Error('$mol_file_web.sub() not implemented');
        }
        relate(base = this.constructor.relative('.')) {
            throw new Error('$mol_file_web.relate() not implemented');
        }
        append(next) {
            throw new Error('$mol_file_web.append() not implemented');
        }
    }
    __decorate([
        $mol_mem
    ], $mol_file_web.prototype, "buffer", null);
    __decorate([
        $mol_mem
    ], $mol_file_web.prototype, "stat", null);
    __decorate([
        $mol_mem
    ], $mol_file_web.prototype, "sub", null);
    __decorate([
        $mol_mem_key
    ], $mol_file_web, "absolute", null);
    $.$mol_file_web = $mol_file_web;
    $.$mol_file = $mol_file_web;
})($ || ($ = {}));
//mol/file/file.web.ts
;
"use strict";
var $;
(function ($) {
    class $mol_locale extends $mol_object {
        static lang_default() {
            return 'en';
        }
        static lang(next) {
            return this.$.$mol_state_local.value('locale', next) || $mol_dom_context.navigator.language.replace(/-.*/, '') || this.lang_default();
        }
        static source(lang) {
            return JSON.parse(this.$.$mol_file.relative(`web.locale=${lang}.json`).text().toString());
        }
        static texts(lang, next) {
            if (next)
                return next;
            try {
                return this.source(lang).valueOf();
            }
            catch (error) {
                if (error instanceof Promise)
                    $mol_fail_hidden(error);
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
                this.warn(key);
            }
            return `<${key}>`;
        }
        static warn(key) {
            console.warn(`Not translated to "${this.lang()}": ${key}`);
            return null;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_locale, "lang_default", null);
    __decorate([
        $mol_mem
    ], $mol_locale, "lang", null);
    __decorate([
        $mol_mem_key
    ], $mol_locale, "source", null);
    __decorate([
        $mol_mem_key
    ], $mol_locale, "texts", null);
    __decorate([
        $mol_mem_key
    ], $mol_locale, "text", null);
    __decorate([
        $mol_mem_key
    ], $mol_locale, "warn", null);
    $.$mol_locale = $mol_locale;
})($ || ($ = {}));
//mol/locale/locale.ts
;
"use strict";
var $;
(function ($) {
    class $mol_speck extends $mol_view {
        attr() {
            return {
                ...super.attr(),
                mol_theme: this.theme()
            };
        }
        style() {
            return {
                ...super.style(),
                minHeight: "1em"
            };
        }
        sub() {
            return [
                this.value()
            ];
        }
        theme() {
            return "$mol_theme_accent";
        }
        value() {
            return null;
        }
    }
    $.$mol_speck = $mol_speck;
})($ || ($ = {}));
//mol/speck/-view.tree/speck.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/layer/layer.css", ":root {\n\t--mol_layer_hover: 1;\n\t--mol_layer_focus: 2;\n\t--mol_layer_speck: 3;\n\t--mol_layer_float: 4;\n\t--mol_layer_popup: 5;\n}\n");
})($ || ($ = {}));
//mol/layer/-css/layer.css.ts
;
"use strict";
var $;
(function ($) {
    const { vary } = $mol_style_func;
    $.$mol_layer = {
        hover: vary('--mol_layer_hover'),
        focus: vary('--mol_layer_focus'),
        speck: vary('--mol_layer_speck'),
        float: vary('--mol_layer_float'),
        popup: vary('--mol_layer_popup'),
    };
})($ || ($ = {}));
//mol/layer/layer.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/speck/speck.view.css", "[mol_speck] {\n\tfont-size: .625rem;\n\tborder-radius: 1rem;\n\tmargin: -0.5rem -0.25rem;\n\talign-self: flex-start;\n\tmin-height: 1em;\n\tmin-width: .5em;\n\tvertical-align: sub;\n\tpadding: .25em .5em;\n\tposition: absolute;\n\tz-index: var(--mol_layer_speck);\n\ttext-align: center;\n\tline-height: 1;\n\tdisplay: inline-block;\n\twhite-space: nowrap;\n\ttext-overflow: ellipsis;\n\tuser-select: none;\n}\n");
})($ || ($ = {}));
//mol/speck/-css/speck.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_button extends $mol_view {
        enabled() {
            return true;
        }
        click(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        event_click(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        event() {
            return {
                ...super.event(),
                click: (event) => this.event_activate(event),
                dblclick: (event) => this.clicks(event),
                keydown: (event) => this.event_key_press(event)
            };
        }
        attr() {
            return {
                ...super.attr(),
                disabled: this.disabled(),
                role: "button",
                tabindex: this.tab_index(),
                title: this.hint_safe()
            };
        }
        sub() {
            return [
                this.title()
            ];
        }
        Speck() {
            const obj = new this.$.$mol_speck();
            obj.value = () => this.error();
            return obj;
        }
        event_activate(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        clicks(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        event_key_press(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        disabled() {
            return false;
        }
        tab_index() {
            return 0;
        }
        hint() {
            return "";
        }
        hint_safe() {
            return this.hint();
        }
        error() {
            return "";
        }
    }
    __decorate([
        $mol_mem
    ], $mol_button.prototype, "click", null);
    __decorate([
        $mol_mem
    ], $mol_button.prototype, "event_click", null);
    __decorate([
        $mol_mem
    ], $mol_button.prototype, "Speck", null);
    __decorate([
        $mol_mem
    ], $mol_button.prototype, "event_activate", null);
    __decorate([
        $mol_mem
    ], $mol_button.prototype, "clicks", null);
    __decorate([
        $mol_mem
    ], $mol_button.prototype, "event_key_press", null);
    $.$mol_button = $mol_button;
})($ || ($ = {}));
//mol/button/-view.tree/button.view.tree.ts
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
//mol/keyboard/code/code.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/button/button.view.css", "[mol_button] {\n\tborder: none;\n\tfont: inherit;\n\tdisplay: inline-flex;\n\tflex-shrink: 0;\n\ttext-decoration: inherit;\n\tcursor: inherit;\n\tposition: relative;\n\tbox-sizing: border-box;\n\tword-break: normal;\n\tcursor: default;\n\tuser-select: none;\n\tborder-radius: var(--mol_gap_round);\n}\n\n[mol_button]:where(:not(:disabled)):hover {\n\tz-index: var(--mol_layer_hover);\n}\n\n[mol_button]:focus {\n\toutline: none;\n\tz-index: var(--mol_layer_focus);\n}\n");
})($ || ($ = {}));
//mol/button/-css/button.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_button extends $.$mol_button {
            status(next = [null]) { return next; }
            disabled() {
                return !this.enabled();
            }
            event_activate(next) {
                if (!next)
                    return;
                if (!this.enabled())
                    return;
                try {
                    this.event_click(next);
                    this.click(next);
                    this.status([null]);
                }
                catch (error) {
                    this.status([error]);
                    $mol_fail_hidden(error);
                }
            }
            event_key_press(event) {
                if (event.keyCode === $mol_keyboard_code.enter) {
                    return this.event_activate(event);
                }
            }
            tab_index() {
                return this.enabled() ? super.tab_index() : -1;
            }
            error() {
                const [error] = this.status();
                if (!error)
                    return '';
                if (error instanceof Promise) {
                    return $mol_fail_hidden(error);
                }
                return String(error.message ?? error);
            }
            hint_safe() {
                try {
                    return this.hint();
                }
                catch (error) {
                    $mol_fail_log(error);
                    return '';
                }
            }
            sub_visible() {
                return [
                    ...this.error() ? [this.Speck()] : [],
                    ...this.sub(),
                ];
            }
        }
        __decorate([
            $mol_mem
        ], $mol_button.prototype, "status", null);
        $$.$mol_button = $mol_button;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/button/button.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_button_typed extends $mol_button {
        minimal_height() {
            return 40;
        }
        minimal_width() {
            return 40;
        }
    }
    $.$mol_button_typed = $mol_button_typed;
})($ || ($ = {}));
//mol/button/typed/-view.tree/typed.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/button/typed/typed.view.css", "[mol_button_typed] {\n\talign-content: center;\n\talign-items: center;\n\tpadding: var(--mol_gap_text);\n\tborder-radius: var(--mol_gap_round);\n\tgap: var(--mol_gap_space);\n\tuser-select: none;\n\tcursor: pointer;\n}\n\n[mol_button_typed][disabled] {\n\tpointer-events: none;\n}\n\n[mol_button_typed]:hover ,\n[mol_button_typed]:focus {\n\tbackground-color: var(--mol_theme_hover);\n}\n\n[mol_button_typed]:active {\n\tcolor: var(--mol_theme_focus);\n}\n\n");
})($ || ($ = {}));
//mol/button/typed/-css/typed.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_button_minor extends $mol_button_typed {
    }
    $.$mol_button_minor = $mol_button_minor;
})($ || ($ = {}));
//mol/button/minor/-view.tree/minor.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/button/minor/minor.view.css", "[mol_button_minor] {\n\tcolor: var(--mol_theme_control);\n}\n\n[mol_button_minor][disabled] {\n\tcolor: var(--mol_theme_shade);\n}\n");
})($ || ($ = {}));
//mol/button/minor/-css/minor.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_plugin extends $mol_view {
        dom_node(next) {
            const node = next || $mol_owning_get(this).host.dom_node();
            $mol_dom_render_attributes(node, this.attr_static());
            const events = $mol_wire_async(this.event());
            for (let event_name in events) {
                node.addEventListener(event_name, events[event_name], { passive: false });
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
        $mol_mem
    ], $mol_plugin.prototype, "dom_node", null);
    $.$mol_plugin = $mol_plugin;
})($ || ($ = {}));
//mol/plugin/plugin.ts
;
"use strict";
var $;
(function ($) {
    class $mol_meter extends $mol_plugin {
        zoom() {
            return 1;
        }
        width(val) {
            if (val !== undefined)
                return val;
            return 0;
        }
        height(val) {
            if (val !== undefined)
                return val;
            return 0;
        }
        left(val) {
            if (val !== undefined)
                return val;
            return 0;
        }
        right(val) {
            if (val !== undefined)
                return val;
            return 0;
        }
        bottom(val) {
            if (val !== undefined)
                return val;
            return 0;
        }
        top(val) {
            if (val !== undefined)
                return val;
            return 0;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_meter.prototype, "width", null);
    __decorate([
        $mol_mem
    ], $mol_meter.prototype, "height", null);
    __decorate([
        $mol_mem
    ], $mol_meter.prototype, "left", null);
    __decorate([
        $mol_mem
    ], $mol_meter.prototype, "right", null);
    __decorate([
        $mol_mem
    ], $mol_meter.prototype, "bottom", null);
    __decorate([
        $mol_mem
    ], $mol_meter.prototype, "top", null);
    $.$mol_meter = $mol_meter;
})($ || ($ = {}));
//mol/meter/-view.tree/meter.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_meter extends $.$mol_meter {
            rect() {
                const node = this.dom_node();
                const win = this.$.$mol_dom_context;
                if (node !== $mol_dom_context.document.body) {
                    const rect = this.view_rect();
                    if (rect) {
                        const { left, top, right, bottom, width, height } = rect;
                        return { left, top, right, bottom, width, height, zoom: win.devicePixelRatio || 1 };
                    }
                }
                const size = $mol_window.size();
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
            $mol_mem
        ], $mol_meter.prototype, "rect", null);
        $$.$mol_meter = $mol_meter;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/meter/meter.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_vector extends Array {
        get length() {
            return super.length;
        }
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
        powered0(mult) {
            return this.map(value => value ** mult);
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
        center() {
            const Result = this[0].constructor;
            return new Result(...this[0].map((_, i) => this.reduce((sum, point) => sum + point[i], 0) / this.length));
        }
        distance() {
            let distance = 0;
            for (let i = 1; i < this.length; ++i) {
                distance += this[i - 1].reduce((sum, min, j) => sum + (min - this[i][j]) ** 2, 0) ** (1 / this[i].length);
            }
            return distance;
        }
        transponed() {
            return this[0].map((_, i) => this.map(row => row[i]));
        }
        get x() { return this[0]; }
        set x(next) { this[0] = next; }
        get y() { return this[1]; }
        set y(next) { this[1] = next; }
        get z() { return this[2]; }
        set z(next) { this[2] = next; }
    }
    $.$mol_vector = $mol_vector;
    class $mol_vector_1d extends $mol_vector {
    }
    $.$mol_vector_1d = $mol_vector_1d;
    class $mol_vector_2d extends $mol_vector {
    }
    $.$mol_vector_2d = $mol_vector_2d;
    class $mol_vector_3d extends $mol_vector {
    }
    $.$mol_vector_3d = $mol_vector_3d;
    class $mol_vector_range extends $mol_vector {
        0;
        1;
        constructor(min, max = min) {
            super(min, max);
            this[0] = min;
            this[1] = max;
        }
        get min() { return this[0]; }
        set min(next) { this[0] = next; }
        get max() { return this[1]; }
        set max(next) { this[1] = next; }
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
//mol/vector/vector.ts
;
"use strict";
var $;
(function ($) {
    class $mol_touch extends $mol_plugin {
        start_zoom(val) {
            if (val !== undefined)
                return val;
            return 0;
        }
        start_distance(val) {
            if (val !== undefined)
                return val;
            return 0;
        }
        zoom(val) {
            if (val !== undefined)
                return val;
            return 1;
        }
        allow_draw() {
            return true;
        }
        allow_pan() {
            return true;
        }
        allow_zoom() {
            return true;
        }
        action_type(val) {
            if (val !== undefined)
                return val;
            return "";
        }
        action_point(val) {
            if (val !== undefined)
                return val;
            const obj = new this.$.$mol_vector_2d(NaN, NaN);
            return obj;
        }
        start_pan(val) {
            if (val !== undefined)
                return val;
            return [
                0,
                0
            ];
        }
        pan(val) {
            if (val !== undefined)
                return val;
            const obj = new this.$.$mol_vector_2d(0, 0);
            return obj;
        }
        pointer_center() {
            const obj = new this.$.$mol_vector_2d(NaN, NaN);
            return obj;
        }
        start_pos(val) {
            if (val !== undefined)
                return val;
            return null;
        }
        swipe_precision() {
            return 16;
        }
        swipe_right(val) {
            if (val !== undefined)
                return val;
            return null;
        }
        swipe_bottom(val) {
            if (val !== undefined)
                return val;
            return null;
        }
        swipe_left(val) {
            if (val !== undefined)
                return val;
            return null;
        }
        swipe_top(val) {
            if (val !== undefined)
                return val;
            return null;
        }
        swipe_from_right(val) {
            if (val !== undefined)
                return val;
            return null;
        }
        swipe_from_bottom(val) {
            if (val !== undefined)
                return val;
            return null;
        }
        swipe_from_left(val) {
            if (val !== undefined)
                return val;
            return null;
        }
        swipe_from_top(val) {
            if (val !== undefined)
                return val;
            return null;
        }
        swipe_to_right(val) {
            if (val !== undefined)
                return val;
            return null;
        }
        swipe_to_bottom(val) {
            if (val !== undefined)
                return val;
            return null;
        }
        swipe_to_left(val) {
            if (val !== undefined)
                return val;
            return null;
        }
        swipe_to_top(val) {
            if (val !== undefined)
                return val;
            return null;
        }
        draw_start(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        draw(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        draw_end(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        style() {
            return {
                ...super.style(),
                "touch-action": "none",
                "overscroll-behavior": "none"
            };
        }
        event() {
            return {
                ...super.event(),
                pointerdown: (event) => this.event_start(event),
                pointermove: (event) => this.event_move(event),
                pointerup: (event) => this.event_end(event),
                pointerleave: (event) => this.event_leave(event),
                wheel: (event) => this.event_wheel(event)
            };
        }
        event_start(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        event_move(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        event_end(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        event_leave(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        event_wheel(event) {
            if (event !== undefined)
                return event;
            return null;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_touch.prototype, "start_zoom", null);
    __decorate([
        $mol_mem
    ], $mol_touch.prototype, "start_distance", null);
    __decorate([
        $mol_mem
    ], $mol_touch.prototype, "zoom", null);
    __decorate([
        $mol_mem
    ], $mol_touch.prototype, "action_type", null);
    __decorate([
        $mol_mem
    ], $mol_touch.prototype, "action_point", null);
    __decorate([
        $mol_mem
    ], $mol_touch.prototype, "start_pan", null);
    __decorate([
        $mol_mem
    ], $mol_touch.prototype, "pan", null);
    __decorate([
        $mol_mem
    ], $mol_touch.prototype, "pointer_center", null);
    __decorate([
        $mol_mem
    ], $mol_touch.prototype, "start_pos", null);
    __decorate([
        $mol_mem
    ], $mol_touch.prototype, "swipe_right", null);
    __decorate([
        $mol_mem
    ], $mol_touch.prototype, "swipe_bottom", null);
    __decorate([
        $mol_mem
    ], $mol_touch.prototype, "swipe_left", null);
    __decorate([
        $mol_mem
    ], $mol_touch.prototype, "swipe_top", null);
    __decorate([
        $mol_mem
    ], $mol_touch.prototype, "swipe_from_right", null);
    __decorate([
        $mol_mem
    ], $mol_touch.prototype, "swipe_from_bottom", null);
    __decorate([
        $mol_mem
    ], $mol_touch.prototype, "swipe_from_left", null);
    __decorate([
        $mol_mem
    ], $mol_touch.prototype, "swipe_from_top", null);
    __decorate([
        $mol_mem
    ], $mol_touch.prototype, "swipe_to_right", null);
    __decorate([
        $mol_mem
    ], $mol_touch.prototype, "swipe_to_bottom", null);
    __decorate([
        $mol_mem
    ], $mol_touch.prototype, "swipe_to_left", null);
    __decorate([
        $mol_mem
    ], $mol_touch.prototype, "swipe_to_top", null);
    __decorate([
        $mol_mem
    ], $mol_touch.prototype, "draw_start", null);
    __decorate([
        $mol_mem
    ], $mol_touch.prototype, "draw", null);
    __decorate([
        $mol_mem
    ], $mol_touch.prototype, "draw_end", null);
    __decorate([
        $mol_mem
    ], $mol_touch.prototype, "event_start", null);
    __decorate([
        $mol_mem
    ], $mol_touch.prototype, "event_move", null);
    __decorate([
        $mol_mem
    ], $mol_touch.prototype, "event_end", null);
    __decorate([
        $mol_mem
    ], $mol_touch.prototype, "event_leave", null);
    __decorate([
        $mol_mem
    ], $mol_touch.prototype, "event_wheel", null);
    $.$mol_touch = $mol_touch;
})($ || ($ = {}));
//mol/touch/-view.tree/touch.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_touch extends $.$mol_touch {
            auto() {
                this.pointer_events();
                this.start_pan();
                this.start_pos();
                this.start_distance();
                this.start_zoom();
                this.action_type();
                this.view_rect();
            }
            pointer_events(next = []) {
                return next;
            }
            pointer_coords() {
                const events = this.pointer_events();
                const touches = events.filter(e => e.pointerType === 'touch');
                const pens = events.filter(e => e.pointerType === 'pen');
                const mouses = events.filter(e => !e.pointerType || e.pointerType === 'mouse');
                const choosen = touches.length ? touches : pens.length ? pens : mouses;
                return new $mol_vector(...choosen.map(event => this.event_coords(event)));
            }
            pointer_center() {
                const coords = this.pointer_coords();
                return coords.length ? coords.center() : new $mol_vector_2d(NaN, NaN);
            }
            event_coords(event) {
                const { left, top } = this.view_rect();
                return new $mol_vector_2d(Math.round(event.pageX - left), Math.round(event.pageY - top));
            }
            action_point() {
                const coord = this.pointer_center();
                if (!coord)
                    return null;
                const zoom = this.zoom();
                const pan = this.pan();
                return new $mol_vector_2d((coord.x - pan.x) / zoom, (coord.y - pan.y) / zoom);
            }
            event_eat(event) {
                if (event instanceof PointerEvent) {
                    const events = this.pointer_events()
                        .filter(e => e instanceof PointerEvent)
                        .filter(e => e.pointerId !== event.pointerId);
                    if (event.type !== 'pointerup' && event.type !== 'pointerleave')
                        events.push(event);
                    this.pointer_events(events);
                    const touch_count = events.filter(e => e.pointerType === 'touch').length;
                    if (this.allow_zoom() && touch_count === 2) {
                        return this.action_type('zoom');
                    }
                    if (this.action_type() === 'zoom' && touch_count === 1) {
                        return this.action_type('zoom');
                    }
                    let button;
                    (function (button) {
                        button[button["left"] = 1] = "left";
                        button[button["right"] = 2] = "right";
                        button[button["middle"] = 4] = "middle";
                    })(button || (button = {}));
                    if (events.length > 0) {
                        if (event.ctrlKey && this.allow_zoom())
                            return this.action_type('zoom');
                        if (event.buttons === button.left && this.allow_draw())
                            return this.action_type('draw');
                        if (event.buttons && this.allow_pan())
                            return this.action_type('pan');
                    }
                    return this.action_type('');
                }
                if (event instanceof WheelEvent) {
                    this.pointer_events([event]);
                    if (event.shiftKey)
                        return this.action_type('pan');
                    return this.action_type('zoom');
                }
                return this.action_type('');
            }
            event_start(event) {
                if (event.defaultPrevented)
                    return;
                this.start_pan(this.pan());
                const action_type = this.event_eat(event);
                if (!action_type)
                    return;
                const coords = this.pointer_coords();
                this.start_pos(coords.center());
                if (action_type === 'draw') {
                    this.draw_start(event);
                    return;
                }
                this.start_distance(coords.distance());
                this.start_zoom(this.zoom());
            }
            event_move(event) {
                if (event.defaultPrevented)
                    return;
                const rect = this.view_rect();
                if (!rect)
                    return;
                const start_pan = this.start_pan();
                const action_type = this.event_eat(event);
                const start_pos = this.start_pos();
                let pos = this.pointer_center();
                if (!action_type)
                    return;
                if (!start_pos)
                    return;
                if (action_type === 'draw') {
                    const distance = new $mol_vector(start_pos, pos).distance();
                    if (distance >= 4) {
                        this.draw(event);
                    }
                    return;
                }
                if (action_type === 'pan') {
                    this.dom_node().setPointerCapture(event.pointerId);
                    this.pan(new $mol_vector_2d(start_pan[0] + pos[0] - start_pos[0], start_pan[1] + pos[1] - start_pos[1]));
                }
                const precision = this.swipe_precision();
                if ((this.swipe_right !== $mol_touch.prototype.swipe_right
                    || this.swipe_from_left !== $mol_touch.prototype.swipe_from_left
                    || this.swipe_to_right !== $mol_touch.prototype.swipe_to_right)
                    && pos[0] - start_pos[0] > precision * 2
                    && Math.abs(pos[1] - start_pos[1]) < precision) {
                    this.swipe_right(event);
                }
                if ((this.swipe_left !== $mol_touch.prototype.swipe_left
                    || this.swipe_from_right !== $mol_touch.prototype.swipe_from_right
                    || this.swipe_to_left !== $mol_touch.prototype.swipe_to_left)
                    && start_pos[0] - pos[0] > precision * 2
                    && Math.abs(pos[1] - start_pos[1]) < precision) {
                    this.swipe_left(event);
                }
                if ((this.swipe_bottom !== $mol_touch.prototype.swipe_bottom
                    || this.swipe_from_top !== $mol_touch.prototype.swipe_from_top
                    || this.swipe_to_bottom !== $mol_touch.prototype.swipe_to_bottom)
                    && pos[1] - start_pos[1] > precision * 2
                    && Math.abs(pos[0] - start_pos[0]) < precision) {
                    this.swipe_bottom(event);
                }
                if ((this.swipe_top !== $mol_touch.prototype.swipe_top
                    || this.swipe_from_bottom !== $mol_touch.prototype.swipe_from_bottom
                    || this.swipe_to_top !== $mol_touch.prototype.swipe_to_top)
                    && start_pos[1] - pos[1] > precision * 2
                    && Math.abs(pos[0] - start_pos[0]) < precision) {
                    this.swipe_top(event);
                }
                if (action_type === 'zoom') {
                    const coords = this.pointer_coords();
                    const distance = coords.distance();
                    const start_distance = this.start_distance();
                    const center = coords.center();
                    const start_zoom = this.start_zoom();
                    let mult = Math.abs(distance - start_distance) < 32 ? 1 : distance / start_distance;
                    this.zoom(start_zoom * mult);
                    const pan = new $mol_vector_2d((start_pan[0] - center[0] + pos[0] - start_pos[0]) * mult + center[0], (start_pan[1] - center[1] + pos[1] - start_pos[1]) * mult + center[1]);
                    this.pan(pan);
                }
            }
            event_end(event) {
                const action = this.action_type();
                if (action === 'draw') {
                    this.draw_end(event);
                }
                this.event_leave(event);
            }
            event_leave(event) {
                this.event_eat(event);
                this.dom_node().releasePointerCapture(event.pointerId);
                this.start_pos(null);
            }
            swipe_left(event) {
                if (this.view_rect().right - this.start_pos()[0] < this.swipe_precision() * 2)
                    this.swipe_from_right(event);
                else
                    this.swipe_to_left(event);
                this.event_end(event);
            }
            swipe_right(event) {
                if (this.start_pos()[0] - this.view_rect().left < this.swipe_precision() * 2)
                    this.swipe_from_left(event);
                else
                    this.swipe_to_right(event);
                this.event_end(event);
            }
            swipe_top(event) {
                if (this.view_rect().bottom - this.start_pos()[1] < this.swipe_precision() * 2)
                    this.swipe_from_bottom(event);
                else
                    this.swipe_to_top(event);
                this.event_end(event);
            }
            swipe_bottom(event) {
                if (this.start_pos()[1] - this.view_rect().top < this.swipe_precision() * 2)
                    this.swipe_from_top(event);
                else
                    this.swipe_to_bottom(event);
                this.event_end(event);
            }
            event_wheel(event) {
                if (event.defaultPrevented)
                    return;
                if (this.pan === $mol_touch.prototype.pan && this.zoom === $mol_touch.prototype.zoom)
                    return;
                if (this.pan !== $mol_touch.prototype.pan) {
                    event.preventDefault();
                }
                const action_type = this.event_eat(event);
                if (action_type === 'zoom') {
                    const zoom_prev = this.zoom() || 0.001;
                    const zoom_next = zoom_prev * (1 - .001 * Math.min(event.deltaY, 100));
                    const mult = zoom_next / zoom_prev;
                    this.zoom(zoom_next);
                    const pan_prev = this.pan();
                    const center = this.pointer_center();
                    const pan_next = pan_prev.multed0(mult).added1(center.multed0(1 - mult));
                    this.pan(pan_next);
                }
                if (action_type === 'pan') {
                    const pan_prev = this.pan();
                    const pan_next = new $mol_vector_2d(pan_prev.x - event.deltaX, pan_prev.y - event.deltaY);
                    this.pan(pan_next);
                }
            }
        }
        __decorate([
            $mol_mem
        ], $mol_touch.prototype, "pointer_events", null);
        __decorate([
            $mol_mem
        ], $mol_touch.prototype, "pointer_coords", null);
        __decorate([
            $mol_mem
        ], $mol_touch.prototype, "pointer_center", null);
        __decorate([
            $mol_mem
        ], $mol_touch.prototype, "action_point", null);
        $$.$mol_touch = $mol_touch;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/touch/touch.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_ghost extends $mol_view {
        Sub() {
            const obj = new this.$.$mol_view();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_ghost.prototype, "Sub", null);
    $.$mol_ghost = $mol_ghost;
})($ || ($ = {}));
//mol/ghost/-view.tree/ghost.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_ghost extends $.$mol_ghost {
            dom_node(next) {
                const node = this.Sub().dom_node(next);
                $mol_dom_render_attributes(node, this.attr_static());
                $mol_dom_render_events(node, this.event());
                return node;
            }
            dom_node_actual() {
                this.dom_node();
                const node = this.Sub().dom_node_actual();
                const attr = this.attr();
                const style = this.style();
                const fields = this.field();
                $mol_dom_render_attributes(node, attr);
                $mol_dom_render_styles(node, style);
                $mol_dom_render_fields(node, fields);
                return node;
            }
            dom_tree() {
                const Sub = this.Sub();
                const node = Sub.dom_tree();
                try {
                    this.dom_node_actual();
                    this.auto();
                }
                catch (error) {
                    $mol_fail_log(error);
                }
                return node;
            }
            title() {
                return this.Sub().title();
            }
            minimal_width() {
                return this.Sub().minimal_width();
            }
            minimal_height() {
                return this.Sub().minimal_height();
            }
        }
        __decorate([
            $mol_mem
        ], $mol_ghost.prototype, "dom_node", null);
        __decorate([
            $mol_mem
        ], $mol_ghost.prototype, "dom_node_actual", null);
        $$.$mol_ghost = $mol_ghost;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/ghost/ghost.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_book extends $mol_view {
        sub() {
            return this.pages_wrapped();
        }
        minimal_width() {
            return 0;
        }
        pages() {
            return [];
        }
        plugins() {
            return [
                this.Meter(),
                this.Touch()
            ];
        }
        Page(id) {
            const obj = new this.$.$mol_book_page();
            obj.Sub = () => this.page(id);
            obj.visible = () => this.page_visible(id);
            return obj;
        }
        Placeholder() {
            const obj = new this.$.$mol_book_placeholder();
            obj.title = () => this.title();
            return obj;
        }
        pages_wrapped() {
            return [];
        }
        width() {
            return this.Meter().width();
        }
        Meter() {
            const obj = new this.$.$mol_meter();
            return obj;
        }
        event_front_up(val) {
            if (val !== undefined)
                return val;
            return null;
        }
        event_front_down(val) {
            if (val !== undefined)
                return val;
            return null;
        }
        Touch() {
            const obj = new this.$.$mol_touch();
            obj.swipe_from_left = (val) => this.event_front_up(val);
            obj.swipe_to_left = (val) => this.event_front_down(val);
            return obj;
        }
        page(id) {
            return null;
        }
        page_visible(id) {
            return true;
        }
    }
    __decorate([
        $mol_mem_key
    ], $mol_book.prototype, "Page", null);
    __decorate([
        $mol_mem
    ], $mol_book.prototype, "Placeholder", null);
    __decorate([
        $mol_mem
    ], $mol_book.prototype, "Meter", null);
    __decorate([
        $mol_mem
    ], $mol_book.prototype, "event_front_up", null);
    __decorate([
        $mol_mem
    ], $mol_book.prototype, "event_front_down", null);
    __decorate([
        $mol_mem
    ], $mol_book.prototype, "Touch", null);
    $.$mol_book = $mol_book;
    class $mol_book_placeholder extends $mol_view {
        minimal_width() {
            return 400;
        }
        attr() {
            return {
                ...super.attr(),
                tabindex: null
            };
        }
    }
    $.$mol_book_placeholder = $mol_book_placeholder;
    class $mol_book_page extends $mol_ghost {
        attr_static() {
            return {
                ...super.attr_static(),
                tabindex: 0,
                mol_book_page_visible: true
            };
        }
        attr() {
            return {
                ...super.attr(),
                mol_book_page_focused: this.focused(),
                mol_book_page_visible: this.visible()
            };
        }
        visible() {
            return true;
        }
    }
    $.$mol_book_page = $mol_book_page;
})($ || ($ = {}));
//mol/book/-view.tree/book.view.tree.ts
;
"use strict";
//mol/type/result/result.ts
;
"use strict";
//mol/type/error/error.ts
;
"use strict";
//mol/type/override/override.ts
;
"use strict";
//mol/style/properties/properties.ts
;
"use strict";
//mol/style/pseudo/class.ts
;
"use strict";
//mol/style/pseudo/element.ts
;
"use strict";
//mol/style/guard/guard.ts
;
"use strict";
var $;
(function ($) {
    function $mol_style_sheet(Component, config0) {
        let rules = [];
        const block = $mol_dom_qname($mol_ambient({}).$mol_func_name(Component));
        const kebab = (name) => name.replace(/[A-Z]/g, letter => '-' + letter.toLowerCase());
        const make_class = (prefix, path, config) => {
            const props = [];
            const selector = (prefix, path) => {
                if (path.length === 0)
                    return prefix || `[${block}]`;
                let res = `[${block}_${path.join('_')}]`;
                if (prefix)
                    res = prefix + ' :where(' + res + ')';
                return res;
            };
            for (const key of Object.keys(config).reverse()) {
                if (/^[a-z]/.test(key)) {
                    const addProp = (keys, val) => {
                        if (Array.isArray(val)) {
                            if (val[0] && [Array, Object].includes(val[0].constructor)) {
                                val = val.map(v => {
                                    return Object.entries(v).map(([n, a]) => {
                                        if (a === true)
                                            return kebab(n);
                                        if (a === false)
                                            return null;
                                        return String(a);
                                    }).filter(Boolean).join(' ');
                                }).join(',');
                            }
                            else {
                                val = val.join(' ');
                            }
                            props.push(`\t${keys.join('-')}: ${val};\n`);
                        }
                        else if (val.constructor === Object) {
                            for (let suffix in val) {
                                addProp([...keys, kebab(suffix)], val[suffix]);
                            }
                        }
                        else {
                            props.push(`\t${keys.join('-')}: ${val};\n`);
                        }
                    };
                    addProp([kebab(key)], config[key]);
                }
                else if (/^[A-Z]/.test(key)) {
                    make_class(prefix, [...path, key.toLowerCase()], config[key]);
                }
                else if (key[0] === '$') {
                    make_class(selector(prefix, path) + ' :where([' + $mol_dom_qname(key) + '])', [], config[key]);
                }
                else if (key === '>') {
                    const types = config[key];
                    for (let type in types) {
                        make_class(selector(prefix, path) + ' > :where([' + $mol_dom_qname(type) + '])', [], types[type]);
                    }
                }
                else if (key === '@') {
                    const attrs = config[key];
                    for (let name in attrs) {
                        for (let val in attrs[name]) {
                            make_class(selector(prefix, path) + ':where([' + name + '=' + JSON.stringify(val) + '])', [], attrs[name][val]);
                        }
                    }
                }
                else if (key === '@media') {
                    const media = config[key];
                    for (let query in media) {
                        rules.push('}\n');
                        make_class(prefix, path, media[query]);
                        rules.push(`${key} ${query} {\n`);
                    }
                }
                else {
                    make_class(selector(prefix, path) + key, [], config[key]);
                }
            }
            if (props.length) {
                rules.push(`${selector(prefix, path)} {\n${props.reverse().join('')}}\n`);
            }
        };
        make_class('', [], config0);
        return rules.reverse().join('');
    }
    $.$mol_style_sheet = $mol_style_sheet;
})($ || ($ = {}));
//mol/style/sheet/sheet.ts
;
"use strict";
var $;
(function ($) {
    function $mol_style_define(Component, config) {
        return $mol_style_attach(Component.name, $mol_style_sheet(Component, config));
    }
    $.$mol_style_define = $mol_style_define;
})($ || ($ = {}));
//mol/style/define/define.ts
;
"use strict";
var $;
(function ($) {
    class $mol_scroll extends $mol_view {
        scroll_top(val) {
            if (val !== undefined)
                return val;
            return 0;
        }
        scroll_left(val) {
            if (val !== undefined)
                return val;
            return 0;
        }
        field() {
            return {
                ...super.field(),
                tabIndex: this.tabindex()
            };
        }
        event() {
            return {
                ...super.event(),
                scroll: (event) => this.event_scroll(event)
            };
        }
        tabindex() {
            return -1;
        }
        event_scroll(event) {
            if (event !== undefined)
                return event;
            return null;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_scroll.prototype, "scroll_top", null);
    __decorate([
        $mol_mem
    ], $mol_scroll.prototype, "scroll_left", null);
    __decorate([
        $mol_mem
    ], $mol_scroll.prototype, "event_scroll", null);
    $.$mol_scroll = $mol_scroll;
})($ || ($ = {}));
//mol/scroll/-view.tree/scroll.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_dom_listener extends $mol_object {
        _node;
        _event;
        _handler;
        _config;
        constructor(_node, _event, _handler, _config = { passive: true }) {
            super();
            this._node = _node;
            this._event = _event;
            this._handler = _handler;
            this._config = _config;
            this._node.addEventListener(this._event, this._handler, this._config);
        }
        destructor() {
            this._node.removeEventListener(this._event, this._handler, this._config);
            super.destructor();
        }
    }
    $.$mol_dom_listener = $mol_dom_listener;
})($ || ($ = {}));
//mol/dom/listener/listener.ts
;
"use strict";
var $;
(function ($) {
    class $mol_print extends $mol_object {
        static before() {
            return new $mol_dom_listener(this.$.$mol_dom_context, 'beforeprint', () => {
                this.active(true);
            });
        }
        static after() {
            return new $mol_dom_listener(this.$.$mol_dom_context, 'afterprint', () => {
                this.active(false);
            });
        }
        static active(next) {
            this.before();
            this.after();
            return next || false;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_print, "before", null);
    __decorate([
        $mol_mem
    ], $mol_print, "after", null);
    __decorate([
        $mol_mem
    ], $mol_print, "active", null);
    $.$mol_print = $mol_print;
})($ || ($ = {}));
//mol/print/print.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const { per, rem, px } = $mol_style_unit;
        $mol_style_define($mol_scroll, {
            overflow: 'auto',
        });
        $mol_style_define($mol_scroll, {
            display: 'flex',
            overflow: 'overlay',
            flex: {
                direction: 'column',
                grow: 1,
                shrink: 1,
                basis: 0,
            },
            outline: 'none',
            alignSelf: 'stretch',
            boxSizing: 'border-box',
            willChange: 'scroll-position',
            scroll: {
                padding: [rem(.75), 0],
            },
            maxHeight: per(100),
            maxWidth: per(100),
            webkitOverflowScrolling: 'touch',
            contain: 'content',
            '>': {
                $mol_view: {
                    transform: 'translateZ(0)',
                },
            },
            '::-webkit-scrollbar': {
                width: rem(.25),
                height: rem(.25),
            },
            ':hover': {
                '::-webkit-scrollbar': {
                    width: rem(.5),
                    height: rem(.5),
                },
            },
            '@media': {
                'print': {
                    overflow: 'visible',
                    contain: 'none',
                    maxHeight: 'unset',
                },
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/scroll/scroll.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_scroll extends $.$mol_scroll {
            scroll_top(next, cache) {
                const el = this.dom_node();
                if (next !== undefined && !cache)
                    el.scrollTop = next;
                return el.scrollTop;
            }
            scroll_left(next, cache) {
                const el = this.dom_node();
                if (next !== undefined && !cache)
                    el.scrollLeft = next;
                return el.scrollLeft;
            }
            event_scroll(next) {
                const el = this.dom_node();
                this.scroll_left(el.scrollLeft, 'cache');
                this.scroll_top(el.scrollTop, 'cache');
            }
            minimal_height() {
                return this.$.$mol_print.active() ? null : 0;
            }
            minimal_width() {
                return this.$.$mol_print.active() ? null : 0;
            }
        }
        __decorate([
            $mol_mem
        ], $mol_scroll.prototype, "scroll_top", null);
        __decorate([
            $mol_mem
        ], $mol_scroll.prototype, "scroll_left", null);
        $$.$mol_scroll = $mol_scroll;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/scroll/scroll.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_book2 extends $mol_scroll {
        sub() {
            return this.pages();
        }
        minimal_width() {
            return 0;
        }
        Placeholder() {
            const obj = new this.$.$mol_view();
            return obj;
        }
        Gap(id) {
            const obj = new this.$.$mol_view();
            obj.title = () => "";
            return obj;
        }
        pages() {
            return [];
        }
    }
    __decorate([
        $mol_mem
    ], $mol_book2.prototype, "Placeholder", null);
    __decorate([
        $mol_mem_key
    ], $mol_book2.prototype, "Gap", null);
    $.$mol_book2 = $mol_book2;
})($ || ($ = {}));
//mol/book2/-view.tree/book2.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $.$mol_mem_cached = $mol_wire_probe;
})($ || ($ = {}));
//mol/mem/cached/cached.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/book2/book2.view.css", "[mol_book2] {\n\tdisplay: flex;\n\tflex-flow: row nowrap;\n\talign-items: stretch;\n\tflex: 1 1 auto;\n\talign-self: stretch;\n\tmargin: 0;\n\t/* box-shadow: 0 0 0 1px var(--mol_theme_line); */\n\t/* transform: translateZ(0); */\n\ttransition: none;\n\toverflow: overlay;\n\tscroll-snap-type: x mandatory;\n\tpadding: 0 .25rem;\n\tscroll-padding: 0 .25rem;\n\tgap: 1px;\n}\n\n[mol_book2] > * {\n/* \tflex: none; */\n\tscroll-snap-stop: always;\n\tscroll-snap-align: end;\n\tposition: relative;\n\tmin-height: 100%;\n\tmax-height: 100%;\n\tmax-width: 100%;\n\tflex-shrink: 0;\n}\n\n:where([mol_book2]) > * {\n\tbackground-color: var(--mol_theme_card);\n\t/* box-shadow: 0 0 0 1px var(--mol_theme_back); */\n}\n\n[mol_book2] > [mol_book2] {\n\tdisplay: contents;\n}\n\n[mol_book2] > *:first-child {\n\tscroll-snap-align: start;\n}\n\n[mol_book2] > [mol_view] {\n\ttransform: none; /* prevent content clipping */\n}\n\n[mol_book2_placeholder] {\n\tflex: 1 1 0;\n\tbackground: none;\n}\n\n[mol_book2_gap] {\n\tbackground: none;\n\tflex-grow: 1;\n\tscroll-snap-align: none;\n\tmargin-right: -1px;\n\tbox-shadow: none;\n}\n");
})($ || ($ = {}));
//mol/book2/-css/book2.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_book2 extends $.$mol_book2 {
            title() {
                return this.pages().map(page => {
                    try {
                        return page?.title();
                    }
                    catch (error) {
                        $mol_fail_log(error);
                    }
                }).reverse().filter(Boolean).join(' | ');
            }
            sub() {
                const next = [...this.pages(), this.Placeholder()];
                const prev = $mol_mem_cached(() => this.sub()) ?? [];
                for (let i = 1; i++;) {
                    const p = prev[prev.length - i];
                    const n = next[next.length - i];
                    if (!n)
                        break;
                    if (p === n)
                        continue;
                    n.bring();
                    break;
                }
                return next;
            }
            bring() {
                const pages = this.pages();
                if (pages.length)
                    pages[pages.length - 1].bring();
                else
                    super.bring();
            }
        }
        __decorate([
            $mol_mem
        ], $mol_book2.prototype, "sub", null);
        $$.$mol_book2 = $mol_book2;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/book2/book2.view.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/book/book.view.css", "[mol_book] {\n\tdisplay: flex;\n\tflex-flow: row nowrap;\n\talign-items: stretch;\n\tjustify-content: flex-start;\n\toverflow: hidden;\n\tflex: 1 1 auto;\n\talign-self: stretch;\n\tmargin: 0;\n\tbox-shadow: 0 0 0 1px var(--mol_theme_line);\n\ttransform: translateZ( 0 );\n}\n\n[mol_book] > *:not([mol_book_page_visible]) {\n\tposition: absolute; \n\tleft: 0;\n\ttop: 0;\n}\n\n[mol_book] > [mol_book_page_focused]:not([mol_book_page_visible]) ~ * {\n\topacity: .2;\n\tpointer-events: none;\n\tz-index: -1;\n}\n\n[mol_book] > *:not([mol_book_page_visible]):not([mol_book_page_focused]) {\n\ttransform: translate3d( -100% , 0 , 0 );\n}\n\n[mol_book] > *:not([mol_book_page_visible]):not([mol_book_page_focused]) + *:before {\n\tcontent : '•••';\n\tposition: absolute;\n\ttop: 1rem;\n\tleft: 0;\n\tz-index: 2;\n\tpointer-events: none;\n\tcolor: var(--mol_theme_text);\n\ttransform: rotate(90deg);\n}\n\n[mol_book] > * {\n\tposition: relative;\n\t/* animation: mol_book_page_show linear .2s; */\n\ttransition-timing-function: linear;\n\tz-index: 0;\n\tmin-height: 100%;\n\tmax-height: 100%;\n}\n\n[mol_book_placeholder] {\n\tflex: 1000 1 400px;\n\tbox-shadow: 0 0 0 1px var(--mol_theme_line);\n\tbackground: var(--mol_theme_field);\n\tz-index: -1;\n}\n\n[mol_book_placeholder]:hover {\n\toutline: none;\n}\n\n/*\n@keyframes mol_book_page_show {\n\tfrom {\n\t\ttransform: translateX( 100% );\n\t\topacity: 0;\n\t\tz-index: -1;\n\t}\n}\n\n[mol_book_page]:not(:first-child) {\n\tanimation: mol_book_page_show .25s ease-out;\n}\n*/\n");
})($ || ($ = {}));
//mol/book/-css/book.view.css.ts
;
"use strict";
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
        }
        __decorate([
            $mol_mem
        ], $mol_book.prototype, "pages_extended", null);
        __decorate([
            $mol_mem
        ], $mol_book.prototype, "break_point", null);
        __decorate([
            $mol_mem
        ], $mol_book.prototype, "pages_wrapped", null);
        $$.$mol_book = $mol_book;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/book/book.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_link extends $mol_view {
        uri() {
            return "";
        }
        dom_name() {
            return "a";
        }
        attr() {
            return {
                ...super.attr(),
                href: this.uri_toggle(),
                title: this.hint_safe(),
                target: this.target(),
                download: this.file_name(),
                mol_link_current: this.current()
            };
        }
        sub() {
            return [
                this.title()
            ];
        }
        arg() {
            return {};
        }
        event() {
            return {
                ...super.event(),
                click: (event) => this.click(event)
            };
        }
        uri_toggle() {
            return "";
        }
        hint() {
            return "";
        }
        hint_safe() {
            return this.hint();
        }
        target() {
            return "_self";
        }
        file_name() {
            return "";
        }
        current() {
            return false;
        }
        event_click(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        click(event) {
            return this.event_click(event);
        }
    }
    __decorate([
        $mol_mem
    ], $mol_link.prototype, "event_click", null);
    $.$mol_link = $mol_link;
})($ || ($ = {}));
//mol/link/-view.tree/link.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_state_arg extends $mol_object {
        prefix;
        static href(next) {
            if (next === undefined) {
                next = $mol_dom_context.location.href;
            }
            else if (!/^about:srcdoc/.test(next)) {
                new $mol_after_frame(() => {
                    const next = this.href();
                    const prev = $mol_dom_context.location.href;
                    if (next === prev)
                        return;
                    const history = $mol_dom_context.history;
                    history.replaceState(history.state, $mol_dom_context.document.title, next);
                });
            }
            if ($mol_dom_context.parent !== $mol_dom_context.self) {
                $mol_dom_context.parent.postMessage(['hashchange', next], '*');
            }
            return next;
        }
        static href_normal() {
            return this.link({});
        }
        static href_absolute() {
            return new URL(this.href(), $mol_dom_context.location.href).toString();
        }
        static dict(next) {
            var href = this.href(next && this.make_link(next)).split(/#!?/)[1] || '';
            var chunks = href.split(this.separator);
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
            const nextDict = (next === void 0) ? void 0 : { ...this.dict(), [key]: next };
            const next2 = this.dict(nextDict)[key];
            return (next2 == null) ? null : next2;
        }
        static link(next) {
            return this.make_link({
                ...this.dict_cut(Object.keys(next)),
                ...next,
            });
        }
        static prolog = '!';
        static separator = '/';
        static make_link(next) {
            const chunks = [];
            for (let key in next) {
                if (null == next[key])
                    continue;
                const val = next[key];
                chunks.push([key].concat(val ? [val] : []).map(this.encode).join('='));
            }
            return new URL('#' + this.prolog + chunks.join(this.separator), this.href_absolute()).toString();
        }
        static go(next) {
            $mol_dom_context.location.href = this.make_link(next);
        }
        static encode(str) {
            return encodeURIComponent(str).replace(/\(/g, '%28').replace(/\)/g, '%29');
        }
        constructor(prefix = '') {
            super();
            this.prefix = prefix;
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
        $mol_mem
    ], $mol_state_arg, "href", null);
    __decorate([
        $mol_mem
    ], $mol_state_arg, "href_normal", null);
    __decorate([
        $mol_mem
    ], $mol_state_arg, "href_absolute", null);
    __decorate([
        $mol_mem
    ], $mol_state_arg, "dict", null);
    __decorate([
        $mol_mem_key
    ], $mol_state_arg, "dict_cut", null);
    __decorate([
        $mol_mem_key
    ], $mol_state_arg, "value", null);
    __decorate([
        $mol_mem_key
    ], $mol_state_arg, "make_link", null);
    __decorate([
        $mol_action
    ], $mol_state_arg, "go", null);
    $.$mol_state_arg = $mol_state_arg;
    const $mol_state_arg_change = (event) => {
        $mol_state_arg.href($mol_dom_context.location.href);
    };
    self.addEventListener('hashchange', $mol_state_arg_change);
})($ || ($ = {}));
//mol/state/arg/arg.web.ts
;
"use strict";
var $;
(function ($) {
    const { rem } = $mol_style_unit;
    const { scale } = $mol_style_func;
    $mol_style_define($mol_link, {
        textDecoration: 'none',
        color: $mol_theme.control,
        stroke: 'currentcolor',
        cursor: 'pointer',
        padding: $mol_gap.text,
        boxSizing: 'border-box',
        position: 'relative',
        minWidth: rem(2.5),
        gap: $mol_gap.space,
        border: {
            radius: $mol_gap.round,
        },
        ':hover': {
            background: {
                color: $mol_theme.hover,
            },
        },
        ':focus': {
            outline: 'none',
            background: {
                color: $mol_theme.hover,
            },
        },
        ':focus-within': {
            outline: 'none',
            background: {
                color: $mol_theme.hover,
            }
        },
        ':active': {
            color: $mol_theme.focus,
        },
        '@': {
            mol_link_current: {
                'true': {
                    color: $mol_theme.current,
                    textShadow: '0 0',
                }
            }
        },
    });
})($ || ($ = {}));
//mol/link/link.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_link extends $.$mol_link {
            uri_toggle() {
                return this.current() ? this.uri_off() : this.uri();
            }
            uri() {
                return new this.$.$mol_state_arg(this.state_key()).link(this.arg());
            }
            uri_off() {
                const arg2 = {};
                for (let i in this.arg())
                    arg2[i] = null;
                return new this.$.$mol_state_arg(this.state_key()).link(arg2);
            }
            uri_native() {
                const base = this.$.$mol_state_arg.href();
                return new URL(this.uri(), base);
            }
            current() {
                const base = this.$.$mol_state_arg.href_normal();
                const target = this.uri_native().toString();
                if (base === target)
                    return true;
                const args = this.arg();
                const keys = Object.keys(args).filter(key => args[key] != null);
                if (keys.length === 0)
                    return false;
                for (const key of keys) {
                    if (this.$.$mol_state_arg.value(key) != args[key])
                        return false;
                }
                return true;
            }
            file_name() {
                return null;
            }
            minimal_height() {
                return Math.max(super.minimal_height(), 24);
            }
            external() {
                return this.uri_native().origin !== $mol_dom_context.location.origin;
            }
            target() {
                return this.external() ? '_blank' : '_self';
            }
            hint_safe() {
                try {
                    return this.hint();
                }
                catch (error) {
                    $mol_fail_log(error);
                    return '';
                }
            }
        }
        __decorate([
            $mol_mem
        ], $mol_link.prototype, "uri_toggle", null);
        __decorate([
            $mol_mem
        ], $mol_link.prototype, "uri", null);
        __decorate([
            $mol_mem
        ], $mol_link.prototype, "uri_off", null);
        __decorate([
            $mol_mem
        ], $mol_link.prototype, "uri_native", null);
        __decorate([
            $mol_mem
        ], $mol_link.prototype, "current", null);
        $$.$mol_link = $mol_link;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/link/link.view.ts
;
"use strict";
var $;
(function ($) {
    class $mpk_tss_link extends $mol_link {
        copy_params() {
            return [];
        }
    }
    $.$mpk_tss_link = $mpk_tss_link;
})($ || ($ = {}));
//mpk/tss/link/-view.tree/link.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mpk_tss_link extends $.$mpk_tss_link {
            uri() {
                const arg = this.$.$mol_state_arg;
                const dict = arg.dict();
                const params = this.copy_params();
                const href_args = { ...this.arg() };
                for (let key of params)
                    href_args[key] = dict[key];
                return arg.make_link(href_args);
            }
        }
        __decorate([
            $mol_mem
        ], $mpk_tss_link.prototype, "uri", null);
        $$.$mpk_tss_link = $mpk_tss_link;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mpk/tss/link/link.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_svg extends $mol_view {
        dom_name() {
            return "svg";
        }
        dom_name_space() {
            return "http://www.w3.org/2000/svg";
        }
        font_size() {
            return 16;
        }
        font_family() {
            return "";
        }
        style_size() {
            return {};
        }
    }
    $.$mol_svg = $mol_svg;
})($ || ($ = {}));
//mol/svg/-view.tree/svg.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_after_timeout extends $mol_object2 {
        delay;
        task;
        id;
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
//mol/after/timeout/timeout.ts
;
"use strict";
var $;
(function ($) {
    class $mol_state_time extends $mol_object {
        static task(precision, reset) {
            if (precision) {
                return new $mol_after_timeout(precision, () => this.task(precision, null));
            }
            else {
                return new $mol_after_frame(() => this.task(precision, null));
            }
        }
        static now(precision) {
            this.task(precision);
            return Date.now();
        }
    }
    __decorate([
        $mol_mem_key
    ], $mol_state_time, "task", null);
    __decorate([
        $mol_mem_key
    ], $mol_state_time, "now", null);
    $.$mol_state_time = $mol_state_time;
})($ || ($ = {}));
//mol/state/time/time.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_svg extends $.$mol_svg {
            computed_style() {
                const win = this.$.$mol_dom_context;
                const style = win.getComputedStyle(this.dom_node());
                if (!style['font-size'])
                    $mol_state_time.now(0);
                return style;
            }
            font_size() {
                return parseInt(this.computed_style()['font-size']) || 16;
            }
            font_family() {
                return this.computed_style()['font-family'];
            }
        }
        __decorate([
            $mol_mem
        ], $mol_svg.prototype, "computed_style", null);
        __decorate([
            $mol_mem
        ], $mol_svg.prototype, "font_size", null);
        __decorate([
            $mol_mem
        ], $mol_svg.prototype, "font_family", null);
        $$.$mol_svg = $mol_svg;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/svg/svg.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_svg_root extends $mol_svg {
        dom_name() {
            return "svg";
        }
        attr() {
            return {
                ...super.attr(),
                viewBox: this.view_box(),
                preserveAspectRatio: this.aspect()
            };
        }
        view_box() {
            return "0 0 100 100";
        }
        aspect() {
            return "xMidYMid";
        }
    }
    $.$mol_svg_root = $mol_svg_root;
})($ || ($ = {}));
//mol/svg/root/-view.tree/root.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/svg/root/root.view.css", "[mol_svg_root] {\n\toverflow: hidden;\n}\n");
})($ || ($ = {}));
//mol/svg/root/-css/root.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_svg_path extends $mol_svg {
        dom_name() {
            return "path";
        }
        attr() {
            return {
                ...super.attr(),
                d: this.geometry()
            };
        }
        geometry() {
            return "";
        }
    }
    $.$mol_svg_path = $mol_svg_path;
})($ || ($ = {}));
//mol/svg/path/-view.tree/path.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon extends $mol_svg_root {
        view_box() {
            return "0 0 24 24";
        }
        minimal_width() {
            return 16;
        }
        minimal_height() {
            return 16;
        }
        sub() {
            return [
                this.Path()
            ];
        }
        path() {
            return "";
        }
        Path() {
            const obj = new this.$.$mol_svg_path();
            obj.geometry = () => this.path();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_icon.prototype, "Path", null);
    $.$mol_icon = $mol_icon;
})($ || ($ = {}));
//mol/icon/-view.tree/icon.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/icon/icon.view.css", "[mol_icon] {\n\tfill: currentColor;\n\tstroke: none;\n\twidth: 1em;\n\theight: 1em;\n\tflex: 0 0 auto;\n\tvertical-align: top;\n\tmargin: .25em 0;\n\tdisplay: inline-block;\n\tfilter: drop-shadow(0px 1px 1px var(--mol_theme_back));\n}\n");
})($ || ($ = {}));
//mol/icon/-css/icon.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mpk_tss_icon_train extends $mol_icon {
        path() {
            return "M12 2c-4 0-8 .5-8 4v9.5C4 17.43 5.57 19 7.5 19L6 20.5v.5h2.23l2-2H14l2 2h2v-.5L16.5 19c1.93 0 3.5-1.57 3.5-3.5V6c0-3.5-3.58-4-8-4zM7.5 17c-.83 0-1.5-.67-1.5-1.5S6.67 14 7.5 14s1.5.67 1.5 1.5S8.33 17 7.5 17zm3.5-7H6V6h5v4zm2 0V6h5v4h-5zm3.5 7c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z";
        }
    }
    $.$mpk_tss_icon_train = $mpk_tss_icon_train;
    class $mpk_tss_icon_exit_to_app extends $mol_icon {
        path() {
            return "M10.09 15.59L11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5c-1.11 0-2 .9-2 2v4h2V5h14v14H5v-4H3v4c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z";
        }
    }
    $.$mpk_tss_icon_exit_to_app = $mpk_tss_icon_exit_to_app;
    class $mpk_tss_icon_autorenew extends $mol_icon {
        path() {
            return "M12 6v3l4-4-4-4v3c-4.42 0-8 3.58-8 8 0 1.57.46 3.03 1.24 4.26L6.7 14.8c-.45-.83-.7-1.79-.7-2.8 0-3.31 2.69-6 6-6zm6.76 1.74L17.3 9.2c.44.84.7 1.79.7 2.8 0 3.31-2.69 6-6 6v-3l-4 4 4 4v-3c4.42 0 8-3.58 8-8 0-1.57-.46-3.03-1.24-4.26z";
        }
    }
    $.$mpk_tss_icon_autorenew = $mpk_tss_icon_autorenew;
    class $mpk_tss_icon_cloud_download extends $mol_icon {
        path() {
            return "M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM17 13l-5 5-5-5h3V9h4v4h3";
        }
    }
    $.$mpk_tss_icon_cloud_download = $mpk_tss_icon_cloud_download;
    class $mpk_tss_icon_done extends $mol_icon {
        path() {
            return "M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z";
        }
    }
    $.$mpk_tss_icon_done = $mpk_tss_icon_done;
    class $mpk_tss_icon_schedule extends $mol_icon {
        path() {
            return "M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z";
        }
    }
    $.$mpk_tss_icon_schedule = $mpk_tss_icon_schedule;
    class $mpk_tss_icon_error extends $mol_icon {
        path() {
            return "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 36h-2v-2h2v2zm0-4h-2V7h2v6z";
        }
    }
    $.$mpk_tss_icon_error = $mpk_tss_icon_error;
    class $mpk_tss_icon_warning extends $mol_icon {
        path() {
            return "M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z";
        }
    }
    $.$mpk_tss_icon_warning = $mpk_tss_icon_warning;
    class $mpk_tss_icon_sync extends $mol_icon {
        path() {
            return "M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z";
        }
    }
    $.$mpk_tss_icon_sync = $mpk_tss_icon_sync;
    class $mpk_tss_icon_clear extends $mol_icon {
        path() {
            return "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z";
        }
    }
    $.$mpk_tss_icon_clear = $mpk_tss_icon_clear;
    class $mpk_tss_icon_block extends $mol_icon {
        path() {
            return "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM4 12c0-4.42 3.58-8 8-8 1.85 0 3.55.63 4.9 1.69L5.69 16.9C4.63 15.55 4 13.85 4 12zm8 8c-1.85 0-3.55-.63-4.9-1.69L18.31 7.1C19.37 8.45 20 10.15 20 12c0 4.42-3.58 8-8 8z";
        }
    }
    $.$mpk_tss_icon_block = $mpk_tss_icon_block;
    class $mpk_tss_icon_circle_outline extends $mol_icon {
        path() {
            return "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.88-11.71L10 14.17l-1.88-1.88c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41l2.59 2.59c.39.39 1.02.39 1.41 0L17.3 9.7c.39-.39.39-1.02 0-1.41-.39-.39-1.03-.39-1.42 0z";
        }
    }
    $.$mpk_tss_icon_circle_outline = $mpk_tss_icon_circle_outline;
    class $mpk_tss_icon_round_warning extends $mol_icon {
        path() {
            return "M4.47 21h15.06c1.54 0 2.5-1.67 1.73-3L13.73 4.99c-.77-1.33-2.69-1.33-3.46 0L2.74 18c-.77 1.33.19 3 1.73 3zM12 14c-.55 0-1-.45-1-1v-2c0-.55.45-1 1-1s1 .45 1 1v2c0 .55-.45 1-1 1zm1 4h-2v-2h2v2z";
        }
    }
    $.$mpk_tss_icon_round_warning = $mpk_tss_icon_round_warning;
})($ || ($ = {}));
//mpk/tss/icon/-view.tree/icon.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_page extends $mol_view {
        dom_name() {
            return "article";
        }
        field() {
            return {
                ...super.field(),
                tabIndex: this.tabindex()
            };
        }
        sub() {
            return [
                this.Head(),
                this.Body(),
                this.Foot()
            ];
        }
        tabindex() {
            return -1;
        }
        Logo() {
            return null;
        }
        title_content() {
            return [
                this.Logo(),
                this.title()
            ];
        }
        Title() {
            const obj = new this.$.$mol_view();
            obj.dom_name = () => "h1";
            obj.sub = () => this.title_content();
            return obj;
        }
        tools() {
            return [];
        }
        Tools() {
            const obj = new this.$.$mol_view();
            obj.sub = () => this.tools();
            return obj;
        }
        head() {
            return [
                this.Title(),
                this.Tools()
            ];
        }
        Head() {
            const obj = new this.$.$mol_view();
            obj.minimal_height = () => 64;
            obj.dom_name = () => "header";
            obj.sub = () => this.head();
            return obj;
        }
        body() {
            return [];
        }
        body_scroll_top(val) {
            return this.Body().scroll_top(val);
        }
        Body() {
            const obj = new this.$.$mol_scroll();
            obj.sub = () => this.body();
            return obj;
        }
        foot() {
            return [];
        }
        Foot() {
            const obj = new this.$.$mol_view();
            obj.dom_name = () => "footer";
            obj.sub = () => this.foot();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_page.prototype, "Title", null);
    __decorate([
        $mol_mem
    ], $mol_page.prototype, "Tools", null);
    __decorate([
        $mol_mem
    ], $mol_page.prototype, "Head", null);
    __decorate([
        $mol_mem
    ], $mol_page.prototype, "Body", null);
    __decorate([
        $mol_mem
    ], $mol_page.prototype, "Foot", null);
    $.$mol_page = $mol_page;
})($ || ($ = {}));
//mol/page/-view.tree/page.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const { per, rem } = $mol_style_unit;
        const { calc } = $mol_style_func;
        $mol_style_define($mol_page, {
            display: 'flex',
            flex: {
                basis: 'auto',
                direction: 'column',
            },
            position: 'relative',
            alignSelf: 'stretch',
            maxWidth: per(100),
            maxHeight: per(100),
            boxSizing: 'border-box',
            color: $mol_theme.text,
            ':focus': {
                outline: 'none',
            },
            Head: {
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'flex-end',
                flex: 'none',
                position: 'relative',
                margin: 0,
                minHeight: rem(4),
                padding: $mol_gap.block,
                background: {
                    color: $mol_theme.card,
                },
                border: {
                    radius: $mol_gap.round,
                },
                boxShadow: `0 0.5rem 0.5rem -0.5rem hsla(0,0%,0%,.25)`,
                zIndex: 2,
            },
            Title: {
                minHeight: rem(2),
                margin: 0,
                padding: $mol_gap.text,
                gap: $mol_gap.text,
                wordBreak: 'normal',
                textShadow: '0 0',
                font: {
                    size: 'inherit',
                    weight: 'normal',
                },
                flex: {
                    grow: 1,
                    shrink: 1,
                    basis: 'auto',
                },
            },
            Tools: {
                flex: {
                    basis: 'auto',
                    grow: 1000,
                    shrink: 1,
                },
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'flex-start',
                flexWrap: 'wrap',
            },
            Body: {
                flex: {
                    grow: 1000,
                    shrink: 1,
                    basis: per(100),
                },
                padding: $mol_gap.block,
            },
            Foot: {
                display: 'flex',
                justifyContent: 'space-between',
                flex: 'none',
                margin: 0,
                overflow: 'hidden',
                background: {
                    color: $mol_theme.card,
                },
                border: {
                    radius: $mol_gap.round,
                },
                boxShadow: `0 -0.5rem 0.5rem -0.5rem hsla(0,0%,0%,.25)`,
                zIndex: 1,
                padding: $mol_gap.block,
                ':empty': {
                    display: 'none',
                },
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/page/page.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_filler extends $mol_view {
        minimal_height() {
            return 500;
        }
        sub() {
            return [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor. Praesent et diam eget libero egestas mattis sit amet vitae augue. Nam tincidunt congue enim, ut porta lorem lacinia consectetur. Donec ut libero sed arcu vehicula ultricies a non tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut gravida lorem. Ut turpis felis, pulvinar a semper sed, adipiscing id dolor. Pellentesque auctor nisi id magna consequat sagittis. Curabitur dapibus enim sit amet elit pharetra tincidunt feugiat nisl imperdiet. Ut convallis libero in urna ultrices accumsan. Donec sed odio eros. Donec viverra mi quis quam pulvinar at malesuada arcu rhoncus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In rutrum accumsan ultricies. Mauris vitae nisi at sem facilisis semper ac in est.",
                "Vivamus fermentum semper porta. Nunc diam velit, adipiscing ut tristique vitae, sagittis vel odio. Maecenas convallis ullamcorper ultricies. Curabitur ornare, ligula semper consectetur sagittis, nisi diam iaculis velit, id fringilla sem nunc vel mi. Nam dictum, odio nec pretium volutpat, arcu ante placerat erat, non tristique elit urna et turpis. Quisque mi metus, ornare sit amet fermentum et, tincidunt et orci. Fusce eget orci a orci congue vestibulum. Ut dolor diam, elementum et vestibulum eu, porttitor vel elit. Curabitur venenatis pulvinar tellus gravida ornare. Sed et erat faucibus nunc euismod ultricies ut id justo. Nullam cursus suscipit nisi, et ultrices justo sodales nec. Fusce venenatis facilisis lectus ac semper. Aliquam at massa ipsum. Quisque bibendum purus convallis nulla ultrices ultricies. Nullam aliquam, mi eu aliquam tincidunt, purus velit laoreet tortor, viverra pretium nisi quam vitae mi. Fusce vel volutpat elit. Nam sagittis nisi dui.",
                "Suspendisse lectus leo, consectetur in tempor sit amet, placerat quis neque. Etiam luctus porttitor lorem, sed suscipit est rutrum non. Curabitur lobortis nisl a enim congue semper. Aenean commodo ultrices imperdiet. Vestibulum ut justo vel sapien venenatis tincidunt. Phasellus eget dolor sit amet ipsum dapibus condimentum vitae quis lectus. Aliquam ut massa in turpis dapibus convallis. Praesent elit lacus, vestibulum at malesuada et, ornare et est. Ut augue nunc, sodales ut euismod non, adipiscing vitae orci. Mauris ut placerat justo. Mauris in ultricies enim. Quisque nec est eleifend nulla ultrices egestas quis ut quam. Donec sollicitudin lectus a mauris pulvinar id aliquam urna cursus. Cras quis ligula sem, vel elementum mi. Phasellus non ullamcorper urna.",
                "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In euismod ultrices facilisis. Vestibulum porta sapien adipiscing augue congue id pretium lectus molestie. Proin quis dictum nisl. Morbi id quam sapien, sed vestibulum sem. Duis elementum rutrum mauris sed convallis. Proin vestibulum magna mi. Aenean tristique hendrerit magna, ac facilisis nulla hendrerit ut. Sed non tortor sodales quam auctor elementum. Donec hendrerit nunc eget elit pharetra pulvinar. Suspendisse id tempus tortor. Aenean luctus, elit commodo laoreet commodo, justo nisi consequat massa, sed vulputate quam urna quis eros. Donec vel.",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor. Praesent et diam eget libero egestas mattis sit amet vitae augue. Nam tincidunt congue enim, ut porta lorem lacinia consectetur. Donec ut libero sed arcu vehicula ultricies a non tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut gravida lorem. Ut turpis felis, pulvinar a semper sed, adipiscing id dolor. Pellentesque auctor nisi id magna consequat sagittis. Curabitur dapibus enim sit amet elit pharetra tincidunt feugiat nisl imperdiet. Ut convallis libero in urna ultrices accumsan. Donec sed odio eros. Donec viverra mi quis quam pulvinar at malesuada arcu rhoncus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In rutrum accumsan ultricies. Mauris vitae nisi at sem facilisis semper ac in est.",
                "Vivamus fermentum semper porta. Nunc diam velit, adipiscing ut tristique vitae, sagittis vel odio. Maecenas convallis ullamcorper ultricies. Curabitur ornare, ligula semper consectetur sagittis, nisi diam iaculis velit, id fringilla sem nunc vel mi. Nam dictum, odio nec pretium volutpat, arcu ante placerat erat, non tristique elit urna et turpis. Quisque mi metus, ornare sit amet fermentum et, tincidunt et orci. Fusce eget orci a orci congue vestibulum. Ut dolor diam, elementum et vestibulum eu, porttitor vel elit. Curabitur venenatis pulvinar tellus gravida ornare. Sed et erat faucibus nunc euismod ultricies ut id justo. Nullam cursus suscipit nisi, et ultrices justo sodales nec. Fusce venenatis facilisis lectus ac semper. Aliquam at massa ipsum. Quisque bibendum purus convallis nulla ultrices ultricies. Nullam aliquam, mi eu aliquam tincidunt, purus velit laoreet tortor, viverra pretium nisi quam vitae mi. Fusce vel volutpat elit. Nam sagittis nisi dui.",
                "Suspendisse lectus leo, consectetur in tempor sit amet, placerat quis neque. Etiam luctus porttitor lorem, sed suscipit est rutrum non. Curabitur lobortis nisl a enim congue semper. Aenean commodo ultrices imperdiet. Vestibulum ut justo vel sapien venenatis tincidunt. Phasellus eget dolor sit amet ipsum dapibus condimentum vitae quis lectus. Aliquam ut massa in turpis dapibus convallis. Praesent elit lacus, vestibulum at malesuada et, ornare et est. Ut augue nunc, sodales ut euismod non, adipiscing vitae orci. Mauris ut placerat justo. Mauris in ultricies enim. Quisque nec est eleifend nulla ultrices egestas quis ut quam. Donec sollicitudin lectus a mauris pulvinar id aliquam urna cursus. Cras quis ligula sem, vel elementum mi. Phasellus non ullamcorper urna.",
                "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In euismod ultrices facilisis. Vestibulum porta sapien adipiscing augue congue id pretium lectus molestie. Proin quis dictum nisl. Morbi id quam sapien, sed vestibulum sem. Duis elementum rutrum mauris sed convallis. Proin vestibulum magna mi. Aenean tristique hendrerit magna, ac facilisis nulla hendrerit ut. Sed non tortor sodales quam auctor elementum. Donec hendrerit nunc eget elit pharetra pulvinar. Suspendisse id tempus tortor. Aenean luctus, elit commodo laoreet commodo, justo nisi consequat massa, sed vulputate quam urna quis eros. Donec vel."
            ];
        }
    }
    $.$mol_filler = $mol_filler;
})($ || ($ = {}));
//mol/filler/-view.tree/filler.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/filler/filler.view.css", "[mol_filler] {\n\ttext-align: left;\n\tpadding: var(--mol_gap_text);\n\tflex-shrink: 0;\n}\n");
})($ || ($ = {}));
//mol/filler/-css/filler.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mpk_tss_software extends $mol_page {
        title() {
            return this.$.$mol_locale.text('$mpk_tss_software_title');
        }
        body() {
            return [
                this.Content()
            ];
        }
        Content() {
            const obj = new this.$.$mol_filler();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mpk_tss_software.prototype, "Content", null);
    $.$mpk_tss_software = $mpk_tss_software;
})($ || ($ = {}));
//mpk/tss/software/-view.tree/software.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mpk_tss_parameter_unknown extends $mol_view {
        sub() {
            return [
                this.title()
            ];
        }
        title() {
            return this.$.$mol_locale.text('$mpk_tss_parameter_unknown_title');
        }
    }
    $.$mpk_tss_parameter_unknown = $mpk_tss_parameter_unknown;
})($ || ($ = {}));
//mpk/tss/parameter/unknown/-view.tree/unknown.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mpk/tss/parameter/unknown/unknown.css", "[mpk_tss_parameter_unknown] {\n\tcolor: var(--mpk_theme_status_text_unknown);\n}\n");
})($ || ($ = {}));
//mpk/tss/parameter/unknown/-css/unknown.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_row extends $mol_view {
    }
    $.$mol_row = $mol_row;
})($ || ($ = {}));
//mol/row/-view.tree/row.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/row/row.view.css", "[mol_row] {\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\talign-items: flex-start;\n\talign-content: flex-start;\n\tjustify-content: flex-start;\n\tpadding: var(--mol_gap_block);\n\tgap: var(--mol_gap_block);\n\tflex: 0 0 auto;\n\tbox-sizing: border-box;\n\tmax-width: 100%;\n}\n\n[mol_row] > * {\n\tmax-width: 100%;\n}\n");
})($ || ($ = {}));
//mol/row/-css/row.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mpk_tss_parameter_date extends $mol_view {
        date() {
            return null;
        }
        sub() {
            return [
                this.date_formatted()
            ];
        }
        date_formatted() {
            return null;
        }
    }
    $.$mpk_tss_parameter_date = $mpk_tss_parameter_date;
})($ || ($ = {}));
//mpk/tss/parameter/date/-view.tree/date.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_time_base {
        static patterns = {};
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
            const Base = this.constructor;
            const formatter = Base.formatter(pattern);
            return formatter(this);
        }
    }
    $.$mol_time_base = $mol_time_base;
})($ || ($ = {}));
//mol/time/base/base.ts
;
"use strict";
var $;
(function ($) {
    class $mol_time_duration extends $mol_time_base {
        constructor(config = 0) {
            super();
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
        year = 0;
        month = 0;
        day = 0;
        hour = 0;
        minute = 0;
        second = 0;
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
        [Symbol.toPrimitive](mode) {
            return mode === 'number' ? this.valueOf() : this.toString();
        }
        static patterns = {
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
        };
    }
    $.$mol_time_duration = $mol_time_duration;
})($ || ($ = {}));
//mol/time/duration/duration.ts
;
"use strict";
var $;
(function ($) {
    let $mol_time_moment_weekdays;
    (function ($mol_time_moment_weekdays) {
        $mol_time_moment_weekdays[$mol_time_moment_weekdays["monday"] = 0] = "monday";
        $mol_time_moment_weekdays[$mol_time_moment_weekdays["tuesday"] = 1] = "tuesday";
        $mol_time_moment_weekdays[$mol_time_moment_weekdays["wednesday"] = 2] = "wednesday";
        $mol_time_moment_weekdays[$mol_time_moment_weekdays["thursday"] = 3] = "thursday";
        $mol_time_moment_weekdays[$mol_time_moment_weekdays["friday"] = 4] = "friday";
        $mol_time_moment_weekdays[$mol_time_moment_weekdays["saturday"] = 5] = "saturday";
        $mol_time_moment_weekdays[$mol_time_moment_weekdays["sunday"] = 6] = "sunday";
    })($mol_time_moment_weekdays = $.$mol_time_moment_weekdays || ($.$mol_time_moment_weekdays = {}));
    function numb(str, max) {
        const numb = Number(str);
        if (numb < max)
            return numb;
        $mol_fail(new Error(`Wrong time component ${str}`));
    }
    class $mol_time_moment extends $mol_time_base {
        constructor(config = new Date) {
            super();
            if (typeof config === 'number')
                config = new Date(config);
            if (typeof config === 'string') {
                const parsed = /^(?:(\d\d?\d?\d?)(?:-?(\d\d?)(?:-?(\d\d?))?)?)?(?:[T ](?:(\d\d?)(?::?(\d\d?)(?::?(\d\d?(?:\.\d+)?))?)?)?(Z|[\+\-]\d\d?(?::?(?:\d\d?)?)?)?)?$/.exec(config);
                if (!parsed)
                    throw new Error(`Can not parse time moment (${config})`);
                if (parsed[1])
                    this.year = numb(parsed[1], 9999);
                if (parsed[2])
                    this.month = numb(parsed[2], 13) - 1;
                if (parsed[3])
                    this.day = numb(parsed[3], 32) - 1;
                if (parsed[4])
                    this.hour = numb(parsed[4], 60);
                if (parsed[5])
                    this.minute = numb(parsed[5], 60);
                if (parsed[6])
                    this.second = numb(parsed[6], 60);
                if (parsed[7])
                    this.offset = new $mol_time_duration(parsed[7]);
                return;
            }
            if (config instanceof Date) {
                this.year = config.getFullYear();
                this.month = config.getMonth();
                this.day = config.getDate() - 1;
                this.hour = config.getHours();
                this.minute = config.getMinutes();
                this.second = config.getSeconds() + config.getMilliseconds() / 1000;
                const offset = -config.getTimezoneOffset();
                this.offset = new $mol_time_duration({
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
            this.offset = config.offset == null ? config.offset : new $mol_time_duration(config.offset);
        }
        year;
        month;
        day;
        hour;
        minute;
        second;
        offset;
        get weekday() {
            return (this.native.getDay() + 6) % 7;
        }
        _native;
        get native() {
            if (this._native)
                return this._native;
            const utc = this.toOffset('Z');
            return this._native = new Date(Date.UTC(utc.year ?? 0, utc.month ?? 0, (utc.day ?? 0) + 1, utc.hour ?? 0, utc.minute ?? 0, utc.second != undefined ? Math.floor(utc.second) : 0, utc.second != undefined ? Math.floor((utc.second - Math.floor(utc.second)) * 1000) : 0));
        }
        _normal;
        get normal() {
            if (this._normal)
                return this._normal;
            const moment = new $mol_time_moment(this.native);
            return this._normal = new $mol_time_moment({
                year: this.year === undefined ? undefined : moment.year,
                month: this.month === undefined ? undefined : moment.month,
                day: this.day === undefined ? undefined : moment.day,
                hour: this.hour === undefined ? undefined : moment.hour,
                minute: this.minute === undefined ? undefined : moment.minute,
                second: this.second === undefined ? undefined : moment.second,
                offset: this.offset === undefined ? undefined : moment.offset,
            });
        }
        merge(config) {
            const moment = new $mol_time_moment(config);
            return new $mol_time_moment({
                year: moment.year === undefined ? this.year : moment.year,
                month: moment.month === undefined ? this.month : moment.month,
                day: moment.day === undefined ? this.day : moment.day,
                hour: moment.hour === undefined ? this.hour : moment.hour,
                minute: moment.minute === undefined ? this.minute : moment.minute,
                second: moment.second === undefined ? this.second : moment.second,
                offset: moment.offset === undefined ? this.offset : moment.offset,
            });
        }
        shift(config) {
            const duration = new $mol_time_duration(config);
            const moment = new $mol_time_moment().merge({
                year: this.year,
                month: this.month,
                day: this.day,
                hour: this.hour ?? 0,
                minute: this.minute ?? 0,
                second: this.second ?? 0,
                offset: this.offset ?? 0
            });
            const second = moment.second + (duration.second ?? 0);
            const native = new Date(moment.year + (duration.year ?? 0), moment.month + (duration.month ?? 0), moment.day + 1 + (duration.day ?? 0), moment.hour + (duration.hour ?? 0), moment.minute + (duration.minute ?? 0), Math.floor(second), (second - Math.floor(second)) * 1000);
            if (isNaN(native.valueOf()))
                throw new Error('Wrong time');
            return new $mol_time_moment({
                year: this.year === undefined ? undefined : native.getFullYear(),
                month: this.month === undefined ? undefined : native.getMonth(),
                day: this.day === undefined ? undefined : native.getDate() - 1,
                hour: this.hour === undefined ? undefined : native.getHours(),
                minute: this.minute === undefined ? undefined : native.getMinutes(),
                second: this.second === undefined ? undefined : native.getSeconds() + native.getMilliseconds() / 1000,
                offset: this.offset,
            });
        }
        mask(config) {
            const mask = new $mol_time_moment(config);
            return new $mol_time_moment({
                year: mask.year === undefined ? undefined : this.year,
                month: mask.month === undefined ? undefined : this.month,
                day: mask.day === undefined ? undefined : this.day,
                hour: mask.hour === undefined ? undefined : this.hour,
                minute: mask.minute === undefined ? undefined : this.minute,
                second: mask.second === undefined ? undefined : this.second,
                offset: mask.offset === undefined ? undefined : this.offset,
            });
        }
        toOffset(config = new $mol_time_moment().offset) {
            const duration = new $mol_time_duration(config);
            const offset = this.offset || new $mol_time_moment().offset;
            let with_time = new $mol_time_moment('T00:00:00').merge(this);
            const moment = with_time.shift(duration.summ(offset.mult(-1)));
            return moment.merge({ offset: duration });
        }
        valueOf() { return this.native.getTime(); }
        toJSON() { return this.toString(); }
        toString(pattern = 'YYYY-MM-DDThh:mm:ss.sssZ') {
            return super.toString(pattern);
        }
        [Symbol.toPrimitive](mode) {
            return mode === 'number' ? this.valueOf() : this.toString();
        }
        static patterns = {
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
            'Month': (pattern => (moment) => {
                if (moment.month == null)
                    return '';
                return pattern.format(moment.native);
            })(new Intl.DateTimeFormat(undefined, { month: 'long' })),
            'DD Month': (pattern => (moment) => {
                if (moment.month == null) {
                    if (moment.day == null) {
                        return '';
                    }
                    else {
                        return $mol_time_moment.patterns['DD'](moment);
                    }
                }
                else {
                    if (moment.day == null) {
                        return $mol_time_moment.patterns['Month'](moment);
                    }
                    else {
                        return pattern.format(moment.native);
                    }
                }
            })(new Intl.DateTimeFormat(undefined, { day: '2-digit', month: 'long' })),
            'D Month': (pattern => (moment) => {
                if (moment.month == null) {
                    if (moment.day == null) {
                        return '';
                    }
                    else {
                        return $mol_time_moment.patterns['D'](moment);
                    }
                }
                else {
                    if (moment.day == null) {
                        return $mol_time_moment.patterns['Month'](moment);
                    }
                    else {
                        return pattern.format(moment.native);
                    }
                }
            })(new Intl.DateTimeFormat(undefined, { day: 'numeric', month: 'long' })),
            'Mon': (pattern => (moment) => {
                if (moment.month == null)
                    return '';
                return pattern.format(moment.native);
            })(new Intl.DateTimeFormat(undefined, { month: 'short' })),
            'DD Mon': (pattern => (moment) => {
                if (moment.month == null) {
                    if (moment.day == null) {
                        return '';
                    }
                    else {
                        return $mol_time_moment.patterns['DD'](moment);
                    }
                }
                else {
                    if (moment.day == null) {
                        return $mol_time_moment.patterns['Mon'](moment);
                    }
                    else {
                        return pattern.format(moment.native);
                    }
                }
            })(new Intl.DateTimeFormat(undefined, { day: '2-digit', month: 'short' })),
            'D Mon': (pattern => (moment) => {
                if (moment.month == null) {
                    if (moment.day == null) {
                        return '';
                    }
                    else {
                        return $mol_time_moment.patterns['D'](moment);
                    }
                }
                else {
                    if (moment.day == null) {
                        return $mol_time_moment.patterns['Mon'](moment);
                    }
                    else {
                        return pattern.format(moment.native);
                    }
                }
            })(new Intl.DateTimeFormat(undefined, { day: 'numeric', month: 'short' })),
            '-MM': (moment) => {
                if (moment.month == null)
                    return '';
                return '-' + $mol_time_moment.patterns['MM'](moment);
            },
            'MM': (moment) => {
                if (moment.month == null)
                    return '';
                return String(100 + moment.month + 1).slice(1);
            },
            'M': (moment) => {
                if (moment.month == null)
                    return '';
                return String(moment.month + 1);
            },
            'WeekDay': (pattern => (moment) => {
                if (moment.day == null)
                    return '';
                if (moment.month == null)
                    return '';
                if (moment.year == null)
                    return '';
                return pattern.format(moment.native);
            })(new Intl.DateTimeFormat(undefined, { weekday: 'long' })),
            'WD': (pattern => (moment) => {
                if (moment.day == null)
                    return '';
                if (moment.month == null)
                    return '';
                if (moment.year == null)
                    return '';
                return pattern.format(moment.native);
            })(new Intl.DateTimeFormat(undefined, { weekday: 'short' })),
            '-DD': (moment) => {
                if (moment.day == null)
                    return '';
                return '-' + $mol_time_moment.patterns['DD'](moment);
            },
            'DD': (moment) => {
                if (moment.day == null)
                    return '';
                return String(100 + moment.day + 1).slice(1);
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
                return String(100 + moment.hour).slice(1);
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
                return String(100 + moment.minute).slice(1);
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
                return String(100 + moment.second | 0).slice(1);
            },
            's': (moment) => {
                if (moment.second == null)
                    return '';
                return String(moment.second | 0);
            },
            '.sss': (moment) => {
                if (moment.second == null)
                    return '';
                if (moment.second === (moment.second | 0))
                    return '';
                return '.' + $mol_time_moment.patterns['sss'](moment);
            },
            'sss': (moment) => {
                if (moment.second == null)
                    return '';
                const millisecond = Math.floor((moment.second - Math.floor(moment.second)) * 1000);
                return String(1000 + millisecond).slice(1);
            },
            'Z': (moment) => {
                const offset = moment.offset;
                if (!offset)
                    return '';
                let hour = offset.hour;
                let sign = '+';
                if (hour < 0) {
                    sign = '-';
                    hour = -hour;
                }
                return sign + String(100 + hour).slice(1) + ':' + String(100 + offset.minute).slice(1);
            }
        };
    }
    $.$mol_time_moment = $mol_time_moment;
})($ || ($ = {}));
//mol/time/moment/moment.ts
;
"use strict";
var $;
(function ($) {
    class $mpk_tss_todo extends Error {
        name = '$mpk_tss_todo';
    }
    $.$mpk_tss_todo = $mpk_tss_todo;
    class $mpk_tss_todo_unknown extends Error {
        name = '$mpk_tss_todo_unknown';
    }
    $.$mpk_tss_todo_unknown = $mpk_tss_todo_unknown;
})($ || ($ = {}));
//mpk/tss/todo/todo.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mpk_tss_parameter_date extends $.$mpk_tss_parameter_date {
            date() {
                throw new $mpk_tss_todo;
            }
            date_formatted() {
                return this.date().native.toLocaleString();
            }
        }
        $$.$mpk_tss_parameter_date = $mpk_tss_parameter_date;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mpk/tss/parameter/date/date.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_list extends $mol_view {
        render_visible_only() {
            return true;
        }
        render_over() {
            return 0;
        }
        sub() {
            return this.rows();
        }
        Empty() {
            const obj = new this.$.$mol_view();
            return obj;
        }
        Gap_before() {
            const obj = new this.$.$mol_view();
            obj.style = () => ({
                paddingTop: this.gap_before()
            });
            return obj;
        }
        Gap_after() {
            const obj = new this.$.$mol_view();
            obj.style = () => ({
                paddingTop: this.gap_after()
            });
            return obj;
        }
        view_window() {
            return [
                0,
                0
            ];
        }
        rows() {
            return [];
        }
        gap_before() {
            return 0;
        }
        gap_after() {
            return 0;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_list.prototype, "Empty", null);
    __decorate([
        $mol_mem
    ], $mol_list.prototype, "Gap_before", null);
    __decorate([
        $mol_mem
    ], $mol_list.prototype, "Gap_after", null);
    $.$mol_list = $mol_list;
})($ || ($ = {}));
//mol/list/-view.tree/list.view.tree.ts
;
"use strict";
var $;
(function ($) {
    let cache = null;
    function $mol_support_css_overflow_anchor() {
        return cache ?? (cache = (!/Gecko\//.test(navigator.userAgent)
            && this.$mol_dom_context.CSS?.supports('overflow-anchor:auto')) ?? false);
    }
    $.$mol_support_css_overflow_anchor = $mol_support_css_overflow_anchor;
})($ || ($ = {}));
//mol/support/css/css.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/list/list.view.css", "[mol_list] {\n\twill-change: contents;\n\tdisplay: flex;\n\tflex-direction: column;\n\tflex-shrink: 0;\n\tmax-width: 100%;\n\t/* display: flex;\n\talign-items: stretch;\n\talign-content: stretch; */\n\ttransition: none;\n\tmin-height: .5rem;\n}\n\n[mol_list_gap_before] ,\n[mol_list_gap_after] {\n\tdisplay: block !important;\n\tflex: none;\n\ttransition: none;\n\toverflow-anchor: none;\n}\n");
})($ || ($ = {}));
//mol/list/-css/list.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_list extends $.$mol_list {
            sub() {
                const rows = this.rows();
                return (rows.length === 0) ? [this.Empty()] : rows;
            }
            render_visible_only() {
                return this.$.$mol_support_css_overflow_anchor();
            }
            view_window(next) {
                const kids = this.sub();
                if (kids.length < 3)
                    return [0, kids.length];
                if (this.$.$mol_print.active())
                    return [0, kids.length];
                const rect = this.view_rect();
                if (next)
                    return next;
                let [min, max] = $mol_mem_cached(() => this.view_window()) ?? [0, 0];
                let max2 = max = Math.min(max, kids.length);
                let min2 = min = Math.max(0, Math.min(min, max - 1));
                const anchoring = this.render_visible_only();
                const window_height = this.$.$mol_window.size().height + 40;
                const over = Math.ceil(window_height * this.render_over());
                const limit_top = -over;
                const limit_bottom = window_height + over;
                const gap_before = $mol_mem_cached(() => this.gap_before()) ?? 0;
                const gap_after = $mol_mem_cached(() => this.gap_after()) ?? 0;
                let top = Math.ceil(rect?.top ?? 0) + gap_before;
                let bottom = Math.ceil(rect?.bottom ?? 0) - gap_after;
                if (top <= limit_top && bottom >= limit_bottom) {
                    return [min2, max2];
                }
                if (anchoring && ((bottom < limit_top) || (top > limit_bottom))) {
                    min = 0;
                    top = Math.ceil(rect?.top ?? 0);
                    while (min < (kids.length - 1)) {
                        const height = kids[min].minimal_height();
                        if (top + height >= limit_top)
                            break;
                        top += height;
                        ++min;
                    }
                    min2 = min;
                    max2 = max = min;
                    bottom = top;
                }
                let top2 = top;
                let bottom2 = bottom;
                if (anchoring && (top <= limit_top) && (bottom2 < limit_bottom)) {
                    min2 = Math.max(0, max - 1);
                    top2 = bottom;
                }
                if ((bottom >= limit_bottom) && (top2 >= limit_top)) {
                    max2 = Math.min(min + 1, kids.length);
                    bottom2 = top;
                }
                while (bottom2 < limit_bottom && max2 < kids.length) {
                    bottom2 += kids[max2].minimal_height();
                    ++max2;
                }
                while (anchoring && ((top2 >= limit_top) && (min2 > 0))) {
                    --min2;
                    top2 -= kids[min2].minimal_height();
                }
                return [min2, max2];
            }
            gap_before() {
                const skipped = this.sub().slice(0, this.view_window()[0]);
                return Math.max(0, skipped.reduce((sum, view) => sum + view.minimal_height(), 0));
            }
            gap_after() {
                const skipped = this.sub().slice(this.view_window()[1]);
                return Math.max(0, skipped.reduce((sum, view) => sum + view.minimal_height(), 0));
            }
            sub_visible() {
                return [
                    ...this.gap_before() ? [this.Gap_before()] : [],
                    ...this.sub().slice(...this.view_window()),
                    ...this.gap_after() ? [this.Gap_after()] : [],
                ];
            }
            minimal_height() {
                return this.sub().reduce((sum, view) => {
                    try {
                        return sum + view.minimal_height();
                    }
                    catch (error) {
                        $mol_fail_log(error);
                        return sum;
                    }
                }, 0);
            }
            force_render(path) {
                const kids = this.rows();
                const index = kids.findIndex(item => path.has(item));
                if (index >= 0) {
                    const win = this.view_window();
                    if (index < win[0] || index >= win[1]) {
                        this.view_window([this.render_visible_only() ? index : 0, index + 1]);
                    }
                    kids[index].force_render(path);
                }
            }
        }
        __decorate([
            $mol_mem
        ], $mol_list.prototype, "sub", null);
        __decorate([
            $mol_mem
        ], $mol_list.prototype, "view_window", null);
        __decorate([
            $mol_mem
        ], $mol_list.prototype, "gap_before", null);
        __decorate([
            $mol_mem
        ], $mol_list.prototype, "gap_after", null);
        __decorate([
            $mol_mem
        ], $mol_list.prototype, "sub_visible", null);
        __decorate([
            $mol_mem
        ], $mol_list.prototype, "minimal_height", null);
        $$.$mol_list = $mol_list;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/list/list.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_labeler extends $mol_list {
        rows() {
            return [
                this.Label(),
                this.Content()
            ];
        }
        label() {
            return [
                this.title()
            ];
        }
        Label() {
            const obj = new this.$.$mol_view();
            obj.minimal_height = () => 32;
            obj.sub = () => this.label();
            return obj;
        }
        content() {
            return [];
        }
        Content() {
            const obj = new this.$.$mol_view();
            obj.minimal_height = () => 24;
            obj.sub = () => this.content();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_labeler.prototype, "Label", null);
    __decorate([
        $mol_mem
    ], $mol_labeler.prototype, "Content", null);
    $.$mol_labeler = $mol_labeler;
})($ || ($ = {}));
//mol/labeler/-view.tree/labeler.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/labeler/labeler.view.css", "[mol_labeler] {\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: stretch;\n\tcursor: inherit;\n}\n\n[mol_labeler_label] {\n\tmin-height: 2rem;\n\tcolor: var(--mol_theme_shade);\n\tpadding: .5rem .75rem 0;\n\tgap: 0 var(--mol_gap_block);\n\tflex-wrap: wrap;\n}\n\n[mol_labeler_content] {\n\tdisplay: flex;\n\tpadding: var(--mol_gap_text);\n}\n");
})($ || ($ = {}));
//mol/labeler/-css/labeler.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mpk_tss_parameter extends $mol_row {
        Unknown_value() {
            const obj = new this.$.$mpk_tss_parameter_unknown();
            return obj;
        }
        Unknown_updated() {
            const obj = new this.$.$mpk_tss_parameter_unknown();
            return obj;
        }
        value() {
            return null;
        }
        updated() {
            return null;
        }
        sub() {
            return [
                this.Name(),
                this.Value(),
                this.Updated()
            ];
        }
        Date() {
            const obj = new this.$.$mpk_tss_parameter_date();
            obj.date = () => this.updated();
            return obj;
        }
        name_title() {
            return this.$.$mol_locale.text('$mpk_tss_parameter_name_title');
        }
        name() {
            return "";
        }
        Name_content() {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.name()
            ];
            return obj;
        }
        Name() {
            const obj = new this.$.$mol_labeler();
            obj.title = () => this.name_title();
            obj.Content = () => this.Name_content();
            return obj;
        }
        value_title() {
            return this.$.$mol_locale.text('$mpk_tss_parameter_value_title');
        }
        Value_content() {
            return null;
        }
        Value() {
            const obj = new this.$.$mol_labeler();
            obj.title = () => this.value_title();
            obj.Content = () => this.Value_content();
            return obj;
        }
        updated_title() {
            return this.$.$mol_locale.text('$mpk_tss_parameter_updated_title');
        }
        Updated_value() {
            return null;
        }
        Updated() {
            const obj = new this.$.$mol_labeler();
            obj.title = () => this.updated_title();
            obj.Content = () => this.Updated_value();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mpk_tss_parameter.prototype, "Unknown_value", null);
    __decorate([
        $mol_mem
    ], $mpk_tss_parameter.prototype, "Unknown_updated", null);
    __decorate([
        $mol_mem
    ], $mpk_tss_parameter.prototype, "Date", null);
    __decorate([
        $mol_mem
    ], $mpk_tss_parameter.prototype, "Name_content", null);
    __decorate([
        $mol_mem
    ], $mpk_tss_parameter.prototype, "Name", null);
    __decorate([
        $mol_mem
    ], $mpk_tss_parameter.prototype, "Value", null);
    __decorate([
        $mol_mem
    ], $mpk_tss_parameter.prototype, "Updated", null);
    $.$mpk_tss_parameter = $mpk_tss_parameter;
})($ || ($ = {}));
//mpk/tss/parameter/-view.tree/parameter.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mpk/tss/parameter/parameter.css", "[mpk_tss_parameter] {\n\t/* justify-content: space-between; */\n\tpadding: 0;\n\tmargin: 0 0rem;\n}\n\n[mpk_tss_parameter]:nth-child(2n) {\n\tbackground: var(--mol_theme_line);\n}\n[mpk_tss_parameter_name] {\n\tflex-grow: 0;\n\tflex-basis: 15rem;\n}\n\n[mpk_tss_parameter_value] {\n\tflex-grow: 0;\n\tflex-basis: 7rem;\n}\n\n[mpk_tss_parameter_updated] {\n\tflex-basis: 10rem;\n}\n\n[mpk_tss_parameter_unknown] {\n\tcolor: var(--mol_theme_shade);\n}\n");
})($ || ($ = {}));
//mpk/tss/parameter/-css/parameter.css.ts
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
//mpk/tss/parameter/parameter.view.ts
;
"use strict";
var $;
(function ($) {
    class $mpk_tss_parameter_list extends $mol_list {
    }
    $.$mpk_tss_parameter_list = $mpk_tss_parameter_list;
})($ || ($ = {}));
//mpk/tss/parameter/list/-view.tree/list.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mpk/tss/parameter/list/list.css", "[mpk_tss_parameter_list] {\n\tbackground: var(--mol_theme_field);\n}\n");
})($ || ($ = {}));
//mpk/tss/parameter/list/-css/list.css.ts
;
"use strict";
var $;
(function ($) {
    class $mpk_tss_pereferial_ups extends $mpk_tss_parameter_list {
        unit() {
            return null;
        }
        rows() {
            return [
                this.Status(),
                this.Power(),
                this.Voltage(),
                this.Bat_level(),
                this.Bat_time()
            ];
        }
        status_title() {
            return this.$.$mol_locale.text('$mpk_tss_pereferial_ups_status_title');
        }
        status() {
            return null;
        }
        updated() {
            return null;
        }
        Status() {
            const obj = new this.$.$mpk_tss_parameter();
            obj.name = () => this.status_title();
            obj.value = () => this.status();
            obj.updated = () => this.updated();
            return obj;
        }
        power_title() {
            return this.$.$mol_locale.text('$mpk_tss_pereferial_ups_power_title');
        }
        power_source() {
            return null;
        }
        Power() {
            const obj = new this.$.$mpk_tss_parameter();
            obj.name = () => this.power_title();
            obj.value = () => this.power_source();
            obj.updated = () => this.updated();
            return obj;
        }
        voltage_title() {
            return this.$.$mol_locale.text('$mpk_tss_pereferial_ups_voltage_title');
        }
        voltage() {
            return null;
        }
        Voltage() {
            const obj = new this.$.$mpk_tss_parameter();
            obj.name = () => this.voltage_title();
            obj.value = () => this.voltage();
            obj.updated = () => this.updated();
            return obj;
        }
        bat_level_title() {
            return this.$.$mol_locale.text('$mpk_tss_pereferial_ups_bat_level_title');
        }
        battery_level() {
            return null;
        }
        Bat_level() {
            const obj = new this.$.$mpk_tss_parameter();
            obj.name = () => this.bat_level_title();
            obj.value = () => this.battery_level();
            obj.updated = () => this.updated();
            return obj;
        }
        bat_time_title() {
            return this.$.$mol_locale.text('$mpk_tss_pereferial_ups_bat_time_title');
        }
        battery_time() {
            return null;
        }
        Bat_time() {
            const obj = new this.$.$mpk_tss_parameter();
            obj.name = () => this.bat_time_title();
            obj.value = () => this.battery_time();
            obj.updated = () => this.updated();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mpk_tss_pereferial_ups.prototype, "Status", null);
    __decorate([
        $mol_mem
    ], $mpk_tss_pereferial_ups.prototype, "Power", null);
    __decorate([
        $mol_mem
    ], $mpk_tss_pereferial_ups.prototype, "Voltage", null);
    __decorate([
        $mol_mem
    ], $mpk_tss_pereferial_ups.prototype, "Bat_level", null);
    __decorate([
        $mol_mem
    ], $mpk_tss_pereferial_ups.prototype, "Bat_time", null);
    $.$mpk_tss_pereferial_ups = $mpk_tss_pereferial_ups;
})($ || ($ = {}));
//mpk/tss/pereferial/ups/-view.tree/ups.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mpk_tss_pereferial_domain_units extends $mol_object {
        unit(id) {
            throw new $mpk_tss_todo;
        }
        filter_name(next) {
            return next || '';
        }
        units() {
            throw new $mpk_tss_todo;
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
    class $mpk_tss_pereferial_domain_unit extends $mol_object {
        id() { throw new $mpk_tss_todo; }
        type() { throw new $mpk_tss_todo; }
        name() { throw new $mpk_tss_todo; }
        status() { throw new $mpk_tss_todo; }
        updated(next) { throw new $mpk_tss_todo; }
    }
    $.$mpk_tss_pereferial_domain_unit = $mpk_tss_pereferial_domain_unit;
    let $mpk_tss_pereferial_domain_ups_power_source;
    (function ($mpk_tss_pereferial_domain_ups_power_source) {
        $mpk_tss_pereferial_domain_ups_power_source["linein"] = "linein";
        $mpk_tss_pereferial_domain_ups_power_source["internal"] = "internal";
    })($mpk_tss_pereferial_domain_ups_power_source = $.$mpk_tss_pereferial_domain_ups_power_source || ($.$mpk_tss_pereferial_domain_ups_power_source = {}));
    class $mpk_tss_pereferial_domain_ups extends $mpk_tss_pereferial_domain_unit {
        type() { return $mpk_tss_pereferial_domain_type.ups; }
        power_source() { throw new $mpk_tss_todo; }
        voltage() { throw new $mpk_tss_todo; }
        battery_level() { throw new $mpk_tss_todo; }
        battery_time() { throw new $mpk_tss_todo; }
    }
    $.$mpk_tss_pereferial_domain_ups = $mpk_tss_pereferial_domain_ups;
})($ || ($ = {}));
//mpk/tss/pereferial/domain/domain.ts
;
"use strict";
var $;
(function ($) {
    class $mpk_tss_pereferial_status extends $mol_view {
        status() {
            return null;
        }
        colors() {
            return true;
        }
        statuses() {
            return {
                ready: this.ready(),
                error: this.error(),
                not_responding: this.not_responding(),
                inactive: this.inactive(),
                unknown: this.unknown()
            };
        }
        sub() {
            return [
                this.status_text()
            ];
        }
        ready() {
            return this.$.$mol_locale.text('$mpk_tss_pereferial_status_ready');
        }
        error() {
            return this.$.$mol_locale.text('$mpk_tss_pereferial_status_error');
        }
        not_responding() {
            return this.$.$mol_locale.text('$mpk_tss_pereferial_status_not_responding');
        }
        inactive() {
            return this.$.$mol_locale.text('$mpk_tss_pereferial_status_inactive');
        }
        unknown() {
            return this.$.$mol_locale.text('$mpk_tss_pereferial_status_unknown');
        }
        status_text() {
            return this.unknown();
        }
    }
    $.$mpk_tss_pereferial_status = $mpk_tss_pereferial_status;
})($ || ($ = {}));
//mpk/tss/pereferial/status/-view.tree/status.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mpk/tss/pereferial/status/status.css", "[mpk_tss_pereferial_status_type=\"ready\"] {\n\tcolor: var(--mpk_theme_status_text_success);\n}\n\n[mpk_tss_pereferial_status_type=\"not_responding\"],\n[mpk_tss_pereferial_status_type=\"error\"] {\n\tcolor: var(--mpk_theme_status_text_error);\n}\n\n\n[mpk_tss_pereferial_status_type=\"unknown\"],\n[mpk_tss_pereferial_status_type=\"inactive\"] {\n\tcolor: var(--mpk_theme_status_text_inactive);\n}\n");
})($ || ($ = {}));
//mpk/tss/pereferial/status/-css/status.css.ts
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
                return ({
                    ...super.attr(),
                    'mpk_tss_pereferial_status_type': this.status(),
                });
            }
        }
        $$.$mpk_tss_pereferial_status = $mpk_tss_pereferial_status;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mpk/tss/pereferial/status/status.view.ts
;
"use strict";
var $;
(function ($) {
    class $mpk_tss_pereferial_source extends $mol_view {
        status() {
            return null;
        }
        statuses() {
            return {
                linein: this.linein(),
                internal: this.internal()
            };
        }
        sub() {
            return [
                this.status_text()
            ];
        }
        linein() {
            return this.$.$mol_locale.text('$mpk_tss_pereferial_source_linein');
        }
        internal() {
            return this.$.$mol_locale.text('$mpk_tss_pereferial_source_internal');
        }
        status_text() {
            return "";
        }
    }
    $.$mpk_tss_pereferial_source = $mpk_tss_pereferial_source;
})($ || ($ = {}));
//mpk/tss/pereferial/source/-view.tree/source.view.tree.ts
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
//mpk/tss/pereferial/source/source.view.ts
;
"use strict";
var $;
(function ($) {
    class $mpk_tss_parameter_voltage extends $mol_view {
        sub() {
            return [
                this.value(),
                this.spacer(),
                this.unit()
            ];
        }
        value() {
            return null;
        }
        spacer() {
            return " ";
        }
        unit() {
            return this.$.$mol_locale.text('$mpk_tss_parameter_voltage_unit');
        }
    }
    $.$mpk_tss_parameter_voltage = $mpk_tss_parameter_voltage;
})($ || ($ = {}));
//mpk/tss/parameter/voltage/-view.tree/voltage.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mpk_tss_parameter_duration extends $mol_view {
        minutes() {
            return this.$.$mol_locale.text('$mpk_tss_parameter_duration_minutes');
        }
        value() {
            return null;
        }
        sub() {
            return [
                this.formatted_value()
            ];
        }
        formatted_value() {
            return "";
        }
    }
    $.$mpk_tss_parameter_duration = $mpk_tss_parameter_duration;
})($ || ($ = {}));
//mpk/tss/parameter/duration/-view.tree/duration.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mpk_tss_parameter_duration extends $.$mpk_tss_parameter_duration {
            value() { throw new $mpk_tss_todo; }
            formatted_value() {
                return this.value().minute + ' ' + this.minutes();
            }
        }
        $$.$mpk_tss_parameter_duration = $mpk_tss_parameter_duration;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mpk/tss/parameter/duration/duration.view.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mpk_tss_pereferial_ups extends $.$mpk_tss_pereferial_ups {
            unit() { throw new $mpk_tss_todo; }
            updated() { return this.unit().updated(); }
            status() { return $mpk_tss_pereferial_status.make({ status: () => this.unit().status() }); }
            power_source() {
                return this.unit().power_source() && $mpk_tss_pereferial_source.make({ status: () => this.unit().power_source() });
            }
            voltage() {
                return this.unit().voltage() && $mpk_tss_parameter_voltage.make({ value: () => this.unit().voltage() });
            }
            battery_level() {
                return this.unit().battery_level() && (this.unit().battery_level() + '%');
            }
            battery_time() {
                return this.unit().battery_time() && $mpk_tss_parameter_duration.make({ value: () => this.unit().battery_time() });
            }
        }
        __decorate([
            $mol_mem
        ], $mpk_tss_pereferial_ups.prototype, "status", null);
        __decorate([
            $mol_mem
        ], $mpk_tss_pereferial_ups.prototype, "power_source", null);
        __decorate([
            $mol_mem
        ], $mpk_tss_pereferial_ups.prototype, "voltage", null);
        __decorate([
            $mol_mem
        ], $mpk_tss_pereferial_ups.prototype, "battery_level", null);
        __decorate([
            $mol_mem
        ], $mpk_tss_pereferial_ups.prototype, "battery_time", null);
        $$.$mpk_tss_pereferial_ups = $mpk_tss_pereferial_ups;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mpk/tss/pereferial/ups/ups.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_cross extends $mol_icon {
        path() {
            return "M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z";
        }
    }
    $.$mol_icon_cross = $mol_icon_cross;
})($ || ($ = {}));
//mol/icon/cross/-view.tree/cross.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mpk_tss_pereferial_details extends $mol_page {
        unit() {
            return null;
        }
        minimal_width() {
            return 400;
        }
        tools() {
            return [
                this.Details_close()
            ];
        }
        body() {
            return [
                this.unit_details()
            ];
        }
        Ups() {
            const obj = new this.$.$mpk_tss_pereferial_ups();
            obj.unit = () => this.unit();
            return obj;
        }
        Details_close_icon() {
            const obj = new this.$.$mol_icon_cross();
            return obj;
        }
        Details_close() {
            const obj = new this.$.$mpk_tss_link();
            obj.arg = () => ({
                unit: null
            });
            obj.sub = () => [
                this.Details_close_icon()
            ];
            obj.copy_params = () => [
                "login",
                "page"
            ];
            return obj;
        }
        unit_details() {
            return null;
        }
    }
    __decorate([
        $mol_mem
    ], $mpk_tss_pereferial_details.prototype, "Ups", null);
    __decorate([
        $mol_mem
    ], $mpk_tss_pereferial_details.prototype, "Details_close_icon", null);
    __decorate([
        $mol_mem
    ], $mpk_tss_pereferial_details.prototype, "Details_close", null);
    $.$mpk_tss_pereferial_details = $mpk_tss_pereferial_details;
})($ || ($ = {}));
//mpk/tss/pereferial/details/-view.tree/details.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mpk/tss/pereferial/details/details.css", "[mpk_tss_pereferial_details] {\n\tflex: 1 1 36rem;\n}\n");
})($ || ($ = {}));
//mpk/tss/pereferial/details/-css/details.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mpk_tss_pereferial_details extends $.$mpk_tss_pereferial_details {
            unit() {
                throw new $mpk_tss_todo;
            }
            title() {
                return this.type() + ' | ' + this.name();
            }
            type() { return this.unit().type(); }
            name() { return this.unit().name(); }
            unit_details() {
                switch (this.unit().type()) {
                    case $mpk_tss_pereferial_domain_type.ups: return this.Ups();
                }
                throw new $mpk_tss_todo_unknown;
            }
        }
        $$.$mpk_tss_pereferial_details = $mpk_tss_pereferial_details;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mpk/tss/pereferial/details/details.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_card extends $mol_list {
        attr() {
            return {
                ...super.attr(),
                mol_card_status_type: this.status()
            };
        }
        rows() {
            return [
                this.Content(),
                this.Status()
            ];
        }
        status() {
            return "";
        }
        content() {
            return [
                this.title()
            ];
        }
        Content() {
            const obj = new this.$.$mol_view();
            obj.sub = () => this.content();
            return obj;
        }
        status_text() {
            return this.status();
        }
        Status() {
            const obj = new this.$.$mol_view();
            obj.minimal_height = () => 30;
            obj.sub = () => [
                this.status_text()
            ];
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_card.prototype, "Content", null);
    __decorate([
        $mol_mem
    ], $mol_card.prototype, "Status", null);
    $.$mol_card = $mol_card;
})($ || ($ = {}));
//mol/card/-view.tree/card.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/card/card.view.css", "[mol_card] {\n\tbackground: var(--mol_theme_card);\n\tcolor: var(--mol_theme_text);\n\tborder-radius: var(--mol_gap_round);\n\tdisplay: flex;\n\tflex: 0 1 auto;\n\tflex-direction: column;\n\tposition: relative;\n\toverflow: hidden;\n}\n\n[mol_card_content] {\n\tflex: 1 1 auto;\n\tborder-radius: var(--mol_gap_round);\n\tmargin: 0;\n\tpadding: var(--mol_gap_block);\n}\n\n[mol_card_status] {\n\tbackground: var(--mol_theme_line);\n\ttext-transform: capitalize;\n\tpadding: var(--mol_gap_text);\n\tmargin: 0;\n}\n\n[mol_card_status] {\n\tbackground: var(--mol_theme_line);\n}\n");
})($ || ($ = {}));
//mol/card/-css/card.view.css.ts
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
//mol/card/card.view.ts
;
"use strict";
var $;
(function ($) {
    class $mpk_tss_card extends $mpk_tss_link {
        minimal_height() {
            return 110;
        }
        sub() {
            return [
                this.Card()
            ];
        }
        status() {
            return "";
        }
        Status_text() {
            return null;
        }
        tools() {
            return [];
        }
        status_click(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        Status_icon() {
            const obj = new this.$.$mpk_tss_icon_cloud_download();
            return obj;
        }
        Status_action() {
            const obj = new this.$.$mol_button_minor();
            obj.event_click = (event) => this.status_click(event);
            obj.sub = () => [
                this.Status_icon()
            ];
            return obj;
        }
        Tools() {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.tools(),
                this.Status_action()
            ];
            return obj;
        }
        Status() {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.Status_text(),
                this.Tools()
            ];
            return obj;
        }
        items() {
            return [];
        }
        Content() {
            const obj = new this.$.$mol_row();
            obj.sub = () => this.items();
            return obj;
        }
        Card() {
            const obj = new this.$.$mol_card();
            obj.status = () => this.status();
            obj.Status = () => this.Status();
            obj.Content = () => this.Content();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mpk_tss_card.prototype, "status_click", null);
    __decorate([
        $mol_mem
    ], $mpk_tss_card.prototype, "Status_icon", null);
    __decorate([
        $mol_mem
    ], $mpk_tss_card.prototype, "Status_action", null);
    __decorate([
        $mol_mem
    ], $mpk_tss_card.prototype, "Tools", null);
    __decorate([
        $mol_mem
    ], $mpk_tss_card.prototype, "Status", null);
    __decorate([
        $mol_mem
    ], $mpk_tss_card.prototype, "Content", null);
    __decorate([
        $mol_mem
    ], $mpk_tss_card.prototype, "Card", null);
    $.$mpk_tss_card = $mpk_tss_card;
})($ || ($ = {}));
//mpk/tss/card/-view.tree/card.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mpk/tss/card/card.css", "[mpk_tss_card] {\n\tpadding: 0.5rem;\n\tdisplay: block;\n\tflex: 0 1 auto;\n\tposition: relative;\n\tmin-height: 110px;\n}\n\n[mpk_tss_card_content] {\n\tpadding: 0;\n}\n\n[mpk_tss_card_status] {\n\tbackground: var(--mol_theme_line);\n\tcolor: var(--mol_theme_text);\n\tpadding: 0;\n\tline-height: 2;\n\tmargin: 0;\n\tdisplay: flex;\n\tjustify-content: space-between;\n}\n\n[mpk_tss_card_status_text] {\n\tpadding: 0 0.5rem;\n}\n\n[mpk_tss_card] > [mol_card_status_type=\"success\"] {\n\t--mol_theme_line: var(--mpk_theme_status_bg_success);\n\t--mol_theme_control: var(--mpk_theme_status_control);\n\t--mol_theme_text: var(--mpk_theme_status_text);\n}\n\n[mpk_tss_card] > [mol_card_status_type=\"warning\"] {\n\t--mol_theme_line: var(--mpk_theme_status_bg_warning);\n\t--mol_theme_control: var(--mpk_theme_status_control);\n\t--mol_theme_text: var(--mpk_theme_status_text);\n}\n[mpk_tss_card] > [mol_card_status_type=\"ready\"] {\n\t--mol_theme_line: var(--mpk_theme_status_bg_success);\n\t--mol_theme_control: var(--mpk_theme_status_control);\n\t--mol_theme_text: var(--mpk_theme_status_text);\n}\n\n[mpk_tss_card] > [mol_card_status_type=\"not_responding\"],\n[mpk_tss_card] > [mol_card_status_type=\"error\"] {\n\t--mol_theme_line: var(--mpk_theme_status_bg_error);\n\t--mol_theme_control: var(--mol_theme_field);\n\t--mol_theme_text: var(--mpk_theme_status_text);\n}\n\n[mpk_tss_card] > [mol_card_status_type=\"inactive\"] {\n\t--mol_theme_line: var(--mpk_theme_status_bg_inactive);\n\t--mol_theme_control: var(--mol_theme_field);\n\t--mol_theme_text: var(--mpk_theme_status_text);\n}\n\n[mpk_tss_card] > [mol_card_status_type=\"unknown\"] {\n\t--mol_theme_line: var(--mpk_theme_status_bg_unknown);\n\t--mol_theme_control: var(--mol_theme_field);\n\t--mol_theme_text: var(--mpk_theme_status_text);\n}\n");
})($ || ($ = {}));
//mpk/tss/card/-css/card.css.ts
;
"use strict";
var $;
(function ($) {
    class $mpk_tss_pereferial_link extends $mpk_tss_card {
        unit() {
            return null;
        }
        arg() {
            return {
                unit: this.unit_id()
            };
        }
        copy_params() {
            return [
                "login",
                "page",
                "units"
            ];
        }
        status() {
            return this.unit_status();
        }
        Status_text() {
            const obj = new this.$.$mpk_tss_pereferial_status();
            obj.colors = () => false;
            obj.status = () => this.unit_status();
            return obj;
        }
        Status_icon() {
            const obj = new this.$.$mpk_tss_icon_autorenew();
            return obj;
        }
        status_click(event) {
            return this.unit_status_click(event);
        }
        items() {
            return [
                this.Type_item(),
                this.Name_item()
            ];
        }
        unit_id() {
            return "";
        }
        unit_status() {
            return "";
        }
        unit_status_click(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        type_title() {
            return this.$.$mol_locale.text('$mpk_tss_pereferial_link_type_title');
        }
        type() {
            return "";
        }
        Type_item() {
            const obj = new this.$.$mol_labeler();
            obj.title = () => this.type_title();
            obj.content = () => [
                this.type()
            ];
            return obj;
        }
        name_title() {
            return this.$.$mol_locale.text('$mpk_tss_pereferial_link_name_title');
        }
        name() {
            return "";
        }
        Name_item() {
            const obj = new this.$.$mol_labeler();
            obj.title = () => this.name_title();
            obj.content = () => [
                this.name()
            ];
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mpk_tss_pereferial_link.prototype, "Status_text", null);
    __decorate([
        $mol_mem
    ], $mpk_tss_pereferial_link.prototype, "Status_icon", null);
    __decorate([
        $mol_mem
    ], $mpk_tss_pereferial_link.prototype, "unit_status_click", null);
    __decorate([
        $mol_mem
    ], $mpk_tss_pereferial_link.prototype, "Type_item", null);
    __decorate([
        $mol_mem
    ], $mpk_tss_pereferial_link.prototype, "Name_item", null);
    $.$mpk_tss_pereferial_link = $mpk_tss_pereferial_link;
})($ || ($ = {}));
//mpk/tss/pereferial/link/-view.tree/link.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mpk_tss_pereferial_link extends $.$mpk_tss_pereferial_link {
            unit() {
                throw new $mpk_tss_todo;
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
                this.unit().updated(new $mol_time_moment());
            }
        }
        $$.$mpk_tss_pereferial_link = $mpk_tss_pereferial_link;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mpk/tss/pereferial/link/link.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_pop extends $mol_view {
        showed(val) {
            if (val !== undefined)
                return val;
            return false;
        }
        align_vert() {
            return "";
        }
        align_hor() {
            return "";
        }
        sub() {
            return [
                this.Anchor()
            ];
        }
        sub_visible() {
            return [
                this.Anchor(),
                this.Bubble()
            ];
        }
        Anchor() {
            return null;
        }
        align() {
            return "bottom_center";
        }
        bubble_content() {
            return [];
        }
        height_max() {
            return 9999;
        }
        Bubble() {
            const obj = new this.$.$mol_pop_bubble();
            obj.align = () => this.align();
            obj.content = () => this.bubble_content();
            obj.height_max = () => this.height_max();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_pop.prototype, "showed", null);
    __decorate([
        $mol_mem
    ], $mol_pop.prototype, "Bubble", null);
    $.$mol_pop = $mol_pop;
    class $mol_pop_bubble extends $mol_scroll {
        sub() {
            return this.content();
        }
        style() {
            return {
                ...super.style(),
                maxHeight: this.height_max()
            };
        }
        attr() {
            return {
                ...super.attr(),
                mol_pop_align: this.align(),
                tabindex: 0
            };
        }
        content() {
            return [];
        }
        height_max() {
            return 9999;
        }
        align() {
            return "";
        }
    }
    $.$mol_pop_bubble = $mol_pop_bubble;
})($ || ($ = {}));
//mol/pop/-view.tree/pop.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/pop/pop.view.css", "[mol_pop] {\n\tposition: relative;\n\tdisplay: inline-flex;\n}\n\n[mol_pop_bubble] {\n\tbox-shadow: 0 0 1rem hsla(0,0%,0%,.5);\n\tborder-radius: var(--mol_gap_round);\n\tposition: absolute;\n\tz-index: var(--mol_layer_popup);\n\tbackground: var(--mol_theme_back);\n\tmax-width: none;\n\tmax-height: none;\n\toverflow: hidden;\n\toverflow-y: scroll;\n\toverflow-y: overlay;\n\tword-break: normal;\n\twidth: max-content;\n\theight: max-content;\n}\n\n[mol_pop_bubble][mol_scroll] {\n\tbackground: var(--mol_theme_back);\n}\n\n[mol_pop_bubble]:focus {\n\toutline: none;\n}\n\n[mol_pop_align=\"suspense\"] {\n\tdisplay: none;\n}\n\n[mol_pop_align=\"left_top\"] {\n\ttransform: translate(-100%);\n\tleft: 0;\n\tbottom: 0;\n}\n\n[mol_pop_align=\"left_center\"] {\n\ttransform: translate(-100%, -50%);\n\tleft: 0;\n\ttop: 50%;\n}\n\n[mol_pop_align=\"left_bottom\"] {\n\ttransform: translate(-100%);\n\tleft: 0;\n\ttop: 0;\n}\n\n[mol_pop_align=\"right_top\"] {\n\ttransform: translate(100%);\n\tright: 0;\n\tbottom: 0;\n}\n\n[mol_pop_align=\"right_center\"] {\n\ttransform: translate(100%, -50%);\n\tright: 0;\n\ttop: 50%;\n}\n\n[mol_pop_align=\"right_bottom\"] {\n\ttransform: translate(100%);\n\tright: 0;\n\ttop: 0;\n}\n\n[mol_pop_align=\"center\"] {\n\tleft: 50%;\n\ttop: 50%;\n\ttransform: translate(-50%, -50%);\n}\n\n[mol_pop_align=\"top_left\"] {\n\tright: 0;\n\tbottom: 100%;\n}\n\n[mol_pop_align=\"top_center\"] {\n\ttransform: translate(-50%);\n\tleft: 50%;\n\tbottom: 100%;\n}\n\n[mol_pop_align=\"top_right\"] {\n\tleft: 0;\n\tbottom: 100%;\n}\n\n[mol_pop_align=\"bottom_left\"] {\n\tright: 0;\n\ttop: 100%;\n}\n\n[mol_pop_align=\"bottom_center\"] {\n\ttransform: translate(-50%);\n\tleft: 50%;\n\ttop: 100%;\n}\n\n[mol_pop_align=\"bottom_right\"] {\n\tleft: 0;\n\ttop: 100%;\n}\n");
})($ || ($ = {}));
//mol/pop/-css/pop.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_pop extends $.$mol_pop {
            showed(next = false) {
                this.focused();
                return next;
            }
            sub_visible() {
                return [
                    this.Anchor(),
                    ...this.showed() ? [this.Bubble()] : [],
                ];
            }
            height_max() {
                const viewport = this.$.$mol_window.size();
                const rect_bubble = this.view_rect();
                const align = this.align_vert();
                if (align === 'bottom')
                    return (viewport.height - rect_bubble.bottom) * .66;
                if (align === 'top')
                    return rect_bubble.top * .66;
                return 0;
            }
            align() {
                return `${this.align_vert()}_${this.align_hor()}`;
            }
            align_vert() {
                const viewport = this.view_port();
                const rect_pop = this.view_rect();
                if (!rect_pop)
                    return 'suspense';
                return rect_pop.top > (viewport.top + viewport.height / 2) ? 'top' : 'bottom';
            }
            align_hor() {
                const viewport = this.view_port();
                const rect_pop = this.view_rect();
                if (!rect_pop)
                    return 'suspense';
                return rect_pop.left > (viewport.left + viewport.width / 2) ? 'left' : 'right';
            }
            View_port() {
                const view = new $mol_view;
                view.dom_node = () => {
                    let node = this.dom_node();
                    while (node = node.offsetParent) {
                        if (this.$.$mol_dom_context.getComputedStyle(node).overflow !== 'visible')
                            return node;
                    }
                    return this.$.$mol_dom_context.document.documentElement;
                };
                return view;
            }
            view_port() {
                return this.View_port().view_rect() ?? { ...this.$.$mol_window.size(), left: 0, top: 0 };
            }
        }
        __decorate([
            $mol_mem
        ], $mol_pop.prototype, "showed", null);
        __decorate([
            $mol_mem
        ], $mol_pop.prototype, "sub_visible", null);
        __decorate([
            $mol_mem
        ], $mol_pop.prototype, "height_max", null);
        __decorate([
            $mol_mem
        ], $mol_pop.prototype, "align", null);
        __decorate([
            $mol_mem
        ], $mol_pop.prototype, "align_vert", null);
        __decorate([
            $mol_mem
        ], $mol_pop.prototype, "align_hor", null);
        __decorate([
            $mol_mem
        ], $mol_pop.prototype, "View_port", null);
        __decorate([
            $mol_mem
        ], $mol_pop.prototype, "view_port", null);
        $$.$mol_pop = $mol_pop;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/pop/pop.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_hotkey extends $mol_plugin {
        event() {
            return {
                ...super.event(),
                keydown: (event) => this.keydown(event)
            };
        }
        key() {
            return {};
        }
        mod_ctrl() {
            return false;
        }
        mod_alt() {
            return false;
        }
        mod_shift() {
            return false;
        }
        keydown(event) {
            if (event !== undefined)
                return event;
            return null;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_hotkey.prototype, "keydown", null);
    $.$mol_hotkey = $mol_hotkey;
})($ || ($ = {}));
//mol/hotkey/-view.tree/hotkey.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_hotkey extends $.$mol_hotkey {
            key() {
                return super.key();
            }
            keydown(event) {
                if (!event)
                    return;
                if (event.defaultPrevented)
                    return;
                let name = $mol_keyboard_code[event.keyCode];
                if (this.mod_ctrl() !== event.ctrlKey)
                    return;
                if (this.mod_alt() !== event.altKey)
                    return;
                if (this.mod_shift() !== event.shiftKey)
                    return;
                const handle = this.key()[name];
                if (handle)
                    handle(event);
            }
        }
        $$.$mol_hotkey = $mol_hotkey;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/hotkey/hotkey.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_nav extends $mol_plugin {
        cycle(val) {
            if (val !== undefined)
                return val;
            return false;
        }
        mod_ctrl() {
            return false;
        }
        mod_shift() {
            return false;
        }
        mod_alt() {
            return false;
        }
        keys_x(val) {
            if (val !== undefined)
                return val;
            return [];
        }
        keys_y(val) {
            if (val !== undefined)
                return val;
            return [];
        }
        current_x(val) {
            if (val !== undefined)
                return val;
            return null;
        }
        current_y(val) {
            if (val !== undefined)
                return val;
            return null;
        }
        event_up(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        event_down(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        event_left(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        event_right(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        event() {
            return {
                ...super.event(),
                keydown: (event) => this.event_key(event)
            };
        }
        event_key(event) {
            if (event !== undefined)
                return event;
            return null;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_nav.prototype, "cycle", null);
    __decorate([
        $mol_mem
    ], $mol_nav.prototype, "keys_x", null);
    __decorate([
        $mol_mem
    ], $mol_nav.prototype, "keys_y", null);
    __decorate([
        $mol_mem
    ], $mol_nav.prototype, "current_x", null);
    __decorate([
        $mol_mem
    ], $mol_nav.prototype, "current_y", null);
    __decorate([
        $mol_mem
    ], $mol_nav.prototype, "event_up", null);
    __decorate([
        $mol_mem
    ], $mol_nav.prototype, "event_down", null);
    __decorate([
        $mol_mem
    ], $mol_nav.prototype, "event_left", null);
    __decorate([
        $mol_mem
    ], $mol_nav.prototype, "event_right", null);
    __decorate([
        $mol_mem
    ], $mol_nav.prototype, "event_key", null);
    $.$mol_nav = $mol_nav;
})($ || ($ = {}));
//mol/nav/-view.tree/nav.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_nav extends $.$mol_nav {
            event_key(event) {
                if (!event)
                    return event;
                if (event.defaultPrevented)
                    return;
                if (this.mod_ctrl() && !event.ctrlKey)
                    return;
                if (this.mod_shift() && !event.shiftKey)
                    return;
                if (this.mod_alt() && !event.altKey)
                    return;
                switch (event.keyCode) {
                    case $mol_keyboard_code.up: return this.event_up(event);
                    case $mol_keyboard_code.down: return this.event_down(event);
                    case $mol_keyboard_code.left: return this.event_left(event);
                    case $mol_keyboard_code.right: return this.event_right(event);
                    case $mol_keyboard_code.pageUp: return this.event_up(event);
                    case $mol_keyboard_code.pageDown: return this.event_down(event);
                }
            }
            event_up(event) {
                if (!event)
                    return event;
                const keys = this.keys_y();
                if (keys.length < 1)
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
                if (!event)
                    return event;
                const keys = this.keys_y();
                if (keys.length < 1)
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
                if (!event)
                    return event;
                const keys = this.keys_x();
                if (keys.length < 1)
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
                if (!event)
                    return event;
                const keys = this.keys_x();
                if (keys.length < 1)
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
//mol/nav/nav.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_string extends $mol_view {
        dom_name() {
            return "input";
        }
        enabled() {
            return true;
        }
        minimal_height() {
            return 40;
        }
        autocomplete() {
            return false;
        }
        selection(val) {
            if (val !== undefined)
                return val;
            return [
                0,
                0
            ];
        }
        auto() {
            return [
                this.selection_watcher()
            ];
        }
        field() {
            return {
                ...super.field(),
                disabled: this.disabled(),
                value: this.value_changed(),
                placeholder: this.hint_visible(),
                spellcheck: this.spellcheck(),
                autocomplete: this.autocomplete_native(),
                selectionEnd: this.selection_end(),
                selectionStart: this.selection_start(),
                inputMode: this.keyboard()
            };
        }
        attr() {
            return {
                ...super.attr(),
                maxlength: this.length_max(),
                type: this.type()
            };
        }
        event() {
            return {
                ...super.event(),
                input: (event) => this.event_change(event)
            };
        }
        plugins() {
            return [
                this.Submit()
            ];
        }
        selection_watcher() {
            return null;
        }
        disabled() {
            return false;
        }
        value(val) {
            if (val !== undefined)
                return val;
            return "";
        }
        value_changed(val) {
            return this.value(val);
        }
        hint() {
            return "";
        }
        hint_visible() {
            return this.hint();
        }
        spellcheck() {
            return true;
        }
        autocomplete_native() {
            return "";
        }
        selection_end() {
            return 0;
        }
        selection_start() {
            return 0;
        }
        keyboard() {
            return "text";
        }
        length_max() {
            return +Infinity;
        }
        type(val) {
            if (val !== undefined)
                return val;
            return "text";
        }
        event_change(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        submit(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        Submit() {
            const obj = new this.$.$mol_hotkey();
            obj.key = () => ({
                enter: (event) => this.submit(event)
            });
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_string.prototype, "selection", null);
    __decorate([
        $mol_mem
    ], $mol_string.prototype, "value", null);
    __decorate([
        $mol_mem
    ], $mol_string.prototype, "type", null);
    __decorate([
        $mol_mem
    ], $mol_string.prototype, "event_change", null);
    __decorate([
        $mol_mem
    ], $mol_string.prototype, "submit", null);
    __decorate([
        $mol_mem
    ], $mol_string.prototype, "Submit", null);
    $.$mol_string = $mol_string;
})($ || ($ = {}));
//mol/string/-view.tree/string.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/string/string.view.css", "[mol_string] {\n\tbox-sizing: border-box;\n\toutline-offset: 0;\n\tborder: none;\n\tborder-radius: var(--mol_gap_round);\n\twhite-space: pre-line;\n\toverflow: hidden;\n\ttext-overflow: ellipsis;\n\tpadding: var(--mol_gap_text);\n\ttext-align: left;\n\tposition: relative;\n\tfont: inherit;\n\tflex: 1 1 auto;\n\tbackground: transparent;\n\tmin-width: 0;\n\tcolor: inherit;\n\tbackground: var(--mol_theme_field);\n}\n\n[mol_string]:disabled:not(:placeholder-shown) {\n\tbackground-color: transparent;\n\tcolor: var(--mol_theme_text);\n}\n\n[mol_string]:where(:not(:disabled)) {\n\tbox-shadow: inset 0 0 0 1px var(--mol_theme_line);\n}\n\n[mol_string]:where(:not(:disabled)):hover {\n\tbox-shadow: inset 0 0 0 2px var(--mol_theme_line);\n\tz-index: var(--mol_layer_hover);\n}\n\n[mol_string]:focus {\n\toutline: none;\n\tz-index: var(--mol_layer_focus);\n\tcolor: var(--mol_theme_text);\n\tbox-shadow: inset 0 0 0 1px var(--mol_theme_focus);\n}\n\n[mol_string]::placeholder {\n\tcolor: var(--mol_theme_shade);\n}\n\n[mol_string]::-ms-clear {\n\tdisplay: none;\n}\n");
})($ || ($ = {}));
//mol/string/-css/string.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_string extends $.$mol_string {
            event_change(next) {
                if (!next)
                    return;
                const el = next.target;
                const from = el.selectionStart;
                const to = el.selectionEnd;
                el.value = this.value_changed(el.value);
                el.selectionEnd = to;
                el.selectionStart = from;
                this.selection_change(next);
            }
            hint_visible() {
                return (this.enabled() ? this.hint() : '') || ' ';
            }
            disabled() {
                return !this.enabled();
            }
            autocomplete_native() {
                return this.autocomplete() ? 'on' : 'off';
            }
            selection_watcher() {
                return new $mol_dom_listener(this.$.$mol_dom_context.document, 'selectionchange', $mol_wire_async(event => this.selection_change(event)));
            }
            selection_change(event) {
                const el = this.dom_node();
                if (el !== this.$.$mol_dom_context.document.activeElement)
                    return;
                const [from, to] = this.selection([
                    el.selectionStart,
                    el.selectionEnd,
                ]);
                el.selectionEnd = to;
                el.selectionStart = from;
            }
            selection_start() {
                return this.selection()[0];
            }
            selection_end() {
                return this.selection()[1];
            }
        }
        __decorate([
            $mol_mem
        ], $mol_string.prototype, "selection_watcher", null);
        $$.$mol_string = $mol_string;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/string/string.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_paragraph extends $mol_view {
        line_height() {
            return 24;
        }
        letter_width() {
            return 7;
        }
        width_limit() {
            return +Infinity;
        }
        row_width() {
            return 0;
        }
        sub() {
            return [
                this.title()
            ];
        }
    }
    $.$mol_paragraph = $mol_paragraph;
})($ || ($ = {}));
//mol/paragraph/-view.tree/paragraph.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/paragraph/paragraph.view.css", ":where([mol_paragraph]) {\n\tmargin: 0;\n\tmax-width: 100%;\n}\n");
})($ || ($ = {}));
//mol/paragraph/-css/paragraph.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_paragraph extends $.$mol_paragraph {
            maximal_width() {
                let width = 0;
                const letter = this.letter_width();
                for (const kid of this.sub()) {
                    if (!kid)
                        continue;
                    if (kid instanceof $mol_view) {
                        width += kid.maximal_width();
                    }
                    else if (typeof kid !== 'object') {
                        width += String(kid).length * letter;
                    }
                }
                return width;
            }
            width_limit() {
                return this.$.$mol_window.size().width;
            }
            minimal_width() {
                return this.letter_width();
            }
            row_width() {
                return Math.max(Math.min(this.width_limit(), this.maximal_width()), this.letter_width());
            }
            minimal_height() {
                return Math.max(1, Math.ceil(this.maximal_width() / this.row_width())) * this.line_height();
            }
        }
        __decorate([
            $mol_mem
        ], $mol_paragraph.prototype, "maximal_width", null);
        __decorate([
            $mol_mem
        ], $mol_paragraph.prototype, "row_width", null);
        __decorate([
            $mol_mem
        ], $mol_paragraph.prototype, "minimal_height", null);
        $$.$mol_paragraph = $mol_paragraph;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/paragraph/paragraph.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_dimmer extends $mol_paragraph {
        haystack() {
            return "";
        }
        needle() {
            return "";
        }
        sub() {
            return this.parts();
        }
        Low(id) {
            const obj = new this.$.$mol_paragraph();
            obj.sub = () => [
                this.string(id)
            ];
            return obj;
        }
        High(id) {
            const obj = new this.$.$mol_paragraph();
            obj.sub = () => [
                this.string(id)
            ];
            return obj;
        }
        parts() {
            return [];
        }
        string(id) {
            return "";
        }
    }
    __decorate([
        $mol_mem_key
    ], $mol_dimmer.prototype, "Low", null);
    __decorate([
        $mol_mem_key
    ], $mol_dimmer.prototype, "High", null);
    $.$mol_dimmer = $mol_dimmer;
})($ || ($ = {}));
//mol/dimmer/-view.tree/dimmer.view.tree.ts
;
"use strict";
//mol/type/equals/equals.ts
;
"use strict";
//mol/type/merge/merge.ts
;
"use strict";
//mol/type/intersect/intersect.ts
;
"use strict";
//mol/unicode/unicode.ts
;
"use strict";
var $;
(function ($) {
    class $mol_regexp extends RegExp {
        groups;
        constructor(source, flags = 'gsu', groups = []) {
            super(source, flags);
            this.groups = groups;
        }
        *[Symbol.matchAll](str) {
            const index = this.lastIndex;
            this.lastIndex = 0;
            try {
                while (this.lastIndex < str.length) {
                    const found = this.exec(str);
                    if (!found)
                        break;
                    yield found;
                }
            }
            finally {
                this.lastIndex = index;
            }
        }
        [Symbol.match](str) {
            const res = [...this[Symbol.matchAll](str)].filter(r => r.groups).map(r => r[0]);
            if (!res.length)
                return null;
            return res;
        }
        [Symbol.split](str) {
            const res = [];
            let token_last = null;
            for (let token of this[Symbol.matchAll](str)) {
                if (token.groups && (token_last ? token_last.groups : true))
                    res.push('');
                res.push(token[0]);
                token_last = token;
            }
            if (!res.length)
                res.push('');
            return res;
        }
        test(str) {
            return Boolean(str.match(this));
        }
        exec(str) {
            const from = this.lastIndex;
            if (from >= str.length)
                return null;
            const res = super.exec(str);
            if (res === null) {
                this.lastIndex = str.length;
                if (!str)
                    return null;
                return Object.assign([str.slice(from)], {
                    index: from,
                    input: str,
                });
            }
            if (from === this.lastIndex) {
                $mol_fail(new Error('Captured empty substring'));
            }
            const groups = {};
            const skipped = str.slice(from, this.lastIndex - res[0].length);
            if (skipped) {
                this.lastIndex = this.lastIndex - res[0].length;
                return Object.assign([skipped], {
                    index: from,
                    input: res.input,
                });
            }
            for (let i = 0; i < this.groups.length; ++i) {
                const group = this.groups[i];
                groups[group] = groups[group] || res[i + 1] || '';
            }
            return Object.assign(res, { groups });
        }
        generate(params) {
            return null;
        }
        get native() {
            return new RegExp(this.source, this.flags);
        }
        static repeat(source, min = 0, max = Number.POSITIVE_INFINITY) {
            const regexp = $mol_regexp.from(source);
            const upper = Number.isFinite(max) ? max : '';
            const str = `(?:${regexp.source}){${min},${upper}}?`;
            const regexp2 = new $mol_regexp(str, regexp.flags, regexp.groups);
            regexp2.generate = params => {
                const res = regexp.generate(params);
                if (res)
                    return res;
                if (min > 0)
                    return res;
                return '';
            };
            return regexp2;
        }
        static repeat_greedy(source, min = 0, max = Number.POSITIVE_INFINITY) {
            const regexp = $mol_regexp.from(source);
            const upper = Number.isFinite(max) ? max : '';
            const str = `(?:${regexp.source}){${min},${upper}}`;
            const regexp2 = new $mol_regexp(str, regexp.flags, regexp.groups);
            regexp2.generate = params => {
                const res = regexp.generate(params);
                if (res)
                    return res;
                if (min > 0)
                    return res;
                return '';
            };
            return regexp2;
        }
        static vary(sources) {
            const groups = [];
            const chunks = sources.map(source => {
                const regexp = $mol_regexp.from(source);
                groups.push(...regexp.groups);
                return regexp.source;
            });
            return new $mol_regexp(`(?:${chunks.join('|')})`, '', groups);
        }
        static optional(source) {
            return $mol_regexp.repeat_greedy(source, 0, 1);
        }
        static force_after(source) {
            const regexp = $mol_regexp.from(source);
            return new $mol_regexp(`(?=${regexp.source})`, regexp.flags, regexp.groups);
        }
        static forbid_after(source) {
            const regexp = $mol_regexp.from(source);
            return new $mol_regexp(`(?!${regexp.source})`, regexp.flags, regexp.groups);
        }
        static from(source, { ignoreCase, multiline } = {
            ignoreCase: false,
            multiline: false,
        }) {
            let flags = 'gsu';
            if (multiline)
                flags += 'm';
            if (ignoreCase)
                flags += 'i';
            if (typeof source === 'number') {
                const src = `\\u{${source.toString(16)}}`;
                const regexp = new $mol_regexp(src, flags);
                regexp.generate = () => src;
                return regexp;
            }
            if (typeof source === 'string') {
                const src = source.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
                const regexp = new $mol_regexp(src, flags);
                regexp.generate = () => source;
                return regexp;
            }
            else if (source instanceof $mol_regexp) {
                const regexp = new $mol_regexp(source.source, flags, source.groups);
                regexp.generate = params => source.generate(params);
                return regexp;
            }
            if (source instanceof RegExp) {
                const test = new RegExp('|' + source.source);
                const groups = Array.from({ length: test.exec('').length - 1 }, (_, i) => String(i + 1));
                const regexp = new $mol_regexp(source.source, source.flags, groups);
                regexp.generate = () => '';
                return regexp;
            }
            if (Array.isArray(source)) {
                const patterns = source.map(src => Array.isArray(src)
                    ? $mol_regexp.optional(src)
                    : $mol_regexp.from(src));
                const chunks = patterns.map(pattern => pattern.source);
                const groups = [];
                let index = 0;
                for (const pattern of patterns) {
                    for (let group of pattern.groups) {
                        if (Number(group) >= 0) {
                            groups.push(String(index++));
                        }
                        else {
                            groups.push(group);
                        }
                    }
                }
                const regexp = new $mol_regexp(chunks.join(''), flags, groups);
                regexp.generate = params => {
                    let res = '';
                    for (const pattern of patterns) {
                        let sub = pattern.generate(params);
                        if (sub === null)
                            return '';
                        res += sub;
                    }
                    return res;
                };
                return regexp;
            }
            else {
                const groups = [];
                const chunks = Object.keys(source).map(name => {
                    groups.push(name);
                    const regexp = $mol_regexp.from(source[name]);
                    groups.push(...regexp.groups);
                    return `(${regexp.source})`;
                });
                const regexp = new $mol_regexp(`(?:${chunks.join('|')})`, flags, groups);
                const validator = new RegExp('^' + regexp.source + '$', flags);
                regexp.generate = params => {
                    for (let option in source) {
                        if (option in params) {
                            if (typeof params[option] === 'boolean') {
                                if (!params[option])
                                    continue;
                            }
                            else {
                                const str = String(params[option]);
                                if (str.match(validator))
                                    return str;
                                $mol_fail(new Error(`Wrong param: ${option}=${str}`));
                            }
                        }
                        else {
                            if (typeof source[option] !== 'object')
                                continue;
                        }
                        const res = $mol_regexp.from(source[option]).generate(params);
                        if (res)
                            return res;
                    }
                    return null;
                };
                return regexp;
            }
        }
        static unicode_only(...category) {
            return new $mol_regexp(`\\p{${category.join('=')}}`);
        }
        static unicode_except(...category) {
            return new $mol_regexp(`\\P{${category.join('=')}}`);
        }
        static char_range(from, to) {
            return new $mol_regexp(`${$mol_regexp.from(from).source}-${$mol_regexp.from(to).source}`);
        }
        static char_only(...allowed) {
            const regexp = allowed.map(f => $mol_regexp.from(f).source).join('');
            return new $mol_regexp(`[${regexp}]`);
        }
        static char_except(...forbidden) {
            const regexp = forbidden.map(f => $mol_regexp.from(f).source).join('');
            return new $mol_regexp(`[^${regexp}]`);
        }
        static decimal_only = $mol_regexp.from(/\d/gsu);
        static decimal_except = $mol_regexp.from(/\D/gsu);
        static latin_only = $mol_regexp.from(/\w/gsu);
        static latin_except = $mol_regexp.from(/\W/gsu);
        static space_only = $mol_regexp.from(/\s/gsu);
        static space_except = $mol_regexp.from(/\S/gsu);
        static word_break_only = $mol_regexp.from(/\b/gsu);
        static word_break_except = $mol_regexp.from(/\B/gsu);
        static tab = $mol_regexp.from(/\t/gsu);
        static slash_back = $mol_regexp.from(/\\/gsu);
        static nul = $mol_regexp.from(/\0/gsu);
        static char_any = $mol_regexp.from(/./gsu);
        static begin = $mol_regexp.from(/^/gsu);
        static end = $mol_regexp.from(/$/gsu);
        static or = $mol_regexp.from(/|/gsu);
        static line_end = $mol_regexp.from({
            win_end: [['\r'], '\n'],
            mac_end: '\r',
        });
    }
    $.$mol_regexp = $mol_regexp;
})($ || ($ = {}));
//mol/regexp/regexp.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/dimmer/dimmer.view.css", "[mol_dimmer] {\n\tdisplay: block;\n\tmax-width: 100%;\n}\n\n[mol_dimmer_low] {\n\tdisplay: inline;\n\topacity: 0.8;\n}\n\n[mol_dimmer_high] {\n\tdisplay: inline;\n\tcolor: var(--mol_theme_focus);\n\ttext-shadow: 0 0;\n}\n");
})($ || ($ = {}));
//mol/dimmer/-css/dimmer.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_dimmer extends $.$mol_dimmer {
            parts() {
                const needle = this.needle();
                if (needle.length < 2)
                    return [this.haystack()];
                let chunks = [];
                let strings = this.strings();
                for (let index = 0; index < strings.length; index++) {
                    if (strings[index] === '')
                        continue;
                    chunks.push((index % 2) ? this.High(index) : this.Low(index));
                }
                return chunks;
            }
            strings() {
                const options = this.needle().split(/\s+/g).filter(Boolean);
                if (!options.length)
                    return [this.haystack()];
                const variants = { ...options };
                const regexp = $mol_regexp.from({ needle: variants }, { ignoreCase: true });
                return this.haystack().split(regexp);
            }
            string(index) {
                return this.strings()[index];
            }
            *view_find(check, path = []) {
                if (check(this, this.haystack())) {
                    yield [...path, this];
                }
            }
        }
        __decorate([
            $mol_mem
        ], $mol_dimmer.prototype, "strings", null);
        $$.$mol_dimmer = $mol_dimmer;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/dimmer/dimmer.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_search extends $mol_pop {
        query(val) {
            if (val !== undefined)
                return val;
            return "";
        }
        suggests() {
            return [];
        }
        plugins() {
            return [
                ...super.plugins(),
                this.Hotkey(),
                this.Nav()
            ];
        }
        showed(val) {
            return this.suggests_showed(val);
        }
        align_hor() {
            return "right";
        }
        Anchor() {
            const obj = new this.$.$mol_view();
            obj.sub = () => this.anchor_content();
            return obj;
        }
        bubble_content() {
            return [
                this.Menu()
            ];
        }
        Suggest(id) {
            const obj = new this.$.$mol_button_minor();
            obj.click = (event) => this.suggest_select(id, event);
            obj.sub = () => this.suggest_content(id);
            return obj;
        }
        clear(val) {
            if (val !== undefined)
                return val;
            return null;
        }
        Hotkey() {
            const obj = new this.$.$mol_hotkey();
            obj.key = () => ({
                escape: (val) => this.clear(val)
            });
            return obj;
        }
        nav_components() {
            return [];
        }
        nav_focused(component) {
            if (component !== undefined)
                return component;
            return null;
        }
        Nav() {
            const obj = new this.$.$mol_nav();
            obj.keys_y = () => this.nav_components();
            obj.current_y = (component) => this.nav_focused(component);
            return obj;
        }
        suggests_showed(val) {
            if (val !== undefined)
                return val;
            return false;
        }
        hint() {
            return this.$.$mol_locale.text('$mol_search_hint');
        }
        submit(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        enabled() {
            return true;
        }
        bring() {
            return this.Query().bring();
        }
        Query() {
            const obj = new this.$.$mol_string();
            obj.value = (val) => this.query(val);
            obj.hint = () => this.hint();
            obj.submit = (event) => this.submit(event);
            obj.enabled = () => this.enabled();
            return obj;
        }
        Clear_icon() {
            const obj = new this.$.$mol_icon_cross();
            return obj;
        }
        Clear() {
            const obj = new this.$.$mol_button_minor();
            obj.hint = () => this.$.$mol_locale.text('$mol_search_Clear_hint');
            obj.click = (event) => this.clear(event);
            obj.sub = () => [
                this.Clear_icon()
            ];
            return obj;
        }
        anchor_content() {
            return [
                this.Query(),
                this.Clear()
            ];
        }
        menu_items() {
            return [];
        }
        Menu() {
            const obj = new this.$.$mol_list();
            obj.rows = () => this.menu_items();
            return obj;
        }
        suggest_select(id, event) {
            if (event !== undefined)
                return event;
            return null;
        }
        suggest_label(id) {
            return "";
        }
        Suggest_label(id) {
            const obj = new this.$.$mol_dimmer();
            obj.haystack = () => this.suggest_label(id);
            obj.needle = () => this.query();
            return obj;
        }
        suggest_content(id) {
            return [
                this.Suggest_label(id)
            ];
        }
    }
    __decorate([
        $mol_mem
    ], $mol_search.prototype, "query", null);
    __decorate([
        $mol_mem
    ], $mol_search.prototype, "Anchor", null);
    __decorate([
        $mol_mem_key
    ], $mol_search.prototype, "Suggest", null);
    __decorate([
        $mol_mem
    ], $mol_search.prototype, "clear", null);
    __decorate([
        $mol_mem
    ], $mol_search.prototype, "Hotkey", null);
    __decorate([
        $mol_mem
    ], $mol_search.prototype, "nav_focused", null);
    __decorate([
        $mol_mem
    ], $mol_search.prototype, "Nav", null);
    __decorate([
        $mol_mem
    ], $mol_search.prototype, "suggests_showed", null);
    __decorate([
        $mol_mem
    ], $mol_search.prototype, "submit", null);
    __decorate([
        $mol_mem
    ], $mol_search.prototype, "Query", null);
    __decorate([
        $mol_mem
    ], $mol_search.prototype, "Clear_icon", null);
    __decorate([
        $mol_mem
    ], $mol_search.prototype, "Clear", null);
    __decorate([
        $mol_mem
    ], $mol_search.prototype, "Menu", null);
    __decorate([
        $mol_mem_key
    ], $mol_search.prototype, "suggest_select", null);
    __decorate([
        $mol_mem_key
    ], $mol_search.prototype, "Suggest_label", null);
    $.$mol_search = $mol_search;
})($ || ($ = {}));
//mol/search/-view.tree/search.view.tree.ts
;
"use strict";
var $;
(function ($) {
    function $mol_fiber_defer(calculate) {
        const host = {};
        const fiber = new $mol_wire_task(calculate.name, calculate, host, []);
        fiber.plan();
        return fiber;
    }
    $.$mol_fiber_defer = $mol_fiber_defer;
    function $mol_fiber_root(calculate) {
        const wrapper = function (...args) {
            const fiber = new $mol_wire_task(this + '.' + calculate.name, calculate, this, args);
            return fiber.async();
        };
        wrapper[Symbol.toStringTag] = calculate.name;
        return wrapper;
    }
    $.$mol_fiber_root = $mol_fiber_root;
    function $mol_fiber_sync(request) {
        throw new Error('Use $mol_wire_sync instead');
    }
    $.$mol_fiber_sync = $mol_fiber_sync;
    async function $mol_fiber_warp() {
        $mol_wire_fiber.sync();
    }
    $.$mol_fiber_warp = $mol_fiber_warp;
    class $mol_fiber_solid extends $mol_wrapper {
        static func(task) {
            return task;
        }
    }
    $.$mol_fiber_solid = $mol_fiber_solid;
    class $mol_fiber {
        static method = $mol_action;
    }
    $.$mol_fiber = $mol_fiber;
})($ || ($ = {}));
//mol/fiber/fiber.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/search/search.view.css", "[mol_search] {\n\talign-self: flex-start;\n\tflex: auto;\n}\n\n[mol_search_anchor] {\n\tflex: 1 1 auto;\n}\n\n[mol_search_query] {\n\tflex-grow: 1;\n}\n\n[mol_search_menu] {\n\tmin-height: .75rem;\n\tdisplay: flex;\n}\n\n[mol_search_suggest] {\n\ttext-align: left;\n}\n\n[mol_search_suggest_label_high] {\n\tcolor: var(--mol_theme_shade);\n\ttext-shadow: none;\n}\n");
})($ || ($ = {}));
//mol/search/-css/search.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_search extends $.$mol_search {
            anchor_content() {
                return [
                    this.Query(),
                    ...this.query() ? [this.Clear()] : [],
                ];
            }
            suggests_showed(next = true) {
                this.query();
                if (!this.focused())
                    return false;
                return next;
            }
            suggest_selected(next) {
                if (next === undefined)
                    return;
                this.query(next);
                $mol_fiber_defer(() => {
                    this.Query().focused(true);
                });
            }
            nav_components() {
                return [
                    this.Query(),
                    ...this.menu_items(),
                ];
            }
            nav_focused(component) {
                if (!this.focused())
                    return null;
                if (component == null) {
                    for (let comp of this.nav_components()) {
                        if (comp && comp.focused())
                            return comp;
                    }
                    return null;
                }
                if (this.suggests_showed()) {
                    this.ensure_visible(component, "center");
                    component.focused(true);
                }
                return component;
            }
            suggest_label(key) {
                return key;
            }
            menu_items() {
                return this.suggests().map((suggest) => this.Suggest(suggest));
            }
            suggest_select(id, event) {
                this.query(id);
                this.Query().selection([id.length, id.length]);
                this.Query().focused(true);
            }
            clear(event) {
                this.query('');
            }
        }
        __decorate([
            $mol_mem
        ], $mol_search.prototype, "anchor_content", null);
        __decorate([
            $mol_mem
        ], $mol_search.prototype, "suggests_showed", null);
        __decorate([
            $mol_mem
        ], $mol_search.prototype, "nav_focused", null);
        __decorate([
            $mol_mem
        ], $mol_search.prototype, "menu_items", null);
        $$.$mol_search = $mol_search;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/search/search.view.ts
;
"use strict";
var $;
(function ($) {
    class $mpk_tss_pereferial_page extends $mol_page {
        unit_current_id(v) {
            if (v !== undefined)
                return v;
            return "";
        }
        sub() {
            return [
                this.Head(),
                this.Filter_value(),
                this.Body()
            ];
        }
        filter_hint() {
            return this.$.$mol_locale.text('$mpk_tss_pereferial_page_filter_hint');
        }
        filter_value(val) {
            if (val !== undefined)
                return val;
            return "";
        }
        Filter_value() {
            const obj = new this.$.$mol_search();
            obj.hint = () => this.filter_hint();
            obj.query = (val) => this.filter_value(val);
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mpk_tss_pereferial_page.prototype, "unit_current_id", null);
    __decorate([
        $mol_mem
    ], $mpk_tss_pereferial_page.prototype, "filter_value", null);
    __decorate([
        $mol_mem
    ], $mpk_tss_pereferial_page.prototype, "Filter_value", null);
    $.$mpk_tss_pereferial_page = $mpk_tss_pereferial_page;
})($ || ($ = {}));
//mpk/tss/pereferial/page/-view.tree/page.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mpk/tss/pereferial/page/page.css", "[mpk_tss_pereferial_page_body] {\n\toverflow-y: scroll;\n}\n\n[mpk_tss_pereferial_page_filter_value] {\n\talign-self: stretch;\n}\n");
})($ || ($ = {}));
//mpk/tss/pereferial/page/-css/page.css.ts
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
//mpk/tss/pereferial/page/page.view.ts
;
"use strict";
var $;
(function ($) {
    class $mpk_tss_pereferial_list extends $mol_view {
        title() {
            return this.$.$mol_locale.text('$mpk_tss_pereferial_list_title');
        }
        pages() {
            return [
                this.Main(),
                this.Unit_current()
            ];
        }
        Unit_details(id) {
            const obj = new this.$.$mpk_tss_pereferial_details();
            obj.body_scroll_top = (e) => this.details_body_scroll_top(e);
            obj.unit = () => this.unit(id);
            return obj;
        }
        Unit_link(id) {
            const obj = new this.$.$mpk_tss_pereferial_link();
            obj.unit = () => this.unit(id);
            return obj;
        }
        body_scroll_top(e) {
            if (e !== undefined)
                return e;
            return null;
        }
        tools() {
            return [];
        }
        unit_current_id(v) {
            if (v !== undefined)
                return v;
            return "";
        }
        filter_value(val) {
            if (val !== undefined)
                return val;
            return "";
        }
        unit_links() {
            return [];
        }
        List() {
            const obj = new this.$.$mol_list();
            obj.rows = () => this.unit_links();
            return obj;
        }
        Main() {
            const obj = new this.$.$mpk_tss_pereferial_page();
            obj.minimal_width = () => 200;
            obj.body_scroll_top = (e) => this.body_scroll_top(e);
            obj.tools = () => this.tools();
            obj.title = () => this.title();
            obj.unit_current_id = (v) => this.unit_current_id(v);
            obj.filter_value = (val) => this.filter_value(val);
            obj.body = () => [
                this.List()
            ];
            return obj;
        }
        Unit_current() {
            return null;
        }
        details_body_scroll_top(e) {
            if (e !== undefined)
                return e;
            return null;
        }
        unit(id) {
            return null;
        }
    }
    __decorate([
        $mol_mem_key
    ], $mpk_tss_pereferial_list.prototype, "Unit_details", null);
    __decorate([
        $mol_mem_key
    ], $mpk_tss_pereferial_list.prototype, "Unit_link", null);
    __decorate([
        $mol_mem
    ], $mpk_tss_pereferial_list.prototype, "body_scroll_top", null);
    __decorate([
        $mol_mem
    ], $mpk_tss_pereferial_list.prototype, "unit_current_id", null);
    __decorate([
        $mol_mem
    ], $mpk_tss_pereferial_list.prototype, "filter_value", null);
    __decorate([
        $mol_mem
    ], $mpk_tss_pereferial_list.prototype, "List", null);
    __decorate([
        $mol_mem
    ], $mpk_tss_pereferial_list.prototype, "Main", null);
    __decorate([
        $mol_mem
    ], $mpk_tss_pereferial_list.prototype, "details_body_scroll_top", null);
    $.$mpk_tss_pereferial_list = $mpk_tss_pereferial_list;
})($ || ($ = {}));
//mpk/tss/pereferial/list/-view.tree/list.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mpk/tss/pereferial/list/list.css", "[mpk_tss_pereferial_list_main] {\n\tflex: 1 1 20rem;\n}\n");
})($ || ($ = {}));
//mpk/tss/pereferial/list/-css/list.css.ts
;
"use strict";
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
            details_body_scroll_top(event) {
                this.Main().focused(true);
            }
        }
        __decorate([
            $mol_mem
        ], $mpk_tss_pereferial_list.prototype, "domain", null);
        __decorate([
            $mol_mem
        ], $mpk_tss_pereferial_list.prototype, "unit_links", null);
        __decorate([
            $mol_mem
        ], $mpk_tss_pereferial_list.prototype, "filter_value", null);
        $$.$mpk_tss_pereferial_list = $mpk_tss_pereferial_list;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mpk/tss/pereferial/list/list.view.ts
;
"use strict";
var $;
(function ($) {
    class $mpk_tss_sensors extends $mol_page {
        title() {
            return this.$.$mol_locale.text('$mpk_tss_sensors_title');
        }
        body() {
            return [
                this.Content()
            ];
        }
        Content() {
            const obj = new this.$.$mol_filler();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mpk_tss_sensors.prototype, "Content", null);
    $.$mpk_tss_sensors = $mpk_tss_sensors;
})($ || ($ = {}));
//mpk/tss/sensors/-view.tree/sensors.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mpk_tss_reports_resolution extends $mol_view {
        attr() {
            return {
                ...super.attr(),
                mpk_tss_reports_resolution_type: this.status()
            };
        }
        statuses() {
            return {
                success: this.success(),
                warning: this.warning()
            };
        }
        icons() {
            return {
                success: this.Success(),
                warning: this.Warning()
            };
        }
        sub() {
            return [
                this.Text()
            ];
        }
        status() {
            return "";
        }
        success() {
            return this.$.$mol_locale.text('$mpk_tss_reports_resolution_success');
        }
        warning() {
            return this.$.$mol_locale.text('$mpk_tss_reports_resolution_warning');
        }
        Success() {
            const obj = new this.$.$mpk_tss_icon_circle_outline();
            return obj;
        }
        Warning() {
            const obj = new this.$.$mpk_tss_icon_round_warning();
            return obj;
        }
        status_text() {
            return "";
        }
        Text() {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.status_text()
            ];
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mpk_tss_reports_resolution.prototype, "Success", null);
    __decorate([
        $mol_mem
    ], $mpk_tss_reports_resolution.prototype, "Warning", null);
    __decorate([
        $mol_mem
    ], $mpk_tss_reports_resolution.prototype, "Text", null);
    $.$mpk_tss_reports_resolution = $mpk_tss_reports_resolution;
})($ || ($ = {}));
//mpk/tss/reports/resolution/-view.tree/resolution.view.tree.ts
;
"use strict";
var $;
(function ($) {
    const t = $mpk_tss_todo;
    class $mpk_tss_reports_domain_trains extends $mol_object {
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
        $mol_mem_key
    ], $mpk_tss_reports_domain_trains.prototype, "report", null);
    __decorate([
        $mol_mem
    ], $mpk_tss_reports_domain_trains.prototype, "filter_number", null);
    __decorate([
        $mol_mem
    ], $mpk_tss_reports_domain_trains.prototype, "filter_resolution", null);
    __decorate([
        $mol_mem
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
    class $mpk_tss_reports_domain_wheel extends $mol_object {
        id() { throw new t; }
        resolution() { throw new t; }
        violation() { throw new t; }
        forces() { throw new t; }
    }
    $.$mpk_tss_reports_domain_wheel = $mpk_tss_reports_domain_wheel;
    class $mpk_tss_reports_domain_axle extends $mol_object {
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
    class $mpk_tss_reports_domain_carriage extends $mol_object {
        id() { return this.carriage_number(); }
        train() { throw new t; }
        carriage_number() { throw new t; }
        place() { throw new t; }
        resolution() { throw new t; }
        violation() { throw new t; }
        load() { throw new t; }
        measured_speed() { throw new t; }
        total_weight() { throw new t; }
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
    class $mpk_tss_reports_domain_carriages extends $mol_object {
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
        $mol_mem_key
    ], $mpk_tss_reports_domain_carriages.prototype, "carriage", null);
    __decorate([
        $mol_mem
    ], $mpk_tss_reports_domain_carriages.prototype, "filter_number", null);
    __decorate([
        $mol_mem
    ], $mpk_tss_reports_domain_carriages.prototype, "filter_resolution", null);
    __decorate([
        $mol_mem
    ], $mpk_tss_reports_domain_carriages.prototype, "carriages", null);
    $.$mpk_tss_reports_domain_carriages = $mpk_tss_reports_domain_carriages;
    class $mpk_tss_reports_domain_report extends $mol_object {
        id() { throw new t; }
        train_number() { throw new t; }
        send_count() { throw new t; }
        delivery() { throw new t; }
        average_speed() { throw new t; }
        resolution() { throw new t; }
        started() { throw new t; }
        carriages(config) { throw new t; }
    }
    $.$mpk_tss_reports_domain_report = $mpk_tss_reports_domain_report;
})($ || ($ = {}));
//mpk/tss/reports/domain/domain.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mpk/tss/reports/resolution/resolution.css", "[mpk_tss_reports_resolution] {\n\tdisplay: inline-flex;\n\talign-items: baseline;\n}\n\n[mpk_tss_reports_resolution_text] {\n\tmargin-left: 0.1rem;\n\twhite-space: nowrap;\n\tdisplay: inline-flex;\n}\n\n[mpk_tss_reports_resolution_icon_place] {\n\tdisplay: inline-flex;\n\talign-self: center;\n\tmargin-top: -.2em;\n\t--mol_theme_control: hsl(46, 73%, 55%);\n}\n\n[mpk_tss_reports_resolution_icon_place] > [mol_icon] {\n\twidth: 1.3em;\n\theight: 1.3em;\n}\n");
})($ || ($ = {}));
//mpk/tss/reports/resolution/-css/resolution.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mpk_tss_reports_resolution extends $.$mpk_tss_reports_resolution {
            status() { throw new $mpk_tss_todo; }
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
//mpk/tss/reports/resolution/resolution.view.ts
;
"use strict";
var $;
(function ($) {
    class $mpk_tss_parameter_speed extends $mol_view {
        sub() {
            return [
                this.value(),
                this.spacer(),
                this.unit()
            ];
        }
        value() {
            return 0;
        }
        spacer() {
            return " ";
        }
        unit() {
            return this.$.$mol_locale.text('$mpk_tss_parameter_speed_unit');
        }
    }
    $.$mpk_tss_parameter_speed = $mpk_tss_parameter_speed;
})($ || ($ = {}));
//mpk/tss/parameter/speed/-view.tree/speed.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mpk_tss_reports_delivery extends $mol_view {
        attr() {
            return {
                ...super.attr(),
                mpk_tss_reports_delivery_type: this.status()
            };
        }
        statuses() {
            return {
                preparing: this.preparing(),
                sending: this.sending(),
                sent: this.sent(),
                error: this.error()
            };
        }
        icons() {
            return {
                preparing: this.Preparing(),
                sending: this.Sending(),
                sent: this.Sent(),
                error: this.Error()
            };
        }
        sub() {
            return [
                this.Icon(),
                this.Text()
            ];
        }
        status() {
            return null;
        }
        preparing() {
            return this.$.$mol_locale.text('$mpk_tss_reports_delivery_preparing');
        }
        sending() {
            return this.$.$mol_locale.text('$mpk_tss_reports_delivery_sending');
        }
        sent() {
            return this.$.$mol_locale.text('$mpk_tss_reports_delivery_sent');
        }
        error() {
            return this.$.$mol_locale.text('$mpk_tss_reports_delivery_error');
        }
        Preparing() {
            const obj = new this.$.$mpk_tss_icon_sync();
            return obj;
        }
        Sending() {
            const obj = new this.$.$mpk_tss_icon_sync();
            return obj;
        }
        Sent() {
            const obj = new this.$.$mpk_tss_icon_done();
            return obj;
        }
        Error() {
            const obj = new this.$.$mpk_tss_icon_clear();
            return obj;
        }
        Icon() {
            return null;
        }
        status_text() {
            return "";
        }
        Text() {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.status_text()
            ];
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mpk_tss_reports_delivery.prototype, "Preparing", null);
    __decorate([
        $mol_mem
    ], $mpk_tss_reports_delivery.prototype, "Sending", null);
    __decorate([
        $mol_mem
    ], $mpk_tss_reports_delivery.prototype, "Sent", null);
    __decorate([
        $mol_mem
    ], $mpk_tss_reports_delivery.prototype, "Error", null);
    __decorate([
        $mol_mem
    ], $mpk_tss_reports_delivery.prototype, "Text", null);
    $.$mpk_tss_reports_delivery = $mpk_tss_reports_delivery;
})($ || ($ = {}));
//mpk/tss/reports/delivery/-view.tree/delivery.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mpk/tss/reports/delivery/delivery.css", "[mpk_tss_reports_delivery_type=\"preparing\"] {\n\tcolor: rgb(151, 151, 1);\n}\n\n[mpk_tss_reports_delivery_type=\"error\"] {\n\tcolor: red;\n}\n\n[mpk_tss_reports_delivery_type=\"sending\"] {\n\tcolor: rgb(73, 118, 168);\n}\n\n[mpk_tss_reports_delivery_type=\"sent\"] {\n\tcolor: green;\n}\n\n[mpk_tss_reports_delivery] {\n\t/* display: inline-flex; */\n}\n\n[mpk_tss_reports_delivery_text] {\n\tmargin-left: 0.1rem;\n\twhite-space: nowrap;\n\tdisplay: inline-block;\n}\n");
})($ || ($ = {}));
//mpk/tss/reports/delivery/-css/delivery.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mpk_tss_reports_delivery extends $.$mpk_tss_reports_delivery {
            status() {
                return $mpk_tss_reports_domain_delivery.preparing;
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
//mpk/tss/reports/delivery/delivery.view.ts
;
"use strict";
var $;
(function ($) {
    class $mpk_tss_reports_train_link extends $mpk_tss_card {
        report() {
            return null;
        }
        arg() {
            return {
                report: this.report_id()
            };
        }
        copy_params() {
            return [
                "login",
                "page",
                "trains",
                "carriages",
                "train_warning",
                "carriage_warning"
            ];
        }
        status() {
            return this.resolution();
        }
        Status_text() {
            const obj = new this.$.$mpk_tss_reports_resolution();
            obj.status = () => this.resolution();
            return obj;
        }
        status_click(event) {
            return this.report_status_click(event);
        }
        items() {
            return [
                this.Id(),
                this.Started(),
                this.Average_speed(),
                this.Delivery(),
                this.Train_number(),
                this.Description()
            ];
        }
        report_id() {
            return "";
        }
        resolution() {
            return null;
        }
        report_status_click(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        id_title() {
            return this.$.$mol_locale.text('$mpk_tss_reports_train_link_id_title');
        }
        Id() {
            const obj = new this.$.$mol_labeler();
            obj.title = () => this.id_title();
            obj.content = () => [
                this.report_id()
            ];
            return obj;
        }
        started_title() {
            return this.$.$mol_locale.text('$mpk_tss_reports_train_link_started_title');
        }
        started() {
            return "";
        }
        Started() {
            const obj = new this.$.$mol_labeler();
            obj.title = () => this.started_title();
            obj.content = () => [
                this.started()
            ];
            return obj;
        }
        average_speed_title() {
            return this.$.$mol_locale.text('$mpk_tss_reports_train_link_average_speed_title');
        }
        average_speed() {
            return 0;
        }
        Average_speed_formatted() {
            const obj = new this.$.$mpk_tss_parameter_speed();
            obj.value = () => this.average_speed();
            return obj;
        }
        Average_speed() {
            const obj = new this.$.$mol_labeler();
            obj.title = () => this.average_speed_title();
            obj.content = () => [
                this.Average_speed_formatted()
            ];
            return obj;
        }
        delivery_title() {
            return this.$.$mol_locale.text('$mpk_tss_reports_train_link_delivery_title');
        }
        delivery() {
            return null;
        }
        Delivery_value() {
            const obj = new this.$.$mpk_tss_reports_delivery();
            obj.status = () => this.delivery();
            return obj;
        }
        Delivery() {
            const obj = new this.$.$mol_labeler();
            obj.title = () => this.delivery_title();
            obj.Content = () => this.Delivery_value();
            return obj;
        }
        train_number_title() {
            return this.$.$mol_locale.text('$mpk_tss_reports_train_link_train_number_title');
        }
        train_number() {
            return "";
        }
        Train_number() {
            const obj = new this.$.$mol_labeler();
            obj.title = () => this.train_number_title();
            obj.content = () => [
                this.train_number()
            ];
            return obj;
        }
        description_title() {
            return this.$.$mol_locale.text('$mpk_tss_reports_train_link_description_title');
        }
        description() {
            return "";
        }
        Description() {
            const obj = new this.$.$mol_labeler();
            obj.title = () => this.description_title();
            obj.content = () => [
                this.description()
            ];
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mpk_tss_reports_train_link.prototype, "Status_text", null);
    __decorate([
        $mol_mem
    ], $mpk_tss_reports_train_link.prototype, "report_status_click", null);
    __decorate([
        $mol_mem
    ], $mpk_tss_reports_train_link.prototype, "Id", null);
    __decorate([
        $mol_mem
    ], $mpk_tss_reports_train_link.prototype, "Started", null);
    __decorate([
        $mol_mem
    ], $mpk_tss_reports_train_link.prototype, "Average_speed_formatted", null);
    __decorate([
        $mol_mem
    ], $mpk_tss_reports_train_link.prototype, "Average_speed", null);
    __decorate([
        $mol_mem
    ], $mpk_tss_reports_train_link.prototype, "Delivery_value", null);
    __decorate([
        $mol_mem
    ], $mpk_tss_reports_train_link.prototype, "Delivery", null);
    __decorate([
        $mol_mem
    ], $mpk_tss_reports_train_link.prototype, "Train_number", null);
    __decorate([
        $mol_mem
    ], $mpk_tss_reports_train_link.prototype, "Description", null);
    $.$mpk_tss_reports_train_link = $mpk_tss_reports_train_link;
})($ || ($ = {}));
//mpk/tss/reports/train/link/-view.tree/link.view.tree.ts
;
"use strict";
var $;
(function ($) {
    function $mol_array_lottery(list) {
        return list[Math.floor(Math.random() * list.length)];
    }
    $.$mol_array_lottery = $mol_array_lottery;
})($ || ($ = {}));
//mol/array/lottery/lottery.ts
;
"use strict";
var $;
(function ($) {
    class $mol_unit extends $mol_object {
        'valueOf()';
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
        [Symbol.toPrimitive](hint) {
            switch (hint) {
                case 'number': return this.valueOf();
                case 'string': return this.toString();
                default: return this.toString();
            }
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
//mol/unit/unit.ts
;
"use strict";
var $;
(function ($) {
    class $mol_unit_money extends $mol_unit {
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
//mol/unit/money/money.ts
;
"use strict";
var $;
(function ($) {
    function $mol_stub_strings(prefix = '', count = 10, length = 10) {
        if (prefix.length >= length)
            return [];
        let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split('');
        let strings = [];
        for (let i = 0; i < count; i++) {
            let text = prefix;
            for (let j = prefix.length; j < length; j++) {
                text += $mol_array_lottery(possible);
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
        return new $mol_unit_money_usd(value);
    }
    $.$mol_stub_price = $mol_stub_price;
    function $mol_stub_product_name() {
        var name = $mol_array_lottery([
            'Monitor 15"',
            'Monitor 17"',
            'Monitor 19"',
            'Graphics card',
            'Frame grabber card'
        ]);
        var port = $mol_array_lottery(['D-SUB', 'DVI', 'HDMI']);
        var resolution = $mol_array_lottery(['VGA', 'Full HD', '4K']);
        return [name, port, resolution].join(', ');
    }
    $.$mol_stub_product_name = $mol_stub_product_name;
    function $mol_stub_company_name_big() {
        var product = $mol_array_lottery(['Everything', 'Something', 'Anything', 'Nothing']);
        var type = $mol_array_lottery(['Company', 'Corporation', 'Holding']);
        return `A ${type} that makes ${product}`;
    }
    $.$mol_stub_company_name_big = $mol_stub_company_name_big;
    function $mol_stub_company_name_small() {
        return $mol_array_lottery(['ACME inc.', 'Dream Company', 'Just Company']);
    }
    $.$mol_stub_company_name_small = $mol_stub_company_name_small;
    function $mol_stub_company_name() {
        return $mol_array_lottery([$mol_stub_company_name_small, $mol_stub_company_name_big])();
    }
    $.$mol_stub_company_name = $mol_stub_company_name;
    function $mol_stub_person_name() {
        var first = $mol_array_lottery(['Ivan', 'Petr', 'Sidor', 'John', 'Sam']);
        var last = $mol_array_lottery(['Ivanov', 'Petrov', 'Sidorov', 'Johnson', 'Smith']);
        return `${first} ${last}`;
    }
    $.$mol_stub_person_name = $mol_stub_person_name;
    function $mol_stub_person_avatar(size = 80) {
        const id = Math.random().toString(16).slice(2);
        return `https://gravatar.com/avatar/${id}?d=robohash&s=${size}`;
    }
    $.$mol_stub_person_avatar = $mol_stub_person_avatar;
    function $mol_stub_city() {
        return $mol_array_lottery(['Moscow', 'London', 'Washington', 'Buenos Aires']);
    }
    $.$mol_stub_city = $mol_stub_city;
    function $mol_stub_time(maxShift = 60 * 24 * 365) {
        return new $mol_time_moment().shift({ minute: Math.round(Math.random() * maxShift) });
    }
    $.$mol_stub_time = $mol_stub_time;
    function $mol_stub_message(max_length) {
        const text = ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor. Praesent et diam eget libero egestas mattis sit amet vitae augue. Nam tincidunt congue enim, ut porta lorem lacinia consectetur. Donec ut libero sed arcu vehicula ultricies a non tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut gravida lorem. Ut turpis felis, pulvinar a semper sed, adipiscing id dolor. Pellentesque auctor nisi id magna consequat sagittis. Curabitur dapibus enim sit amet elit pharetra tincidunt feugiat nisl imperdiet. Ut convallis libero in urna ultrices accumsan. Donec sed odio eros. Donec viverra mi quis quam pulvinar at malesuada arcu rhoncus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In rutrum accumsan ultricies. Mauris vitae nisi at sem facilisis semper ac in est.';
        return text.substring(0, Math.ceil(Math.random() * max_length - 5) + 5);
    }
    $.$mol_stub_message = $mol_stub_message;
})($ || ($ = {}));
//mol/stub/stub.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mpk/tss/reports/train/link/link.css", "[mpk_tss_reports_train_link_id] {\n\tflex: 1 1 5rem;\n}\n\n[mpk_tss_reports_train_link_train_number] {\n\tflex: 1 1 7rem;\n}\n\n[mpk_tss_reports_train_link_started] {\n\tflex: 1 1 5rem;\n}\n[mpk_tss_reports_train_link_average_speed] {\n\tflex: 1 1 4rem;\n}\n[mpk_tss_reports_train_link_delivery] {\n    flex: 1 1 7rem;\n}\n");
})($ || ($ = {}));
//mpk/tss/reports/train/link/-css/link.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mpk_tss_reports_train_link extends $.$mpk_tss_reports_train_link {
            report() {
                throw new $mpk_tss_todo;
            }
            report_id() {
                return this.report().id();
            }
            train_number() {
                return this.report().train_number();
            }
            description() {
                return $mol_stub_message(1024);
            }
            resolution() {
                return this.report().resolution();
            }
            started() {
                const start = this.report().started();
                return start ? start.native.toLocaleDateString() : '';
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
//mpk/tss/reports/train/link/link.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_svg_group extends $mol_svg {
        dom_name() {
            return "g";
        }
    }
    $.$mol_svg_group = $mol_svg_group;
})($ || ($ = {}));
//mol/svg/group/-view.tree/group.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_svg_title extends $mol_svg {
        dom_name() {
            return "title";
        }
        sub() {
            return [
                this.title()
            ];
        }
    }
    $.$mol_svg_title = $mol_svg_title;
})($ || ($ = {}));
//mol/svg/title/-view.tree/title.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_plot_graph extends $mol_svg_group {
        series_x() {
            return [];
        }
        series_y() {
            return [];
        }
        attr() {
            return {
                ...super.attr(),
                mol_plot_graph_type: this.type()
            };
        }
        style() {
            return {
                ...super.style(),
                color: this.color()
            };
        }
        viewport() {
            const obj = new this.$.$mol_vector_2d(this.viewport_x(), this.viewport_y());
            return obj;
        }
        shift() {
            return [
                0,
                0
            ];
        }
        scale() {
            return [
                1,
                1
            ];
        }
        cursor_position() {
            const obj = new this.$.$mol_vector_2d(NaN, NaN);
            return obj;
        }
        dimensions_pane() {
            const obj = new this.$.$mol_vector_2d(this.dimensions_pane_x(), this.dimensions_pane_y());
            return obj;
        }
        dimensions() {
            const obj = new this.$.$mol_vector_2d(this.dimensions_x(), this.dimensions_y());
            return obj;
        }
        size_real() {
            const obj = new this.$.$mol_vector_2d(0, 0);
            return obj;
        }
        gap() {
            const obj = new this.$.$mol_vector_2d(this.gap_x(), this.gap_y());
            return obj;
        }
        repos_x(id) {
            return 0;
        }
        repos_y(id) {
            return 0;
        }
        indexes() {
            return [];
        }
        points() {
            return [];
        }
        front() {
            return [];
        }
        back() {
            return [];
        }
        Hint() {
            const obj = new this.$.$mol_svg_title();
            obj.title = () => this.hint();
            return obj;
        }
        hue() {
            return +NaN;
        }
        Sample() {
            return null;
        }
        type() {
            return "solid";
        }
        color() {
            return "";
        }
        viewport_x() {
            const obj = new this.$.$mol_vector_range(Infinity, -Infinity);
            return obj;
        }
        viewport_y() {
            const obj = new this.$.$mol_vector_range(Infinity, -Infinity);
            return obj;
        }
        dimensions_pane_x() {
            const obj = new this.$.$mol_vector_range(Infinity, -Infinity);
            return obj;
        }
        dimensions_pane_y() {
            const obj = new this.$.$mol_vector_range(Infinity, -Infinity);
            return obj;
        }
        dimensions_x() {
            const obj = new this.$.$mol_vector_range(Infinity, -Infinity);
            return obj;
        }
        dimensions_y() {
            const obj = new this.$.$mol_vector_range(Infinity, -Infinity);
            return obj;
        }
        gap_x() {
            const obj = new this.$.$mol_vector_range(0, 0);
            return obj;
        }
        gap_y() {
            const obj = new this.$.$mol_vector_range(0, 0);
            return obj;
        }
        title() {
            return "";
        }
        hint() {
            return this.title();
        }
    }
    __decorate([
        $mol_mem
    ], $mol_plot_graph.prototype, "viewport", null);
    __decorate([
        $mol_mem
    ], $mol_plot_graph.prototype, "cursor_position", null);
    __decorate([
        $mol_mem
    ], $mol_plot_graph.prototype, "dimensions_pane", null);
    __decorate([
        $mol_mem
    ], $mol_plot_graph.prototype, "dimensions", null);
    __decorate([
        $mol_mem
    ], $mol_plot_graph.prototype, "size_real", null);
    __decorate([
        $mol_mem
    ], $mol_plot_graph.prototype, "gap", null);
    __decorate([
        $mol_mem
    ], $mol_plot_graph.prototype, "Hint", null);
    __decorate([
        $mol_mem
    ], $mol_plot_graph.prototype, "viewport_x", null);
    __decorate([
        $mol_mem
    ], $mol_plot_graph.prototype, "viewport_y", null);
    __decorate([
        $mol_mem
    ], $mol_plot_graph.prototype, "dimensions_pane_x", null);
    __decorate([
        $mol_mem
    ], $mol_plot_graph.prototype, "dimensions_pane_y", null);
    __decorate([
        $mol_mem
    ], $mol_plot_graph.prototype, "dimensions_x", null);
    __decorate([
        $mol_mem
    ], $mol_plot_graph.prototype, "dimensions_y", null);
    __decorate([
        $mol_mem
    ], $mol_plot_graph.prototype, "gap_x", null);
    __decorate([
        $mol_mem
    ], $mol_plot_graph.prototype, "gap_y", null);
    $.$mol_plot_graph = $mol_plot_graph;
    class $mol_plot_graph_sample extends $mol_view {
        attr() {
            return {
                ...super.attr(),
                mol_plot_graph_type: this.type()
            };
        }
        style() {
            return {
                ...super.style(),
                color: this.color()
            };
        }
        type() {
            return "solid";
        }
        color() {
            return "black";
        }
    }
    $.$mol_plot_graph_sample = $mol_plot_graph_sample;
})($ || ($ = {}));
//mol/plot/graph/-view.tree/graph.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/plot/graph/graph.view.css", "[mol_plot_graph] {\n\tstroke: currentColor;\n}\n\n[mol_plot_graph_sample] {\n\tborder-width: 0;\n\tborder-style: solid;\n}\n\n[mol_plot_graph_type=\"dashed\"] {\n\tstroke-dasharray: 4 4;\n\tborder-style: dashed;\n}\n");
})($ || ($ = {}));
//mol/plot/graph/-css/graph.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_plot_graph extends $.$mol_plot_graph {
            viewport() {
                const size = this.size_real();
                return new this.$.$mol_vector_2d(new this.$.$mol_vector_range(0, size.x), new this.$.$mol_vector_range(0, size.y));
            }
            indexes() {
                return this.series_x().map((_, i) => i);
            }
            repos_x(val) {
                return val;
            }
            repos_y(val) {
                return val;
            }
            points() {
                const [shift_x, shift_y] = this.shift();
                const [scale_x, scale_y] = this.scale();
                const series_x = this.series_x();
                const series_y = this.series_y();
                return this.indexes().map(index => {
                    let point_x = Math.round(shift_x + this.repos_x(series_x[index]) * scale_x);
                    let point_y = Math.round(shift_y + this.repos_y(series_y[index]) * scale_y);
                    point_x = Math.max(Number.MIN_SAFE_INTEGER, Math.min(point_x, Number.MAX_SAFE_INTEGER));
                    point_y = Math.max(Number.MIN_SAFE_INTEGER, Math.min(point_y, Number.MAX_SAFE_INTEGER));
                    return [point_x, point_y];
                });
            }
            series_x() {
                return this.series_y().map((val, index) => index);
            }
            dimensions() {
                let next = new this.$.$mol_vector_2d($mol_vector_range_full.inversed, $mol_vector_range_full.inversed);
                const series_x = this.series_x();
                const series_y = this.series_y();
                for (let i = 0; i < series_x.length; i++) {
                    if (series_x[i] > next.x.max)
                        next.x.max = series_x[i];
                    if (series_x[i] < next.x.min)
                        next.x.min = series_x[i];
                    if (series_y[i] > next.y.max)
                        next.y.max = series_y[i];
                    if (series_y[i] < next.y.min)
                        next.y.min = series_y[i];
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
            $mol_mem
        ], $mol_plot_graph.prototype, "indexes", null);
        __decorate([
            $mol_mem
        ], $mol_plot_graph.prototype, "series_x", null);
        __decorate([
            $mol_mem
        ], $mol_plot_graph.prototype, "dimensions", null);
        $$.$mol_plot_graph = $mol_plot_graph;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/plot/graph/graph.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_chart_legend extends $mol_scroll {
        graphs() {
            return [];
        }
        graphs_front() {
            return [];
        }
        sub() {
            return this.graph_legends();
        }
        Graph_legend(id) {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.Graph_sample_box(id),
                this.Graph_title(id)
            ];
            return obj;
        }
        graph_legends() {
            return [];
        }
        Graph_sample(id) {
            return null;
        }
        Graph_sample_box(id) {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.Graph_sample(id)
            ];
            return obj;
        }
        graph_title(id) {
            return "";
        }
        Graph_title(id) {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.graph_title(id)
            ];
            return obj;
        }
    }
    __decorate([
        $mol_mem_key
    ], $mol_chart_legend.prototype, "Graph_legend", null);
    __decorate([
        $mol_mem_key
    ], $mol_chart_legend.prototype, "Graph_sample_box", null);
    __decorate([
        $mol_mem_key
    ], $mol_chart_legend.prototype, "Graph_title", null);
    $.$mol_chart_legend = $mol_chart_legend;
})($ || ($ = {}));
//mol/chart/legend/-view.tree/legend.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/chart/legend/legend.view.css", "[mol_chart_legend] {\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\tflex-direction: row;\n\tpadding: .5rem;\n\tmargin: .5rem;\n\tflex: 0 1 auto;\n}\n\n[mol_chart_legend_graph_legend] {\n\tdisplay: flex;\n\tjustify-content: flex-start;\n\tflex: 1 1 8rem;\n\tpadding: .5rem;\n}\n\n[mol_chart_legend_graph_title] {\n\tmargin: 0 .25rem;\n\tflex: 1 1 auto;\n}\n\n[mol_chart_legend_graph_sample_box] {\n\tposition: relative;\n\twidth: 1.5rem;\n\tflex: none;\n}\n");
})($ || ($ = {}));
//mol/chart/legend/-css/legend.view.css.ts
;
"use strict";
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
            $mol_mem
        ], $mol_chart_legend.prototype, "graphs_front", null);
        $$.$mol_chart_legend = $mol_chart_legend;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/chart/legend/legend.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_plot_pane extends $mol_svg_root {
        aspect() {
            return "none";
        }
        hue_base(val) {
            if (val !== undefined)
                return val;
            return +NaN;
        }
        hue_shift(val) {
            if (val !== undefined)
                return val;
            return 111;
        }
        gap_hor() {
            return 48;
        }
        gap_vert() {
            return 24;
        }
        gap_left() {
            return this.gap_hor();
        }
        gap_right() {
            return this.gap_hor();
        }
        gap_top() {
            return this.gap_vert();
        }
        gap_bottom() {
            return this.gap_vert();
        }
        gap() {
            const obj = new this.$.$mol_vector_2d(this.gap_x(), this.gap_y());
            return obj;
        }
        shift_limit() {
            const obj = new this.$.$mol_vector_2d(this.shift_limit_x(), this.shift_limit_y());
            return obj;
        }
        shift_default() {
            const obj = new this.$.$mol_vector_2d(0, 0);
            return obj;
        }
        shift(val) {
            if (val !== undefined)
                return val;
            const obj = new this.$.$mol_vector_2d(0, 0);
            return obj;
        }
        scale_limit() {
            const obj = new this.$.$mol_vector_2d(this.scale_limit_x(), this.scale_limit_y());
            return obj;
        }
        scale_default() {
            const obj = new this.$.$mol_vector_2d(0, 0);
            return obj;
        }
        scale(val) {
            if (val !== undefined)
                return val;
            const obj = new this.$.$mol_vector_2d(1, -1);
            return obj;
        }
        scale_x(val) {
            if (val !== undefined)
                return val;
            return 1;
        }
        scale_y(val) {
            if (val !== undefined)
                return val;
            return -1;
        }
        size() {
            const obj = new this.$.$mol_vector_2d(0, 0);
            return obj;
        }
        size_real() {
            const obj = new this.$.$mol_vector_2d(1, 1);
            return obj;
        }
        dimensions() {
            const obj = new this.$.$mol_vector_2d(this.dimensions_x(), this.dimensions_y());
            return obj;
        }
        dimensions_viewport() {
            const obj = new this.$.$mol_vector_2d(this.dimensions_viewport_x(), this.dimensions_viewport_y());
            return obj;
        }
        sub() {
            return this.graphs_sorted();
        }
        graphs_colored() {
            return this.graphs_visible();
        }
        plugins() {
            return [
                ...super.plugins(),
                this.Touch()
            ];
        }
        gap_x() {
            const obj = new this.$.$mol_vector_range(this.gap_left(), this.gap_right());
            return obj;
        }
        gap_y() {
            const obj = new this.$.$mol_vector_range(this.gap_bottom(), this.gap_top());
            return obj;
        }
        shift_limit_x() {
            const obj = new this.$.$mol_vector_range(0, 0);
            return obj;
        }
        shift_limit_y() {
            const obj = new this.$.$mol_vector_range(0, 0);
            return obj;
        }
        scale_limit_x() {
            const obj = new this.$.$mol_vector_range(0, Infinity);
            return obj;
        }
        scale_limit_y() {
            const obj = new this.$.$mol_vector_range(0, -Infinity);
            return obj;
        }
        dimensions_x() {
            const obj = new this.$.$mol_vector_range(Infinity, -Infinity);
            return obj;
        }
        dimensions_y() {
            const obj = new this.$.$mol_vector_range(Infinity, -Infinity);
            return obj;
        }
        dimensions_viewport_x() {
            const obj = new this.$.$mol_vector_range(Infinity, -Infinity);
            return obj;
        }
        dimensions_viewport_y() {
            const obj = new this.$.$mol_vector_range(Infinity, -Infinity);
            return obj;
        }
        graphs_sorted() {
            return [];
        }
        graphs() {
            return [];
        }
        graphs_positioned() {
            return this.graphs();
        }
        graphs_visible() {
            return this.graphs_positioned();
        }
        zoom(val) {
            if (val !== undefined)
                return val;
            return 1;
        }
        allow_draw() {
            return true;
        }
        allow_pan() {
            return true;
        }
        allow_zoom() {
            return true;
        }
        draw_start(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        draw(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        draw_end(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        cursor_position() {
            return this.Touch().pointer_center();
        }
        action_type() {
            return this.Touch().action_type();
        }
        action_point() {
            return this.Touch().action_point();
        }
        Touch() {
            const obj = new this.$.$mol_touch();
            obj.zoom = (val) => this.zoom(val);
            obj.pan = (val) => this.shift(val);
            obj.allow_draw = () => this.allow_draw();
            obj.allow_pan = () => this.allow_pan();
            obj.allow_zoom = () => this.allow_zoom();
            obj.draw_start = (event) => this.draw_start(event);
            obj.draw = (event) => this.draw(event);
            obj.draw_end = (event) => this.draw_end(event);
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_plot_pane.prototype, "hue_base", null);
    __decorate([
        $mol_mem
    ], $mol_plot_pane.prototype, "hue_shift", null);
    __decorate([
        $mol_mem
    ], $mol_plot_pane.prototype, "gap", null);
    __decorate([
        $mol_mem
    ], $mol_plot_pane.prototype, "shift_limit", null);
    __decorate([
        $mol_mem
    ], $mol_plot_pane.prototype, "shift_default", null);
    __decorate([
        $mol_mem
    ], $mol_plot_pane.prototype, "shift", null);
    __decorate([
        $mol_mem
    ], $mol_plot_pane.prototype, "scale_limit", null);
    __decorate([
        $mol_mem
    ], $mol_plot_pane.prototype, "scale_default", null);
    __decorate([
        $mol_mem
    ], $mol_plot_pane.prototype, "scale", null);
    __decorate([
        $mol_mem
    ], $mol_plot_pane.prototype, "scale_x", null);
    __decorate([
        $mol_mem
    ], $mol_plot_pane.prototype, "scale_y", null);
    __decorate([
        $mol_mem
    ], $mol_plot_pane.prototype, "size", null);
    __decorate([
        $mol_mem
    ], $mol_plot_pane.prototype, "size_real", null);
    __decorate([
        $mol_mem
    ], $mol_plot_pane.prototype, "dimensions", null);
    __decorate([
        $mol_mem
    ], $mol_plot_pane.prototype, "dimensions_viewport", null);
    __decorate([
        $mol_mem
    ], $mol_plot_pane.prototype, "gap_x", null);
    __decorate([
        $mol_mem
    ], $mol_plot_pane.prototype, "gap_y", null);
    __decorate([
        $mol_mem
    ], $mol_plot_pane.prototype, "shift_limit_x", null);
    __decorate([
        $mol_mem
    ], $mol_plot_pane.prototype, "shift_limit_y", null);
    __decorate([
        $mol_mem
    ], $mol_plot_pane.prototype, "scale_limit_x", null);
    __decorate([
        $mol_mem
    ], $mol_plot_pane.prototype, "scale_limit_y", null);
    __decorate([
        $mol_mem
    ], $mol_plot_pane.prototype, "dimensions_x", null);
    __decorate([
        $mol_mem
    ], $mol_plot_pane.prototype, "dimensions_y", null);
    __decorate([
        $mol_mem
    ], $mol_plot_pane.prototype, "dimensions_viewport_x", null);
    __decorate([
        $mol_mem
    ], $mol_plot_pane.prototype, "dimensions_viewport_y", null);
    __decorate([
        $mol_mem
    ], $mol_plot_pane.prototype, "zoom", null);
    __decorate([
        $mol_mem
    ], $mol_plot_pane.prototype, "draw_start", null);
    __decorate([
        $mol_mem
    ], $mol_plot_pane.prototype, "draw", null);
    __decorate([
        $mol_mem
    ], $mol_plot_pane.prototype, "draw_end", null);
    __decorate([
        $mol_mem
    ], $mol_plot_pane.prototype, "Touch", null);
    $.$mol_plot_pane = $mol_plot_pane;
})($ || ($ = {}));
//mol/plot/pane/-view.tree/pane.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/plot/pane/pane.view.css", "[mol_plot_pane] {\n\tcolor: var(--mol_theme_control);\n\tflex: 1 1 auto;\n\talign-self: stretch;\n\tstroke-width: 2px;\n\tuser-select: none;\n}\n");
})($ || ($ = {}));
//mol/plot/pane/-css/pane.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_plot_pane extends $.$mol_plot_pane {
            dimensions() {
                const graphs = this.graphs();
                let next = new this.$.$mol_vector_2d($mol_vector_range_full.inversed, $mol_vector_range_full.inversed);
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
                const graphs = this.graphs_visible();
                for (let index = 0; index < graphs.length; index++) {
                    graphs[index].hue = () => this.graph_hue(index);
                }
                return graphs;
            }
            size_real() {
                const rect = this.view_rect();
                if (!rect)
                    return new this.$.$mol_vector_2d(1, 1);
                return new this.$.$mol_vector_2d(rect.width, rect.height);
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
                return new this.$.$mol_vector_2d(new this.$.$mol_vector_range(left, right), new this.$.$mol_vector_range(top, bottom));
            }
            scale_default() {
                const limits = this.scale_limit();
                return new $mol_vector_2d(limits.x.min, limits.y.max);
            }
            scale(next) {
                if (next === undefined) {
                    if (!this.graph_touched)
                        return this.scale_default();
                    next = $mol_mem_cached(() => this.scale()) ?? this.scale_default();
                }
                this.graph_touched = true;
                return next.limited(this.scale_limit());
            }
            scale_x(next) {
                return this.scale(next === undefined
                    ? undefined
                    : new $mol_vector_2d(next, this.scale().y)).x;
            }
            scale_y(next) {
                return this.scale(next === undefined
                    ? undefined
                    : new $mol_vector_2d(this.scale().x, next)).y;
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
                return new $mol_vector_2d(limits.x.min, limits.y.min);
            }
            graph_touched = false;
            shift(next) {
                if (next === undefined) {
                    if (!this.graph_touched)
                        return this.shift_default();
                    next = $mol_mem_cached(() => this.shift()) ?? this.shift_default();
                }
                this.graph_touched = true;
                return next.limited(this.shift_limit());
            }
            reset(event) {
                this.graph_touched = false;
                this.scale(this.scale_default());
                this.shift(this.shift_default());
            }
            graphs_visible() {
                const viewport = this.dimensions_viewport();
                const size_real = this.size_real();
                const max_x = (viewport.x.max - viewport.x.min) / size_real.x;
                const max_y = (viewport.y.max - viewport.y.min) / size_real.y;
                return this.graphs_positioned().filter(graph => {
                    const dims = graph.dimensions();
                    if (dims.x.min > dims.x.max)
                        return true;
                    if (dims.y.min > dims.y.max)
                        return true;
                    const size_x = dims.x.max - dims.x.min;
                    const size_y = dims.y.max - dims.y.min;
                    if ((size_x || size_y) && size_x < max_x && size_y < max_y)
                        return false;
                    if (dims.x.min > viewport.x.max)
                        return false;
                    if (dims.x.max < viewport.x.min)
                        return false;
                    if (dims.y.min > viewport.y.max)
                        return false;
                    if (dims.y.max < viewport.y.min)
                        return false;
                    return true;
                });
            }
            graphs_positioned() {
                const graphs = this.graphs();
                for (let graph of graphs) {
                    graph.shift = () => this.shift();
                    graph.scale = () => this.scale();
                    graph.dimensions_pane = () => this.dimensions_viewport();
                    graph.viewport = () => this.viewport();
                    graph.size_real = () => this.size_real();
                    graph.cursor_position = () => this.cursor_position();
                    graph.gap = () => this.gap();
                }
                return graphs;
            }
            dimensions_viewport() {
                const shift = this.shift().multed0(-1);
                const scale = this.scale().powered0(-1);
                return this.viewport().map((range, i) => range.added0(shift[i]).multed0(scale[i]).sort((a, b) => a - b));
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
            $mol_mem
        ], $mol_plot_pane.prototype, "dimensions", null);
        __decorate([
            $mol_mem
        ], $mol_plot_pane.prototype, "size", null);
        __decorate([
            $mol_mem
        ], $mol_plot_pane.prototype, "graphs_colored", null);
        __decorate([
            $mol_mem
        ], $mol_plot_pane.prototype, "scale_limit", null);
        __decorate([
            $mol_mem
        ], $mol_plot_pane.prototype, "scale", null);
        __decorate([
            $mol_mem
        ], $mol_plot_pane.prototype, "shift_limit", null);
        __decorate([
            $mol_mem
        ], $mol_plot_pane.prototype, "shift_default", null);
        __decorate([
            $mol_mem
        ], $mol_plot_pane.prototype, "shift", null);
        __decorate([
            $mol_mem
        ], $mol_plot_pane.prototype, "graphs_visible", null);
        __decorate([
            $mol_mem
        ], $mol_plot_pane.prototype, "graphs_positioned", null);
        __decorate([
            $mol_mem
        ], $mol_plot_pane.prototype, "dimensions_viewport", null);
        __decorate([
            $mol_mem
        ], $mol_plot_pane.prototype, "viewport", null);
        __decorate([
            $mol_mem
        ], $mol_plot_pane.prototype, "graphs_sorted", null);
        $$.$mol_plot_pane = $mol_plot_pane;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/plot/pane/pane.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_chart extends $mol_view {
        gap_hor() {
            return 48;
        }
        gap_vert() {
            return 24;
        }
        gap_left() {
            return this.gap_hor();
        }
        gap_right() {
            return this.gap_hor();
        }
        gap_bottom() {
            return this.gap_vert();
        }
        gap_top() {
            return this.gap_vert();
        }
        graphs() {
            return [];
        }
        sub() {
            return [
                this.Legend(),
                this.Plot()
            ];
        }
        Legend() {
            const obj = new this.$.$mol_chart_legend();
            obj.graphs = () => this.graphs_colored();
            return obj;
        }
        hue_base() {
            return 140;
        }
        hue_shift() {
            return 111;
        }
        zoom(val) {
            return this.Plot().scale_x(val);
        }
        graphs_colored() {
            return this.Plot().graphs_colored();
        }
        Plot() {
            const obj = new this.$.$mol_plot_pane();
            obj.zoom = (val) => this.zoom(val);
            obj.gap_left = () => this.gap_left();
            obj.gap_right = () => this.gap_right();
            obj.gap_bottom = () => this.gap_bottom();
            obj.gap_top = () => this.gap_top();
            obj.graphs = () => this.graphs();
            obj.hue_base = () => this.hue_base();
            obj.hue_shift = () => this.hue_shift();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_chart.prototype, "Legend", null);
    __decorate([
        $mol_mem
    ], $mol_chart.prototype, "Plot", null);
    $.$mol_chart = $mol_chart;
})($ || ($ = {}));
//mol/chart/-view.tree/chart.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/chart/chart.view.css", "[mol_chart] {\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-self: stretch;\n\tflex: 1 1 auto;\n}\n\n[mol_chart_plot] {\n\tflex: 1 0 50%;\n\tmargin: .5rem;\n}\n");
})($ || ($ = {}));
//mol/chart/-css/chart.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_plot_dot extends $mol_plot_graph {
        points_max() {
            return +Infinity;
        }
        aspect() {
            return 1;
        }
        style() {
            return {
                ...super.style(),
                "stroke-width": this.diameter()
            };
        }
        sub() {
            return [
                this.Hint(),
                this.Curve()
            ];
        }
        Sample() {
            const obj = new this.$.$mol_plot_graph_sample();
            obj.color = () => this.color();
            return obj;
        }
        diameter() {
            return 8;
        }
        curve() {
            return "";
        }
        Curve() {
            const obj = new this.$.$mol_svg_path();
            obj.geometry = () => this.curve();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_plot_dot.prototype, "Sample", null);
    __decorate([
        $mol_mem
    ], $mol_plot_dot.prototype, "Curve", null);
    $.$mol_plot_dot = $mol_plot_dot;
})($ || ($ = {}));
//mol/plot/dot/-view.tree/dot.view.tree.ts
;
"use strict";
var $;
(function ($) {
    const mask = 0b11111_11111_11111;
    function $mol_coord_pack(high, low) {
        return (high << 17 >>> 2) | (low & mask);
    }
    $.$mol_coord_pack = $mol_coord_pack;
    function $mol_coord_high(pack) {
        return pack << 2 >> 17;
    }
    $.$mol_coord_high = $mol_coord_high;
    function $mol_coord_low(pack) {
        return (pack << 17) >> 17;
    }
    $.$mol_coord_low = $mol_coord_low;
})($ || ($ = {}));
//mol/coord/coord.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/plot/dot/dot.view.css", "[mol_plot_dot] {\n\tstroke-linecap: round;\n\tfill: none;\n}\n\n[mol_plot_dot_sample] {\n\twidth: .5rem;\n\theight: .5rem;\n\tborder-radius: 1rem;\n\tbackground: currentColor;\n\tposition: absolute;\n\ttop: .75em;\n\tleft: 50%;\n\ttransform: translate(-50%, -50%);\n}\n");
})($ || ($ = {}));
//mol/plot/dot/-css/dot.view.css.ts
;
"use strict";
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
                        const point_x = this.repos_x(series_x[i]);
                        const point_y = this.repos_y(series_y[i]);
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
                            const key = $mol_coord_pack(Math.round(point_x * scale_x / spacing) * spacing, Math.round(point_y * scale_y / spacing) * spacing);
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
                const diameter = this.diameter();
                const aspect = this.aspect();
                const shift_y = Math.max(0, Math.floor((aspect - 1) * diameter / 2));
                const shift_x = Math.max(0, Math.floor((1 / aspect - 1) * diameter / 2));
                const size_y = Math.max(0, Math.ceil((aspect - 1) * diameter));
                const size_x = Math.max(0, Math.ceil((1 / aspect - 1) * diameter));
                return points.map(point => `M ${point[0] - shift_x} ${point[1] - shift_y} l ${size_x} ${size_y}`).join(' ');
            }
        }
        __decorate([
            $mol_mem
        ], $mol_plot_dot.prototype, "filled", null);
        __decorate([
            $mol_mem
        ], $mol_plot_dot.prototype, "indexes", null);
        $$.$mol_plot_dot = $mol_plot_dot;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/plot/dot/dot.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_svg_text extends $mol_svg {
        dom_name() {
            return "text";
        }
        pos() {
            return [];
        }
        attr() {
            return {
                ...super.attr(),
                x: this.pos_x(),
                y: this.pos_y(),
                "text-anchor": this.align()
            };
        }
        sub() {
            return [
                this.text()
            ];
        }
        pos_x() {
            return "";
        }
        pos_y() {
            return "";
        }
        align() {
            return "middle";
        }
        text() {
            return "";
        }
    }
    $.$mol_svg_text = $mol_svg_text;
})($ || ($ = {}));
//mol/svg/text/-view.tree/text.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/svg/text/text.view.css", "[mol_svg_text] {\n\tfill: currentColor;\n\tstroke: none;\n}\n");
})($ || ($ = {}));
//mol/svg/text/-css/text.view.css.ts
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
//mol/svg/text/text.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_svg_rect extends $mol_svg {
        dom_name() {
            return "rect";
        }
        pos() {
            return [];
        }
        attr() {
            return {
                ...super.attr(),
                width: this.width(),
                height: this.height(),
                x: this.pos_x(),
                y: this.pos_y()
            };
        }
        width() {
            return "0";
        }
        height() {
            return "0";
        }
        pos_x() {
            return "";
        }
        pos_y() {
            return "";
        }
    }
    $.$mol_svg_rect = $mol_svg_rect;
})($ || ($ = {}));
//mol/svg/rect/-view.tree/rect.view.tree.ts
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
//mol/svg/rect/rect.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_svg_text_box extends $mol_svg_group {
        font_size() {
            return 16;
        }
        width() {
            return 0;
        }
        sub() {
            return [
                this.Back(),
                this.Text()
            ];
        }
        box_width() {
            return "0.5rem";
        }
        box_height() {
            return "1rem";
        }
        box_pos_x() {
            return this.pos_x();
        }
        box_pos_y() {
            return "0";
        }
        Back() {
            const obj = new this.$.$mol_svg_rect();
            obj.width = () => this.box_width();
            obj.height = () => this.box_height();
            obj.pos = () => [
                this.box_pos_x(),
                this.box_pos_y()
            ];
            return obj;
        }
        pos_x() {
            return "0";
        }
        pos_y() {
            return "100%";
        }
        align() {
            return "start";
        }
        text() {
            return "";
        }
        Text() {
            const obj = new this.$.$mol_svg_text();
            obj.pos = () => [
                this.pos_x(),
                this.pos_y()
            ];
            obj.align = () => this.align();
            obj.sub = () => [
                this.text()
            ];
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_svg_text_box.prototype, "Back", null);
    __decorate([
        $mol_mem
    ], $mol_svg_text_box.prototype, "Text", null);
    $.$mol_svg_text_box = $mol_svg_text_box;
})($ || ($ = {}));
//mol/svg/text/box/-view.tree/box.view.tree.ts
;
"use strict";
var $;
(function ($) {
    let canvas;
    function $mol_font_canvas(next = canvas) {
        if (!next)
            next = $mol_dom_context.document.createElement('canvas').getContext('2d');
        return canvas = next;
    }
    $.$mol_font_canvas = $mol_font_canvas;
})($ || ($ = {}));
//mol/font/canvas/canvas.ts
;
"use strict";
var $;
(function ($) {
    function $mol_font_measure(font, text) {
        const canvas = $mol_font_canvas();
        canvas.font = font;
        return canvas.measureText(text).width;
    }
    $.$mol_font_measure = $mol_font_measure;
})($ || ($ = {}));
//mol/font/measure/measure.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/svg/text/box/box.view.css", "[mol_svg_text_box_back] {\n\tstroke: none;\n\tfill: var(--mol_theme_back);\n}\n");
})($ || ($ = {}));
//mol/svg/text/box/-css/box.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_svg_text_box extends $.$mol_svg_text_box {
            box_width() {
                return `${this.width()}px`;
            }
            width() {
                return $mol_font_measure(this.font_size() + 'px ' + this.font_family(), this.text());
            }
            box_pos_x() {
                const align = this.align();
                if (align === 'end')
                    return `calc(${this.pos_x()} - ${this.width()})`;
                if (align === 'middle')
                    return `calc(${this.pos_x()} - ${Math.round(this.width() / 2)})`;
                return this.pos_x();
            }
            box_pos_y() {
                return `calc(${this.pos_y()} - ${this.font_size() - 2})`;
            }
        }
        __decorate([
            $mol_mem
        ], $mol_svg_text_box.prototype, "width", null);
        $$.$mol_svg_text_box = $mol_svg_text_box;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/svg/text/box/box.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_plot_ruler extends $mol_plot_graph {
        step() {
            return 0;
        }
        scale_axis() {
            return 1;
        }
        scale_step() {
            return 1;
        }
        shift_axis() {
            return 1;
        }
        dimensions_axis() {
            const obj = new this.$.$mol_vector_range(Infinity, -Infinity);
            return obj;
        }
        viewport_axis() {
            const obj = new this.$.$mol_vector_range(Infinity, -Infinity);
            return obj;
        }
        axis_points() {
            return [];
        }
        normalize(val) {
            if (val !== undefined)
                return val;
            return 0;
        }
        precision() {
            return 1;
        }
        sub() {
            return [
                this.Background(),
                this.Curve(),
                this.labels_formatted(),
                this.Title()
            ];
        }
        Label(id) {
            const obj = new this.$.$mol_svg_text();
            obj.pos = () => this.label_pos(id);
            obj.text = () => this.label_text(id);
            obj.align = () => this.label_align();
            return obj;
        }
        background_x() {
            return "0";
        }
        background_y() {
            return "0";
        }
        background_width() {
            return "100%";
        }
        background_height() {
            return "14";
        }
        Background() {
            const obj = new this.$.$mol_svg_rect();
            obj.pos_x = () => this.background_x();
            obj.pos_y = () => this.background_y();
            obj.width = () => this.background_width();
            obj.height = () => this.background_height();
            return obj;
        }
        curve() {
            return "";
        }
        Curve() {
            const obj = new this.$.$mol_svg_path();
            obj.geometry = () => this.curve();
            return obj;
        }
        labels_formatted() {
            return [];
        }
        title_pos_x() {
            return "0";
        }
        title_pos_y() {
            return "100%";
        }
        title_align() {
            return "start";
        }
        Title() {
            const obj = new this.$.$mol_svg_text_box();
            obj.pos_x = () => this.title_pos_x();
            obj.pos_y = () => this.title_pos_y();
            obj.align = () => this.title_align();
            obj.text = () => this.title();
            return obj;
        }
        label_pos_x(id) {
            return "";
        }
        label_pos_y(id) {
            return "";
        }
        label_pos(id) {
            return [
                this.label_pos_x(id),
                this.label_pos_y(id)
            ];
        }
        label_text(id) {
            return "";
        }
        label_align() {
            return "";
        }
    }
    __decorate([
        $mol_mem
    ], $mol_plot_ruler.prototype, "dimensions_axis", null);
    __decorate([
        $mol_mem
    ], $mol_plot_ruler.prototype, "viewport_axis", null);
    __decorate([
        $mol_mem
    ], $mol_plot_ruler.prototype, "normalize", null);
    __decorate([
        $mol_mem_key
    ], $mol_plot_ruler.prototype, "Label", null);
    __decorate([
        $mol_mem
    ], $mol_plot_ruler.prototype, "Background", null);
    __decorate([
        $mol_mem
    ], $mol_plot_ruler.prototype, "Curve", null);
    __decorate([
        $mol_mem
    ], $mol_plot_ruler.prototype, "Title", null);
    $.$mol_plot_ruler = $mol_plot_ruler;
})($ || ($ = {}));
//mol/plot/ruler/-view.tree/ruler.view.tree.ts
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
//mol/math/round/expand/expand.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/plot/ruler/ruler.view.css", "[mol_plot_ruler_curve] {\n\tcolor: var(--mol_theme_line);\n\tstroke-width: 1px;\n\tstroke: currentColor;\n}\n\n[mol_plot_ruler_label] {\n\tcolor: var(--mol_theme_text);\n}\n\n[mol_plot_ruler_title] {\n\tcolor: var(--mol_theme_shade);\n\tbackground-color: var(--mol_theme_back);\n}\n\n[mol_plot_ruler_background] {\n\tstroke: none;\n\tfill: var(--mol_theme_back);\n\topacity: 0.8;\n}\n");
})($ || ($ = {}));
//mol/plot/ruler/-css/ruler.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_plot_ruler extends $.$mol_plot_ruler {
            labels_formatted() {
                return this.axis_points().map((point, index) => this.Label(index));
            }
            step() {
                const scale = Math.abs(this.scale_step());
                const dims = this.dimensions_axis();
                const range = dims.max - dims.min;
                const min_width = (Math.abs(Math.log10(range)) + 2) * 15;
                const size = $mol_math_round_expand(range, -1);
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
            $mol_mem
        ], $mol_plot_ruler.prototype, "step", null);
        __decorate([
            $mol_mem
        ], $mol_plot_ruler.prototype, "axis_points", null);
        __decorate([
            $mol_mem
        ], $mol_plot_ruler.prototype, "precision", null);
        $$.$mol_plot_ruler = $mol_plot_ruler;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/plot/ruler/ruler.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_plot_ruler_vert extends $mol_plot_ruler {
        title_align() {
            return "end";
        }
        label_align() {
            return "end";
        }
        title_pos_y() {
            return "14";
        }
        label_pos_x(id) {
            return this.title_pos_x();
        }
        background_height() {
            return "100%";
        }
        background_width() {
            return this.title_pos_x();
        }
    }
    $.$mol_plot_ruler_vert = $mol_plot_ruler_vert;
})($ || ($ = {}));
//mol/plot/ruler/vert/-view.tree/vert.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/plot/ruler/vert/vert.view.css", "[mol_plot_ruler_vert_label] {\n\ttransform: translateY( 4px );\n}\n");
})($ || ($ = {}));
//mol/plot/ruler/vert/-css/vert.view.css.ts
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
                    let scaled = Math.round(point * scale + shift);
                    scaled = Math.max(Number.MIN_SAFE_INTEGER, Math.min(scaled, Number.MAX_SAFE_INTEGER));
                    return `M 0 ${scaled} H 2000`;
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
//mol/plot/ruler/vert/vert.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_plot_ruler_hor extends $mol_plot_ruler {
        title_align() {
            return "start";
        }
        label_align() {
            return "middle";
        }
        title_pos_x() {
            return "0";
        }
        title_pos_y() {
            return "100%";
        }
        label_pos_y(id) {
            return this.title_pos_y();
        }
        background_width() {
            return "100%";
        }
    }
    $.$mol_plot_ruler_hor = $mol_plot_ruler_hor;
})($ || ($ = {}));
//mol/plot/ruler/hor/-view.tree/hor.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/plot/ruler/hor/hor.view.css", "[mol_plot_ruler_hor_label] {\n\ttransform: translateY( -4px );\n}\n\n[mol_plot_ruler_hor_title] {\n\ttransform: translateY( -4px );\n}\n");
})($ || ($ = {}));
//mol/plot/ruler/hor/-css/hor.view.css.ts
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
                    let scaled = Math.round(point * scale + shift);
                    scaled = Math.max(Number.MIN_SAFE_INTEGER, Math.min(scaled, Number.MAX_SAFE_INTEGER));
                    return `M ${scaled} 1000 V 0`;
                }).join(' ');
            }
            label_pos_x(index) {
                return (this.axis_points()[index] * this.scale()[0] + this.shift()[0]).toFixed(3);
            }
            background_y() {
                return String(this.size_real()[1] - this.font_size());
            }
            title_pos_y() {
                return String(this.size_real()[1]);
            }
            background_height() {
                return String(this.font_size());
            }
        }
        $$.$mol_plot_ruler_hor = $mol_plot_ruler_hor;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/plot/ruler/hor/hor.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_plot_mark_cross extends $mol_plot_graph {
        labels() {
            return [];
        }
        title_x_gap() {
            return 4;
        }
        threshold() {
            return 16;
        }
        graphs() {
            return [];
        }
        dimensions() {
            const obj = new this.$.$mol_vector_2d(this.dimensions_x(), this.dimensions_y());
            return obj;
        }
        sub() {
            return [
                this.Curve(),
                this.Label_x(),
                this.Label_y()
            ];
        }
        dimensions_x() {
            const obj = new this.$.$mol_vector_range(Infinity, -Infinity);
            return obj;
        }
        dimensions_y() {
            const obj = new this.$.$mol_vector_range(Infinity, -Infinity);
            return obj;
        }
        curve() {
            return "";
        }
        Curve() {
            const obj = new this.$.$mol_svg_path();
            obj.geometry = () => this.curve();
            return obj;
        }
        title_x_pos_x() {
            return "0";
        }
        title_x_pos_y() {
            return "100%";
        }
        title_x() {
            return "";
        }
        Label_x() {
            const obj = new this.$.$mol_svg_text_box();
            obj.pos_x = () => this.title_x_pos_x();
            obj.pos_y = () => this.title_x_pos_y();
            obj.text = () => this.title_x();
            return obj;
        }
        title_y_pos_x() {
            return "0";
        }
        title_y_pos_y() {
            return "0";
        }
        title_y() {
            return "";
        }
        Label_y() {
            const obj = new this.$.$mol_svg_text_box();
            obj.pos_x = () => this.title_y_pos_x();
            obj.pos_y = () => this.title_y_pos_y();
            obj.text = () => this.title_y();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_plot_mark_cross.prototype, "dimensions", null);
    __decorate([
        $mol_mem
    ], $mol_plot_mark_cross.prototype, "dimensions_x", null);
    __decorate([
        $mol_mem
    ], $mol_plot_mark_cross.prototype, "dimensions_y", null);
    __decorate([
        $mol_mem
    ], $mol_plot_mark_cross.prototype, "Curve", null);
    __decorate([
        $mol_mem
    ], $mol_plot_mark_cross.prototype, "Label_x", null);
    __decorate([
        $mol_mem
    ], $mol_plot_mark_cross.prototype, "Label_y", null);
    $.$mol_plot_mark_cross = $mol_plot_mark_cross;
})($ || ($ = {}));
//mol/plot/mark/cross/-view.tree/cross.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/plot/mark/cross/cross.view.css", "[mol_plot_mark_cross_curve] {\n\tcolor: var(--mol_theme_focus);\n\tstroke-width: 1px;\n\tstroke: currentColor;\n\tpointer-events: none;\n}\n\n[mol_plot_mark_cross_label_x], [mol_plot_mark_cross_label_y] {\n\tcolor: var(--mol_theme_focus);\n\tfont-weight: bold;\n\tpointer-events: none;\n}\n\n[mol_plot_mark_cross_label_y] {\n\ttransform: translateY( 4px );\n}\n");
})($ || ($ = {}));
//mol/plot/mark/cross/-css/cross.view.css.ts
;
"use strict";
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
                const value = new $mol_vector_2d(graph.series_x()[index], graph.series_y()[index]);
                const scaled = new $mol_vector_2d(shift_x + value.x * scale_x, shift_y + value.y * scale_y);
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
                const width = this.Label_x().width();
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
            $mol_mem
        ], $mol_plot_mark_cross.prototype, "nearest", null);
        $$.$mol_plot_mark_cross = $mol_plot_mark_cross;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/plot/mark/cross/cross.view.ts
;
"use strict";
var $;
(function ($) {
    class $mpk_tss_reports_axle_chart extends $mol_chart {
        axle() {
            return null;
        }
        carriage() {
            return null;
        }
        gap_left() {
            return 48;
        }
        gap_right() {
            return 16;
        }
        gap_bottom() {
            return 24;
        }
        gap_top() {
            return 16;
        }
        graphs() {
            return [
                this.Forces_left(),
                this.Forces_right(),
                this.Vert_ruler(),
                this.Hor_ruler(),
                this.Cross()
            ];
        }
        forces_left_title() {
            return this.$.$mol_locale.text('$mpk_tss_reports_axle_chart_forces_left_title');
        }
        forces_left_x() {
            return [];
        }
        forces_left_y() {
            return [];
        }
        points_max() {
            return 600;
        }
        Forces_left() {
            const obj = new this.$.$mol_plot_dot();
            obj.title = () => this.forces_left_title();
            obj.series_x = () => this.forces_left_x();
            obj.series_y = () => this.forces_left_y();
            obj.points_max = () => this.points_max();
            return obj;
        }
        forces_right_title() {
            return this.$.$mol_locale.text('$mpk_tss_reports_axle_chart_forces_right_title');
        }
        forces_right_x() {
            return [];
        }
        forces_right_y() {
            return [];
        }
        Forces_right() {
            const obj = new this.$.$mol_plot_dot();
            obj.title = () => this.forces_right_title();
            obj.series_x = () => this.forces_right_x();
            obj.series_y = () => this.forces_right_y();
            obj.points_max = () => this.points_max();
            return obj;
        }
        vert_title() {
            return this.$.$mol_locale.text('$mpk_tss_reports_axle_chart_vert_title');
        }
        Vert_ruler() {
            const obj = new this.$.$mol_plot_ruler_vert();
            obj.title = () => this.vert_title();
            return obj;
        }
        hor_title() {
            return this.$.$mol_locale.text('$mpk_tss_reports_axle_chart_hor_title');
        }
        Hor_ruler() {
            const obj = new this.$.$mol_plot_ruler_hor();
            obj.title = () => this.hor_title();
            obj.series_x = () => this.forces_left_x();
            return obj;
        }
        Cross() {
            const obj = new this.$.$mol_plot_mark_cross();
            obj.graphs = () => [
                this.Forces_left(),
                this.Forces_right()
            ];
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mpk_tss_reports_axle_chart.prototype, "Forces_left", null);
    __decorate([
        $mol_mem
    ], $mpk_tss_reports_axle_chart.prototype, "Forces_right", null);
    __decorate([
        $mol_mem
    ], $mpk_tss_reports_axle_chart.prototype, "Vert_ruler", null);
    __decorate([
        $mol_mem
    ], $mpk_tss_reports_axle_chart.prototype, "Hor_ruler", null);
    __decorate([
        $mol_mem
    ], $mpk_tss_reports_axle_chart.prototype, "Cross", null);
    $.$mpk_tss_reports_axle_chart = $mpk_tss_reports_axle_chart;
})($ || ($ = {}));
//mpk/tss/reports/axle/chart/-view.tree/chart.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mpk/tss/reports/axle/chart/chart.css", "[mpk_tss_reports_axle_chart] {\n\theight: 60%;\n}\n\n");
})($ || ($ = {}));
//mpk/tss/reports/axle/chart/-css/chart.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mpk_tss_reports_axle_chart extends $.$mpk_tss_reports_axle_chart {
            axle() { throw new $mpk_tss_todo; }
            carriage() { throw new $mpk_tss_todo; }
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
            $mol_mem
        ], $mpk_tss_reports_axle_chart.prototype, "wheel_left", null);
        __decorate([
            $mol_mem
        ], $mpk_tss_reports_axle_chart.prototype, "wheel_right", null);
        $$.$mpk_tss_reports_axle_chart = $mpk_tss_reports_axle_chart;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mpk/tss/reports/axle/chart/chart.view.ts
;
"use strict";
var $;
(function ($) {
    class $mpk_tss_parameter_weight extends $mol_view {
        sub() {
            return [
                this.value(),
                this.spacer(),
                this.unit()
            ];
        }
        value() {
            return 0;
        }
        spacer() {
            return " ";
        }
        unit() {
            return this.$.$mol_locale.text('$mpk_tss_parameter_weight_unit');
        }
    }
    $.$mpk_tss_parameter_weight = $mpk_tss_parameter_weight;
})($ || ($ = {}));
//mpk/tss/parameter/weight/-view.tree/weight.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mpk_tss_reports_carriage_type extends $mol_view {
        value() {
            return null;
        }
        values() {
            return {
                hopper: this.hopper(),
                flatcar: this.flatcar(),
                tank: this.tank(),
                covered: this.covered()
            };
        }
        sub() {
            return [
                this.status_text()
            ];
        }
        hopper() {
            return this.$.$mol_locale.text('$mpk_tss_reports_carriage_type_hopper');
        }
        flatcar() {
            return this.$.$mol_locale.text('$mpk_tss_reports_carriage_type_flatcar');
        }
        tank() {
            return this.$.$mol_locale.text('$mpk_tss_reports_carriage_type_tank');
        }
        covered() {
            return this.$.$mol_locale.text('$mpk_tss_reports_carriage_type_covered');
        }
        status_text() {
            return "";
        }
    }
    $.$mpk_tss_reports_carriage_type = $mpk_tss_reports_carriage_type;
})($ || ($ = {}));
//mpk/tss/reports/carriage/type/-view.tree/type.view.tree.ts
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
//mpk/tss/reports/carriage/type/type.view.ts
;
"use strict";
var $;
(function ($) {
    class $mpk_tss_parameter_length extends $mol_view {
        sub() {
            return [
                this.value(),
                this.spacer(),
                this.unit()
            ];
        }
        value() {
            return 0;
        }
        spacer() {
            return " ";
        }
        unit() {
            return this.$.$mol_locale.text('$mpk_tss_parameter_length_unit');
        }
    }
    $.$mpk_tss_parameter_length = $mpk_tss_parameter_length;
})($ || ($ = {}));
//mpk/tss/parameter/length/-view.tree/length.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mpk_tss_reports_violation extends $mol_view {
        status() {
            return null;
        }
        none() {
            return this.$.$mol_locale.text('$mpk_tss_reports_violation_none');
        }
        empty() {
            return false;
        }
        statuses() {
            return {
                slider: this.slider(),
                vyscherbiny: this.vyscherbiny(),
                sink: this.sink(),
                dent: this.dent()
            };
        }
        group() {
            return [
                this.status_text()
            ];
        }
        sub() {
            return this.group();
        }
        slider() {
            return this.$.$mol_locale.text('$mpk_tss_reports_violation_slider');
        }
        vyscherbiny() {
            return this.$.$mol_locale.text('$mpk_tss_reports_violation_vyscherbiny');
        }
        sink() {
            return this.$.$mol_locale.text('$mpk_tss_reports_violation_sink');
        }
        dent() {
            return this.$.$mol_locale.text('$mpk_tss_reports_violation_dent');
        }
        status_text() {
            return "";
        }
    }
    $.$mpk_tss_reports_violation = $mpk_tss_reports_violation;
})($ || ($ = {}));
//mpk/tss/reports/violation/-view.tree/violation.view.tree.ts
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
//mpk/tss/reports/violation/violation.view.ts
;
"use strict";
var $;
(function ($) {
    class $mpk_tss_reports_carriage_violation extends $mpk_tss_reports_violation {
        group() {
            return [
                this.before(),
                this.status_text(),
                this.after()
            ];
        }
        before() {
            return "(";
        }
        after() {
            return ")";
        }
    }
    $.$mpk_tss_reports_carriage_violation = $mpk_tss_reports_carriage_violation;
})($ || ($ = {}));
//mpk/tss/reports/carriage/violation/-view.tree/violation.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mpk/tss/reports/carriage/violation/violation.css", "[mpk_tss_reports_carriage_violation] {\n\tpadding-left: 0.3rem;\n}\n");
})($ || ($ = {}));
//mpk/tss/reports/carriage/violation/-css/violation.css.ts
;
"use strict";
var $;
(function ($) {
    class $mpk_tss_reports_carriage_load extends $mol_view {
        status() {
            return null;
        }
        statuses() {
            return {
                free: this.free(),
                full: this.full()
            };
        }
        sub() {
            return [
                this.status_text()
            ];
        }
        free() {
            return this.$.$mol_locale.text('$mpk_tss_reports_carriage_load_free');
        }
        full() {
            return this.$.$mol_locale.text('$mpk_tss_reports_carriage_load_full');
        }
        status_text() {
            return "";
        }
    }
    $.$mpk_tss_reports_carriage_load = $mpk_tss_reports_carriage_load;
})($ || ($ = {}));
//mpk/tss/reports/carriage/load/-view.tree/load.view.tree.ts
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
//mpk/tss/reports/carriage/load/load.view.ts
;
"use strict";
var $;
(function ($) {
    class $mpk_tss_reports_carriage_link extends $mpk_tss_card {
        minimal_height() {
            return 100;
        }
        carriage() {
            return null;
        }
        arg() {
            return {
                carriage: this.carriage_id()
            };
        }
        copy_params() {
            return [
                "login",
                "page",
                "report",
                "carriages",
                "trains",
                "train_warning",
                "carriage_warning"
            ];
        }
        title() {
            return this.$.$mol_locale.text('$mpk_tss_reports_carriage_link_title');
        }
        status() {
            return this.resolution();
        }
        Status_text() {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.Status_main(),
                this.Violation()
            ];
            return obj;
        }
        Status_icon() {
            const obj = new this.$.$mpk_tss_icon_cloud_download();
            return obj;
        }
        status_click(event) {
            return this.carriage_status_click(event);
        }
        additional() {
            return [];
        }
        items() {
            return [
                this.Place(),
                this.Carriage_number(),
                this.Load(),
                this.Speed()
            ];
        }
        carriage_id() {
            return "";
        }
        resolution() {
            return null;
        }
        Status_main() {
            const obj = new this.$.$mpk_tss_reports_resolution();
            obj.status = () => this.resolution();
            return obj;
        }
        violation() {
            return null;
        }
        Violation() {
            const obj = new this.$.$mpk_tss_reports_carriage_violation();
            obj.status = () => this.violation();
            return obj;
        }
        carriage_status_click(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        place_title() {
            return this.$.$mol_locale.text('$mpk_tss_reports_carriage_link_place_title');
        }
        place() {
            return "";
        }
        Place() {
            const obj = new this.$.$mol_labeler();
            obj.title = () => this.place_title();
            obj.content = () => [
                this.place()
            ];
            return obj;
        }
        carriage_number_title() {
            return this.$.$mol_locale.text('$mpk_tss_reports_carriage_link_carriage_number_title');
        }
        carriage_number() {
            return "";
        }
        Carriage_number() {
            const obj = new this.$.$mol_labeler();
            obj.title = () => this.carriage_number_title();
            obj.content = () => [
                this.carriage_number()
            ];
            return obj;
        }
        load_title() {
            return this.$.$mol_locale.text('$mpk_tss_reports_carriage_link_load_title');
        }
        load() {
            return "";
        }
        Load_text() {
            const obj = new this.$.$mpk_tss_reports_carriage_load();
            obj.status = () => this.load();
            return obj;
        }
        Load() {
            const obj = new this.$.$mol_labeler();
            obj.title = () => this.load_title();
            obj.content = () => [
                this.Load_text()
            ];
            return obj;
        }
        speed_title() {
            return this.$.$mol_locale.text('$mpk_tss_reports_carriage_link_speed_title');
        }
        speed() {
            return 0;
        }
        Speed_formatted() {
            const obj = new this.$.$mpk_tss_parameter_speed();
            obj.value = () => this.speed();
            return obj;
        }
        Speed() {
            const obj = new this.$.$mol_labeler();
            obj.title = () => this.speed_title();
            obj.content = () => [
                this.Speed_formatted()
            ];
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mpk_tss_reports_carriage_link.prototype, "Status_text", null);
    __decorate([
        $mol_mem
    ], $mpk_tss_reports_carriage_link.prototype, "Status_icon", null);
    __decorate([
        $mol_mem
    ], $mpk_tss_reports_carriage_link.prototype, "Status_main", null);
    __decorate([
        $mol_mem
    ], $mpk_tss_reports_carriage_link.prototype, "Violation", null);
    __decorate([
        $mol_mem
    ], $mpk_tss_reports_carriage_link.prototype, "carriage_status_click", null);
    __decorate([
        $mol_mem
    ], $mpk_tss_reports_carriage_link.prototype, "Place", null);
    __decorate([
        $mol_mem
    ], $mpk_tss_reports_carriage_link.prototype, "Carriage_number", null);
    __decorate([
        $mol_mem
    ], $mpk_tss_reports_carriage_link.prototype, "Load_text", null);
    __decorate([
        $mol_mem
    ], $mpk_tss_reports_carriage_link.prototype, "Load", null);
    __decorate([
        $mol_mem
    ], $mpk_tss_reports_carriage_link.prototype, "Speed_formatted", null);
    __decorate([
        $mol_mem
    ], $mpk_tss_reports_carriage_link.prototype, "Speed", null);
    $.$mpk_tss_reports_carriage_link = $mpk_tss_reports_carriage_link;
})($ || ($ = {}));
//mpk/tss/reports/carriage/link/-view.tree/link.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mpk/tss/reports/carriage/link/link.css", "[mpk_tss_reports_carriage_link_place] {\n\tflex: 1 1 3rem;\n}\n\n[mpk_tss_reports_carriage_link_carriage_number] {\n\tflex: 1 1 5rem;\n}\n\n[mpk_tss_reports_carriage_link_load] {\n\tflex: 1 1 4rem;\n}\n\n[mpk_tss_reports_carriage_link_speed] {\n\tflex: 1 1 4rem;\n}\n");
})($ || ($ = {}));
//mpk/tss/reports/carriage/link/-css/link.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mpk_tss_reports_carriage_link extends $.$mpk_tss_reports_carriage_link {
            carriage() { throw new $mpk_tss_todo; }
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
//mpk/tss/reports/carriage/link/link.view.ts
;
"use strict";
var $;
(function ($) {
    class $mpk_tss_reports_wheel_link extends $mol_view {
        wheel() {
            return null;
        }
        axle_id() {
            return "";
        }
        attr() {
            return {
                ...super.attr(),
                mpk_tss_reports_wheel_type: this.resolution()
            };
        }
        sub() {
            return [
                this.name()
            ];
        }
        resolution() {
            return "";
        }
        name() {
            return "";
        }
    }
    $.$mpk_tss_reports_wheel_link = $mpk_tss_reports_wheel_link;
})($ || ($ = {}));
//mpk/tss/reports/wheel/link/-view.tree/wheel.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mpk/tss/reports/wheel/link/wheel.css", "[mpk_tss_reports_wheel_link] {\n\twidth: 4rem;\n\tpadding: 0.3rem;\n\tdisplay: flex;\n\tjustify-content: center;\n\tbackground-color: var(--mol_theme_line);\n\t/* box-shadow: 0 0 0 1px var(--mol_theme_line); */\n}\n\n[mpk_tss_reports_wheel_type=\"success\"] {\n\t--mol_theme_line: var(--mpk_theme_status_bg_success);\n\t--mol_theme_control: var(--mol_theme_field);\n}\n\n[mpk_tss_reports_wheel_type=\"warning\"] {\n\t--mol_theme_line: var(--mpk_theme_status_bg_warning);\n\t--mol_theme_control: var(--mol_theme_field);\n}\n");
})($ || ($ = {}));
//mpk/tss/reports/wheel/link/-css/wheel.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mpk_tss_reports_wheel_link extends $.$mpk_tss_reports_wheel_link {
            wheel() { throw new $mpk_tss_todo; }
            id() {
                return this.wheel().id();
            }
            resolution() {
                return this.wheel().resolution() ?? '';
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
//mpk/tss/reports/wheel/link/wheel.view.ts
;
"use strict";
var $;
(function ($) {
    class $mpk_tss_reports_axle_link extends $mpk_tss_link {
        axle() {
            return null;
        }
        arg() {
            return {
                axle: this.axle_id()
            };
        }
        copy_params() {
            return [
                "login",
                "page",
                "report",
                "carriage",
                "trains",
                "carriages",
                "train_warining",
                "carriage_warining"
            ];
        }
        sub() {
            return [
                this.Wheels()
            ];
        }
        Wheel(id) {
            const obj = new this.$.$mpk_tss_reports_wheel_link();
            obj.wheel = () => this.wheel(id);
            obj.axle_id = () => this.axle_id();
            return obj;
        }
        axle_id() {
            return "";
        }
        wheels() {
            return [];
        }
        Wheels() {
            const obj = new this.$.$mol_list();
            obj.rows = () => this.wheels();
            return obj;
        }
        wheel(id) {
            return null;
        }
    }
    __decorate([
        $mol_mem_key
    ], $mpk_tss_reports_axle_link.prototype, "Wheel", null);
    __decorate([
        $mol_mem
    ], $mpk_tss_reports_axle_link.prototype, "Wheels", null);
    $.$mpk_tss_reports_axle_link = $mpk_tss_reports_axle_link;
})($ || ($ = {}));
//mpk/tss/reports/axle/link/-view.tree/link.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mpk/tss/reports/axle/link/link.css", "[mpk_tss_reports_axle_link] {\n\t--mol_theme_control: var(--mol_theme_field);\n}\n\n[mpk_tss_reports_axle_link_wheels] {\n\tdisplay: flex;\n\tflex-direction: column-reverse;\n\theight: 5rem;\n\tjustify-content: space-between;\n}\n");
})($ || ($ = {}));
//mpk/tss/reports/axle/link/-css/link.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mpk_tss_reports_axle_link extends $.$mpk_tss_reports_axle_link {
            axle() { throw new $mpk_tss_todo; }
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
//mpk/tss/reports/axle/link/link.view.ts
;
"use strict";
var $;
(function ($) {
    class $mpk_tss_reports_axle_list extends $mol_list {
        carriage() {
            return null;
        }
        axle_current() {
            return null;
        }
        rows() {
            return this.axis();
        }
        Axle_link(id) {
            const obj = new this.$.$mpk_tss_reports_axle_link();
            obj.axle = () => this.axle(id);
            obj.current = () => this.current(id);
            return obj;
        }
        axis() {
            return [];
        }
        axle(id) {
            return null;
        }
        current(id) {
            return false;
        }
    }
    __decorate([
        $mol_mem_key
    ], $mpk_tss_reports_axle_list.prototype, "Axle_link", null);
    $.$mpk_tss_reports_axle_list = $mpk_tss_reports_axle_list;
})($ || ($ = {}));
//mpk/tss/reports/axle/list/-view.tree/list.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mpk/tss/reports/axle/list/list.css", "[mpk_tss_reports_axle_list] {\n\tdisplay: inline-flex;\n\tpadding: 0.5rem;\n\tflex: 1 1 30rem;\n\tbox-shadow: 0 0 0 1px var(--mol_theme_line);\n}\n\n[mpk_tss_reports_axle_list] > [mol_link_current=\"true\"] {\n\t--mol_theme_control: var(--mol_theme_field);\n}\n");
})($ || ($ = {}));
//mpk/tss/reports/axle/list/-css/list.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mpk_tss_reports_axle_list extends $.$mpk_tss_reports_axle_list {
            carriage() { throw new $mpk_tss_todo; }
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
            $mol_mem
        ], $mpk_tss_reports_axle_list.prototype, "axle_current_id", null);
        $$.$mpk_tss_reports_axle_list = $mpk_tss_reports_axle_list;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mpk/tss/reports/axle/list/list.view.ts
;
"use strict";
var $;
(function ($) {
    class $mpk_tss_reports_carriage_details extends $mol_page {
        carriage() {
            return null;
        }
        title() {
            return this.$.$mol_locale.text('$mpk_tss_reports_carriage_details_title');
        }
        minimal_width() {
            return 1400;
        }
        tools() {
            return [
                this.Close()
            ];
        }
        body() {
            return [
                this.Main()
            ];
        }
        Axle_chart() {
            const obj = new this.$.$mpk_tss_reports_axle_chart();
            obj.carriage = () => this.carriage();
            obj.axle = () => this.axle_current2();
            return obj;
        }
        Close_icon() {
            const obj = new this.$.$mol_icon_cross();
            return obj;
        }
        Close() {
            const obj = new this.$.$mpk_tss_link();
            obj.arg = () => ({
                carriage: null
            });
            obj.sub = () => [
                this.Close_icon()
            ];
            obj.copy_params = () => [
                "page",
                "login",
                "report",
                "carriages",
                "trains",
                "train_warning",
                "carriage_warning"
            ];
            return obj;
        }
        total_weight_title() {
            return this.$.$mol_locale.text('$mpk_tss_reports_carriage_details_total_weight_title');
        }
        total_weight() {
            return 0;
        }
        Weight_content() {
            const obj = new this.$.$mpk_tss_parameter_weight();
            obj.value = () => this.total_weight();
            return obj;
        }
        Weight() {
            const obj = new this.$.$mol_labeler();
            obj.title = () => this.total_weight_title();
            obj.content = () => [
                this.Weight_content()
            ];
            return obj;
        }
        type_title() {
            return this.$.$mol_locale.text('$mpk_tss_reports_carriage_details_type_title');
        }
        type() {
            return "";
        }
        Type_content() {
            const obj = new this.$.$mpk_tss_reports_carriage_type();
            obj.value = () => this.type();
            return obj;
        }
        Type() {
            const obj = new this.$.$mol_labeler();
            obj.title = () => this.type_title();
            obj.content = () => [
                this.Type_content()
            ];
            return obj;
        }
        length_title() {
            return this.$.$mol_locale.text('$mpk_tss_reports_carriage_details_length_title');
        }
        length() {
            return 0;
        }
        Length_content() {
            const obj = new this.$.$mpk_tss_parameter_length();
            obj.value = () => this.length();
            return obj;
        }
        Length() {
            const obj = new this.$.$mol_labeler();
            obj.title = () => this.length_title();
            obj.content = () => [
                this.Length_content()
            ];
            return obj;
        }
        violation_title() {
            return this.$.$mol_locale.text('$mpk_tss_reports_carriage_details_violation_title');
        }
        violation() {
            return null;
        }
        Violation_content() {
            const obj = new this.$.$mpk_tss_reports_violation();
            obj.empty = () => true;
            obj.status = () => this.violation();
            return obj;
        }
        Violation() {
            const obj = new this.$.$mol_labeler();
            obj.title = () => this.violation_title();
            obj.content = () => [
                this.Violation_content()
            ];
            return obj;
        }
        Info() {
            const obj = new this.$.$mpk_tss_reports_carriage_link();
            obj.carriage = () => this.carriage();
            obj.additional = () => [
                this.Weight(),
                this.Type(),
                this.Length(),
                this.Violation()
            ];
            return obj;
        }
        axle_current() {
            return this.Axle_list().axle_current();
        }
        Axle_list() {
            const obj = new this.$.$mpk_tss_reports_axle_list();
            obj.carriage = () => this.carriage();
            return obj;
        }
        details() {
            return [];
        }
        Main() {
            const obj = new this.$.$mol_row();
            obj.sub = () => [
                this.Info(),
                this.Axle_list(),
                ...this.details()
            ];
            return obj;
        }
        axle_current2() {
            const obj = new this.$.$mpk_tss_reports_domain_axle();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mpk_tss_reports_carriage_details.prototype, "Axle_chart", null);
    __decorate([
        $mol_mem
    ], $mpk_tss_reports_carriage_details.prototype, "Close_icon", null);
    __decorate([
        $mol_mem
    ], $mpk_tss_reports_carriage_details.prototype, "Close", null);
    __decorate([
        $mol_mem
    ], $mpk_tss_reports_carriage_details.prototype, "Weight_content", null);
    __decorate([
        $mol_mem
    ], $mpk_tss_reports_carriage_details.prototype, "Weight", null);
    __decorate([
        $mol_mem
    ], $mpk_tss_reports_carriage_details.prototype, "Type_content", null);
    __decorate([
        $mol_mem
    ], $mpk_tss_reports_carriage_details.prototype, "Type", null);
    __decorate([
        $mol_mem
    ], $mpk_tss_reports_carriage_details.prototype, "Length_content", null);
    __decorate([
        $mol_mem
    ], $mpk_tss_reports_carriage_details.prototype, "Length", null);
    __decorate([
        $mol_mem
    ], $mpk_tss_reports_carriage_details.prototype, "Violation_content", null);
    __decorate([
        $mol_mem
    ], $mpk_tss_reports_carriage_details.prototype, "Violation", null);
    __decorate([
        $mol_mem
    ], $mpk_tss_reports_carriage_details.prototype, "Info", null);
    __decorate([
        $mol_mem
    ], $mpk_tss_reports_carriage_details.prototype, "Axle_list", null);
    __decorate([
        $mol_mem
    ], $mpk_tss_reports_carriage_details.prototype, "Main", null);
    __decorate([
        $mol_mem
    ], $mpk_tss_reports_carriage_details.prototype, "axle_current2", null);
    $.$mpk_tss_reports_carriage_details = $mpk_tss_reports_carriage_details;
})($ || ($ = {}));
//mpk/tss/reports/carriage/details/-view.tree/details.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mpk/tss/reports/carriage/details/details.css", "[mpk_tss_reports_carriage_details] {\n\tflex: 1000 1 1200px;\n}\n\n[mpk_tss_reports_carriage_details_weight] {\n\tflex: 1 1 4rem;\n}\n\n[mpk_tss_reports_carriage_details_type] {\n\tflex: 1 1 4rem;\n}\n\n[mpk_tss_reports_carriage_details_length] {\n\tflex: 1 1 4rem;\n}\n\n[mpk_tss_reports_carriage_details_violation] {\n\tflex: 1 1 5rem;\n}\n\n[mpk_tss_reports_carriage_details_info] {\n\tflex: 1000 1 35rem;\n}\n\n[mpk_tss_reports_carriage_details_axle_list] {\n\tflex: 0 1 10rem;\n}\n");
})($ || ($ = {}));
//mpk/tss/reports/carriage/details/-css/details.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mpk_tss_reports_carriage_details extends $.$mpk_tss_reports_carriage_details {
            carriage() { throw new $mpk_tss_todo; }
            title() {
                return super.title()
                    .replace('%train_number', this.carriage().train().train_number())
                    .replace('%carriage_number', this.carriage().carriage_number());
            }
            details() {
                const current = this.axle_current2();
                if (!current)
                    return [];
                return [this.Axle_chart()];
            }
            axle_current2() {
                return this.axle_current();
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
//mpk/tss/reports/carriage/details/details.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_check extends $mol_button_minor {
        attr() {
            return {
                ...super.attr(),
                mol_check_checked: this.checked(),
                "aria-checked": this.checked(),
                role: "checkbox"
            };
        }
        sub() {
            return [
                this.Icon(),
                this.label()
            ];
        }
        checked(val) {
            if (val !== undefined)
                return val;
            return false;
        }
        Icon() {
            return null;
        }
        title() {
            return "";
        }
        Title() {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.title()
            ];
            return obj;
        }
        label() {
            return [
                this.Title()
            ];
        }
    }
    __decorate([
        $mol_mem
    ], $mol_check.prototype, "checked", null);
    __decorate([
        $mol_mem
    ], $mol_check.prototype, "Title", null);
    $.$mol_check = $mol_check;
})($ || ($ = {}));
//mol/check/-view.tree/check.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/check/check.css", "[mol_check] {\n\tflex: 0 0 auto;\n\tjustify-content: flex-start;\n\talign-content: center;\n\talign-items: flex-start;\n\tborder: none;\n\tfont-weight: inherit;\n\tbox-shadow: none;\n\ttext-align: left;\n\tdisplay: inline-flex;\n\tflex-wrap: nowrap;\n}\n\n[mol_check_title] {\n\tflex-shrink: 1;\n}\n\n[mol_check_checked] {\n\tcolor: var(--mol_theme_current);\n}\n");
})($ || ($ = {}));
//mol/check/-css/check.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_check extends $.$mol_check {
            click(next) {
                if (next?.defaultPrevented)
                    return;
                this.checked(!this.checked());
                if (next)
                    next.preventDefault();
            }
            sub() {
                return [
                    ...$mol_maybe(this.Icon()),
                    ...this.label(),
                ];
            }
            label() {
                return this.title() ? super.label() : [];
            }
        }
        $$.$mol_check = $mol_check;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/check/check.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_check_icon extends $mol_check {
    }
    $.$mol_check_icon = $mol_check_icon;
})($ || ($ = {}));
//mol/check/icon/-view.tree/icon.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/check/icon/icon.view.css", "");
})($ || ($ = {}));
//mol/check/icon/-css/icon.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mpk_tss_reports_check_warning extends $mol_check_icon {
        checked(val) {
            return this.filter_warning(val);
        }
        Icon() {
            const obj = new this.$.$mpk_tss_icon_round_warning();
            return obj;
        }
        filter_warning(val) {
            if (val !== undefined)
                return val;
            return true;
        }
    }
    __decorate([
        $mol_mem
    ], $mpk_tss_reports_check_warning.prototype, "Icon", null);
    __decorate([
        $mol_mem
    ], $mpk_tss_reports_check_warning.prototype, "filter_warning", null);
    $.$mpk_tss_reports_check_warning = $mpk_tss_reports_check_warning;
})($ || ($ = {}));
//mpk/tss/reports/check/warning/-view.tree/warning.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mpk/tss/reports/check/warning/warning.css", "[mpk_tss_reports_check_warning] {\n\t--mol_theme_control: gray;\n\t--mol_skin_accent: var(--mpk_theme_status_bg_warning);\n\tpadding: 0;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tmargin-bottom: 1px;\n\tbox-shadow: 0 0 0 1px var(--mol_theme_line);\n}\n\n[mpk_tss_reports_check_warning_icon] {\n\twidth: 1.5em;\n\theight: 1.5em;\n}\n");
})($ || ($ = {}));
//mpk/tss/reports/check/warning/-css/warning.css.ts
;
"use strict";
var $;
(function ($) {
    class $mpk_tss_reports_carriage_page extends $mol_page {
        minimal_width() {
            return 337;
        }
        sub() {
            return [
                this.Head(),
                this.Search(),
                this.Body()
            ];
        }
        hint() {
            return this.$.$mol_locale.text('$mpk_tss_reports_carriage_page_hint');
        }
        filter_number(val) {
            if (val !== undefined)
                return val;
            return "";
        }
        Filter_number() {
            const obj = new this.$.$mol_search();
            obj.hint = () => this.hint();
            obj.query = (val) => this.filter_number(val);
            return obj;
        }
        filter_warning(val) {
            if (val !== undefined)
                return val;
            return true;
        }
        Filter_warning() {
            const obj = new this.$.$mpk_tss_reports_check_warning();
            obj.checked = (val) => this.filter_warning(val);
            return obj;
        }
        Search() {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.Filter_number(),
                this.Filter_warning()
            ];
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mpk_tss_reports_carriage_page.prototype, "filter_number", null);
    __decorate([
        $mol_mem
    ], $mpk_tss_reports_carriage_page.prototype, "Filter_number", null);
    __decorate([
        $mol_mem
    ], $mpk_tss_reports_carriage_page.prototype, "filter_warning", null);
    __decorate([
        $mol_mem
    ], $mpk_tss_reports_carriage_page.prototype, "Filter_warning", null);
    __decorate([
        $mol_mem
    ], $mpk_tss_reports_carriage_page.prototype, "Search", null);
    $.$mpk_tss_reports_carriage_page = $mpk_tss_reports_carriage_page;
})($ || ($ = {}));
//mpk/tss/reports/carriage/page/-view.tree/page.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mpk/tss/reports/carriage/page/page.css", "[mpk_tss_reports_carriage_page_search] {\n\tdisplay: inline-flex;\n}\n");
})($ || ($ = {}));
//mpk/tss/reports/carriage/page/-css/page.css.ts
;
"use strict";
var $;
(function ($) {
    class $mpk_tss_reports_carriage_list extends $mol_view {
        report() {
            return null;
        }
        title() {
            return this.$.$mol_locale.text('$mpk_tss_reports_carriage_list_title');
        }
        pages() {
            return [
                this.Main(),
                this.Carriage()
            ];
        }
        Carriage_details(id) {
            const obj = new this.$.$mpk_tss_reports_carriage_details();
            obj.carriage = () => this.carriage(id);
            obj.body_scroll_top = (e) => this.focus_main(e);
            return obj;
        }
        Carriage_link(id) {
            const obj = new this.$.$mpk_tss_reports_carriage_link();
            obj.carriage = () => this.carriage(id);
            return obj;
        }
        filter_number(val) {
            if (val !== undefined)
                return val;
            return "";
        }
        filter_warning(val) {
            if (val !== undefined)
                return val;
            return true;
        }
        body_scroll_top(e) {
            if (e !== undefined)
                return e;
            return null;
        }
        Details_close_icon() {
            const obj = new this.$.$mol_icon_cross();
            return obj;
        }
        Details_close() {
            const obj = new this.$.$mpk_tss_link();
            obj.arg = () => ({
                report: null
            });
            obj.sub = () => [
                this.Details_close_icon()
            ];
            obj.copy_params = () => [
                "login",
                "page",
                "trains",
                "carriages",
                "train_warining",
                "carriage_warining"
            ];
            return obj;
        }
        carriage_links() {
            return [];
        }
        Carriages() {
            const obj = new this.$.$mol_list();
            obj.rows = () => this.carriage_links();
            return obj;
        }
        Main() {
            const obj = new this.$.$mpk_tss_reports_carriage_page();
            obj.title = () => this.title();
            obj.filter_number = (val) => this.filter_number(val);
            obj.filter_warning = (val) => this.filter_warning(val);
            obj.body_scroll_top = (e) => this.body_scroll_top(e);
            obj.tools = () => [
                this.Details_close()
            ];
            obj.body = () => [
                this.Carriages()
            ];
            return obj;
        }
        Carriage() {
            return null;
        }
        carriage(id) {
            return null;
        }
        focus_main(e) {
            if (e !== undefined)
                return e;
            return null;
        }
    }
    __decorate([
        $mol_mem_key
    ], $mpk_tss_reports_carriage_list.prototype, "Carriage_details", null);
    __decorate([
        $mol_mem_key
    ], $mpk_tss_reports_carriage_list.prototype, "Carriage_link", null);
    __decorate([
        $mol_mem
    ], $mpk_tss_reports_carriage_list.prototype, "filter_number", null);
    __decorate([
        $mol_mem
    ], $mpk_tss_reports_carriage_list.prototype, "filter_warning", null);
    __decorate([
        $mol_mem
    ], $mpk_tss_reports_carriage_list.prototype, "body_scroll_top", null);
    __decorate([
        $mol_mem
    ], $mpk_tss_reports_carriage_list.prototype, "Details_close_icon", null);
    __decorate([
        $mol_mem
    ], $mpk_tss_reports_carriage_list.prototype, "Details_close", null);
    __decorate([
        $mol_mem
    ], $mpk_tss_reports_carriage_list.prototype, "Carriages", null);
    __decorate([
        $mol_mem
    ], $mpk_tss_reports_carriage_list.prototype, "Main", null);
    __decorate([
        $mol_mem
    ], $mpk_tss_reports_carriage_list.prototype, "focus_main", null);
    $.$mpk_tss_reports_carriage_list = $mpk_tss_reports_carriage_list;
})($ || ($ = {}));
//mpk/tss/reports/carriage/list/-view.tree/list.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mpk/tss/reports/carriage/list/list.css", "[mpk_tss_reports_carriage_list_main] {\n\tflex: 1 1 22rem;\n}\n");
})($ || ($ = {}));
//mpk/tss/reports/carriage/list/-css/list.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mpk_tss_reports_carriage_list extends $.$mpk_tss_reports_carriage_list {
            report() {
                throw new $mpk_tss_todo;
            }
            carriages() {
                return this.report().carriages({
                    filter_number: (next) => this.filter_number(),
                    filter_resolution: () => {
                        return this.filter_warning()
                            ? $mpk_tss_reports_domain_resolution.warning
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
            $mol_mem
        ], $mpk_tss_reports_carriage_list.prototype, "carriages", null);
        __decorate([
            $mol_mem
        ], $mpk_tss_reports_carriage_list.prototype, "filter_warning", null);
        __decorate([
            $mol_mem
        ], $mpk_tss_reports_carriage_list.prototype, "filter_number", null);
        $$.$mpk_tss_reports_carriage_list = $mpk_tss_reports_carriage_list;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mpk/tss/reports/carriage/list/list.view.ts
;
"use strict";
var $;
(function ($) {
    class $mpk_tss_card_list extends $mol_list {
        minimal_width() {
            return 300;
        }
        current_id() {
            return "";
        }
        attr() {
            return {
                ...super.attr(),
                mpk_tss_card_list_selected: this.selected()
            };
        }
        selected() {
            return false;
        }
    }
    $.$mpk_tss_card_list = $mpk_tss_card_list;
})($ || ($ = {}));
//mpk/tss/card/list/-view.tree/list.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mpk/tss/card/list/list.css", "[mpk_tss_card_list_selected=\"true\"] > :not([mol_link_current=\"true\"]) > [mol_card] {\n\t--mol_theme_line: lightgray;\n}\n");
})($ || ($ = {}));
//mpk/tss/card/list/-css/list.css.ts
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
//mpk/tss/card/list/list.view.ts
;
"use strict";
var $;
(function ($) {
    class $mpk_tss_reports_train_page extends $mol_page {
        minimal_width() {
            return 520;
        }
        report_current_id(uri) {
            if (uri !== undefined)
                return uri;
            return "";
        }
        sub() {
            return [
                this.Head(),
                this.Search(),
                this.Body()
            ];
        }
        hint() {
            return this.$.$mol_locale.text('$mpk_tss_reports_train_page_hint');
        }
        filter_number(val) {
            if (val !== undefined)
                return val;
            return "";
        }
        Filter_number() {
            const obj = new this.$.$mol_search();
            obj.hint = () => this.hint();
            obj.query = (val) => this.filter_number(val);
            return obj;
        }
        filter_warning(val) {
            if (val !== undefined)
                return val;
            return true;
        }
        Filter_warning() {
            const obj = new this.$.$mpk_tss_reports_check_warning();
            obj.checked = (val) => this.filter_warning(val);
            return obj;
        }
        Search() {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.Filter_number(),
                this.Filter_warning()
            ];
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mpk_tss_reports_train_page.prototype, "report_current_id", null);
    __decorate([
        $mol_mem
    ], $mpk_tss_reports_train_page.prototype, "filter_number", null);
    __decorate([
        $mol_mem
    ], $mpk_tss_reports_train_page.prototype, "Filter_number", null);
    __decorate([
        $mol_mem
    ], $mpk_tss_reports_train_page.prototype, "filter_warning", null);
    __decorate([
        $mol_mem
    ], $mpk_tss_reports_train_page.prototype, "Filter_warning", null);
    __decorate([
        $mol_mem
    ], $mpk_tss_reports_train_page.prototype, "Search", null);
    $.$mpk_tss_reports_train_page = $mpk_tss_reports_train_page;
})($ || ($ = {}));
//mpk/tss/reports/train/page/-view.tree/page.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mpk/tss/reports/train/page/page.css", "[mpk_tss_reports_train_page_body] {\n\toverflow-y: scroll;\n}\n\n[mpk_tss_reports_train_page_search] {\n\tdisplay: inline-flex;\n\talign-items: baseline;\n}\n");
})($ || ($ = {}));
//mpk/tss/reports/train/page/-css/page.css.ts
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
//mpk/tss/reports/train/page/page.view.ts
;
"use strict";
var $;
(function ($) {
    class $mpk_tss_reports_train_list extends $mol_view {
        title() {
            return this.$.$mol_locale.text('$mpk_tss_reports_train_list_title');
        }
        pages() {
            return [
                this.Main()
            ];
        }
        Report_link(id) {
            const obj = new this.$.$mpk_tss_reports_train_link();
            obj.minimal_height = () => 100;
            obj.report = () => this.report(id);
            return obj;
        }
        Report_details(id) {
            const obj = new this.$.$mpk_tss_reports_carriage_list();
            obj.report = () => this.report(id);
            obj.body_scroll_top = (e) => this.focus_main(e);
            return obj;
        }
        body_scroll_top(e) {
            if (e !== undefined)
                return e;
            return null;
        }
        tools() {
            return [];
        }
        report_current_id(id) {
            if (id !== undefined)
                return id;
            return "";
        }
        filter_number(val) {
            if (val !== undefined)
                return val;
            return "";
        }
        filter_warning(val) {
            if (val !== undefined)
                return val;
            return true;
        }
        report_links() {
            return [];
        }
        Reports() {
            const obj = new this.$.$mpk_tss_card_list();
            obj.current_id = () => this.report_current_id();
            obj.minimal_width = () => 300;
            obj.rows = () => this.report_links();
            return obj;
        }
        Main() {
            const obj = new this.$.$mpk_tss_reports_train_page();
            obj.body_scroll_top = (e) => this.body_scroll_top(e);
            obj.tools = () => this.tools();
            obj.title = () => this.title();
            obj.report_current_id = (id) => this.report_current_id(id);
            obj.filter_number = (val) => this.filter_number(val);
            obj.filter_warning = (val) => this.filter_warning(val);
            obj.body = () => [
                this.Reports()
            ];
            return obj;
        }
        report(id) {
            return null;
        }
        focus_main(e) {
            if (e !== undefined)
                return e;
            return null;
        }
    }
    __decorate([
        $mol_mem_key
    ], $mpk_tss_reports_train_list.prototype, "Report_link", null);
    __decorate([
        $mol_mem_key
    ], $mpk_tss_reports_train_list.prototype, "Report_details", null);
    __decorate([
        $mol_mem
    ], $mpk_tss_reports_train_list.prototype, "body_scroll_top", null);
    __decorate([
        $mol_mem
    ], $mpk_tss_reports_train_list.prototype, "report_current_id", null);
    __decorate([
        $mol_mem
    ], $mpk_tss_reports_train_list.prototype, "filter_number", null);
    __decorate([
        $mol_mem
    ], $mpk_tss_reports_train_list.prototype, "filter_warning", null);
    __decorate([
        $mol_mem
    ], $mpk_tss_reports_train_list.prototype, "Reports", null);
    __decorate([
        $mol_mem
    ], $mpk_tss_reports_train_list.prototype, "Main", null);
    __decorate([
        $mol_mem
    ], $mpk_tss_reports_train_list.prototype, "focus_main", null);
    $.$mpk_tss_reports_train_list = $mpk_tss_reports_train_list;
})($ || ($ = {}));
//mpk/tss/reports/train/list/-view.tree/list.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mpk/tss/reports/train/list/list.css", "[mpk_tss_reports_train_list_main] {\n\tflex: 1 1 35rem;\n}\n");
})($ || ($ = {}));
//mpk/tss/reports/train/list/-css/list.css.ts
;
"use strict";
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
                            ? $mpk_tss_reports_domain_resolution.warning
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
            $mol_mem
        ], $mpk_tss_reports_train_list.prototype, "domain", null);
        __decorate([
            $mol_mem
        ], $mpk_tss_reports_train_list.prototype, "report_links", null);
        __decorate([
            $mol_mem
        ], $mpk_tss_reports_train_list.prototype, "filter_warning", null);
        $$.$mpk_tss_reports_train_list = $mpk_tss_reports_train_list;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mpk/tss/reports/train/list/list.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_image extends $mol_view {
        dom_name() {
            return "img";
        }
        field() {
            return {
                ...super.field(),
                src: this.uri(),
                alt: this.title(),
                loading: this.loading(),
                decoding: this.decoding(),
                crossOrigin: this.cors()
            };
        }
        minimal_width() {
            return 16;
        }
        minimal_height() {
            return 16;
        }
        uri() {
            return "";
        }
        loading() {
            return "eager";
        }
        decoding() {
            return "async";
        }
        cors() {
            return null;
        }
    }
    $.$mol_image = $mol_image;
})($ || ($ = {}));
//mol/image/-view.tree/image.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/image/image.view.css", "[mol_image] {\n\tborder-radius: var(--mol_gap_round);\n\toverflow: hidden;\n\tflex: 0 1 auto;\n\tmax-width: 100%;\n\tobject-fit: cover;\n}\n");
})($ || ($ = {}));
//mol/image/-css/image.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_form_field extends $mol_labeler {
        bids() {
            return [];
        }
        label() {
            return [
                this.name(),
                this.Bid()
            ];
        }
        content() {
            return [
                this.control()
            ];
        }
        name() {
            return "";
        }
        bid() {
            return "";
        }
        Bid() {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.bid()
            ];
            return obj;
        }
        control() {
            return null;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_form_field.prototype, "Bid", null);
    $.$mol_form_field = $mol_form_field;
})($ || ($ = {}));
//mol/form/field/-view.tree/field.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/form/field/field.view.css", "[mol_form_field] {\n\talign-items: stretch;\n}\n\n[mol_form_field_bid] {\n\tcolor: var(--mol_theme_focus);\n\tdisplay: inline-block;\n\ttext-shadow: 0 0;\n}\n\n[mol_form_field_content] {\n\tborder-radius: var(--mol_gap_round);\n}\n");
})($ || ($ = {}));
//mol/form/field/-css/field.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_form_field extends $.$mol_form_field {
            bid() {
                return this.bids().filter(Boolean)[0] ?? '';
            }
        }
        __decorate([
            $mol_mem
        ], $mol_form_field.prototype, "bid", null);
        $$.$mol_form_field = $mol_form_field;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/form/field/field.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_button_major extends $mol_button_typed {
        attr() {
            return {
                ...super.attr(),
                mol_theme: "$mol_theme_accent"
            };
        }
    }
    $.$mol_button_major = $mol_button_major;
})($ || ($ = {}));
//mol/button/major/-view.tree/major.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/button/major/major.view.css", "[mol_button_major][disabled] {\n\topacity: .5;\n\tfilter: grayscale();\n}\n");
})($ || ($ = {}));
//mol/button/major/-css/major.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_form extends $mol_list {
        submit_allowed() {
            return true;
        }
        submit_blocked() {
            return false;
        }
        event() {
            return {
                ...super.event(),
                keydown: (event) => this.keydown(event)
            };
        }
        submit(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        rows() {
            return [
                this.Body(),
                this.Foot()
            ];
        }
        keydown(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        form_fields() {
            return [];
        }
        body() {
            return this.form_fields();
        }
        Body() {
            const obj = new this.$.$mol_list();
            obj.sub = () => this.body();
            return obj;
        }
        buttons() {
            return [];
        }
        foot() {
            return this.buttons();
        }
        Foot() {
            const obj = new this.$.$mol_row();
            obj.sub = () => this.foot();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_form.prototype, "submit", null);
    __decorate([
        $mol_mem
    ], $mol_form.prototype, "keydown", null);
    __decorate([
        $mol_mem
    ], $mol_form.prototype, "Body", null);
    __decorate([
        $mol_mem
    ], $mol_form.prototype, "Foot", null);
    $.$mol_form = $mol_form;
})($ || ($ = {}));
//mol/form/-view.tree/form.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/form/form.view.css", "[mol_form] {\r\n\tgap: var(--mol_gap_block);\r\n}\r\n\r\n[mol_form_body] {\r\n\tgap: var(--mol_gap_block);\r\n}");
})($ || ($ = {}));
//mol/form/-css/form.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_form extends $.$mol_form {
            form_fields() {
                return [...this.view_find(view => view instanceof $mol_form_field)]
                    .map(path => path[path.length - 1]);
            }
            submit_allowed() {
                return this.form_fields().every(field => !field.bid());
            }
            submit_blocked() {
                return !this.submit_allowed();
            }
            keydown(next) {
                if (next.ctrlKey && next.keyCode === $mol_keyboard_code.enter && !this.submit_blocked())
                    this.submit(event);
            }
        }
        __decorate([
            $mol_mem
        ], $mol_form.prototype, "form_fields", null);
        __decorate([
            $mol_mem
        ], $mol_form.prototype, "submit_allowed", null);
        $$.$mol_form = $mol_form;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/form/form.view.ts
;
"use strict";
var $;
(function ($) {
    class $mpk_tss_login extends $mol_list {
        submit(v) {
            if (v !== undefined)
                return v;
            return false;
        }
        sub() {
            return [
                this.Form()
            ];
        }
        login_label() {
            return this.$.$mol_locale.text('$mpk_tss_login_login_label');
        }
        login(val) {
            if (val !== undefined)
                return val;
            return "";
        }
        Login() {
            const obj = new this.$.$mol_string();
            obj.value = (val) => this.login(val);
            return obj;
        }
        Login_field() {
            const obj = new this.$.$mol_form_field();
            obj.name = () => this.login_label();
            obj.control = () => this.Login();
            return obj;
        }
        password_label() {
            return this.$.$mol_locale.text('$mpk_tss_login_password_label');
        }
        password(val) {
            if (val !== undefined)
                return val;
            return "";
        }
        Password() {
            const obj = new this.$.$mol_string();
            obj.value = (val) => this.password(val);
            obj.type = () => "password";
            return obj;
        }
        Password_field() {
            const obj = new this.$.$mol_form_field();
            obj.name = () => this.password_label();
            obj.control = () => this.Password();
            return obj;
        }
        submit_label() {
            return this.$.$mol_locale.text('$mpk_tss_login_submit_label');
        }
        event_submit(val) {
            if (val !== undefined)
                return val;
            return null;
        }
        submit_blocked() {
            return false;
        }
        Submit() {
            const obj = new this.$.$mol_button_major();
            obj.sub = () => [
                this.submit_label()
            ];
            obj.event_click = (val) => this.event_submit(val);
            obj.disabled = () => this.submit_blocked();
            return obj;
        }
        Form() {
            const obj = new this.$.$mol_form();
            obj.form_fields = () => [
                this.Login_field(),
                this.Password_field()
            ];
            obj.buttons = () => [
                this.Submit()
            ];
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mpk_tss_login.prototype, "submit", null);
    __decorate([
        $mol_mem
    ], $mpk_tss_login.prototype, "login", null);
    __decorate([
        $mol_mem
    ], $mpk_tss_login.prototype, "Login", null);
    __decorate([
        $mol_mem
    ], $mpk_tss_login.prototype, "Login_field", null);
    __decorate([
        $mol_mem
    ], $mpk_tss_login.prototype, "password", null);
    __decorate([
        $mol_mem
    ], $mpk_tss_login.prototype, "Password", null);
    __decorate([
        $mol_mem
    ], $mpk_tss_login.prototype, "Password_field", null);
    __decorate([
        $mol_mem
    ], $mpk_tss_login.prototype, "event_submit", null);
    __decorate([
        $mol_mem
    ], $mpk_tss_login.prototype, "Submit", null);
    __decorate([
        $mol_mem
    ], $mpk_tss_login.prototype, "Form", null);
    $.$mpk_tss_login = $mpk_tss_login;
})($ || ($ = {}));
//mpk/tss/login/-view.tree/login.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mpk_tss_login extends $.$mpk_tss_login {
            event_submit() {
                this.submit(true);
            }
        }
        $$.$mpk_tss_login = $mpk_tss_login;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mpk/tss/login/login.view.ts
;
"use strict";
var $;
(function ($) {
    class $mpk_tss extends $mol_view {
        title() {
            return "Terminal № %terminal_number | Traffic security system";
        }
        attr() {
            return {
                mol_theme: this.theme()
            };
        }
        terminal_text() {
            return this.$.$mol_locale.text('$mpk_tss_terminal_text');
        }
        sub() {
            return [
                this.Head(),
                this.Body()
            ];
        }
        theme() {
            return "$mol_theme_light";
        }
        terminal_formatted_label() {
            return "";
        }
        Terminal_link() {
            const obj = new this.$.$mol_button_minor();
            obj.enabled = () => false;
            obj.sub = () => [
                this.terminal_formatted_label()
            ];
            return obj;
        }
        Head() {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.Terminal_link(),
                this.Logged_user()
            ];
            return obj;
        }
        Logged_user() {
            return this.Body().Logged_user();
        }
        Body() {
            const obj = new this.$.$mpk_tss_main();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mpk_tss.prototype, "Terminal_link", null);
    __decorate([
        $mol_mem
    ], $mpk_tss.prototype, "Head", null);
    __decorate([
        $mol_mem
    ], $mpk_tss.prototype, "Body", null);
    $.$mpk_tss = $mpk_tss;
    class $mpk_tss_main extends $mol_book {
        Logged_user() {
            return null;
        }
        User_link() {
            const obj = new this.$.$mol_button_minor();
            obj.event_click = (event) => this.logout_click(event);
            obj.sub = () => [
                this.User_email(),
                this.User_signout()
            ];
            return obj;
        }
        Menu_item(id) {
            const obj = new this.$.$mpk_tss_link();
            obj.arg = () => this.menu_page_arg(id);
            obj.title = () => this.menu_page_title(id);
            obj.copy_params = () => [
                "login"
            ];
            return obj;
        }
        menu_pages() {
            return {
                summary: this.Summary(),
                software: this.Software(),
                pereferial: this.Pereferial(),
                sensors: this.Sensors(),
                reports: this.Reports()
            };
        }
        common_tools() {
            return [
                this.Details_close()
            ];
        }
        pages() {
            return [
                this.Sidebar(),
                this.Summary(),
                this.menu_pages(),
                this.details()
            ];
        }
        Placeholder() {
            const obj = new this.$.$mpk_tss_placeholder();
            obj.title = () => "";
            return obj;
        }
        logout_click(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        logged_email() {
            return "";
        }
        User_email() {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.logged_email()
            ];
            return obj;
        }
        User_signout() {
            const obj = new this.$.$mpk_tss_icon_exit_to_app();
            return obj;
        }
        menu_page_arg(id) {
            return {};
        }
        menu_page_title(id) {
            return "";
        }
        Summary() {
            const obj = new this.$.$mpk_tss_summary();
            obj.body_scroll_top = (event) => this.event_front_up(event);
            return obj;
        }
        Software() {
            const obj = new this.$.$mpk_tss_software();
            obj.tools = () => this.common_tools();
            obj.body_scroll_top = (event) => this.event_front_up(event);
            return obj;
        }
        Pereferial() {
            const obj = new this.$.$mpk_tss_pereferial_list();
            obj.tools = () => this.common_tools();
            obj.body_scroll_top = (event) => this.event_front_up(event);
            return obj;
        }
        Sensors() {
            const obj = new this.$.$mpk_tss_sensors();
            obj.tools = () => this.common_tools();
            obj.body_scroll_top = (event) => this.event_front_up(event);
            return obj;
        }
        Reports() {
            const obj = new this.$.$mpk_tss_reports_train_list();
            obj.tools = () => this.common_tools();
            obj.body_scroll_top = (event) => this.event_front_up(event);
            return obj;
        }
        Details_close_icon() {
            const obj = new this.$.$mol_icon_cross();
            return obj;
        }
        Details_close() {
            const obj = new this.$.$mpk_tss_link();
            obj.arg = () => ({
                page: null
            });
            obj.sub = () => [
                this.Details_close_icon()
            ];
            obj.copy_params = () => [
                "login"
            ];
            return obj;
        }
        body_scroll_top(val) {
            if (val !== undefined)
                return val;
            return null;
        }
        Logo() {
            const obj = new this.$.$mol_image();
            obj.uri = () => "mpk/tss/tss_logo.svg";
            obj.event = () => ({
                click: (val) => this.body_scroll_top(val)
            });
            return obj;
        }
        sidebar_title() {
            return this.$.$mol_locale.text('$mpk_tss_main_sidebar_title');
        }
        login_submit(v) {
            if (v !== undefined)
                return v;
            return false;
        }
        Login() {
            const obj = new this.$.$mpk_tss_login();
            obj.submit = (v) => this.login_submit(v);
            return obj;
        }
        menu_items() {
            return [];
        }
        Menu() {
            const obj = new this.$.$mol_list();
            obj.rows = () => this.menu_items();
            return obj;
        }
        page_body() {
            return [
                this.Login(),
                this.Menu()
            ];
        }
        copyright() {
            return this.$.$mol_locale.text('$mpk_tss_main_copyright');
        }
        Foot_text() {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.copyright()
            ];
            return obj;
        }
        Foot_content() {
            const obj = new this.$.$mol_row();
            obj.sub = () => [
                this.Foot_text()
            ];
            return obj;
        }
        Sidebar() {
            const obj = new this.$.$mol_page();
            obj.head = () => [
                this.Logo()
            ];
            obj.title = () => this.sidebar_title();
            obj.minimal_width = () => 230;
            obj.body = () => this.page_body();
            obj.foot = () => [
                this.Foot_content()
            ];
            return obj;
        }
        details() {
            return null;
        }
    }
    __decorate([
        $mol_mem
    ], $mpk_tss_main.prototype, "User_link", null);
    __decorate([
        $mol_mem_key
    ], $mpk_tss_main.prototype, "Menu_item", null);
    __decorate([
        $mol_mem
    ], $mpk_tss_main.prototype, "Placeholder", null);
    __decorate([
        $mol_mem
    ], $mpk_tss_main.prototype, "logout_click", null);
    __decorate([
        $mol_mem
    ], $mpk_tss_main.prototype, "User_email", null);
    __decorate([
        $mol_mem
    ], $mpk_tss_main.prototype, "User_signout", null);
    __decorate([
        $mol_mem
    ], $mpk_tss_main.prototype, "Summary", null);
    __decorate([
        $mol_mem
    ], $mpk_tss_main.prototype, "Software", null);
    __decorate([
        $mol_mem
    ], $mpk_tss_main.prototype, "Pereferial", null);
    __decorate([
        $mol_mem
    ], $mpk_tss_main.prototype, "Sensors", null);
    __decorate([
        $mol_mem
    ], $mpk_tss_main.prototype, "Reports", null);
    __decorate([
        $mol_mem
    ], $mpk_tss_main.prototype, "Details_close_icon", null);
    __decorate([
        $mol_mem
    ], $mpk_tss_main.prototype, "Details_close", null);
    __decorate([
        $mol_mem
    ], $mpk_tss_main.prototype, "body_scroll_top", null);
    __decorate([
        $mol_mem
    ], $mpk_tss_main.prototype, "Logo", null);
    __decorate([
        $mol_mem
    ], $mpk_tss_main.prototype, "login_submit", null);
    __decorate([
        $mol_mem
    ], $mpk_tss_main.prototype, "Login", null);
    __decorate([
        $mol_mem
    ], $mpk_tss_main.prototype, "Menu", null);
    __decorate([
        $mol_mem
    ], $mpk_tss_main.prototype, "Foot_text", null);
    __decorate([
        $mol_mem
    ], $mpk_tss_main.prototype, "Foot_content", null);
    __decorate([
        $mol_mem
    ], $mpk_tss_main.prototype, "Sidebar", null);
    $.$mpk_tss_main = $mpk_tss_main;
    class $mpk_tss_placeholder extends $mol_page {
        attr() {
            return {
                ...super.attr(),
                tabindex: null
            };
        }
        title() {
            return "";
        }
        tools() {
            return [];
        }
        body() {
            return [
                this.Image()
            ];
        }
        Image() {
            const obj = new this.$.$mol_image();
            obj.uri = () => "mpk/tss/placeholder.svg";
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mpk_tss_placeholder.prototype, "Image", null);
    $.$mpk_tss_placeholder = $mpk_tss_placeholder;
})($ || ($ = {}));
//mpk/tss/-view.tree/tss.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mpk_tss_domain_terminal {
        static current() { return new this; }
        id() { throw new $mpk_tss_todo; }
    }
    __decorate([
        $mol_mem
    ], $mpk_tss_domain_terminal, "current", null);
    $.$mpk_tss_domain_terminal = $mpk_tss_domain_terminal;
})($ || ($ = {}));
//mpk/tss/domain/terminal/terminal.ts
;
"use strict";
var $;
(function ($) {
    function $mpk_tss_stub_id() {
        return $mol_stub_code();
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
    function $mpk_tss_stub_pick_random(list, count_max = 1) {
        const result = new Set();
        while (count_max > 0) {
            const index = Math.floor(Math.random() * list.length);
            result.add(list[index]);
            count_max--;
        }
        return result;
    }
    $.$mpk_tss_stub_pick_random = $mpk_tss_stub_pick_random;
    function $mpk_tss_stub_number(min = 20, max = 80) {
        return min + Math.floor(Math.random() * (max - min));
    }
    $.$mpk_tss_stub_number = $mpk_tss_stub_number;
})($ || ($ = {}));
//mpk/tss/stub/stub.ts
;
"use strict";
var $;
(function ($) {
    class $mpk_tss_domain_terminal_mock extends $mpk_tss_domain_terminal {
        id() {
            return String($mpk_tss_stub_number(1000, 9000));
        }
    }
    __decorate([
        $mol_mem
    ], $mpk_tss_domain_terminal_mock.prototype, "id", null);
    $.$mpk_tss_domain_terminal_mock = $mpk_tss_domain_terminal_mock;
})($ || ($ = {}));
//mpk/tss/domain/terminal/mock/mock.ts
;
"use strict";
var $;
(function ($) {
    class $mpk_tss_domain_user extends $mol_object {
        static current() { return new this; }
        email(next) { throw new $mpk_tss_todo; }
        password(next) { throw new $mpk_tss_todo; }
        logged() { throw new $mpk_tss_todo; }
        login() { throw new $mpk_tss_todo; }
        logout() { throw new $mpk_tss_todo; }
    }
    __decorate([
        $mol_mem
    ], $mpk_tss_domain_user, "current", null);
    $.$mpk_tss_domain_user = $mpk_tss_domain_user;
})($ || ($ = {}));
//mpk/tss/domain/user/user.ts
;
"use strict";
var $;
(function ($) {
    class $mpk_tss_domain_user_mock extends $mpk_tss_domain_user {
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
        $mol_mem
    ], $mpk_tss_domain_user_mock.prototype, "email", null);
    __decorate([
        $mol_mem
    ], $mpk_tss_domain_user_mock.prototype, "password", null);
    $.$mpk_tss_domain_user_mock = $mpk_tss_domain_user_mock;
})($ || ($ = {}));
//mpk/tss/domain/user/mock/mock.ts
;
"use strict";
var $;
(function ($) {
    class $mpk_tss_pereferial_domain_mock_units extends $mpk_tss_pereferial_domain_units {
        max_units() { return 4; }
        unit(id) {
            return $mpk_tss_pereferial_domain_mock_ups.make({ id: $mol_const(id) });
        }
        units_all() {
            return $mpk_tss_stub_ids(this.max_units())
                .map(id => this.unit(id))
                .sort((unitA, unitB) => {
                const a = unitA.status();
                const b = unitB.status();
                const aw = $mpk_tss_pereferial_domain_status_weights[a];
                const bw = $mpk_tss_pereferial_domain_status_weights[b];
                if (aw > bw)
                    return 1;
                if (aw < bw)
                    return -1;
                return 0;
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
        $mol_mem_key
    ], $mpk_tss_pereferial_domain_mock_units.prototype, "unit", null);
    __decorate([
        $mol_mem
    ], $mpk_tss_pereferial_domain_mock_units.prototype, "units_all", null);
    __decorate([
        $mol_mem
    ], $mpk_tss_pereferial_domain_mock_units.prototype, "units", null);
    $.$mpk_tss_pereferial_domain_mock_units = $mpk_tss_pereferial_domain_mock_units;
    class $mpk_tss_pereferial_domain_mock_ups extends $mpk_tss_pereferial_domain_ups {
        status() {
            return $mpk_tss_pereferial_domain_mock_stub_status();
        }
        name() {
            const firm = $mol_array_lottery([
                'Shtil 1103L',
                'Shtil 1104M',
            ]);
            const number = $mol_array_lottery(['N1', 'N2', 'N3', 'N4']);
            return `${firm} ${number}`;
        }
        updated(next) {
            if (this.status() === $mpk_tss_pereferial_domain_status.unknown)
                return null;
            return $mol_stub_time(-60);
        }
        power_source() {
            if (this.status() === $mpk_tss_pereferial_domain_status.unknown)
                return null;
            return $mol_array_lottery(['linein', 'internal']);
        }
        voltage() {
            if (this.status() === $mpk_tss_pereferial_domain_status.unknown)
                return null;
            return $mpk_tss_stub_number(0, 250);
        }
        battery_level() {
            if (this.status() === $mpk_tss_pereferial_domain_status.unknown)
                return null;
            return $mpk_tss_stub_number(0, 100);
        }
        battery_time() {
            if (this.status() === $mpk_tss_pereferial_domain_status.unknown)
                return null;
            return new $mol_time_duration({ minute: $mpk_tss_stub_number(0, 300) });
        }
    }
    __decorate([
        $mol_memo.method
    ], $mpk_tss_pereferial_domain_mock_ups.prototype, "status", null);
    __decorate([
        $mol_memo.method
    ], $mpk_tss_pereferial_domain_mock_ups.prototype, "name", null);
    __decorate([
        $mol_mem
    ], $mpk_tss_pereferial_domain_mock_ups.prototype, "updated", null);
    __decorate([
        $mol_memo.method
    ], $mpk_tss_pereferial_domain_mock_ups.prototype, "power_source", null);
    __decorate([
        $mol_memo.method
    ], $mpk_tss_pereferial_domain_mock_ups.prototype, "voltage", null);
    __decorate([
        $mol_memo.method
    ], $mpk_tss_pereferial_domain_mock_ups.prototype, "battery_level", null);
    __decorate([
        $mol_memo.method
    ], $mpk_tss_pereferial_domain_mock_ups.prototype, "battery_time", null);
    function $mpk_tss_pereferial_domain_mock_stub_status() {
        return $mol_array_lottery([
            'ready', 'error', 'not_responding', 'inactive', 'unknown'
        ]);
    }
})($ || ($ = {}));
//mpk/tss/pereferial/domain/mock/mock.ts
;
"use strict";
var $;
(function ($) {
    class $mpk_tss_reports_domain_mock_trains extends $mpk_tss_reports_domain_trains {
        max_reports() { return 10000; }
        report(id) {
            return this.reports_all().find(report => report.id() === id) || this.reports_all()[0];
        }
        reports_all() {
            return $mpk_tss_stub_ids(this.max_reports())
                .map(id => $mpk_tss_reports_domain_mock_report.make({ id: $mol_const(id) }))
                .sort((r1, r2) => {
                if (r1.started() > r2.started())
                    return -1;
                if (r1.started() < r2.started())
                    return 1;
                return 0;
            });
        }
        reports() {
            const filter_number = this.filter_number()?.toUpperCase();
            const filter_resolution = this.filter_resolution();
            const result = this.reports_all()
                .filter(report => {
                if (filter_number && report.train_number().toUpperCase().indexOf(filter_number) === -1) {
                    return false;
                }
                if (filter_resolution && report.resolution() !== filter_resolution) {
                    return false;
                }
                return true;
            });
            return result;
        }
    }
    __decorate([
        $mol_memo.method
    ], $mpk_tss_reports_domain_mock_trains.prototype, "report", null);
    __decorate([
        $mol_memo.method
    ], $mpk_tss_reports_domain_mock_trains.prototype, "reports_all", null);
    __decorate([
        $mol_mem
    ], $mpk_tss_reports_domain_mock_trains.prototype, "reports", null);
    $.$mpk_tss_reports_domain_mock_trains = $mpk_tss_reports_domain_mock_trains;
    class $mpk_tss_reports_domain_mock_report extends $mpk_tss_reports_domain_report {
        train_number() {
            return '' + $mpk_tss_stub_number(1000, 9000) + '-' + $mpk_tss_stub_number(1000, 9000);
        }
        send_count() {
            return $mpk_tss_stub_number(0, 10);
        }
        resolution() {
            return $mol_array_lottery([
                $mpk_tss_reports_domain_resolution.warning,
                $mpk_tss_reports_domain_resolution.success
            ]);
        }
        delivery() {
            return $mpk_tss_reports_domain_mock_stub_report_status();
        }
        average_speed() {
            return $mpk_tss_stub_number(50, 55);
        }
        started() {
            return $mol_stub_time(-10);
        }
        carriages_store() {
            return $mpk_tss_reports_domain_mock_carriages.make({
                parent_resolution: () => this.resolution(),
                train: $mol_const(this),
            });
        }
        carriages(config) {
            return $mpk_tss_reports_domain_mock_carriages.make({
                ...config,
                parent_resolution: () => this.carriages_store().parent_resolution(),
                carriages_all: () => this.carriages_store().carriages_all(),
                carriage: (id) => this.carriages_store().carriage(id),
            });
        }
    }
    __decorate([
        $mol_memo.method
    ], $mpk_tss_reports_domain_mock_report.prototype, "train_number", null);
    __decorate([
        $mol_memo.method
    ], $mpk_tss_reports_domain_mock_report.prototype, "send_count", null);
    __decorate([
        $mol_memo.method
    ], $mpk_tss_reports_domain_mock_report.prototype, "resolution", null);
    __decorate([
        $mol_memo.method
    ], $mpk_tss_reports_domain_mock_report.prototype, "delivery", null);
    __decorate([
        $mol_memo.method
    ], $mpk_tss_reports_domain_mock_report.prototype, "average_speed", null);
    __decorate([
        $mol_memo.method
    ], $mpk_tss_reports_domain_mock_report.prototype, "started", null);
    __decorate([
        $mol_memo.method
    ], $mpk_tss_reports_domain_mock_report.prototype, "carriages_store", null);
    __decorate([
        $mol_memo.method
    ], $mpk_tss_reports_domain_mock_report.prototype, "carriages", null);
    class $mpk_tss_reports_domain_mock_carriages extends $mpk_tss_reports_domain_carriages {
        parent_resolution() { throw new $mpk_tss_todo; }
        train() { throw new $mpk_tss_todo; }
        carriages_all() {
            const range = $mpk_tss_stub_ids($mpk_tss_stub_number(30, 45));
            const resolution = this.parent_resolution();
            const error_count = resolution !== $mpk_tss_reports_domain_resolution.success ? range.length : 0;
            const error_items = $mpk_tss_stub_pick_random(range, error_count);
            return range.map((id, index) => {
                return $mpk_tss_reports_domain_mock_carriage.make({
                    id: $mol_const(id),
                    resolution: $mol_const(error_items.has(id) ? this.parent_resolution() : $mpk_tss_reports_domain_resolution.success),
                    train: $mol_const(this.train()),
                    place: $mol_const(index + 1),
                });
            });
        }
        carriages() {
            const filter_number = this.filter_number()?.toUpperCase();
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
        $mol_memo.method
    ], $mpk_tss_reports_domain_mock_carriages.prototype, "parent_resolution", null);
    __decorate([
        $mol_memo.method
    ], $mpk_tss_reports_domain_mock_carriages.prototype, "train", null);
    __decorate([
        $mol_memo.method
    ], $mpk_tss_reports_domain_mock_carriages.prototype, "carriages_all", null);
    __decorate([
        $mol_mem
    ], $mpk_tss_reports_domain_mock_carriages.prototype, "carriages", null);
    class $mpk_tss_reports_domain_mock_carriage extends $mpk_tss_reports_domain_carriage {
        place() {
            return $mpk_tss_stub_number(1, 50);
        }
        resolution() {
            throw new $mpk_tss_todo;
        }
        carriage_number() {
            return '' + $mpk_tss_stub_number(1000, 9000) + '-' + $mpk_tss_stub_number(1000, 9000);
        }
        load() {
            return $mpk_tss_reports_domain_mock_stub_carriage_load();
        }
        type() {
            return $mpk_tss_reports_domain_mock_stub_carriage_type();
        }
        length() {
            return $mpk_tss_stub_number(65, 85);
        }
        total_weight() {
            return $mpk_tss_stub_number(65, 85) * 1000;
        }
        measured_speed() {
            return $mpk_tss_stub_number(50, 55);
        }
        violation() {
            if (this.resolution() == $mpk_tss_reports_domain_resolution.success)
                return null;
            return this.axis().reduce((violation, axle) => {
                if (axle.violation() !== null) {
                    return axle.violation();
                }
                return violation;
            }, null);
        }
        axis() {
            const range = [1, 2, 3, 4];
            const resolution = this.resolution();
            const error_count = resolution !== $mpk_tss_reports_domain_resolution.success ? range.length : 0;
            const error_items = $mpk_tss_stub_pick_random(range, error_count);
            return range.map(index => {
                return $mpk_tss_reports_domain_mock_axle.make({
                    id: $mol_const(String(index)),
                    resolution: $mol_const(error_items.has(index)
                        ? resolution
                        : $mpk_tss_reports_domain_resolution.success),
                    axle_number: $mol_const(index),
                });
            });
        }
        axle(id) {
            return this.axis().find(axle => axle.id() === id);
        }
    }
    __decorate([
        $mol_memo.method
    ], $mpk_tss_reports_domain_mock_carriage.prototype, "place", null);
    __decorate([
        $mol_memo.method
    ], $mpk_tss_reports_domain_mock_carriage.prototype, "resolution", null);
    __decorate([
        $mol_memo.method
    ], $mpk_tss_reports_domain_mock_carriage.prototype, "carriage_number", null);
    __decorate([
        $mol_memo.method
    ], $mpk_tss_reports_domain_mock_carriage.prototype, "load", null);
    __decorate([
        $mol_memo.method
    ], $mpk_tss_reports_domain_mock_carriage.prototype, "type", null);
    __decorate([
        $mol_memo.method
    ], $mpk_tss_reports_domain_mock_carriage.prototype, "length", null);
    __decorate([
        $mol_memo.method
    ], $mpk_tss_reports_domain_mock_carriage.prototype, "total_weight", null);
    __decorate([
        $mol_memo.method
    ], $mpk_tss_reports_domain_mock_carriage.prototype, "measured_speed", null);
    __decorate([
        $mol_memo.method
    ], $mpk_tss_reports_domain_mock_carriage.prototype, "violation", null);
    __decorate([
        $mol_memo.method
    ], $mpk_tss_reports_domain_mock_carriage.prototype, "axis", null);
    __decorate([
        $mol_memo.method
    ], $mpk_tss_reports_domain_mock_carriage.prototype, "axle", null);
    class $mpk_tss_reports_domain_mock_axle extends $mpk_tss_reports_domain_axle {
        resolution() {
            throw new $mpk_tss_todo;
        }
        violation() {
            if (this.resolution() === $mpk_tss_reports_domain_resolution.success)
                return null;
            return this.wheels().reduce((violation, wheel) => {
                if (wheel.violation() !== null) {
                    return wheel.violation();
                }
                return violation;
            }, null);
        }
        wheels() {
            const range = [1, 2];
            const resolution = this.resolution();
            const error_count = resolution !== $mpk_tss_reports_domain_resolution.success ? range.length : 0;
            const error_items = $mpk_tss_stub_pick_random(range, error_count);
            return range.map(id => $mpk_tss_reports_domain_mock_wheel.make({
                id: $mol_const('' + id),
                resolution: $mol_const(error_items.has(id)
                    ? resolution
                    : $mpk_tss_reports_domain_resolution.success),
            }));
        }
        wheel(id) {
            return this.wheels().find(wheel => wheel.id() === id) || this.wheels()[0];
        }
    }
    __decorate([
        $mol_memo.method
    ], $mpk_tss_reports_domain_mock_axle.prototype, "resolution", null);
    __decorate([
        $mol_memo.method
    ], $mpk_tss_reports_domain_mock_axle.prototype, "violation", null);
    __decorate([
        $mol_memo.method
    ], $mpk_tss_reports_domain_mock_axle.prototype, "wheels", null);
    __decorate([
        $mol_memo.method
    ], $mpk_tss_reports_domain_mock_axle.prototype, "wheel", null);
    class $mpk_tss_reports_domain_mock_wheel extends $mpk_tss_reports_domain_wheel {
        resolution() {
            throw new $mpk_tss_todo;
        }
        violation() {
            if (this.resolution() === $mpk_tss_reports_domain_resolution.success)
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
        $mol_memo.method
    ], $mpk_tss_reports_domain_mock_wheel.prototype, "resolution", null);
    __decorate([
        $mol_memo.method
    ], $mpk_tss_reports_domain_mock_wheel.prototype, "violation", null);
    __decorate([
        $mol_memo.method
    ], $mpk_tss_reports_domain_mock_wheel.prototype, "forces", null);
    function $mpk_tss_reports_domain_mock_stub_carriage_type() {
        return $mol_array_lottery([
            $mpk_tss_reports_domain_carriage_type.tank,
            $mpk_tss_reports_domain_carriage_type.hopper,
            $mpk_tss_reports_domain_carriage_type.flatcar,
            $mpk_tss_reports_domain_carriage_type.covered,
        ]);
    }
    function $mpk_tss_reports_domain_mock_stub_violation() {
        return $mol_array_lottery([
            $mpk_tss_reports_domain_violation.slider,
            $mpk_tss_reports_domain_violation.vyscherbiny,
            $mpk_tss_reports_domain_violation.sink,
            $mpk_tss_reports_domain_violation.dent,
        ]);
    }
    function $mpk_tss_reports_domain_mock_stub_report_status() {
        return $mol_array_lottery([
            $mpk_tss_reports_domain_delivery.preparing,
            $mpk_tss_reports_domain_delivery.sending,
            $mpk_tss_reports_domain_delivery.sent,
            $mpk_tss_reports_domain_delivery.error,
        ]);
    }
    function $mpk_tss_reports_domain_mock_stub_carriage_load() {
        return $mol_array_lottery([
            $mpk_tss_reports_domain_load.free,
            $mpk_tss_reports_domain_load.full,
        ]);
    }
})($ || ($ = {}));
//mpk/tss/reports/domain/mock/mock.ts
;
var $node = $node || {} ; $node[ "/mpk/tss/placeholder.svg" ] = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTEgNTExIj4KICA8ZyBmaWxsPSIjNkM5MUNGIiBzdHJva2U9IiM2QzkxQ0YiPgogICAgPHBhdGggZD0iTTQ4Ny41IDI0aC00NjRDMTAuNSAyNCAwIDM0LjUgMCA0Ny41djMwNGMwIDEzIDEwLjUgMjMuNSAyMy41IDIzLjVoMTU4TDE3MCA0MTZoLTM0LjNjLTQgMC03LjUgMy40LTcuNSA3LjVzMy40IDcuNSA3LjUgNy41aDEzNmM0IDAgNy41LTMuNCA3LjUtNy41cy0zLjQtNy41LTcuNS03LjVoLTg2bDExLjctNDFoNzQuM2M0IDAgNy41LTMuNCA3LjUtNy41cy0zLjQtNy41LTcuNS03LjVoLTI0OGMtNC43IDAtOC41LTMuOC04LjUtOC41di0zMDRjMC00LjcgMy44LTguNSA4LjUtOC41aDQ2NGM0LjcgMCA4LjUgMy44IDguNSA4LjV2MzA0YzAgNCAzLjQgNy41IDcuNSA3LjVzNy41LTMuNCA3LjUtNy41di0zMDRjMC0xMy0xMC41LTIzLjUtMjMuNS0yMy41eiIvPgogICAgPHBhdGggZD0iTTQ3MS41IDU2aC00MzJjLTQgMC03LjUgMy40LTcuNSA3LjV2MjcyYzAgNCAzLjQgNy41IDcuNSA3LjVoMjMyYzQgMCA3LjUtMy40IDcuNS03LjVzLTMuNC03LjUtNy41LTcuNUg0N1YxMzVoNDE3djMyLjVjMCA0IDMuNCA3LjUgNy41IDcuNXM3LjUtMy40IDcuNS03LjV2LTEwNGMwLTQtMy40LTcuNS03LjUtNy41ek00NyAxMjBWNzFoNDE3djQ5SDQ3eiIvPgogICAgPHBhdGggZD0iTTM5MS41IDg4aC0yNDBjLTQgMC03LjUgMy40LTcuNSA3LjVzMy40IDcuNSA3LjUgNy41aDI0MGM0IDAgNy41LTMuNCA3LjUtNy41cy0zLjQtNy41LTcuNS03LjV6TTQzOS41IDg4aC0xNmMtNCAwLTcuNSAzLjQtNy41IDcuNXMzLjQgNy41IDcuNSA3LjVoMTZjNCAwIDcuNS0zLjQgNy41LTcuNXMtMy40LTcuNS03LjUtNy41ek03MS41IDg4Yy0yIDAtNCAuOC01LjMgMi4yLTEuNCAxLjQtMi4yIDMuMy0yLjIgNS4zcy44IDQgMi4yIDUuM2MxLjQgMS40IDMuMyAyLjIgNS4zIDIuMnM0LS44IDUuMy0yLjJjMS40LTEuNCAyLjItMy4zIDIuMi01LjNzLS44LTQtMi4yLTUuM2MtMS40LTEuNC0zLjMtMi4yLTUuMy0yLjJ6TTk1LjUgODhjLTIgMC00IC44LTUuMyAyLjItMS40IDEuNC0yLjIgMy4zLTIuMiA1LjNzLjggNCAyLjIgNS4zYzEuNCAxLjQgMy4zIDIuMiA1LjMgMi4yczQtLjggNS4zLTIuMmMxLjQtMS40IDIuMi0zLjMgMi4yLTUuM3MtLjgtNC0yLjItNS4zYy0xLjQtMS40LTMuMy0yLjItNS4zLTIuMnpNMTE5LjUgODhjLTIgMC00IC44LTUuMyAyLjItMS40IDEuNC0yLjIgMy4zLTIuMiA1LjNzLjggNCAyLjIgNS4zYzEuNCAxLjQgMy4zIDIuMiA1LjMgMi4yczQtLjggNS4zLTIuMmMxLjQtMS40IDIuMi0zLjMgMi4yLTUuM3MtLjgtNC0yLjItNS4zYy0xLjQtMS40LTMuMy0yLjItNS4zLTIuMnpNNDU1LjUgMTkyaC0xMzZjLTEzIDAtMjMuNSAxMC41LTIzLjUgMjMuNXYyNDhjMCAxMyAxMC41IDIzLjUgMjMuNSAyMy41aDEzNmMxMyAwIDIzLjUtMTAuNSAyMy41LTIzLjV2LTI0OGMwLTEzLTEwLjUtMjMuNS0yMy41LTIzLjV6TTMxMSAyMzloMTUzdjMzSDMxMXYtMzN6bTAgNDhoMTUzdjE1M0gzMTFWMjg3em04LjUtODBoMTM2YzQuNyAwIDguNSAzLjggOC41IDguNXY4LjVIMzExdi04LjVjMC00LjcgMy44LTguNSA4LjUtOC41em0xMzYgMjY1aC0xMzZjLTQuNyAwLTguNS0zLjgtOC41LTguNVY0NTVoMTUzdjguNWMwIDQuNy0zLjggOC41LTguNSA4LjV6Ii8+CiAgICA8cGF0aCBkPSJNNDE1LjUgMjQ4aC04OGMtNCAwLTcuNSAzLjQtNy41IDcuNXMzLjQgNy41IDcuNSA3LjVoODhjNCAwIDcuNS0zLjQgNy41LTcuNXMtMy40LTcuNS03LjUtNy41ek00NDcuNSAyNDhoLThjLTQgMC03LjUgMy40LTcuNSA3LjVzMy40IDcuNSA3LjUgNy41aDhjNCAwIDcuNS0zLjQgNy41LTcuNXMtMy40LTcuNS03LjUtNy41ek04Ny41IDE2MEM3OSAxNjAgNzIgMTY3IDcyIDE3NS41djEwNGMwIDguNSA3IDE1LjUgMTUuNSAxNS41aDEyMGM4LjUgMCAxNS41LTcgMTUuNS0xNS41di0xMDRjMC04LjUtNy0xNS41LTE1LjUtMTUuNWgtMTIwem03MS4zIDY3LjVMMjA4IDE4NHY4N2wtNDkuMi00My41em0tMTEuMy0xMEw5OS4zIDE3NWg5Ni40bC00OC4yIDQyLjV6TTg3IDI3MXYtODdsNDkuMiA0My41TDg3IDI3MXptNjAuNS0zMy41bDQ4LjIgNDIuNUg5OS4zbDQ4LjItNDIuNXpNMjU1LjUgMTc1aDE4NGM0IDAgNy41LTMuNCA3LjUtNy41cy0zLjQtNy41LTcuNS03LjVoLTE4NGMtNCAwLTcuNSAzLjQtNy41IDcuNXMzLjQgNy41IDcuNSA3LjV6TTI3MS41IDIwMGgtMTZjLTQgMC03LjUgMy40LTcuNSA3LjVzMy40IDcuNSA3LjUgNy41aDE2YzQgMCA3LjUtMy40IDcuNS03LjVzLTMuNC03LjUtNy41LTcuNXpNMjcxLjUgMjQwaC0xNmMtNCAwLTcuNSAzLjQtNy41IDcuNXMzLjQgNy41IDcuNSA3LjVoMTZjNCAwIDcuNS0zLjQgNy41LTcuNXMtMy40LTcuNS03LjUtNy41ek0yNzEuNSAyODBoLTE2Yy00IDAtNy41IDMuNC03LjUgNy41czMuNCA3LjUgNy41IDcuNWgxNmM0IDAgNy41LTMuNCA3LjUtNy41cy0zLjQtNy41LTcuNS03LjV6TTQzMS41IDMwNGgtODhjLTguNSAwLTE1LjUgNy0xNS41IDE1LjV2NTZjMCA4LjUgNyAxNS41IDE1LjUgMTUuNWg4OGM4LjUgMCAxNS41LTcgMTUuNS0xNS41di01NmMwLTguNS03LTE1LjUtMTUuNS0xNS41em0tMzAgNDMuNUw0MzIgMzI4djM5bC0zMC41LTE5LjV6bS0xNC05TDM1Ni43IDMxOWg2MS42bC0zMC44IDE5LjZ6TTM0MyAzNjd2LTM5bDMwLjUgMTkuNUwzNDMgMzY3em00NC41LTEwLjZsMzAuOCAxOS42aC02MS42bDMwLjgtMTkuNnpNNDM5LjUgNDA4aC0xMDRjLTQgMC03LjUgMy40LTcuNSA3LjVzMy40IDcuNSA3LjUgNy41aDEwNGM0IDAgNy41LTMuNCA3LjUtNy41cy0zLjQtNy41LTcuNS03LjV6Ii8+CiAgPC9nPgo8L3N2Zz4K"

;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mpk/tss/theme.css", "[mpk_theme=\"$mpk_theme_base\"] , :root {\n\t--mpk_theme_status_bg_error: hsl(0, 50%, 50%);\n\t--mpk_theme_status_bg_warning: hsl(46, 73%, 55%);\n\t--mpk_theme_status_bg_success: hsl(140, 50%, 50%);\n\t--mpk_theme_status_bg_inactive:hsl(225, 2%, 60%);\n\t--mpk_theme_status_bg_unknown: hsl(0, 1%, 60%);\n\n\t/* --mpk_theme_status_text: hsl(var(--mol_theme_text)); */\n\t--mpk_theme_status_control: var(--mol_theme_field);\n\t--mpk_theme_status_text: black;\n\n\t--mpk_theme_status_text_error: hsl(0, 50%, 50%);\n\t--mpk_theme_status_text_warning: hsl(46, 73%, 55%);\n\t--mpk_theme_status_text_success: hsl(140, 50%, 50%);\n\t--mpk_theme_status_text_inactive:hsl(225, 2%, 60%);\n\t--mpk_theme_status_text_unknown: hsl(0, 1%, 60%);\n}\n");
})($ || ($ = {}));
//mpk/tss/-css/theme.css.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mpk/tss/tss.view.css", "[mpk_tss_main] * [mol_string] {\n\t/* padding: 0.45rem 1rem; */\n}\n\n[mol_icon] {\n\tstroke: none;\n}\n\n[mpk_tss] {\n\tflex-direction: column;\n\tdisplay: flex;\n}\n\n[mpk_tss_head] {\n\tdisplay: flex;\n\tpadding: 0;\n\tline-height: 2;\n}\n\n[mpk_tss_head] > [mol_button] {\n\tpadding: 0 .5rem;\n}\n\n[mpk_tss_body] {\n\tflex: 1000 1 auto;\n}\n\n[mpk_tss_main_body_content] {\n\theight: 100%;\n}\n\n[mpk_tss_main_placeholder] {\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n}\n\n[mpk_tss_main_foot_content] {\n\tjustify-content: space-between;\n}\n\n[mpk_tss_main_foot_text] {\n\tmax-width: 20rem;\n}\n\n[mpk_tss_main_logo] {\n\tcolor: white;\n\tbox-shadow: none;\n\theight: 2.5rem;\n\talign-self: center;\n\tflex: none;\n}\n\n[mpk_tss_main_sidebar] {\n\tflex: 0 0 auto;\n\tbackground-color: var(--mol_theme_line);\n}\n\n[mpk_tss_main_sidebar_foot] {\n\tbackground-color: inherit;\n\tfont-size: 0.9rem;\n\tcolor: var(--mol_theme_shade);\n}\n\n[mpk_tss_main_menu] {\n\tpadding: .5rem 0 0;\n\tdisplay: flex;\n\tflex-direction: column;\n}\n\n[mpk_tss_main_user_email] {\n\tmargin-right: 0.5rem;\n}\n\n[mpk_tss_main_placeholder] {\n\tfont-size: 1em;\n\tpadding: 0;\n\talign-items: stretch;\n\tbackground: none;\n\tflex: 1000 1000 auto;\n\tposition: relative;\n\tanimation: none !important;\n}\n\n[mpk_tss_placeholder_head] {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-between;\n    flex: 0 0 auto;\n    position: relative;\n    margin: 0;\n    min-height: calc( 1.5em + 1rem );\n    padding: .5rem;\t\n}\n\n[mol_view][mpk_tss_placeholder_body] {\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: space-evenly;\n\talign-items: center;\n\tpadding: 1rem;\n\tbackground-color: rgba(238, 238, 238, 0.199);\n}\n\n[mpk_tss_placeholder_image] {\n\twidth: 25%;\n\tbox-shadow: none;\n\topacity: .25;\n}\n\n[mpk_tss_placeholder_links] {\n\tflex: 0 0 auto;\n\tdisplay: flex;\n\tflex-wrap: wrap;\n}\n");
})($ || ($ = {}));
//mpk/tss/-css/tss.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mpk_tss_locale extends $mol_locale {
            static lang_default() {
                return 'ru';
            }
        }
        __decorate([
            $mol_mem
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
                    $mpk_tss_domain_terminal: $mpk_tss_domain_terminal_mock,
                    $mol_locale: $mpk_tss_locale,
                    $mpk_tss_domain_user: $mpk_tss_domain_user_mock,
                    $mpk_tss_pereferial_domain_units: $mpk_tss_pereferial_domain_mock_units,
                    $mpk_tss_reports_domain_trains: $mpk_tss_reports_domain_mock_trains,
                });
            }
        }
        __decorate([
            $mol_memo.field
        ], $mpk_tss.prototype, "$", null);
        $$.$mpk_tss = $mpk_tss;
        class $mpk_tss_main extends $.$mpk_tss_main {
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
                return next ?? false;
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
            page_body() {
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
            $mol_mem
        ], $mpk_tss_main.prototype, "page_id", null);
        $$.$mpk_tss_main = $mpk_tss_main;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mpk/tss/tss.view.ts
;
var $node = $node || {} ; $node[ "/mpk/tss/tss_logo.svg" ] = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIgogICB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIKICAgd2lkdGg9IjI0IgogICBoZWlnaHQ9IjI0IgogICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgIHZlcnNpb249IjEuMSIKICAgaWQ9InN2Zzg5MSIKICAgc29kaXBvZGk6ZG9jbmFtZT0idHNzX2xvZ28uc3ZnIgogICBpbmtzY2FwZTp2ZXJzaW9uPSIwLjkyLjMgKDI0MDU1NDYsIDIwMTgtMDMtMTEpIj4KICA8bWV0YWRhdGEKICAgICBpZD0ibWV0YWRhdGE4OTciPgogICAgPHJkZjpSREY+CiAgICAgIDxjYzpXb3JrCiAgICAgICAgIHJkZjphYm91dD0iIj4KICAgICAgICA8ZGM6Zm9ybWF0PmltYWdlL3N2Zyt4bWw8L2RjOmZvcm1hdD4KICAgICAgICA8ZGM6dHlwZQogICAgICAgICAgIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiIC8+CiAgICAgIDwvY2M6V29yaz4KICAgIDwvcmRmOlJERj4KICA8L21ldGFkYXRhPgogIDxkZWZzCiAgICAgaWQ9ImRlZnM4OTUiIC8+CiAgPHNvZGlwb2RpOm5hbWVkdmlldwogICAgIHBhZ2Vjb2xvcj0iI2ZmZmZmZiIKICAgICBib3JkZXJjb2xvcj0iIzY2NjY2NiIKICAgICBib3JkZXJvcGFjaXR5PSIxIgogICAgIG9iamVjdHRvbGVyYW5jZT0iMTAiCiAgICAgZ3JpZHRvbGVyYW5jZT0iMTAiCiAgICAgZ3VpZGV0b2xlcmFuY2U9IjEwIgogICAgIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwIgogICAgIGlua3NjYXBlOnBhZ2VzaGFkb3c9IjIiCiAgICAgaW5rc2NhcGU6d2luZG93LXdpZHRoPSIxNjAwIgogICAgIGlua3NjYXBlOndpbmRvdy1oZWlnaHQ9Ijg2NyIKICAgICBpZD0ibmFtZWR2aWV3ODkzIgogICAgIHNob3dncmlkPSJmYWxzZSIKICAgICBpbmtzY2FwZTp6b29tPSIyOS4zMzMzMzMiCiAgICAgaW5rc2NhcGU6Y3g9IjEyIgogICAgIGlua3NjYXBlOmN5PSIxMiIKICAgICBpbmtzY2FwZTp3aW5kb3cteD0iMCIKICAgICBpbmtzY2FwZTp3aW5kb3cteT0iMzMiCiAgICAgaW5rc2NhcGU6d2luZG93LW1heGltaXplZD0iMSIKICAgICBpbmtzY2FwZTpjdXJyZW50LWxheWVyPSJzdmc4OTEiIC8+CiAgPHBhdGgKICAgICBkPSJNMTIgMmMtNCAwLTggLjUtOCA0djkuNUM0IDE3LjQzIDUuNTcgMTkgNy41IDE5TDYgMjAuNXYuNWgyLjIzbDItMkgxNGwyIDJoMnYtLjVMMTYuNSAxOWMxLjkzIDAgMy41LTEuNTcgMy41LTMuNVY2YzAtMy41LTMuNTgtNC04LTR6TTcuNSAxN2MtLjgzIDAtMS41LS42Ny0xLjUtMS41UzYuNjcgMTQgNy41IDE0czEuNS42NyAxLjUgMS41UzguMzMgMTcgNy41IDE3em0zLjUtN0g2VjZoNXY0em0yIDBWNmg1djRoLTV6bTMuNSA3Yy0uODMgMC0xLjUtLjY3LTEuNS0xLjVzLjY3LTEuNSAxLjUtMS41IDEuNS42NyAxLjUgMS41LS42NyAxLjUtMS41IDEuNXoiCiAgICAgaWQ9InBhdGg4ODciCiAgICAgc3R5bGU9ImZpbGw6I2UyZTNkYiIgLz4KICA8cGF0aAogICAgIGZpbGw9Im5vbmUiCiAgICAgZD0iTTAgMGgyNHYyNEgwVjB6IgogICAgIGlkPSJwYXRoODg5IiAvPgo8L3N2Zz4K"

;
var $node = $node || {} ; $node[ "/mpk/tss/wheel.svg" ] = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhLS0gQ3JlYXRlZCB3aXRoIElua3NjYXBlIChodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy8pIC0tPgoKPHN2ZwogICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgIHhtbG5zOmNjPSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyMiCiAgIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIKICAgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiCiAgIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIgogICB3aWR0aD0iMjEwbW0iCiAgIGhlaWdodD0iMjk3bW0iCiAgIHZpZXdCb3g9IjAgMCAyMTAgMjk3IgogICB2ZXJzaW9uPSIxLjEiCiAgIGlkPSJzdmc4IgogICBpbmtzY2FwZTp2ZXJzaW9uPSIwLjkyLjMgKDI0MDU1NDYsIDIwMTgtMDMtMTEpIgogICBzb2RpcG9kaTpkb2NuYW1lPSJ3aGVlbC5zdmciPgogIDxkZWZzCiAgICAgaWQ9ImRlZnMyIiAvPgogIDxzb2RpcG9kaTpuYW1lZHZpZXcKICAgICBpZD0iYmFzZSIKICAgICBwYWdlY29sb3I9IiNmZmZmZmYiCiAgICAgYm9yZGVyY29sb3I9IiM2NjY2NjYiCiAgICAgYm9yZGVyb3BhY2l0eT0iMS4wIgogICAgIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwLjAiCiAgICAgaW5rc2NhcGU6cGFnZXNoYWRvdz0iMiIKICAgICBpbmtzY2FwZTp6b29tPSIxLjk0OTIzMDgiCiAgICAgaW5rc2NhcGU6Y3g9IjIyOC4xMzMzOSIKICAgICBpbmtzY2FwZTpjeT0iNzAwLjI5MTYiCiAgICAgaW5rc2NhcGU6ZG9jdW1lbnQtdW5pdHM9Im1tIgogICAgIGlua3NjYXBlOmN1cnJlbnQtbGF5ZXI9ImxheWVyMSIKICAgICBzaG93Z3JpZD0iZmFsc2UiCiAgICAgaW5rc2NhcGU6d2luZG93LXdpZHRoPSIxNjAwIgogICAgIGlua3NjYXBlOndpbmRvdy1oZWlnaHQ9Ijg2NyIKICAgICBpbmtzY2FwZTp3aW5kb3cteD0iMCIKICAgICBpbmtzY2FwZTp3aW5kb3cteT0iMzMiCiAgICAgaW5rc2NhcGU6d2luZG93LW1heGltaXplZD0iMSIgLz4KICA8bWV0YWRhdGEKICAgICBpZD0ibWV0YWRhdGE1Ij4KICAgIDxyZGY6UkRGPgogICAgICA8Y2M6V29yawogICAgICAgICByZGY6YWJvdXQ9IiI+CiAgICAgICAgPGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+CiAgICAgICAgPGRjOnR5cGUKICAgICAgICAgICByZGY6cmVzb3VyY2U9Imh0dHA6Ly9wdXJsLm9yZy9kYy9kY21pdHlwZS9TdGlsbEltYWdlIiAvPgogICAgICAgIDxkYzp0aXRsZT48L2RjOnRpdGxlPgogICAgICA8L2NjOldvcms+CiAgICA8L3JkZjpSREY+CiAgPC9tZXRhZGF0YT4KICA8ZwogICAgIGlua3NjYXBlOmxhYmVsPSJMYXllciAxIgogICAgIGlua3NjYXBlOmdyb3VwbW9kZT0ibGF5ZXIiCiAgICAgaWQ9ImxheWVyMSI+CiAgICA8cGF0aAogICAgICAgaWQ9InBhdGg4MjEiCiAgICAgICBzdHlsZT0iZmlsbDpub25lO2ZpbGwtcnVsZTpldmVub2RkO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDowLjcxMzAyNDMyO3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjEiCiAgICAgICBkPSJNIDIyLjM5NjY1NSw5My41OTMyNTkgSCA3My45ODI1MjcgTSA0NC4zNjY2MjMsMTAzLjE3NDg4IEggNTIuMDEyNTYgTSA0OC4xODk1OTIsODQuMDExNjQ1IFYgMTAzLjQ2NTIzIE0gMzEuNjY2MTI2LDgzLjk4OTg1MyBoIDMzLjA0NjkyOSB2IDUuOTQ3NDEgSCAzMS42NjYxMjYgWiIgLz4KICA8L2c+Cjwvc3ZnPgo="

;
"use strict";
var $;
(function ($) {
    class $mpk_tss_summary_status extends $mol_view {
        title() {
            return "";
        }
        statuses() {
            return {
                warning: this.warning(),
                error: this.error(),
                success: this.success(),
                ready: this.ready()
            };
        }
        sub() {
            return [
                this.title()
            ];
        }
        attr() {
            return {
                ...super.attr(),
                mpk_tss_summary_status_type: this.type()
            };
        }
        warning() {
            return this.$.$mol_locale.text('$mpk_tss_summary_status_warning');
        }
        error() {
            return this.$.$mol_locale.text('$mpk_tss_summary_status_error');
        }
        success() {
            return this.$.$mol_locale.text('$mpk_tss_summary_status_success');
        }
        ready() {
            return this.$.$mol_locale.text('$mpk_tss_summary_status_ready');
        }
        type() {
            return "success";
        }
    }
    $.$mpk_tss_summary_status = $mpk_tss_summary_status;
})($ || ($ = {}));
//mpk/tss/summary/status/-view.tree/status.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mpk/tss/summary/status/status.css", "[mpk_tss_summary_status_type=\"warning\"] {\n\tbackground-color: var(--mpk_theme_status_bg_warning);\n}\n\n[mpk_tss_summary_status_type=\"error\"] {\n\tbackground-color: var(--mpk_theme_status_bg_error);\n}\n\n[mpk_tss_summary_status_type=\"success\"] {\n\tbackground-color: var(--mpk_theme_status_bg_success);\n}\n\n[mpk_tss_summary_status_type=\"ready\"] {\n\tbackground-color: var(--mpk_theme_status_bg_success);\n}\n\n[mpk_tss_summary_status] {\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tpadding: .1rem .5rem;\n\tcolor: var(--mpk_theme_status_text);\n\tmin-width: 10rem;\n\tborder-radius: var(--mol_gap_round);\n}\n");
})($ || ($ = {}));
//mpk/tss/summary/status/-css/status.css.ts
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
//mpk/tss/summary/status/status.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_section extends $mol_list {
        rows() {
            return [
                this.Head(),
                this.Content()
            ];
        }
        Title() {
            const obj = new this.$.$mol_paragraph();
            obj.title = () => this.title();
            return obj;
        }
        tools() {
            return [];
        }
        Tools() {
            const obj = new this.$.$mol_view();
            obj.sub = () => this.tools();
            return obj;
        }
        head() {
            return [
                this.Title(),
                this.Tools()
            ];
        }
        Head() {
            const obj = new this.$.$mol_view();
            obj.sub = () => this.head();
            return obj;
        }
        content() {
            return [];
        }
        Content() {
            const obj = new this.$.$mol_list();
            obj.rows = () => this.content();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_section.prototype, "Title", null);
    __decorate([
        $mol_mem
    ], $mol_section.prototype, "Tools", null);
    __decorate([
        $mol_mem
    ], $mol_section.prototype, "Head", null);
    __decorate([
        $mol_mem
    ], $mol_section.prototype, "Content", null);
    $.$mol_section = $mol_section;
})($ || ($ = {}));
//mol/section/-view.tree/section.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/section/section.view.css", "[mol_section_head] {\n\tjustify-content: space-between;\n\talign-items: flex-end;\n\tflex-wrap: wrap;\n}\n\n[mol_section_title] {\n\tpadding: var(--mol_gap_text);\n\ttext-shadow: 0 0;\n}\n");
})($ || ($ = {}));
//mol/section/-css/section.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mpk_tss_summary_section extends $mol_section {
    }
    $.$mpk_tss_summary_section = $mpk_tss_summary_section;
})($ || ($ = {}));
//mpk/tss/summary/section/-view.tree/section.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mpk/tss/summary/section/section.view.css", "[mpk_tss_summary_section] {\n\tmargin-bottom: 1.5rem;\n}\n\n[mpk_tss_summary_section_head] {\n\tmargin-bottom: 1rem;\n}\n");
})($ || ($ = {}));
//mpk/tss/summary/section/-css/section.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_text_code_token extends $mol_dimmer {
        attr() {
            return {
                ...super.attr(),
                mol_text_code_token_type: this.type()
            };
        }
        type() {
            return "";
        }
    }
    $.$mol_text_code_token = $mol_text_code_token;
    class $mol_text_code_token_link extends $mol_text_code_token {
        dom_name() {
            return "a";
        }
        type() {
            return "code-link";
        }
        attr() {
            return {
                ...super.attr(),
                href: this.uri(),
                target: "_blank"
            };
        }
        uri() {
            return "";
        }
    }
    $.$mol_text_code_token_link = $mol_text_code_token_link;
})($ || ($ = {}));
//mol/text/code/token/-view.tree/token.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const { hsla } = $mol_style_func;
        $mol_style_define($mol_text_code_token, {
            display: 'inline',
            textDecoration: 'none',
            '@': {
                mol_text_code_token_type: {
                    'code-keyword': {
                        color: hsla(0, 70, 60, 1),
                    },
                    'code-field': {
                        color: hsla(300, 70, 50, 1),
                    },
                    'code-tag': {
                        color: hsla(330, 70, 50, 1),
                    },
                    'code-global': {
                        color: hsla(30, 80, 50, 1),
                    },
                    'code-decorator': {
                        color: hsla(180, 40, 50, 1),
                    },
                    'code-punctuation': {
                        color: hsla(0, 0, 50, 1),
                    },
                    'code-string': {
                        color: hsla(90, 40, 50, 1),
                    },
                    'code-number': {
                        color: hsla(55, 65, 45, 1),
                    },
                    'code-call': {
                        color: hsla(270, 60, 50, 1),
                    },
                    'code-link': {
                        color: hsla(210, 60, 50, 1),
                    },
                    'code-comment-inline': {
                        opacity: .5,
                    },
                    'code-comment-block': {
                        opacity: .5,
                    },
                    'code-docs': {
                        opacity: .75,
                    },
                },
            }
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/text/code/token/token.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_text_code_row extends $mol_paragraph {
        text() {
            return "";
        }
        minimal_height() {
            return 24;
        }
        numb_showed() {
            return true;
        }
        syntax() {
            return null;
        }
        uri_resolve(id) {
            return "";
        }
        Numb() {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.numb()
            ];
            return obj;
        }
        Token(id) {
            const obj = new this.$.$mol_text_code_token();
            obj.type = () => this.token_type(id);
            obj.haystack = () => this.token_text(id);
            obj.needle = () => this.highlight();
            return obj;
        }
        Token_link(id) {
            const obj = new this.$.$mol_text_code_token_link();
            obj.haystack = () => this.token_text(id);
            obj.needle = () => this.highlight();
            obj.uri = () => this.token_uri(id);
            return obj;
        }
        find_pos(id) {
            return null;
        }
        numb() {
            return 0;
        }
        token_type(id) {
            return "";
        }
        token_text(id) {
            return "";
        }
        highlight() {
            return "";
        }
        token_uri(id) {
            return "";
        }
    }
    __decorate([
        $mol_mem
    ], $mol_text_code_row.prototype, "Numb", null);
    __decorate([
        $mol_mem_key
    ], $mol_text_code_row.prototype, "Token", null);
    __decorate([
        $mol_mem_key
    ], $mol_text_code_row.prototype, "Token_link", null);
    $.$mol_text_code_row = $mol_text_code_row;
})($ || ($ = {}));
//mol/text/code/row/-view.tree/row.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_syntax2 {
        lexems;
        constructor(lexems) {
            this.lexems = lexems;
            for (let name in lexems) {
                this.rules.push({
                    name: name,
                    regExp: lexems[name],
                    size: RegExp('^$|' + lexems[name].source).exec('').length - 1,
                });
            }
            const parts = '(' + this.rules.map(rule => rule.regExp.source).join(')|(') + ')';
            this.regexp = RegExp(`([\\s\\S]*?)(?:(${parts})|$(?![^]))`, 'gmu');
        }
        rules = [];
        regexp;
        tokenize(text, handle) {
            let end = 0;
            lexing: while (end < text.length) {
                const start = end;
                this.regexp.lastIndex = start;
                var found = this.regexp.exec(text);
                end = this.regexp.lastIndex;
                if (start === end)
                    throw new Error('Empty token');
                var prefix = found[1];
                if (prefix)
                    handle('', prefix, [], start);
                var suffix = found[2];
                if (!suffix)
                    continue;
                let offset = 4;
                for (let rule of this.rules) {
                    if (found[offset - 1]) {
                        handle(rule.name, suffix, found.slice(offset, offset + rule.size), start + prefix.length);
                        continue lexing;
                    }
                    offset += rule.size + 1;
                }
                $mol_fail(new Error('$mol_syntax2 is broken'));
            }
        }
        parse(text, handlers) {
            this.tokenize(text, (name, ...args) => handlers[name](...args));
        }
    }
    $.$mol_syntax2 = $mol_syntax2;
})($ || ($ = {}));
//mol/syntax2/syntax2.ts
;
"use strict";
var $;
(function ($) {
    $.$mol_syntax2_md_flow = new $mol_syntax2({
        'quote': /^((?:(?:[>"] )(?:[^]*?)$(\r?\n?))+)([\n\r]*)/,
        'header': /^([#=]+)(\s+)(.*?)$([\n\r]*)/,
        'list': /^((?:(?: ?([*+-])|(?:\d+[\.\)])+) +(?:[^]*?)$(?:\r?\n?)(?:  (?:[^]*?)$(?:\r?\n?))*)+)((?:\r?\n)*)/,
        'code': /^(```\s*)([\w.-]*)[\r\n]+([^]*?)^(```)$([\n\r]*)/,
        'code-indent': /^((?:(?:  |\t)(?:[^]*?)$([\n\r]*))+)/,
        'table': /((?:^\|.+?$\r?\n?)+)([\n\r]*)/,
        'grid': /((?:^ *! .*?$\r?\n?)+)([\n\r]*)/,
        'cut': /^--+$((?:\r?\n)*)/,
        'block': /^(.*?)$((?:\r?\n)*)/,
    });
    $.$mol_syntax2_md_line = new $mol_syntax2({
        'strong': /\*\*(.+?)\*\*/,
        'emphasis': /\*(?!\s)(.+?)\*|\/\/(?!\s)(.+?)\/\//,
        'code': /```(.+?)```|;;(.+?);;|`(.+?)`/,
        'insert': /\+\+(.+?)\+\+/,
        'delete': /~~(.+?)~~|--(.+?)--/,
        'embed': /""(?:(.*?)\\)?(.*?)""/,
        'link': /\\\\(?:(.*?)\\)?(.*?)\\\\/,
        'image-link': /!\[([^\[\]]*?)\]\((.*?)\)/,
        'text-link': /\[(.*?(?:\[.*?\].*?)*)\]\((.*?)\)/,
        'text-link-http': /\b(https?:\/\/[^\s,.;:!?")]+(?:[,.;:!?")][^\s,.;:!?")]+)+)/,
    });
    $.$mol_syntax2_md_code = new $mol_syntax2({
        'code-indent': /\t+/,
        'code-docs': /\/\/\/.*?$/,
        'code-comment-block': /(?:\/\*[^]*?\*\/|\/\+[^]*?\+\/|<![^]*?>)/,
        'code-link': /(?:\w+:\/\/|#)\S+?(?=\s|\\\\|""|$)/,
        'code-comment-inline': /\/\/.*?(?:$|\/\/)/,
        'code-string': /(?:".*?"|'.*?'|`.*?`|\/.+?\/[dygimsu]*(?!\p{Letter})|(?:^|[ \t])\\[^\n]*\n)/,
        'code-number': /[+-]?(?:\d*\.)?\d+\w*/,
        'code-call': /\.?\w+ *(?=\()/,
        'code-sexpr': /\((\w+ )/,
        'code-field': /(?:(?:\.|::|->)\w+|[\w-]+\??\s*:(?!\/\/|:))/,
        'code-keyword': /\b(throw|readonly|unknown|keyof|typeof|never|from|class|struct|interface|type|function|extends|implements|module|namespace|import|export|include|require|var|val|let|const|for|do|while|until|in|out|of|new|if|then|else|switch|case|this|return|async|await|try|catch|break|continue|get|set|public|private|protected|string|boolean|number|null|undefined|true|false|void|int|float|ref)\b/,
        'code-global': /[$]+\w*|\b[A-Z][a-z0-9]+[A-Z]\w*/,
        'code-word': /\w+/,
        'code-decorator': /@\s*\S+/,
        'code-tag': /<\/?[\w-]+\/?>?|&\w+;/,
        'code-punctuation': /[\-\[\]\{\}\(\)<=>~!\?@#%&\*_\+\\\/\|;:\.,\^]+?/,
    });
})($ || ($ = {}));
//mol/syntax2/md/md.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const { rem } = $mol_style_unit;
        $mol_style_define($mol_text_code_row, {
            display: 'block',
            position: 'relative',
            font: {
                family: 'monospace',
            },
            Numb: {
                textAlign: 'right',
                color: $mol_theme.shade,
                width: rem(3),
                margin: {
                    left: rem(-4),
                },
                display: 'inline-block',
                whiteSpace: 'nowrap',
                userSelect: 'none',
                position: 'absolute',
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/text/code/row/row.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_text_code_row extends $.$mol_text_code_row {
            maximal_width() {
                return this.text().length * this.letter_width();
            }
            syntax() {
                return this.$.$mol_syntax2_md_code;
            }
            tokens(path) {
                const tokens = [];
                const text = (path.length > 0)
                    ? this.tokens(path.slice(0, path.length - 1))[path[path.length - 1]].found.slice(1, -1)
                    : this.text();
                this.syntax().tokenize(text, (name, found, chunks) => {
                    if (name === 'code-sexpr') {
                        tokens.push({ name: 'code-punctuation', found: '(', chunks: [] });
                        tokens.push({ name: 'code-call', found: chunks[0], chunks: [] });
                    }
                    else {
                        tokens.push({ name, found, chunks });
                    }
                });
                return tokens;
            }
            sub() {
                return [
                    ...this.numb_showed() ? [this.Numb()] : [],
                    ...this.row_content([])
                ];
            }
            row_content(path) {
                return this.tokens(path).map((t, i) => this.Token([...path, i]));
            }
            Token(path) {
                return this.token_type(path) === 'code-link' ? this.Token_link(path) : super.Token(path);
            }
            token_type(path) {
                return this.tokens([...path.slice(0, path.length - 1)])[path[path.length - 1]].name;
            }
            token_content(path) {
                const tokens = this.tokens([...path.slice(0, path.length - 1)]);
                const token = tokens[path[path.length - 1]];
                switch (token.name) {
                    case 'code-string': return [
                        token.found[0],
                        ...this.row_content(path),
                        token.found[token.found.length - 1],
                    ];
                    default: return [token.found];
                }
            }
            token_text(path) {
                const tokens = this.tokens([...path.slice(0, path.length - 1)]);
                const token = tokens[path[path.length - 1]];
                return token.found;
            }
            token_uri(path) {
                const uri = this.token_text(path);
                return this.uri_resolve(uri);
            }
            *view_find(check, path = []) {
                if (check(this, this.text())) {
                    yield [...path, this];
                }
            }
            find_pos(offset) {
                return this.find_token_pos([offset]);
            }
            find_token_pos([offset, ...path]) {
                for (const [index, token] of this.tokens(path).entries()) {
                    if (token.found.length >= offset) {
                        const token = this.Token([...path, index]);
                        return { token, offset };
                    }
                    else {
                        offset -= token.found.length;
                    }
                }
                return null;
            }
        }
        __decorate([
            $mol_mem_key
        ], $mol_text_code_row.prototype, "tokens", null);
        __decorate([
            $mol_mem_key
        ], $mol_text_code_row.prototype, "row_content", null);
        __decorate([
            $mol_mem_key
        ], $mol_text_code_row.prototype, "token_type", null);
        __decorate([
            $mol_mem_key
        ], $mol_text_code_row.prototype, "token_content", null);
        __decorate([
            $mol_mem_key
        ], $mol_text_code_row.prototype, "token_text", null);
        __decorate([
            $mol_mem_key
        ], $mol_text_code_row.prototype, "token_uri", null);
        __decorate([
            $mol_mem_key
        ], $mol_text_code_row.prototype, "find_pos", null);
        __decorate([
            $mol_mem_key
        ], $mol_text_code_row.prototype, "find_token_pos", null);
        $$.$mol_text_code_row = $mol_text_code_row;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/text/code/row/row.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_stack extends $mol_view {
    }
    $.$mol_stack = $mol_stack;
})($ || ($ = {}));
//mol/stack/-view.tree/stack.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/stack/stack.view.css", "[mol_stack] {\n\tdisplay: grid;\n\t/* width: max-content; */\n\t/* height: max-content; */\n\talign-items: flex-start;\n\tjustify-items: flex-start;\n}\n\n[mol_stack] > * {\n\tgrid-area: 1/1;\n}\n");
})($ || ($ = {}));
//mol/stack/-css/stack.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_clipboard extends $mol_icon {
        path() {
            return "M19,3H14.82C14.4,1.84 13.3,1 12,1C10.7,1 9.6,1.84 9.18,3H5C3.9,3 3,3.9 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.9 20.1,3 19,3M12,3C12.55,3 13,3.45 13,4C13,4.55 12.55,5 12,5C11.45,5 11,4.55 11,4C11,3.45 11.45,3 12,3";
        }
    }
    $.$mol_icon_clipboard = $mol_icon_clipboard;
})($ || ($ = {}));
//mol/icon/clipboard/-view.tree/clipboard.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_clipboard_outline extends $mol_icon {
        path() {
            return "M19,3H14.82C14.4,1.84 13.3,1 12,1C10.7,1 9.6,1.84 9.18,3H5C3.9,3 3,3.9 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.9 20.1,3 19,3M12,3C12.55,3 13,3.45 13,4C13,4.55 12.55,5 12,5C11.45,5 11,4.55 11,4C11,3.45 11.45,3 12,3M7,7H17V5H19V19H5V5H7V7Z";
        }
    }
    $.$mol_icon_clipboard_outline = $mol_icon_clipboard_outline;
})($ || ($ = {}));
//mol/icon/clipboard/outline/-view.tree/outline.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_button_copy extends $mol_button_minor {
        text() {
            return "";
        }
        sub() {
            return [
                this.Icon(),
                this.title()
            ];
        }
        Icon() {
            const obj = new this.$.$mol_icon_clipboard_outline();
            return obj;
        }
        title() {
            return "";
        }
    }
    __decorate([
        $mol_mem
    ], $mol_button_copy.prototype, "Icon", null);
    $.$mol_button_copy = $mol_button_copy;
})($ || ($ = {}));
//mol/button/copy/-view.tree/copy.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_button_copy extends $.$mol_button_copy {
            click(event) {
                this.$.$mol_dom_context.navigator.clipboard.writeText(this.text());
            }
        }
        $$.$mol_button_copy = $mol_button_copy;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/button/copy/copy.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_text_code extends $mol_stack {
        attr() {
            return {
                ...super.attr(),
                mol_text_code_sidebar_showed: this.sidebar_showed()
            };
        }
        text() {
            return "";
        }
        text_lines() {
            return [];
        }
        find_pos(id) {
            return null;
        }
        uri_base() {
            return "";
        }
        sub() {
            return [
                this.Rows(),
                this.Copy()
            ];
        }
        sidebar_showed() {
            return false;
        }
        render_visible_only() {
            return false;
        }
        row_numb(id) {
            return 0;
        }
        row_text(id) {
            return "";
        }
        syntax() {
            return null;
        }
        uri_resolve(id) {
            return "";
        }
        highlight() {
            return "";
        }
        Row(id) {
            const obj = new this.$.$mol_text_code_row();
            obj.numb_showed = () => this.sidebar_showed();
            obj.numb = () => this.row_numb(id);
            obj.text = () => this.row_text(id);
            obj.syntax = () => this.syntax();
            obj.uri_resolve = (id) => this.uri_resolve(id);
            obj.highlight = () => this.highlight();
            return obj;
        }
        rows() {
            return [
                this.Row("0")
            ];
        }
        Rows() {
            const obj = new this.$.$mol_list();
            obj.render_visible_only = () => this.render_visible_only();
            obj.rows = () => this.rows();
            return obj;
        }
        Copy() {
            const obj = new this.$.$mol_button_copy();
            obj.hint = () => this.$.$mol_locale.text('$mol_text_code_Copy_hint');
            obj.text = () => this.text();
            return obj;
        }
    }
    __decorate([
        $mol_mem_key
    ], $mol_text_code.prototype, "Row", null);
    __decorate([
        $mol_mem
    ], $mol_text_code.prototype, "Rows", null);
    __decorate([
        $mol_mem
    ], $mol_text_code.prototype, "Copy", null);
    $.$mol_text_code = $mol_text_code;
})($ || ($ = {}));
//mol/text/code/-view.tree/code.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const { rem, px } = $mol_style_unit;
        $mol_style_define($mol_text_code, {
            whiteSpace: 'pre-wrap',
            Rows: {
                padding: $mol_gap.text,
            },
            Copy: {
                alignSelf: 'flex-start',
                justifySelf: 'flex-start',
            },
            '@': {
                'mol_text_code_sidebar_showed': {
                    true: {
                        $mol_text_code_row: {
                            margin: {
                                left: rem(1.75),
                            },
                        },
                    },
                },
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/text/code/code.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_text_code extends $.$mol_text_code {
            render_visible_only() {
                return this.$.$mol_support_css_overflow_anchor();
            }
            text_lines() {
                return this.text().split('\n');
            }
            rows() {
                return this.text_lines().map((_, index) => this.Row(index + 1));
            }
            row_text(index) {
                return this.text_lines()[index - 1];
            }
            row_numb(index) {
                return index;
            }
            find_pos(offset) {
                for (const [index, line] of this.text_lines().entries()) {
                    if (line.length >= offset) {
                        return this.Row(index + 1).find_pos(offset);
                    }
                    else {
                        offset -= line.length + 1;
                    }
                }
                return null;
            }
            sub() {
                return [
                    this.Rows(),
                    ...this.sidebar_showed() ? [this.Copy()] : []
                ];
            }
            syntax() {
                return this.$.$mol_syntax2_md_code;
            }
            uri_base() {
                return $mol_dom_context.document.location.href;
            }
            uri_resolve(uri) {
                if (/^(\w+script+:)+/.test(uri))
                    return null;
                try {
                    const url = new URL(uri, this.uri_base());
                    return url.toString();
                }
                catch (error) {
                    $mol_fail_log(error);
                    return null;
                }
            }
        }
        __decorate([
            $mol_mem
        ], $mol_text_code.prototype, "text_lines", null);
        __decorate([
            $mol_mem
        ], $mol_text_code.prototype, "rows", null);
        __decorate([
            $mol_mem_key
        ], $mol_text_code.prototype, "row_text", null);
        __decorate([
            $mol_mem_key
        ], $mol_text_code.prototype, "find_pos", null);
        __decorate([
            $mol_mem
        ], $mol_text_code.prototype, "sub", null);
        __decorate([
            $mol_mem_key
        ], $mol_text_code.prototype, "uri_resolve", null);
        $$.$mol_text_code = $mol_text_code;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/text/code/code.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_float extends $mol_view {
        style() {
            return {
                ...super.style(),
                minHeight: "auto"
            };
        }
    }
    $.$mol_float = $mol_float;
})($ || ($ = {}));
//mol/float/-view.tree/float.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/float/float.view.css", "[mol_float] {\n\tposition: sticky;\n\ttop: 0;\n\tleft: 0;\n\tz-index: var(--mol_layer_float);\n\topacity: 1;\n\ttransition: opacity .25s ease-in;\n\tdisplay: block;\n\tbackground: linear-gradient( var(--mol_theme_card), var(--mol_theme_card) ), var(--mol_theme_back);\n\tbox-shadow: 0 0 .5rem hsla(0,0%,0%,.25);\n}\n\n");
})($ || ($ = {}));
//mol/float/-css/float.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_chevron extends $mol_icon {
        path() {
            return "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z";
        }
    }
    $.$mol_icon_chevron = $mol_icon_chevron;
})($ || ($ = {}));
//mol/icon/chevron/-view.tree/chevron.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_check_expand extends $mol_check {
        Icon() {
            const obj = new this.$.$mol_icon_chevron();
            return obj;
        }
        level() {
            return 0;
        }
        style() {
            return {
                ...super.style(),
                paddingLeft: this.level_style()
            };
        }
        checked(val) {
            return this.expanded(val);
        }
        enabled() {
            return this.expandable();
        }
        level_style() {
            return "0px";
        }
        expanded(val) {
            if (val !== undefined)
                return val;
            return false;
        }
        expandable() {
            return false;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_check_expand.prototype, "Icon", null);
    __decorate([
        $mol_mem
    ], $mol_check_expand.prototype, "expanded", null);
    $.$mol_check_expand = $mol_check_expand;
})($ || ($ = {}));
//mol/check/expand/-view.tree/expand.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/check/expand/expand.view.css", "[mol_check_expand] {\n\tmin-width: 20px;\n}\n\n:where([mol_check_expand][disabled]) [mol_check_expand_icon] {\n\tvisibility: hidden;\n}\n\n[mol_check_expand_icon] {\n\tbox-shadow: none;\n}\n[mol_check_expand_icon] {\n\ttransform: rotateZ(0deg);\n}\n\n:where([mol_check_checked]) [mol_check_expand_icon] {\n\ttransform: rotateZ(90deg);\n}\n\n[mol_check_expand_icon] {\n\tvertical-align: text-top;\n}\n\n[mol_check_expand_label] {\n\tmargin-left: 0;\n}\n");
})($ || ($ = {}));
//mol/check/expand/-css/expand.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_check_expand extends $.$mol_check_expand {
            level_style() {
                return `${this.level() * 1 - 1}rem`;
            }
            expandable() {
                return this.expanded() !== null;
            }
        }
        $$.$mol_check_expand = $mol_check_expand;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/check/expand/expand.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_grid extends $mol_view {
        row_height() {
            return 32;
        }
        row_ids() {
            return [];
        }
        row_id(id) {
            return null;
        }
        col_ids() {
            return [];
        }
        records() {
            return {};
        }
        record(id) {
            return null;
        }
        hierarchy() {
            return null;
        }
        hierarchy_col() {
            return "";
        }
        minimal_width() {
            return 0;
        }
        sub() {
            return [
                this.Head(),
                this.Table()
            ];
        }
        Head() {
            const obj = new this.$.$mol_grid_row();
            obj.cells = () => this.head_cells();
            return obj;
        }
        Row(id) {
            const obj = new this.$.$mol_grid_row();
            obj.minimal_height = () => this.row_height();
            obj.minimal_width = () => this.minimal_width();
            obj.cells = () => this.cells(id);
            return obj;
        }
        Cell(id) {
            const obj = new this.$.$mol_view();
            return obj;
        }
        cell(id) {
            return null;
        }
        Cell_text(id) {
            const obj = new this.$.$mol_grid_cell();
            obj.sub = () => this.cell_content_text(id);
            return obj;
        }
        Cell_number(id) {
            const obj = new this.$.$mol_grid_number();
            obj.sub = () => this.cell_content_number(id);
            return obj;
        }
        Col_head(id) {
            const obj = new this.$.$mol_float();
            obj.dom_name = () => "th";
            obj.sub = () => this.col_head_content(id);
            return obj;
        }
        Cell_branch(id) {
            const obj = new this.$.$mol_check_expand();
            obj.level = () => this.cell_level(id);
            obj.label = () => this.cell_content(id);
            obj.expanded = (val) => this.cell_expanded(id, val);
            return obj;
        }
        Cell_content(id) {
            return [
                this.Cell_dimmer(id)
            ];
        }
        rows() {
            return [];
        }
        Table() {
            const obj = new this.$.$mol_grid_table();
            obj.sub = () => this.rows();
            return obj;
        }
        head_cells() {
            return [];
        }
        cells(id) {
            return [];
        }
        cell_content(id) {
            return [];
        }
        cell_content_text(id) {
            return this.cell_content(id);
        }
        cell_content_number(id) {
            return this.cell_content(id);
        }
        col_head_content(id) {
            return [];
        }
        cell_level(id) {
            return 0;
        }
        cell_expanded(id, val) {
            if (val !== undefined)
                return val;
            return false;
        }
        needle() {
            return "";
        }
        cell_value(id) {
            return "";
        }
        Cell_dimmer(id) {
            const obj = new this.$.$mol_dimmer();
            obj.needle = () => this.needle();
            obj.haystack = () => this.cell_value(id);
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_grid.prototype, "Head", null);
    __decorate([
        $mol_mem_key
    ], $mol_grid.prototype, "Row", null);
    __decorate([
        $mol_mem_key
    ], $mol_grid.prototype, "Cell", null);
    __decorate([
        $mol_mem_key
    ], $mol_grid.prototype, "Cell_text", null);
    __decorate([
        $mol_mem_key
    ], $mol_grid.prototype, "Cell_number", null);
    __decorate([
        $mol_mem_key
    ], $mol_grid.prototype, "Col_head", null);
    __decorate([
        $mol_mem_key
    ], $mol_grid.prototype, "Cell_branch", null);
    __decorate([
        $mol_mem
    ], $mol_grid.prototype, "Table", null);
    __decorate([
        $mol_mem_key
    ], $mol_grid.prototype, "cell_expanded", null);
    __decorate([
        $mol_mem_key
    ], $mol_grid.prototype, "Cell_dimmer", null);
    $.$mol_grid = $mol_grid;
    class $mol_grid_table extends $mol_list {
    }
    $.$mol_grid_table = $mol_grid_table;
    class $mol_grid_row extends $mol_view {
        sub() {
            return this.cells();
        }
        cells() {
            return [];
        }
    }
    $.$mol_grid_row = $mol_grid_row;
    class $mol_grid_cell extends $mol_view {
        minimal_height() {
            return 40;
        }
    }
    $.$mol_grid_cell = $mol_grid_cell;
    class $mol_grid_number extends $mol_grid_cell {
    }
    $.$mol_grid_number = $mol_grid_number;
})($ || ($ = {}));
//mol/grid/-view.tree/grid.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_state_session extends $mol_object {
        static 'native()';
        static native() {
            if (this['native()'])
                return this['native()'];
            check: try {
                const native = $mol_dom_context.sessionStorage;
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
        $mol_mem_key
    ], $mol_state_session, "value", null);
    $.$mol_state_session = $mol_state_session;
})($ || ($ = {}));
//mol/state/session/session.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/grid/grid.view.css", "[mol_grid] {\n\tdisplay: block;\n\tflex: 0 1 auto;\n\tposition: relative;\n\toverflow-x: auto;\n}\n\n[mol_grid_gap] {\n\tposition: absolute;\n\tpadding: .1px;\n\ttop: 0;\n\ttransform: translateZ(0);\n}\n\n[mol_grid_table] {\n\tborder-spacing: 0;\n\tdisplay: table-row-group;\n\tposition: relative;\n}\n\n[mol_grid_table] > * {\n\tdisplay: table-row;\n\ttransition: none;\n}\n\n[mol_grid_head] > *,\n[mol_grid_table] > * > * {\n\tdisplay: table-cell;\n\tpadding: var(--mol_gap_text);\n\twhite-space: nowrap;\n\tvertical-align: middle;\n\tbox-shadow: inset 1px 1px 0 0 var(--mol_theme_line);\n}\n\n[mol_grid_row]:where(:first-child) > * {\n\tbox-shadow: inset 1px 0 0 0 var(--mol_theme_line);\n}\n\n[mol_grid_table] > * > *:where(:first-child) {\n\tbox-shadow: inset 0px 1px 0 0 var(--mol_theme_line);\n}\n\n[mol_grid_head] > * {\n\tbox-shadow: inset 1px -1px 0 0 var(--mol_theme_line);\n}\n\n[mol_grid_head] > *:where(:first-child) {\n\tbox-shadow: inset 0px -1px 0 0 var(--mol_theme_line);\n}\n\n[mol_grid_table] > [mol_grid_row]:where(:first-child) > *:where(:first-child) {\n\tbox-shadow: none;\n}\t\n\n[mol_grid_head] {\n\tdisplay: table-row;\n\ttransform: none !important;\n}\n\n/* [mol_grid_cell_number] {\n\ttext-align: right;\n} */\n\n[mol_grid_col_head] {\n\tfont-weight: inherit;\n\ttext-align: inherit;\n\tdisplay: table-cell;\n\tcolor: var(--mol_theme_shade);\n}\n\n[mol_grid_cell_dimmer] {\n\tdisplay: inline-block;\n\tvertical-align: inherit;\n}\n");
})($ || ($ = {}));
//mol/grid/-css/grid.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_grid extends $.$mol_grid {
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
            cell_content_text(id) {
                return this.cell_content(id).map(val => typeof val === 'object' ? JSON.stringify(val) : val);
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
                const next2 = $mol_state_session.value(key, next);
                return (next2 == null) ? this.row_expanded_default(row_id) : next2;
            }
            row_expanded_default(row_id) {
                return true;
            }
            cell_expanded(id, next) {
                return this.row_expanded(id.row, next);
            }
        }
        __decorate([
            $mol_mem
        ], $mol_grid.prototype, "head_cells", null);
        __decorate([
            $mol_mem
        ], $mol_grid.prototype, "rows", null);
        __decorate([
            $mol_mem_key
        ], $mol_grid.prototype, "col_type", null);
        __decorate([
            $mol_mem
        ], $mol_grid.prototype, "record_ids", null);
        __decorate([
            $mol_mem
        ], $mol_grid.prototype, "hierarchy", null);
        __decorate([
            $mol_mem
        ], $mol_grid.prototype, "row_ids", null);
        $$.$mol_grid = $mol_grid;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/grid/grid.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_link_iconed extends $mol_link {
        sub() {
            return [
                this.Icon()
            ];
        }
        content() {
            return [
                this.title()
            ];
        }
        host() {
            return "";
        }
        icon() {
            return "";
        }
        Icon() {
            const obj = new this.$.$mol_image();
            obj.uri = () => this.icon();
            obj.title = () => "";
            return obj;
        }
        title() {
            return this.uri();
        }
    }
    __decorate([
        $mol_mem
    ], $mol_link_iconed.prototype, "Icon", null);
    $.$mol_link_iconed = $mol_link_iconed;
})($ || ($ = {}));
//mol/link/iconed/-view.tree/iconed.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/link/iconed/iconed.view.css", "[mol_link_iconed] {\n\talign-items: baseline;\n\tdisplay: inline-flex;\n\tpadding: var(--mol_gap_text);\n}\n\n[mol_link_iconed_icon] {\n\tbox-shadow: none;\n\theight: 1.5em;\n\twidth: 1em;\n\tflex: 0 0 auto;\n\tdisplay: inline-block;\n\talign-self: normal;\n\tvertical-align: top;\n\tborder-radius: 0;\n\tobject-fit: scale-down;\n}\n\n[mol_theme=\"$mol_theme_dark\"] [mol_link_iconed_icon] {\n\tfilter: var(--mol_theme_image);\n}\n");
})($ || ($ = {}));
//mol/link/iconed/-css/iconed.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_link_iconed extends $.$mol_link_iconed {
            icon() {
                return `https://favicon.yandex.net/favicon/${this.host()}?color=0,0,0,0&size=32&stub=1`;
            }
            host() {
                const base = this.$.$mol_state_arg.href();
                const url = new URL(this.uri(), base);
                return url.hostname;
            }
            title() {
                const uri = this.uri();
                const host = this.host();
                const suffix = (host ? uri.split(this.host(), 2)[1] : uri).replace(/^[\/\?#!]+/, '');
                return decodeURIComponent(suffix || host).replace(/^\//, ' ');
            }
            sub() {
                return [
                    ...this.host() ? [this.Icon()] : [],
                    ...this.content() ? [' ', ...this.content()] : [],
                ];
            }
        }
        __decorate([
            $mol_mem
        ], $mol_link_iconed.prototype, "icon", null);
        __decorate([
            $mol_mem
        ], $mol_link_iconed.prototype, "host", null);
        __decorate([
            $mol_mem
        ], $mol_link_iconed.prototype, "title", null);
        __decorate([
            $mol_mem
        ], $mol_link_iconed.prototype, "sub", null);
        $$.$mol_link_iconed = $mol_link_iconed;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/link/iconed/iconed.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_embed_native extends $mol_scroll {
        uri(val) {
            if (val !== undefined)
                return val;
            return "";
        }
        dom_name() {
            return "object";
        }
        window() {
            return null;
        }
        attr() {
            return {
                ...super.attr(),
                data: this.uri(),
                type: this.mime()
            };
        }
        sub() {
            return [
                this.Fallback()
            ];
        }
        message() {
            return {
                hashchange: (next) => this.uri_change(next)
            };
        }
        mime() {
            return "";
        }
        title() {
            return "";
        }
        Fallback() {
            const obj = new this.$.$mol_link();
            obj.uri = () => this.uri();
            obj.sub = () => [
                this.title()
            ];
            return obj;
        }
        uri_change(next) {
            if (next !== undefined)
                return next;
            return null;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_embed_native.prototype, "uri", null);
    __decorate([
        $mol_mem
    ], $mol_embed_native.prototype, "Fallback", null);
    __decorate([
        $mol_mem
    ], $mol_embed_native.prototype, "uri_change", null);
    $.$mol_embed_native = $mol_embed_native;
})($ || ($ = {}));
//mol/embed/native/-view.tree/native.view.tree.ts
;
"use strict";
var $;
(function ($) {
    function $mol_promise() {
        let done;
        let fail;
        const promise = new Promise((d, f) => {
            done = d;
            fail = f;
        });
        return Object.assign(promise, {
            done,
            fail,
        });
    }
    $.$mol_promise = $mol_promise;
})($ || ($ = {}));
//mol/promise/promise.ts
;
"use strict";
var $;
(function ($) {
    function $mol_wait_timeout_async(timeout) {
        const promise = $mol_promise();
        const task = new this.$mol_after_timeout(timeout, () => promise.done());
        return Object.assign(promise, {
            destructor: () => task.destructor()
        });
    }
    $.$mol_wait_timeout_async = $mol_wait_timeout_async;
    function $mol_wait_timeout(timeout) {
        return this.$mol_wire_sync(this).$mol_wait_timeout_async(timeout);
    }
    $.$mol_wait_timeout = $mol_wait_timeout;
})($ || ($ = {}));
//mol/wait/timeout/timeout.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/embed/native/native.view.css", "[mol_embed_native] {\n\tmax-width: 100%;\n\tmax-height: 100vh;\n\tobject-fit: cover;\n\tdisplay: flex;\n\tflex: 1 1 auto;\n\tobject-position: top left;\n\tborder-radius: var(--mol_gap_round);\n\taspect-ratio: 4/3;\n}\n");
})($ || ($ = {}));
//mol/embed/native/-css/native.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_embed_native extends $.$mol_embed_native {
            window() {
                $mol_wire_solid();
                return $mol_wire_sync(this).load(this.dom_node_actual());
            }
            load(frame) {
                return new Promise((done, fail) => {
                    frame.onload = () => {
                        try {
                            if (frame.contentWindow.location.href === 'about:blank') {
                                return;
                            }
                        }
                        catch { }
                        done(frame.contentWindow);
                    };
                    frame.onerror = (event) => {
                        fail(typeof event === 'string' ? new Error(event) : event.error || event);
                    };
                });
            }
            uri_resource() {
                return this.uri().replace(/#.*/, '');
            }
            message_listener() {
                return new $mol_dom_listener($mol_dom_context, 'message', $mol_wire_async(this).message_receive);
            }
            message_receive(event) {
                if (!event)
                    return;
                if (event.source !== this.window())
                    return;
                if (!Array.isArray(event.data))
                    return;
                this.message()[event.data[0]]?.(event);
            }
            uri_change(event) {
                this.$.$mol_wait_timeout(1000);
                this.uri(event.data[1]);
            }
            auto() {
                return [
                    this.message_listener(),
                    this.window(),
                ];
            }
        }
        __decorate([
            $mol_mem
        ], $mol_embed_native.prototype, "window", null);
        __decorate([
            $mol_mem
        ], $mol_embed_native.prototype, "uri_resource", null);
        __decorate([
            $mol_mem
        ], $mol_embed_native.prototype, "message_listener", null);
        $$.$mol_embed_native = $mol_embed_native;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/embed/native/native.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_frame extends $mol_embed_native {
        dom_name() {
            return "iframe";
        }
        attr() {
            return {
                ...super.attr(),
                data: null,
                type: null,
                src: this.uri(),
                srcdoc: this.html(),
                allow: this.allow(),
                allowfullscreen: this.fullscreen()
            };
        }
        accelerometer() {
            return true;
        }
        autoplay() {
            return true;
        }
        encription() {
            return true;
        }
        gyroscope() {
            return true;
        }
        pip() {
            return true;
        }
        uri(val) {
            if (val !== undefined)
                return val;
            return "about:config";
        }
        html() {
            return null;
        }
        allow() {
            return "";
        }
        fullscreen() {
            return true;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_frame.prototype, "uri", null);
    $.$mol_frame = $mol_frame;
})($ || ($ = {}));
//mol/frame/-view.tree/frame.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_define($mol_frame, {
        border: {
            style: 'none',
        },
        maxHeight: $mol_style_unit.vh(100),
    });
})($ || ($ = {}));
//mol/frame/frame.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_frame extends $.$mol_frame {
            window() {
                return super.window();
            }
            allow() {
                return [
                    ...this.fullscreen() ? ['fullscreen'] : [],
                    ...this.accelerometer() ? ['accelerometer'] : [],
                    ...this.autoplay() ? ['autoplay'] : [],
                    ...this.encription() ? ['encrypted-media'] : [],
                    ...this.gyroscope() ? ['gyroscope'] : [],
                    ...this.pip() ? ['picture-in-picture'] : [],
                ].join(';');
            }
        }
        $$.$mol_frame = $mol_frame;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/frame/frame.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_embed_youtube extends $mol_check {
        uri() {
            return "";
        }
        video_preview() {
            return "";
        }
        video_id() {
            return "";
        }
        checked(next) {
            return this.active(next);
        }
        sub() {
            return [
                this.Image(),
                this.Frame()
            ];
        }
        active(next) {
            if (next !== undefined)
                return next;
            return false;
        }
        title() {
            return "";
        }
        Image() {
            const obj = new this.$.$mol_image();
            obj.title = () => this.title();
            obj.uri = () => this.video_preview();
            return obj;
        }
        video_embed() {
            return "";
        }
        Frame() {
            const obj = new this.$.$mol_frame();
            obj.title = () => this.title();
            obj.uri = () => this.video_embed();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_embed_youtube.prototype, "active", null);
    __decorate([
        $mol_mem
    ], $mol_embed_youtube.prototype, "Image", null);
    __decorate([
        $mol_mem
    ], $mol_embed_youtube.prototype, "Frame", null);
    $.$mol_embed_youtube = $mol_embed_youtube;
})($ || ($ = {}));
//mol/embed/youtube/-view.tree/youtube.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/embed/youtube/youtube.view.css", "[mol_embed_youtube] {\n\tpadding: 0;\n\tmax-width: 100%;\n}\n\n[mol_embed_youtube_image]:not(:hover):not(:focus) {\n\topacity: .75;\n}\n");
})($ || ($ = {}));
//mol/embed/youtube/-css/youtube.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_embed_youtube extends $.$mol_embed_youtube {
            video_embed() {
                return `https://www.youtube.com/embed/${encodeURIComponent(this.video_id())}?autoplay=1&loop=1`;
            }
            video_id() {
                return this.uri().match(/^https\:\/\/www\.youtube\.com\/(?:embed\/|watch\?v=)([^\/&?#]+)/)?.[1]
                    ?? this.uri().match(/^https\:\/\/youtu\.be\/([^\/&?#]+)/)?.[1]
                    ?? 'about:blank';
            }
            video_preview() {
                return `https://i.ytimg.com/vi_webp/${this.video_id()}/sddefault.webp`;
            }
            sub() {
                return [this.active() ? this.Frame() : this.Image()];
            }
        }
        __decorate([
            $mol_mem
        ], $mol_embed_youtube.prototype, "video_embed", null);
        __decorate([
            $mol_mem
        ], $mol_embed_youtube.prototype, "video_id", null);
        __decorate([
            $mol_mem
        ], $mol_embed_youtube.prototype, "video_preview", null);
        __decorate([
            $mol_mem
        ], $mol_embed_youtube.prototype, "sub", null);
        $$.$mol_embed_youtube = $mol_embed_youtube;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/embed/youtube/youtube.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_embed_any extends $mol_ghost {
        Image() {
            const obj = new this.$.$mol_image();
            obj.title = () => this.title();
            obj.uri = () => this.uri();
            return obj;
        }
        Object() {
            const obj = new this.$.$mol_embed_native();
            obj.title = () => this.title();
            obj.uri = () => this.uri();
            return obj;
        }
        Youtube() {
            const obj = new this.$.$mol_embed_youtube();
            obj.title = () => this.title();
            obj.uri = () => this.uri();
            return obj;
        }
        title() {
            return "";
        }
        uri() {
            return "";
        }
    }
    __decorate([
        $mol_mem
    ], $mol_embed_any.prototype, "Image", null);
    __decorate([
        $mol_mem
    ], $mol_embed_any.prototype, "Object", null);
    __decorate([
        $mol_mem
    ], $mol_embed_any.prototype, "Youtube", null);
    $.$mol_embed_any = $mol_embed_any;
})($ || ($ = {}));
//mol/embed/any/-view.tree/any.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_embed_any extends $.$mol_embed_any {
            type() {
                try {
                    const uri = this.uri();
                    if (/\.(png|gif|jpg|jpeg|webp|svg)$/.test(uri))
                        return 'image';
                    if (/^https:\/\/www\.youtube\.com\//.test(uri))
                        return 'youtube';
                    if (/^https:\/\/youtu\.be\//.test(uri))
                        return 'youtube';
                }
                catch (error) {
                    $mol_fail_log(error);
                    return 'image';
                }
                return 'object';
            }
            Sub() {
                switch (this.type()) {
                    case 'image': return this.Image();
                    case 'youtube': return this.Youtube();
                    default: return this.Object();
                }
            }
        }
        __decorate([
            $mol_mem
        ], $mol_embed_any.prototype, "type", null);
        __decorate([
            $mol_mem
        ], $mol_embed_any.prototype, "Sub", null);
        $$.$mol_embed_any = $mol_embed_any;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/embed/any/any.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_text extends $mol_list {
        uri_base() {
            return "";
        }
        text() {
            return "";
        }
        param() {
            return "";
        }
        flow_tokens() {
            return [];
        }
        auto() {
            return [
                this.auto_scroll()
            ];
        }
        Paragraph(id) {
            const obj = new this.$.$mol_paragraph();
            obj.sub = () => this.block_content(id);
            return obj;
        }
        Quote(id) {
            const obj = new this.$.$mol_text();
            obj.uri_resolve = (id) => this.uri_resolve(id);
            obj.text = () => this.quote_text(id);
            obj.highlight = () => this.highlight();
            obj.auto_scroll = () => null;
            return obj;
        }
        List(id) {
            const obj = new this.$.$mol_text_list();
            obj.uri_resolve = (id) => this.uri_resolve(id);
            obj.type = () => this.list_type(id);
            obj.text = () => this.list_text(id);
            obj.highlight = () => this.highlight();
            return obj;
        }
        item_index(id) {
            return 0;
        }
        Header(id) {
            const obj = new this.$.$mol_text_header();
            obj.minimal_height = () => 40;
            obj.level = () => this.header_level(id);
            obj.content = () => this.block_content(id);
            obj.arg = () => this.header_arg(id);
            return obj;
        }
        Pre(id) {
            const obj = new this.$.$mol_text_code();
            obj.text = () => this.pre_text(id);
            obj.highlight = () => this.highlight();
            obj.uri_resolve = (id) => this.uri_resolve(id);
            obj.sidebar_showed = () => this.pre_sidebar_showed();
            return obj;
        }
        Cut(id) {
            const obj = new this.$.$mol_view();
            obj.dom_name = () => "hr";
            return obj;
        }
        Table(id) {
            const obj = new this.$.$mol_grid();
            obj.head_cells = () => this.table_head_cells(id);
            obj.rows = () => this.table_rows(id);
            return obj;
        }
        Table_row(id) {
            const obj = new this.$.$mol_grid_row();
            obj.cells = () => this.table_cells(id);
            return obj;
        }
        Table_cell(id) {
            const obj = new this.$.$mol_text();
            obj.auto_scroll = () => null;
            obj.highlight = () => this.highlight();
            obj.uri_resolve = (id) => this.uri_resolve(id);
            obj.text = () => this.table_cell_text(id);
            return obj;
        }
        Grid(id) {
            const obj = new this.$.$mol_grid();
            obj.rows = () => this.grid_rows(id);
            return obj;
        }
        Grid_row(id) {
            const obj = new this.$.$mol_grid_row();
            obj.cells = () => this.grid_cells(id);
            return obj;
        }
        Grid_cell(id) {
            const obj = new this.$.$mol_text();
            obj.auto_scroll = () => null;
            obj.highlight = () => this.highlight();
            obj.uri_resolve = (id) => this.uri_resolve(id);
            obj.text = () => this.grid_cell_text(id);
            return obj;
        }
        String(id) {
            const obj = new this.$.$mol_dimmer();
            obj.dom_name = () => "span";
            obj.needle = () => this.highlight();
            obj.haystack = () => this.line_text(id);
            return obj;
        }
        Span(id) {
            const obj = new this.$.$mol_text_span();
            obj.dom_name = () => "span";
            obj.type = () => this.line_type(id);
            obj.sub = () => this.line_content(id);
            return obj;
        }
        Code_line(id) {
            const obj = new this.$.$mol_text_code_row();
            obj.numb_showed = () => false;
            obj.highlight = () => this.highlight();
            obj.text = () => this.line_text(id);
            obj.uri_resolve = (id) => this.uri_resolve(id);
            obj.syntax = () => this.code_syntax();
            return obj;
        }
        Link(id) {
            const obj = new this.$.$mol_link_iconed();
            obj.uri = () => this.link_uri(id);
            obj.content = () => this.line_content(id);
            return obj;
        }
        Link_http(id) {
            const obj = new this.$.$mol_link_iconed();
            obj.uri = () => this.link_uri(id);
            obj.content = () => [
                this.link_host(id)
            ];
            return obj;
        }
        Embed(id) {
            const obj = new this.$.$mol_embed_any();
            obj.uri = () => this.link_uri(id);
            obj.title = () => this.line_text(id);
            return obj;
        }
        auto_scroll() {
            return null;
        }
        block_content(id) {
            return [];
        }
        uri_resolve(id) {
            return "";
        }
        quote_text(id) {
            return "";
        }
        highlight() {
            return "";
        }
        list_type(id) {
            return "-";
        }
        list_text(id) {
            return "";
        }
        header_level(id) {
            return 1;
        }
        header_arg(id) {
            return {};
        }
        pre_text(id) {
            return "";
        }
        code_sidebar_showed() {
            return true;
        }
        pre_sidebar_showed() {
            return this.code_sidebar_showed();
        }
        table_head_cells(id) {
            return [];
        }
        table_rows(id) {
            return [];
        }
        table_cells(id) {
            return [];
        }
        table_cell_text(id) {
            return "";
        }
        grid_rows(id) {
            return [];
        }
        grid_cells(id) {
            return [];
        }
        grid_cell_text(id) {
            return "";
        }
        line_text(id) {
            return "";
        }
        line_type(id) {
            return "";
        }
        line_content(id) {
            return [];
        }
        code_syntax() {
            return null;
        }
        link_uri(id) {
            return "";
        }
        link_host(id) {
            return "";
        }
    }
    __decorate([
        $mol_mem_key
    ], $mol_text.prototype, "Paragraph", null);
    __decorate([
        $mol_mem_key
    ], $mol_text.prototype, "Quote", null);
    __decorate([
        $mol_mem_key
    ], $mol_text.prototype, "List", null);
    __decorate([
        $mol_mem_key
    ], $mol_text.prototype, "Header", null);
    __decorate([
        $mol_mem_key
    ], $mol_text.prototype, "Pre", null);
    __decorate([
        $mol_mem_key
    ], $mol_text.prototype, "Cut", null);
    __decorate([
        $mol_mem_key
    ], $mol_text.prototype, "Table", null);
    __decorate([
        $mol_mem_key
    ], $mol_text.prototype, "Table_row", null);
    __decorate([
        $mol_mem_key
    ], $mol_text.prototype, "Table_cell", null);
    __decorate([
        $mol_mem_key
    ], $mol_text.prototype, "Grid", null);
    __decorate([
        $mol_mem_key
    ], $mol_text.prototype, "Grid_row", null);
    __decorate([
        $mol_mem_key
    ], $mol_text.prototype, "Grid_cell", null);
    __decorate([
        $mol_mem_key
    ], $mol_text.prototype, "String", null);
    __decorate([
        $mol_mem_key
    ], $mol_text.prototype, "Span", null);
    __decorate([
        $mol_mem_key
    ], $mol_text.prototype, "Code_line", null);
    __decorate([
        $mol_mem_key
    ], $mol_text.prototype, "Link", null);
    __decorate([
        $mol_mem_key
    ], $mol_text.prototype, "Link_http", null);
    __decorate([
        $mol_mem_key
    ], $mol_text.prototype, "Embed", null);
    $.$mol_text = $mol_text;
    class $mol_text_header extends $mol_paragraph {
        level() {
            return 1;
        }
        sub() {
            return [
                this.Link()
            ];
        }
        arg() {
            return {};
        }
        content() {
            return [];
        }
        Link() {
            const obj = new this.$.$mol_link();
            obj.arg = () => this.arg();
            obj.hint = () => this.$.$mol_locale.text('$mol_text_header_Link_hint');
            obj.sub = () => this.content();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_text_header.prototype, "Link", null);
    $.$mol_text_header = $mol_text_header;
    class $mol_text_span extends $mol_paragraph {
        dom_name() {
            return "span";
        }
        attr() {
            return {
                ...super.attr(),
                mol_text_type: this.type()
            };
        }
        type() {
            return "";
        }
    }
    $.$mol_text_span = $mol_text_span;
})($ || ($ = {}));
//mol/text/text/-view.tree/text.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/text/text/text.view.css", "[mol_text] {\n\tline-height: 1.5em;\n\tbox-sizing: border-box;\n\tborder-radius: var(--mol_gap_round);\n\twhite-space: pre-line;\n\tdisplay: flex;\n\tflex-direction: column;\n\tflex: 0 0 auto;\n\ttab-size: 4;\n}\n\n[mol_text_paragraph] {\n\tpadding: var(--mol_gap_text);\n\toverflow: auto;\n\tmax-width: 100%;\n\tdisplay: block;\n\tmax-width: 50rem;\n}\n\n[mol_text_span] {\n\tdisplay: inline;\n}\n\n[mol_text_string] {\n\tdisplay: inline;\n\tflex: 0 1 auto;\n\twhite-space: normal;\n}\n\n[mol_text_quote] {\n\tmargin: var(--mol_gap_block);\n\tpadding: var(--mol_gap_block);\n\tbackground: var(--mol_theme_card);\n\tbox-shadow: 0 0 0 1px var(--mol_theme_back);\n}\n\n[mol_text_header] {\n\tdisplay: block;\n\ttext-shadow: 0 0;\n\tfont-weight: normal;\n}\n\n* + [mol_text_header] {\n\tmargin-top: 0.75rem;\n}\n\nh1[mol_text_header] {\n\tfont-size: 1.5rem;\n}\n\nh2[mol_text_header] {\n\tfont-size: 1.5rem;\n\tfont-style: italic;\n}\n\nh3[mol_text_header] {\n\tfont-size: 1.25rem;\n}\n\nh4[mol_text_header] {\n\tfont-size: 1.25em;\n\tfont-style: italic;\n}\n\nh5[mol_text_header] {\n\tfont-size: 1rem;\n}\n\nh6[mol_text_header] {\n\tfont-size: 1rem;\n\tfont-style: italic;\n}\n\n[mol_text_header_link] {\n\tcolor: inherit;\n}\n\n[mol_text_table_cell] {\n\twidth: auto;\n\tdisplay: table-cell;\n\tvertical-align: baseline;\n\tpadding: 0;\n\tborder-radius: 0;\n}\n\n[mol_text_grid_cell] {\n\twidth: auto;\n\tdisplay: table-cell;\n\tvertical-align: baseline;\n\tpadding: 0;\n\tborder-radius: 0;\n}\n\n[mol_text_cut] {\n\tborder: none;\n\twidth: 100%;\n\tbox-shadow: 0 0 0 1px var(--mol_theme_line);\n}\n\n[mol_text_link_http],\n[mol_text_link] {\n\tpadding: 0;\n\tdisplay: inline;\n\twhite-space: nowrap;\n}\n\n[mol_text_link_icon] + [mol_text_embed] {\n\tmargin-left: -1.5rem;\n}\n\n[mol_text_embed_youtube] {\n\tdisplay: inline;\n}\n\n[mol_text_embed_youtube_image],\n[mol_text_embed_youtube_frame],\n[mol_text_embed_object] {\n\tobject-fit: contain;\n\tobject-position: center;\n\tdisplay: inline;\n\twidth: 100vw;\n\tmax-height: calc( 100vh - 6rem );\n\tvertical-align: top;\n}\n[mol_text_embed_object_fallback] {\n\tpadding: 0;\n}\n[mol_text_embed_image] {\n\tobject-fit: contain;\n\tobject-position: center;\n\tdisplay: inline;\n\t/* max-height: calc( 100vh - 6rem ); */\n\tvertical-align: top;\n}\n\n[mol_text_pre] {\n\twhite-space: pre;\n\toverflow-x: auto;\n\ttab-size: 2;\n}\n\n[mol_text_code_line] {\n\tdisplay: inline-block;\n\twhite-space: nowrap;\n}\n\n[mol_text_type=\"strong\"] {\n\ttext-shadow: 0 0;\n\tfilter: contrast(1.5);\n}\n\n[mol_text_type=\"emphasis\"] {\n\tfont-style: italic;\n}\n\n[mol_text_type=\"insert\"] {\n\tcolor: var(--mol_theme_special);\n}\n\n[mol_text_type=\"delete\"] {\n\tcolor: var(--mol_theme_shade);\n}\n\n[mol_text_type=\"remark\"] {\n\tcolor: var(--mol_theme_shade);\n}\n\n[mol_text_type=\"quote\"] {\n\tfont-style: italic;\n}\n");
})($ || ($ = {}));
//mol/text/text/-css/text.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_text extends $.$mol_text {
            flow_tokens() {
                const tokens = [];
                this.$.$mol_syntax2_md_flow.tokenize(this.text(), (name, found, chunks) => tokens.push({ name, found, chunks }));
                return tokens;
            }
            block_type(index) {
                return this.flow_tokens()[index].name;
            }
            rows() {
                return this.flow_tokens().map(({ name }, index) => {
                    switch (name) {
                        case 'quote': return this.Quote(index);
                        case 'header': return this.Header(index);
                        case 'list': return this.List(index);
                        case 'code': return this.Pre(index);
                        case 'code-indent': return this.Pre(index);
                        case 'table': return this.Table(index);
                        case 'grid': return this.Grid(index);
                        case 'cut': return this.Cut(index);
                        default: return this.Paragraph(index);
                    }
                });
            }
            param() {
                return this.toString().replace(/^.*?\)\./, '').replace(/[()]/g, '');
            }
            header_level(index) {
                return this.flow_tokens()[index].chunks[0].length;
            }
            header_arg(index) {
                return {
                    [this.param()]: this.block_text(index)
                };
            }
            list_type(index) {
                return this.flow_tokens()[index].chunks[1] ?? '';
            }
            item_index(index) {
                return this.flow_tokens().slice(0, index).filter(token => token.name === 'block').length + 1;
            }
            pre_text(index) {
                const token = this.flow_tokens()[index];
                return (token.chunks[2] ?? token.chunks[0].replace(/^(\t|  (?:\+\+|--|\*\*|  ))/gm, '')).replace(/[\n\r]*$/, '');
            }
            quote_text(index) {
                return this.flow_tokens()[index].chunks[0].replace(/^[>"] /mg, '');
            }
            list_text(index) {
                return this.flow_tokens()[index].chunks[0].replace(/^([-*+]|(?:\d+[\.\)])+) ?/mg, '').replace(/^  ?/mg, '');
            }
            cell_content(indexBlock) {
                return this.flow_tokens()[indexBlock].chunks[0]
                    .split(/\r?\n/g)
                    .filter(row => row && !/\|--/.test(row))
                    .map((row, rowId) => {
                    return row.split(/\|/g)
                        .filter(cell => cell)
                        .map((cell, cellId) => cell.trim());
                });
            }
            table_rows(blockId) {
                return this.cell_content(blockId)
                    .slice(1)
                    .map((row, rowId) => this.Table_row({ block: blockId, row: rowId + 1 }));
            }
            table_head_cells(blockId) {
                return this.cell_content(blockId)[0]
                    .map((cell, cellId) => this.Table_cell({ block: blockId, row: 0, cell: cellId }));
            }
            table_cells(id) {
                return this.cell_content(id.block)[id.row]
                    .map((cell, cellId) => this.Table_cell({ block: id.block, row: id.row, cell: cellId }));
            }
            table_cell_text(id) {
                return this.cell_content(id.block)[id.row][id.cell];
            }
            grid_content(indexBlock) {
                return [...this.flow_tokens()[indexBlock].chunks[0].match(/(?:^! .*?$\r?\n?)+(?:^ +! .*?$\r?\n?)*/gm)]
                    .map((row, rowId) => {
                    const cells = [];
                    for (const line of row.trim().split(/\r?\n/)) {
                        const [_, indent, content] = /^( *)! (.*)/.exec(line);
                        const col = Math.ceil(indent.length / 2);
                        cells[col] = (cells[col] ? cells[col] + '\n' : '') + content;
                    }
                    return cells;
                });
            }
            grid_rows(blockId) {
                return this.grid_content(blockId)
                    .map((row, rowId) => this.Grid_row({ block: blockId, row: rowId }));
            }
            grid_cells(id) {
                return this.grid_content(id.block)[id.row]
                    .map((cell, cellId) => this.Grid_cell({ block: id.block, row: id.row, cell: cellId }));
            }
            grid_cell_text(id) {
                return this.grid_content(id.block)[id.row][id.cell];
            }
            uri_base() {
                return $mol_dom_context.document.location.href;
            }
            uri_resolve(uri) {
                if (/^(\w+script+:)+/.test(uri))
                    return null;
                try {
                    const url = new URL(uri, this.uri_base());
                    return url.toString();
                }
                catch (error) {
                    $mol_fail_log(error);
                    return null;
                }
            }
            code_syntax() {
                return this.$.$mol_syntax2_md_code;
            }
            block_text(index) {
                const token = this.flow_tokens()[index];
                switch (token.name) {
                    case 'header': return token.chunks[2];
                    default: return token.chunks[0];
                }
            }
            block_content(index) {
                return this.line_content([index]);
            }
            line_tokens(path) {
                const tokens = [];
                this.$.$mol_syntax2_md_line.tokenize(this.line_text(path), (name, found, chunks) => tokens.push({ name, found, chunks }));
                return tokens;
            }
            line_token(path) {
                const tokens = this.line_tokens(path.slice(0, path.length - 1));
                return tokens[path[path.length - 1]];
            }
            line_type(path) {
                return this.line_token(path).name;
            }
            line_text(path) {
                if (path.length === 1)
                    return this.block_text(path[0]);
                const { name, found, chunks } = this.line_token(path);
                switch (name) {
                    case 'link': return chunks[0] || chunks[1].replace(/^.*?\/\/|\/.*$/g, '');
                    case 'text-link': return chunks[0] || chunks[1].replace(/^.*?\/\/|\/.*$/g, '');
                    default: return (chunks[0] || chunks[1] || chunks[2]) ?? found;
                }
            }
            line_content(path) {
                return this.line_tokens(path).map(({ name, chunks }, index) => {
                    const path2 = [...path, index];
                    switch (name) {
                        case 'embed': return this.Embed(path2);
                        case 'link': return this.Link(path2);
                        case 'text-link-http': return this.Link_http(path2);
                        case 'text-link': return this.Link(path2);
                        case 'image-link': return this.Embed(path2);
                        case 'code': return this.Code_line(path2);
                        case '': return this.String(path2);
                        default: return this.Span(path2);
                    }
                });
            }
            link_uri(path) {
                const token = this.line_token(path);
                const uri = this.uri_resolve(token.chunks[1] ?? token.found);
                if (!uri)
                    throw new Error('Bad link');
                return uri;
            }
            link_host(path) {
                return this.link_uri(path).replace(/^.*?\/\/|\/.*$/g, '');
            }
            auto_scroll() {
                for (const [index, token] of this.flow_tokens().entries()) {
                    if (token.name !== 'header')
                        continue;
                    const header = this.Header(index);
                    if (!header.Link().current())
                        continue;
                    new $mol_after_tick(() => this.ensure_visible(header));
                }
            }
        }
        __decorate([
            $mol_mem
        ], $mol_text.prototype, "flow_tokens", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "block_type", null);
        __decorate([
            $mol_mem
        ], $mol_text.prototype, "rows", null);
        __decorate([
            $mol_mem
        ], $mol_text.prototype, "param", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "header_level", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "header_arg", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "pre_text", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "quote_text", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "list_text", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "cell_content", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "table_rows", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "table_head_cells", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "table_cells", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "table_cell_text", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "grid_content", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "grid_rows", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "grid_cells", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "grid_cell_text", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "uri_resolve", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "block_text", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "line_tokens", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "line_token", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "line_type", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "line_text", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "line_content", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "link_uri", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "link_host", null);
        __decorate([
            $mol_mem
        ], $mol_text.prototype, "auto_scroll", null);
        $$.$mol_text = $mol_text;
        class $mol_text_header extends $.$mol_text_header {
            dom_name() {
                return 'h' + this.level();
            }
        }
        $$.$mol_text_header = $mol_text_header;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/text/text/text.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_expander extends $mol_list {
        rows() {
            return [
                this.Label(),
                this.Content()
            ];
        }
        expanded(val) {
            if (val !== undefined)
                return val;
            return false;
        }
        label() {
            return [
                this.title()
            ];
        }
        Trigger() {
            const obj = new this.$.$mol_check_expand();
            obj.checked = (val) => this.expanded(val);
            obj.label = () => this.label();
            return obj;
        }
        Tools() {
            return null;
        }
        Label() {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.Trigger(),
                this.Tools()
            ];
            return obj;
        }
        content() {
            return [];
        }
        Content() {
            const obj = new this.$.$mol_list();
            obj.rows = () => this.content();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_expander.prototype, "expanded", null);
    __decorate([
        $mol_mem
    ], $mol_expander.prototype, "Trigger", null);
    __decorate([
        $mol_mem
    ], $mol_expander.prototype, "Label", null);
    __decorate([
        $mol_mem
    ], $mol_expander.prototype, "Content", null);
    $.$mol_expander = $mol_expander;
})($ || ($ = {}));
//mol/expander/-view.tree/expander.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/expander/expander.view.css", "[mol_expander] {\n\tflex-direction: column;\n}\n\n[mol_expander_label] {\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\tborder-radius: var(--mol_gap_round);\n}\n\n[mol_expander_trigger] {\n\tflex: auto;\n\tposition: relative;\n}\n");
})($ || ($ = {}));
//mol/expander/-css/expander.view.css.ts
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
//mol/expander/expander.view.ts
;
"use strict";
var $;
(function ($) {
    class $mpk_tss_summary extends $mol_page {
        title() {
            return this.$.$mol_locale.text('$mpk_tss_summary_title');
        }
        minimal_width() {
            return 600;
        }
        body() {
            return [
                this.Statuses(),
                this.Log()
            ];
        }
        All() {
            const obj = new this.$.$mpk_tss_summary_status();
            obj.type = () => "warning";
            return obj;
        }
        software_title() {
            return this.$.$mol_locale.text('$mpk_tss_summary_software_title');
        }
        Software() {
            const obj = new this.$.$mpk_tss_summary_item();
            obj.title = () => this.software_title();
            obj.type = () => "warning";
            obj.arg = () => ({
                page: "software"
            });
            return obj;
        }
        sensors_title() {
            return this.$.$mol_locale.text('$mpk_tss_summary_sensors_title');
        }
        Sensors() {
            const obj = new this.$.$mpk_tss_summary_item();
            obj.title = () => this.sensors_title();
            obj.type = () => "ready";
            obj.arg = () => ({
                page: "sensors"
            });
            return obj;
        }
        pereferial_title() {
            return this.$.$mol_locale.text('$mpk_tss_summary_pereferial_title');
        }
        Pereferials() {
            const obj = new this.$.$mpk_tss_summary_item();
            obj.title = () => this.pereferial_title();
            obj.type = () => "error";
            obj.arg = () => ({
                page: "pereferial"
            });
            return obj;
        }
        Statuses_content() {
            const obj = new this.$.$mol_list();
            obj.rows = () => [
                this.All(),
                this.Software(),
                this.Sensors(),
                this.Pereferials()
            ];
            return obj;
        }
        Statuses() {
            const obj = new this.$.$mpk_tss_summary_section();
            obj.Content = () => this.Statuses_content();
            return obj;
        }
        log_title() {
            return this.$.$mol_locale.text('$mpk_tss_summary_log_title');
        }
        Text() {
            const obj = new this.$.$mol_text();
            obj.text = () => " Wed 24 Apr 2019 02:33:14 PM MSK: Report was successfully sent\n Wed 24 Apr 2019 02:32:24 PM MSK: Connection to SKAT server (10.32.35.11) established\n Wed 24 Apr 2019 02:32:09 PM MSK: Connecting to SKAT server (10.32.35.11), attempt 1...\n Wed 24 Apr 2019 02:31:49 PM MSK: Violation report prepared to sending\n Wed 24 Apr 2019 02:31:45 PM MSK: Violation report successfully created\n Wed 24 Apr 2019 02:31:40 PM MSK: Values processing finished. Violation detected\n Wed 24 Apr 2019 02:31:35 PM MSK: Values processing finished. Violation detected\n Wed 24 Apr 2019 02:30:05 PM MSK: Values processing started";
            return obj;
        }
        Log_content() {
            const obj = new this.$.$mol_list();
            obj.rows = () => [
                this.Text()
            ];
            return obj;
        }
        Log() {
            const obj = new this.$.$mol_expander();
            obj.title = () => this.log_title();
            obj.Content = () => this.Log_content();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mpk_tss_summary.prototype, "All", null);
    __decorate([
        $mol_mem
    ], $mpk_tss_summary.prototype, "Software", null);
    __decorate([
        $mol_mem
    ], $mpk_tss_summary.prototype, "Sensors", null);
    __decorate([
        $mol_mem
    ], $mpk_tss_summary.prototype, "Pereferials", null);
    __decorate([
        $mol_mem
    ], $mpk_tss_summary.prototype, "Statuses_content", null);
    __decorate([
        $mol_mem
    ], $mpk_tss_summary.prototype, "Statuses", null);
    __decorate([
        $mol_mem
    ], $mpk_tss_summary.prototype, "Text", null);
    __decorate([
        $mol_mem
    ], $mpk_tss_summary.prototype, "Log_content", null);
    __decorate([
        $mol_mem
    ], $mpk_tss_summary.prototype, "Log", null);
    $.$mpk_tss_summary = $mpk_tss_summary;
    class $mpk_tss_summary_item extends $mpk_tss_link {
        copy_params() {
            return [
                "login"
            ];
        }
        type() {
            return "";
        }
        sub() {
            return [
                this.Title(),
                this.Status()
            ];
        }
        Title() {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.title()
            ];
            return obj;
        }
        Status() {
            const obj = new this.$.$mpk_tss_summary_status();
            obj.type = () => this.type();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mpk_tss_summary_item.prototype, "Title", null);
    __decorate([
        $mol_mem
    ], $mpk_tss_summary_item.prototype, "Status", null);
    $.$mpk_tss_summary_item = $mpk_tss_summary_item;
})($ || ($ = {}));
//mpk/tss/summary/-view.tree/summary.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_text_list extends $mol_text {
        auto_scroll() {
            return null;
        }
        attr() {
            return {
                ...super.attr(),
                mol_text_list_type: this.type()
            };
        }
        Paragraph(id) {
            const obj = new this.$.$mol_text_list_item();
            obj.index = () => this.item_index(id);
            obj.sub = () => this.block_content(id);
            return obj;
        }
        type() {
            return "";
        }
    }
    __decorate([
        $mol_mem_key
    ], $mol_text_list.prototype, "Paragraph", null);
    $.$mol_text_list = $mol_text_list;
    class $mol_text_list_item extends $mol_paragraph {
        attr() {
            return {
                ...super.attr(),
                mol_text_list_item_index: this.index()
            };
        }
        index() {
            return 0;
        }
    }
    $.$mol_text_list_item = $mol_text_list_item;
})($ || ($ = {}));
//mol/text/list/-view.tree/list.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/text/list/list.view.css", "[mol_text_list] {\r\n\tpadding-left: 1.75rem;\r\n}\r\n\r\n[mol_text_list_item] {\r\n\tcontain: none;\r\n\tdisplay: list-item;\r\n}\r\n\r\n[mol_text_list_item]::before {\r\n\tcontent: attr( mol_text_list_item_index ) \".\";\r\n\twidth: 1.25rem;\r\n\tdisplay: inline-block;\r\n\tposition: absolute;\r\n\tmargin-left: -1.75rem;\r\n\ttext-align: end;\r\n}\r\n\r\n[mol_text_list_type=\"-\"] > [mol_text_list_item]::before,\r\n[mol_text_list_type=\"*\"] > [mol_text_list_item]::before {\r\n\tcontent: \"•\";\r\n}\r\n");
})($ || ($ = {}));
//mol/text/list/-css/list.view.css.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mpk/tss/summary/summary.css", "[mpk_tss_summary_body] {\n\tpadding: 0.5rem;\n}\n[mpk_tss_summary_log],\n[mpk_tss_summary_item] {\n\tbackground: var(--mol_theme_card);\n\tbox-shadow: var(--mol_theme_line);\n\tborder-radius: var(--mol_gap_round);\n\tmargin-bottom: 0.5rem;\n\tdisplay: flex;\n\tjustify-content: space-between;\n\tflex-wrap: wrap;\n}\n[mpk_tss_main_summary] {\n\tflex: 1000 0 600px;\n}\n[mpk_tss_summary_item]:last-child {\n\tmargin-bottom: 0;\n}\n\n[mpk_tss_summary_item_title] {\n\tdisplay: flex;\n\talign-items: center;\n\tflex-grow: 1000;\n}\n\n[mpk_tss_summary_all] {\n\tmargin-bottom: 1rem;\n\tmargin-top: 1rem;\n}\n");
})($ || ($ = {}));
//mpk/tss/summary/-css/summary.css.ts
;
export default $
//# sourceMappingURL=web.esm.js.map
