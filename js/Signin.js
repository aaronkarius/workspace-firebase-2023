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
    var email = $("#login").val();
    var password = $("#pwd").val();

    firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(success => {
            // Signed in
            // ...
            alert("logged in");
            let user = firebase.auth().currentUser;
            console.log(user);
            window.location.href = "Surveyresult.html";
            //user.updateProfile({ displayName: "Not sure" });
        })
        .catch(error => {
            alert(error.message);
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
            alert("signed in through google");
            console.log(user);
        })
        .catch(error => {
            alert(error.message);
        });
});
