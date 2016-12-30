function _compoundtest(){
	
    function step1(){

    var ringctr=[]; 
    var amuletctr=[];
    var beltctr=[];

    //earrings
    var ear_int = [];
    var ear_dex = [];
    var ear_str = [];
    //earrings

    //book of knowledge
    var book_know = [];
    //book of knowledge

    var dex_amulet = [];
    var str_amulet = [];
    var int_amulet = [];

    for(var x in character.items){
        if(character.items[x]){
            if(character.items[x].name == "ringsj"){ 
            ringctr.push({name: character.items[x].name,level: character.items[x].level, index: x});
            }
            else if(character.items[x].name == "hpbelt"){ 
                beltctr.push({name: character.items[x].name, level: character.items[x].level, index: x});
            }
            else if(character.items[x].name =="hpamulet"){ 
            	amuletctr.push({name: character.items[x].name, level: character.items[x].level, index: x });
            }
       		else if(character.items[x].name =="strearring"){ 
            	ear_str.push({name: character.items[x].name, level: character.items[x].level, index: x });
            }
            else if(character.items[x].name =="dexearring"){ 
            	ear_dex.push({name: character.items[x].name, level: character.items[x].level, index: x });
            }
            else if(character.items[x].name =="intearring"){ 
            	ear_int.push({name: character.items[x].name, level: character.items[x].level, index: x });
            }
            else if(character.items[x].name =="wbook0"){ 
                book_know.push({name: character.items[x].name, level: character.items[x].level, index: x });
            }
             else if(character.items[x].name =="stramulet"){ 
                str_amulet.push({name: character.items[x].name, level: character.items[x].level, index: x });
            }
             else if(character.items[x].name =="intamulet"){ 
                int_amulet.push({name: character.items[x].name, level: character.items[x].level, index: x });
            }
             else if(character.items[x].name =="dexamulet"){ 
                dex_amulet.push({name: character.items[x].name, level: character.items[x].level, index: x });
            }
            else if(character.items[x].name == "cscroll0")
            {
            	if(character.items[x].q<10) buy("cscroll0",1);
        		else continue;
            }
    		else {continue;} 
        }}
    
    if(ringctr.length>=3){ step2(ringctr); }
    if(beltctr.length>=3){ step2(beltctr); }
    if(amuletctr.length>=3){ step2(amuletctr); }

    if(ear_str.length>=3){ step2(ear_str); }
    if(ear_int.length>=3){ step2(ear_int); }
    if(ear_dex.length>=3){ step2(ear_dex); }

    if(book_know.length>=3){ step2(book_know)}

    if(dex_amulet.length>=3){ step2(dex_amulet); }
    if(str_amulet.length>=3){ step2(str_amulet); }
    if(int_amulet.length>=3){ step2(int_amulet); }
    
    //else return;
	}//end step1();  

	function step2(arr){  
	    var prop = ["level0","level1","level2"]; 
	    var acce = {
	    'level0':[],
	    'level1':[],
	    'level2':[]};
	    
	    for(var y in arr){
	        if(arr[y].level==0){ acce.level0.push(arr[y]);}
	        else if(arr[y].level==1){acce.level1.push(arr[y]);}
	        else if(arr[y].level==2){acce.level2.push(arr[y]);
	       }else continue;}
	    
	    for(var x in prop){
	       // console.log(prop[x]+": "+acce[prop[x]].length);
	        if(acce[prop[x]] && (acce[prop[x]].length%3 == 0 && acce[prop[x]].length>=3 ))
	        {compound_proper(acce[prop[x]]);}}
		}//end step2();

	function compound_proper(wat){
	    if(wat){
	        for(var gg=0; gg<wat.length;gg+=3){
	            if(wat[gg] && wat[gg+1] && wat[gg+2]){
	            compound(wat[gg].index,wat[gg+1].index,wat[gg+2].index,39,null);}}}
	    else{ game_log("ERROR LAST PART"); return;}
	}//end compound_proper();
step1();
}

//call _compoundtest();
setInterval(_compoundtest, 1500);

/*props to JourneyOver for the ajax idea. :)
    setTimeout(function(){
    $.ajax({
        url: "https://cdn.rawgit.com/ourayaruo/scriptland/master/compoundv2.js",
        dataType: "script",
        async: false,
        cache: true,
        type: "POST"
    });
    }, 2000);
*/

