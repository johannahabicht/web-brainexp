var quizQuestions = [

/*
 Feedback questions asked after each played game 
*/


{

  question: "We will ask you some questions about the Milky Way game now.", 
  answers: [
          {
              type: "Continue",
              content: "Continue"
          }
          ],
      qtype: "button", 
      questionId: 0,
      surveytag: 'mw', // Treasure Hunt game 
      title: 'Milky Way game', // see if I keep the title   
      constraint: [
        {min: ""},
        {max: ""}
      ] 
},

{
      question: "Was the game tutorial clear?",
      answers: [
          {
              type: "mw-1",
              content: "Yes"
          },
          {
              type: "mw-2",
              content: "Somewhat confusing"
          },

          {
              type: "mw-3",
              content: "Very confusing"
          },
      ],
      questionId: 1,
      surveytag: 'mw',
      condition: true,
      condition_value: ['mw-2','mw-3'],
      title: '',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

  {
      question: "Please, specify what was unclear in the tutorial",
      answers: [
          
      ],
      questionId: 2,
      surveytag: 'mw',

      condition: '',
      condition_value: '',

      // condition: '',
      // condition_value: '',
      title: '',
      qtype:"free-report",
      constraint: [
        {min: ""},
        {max: "1000000"}
      ]
  },

  {
      question: "Did you experience any technical difficulties during the game?",
      answers: [
          {
              type: "mw-1",
              content: "No"
          },
          {
              type: "mw-2",
              content: "Screen froze"
          },

          {
              type: "mw-3",
              content: "Buttons were unresponsive"
          },

          {
              type: "mw-4",
              content: "Sound didn't play"
          },

          {
              type: "mw-5",
              content: "Didn't see my score at the end"
          },

           {
              type: "mw-6",
              content: "Other"
          },
      ],
      questionId: 3,
      surveytag: 'mw',
      condition: true,
      condition_value: ['mw-6'],
      title: '',
      qtype:"checkbox",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

  {
      question: "Please, specify which difficulties did you encounter during the game",
      answers: [
          
      ],
      questionId: 4,
      surveytag: 'mw',
      condition: '',
      condition_value:'', 
      title: '',
      qtype:"free-report", // TO BE VERIFIED 
      constraint: [
        {min: ""},
        {max: "1000000"}
      ]
  },


  {
      question: "How would you assess the duration of the game?",
      answers: [
          {
              type: "mw-1",
              content: "Too short"
          },

          {
              type: "mw-2",
              content: "Just right"
          },
          {
              type: "mw-3",
              content: "Somewhat long"
          },

          {
              type: "mw-4",
              content: "Too long, had to force myself to finish"
          },
      ],
      questionId: 5,
      surveytag: 'mw',
      condition: '',
      title: '',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

  {
      question: "How would you rate the game?",
      answers: [
          {
              type: "mw-1",
              content: "Didn't enjoy it at all"
          },
          {
              type: "mw-2",
              content: "Neutral"
          },

          {
              type: "mw-3",
              content: "Somewhat enjoyed"
          },

          {
              type: "mw-4",
              content: "Enjoyed a lot"
          },
      ],
      questionId: 6,
      surveytag: 'mw',
      condition: '',
      title: '',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

  {
      question: "Would you play this game again if you have a chance?",
      answers: [
          {
              type: "mw-1",
              content: "No"
          },
          {
              type: "mw-2",
              content: "Maybe"
          },

          {
              type: "mw-3",
              content: "Yes"
          },

      ],
      questionId: 7,
      surveytag: 'mw',
      condition: '',
      title: '',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

  {
      question: "Any other feedback on the game?",
      answers: [
      ],
      questionId: 8,
      surveytag: 'mw',
      condition: '',
      title: '',
      qtype:"free-report",
      constraint: [
        {min: ""},
        {max: "1000000"}
      ]
  },

]

export default quizQuestions
