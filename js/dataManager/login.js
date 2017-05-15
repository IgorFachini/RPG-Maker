firebase.auth().onAuthStateChanged(function (user) {
  if (user) { // ถ้าล็อคอินเอาไว้อยู่แล้ว...
    window.location.href = 'profile.html';
  }
});
// FirebaseUI config.
var uiConfig = {
  'signInSuccessUrl': false,
  'signInOptions': [
    // comments อันที่ไม่ใช้ทิ้งได้เลย
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    //firebase.auth.TwitterAuthProvider.PROVIDER_ID,
    //firebase.auth.GithubAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID
  ],
  // Terms of service url.
  'tosUrl': false,
};
// Initialize the FirebaseUI Widget using Firebase.
var ui = new firebaseui.auth.AuthUI(firebase.auth());
// The start method will wait until the DOM is loaded.
ui.start('#firebaseui-auth-container', uiConfig);
