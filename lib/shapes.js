// code to generate the shapes here using the information provided by the user

const generateShape = (shape, size) => {
switch (shape) {
    case 'square':
      return `<rect x="0" y="0" width="${size}" height="${size}" />`;
      
    case 'circle':
        const radius = size / 2;
        return `<circle cx="${radius}" cy="${radius}" r="${radius}" />`;

    case 'triangle':
        const halfSize = size / 2;
        return `<polygon points="0,${size} ${halfSize},0 ${size},${size}" />`;

    default:
            throw new Error(`Invalid shape: ${shape}. Must be square, circle, or triangle`);
}   
};