
# Product Tour

A simple JavaScript library for creating website product tours and walkthroughs.



## Features

- Three step tour with back, next, skip and close options
- Mobile responsive design using Bootstrap
- Simple HTML and CSS layout




## Installation

Include the following code in the head of your HTML file


```html
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/[email protected]/dist/js/bootstrap.min.js" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous"></script>
```

and the JS file of the project where you have put the product-tour.js


    
## Usage

- Create a container element with the class "tour-container" and place the three sections in separate rows inside it, each row contains a single section
- Add the class "tour-section" to each section and give it an id of "step1", "step2", "step3"
- Add navigation buttons with the correct classes and make sure that the onclick attribute values match the function names in your JavaScript code.
- Add the following code

```html
    <script>
       startTour();
    </script>
```
in the bottom of the HTML file to start the tour.

- You can customize the design and layout of the sections by modifying the CSS code.
- If the back button is not showing on the second step, make sure to add the code for showing and hiding the back button.




## Contributing

Contributions are always welcome!

If you have any suggestions or issues, please feel free to open a new issue or submit a pull request.


## License

This project is licensed under the MIT License.

Hope the above helps you in creating a product tour for your website, with the help of this README file, any developer who use your project should be able to understand how it works and how to set it up. And also, it will be helpful to you to keep track of what you have done in the project.
Please let me know if you have any questions or if there's anything else I can do for you.

