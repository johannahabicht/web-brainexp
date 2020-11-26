var quizQuestions = [

/*
 Feedback questions asked after each played game 
*/


{

  question: "We will ask you some questions about the Scavenger game now.", 
  answers: [
          {
              type: "Continue",
              content: "Continue"
          }
          ],
      qtype: "button", 
      questionId: 0,
      surveytag: 'scav', 
      title: 'Scavenger',   
      constraint: [
        {min: ""},
        {max: ""}
      ] 
},

{
      question: "Was the game tutorial clear?",
      answers: [
          {
              type: "scav-1",
              content: "Yes"
          },
          {
              type: "scav-2",
              content: "Somewhat confusing"
          },

          {
              type: "scav-3",
              content: "Very confusing"
          },
      ],
      questionId: 1,
      surveytag: 'scav',
      condition: true,
      condition_value: ['scav-2','scav-3'],
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
      surveytag: 'scav',

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
              type: "scav-1",
              content: "No"
          },
          {
              type: "scav-2",
              content: "Screen froze"
          },

          {
              type: "scav-3",
              content: "Buttons were unresponsive"
          },

          {
              type: "scav-4",
              content: "Sound didn't play"
          },

          {
              type: "scav-5",
              content: "Didn't see my score at the end"
          },

           {
              type: "scav-6",
              content: "Other"
          },
      ],
      questionId: 3,
      surveytag: 'scav',
      condition: true,
      condition_value: ['scav-6'],
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
      surveytag: 'scav',
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
              type: "scav-1",
              content: "Too short"
          },

          {
              type: "scav-2",
              content: "Just right"
          },
          {
              type: "scav-3",
              content: "Somewhat long"
          },

          {
              type: "scav-4",
              content: "Too long, had to force myself to finish"
          },
      ],
      questionId: 5,
      surveytag: 'scav',
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
              type: "scav-1",
              content: "Didn't enjoy it at all"
          },
          {
              type: "scav-2",
              content: "Neutral"
          },

          {
              type: "scav-3",
              content: "Somewhat enjoyed"
          },

          {
              type: "scav-4",
              content: "Enjoyed a lot"
          },
      ],
      questionId: 6,
      surveytag: 'scav',
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
              type: "scav-1",
              content: "No"
          },
          {
              type: "scav-2",
              content: "Maybe"
          },

          {
              type: "scav-3",
              content: "Yes"
          },

      ],
      questionId: 7,
      surveytag: 'scav',
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
      surveytag: 'scav',
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
