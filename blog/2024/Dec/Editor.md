## I've Just Gone Down the Editor Rabbit Hole

And I'm not entirely sure I like what I've become... I've caught a bad case of Emacs.

I haven't really had any issues with VSCode for the time that I've used it. It's not particularly fast, but that's never been an issue for me. A couple of seconds to load up a big project isn't ideal, but it's whatever right? Always a good time to roll a cig, refill the mug, or do whatever. It's an Electron app anyway. Certainly faster than the hideous monstrosity that is Visual Studio, but meh.

So I mean look. VSCode was ok for the workflow I had. Some random frontend and backend that I usually ran in two terminal windows, with a third terminal window for committing, switching branches, SSH-ing into a server, whatever. 

I'd have the terminal open on the server tab with logs running, VSCode for code editing, and a browser open on the frontend or backend swagger docs or both. No issue, worked well across C# and JS and across pretty much any stack. VSCode's LSP, although annoying, works great in this use-case too.

I noticed things start to go south once I began writing out the platform layers and engine of my game. Things got very dark at this point, folks. VSCode start to slow down a great deal, with LSP confusing the hell out of it.
Type hints often broke, especially when programming against the Win32 APIs in pure c. Everything defaults to C++. The editor insists on virtual tables and other C++ garbage. I spent close to four days trying to debug an issue with DirectSound API, only to find VSCode kept interpreting my C code as C++. It just didn't understand what the hell I was trying to do, and kept pushing me down a path a had no interest in. 

As if that wasn’t bad enough, every keystroke triggered a popup of suggested code completions — all garbage. I won’t even get into the endless prompt for extension upgrades, prompts to add more extensions. It was relentless. I started to find myself fighting aspects of the code editor I hadn't even really noticed before.

I compile all my c code with simple `build.bat` and `build.sh` files. It keep shit studpidly simple and fast, and so my workflow looks something like:

- Execute build files to compile.
- Check compiler output/errors.
- Jump into VSCode to find and fix errors.
- Once fixed, re-compile and execute with debugger.

This workflow slowed down considerably when jumping around source code files. I often found myself quickly editng source code in micro and something just nano - as at least this way I could quickly bring up some code, edit, and hop out.

Terminal output became harder to read. Sure, I could tweak configs, use Fish, or switch to Zsh for prettier output, but I didn't want extra dependencies. I needed the same terminal, editor, and debugger across Windows, WSL, and Linux.

Baed on the above 4 points, my requirements were actually very simple. I ended up looking at one of either neovim, or emacs. The idea of which would be to solve the following pain points as directly and efficiently as possible:

1. **Improve my terminal experience.**
2. **Improve source code editing and navigation.**
3. **Be as complete as possible, out of the box.**
4. **Maybe I'm getting old, but gimme my editor, gimme my compiler and stay tf out my way.**

At this point, I think it makes sense to quickly clarify what disqualified the vim family for me.The first issue with vim wasn’t even the learning curve. Neovim almost felt like a must, as vanilla Vim didn’t tick my boxes. What really didn't float my boat is the NEED for additional tooling like `tmux`, to name but one of dozens. I mean, neovim is an entire IDE build around several tools. It's like the terminal version of a bloated vscode or visual studio. I later found that there is a small part of the neovim tooling you can opt for, called lazyvim (or whatever), but again - this defeats the entire purpose of have my tooling stay out of my way.

I was beyond jaded with regards to endless configs and extensibility of my tooling. I really don't need that. Props to the tinker-crew who love that stuff, but I found these things stood more in my way than not. 

Of the endless text editors I had tried, I had put off emacs probably 3 or 4 times before I finally decided to give it a go, and from the outset it completely blew my mind.

1. **Deeply built-in Terminal Integration:** without ever leaving Emacs. 
2. **Efficient Motions:** keybindings in Emacs, with a 60% keyboard like mine, are actually more efficient than compared to vim. 
3. **Minimal Configuration:** my `.emacs` file is just 10 LoC.

Out of the box, emacs provides features like `compilation-mode` and `dired` that completely changed my workflow, and I just can't see myself going back from:

- Within a few keystrokes I can run `.bat` or `.sh` scripts directly from emacs.
- View compiler errors, with syntax highlighting, and jump to the corresponding lines instantly.
- Navigate files, buffers, and multiple windows seemlessly, and extreemly quickly.

I no longer needed to open a separate terminal. Jumping around between compilation mode, dired file navigation, being able to jump quickly in and out of code for edits, or open up a new window/ buffer for those longer, grueling programming-sessions - it all works increadibly well within the overall system emacs has. Even git ops. I tend to use the eshell for this, but something like magit could effortlessly be added and orgrnically add a ton of value to my workflow - in a sleek way which I've only really realized exists thanks to emacs.  

In short, I've seen the light. Looking alone at what it provides out of the box - compilation mode, dired - it's astonishing to me, and I simply haven't been able to replicate that workflow and process across any other text/terminal or IDE, and with as little as a 10 LoC config file to boot.

A last, delightful suprize that occured to me. Maybe it's my tiny config and needs. But emacs is actually incredibly fast. There is no comparison to vscode, and I honestly don't think the vim fam is any quicker. Emacs is fast. I can only assume, bloated configs have given it a bad name.

And if there was anything I would have to say about emacs in a negative light, it would be simply that. If an 'emacs-lite' came out tomorrow, offering all of the things emacs offers, out of the box, also with a 10 LoC config file - and left out 98% of the features of emacs I don't use - I would switch in a heartbeat. 