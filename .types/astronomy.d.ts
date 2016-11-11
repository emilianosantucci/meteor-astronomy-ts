declare namespace Astronomy {
    class Common<T> {
        static create(definition: any): T;
        static get(name: string): Function;
        static forEach(iteratee: any);
    }

    class Module extends Common<Module> {
        constructor(definition: any);
        onInitSchema(schema: any, definition: any);
        onInitDefinition(definition: any, className: any);
        onInitClass(Class, className);
        onParseDefinition(parsedDefinition: any, definition: any, className: any);
        onApplyDefinition(Class: any, definition: any, className: any);
        onMergeDefinitions(targetDefinition: any, sourceDefinition:any, className: any);
    }

    export class Class extends Function {
        static create(definition: any): Class;
        constructor(rawDoc?: any, options?: any);
        typeName(): any;
        toJSONValue(): any;
    }
}

declare module 'meteor/jagi:astronomy' {
    export = Astronomy;
}

declare var Astro = Astronomy;
