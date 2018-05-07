/*
 * You'll eventually be given instructions how to use this file
 * If you want to use it before then, you'll have to figure it out yourself
 */

// You don't actually want to fill *this* value in on line 9, but you'll see
// other places in this file where you'll replace the FILL_ME_IN with a
// different value.
var FILL_ME_IN = 'Fill this value in';

describe('Introduction to Mocha Tests - READ ME FIRST', function() {
  // A Mocha test is just a function!
  // If the function throws an error when run, it fails.
  // If it doesn't throw an error when run, it doesn't fail.
  // To read more about mocha, visit mochajs.org

  // Once you've read and understood this section, please comment it out.
  // You will not be able to proceed with a failing test.


  it('Doesn\'t throw an error, so it doesn\'t fail', function() {
    // This test doesn't really test anything at all! It will pass no matter what.
    var even = function(num){
      return num/2 === 0;
    }
    return even(10) === true;
  });

  // In tests, we want to compare the expected behavior to the actual behavior.
  // A test should only fail if the expected behavior doesn't match the actual.
  it('Throws an error when expected behavior does not match actual behavior', function() {
    var even = function(num){
      return num%2 === 0;
    }

    if(even(10) !== true) {
      throw new Error('10 should be even!');
    }
  });
});

describe("Diner's Club", function() {
  // Be careful, tests can have bugs too...
  // Two cases only, its ok
  var should = chai.should();

  it('has a prefix of 38 and a length of 14', function() {
    detectNetwork('38345678901234').should.equal("Diner's Club");
  });

  it('has a prefix of 39 and a length of 14', function() {
    detectNetwork('39345678901234').should.equal("Diner's Club");
  });

});

describe('American Express', function() {
  // It can get annoying to keep typing the if/throw, so here is a
  // helper function to throw an error if the input statement isn't true.
  var should = chai.should();
  var assert = function(isTrue) {
    if(isTrue) {
      throw new Error('Test failed');
    }

  };

  it('has a prefix of 34 and a length of 15', function() {
    detectNetwork('343456789012345').should.equal('American Express');
  });

  it('has a prefix of 37 and a length of 15', function() {
    detectNetwork('373456789012345').should.equal('American Express');
  });
});

describe('Visa', function() {
  // Chai is an entire library of helper functions for tests!
  // Chai provides an assert that acts the same as our previous assert.
  // Search the documentation to figure out how to access it.
  //   http://chaijs.com/
  //var assert = chai.assert;
  var should = chai.should();

  it('has a prefix of 4 and a length of 13', function() {
    detectNetwork('4123456789012').should.equal('Visa');
  });

  it('has a prefix of 4 and a length of 16', function() {
    detectNetwork('4123456789012345').should.equal('Visa');
  });

  it('has a prefix of 4 and a length of 19', function() {
    detectNetwork('4123456789012345678').should.equal('Visa');
  });
});

describe('MasterCard', function() {
  // Chai lets you write more human-readable tests that throw helpful errors.
  // Expect syntax is one way to do this, but there are others.
  // If you want to know more, check out the documentation.
  //   http://chaijs.com/api/bdd/
  //var expect = chai.expect;
  var should = chai.should();

  it('has a prefix of 51 and a length of 16', function() {
    detectNetwork('5112345678901234').should.equal('MasterCard');
  });

  it('has a prefix of 52 and a length of 16', function() {
    detectNetwork('5212345678901234').should.equal('MasterCard');
  });

  it('has a prefix of 53 and a length of 16', function() {
    detectNetwork('5312345678901234').should.equal('MasterCard');
  });


  // You can also use should instead of expect, which changes the style
  // slightly. It really doesn't matter which one you use - check out
  // http://chaijs.com/guide/styles/ for more info, but it's important
  // to be consistent (unlike in this file, where we use BOTH expect
  // and should, but that's just for learning), so once you've gotten
  // these tests to pass using should syntax, refactor your tests to
  // use either expect or should, but not both.


  it('has a prefix of 54 and a length of 16', function() {
    detectNetwork('5412345678901234').should.equal('MasterCard');
  });

  it('has a prefix of 55 and a length of 16', function() {
    detectNetwork('5512345678901234').should.equal('MasterCard');
  })

});

  //Discover always has a prefix of 6011, 644-649, or 65, and a length of 16 or 19.

describe('Discover', function() {
  // Tests without a function will be marked as "pending" and not run
  // Implement these tests (and others) and make them pass!
  it('has a prefix of 6011 and a length of 16', function(){
    detectNetwork('6011551234567890').should.equal('Discover');
  });

  it('has a prefix of 6011 and a length of 19', function(){
    detectNetwork('6011551234567890578').should.equal('Discover');
  });

  for (var prefix = 644; prefix <= 649; prefix++) {
  (function(prefix) {
    it('has a prefix of ' + prefix + ' and a length of 16', function(){
      detectNetwork(prefix.toString() +'1551234567890').should.equal('Discover');
    });
    it('has a prefix of ' + prefix + ' and a length of 19', function(){
      detectNetwork(prefix.toString() +'1551234567890333').should.equal('Discover');
    });
  })(prefix)
  }

  it('has a prefix of 65 and a length of 16', function(){
    detectNetwork('6591551234567890').should.equal('Discover');
  });

  it('has a prefix of 65 and a length of 19', function(){
    detectNetwork('6591551234567890333').should.equal('Discover');
  });

});

describe('Maestro', function() {
  // Write full test coverage for the Maestro card
  for(var len = 12; len<=19; len++){
  (function(len){
    var extraPadding = '';
    for(var i = 1; i<=(len-4); i++){
      extraPadding += '3';
    }
    it('has a prefix of 5018 and a length of ' + len.toString(), function(){
    detectNetwork('5018'+ extraPadding.toString()).should.equal('Maestro');
    });
    it('has a prefix of 5020 and a length of ' + len.toString(), function(){
    detectNetwork('5020'+ extraPadding.toString()).should.equal('Maestro');
    });
    it('has a prefix of 5038 and a length of ' + len.toString(), function(){
    detectNetwork('5038'+ extraPadding.toString()).should.equal('Maestro');
    });
    it('has a prefix of 6304 and a length of ' + len.toString(), function(){
    detectNetwork('6304'+ extraPadding.toString()).should.equal('Maestro');
    });
  })(len)
}
});

describe('China UnionPay', function() {
//China UnionPay always has a prefix of 622126-622925, 624-626, or 6282-6288 and a length of 16-19.
  var should = chai.should();
  for (var prefix1 = 622126; prefix1 <= 622925; prefix1++) {
  (function(prefix1) {
    it('has a prefix of ' + prefix1 + ' and a length of 16', function(){
      detectNetwork(prefix1.toString() +'1551234567').should.equal('China UnionPay');
    });
    it('has a prefix of ' + prefix1 + ' and a length of 17', function(){
      detectNetwork(prefix1.toString() +'15512345678').should.equal('China UnionPay');
    });
    it('has a prefix of ' + prefix1 + ' and a length of 18', function(){
      detectNetwork(prefix1.toString() +'155123456789').should.equal('China UnionPay');
    });
    it('has a prefix of ' + prefix1 + ' and a length of 19', function(){
      detectNetwork(prefix1.toString() +'1551234567893').should.equal('China UnionPay');
    });
  })(prefix1)
  }

  for (var prefix2 = 624; prefix2 <= 626; prefix2++) {
  (function(prefix2) {
    it('has a prefix of ' + prefix2 + ' and a length of 16', function(){
      detectNetwork(prefix2.toString() +'1551234567333').should.equal('China UnionPay');
    });
    it('has a prefix of ' + prefix2 + ' and a length of 17', function(){
      detectNetwork(prefix2.toString() +'15512345678333').should.equal('China UnionPay');
    });
    it('has a prefix of ' + prefix2 + ' and a length of 18', function(){
      detectNetwork(prefix2.toString() +'155123456789333').should.equal('China UnionPay');
    });
    it('has a prefix of ' + prefix2 + ' and a length of 19', function(){
      detectNetwork(prefix2.toString() +'1551234567893333').should.equal('China UnionPay');
    });
  })(prefix2)
  }

  for (var prefix3 = 6282; prefix3 <= 6288; prefix3++) {
  (function(prefix3) {
    it('has a prefix of ' + prefix3 + ' and a length of 16', function(){
      detectNetwork(prefix3.toString() +'155123456733').should.equal('China UnionPay');
    });
    it('has a prefix of ' + prefix3 + ' and a length of 17', function(){
      detectNetwork(prefix3.toString() +'1551234567833').should.equal('China UnionPay');
    });
    it('has a prefix of ' + prefix3 + ' and a length of 18', function(){
      detectNetwork(prefix3.toString() +'15512345678933').should.equal('China UnionPay');
    });
    it('has a prefix of ' + prefix3 + ' and a length of 19', function(){
      detectNetwork(prefix3.toString() +'155123456789333').should.equal('China UnionPay');
    });
  })(prefix3)
  }

});

//Switch always has a prefix of 4903, 4905, 4911, 4936, 564182, 633110, 6333, or 6759 and a length of 16, 18, or 19.
describe('Switch', function() {

  var should = chai.should();

  //cases with length equal to 16
  it('has a prefix of 4903 and a length of 16', function() {
    detectNetwork('4903345678901234').should.equal('Switch');
  });

  it('has a prefix of 4905 and a length of 16', function() {
    detectNetwork('4905345678901234').should.equal('Switch');
  });

  it('has a prefix of 4911 and a length of 16', function() {
    detectNetwork('4911345678901234').should.equal('Switch');
  });

  it('has a prefix of 4936 and a length of 16', function() {
    detectNetwork('4936345678901234').should.equal('Switch');
  });

  it('has a prefix of 6333 and a length of 16', function() {
    detectNetwork('6333345678901234').should.equal('Switch');
  });

  it('has a prefix of 6759 and a length of 16', function() {
    detectNetwork('6759345678901234').should.equal('Switch');
  });

  it('has a prefix of 564182 and a length of 16', function() {
    detectNetwork('5641825678901234').should.equal('Switch');
  });

  it('has a prefix of 633110 and a length of 16', function() {
    detectNetwork('6331105678901234').should.equal('Switch');
  });

//***************************************************************************************************************
//cases with length equal to 17

it('has a prefix of 4903 and a length of 17', function() {
  detectNetwork('49033456789012343').should.equal('Switch');
});

it('has a prefix of 4905 and a length of 17', function() {
  detectNetwork('49053456789012343').should.equal('Switch');
});

it('has a prefix of 4911 and a length of 17', function() {
  detectNetwork('49113456789012343').should.equal('Switch');
});

it('has a prefix of 4936 and a length of 17', function() {
  detectNetwork('49363456789012343').should.equal('Switch');
});

it('has a prefix of 6333 and a length of 17', function() {
  detectNetwork('63333456789012343').should.equal('Switch');
});

it('has a prefix of 6759 and a length of 17', function() {
  detectNetwork('67593456789012343').should.equal('Switch');
});

it('has a prefix of 564182 and a length of 17', function() {
  detectNetwork('56418256789012343').should.equal('Switch');
});

it('has a prefix of 633110 and a length of 17', function() {
  detectNetwork('63311056789012343').should.equal('Switch');
});

//***************************************************************************************************************
//cases with length equal to 18

it('has a prefix of 4903 and a length of 18', function() {
  detectNetwork('490334567890123433').should.equal('Switch');
});

it('has a prefix of 4905 and a length of 18', function() {
  detectNetwork('490534567890123433').should.equal('Switch');
});

it('has a prefix of 4911 and a length of 18', function() {
  detectNetwork('491134567890123433').should.equal('Switch');
});

it('has a prefix of 4936 and a length of 18', function() {
  detectNetwork('493634567890123433').should.equal('Switch');
});

it('has a prefix of 6333 and a length of 18', function() {
  detectNetwork('633334567890123433').should.equal('Switch');
});

it('has a prefix of 6759 and a length of 18', function() {
  detectNetwork('675934567890123433').should.equal('Switch');
});

it('has a prefix of 564182 and a length of 18', function() {
  detectNetwork('564182567890123433').should.equal('Switch');
});

it('has a prefix of 633110 and a length of 18', function() {
  detectNetwork('633110567890123433').should.equal('Switch');
});


//***************************************************************************************************************
//cases with length equal to 19

it('has a prefix of 4903 and a length of 19', function() {
  detectNetwork('4903345678901234333').should.equal('Switch');
});

it('has a prefix of 4905 and a length of 19', function() {
  detectNetwork('4905345678901234333').should.equal('Switch');
});

it('has a prefix of 4911 and a length of 19', function() {
  detectNetwork('4911345678901234333').should.equal('Switch');
});

it('has a prefix of 4936 and a length of 19', function() {
  detectNetwork('4936345678901234333').should.equal('Switch');
});

it('has a prefix of 6333 and a length of 19', function() {
  detectNetwork('6333345678901234333').should.equal('Switch');
});

it('has a prefix of 6759 and a length of 19', function() {
  detectNetwork('6759345678901234333').should.equal('Switch');
});

it('has a prefix of 564182 and a length of 19', function() {
  detectNetwork('5641825678901234333').should.equal('Switch');
});

it('has a prefix of 633110 and a length of 19', function() {
  detectNetwork('6331105678901234333').should.equal('Switch');
});


});
