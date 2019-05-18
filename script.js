function toggle_sidebar(){
	document.getElementById('sidebar').classList.toggle('active');
	document.getElementById('sidebar-call-btn').classList.toggle('active');
}
function like(){
	document.getElementById('like').classList.toggle('active');
	document.getElementById('dislike').classList.toggle('fa-thumbs-down');
}
function dislike(){
	document.getElementById('dislike').classList.toggle('active');
	document.getElementById('like').classList.toggle('fa-thumbs-up');
}



function like2(){
	document.getElementById('like2').classList.toggle('active');
	document.getElementById('dislike2').classList.toggle('fa-thumbs-down');
}
function dislike2(){
	document.getElementById('dislike2').classList.toggle('active');
	document.getElementById('like2').classList.toggle('fa-thumbs-up');
}



function like3(){
	document.getElementById('like3').classList.toggle('active');
	document.getElementById('dislike3').classList.toggle('fa-thumbs-down');
}
function dislike3(){
	document.getElementById('dislike3').classList.toggle('active');
	document.getElementById('like3').classList.toggle('fa-thumbs-up');
}



function like4(){
	document.getElementById('like4').classList.toggle('active');
	document.getElementById('dislike4').classList.toggle('fa-thumbs-down');
}
function dislike4(){
	document.getElementById('dislike4').classList.toggle('active');
	document.getElementById('like4').classList.toggle('fa-thumbs-up');
}

function onestar(){
	document.getElementById('first-star').classList.toggle('active');
}

function twostar(){
	document.getElementById('third-star').classList.toggle('usual');
	document.getElementById('fourth-star').classList.toggle('usual');
	document.getElementById('fifth-star').classList.toggle('usual');
	
	document.getElementById('first-star').classList.toggle('active');
	document.getElementById('second-star').classList.toggle('active');
}

function threestar(){
	document.getElementById('fourth-star').classList.toggle('usual');
	document.getElementById('fifth-star').classList.toggle('usual');

	document.getElementById('first-star').classList.toggle('active');
	document.getElementById('second-star').classList.toggle('active');
	document.getElementById('third-star').classList.toggle('active');
}

function fourstar(){
	document.getElementById('fifth-star').classList.toggle('usual');

	document.getElementById('first-star').classList.toggle('active');
	document.getElementById('second-star').classList.toggle('active');
	document.getElementById('third-star').classList.toggle('active');
	document.getElementById('fourth-star').classList.toggle('active');
}

function fivestar(){
	document.getElementById('first-star').classList.toggle('active');
	document.getElementById('second-star').classList.toggle('active');
	document.getElementById('third-star').classList.toggle('active');
	document.getElementById('fourth-star').classList.toggle('active');
	document.getElementById('fifth-star').classList.toggle('active');
}