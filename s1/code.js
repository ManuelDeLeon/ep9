if (Meteor.isClient) {
  Calc = {
    add: function(a, b) {
      return a + b;
    }
  }
}

if (Meteor.isServer) {
  Calc = {
    multiply: function(a, b) {
      return a * b;
    }
  }
}
