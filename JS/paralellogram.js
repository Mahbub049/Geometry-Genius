function calculate(){
    const base = selectValue('ParallelogramBase');
    const height = selectValue('ParallelogramHeight');
    
    setValue(base, height);

    const area = areaCalculate(base, height);
    console.log(area);

}

function selectValue(IDName){
    const value = parseFloat(document.getElementById(IDName).value);
    return value;
}

function areaCalculate(base, height){
    if(isNaN(base) || isNaN(height)){
        return 'provide valid numbers';
    }
    else{
        return area = base * height;
    }
}

function setValue(base, height){
    return document.getElementById('parallelogramMeasures').innerText = "b: "+base+" cm "+"h: "+height+" cm";
}