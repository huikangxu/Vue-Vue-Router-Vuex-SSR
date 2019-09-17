export default {
  // updateCount (state, num) {
  //   state.count = num
  // }
  // mutations只能接收两个参数，num可以以对象的形式传参
  updateCount (state, { num, num2 }) {
    // console.log(num2)
    state.count = num
  }
}
