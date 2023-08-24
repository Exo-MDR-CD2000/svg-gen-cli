// code to generate the shapes here using the information provided by the user

// const generateShape = (shape, size) => {
// switch (shape) {
//     case 'square':
//       return `<rect x="0" y="0" width="${size}" height="${size}" />`;
      
//     case 'circle':
//         const radius = size / 2;
//         return `<circle cx="${radius}" cy="${radius}" r="${radius}" />`;

//     case 'triangle':
//         const halfSize = size / 2;
//         return `<polygon points="0,${size} ${halfSize},0 ${size},${size}" />`;

//     default:
//             throw new Error(`Invalid shape: ${shape}. Must be square, circle, or triangle`);
// }   
// };

//hmmm... this test is not right. I need to set the shape size to 300x200 pixels and also test for color.


// const generateShape = (shape, color) => {
//     switch (shape) {
//       case 'square':
//         return `<rect x="0" y="0" width="300" height="200" fill="${color}" />`;

//       case 'circle':
//         const radius = 100;
//         return `<circle cx="150" cy="100" r="${radius}" fill="${color}" />`;

//       case 'triangle':
//         return `<polygon points="0,200 150,0 300,200" fill="${color}" />`;

//       default:
//         throw new Error(`Invalid shape: ${shape}`);
//     }
//   };

  //okay so this will take in two arguments, the shape and the color. size should already be set to 300x200 pixels.




// I'm going to seperate the shape generation into it's own function for better modularity.
// should help with writing tests too.




// Shape generator functions
const generateSquare = (color) => `<rect x="0" y="0" width="300" height="200" fill="${color}" />`;

const generateCircle = (color) => {
  const radius = 100;
  return `<circle cx="150" cy="100" r="${radius}" fill="${color}" />`;
};

const generateTriangle = (color) => `<polygon points="0,200 150,0 300,200" fill="${color}" />`;


  const generateShape = (shape, color) => {
  switch (shape) {
    case 'square':
      return generateSquare(color);

    case 'circle':
      return generateCircle(color);

    case 'triangle':
      return generateTriangle(color);

    default:
      throw new Error(`Invalid shape: ${shape}`);
  }
};

module.exports = { generateShape };