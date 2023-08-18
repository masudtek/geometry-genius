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

function calculateRectangleArea() {
  const widthField = document.getElementById("width-rectangle");
  const widthValueText = widthField.value;
  const width = parseFloat(widthValueText);

  const lengthField = document.getElementById("length-rectangle");
  const lengthValueText = lengthField.value;
  const length = parseFloat(lengthValueText);

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
  //    const parallelogramField = document.getElementById('parallelogram-field');
  //    parallelogramField.innerText = area;
  setElementInnerText("parallelogram-field", area);
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
