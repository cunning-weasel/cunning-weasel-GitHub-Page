## Web going back to being SSR'd is so totally back, and I'm all for it

Maybe I'm old and cranky. And you already know how I feel about crappy, modern day software. 

But as I've been working on migrating a WordPress website to astro.js, I've really come to appreciate not only server-side rendered web apps again, but the growing trend there is to buck sending a ton of javascript over the wire. 

Maybe it's just my tendency for backend, but whenever I need to write a quick app and test out an idea or thought I have - I always turn to something quick and dirty like a c# asp.net and sqlite backend humming along and serving whatever quick whim I've decided to experiment with for the day (read week, sometimes months). 
I throw up a public folder and throw in my html, usually pull in my bootstrap because I hate css, and then see what functionality I need on the frontend with js. 

It's really my go to - as I can implement auth, payment processing and any client logic or functionality I need with js on the main thread, or on a service worker, or I can spawn multiple web workers (as will be the case with my game coming out soon - stay tuned) and I'm good to go. Super vanilla, super simple. I keep state in the database/ backend, and any really rich interaction I need on the frontend I can just write.

It's as complicated or simple as you want it to be. 

What made me pick astro over other options to migrate my client's site was twofold. 

First, I'm gonna quickly address the elephant in the room. I do love the fact that they popularized the term 'frontend islands' or (whatever bullshit it's called) - yet that's the architectural pattern that's been used since the 90's - when clients weren't even powerful enough to process their own js and shit. Like, yes. You can concat string on the backend and send them to the frontend. Big wowzer. 
If that doesn't sum up the state of current web dev, i don't know what does. Sigh. I digress.

1. I love the astro frontend 'architecture' if you will. Their idea with islands, and only sending javascript assets over the wire when true interactivity or dynamic content is needed just clicks with me so hard you have no idea.

2. The added advantage of being able to bring in astro's node.js adapter to essentially get any backend functionality one would need into their project, again, just feels like they're playing with my emotions (but in a good way). They also have a astro db of sorts. Seems to be sql-based (thank fuck). 
This type of thing, too, my dear reader, seriously fancies my tickle. 

Sites in astro are static by default, with no javscript being shipped to, or executing on the client unless explicitly set.
And when set, the developer isn't limited. They can use any frontend library or framework they like, and can even combine them.
After all, all the frontend libs and frameworks all essentially serve to do the same thing, right? 

They render html, css and js on the client. 

I mean, sure, there's client-side state and stuff. It gets muddy quick, but the point is that the very reason I'm leaving WordPress (read, spriting, crying and jumping for joy) is again, explained by what astro doesn't do, as much as what it does.

In an increasing world of intellectual maturabation, I at least applaud the fact that instead of creating more problems and solving those - then feeling smug about it - astro at least seems to want to address the overarching issue with flexibility.
I can definately get behind that. Even if it still is intellectual masturbation. 