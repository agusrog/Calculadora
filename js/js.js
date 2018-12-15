
    function insert (num){
        document.querySelector('.resultado').value = document.querySelector('.resultado').value + num;
        return document.querySelector('.resultado').value;
    }

    function eq (){
        var calcular = document.querySelector('.resultado').value;
        document.querySelector('.resultado').value = eval(calcular) ;
        return document.querySelector('.resultado').value;
    }
    function borrar(){
        document.querySelector('.resultado').value = "";
        return document.querySelector('.resultado').value;
    }
    function retro(){
        var calcular = document.querySelector('.resultado').value;
        document.querySelector('.resultado').value = calcular.substring(0,calcular.length-1);

        return document.querySelector('.resultado').value;
    }
