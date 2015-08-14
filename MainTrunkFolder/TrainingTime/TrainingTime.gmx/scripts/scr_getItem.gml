 var val = "";
 if file_exists("Training.ini") then
 {
ini_open( 'Training.ini' );
 val  = ini_read_string( 'PlayerSettings', 'UserName', 0 );
 show_message(val);
ini_close();}
 
return val;

