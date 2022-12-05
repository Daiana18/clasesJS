
       
    let usuario = prompt ('Ingresa tu nombre de usuario para consultar');
    let password = prompt ('Ingresa tu contraseña');

    if ((usuario == 'day') && (password =='1234')){
        let consulta = prompt ('Bienvenido/a al sistema '+usuario+' CONSULTAR : -Saldo  -Vencimiento  -Deuda  (1 para salir)');

    while( consulta != 'ESC'){
     switch (consulta){
         case 'saldo':
            alert ('su saldo actual es de $200');
            break;

        case 'vencimiento':
            alert ('Su saldo vence el 27/12/2022');
            break;

        case 'deuda':
        alert ('No posee deuda actual');

        break;
        case '1':
            continue;
    
}
    consulta = prompt (' CONSULTAR : -Saldo  -Vencimiento  -Deuda  (1 para salir)');
}

    }
    else {
        alert ('Usuario  '   +usuario+  ' No esta registrado');
    }



































   /* if ((consulta == 'Saldo')||(consulta == 'saldo')) {
    alert ('Su saldo es $200');
    consulta = prompt ('Bienvenido al sistema Day!! Consultar : -Saldo  -Vencimiento  -Deuda');
    }
    
    else if ((consulta == 'Vencimiento')||(consulta == 'vencimiento')) {
        alert ('Su saldo vence el 27/12/2022');
        consulta = prompt ('Bienvenido al sistema Day!! Consultar : -Saldo  -Vencimiento  -Deuda');
    }
    else  if ((consulta == 'Deuda')||(consulta == 'deuda')) {
        alert ('No posee deuda actual');
        consulta = prompt ('Bienvenido al sistema Day!! Consultar : -Saldo  -Vencimiento  -Deuda');

    }
    else if (consulta == '1'){
    
    }
    else{
        alert ('Su solicitud no pudo ser procesada , intente nuevamente');
    }

 }
    
consulta();
*/