ini_open( 'Training.ini' );
ini_write_real( 'PlayerSettings', argument0 , argument1 );
show_message(argument1);
/*
if  (is_string(argument1))
then {
ini_write_string( 'PlayerSettings', argument0 , argument1 );
}
else{
ini_write_real( 'PlayerSettings', argument0 , argument1 );
}*/
ini_close();
