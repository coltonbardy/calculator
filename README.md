<<<<<<< HEAD
## Version 0.1
#### Description
Version 0.1 is the starting point of the Calculator Project. You must create the base structure and styles, using bootstrap as you deem necessary. For this version we are looking to see that you
understand how to create the basic structure of a web application, style it, and make it reasonably responsive.  No functionality will be encoded with this version.

> ##### Related Reading
> - <a href="https://drive.google.com/open?id=0B6piuc4O8oQmMmo1YkhQYjY1Rnc" target="_blank">JS Reference Variables 1</a>
- <a href="https://drive.google.com/open?id=0BwjF2I7CBLDVNTY1ZTBIOWNnbUk" target="_blank">JS Reference Variables 2</a>
- <a href="https://drive.google.com/open?id=0B7eOl4joefDuRTViMjhrcm9raDQ" target="_blank">Event Delegation</a>
- <a href="https://drive.google.com/open?id=0BwjF2I7CBLDVbG5jSkZzTFlHWlU" target="_blank">Repeat Blocks</a>

> ##### Related Videos
> - <a href="https://plus.google.com/events/cn0tp0a0484m5oq5ft23l5rrm68" target="_blank">JS Reference Variables</a>
- <a href="https://plus.google.com/events/cja0mfet542cvtmc5ompe24ahes" target="_blank">JS Reference Variables 2</a>
- <a href="https://plus.google.com/events/cg2n17hsqrj64cf4iekfo0j80us" target="_blank">JS Reference Variables 2-2</a>
- <a href="https://plus.google.com/events/cn0tp0a0484m5oq5ft23l5rrm68" target="_blank">JS Repeat Blocks</a>
- <a href="https://plus.google.com/events/c3nvb7sbb66rphgl2af2c2t1occ" target="_blank">JS Event Delegation</a>

> ##### Related Prototypes
> - <a href="https://github.com/Learning-Fuze/prototypes/tree/master/js_ref_data_types" target="_blank">JS Reference Variables</a>
> - <a href="https://github.com/Learning-Fuze/prototypes/tree/master/js_loops" target="_blank">JS Repeat Blocks</a>
> - <a href="https://github.com/Learning-Fuze/prototypes/tree/master/js_event_delegation" target="_blank">JS Event Delegation</a>

## Getting Started
> - Have you forked the repo from the LearningFuze account?
        - **Yes** - continue to next step
        - **No** - Fork from the Learningfuze Repo to your account
        - **I don't know** - Look at **your** github account and see if you can find the appropriate repo there.
        
- Have you cloned it from **your** repo to your local system?
        - **Yes** - continue to next step
        - **No** 
            - Go to your LFZ folder. 
            - use `git clone [repo address]` to make a local copy on your development machine.
        - **I don't know** - If you have a copy, use `git remote -v` to see what address it came from.  If it is from the LearningFuze account you cloned the **wrong repo**.  If it is your address you have it right.  If there is no copy, you haven't cloned it yet!
        
- Are you in the right folder?

        - **Yes** - You are in the folder named after the repo you cloned, go to next step
        - **No** - You are most likely still in your LFZ folder where you cloned from. Change directories to the repo folder.
        - **I don't know** - type `pwd` and press enter.  If you don't see the right folder, use `cd [folder name]` till you get to the right folder.  Use `cd ..` to go backwards a step in your folder structure, if necessary.
- Are you on your master branch?
    - **Yes** - continue to "Pull Latest Changes"
    - **I dont know** Run the command below
        - `git branch` - this will highlight the branch you are currently on
    - **No** - Make sure you `git add .` and `git commit` to your current branch before you switch to your master branch
> - Pull Latest Changes
        - `git checkout master`
        - `git pull origin master` - **Now continue with the next steps**
> - Create a feature branch
    - `git checkout -b v0.1`
> - Work on the scope defined <a href="https://github.com/Learning-Fuze/SGT/tree/v.1#scope">Below</a>
> - Add files to git
    - `git add .`
> - Commit files (Group files together)
    - `git commit -m "SGT v0.1 - Your Name"`
    - **Replace "Your Name" with your first and last name**
> - Send to gitHub (Push)
    - `git push origin v0.1`
> - Create pull request
    - Pull request should be made from v0.1 to **your repository's/teams** master branch


## Scope
> - Layout
    - Create a standard calculator layout with at least the following:
        - 9 numeric keys: 0 through 9
        - 4 arithmetic function: -, +, *, /
        - equation buttons: =
        - 2 clear buttons: C (Clear), and CE (Clear Everything/All)
        - 1 display area for calculations / results
- Styling:
        - Apply whatever styling method you choose.  You can use standard CSS or Bootstrap
        - Calculator should be relatively responsive between mobile and desktop
        - You do not need to make it like the displayed calculator.  You should make the stlyling your own!
   

## Design
> #### Example appearance
Example: <img src="https://drive.google.com/open?id=0B7eOl4joefDuRWlzMUt6TG5TMXc">

=======
# Version 0.5

## Description
Version 0.5 adds in user functionality without needing to write the underneath logic of a calculator. With the introduction
to the calculator object the user can interact with the object to receive the values after calculation has been completed.

## Getting Started
> - What branch do you have your latest changes on?
    - **I don't know** - talk with an instructor
    - **not master**
        - Create pull request form current branch to master
        - Merge pull request on master
        - Go to Pull Latest Changes
    - **master** - Go to Pull Latest Changes
> - Pull Latest Changes
        - `git checkout v0.1`
> - Create the new feature branch
    - `git checkout -b v0.5`
> - Work on the scope defined <a href="https://github.com/Learning-Fuze/calculator/tree/v.5#scope">Below</a>
> - Add files to git
    - `git add .`
> - Commit files (Group files together)
    - `git commit -m "calculator v0.5 - Your Name"`
    - **Replace "Your Name" with your first and last name**
> - Send to gitHub (Push)
    - `git push origin v0.5`
> - Create pull request
    - Pull request should be made from v0.5 to **your repository's/teams** master branch


## Scope
> - Take layout from finished v0.1 and implement the following:
    - Insert a link to the following javascript files
        - jQuery's latest version
        - http://Learning-Fuze.github.io/calculator/calculator.js
    - JS Functionality
        - Declare and define a function that takes in 3 parameters
            - **Parameters**
                - type - will be a string equal to one of the following
                    - "itemAdded"
                    - "calculated"
                    - "error"
                - value - either a string or a number
                - item - **Only use for advanced functionality** Object of different types
            - Take the value and display in the correct layout area within the DOM
                - The display of the calculation will be up to each students interpretation of how a calculator should look. **If you need ideas
                look at your calculator on your phone.**
        - Create a new global variable **my_calculator** with the value defined as `new calculator(newFunc)` where newFunc is equal to the referenced function defined above
        - Add click handlers to all buttons in the DOM, when called they do the following
            - Defines a variable **val** equal to the value of the button pressed.
                - **Example : ** if "=" button was pressed then the value of the variable above would be a string "=";
            - Insert the following into the click handler function `my_calculator.addItem(val)`. Once this is called the function that was passed into the calculator object above will be called with parameters dependant on the value of the variable val

## Example

#### <a href="http://Learning-Fuze.github.io/calculator/" target="_blank">View Demo</a>

#### Code Example
```
<script>
        //callback function defined
        function callback(type, value, item) {
            switch (value) {
                case undefined:
                    $('#display_area').html("");
                    break;
                default:
                    $('#display_area').html(value);
                    break;
            }
        }
        // my_calculator - creates a new calculator object
        var my_calculator = new calculator(callback);
        //after DOM load add click handlers to all buttons
        $(document).ready(function () {
            $('button').on('click', function () {
                var val = $(this).text();
                switch (val) {
                    case 'AC':
                        my_calculator.allClear();
                        break;
                    default:
                        my_calculator.addItem($(this).text());
                        break;
                }
            });
        })
    </script>
    <style>
        #display_area {
            width: 300px;
            height: 30px;
            background-color: #cccccc;
            font-weight: bold;
        }
    </style>
</head>
<body>
<div id="display_area"></div>
<div id="buttonContainer">
    <div>
        <button>1</button>
    </div>
    <div>
        <button>2</button>
    </div>
    <div>
        <button>+</button>
    </div>
    <div>
        <button>=</button>
    </div>
    <div>
        <button>AC</button>
    </div>
</div>
</body>
```
>>>>>>> 7fe50a66e77993779d6041045bc9c081d4207110
