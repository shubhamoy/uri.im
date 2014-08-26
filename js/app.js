				$('#key').bind('keypress', function (event) {
				    var regex = new RegExp("^[a-zA-Z0-9]+$");
				    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
				    if (!regex.test(key)) {
				       event.preventDefault();
				       return false;
				    }
				});			
				$("#uriform").submit(function(e)
				{

					e.preventDefault();

					var u = $("#u").val();
					var k = $("#key").val();
	
					$.ajax({
					    type: 'GET',
					    url: 'http://uri.im/api/v1',
					    crossDomain: true,
					    data: 'u='+u+'&key='+k,
					    dataType: 'text',
					    success: function(r, t, j) 
					    {
					        $("#u").hide();
					        $("#key").hide();					        
					        $("#urigen").hide();					        
					        $(".result").html("<a  target='_blank' href='"+r+"'>"+r+"</a>");
							$(".result").show();
							$("#back").show();
					    },
					    error: function (r, t, e) 
					    {
					        $("#u").hide();
					        $("#key").hide();					        
					        $("#urigen").hide();					        
							$("#back").show();
					     	$(".error").html('<a style="color:red;" title="Return to Previous Page" name="back" id="back" href="javascript:location.reload();">'+r.responseText+'</a>')	   
					        $(".error").show();					     	
					    }
					});	
				});		
