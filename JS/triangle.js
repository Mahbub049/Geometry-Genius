const triangle = document.getElementById('triangle-calculate').addEventListener('click', function(event){
    const b = parseFloat(document.getElementById('triangle-b').value);
    const h = parseFloat(document.getElementById('triangle-h').value);

    document.getElementById('baseHeight').innerText = 'b: '+b +' cm'+ ' h: '+h + ' cm';

    if(isNaN(b) || isNaN(h)){
        return 'Please add both values';
    }
    else{
        let area = 0.5 * b * h;
        const list = document.getElementById('list');
        const li = document.createElement('li');
        const value = 'Triangle <span class="pr-9"></span> <span id="areaUpdate">' + area + '</span><span id="changeCMtoM">cm</span><sup>2</sup> <span class="pr-9"></span>';
        
        const Button = document.createElement("button");
        Button.innerHTML = 'Convert to m<sup>2</sup>'; 
        Button.className = "mr-10 bg-[#1090D8] rounded-md text-white font-medium text-sm px-4 py-2";
        Button.id= "convert-m";
        Button.addEventListener("click", function(){
            const updatedArea = area * 0.01;
            document.getElementById('areaUpdate').innerText = updatedArea;
            document.getElementById('changeCMtoM').innerText = 'm';
        });

        // Append the button as a child to the li element
        li.innerHTML = value;
        li.appendChild(Button);
        
        list.appendChild(li);
        
    }
})
