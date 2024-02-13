const rectangle = document.getElementById('rectCalc').addEventListener('click', function(){
    const width = parseFloat(document.getElementById('RectangleWidth').value);
    const length = parseFloat(document.getElementById('RectangleLength').value);

    document.getElementById('rectangleMeasures').innerText = 'w: '+width +' cm'+ ' l: '+length + ' cm';

    if(isNaN(width) && isNaN(length)){
        return 'Please add both values';
    }
    else{
        const area = width * length;
    }
})
