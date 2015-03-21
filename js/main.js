var version_string = '';

var patchNotesURL = 'http://12sky.alt1games.co.kr/Launcher/LauncherNew01.htm';

function btnClose_click(event) {
	window.close();
}

function btnOptions_click(event) {
	showDialog('options_dialog');
}

function btnRegister_click(event) {
	gui.Shell.openExternal("http://website.com");
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

	// Disable start game button untill Launcher finishes patching process.
	$('#btnStartGame').prop('disabled', true);
	$('#fade').click(closeDialog);
	closeDialog();

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

	$('#patchnotes').attr('src',patchNotesURL);
});