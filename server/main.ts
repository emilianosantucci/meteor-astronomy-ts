// import { Class } from 'meteor/jagi:astronomy';

Meteor.startup(() => {
    const Collection = new Mongo.Collection('test');

    let Model: Class = Astro.Class.create({
        name: 'Model',
        collection: Collection,
        fields: {
            name: String
        }
    });

    let myModel1 = new Model();
    myModel1.name = 'Prova';
    console.log(myModel1);
    myModel1.save();
});
