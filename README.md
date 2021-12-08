# My Stranger Things Page
This website is dedicated to the Netflix original series Stranger Things.  The site has several pages showing characters, merchandise and trailers to the seasons. There are other things I'm testing so the code may still be visible but I've commented it out since it's not yet being used.

## Additional Information
- Wayfinding feature used to show which page is currently being viewed/active.
- Hamburger button built for navigation on small screens, it's hidden on larger screens.
- Demogorgon image in upper right corner will take you back to the home page if you click on it.
- Added login button to all pages.
- My site is also published live https://angelacombs.github.io/StrangerThings/index.html  

# Home Page 
- Home page image will change to a different image when it's viewed on mobile screens.

## Character Page
- Hover used for zoom in/out on image for each character.
- Character page using Flexbox to display images and they adjust as screen gets smaller.
- The hover feature doesn't work well when in mobile mode you have to hold down on picture to get it to zoom out.

### Merchandise Page
- Merch table will hide details column and data on mobile screens.
- Merch page using "nth-of-type" to change row colors in table.

#### Login Form
- Added login form (login.html) with code validation for length of password and email info.
- Error messages will be displayed and show message when info isn't valid.
- If you leave fields blank you'll receive an error message stating fields are mandatory.
- I also added a cancel button to the form which takes users back to home page.

- SIGN-UP form has validation for email address (emails must have .com) and length of password (must be >8 characters).
    - Once you signup successfully, you'll be redirected to the login page.
    - Enter valid login credentials and it redirects to main page.
    
- LOGIN form has validation code for length of password only, no validation for username.
    - Once you login successfully, you'll be redirected to the home page.

