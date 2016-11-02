//Declare the Color Object with our new keyword below here.

const Color = new Object();

/*
** rgb is an array that hold the color values.
** first is red -> R, then green -> G, and blue -> B
** Example
*/

Color.isColor = function(rgb);
{
  //each color must be between 0 and 255. Also can be equal.
  let redworks = (rgb[0] >= 0) && (rgb[0] <= 255);
  let greenwork = (rgb[1] >= 0) && (rgb[1] <= 255);
  let blueworks = (rgb[2] >= 0) && (rgb[2] <= 255);

  if(redworks && greenworks && blueworks)
  {
    return true;
  }
  else{
    return false;
  }
};

Color.redIntensity = function(rgb){

};

//redIntensity
color.redIntensity = function(rgb)
{
  let red_level = math.round((rgb[0] / 255) * 100);
  return green_level;
}

//greenIntensity
color.green_intensity = function(rgb)
{
  let green_level = math.round((rgb[1] / 255) * 100);
  return green_level;
}


//blueIntensity
color.blue_intensity = function(rgb)
{
  let blue_level = math.round((rgb[2] / 255) * 100);
  return blue_level;
}

//brightness


//complement
