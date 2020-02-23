// Get required nodes from DOM
let algoVisulaizerNode = document.getElementById('algo-visulaizer');
let algorithmSelectedNode = document.getElementById('algorithmSelected');
let nInputCountNode = document.getElementById('nInputCount');

// Get Visualization node height and width
let algoVisulaizerNodeHeight = document.getElementById('algo-visulaizer').offsetHeight;
let algoVisulaizerNodeWidth = document.getElementById('algo-visulaizer').offsetWidth;

// Input number and selected algorithm reference
let nInputCount, algorithmSelected, nInputArray = [];

// Get random number between min and max
function getRandomNumber(max, min) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


// Generate random n numbers and display bars
function setNumberCountAndDisplayBars() {
    nInputCount = 25;
    const singleBarWidth = algoVisulaizerNodeWidth / nInputCount;
    const visulaizerHtmlStart = `<div class="d-flex align-items-end" style="width: 100%;">`;
    const visulaizerHtmlEnd = `</div>`;
    let content = '';

    for(let i = 0; i < nInputCount; i++) {
        let singleBarHeight = getRandomNumber(10, 500);
        nInputArray.push(singleBarHeight);
        content += `<div id=node-${singleBarHeight} style="width: ${singleBarWidth}px; height: ${singleBarHeight}px; margin-right: ${singleBarWidth / 10}px; background-color: #4EB285; "></div>`;
    }

    let visulaizerHtml = visulaizerHtmlStart + content + visulaizerHtmlEnd;
    // set HTML in dom
    algoVisulaizerNode.innerHTML = `${visulaizerHtml}`
}

function bubbleSort() {
    console.log('NInput', nInputArray, nInputCount)
    for (let i = 0; i < nInputArray.length - 1; i++) {
        for (let j = 0; j < nInputArray.length - 1 - i; j++) {
            setTimeout(() => {
                let nodeAtJPosition = document.getElementById(`node-${nInputArray[j]}`);
                let nodeAtJ1Position = document.getElementById(`node-${nInputArray[j + 1]}`);
                if (nInputArray[j] > nInputArray[j + 1]) {
                    nodeAtJPosition.style.backgroundColor = 'black';
                    nodeAtJ1Position.style.backgroundColor = 'black';

                    let tmp = nInputArray[j];
                    nInputArray[j] = nInputArray[j + 1];
                    nInputArray[j + 1] = tmp;

                    nodeAtJ1Position.parentNode.insertBefore(nodeAtJ1Position, nodeAtJPosition);
                } else {
                    nodeAtJPosition.style.backgroundColor = '#a3dd11';
                    nodeAtJ1Position.style.backgroundColor = '#a3dd11';
                }

                console.log('Bubble New', nInputArray);

                // window.location.reload();
            }, i * 50)
        }
    }

}

function selectionSort() {
        let len = nInputArray.length;
        console.log('nInputArray', nInputArray)
        for (let i = 0; i < len; i++) {
            setTimeout((i) => {
            let min = i;

                for (let j = i + 1; j < len; j++) {
                    if (nInputArray[min] > nInputArray[j]) {
                        min = j;
                    }
                }
            if (min !== i) {

                let nodeAtIPosition = document.getElementById(`node-${nInputArray[i]}`);
                let nodeAtMinPosition = document.getElementById(`node-${nInputArray[min]}`);
                nodeAtIPosition.style.backgroundColor = 'black';
                nodeAtMinPosition.style.backgroundColor = 'black';

                let tmp = nInputArray[i];
                nInputArray[i] = nInputArray[min];
                nInputArray[min] = tmp;

                nodeAtMinPosition.parentNode.insertBefore(nodeAtMinPosition, nodeAtIPosition);
            }
            console.log('Selection sort', nInputArray);
            // window.location.reload();
        }, i * 50, i);
    }
}