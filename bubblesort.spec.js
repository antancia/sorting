describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });

  it('calls itself recursively', function() {
  	spyOn(window, 'bubbleSort').and.callThrough();
  	bubbleSort([2,3]);
  	expect(bubbleSort.calls.count()).toBeGreaterThan(1);
  })

  it('can sort one thing', function() {
  	expect( bubbleSort([1])).toEqual([1]);
  })

  it('can sort two things', function() {
  	expect( bubbleSort([2,1])).toEqual([1,2]);
  })

  it('can sort many things', function() {
  	expect(bubbleSort([5,4,3,2,1])).toEqual([1,2,3,4,5]);
  })

  it('throws an error if there are strings in the array', function() {
  	// var notNum = [{}, NaN, 'string', func(){}];

  	expect(bubbleSort(["apple"]).toThrowError("That is not a number!"));
  	expect(bubbleSort([{}]).toThrowError("That is not a number!"));
  
  }) 
  it('makes sure the parameter is an array', function() {
  	// var bubbleSort = function () {
  	// 	throw new TypeError("give us something else...an array, maybe");
  	// }

  	expect(bubbleSort("apple").toThrowError("give us something else...an array, maybe"));
  
  })

});

// describe ('Calls itself recursively', function() {
// 	spyOn(obj, 'callCount');
// 	it()
// });