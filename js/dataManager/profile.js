firebase.auth().onAuthStateChanged(function (user) {
       if (user) {
           console.log(user);
           document.getElementById('profileStatus').innerHTML = JSON.stringify(user, null, 2);
           document.getElementById('logout').onclick = function () {
               if (confirm('Logout?')) {
                   firebase.auth().signOut();
               }
           };
       } else {
           window.location.href = 'login.html';
       }
   });
