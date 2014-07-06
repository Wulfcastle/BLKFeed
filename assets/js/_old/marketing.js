function Querystring(qs) {
	this.params = {};
	this.get=Querystring_get;
	
	if (qs == null);
		qs=location.search.substring(1,location.search.length);

	if (qs.length == 0) 
		return;

	qs = qs.replace(/\+/g, ' ');
	var args = qs.split('&');
	
	for (var i=0;i<args.length;i++) {
		var pair = args[i].split('=');
		var name = unescape(pair[0]);
		
		var value = (pair.length==2)
			? unescape(pair[1])
			: name;
		
		this.params[name] = value;
	}
}

function Querystring_get(key, default_) {
	var value=this.params[key];
	return (value!=null) ? value : default_;
}

function SetCookie(cookieName,cookieValue,nDays) {
 var today = new Date();
 var expire = new Date();
 if (nDays==null || nDays==0) nDays=1;
 expire.setTime(today.getTime() + 3600000*24*nDays);
 document.cookie = cookieName+"="+escape(cookieValue)
                 + ";expires="+expire.toGMTString()
                 + ";domain=.litmus.com";
}

jQuery(function($){
	// Set referrer cookie from querystring, if exists
	var qs = new Querystring();
	if (qs.get("referrer")) {
		SetCookie("referrer",qs.get("referrer"),30);
	}			
  if ($("#login_form").length) {
    $("#login_form").validate({
      rules: {
        "accountkey": { required: true, rangelength: [3, 40], stringValid: true },
        "login": { required: true, rangelength: [1, 30] },
        "password": { required: true, rangelength: [1, 30] }
      },
       errorPlacement: function(error, element) {
         error.appendTo( element.parent("p") );
       }
    });
    $("#login_submit").click(function(){
      if (!$("#login_form").valid()) {
        return false;
      }
    });
    $("#login_form input").blur(function() {
      $(this).valid();
    })
    };
});
