# Daily Calendar

### Description

The purpose of this project was to create a functional calendar so that a user can organize the important events of their day onto a clear platform and manage their time effectively. This is useful for employees on every rung of a corporate ldoneer, as well as those who are self employed or self motivated. The calendar maintains a simple, sleek structure, consisting of a welcome page that directs to the main calendar with per-half-hour note slots.

Components:
1. "Your Calendar" h1 title
2. Updated h4 date and time 
3. Container div, title div, calendar div, calendar date div, calendar rows div
4. Calendar page generated with jQuery, pulled from html document
    - Updated date and time
    - Per hour rows containing: 
        * Time (10am-5pm) div
        * Larger divs with forms for user inputted tasks and notes
        * Third div containing 3 buttons with Javascript onClick events
5. Javascript functions that assign colors to divs depending on whether or not a note has been scheduled into to the past, present, or future
6. preventDefault to keep the page from refreshing
6. Bootstrap rows and columns
7. Google fonts
8. Fontawesome Icons
9. Colors, Borders
10. Super cool background image

### Links to Project

https://github.com/svivoli/Daily-Calendar  
https://svivoli.github.io/Daily-Calendar/index.html

### User Experience

![Title](https://i.imgur.com/FivZxzR.jpg)

The user is greeted with the title "Your Calender", the current date and time is displayed, and an arrow indicates that the calendar can be found once they scroll down. 

![Calendar](https://i.imgur.com/pINuikB.jpg)

Unless the user has already stored notes and tasks in the calendar, it will appear blank. There are  three colors to indicate that a note is past the hour (grey), the current hour (red), or a future hour (green).

![Add Button](https://i.imgur.com/mnZqu5n.png)

There are three icons availble to the user in blue divs to the right of each note. The first button, a plus sign has two functions. It will change a past, grey note to a fourth color, purple, to indicate that a user has inputted a note into a past time slot, and it also stores inputted data for any note to localStorage so that when the user refreshes the page their inputs will remain. At midnight, the user inputs are set to be cleared. The second button, the check mark, changes the color of the note to grey, allowing the user to indicate that they have completed a task, or possibly that it is of lesser importance. 

![Clear Button](https://i.imgur.com/eO2806b.png)

The third button, an x, clears any colored note to white.

### Developer Experience

Cumbersome code:

- Long, repetitive
- Was not able to use the same block of code for each button
- jQuery onclick events were not working - resulting mix of javascript and jQuery
- Would not fair well for a longer, multi-day/multi-week calendar, which is much more functional

Unresolved Errors:

- localStorage only works for the first note
- If the user has changed grey divs to purple, they don't remain purple upon refresh
- Ideally, the clear button would also clear the text content of the input


I felt a little restrained by this project. I would have liked to be able to make the plus button append a list item to the note divs so that the user could enter multiple tasks per time slot. However, this proved to be a daunting task, as I was faced with creating multiple, repetitive functions as it was.  On top of that, it would have been very complicated to manipulate the color of each task within the list if I had done it that way. Another project to circle back to once I develop my skillset further!

--Sarah Vivoli



