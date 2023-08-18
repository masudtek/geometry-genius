function calculateTriangleArea(){
    const baseField = document.getElementById('base-Triangle');
    const baseValueText = baseField.value;
    const base = parseFloat(baseValueText);
    console.log(base)

    const heightField = document.getElementById('height-triangle');
    const heightValueText = heightField.value;
    const height = parseFloat(heightValueText);
    console.log(height);

    const area = 0.5 * base * height;
    console.log(area)
    const areaField = document.getElementById('area-field');
    areaField.innerText = area;
    baseField.value = "";
    heightField.value = "";
}

function calculateRectangleArea(){
    const widthField = document.getElementById('width-rectangle');
    const widthValueText = widthField.value;
    const width = parseFloat(widthValueText);
    console.log(width)

    const lengthField = document.getElementById('length-rectangle');
    const lengthValueText = lengthField.value;
    const length = parseFloat(lengthValueText);
    console.log(length);

    const lengthResult = 0.5 * width * length;
    const lengthDisplay = document.getElementById('rectangle-field');
    lengthDisplay.innerText = lengthResult;
}



// reuseable function ----->> 

// parallelogram 
function calculateParallelogramArea(){
   const base = getInputValue('parallelogram-base');
   const height = getInputValue('parallelogram-height');
   const area = base * height; 
//    const parallelogramField = document.getElementById('parallelogram-field');
//    parallelogramField.innerText = area;
setElementInnerText('parallelogram-field',area );
  
}
// reuseable get
function getInputValue(fieldId){
    const inputField = document.getElementById(fieldId);
    const inputValueText = inputField.value;
    const value = parseFloat(inputValueText);
    inputField.value = "";
    return value;

}

// reuseable set
function setElementInnerText(elementId, area){
    const element = document.getElementById(elementId);
    element.innerText = area ;
}