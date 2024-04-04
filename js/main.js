document.getElementById('loginButton').onclick = function() {
    document.getElementById('loginForm').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
  };
  
  function closeForm() {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
  }
  
  function submitForm() {
    var name = document.getElementById('name').value;
    alert('Welcome, ' + name + '!');
    closeForm();
  }