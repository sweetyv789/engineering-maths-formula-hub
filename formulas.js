const formulas = [
  // Area formulas
  { id: 'area_square', name: 'Square Area', vars: ['a'], expr: 'a * a', description: 'a²' },
  { id: 'area_rectangle', name: 'Rectangle Area', vars: ['l', 'w'], expr: 'l * w', description: 'l × w' },
  { id: 'area_circle', name: 'Circle Area', vars: ['r'], expr: 'Math.PI * r * r', description: 'πr²' },
  { id: 'area_triangle', name: 'Triangle Area', vars: ['b', 'h'], expr: '0.5 * b * h', description: '½bh' },
  { id: 'area_triangle_heron', name: 'Triangle Area (Heron)', vars: ['a', 'b', 'c'], expr: 'let s=(a+b+c)/2; Math.sqrt(s*(s-a)*(s-b)*(s-c))', description: '√[s(s-a)(s-b)(s-c)]' },
  { id: 'area_parallelogram', name: 'Parallelogram Area', vars: ['b', 'h'], expr: 'b * h', description: 'b × h' },
  { id: 'area_trapezoid', name: 'Trapezoid Area', vars: ['a', 'b', 'h'], expr: '0.5 * (a + b) * h', description: '½(a+b)h' },
  { id: 'area_rhombus', name: 'Rhombus Area (diagonals)', vars: ['d1', 'd2'], expr: '0.5 * d1 * d2', description: '½d₁d₂' },
  { id: 'area_ellipse', name: 'Ellipse Area', vars: ['a', 'b'], expr: 'Math.PI * a * b', description: 'πab' },
  { id: 'area_polygon', name: 'Regular Polygon Area', vars: ['n', 's'], expr: '(n * s * s) / (4 * Math.tan(Math.PI / n))', description: '(ns²)/(4tan(π/n))' },

  // Perimeter formulas
  { id: 'peri_square', name: 'Square Perimeter', vars: ['a'], expr: '4 * a', description: '4a' },
  { id: 'peri_rectangle', name: 'Rectangle Perimeter', vars: ['l', 'w'], expr: '2 * (l + w)', description: '2(l + w)' },
  { id: 'circum_circle', name: 'Circle Circumference', vars: ['r'], expr: '2 * Math.PI * r', description: '2πr' },
  { id: 'peri_triangle', name: 'Triangle Perimeter', vars: ['a', 'b', 'c'], expr: 'a + b + c', description: 'a + b + c' },
  { id: 'peri_parallelogram', name: 'Parallelogram Perimeter', vars: ['a', 'b'], expr: '2 * (a + b)', description: '2(a + b)' },
  { id: 'peri_trapezoid', name: 'Trapezoid Perimeter', vars: ['a', 'b', 'c', 'd'], expr: 'a + b + c + d', description: 'a + b + c + d' },
  { id: 'peri_rhombus', name: 'Rhombus Perimeter', vars: ['a'], expr: '4 * a', description: '4a' },
  { id: 'peri_polygon', name: 'Regular Polygon Perimeter', vars: ['n', 's'], expr: 'n * s', description: 'ns' },

  // Volume formulas
  { id: 'vol_cube', name: 'Cube Volume', vars: ['a'], expr: 'a * a * a', description: 'a³' },
  { id: 'vol_cuboid', name: 'Cuboid Volume', vars: ['l', 'w', 'h'], expr: 'l * w * h', description: 'lwh' },
  { id: 'vol_sphere', name: 'Sphere Volume', vars: ['r'], expr: '(4/3) * Math.PI * Math.pow(r, 3)', description: '(4/3)πr³' },
  { id: 'vol_cylinder', name: 'Cylinder Volume', vars: ['r', 'h'], expr: 'Math.PI * r * r * h', description: 'πr²h' },
  { id: 'vol_cone', name: 'Cone Volume', vars: ['r', 'h'], expr: '(1/3) * Math.PI * r * r * h', description: '(1/3)πr²h' },
  { id: 'vol_hemisphere', name: 'Hemisphere Volume', vars: ['r'], expr: '(2/3) * Math.PI * Math.pow(r, 3)', description: '(2/3)πr³' },
  { id: 'vol_square_pyramid', name: 'Square Pyramid Volume', vars: ['b', 'h'], expr: '(1/3) * b * b * h', description: '(1/3)b²h' },
  { id: 'vol_tri_prism', name: 'Triangular Prism Volume', vars: ['b', 'h', 'l'], expr: '0.5 * b * h * l', description: '½bhl' },

  // Arithmetic
  { id: 'add', name: 'Addition', vars: ['a', 'b'], expr: 'a + b', description: 'a + b' },
  { id: 'sub', name: 'Subtraction', vars: ['a', 'b'], expr: 'a - b', description: 'a - b' },
  { id: 'mul', name: 'Multiplication', vars: ['a', 'b'], expr: 'a * b', description: 'a × b' },
  { id: 'div', name: 'Division', vars: ['a', 'b'], expr: 'a / b', description: 'a ÷ b' },

  // Algebra & Sequences
  { id: 'quadratic', name: 'Quadratic Formula', vars: ['a', 'b', 'c'], expr: null, special: true, description: 'Roots of ax² + bx + c = 0' },
  { id: 'sum_arith_seq', name: 'Sum of Arithmetic Sequence', vars: ['n', 'a1', 'an'], expr: 'n * (a1 + an) / 2', description: 'n(a₁ + aₙ)/2' },

  // Geometry
  { id: 'pythagoras', name: 'Pythagorean Theorem', vars: ['a', 'b'], expr: 'Math.sqrt(a*a + b*b)', description: '√(a² + b²)' },

  // Trigonometry
  { id: 'sin', name: 'Sine', vars: ['x'], expr: 'Math.sin(x)', description: 'sin(x)' },
  { id: 'cos', name: 'Cosine', vars: ['x'], expr: 'Math.cos(x)', description: 'cos(x)' },
  { id: 'tan', name: 'Tangent', vars: ['x'], expr: 'Math.tan(x)', description: 'tan(x)' },
  { id: 'cos_double', name: 'Cos Double Angle', vars: ['x'], expr: 'Math.cos(2 * x)', description: 'cos(2x)' },

  // Calculus
  { id: 'diff_quot', name: 'Difference Quotient', vars: ['f_x_h', 'f_x', 'h'], expr: '(f_x_h - f_x) / h', description: '[f(x+h) - f(x)] / h' },

  // Statistics
  { id: 'arith_mean', name: 'Arithmetic Mean', vars: ['arr'], expr: 'arr.reduce((a,b)=>a+b,0)/arr.length', description: 'Σx/n' },
  { id: 'std_dev', name: 'Standard Deviation (sample)', vars: ['arr'], expr: 'let m=arr.reduce((a,b)=>a+b,0)/arr.length; Math.sqrt(arr.map(x=>Math.pow(x-m,2)).reduce((a,b)=>a+b,0)/(arr.length-1))', description: '√[Σ(xi-x̄)²/(n-1)]' },

  // Combinatorics
  { id: 'perm', name: 'Permutation nPk', vars: ['n', 'k'], expr: 'factorial(n)/factorial(n-k)', description: 'n!/(n-k)!' },
  { id: 'comb', name: 'Combination nCk', vars: ['n', 'k'], expr: 'factorial(n)/(factorial(k)*factorial(n-k))', description: 'n!/[k!(n-k)!]' },

  // Finance
  { id: 'simple_interest', name: 'Simple Interest', vars: ['P', 'r', 't'], expr: 'P * r * t / 100', description: 'Prt/100' },
  { id: 'compound_interest', name: 'Compound Interest', vars: ['P', 'r', 'n', 't'], expr: 'P * Math.pow((1 + r/n), n*t)', description: 'P(1 + r/n)^(nt)' },

  // Miscellaneous
  { id: 'factorial', name: 'Factorial', vars: ['n'], expr: 'factorial(n)', description: 'n!' },
  { id: 'gcd', name: 'GCD (Euclid)', vars: ['a', 'b'], expr: 'while(b){[a,b]=[b,a%b]} return a', description: 'Euclidean algorithm' }
];

// Helper functions for special cases
function factorial(n) {
  if (n < 0) return NaN;
  let res = 1;
  for (let i = 2; i <= n; i++) res *= i;
  return res;
}