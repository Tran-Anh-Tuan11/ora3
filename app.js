var name_class=1;
function add_item_info(event) {
  let html="";
  var parent = event.target.parentNode;
  var parentClass = parent.className;
  console.log(parentClass);
  parentClass = parentClass.substr(13, parentClass.length);
  var findClass = "." + parentClass; 
  var item_container = document.querySelector(findClass);
  html += `<div class="item-${name_class} child_new"><input type="button" value="info item&emsp;:" class="info_item_new_field" ondblclick="doubleClickToEdit(event)" onkeydown="if (event.keyCode === 13) { myFunction(event); }"><input type="button" id="info_new" ondblclick="editTextField(event)"><i class="iconDel fa-solid fa-trash-can" onclick="clickDel(event)"></i></div>`;
  item_container.innerHTML += html;
  name_class++;
}

function doubleClickToEdit(event) {
  var element = event.target;
  element.type = "text";
  element.style.border = "1px solid #767676";
  element.style.cursor = "text";
}

var class_group = 1;
function add_group_info() {
  let html="";
  let mssv="_20204616";
  var item_container = document.querySelector(".view_edit");
  html += `<div class="info_student group-${class_group}">
  <input type="button" value="Group item${mssv}" class="textBig group-${class_group}" ondblclick="doubleClickToEdit(event)" onkeydown="if (event.keyCode === 13) { myFunctionAddGrEditName(event); }">
  <i class="iconDel fa-solid fa-trash-can" onclick="clickDel(event)"></i>
  <button class="add_info" onclick="add_item_info(event)">
      Add info item
  </button>
  <button class="add_group" onclick="add_group_info()">
      Add group item
  </button>                 
  </div>`
  item_container.innerHTML += html;
  class_group++;
}

function myFunction(event) {//add info item
  var element = event.target;
  element.type = "button";
  element.style.border = "none";
  element.style.outline = "none";
  element.style.cursor = "pointer";
  element.setAttribute("value", element.value + "    :");
}

function myFunctionAddGrEditName(event) {//enter
  var element = event.target;
  element.type = "button";
  element.style.border = "none";
  element.style.outline = "none";
  element.style.cursor = "pointer";
  element.setAttribute("value", element.value + "_20204616");
}

function clickDel(event) {//click delete element
  if (
      confirm(
        "Thông báo: Trần Anh Tuấn- 20204616\nXóa mục đã chọn?"
      )
    )
      event.target.parentNode.remove();
}

function editTextField(event) {
  var element = event.target;
  element.type = "text";
  element.addEventListener("keypress", function(event) {
    if (event.keyCode === 13) {
      element.type= "button";
    }
  });
}


$("body").on("click", "#export-btn", function () {
  html2canvas($("#main")[0], {
    onrendered: function (canvas) {
      var data = canvas.toDataURL();
      var docDefinition = {
        content: [
          {
            image: data,
            width: 1366,
          },
        ],
      };
      pdfMake
        .createPdf(docDefinition)
        .download("Tran Anh Tuan_20204616.pdf");
    },
  });
});

