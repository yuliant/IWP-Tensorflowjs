<!DOCTYPE html>
<html lang="en">

<head>

  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta name="description" content="">
  <meta name="author" content="">

  <title>Ideal Weight Prediction With Tensorflow.js</title>

  <script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@1.0.0/dist/tf.min.js"></script>

  <!-- Custom fonts for this template-->
  <link href="assets/vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css">
  <link href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet">

  <!-- Custom styles for this template-->
  <link href="assets/css/sb-admin-2.min.css" rel="stylesheet">

</head>

<body class="" style="background-color:#149dcc;">
  <?php include './tfjs/get-data.php'; ?>

  <div class="container">

    <!-- Outer Row -->
    <div class="row justify-content-center">

      <div class="col-xl-10 col-lg-12 col-md-9">

        <div class="card o-hidden border-0 shadow-lg my-5">
          <div class="card-body p-0">
            <!-- Nested Row within Card Body -->
            <div class="row">
              <div class="col-lg-6 d-none d-lg-block ">
                <img src="assets/img/pogba.jpg">
              </div>
              <div class="col-lg-6">
                <div class="p-5">
                  <div class="text-center">
                    <h1 class="text-gray-900 mb-3 mt-1.5"><b>Ideal Weight Prediction</b></h1>
                    <h1 class="h6 text-gray-900 mb-4">With Tensorflow</h1>
                  </div>
                  <form class="user" id="myform">
                    <div class="form-group">
                      <input type="number" class="form-control form-control-user" id="inputText" placeholder="Enter your height in cm">
                    </div>
                    <div class="form-group">
                      <input type="number" class="form-control form-control-user" id="inputTextWeight" placeholder="Enter your weight in kg">
                    </div>

                    <button type="button" style="background-color:#149dcc;color:#ffffff" class="btn btn-user btn-block" id="predictButton" disabled>
                      Model is being trained, please wait ...
                    </button>
                    <hr>
                  </form>

                  <!-- <div class="text-center">
                    <a class="small" href="forgot-password.html">Forgot Password?</a>
                  </div>
                  <div class="text-center">
                    <a class="small" href="register.html">Create an Account!</a>
                  </div> -->
                  <div class="text-center">
                    <h1 class="h6 text-gray-900 mb-1">Predicted</h1>
                    <h1 class="h1 text-gray-900"><b><span id="predict" class="predict">00</span> Kg</b></h1>
                  </div>
                  <div class="alert alert-dark" role="alert" id="MyAlert">
                    <h6><span id="results">No comment</span><span id="mathIdealWeight"></span></h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>

  </div>

  <!-- Bootstrap core JavaScript-->
  <script src="assets/vendor/jquery/jquery.min.js"></script>
  <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

  <!-- Core plugin JavaScript-->
  <script src="assets/vendor/jquery-easing/jquery.easing.min.js"></script>

  <!-- Custom scripts for all pages-->
  <script src="assets/js/sb-admin-2.min.js"></script>

  <!-- Script Tensorflow.js-->
  <script src="./tfjs/weight-tf.js"></script>

</body>

</html>
