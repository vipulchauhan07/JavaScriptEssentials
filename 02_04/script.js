var date = new Date()
document.body.innerHTML = '<h1> Today is the ' + date.getDate() 
+ '/' + date.getDay() + '/' + date.getFullYear() + '</h1>'
// document.body.innerHTML = "<h1> Today is : " + new Date().getDate() + "</h1>"
document.body.style.backgroundColor = "lightGreen"