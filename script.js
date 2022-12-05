function consulta(){
       
    let usuario = prompt ('Ingresa tu nombre de usuario para consultar');
    let password = prompt ('Ingresa tu contraseña');
    let consulta;

    if ((usuario == 'day') && (password =='1234')){
         consulta = prompt ('Bienvenida al sistema Day! CONSULTAR : -Saldo  -Vencimiento  -Deuda  -1 para salir');
      
        } 
    for (let i=0;i<=2;i++){    

    if ((consulta == 'Saldo')||(consulta == 'saldo')) {
    alert ('Su saldo es 200');
    consulta = prompt ('Bienvenido al sistema Day!! Consultar : -Saldo  -Vencimiento  -Deuda');
    }
    
    else if ((consulta == 'Vencimiento')||(consulta == 'vencimiento')) {
        alert ('Su saldo vence el 27/12');
        consulta = prompt ('Bienvenido al sistema Day!! Consultar : -Saldo  -Vencimiento  -Deuda');
    }
    else  if ((consulta == 'Deuda')||(consulta == 'deuda')) {
        alert ('No posee deuda actual');
        consulta = prompt ('Bienvenido al sistema Day!! Consultar : -Saldo  -Vencimiento  -Deuda');

    }
    else if (consulta == '1'){
    
    }
    else{
        alert ('Vuelva a intentarlo de nuevo mas tarde');
    }

 }
    }
consulta();