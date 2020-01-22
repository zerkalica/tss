declare namespace $ { }
export = $;

declare namespace $ {
    namespace $$ {
        let $$: typeof $;
    }
    const $mol_ambient_ref: unique symbol;
    type $mol_ambient_context = (typeof globalThis) & (typeof $.$$) & (typeof $);
    function $mol_ambient(this: $mol_ambient_context, overrides: Partial<$mol_ambient_context>): $mol_ambient_context;
}

declare namespace $ {
    const $mol_owning_map: WeakMap<any, any>;
    function $mol_owning_allow<Having>(having: Having): having is Having & {
        destructor(): void;
    };
    function $mol_owning_get<Having, Owner extends object>(having: Having, Owner?: {
        new (): Owner;
    }): Owner | null;
    function $mol_owning_check<Owner, Having>(owner: Owner, having: Having): having is Having & {
        destructor(): void;
    };
    function $mol_owning_catch<Owner, Having>(owner: Owner, having: Having): boolean;
}

declare namespace $ {
    function $mol_fail(error: any): never;
}

declare namespace $ {
    function $mol_fail_hidden(error: any): never;
}

declare namespace $ {
    class $mol_object2 extends Object {
        static $: $mol_ambient_context;
        [$mol_ambient_ref]: $mol_ambient_context;
        get $(): $mol_ambient_context;
        set $(next: $mol_ambient_context);
        constructor(init?: (obj: any) => void);
        static create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: Instance) => void): Instance;
        static toString(): any;
        destructor(): void;
        toString(): any;
        toJSON(): any;
    }
}

declare namespace $ {
    class $mol_after_tick extends $mol_object2 {
        task: () => void;
        promise: any;
        cancelled: boolean;
        constructor(task: () => void);
        destructor(): void;
    }
}

interface $node {
    [key: string]: any;
}
declare var $node: $node;

declare namespace $ {
    var $mol_dom_context: typeof globalThis;
}

declare namespace $ {
}

declare namespace $ {
    function $mol_style_attach(id: string, text: string): HTMLStyleElement;
}

declare namespace $ {
    const enum $mol_theme {
        back = "var(--mol_theme_back)",
        hover = "var(--mol_theme_hover)",
        current = "var(--mol_theme_current)",
        text = "var(--mol_theme_text)",
        control = "var(--mol_theme_control)",
        shade = "var(--mol_theme_shade)",
        line = "var(--mol_theme_line)",
        focus = "var(--mol_theme_focus)",
        field = "var(--mol_theme_field)"
    }
}

declare namespace $ {
}

declare namespace $ {
    namespace $$ { }
    const $mol_object_field: unique symbol;
    class $mol_object extends $mol_object2 {
        static make<Instance>(this: {
            new (): Instance;
        }, config: Partial<Instance>): Instance;
    }
}

declare namespace $ {
    class $mol_wrapper extends $mol_object2 {
        static wrap: (task: (...ags: any[]) => any) => (...ags: any[]) => any;
        static run<Result>(task: () => Result): Result;
        static func<Args extends any[], Result, Host = void>(func: (this: Host, ...args: Args) => Result): (this: Host, ...args: Args) => Result;
        static get class(): <Class extends new (...args: any[]) => any>(Class: Class) => Class;
        static get method(): <Host, Field extends keyof Host, Args extends any[], Result>(obj: Host, name: Field, descr: TypedPropertyDescriptor<(this: Host, ...args: Args) => Result>) => TypedPropertyDescriptor<(this: Host, ...args: Args) => Result>;
        static get field(): <Host, Field extends keyof Host, Args extends any[], Result>(obj: Host, name: Field, descr: TypedPropertyDescriptor<Result>) => TypedPropertyDescriptor<Result>;
    }
}

declare namespace $ {
    function $mol_dev_format_register(config: {
        header: (val: any, config: any) => any;
        hasBody: (val: any, config: any) => false;
    } | {
        header: (val: any, config: any) => any;
        hasBody: (val: any, config: any) => boolean;
        body: (val: any, config: any) => any;
    }): void;
    let $mol_dev_format_head: symbol;
    let $mol_dev_format_body: symbol;
    function $mol_dev_format_native(obj: any): any;
    function $mol_dev_format_auto(obj: any): any;
    function $mol_dev_format_element(element: string, style: object, ...content: any[]): any[];
    function $mol_dev_format_span(style: object, ...content: any[]): any[];
    let $mol_dev_format_div: any;
    let $mol_dev_format_ol: any;
    let $mol_dev_format_li: any;
    let $mol_dev_format_table: any;
    let $mol_dev_format_tr: any;
    let $mol_dev_format_td: any;
    let $mol_dev_format_accent: any;
    let $mol_dev_format_strong: any;
    let $mol_dev_format_string: any;
    let $mol_dev_format_shade: any;
    let $mol_dev_format_indent: any;
}

declare namespace $ {
    function $mol_maybe<Value>(value: Value | null | undefined): Value[];
}

declare namespace $ {
    function $mol_log(path: any, ...values: any[]): void;
}

declare namespace $ {
    function $mol_log_group<Task extends Function, This>(name: string, task: Task): Task;
}

declare namespace $ {
    function $mol_log_context(next?: () => void): () => void;
}

declare namespace $ {
    function $mol_log_debug(next?: () => void): () => void;
}

declare namespace $ {
    var $mol_log_filter: (next?: string) => string;
}

declare namespace $ {
    class $mol_log2 extends $mol_wrapper {
        readonly host: any;
        readonly id: string;
        readonly args: any[];
        static current: $mol_log2;
        static wrap<This extends {
            $: $mol_ambient_context;
        }, Args extends any[], Result>(task: (this: This, ...args: Args) => Result): (this: This, ...args: Args) => any;
        constructor(host: any, id: string, args: any[]);
        stream: $mol_log2_line[];
        flush(): void;
        info(...values: any[]): void;
        static info(...values: any[]): void;
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
        static excludes: RegExp[];
        static prefix: any[];
    }
    class $mol_log2_indent extends $mol_wrapper {
        static wrap<This extends {
            $: $mol_ambient_context;
        }, Args extends any[], Result>(task: (this: This, ...args: Args) => Result): (this: This, ...args: Args) => any;
    }
    class $mol_log2_table extends $mol_log2 {
    }
    class $mol_log2_hidden extends $mol_log2 {
        flush(): void;
    }
    class $mol_log2_line extends Array<any> {
        constructor(...items: any[]);
    }
    class $mol_log2_token extends Array<any> {
        constructor(...items: any[]);
    }
    let $mol_log2_token_empty: $mol_log2_token;
    let $mol_log2_token_indent: $mol_log2_token;
    let $mol_log2_legend: $mol_log2_table;
}

declare namespace $ {
    function $mol_compare_any(a: any, b: any): boolean;
}

declare namespace $ {
    const $mol_conform_stack: any[];
    function $mol_conform<Target, Source>(target: Target, source: Source): Target;
    const $mol_conform_handlers: WeakMap<Object, (target: any, source: any) => any>;
    function $mol_conform_handler<Class>(cl: {
        new (...args: any[]): Class;
    }, handler: (target: Class, source: Class) => Class): void;
}

declare namespace $ {
    function $mol_array_trim<Item>(array: Item[]): Item[];
}

declare namespace $ {
    const enum $mol_fiber_status {
        persist = -3,
        actual = -2,
        doubt = -1,
        obsolete = 0
    }
    function $mol_fiber_defer<Value = void>(calculate: () => Value): $mol_fiber<any>;
    function $mol_fiber_func<This, Args extends any[], Result>(calculate: (this: This, ...args: Args) => Result): (this: This, ...args: Args) => Result;
    function $mol_fiber_root<Calculate extends (this: This, ...args: any[]) => Result, Result = void, This = void>(calculate: Calculate): Calculate;
    function $mol_fiber_method<Host, Value>(obj: Host, name: keyof Host, descr: TypedPropertyDescriptor<(this: Host, ...args: any[]) => Value>): TypedPropertyDescriptor<(this: Host, ...args: any[]) => Value>;
    function $mol_fiber_async<Args extends any[], Value>(task: (...args: Args) => Value): (...args: Args) => Promise<Value>;
    function $mol_fiber_sync<Args extends any[], Value = void, This = void>(request: (this: This, ...args: Args) => PromiseLike<Value>): (...args: Args) => Value;
    function $mol_fiber_warp(): Promise<void>;
    function $mol_fiber_fence(func: () => any): any;
    function $mol_fiber_unlimit<Result>(task: () => Result): Result;
    class $mol_fiber_solid extends $mol_wrapper {
        static func<This, Args extends any[], Result>(task: (this: This, ...args: Args) => Result): (this: This, ...args: Args) => Result;
    }
    class $mol_fiber<Value = any> extends $mol_wrapper {
        static wrap<Func extends (...args: any[]) => any>(task: Func): (this: ThisParameterType<Func>, ...args: Parameters<Func>) => any;
        static quant: number;
        static deadline: number;
        static liveline: number;
        static current: $mol_fiber<any>;
        static scheduled: $mol_after_tick;
        static queue: (() => PromiseLike<any>)[];
        static tick(): Promise<void>;
        static schedule(): Promise<any>;
        value: Value;
        error: Error | PromiseLike<Value>;
        cursor: $mol_fiber_status;
        masters: (number | $mol_fiber<any>)[];
        calculate: () => Value;
        schedule(): void;
        wake(): Value;
        push(value: Value): Value;
        fail(error: Error | PromiseLike<Value>): Error | PromiseLike<Value>;
        wait(promise: PromiseLike<Value>): PromiseLike<Value>;
        complete(): void;
        complete_master(master_index: number): void;
        pull(): void;
        update(): void;
        get(): Value;
        limit(): void;
        get master(): $mol_fiber;
        set master(next: $mol_fiber);
        rescue(master: $mol_fiber, master_index: number): void;
        obey(master: $mol_fiber, master_index: number): number;
        lead(slave: $mol_fiber, master_index: number): number;
        dislead(slave_index: number): void;
        disobey(master_index: number): void;
        obsolete_slaves(): void;
        obsolete(master_index: number): void;
        forget(): void;
        abort(): boolean;
        destructor(): void;
    }
    let $mol_fiber_token_runned: $mol_log2_token;
    let $mol_fiber_token_changed1: $mol_log2_token;
    let $mol_fiber_token_changed2: $mol_log2_token;
    let $mol_fiber_token_actualized: $mol_log2_token;
    let $mol_fiber_token_sleeped: $mol_log2_token;
    let $mol_fiber_token_failed: $mol_log2_token;
    let $mol_fiber_token_destructed: $mol_log2_token;
}

declare namespace $ {
    function $mol_atom2_value<Value>(task: () => Value): Value | undefined;
    class $mol_atom2<Value = any> extends $mol_fiber<Value> {
        static get current(): $mol_atom2<any>;
        static cached: boolean;
        static reap_task: $mol_fiber<any>;
        static reap_queue: $mol_atom2<any>[];
        static reap(atom: $mol_atom2): void;
        slaves: (number | $mol_fiber<any>)[];
        rescue(master: $mol_atom2, cursor: number): void;
        get(): Value;
        pull(): void;
        _value: Value;
        get value(): Value;
        set value(next: Value);
        _error: Error | PromiseLike<Value>;
        get error(): null | Error | PromiseLike<Value>;
        set error(next: null | Error | PromiseLike<Value>);
        put(next: Value): Value;
        complete_master(master_index: number): void;
        obey(master: $mol_fiber, master_index: number): number;
        lead(slave: $mol_fiber, master_index: number): number;
        dislead(slave_index: number): void;
        obsolete(master_index?: number): void;
        doubt(master_index?: number): void;
        obsolete_slaves(): void;
        doubt_slaves(): void;
        get fresh(): (this: void) => void;
        get alone(): boolean;
        get derived(): boolean;
        destructor(): void;
    }
    let $mol_atom2_token_revalidation: $mol_log2_token;
    let $mol_atom2_token_stumbled: $mol_log2_token;
    let $mol_atom2_token_revalidated: $mol_log2_token;
    let $mol_atom2_token_leaded: $mol_log2_token;
    let $mol_atom2_token_disleaded: $mol_log2_token;
    let $mol_atom2_token_obsoleted: $mol_log2_token;
    let $mol_atom2_token_doubted: $mol_log2_token;
}

declare namespace $ {
    class $mol_mem_force extends Object {
        constructor();
        $mol_mem_force: boolean;
        static $mol_mem_force: boolean;
        static toString(): string;
    }
    class $mol_mem_force_cache extends $mol_mem_force {
    }
    class $mol_mem_force_update extends $mol_mem_force {
    }
    class $mol_mem_force_fail extends $mol_mem_force_cache {
    }
}

declare namespace $ {
    let $mol_mem_cached: typeof $mol_atom2_value;
    function $mol_mem_persist(): void;
    function $mol_mem<Host extends object, Field extends keyof Host, Value>(proto: Host, name: Field, descr?: TypedPropertyDescriptor<(next?: Value, force?: $mol_mem_force) => Value>): any;
}

declare namespace $ {
    function $mol_dict_key(value: any): any;
    class $mol_dict<Key, Value> extends Map<Key, Value> {
        get(key: Key): Value;
        has(key: Key): boolean;
        set(key: Key, value: Value): this;
        delete(key: Key): boolean;
        forEach(back: (value: Value, key: Key, dict: Map<Key, Value>) => void, context?: any): void;
        [Symbol.iterator](): {
            [Symbol.iterator](): any;
            next(): IteratorResult<[Key, Value], any>;
        };
    }
}

declare namespace $ {
    function $mol_mem_key<Host extends object, Field extends keyof Host, Key, Value>(proto: Host, name: Field, descr?: TypedPropertyDescriptor<(key: Key, next?: Value, force?: $mol_mem_force) => Value>): any;
}

declare namespace $ {
    class $mol_state_local<Value> extends $mol_object {
        static 'native()': Pick<Storage, 'getItem' | 'setItem' | 'removeItem'>;
        static native(): Storage | {
            getItem(key: string): any;
            setItem(key: string, value: string): void;
            removeItem(key: string): void;
        };
        static value<Value>(key: string, next?: Value, force?: $mol_mem_force): Value | null;
        prefix(): string;
        value(key: string, next?: Value): Value;
    }
}

declare namespace $ {
    function $mol_const<Value>(value: Value): {
        (): Value;
        '()': Value;
    };
}

/// <reference types="node" />
declare namespace $ {
    class $mol_file extends $mol_object {
        static absolute(path: string): $mol_file;
        static relative(path: string): $mol_file;
        path(): string;
        watcher(): import("chokidar").FSWatcher;
        stat(next?: any, force?: $mol_mem_force): any;
        version(): any;
        exists(next?: boolean): boolean;
        parent(): $mol_file;
        type(): "dir" | "link" | "file" | "blocks" | "chars" | "fifo" | "socket";
        name(): string;
        ext(): string;
        content(next?: string | Buffer, force?: $mol_mem_force): string | Buffer;
        reader(): import("fs").ReadStream;
        writer(): import("fs").WriteStream;
        sub(): $mol_file[];
        resolve(path: string): $mol_file;
        relate(base?: $mol_file): string;
        append(next: string): void;
        find(include?: RegExp, exclude?: RegExp): $mol_file[];
    }
}

declare namespace $ {
    interface $mol_locale_dict {
        [key: string]: string;
    }
    class $mol_locale extends $mol_object {
        static lang_default(): string;
        static lang(next?: string): string;
        static source(lang: string): any;
        static texts(lang: string, next?: $mol_locale_dict): $mol_locale_dict;
        static text(key: string): string;
    }
}

declare namespace $ {
    class $mpk_tss_todo extends Error {
        name: string;
    }
    class $mpk_tss_todo_unknown extends Error {
        name: string;
    }
}

declare namespace $ {
    class $mpk_tss_domain_terminal {
        static current(): $mpk_tss_domain_terminal;
        id(): string;
    }
}

declare namespace $ {
    class $mol_memo extends $mol_wrapper {
        static wrap<This extends object, Value>(task: (this: This, next?: Value) => Value): (this: This, next?: Value) => any;
    }
}

declare namespace $ {
    class $mol_unit extends $mol_object {
        'valueOf()': number;
        constructor(value?: number);
        prefix(): string;
        postfix(): string;
        valueOf(): number;
        delimiter(): string;
        value_view(): string;
        toString(): string;
        static summ(a: $mol_unit, b: $mol_unit): any;
        mult(m: number): this;
    }
}

declare namespace $ {
    class $mol_unit_money extends $mol_unit {
    }
    class $mol_unit_money_usd extends $mol_unit_money {
        prefix(): string;
    }
    class $mol_unit_money_rur extends $mol_unit_money {
        postfix(): string;
    }
}

declare namespace $ {
    class $mol_time_base {
        static patterns: any;
        static formatter(pattern: string): any;
        toString(pattern: string): string;
    }
}

declare namespace $ {
    type $mol_time_duration_config = number | string | {
        year?: number;
        month?: number;
        day?: number;
        hour?: number;
        minute?: number;
        second?: number;
    };
    class $mol_time_duration extends $mol_time_base {
        constructor(config?: $mol_time_duration_config);
        readonly year: number;
        readonly month: number;
        readonly day: number;
        readonly hour: number;
        readonly minute: number;
        readonly second: number;
        summ(config: $mol_time_duration_config): $mol_time_duration;
        mult(numb: number): $mol_time_duration;
        count(config: $mol_time_duration_config): number;
        valueOf(): number;
        toJSON(): string;
        toString(pattern?: string): string;
        static patterns: {
            '#Y': (duration: $mol_time_duration) => string;
            '#M': (duration: $mol_time_duration) => string;
            '#D': (duration: $mol_time_duration) => string;
            '#h': (duration: $mol_time_duration) => string;
            '#m': (duration: $mol_time_duration) => string;
            '#s': (duration: $mol_time_duration) => string;
            '+hh': (duration: $mol_time_duration) => string;
            'mm': (duration: $mol_time_duration) => string;
        };
    }
}

declare namespace $ {
    type $mol_time_moment_config = number | Date | string | {
        year?: number;
        month?: number;
        day?: number;
        hour?: number;
        minute?: number;
        second?: number;
        offset?: $mol_time_duration_config;
    };
    class $mol_time_moment extends $mol_time_base {
        constructor(config?: $mol_time_moment_config);
        readonly year: number | undefined;
        readonly month: number | undefined;
        readonly day: number | undefined;
        readonly hour: number | undefined;
        readonly minute: number | undefined;
        readonly second: number | undefined;
        readonly offset: $mol_time_duration | undefined;
        get weekday(): number;
        private _native;
        get native(): Date;
        private _normal;
        get normal(): $mol_time_moment;
        merge(config: $mol_time_moment_config): $mol_time_moment;
        shift(config: $mol_time_duration_config): $mol_time_moment;
        toOffset(config: $mol_time_duration_config): $mol_time_moment;
        valueOf(): number;
        toJSON(): string;
        toString(pattern?: string): string;
        static patterns: {
            'YYYY': (moment: $mol_time_moment) => string;
            'AD': (moment: $mol_time_moment) => string;
            'YY': (moment: $mol_time_moment) => string;
            'Month': (moment: $mol_time_moment) => string;
            'DD Month': (moment: $mol_time_moment) => string;
            'D Month': (moment: $mol_time_moment) => string;
            'Mon': (moment: $mol_time_moment) => string;
            'DD Mon': (moment: $mol_time_moment) => string;
            'D Mon': (moment: $mol_time_moment) => string;
            '-MM': (moment: $mol_time_moment) => string;
            'MM': (moment: $mol_time_moment) => string;
            'M': (moment: $mol_time_moment) => string;
            'WeekDay': (moment: $mol_time_moment) => string;
            'WD': (moment: $mol_time_moment) => string;
            '-DD': (moment: $mol_time_moment) => string;
            'DD': (moment: $mol_time_moment) => string;
            'D': (moment: $mol_time_moment) => string;
            'Thh': (moment: $mol_time_moment) => string;
            'hh': (moment: $mol_time_moment) => string;
            'h': (moment: $mol_time_moment) => string;
            ':mm': (moment: $mol_time_moment) => string;
            'mm': (moment: $mol_time_moment) => string;
            'm': (moment: $mol_time_moment) => string;
            ':ss': (moment: $mol_time_moment) => string;
            'ss': (moment: $mol_time_moment) => string;
            's': (moment: $mol_time_moment) => string;
            '.sss': (moment: $mol_time_moment) => string;
            'sss': (moment: $mol_time_moment) => string;
            'Z': (moment: $mol_time_moment) => string;
        };
    }
}

declare namespace $ {
    function $mol_stub_select_random<Value>(list: Value[]): Value;
    function $mol_stub_strings(prefix?: string, count?: number, length?: number): any[];
    function $mol_stub_code(length?: number): string;
    function $mol_stub_price(max?: number): $mol_unit_money_usd;
    function $mol_stub_product_name(): string;
    function $mol_stub_company_name_big(): string;
    function $mol_stub_company_name_small(): string;
    function $mol_stub_company_name(): string;
    function $mol_stub_person_name(): string;
    function $mol_stub_city(): string;
    function $mol_stub_time(maxShift?: number): $mol_time_moment;
    function $mol_stub_message(max_length: number): string;
}

declare namespace $ {
    function $mpk_tss_stub_id(): string;
    function $mpk_tss_stub_ids(max?: number): string[];
    function $mpk_tss_stub_pick_random<Value>(list: Value[], count_max?: number): Set<Value>;
    function $mpk_tss_stub_number(min?: number, max?: number): number;
}

declare namespace $ {
    class $mpk_tss_domain_terminal_mock extends $mpk_tss_domain_terminal {
        id(): string;
    }
}

declare namespace $ {
    class $mpk_tss_domain_user extends $mol_object {
        static current(): $mpk_tss_domain_user;
        email(next?: string): string;
        password(next?: string): string;
        logged(): boolean;
        login(): void;
        logout(): void;
    }
}

declare namespace $ {
    class $mol_state_arg extends $mol_object {
        prefix: string;
        static href(next?: string): string;
        static dict(next?: {
            [key: string]: string | null;
        }): {
            [key: string]: string;
        };
        static value(key: string, next?: string | null): string;
        static link(next: any): string;
        static make_link(next: {
            [key: string]: any;
        }): string;
        constructor(prefix?: string);
        value(key: string, next?: string): string;
        sub(postfix: string): $mol_state_arg;
        link(next: {
            [key: string]: string;
        }): string;
    }
}

declare namespace $ {
    class $mpk_tss_domain_user_mock extends $mpk_tss_domain_user {
        protected server_data(next?: string): string;
        email(next?: string): string;
        password(next?: string): string;
        logged(): boolean;
        login(): void;
        logout(): void;
    }
}

declare namespace $ {
    class $mpk_tss_pereferial_domain_units extends $mol_object {
        unit(id: string): $mpk_tss_pereferial_domain_unit;
        filter_name(next?: string): string;
        units(): $mpk_tss_pereferial_domain_unit[];
    }
    enum $mpk_tss_pereferial_domain_type {
        ups = "UPS"
    }
    enum $mpk_tss_pereferial_domain_status {
        ready = "ready",
        error = "error",
        not_responding = "not_responding",
        inactive = "inactive",
        unknown = "unknown"
    }
    const $mpk_tss_pereferial_domain_status_weights: Record<string, number>;
    class $mpk_tss_pereferial_domain_unit extends $mol_object {
        id(): string;
        type(): $mpk_tss_pereferial_domain_type;
        name(): string;
        status(): $mpk_tss_pereferial_domain_status;
        updated(next?: $mol_time_moment): $mol_time_moment | null;
    }
    enum $mpk_tss_pereferial_domain_ups_power_source {
        linein = "linein",
        internal = "internal"
    }
    class $mpk_tss_pereferial_domain_ups extends $mpk_tss_pereferial_domain_unit {
        type(): $mpk_tss_pereferial_domain_type;
        power_source(): $mpk_tss_pereferial_domain_ups_power_source;
        voltage(): number;
        /**
          Battery level 0-100%
         */
        battery_level(): number;
        battery_time(): $mol_time_duration;
    }
}

declare namespace $ {
    class $mpk_tss_pereferial_domain_mock_units extends $mpk_tss_pereferial_domain_units {
        max_units(): number;
        unit(id: string): $mpk_tss_pereferial_domain_unit;
        units_all(): $mpk_tss_pereferial_domain_unit[];
        units(): $mpk_tss_pereferial_domain_unit[];
    }
}

declare namespace $ {
    class $mpk_tss_reports_domain_trains extends $mol_object {
        report(id: string): $mpk_tss_reports_domain_report;
        filter_number(next?: string | null): string | null;
        filter_resolution(next?: $mpk_tss_reports_domain_resolution | null): $mpk_tss_reports_domain_resolution | null;
        reports(): $mpk_tss_reports_domain_report[];
    }
    enum $mpk_tss_reports_domain_resolution {
        success = "success",
        warning = "warning"
    }
    enum $mpk_tss_reports_domain_load {
        free = "free",
        full = "full"
    }
    enum $mpk_tss_reports_domain_violation {
        slider = "slider",
        vyscherbiny = "vyscherbiny",
        sink = "sink",
        dent = "dent"
    }
    enum $mpk_tss_reports_domain_carriage_type {
        hopper = "hopper",
        flatcar = "flatcar",
        tank = "tank",
        covered = "covered"
    }
    type $mpk_tss_reports_domain_point = [number, number];
    class $mpk_tss_reports_domain_wheel extends $mol_object {
        id(): string;
        resolution(): $mpk_tss_reports_domain_resolution;
        violation(): $mpk_tss_reports_domain_violation | null;
        forces(): readonly [readonly number[], readonly number[]];
    }
    class $mpk_tss_reports_domain_axle extends $mol_object {
        id(): string;
        axle_number(): number;
        resolution(): $mpk_tss_reports_domain_resolution;
        violation(): $mpk_tss_reports_domain_violation | null;
        wheel(id: string): $mpk_tss_reports_domain_wheel;
        wheels(): $mpk_tss_reports_domain_wheel[];
    }
    class $mpk_tss_reports_domain_carriage extends $mol_object {
        id(): string;
        train(): $mpk_tss_reports_domain_report;
        carriage_number(): string;
        place(): number;
        resolution(): $mpk_tss_reports_domain_resolution;
        violation(): $mpk_tss_reports_domain_violation | null;
        load(): $mpk_tss_reports_domain_load;
        measured_speed(): number;
        total_weight(): number;
        length(): number;
        type(): $mpk_tss_reports_domain_carriage_type;
        axis(): $mpk_tss_reports_domain_axle[];
        axle(id: string): $mpk_tss_reports_domain_axle;
    }
    enum $mpk_tss_reports_domain_delivery {
        preparing = "preparing",
        sending = "sending",
        sent = "sent",
        error = "error"
    }
    class $mpk_tss_reports_domain_carriages extends $mol_object {
        carriage(id: string): $mpk_tss_reports_domain_carriage;
        filter_number(next?: string | null): string | null;
        filter_resolution(next?: $mpk_tss_reports_domain_resolution | null): $mpk_tss_reports_domain_resolution | null;
        carriages(): $mpk_tss_reports_domain_carriage[];
    }
    class $mpk_tss_reports_domain_report extends $mol_object {
        id(): string;
        train_number(): string;
        send_count(): number;
        delivery(): $mpk_tss_reports_domain_delivery;
        average_speed(): number;
        resolution(): $mpk_tss_reports_domain_resolution;
        started(): $mol_time_moment | null;
        carriages(config?: Partial<$mpk_tss_reports_domain_carriages>): $mpk_tss_reports_domain_carriages;
    }
}

declare namespace $ {
    class $mpk_tss_reports_domain_mock_trains extends $mpk_tss_reports_domain_trains {
        max_reports(): number;
        report(id: string): $mpk_tss_reports_domain_report;
        reports_all(): $mpk_tss_reports_domain_report[];
        reports(): $mpk_tss_reports_domain_report[];
    }
}

declare namespace $ {
    enum $mol_keyboard_code {
        backspace = 8,
        tab = 9,
        enter = 13,
        shift = 16,
        ctrl = 17,
        alt = 18,
        pause = 19,
        capsLock = 20,
        escape = 27,
        space = 32,
        pageUp = 33,
        pageDown = 34,
        end = 35,
        home = 36,
        left = 37,
        up = 38,
        right = 39,
        down = 40,
        insert = 45,
        delete = 46,
        key0 = 48,
        key1 = 49,
        key2 = 50,
        key3 = 51,
        key4 = 52,
        key5 = 53,
        key6 = 54,
        key7 = 55,
        key8 = 56,
        key9 = 57,
        A = 65,
        B = 66,
        C = 67,
        D = 68,
        E = 69,
        F = 70,
        G = 71,
        H = 72,
        I = 73,
        J = 74,
        K = 75,
        L = 76,
        M = 77,
        N = 78,
        O = 79,
        P = 80,
        Q = 81,
        R = 82,
        S = 83,
        T = 84,
        U = 85,
        V = 86,
        W = 87,
        X = 88,
        Y = 89,
        Z = 90,
        metaLeft = 91,
        metaRight = 92,
        select = 93,
        numpad0 = 96,
        numpad1 = 97,
        numpad2 = 98,
        numpad3 = 99,
        numpad4 = 100,
        numpad5 = 101,
        numpad6 = 102,
        numpad7 = 103,
        numpad8 = 104,
        numpad9 = 105,
        multiply = 106,
        add = 107,
        subtract = 109,
        decimal = 110,
        divide = 111,
        F1 = 112,
        F2 = 113,
        F3 = 114,
        F4 = 115,
        F5 = 116,
        F6 = 117,
        F7 = 118,
        F8 = 119,
        F9 = 120,
        F10 = 121,
        F11 = 122,
        F12 = 123,
        numLock = 144,
        scrollLock = 145,
        semicolon = 186,
        equals = 187,
        comma = 188,
        dash = 189,
        period = 190,
        forwardSlash = 191,
        graveAccent = 192,
        bracketOpen = 219,
        slashBack = 220,
        slashBackLeft = 226,
        bracketClose = 221,
        quoteSingle = 222
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_window extends $mol_object {
        static size(next?: {
            width: number;
            height: number;
        }): {
            width: number;
            height: number;
        };
    }
}

declare namespace $ {
    function $mol_atom2_autorun(calculate: () => any): $mol_atom2<unknown>;
}

declare namespace $ {
    class $mol_defer extends $mol_object {
        run: () => void;
        constructor(run: () => void);
        destructor(): void;
        static all: $mol_defer[];
        static timer: any;
        static scheduleNative: (handler: () => void) => any;
        static schedule(): void;
        static unschedule(): void;
        static add(defer: $mol_defer): void;
        static drop(defer: $mol_defer): void;
        static run(): void;
    }
}

declare namespace $ {
    class $mol_view_selection extends $mol_object {
        static focused(next?: Element[]): Element[];
        static focus(event: FocusEvent): void;
        static blur(event: FocusEvent): void;
    }
}

declare namespace $ {
    function $mol_dom_render_attributes(el: Element, attrs: {
        [key: string]: string | number | boolean | null;
    }): void;
}

declare namespace $ {
    function $mol_fail_catch(error: object): boolean;
}

declare namespace $ {
    function $mol_dom_render_styles(el: Element, styles: {
        [key: string]: string | number;
    }): void;
}

declare namespace $ {
    function $mol_dom_render_fields(el: Element, fields: {
        [key: string]: any;
    }): void;
}

declare namespace $ {
    function $mol_dom_render_children(el: Element, childNodes: NodeList | Array<Node | string | null>): void;
}

declare namespace $ {
    function $mol_func_name(func: Function): string;
    function $mol_func_name_from<Target extends Function>(target: Target, source: Function): Target;
}

declare namespace $ {
    function $mol_deprecated(message: string): <Method extends (this: Host, ...args: readonly any[]) => any, Host extends { [key in Field]: Method; }, Field extends keyof Host>(host: Host, field: Field, descr: TypedPropertyDescriptor<Method>) => void;
}

declare namespace $ {
    /**
     * Extracts keys from `Input` which values extends `Upper`, but not extends `Lower`.
     *
     * 	type MathConstants = $mol_type_keys_extract< Math , never , number > // "E" | "PI" ...
     */
    type $mol_type_keys_extract<Input, Lower, Upper> = {
        [Field in keyof Input]: Lower extends Input[Field] ? never : Input[Field] extends Upper ? Field : never;
    }[keyof Input];
}

declare namespace $ {
    type $mol_view_content = $mol_view | Node | string | number | boolean;
    function $mol_view_visible_width(): number;
    function $mol_view_visible_height(): number;
    function $mol_view_state_key(suffix: string): string;
    class $mol_view extends $mol_object {
        static Root<This extends typeof $mol_view>(this: This, id: number): InstanceType<This>;
        autorun(): $mol_atom2<unknown>;
        static autobind(): void;
        title(): string;
        focused(next?: boolean): boolean;
        state_key(suffix?: string): string;
        dom_name(): string;
        dom_name_space(): string;
        sub(): readonly (string | number | boolean | Node | $mol_view)[];
        sub_visible(): readonly (string | number | boolean | Node | $mol_view)[];
        minimal_width(): number;
        minimal_height(): number;
        static watchers: Set<$mol_view>;
        view_rect(next?: ClientRect): ClientRect;
        view_rect_watcher(): {
            destructor: () => boolean;
        };
        dom_id(): any;
        dom_node(next?: Element): Element;
        dom_tree(next?: Element): Element;
        dom_node_actual(): Element;
        render(): void;
        static view_classes(): (typeof $mol_view)[];
        view_names_owned(): string[];
        view_names(): string[];
        attr_static(): {
            [key: string]: string | number | boolean | null;
        };
        attr(): {
            [key: string]: string | number | boolean | null;
        };
        style(): {
            [key: string]: string | number;
        };
        field(): {
            [key: string]: any;
        };
        event(): {
            [key: string]: (event: Event) => void;
        };
        event_async(): {
            [key: string]: (event: Event) => void;
        };
        plugins(): readonly $mol_view[];
    }
    type $mol_view_all = $mol_type_keys_extract<$mol_ambient_context, any, $mol_ambient_context['$mol_view']>;
}

declare namespace $ {
}

declare namespace $ {
    class $mol_string extends $mol_view {
        /**
         *  ```
         *  dom_name \input
         *  ```
         **/
        dom_name(): string;
        /**
         *  ```
         *  enabled true
         *  ```
         **/
        enabled(): boolean;
        /**
         *  ```
         *  debounce 0
         *  ```
         **/
        debounce(): number;
        /**
         *  ```
         *  minimal_height 40
         *  ```
         **/
        minimal_height(): number;
        /**
         *  ```
         *  autocomplete false
         *  ```
         **/
        autocomplete(): boolean;
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
        field(): {
            "disabled": boolean;
            "value": any;
            "placeholder": string;
            "type": any;
            "spellcheck": boolean;
            "autocomplete": string;
        };
        /**
         *  ```
         *  disabled false
         *  ```
         **/
        disabled(): boolean;
        /**
         *  ```
         *  value_changed?val <=> value?val
         *  ```
         **/
        value_changed(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  value?val \
         *  ```
         **/
        value(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  hint \
         *  ```
         **/
        hint(): string;
        /**
         *  ```
         *  type?val \text
         *  ```
         **/
        type(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  spellcheck false
         *  ```
         **/
        spellcheck(): boolean;
        /**
         *  ```
         *  autocomplete_native \
         *  ```
         **/
        autocomplete_native(): string;
        /**
         *  ```
         *  attr *
         *  	^
         *  	maxlength <= length_max
         *  ```
         **/
        attr(): {
            "maxlength": number;
        };
        /**
         *  ```
         *  length_max Infinity
         *  ```
         **/
        length_max(): number;
        /**
         *  ```
         *  event *
         *  	^
         *  	input?event <=> event_change?event
         *  	keydown?event <=> event_key_press?event
         *  ```
         **/
        event(): {
            "input": (event?: any) => any;
            "keydown": (event?: any) => any;
        };
        /**
         *  ```
         *  event_change?event null
         *  ```
         **/
        event_change(event?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  event_key_press?event null
         *  ```
         **/
        event_key_press(event?: any, force?: $mol_mem_force): any;
    }
}

declare namespace $.$$ {
    class $mol_string extends $.$mol_string {
        event_change(next?: Event): void;
        event_key_press(next?: KeyboardEvent): void;
        disabled(): boolean;
        autocomplete_native(): "on" | "off";
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_after_timeout extends $mol_object2 {
        delay: number;
        task: () => void;
        id: any;
        constructor(delay: number, task: () => void);
        destructor(): void;
    }
}

declare namespace $ {
    class $mol_after_frame extends $mol_after_timeout {
        task: () => void;
        constructor(task: () => void);
    }
}

declare namespace $ {
    class $mol_state_time extends $mol_object {
        static now(precision?: number, next?: number): number;
    }
}

declare namespace $ {
    function $mol_font_canvas(next?: CanvasRenderingContext2D): CanvasRenderingContext2D;
}

declare namespace $ {
    function $mol_font_measure(size: number, face: string, text: string): number;
}

declare namespace $ {
    class $mol_svg extends $mol_view {
        /**
         *  ```
         *  dom_name \svg
         *  ```
         **/
        dom_name(): string;
        /**
         *  ```
         *  dom_name_space \http://www.w3.org/2000/svg
         *  ```
         **/
        dom_name_space(): string;
        /**
         *  ```
         *  text_width?text 0
         *  ```
         **/
        text_width(text?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  font_size 16
         *  ```
         **/
        font_size(): number;
        /**
         *  ```
         *  font_family \
         *  ```
         **/
        font_family(): string;
    }
}

declare namespace $.$$ {
    class $mol_svg extends $.$mol_svg {
        computed_style(): CSSStyleDeclaration;
        font_size(): number;
        font_family(): any;
        text_width(text: string): number;
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_svg_root extends $mol_svg {
        /**
         *  ```
         *  dom_name \svg
         *  ```
         **/
        dom_name(): string;
        /**
         *  ```
         *  attr *
         *  	^
         *  	viewBox <= view_box
         *  	preserveAspectRatio <= aspect
         *  ```
         **/
        attr(): {
            "viewBox": string;
            "preserveAspectRatio": string;
        };
        /**
         *  ```
         *  view_box \0 0 100 100
         *  ```
         **/
        view_box(): string;
        /**
         *  ```
         *  aspect \xMidYMid
         *  ```
         **/
        aspect(): string;
    }
}

declare namespace $ {
    class $mol_svg_path extends $mol_svg {
        /**
         *  ```
         *  dom_name \path
         *  ```
         **/
        dom_name(): string;
        /**
         *  ```
         *  attr *
         *  	^
         *  	d <= geometry
         *  ```
         **/
        attr(): {
            "d": string;
        };
        /**
         *  ```
         *  geometry \
         *  ```
         **/
        geometry(): string;
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_icon extends $mol_svg_root {
        /**
         *  ```
         *  view_box \0 0 24 24
         *  ```
         **/
        view_box(): string;
        /**
         *  ```
         *  minimal_width 16
         *  ```
         **/
        minimal_width(): number;
        /**
         *  ```
         *  minimal_height 16
         *  ```
         **/
        minimal_height(): number;
        /**
         *  ```
         *  sub / <= Path
         *  ```
         **/
        sub(): readonly any[];
        /**
         *  ```
         *  Path $mol_svg_path geometry <= path
         *  ```
         **/
        Path(): $mol_svg_path;
        /**
         *  ```
         *  path \
         *  ```
         **/
        path(): string;
    }
}

declare namespace $ {
    class $mol_button extends $mol_view {
        /**
         *  ```
         *  enabled true
         *  ```
         **/
        enabled(): boolean;
        /**
         *  ```
         *  minimal_height 40
         *  ```
         **/
        minimal_height(): number;
        /**
         *  ```
         *  click?event null
         *  ```
         **/
        click(event?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  event_click?event null
         *  ```
         **/
        event_click(event?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  event *
         *  	^
         *  	click?event <=> event_activate?event
         *  	keypress?event <=> event_key_press?event
         *  ```
         **/
        event(): {
            "click": (event?: any) => any;
            "keypress": (event?: any) => any;
        };
        /**
         *  ```
         *  event_activate?event null
         *  ```
         **/
        event_activate(event?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  event_key_press?event null
         *  ```
         **/
        event_key_press(event?: any, force?: $mol_mem_force): any;
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
        attr(): {
            "disabled": boolean;
            "role": string;
            "tabindex": number;
            "title": string;
        };
        /**
         *  ```
         *  disabled false
         *  ```
         **/
        disabled(): boolean;
        /**
         *  ```
         *  tab_index 0
         *  ```
         **/
        tab_index(): number;
        /**
         *  ```
         *  hint \
         *  ```
         **/
        hint(): string;
        /**
         *  ```
         *  sub /$mol_view_content <= title
         *  ```
         **/
        sub(): readonly (string | number | boolean | Node | $mol_view)[];
    }
}

declare namespace $.$$ {
    class $mol_button extends $.$mol_button {
        disabled(): boolean;
        event_activate(next: Event): void;
        event_key_press(event: KeyboardEvent): void;
        tab_index(): number;
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_button_typed extends $mol_button {
    }
}
declare namespace $ {
    class $mol_button_major extends $mol_button_typed {
        /**
         *  ```
         *  attr *
         *  	^
         *  	mol_theme \$mol_theme_accent
         *  ```
         **/
        attr(): {
            "mol_theme": string;
            "disabled": boolean;
            "role": string;
            "tabindex": number;
            "title": string;
        };
    }
}
declare namespace $ {
    class $mol_button_minor extends $mol_button_typed {
    }
}

declare namespace $ {
    function $mol_offline(uri?: string): void;
}

declare namespace $ {
}

declare namespace $ {
    class $mol_plugin extends $mol_view {
        dom_node(next?: Element): Element;
        attr_static(): {
            [key: string]: string | number | boolean;
        };
        event(): {
            [key: string]: (event: Event) => void;
        };
        render(): void;
    }
}

declare namespace $ {
    class $mol_meter extends $mol_plugin {
        /**
         *  ```
         *  zoom 1
         *  ```
         **/
        zoom(): number;
        /**
         *  ```
         *  width?val 0
         *  ```
         **/
        width(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  height?val 0
         *  ```
         **/
        height(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  left?val 0
         *  ```
         **/
        left(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  right?val 0
         *  ```
         **/
        right(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  bottom?val 0
         *  ```
         **/
        bottom(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  top?val 0
         *  ```
         **/
        top(val?: any, force?: $mol_mem_force): any;
    }
}

declare namespace $.$$ {
    class $mol_meter extends $.$mol_meter {
        rect(): {
            left: number;
            top: number;
            right: number;
            bottom: number;
            width: number;
            height: number;
            zoom: number;
        };
        top(): number;
        bottom(): number;
        left(): number;
        right(): number;
        width(): number;
        height(): number;
        zoom(): number;
    }
}

declare namespace $ {
    class $mol_touch extends $mol_plugin {
        /**
         *  ```
         *  start_zoom?val 0
         *  ```
         **/
        start_zoom(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  start_distance?val 0
         *  ```
         **/
        start_distance(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  zoom?val 1
         *  ```
         **/
        zoom(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  start_pan?val /
         *  	0
         *  	0
         *  ```
         **/
        start_pan(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  pan?val /
         *  	0
         *  	0
         *  ```
         **/
        pan(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  pos?val /
         *  	NaN
         *  	NaN
         *  ```
         **/
        pos(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  start_pos?val null
         *  ```
         **/
        start_pos(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  swipe_precision 16
         *  ```
         **/
        swipe_precision(): number;
        /**
         *  ```
         *  swipe_right?val null
         *  ```
         **/
        swipe_right(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  swipe_bottom?val null
         *  ```
         **/
        swipe_bottom(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  swipe_left?val null
         *  ```
         **/
        swipe_left(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  swipe_top?val null
         *  ```
         **/
        swipe_top(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  swipe_from_right?val null
         *  ```
         **/
        swipe_from_right(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  swipe_from_bottom?val null
         *  ```
         **/
        swipe_from_bottom(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  swipe_from_left?val null
         *  ```
         **/
        swipe_from_left(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  swipe_from_top?val null
         *  ```
         **/
        swipe_from_top(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  swipe_to_right?val null
         *  ```
         **/
        swipe_to_right(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  swipe_to_bottom?val null
         *  ```
         **/
        swipe_to_bottom(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  swipe_to_left?val null
         *  ```
         **/
        swipe_to_left(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  swipe_to_top?val null
         *  ```
         **/
        swipe_to_top(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  style *
         *  	^
         *  	touch-action \none
         *  ```
         **/
        style(): {
            "touch-action": string;
        };
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
        event(): {
            "touchstart": (event?: any) => any;
            "touchmove": (event?: any) => any;
            "touchend": (event?: any) => any;
            "mousedown": (event?: any) => any;
            "mousemove": (event?: any) => any;
            "mouseup": (event?: any) => any;
            "mouseleave": (event?: any) => any;
            "wheel": (event?: any) => any;
        };
        /**
         *  ```
         *  event_start?event null
         *  ```
         **/
        event_start(event?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  event_move?event null
         *  ```
         **/
        event_move(event?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  event_end?event null
         *  ```
         **/
        event_end(event?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  event_leave?event null
         *  ```
         **/
        event_leave(event?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  event_wheel?event null
         *  ```
         **/
        event_wheel(event?: any, force?: $mol_mem_force): any;
    }
}

declare namespace $.$$ {
    class $mol_touch extends $.$mol_touch {
        rect(): DOMRect;
        event_start(event: TouchEvent | MouseEvent): void;
        event_leave(event: TouchEvent | MouseEvent): void;
        event_move(event: TouchEvent | MouseEvent): void;
        swipe_left(event?: TouchEvent | MouseEvent): void;
        swipe_right(event?: TouchEvent | MouseEvent): void;
        swipe_top(event?: TouchEvent | MouseEvent): void;
        swipe_bottom(event?: TouchEvent | MouseEvent): void;
        event_end(event?: TouchEvent | MouseEvent): void;
        event_wheel(event: WheelEvent): void;
    }
}

declare namespace $ {
    function $mol_dom_render_events(el: Element, events: {
        [key: string]: (event: Event) => any;
    }): void;
    function $mol_dom_render_events_async(el: Element, events: {
        [key: string]: (event: Event) => any;
    }): void;
}

declare namespace $ {
    class $mol_ghost extends $mol_view {
        /**
         *  ```
         *  Sub $mol_view
         *  ```
         **/
        Sub(): $mol_view;
    }
}

declare namespace $.$$ {
    class $mol_ghost extends $.$mol_ghost {
        dom_node(): Element;
        dom_node_actual(): Element;
        dom_tree(): Element;
        title(): string;
    }
}

declare namespace $ {
    class $mol_book extends $mol_view {
        /**
         *  ```
         *  sub <= pages_wrapped
         *  ```
         **/
        sub(): readonly $mol_view[];
        /**
         *  ```
         *  pages_wrapped /$mol_view
         *  ```
         **/
        pages_wrapped(): readonly $mol_view[];
        /**
         *  ```
         *  minimal_width 0
         *  ```
         **/
        minimal_width(): number;
        /**
         *  ```
         *  pages /$mol_view
         *  ```
         **/
        pages(): readonly $mol_view[];
        /**
         *  ```
         *  plugins /$mol_plugin
         *  	<= Meter
         *  	<= Touch
         *  ```
         **/
        plugins(): readonly $mol_plugin[];
        width(): number;
        /**
         *  ```
         *  Meter $mol_meter width => width
         *  ```
         **/
        Meter(): $$.$mol_meter;
        /**
         *  ```
         *  Touch $mol_touch
         *  	swipe_from_left?val <=> event_front_up?val
         *  	swipe_to_left?val <=> event_front_down?val
         *  ```
         **/
        Touch(): $$.$mol_touch;
        /**
         *  ```
         *  event_front_up?val null
         *  ```
         **/
        event_front_up(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  event_front_down?val null
         *  ```
         **/
        event_front_down(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  Page!index $mol_book_page
         *  	Sub <= page!index
         *  	visible <= page_visible!index
         *  ```
         **/
        Page(index: any): $mol_book_page;
        /**
         *  ```
         *  page!index null
         *  ```
         **/
        page(index: any): any;
        /**
         *  ```
         *  page_visible!index true
         *  ```
         **/
        page_visible(index: any): boolean;
        /**
         *  ```
         *  Placeholder $mol_book_placeholder title <= title
         *  ```
         **/
        Placeholder(): $mol_book_placeholder;
    }
}
declare namespace $ {
    class $mol_book_placeholder extends $mol_view {
        /**
         *  ```
         *  minimal_width 400
         *  ```
         **/
        minimal_width(): number;
        /**
         *  ```
         *  attr *
         *  	^
         *  	tabindex null
         *  ```
         **/
        attr(): {
            "tabindex": any;
        };
    }
}
declare namespace $ {
    class $mol_book_page extends $mol_ghost {
        /**
         *  ```
         *  attr_static *
         *  	^
         *  	tabindex 0
         *  	mol_book_page_visible true
         *  ```
         **/
        attr_static(): {
            "tabindex": number;
            "mol_book_page_visible": boolean;
        };
        /**
         *  ```
         *  attr *
         *  	^
         *  	mol_book_page_focused <= focused
         *  	mol_book_page_visible <= visible
         *  ```
         **/
        attr(): {
            "mol_book_page_focused": boolean;
            "mol_book_page_visible": boolean;
        };
        /**
         *  ```
         *  visible true
         *  ```
         **/
        visible(): boolean;
    }
}

declare namespace $.$$ {
    class $mol_book extends $.$mol_book {
        pages_extended(): $mol_view[];
        break_point(): number;
        page(index: number): $mol_view;
        page_visible(index: number): boolean;
        pages_wrapped(): $mol_view[];
        title(): string;
        event_front_up(event?: Event): void;
        event_front_down(event?: Event): void;
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mpk_tss_icon_train extends $mol_icon {
        /**
         *  ```
         *  path \M12 2c-4 0-8 .5-8 4v9.5C4 17.43 5.57 19 7.5 19L6 20.5v.5h2.23l2-2H14l2 2h2v-.5L16.5 19c1.93 0 3.5-1.57 3.5-3.5V6c0-3.5-3.58-4-8-4zM7.5 17c-.83 0-1.5-.67-1.5-1.5S6.67 14 7.5 14s1.5.67 1.5 1.5S8.33 17 7.5 17zm3.5-7H6V6h5v4zm2 0V6h5v4h-5zm3.5 7c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z
         *  ```
         **/
        path(): string;
    }
}
declare namespace $ {
    class $mpk_tss_icon_exit_to_app extends $mol_icon {
        /**
         *  ```
         *  path \M10.09 15.59L11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5c-1.11 0-2 .9-2 2v4h2V5h14v14H5v-4H3v4c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z
         *  ```
         **/
        path(): string;
    }
}
declare namespace $ {
    class $mpk_tss_icon_autorenew extends $mol_icon {
        /**
         *  ```
         *  path \M12 6v3l4-4-4-4v3c-4.42 0-8 3.58-8 8 0 1.57.46 3.03 1.24 4.26L6.7 14.8c-.45-.83-.7-1.79-.7-2.8 0-3.31 2.69-6 6-6zm6.76 1.74L17.3 9.2c.44.84.7 1.79.7 2.8 0 3.31-2.69 6-6 6v-3l-4 4 4 4v-3c4.42 0 8-3.58 8-8 0-1.57-.46-3.03-1.24-4.26z
         *  ```
         **/
        path(): string;
    }
}
declare namespace $ {
    class $mpk_tss_icon_cloud_download extends $mol_icon {
        /**
         *  ```
         *  path \M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM17 13l-5 5-5-5h3V9h4v4h3
         *  ```
         **/
        path(): string;
    }
}
declare namespace $ {
    class $mpk_tss_icon_done extends $mol_icon {
        /**
         *  ```
         *  path \M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z
         *  ```
         **/
        path(): string;
    }
}
declare namespace $ {
    class $mpk_tss_icon_schedule extends $mol_icon {
        /**
         *  ```
         *  path \M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z
         *  ```
         **/
        path(): string;
    }
}
declare namespace $ {
    class $mpk_tss_icon_error extends $mol_icon {
        /**
         *  ```
         *  path \M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 36h-2v-2h2v2zm0-4h-2V7h2v6z
         *  ```
         **/
        path(): string;
    }
}
declare namespace $ {
    class $mpk_tss_icon_warning extends $mol_icon {
        /**
         *  ```
         *  path \M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z
         *  ```
         **/
        path(): string;
    }
}
declare namespace $ {
    class $mpk_tss_icon_sync extends $mol_icon {
        /**
         *  ```
         *  path \M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z
         *  ```
         **/
        path(): string;
    }
}
declare namespace $ {
    class $mpk_tss_icon_clear extends $mol_icon {
        /**
         *  ```
         *  path \M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z
         *  ```
         **/
        path(): string;
    }
}
declare namespace $ {
    class $mpk_tss_icon_block extends $mol_icon {
        /**
         *  ```
         *  path \M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM4 12c0-4.42 3.58-8 8-8 1.85 0 3.55.63 4.9 1.69L5.69 16.9C4.63 15.55 4 13.85 4 12zm8 8c-1.85 0-3.55-.63-4.9-1.69L18.31 7.1C19.37 8.45 20 10.15 20 12c0 4.42-3.58 8-8 8z
         *  ```
         **/
        path(): string;
    }
}
declare namespace $ {
    class $mpk_tss_icon_circle_outline extends $mol_icon {
        /**
         *  ```
         *  path \M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.88-11.71L10 14.17l-1.88-1.88c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41l2.59 2.59c.39.39 1.02.39 1.41 0L17.3 9.7c.39-.39.39-1.02 0-1.41-.39-.39-1.03-.39-1.42 0z
         *  ```
         **/
        path(): string;
    }
}
declare namespace $ {
    class $mpk_tss_icon_round_warning extends $mol_icon {
        /**
         *  ```
         *  path \M4.47 21h15.06c1.54 0 2.5-1.67 1.73-3L13.73 4.99c-.77-1.33-2.69-1.33-3.46 0L2.74 18c-.77 1.33.19 3 1.73 3zM12 14c-.55 0-1-.45-1-1v-2c0-.55.45-1 1-1s1 .45 1 1v2c0 .55-.45 1-1 1zm1 4h-2v-2h2v2z
         *  ```
         **/
        path(): string;
    }
}

declare namespace $ {
    /**
     * Exclude keys from `Input` which values extends `Upper`, but not extends `Lower`.
     *
     * 	type MathConstants = $mol_type_keys_exclude< Math , never , Function > // "E" | "PI" ...
     */
    type $mol_type_keys_exclude<Input, Lower, Upper> = Exclude<keyof Input, $mol_type_keys_extract<Input, Lower, Upper>>;
}

declare namespace $ {
    /**
     * Omit keys from `Input` which values extends `Upper`, but not `Lower`.
     *
     * 	type MathConstants = $mol_type_omit< Math , never , Function > // { E , PI , ... }
     */
    type $mol_type_omit<Input, Lower, Upper> = Pick<Input, $mol_type_keys_exclude<Input, Lower, Upper>>;
}

declare namespace $ {
    type $mol_style_pseudo_class = ':active' | ':any' | ':any-link' | ':checked' | ':default' | ':defined' | ':dir(rtl)' | ':dir(ltr)' | ':disabled' | ':empty' | ':enabled' | ':first' | ':first-child' | ':first-of-type' | ':fullscreen' | ':focus' | ':hover' | ':indeterminate' | ':in-range' | ':invalid' | ':last-child' | ':last-of-type' | ':left' | ':link' | ':not()' | ':nth-child(even)' | ':nth-child(odd)' | ':nth-last-child(even)' | ':nth-last-child(odd)' | ':nth-of-type(even)' | ':nth-of-type(odd)' | ':nth-last-of-type(even)' | ':nth-last-of-type(odd)' | ':only-child' | ':only-of-type' | ':optional' | ':out-of-range' | ':read-only' | ':read-write' | ':required' | ':right' | ':root' | ':scope' | ':target' | ':valid' | ':visited';
}

declare namespace $ {
    type $mol_style_pseudo_element = '::after' | '::before' | '::cue' | '::first-letter' | '::first-line' | '::selection' | '::slotted' | '::backdrop' | '::placeholder' | '::marker' | '::spelling-error' | '::grammar-error' | '::-webkit-calendar-picker-indicator' | '::-webkit-color-swatch' | '::-webkit-color-swatch-wrapper' | '::-webkit-details-marker' | '::-webkit-file-upload-button' | '::-webkit-image-inner-element' | '::-webkit-inner-spin-button' | '::-webkit-input-placeholder' | '::-webkit-input-speech-button' | '::-webkit-keygen-select' | '::-webkit-media-controls-panel' | '::-webkit-media-controls-timeline-container' | '::-webkit-media-slider-container' | '::-webkit-meter-bar' | '::-webkit-meter-even-less-good-value' | '::-webkit-meter-optimum-value' | '::-webkit-meter-suboptimal-value' | '::-webkit-progress-bar' | '::-webkit-progress-value' | '::-webkit-resizer' | '::-webkit-resizer:window-inactive' | '::-webkit-scrollbar' | '::-webkit-scrollbar-button' | '::-webkit-scrollbar-button:disabled' | '::-webkit-scrollbar-button:double-button:horizontal:end:decrement' | '::-webkit-scrollbar-button:double-button:horizontal:end:increment' | '::-webkit-scrollbar-button:double-button:horizontal:end:increment:corner-present' | '::-webkit-scrollbar-button:double-button:horizontal:start:decrement' | '::-webkit-scrollbar-button:double-button:horizontal:start:increment' | '::-webkit-scrollbar-button:double-button:vertical:end:decrement' | '::-webkit-scrollbar-button:double-button:vertical:end:increment' | '::-webkit-scrollbar-button:double-button:vertical:end:increment:corner-present' | '::-webkit-scrollbar-button:double-button:vertical:start:decrement' | '::-webkit-scrollbar-button:double-button:vertical:start:increment' | '::-webkit-scrollbar-button:end' | '::-webkit-scrollbar-button:end:decrement' | '::-webkit-scrollbar-button:end:increment' | '::-webkit-scrollbar-button:horizontal' | '::-webkit-scrollbar-button:horizontal:decrement' | '::-webkit-scrollbar-button:horizontal:decrement:active' | '::-webkit-scrollbar-button:horizontal:decrement:hover' | '::-webkit-scrollbar-button:horizontal:decrement:window-inactive' | '::-webkit-scrollbar-button:horizontal:end' | '::-webkit-scrollbar-button:horizontal:end:decrement' | '::-webkit-scrollbar-button:horizontal:end:increment' | '::-webkit-scrollbar-button:horizontal:end:increment:corner-present' | '::-webkit-scrollbar-button:horizontal:increment' | '::-webkit-scrollbar-button:horizontal:increment:active' | '::-webkit-scrollbar-button:horizontal:increment:hover' | '::-webkit-scrollbar-button:horizontal:increment:window-inactive' | '::-webkit-scrollbar-button:horizontal:start' | '::-webkit-scrollbar-button:horizontal:start:decrement' | '::-webkit-scrollbar-button:horizontal:start:increment' | '::-webkit-scrollbar-button:start' | '::-webkit-scrollbar-button:start:decrement' | '::-webkit-scrollbar-button:start:increment' | '::-webkit-scrollbar-button:vertical' | '::-webkit-scrollbar-button:vertical:decrement' | '::-webkit-scrollbar-button:vertical:decrement:active' | '::-webkit-scrollbar-button:vertical:decrement:hover' | '::-webkit-scrollbar-button:vertical:decrement:window-inactive' | '::-webkit-scrollbar-button:vertical:end' | '::-webkit-scrollbar-button:vertical:end:decrement' | '::-webkit-scrollbar-button:vertical:end:increment' | '::-webkit-scrollbar-button:vertical:end:increment:corner-present' | '::-webkit-scrollbar-button:vertical:increment' | '::-webkit-scrollbar-button:vertical:increment:active' | '::-webkit-scrollbar-button:vertical:increment:hover' | '::-webkit-scrollbar-button:vertical:increment:window-inactive' | '::-webkit-scrollbar-button:vertical:start' | '::-webkit-scrollbar-button:vertical:start:decrement' | '::-webkit-scrollbar-button:vertical:start:increment' | '::-webkit-scrollbar-corner' | '::-webkit-scrollbar-corner:window-inactive' | '::-webkit-scrollbar-thumb' | '::-webkit-scrollbar-thumb:horizontal' | '::-webkit-scrollbar-thumb:horizontal:active' | '::-webkit-scrollbar-thumb:horizontal:hover' | '::-webkit-scrollbar-thumb:horizontal:window-inactive' | '::-webkit-scrollbar-thumb:vertical' | '::-webkit-scrollbar-thumb:vertical:active' | '::-webkit-scrollbar-thumb:vertical:hover' | '::-webkit-scrollbar-thumb:vertical:window-inactive' | '::-webkit-scrollbar-track' | '::-webkit-scrollbar-track-piece' | '::-webkit-scrollbar-track-piece:disabled' | '::-webkit-scrollbar-track-piece:end' | '::-webkit-scrollbar-track-piece:horizontal:decrement' | '::-webkit-scrollbar-track-piece:horizontal:decrement:active' | '::-webkit-scrollbar-track-piece:horizontal:decrement:hover' | '::-webkit-scrollbar-track-piece:horizontal:end' | '::-webkit-scrollbar-track-piece:horizontal:end:corner-present' | '::-webkit-scrollbar-track-piece:horizontal:end:double-button' | '::-webkit-scrollbar-track-piece:horizontal:end:no-button' | '::-webkit-scrollbar-track-piece:horizontal:end:no-button:corner-present' | '::-webkit-scrollbar-track-piece:horizontal:end:single-button' | '::-webkit-scrollbar-track-piece:horizontal:increment' | '::-webkit-scrollbar-track-piece:horizontal:increment:active' | '::-webkit-scrollbar-track-piece:horizontal:increment:hover' | '::-webkit-scrollbar-track-piece:horizontal:start' | '::-webkit-scrollbar-track-piece:horizontal:start:double-button' | '::-webkit-scrollbar-track-piece:horizontal:start:no-button' | '::-webkit-scrollbar-track-piece:horizontal:start:single-button' | '::-webkit-scrollbar-track-piece:start' | '::-webkit-scrollbar-track-piece:vertical:decrement' | '::-webkit-scrollbar-track-piece:vertical:decrement:active' | '::-webkit-scrollbar-track-piece:vertical:decrement:hover' | '::-webkit-scrollbar-track-piece:vertical:end' | '::-webkit-scrollbar-track-piece:vertical:end:corner-present' | '::-webkit-scrollbar-track-piece:vertical:end:double-button' | '::-webkit-scrollbar-track-piece:vertical:end:no-button' | '::-webkit-scrollbar-track-piece:vertical:end:no-button:corner-present' | '::-webkit-scrollbar-track-piece:vertical:end:single-button' | '::-webkit-scrollbar-track-piece:vertical:increment' | '::-webkit-scrollbar-track-piece:vertical:increment:active' | '::-webkit-scrollbar-track-piece:vertical:increment:hover' | '::-webkit-scrollbar-track-piece:vertical:start' | '::-webkit-scrollbar-track-piece:vertical:start:double-button' | '::-webkit-scrollbar-track-piece:vertical:start:no-button' | '::-webkit-scrollbar-track-piece:vertical:start:single-button' | '::-webkit-scrollbar-track:disabled' | '::-webkit-scrollbar-track:horizontal' | '::-webkit-scrollbar-track:horizontal:disabled' | '::-webkit-scrollbar-track:horizontal:disabled:corner-present' | '::-webkit-scrollbar-track:vertical:disabled' | '::-webkit-scrollbar-track:vertical:disabled:corner-present' | '::-webkit-scrollbar:horizontal' | '::-webkit-scrollbar:horizontal:corner-present' | '::-webkit-scrollbar:horizontal:window-inactive' | '::-webkit-scrollbar:vertical' | '::-webkit-scrollbar:vertical:corner-present' | '::-webkit-scrollbar:vertical:window-inactive' | '::-webkit-search-cancel-button' | '::-webkit-search-decoration' | '::-webkit-search-results-button' | '::-webkit-search-results-decoration' | '::-webkit-slider-container' | '::-webkit-slider-runnable-track' | '::-webkit-slider-thumb' | '::-webkit-slider-thumb:disabled' | '::-webkit-slider-thumb:hover' | '::-webkit-textfield-decoration-container' | '::-webkit-validation-bubble' | '::-webkit-validation-bubble-arrow' | '::-webkit-validation-bubble-arrow-clipper' | '::-webkit-validation-bubble-heading' | '::-webkit-validation-bubble-message' | '::-webkit-validation-bubble-text-block';
}

declare namespace $ {
    type $mol_style_properties = CSSStyleDeclaration & {
        webkitOverflowScrolling: 'auto' | 'touch';
    };
}

declare namespace $ {
    type Elements<Obj extends $mol_view> = $mol_type_omit<{
        [key in keyof Obj]: Obj[key] extends (id?: any) => infer T ? (unknown extends T ? never : T extends $mol_view ? $mol_style_definition<T> : never) : never;
    }, unknown, never>;
    type Pseudos<Obj extends $mol_view> = {
        [key in $mol_style_pseudo_class | $mol_style_pseudo_element]: $mol_style_definition<Obj>;
    };
    type Kids<Obj extends $mol_view> = {
        '>': {
            [key in $mol_view_all]?: $mol_style_definition<Obj>;
        };
    };
    type Attrs<Obj extends $mol_view> = {
        '@': {
            [key in keyof ReturnType<Obj['attr']>]?: Record<string, $mol_style_definition<Obj>>;
        };
    };
    type Medias<Obj extends $mol_view> = {
        '@media': Record<string, $mol_style_definition<Obj>>;
    };
    type Views<Obj extends $mol_view> = {
        [key in $mol_view_all]: $mol_style_definition<Obj>;
    };
    export type $mol_style_definition<Obj extends $mol_view> = Partial<$mol_style_properties & Pseudos<Obj> & Attrs<Obj> & Medias<Obj> & Kids<Obj> & Elements<Obj> & Views<Obj>>;
    export {};
}

declare namespace $ {
    function $mol_style_sheet<Component extends $mol_view>(Component: new () => Component, config: $mol_style_definition<Component>): string;
}

declare namespace $ {
    function $mol_style_define<Component extends $mol_view>(Component: new () => Component, config: $mol_style_definition<Component>): HTMLStyleElement;
}

declare namespace $ {
    class $mol_link extends $mol_view {
        /**
         *  ```
         *  dom_name \a
         *  ```
         **/
        dom_name(): string;
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
        attr(): {
            "href": string;
            "title": string;
            "target": string;
            "download": string;
            "mol_link_current": boolean;
        };
        /**
         *  ```
         *  uri \
         *  ```
         **/
        uri(): string;
        /**
         *  ```
         *  hint \
         *  ```
         **/
        hint(): string;
        /**
         *  ```
         *  target \_self
         *  ```
         **/
        target(): string;
        /**
         *  ```
         *  file_name \
         *  ```
         **/
        file_name(): string;
        /**
         *  ```
         *  current false
         *  ```
         **/
        current(): boolean;
        /**
         *  ```
         *  sub /$mol_view_content <= title
         *  ```
         **/
        sub(): readonly (string | number | boolean | Node | $mol_view)[];
        /**
         *  ```
         *  arg *
         *  ```
         **/
        arg(): {};
        /**
         *  ```
         *  event *
         *  	^
         *  	click?event <=> click?event
         *  ```
         **/
        event(): {
            "click": (event?: any) => any;
        };
        /**
         *  ```
         *  click?event <=> event_click?event
         *  ```
         **/
        click(event?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  event_click?event null
         *  ```
         **/
        event_click(event?: any, force?: $mol_mem_force): any;
    }
}

declare namespace $.$$ {
    class $mol_link extends $.$mol_link {
        uri(): string;
        current(): boolean;
        event_click(event?: Event): void;
        file_name(): string;
        minimal_height(): number;
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mpk_tss_link extends $mol_link {
        /**
         *  ```
         *  copy_params /string
         *  ```
         **/
        copy_params(): readonly string[];
    }
}

declare namespace $.$$ {
    class $mpk_tss_link extends $.$mpk_tss_link {
        uri(): string;
    }
}

declare namespace $ {
    class $mol_state_session<Value> extends $mol_object {
        static 'native()': Pick<Storage, 'getItem' | 'setItem' | 'removeItem'>;
        static native(): Storage | {
            getItem(key: string): any;
            setItem(key: string, value: string): void;
            removeItem(key: string): void;
        };
        static value<Value>(key: string, next?: Value): Value;
        prefix(): string;
        value(key: string, next?: Value): Value;
    }
}

declare namespace $ {
    class $mol_scroll extends $mol_view {
        /**
         *  ```
         *  minimal_height 0
         *  ```
         **/
        minimal_height(): number;
        /**
         *  ```
         *  _event_scroll_timer?val null
         *  ```
         **/
        _event_scroll_timer(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  field *
         *  	^
         *  	scrollTop <= scroll_top?val
         *  	scrollLeft <= scroll_left?val
         *  ```
         **/
        field(): {
            "scrollTop": any;
            "scrollLeft": any;
        };
        /**
         *  ```
         *  scroll_top?val 0
         *  ```
         **/
        scroll_top(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  scroll_left?val 0
         *  ```
         **/
        scroll_left(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  event *
         *  	^
         *  	scroll?event <=> event_scroll?event
         *  ```
         **/
        event(): {
            "scroll": (event?: any) => any;
        };
        /**
         *  ```
         *  event_scroll?event null
         *  ```
         **/
        event_scroll(event?: any, force?: $mol_mem_force): any;
    }
}

declare namespace $.$$ {
    class $mol_scroll extends $.$mol_scroll {
        scroll_top(next?: number): number;
        scroll_left(next?: number): number;
        _event_scroll_timer(next?: $mol_after_frame | null): $mol_after_frame;
        event_scroll(next?: Event): void;
    }
}

declare namespace $.$$ {
}

declare namespace $ {
    class $mol_page extends $mol_view {
        /**
         *  ```
         *  sub /
         *  	<= Head
         *  	<= Body
         *  	<= Foot
         *  ```
         **/
        sub(): readonly any[];
        /**
         *  ```
         *  Head $mol_view
         *  	attr * mol_theme \$mol_theme_base
         *  	sub <= head
         *  ```
         **/
        Head(): $mol_view;
        /**
         *  ```
         *  head /
         *  	<= Title
         *  	<= Tools
         *  ```
         **/
        head(): readonly any[];
        /**
         *  ```
         *  Title $mol_button
         *  	sub / <= title
         *  	event_click?val <=> event_top?val
         *  ```
         **/
        Title(): $$.$mol_button;
        /**
         *  ```
         *  event_top?val null
         *  ```
         **/
        event_top(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  Tools $mol_view sub <= tools
         *  ```
         **/
        Tools(): $mol_view;
        /**
         *  ```
         *  tools /$mol_view_content
         *  ```
         **/
        tools(): readonly (string | number | boolean | Node | $mol_view)[];
        /**
         *  ```
         *  Body $mol_scroll
         *  	scroll_top?val <=> body_scroll_top?val
         *  	sub <= body
         *  ```
         **/
        Body(): $$.$mol_scroll;
        /**
         *  ```
         *  body_scroll_top?val 0
         *  ```
         **/
        body_scroll_top(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  body /$mol_view_content
         *  ```
         **/
        body(): readonly (string | number | boolean | Node | $mol_view)[];
        /**
         *  ```
         *  Foot $mol_view
         *  	attr * mol_theme \$mol_theme_base
         *  	sub <= foot
         *  ```
         **/
        Foot(): $mol_view;
        /**
         *  ```
         *  foot /$mol_view
         *  ```
         **/
        foot(): readonly $mol_view[];
    }
}

declare namespace $.$$ {
    class $mol_page extends $.$mol_page {
        body_scroll_top(next?: number): number;
        style(): {
            minWidth: number;
        };
    }
}

declare namespace $.$$ {
}

declare namespace $ {
}

declare namespace $ {
    class $mol_filler extends $mol_view {
        /**
         *  ```
         *  minimal_height 500
         *  ```
         **/
        minimal_height(): number;
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
        sub(): readonly any[];
    }
}

declare namespace $ {
    class $mpk_tss_software extends $mol_page {
        /**
         *  ```
         *  title @ \Software
         *  ```
         **/
        title(): string;
        /**
         *  ```
         *  body / <= Content
         *  ```
         **/
        body(): readonly any[];
        /**
         *  ```
         *  Content $mol_filler
         *  ```
         **/
        Content(): $mol_filler;
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_bar extends $mol_view {
    }
}

declare namespace $ {
    function $mol_match_text<Variant>(query: string, values: (variant: Variant) => string[]): (variant: Variant) => boolean;
}

declare namespace $ {
    class $mol_pop extends $mol_view {
        /**
         *  ```
         *  event * keydown?event <=> keydown?event
         *  ```
         **/
        event(): {
            "keydown": (event?: any) => any;
        };
        /**
         *  ```
         *  keydown?event null
         *  ```
         **/
        keydown(event?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  showed?val false
         *  ```
         **/
        showed(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  plugins /$mol_plugin <= Meter
         *  ```
         **/
        plugins(): readonly $mol_plugin[];
        top(): number;
        bottom(): number;
        left(): number;
        right(): number;
        /**
         *  ```
         *  Meter $mol_meter
         *  	top => top
         *  	bottom => bottom
         *  	left => left
         *  	right => right
         *  ```
         **/
        Meter(): $$.$mol_meter;
        /**
         *  ```
         *  sub /
         *  	<= Anchor
         *  	<= Bubble
         *  ```
         **/
        sub(): readonly any[];
        /**
         *  ```
         *  Anchor null
         *  ```
         **/
        Anchor(): any;
        /**
         *  ```
         *  Bubble $mol_pop_bubble
         *  	align <= align
         *  	content <= bubble_content
         *  	height_max <= height_max
         *  ```
         **/
        Bubble(): $mol_pop_bubble;
        /**
         *  ```
         *  align \bottom_center
         *  ```
         **/
        align(): string;
        /**
         *  ```
         *  bubble_content /$mol_view_content
         *  ```
         **/
        bubble_content(): readonly (string | number | boolean | Node | $mol_view)[];
        /**
         *  ```
         *  height_max 9999
         *  ```
         **/
        height_max(): number;
    }
}
declare namespace $ {
    class $mol_pop_bubble extends $mol_scroll {
        /**
         *  ```
         *  sub <= content
         *  ```
         **/
        sub(): readonly (string | number | boolean | Node | $mol_view)[];
        /**
         *  ```
         *  content /$mol_view_content
         *  ```
         **/
        content(): readonly (string | number | boolean | Node | $mol_view)[];
        /**
         *  ```
         *  style *
         *  	^
         *  	maxHeight <= height_max
         *  ```
         **/
        style(): {
            "maxHeight": number;
        };
        /**
         *  ```
         *  height_max 9999
         *  ```
         **/
        height_max(): number;
        /**
         *  ```
         *  attr *
         *  	^
         *  	mol_pop_align <= align
         *  	tabindex 0
         *  ```
         **/
        attr(): {
            "mol_pop_align": string;
            "tabindex": number;
        };
        /**
         *  ```
         *  align \
         *  ```
         **/
        align(): string;
    }
}

declare namespace $.$$ {
    class $mol_pop extends $.$mol_pop {
        sub(): any[];
        height_max(): number;
        align(): string;
        keydown(event: KeyboardEvent): void;
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_dimmer extends $mol_view {
        /**
         *  ```
         *  haystack \
         *  ```
         **/
        haystack(): string;
        /**
         *  ```
         *  needle \
         *  ```
         **/
        needle(): string;
        /**
         *  ```
         *  sub <= parts
         *  ```
         **/
        sub(): readonly (string | number | boolean | Node | $mol_view)[];
        /**
         *  ```
         *  parts /$mol_view_content
         *  ```
         **/
        parts(): readonly (string | number | boolean | Node | $mol_view)[];
        /**
         *  ```
         *  Low!id $mol_view sub / <= string!id
         *  ```
         **/
        Low(id: any): $mol_view;
        /**
         *  ```
         *  string!id \
         *  ```
         **/
        string(id: any): string;
    }
}

declare namespace $.$$ {
    class $mol_dimmer extends $.$mol_dimmer {
        parts(): any[];
        strings(): string[];
        string(index: number): string;
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_nav extends $mol_plugin {
        /**
         *  ```
         *  cycle?val false
         *  ```
         **/
        cycle(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  mod_ctrl false
         *  ```
         **/
        mod_ctrl(): boolean;
        /**
         *  ```
         *  mod_shift false
         *  ```
         **/
        mod_shift(): boolean;
        /**
         *  ```
         *  mod_alt false
         *  ```
         **/
        mod_alt(): boolean;
        /**
         *  ```
         *  keys_x?val /
         *  ```
         **/
        keys_x(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  keys_y?val /
         *  ```
         **/
        keys_y(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  current_x?val \
         *  ```
         **/
        current_x(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  current_y?val \
         *  ```
         **/
        current_y(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  event_up?event null
         *  ```
         **/
        event_up(event?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  event_down?event null
         *  ```
         **/
        event_down(event?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  event_left?event null
         *  ```
         **/
        event_left(event?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  event_right?event null
         *  ```
         **/
        event_right(event?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  event *
         *  	^
         *  	keydown?event <=> event_key?event
         *  ```
         **/
        event(): {
            "keydown": (event?: any) => any;
        };
        /**
         *  ```
         *  event_key?event null
         *  ```
         **/
        event_key(event?: any, force?: $mol_mem_force): any;
    }
}

declare namespace $.$$ {
    class $mol_nav extends $.$mol_nav {
        event_key(event?: KeyboardEvent): void;
        event_up(event?: KeyboardEvent): void;
        event_down(event?: KeyboardEvent): void;
        event_left(event: KeyboardEvent): void;
        event_right(event: KeyboardEvent): void;
        index_y(): any;
        index_x(): any;
    }
}

declare namespace $ {
    class $mol_list extends $mol_view {
        /**
         *  ```
         *  render_visible_only true
         *  ```
         **/
        render_visible_only(): boolean;
        /**
         *  ```
         *  render_over 0
         *  ```
         **/
        render_over(): number;
        /**
         *  ```
         *  sub <= rows
         *  ```
         **/
        sub(): readonly $mol_view[];
        /**
         *  ```
         *  rows /$mol_view
         *  ```
         **/
        rows(): readonly $mol_view[];
        /**
         *  ```
         *  Empty $mol_view
         *  ```
         **/
        Empty(): $mol_view;
        /**
         *  ```
         *  Gap_before $mol_view style * paddingTop <= gap_before
         *  ```
         **/
        Gap_before(): $mol_view;
        /**
         *  ```
         *  gap_before 0
         *  ```
         **/
        gap_before(): number;
        /**
         *  ```
         *  Gap_after $mol_view style * paddingTop <= gap_after
         *  ```
         **/
        Gap_after(): $mol_view;
        /**
         *  ```
         *  gap_after 0
         *  ```
         **/
        gap_after(): number;
        /**
         *  ```
         *  view_window /
         *  	0
         *  	0
         *  ```
         **/
        view_window(): readonly any[];
    }
}

declare namespace $.$$ {
    class $mol_list extends $.$mol_list {
        sub(): readonly $mol_view[];
        render_visible_only(): boolean;
        view_window(): [number, number];
        gap_before(): number;
        gap_after(): number;
        sub_visible(): $mol_view[];
        minimal_height(): number;
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_icon_chevron extends $mol_icon {
        /**
         *  ```
         *  path \M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z
         *  ```
         **/
        path(): string;
    }
}

declare namespace $ {
    class $mol_select extends $mol_pop {
        /**
         *  ```
         *  dictionary *
         *  ```
         **/
        dictionary(): {};
        /**
         *  ```
         *  options /string
         *  ```
         **/
        options(): readonly string[];
        /**
         *  ```
         *  value?val \
         *  ```
         **/
        value(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  minimal_height 40
         *  ```
         **/
        minimal_height(): number;
        /**
         *  ```
         *  Option_row!id $mol_button_minor
         *  	event_click?event <=> event_select!id?event
         *  	sub <= option_content!id
         *  ```
         **/
        Option_row(id: any): $mol_button_minor;
        /**
         *  ```
         *  event_select!id?event null
         *  ```
         **/
        event_select(id: any, event?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  option_content!id / <= Option_label!id
         *  ```
         **/
        option_content(id: any): readonly any[];
        /**
         *  ```
         *  Option_label!id $mol_dimmer
         *  	minimal_height 40
         *  	haystack <= option_label!id
         *  	needle <= filter_pattern?val
         *  ```
         **/
        Option_label(id: any): $$.$mol_dimmer;
        /**
         *  ```
         *  option_label!id \
         *  ```
         **/
        option_label(id: any): string;
        /**
         *  ```
         *  filter_pattern?val \
         *  ```
         **/
        filter_pattern(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  No_options $mol_view sub / <= no_options_message
         *  ```
         **/
        No_options(): $mol_view;
        /**
         *  ```
         *  no_options_message @ \No options
         *  ```
         **/
        no_options_message(): string;
        /**
         *  ```
         *  plugins /
         *  	^
         *  	<= Nav
         *  ```
         **/
        plugins(): readonly any[];
        /**
         *  ```
         *  Nav $mol_nav
         *  	keys_y <= nav_components
         *  	current_y?component <=> option_focused?component
         *  	cycle?val <=> nav_cycle?val
         *  ```
         **/
        Nav(): $$.$mol_nav;
        /**
         *  ```
         *  nav_components /$mol_view
         *  ```
         **/
        nav_components(): readonly $mol_view[];
        /**
         *  ```
         *  option_focused?component null
         *  ```
         **/
        option_focused(component?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  nav_cycle?val true
         *  ```
         **/
        nav_cycle(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  showed?val <=> options_showed?val
         *  ```
         **/
        showed(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  options_showed?val false
         *  ```
         **/
        options_showed(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  Anchor <= Trigger
         *  ```
         **/
        Anchor(): $mol_button_minor;
        /**
         *  ```
         *  Trigger $mol_button_minor
         *  	click?event <=> open?event
         *  	sub <= trigger_content
         *  ```
         **/
        Trigger(): $mol_button_minor;
        /**
         *  ```
         *  open?event null
         *  ```
         **/
        open(event?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  trigger_content /$mol_view_content
         *  ```
         **/
        trigger_content(): readonly (string | number | boolean | Node | $mol_view)[];
        /**
         *  ```
         *  bubble_content / <= Menu
         *  ```
         **/
        bubble_content(): readonly any[];
        /**
         *  ```
         *  Menu $mol_list rows <= menu_content
         *  ```
         **/
        Menu(): $$.$mol_list;
        /**
         *  ```
         *  menu_content /$mol_view
         *  ```
         **/
        menu_content(): readonly $mol_view[];
        /**
         *  ```
         *  option_content_current /$mol_view_content
         *  ```
         **/
        option_content_current(): readonly (string | number | boolean | Node | $mol_view)[];
        /**
         *  ```
         *  Filter $mol_string
         *  	value?val <=> filter_pattern?val
         *  	hint <= filter_hint
         *  	debounce <= debounce
         *  ```
         **/
        Filter(): $$.$mol_string;
        /**
         *  ```
         *  filter_hint <= hint
         *  ```
         **/
        filter_hint(): string;
        /**
         *  ```
         *  hint @ \Search..
         *  ```
         **/
        hint(): string;
        /**
         *  ```
         *  debounce 200
         *  ```
         **/
        debounce(): number;
        /**
         *  ```
         *  Trigger_icon $mol_icon_chevron
         *  ```
         **/
        Trigger_icon(): $mol_icon_chevron;
    }
}

declare namespace $.$$ {
    class $mol_select extends $.$mol_select {
        filter_pattern(next?: string): string;
        open(): void;
        options_showed(next?: boolean): boolean;
        options(): readonly string[];
        options_filtered(): readonly string[];
        option_label(id: string): any;
        option_rows(): $mol_view[];
        option_focused(component?: $mol_view): $mol_view;
        event_select(id: string, event?: MouseEvent): void;
        nav_components(): $mol_view[];
        option_content_current(): readonly any[];
        trigger_content(): any[];
        menu_content(): $mol_view[];
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_icon_cross extends $mol_icon {
        /**
         *  ```
         *  path \M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z
         *  ```
         **/
        path(): string;
    }
}

declare namespace $ {
    class $mol_search extends $mol_bar {
        /**
         *  ```
         *  query?val \
         *  ```
         **/
        query(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  sub /
         *  	<= Suggest
         *  	<= Clear
         *  ```
         **/
        sub(): readonly any[];
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
        Suggest(): $$.$mol_select;
        /**
         *  ```
         *  suggest_selected?val \
         *  ```
         **/
        suggest_selected(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  hint @ \Search...
         *  ```
         **/
        hint(): string;
        /**
         *  ```
         *  suggests_showed false
         *  ```
         **/
        suggests_showed(): boolean;
        /**
         *  ```
         *  suggests /string
         *  ```
         **/
        suggests(): readonly string[];
        /**
         *  ```
         *  debounce 200
         *  ```
         **/
        debounce(): number;
        /**
         *  ```
         *  Clear $mol_button_minor
         *  	sub / <= Clear_icon
         *  	event_click?val <=> event_clear?val
         *  ```
         **/
        Clear(): $mol_button_minor;
        /**
         *  ```
         *  Clear_icon $mol_icon_cross
         *  ```
         **/
        Clear_icon(): $mol_icon_cross;
        /**
         *  ```
         *  event_clear?val null
         *  ```
         **/
        event_clear(val?: any, force?: $mol_mem_force): any;
    }
}

declare namespace $.$$ {
    class $mol_search extends $.$mol_search {
        suggests_showed(): boolean;
        suggest_selected(next?: string): void;
        sub(): ($mol_select | $mol_button_minor)[];
        event_clear(event?: Event): void;
    }
}

declare namespace $ {
}

declare namespace $ {
}

declare namespace $ {
    class $mpk_tss_pereferial_page extends $mol_page {
        /**
         *  ```
         *  unit_current_id?v \
         *  ```
         **/
        unit_current_id(v?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  sub /
         *  	<= Head
         *  	<= Filter_value
         *  	<= Body
         *  ```
         **/
        sub(): readonly any[];
        /**
         *  ```
         *  Filter_value $mol_search
         *  	hint <= filter_hint
         *  	query?val <=> filter_value?val
         *  ```
         **/
        Filter_value(): $$.$mol_search;
        /**
         *  ```
         *  filter_hint @ \Unit name or type
         *  ```
         **/
        filter_hint(): string;
        /**
         *  ```
         *  filter_value?val \
         *  ```
         **/
        filter_value(val?: any, force?: $mol_mem_force): any;
    }
}

declare namespace $.$$ {
    class $mpk_tss_pereferial_page extends $.$mpk_tss_pereferial_page {
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mpk_tss_pereferial_status extends $mol_view {
        /**
         *  ```
         *  status null
         *  ```
         **/
        status(): any;
        /**
         *  ```
         *  colors true
         *  ```
         **/
        colors(): boolean;
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
        statuses(): {
            "ready": string;
            "error": string;
            "not_responding": string;
            "inactive": string;
            "unknown": string;
        };
        /**
         *  ```
         *  ready @ \Ready
         *  ```
         **/
        ready(): string;
        /**
         *  ```
         *  error @ \Error
         *  ```
         **/
        error(): string;
        /**
         *  ```
         *  not_responding @ \Not responding
         *  ```
         **/
        not_responding(): string;
        /**
         *  ```
         *  inactive @ \Inactive
         *  ```
         **/
        inactive(): string;
        /**
         *  ```
         *  unknown @ \Unknown
         *  ```
         **/
        unknown(): string;
        /**
         *  ```
         *  sub / <= status_text
         *  ```
         **/
        sub(): readonly any[];
        /**
         *  ```
         *  status_text <= unknown
         *  ```
         **/
        status_text(): string;
    }
}

declare namespace $.$$ {
    class $mpk_tss_pereferial_status extends $.$mpk_tss_pereferial_status {
        status_text(): any;
        attr(): {
            [key: string]: string | number | boolean;
        } | {
            'mpk_tss_pereferial_status_type': any;
        };
    }
}

declare namespace $ {
    class $mpk_tss_pereferial_source extends $mol_view {
        /**
         *  ```
         *  status null
         *  ```
         **/
        status(): any;
        /**
         *  ```
         *  statuses *
         *  	linein <= linein
         *  	internal <= internal
         *  ```
         **/
        statuses(): {
            "linein": string;
            "internal": string;
        };
        /**
         *  ```
         *  linein @ \Linein
         *  ```
         **/
        linein(): string;
        /**
         *  ```
         *  internal @ \Internal
         *  ```
         **/
        internal(): string;
        /**
         *  ```
         *  sub / <= status_text
         *  ```
         **/
        sub(): readonly any[];
        /**
         *  ```
         *  status_text \
         *  ```
         **/
        status_text(): string;
    }
}

declare namespace $.$$ {
    class $mpk_tss_pereferial_source extends $.$mpk_tss_pereferial_source {
        status_text(): any;
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mpk_tss_parameter_unknown extends $mol_view {
        /**
         *  ```
         *  sub / <= title
         *  ```
         **/
        sub(): readonly any[];
        /**
         *  ```
         *  title @ \Unknown
         *  ```
         **/
        title(): string;
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_row extends $mol_view {
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_labeler extends $mol_list {
        /**
         *  ```
         *  rows /
         *  	<= Title
         *  	<= Content
         *  ```
         **/
        rows(): readonly any[];
        /**
         *  ```
         *  Title $mol_view
         *  	minimal_height 21
         *  	sub <= label
         *  ```
         **/
        Title(): $mol_view;
        /**
         *  ```
         *  label /$mol_view_content <= title
         *  ```
         **/
        label(): readonly (string | number | boolean | Node | $mol_view)[];
        /**
         *  ```
         *  Content $mol_view
         *  	minimal_height 24
         *  	sub <= content
         *  ```
         **/
        Content(): $mol_view;
        /**
         *  ```
         *  content /
         *  ```
         **/
        content(): readonly any[];
    }
}

declare namespace $ {
    class $mpk_tss_parameter_date extends $mol_view {
        /**
         *  ```
         *  date null
         *  ```
         **/
        date(): any;
        /**
         *  ```
         *  sub / <= date_formatted
         *  ```
         **/
        sub(): readonly any[];
        /**
         *  ```
         *  date_formatted null
         *  ```
         **/
        date_formatted(): any;
    }
}

declare namespace $.$$ {
    class $mpk_tss_parameter_date extends $.$mpk_tss_parameter_date {
        date(): $mol_time_moment;
        date_formatted(): string;
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mpk_tss_parameter extends $mol_row {
        /**
         *  ```
         *  Unknown_value $mpk_tss_parameter_unknown
         *  ```
         **/
        Unknown_value(): $mpk_tss_parameter_unknown;
        /**
         *  ```
         *  Unknown_updated $mpk_tss_parameter_unknown
         *  ```
         **/
        Unknown_updated(): $mpk_tss_parameter_unknown;
        /**
         *  ```
         *  value null
         *  ```
         **/
        value(): any;
        /**
         *  ```
         *  updated null
         *  ```
         **/
        updated(): any;
        /**
         *  ```
         *  sub /
         *  	<= Name
         *  	<= Value
         *  	<= Updated
         *  ```
         **/
        sub(): readonly any[];
        /**
         *  ```
         *  Name $mol_labeler
         *  	title <= name_title
         *  	Content <= Name_content
         *  ```
         **/
        Name(): $mol_labeler;
        /**
         *  ```
         *  name_title @ \Parameter
         *  ```
         **/
        name_title(): string;
        /**
         *  ```
         *  Name_content $mol_view sub / <= name
         *  ```
         **/
        Name_content(): $mol_view;
        /**
         *  ```
         *  name \
         *  ```
         **/
        name(): string;
        /**
         *  ```
         *  Value $mol_labeler
         *  	title <= value_title
         *  	Content <= Value_content
         *  ```
         **/
        Value(): $mol_labeler;
        /**
         *  ```
         *  value_title @ \Value
         *  ```
         **/
        value_title(): string;
        /**
         *  ```
         *  Value_content null
         *  ```
         **/
        Value_content(): any;
        /**
         *  ```
         *  Updated $mol_labeler
         *  	title <= updated_title
         *  	Content <= Updated_value
         *  ```
         **/
        Updated(): $mol_labeler;
        /**
         *  ```
         *  updated_title @ \Updated
         *  ```
         **/
        updated_title(): string;
        /**
         *  ```
         *  Updated_value null
         *  ```
         **/
        Updated_value(): any;
        /**
         *  ```
         *  Date $mpk_tss_parameter_date date <= updated
         *  ```
         **/
        Date(): $$.$mpk_tss_parameter_date;
    }
}

declare namespace $.$$ {
    class $mpk_tss_parameter extends $.$mpk_tss_parameter {
        Value_content(): any;
        Updated_value(): $mpk_tss_parameter_date | $mpk_tss_parameter_unknown;
    }
}

declare namespace $ {
    class $mpk_tss_parameter_voltage extends $mol_view {
        /**
         *  ```
         *  sub /
         *  	<= value
         *  	<= spacer
         *  	<= unit
         *  ```
         **/
        sub(): readonly any[];
        /**
         *  ```
         *  value 0
         *  ```
         **/
        value(): number;
        /**
         *  ```
         *  spacer \
         *  ```
         **/
        spacer(): string;
        /**
         *  ```
         *  unit @ \V
         *  ```
         **/
        unit(): string;
    }
}

declare namespace $ {
    class $mpk_tss_parameter_duration extends $mol_view {
        /**
         *  ```
         *  minutes @ \min
         *  ```
         **/
        minutes(): string;
        /**
         *  ```
         *  value null
         *  ```
         **/
        value(): any;
        /**
         *  ```
         *  sub / <= formatted_value
         *  ```
         **/
        sub(): readonly any[];
        /**
         *  ```
         *  formatted_value \
         *  ```
         **/
        formatted_value(): string;
    }
}

declare namespace $.$$ {
    class $mpk_tss_parameter_duration extends $.$mpk_tss_parameter_duration {
        value(): $mol_time_duration;
        formatted_value(): string;
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mpk_tss_parameter_list extends $mol_list {
    }
}

declare namespace $ {
    class $mpk_tss_pereferial_ups extends $mpk_tss_parameter_list {
        /**
         *  ```
         *  unit null
         *  ```
         **/
        unit(): any;
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
        rows(): readonly any[];
        /**
         *  ```
         *  Status $mpk_tss_parameter
         *  	name <= status_title
         *  	value <= status
         *  	updated <= updated
         *  ```
         **/
        Status(): $$.$mpk_tss_parameter;
        /**
         *  ```
         *  status_title @ \State
         *  ```
         **/
        status_title(): string;
        /**
         *  ```
         *  status null
         *  ```
         **/
        status(): any;
        /**
         *  ```
         *  updated null
         *  ```
         **/
        updated(): any;
        /**
         *  ```
         *  Power $mpk_tss_parameter
         *  	name <= power_title
         *  	value <= power_source
         *  	updated <= updated
         *  ```
         **/
        Power(): $$.$mpk_tss_parameter;
        /**
         *  ```
         *  power_title @ \Power source
         *  ```
         **/
        power_title(): string;
        /**
         *  ```
         *  power_source null
         *  ```
         **/
        power_source(): any;
        /**
         *  ```
         *  Voltage $mpk_tss_parameter
         *  	name <= voltage_title
         *  	value <= voltage
         *  	updated <= updated
         *  ```
         **/
        Voltage(): $$.$mpk_tss_parameter;
        /**
         *  ```
         *  voltage_title @ \Voltage
         *  ```
         **/
        voltage_title(): string;
        /**
         *  ```
         *  voltage null
         *  ```
         **/
        voltage(): any;
        /**
         *  ```
         *  Bat_level $mpk_tss_parameter
         *  	name <= bat_level_title
         *  	value <= battery_level
         *  	updated <= updated
         *  ```
         **/
        Bat_level(): $$.$mpk_tss_parameter;
        /**
         *  ```
         *  bat_level_title @ \Bat. level
         *  ```
         **/
        bat_level_title(): string;
        /**
         *  ```
         *  battery_level null
         *  ```
         **/
        battery_level(): any;
        /**
         *  ```
         *  Bat_time $mpk_tss_parameter
         *  	name <= bat_time_title
         *  	value <= battery_time
         *  	updated <= updated
         *  ```
         **/
        Bat_time(): $$.$mpk_tss_parameter;
        /**
         *  ```
         *  bat_time_title @ \Bat. time
         *  ```
         **/
        bat_time_title(): string;
        /**
         *  ```
         *  battery_time null
         *  ```
         **/
        battery_time(): any;
    }
}

declare namespace $.$$ {
    class $mpk_tss_pereferial_ups extends $.$mpk_tss_pereferial_ups {
        unit(): $mpk_tss_pereferial_domain_ups;
        updated(): $mol_time_moment;
        status(): $mpk_tss_pereferial_status;
        power_source(): $mpk_tss_pereferial_source;
        voltage(): $mpk_tss_parameter_voltage;
        battery_level(): string;
        battery_time(): $mpk_tss_parameter_duration;
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mpk_tss_pereferial_details extends $mol_page {
        /**
         *  ```
         *  unit null
         *  ```
         **/
        unit(): any;
        /**
         *  ```
         *  minimal_width 400
         *  ```
         **/
        minimal_width(): number;
        /**
         *  ```
         *  tools / <= Details_close
         *  ```
         **/
        tools(): readonly any[];
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
        Details_close(): $$.$mpk_tss_link;
        /**
         *  ```
         *  Details_close_icon $mol_icon_cross
         *  ```
         **/
        Details_close_icon(): $mol_icon_cross;
        /**
         *  ```
         *  body / <= unit_details
         *  ```
         **/
        body(): readonly any[];
        /**
         *  ```
         *  unit_details null
         *  ```
         **/
        unit_details(): any;
        /**
         *  ```
         *  Ups $mpk_tss_pereferial_ups unit <= unit
         *  ```
         **/
        Ups(): $$.$mpk_tss_pereferial_ups;
    }
}

declare namespace $.$$ {
    class $mpk_tss_pereferial_details extends $.$mpk_tss_pereferial_details {
        unit(): $mpk_tss_pereferial_domain_unit;
        title(): string;
        type(): $mpk_tss_pereferial_domain_type;
        name(): string;
        unit_details(): $mpk_tss_pereferial_ups;
    }
}

declare namespace $ {
    class $mol_card extends $mol_list {
        /**
         *  ```
         *  attr *
         *  	^
         *  	mol_card_status_type <= status
         *  ```
         **/
        attr(): {
            "mol_card_status_type": string;
        };
        /**
         *  ```
         *  status \
         *  ```
         **/
        status(): string;
        /**
         *  ```
         *  rows /$mol_view
         *  	<= Content
         *  	<= Status
         *  ```
         **/
        rows(): readonly $mol_view[];
        /**
         *  ```
         *  Content $mol_view sub <= content
         *  ```
         **/
        Content(): $mol_view;
        /**
         *  ```
         *  content /$mol_view_content
         *  ```
         **/
        content(): readonly (string | number | boolean | Node | $mol_view)[];
        /**
         *  ```
         *  Status $mol_view
         *  	minimal_height 30
         *  	sub / <= status_text
         *  ```
         **/
        Status(): $mol_view;
        /**
         *  ```
         *  status_text <= status
         *  ```
         **/
        status_text(): string;
    }
}

declare namespace $.$$ {
    class $mol_card extends $.$mol_card {
        rows(): $mol_view[];
    }
}

declare namespace $ {
}

declare namespace $ {
}

declare namespace $ {
    class $mpk_tss_card extends $mpk_tss_link {
        /**
         *  ```
         *  minimal_height 200
         *  ```
         **/
        minimal_height(): number;
        /**
         *  ```
         *  sub / <= Card
         *  ```
         **/
        sub(): readonly any[];
        /**
         *  ```
         *  Card $mol_card
         *  	status <= status
         *  	Status <= Status
         *  	Content <= Content
         *  ```
         **/
        Card(): $$.$mol_card;
        /**
         *  ```
         *  status \
         *  ```
         **/
        status(): string;
        /**
         *  ```
         *  Status $mol_view sub /
         *  	<= Status_text
         *  	<= Tools
         *  ```
         **/
        Status(): $mol_view;
        /**
         *  ```
         *  Status_text null
         *  ```
         **/
        Status_text(): any;
        /**
         *  ```
         *  Tools $mol_view sub
         *  	<= tools
         *  	<= Status_action
         *  ```
         **/
        Tools(): $mol_view;
        /**
         *  ```
         *  tools /
         *  ```
         **/
        tools(): readonly any[];
        /**
         *  ```
         *  Status_action $mol_button_minor
         *  	event_click?event <=> status_click?event
         *  	sub / <= Status_icon
         *  ```
         **/
        Status_action(): $mol_button_minor;
        /**
         *  ```
         *  status_click?event null
         *  ```
         **/
        status_click(event?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  Status_icon $mpk_tss_icon_cloud_download
         *  ```
         **/
        Status_icon(): $mpk_tss_icon_cloud_download;
        /**
         *  ```
         *  Content $mol_row sub <= items
         *  ```
         **/
        Content(): $mol_row;
        /**
         *  ```
         *  items /
         *  ```
         **/
        items(): readonly any[];
    }
}

declare namespace $ {
    class $mpk_tss_pereferial_link extends $mpk_tss_card {
        /**
         *  ```
         *  unit null
         *  ```
         **/
        unit(): any;
        /**
         *  ```
         *  arg * unit <= unit_id
         *  ```
         **/
        arg(): {
            "unit": string;
        };
        /**
         *  ```
         *  unit_id \
         *  ```
         **/
        unit_id(): string;
        /**
         *  ```
         *  copy_params /
         *  	\login
         *  	\page
         *  	\units
         *  ```
         **/
        copy_params(): readonly any[];
        /**
         *  ```
         *  status <= unit_status
         *  ```
         **/
        status(): string;
        /**
         *  ```
         *  unit_status \
         *  ```
         **/
        unit_status(): string;
        /**
         *  ```
         *  Status_text $mpk_tss_pereferial_status
         *  	colors false
         *  	status <= unit_status
         *  ```
         **/
        Status_text(): $$.$mpk_tss_pereferial_status;
        /**
         *  ```
         *  Status_icon $mpk_tss_icon_autorenew
         *  ```
         **/
        Status_icon(): $mpk_tss_icon_autorenew;
        /**
         *  ```
         *  status_click?event <=> unit_status_click?event
         *  ```
         **/
        status_click(event?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  unit_status_click?event null
         *  ```
         **/
        unit_status_click(event?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  items /
         *  	<= Type_item
         *  	<= Name_item
         *  ```
         **/
        items(): readonly any[];
        /**
         *  ```
         *  Type_item $mol_labeler
         *  	title <= type_title
         *  	content / <= type
         *  ```
         **/
        Type_item(): $mol_labeler;
        /**
         *  ```
         *  type_title @ \Type
         *  ```
         **/
        type_title(): string;
        /**
         *  ```
         *  type \
         *  ```
         **/
        type(): string;
        /**
         *  ```
         *  Name_item $mol_labeler
         *  	title <= name_title
         *  	content / <= name
         *  ```
         **/
        Name_item(): $mol_labeler;
        /**
         *  ```
         *  name_title @ \Element
         *  ```
         **/
        name_title(): string;
        /**
         *  ```
         *  name \
         *  ```
         **/
        name(): string;
    }
}

declare namespace $.$$ {
    class $mpk_tss_pereferial_link extends $.$mpk_tss_pereferial_link {
        unit(): $mpk_tss_pereferial_domain_unit;
        unit_id(): string;
        type(): $mpk_tss_pereferial_domain_type;
        name(): string;
        unit_status(): $mpk_tss_pereferial_domain_status;
        unit_status_click(event?: Event): void;
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mpk_tss_pereferial_list extends $mol_view {
        /**
         *  ```
         *  title @ \Pereferials
         *  ```
         **/
        title(): string;
        /**
         *  ```
         *  pages /
         *  	<= Main
         *  	<= Unit_current
         *  ```
         **/
        pages(): readonly any[];
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
        Main(): $$.$mpk_tss_pereferial_page;
        /**
         *  ```
         *  event_top?e null
         *  ```
         **/
        event_top(e?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  tools /
         *  ```
         **/
        tools(): readonly any[];
        /**
         *  ```
         *  unit_current_id?v \
         *  ```
         **/
        unit_current_id(v?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  filter_value?val \
         *  ```
         **/
        filter_value(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  List $mol_list rows <= unit_links
         *  ```
         **/
        List(): $$.$mol_list;
        /**
         *  ```
         *  unit_links /
         *  ```
         **/
        unit_links(): readonly any[];
        /**
         *  ```
         *  Unit_current null
         *  ```
         **/
        Unit_current(): any;
        /**
         *  ```
         *  Unit_details!id $mpk_tss_pereferial_details
         *  	event_top?e <=> details_event_top?e
         *  	unit <= unit!id
         *  ```
         **/
        Unit_details(id: any): $$.$mpk_tss_pereferial_details;
        /**
         *  ```
         *  details_event_top?e null
         *  ```
         **/
        details_event_top(e?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  unit!id null
         *  ```
         **/
        unit(id: any): any;
        /**
         *  ```
         *  Unit_link!id $mpk_tss_pereferial_link unit <= unit!id
         *  ```
         **/
        Unit_link(id: any): $$.$mpk_tss_pereferial_link;
    }
}

declare namespace $.$$ {
    class $mpk_tss_pereferial_list extends $.$mpk_tss_pereferial_list {
        domain(): $mpk_tss_pereferial_domain_units;
        unit_links(): $mpk_tss_pereferial_link[];
        unit(id: string): $mpk_tss_pereferial_domain_unit;
        filter_value(next?: string): string;
        unit_current_id(next?: string): string;
        Unit_current(): $mpk_tss_pereferial_details;
        details_event_top(event?: Event): void;
    }
}

declare namespace $ {
    class $mpk_tss_sensors extends $mol_page {
        /**
         *  ```
         *  title @ \Sensors
         *  ```
         **/
        title(): string;
        /**
         *  ```
         *  body / <= Content
         *  ```
         **/
        body(): readonly any[];
        /**
         *  ```
         *  Content $mol_filler
         *  ```
         **/
        Content(): $mol_filler;
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_check extends $mol_button_minor {
        /**
         *  ```
         *  attr *
         *  	^
         *  	mol_check_checked <= checked?val
         *  	aria-checked <= checked?val
         *  	role \checkbox
         *  ```
         **/
        attr(): {
            "mol_check_checked": any;
            "aria-checked": any;
            "role": string;
            "disabled": boolean;
            "tabindex": number;
            "title": string;
        };
        /**
         *  ```
         *  checked?val false
         *  ```
         **/
        checked(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  sub /
         *  	<= Icon
         *  	<= label
         *  ```
         **/
        sub(): readonly any[];
        /**
         *  ```
         *  Icon null
         *  ```
         **/
        Icon(): any;
        /**
         *  ```
         *  label / <= Title
         *  ```
         **/
        label(): readonly any[];
        /**
         *  ```
         *  Title $mol_view sub / <= title
         *  ```
         **/
        Title(): $mol_view;
        /**
         *  ```
         *  title \
         *  ```
         **/
        title(): string;
    }
}

declare namespace $.$$ {
    class $mol_check extends $.$mol_check {
        event_click(next?: Event): void;
        sub(): any[];
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_check_icon extends $mol_check {
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mpk_tss_reports_check_warning extends $mol_check_icon {
        /**
         *  ```
         *  checked?val <=> filter_warning?val
         *  ```
         **/
        checked(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  filter_warning?val true
         *  ```
         **/
        filter_warning(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  Icon $mpk_tss_icon_round_warning
         *  ```
         **/
        Icon(): $mpk_tss_icon_round_warning;
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mpk_tss_reports_train_page extends $mol_page {
        /**
         *  ```
         *  minimal_width 520
         *  ```
         **/
        minimal_width(): number;
        /**
         *  ```
         *  report_current_id?uri \
         *  ```
         **/
        report_current_id(uri?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  sub /
         *  	<= Head
         *  	<= Search
         *  	<= Body
         *  ```
         **/
        sub(): readonly any[];
        /**
         *  ```
         *  Search $mol_view sub /
         *  	<= Filter_number
         *  	<= Filter_warning
         *  ```
         **/
        Search(): $mol_view;
        /**
         *  ```
         *  Filter_number $mol_search
         *  	hint <= hint
         *  	query?val <=> filter_number?val
         *  ```
         **/
        Filter_number(): $$.$mol_search;
        /**
         *  ```
         *  hint @ \Train number or report id
         *  ```
         **/
        hint(): string;
        /**
         *  ```
         *  filter_number?val \
         *  ```
         **/
        filter_number(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  Filter_warning $mpk_tss_reports_check_warning checked?val <=> filter_warning?val
         *  ```
         **/
        Filter_warning(): $mpk_tss_reports_check_warning;
        /**
         *  ```
         *  filter_warning?val true
         *  ```
         **/
        filter_warning(val?: any, force?: $mol_mem_force): any;
    }
}

declare namespace $.$$ {
    class $mpk_tss_reports_train_page extends $.$mpk_tss_reports_train_page {
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mpk_tss_card_list extends $mol_list {
        /**
         *  ```
         *  minimal_width 300
         *  ```
         **/
        minimal_width(): number;
        /**
         *  ```
         *  current_id \
         *  ```
         **/
        current_id(): string;
        /**
         *  ```
         *  attr *
         *  	^
         *  	mpk_tss_card_list_selected <= selected
         *  ```
         **/
        attr(): {
            "mpk_tss_card_list_selected": boolean;
        };
        /**
         *  ```
         *  selected false
         *  ```
         **/
        selected(): boolean;
    }
}

declare namespace $.$$ {
    class $mpk_tss_card_list extends $.$mpk_tss_card_list {
        selected(): boolean;
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mpk_tss_reports_resolution extends $mol_view {
        /**
         *  ```
         *  attr *
         *  	^
         *  	mpk_tss_reports_resolution_type <= status
         *  ```
         **/
        attr(): {
            "mpk_tss_reports_resolution_type": string;
        };
        /**
         *  ```
         *  status \
         *  ```
         **/
        status(): string;
        /**
         *  ```
         *  statuses *
         *  	success <= success
         *  	warning <= warning
         *  ```
         **/
        statuses(): {
            "success": string;
            "warning": string;
        };
        /**
         *  ```
         *  success @ \Success
         *  ```
         **/
        success(): string;
        /**
         *  ```
         *  warning @ \Warning
         *  ```
         **/
        warning(): string;
        /**
         *  ```
         *  icons *
         *  	success <= Success
         *  	warning <= Warning
         *  ```
         **/
        icons(): {
            "success": $mpk_tss_icon_circle_outline;
            "warning": $mpk_tss_icon_round_warning;
        };
        /**
         *  ```
         *  Success $mpk_tss_icon_circle_outline
         *  ```
         **/
        Success(): $mpk_tss_icon_circle_outline;
        /**
         *  ```
         *  Warning $mpk_tss_icon_round_warning
         *  ```
         **/
        Warning(): $mpk_tss_icon_round_warning;
        /**
         *  ```
         *  sub / <= Text
         *  ```
         **/
        sub(): readonly any[];
        /**
         *  ```
         *  Text $mol_view sub / <= status_text
         *  ```
         **/
        Text(): $mol_view;
        /**
         *  ```
         *  status_text \
         *  ```
         **/
        status_text(): string;
    }
}

declare namespace $.$$ {
    class $mpk_tss_reports_resolution extends $.$mpk_tss_reports_resolution {
        status(): $mpk_tss_reports_domain_resolution;
        status_text(): string;
        Icon(): $mpk_tss_icon_circle_outline | $mpk_tss_icon_round_warning;
    }
}

declare namespace $ {
    class $mpk_tss_parameter_speed extends $mol_view {
        /**
         *  ```
         *  sub /
         *  	<= value
         *  	<= spacer
         *  	<= unit
         *  ```
         **/
        sub(): readonly any[];
        /**
         *  ```
         *  value 0
         *  ```
         **/
        value(): number;
        /**
         *  ```
         *  spacer \
         *  ```
         **/
        spacer(): string;
        /**
         *  ```
         *  unit @ \km/h
         *  ```
         **/
        unit(): string;
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mpk_tss_reports_delivery extends $mol_view {
        /**
         *  ```
         *  attr *
         *  	^
         *  	mpk_tss_reports_delivery_type <= status
         *  ```
         **/
        attr(): {
            "mpk_tss_reports_delivery_type": any;
        };
        /**
         *  ```
         *  status null
         *  ```
         **/
        status(): any;
        /**
         *  ```
         *  statuses *
         *  	preparing <= preparing
         *  	sending <= sending
         *  	sent <= sent
         *  	error <= error
         *  ```
         **/
        statuses(): {
            "preparing": string;
            "sending": string;
            "sent": string;
            "error": string;
        };
        /**
         *  ```
         *  preparing @ \Preparing
         *  ```
         **/
        preparing(): string;
        /**
         *  ```
         *  sending @ \Sending
         *  ```
         **/
        sending(): string;
        /**
         *  ```
         *  sent @ \Sent
         *  ```
         **/
        sent(): string;
        /**
         *  ```
         *  error @ \Error
         *  ```
         **/
        error(): string;
        /**
         *  ```
         *  icons *
         *  	preparing <= Preparing
         *  	sending <= Sending
         *  	sent <= Sent
         *  	error <= Error
         *  ```
         **/
        icons(): {
            "preparing": $mpk_tss_icon_sync;
            "sending": $mpk_tss_icon_sync;
            "sent": $mpk_tss_icon_done;
            "error": $mpk_tss_icon_clear;
        };
        /**
         *  ```
         *  Preparing $mpk_tss_icon_sync
         *  ```
         **/
        Preparing(): $mpk_tss_icon_sync;
        /**
         *  ```
         *  Sending $mpk_tss_icon_sync
         *  ```
         **/
        Sending(): $mpk_tss_icon_sync;
        /**
         *  ```
         *  Sent $mpk_tss_icon_done
         *  ```
         **/
        Sent(): $mpk_tss_icon_done;
        /**
         *  ```
         *  Error $mpk_tss_icon_clear
         *  ```
         **/
        Error(): $mpk_tss_icon_clear;
        /**
         *  ```
         *  sub /
         *  	<= Icon
         *  	<= Text
         *  ```
         **/
        sub(): readonly any[];
        /**
         *  ```
         *  Icon null
         *  ```
         **/
        Icon(): any;
        /**
         *  ```
         *  Text $mol_view sub / <= status_text
         *  ```
         **/
        Text(): $mol_view;
        /**
         *  ```
         *  status_text \
         *  ```
         **/
        status_text(): string;
    }
}

declare namespace $.$$ {
    class $mpk_tss_reports_delivery extends $.$mpk_tss_reports_delivery {
        status(): $mpk_tss_reports_domain_delivery;
        status_text(): string;
        Icon(): $mpk_tss_icon_done | $mpk_tss_icon_sync | $mpk_tss_icon_clear;
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mpk_tss_reports_train_link extends $mpk_tss_card {
        /**
         *  ```
         *  report null
         *  ```
         **/
        report(): any;
        /**
         *  ```
         *  arg * report <= report_id
         *  ```
         **/
        arg(): {
            "report": string;
        };
        /**
         *  ```
         *  report_id \
         *  ```
         **/
        report_id(): string;
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
        copy_params(): readonly any[];
        /**
         *  ```
         *  status <= resolution
         *  ```
         **/
        status(): any;
        /**
         *  ```
         *  Status_text $mpk_tss_reports_resolution status <= resolution
         *  ```
         **/
        Status_text(): $$.$mpk_tss_reports_resolution;
        /**
         *  ```
         *  resolution null
         *  ```
         **/
        resolution(): any;
        /**
         *  ```
         *  status_click?event <=> report_status_click?event
         *  ```
         **/
        status_click(event?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  report_status_click?event null
         *  ```
         **/
        report_status_click(event?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  items /
         *  	<= Id
         *  	<= Started
         *  	<= Average_speed
         *  	<= Delivery
         *  	<= Train_number
         *  	<= Description
         *  ```
         **/
        items(): readonly any[];
        /**
         *  ```
         *  Id $mol_labeler
         *  	title <= id_title
         *  	content / <= report_id
         *  ```
         **/
        Id(): $mol_labeler;
        /**
         *  ```
         *  id_title @ \Id
         *  ```
         **/
        id_title(): string;
        /**
         *  ```
         *  Started $mol_labeler
         *  	title <= started_title
         *  	content / <= started
         *  ```
         **/
        Started(): $mol_labeler;
        /**
         *  ```
         *  started_title @ \Date
         *  ```
         **/
        started_title(): string;
        /**
         *  ```
         *  started \
         *  ```
         **/
        started(): string;
        /**
         *  ```
         *  Average_speed $mol_labeler
         *  	title <= average_speed_title
         *  	content / <= Average_speed_formatted
         *  ```
         **/
        Average_speed(): $mol_labeler;
        /**
         *  ```
         *  average_speed_title @ \Speed
         *  ```
         **/
        average_speed_title(): string;
        /**
         *  ```
         *  Average_speed_formatted $mpk_tss_parameter_speed value <= average_speed
         *  ```
         **/
        Average_speed_formatted(): $mpk_tss_parameter_speed;
        /**
         *  ```
         *  average_speed 0
         *  ```
         **/
        average_speed(): number;
        /**
         *  ```
         *  Delivery $mol_labeler
         *  	title <= delivery_title
         *  	Content <= Delivery_value
         *  ```
         **/
        Delivery(): $mol_labeler;
        /**
         *  ```
         *  delivery_title @ \Delivery
         *  ```
         **/
        delivery_title(): string;
        /**
         *  ```
         *  Delivery_value $mpk_tss_reports_delivery status <= delivery
         *  ```
         **/
        Delivery_value(): $$.$mpk_tss_reports_delivery;
        /**
         *  ```
         *  delivery null
         *  ```
         **/
        delivery(): any;
        /**
         *  ```
         *  Train_number $mol_labeler
         *  	title <= train_number_title
         *  	content / <= train_number
         *  ```
         **/
        Train_number(): $mol_labeler;
        /**
         *  ```
         *  train_number_title @ \Train
         *  ```
         **/
        train_number_title(): string;
        /**
         *  ```
         *  train_number \
         *  ```
         **/
        train_number(): string;
        /**
         *  ```
         *  Description $mol_labeler
         *  	title <= description_title
         *  	content / <= description
         *  ```
         **/
        Description(): $mol_labeler;
        /**
         *  ```
         *  description_title @ \Description
         *  ```
         **/
        description_title(): string;
        /**
         *  ```
         *  description \
         *  ```
         **/
        description(): string;
    }
}

declare namespace $.$$ {
    class $mpk_tss_reports_train_link extends $.$mpk_tss_reports_train_link {
        report(): $mpk_tss_reports_domain_report;
        report_id(): string;
        train_number(): string;
        description(): string;
        resolution(): $mpk_tss_reports_domain_resolution;
        started(): string;
        average_speed(): number;
        delivery(): $mpk_tss_reports_domain_delivery;
        report_status_click(even?: Event): void;
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mpk_tss_reports_carriage_page extends $mol_page {
        /**
         *  ```
         *  minimal_width 337
         *  ```
         **/
        minimal_width(): number;
        /**
         *  ```
         *  sub /
         *  	<= Head
         *  	<= Search
         *  	<= Body
         *  ```
         **/
        sub(): readonly any[];
        /**
         *  ```
         *  Search $mol_view sub /
         *  	<= Filter_number
         *  	<= Filter_warning
         *  ```
         **/
        Search(): $mol_view;
        /**
         *  ```
         *  Filter_number $mol_search
         *  	hint <= hint
         *  	query?val <=> filter_number?val
         *  ```
         **/
        Filter_number(): $$.$mol_search;
        /**
         *  ```
         *  hint @ \Carriage number
         *  ```
         **/
        hint(): string;
        /**
         *  ```
         *  filter_number?val \
         *  ```
         **/
        filter_number(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  Filter_warning $mpk_tss_reports_check_warning checked?val <=> filter_warning?val
         *  ```
         **/
        Filter_warning(): $mpk_tss_reports_check_warning;
        /**
         *  ```
         *  filter_warning?val true
         *  ```
         **/
        filter_warning(val?: any, force?: $mol_mem_force): any;
    }
}

declare namespace $ {
    class $mpk_tss_reports_violation extends $mol_view {
        /**
         *  ```
         *  status null
         *  ```
         **/
        status(): any;
        /**
         *  ```
         *  none @ \None
         *  ```
         **/
        none(): string;
        /**
         *  ```
         *  empty false
         *  ```
         **/
        empty(): boolean;
        /**
         *  ```
         *  statuses *
         *  	slider <= slider
         *  	vyscherbiny <= vyscherbiny
         *  	sink <= sink
         *  	dent <= dent
         *  ```
         **/
        statuses(): {
            "slider": string;
            "vyscherbiny": string;
            "sink": string;
            "dent": string;
        };
        /**
         *  ```
         *  slider @ \Slider
         *  ```
         **/
        slider(): string;
        /**
         *  ```
         *  vyscherbiny @ \Vyscherbiny
         *  ```
         **/
        vyscherbiny(): string;
        /**
         *  ```
         *  sink @ \Sink
         *  ```
         **/
        sink(): string;
        /**
         *  ```
         *  dent @ \Dent
         *  ```
         **/
        dent(): string;
        /**
         *  ```
         *  group / <= status_text
         *  ```
         **/
        group(): readonly any[];
        /**
         *  ```
         *  status_text \
         *  ```
         **/
        status_text(): string;
        /**
         *  ```
         *  sub <= group
         *  ```
         **/
        sub(): readonly any[];
    }
}

declare namespace $.$$ {
    class $mpk_tss_reports_violation extends $.$mpk_tss_reports_violation {
        status_text(): any;
        sub(): readonly any[];
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mpk_tss_reports_carriage_violation extends $mpk_tss_reports_violation {
        /**
         *  ```
         *  group /
         *  	<= before
         *  	<= status_text
         *  	<= after
         *  ```
         **/
        group(): readonly any[];
        /**
         *  ```
         *  before \(
         *  ```
         **/
        before(): string;
        /**
         *  ```
         *  after \)
         *  ```
         **/
        after(): string;
    }
}

declare namespace $ {
    class $mpk_tss_reports_carriage_load extends $mol_view {
        /**
         *  ```
         *  status null
         *  ```
         **/
        status(): any;
        /**
         *  ```
         *  statuses *
         *  	free <= free
         *  	full <= full
         *  ```
         **/
        statuses(): {
            "free": string;
            "full": string;
        };
        /**
         *  ```
         *  free @ \Free
         *  ```
         **/
        free(): string;
        /**
         *  ```
         *  full @ \Full
         *  ```
         **/
        full(): string;
        /**
         *  ```
         *  sub / <= status_text
         *  ```
         **/
        sub(): readonly any[];
        /**
         *  ```
         *  status_text \
         *  ```
         **/
        status_text(): string;
    }
}

declare namespace $.$$ {
    class $mpk_tss_reports_carriage_load extends $.$mpk_tss_reports_carriage_load {
        status_text(): any;
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mpk_tss_reports_carriage_link extends $mpk_tss_card {
        /**
         *  ```
         *  minimal_height 100
         *  ```
         **/
        minimal_height(): number;
        /**
         *  ```
         *  carriage null
         *  ```
         **/
        carriage(): any;
        /**
         *  ```
         *  arg * carriage <= carriage_id
         *  ```
         **/
        arg(): {
            "carriage": string;
        };
        /**
         *  ```
         *  carriage_id \
         *  ```
         **/
        carriage_id(): string;
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
        copy_params(): readonly any[];
        /**
         *  ```
         *  title @ \Train %train_number | Carriage %carriage_number
         *  ```
         **/
        title(): string;
        /**
         *  ```
         *  status <= resolution
         *  ```
         **/
        status(): any;
        /**
         *  ```
         *  Status_text $mol_view sub /
         *  	<= Status_main
         *  	<= Violation
         *  ```
         **/
        Status_text(): $mol_view;
        /**
         *  ```
         *  Status_main $mpk_tss_reports_resolution status <= resolution
         *  ```
         **/
        Status_main(): $$.$mpk_tss_reports_resolution;
        /**
         *  ```
         *  resolution null
         *  ```
         **/
        resolution(): any;
        /**
         *  ```
         *  Violation $mpk_tss_reports_carriage_violation status <= violation
         *  ```
         **/
        Violation(): $mpk_tss_reports_carriage_violation;
        /**
         *  ```
         *  violation \
         *  ```
         **/
        violation(): string;
        /**
         *  ```
         *  Status_icon $mpk_tss_icon_cloud_download
         *  ```
         **/
        Status_icon(): $mpk_tss_icon_cloud_download;
        /**
         *  ```
         *  status_click?event <=> carriage_status_click?event
         *  ```
         **/
        status_click(event?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  carriage_status_click?event null
         *  ```
         **/
        carriage_status_click(event?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  additional /
         *  ```
         **/
        additional(): readonly any[];
        /**
         *  ```
         *  items /
         *  	<= Place
         *  	<= Carriage_number
         *  	<= Load
         *  	<= Speed
         *  ```
         **/
        items(): readonly any[];
        /**
         *  ```
         *  Place $mol_labeler
         *  	title <= place_title
         *  	content / <= place
         *  ```
         **/
        Place(): $mol_labeler;
        /**
         *  ```
         *  place_title @ \Place
         *  ```
         **/
        place_title(): string;
        /**
         *  ```
         *  place \
         *  ```
         **/
        place(): string;
        /**
         *  ```
         *  Carriage_number $mol_labeler
         *  	title <= carriage_number_title
         *  	content / <= carriage_number
         *  ```
         **/
        Carriage_number(): $mol_labeler;
        /**
         *  ```
         *  carriage_number_title @ \Carriage
         *  ```
         **/
        carriage_number_title(): string;
        /**
         *  ```
         *  carriage_number \
         *  ```
         **/
        carriage_number(): string;
        /**
         *  ```
         *  Load $mol_labeler
         *  	title <= load_title
         *  	content / <= Load_text
         *  ```
         **/
        Load(): $mol_labeler;
        /**
         *  ```
         *  load_title @ \Load
         *  ```
         **/
        load_title(): string;
        /**
         *  ```
         *  Load_text $mpk_tss_reports_carriage_load status <= load
         *  ```
         **/
        Load_text(): $$.$mpk_tss_reports_carriage_load;
        /**
         *  ```
         *  load \
         *  ```
         **/
        load(): string;
        /**
         *  ```
         *  Speed $mol_labeler
         *  	title <= speed_title
         *  	content / <= Speed_formatted
         *  ```
         **/
        Speed(): $mol_labeler;
        /**
         *  ```
         *  speed_title @ \Speed
         *  ```
         **/
        speed_title(): string;
        /**
         *  ```
         *  Speed_formatted $mpk_tss_parameter_speed value <= speed
         *  ```
         **/
        Speed_formatted(): $mpk_tss_parameter_speed;
        /**
         *  ```
         *  speed 0
         *  ```
         **/
        speed(): number;
    }
}

declare namespace $.$$ {
    class $mpk_tss_reports_carriage_link extends $.$mpk_tss_reports_carriage_link {
        carriage(): $mpk_tss_reports_domain_carriage;
        title(): string;
        carriage_id(): string;
        place(): string;
        carriage_number(): string;
        resolution(): $mpk_tss_reports_domain_resolution;
        load(): $mpk_tss_reports_domain_load;
        violation(): $mpk_tss_reports_domain_violation;
        speed(): number;
        items(): any[];
    }
}

declare namespace $ {
    class $mpk_tss_parameter_weight extends $mol_view {
        /**
         *  ```
         *  sub /
         *  	<= value
         *  	<= spacer
         *  	<= unit
         *  ```
         **/
        sub(): readonly any[];
        /**
         *  ```
         *  value 0
         *  ```
         **/
        value(): number;
        /**
         *  ```
         *  spacer \
         *  ```
         **/
        spacer(): string;
        /**
         *  ```
         *  unit @ \kg
         *  ```
         **/
        unit(): string;
    }
}

declare namespace $ {
    class $mpk_tss_reports_carriage_type extends $mol_view {
        /**
         *  ```
         *  value null
         *  ```
         **/
        value(): any;
        /**
         *  ```
         *  values *
         *  	hopper <= hopper
         *  	flatcar <= flatcar
         *  	tank <= tank
         *  	covered <= covered
         *  ```
         **/
        values(): {
            "hopper": string;
            "flatcar": string;
            "tank": string;
            "covered": string;
        };
        /**
         *  ```
         *  hopper @ \Hopper
         *  ```
         **/
        hopper(): string;
        /**
         *  ```
         *  flatcar @ \Flatcar
         *  ```
         **/
        flatcar(): string;
        /**
         *  ```
         *  tank @ \Tank
         *  ```
         **/
        tank(): string;
        /**
         *  ```
         *  covered @ \Covered
         *  ```
         **/
        covered(): string;
        /**
         *  ```
         *  sub / <= status_text
         *  ```
         **/
        sub(): readonly any[];
        /**
         *  ```
         *  status_text \
         *  ```
         **/
        status_text(): string;
    }
}

declare namespace $.$$ {
    class $mpk_tss_reports_carriage_type extends $.$mpk_tss_reports_carriage_type {
        status_text(): any;
    }
}

declare namespace $ {
    class $mpk_tss_parameter_length extends $mol_view {
        /**
         *  ```
         *  sub /
         *  	<= value
         *  	<= spacer
         *  	<= unit
         *  ```
         **/
        sub(): readonly any[];
        /**
         *  ```
         *  value 0
         *  ```
         **/
        value(): number;
        /**
         *  ```
         *  spacer \
         *  ```
         **/
        spacer(): string;
        /**
         *  ```
         *  unit @ \m
         *  ```
         **/
        unit(): string;
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mpk_tss_reports_wheel_link extends $mol_view {
        /**
         *  ```
         *  wheel null
         *  ```
         **/
        wheel(): any;
        /**
         *  ```
         *  axle_id \
         *  ```
         **/
        axle_id(): string;
        /**
         *  ```
         *  attr *
         *  	^
         *  	mpk_tss_reports_wheel_type <= resolution
         *  ```
         **/
        attr(): {
            "mpk_tss_reports_wheel_type": string;
        };
        /**
         *  ```
         *  resolution \
         *  ```
         **/
        resolution(): string;
        /**
         *  ```
         *  sub / <= name
         *  ```
         **/
        sub(): readonly any[];
        /**
         *  ```
         *  name \
         *  ```
         **/
        name(): string;
    }
}

declare namespace $.$$ {
    class $mpk_tss_reports_wheel_link extends $.$mpk_tss_reports_wheel_link {
        wheel(): $mpk_tss_reports_domain_wheel;
        id(): string;
        resolution(): $mpk_tss_reports_domain_resolution;
        violation(): $mpk_tss_reports_domain_violation;
        name(): string;
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mpk_tss_reports_axle_link extends $mpk_tss_link {
        /**
         *  ```
         *  axle null
         *  ```
         **/
        axle(): any;
        /**
         *  ```
         *  arg * axle <= axle_id
         *  ```
         **/
        arg(): {
            "axle": string;
        };
        /**
         *  ```
         *  axle_id \
         *  ```
         **/
        axle_id(): string;
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
        copy_params(): readonly any[];
        /**
         *  ```
         *  sub / <= Wheels
         *  ```
         **/
        sub(): readonly any[];
        /**
         *  ```
         *  Wheels $mol_list rows <= wheels
         *  ```
         **/
        Wheels(): $$.$mol_list;
        /**
         *  ```
         *  wheels /
         *  ```
         **/
        wheels(): readonly any[];
        /**
         *  ```
         *  Wheel!id $mpk_tss_reports_wheel_link
         *  	wheel <= wheel!id
         *  	axle_id <= axle_id
         *  ```
         **/
        Wheel(id: any): $$.$mpk_tss_reports_wheel_link;
        /**
         *  ```
         *  wheel!id null
         *  ```
         **/
        wheel(id: any): any;
    }
}

declare namespace $.$$ {
    class $mpk_tss_reports_axle_link extends $.$mpk_tss_reports_axle_link {
        axle(): $mpk_tss_reports_domain_axle;
        axle_id(): string;
        number(): number;
        resolution(): $mpk_tss_reports_domain_resolution;
        violation(): $mpk_tss_reports_domain_violation;
        wheel(id: string): $mpk_tss_reports_domain_wheel;
        wheels(): $mpk_tss_reports_wheel_link[];
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mpk_tss_reports_axle_list extends $mol_list {
        /**
         *  ```
         *  carriage null
         *  ```
         **/
        carriage(): any;
        /**
         *  ```
         *  axle_current null
         *  ```
         **/
        axle_current(): any;
        /**
         *  ```
         *  rows <= axis
         *  ```
         **/
        rows(): readonly any[];
        /**
         *  ```
         *  axis /
         *  ```
         **/
        axis(): readonly any[];
        /**
         *  ```
         *  Axle_link!id $mpk_tss_reports_axle_link
         *  	axle <= axle!id
         *  	current <= current!id
         *  ```
         **/
        Axle_link(id: any): $$.$mpk_tss_reports_axle_link;
        /**
         *  ```
         *  axle!id null
         *  ```
         **/
        axle(id: any): any;
        /**
         *  ```
         *  current!id false
         *  ```
         **/
        current(id: any): boolean;
    }
}

declare namespace $.$$ {
    class $mpk_tss_reports_axle_list extends $.$mpk_tss_reports_axle_list {
        carriage(): $mpk_tss_reports_domain_carriage;
        axle(id: string): $mpk_tss_reports_domain_axle;
        axle_current_id(next?: string): string;
        current(id: string): boolean;
        axle_current(): $mpk_tss_reports_domain_axle;
        axis(): $mpk_tss_reports_axle_link[];
        destructor(): void;
    }
}

declare namespace $ {
    class $mol_vector<Value, Length extends number> extends Array<Value> {
        length: Length;
        constructor(...values: Value[] & {
            length: Length;
        });
        map<Res>(convert: (value: Value, index: number, array: this) => Res, self?: any): $mol_vector<Res, Length>;
        merged<Patch>(patches: readonly Patch[] & {
            length: Length;
        }, combine: (value: Value, patch: Patch) => Value): this;
        limited(this: $mol_vector<number, Length>, limits: readonly (readonly [number, number])[] & {
            length: Length;
        }): this;
        added0(this: $mol_vector<number, Length>, diff: number): this;
        added1(this: $mol_vector<number, Length>, diff: readonly number[] & {
            length: Length;
        }): this;
        multed0(this: $mol_vector<number, Length>, mult: number): this;
        multed1(this: $mol_vector<number, Length>, mults: readonly number[] & {
            length: Length;
        }): this;
        expanded1(this: $mol_vector<$mol_vector_range<number>, Length>, point: readonly number[] & {
            length: Length;
        }): this;
        expanded2(this: $mol_vector<$mol_vector_range<number>, Length>, point: readonly (readonly [number, number])[] & {
            length: Length;
        }): this;
    }
    class $mol_vector_1d<Value> extends $mol_vector<Value, 1> {
        [0]: Value;
        get x(): Value;
    }
    class $mol_vector_2d<Value> extends $mol_vector<Value, 2> {
        [0]: Value;
        [1]: Value;
        get x(): Value;
        get y(): Value;
    }
    class $mol_vector_3d<Value> extends $mol_vector<Value, 3> {
        [0]: Value;
        [1]: Value;
        [2]: Value;
        get x(): Value;
        get y(): Value;
        get z(): Value;
    }
    class $mol_vector_range<Value> extends $mol_vector<Value, 2> {
        [0]: Value;
        [1]: Value;
        get min(): Value;
        get max(): Value;
        get inversed(): $mol_vector_range<Value>;
        expanded0(value: Value): $mol_vector_range<Value>;
    }
    let $mol_vector_range_full: $mol_vector_range<number>;
    class $mol_vector_matrix<Width extends number, Height extends number> extends $mol_vector<readonly number[] & {
        length: Width;
    }, Height> {
        added2(diff: readonly (readonly number[] & {
            length: Width;
        })[] & {
            length: Height;
        }): this;
        multed2(diff: readonly (readonly number[] & {
            length: Width;
        })[] & {
            length: Height;
        }): this;
    }
}

declare namespace $ {
    class $mol_svg_group extends $mol_svg {
        /**
         *  ```
         *  dom_name \g
         *  ```
         **/
        dom_name(): string;
    }
}

declare namespace $ {
    class $mol_plot_graph extends $mol_svg_group {
        /**
         *  ```
         *  series_x /number
         *  ```
         **/
        series_x(): readonly number[];
        /**
         *  ```
         *  series_y /number
         *  ```
         **/
        series_y(): readonly number[];
        /**
         *  ```
         *  attr *
         *  	^
         *  	mol_plot_graph_type <= type
         *  ```
         **/
        attr(): {
            "mol_plot_graph_type": string;
        };
        /**
         *  ```
         *  type \solid
         *  ```
         **/
        type(): string;
        /**
         *  ```
         *  style *
         *  	^
         *  	color <= color
         *  ```
         **/
        style(): {
            "color": string;
        };
        /**
         *  ```
         *  color \
         *  ```
         **/
        color(): string;
        /**
         *  ```
         *  viewport $mol_vector_2d /
         *  	<= viewport_x
         *  	<= viewport_y
         *  ```
         **/
        viewport(): $mol_vector_2d<$mol_vector_range<number>>;
        /**
         *  ```
         *  viewport_x $mol_vector_range /
         *  	Infinity
         *  	-Infinity
         *  ```
         **/
        viewport_x(): $mol_vector_range<number>;
        /**
         *  ```
         *  viewport_y $mol_vector_range /
         *  	Infinity
         *  	-Infinity
         *  ```
         **/
        viewport_y(): $mol_vector_range<number>;
        /**
         *  ```
         *  shift /number
         *  	0
         *  	0
         *  ```
         **/
        shift(): readonly number[];
        /**
         *  ```
         *  scale /number
         *  	1
         *  	1
         *  ```
         **/
        scale(): readonly number[];
        /**
         *  ```
         *  cursor_position $mol_vector_2d /
         *  	NaN
         *  	NaN
         *  ```
         **/
        cursor_position(): $mol_vector_2d<number>;
        /**
         *  ```
         *  dimensions_pane $mol_vector_2d /
         *  	<= dimensions_pane_x
         *  	<= dimensions_pane_y
         *  ```
         **/
        dimensions_pane(): $mol_vector_2d<$mol_vector_range<number>>;
        /**
         *  ```
         *  dimensions_pane_x $mol_vector_range /
         *  	Infinity
         *  	-Infinity
         *  ```
         **/
        dimensions_pane_x(): $mol_vector_range<number>;
        /**
         *  ```
         *  dimensions_pane_y $mol_vector_range /
         *  	Infinity
         *  	-Infinity
         *  ```
         **/
        dimensions_pane_y(): $mol_vector_range<number>;
        /**
         *  ```
         *  dimensions $mol_vector_2d /
         *  	<= dimensions_x
         *  	<= dimensions_y
         *  ```
         **/
        dimensions(): $mol_vector_2d<$mol_vector_range<number>>;
        /**
         *  ```
         *  dimensions_x $mol_vector_range /
         *  	Infinity
         *  	-Infinity
         *  ```
         **/
        dimensions_x(): $mol_vector_range<number>;
        /**
         *  ```
         *  dimensions_y $mol_vector_range /
         *  	Infinity
         *  	-Infinity
         *  ```
         **/
        dimensions_y(): $mol_vector_range<number>;
        /**
         *  ```
         *  size_real $mol_vector_2d /
         *  	0
         *  	0
         *  ```
         **/
        size_real(): $mol_vector_2d<number>;
        /**
         *  ```
         *  gap $mol_vector_2d /
         *  	<= gap_x
         *  	<= gap_y
         *  ```
         **/
        gap(): $mol_vector_2d<$mol_vector_range<number>>;
        /**
         *  ```
         *  gap_x $mol_vector_range /
         *  	0
         *  	0
         *  ```
         **/
        gap_x(): $mol_vector_range<number>;
        /**
         *  ```
         *  gap_y $mol_vector_range /
         *  	0
         *  	0
         *  ```
         **/
        gap_y(): $mol_vector_range<number>;
        /**
         *  ```
         *  indexes /number
         *  ```
         **/
        indexes(): readonly number[];
        /**
         *  ```
         *  points /readonly(number)[]
         *  ```
         **/
        points(): readonly (readonly number[])[];
        /**
         *  ```
         *  front /$mol_svg
         *  ```
         **/
        front(): readonly $mol_svg[];
        /**
         *  ```
         *  back /$mol_svg
         *  ```
         **/
        back(): readonly $mol_svg[];
        /**
         *  ```
         *  hue NaN
         *  ```
         **/
        hue(): number;
        /**
         *  ```
         *  Sample null
         *  ```
         **/
        Sample(): any;
    }
}
declare namespace $ {
    class $mol_plot_graph_sample extends $mol_view {
        /**
         *  ```
         *  attr *
         *  	^
         *  	mol_plot_graph_type <= type
         *  ```
         **/
        attr(): {
            "mol_plot_graph_type": string;
        };
        /**
         *  ```
         *  type \solid
         *  ```
         **/
        type(): string;
        /**
         *  ```
         *  style *
         *  	^
         *  	color <= color
         *  ```
         **/
        style(): {
            "color": string;
        };
        /**
         *  ```
         *  color \black
         *  ```
         **/
        color(): string;
    }
}

declare namespace $.$$ {
    class $mol_plot_graph extends $.$mol_plot_graph {
        viewport(): $mol_vector_2d<$mol_vector_range<number>>;
        points(): readonly (readonly number[])[];
        series_x(): readonly number[];
        dimensions(): $mol_vector_2d<$mol_vector_range<number>>;
        color(): string;
        front(): readonly $.$mol_svg[];
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_chart_legend extends $mol_scroll {
        /**
         *  ```
         *  graphs /$mol_plot_graph
         *  ```
         **/
        graphs(): readonly $mol_plot_graph[];
        /**
         *  ```
         *  sub <= graph_legends
         *  ```
         **/
        sub(): readonly $mol_view[];
        /**
         *  ```
         *  graph_legends /$mol_view
         *  ```
         **/
        graph_legends(): readonly $mol_view[];
        /**
         *  ```
         *  Graph_legend!id $mol_view sub /
         *  	<= Graph_sample_box!id
         *  	<= Graph_title!id
         *  ```
         **/
        Graph_legend(id: any): $mol_view;
        /**
         *  ```
         *  Graph_sample_box!id $mol_view sub / <= Graph_sample!id
         *  ```
         **/
        Graph_sample_box(id: any): $mol_view;
        /**
         *  ```
         *  Graph_sample!id null
         *  ```
         **/
        Graph_sample(id: any): any;
        /**
         *  ```
         *  Graph_title!id $mol_view sub / <= graph_title!id
         *  ```
         **/
        Graph_title(id: any): $mol_view;
        /**
         *  ```
         *  graph_title!id \
         *  ```
         **/
        graph_title(id: any): string;
    }
}

declare namespace $.$$ {
    class $mol_chart_legend extends $.$mol_chart_legend {
        graphs_front(): $.$mol_plot_graph[];
        graph_legends(): $mol_view[];
        graph_title(index: number): string;
        Graph_sample(index: number): any;
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_plot_pane extends $mol_svg_root {
        /**
         *  ```
         *  aspect \none
         *  ```
         **/
        aspect(): string;
        /**
         *  ```
         *  hue_base?val NaN
         *  ```
         **/
        hue_base(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  hue_shift?val 111
         *  ```
         **/
        hue_shift(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  gap_hor 48
         *  ```
         **/
        gap_hor(): number;
        /**
         *  ```
         *  gap_vert 24
         *  ```
         **/
        gap_vert(): number;
        /**
         *  ```
         *  gap_left <= gap_hor
         *  ```
         **/
        gap_left(): number;
        /**
         *  ```
         *  gap_right <= gap_hor
         *  ```
         **/
        gap_right(): number;
        /**
         *  ```
         *  gap_top <= gap_vert
         *  ```
         **/
        gap_top(): number;
        /**
         *  ```
         *  gap_bottom <= gap_vert
         *  ```
         **/
        gap_bottom(): number;
        /**
         *  ```
         *  gap $mol_vector_2d /
         *  	<= gap_x
         *  	<= gap_y
         *  ```
         **/
        gap(): $mol_vector_2d<$mol_vector_range<number>>;
        /**
         *  ```
         *  gap_x $mol_vector_range /
         *  	<= gap_left
         *  	<= gap_right
         *  ```
         **/
        gap_x(): $mol_vector_range<number>;
        /**
         *  ```
         *  gap_y $mol_vector_range /
         *  	<= gap_bottom
         *  	<= gap_top
         *  ```
         **/
        gap_y(): $mol_vector_range<number>;
        /**
         *  ```
         *  shift_limit $mol_vector_2d /
         *  	<= shift_limit_x
         *  	<= shift_limit_y
         *  ```
         **/
        shift_limit(): $mol_vector_2d<$mol_vector_range<number>>;
        /**
         *  ```
         *  shift_limit_x $mol_vector_range /
         *  	0
         *  	0
         *  ```
         **/
        shift_limit_x(): $mol_vector_range<number>;
        /**
         *  ```
         *  shift_limit_y $mol_vector_range /
         *  	0
         *  	0
         *  ```
         **/
        shift_limit_y(): $mol_vector_range<number>;
        /**
         *  ```
         *  shift_default /number
         *  	0
         *  	0
         *  ```
         **/
        shift_default(): readonly number[];
        /**
         *  ```
         *  shift?val /number
         *  	0
         *  	0
         *  ```
         **/
        shift(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  scale_limit $mol_vector_2d /
         *  	<= scale_limit_x
         *  	<= scale_limit_y
         *  ```
         **/
        scale_limit(): $mol_vector_2d<$mol_vector_range<number>>;
        /**
         *  ```
         *  scale_limit_x $mol_vector_range /
         *  	0
         *  	Infinity
         *  ```
         **/
        scale_limit_x(): $mol_vector_range<number>;
        /**
         *  ```
         *  scale_limit_y $mol_vector_range /
         *  	0
         *  	Infinity
         *  ```
         **/
        scale_limit_y(): $mol_vector_range<number>;
        /**
         *  ```
         *  scale_default /number
         *  	0
         *  	0
         *  ```
         **/
        scale_default(): readonly number[];
        /**
         *  ```
         *  scale?val /number
         *  	1
         *  	1
         *  ```
         **/
        scale(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  scale_x?val 0
         *  ```
         **/
        scale_x(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  scale_y?val 0
         *  ```
         **/
        scale_y(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  size $mol_vector_2d /
         *  	0
         *  	0
         *  ```
         **/
        size(): $mol_vector_2d<number>;
        /**
         *  ```
         *  size_real $mol_vector_2d /
         *  	1
         *  	1
         *  ```
         **/
        size_real(): $mol_vector_2d<number>;
        /**
         *  ```
         *  dimensions_viewport $mol_vector_2d /
         *  	<= dimensions_viewport_x
         *  	<= dimensions_viewport_y
         *  ```
         **/
        dimensions_viewport(): $mol_vector_2d<$mol_vector_range<number>>;
        /**
         *  ```
         *  dimensions_viewport_x $mol_vector_range /
         *  	Infinity
         *  	-Infinity
         *  ```
         **/
        dimensions_viewport_x(): $mol_vector_range<number>;
        /**
         *  ```
         *  dimensions_viewport_y $mol_vector_range /
         *  	Infinity
         *  	-Infinity
         *  ```
         **/
        dimensions_viewport_y(): $mol_vector_range<number>;
        /**
         *  ```
         *  dimensions $mol_vector_2d /
         *  	<= dimensions_x
         *  	<= dimensions_y
         *  ```
         **/
        dimensions(): $mol_vector_2d<$mol_vector_range<number>>;
        /**
         *  ```
         *  dimensions_x $mol_vector_range /
         *  	Infinity
         *  	-Infinity
         *  ```
         **/
        dimensions_x(): $mol_vector_range<number>;
        /**
         *  ```
         *  dimensions_y $mol_vector_range /
         *  	Infinity
         *  	-Infinity
         *  ```
         **/
        dimensions_y(): $mol_vector_range<number>;
        /**
         *  ```
         *  sub <= graphs_sorted
         *  ```
         **/
        sub(): readonly $mol_svg[];
        /**
         *  ```
         *  graphs_sorted /$mol_svg
         *  ```
         **/
        graphs_sorted(): readonly $mol_svg[];
        /**
         *  ```
         *  graphs_colored <= graphs_positioned
         *  ```
         **/
        graphs_colored(): readonly $mol_plot_graph[];
        /**
         *  ```
         *  graphs_positioned <= graphs
         *  ```
         **/
        graphs_positioned(): readonly $mol_plot_graph[];
        /**
         *  ```
         *  graphs /$mol_plot_graph
         *  ```
         **/
        graphs(): readonly $mol_plot_graph[];
        /**
         *  ```
         *  cursor_position?val $mol_vector_2d /
         *  	NaN
         *  	NaN
         *  ```
         **/
        cursor_position(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  plugins /
         *  	^
         *  	<= Meter
         *  	<= Touch
         *  ```
         **/
        plugins(): readonly any[];
        width(): number;
        height(): number;
        /**
         *  ```
         *  Meter $mol_meter
         *  	width => width
         *  	height => height
         *  ```
         **/
        Meter(): $$.$mol_meter;
        /**
         *  ```
         *  Touch $mol_touch
         *  	zoom?val <=> scale_x?val
         *  	pan?val <=> shift?val
         *  	pos?val <=> cursor_position?val
         *  ```
         **/
        Touch(): $$.$mol_touch;
        /**
         *  ```
         *  event *
         *  	^
         *  	dblclick?event <=> reset?event
         *  ```
         **/
        event(): {
            "dblclick": (event?: any) => any;
        };
        /**
         *  ```
         *  reset?event null
         *  ```
         **/
        reset(event?: any, force?: $mol_mem_force): any;
    }
}

declare namespace $.$$ {
    class $mol_plot_pane extends $.$mol_plot_pane {
        dimensions(): $mol_vector_2d<$mol_vector_range<number>>;
        size(): $mol_vector_2d<number>;
        graph_hue(index: number): number;
        graphs_colored(): readonly $.$mol_plot_graph[];
        size_real(): $mol_vector_2d<number>;
        view_box(): string;
        scale_limit(): $mol_vector_2d<$mol_vector_range<number>>;
        scale_default(): readonly [number, number];
        scale(next?: readonly [number, number], force?: $mol_mem_force): readonly [number, number];
        scale_x(next?: number): number;
        scale_y(next?: number): number;
        shift_limit(): $mol_vector_2d<$mol_vector_range<number>>;
        shift_default(): readonly [number, number];
        graph_touched: boolean;
        shift(next?: readonly [number, number], force?: $mol_mem_force): readonly [number, number];
        reset(event?: Event): void;
        graphs_positioned(): readonly $.$mol_plot_graph[];
        viewport(): $mol_vector_2d<$mol_vector_range<number>>;
        graphs_sorted(): $.$mol_svg[];
    }
}

declare namespace $ {
}

declare namespace $ {
}

declare namespace $ {
    class $mol_chart extends $mol_view {
        /**
         *  ```
         *  gap_hor 48
         *  ```
         **/
        gap_hor(): number;
        /**
         *  ```
         *  gap_vert 24
         *  ```
         **/
        gap_vert(): number;
        /**
         *  ```
         *  gap_left <= gap_hor
         *  ```
         **/
        gap_left(): number;
        /**
         *  ```
         *  gap_right <= gap_hor
         *  ```
         **/
        gap_right(): number;
        /**
         *  ```
         *  gap_bottom <= gap_vert
         *  ```
         **/
        gap_bottom(): number;
        /**
         *  ```
         *  gap_top <= gap_vert
         *  ```
         **/
        gap_top(): number;
        /**
         *  ```
         *  graphs /$mol_plot_graph
         *  ```
         **/
        graphs(): readonly $mol_plot_graph[];
        /**
         *  ```
         *  sub /
         *  	<= Legend
         *  	<= Plot
         *  ```
         **/
        sub(): readonly any[];
        /**
         *  ```
         *  Legend $mol_chart_legend graphs <= graphs_colored
         *  ```
         **/
        Legend(): $$.$mol_chart_legend;
        graphs_colored(): readonly $mol_plot_graph[];
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
        Plot(): $$.$mol_plot_pane;
        /**
         *  ```
         *  hue_base 140
         *  ```
         **/
        hue_base(): number;
        /**
         *  ```
         *  hue_shift 111
         *  ```
         **/
        hue_shift(): number;
    }
}

declare namespace $ {
    function $mol_coord_pack(a: number, b: number): number;
    function $mol_coord_high(key: number): number;
    function $mol_coord_low(key: number): number;
}

declare namespace $ {
    class $mol_plot_dot extends $mol_plot_graph {
        /**
         *  ```
         *  points_max Infinity
         *  ```
         **/
        points_max(): number;
        /**
         *  ```
         *  style *
         *  	^
         *  	stroke-width <= diameter
         *  ```
         **/
        style(): {
            "stroke-width": number;
            "color": string;
        };
        /**
         *  ```
         *  diameter 8
         *  ```
         **/
        diameter(): number;
        /**
         *  ```
         *  sub / <= Curve
         *  ```
         **/
        sub(): readonly any[];
        /**
         *  ```
         *  Curve $mol_svg_path geometry <= curve
         *  ```
         **/
        Curve(): $mol_svg_path;
        /**
         *  ```
         *  curve \
         *  ```
         **/
        curve(): string;
        /**
         *  ```
         *  Sample $mol_plot_graph_sample color <= color
         *  ```
         **/
        Sample(): $mol_plot_graph_sample;
    }
}

declare namespace $.$$ {
    class $mol_plot_dot extends $.$mol_plot_dot {
        filled(): Set<number>;
        indexes(): number[];
        curve(): string;
    }
}

declare namespace $ {
}

declare namespace $ {
    function $mol_math_round_expand(val: number, gap?: number): number;
}

declare namespace $ {
    class $mol_svg_rect extends $mol_svg {
        /**
         *  ```
         *  dom_name \rect
         *  ```
         **/
        dom_name(): string;
        /**
         *  ```
         *  pos /
         *  ```
         **/
        pos(): readonly any[];
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
        attr(): {
            "width": string;
            "height": string;
            "x": string;
            "y": string;
        };
        /**
         *  ```
         *  width \0
         *  ```
         **/
        width(): string;
        /**
         *  ```
         *  height \0
         *  ```
         **/
        height(): string;
        /**
         *  ```
         *  pos_x \
         *  ```
         **/
        pos_x(): string;
        /**
         *  ```
         *  pos_y \
         *  ```
         **/
        pos_y(): string;
    }
}

declare namespace $.$$ {
    class $mol_svg_rect extends $.$mol_svg_rect {
        pos_x(): any;
        pos_y(): any;
    }
}

declare namespace $ {
    class $mol_svg_text extends $mol_svg {
        /**
         *  ```
         *  dom_name \text
         *  ```
         **/
        dom_name(): string;
        /**
         *  ```
         *  pos /
         *  ```
         **/
        pos(): readonly any[];
        /**
         *  ```
         *  attr *
         *  	^
         *  	x <= pos_x
         *  	y <= pos_y
         *  	text-anchor <= align
         *  ```
         **/
        attr(): {
            "x": string;
            "y": string;
            "text-anchor": string;
        };
        /**
         *  ```
         *  pos_x \
         *  ```
         **/
        pos_x(): string;
        /**
         *  ```
         *  pos_y \
         *  ```
         **/
        pos_y(): string;
        /**
         *  ```
         *  align \middle
         *  ```
         **/
        align(): string;
        /**
         *  ```
         *  sub / <= text
         *  ```
         **/
        sub(): readonly any[];
        /**
         *  ```
         *  text \
         *  ```
         **/
        text(): string;
    }
}

declare namespace $.$$ {
    class $mol_svg_text extends $.$mol_svg_text {
        pos_x(): any;
        pos_y(): any;
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_svg_text_box extends $mol_svg_group {
        /**
         *  ```
         *  font_size 16
         *  ```
         **/
        font_size(): number;
        /**
         *  ```
         *  sub /
         *  	<= Back
         *  	<= Text
         *  ```
         **/
        sub(): readonly any[];
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
        Back(): $$.$mol_svg_rect;
        /**
         *  ```
         *  box_width \0.5rem
         *  ```
         **/
        box_width(): string;
        /**
         *  ```
         *  box_height \1rem
         *  ```
         **/
        box_height(): string;
        /**
         *  ```
         *  box_pos_x <= pos_x
         *  ```
         **/
        box_pos_x(): string;
        /**
         *  ```
         *  box_pos_y \0
         *  ```
         **/
        box_pos_y(): string;
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
        Text(): $$.$mol_svg_text;
        /**
         *  ```
         *  pos_x \0
         *  ```
         **/
        pos_x(): string;
        /**
         *  ```
         *  pos_y \100%
         *  ```
         **/
        pos_y(): string;
        /**
         *  ```
         *  align \start
         *  ```
         **/
        align(): string;
        /**
         *  ```
         *  text \
         *  ```
         **/
        text(): string;
    }
}

declare namespace $.$$ {
    class $mol_svg_text_box extends $.$mol_svg_text_box {
        box_width(): any;
        box_pos_x(): string;
        box_pos_y(): string;
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_plot_ruler extends $mol_plot_graph {
        /**
         *  ```
         *  step 0
         *  ```
         **/
        step(): number;
        /**
         *  ```
         *  scale_axis 1
         *  ```
         **/
        scale_axis(): number;
        /**
         *  ```
         *  scale_step 1
         *  ```
         **/
        scale_step(): number;
        /**
         *  ```
         *  shift_axis 1
         *  ```
         **/
        shift_axis(): number;
        /**
         *  ```
         *  dimensions_axis $mol_vector_range /
         *  	Infinity
         *  	-Infinity
         *  ```
         **/
        dimensions_axis(): $mol_vector_range<number>;
        /**
         *  ```
         *  viewport_axis $mol_vector_range /
         *  	Infinity
         *  	-Infinity
         *  ```
         **/
        viewport_axis(): $mol_vector_range<number>;
        /**
         *  ```
         *  axis_points /number
         *  ```
         **/
        axis_points(): readonly number[];
        /**
         *  ```
         *  normalize?val 0
         *  ```
         **/
        normalize(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  precision 1
         *  ```
         **/
        precision(): number;
        /**
         *  ```
         *  sub /
         *  	<= Background
         *  	<= Curve
         *  	<= labels_formatted
         *  	<= Title
         *  ```
         **/
        sub(): readonly any[];
        /**
         *  ```
         *  Background $mol_svg_rect
         *  	pos_x <= background_x
         *  	pos_y <= background_y
         *  	width <= background_width
         *  	height <= background_height
         *  ```
         **/
        Background(): $$.$mol_svg_rect;
        /**
         *  ```
         *  background_x \0
         *  ```
         **/
        background_x(): string;
        /**
         *  ```
         *  background_y \0
         *  ```
         **/
        background_y(): string;
        /**
         *  ```
         *  background_width \100%
         *  ```
         **/
        background_width(): string;
        /**
         *  ```
         *  background_height \14
         *  ```
         **/
        background_height(): string;
        /**
         *  ```
         *  Curve $mol_svg_path geometry <= curve
         *  ```
         **/
        Curve(): $mol_svg_path;
        /**
         *  ```
         *  curve \
         *  ```
         **/
        curve(): string;
        /**
         *  ```
         *  labels_formatted /
         *  ```
         **/
        labels_formatted(): readonly any[];
        /**
         *  ```
         *  Title $mol_svg_text_box
         *  	pos_x <= title_pos_x
         *  	pos_y <= title_pos_y
         *  	align <= title_align
         *  	text <= title
         *  ```
         **/
        Title(): $$.$mol_svg_text_box;
        /**
         *  ```
         *  title_pos_x \0
         *  ```
         **/
        title_pos_x(): string;
        /**
         *  ```
         *  title_pos_y \100%
         *  ```
         **/
        title_pos_y(): string;
        /**
         *  ```
         *  title_align \start
         *  ```
         **/
        title_align(): string;
        /**
         *  ```
         *  Label!index $mol_svg_text
         *  	pos <= label_pos!index
         *  	text <= label_text!index
         *  	align <= label_align
         *  ```
         **/
        Label(index: any): $$.$mol_svg_text;
        /**
         *  ```
         *  label_pos!index /
         *  	<= label_pos_x!index
         *  	<= label_pos_y!index
         *  ```
         **/
        label_pos(index: any): readonly any[];
        /**
         *  ```
         *  label_pos_x!index \
         *  ```
         **/
        label_pos_x(index: any): string;
        /**
         *  ```
         *  label_pos_y!index \
         *  ```
         **/
        label_pos_y(index: any): string;
        /**
         *  ```
         *  label_text!index \
         *  ```
         **/
        label_text(index: any): string;
        /**
         *  ```
         *  label_align \
         *  ```
         **/
        label_align(): string;
    }
}

declare namespace $.$$ {
    class $mol_plot_ruler extends $.$mol_plot_ruler {
        labels_formatted(): $mol_svg_text[];
        step(): number;
        snap_to_grid(coord: number): number;
        axis_points(): number[];
        precision(): number;
        label_text(index: number): string;
        font_size(): number;
        back(): $mol_svg_path[];
        front(): readonly $.$mol_svg[];
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_plot_ruler_vert extends $mol_plot_ruler {
        /**
         *  ```
         *  title_align \end
         *  ```
         **/
        title_align(): string;
        /**
         *  ```
         *  label_align \end
         *  ```
         **/
        label_align(): string;
        /**
         *  ```
         *  title_pos_y \14
         *  ```
         **/
        title_pos_y(): string;
        /**
         *  ```
         *  label_pos_x!v <= title_pos_x
         *  ```
         **/
        label_pos_x(v: any): string;
        /**
         *  ```
         *  background_height \100%
         *  ```
         **/
        background_height(): string;
        /**
         *  ```
         *  background_width <= title_pos_x
         *  ```
         **/
        background_width(): string;
    }
}

declare namespace $.$$ {
    class $mol_plot_ruler_vert extends $.$mol_plot_ruler_vert {
        dimensions_axis(): $mol_vector_range<number>;
        viewport_axis(): $mol_vector_range<number>;
        scale_axis(): number;
        scale_step(): number;
        shift_axis(): number;
        curve(): string;
        title_pos_x(): string;
        label_pos_y(index: number): string;
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_plot_ruler_hor extends $mol_plot_ruler {
        /**
         *  ```
         *  title_align \start
         *  ```
         **/
        title_align(): string;
        /**
         *  ```
         *  label_align \middle
         *  ```
         **/
        label_align(): string;
        /**
         *  ```
         *  title_pos_x \0
         *  ```
         **/
        title_pos_x(): string;
        /**
         *  ```
         *  title_pos_y \100%
         *  ```
         **/
        title_pos_y(): string;
        /**
         *  ```
         *  label_pos_y!v <= title_pos_y
         *  ```
         **/
        label_pos_y(v: any): string;
        /**
         *  ```
         *  background_width \100%
         *  ```
         **/
        background_width(): string;
    }
}

declare namespace $.$$ {
    class $mol_plot_ruler_hor extends $.$mol_plot_ruler_hor {
        dimensions_axis(): $mol_vector_range<number>;
        viewport_axis(): $mol_vector_range<number>;
        scale_axis(): number;
        scale_step(): number;
        shift_axis(): number;
        curve(): string;
        label_pos_x(index: number): string;
        background_y(): string;
        background_height(): string;
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_plot_mark_cross extends $mol_plot_graph {
        /**
         *  ```
         *  labels /string
         *  ```
         **/
        labels(): readonly string[];
        /**
         *  ```
         *  title_x_gap 4
         *  ```
         **/
        title_x_gap(): number;
        /**
         *  ```
         *  threshold 16
         *  ```
         **/
        threshold(): number;
        /**
         *  ```
         *  graphs /$mol_plot_graph
         *  ```
         **/
        graphs(): readonly $mol_plot_graph[];
        /**
         *  ```
         *  dimensions $mol_vector_2d /
         *  	<= dimensions_x
         *  	<= dimensions_y
         *  ```
         **/
        dimensions(): $mol_vector_2d<$mol_vector_range<number>>;
        /**
         *  ```
         *  dimensions_x $mol_vector_range /
         *  	Infinity
         *  	-Infinity
         *  ```
         **/
        dimensions_x(): $mol_vector_range<number>;
        /**
         *  ```
         *  dimensions_y $mol_vector_range /
         *  	Infinity
         *  	-Infinity
         *  ```
         **/
        dimensions_y(): $mol_vector_range<number>;
        /**
         *  ```
         *  sub /
         *  	<= Curve
         *  	<= Label_x
         *  	<= Label_y
         *  ```
         **/
        sub(): readonly any[];
        /**
         *  ```
         *  Curve $mol_svg_path geometry <= curve
         *  ```
         **/
        Curve(): $mol_svg_path;
        /**
         *  ```
         *  curve \
         *  ```
         **/
        curve(): string;
        /**
         *  ```
         *  Label_x $mol_svg_text_box
         *  	pos_x <= title_x_pos_x
         *  	pos_y <= title_x_pos_y
         *  	text <= title_x
         *  ```
         **/
        Label_x(): $$.$mol_svg_text_box;
        /**
         *  ```
         *  title_x_pos_x \0
         *  ```
         **/
        title_x_pos_x(): string;
        /**
         *  ```
         *  title_x_pos_y \100%
         *  ```
         **/
        title_x_pos_y(): string;
        /**
         *  ```
         *  title_x \
         *  ```
         **/
        title_x(): string;
        /**
         *  ```
         *  Label_y $mol_svg_text_box
         *  	pos_x <= title_y_pos_x
         *  	pos_y <= title_y_pos_y
         *  	text <= title_y
         *  ```
         **/
        Label_y(): $$.$mol_svg_text_box;
        /**
         *  ```
         *  title_y_pos_x \0
         *  ```
         **/
        title_y_pos_x(): string;
        /**
         *  ```
         *  title_y_pos_y \0
         *  ```
         **/
        title_y_pos_y(): string;
        /**
         *  ```
         *  title_y \
         *  ```
         **/
        title_y(): string;
    }
}

declare namespace $.$$ {
    class $mol_plot_mark_cross extends $.$mol_plot_mark_cross {
        nearest(): {
            value: $mol_vector_2d<number>;
            scaled: $mol_vector_2d<number>;
            index: number;
        };
        curve(): string;
        title_x(): string;
        title_x_pos_x(): string;
        title_x_pos_y(): string;
        title_y(): string;
        title_y_pos_y(): string;
    }
}

declare namespace $ {
}

declare namespace $ {
}

declare namespace $ {
    class $mpk_tss_reports_axle_chart extends $mol_chart {
        /**
         *  ```
         *  axle null
         *  ```
         **/
        axle(): any;
        /**
         *  ```
         *  carriage null
         *  ```
         **/
        carriage(): any;
        /**
         *  ```
         *  gap_left 48
         *  ```
         **/
        gap_left(): number;
        /**
         *  ```
         *  gap_right 16
         *  ```
         **/
        gap_right(): number;
        /**
         *  ```
         *  gap_bottom 24
         *  ```
         **/
        gap_bottom(): number;
        /**
         *  ```
         *  gap_top 16
         *  ```
         **/
        gap_top(): number;
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
        graphs(): readonly any[];
        /**
         *  ```
         *  Forces_left $mol_plot_dot
         *  	title <= forces_left_title
         *  	series_x <= forces_left_x
         *  	series_y <= forces_left_y
         *  	points_max <= points_max
         *  ```
         **/
        Forces_left(): $$.$mol_plot_dot;
        /**
         *  ```
         *  forces_left_title @ \Left wheel
         *  ```
         **/
        forces_left_title(): string;
        /**
         *  ```
         *  forces_left_x /number
         *  ```
         **/
        forces_left_x(): readonly number[];
        /**
         *  ```
         *  forces_left_y /number
         *  ```
         **/
        forces_left_y(): readonly number[];
        /**
         *  ```
         *  points_max 600
         *  ```
         **/
        points_max(): number;
        /**
         *  ```
         *  Forces_right $mol_plot_dot
         *  	title <= forces_right_title
         *  	series_x <= forces_right_x
         *  	series_y <= forces_right_y
         *  	points_max <= points_max
         *  ```
         **/
        Forces_right(): $$.$mol_plot_dot;
        /**
         *  ```
         *  forces_right_title @ \Right wheel
         *  ```
         **/
        forces_right_title(): string;
        /**
         *  ```
         *  forces_right_x /number
         *  ```
         **/
        forces_right_x(): readonly number[];
        /**
         *  ```
         *  forces_right_y /number
         *  ```
         **/
        forces_right_y(): readonly number[];
        /**
         *  ```
         *  Vert_ruler $mol_plot_ruler_vert title <= vert_title
         *  ```
         **/
        Vert_ruler(): $$.$mol_plot_ruler_vert;
        /**
         *  ```
         *  vert_title @ \kN
         *  ```
         **/
        vert_title(): string;
        /**
         *  ```
         *  Hor_ruler $mol_plot_ruler_hor
         *  	title <= hor_title
         *  	series_x <= forces_left_x
         *  ```
         **/
        Hor_ruler(): $$.$mol_plot_ruler_hor;
        /**
         *  ```
         *  hor_title @ \cm
         *  ```
         **/
        hor_title(): string;
        /**
         *  ```
         *  Cross $mol_plot_mark_cross graphs /
         *  	<= Forces_left
         *  	<= Forces_right
         *  ```
         **/
        Cross(): $$.$mol_plot_mark_cross;
    }
}

declare namespace $.$$ {
    class $mpk_tss_reports_axle_chart extends $.$mpk_tss_reports_axle_chart {
        axle(): $mpk_tss_reports_domain_axle;
        carriage(): $mpk_tss_reports_domain_carriage;
        wheel_left(): $mpk_tss_reports_domain_wheel;
        wheel_right(): $mpk_tss_reports_domain_wheel;
        forces_left_x(): readonly number[];
        forces_right_x(): readonly number[];
        forces_left_y(): readonly number[];
        forces_right_y(): readonly number[];
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mpk_tss_reports_carriage_details extends $mol_page {
        /**
         *  ```
         *  carriage null
         *  ```
         **/
        carriage(): any;
        /**
         *  ```
         *  title @ \Train %train_number | Carriage %carriage_number
         *  ```
         **/
        title(): string;
        /**
         *  ```
         *  minimal_width 1400
         *  ```
         **/
        minimal_width(): number;
        /**
         *  ```
         *  tools / <= Close
         *  ```
         **/
        tools(): readonly any[];
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
        Close(): $$.$mpk_tss_link;
        /**
         *  ```
         *  Close_icon $mol_icon_cross
         *  ```
         **/
        Close_icon(): $mol_icon_cross;
        /**
         *  ```
         *  body /
         *  	<= Main
         *  	<= Axle_chart
         *  ```
         **/
        body(): readonly any[];
        /**
         *  ```
         *  Main $mol_row sub /
         *  	<= Info
         *  	<= Axle_list
         *  ```
         **/
        Main(): $mol_row;
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
        Info(): $$.$mpk_tss_reports_carriage_link;
        /**
         *  ```
         *  Weight $mol_labeler
         *  	title <= total_weight_title
         *  	content / <= Weight_content
         *  ```
         **/
        Weight(): $mol_labeler;
        /**
         *  ```
         *  total_weight_title @ \Total weight
         *  ```
         **/
        total_weight_title(): string;
        /**
         *  ```
         *  Weight_content $mpk_tss_parameter_weight value <= total_weight
         *  ```
         **/
        Weight_content(): $mpk_tss_parameter_weight;
        /**
         *  ```
         *  total_weight 0
         *  ```
         **/
        total_weight(): number;
        /**
         *  ```
         *  Type $mol_labeler
         *  	title <= type_title
         *  	content / <= Type_content
         *  ```
         **/
        Type(): $mol_labeler;
        /**
         *  ```
         *  type_title @ \Type
         *  ```
         **/
        type_title(): string;
        /**
         *  ```
         *  Type_content $mpk_tss_reports_carriage_type value <= type
         *  ```
         **/
        Type_content(): $$.$mpk_tss_reports_carriage_type;
        /**
         *  ```
         *  type \
         *  ```
         **/
        type(): string;
        /**
         *  ```
         *  Length $mol_labeler
         *  	title <= length_title
         *  	content / <= Length_content
         *  ```
         **/
        Length(): $mol_labeler;
        /**
         *  ```
         *  length_title @ \Length
         *  ```
         **/
        length_title(): string;
        /**
         *  ```
         *  Length_content $mpk_tss_parameter_length value <= length
         *  ```
         **/
        Length_content(): $mpk_tss_parameter_length;
        /**
         *  ```
         *  length 0
         *  ```
         **/
        length(): number;
        /**
         *  ```
         *  Violation $mol_labeler
         *  	title <= violation_title
         *  	content / <= Violation_content
         *  ```
         **/
        Violation(): $mol_labeler;
        /**
         *  ```
         *  violation_title @ \Violation
         *  ```
         **/
        violation_title(): string;
        /**
         *  ```
         *  Violation_content $mpk_tss_reports_violation
         *  	empty true
         *  	status <= violation
         *  ```
         **/
        Violation_content(): $$.$mpk_tss_reports_violation;
        /**
         *  ```
         *  violation \
         *  ```
         **/
        violation(): string;
        axle_current(): $mpk_tss_reports_domain_axle;
        /**
         *  ```
         *  Axle_list $mpk_tss_reports_axle_list
         *  	carriage <= carriage
         *  	axle_current => axle_current
         *  ```
         **/
        Axle_list(): $$.$mpk_tss_reports_axle_list;
        /**
         *  ```
         *  Axle_chart $mpk_tss_reports_axle_chart
         *  	carriage <= carriage
         *  	axle <= axle_current
         *  ```
         **/
        Axle_chart(): $$.$mpk_tss_reports_axle_chart;
    }
}

declare namespace $.$$ {
    class $mpk_tss_reports_carriage_details extends $.$mpk_tss_reports_carriage_details {
        carriage(): $mpk_tss_reports_domain_carriage;
        title(): string;
        total_weight(): number;
        type(): $mpk_tss_reports_domain_carriage_type;
        violation(): $mpk_tss_reports_domain_violation;
        length(): number;
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mpk_tss_reports_carriage_list extends $mol_view {
        /**
         *  ```
         *  report null
         *  ```
         **/
        report(): any;
        /**
         *  ```
         *  title @ \Train № %train_number
         *  ```
         **/
        title(): string;
        /**
         *  ```
         *  pages /
         *  	<= Main
         *  	<= Carriage
         *  ```
         **/
        pages(): readonly any[];
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
        Main(): $mpk_tss_reports_carriage_page;
        /**
         *  ```
         *  filter_number?val \
         *  ```
         **/
        filter_number(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  filter_warning?val true
         *  ```
         **/
        filter_warning(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  event_top?e null
         *  ```
         **/
        event_top(e?: any, force?: $mol_mem_force): any;
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
        Details_close(): $$.$mpk_tss_link;
        /**
         *  ```
         *  Details_close_icon $mol_icon_cross
         *  ```
         **/
        Details_close_icon(): $mol_icon_cross;
        /**
         *  ```
         *  Carriages $mol_list rows <= carriage_links
         *  ```
         **/
        Carriages(): $$.$mol_list;
        /**
         *  ```
         *  carriage_links /
         *  ```
         **/
        carriage_links(): readonly any[];
        /**
         *  ```
         *  Carriage null
         *  ```
         **/
        Carriage(): any;
        /**
         *  ```
         *  Carriage_details!id $mpk_tss_reports_carriage_details
         *  	carriage <= carriage!id
         *  	event_top?e <=> focus_main?e
         *  ```
         **/
        Carriage_details(id: any): $$.$mpk_tss_reports_carriage_details;
        /**
         *  ```
         *  carriage!id null
         *  ```
         **/
        carriage(id: any): any;
        /**
         *  ```
         *  focus_main?e null
         *  ```
         **/
        focus_main(e?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  Carriage_link!id $mpk_tss_reports_carriage_link carriage <= carriage!id
         *  ```
         **/
        Carriage_link(id: any): $$.$mpk_tss_reports_carriage_link;
    }
}

declare namespace $.$$ {
    class $mpk_tss_reports_carriage_list extends $.$mpk_tss_reports_carriage_list {
        report(): $mpk_tss_reports_domain_report;
        carriages(): $mpk_tss_reports_domain_carriages;
        filter_warning(next?: boolean): boolean;
        title(): string;
        carriage(id: string): $mpk_tss_reports_domain_carriage;
        carriage_links(): $mpk_tss_reports_carriage_link[];
        carriage_id(next?: string): string;
        Carriage(): $mpk_tss_reports_carriage_details;
        focus_main(): void;
        filter_number(next?: string): string;
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mpk_tss_reports_train_list extends $mol_view {
        /**
         *  ```
         *  title @ \Reports
         *  ```
         **/
        title(): string;
        /**
         *  ```
         *  pages / <= Main
         *  ```
         **/
        pages(): readonly any[];
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
        Main(): $$.$mpk_tss_reports_train_page;
        /**
         *  ```
         *  event_top?e null
         *  ```
         **/
        event_top(e?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  tools /
         *  ```
         **/
        tools(): readonly any[];
        /**
         *  ```
         *  report_current_id?id \
         *  ```
         **/
        report_current_id(id?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  filter_number?val \
         *  ```
         **/
        filter_number(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  filter_warning?val true
         *  ```
         **/
        filter_warning(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  Reports $mpk_tss_card_list
         *  	current_id <= report_current_id?id
         *  	minimal_width 300
         *  	rows <= report_links
         *  ```
         **/
        Reports(): $$.$mpk_tss_card_list;
        /**
         *  ```
         *  report_links /
         *  ```
         **/
        report_links(): readonly any[];
        /**
         *  ```
         *  Report_link!id $mpk_tss_reports_train_link
         *  	minimal_height 100
         *  	report <= report!id
         *  ```
         **/
        Report_link(id: any): $$.$mpk_tss_reports_train_link;
        /**
         *  ```
         *  report!id null
         *  ```
         **/
        report(id: any): any;
        /**
         *  ```
         *  Report_details!id $mpk_tss_reports_carriage_list
         *  	report <= report!id
         *  	event_top?e <=> focus_main?e
         *  ```
         **/
        Report_details(id: any): $$.$mpk_tss_reports_carriage_list;
        /**
         *  ```
         *  focus_main?e null
         *  ```
         **/
        focus_main(e?: any, force?: $mol_mem_force): any;
    }
}

declare namespace $.$$ {
    class $mpk_tss_reports_train_list extends $.$mpk_tss_reports_train_list {
        domain(): $mpk_tss_reports_domain_trains;
        main_blended(): boolean;
        report_links(): $mpk_tss_reports_train_link[];
        report(id: string): $mpk_tss_reports_domain_report;
        filter_number(next?: string): string;
        filter_warning(next?: boolean): boolean;
        report_current_id(next?: string): string;
        pages(): any[];
        Details_pages(): readonly any[];
        focus_main(): void;
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_image extends $mol_view {
        /**
         *  ```
         *  dom_name \img
         *  ```
         **/
        dom_name(): string;
        /**
         *  ```
         *  field *
         *  	^
         *  	src <= uri
         *  	alt <= title
         *  ```
         **/
        field(): {
            "src": string;
            "alt": string;
        };
        /**
         *  ```
         *  uri \
         *  ```
         **/
        uri(): string;
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_form_field extends $mol_labeler {
        /**
         *  ```
         *  label /
         *  	<= name
         *  	<= Bid
         *  ```
         **/
        label(): readonly any[];
        /**
         *  ```
         *  name \
         *  ```
         **/
        name(): string;
        /**
         *  ```
         *  Bid $mol_view sub / <= bid
         *  ```
         **/
        Bid(): $mol_view;
        /**
         *  ```
         *  bid \
         *  ```
         **/
        bid(): string;
        /**
         *  ```
         *  Content <= control
         *  ```
         **/
        Content(): any;
        /**
         *  ```
         *  control null
         *  ```
         **/
        control(): any;
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_form extends $mol_view {
        /**
         *  ```
         *  submit_blocked false
         *  ```
         **/
        submit_blocked(): boolean;
        /**
         *  ```
         *  event *
         *  	^
         *  	keydown?event <=> keydown?event
         *  ```
         **/
        event(): {
            "keydown": (event?: any) => any;
        };
        /**
         *  ```
         *  keydown?event null
         *  ```
         **/
        keydown(event?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  submit?event null
         *  ```
         **/
        submit(event?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  sub /
         *  	<= Bar_fields
         *  	<= Bar_buttons
         *  ```
         **/
        sub(): readonly any[];
        /**
         *  ```
         *  Bar_fields $mol_view sub <= form_fields
         *  ```
         **/
        Bar_fields(): $mol_view;
        /**
         *  ```
         *  form_fields /$mol_form_field
         *  ```
         **/
        form_fields(): readonly $mol_form_field[];
        /**
         *  ```
         *  Bar_buttons $mol_row sub <= buttons
         *  ```
         **/
        Bar_buttons(): $mol_row;
        /**
         *  ```
         *  buttons /$mol_view
         *  ```
         **/
        buttons(): readonly $mol_view[];
    }
}

declare namespace $.$$ {
    class $mol_form extends $.$mol_form {
        submit_blocked(): boolean;
        keydown(next: KeyboardEvent): void;
    }
}

declare namespace $ {
    class $mpk_tss_login extends $mol_list {
        /**
         *  ```
         *  submit?v false
         *  ```
         **/
        submit(v?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  sub / <= Form
         *  ```
         **/
        sub(): readonly any[];
        /**
         *  ```
         *  Form $mol_form
         *  	form_fields /
         *  		<= Login_field
         *  		<= Password_field
         *  	buttons / <= Submit
         *  ```
         **/
        Form(): $$.$mol_form;
        /**
         *  ```
         *  Login_field $mol_form_field
         *  	name <= login_label
         *  	control <= Login
         *  ```
         **/
        Login_field(): $mol_form_field;
        /**
         *  ```
         *  login_label @ \User name
         *  ```
         **/
        login_label(): string;
        /**
         *  ```
         *  Login $mol_string value?val <=> login?val
         *  ```
         **/
        Login(): $$.$mol_string;
        /**
         *  ```
         *  login?val \
         *  ```
         **/
        login(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  Password_field $mol_form_field
         *  	name <= password_label
         *  	control <= Password
         *  ```
         **/
        Password_field(): $mol_form_field;
        /**
         *  ```
         *  password_label @ \Password
         *  ```
         **/
        password_label(): string;
        /**
         *  ```
         *  Password $mol_string
         *  	value?val <=> password?val
         *  	type \password
         *  ```
         **/
        Password(): $$.$mol_string;
        /**
         *  ```
         *  password?val \
         *  ```
         **/
        password(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  Submit $mol_button_major
         *  	sub / <= submit_label
         *  	event_click?val <=> event_submit?val
         *  	disabled <= submit_blocked
         *  ```
         **/
        Submit(): $mol_button_major;
        /**
         *  ```
         *  submit_label @ \Log In
         *  ```
         **/
        submit_label(): string;
        /**
         *  ```
         *  event_submit?val null
         *  ```
         **/
        event_submit(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  submit_blocked false
         *  ```
         **/
        submit_blocked(): boolean;
    }
}

declare namespace $.$$ {
    class $mpk_tss_login extends $.$mpk_tss_login {
        event_submit(): void;
    }
}

declare namespace $ {
    class $mpk_tss extends $mol_view {
        /**
         *  ```
         *  title \Terminal № %terminal_number | Traffic security system
         *  ```
         **/
        title(): string;
        /**
         *  ```
         *  attr * mol_theme <= theme
         *  ```
         **/
        attr(): {
            "mol_theme": string;
        };
        /**
         *  ```
         *  theme \$mol_theme_light
         *  ```
         **/
        theme(): string;
        /**
         *  ```
         *  terminal_text @ \Terminal № %terminal_number
         *  ```
         **/
        terminal_text(): string;
        /**
         *  ```
         *  sub /
         *  	<= Head
         *  	<= Body
         *  ```
         **/
        sub(): readonly any[];
        /**
         *  ```
         *  Head $mol_view sub /
         *  	<= Terminal_link
         *  	<= Logged_user
         *  ```
         **/
        Head(): $mol_view;
        /**
         *  ```
         *  Terminal_link $mol_button_minor
         *  	enabled false
         *  	sub / <= terminal_formatted_label
         *  ```
         **/
        Terminal_link(): $mol_button_minor;
        /**
         *  ```
         *  terminal_formatted_label \
         *  ```
         **/
        terminal_formatted_label(): string;
        Logged_user(): $mol_button_minor;
        /**
         *  ```
         *  Body $mpk_tss_main Logged_user => Logged_user
         *  ```
         **/
        Body(): $$.$mpk_tss_main;
    }
}
declare namespace $ {
    class $mpk_tss_main extends $mol_book {
        /**
         *  ```
         *  Logged_user null
         *  ```
         **/
        Logged_user(): any;
        /**
         *  ```
         *  User_link $mol_button_minor
         *  	event_click?event <=> logout_click?event
         *  	sub /
         *  		<= User_email
         *  		<= User_signout
         *  ```
         **/
        User_link(): $mol_button_minor;
        /**
         *  ```
         *  logout_click?event null
         *  ```
         **/
        logout_click(event?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  User_email $mol_view sub / <= logged_email
         *  ```
         **/
        User_email(): $mol_view;
        /**
         *  ```
         *  logged_email \
         *  ```
         **/
        logged_email(): string;
        /**
         *  ```
         *  User_signout $mpk_tss_icon_exit_to_app
         *  ```
         **/
        User_signout(): $mpk_tss_icon_exit_to_app;
        /**
         *  ```
         *  Menu_item!id $mpk_tss_link
         *  	arg <= menu_page_arg!id
         *  	title <= menu_page_title!id
         *  	copy_params / \login
         *  ```
         **/
        Menu_item(id: any): $$.$mpk_tss_link;
        /**
         *  ```
         *  menu_page_arg!id *
         *  ```
         **/
        menu_page_arg(id: any): {};
        /**
         *  ```
         *  menu_page_title!id \
         *  ```
         **/
        menu_page_title(id: any): string;
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
        menu_pages(): {
            "summary": $mpk_tss_summary;
            "software": $mpk_tss_software;
            "pereferial": $$.$mpk_tss_pereferial_list;
            "sensors": $mpk_tss_sensors;
            "reports": $$.$mpk_tss_reports_train_list;
        };
        /**
         *  ```
         *  Summary $mpk_tss_summary event_top?event <=> event_front_up?event
         *  ```
         **/
        Summary(): $mpk_tss_summary;
        /**
         *  ```
         *  Software $mpk_tss_software
         *  	tools <= common_tools
         *  	event_top?event <=> event_front_up?event
         *  ```
         **/
        Software(): $mpk_tss_software;
        /**
         *  ```
         *  Pereferial $mpk_tss_pereferial_list
         *  	tools <= common_tools
         *  	event_top?event <=> event_front_up?event
         *  ```
         **/
        Pereferial(): $$.$mpk_tss_pereferial_list;
        /**
         *  ```
         *  Sensors $mpk_tss_sensors
         *  	tools <= common_tools
         *  	event_top?event <=> event_front_up?event
         *  ```
         **/
        Sensors(): $mpk_tss_sensors;
        /**
         *  ```
         *  Reports $mpk_tss_reports_train_list
         *  	tools <= common_tools
         *  	event_top?event <=> event_front_up?event
         *  ```
         **/
        Reports(): $$.$mpk_tss_reports_train_list;
        /**
         *  ```
         *  common_tools / <= Details_close
         *  ```
         **/
        common_tools(): readonly any[];
        /**
         *  ```
         *  Details_close $mpk_tss_link
         *  	arg * page null
         *  	sub / <= Details_close_icon
         *  	copy_params / \login
         *  ```
         **/
        Details_close(): $$.$mpk_tss_link;
        /**
         *  ```
         *  Details_close_icon $mol_icon_cross
         *  ```
         **/
        Details_close_icon(): $mol_icon_cross;
        /**
         *  ```
         *  pages /
         *  	<= Sidebar
         *  	<= Summary
         *  	<= menu_pages
         *  	<= details
         *  ```
         **/
        pages(): readonly any[];
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
        Sidebar(): $$.$mol_page;
        /**
         *  ```
         *  Logo $mol_image
         *  	uri \mpk/tss/tss_logo.svg
         *  	event * click?val <=> event_top?val
         *  ```
         **/
        Logo(): $mol_image;
        /**
         *  ```
         *  event_top?val null
         *  ```
         **/
        event_top(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  sidebar_title @ \Menu
         *  ```
         **/
        sidebar_title(): string;
        /**
         *  ```
         *  sidebar_items /
         *  ```
         **/
        sidebar_items(): readonly any[];
        /**
         *  ```
         *  Login $mpk_tss_login submit?v <=> login_submit?v
         *  ```
         **/
        Login(): $$.$mpk_tss_login;
        /**
         *  ```
         *  login_submit?v false
         *  ```
         **/
        login_submit(v?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  Menu $mol_list rows <= menu_items
         *  ```
         **/
        Menu(): $$.$mol_list;
        /**
         *  ```
         *  menu_items /
         *  ```
         **/
        menu_items(): readonly any[];
        /**
         *  ```
         *  Foot_content $mol_row sub / <= Foot_text
         *  ```
         **/
        Foot_content(): $mol_row;
        /**
         *  ```
         *  Foot_text $mol_view sub / <= copyright
         *  ```
         **/
        Foot_text(): $mol_view;
        /**
         *  ```
         *  copyright @ \© %year MPK Software, Russia
         *  ```
         **/
        copyright(): string;
        /**
         *  ```
         *  details null
         *  ```
         **/
        details(): any;
        /**
         *  ```
         *  Placeholder $mpk_tss_placeholder title \
         *  ```
         **/
        Placeholder(): $mpk_tss_placeholder;
    }
}
declare namespace $ {
    class $mpk_tss_placeholder extends $mol_page {
        /**
         *  ```
         *  attr *
         *  	^
         *  	tabindex null
         *  ```
         **/
        attr(): {
            "tabindex": any;
        };
        /**
         *  ```
         *  title \
         *  ```
         **/
        title(): string;
        /**
         *  ```
         *  tools /
         *  ```
         **/
        tools(): readonly any[];
        /**
         *  ```
         *  body / <= Image
         *  ```
         **/
        body(): readonly any[];
        /**
         *  ```
         *  Image $mol_image uri \mpk/tss/placeholder.svg
         *  ```
         **/
        Image(): $mol_image;
    }
}

declare namespace $.$$ {
    class $mpk_tss extends $.$mpk_tss {
        terminal(): $mpk_tss_domain_terminal;
        title(): string;
        terminal_formatted_label(): string;
        get $(): $mol_ambient_context;
    }
    class $mpk_tss_main extends $.$mpk_tss_main {
        copyright(): string;
        current_user(): $mpk_tss_domain_user;
        login_submit(next?: boolean): void;
        entered(): boolean;
        Logged_user(): $mol_button_minor;
        logout_click(): void;
        menu_items(): $mpk_tss_link[];
        menu_page_arg(id: string): {
            page: string;
        };
        logged_email(): string;
        menu_page_title(id: string): any;
        page_id(next?: string): string;
        sidebar_items(): $mol_list[] | $mpk_tss_login[];
        pages(): any[];
    }
}

declare namespace $ {
}

declare namespace $ {
}

/// <reference types="node" />
declare namespace $ {
    function $mol_exec(dir: string, command: string, ...args: string[]): import("child_process").SpawnSyncReturns<Buffer>;
}

declare namespace $ {
}

declare namespace $ {
    class $mol_section extends $mol_list {
        /**
         *  ```
         *  rows /
         *  	<= Head
         *  	<= Content
         *  ```
         **/
        rows(): readonly any[];
        /**
         *  ```
         *  Head $mol_view sub <= head
         *  ```
         **/
        Head(): $mol_view;
        /**
         *  ```
         *  head /
         *  ```
         **/
        head(): readonly any[];
        /**
         *  ```
         *  Content null
         *  ```
         **/
        Content(): any;
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mpk_tss_summary_section extends $mol_section {
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mpk_tss_summary_status extends $mol_view {
        /**
         *  ```
         *  title \
         *  ```
         **/
        title(): string;
        /**
         *  ```
         *  statuses *
         *  	warning <= warning
         *  	error <= error
         *  	success <= success
         *  	ready <= ready
         *  ```
         **/
        statuses(): {
            "warning": string;
            "error": string;
            "success": string;
            "ready": string;
        };
        /**
         *  ```
         *  warning @ \Warning
         *  ```
         **/
        warning(): string;
        /**
         *  ```
         *  error @ \Error
         *  ```
         **/
        error(): string;
        /**
         *  ```
         *  success @ \Success
         *  ```
         **/
        success(): string;
        /**
         *  ```
         *  ready @ \Ready
         *  ```
         **/
        ready(): string;
        /**
         *  ```
         *  sub / <= title
         *  ```
         **/
        sub(): readonly any[];
        /**
         *  ```
         *  attr *
         *  	^
         *  	mpk_tss_summary_status_type <= type
         *  ```
         **/
        attr(): {
            "mpk_tss_summary_status_type": string;
        };
        /**
         *  ```
         *  type \success
         *  ```
         **/
        type(): string;
    }
}

declare namespace $.$$ {
    class $mpk_tss_summary_status extends $.$mpk_tss_summary_status {
        title(): string;
    }
}

declare namespace $ {
    class $mol_icon_tick extends $mol_icon {
        /**
         *  ```
         *  path \M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z
         *  ```
         **/
        path(): string;
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_check_box extends $mol_check {
        /**
         *  ```
         *  Icon $mol_icon_tick
         *  ```
         **/
        Icon(): $mol_icon_tick;
    }
}

declare namespace $ {
    class $mol_check_expand extends $mol_check {
        /**
         *  ```
         *  minimal_height 40
         *  ```
         **/
        minimal_height(): number;
        /**
         *  ```
         *  Icon $mol_icon_chevron
         *  ```
         **/
        Icon(): $mol_icon_chevron;
        /**
         *  ```
         *  level 0
         *  ```
         **/
        level(): number;
        /**
         *  ```
         *  style *
         *  	^
         *  	paddingLeft <= level_style
         *  ```
         **/
        style(): {
            "paddingLeft": string;
        };
        /**
         *  ```
         *  level_style \0px
         *  ```
         **/
        level_style(): string;
        /**
         *  ```
         *  checked?val <=> expanded?val
         *  ```
         **/
        checked(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  expanded?val false
         *  ```
         **/
        expanded(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  enabled <= expandable
         *  ```
         **/
        enabled(): boolean;
        /**
         *  ```
         *  expandable false
         *  ```
         **/
        expandable(): boolean;
    }
}

declare namespace $.$$ {
    class $mol_check_expand extends $.$mol_check_expand {
        level_style(): string;
        expandable(): boolean;
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_expander extends $mol_list {
        /**
         *  ```
         *  rows /
         *  	<= Label
         *  	<= Content
         *  ```
         **/
        rows(): readonly any[];
        /**
         *  ```
         *  Label $mol_view sub /
         *  	<= Trigger
         *  	<= Tools
         *  ```
         **/
        Label(): $mol_view;
        /**
         *  ```
         *  Trigger $mol_check_expand
         *  	checked?val <=> expanded?val
         *  	label <= label
         *  ```
         **/
        Trigger(): $$.$mol_check_expand;
        /**
         *  ```
         *  expanded?val false
         *  ```
         **/
        expanded(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  label / <= title
         *  ```
         **/
        label(): readonly any[];
        /**
         *  ```
         *  Tools null
         *  ```
         **/
        Tools(): any;
        /**
         *  ```
         *  Content $mol_view sub <= content
         *  ```
         **/
        Content(): $mol_view;
        /**
         *  ```
         *  content /
         *  ```
         **/
        content(): readonly any[];
    }
}

declare namespace $.$$ {
    class $mol_expander extends $.$mol_expander {
        rows(): $mol_view[];
    }
}

declare namespace $ {
}

declare namespace $ {
    interface $mol_syntax_token {
        name: string;
        found: string;
        chunks: string[];
    }
    class $mol_syntax {
        constructor(lexems: {
            [name: string]: RegExp;
        });
        'lexems()': {
            [name: string]: RegExp;
        };
        lexems(): {
            [name: string]: RegExp;
        };
        'rules()': {
            regExp: RegExp;
            name: string;
            size: number;
        }[];
        rules(): {
            regExp: RegExp;
            name: string;
            size: number;
        }[];
        'regExp()': RegExp;
        regExp(): RegExp;
        tokenize(text: string): $mol_syntax_token[];
    }
}

declare namespace $ {
    var $mol_syntax_md_flow: $mol_syntax;
    var $mol_syntax_md_line: $mol_syntax;
    const $mol_syntax_md_code: $mol_syntax;
}

declare namespace $ {
}

declare namespace $ {
    class $mol_float extends $mol_view {
    }
}

declare namespace $ {
    class $mol_grid extends $mol_scroll {
        /**
         *  ```
         *  row_height 40
         *  ```
         **/
        row_height(): number;
        /**
         *  ```
         *  row_ids /string[]
         *  ```
         **/
        row_ids(): readonly string[][];
        /**
         *  ```
         *  row_id!index null
         *  ```
         **/
        row_id(index: any): any;
        /**
         *  ```
         *  col_ids /
         *  ```
         **/
        col_ids(): readonly any[];
        /**
         *  ```
         *  records *
         *  ```
         **/
        records(): {};
        /**
         *  ```
         *  record!id null
         *  ```
         **/
        record(id: any): any;
        /**
         *  ```
         *  hierarchy null
         *  ```
         **/
        hierarchy(): any;
        /**
         *  ```
         *  hierarchy_col \
         *  ```
         **/
        hierarchy_col(): string;
        /**
         *  ```
         *  sub /
         *  	<= Head
         *  	<= Table
         *  ```
         **/
        sub(): readonly any[];
        /**
         *  ```
         *  Table $mol_grid_table sub <= rows
         *  ```
         **/
        Table(): $mol_grid_table;
        /**
         *  ```
         *  rows /$mol_view
         *  ```
         **/
        rows(): readonly $mol_view[];
        /**
         *  ```
         *  Head $mol_grid_row cells <= head_cells
         *  ```
         **/
        Head(): $mol_grid_row;
        /**
         *  ```
         *  head_cells /$mol_view
         *  ```
         **/
        head_cells(): readonly $mol_view[];
        /**
         *  ```
         *  Row!id $mol_grid_row
         *  	minimal_height <= row_height
         *  	cells <= cells!id
         *  ```
         **/
        Row(id: any): $mol_grid_row;
        /**
         *  ```
         *  cells!id /$mol_view
         *  ```
         **/
        cells(id: any): readonly $mol_view[];
        /**
         *  ```
         *  Cell!id $mol_view
         *  ```
         **/
        Cell(id: any): $mol_view;
        /**
         *  ```
         *  cell!id null
         *  ```
         **/
        cell(id: any): any;
        /**
         *  ```
         *  Cell_text!id $mol_grid_cell sub <= cell_content_text!id
         *  ```
         **/
        Cell_text(id: any): $mol_grid_cell;
        /**
         *  ```
         *  cell_content_text!id <= cell_content!id
         *  ```
         **/
        cell_content_text(id: any): readonly (string | number | boolean | Node | $mol_view)[];
        /**
         *  ```
         *  cell_content!id /$mol_view_content
         *  ```
         **/
        cell_content(id: any): readonly (string | number | boolean | Node | $mol_view)[];
        /**
         *  ```
         *  Cell_number!id $mol_grid_number sub <= cell_content_number!id
         *  ```
         **/
        Cell_number(id: any): $mol_grid_number;
        /**
         *  ```
         *  cell_content_number!id <= cell_content!id
         *  ```
         **/
        cell_content_number(id: any): readonly (string | number | boolean | Node | $mol_view)[];
        /**
         *  ```
         *  Col_head!id $mol_float
         *  	dom_name \th
         *  	sub <= col_head_content!id
         *  ```
         **/
        Col_head(id: any): $mol_float;
        /**
         *  ```
         *  col_head_content!id /$mol_view_content
         *  ```
         **/
        col_head_content(id: any): readonly (string | number | boolean | Node | $mol_view)[];
        /**
         *  ```
         *  Cell_branch!id $mol_check_expand
         *  	level <= cell_level!id
         *  	label <= cell_content!id
         *  	expanded?val <=> cell_expanded!id?val
         *  ```
         **/
        Cell_branch(id: any): $$.$mol_check_expand;
        /**
         *  ```
         *  cell_level!id 0
         *  ```
         **/
        cell_level(id: any): number;
        /**
         *  ```
         *  cell_expanded!id?val false
         *  ```
         **/
        cell_expanded(id: any, val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  Cell_content!id / <= Cell_dimmer!id
         *  ```
         **/
        Cell_content(id: any): readonly any[];
        /**
         *  ```
         *  Cell_dimmer!id $mol_dimmer
         *  	needle <= needle
         *  	haystack <= cell_value!id
         *  ```
         **/
        Cell_dimmer(id: any): $$.$mol_dimmer;
        /**
         *  ```
         *  needle \
         *  ```
         **/
        needle(): string;
        /**
         *  ```
         *  cell_value!id \
         *  ```
         **/
        cell_value(id: any): string;
    }
}
declare namespace $ {
    class $mol_grid_table extends $mol_list {
        /**
         *  ```
         *  dom_name \table
         *  ```
         **/
        dom_name(): string;
    }
}
declare namespace $ {
    class $mol_grid_row extends $mol_view {
        /**
         *  ```
         *  dom_name \tr
         *  ```
         **/
        dom_name(): string;
        /**
         *  ```
         *  sub <= cells
         *  ```
         **/
        sub(): readonly $mol_view[];
        /**
         *  ```
         *  cells /$mol_view
         *  ```
         **/
        cells(): readonly $mol_view[];
    }
}
declare namespace $ {
    class $mol_grid_cell extends $mol_view {
        /**
         *  ```
         *  dom_name \td
         *  ```
         **/
        dom_name(): string;
        /**
         *  ```
         *  minimal_height 40
         *  ```
         **/
        minimal_height(): number;
    }
}
declare namespace $ {
    class $mol_grid_number extends $mol_grid_cell {
    }
}

declare namespace $.$$ {
    interface $mol_grid_node {
        id: string;
        parent: $mol_grid_node;
        sub: $mol_grid_node[];
    }
    class $mol_grid extends $.$mol_grid {
        head_cells(): readonly $mol_view[];
        col_head_content(colId: string): readonly string[];
        rows(): readonly $mol_view[];
        cells(row_id: string[]): readonly $mol_view[];
        col_type(col_id: string): "number" | "text" | "branch";
        Cell(id: {
            row: string[];
            col: string;
        }): $mol_view;
        cell_content(id: {
            row: string[];
            col: string;
        }): any[];
        records(): any;
        record(id: string): any;
        record_ids(): string[];
        row_id(index: number): string;
        col_ids(): readonly string[];
        hierarchy(): {
            [id: string]: $mol_grid_node;
        };
        row_sub_ids(row: string[]): string[][];
        row_root_id(): string[];
        cell_level(id: {
            row: string[];
        }): number;
        row_ids(): readonly string[][];
        row_expanded(row_id: string[], next?: boolean): boolean;
        row_expanded_default(row_id: string[]): boolean;
        cell_expanded(id: {
            row: string[];
        }, next?: boolean): boolean;
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_text extends $mol_list {
        /**
         *  ```
         *  uri_base \
         *  ```
         **/
        uri_base(): string;
        /**
         *  ```
         *  text \
         *  ```
         **/
        text(): string;
        /**
         *  ```
         *  tokens /$mol_syntax_token
         *  ```
         **/
        tokens(): readonly $mol_syntax_token[];
        /**
         *  ```
         *  Quote!id $mol_text text <= quote_text!id
         *  ```
         **/
        Quote(id: any): $$.$mol_text;
        /**
         *  ```
         *  quote_text!id \
         *  ```
         **/
        quote_text(id: any): string;
        /**
         *  ```
         *  Row!id $mol_text_row
         *  	sub <= block_content!id
         *  	type <= block_type!id
         *  ```
         **/
        Row(id: any): $mol_text_row;
        /**
         *  ```
         *  block_content!id /
         *  ```
         **/
        block_content(id: any): readonly any[];
        /**
         *  ```
         *  block_type!id \
         *  ```
         **/
        block_type(id: any): string;
        /**
         *  ```
         *  Span!id $mol_text_span
         *  ```
         **/
        Span(id: any): $mol_text_span;
        /**
         *  ```
         *  Link!id $mol_text_link
         *  ```
         **/
        Link(id: any): $mol_text_link;
        /**
         *  ```
         *  Image!id $mol_text_image
         *  ```
         **/
        Image(id: any): $mol_text_image;
        /**
         *  ```
         *  Header!id $mol_text_header
         *  	level <= header_level!id
         *  	content <= header_content!id
         *  ```
         **/
        Header(id: any): $mol_text_header;
        /**
         *  ```
         *  header_level!id 0
         *  ```
         **/
        header_level(id: any): number;
        /**
         *  ```
         *  header_content!id /
         *  ```
         **/
        header_content(id: any): readonly any[];
        /**
         *  ```
         *  Table!id $mol_grid
         *  	head_cells <= table_head_cells!id
         *  	rows <= table_rows!id
         *  ```
         **/
        Table(id: any): $$.$mol_grid;
        /**
         *  ```
         *  table_head_cells!id /
         *  ```
         **/
        table_head_cells(id: any): readonly any[];
        /**
         *  ```
         *  table_rows!id /
         *  ```
         **/
        table_rows(id: any): readonly any[];
        /**
         *  ```
         *  Table_row!id $mol_grid_row cells <= table_cells!id
         *  ```
         **/
        Table_row(id: any): $mol_grid_row;
        /**
         *  ```
         *  table_cells!id /
         *  ```
         **/
        table_cells(id: any): readonly any[];
        /**
         *  ```
         *  Table_cell!id $mol_grid_cell sub <= table_cell_content!id
         *  ```
         **/
        Table_cell(id: any): $mol_grid_cell;
        /**
         *  ```
         *  table_cell_content!id /
         *  ```
         **/
        table_cell_content(id: any): readonly any[];
        /**
         *  ```
         *  Table_cell_head!id $mol_float sub <= table_cell_content!id
         *  ```
         **/
        Table_cell_head(id: any): $mol_float;
    }
}
declare namespace $ {
    class $mol_text_row extends $mol_view {
        /**
         *  ```
         *  minimal_height 40
         *  ```
         **/
        minimal_height(): number;
        /**
         *  ```
         *  attr *
         *  	^
         *  	mol_text_type <= type
         *  ```
         **/
        attr(): {
            "mol_text_type": string;
        };
        /**
         *  ```
         *  type \
         *  ```
         **/
        type(): string;
    }
}
declare namespace $ {
    class $mol_text_header extends $mol_view {
        /**
         *  ```
         *  dom_name \h
         *  ```
         **/
        dom_name(): string;
        /**
         *  ```
         *  minimal_height 50
         *  ```
         **/
        minimal_height(): number;
        /**
         *  ```
         *  attr *
         *  	^
         *  	mol_text_header_level <= level?val
         *  ```
         **/
        attr(): {
            "mol_text_header_level": any;
        };
        /**
         *  ```
         *  level?val 0
         *  ```
         **/
        level(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  sub <= content
         *  ```
         **/
        sub(): readonly any[];
        /**
         *  ```
         *  content /
         *  ```
         **/
        content(): readonly any[];
    }
}
declare namespace $ {
    class $mol_text_span extends $mol_view {
        /**
         *  ```
         *  dom_name \span
         *  ```
         **/
        dom_name(): string;
        /**
         *  ```
         *  attr *
         *  	^
         *  	mol_text_type <= type?val
         *  ```
         **/
        attr(): {
            "mol_text_type": any;
        };
        /**
         *  ```
         *  type?val \
         *  ```
         **/
        type(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  sub <= content?val
         *  ```
         **/
        sub(): any;
        /**
         *  ```
         *  content?val /
         *  ```
         **/
        content(val?: any, force?: $mol_mem_force): any;
    }
}
declare namespace $ {
    class $mol_text_link extends $mol_link {
        /**
         *  ```
         *  attr *
         *  	^
         *  	mol_text_type <= type?val
         *  ```
         **/
        attr(): {
            "mol_text_type": any;
            "href": string;
            "title": string;
            "target": string;
            "download": string;
            "mol_link_current": boolean;
        };
        /**
         *  ```
         *  type?val \
         *  ```
         **/
        type(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  uri <= link?val
         *  ```
         **/
        uri(): any;
        /**
         *  ```
         *  link?val \
         *  ```
         **/
        link(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  sub <= content?val
         *  ```
         **/
        sub(): any;
        /**
         *  ```
         *  content?val /
         *  ```
         **/
        content(val?: any, force?: $mol_mem_force): any;
    }
}
declare namespace $ {
    class $mol_text_image extends $mol_view {
        /**
         *  ```
         *  dom_name \object
         *  ```
         **/
        dom_name(): string;
        /**
         *  ```
         *  attr *
         *  	^
         *  	allowfullscreen true
         *  	mol_text_type <= type?val
         *  	data <= link?val
         *  ```
         **/
        attr(): {
            "allowfullscreen": boolean;
            "mol_text_type": any;
            "data": any;
        };
        /**
         *  ```
         *  type?val \
         *  ```
         **/
        type(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  link?val \
         *  ```
         **/
        link(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  sub / <= title?val
         *  ```
         **/
        sub(): readonly any[];
        /**
         *  ```
         *  title?val \
         *  ```
         **/
        title(val?: any, force?: $mol_mem_force): any;
    }
}

declare namespace $.$$ {
    class $mol_text extends $.$mol_text {
        tokens(): readonly $mol_syntax_token[];
        rows(): ($mol_grid | $mol_text | $mol_text_row | $mol_text_header)[];
        header_level(index: number): number;
        header_content(index: number): ($mol_text_span | $mol_text_link | $mol_text_image)[];
        quote_text(index: number): string;
        block_type(index: number): string;
        cell_contents(indexBlock: number): string[][];
        table_rows(blockId: number): $mol_grid_row[];
        table_head_cells(blockId: number): $mol_float[];
        table_cells(id: {
            block: number;
            row: number;
        }): $mol_grid_cell[];
        table_cell_content(id: {
            block: number;
            row: number;
            cell: number;
        }): ($mol_text_span | $mol_text_link | $mol_text_image)[];
        uri_base(): string;
        uri_resolve(uri: string): string;
        text2spans(prefix: string, text: string): ($mol_text_span | $mol_text_link | $mol_text_image)[];
        code2spans(prefix: string, text: string): $mol_text_span[];
        block_content(indexBlock: number): ($mol_view | string)[];
    }
}

declare namespace $ {
}

declare namespace $ {
}

declare namespace $ {
    class $mpk_tss_summary extends $mol_page {
        /**
         *  ```
         *  title @ \Summary
         *  ```
         **/
        title(): string;
        /**
         *  ```
         *  minimal_width 600
         *  ```
         **/
        minimal_width(): number;
        /**
         *  ```
         *  body /
         *  	<= Statuses
         *  	<= Log
         *  ```
         **/
        body(): readonly any[];
        /**
         *  ```
         *  Statuses $mpk_tss_summary_section Content <= Statuses_content
         *  ```
         **/
        Statuses(): $mpk_tss_summary_section;
        /**
         *  ```
         *  Statuses_content $mol_view sub /
         *  	<= All
         *  	<= Software
         *  	<= Sensors
         *  	<= Pereferials
         *  ```
         **/
        Statuses_content(): $mol_view;
        /**
         *  ```
         *  All $mpk_tss_summary_status type \warning
         *  ```
         **/
        All(): $$.$mpk_tss_summary_status;
        /**
         *  ```
         *  Software $mpk_tss_summary_item
         *  	title <= software_title
         *  	type \warning
         *  	arg * page \software
         *  ```
         **/
        Software(): $mpk_tss_summary_item;
        /**
         *  ```
         *  software_title @ \Software
         *  ```
         **/
        software_title(): string;
        /**
         *  ```
         *  Sensors $mpk_tss_summary_item
         *  	title <= sensors_title
         *  	type \ready
         *  	arg * page \sensors
         *  ```
         **/
        Sensors(): $mpk_tss_summary_item;
        /**
         *  ```
         *  sensors_title @ \Sensors
         *  ```
         **/
        sensors_title(): string;
        /**
         *  ```
         *  Pereferials $mpk_tss_summary_item
         *  	title <= pereferial_title
         *  	type \error
         *  	arg * page \pereferial
         *  ```
         **/
        Pereferials(): $mpk_tss_summary_item;
        /**
         *  ```
         *  pereferial_title @ \Pereferial
         *  ```
         **/
        pereferial_title(): string;
        /**
         *  ```
         *  Log $mol_expander
         *  	title <= log_title
         *  	Content <= Log_content
         *  ```
         **/
        Log(): $$.$mol_expander;
        /**
         *  ```
         *  log_title @ \Show log ...
         *  ```
         **/
        log_title(): string;
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
        Log_content(): $$.$mol_text;
    }
}
declare namespace $ {
    class $mpk_tss_summary_item extends $mpk_tss_link {
        /**
         *  ```
         *  copy_params / \login
         *  ```
         **/
        copy_params(): readonly any[];
        /**
         *  ```
         *  type \
         *  ```
         **/
        type(): string;
        /**
         *  ```
         *  sub /
         *  	<= Title
         *  	<= Status
         *  ```
         **/
        sub(): readonly any[];
        /**
         *  ```
         *  Title $mol_view sub / <= title
         *  ```
         **/
        Title(): $mol_view;
        /**
         *  ```
         *  Status $mpk_tss_summary_status type <= type
         *  ```
         **/
        Status(): $$.$mpk_tss_summary_status;
    }
}
