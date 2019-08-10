require( "source-map-support" ).install()

;
process.on( 'unhandledRejection' , up => { throw up } )
;
"use strict"
/// Fake namespace for optional overrides
///
/// 	namespace $ { export var x = 1 , y = 1 } // defaults
/// 	namespace $.$$ { export var x = 2 } // overrides
/// 	namespace $.$$ { console.log( x , y ) } // usage
///
var $ = Object.setPrototypeOf( module['export'+'s'] , global )
$.$$ = $

$.$mol = $  // deprecated

;
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
module.exports;
//mol.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_offline(uri = 'web.js') { }
    $.$mol_offline = $mol_offline;
})($ || ($ = {}));
//offline.node.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_offline();
})($ || ($ = {}));
//install.js.map
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
var $;
(function ($) {
    function $mol_class(Class) {
        Class[Symbol.toStringTag] = Class.name;
        if (!Class.prototype.hasOwnProperty(Symbol.toStringTag)) {
            Class.prototype[Symbol.toStringTag] = '<' + Class.name + '>';
        }
        return Class;
    }
    $.$mol_class = $mol_class;
})($ || ($ = {}));
//class.js.map
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
            const wrapped = this.wrap(func);
            Object.defineProperty(wrapped, 'name', {
                value: `${func.name || '<anonymous>'}|${this.name}`
            });
            return wrapped;
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
        throw error;
    }
    $.$mol_fail_hidden = $mol_fail_hidden;
})($ || ($ = {}));
//hidden.js.map
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
var $;
(function ($) {
    class $mol_after_frame extends $.$mol_after_timeout {
        constructor(task) {
            super(16, task);
            this.task = task;
        }
    }
    $.$mol_after_frame = $mol_after_frame;
})($ || ($ = {}));
//frame.node.js.map
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
    let debug;
    function $mol_log_debug(next = debug) {
        return debug = next;
    }
    $.$mol_log_debug = $mol_log_debug;
})($ || ($ = {}));
//log_debug.node.js.map
;
"use strict";
var $;
(function ($) {
    let filter;
    $.$mol_log_filter = function $mol_log_filter(next = filter) {
        return filter = next;
    };
})($ || ($ = {}));
//log_filter.node.js.map
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
    function $mol_fiber_sync(request) {
        return function $mol_fiber_sync_wrapper(...args) {
            const slave = $mol_fiber.current;
            let master = slave && slave.master;
            if (!master || master.constructor !== $mol_fiber) {
                master = new $mol_fiber;
                master.cursor = -3;
                master.error = request.call(this, ...args).then(res => master.push(res), err => master.fail(err));
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
            Object.defineProperty(wrapped, 'name', {
                value: `${task.name || '<anonymous>'}|${this.name}`
            });
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
            this.cursor = 0;
            this.masters = [];
        }
        static wrap(task) {
            return function (...args) {
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
                if (Date.now() > $mol_fiber_1.deadline) {
                    $mol_fiber_1.schedule();
                    return;
                }
                const task = $mol_fiber_1.queue.shift();
                await task();
            }
        }
        static schedule() {
            if (!$mol_fiber_1.scheduled) {
                $mol_fiber_1.scheduled = new $.$mol_after_frame(() => {
                    $mol_fiber_1.deadline = Math.max($mol_fiber_1.deadline, Date.now() + $mol_fiber_1.quant);
                    $mol_fiber_1.scheduled = null;
                    $mol_fiber_1.tick();
                });
            }
            const promise = new this.$.Promise(done => this.queue.push(() => (done(), promise)));
            return promise;
        }
        schedule() {
            $mol_fiber_1.schedule().then($.$mol_log_group('$mol_fiber_scheduled', this.wake.bind(this)));
        }
        wake() {
            this.$.$mol_log(this, '⏰');
            try {
                if (this.cursor > -2)
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
            if (!$.$mol_compare_any(this.value, value)) {
                this.$.$mol_log(this, value, '🠈', this.value);
                this.obsolete_slaves();
                this.forget();
            }
            else {
                this.$.$mol_log(this, '✔', value);
                if (this.error)
                    this.obsolete_slaves();
            }
            this.error = null;
            this.value = value;
            this.complete();
            return value;
        }
        fail(error) {
            this.complete();
            this.error = error;
            this.$.$mol_log(this, '🔥', error.message);
            this.obsolete_slaves();
            return error;
        }
        wait(promise) {
            this.error = promise;
            this.$.$mol_log(this, '💤');
            this.cursor = 0;
            return promise;
        }
        complete() {
            if (this.cursor <= -2)
                return;
            for (let index = 0; index < this.masters.length; index += 2) {
                this.complete_master(index);
            }
            this.cursor = -2;
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
                this.error = null;
                this.limit();
                $mol_fiber_1.current = this;
                this.$.$mol_log(this, '►');
                this.pull();
            }
            catch (error) {
                if ('then' in error) {
                    if (!slave) {
                        const listener = this.wake.bind(this);
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
            if (this.cursor > 0)
                this.$.$mol_fail(new Error('Cyclic dependency'));
            const slave = $mol_fiber_1.current;
            if (slave)
                slave.master = this;
            if (this.cursor > -2)
                this.update();
            if (this.error)
                return this.$.$mol_fail_hidden(this.error);
            return this.value;
        }
        limit() {
            if (!$mol_fiber_1.current)
                return;
            const now = Date.now();
            const overtime = now - $mol_fiber_1.deadline;
            if (overtime < 0)
                return;
            if (overtime > 500) {
                $mol_fiber_1.deadline = now + $mol_fiber_1.quant;
                return;
            }
            this.$.$mol_fail_hidden($mol_fiber_1.schedule());
        }
        get master() {
            return this.masters[this.cursor];
        }
        set master(next) {
            if (this.cursor === -1)
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
            this.$.$mol_log(this, '🕱', this.value);
            this.complete();
        }
    };
    $mol_fiber.quant = 16;
    $mol_fiber.deadline = 0;
    $mol_fiber.current = null;
    $mol_fiber.scheduled = null;
    $mol_fiber.queue = [];
    $mol_fiber = $mol_fiber_1 = __decorate([
        $.$mol_class
    ], $mol_fiber);
    $.$mol_fiber = $mol_fiber;
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
            return;
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
            if (this.cursor === 0)
                return super.pull();
            this.$.$mol_log(this, '⏭');
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
                    this.cursor = 0;
                }
                if (this.cursor !== 0)
                    continue;
                this.$.$mol_log(this, '⏯');
                return super.pull();
            }
            this.$.$mol_log(this, '✔✔', this.value);
            this.cursor = -2;
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
            this.cursor = -3;
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
            this.$.$mol_log(this, '☍', slave);
            const slave_index = this.slaves.length;
            this.slaves[slave_index] = slave;
            this.slaves[slave_index + 1] = master_index;
            return slave_index;
        }
        dislead(slave_index) {
            if (slave_index < 0)
                return;
            this.$.$mol_log(this, '☌', this.slaves[slave_index]);
            this.slaves[slave_index] = undefined;
            this.slaves[slave_index + 1] = undefined;
            $.$mol_array_trim(this.slaves);
            if (this.cursor > -3 && this.alone)
                $mol_atom2_1.reap(this);
        }
        obsolete(master_index = -1) {
            if (this.cursor > 0) {
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
            if (this.cursor === 0)
                return;
            this.$.$mol_log(this, '✘');
            if (this.cursor !== -1)
                this.doubt_slaves();
            this.cursor = 0;
        }
        doubt(master_index = -1) {
            if (this.cursor > 0) {
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
            if (this.cursor >= -1)
                return;
            this.$.$mol_log(this, '�');
            this.cursor = -1;
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
            return () => {
                if (this.cursor !== -2)
                    return;
                this.cursor = 0;
                $.$mol_fiber_solid.run(() => this.update());
            };
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
            this.$.$mol_log(this, '🕱', this.value);
            this.cursor = -3;
            for (let index = 0; index < this.masters.length; index += 2) {
                this.complete_master(index);
            }
        }
    };
    $mol_atom2.cached = false;
    $mol_atom2.reap_task = null;
    $mol_atom2.reap_queue = [];
    $mol_atom2 = $mol_atom2_1 = __decorate([
        $.$mol_class
    ], $mol_atom2);
    $.$mol_atom2 = $mol_atom2;
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
var $;
(function ($) {
    class $mol_window extends $.$mol_object {
        static size(next) {
            return next || {
                width: 1024,
                height: 768,
            };
        }
    }
    $.$mol_window = $mol_window;
})($ || ($ = {}));
//window.node.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_atom2_dict(config) {
        const store = new $.$mol_object2;
        let keys;
        const get_keys = () => {
            if (!keys) {
                keys = new $.$mol_atom2();
                keys[Symbol.toStringTag] = `Object.keys(${store})`;
                keys.put(0);
            }
            return keys;
        };
        const get_cache = (key) => {
            let cache = store[key];
            if (!cache) {
                cache = new $.$mol_atom2;
                cache.abort = () => {
                    if (config.abort) {
                        if (!config.abort(cache.value, key, proxy))
                            return false;
                    }
                    else {
                        cache.forget();
                    }
                    store[key] = undefined;
                    return true;
                };
                if (config.get)
                    cache.calculate = config.get.bind(null, key, proxy);
                cache[Symbol.toStringTag] = `${store}[${JSON.stringify(key)}]`;
                store[key] = cache;
                if (keys)
                    keys.obsolete_slaves();
            }
            return cache;
        };
        const proxy = new Proxy(store, {
            get(store, key, proxy) {
                if (key in $.$mol_object2.prototype)
                    return store[key];
                return get_cache(key).get();
            },
            set(store, key, value, proxy) {
                if (key in $.$mol_object2.prototype) {
                    store[key] = value;
                }
                else {
                    if (config.set)
                        value = config.set.call(null, value, key, proxy);
                    get_cache(key).push(value);
                }
                return true;
            },
            ownKeys(store) {
                get_keys().get();
                return Object.keys(store);
            },
        });
        return proxy;
    }
    $.$mol_atom2_dict = $mol_atom2_dict;
})($ || ($ = {}));
//dict.js.map
;
"use strict";
var $node = new Proxy({}, { get(target, field, wrapper) {
        return require(field);
    } });
//node.node.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_dom_context = new $node.jsdom.JSDOM('', { url: 'https://localhost/' }).window;
})($ || ($ = {}));
//context.node.js.map
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
    class $mol_mem_force extends Object {
        constructor() { super(); }
        static toString() { return this.name; }
    }
    $.$mol_mem_force = $mol_mem_force;
    class $mol_mem_force_cache extends $mol_mem_force {
    }
    $.$mol_mem_force_cache = $mol_mem_force_cache;
    class $mol_mem_force_update extends $mol_mem_force {
    }
    $.$mol_mem_force_update = $mol_mem_force_update;
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
    class $mol_view_selection extends $.$mol_object {
        static focused(next) {
            if (next === undefined)
                return [];
            const parents = [];
            let element = next[0];
            while (element) {
                parents.push(element);
                element = element.parentNode;
            }
            new $.$mol_defer(() => {
                const element = $.$mol_atom2_value(() => this.focused())[0];
                if (element)
                    element.focus();
                else
                    $.$mol_dom_context.blur();
            });
            return parents;
        }
        static focus(event) {
            this.focused([event.target]);
        }
        static blur(event) {
            this.focused([]);
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_view_selection, "focused", null);
    $.$mol_view_selection = $mol_view_selection;
})($ || ($ = {}));
//selection.js.map
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
    function $mol_dom_render_children(el, childNodes) {
        const node_list = [];
        const node_set = new Set([...childNodes]);
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
//fields.js.map
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
        return function (host, field, descr) {
            const value = descr.value;
            descr.value = function $mol_deprecated_wrapper() {
                console.warn(`${host.constructor}::${field} is deprecated. ${message}`);
                return value.apply(this, arguments);
            };
        };
    }
    $.$mol_deprecated = $mol_deprecated;
})($ || ($ = {}));
//deprecated.js.map
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
    class $mol_view extends $.$mol_object {
        static get Root() {
            return $.$mol_atom2_dict({
                get: (id) => new this
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
                const view = View.Root[i];
                $.$mol_atom2_autorun(() => {
                    view.dom_node(nodes.item(i));
                    view.dom_tree();
                    document.title = view.title();
                    return view;
                });
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
        dom_name() {
            return this.constructor.toString().replace('$', '');
        }
        dom_name_space() { return 'http://www.w3.org/1999/xhtml'; }
        sub() {
            return null;
        }
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
            node.setAttribute('id', this.dom_id());
            $.$mol_dom_render_attributes(node, this.attr_static());
            const events = this.event();
            for (let event_name in events) {
                node.addEventListener(event_name, $.$mol_fiber_solid.func($.$mol_log_group(`${this} ${event_name}`, events[event_name])), { passive: false });
            }
            return node;
        }
        dom_tree(next) {
            const node = this.dom_node(next);
            try {
                for (let plugin of this.plugins()) {
                    if (plugin instanceof $.$mol_plugin) {
                        plugin.render();
                    }
                }
                this.render();
            }
            catch (error) {
                if (error instanceof Promise)
                    $.$mol_fail_hidden(error);
                $.$mol_dom_render_attributes(node, { mol_view_error: error.name });
                try {
                    void (node.innerText = error.message);
                }
                catch (e) { }
                console.error(error);
            }
            return node;
        }
        dom_node_actual() {
            const node = this.dom_node();
            $.$mol_dom_render_attributes(node, this.attr());
            $.$mol_dom_render_styles(node, this.style());
            return node;
        }
        render() {
            const node = this.dom_node_actual();
            const sub = this.sub_visible();
            if (sub) {
                const nodes = sub.map(child => {
                    if (child == null)
                        return null;
                    return (child instanceof $mol_view) ? child.dom_node_actual() : String(child);
                });
                $.$mol_dom_render_children(node, nodes);
                for (const el of sub)
                    if (el && typeof el === 'object' && 'dom_tree' in el)
                        el['dom_tree']();
            }
            const fields = this.field();
            $.$mol_dom_render_fields(node, fields);
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
                if (names.indexOf(name) < 0)
                    names.push(name);
            }
            return names;
        }
        attr_static() {
            let attrs = {};
            for (let name of this.view_names())
                attrs[name.replace(/\$/g, '').toLowerCase()] = '';
            return attrs;
        }
        attr() {
            return {
                'mol_view_error': false,
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
        event_async() {
            return {};
        }
        plugins() {
            return [];
        }
    }
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
        $.$mol_atom2_field
    ], $mol_view, "Root", null);
    __decorate([
        $.$mol_mem
    ], $mol_view, "view_classes", null);
    $.$mol_view = $mol_view;
})($ || ($ = {}));
//view.js.map
;
"use strict";
//code.js.map
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
        dom_name() {
            return "input";
        }
        enabled() {
            return true;
        }
        debounce() {
            return 0;
        }
        minimal_height() {
            return 40;
        }
        field() {
            return (Object.assign({}, super.field(), { "disabled": this.disabled(), "value": this.value_changed(), "placeholder": this.hint(), "type": this.type(), "spellcheck": this.spellcheck() }));
        }
        disabled() {
            return false;
        }
        value_changed(val, force) {
            return this.value(val);
        }
        value(val, force) {
            return (val !== void 0) ? val : "";
        }
        hint() {
            return "";
        }
        type(val, force) {
            return (val !== void 0) ? val : "text";
        }
        spellcheck() {
            return false;
        }
        attr() {
            return (Object.assign({}, super.attr(), { "maxlength": this.length_max() }));
        }
        length_max() {
            return Infinity;
        }
        event() {
            return (Object.assign({}, super.event(), { "input": (event) => this.event_change(event), "keydown": (event) => this.event_key_press(event) }));
        }
        event_change(event, force) {
            return (event !== void 0) ? event : null;
        }
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
            event_change(next) {
                if (!next)
                    return;
                this.value(next.target.value);
            }
            event_key_press(next) {
                if (!next)
                    return;
                if (next.keyCode === 13) {
                    this.value(next.target.value);
                }
            }
            disabled() {
                return !this.enabled();
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
    function $mol_dict_key(value) {
        if (!value)
            return JSON.stringify(value);
        if (typeof value !== 'object')
            return JSON.stringify(value);
        if (value instanceof Array)
            return JSON.stringify(value);
        if (value.constructor === Object)
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
    class $mol_state_time extends $.$mol_object {
        static now(precision, next) {
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
        return Math.ceil(canvas.measureText(text).width);
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
        dom_name() {
            return "svg";
        }
        dom_name_space() {
            return "http://www.w3.org/2000/svg";
        }
        text_width(text, force) {
            return (text !== void 0) ? text : 0;
        }
        font_size() {
            return 16;
        }
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
    class $mol_svg_root extends $.$mol_svg {
        dom_name() {
            return "svg";
        }
        attr() {
            return (Object.assign({}, super.attr(), { "viewBox": this.view_box(), "preserveAspectRatio": this.aspect() }));
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
//root.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_svg_path extends $.$mol_svg {
        dom_name() {
            return "path";
        }
        attr() {
            return (Object.assign({}, super.attr(), { "d": this.geometry() }));
        }
        geometry() {
            return "";
        }
    }
    $.$mol_svg_path = $mol_svg_path;
})($ || ($ = {}));
//path.view.tree.js.map
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
            return [this.Path()];
        }
        Path() {
            return ((obj) => {
                obj.geometry = () => this.path();
                return obj;
            })(new this.$.$mol_svg_path());
        }
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
        enabled() {
            return true;
        }
        minimal_height() {
            return 40;
        }
        click(event, force) {
            return (event !== void 0) ? event : null;
        }
        event_click(event, force) {
            return (event !== void 0) ? event : null;
        }
        event() {
            return (Object.assign({}, super.event(), { "click": (event) => this.event_activate(event), "keypress": (event) => this.event_key_press(event) }));
        }
        event_activate(event, force) {
            return (event !== void 0) ? event : null;
        }
        event_key_press(event, force) {
            return (event !== void 0) ? event : null;
        }
        attr() {
            return (Object.assign({}, super.attr(), { "disabled": this.disabled(), "role": "button", "tabindex": this.tab_index(), "title": this.hint() }));
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
                if (event.keyCode === 13) {
                    return this.event_activate(event);
                }
            }
            tab_index() {
                return this.enabled() ? super.tab_index() : null;
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
    class $mol_button_typed extends $.$mol_button {
    }
    $.$mol_button_typed = $mol_button_typed;
})($ || ($ = {}));
(function ($) {
    class $mol_button_major extends $.$mol_button_typed {
        attr() {
            return (Object.assign({}, super.attr(), { "mol_theme": "$mol_theme_accent" }));
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
            return $mol_file.absolute($node.path.resolve(path).replace(/\\/g, '/'));
        }
        path() {
            return '.';
        }
        watcher() {
            const watcher = $node.chokidar.watch(this.path(), {
                persistent: false,
                ignored: /(^\.|___$)/,
                depth: 0,
                ignoreInitial: true,
            });
            watcher.on('all', (type, path) => $.$mol_fiber_unlimit(() => {
                const file = $mol_file.relative(path.replace(/\\/g, '/'));
                file.stat(undefined, $.$mol_mem_force_cache);
                if (type === 'change')
                    return;
                file.parent().stat(undefined, $.$mol_mem_force_cache);
            }));
            watcher.on('error', (error) => {
                this.stat(error, $.$mol_mem_force_cache);
            });
            return watcher;
        }
        stat(next, force) {
            var path = this.path();
            try {
                var stat = next || $node.fs.statSync(path);
            }
            catch (error) {
                if (error.code === 'ENOENT')
                    return null;
                return error;
            }
            this.parent().watcher();
            return stat;
        }
        version() {
            return this.stat().mtime.getTime().toString(36).toUpperCase();
        }
        exists(next) {
            var exists = !!this.stat();
            if (next === void 0) {
                return exists;
            }
            else {
                if (next == exists)
                    return exists;
                if (next) {
                    this.parent().exists(true);
                    $node.fs.mkdirSync(this.path());
                }
                else {
                    $node.fs.unlinkSync(this.path());
                }
                this.stat(undefined, $.$mol_mem_force_cache);
                return next;
            }
        }
        parent() {
            return this.resolve('..');
        }
        type() {
            var stat = this.stat();
            if (stat) {
                if (stat.isFile())
                    return 'file';
                if (stat.isDirectory())
                    return 'dir';
                if (stat.isBlockDevice())
                    return 'blocks';
                if (stat.isCharacterDevice())
                    return 'chars';
                if (stat.isSymbolicLink())
                    return 'link';
                if (stat.isFIFO())
                    return 'fifo';
                if (stat.isSocket())
                    return 'socket';
            }
            else {
                return null;
            }
            throw new Error(`Unknown file type ${this.path()}`);
        }
        name() {
            return $node.path.basename(this.path());
        }
        ext() {
            var match = /((?:\.\w+)+)$/.exec(this.path());
            return match ? match[1].substring(1) : '';
        }
        content(next, force) {
            if (next === void 0) {
                return this.stat() && $node.fs.readFileSync(this.path());
            }
            this.parent().exists(true);
            $node.fs.writeFileSync(this.path(), next);
            return next;
        }
        reader() {
            return $node.fs.createReadStream(this.path());
        }
        writer() {
            return $node.fs.createWriteStream(this.path());
        }
        sub() {
            this.stat();
            switch (this.type()) {
                case 'dir':
                    return $node.fs.readdirSync(this.path())
                        .filter(name => !/^\.+$/.test(name))
                        .map(name => this.resolve(name));
            }
            return [];
        }
        resolve(path) {
            return this.constructor.relative($node.path.join(this.path(), path));
        }
        relate(base = this.constructor.relative('.')) {
            return $node.path.relative(base.path(), this.path()).replace(/\\/g, '/');
        }
        append(next) {
            $node.fs.appendFileSync(this.path(), next);
        }
        find(include, exclude) {
            var found = [];
            this.sub().forEach(child => {
                if (exclude && child.path().match(exclude))
                    return;
                if (!include || child.path().match(include))
                    found.push(child);
                if (child.type() === 'dir')
                    found = found.concat(child.find(include, exclude));
            });
            return found;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_file.prototype, "watcher", null);
    __decorate([
        $.$mol_mem
    ], $mol_file.prototype, "stat", null);
    __decorate([
        $.$mol_mem
    ], $mol_file.prototype, "version", null);
    __decorate([
        $.$mol_mem
    ], $mol_file.prototype, "type", null);
    __decorate([
        $.$mol_mem
    ], $mol_file.prototype, "content", null);
    __decorate([
        $.$mol_mem
    ], $mol_file.prototype, "sub", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_file, "absolute", null);
    $.$mol_file = $mol_file;
})($ || ($ = {}));
//file.node.js.map
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
            return JSON.parse($.$mol_file.relative(`web.locale=${lang}.json`).content());
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
                node.addEventListener(event_name, $.$mol_fiber_solid.func($.$mol_log_group(`${this} ${event_name}`, events[event_name])), { passive: false });
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
            return this.dom_node_actual();
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
        zoom() {
            return 1;
        }
        width(val, force) {
            return (val !== void 0) ? val : 0;
        }
        height(val, force) {
            return (val !== void 0) ? val : 0;
        }
        left(val, force) {
            return (val !== void 0) ? val : 0;
        }
        right(val, force) {
            return (val !== void 0) ? val : 0;
        }
        bottom(val, force) {
            return (val !== void 0) ? val : 0;
        }
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
        start_zoom(val, force) {
            return (val !== void 0) ? val : 0;
        }
        start_distance(val, force) {
            return (val !== void 0) ? val : 0;
        }
        zoom(val, force) {
            return (val !== void 0) ? val : 1;
        }
        start_pan(val, force) {
            return (val !== void 0) ? val : [0, 0];
        }
        pan(val, force) {
            return (val !== void 0) ? val : [0, 0];
        }
        pos(val, force) {
            return (val !== void 0) ? val : [NaN, NaN];
        }
        start_pos(val, force) {
            return (val !== void 0) ? val : null;
        }
        swipe_precision() {
            return 16;
        }
        swipe_right(val, force) {
            return (val !== void 0) ? val : null;
        }
        swipe_bottom(val, force) {
            return (val !== void 0) ? val : null;
        }
        swipe_left(val, force) {
            return (val !== void 0) ? val : null;
        }
        swipe_top(val, force) {
            return (val !== void 0) ? val : null;
        }
        swipe_from_right(val, force) {
            return (val !== void 0) ? val : null;
        }
        swipe_from_bottom(val, force) {
            return (val !== void 0) ? val : null;
        }
        swipe_from_left(val, force) {
            return (val !== void 0) ? val : null;
        }
        swipe_from_top(val, force) {
            return (val !== void 0) ? val : null;
        }
        swipe_to_right(val, force) {
            return (val !== void 0) ? val : null;
        }
        swipe_to_bottom(val, force) {
            return (val !== void 0) ? val : null;
        }
        swipe_to_left(val, force) {
            return (val !== void 0) ? val : null;
        }
        swipe_to_top(val, force) {
            return (val !== void 0) ? val : null;
        }
        style() {
            return (Object.assign({}, super.style(), { "touch-action": "none" }));
        }
        event() {
            return (Object.assign({}, super.event(), { "touchstart": (event) => this.event_start(event), "touchmove": (event) => this.event_move(event), "touchend": (event) => this.event_end(event), "mousedown": (event) => this.event_start(event), "mousemove": (event) => this.event_move(event), "mouseup": (event) => this.event_end(event), "mouseleave": (event) => this.event_leave(event), "wheel": (event) => this.event_wheel(event) }));
        }
        event_start(event, force) {
            return (event !== void 0) ? event : null;
        }
        event_move(event, force) {
            return (event !== void 0) ? event : null;
        }
        event_end(event, force) {
            return (event !== void 0) ? event : null;
        }
        event_leave(event, force) {
            return (event !== void 0) ? event : null;
        }
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
                    const precision = this.swipe_precision();
                    if (this.pan !== $mol_touch.prototype.pan) {
                        this.pan([start_pan[0] + pos[0] - start_pos[0], start_pan[1] + pos[1] - start_pos[1]]);
                        event.preventDefault();
                    }
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
                if (typeof TouchEvent !== 'undefined' && event instanceof TouchEvent && event.touches.length === 2) {
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
            }
            swipe_right(event) {
                if (this.start_pos()[0] - this.rect().left < this.swipe_precision() * 2)
                    this.swipe_from_left(event);
                else
                    this.swipe_to_right(event);
            }
            swipe_top(event) {
                if (this.rect().bottom - this.start_pos()[1] < this.swipe_precision() * 2)
                    this.swipe_from_bottom(event);
                else
                    this.swipe_to_top(event);
            }
            swipe_bottom(event) {
                if (this.start_pos()[1] - this.rect().top < this.swipe_precision() * 2)
                    this.swipe_from_top(event);
                else
                    this.swipe_to_bottom(event);
            }
            event_end(event) {
                this.start_pos(null);
            }
            event_wheel(event) {
                const zoom_prev = this.zoom() || 0.001;
                const zoom_next = zoom_prev * (1 - .1 * Math.sign(event.deltaY));
                const mult = zoom_next / zoom_prev;
                this.zoom(zoom_next);
                const pan_prev = this.pan();
                const center = [event.layerX, event.layerY];
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
                const node = this.Sub().dom_tree();
                super.render();
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
        sub() {
            return this.pages_wrapped();
        }
        pages_wrapped() {
            return [];
        }
        pages() {
            return [];
        }
        plugins() {
            return [this.Meter(), this.Touch()];
        }
        width() {
            return this.Meter().width();
        }
        Meter() {
            return ((obj) => {
                return obj;
            })(new this.$.$mol_meter());
        }
        Touch() {
            return ((obj) => {
                obj.swipe_from_left = (val) => this.event_front_up(val);
                obj.swipe_to_left = (val) => this.event_front_down(val);
                return obj;
            })(new this.$.$mol_touch());
        }
        event_front_up(val, force) {
            return (val !== void 0) ? val : null;
        }
        event_front_down(val, force) {
            return (val !== void 0) ? val : null;
        }
        Page(index) {
            return ((obj) => {
                obj.Sub = () => this.page(index);
                obj.visible = () => this.page_visible(index);
                return obj;
            })(new this.$.$mol_book_page());
        }
        page(index) {
            return null;
        }
        page_visible(index) {
            return true;
        }
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
        minimal_width() {
            return 400;
        }
        attr() {
            return (Object.assign({}, super.attr(), { "tabindex": null }));
        }
    }
    $.$mol_book_placeholder = $mol_book_placeholder;
})($ || ($ = {}));
(function ($) {
    class $mol_book_page extends $.$mol_ghost {
        attr() {
            return (Object.assign({}, super.attr(), { "tabindex": 0, "mol_book_page_focused": this.focused(), "mol_book_page_visible": this.visible() }));
        }
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
    class $mpk_tss_icon_train extends $.$mol_icon {
        path() {
            return "M12 2c-4 0-8 .5-8 4v9.5C4 17.43 5.57 19 7.5 19L6 20.5v.5h2.23l2-2H14l2 2h2v-.5L16.5 19c1.93 0 3.5-1.57 3.5-3.5V6c0-3.5-3.58-4-8-4zM7.5 17c-.83 0-1.5-.67-1.5-1.5S6.67 14 7.5 14s1.5.67 1.5 1.5S8.33 17 7.5 17zm3.5-7H6V6h5v4zm2 0V6h5v4h-5zm3.5 7c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z";
        }
    }
    $.$mpk_tss_icon_train = $mpk_tss_icon_train;
})($ || ($ = {}));
(function ($) {
    class $mpk_tss_icon_exit_to_app extends $.$mol_icon {
        path() {
            return "M10.09 15.59L11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5c-1.11 0-2 .9-2 2v4h2V5h14v14H5v-4H3v4c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z";
        }
    }
    $.$mpk_tss_icon_exit_to_app = $mpk_tss_icon_exit_to_app;
})($ || ($ = {}));
(function ($) {
    class $mpk_tss_icon_autorenew extends $.$mol_icon {
        path() {
            return "M12 6v3l4-4-4-4v3c-4.42 0-8 3.58-8 8 0 1.57.46 3.03 1.24 4.26L6.7 14.8c-.45-.83-.7-1.79-.7-2.8 0-3.31 2.69-6 6-6zm6.76 1.74L17.3 9.2c.44.84.7 1.79.7 2.8 0 3.31-2.69 6-6 6v-3l-4 4 4 4v-3c4.42 0 8-3.58 8-8 0-1.57-.46-3.03-1.24-4.26z";
        }
    }
    $.$mpk_tss_icon_autorenew = $mpk_tss_icon_autorenew;
})($ || ($ = {}));
(function ($) {
    class $mpk_tss_icon_cloud_download extends $.$mol_icon {
        path() {
            return "M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM17 13l-5 5-5-5h3V9h4v4h3";
        }
    }
    $.$mpk_tss_icon_cloud_download = $mpk_tss_icon_cloud_download;
})($ || ($ = {}));
(function ($) {
    class $mpk_tss_icon_done extends $.$mol_icon {
        path() {
            return "M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z";
        }
    }
    $.$mpk_tss_icon_done = $mpk_tss_icon_done;
})($ || ($ = {}));
(function ($) {
    class $mpk_tss_icon_schedule extends $.$mol_icon {
        path() {
            return "M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z";
        }
    }
    $.$mpk_tss_icon_schedule = $mpk_tss_icon_schedule;
})($ || ($ = {}));
(function ($) {
    class $mpk_tss_icon_error extends $.$mol_icon {
        path() {
            return "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 36h-2v-2h2v2zm0-4h-2V7h2v6z";
        }
    }
    $.$mpk_tss_icon_error = $mpk_tss_icon_error;
})($ || ($ = {}));
(function ($) {
    class $mpk_tss_icon_warning extends $.$mol_icon {
        path() {
            return "M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z";
        }
    }
    $.$mpk_tss_icon_warning = $mpk_tss_icon_warning;
})($ || ($ = {}));
(function ($) {
    class $mpk_tss_icon_sync extends $.$mol_icon {
        path() {
            return "M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z";
        }
    }
    $.$mpk_tss_icon_sync = $mpk_tss_icon_sync;
})($ || ($ = {}));
(function ($) {
    class $mpk_tss_icon_clear extends $.$mol_icon {
        path() {
            return "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z";
        }
    }
    $.$mpk_tss_icon_clear = $mpk_tss_icon_clear;
})($ || ($ = {}));
(function ($) {
    class $mpk_tss_icon_block extends $.$mol_icon {
        path() {
            return "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM4 12c0-4.42 3.58-8 8-8 1.85 0 3.55.63 4.9 1.69L5.69 16.9C4.63 15.55 4 13.85 4 12zm8 8c-1.85 0-3.55-.63-4.9-1.69L18.31 7.1C19.37 8.45 20 10.15 20 12c0 4.42-3.58 8-8 8z";
        }
    }
    $.$mpk_tss_icon_block = $mpk_tss_icon_block;
})($ || ($ = {}));
(function ($) {
    class $mpk_tss_icon_circle_outline extends $.$mol_icon {
        path() {
            return "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.88-11.71L10 14.17l-1.88-1.88c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41l2.59 2.59c.39.39 1.02.39 1.41 0L17.3 9.7c.39-.39.39-1.02 0-1.41-.39-.39-1.03-.39-1.42 0z";
        }
    }
    $.$mpk_tss_icon_circle_outline = $mpk_tss_icon_circle_outline;
})($ || ($ = {}));
(function ($) {
    class $mpk_tss_icon_round_warning extends $.$mol_icon {
        path() {
            return "M4.47 21h15.06c1.54 0 2.5-1.67 1.73-3L13.73 4.99c-.77-1.33-2.69-1.33-3.46 0L2.74 18c-.77 1.33.19 3 1.73 3zM12 14c-.55 0-1-.45-1-1v-2c0-.55.45-1 1-1s1 .45 1 1v2c0 .55-.45 1-1 1zm1 4h-2v-2h2v2z";
        }
    }
    $.$mpk_tss_icon_round_warning = $mpk_tss_icon_round_warning;
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
    class $mol_state_arg extends $.$mol_object {
        constructor(prefix = '') {
            super();
            this.prefix = prefix;
        }
        static href(next) {
            return next || process.argv.slice(2).join(' ');
        }
        static dict(next) {
            if (next !== void 0)
                this.href(this.make_link(next));
            var href = this.href();
            var chunks = href.split(' ');
            var params = {};
            chunks.forEach(chunk => {
                if (!chunk)
                    return;
                var vals = chunk.split('=').map(decodeURIComponent);
                params[vals.shift()] = vals.join('=');
            });
            return params;
        }
        static value(key, next) {
            if (next === void 0)
                return this.dict()[key] || null;
            this.href(this.link({ [key]: next }));
            return next;
        }
        static link(next) {
            var params = {};
            var prev = this.dict();
            for (var key in prev) {
                params[key] = prev[key];
            }
            for (var key in next) {
                params[key] = next[key];
            }
            return this.make_link(params);
        }
        static make_link(next) {
            var chunks = [];
            for (var key in next) {
                if (null == next[key])
                    continue;
                chunks.push([key].concat(next[key]).map(encodeURIComponent).join('='));
            }
            return chunks.join(' ');
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
    ], $mol_state_arg, "value", null);
    $.$mol_state_arg = $mol_state_arg;
})($ || ($ = {}));
//arg.node.js.map
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
        minimal_height() {
            return 40;
        }
        dom_name() {
            return "a";
        }
        attr() {
            return (Object.assign({}, super.attr(), { "href": this.uri(), "title": this.hint(), "target": this.target(), "download": this.file_name(), "mol_link_current": this.current() }));
        }
        uri() {
            return "";
        }
        hint() {
            return "";
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
        sub() {
            return [this.title()];
        }
        arg() {
            return ({});
        }
        event() {
            return (Object.assign({}, super.event(), { "click": (event) => this.click(event) }));
        }
        click(event, force) {
            return this.event_click(event);
        }
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
                return new $.$mol_state_arg(this.state_key()).link(this.arg());
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
    class $mpk_tss_link extends $.$mol_link {
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
    class $mol_scroll extends $.$mol_view {
        minimal_height() {
            return 0;
        }
        field() {
            return (Object.assign({}, super.field(), { "scrollTop": this.scroll_top(), "scrollLeft": this.scroll_left(), "scrollBottom": this.scroll_bottom(), "scrollRight": this.scroll_right() }));
        }
        scroll_top(val, force) {
            return (val !== void 0) ? val : 0;
        }
        scroll_left(val, force) {
            return (val !== void 0) ? val : 0;
        }
        scroll_bottom(val, force) {
            return (val !== void 0) ? val : 0;
        }
        scroll_right(val, force) {
            return (val !== void 0) ? val : 0;
        }
        event() {
            return (Object.assign({}, super.event(), { "scroll": (event) => this.event_scroll(event) }));
        }
        event_scroll(event, force) {
            return (event !== void 0) ? event : null;
        }
        Strut() {
            return ((obj) => {
                obj.style = () => ({
                    "transform": this.strut_transform(),
                });
                return obj;
            })(new this.$.$mol_view());
        }
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
                return `translate3d( 0 , ${this.content_height()}px , 0 )`;
            }
            sub_visible() {
                const sub = [
                    this.Strut(),
                    ...(this.sub() || []),
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
    class $mol_page extends $.$mol_view {
        sub() {
            return [this.Head(), this.Body(), this.Foot()];
        }
        Head() {
            return ((obj) => {
                obj.attr = () => ({
                    "mol_theme": "$mol_theme_base",
                });
                obj.sub = () => this.head();
                return obj;
            })(new this.$.$mol_view());
        }
        head() {
            return [this.Title(), this.Tools()];
        }
        Title() {
            return ((obj) => {
                obj.sub = () => [this.title()];
                obj.event_click = (val) => this.event_top(val);
                return obj;
            })(new this.$.$mol_button());
        }
        event_top(val, force) {
            return (val !== void 0) ? val : null;
        }
        Tools() {
            return ((obj) => {
                obj.sub = () => this.tools();
                return obj;
            })(new this.$.$mol_view());
        }
        tools() {
            return [];
        }
        Body() {
            return ((obj) => {
                obj.scroll_top = (val) => this.body_scroll_top(val);
                obj.sub = () => this.body();
                return obj;
            })(new this.$.$mol_scroll());
        }
        body_scroll_top(val, force) {
            return (val !== void 0) ? val : 0;
        }
        body() {
            return [];
        }
        Foot() {
            return ((obj) => {
                obj.attr = () => ({
                    "mol_theme": "$mol_theme_base",
                });
                obj.sub = () => this.foot();
                return obj;
            })(new this.$.$mol_view());
        }
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
    class $mol_filler extends $.$mol_view {
        minimal_height() {
            return 500;
        }
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
        title() {
            return this.$.$mol_locale.text("$mpk_tss_software_title");
        }
        body() {
            return [this.Content()];
        }
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
    class $mol_bar extends $.$mol_view {
    }
    $.$mol_bar = $mol_bar;
})($ || ($ = {}));
//bar.view.tree.js.map
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
        showed(val, force) {
            return (val !== void 0) ? val : false;
        }
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
        Meter() {
            return ((obj) => {
                return obj;
            })(new this.$.$mol_meter());
        }
        sub() {
            return [this.Anchor(), this.Bubble()];
        }
        Anchor() {
            return null;
        }
        Bubble() {
            return ((obj) => {
                obj.align = () => this.align();
                obj.content = () => this.bubble_content();
                obj.height_max = () => this.height_max();
                return obj;
            })(new this.$.$mol_pop_bubble());
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
    }
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
        sub() {
            return this.content();
        }
        content() {
            return [];
        }
        style() {
            return (Object.assign({}, super.style(), { "maxHeight": this.height_max() }));
        }
        height_max() {
            return 9999;
        }
        attr() {
            return (Object.assign({}, super.attr(), { "mol_pop_align": this.align(), "tabindex": 0 }));
        }
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
        }
        $$.$mol_pop = $mol_pop;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//pop.view.js.map
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
        haystack() {
            return "";
        }
        needle() {
            return "";
        }
        sub() {
            return this.parts();
        }
        parts() {
            return [];
        }
        Low(id) {
            return ((obj) => {
                obj.sub = () => [this.string(id)];
                return obj;
            })(new this.$.$mol_view());
        }
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_nav extends $.$mol_plugin {
        cycle(val, force) {
            return (val !== void 0) ? val : false;
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
        keys_x(val, force) {
            return (val !== void 0) ? val : [];
        }
        keys_y(val, force) {
            return (val !== void 0) ? val : [];
        }
        current_x(val, force) {
            return (val !== void 0) ? val : "";
        }
        current_y(val, force) {
            return (val !== void 0) ? val : "";
        }
        event_up(event, force) {
            return (event !== void 0) ? event : null;
        }
        event_down(event, force) {
            return (event !== void 0) ? event : null;
        }
        event_left(event, force) {
            return (event !== void 0) ? event : null;
        }
        event_right(event, force) {
            return (event !== void 0) ? event : null;
        }
        event() {
            return (Object.assign({}, super.event(), { "keydown": (event) => this.event_key(event) }));
        }
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
                    case 38: return this.event_up(event);
                    case 40: return this.event_down(event);
                    case 37: return this.event_left(event);
                    case 39: return this.event_right(event);
                    case 33: return this.event_up(event);
                    case 34: return this.event_down(event);
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
        sub() {
            return this.rows();
        }
        rows() {
            return [];
        }
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
                if (!sub)
                    return null;
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
    class $mol_icon_chevron extends $.$mol_icon {
        path() {
            return "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z";
        }
    }
    $.$mol_icon_chevron = $mol_icon_chevron;
})($ || ($ = {}));
//chevron.view.tree.js.map
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
    class $mol_select extends $.$mol_pop {
        dictionary() {
            return ({});
        }
        options() {
            return [];
        }
        value(val, force) {
            return (val !== void 0) ? val : "";
        }
        minimal_height() {
            return 40;
        }
        Option_row(id) {
            return ((obj) => {
                obj.event_click = (event) => this.event_select(id, event);
                obj.sub = () => this.option_content(id);
                return obj;
            })(new this.$.$mol_button_minor());
        }
        event_select(id, event, force) {
            return (event !== void 0) ? event : null;
        }
        option_content(id) {
            return [this.Option_label(id)];
        }
        Option_label(id) {
            return ((obj) => {
                obj.minimal_height = () => 40;
                obj.haystack = () => this.option_label(id);
                obj.needle = () => this.filter_pattern();
                return obj;
            })(new this.$.$mol_dimmer());
        }
        option_label(id) {
            return "";
        }
        filter_pattern(val, force) {
            return (val !== void 0) ? val : "";
        }
        No_options() {
            return ((obj) => {
                obj.sub = () => [this.no_options_message()];
                return obj;
            })(new this.$.$mol_view());
        }
        no_options_message() {
            return this.$.$mol_locale.text("$mol_select_no_options_message");
        }
        plugins() {
            return [...super.plugins(), this.Nav()];
        }
        Nav() {
            return ((obj) => {
                obj.keys_y = () => this.nav_components();
                obj.current_y = (component) => this.option_focused(component);
                obj.cycle = (val) => this.nav_cycle(val);
                return obj;
            })(new this.$.$mol_nav());
        }
        nav_components() {
            return [];
        }
        option_focused(component, force) {
            return (component !== void 0) ? component : null;
        }
        nav_cycle(val, force) {
            return (val !== void 0) ? val : true;
        }
        showed() {
            return this.options_showed();
        }
        options_showed() {
            return false;
        }
        Anchor() {
            return this.Trigger();
        }
        Trigger() {
            return ((obj) => {
                obj.sub = () => this.trigger_content();
                return obj;
            })(new this.$.$mol_button_minor());
        }
        trigger_content() {
            return [];
        }
        bubble_content() {
            return [this.Menu()];
        }
        Menu() {
            return ((obj) => {
                obj.rows = () => this.menu_content();
                return obj;
            })(new this.$.$mol_list());
        }
        menu_content() {
            return [];
        }
        option_content_current() {
            return [];
        }
        Filter() {
            return ((obj) => {
                obj.value = (val) => this.filter_pattern(val);
                obj.hint = () => this.filter_hint();
                obj.debounce = () => this.debounce();
                return obj;
            })(new this.$.$mol_string());
        }
        filter_hint() {
            return this.hint();
        }
        hint() {
            return this.$.$mol_locale.text("$mol_select_hint");
        }
        debounce() {
            return 200;
        }
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
    ], $mol_select.prototype, "Trigger", null);
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
            options_showed() {
                const showed = this.focused() || this.filter_pattern().length > 0;
                if (showed && this.Filter())
                    new $.$mol_defer($.$mol_fiber_root(() => this.Filter().focused(true)));
                return showed;
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
    class $mol_icon_cross extends $.$mol_icon {
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
        query(val, force) {
            return (val !== void 0) ? val : "";
        }
        sub() {
            return [this.Suggest(), this.Clear()];
        }
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
        suggest_selected(val, force) {
            return (val !== void 0) ? val : "";
        }
        hint() {
            return this.$.$mol_locale.text("$mol_search_hint");
        }
        suggests_showed() {
            return false;
        }
        suggests() {
            return [];
        }
        debounce() {
            return 200;
        }
        Clear() {
            return ((obj) => {
                obj.sub = () => [this.Clear_icon()];
                obj.event_click = (val) => this.event_clear(val);
                return obj;
            })(new this.$.$mol_button_minor());
        }
        Clear_icon() {
            return ((obj) => {
                return obj;
            })(new this.$.$mol_icon_cross());
        }
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mpk_tss_pereferial_page extends $.$mol_page {
        unit_current_id(v, force) {
            return (v !== void 0) ? v : "";
        }
        sub() {
            return [this.Head(), this.Filter_value(), this.Body()];
        }
        Filter_value() {
            return ((obj) => {
                obj.hint = () => this.filter_hint();
                obj.query = (val) => this.filter_value(val);
                return obj;
            })(new this.$.$mol_search());
        }
        filter_hint() {
            return this.$.$mol_locale.text("$mpk_tss_pereferial_page_filter_hint");
        }
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
    class $mpk_tss_parameter_unknown extends $.$mol_view {
        sub() {
            return [this.title()];
        }
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_labeler extends $.$mol_view {
        sub() {
            return [this.Title(), this.Content()];
        }
        Title() {
            return ((obj) => {
                obj.sub = () => this.label();
                return obj;
            })(new this.$.$mol_view());
        }
        label() {
            return [this.title()];
        }
        Content() {
            return ((obj) => {
                obj.sub = () => [this.content()];
                return obj;
            })(new this.$.$mol_view());
        }
        content() {
            return null;
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
                var parsed = /^(?:(\d\d\d\d)(?:-?(\d\d)(?:-?(\d\d))?)?)?(?:[T ](\d\d)(?::?(\d\d)(?::?(\d\d(?:\.\d\d\d)?))?)?(Z|[\+\-]\d\d(?::?(?:\d\d)?)?)?)?$/.exec(config);
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
            if (config.offset !== undefined)
                this.offset = config.offset && new $.$mol_time_duration(config.offset);
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
            var second = (moment.second + (duration.second || 0));
            var native = new Date(moment.year + (duration.year || 0), moment.month + (duration.month || 0), moment.day + 1 + (duration.day || 0), moment.hour + (duration.hour || 0), moment.minute + (duration.minute || 0), Math.floor(second), (second - Math.floor(second)) * 1000);
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
var $;
(function ($) {
    class $mpk_tss_parameter_date extends $.$mol_view {
        date() {
            return null;
        }
        sub() {
            return [this.date_formatted()];
        }
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mpk_tss_parameter extends $.$mol_row {
        Unknown_value() {
            return ((obj) => {
                return obj;
            })(new this.$.$mpk_tss_parameter_unknown());
        }
        Unknown_updated() {
            return ((obj) => {
                return obj;
            })(new this.$.$mpk_tss_parameter_unknown());
        }
        value() {
            return null;
        }
        updated() {
            return null;
        }
        sub() {
            return [this.Name(), this.Value(), this.Updated()];
        }
        Name() {
            return ((obj) => {
                obj.title = () => this.name_title();
                obj.Content = () => ((obj) => {
                    obj.sub = () => [this.name()];
                    return obj;
                })(new this.$.$mol_view());
                return obj;
            })(new this.$.$mol_labeler());
        }
        name_title() {
            return this.$.$mol_locale.text("$mpk_tss_parameter_name_title");
        }
        name() {
            return "";
        }
        Value() {
            return ((obj) => {
                obj.title = () => this.value_title();
                obj.Content = () => this.Value_content();
                return obj;
            })(new this.$.$mol_labeler());
        }
        value_title() {
            return this.$.$mol_locale.text("$mpk_tss_parameter_value_title");
        }
        Value_content() {
            return null;
        }
        Updated() {
            return ((obj) => {
                obj.title = () => this.updated_title();
                obj.Content = () => this.Updated_value();
                return obj;
            })(new this.$.$mol_labeler());
        }
        updated_title() {
            return this.$.$mol_locale.text("$mpk_tss_parameter_updated_title");
        }
        Updated_value() {
            return null;
        }
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
    class $mpk_tss_parameter_list extends $.$mol_list {
    }
    $.$mpk_tss_parameter_list = $mpk_tss_parameter_list;
})($ || ($ = {}));
//list.view.tree.js.map
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
        battery_level() { throw new $.$mpk_tss_todo; }
        battery_time() { throw new $.$mpk_tss_todo; }
    }
    $.$mpk_tss_pereferial_domain_ups = $mpk_tss_pereferial_domain_ups;
})($ || ($ = {}));
//domain.js.map
;
"use strict";
var $;
(function ($) {
    class $mpk_tss_pereferial_status extends $.$mol_view {
        status() {
            return null;
        }
        colors() {
            return true;
        }
        statuses() {
            return ({
                "ready": this.ready(),
                "error": this.error(),
                "not_responding": this.not_responding(),
                "inactive": this.inactive(),
                "unknown": this.unknown(),
            });
        }
        ready() {
            return this.$.$mol_locale.text("$mpk_tss_pereferial_status_ready");
        }
        error() {
            return this.$.$mol_locale.text("$mpk_tss_pereferial_status_error");
        }
        not_responding() {
            return this.$.$mol_locale.text("$mpk_tss_pereferial_status_not_responding");
        }
        inactive() {
            return this.$.$mol_locale.text("$mpk_tss_pereferial_status_inactive");
        }
        unknown() {
            return this.$.$mol_locale.text("$mpk_tss_pereferial_status_unknown");
        }
        sub() {
            return [this.status_text()];
        }
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
                return (Object.assign({}, super.attr(), { 'mpk_tss_pereferial_status_type': this.status() }));
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
        status() {
            return null;
        }
        statuses() {
            return ({
                "linein": this.linein(),
                "internal": this.internal(),
            });
        }
        linein() {
            return this.$.$mol_locale.text("$mpk_tss_pereferial_source_linein");
        }
        internal() {
            return this.$.$mol_locale.text("$mpk_tss_pereferial_source_internal");
        }
        sub() {
            return [this.status_text()];
        }
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
    class $mpk_tss_parameter_voltage extends $.$mol_view {
        sub() {
            return [this.value(), this.spacer(), this.unit()];
        }
        value() {
            return 0;
        }
        spacer() {
            return " ";
        }
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
        minutes() {
            return this.$.$mol_locale.text("$mpk_tss_parameter_duration_minutes");
        }
        value() {
            return null;
        }
        sub() {
            return [this.formatted_value()];
        }
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mpk_tss_pereferial_ups extends $.$mpk_tss_parameter_list {
        unit() {
            return null;
        }
        rows() {
            return [this.Status(), this.Power(), this.Voltage(), this.Bat_level(), this.Bat_time()];
        }
        Status() {
            return ((obj) => {
                obj.name = () => this.status_title();
                obj.value = () => this.status();
                obj.updated = () => this.updated();
                return obj;
            })(new this.$.$mpk_tss_parameter());
        }
        status_title() {
            return this.$.$mol_locale.text("$mpk_tss_pereferial_ups_status_title");
        }
        status() {
            return null;
        }
        updated() {
            return null;
        }
        Power() {
            return ((obj) => {
                obj.name = () => this.power_title();
                obj.value = () => this.power_source();
                obj.updated = () => this.updated();
                return obj;
            })(new this.$.$mpk_tss_parameter());
        }
        power_title() {
            return this.$.$mol_locale.text("$mpk_tss_pereferial_ups_power_title");
        }
        power_source() {
            return null;
        }
        Voltage() {
            return ((obj) => {
                obj.name = () => this.voltage_title();
                obj.value = () => this.voltage();
                obj.updated = () => this.updated();
                return obj;
            })(new this.$.$mpk_tss_parameter());
        }
        voltage_title() {
            return this.$.$mol_locale.text("$mpk_tss_pereferial_ups_voltage_title");
        }
        voltage() {
            return null;
        }
        Bat_level() {
            return ((obj) => {
                obj.name = () => this.bat_level_title();
                obj.value = () => this.battery_level();
                obj.updated = () => this.updated();
                return obj;
            })(new this.$.$mpk_tss_parameter());
        }
        bat_level_title() {
            return this.$.$mol_locale.text("$mpk_tss_pereferial_ups_bat_level_title");
        }
        battery_level() {
            return null;
        }
        Bat_time() {
            return ((obj) => {
                obj.name = () => this.bat_time_title();
                obj.value = () => this.battery_time();
                obj.updated = () => this.updated();
                return obj;
            })(new this.$.$mpk_tss_parameter());
        }
        bat_time_title() {
            return this.$.$mol_locale.text("$mpk_tss_pereferial_ups_bat_time_title");
        }
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mpk_tss_pereferial_details extends $.$mol_page {
        unit() {
            return null;
        }
        minimal_width() {
            return 400;
        }
        tools() {
            return [this.Details_close()];
        }
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
        Details_close_icon() {
            return ((obj) => {
                return obj;
            })(new this.$.$mol_icon_cross());
        }
        body() {
            return [this.unit_details()];
        }
        unit_details() {
            return null;
        }
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
        attr() {
            return (Object.assign({}, super.attr(), { "mol_card_status_type": this.status() }));
        }
        status() {
            return "";
        }
        rows() {
            return [this.Content(), this.Status()];
        }
        Content() {
            return ((obj) => {
                obj.sub = () => this.content();
                return obj;
            })(new this.$.$mol_view());
        }
        content() {
            return [];
        }
        Status() {
            return ((obj) => {
                obj.minimal_height = () => 30;
                obj.sub = () => [this.status_text()];
                return obj;
            })(new this.$.$mol_view());
        }
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mpk_tss_card extends $.$mpk_tss_link {
        minimal_height() {
            return 32;
        }
        sub() {
            return [this.Card()];
        }
        Card() {
            return ((obj) => {
                obj.status = () => this.status();
                obj.Status = () => this.Status();
                obj.Content = () => this.Content();
                return obj;
            })(new this.$.$mol_card());
        }
        status() {
            return "";
        }
        Status() {
            return ((obj) => {
                obj.sub = () => [this.Status_text(), this.Tools()];
                return obj;
            })(new this.$.$mol_view());
        }
        Status_text() {
            return null;
        }
        Tools() {
            return ((obj) => {
                obj.sub = () => this.tools();
                return obj;
            })(new this.$.$mol_view());
        }
        tools() {
            return [];
        }
        Status_action() {
            return ((obj) => {
                obj.event_click = (event) => this.status_click(event);
                obj.sub = () => [this.Status_icon()];
                return obj;
            })(new this.$.$mol_button_minor());
        }
        status_click(event, force) {
            return (event !== void 0) ? event : null;
        }
        Status_icon() {
            return ((obj) => {
                return obj;
            })(new this.$.$mpk_tss_icon_cloud_download());
        }
        Content() {
            return ((obj) => {
                obj.sub = () => this.items();
                return obj;
            })(new this.$.$mol_row());
        }
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
        unit() {
            return null;
        }
        arg() {
            return ({
                "unit": this.unit_id(),
            });
        }
        unit_id() {
            return "";
        }
        copy_params() {
            return ["login", "page", "units"];
        }
        status() {
            return this.unit_status();
        }
        unit_status() {
            return "";
        }
        Status_text() {
            return ((obj) => {
                obj.colors = () => false;
                obj.status = () => this.unit_status();
                return obj;
            })(new this.$.$mpk_tss_pereferial_status());
        }
        Status_icon() {
            return ((obj) => {
                return obj;
            })(new this.$.$mpk_tss_icon_autorenew());
        }
        status_click(event, force) {
            return this.unit_status_click(event);
        }
        unit_status_click(event, force) {
            return (event !== void 0) ? event : null;
        }
        items() {
            return [this.Type_item(), this.Name_item()];
        }
        Type_item() {
            return ((obj) => {
                obj.title = () => this.type_title();
                obj.content = () => this.type();
                return obj;
            })(new this.$.$mol_labeler());
        }
        type_title() {
            return this.$.$mol_locale.text("$mpk_tss_pereferial_link_type_title");
        }
        type() {
            return "";
        }
        Name_item() {
            return ((obj) => {
                obj.title = () => this.name_title();
                obj.content = () => this.name();
                return obj;
            })(new this.$.$mol_labeler());
        }
        name_title() {
            return this.$.$mol_locale.text("$mpk_tss_pereferial_link_name_title");
        }
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mpk_tss_pereferial_list extends $.$mol_view {
        title() {
            return this.$.$mol_locale.text("$mpk_tss_pereferial_list_title");
        }
        pages() {
            return [this.Main(), this.Unit_current()];
        }
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
        event_top(e, force) {
            return (e !== void 0) ? e : null;
        }
        tools() {
            return [];
        }
        unit_current_id(v, force) {
            return (v !== void 0) ? v : "";
        }
        filter_value(val, force) {
            return (val !== void 0) ? val : "";
        }
        List() {
            return ((obj) => {
                obj.rows = () => this.unit_links();
                return obj;
            })(new this.$.$mol_list());
        }
        unit_links() {
            return [];
        }
        Unit_current() {
            return null;
        }
        Unit_details(id) {
            return ((obj) => {
                obj.event_top = (e) => this.details_event_top(e);
                obj.unit = () => this.unit(id);
                return obj;
            })(new this.$.$mpk_tss_pereferial_details());
        }
        details_event_top(e, force) {
            return (e !== void 0) ? e : null;
        }
        unit(id) {
            return null;
        }
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
        title() {
            return this.$.$mol_locale.text("$mpk_tss_sensors_title");
        }
        body() {
            return [this.Content()];
        }
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
    function $mol_maybe(value) {
        return (value == null) ? [] : [value];
    }
    $.$mol_maybe = $mol_maybe;
})($ || ($ = {}));
//maybe.js.map
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
        attr() {
            return (Object.assign({}, super.attr(), { "mol_check_checked": this.checked(), "aria-checked": this.checked(), "role": "checkbox" }));
        }
        checked(val, force) {
            return (val !== void 0) ? val : false;
        }
        sub() {
            return [this.Icon(), this.label()];
        }
        Icon() {
            return null;
        }
        label() {
            return [this.Title()];
        }
        Title() {
            return ((obj) => {
                obj.sub = () => [this.title()];
                return obj;
            })(new this.$.$mol_view());
        }
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
    class $mol_check_icon extends $.$mol_check {
    }
    $.$mol_check_icon = $mol_check_icon;
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
    class $mpk_tss_reports_check_warning extends $.$mol_check_icon {
        checked(val, force) {
            return this.filter_warning(val);
        }
        filter_warning(val, force) {
            return (val !== void 0) ? val : true;
        }
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mpk_tss_reports_train_page extends $.$mol_page {
        minimal_width() {
            return 520;
        }
        report_current_id(uri, force) {
            return (uri !== void 0) ? uri : "";
        }
        sub() {
            return [this.Head(), this.Search(), this.Body()];
        }
        Search() {
            return ((obj) => {
                obj.sub = () => [this.Filter_number(), this.Filter_warning()];
                return obj;
            })(new this.$.$mol_view());
        }
        Filter_number() {
            return ((obj) => {
                obj.hint = () => this.hint();
                obj.query = (val) => this.filter_number(val);
                return obj;
            })(new this.$.$mol_search());
        }
        hint() {
            return this.$.$mol_locale.text("$mpk_tss_reports_train_page_hint");
        }
        filter_number(val, force) {
            return (val !== void 0) ? val : "";
        }
        Filter_warning() {
            return ((obj) => {
                obj.checked = (val) => this.filter_warning(val);
                return obj;
            })(new this.$.$mpk_tss_reports_check_warning());
        }
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
    class $mpk_tss_card_list extends $.$mol_list {
        minimal_width() {
            return 300;
        }
        current_id() {
            return "";
        }
        attr() {
            return (Object.assign({}, super.attr(), { "mpk_tss_card_list_selected": this.selected() }));
        }
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
    class $mpk_tss_reports_resolution extends $.$mol_view {
        attr() {
            return (Object.assign({}, super.attr(), { "mpk_tss_reports_resolution_type": this.status() }));
        }
        status() {
            return "";
        }
        statuses() {
            return ({
                "success": this.success(),
                "warning": this.warning(),
            });
        }
        success() {
            return this.$.$mol_locale.text("$mpk_tss_reports_resolution_success");
        }
        warning() {
            return this.$.$mol_locale.text("$mpk_tss_reports_resolution_warning");
        }
        icons() {
            return ({
                "success": this.Success(),
                "warning": this.Warning(),
            });
        }
        Success() {
            return ((obj) => {
                return obj;
            })(new this.$.$mpk_tss_icon_circle_outline());
        }
        Warning() {
            return ((obj) => {
                return obj;
            })(new this.$.$mpk_tss_icon_round_warning());
        }
        sub() {
            return [this.Text()];
        }
        Text() {
            return ((obj) => {
                obj.sub = () => [this.status_text()];
                return obj;
            })(new this.$.$mol_view());
        }
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
        sub() {
            return [this.value(), this.spacer(), this.unit()];
        }
        value() {
            return 0;
        }
        spacer() {
            return " ";
        }
        unit() {
            return this.$.$mol_locale.text("$mpk_tss_parameter_speed_unit");
        }
    }
    $.$mpk_tss_parameter_speed = $mpk_tss_parameter_speed;
})($ || ($ = {}));
//speed.view.tree.js.map
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
        attr() {
            return (Object.assign({}, super.attr(), { "mpk_tss_reports_delivery_type": this.status() }));
        }
        status() {
            return null;
        }
        statuses() {
            return ({
                "preparing": this.preparing(),
                "sending": this.sending(),
                "sent": this.sent(),
                "error": this.error(),
            });
        }
        preparing() {
            return this.$.$mol_locale.text("$mpk_tss_reports_delivery_preparing");
        }
        sending() {
            return this.$.$mol_locale.text("$mpk_tss_reports_delivery_sending");
        }
        sent() {
            return this.$.$mol_locale.text("$mpk_tss_reports_delivery_sent");
        }
        error() {
            return this.$.$mol_locale.text("$mpk_tss_reports_delivery_error");
        }
        icons() {
            return ({
                "preparing": this.Preparing(),
                "sending": this.Sending(),
                "sent": this.Sent(),
                "error": this.Error(),
            });
        }
        Preparing() {
            return ((obj) => {
                return obj;
            })(new this.$.$mpk_tss_icon_sync());
        }
        Sending() {
            return ((obj) => {
                return obj;
            })(new this.$.$mpk_tss_icon_sync());
        }
        Sent() {
            return ((obj) => {
                return obj;
            })(new this.$.$mpk_tss_icon_done());
        }
        Error() {
            return ((obj) => {
                return obj;
            })(new this.$.$mpk_tss_icon_clear());
        }
        sub() {
            return [this.Icon(), this.Text()];
        }
        Icon() {
            return null;
        }
        Text() {
            return ((obj) => {
                obj.sub = () => [this.status_text()];
                return obj;
            })(new this.$.$mol_view());
        }
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mpk_tss_reports_train_link extends $.$mpk_tss_card {
        report() {
            return null;
        }
        arg() {
            return ({
                "report": this.report_id(),
            });
        }
        report_id() {
            return "";
        }
        copy_params() {
            return ["login", "page", "trains", "carriages", "train_warning", "carriage_warning"];
        }
        status() {
            return this.resolution();
        }
        Status_text() {
            return ((obj) => {
                obj.status = () => this.resolution();
                return obj;
            })(new this.$.$mpk_tss_reports_resolution());
        }
        resolution() {
            return null;
        }
        status_click(event, force) {
            return this.report_status_click(event);
        }
        report_status_click(event, force) {
            return (event !== void 0) ? event : null;
        }
        items() {
            return [this.Id(), this.Started(), this.Average_speed(), this.Delivery(), this.Train_number()];
        }
        Id() {
            return ((obj) => {
                obj.title = () => this.id_title();
                obj.content = () => this.report_id();
                return obj;
            })(new this.$.$mol_labeler());
        }
        id_title() {
            return this.$.$mol_locale.text("$mpk_tss_reports_train_link_id_title");
        }
        Started() {
            return ((obj) => {
                obj.title = () => this.started_title();
                obj.content = () => this.started();
                return obj;
            })(new this.$.$mol_labeler());
        }
        started_title() {
            return this.$.$mol_locale.text("$mpk_tss_reports_train_link_started_title");
        }
        started() {
            return "";
        }
        Average_speed() {
            return ((obj) => {
                obj.title = () => this.average_speed_title();
                obj.content = () => this.Average_speed_formatted();
                return obj;
            })(new this.$.$mol_labeler());
        }
        average_speed_title() {
            return this.$.$mol_locale.text("$mpk_tss_reports_train_link_average_speed_title");
        }
        Average_speed_formatted() {
            return ((obj) => {
                obj.value = () => this.average_speed();
                return obj;
            })(new this.$.$mpk_tss_parameter_speed());
        }
        average_speed() {
            return 0;
        }
        Delivery() {
            return ((obj) => {
                obj.title = () => this.delivery_title();
                obj.Content = () => this.Delivery_value();
                return obj;
            })(new this.$.$mol_labeler());
        }
        delivery_title() {
            return this.$.$mol_locale.text("$mpk_tss_reports_train_link_delivery_title");
        }
        Delivery_value() {
            return ((obj) => {
                obj.status = () => this.delivery();
                return obj;
            })(new this.$.$mpk_tss_reports_delivery());
        }
        delivery() {
            return null;
        }
        Train_number() {
            return ((obj) => {
                obj.title = () => this.train_number_title();
                obj.content = () => this.train_number();
                return obj;
            })(new this.$.$mol_labeler());
        }
        train_number_title() {
            return this.$.$mol_locale.text("$mpk_tss_reports_train_link_train_number_title");
        }
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mpk_tss_reports_carriage_page extends $.$mol_page {
        minimal_width() {
            return 337;
        }
        sub() {
            return [this.Head(), this.Search(), this.Body()];
        }
        Search() {
            return ((obj) => {
                obj.sub = () => [this.Filter_number(), this.Filter_warning()];
                return obj;
            })(new this.$.$mol_view());
        }
        Filter_number() {
            return ((obj) => {
                obj.hint = () => this.hint();
                obj.query = (val) => this.filter_number(val);
                return obj;
            })(new this.$.$mol_search());
        }
        hint() {
            return this.$.$mol_locale.text("$mpk_tss_reports_carriage_page_hint");
        }
        filter_number(val, force) {
            return (val !== void 0) ? val : "";
        }
        Filter_warning() {
            return ((obj) => {
                obj.checked = (val) => this.filter_warning(val);
                return obj;
            })(new this.$.$mpk_tss_reports_check_warning());
        }
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
        status() {
            return null;
        }
        none() {
            return this.$.$mol_locale.text("$mpk_tss_reports_violation_none");
        }
        empty() {
            return false;
        }
        statuses() {
            return ({
                "slider": this.slider(),
                "vyscherbiny": this.vyscherbiny(),
                "sink": this.sink(),
                "dent": this.dent(),
            });
        }
        slider() {
            return this.$.$mol_locale.text("$mpk_tss_reports_violation_slider");
        }
        vyscherbiny() {
            return this.$.$mol_locale.text("$mpk_tss_reports_violation_vyscherbiny");
        }
        sink() {
            return this.$.$mol_locale.text("$mpk_tss_reports_violation_sink");
        }
        dent() {
            return this.$.$mol_locale.text("$mpk_tss_reports_violation_dent");
        }
        group() {
            return [this.status_text()];
        }
        status_text() {
            return "";
        }
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
    class $mpk_tss_reports_carriage_violation extends $.$mpk_tss_reports_violation {
        group() {
            return [this.before(), this.status_text(), this.after()];
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
//violation.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mpk_tss_reports_carriage_load extends $.$mol_view {
        status() {
            return null;
        }
        statuses() {
            return ({
                "free": this.free(),
                "full": this.full(),
            });
        }
        free() {
            return this.$.$mol_locale.text("$mpk_tss_reports_carriage_load_free");
        }
        full() {
            return this.$.$mol_locale.text("$mpk_tss_reports_carriage_load_full");
        }
        sub() {
            return [this.status_text()];
        }
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mpk_tss_reports_carriage_link extends $.$mpk_tss_card {
        minimal_height() {
            return 100;
        }
        carriage() {
            return null;
        }
        arg() {
            return ({
                "carriage": this.carriage_id(),
            });
        }
        carriage_id() {
            return "";
        }
        copy_params() {
            return ["login", "page", "report", "carriages", "trains", "train_warning", "carriage_warning"];
        }
        title() {
            return this.$.$mol_locale.text("$mpk_tss_reports_carriage_link_title");
        }
        status() {
            return this.resolution();
        }
        Status_text() {
            return ((obj) => {
                obj.sub = () => [this.Status_main(), this.Violation()];
                return obj;
            })(new this.$.$mol_view());
        }
        Status_main() {
            return ((obj) => {
                obj.status = () => this.resolution();
                return obj;
            })(new this.$.$mpk_tss_reports_resolution());
        }
        resolution() {
            return null;
        }
        Violation() {
            return ((obj) => {
                obj.status = () => this.violation();
                return obj;
            })(new this.$.$mpk_tss_reports_carriage_violation());
        }
        violation() {
            return "";
        }
        Status_icon() {
            return ((obj) => {
                return obj;
            })(new this.$.$mpk_tss_icon_cloud_download());
        }
        status_click(event, force) {
            return this.carriage_status_click(event);
        }
        carriage_status_click(event, force) {
            return (event !== void 0) ? event : null;
        }
        additional() {
            return [];
        }
        items() {
            return [this.Place(), this.Carriage_number(), this.Load(), this.Speed()];
        }
        Place() {
            return ((obj) => {
                obj.title = () => this.place_title();
                obj.content = () => this.place();
                return obj;
            })(new this.$.$mol_labeler());
        }
        place_title() {
            return this.$.$mol_locale.text("$mpk_tss_reports_carriage_link_place_title");
        }
        place() {
            return "";
        }
        Carriage_number() {
            return ((obj) => {
                obj.title = () => this.carriage_number_title();
                obj.content = () => this.carriage_number();
                return obj;
            })(new this.$.$mol_labeler());
        }
        carriage_number_title() {
            return this.$.$mol_locale.text("$mpk_tss_reports_carriage_link_carriage_number_title");
        }
        carriage_number() {
            return "";
        }
        Load() {
            return ((obj) => {
                obj.title = () => this.load_title();
                obj.content = () => this.Load_text();
                return obj;
            })(new this.$.$mol_labeler());
        }
        load_title() {
            return this.$.$mol_locale.text("$mpk_tss_reports_carriage_link_load_title");
        }
        Load_text() {
            return ((obj) => {
                obj.status = () => this.load();
                return obj;
            })(new this.$.$mpk_tss_reports_carriage_load());
        }
        load() {
            return "";
        }
        Speed() {
            return ((obj) => {
                obj.title = () => this.speed_title();
                obj.content = () => this.Speed_formatted();
                return obj;
            })(new this.$.$mol_labeler());
        }
        speed_title() {
            return this.$.$mol_locale.text("$mpk_tss_reports_carriage_link_speed_title");
        }
        Speed_formatted() {
            return ((obj) => {
                obj.value = () => this.speed();
                return obj;
            })(new this.$.$mpk_tss_parameter_speed());
        }
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
        sub() {
            return [this.value(), this.spacer(), this.unit()];
        }
        value() {
            return 0;
        }
        spacer() {
            return " ";
        }
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
        value() {
            return null;
        }
        values() {
            return ({
                "hopper": this.hopper(),
                "flatcar": this.flatcar(),
                "tank": this.tank(),
                "covered": this.covered(),
            });
        }
        hopper() {
            return this.$.$mol_locale.text("$mpk_tss_reports_carriage_type_hopper");
        }
        flatcar() {
            return this.$.$mol_locale.text("$mpk_tss_reports_carriage_type_flatcar");
        }
        tank() {
            return this.$.$mol_locale.text("$mpk_tss_reports_carriage_type_tank");
        }
        covered() {
            return this.$.$mol_locale.text("$mpk_tss_reports_carriage_type_covered");
        }
        sub() {
            return [this.status_text()];
        }
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
        sub() {
            return [this.value(), this.spacer(), this.unit()];
        }
        value() {
            return 0;
        }
        spacer() {
            return " ";
        }
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
    class $mpk_tss_reports_wheel_link extends $.$mol_view {
        wheel() {
            return null;
        }
        axle_id() {
            return "";
        }
        attr() {
            return (Object.assign({}, super.attr(), { "mpk_tss_reports_wheel_type": this.resolution() }));
        }
        resolution() {
            return "";
        }
        sub() {
            return [this.name()];
        }
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mpk_tss_reports_axle_link extends $.$mpk_tss_link {
        axle() {
            return null;
        }
        arg() {
            return ({
                "axle": this.axle_id(),
            });
        }
        axle_id() {
            return "";
        }
        copy_params() {
            return ["login", "page", "report", "carriage", "trains", "carriages", "train_warining", "carriage_warining"];
        }
        sub() {
            return [this.Wheels()];
        }
        Wheels() {
            return ((obj) => {
                obj.rows = () => this.wheels();
                return obj;
            })(new this.$.$mol_list());
        }
        wheels() {
            return [];
        }
        Wheel(id) {
            return ((obj) => {
                obj.wheel = () => this.wheel(id);
                obj.axle_id = () => this.axle_id();
                return obj;
            })(new this.$.$mpk_tss_reports_wheel_link());
        }
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mpk_tss_reports_axle_list extends $.$mol_list {
        carriage() {
            return null;
        }
        axle_current() {
            return null;
        }
        rows() {
            return this.axis();
        }
        axis() {
            return [];
        }
        Axle_link(id) {
            return ((obj) => {
                obj.axle = () => this.axle(id);
                obj.current = () => this.current(id);
                return obj;
            })(new this.$.$mpk_tss_reports_axle_link());
        }
        axle(id) {
            return null;
        }
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
    class $mol_svg_group extends $.$mol_svg {
        dom_name() {
            return "g";
        }
    }
    $.$mol_svg_group = $mol_svg_group;
})($ || ($ = {}));
//group.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_vector extends Array {
        constructor(...values) { super(...values); }
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_plot_graph extends $.$mol_svg_group {
        series_x() {
            return [];
        }
        series_y() {
            return [];
        }
        attr() {
            return (Object.assign({}, super.attr(), { "mol_plot_graph_type": this.type() }));
        }
        type() {
            return "solid";
        }
        style() {
            return (Object.assign({}, super.style(), { "color": this.color() }));
        }
        color() {
            return "";
        }
        viewport() {
            return ((obj) => {
                return obj;
            })(new this.$.$mol_vector_2d(((obj) => {
                return obj;
            })(new this.$.$mol_vector_range(Infinity, -Infinity)), ((obj) => {
                return obj;
            })(new this.$.$mol_vector_range(Infinity, -Infinity))));
        }
        shift() {
            return [0, 0];
        }
        scale() {
            return [1, 1];
        }
        cursor_position() {
            return ((obj) => {
                return obj;
            })(new this.$.$mol_vector_2d(NaN, NaN));
        }
        dimensions_pane() {
            return ((obj) => {
                return obj;
            })(new this.$.$mol_vector_2d(((obj) => {
                return obj;
            })(new this.$.$mol_vector_range(Infinity, -Infinity)), ((obj) => {
                return obj;
            })(new this.$.$mol_vector_range(Infinity, -Infinity))));
        }
        dimensions() {
            return ((obj) => {
                return obj;
            })(new this.$.$mol_vector_2d(((obj) => {
                return obj;
            })(new this.$.$mol_vector_range(Infinity, -Infinity)), ((obj) => {
                return obj;
            })(new this.$.$mol_vector_range(Infinity, -Infinity))));
        }
        size_real() {
            return ((obj) => {
                return obj;
            })(new this.$.$mol_vector_2d(0, 0));
        }
        gap() {
            return ((obj) => {
                return obj;
            })(new this.$.$mol_vector_2d(((obj) => {
                return obj;
            })(new this.$.$mol_vector_range(0, 0)), ((obj) => {
                return obj;
            })(new this.$.$mol_vector_range(0, 0))));
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
        hue() {
            return NaN;
        }
        Sample() {
            return null;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_plot_graph.prototype, "viewport", null);
    __decorate([
        $.$mol_mem
    ], $mol_plot_graph.prototype, "cursor_position", null);
    __decorate([
        $.$mol_mem
    ], $mol_plot_graph.prototype, "dimensions_pane", null);
    __decorate([
        $.$mol_mem
    ], $mol_plot_graph.prototype, "dimensions", null);
    __decorate([
        $.$mol_mem
    ], $mol_plot_graph.prototype, "size_real", null);
    __decorate([
        $.$mol_mem
    ], $mol_plot_graph.prototype, "gap", null);
    $.$mol_plot_graph = $mol_plot_graph;
})($ || ($ = {}));
(function ($) {
    class $mol_plot_graph_sample extends $.$mol_view {
        attr() {
            return (Object.assign({}, super.attr(), { "mol_plot_graph_type": this.type() }));
        }
        type() {
            return "solid";
        }
        style() {
            return (Object.assign({}, super.style(), { "color": this.color() }));
        }
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_plot_pane extends $.$mol_svg_root {
        aspect() {
            return "none";
        }
        hue_base(val, force) {
            return (val !== void 0) ? val : NaN;
        }
        hue_shift(val, force) {
            return (val !== void 0) ? val : 111;
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
            return ((obj) => {
                return obj;
            })(new this.$.$mol_vector_2d(((obj) => {
                return obj;
            })(new this.$.$mol_vector_range(this.gap_left(), this.gap_right())), ((obj) => {
                return obj;
            })(new this.$.$mol_vector_range(this.gap_bottom(), this.gap_top()))));
        }
        shift_limit() {
            return ((obj) => {
                return obj;
            })(new this.$.$mol_vector_2d(((obj) => {
                return obj;
            })(new this.$.$mol_vector_range(0, 0)), ((obj) => {
                return obj;
            })(new this.$.$mol_vector_range(0, 0))));
        }
        shift_default() {
            return [0, 0];
        }
        shift(val, force) {
            return (val !== void 0) ? val : [0, 0];
        }
        scale_limit() {
            return ((obj) => {
                return obj;
            })(new this.$.$mol_vector_2d(((obj) => {
                return obj;
            })(new this.$.$mol_vector_range(0, Infinity)), ((obj) => {
                return obj;
            })(new this.$.$mol_vector_range(0, Infinity))));
        }
        scale_default() {
            return [0, 0];
        }
        scale(val, force) {
            return (val !== void 0) ? val : [1, 1];
        }
        scale_x(val, force) {
            return (val !== void 0) ? val : 0;
        }
        scale_y(val, force) {
            return (val !== void 0) ? val : 0;
        }
        size() {
            return ((obj) => {
                return obj;
            })(new this.$.$mol_vector_2d(0, 0));
        }
        size_real() {
            return ((obj) => {
                return obj;
            })(new this.$.$mol_vector_2d(1, 1));
        }
        dimensions_viewport() {
            return ((obj) => {
                return obj;
            })(new this.$.$mol_vector_2d(((obj) => {
                return obj;
            })(new this.$.$mol_vector_range(Infinity, -Infinity)), ((obj) => {
                return obj;
            })(new this.$.$mol_vector_range(Infinity, -Infinity))));
        }
        dimensions() {
            return ((obj) => {
                return obj;
            })(new this.$.$mol_vector_2d(((obj) => {
                return obj;
            })(new this.$.$mol_vector_range(Infinity, -Infinity)), ((obj) => {
                return obj;
            })(new this.$.$mol_vector_range(Infinity, -Infinity))));
        }
        sub() {
            return this.graphs_sorted();
        }
        graphs_sorted() {
            return [];
        }
        graphs_colored() {
            return this.graphs_positioned();
        }
        graphs_positioned() {
            return this.graphs();
        }
        graphs() {
            return [];
        }
        cursor_position(val, force) {
            return (val !== void 0) ? val : ((obj) => {
                return obj;
            })(new this.$.$mol_vector_2d(NaN, NaN));
        }
        plugins() {
            return [...super.plugins(), this.Meter(), this.Touch()];
        }
        width() {
            return this.Meter().width();
        }
        height() {
            return this.Meter().height();
        }
        Meter() {
            return ((obj) => {
                return obj;
            })(new this.$.$mol_meter());
        }
        Touch() {
            return ((obj) => {
                obj.zoom = (val) => this.scale_x(val);
                obj.pan = (val) => this.shift(val);
                obj.pos = (val) => this.cursor_position(val);
                return obj;
            })(new this.$.$mol_touch());
        }
        event() {
            return (Object.assign({}, super.event(), { "dblclick": (event) => this.reset(event) }));
        }
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
    ], $mol_plot_pane.prototype, "shift_limit", null);
    __decorate([
        $.$mol_mem
    ], $mol_plot_pane.prototype, "shift", null);
    __decorate([
        $.$mol_mem
    ], $mol_plot_pane.prototype, "scale_limit", null);
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
    ], $mol_plot_pane.prototype, "dimensions", null);
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_chart_legend extends $.$mol_scroll {
        graphs() {
            return [];
        }
        sub() {
            return this.graph_legends();
        }
        graph_legends() {
            return [];
        }
        Graph_legend(id) {
            return ((obj) => {
                obj.sub = () => [this.Graph_sample_box(id), this.Graph_title(id)];
                return obj;
            })(new this.$.$mol_view());
        }
        Graph_sample_box(id) {
            return ((obj) => {
                obj.sub = () => [this.Graph_sample(id)];
                return obj;
            })(new this.$.$mol_view());
        }
        Graph_sample(id) {
            return null;
        }
        Graph_title(id) {
            return ((obj) => {
                obj.sub = () => [this.graph_title(id)];
                return obj;
            })(new this.$.$mol_view());
        }
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_chart extends $.$mol_view {
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
            return [this.Plot(), this.Legend()];
        }
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
        hue_base() {
            return 140;
        }
        hue_shift() {
            return 111;
        }
        Legend() {
            return ((obj) => {
                obj.graphs = () => this.graphs();
                return obj;
            })(new this.$.$mol_chart_legend());
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_chart.prototype, "Plot", null);
    __decorate([
        $.$mol_mem
    ], $mol_chart.prototype, "Legend", null);
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
        points_max() {
            return Infinity;
        }
        style() {
            return (Object.assign({}, super.style(), { "stroke-width": this.diameter() }));
        }
        diameter() {
            return 8;
        }
        sub() {
            return [this.Curve()];
        }
        Curve() {
            return ((obj) => {
                obj.geometry = () => this.curve();
                return obj;
            })(new this.$.$mol_svg_path());
        }
        curve() {
            return "";
        }
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
    class $mol_svg_rect extends $.$mol_svg {
        dom_name() {
            return "rect";
        }
        pos() {
            return [];
        }
        attr() {
            return (Object.assign({}, super.attr(), { "width": this.width(), "height": this.height(), "x": this.pos_x(), "y": this.pos_y() }));
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
        dom_name() {
            return "text";
        }
        pos() {
            return [];
        }
        attr() {
            return (Object.assign({}, super.attr(), { "x": this.pos_x(), "y": this.pos_y(), "text-anchor": this.align() }));
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
        sub() {
            return [this.text()];
        }
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_svg_text_box extends $.$mol_svg_group {
        font_size() {
            return 16;
        }
        sub() {
            return [this.Back(), this.Text()];
        }
        Back() {
            return ((obj) => {
                obj.width = () => this.box_width();
                obj.height = () => this.box_height();
                obj.pos = () => [this.box_pos_x(), this.box_pos_y()];
                return obj;
            })(new this.$.$mol_svg_rect());
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
        Text() {
            return ((obj) => {
                obj.pos = () => [this.pos_x(), this.pos_y()];
                obj.align = () => this.align();
                obj.sub = () => [this.text()];
                return obj;
            })(new this.$.$mol_svg_text());
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_plot_ruler extends $.$mol_plot_graph {
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
            return ((obj) => {
                return obj;
            })(new this.$.$mol_vector_range(Infinity, -Infinity));
        }
        viewport_axis() {
            return ((obj) => {
                return obj;
            })(new this.$.$mol_vector_range(Infinity, -Infinity));
        }
        axis_points() {
            return [];
        }
        normalize(val, force) {
            return (val !== void 0) ? val : 0;
        }
        precision() {
            return 1;
        }
        sub() {
            return [this.Background(), this.Curve(), this.labels_formatted(), this.Title()];
        }
        Background() {
            return ((obj) => {
                obj.pos_x = () => this.background_x();
                obj.pos_y = () => this.background_y();
                obj.width = () => this.background_width();
                obj.height = () => this.background_height();
                return obj;
            })(new this.$.$mol_svg_rect());
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
        Curve() {
            return ((obj) => {
                obj.geometry = () => this.curve();
                return obj;
            })(new this.$.$mol_svg_path());
        }
        curve() {
            return "";
        }
        labels_formatted() {
            return [];
        }
        Title() {
            return ((obj) => {
                obj.pos_x = () => this.title_pos_x();
                obj.pos_y = () => this.title_pos_y();
                obj.align = () => this.title_align();
                obj.text = () => this.title();
                return obj;
            })(new this.$.$mol_svg_text_box());
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
        Label(index) {
            return ((obj) => {
                obj.pos = () => this.label_pos(index);
                obj.text = () => this.label_text(index);
                obj.align = () => this.label_align();
                return obj;
            })(new this.$.$mol_svg_text());
        }
        label_pos(index) {
            return [this.label_pos_x(index), this.label_pos_y(index)];
        }
        label_pos_x(index) {
            return "";
        }
        label_pos_y(index) {
            return "";
        }
        label_text(index) {
            return "";
        }
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
                return step;
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
    class $mol_plot_ruler_vert extends $.$mol_plot_ruler {
        title_align() {
            return "end";
        }
        label_align() {
            return "end";
        }
        title_pos_y() {
            return "14";
        }
        label_pos_x(v) {
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
    class $mol_plot_ruler_hor extends $.$mol_plot_ruler {
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
        label_pos_y(v) {
            return this.title_pos_y();
        }
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_plot_mark_cross extends $.$mol_plot_graph {
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
            return ((obj) => {
                return obj;
            })(new this.$.$mol_vector_2d(((obj) => {
                return obj;
            })(new this.$.$mol_vector_range(Infinity, -Infinity)), ((obj) => {
                return obj;
            })(new this.$.$mol_vector_range(Infinity, -Infinity))));
        }
        sub() {
            return [this.Curve(), this.Label_x(), this.Label_y()];
        }
        Curve() {
            return ((obj) => {
                obj.geometry = () => this.curve();
                return obj;
            })(new this.$.$mol_svg_path());
        }
        curve() {
            return "";
        }
        Label_x() {
            return ((obj) => {
                obj.pos_x = () => this.title_x_pos_x();
                obj.pos_y = () => this.title_x_pos_y();
                obj.text = () => this.title_x();
                return obj;
            })(new this.$.$mol_svg_text_box());
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
        Label_y() {
            return ((obj) => {
                obj.pos_x = () => this.title_y_pos_x();
                obj.pos_y = () => this.title_y_pos_y();
                obj.text = () => this.title_y();
                return obj;
            })(new this.$.$mol_svg_text_box());
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
    }
    __decorate([
        $.$mol_mem
    ], $mol_plot_mark_cross.prototype, "dimensions", null);
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mpk_tss_reports_axle_chart extends $.$mol_chart {
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
            return [this.Forces_left(), this.Forces_right(), this.Vert_ruler(), this.Hor_ruler(), this.Cross()];
        }
        Forces_left() {
            return ((obj) => {
                obj.title = () => this.forces_left_title();
                obj.series_x = () => this.forces_left_x();
                obj.series_y = () => this.forces_left_y();
                obj.points_max = () => this.points_max();
                return obj;
            })(new this.$.$mol_plot_dot());
        }
        forces_left_title() {
            return this.$.$mol_locale.text("$mpk_tss_reports_axle_chart_forces_left_title");
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
        Forces_right() {
            return ((obj) => {
                obj.title = () => this.forces_right_title();
                obj.series_x = () => this.forces_right_x();
                obj.series_y = () => this.forces_right_y();
                obj.points_max = () => this.points_max();
                return obj;
            })(new this.$.$mol_plot_dot());
        }
        forces_right_title() {
            return this.$.$mol_locale.text("$mpk_tss_reports_axle_chart_forces_right_title");
        }
        forces_right_x() {
            return [];
        }
        forces_right_y() {
            return [];
        }
        Vert_ruler() {
            return ((obj) => {
                obj.title = () => this.vert_title();
                return obj;
            })(new this.$.$mol_plot_ruler_vert());
        }
        vert_title() {
            return this.$.$mol_locale.text("$mpk_tss_reports_axle_chart_vert_title");
        }
        Hor_ruler() {
            return ((obj) => {
                obj.title = () => this.hor_title();
                obj.series_x = () => this.forces_left_x();
                return obj;
            })(new this.$.$mol_plot_ruler_hor());
        }
        hor_title() {
            return this.$.$mol_locale.text("$mpk_tss_reports_axle_chart_hor_title");
        }
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mpk_tss_reports_carriage_details extends $.$mol_page {
        carriage() {
            return null;
        }
        title() {
            return this.$.$mol_locale.text("$mpk_tss_reports_carriage_details_title");
        }
        minimal_width() {
            return 1400;
        }
        tools() {
            return [this.Close()];
        }
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
        Close_icon() {
            return ((obj) => {
                return obj;
            })(new this.$.$mol_icon_cross());
        }
        body() {
            return [this.Main(), this.Axle_chart()];
        }
        Main() {
            return ((obj) => {
                obj.sub = () => [this.Info(), this.Axle_list()];
                return obj;
            })(new this.$.$mol_row());
        }
        Info() {
            return ((obj) => {
                obj.carriage = () => this.carriage();
                obj.additional = () => [this.Weight(), this.Type(), this.Length(), this.Violation()];
                return obj;
            })(new this.$.$mpk_tss_reports_carriage_link());
        }
        Weight() {
            return ((obj) => {
                obj.title = () => this.total_weight_title();
                obj.content = () => this.Weight_content();
                return obj;
            })(new this.$.$mol_labeler());
        }
        total_weight_title() {
            return this.$.$mol_locale.text("$mpk_tss_reports_carriage_details_total_weight_title");
        }
        Weight_content() {
            return ((obj) => {
                obj.value = () => this.total_weight();
                return obj;
            })(new this.$.$mpk_tss_parameter_weight());
        }
        total_weight() {
            return 0;
        }
        Type() {
            return ((obj) => {
                obj.title = () => this.type_title();
                obj.content = () => this.Type_content();
                return obj;
            })(new this.$.$mol_labeler());
        }
        type_title() {
            return this.$.$mol_locale.text("$mpk_tss_reports_carriage_details_type_title");
        }
        Type_content() {
            return ((obj) => {
                obj.value = () => this.type();
                return obj;
            })(new this.$.$mpk_tss_reports_carriage_type());
        }
        type() {
            return "";
        }
        Length() {
            return ((obj) => {
                obj.title = () => this.length_title();
                obj.content = () => this.Length_content();
                return obj;
            })(new this.$.$mol_labeler());
        }
        length_title() {
            return this.$.$mol_locale.text("$mpk_tss_reports_carriage_details_length_title");
        }
        Length_content() {
            return ((obj) => {
                obj.value = () => this.length();
                return obj;
            })(new this.$.$mpk_tss_parameter_length());
        }
        length() {
            return 0;
        }
        Violation() {
            return ((obj) => {
                obj.title = () => this.violation_title();
                obj.content = () => this.Violation_content();
                return obj;
            })(new this.$.$mol_labeler());
        }
        violation_title() {
            return this.$.$mol_locale.text("$mpk_tss_reports_carriage_details_violation_title");
        }
        Violation_content() {
            return ((obj) => {
                obj.empty = () => true;
                obj.status = () => this.violation();
                return obj;
            })(new this.$.$mpk_tss_reports_violation());
        }
        violation() {
            return "";
        }
        axle_current() {
            return this.Axle_list().axle_current();
        }
        Axle_list() {
            return ((obj) => {
                obj.carriage = () => this.carriage();
                return obj;
            })(new this.$.$mpk_tss_reports_axle_list());
        }
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mpk_tss_reports_carriage_list extends $.$mol_view {
        report() {
            return null;
        }
        title() {
            return this.$.$mol_locale.text("$mpk_tss_reports_carriage_list_title");
        }
        pages() {
            return [this.Main(), this.Carriage()];
        }
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
        filter_number(val, force) {
            return (val !== void 0) ? val : "";
        }
        filter_warning(val, force) {
            return (val !== void 0) ? val : true;
        }
        event_top(e, force) {
            return (e !== void 0) ? e : null;
        }
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
        Details_close_icon() {
            return ((obj) => {
                return obj;
            })(new this.$.$mol_icon_cross());
        }
        Carriages() {
            return ((obj) => {
                obj.rows = () => this.carriage_links();
                return obj;
            })(new this.$.$mol_list());
        }
        carriage_links() {
            return [];
        }
        Carriage() {
            return null;
        }
        Carriage_details(id) {
            return ((obj) => {
                obj.carriage = () => this.carriage(id);
                obj.event_top = (e) => this.focus_main(e);
                return obj;
            })(new this.$.$mpk_tss_reports_carriage_details());
        }
        carriage(id) {
            return null;
        }
        focus_main(e, force) {
            return (e !== void 0) ? e : null;
        }
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mpk_tss_reports_train_list extends $.$mol_view {
        title() {
            return this.$.$mol_locale.text("$mpk_tss_reports_train_list_title");
        }
        pages() {
            return [this.Main()];
        }
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
        event_top(e, force) {
            return (e !== void 0) ? e : null;
        }
        tools() {
            return [];
        }
        report_current_id(id, force) {
            return (id !== void 0) ? id : "";
        }
        filter_number(val, force) {
            return (val !== void 0) ? val : "";
        }
        filter_warning(val, force) {
            return (val !== void 0) ? val : true;
        }
        Reports() {
            return ((obj) => {
                obj.current_id = () => this.report_current_id();
                obj.minimal_width = () => 300;
                obj.rows = () => this.report_links();
                return obj;
            })(new this.$.$mpk_tss_card_list());
        }
        report_links() {
            return [];
        }
        Report_link(id) {
            return ((obj) => {
                obj.minimal_height = () => 100;
                obj.report = () => this.report(id);
                return obj;
            })(new this.$.$mpk_tss_reports_train_link());
        }
        report(id) {
            return null;
        }
        Report_details(id) {
            return ((obj) => {
                obj.report = () => this.report(id);
                obj.event_top = (e) => this.focus_main(e);
                return obj;
            })(new this.$.$mpk_tss_reports_carriage_list());
        }
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
    class $mol_image extends $.$mol_view {
        dom_name() {
            return "img";
        }
        field() {
            return (Object.assign({}, super.field(), { "src": this.uri(), "alt": this.title() }));
        }
        uri() {
            return "";
        }
    }
    $.$mol_image = $mol_image;
})($ || ($ = {}));
//image.view.tree.js.map
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
        label() {
            return [this.name(), this.Bid()];
        }
        name() {
            return "";
        }
        Bid() {
            return ((obj) => {
                obj.sub = () => [this.bid()];
                return obj;
            })(new this.$.$mol_view());
        }
        bid() {
            return "";
        }
        Content() {
            return this.control();
        }
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_form extends $.$mol_view {
        submit_blocked() {
            return false;
        }
        event() {
            return (Object.assign({}, super.event(), { "keydown": (event) => this.keydown(event) }));
        }
        keydown(event, force) {
            return (event !== void 0) ? event : null;
        }
        submit(event, force) {
            return (event !== void 0) ? event : null;
        }
        sub() {
            return [this.Bar_fields(), this.Bar_buttons()];
        }
        Bar_fields() {
            return ((obj) => {
                obj.sub = () => this.form_fields();
                return obj;
            })(new this.$.$mol_view());
        }
        form_fields() {
            return [];
        }
        Bar_buttons() {
            return ((obj) => {
                obj.sub = () => this.buttons();
                return obj;
            })(new this.$.$mol_row());
        }
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
                if (next.ctrlKey && next.keyCode === 13 && !this.submit_blocked())
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
        submit(v, force) {
            return (v !== void 0) ? v : false;
        }
        sub() {
            return [this.Form()];
        }
        Form() {
            return ((obj) => {
                obj.form_fields = () => [this.Login_field(), this.Password_field()];
                obj.buttons = () => [this.Submit()];
                return obj;
            })(new this.$.$mol_form());
        }
        Login_field() {
            return ((obj) => {
                obj.name = () => this.login_label();
                obj.control = () => this.Login();
                return obj;
            })(new this.$.$mol_form_field());
        }
        login_label() {
            return this.$.$mol_locale.text("$mpk_tss_login_login_label");
        }
        Login() {
            return ((obj) => {
                obj.value = (val) => this.login(val);
                return obj;
            })(new this.$.$mol_string());
        }
        login(val, force) {
            return (val !== void 0) ? val : "";
        }
        Password_field() {
            return ((obj) => {
                obj.name = () => this.password_label();
                obj.control = () => this.Password();
                return obj;
            })(new this.$.$mol_form_field());
        }
        password_label() {
            return this.$.$mol_locale.text("$mpk_tss_login_password_label");
        }
        Password() {
            return ((obj) => {
                obj.value = (val) => this.password(val);
                obj.type = () => "password";
                return obj;
            })(new this.$.$mol_string());
        }
        password(val, force) {
            return (val !== void 0) ? val : "";
        }
        Submit() {
            return ((obj) => {
                obj.sub = () => [this.submit_label()];
                obj.event_click = (val) => this.event_submit(val);
                obj.disabled = () => this.submit_blocked();
                return obj;
            })(new this.$.$mol_button_major());
        }
        submit_label() {
            return this.$.$mol_locale.text("$mpk_tss_login_submit_label");
        }
        event_submit(val, force) {
            return (val !== void 0) ? val : null;
        }
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
                this.submit(true);
            }
        }
        $$.$mpk_tss_login = $mpk_tss_login;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//login.view.js.map
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
        units_all() {
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
            return $mpk_tss_reports_domain_mock_carriages.make(Object.assign({}, config, { carriages_all: () => this.carriages_store().carriages_all(), carriage: (id) => this.carriages_store().carriage(id) }));
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mpk_tss extends $.$mol_view {
        title() {
            return "Terminal № %terminal_number | Traffic security system";
        }
        attr() {
            return ({
                "mol_theme": this.theme(),
            });
        }
        theme() {
            return "$mol_theme_light";
        }
        terminal_text() {
            return this.$.$mol_locale.text("$mpk_tss_terminal_text");
        }
        sub() {
            return [this.Head(), this.Body()];
        }
        Head() {
            return ((obj) => {
                obj.sub = () => [this.Terminal_link(), this.Logged_user()];
                return obj;
            })(new this.$.$mol_view());
        }
        Terminal_link() {
            return ((obj) => {
                obj.enabled = () => false;
                obj.sub = () => [this.terminal_formatted_label()];
                return obj;
            })(new this.$.$mol_button_minor());
        }
        terminal_formatted_label() {
            return "";
        }
        Logged_user() {
            return this.Body().Logged_user();
        }
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
        Logged_user() {
            return null;
        }
        User_link() {
            return ((obj) => {
                obj.event_click = (event) => this.logout_click(event);
                obj.sub = () => [this.User_email(), this.User_signout()];
                return obj;
            })(new this.$.$mol_button_minor());
        }
        logout_click(event, force) {
            return (event !== void 0) ? event : null;
        }
        User_email() {
            return ((obj) => {
                obj.sub = () => [this.logged_email()];
                return obj;
            })(new this.$.$mol_view());
        }
        logged_email() {
            return "";
        }
        User_signout() {
            return ((obj) => {
                return obj;
            })(new this.$.$mpk_tss_icon_exit_to_app());
        }
        Menu_item(id) {
            return ((obj) => {
                obj.arg = () => this.menu_page_arg(id);
                obj.title = () => this.menu_page_title(id);
                obj.copy_params = () => ["login"];
                return obj;
            })(new this.$.$mpk_tss_link());
        }
        menu_page_arg(id) {
            return ({});
        }
        menu_page_title(id) {
            return "";
        }
        menu_pages() {
            return ({
                "summary": this.Summary(),
                "software": this.Software(),
                "pereferial": this.Pereferial(),
                "sensors": this.Sensors(),
                "reports": this.Reports(),
            });
        }
        Summary() {
            return ((obj) => {
                obj.event_top = (event) => this.event_front_up(event);
                return obj;
            })(new this.$.$mpk_tss_summary());
        }
        Software() {
            return ((obj) => {
                obj.tools = () => this.common_tools();
                obj.event_top = (event) => this.event_front_up(event);
                return obj;
            })(new this.$.$mpk_tss_software());
        }
        Pereferial() {
            return ((obj) => {
                obj.tools = () => this.common_tools();
                obj.event_top = (event) => this.event_front_up(event);
                return obj;
            })(new this.$.$mpk_tss_pereferial_list());
        }
        Sensors() {
            return ((obj) => {
                obj.tools = () => this.common_tools();
                obj.event_top = (event) => this.event_front_up(event);
                return obj;
            })(new this.$.$mpk_tss_sensors());
        }
        Reports() {
            return ((obj) => {
                obj.tools = () => this.common_tools();
                obj.event_top = (event) => this.event_front_up(event);
                return obj;
            })(new this.$.$mpk_tss_reports_train_list());
        }
        common_tools() {
            return [this.Details_close()];
        }
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
        Details_close_icon() {
            return ((obj) => {
                return obj;
            })(new this.$.$mol_icon_cross());
        }
        pages() {
            return [this.Sidebar(), this.Summary(), this.menu_pages(), this.details()];
        }
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
        Logo() {
            return ((obj) => {
                obj.uri = () => "mpk/tss/tss_logo.svg";
                obj.event = () => ({
                    "click": (val) => this.event_top(val),
                });
                return obj;
            })(new this.$.$mol_image());
        }
        event_top(val, force) {
            return (val !== void 0) ? val : null;
        }
        sidebar_title() {
            return this.$.$mol_locale.text("$mpk_tss_main_sidebar_title");
        }
        sidebar_items() {
            return [];
        }
        Login() {
            return ((obj) => {
                obj.submit = (v) => this.login_submit(v);
                return obj;
            })(new this.$.$mpk_tss_login());
        }
        login_submit(v, force) {
            return (v !== void 0) ? v : false;
        }
        Menu() {
            return ((obj) => {
                obj.rows = () => this.menu_items();
                return obj;
            })(new this.$.$mol_list());
        }
        menu_items() {
            return [];
        }
        Foot_content() {
            return ((obj) => {
                obj.sub = () => [this.Foot_text()];
                return obj;
            })(new this.$.$mol_row());
        }
        Foot_text() {
            return ((obj) => {
                obj.sub = () => [this.copyright()];
                return obj;
            })(new this.$.$mol_view());
        }
        copyright() {
            return this.$.$mol_locale.text("$mpk_tss_main_copyright");
        }
        details() {
            return null;
        }
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
        attr() {
            return (Object.assign({}, super.attr(), { "tabindex": null }));
        }
        title() {
            return "";
        }
        tools() {
            return [];
        }
        body() {
            return [this.Image()];
        }
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
                Pereferial.$ = this.$;
                return Pereferial;
            }
            Reports() {
                const Reports = super.Reports();
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_section extends $.$mol_list {
        rows() {
            return [this.Head(), this.Content()];
        }
        Head() {
            return ((obj) => {
                obj.sub = () => [this.head()];
                return obj;
            })(new this.$.$mol_view());
        }
        head() {
            return null;
        }
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
    class $mpk_tss_summary_section extends $.$mol_section {
    }
    $.$mpk_tss_summary_section = $mpk_tss_summary_section;
})($ || ($ = {}));
//section.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mpk_tss_summary_status extends $.$mol_view {
        title() {
            return "";
        }
        statuses() {
            return ({
                "warning": this.warning(),
                "error": this.error(),
                "success": this.success(),
                "ready": this.ready(),
            });
        }
        warning() {
            return this.$.$mol_locale.text("$mpk_tss_summary_status_warning");
        }
        error() {
            return this.$.$mol_locale.text("$mpk_tss_summary_status_error");
        }
        success() {
            return this.$.$mol_locale.text("$mpk_tss_summary_status_success");
        }
        ready() {
            return this.$.$mol_locale.text("$mpk_tss_summary_status_ready");
        }
        sub() {
            return [this.title()];
        }
        attr() {
            return (Object.assign({}, super.attr(), { "mpk_tss_summary_status_type": this.type() }));
        }
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
        path() {
            return "M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z";
        }
    }
    $.$mol_icon_tick = $mol_icon_tick;
})($ || ($ = {}));
//tick.view.tree.js.map
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
        minimal_height() {
            return 32;
        }
        Icon() {
            return ((obj) => {
                return obj;
            })(new this.$.$mol_icon_chevron());
        }
        level() {
            return 0;
        }
        style() {
            return (Object.assign({}, super.style(), { "paddingLeft": this.level_style() }));
        }
        level_style() {
            return "0px";
        }
        checked(val, force) {
            return this.expanded(val);
        }
        expanded(val, force) {
            return (val !== void 0) ? val : false;
        }
        enabled() {
            return this.expandable();
        }
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_expander extends $.$mol_list {
        rows() {
            return [this.Label(), this.Content()];
        }
        Label() {
            return ((obj) => {
                obj.sub = () => [this.Trigger(), this.Tools()];
                return obj;
            })(new this.$.$mol_view());
        }
        Trigger() {
            return ((obj) => {
                obj.checked = (val) => this.expanded(val);
                obj.label = () => this.label();
                return obj;
            })(new this.$.$mol_check_expand());
        }
        expanded(val, force) {
            return (val !== void 0) ? val : false;
        }
        label() {
            return [this.title()];
        }
        Tools() {
            return null;
        }
        Content() {
            return ((obj) => {
                obj.sub = () => this.content();
                return obj;
            })(new this.$.$mol_view());
        }
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
        row_ids() {
            return [];
        }
        row_id(index) {
            return null;
        }
        col_ids() {
            return [];
        }
        records() {
            return ({});
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
        sub() {
            return [this.Table()];
        }
        Table() {
            return ((obj) => {
                obj.offset = () => this.gap_top();
                obj.sub = () => this.rows_visible();
                return obj;
            })(new this.$.$mol_grid_table());
        }
        gap_top() {
            return 0;
        }
        rows_visible() {
            return [];
        }
        rows() {
            return [];
        }
        Head() {
            return ((obj) => {
                obj.height = () => this.row_height();
                obj.cells = () => this.head_cells();
                return obj;
            })(new this.$.$mol_grid_row());
        }
        row_height() {
            return 40;
        }
        head_cells() {
            return [];
        }
        Row(id) {
            return ((obj) => {
                obj.height = () => this.row_height();
                obj.cells = () => this.cells(id);
                return obj;
            })(new this.$.$mol_grid_row());
        }
        cells(id) {
            return [];
        }
        Cell(id) {
            return ((obj) => {
                return obj;
            })(new this.$.$mol_view());
        }
        cell(id) {
            return null;
        }
        Cell_text(id) {
            return ((obj) => {
                obj.sub = () => this.cell_content_text(id);
                return obj;
            })(new this.$.$mol_grid_cell());
        }
        cell_content_text(id) {
            return this.cell_content(id);
        }
        cell_content(id) {
            return [];
        }
        Cell_number(id) {
            return ((obj) => {
                obj.sub = () => this.cell_content_number(id);
                return obj;
            })(new this.$.$mol_grid_number());
        }
        cell_content_number(id) {
            return this.cell_content(id);
        }
        Col_head(id) {
            return ((obj) => {
                obj.dom_name = () => "th";
                obj.sub = () => this.col_head_content(id);
                return obj;
            })(new this.$.$mol_float());
        }
        col_head_content(id) {
            return [];
        }
        Cell_branch(id) {
            return ((obj) => {
                obj.level = () => this.cell_level(id);
                obj.label = () => this.cell_content(id);
                obj.expanded = (val) => this.cell_expanded(id, val);
                return obj;
            })(new this.$.$mol_check_expand());
        }
        cell_level(id) {
            return 0;
        }
        cell_expanded(id, val, force) {
            return (val !== void 0) ? val : false;
        }
        Cell_content(id) {
            return [this.Cell_dimmer(id)];
        }
        Cell_dimmer(id) {
            return ((obj) => {
                obj.needle = () => this.needle();
                obj.haystack = () => this.cell_value(id);
                return obj;
            })(new this.$.$mol_dimmer());
        }
        needle() {
            return "";
        }
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
        dom_name() {
            return "table";
        }
        style() {
            return (Object.assign({}, super.style(), { "top": this.offset() }));
        }
        offset() {
            return 0;
        }
    }
    $.$mol_grid_table = $mol_grid_table;
})($ || ($ = {}));
(function ($) {
    class $mol_grid_gap extends $.$mol_view {
        style() {
            return (Object.assign({}, super.style(), { "top": this.offset() }));
        }
        offset() {
            return 0;
        }
    }
    $.$mol_grid_gap = $mol_grid_gap;
})($ || ($ = {}));
(function ($) {
    class $mol_grid_row extends $.$mol_view {
        dom_name() {
            return "tr";
        }
        style() {
            return (Object.assign({}, super.style(), { "height": this.height() }));
        }
        height() {
            return 40;
        }
        sub() {
            return this.cells();
        }
        cells() {
            return [];
        }
    }
    $.$mol_grid_row = $mol_grid_row;
})($ || ($ = {}));
(function ($) {
    class $mol_grid_cell extends $.$mol_view {
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
                if (!rows)
                    return null;
                const view_window = this.view_window();
                return [].concat(this.Head(), rows.slice(view_window.top, view_window.bottom).valueOf());
            }
            rows_visible_max() {
                return Math.ceil(this.$.$mol_view_visible_height() / this.row_height());
            }
            view_window() {
                const rows = this.rows();
                if (!rows)
                    return null;
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
        'code-comment-block': /(?:\/\*[^]*?\*\/|\/\+[^]*?\+\/)/,
        'code-string': /(?:".*?"|'.*?'|`.*?`|\/.+?\/[gmi]*)/,
        'code-comment-inline': /\/\/.*?$/,
        'code-number': /[+-]?(?:\d*\.)?\d+\w*/,
        'code-keyword': /\b(class|interface|type|function|extends|implements|module|namespace|import|export|include|require|var|let|const|for|do|while|until|in|of|new|if|then|else|switch|case|this|return|async|await|try|catch|break|continue|get|set|public|private|protected|string|boolean|number|null|undefined|true|false|void)\b/,
        'code-call': /\.?\w+(?=\()/,
        'code-field': /(?:\.\w+|[\w-]+\??\s*:)/,
        'code-global': /[$]\w*/,
        'code-decorator': /@.*?$/,
        'code-tag': /<\/?[\w-]+\/?>?/,
        'code-punctuation': /[\-\[\]\{\}\(\)<=>`~!\?@#\$%&\*_\+\\\/\|'";:\.,\^]/,
    });
})($ || ($ = {}));
//md.js.map
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
        uri_base() {
            return "";
        }
        text() {
            return "";
        }
        tokens() {
            return [];
        }
        Quote(id) {
            return ((obj) => {
                obj.text = () => this.quote_text(id);
                return obj;
            })(new this.$.$mol_text());
        }
        quote_text(id) {
            return "";
        }
        Row(id) {
            return ((obj) => {
                obj.sub = () => this.block_content(id);
                obj.type = () => this.block_type(id);
                return obj;
            })(new this.$.$mol_text_row());
        }
        block_content(id) {
            return [];
        }
        block_type(id) {
            return "";
        }
        Span(id) {
            return ((obj) => {
                return obj;
            })(new this.$.$mol_text_span());
        }
        Link(id) {
            return ((obj) => {
                return obj;
            })(new this.$.$mol_text_link());
        }
        Image(id) {
            return ((obj) => {
                return obj;
            })(new this.$.$mol_text_image());
        }
        Header(id) {
            return ((obj) => {
                obj.level = () => this.header_level(id);
                obj.content = () => this.header_content(id);
                return obj;
            })(new this.$.$mol_text_header());
        }
        header_level(id) {
            return 0;
        }
        header_content(id) {
            return [];
        }
        Table(id) {
            return ((obj) => {
                obj.head_cells = () => this.table_head_cells(id);
                obj.rows = () => this.table_rows(id);
                return obj;
            })(new this.$.$mol_grid());
        }
        table_head_cells(id) {
            return [];
        }
        table_rows(id) {
            return [];
        }
        Table_row(id) {
            return ((obj) => {
                obj.cells = () => this.table_cells(id);
                return obj;
            })(new this.$.$mol_grid_row());
        }
        table_cells(id) {
            return [];
        }
        Table_cell(id) {
            return ((obj) => {
                obj.sub = () => this.table_cell_content(id);
                return obj;
            })(new this.$.$mol_grid_cell());
        }
        table_cell_content(id) {
            return [];
        }
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
        minimal_height() {
            return 40;
        }
        attr() {
            return (Object.assign({}, super.attr(), { "mol_text_type": this.type() }));
        }
        type() {
            return "";
        }
    }
    $.$mol_text_row = $mol_text_row;
})($ || ($ = {}));
(function ($) {
    class $mol_text_header extends $.$mol_view {
        dom_name() {
            return "h";
        }
        minimal_height() {
            return 50;
        }
        attr() {
            return (Object.assign({}, super.attr(), { "mol_text_header_level": this.level() }));
        }
        level(val, force) {
            return (val !== void 0) ? val : 0;
        }
        sub() {
            return this.content();
        }
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
        dom_name() {
            return "span";
        }
        attr() {
            return (Object.assign({}, super.attr(), { "mol_text_type": this.type() }));
        }
        type(val, force) {
            return (val !== void 0) ? val : "";
        }
        sub() {
            return this.content();
        }
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
    class $mol_text_link extends $.$mol_view {
        dom_name() {
            return "a";
        }
        attr() {
            return (Object.assign({}, super.attr(), { "mol_text_type": this.type(), "href": this.link() }));
        }
        type(val, force) {
            return (val !== void 0) ? val : "";
        }
        link(val, force) {
            return (val !== void 0) ? val : "";
        }
        sub() {
            return this.content();
        }
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
        dom_name() {
            return "object";
        }
        attr() {
            return (Object.assign({}, super.attr(), { "allowfullscreen": true, "mol_text_type": this.type(), "data": this.link() }));
        }
        type(val, force) {
            return (val !== void 0) ? val : "";
        }
        link(val, force) {
            return (val !== void 0) ? val : "";
        }
        sub() {
            return [this.title()];
        }
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
                return $.$mol_syntax_md_flow.tokenize(this.text());
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
                return $.$mol_syntax_md_line.tokenize(text).map((token, index) => {
                    const id = `${prefix}/${index}`;
                    switch (token.name) {
                        case 'text-link': {
                            if (/^#|(\w+script+:)+/.test(token.chunks[1])) {
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
                return $.$mol_syntax_md_code.tokenize(text).map((token, index) => {
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
            $.$mol_mem_key
        ], $mol_text.prototype, "cell_contents", null);
        $$.$mol_text = $mol_text;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//text.view.js.map
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
        title() {
            return this.$.$mol_locale.text("$mpk_tss_summary_title");
        }
        minimal_width() {
            return 600;
        }
        body() {
            return [this.Statuses(), this.Log()];
        }
        Statuses() {
            return ((obj) => {
                obj.Content = () => ((obj) => {
                    obj.sub = () => [this.All(), this.Software(), this.Sensors(), this.Pereferials()];
                    return obj;
                })(new this.$.$mol_view());
                return obj;
            })(new this.$.$mpk_tss_summary_section());
        }
        All() {
            return ((obj) => {
                obj.type = () => "warning";
                return obj;
            })(new this.$.$mpk_tss_summary_status());
        }
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
        software_title() {
            return this.$.$mol_locale.text("$mpk_tss_summary_software_title");
        }
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
        sensors_title() {
            return this.$.$mol_locale.text("$mpk_tss_summary_sensors_title");
        }
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
        pereferial_title() {
            return this.$.$mol_locale.text("$mpk_tss_summary_pereferial_title");
        }
        Log() {
            return ((obj) => {
                obj.title = () => this.log_title();
                obj.Content = () => ((obj) => {
                    obj.text = () => " Wed 24 Apr 2019 02:33:14 PM MSK: Report was successfully sent\n Wed 24 Apr 2019 02:32:24 PM MSK: Connection to SKAT server (10.32.35.11) established\n Wed 24 Apr 2019 02:32:09 PM MSK: Connecting to SKAT server (10.32.35.11), attempt 1...\n Wed 24 Apr 2019 02:31:49 PM MSK: Violation report prepared to sending\n Wed 24 Apr 2019 02:31:45 PM MSK: Violation report successfully created\n Wed 24 Apr 2019 02:31:40 PM MSK: Values processing finished. Violation detected\n Wed 24 Apr 2019 02:31:35 PM MSK: Values processing finished. Violation detected\n Wed 24 Apr 2019 02:30:05 PM MSK: Values processing started";
                    return obj;
                })(new this.$.$mol_text());
                return obj;
            })(new this.$.$mol_expander());
        }
        log_title() {
            return this.$.$mol_locale.text("$mpk_tss_summary_log_title");
        }
    }
    __decorate([
        $.$mol_mem
    ], $mpk_tss_summary.prototype, "Statuses", null);
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
    $.$mpk_tss_summary = $mpk_tss_summary;
})($ || ($ = {}));
(function ($) {
    class $mpk_tss_summary_item extends $.$mpk_tss_link {
        copy_params() {
            return ["login"];
        }
        type() {
            return "";
        }
        sub() {
            return [this.Title(), this.Status()];
        }
        Title() {
            return ((obj) => {
                obj.sub = () => [this.title()];
                return obj;
            })(new this.$.$mol_view());
        }
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
;
"use strict";
var $;
(function ($_1) {
    let $$;
    (function ($$) {
        let $;
    })($$ = $_1.$$ || ($_1.$$ = {}));
    function $mol_test(set) {
        for (let name in set) {
            const code = set[name];
            const test = (typeof code === 'string') ? new Function('', code) : code;
            $_1.$mol_test_all.push($_1.$mol_log_group(name, test));
        }
        $mol_test_schedule();
    }
    $_1.$mol_test = $mol_test;
    $_1.$mol_test_mocks = [];
    $_1.$mol_test_all = [];
    async function $mol_test_run() {
        for (var test of $_1.$mol_test_all) {
            let context = Object.create($$);
            for (let mock of $_1.$mol_test_mocks)
                await mock(context);
            await test(context);
        }
        console.info('$mol_test', $_1.$mol_test_all.length);
    }
    $_1.$mol_test_run = $mol_test_run;
    let scheduled = false;
    function $mol_test_schedule() {
        if (scheduled)
            return;
        scheduled = true;
        setTimeout($_1.$mol_log_group('$mol_test', () => {
            scheduled = false;
            $mol_test_run();
        }));
    }
    $_1.$mol_test_schedule = $mol_test_schedule;
    $_1.$mol_test_mocks.push(context => {
        let seed = 0;
        context.Math = Object.create(Math);
        context.Math.random = () => Math.sin(seed++);
        const forbidden = ['XMLHttpRequest', 'fetch'];
        for (let api of forbidden) {
            context[api] = new Proxy(function () { }, {
                get() {
                    $_1.$mol_fail_hidden(new Error(`${api} is forbidden in tests`));
                },
                apply() {
                    $_1.$mol_fail_hidden(new Error(`${api} is forbidden in tests`));
                },
            });
        }
    });
    $mol_test({
        'mocked Math.random'($) {
            console.assert($.Math.random() === 0);
            console.assert($.Math.random() === Math.sin(1));
        },
        'forbidden XMLHttpRequest'($) {
            try {
                console.assert(void new $.XMLHttpRequest);
            }
            catch (error) {
                console.assert(error.message === 'XMLHttpRequest is forbidden in tests');
            }
        },
        'forbidden fetch'($) {
            try {
                console.assert(void $.fetch(''));
            }
            catch (error) {
                console.assert(error.message === 'fetch is forbidden in tests');
            }
        },
    });
})($ || ($ = {}));
//test.test.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_test({
        'objects by reference'() {
            $.$mol_assert_equal($.$mol_compare_any({}, {}), false);
        },
        'primitives by value'() {
            $.$mol_assert_equal($.$mol_compare_any('a', 'a'), true);
        },
        'NaN by value'() {
            $.$mol_assert_equal($.$mol_compare_any(Number.NaN, Number.NaN), true);
        },
        'NaN not equal zero'() {
            $.$mol_assert_equal($.$mol_compare_any(Number.NaN, 0), false);
        },
    });
})($ || ($ = {}));
//any.test.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_test({
        'return source when same object'() {
            const target = {};
            $.$mol_assert_equal($.$mol_conform(target, target), target);
        },
        'return target when some is not object'() {
            const obj = { a: 1 };
            $.$mol_assert_equal($.$mol_conform(true, obj), true);
            $.$mol_assert_equal($.$mol_conform(obj, true), obj);
        },
        'return target when some is null'() {
            const obj = { a: 1 };
            $.$mol_assert_equal($.$mol_conform(null, obj), null);
            $.$mol_assert_equal($.$mol_conform(obj, null), obj);
        },
        'return target when some is undefined'() {
            const obj = { a: 1 };
            $.$mol_assert_equal($.$mol_conform(undefined, obj), undefined);
            $.$mol_assert_equal($.$mol_conform(obj, undefined), obj);
        },
        'return target when different keys count'() {
            const target = [1, 2, 3];
            const source = [1, 2, 3, undefined];
            const result = $.$mol_conform(target, source);
            $.$mol_assert_equal(result, target);
            $.$mol_assert_equal(result.join(','), '1,2,3');
        },
        'return source when array values are strong equal'() {
            const source = [1, 2, 3];
            $.$mol_assert_equal($.$mol_conform([1, 2, 3], source), source);
        },
        'return source when object values are strong equal'() {
            const source = { a: 1, b: 2 };
            $.$mol_assert_equal($.$mol_conform({ a: 1, b: 2 }, source), source);
        },
        'return target when some values are not equal'() {
            const target = [1, 2, 3];
            const source = [1, 2, 5];
            const result = $.$mol_conform(target, source);
            $.$mol_assert_equal(result, target);
            $.$mol_assert_equal(result.join(','), '1,2,3');
        },
        'return source when values are deep equal'() {
            const source = { foo: { bar: 1 } };
            $.$mol_assert_equal($.$mol_conform({ foo: { bar: 1 } }, source), source);
        },
        'return target with equal values from source and not equal from target'() {
            const source = { foo: { xxx: 1 }, bar: { xxx: 2 } };
            const target = { foo: { xxx: 1 }, bar: { xxx: 3 } };
            const result = $.$mol_conform(target, source);
            $.$mol_assert_equal(result, target);
            $.$mol_assert_equal(result.foo, source.foo);
            $.$mol_assert_equal(result.bar, target.bar);
        },
        'return target when equal but with different class'() {
            const target = { '0': 1 };
            $.$mol_assert_equal($.$mol_conform(target, [1]), target);
        },
        'return target when conformer for class is not defined'() {
            const Obj = class {
            };
            const source = new Obj;
            const target = new Obj;
            const result = $.$mol_conform(target, source);
            $.$mol_assert_equal(result, target);
        },
        'return target when has cyclic reference'() {
            const source = { foo: {} };
            source['self'] = source;
            const target = { foo: {} };
            target['self'] = target;
            const result = $.$mol_conform(target, source);
            $.$mol_assert_equal(result, target);
            $.$mol_assert_equal(result['self'], target);
            $.$mol_assert_equal(result.foo, source.foo);
        },
        'return source when equal dates'() {
            const source = new Date(12345);
            const target = new Date(12345);
            const result = $.$mol_conform(target, source);
            $.$mol_assert_equal(result, source);
        },
        'return source when equal regular expressions'() {
            const source = /\x22/mig;
            const target = /\x22/mig;
            const result = $.$mol_conform(target, source);
            $.$mol_assert_equal(result, source);
        },
        'return cached value if already conformed'() {
            const source = { foo: { xxx: 1 }, bar: { xxx: 3 } };
            const target = { foo: { xxx: 2 }, bar: { xxx: 3 } };
            const result = $.$mol_conform(target, source);
            target.foo.xxx = 1;
            $.$mol_assert_equal($.$mol_conform(target.foo, source.foo), target.foo);
        },
        'skip readlony fields'() {
            const source = { foo: {}, bar: {} };
            const target = { foo: {}, bar: {} };
            Object.defineProperty(target, 'bar', { value: {}, writable: false });
            const result = $.$mol_conform(target, source);
            $.$mol_assert_equal(result, target);
            $.$mol_assert_equal(result.foo, source.foo);
            $.$mol_assert_equal(result.bar, target.bar);
        },
        'object with NaN'() {
            const source = { foo: Number.NaN };
            const target = { foo: Number.NaN };
            const result = $.$mol_conform(target, source);
            $.$mol_assert_equal(result, source);
        },
        'array with NaN'() {
            const source = [Number.NaN];
            const target = [Number.NaN];
            const result = $.$mol_conform(target, source);
            $.$mol_assert_equal(result, source);
        },
    });
})($ || ($ = {}));
//conform.test.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_test({
        'must be false'() {
            $.$mol_assert_not(0);
        },
        'must be true'() {
            $.$mol_assert_ok(1);
        },
        'two must be equal'() {
            $.$mol_assert_equal(2, 2);
        },
        'three must be equal'() {
            $.$mol_assert_equal(2, 2, 2);
        },
        'two must be unique'() {
            $.$mol_assert_unique([3], [3]);
        },
        'three must be unique'() {
            $.$mol_assert_unique([3], [3], [3]);
        },
        'two must be alike'() {
            $.$mol_assert_like([3], [3]);
        },
        'three must be alike'() {
            $.$mol_assert_like([3], [3], [3]);
        },
    });
})($ || ($ = {}));
//assert.test.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_assert_ok(value) {
        if (value)
            return;
        $.$mol_fail(new Error(`${value} ≠ true`));
    }
    $.$mol_assert_ok = $mol_assert_ok;
    function $mol_assert_not(value) {
        if (!value)
            return;
        $.$mol_fail(new Error(`${value} ≠ false`));
    }
    $.$mol_assert_not = $mol_assert_not;
    function $mol_assert_fail(handler, ErrorRight) {
        const fail = $.$mol_fail;
        try {
            $.$mol_fail = $.$mol_fail_hidden;
            handler();
        }
        catch (error) {
            if (!ErrorRight)
                return error;
            if (typeof ErrorRight === 'string') {
                if (error.message !== ErrorRight)
                    throw error;
            }
            else {
                if (!(error instanceof ErrorRight))
                    throw error;
            }
            return error;
        }
        finally {
            $.$mol_fail = fail;
        }
        $.$mol_fail(new Error('Not failed'));
    }
    $.$mol_assert_fail = $mol_assert_fail;
    function $mol_assert_equal(...args) {
        for (let i = 0; i < args.length; ++i) {
            for (let j = 0; j < args.length; ++j) {
                if (i === j)
                    continue;
                if (Number.isNaN(args[i]) && Number.isNaN(args[j]))
                    continue;
                if (args[i] !== args[j])
                    $.$mol_fail(new Error(`Not equal\n${args[i]}\n${args[j]}`));
            }
        }
    }
    $.$mol_assert_equal = $mol_assert_equal;
    function $mol_assert_unique(...args) {
        for (let i = 0; i < args.length; ++i) {
            for (let j = 0; j < args.length; ++j) {
                if (i === j)
                    continue;
                if (args[i] === args[j] || (Number.isNaN(args[i]) && Number.isNaN(args[j]))) {
                    $.$mol_fail(new Error(`args[${i}] = args[${j}] = ${args[i]}`));
                }
            }
        }
    }
    $.$mol_assert_unique = $mol_assert_unique;
    function $mol_assert_like(head, ...tail) {
        for (let value of tail) {
            value = $.$mol_conform(value, head);
            if (Number.isNaN(value) && Number.isNaN(head))
                continue;
            if (head !== value)
                $.$mol_fail(new Error(`Not like\n${head}\n${value}`));
            head = value;
        }
    }
    $.$mol_assert_like = $mol_assert_like;
})($ || ($ = {}));
//assert.js.map
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
    $.$mol_test({
        'run callback'() {
            let Plus1 = class Plus1 extends $.$mol_wrapper {
                static wrap(task) {
                    return function (...args) {
                        return task.call(this, ...args) + 1;
                    };
                }
            };
            Plus1 = __decorate([
                $.$mol_class
            ], Plus1);
            $.$mol_assert_equal(Plus1.run(() => 2), 3);
        },
        'wrap function'() {
            let Plus1 = class Plus1 extends $.$mol_wrapper {
                static wrap(task) {
                    return function (...args) {
                        return task.call(this, ...args) + 1;
                    };
                }
            };
            Plus1 = __decorate([
                $.$mol_class
            ], Plus1);
            const obj = {
                level: 2,
                pow: Plus1.func(function (a) {
                    return a ** this.level;
                })
            };
            $.$mol_assert_equal(obj.pow(2), 5);
        },
        'decorate instance method'() {
            let Plus1 = class Plus1 extends $.$mol_wrapper {
                static wrap(task) {
                    return function (...args) {
                        return task.call(this, ...args) + 1;
                    };
                }
            };
            Plus1 = __decorate([
                $.$mol_class
            ], Plus1);
            class Foo1 {
                constructor() {
                    this.level = 2;
                }
                pow(a) {
                    return a ** this.level;
                }
            }
            __decorate([
                Plus1.method
            ], Foo1.prototype, "pow", null);
            const Foo2 = Foo1;
            const foo = new Foo2;
            $.$mol_assert_equal(foo.pow(2), 5);
        },
        'decorate static method'() {
            let Plus1 = class Plus1 extends $.$mol_wrapper {
                static wrap(task) {
                    return function (...args) {
                        return task.call(this, ...args) + 1;
                    };
                }
            };
            Plus1 = __decorate([
                $.$mol_class
            ], Plus1);
            let Foo = class Foo {
                static pow(a) {
                    return a ** this.level;
                }
            };
            Foo.level = 2;
            __decorate([
                Plus1.method
            ], Foo, "pow", null);
            Foo = __decorate([
                $.$mol_class
            ], Foo);
            $.$mol_assert_equal(Foo.pow(2), 5);
        },
        'decorate class'() {
            let BarInc = class BarInc extends $.$mol_wrapper {
                static wrap(task) {
                    return function (...args) {
                        const foo = task.call(this, ...args);
                        foo.bar++;
                        return foo;
                    };
                }
            };
            BarInc = __decorate([
                $.$mol_class
            ], BarInc);
            let Foo = class Foo {
                constructor(bar) {
                    this.bar = bar;
                }
            };
            Foo = __decorate([
                BarInc.class,
                $.$mol_class
            ], Foo);
            $.$mol_assert_equal(new Foo(2).bar, 3);
        },
    });
})($ || ($ = {}));
//wrapper.test.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_after_mock_queue = [];
    function $mol_after_mock_warp() {
        const queue = $.$mol_after_mock_queue.splice(0);
        for (const task of queue)
            task();
    }
    $.$mol_after_mock_warp = $mol_after_mock_warp;
    class $mol_after_mock_commmon extends $.$mol_object2 {
        constructor(task) {
            super();
            this.task = task;
            this.promise = Promise.resolve();
            this.cancelled = false;
            $.$mol_after_mock_queue.push(task);
        }
        destructor() {
            const index = $.$mol_after_mock_queue.indexOf(this.task);
            if (index >= 0)
                $.$mol_after_mock_queue.splice(index, 1);
        }
    }
    $.$mol_after_mock_commmon = $mol_after_mock_commmon;
    class $mol_after_mock_timeout extends $mol_after_mock_commmon {
        constructor(delay, task) {
            super(task);
            this.delay = delay;
        }
    }
    $.$mol_after_mock_timeout = $mol_after_mock_timeout;
})($ || ($ = {}));
//mock.test.js.map
;
"use strict";
var $;
(function ($_1) {
    $_1.$mol_test_mocks.push($ => {
        $.$mol_after_timeout = $_1.$mol_after_mock_timeout;
    });
})($ || ($ = {}));
//timeout.test.js.map
;
"use strict";
var $;
(function ($_1) {
    $_1.$mol_test_mocks.push($ => {
        $.$mol_after_frame = $_1.$mol_after_mock_commmon;
    });
})($ || ($ = {}));
//frame.test.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_test({
        'trim array'() {
            const array = [undefined, null, 0, false, null, undefined, undefined];
            const correct = [undefined, null, 0, false, null];
            $.$mol_array_trim(array);
            $.$mol_assert_like(array, correct);
        }
    });
})($ || ($ = {}));
//trim.test.js.map
;
"use strict";
var $;
(function ($_1) {
    $_1.$mol_test_mocks.push(async ($) => {
        await $_1.$mol_fiber_warp();
        $_1.$mol_fiber.deadline = Date.now() + 100;
    });
})($ || ($ = {}));
//fiber.test.js.map
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
    $_1.$mol_test({
        'Value has js-path name'() {
            let App = class App extends $_1.$mol_object2 {
                static get title() { return new $_1.$mol_object2; }
            };
            __decorate([
                $_1.$mol_atom2_field
            ], App, "title", null);
            App = __decorate([
                $_1.$mol_class
            ], App);
            $_1.$mol_assert_equal(`${App.title}`, 'App.title');
        },
        'Simple property'() {
            class App extends $_1.$mol_object2 {
            }
            App.value = 1;
            __decorate([
                $_1.$mol_atom2_field
            ], App, "value", void 0);
            $_1.$mol_assert_equal(App.value, 1);
            App.value = 2;
            $_1.$mol_assert_equal(App.value, 2);
        },
        'Instant actualization'() {
            class Source extends $_1.$mol_object2 {
                constructor() {
                    super(...arguments);
                    this.value = 1;
                }
            }
            __decorate([
                $_1.$mol_atom2_field
            ], Source.prototype, "value", void 0);
            class App extends $_1.$mol_object2 {
                static get source() { return Source.make(); }
                static get value() { return this.source.value + 1; }
            }
            __decorate([
                $_1.$mol_atom2_field
            ], App, "source", null);
            __decorate([
                $_1.$mol_atom2_field
            ], App, "value", null);
            $_1.$mol_assert_equal(App.value, 2);
            App.source.value = 2;
            $_1.$mol_assert_equal(App.value, 3);
        },
        'Access to cached value'() {
            class App extends $_1.$mol_object2 {
                static get value() { return 1; }
            }
            __decorate([
                $_1.$mol_atom2_field
            ], App, "value", null);
            $_1.$mol_assert_equal($_1.$mol_atom2_value(() => App.value), undefined);
            $_1.$mol_assert_equal(App.value, 1);
            $_1.$mol_assert_equal($_1.$mol_atom2_value(() => App.value), 1);
        },
        'Do not recalc slaves on equal changes'() {
            class App extends $_1.$mol_object2 {
                static get result() { return this.first[0] + this.counter++; }
            }
            App.first = [1];
            App.counter = 0;
            __decorate([
                $_1.$mol_atom2_field
            ], App, "first", void 0);
            __decorate([
                $_1.$mol_atom2_field
            ], App, "result", null);
            $_1.$mol_assert_equal(App.result, 1);
            App.first = [1];
            $_1.$mol_assert_equal(App.result, 1);
        },
        'Do not recalc grand slave on equal direct slave result '() {
            class App extends $_1.$mol_object2 {
                static get second() { return Math.abs(this.first); }
                static get result() { return this.second + ++this.counter; }
            }
            App.first = 1;
            App.counter = 0;
            __decorate([
                $_1.$mol_atom2_field
            ], App, "first", void 0);
            __decorate([
                $_1.$mol_atom2_field
            ], App, "second", null);
            __decorate([
                $_1.$mol_atom2_field
            ], App, "result", null);
            $_1.$mol_assert_equal(App.result, 2);
            App.first = -1;
            $_1.$mol_assert_equal(App.result, 2);
        },
        'Recalc when [not changed master] changes [following master]'() {
            class App extends $_1.$mol_object2 {
                static get second() {
                    this.third = this.first;
                    return 0;
                }
                static get result() { return this.second + this.third + ++this.counter; }
            }
            App.first = 1;
            App.third = 0;
            App.counter = 0;
            __decorate([
                $_1.$mol_atom2_field
            ], App, "first", void 0);
            __decorate([
                $_1.$mol_atom2_field
            ], App, "second", null);
            __decorate([
                $_1.$mol_atom2_field
            ], App, "third", void 0);
            __decorate([
                $_1.$mol_atom2_field
            ], App, "result", null);
            $_1.$mol_assert_equal(App.result, 2);
            App.first = 5;
            $_1.$mol_assert_equal(App.result, 7);
        },
        'Branch switching'() {
            class App extends $_1.$mol_object2 {
                static get second() { return 2; }
                static get result() {
                    return (this.condition ? this.first : this.second) + this.counter++;
                }
            }
            App.first = 1;
            App.condition = true;
            App.counter = 0;
            __decorate([
                $_1.$mol_atom2_field
            ], App, "first", void 0);
            __decorate([
                $_1.$mol_atom2_field
            ], App, "second", null);
            __decorate([
                $_1.$mol_atom2_field
            ], App, "condition", void 0);
            __decorate([
                $_1.$mol_atom2_field
            ], App, "result", null);
            $_1.$mol_assert_equal(App.result, 1);
            App.condition = false;
            $_1.$mol_assert_equal(App.result, 3);
            App.first = 10;
            $_1.$mol_assert_equal(App.result, 3);
        },
        'Forbidden self invalidation'() {
            class App extends $_1.$mol_object2 {
                static get second() { return this.first + 1; }
                static get result() {
                    this.second;
                    return this.first++;
                }
            }
            App.first = 1;
            __decorate([
                $_1.$mol_atom2_field
            ], App, "first", void 0);
            __decorate([
                $_1.$mol_atom2_field
            ], App, "second", null);
            __decorate([
                $_1.$mol_atom2_field
            ], App, "result", null);
            $_1.$mol_assert_fail(() => App.result);
        },
        'Side effect inside computation'() {
            class App extends $_1.$mol_object2 {
                static increase() { return ++this.first; }
                static get result() {
                    return this.increase() + 1;
                }
            }
            App.first = 1;
            __decorate([
                $_1.$mol_atom2_field
            ], App, "first", void 0);
            __decorate([
                $_1.$mol_fiber.method
            ], App, "increase", null);
            __decorate([
                $_1.$mol_atom2_field
            ], App, "result", null);
            $_1.$mol_assert_equal(App.result, 3);
        },
        'Forbidden cyclic dependency'() {
            class App extends $_1.$mol_object2 {
                static get first() { return this.second - 1; }
                static get second() { return this.first + 1; }
            }
            __decorate([
                $_1.$mol_atom2_field
            ], App, "first", null);
            __decorate([
                $_1.$mol_atom2_field
            ], App, "second", null);
            $_1.$mol_assert_fail(() => App.first);
        },
        'Forget sub fibers on complete'() {
            class App extends $_1.$mol_object2 {
                static count() { return this.counter++; }
                static get result() { return this.count() + this.data; }
            }
            App.counter = 0;
            App.data = 1;
            __decorate([
                $_1.$mol_fiber.method
            ], App, "count", null);
            __decorate([
                $_1.$mol_atom2_field
            ], App, "data", void 0);
            __decorate([
                $_1.$mol_atom2_field
            ], App, "result", null);
            $_1.$mol_assert_equal(App.result, 1);
            App.data = 2;
            $_1.$mol_assert_equal(App.result, 3);
        },
        async 'Automatic destroy owned value on self destruction'() {
            let counter = 0;
            class Having extends $_1.$mol_object2 {
                destructor() { counter++; }
            }
            class App extends $_1.$mol_object2 {
                static get having() { return Having.make(); }
                static get result() {
                    if (this.condition)
                        this.having;
                    return 0;
                }
            }
            App.condition = true;
            __decorate([
                $_1.$mol_atom2_field
            ], App, "having", null);
            __decorate([
                $_1.$mol_atom2_field
            ], App, "condition", void 0);
            __decorate([
                $_1.$mol_atom2_field
            ], App, "result", null);
            App.result;
            App.condition = false;
            App.result;
            $_1.$mol_assert_equal(counter, 0);
            await $_1.$mol_fiber_warp();
            $_1.$mol_assert_equal(counter, 1);
        },
        async 'Do not destroy putted value'() {
            class App extends $_1.$mol_object2 {
                static get target() {
                    return this.condition ? this.source : 0;
                }
            }
            App.condition = true;
            __decorate([
                $_1.$mol_atom2_field
            ], App, "source", void 0);
            __decorate([
                $_1.$mol_atom2_field
            ], App, "condition", void 0);
            __decorate([
                $_1.$mol_atom2_field
            ], App, "target", null);
            App.source = 1;
            $_1.$mol_assert_equal(App.target, 1);
            App.condition = false;
            $_1.$mol_assert_equal(App.target, 0);
            await $_1.$mol_fiber_warp();
            App.condition = true;
            $_1.$mol_assert_equal(App.target, 1);
        },
        'Restore after error'() {
            class App extends $_1.$mol_object2 {
                static get broken() {
                    if (this.condition)
                        $_1.$mol_fail(new Error('test error'));
                    return 1;
                }
                static get result() { return this.broken; }
            }
            App.condition = false;
            __decorate([
                $_1.$mol_atom2_field
            ], App, "condition", void 0);
            __decorate([
                $_1.$mol_atom2_field
            ], App, "broken", null);
            __decorate([
                $_1.$mol_atom2_field
            ], App, "result", null);
            $_1.$mol_assert_equal(App.result, 1);
            App.condition = true;
            $_1.$mol_assert_fail(() => App.result);
            App.condition = false;
            $_1.$mol_assert_equal(App.result, 1);
        },
        async 'auto fresh only when alive'($) {
            let state = 1;
            const monitor = new $.$mol_atom2;
            monitor.calculate = () => {
                new $.$mol_after_frame($_1.$mol_atom2.current.fresh);
                return state;
            };
            $_1.$mol_assert_equal(monitor.get(), 1);
            state = 2;
            $_1.$mol_assert_equal(monitor.get(), 1);
            $.$mol_after_mock_warp();
            $_1.$mol_assert_equal(monitor.get(), 2);
            state = 3;
            $_1.$mol_assert_equal(monitor.get(), 2);
            monitor.destructor();
            $_1.$mol_assert_equal(monitor.value, undefined);
            $.$mol_after_mock_warp();
            await $.$mol_fiber_warp();
            $_1.$mol_assert_equal(monitor.value, undefined);
        },
    });
})($ || ($ = {}));
//atom2.test.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_test({
        'const returns stored value'() {
            const foo = { bar: $.$mol_const(Math.random()) };
            $.$mol_assert_equal(foo.bar(), foo.bar());
            $.$mol_assert_equal(foo.bar(), foo.bar['()']);
        },
    });
})($ || ($ = {}));
//const.test.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_test({
        'init with overload'() {
            class X extends $.$mol_object {
                foo() {
                    return 1;
                }
            }
            var x = X.make({
                foo: () => 2,
            });
            $.$mol_assert_equal(x.foo(), 2);
        },
    });
})($ || ($ = {}));
//object.test.js.map
;
"use strict";
var $;
(function ($) {
    console.warn('$mol_atom_wait is deprecated. Use $mol_fiber_sync instead.');
    class $mol_atom_wait extends Promise {
        constructor(message = 'Wait...') {
            super(() => { });
            this.message = message;
        }
    }
    $.$mol_atom_wait = $mol_atom_wait;
    $mol_atom_wait.prototype.constructor = Promise;
})($ || ($ = {}));
//wait.js.map
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
    $.$mol_test({
        'Property method'() {
            class App extends $.$mol_object2 {
                static value(next = 1) { return next + 1; }
            }
            __decorate([
                $.$mol_mem
            ], App, "value", null);
            $.$mol_assert_equal(App.value(), 2);
            App.value(2);
            $.$mol_assert_equal(App.value(), 3);
        },
        'auto sync of properties'() {
            class X extends $.$mol_object2 {
                foo(next) {
                    return next || 1;
                }
                bar() {
                    return this.foo() + 1;
                }
                xxx() {
                    return this.bar() + 1;
                }
            }
            __decorate([
                $.$mol_mem
            ], X.prototype, "foo", null);
            __decorate([
                $.$mol_mem
            ], X.prototype, "bar", null);
            __decorate([
                $.$mol_mem
            ], X.prototype, "xxx", null);
            const x = new X;
            $.$mol_assert_equal(x.bar(), 2);
            $.$mol_assert_equal(x.xxx(), 3);
            x.foo(5);
            $.$mol_assert_equal(x.xxx(), 7);
        },
        async 'must be deferred destroyed when no longer referenced'() {
            let foo;
            let foo_destroyed = false;
            class B extends $.$mol_object2 {
                showing(next) {
                    if (next === void 0)
                        return true;
                    return next;
                }
                foo() {
                    return foo = new class extends $.$mol_object {
                        destructor() {
                            foo_destroyed = true;
                        }
                    };
                }
                bar() {
                    return this.showing() ? this.foo() : null;
                }
            }
            __decorate([
                $.$mol_mem
            ], B.prototype, "showing", null);
            __decorate([
                $.$mol_mem
            ], B.prototype, "foo", null);
            __decorate([
                $.$mol_mem
            ], B.prototype, "bar", null);
            var b = new B;
            var bar = b.bar();
            $.$mol_assert_ok(bar);
            b.showing(false);
            b.bar();
            await $.$mol_fiber_warp();
            $.$mol_assert_ok(foo_destroyed);
            $.$mol_assert_not(b.bar());
            b.showing(true);
            $.$mol_defer.run();
            $.$mol_assert_unique(b.bar(), bar);
        },
        'wait for data'() {
            class Test extends $.$mol_object2 {
                source(next, force) {
                    new $.$mol_defer(() => {
                        this.source('Jin', $.$mol_mem_force_cache);
                    });
                    return $.$mol_fail_hidden(new $.$mol_atom_wait('Wait for data!'));
                }
                middle() {
                    return this.source();
                }
                target() {
                    return this.middle();
                }
            }
            __decorate([
                $.$mol_mem
            ], Test.prototype, "source", null);
            __decorate([
                $.$mol_mem
            ], Test.prototype, "middle", null);
            __decorate([
                $.$mol_mem
            ], Test.prototype, "target", null);
            const t = new Test;
            $.$mol_assert_fail(() => t.target().valueOf(), Promise);
            $.$mol_defer.run();
            $.$mol_assert_equal(t.target(), 'Jin');
        },
    });
})($ || ($ = {}));
//mem.test.js.map
;
"use strict";
//jsx d.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_jsx_prefix = '';
    $.$mol_jsx_booked = null;
    $.$mol_jsx_document = {
        getElementById: () => null,
        createElement: (name) => $.$mol_dom_context.document.createElement(name)
    };
})($ || ($ = {}));
//jsx.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_test({
        'Make empty div'() {
            $.$mol_assert_equal(($.$mol_jsx_make("div", null)).outerHTML, '<div></div>');
        },
        'Define native field'() {
            const dom = $.$mol_jsx_make("input", { value: '123' });
            $.$mol_assert_equal(dom.outerHTML, '<input value="123">');
            $.$mol_assert_equal(dom.value, '123');
        },
        'Define classes'() {
            const dom = $.$mol_jsx_make("div", { classList: ['foo bar'] });
            $.$mol_assert_equal(dom.outerHTML, '<div class="foo bar"></div>');
        },
        'Define styles'() {
            const dom = $.$mol_jsx_make("div", { style: { color: 'red' } });
            $.$mol_assert_equal(dom.outerHTML, '<div style="color: red;"></div>');
        },
        'Define dataset'() {
            const dom = $.$mol_jsx_make("div", { dataset: { foo: 'bar' } });
            $.$mol_assert_equal(dom.outerHTML, '<div data-foo="bar"></div>');
        },
        'Define attributes'() {
            const dom = $.$mol_jsx_make("div", { hidden: true, lang: "ru" });
            $.$mol_assert_equal(dom.outerHTML, '<div hidden="" lang="ru"></div>');
        },
        'Define child nodes'() {
            const dom = $.$mol_jsx_make("div", null,
                "hello",
                $.$mol_jsx_make("strong", null, "world"),
                "!");
            $.$mol_assert_equal(dom.outerHTML, '<div>hello<strong>world</strong>!</div>');
        },
        'Function as component'() {
            const Button = ({ hint }, target) => {
                return $.$mol_jsx_make("button", { title: hint }, target());
            };
            const dom = $.$mol_jsx_make(Button, { id: "/foo", hint: "click me" }, () => 'hey!');
            $.$mol_assert_equal(dom.outerHTML, '<button title="click me" id="/foo">hey!</button>');
        },
        'Nested guid generation'() {
            const Foo = () => {
                return $.$mol_jsx_make("div", null,
                    $.$mol_jsx_make(Bar, { id: "/bar" },
                        $.$mol_jsx_make("img", { id: "/icon" })));
            };
            const Bar = (props, icon) => {
                return $.$mol_jsx_make("span", null, icon);
            };
            const dom = $.$mol_jsx_make(Foo, { id: "/foo" });
            $.$mol_assert_equal(dom.outerHTML, '<div id="/foo"><span id="/foo/bar"><img id="/foo/icon"></span></div>');
        },
        'Fail on non unique ids'() {
            const App = () => {
                return $.$mol_jsx_make("div", null,
                    $.$mol_jsx_make("span", { id: "/bar" }),
                    $.$mol_jsx_make("span", { id: "/bar" }));
            };
            $.$mol_assert_fail(() => $.$mol_jsx_make(App, { id: "/foo" }), 'JSX already has tag with id "/bar"');
        },
    });
})($ || ($ = {}));
//make.test.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_jsx_make(Elem, props, ...childNodes) {
        const id = props && props.id || '';
        if ($.$mol_jsx_booked) {
            if ($.$mol_jsx_booked.has(id)) {
                $.$mol_fail(new Error(`JSX already has tag with id ${JSON.stringify(id)}`));
            }
            else {
                $.$mol_jsx_booked.add(id);
            }
        }
        const guid = $.$mol_jsx_prefix + id;
        let node = guid && $.$mol_jsx_document.getElementById(guid);
        if (typeof Elem !== 'string') {
            if (Elem.prototype) {
                const view = node && node[Elem] || new Elem;
                Object.assign(view, props);
                view[Symbol.toStringTag] = guid;
                view.childNodes = childNodes;
                if (!view.ownerDocument)
                    view.ownerDocument = $.$mol_jsx_document;
                node = view.valueOf();
                node[Elem] = view;
                return node;
            }
            else {
                const prefix = $.$mol_jsx_prefix;
                const booked = $.$mol_jsx_booked;
                try {
                    $.$mol_jsx_prefix = guid;
                    $.$mol_jsx_booked = new Set;
                    return Elem(props, ...childNodes);
                }
                finally {
                    $.$mol_jsx_prefix = prefix;
                    $.$mol_jsx_booked = booked;
                }
            }
        }
        if (!node)
            node = $.$mol_jsx_document.createElement(Elem);
        $.$mol_dom_render_children(node, [].concat(...childNodes));
        for (const key in props) {
            if (typeof props[key] === 'string') {
                node.setAttribute(key, props[key]);
            }
            else if (props[key] && props[key]['constructor'] === Object) {
                if (typeof node[key] === 'object') {
                    Object.assign(node[key], props[key]);
                    continue;
                }
            }
            node[key] = props[key];
        }
        if (guid)
            node.id = guid;
        return node;
    }
    $.$mol_jsx_make = $mol_jsx_make;
})($ || ($ = {}));
//make.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_test({
        'number'() {
            const dict = new $.$mol_dict();
            $.$mol_assert_equal(dict.get(123), undefined);
            $.$mol_assert_equal(dict.has(123), false);
            dict.set(123, 321);
            $.$mol_assert_equal(dict.get(123), 321);
            $.$mol_assert_equal(dict.has(123), true);
            dict.delete(123);
            $.$mol_assert_equal(dict.get(123), undefined);
            $.$mol_assert_equal(dict.has(123), false);
        },
        'pojo as key'() {
            const dict = new $.$mol_dict();
            $.$mol_assert_equal(dict.get({ foo: 123 }), undefined);
            $.$mol_assert_equal(dict.has({ foo: 123 }), false);
            dict.set({ foo: 123 }, 321);
            $.$mol_assert_equal(dict.get({ foo: 123 }), 321);
            $.$mol_assert_equal(dict.has({ foo: 123 }), true);
            dict.delete({ foo: 123 });
            $.$mol_assert_equal(dict.get({ foo: 123 }), undefined);
            $.$mol_assert_equal(dict.has({ foo: 123 }), false);
        },
        'array as key'() {
            const dict = new $.$mol_dict();
            $.$mol_assert_equal(dict.get([123]), undefined);
            $.$mol_assert_equal(dict.has([123]), false);
            dict.set([123], 321);
            $.$mol_assert_equal(dict.get([123]), 321);
            $.$mol_assert_equal(dict.has([123]), true);
            dict.delete([123]);
            $.$mol_assert_equal(dict.get([123]), undefined);
            $.$mol_assert_equal(dict.has([123]), false);
        },
        'html element as key'() {
            const el = $.$mol_jsx_make("div", null);
            const dict = new $.$mol_dict();
            $.$mol_assert_equal(dict.get(el), undefined);
            $.$mol_assert_equal(dict.has(el), false);
            dict.set(el, 321);
            $.$mol_assert_equal(dict.get(el), 321);
            $.$mol_assert_equal(dict.has(el), true);
            $.$mol_assert_equal(dict.get($.$mol_jsx_make("div", null)), undefined);
            $.$mol_assert_equal(dict.has($.$mol_jsx_make("div", null)), false);
            dict.delete(el);
            $.$mol_assert_equal(dict.get(el), undefined);
            $.$mol_assert_equal(dict.has(el), false);
        },
        'for-of key restore'() {
            const dict = new $.$mol_dict([[123, 321]]);
            const keys = [];
            const vals = [];
            for (const [key, val] of dict) {
                keys.push(key);
                vals.push(val);
            }
            $.$mol_assert_equal(keys.length, 1);
            $.$mol_assert_equal(keys[0], 123);
            $.$mol_assert_equal(vals.length, 1);
            $.$mol_assert_equal(vals[0], 321);
        },
        'forEach key restore'() {
            const dict = new $.$mol_dict([[123, 321]]);
            const keys = [];
            const vals = [];
            dict.forEach((val, key) => {
                keys.push(key);
                vals.push(val);
            });
            $.$mol_assert_equal(keys.length, 1);
            $.$mol_assert_equal(keys[0], 123);
            $.$mol_assert_equal(vals.length, 1);
            $.$mol_assert_equal(vals[0], 321);
        },
    });
})($ || ($ = {}));
//dict.test.js.map
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
    $.$mol_test({
        'keyed reactive properties'() {
            $.$mol_fiber_warp();
            class Fib extends $.$mol_object2 {
                static value(index, next) {
                    if (next)
                        return next;
                    if (index < 2)
                        return 1;
                    return this.value(index - 1) + this.value(index - 2);
                }
            }
            __decorate([
                $.$mol_mem_key
            ], Fib, "value", null);
            $.$mol_assert_equal(Fib.value(10), 89);
            Fib.value(1, 2);
            $.$mol_assert_equal(Fib.value(10), 144);
        },
        'cached property with simple key'() {
            class X extends $.$mol_object2 {
                foo(id, next) {
                    if (next == null)
                        return new Number(123);
                    return new Number(next);
                }
            }
            __decorate([
                $.$mol_mem_key
            ], X.prototype, "foo", null);
            const x = new X;
            $.$mol_assert_equal(x.foo(0).valueOf(), 123);
            $.$mol_assert_equal(x.foo(0), x.foo(0));
            $.$mol_assert_unique(x.foo(0), x.foo(1));
            x.foo(0, 321);
            $.$mol_assert_equal(x.foo(0).valueOf(), 321);
            x.foo(0, null);
            $.$mol_assert_equal(x.foo(0).valueOf(), 123);
        },
        'cached property with complex key'() {
            class X extends $.$mol_object2 {
                foo(ids) {
                    return Math.random();
                }
            }
            __decorate([
                $.$mol_mem_key
            ], X.prototype, "foo", null);
            const x = new X;
            $.$mol_assert_equal(x.foo([0, 1]), x.foo([0, 1]));
            $.$mol_assert_unique(x.foo([0, 1]), x.foo([0, 2]));
        },
    });
})($ || ($ = {}));
//key.test.js.map
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
    $.$mol_test({
        'Makes reactive value by key'() {
            class Fib extends $.$mol_object2 {
                static get value() {
                    return $.$mol_atom2_dict({
                        get: (index, dict) => {
                            if (index < 2)
                                return 1;
                            return dict[index - 1] + dict[index - 2];
                        }
                    });
                }
            }
            __decorate([
                $.$mol_atom2_field
            ], Fib, "value", null);
            $.$mol_assert_equal(Fib.value[10], 89);
            Fib.value[1] = 2;
            $.$mol_assert_equal(Fib.value[10], 144);
        },
        'Reactive keys list'() {
            class Registry extends $.$mol_object2 {
                static get value() {
                    return $.$mol_atom2_dict({});
                }
                static get size() {
                    return Object.keys(this.value).length;
                }
            }
            __decorate([
                $.$mol_atom2_field
            ], Registry, "value", null);
            __decorate([
                $.$mol_atom2_field
            ], Registry, "size", null);
            $.$mol_assert_equal(Registry.size, 0);
            Registry.value[1] = 2;
            Registry.value[3] = 4;
            $.$mol_assert_equal(Registry.size, 2);
        },
        'Can be iterated over keys'() {
            class Registry extends $.$mol_object2 {
                static get value() {
                    return $.$mol_atom2_dict({});
                }
            }
            __decorate([
                $.$mol_atom2_field
            ], Registry, "value", null);
            Registry.value[1] = 2;
            Registry.value[3] = 4;
            const keys = [];
            for (let key in Registry.value)
                keys.push(key);
            $.$mol_assert_like(keys, ['1', '3']);
        },
        async 'Call back on abort'() {
            const log = [];
            class Registry extends $.$mol_object2 {
                static get item() {
                    return $.$mol_atom2_dict({
                        get: key => key,
                        abort: key => {
                            log.push(key);
                            return true;
                        },
                    });
                }
                static get result() { return this.condition ? this.item['foo'] : ''; }
            }
            Registry.condition = true;
            __decorate([
                $.$mol_atom2_field
            ], Registry, "item", null);
            __decorate([
                $.$mol_atom2_field
            ], Registry, "condition", void 0);
            __decorate([
                $.$mol_atom2_field
            ], Registry, "result", null);
            $.$mol_assert_equal(Registry.result, 'foo');
            Registry.condition = false;
            $.$mol_assert_equal(Registry.result, '');
            $.$mol_assert_like(log, []);
            await $.$mol_fiber_warp();
            $.$mol_assert_like(log, ['foo']);
        },
        'Value has js-path name'() {
            let Registry = class Registry extends $.$mol_object2 {
                static get item() {
                    return $.$mol_atom2_dict({
                        get: (key) => new $.$mol_object2,
                    });
                }
            };
            __decorate([
                $.$mol_atom2_field
            ], Registry, "item", null);
            Registry = __decorate([
                $.$mol_class
            ], Registry);
            $.$mol_assert_equal(`${Registry.item['foo']}`, 'Registry.item["foo"]');
        },
    });
})($ || ($ = {}));
//dict.test.js.map
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
    $.$mol_test({
        async 'Autorun'() {
            class App extends $.$mol_object2 {
                static get init() {
                    ++this.counter;
                    return this.state;
                }
            }
            App.state = 1;
            App.counter = 0;
            __decorate([
                $.$mol_atom2_field
            ], App, "state", void 0);
            __decorate([
                $.$mol_atom2_field
            ], App, "init", null);
            const autorun = $.$mol_atom2_autorun(() => App.init);
            try {
                await $.$mol_fiber_warp();
                $.$mol_assert_equal(App.counter, 1);
                App.state = 2;
                $.$mol_assert_equal(App.counter, 1);
                await $.$mol_fiber_warp();
                $.$mol_assert_equal(App.counter, 2);
                App.state = 3;
            }
            finally {
                autorun.destructor();
            }
            App.state = 4;
            await $.$mol_fiber_warp();
            $.$mol_assert_equal(App.counter, 2);
        },
    });
})($ || ($ = {}));
//autorun.test.js.map
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
    $.$mol_test({
        'id auto generation'() {
            class $mol_view_test_item extends $.$mol_view {
            }
            class $mol_view_test_block extends $.$mol_view {
                element(id) {
                    return new $mol_view_test_item();
                }
            }
            __decorate([
                $.$mol_mem_key
            ], $mol_view_test_block.prototype, "element", null);
            var x = new $mol_view_test_block();
            $.$mol_assert_equal(x.dom_node().id, '$mol_view_test_block.make()');
            $.$mol_assert_equal(x.element(0).dom_node().id, '$mol_view_test_block.make().element(0)');
        },
        'caching ref to dom node'() {
            var x = new class extends $.$mol_view {
            };
            $.$mol_assert_equal(x.dom_node(), x.dom_node());
        },
        'content render'() {
            class $mol_view_test extends $.$mol_view {
                sub() {
                    return ['lol', 5];
                }
            }
            var x = new $mol_view_test();
            var node = x.dom_tree();
            $.$mol_assert_equal(node.innerHTML, 'lol5');
        },
        'bem attributes generation'() {
            class $mol_view_test_item extends $.$mol_view {
            }
            class $mol_view_test_block extends $.$mol_view {
                Element(id) {
                    return new $mol_view_test_item();
                }
            }
            __decorate([
                $.$mol_mem_key
            ], $mol_view_test_block.prototype, "Element", null);
            var x = new $mol_view_test_block();
            $.$mol_assert_equal(x.dom_node().getAttribute('mol_view_test_block'), '');
            $.$mol_assert_equal(x.dom_node().getAttribute('mol_view'), '');
            $.$mol_assert_equal(x.Element(0).dom_node().getAttribute('mol_view_test_block_element'), '');
            $.$mol_assert_equal(x.Element(0).dom_node().getAttribute('mol_view_test_item'), '');
            $.$mol_assert_equal(x.Element(0).dom_node().getAttribute('mol_view'), '');
        },
        'render custom attributes'() {
            class $mol_view_test extends $.$mol_view {
                attr() {
                    return {
                        'href': '#haha',
                        'required': true,
                        'hidden': false,
                    };
                }
            }
            var x = new $mol_view_test();
            var node = x.dom_tree();
            $.$mol_assert_equal(node.getAttribute('href'), '#haha');
            $.$mol_assert_equal(node.getAttribute('required'), 'true');
            $.$mol_assert_equal(node.getAttribute('hidden'), null);
        },
        'render custom fields'() {
            class $mol_view_test extends $.$mol_view {
                field() {
                    return {
                        'hidden': true
                    };
                }
            }
            var x = new $mol_view_test();
            var node = x.dom_tree();
            $.$mol_assert_equal(node.hidden, true);
        },
        'attach event handlers'() {
            var clicked = false;
            class $mol_view_test extends $.$mol_view {
                event() {
                    return {
                        'click': (next) => this.event_click(next)
                    };
                }
                event_click(next) {
                    clicked = true;
                }
            }
            var x = new $mol_view_test();
            var node = x.dom_node();
            node.click();
            $.$mol_assert_ok(clicked);
        },
    });
})($ || ($ = {}));
//view.test.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        $.$mol_test({
            'handle clicks by default'() {
                let clicked = false;
                const clicker = $$.$mol_button.make({
                    event_click: (event) => { clicked = true; },
                });
                const element = clicker.dom_tree();
                const event = $.$mol_dom_context.document.createEvent('mouseevent');
                event.initEvent('click', true, true);
                element.dispatchEvent(event);
                $.$mol_assert_ok(clicked);
            },
            'no handle clicks if disabled'() {
                let clicked = false;
                const clicker = $$.$mol_button.make({
                    event_click: (event) => { clicked = true; },
                    enabled: () => false,
                });
                const element = clicker.dom_tree();
                const event = $.$mol_dom_context.document.createEvent('mouseevent');
                event.initEvent('click', true, true);
                element.dispatchEvent(event);
                $.$mol_assert_not(clicked);
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//button.test.js.map
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
    $.$mol_test_mocks.push(context => {
        class $mol_state_local_mock extends $.$mol_state_local {
            static value(key, next = this.state[key]) {
                return this.state[key] = (next || null);
            }
        }
        $mol_state_local_mock.state = {};
        __decorate([
            $.$mol_mem_key
        ], $mol_state_local_mock, "value", null);
        context.$mol_state_local = $mol_state_local_mock;
    });
})($ || ($ = {}));
//local.mock.test.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_test({
        'local get set delete'() {
            var key = '$mol_state_local_test:' + Math.random();
            $.$mol_assert_equal($.$mol_state_local.value(key), null);
            $.$mol_state_local.value(key, 123);
            $.$mol_assert_equal($.$mol_state_local.value(key), 123);
            $.$mol_state_local.value(key, null);
            $.$mol_assert_equal($.$mol_state_local.value(key), null);
        },
    });
})($ || ($ = {}));
//local.test.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_test({
        'null by default'() {
            const key = String(Math.random());
            $.$mol_assert_equal($.$mol_state_session.value(key), null);
        },
        'storing'() {
            const key = String(Math.random());
            $.$mol_state_session.value(key, '$mol_state_session_test');
            $.$mol_assert_equal($.$mol_state_session.value(key), '$mol_state_session_test');
            $.$mol_state_session.value(key, null);
            $.$mol_assert_equal($.$mol_state_session.value(key), null);
        },
    });
})($ || ($ = {}));
//session.test.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_test({
        'parse and serial'() {
            $.$mol_assert_equal(new $.$mol_time_duration('P42.1Y').toString(), 'P42.1YT');
            $.$mol_assert_equal(new $.$mol_time_duration('P42.1M').toString(), 'P42.1MT');
            $.$mol_assert_equal(new $.$mol_time_duration('P42.1D').toString(), 'P42.1DT');
            $.$mol_assert_equal(new $.$mol_time_duration('PT42.1h').toString(), 'PT42.1H');
            $.$mol_assert_equal(new $.$mol_time_duration('PT42.1m').toString(), 'PT42.1M');
            $.$mol_assert_equal(new $.$mol_time_duration('PT42.1s').toString(), 'PT42.1S');
            $.$mol_assert_equal(new $.$mol_time_duration('P1Y2M3DT4h5m6.7s').toString(), 'P1Y2M3DT4H5M6.7S');
        },
        'format typed'() {
            $.$mol_assert_equal(new $.$mol_time_duration('P1Y2M3DT4h5m6s').toString('P#Y#M#DT#h#m#s'), 'P1Y2M3DT4H5M6S');
        },
    });
})($ || ($ = {}));
//duration.test.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_test({
        'parse and serial'() {
            $.$mol_assert_equal(new $.$mol_time_moment('2014').toString(), '2014');
            $.$mol_assert_equal(new $.$mol_time_moment('2014-01').toString(), '2014-01');
            $.$mol_assert_equal(new $.$mol_time_moment('2014-01-02').toString(), '2014-01-02');
            $.$mol_assert_equal(new $.$mol_time_moment('2014-01-02T03').toString(), '2014-01-02T03');
            $.$mol_assert_equal(new $.$mol_time_moment('2014-01-02T03:04').toString(), '2014-01-02T03:04');
            $.$mol_assert_equal(new $.$mol_time_moment('2014-01-02T03:04:05').toString(), '2014-01-02T03:04:05');
            $.$mol_assert_equal(new $.$mol_time_moment('2014-01-02T03:04:05.006').toString(), '2014-01-02T03:04:05.006');
            $.$mol_assert_equal(new $.$mol_time_moment('2014-01-02T03:04:05.006Z').toString(), '2014-01-02T03:04:05.006+00:00');
            $.$mol_assert_equal(new $.$mol_time_moment('2014-01-02T03:04:05.006+07:00').toString(), '2014-01-02T03:04:05.006+07:00');
            $.$mol_assert_equal(new $.$mol_time_moment('2014-01-02T03:04:05+07:08').toString(), '2014-01-02T03:04:05+07:08');
            $.$mol_assert_equal(new $.$mol_time_moment('2014-01-02T03:04+07:08').toString(), '2014-01-02T03:04+07:08');
            $.$mol_assert_equal(new $.$mol_time_moment('T03:04+07:08').toString(), 'T03:04+07:08');
            $.$mol_assert_equal(new $.$mol_time_moment('T03:04:05').toString(), 'T03:04:05');
            $.$mol_assert_equal(new $.$mol_time_moment('T03:04').toString(), 'T03:04');
            $.$mol_assert_equal(new $.$mol_time_moment('T03').toString(), 'T03');
        },
        'format simple'() {
            $.$mol_assert_equal(new $.$mol_time_moment('2014-01-02T01:02:03.000').toString('AD YY-M-D h:m:s'), '21 14-1-2 1:2:3');
        },
        'format padded'() {
            $.$mol_assert_equal(new $.$mol_time_moment('2014-01-02T01:02:03.000').toString('YYYY-MM-DD hh:mm:ss'), '2014-01-02 01:02:03');
        },
        'format time zone'() {
            $.$mol_assert_equal(new $.$mol_time_moment('2014-01-02T01:02:03+05:00').toString('Z'), '+05:00');
        },
        'format names'() {
            $.$mol_assert_ok(new $.$mol_time_moment('2014-01-02T01:02:03.000').toString('Month Mon | WeekDay WD'));
        },
        'shifting'() {
            $.$mol_assert_equal(new $.$mol_time_moment('T15:54:58.243+03:00').shift({}).toString(), 'T15:54:58.243+03:00');
            $.$mol_assert_equal(new $.$mol_time_moment('2014-01-02').shift('P1Y').toString(), '2015-01-02');
            $.$mol_assert_equal(new $.$mol_time_moment('2014-01-02').shift('P12M').toString(), '2015-01-02');
            $.$mol_assert_equal(new $.$mol_time_moment('2014-01-02').shift('P365D').toString(), '2015-01-02');
            $.$mol_assert_equal(new $.$mol_time_moment('2014-01-02').shift('PT8760h').toString(), '2015-01-02');
            $.$mol_assert_equal(new $.$mol_time_moment('2014-01').shift('PT8760h').toString(), '2015-01');
            $.$mol_assert_equal(new $.$mol_time_moment('2014-01').shift('PT-8760h').toString(), '2013-01');
        },
        'normalization'() {
            $.$mol_assert_equal(new $.$mol_time_moment('2015-07-35').normal.toString(), '2015-08-04');
        },
        'iso week day'() {
            $.$mol_assert_equal(new $.$mol_time_moment('2017-09-17').weekday, 6);
            $.$mol_assert_equal(new $.$mol_time_moment('2017-09-18').weekday, 0);
        },
    });
})($ || ($ = {}));
//moment.test.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_test({
        'all cases of using maybe'() {
            $.$mol_assert_equal($.$mol_maybe(0)[0], 0);
            $.$mol_assert_equal($.$mol_maybe(false)[0], false);
            $.$mol_assert_equal($.$mol_maybe(null)[0], void 0);
            $.$mol_assert_equal($.$mol_maybe(void 0)[0], void 0);
            $.$mol_assert_equal($.$mol_maybe(void 0).map(v => v.toString())[0], void 0);
            $.$mol_assert_equal($.$mol_maybe(0).map(v => v.toString())[0], '0');
        },
    });
})($ || ($ = {}));
//maybe.test.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_test({
        'Vector limiting'() {
            let point = new $.$mol_vector_3d(7, 10, 13);
            const res = point.limited([[1, 5], [15, 20], [5, 10]]);
            $.$mol_assert_equal(res.x, 5);
            $.$mol_assert_equal(res.y, 15);
            $.$mol_assert_equal(res.z, 10);
        },
        'Vector adding scalar'() {
            let point = new $.$mol_vector_3d(1, 2, 3);
            let res = point.added0(5);
            $.$mol_assert_equal(res.x, 6);
            $.$mol_assert_equal(res.y, 7);
            $.$mol_assert_equal(res.z, 8);
        },
        'Vector adding vector'() {
            let point = new $.$mol_vector_3d(1, 2, 3);
            let res = point.added1([5, 10, 15]);
            $.$mol_assert_equal(res.x, 6);
            $.$mol_assert_equal(res.y, 12);
            $.$mol_assert_equal(res.z, 18);
        },
        'Vector multiplying scalar'() {
            let point = new $.$mol_vector_3d(2, 3, 4);
            let res = point.multed0(-1);
            $.$mol_assert_equal(res.x, -2);
            $.$mol_assert_equal(res.y, -3);
            $.$mol_assert_equal(res.z, -4);
        },
        'Vector multiplying vector'() {
            let point = new $.$mol_vector_3d(2, 3, 4);
            let res = point.multed1([5, 2, -2]);
            $.$mol_assert_equal(res.x, 10);
            $.$mol_assert_equal(res.y, 6);
            $.$mol_assert_equal(res.z, -8);
        },
        'Matrix adding matrix'() {
            let matrix = new $.$mol_vector_matrix(...[[1, 2], [3, 4], [5, 6]]);
            let res = matrix.added2([[10, 20], [30, 40], [50, 60]]);
            $.$mol_assert_equal(res[0][0], 11);
            $.$mol_assert_equal(res[0][1], 22);
            $.$mol_assert_equal(res[1][0], 33);
            $.$mol_assert_equal(res[1][1], 44);
            $.$mol_assert_equal(res[2][0], 55);
            $.$mol_assert_equal(res[2][1], 66);
        },
        'Matrix multiplying matrix'() {
            let matrix = new $.$mol_vector_matrix(...[[2, 3], [4, 5], [6, 7]]);
            let res = matrix.multed2([[2, 3], [4, 5], [6, 7]]);
            $.$mol_assert_equal(res[0][0], 4);
            $.$mol_assert_equal(res[0][1], 9);
            $.$mol_assert_equal(res[1][0], 16);
            $.$mol_assert_equal(res[1][1], 25);
            $.$mol_assert_equal(res[2][0], 36);
            $.$mol_assert_equal(res[2][1], 49);
        },
        'Range expanding'() {
            let range = $.$mol_vector_range_full.inversed;
            const expanded = range.expanded0(10).expanded0(5);
            $.$mol_assert_like([...expanded], [5, 10]);
        },
        'Vector of range expanding by vector'() {
            let dimensions = new $.$mol_vector_2d($.$mol_vector_range_full.inversed, $.$mol_vector_range_full.inversed);
            const expanded = dimensions.expanded1([1, 7]).expanded1([3, 5]);
            $.$mol_assert_like([...expanded.x], [1, 3]);
            $.$mol_assert_like([...expanded.y], [5, 7]);
        },
        'Vector of range expanding by vector of range'() {
            let dimensions = new $.$mol_vector_2d($.$mol_vector_range_full.inversed, $.$mol_vector_range_full.inversed);
            const expanded = dimensions
                .expanded2([[1, 3], [7, 9]])
                .expanded2([[2, 4], [6, 8]]);
            $.$mol_assert_like([...expanded.x], [1, 4]);
            $.$mol_assert_like([...expanded.y], [6, 9]);
        },
        'Vector of infinity range expanding by vector of range'() {
            let dimensions = new $.$mol_vector_2d($.$mol_vector_range_full.inversed, $.$mol_vector_range_full.inversed);
            const next = new $.$mol_vector_2d($.$mol_vector_range_full.inversed, $.$mol_vector_range_full.inversed);
            const expanded = next
                .expanded2(dimensions);
            $.$mol_assert_like([...expanded.x], [Infinity, -Infinity]);
            $.$mol_assert_like([...expanded.y], [Infinity, -Infinity]);
        },
    });
})($ || ($ = {}));
//vector.test.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_test({
        'convertion to primitives'() {
            var unit = new $.$mol_unit_money_usd(5);
            $.$mol_assert_equal(unit.valueOf(), 5);
            $.$mol_assert_equal(unit * 2, 10);
            $.$mol_assert_equal(unit + '', '5');
            $.$mol_assert_equal(`${unit}`, '$5');
            $.$mol_assert_equal(unit.toString(), '$5');
            $.$mol_assert_equal(String(unit), '$5');
        },
        'arithmetic'() {
            var usd1 = new $.$mol_unit_money_usd(2);
            var usd2 = new $.$mol_unit_money_usd(3);
            var rur = new $.$mol_unit_money_rur(2);
            $.$mol_assert_equal($.$mol_unit.summ(usd1, usd2).toString(), '$5');
            $.$mol_assert_equal(usd1.mult(2).toString(), '$4');
        },
    });
})($ || ($ = {}));
//unit.test.js.map
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
var $;
(function ($) {
    $.$mol_test({
        'Attach to document'() {
            const doc = $.$mol_dom_parse('<html><body id="/foo"></body></html>');
            $.$mol_jsx_attach(doc, () => $.$mol_jsx_make("body", { id: "/foo" }, "bar"));
            $.$mol_assert_equal(doc.documentElement.outerHTML, '<html><body id="/foo">bar</body></html>');
        },
    });
})($ || ($ = {}));
//attach.test.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_jsx_attach(next, action) {
        const prev = $.$mol_jsx_document;
        try {
            $.$mol_jsx_document = next;
            return action();
        }
        finally {
            $.$mol_jsx_document = prev;
        }
    }
    $.$mol_jsx_attach = $mol_jsx_attach;
})($ || ($ = {}));
//attach.js.map
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
    $.$mol_test({
        'Class as component'() {
            class Foo extends $.$mol_jsx_view {
                constructor() {
                    super(...arguments);
                    this.title = '';
                }
                render() {
                    return $.$mol_jsx_make("div", null,
                        this.title,
                        " ",
                        this.childNodes.join('-'));
                }
            }
            const dom = $.$mol_jsx_make(Foo, { id: "/foo", title: "bar" },
                "xxx",
                123);
            $.$mol_assert_equal(dom.outerHTML, '<div id="/foo">bar xxx-123</div>');
        },
        'View by element'() {
            class Br extends $.$mol_jsx_view {
                render() {
                    view = this;
                    return $.$mol_jsx_make("br", { id: "/foo" });
                }
            }
            let view;
            $.$mol_assert_equal(Br.of($.$mol_jsx_make(Br, null)), view);
        },
        'Attached view rerender'() {
            const doc = $.$mol_dom_parse('<html><body id="/foo"></body></html>');
            class Title extends $.$mol_jsx_view {
                constructor() {
                    super(...arguments);
                    this.value = 'foo';
                }
                render() {
                    return $.$mol_jsx_make("div", null, this.value);
                }
            }
            const dom = $.$mol_jsx_attach(doc, () => $.$mol_jsx_make(Title, { id: "/foo" }));
            const title = Title.of(dom);
            $.$mol_assert_equal(title.ownerDocument, doc);
            $.$mol_assert_equal(doc.documentElement.outerHTML, '<html><body id="/foo">foo</body></html>');
            title.value = 'bar';
            title.valueOf();
            $.$mol_assert_equal(doc.documentElement.outerHTML, '<html><body id="/foo">bar</body></html>');
        },
        async 'Reactive attached view'() {
            const doc = $.$mol_dom_parse('<html><body id="/foo"></body></html>');
            class Task {
                title(next) { return next || 'foo'; }
            }
            __decorate([
                $.$mol_mem
            ], Task.prototype, "title", null);
            class App extends $.$mol_jsx_view {
                task() { return new Task; }
                valueOf() {
                    return super.valueOf();
                }
                render() {
                    return $.$mol_jsx_make("div", null, this.task().title());
                }
            }
            __decorate([
                $.$mol_mem
            ], App.prototype, "task", null);
            __decorate([
                $.$mol_mem
            ], App.prototype, "valueOf", null);
            const task = new Task;
            $.$mol_atom2_autorun(() => $.$mol_jsx_attach(doc, () => $.$mol_jsx_make(App, { id: "/foo", task: () => task })));
            await $.$mol_fiber_warp();
            $.$mol_assert_equal(doc.documentElement.outerHTML, '<html><body id="/foo">foo</body></html>');
            task.title('bar');
            await $.$mol_fiber_warp();
            $.$mol_assert_equal(doc.documentElement.outerHTML, '<html><body id="/foo">bar</body></html>');
        },
    });
})($ || ($ = {}));
//view.test.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_jsx_view extends $.$mol_object2 {
        static of(node) {
            return node[this];
        }
        valueOf() {
            const prefix = $.$mol_jsx_prefix;
            const booked = $.$mol_jsx_booked;
            const document = $.$mol_jsx_document;
            try {
                $.$mol_jsx_prefix = this[Symbol.toStringTag];
                $.$mol_jsx_booked = new Set;
                $.$mol_jsx_document = this.ownerDocument;
                return this.render();
            }
            finally {
                $.$mol_jsx_prefix = prefix;
                $.$mol_jsx_booked = booked;
                $.$mol_jsx_document = document;
            }
        }
        render() {
            return $.$mol_fail(new Error('dom_tree() not implemented'));
        }
    }
    $.$mol_jsx_view = $mol_jsx_view;
})($ || ($ = {}));
//view.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_test({
        'search numbers'() {
            const syntax = new $.$mol_syntax({
                'number': /[+-]?\d+(?:\.\d+)?/
            });
            const serial = (tokens) => {
                return tokens.map(token => `${token.name}=${token.found}`).join('|');
            };
            $.$mol_assert_equal(serial(syntax.tokenize('')), '');
            $.$mol_assert_equal(serial(syntax.tokenize('foo')), '=foo');
            $.$mol_assert_equal(serial(syntax.tokenize('123')), 'number=123');
            $.$mol_assert_equal(serial(syntax.tokenize('foo123bar')), '=foo|number=123|=bar');
            $.$mol_assert_equal(serial(syntax.tokenize('foo123bar456')), '=foo|number=123|=bar|number=456');
            $.$mol_assert_equal(serial(syntax.tokenize('foo123\n\nbar456\n')), '=foo|number=123|=\n\nbar|number=456|=\n');
        }
    });
})($ || ($ = {}));
//syntax.test.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_test({
        'only text'() {
            const tokens = $.$mol_syntax_md_flow.tokenize('Hello,\nWorld..\r\n\r\n\nof Love!');
            $.$mol_assert_equal(tokens.map(token => token.found).join('|'), 'Hello,\nWorld..\r\n\r\n\n|of Love!');
        },
        'headers and text'() {
            const tokens = $.$mol_syntax_md_flow.tokenize('# Header1\n\nHello!\n\n## Header2');
            $.$mol_assert_equal(tokens.length, 3);
            $.$mol_assert_equal(tokens[0].name, 'header');
            $.$mol_assert_equal(tokens[0].chunks.join('|'), '#| |Header1|\n\n');
            $.$mol_assert_equal(tokens[1].name, 'block');
            $.$mol_assert_equal(tokens[1].chunks.join('|'), 'Hello!|\n\n');
            $.$mol_assert_equal(tokens[2].name, 'header');
            $.$mol_assert_equal(tokens[2].found, '## Header2');
            $.$mol_assert_equal(tokens[2].chunks.join('|'), '##| |Header2|');
        },
        'codes and text'() {
            const tokens = $.$mol_syntax_md_flow.tokenize('```\nstart()\n```\n\n```js\nrestart()\n```\n\nHello!\n\n```\nstop()\n```');
            $.$mol_assert_equal(tokens.length, 4);
            $.$mol_assert_equal(tokens[0].name, 'code');
            $.$mol_assert_equal(tokens[0].chunks.join('|'), '```||start()\n|```|\n\n');
            $.$mol_assert_equal(tokens[1].name, 'code');
            $.$mol_assert_equal(tokens[1].chunks.join('|'), '```|js|restart()\n|```|\n\n');
            $.$mol_assert_equal(tokens[2].name, 'block');
            $.$mol_assert_equal(tokens[2].chunks.join('|'), 'Hello!|\n\n');
            $.$mol_assert_equal(tokens[3].name, 'code');
            $.$mol_assert_equal(tokens[3].chunks.join('|'), '```||stop()\n|```|');
        },
        'table'() {
            const tokens = $.$mol_syntax_md_flow.tokenize('| header1 | header2\n|----|----\n| Cell11 | Cell12\n| Cell21 | Cell22\n\n| Cell11 | Cell12\n| Cell21 | Cell22\n');
            $.$mol_assert_equal(tokens.length, 2);
            $.$mol_assert_equal(tokens[0].name, 'table');
            $.$mol_assert_equal(tokens[0].chunks[0], '| header1 | header2\n|----|----\n| Cell11 | Cell12\n| Cell21 | Cell22\n');
            $.$mol_assert_equal(tokens[1].name, 'table');
            $.$mol_assert_equal(tokens[1].chunks[0], '| Cell11 | Cell12\n| Cell21 | Cell22\n');
        }
    });
})($ || ($ = {}));
//md.test.js.map
//# sourceMappingURL=node.test.js.map