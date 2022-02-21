# Lee's website

## Vision
A nice site for Lee to display his work.

## Website To Do Part Three
- small tweaks
    * only two columns at a certain width
    * hover
        * parantheses around credit 
        * credit smaller than title (title one bigger)
        * everywhere should be a link
        * adjust font based on screen width
- background
    * change
        - Lee's thoughts: "gradient, some texture, not linear, color less saturated"
    * no box in contact and about
- accessibility / loading
    * alttext
    - no images still means page holds shape
    - default font if google fonts can't be fetched
- color - go through some pallettes and offer to Lee
- try it out / optional
    - buttons for about and contact
    - accessibility considerations
- fun / out there
    - copy button next to email address
    - animated buttons when you hover over about & contact

- later (productionalization)
    - test on different browsers
    x speed test between serving images myself (and they can be smaller) vs fetching from bandcamp
    - what are the security risks
    - check for font contrast: coolers contrast checker

    * a little smaller picture
    * different icon?
    * hover on mobile
    * more readability on mobile (esp Contact & About)
    * 2 across on mobile
    - get about & contact to be on the same line as Lee Meadvin


    / mobile ideas
        - leave greyed originally and then can click
        - just the title is a link (and formatted like a link)
        - first click brings it up, second click is link

## Website To Do Part Two
- background
    - color less saturated
    - gradient / some texture / not linear
* title vs. credit
    * more differentiation
    * title should be bigger
    * maybe shadow ? 
    * try title on darkened album
- about / contact buttons
    * order switch
    * font one size smaller
    - buttons?
- about / contact pages
    - whole page is a box
    - maybe background isn’t white / no box
- fonts
    * try out some of Lee's options
    * possibly two
* favicon
* add picture
* footer (copyright?)
- copy button next to email address
* fix justification
- different color when you highlight above it [I don't know what I meant by this]

- mobile formatting
- don't jump the formatting after loading; have enough space somehow loaded already
- load from javascript
* add icon ref: https://icons8.com/icons/set/guitar

hover info:
    * what about mobile?
    * how to get it cover exactly? (this is an inexact tweak)
    - adjust font based on screen width
    - accessibility considerations
    - parantheses around credit 
    - credit smaller than title (title one bigger)
    - everywhere should be a link


## Website To Do Part One
Content
* add titles
* add About page
* fix that some of the credits are wrong
* the rest of the albums
* contact page

formatting
* randomize color
- contact page formatting
- spin a square, title on the back (but what about mobile)
- make albums stay at the same place
- set up picking a font for Lee
* css file
* make width a % (and bigger)
* open link in separate window
* albums are links
* credit on bottom
* basic contact page styling
* add an icon of Koda
- update to sass

basic SEO
- heading
- description
- alt text

dynamic
- make it choose a color and a less saturated version of that color randomly every time you refresh
- make it automatically populate from javascript (put all info into a json blob and load into the page)
* mobile: descriptions only show up when a certain width

hosting / dev ops
- attach to custom domain
- launch
- what does the site look like if images fail to load?

