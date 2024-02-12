document.getElementById('triangle-calculate').addEventListener('click', function(event){
    const b = parseFloat(document.getElementById('triangle-b').value);
    const h = parseFloat(document.getElementById('triangle-h').value);

    document.getElementById('baseHeight').innerText = 'b: '+b +' cm'+ ' h: '+h + ' cm';

    if(isNaN(b) || isNaN(h)){
        console.log('Please add both values');
    }
    else{
        const area = 0.5 * b * h;
        console.log(area);
    }
})