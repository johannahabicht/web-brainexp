var quizQuestions = [

/*
 Feedback questions asked after each played game 
*/


{

	question: "We will ask you to answer some questions about the game now.", 
  answers: [
          {
              type: "Continue",
              content: "Continue"
          }
          ],
      qtype: "button", 
      questionId: 0,
      surveytag: 'th', // Treasure Hunt game 
      title: 'Treasure Hunt game', // see if I keep the title   
      constraint: [
        {min: ""},
        {max: ""}
      ] 
},

{
      question: "Was the game tutorial clear?",
      answers: [
          {
              type: "th-1",
              content: "Yes"
          },
          {
              type: "th-2",
              content: "Somewhat confusing"
          },

          {
              type: "th-3",
              content: "Very confusing"
          },
      ],
      questionId: 1,
      surveytag: 'th',
      condition: '',
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
      surveytag: 'th',
      condition: 'yes',
      title: '',
      qtype:"free-report", // TO BE VERIFIED 
      constraint: [
        {min: ""},
        {max: "1000000"}
      ]
  },

  {
      question: "Did you experience any technical difficulties during the game?",
      answers: [
          {
              type: "th-1",
              content: "No"
          },
          {
              type: "th-2",
              content: "Screen froze"
          },

          {
              type: "th-3",
              content: "Buttons were unresponsive"
          },

          {
              type: "th-4",
              content: "Sound didn't play"
          },

          {
              type: "th-5",
              content: "Didn't see my score at the end"
          },

           {
              type: "th-6",
              content: "Other"
          },
      ],
      questionId: 3,
      surveytag: 'th',
      condition: 'yes',
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
      surveytag: 'th',
      condition: 'yes',
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
              type: "th-1",
              content: "Too short"
          },

          {
              type: "th-2",
              content: "Just right"
          },
          {
              type: "th-3",
              content: "Somewhat long"
          },

          {
              type: "th-4",
              content: "Too long, had to force myself to finish"
          },
      ],
      questionId: 5,
      surveytag: 'th',
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
              type: "th-1",
              content: "Didn't enjoy it at all"
          },
          {
              type: "th-2",
              content: "Neutral"
          },

          {
              type: "th-3",
              content: "Somewhat enjoyed"
          },

          {
              type: "th-4",
              content: "Enjoyed a lot"
          },
      ],
      questionId: 6,
      surveytag: 'th',
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
              type: "th-1",
              content: "No"
          },
          {
              type: "th-2",
              content: "Maybe"
          },

          {
              type: "th-3",
              content: "Yes"
          },

      ],
      questionId: 6,
      surveytag: 'th',
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
      questionId: 7,
      surveytag: 'th',
      condition: '',
      title: '',
      qtype:"free-text",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

]