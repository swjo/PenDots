# PenDots

*Pen Dots Algorithm was created through a process based on several experiments executed by humans and transcripted in p5js done at the course “Input-Output” supervised by Fabian Morón Zirfas.*


The first step was to write an algorithm in ‘human language' which was executed by 5 other students. 

###Version 1.0

>Draw a line in a random direction. After a while turn right. Keep on drawing and turn right again. Repeat several times. 
Line lines can cross, but they don’t have to. After several repetitions choose a new point and start again.

These were the results. 

![](/images/class.jpg)

None of them was exactly what was in the mind of the developer while writing these steps although all them were visually appealing. It’s interesting that it hasn’t been mentioned that the line has to be straight and still almost everyone sticked to a straight line. 

###Version 2.0

For the second version, an explicit material was added to improve the visual appearance.  

>Take a squared piece of paper and a white candle. 
Draw a line in any direction. After a while turn right. Keep on drawing an turn right again. Repeat this action serval times without removing the candle from the paper. 
The lines can cross, but they don’t have to. 
After several repetitions choose a new point and start again.
When you decide to have drawn enough line, take black ink and paint over the paper to make the lines visible. 

This algorithm was executed by 10 people in a bar. 
These were the results. 

![](/images/1-1.jpg)
![](/images/complete.jpg)


Apart from two images, the results were pretty accurate, although some people had problems with the ink. One person started to “turn”/fold the paper instead of the line and kept on painting the line over the folded paper. Another one just put a few drops on the paper and liked it so much, that she left it this way instead of painting it over to make the white lines visible. 

###Version 2.1

To achieve more variety and visual freedom some of the lines where removed again.

>Choose a squared piece of paper and a white candle.
Draw a random form on the paper. 
Take black ink and paint over the paper to make the lines visible. 
One person just draw the outlines and painted the form black. Others started to burn the candle and paint with the dripping wax. Every sheet of paper became different still they were untied by the material and the style.

![](/images/3.jpg)
![](/images/2-1.jpg)
![](/images/4.jpg)



###Translating the algorithm in p5js

The first try was to translate this system into code. The result was an inactive program. Once started it created a white form on white background. By moving the mouse the user was painting the background black until the form became visible. While clicking the mouse some sprinkle spots appeared to imitate the possibilities one has by using ink. 

![](/images/programm.jpg)

However, the goal was to write an algorithm which creates a visually appealing pattern. Therefore, one of the images was picked and a new attempt was to write a code which would create these kinds of patterns, based on the mathematical formulas used to calculate spirals. 

*First tries.*

![](/images/spirale1j.jpg)





![](/images/spirale2.jpg)





![](/images/spirale3.jpg)


By changing the frequency and size of the dots and adding random variables different results were achieved until reaching one which was satisfying. 

![](/images/pen.jpg)

####How can one use it? 

If 3D printed, this pattern could turn into an original pen. Each dot would turn into a black sphere connected with transparent material to keep the magic. 

![](/images/mockup.jpg)
 
####How to install it?
Clone the repository https://github.com/swjo/PenDots to your desktop. Run index.html
