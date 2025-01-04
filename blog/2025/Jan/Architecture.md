## One of the biggest learnings I've taken from robust software architecture. 

I've had a few chats of late around software architecture, and decided to follow said chats up with this write-up after I realized something, I find, rather quite striking.

Initially the discussion was kicked-off by delivery schedules - how often one should ship features, business expectations around that etc. It was an absract dicussion around a collection of points that I think have irked some developer, somewhere, at some point in their lives.

So dear reader, if you will, assume for simplicity's sake (as well as the sake of being able to generalize at least a *little bit*), a greenfield project, core to business competence.

> Why core to business competence, mister weasel?

I hear you ask dear reader? Well, as a recent interaction would have it, *core to business competence*, reader, because that's proabably one of the only times everyone tends to agree that it's acceptable to develop custom software. That is, *in favor of the business's core differentiators*. I really liked that and thought I'd make a note of it for future me. Shoutout Atomic! 

So here's the traditional view of software architecture:

**Ideal flow:**
Start → Waypoint A → B → C → D → Deploy

**Reality:**
Start → Waypoint A → B → back to A → B → C → B → Deploy

Note, here, waypoints can mean whatever you want them to. Tests, milestones, tickets, meetings, swapping out an off-the-shelf solution for a custom built one, sprints - you name it. The point here is that this is often how most people view the process of shipping software for a greenfield project. 

Yet, even if the "ideal flow" happens, that's not *then* software architecture - it's following a map. It's checkpoints towards a destination. There was nothing to "architect". You copypasta'd busta. 

Now this is around the point I start to realize, that although we were talking about greenfield projects, that same flow existed right through to post deployment bug fixes and features. I've started (read: `win32` forced me) to appreciate a robust architecture as one that embraces a few, key traits, chief amoungst them exploration. It looks roughly like this:

Start → Staging → Reiterate → Waypoint A → ... → Deploy

Understanding the problem domain, rapid feedback, and taking a second pass at the code*before* setting the first waypoint. I've found this aligns ssssooooo much better with real-world outcomes and to the end goal - as the development process informs of the end goal, the end goal doesn't dictate the development process.

I mean, how could it? In a greenfield project, you're building something you haven't before, or solving problems that likely haven't been solved within the context you're trying to solve them in. You don't know what the end goal actually looks like. You have no idea what the hell the first waypoint should even be!

That's the reality of software development, particularly web, that's endemic with the "reality" process outlined above. Once I started thinking about software design principles in the later manner, a lot of it started to get simpler, more performant, more robust, easier to add features to and *seems* to have kept techincal debt a little lower than it would have been.

Well. Not much else to say. So on that bombshell, I shall now leave you with a xeet I rather liked and has no bearing on the above whatsoever I promise:

> christina 死神
> i don't really know how to articulate this but gamedev programmers are on an entire other level to non-games programmers
> repeatedly needing to solve problems that have never existed before, because the world you're creating them in has never existed changes you as a person