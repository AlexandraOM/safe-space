export default [
  {
    'explainer': 'Please select all that apply.',
    'page': 0,
    'section': 'What When Where',
    'content': [
      'Sexual comments or jokes',
      'Unwanted sexual advances',
      'Unwanted touching',
      'Another form of sexual assault',
      'Displaying pictures, photos, drawings of a sexual nature',
      'Sending messages with sexual content'
    ],
    'question': 'What form of sexual harrassment did you experience?',
    'type': 'checkbox'
  },
  {
    'page': 1,
    'section': 'What When Where',
    'question': 'When did the incident take place?',
    'type': 'date'
  },
  {
    'page': 1,
    'section': 'What When Where',
    'content': [
      'There was a single incident in this period',
      'There were a number of occurrences within this period'
    ],
    'question': 'Were there multiple incidents related to the same perpetrator?',
    'type': 'radio'
  },
  {
    'page': 2,
    'section': 'What When Where',
    'content': [
      'United Kingdom',
      'Outside of the UK'
    ],
    'question': 'Did the incident take place in the UK?',
    'type': 'radio'
  },
  {
    'page': 2,
    'section': 'What When Where',
    'other': true,
    'content': [
      'Online',
      'Music venue',
      'Function venue',
      'Music festival',
      'Studio',
      'Busking',
      'Orchestra pit',
      'Theatre pit',
      'On tour',
      'School, college or university',
      'Outside of work'
    ],
    'question': 'What kind of location did the incident take place in?',
    'type': 'checkbox'
  },
  {
    'explainer': 'Only fill this in if you\'d like to specifically identify the location of the incident.',
    'page': 2,
    'section': 'What When Where',
    'question': 'What is the name and/or address of the location?',
    'type': 'text'
  },
  {
    'page': 3,
    'section': 'Perpetrator',
    'content': [
      'non-binary',
      'a man',
      'a woman',
      'a group'
    ],
    'question': 'The harrasser or perpetrator was...',
    'type': 'radio'
  },
  {
    'page': 4,
    'section': 'Perpetrator',
    'other': true,
    'content': [
      'Manager',
      'Client',
      'Teacher',
      'Audience member',
      'Colleague',
      'Student',
      'Engager',
      'Employer',
      'Unknown'
    ],
    'question': 'What is their relationship to you?',
    'type': 'checkbox'
  },
  {
    'page': 5,
    'section': 'Perpetrator',
    'content': [
      'Yes',
      'No',
      'I don\'t know'
    ],
    'question': 'Have you experienced sexual harrassment by the same perpetrator before?',
    'type': 'radio'
  },
  {
    'page': 6,
    'section': 'Perpetrator',
    'content': [
      'Type your experience here'
    ],
    'question': 'In your own words please describe what happened.',
    'type': 'text'
  },
  {
    'page': 7,
    'section': 'Reporting',
    'content': [
      'Yes',
      'No'
    ],
    'question': 'Have you reported this incident elsewhere?',
    'type': 'radio'
  },
  {
    'page': 8,
    'section': 'Reporting',
    'other': true,
    'content': [
      'Employer',
      'Engager',
      'Colleague',
      'Police',
      'Support Services (e.g. SARC, Rape Crisis etc.)',
      'Other (please specify)'
    ],
    'question': 'Who did you report this incident to?',
    'type': 'checkbox'
  },
  {
    'page': 8,
    'section': 'Reporting',
    'content': [
      'Yes',
      'No',
      'I don\'t know'
    ],
    'question': 'Was any action taken?',
    'type': 'radio'
  },
  {
    'explainer': 'Please select all that apply.',
    'page': 9,
    'section': 'Reporting',
    'other': true,
    'content': [
      'I thought it might not be taken seriously',
      'I was scared of losing work',
      'The workplace culture',
      'I thought the issue would not be properly handled',
      'I was scared of the person who did this',
      'There were no other witnesses',
      'Other (please specify)'
    ],
    'question': 'Did anything discourage you from reporting?',
    'type': 'checkbox'
  },
  {
    'explainer': 'Please select all that apply.',
    'page': 10,
    'section': 'Victim',
    'other': true,
    'content': [
      'Employed',
      'Self-employed',
      'Not working at the time',
      'Other (please specify)'
    ],
    'question': 'What was your employment status at the time of the incident?',
    'type': 'checkbox'
  },
  {
    'explainer': 'This will help us identify how sexism, harrassment and abuse manifests in different spaces.',
    'page': 11,
    'section': 'Victim',
    'content': [
      'Musician',
      'Featured Artist',
      'Orchestral player',
      'Composer, songwriter or lyricist',
      'Music producer',
      'Music engineer',
      'Record Label',
      'Music Teacher',
      'Student'
    ],
    'question': 'What work were performing at the time of the incident?',
    'type': 'checkbox'
  },
  {
    'page': 12,
    'section': 'Victim',
    'content': [
      'Under 18',
      '18-24',
      '25-34',
      '35-44',
      '45-54',
      '55-64',
      'Over 65'
    ],
    'question': 'What age were you at the time of the incident',
    'type': 'radio'
  },
  {
    'page': 13,
    'section': 'Victim',
    'content': [
      'female',
      'male',
      'non-binary',
      'Prefer to self-describe'
    ],
    'question': 'What is your gender?',
    'type': 'radio'
  }
];