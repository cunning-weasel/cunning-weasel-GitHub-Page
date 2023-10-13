## Low level gang, dangling pointers and how I love to punish myself

There's always been something that tickled my fancy about low-level programming. Some call it systems programming, others low-level, and the last group would refer to it all as embedded (although that, again, can mean a stricter set of hardware - and an entirely different architectural paradim, but I digress).

Like many programmers before me, I fell in love with tech because of games. And games, to me, outside of a few cases like real-time, high-frequency trading platforms, real-time physics and computations a-la computer vision in self-driving cars, and a few cases of crypto mining here and there as well as high traffic distributed systems - there really isn't a better test and showcase of the hardware and software leaps we've made within the last 3 or so decades.

It often fascinated me how (pc) games would require the end-user to tune the settings - here being graphics fedelity, physics, number of objects on-screen and more - to get the exact match that run best on their desired hardware, stressing it as much as they want to achieve top performance.

And often, the telltale of optimized, well performant software in these cases, is how well you can run the software to run on your specific hardware. 

It's a far cry from the web-dev world where I dwell. I often think we've gotten too framework and library-dependant. Many programmers I know will often reach for a library or extension to achieve the same things they could if they sat down and focused on writing code for an afternoon. With some care, it can be smaller and faster than the equivalent npm package but obviously it depends.

But programming on the esp8266 and the pico has been, to an extent, the most fun I've had actually writing something fairly complex and getting it to work. I love c, so developing the pico code has me feeling like the Fresh Prince of Embedded. It's such a palet cleanser, to write c and self-host as much as possible. Think about adding stuff on the stack, maybe not heap for that - or is this where the compiler kicks me like Jazzy Jeff?

It makes me think computer-ish, I dunno. It's small, stupid fast, doesn't take space, and is about as safe as an Elephant. I would probably never use it in a production environment outside of personal projects. But it's like portable assembly. Of course you can cast types, what does actual computer care? No types in assembly. 

If I were to put it another way. In the programming world, there's a spectrum of languages that take us from the ethereal realms of high-level cargo add abstraction to the nitty-gritty confines of low-level ~~masochism~~ ~~mastery~~ fun. Some are like soaring birds, while others, slither like a speedy slug would. And right there, in the trenches, you'll find me and my beloved C, riding with the low-level gang, dancing with dangling pointers, and reveling in the art of compiler crashes and getting distracted by whatever you had to go research because you realised the problem wasn't a lack of knowledge of the framework or library you were using but a problem not understand the problems domain enough. A computer processing and logical error*.

*N.B finally figuring the error out and effeciently solving it took too long. 