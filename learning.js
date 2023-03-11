 var resume=resumeFunc();
    
  function resumeFunc(){
       var resumeDetails = {
        "Intro" : {
            "name":"Naveenram",
            "role":"QA",
            "YOE":"8+"
        },
        "ProfileSummary" :"Having 8+ years of experience in QA. etc. ",
        "Skills" : {
            "primarySkill":"Functional Testing",
            "SecondarySkill":"AUtomation Testing",
            "Tools":"Selenium",
            "Language":"Java",
            "Scripting":"JS",
            "DB":"mySQL"
        },
        "PreviousOrg":"Cognizant",
        "ContactInfo" : {
            "phone":["979795175232","944434435"],
            "email":"test@gmail.com"
        },
        "currentLocation" :"Chennai",
        "LocationPreference":"Chennai"
    } 
    return resumeDetails;
}


var skillsets = resume.Skills;
// For In
for(var string in skillsets){
    console.log(string +" : ",skillsets[string]);
}

//For Loop
var phoneNumbers = resume.ContactInfo.phone;
for(var i =0;i<phoneNumbers.length;i++){
    console.log(phoneNumbers[i]);
}

console.log("Previous Org is --> ",printInfo("PreviousOrg"));
console.log("Current Location is --> ",printInfo("currentLocation"));

function printInfo(key){
    if(resume[key]===undefined){
        return "Not Found";
    }else{
        return resume[key];
    }
}




 
