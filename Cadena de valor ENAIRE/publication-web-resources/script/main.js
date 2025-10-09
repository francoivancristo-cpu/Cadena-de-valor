var currentPage = 0;
const totalHtmlFiles = 1;
function changePublication() {
	if (currentPage >= 0 && currentPage < totalHtmlFiles) {
		var currentPageUrl = document.getElementById("contentIFrame").src;
		currentPageUrl = currentPageUrl.substring(0, currentPageUrl.lastIndexOf("/") + 1);
		var nextPageUrl = currentPageUrl;
		if (currentPage !== 0)
			currentPageUrl = currentPageUrl + "publication-" + currentPage + ".html";
		else
			currentPageUrl = currentPageUrl + "publication" + ".html";
		document.getElementById("contentIFrame").src = currentPageUrl;
		if ((currentPage + 1) < totalHtmlFiles) {
			nextPageUrl = nextPageUrl + "publication-" + (currentPage + 1) + ".html";
			document.getElementById("dummyIFrame").src = nextPageUrl;
		}
	}
}
function showNextPage() {
	++currentPage;
	changePublication();
	showHideArrows();
}
function showPreviousPage() {
	--currentPage;
	changePublication();
	showHideArrows();
}
function showHideArrows() {
	if (currentPage === 0) {
		document.getElementsByClassName("prev")[0].style.visibility = "hidden";
	} else {
		document.getElementsByClassName("prev")[0].style.visibility = "visible";
	}
	if (currentPage === (totalHtmlFiles -1)) {
		document.getElementsByClassName("next")[0].style.visibility = "hidden";
	} else {
		document.getElementsByClassName("next")[0].style.visibility = "visible";
	}
}

function showOverlay() {
  const overlay = document.getElementById('overlay');
  overlay.classList.remove('hide');
  overlay.classList.add('show');
}
function hideOverlay() {
  const overlay = document.getElementById('overlay');
  overlay.classList.remove('show');
  overlay.classList.add('hide');
}

document.addEventListener('DOMContentLoaded', function() {
  const plus = document.getElementById('Button_3'); // tu botón +
  const overlay = document.getElementById('Rectangle_12'); // tu overlay

  plus.addEventListener('click', () => {
    overlay.classList.add('show');
  });

  overlay.addEventListener('click', () => {
    overlay.classList.remove('show');
  });
});
