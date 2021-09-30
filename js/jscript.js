//
// <?php
// $connect = mysqli_connect('localhost', 'root','','register-bd');
// ?>
// <!doctype html>
// <html lang = "ru">
// <meta charset="utf-8">
// <meta name="viewport" content="width=device-width, initial-scale=1">
// <meta http-equiv="X-UA-Compatible" content="ie=edge">
// <title>Registration</title>
//
// <link rel="stylesheet" href="css/style.css">
// <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
// <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.min.js"></script>
// <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css">
//
// </head>
// <body>
//
// <?php
// require "blocks/header.php" ;
// if(!isset ($_COOKIE['user'])):
//
//     ?>
//
//     <div class="container mt-4">
//
//         <div class="row">
//             <div class="col">
//                 <h1>Registration Form</h1>
//                 <form class="uploadForm" action="" method="post" id="form" enctype="multipart/form-data">
//                     <input type="email" class="form-control" name="email" id="email" placeholder="Write your Email">
//                     <span id="errspan1"><div style="color: red" id="errorMessEmail"> </div></span><br>
//
//                     <input type="text" class="form-control" name="name" id="name" placeholder="Write your Name">
//                     <span id="errspan2"><div style="color: red" id="errorMessName"> </div></span><br>
//
//                     <input type="number" class="form-control" name="number" id="number" min="1" max="100" placeholder="Write your age">
//                     <span id="errspan3"><div style="color: red" id="errorMessNumber"> </div></span><br>
//
//                     <h6>Choose your Gender</h6> <br>
//                     <input type="radio" name="gender" class="gender" checked
//                         <?php if (isset($gender) && $gender=="female") echo "checked";?>
//                            value="female">Female
//                     <input type="radio" name="gender" class="gender"
//                         <?php if (isset($gender) && $gender=="male") echo "checked";?>
//                            value="male">Male
//                     <input type="radio" name="gender" class="gender"
//                         <?php if (isset($gender) && $gender=="other") echo "checked";?>
//                            value="other">Other <br><br>
//
//                     <label for="country">Choose your Country</label>
//                     <select id="country" name="country" class="form-control">
//                         <option value="Afghanistan">Afghanistan</option>
//                         <option value="Åland Islands">Åland Islands</option>
//                         <option value="Albania">Albania</option>
//                         <option value="Algeria">Algeria</option>
//                         <option value="American Samoa">American Samoa</option>
//                         <option value="Andorra">Andorra</option>
//                         <option value="Angola">Angola</option>
//                         <option value="Anguilla">Anguilla</option>
//                         <option value="Antarctica">Antarctica</option>
//                         <option value="Antigua and Barbuda">Antigua and Barbuda</option>
//                         <option value="Argentina">Argentina</option>
//                         <option value="Armenia">Armenia</option>
//                         <option value="Aruba">Aruba</option>
//                         <option value="Australia">Australia</option>
//                         <option value="Austria">Austria</option>
//                         <option value="Azerbaijan">Azerbaijan</option>
//                         <option value="Bahamas">Bahamas</option>
//                         <option value="Bahrain">Bahrain</option>
//                         <option value="Bangladesh">Bangladesh</option>
//                         <option value="Barbados">Barbados</option>
//                         <option value="Belarus">Belarus</option>
//                         <option value="Belgium">Belgium</option>
//                         <option value="Belize">Belize</option>
//                         <option value="Benin">Benin</option>
//                         <option value="Bermuda">Bermuda</option>
//                         <option value="Bhutan">Bhutan</option>
//                         <option value="Bolivia">Bolivia</option>
//                         <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
//                         <option value="Botswana">Botswana</option>
//                         <option value="Bouvet Island">Bouvet Island</option>
//                         <option value="Brazil">Brazil</option>
//                         <option value="British Indian Ocean Territory">British Indian Ocean Territory</option>
//                         <option value="Brunei Darussalam">Brunei Darussalam</option>
//                         <option value="Bulgaria">Bulgaria</option>
//                         <option value="Burkina Faso">Burkina Faso</option>
//                         <option value="Burundi">Burundi</option>
//                         <option value="Cambodia">Cambodia</option>
//                         <option value="Cameroon">Cameroon</option>
//                         <option value="Canada">Canada</option>
//                         <option value="Cape Verde">Cape Verde</option>
//                         <option value="Cayman Islands">Cayman Islands</option>
//                         <option value="Central African Republic">Central African Republic</option>
//                         <option value="Chad">Chad</option>
//                         <option value="Chile">Chile</option>
//                         <option value="China">China</option>
//                         <option value="Christmas Island">Christmas Island</option>
//                         <option value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</option>
//                         <option value="Colombia">Colombia</option>
//                         <option value="Comoros">Comoros</option>
//                         <option value="Congo">Congo</option>
//                         <option value="Congo, The Democratic Republic of The">Congo, The Democratic Republic of The</option>
//                         <option value="Cook Islands">Cook Islands</option>
//                         <option value="Costa Rica">Costa Rica</option>
//                         <option value="Cote D'ivoire">Cote D'ivoire</option>
//                         <option value="Croatia">Croatia</option>
//                         <option value="Cuba">Cuba</option>
//                         <option value="Cyprus">Cyprus</option>
//                         <option value="Czech Republic">Czech Republic</option>
//                         <option value="Denmark">Denmark</option>
//                         <option value="Djibouti">Djibouti</option>
//                         <option value="Dominica">Dominica</option>
//                         <option value="Dominican Republic">Dominican Republic</option>
//                         <option value="Ecuador">Ecuador</option>
//                         <option value="Egypt">Egypt</option>
//                         <option value="El Salvador">El Salvador</option>
//                         <option value="Equatorial Guinea">Equatorial Guinea</option>
//                         <option value="Eritrea">Eritrea</option>
//                         <option value="Estonia">Estonia</option>
//                         <option value="Ethiopia">Ethiopia</option>
//                         <option value="Falkland Islands (Malvinas)">Falkland Islands (Malvinas)</option>
// <option value="Faroe Islands">Faroe Islands</option>
// <option value="Fiji">Fiji</option>
// <option value="Finland">Finland</option>
// <option value="France">France</option>
// <option value="French Guiana">French Guiana</option>
// <option value="French Polynesia">French Polynesia</option>
// <option value="French Southern Territories">French Southern Territories</option>
// <option value="Gabon">Gabon</option>
// <option value="Gambia">Gambia</option>
// <option value="Georgia">Georgia</option>
// <option value="Germany">Germany</option>
// <option value="Ghana">Ghana</option>
// <option value="Gibraltar">Gibraltar</option>
// <option value="Greece">Greece</option>
// <option value="Greenland">Greenland</option>
// <option value="Grenada">Grenada</option>
// <option value="Guadeloupe">Guadeloupe</option>
// <option value="Guam">Guam</option>
// <option value="Guatemala">Guatemala</option>
// <option value="Guernsey">Guernsey</option>
// <option value="Guinea">Guinea</option>
// <option value="Guinea-bissau">Guinea-bissau</option>
// <option value="Guyana">Guyana</option>
// <option value="Haiti">Haiti</option>
// <option value="Heard Island and Mcdonald Islands">Heard Island and Mcdonald Islands</option>
// <option value="Holy See (Vatican City State)">Holy See (Vatican City State)</option>
// <option value="Honduras">Honduras</option>
// <option value="Hong Kong">Hong Kong</option>
// <option value="Hungary">Hungary</option>
// <option value="Iceland">Iceland</option>
// <option value="India">India</option>
// <option value="Indonesia">Indonesia</option>
// <option value="Iran, Islamic Republic of">Iran, Islamic Republic of</option>
// <option value="Iraq">Iraq</option>
// <option value="Ireland">Ireland</option>
// <option value="Isle of Man">Isle of Man</option>
// <option value="Israel">Israel</option>
// <option value="Italy">Italy</option>
// <option value="Jamaica">Jamaica</option>
// <option value="Japan">Japan</option>
// <option value="Jersey">Jersey</option>
// <option value="Jordan">Jordan</option>
// <option value="Kazakhstan">Kazakhstan</option>
// <option value="Kenya">Kenya</option>
// <option value="Kiribati">Kiribati</option>
// <option value="Korea, Democratic People's Republic of">Korea, Democratic People's Republic of</option>
// <option value="Korea, Republic of">Korea, Republic of</option>
// <option value="Kuwait">Kuwait</option>
// <option value="Kyrgyzstan">Kyrgyzstan</option>
// <option value="Lao People's Democratic Republic">Lao People's Democratic Republic</option>
// <option value="Latvia">Latvia</option>
// <option value="Lebanon">Lebanon</option>
// <option value="Lesotho">Lesotho</option>
// <option value="Liberia">Liberia</option>
// <option value="Libyan Arab Jamahiriya">Libyan Arab Jamahiriya</option>
// <option value="Liechtenstein">Liechtenstein</option>
// <option value="Lithuania">Lithuania</option>
// <option value="Luxembourg">Luxembourg</option>
// <option value="Macao">Macao</option>
// <option value="Macedonia, The Former Yugoslav Republic of">Macedonia, The Former Yugoslav Republic of</option>
// <option value="Madagascar">Madagascar</option>
// <option value="Malawi">Malawi</option>
// <option value="Malaysia">Malaysia</option>
// <option value="Maldives">Maldives</option>
// <option value="Mali">Mali</option>
// <option value="Malta">Malta</option>
// <option value="Marshall Islands">Marshall Islands</option>
// <option value="Martinique">Martinique</option>
// <option value="Mauritania">Mauritania</option>
// <option value="Mauritius">Mauritius</option>
// <option value="Mayotte">Mayotte</option>
// <option value="Mexico">Mexico</option>
// <option value="Micronesia, Federated States of">Micronesia, Federated States of</option>
// <option value="Moldova, Republic of">Moldova, Republic of</option>
// <option value="Monaco">Monaco</option>
// <option value="Mongolia">Mongolia</option>
// <option value="Montenegro">Montenegro</option>
// <option value="Montserrat">Montserrat</option>
// <option value="Morocco">Morocco</option>
// <option value="Mozambique">Mozambique</option>
// <option value="Myanmar">Myanmar</option>
// <option value="Namibia">Namibia</option>
// <option value="Nauru">Nauru</option>
// <option value="Nepal">Nepal</option>
// <option value="Netherlands">Netherlands</option>
// <option value="Netherlands Antilles">Netherlands Antilles</option>
// <option value="New Caledonia">New Caledonia</option>
// <option value="New Zealand">New Zealand</option>
// <option value="Nicaragua">Nicaragua</option>
// <option value="Niger">Niger</option>
// <option value="Nigeria">Nigeria</option>
// <option value="Niue">Niue</option>
// <option value="Norfolk Island">Norfolk Island</option>
// <option value="Northern Mariana Islands">Northern Mariana Islands</option>
// <option value="Norway">Norway</option>
// <option value="Oman">Oman</option>
// <option value="Pakistan">Pakistan</option>
// <option value="Palau">Palau</option>
// <option value="Palestinian Territory, Occupied">Palestinian Territory, Occupied</option>
// <option value="Panama">Panama</option>
// <option value="Papua New Guinea">Papua New Guinea</option>
// <option value="Paraguay">Paraguay</option>
// <option value="Peru">Peru</option>
// <option value="Philippines">Philippines</option>
// <option value="Pitcairn">Pitcairn</option>
// <option value="Poland">Poland</option>
// <option value="Portugal">Portugal</option>
// <option value="Puerto Rico">Puerto Rico</option>
// <option value="Qatar">Qatar</option>
// <option value="Reunion">Reunion</option>
// <option value="Romania">Romania</option>
// <option value="Russian Federation">Russian Federation</option>
// <option value="Rwanda">Rwanda</option>
// <option value="Saint Helena">Saint Helena</option>
// <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
// <option value="Saint Lucia">Saint Lucia</option>
// <option value="Saint Pierre and Miquelon">Saint Pierre and Miquelon</option>
// <option value="Saint Vincent and The Grenadines">Saint Vincent and The Grenadines</option>
// <option value="Samoa">Samoa</option>
// <option value="San Marino">San Marino</option>
// <option value="Sao Tome and Principe">Sao Tome and Principe</option>
// <option value="Saudi Arabia">Saudi Arabia</option>
// <option value="Senegal">Senegal</option>
// <option value="Serbia">Serbia</option>
// <option value="Seychelles">Seychelles</option>
// <option value="Sierra Leone">Sierra Leone</option>
// <option value="Singapore">Singapore</option>
// <option value="Slovakia">Slovakia</option>
// <option value="Slovenia">Slovenia</option>
// <option value="Solomon Islands">Solomon Islands</option>
// <option value="Somalia">Somalia</option>
// <option value="South Africa">South Africa</option>
// <option value="South Georgia and The South Sandwich Islands">South Georgia and The South Sandwich Islands</option>
// <option value="Spain">Spain</option>
// <option value="Sri Lanka">Sri Lanka</option>
// <option value="Sudan">Sudan</option>
// <option value="Suriname">Suriname</option>
// <option value="Svalbard and Jan Mayen">Svalbard and Jan Mayen</option>
// <option value="Swaziland">Swaziland</option>
// <option value="Sweden">Sweden</option>
// <option value="Switzerland">Switzerland</option>
// <option value="Syrian Arab Republic">Syrian Arab Republic</option>
// <option value="Taiwan">Taiwan</option>
// <option value="Tajikistan">Tajikistan</option>
// <option value="Tanzania, United Republic of">Tanzania, United Republic of</option>
// <option value="Thailand">Thailand</option>
// <option value="Timor-leste">Timor-leste</option>
// <option value="Togo">Togo</option>
// <option value="Tokelau">Tokelau</option>
// <option value="Tonga">Tonga</option>
// <option value="Trinidad and Tobago">Trinidad and Tobago</option>
// <option value="Tunisia">Tunisia</option>
// <option value="Turkey">Turkey</option>
// <option value="Turkmenistan">Turkmenistan</option>
// <option value="Turks and Caicos Islands">Turks and Caicos Islands</option>
// <option value="Tuvalu">Tuvalu</option>
// <option value="Uganda">Uganda</option>
// <option value="Ukraine">Ukraine</option>
// <option value="United Arab Emirates">United Arab Emirates</option>
// <option value="United Kingdom">United Kingdom</option>
// <option value="United States">United States</option>
// <option value="United States Minor Outlying Islands">United States Minor Outlying Islands</option>
// <option value="Uruguay">Uruguay</option>
// <option value="Uzbekistan">Uzbekistan</option>
// <option value="Vanuatu">Vanuatu</option>
// <option value="Venezuela">Venezuela</option>
// <option value="Viet Nam">Viet Nam</option>
// <option value="Virgin Islands, British">Virgin Islands, British</option>
// <option value="Virgin Islands, U.S.">Virgin Islands, U.S.</option>
// <option value="Wallis and Futuna">Wallis and Futuna</option>
// <option value="Western Sahara">Western Sahara</option>
// <option value="Yemen">Yemen</option>
// <option value="Zambia">Zambia</option>
// <option value="Zimbabwe">Zimbabwe</option>
// </select>
// <span id="errspan4"><div style="color: red" id="errorMessCountry"> </div></span><br>
//
// <input type="text" class="form-control" name="login" id="login" placeholder="Write your login">
// <span id="errspan5"><div style="color: red" id="errorMessLogin"> </div></span><br>
//
// <input type="password" class="form-control" name="pass" id="pass" placeholder="Write your password">
// <span id="errspan6"><div style="color: red" id="errorMessPass"> </div></span><br>
// <input class="btn btn-primary" type="reset" value="Reset">
// <button class="btn btn-success reg" id="reg"  type ="button" >Register</button>
// </form>
// </div>
//
//
// <div class="col">
// <h1>Authorisation Form</h1>
// <form  action="" method="post" id="formLog">
// <input type="text" class="form-control" name="login" id="loginin" placeholder="Enter your login">
// <span id="errspan7"><div style="color: red" id="errorMessLogged"> </div></span><br>
//
// <input type="password" class="form-control" name="pass" id="passin" placeholder="Enter your password">
// <span id="errspan8"><div style="color: red" id="errorMessPassed"> </div></span><br>
// <span id="errspan9"><div style="color: red" id="errorMessUser"> </div></span><br>
//
// <button class="btn btn-success log"  type ="button" >Log In</button>
// </form>
// </div>
//
//
// </div>
// </div>
// <?php else:?>
//
// <button class="btn btn-danger" type="button" name="endCook" id="endCook">Log Out</button> <br><br>
// <?php
// $id = $_COOKIE['user'];
// $query = "SELECT * FROM `users` WHERE `id` = '$id'";
// $done = mysqli_query($connect, $query);
// $user = mysqli_fetch_assoc($done);
// ?>
//
// <div class="container">
//
// <div class="card" style="width: 18rem;">
//
// <div id="bodyCard" class="card-body"></div>
// <div id="info" class="card-text"><h3><p style="margin:20px;text-align:center;"><?php echo $user['name']; ?></p></h3></div>
//
//
// </div> <br>
// <form id="Imageform" action="" method="post" enctype="multipart/form-data">
//
// <div>
// <div>
// <input id="uploadImage" class="porc"  type="file" accept="image/*" name="image">
// </div> <br>
// <div>
// <input type="hidden" id="id" class="id" name="id" value="<?php echo $user['id']; ?>">
// </div>
// <span id="errspan10"><div style="color: red" id="errorMessImg"> </div></span><br>
// <div>
// <button class="btn btn-success uploadImg" id="uplImg" type="submit"  name="upload">Avelacnel</button>
// </div>
// </div>
// </form>
//
// </div>
//
//
// <?php endif; ?>
//
// <script>
//
// $(document).ready(function (){
//     readRecords1();
// });
//
// function readRecords1() {
//     let readRecords1 = "readRecords1";
//     // let id = $(".smallPic").attr("id");
//     let userId = $('#id').val();
//
//     $.ajax({
//         url: 'showPic.php',
//         type: 'POST',
//         cache: false,
//         data: {
//             readRecords1: readRecords1,
//             // id: id,
//             userId: userId
//         },
//         success: function (result ,userId) {
//             let jpg = '.jpg';
//             if (result) {
//
//                 // $(".card-body").html('<img class="card-img-top" style="width: 239px;height: 254px;" src="image/' + userId + jpg + '">');
//                 // $("#bodyCard").load(" #bodyCard");
//                 $(".card-body").html('<img class="card-img-top rounded-circle" style="width: 239px;height: 254px;" src="image/' + result + '">');
//             }
//             else {
//                 $(".card-body").html('<img style="width: 239px;height: 254px;" src="image/prof.png">');
//             }
//         }
//     });
// }
//
//
// $(document).ready(function(e) {
//     $('#Imageform').on('submit',( function (e) {
//         e.preventDefault();
//         let id = $('#id').val();
//         console.log(id);
//         $.ajax({
//             url: 'Picture.php',
//             type: 'POST',
//             cache: false,
//             data: new FormData(this),
//
//             contentType: false,
//             processData:false,
//             success: function (message) {
//                 console.log(message);
//                 if (message !== ' ') {
//                     $("#errorMessImg").append(message);
//                 }
//                 $("#Imageform")[0].reset();
//                 readRecords1();
//
//             }
//         });
//
//     }));
// });
//
//
// $('#endCook').on('click',function(){
//     $.ajax({
//
//         url: 'exit.php',
//         type: 'POST',
//         cache: false,
//         dataType: 'html',
//         // data: {
//         //     login:login,
//         //     pass:pass
//         // },
//         success: function () {
//
//             // console.log(id);
//             window.location.replace("index.php");
//         }
//     });
// });
//
//
// $(document).on('click', '.reg', function(){
//
//     let name = $("#name").val().trim();
//     let email = $("#email").val().trim();
//     let number = $("#number").val().trim();
//     let country = $("#country").val().trim();
//     let login = $("#login").val().trim();
//     let pass = $("#pass").val().trim();
//     let gender = $(".gender").val().trim();
//
//     if (email == "") {
//         $("#errorMessEmail").text("Enter your Email");
//         return false;
//     } else {
//         $("#errorMessEmail").text("");
//     }
//
//     if (name == "") {
//         $("#errorMessName").text("Enter your Name");
//         return false;
//     } else {
//         $("#errorMessName").text("");
//     }
//
//     if (number == "") {
//         $("#errorMessNumber").text("Enter your Age");
//         return false;
//     } else {
//         $("#errorMessNumber").text("");
//     }
//     if (country == "") {
//         $("#errorMessCountry").text("Enter your Country");
//         return false;
//     } else {
//         $("#errorMessCountry").text("");
//     }
//     if (login == "") {
//         $("#errorMessLogin").text("Enter your Login");
//         return false;
//     } else {
//         $("#errorMessLogin").text("");
//     }
//     if (pass == "") {
//         $("#errorMessPass").text("Enter your Password");
//         return false;
//     } else {
//         $("#errorMessPass").text("");
//     }
//
//     $.ajax({
//
//         url: 'check.php',
//         type: 'POST',
//         cache: false,
//         dataType: 'html',
//         data: {
//             //     data: new FormData(this),
//             name: name,
//             email: email,
//             number: number,
//             country: country,
//             login: login,
//             pass: pass,
//             gender: gender
//         },
//         success: function (login_error) {
//             if (login_error == ' ') {
//
//             }else {
//                 $("#errorMessLogin").append(login_error);
//             }
//
//             $("#form")[0].reset();
//         }
//
//     });
// });
//
// $(document).on('click', '.log', function(){
//
//     let login = $("#loginin").val().trim();
//     let pass = $("#passin").val().trim();
//
//
//     if (login == "") {
//         $("#errorMessLogged").text("Enter your Login");
//         return false;
//     } else {
//         $("#errorMessLogged").text("");
//     }
//
//     if (pass == "") {
//         $("#errorMessPassed").text("Enter your Password");
//         return false;
//     } else {
//         $("#errorMessPassed").text("");
//     }
//
//
//
//     $.ajax({
//
//         url: 'auth.php',
//         type: 'POST',
//         cache: false,
//         dataType: 'html',
//         data: {
//             //     data: new FormData(this),
//             login:login,
//             pass:pass
//         },
//         success: function (user_err,user) {
//
//             if (user_err !== '') {
//                 $("#errorMessUser").append(user_err);
//                 $("#formLog")[0].reset();
//             }
//             else {
//                 location.reload();
//                 console.log(user);
//                 $("#info").text(user);
//
//             }
//         }
//
//     });
// });
//
// </script>
// <?php require "blocks/footer.php" ?>
// </body>
// </html>
