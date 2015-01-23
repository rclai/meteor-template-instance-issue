if (Meteor.isClient) {
  Template.hello.helpers({
    thisShouldOutputHello: function () {
      // this doesn't work inside the contentblock
      return Template.instance().customProp.get();
    }
  });
  
  Template.hello.created = function () {
    this.customProp = new ReactiveVar('hello');
  }
}