declare namespace Astronomy {
    module Class {
        function toJSONValue(...any): string;
        function getName(): string;
        function getParent(): string;
        function getChildren(): string;
        function create(any): this;
        function inherit(any): this;
        function extend(any): void;
        function get(className: string): this;
        function has(className: string): this;
        function includes(className: string): this;
        function isParentOf(clazz: this): boolean;
        function isChildOf(clazz: this): boolean;
    }
}

declare module 'meteor/jagi:astronomy' {
    export = Astronomy;
}

declare var Astro = Astronomy;
