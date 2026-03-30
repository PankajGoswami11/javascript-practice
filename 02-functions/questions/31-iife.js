// 31: IIFE

(function (num = 2) {
    console.log(num * num);
})();

(function (num) {
    console.log(num * num);
})(5);
