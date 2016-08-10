if (argument0 == "spm")
{lecFile = "SPM.txt";}
else
{lecfile = "DSA.txt"; }

var i, file;
file = file_text_open_read(lecfile);
for (i = 0; i < 10; i += 1)
   {
   scr[i] = file_text_read_real(file);
   file_text_readln(file);
   scr_name[i] = file_text_read_string(file);
   file_text_readln(file);
   }
file_text_close(file);
show_message(scr_[7]);
show_message(scr_name[7]);
