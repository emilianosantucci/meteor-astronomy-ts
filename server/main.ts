import { Astro } from 'meteor/jagi:astronomy';

Meteor.startup(() => {
    const Tests = new Mongo.Collection('test');

    const Test = Astro.Class.create({
        name: 'Model',
        collection: Tests,
        fields: {
            name: String
        }
    });

    let myTest = new Test();
    myTest.name = 'My test';
    myTest.save();
});
