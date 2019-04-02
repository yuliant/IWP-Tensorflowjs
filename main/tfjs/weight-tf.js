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

model.fit(xs, ys, {epochs: 500}).then(() => {
    // Use model to predict values
    document.getElementById('predictButton').disabled = false;
    document.getElementById('predictButton').innerText = "Predict";
});

//ketika tombol di klik
document.getElementById('predictButton').addEventListener('click', (el, ev) => {
  const output = model.predict(
        tf.tensor2d(
          [parseFloat(inputText.value)/100], [1, 1]
  ));
  predictPlaceholder.innerHTML = Math.floor(Array.from(output.dataSync())[0]);
});

//melakukan formating sesuai format harga
const formatting = num => {
  num *= 1000;
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};
