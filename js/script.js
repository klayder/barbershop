	var modalOverlay=document.querySelector(".modalOverlay");
	var popupLoginFormCloseBtn=document.querySelector(".modalContent .modalContentClose");
	var link=document.querySelector(".login");
	var popupLoginForm=document.querySelector(".modalContent");
	var login=popupLoginForm.querySelector("[name=login]");
	var password=popupLoginForm.querySelector("[name=password]");
	var storage=localStorage.getItem("login");

	link.addEventListener("click",function(event){
			event.preventDefault();
			popupLoginForm.classList.add("modalContentShow");
			modalOverlay.classList.add("modalOverlayShow");
			if(storage){
				login.value=storage;
				password.focus();
			} else{
				login.focus();
			}
		});

	popupLoginFormCloseBtn.addEventListener("click",function(event){
			event.preventDefault();
			popupLoginForm.classList.remove("modalContentShow");
			modalOverlay.classList.remove("modalOverlayShow");
			popupLoginForm.classList.remove("modalContentError");
		});


	var modalContentFormBtn=popupLoginForm.querySelector(".loginForm");

		modalContentFormBtn.addEventListener("submit",function(event){
			


			if(!login.value || !password.value){
				event.preventDefault();
				popupLoginForm.classList.add("modalContentError");
				
			} else{
				localStorage.setItem("login",login.value);
			}
		});

	window.addEventListener("keydown",function(event){
		if(event.keyCode === 27){
			if(popupLoginForm.classList.contains("modalContentShow")){
				popupLoginForm.classList.remove("modalContentShow");
				modalOverlay.classList.remove("modalOverlayShow");
				popupLoginForm.classList.remove("modalContentError");
			}
		}
	});