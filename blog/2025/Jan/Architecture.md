## One of the biggest learnings I've taken from robust software architecture 

Software management and project discussions often circle around processes, milestones, delivering features on time, and the friction that arises when non-technical stakeholders are involved in what is, in fact, a technical undertaking. But a recent realization reshaped my perspective on the role software architecture plays here: it isn't about following a predetermined map - it's about exploring the unknown with *intent* and *adaptability*. Here's why it matters. 

Let's examine how development of a greenfield project might typically progress:

**Ideal:**
Start → Waypoint A → B → C → D → Deploy

**Reality:**
Start → Waypoint A → B → back to A → B → C → B → Deploy

These waypoints can mean whatever you want them to. Test-suites, milestones, tickets, meetings, swapping out an off-the-shelf solution for a custom built one, sprints - you name it. Point here is the messy "reality" is often, well, the *reality* of how the project progresses and ultimately gets out the door, and is a process that is laregly accepted as unavoidable. But it's worth questioning if any of the two above process genuinely constitue "software architecture" to begin with. I mean, if we're being real here, they're just following a map. You're hitting checkpoints along a known route towards a known destination. So, really, there was nothing to *"architect"*.

If you're working a greenfield project, you’re likely solving problems within a unique context — challenges that no one has faced exactly as you’re facing them. Without understanding the problem domain, how could you confidently determine the first step, let alone the end goal?

It's also not hard to see the above patterns in mature software too. We know this to be true, because in *most* live software, the "reality" is what *actually* happens, *even though* we *knew* the waypoints and destinations *beforehand*!
It's a weird feeling I haven't been able to shake since I started to program professionaly - I couldn't quite put my finger on it. I now know with certainty, that that's what *bad software architecture* looks and feels like.

And I think we all know that *feeling*.
How often do you need to come in and wrestle that library because of requirements changes?
How often has that one tool needed to be reverse migrated away from because it just wasn't doing this, or was doing too much of that?
What horrors have you heard of choosing databases not fit for the problem at hand?
What about architectural choices that render any and all performance enhancements - *across the stack* - absolutely null and void?
How many times has that one off-the-shelf solution turned out to bite the team in the ass, because now the company is shelling out for something that was a core business differentiator, and that they *should have just* spent the initial time and budget to develop in-house, or vice-versa?
Can I get a GraphQL bedtime (horror)story?
Who's next to un-rust and RE-RE-write from Rust and typescript to regular javascript this year?

I've recently started (read: `win32` forced me) to appreciate that "architect-ing" software is rooted in exploration, where value is placed on understanding the problem domain *before* locking in the steps, milestones or waypoints.

It looks more like:

Start → Staging → Reiterate → Waypoint A → ... → Deploy

In this approach, domain knowledge comes first, followed by rapid testing/ feedback and *then* taking deliberate second passes at the code, *before* deciding on what the firts waypoint is. I've found this simple tweak in thinking and approach aligns ssssooooo much better with real-world outcomes and end goals. Instead of following a map, you're creating your own path. The development process shapes the end software, not the other way around.

Now I can already hear groans and moans from the back. Y'all know who you are. All y'all PO's and PM's yelling at me

> "But we need to budget and set deadlines! How can we get approval for fiscal allocation to a project when we need to check back in on the business bottom line?"

I feeeeel you. So let me lay it out for y'all to play it out, from personal experience:

One of my past-projects was to develop a data interface. This needed to be a live PoC of how they could manage a bunch of data between multiple systems. The initial requirements suggested a standard REST api and sqlite. Through exploration of the problem domain, I found that the real need was processing thousands of data points simultaneously. Early prototying with revealed this, and so lead me to implement a message queue architecture. You know the type. Api rate limits and batches on the Db. Simple enough, and the cost of early pivot? About €6,000. The cost of a potential rewrite later? Easily €20,000+ and weeks of business disruption. Plus, my client got exactly what they needed the "first" time around.

Here's a practical example from developing my game. Initially, I created a simple setup: a Win32 platform layer and a game engine layer, compiled into a single translation unit - just `#include`-ed them right in. However, as development progressed, I realized I needed a feature similar to vite or nodemon's hot-reload functionality — but with more sophisticated state management capabilities. 
Thanks to my initial architecture choices, implementing hot-reloading was staggeringly straightforward. By compiling the game code as a DLL, I created a system that actually surpasses vite/nodemon's capabilities in many ways. This setup allows me to modify game code and data structures, compile changes, and see results instantly, all while maintaining precise control over game state with live looping. Had I chosen a different architectural approach, implementing this kind of dynamic development environment would have been *significantly* more challenging, if not practically impossible within a reasonable timeframe. I didn't even mention how I already included thread stub stucts and args to most of the code already. So when I need to, adding multi-threading will be a sinch. 

Whenever I work on or with well architected software (shoutout memcache) it's:

- Simple: Systems are easy to search, extend and maintain.

- Performant: Potential bottlenecks are identified early.

- Robust: The entire system doesn't get worse when you add features. 

- Less-debt: Technical debt is managed because decisions align with the *realities* of *the domain*.

Phew. That was a mouthfull. Might be my longest blog article yet. Well. Not much else to say, so I shall now leave you with a "xeet" I lol'd at some time back:

> i don't really know how to articulate this but gamedev programmers are on an entire other level to non-games programmers
>
> repeatedly needing to solve problems that have never existed before, because the world you're creating them in has never existed changes you as a person

> *christina 死神*

And on that bombshell, goodnight folks! :)