
test = () => {

      		
	
	var s = document.getElementById("session_ID");
    var strSess = s.options[s.selectedIndex].value;
	 
	 
	var a = document.getElementById("Activity_ID");
    var strAct = a.options[a.selectedIndex].value;
	 
	
	var e = document.getElementById("Person_ID");
    var strUser = e.options[e.selectedIndex].value;
			
	if(strSess == "1pm - 2pm"){
		
		var no_persons = sessionStorage.getItem("no_of_person_session1");
	    var session1 = Number(no_persons)+Number(strUser);
	    sessionStorage.setItem("no_of_person_session1",session1 );
		
		      if (session1 === 10){
				      sessionStorage.setItem("no_of_person_session1","0" );
					   s.remove(1);
					  alert("capacity is over session1 Closed");
			       }
		
	               else if(session1 > 10){
					   
					     alert("maximum capacity of 10 person");
					     session1= Number(no_persons);
						 sessionStorage.setItem("no_of_person_session1",session1 );
                         alert(session1);
                    
					  }else{
	                      alert(session1);
				   }
	}
	 
	 else {
	 
		
		          var no_persons = sessionStorage.getItem("no_of_person_session2");
	              var session2 = Number(no_persons)+Number(strUser);
	              sessionStorage.setItem("no_of_person_session2",session2 );
		
	           if (session2 === 10){
				      sessionStorage.setItem("no_of_person_session2","0" );
					   s.remove(2);
					  alert(" capacity is over session 2 Closed");
			       }
		
	               else if(session2 > 10){
					   
					     alert("maximum capacity of 10 person");
					     session2= Number(no_persons);
						 sessionStorage.setItem("no_of_person_session2",session2 );
                         alert(session2);
                    
					  }else{
	                      alert(session2);
				   }
	}
	  
}