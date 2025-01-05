## One of the biggest learnings I've taken from robust software architecture. 

"Software architecture" discussions often circle around processes, milestones, delivering features on time, and the friction that arises when non-technical stakeholders are involved. But a recent realization reshaped my perspective: good architecture isn't about following a predetermined map; it's about exploring the unknown with intent and adaptability.

So to balance out the noise a little, I thought I'd look at this a bit differently, and invite you, reader-extrodinaire, to peel back the layers with me. For arguement's sake, let’s simplify things by assuming a greenfield project - one that’s core to business competence.

Here's how the development process is typically viewed:

**Ideal:**
Start → Waypoint A → B → C → D → Deploy

**Reality:**
Start → Waypoint A → B → back to A → B → C → B → Deploy

Waypoints can mean whatever you want them to. Test-suites, milestones, tickets, meetings, swapping out an off-the-shelf solution for a custom built one, sprints - you name it. Point here is the messy "reality" is often, well, the *reality* of how the project progresses, and is laregly accepted as unavoidable.
But it's worth questioning if this process genuinely constitues "software architecture" to begin with. I mean if we're being real here, the above processes are just following a map. You're hitting checkpoints along a known route towards a known destination. So, really, there was nothing to *"architect"*.

I've recently started (read: `win32` forced me) to appreciate that "architect-ing" is rooted in exploration, where value is placed on iteration and understanding the problem domain *before* locking in the steps, milestones or waypoints.

This approach looks something like:

Start → Staging → Reiterate → Waypoint A → ... → Deploy

In this approach, domain comes first, followed by rapid testing/ feedback and *then* taking deliberate second passes at the code, *before* setting the deciding on what the firts waypoint is, let alone whether it can be added to the "DONE" column. I've found this simple tweak in thinking and approach aligns ssssooooo much better with real-world outcomes, as well as to the end goal. Instead of following a map, you're creating your own path. The development process shapes the end goal, not the other way around.

Typically in greenfield projects, you’re solving problems within a unique context — challenges that no one has faced exactly as you’re facing them. Without exploring the problem domain a bit, how could you confidently determine the first step, let alone the end goal?

One only needs to have the imagination of a toaster to see how this idea directly *explains* existing project processes. We know this to be true, because in *most* existing projects, the "reality" is what *actually* happens. *Even though* we *knew* the waypoints and destinations *beforehand*! I've had an increasingly sick, uneasy feeling at the pit of my stomach that, *that's* what *bad software architecture* looks like.

> It's quite a paradigm shift in thinking from just a year or two ago, at least for me. 

I mean, how often do you need to come in and wrestle that frontend library because of requirements changes? How often has that one tool needed to be reverse migrated off of because it just wasn't doing this, or was doing too much of that? What horrors have you heard of choosing databases not fit for purpose? What about backend tech that doesn't do any request batching whatsoever - thereby, rendering any performance enhancements *across the stack* absolutely null and void? How many times has that one off-the-shelf solution turned out to bite the team in the ass, because now the company is shelling out for something that was in fact, a core business requirement and differentiator, and that they should have just spent the initial time and budget to custom develop? Can I get a GraphQl camp-fire horror-story please? Who else is going to re-re-write away from Rust and Typescript this year? 

Well architected software is:

- Simple: Systems become easier to extend and maintain.

- Performant: Potential bottlenecks are identified early.

- Robust: The entire system doesn't get worse when you add features. 

- Less-debt: Technical debt is managed because decisions align with the *realities* of *the domain*.

You know the backend will be easy to optimize later on, because you *knew* that the best way to process requests was in batches - as that's where the bottleneck *actually was* - and so structured the API with that in mind. It adds an *adaptability*, because you *saw it* the first time around, so you designed your DAL around that res/req-batching pattern. On your second go-round, you *knew* what bit of the backend might *actually* be slow or fast in *reality* because you saw your service *actually being consumed*.

Phew. That was a mouthfull. Well. Not much else to say, so I shall now leave you with a "xeet" I lol'd at some time back:

> christina 死神
> i don't really know how to articulate this but gamedev programmers are on an entire other level to non-games programmers
> repeatedly needing to solve problems that have never existed before, because the world you’re creating them in has never existed, changes you as a person

And on that bombshell, goodnight folks! :)