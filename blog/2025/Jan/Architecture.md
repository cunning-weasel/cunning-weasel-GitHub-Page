## One of the biggest learnings I've taken from robust software architecture. 

Software architecture discussions often circle around processes, milestones, delivering features on time, and the friction that arises when non-technical stakeholders are involved. But a recent realization reshaped my perspective: good architecture isn't about following a predetermined map; it's about exploring the unknown with intent and adaptability. Let’s simplify things by assuming a greenfield project, one that’s core to business competence.

So here's how software architecture is typically viewed:

**Ideal flow:**
Start → Waypoint A → B → C → D → Deploy

**Reality:**
Start → Waypoint A → B → back to A → B → C → B → Deploy

Here, waypoints can mean whatever you want them to. Tests, milestones, tickets, meetings, swapping out an off-the-shelf solution for a custom built one, sprints - you name it. While the messy reality is often accepted as unavoidable, it's worth questioning if this process genuinely constitues architecture. It's following a map. It's checkpoints along a known route towards a known destination. There was nothing to "architect". You copypasta'd so there wasn't any room for genuine problem-solving.

I've recently started (read: `win32` forced me) to appreciate architecture is rooted in exploration, where value is placed on iteration and understanding the problem domain *before* locking in the steps, milestones - whatever. It looks something like:

Start → Staging → Reiterate → Waypoint A → ... → Deploy

In this approach, the problem domain comes first,followed by rapid feedback and *then* taking deliberate second passes at the code, *before* setting the first waypoint.
I've found this aligns ssssooooo much better with real-world outcomes as well as to the end goal. Instead of following a map, you're creating you own path. The development process shapes the end goal, not the other way around.

In greenfield projects, you’re solving problems within a unique context—challenges that no one has faced exactly as you’re facing them. Without exploration, how could you confidently determine the first step, let alone the end goal?

So this idea maps perfectly well onto existing projects, as one might infer. And we know this to be true, because in *most* existing projects, the "reality" is what *actually* happens - even though *we knew* the waypoints and destinations *beforehand*. I think, that that's what *bad* architecture looks like, and it's starting to shape the way I move on this coding grind.

Sadly, the former is endemic in software development practises and projects, everywhere you look. How often do you need to come in and swap out that frontend library because of requirements changes? How often has that one framework needed to be reverse migrated off of because it just wasn't doing this, or was doing too much of that? What horrors have you heard of botched databases? What about backend tech that doesn't do any request batching whatsoever - thereby, rendering any performance enhancements across the stack absolutely null and void? How many times has that one off-the-shelf solution turned out to bite the team in the ass, because now the company is shelling out 1000's per year for something that was in fact, a core business requirement and differentiator, and that they should have just spent the initial time and budget to custom develop?

Well architected software:

- Simple: Systems become easier to extend and maintain.

- Performant: Potential bottlenecks are identified early.

- Robust: The entire system doesn't get worse when you add features. 

- Less-debt: Technical debt is managed because decisions align with the realities of the domain.

You know the server will be easy to optimize later on, because you *knew* that the best way to process requests was in batches, and so structuredred the API with that in mind. It adds an adaptability, because you *saw it* the first time around, so you designed your data models and db schema around batching. On your second go-round, you *knew* what bit of the backend might *actually* be slow or fast *to begin with*.

Phew. That was a mouthfull. Well. Not much else to say, so I shall now leave you with a "xeet":

> Repeatedly needing to solve problems that have never existed before, because the world you’re creating them in has never existed, changes you as a person.

And on that bombshell, goodnight folks! :)