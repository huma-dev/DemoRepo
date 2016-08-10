/*if (argument0 == "SPM.txt")
{lecFile = "SPM.txt";}
else
{lecfile = "DSA.txt"; }
*/
var scr_name, i, file;
file = file_text_open_read("SPM.txt");
   file_text_readln(file);
for (i = 0; i < 15; i++)
   {
   scr[i] = file_text_read_real(file);
   scr_name[i] = file_text_read_string(file);
  // show_message(scr_name[i]);
   file_text_readln(file);
   }
file_text_close(file);
return scr_name;
//show_message(scr_[4]);

