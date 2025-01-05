## One of the biggest learnings I've taken from robust software architecture. 

Software architecture discussions often circle around processes, milestones, delivering features on time, and the friction that arises when non-technical stakeholders are involved. But a recent realization reshaped my perspective: good architecture isn't about following a predetermined map; it's about exploring the unknown with intent and adaptability.

So to balance out the noise a little, I thought I'd look at his a bit differently, and invite you, reader-extrodinaire, to peel back the layers with me. So for arguement's sake, let’s simplify things by assuming a greenfield project - one that’s core to business competence.

Here's how software architecture is typically viewed:

**Ideal:**
Start → Waypoint A → B → C → D → Deploy

**Reality:**
Start → Waypoint A → B → back to A → B → C → B → Deploy

Here, waypoints can mean whatever you want them to. Tests, milestones, tickets, meetings, swapping out an off-the-shelf solution for a custom built one, sprints - you name it. Point here is the messy "reality" is often, well, the *reality* of how the project progresses, and is laregly accepted as unavoidable. But it's worth questioning if this process genuinely constitues "software architecture" to begin wiht. I mean if we're being real here, it's just following a map. You're hitting checkpoints along a known route towards a known destination. So, really, there was nothing to *"architect"*. You copypasta'd, and there wasn't any room for ingenuity and problem-solving.

I've recently started (read: `win32` forced me) to appreciate that architecture is rooted in exploration, where value is placed on iteration and understanding the problem domain *before* locking in the steps, milestones - whatever.

This approach looks something like:

Start → Staging → Reiterate → Waypoint A → ... → Deploy

In this approach, the problem domain comes first, followed by rapid testing/ feedback and *then* taking deliberate second passes at the code, *before* setting the first waypoint.
I've found this simple tweak in thinking aligns ssssooooo much better with real-world outcomes, as well as to the end goal. Instead of following a map, you're creating your own path. The development process shapes the end goal, not the other way around.

Typically in greenfield projects, you’re solving problems within a unique context — challenges that no one has faced exactly as you’re facing them. Without exploring the problem domain a bit, how could you confidently determine the first step, let alone the end goal?

And this idea maps perfectly well to existing projects. We know this to be true, because in *most* existing projects, the "reality" is what *actually* happens - even though *we knew* the waypoints and destinations *beforehand*. I think, that that's what *bad* architecture looks like, and I think, most developers know that to be true, deep down in their gut.

I mean, how often do you need to come in and wrestle that frontend library because of requirements changes? How often has that one tool needed to be reverse migrated off of because it just wasn't doing this, or was doing too much of that? What horrors have you heard of choosing databases not fit for purpose? What about backend tech that doesn't do any request batching whatsoever - thereby, rendering any performance enhancements *across the stack* absolutely null and void? How many times has that one off-the-shelf solution turned out to bite the team in the ass, because now the company is shelling out for something that was in fact, a core business requirement and differentiator, and that they should have just spent the initial time and budget to custom develop?

Well architected software is:

- Simple: Systems become easier to extend and maintain.

- Performant: Potential bottlenecks are identified early.

- Robust: The entire system doesn't get worse when you add features. 

- Less-debt: Technical debt is managed because decisions align with the *realities of the domain*.

You know the server will be easy to optimize later on, because you *knew* that the best way to process requests was in batches - as that's where the bottleneck *actually was* - and so structuredred the API and db schema with that in mind. It adds an adaptability, because you *saw it* the first time around, so you designed your DAL around that res/req-batching pattern. On your second go-round, you *knew* what bit of the backend might *actually* be slow or fast because you saw your service *actually being consumed*.

Phew. That was a mouthfull. Well. Not much else to say, so I shall now leave you with a "xeet" I lol'd at some time back:

> Repeatedly needing to solve problems that have never existed before, because the world you’re creating them in has never existed, changes you as a person.

And on that bombshell, goodnight folks! :)