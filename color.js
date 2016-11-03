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
color.brightness = function(rgb)
{
  let bright = (rgb[0] + rgb[1] + rgb[2]) / 3;
  return bright;
}

//complement
color.complement = function(rgb)
{
  let comp = [];

  for (var i = 0; i < 3; 1++)
  {
    comp.push(rgb[i]);
  }

  return comp;

}

//grey scale
color.grey_scale = function(rgb)
{
  let grey_level = (rgb[0] + rgb[1] + rgb[2]) / 3;
  let grey_array = (grey_level, grey_level, grey_level);

  return grey_array;
}
