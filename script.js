//a)Get all the countries from Asia continent /region using Filter function

var request=new XMLHttpRequest();
    request.open('GET','https://restcountries.com/v2/all',true);
    request.send();
    request.onload=function(){
        var data=JSON.parse(request.response);
        
        var res=data.filter((ele)=>ele.region=="Asia");
        console.log(res);
    }

//b)Get all the countries with a population of less than 2 lakhs using Filter function
     
   var request=new XMLHttpRequest();
    request.open('GET','https://restcountries.com/v2/all', true);
    request.send();
    request.onload=function(){
        var data=JSON.parse(request.response);
        var res=data.filter((ele)=>ele.population<200000);
        console.log(res);
    }

//c)Print the following details name, capital, flag using forEach function

    var request=new XMLHttpRequest();
     request.open('GET','https://restcountries.com/v2/all', true);
     request.send();
     request.onload=function(){
        var data=JSON.parse(request.response);
        console.log(data);
        data.forEach(element=>console.log("name:"+element.name,"capital:"+element.capital,"flag:"+element.flag));
    }

//d)Print the total population of countries using reduce function
   var request=new XMLHttpRequest();
    request.open('GET','https://restcountries.com/v2/all',true);
    request.send();
    request.onload=function(){
        var data=JSON.parse(request.response);
        var res=(countries)=>countries.reduce((a,{population:p})=>a+=p,0);
        console.log(res(data));
    }

//e)Print the country which uses US Dollars as currency.
    var request=new XMLHttpRequest();
    request.open('GET','https://restcountries.com/v2/all',true);
    request.send();
    request.onload=function(){
        var data=JSON.parse(request.response);
        for(let i=0;i<data.length;i++){
            if(data[i].currencies[0].code==="USD"){
                console.log(data[i].name);
            }
        }
    }