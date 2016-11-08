/* Shapeous Namespace
 * ****************** */

(function (shapeous, undefined) {
	"use strict";

	shapeous.submitEmail = function () {
    var dataForm  = document.getElementById('dataForm');
    var emailForm = document.getElementById('emailForm');
    var actionStr = "mailto:doNotSpam@theShape.com";
    actionStr    += "?subject=" + encodeURI(dataForm.subject.value);
    actionStr    += "&body=" 		+ encodeURI(dataForm.body.value);
    emailForm.setAttribute('action', actionStr);
    emailForm.submit();
    dataForm.subject.value = "";
    dataForm.body.value		 = "";
	};

}(window.shapeous = window.shapeous || {}));
