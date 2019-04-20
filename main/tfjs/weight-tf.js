// import * as tf from "@tensorflow/tfjs";

// Define a model for linear regression.
const model = tf.sequential();
model.add(tf.layers.dense({ units: 1, inputShape: [1] }));

// Prepare the model for training: Specify the loss and the optimizer.
model.compile({ loss: "meanSquaredError", optimizer: "sgd" });

// Provide some housing data
const xs = tf.tensor1d([1.89,1.95,1.55,1.91,1.72,1.85,1.57,1.85,1.9,1.68,1.53,1.8,1.77,1.92,1.65,1.54,1.87,1.69,1.99,1.84,1.81,1.88,1.8,1.73,1.53,1.74,1.66,1.62,1.57,1.9,1.56,1.69,1.88,1.79,1.8,1.48,1.99,1.65,1.72,1.57,1.55,1.91,1.62,1.57,1.84,1.97,1.6,1.63,1.97,1.5,1.67,1.8,1.83,1.82,1.86,1.62,1.77,1.78,1.65,1.82,1.83,1.76,1.75,1.81,1.78,1.67,1.51,1.87,1.64]);
const ys = tf.tensor1d([87,81,51,79,67,81,56,76,83,59,51,75,61,90,57,54,70,54,99,76,78,80,73,82,78,65,61,58,52,80,52,88,81,67,60,54,92,68,62,56,57,68,58,60,83,88,51,63,72,50,58,70,76,70,68,64,61,79,62,73,79,77,83,80,65,64,55,80,59]);

//ini sialisasi id dalam html
  const form = document.getElementById("myform");
  const inputText = document.getElementById("inputText");
  const predictPlaceholder = document.getElementById("predict");
  //costum input
  var mathIdealWeight = document.getElementById("mathIdealWeight");
  var inputTextWeight = document.getElementById("inputTextWeight");
  var results = document.getElementById("results");
  var searchGoogle = document.getElementById("searchGoogle");

model.fit(xs, ys, {epochs: 500}).then(() => {
    // Use model to predict values
    document.getElementById('predictButton').disabled = false;
    document.getElementById('predictButton').innerText = "Predict";
});

//ketika tombol di klik
document.getElementById('predictButton').addEventListener('click', (el, ev) => {
  if (inputText.value == "" || inputTextWeight.value == "" || inputText.length == 0 || inputTextWeight.length == 0) {
    Swal.fire({
      type: 'error',
      title: 'Oops...',
      text: 'Please correct the errors in order to continue',
    });
  }else {
    const output = model.predict(
          tf.tensor2d(
            [parseFloat(inputText.value)/100], [1, 1]
    ));
    predictPlaceholder.innerHTML = Math.floor(Array.from(output.dataSync())[0]);
    //do math
    mathIdealWeight.innerText = inputTextWeight.value - Math.floor(Array.from(output.dataSync())[0]) + " Kg";

    if ((inputTextWeight.value - Math.floor(Array.from(output.dataSync())[0]))>0) {
      document.getElementById("MyAlert").className = "alert alert-danger";
      results.innerText = "You must to reduce the body weight of ";
      searchGoogle.innerHTML = ". I have a recommendation treatment for you about this, click " + '<button class=\"btn btn-success btn-sm"\ id=\"click\">HERE</button>';
      var q = "how to lose weight " + (inputTextWeight.value - Math.floor(Array.from(output.dataSync())[0])) + " kg";
    } else if((inputTextWeight.value - Math.floor(Array.from(output.dataSync())[0]))<0) {
      document.getElementById("MyAlert").className = "alert alert-primary";
      mathIdealWeight.innerText = Math.abs(inputTextWeight.value - Math.floor(Array.from(output.dataSync())[0])) + " Kg";
      results.innerText = "You must to gain the body weight of ";
      searchGoogle.innerHTML = ". I have a recommendation treatment for you about this, click " + '<button class=\"btn btn-danger btn-sm"\ id=\"click\">HERE</button>';
      var q = "how to gain weight " + Math.abs(inputTextWeight.value - Math.floor(Array.from(output.dataSync())[0])) + " kg";
    }else{
      document.getElementById("MyAlert").className = "alert alert-success";
      results.innerText = "Your weight is ideal";
      mathIdealWeight.innerText = " ";
      searchGoogle.innerHTML = ". I have a recommendation treatment for you about this, click " + '<button class=\"btn btn-danger btn-sm"\ id=\"click\">HERE</button>';
      var q = "How to Maintain Ideal Body Weight";
    }

    document.getElementById('click').onclick = function(event) {
        if (event.target.id === 'click') {
          window.open('http://google.com/search?q='+q, '_blank');
        }
    }
  }
});
