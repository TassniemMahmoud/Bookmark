


//! Crud System///
var siteNameInput = document.getElementById("siteName");
var siteUrlInput = document.getElementById("siteURL");
var bookmarkTable = document.getElementById("bookmark-table");
var bookmarkkWarning = document.getElementById("box-warning");
var closeBtn = document.getElementById("close-btn")
var bookmarkContainer = [];

if ( localStorage.getItem("bookmark") == null){
  bookmarkContainer = [];
} else {
  bookmarkContainer = JSON.parse(localStorage.getItem("bookmark"));
  displayBookmarks();
}

/* to submit Bookmark*/
function submitSite(){
  if(siteNameInput.classList.contains("is-valid") && siteUrlInput.classList.contains("is-valid") ){
    var bookmark = {
      name:siteNameInput.value,
      url: siteUrlInput.value,
    }
    bookmarkContainer.push(bookmark);
    displayBookmarks();
    localStorage.setItem("bookmark", JSON.stringify(bookmarkContainer));
    clearInputs();
  } else{
    bookmarkkWarning.classList.replace("d-none", "d-block")
  }

 }

 /* clear form*/
 function clearInputs(){
  siteNameInput.value = null;
  siteUrlInput.value = null;
 }

 /* to display bookmarks*/
 function displayBookmarks(){
  var cartona =``;
  for( var i = 0 ; i < bookmarkContainer.length ; i++){
    cartona += `<tr>
    <td>${i + 1}</td>
    <td>${bookmarkContainer[i].name}</td>
    <td>
      <button onclick="goToLink(this);" class="btn btn-warning text-white"><i class="fa-solid fa-eye pe-2"></i>Visit</button>
    </td>
    <td>
      <button onclick="deleteBookmarks(${i});" class="btn btn-danger text-white"><i class="fa-regular fa-trash-can pe-2"></i>Delete</button>
    </td>
    </tr>`
  }
  bookmarkTable.innerHTML = cartona
 }

 /*to delete bookmarks*/
 function deleteBookmarks(deletedIndex){
  bookmarkContainer.splice(deletedIndex,1);
  displayBookmarks();
  localStorage.setItem("bookmark", JSON.stringify(bookmarkContainer));
 }
  /*to validate bookmarks*/
  function validateInputs(element){
    var regex = {
      siteName : /^[a-zA-Z]{3,}$/,
      siteURL : /\.com$/
    }
    if (regex[element.id].test(element.value) == true){
      element.classList.add("is-valid");
      element.classList.remove("is-invalid");
    }
    else{
      element.classList.add("is-invalid");
      element.classList.remove("is-valid");

    }
  }
/*to close warning box*/
  function closeBox(){
    bookmarkkWarning.classList.add("d-none");
  }
  /* to go to link*/
  function goToLink(link){
window.open(siteUrlInput.value)
  }
