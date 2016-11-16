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

        let Module: ModuleStatic;
        interface ModuleStatic extends AstronomyStatic<Module> {
            forEach(iteratee: any);
            get(name: string): Module;
        }

        interface Module extends ModuleStatic {
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

        let Type: TypeStatic;
        interface TypeStatic extends AstronomyStatic<Type> {
            has(name: string): boolean;
            find(Class: Class): Type;
            get(name: string): Type;
        }

        interface Type extends TypeStatic {
            new();
            [property: string]: any;
            cast(value: any): any;
            validate(doc: any, fieldName: string);
        }

        let Class: ClassStatic;
        interface ClassStatic extends AstronomyStatic<Class> {
            getName(): string;
            getParent(): string;
            getChildren(depth: number | boolean): any[];
            inherit(definition: any): any;
            extend(extendDefinition: any, onlyModules: any): any;
            has(className: string): boolean;
            includes(Class: Class): any;
            isParentOf(Class: Class): boolean;
            isChildOf(Class: Class): boolean;
        }

        interface Class extends ClassStatic, ReservedWords {
            new();
            constructor(rawDoc?: any, options?: any);
            [property: string]: any;
        }

        let Enum: EnumStatic;
        interface EnumStatic extends AstronomyStatic<Enum> {

        }

        interface Enum extends EnumStatic {
            new();
            [property: string]: any;
            getIdentifiers(): any;
            getIdentifier(value: any): any;
        }

        let Config: ConfigConstants;
        interface ConfigConstants {
            verbose: boolean;
            resolving: boolean
        }
    }

    export let Astro = Astronomy;
}
