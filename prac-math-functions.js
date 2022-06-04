/* JAVASCRIPT FUNCTION PRACTICE*/

// 1. Attach this file geometry.js to the index.html file

// 2. Create a function that calculates the area of a rectangle.
//    The function should accept the width and height as arguments
//    and return the area of that rectangle.
//    The area of a rectangle is the width * height

function getArea (height, width) {
    area = height * width;
    return (area);
    }
  
  console.log(getArea(5,22));
  console.log( `The area of the rectangle is ${area}`);

  
  // 3. Create a function that calculates the volume of a rectangular prism.
  //    The function should accept the width, height and length as arguments
  //    and return the volume of that rectangular prism.
  //    The volume of a rectangular prism is the width * height * length
  
  
  function getVolume (width2, height2, length2) {
    volume = width2 * height2 * length2;
    return(volume);
  };
  
  console.log(getVolume(4.5, 12.5, 17.4));
  console.log( `The volume of the rectangular prism is ${volume}`);
  
  // 4. Create a function that calculates the area of a circle.
  //    The function should accept the radius of the circle as an argument
  //    and return the area of that circle.
  //    The area of a circle is the value of π * radius^2


  function getCircleArea (radius) {
    circleArea = Math.PI * Math.pow (radius, 2);
    return(circleArea);
  };

  console.log(getCircleArea(7.2));
  console.log (`The circle's area is ${circleArea}`);

  
  // 5. Create a function that calculates the volume of a sphere.
  //    The function should accept the radius of the sphere as an argument
  //    and return the volume.
  //    The volume of a circle is: 4/3 *  π * radius^3

  function getSphereVolume (sphereRadius) {
      sphereVolume = 4/3 *  Math.PI * Math.pow (sphereRadius, 3);
      return(sphereVolume);
  }

  console.log(getSphereVolume(7.2));
  console.log(`The sphere's volume is ${sphereVolume}`);
  
  // 6. Use console.log to test each function and output to the JavaScript console
  //    Here are the values to test and the expected results
  //    -- Area of rectangle that is 5 wide and 22 tall: 110
  //    -- Volume of a rectangular prism that is 4.5 x 12.5 x 17.4: 978.7499999999999
  //    -- Area of a circle that with a radius of 7.2: 162.8601631620949
  //    -- Volume of a sphere with a radius of 7.2: 1563.4575663561109
  
  
  
  
  
  