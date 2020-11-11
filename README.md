# MS2: Ash Tree Estates.

[View the live project here.](https://adamdelancey.github.io/ms2-ashtreeestates/)

As my submission for the Code Institute Milestone Project 2, this Ash Tree Estates website is based on a family student letting business
that is looking to expand its audience and get more views and enquiries from the student market, as well as book viewings and have access to useful documents for the tenancy.
It is designed to be responsive and accessible on a range of devices, making it easy to navigate for potential users.

<p align="center">
    <img src="documentation/screenshots/responsive-display.jpg">

# Access

View the project live: [here](https://adamdelancey.github.io/ms2-ashtreeestates/)

View the Github repo: [here](https://github.com/adamdelancey/ms2-ashtreeestates)

# UX

## Strategy

### Business Objectives

1. To increase the number of direct enquiries through the website.
2. To improve the amount of information on the [current website](https://ashtreeestates.com/), in particular by adding a map feature.
3. To provide up-to-date information on the properties and documentation required.
4. To encourage students to get in touch, book a viewing and ultimately pay a deposit.

### User stories

-   #### First Time Visitor Goals

    1. As a First Time Visitor, I want to easily understand the services offered by the company and have a positive experience when exploring the website.
    2. As a First Time Visitor, I want to be able to easily navigate throughout the site to find any tour that may interest me, and find sufficient information on that tour.
    3. As a First Time Visitor, I want to be able to learn more about the company's goals and values, and easily find the details that I am looking for.
    4. As a First Time Visitor, I want to enjoy high-quality, interesting images of the locations that I am interested in.
    5. As a First Time Visitor, I want to be able to submit an enquiry related to the tour that I am interested in.

-   #### Frequent User Goals
    1. As a Frequent User, I want to check to see if any new tours have been added to the website.
    2. As a Frequent User, I want to check to see if any new features have been added.

## Scope

### Current features

* Navbar 
    * Dropdown tour menu and contact form modal, which is easily located and acts as an immediate call to action to boost enquiries.

* Home Page
    * Impressive and interesting use of imagery in the hero image and backgrounds of certain sections.
    * Three cards showing the tours that the company offers, giving easy access and allowing the user to quickly see which tours are available and where they are located.
    * A review carousel aimed to give a positive impression of the company.
    * three cards showing the reasons to travel with us, giving short and concise answers.

* Tour Page
    * Impressive and interesting use of imagery in the hero image, backgrounds of certain sections and additionally in the carousel.
    * Well presented tour highlights and key facts for the user to easily understand.
    * A second enquire button to act as a call to action, which will already have the tour name selected at the top.
    * A day-by-day itinerary and map API from Google Maps to see the location of the starting point of the tour.
    * A weather chart using sliders to see the average rainfall and temperatures at different times of the year.

* About Page
    * Impressive and interesting use of imagery in the hero image and backgrounds of certain sections.
    * Company history presented as timeline for instant understanding.
    * Photos and texts of the team members to make the company appear more personable.
    * Sustainability values, including an iframe of carbon emissions so that users can understand their carbon footprint from any flight taken.

* Footer
    * 'Back to top' shortcut to improve user experience
    * Awards won to further the positive impression.
    * Social media links.
    * Company details such as address, email and phone number.

### Long-term goals

Future improvements to the website may include:

* A blog section to improve SEO and include customer stories and experiences.
* Offers on tours to entice customers to make enquiries.
* A payment system such as Stripe to take direct bookings and not just enquiries.

## Structure

I made the decision to have the site split into three clear sections - Home, Tours & About, with each page having the same navbar and footer details for consistency and ease of use.

The Home section is one page and is ordered structurally via importance of content, starting with a large hero section at the top of the page, then moving onto a short summary, tour selection, reviews and reasons why section. I structured it this way based on what I believe is most important, in addition to taking inspiration from other leading travel sites.

The Tours section is then split into three structurally equal pages, just with different content. As these are the products of the business, these can be accessed from every page of the site, and within the tour pages themselves at the bottom. Having the tours on separate pages allows easy navigation and structure, and is what you would expect as a user.

The About section is again one page and ordered structurally via importance of content.

## Skeleton

### Wireframes
Home Page
<p><img src="documentation/screenshots/home-desktop.jpg">
    <img src="documentation/screenshots/home-tablet-phone.jpg"></p>
Tour Pages
<p> <img src="documentation/screenshots/tour-desktop.jpg">
    <img src="documentation/screenshots/tour-tablet-phone.jpg"></p>
About Page
<p> <img src="documentation/screenshots/about-desktop.jpg">
    <img src="documentation/screenshots/about-tablet-phone.jpg"></p>

Full wireframes can be accessed here:

-   Home Page Desktop Wireframe - [View](documentation/wireframes/home-desktop.pdf)

-   Home Page Mobile & Tablet Wireframe - [View](documentation/wireframes/home-tablet-and-mobile.pdf)
    

-   Tour Page Desktop Wireframe - [View](documentation/wireframes/tour-desktop.pdf)

-   Tour Page Mobile & Tablet Wireframe - [View](documentation/wireframes/tour-tablet-and-mobile.pdf)

-   About Page Desktop Wireframe - [View](documentation/wireframes/about-desktop.pdf)

-   About Page Mobile & Tablet Wireframe - [View](documentation/wireframes/about-tablet-and-mobile.pdf)

## Surface
   
### Design
-   #### Colour Scheme
    -   The two main colours used are a shade of dark blue, #030a4a, and a beige/off-white colour, #F5F5DC. These are used throughout the site in each section, buttons and forms, and were chosen due to being contrasting colours and appealing to the eye. Many of the background images used throughout the site also aim to include these colours.
-   #### Typography
    -   The Raleway font is the main font used throughout the whole website with Sans Serif as the fallback font in case for any reason the font isn't being imported into the site correctly. Raleway is an elegant font, frequently used for high-end websites and so was chosen to reflect the quality of the trips sold.
-   #### Imagery
    -   Each page will have a large hero image of spectacular landscapes of the destinations being sold, to act as a selling tool to the user. Images will also be used as backgrounds in certain sections, and there will additionally be a photo gallery for each tour page to further inspire the user to want to travel. Also, all photos were put through [Tiny PNG](https://tinypng.com/) to reduce the file size and improve loading time.
-   #### Icons
    -   Social media icons and on the tour page have been used from [Font Awesome](https://fontawesome.com/)

# Accessibility

## Alt Tags

In order to ensure that all images are accessible for those using a screen reader, I have ensured that all images used throughout the site include alt tags.

## Forms

The forms on the site used in the modals of "Contact Us" and "Enquire Now" have aria-labels so that screen readers can read out what is the required input in the necessary fields.

# Technologies used

## Languages Used

-   HTML5
-   CSS3

## Frameworks, Libraries & Programs Used

1. [Bootstrap 4.5.2:](https://getbootstrap.com/docs/4.4/getting-started/introduction/)
    - Bootstrap was used to assist with the responsiveness and styling of the website, such as the navbar, carousels and cards features.
1. [Google Fonts:](https://fonts.google.com/)
    - Google fonts were used to import the 'Raleway' font which is used on all pages throughout the project.
1. [Font Awesome:](https://fontawesome.com/)
    - Font Awesome was used on all pages throughout the website to add icons for aesthetic and UX purposes. 
1. [Git](https://git-scm.com/)
    - Git was used for version control by utilising the Gitpod terminal to commit to Git and Push to GitHub.
1. [GitHub:](https://github.com/)
    - GitHub is used to store the projects code after being pushed from Git.
1. [Balsamiq:](https://balsamiq.com/)
    - Balsamiq was used to create the wireframes during the design process.

# Testing

## Validation

The W3C Markup Validator and W3C CSS Validator Services were used to validate every page of the project to ensure there were no syntax errors in the project.

-   [W3C Markup Validator](https://validator.w3.org/) - [Results](https://validator.w3.org/nu/?doc=https%3A%2F%2Fadamdelancey.github.io%2Fms1-travelsweden%2F)
    <p> <img src="documentation/screenshots/html-validate.jpg">  </p> 
-   [W3C CSS Validator](https://jigsaw.w3.org/css-validator/) - [Results](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fadamdelancey.github.io%2Fms1-travelsweden%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en) -  there are 2 property issues found when checking the site. However, these are being validated from the Bootstrap CDN link and therefore out of my control.
    <p> <img src="documentation/screenshots/css-validate.jpg">  </p> 
## Lighthouse

<p ><img src="documentation/screenshots/lighthouse-scores.jpg">

From Chrome Developer Tools, this Lighthouse score is based on the homepage while being viewed on desktop. I worked hard on ensuring high scores across the site in particular by putting every image through [Tiny PNG](https://tinypng.com/), and improving SEO scores by adding a meta description to each page.

## Testing User Stories from User Experience (UX) Section

-   #### First Time Visitor Goals

    1. As a First Time Visitor, I want to easily understand the services offered by the company and have a positive experience when exploring the website.
        - *Upon entering the website, users are welcomed with a clean and eye-catching design with an easy to use navbar highlighting the main sections of the website. There is a call to action for instant connection and the navbar is constant across the site.*
    2. As a First Time Visitor, I want to be able to easily navigate throughout the site to find any tour that may interest me, and find sufficient information on that tour.
        - *Each tour can be selected in the navbar, on the homepage, and I also added links to the other tours from each tour page, to encourage further clicking through the site. Each tour has consistent information, icons and sections to make it easy to understand for the user.*
        <p><img src="documentation/screenshots/nav-tours.jpg"></p>
        <p><img src="documentation/screenshots/other-tours.jpg"></p>
    3. As a First Time Visitor, I want to be able to learn more about the company's goals and values, and easily find the details that I am looking for.
        - *There is a small section on the company's goals on the homepage, and the About section, which is accessible via the navbar, clearly highlights the goals and values in more detail. There is also a link from the homepage under the brief summary section to the About section for ease of access.* 
    4. As a First Time Visitor, I want to enjoy high-quality, interesting images of the locations that I am interested in.
        - *In addition to the hero image, each page has a series of background images and carousel images that show off the destinations.*
    5. As a First Time Visitor, I want to be able to submit an enquiry related to the tour that I am interested in.
        - *Each tour page has both a contact and enquiry button, and on each tour enquiry button the tour is pre selected for the user.*
        <p><img src="documentation/screenshots/enquiry-form.jpg"></p>

-   #### Frequent User Goals
    1. As a Frequent User, I want to check to see if any new tours have been added to the website.
        - *Tours are easy to find in the navbar, homepage, and suggested other tours, so will be easy to find for the user if any new tours were added.*
    2. As a Frequent User, I want to check to see if any new features have been added.
        - *Similarly, as the website is easy to navigate any new features would be easily accessible to the user.*

## Fixed Bugs
After deployment, I found multiple bugs that needed addressing:

| Bug         | Fix         |
| ----------- | ----------- |
| White margin down right hand side of page on mobile.   | Added overflow-x: hidden; to the html and body in CSS.  |
| Enquiry and contact modals not working on all pages.   | Amended the Bootstrap data-target. |
| Text overlapping on About Page history section.    | Amended the padding for mobile devices only. |
| H1 headings on hero images not central on all devices. | Amended padding for best fit using media queries. |
| Text on itinerary section not easily readable over background image.   | Added a white background color with opacity value of 0.8.  |
| 'Contact Us' button and 'Enquire Now' button not leading to different forms. | Edited the id and target of the modals to lead to different forms. |
| Tour list partly off page in the dropdown menu on smaller mobile devices.  | Amended the surrounding padding and margin to 0 in order to fit on the smallest device on Dev Tools. |
| Cards copied from Bootstrap not centered. | Discovered that this was due to the 'row' class so edited margin to 0. |
| Pictures were slowing down loading time of each page. | Edited the pixels via TinyPMG and reloaded the Pictures.|



## Known Outstanding Bugs

| Bug         | Fix         |
| ----------- | ----------- |
| Carbon Footprint iframe too large for mobile devices. | Edited as much as possible to make it fit, but still unsure on best way to edit this.  |
| Submitting enquiry on modal forms does not actually submit enquiry.  | Fix with JS, but currently outside the scope of this project. |
| Links on Carbon Footprint iframe not opening in other tab. | Not sure how to fix the iframe on this one! |

 
## Further Testing

- The website has been tested on various desktop browsers such as Google Chrome, Firefox and Safari.
- It has also been viewed on many mobile devices such as Samsung S10, iPhone7, iPhone8 and Huawei 20 Pro.
- Each link has been tested across the site to ensure everything was linked correctly.
- Friends and family members were also asked for advice, in addition to the Code Institute Peer Review Slack group.

# Deployment

The site was published in GitPages using the folling steps:
1. First, all code was written on the IDE Gitpod and was then pushed to GitHub using the 'git push' entry in the terminal, where it is now stored in [my repository](https://github.com/adamdelancey/ms1-travelsweden).
2. To push the site live, under the Settings section of the repository I selected, I scrolled down to where it says 'GitHub Pages'.
3. I then selected 'Master Branch' under Source and then the page automatically refreshed.
4. This created the URL which can be viewed [here](https://adamdelancey.github.io/ms1-travelsweden/index.html).

To access the code, it can be run locally through a download or cloned.

Initially, I used "git commit" and "git push" for every major change, then at later stages used these functions when de-bugging or making minor editing changes to ensure the live version was the most recent version, as well as to avoid losing any work.

# Credits

- All images have been sourced from a combination of [Pexels](https://www.pexels.com/) and [Pixabay](https://pixabay.com/), except the background photo of the Gothenburg page hero section, which is my own photo.
- The Navbar, Forms, Carousels, Cards and Weather charts on the Tour Pages have been chosen from Bootstrap templates and adapted using CSS.
- The Timeline on the About Page and  has been taken from the Whiskey Drop CI project and amended using CSS for this project.
- [Stack Overflow](https://stackoverflow.com/) was used for occasional debugging or issues where I could not initially work out the solution myself.
- The maps on the Tour pages is from [Google Maps](https://www.google.com/maps) and then using the embed function.
- The carbon calculator on the About page is from [Carbon Footprint](https://www.carbonfootprint.com/integrate.html) and then I used their integrate features.
- Fonts are from [Google Fonts](https://fonts.google.com/) and icons from [Font Awesome](https://fontawesome.com/).


# Acknowledgements

- My mentor, Aaron Sinnott, for his help throughout the project.
- The peer-code-review and user-centric-frontend channels on Slack and their trusty channel leads for both code and design tips.
- Friends and family for testing the site on their various devices.
- My girlfriend, for supplying endless tea when I got frustrated!