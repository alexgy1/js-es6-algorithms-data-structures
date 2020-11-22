function t(nums) {
  if (!Array.isArray(nums)) return;
  var len = nums.length;
  if (len == 0) return 0;

  var now = nums[0];
  for (var i = 0; i < len; i++) {
    if (now == nums[i]) {
      nums.splice(i, 1);
    } else {
      now = nums[i];
    }
  }
  return nums.length;
}

console.log(t([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
