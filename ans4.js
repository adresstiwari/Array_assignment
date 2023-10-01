let sample_array = [2, 3, 4, 2, 3, 7, 6];
function distruct(arr) {
  first_Element = arr[0];
  second_Element = arr[1];
  let len = (arr.length)-1;
  last_Element = arr[len];
  final_array = [first_Element, second_Element, last_Element];
  console.log(final_array);
}
distruct(sample_array);
