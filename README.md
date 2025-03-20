Synth Picker
============
![UI Snapshot](picker.png?raw=true "Title")

This repo contains the "synth picker" I use to randomly select a synthesizer to use.

This is not really something I want to make into a long-term project with a community, this is just sharing something I think others could find useful.

## Building
This is a basic TypeScript project, with no dependencies. To build, just run `tsc`. Open the HTML file locally in a browser or push it to any server along with the generated .js file.

TypeScript's nice for checking synth definitions for typos, but I suppose you could also just edit `picker.js` directly in notepad if you don't want to deal with build tools.

## Usage
At the top of the page is a list of styles (Software, Hardware, etc). Unchecking a style will filter out synths that don't match the criteria, and exclude them from the random selection.

Below that is a list of roles (Lead, Bass, Pads, Drums), a drop-down of synths filling that role, a checkbox to lock that synth in, and a button to randomly select a synth for that role. On the far right is a "+" or "-" button to increase or decrease the number of parts for that role.

At the very bottom of the page is a button to randomly select a synth for each role, respecting the filters and locked synths.

I've found this tool to be very useful for choice-paralysis. Just pick "Randomize All", lock in the ones you like, and then re-randomize the remaining. Or just take what it gives you as a challenge.

## Maintenance/Personalization

The code and data both live in `picker.ts` (or `picker.js` if you're throwing caution to the wind). 

The synthList variable contains the synth definitions. A synth has a name, a style, a list of roles it can fill, and the number of midi channels it supports.

The number of midi channels is used to ensure a synth isn't randomly selected more times than it can be used. A two-part multitimbral synth can be selected for lead and bass, but won't be picked a third time for pads/drums.

Feel free to make your own local copy with your own synths. I've included a bunch of my own. 

Since I use MPCs heavily, it made sense to make an MPC style so I could easily include/exclude all of the MPC plugins. You may want to delete this style if you don't use them. Same with grooveboxes, if you don't want to try a groovebox-only song, you may want to fold yours into the Hardware style. Make sure to adjust the `.style-picker`'s `grid-template-columns` in the style part of `picker.html` if you add/remove styles, each style has one "min-content 1fr" for the checkbox and name. If this isn't kept in sync with your styles, it will wrap strangely. 
