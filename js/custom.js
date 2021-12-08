// jQuery Scripting
$(function () {
  "use strict";
  $("#requisition p").on("click", (e) => {
    $("#requisition > div").fadeToggle(200);
    $("#jobs > div").fadeOut(200);
    $("#requisition > p").css("color", "#ef4246");
    $("#jobs > p").css("color", "black");
    $(
      "#v-pills-Dashboard-tab,#v-pills-JD-Library-tab,#v-pills-Apllications-Library-tab,#v-pills-Profile-tab,#v-pills-disabled-tab"
    ).removeClass("active");
    $("#requisition > p i")
      .removeClass("fa-chevron-down")
      .addClass("fa-chevron-up")
      .css("border-color", "#ef4246");
    $("#jobs > p i")
      .removeClass("fa-chevron-up")
      .addClass("fa-chevron-down")
      .css("border-color", "black");
  });
  $("#jobs p").on("click", (e) => {
    $("#jobs > div").fadeToggle(200);
    $("#requisition > div").fadeOut(200);
    $("#jobs > p").css("color", "#ef4246");
    $("#requisition > p").css("color", "black");
    $(
      "#v-pills-Dashboard-tab,#v-pills-JD-Library-tab,#v-pills-Apllications-Library-tab,#v-pills-Profile-tab,#v-pills-disabled-tab"
    ).removeClass("active");
    $("#jobs > p i")
      .removeClass("fa-chevron-down")
      .addClass("fa-chevron-up")
      .css("border-color", "#ef4246");
    $("#requisition > p i")
      .removeClass("fa-chevron-up")
      .addClass("fa-chevron-down")
      .css("border-color", "black");
  });
  $(
    "#v-pills-Dashboard-tab,#v-pills-JD-Library-tab,#v-pills-Apllications-Library-tab,#v-pills-Profile-tab,#v-pills-disabled-tab"
  ).on("click", (e) => {
    $("#requisition > div,#jobs > div").fadeOut(200);
    $("#jobs > p").css("color", "black");
    $("#requisition > p").css("color", "black");
    $("#requisition > p i,#jobs > p i")
      .removeClass("fa-chevron-up")
      .addClass("fa-chevron-down")
      .css("border-color", "black");
  });
});
// *.....................................................................*
