var PVT_SIGNIN_URL = "https://kompass-iec-eic.international.gc.ca/sign_in-connexion?regionCode=FR";
var PVT_HOMEPAGE = "https://kompass-iec-eic.international.gc.ca/iec/landing-accueil";
var PVT_EIC_CATEGORY = "https://kompass-iec-eic.international.gc.ca/iec/iec_category-categorie_eic";
var PVT_CHECKBOXES = "https://kompass-iec-eic.international.gc.ca/iec/declarations_and_consent-declarations_et_consentement";
var finishCheck = false;
var validate = false;
function setupRoutes(){
	chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {

		if(tab.url == PVT_CHECKBOXES && !finishCheck && !validate)
		{
			CheckAllAndGoHome(tab);
			finishCheck = true;
		}
		else if(tab.url == PVT_HOMEPAGE && !validate)
		{
			validate(tab);
			validate = true;	

		}
	});
}
function validate(Tab)
{
	console.log("Auto check...")
	chrome.tabs.executeScript(null, {file: "jquery.js"});
	chrome.tabs.executeScript(null, {file: "validate.js"});
}

function CheckAllAndGoHome(Tab)
{
	console.log("Auto check...")
	chrome.tabs.executeScript(null, {file: "jquery.js"});
	chrome.tabs.executeScript(null, {file: "checkandgohome.js"});

}

chrome.browserAction.onClicked.addListener(function(tab) {
	 // No tabs or host permissions needed
		setupRoutes();
	 	chrome.tabs.update(tab.id,{url : PVT_CHECKBOXES});
 });
