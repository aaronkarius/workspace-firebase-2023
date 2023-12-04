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

firebase.auth().onAuthStateChanged(user => {
    if (user) {
        alert("still signed in");
    } else {
        window.location.href = "Login.html";
    }
});

// save the data
$(".sampleSurvey input[type='submit']").click(function (e) {
    e.preventDefault();

    // get the value of the form using serializeArray method
});

// update the result in table

$("#sign-out").click(() => {
    firebase
        .auth()
        .signOut()
        .then(() => {
            alert("Signed out");
        })
        .catch(e => {
            alert(e.message);
        });
});
