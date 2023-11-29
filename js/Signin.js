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
$("#submit").click(function (e) {
    e.preventDefault();
    // get the user name and password from form
    // You need to change this.
    var email = "akarius12@gmail.com";
    var password = "abc123";

    firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(success => {
            // Signed in
            // ...
            console.log("login in");
            let user = firebase.auth().currentUser;

            //user.updateProfile({ displayName: "Not sure" });
            if (user != null) {
                name = user.displayName;
                email = user.email;
                photoUrl = user.photoURL;
                emailVerified = user.emailVerified;
                console.log(name, email, emailVerified);
            }
        })
        .catch(error => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorMessage);
        });
});

// add  a google login choice here
$("#google").click(e => {
    e.preventDefault();
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase
        .auth()
        .signInWithPopup(provider)
        .then(result => {
            var user = result.user;
            console.log("sign in through google", user);
        })
        .catch(error => {
            console.log(error);
        });
});
