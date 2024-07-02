## C is a Low-Level Programming Language

> "…and programmers must rely on knowing implementation details of the cache (for example, two values that are 64-byte-aligned may end up in the same cache line) to write efficient code."
> 

This is a response to an article that made its rounds a while ago, but I hadn’t gotten around to reading it until recently. While I acknowledge that the article was written with a bit of a click-bait-y, farm-y approach to get attention and that the author is quite knowledgeable in his own right, I feel there are a few aspects of it, and many things that people often get wrong about c, that I’d like to address.

In “C Is Not a Low-level Language”, the blog article author states, “The [CPU] cache is, as its name implies, hidden from the programmer and is not visible to c.” However, the author then contradicts himself, stating:

> "…and programmers must rely on knowing implementation details of the cache (for example, two values that are 64-byte-aligned may end up in the same cache line) to write efficient code."
> 

Hold up, time out. This directly contradicts the article title. Let’s be real here. There are only two types of people I know who know, let alone understand what L1, L2, and L3 cache even are. Those people are solely hardcore computer nerds/gamers/enthusiasts, or systems programmers. Seriously, there’s no one in between. 

And even so, many amazing c programmers have continually expressed a desire to be *closer* to the metal (e.g., pikuma, muratori etc.). It’s on the chip makers to expose those interfaces or open them up a bit more to allow for this direct interaction. The author mentions that GPUs achieve very high performance without any of the logic that CPUs use to keep their execution units busy running c code, and how they rely on multiple threads rather than trying to extract instruction-level parallelism from intrinsically scalar code. For the author, sadly, AMD’s FidelityFX Super Resolution (FSR), written in glorious c (as is a lot of amazing software, coincidentally) is cutting-edge, highly performant software that runs across a multitude of GPUs. Here, c seems to map to modern hardware just fine   ¯\*(ツ)*/¯. 

While on the point, since the article touches on parallel programming and memory synchronization - I’ll shout out Fleury’s ‘Multi-Threading & Mutation’ blog as a perfect example of how to approach threading in c:

> "But the much more preferable alternative, when it is indeed possible for a given problem, is to use each arena *as a per-thread bucketed allocation* (and thus *bucketed mutation*) mechanism, such that only one thread trivially accesses an arena at a time with no synchronization."
> 

…

> "..the ideal multi-threaded system, where threads execute *almost entirely* without synchronization (and thus almost entirely with read-only access to shared regions, or non-conflicting reads and writes). Using synchronization mechanisms with an arena is a compromise on that ideal. This is perfectly acceptable in many circumstances, since it may be for a *different* ideal (e.g. storing a heavy resource once, saving both memory and compute time, thus requiring synchronized access to a shared cache), but in any case, the arena implementation is *more* *flexible*, and functions well for *both cases*, when synchronization is user-defined, often resulting in no synchronization whatsoever."
> 

In my custom game engine, I use `mmap` and `VirtualAlloc` to build my own memory allocators, with arenas for memory management - for which I also write custom platform layers. I wrote my own string functions and math functions that are stupidly fast and powerful. I only ever need one `win32` and `linux` platform layer (ok and also maybe a `wasm` layer - game dev-log coming soon!) Should I choose to implement multi-threading in my game engine, I already have a good idea how memory will be managed. Honestly, things are as complex or simple as you like to make them. 
This is the portable assembly we’re talking about.