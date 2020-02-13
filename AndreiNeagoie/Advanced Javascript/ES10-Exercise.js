// Solve the below questions:

// #1 Turn this array into a new array: [1,2,3,[4],[5]]. Bonus if you can do it on one line
const array = [[1],[2],[3],[[[4]]],[[[5]]]]

array.flat(2)

// #2 Turn this array into a new array: [ 'Hello young grasshopper!', 'you are', 'learning fast!' ]
const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]];

const flat = greeting.flat()

//#3 Turn the greeting array above into a string: 'Hello young grasshopper you are learning fast!'

Object.Entries(flat).map(value => value.join(" ")).join(' ')  // "0 Hello 1 young 2 grasshopper! 3 you 4 are 5 learning 6 fast!"
Object.values(greeting).map(value => value.join(" ")).join(' ') // "Hello young grasshopper! you are learning fast!"


turn it into an object and then flatmap? or just map?
greeting.join(" ")

//#4 Turn the trapped 3 number into: [3]
const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]];

trapped.flat(24)


//#5 Clean up this email to have no whitespaces. Make the answer be in a single line (return a new string):
const userEmail3 = '     cannotfillemailformcorrectly@gmail.com   '

userEmail3.trim()

//#6 Turn the below users (value is their ID number) into an array: [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]
const users = { user1: 18273, user2: 92833, user3: 90315 }

const usersArray = Object.entries(users)

//#7 change the output array of the above to have the user's IDs multiplied by 2 -- Should output:[ [ 'user1', 36546 ], [ 'user2', 185666 ], [ 'user3', 180630 ] ]

usersArray.map(value => value * 2) // [NaN, 36546, NaN, 185666, NaN, 180630]

Object.entries(users).map(value => {
    return value[0] + " " + value[1]*2          // ["user1 36546", "user2 185666", "user3 180630"]
})

//Solution is a combination of the two
const updatedUsersArray = usersArray.map(value => [value[0], value[1] * 2 ])            // mapping the already objected array from question #6
                                                                                        // taking the value inputed through the array and return the value of the first entry (value[0]) and the value of the second entry (value[2]) times 2 

//#8 change the output array of question #7 back into an object with all the users IDs updated to their new version. Should output: { user1: 36546, user2: 185666, user3: 180630 }
const updatedUsers = Object.fromEntries(updatedUsersArray)