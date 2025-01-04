## One of the biggest learnings I've taken from robust software architecture. 

I've had a few chats of late around software architecture, and decided to follow said chats up with this write-up after I realized something, I find, rather quite striking.

Initially the discussion was kicked-off by delivery schedules - how often one should ship features, business expectations around that etc. It was an absract dicussion around a collection of points that I think have irked some developer, somewhere, at some point in their lives. Throw in non-technical product/project managers and owners and you get the drift. 

So dear reader, if you will, assume for simplicity's sake (and for the sake of generalization), a greenfield project, core to business competence.

> Why core to business competence, mister mista?

I hear you ask dear reader? Well, as a recent interaction would have it, *core to business competence*, because that's proabably one of the only times everyone tends to agree that it's acceptable to develop custom software. That is, *in favor of the business's core differentiators*. I really liked that and thought I'd make a note of it for future me (shoutout to Atomic). 

So here's the traditional view of software architecture:

**Ideal flow:**
Start → Waypoint A → B → C → D → Deploy

**Reality:**
Start → Waypoint A → B → back to A → B → C → B → Deploy

Here, waypoints can mean whatever you want them to. Tests, milestones, tickets, meetings, swapping out an off-the-shelf solution for a custom built one, sprints - you name it. The point here is that this is often how most people view the process of developing and shipping software for a greenfield project. You'll hear this often thrown around with phrases like "requriements" and "use-cases" and "drill down on consumer needs". 

I'm not arguing any of this is wrong or necessarily incorrect. Yet, even if the "ideal flow" happens on a particular project, what I've recently come to realize is that that's not *then* software architecture. It's following a map. It's checkpoints along a semi-known route towards a destination. There was nothing to "architect". You copypasta'd. 

This is also around the time I start to realize, that although we were talking about greenfield projects, that same flow - whether ideal or the reality - existed right through to post deployment bug fixes and feature back-logs.

I've recently started (read: `win32` forced me) to appreciate a robust architecture as one that embraces a few, key traits, chief amoungst them exploration. It looks roughly similar to above, but the mentality and thought that goes into in takes on an entirely different dimension on it's own. It is, to me, *proper* software architecture:

Start → Staging → Reiterate → Waypoint A → ... → Deploy

I think the biggest standout in the process outlined here, is the understanding of the problem domain, coupled with: rapid feedback, and *then* taking a second pass at the code, *before* setting the first waypoint.
I've found this aligns ssssooooo much better with real-world outcomes as well as to the end goal. The development process informs of the end goal, the end goal doesn't dictate the development process.

I mean, how could it? In any greenfield project in any industry-vertical, you're building something *you* haven't before, or solving problems that likely haven't been solved within the *specific* context you're trying to solve them in. So how could anyone know what the end goal *really* looks like? You hardly have a clue as to what the hell the first waypoint should even be!

This idea maps so perfectly well onto existing projects, as well as those that are yet to be built, that one of the biggest struggles I've had is not seeing it this way in many of the past projects I was a part of. It's even shaped the way I provide estimate to clients for features, bug fixes and general project delivery.

And again, unfortunately, the former is endemic in software development practises and projects, everywhere. How often do you need to come in and swap out that frontend library because of requirements changes? How often has that one framework needed to be reverse migrated off of because it just wasn't doing this, or was doing too much of that? How many times have you seen backend tech that doesn't do any request batching whatsoever - thereby, rendering rendering any performance enhancements across the stack to absolutely null, nothing, zero, nil - just because the backend isn't setup for batching? How many times has that one fullstack solution turned out to bite the team in the ass because now the company is shelling out 1000's per year for something that was in fact, a core business requirement, and that they, in fact, should have rather spend the time custom developing?

Once I started thinking about software design principles in the later manner, a lot of it started to get simpler, more performant, more robust, easier to add features to and *seems* to have kept techincal debt a little lower, or kept it somewhat more manageable than it would have been. Past decisions now make sense. You already made a first pass at the server-side. You already set batches up because you knew, should you ever need to reach for multi-threading, that that would be a simpler way to process heavy request cycles. This is what I mean by robust software architecture. 

Well. Not much else to say. So on that bombshell, I shall now leave you with a "xeet".

> christina 死神
> i don't really know how to articulate this but gamedev programmers are on an entire other level to non-games programmers
> repeatedly needing to solve problems that have never existed before, because the world you're creating them in has never existed changes you as a person