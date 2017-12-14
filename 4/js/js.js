$(document).ready(function(){
	showStartModal();
});
function showStartModal(){
	// setTimeout(function(){
		$('#exampleModal').modal('show');
		$('#modal-yes-btn').on('click',function(){
			$('.out').html(`Вы выбрали опцию ` + 1);
			$('#exampleModal').modal('hide');
		});
		$('.btn-secondary').on('click',function(){
			$('.out').html(`Вы выбрали опцию ` + 2);
			$('#exampleModal').modal('hide');
		});
	// },2000);
}

