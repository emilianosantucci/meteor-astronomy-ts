# Astronomy TypeScript definition file

**Warning**: actually, only Astro.Class is defined.

Combine power of Meteor Astronomy ([https://atmospherejs.com/jagi/astronomy](url)) library with TypeScript.

## Installation
 1. Copy `astronomy.d.ts` on your project.
 2. Open `tsconfig.json` and edit as below: 
```json
    "globalDependencies": {
      "astronomy": "file:YOUR_RELATIVE_PATH/astronomy.d.ts"
    }
```

Finally, launch `typings install`.

## License

Astronomy TS is released under the [MIT License](http://opensource.org/licenses/MIT).
