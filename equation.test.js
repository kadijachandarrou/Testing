
//  Equation 2nd degree
test('equation ax2 + bx + c = 0', () => {
   console.log("delta == 0");
   expect(equation2(4,4,1)).toBe(-0.5)

   console.log("delta < 0");
   expect(equation2(5, 2, 2)).toBeNull()

   console.log("delta > 0");
   expect(equation2(2, 5, 2)).toEqual({ x1: -1 / 2, x2: -2 })

});


//Function: solutions of the equation

function equation2(a, b, c) {
   let delta = calc_delta(a, b, c)
   let res
   if (delta == 0) {
      res = -b / (2 * a)

   }
   if (delta > 0) {
      let x1 = (-b + Math.sqrt(delta)) / (2 * a)
      let x2 = (-b - Math.sqrt(delta)) / (2 * a)
      res = { "x1": x1, "x2": x2 }
   }
   if (delta< 0) {
      res = null
   }
   return res
}
// function delta
function calc_delta(a, b, c) {
   return (b * b) - (4 * a * c)
}
