const firebaseConfig = {
    apiKey: "AIzaSyBLKAChIxXjfnJv2pF0j7odVf96qVVkqL8",
    authDomain: "cscia225.firebaseapp.com",
    projectId: "cscia225",
    storageBucket: "cscia225.appspot.com",
    messagingSenderId: "122711494384",
    appId: "1:122711494384:web:0a695ba2da3a5b669bbc35"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// save the data
$("#signup-form").submit(function (e) {
    e.preventDefault();
    // get the username(email) and password from the form
    // change the following code
    var email = $("#email").val();
    var password = $("#password").val();

    // create a user with email address and password
    firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(result => {
            // Signed in
            // ...
            // var user = result.user;
            // user.updateProfile({
            //     displayName: username
            // }).then(() =>)

            alert("You are signed up");
            // window.location.href = "Login.html";
            // console.log(result);
        })
        .catch(error => {
            alert(error.message);
        });
});
