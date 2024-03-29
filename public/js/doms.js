// *************
// CHANGE COLOR
// *************
// changes the target color, giving queryselector (#div, .class, etc...between quotation marks) and color code (between quotation marks)

   function changeColor(qSelector, theColor){
          let x = document.querySelector(qSelector);
          x.style.color = theColor;
   }
   
// example
// <p class="name" onclick="changeColor('#theTarget0','red')">Change Color</p>
// <p id="theTarget0">Color Target</p>

// --------------------------------------------------------------------------------------

// *********************************
// CHANGE TEXT giving QuerySelector
// *********************************
// changes the target text, giving queryselector (#div, .class, etc... between quotation marks) and text (between quotation marks)

   function changeTextByQsel(qSelector, theText){
          let x = document.querySelector(qSelector);
          x.innerHTML = theText;
   }
   
// example
// <p class="name" onclick="changeText('#theTargetText','I am The new Text!!!')">Change Text</p>
// <p id="theTargetText">Text Target</p>

// --------------------------------------------------------------------------------------

// *********************************
// CHANGE TEXT giving id name
// *********************************
// changes the target text, giving id name (between quotation marks and without #) and text (between quotation marks)

   function changeTextByDiv(theID, theText){
          let x = document.getElementById(theID);
          x.innerHTML = theText;
   }
   
// EXAMPLE WITH CLICK EVENT
// <p class="name" onclick="changeText('myDiv','I am The new Text!!!')">Change Text</p>
// <p id="myDiv">Text Target</p>

// EXAMPLE WITH DOCUMENT EVENT
/*
<script>
alert("event")
  document.addEventListener("DOMContentLoaded", function(event) { 
    changeTextByDiv('divDocument','I am The new DivDocument Text!!!')
  });
alert("event end")
</script>

<p id="divDocument">Text Target Div Document</p>
*/

// --------------------------------------------------------------------------------------

// *********************************
// CHANGE TEXT giving Field Name
// *********************************
// changes the input default value, giving the field name (between quotation marks) and text 

   function changeInputText(fieldName, theText){
          let x = document.querySelector('input[name=' + fieldName + ']');
          x.value = theText;
   }
   
// EXAMPLE
/*
<script>
  document.addEventListener("DOMContentLoaded", function(event) { 
    changeInputText('name','GuidoBaldo');
    changeInputText('age',44);
  });
</script>

  <form action="/form/create/" method="POST">
    <input type="text" placeholder="name" name="name" value="">
    <input type="text" placeholder="age" name="age" value="">
    <button type="submit">Submit</button>
  </form>
*/
// --------------------------------------------------------------------------------------

// *********************************
// CHANGE TEXT giving Field Name
// *********************************
// changes the input default value, giving the field name (between quotation marks) and text 

   function changeInputDefaultVal(fieldName, theText){
          let x = document.querySelector('input[name=' + fieldName + ']');
          x.defaultValue = theText;
   }
   
// EXAMPLE
/*
<script>
  document.addEventListener("DOMContentLoaded", function(event) { 
    changeInputText('name','GuidoBaldo');
    changeInputText('age',44);
  });
</script>

  <form action="/form/create/" method="POST">
    <input type="text" placeholder="name" name="name" value="">
    <input type="text" placeholder="age" name="age" value="">
    <button type="submit">Submit</button>
  </form>
*/
// --------------------------------------------------------------------------------------
