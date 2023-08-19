// Triangle area

function calculateTriangleArea() {
  const baseField = document.getElementById("base-Triangle");
  const baseValueText = baseField.value;
  const base = parseFloat(baseValueText);

  const heightField = document.getElementById("height-triangle");
  const heightValueText = heightField.value;
  const height = parseFloat(heightValueText);

  const area = 0.5 * base * height;
  const areaField = document.getElementById("area-field");
  areaField.innerText = area;
  baseField.value = "";
  heightField.value = "";
}
// rectangle area calculation

function calculateRectangleArea() {
  const widthField = document.getElementById("width-rectangle");
  const widthValueText = widthField.value;
  const width = parseFloat(widthValueText);
  if(isNaN(width)){
    alert("Please Insert a Number");
    return;
  }

  const lengthField = document.getElementById("length-rectangle");
  const lengthValueText = lengthField.value;
  const length = parseFloat(lengthValueText);
  if(isNaN(length)){
    alert("Please insert a number");
    return;
  }
  /* if(isNaN(width) || isNaN(length)){
    alert("Please Insert a Number");
    return;
  } */

  const lengthResult = 0.5 * width * length;
  const lengthDisplay = document.getElementById("rectangle-field");
  lengthDisplay.innerText = lengthResult;
  widthField.value = "";
  lengthField.value = "";
}

// reuseable function ----->>

// parallelogram
function calculateParallelogramArea() {
  const base = getInputValue("parallelogram-base");
  const height = getInputValue("parallelogram-height");
  const area = base * height;
  if(isNaN(base) || isNaN(height)){
    alert("Please insert a Number");
    return;
  }
  setElementInnerText("parallelogram-field", area);
}

// Ellipse

function calculateEllipseArea(){
    const majorRadius = getInputValue('ellipse-major');
    const minorRadius = getInputValue('ellipse-minor');
    const ellipseArea = 3.1416 * majorRadius * minorRadius;
    setElementInnerText('ellipse-field', ellipseArea);
}

// reuseable get
function getInputValue(fieldId) {
  const inputField = document.getElementById(fieldId);
  const inputValueText = inputField.value;
  const value = parseFloat(inputValueText);
  inputField.value = "";
  return value;
}

// reuseable set
function setElementInnerText(elementId, area) {
  const element = document.getElementById(elementId);
  element.innerText = area;
}
