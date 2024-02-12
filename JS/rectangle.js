document.getElementById('rectCalc').addEventListener('click', function(){
    const width = parseFloat(document.getElementById('RectangleWidth').value);
    const length = parseFloat(document.getElementById('RectangleLength').value);

    document.getElementById('rectangleMeasures').innerText = 'w: '+width +' cm'+ ' l: '+length + ' cm';

    if(isNaN(width) && isNaN(length)){
        console.log('Please add numbers');
    }
    else{
        const area = width * length;
        console.log(area)
    }
})