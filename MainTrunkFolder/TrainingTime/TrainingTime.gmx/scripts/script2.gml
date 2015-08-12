 val = "";
ini_open( 'Training.ini' );
 val  = ini_read_real( 'PlayerSettings', argument1, 0 );
ini_close(); 
return val;

