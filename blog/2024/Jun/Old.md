## Web going back to being SSR'd is so totally back, and I'm all for it

Maybe I'm old and cranky. And you already know how I feel about crappy, modern day software. 

But as I've been working on migrating a WordPress website to astro.js, I've really come to appreciate not only server-side rendered web apps again, but the growing trend there is to buck sending a ton of javascript over the wire. 

Maybe it's just my tendency for backend, but whenever I need to write a quick app and test out an idea or thought I have - I always turn to something quick and dirty like a c# asp.net and sqlite backend humming along and serving whatever quick whim I've decided to experiment with for the day (read week, sometimes months). 
I throw up a public folder and throw in my html, usually pull in my bootstrap because I hate frontend, and then see what functionality I need on the frontend with js. 

It's really my go to - as I can implement auth, payment processing and any client logic or functionality I need with js on the main thread, or on a service worker, or I can spawn multiple web workers (as will be the case with my game coming out soon - stay tuned) and I'm good to go. Super vanilla, super simple. I keep state in the database/ backend, and any really rich interaction I need on the frontend will begrudingly get me to move to some react vite library.

What made me pick astro over other options to migrate my client's site was twofold. 

1. I love the astro frontend 'architecture' if you will. Their idea with islands, and only sending javascript assets over the wire when true interactivity or dynamic content is needed just clicks with me so hard you have no idea.

2. The added advantage of being able to bring in astro's node.js adapter to essentially get any backend functionality one would need into their project, again, just feels like their playing with my emotions (but in a good way). They also have a astro db of sorts. Seems to be sql-based (thank the good Lord). 
This type of thing, too, my dear reader, seriously fancies my tickle. 

Astro's approach is more or less the same approach I found myself taking - except from the different 'end'. Where I often require a lot more business logic, and added data layers to shuttle said logic through, with minimal need and requirement and use for frontend sparkles and a need for more robust data handling and processing - astro returns that favor in kind. 

Sites in astro are static by default, with no javscript being shipped to, or executing on the client unless explicitly set.
And when set, the developer isn't limited. They can use any frontend library or framework they like, and can even combine them.
After all, all the frontend libs and frameworks all essentially serve to do the same thing, right? 

Render html, css and js on the client. 

I mean, sure, there's client-side state and stuff. It gets muddy quick, but the point is that the very reason I'm leaving WordPress (read, spriting, crying and jumping for joy) is again, explained by what astro do so well:

1. Plugins are like the devil. I have no idea what executes on the client, and what doesn't. I have no insight into what the code looks like, and I often have to learn 'plugins'. Yes yes, you may be thinking:
2. The WordPress stack. Is. A. Pain. 
I'm sorry, and yes, I get it for those who cut their teeth on php and the WP stack how out of touch I am. I'm only slightly - I think laravel's cool (though lara doesn't do anything asp.net doesn't do faster (as in software performace-wise), or better (dx-wise though I'm no pro), but I digress). 

For me, having to learn >10 different plugins and their behaviour just isn't worth it. Not when it's a headache to find plugin source code. Not when digging into a site that has grown to gargantuan size because Joe and Jane wanted that shiny feature. 

I got blog migrated and translated to .md up and running on astro in the same time it took me to get the lamp stack to not-work on my wsl machine to simply *see* what the hell the code was doing in the first place. 

In my preliminary findings, I seeing a reduction in total website size by two orders of magnitude (!). This isn't with compressed assets, no explicit caching, nor any use of a dam or server-instance for images. 

We're just serving the user html and css here folks, and adding javascript only for what makes to to the user-experience, while having the full power of the complete client and server sides available to us. 