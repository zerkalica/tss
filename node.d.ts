declare namespace $ { }
export = $;
declare namespace $ {
    function $mol_offline(uri?: string): void;
}
declare namespace $ {
}
declare namespace $ {
    namespace $$ {
        let $$: typeof $;
    }
    type $mol_ambient_context = Window & {
        Promise: PromiseConstructor;
        Math: Math;
        XMLHttpRequest: typeof XMLHttpRequest;
    } & (typeof $.$$) & (typeof $);
    function $mol_ambient(this: $mol_ambient_context, overrides: Partial<$mol_ambient_context>): $mol_ambient_context;
}
declare namespace $ {
    namespace $$ { }
    class $mol_object {
        static $: $mol_ambient_context;
        readonly $: $mol_ambient_context;
        static make<Instance>(this: {
            new (): Instance;
        }, config: Partial<Instance>): Instance;
        static toString(): string;
        'object_owner()': any;
        object_owner(next?: any): any;
        'object_host()': any;
        object_host(next?: any): any;
        'object_field()': string;
        object_field(next?: string): string;
        object_id(next?: string): any;
        toString(): any;
        toJSON(): any;
        destructor(): void;
    }
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
    function $mol_fail_hidden(error: any): never;
    function $mol_fail(error: any): never;
}
declare namespace $ {
    function $mol_log(path: any, ...values: any[]): void;
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
    function $mol_log_group<Task extends Function, This>(name: string, task: Task): Task;
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
    var $mol_state_stack: Map<string, any>;
}
declare namespace $ {
    enum $mol_atom_status {
        obsolete = "obsolete",
        checking = "checking",
        pulling = "pulling",
        actual = "actual"
    }
    class $mol_atom<Value = any> extends $mol_object {
        masters: Set<$mol_atom<any>> | null;
        slaves: Set<$mol_atom<any>> | null;
        status: $mol_atom_status;
        readonly handler: (next?: Value, force?: $mol_atom_force) => Value | void;
        'value()': Value | Error | undefined;
        constructor(id: string, handler?: (next?: Value, force?: $mol_atom_force) => Value | void);
        destructor(): void;
        unlink(): void;
        get(force?: $mol_atom_force): Value;
        actualize(force?: $mol_atom_force): void;
        pull(force?: $mol_atom_force): any;
        _next: Value | undefined;
        _ignore: Value | undefined;
        set(next: Value): Value;
        push(next_raw?: Value | Error): Value;
        obsolete_slaves(): void;
        check_slaves(): void;
        check(): void;
        obsolete(): void;
        lead(slave: $mol_atom<any>): void;
        dislead(slave: $mol_atom<any>): void;
        obey(master: $mol_atom<any>): void;
        disobey(master: $mol_atom<any>): void;
        disobey_all(): void;
        cache(next?: Value | Error): Error | Value;
        value(next?: Value, force?: $mol_atom_force): Value;
        static stack: $mol_atom<any>[];
        static updating: $mol_atom<any>[];
        static reaping: Set<$mol_atom<any>>;
        static scheduled: boolean;
        static actualize(atom: $mol_atom<any>): void;
        static reap(atom: $mol_atom<any>): void;
        static unreap(atom: $mol_atom<any>): void;
        static schedule(): void;
        static sync(): void;
        then<Next>(done: (prev?: Value) => Next, fail?: (error: Error) => Next): $mol_atom<any>;
        catch(fail: (error: Error) => Value): $mol_atom<any>;
    }
    function $mol_atom_current<Value = any>(): $mol_atom<Value>;
    class $mol_atom_wait extends Error {
        name: string;
    }
    class $mol_atom_force extends Object {
        $mol_atom_force: boolean;
        static $mol_atom_force: boolean;
        static toString(): string;
    }
    class $mol_atom_force_cache extends $mol_atom_force {
    }
    class $mol_atom_force_update extends $mol_atom_force {
    }
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
            next(): IteratorResult<[Key, Value]>;
        };
    }
}
declare namespace $ {
    function $mol_mem<Host, Value>(obj: Host, name: string, descr: TypedPropertyDescriptor<(next?: Value, force?: $mol_atom_force) => Value>): void;
    function $mol_mem_key<Host, Key, Value>(obj: Host, name: string, descr: TypedPropertyDescriptor<(key: Key, next?: Value, force?: $mol_atom_force) => Value>): void;
}
declare var $node: any;
declare namespace $ {
}
declare namespace $ {
    var $mol_dom_context: Window & {
        Node: typeof Node;
        Element: typeof Element;
        HTMLElement: typeof HTMLElement;
        XMLHttpRequest: typeof XMLHttpRequest;
    };
}
declare namespace $ {
    class $mol_view_selection extends $mol_object {
        static focused(next?: Element[], force?: $mol_atom_force): Element[];
        static position(next?: {
            start: number;
            end: number;
            id: string;
        }, force?: $mol_atom_force): {
            start: number;
            end: number;
            id: string;
        };
        static onFocus(event: FocusEvent): void;
        static onBlur(event: FocusEvent): void;
    }
}
declare namespace $ {
    function $mol_dom_render_attributes(el: Element, attrs: {
        [key: string]: string | number | boolean;
    }): void;
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
    function $mol_dom_render_children(el: Element, childNodes: NodeList | readonly (Node | string | number | boolean | {
        dom_tree: () => Node;
    })[]): void;
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
    function $mol_func_name(func: Function): string;
    function $mol_func_name_from<Target extends Function>(target: Target, source: Function): Target;
}
declare namespace $ {
    namespace $$ { }
    namespace $mol { }
    function $mol_view_visible_width(): number;
    function $mol_view_visible_height(): number;
    function $mol_view_state_key(suffix: string): string;
    class $mol_view extends $mol_object {
        static Root(id: number): $mol_view;
        static autobind(): void;
        title(): string;
        focused(next?: boolean): boolean;
        context(next?: $mol_ambient_context): $mol_ambient_context;
        $: $mol_ambient_context;
        context_sub(): $mol_ambient_context;
        state_key(suffix?: string): string;
        dom_name(): string;
        dom_name_space(): string;
        sub(): readonly (string | number | boolean | Node | $mol_view)[];
        sub_visible(): readonly (string | number | boolean | Node | $mol_view)[];
        minimal_width(): number;
        minimal_height(): number;
        content_height(): number;
        dom_id(): any;
        dom_node(next?: Element): Element;
        dom_tree(next?: Element): Element;
        render(): void;
        static view_classes(): (typeof $mol_view)[];
        view_names_owned(): string[];
        view_names(): string[];
        attr_static(): {
            [key: string]: string | number | boolean;
        };
        attr(): {
            [key: string]: string | number | boolean;
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
}
declare namespace $ {
    const enum $mol_keyboard_code {
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
        bracketClose = 221,
        quoteSingle = 222
    }
}
declare namespace $ {
    class $mol_string extends $mol_view {
        dom_name(): string;
        enabled(): boolean;
        debounce(): number;
        minimal_height(): number;
        field(): {
            "disabled": boolean;
            "value": any;
            "placeholder": string;
            "type": any;
            "spellcheck": boolean;
        };
        disabled(): boolean;
        value_changed(val?: any, force?: $mol_atom_force): any;
        value(val?: any, force?: $mol_atom_force): any;
        hint(): string;
        type(val?: any, force?: $mol_atom_force): any;
        spellcheck(): boolean;
        attr(): {
            "maxlength": number;
        };
        length_max(): number;
        event(): {
            "input": (event?: any) => any;
            "keypress": (event?: any) => any;
        };
        event_change(event?: any, force?: $mol_atom_force): any;
        event_key_press(event?: any, force?: $mol_atom_force): any;
    }
}
declare namespace $.$$ {
    class $mol_string extends $.$mol_string {
        _timer: any;
        event_change(next?: Event): void;
        event_key_press(next?: KeyboardEvent): void;
        disabled(): boolean;
    }
}
declare namespace $ {
    class $mol_svg extends $mol_view {
        dom_name(): string;
        dom_name_space(): string;
    }
}
declare namespace $ {
    class $mol_svg_root extends $mol_svg {
        dom_name(): string;
        attr(): {
            "viewBox": string;
            "preserveAspectRatio": string;
        };
        view_box(): string;
        aspect(): string;
    }
}
declare namespace $ {
    class $mol_svg_path extends $mol_svg {
        dom_name(): string;
        attr(): {
            "d": string;
        };
        geometry(): string;
    }
}
declare namespace $ {
    class $mol_icon extends $mol_svg_root {
        view_box(): string;
        sub(): readonly any[];
        Path(): $mol_svg_path;
        path(): string;
    }
}
declare namespace $ {
    class $mol_button extends $mol_view {
        enabled(): boolean;
        minimal_height(): number;
        click(event?: any, force?: $mol_atom_force): any;
        event_click(event?: any, force?: $mol_atom_force): any;
        event(): {
            "click": (event?: any) => any;
            "keypress": (event?: any) => any;
        };
        event_activate(event?: any, force?: $mol_atom_force): any;
        event_key_press(event?: any, force?: $mol_atom_force): any;
        attr(): {
            "disabled": boolean;
            "role": string;
            "tabindex": number;
            "title": string;
        };
        disabled(): boolean;
        tab_index(): number;
        hint(): string;
        sub(): readonly any[];
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
    class $mol_button_typed extends $mol_button {
    }
}
declare namespace $ {
    class $mol_button_major extends $mol_button_typed {
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
    class $mol_state_local<Value> extends $mol_object {
        static 'native()': Pick<Storage, 'getItem' | 'setItem' | 'removeItem'>;
        static native(): Storage | {
            getItem(key: string): any;
            setItem(key: string, value: string): void;
            removeItem(key: string): void;
        };
        static value<Value>(key: string, next?: Value, force?: $mol_atom_force): Value;
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
declare namespace $ {
    class $mol_file extends $mol_object {
        static absolute(path: string): $mol_file;
        static relative(path: string): $mol_file;
        path(): string;
        watcher(): any;
        stat(next?: any, force?: $mol_atom_force): any;
        version(): any;
        exists(next?: boolean): boolean;
        parent(): $mol_file;
        type(): "dir" | "link" | "file" | "blocks" | "chars" | "fifo" | "socket";
        name(): any;
        ext(): string;
        content(next?: string, force?: $mol_atom_force): any;
        reader(): any;
        writer(): any;
        sub(): $mol_file[];
        resolve(path: string): $mol_file;
        relate(base?: $mol_file): any;
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
    class $mol_plugin extends $mol_object {
        dom_node(): any;
        attr_static(): {};
        event(): {};
        event_async(): {};
    }
}
declare namespace $.$$ {
    class $mol_plugin extends $.$mol_plugin {
        dom_node(): any;
        render(): any;
    }
}
declare namespace $ {
    class $mol_state_time extends $mol_object {
        static now(precision?: number, next?: number, force?: $mol_atom_force): number;
    }
}
declare namespace $ {
    class $mol_meter extends $mol_plugin {
        zoom(): number;
        width(val?: any, force?: $mol_atom_force): any;
        height(val?: any, force?: $mol_atom_force): any;
        left(val?: any, force?: $mol_atom_force): any;
        right(val?: any, force?: $mol_atom_force): any;
        bottom(val?: any, force?: $mol_atom_force): any;
        top(val?: any, force?: $mol_atom_force): any;
    }
}
declare namespace $.$$ {
    class $mol_meter extends $.$mol_meter {
        rect(): {
            left: any;
            top: any;
            right: any;
            bottom: any;
            width: any;
            height: any;
            zoom: number;
        };
        top(): any;
        bottom(): any;
        left(): any;
        right(): any;
        width(): any;
        height(): any;
        zoom(): number;
    }
}
declare namespace $ {
    class $mol_touch extends $mol_plugin {
        start_zoom(val?: any, force?: $mol_atom_force): any;
        start_distance(val?: any, force?: $mol_atom_force): any;
        zoom(val?: any, force?: $mol_atom_force): any;
        start_pan(val?: any, force?: $mol_atom_force): any;
        pan(val?: any, force?: $mol_atom_force): any;
        start_pos(val?: any, force?: $mol_atom_force): any;
        swipe_precision(): number;
        swipe_right(val?: any, force?: $mol_atom_force): any;
        swipe_bottom(val?: any, force?: $mol_atom_force): any;
        swipe_left(val?: any, force?: $mol_atom_force): any;
        swipe_top(val?: any, force?: $mol_atom_force): any;
        swipe_from_right(val?: any, force?: $mol_atom_force): any;
        swipe_from_bottom(val?: any, force?: $mol_atom_force): any;
        swipe_from_left(val?: any, force?: $mol_atom_force): any;
        swipe_from_top(val?: any, force?: $mol_atom_force): any;
        swipe_to_right(val?: any, force?: $mol_atom_force): any;
        swipe_to_bottom(val?: any, force?: $mol_atom_force): any;
        swipe_to_left(val?: any, force?: $mol_atom_force): any;
        swipe_to_top(val?: any, force?: $mol_atom_force): any;
        event(): {
            "touchstart": (event?: any) => any;
            "touchmove": (event?: any) => any;
            "touchend": (event?: any) => any;
            "mousedown": (event?: any) => any;
            "mousemove": (event?: any) => any;
            "mouseup": (event?: any) => any;
        };
        event_start(event?: any, force?: $mol_atom_force): any;
        event_move(event?: any, force?: $mol_atom_force): any;
        event_end(event?: any, force?: $mol_atom_force): any;
        event_async(): {
            "wheel": (event?: any) => any;
        };
        event_wheel(event?: any, force?: $mol_atom_force): any;
    }
}
declare namespace $.$$ {
    class $mol_touch extends $.$mol_touch {
        event_start(event?: TouchEvent | MouseEvent): void;
        event_move(event?: TouchEvent | MouseEvent): void;
        swipe_left(event?: TouchEvent | MouseEvent): void;
        swipe_right(event?: TouchEvent | MouseEvent): void;
        swipe_top(event?: TouchEvent | MouseEvent): void;
        swipe_bottom(event?: TouchEvent | MouseEvent): void;
        event_end(event?: TouchEvent): void;
        event_wheel(event?: WheelEvent): void;
    }
}
declare namespace $ {
    class $mol_ghost extends $mol_view {
        Sub(): $mol_view;
    }
}
declare namespace $.$$ {
    class $mol_ghost extends $.$mol_ghost {
        dom_node(): Element;
        dom_tree(): Element;
        title(): string;
    }
}
declare namespace $ {
    class $mol_book extends $mol_view {
        sub(): readonly any[];
        pages_wrapped(): readonly any[];
        pages(): readonly any[];
        plugins(): readonly any[];
        width(): any;
        Meter(): $mol_meter;
        Touch(): $mol_touch;
        event_front_up(val?: any, force?: $mol_atom_force): any;
        event_front_down(val?: any, force?: $mol_atom_force): any;
        Page(index: any): $mol_book_page;
        page(index: any): any;
        page_visible(index: any): boolean;
        Placeholder(): $mol_book_placeholder;
    }
}
declare namespace $ {
    class $mol_book_placeholder extends $mol_view {
        minimal_width(): number;
        attr(): {
            "tabindex": any;
        };
    }
}
declare namespace $ {
    class $mol_book_page extends $mol_ghost {
        attr(): {
            "tabindex": number;
            "mol_book_page_focused": boolean;
            "mol_book_page_visible": boolean;
        };
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
    class $mpk_tss_icon_train extends $mol_icon {
        path(): string;
    }
}
declare namespace $ {
    class $mpk_tss_icon_exit_to_app extends $mol_icon {
        path(): string;
    }
}
declare namespace $ {
    class $mpk_tss_icon_autorenew extends $mol_icon {
        path(): string;
    }
}
declare namespace $ {
    class $mpk_tss_icon_cloud_download extends $mol_icon {
        path(): string;
    }
}
declare namespace $ {
    class $mpk_tss_icon_done extends $mol_icon {
        path(): string;
    }
}
declare namespace $ {
    class $mpk_tss_icon_schedule extends $mol_icon {
        path(): string;
    }
}
declare namespace $ {
    class $mpk_tss_icon_error extends $mol_icon {
        path(): string;
    }
}
declare namespace $ {
    class $mpk_tss_icon_warning extends $mol_icon {
        path(): string;
    }
}
declare namespace $ {
    class $mpk_tss_icon_sync extends $mol_icon {
        path(): string;
    }
}
declare namespace $ {
    class $mpk_tss_icon_clear extends $mol_icon {
        path(): string;
    }
}
declare namespace $ {
    class $mpk_tss_icon_block extends $mol_icon {
        path(): string;
    }
}
declare namespace $ {
    class $mpk_tss_icon_circle_outline extends $mol_icon {
        path(): string;
    }
}
declare namespace $ {
    class $mpk_tss_icon_round_warning extends $mol_icon {
        path(): string;
    }
}
declare namespace $ {
    class $mol_state_arg extends $mol_object {
        prefix: string;
        static href(next?: string): string;
        static dict(next?: {
            [key: string]: string;
        }): {
            [key: string]: any;
        };
        static value(key: string, next?: string): any;
        static link(next: any): string;
        static make_link(next: {
            [key: string]: any;
        }): string;
        constructor(prefix?: string);
        value(key: string, next?: string): any;
        sub(postfix: string): $mol_state_arg;
        link(next: {
            [key: string]: string;
        }): string;
    }
}
declare namespace $ {
    class $mol_link extends $mol_view {
        minimal_height(): number;
        dom_name(): string;
        attr(): {
            "href": string;
            "title": string;
            "target": string;
            "download": string;
            "mol_link_current": boolean;
        };
        uri(): string;
        hint(): string;
        target(): string;
        file_name(): string;
        current(): boolean;
        sub(): readonly any[];
        arg(): {};
        event(): {
            "click": (event?: any) => any;
        };
        click(event?: any, force?: $mol_atom_force): any;
        event_click(event?: any, force?: $mol_atom_force): any;
    }
}
declare namespace $.$$ {
    class $mol_link extends $.$mol_link {
        uri(): string;
        current(): boolean;
        event_click(event?: Event): void;
        file_name(): string;
    }
}
declare namespace $ {
    class $mol_scroll extends $mol_view {
        minimal_height(): number;
        moving_hor(val?: any, force?: $mol_atom_force): any;
        moving_vert(val?: any, force?: $mol_atom_force): any;
        field(): {
            "scrollTop": any;
            "scrollLeft": any;
            "scrollBottom": any;
            "scrollRight": any;
        };
        scroll_top(val?: any, force?: $mol_atom_force): any;
        scroll_left(val?: any, force?: $mol_atom_force): any;
        scroll_bottom(val?: any, force?: $mol_atom_force): any;
        scroll_right(val?: any, force?: $mol_atom_force): any;
        event_async(): {
            "scroll": (event?: any) => any;
        };
        event_scroll(event?: any, force?: $mol_atom_force): any;
        Strut(): $mol_view;
        strut_transform(): string;
    }
}
declare namespace $.$$ {
    function $mol_scroll_top(): number;
    function $mol_scroll_left(): number;
    function $mol_scroll_moving(): boolean;
    function $mol_scroll_moving_vert(): boolean;
    function $mol_scroll_moving_hor(): boolean;
    class $mol_scroll extends $.$mol_scroll {
        scroll_bottom(next?: number): number;
        scroll_right(next?: number): number;
        event_scroll(next?: Event): void;
        event_repos(next?: Event): void;
        _moving_task_timer: any;
        moving_task_stop(): void;
        moving(): any;
        context_sub(): $mol_ambient_context;
        strut_transform(): string;
        sub_visible(): (string | number | boolean | Node | $mol_view)[];
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
    class $mol_page extends $mol_view {
        sub(): readonly any[];
        Head(): $mol_view;
        head(): readonly any[];
        Title(): $mol_button;
        event_top(val?: any, force?: $mol_atom_force): any;
        Tools(): $mol_view;
        tools(): readonly any[];
        Body(): $mol_scroll;
        body_scroll_top(val?: any, force?: $mol_atom_force): any;
        body(): readonly any[];
        Foot(): $mol_view;
        foot(): readonly any[];
    }
}
declare namespace $.$$ {
    class $mol_page extends $.$mol_page {
        body_scroll_top(next?: number): number;
    }
}
declare namespace $ {
    class $mol_filler extends $mol_view {
        minimal_height(): number;
        sub(): readonly any[];
    }
}
declare namespace $ {
    class $mpk_tss_software extends $mol_page {
        title(): string;
        body(): readonly any[];
        Content(): $mol_filler;
    }
}
declare namespace $ {
    class $mol_list extends $mol_view {
        sub(): readonly any[];
        rows(): readonly any[];
        Empty(): any;
    }
}
declare namespace $.$$ {
    class $mol_list extends $.$mol_list {
        sub(): readonly any[];
        row_offsets(): number[];
        row_context(index: number): $mol_ambient_context;
        sub_visible(): readonly any[];
        minimal_height(): number;
    }
}
declare namespace $ {
    class $mol_icon_cross extends $mol_icon {
        path(): string;
    }
}
declare namespace $ {
    class $mpk_tss_parameter_unknown extends $mol_view {
        sub(): readonly any[];
        title(): string;
    }
}
declare namespace $ {
    class $mol_row extends $mol_view {
    }
}
declare namespace $ {
    class $mol_row_sub extends $mol_view {
    }
}
declare namespace $.$$ {
    class $mol_row extends $.$mol_row {
        item_offsets_top(): number[];
        sub_visible(): (string | number | boolean | Node | $mol_view)[];
        minimal_height(): number;
    }
}
declare namespace $ {
    class $mol_labeler extends $mol_view {
        sub(): readonly any[];
        Title(): $mol_view;
        label(): readonly any[];
        Content(): $mol_view;
        content(): any;
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
        readonly year: number;
        readonly month: number;
        readonly day: number;
        readonly hour: number;
        readonly minute: number;
        readonly second: number;
        readonly offset: $mol_time_duration;
        readonly weekday: number;
        private _native;
        readonly native: Date;
        private _normal;
        readonly normal: $mol_time_moment;
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
    class $mpk_tss_todo extends Error {
        name: string;
    }
    class $mpk_tss_todo_unknown extends Error {
        name: string;
    }
}
declare namespace $ {
    class $mpk_tss_parameter_date extends $mol_view {
        date(): any;
        sub(): readonly any[];
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
    class $mpk_tss_parameter extends $mol_row {
        Unknown_value(): $mpk_tss_parameter_unknown;
        Unknown_updated(): $mpk_tss_parameter_unknown;
        value(): any;
        updated(): any;
        sub(): readonly any[];
        Name(): $mol_labeler;
        name_title(): string;
        name(): string;
        Value(): $mol_labeler;
        value_title(): string;
        Value_content(): any;
        Updated(): $mol_labeler;
        updated_title(): string;
        Updated_value(): any;
        Date(): $mpk_tss_parameter_date;
    }
}
declare namespace $.$$ {
    class $mpk_tss_parameter extends $.$mpk_tss_parameter {
        Value_content(): any;
        Updated_value(): $.$mpk_tss_parameter_date | $mpk_tss_parameter_unknown;
    }
}
declare namespace $ {
    class $mpk_tss_parameter_list extends $mol_list {
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
        battery_level(): number;
        battery_time(): $mol_time_duration;
    }
}
declare namespace $ {
    class $mpk_tss_pereferial_status extends $mol_view {
        status(): any;
        colors(): boolean;
        statuses(): {
            "ready": string;
            "error": string;
            "not_responding": string;
            "inactive": string;
            "unknown": string;
        };
        ready(): string;
        error(): string;
        not_responding(): string;
        inactive(): string;
        unknown(): string;
        sub(): readonly any[];
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
        status(): any;
        statuses(): {
            "linein": string;
            "internal": string;
        };
        linein(): string;
        internal(): string;
        sub(): readonly any[];
        status_text(): string;
    }
}
declare namespace $.$$ {
    class $mpk_tss_pereferial_source extends $.$mpk_tss_pereferial_source {
        status_text(): any;
    }
}
declare namespace $ {
    class $mpk_tss_parameter_voltage extends $mol_view {
        sub(): readonly any[];
        value(): number;
        spacer(): string;
        unit(): string;
    }
}
declare namespace $ {
    class $mpk_tss_parameter_duration extends $mol_view {
        minutes(): string;
        value(): any;
        sub(): readonly any[];
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
    class $mpk_tss_pereferial_ups extends $mpk_tss_parameter_list {
        unit(): any;
        rows(): readonly any[];
        Status(): $mpk_tss_parameter;
        status_title(): string;
        status(): any;
        updated(): any;
        Power(): $mpk_tss_parameter;
        power_title(): string;
        power_source(): any;
        Voltage(): $mpk_tss_parameter;
        voltage_title(): string;
        voltage(): any;
        Bat_level(): $mpk_tss_parameter;
        bat_level_title(): string;
        battery_level(): any;
        Bat_time(): $mpk_tss_parameter;
        bat_time_title(): string;
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
    class $mpk_tss_pereferial_details extends $mol_page {
        unit(): any;
        minimal_width(): number;
        tools(): readonly any[];
        Details_close(): $mol_link;
        Details_close_icon(): $mol_icon_cross;
        body(): readonly any[];
        unit_details(): any;
        Ups(): $mpk_tss_pereferial_ups;
    }
}
declare namespace $.$$ {
    class $mpk_tss_pereferial_details extends $.$mpk_tss_pereferial_details {
        unit(): $mpk_tss_pereferial_domain_unit;
        title(): string;
        type(): $mpk_tss_pereferial_domain_type;
        name(): string;
        unit_details(): $.$mpk_tss_pereferial_ups;
    }
}
declare namespace $ {
    class $mol_card extends $mol_list {
        attr(): {
            "mol_card_status_type": string;
        };
        status(): string;
        rows(): readonly any[];
        Content(): $mol_view;
        content(): readonly any[];
        Status(): $mol_view;
        status_text(): string;
    }
}
declare namespace $.$$ {
    class $mol_card extends $.$mol_card {
        rows(): $mol_view[];
    }
}
declare namespace $ {
    class $mpk_tss_card extends $mol_link {
        minimal_height(): number;
        sub(): readonly any[];
        Card(): $mol_card;
        status(): string;
        Status(): $mol_view;
        Status_text(): any;
        Tools(): $mol_view;
        tools(): readonly any[];
        Status_action(): $mol_button_minor;
        status_click(event?: any, force?: $mol_atom_force): any;
        Status_icon(): $mpk_tss_icon_cloud_download;
        Content(): $mol_row;
        items(): readonly any[];
    }
}
declare namespace $ {
    class $mpk_tss_pereferial_link extends $mpk_tss_card {
        unit(): any;
        arg(): {
            "unit": string;
        };
        unit_id(): string;
        status(): string;
        unit_status(): string;
        Status_text(): $mpk_tss_pereferial_status;
        Status_icon(): $mpk_tss_icon_autorenew;
        status_click(event?: any, force?: $mol_atom_force): any;
        unit_status_click(event?: any, force?: $mol_atom_force): any;
        items(): readonly any[];
        Type_item(): $mol_labeler;
        type_title(): string;
        type(): string;
        Name_item(): $mol_labeler;
        name_title(): string;
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
    class $mol_bar extends $mol_view {
    }
}
declare namespace $ {
    class $mol_pop extends $mol_view {
        showed(val?: any, force?: $mol_atom_force): any;
        plugins(): readonly any[];
        top(): any;
        bottom(): any;
        left(): any;
        right(): any;
        Meter(): $mol_meter;
        sub(): readonly any[];
        Anchor(): any;
        Bubble(): $mol_pop_bubble;
        align(): string;
        bubble_content(): readonly any[];
        height_max(): number;
    }
}
declare namespace $ {
    class $mol_pop_bubble extends $mol_scroll {
        sub(): readonly any[];
        content(): readonly any[];
        style(): {
            "maxHeight": number;
        };
        height_max(): number;
        attr(): {
            "mol_pop_align": string;
            "tabindex": number;
        };
        align(): string;
    }
}
declare namespace $.$$ {
    class $mol_pop extends $.$mol_pop {
        sub(): any[];
        height_max(): number;
        align(): string;
    }
}
declare namespace $ {
    class $mol_dimmer extends $mol_view {
        haystack(): string;
        needle(): string;
        sub(): readonly any[];
        parts(): readonly any[];
        Low(id: any): $mol_view;
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
    class $mol_nav extends $mol_plugin {
        cycle(val?: any, force?: $mol_atom_force): any;
        mod_ctrl(): boolean;
        mod_shift(): boolean;
        mod_alt(): boolean;
        keys_x(val?: any, force?: $mol_atom_force): any;
        keys_y(val?: any, force?: $mol_atom_force): any;
        current_x(val?: any, force?: $mol_atom_force): any;
        current_y(val?: any, force?: $mol_atom_force): any;
        event_up(event?: any, force?: $mol_atom_force): any;
        event_down(event?: any, force?: $mol_atom_force): any;
        event_left(event?: any, force?: $mol_atom_force): any;
        event_right(event?: any, force?: $mol_atom_force): any;
        event(): {
            "keydown": (event?: any) => any;
        };
        event_key(event?: any, force?: $mol_atom_force): any;
    }
}
declare namespace $.$$ {
    class $mol_nav extends $.$mol_nav {
        event_key(event?: KeyboardEvent): void;
        event_up(event?: KeyboardEvent): void;
        event_down(event?: KeyboardEvent): void;
        event_left(event?: KeyboardEvent): void;
        event_right(event?: KeyboardEvent): void;
        index_y(): any;
        index_x(): any;
    }
}
declare namespace $ {
    class $mol_icon_chevron extends $mol_icon {
        path(): string;
    }
}
declare namespace $ {
    function $mol_match_text<Variant>(query: string, values: (variant: Variant) => string[]): (variant: Variant) => boolean;
}
declare namespace $ {
    class $mol_select extends $mol_pop {
        dictionary(): {};
        options(): readonly any[];
        value(val?: any, force?: $mol_atom_force): any;
        minimal_height(): number;
        Option_row(id: any): $mol_button_minor;
        event_select(id: any, event?: any, force?: $mol_atom_force): any;
        option_content(id: any): readonly any[];
        Option_label(id: any): $mol_dimmer;
        option_label(id: any): string;
        filter_pattern(val?: any, force?: $mol_atom_force): any;
        No_options(): $mol_view;
        no_options_message(): string;
        plugins(): readonly any[];
        Nav(): $mol_nav;
        nav_components(): readonly any[];
        option_focused(component?: any, force?: $mol_atom_force): any;
        nav_cycle(val?: any, force?: $mol_atom_force): any;
        showed(): boolean;
        options_showed(): boolean;
        Anchor(): $mol_button_minor;
        Trigger(): $mol_button_minor;
        trigger_content(): readonly any[];
        option_content_current(): readonly any[];
        Filter(): $mol_string;
        filter_hint(): string;
        hint(): string;
        debounce(): number;
        Trigger_icon(): $mol_icon_chevron;
        bubble_content(): readonly any[];
        Menu(): $mol_list;
        menu_content(): readonly any[];
        option_rows(): readonly any[];
    }
}
declare namespace $.$$ {
    class $mol_select extends $.$mol_select {
        filter_pattern(next?: string): string;
        options_showed(): boolean;
        options(): string[];
        options_filtered(): string[];
        option_label(id: string): any;
        option_rows(): $mol_view[] | $mol_button_minor[];
        option_focused(component?: $mol_view): $mol_view | $mol_button_minor;
        event_select(id: string, event?: MouseEvent): void;
        nav_components(): ($mol_view | $mol_button_minor)[];
        option_content_current(): readonly any[];
        trigger_content(): any[];
        menu_content(): ($mol_view | $mol_button_minor)[];
    }
}
declare namespace $ {
    class $mol_search extends $mol_bar {
        query(val?: any, force?: $mol_atom_force): any;
        sub(): readonly any[];
        Suggest(): $mol_select;
        suggest_selected(val?: any, force?: $mol_atom_force): any;
        hint(): string;
        suggests_showed(): boolean;
        suggests(): readonly any[];
        debounce(): number;
        Clear(): $mol_button_minor;
        Clear_icon(): $mol_icon_cross;
        event_clear(val?: any, force?: $mol_atom_force): any;
    }
}
declare namespace $.$$ {
    class $mol_search extends $.$mol_search {
        suggests_showed(): boolean;
        suggest_selected(next?: string): void;
        sub(): ($mol_button_minor | $.$mol_select)[];
        event_clear(event?: Event): void;
    }
}
declare namespace $ {
    class $mpk_tss_pereferial_list extends $mol_view {
        title(): string;
        pages(): readonly any[];
        Main(): $mpk_tss_pereferial_list_page;
        event_top(e?: any, force?: $mol_atom_force): any;
        tools(): readonly any[];
        unit_current_id(v?: any, force?: $mol_atom_force): any;
        filter_value(val?: any, force?: $mol_atom_force): any;
        List(): $mol_list;
        unit_links(): readonly any[];
        Unit_current(): any;
        Unit_details(id: any): $mpk_tss_pereferial_details;
        details_event_top(e?: any, force?: $mol_atom_force): any;
        unit(id: any): any;
        Unit_link(id: any): $mpk_tss_pereferial_link;
    }
}
declare namespace $ {
    class $mpk_tss_pereferial_list_page extends $mol_page {
        unit_current_id(v?: any, force?: $mol_atom_force): any;
        sub(): readonly any[];
        Filter_value(): $mol_search;
        filter_hint(): string;
        filter_value(val?: any, force?: $mol_atom_force): any;
    }
}
declare namespace $.$$ {
    class $mpk_tss_pereferial_list extends $.$mpk_tss_pereferial_list {
        domain(): $mpk_tss_pereferial_domain_units;
        unit_links(): $.$mpk_tss_pereferial_link[];
        unit(id: string): $mpk_tss_pereferial_domain_unit;
        filter_value(next?: string): any;
        unit_current_id(next?: string): any;
        Unit_current(): $.$mpk_tss_pereferial_details;
        details_event_top(event?: Event): void;
    }
    class $mpk_tss_pereferial_list_page extends $.$mpk_tss_pereferial_list_page {
        destructor(): void;
    }
}
declare namespace $ {
    class $mpk_tss_sensors extends $mol_page {
        title(): string;
        body(): readonly any[];
        Content(): $mol_filler;
    }
}
declare namespace $ {
    class $mpk_tss_card_list extends $mol_list {
        minimal_width(): number;
        current_id(): string;
        attr(): {
            "mpk_tss_card_list_selected": boolean;
        };
        selected(): boolean;
    }
}
declare namespace $.$$ {
    class $mpk_tss_card_list extends $.$mpk_tss_card_list {
        selected(): boolean;
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
        forces(): Record<number, number>;
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
    class $mpk_tss_reports_resolution extends $mol_view {
        attr(): {
            "mpk_tss_reports_resolution_type": string;
        };
        status(): string;
        statuses(): {
            "success": string;
            "warning": string;
        };
        success(): string;
        warning(): string;
        icons(): {
            "success": $mpk_tss_icon_circle_outline;
            "warning": $mpk_tss_icon_round_warning;
        };
        Success(): $mpk_tss_icon_circle_outline;
        Warning(): $mpk_tss_icon_round_warning;
        sub(): readonly any[];
        Text(): $mol_view;
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
        sub(): readonly any[];
        value(): number;
        spacer(): string;
        unit(): string;
    }
}
declare namespace $ {
    class $mpk_tss_reports_delivery extends $mol_view {
        attr(): {
            "mpk_tss_reports_delivery_type": string;
        };
        status(): string;
        statuses(): {
            "preparing": string;
            "sending": string;
            "sent": string;
            "error": string;
        };
        preparing(): string;
        sending(): string;
        sent(): string;
        error(): string;
        icons(): {
            "preparing": $mpk_tss_icon_sync;
            "sending": $mpk_tss_icon_sync;
            "sent": $mpk_tss_icon_done;
            "error": $mpk_tss_icon_clear;
        };
        Preparing(): $mpk_tss_icon_sync;
        Sending(): $mpk_tss_icon_sync;
        Sent(): $mpk_tss_icon_done;
        Error(): $mpk_tss_icon_clear;
        sub(): readonly any[];
        Icon(): any;
        Text(): $mol_view;
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
    class $mpk_tss_reports_train_link extends $mpk_tss_card {
        report(): any;
        arg(): {
            "report": string;
        };
        report_id(): string;
        status(): string;
        Status_text(): $mpk_tss_reports_resolution;
        resolution(): string;
        status_click(event?: any, force?: $mol_atom_force): any;
        report_status_click(event?: any, force?: $mol_atom_force): any;
        items(): readonly any[];
        Id(): $mol_labeler;
        id_title(): string;
        Started(): $mol_labeler;
        started_title(): string;
        started(): string;
        Average_speed(): $mol_labeler;
        average_speed_title(): string;
        Average_speed_formatted(): $mpk_tss_parameter_speed;
        average_speed(): number;
        Delivery(): $mol_labeler;
        delivery_title(): string;
        Delivery_value(): $mpk_tss_reports_delivery;
        delivery(): string;
        Train_number(): $mol_labeler;
        train_number_title(): string;
        train_number(): string;
    }
}
declare namespace $.$$ {
    class $mpk_tss_reports_train_link extends $.$mpk_tss_reports_train_link {
        report(): $mpk_tss_reports_domain_report;
        report_id(): string;
        train_number(): string;
        resolution(): $mpk_tss_reports_domain_resolution;
        started(): string;
        average_speed(): number;
        delivery(): $mpk_tss_reports_domain_delivery;
        report_status_click(even?: Event): void;
    }
}
declare namespace $ {
    class $mpk_tss_reports_carriage_load extends $mol_view {
        status(): any;
        statuses(): {
            "free": string;
            "full": string;
        };
        free(): string;
        full(): string;
        sub(): readonly any[];
        status_text(): string;
    }
}
declare namespace $.$$ {
    class $mpk_tss_reports_carriage_load extends $.$mpk_tss_reports_carriage_load {
        status_text(): any;
    }
}
declare namespace $ {
    class $mpk_tss_reports_violation extends $mol_view {
        status(): any;
        none(): string;
        empty(): boolean;
        statuses(): {
            "slider": string;
            "vyscherbiny": string;
            "sink": string;
            "dent": string;
        };
        slider(): string;
        vyscherbiny(): string;
        sink(): string;
        dent(): string;
        group(): readonly any[];
        status_text(): string;
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
    class $mpk_tss_reports_carriage_link extends $mpk_tss_card {
        minimal_height(): number;
        carriage(): any;
        arg(): {
            "carriage": string;
        };
        carriage_id(): string;
        title(): string;
        status(): string;
        resolution(): string;
        Status_text(): $mol_view;
        Status_main(): $mpk_tss_reports_resolution;
        Violation(): $mpk_tss_reports_carriage_link_violation;
        violation(): string;
        Status_icon(): $mpk_tss_icon_cloud_download;
        status_click(event?: any, force?: $mol_atom_force): any;
        carriage_status_click(event?: any, force?: $mol_atom_force): any;
        items(): readonly any[];
        Place(): $mol_labeler;
        place_title(): string;
        place(): string;
        Carriage_number(): $mol_labeler;
        carriage_number_title(): string;
        carriage_number(): string;
        Load(): $mol_labeler;
        load_title(): string;
        Load_text(): $mpk_tss_reports_carriage_load;
        load(): string;
        Speed(): $mol_labeler;
        speed_title(): string;
        Speed_formatted(): $mpk_tss_parameter_speed;
        speed(): number;
        additional(): readonly any[];
    }
}
declare namespace $ {
    class $mpk_tss_reports_carriage_link_violation extends $mpk_tss_reports_violation {
        group(): readonly any[];
        before(): string;
        after(): string;
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
    }
}
declare namespace $ {
    class $mpk_tss_parameter_weight extends $mol_view {
        sub(): readonly any[];
        value(): number;
        spacer(): string;
        unit(): string;
    }
}
declare namespace $ {
    class $mpk_tss_reports_carriage_type extends $mol_view {
        value(): any;
        values(): {
            "hopper": string;
            "flatcar": string;
            "tank": string;
            "covered": string;
        };
        hopper(): string;
        flatcar(): string;
        tank(): string;
        covered(): string;
        sub(): readonly any[];
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
        sub(): readonly any[];
        value(): number;
        spacer(): string;
        unit(): string;
    }
}
declare namespace $ {
    class $mpk_tss_reports_axle_link extends $mol_link {
        axle(): any;
        arg(): {
            "axle": string;
        };
        axle_id(): string;
        sub(): readonly any[];
        Wheels(): $mol_list;
        wheels(): readonly any[];
        Wheel(id: any): $mpk_tss_reports_axle_link_wheel;
        wheel(id: any): any;
    }
}
declare namespace $ {
    class $mpk_tss_reports_axle_link_wheel extends $mol_view {
        wheel(): any;
        axle_id(): string;
        attr(): {
            "mpk_tss_reports_axle_link_wheel_type": string;
        };
        resolution(): string;
        sub(): readonly any[];
        name(): string;
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
        wheels(): $.$mpk_tss_reports_axle_link_wheel[];
    }
    class $mpk_tss_reports_axle_link_wheel extends $.$mpk_tss_reports_axle_link_wheel {
        wheel(): $mpk_tss_reports_domain_wheel;
        id(): string;
        resolution(): $mpk_tss_reports_domain_resolution;
        violation(): $mpk_tss_reports_domain_violation;
        name(): string;
    }
}
declare namespace $ {
    class $mpk_tss_reports_axle_list extends $mol_list {
        carriage(): any;
        axle_current(): any;
        rows(): readonly any[];
        axis(): readonly any[];
        Axle_link(id: any): $mpk_tss_reports_axle_link;
        axle(id: any): any;
        current(id: any): boolean;
    }
}
declare namespace $.$$ {
    class $mpk_tss_reports_axle_list extends $.$mpk_tss_reports_axle_list {
        carriage(): $mpk_tss_reports_domain_carriage;
        axle(id: string): $mpk_tss_reports_domain_axle;
        axle_current_id(next?: string): any;
        current(id: string): boolean;
        axle_current(): $mpk_tss_reports_domain_axle;
        axis(): $.$mpk_tss_reports_axle_link[];
        destructor(): void;
    }
}
declare namespace $ {
    class $mol_svg_group extends $mol_svg {
        dom_name(): string;
    }
}
declare namespace $ {
    class $mol_plot_base extends $mol_svg_group {
        viewport(): readonly (readonly [number, number])[];
        shift(): readonly number[];
        scale(): readonly number[];
        dimensions_pane(): readonly (readonly [number, number])[];
        dimensions(): readonly (readonly [number, number])[];
        size_real(): readonly number[];
        front(): readonly any[];
        back(): readonly any[];
        hue(): number;
        Sample(): any;
    }
}
declare namespace $.$$ {
    class $mol_plot_base extends $.$mol_plot_base {
        dimensions(): readonly [readonly [number, number], readonly [number, number]];
        viewport(): readonly [readonly [0, number], readonly [0, number]];
    }
}
declare namespace $ {
    class $mol_vector<Value, Length extends number> extends Array<Value> {
        length: Length;
        constructor(...values: Value[] & {
            length: Length;
        });
        map: <Res>(convert: (value: Value, index: number, array: this) => Res, self?: any) => $mol_vector<Res, Length>;
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
    }
    class $mol_vector_1d<Value> extends $mol_vector<Value, 1> {
        [0]: Value;
        readonly x: Value;
    }
    class $mol_vector_2d<Value> extends $mol_vector<Value, 2> {
        [0]: Value;
        [1]: Value;
        readonly x: Value;
        readonly y: Value;
    }
    class $mol_vector_3d<Value> extends $mol_vector<Value, 3> {
        [0]: Value;
        [1]: Value;
        [2]: Value;
        readonly x: Value;
        readonly y: Value;
        readonly z: Value;
    }
    class $mol_vector_range<Value> extends $mol_vector<Value, 2> {
        [0]: Value;
        [1]: Value;
        readonly min: Value;
        readonly max: Value;
        readonly inversed: $mol_vector_range<Value>;
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
    class $mol_plot_pane extends $mol_svg_root {
        aspect(): string;
        hue_base(val?: any, force?: $mol_atom_force): any;
        hue_shift(val?: any, force?: $mol_atom_force): any;
        gap(): number;
        gap_hor(): number;
        gap_vert(): number;
        gap_left(): number;
        gap_right(): number;
        gap_top(): number;
        gap_bottom(): number;
        shift_limit(): readonly (readonly [number, number])[];
        shift_limit_x(): readonly number[];
        shift_limit_y(): readonly number[];
        shift_default(): readonly number[];
        shift(val?: any, force?: $mol_atom_force): any;
        scale_limit(): readonly (readonly [number, number])[];
        scale_limit_x(): readonly number[];
        scale_limit_y(): readonly number[];
        scale_default(): readonly number[];
        scale(val?: any, force?: $mol_atom_force): any;
        size(): readonly number[];
        size_real(): readonly number[];
        dimensions_viewport(): readonly (readonly [number, number])[];
        dimensions(): readonly (readonly [number, number])[];
        sub(): readonly $mol_plot_base[];
        graphs_sorted(): readonly $mol_plot_base[];
        graphs_colored(): readonly $mol_plot_base[];
        graphs_positioned(): readonly $mol_plot_base[];
        graphs(): readonly $mol_plot_base[];
        plugins(): readonly any[];
        width(): any;
        height(): any;
        Meter(): $mol_meter;
    }
}
declare namespace $.$$ {
    class $mol_plot_pane extends $.$mol_plot_pane {
        dimensions(): [[number, number], [number, number]];
        size(): readonly [number, number];
        graph_hue(index: number): number;
        graphs_colored(): readonly $.$mol_plot_base[];
        size_real(): readonly [any, any];
        view_box(): string;
        scale_limit(): readonly [readonly [number, number], readonly [number, number]];
        scale_default(): readonly [number, number];
        scale(next?: readonly [number, number]): $mol_vector_2d<number>;
        shift_limit(): readonly [readonly [number, number], readonly [number, number]];
        shift_default(): readonly [number, number];
        shift_changed: boolean;
        shift(next?: [number, number]): readonly [number, number];
        graphs_positioned(): readonly $.$mol_plot_base[];
        viewport(): readonly [readonly [number, number], readonly [number, number]];
        graphs_sorted(): $mol_plot_base[];
    }
}
declare namespace $ {
    class $mol_chart_legend extends $mol_scroll {
        graphs(): readonly any[];
        sub(): readonly any[];
        graph_legends(): readonly any[];
        Graph_legend(id: any): $mol_view;
        Graph_sample_box(id: any): $mol_view;
        Graph_sample(id: any): any;
        Graph_title(id: any): $mol_view;
        graph_title(id: any): string;
    }
}
declare namespace $.$$ {
    class $mol_chart_legend extends $.$mol_chart_legend {
        graphs_front(): any[];
        graph_legends(): $mol_view[];
        graph_title(index: number): any;
        Graph_sample(index: number): any;
    }
}
declare namespace $ {
    class $mol_chart extends $mol_view {
        sub(): readonly any[];
        Plot(): $mol_plot_pane;
        graphs(): readonly any[];
        hue_base(): number;
        hue_shift(): number;
        Legend(): $mol_chart_legend;
    }
}
declare namespace $ {
    class $mol_plot_graph extends $mol_plot_base {
        series(): {};
        points_raw(): readonly (readonly [number, number])[];
        attr(): {
            "mol_plot_graph_type": string;
        };
        type(): string;
        style(): {
            "color": string;
        };
        color(): string;
        Sample(): any;
    }
}
declare namespace $ {
    class $mol_plot_graph_sample extends $mol_view {
        attr(): {
            "mol_plot_graph_type": string;
        };
        type(): string;
        style(): {
            "color": string;
        };
        color(): string;
    }
}
declare namespace $.$$ {
    class $mol_plot_graph extends $.$mol_plot_graph {
        points_raw(): [number, number][];
        dimensions(): [[number, number], [number, number]];
        color(): string;
        front(): this[];
    }
}
declare namespace $ {
    class $mol_svg_circle extends $mol_svg {
        dom_name(): string;
        pos(): readonly any[];
        attr(): {
            "r": string;
            "cx": string;
            "cy": string;
        };
        radius(): string;
        pos_x(): string;
        pos_y(): string;
    }
}
declare namespace $.$$ {
    class $mol_svg_circle extends $.$mol_svg_circle {
        pos_x(): any;
        pos_y(): any;
    }
}
declare namespace $ {
    class $mol_svg_text extends $mol_svg {
        dom_name(): string;
        pos(): readonly any[];
        attr(): {
            "x": string;
            "y": string;
            "text-anchor": string;
        };
        pos_x(): string;
        pos_y(): string;
        align(): string;
        sub(): readonly any[];
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
    function $mol_math_round_expand(val: number, gap?: number): number;
}
declare namespace $ {
    class $mol_plot_ruler extends $mol_plot_graph {
        step(): number;
        scale_axle(): number;
        scale_step(): number;
        shift_axle(): number;
        dimensions_axle(): readonly number[];
        viewport_axle(): readonly number[];
        viewport_dimensions(): readonly number[];
        points(): readonly number[];
        normalize(val?: any, force?: $mol_atom_force): any;
        sub(): readonly any[];
        Curve(): $mol_svg_path;
        curve(): string;
        labels(): readonly any[];
        Title_box(): $mol_svg_circle;
        box_radius(): string;
        box_pos(): readonly any[];
        box_pos_x(): string;
        box_pos_y(): string;
        Title(): $mol_svg_text;
        title_pos(): readonly any[];
        title_pos_x(): string;
        title_pos_y(): string;
        title_align(): string;
        Label(index: any): $mol_svg_text;
        label_pos(index: any): readonly any[];
        label_pos_x(index: any): string;
        label_pos_y(index: any): string;
        label_text(index: any): string;
        label_align(): string;
    }
}
declare namespace $.$$ {
    class $mol_plot_ruler extends $.$mol_plot_ruler {
        labels(): $.$mol_svg_text[];
        step(): number;
        box_radius(): string;
        normalize(coord: number): number;
        viewport_dimensions(): number[];
        points(): number[];
        precision(): number;
        label_text(index: number): string;
        front(): this[];
    }
}
declare namespace $ {
    class $mol_plot_ruler_vert extends $mol_plot_ruler {
        gap_top(): number;
        title_align(): string;
        label_align(): string;
        title_pos_x(): string;
        title_pos_y(): string;
        box_pos_y(): string;
    }
}
declare namespace $.$$ {
    class $mol_plot_ruler_vert extends $.$mol_plot_ruler_vert {
        dimensions_axle(): readonly [number, number];
        box_pos_x(): string;
        viewport_axle(): readonly [0, number];
        scale_axle(): number;
        scale_step(): number;
        shift_axle(): number;
        curve(): string;
        label_pos_x(index: number): string;
        label_pos_y(index: number): string;
    }
}
declare namespace $ {
    class $mol_plot_ruler_hor extends $mol_plot_ruler {
        gap_left(): number;
        title_align(): string;
        label_align(): string;
        title_pos_x(): string;
        title_pos_y(): string;
        box_pos_y(): string;
    }
}
declare namespace $.$$ {
    class $mol_plot_ruler_hor extends $.$mol_plot_ruler_hor {
        dimensions_axle(): readonly [number, number];
        viewport_axle(): readonly [0, number];
        scale_axle(): number;
        box_pos_x(): string;
        scale_step(): number;
        shift_axle(): number;
        curve(): string;
        label_pos_x(index: number): string;
        label_pos_y(index: number): string;
    }
}
declare namespace $ {
    class $mol_plot_mark_hor extends $mol_plot_ruler_hor {
        visible_marks(): number;
    }
}
declare namespace $.$$ {
    class $mol_plot_mark_hor extends $.$mol_plot_mark_hor {
        points(): number[];
    }
}
declare namespace $ {
    class $mol_plot_group extends $mol_plot_graph {
        sub(): readonly $mol_plot_graph[];
        graphs_enriched(): readonly $mol_plot_graph[];
        graphs(): readonly $mol_plot_graph[];
        Sample(): $mol_plot_graph_sample;
        graph_samples(): readonly $mol_view[];
    }
}
declare namespace $.$$ {
    class $mol_plot_group extends $.$mol_plot_group {
        graphs_enriched(): readonly $.$mol_plot_graph[];
        graph_samples(): any[];
        back(): $mol_plot_graph[];
        front(): $mol_plot_graph[];
    }
}
declare namespace $ {
    class $mol_plot_dot extends $mol_plot_graph {
        style(): {
            "stroke-width": number;
            "color": string;
        };
        diameter(): number;
        sub(): readonly any[];
        Curve(): $mol_svg_path;
        curve(): string;
        Sample(): $mol_plot_graph_sample;
    }
}
declare namespace $.$$ {
    class $mol_plot_dot extends $.$mol_plot_dot {
        filled(): Set<number>;
        points(): (readonly [number, number])[];
        curve(): string;
    }
}
declare namespace $ {
    class $mpk_tss_reports_axle_chart extends $mol_chart {
        axle(): any;
        carriage(): any;
        Plot(): $mpk_tss_reports_axle_chart_pane;
        graphs(): readonly any[];
        Vert_ruler(): $mol_plot_ruler_vert;
        vert_title(): string;
        Hor_ruler(): $mol_plot_mark_hor;
        forces_left(): {};
        hor_title(): string;
        Forces_left(): $mol_plot_group;
        forces_left_title(): string;
        Left_fill(): $mol_plot_dot;
        Forces_right(): $mol_plot_group;
        forces_right_title(): string;
        forces_right(): {};
        Right_fill(): $mol_plot_dot;
    }
}
declare namespace $ {
    class $mpk_tss_reports_axle_chart_pane extends $mol_plot_pane {
        minimal_width(): number;
        minimal_height(): number;
        gap_hor(): number;
        gap_vert(): number;
        gap_right(): number;
        hue_base(): number;
        hue_shift(): number;
        scale_x(val?: any, force?: $mol_atom_force): any;
        plugins(): readonly any[];
        Touch(): $mol_touch;
    }
}
declare namespace $.$$ {
    class $mpk_tss_reports_axle_chart extends $.$mpk_tss_reports_axle_chart {
        axle(): $mpk_tss_reports_domain_axle;
        carriage(): $mpk_tss_reports_domain_carriage;
        wheel_left(): $mpk_tss_reports_domain_wheel;
        wheel_right(): $mpk_tss_reports_domain_wheel;
        forces_left(): Record<number, number>;
        forces_right(): Record<number, number>;
    }
    class $mpk_tss_reports_axle_chart_pane extends $.$mpk_tss_reports_axle_chart_pane {
        scale_x(next?: number): number;
    }
}
declare namespace $ {
    class $mpk_tss_reports_carriage_details extends $mol_page {
        carriage(): any;
        title(): string;
        minimal_width(): number;
        tools(): readonly any[];
        Close(): $mol_link;
        Close_icon(): $mol_icon_cross;
        body(): readonly any[];
        Main(): $mol_row;
        Info(): $mpk_tss_reports_carriage_link;
        Weight(): $mol_labeler;
        total_weight_title(): string;
        Weight_content(): $mpk_tss_parameter_weight;
        total_weight(): number;
        Type(): $mol_labeler;
        type_title(): string;
        Type_content(): $mpk_tss_reports_carriage_type;
        type(): string;
        Length(): $mol_labeler;
        length_title(): string;
        Length_content(): $mpk_tss_parameter_length;
        length(): number;
        Violation(): $mol_labeler;
        violation_title(): string;
        Violation_content(): $mpk_tss_reports_violation;
        violation(): string;
        axle_current(): any;
        Axle_list(): $mpk_tss_reports_axle_list;
        Axle_chart(): $mpk_tss_reports_axle_chart;
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
    class $mol_check extends $mol_button_minor {
        attr(): {
            "mol_check_checked": any;
            "aria-checked": any;
            "role": string;
            "disabled": boolean;
            "tabindex": number;
            "title": string;
        };
        checked(val?: any, force?: $mol_atom_force): any;
        sub(): readonly any[];
        Icon(): any;
        label(): readonly any[];
        Title(): $mol_view;
        title(): string;
    }
}
declare namespace $.$$ {
    class $mol_check extends $.$mol_check {
        event_click(next?: Event): void;
    }
}
declare namespace $ {
    class $mol_check_icon extends $mol_check {
    }
}
declare namespace $ {
    class $mpk_tss_reports_check_warning extends $mol_check_icon {
        checked(val?: any, force?: $mol_atom_force): any;
        filter_warning(val?: any, force?: $mol_atom_force): any;
        Icon(): $mpk_tss_icon_round_warning;
    }
}
declare namespace $ {
    class $mpk_tss_reports_carriage_list extends $mol_view {
        report(): any;
        title(): string;
        pages(): readonly any[];
        Main(): $mpk_tss_reports_carriage_list_page;
        filter_number(val?: any, force?: $mol_atom_force): any;
        filter_warning(val?: any, force?: $mol_atom_force): any;
        event_top(e?: any, force?: $mol_atom_force): any;
        Details_close(): $mol_link;
        Details_close_icon(): $mol_icon_cross;
        Carriages(): $mol_list;
        carriage_links(): readonly any[];
        Carriage(): any;
        Carriage_details(id: any): $mpk_tss_reports_carriage_details;
        carriage(id: any): any;
        focus_main(e?: any, force?: $mol_atom_force): any;
        Carriage_link(id: any): $mpk_tss_reports_carriage_link;
    }
}
declare namespace $ {
    class $mpk_tss_reports_carriage_list_page extends $mol_page {
        minimal_width(): number;
        sub(): readonly any[];
        Search(): $mol_view;
        Filter_number(): $mol_search;
        hint(): string;
        filter_number(val?: any, force?: $mol_atom_force): any;
        Filter_warning(): $mpk_tss_reports_check_warning;
        filter_warning(val?: any, force?: $mol_atom_force): any;
    }
}
declare namespace $.$$ {
    class $mpk_tss_reports_carriage_list extends $.$mpk_tss_reports_carriage_list {
        report(): $mpk_tss_reports_domain_report;
        carriages(): $mpk_tss_reports_domain_carriages;
        filter_warning(next?: boolean): boolean;
        title(): string;
        carriage(id: string): $mpk_tss_reports_domain_carriage;
        carriage_links(): $.$mpk_tss_reports_carriage_link[];
        carriage_id(next?: string): any;
        Carriage(): $.$mpk_tss_reports_carriage_details;
        focus_main(): void;
        filter_number(next?: string): any;
        destructor(): void;
    }
}
declare namespace $ {
    class $mpk_tss_reports_train_list extends $mol_view {
        title(): string;
        pages(): readonly any[];
        Main(): $mpk_tss_reports_train_list_page;
        event_top(e?: any, force?: $mol_atom_force): any;
        tools(): readonly any[];
        report_current_id(id?: any, force?: $mol_atom_force): any;
        filter_number(val?: any, force?: $mol_atom_force): any;
        filter_warning(val?: any, force?: $mol_atom_force): any;
        Reports(): $mpk_tss_card_list;
        report_links(): readonly any[];
        Details_pages(): any;
        Report_link(id: any): $mpk_tss_reports_train_link;
        report(id: any): any;
        Report_details(id: any): $mpk_tss_reports_carriage_list;
        focus_main(e?: any, force?: $mol_atom_force): any;
    }
}
declare namespace $ {
    class $mpk_tss_reports_train_list_page extends $mol_page {
        minimal_width(): number;
        report_current_id(uri?: any, force?: $mol_atom_force): any;
        sub(): readonly any[];
        Search(): $mol_view;
        Filter_number(): $mol_search;
        hint(): string;
        filter_number(val?: any, force?: $mol_atom_force): any;
        Filter_warning(): $mpk_tss_reports_check_warning;
        filter_warning(val?: any, force?: $mol_atom_force): any;
    }
}
declare namespace $.$$ {
    class $mpk_tss_reports_train_list extends $.$mpk_tss_reports_train_list {
        domain(): $mpk_tss_reports_domain_trains;
        main_blended(): boolean;
        report_links(): $.$mpk_tss_reports_train_link[];
        report(id: string): $mpk_tss_reports_domain_report;
        filter_number(next?: string): any;
        filter_warning(next?: boolean): boolean;
        report_current_id(next?: string): any;
        Details_pages(): readonly any[];
        focus_main(): void;
    }
    class $mpk_tss_reports_train_list_page extends $.$mpk_tss_reports_train_list_page {
        destructor(): void;
    }
}
declare namespace $ {
    class $mol_image extends $mol_view {
        dom_name(): string;
        field(): {
            "src": string;
            "alt": string;
        };
        uri(): string;
    }
}
declare namespace $ {
    class $mol_form extends $mol_view {
        submit_blocked(): boolean;
        sub(): readonly any[];
        Bar_fields(): $mol_view;
        form_fields(): readonly any[];
        Bar_buttons(): $mol_row;
        buttons(): readonly any[];
    }
}
declare namespace $.$$ {
    class $mol_form extends $.$mol_form {
        submit_blocked(): boolean;
    }
}
declare namespace $ {
    class $mol_form_field extends $mol_labeler {
        label(): readonly any[];
        name(): string;
        Bid(): $mol_view;
        bid(): string;
        Content(): any;
        control(): any;
    }
}
declare namespace $ {
    class $mpk_tss_login extends $mol_list {
        entered(val?: any, force?: $mol_atom_force): any;
        sub(): readonly any[];
        Form(): $mol_form;
        Login_field(): $mol_form_field;
        login_label(): string;
        Login(): $mol_string;
        login(val?: any, force?: $mol_atom_force): any;
        Password_field(): $mol_form_field;
        password_label(): string;
        Password(): $mol_string;
        password(val?: any, force?: $mol_atom_force): any;
        Submit(): $mol_button_major;
        submit_label(): string;
        event_submit(val?: any, force?: $mol_atom_force): any;
        submit_blocked(): boolean;
    }
}
declare namespace $.$$ {
    class $mpk_tss_login extends $.$mpk_tss_login {
        event_submit(): void;
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
}
declare namespace $ {
    function $mpk_tss_stub_id(): string;
    function $mpk_tss_stub_ids(max?: number): string[];
    function $mpk_tss_stub_number(min?: number, max?: number): number;
    function $mpk_tss_stub_mem<Host, Value>(obj: Host, name: string, descr: TypedPropertyDescriptor<(id?: string | Object) => Value>): void;
}
declare namespace $ {
    class $mpk_tss_pereferial_domain_mock_units extends $mpk_tss_pereferial_domain_units {
        max_units(): number;
        unit(id: string): $mpk_tss_pereferial_domain_unit;
        protected units_all(): $mpk_tss_pereferial_domain_unit[];
        units(): $mpk_tss_pereferial_domain_unit[];
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
    class $mpk_tss extends $mol_view {
        title(): string;
        attr(): {
            "mol_theme": string;
        };
        theme(): string;
        terminal_text(): string;
        sub(): readonly any[];
        Head(): $mol_view;
        Terminal_link(): $mol_button_minor;
        terminal_formatted_label(): string;
        Logged_user(): any;
        Body(): $mpk_tss_main;
    }
}
declare namespace $ {
    class $mpk_tss_main extends $mol_book {
        Logged_user(): any;
        User_link(): $mol_button_minor;
        logout_click(event?: any, force?: $mol_atom_force): any;
        User_email(): $mol_view;
        User_signout(): $mpk_tss_icon_exit_to_app;
        Menu_item(id: any): $mol_link;
        menu_page_arg(id: any): {};
        menu_page_title(id: any): string;
        menu_pages(): {
            "summary": $mpk_tss_summary;
            "software": $mpk_tss_software;
            "pereferial": $mpk_tss_pereferial_list;
            "sensors": $mpk_tss_sensors;
            "reports": $mpk_tss_reports_train_list;
        };
        Summary(): $mpk_tss_summary;
        Software(): $mpk_tss_software;
        Pereferial(): $mpk_tss_pereferial_list;
        Sensors(): $mpk_tss_sensors;
        Reports(): $mpk_tss_reports_train_list;
        common_tools(): readonly any[];
        Details_close(): $mol_link;
        Details_close_icon(): $mol_icon_cross;
        pages(): readonly any[];
        Sidebar(): $mol_page;
        Logo(): $mol_image;
        event_top(val?: any, force?: $mol_atom_force): any;
        sidebar_title(): string;
        sidebar_items(): readonly any[];
        Login(): $mpk_tss_login;
        entered(val?: any, force?: $mol_atom_force): any;
        logged_email(v?: any, force?: $mol_atom_force): any;
        Menu(): $mol_list;
        menu_items(): readonly any[];
        Foot_content(): $mol_row;
        Foot_text(): $mol_view;
        copyright(): string;
        details(): any;
        Placeholder(): $mpk_tss_placeholder;
    }
}
declare namespace $ {
    class $mpk_tss_placeholder extends $mol_page {
        attr(): {
            "tabindex": any;
        };
        title(): string;
        tools(): readonly any[];
        body(): readonly any[];
        Image(): $mol_image;
    }
}
declare namespace $.$$ {
    class $mpk_tss extends $.$mpk_tss {
        title(): string;
        terminal_number(): string;
        terminal_formatted_label(): string;
        context_sub(): $mol_ambient_context;
    }
    class $mpk_tss_main extends $.$mpk_tss_main {
        Pereferial(): $.$mpk_tss_pereferial_list;
        Reports(): $.$mpk_tss_reports_train_list;
        copyright(): string;
        entered(next?: boolean): boolean;
        Logged_user(): $mol_button_minor;
        logout_click(): void;
        menu_items(): $.$mol_link[];
        menu_page_arg(id: string): {
            page: string;
        };
        logged_email(next?: string): string;
        menu_page_title(id: string): any;
        page_id(next?: string): any;
        sidebar_items(): $.$mol_list[];
        pages(): any[];
    }
}
declare namespace $ {
    class $mol_section extends $mol_list {
        rows(): readonly any[];
        Head(): $mol_view;
        head(): any;
        Content(): any;
    }
}
declare namespace $ {
    class $mpk_tss_summary_section extends $mol_section {
    }
}
declare namespace $ {
    class $mpk_tss_summary_status extends $mol_view {
        title(): string;
        statuses(): {
            "warning": string;
            "error": string;
            "success": string;
            "ready": string;
        };
        warning(): string;
        error(): string;
        success(): string;
        ready(): string;
        sub(): readonly any[];
        attr(): {
            "mpk_tss_summary_status_type": string;
        };
        type(): string;
    }
}
declare namespace $.$$ {
    class $mpk_tss_summary_status extends $.$mpk_tss_summary_status {
        title(): string;
    }
}
declare namespace $ {
    class $mol_float extends $mol_view {
    }
}
declare namespace $ {
    class $mol_icon_tick extends $mol_icon {
        path(): string;
    }
}
declare namespace $ {
    class $mol_check_box extends $mol_check {
        Icon(): $mol_icon_tick;
    }
}
declare namespace $ {
    class $mol_check_expand extends $mol_check {
        minimal_height(): number;
        Icon(): $mol_icon_chevron;
        level(): number;
        style(): {
            "paddingLeft": string;
        };
        level_style(): string;
        checked(val?: any, force?: $mol_atom_force): any;
        expanded(val?: any, force?: $mol_atom_force): any;
        enabled(): boolean;
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
    class $mol_grid extends $mol_scroll {
        row_ids(): readonly any[];
        row_id(index: any): any;
        col_ids(): readonly any[];
        records(): {};
        record(id: any): any;
        hierarchy(): any;
        hierarchy_col(): string;
        sub(): readonly any[];
        Table(): $mol_grid_table;
        gap_top(): number;
        rows_visible(): readonly any[];
        rows(): readonly any[];
        Head(): $mol_grid_row;
        row_height(): number;
        head_cells(): readonly any[];
        Row(id: any): $mol_grid_row;
        cells(id: any): readonly any[];
        Cell(id: any): $mol_view;
        cell(id: any): any;
        Cell_text(id: any): $mol_grid_cell;
        cell_content_text(id: any): readonly any[];
        cell_content(id: any): readonly any[];
        Cell_number(id: any): $mol_grid_number;
        cell_content_number(id: any): readonly any[];
        Col_head(id: any): $mol_float;
        col_head_content(id: any): readonly any[];
        Cell_branch(id: any): $mol_check_expand;
        cell_level(id: any): number;
        cell_expanded(id: any, val?: any, force?: $mol_atom_force): any;
        Cell_content(id: any): readonly any[];
        Cell_dimmer(id: any): $mol_dimmer;
        needle(): string;
        cell_value(id: any): string;
    }
}
declare namespace $ {
    class $mol_grid_table extends $mol_view {
        dom_name(): string;
        style(): {
            "top": number;
        };
        offset(): number;
    }
}
declare namespace $ {
    class $mol_grid_gap extends $mol_view {
        style(): {
            "top": number;
        };
        offset(): number;
    }
}
declare namespace $ {
    class $mol_grid_row extends $mol_view {
        dom_name(): string;
        style(): {
            "height": number;
        };
        height(): number;
        sub(): readonly any[];
        cells(): readonly any[];
    }
}
declare namespace $ {
    class $mol_grid_cell extends $mol_view {
        dom_name(): string;
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
        rows_visible(): any[];
        rows_visible_max(): number;
        view_window(): {
            top: number;
            bottom: number;
            count: number;
        };
        gap_top(): number;
        height(): number;
        content_height(): number;
        head_cells(): $mol_float[];
        col_head_content(colId: string): string[];
        rows(): $mol_grid_row[];
        cells(row_id: string[]): $mol_view[];
        col_type(col_id: string): "text" | "number" | "branch";
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
        col_ids(): string[];
        hierarchy(): {
            [id: string]: $mol_grid_node;
        };
        row_sub_ids(row: string[]): string[][];
        row_root_id(): string[];
        cell_level(id: {
            row: string[];
        }): number;
        row_ids(): string[][];
        row_expanded(row_id: string[], next?: boolean): boolean;
        row_expanded_default(row_id: string[]): boolean;
        cell_expanded(id: {
            row: string[];
        }, next?: boolean): boolean;
    }
    class $mol_grid_table extends $.$mol_grid_table {
        context_sub(): $mol_ambient_context;
    }
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
    class $mol_text extends $mol_list {
        uri_base(): string;
        text(): string;
        tokens(): readonly any[];
        Quote(id: any): $mol_text;
        quote_text(id: any): string;
        Row(id: any): $mol_text_row;
        block_content(id: any): readonly any[];
        block_type(id: any): string;
        Span(id: any): $mol_text_span;
        Link(id: any): $mol_text_link;
        Image(id: any): $mol_text_image;
        Header(id: any): $mol_text_header;
        header_level(id: any): number;
        header_content(id: any): readonly any[];
        Table(id: any): $mol_grid;
        table_head_cells(id: any): readonly any[];
        table_rows(id: any): readonly any[];
        Table_row(id: any): $mol_grid_row;
        table_cells(id: any): readonly any[];
        Table_cell(id: any): $mol_grid_cell;
        table_cell_content(id: any): readonly any[];
        Table_cell_head(id: any): $mol_float;
    }
}
declare namespace $ {
    class $mol_text_row extends $mol_view {
        minimal_height(): number;
        attr(): {
            "mol_text_type": string;
        };
        type(): string;
    }
}
declare namespace $ {
    class $mol_text_header extends $mol_view {
        dom_name(): string;
        minimal_height(): number;
        attr(): {
            "mol_text_header_level": any;
        };
        level(val?: any, force?: $mol_atom_force): any;
        sub(): readonly any[];
        content(): readonly any[];
    }
}
declare namespace $ {
    class $mol_text_span extends $mol_view {
        dom_name(): string;
        attr(): {
            "mol_text_type": any;
        };
        type(val?: any, force?: $mol_atom_force): any;
        sub(): any;
        content(val?: any, force?: $mol_atom_force): any;
    }
}
declare namespace $ {
    class $mol_text_link extends $mol_view {
        dom_name(): string;
        attr(): {
            "mol_text_type": any;
            "href": any;
        };
        type(val?: any, force?: $mol_atom_force): any;
        link(val?: any, force?: $mol_atom_force): any;
        sub(): any;
        content(val?: any, force?: $mol_atom_force): any;
    }
}
declare namespace $ {
    class $mol_text_image extends $mol_view {
        dom_name(): string;
        attr(): {
            "allowfullscreen": boolean;
            "mol_text_type": any;
            "data": any;
        };
        type(val?: any, force?: $mol_atom_force): any;
        link(val?: any, force?: $mol_atom_force): any;
        sub(): readonly any[];
        title(val?: any, force?: $mol_atom_force): any;
    }
}
declare namespace $.$$ {
    class $mol_text extends $.$mol_text {
        tokens(): $mol_syntax_token[];
        rows(): ($.$mol_grid | $.$mol_text | $mol_text_row | $mol_text_header)[];
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
    class $mol_expander extends $mol_list {
        rows(): readonly any[];
        Label(): $mol_view;
        Trigger(): $mol_check_expand;
        expanded(val?: any, force?: $mol_atom_force): any;
        label(): readonly any[];
        tools(): readonly any[];
        Content(): $mol_view;
        content(): readonly any[];
    }
}
declare namespace $.$$ {
    class $mol_expander extends $.$mol_expander {
        rows(): $mol_view[];
    }
}
declare namespace $ {
    class $mpk_tss_summary extends $mol_page {
        title(): string;
        minimal_width(): number;
        body(): readonly any[];
        Statuses(): $mpk_tss_summary_section;
        All(): $mpk_tss_summary_status;
        Software(): $mpk_tss_summary_item;
        software_title(): string;
        Sensors(): $mpk_tss_summary_item;
        sensors_title(): string;
        Pereferials(): $mpk_tss_summary_item;
        pereferial_title(): string;
        Log(): $mol_expander;
        log_title(): string;
    }
}
declare namespace $ {
    class $mpk_tss_summary_item extends $mol_link {
        type(): string;
        sub(): readonly any[];
        Title(): $mol_view;
        Status(): $mpk_tss_summary_status;
    }
}
