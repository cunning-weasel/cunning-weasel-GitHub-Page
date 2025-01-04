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

Here, waypoints can mean whatever you want them to. Tests, milestones, tickets, meetings, swapping out an off-the-shelf solution for a custom built one, sprints - you name it. The point here is that this is often how most people view the process of developing and shipping software for a greenfield project. You'll hear this often thrown around with phrases like "requirements" and "use-cases" and "drill down on consumer needs". 

I'm not arguing any of this is wrong or necessarily incorrect. I'm saying that, even if the "ideal flow" happens on a particular case, what I've recently come to realize is that that's not *then* software architecture. It's following a map. It's checkpoints along a semi-known route towards a semi-known destination. There was nothing to "architect". You copypasta'd, and this same pasta - whether ideal or the reality - exists right through to post deployment bug fixes and feature back-logs.

I've recently started (read: `win32` forced me) to appreciate architecture as one that embraces a few, key traits, chief amoungst them exploration. It looks roughly similar to above, but the approach takes on an entirely different dimension. It is *proper* software architecture:

Start → Staging → Reiterate → Waypoint A → ... → Deploy

I think the biggest standout in the process outlined here, is the understanding of the problem domain, coupled with: rapid feedback, and *then* taking a second pass at the code, *before* setting the first waypoint.
I've found this aligns ssssooooo much better with real-world outcomes as well as to the end goal. The development process informs of the end goal, and the end goal doesn't dictate to the development process.

I mean, how could it? In any greenfield project in any industry-vertical, you're building something *you* haven't before, or solving problems that likely haven't been solved within the *specific* context you're trying to solve them in. So how could anyone know what the end goal *really* looks like? You hardly have a clue as to what the hell the first waypoint should even be. It's like being asked to provide an estimate as to how long it would take you to write a paper on quantum-physics. In Japanese. Knowing neither quantum-physics, nor Japanese. 

So this idea maps perfectly well onto existing projects, as one might gather. And we know this to be true, becayse in *most* existing projects, the "reality" is what *actually* happens - even though *we knew* the waypoints and destinations *beforehand*. I think, that that's what *bad* architecture looks likem, and it's starting to shape the way I move on the coding grind. It's a simple fix, that's makes things simple.

Sadly, the former is endemic in software development practises and projects, everywhere you look. How often do you need to come in and swap out that frontend library because of requirements changes? How often has that one framework needed to be reverse migrated off of because it just wasn't doing this, or was doing too much of that? What about databases? What about backend tech that doesn't do any request batching whatsoever - thereby, rendering any performance enhancements across the stack absolutely null and void - just because the backend *was never* setup for batching to begin with? How many times has that one fullstack solution turned out to bite the team in the ass because now the company is shelling out 1000's per year for something that was in fact, a core business requirement and differentiator, and that they should have just spent the time to custom develop?

Well architected software is simpler, more performant, more robust, is *doesn't get worse when you add features to it* and *seems* to keep techincal debt a little lower - or at least keep it manageable, because past decisions now *make sense*. You know multi-theading will be easy to add later on, because you knew that the server needed to process requests in batches, and that adding stubs for multi-core would aid in adding multi-core processing later because you have a sensible batching approach that does the heavy lifting. And you knew all this, *because* you explored the problem domain the first time around. On your second go-round, you *knew* what bit of the backend might actually be slow or fast to begin with. You *knew* which endpoints were hot, or which db-ops ran the longest and likely why. You had a good enough understanding of the problem domain, that even with simple exploratory code (*that runs in staging or can be tested directly*) you could design and architect it in a way that needing to add db sharding, or server threads - or whatever it may be, was either accounted for, paths were laid out to potentially add it, or it was disqualified entirely because that was a business hit that you were willing to take, given the context and specificity of you software and it's market. 

Phew. That was a mouthfull. Harder to explain that to think, for sure. Well. Not much else to say, so I shall now leave you with a "xeet":

<blockquote class="twitter-tweet" data-theme="dark"><p lang="en" dir="ltr">i don&#39;t really know how to articulate this but gamedev programmers are on an entire other level to non-games programmers<br><br>repeatedly needing to solve problems that have never existed before, because the world you&#39;re creating them in has never existed changes you as a person</p>&mdash; christina 死神 (@chhopsky) <a href="https://twitter.com/chhopsky/status/1830327881760936157?ref_src=twsrc%5Etfw">September 1, 2024</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

> And on that bombshell, goodnight folks! :)