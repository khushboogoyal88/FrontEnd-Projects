var keylist = "abcdefghijklmnopqrstuvwxyz0123456789!#€%&/()=?^*";
var tmp = '';
function genPass(plength) {
    tmp = ''
    for(i=0; i<plength;i++ ){
        tmp += keylist.charAt(Math.floor(Math.random()*keylist.length))
    }
    return tmp;
};

function populateform(pLen){
    document.passGen.output.value = genPass(pLen);
};