export const surveyJson = {
    "title": "Travel Tripper",
    "description": "Your personal itinerary creator. ",
    "logoPosition": "right",
    "pages": [
        {
            "name": "page1",
            "elements": [
                {
                    "type": "radiogroup",
                    "name": "question1",
                    "title": "How often do you travel",
                    "isRequired": true,
                    "choices": [
                        {
                            "value": "item1",
                            "text": "Once a week"
                        },
                        {
                            "value": "item2",
                            "text": "Once a year"
                        },
                        {
                            "value": "item3",
                            "text": "I am always on vacation"
                        },
                        {
                            "value": "item4",
                            "text": "I love my home"
                        }
                    ],
                    "showOtherItem": true
                },
                {
                    "type": "radiogroup",
                    "name": "question2",
                    "title": "What is your favourite destination",
                    "isRequired": true,
                    "choices": [
                        {
                            "value": "item1",
                            "text": "Mountains"
                        },
                        {
                            "value": "item2",
                            "text": "Sea"
                        },
                        {
                            "value": "item3",
                            "text": "Forest"
                        },
                        {
                            "value": "item4",
                            "text": "Adventure sports"
                        }
                    ]
                }
            ]
        }
    ]
}

export default surveyJson;