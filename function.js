let array = [];
let sorting = false;
let algorithm = 'bubbleSort';

const pythonCodes = {
    bubbleSort: `def bubbleSort(arr):
    n = len(arr)
    for i in range(n):
        swapped = False
        for j in range(0, n-i-1):
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]
                swapped = True
                if (swapped == False):
                    break
if __name__ == "__main__":
    arr = [${document.querySelector('#arrayInput').value}];
        
    bubbleSort(arr)
        
    print("Sorted array:")
    for i in range(len(arr)):
        print("%d" % arr[i], end=" ")
        `,
    selectionSort: `def selectionSort(arr):
    # Traverse through all array elements
    for i in range(len(arr)):
        min_idx = i
        for j in range(i+1, len(arr)):
            if arr[min_idx] > arr[j]:
                min_idx = j
        arr[i], arr[min_idx] = arr[min_idx], arr[i]
if __name__ == "__main__":
    arr = ;
    selectionSort(arr)

    print("Sorted array:")
    for i in range(len(arr)):
        print("%d" % arr[i], end=" ")

        `,
    insertionSort: `def insertionSort(arr):
    for i in range(1, len(arr)):

        key = arr[i]
        j = i-1
        while j >=0 and key < arr[j] :
                arr[j+1] = arr[j]
                j -= 1
        arr[j+1] = key

if __name__ == "__main__":
    arr = ;

    insertionSort(arr)   

    print("Sorted array:")
    for i in range(len(arr)):
        print("%d" % arr[i], end=" ")
    }

        `,
    quickSort: `def quickSort(arr, low, high):
    if low < high:
        pi = partition(arr, low, high)

        quickSort(arr, low, pi-1)
        quickSort(arr, pi+1, high)

def partition(arr, low, high):
    pivot = arr[high]

    i = low - 1

    for j in range(low, high):
        if arr[j] < pivot:
            i = i + 1
            arr[i], arr[j] = arr[j], arr[i]

    arr[i+1], arr[high] = arr[high], arr[i+1]
    return (i+1)


if __name__ == "__main__":
    arr = [];

    quickSort(arr, 0, len(arr)-1)

    print("Sorted array:")
    for i in range(len(arr)):
        print("%d" % arr[i], end=" ")

    }`,
    mergeSort: `def mergeSort(arr):
    if len(arr) > 1:
        mid = len(arr)//2
        L = arr[:mid]
        R = arr[mid:]

        mergeSort(L)
        mergeSort(R)

        i = j = k = 0

        while i < len(L) and j < len(R):
            if L[i] < R[j]:
                arr[k] = L[i]
                i+=1
            else:
                arr[k] = R[j]
                j+=1
            k+=1

        while i < len(L):
            arr[k] = L[i]
            i+=1
            k+=1

        while j < len(R):
            arr[k] = R[j]
            j+=1    
            k+=1
            
if __name__ == "__main__":
    arr = [];

    mergeSort(arr)

    print("Sorted array:")
    for i in range(len(arr)):
        print("%d" % arr[i], end=" ")
    }`
};

const explanations = {
    bubbleSort: `Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in the wrong order. This algorithm is not suitable for large data sets as its average and worst-case time complexity are quite high.<br><br>

1. We sort the array using multiple passes. After the first pass, the maximum element goes to end (its correct position). Same way, after second pass, the second largest element goes to second last position and so on.<br><br>
2. In every pass, we process only those elements that have already not moved to correct position. After k passes, the largest k elements must have been moved to the last k positions.<br><br>
3. In a pass, we consider remaining elements and compare all adjacent and swap if larger element is before a smaller element. If we keep doing this, we get the largest (among the remaining elements) at its correct position.`,

    selectionSort: `<b>Selection Sort </b> is a comparison-based sorting algorithm. It sorts an array by repeatedly selecting the smallest (or largest) element from the unsorted portion and swapping it with the first unsorted element. This process continues until the entire array is sorted.<br><br>

1. First we find the smallest element and swap it with the first element. This way we get the smallest element at its correct position.<br><br>
2. Then we find the smallest among remaining elements (or second smallest) and swap it with the second element.<br><br>
3. We keep doing this until we get all elements moved to correct position.`,

    insertionSort: `<b>Insertion sort</b> is a simple sorting algorithm that works by iteratively inserting each element of an unsorted list into its correct position in a sorted portion of the list. It is like sorting playing cards in your hands. You split the cards into two groups: the sorted cards and the unsorted cards. Then, you pick a card from the unsorted group and put it in the right place in the sorted group.<br><br>

1. We start with second element of the array as first element in the array is assumed to be sorted.<br><br>
2. Compare second element with the first element and check if the second element is smaller then swap them.<br><br>
3. Move to the third element and compare it with the first two elements and put at its correct position
Repeat until the entire array is sorted.`,

    quickSort: `QuickSort works on the principle of divide and conquer, breaking down the problem into smaller sub-problems.<br><br>

There are mainly three steps in the algorithm:<br><br>

1. Choose a Pivot: Select an element from the array as the pivot. The choice of pivot can vary (e.g., first element, last element, random element, or median).<br><br>
2. Partition the Array: Rearrange the array around the pivot. After partitioning, all elements smaller than the pivot will be on its left, and all elements greater than the pivot will be on its right. The pivot is then in its correct position, and we obtain the index of the pivot.<br><br>
3. Recursively Call: Recursively apply the same process to the two partitioned sub-arrays (left and right of the pivot).
Base Case: The recursion stops when there is only one element left in the sub-array, as a single element is already sorted.`,
    mergeSort: `Merge sort is a popular sorting algorithm known for its efficiency and stability. It follows the divide-and-conquer approach to sort a given array of elements.<br><br>
Here's a step-by-step explanation of how merge sort works:
<br>
<br>
1.<b>Divide</b>:  Divide the list or array recursively into two halves until it can no more be divided.
<br> 
2.<b>Conquer</b>:  Each subarray is sorted individually using the merge sort algorithm. 
<br>
3.<b>Merge</b>:  The sorted subarrays are merged back together in sorted order. The process continues until all elements from both subarrays have been merged. `
};

const guessCodes = {
    bubbleSort: `Bubble Sort Algorithm`,
    selectionSort: `Selection Sort Algorithm `,
    insertionSort: `Insertion Sort Algorithm `,
    quickSort: `Quick Sort Algorithm `,
    mergeSort: `Merge Sort Algorithm `
}


let selectedAlgorithm = "";

document.querySelectorAll("#algo").forEach((btn) => {
    btn.addEventListener("click", function (e) {
        e.preventDefault();

        document.querySelectorAll("#algo").forEach((button) => {
            button.style.backgroundColor = ""; 
        });

        selectedAlgorithm = this.getAttribute("data-algorithm");
        document.getElementById("algorithm-code").textContent = pythonCodes[selectedAlgorithm];
        document.getElementById("guess").innerHTML = `Let me guess..🤔You are using <b>${guessCodes[selectedAlgorithm]}</b> Currently `;
        document.getElementById("algo-selectMsg").classList.add("hidden");
        this.style.backgroundColor = "#001d23";
    });
});


function setArray() {
    let input = document.getElementById("arrayInput").value.trim();
    if (!input) {
        alert("⚠️ Please enter numbers separated by commas.");
        return;
    }
    let arr = input.split(",").map(num => num.trim()).map(Number);
    if (arr.some(num => isNaN(num) || !Number.isInteger(num) || Math.abs(num) > 999)) {
        alert("⚠️ Invalid input! Enter only integers (max 3 digits each). ");
        return;
    }
    if (arr.length > 7) {
        alert("⚠️ Maximum array size is 7. Please enter up to 7 numbers.");
        return;
    }
    if (arr.length === 1 || arr.every((num, i, a) => i === 0 || a[i - 1] <= num)) {
        alert("✅ The array is already sorted!");
        renderArray(arr);
        return;
    }
    array = arr;
    renderArray();
}

function resetArray() {
    document.getElementById("arrayInput").value = "";
    array = [];
    sorting = false;
    renderArray();
}

function renderArray(highlighted = []) {
    const barsContainer = document.getElementById("bars");
    barsContainer.innerHTML = "";
    array.forEach((value, index) => {
        const bar = document.createElement("div");
        bar.className = "bar";
        bar.textContent = value;
        if (highlighted.includes(index)) {
            bar.classList.add("highlight");
            bar.style.color = "#DDE6ED";
            bar.style.borderColor = "#DDE6ED";
        }
        barsContainer.appendChild(bar);

    });
}

function highlightCodeLine(lineNumber) {
    const codeLines = document.getElementById("algorithm-code").textContent.split('\n');
    const highlightedCode = codeLines.map((line, index) => {
        if (index === lineNumber) {
            return `<span style="background-color: #59636b; color: white;">${line}</span>`;
        }
        return line;
    }).join('\n');
    document.getElementById("algorithm-code").innerHTML = highlightedCode;
}

var animationSpeed = "500";

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function bubbleSort() {
    sorting = true;
    for (let i = 0; i < array.length - 1; i++) {
        highlightCodeLine(2); // Highlight outer loop
        await sleep(animationSpeed / 2); // Pause for visibility

        for (let j = 0; j < array.length - i - 1; j++) {
            highlightCodeLine(4); // Highlight inner loop
            renderArray([j, j + 1]);
            await sleep(animationSpeed);

            highlightCodeLine(5); // Highlight comparison line
            if (array[j] > array[j + 1]) {
                highlightCodeLine(6); // Highlight swap line
                [array[j], array[j + 1]] = [array[j + 1], array[j]];

                renderArray([j, j + 1]); // Show updated array
                await sleep(animationSpeed);
            }
        }
    }
    sorting = false;
}




async function selectionSort() {
    sorting = true;
    for (let i = 0; i < array.length - 1; i++) {
        highlightCodeLine(1); // Highlight outer loop
        let minIndex = i;

        for (let j = i + 1; j < array.length; j++) {
            highlightCodeLine(3); // Highlight inner loop
            renderArray([minIndex, j]); 
            await sleep(animationSpeed);

            highlightCodeLine(4); // Highlight comparison
            if (array[j] < array[minIndex]) {
                minIndex = j;
                highlightCodeLine(5); // Highlight minIndex update
            }
        }

        if (minIndex !== i) {
            highlightCodeLine(6); // Highlight swap only if it happens
            [array[i], array[minIndex]] = [array[minIndex], array[i]];
            renderArray([i, minIndex]); 
            await sleep(animationSpeed);
        }
    }
    sorting = false;
}



async function insertionSort() {
    sorting = true;
    for (let i = 1; i < array.length; i++) {
        highlightCodeLine(1); // Highlight outer loop
        let key = array[i];
        let j = i - 1;

        while (j >= 0 && array[j] > key) {
            highlightCodeLine(3); // Highlight comparison
            renderArray([j, j + 1]);
            await sleep(animationSpeed);

            highlightCodeLine(4); // ✅ Highlight before shifting element
            await sleep(animationSpeed / 2); // Allow highlight effect
            
            array[j + 1] = array[j]; // Shift element
            renderArray([j, j + 1]); // Update visualization
            await sleep(animationSpeed);
            j--;
        }

        highlightCodeLine(5); // ✅ Highlight insertion step
        await sleep(animationSpeed / 2); // Allow highlight effect
        
        array[j + 1] = key; // Insert key in the correct position
        renderArray([j + 1]); 
        await sleep(animationSpeed);
    }
    sorting = false;
}



async function quickSort(low, high) {
    if (low < high) {
        highlightCodeLine(1);
        let pi = await partition(low, high);

        await quickSort(low, pi - 1);
        await quickSort(pi + 1, high);
    }
}

async function partition(low, high) {
    highlightCodeLine(2);
    let pivot = array[high];
    let i = low - 1;

    for (let j = low; j < high; j++) {
        highlightCodeLine(4);
        renderArray([j, high]);
        await sleep(animationSpeed);

        if (array[j] < pivot) {
            i++;
            highlightCodeLine(5);
            [array[i], array[j]] = [array[j], array[i]];
            renderArray([i, j]);
            await sleep(animationSpeed);
        }
    }

    highlightCodeLine(6);
    [array[i + 1], array[high]] = [array[high], array[i + 1]];
    renderArray([i + 1, high]);
    await sleep(animationSpeed);

    return i + 1;
}


async function mergeSort(start = 0, end = array.length) {
    if (end - start <= 1) return;

    highlightCodeLine(1); // Highlight the divide step
    await sleep(animationSpeed / 2); // Short delay for visibility

    let mid = Math.floor((start + end) / 2);

    await mergeSort(start, mid); // Sort left half
    await mergeSort(mid, end);   // Sort right half

    highlightCodeLine(2); // Highlight merge step
    await sleep(animationSpeed / 2); // Pause before merging

    await merge(start, mid, end); // Merge both halves
}


async function merge(start, mid, end) {
    highlightCodeLine(2);

    let left = array.slice(start, mid);
    let right = array.slice(mid, end);
    let i = 0, j = 0, k = start;

    while (i < left.length && j < right.length) {
        highlightCodeLine(4);
        if (left[i] < right[j]) {
            array[k] = left[i];
            i++;
        } else {
            array[k] = right[j];
            j++;
        }
        renderArray([k]);
        await sleep(animationSpeed);
        k++;
    }

    while (i < left.length) {
        highlightCodeLine(5);
        array[k] = left[i];
        renderArray([k]);
        await sleep(animationSpeed);
        i++; k++;
    }

    while (j < right.length) {
        highlightCodeLine(6);
        array[k] = right[j];
        renderArray([k]);
        await sleep(animationSpeed);
        j++; k++;
    }
}


let currentAlgorithm = null;

function setAlgorithm(algo) {
    currentAlgorithm = algo;
}



async function handleSort() {
    if (!currentAlgorithm || array.length === 0) {
        alert("Please select an algorithm and enter an array!");
        return;
    }

    if (currentAlgorithm === "quickSort") {
        await quickSort(0, array.length - 1);
    } else if (currentAlgorithm === "bubbleSort") {
        await bubbleSort();
    } else if (currentAlgorithm === "selectionSort") {
        await selectionSort();
    } else if (currentAlgorithm === "insertionSort") {
        await insertionSort();
    } else if (currentAlgorithm === "mergeSort") {
        await mergeSort(0, array.length + 1);
    }
}

function selectAlgorithm(algo) {
    currentAlgorithm = algo;
    document.querySelector("#explain").innerHTML = explanations[currentAlgorithm];
    document.querySelector(".explain-heading").innerHTML = currentAlgorithm;


    updateVideo(currentAlgorithm);
}
function updateVideo(algorithm) {
    const videos = {
        "mergeSort": "https://www.youtube.com/embed/4VqmGXwpLqc",
        "quickSort": "https://www.youtube.com/embed/Hoixgm4-P4M",
        "bubbleSort": "https://www.youtube.com/embed/xli_FI7CuzA",
        "insertionSort": "https://www.youtube.com/embed/JU767SDMDvA",
        "selectionSort": "https://www.youtube.com/embed/g-PGLbMth_g"
    };

    if (!algorithm || !videos[algorithm]) {
        console.error("Invalid algorithm or no video available for:", algorithm);
        return;
    }

    const videoElement = document.getElementById("sortVideo");
    if (!videoElement) {
        console.error("Video element not found!");
        return;
    }

    console.log("Updating video for:", algorithm, videos[algorithm]);
    videoElement.src = videos[algorithm];
}


var speedBar = document.querySelector(".speed-bar");

function adjustSpeed() {
    
    switch (Number(speedBar.value)) {
        case 1:
            animationSpeed = (speedBar.value) * 1000;
            document.getElementById("current-speed").innerHTML = ` Current Speed : 10 km/h😪`;
            break;
        case 2:
            animationSpeed = (speedBar.value) * 450;
            document.getElementById("current-speed").innerHTML = ` Current Speed : 20 km/h🥱`;
            break;
        case 3:
            animationSpeed = (speedBar.value) * 266.66;
            document.getElementById("current-speed").innerHTML = ` Current Speed : 30 km/h😑`;
            break;
        case 4:
            animationSpeed = (speedBar.value) * 175;
            document.getElementById("current-speed").innerHTML = ` Current Speed : 40 km/h😐`;
            break;
        case 5:
            animationSpeed = (speedBar.value) * 120;
            document.getElementById("current-speed").innerHTML = ` Current Speed : 50 km/h😁`;
            break;
        case 6:
            animationSpeed = (speedBar.value) * 83.33;
            document.getElementById("current-speed").innerHTML = ` Current Speed : 60 km/h😶`;
            break;
        case 7:
            animationSpeed = (speedBar.value) * 57.14;
            document.getElementById("current-speed").innerHTML = ` Current Speed : 70 km/h😮`;
            break;
        case 8:
            animationSpeed = (speedBar.value) * 37.5;
            document.getElementById("current-speed").innerHTML = ` Current Speed : 80 km/h😲`;
            break;
        case 9:
            animationSpeed = (speedBar.value) * 22.22;
            document.getElementById("current-speed").innerHTML = ` Current Speed : 90 km/h 😵‍💫`;
            break;
        case 10:
            animationSpeed = (speedBar.value) * 10;
            document.getElementById("current-speed").innerHTML = ` Current Speed : 100 km/h🫨 `;
            break;

        default:
            break;
    }
}

speedBar.addEventListener("input", adjustSpeed);




