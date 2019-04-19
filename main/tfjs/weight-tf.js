// import * as tf from "@tensorflow/tfjs";

// Define a model for linear regression.
const model = tf.sequential();
model.add(tf.layers.dense({ units: 1, inputShape: [1] }));

// Prepare the model for training: Specify the loss and the optimizer.
model.compile({ loss: "meanSquaredError", optimizer: "sgd" });

// Provide some housing data
const xs = tf.tensor1d(x);
const ys = tf.tensor1d(y);

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
