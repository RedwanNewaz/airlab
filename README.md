# Get Started

## Install Dependencies

- Make sure you have node and npm installed
- Go to the project directory and run ``` npm install ```

## Run the application

- From the project directory run ``` npm start ```

The website should be hosted at localhost:(port). For example: localhost:3000


## Edit the website

All the text in the website can be edited from a single directory: ``` airlab/src/constanst/data ```

- To Edit the text in the Large Poster/Hero Image which is in every page, go to ```heroImageData.js```

 - To Add/Edit any other content from the page, go to ```<page_name>Data.js```.
    1. Publication
        - To edit the content in the publication page, go to ```publicationData.js``` and edit the value of the hashmap stored in the ```publicationData``` array. 
        - To add a publication content, simply add a new hasmap to the same ```publicationData``` array.
        <br/>
        **Note:** If you add/edit a **year** which is not in the separate ```years``` array already then make sure to add taht year to it as well.

    2. Research:
         - To edit the content in the research page, go to ```researchData.js``` and edit the value of the hashmap stored in the ```researchData``` array.
        - To add a research content, simply add a new hasmap to the same ```researchData``` array. 
        - To add/edit the research content's image, make sure the image is in ```airlab/src/assets/images``` directory. The value of the ```image``` key will be ```file_name``` of the image only. If an image is not available then leave the it as an empty string.  The following is the structure of the researchData.:
        ```
        const researchData = [{
            id: integer,
            title: string,
            desc: string,
            tags: string,
            image: string,

            //<add the ids of the publication that you want to map with the this research.>//
            relatedPublication: list, 

            //<add the descriptions regarding the research. Each element will be treated as a paragraph>//
            longDesc: list, 

            //<add the conlusion or ending details regarding the research. Each element will be treated as a paragraph>//
            concludingParagraph: list, 

            //<each element will be treated as a section>//
            details: [ 
                {
                    header: 'string' //<section's title>//

                    //<It has two parts: bulletPoint and paragraph>//
                    content: {   

                        //<It has two parts: beforePointsParagraph and points>//
                        bulletPoint: [ 

                            //<This is an array of paragraphs which will be displayed before the points>//
                            beforePointsParagraph: list, 

                            //<It has two parts: header and description>//
                            points: [ 
                                header: 'string' //<Title of the point>//

                                 //<Description of the point. Each element will be treated as a paragraph>
                                description: 'list'
                            ]
                        ],

                    //<List of paragraphs. This will be treated as the paragraphs after the bullet points as well if bullet point section is present else it will be a normal section of paragraph.>//
                    paragraph: list 
                    }
                }
            ]
        }]
        ```
        <br/>
        - The ```researchData``` also contains details of the particular research. 
        **Note:** If you add/edit a **tag** which is not in the separate ```tags``` array already then make sure to add that tag to it as well.

    3. Team:
        - To add/edit a team member's photo go to ```teamData.js``` and make sure the photo is in ```airlab/src/assets/images``` directory. The value of the ```photo``` key will be ```file_name``` only. If a photo is not available then leave the it as an empty string.

    4. Contact:
        - To add/edit a contact's photo go to ```contactData.js```. Make sure the desired photo is in ```airlab/src/assets/images``` directory. The value of the ```photo``` key will be the ```file_name``` of image only. If a photo is not available then leave the it as an empty string.
        - If a phone number of a contact is not available then leave it as an empty string.


    **NOTE:** 
    1. Make sure the id's of the array inside the hashmap is unique.
    2. DO not change the keys of the elements inside the hashmap. 

