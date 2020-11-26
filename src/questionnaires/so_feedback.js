var quizQuestions = [

/*
 Feedback questions asked after each played game 
*/


{

  question: "We will ask you some questions about the Space Observer game now.", 
  answers: [
          {
              type: "Continue",
              content: "Continue"
          }
          ],
      qtype: "button", 
      questionId: 0,
      surveytag: 'so', 
      title: 'Space Observer',   
      constraint: [
        {min: ""},
        {max: ""}
      ] 
},

{
      question: "Was the game tutorial clear?",
      answers: [
          {
              type: "so-1",
              content: "Yes"
          },
          {
              type: "so-2",
              content: "Somewhat confusing"
          },

          {
              type: "so-3",
              content: "Very confusing"
          },
      ],
      questionId: 1,
      surveytag: 'so',
      condition: true,
      condition_value: ['so-2','so-3'],
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
      surveytag: 'so',

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
              type: "so-1",
              content: "No"
          },
          {
              type: "so-2",
              content: "Screen froze"
          },

          {
              type: "so-3",
              content: "Buttons were unresponsive"
          },

          {
              type: "so-4",
              content: "Sound didn't play"
          },

          {
              type: "so-5",
              content: "Didn't see my score at the end"
          },

           {
              type: "so-6",
              content: "Other"
          },
      ],
      questionId: 3,
      surveytag: 'so',
      condition: true,
      condition_value: ['so-6'],
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
      surveytag: 'so',
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
              type: "so-1",
              content: "Too short"
          },

          {
              type: "so-2",
              content: "Just right"
          },
          {
              type: "so-3",
              content: "Somewhat long"
          },

          {
              type: "so-4",
              content: "Too long, had to force myself to finish"
          },
      ],
      questionId: 5,
      surveytag: 'so',
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
              type: "so-1",
              content: "Didn't enjoy it at all"
          },
          {
              type: "so-2",
              content: "Neutral"
          },

          {
              type: "so-3",
              content: "Somewhat enjoyed"
          },

          {
              type: "so-4",
              content: "Enjoyed a lot"
          },
      ],
      questionId: 6,
      surveytag: 'so',
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
              type: "so-1",
              content: "No"
          },
          {
              type: "so-2",
              content: "Maybe"
          },

          {
              type: "so-3",
              content: "Yes"
          },

      ],
      questionId: 7,
      surveytag: 'so',
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
      surveytag: 'so',
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
