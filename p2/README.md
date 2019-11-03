
# Project 2 - Mystery Word Game
- By: Grace Punzalan
- Production URL: <http://p2.singlepage.tech>

## Build strategy
*Put an x in the build strategy you used. Put an x in each if you tackled both.*
- [ ] Integrated
- [X] Comprehensive

## Outside resources
- Vue.js 
    - [Passing data between parent and child component (props and events)](https://vuejs.org/v2/guide/components.html#Reusing-Components)
    - [Incorporating slots](https://vuejs.org/v2/guide/components-slots.html#Slot-Content)

- Issues/Troubleshooting
    - [Issue with modifying props directly from child component](https://michaelnthiessen.com/avoid-mutating-prop-directly)
    - [Centering incorrect letters](https://www.w3.org/Style/Examples/007/center.en.html)

- Issues Forum
    - [using 'require' to dispaly images (Issue #95)](https://github.com/susanBuck/e28-fall19/issues/95)
    - [using computed to avoid calculation from the template (Issue #104) ](https://github.com/susanBuck/e28-fall19/issues/104)



## Notes for instructor
- Please note that there are 3 sections of the game that I converted into components:
    - displaying invalid letters
    - input section (which includes the label, input box, and button to practice emitting events to parent)
    - displaying validation message when users hit submit
- Additonally, here are 4 validation messages that a user can get:
    - "Congratulations, you solved the puzzle! Try a different category."
    - "You've entered 6 invalid letters. Try a different category."
    - "Your answer is incorrect. Try a different category."
    - "Enter a value."
- I also created the images used in the application using Google Drawing. 
- Lastly, I used some styling code that came when creating the application using Vue CLI:

```
        <style>
        #app {
          font-family: 'Avenir', Helvetica, Arial, sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          text-align: center;
          color: #2c3e50;
          margin-top: 60px;
        }
        </style>
```
