messageText = "Hello, Junior Captain,##You have been chosen to be a part of My Next Voyage. Rush to the senior Admiral's Residance. He'll provide you with your ship to join our fleet. Do as he says. #And be Careful, One small mistake can take you to the start of the Challenge. #Your Time Starts Now!##      -Admiral Nate";

draw_sprite_ext(spr_ParchmentChallenge, 0, window_get_width()/10, window_get_height()/10, 1, 1, 0, c_white, 1);

draw_set_color(c_black);
draw_set_font(font2);

var cstr;
cstr=string_copy(messageText,1,pos);
draw_sprite_ext(sprStartChallengeButton, 0, window_get_width()/1.7, window_get_height()/1.5, 0.5, 0.5, 0, c_white, 1);
draw_text_ext_transformed(window_get_width()/6,window_get_height()/5, cstr,18,400, 1,1, 0);
pos += 0.5;
var numOfChar;
var totalChar;
numOfChar = string_length(cstr);
totalChar= string_length(messageText);
if(numOfChar = totalChar)
{
//audio_stop_sound(sndType);
//sound_stop_all();

//draw_sprite_ext(sprStartChallengeButton, 0, window_get_width()/1.7, window_get_height()/1.5, 0.5, 0.5, 0, c_white, 1);
}
