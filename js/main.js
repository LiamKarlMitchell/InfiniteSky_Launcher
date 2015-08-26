var version_string = '';

var patchNotesURL = 'http://12sky.alt1games.co.kr/Launcher/LauncherNew01.htm';

// Load native UI library
var gui = require('nw.gui');
// Get the current window
var win = gui.Window.get();

function btnClose_click(event) {
	window.close();
}

function btnMinimize_click(event){
	win.minimize();
}

function btnOptions_click(event) {
	showDialog('options_dialog');
}

function btnRegister_click(event) {
	gui.Shell.openExternal("http://website.com");
}

function btnFb_click(event){
	gui.Shell.openExternal("https://www.facebook.com/12sky1");
	
}

function btnYoutube_click(event){
	gui.Shell.openExternal("https://www.youtube.com/channel/UCCvAaQbA2Z9Qw6bnvx06dNw");	
}

function btnTranslation_click(event){
	//Needs link to translation bugs on github
	gui.Shell.openExternal("https://github.com/LiamKarlMitchell/InfiniteSky");
}

function btnCommunity_click(event) {
  	console.log('Community should open in web browser.');
  	gui.Shell.openExternal("http://website.com");
}

function btnStartGame_click(event) {
	console.log('Game would start with these parameters:', undefined, undefined);
}

// Patching update download box example
//$('.download_box').find('.name').text('Wahhh').end().find('.speed').text('90000 bps').end().find('.progress_bar').val(Math.random()*100);

var downloads = [];

function Download(type, url, doneFunction) {
	// When finished downloading call doneFunction
}

Download.prototype.makeDom = function Download_makeDom() {
	if (this.dom) return this.dom;
	return this.dom = $('<h1>test</h1>');
}

function addDownload(type,version) {
	// Create download dom and add it to the box.
    // Start Download
    // Switch case? generate url from type eg game, tsx client, launcher, translation file

    var url = 'http://www.google.com'; 
    var done = function(){ console.log('Finished downloading '+type+' '+version); };
    var download = new Download(type, url, done);

    $('#downloads_box .vscroll').append(download.makeDom());

    downloads.push(download);
}

function showDialog(dialog_id) {
  $('#fade').show();
  $('#'+dialog_id).show();

}

function closeDialog() {
  $('#fade').hide();
  $('.dialog').hide();
}

$(document).ready(function(){
	// Setup buttons
	$('#btnClose').click(btnClose_click);
	$('#btnOptions').click(btnOptions_click);
	$('#btnRegister').click(btnRegister_click);
	$('#btnCommunity').click(btnCommunity_click);
	$('#btnStartGame').click(btnStartGame_click);
	$('#btnFacebook').click(btnFb_click);
	$('#btnMinimize').click(btnMinimize_click);
	$('#btnTranslation').click(btnTranslation_click);
	$('#btnYoutube').click(btnYoutube_click);


	//setup divs show/hide on click
	
	//hide/show server div
	$('.nav_server').click(function(){		
		$('.content_area').children().addClass("display_none");
		$('.bug_report').children().addClass("display_none");
		$('.server_select').removeClass("display_none");
	});

	//hide/show item mall div
	$('.nav_item_mall').click(function(){		
		$('.content_area').children().addClass("display_none");
		$('.bug_report').children().addClass("display_none");
		$('.item_mall').removeClass("display_none");
	});

	//hide/show bug div and children
	$('.nav_bug ul li:first-child').click(function(){		
		$('.content_area').children().addClass("display_none");
		$('.bug_report').children().addClass("display_none");
		$('.bug_report').removeClass("display_none");
		$('.bug_report_game').removeClass("display_none");
	});
	$('.nav_bug ul li:nth-child(2)').click(function(){		
		$('.content_area').children().addClass("display_none");
		$('.bug_report').children().addClass("display_none");
		$('.bug_report').removeClass("display_none");
		$('.bug_report_launcher').removeClass("display_none");
	});

	//hide/show options div
	$('.nav_options').click(function(){		
		$('.content_area').children().addClass("display_none");
		$('.bug_report').children().addClass("display_none");
		$('.settings').removeClass("display_none");
	});

	//hide/show patch notes div and children
	$('.nav_notes ul li:nth-child(1)').click(function(){
		$('.content_area').children().addClass("display_none");
		$('.patch_notes').children().addClass("display_none");
		$('.patch_notes').removeClass("display_none");
		$('.patch_notes_kr').removeClass("display_none");
	});
	$('.nav_notes ul li:nth-child(2)').click(function(){
		$('.content_area').children().addClass("display_none");
		$('.patch_notes').children().addClass("display_none");
		$('.patch_notes').removeClass("display_none");
		$('.patch_notes_dll').removeClass("display_none")
	});
	$('.nav_notes ul li:nth-child(3)').click(function(){
		$('.content_area').children().addClass("display_none");
		$('.patch_notes').children().addClass("display_none");
		$('.patch_notes').removeClass("display_none");
		$('.patch_notes_launcher').removeClass("display_none")
	});




	// Disable start game button untill Launcher finishes patching process.
	$('#btnStartGame').prop('disabled', true);
	$('#fade').click(closeDialog);
	closeDialog();



	//Set it in comments working on it later
	/*
	// Get Version string
	var versiondat = '../PRESENTVERSION.DAT';

	fs.readFile(versiondat,'utf8', function(err,data){
		if (err) {
			alert('Error reading '+versiondat+' please ensure Launcher is in the Twelve Sky directory.');
			console.error(err);
			window.close();
			return;
		}

		version_string += 'Game Version: ' + Number(data);
		$('#version').text(version_string);
	});

	$('#patchnotes').attr('src',patchNotesURL);*/

});