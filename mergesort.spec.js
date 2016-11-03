describe('Merge Sort', function(){
  it('handles an empty array', function(){
    expect( mergeSort([]) ).toEqual( [] );
  });

  it('calls itself recursively', function() {
  	spyOn(window, 'mergeSort').and.callThrough();
  	mergeSort([2,3]);
  	expect(mergeSort.calls.count()).toBeGreaterThan(1);
  })

  it('can sort one thing', function() {
  	expect(mergeSort([1])).toEqual([1]);
  })

  it('can sort two things', function() {
  	expect(mergeSort([2,1])).toEqual([1,2]);
  })

  it('can sort many things', function() {
  	expect(mergeSort([6, 5,4,3,2,1])).toEqual([1,2,3,4,5,6]);
  })

  it('throws an error if there are strings in the array', function() {
  

  	expect(function() {mergeSort(["apple"])}).toThrow(new Error ("That is not a number!"));
  	expect(function() {mergeSort([{}])}).toThrow(new Error("That is not a number!"));
  
  }) 
  it('makes sure the parameter is an array', function() {
  	// var mergeSort = function () {
  	// 	throw new TypeError("give us something else...an array, maybe");
  	// }

  	expect(function() {mergeSort("apple")}).toThrow(new Error("no thank you"));
  
  })

});