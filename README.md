# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

![](./desktop-design.png)
![](./desktop-thank-you-state.png)
![](./mobile-design.png)
![](./mobile-thank-you-state.png)
![](./active-state.png)



### Links

- Solution URL: [github](https://github.com/Scorti-Paul/interavtive-rating-app)
- Live Site URL: [netlify](https://interavtive-rating-app.netlify.com)

## My process

### Built with

- [React](https://reactjs.org/) - JS library
- [JSX](https://reactjs.org/docs/introducing-jsx.html)
- [Tailwind](https://tailwindcss.com/) - For styles
- CSS flex
- Mobile-first workflow


### What I learned

My major challend was how to tranfer the data clicked from one component (Rating Compoenet) to another (ThankYou Component). To achieve that, I implemented js localStorage.

I also learn how to use useNavigation in react-router-dom and this help preview the next page when the button is clicked on


To see how you can add code snippets, see below:

```jsx
<button onClick={() => navigate('thank-you')} rate={rate} className='bg-[var(--orange)] text-white w-full rounded-3xl py-3 hover:bg-white hover:text-[#FC7613] font-bold'>SUBMIT</button>
```

```js
  useEffect(() => {
    window.localStorage.setItem('My_Rating', rate)
  }, [rate]);


  useEffect(() => {
    const myRate = window.localStorage.getItem('My_Rating')
    setRate(myRate)
  }, [])
```


### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

**Note: Delete this note and the content within this section and replace with your own plans for continued development.**

### Useful resources

- [Navigating Programmatically](https://www.youtube.com/watch?v=uKRo1Re_B8c&list=PPSV) 
- [Save State To LocalStorage](https://www.youtube.com/watch?v=rWfhwW9forg&t=612s) 


## Author

- Paul Ahorsu
- Email - [scortip@gmail.com](https://scortip@gmail.com)
- Frontend Mentor - [@Scorti-Paul](https://www.frontendmentor.io/profile/Scorti-Paul)
- TikTok - [@paisats]
