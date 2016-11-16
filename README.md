## Meteor Astronomy for TypeScript

[Meteor Astronomy](https://atmospherejs.com/jagi/astronomy) is a powerful model layer for [Meteor](https://www.meteor.com) written on pure EcmaScript6. 

If you want to use it with **Typescript**, you are in right place.

### Installation

1. Add **meteor-astronomy** to your project: `meteor add jagi:astronomy`
2. Open `tsconfig.json` and add it: 
```json
{
    "globalDependencies": {
      "meteor-astronomy": "github:emilianosantucci/meteor-astronomy-ts/.types/astronomy.d.ts#955b76a40676979419860e088aa1e58566eac45e"
    }
}
```

Then, launch `typings install`.

## Example

If you want try it before add to your project:

1. Clone this project: `git clone https://github.com/emilianosantucci/meteor-astronomy-ts.git`
2. Launch meteor: `meteor`

## License

Meteor Astronomy TS is released under the [MIT License](http://opensource.org/licenses/MIT).
