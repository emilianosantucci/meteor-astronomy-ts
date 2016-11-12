declare module 'meteor/jagi:astronomy' {
    module Astronomy {
        interface AstronomyStatic<T> {
            create(definition: any): T;
        }

        interface ReservedWords {
            copy(save?: boolean): any;
            dispatchEvent(event: Event): any;
            get(): any;
            getModified(): any;
            getModifiedValues(options?: any): any;
            getModifier(): any;
            isModified(pattern?: any): boolean;
            raw(): any;
            reload();
            remove(options?: any, callback?: Function);
            save(options?: any, callback?: Function);
            set(...args: any[]): void;
            typeName(): any;
            toJSONValue(args: any): any;
            validate(options?: any, callback?: Function);
            validateAll(options?: any, callback?: Function);
        }

        var Module: ModuleStatic;
        interface ModuleStatic extends AstronomyStatic<Module> {
            forEach(iteratee: any);
            get(name: string): Module;
        }

        interface Module {
            new();
            [property: string]: any;
            constructor(definition: any);
            onInitSchema(schema: any, definition: any);
            onInitDefinition(definition: any, className: any);
            onInitClass(Class, className);
            onParseDefinition(parsedDefinition: any, definition: any, className: any);
            onApplyDefinition(Class: any, definition: any, className: any);
            onMergeDefinitions(targetDefinition: any, sourceDefinition: any, className: any);
        }

        var Type: TypeStatic;
        interface TypeStatic extends AstronomyStatic<Type> {
            has(name: string): boolean;
            find(Class: Class): Type;
            get(name: string): Type;
        }

        interface Type {
            new();
            [property: string]: any;
            cast(value: any): any;
            validate(doc: any, fieldName: string);
        }

        var Class: ClassStatic;
        interface ClassStatic extends AstronomyStatic<Class> {
            getName(): string;
            getParent(): string;
            getChildren(depth: number | boolean): Class[];
            inherit(definition: any): Class;
            extend(extendDefinition: any, onlyModules: any): any;
            has(className: string): boolean;
            includes(Class: Class): any;
            isParentOf(Class: Class): boolean;
            isChildOf(Class: Class): boolean;
            get(name: string): Class;
        }

        interface Class extends ReservedWords {
            new();
            constructor(rawDoc?: any, options?: any);
            [property: string]: any;
        }

        var Enum: EnumStatic;
        interface EnumStatic extends AstronomyStatic<Enum> {

        }

        interface Enum {
            new();
            [property: string]: any;
            getIdentifiers(): any;
            getIdentifier(value: any): any;
        }

        var Config = ConfigConstants;
        const ConfigConstants = {
            verbose: true,
            resolving: true
        };
    }

    export var Astro = Astronomy;
}
