$('#key').bind('keypress', function (event) {
  var regex = new RegExp("^[a-zA-Z0-9]+$");
  var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
  if (!regex.test(key)) {
    event.preventDefault();
    return false;
  }
});

$("#urigen").click(function(e)
{
  e.preventDefault();
  var u = $("#u").val();
  var k = $("#key").val();
  $("#loader").show();
  $.ajax({
    type: 'GET',
		url: 'http://uri.im/api/v1',
		crossDomain: true,
		data: 'u='+u+'&key='+k,
		dataType: 'text'
	})
	.done(function(data, textStatus, jqXHR){
		$("#loader").hide();
		$("#u").hide();
		$("#key").hide();
		$("#urigen").hide();
		$(".result").html("<a  target='_blank' href='"+data+"'>"+data+"</a>");
		$(".result").show();
		$("#back").show();		
	})
	.fail(function(data, textStatus, jqXHR){
		$("#u").hide();
		$("#key").hide();
		$("#urigen").hide();
		$("#back").show();
		$(".error").html('<a style="color:red;" title="Return to Previous Page" name="back" id="back" href="javascript:location.reload();">'+data.responseText+'</a>');
		$(".error").show();
	});
});