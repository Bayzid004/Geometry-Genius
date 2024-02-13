function calculateRectangleArea() {
  // height
  const rectangleHeightInput = document.getElementById("rectangle-height");
  const rectangleHeight = rectangleHeightInput.value;
  const height = parseFloat(rectangleHeight);

  // width
  const rectangleWidthInput = document.getElementById("rectangle-Width");
  const rectangleWidth = rectangleWidthInput.value;
  const width = parseFloat(rectangleWidth);

  // rectangle area
  const area = height * width;
  console.log("Area of the Rectangle is", area);
  // display
  const rectangleAreaSpan = document.getElementById("rectangle-area");
  rectangleAreaSpan.innerText = area;
}
